import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import { randomUUID } from 'crypto'
import { Buffer } from 'node:buffer'

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

// ── 火山引擎豆包 TTS 语音合成 ────────────────────────────────────────
// 架构说明：
//   上游（火山）V3 HTTP 本身就是 Chunked 流式 —— 每个 JSON 行带一段 base64 audio。
//   后端把上游的 chunk 直接 base64 解码成二进制 mp3，立刻 res.write() 推给前端，
//   不攒齐！这样前端能在收到第一个 chunk (~200ms) 就开始播放，
//   而不是等全部合成完 (~800ms) 才收到第一个字节。
//
// 前端用 fetch + ReadableStream 边收边攒成 Blob，再喂给 Audio 播放。
// 浏览器会自动流式播 Blob URL —— 不用 MediaSource，兼容性最好。
//
// 依赖：Node.js 18+ 自带 fetch/crypto，零第三方。

const TTS_DEFAULT_SPEAKER = 'zh_female_xueayi_saturn_bigtts' // 雪爱伊 儿童友好
const TTS_RESOURCE_ID = 'seed-tts-1.0' // 对应上面这个 bigtts 1.0 音色
const TTS_ENDPOINT_V3 = 'https://openspeech.bytedance.com/api/v3/tts/unidirectional'

// 准备上游请求的 headers 和 body —— 两种鉴权（Ark / 豆包语音控制台）自动检测
function buildTtsRequest(text, speaker) {
  const apiKey = process.env.TTS_API_KEY
  const appId = process.env.TTS_APP_ID
  const accessKey = process.env.TTS_ACCESS_KEY

  const headers = {
    'Content-Type': 'application/json',
    'X-Api-Resource-Id': process.env.TTS_RESOURCE_ID || TTS_RESOURCE_ID,
    'X-Api-Request-Id': randomUUID(),
  }

  if (appId && accessKey) {
    headers['X-Api-App-Id'] = appId
    headers['X-Api-Access-Key'] = accessKey
  } else if (apiKey) {
    headers['X-Api-Key'] = apiKey
  } else {
    const err = new Error(
      'TTS 未配置：请设 TTS_API_KEY 或 TTS_APP_ID+TTS_ACCESS_KEY',
    )
    err.status = 503
    throw err
  }

  const body = JSON.stringify({
    user: { uid: 'bunny-learn-kid' },
    namespace: 'BidirectionalTTS',
    req_params: {
      text,
      speaker,
      audio_params: { format: 'mp3', sample_rate: 24000 },
      additions: {
        disable_markdown_filter: true,
        disable_emoji_filter: false,
        max_length_to_filter_parenthesis: 0,
      },
    },
  })

  return { headers, body }
}

// ── 把文本按标点切成短句（支持中英混合）────────────────────────────
// 规则：遇到中文/英文句末标点就切，连切合并为一个分隔符，空句子丢掉。
// 兜底：整段不超过 40 字时不再切（短句对 TTS 反而更快）。
// 例："你好呀！今天天气真好。我们一起玩吧～" → ["你好呀！", "今天天气真好。", "我们一起玩吧～"]
function splitIntoSentences(text) {
  // 中英文句末标点都算（多叠标点保留最后一个即可）
  const SPLIT_RE = /[。！？!?；;～\.\s]+/g
  const raw = text.split(SPLIT_RE)
  const marks = text.match(SPLIT_RE) || []

  const sentences = []
  for (let i = 0; i < raw.length; i++) {
    const part = raw[i].trim()
    if (!part) continue
    // 把吃掉的标点加回去（最后一个有效句子可能没标点，保留原文尾巴）
    const mark = marks[i] || ''
    sentences.push(part + mark.trim())
  }

  // 兜底：整段没标点 → 退化成一句
  if (sentences.length === 0) return [text]

  // 单句过长（>80字）→ 按逗号/顿号再切一次
  const result = []
  for (const s of sentences) {
    if (s.length <= 80) {
      result.push(s)
    } else {
      const sub = s.split(/[，,、]/).map((p) => p.trim()).filter(Boolean)
      for (const sub of sub) result.push(sub)
    }
  }
  return result
}

