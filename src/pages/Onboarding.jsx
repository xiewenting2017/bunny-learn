import { GRADES } from '../data/grades'
import { useSpeech } from '../hooks/useSpeech'

const GREETING = '你好呀！我是你的学习伙伴'

function Onboarding({ grade, onGradeChange, onContinue }) {
  const { speaking, speak } = useSpeech()

  return (
    <>
      {/* 吉祥物 */}
      <div className="flex justify-center">
        <div className="relative flex h-24 w-24 animate-[float_3s_ease-in-out_infinite] items-center justify-center rounded-full bg-gradient-to-br from-violet-200 via-sky-100 to-amber-100 text-5xl shadow-inner">
          <span aria-hidden="true">🐰</span>
          <span className="absolute -right-1 -top-1 text-2xl" aria-hidden="true">
            ✨
          </span>
        </div>
      </div>

      {/* 问候语 + 朗读 */}
      <div className="mt-5 rounded-3xl bg-violet-50 px-5 py-4 text-center ring-1 ring-violet-100">
        <p className="text-base font-medium leading-relaxed text-slate-700">
          “{GREETING}”
        </p>
        <button
          type="button"
          onClick={() => speak(`${GREETING}，你马上要上几年级啦？`)}
          aria-label="朗读问候语"
          className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm text-violet-600 shadow-sm ring-1 ring-violet-100 transition hover:bg-violet-100 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
        >
          <span aria-hidden="true">{speaking ? '🔊' : '🔈'}</span>
          {speaking ? '朗读中…' : '点击朗读'}
        </button>
      </div>

      {/* 年级选择 */}
      <h1 className="mt-7 text-center text-lg font-bold text-slate-800">
        你马上要上几年级啦？
      </h1>

      <div
        role="radiogroup"
        aria-label="选择年级"
        className="mt-4 grid grid-cols-3 gap-3"
      >
        {GRADES.map((item) => {
          const selected = item.id === grade

          return (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={selected}
              disabled={!item.available}
              onClick={() => onGradeChange(item.id)}
              className={`relative flex flex-col items-center gap-1 rounded-2xl px-2 py-4 transition ${
                item.available
                  ? selected
                    ? 'border-2 border-violet-400 bg-violet-50 shadow-sm shadow-violet-100'
                    : 'border-2 border-slate-200 bg-white hover:border-violet-300 hover:bg-violet-50/50'
                  : 'cursor-not-allowed border-2 border-slate-100 bg-slate-50 text-slate-300'
              }`}
            >
              {selected && item.available && (
                <span
                  className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-violet-500 text-[10px] font-bold text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
              )}
              <span
                className={`text-2xl ${item.available ? '' : 'opacity-40 grayscale'}`}
                aria-hidden="true"
              >
                {item.emoji}
              </span>
              <span
                className={`text-sm font-semibold ${
                  item.available
                    ? selected
                      ? 'text-violet-700'
                      : 'text-slate-700'
                    : 'text-slate-300'
                }`}
              >
                {item.label}
              </span>
              {!item.available && (
                <span className="text-[10px] text-slate-300">即将开放</span>
              )}
            </button>
          )
        })}
      </div>

      <p className="mt-3 text-center text-xs text-slate-400">
        选一个年级，开始今天的学习吧 ✨
      </p>

      {/* 继续 */}
      <button
        type="button"
        onClick={onContinue}
        className="mt-6 w-full rounded-full bg-violet-500 py-3.5 text-base font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-600 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
      >
        继续 →
      </button>
    </>
  )
}

export default Onboarding
