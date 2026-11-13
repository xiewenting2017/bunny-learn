import KnowledgeList from './KnowledgeList'

function ChineseContents({ grade, onBack, onOpenIdioms }) {
  const gradeLabel = grade === 'grade-2' ? '二年级' : '一年级'
  return (
    <KnowledgeList
      title={`语文 · ${gradeLabel}`}
      subject="chinese"
      grade={grade}
      onBack={onBack}
      banner={
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenIdioms}
            className="flex flex-1 items-center justify-between rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-3 text-white shadow-md shadow-violet-200 transition hover:from-violet-600 hover:to-indigo-600 active:scale-[0.99]"
          >
            <span className="flex items-center gap-1.5 text-sm font-bold">
              <span aria-hidden="true">📖</span> 成语故事
            </span>
            <span className="text-xs text-white/80">听故事学成语</span>
          </button>
          <button
            type="button"
            onClick={onOpenIdioms}
            aria-label="查看更多成语故事"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border-2 border-violet-200 bg-white text-violet-500 shadow-sm transition hover:border-violet-300 hover:bg-violet-50 active:scale-95"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>
          </button>
        </div>
      }
    />
  )
}

export default ChineseContents
