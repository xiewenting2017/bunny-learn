// 年级选项
export const GRADES = [
  { id: 'grade-1', label: '一年级', emoji: '🎒', available: true },
  { id: 'grade-2', label: '二年级', emoji: '📚', available: true },
  { id: 'grade-3', label: '三年级', emoji: '✏️', available: true },
]

export const getGrade = (id) =>
  GRADES.find((grade) => grade.id === id) ?? GRADES[0]

// grade id -> 中文标签（如 'grade-3' -> '三年级'）
// 各页面组件共用，避免各自硬编码
export function gradeLabelOf(gradeId) {
  const found = GRADES.find((g) => g.id === gradeId)
  if (found) return found.label
  // 兜底：从 'grade-N' 字符串里解析数字
  const match = /grade-(\d+)/.exec(String(gradeId || ''))
  if (!match) return '一年级'
  const num = Number(match[1])
  const cn = ['', '一', '二', '三', '四', '五', '六'][num]
  return cn ? `${cn}年级` : `${num}年级`
}
