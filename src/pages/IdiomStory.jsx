import { useEffect, useState } from 'react'
import { useSpeech } from '../hooks/useSpeech'

const ILLUSTRATION = `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
  "Children's storybook watercolor illustration, an ancient Chinese boy in simple hanfu practicing sword at sunrise in a courtyard, a rooster crowing on a wooden fence, warm orange morning sky, soft pastel colors, cute gentle style, no text",
)}&image_size=landscape_16_9`

const STORIES = {
  wenjiqiwu: {
    subtitle: '祖逖和刘琨的故事',
    story:
      '西晋的时候，有两个好朋友，一个叫祖逖，一个叫刘琨。他们住在一起，都想为国家出力。有一天半夜，祖逖听到远处传来公鸡的叫声，就用脚踢醒刘琨，说：这不是讨厌的声音，这是提醒我们起床练剑的声音呀！于是两个人披上衣服，拿起宝剑，在院子里练了起来。从那天起，每天一听到鸡叫，他们就起床练剑，不管刮风下雨，从来没有停过。后来，祖逖和刘琨都成了很有本领的人，为国家做了很多大事。',
    summary:
      '祖逖和好朋友刘琨，每天听到鸡叫就起床练剑，后来都成了很厉害的人。',
    moral: '想做好一件事，就要坚持不懈地练习。',
  },
}

function IdiomStory({ idiom, onBack, onFinish }) {
  const story = STORIES[idiom?.id] ?? null
  const title = idiom?.title ?? ''
  const { speaking, speak } = useSpeech()
  const [playing, setPlaying] = useState(null)

  useEffect(() => {
    if (!speaking) setPlaying(null)
  }, [speaking])

  const play = (id, text) => {
    if (!text) return
    setPlaying(id)
    speak(text)
  }

  return (
    <>
      {/* 顶部栏 */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1 rounded-full px-2 py-1.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
        >
          <span aria-hidden="true">←</span> 返回
        </button>
        <button
          type="button"
          onClick={() => play('story', story?.story)}
          aria-label="再听一遍故事"
          className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1.5 text-sm font-medium text-violet-600 transition hover:bg-violet-100 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
        >
          <span aria-hidden="true">{playing === 'story' ? '🔊' : '🔈'}</span>
          再听一遍
        </button>
      </div>

      {/* 插画区域 */}
      <div className="relative mt-5 h-44 overflow-hidden rounded-3xl bg-gradient-to-br from-amber-200 via-orange-200 to-rose-200">
        <img
          src={ILLUSTRATION}
          alt={`${title}插画`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent px-4 pb-3 pt-10 text-white">
          <p className="text-xl font-bold">{title}</p>
          <p className="text-xs text-white/85">{story?.subtitle}</p>
        </div>
      </div>

      {/* 播放故事 */}
      <div className="mt-4 flex flex-col items-center">
        <button
          type="button"
          onClick={() => play('story', story?.story)}
          className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-base font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-600 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
        >
          <span aria-hidden="true">
            {playing === 'story' ? '⏸' : '▶️'}
          </span>
          {playing === 'story' ? '播放中…' : '播放故事'}
        </button>
        <p className="mt-2 text-center text-xs text-slate-400">
          语音讲解，约 60-90 秒，配背景音效
        </p>
      </div>

      <div className="my-5 h-px w-full bg-slate-100" />

      {/* 故事讲了什么 */}
      <h2 className="text-sm font-bold text-slate-600">这个故事讲了什么？</h2>
      <div className="mt-2 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
        <p className="text-sm leading-relaxed text-slate-600">
          {story?.summary}
        </p>
        <button
          type="button"
          onClick={() => play('summary', story?.summary)}
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-violet-600 transition hover:text-violet-700 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
        >
          <span aria-hidden="true">
            {playing === 'summary' ? '🔊' : '🔈'}
          </span>
          {playing === 'summary' ? '播放中…' : '听一听这句话'}
        </button>
      </div>

      {/* 小道理 */}
      <div className="mt-3 rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-100">
        <p className="flex items-center gap-1 text-xs font-bold text-amber-600">
          <span aria-hidden="true">💡</span> 小道理
        </p>
        <div className="mt-1.5 flex items-start justify-between gap-3">
          <p className="text-sm leading-relaxed text-amber-900/80">
            {story?.moral}
          </p>
          <button
            type="button"
            onClick={() => play('moral', story?.moral)}
            aria-label="播放小道理"
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition active:scale-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ${
              playing === 'moral'
                ? 'bg-amber-400'
                : 'bg-amber-100 hover:bg-amber-200'
            }`}
          >
            <span className="text-xs" aria-hidden="true">
              {playing === 'moral' ? '🔊' : '🔈'}
            </span>
          </button>
        </div>
      </div>

      {/* 下一步 */}
      <button
        type="button"
        onClick={onFinish}
        className="mt-6 w-full rounded-full bg-violet-500 py-3.5 text-base font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-600 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
      >
        我听完啦，说一说 →
      </button>
    </>
  )
}

export default IdiomStory
