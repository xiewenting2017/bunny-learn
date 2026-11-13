import { useMemo, useState } from 'react'
import { useSpeech } from '../hooks/useSpeech'

// 每个成语标注属于哪个年级的哪一册
// 按小学语文教材大纲：
//   一年级上册：主要是儿歌、简单识字，成语少
//   一年级下册：开始出现简单成语故事
//   二年级上册：成语故事正式进入课文
//   二年级下册：更多历史典故成语
const ALL_IDIOMS = [
  // ── 一年级下册 ──
  { id: 'wenjiqiwu', title: '闻鸡起舞', grade: '一年级下册', speech: '闻鸡起舞。祖逖和好朋友刘琨，每天听到鸡叫就起床练剑，后来都成了很厉害的人。' },
  { id: 'duiniu', title: '对牛弹琴', grade: '一年级下册', speech: '对牛弹琴。公明仪对老牛弹高雅的曲子，老牛只顾吃草，根本听不懂。' },

  // ── 二年级上册 ──
  { id: 'zaobi', title: '凿壁借光', grade: '二年级上册', speech: '凿壁借光。匡衡家里穷买不起灯油，就在墙上凿了个洞，借邻居家的灯光读书。' },
  { id: 'hualong', title: '画龙点睛', grade: '二年级上册', speech: '画龙点睛。画家张僧繇画的龙太逼真，点上眼睛后龙就飞走了。' },
  { id: 'wangmei', title: '望梅止渴', grade: '二年级上册', speech: '望梅止渴。曹操骗士兵说前面有梅林，大家想到梅子就不渴了。' },

  // ── 二年级下册 ──
  { id: 'jinggong', title: '惊弓之鸟', grade: '二年级下册', speech: '惊弓之鸟。更羸不用箭，只拉弓响一声，受伤的大雁就吓得掉了下来。' },
  { id: 'shouzhu', title: '守株待兔', grade: '二年级下册', speech: '守株待兔。农夫捡到一只撞死的兔子后，天天守在树桩边等，田地都荒废了。' },
]

// 根据 App 传来的 grade prop 得出可显示的册次列表
function getVisibleGrades(grade) {
  if (grade === 'grade-2') return ['二年级上册', '二年级下册']
  return ['一年级上册', '一年级下册'] // 一年级只有下册有成语，但 tab 保留
}

// 成语名按两字一行展示
const formatTitle = (title) => `${title.slice(0, 2)}\n${title.slice(2)}`

