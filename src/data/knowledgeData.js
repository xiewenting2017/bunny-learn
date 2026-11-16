// 一年级数学知识点底层数据（与数学页面标签一一对应）
export const knowledgeData = [
  // ── 一年级上册 · 模块一：数与运算（基础） ──
  {
    id: 'numbers_1_5',
    name: '1~5 的认识',
    module: '数与运算',
    grade: '一年级上册',
    description: '认识 1~5 这五个数字，会读、会写、会数。',
    practice: [
      {
        question: '盘子里有 3 个苹果，数一数，一共有几个？',
        options: ['2', '3', '4'],
        answer: '3',
      },
      {
        question: '4 添上 1 是几？',
        options: ['4', '5', '6'],
        answer: '5',
      },
      {
        question: '数一数，一只手上有几根手指？',
        options: ['3', '4', '5'],
        answer: '5',
      },
    ],
  },
  {
    id: 'compare_size',
    name: '比大小',
    module: '数与运算',
    grade: '一年级上册',
    description: '学习如何比较5以内数字的大小。',
    practice: [
      {
        question: '左边盘子里有 3 个苹果，右边盘子里有 5 个苹果，哪边更多？',
        options: ['左边', '右边', '一样多'],
        answer: '右边',
      },
      {
        question: '2 和 4 比，哪个数小？',
        options: ['2', '4', '一样大'],
        answer: '2',
      },
      {
        question: '小明有 4 颗糖，小红也有 4 颗糖，谁的多？',
        options: ['小明多', '小红多', '一样多'],
        answer: '一样多',
      },
    ],
  },
  {
    id: 'ordinal',
    name: '第几',
    module: '数与运算',
    grade: '一年级上册',
    description: '认识序数，知道“第几”表示排列的位置。',
    practice: [
      {
        question: '排队时小猫排在第一位，小狗排在小猫后面，小狗排第几？',
        options: ['第一', '第二', '第三'],
        answer: '第二',
      },
      {
        question: '5 个小朋友排队，从前面数第 2 个小朋友的前面有几个人？',
        options: ['1', '2', '3'],
        answer: '1',
      },
      {
        question: '小猴排在队伍的第 3 位，它后面还有 2 只小动物，这一队一共有几只小动物？',
        options: ['4', '5', '6'],
        answer: '5',
      },
    ],
  },
  {
    id: 'decompose',
    name: '分与合',
    module: '数与运算',
    grade: '一年级上册',
    description: '学习 5 以内数的分解与组合。',
    practice: [
      {
        question: '5 可以分成 2 和几？',
        options: ['1', '2', '3'],
        answer: '3',
      },
      {
        question: '4 可以分成 1 和几？',
        options: ['2', '3', '4'],
        answer: '3',
      },
      {
        question: '把 5 分成两份，一份是 3，另一份是几？',
        options: ['1', '2', '3'],
        answer: '2',
      },
    ],
  },
  {
    id: 'addition',
    name: '加法',
    module: '数与运算',
    grade: '一年级上册',
    description: '理解把两部分合起来用加法计算。',
    practice: [
      {
        question: '2 + 1 = ?',
        options: ['2', '3', '4'],
        answer: '3',
      },
      {
        question: '3 + 2 = ?',
        options: ['4', '5', '6'],
        answer: '5',
      },
      {
        question: '树上有 1 只小鸟，又飞来 2 只，一共有几只？',
        options: ['2', '3', '4'],
        answer: '3',
      },
    ],
  },
  {
    id: 'subtraction',
    name: '减法',
    module: '数与运算',
    grade: '一年级上册',
    description: '理解从总数中去掉一部分用减法计算。',
    practice: [
      {
        question: '4 - 1 = ?',
        options: ['2', '3', '4'],
        answer: '3',
      },
      {
        question: '5 - 2 = ?',
        options: ['2', '3', '4'],
        answer: '3',
      },
      {
        question: '盘子里有 4 个桃子，吃掉 2 个，还剩几个？',
        options: ['2', '3', '4'],
        answer: '2',
      },
    ],
  },
  {
    id: 'zero',
    name: '0 的认识与加减',
    module: '数与运算',
    grade: '一年级上册',
    description: '认识 0，知道 0 表示一个也没有。',
    practice: [
      {
        question: '盘子里有 3 个苹果，全部吃掉了，还剩几个？',
        options: ['0', '1', '3'],
        answer: '0',
      },
      {
        question: '5 - 5 = ?',
        options: ['0', '1', '5'],
        answer: '0',
      },
      {
        question: '一个也没有，用哪个数字表示？',
        options: ['0', '1', '2'],
        answer: '0',
      },
    ],
  },
  {
    id: 'numbers_6_9',
    name: '6~9 的认识',
    module: '数与运算',
    grade: '一年级上册',
    description: '认识 6~9 这四个数字，会数、会写。',
    practice: [
      {
        question: '6 的后面一个数是几？',
        options: ['5', '7', '8'],
        answer: '7',
      },
      {
        question: '9 的前面一个数是几？',
        options: ['8', '9', '10'],
        answer: '8',
      },
      {
        question: '8 添上 1 是几？',
        options: ['7', '8', '9'],
        answer: '9',
      },
    ],
  },
  {
    id: 'add_sub_6_7',
    name: '6 和 7 的加减法',
    module: '数与运算',
    grade: '一年级上册',
    description: '掌握和是 6、7 的加法及对应的减法。',
    practice: [
      {
        question: '3 + 3 = ?',
        options: ['5', '6', '7'],
        answer: '6',
      },
      {
        question: '7 - 4 = ?',
        options: ['2', '3', '4'],
        answer: '3',
      },
      {
        question: '6 - 2 = ?',
        options: ['3', '4', '5'],
        answer: '4',
      },
    ],
  },
  {
    id: 'add_sub_8_9',
    name: '8 和 9 的加减法',
    module: '数与运算',
    grade: '一年级上册',
    description: '掌握和是 8、9 的加法及对应的减法。',
    practice: [
      {
        question: '9 - 4 = ?',
        options: ['4', '5', '6'],
        answer: '5',
      },
      {
        question: '8 - 3 = ?',
        options: ['4', '5', '6'],
        answer: '5',
      },
      {
        question: '4 + 5 = ?',
        options: ['8', '9', '10'],
        answer: '9',
      },
    ],
  },
  {
    id: 'number_10',
    name: '10 的认识与加减',
    module: '数与运算',
    grade: '一年级上册',
    description: '认识 10，掌握 10 的组成与加减法。',
    practice: [
      {
        question: '7 + 3 = ?',
        options: ['9', '10', '11'],
        answer: '10',
      },
      {
        question: '10 - 4 = ?',
        options: ['5', '6', '7'],
        answer: '6',
      },
      {
        question: '8 和几合起来是 10？',
        options: ['2', '3', '4'],
        answer: '2',
      },
    ],
  },
  {
    id: 'continuous_add_sub',
    name: '连加连减',
    module: '数与运算',
    grade: '一年级上册',
    description: '按从左到右的顺序计算连加、连减。',
    practice: [
      {
        question: '2 + 3 + 1 = ?',
        options: ['5', '6', '7'],
        answer: '6',
      },
      {
        question: '10 - 2 - 3 = ?',
        options: ['4', '5', '6'],
        answer: '5',
      },
      {
        question: '1 + 2 + 3 = ?',
        options: ['5', '6', '7'],
        answer: '6',
      },
    ],
  },
  {
    id: 'mixed_add_sub',
    name: '加减混合',
    module: '数与运算',
    grade: '一年级上册',
    description: '按从左到右的顺序计算加减混合算式。',
    practice: [
      {
        question: '5 + 2 - 3 = ?',
        options: ['3', '4', '5'],
        answer: '4',
      },
      {
        question: '8 - 3 + 2 = ?',
        options: ['3', '7', '9'],
        answer: '7',
      },
      {
        question: '4 + 5 - 2 = ?',
        options: ['7', '8', '9'],
        answer: '7',
      },
    ],
  },
  {
    id: 'number_10_again',
    name: '10 的再认识',
    module: '数与运算',
    grade: '一年级上册',
    description: '知道 10 个一是 1 个十，理解十进制。',
    practice: [
      {
        question: '10 里面有几个一？',
        options: ['1', '5', '10'],
        answer: '10',
      },
      {
        question: '1 个十是多少？',
        options: ['1', '10', '100'],
        answer: '10',
      },
      {
        question: '10 个一合起来是几个十？',
        options: ['1', '10', '100'],
        answer: '1',
      },
    ],
  },
  {
    id: 'numbers_11_20',
    name: '11~20 的认识',
    module: '数与运算',
    grade: '一年级上册',
    description: '认识 11~20 各数，知道它们由几个十和几个一组成。',
    practice: [
      {
        question: '15 里面有几个十和几个一？',
        options: ['1 个十和 5 个一', '5 个十和 1 个一', '1 个十和 0 个一'],
        answer: '1 个十和 5 个一',
      },
      {
        question: '20 里面有几个十？',
        options: ['1', '2', '10'],
        answer: '2',
      },
      {
        question: '1 个十和 3 个一组成的数是几？',
        options: ['13', '31', '4'],
        answer: '13',
      },
    ],
  },
  {
    id: 'simple_add_sub_20',
    name: '简单的加减法',
    module: '数与运算',
    grade: '一年级上册',
    description: '进行 20 以内不进位、不退位的简单加减计算。',
    practice: [
      {
        question: '10 + 5 = ?',
        options: ['5', '15', '20'],
        answer: '15',
      },
      {
        question: '18 - 6 = ?',
        options: ['11', '12', '13'],
        answer: '12',
      },
      {
        question: '10 + 9 = ?',
        options: ['19', '90', '20'],
        answer: '19',
      },
    ],
  },
  {
    id: 'add_9',
    name: '9 加几',
    module: '数与运算',
    grade: '一年级上册',
    description: '用凑十法计算 9 加几的进位加法。',
    practice: [
      {
        question: '9 + 4 = ?',
        options: ['12', '13', '14'],
        answer: '13',
      },
      {
        question: '9 + 7 = ?',
        options: ['15', '16', '17'],
        answer: '16',
      },
      {
        question: '9 + 9 = ?',
        options: ['18', '19', '20'],
        answer: '18',
      },
    ],
  },
  {
    id: 'add_8_7_6',
    name: '8/7/6 加几',
    module: '数与运算',
    grade: '一年级上册',
    description: '用凑十法计算 8、7、6 加几的进位加法。',
    practice: [
      {
        question: '8 + 5 = ?',
        options: ['12', '13', '14'],
        answer: '13',
      },
      {
        question: '7 + 6 = ?',
        options: ['12', '13', '14'],
        answer: '13',
      },
      {
        question: '6 + 5 = ?',
        options: ['10', '11', '12'],
        answer: '11',
      },
    ],
  },
  {
    id: 'add_5_4_3_2',
    name: '5/4/3/2 加几',
    module: '数与运算',
    grade: '一年级上册',
    description: '灵活运用凑十法计算较小数加几。',
    practice: [
      {
        question: '5 + 7 = ?',
        options: ['11', '12', '13'],
        answer: '12',
      },
      {
        question: '6 + 7 = ?',
        options: ['12', '13', '14'],
        answer: '13',
      },
      {
        question: '3 + 9 = ?',
        options: ['11', '12', '13'],
        answer: '12',
      },
    ],
  },

  // ── 一年级上册 · 模块二：图形与空间 ──
  {
    id: 'solid_cuboid',
    name: '辨认长方体',
    module: '图形与空间',
    grade: '一年级上册',
    description: '在生活物品中辨认长方体。',
    practice: [
      {
        question: '下面哪个物体是长方体？',
        options: ['魔方', '牙膏盒', '足球'],
        answer: '牙膏盒',
      },
      {
        question: '下面哪个物品的形状是长方体？',
        options: ['数学书', '皮球', '乒乓球'],
        answer: '数学书',
      },
      {
        question: '下面哪个物品的形状不是长方体？',
        options: ['牙膏盒', '文具盒', '皮球'],
        answer: '皮球',
      },
    ],
  },
  {
    id: 'solid_cube',
    name: '辨认正方体',
    module: '图形与空间',
    grade: '一年级上册',
    description: '在生活物品中辨认正方体。',
    practice: [
      {
        question: '下面哪个物体是正方体？',
        options: ['魔方', '皮球', '易拉罐'],
        answer: '魔方',
      },
      {
        question: '下面哪个物品的形状是正方体？',
        options: ['骰子', '易拉罐', '足球'],
        answer: '骰子',
      },
      {
        question: '魔方和足球，哪个是正方体？',
        options: ['魔方', '足球', '都不是'],
        answer: '魔方',
      },
    ],
  },
  {
    id: 'solid_cylinder',
    name: '辨认圆柱',
    module: '图形与空间',
    grade: '一年级上册',
    description: '在生活物品中辨认圆柱。',
    practice: [
      {
        question: '下面哪个物体是圆柱？',
        options: ['积木方块', '易拉罐', '乒乓球'],
        answer: '易拉罐',
      },
      {
        question: '下面哪个物品的形状是圆柱？',
        options: ['水杯', '魔方', '乒乓球'],
        answer: '水杯',
      },
      {
        question: '下面哪个物品的形状不是圆柱？',
        options: ['易拉罐', '铅笔', '足球'],
        answer: '足球',
      },
    ],
  },
  {
    id: 'solid_sphere',
    name: '辨认球',
    module: '图形与空间',
    grade: '一年级上册',
    description: '在生活物品中辨认球。',
    practice: [
      {
        question: '下面哪个物体是球？',
        options: ['骰子', '足球', '铅笔盒'],
        answer: '足球',
      },
      {
        question: '下面哪个物品的形状是球？',
        options: ['乒乓球', '牙膏盒', '魔方'],
        answer: '乒乓球',
      },
      {
        question: '球能向各个方向滚动吗？',
        options: ['能', '不能', '只能向前'],
        answer: '能',
      },
    ],
  },

  // ── 一年级上册 · 模块三：综合与游戏 ──
  {
    id: 'game_campus',
    name: '校园里找一找',
    module: '综合与游戏',
    grade: '一年级上册',
    description: '在校园环境中寻找并认识数学图形与数量。',
    practice: [
      {
        question: '校园里的正方形花坛有几条边？',
        options: ['3', '4', '5'],
        answer: '4',
      },
      {
        question: '校园里的长方形跑道有几条边？',
        options: ['3', '4', '5'],
        answer: '4',
      },
      {
        question: '校园里 2 棵树上有 4 只小鸟，又飞来 1 只，一共有几只？',
        options: ['4', '5', '6'],
        answer: '5',
      },
    ],
  },
  {
    id: 'game_playground',
    name: '操场上玩一玩',
    module: '综合与游戏',
    grade: '一年级上册',
    description: '在操场游戏中练习数数与简单加减。',
    practice: [
      {
        question: '操场上 3 个小朋友在跳绳，又来了 2 个，一共有几个？',
        options: ['4', '5', '6'],
        answer: '5',
      },
      {
        question: '操场上有 6 个小朋友，走了 2 个，还剩几个？',
        options: ['3', '4', '5'],
        answer: '4',
      },
      {
        question: '跳绳比赛中，小明跳了 8 下，小红跳了 5 下，谁跳得多？',
        options: ['小明', '小红', '一样多'],
        answer: '小明',
      },
    ],
  },
  {
    id: 'game_classroom_recognize',
    name: '教室里认一认',
    module: '综合与游戏',
    grade: '一年级上册',
    description: '在教室里认一认身边的图形和数量。',
    practice: [
      {
        question: '教室里的课桌面是什么形状？',
        options: ['长方形', '圆形', '三角形'],
        answer: '长方形',
      },
      {
        question: '教室里的钟面是什么形状？',
        options: ['圆形', '长方形', '三角形'],
        answer: '圆形',
      },
      {
        question: '教室里的一扇门是什么形状？',
        options: ['长方形', '三角形', '圆形'],
        answer: '长方形',
      },
    ],
  },
  {
    id: 'game_classroom_play',
    name: '教室里玩一玩',
    module: '综合与游戏',
    grade: '一年级上册',
    description: '用身边的物品搭一搭、摆一摆，感受图形组合。',
    practice: [
      {
        question: '用 4 个同样的小正方体可以搭成什么？',
        options: ['一个长方体', '一个球', '一个圆'],
        answer: '一个长方体',
      },
      {
        question: '用 2 个同样的小正方体可以拼成什么？',
        options: ['一个长方体', '一个球', '一个圆柱'],
        answer: '一个长方体',
      },
      {
        question: '桌上有 5 块积木，拿走 2 块，还剩几块？',
        options: ['2', '3', '4'],
        answer: '3',
      },
    ],
  },

  // ── 一年级下册 · 模块一：图形与几何 ──
  {
    id: 'plane_rectangle',
    name: '认识长方形',
    module: '图形与几何',
    grade: '一年级下册',
    description: '认识长方形，知道它有 4 条边、4 个角。',
    practice: [
      {
        question: '下面哪个图形是长方形？',
        options: ['圆形', '长方形', '三角形'],
        answer: '长方形',
      },
      {
        question: '长方形有几条边？',
        options: ['3', '4', '5'],
        answer: '4',
      },
      {
        question: '长方形的 4 条边都一样长吗？',
        options: ['都一样长', '不一样长', '有 3 条一样长'],
        answer: '不一样长',
      },
    ],
  },
  {
    id: 'plane_square',
    name: '认识正方形',
    module: '图形与几何',
    grade: '一年级下册',
    description: '认识正方形，知道它的 4 条边一样长。',
    practice: [
      {
        question: '下面哪个图形是正方形？',
        options: ['长方形', '正方形', '三角形'],
        answer: '正方形',
      },
      {
        question: '正方形有几条边一样长？',
        options: ['2 条', '3 条', '4 条'],
        answer: '4 条',
      },
      {
        question: '正方形有几个角？',
        options: ['3', '4', '5'],
        answer: '4',
      },
    ],
  },
  {
    id: 'plane_triangle',
    name: '认识三角形',
    module: '图形与几何',
    grade: '一年级下册',
    description: '认识三角形，知道它有 3 条边、3 个角。',
    practice: [
      {
        question: '下面哪个图形是三角形？',
        options: ['正方形', '三角形', '圆形'],
        answer: '三角形',
      },
      {
        question: '三角形有几条边？',
        options: ['2', '3', '4'],
        answer: '3',
      },
      {
        question: '三角形有几个角？',
        options: ['2', '3', '4'],
        answer: '3',
      },
    ],
  },
  {
    id: 'plane_circle',
    name: '认识圆',
    module: '图形与几何',
    grade: '一年级下册',
    description: '认识圆，知道圆没有角、边是弯的。',
    practice: [
      {
        question: '下面哪个图形是圆？',
        options: ['三角形', '正方形', '圆形'],
        answer: '圆形',
      },
      {
        question: '圆有角吗？',
        options: ['没有角', '有 3 个角', '有 4 个角'],
        answer: '没有角',
      },
      {
        question: '下面哪个物品的面是圆形？',
        options: ['硬币', '书本封面', '三角尺'],
        answer: '硬币',
      },
    ],
  },
  {
    id: 'plane_compose',
    name: '平面图形的拼组',
    module: '图形与几何',
    grade: '一年级下册',
    description: '用相同的平面图形拼出新图形。',
    practice: [
      {
        question: '两个完全一样的正方形可以拼成一个什么图形？',
        options: ['长方形', '圆形', '三角形'],
        answer: '长方形',
      },
      {
        question: '4 个完全一样的小正方形可以拼成一个大正方形吗？',
        options: ['可以', '不可以', '只能拼成长方形'],
        answer: '可以',
      },
      {
        question: '两个完全一样的半圆可以拼成一个什么图形？',
        options: ['圆形', '三角形', '正方形'],
        answer: '圆形',
      },
    ],
  },
  {
    id: 'tangram',
    name: '七巧板',
    module: '图形与几何',
    grade: '一年级下册',
    description: '认识七巧板，用七块图形拼出各种图案。',
    practice: [
      {
        question: '七巧板一共有几块？',
        options: ['5', '7', '9'],
        answer: '7',
      },
      {
        question: '七巧板中有几块三角形？',
        options: ['3', '5', '7'],
        answer: '5',
      },
      {
        question: '七巧板能拼出正方形吗？',
        options: ['能', '不能', '只能拼三角形'],
        answer: '能',
      },
    ],
  },

  // ── 一年级下册 · 模块二：数与运算（进阶） ──
  {
    id: 'subtract_9',
    name: '十几减 9',
    module: '数与运算',
    grade: '一年级下册',
    description: '用破十法等方法计算十几减 9。',
    practice: [
      {
        question: '13 - 9 = ?',
        options: ['3', '4', '5'],
        answer: '4',
      },
      {
        question: '17 - 9 = ?',
        options: ['6', '7', '8'],
        answer: '8',
      },
      {
        question: '16 - 9 = ?',
        options: ['6', '7', '8'],
        answer: '7',
      },
    ],
  },
  {
    id: 'subtract_8_7_6',
    name: '十几减 8/7/6',
    module: '数与运算',
    grade: '一年级下册',
    description: '计算十几减 8、7、6 的退位减法。',
    practice: [
      {
        question: '15 - 8 = ?',
        options: ['6', '7', '8'],
        answer: '7',
      },
      {
        question: '14 - 7 = ?',
        options: ['6', '7', '8'],
        answer: '7',
      },
      {
        question: '16 - 7 = ?',
        options: ['8', '9', '10'],
        answer: '9',
      },
    ],
  },
  {
    id: 'subtract_5_4_3_2',
    name: '十几减 5/4/3/2',
    module: '数与运算',
    grade: '一年级下册',
    description: '计算十几减 5、4、3、2 的退位减法。',
    practice: [
      {
        question: '12 - 5 = ?',
        options: ['6', '7', '8'],
        answer: '7',
      },
      {
        question: '15 - 6 = ?',
        options: ['8', '9', '10'],
        answer: '9',
      },
      {
        question: '11 - 4 = ?',
        options: ['6', '7', '8'],
        answer: '7',
      },
    ],
  },
  {
    id: 'count_to_100',
    name: '数数',
    module: '数与运算',
    grade: '一年级下册',
    description: '会一个一个、十个十个地数到 100。',
    practice: [
      {
        question: '从 28 往后数一个数是多少？',
        options: ['27', '29', '30'],
        answer: '29',
      },
      {
        question: '从 99 往后数一个数是多少？',
        options: ['98', '100', '101'],
        answer: '100',
      },
      {
        question: '十个十个地数，30 后面一个数是多少？',
        options: ['20', '40', '31'],
        answer: '40',
      },
    ],
  },
  {
    id: 'number_composition',
    name: '数的组成',
    module: '数与运算',
    grade: '一年级下册',
    description: '知道两位数由几个十和几个一组成。',
    practice: [
      {
        question: '4 个十和 6 个一组成的数是？',
        options: ['46', '64', '406'],
        answer: '46',
      },
      {
        question: '8 个十和 5 个一组成的数是？',
        options: ['58', '85', '805'],
        answer: '85',
      },
      {
        question: '76 是由几个十和几个一组成的？',
        options: ['7 个十和 6 个一', '6 个十和 7 个一', '7 个十和 0 个一'],
        answer: '7 个十和 6 个一',
      },
    ],
  },
  {
    id: 'know_100',
    name: '认识 100',
    module: '数与运算',
    grade: '一年级下册',
    description: '认识 100，知道 10 个十是一百。',
    practice: [
      {
        question: '99 再添 1 是多少？',
        options: ['98', '100', '101'],
        answer: '100',
      },
      {
        question: '10 个十是多少？',
        options: ['10', '100', '20'],
        answer: '100',
      },
      {
        question: '100 里面有几个十？',
        options: ['1', '10', '100'],
        answer: '10',
      },
    ],
  },
  {
    id: 'number_order',
    name: '数的顺序',
    module: '数与运算',
    grade: '一年级下册',
    description: '掌握 100 以内数的排列顺序。',
    practice: [
      {
        question: '和 30 相邻的两个数是？',
        options: ['28 和 29', '29 和 31', '31 和 32'],
        answer: '29 和 31',
      },
      {
        question: '按顺序数，49 后面的一个数是几？',
        options: ['48', '50', '51'],
        answer: '50',
      },
      {
        question: '和 99 相邻的两个数是？',
        options: ['97 和 98', '98 和 100', '100 和 101'],
        answer: '98 和 100',
      },
    ],
  },
  {
    id: 'compare_100',
    name: '比较大小',
    module: '数与运算',
    grade: '一年级下册',
    description: '比较 100 以内两个数的大小。',
    practice: [
      {
        question: '47 和 74 哪个大？',
        options: ['47', '74', '一样大'],
        answer: '74',
      },
      {
        question: '68 和 86 比，哪个数小？',
        options: ['68', '86', '一样大'],
        answer: '68',
      },
      {
        question: '比较两个两位数的大小时，先看哪一位？',
        options: ['个位', '十位', '个位和十位都可以'],
        answer: '十位',
      },
    ],
  },
  {
    id: 'add_sub_simple_100',
    name: '简单的加减法',
    module: '数与运算',
    grade: '一年级下册',
    description: '进行整十数及简单两位数加减。',
    practice: [
      {
        question: '30 + 20 = ?',
        options: ['40', '50', '60'],
        answer: '50',
      },
      {
        question: '70 - 40 = ?',
        options: ['20', '30', '40'],
        answer: '30',
      },
      {
        question: '40 + 6 = ?',
        options: ['46', '64', '10'],
        answer: '46',
      },
    ],
  },
  {
    id: 'explore_numbers',
    name: '摆一摆想一想',
    module: '数与运算',
    grade: '一年级下册',
    description: '用圆片摆一摆，发现数的排列规律。',
    practice: [
      {
        question: '用 3 个圆片摆两位数，一共能摆出几个不同的两位数？',
        options: ['2', '3', '4'],
        answer: '3',
      },
      {
        question: '用 2 个圆片摆两位数，一共能摆出几个不同的两位数？',
        options: ['1', '2', '3'],
        answer: '2',
      },
      {
        question: '把 1 个圆片摆在十位上，表示多少？',
        options: ['1', '10', '11'],
        answer: '10',
      },
    ],
  },
  {
    id: 'oral_add',
    name: '口算加法',
    module: '数与运算',
    grade: '一年级下册',
    description: '口算 100 以内的不进位加法。',
    practice: [
      {
        question: '25 + 4 = ?',
        options: ['28', '29', '30'],
        answer: '29',
      },
      {
        question: '42 + 7 = ?',
        options: ['47', '49', '59'],
        answer: '49',
      },
      {
        question: '30 + 25 = ?',
        options: ['45', '55', '65'],
        answer: '55',
      },
    ],
  },
  {
    id: 'oral_sub',
    name: '口算减法',
    module: '数与运算',
    grade: '一年级下册',
    description: '口算 100 以内的不退位减法。',
    practice: [
      {
        question: '36 - 6 = ?',
        options: ['26', '30', '40'],
        answer: '30',
      },
      {
        question: '58 - 8 = ?',
        options: ['48', '50', '58'],
        answer: '50',
      },
      {
        question: '76 - 30 = ?',
        options: ['46', '56', '73'],
        answer: '46',
      },
    ],
  },
  {
    id: 'written_add_no_carry',
    name: '笔算加法（不进位）',
    module: '数与运算',
    grade: '一年级下册',
    description: '用竖式计算不进位的两位数加法。',
    practice: [
      {
        question: '23 + 15 = ?',
        options: ['35', '38', '48'],
        answer: '38',
      },
      {
        question: '41 + 26 = ?',
        options: ['57', '67', '77'],
        answer: '67',
      },
      {
        question: '列竖式计算 32 + 45 时，个位和个位对齐，十位要和什么对齐？',
        options: ['个位', '十位', '百位'],
        answer: '十位',
      },
    ],
  },
  {
    id: 'written_add_carry',
    name: '笔算加法（进位）',
    module: '数与运算',
    grade: '一年级下册',
    description: '用竖式计算个位相加满十进一的加法。',
    practice: [
      {
        question: '28 + 5 = ?',
        options: ['23', '33', '43'],
        answer: '33',
      },
      {
        question: '37 + 8 = ?',
        options: ['35', '45', '44'],
        answer: '45',
      },
      {
        question: '46 + 7 = ?',
        options: ['43', '53', '52'],
        answer: '53',
      },
    ],
  },
  {
    id: 'written_sub_borrow',
    name: '笔算减法（退位）',
    module: '数与运算',
    grade: '一年级下册',
    description: '用竖式计算个位不够减、需要退位的减法。',
    practice: [
      {
        question: '42 - 5 = ?',
        options: ['37', '47', '38'],
        answer: '37',
      },
      {
        question: '63 - 8 = ?',
        options: ['55', '65', '56'],
        answer: '55',
      },
      {
        question: '50 - 7 = ?',
        options: ['43', '47', '53'],
        answer: '43',
      },
    ],
  },

  // ── 一年级下册 · 模块三：数量关系与生活 ──
  {
    id: 'add_model',
    name: '加法模型',
    module: '数量关系与生活',
    grade: '一年级下册',
    description: '用“部分 + 部分 = 总数”的模型解决实际问题。',
    practice: [
      {
        question: '小明有 3 支铅笔，妈妈又给他 2 支，一共有几支？',
        options: ['4', '5', '6'],
        answer: '5',
      },
      {
        question: '篮子里有 6 个苹果，又放进 4 个，一共有几个？',
        options: ['9', '10', '11'],
        answer: '10',
      },
      {
        question: '小红有 8 张卡片，小明有 5 张卡片，两人一共有几张？',
        options: ['12', '13', '14'],
        answer: '13',
      },
    ],
  },
  {
    id: 'compare_more_less',
    name: '比多比少',
    module: '数量关系与生活',
    grade: '一年级下册',
    description: '用“多几”“少几”的关系解决比较问题。',
    practice: [
      {
        question: '小红有 5 朵花，小丽比小红多 2 朵，小丽有几朵？',
        options: ['3', '7', '9'],
        answer: '7',
      },
      {
        question: '小明有 9 颗糖，小红比小明少 3 颗，小红有几颗？',
        options: ['6', '9', '12'],
        answer: '6',
      },
      {
        question: '小兔有 4 个萝卜，小猪比小兔多 5 个，小猪有几个？',
        options: ['9', '8', '1'],
        answer: '9',
      },
    ],
  },
  {
    id: 'multi_step',
    name: '多步加减关系',
    module: '数量关系与生活',
    grade: '一年级下册',
    description: '用两步加减解决生活中的连续变化问题。',
    practice: [
      {
        question: '树上有 7 只小鸟，飞走 2 只，又飞来 3 只，现在有几只？',
        options: ['6', '7', '8'],
        answer: '8',
      },
      {
        question: '停车场有 12 辆车，开走 4 辆，又开来 5 辆，现在有几辆？',
        options: ['11', '12', '13'],
        answer: '13',
      },
      {
        question: '书包里有 9 本书，拿出 3 本，又放进 2 本，现在有几本？',
        options: ['8', '9', '10'],
        answer: '8',
      },
    ],
  },
  {
    id: 'renminbi',
    name: '认识人民币',
    module: '数量关系与生活',
    grade: '一年级下册',
    description: '认识元、角、分和常见人民币面值。',
    practice: [
      {
        question: '一张 5 元可以换几张 1 元？',
        options: ['2', '5', '10'],
        answer: '5',
      },
      {
        question: '1 元可以换几个 1 角？',
        options: ['5', '10', '100'],
        answer: '10',
      },
      {
        question: '一张 10 元可以换几张 5 元？',
        options: ['1', '2', '5'],
        answer: '2',
      },
    ],
  },
  {
    id: 'buy_sell',
    name: '买卖我做主',
    module: '数量关系与生活',
    grade: '一年级下册',
    description: '在购物情境中学会付钱与找钱。',
    practice: [
      {
        question: '买一个 2 元的本子，付了 5 元，应找回几元？',
        options: ['2', '3', '5'],
        answer: '3',
      },
      {
        question: '买一支 3 元的铅笔，付了 10 元，应找回几元？',
        options: ['6', '7', '13'],
        answer: '7',
      },
      {
        question: '一支笔 4 元，一个本子 3 元，买这两样一共要几元？',
        options: ['6', '7', '8'],
        answer: '7',
      },
    ],
  },

  // ── 二年级上册 · 模块一：100以内加减 ──
  {
    id: 'oral_two_digit_add_sub',
    name: '口算两位数加减',
    module: '100以内加减',
    grade: '二年级上册',
    description: '熟练口算 100 以内两位数加、减法。',
    practice: [
      {
        question: '45 + 30 = ?',
        options: ['65', '75', '85'],
        answer: '75',
      },
      {
        question: '72 - 20 = ?',
        options: ['52', '50', '62'],
        answer: '52',
      },
      {
        question: '38 + 40 = ?',
        options: ['68', '78', '88'],
        answer: '78',
      },
    ],
  },
  {
    id: 'written_add_carry_2digit',
    name: '进位加法',
    module: '100以内加减',
    grade: '二年级上册',
    description: '用竖式计算两位数加两位数的进位加法。',
    practice: [
      {
        question: '38 + 27 = ?',
        options: ['55', '65', '75'],
        answer: '65',
      },
      {
        question: '46 + 39 = ?',
        options: ['75', '85', '95'],
        answer: '85',
      },
      {
        question: '57 + 35 = ?',
        options: ['82', '92', '102'],
        answer: '92',
      },
    ],
  },
  {
    id: 'written_sub_borrow_2digit',
    name: '退位减法',
    module: '100以内加减',
    grade: '二年级上册',
    description: '用竖式计算两位数减两位数的退位减法。',
    practice: [
      {
        question: '53 - 27 = ?',
        options: ['26', '36', '27'],
        answer: '26',
      },
      {
        question: '61 - 48 = ?',
        options: ['13', '23', '17'],
        answer: '13',
      },
      {
        question: '70 - 35 = ?',
        options: ['35', '45', '30'],
        answer: '35',
      },
    ],
  },
  {
    id: 'continuous_add_sub_mixed',
    name: '连加连减加减混合',
    module: '100以内加减',
    grade: '二年级上册',
    description: '按从左到右顺序计算 100 以内的连加、连减和加减混合。',
    practice: [
      {
        question: '25 + 18 + 30 = ?',
        options: ['63', '73', '83'],
        answer: '73',
      },
      {
        question: '80 - 25 - 18 = ?',
        options: ['37', '47', '57'],
        answer: '37',
      },
      {
        question: '45 + 30 - 18 = ?',
        options: ['57', '67', '77'],
        answer: '57',
      },
    ],
  },
  {
    id: 'compare_more_less_2grade',
    name: '求比一个数多几少几',
    module: '100以内加减',
    grade: '二年级上册',
    description: '根据一个数与另一个数的多少关系，求对应的数。',
    practice: [
      {
        question: '小红有 35 朵花，小明比小红多 12 朵，小明有几朵？',
        options: ['47', '23', '45'],
        answer: '47',
      },
      {
        question: '小华有 50 本书，小丽比小华少 18 本，小丽有几本？',
        options: ['68', '32', '38'],
        answer: '32',
      },
      {
        question: '停车场有 42 辆车，开走一些后还剩 25 辆，开走了几辆？',
        options: ['17', '67', '27'],
        answer: '17',
      },
    ],
  },

  // ── 二年级上册 · 模块二：表内乘法 ──
  {
    id: 'multiplication_intro',
    name: '乘法的初步认识',
    module: '表内乘法',
    grade: '二年级上册',
    description: '理解求几个相同加数的和可以用乘法表示。',
    practice: [
      {
        question: '4 + 4 + 4 写成乘法算式是？',
        options: ['4 × 3', '4 + 3', '3 × 3'],
        answer: '4 × 3',
      },
      {
        question: '5 个 2 相加是多少？',
        options: ['7', '10', '25'],
        answer: '10',
      },
      {
        question: '3 × 4 表示什么？',
        options: ['3 和 4 相加', '4 个 3 相加', '3 和 4 相减'],
        answer: '4 个 3 相加',
      },
    ],
  },
  {
    id: 'multiplication_table_2_5',
    name: '2-5 的乘法口诀',
    module: '表内乘法',
    grade: '二年级上册',
    description: '熟记 2、3、4、5 的乘法口诀并能熟练计算。',
    practice: [
      {
        question: '四五二十，写成乘法算式是？',
        options: ['4 × 5 = 20', '4 + 5 = 9', '5 - 4 = 1'],
        answer: '4 × 5 = 20',
      },
      {
        question: '3 × 4 = ?',
        options: ['7', '12', '34'],
        answer: '12',
      },
      {
        question: '5 × 3 = ?',
        options: ['8', '15', '53'],
        answer: '15',
      },
    ],
  },
  {
    id: 'multiplication_table_6_9',
    name: '6-9 的乘法口诀',
    module: '表内乘法',
    grade: '二年级上册',
    description: '熟记 6、7、8、9 的乘法口诀并能熟练计算。',
    practice: [
      {
        question: '七八多少？',
        options: ['54', '56', '48'],
        answer: '56',
      },
      {
        question: '9 × 6 = ?',
        options: ['45', '54', '63'],
        answer: '54',
      },
      {
        question: '7 × 7 = ?',
        options: ['14', '42', '49'],
        answer: '49',
      },
    ],
  },
  {
    id: 'multiplication_parts',
    name: '乘法算式各部分名称',
    module: '表内乘法',
    grade: '二年级上册',
    description: '认识乘法算式中乘数、积等各部分的名称。',
    practice: [
      {
        question: '在算式 4 × 5 = 20 中，4 和 5 叫什么？',
        options: ['加数', '乘数', '积'],
        answer: '乘数',
      },
      {
        question: '在算式 6 × 3 = 18 中，18 叫什么？',
        options: ['乘数', '加数', '积'],
        answer: '积',
      },
      {
        question: '乘法算式中，乘数 × 乘数 = ?',
        options: ['和', '积', '差'],
        answer: '积',
      },
    ],
  },

  // ── 二年级上册 · 模块三：长度单位 ──
  {
    id: 'cm_m_intro',
    name: '厘米米的认识',
    module: '长度单位',
    grade: '二年级上册',
    description: '认识厘米和米两个长度单位，知道 1 米 = 100 厘米。',
    practice: [
      {
        question: '1 米等于多少厘米？',
        options: ['10', '100', '1000'],
        answer: '100',
      },
      {
        question: '一支铅笔大约长 20 什么？',
        options: ['米', '厘米', '毫米'],
        answer: '厘米',
      },
      {
        question: '教室的门大约高 2 什么？',
        options: ['厘米', '米', '分米'],
        answer: '米',
      },
    ],
  },
  {
    id: 'measure_cm',
    name: '用厘米量',
    module: '长度单位',
    grade: '二年级上册',
    description: '学会用尺子正确测量物体的长度。',
    practice: [
      {
        question: '测量物体长度时，尺子的什么刻度要对准物体的一端？',
        options: ['1 刻度', '0 刻度', '中间刻度'],
        answer: '0 刻度',
      },
      {
        question: '尺子上从 0 到 5 是几厘米？',
        options: ['4 厘米', '5 厘米', '6 厘米'],
        answer: '5 厘米',
      },
      {
        question: '小红用尺子量一根绳子，从 2 厘米量到 8 厘米，绳子长几厘米？',
        options: ['6 厘米', '8 厘米', '10 厘米'],
        answer: '6 厘米',
      },
    ],
  },
  {
    id: 'line_segment',
    name: '线段的认识',
    module: '长度单位',
    grade: '二年级上册',
    description: '认识线段，知道线段有两个端点、可以测量长度。',
    practice: [
      {
        question: '线段有几个端点？',
        options: ['1 个', '2 个', '没有'],
        answer: '2 个',
      },
      {
        question: '下面哪个是线段？',
        options: ['弯曲的线', '有两个端点的直线', '没有端点的直线'],
        answer: '有两个端点的直线',
      },
      {
        question: '线段可以测量长度吗？',
        options: ['可以', '不可以', '只有直线可以'],
        answer: '可以',
      },
    ],
  },
  {
    id: 'estimate_length',
    name: '估测长度',
    module: '长度单位',
    grade: '二年级上册',
    description: '用熟悉的长度参照物来估测物体的长度。',
    practice: [
      {
        question: '你的一拃大约长多少厘米？',
        options: ['10 厘米', '15 厘米', '20 厘米'],
        answer: '15 厘米',
      },
      {
        question: '教室的宽大约是多少米？',
        options: ['5 米', '10 米', '20 米'],
        answer: '10 米',
      },
      {
        question: '一根粉笔大约长多少厘米？',
        options: ['5 厘米', '8 厘米', '12 厘米'],
        answer: '8 厘米',
      },
    ],
  },

  // ── 二年级上册 · 模块四：角的初步认识 ──
  {
    id: 'angle_intro',
    name: '认识角',
    module: '角的初步认识',
    grade: '二年级上册',
    description: '认识角，知道角有一个顶点和两条边。',
    practice: [
      {
        question: '角有几个顶点？',
        options: ['1 个', '2 个', '3 个'],
        answer: '1 个',
      },
      {
        question: '角有几条边？',
        options: ['1 条', '2 条', '3 条'],
        answer: '2 条',
      },
      {
        question: '下面哪个图形有角？',
        options: ['圆', '三角形', '椭圆'],
        answer: '三角形',
      },
    ],
  },
  {
    id: 'right_angle_acute_obtuse',
    name: '直角锐角钝角',
    module: '角的初步认识',
    grade: '二年级上册',
    description: '认识直角、锐角和钝角，会区分三种角的大小。',
    practice: [
      {
        question: '比直角小的角叫什么角？',
        options: ['钝角', '锐角', '直角'],
        answer: '锐角',
      },
      {
        question: '比直角大的角叫什么角？',
        options: ['钝角', '锐角', '直角'],
        answer: '钝角',
      },
      {
        question: '三角板上有什么角？',
        options: ['只有直角', '直角和锐角', '直角和钝角'],
        answer: '直角和锐角',
      },
    ],
  },
  {
    id: 'triangle_judge_angle',
    name: '用三角板判断',
    module: '角的初步认识',
    grade: '二年级上册',
    description: '用三角板上的直角来判断一个角是不是直角。',
    practice: [
      {
        question: '判断一个角是不是直角，用什么工具最方便？',
        options: ['直尺', '三角板', '量角器'],
        answer: '三角板',
      },
      {
        question: '课本的封面有几个直角？',
        options: ['2 个', '4 个', '8 个'],
        answer: '4 个',
      },
      {
        question: '三角板上最大的角是什么角？',
        options: ['锐角', '直角', '钝角'],
        answer: '直角',
      },
    ],
  },

  // ── 二年级上册 · 模块五：观察物体 ──
  {
    id: 'observe_different_directions',
    name: '从不同方向观察',
    module: '观察物体',
    grade: '二年级上册',
    description: '知道从不同位置观察同一个物体，看到的形状可能不同。',
    practice: [
      {
        question: '从前面和从上面看同一个杯子，看到的形状一样吗？',
        options: ['一样', '不一样', '有时候一样'],
        answer: '不一样',
      },
      {
        question: '观察一个物体，站得近和站得远看到的一样吗？',
        options: ['一样', '不一样', '只有颜色不同'],
        answer: '不一样',
      },
      {
        question: '从正面看一个茶壶，看到的可能是什么？',
        options: ['壶嘴', '壶盖', '壶嘴或壶盖或壶身'],
        answer: '壶嘴或壶盖或壶身',
      },
    ],
  },
  {
    id: 'observe_solid',
    name: '观察立体图形',
    module: '观察物体',
    grade: '二年级上册',
    description: '从不同方向观察常见的立体图形，能说出看到的形状。',
    practice: [
      {
        question: '从任何方向看球，看到的都是什么形状？',
        options: ['正方形', '圆形', '三角形'],
        answer: '圆形',
      },
      {
        question: '从正面看正方体，看到的是什么形状？',
        options: ['长方形', '正方形', '圆形'],
        answer: '正方形',
      },
      {
        question: '从侧面看圆柱，看到的是什么形状？',
        options: ['圆形', '长方形', '三角形'],
        answer: '长方形',
      },
    ],
  },

  // ── 二年级上册 · 模块六：时间与数学 ──
  {
    id: 'hour_minute_intro',
    name: '时和分的认识',
    module: '时间与数学',
    grade: '二年级上册',
    description: '认识钟表上的时针和分针，知道 1 时 = 60 分。',
    practice: [
      {
        question: '1 时等于多少分？',
        options: ['10', '60', '100'],
        answer: '60',
      },
      {
        question: '钟面上最短最粗的针是什么针？',
        options: ['分针', '时针', '秒针'],
        answer: '时针',
      },
      {
        question: '分针走一圈是多少分？',
        options: ['30', '60', '120'],
        answer: '60',
      },
    ],
  },
  {
    id: 'time_calculation',
    name: '时间的计算',
    module: '时间与数学',
    grade: '二年级上册',
    description: '进行简单的时间加减计算，解决经过时间的问题。',
    practice: [
      {
        question: '一节课 40 分钟，8:10 上课，几点下课？',
        options: ['8:40', '8:50', '9:00'],
        answer: '8:50',
      },
      {
        question: '小明看动画片从 6:30 开始，看了 30 分钟，几点结束？',
        options: ['6:60', '7:00', '6:40'],
        answer: '7:00',
      },
      {
        question: '从 9:00 到 9:45，经过了多少分钟？',
        options: ['30', '40', '45'],
        answer: '45',
      },
    ],
  },
  {
    id: 'time_management',
    name: '合理安排时间',
    module: '时间与数学',
    grade: '二年级上册',
    description: '在生活情境中学会合理安排时间，培养时间观念。',
    practice: [
      {
        question: '早上 7:00 起床，洗漱用 15 分钟，几点能洗漱完？',
        options: ['7:10', '7:15', '7:20'],
        answer: '7:15',
      },
      {
        question: '小明 7:40 到校，路上要走 20 分钟，他几点出门合适？',
        options: ['7:00', '7:20', '7:60'],
        answer: '7:20',
      },
      {
        question: '做作业用了 1 小时，也就是多少分钟？',
        options: ['30', '60', '100'],
        answer: '60',
      },
    ],
  },

  // ── 二年级下册 · 模块一：表内除法 ──
  {
    id: 'division_intro',
    name: '除法的初步认识',
    module: '表内除法',
    grade: '二年级下册',
    description: '理解除法的意义，知道把一些物体平均分成几份用除法。',
    practice: [
      {
        question: '把 12 个苹果平均分给 3 个小朋友，每个小朋友分几个？',
        options: ['3', '4', '5'],
        answer: '4',
      },
      {
        question: '15 ÷ 3 = ?',
        options: ['3', '5', '12'],
        answer: '5',
      },
      {
        question: '除法算式 8 ÷ 2 表示什么意思？',
        options: ['8 和 2 相加', '把 8 平均分成 2 份', '8 和 2 相乘'],
        answer: '把 8 平均分成 2 份',
      },
    ],
  },
  {
    id: 'average_score',
    name: '平均分',
    module: '表内除法',
    grade: '二年级下册',
    description: '理解平均分的概念，会进行平均分的操作。',
    practice: [
      {
        question: '把 10 块糖平均分给 2 个小朋友，每人几块？',
        options: ['4', '5', '6'],
        answer: '5',
      },
      {
        question: '有 18 本书，每个书架放 6 本，需要几个书架？',
        options: ['2', '3', '4'],
        answer: '3',
      },
      {
        question: '把 20 个球平均分成 4 份，每份几个？',
        options: ['4', '5', '6'],
        answer: '5',
      },
    ],
  },
  {
    id: 'division_by_multiplication',
    name: '用乘法口诀求商',
    module: '表内除法',
    grade: '二年级下册',
    description: '利用学过的乘法口诀来快速求出除法算式的商。',
    practice: [
      {
        question: '计算 24 ÷ 6，想哪句乘法口诀？',
        options: ['六四二十四', '五六三十', '三八二十四'],
        answer: '六四二十四',
      },
      {
        question: '56 ÷ 7 = ?',
        options: ['6', '7', '8'],
        answer: '8',
      },
      {
        question: '49 ÷ 7 = ?',
        options: ['6', '7', '8'],
        answer: '7',
      },
    ],
  },
  {
    id: 'division_remainder',
    name: '有余数的除法',
    module: '表内除法',
    grade: '二年级下册',
    description: '理解有余数除法的意义，知道余数要比除数小。',
    practice: [
      {
        question: '10 支铅笔，每人分 3 支，可以分给几人？还剩几支？',
        options: ['3 人剩 1 支', '2 人剩 4 支', '4 人剩 2 支'],
        answer: '3 人剩 1 支',
      },
      {
        question: '在有余数的除法中，余数和除数的关系是？',
        options: ['余数大于除数', '余数小于除数', '余数等于除数'],
        answer: '余数小于除数',
      },
      {
        question: '17 ÷ 5 = ？……？',
        options: ['3……2', '2……7', '4……3'],
        answer: '3……2',
      },
    ],
  },

  // ── 二年级下册 · 模块二：万以内数的认识 ──
  {
    id: 'numbers_within_1000',
    name: '千以内数的认识',
    module: '万以内数的认识',
    grade: '二年级下册',
    description: '认识千以内的数，掌握数数、读数、写数和组成。',
    practice: [
      {
        question: '10 个一百是多少？',
        options: ['100', '1000', '10000'],
        answer: '1000',
      },
      {
        question: '3 个百、5 个十和 2 个一组成的数是？',
        options: ['352', '325', '532'],
        answer: '352',
      },
      {
        question: '和 999 相邻的两个数是？',
        options: ['998 和 1000', '998 和 997', '1000 和 1001'],
        answer: '998 和 1000',
      },
    ],
  },
  {
    id: 'numbers_within_10000',
    name: '万以内数的认识',
    module: '万以内数的认识',
    grade: '二年级下册',
    description: '认识万以内的数，掌握数位顺序表和数的读写。',
    practice: [
      {
        question: '10 个一千是多少？',
        options: ['1000', '10000', '100000'],
        answer: '10000',
      },
      {
        question: '4000 读作什么？',
        options: ['四千', '四万', '四千零'],
        answer: '四千',
      },
      {
        question: '万以内的数位顺序从右往左依次是？',
        options: ['个十百千万', '万千百十个', '十百千万个'],
        answer: '个十百千万',
      },
    ],
  },
  {
    id: 'add_sub_hundreds_tens',
    name: '整百整十数加减',
    module: '万以内数的认识',
    grade: '二年级下册',
    description: '熟练计算整百、整十数的加减法。',
    practice: [
      {
        question: '300 + 500 = ?',
        options: ['80', '800', '8000'],
        answer: '800',
      },
      {
        question: '700 - 400 = ?',
        options: ['30', '300', '1100'],
        answer: '300',
      },
      {
        question: '260 + 300 = ?',
        options: ['290', '560', '500'],
        answer: '560',
      },
    ],
  },

  // ── 二年级下册 · 模块三：克与千克 ──
  {
    id: 'gram_intro',
    name: '克的认识',
    module: '克与千克',
    grade: '二年级下册',
    description: '认识质量单位克，知道较轻的物体用克作单位。',
    practice: [
      {
        question: '一个 2 分硬币大约重多少克？',
        options: ['1 克', '10 克', '100 克'],
        answer: '1 克',
      },
      {
        question: '一支铅笔大约重多少克？',
        options: ['10 克', '100 克', '1 千克'],
        answer: '10 克',
      },
      {
        question: '比较轻的物体通常用什么作单位？',
        options: ['千克', '克', '米'],
        answer: '克',
      },
    ],
  },
  {
    id: 'kilogram_intro',
    name: '千克的认识',
    module: '克与千克',
    grade: '二年级下册',
    description: '认识质量单位千克，知道较重的物体用千克作单位。',
    practice: [
      {
        question: '一袋大米通常重多少千克？',
        options: ['5 克', '50 克', '5 千克'],
        answer: '5 千克',
      },
      {
        question: '一个小学生的体重大约是多少？',
        options: ['25 克', '25 千克', '250 千克'],
        answer: '25 千克',
      },
      {
        question: '比较重的物体通常用什么作单位？',
        options: ['克', '千克', '厘米'],
        answer: '千克',
      },
    ],
  },
  {
    id: 'weight_conversion',
    name: '重量单位换算',
    module: '克与千克',
    grade: '二年级下册',
    description: '掌握千克与克之间的换算关系，1 千克 = 1000 克。',
    practice: [
      {
        question: '1 千克等于多少克？',
        options: ['10', '100', '1000'],
        answer: '1000',
      },
      {
        question: '3 千克等于多少克？',
        options: ['300', '3000', '30'],
        answer: '3000',
      },
      {
        question: '2500 克等于几千克几克？',
        options: ['2 千克 500 克', '25 千克', '2 千克 50 克'],
        answer: '2 千克 500 克',
      },
    ],
  },

  // ── 二年级下册 · 模块四：万以内加减法 ──
  {
    id: 'oral_hundreds_tens',
    name: '口算整百整十',
    module: '万以内加减法',
    grade: '二年级下册',
    description: '熟练口算整百数、整十数的万以内加减法。',
    practice: [
      {
        question: '400 + 300 = ?',
        options: ['600', '700', '800'],
        answer: '700',
      },
      {
        question: '900 - 500 = ?',
        options: ['300', '400', '500'],
        answer: '400',
      },
      {
        question: '150 + 200 = ?',
        options: ['300', '350', '400'],
        answer: '350',
      },
    ],
  },
  {
    id: 'add_3digit',
    name: '三位数加三位数',
    module: '万以内加减法',
    grade: '二年级下册',
    description: '用竖式计算三位数加三位数的不进位和进位加法。',
    practice: [
      {
        question: '325 + 243 = ?',
        options: ['568', '558', '668'],
        answer: '568',
      },
      {
        question: '456 + 278 = ?',
        options: ['634', '734', '834'],
        answer: '734',
      },
      {
        question: '计算三位数加法时，相同数位要怎样？',
        options: ['错开', '对齐', '随意放'],
        answer: '对齐',
      },
    ],
  },
  {
    id: 'sub_3digit',
    name: '三位数减三位数',
    module: '万以内加减法',
    grade: '二年级下册',
    description: '用竖式计算三位数减三位数的不退位和退位减法。',
    practice: [
      {
        question: '568 - 243 = ?',
        options: ['325', '315', '425'],
        answer: '325',
      },
      {
        question: '632 - 478 = ?',
        options: ['154', '254', '164'],
        answer: '154',
      },
      {
        question: '减法中哪一位不够减，就要向前一位怎样？',
        options: ['进一', '借一', '加一'],
        answer: '借一',
      },
    ],
  },

  // ── 二年级下册 · 模块五：图形的运动 ──
  {
    id: 'axisymmetric',
    name: '轴对称图形',
    module: '图形的运动',
    grade: '二年级下册',
    description: '认识轴对称图形，能找出简单轴对称图形的对称轴。',
    practice: [
      {
        question: '把一个图形沿着一条直线对折，两边能完全重合，这个图形叫什么？',
        options: ['平移图形', '轴对称图形', '旋转图形'],
        answer: '轴对称图形',
      },
      {
        question: '正方形有几条对称轴？',
        options: ['2 条', '4 条', '无数条'],
        answer: '4 条',
      },
      {
        question: '圆有几条对称轴？',
        options: ['2 条', '4 条', '无数条'],
        answer: '无数条',
      },
    ],
  },
  {
    id: 'translation',
    name: '平移',
    module: '图形的运动',
    grade: '二年级下册',
    description: '认识平移现象，知道平移时物体的方向和大小不变。',
    practice: [
      {
        question: '下面哪种现象是平移？',
        options: ['风扇转动', '电梯上下移动', '摩天轮转动'],
        answer: '电梯上下移动',
      },
      {
        question: '物体平移后，它的形状和大小改变了吗？',
        options: ['改变了', '没有改变', '形状改变大小不变'],
        answer: '没有改变',
      },
      {
        question: '推拉窗户是什么运动？',
        options: ['旋转', '平移', '轴对称'],
        answer: '平移',
      },
    ],
  },
  {
    id: 'rotation',
    name: '旋转',
    module: '图形的运动',
    grade: '二年级下册',
    description: '认识旋转现象，知道旋转是物体绕着一个点或轴转动。',
    practice: [
      {
        question: '下面哪种现象是旋转？',
        options: ['抽屉推拉', '风扇叶片转动', '电梯移动'],
        answer: '风扇叶片转动',
      },
      {
        question: '风车的运动是什么运动？',
        options: ['平移', '旋转', '轴对称'],
        answer: '旋转',
      },
      {
        question: '钟面上的分针在做什么运动？',
        options: ['平移', '旋转', '滚动'],
        answer: '旋转',
      },
    ],
  },

  // ── 二年级下册 · 模块六：混合运算 ──
  {
    id: 'same_level_order',
    name: '同级运算顺序',
    module: '混合运算',
    grade: '二年级下册',
    description: '掌握只有加减或只有乘除的同级运算顺序，从左到右依次计算。',
    practice: [
      {
        question: '在算式 18 + 25 - 13 中，应该先算什么？',
        options: ['先算 25 - 13', '先算 18 + 25', '随便先算哪个'],
        answer: '先算 18 + 25',
      },
      {
        question: '56 ÷ 8 × 2 = ?',
        options: ['14', '32', '4'],
        answer: '14',
      },
      {
        question: '同级运算的顺序是怎样的？',
        options: ['从右到左', '从左到右', '先算乘除'],
        answer: '从左到右',
      },
    ],
  },
  {
    id: 'parenthesis_order',
    name: '含小括号的运算',
    module: '混合运算',
    grade: '二年级下册',
    description: '知道有小括号的混合运算要先算括号里面的。',
    practice: [
      {
        question: '在算式 (15 + 5) × 3 中，应该先算什么？',
        options: ['先算 5 × 3', '先算 15 + 5', '先算 15 × 3'],
        answer: '先算 15 + 5',
      },
      {
        question: '(24 - 8) ÷ 4 = ?',
        options: ['22', '4', '16'],
        answer: '4',
      },
      {
        question: '有小括号的算式，运算顺序是？',
        options: ['先算括号外', '先算括号内', '从左到右'],
        answer: '先算括号内',
      },
    ],
  },

  // ── 二年级下册 · 模块七：数据收集整理 ──
  {
    id: 'survey_record',
    name: '调查与记录',
    module: '数据收集整理',
    grade: '二年级下册',
    description: '学会用简单的方法收集和记录数据。',
    practice: [
      {
        question: '想知道全班同学最喜欢的水果，应该怎么做？',
        options: ['猜测一下', '调查记录', '问老师'],
        answer: '调查记录',
      },
      {
        question: '常用的记录数据的方法有哪些？',
        options: ['画正字、画○等', '只写数字', '画图形'],
        answer: '画正字、画○等',
      },
      {
        question: '用画"正"字记录数据，"正"字有几笔？',
        options: ['4 笔', '5 笔', '6 笔'],
        answer: '5 笔',
      },
    ],
  },
  {
    id: 'simple_statistics_table',
    name: '简单的统计表',
    module: '数据收集整理',
    grade: '二年级下册',
    description: '认识简单的统计表，能读懂并填写统计表中的数据。',
    practice: [
      {
        question: '统计表的第一行通常写什么？',
        options: ['数据', '项目名称', '日期'],
        answer: '项目名称',
      },
      {
        question: '二(1)班喜欢苹果的有 8 人，喜欢香蕉的有 6 人，喜欢苹果的比喜欢香蕉的多几人？',
        options: ['2 人', '14 人', '4 人'],
        answer: '2 人',
      },
      {
        question: '统计表中"合计"表示什么？',
        options: ['其中一项', '各项数据的总和', '平均数'],
        answer: '各项数据的总和',
      },
    ],
  },

  // ── 三年级上册 · 模块一：万以内加减法 ──
  {
    id: 'g3_math_wan_add',
    name: '万以内加法（不进位）',
    module: '万以内加减法',
    grade: '三年级上册',
    description: '掌握万以内不进位加法的竖式计算方法，相同数位对齐，从个位加起。',
    practice: [
      {
        question: '2341 + 1235 = ?',
        options: ['3576', '3476', '3566'],
        answer: '3576',
      },
      {
        question: '5026 + 3012 = ?',
        options: ['8038', '8138', '8028'],
        answer: '8038',
      },
      {
        question: '竖式计算万以内加法时，应该从哪一位加起？',
        options: ['百位', '十位', '个位'],
        answer: '个位',
      },
    ],
  },
  {
    id: 'g3_math_wan_add_carry',
    name: '万以内加法（进位）',
    module: '万以内加减法',
    grade: '三年级上册',
    description: '掌握万以内进位加法，哪一位相加满十就向前一位进一。',
    practice: [
      {
        question: '3586 + 2749 = ?',
        options: ['6335', '6235', '6325'],
        answer: '6335',
      },
      {
        question: '4678 + 3825 = ?',
        options: ['8503', '8403', '8513'],
        answer: '8503',
      },
      {
        question: '万以内加法中，个位相加满十应该怎么办？',
        options: ['向十位进一', '直接写下来', '向百位进一'],
        answer: '向十位进一',
      },
    ],
  },
  {
    id: 'g3_math_wan_add_continuous',
    name: '万以内连续进位加法',
    module: '万以内加减法',
    grade: '三年级上册',
    description: '掌握连续进位的万以内加法，注意每一位都可能进位。',
    practice: [
      {
        question: '998 + 4567 = ?',
        options: ['5565', '5465', '5555'],
        answer: '5565',
      },
      {
        question: '3999 + 5678 = ?',
        options: ['9677', '9577', '9667'],
        answer: '9677',
      },
      {
        question: '连续进位加法计算时，最容易出错的地方是？',
        options: ['忘记进位', '数位没对齐', '以上都是'],
        answer: '以上都是',
      },
    ],
  },
  {
    id: 'g3_math_wan_sub',
    name: '万以内减法（不退位）',
    module: '万以内加减法',
    grade: '三年级上册',
    description: '掌握万以内不退位减法的竖式计算方法。',
    practice: [
      {
        question: '5876 - 2341 = ?',
        options: ['3535', '3525', '3435'],
        answer: '3535',
      },
      {
        question: '8963 - 5421 = ?',
        options: ['3542', '3442', '3532'],
        answer: '3542',
      },
      {
        question: '竖式计算减法时，相同数位应该怎样？',
        options: ['对齐', '错开', '随意摆放'],
        answer: '对齐',
      },
    ],
  },
  {
    id: 'g3_math_wan_sub_borrow',
    name: '万以内减法（退位）',
    module: '万以内加减法',
    grade: '三年级上册',
    description: '掌握万以内退位减法，哪一位不够减就从前一位退一当十。',
    practice: [
      {
        question: '5003 - 2468 = ?',
        options: ['2535', '2635', '2545'],
        answer: '2535',
      },
      {
        question: '7020 - 3856 = ?',
        options: ['3164', '3264', '3174'],
        answer: '3164',
      },
      {
        question: '退位减法中，从百位退一到十位，十位上多了多少？',
        options: ['1', '10', '100'],
        answer: '10',
      },
    ],
  },
  {
    id: 'g3_math_wan_sub_continuous',
    name: '万以内连续退位减法',
    module: '万以内加减法',
    grade: '三年级上册',
    description: '掌握连续退位的万以内减法，特别注意中间有0的退位。',
    practice: [
      {
        question: '4000 - 1568 = ?',
        options: ['2432', '2532', '2442'],
        answer: '2432',
      },
      {
        question: '6007 - 3459 = ?',
        options: ['2548', '2648', '2558'],
        answer: '2548',
      },
      {
        question: '被减数中间有 0 时退位减法要注意什么？',
        options: ['0不够减要继续向前一位借', '直接写0', '跳过这一位'],
        answer: '0不够减要继续向前一位借',
      },
    ],
  },
  {
    id: 'g3_math_wan_add_sub_estimate',
    name: '万以内加减法估算',
    module: '万以内加减法',
    grade: '三年级上册',
    description: '用"大约"进行万以内加减法的估算，把数看成整百或整千数。',
    practice: [
      {
        question: '估算 398 + 504，大约等于多少？',
        options: ['800', '900', '1000'],
        answer: '900',
      },
      {
        question: '估算 4012 - 1987，大约等于多少？',
        options: ['2000', '3000', '1000'],
        answer: '2000',
      },
      {
        question: '估算时通常把数看成最接近的什么数？',
        options: ['整十数', '整百或整千数', '任意数'],
        answer: '整百或整千数',
      },
    ],
  },
  {
    id: 'g3_math_wan_add_sub_verify',
    name: '万以内加减法验算',
    module: '万以内加减法',
    grade: '三年级上册',
    description: '学会用交换加数、加减互逆等方法验算万以内加减法。',
    practice: [
      {
        question: '验算加法 356 + 478 = 834，可以用什么方法？',
        options: ['交换两个加数再算一遍', '用834减一个加数看是否等于另一个', '以上都可以'],
        answer: '以上都可以',
      },
      {
        question: '验算减法 800 - 356 = 444，正确的方法是？',
        options: ['444 + 356 看是否等于 800', '800 + 356', '444 - 356'],
        answer: '444 + 356 看是否等于 800',
      },
      {
        question: '加法的验算方法之一是？',
        options: ['和 - 一个加数 = 另一个加数', '和 + 一个加数', '和 × 一个加数'],
        answer: '和 - 一个加数 = 另一个加数',
      },
    ],
  },

  // ── 三年级上册 · 模块二：多位数乘一位数 ──
  {
    id: 'g3_math_mult_single_digit',
    name: '多位数乘一位数（不进位）',
    module: '多位数乘一位数',
    grade: '三年级上册',
    description: '掌握多位数乘一位数不进位的竖式计算方法。',
    practice: [
      {
        question: '123 × 3 = ?',
        options: ['369', '379', '359'],
        answer: '369',
      },
      {
        question: '212 × 4 = ?',
        options: ['848', '828', '858'],
        answer: '848',
      },
      {
        question: '竖式计算多位数乘一位数时，从哪一位乘起？',
        options: ['百位', '十位', '个位'],
        answer: '个位',
      },
    ],
  },
  {
    id: 'g3_math_mult_carry',
    name: '多位数乘一位数（进位）',
    module: '多位数乘一位数',
    grade: '三年级上册',
    description: '掌握多位数乘一位数的进位乘法，哪一位相乘满几十就向前一位进几。',
    practice: [
      {
        question: '147 × 6 = ?',
        options: ['882', '872', '892'],
        answer: '882',
      },
      {
        question: '258 × 4 = ?',
        options: ['1032', '1022', '1042'],
        answer: '1032',
      },
      {
        question: '计算 46 × 3 时，个位 6 × 3 = 18，应该怎么写？',
        options: ['个位写8，向十位进1', '个位写18', '个位写8不进位'],
        answer: '个位写8，向十位进1',
      },
    ],
  },
  {
    id: 'g3_math_mult_continuous_carry',
    name: '多位数乘一位数（连续进位）',
    module: '多位数乘一位数',
    grade: '三年级上册',
    description: '掌握连续进位的多位数乘一位数，注意每一位都要加上进位数。',
    practice: [
      {
        question: '399 × 5 = ?',
        options: ['1995', '1895', '1985'],
        answer: '1995',
      },
      {
        question: '678 × 7 = ?',
        options: ['4746', '4646', '4756'],
        answer: '4746',
      },
      {
        question: '连续进位乘法中，最容易犯的错误是？',
        options: ['忘记加进位的数', '数位没对齐', '以上都是'],
        answer: '以上都是',
      },
    ],
  },
  {
    id: 'g3_math_mult_zero_middle',
    name: '因数中间有0的乘法',
    module: '多位数乘一位数',
    grade: '三年级上册',
    description: '掌握因数中间有0的乘法，0乘任何数都得0，注意加上进位数。',
    practice: [
      {
        question: '406 × 3 = ?',
        options: ['1218', '128', '1208'],
        answer: '1218',
      },
      {
        question: '507 × 8 = ?',
        options: ['4056', '456', '4046'],
        answer: '4056',
      },
      {
        question: '0 乘任何数等于多少？',
        options: ['0', '那个数本身', '1'],
        answer: '0',
      },
    ],
  },
  {
    id: 'g3_math_mult_zero_end',
    name: '因数末尾有0的乘法',
    module: '多位数乘一位数',
    grade: '三年级上册',
    description: '掌握因数末尾有0的乘法的简便算法，先乘非0部分再补0。',
    practice: [
      {
        question: '250 × 4 = ?',
        options: ['1000', '100', '10000'],
        answer: '1000',
      },
      {
        question: '300 × 6 = ?',
        options: ['180', '1800', '18000'],
        answer: '1800',
      },
      {
        question: '因数末尾有0的简便算法是？',
        options: ['先不算0，乘完再在末尾补0', '把0去掉不算', '0和其他数一起乘'],
        answer: '先不算0，乘完再在末尾补0',
      },
    ],
  },
  {
    id: 'g3_math_mult_estimate',
    name: '多位数乘一位数估算',
    module: '多位数乘一位数',
    grade: '三年级上册',
    description: '用四舍五入等方法对多位数乘一位数进行估算。',
    practice: [
      {
        question: '估算 298 × 5，大约等于多少？',
        options: ['1000', '1500', '2000'],
        answer: '1500',
      },
      {
        question: '估算 403 × 7，大约等于多少？',
        options: ['2100', '2800', '3500'],
        answer: '2800',
      },
      {
        question: '估算 596 × 4 时，把596看成多少？',
        options: ['500', '600', '590'],
        answer: '600',
      },
    ],
  },
  {
    id: 'g3_math_mult_word_problem',
    name: '多位数乘一位数应用题',
    module: '多位数乘一位数',
    grade: '三年级上册',
    description: '用多位数乘一位数解决生活中的实际问题。',
    practice: [
      {
        question: '学校买了6箱牛奶，每箱24盒，一共买了多少盒？',
        options: ['144', '124', '134'],
        answer: '144',
      },
      {
        question: '一本书每天看35页，7天能看多少页？',
        options: ['245', '235', '255'],
        answer: '245',
      },
      {
        question: '操场跑道一圈400米，小明跑了3圈，一共跑了多少米？',
        options: ['1200', '800', '1000'],
        answer: '1200',
      },
    ],
  },
  {
    id: 'g3_math_mult_two_step',
    name: '乘加乘减两步应用题',
    module: '多位数乘一位数',
    grade: '三年级上册',
    description: '用乘加或乘减两步计算解决实际问题。',
    practice: [
      {
        question: '每排坐8人，坐了5排，还有3人站着，一共有多少人？',
        options: ['43', '40', '38'],
        answer: '43',
      },
      {
        question: '一本故事书有120页，小明每天看25页，看了4天后还剩多少页？',
        options: ['20', '30', '10'],
        answer: '20',
      },
      {
        question: '商店运来8箱苹果，每箱15个，卖掉60个后还剩多少个？',
        options: ['60', '80', '120'],
        answer: '60',
      },
    ],
  },

  // ── 三年级上册 · 模块三：有余数的除法 ──
  {
    id: 'g3_math_remainder_basic',
    name: '有余数除法的意义',
    module: '有余数的除法',
    grade: '三年级上册',
    description: '理解有余数除法的意义，知道被除数÷除数=商……余数。',
    practice: [
      {
        question: '23 ÷ 5 = ？……？',
        options: ['4……3', '5……3', '4……2'],
        answer: '4……3',
      },
      {
        question: '在 37 ÷ 6 = 6……1 中，余数是几？',
        options: ['6', '1', '37'],
        answer: '1',
      },
      {
        question: '有余数的除法中，被除数等于什么？',
        options: ['商×除数+余数', '商×除数-余数', '商+除数+余数'],
        answer: '商×除数+余数',
      },
    ],
  },
  {
    id: 'g3_math_remainder_rule',
    name: '余数与除数的关系',
    module: '有余数的除法',
    grade: '三年级上册',
    description: '知道余数一定比除数小，能根据余数判断除数的范围。',
    practice: [
      {
        question: '一个除法算式的余数是5，除数最小是几？',
        options: ['4', '5', '6'],
        answer: '6',
      },
      {
        question: '除数是8时，余数最大是几？',
        options: ['7', '8', '9'],
        answer: '7',
      },
      {
        question: '余数能不能等于除数？',
        options: ['能', '不能', '有时能'],
        answer: '不能',
      },
    ],
  },
  {
    id: 'g3_math_remainder_calc',
    name: '有余数除法的计算',
    module: '有余数的除法',
    grade: '三年级上册',
    description: '熟练计算有余数的除法，掌握试商的方法。',
    practice: [
      {
        question: '46 ÷ 7 = ？……？',
        options: ['6……4', '5……11', '7……3'],
        answer: '6……4',
      },
      {
        question: '59 ÷ 8 = ？……？',
        options: ['7……3', '6……11', '8……5'],
        answer: '7……3',
      },
      {
        question: '83 ÷ 9 = ？……？',
        options: ['9……2', '8……11', '10……3'],
        answer: '9……2',
      },
    ],
  },
  {
    id: 'g3_math_remainder_pattern',
    name: '用余数解决周期问题',
    module: '有余数的除法',
    grade: '三年级上册',
    description: '利用有余数除法解决按规律排列的周期问题。',
    practice: [
      {
        question: '一串珠子按红、黄、蓝的顺序排列，第10颗是什么颜色？',
        options: ['红色', '黄色', '蓝色'],
        answer: '红色',
      },
      {
        question: '按照○△□○△□……的规律排列，第20个图形是什么？',
        options: ['○', '△', '□'],
        answer: '△',
      },
      {
        question: '今天是星期三，再过10天是星期几？',
        options: ['星期五', '星期六', '星期日'],
        answer: '星期六',
      },
    ],
  },
  {
    id: 'g3_math_remainder_divisibility',
    name: '整除与有余数',
    module: '有余数的除法',
    grade: '三年级上册',
    description: '理解整除的概念，余数为0时就是整除。',
    practice: [
      {
        question: '下面哪个除法算式能整除？',
        options: ['15 ÷ 4', '24 ÷ 6', '17 ÷ 5'],
        answer: '24 ÷ 6',
      },
      {
        question: '36 ÷ 9 的余数是几？',
        options: ['0', '1', '9'],
        answer: '0',
      },
      {
        question: '一个数能被5整除，它的个位数字是什么？',
        options: ['0或5', '0', '5'],
        answer: '0或5',
      },
    ],
  },
  {
    id: 'g3_math_remainder_word_problem',
    name: '有余数除法应用题',
    module: '有余数的除法',
    grade: '三年级上册',
    description: '用有余数的除法解决生活中"至少""最多"等实际问题。',
    practice: [
      {
        question: '有47个同学去划船，每条船坐6人，至少需要几条船？',
        options: ['7条', '8条', '9条'],
        answer: '8条',
      },
      {
        question: '有35个苹果，每袋装8个，最多能装满几袋？',
        options: ['3袋', '4袋', '5袋'],
        answer: '4袋',
      },
      {
        question: '50个面包，每盒装7个，至少需要几个盒子才能装完？',
        options: ['7个', '8个', '9个'],
        answer: '8个',
      },
    ],
  },

  // ── 三年级上册 · 模块四：倍的认识 ──
  {
    id: 'g3_math_times_concept',
    name: '倍的概念',
    module: '倍的认识',
    grade: '三年级上册',
    description: '理解"倍"的含义，知道一个数是另一个数的几倍。',
    practice: [
      {
        question: '6 是 2 的几倍？',
        options: ['2倍', '3倍', '4倍'],
        answer: '3倍',
      },
      {
        question: '小红有8颗糖，小明有2颗，小红的糖是小明的几倍？',
        options: ['2倍', '4倍', '6倍'],
        answer: '4倍',
      },
      {
        question: '求一个数是另一个数的几倍，用什么方法计算？',
        options: ['加法', '减法', '除法'],
        answer: '除法',
      },
    ],
  },
  {
    id: 'g3_math_times_find',
    name: '求一个数是另一个数的几倍',
    module: '倍的认识',
    grade: '三年级上册',
    description: '用除法求一个数是另一个数的几倍。',
    practice: [
      {
        question: '公鸡有3只，母鸡有15只，母鸡是公鸡的几倍？',
        options: ['3倍', '5倍', '12倍'],
        answer: '5倍',
      },
      {
        question: '红花有12朵，黄花有4朵，红花是黄花的几倍？',
        options: ['3倍', '4倍', '8倍'],
        answer: '3倍',
      },
      {
        question: '爸爸今年36岁，小明今年9岁，爸爸的年龄是小明的几倍？',
        options: ['3倍', '4倍', '27倍'],
        answer: '4倍',
      },
    ],
  },
  {
    id: 'g3_math_times_find_number',
    name: '求一个数的几倍是多少',
    module: '倍的认识',
    grade: '三年级上册',
    description: '用乘法求一个数的几倍是多少。',
    practice: [
      {
        question: '7 的 4 倍是多少？',
        options: ['11', '28', '3'],
        answer: '28',
      },
      {
        question: '一个书包的价钱是一支钢笔的6倍，钢笔8元，书包多少元？',
        options: ['14', '48', '56'],
        answer: '48',
      },
      {
        question: '求一个数的几倍是多少，用什么方法计算？',
        options: ['加法', '乘法', '除法'],
        answer: '乘法',
      },
    ],
  },
  {
    id: 'g3_math_times_compare',
    name: '倍数关系的比较',
    module: '倍的认识',
    grade: '三年级上册',
    description: '在比较两个量的关系中灵活运用"倍"的概念。',
    practice: [
      {
        question: '白兔有20只，灰兔有5只，白兔是灰兔的几倍？',
        options: ['4倍', '15倍', '25倍'],
        answer: '4倍',
      },
      {
        question: '甲数是45，甲数是乙数的5倍，乙数是多少？',
        options: ['9', '50', '225'],
        answer: '9',
      },
      {
        question: '已知甲是乙的3倍，甲是18，乙是多少？',
        options: ['6', '15', '54'],
        answer: '6',
      },
    ],
  },
  {
    id: 'g3_math_times_word_problem',
    name: '倍的应用题',
    module: '倍的认识',
    grade: '三年级上册',
    description: '用倍数关系解决和倍、差倍等实际问题。',
    practice: [
      {
        question: '果园里有苹果树和桃树，苹果树是桃树的3倍，桃树有8棵，苹果树有几棵？',
        options: ['11', '24', '5'],
        answer: '24',
      },
      {
        question: '小明有邮票24张，小红的邮票是小明的2倍，小红有多少张？',
        options: ['12', '26', '48'],
        answer: '48',
      },
      {
        question: '一根绳子长24米，另一根是它的3倍，另一根长多少米？',
        options: ['8', '27', '72'],
        answer: '72',
      },
    ],
  },
  {
    id: 'g3_math_times_multi_step',
    name: '倍的多步应用题',
    module: '倍的认识',
    grade: '三年级上册',
    description: '综合运用倍数关系解决多步计算的实际问题。',
    practice: [
      {
        question: '商店有红气球36个，蓝气球是红气球的一半，两种气球一共有多少个？',
        options: ['54', '72', '18'],
        answer: '54',
      },
      {
        question: '图书馆有故事书120本，科技书是故事书的3倍，科技书比故事书多多少本？',
        options: ['240', '360', '480'],
        answer: '240',
      },
      {
        question: '鸡有15只，鸭的只数是鸡的2倍，鹅比鸭多3只，鹅有多少只？',
        options: ['30', '33', '18'],
        answer: '33',
      },
    ],
  },

  // ── 三年级上册 · 模块五：认识分数 ──
  {
    id: 'g3_math_fraction_intro',
    name: '分数的初步认识',
    module: '认识分数',
    grade: '三年级上册',
    description: '认识几分之一，理解把一个整体平均分成几份，其中一份就是几分之一。',
    practice: [
      {
        question: '把一个蛋糕平均分成4份，其中的一份是这个蛋糕的几分之几？',
        options: ['四分之一', '二分之一', '八分之一'],
        answer: '四分之一',
      },
      {
        question: '把一张纸平均分成3份，每份是这张纸的几分之几？',
        options: ['三分之一', '三分之二', '六分之一'],
        answer: '三分之一',
      },
      {
        question: '分数"½"读作什么？',
        options: ['二分之一', '一分之二', '一二'],
        answer: '二分之一',
      },
    ],
  },
  {
    id: 'g3_math_fraction_parts',
    name: '分数各部分名称',
    module: '认识分数',
    grade: '三年级上册',
    description: '认识分数的分子、分母和分数线，理解各部分的含义。',
    practice: [
      {
        question: '分数 ¾ 中，3 叫什么？',
        options: ['分子', '分母', '分数线'],
        answer: '分子',
      },
      {
        question: '分数 ⅓ 中，3 叫什么？',
        options: ['分子', '分母', '分数线'],
        answer: '分母',
      },
      {
        question: '分数中，分母表示什么？',
        options: ['平均分的总份数', '取的份数', '剩余的份数'],
        answer: '平均分的总份数',
      },
    ],
  },
  {
    id: 'g3_math_fraction_compare',
    name: '分数的大小比较',
    module: '认识分数',
    grade: '三年级上册',
    description: '比较同分母分数的大小，以及分子是1的分数的大小比较。',
    practice: [
      {
        question: '⅓ 和 ¼ 比，哪个大？',
        options: ['⅓大', '¼大', '一样大'],
        answer: '⅓大',
      },
      {
        question: '⅖ 和 ⅗ 比，哪个大？',
        options: ['⅖大', '⅗大', '一样大'],
        answer: '⅗大',
      },
      {
        question: '分子相同的两个分数，分母越大，分数越？',
        options: ['大', '小', '不变'],
        answer: '小',
      },
    ],
  },
  {
    id: 'g3_math_fraction_add_sub',
    name: '同分母分数加减法',
    module: '认识分数',
    grade: '三年级上册',
    description: '掌握同分母分数的加减法，分母不变，分子相加减。',
    practice: [
      {
        question: '⅖ + ⅕ = ?',
        options: ['⅗', '⅖', '⅗'],
        answer: '⅗',
      },
      {
        question: '⅚ - ⅙ = ?',
        options: ['⅔', '⅚', '⅙'],
        answer: '⅚',
      },
      {
        question: '同分母分数相加减时，什么不变？',
        options: ['分子', '分母', '都不变'],
        answer: '分母',
      },
    ],
  },
  {
    id: 'g3_math_fraction_of_whole',
    name: '几分之几',
    module: '认识分数',
    grade: '三年级上册',
    description: '认识几分之几的分数，知道取几份就是几分之几。',
    practice: [
      {
        question: '把一个西瓜平均分成8份，吃了3份，吃了这个西瓜的几分之几？',
        options: ['八分之三', '八分之五', '三分之一'],
        answer: '八分之三',
      },
      {
        question: '一条绳子平均分成5段，其中2段占全长的几分之几？',
        options: ['五分之二', '二分之一', '五分之二'],
        answer: '五分之二',
      },
      {
        question: '¾ 表示把一个整体平均分成4份，取了几份？',
        options: ['3份', '4份', '7份'],
        answer: '3份',
      },
    ],
  },
  {
    id: 'g3_math_fraction_word_problem',
    name: '分数应用题',
    module: '认识分数',
    grade: '三年级上册',
    description: '用分数知识解决简单的实际问题。',
    practice: [
      {
        question: '一块月饼平均分成4份，小明吃了1份，还剩几分之几？',
        options: ['四分之三', '四分之一', '四分之四'],
        answer: '四分之三',
      },
      {
        question: '一本书有60页，小红看了全书的 ⅓，看了多少页？',
        options: ['20', '30', '40'],
        answer: '20',
      },
      {
        question: '全班有45人，男生占 ⅗，男生有多少人？',
        options: ['15', '27', '9'],
        answer: '27',
      },
    ],
  },

  // ── 三年级上册 · 模块六：时分秒与时间计算 ──
  {
    id: 'g3_math_second',
    name: '秒的认识',
    module: '时分秒与时间计算',
    grade: '三年级上册',
    description: '认识时间单位秒，知道1分=60秒，建立秒的时间观念。',
    practice: [
      {
        question: '1 分等于多少秒？',
        options: ['10', '60', '100'],
        answer: '60',
      },
      {
        question: '钟面上最细最长的针是什么针？',
        options: ['时针', '分针', '秒针'],
        answer: '秒针',
      },
      {
        question: '秒针走一小格是多长时间？',
        options: ['1秒', '1分', '1时'],
        answer: '1秒',
      },
    ],
  },
  {
    id: 'g3_math_second_hand',
    name: '秒针的运动',
    module: '时分秒与时间计算',
    grade: '三年级上册',
    description: '认识秒针走一圈是60秒即1分钟，理解时分秒之间的关系。',
    practice: [
      {
        question: '秒针走一圈是多长时间？',
        options: ['1秒', '60秒', '1小时'],
        answer: '60秒',
      },
      {
        question: '秒针走一大格是几秒？',
        options: ['1秒', '5秒', '10秒'],
        answer: '5秒',
      },
      {
        question: '1小时等于多少分钟？',
        options: ['30', '60', '100'],
        answer: '60',
      },
    ],
  },
  {
    id: 'g3_math_time_calc',
    name: '经过时间的计算',
    module: '时分秒与时间计算',
    grade: '三年级上册',
    description: '计算经过的时间，用结束时刻减去开始时刻。',
    practice: [
      {
        question: '电影从 8:30 开始，10:00 结束，放映了多长时间？',
        options: ['1小时30分', '2小时', '1小时20分'],
        answer: '1小时30分',
      },
      {
        question: '小明7:15出门，7:40到学校，路上用了多长时间？',
        options: ['15分钟', '25分钟', '35分钟'],
        answer: '25分钟',
      },
      {
        question: '一列火车9:00出发，12:30到达，行驶了多长时间？',
        options: ['3小时', '3小时30分', '4小时'],
        answer: '3小时30分',
      },
    ],
  },
  {
    id: 'g3_math_time_unit_convert',
    name: '时间单位换算',
    module: '时分秒与时间计算',
    grade: '三年级上册',
    description: '掌握时、分、秒之间的换算关系。',
    practice: [
      {
        question: '2小时等于多少分钟？',
        options: ['20', '120', '200'],
        answer: '120',
      },
      {
        question: '180秒等于多少分钟？',
        options: ['2', '3', '18'],
        answer: '3',
      },
      {
        question: '1小时20分钟等于多少分钟？',
        options: ['80', '120', '100'],
        answer: '80',
      },
    ],
  },
  {
    id: 'g3_math_time_schedule',
    name: '作息时间表',
    module: '时分秒与时间计算',
    grade: '三年级上册',
    description: '能读懂作息时间表，合理安排每日作息。',
    practice: [
      {
        question: '上午8:00上课，11:30放学，上午在校多长时间？',
        options: ['3小时', '3小时30分', '4小时'],
        answer: '3小时30分',
      },
      {
        question: '午睡从12:30到13:10，午睡了多长时间？',
        options: ['30分钟', '40分钟', '50分钟'],
        answer: '40分钟',
      },
      {
        question: '小红18:00开始写作业，写了1小时30分，几点写完？',
        options: ['19:00', '19:30', '20:00'],
        answer: '19:30',
      },
    ],
  },
  {
    id: 'g3_math_time_word_problem',
    name: '时间应用题',
    module: '时分秒与时间计算',
    grade: '三年级上册',
    description: '综合运用时间知识解决实际问题。',
    practice: [
      {
        question: '一场足球赛从14:30开始，进行了90分钟，几点结束？',
        options: ['15:30', '16:00', '16:30'],
        answer: '16:00',
      },
      {
        question: '从北京到上海的火车需要5小时40分钟，如果8:00出发，几点到达？',
        options: ['13:40', '12:40', '14:00'],
        answer: '13:40',
      },
      {
        question: '小明每天跑步30分钟，一个星期（7天）跑步多长时间？',
        options: ['3小时30分', '210分钟', '以上都对'],
        answer: '以上都对',
      },
    ],
  },

  // ── 三年级上册 · 模块七：毫米/分米/千米/吨 ──
  {
    id: 'g3_math_mm',
    name: '毫米的认识',
    module: '毫米分米千米吨',
    grade: '三年级上册',
    description: '认识长度单位毫米，知道1厘米=10毫米。',
    practice: [
      {
        question: '1 厘米等于多少毫米？',
        options: ['10', '100', '1000'],
        answer: '10',
      },
      {
        question: '一枚硬币的厚度大约是2什么？',
        options: ['厘米', '毫米', '分米'],
        answer: '毫米',
      },
      {
        question: '30毫米等于多少厘米？',
        options: ['3', '300', '30'],
        answer: '3',
      },
    ],
  },
  {
    id: 'g3_math_dm',
    name: '分米的认识',
    module: '毫米分米千米吨',
    grade: '三年级上册',
    description: '认识长度单位分米，知道1分米=10厘米，1米=10分米。',
    practice: [
      {
        question: '1 分米等于多少厘米？',
        options: ['10', '100', '1000'],
        answer: '10',
      },
      {
        question: '1 米等于多少分米？',
        options: ['10', '100', '1000'],
        answer: '10',
      },
      {
        question: '课桌的高度大约是7什么？',
        options: ['米', '分米', '毫米'],
        answer: '分米',
      },
    ],
  },
  {
    id: 'g3_math_km',
    name: '千米的认识',
    module: '毫米分米千米吨',
    grade: '三年级上册',
    description: '认识长度单位千米（公里），知道1千米=1000米。',
    practice: [
      {
        question: '1 千米等于多少米？',
        options: ['100', '1000', '10000'],
        answer: '1000',
      },
      {
        question: '从家到学校的距离大约是2什么？',
        options: ['米', '千米', '厘米'],
        answer: '千米',
      },
      {
        question: '5000米等于多少千米？',
        options: ['5', '50', '500'],
        answer: '5',
      },
    ],
  },
  {
    id: 'g3_math_length_convert',
    name: '长度单位换算',
    module: '毫米分米千米吨',
    grade: '三年级上册',
    description: '掌握毫米、厘米、分米、米、千米之间的换算。',
    practice: [
      {
        question: '3米等于多少分米？',
        options: ['30', '300', '3000'],
        answer: '30',
      },
      {
        question: '200厘米等于多少米？',
        options: ['2', '20', '2000'],
        answer: '2',
      },
      {
        question: '8千米等于多少米？',
        options: ['80', '800', '8000'],
        answer: '8000',
      },
    ],
  },
  {
    id: 'g3_math_ton',
    name: '吨的认识',
    module: '毫米分米千米吨',
    grade: '三年级上册',
    description: '认识质量单位吨，知道1吨=1000千克。',
    practice: [
      {
        question: '1 吨等于多少千克？',
        options: ['100', '1000', '10000'],
        answer: '1000',
      },
      {
        question: '一辆卡车的载重量是5什么？',
        options: ['千克', '克', '吨'],
        answer: '吨',
      },
      {
        question: '3吨等于多少千克？',
        options: ['30', '300', '3000'],
        answer: '3000',
      },
    ],
  },
  {
    id: 'g3_math_weight_convert',
    name: '质量单位换算综合',
    module: '毫米分米千米吨',
    grade: '三年级上册',
    description: '综合掌握克、千克、吨之间的换算。',
    practice: [
      {
        question: '2吨500千克等于多少千克？',
        options: ['2500', '2050', '2005'],
        answer: '2500',
      },
      {
        question: '4000千克等于多少吨？',
        options: ['4', '40', '400'],
        answer: '4',
      },
      {
        question: '一头大象大约重4什么？',
        options: ['千克', '克', '吨'],
        answer: '吨',
      },
    ],
  },

  // ── 三年级上册 · 模块八：四边形与周长 ──
  {
    id: 'g3_math_quadrilateral',
    name: '四边形的认识',
    module: '四边形与周长',
    grade: '三年级上册',
    description: '认识四边形，知道长方形和正方形都是特殊的四边形。',
    practice: [
      {
        question: '四边形有几条边？',
        options: ['3', '4', '5'],
        answer: '4',
      },
      {
        question: '下面哪个不是四边形？',
        options: ['长方形', '三角形', '平行四边形'],
        answer: '三角形',
      },
      {
        question: '正方形是特殊的什么形？',
        options: ['三角形', '长方形', '圆'],
        answer: '长方形',
      },
    ],
  },
  {
    id: 'g3_math_perimeter_concept',
    name: '周长的概念',
    module: '四边形与周长',
    grade: '三年级上册',
    description: '理解周长的含义，周长是封闭图形一周的长度。',
    practice: [
      {
        question: '什么叫做周长？',
        options: ['图形一周的长度', '图形的面积', '图形边的条数'],
        answer: '图形一周的长度',
      },
      {
        question: '测量一个不规则图形的周长可以用什么方法？',
        options: ['用绳子围一圈再量', '用尺子直接量', '用计算器算'],
        answer: '用绳子围一圈再量',
      },
      {
        question: '周长是指围绕图形几条边的长度？',
        options: ['一条边', '两条边', '所有边'],
        answer: '所有边',
      },
    ],
  },
  {
    id: 'g3_math_rectangle_perimeter',
    name: '长方形和正方形的周长',
    module: '四边形与周长',
    grade: '三年级上册',
    description: '掌握长方形周长=(长+宽)×2，正方形周长=边长×4。',
    practice: [
      {
        question: '长方形长8厘米，宽5厘米，周长是多少厘米？',
        options: ['13', '26', '40'],
        answer: '26',
      },
      {
        question: '正方形边长6厘米，周长是多少厘米？',
        options: ['12', '24', '36'],
        answer: '24',
      },
      {
        question: '长方形周长的计算公式是？',
        options: ['(长+宽)×2', '长×宽', '长+宽'],
        answer: '(长+宽)×2',
      },
    ],
  },
  {
    id: 'g3_math_perimeter_word_problem',
    name: '周长应用题',
    module: '四边形与周长',
    grade: '三年级上册',
    description: '用周长公式解决生活中的实际问题。',
    practice: [
      {
        question: '一块长方形菜地，长20米，宽15米，围一圈篱笆需要多少米？',
        options: ['35', '70', '300'],
        answer: '70',
      },
      {
        question: '一个正方形花坛边长8米，沿花坛走一圈是多少米？',
        options: ['16', '32', '64'],
        answer: '32',
      },
      {
        question: '长方形操场长100米，宽60米，小明沿操场跑两圈，跑了多少米？',
        options: ['320', '640', '160'],
        answer: '640',
      },
    ],
  },

  // ── 三年级下册 · 模块一：两位数乘两位数 ──
  {
    id: 'g3_math_two_digit_mult_basic',
    name: '两位数乘两位数（不进位）',
    module: '两位数乘两位数',
    grade: '三年级下册',
    description: '掌握两位数乘两位数不进位的竖式计算方法。',
    practice: [
      {
        question: '23 × 12 = ?',
        options: ['276', '256', '266'],
        answer: '276',
      },
      {
        question: '21 × 13 = ?',
        options: ['273', '283', '263'],
        answer: '273',
      },
      {
        question: '两位数乘两位数竖式计算时，先用第二个乘数的哪一位去乘？',
        options: ['十位', '个位', '随便哪一位'],
        answer: '个位',
      },
    ],
  },
  {
    id: 'g3_math_two_digit_mult_carry',
    name: '两位数乘两位数（进位）',
    module: '两位数乘两位数',
    grade: '三年级下册',
    description: '掌握两位数乘两位数进位的竖式计算方法。',
    practice: [
      {
        question: '46 × 28 = ?',
        options: ['1288', '1188', '1298'],
        answer: '1288',
      },
      {
        question: '35 × 24 = ?',
        options: ['840', '740', '940'],
        answer: '840',
      },
      {
        question: '竖式计算两位数乘两位数时，第二步的积的末位应该和什么对齐？',
        options: ['个位', '十位', '百位'],
        answer: '十位',
      },
    ],
  },
  {
    id: 'g3_math_two_digit_mult_special',
    name: '特殊两位数乘法',
    module: '两位数乘两位数',
    grade: '三年级下册',
    description: '掌握末尾有0或因数中间有0的两位数乘法。',
    practice: [
      {
        question: '50 × 40 = ?',
        options: ['200', '2000', '20000'],
        answer: '2000',
      },
      {
        question: '25 × 40 = ?',
        options: ['100', '1000', '10000'],
        answer: '1000',
      },
      {
        question: '因数末尾有0时，简便算法是？',
        options: ['先乘非0部分再在末尾补0', '把0都去掉', '不用简便算法'],
        answer: '先乘非0部分再在末尾补0',
      },
    ],
  },
  {
    id: 'g3_math_two_digit_mult_estimate',
    name: '两位数乘两位数估算',
    module: '两位数乘两位数',
    grade: '三年级下册',
    description: '用四舍五入法估算两位数乘两位数的积。',
    practice: [
      {
        question: '估算 49 × 31，大约等于多少？',
        options: ['1200', '1500', '2000'],
        answer: '1500',
      },
      {
        question: '估算 22 × 38，大约等于多少？',
        options: ['600', '800', '1000'],
        answer: '800',
      },
      {
        question: '估算 71 × 58 时，应该把71和58分别看成？',
        options: ['70和60', '70和50', '80和60'],
        answer: '70和60',
      },
    ],
  },
  {
    id: 'g3_math_two_digit_mult_verify',
    name: '两位数乘法验算',
    module: '两位数乘两位数',
    grade: '三年级下册',
    description: '学会用交换乘数位置的方法验算乘法。',
    practice: [
      {
        question: '验算 24 × 35 = 840，正确的方法是？',
        options: ['用35×24再算一遍看是否等于840', '840+24', '840÷24'],
        answer: '用35×24再算一遍看是否等于840',
      },
      {
        question: '乘法验算可以用什么方法？',
        options: ['交换两个乘数的位置再算一遍', '用积除以一个乘数看是否等于另一个乘数', '以上都可以'],
        answer: '以上都可以',
      },
      {
        question: '46 × 23 = 1058，验算时可以用1058除以多少？',
        options: ['23或46', '1058', '23+46'],
        answer: '23或46',
      },
    ],
  },
  {
    id: 'g3_math_two_digit_mult_word',
    name: '两位数乘两位数应用题',
    module: '两位数乘两位数',
    grade: '三年级下册',
    description: '用两位数乘两位数解决生活中的实际问题。',
    practice: [
      {
        question: '学校有16个班，每班45人，全校一共有多少人？',
        options: ['720', '620', '820'],
        answer: '720',
      },
      {
        question: '一辆货车每次运32吨货物，运了15次，一共运了多少吨？',
        options: ['480', '380', '580'],
        answer: '480',
      },
      {
        question: '电影院有24排座位，每排32个座位，一共可以坐多少人？',
        options: ['768', '668', '868'],
        answer: '768',
      },
    ],
  },
  {
    id: 'g3_math_two_digit_mult_two_step',
    name: '连乘应用题',
    module: '两位数乘两位数',
    grade: '三年级下册',
    description: '用连乘解决需要两步乘法计算的实际问题。',
    practice: [
      {
        question: '每箱有12瓶水，每瓶2元，买5箱需要多少元？',
        options: ['120', '60', '240'],
        answer: '120',
      },
      {
        question: '一个书架有4层，每层放25本书，3个这样的书架一共放多少本？',
        options: ['300', '100', '400'],
        answer: '300',
      },
      {
        question: '每只鸡一天下2个蛋，8只鸡15天一共下多少个蛋？',
        options: ['240', '160', '120'],
        answer: '240',
      },
    ],
  },
  {
    id: 'g3_math_two_digit_mult_area',
    name: '乘法与面积应用',
    module: '两位数乘两位数',
    grade: '三年级下册',
    description: '用两位数乘法计算长方形面积等实际问题。',
    practice: [
      {
        question: '一块长方形土地，长35米，宽24米，面积是多少平方米？',
        options: ['840', '740', '940'],
        answer: '840',
      },
      {
        question: '一面墙长12米，高3米，粉刷面积是多少平方米？',
        options: ['36', '15', '48'],
        answer: '36',
      },
      {
        question: '一张长方形纸长25厘米，宽18厘米，面积是多少平方厘米？',
        options: ['450', '430', '500'],
        answer: '450',
      },
    ],
  },

  // ── 三年级下册 · 模块二：一位数除多位数 ──
  {
    id: 'g3_math_div_multi_basic',
    name: '一位数除两位数',
    module: '一位数除多位数',
    grade: '三年级下册',
    description: '掌握一位数除两位数的竖式除法计算方法。',
    practice: [
      {
        question: '96 ÷ 3 = ?',
        options: ['32', '23', '42'],
        answer: '32',
      },
      {
        question: '84 ÷ 4 = ?',
        options: ['21', '12', '24'],
        answer: '21',
      },
      {
        question: '竖式除法中，从被除数的哪一位除起？',
        options: ['个位', '十位', '最高位'],
        answer: '最高位',
      },
    ],
  },
  {
    id: 'g3_math_div_three_digit',
    name: '一位数除三位数',
    module: '一位数除多位数',
    grade: '三年级下册',
    description: '掌握一位数除三位数的竖式除法，注意商的位置。',
    practice: [
      {
        question: '486 ÷ 2 = ?',
        options: ['243', '234', '253'],
        answer: '243',
      },
      {
        question: '639 ÷ 3 = ?',
        options: ['213', '231', '312'],
        answer: '213',
      },
      {
        question: '计算 756 ÷ 6 时，商是几位数？',
        options: ['两位数', '三位数', '一位数'],
        answer: '三位数',
      },
    ],
  },
  {
    id: 'g3_math_div_with_remainder',
    name: '有余数的一位数除法',
    module: '一位数除多位数',
    grade: '三年级下册',
    description: '掌握一位数除多位数有余数的除法计算。',
    practice: [
      {
        question: '185 ÷ 6 = ？……？',
        options: ['30……5', '31……1', '29……11'],
        answer: '30……5',
      },
      {
        question: '457 ÷ 8 = ？……？',
        options: ['57……1', '56……9', '57……2'],
        answer: '57……1',
      },
      {
        question: '验算有余数除法：商×除数+余数应该等于什么？',
        options: ['除数', '被除数', '余数'],
        answer: '被除数',
      },
    ],
  },
  {
    id: 'g3_math_div_zero_quotient',
    name: '商中间或末尾有0的除法',
    module: '一位数除多位数',
    grade: '三年级下册',
    description: '掌握商中间或末尾有0的除法，理解0除以任何非零数等于0。',
    practice: [
      {
        question: '408 ÷ 4 = ?',
        options: ['102', '12', '120'],
        answer: '102',
      },
      {
        question: '630 ÷ 3 = ?',
        options: ['210', '21', '201'],
        answer: '210',
      },
      {
        question: '0 除以任何不是0的数等于多少？',
        options: ['0', '1', '那个数本身'],
        answer: '0',
      },
    ],
  },
  {
    id: 'g3_math_div_estimate',
    name: '除法估算',
    module: '一位数除多位数',
    grade: '三年级下册',
    description: '用估算的方法大致算出除法的结果。',
    practice: [
      {
        question: '估算 198 ÷ 5，大约等于多少？',
        options: ['30', '40', '50'],
        answer: '40',
      },
      {
        question: '估算 421 ÷ 7，大约等于多少？',
        options: ['50', '60', '70'],
        answer: '60',
      },
      {
        question: '估算 356 ÷ 9 时，把356看成多少比较好？',
        options: ['350', '360', '400'],
        answer: '360',
      },
    ],
  },
  {
    id: 'g3_math_div_verify',
    name: '除法验算',
    module: '一位数除多位数',
    grade: '三年级下册',
    description: '学会用乘法验算除法的结果。',
    practice: [
      {
        question: '验算 756 ÷ 6 = 126，正确的方法是？',
        options: ['126 × 6 看是否等于756', '756 × 6', '126 ÷ 6'],
        answer: '126 × 6 看是否等于756',
      },
      {
        question: '验算有余数除法 185 ÷ 6 = 30……5，应该？',
        options: ['30×6+5看是否等于185', '30×6-5', '30+6+5'],
        answer: '30×6+5看是否等于185',
      },
      {
        question: '除法验算时，没有余数的情况下用什么方法？',
        options: ['商×除数=被除数', '商+除数=被除数', '商÷除数=被除数'],
        answer: '商×除数=被除数',
      },
    ],
  },
  {
    id: 'g3_math_div_word',
    name: '除法应用题',
    module: '一位数除多位数',
    grade: '三年级下册',
    description: '用除法解决生活中的平均分和包含除问题。',
    practice: [
      {
        question: '把345个苹果平均分给5个班，每班分多少个？',
        options: ['69', '59', '79'],
        answer: '69',
      },
      {
        question: '一根绳子长456厘米，每6厘米剪一段，可以剪多少段？',
        options: ['76', '66', '86'],
        answer: '76',
      },
      {
        question: '工厂有840个零件，每8个装一箱，可以装多少箱？',
        options: ['105', '95', '115'],
        answer: '105',
      },
    ],
  },
  {
    id: 'g3_math_div_two_step',
    name: '除法两步应用题',
    module: '一位数除多位数',
    grade: '三年级下册',
    description: '用两步除法或除加、除减解决实际问题。',
    practice: [
      {
        question: '960个面包，每8个装一袋，每6袋装一箱，需要几个箱子？',
        options: ['20', '16', '24'],
        answer: '20',
      },
      {
        question: '小明5天看了240页书，平均每天看多少页？',
        options: ['48', '40', '52'],
        answer: '48',
      },
      {
        question: '有720千克苹果，每8千克装一箱，卖出65箱后还剩多少箱？',
        options: ['25', '35', '15'],
        answer: '25',
      },
    ],
  },

  // ── 三年级下册 · 模块三：小数的初步认识 ──
  {
    id: 'g3_math_decimal_intro',
    name: '小数的含义',
    module: '小数的初步认识',
    grade: '三年级下册',
    description: '认识小数的含义，理解一位小数表示十分之几。',
    practice: [
      {
        question: '0.3 表示十分之几？',
        options: ['十分之三', '百分之三', '十分之三十'],
        answer: '十分之三',
      },
      {
        question: '1元2角用小数表示是多少元？',
        options: ['1.2元', '12元', '0.12元'],
        answer: '1.2元',
      },
      {
        question: '小数点左边是什么部分？',
        options: ['小数部分', '整数部分', '分数部分'],
        answer: '整数部分',
      },
    ],
  },
  {
    id: 'g3_math_decimal_read',
    name: '小数的读写',
    module: '小数的初步认识',
    grade: '三年级下册',
    description: '掌握小数的正确读法和写法。',
    practice: [
      {
        question: '3.56 读作什么？',
        options: ['三点五六', '三点五十六', '三五六'],
        answer: '三点五六',
      },
      {
        question: '"零点八五"写作什么？',
        options: ['0.85', '8.5', '85'],
        answer: '0.85',
      },
      {
        question: '10.05 读作什么？',
        options: ['十点零五', '十点五', '一零零五'],
        answer: '十点零五',
      },
    ],
  },
  {
    id: 'g3_math_decimal_compare',
    name: '小数的大小比较',
    module: '小数的初步认识',
    grade: '三年级下册',
    description: '掌握小数大小比较的方法，先比整数部分，再比小数部分。',
    practice: [
      {
        question: '0.8 和 0.5 比，哪个大？',
        options: ['0.8大', '0.5大', '一样大'],
        answer: '0.8大',
      },
      {
        question: '3.2 和 2.9 比，哪个大？',
        options: ['3.2大', '2.9大', '一样大'],
        answer: '3.2大',
      },
      {
        question: '比较小数大小时，先比较什么？',
        options: ['小数部分', '整数部分', '小数点'],
        answer: '整数部分',
      },
    ],
  },
  {
    id: 'g3_math_decimal_add',
    name: '简单小数加法',
    module: '小数的初步认识',
    grade: '三年级下册',
    description: '掌握一位小数的加法，小数点对齐后按整数加法计算。',
    practice: [
      {
        question: '0.5 + 0.3 = ?',
        options: ['0.8', '0.2', '8'],
        answer: '0.8',
      },
      {
        question: '2.4 + 1.5 = ?',
        options: ['3.9', '3.8', '4.9'],
        answer: '3.9',
      },
      {
        question: '小数加法中，最重要的是什么？',
        options: ['小数点对齐', '整数对齐就行', '末尾对齐'],
        answer: '小数点对齐',
      },
    ],
  },
  {
    id: 'g3_math_decimal_sub',
    name: '简单小数减法',
    module: '小数的初步认识',
    grade: '三年级下册',
    description: '掌握一位小数的减法，小数点对齐后按整数减法计算。',
    practice: [
      {
        question: '0.9 - 0.4 = ?',
        options: ['0.5', '0.13', '5'],
        answer: '0.5',
      },
      {
        question: '5.6 - 2.3 = ?',
        options: ['3.3', '3.4', '2.3'],
        answer: '3.3',
      },
      {
        question: '小数减法中，小数点应该怎么处理？',
        options: ['对齐', '不用管', '去掉'],
        answer: '对齐',
      },
    ],
  },
  {
    id: 'g3_math_decimal_carry_borrow',
    name: '小数进位加法和退位减法',
    module: '小数的初步认识',
    grade: '三年级下册',
    description: '掌握一位小数的进位加法和退位减法。',
    practice: [
      {
        question: '0.7 + 0.6 = ?',
        options: ['1.3', '0.13', '13'],
        answer: '1.3',
      },
      {
        question: '3.2 - 1.5 = ?',
        options: ['1.7', '2.7', '1.3'],
        answer: '1.7',
      },
      {
        question: '4.5 + 2.8 = ?',
        options: ['7.3', '6.3', '7.13'],
        answer: '7.3',
      },
    ],
  },
  {
    id: 'g3_math_decimal_money',
    name: '小数与货币',
    module: '小数的初步认识',
    grade: '三年级下册',
    description: '在购物情境中运用小数知识进行元角分的计算。',
    practice: [
      {
        question: '一支钢笔8.5元，一本笔记本3.2元，一共多少元？',
        options: ['11.7元', '10.7元', '12.7元'],
        answer: '11.7元',
      },
      {
        question: '小明有10元，买了一支5.8元的钢笔，还剩多少元？',
        options: ['4.2元', '5.2元', '4.8元'],
        answer: '4.2元',
      },
      {
        question: '5元3角用小数表示是多少元？',
        options: ['5.3元', '53元', '0.53元'],
        answer: '5.3元',
      },
    ],
  },
  {
    id: 'g3_math_decimal_measure',
    name: '小数与测量',
    module: '小数的初步认识',
    grade: '三年级下册',
    description: '在测量中运用小数，如长度、重量的小数表示。',
    practice: [
      {
        question: '1米30厘米用小数表示是多少米？',
        options: ['1.3米', '13米', '0.13米'],
        answer: '1.3米',
      },
      {
        question: '2千克500克用小数表示是多少千克？',
        options: ['2.5千克', '25千克', '0.25千克'],
        answer: '2.5千克',
      },
      {
        question: '一根绳子长2.4米，另一根长1.8米，一共多长？',
        options: ['4.2米', '3.2米', '4.12米'],
        answer: '4.2米',
      },
    ],
  },

  // ── 三年级下册 · 模块四：面积与面积单位 ──
  {
    id: 'g3_math_area_concept',
    name: '面积的概念',
    module: '面积与面积单位',
    grade: '三年级下册',
    description: '理解面积的含义，面积是物体表面或封闭图形的大小。',
    practice: [
      {
        question: '什么叫做面积？',
        options: ['物体表面或封闭图形的大小', '图形一周的长度', '图形边的条数'],
        answer: '物体表面或封闭图形的大小',
      },
      {
        question: '面积和周长有什么区别？',
        options: ['面积是表面的大小，周长是一周的长度', '面积就是周长', '没有区别'],
        answer: '面积是表面的大小，周长是一周的长度',
      },
      {
        question: '比较两个图形面积的大小，可以用什么方法？',
        options: ['重叠比较或数方格', '只看周长', '只看边长'],
        answer: '重叠比较或数方格',
      },
    ],
  },
  {
    id: 'g3_math_area_unit',
    name: '面积单位',
    module: '面积与面积单位',
    grade: '三年级下册',
    description: '认识平方厘米、平方分米、平方米等面积单位。',
    practice: [
      {
        question: '1平方分米等于多少平方厘米？',
        options: ['10', '100', '1000'],
        answer: '100',
      },
      {
        question: '1平方米等于多少平方分米？',
        options: ['10', '100', '1000'],
        answer: '100',
      },
      {
        question: '一枚邮票的面积大约是6什么？',
        options: ['平方米', '平方分米', '平方厘米'],
        answer: '平方厘米',
      },
    ],
  },
  {
    id: 'g3_math_area_rectangle',
    name: '长方形面积',
    module: '面积与面积单位',
    grade: '三年级下册',
    description: '掌握长方形面积=长×宽的计算公式。',
    practice: [
      {
        question: '长方形长8厘米，宽5厘米，面积是多少平方厘米？',
        options: ['26', '40', '13'],
        answer: '40',
      },
      {
        question: '长方形面积的计算公式是？',
        options: ['长×宽', '(长+宽)×2', '长+宽'],
        answer: '长×宽',
      },
      {
        question: '一块长方形草地长30米，宽20米，面积是多少平方米？',
        options: ['100', '600', '50'],
        answer: '600',
      },
    ],
  },
  {
    id: 'g3_math_area_square',
    name: '正方形面积',
    module: '面积与面积单位',
    grade: '三年级下册',
    description: '掌握正方形面积=边长×边长的计算公式。',
    practice: [
      {
        question: '正方形边长9厘米，面积是多少平方厘米？',
        options: ['36', '81', '18'],
        answer: '81',
      },
      {
        question: '正方形面积的计算公式是？',
        options: ['边长×边长', '边长×4', '(边长+边长)×2'],
        answer: '边长×边长',
      },
      {
        question: '一块正方形地砖边长5分米，面积是多少平方分米？',
        options: ['20', '25', '10'],
        answer: '25',
      },
    ],
  },
  {
    id: 'g3_math_area_unit_convert',
    name: '面积单位换算',
    module: '面积与面积单位',
    grade: '三年级下册',
    description: '掌握面积单位之间的换算，相邻面积单位进率是100。',
    practice: [
      {
        question: '3平方米等于多少平方分米？',
        options: ['30', '300', '3000'],
        answer: '300',
      },
      {
        question: '500平方厘米等于多少平方分米？',
        options: ['5', '50', '5000'],
        answer: '5',
      },
      {
        question: '相邻两个面积单位之间的进率是多少？',
        options: ['10', '100', '1000'],
        answer: '100',
      },
    ],
  },
  {
    id: 'g3_math_area_word',
    name: '面积应用题',
    module: '面积与面积单位',
    grade: '三年级下册',
    description: '用面积知识解决生活中的实际问题。',
    practice: [
      {
        question: '一间教室长9米，宽6米，面积是多少平方米？',
        options: ['30', '54', '15'],
        answer: '54',
      },
      {
        question: '一块长方形花圃长25米，宽16米，面积是多少平方米？',
        options: ['82', '400', '410'],
        answer: '400',
      },
      {
        question: '正方形操场边长50米，面积是多少平方米？',
        options: ['200', '2500', '100'],
        answer: '2500',
      },
    ],
  },
  {
    id: 'g3_math_area_composite',
    name: '组合图形面积',
    module: '面积与面积单位',
    grade: '三年级下册',
    description: '用分割或补全法计算组合图形的面积。',
    practice: [
      {
        question: '一个L形图形可以分成两个长方形，一个长6宽3，一个长4宽2，总面积是多少？',
        options: ['26', '18', '32'],
        answer: '26',
      },
      {
        question: '计算组合图形面积的常用方法是？',
        options: ['分割法或补全法', '只能用加法', '只能用减法'],
        answer: '分割法或补全法',
      },
      {
        question: '一个大长方形长10宽8，中间挖去一个长3宽2的小长方形，剩余面积是多少？',
        options: ['74', '86', '80'],
        answer: '74',
      },
    ],
  },
  {
    id: 'g3_math_area_perimeter_compare',
    name: '面积与周长的比较',
    module: '面积与面积单位',
    grade: '三年级下册',
    description: '理解面积和周长是两个不同的概念，它们之间没有必然关系。',
    practice: [
      {
        question: '一个长方形长10厘米宽6厘米，周长和面积分别是多少？',
        options: ['周长32厘米面积60平方厘米', '周长60厘米面积32平方厘米', '都是60'],
        answer: '周长32厘米面积60平方厘米',
      },
      {
        question: '周长相等的两个长方形，面积一定相等吗？',
        options: ['一定相等', '不一定相等', '一定不相等'],
        answer: '不一定相等',
      },
      {
        question: '正方形边长4厘米，周长和面积的数值分别是？',
        options: ['周长16厘米面积16平方厘米', '周长8厘米面积16平方厘米', '周长16厘米面积8平方厘米'],
        answer: '周长16厘米面积16平方厘米',
      },
    ],
  },

  // ── 三年级下册 · 模块五：年月日 ──
  {
    id: 'g3_math_year_month_day',
    name: '年月日的认识',
    module: '年月日',
    grade: '三年级下册',
    description: '认识年月日，知道一年有12个月，各月天数不同。',
    practice: [
      {
        question: '一年有几个月？',
        options: ['10', '12', '14'],
        answer: '12',
      },
      {
        question: '一年中有几个大月？',
        options: ['5', '6', '7'],
        answer: '7',
      },
      {
        question: '大月有多少天？',
        options: ['28天', '30天', '31天'],
        answer: '31天',
      },
    ],
  },
  {
    id: 'g3_math_big_small_month',
    name: '大月和小月',
    module: '年月日',
    grade: '三年级下册',
    description: '知道1/3/5/7/8/10/12月是大月（31天），4/6/9/11月是小月（30天）。',
    practice: [
      {
        question: '下面哪个月是小月？',
        options: ['3月', '6月', '8月'],
        answer: '6月',
      },
      {
        question: '小月有多少天？',
        options: ['28天', '29天', '30天'],
        answer: '30天',
      },
      {
        question: '一年中有几个小月？',
        options: ['4', '5', '6'],
        answer: '4',
      },
    ],
  },
  {
    id: 'g3_math_leap_year',
    name: '平年和闰年',
    module: '年月日',
    grade: '三年级下册',
    description: '知道平年2月有28天，闰年2月有29天，全年分别有365天和366天。',
    practice: [
      {
        question: '平年的2月有多少天？',
        options: ['28', '29', '30'],
        answer: '28',
      },
      {
        question: '闰年全年有多少天？',
        options: ['365', '366', '364'],
        answer: '366',
      },
      {
        question: '判断闰年的方法是？',
        options: ['年份能被4整除且不能被100整除，或能被400整除', '年份是偶数', '年份能被2整除'],
        answer: '年份能被4整除且不能被100整除，或能被400整除',
      },
    ],
  },
  {
    id: 'g3_math_leap_year_judge',
    name: '判断平年闰年',
    module: '年月日',
    grade: '三年级下册',
    description: '能根据年份判断是平年还是闰年。',
    practice: [
      {
        question: '2024年是平年还是闰年？',
        options: ['平年', '闰年', '无法判断'],
        answer: '闰年',
      },
      {
        question: '2100年是平年还是闰年？',
        options: ['平年', '闰年', '无法判断'],
        answer: '平年',
      },
      {
        question: '2000年是平年还是闰年？',
        options: ['平年', '闰年', '无法判断'],
        answer: '闰年',
      },
    ],
  },
  {
    id: 'g3_math_quarter',
    name: '季度的认识',
    module: '年月日',
    grade: '三年级下册',
    description: '知道一年分四个季度，每个季度包含哪几个月。',
    practice: [
      {
        question: '一年有几个季度？',
        options: ['2', '3', '4'],
        answer: '4',
      },
      {
        question: '第三季度包括哪几个月？',
        options: ['7、8、9月', '1、2、3月', '10、11、12月'],
        answer: '7、8、9月',
      },
      {
        question: '每个季度有几个月？',
        options: ['2', '3', '4'],
        answer: '3',
      },
    ],
  },
  {
    id: 'g3_math_24_hour',
    name: '24时计时法',
    module: '年月日',
    grade: '三年级下册',
    description: '认识24时计时法，能进行12时和24时计时法的互换。',
    practice: [
      {
        question: '下午3时用24时计时法表示是几时？',
        options: ['3时', '13时', '15时'],
        answer: '15时',
      },
      {
        question: '24时计时法的20时是普通计时法的几点？',
        options: ['上午8时', '晚上8时', '下午4时'],
        answer: '晚上8时',
      },
      {
        question: '24时也就是第二天的几时？',
        options: ['0时', '12时', '24时'],
        answer: '0时',
      },
    ],
  },
  {
    id: 'g3_math_date_calc',
    name: '日期计算',
    module: '年月日',
    grade: '三年级下册',
    description: '计算经过的天数，解决与日期相关的实际问题。',
    practice: [
      {
        question: '从3月1日到3月31日一共有多少天？',
        options: ['30天', '31天', '29天'],
        answer: '31天',
      },
      {
        question: '暑假从7月1日到8月31日，一共有多少天？',
        options: ['60天', '61天', '62天'],
        answer: '62天',
      },
      {
        question: '平年第一季度一共有多少天？',
        options: ['90天', '91天', '89天'],
        answer: '90天',
      },
    ],
  },
  {
    id: 'g3_math_date_word',
    name: '年月日应用题',
    module: '年月日',
    grade: '三年级下册',
    description: '综合运用年月日知识解决实际问题。',
    practice: [
      {
        question: '2024年2月有多少天？',
        options: ['28天', '29天', '30天'],
        answer: '29天',
      },
      {
        question: '今天是5月28日星期三，再过5天是几月几日星期几？',
        options: ['6月2日星期一', '6月1日星期日', '5月33日不存在'],
        answer: '6月2日星期一',
      },
      {
        question: '一年中连续两个月都是31天的是哪两个月？',
        options: ['7月和8月', '1月和2月', '2月和3月'],
        answer: '7月和8月',
      },
    ],
  },

  // ── 三年级下册 · 模块六：简单的统计图 ──
  {
    id: 'g3_math_bar_chart',
    name: '条形统计图',
    module: '简单的统计图',
    grade: '三年级下册',
    description: '认识条形统计图，能从图中读出数据并回答问题。',
    practice: [
      {
        question: '条形统计图中，用什么来表示数据的多少？',
        options: ['条形的长短', '条形的颜色', '条形的宽窄'],
        answer: '条形的长短',
      },
      {
        question: '条形统计图比统计表更什么？',
        options: ['直观形象', '精确', '复杂'],
        answer: '直观形象',
      },
      {
        question: '画条形统计图时，每个条形的宽度应该？',
        options: ['相同', '不同', '随便画'],
        answer: '相同',
      },
    ],
  },
  {
    id: 'g3_math_bar_chart_read',
    name: '读懂条形统计图',
    module: '简单的统计图',
    grade: '三年级下册',
    description: '能从条形统计图中获取信息，进行简单的数据分析。',
    practice: [
      {
        question: '统计图中，A类的条形高度是8格，B类是5格，A类比B类多多少？',
        options: ['3', '5', '8'],
        answer: '3',
      },
      {
        question: '如果统计图中1格代表2人，某条形有6格高，代表多少人？',
        options: ['6人', '12人', '3人'],
        answer: '12人',
      },
      {
        question: '条形统计图的横轴通常表示什么？',
        options: ['数据的大小', '项目名称', '时间'],
        answer: '项目名称',
      },
    ],
  },
  {
    id: 'g3_math_bar_chart_draw',
    name: '绘制条形统计图',
    module: '简单的统计图',
    grade: '三年级下册',
    description: '能根据统计表中的数据绘制简单的条形统计图。',
    practice: [
      {
        question: '绘制条形统计图的第一步是？',
        options: ['画出横轴和纵轴', '直接画条形', '写标题'],
        answer: '画出横轴和纵轴',
      },
      {
        question: '统计图中1格代表5个，如果数据是20，条形应该画几格高？',
        options: ['4格', '5格', '20格'],
        answer: '4格',
      },
      {
        question: '绘制条形统计图时，条形之间的间距应该？',
        options: ['相等', '不等', '随便'],
        answer: '相等',
      },
    ],
  },
  {
    id: 'g3_math_statistics_analysis',
    name: '数据分析',
    module: '简单的统计图',
    grade: '三年级下册',
    description: '能根据统计图表进行简单的数据分析和比较。',
    practice: [
      {
        question: '四种水果销量分别是苹果30、香蕉25、橘子20、葡萄35，哪种水果卖得最多？',
        options: ['苹果', '葡萄', '香蕉'],
        answer: '葡萄',
      },
      {
        question: '上面四种水果一共卖了多少？',
        options: ['110', '100', '120'],
        answer: '110',
      },
      {
        question: '从统计图中最容易看出什么？',
        options: ['数据的大小比较', '精确的计算结果', '小数'],
        answer: '数据的大小比较',
      },
    ],
  },
  {
    id: 'g3_math_statistics_average',
    name: '平均数',
    module: '简单的统计图',
    grade: '三年级下册',
    description: '初步认识平均数，会求简单数据的平均数。',
    practice: [
      {
        question: '三个数分别是6、8、10，它们的平均数是多少？',
        options: ['8', '6', '10'],
        answer: '8',
      },
      {
        question: '求平均数的方法是？',
        options: ['总数÷份数', '总数×份数', '总数+份数'],
        answer: '总数÷份数',
      },
      {
        question: '小明三次考试成绩分别是85、90、95，平均分是多少？',
        options: ['85', '90', '95'],
        answer: '90',
      },
    ],
  },

  // ── 三年级下册 · 模块七：综合复习 ──
  {
    id: 'g3_math_review_calc',
    name: '计算综合复习',
    module: '综合复习',
    grade: '三年级下册',
    description: '综合复习三年级所学的乘除法计算，提高计算速度和准确率。',
    practice: [
      {
        question: '25 × 12 = ?',
        options: ['300', '200', '250'],
        answer: '300',
      },
      {
        question: '816 ÷ 4 = ?',
        options: ['204', '194', '214'],
        answer: '204',
      },
      {
        question: '345 + 678 = ?',
        options: ['1023', '1013', '1033'],
        answer: '1023',
      },
    ],
  },
  {
    id: 'g3_math_review_unit',
    name: '单位换算综合复习',
    module: '综合复习',
    grade: '三年级下册',
    description: '综合复习长度、质量、时间、面积等单位换算。',
    practice: [
      {
        question: '3千米500米等于多少米？',
        options: ['3500', '3050', '3005'],
        answer: '3500',
      },
      {
        question: '4吨等于多少千克？',
        options: ['400', '4000', '40000'],
        answer: '4000',
      },
      {
        question: '5平方米等于多少平方分米？',
        options: ['50', '500', '5000'],
        answer: '500',
      },
    ],
  },
  {
    id: 'g3_math_review_geometry',
    name: '图形与几何综合复习',
    module: '综合复习',
    grade: '三年级下册',
    description: '综合复习周长和面积的计算方法。',
    practice: [
      {
        question: '一个长方形长15厘米、宽8厘米，周长和面积分别是多少？',
        options: ['周长46厘米面积120平方厘米', '周长120厘米面积46平方厘米', '周长38厘米面积120平方厘米'],
        answer: '周长46厘米面积120平方厘米',
      },
      {
        question: '正方形周长是36厘米，边长是多少厘米？',
        options: ['6', '9', '12'],
        answer: '9',
      },
      {
        question: '正方形面积是64平方厘米，边长是多少厘米？',
        options: ['8', '16', '32'],
        answer: '8',
      },
    ],
  },
  {
    id: 'g3_math_review_word',
    name: '应用题综合复习',
    module: '综合复习',
    grade: '三年级下册',
    description: '综合运用所学知识解决两步或多步应用题。',
    practice: [
      {
        question: '商店有苹果240千克，是橘子的3倍，苹果和橘子一共有多少千克？',
        options: ['320', '80', '720'],
        answer: '320',
      },
      {
        question: '一辆汽车3小时行了180千米，照这样的速度，5小时能行多少千米？',
        options: ['300', '250', '360'],
        answer: '300',
      },
      {
        question: '学校买来960本图书，平均分给8个班，每班再平均分给4个组，每组分到多少本？',
        options: ['30', '120', '480'],
        answer: '30',
      },
    ],
  },
  {
    id: 'g3_math_review_fraction_decimal',
    name: '分数与小数综合复习',
    module: '综合复习',
    grade: '三年级下册',
    description: '综合复习分数和小数的认识、比较和简单运算。',
    practice: [
      {
        question: '⅗ + ⅕ = ?',
        options: ['⅘', '⅖', '1'],
        answer: '⅘',
      },
      {
        question: '0.6 和 0.58 比，哪个大？',
        options: ['0.6大', '0.58大', '一样大'],
        answer: '0.6大',
      },
      {
        question: '把1米平均分成10份，每份用小数表示是多少米？',
        options: ['0.1米', '1米', '0.01米'],
        answer: '0.1米',
      },
    ],
  },
]
