import { chineseData } from './chinese.js'
import { englishData } from './english.js'
import { knowledgeData } from './knowledgeData.js'
import { scienceData } from './science.js'

export const SUBJECT_NAMES = {
  math: '数学',
  chinese: '语文',
  english: '英语',
  science: '科学',
}

// 按学科返回统一结构数组
const SUBJECT_DATA = {
  math: knowledgeData,
  chinese: chineseData,
  english: englishData,
  science: scienceData,
}

export function getTopic(subject, id) {
  if (!subject || !id) return null

  const list = SUBJECT_DATA[subject]
  if (!list) return null

  const item = list.find((entry) => entry.id === id)
  if (!item) return null

  return {
    subject,
    subjectName: SUBJECT_NAMES[subject],
    id: item.id,
    name: item.name,
    grade: item.grade,
    module: item.module,
  }
}

// grade: 'grade-1' | 'grade-2' → 只返回对应年级的条目
// 不传 grade → 返回全部（兼容旧调用）
export function getKnowledgeList(subject, grade) {
  const list = SUBJECT_DATA[subject] ?? []
  if (!grade) return list

  const gradeLabel = grade === 'grade-2' ? '二年级' : '一年级'
  return list.filter((item) => item.grade?.startsWith(gradeLabel))
}
