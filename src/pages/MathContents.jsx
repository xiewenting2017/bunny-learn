import { gradeLabelOf } from '../data/grades'
import KnowledgeList from './KnowledgeList'

function MathContents({ grade, onBack }) {
  const title = `数学 · ${gradeLabelOf(grade)}`
  return <KnowledgeList title={title} subject="math" grade={grade} onBack={onBack} />
}

export default MathContents
