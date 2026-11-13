import KnowledgeList from './KnowledgeList'

function ScienceContents({ onBack }) {
  return (
    <KnowledgeList
      title="科学 · 一年级"
      subject="science"
      onBack={onBack}
    />
  )
}

export default ScienceContents
