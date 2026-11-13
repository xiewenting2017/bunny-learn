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
]
