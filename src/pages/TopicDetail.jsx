import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getTopic } from '../data/curriculum'
import { getTopicBank } from '../data/questionBankLoader'
import { pickBestChineseVoice } from '../hooks/useSpeech'
import { throttle } from '../utils/debounce'

// 选项视觉状态 —— 每种状态配一个字母标签色 + 背景 + ring
// idle: 未选 → 等待点击
// hover: 悬停时（鼠标/手指按下前）
// picked: 用户点了但还没判断（这个页面点了立刻判断，所以实际用不到）
// correct: 答对了 → 亮绿 + ✓
// wrong: 答错了 → 亮红 + ✕
// muted: 答对后其他选项变暗
const LETTER_LABELS = ['A', 'B', 'C', 'D', 'E']

function TopicDetail() {
  const { subject, id } = useParams()
  const navigate = useNavigate()
  const topic = getTopic(subject, id)

  const [bank, setBank] = useState(null)     // 题库里该知识点的记录
  const [question, setQuestion] = useState(null)  // 当前展示的那道题
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [answer, setAnswer] = useState(null)
  const [lastRawResponse, setLastRawResponse] = useState(null)
  const [currentIdx, setCurrentIdx] = useState(0)  // 当前是第几轮（0-based）
  const [roundDone, setRoundDone] = useState(false)  // 一整轮做完了
  const [ttsPlaying, setTtsPlaying] = useState(false)
  const [toast, setToast] = useState('')

  // 每次开始/停止朗读都会递增，用于丢弃旧朗读的回调
  const ttsTokenRef = useRef(0)
  const toastTimerRef = useRef(null)
  const loadKeyRef = useRef(null)

  // 页面内轻提示（替代 alert）
  const showToast = useCallback((message) => {
    setToast(message)
    clearTimeout(toastTimerRef.current)
    toastTimerRef.current = setTimeout(() => setToast(''), 2600)
  }, [])

  useEffect(() => () => clearTimeout(toastTimerRef.current), [])

  // 按顺序轮询：round-robin，0→1→2→3→4→0（回到0时触发 roundDone）
  const goToNext = useCallback((record) => {
    setCurrentIdx((prev) => {
      const next = prev + 1
      // 最后一道（len-1）跳回第一道（0）→ 一轮结束
      if (next >= record.questions.length) {
        setRoundDone(true)
        setQuestion(record.questions[0])
        return 0
      }
      setQuestion(record.questions[next])
      return next
    })
  }, [])

  // 加载知识点内容
  useEffect(() => {
    const current = getTopic(subject, id)
    const requestKey = `${subject}::${id}`

    if (!current) {
      setLoading(false)
      setError('没有找到这个知识点')
      return
    }

    let cancelled = false
    loadKeyRef.current = requestKey
    setLoading(true)
    setError('')
    setQuestion(null)
    setAnswer(null)

    getTopicBank(current.id)
      .then((record) => {
        if (cancelled || loadKeyRef.current !== requestKey) return

        if (!record) {
          setError(
            `本题库里还没有「${current.name}」的题目，请先运行 generateScript.js 生成`,
          )
          return
        }

        if (!record.questions?.length) {
          setError(`「${current.name}」的题库为空`)
          return
        }

        setBank(record)
        setLastRawResponse(record)
        setCurrentIdx(0)
        setRoundDone(false)
        setQuestion(record.questions[0])
      })
      .catch((err) => {
        if (cancelled || loadKeyRef.current !== requestKey) return
        console.error('[TopicDetail] 题库加载失败:', err)
        setError(err.message)
      })
      .finally(() => {
        if (!cancelled && loadKeyRef.current === requestKey) setLoading(false)
      })

    return () => { cancelled = true }
  }, [subject, id])

  // "换一道题" —— 节流处理（500ms），防止快速连点
  const handleNext = useCallback(
    throttle(() => {
      if (!bank) return
      setAnswer(null)
      goToNext(bank)
    }, 500),
    [bank, goToNext],
  )

  if (!topic) {
    return (
      <div className="mt-16 flex flex-col items-center text-center">
        <div className="text-5xl" aria-hidden="true">
          🐰
        </div>
        <h1 className="mt-4 text-lg font-bold text-slate-800">
          没有找到这个知识点
        </h1>
        <p className="mt-2 text-sm text-slate-400">回去换一个知识点试试吧～</p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="mt-6 w-full rounded-full bg-violet-500 py-3.5 text-base font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-600 active:scale-[0.98]"
        >
          返回科目列表
        </button>
      </div>
    )
  }

  // 优先返回浏览器上一页；直接打开链接时回到对应科目的知识点列表
  const goBackToSubject = () => {
    if (window.history.state?.idx > 0) {
      navigate(-1)
      return
    }

    navigate('/', {
      state: {
        restoreSubject: { id: subject, name: topic.subjectName },
      },
    })
  }

  const isCorrect = Boolean(question) && answer === question.answer

  // 【开发期调试用】点击后在控制台打印当前 AI 返回的原始数据
  const handleReportContent = () => {
    if (!lastRawResponse) {
      console.warn('[TopicDetail] 当前没有可打印的原始数据')
      return
    }
    console.log('🐰 === AI 原始数据（仅供开发调试）===')
    console.log('学科:', topic?.subjectName, '| 年级:', '一年级', '| 知识点:', topic?.name)
    console.log(JSON.stringify(lastRawResponse, null, 2))
    console.log('🐰 ==========================================')
    // eslint-disable-next-line no-alert
    alert('已在浏览器控制台打印 AI 原始数据，请按 F12 查看 🐰')
  }

  // 切换朗读：使用浏览器原生 Web Speech API（zh-CN，语速放慢到 0.8）
  const handleToggleTTS = useCallback(() => {
    const text = bank?.explanation?.trim()
    if (!text) return

    // 浏览器不支持或被禁用 → 页面内 Toast，不用 alert
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      showToast('当前浏览器不支持语音朗读')
      return
    }

    // 正在朗读 → 点一下停止
    if (ttsPlaying || window.speechSynthesis.speaking) {
      ttsTokenRef.current += 1
      window.speechSynthesis.cancel()
      setTtsPlaying(false)
      return
    }

    const token = ++ttsTokenRef.current
    window.speechSynthesis.cancel()

    // 按标点切句，避免 Chrome 长文本朗读被截断
    const chunks = (text.match(/[^。！？；!?;\n]+[。！？；!?;]?/g) ?? [text])
      .map((s) => s.trim())
      .filter(Boolean)

    let index = 0

    const speakNext = () => {
      if (ttsTokenRef.current !== token) return
      if (index >= chunks.length) {
        setTtsPlaying(false)
        return
      }

      const utterance = new SpeechSynthesisUtterance(chunks[index++])
      utterance.lang = 'zh-CN'
      const voice = pickBestChineseVoice()
      if (voice) utterance.voice = voice
      utterance.rate = 0.8   // 慢一点，适合小朋友
      utterance.pitch = 1.0

      utterance.onstart = () => {
        if (ttsTokenRef.current === token) setTtsPlaying(true)
      }
      utterance.onend = speakNext
      utterance.onerror = (event) => {
        if (ttsTokenRef.current !== token) return
        // 主动 cancel 会触发 canceled/interrupted，属于正常停止
        if (event?.error === 'canceled' || event?.error === 'interrupted') return
        setTtsPlaying(false)
        if (event?.error === 'not-allowed' || event?.error === 'not-supported') {
          showToast('当前浏览器不支持语音朗读')
        } else {
          showToast('语音播放失败，请稍后再试')
        }
      }

      window.speechSynthesis.speak(utterance)
    }

    speakNext()
  }, [bank?.explanation, ttsPlaying, showToast])

  // 切换讲解内容（换知识点/换题）时，停止正在朗读的语音
  useEffect(() => {
    ttsTokenRef.current += 1
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
    }
    setTtsPlaying(false)
  }, [topic?.id, currentIdx])

  // 离开页面时停止朗读
  useEffect(() => {
    return () => {
      ttsTokenRef.current += 1
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  return (
    <>
      {/* 顶部轻提示 Toast（替代 alert） */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full bg-slate-800/90 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-slate-900/20 backdrop-blur"
        >
          {toast}
        </div>
      )}

      {/* 顶部栏 */}
      <div className="grid grid-cols-3 items-center">
        <button
          type="button"
          onClick={goBackToSubject}
          className="justify-self-start inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-1.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
        >
          <span aria-hidden="true">←</span> 返回{topic.subjectName}
        </button>
        <span className="justify-self-center text-sm font-semibold text-slate-600">
            小老师课堂
          </span>
        <span className="justify-self-end text-xs font-semibold text-slate-400">
          {topic.subjectName}
        </span>
      </div>

      {/* 知识点标题 */}
      <div className="mt-4">
        <h1 className="text-xl font-bold text-slate-800">{topic.name}</h1>
        <p className="mt-0.5 text-xs text-slate-400">
          {topic.grade} · {topic.module}
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div
          role="status"
          aria-live="polite"
          className="mt-10 flex flex-col items-center"
        >
          <span
            className="h-9 w-9 animate-spin rounded-full border-[3px] border-violet-100 border-t-violet-500"
            aria-hidden="true"
          />
          <p className="mt-3 text-sm font-semibold text-violet-600">
            正在加载题库…
          </p>
          <div className="mt-5 w-full space-y-2">
            <div className="h-3 w-full animate-pulse rounded-full bg-slate-100" />
            <div className="h-3 w-4/5 animate-pulse rounded-full bg-slate-100" />
            <div className="h-3 w-3/5 animate-pulse rounded-full bg-slate-100" />
          </div>
        </div>
      )}

      {/* 生成失败 */}
      {!loading && error && (
        <div className="mt-10 rounded-2xl bg-rose-50 px-4 py-6 text-center ring-1 ring-rose-100">
          <div className="text-4xl" aria-hidden="true">
            🐰
          </div>
          <p className="mt-3 text-sm font-bold text-slate-700">
            网络开小差了，请重试
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-400">{error}</p>
          <button
            type="button"
            onClick={handleNext}
            className="mt-4 rounded-full bg-violet-500 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-violet-200 transition hover:bg-violet-600 active:scale-95"
          >
            换一道试试
          </button>
          {lastRawResponse && (
            <button
              type="button"
              onClick={handleReportContent}
              className="ml-2 mt-4 rounded-full bg-slate-100 px-4 py-2.5 text-xs font-semibold text-slate-500 transition hover:bg-slate-200 active:scale-95"
              title="开发期调试：打印 AI 原始数据到控制台"
            >
              🐰 内容报错
            </button>
          )}
        </div>
      )}

      {/* 题库内容 */}
      {!loading && bank && question && (
        <>
          {/* ① 讲解卡 */}
          <section className="mt-4 overflow-hidden rounded-3xl bg-gradient-to-br from-sky-100 via-violet-100 to-fuchsia-100 p-4 shadow-sm ring-1 ring-violet-100/60">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/80 text-sm shadow-sm">
                  📖
                </span>
                <p className="text-[11px] font-bold tracking-wider text-violet-600">
                  小老师讲一讲
                </p>
              </div>

              {/* 🔊 语音朗读按钮 */}
              <button
                type="button"
                onClick={handleToggleTTS}
                aria-label={ttsPlaying ? '停止朗读' : '朗读讲解'}
                className={`group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold transition active:scale-95 ${
                  ttsPlaying
                    ? 'bg-violet-500 text-white shadow-md shadow-violet-300/60'
                    : 'bg-white/80 text-violet-600 ring-1 ring-violet-200 hover:bg-violet-50'
                }`}
              >
                {ttsPlaying ? '🎵 正在朗读…' : '🔊 听语音'}
              </button>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
              {bank.explanation}
            </p>
          </section>

          {/* ② 题目卡 */}
          <section className="mt-4 rounded-3xl bg-white p-5 shadow-md shadow-slate-200/60 ring-1 ring-slate-100">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2.5 py-1 text-[11px] font-bold text-violet-600 ring-1 ring-violet-100">
                ✏️ 练一练
              </span>
              <span className="text-[11px] text-slate-300">
                {currentIdx + 1} / {bank.questions.length}
              </span>
            </div>

            <p className="mt-3 text-[16px] font-semibold leading-relaxed text-slate-800">
              {question.question}
            </p>

            {/* 选项 */}
            <div className="mt-4 space-y-3">
              {question.options.map((option, idx) => {
                const letter = LETTER_LABELS[idx] ?? String(idx + 1)
                const isChosen = answer === option
                const correctAnswer = question.answer
                const showVerdict = answer !== null  // 已经做出选择了吗
                const isCorrect = showVerdict && option === correctAnswer
                const isWrongPick = showVerdict && isChosen && option !== correctAnswer

                // 字母标签颜色
                let letterBg = 'bg-slate-100 text-slate-500'
                if (showVerdict) {
                  if (isCorrect) letterBg = 'bg-emerald-500 text-white'
                  else if (isWrongPick) letterBg = 'bg-rose-500 text-white'
                  else letterBg = 'bg-slate-100 text-slate-400'
                }

                // 整条按钮样式
                let btnClass =
                  'group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-150 active:scale-[0.98]'
                if (showVerdict) {
                  if (isCorrect) {
                    btnClass += ' bg-emerald-50 ring-2 ring-emerald-300 shadow-sm'
                  } else if (isWrongPick) {
                    btnClass += ' bg-rose-50 ring-2 ring-rose-300 shadow-sm'
                  } else {
                    btnClass += ' bg-slate-50 ring-1 ring-slate-100 opacity-60'
                  }
                } else {
                  btnClass +=
                    ' bg-white ring-2 ring-slate-100 hover:ring-violet-300 hover:bg-violet-50 active:ring-violet-400 cursor-pointer'
                }

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => !showVerdict && setAnswer(option)}
                    disabled={showVerdict}
                    aria-pressed={isChosen}
                    className={btnClass}
                  >
                    {/* 字母标签 */}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-150 ${letterBg}`}
                    >
                      {letter}
                    </span>

                    {/* 选项文字 */}
                    <span
                      className={`flex-1 text-[15px] font-medium ${
                        showVerdict && isCorrect
                          ? 'text-emerald-700 font-semibold'
                          : showVerdict && isWrongPick
                            ? 'text-rose-600'
                            : 'text-slate-700'
                      }`}
                    >
                      {option}
                    </span>

                    {/* 右侧图标 */}
                    {showVerdict && isCorrect && (
                      <span className="shrink-0 text-xl" aria-hidden="true">
                        ✅
                      </span>
                    )}
                    {showVerdict && isWrongPick && (
                      <span className="shrink-0 text-xl" aria-hidden="true">
                        ❌
                      </span>
                    )}
                    {!showVerdict && (
                      <span
                        className="shrink-0 text-slate-300 transition-colors group-hover:text-violet-400"
                        aria-hidden="true"
                      >
                        ›
                      </span>
                    )}
                  </button>
                )
              })}
            </div>

            {/* 结果反馈 */}
            {answer !== null && (
              <div
                className={`mt-4 rounded-2xl p-4 text-center ring-1 ${
                  answer === question.answer
                    ? 'bg-emerald-50 ring-emerald-200'
                    : 'bg-amber-50 ring-amber-200'
                }`}
              >
                {answer === question.answer ? (
                  <>
                    <div className="text-3xl" aria-hidden="true">
                      🎉
                    </div>
                    <p className="mt-1 text-sm font-bold text-emerald-700">
                      太棒啦，答对了！
                    </p>
                  </>
                ) : (
                  <>
                    <div className="text-3xl" aria-hidden="true">
                      💪
                    </div>
                    <p className="mt-1 text-sm font-bold text-amber-700">
                      没关系，再想一想
                    </p>
                    <p className="mt-1 text-xs text-amber-600">
                      正确答案是：
                      <span className="font-bold">{question.answer}</span>
                    </p>
                    {question.hint && (
                      <p className="mt-2 rounded-xl bg-white/60 px-3 py-2 text-xs text-amber-700">
                        💡 {question.hint}
                      </p>
                    )}
                  </>
                )}
              </div>
            )}
          </section>

          {/* ③ 操作区 */}
          {roundDone ? (
            // ✅ 一整轮做完的引导卡
            <div className="mt-5 rounded-3xl bg-gradient-to-br from-amber-50 via-emerald-50 to-sky-50 p-5 text-center ring-1 ring-emerald-100">
              <div className="text-4xl" aria-hidden="true">🎉</div>
              <p className="mt-2 text-sm font-bold text-emerald-700">
                太棒啦，{bank.questions.length} 道题都做完啦！
              </p>
              <p className="mt-1 text-xs text-slate-500">
                你已经完整练习了「{topic.name}」
              </p>
              <div className="mt-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => { setRoundDone(false); setAnswer(null); setCurrentIdx(-1); }}
                  className="flex-1 rounded-full bg-white py-3 text-sm font-bold text-violet-600 ring-1 ring-violet-200 transition hover:bg-violet-50 active:scale-[0.98]"
                >
                  再做一遍 🔄
                </button>
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="flex-1 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 py-3 text-sm font-bold text-white shadow-md shadow-violet-200/60 transition hover:from-violet-600 hover:to-sky-600 active:scale-[0.98]"
                >
                  返回列表 →
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-4 flex items-center gap-2">
              <button
                type="button"
                onClick={handleNext}
                disabled={!bank}
                className="flex-1 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200/60 transition hover:from-violet-600 hover:to-sky-600 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                换一道题 →
              </button>
              <button
                type="button"
                onClick={handleReportContent}
                className="shrink-0 rounded-full bg-slate-100 px-3 py-2.5 text-[11px] font-semibold text-slate-400 transition hover:bg-slate-200 hover:text-slate-500 active:scale-95"
                title="开发期调试：打印当前题库记录到控制台"
              >
                🐰 报错
              </button>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default TopicDetail
