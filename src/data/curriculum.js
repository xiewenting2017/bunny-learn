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

// 获取某个学科的全部知识点（用于 generateScript.js 遍历）
export function getKnowledgeList(subject) {
  return SUBJECT_DATA[subject] ?? []
}
