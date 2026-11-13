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
]
