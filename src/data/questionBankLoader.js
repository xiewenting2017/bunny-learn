// 本地题库加载器：fetch /questionBank.json，带内存缓存
// 这个 JSON 由 generateScript.js 在服务端生成后放到 public/ 目录

let cachePromise = null

function loadBank() {
  if (!cachePromise) {
    cachePromise = fetch('/questionBank.json', { cache: 'no-cache' })
      .then((res) => {
        if (!res.ok) throw new Error(`题库加载失败 (HTTP ${res.status})`)
        return res.json()
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error('题库格式不对：不是数组')
        return data
      })
      .catch((err) => {
        // 失败时清掉缓存，下次可以重试
        cachePromise = null
        throw err
      })
  }
  return cachePromise
}

/** 强制重新加载（开发期调试用） */
export function reloadBank() {
  cachePromise = null
  return loadBank()
}

/** 加载整个题库数组 */
export function getAllTopics() {
  return loadBank()
}

/**
 * 按 id 查单个知识点的题库记录
 * 返回 { id, name, grade, module, explanation, questions: [...] }
 */
export async function getTopicBank(topicId) {
  const bank = await loadBank()
  return bank.find((item) => item.id === topicId) || null
}

/**
 * 从题库里随机抽一道题（从 questions 数组里）
 * 没题就返回 null
 */
export async function getRandomQuestion(topicId) {
  const bank = await getTopicBank(topicId)
  if (!bank?.questions?.length) return null
  const idx = Math.floor(Math.random() * bank.questions.length)
  return bank.questions[idx]
}
