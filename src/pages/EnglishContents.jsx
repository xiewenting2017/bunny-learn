import KnowledgeList from './KnowledgeList'

function EnglishContents({ grade, onBack }) {
  const gradeLabel = grade === 'grade-2' ? '二年级' : '一年级'
  return (
    <KnowledgeList title={`英语 · ${gradeLabel}`} subject="english" grade={grade} onBack={onBack} />
  )
}

export default EnglishContents
