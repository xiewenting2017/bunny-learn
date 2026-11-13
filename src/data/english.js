// 一年级英语知识点（扁平数组，与数学 knowledgeData 统一格式）
export const englishData = [
  // ── 一年级上册 ──

  {
    id: 'greetings_hello',
    name: 'Hello / Hi',
    module: '问候',
    grade: '一年级上册',
    description: '学习最简单的英语打招呼用语：Hello 和 Hi。',
    practice: [
      { question: '早上见到朋友说什么？', options: ['Goodbye', 'Hello', 'See you'], answer: 'Hello' },
      { question: '"Hi" 是什么意思？', options: ['再见', '你好', '谢谢'], answer: '你好' },
      { question: 'Hello 和 Hi 哪个更随意一点？', options: ['一样', 'Hi 更随意', 'Hello 更随意'], answer: 'Hi 更随意' },
    ],
  },
  {
    id: 'greetings_morning',
    name: 'Good morning / Goodbye',
    module: '问候',
    grade: '一年级上册',
    description: '学早上问候 Good morning 和告别 Goodbye。',
    practice: [
      { question: '早上见到老师说？', options: ['Good afternoon', 'Good morning', 'Good night'], answer: 'Good morning' },
      { question: '放学回家时跟同学说？', options: ['Hello', 'Goodbye', 'Thank you'], answer: 'Goodbye' },
      { question: '"Good" 的意思是？', options: ['好的', '坏的', '大的'], answer: '好的' },
    ],
  },
  {
    id: 'ask_name',
    name: "What's your name? / I'm...",
    module: '自我介绍',
    grade: '一年级上册',
    description: '学会问别人名字和介绍自己。',
    practice: [
      { question: '想知道对方叫什么名字应该问？', options: ['How are you?', "What's your name?", 'Where are you?'], answer: "What's your name?" },
      { question: "I'm Tom. 这里的 I'm 是什么意思？", options: ['我是', '我要', '我会'], answer: '我是' },
      { question: "别人问 What's your name? 你应该回答？", options: ['Yes.', "I'm Li Lei.", 'No.'], answer: "I'm Li Lei." },
    ],
  },

  {
    id: 'numbers_1_10',
    name: 'One to Ten',
    module: '数字',
    grade: '一年级上册',
    description: '认读英语数字 1 到 10：one two three four five six seven eight nine ten。',
    practice: [
      { question: '英语数字"3"是？', options: ['two', 'three', 'four'], answer: 'three' },
      { question: '"five" 是几？', options: ['4', '5', '6'], answer: '5' },
      { question: '数数：one two three ___ five，中间填？', options: ['four', 'six', 'ten'], answer: 'four' },
    ],
  },
  {
    id: 'ask_age',
    name: 'How old are you?',
    module: '数字',
    grade: '一年级上册',
    description: '用英语问几岁了和回答自己的年龄。',
    practice: [
      { question: '想知道对方几岁了怎么问？', options: ['How are you?', 'How old are you?', 'What time is it?'], answer: 'How old are you?' },
      { question: '如果你七岁了，回答是？', options: ["I'm seven.", 'Yes, I am.', 'Seven years.'], answer: "I'm seven." },
      { question: '"old" 的意思是？', options: ['年轻', '大/老', '小'], answer: '大/老' },
    ],
  },

  {
    id: 'colors_red',
    name: 'Red / Yellow / Blue',
    module: '颜色',
    grade: '一年级上册',
    description: '认识三种基础颜色英语：红色 Red、黄色 Yellow、蓝色 Blue。',
    practice: [
      { question: '红色的英文是？', options: ['blue', 'yellow', 'red'], answer: 'red' },
      { question: '香蕉通常是什么颜色？', options: ['red', 'yellow', 'blue'], answer: 'yellow' },
      { question: '大海通常是什么颜色？', options: ['red', 'yellow', 'blue'], answer: 'blue' },
    ],
  },
  {
    id: 'colors_more',
    name: 'Green / Black / White',
    module: '颜色',
    grade: '一年级上册',
    description: '认识另外三种常见颜色：绿色 Green、黑色 Black、白色 White。',
    practice: [
      { question: '草地是什么颜色？', options: ['red', 'green', 'black'], answer: 'green' },
      { question: '晚上天空是什么颜色？', options: ['white', 'black', 'green'], answer: 'black' },
      { question: '牛奶是什么颜色？', options: ['black', 'green', 'white'], answer: 'white' },
    ],
  },

  {
    id: 'school_things',
    name: 'Pen / Pencil / Book',
    module: '学习用品',
    grade: '一年级上册',
    description: '认识学习用品英语：钢笔 Pen、铅笔 Pencil、书 Book。',
    practice: [
      { question: '铅笔的英文是？', options: ['pen', 'pencil', 'book'], answer: 'pencil' },
      { question: '"book" 是什么？', options: ['书', '桌子', '椅子'], answer: '书' },
      { question: '写字用的圆珠笔叫？', options: ['pencil', 'pen', 'eraser'], answer: 'pen' },
    ],
  },

  {
    id: 'animals_cat_dog',
    name: 'Cat / Dog / Bird',
    module: '动物',
    grade: '一年级上册',
    description: '认识三种小动物英语：猫 Cat、狗 Dog、鸟 Bird。',
    practice: [
      { question: '"汪汪"叫的动物英文是？', options: ['cat', 'dog', 'bird'], answer: 'dog' },
      { question: '猫会怎么叫？', options: ['bow-wow', 'meow', 'tweet'], answer: 'meow' },
      { question: '会飞的动物英文是？', options: ['cat', 'bird', 'dog'], answer: 'bird' },
    ],
  },
  {
    id: 'animals_more',
    name: 'Fish / Monkey / Panda',
    module: '动物',
    grade: '一年级上册',
    description: '认识鱼 Fish、猴子 Monkey、熊猫 Panda。',
    practice: [
      { question: '在水里游的动物是？', options: ['panda', 'fish', 'monkey'], answer: 'fish' },
      { question: '中国国宝是？', options: ['monkey', 'fish', 'panda'], answer: 'panda' },
      { question: '猴子喜欢吃什么？', options: ['banana', 'fish', 'milk'], answer: 'banana' },
    ],
  },

  {
    id: 'family',
    name: 'Dad / Mum / Brother / Sister',
    module: '家庭',
    grade: '一年级上册',
    description: '认识家庭成员英语：爸爸 Dad、妈妈 Mum、兄弟 Brother、姐妹 Sister。',
    practice: [
      { question: '爸爸的英文是？', options: ['mum', 'dad', 'brother'], answer: 'dad' },
      { question: '"sister" 是？', options: ['兄弟', '姐妹', '妈妈'], answer: '姐妹' },
      { question: '妈妈是？', options: ['dad', 'sister', 'mum'], answer: 'mum' },
    ],
  },

  // ── 一年级下册 ──

  {
    id: 'body_face',
    name: 'Eye / Ear / Nose / Mouth',
    module: '身体部位',
    grade: '一年级下册',
    description: '认识五官英语：眼睛 Eye、耳朵 Ear、鼻子 Nose、嘴巴 Mouth。',
    practice: [
      { question: '用来看东西的是？', options: ['ear', 'eye', 'nose'], answer: 'eye' },
      { question: '用来闻味道的是？', options: ['mouth', 'ear', 'nose'], answer: 'nose' },
      { question: '用来吃东西的是？', options: ['eye', 'mouth', 'ear'], answer: 'mouth' },
    ],
  },
  {
    id: 'body_hand_foot',
    name: 'Face / Hand / Foot',
    module: '身体部位',
    grade: '一年级下册',
    description: '认识脸 Face、手 Hand、脚 Foot。',
    practice: [
      { question: '脸上有什么？', options: ['hand', 'eye', 'foot'], answer: 'eye' },
      { question: '用来拿东西的是？', options: ['hand', 'foot', 'face'], answer: 'hand' },
      { question: '用来走路的是？', options: ['hand', 'face', 'foot'], answer: 'foot' },
    ],
  },
  {
    id: 'tp_action',
    name: 'Stand up / Sit down',
    module: '身体部位',
    grade: '一年级下册',
    description: '听指令做动作：Stand up 站起来，Sit down 坐下。',
    practice: [
      { question: '老师说 Stand up 你要？', options: ['坐下', '站起来', '睡觉'], answer: '站起来' },
      { question: '"Sit down" 是什么意思？', options: ['起立', '坐下', '跑步'], answer: '坐下' },
      { question: '上课铃响老师可能会说？', options: ['Stand up', 'Goodbye', 'Thank you'], answer: 'Stand up' },
    ],
  },

  {
    id: 'fruits',
    name: 'Apple / Banana / Orange',
    module: '食物',
    grade: '一年级下册',
    description: '认识三种水果：苹果 Apple、香蕉 Banana、橘子 Orange。',
    practice: [
      { question: '红色圆圆的水果是？', options: ['banana', 'apple', 'orange'], answer: 'apple' },
      { question: '"banana" 是？', options: ['苹果', '香蕉', '梨'], answer: '香蕉' },
      { question: '橙色的圆圆的水果是？', options: ['apple', 'orange', 'pear'], answer: 'orange' },
    ],
  },
  {
    id: 'food_drink',
    name: 'Rice / Bread / Milk / Water',
    module: '食物',
    grade: '一年级下册',
    description: '认识日常饮食：米饭 Rice、面包 Bread、牛奶 Milk、水 Water。',
    practice: [
      { question: '中国人主食常吃的是？', options: ['bread', 'rice', 'milk'], answer: 'rice' },
      { question: '"milk" 是什么？', options: ['水', '面包', '牛奶'], answer: '牛奶' },
      { question: '渴了应该喝什么？', options: ['water', 'rice', 'bread'], answer: 'water' },
    ],
  },
  {
    id: 'express_like',
    name: 'I like... / I don\'t like...',
    module: '食物',
    grade: '一年级下册',
    description: '学会表达喜欢和不喜欢。',
    practice: [
      { question: '你喜欢吃苹果，怎么说？', options: ['I like apples.', 'I am apple.', 'Apple like me.'], answer: 'I like apples.' },
      { question: '"don\'t like" 是什么意思？', options: ['喜欢', '不喜欢', '想吃'], answer: '不喜欢' },
      { question: '否定句式是？', options: ['I like...', 'I don\'t like...', 'I can...'], answer: 'I don\'t like...' },
    ],
  },

  {
    id: 'toys',
    name: 'Ball / Doll / Kite',
    module: '玩具',
    grade: '一年级下册',
    description: '认识三种玩具：球 Ball、娃娃 Doll、风筝 Kite。',
    practice: [
      { question: '圆圆的可以拍的是？', options: ['doll', 'ball', 'kite'], answer: 'ball' },
      { question: '"kite" 是？', options: ['娃娃', '风筝', '球'], answer: '风筝' },
      { question: '可以抱着睡觉的玩具是？', options: ['ball', 'kite', 'doll'], answer: 'doll' },
    ],
  },
  {
    id: 'prepositions',
    name: 'In / On / Under',
    module: '玩具',
    grade: '一年级下册',
    description: '学习三个方位介词：在里面 In、在上面 On、在下面 Under。',
    practice: [
      { question: '苹果在桌子上用哪个词？', options: ['under', 'in', 'on'], answer: 'on' },
      { question: '小猫在桌子底下是？', options: ['on', 'in', 'under'], answer: 'under' },
      { question: '钥匙在书包里面是？', options: ['under', 'in', 'on'], answer: 'in' },
    ],
  },

  {
    id: 'weather',
    name: 'Sunny / Rainy / Cloudy',
    module: '天气',
    grade: '一年级下册',
    description: '认识天气：晴 Sunny、雨 Rainy、多云 Cloudy。',
    practice: [
      { question: '今天太阳很大是？', options: ['rainy', 'cloudy', 'sunny'], answer: 'sunny' },
      { question: '下雨了是？', options: ['sunny', 'rainy', 'windy'], answer: 'rainy' },
      { question: '看不到太阳但不下雨是？', options: ['cloudy', 'sunny', 'rainy'], answer: 'cloudy' },
    ],
  },
  {
    id: 'can_do',
    name: 'I can run / jump / swim',
    module: '能力表达',
    grade: '一年级下册',
    description: '用 can 表达自己的能力。',
    practice: [
      { question: '"I can run" 是什么意思？', options: ['我会走', '我会跑', '我会跳'], answer: '我会跑' },
      { question: '青蛙会做什么？', options: ['run', 'swim', 'fly'], answer: 'swim' },
      { question: '"can" 的意思是？', options: ['不会', '会/能够', '想要'], answer: '会/能够' },
    ],
  },
]
