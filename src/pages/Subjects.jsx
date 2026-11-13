import { useEffect, useRef, useState } from 'react'
import { getGrade, GRADES } from '../data/grades'

const SUBJECTS = [
  { id: 'math', label: '数学', emoji: '🔢', hint: '算一算' },
  { id: 'chinese', label: '语文', emoji: '📖', hint: '读故事' },
  { id: 'english', label: '英语', emoji: '🔤', hint: '说一说' },
  { id: 'science', label: '科学', emoji: '🧪', hint: '探一探' },
]

function Subjects({ grade, onGradeChange, onBack, onSelect }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const currentGrade = getGrade(grade)

  useEffect(() => {
    if (!menuOpen) return

    const handlePointerDown = (event) => {
      if (!menuRef.current?.contains(event.target)) setMenuOpen(false)
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  return (
    <>
      {/* 顶部操作栏 */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1 rounded-full px-2 py-1.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
        >
          <span aria-hidden="true">←</span> 返回
        </button>

        {/* 年级切换 */}
        <div ref={menuRef} className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            aria-label={`当前年级：${currentGrade.label}，点击切换年级`}
            className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-3 py-1.5 text-sm font-semibold text-violet-600 ring-1 ring-violet-100 transition hover:bg-violet-100 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
          >
            {currentGrade.label}
            <span
              className={`text-xs transition-transform ${menuOpen ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >
              ▾
            </span>
          </button>

          {menuOpen && (
            <div
              role="menu"
              aria-label="切换年级"
              className="absolute right-0 top-full z-10 mt-2 w-40 rounded-2xl bg-white p-1.5 shadow-lg shadow-slate-200/70 ring-1 ring-slate-100"
            >
              {GRADES.map((item) => {
                const selected = item.id === grade

                return (
                  <button
                    key={item.id}
                    type="button"
                    role="menuitem"
                    disabled={!item.available}
                    onClick={() => {
                      onGradeChange(item.id)
                      setMenuOpen(false)
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition ${
                      item.available
                        ? 'text-slate-600 hover:bg-violet-50 hover:text-violet-700'
                        : 'cursor-not-allowed text-slate-300'
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                    {item.available ? (
                      selected && (
                        <span className="text-violet-500" aria-hidden="true">
                          ✓
                        </span>
                      )
                    ) : (
                      <span className="text-[10px]">即将开放</span>
                    )}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>

      <h1 className="mt-8 text-center text-xl font-bold text-slate-800">
        你想学什么呀？
      </h1>

      {/* 科目卡片 */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        {SUBJECTS.map((subject) => (
          <button
            key={subject.id}
            type="button"
            onClick={() => onSelect(subject)}
            className="group flex flex-col items-center gap-1 rounded-3xl border-2 border-slate-200 bg-white px-3 py-6 transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50/60 hover:shadow-md hover:shadow-violet-100 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
          >
            <span className="text-4xl" aria-hidden="true">
              {subject.emoji}
            </span>
            <span className="mt-1 text-base font-bold text-slate-800">
              {subject.label}
            </span>
            <span className="text-xs text-slate-400">{subject.hint}</span>
          </button>
        ))}
      </div>
    </>
  )
}

export default Subjects
