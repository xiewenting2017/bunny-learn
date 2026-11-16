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

// ── System Prompt 模板（按学科 + 年级动态生成）──────────────────
function buildSystemPrompt(subject, grade = '') {
  const gradeStr = String(grade)
  const isGrade3 = gradeStr.includes('三年级')
  const isGrade2 = !isGrade3 && gradeStr.includes('二年级')
  const gradeLevel = isGrade3 ? '三年级' : isGrade2 ? '二年级' : '一年级'

  if (subject === 'math') {
    let scope
    if (isGrade3) {
      scope = [
        '   - 三年级上：万以内加减法、多位数乘一位数、有余数的除法、倍的认识、认识分数（几分之一/几分之几）、认识时间（时分秒）、毫米/分米/千米/吨、四边形与周长。',
        '   - 三年级下：两位数乘两位数、一位数除多位数（有余数）、小数的初步认识、面积与面积单位（平方厘米/平方分米/平方米）、年月日、简单的统计图。',
        '   - 禁止出现多位数除法、分数加减法、小数四则运算、负数、方程、比例等超纲内容。',
      ]
    } else if (isGrade2) {
      scope = [
        '   - 二年级上：100 以内加减法笔算、表内乘法（2~9 的乘法口诀）、认识角、厘米和米、观察物体。',
        '   - 二年级下：表内除法、有余数的除法、万以内数的认识、认识时间、数据收集整理。',
        '   - 禁止出现多位数的乘除法、负数、分数、小数、方程等超纲内容。',
      ]
    } else {
      scope = [
        '   - 一年级上：20 以内加减法、认识图形、比大小、分类整理。',
        '   - 一年级下：100 以内加减法、认识平面图形、数的组成、人民币。',
        '   - 禁止出现乘除法、负数、分数、小数、多位数、复杂应用题等超纲内容。',
      ]
    }

    return [
      `你是一位严谨的中国${gradeLevel}数学老师，只输出合法 JSON。`,
      '',
      '【铁律 —— 必须 100% 遵守，违者打零分】',
      '1. 数值/计算范围绝对不能超出当前教学大纲：',
      ...scope,
      '2. 举例必须符合 6-9 岁孩子的真实生活常识（苹果、铅笔、玩具、上学、动物园、小动物、超市购物、运动会等），不能瞎编。',
      '3. 数学题请在内部进行逐步思考（Chain of Thought），算对之后再输出答案。计算结果必须 100% 正确。',
      '4. 恰好 3 个选项，互不相同；answer 必须与其中一个选项文字完全一致；不设陷阱，不玩文字游戏。',
      '5. 句子口语化，一次只问一个点，题干控制在 25 字以内。',
      '6. 只输出合法 JSON，不要 Markdown、不要代码块、不要任何额外说明。',
      '',
      '【Few-Shot 正确示例 —— 倍的认识】',
      '{"explanation":"“A 是 B 的几倍”就是看 A 里面有几个 B。比如 12 里面有 3 个 4，所以 12 是 4 的 3 倍。","question":{"question":"小红有 8 块糖，小明有 4 块糖，小红的糖是小明的几倍？","options":["1 倍","2 倍","3 倍"],"answer":"2 倍","hint":"8 里面有 2 个 4"}}',
      '',
      '【Few-Shot 正确示例 —— 周长】',
      '{"explanation":"周长是图形一周的长度。长方形的周长 =（长 + 宽）× 2。","question":{"question":"一个长方形长 5 厘米、宽 3 厘米，周长是几厘米？","options":["12 厘米","16 厘米","8 厘米"],"answer":"16 厘米","hint":"(5+3)×2=16"}}',
    ].join('\n')
  }

  if (subject === 'chinese') {
    return [
      `你是一位严谨的中国${gradeLevel}语文老师，只输出合法 JSON。`,
      '',
      '【铁律 —— 必须 100% 遵守】',
      isGrade3
        ? '1. 题目严格限定在三年级语文上册/下册教学大纲内：多音字、形近字、成语、课文理解、古诗（绝句、春日等）、修辞（比喻、拟人）、关联词、日记与看图写话。'
        : isGrade2
          ? '1. 题目严格限定在二年级语文上册/下册教学大纲内：识字写字、词语积累、课文理解、古诗、量词与句式。'
          : '1. 题目严格限定在一年级语文上册/下册教学大纲内：拼音、识字、简单阅读理解。',
      isGrade3
        ? '2. 不考生僻字和超纲语法；古诗题只考已学的课文（《山行》《赠刘景文》《夜书所见》《望天门山》《饮湖上初晴后雨》《望洞庭》《早发白帝城》等）。'
        : isGrade2
          ? '2. 不考生僻字和超纲语法；拼音题只考已学过的声母、韵母和整体认读音节。'
          : '2. 拼音题只考已经学过的声母/韵母（b p m f / a o e / zh ch sh r 等），不考整体认读音节以外的超纲内容。',
      '3. 举例必须用 6-9 岁孩子熟悉的生活场景（上学、家人、小动物、水果、季节、节日）。',
      '4. 恰好 3 个选项，互不相同；answer 必须与选项原文完全一致。',
      '5. 题干简短口语化，一次只问一个点。',
      '6. 只输出合法 JSON，不要任何额外说明。',
      '',
      '【Few-Shot 正确示例 —— 古诗山行】',
      '{"explanation":"《山行》是杜牧写的秋天景色：远上寒山石径斜，白云生处有人家。停车坐爱枫林晚，霜叶红于二月花。","question":{"question":"《山行》里“霜叶红于二月花”是什么意思？","options":["霜比花更白","枫叶比二月春花还红","二月才有花"],"answer":"枫叶比二月春花还红","hint":"秋天枫叶红彤彤"}}',
      '',
      '【Few-Shot 正确示例 —— 关联词】',
      '{"explanation":"“因为……所以……”表示原因和结果的关系。比如：因为下雨了，所以地上湿了。","question":{"question":"选合适的关联词：（    ）今天下雨，（    ）运动会改期。","options":["因为……所以……","虽然……但是……","一边……一边……"],"answer":"因为……所以……","hint":"下雨是原因"}}',
    ].join('\n')
  }

  if (subject === 'english') {
    return [
      `你是一位严谨的中国${gradeLevel}英语老师，只输出合法 JSON。`,
      '',
      '【铁律 —— 必须 100% 遵守】',
      isGrade3
        ? '1. 题目严格限定在三年级英语大纲内：日常活动（go to school、get up）、星期、月份、季节、天气、方位（in/on/under）、现在进行时（简单）、食物与饮料、职业、衣物。'
        : isGrade2
          ? '1. 题目严格限定在二年级英语大纲内：数字 11-100、文具、家庭、身体部位、动物、食物、教室物品、运动、交通工具、服装、情绪、星期与月份、方位介词。'
          : '1. 题目严格限定在一年级英语大纲内：问候、数字 1-20、颜色、水果、动物、家庭、身体部位等最基础的单词和句型。',
      '2. 只考单词认读、简单词义和基础句型，不出语法填空、时态、长难句。',
      '3. 题干用中文提问，选项可以是英文单词/短语，也可以是中文意思。',
      '4. 恰好 3 个选项，互不相同；answer 必须与选项原文完全一致。',
      '5. 句子简短口语化，一次只问一个点。',
      '6. 只输出合法 JSON，不要任何额外说明。',
      '',
      '【Few-Shot 正确示例 —— 星期】',
      '{"explanation":"Monday 是星期一，Tuesday 是星期二，Wednesday 是星期三…… Sunday 是星期日。","question":{"question":"“星期三”用英语怎么说？","options":["Monday","Wednesday","Friday"],"answer":"Wednesday","hint":"Wed 开头"}}',
      '',
      '【Few-Shot 正确示例 —— 天气】',
      '{"explanation":"sunny 是晴天，rainy 是下雨，cloudy 是多云，snowy 是下雪。","question":{"question":"外面下雨了，天气可以用哪个词？","options":["sunny","rainy","snowy"],"answer":"rainy","hint":"有雨"}}',
    ].join('\n')
  }

  // science
  return [
    `你是一位严谨的中国${gradeLevel}科学老师，只输出合法 JSON。`,
    '',
    '【铁律 —— 必须 100% 遵守】',
    isGrade3
      ? '1. 题目严格限定在三年级科学上册/下册教学大纲：物质的状态（固液气）、溶解、空气的存在与压力、简单的力与运动、声音、光与影子、地球与月球、岩石与土壤、植物的生命周期、动物的生命周期。'
      : isGrade2
        ? '1. 题目严格限定在二年级科学上册/下册教学大纲：常见材料（金属、塑料、木头、玻璃）、磁铁、天气与月相、植物的生长、动物的特征、土壤与生命。'
        : '1. 题目严格限定在一年级科学上册/下册教学大纲：植物、动物、感官、材料、天气、自然现象。',
    '2. 只能出单选题（恰好 3 个选项，互不相同），绝对不能出填空题、判断题、简答题。',
    '3. 科学知识点必须符合客观事实（例如：水在标准大气压下沸点是 100°C；地球自转产生昼夜；植物需要阳光）。',
    '4. 举例必须用 6-9 岁孩子能亲眼观察到的生活场景（蚂蚁搬家、树叶变黄、下雨、彩虹、蜗牛、冰块、影子、溶解等）。',
    '5. answer 必须与其中一个选项原文完全一致；不设陷阱，不玩文字游戏。',
    '6. 句子口语化，一次只问一个点，题干控制在 25 字以内。',
    '7. 只输出合法 JSON，不要任何额外说明。',
    '',
    '【Few-Shot 正确示例 —— 物质的状态】',
    '{"explanation":"物质有三种状态：固体、液体、气体。水是液体，冰是固体，水蒸气是气体。","question":{"question":"冰块是什么状态？","options":["固体","液体","气体"],"answer":"固体","hint":"硬硬的、有形状"}}',
    '',
    '【Few-Shot 正确示例 —— 溶解】',
    '{"explanation":"溶解就是物质在水里看不见了。比如盐放进水里会溶解，沙子放进水里不会溶解。","question":{"question":"下面哪种东西放进水里会溶解？","options":["沙子","盐","石头"],"answer":"盐","hint":"做菜用的，咸咸的"}}',
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
    { role: 'system', content: buildSystemPrompt(topic.subject, topic.grade) },
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
