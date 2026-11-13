import KnowledgeList from './KnowledgeList'

function ChineseContents({ onBack, onOpenIdioms }) {
  return (
    <KnowledgeList
      title="语文 · 一年级"
      subject="chinese"
      onBack={onBack}
      banner={
        <button
          type="button"
          onClick={onOpenIdioms}
          className="flex w-full items-center justify-between rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-3 text-white shadow-md shadow-violet-200 transition hover:from-violet-600 hover:to-indigo-600 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
        >
          <span className="flex items-center gap-1.5 text-sm font-bold">
            <span aria-hidden="true">📖</span> 成语故事
          </span>
          <span className="text-xs text-white/80">听故事学成语 →</span>
        </button>
      }
    />
  )
}

export default ChineseContents
