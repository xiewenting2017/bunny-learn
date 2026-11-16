import { gradeLabelOf } from '../data/grades'
import KnowledgeList from './KnowledgeList'

function ChineseContents({ grade, onBack, onOpenIdioms }) {
  const title = `语文 · ${gradeLabelOf(grade)}`
  return (
    <KnowledgeList
      title={title}
      subject="chinese"
      grade={grade}
      onBack={onBack}
      banner={
        <button
          type="button"
          onClick={onOpenIdioms}
          className="flex w-full items-center justify-between rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-3 text-white shadow-md shadow-violet-200 transition hover:from-violet-600 hover:to-indigo-600 active:scale-[0.99]"
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
