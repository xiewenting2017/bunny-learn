function Contents({ subject, onBack }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1 rounded-full px-2 py-1.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
        >
          <span aria-hidden="true">←</span> 返回
        </button>
        <span className="text-sm font-medium text-slate-400">
          {subject?.label}
        </span>
      </div>

      <h1 className="mt-10 text-center text-xl font-bold text-slate-800">
        {subject?.label} · 内容列表
      </h1>
      <p className="mt-3 text-center text-sm text-slate-400">
        内容列表页即将上线，先回去看看其他科目吧 ✨
      </p>
    </>
  )
}

export default Contents
