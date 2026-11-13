import { MATH_BOOKS } from '../data/math'
import KnowledgeList from './KnowledgeList'

function MathContents({ onBack }) {
  return (
    <KnowledgeList
      title="数学 · 一年级"
      grade="一年级"
      subject="math"
      books={MATH_BOOKS}
      onBack={onBack}
    />
  )
}

export default MathContents
