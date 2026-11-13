#!/usr/bin/env node
import 'dotenv/config'
/**
 * 离线题库批量生成脚本
 *
 * 用法：
 *   # 先设置环境变量（只需第一次）
 *   $env:OPENAI_API_KEY="sk-xxx"
 *   $env:OPENAI_BASE_URL="https://api.deepseek.com/v1"   # 可选
 *   $env:OPENAI_MODEL="deepseek-chat"                    # 可选
 *
 *   # 生成全部知识点（断点续跑，已有的跳过）
 *   node generateScript.js
 *
 *   # 重新生成某个知识点（用 --force 指定 id）
 *   node generateScript.js --force compare_size
 *
 *   # 只跑前 N 个（测试用）
 *   node generateScript.js --limit 3
 *
 * 输出：public/questionBank.json
 * 结构：[{ id, name, grade, module, explanation, questions: [{ question, options, answer, hint } x5] }, ...]
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// ── 配置 ──────────────────────────────────────────────────────
const QUESTIONS_PER_TOPIC = 5          // 每个知识点生成几道题
const REQUEST_INTERVAL_MS = 1500        // 两次调用之间间隔（秒），避免触发速率限制
const OUTPUT_PATH = path.join(__dirname, 'public', 'questionBank.json')

// ── 解析命令行参数 ─────────────────────────────────────────────
const args = new Map()
for (let i = 2; i < process.argv.length; i++) {
  const key = process.argv[i]
  const val = process.argv[i + 1]
  if (key.startsWith('--')) {
    args.set(key.slice(2), val ?? true)
    if (val && !val.startsWith('--')) i++
  }
}
const FORCE_ID = args.get('force') || null
const LIMIT = args.get('limit') ? Number(args.get('limit')) : null

// ── 环境变量 ──────────────────────────────────────────────────
const apiKey = process.env.OPENAI_API_KEY
if (!apiKey) {
  console.error('❌ 缺少 OPENAI_API_KEY 环境变量')
  console.error('   PowerShell 示例：$env:OPENAI_API_KEY="sk-xxx"')
  process.exit(1)
}
const baseUrl = (process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1').replace(/\/+$/, '')
const model = process.env.OPENAI_MODEL || 'gpt-4o-mini'

// ── System Prompt 模板（按学科动态生成）────────────────────────
function buildSystemPrompt(subject) {
  if (subject === 'math') {
    return [
      '你是一位严谨的中国一年级数学老师，只输出合法 JSON。',
      '',
      '【铁律 —— 必须 100% 遵守，违者打零分】',
      '1. 数值/计算范围绝对不能超出当前一年级教学大纲：',
      '   - 一年级上：20 以内加减法、认识图形、比大小、分类整理。',
      '   - 一年级下：100 以内加减法、认识平面图形、数的组成、人民币。',
      '   - 禁止出现乘除法、负数、分数、小数、多位数、复杂应用题等超纲内容。',
      '2. 举例必须符合 6-8 岁孩子的真实生活常识（苹果、铅笔、玩具、上学、动物园、小动物等），不能瞎编。',
      '3. 数学题请在内部进行逐步思考（Chain of Thought），算对之后再输出答案。计算结果必须 100% 正确。',
      '4. 恰好 3 个选项，互不相同；answer 必须与其中一个选项文字完全一致；不设陷阱，不玩文字游戏。',
      '5. 句子口语化，一次只问一个点，题干控制在 20 字以内。',
      '6. 只输出合法 JSON，不要 Markdown、不要代码块、不要任何额外说明。',
      '',
      '【Few-Shot 正确示例 —— 比大小】',
      '{"explanation":"比大小就是看哪个数字代表的物品更多。比如盘子里有3个苹果，另一个盘子里有5个苹果，5比3多，所以5 > 3。","question":{"question":"左边有2只小猫，右边有4只小狗，哪边更多？","options":["左边小猫","右边小狗","一样多"],"answer":"右边小狗","hint":"数一数，2还是4？"}}',
      '',
      '【Few-Shot 正确示例 —— 9加几】',
      '{"explanation":"9 加一个数，可以把另一个数分成 1 和剩下的，先让 9 加 1 凑成 10，再加剩下的。","question":{"question":"9 + 4 等于几？","options":["12","13","14"],"answer":"13","hint":"9+1=10，4分成1和3，10+3=13"}}',
    ].join('\n')
  }

  if (subject === 'chinese') {
    return [
      '你是一位严谨的中国一年级语文老师，只输出合法 JSON。',
      '',
      '【铁律 —— 必须 100% 遵守】',
      '1. 题目严格限定在一年级语文上册/下册教学大纲内：拼音、识字、简单阅读理解。',
      '2. 拼音题只考已经学过的声母/韵母（b p m f / a o e / zh ch sh r 等），不考整体认读音节以外的超纲内容。',
      '3. 举例必须用 6-8 岁孩子熟悉的生活场景（上学、家人、小动物、水果、玩具）。',
      '4. 恰好 3 个选项，互不相同；answer 必须与选项原文完全一致。',
      '5. 题干简短口语化，一次只问一个点。',
      '6. 只输出合法 JSON，不要任何额外说明。',
      '',
      '【Few-Shot 正确示例 —— 拼音 a o e】',
      '{"explanation":"a o e 是三个最基础的单韵母。发 a 时张大嘴巴，o 嘴巴圆圆，e 嘴角向两边。","question":{"question":"张大嘴巴发出的第一个音是？","options":["o","a","e"],"answer":"a","hint":"医生让你啊的那个音"}}',
      '',
      '【Few-Shot 正确示例 —— 古诗静夜思】',
      '{"explanation":"静夜思是李白写的想家的诗：床前明月光，疑是地上霜。举头望明月，低头思故乡。","question":{"question":"举头望的是什么？","options":["太阳","明月","星星"],"answer":"明月","hint":"晚上发光的那个"}}',
    ].join('\n')
  }

  // science —— 一年级科学，限制只能出选择题
  return [
    '你是一位严谨的中国一年级科学老师，只输出合法 JSON。',
    '',
    '【铁律 —— 必须 100% 遵守】',
    '1. 题目严格限定在一年级科学上册/下册教学大纲：植物、动物、感官、材料、天气、自然现象。',
    '2. 只能出单选题（恰好 3 个选项，互不相同），绝对不能出填空题、判断题、简答题。',
    '3. 科学知识点必须符合客观事实（例如：水在标准大气压下沸点是 100°C；地球自转产生昼夜；植物需要阳光）。',
    '4. 举例必须用 6-8 岁孩子能亲眼观察到的生活场景（蚂蚁搬家、树叶变黄、下雨、彩虹、蚂蚁、蜗牛、木头、玻璃等）。',
    '5. answer 必须与其中一个选项原文完全一致；不设陷阱，不玩文字游戏。',
    '6. 句子口语化，一次只问一个点，题干控制在 25 字以内。',
    '7. 只输出合法 JSON，不要任何额外说明。',
    '',
    '【Few-Shot 正确示例 —— 认识叶子】',
    '{"explanation":"叶子是植物进行光合作用的主要器官，大多数叶子是绿色的，秋天会变黄变红。","question":{"question":"大多数叶子是什么颜色？","options":["红色","绿色","蓝色"],"answer":"绿色","hint":"想想树上的叶子"}}',
    '',
    '【Few-Shot 正确示例 —— 水很重要】',
    '{"explanation":"水是生命之源，人和动物、植物都离不开水。我们要节约用水。","question":{"question":"人几天不喝水就不行了？","options":["7天","2-3天","一个月"],"answer":"2-3天","hint":"水是生命之源"}}',
  ].join('\n')
}

// ── 工具函数 ──────────────────────────────────────────────────
function sleep(ms) { return new Promise((r) => setTimeout(r, ms)) }

function parseModelJson(text) {
  const cleaned = String(text ?? '')
    .trim()
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/```\s*$/, '')
    .trim()
  try { return JSON.parse(cleaned) } catch {}
  const match = cleaned.match(/\{[\s\S]*\}/)
  if (match) {
    try { return JSON.parse(match[0]) } catch {}
  }
  return null
}

function callModel(messages) {
  return fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      temperature: 0.1,
      response_format: { type: 'json_object' },
      messages,
    }),
    signal: AbortSignal.timeout(30_000),
  }).then(async (res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`)
    const data = await res.json()
    return parseModelJson(data.choices?.[0]?.message?.content ?? '')
  })
}

// 单道题校验（复用前端闸门逻辑）
function validateOneQuestion(data) {
  const errors = []
  if (!data?.explanation || typeof data.explanation !== 'string') {
    errors.push('explanation 缺失')
  }
  const q = data?.question
  if (!q || typeof q !== 'object') {
    errors.push('question 对象缺失')
    return errors
  }
  if (typeof q.question !== 'string' || !q.question.trim()) errors.push('题干为空')
  if (!Array.isArray(q.options)) {
    errors.push('options 不是数组')
  } else {
    if (q.options.length < 2) errors.push(`options 数量不足 (${q.options.length})`)
    if (new Set(q.options).size !== q.options.length) errors.push('options 有重复')
  }
  if (typeof q.answer !== 'string' || !q.options?.includes(q.answer)) {
    errors.push(`answer="${q.answer}" 不在 options 白名单`)
  }
  return errors
}

// ── 主流程 ────────────────────────────────────────────────────
async function main() {
  // 1. 动态 import 三个学科的数据（统一从 curriculum.js 入口）
  const entryPath = path.join(__dirname, 'src', 'data', 'curriculum.js')
  const entryUrl = pathToFileURL(entryPath).href
  const { getKnowledgeList } = await import(entryUrl)

  const ALL_SUBJECTS = ['math', 'chinese', 'english', 'science']
  const ALL_TOPICS = []
  for (const subject of ALL_SUBJECTS) {
    const list = getKnowledgeList(subject)
    for (const item of list) {
      ALL_TOPICS.push({ ...item, subject })
    }
  }
  console.log(`📚 共加载 ${ALL_TOPICS.length} 个知识点（数学 ${getKnowledgeList('math').length} + 语文 ${getKnowledgeList('chinese').length} + 英语 ${getKnowledgeList('english').length}）`)

  // 2. 读取已有题库（断点续跑）
  let bank = []
  if (fs.existsSync(OUTPUT_PATH)) {
    try {
      bank = JSON.parse(fs.readFileSync(OUTPUT_PATH, 'utf-8'))
      console.log(`📂 已有题库 ${bank.length} 条，继续增量生成`)
    } catch (e) {
      console.warn(`⚠️  旧题库解析失败，将从空开始：${e.message}`)
      bank = []
    }
  }
  const existingIds = new Set(bank.map((item) => item.id))

  // 3. 过滤：limit / force / 已存在跳过
  const targets = ALL_TOPICS.filter((t, idx) => {
    if (LIMIT !== null && idx >= LIMIT) return false
    if (FORCE_ID) return t.id === FORCE_ID
    return !existingIds.has(t.id)
  })

  if (targets.length === 0) {
    console.log('✅ 没有需要生成的知识点（全部已有或已被 limit/force 过滤）')
    return
  }

  console.log(`🎯 本次待生成 ${targets.length} 个知识点 × ${QUESTIONS_PER_TOPIC} 道题`)
  console.log(`🔑 模型: ${model}  |  接口: ${baseUrl}`)
  if (!fs.existsSync(path.dirname(OUTPUT_PATH))) {
    fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true })
  }

  // 4. 逐个生成
  const failures = []
  for (let i = 0; i < targets.length; i++) {
    const topic = targets[i]
    console.log(`\n[${i + 1}/${targets.length}] 🔹 ${topic.name} (${topic.id}) — ${topic.grade}`)

    try {
      const { explanation, questions } = await generateOneTopic(topic)
      // 写入题库
      const record = {
        id: topic.id,
        name: topic.name,
        grade: topic.grade,
        module: topic.module,
        description: topic.description,
        explanation,
        questions,
        generatedAt: new Date().toISOString(),
      }

      // 如果是 force 覆盖，移除旧的
      if (FORCE_ID) {
        bank = bank.filter((b) => b.id !== topic.id)
      }
      bank.push(record)

      // 每个知识点完成就保存一次，中途挂了不丢进度
      fs.writeFileSync(OUTPUT_PATH, JSON.stringify(bank, null, 2), 'utf-8')
      console.log(`   ✅ 已保存 (${questions.length} 道题)`)
    } catch (err) {
      console.error(`   ❌ 失败：${err.message}`)
      failures.push({ id: topic.id, name: topic.name, error: err.message })
    }

    if (i < targets.length - 1) await sleep(REQUEST_INTERVAL_MS)
  }

  // 5. 汇总
  console.log(`\n═══════════════════════════════════════`)
  console.log(`📊 完成：${bank.length} 条 / 失败：${failures.length}`)
  if (failures.length) {
    console.log(`\n❌ 失败列表（可 --force 单独重跑）：`)
    for (const f of failures) console.log(`   - ${f.id} (${f.name}): ${f.error}`)
  }
  console.log(`\n📁 输出文件：${path.relative(__dirname, OUTPUT_PATH)}`)
}

// ── 生成单个知识点 ──────────────────────────────────────────────
async function generateOneTopic(topic) {
  const userPrompt = [
    `知识点：${topic.name}`,
    `年级：${topic.grade}`,
    `模块：${topic.module}`,
    `描述：${topic.description}`,
    `请生成 ${QUESTIONS_PER_TOPIC} 道不同的练习题，以及一段简短讲解。`,
    '严格按以下 JSON 结构返回，不要任何多余文字：',
    '{',
    '  "explanation": "给孩子看的 2-3 句简短讲解",',
    '  "questions": [',
    '    {"question":"题干","options":["选项1","选项2","选项3"],"answer":"正确选项原文","hint":"答错提示"}',
    '  ]',
    '}',
  ].join('\n')

  const raw = await callModel([
    { role: 'system', content: buildSystemPrompt(topic.subject) },
    { role: 'user', content: userPrompt },
  ])

  if (!raw) throw new Error('模型返回为空或无法解析 JSON')

  // 校验 explanation
  if (typeof raw.explanation !== 'string' || !raw.explanation.trim()) {
    throw new Error('explanation 缺失')
  }

  // 校验 questions 数组
  const list = raw.questions
  if (!Array.isArray(list)) throw new Error('questions 不是数组')
  if (list.length < 3) throw new Error(`questions 太少 (${list.length})`)

  const validated = []
  for (let i = 0; i < list.length; i++) {
    const q = list[i]
    const errs = validateOneQuestion({ explanation: raw.explanation, question: q })
    if (errs.length) {
      console.warn(`   ⚠️  第 ${i + 1} 道题校验未过：${errs.join('；')} — 跳过`)
      continue
    }
    validated.push({
      question: q.question.trim(),
      options: q.options.map((o) => o.trim()),
      answer: q.answer.trim(),
      hint: typeof q.hint === 'string' ? q.hint.trim() : '',
    })
  }

  if (validated.length === 0) {
    throw new Error('所有题都校验未过，放弃')
  }

  return { explanation: raw.explanation.trim(), questions: validated }
}

main().catch((err) => {
  console.error('💥 脚本崩溃：', err)
  process.exit(1)
})
