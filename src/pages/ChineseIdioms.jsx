import { useMemo, useState } from 'react'
import { useSpeech } from '../hooks/useSpeech'

const ALL_IDIOMS = [
  { id: 'wenjiqiwu', title: '闻鸡起舞', speech: '闻鸡起舞。祖逖和好朋友刘琨，每天听到鸡叫就起床练剑，后来都成了很厉害的人。' },
  { id: 'zaobi', title: '凿壁借光', speech: '凿壁借光。匡衡家里穷买不起灯油，就在墙上凿了个洞，借邻居家的灯光读书。' },
  { id: 'hualong', title: '画龙点睛', speech: '画龙点睛。画家张僧繇画的龙太逼真，点上眼睛后龙就飞走了。' },
  { id: 'wangmei', title: '望梅止渴', speech: '望梅止渴。曹操骗士兵说前面有梅林，大家想到梅子就不渴了。' },
  { id: 'jinggong', title: '惊弓之鸟', speech: '惊弓之鸟。更羸不用箭，只拉弓响一声，受伤的大雁就吓得掉了下来。' },
  { id: 'duiniu', title: '对牛弹琴', speech: '对牛弹琴。公明仪对老牛弹高雅的曲子，老牛只顾吃草，根本听不懂。' },
  { id: 'shouzhu', title: '守株待兔', speech: '守株待兔。农夫捡到一只撞死的兔子后，天天守在树桩边等，田地都荒废了。' },
]

// 每天轮换的"今日推荐"（按日期 hash 选）
function pickDailyFeatured(list) {
  const today = new Date()
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()
  const idx = seed % list.length
  return list[idx]
}

// 成语名按两字一行展示
const formatTitle = (title) => `${title.slice(0, 2)}\n${title.slice(2)}`

function ChineseIdioms({ onBack, onStart }) {
  const { speaking, speak } = useSpeech()
  const [playing, setPlaying] = useState(null)

  const featured = useMemo(() => pickDailyFeatured(ALL_IDIOMS), [])
  const rest = useMemo(() => ALL_IDIOMS.filter((i) => i.id !== featured.id), [featured.id])

  const play = (id, text) => {
    setPlaying(id)
    speak(text)
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
        <span className="text-sm font-semibold text-slate-600">语文 · 成语故事</span>
      </div>

      {/* 今日推荐（大图） */}
      <section className="mt-5 overflow-hidden rounded-3xl bg-gradient-to-br from-violet-500 via-indigo-500 to-fuchsia-500 p-5 text-white shadow-lg shadow-violet-200">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold">
            <span aria-hidden="true">🌟</span> 今日推荐
          </span>
          <span className="text-xs text-white/70">{new Date().toLocaleDateString('zh-CN', { month: 'long', day: 'numeric' })}</span>
        </div>

        <div className="mt-3">
          <h1 className="text-3xl font-extrabold tracking-wide">{formatTitle(featured.title)}</h1>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-white/85">
          {ALL_IDIOMS.find((i) => i.id === featured.id)?.speech?.split('。')[0]}。
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

      {/* 全部成语（6 小卡） */}
      <h2 className="mt-6 flex items-center justify-between text-sm font-bold text-slate-500">
        <span>更多故事</span>
        <span className="text-xs font-normal text-slate-400">共 {ALL_IDIOMS.length} 个</span>
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
  )
}

export default ChineseIdioms
