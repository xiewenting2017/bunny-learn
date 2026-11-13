import KnowledgeList from './KnowledgeList'

function MathContents({ grade, onBack }) {
  const gradeLabel = grade === 'grade-2' ? '二年级' : '一年级'
  return (
    <KnowledgeList title={`数学 · ${gradeLabel}`} subject="math" grade={grade} onBack={onBack} />
  )
}

export default MathContents
