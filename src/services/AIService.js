// 默认走 Vite 代理（/api → http://localhost:4000），可用环境变量覆盖
const API_BASE = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/+$/, '')

const KNOWLEDGE_TIMEOUT = 5000

// 统一的请求封装：超时或离开页面时取消请求
async function postJson(path, payload, { signal, timeoutMs = 25000 } = {}) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  const abort = () => controller.abort()
  signal?.addEventListener('abort', abort)

  try {
    const response = await fetch(`${API_BASE}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })

    let data = null

    try {
      data = await response.json()
    } catch {
      // 非 JSON 响应（例如网关错误页），保留 HTTP 状态用于报错
    }

    if (!response.ok) {
      throw new Error(
        data?.error || `请求失败（HTTP ${response.status}）`,
      )
    }

    if (!data) {
      throw new Error('返回内容不是合法 JSON')
    }

    return data
  } catch (error) {
    if (error.name === 'AbortError' && !signal?.aborted) {
      throw new Error(`请求超时（${timeoutMs / 1000} 秒）`)
    }
    throw error
  } finally {
    clearTimeout(timer)
    signal?.removeEventListener('abort', abort)
  }
}

// 只根据知识点名称生成一道单选题
export function generateQuestion(knowledgeName, options) {
  return postJson('/api/ai/question', { name: knowledgeName }, options)
}

// 对 AI 返回的知识点内容做严格质量闸门校验。
// 任何一项不满足就 throw，让上层 catch 触发 fallback 兜底。
// 这层是前端防线，即使后端也校验过，这里仍然要拦一次。
function validateKnowledgeContent(data) {
  const errors = []

  // 1. explanation 字段完整性
  if (!data || typeof data.explanation !== 'string' || !data.explanation.trim()) {
    errors.push('explanation 缺失或为空')
  }

  // 2. question 对象存在
  const q = data?.question
  if (!q || typeof q !== 'object') {
    errors.push('question 对象缺失')
  }

  // 3. question.question 非空
  if (typeof q.question !== 'string' || !q.question.trim()) {
    errors.push('question.question 缺失或为空')
  }

  // 4. options 必须是数组，且至少 2 个选项
  if (!Array.isArray(q.options)) {
    errors.push('options 不是数组')
  } else if (q.options.length < 2) {
    errors.push(`options 数量不足（只有 ${q.options.length} 个，至少要 2 个）`)
  } else {
    // 选项里有空字符串
    const blankIdx = q.options.findIndex(
      (item) => typeof item !== 'string' || !item.trim(),
    )
    if (blankIdx !== -1) {
      errors.push(`options[${blankIdx}] 是空值`)
    }

    // 选项不能重复
    if (new Set(q.options).size !== q.options.length) {
      errors.push('options 存在重复选项')
    }
  }

  // 5. answer 必须在 options 里 —— 白名单校验（防大模型算错/格式乱）
  if (typeof q.answer !== 'string' || !q.answer.trim()) {
    errors.push('answer 缺失或为空')
  } else if (Array.isArray(q.options) && q.options.length >= 2) {
    if (!q.options.includes(q.answer)) {
      errors.push(`answer="${q.answer}" 不在 options 白名单里`)
    }
  }

  if (errors.length) {
    console.error('[AIService] 校验失败 →', errors, '原始数据:', data)
    const err = new Error(`AI 返回数据不合法：${errors.join('；')}`)
    // 把原始 AI 输出挂到 error 上，方便上层调试按钮打印
    err.rawData = data
    err.isValidationError = true
    throw err
  }
}

// 兜底内容：接口失败或超时时使用，保证页面流程可以走通
function buildFallbackContent(topic) {
  return {
    explanation: `我们先来看看「${topic}」的小例子：先仔细观察，再动手试一试，最后把发现说出来，就学会啦。`,
    question: {
      question: `关于「${topic}」，你准备好试一试了吗？`,
      options: ['准备好啦', '还想再听一遍', '有点紧张'],
      answer: '准备好啦',
      hint: '别着急，先看看上面的讲解，再选一选吧',
    },
    isFallback: true,
  }
}

/**
 * 生成某个知识点的结构化教学内容
 * 请求失败或 5 秒内未返回时，返回内置 Mock 内容（isFallback: true）
 * @param {string} subject 学科，如「语文」
 * @param {string} grade 年级，如「一年级」
 * @param {string} topic 知识点，如「比大小」
 */
export async function generateKnowledgeContent(
  subject,
  grade,
  topic,
  { signal } = {},
) {
  const endpoint = `${API_BASE}/api/ai/knowledge-content`

  try {
    const data = await postJson(
      '/api/ai/knowledge-content',
      { subject, grade, topic },
      { signal, timeoutMs: KNOWLEDGE_TIMEOUT },
    )

    // 前端质量闸门：即使后端校验过，这里仍然拦一次
    validateKnowledgeContent(data)

    return data
  } catch (error) {
    // 组件卸载导致的取消不打印、也不兜底
    if (error.name === 'AbortError' || signal?.aborted) throw error

    console.error('[AIService] 生成知识点内容失败，已使用兜底内容', {
      endpoint,
      subject,
      grade,
      topic,
      message: error.message,
      error,
    })

    return buildFallbackContent(topic)
  }
}