// ── 一次上游 TTS 请求，拿到所有二进制 chunk ──────────────────────────
// 用独立 timeout 保证上游 10s 不返回就立刻失败（不依赖前端断开）
async function fetchSentenceAudio(sentence, speaker, signal) {
  const { headers, body } = buildTtsRequest(sentence, speaker)

  // 校验 headers 里的 key 是否含非 ASCII（Node.js fetch 会直接挂住）
  const headerIssues = Object.entries(headers).filter(([, v]) =>
    typeof v === 'string' && /[^\x00-\x7F]/.test(v),
  )
  if (headerIssues.length > 0) {
    throw new Error(
      `TTS 配置错误：header 含非 ASCII 字符 → ${headerIssues.map(([k]) => k).join(', ')}，请在 .env 里填真实的 API Key`,
    )
  }

  // 双保险：上游独立 10s timeout + 前端 disconnect signal
  const upstreamCtrl = new AbortController()
  const timer = setTimeout(() => upstreamCtrl.abort(new Error('上游 TTS timeout 10s')), 10000)
  signal?.addEventListener('abort', () => upstreamCtrl.abort(), { once: true })

  let upstream
  try {
    upstream = await fetch(TTS_ENDPOINT_V3, {
      method: 'POST',
      headers,
      body,
      signal: upstreamCtrl.signal,
    })
  } catch (err) {
    clearTimeout(timer)
    if (upstreamCtrl.signal.reason) throw new Error(upstreamCtrl.signal.reason.message)
    throw err
  }
  clearTimeout(timer)

  if (!upstream.ok) {
    const t = await upstream.text().catch(() => '')
    console.error('[TTS] 子句上游 HTTP', upstream.status, t.slice(0, 200))
    throw new Error(`子句上游 ${upstream.status}: ${t.slice(0, 120)}`)
  }

  // 流式读上游的 JSON 行，立刻 base64 → 二进制，累积到 chunks
  const reader = upstream.body.getReader()
  const decoder = new TextDecoder('utf-8')
  const chunks = []
  let buffer = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    buffer += decoder.decode(value, { stream: true })

    let idx
    while ((idx = buffer.indexOf('\n')) !== -1) {
      const line = buffer.slice(0, idx).trim()
      buffer = buffer.slice(idx + 1)
      if (!line) continue

      let json
      try { json = JSON.parse(line) } catch { continue }
      if (json.error) break
      if (json.audio) chunks.push(Buffer.from(json.audio, 'base64'))
      if (json.event === 'Finished') break
    }
  }

  // 合并所有 chunk 为一段 Buffer，方便前端一次性收到"这一句的完整音频"
  if (chunks.length === 0) return null
  return Buffer.concat(chunks)
}

// POST /api/tts  —— 按标点切分逐句调用 TTS，顺序拼接到前端
// Body: { text: '要朗读的文字', speaker?: '音色 ID' }
// 返回: audio/mpeg 二进制流（Chunked Transfer-Encoding，多句 mp3 依次拼接）
app.post('/api/tts', async (req, res) => {
  const text = String(req.body?.text ?? '').trim()

  if (!text) return res.status(400).json({ error: '缺少 text 参数' })
  if (text.length > 800) return res.status(400).json({ error: '文本过长（最多 800 字）' })

  const speaker = String(req.body?.speaker ?? '').trim() || TTS_DEFAULT_SPEAKER

  const sentences = splitIntoSentences(text)
  console.log(`[TTS] 分句 · 原文 ${text.length} 字 → ${sentences.length} 句`)

  const abort = new AbortController()
  let firstByteTime = null

  req.on('close', () => abort.abort())

  let headersSent = false

  try {
    // 逐句串行调用（串行是为了保证音频顺序正确 + 不触发上游并发限流）
    for (let i = 0; i < sentences.length; i++) {
      const sentence = sentences[i]
      if (!sentence.trim()) continue

      if (abort.signal.aborted) break

      const start = Date.now()
      const audio = await fetchSentenceAudio(sentence, speaker, abort.signal)
      if (!audio) continue // 空句或上游没给 audio → 跳过

      // 第一句成功了才发 headers（之前失败能直接返回 JSON 错误）
      if (!headersSent) {
        res.setHeader('Content-Type', 'audio/mpeg')
        res.setHeader('Cache-Control', 'no-cache, no-transform')
        res.flushHeaders()
        headersSent = true
        firstByteTime = start
      }

      res.write(audio) // 立刻推给前端（这一句的完整音频）
      console.log(`[TTS] 句 ${i + 1}/${sentences.length} · ${sentence.length}字 · ${audio.length}B · ${Date.now() - start}ms`)
    }

    if (!headersSent) {
      // 全跳过了（没有一句成功）
      if (!res.writableEnded) res.status(502).json({ error: 'TTS 未返回音频数据' })
      return
    }

    console.log(`[TTS] 完成 · 共 ${sentences.length} 句 · 首字节→结束 ${Date.now() - firstByteTime}ms`)
    res.end()
  } catch (err) {
    if (abort.signal.aborted) {
      console.log('[TTS] 前端已断开，已回收')
      return
    }
    console.error('[TTS] 异常:', err.message)
    if (!res.writableEnded) {
      // 还没发 headers → 能返回 JSON 错误
      if (!headersSent) {
        res.status(502).json({ error: err.message })
      } else {
        try { res.end() } catch {}
      }
    }
  }
})

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
