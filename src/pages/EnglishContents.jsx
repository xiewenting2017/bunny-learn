import { gradeLabelOf } from '../data/grades'
import KnowledgeList from './KnowledgeList'

function EnglishContents({ grade, onBack }) {
  const title = `英语 · ${gradeLabelOf(grade)}`
  return <KnowledgeList title={title} subject="english" grade={grade} onBack={onBack} />
}

export default EnglishContents
