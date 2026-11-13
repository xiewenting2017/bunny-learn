import 'dotenv/config'
import cors from 'cors'
import express from 'express'

const app = express()
const PORT = process.env.PORT || 4000

// 允许前端（Vite 开发服务器）跨域访问
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://127.0.0.1:5173',
      'http://localhost:5174',
      'http://127.0.0.1:5174',
      'http://localhost:5175',
      'http://127.0.0.1:5175',
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
)

app.use(express.json())

// 大模型可能返回代码块或夹杂说明文字，尽量从中提取 JSON
function parseModelJson(text) {
  const cleaned = String(text ?? '')
    .trim()
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/```\s*$/, '')
    .trim()

  try {
    return JSON.parse(cleaned)
  } catch {
    // 继续尝试提取第一个完整 JSON 对象
  }

  const match = cleaned.match(/\{[\s\S]*\}/)

  if (match) {
    try {
      return JSON.parse(match[0])
    } catch {
      // 落到下面的统一报错
    }
  }

  console.error('[AI] 无法解析模型返回内容:', cleaned.slice(0, 500))
  throw new Error('模型返回内容无法解析为 JSON')
}

// 统一的模型调用：只接受 JSON 输出，密钥仅保存在服务端
async function callModelJson(messages, temperature = 0.1) {
  const apiKey = process.env.OPENAI_API_KEY

  if (!apiKey) {
    const error = new Error('AI 服务未配置：请设置 OPENAI_API_KEY')
    error.status = 503
    throw error
  }

  const baseUrl = (process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1').replace(/\/+$/, '')
  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini'

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      temperature,
      response_format: { type: 'json_object' },
      messages,
    }),
    signal: AbortSignal.timeout(20000),
  })

  if (!response.ok) {
    throw new Error(`上游接口返回 ${response.status}`)
  }

  const data = await response.json()
  const content = data.choices?.[0]?.message?.content ?? ''

  return parseModelJson(content)
}

function sendAiError(res, error) {
  console.error('[AI] 请求失败:', error.message)
  const status = error.status === 503 ? 503 : 502
  const message =
    status === 503 ? error.message : 'AI 生成失败，请稍后重试'
  res.status(status).json({ error: message })
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() })
})

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' })
})

// 按知识点生成一道单选题（练习页使用）
app.post('/api/ai/question', async (req, res) => {
  const name = String(req.body?.name ?? '').trim()

  if (!name) {
    return res.status(400).json({ error: '缺少知识点名称 name' })
  }

  const systemPrompt = [
    '你是一位严谨的中国一年级数学/语文/英语老师，只输出合法 JSON。',
    '',
    '【铁律 —— 必须 100% 遵守，违者打零分】',
    '1. 数值/计算范围绝对不能超出当前一年级教学大纲：',
    '   - 数学：20 以内加减法（一年级上）、100 以内加减法（一年级下）、认识图形、比大小、分类整理。',
    '   - 禁止出现乘除法、负数、分数、小数、多位数、复杂应用题等超纲内容。',
    '2. 举例必须符合 6-8 岁孩子的真实生活常识（苹果、铅笔、玩具、上学、动物园、小动物等），不能瞎编。',
    '3. 数学题请在内部进行逐步思考（Chain of Thought），算对之后再输出答案。计算结果必须 100% 正确。',
    '4. 语文题只考一年级生字、拼音、简单词语搭配；英语题只考一年级常见单词和简单问候。',
    '5. 恰好 3 个选项，互不相同；answer 必须与其中一个选项文字完全一致；不设陷阱，不玩文字游戏。',
    '6. 句子口语化，一次只问一个点，题干控制在 20 字以内。',
    '',
    '【Few-Shot 正确示例】',
    '',
    '示例 1（数学 · 比大小）：',
    '{"question":"盘子里有3个苹果和5个梨，哪个多？","options":["苹果多","梨多","一样多"],"answer":"梨多","hint":"数一数，3个还是5个？"}',
    '',
    '示例 2（数学 · 20 以内加法）：',
    '{"question":"树上有8只鸟，又飞来5只，一共几只？","options":["11只","13只","15只"],"answer":"13只","hint":"8加5等于多少？"}',
    '',
    '示例 3（语文 · 拼音）：',
    '{"question":"\"妈\"的拼音声调是第几声？","options":["第一声","第二声","第四声"],"answer":"第一声","hint":"mā，跟我读~"}',
    '',
    '示例 4（英语 · 颜色）：',
    '{"question":"苹果通常是什么颜色？","options":["red","blue","green"],"answer":"red","hint":"想想红红的大苹果~"}',
  ].join('\n')

  const userPrompt = [
    `知识点：【${name}】`,
    '请生成一道单选题，严格按以下 JSON 结构返回，不要任何多余文字：',
    '{"question":"题干","options":["选项1","选项2","选项3"],"answer":"正确选项原文","hint":"答错时的提示"}',
  ].join('\n')

  try {
    const question = await callModelJson([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ])

    const valid =
      typeof question.question === 'string' &&
      Array.isArray(question.options) &&
      question.options.length === 3 &&
      new Set(question.options).size === 3 &&
      question.options.every((item) => typeof item === 'string' && item.trim()) &&
      question.options.includes(question.answer)

    if (!valid) {
      throw new Error('AI 返回的题目格式不合法')
    }

    res.json({
      question: question.question,
      options: question.options,
      answer: question.answer,
      hint: typeof question.hint === 'string' ? question.hint : '',
    })
  } catch (error) {
    sendAiError(res, error)
  }
})

// 按 学科 + 年级 + 知识点 生成「讲解 + 练习」结构化内容
app.post('/api/ai/knowledge-content', async (req, res) => {
  const subject = String(req.body?.subject ?? '').trim()
  const grade = String(req.body?.grade ?? '').trim()
  const topic = String(req.body?.topic ?? '').trim()

  if (!subject || !grade || !topic) {
    return res.status(400).json({ error: '缺少参数：subject、grade、topic 均为必填' })
  }

  const systemPrompt = [
    '你是一位严谨的中国一年级数学/语文/英语老师，只输出合法 JSON。',
    '你的学生是 6-8 岁的小朋友，识字量有限，注意力时间短。',
    '',
    '【铁律 —— 必须 100% 遵守，违者打零分】',
    '1. 数值/计算范围绝对不能超出当前一年级教学大纲：',
    '   - 数学：20 以内加减法（一年级上）、100 以内加减法（一年级下）、认识图形、比大小、分类整理。',
    '   - 禁止出现乘除法、负数、分数、小数、多位数、复杂应用题等超纲内容。',
    '2. 举例必须符合 6-8 岁孩子的真实生活常识（苹果、铅笔、玩具、上学、动物园、小动物等），不能瞎编。',
    '3. 数学题请在内部进行逐步思考（Chain of Thought），算对之后再输出答案。计算结果必须 100% 正确。',
    '4. 语文题只考一年级生字、拼音、简单词语搭配；英语题只考一年级常见单词和简单问候。',
    '5. 讲解控制在 2-3 句话、80 字以内，用孩子熟悉的场景打比方，口语化，一次只讲一个点。',
    '6. 练习题恰好 3 个选项，互不相同；answer 必须与其中一个选项文字完全一致；不设陷阱，不玩文字游戏。',
    '7. 只输出合法 JSON，不要 Markdown、不要代码块、不要任何额外说明。',
    '',
    '【Few-Shot 正确示例 —— 数学】',
    '输入：学科=数学，年级=一年级，知识点=比大小',
    '输出：',
    '{"explanation":"比大小就是看哪个数字代表的物品更多。比如盘子里有3个苹果，另一个盘子里有5个苹果，5比3多，所以5 > 3。","question":{"question":"左边有2只小猫，右边有4只小狗，哪边更多？","options":["左边小猫","右边小狗","一样多"],"answer":"右边小狗","hint":"数一数，2还是4？"}}',
    '',
    '【Few-Shot 正确示例 —— 数学 20 以内加法】',
    '输入：学科=数学，年级=一年级，知识点=9加几',
    '输出：',
    '{"explanation":"算9加几可以用凑十法。比如9+4，把4分成1和3，9+1=10，再加3就是13。","question":{"question":"9+6等于多少？","options":["14","15","16"],"answer":"15","hint":"9+1=10，再加剩下的5~"}}',
    '',
    '【Few-Shot 正确示例 —— 语文】',
    '输入：学科=语文，年级=一年级，知识点=拼音声调',
    '输出：',
    '{"explanation":"拼音有四个声调，像小汽车爬坡一样：一声平、二声扬、三声拐弯、四声降。","question":{"question":"\"爸\"的声调是第几声？","options":["第一声","第三声","第四声"],"answer":"第四声","hint":"bà，跟我读~"}}',
    '',
    '【Few-Shot 正确示例 —— 英语】',
    '输入：学科=英语，年级=一年级，知识点=动物单词',
    '输出：',
    '{"explanation":"小动物都有英文名字哦。小狗叫 dog，小猫叫 cat，是不是很有趣呀。","question":{"question":"小狗的英文怎么说？","options":["cat","dog","pig"],"answer":"dog","hint":"汪汪汪~"}}',
  ].join('\n')

  const userPrompt = [
    `学科：${subject}`,
    `年级：${grade}`,
    `知识点：${topic}`,
    '请生成一段简短讲解和一道互动练习题，严格按以下 JSON 结构返回，不要任何多余文字：',
    '{"explanation":"给孩子看的简短讲解","question":{"question":"题目文字","options":["选项1","选项2","选项3"],"answer":"正确选项原文","hint":"答错时的提示"}}',
  ].join('\n')

  try {
    const content = await callModelJson([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ])

    const question = content?.question ?? {}
    const valid =
      typeof content.explanation === 'string' &&
      content.explanation.trim() &&
      typeof question.question === 'string' &&
      question.question.trim() &&
      Array.isArray(question.options) &&
      question.options.length === 3 &&
      new Set(question.options).size === 3 &&
      question.options.every((item) => typeof item === 'string' && item.trim()) &&
      question.options.includes(question.answer)

    if (!valid) {
      throw new Error('AI 返回的内容格式不合法')
    }

    res.json({
      explanation: content.explanation,
      question: {
        question: question.question,
        options: question.options,
        answer: question.answer,
        hint: typeof question.hint === 'string' ? question.hint : '',
      },
    })
  } catch (error) {
    sendAiError(res, error)
  }
})

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`)
})
