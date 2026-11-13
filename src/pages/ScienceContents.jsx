import KnowledgeList from './KnowledgeList'

function ScienceContents({ grade, onBack }) {
  const gradeLabel = grade === 'grade-2' ? '二年级' : '一年级'
  return (
    <KnowledgeList title={`科学 · ${gradeLabel}`} subject="science" grade={grade} onBack={onBack} />
  )
}

export default ScienceContents
