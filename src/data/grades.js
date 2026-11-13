// 幼升小场景：目前只开放一年级，其他年级置灰
export const GRADES = [
  { id: 'grade-1', label: '一年级', emoji: '🎒', available: true },
  { id: 'grade-2', label: '二年级', emoji: '📚', available: false },
  { id: 'grade-3', label: '三年级', emoji: '✏️', available: false },
]

export const getGrade = (id) =>
  GRADES.find((grade) => grade.id === id) ?? GRADES[0]
