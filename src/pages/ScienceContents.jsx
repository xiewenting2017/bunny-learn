import { gradeLabelOf } from '../data/grades'
import KnowledgeList from './KnowledgeList'

function ScienceContents({ grade, onBack }) {
  const title = `科学 · ${gradeLabelOf(grade)}`
  return <KnowledgeList title={title} subject="science" grade={grade} onBack={onBack} />
}

export default ScienceContents
