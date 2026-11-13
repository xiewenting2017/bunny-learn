import { useMemo, useState } from 'react'
import { useSpeech } from '../hooks/useSpeech'

const ALL_IDIOMS = [
  { id: 'wenjiqiwu', title: '闻鸡起舞', speech: '闻鸡起舞。祖逖和好朋友刘琨，每天听到鸡叫就起床练剑，后来都成了很厉害的人。' },
  { id: 'zaobi', title: '凿壁借光', speech: '凿壁借光。匡衡家里穷买不起灯油，就在墙上凿了个洞，借邻居家的灯光读书。' },
  { id: 'xuanliang', title: '悬梁刺股', speech: '悬梁刺股。孙敬把头发拴在房梁上，苏秦用锥子扎大腿，怕自己打瞌睡，刻苦读书。' },
  { id: 'nangying', title: '囊萤映雪', speech: '囊萤映雪。车胤捉萤火虫装在袋子里照亮，孙康借着雪地里的反光读书，都很刻苦。' },
  { id: 'feiqin', title: '废寝忘食', speech: '废寝忘食。孔子的徒弟颜回，读书太认真了，连吃饭睡觉都忘了。' },
  { id: 'shoubu', title: '手不释卷', speech: '手不释卷。吕蒙在孙权的劝说下，手不离书地读书，后来成了有学问的大将军。' },
  { id: 'weibian', title: '韦编三绝', speech: '韦编三绝。孔子读《易经》，把串书的皮绳磨断了三次，还在不停地读。' },
  { id: 'chengmen', title: '程门立雪', speech: '程门立雪。杨时和游酢去拜见老师，老师在睡觉，他们就站在雪地里等。' },
  { id: 'niujiao', title: '牛角挂书', speech: '牛角挂书。李密骑牛出门，把书挂在牛角上，一边赶路一边读书。' },
  { id: 'tiechu', title: '铁杵成针', speech: '铁杵成针。李白看到老婆婆把粗铁棒磨成绣花针，明白了只要坚持就能成功。' },
  { id: 'hualong', title: '画龙点睛', speech: '画龙点睛。画家张僧繇画的龙太逼真，点上眼睛后龙就飞走了。' },
  { id: 'wangmei', title: '望梅止渴', speech: '望梅止渴。曹操骗士兵说前面有梅林，大家想到梅子就不渴了。' },
  { id: 'jinggong', title: '惊弓之鸟', speech: '惊弓之鸟。更羸不用箭，只拉弓响一声，受伤的大雁就吓得掉了下来。' },
  { id: 'duiniu', title: '对牛弹琴', speech: '对牛弹琴。公明仪对老牛弹高雅的曲子，老牛只顾吃草，根本听不懂。' },
  { id: 'shouzhu', title: '守株待兔', speech: '守株待兔。农夫捡到一只撞死的兔子后，天天守在树桩边等，田地都荒废了。' },
]

const formatTitle = (title) => `${title.slice(0, 2)}\n${title.slice(2)}`

function ChineseIdioms({ onBack, onStart }) {
  const { speak } = useSpeech()
  const [playing, setPlaying] = useState(null)
  const [keyword, setKeyword] = useState('')

  const displayList = useMemo(() => {
    const kw = keyword.trim()
    if (!kw) return ALL_IDIOMS
    return ALL_IDIOMS.filter(
      (i) => i.title.includes(kw) || i.speech.includes(kw),
    )
  }, [keyword])

  // 今日推荐（无搜索时才显示）
  const featured = useMemo(() => {
    if (keyword.trim()) return null
    const today = new Date()
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()
    return ALL_IDIOMS[seed % ALL_IDIOMS.length]
  }, [keyword])

  const rest = useMemo(
    () => displayList.filter((i) => featured && i.id !== featured.id),
    [displayList, featured],
  )

  const play = (id, text) => {
    setPlaying(id)
    speak(text)
  }

  const isSearching = keyword.trim().length > 0

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

      {/* 搜索框 */}
      <div className="mt-4 relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true">🔍</span>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="搜索成语，比如「悬梁」「读书」"
          className="w-full rounded-2xl border-2 border-slate-200 bg-white py-2.5 pl-9 pr-9 text-sm text-slate-700 placeholder-slate-400 outline-none transition focus:border-violet-300 focus:ring-2 focus:ring-violet-100"
        />
        {keyword && (
          <button
            type="button"
            onClick={() => setKeyword('')}
            aria-label="清除搜索"
            className="absolute right-2.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-slate-200 text-xs text-slate-500 transition hover:bg-slate-300 active:scale-90"
          >
            ✕
          </button>
        )}
      </div>

      {/* 搜索结果为空 */}
      {isSearching && displayList.length === 0 && (
        <div className="mt-8 rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center">
          <div className="text-3xl">🤔</div>
          <p className="mt-2 text-sm font-semibold text-slate-600">没有找到" {keyword} "相关的成语</p>
          <button
            type="button"
            onClick={() => setKeyword('')}
            className="mt-3 inline-flex items-center gap-1 rounded-full bg-violet-50 px-4 py-1.5 text-xs font-semibold text-violet-600 transition hover:bg-violet-100 active:scale-95"
          >
            清除搜索
          </button>
        </div>
      )}

      {/* 今日推荐（仅在无搜索时显示） */}
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

      {/* 成语列表 */}
      {displayList.length > 0 && (
        <>
          <h2 className={`mt-6 flex items-center justify-between text-sm font-bold ${isSearching ? 'text-slate-600' : 'text-slate-500'}`}>
            <span>{isSearching ? `搜索结果` : '更多故事'}</span>
            <span className="text-xs font-normal text-slate-400">共 {displayList.length} 个</span>
          </h2>

          <div className="mt-3 grid grid-cols-3 gap-3">
            {(isSearching ? displayList : rest).map((idiom) => (
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
