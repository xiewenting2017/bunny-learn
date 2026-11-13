import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { knowledgeData } from '../data/knowledgeData'
import { getRandomQuestion } from '../data/questionBankLoader'
import { throttle } from '../utils/debounce'

const OPTION_TONES = {
  idle: 'bg-slate-50 text-slate-600 ring-slate-100 hover:bg-violet-50 hover:ring-violet-200',
  correct: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  muted: 'bg-slate-50 text-slate-400 ring-slate-100',
  wrong: 'bg-rose-50 text-rose-600 ring-rose-200',
}

function PracticePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const knowledge = knowledgeData.find((item) => item.id === id)

  const [answers, setAnswers] = useState({})
  const [aiQuestion, setAiQuestion] = useState(null)
  const [aiAnswer, setAiAnswer] = useState(null)
  const [aiLoading, setAiLoading] = useState(true)
  const [aiFailed, setAiFailed] = useState(false)

  // 防止 StrictMode 双触发
  const loadKeyRef = useRef(null)

  const loadQuestion = useCallback((topicId) => {
    const requestKey = `${topicId}::${Date.now()}`
    loadKeyRef.current = requestKey
    setAiLoading(true)
    setAiFailed(false)
    setAiQuestion(null)
    setAiAnswer(null)

    let cancelled = false
    getRandomQuestion(topicId)
      .then((q) => {
        if (cancelled || loadKeyRef.current !== requestKey) return
        if (!q) { setAiFailed(true); return }
        setAiQuestion(q)
      })
      .catch(() => {
        if (!cancelled && loadKeyRef.current === requestKey) setAiFailed(true)
      })
      .finally(() => {
        if (!cancelled && loadKeyRef.current === requestKey) setAiLoading(false)
      })

    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    const current = knowledgeData.find((item) => item.id === id)
    if (!current) { setAiLoading(false); return }
    const cleanup = loadQuestion(current.id)
    return cleanup
  }, [id, loadQuestion])

  // "换一道" —— 节流 500ms，防止快速连点
  const handleNext = useCallback(
    throttle(() => {
      if (!knowledge) return
      loadQuestion(knowledge.id)
    }, 500),
    [knowledge, loadQuestion],
  )

  if (!knowledge) {
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
          回到首页
        </button>
      </div>
    )
  }

  const correctCount = knowledge.practice.filter(
    (item, index) => answers[index] === item.answer,
  ).length
  const allCorrect = correctCount === knowledge.practice.length

  const choose = (questionIndex, option) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: option }))
  }

  const aiCorrect = aiAnswer === aiQuestion?.answer

  return (
    <>
      {/* 顶部栏 */}
      <div className="grid grid-cols-3 items-center">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="justify-self-start inline-flex items-center gap-1 rounded-full px-2 py-1.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
        >
          <span aria-hidden="true">←</span> 返回
        </button>
        <span className="justify-self-center text-sm font-semibold text-slate-600">
          练一练
        </span>
        <span className="justify-self-end text-sm font-semibold text-slate-400">
          答对 {correctCount} / {knowledge.practice.length}
        </span>
      </div>

      {/* 知识点信息 */}
      <div className="mt-5">
        <h1 className="text-xl font-bold text-slate-800">{knowledge.name}</h1>
        <p className="mt-0.5 text-xs text-slate-400">
          {knowledge.grade} · {knowledge.module}
        </p>
        <p className="mt-3 rounded-2xl bg-violet-50 px-4 py-3 text-sm leading-relaxed text-slate-600 ring-1 ring-violet-100">
          {knowledge.description}
        </p>
      </div>

      {/* AI 出题 */}
      {aiLoading && (
        <div
          role="status"
          aria-live="polite"
          className="mt-4 rounded-2xl bg-violet-50 p-4 ring-1 ring-violet-100"
        >
          <div className="flex items-center gap-2 text-sm font-semibold text-violet-600">
            <span
              className="h-4 w-4 animate-spin rounded-full border-2 border-violet-200 border-t-violet-500"
              aria-hidden="true"
            />
            从题库抽题中…
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-3 w-4/5 animate-pulse rounded-full bg-violet-100" />
            <div className="h-3 w-3/5 animate-pulse rounded-full bg-violet-100" />
          </div>
        </div>
      )}

      {!aiLoading && aiQuestion && (
        <article className="mt-4 rounded-2xl bg-gradient-to-br from-violet-50 to-sky-50 p-4 ring-1 ring-violet-100">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-violet-500">
              ✨ 题库新题
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-violet-500 ring-1 ring-violet-100 transition hover:bg-white active:scale-95"
            >
              换一道
            </button>
          </div>

          <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-700">
            {aiQuestion.question}
          </p>

          <div className="mt-3 space-y-2">
            {aiQuestion.options.map((option) => {
              const isChosen = aiAnswer === option
              let tone = OPTION_TONES.idle

              if (aiCorrect) {
                tone = isChosen ? OPTION_TONES.correct : OPTION_TONES.muted
              } else if (isChosen) {
                tone = OPTION_TONES.wrong
              }

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setAiAnswer(option)}
                  disabled={aiCorrect}
                  aria-pressed={isChosen}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left text-sm font-medium ring-1 transition active:scale-[0.99] disabled:cursor-default ${tone}`}
                >
                  {option}
                  {isChosen && (
                    <span aria-hidden="true">{aiCorrect ? '✓' : '✕'}</span>
                  )}
                </button>
              )
            })}
          </div>

          {aiAnswer && (
            <p
              className={`mt-2 text-xs font-semibold ${
                aiCorrect ? 'text-emerald-600' : 'text-rose-500'
              }`}
            >
              {aiCorrect
                ? '答对啦！🎉'
                : aiQuestion.hint || '再想一想哦～'}
            </p>
          )}
        </article>
      )}

      {!aiLoading && aiFailed && (
        <p className="mt-3 text-[11px] text-slate-400">
          题库里还没有这道知识点的额外题，先做下面的吧～
        </p>
      )}

      {/* 题目卡片 */}
      <div className="mt-4 space-y-3">
        {knowledge.practice.map((item, questionIndex) => {
          const chosen = answers[questionIndex]
          const isCorrect = chosen === item.answer

          return (
            <article
              key={item.question}
              className="rounded-2xl bg-white p-4 ring-1 ring-slate-100"
            >
              <p className="text-sm font-semibold leading-relaxed text-slate-700">
                <span className="mr-1 text-violet-400">{questionIndex + 1}.</span>
                {item.question}
              </p>

              <div className="mt-3 space-y-2">
                {item.options.map((option) => {
                  const isChosen = chosen === option
                  let tone = OPTION_TONES.idle

                  if (isCorrect) {
                    tone = isChosen ? OPTION_TONES.correct : OPTION_TONES.muted
                  } else if (isChosen) {
                    tone = OPTION_TONES.wrong
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => choose(questionIndex, option)}
                      disabled={isCorrect}
                      aria-pressed={isChosen}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left text-sm font-medium ring-1 transition active:scale-[0.99] disabled:cursor-default ${tone}`}
                    >
                      {option}
                      {isChosen && (
                        <span aria-hidden="true">{isCorrect ? '✓' : '✕'}</span>
                      )}
                    </button>
                  )
                })}
              </div>

              {chosen && (
                <p
                  className={`mt-2 text-xs font-semibold ${
                    isCorrect ? 'text-emerald-600' : 'text-rose-500'
                  }`}
                >
                  {isCorrect ? '答对啦！🎉' : '再想一想哦～'}
                </p>
              )}
            </article>
          )
        })}
      </div>

      {allCorrect && (
        <div className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-center text-sm font-bold text-emerald-600 ring-1 ring-emerald-100">
          🎉 太棒啦！这组题全部答对！
        </div>
      )}
    </>
  )
}

export default PracticePage
