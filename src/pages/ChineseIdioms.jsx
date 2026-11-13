import { useEffect, useState } from 'react'
import { useSpeech } from '../hooks/useSpeech'

const RECOMMENDED = {
  id: 'wenjiqiwu',
  title: '闻鸡起舞',
  desc: '一个小哥哥每天早起练剑，后来成了很厉害的将军。',
  speech: '闻鸡起舞。一个小哥哥每天早起练剑，后来成了很厉害的将军。',
}

const IDIOMS = [
  {
    id: 'zaobi',
    title: '凿壁借光',
    speech: '凿壁借光。借邻居家的灯光读书，形容学习非常刻苦。',
  },
  {
    id: 'hualong',
    title: '画龙点睛',
    speech: '画龙点睛。画龙时点上眼睛，比喻关键的一笔让整件事活了起来。',
  },
  {
    id: 'wangmei',
    title: '望梅止渴',
    speech: '望梅止渴。用想象中的梅子来解渴，比喻用空想来安慰自己。',
  },
  {
    id: 'jinggong',
    title: '惊弓之鸟',
    speech: '惊弓之鸟。被弓箭吓怕的鸟，比喻受过惊吓、遇到一点动静就害怕。',
  },
  {
    id: 'duiniu',
    title: '对牛弹琴',
    speech: '对牛弹琴。对着牛弹琴，比喻对不懂的人讲道理，白费口舌。',
  },
]

// 成语名按两字一行展示，和线框图一致
const formatTitle = (title) => `${title.slice(0, 2)}\n${title.slice(2)}`

function ChineseIdioms({ onBack, onStart }) {
  const { speaking, speak } = useSpeech()
  const [playing, setPlaying] = useState(null)

  useEffect(() => {
    if (!speaking) setPlaying(null)
  }, [speaking])

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
          className="inline-flex items-center gap-1 rounded-full px-2 py-1.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
        >
          <span aria-hidden="true">←</span> 返回
        </button>
        <span className="h-4 w-px bg-slate-200" aria-hidden="true" />
        <span className="text-sm font-semibold text-slate-600">语文 · 成语故事</span>
      </div>

      {/* 今日推荐 */}
      <section className="mt-5 rounded-3xl bg-gradient-to-br from-violet-500 to-indigo-500 p-5 text-white shadow-lg shadow-violet-200">
        <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold">
          <span aria-hidden="true">🌟</span> 今日推荐
        </span>
        <h1 className="mt-3 text-2xl font-bold">{RECOMMENDED.title}</h1>
        <p className="mt-1 text-sm leading-relaxed text-white/80">
          {RECOMMENDED.desc}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <button
            type="button"
            onClick={() => play(RECOMMENDED.id, RECOMMENDED.speech)}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-2 text-sm font-medium transition hover:bg-white/30 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span aria-hidden="true">
              {playing === RECOMMENDED.id ? '🔊' : '🔈'}
            </span>
            {playing === RECOMMENDED.id ? '播放中…' : '听故事'}
          </button>
          <button
            type="button"
            onClick={() => onStart(RECOMMENDED)}
            className="ml-auto inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-bold text-violet-600 shadow transition hover:bg-violet-50 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            开始 →
          </button>
        </div>
      </section>

      {/* 全部成语 */}
      <h2 className="mt-6 text-sm font-bold text-slate-500">全部成语</h2>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {IDIOMS.map((idiom) => (
          <button
            key={idiom.id}
            type="button"
            onClick={() => onStart(idiom)}
            className="group flex flex-col items-stretch gap-2 rounded-2xl border-2 border-slate-200 bg-white p-3 text-left transition hover:border-violet-300 hover:bg-violet-50/50 active:scale-[0.98]"
          >
            <div className="flex items-center justify-between">
              <span className="whitespace-pre-line text-center text-base font-bold leading-snug text-slate-700">
                {formatTitle(idiom.title)}
              </span>
              <span
                role="button"
                aria-label={`播放${idiom.title}的故事`}
                onClick={(e) => {
                  e.stopPropagation()
                  play(idiom.id, idiom.speech)
                }}
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition active:scale-90 ${
                  playing === idiom.id
                    ? 'bg-violet-500 text-white'
                    : 'bg-violet-50 text-violet-500 hover:bg-violet-100'
                }`}
              >
                <span className="text-xs">{playing === idiom.id ? '🔊' : '🔈'}</span>
              </span>
            </div>
            <div className="mt-auto flex items-center gap-1 text-xs font-medium text-violet-500 opacity-0 transition group-hover:opacity-100">
              开始阅读 →
            </div>
          </button>
        ))}

        <div className="flex min-h-[96px] flex-col items-center justify-center gap-1 rounded-2xl border-2 border-dashed border-slate-200 px-2 py-3 text-slate-300">
          <span className="text-sm font-semibold">更多故事</span>
          <span className="text-[10px]">敬请期待</span>
        </div>
      </div>
    </>
  )
}

export default ChineseIdioms
