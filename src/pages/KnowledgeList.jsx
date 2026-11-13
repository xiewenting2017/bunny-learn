import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getKnowledgeList } from '../data/curriculum'

// 通用知识点列表：数学、语文、英语、科学共用
// 顶部 tab 切换上/下册，每个 tab 内按 module 分组
function KnowledgeList({ title, subject, onBack, banner }) {
  const items = getKnowledgeList(subject)
  const navigate = useNavigate()

  // 按 grade 分组，得到 ["一年级上册", "一年级下册"]
  const grades = useMemo(() => {
    const set = new Set()
    for (const item of items) set.add(item.grade)
    return [...set]
  }, [items])

  // 默认选第一个（上册）
  const [activeGrade, setActiveGrade] = useState(grades[0] ?? null)

  // 按 module 分组（只包含 activeGrade 的条目）
  const { modules } = useMemo(() => {
    const moduleMap = new Map()
    for (const item of items) {
      if (item.grade !== activeGrade) continue
      if (!moduleMap.has(item.module)) moduleMap.set(item.module, [])
      moduleMap.get(item.module).push(item)
    }
    return { modules: [...moduleMap.entries()] }
  }, [items, activeGrade])

  if (grades.length === 0) {
    return (
      <>
        <TopBar title={title} onBack={onBack} />
        {banner && <div className="mt-4">{banner}</div>}
        <p className="mt-10 text-center text-sm text-slate-400">暂无数据</p>
      </>
    )
  }

  return (
    <>
      {/* 顶部栏 */}
      <TopBar title={title} onBack={onBack} />

      {/* 上/下册 tab 切换 */}
      <div
        role="tablist"
        aria-label="选择教材册次"
        className="mt-4 flex gap-1 rounded-full bg-slate-100 p-1"
      >
        {grades.map((grade) => {
          const active = grade === activeGrade
          return (
            <button
              key={grade}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setActiveGrade(grade)}
              className={`flex-1 rounded-full py-1.5 text-sm font-semibold transition ${
                active
                  ? 'bg-white text-violet-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {grade}
            </button>
          )
        })}
      </div>

      {banner && <div className="mt-4">{banner}</div>}

      {/* 该册次下的 module 分组 */}
      {modules.map(([moduleTitle, points]) => (
        <section key={moduleTitle} className="mt-6">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-bold text-slate-700">{moduleTitle}</h2>
            <span className="text-[11px] text-slate-300">
              {points.length} 个知识点
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2.5">
            {points.map((point) => (
              <button
                key={point.id}
                type="button"
                onClick={() => navigate(`/topic/${subject}/${point.id}`)}
                className="inline-flex min-h-11 items-center gap-1 rounded-xl bg-white px-3.5 py-2 text-sm font-medium text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:bg-violet-50 hover:text-violet-700 hover:ring-violet-200 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
              >
                {point.name}
                <span aria-hidden="true" className="text-violet-400">
                  ›
                </span>
              </button>
            ))}
          </div>
        </section>
      ))}

      {modules.length === 0 && (
        <p className="mt-10 text-center text-sm text-slate-400">
          本册暂无知识点
        </p>
      )}
    </>
  )
}

function TopBar({ title, onBack }) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1 rounded-full px-2 py-1.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
      >
        <span aria-hidden="true">←</span> 返回
      </button>
      <span className="h-4 w-px bg-slate-200" aria-hidden="true" />
      <span className="text-sm font-semibold text-slate-600">{title}</span>
    </div>
  )
}

export default KnowledgeList