function ChineseIdioms({ grade, onBack, onStart }) {
  const { speaking, speak } = useSpeech()
  const [playing, setPlaying] = useState(null)

  const visibleGrades = useMemo(() => getVisibleGrades(grade), [grade])
  const [activeBook, setActiveBook] = useState(visibleGrades[0])

  // 该册下的成语
  const filtered = useMemo(
    () => ALL_IDIOMS.filter((i) => i.grade === activeBook),
    [activeBook],
  )

  // 如果选中的册次没有成语，自动切到第一个有内容的册次
  const safeBook = useMemo(() => {
    if (filtered.length > 0) return activeBook
    const firstWithContent = visibleGrades.find((g) =>
      ALL_IDIOMS.some((i) => i.grade === g),
    )
    return firstWithContent ?? activeBook
  }, [activeBook, filtered.length, visibleGrades])

  const displayList = useMemo(
    () => ALL_IDIOMS.filter((i) => i.grade === safeBook),
    [safeBook],
  )

  // 今日推荐（从该册成语里选）
  const featured = useMemo(() => {
    if (displayList.length === 0) return null
    const today = new Date()
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()
    return displayList[seed % displayList.length]
  }, [displayList])

  const rest = useMemo(
    () => displayList.filter((i) => featured && i.id !== featured.id),
    [displayList, featured],
  )

  const gradeLabel = grade === 'grade-2' ? '二年级' : '一年级'

  const play = (id, text) => {
    setPlaying(id)
    speak(text)
  }

  // 没有成语 → 占位
  if (displayList.length === 0) {
    return (
      <>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1 rounded-full px-2 py-1.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <span aria-hidden="true">←</span> 返回
          </button>
          <span className="text-sm font-semibold text-slate-600">语文 · 成语故事</span>
        </div>
        <div className="mt-10 rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center">
          <div className="text-4xl">📚</div>
          <p className="mt-3 text-sm font-semibold text-slate-600">
            {gradeLabel}上册的成语故事正在准备中
          </p>
          <p className="mt-1 text-xs text-slate-400">
            试试切换到下册看看吧～
          </p>
        </div>
      </>
    )
  }

  return (
    <>
      {/* 顶部栏 */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1 rounded-full px-2 py-1.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 active:scale-95"
        >
          <span aria-hidden="true">←</span> 返回
        </button>
        <span className="h-4 w-px bg-slate-200" aria-hidden="true" />
        <span className="text-sm font-semibold text-slate-600">语文 · {gradeLabel} · 成语故事</span>
      </div>

      {/* 上/下册 tab */}
      <div
        role="tablist"
        className="mt-4 flex gap-1 rounded-full bg-slate-100 p-1"
      >
        {visibleGrades.map((g) => {
          const active = g === safeBook
          const hasContent = ALL_IDIOMS.some((i) => i.grade === g)
          return (
            <button
              key={g}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setActiveBook(g)}
              className={`relative flex-1 rounded-full py-1.5 text-sm font-semibold transition ${
                active
                  ? 'bg-white text-violet-600 shadow-sm'
                  : hasContent
                    ? 'text-slate-500 hover:text-slate-700'
                    : 'text-slate-300'
              }`}
            >
              {g.replace('一年级', '').replace('二年级', '')}
              {!hasContent && (
                <span className="ml-1 text-[10px] font-normal opacity-60">敬请期待</span>
              )}
            </button>
          )
        })}
      </div>

      {/* 今日推荐（大图） */}
      {featured && (
        <section className="mt-5 overflow-hidden rounded-3xl bg-gradient-to-br from-violet-500 via-indigo-500 to-fuchsia-500 p-5 text-white shadow-lg shadow-violet-200">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold">
              <span aria-hidden="true">🌟</span> 今日推荐
            </span>
          </div>

          <div className="mt-3">
            <h1 className="text-3xl font-extrabold tracking-wide">{formatTitle(featured.title)}</h1>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-white/85">
            {featured.speech.split('。')[0]}。
          </p>

          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              onClick={() => play(featured.id, featured.speech)}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-2 text-sm font-medium transition hover:bg-white/30 active:scale-95"
            >
              <span aria-hidden="true">{playing === featured.id ? '🔊' : '🔈'}</span>
              {playing === featured.id ? '播放中…' : '听故事'}
            </button>
            <button
              type="button"
              onClick={() => onStart(featured)}
              className="ml-auto inline-flex items-center gap-1 rounded-full bg-white px-5 py-2 text-sm font-bold text-violet-600 shadow transition hover:bg-violet-50 active:scale-95"
            >
              开始 →
            </button>
          </div>
        </section>
      )}

      {/* 该册下的其他成语 */}
      {rest.length > 0 && (
        <>
          <h2 className="mt-6 flex items-center justify-between text-sm font-bold text-slate-500">
            <span>{safeBook} · 更多故事</span>
            <span className="text-xs font-normal text-slate-400">共 {displayList.length} 个</span>
          </h2>

          <div className="mt-3 grid grid-cols-3 gap-3">
            {rest.map((idiom) => (
              <button
                key={idiom.id}
                type="button"
                onClick={() => onStart(idiom)}
                className="group relative flex min-h-[90px] flex-col items-center justify-center gap-1 rounded-2xl border-2 border-slate-200 bg-white px-2 py-2 text-center transition hover:border-violet-300 hover:bg-violet-50/50 active:scale-[0.98]"
              >
                <span className="whitespace-pre-line text-base font-bold leading-tight text-slate-700">
                  {formatTitle(idiom.title)}
                </span>
                <span
                  role="button"
                  aria-label={`播放${idiom.title}的故事`}
                  onClick={(e) => {
                    e.stopPropagation()
                    play(idiom.id, idiom.speech)
                  }}
                  className={`mt-1 flex h-6 w-6 items-center justify-center rounded-full transition ${
                    playing === idiom.id ? 'bg-violet-500 text-white' : 'bg-violet-50 text-violet-400 group-hover:bg-violet-100'
                  }`}
                >
                  <span className="text-[10px]">{playing === idiom.id ? '🔊' : '🔈'}</span>
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default ChineseIdioms
