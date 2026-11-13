import { useEffect, useRef, useState } from 'react'
import { trySpeech } from '../hooks/useSpeech'

// ── 每个成语的完整故事数据 ──
// story: 给小朋友读的完整故事（~80-120 字，分句自然）
// summary: 一句话梗概
// moral: 小道理
// image: 插画（AI 生成的儿童绘本风格）
const STORIES = {
  wenjiqiwu: {
    title: '闻鸡起舞',
    subtitle: '祖逖和刘琨的故事',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, an ancient Chinese boy in simple hanfu practicing sword at sunrise in a courtyard, a rooster crowing on a wooden fence, warm orange morning sky, soft pastel colors, cute gentle style, no text",
    )}&image_size=landscape_16_9`,
    story:
      '西晋的时候，有两个好朋友，一个叫祖逖，一个叫刘琨。他们住在一起，都想为国家出力。有一天半夜，祖逖听到远处传来公鸡的叫声，就用脚踢醒刘琨，说：这不是讨厌的声音，这是提醒我们起床练剑的声音呀！于是两个人披上衣服，拿起宝剑，在院子里练了起来。从那天起，每天一听到鸡叫，他们就起床练剑，不管刮风下雨，从来没有停过。后来，祖逖和刘琨都成了很有本领的人，为国家做了很多大事。',
    summary:
      '祖逖和好朋友刘琨，每天听到鸡叫就起床练剑，后来都成了很厉害的人。',
    moral: '想做好一件事，就要坚持不懈地练习。',
  },
  zaobi: {
    title: '凿壁借光',
    subtitle: '匡衡的读书故事',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, a little Chinese boy in old hanfu reading a book by a small hole in the wall, warm yellow light shining through from next door, wooden room interior, cute gentle style, soft pastel colors, no text",
    )}&image_size=landscape_16_9`,
    story:
      '从前有个小朋友叫匡衡，家里很穷，买不起灯油，晚上想读书也没有光亮。他家隔壁住着一个大户人家，每天晚上点着灯，亮堂堂的。匡衡想了想，就在自己家和邻居家的墙壁上凿了一个小小的洞。这样，邻居家的灯光就从小洞里透了过来，照在匡衡的书上。匡衡就借着这一点点光，每天晚上都认真地读书。后来，匡衡成了一个很有学问的人。',
    summary: '匡衡家里穷买不起灯油，就在墙上凿了个洞，借邻居家的灯光读书。',
    moral: '不管条件多困难，只要努力想办法，就一定能成功。',
  },
  hualong: {
    title: '画龙点睛',
    subtitle: '张僧繇画龙的故事',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, an ancient Chinese painter in flowing robes painting two big dragons on a temple wall with a brush, blue sky background, the dragons look vivid, cute gentle style, soft pastel colors, no text",
    )}&image_size=landscape_16_9`,
    story:
      '古时候有个画家叫张僧繇，画得特别好。有一天，他在一座寺庙的墙上画了四条龙。围观的人都说画得太像了，就像真的龙在墙上飞一样。可是大家发现，这四条龙都没有画眼睛。有人就问：你为什么不给龙画上眼睛呢？张僧繇说：不能画！画上眼睛，龙就会飞走的！大家都不信，说他吹牛。张僧繇没办法，就拿起笔，给其中两条龙点上了眼睛。突然，天空乌云密布，雷声大作，那两条龙真的腾空而起，飞到云里去了！',
    summary: '画家张僧繇画的龙太逼真，点上眼睛后龙就飞走了。',
    moral: '有时候，关键的一笔能让整件事变得特别精彩。',
  },
  wangmei: {
    title: '望梅止渴',
    subtitle: '曹操带军的故事',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, a Chinese general on horseback pointing ahead with soldiers in ancient army uniforms, hot desert sun, green plum trees in the distance, warm sunny sky, cute gentle style, soft pastel colors, no text",
    )}&image_size=landscape_16_9`,
    story:
      '有一年夏天，曹操带着军队去打仗。天气特别热，太阳火辣辣的，晒得大地都冒烟了。士兵们走了很远很远，水喝完了，一个个口渴得厉害，走不动路了。曹操骑在马上，心里很着急。他想了想，就指着前面说：大家看！前面有一大片梅林，树上结满了又酸又甜的梅子！士兵们一听，口水都流出来了，好像自己已经吃到了梅子一样，一下子就不那么渴了，精神也来了，继续往前走。虽然最后没有找到梅林，但大家还是坚持走到了有水的地方。',
    summary: '曹操骗士兵说前面有梅林，大家想到梅子就不渴了。',
    moral: '遇到困难时，用积极的想法鼓励自己，就能坚持下去。',
  },
  jinggong: {
    title: '惊弓之鸟',
    subtitle: '更羸射雁的故事',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, an ancient Chinese archer standing in a field with bow, a goose falling from the sky in the distance, autumn sky with clouds, cute gentle style, soft pastel colors, no text",
    )}&image_size=landscape_16_9`,
    story:
      '古时候有个射箭能手叫更羸。有一天，他跟魏王一起去打猎，看见天上飞着一只大雁。更羸说：大王，我不用箭，只要拉一下弓，就能把这只大雁射下来。魏王不信。只见更羸拿起弓，搭上弦，拉了一下，只听嘣的一声响，那只大雁居然真的从天上掉了下来！魏王大吃一惊，问他是怎么做到的。更羸说：这只雁飞得很慢，叫声又很凄惨，一定是以前被箭射伤过，伤口还没好。它听到弓弦的响声，以为又有箭射过来了，就拼命往上飞，结果伤口裂开，就掉下来了。',
    summary: '更羸不用箭，只拉弓响一声，受伤的大雁就吓得掉了下来。',
    moral: '受过伤的人，遇到一点点动静就会害怕，要勇敢战胜恐惧。',
  },
  duiniu: {
    title: '对牛弹琴',
    subtitle: '公明仪弹琴的故事',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, an ancient Chinese musician sitting on grass playing a zither for a big ox, green grass field, blue sky with clouds, cute gentle style, soft pastel colors, no text",
    )}&image_size=landscape_16_9`,
    story:
      '古时候有个音乐家叫公明仪，琴弹得特别好。有一天，他看见一头老牛在草地上吃草，就想：牛整天吃草，有没有听过音乐呢？我来弹一首给它听听吧。于是他坐下来，认真地弹了一首高雅的曲子。可是那头老牛低着头，继续吃它的草，连头都没抬一下。公明仪又换了一首曲子，老牛还是不理他。原来，老牛根本听不懂那些高雅的曲子。后来有人说：对牛弹琴，白费力气。这个成语就流传下来了。',
    summary: '公明仪对老牛弹高雅的曲子，老牛只顾吃草，根本听不懂。',
    moral: '说话要看对象，对着不懂的人讲，就是白费口舌。',
  },
  shouzhu: {
    title: '守株待兔',
    subtitle: '农夫的傻运气',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, a Chinese farmer in straw hat sitting by a tree stump in a rice field, a white rabbit running in the distance, warm autumn afternoon, cute gentle style, soft pastel colors, no text",
    )}&image_size=landscape_16_9`,
    story:
      '从前有个农夫，每天早出晚归，在田里辛苦地劳作。有一天，他正在田里干活，忽然看见一只白色的小兔子从草丛里跑出来。那只兔子跑得太快了，没注意到前面有一个树桩，砰的一声撞在了树桩上，当场就死了。农夫高兴极了，跑过去捡起兔子，晚上回家吃了一顿香喷喷的兔肉。第二天，农夫又去田里干活。可是他干了一会儿就想：昨天我白捡了一只兔子，今天说不定还能再捡到一只呢！于是他就坐在树桩旁边等起来，等着有兔子再撞上来。他等啊等，等啊等，一整天过去了，再也没有兔子撞上来。可是他的田地却因为他一直没干活，长满了野草。大家都笑话他：哪有那么多兔子会撞树桩呀？',
    summary: '农夫捡到一只撞死的兔子后，天天守在树桩边等，田地都荒废了。',
    moral: '意外的好运气不会天天有，想要收获就要自己努力。',
  },
}

function IdiomStory({ idiom, onBack, onFinish }) {
  const story = STORIES[idiom?.id] ?? null
  const title = idiom?.title ?? story?.title ?? ''
  const audioRef = useRef(null)
  const [playingId, setPlayingId] = useState(null) // 'story' | 'summary' | 'moral' | null
  const [loadingId, setLoadingId] = useState(null)

  // 切换内容时（上一个成语→下一个），停掉旧音频
  useEffect(() => {
    const a = audioRef.current
    if (a?.src) {
      a.pause()
      URL.revokeObjectURL(a.src)
      audioRef.current = null
    }
    setPlayingId(null)
    setLoadingId(null)
  }, [idiom?.id])

  // 组件卸载清理
  useEffect(() => () => {
    const a = audioRef.current
    if (a?.src) URL.revokeObjectURL(a.src)
  }, [])

  const play = async (id, text) => {
    if (!text) return

    // 同一个按钮正在播放 → 暂停（原生 speechSynthesis 整体停）
    if (playingId === id) {
      window.speechSynthesis?.cancel()
      setPlayingId(null)
      return
    }

    // 同一个按钮被暂停过 → 重新走 trySpeech
    // 或者第一次点击任何按钮 → 走 trySpeech

    setLoadingId(id)
    setPlayingId(null)

    const ok = await trySpeech(text, {
      onSuccess: () => {
        setPlayingId(id)
        // 原生 speechSynthesis 没有 ended 事件能精准绑定到这个 utterance
        // 用定时检查兜底
        if (window.speechSynthesis) {
          const checkDone = () => {
            if (!window.speechSynthesis.speaking) {
              setPlayingId((cur) => (cur === id ? null : cur))
              return
            }
            setTimeout(checkDone, 300)
          }
          setTimeout(checkDone, 500)
        }
      },
      onFail: () => {
        // 原生也不支持 → 静默（不再弹 alert 打扰）
        console.warn('[成语故事] 语音不可用')
      },
    })

    if (!ok) setPlayingId(null)
    setLoadingId(null)
  }

  // 没有故事数据 → 占位
  if (!story) {
    return (
      <>
        <div className="flex items-center justify-between">
          <button type="button" onClick={onBack} className="...">← 返回</button>
        </div>
        <div className="mt-10 text-center text-sm text-slate-400">
          这个成语的故事正在准备中，请敬请期待～
        </div>
      </>
    )
  }

  return (
    <>
      {/* 顶部栏 */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1 rounded-full px-2 py-1.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 active:scale-95"
        >
          <span aria-hidden="true">←</span> 返回
        </button>
        <button
          type="button"
          onClick={() => play('story', story.story)}
          className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1.5 text-sm font-medium text-violet-600 transition hover:bg-violet-100 active:scale-95"
        >
          <span aria-hidden="true">
            {loadingId === 'story' ? '⏳' : playingId === 'story' ? '🔊' : '🔈'}
          </span>
          再听一遍
        </button>
      </div>

      {/* 插画区域 */}
      <div className="relative mt-5 h-44 overflow-hidden rounded-3xl bg-gradient-to-br from-amber-200 via-orange-200 to-rose-200">
        <img
          src={story.image}
          alt={`${title}插画`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent px-4 pb-3 pt-10 text-white">
          <p className="text-xl font-bold">{title}</p>
          <p className="text-xs text-white/85">{story.subtitle}</p>
        </div>
      </div>

      {/* 播放故事 */}
      <div className="mt-4 flex flex-col items-center">
        <button
          type="button"
          onClick={() => play('story', story.story)}
          className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-base font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-600 active:scale-[0.98]"
        >
          <span aria-hidden="true">
            {loadingId === 'story' ? '⏳' : playingId === 'story' ? '⏸' : '▶️'}
          </span>
          {loadingId === 'story' ? '加载中…' : playingId === 'story' ? '暂停' : '播放故事'}
        </button>
        <p className="mt-2 text-center text-xs text-slate-400">
          雪爱伊姐姐讲故事 🎧
        </p>
      </div>

      <div className="my-5 h-px w-full bg-slate-100" />

      {/* 故事讲了什么 */}
      <h2 className="text-sm font-bold text-slate-600">这个故事讲了什么？</h2>
      <div className="mt-2 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
        <p className="text-sm leading-relaxed text-slate-600">
          {story.summary}
        </p>
        <button
          type="button"
          onClick={() => play('summary', story.summary)}
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-violet-600 transition hover:text-violet-700"
        >
          <span aria-hidden="true">
            {loadingId === 'summary' ? '⏳' : playingId === 'summary' ? '🔊' : '🔈'}
          </span>
          {playingId === 'summary' ? '播放中…' : '听一听这句话'}
        </button>
      </div>

      {/* 小道理 */}
      <div className="mt-3 rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-100">
        <p className="flex items-center gap-1 text-xs font-bold text-amber-600">
          <span aria-hidden="true">💡</span> 小道理
        </p>
        <div className="mt-1.5 flex items-start justify-between gap-3">
          <p className="text-sm leading-relaxed text-amber-900/80">
            {story.moral}
          </p>
          <button
            type="button"
            onClick={() => play('moral', story.moral)}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition active:scale-90"
            style={{
              backgroundColor: playingId === 'moral' ? '#f59e0b' : undefined,
            }}
          >
            <span className="text-xs" aria-hidden="true">
              {loadingId === 'moral' ? '⏳' : playingId === 'moral' ? '🔊' : '🔈'}
            </span>
          </button>
        </div>
      </div>

      {/* 下一步 */}
      <button
        type="button"
        onClick={onFinish}
        className="mt-6 w-full rounded-full bg-violet-500 py-3.5 text-base font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-600 active:scale-[0.98]"
      >
        我听完啦，说一说 →
      </button>
    </>
  )
}

export default IdiomStory
