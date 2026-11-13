function Celebration({ idiom, onLearnMore, onSayGoodbye }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="mt-2 animate-[float_3s_ease-in-out_infinite] text-6xl"
        aria-hidden="true"
      >
        🎉
      </div>

      <h1 className="mt-4 text-center text-xl font-bold leading-relaxed text-slate-800">
        你今天学会了“{idiom?.title}”！
      </h1>

      <ul className="mt-6 w-full space-y-3 rounded-3xl bg-amber-50/70 p-5 ring-1 ring-amber-100">
        <li className="flex items-center gap-2.5 text-sm font-semibold text-amber-600">
          <span className="text-lg" aria-hidden="true">
            ⭐
          </span>
          获得 1 颗星星
        </li>
        <li className="flex items-center gap-2.5 text-sm text-slate-600">
          <span className="text-lg" aria-hidden="true">
            📖
          </span>
          听了一个成语故事
        </li>
        <li className="flex items-center gap-2.5 text-sm text-slate-600">
          <span className="text-lg" aria-hidden="true">
            🎤
          </span>
          说出了故事内容
        </li>
      </ul>

      <div className="mt-6 flex w-full gap-3">
        <button
          type="button"
          onClick={onLearnMore}
          className="flex-1 rounded-full bg-violet-500 py-3.5 text-base font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-600 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
        >
          再学一个
        </button>
        <button
          type="button"
          onClick={onSayGoodbye}
          className="flex-1 rounded-full bg-white py-3.5 text-base font-bold text-slate-600 ring-2 ring-slate-200 transition hover:bg-slate-50 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
        >
          明天见 👋
        </button>
      </div>
    </div>
  )
}

export default Celebration
