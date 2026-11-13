// 一年级科学知识点（扁平数组，与数学/语文/英语统一格式）
export const scienceData = [
  // ── 一年级上册 ──

  // 模块：植物与动物
  {
    id: 'know_leaf',
    name: '认识叶子',
    module: '植物与动物',
    grade: '一年级上册',
    description: '认识常见的叶子：形状、颜色、边缘。叶子是植物进行光合作用的主要器官。',
    practice: [
      { question: '大多数叶子是什么颜色？', options: ['红色', '绿色', '蓝色'], answer: '绿色' },
      { question: '叶子的主要作用是？', options: ['吸收阳光制造养分', '保护根部', '结果'], answer: '吸收阳光制造养分' },
      { question: '秋天很多树的叶子会变成什么颜色？', options: ['一直绿', '黄色或红色', '黑色'], answer: '黄色或红色' },
    ],
  },
  {
    id: 'know_snail',
    name: '认识蜗牛',
    module: '植物与动物',
    grade: '一年级上册',
    description: '蜗牛是软体动物，有一个螺旋形的壳，喜欢潮湿的地方。',
    practice: [
      { question: '蜗牛背上有什么？', options: ['壳', '毛', '翅膀'], answer: '壳' },
      { question: '蜗牛喜欢住在什么地方？', options: ['干燥的沙漠', '潮湿的草地', '寒冷的北极'], answer: '潮湿的草地' },
      { question: '蜗牛爬过的地方会留下什么？', options: ['脚印', '粘液痕迹', '小石子'], answer: '粘液痕迹' },
    ],
  },
  {
    id: 'plant_grow',
    name: '植物怎么长大',
    module: '植物与动物',
    grade: '一年级上册',
    description: '植物生长需要阳光、水、空气和合适的温度。',
    practice: [
      { question: '植物生长需要什么？', options: ['只需要水', '阳光、水、空气', '只需要土壤'], answer: '阳光、水、空气' },
      { question: '种子发芽最先长出的是？', options: ['叶子', '根', '花'], answer: '根' },
      { question: '植物没有阳光会怎么样？', options: ['长得更快', '变黄、枯萎', '变成别的植物'], answer: '变黄、枯萎' },
    ],
  },
  {
    id: 'ant_home',
    name: '蚂蚁的家',
    module: '植物与动物',
    grade: '一年级上册',
    description: '蚂蚁是群居动物，住在地下的蚁穴里，有蚁后、工蚁、兵蚁分工。',
    practice: [
      { question: '蚂蚁通常住在哪里？', options: ['树上的鸟巢', '地下的蚁穴', '水里'], answer: '地下的蚁穴' },
      { question: '蚂蚁最喜欢吃什么？', options: ['草', '甜食和小虫子', '树叶'], answer: '甜食和小虫子' },
      { question: '下雨前蚂蚁会怎么样？', options: ['躲在家里不出来', '往高处搬家', '在水里游泳'], answer: '往高处搬家' },
    ],
  },

  // 模块：我们的感官
  {
    id: 'five_senses',
    name: '五感观察',
    module: '我们的感官',
    grade: '一年级上册',
    description: '我们有五种感官：看（眼睛）、听（耳朵）、闻（鼻子）、尝（舌头）、摸（皮肤）。',
    practice: [
      { question: '用来看东西的感官是？', options: ['耳朵', '眼睛', '鼻子'], answer: '眼睛' },
      { question: '用手摸东西是用什么感官？', options: ['听觉', '触觉', '嗅觉'], answer: '触觉' },
      { question: '吃东西尝到味道是用什么？', options: ['眼睛', '舌头', '手指'], answer: '舌头' },
    ],
  },
  {
    id: 'use_eye',
    name: '保护眼睛',
    module: '我们的感官',
    grade: '一年级上册',
    description: '眼睛很宝贵，看书、看电视要注意距离和时间，让眼睛适当休息。',
    practice: [
      { question: '看书时眼睛离书太近会怎么样？', options: ['越看越好', '容易近视', '变成远视'], answer: '容易近视' },
      { question: '看电子产品多久要休息一次？', options: ['一直看不用休息', '20-30分钟休息一下', '看一天再休息'], answer: '20-30分钟休息一下' },
      { question: '保护眼睛应该多做什么？', options: ['一直玩平板', '多去户外远眺', '躺在床上看书'], answer: '多去户外远眺' },
    ],
  },

  // 模块：材料与物品
  {
    id: 'know_wood',
    name: '认识木头',
    module: '材料与物品',
    grade: '一年级上册',
    description: '木头来自树木，可以做桌子、椅子、铅笔等。木头坚硬，能浮在水面上。',
    practice: [
      { question: '木头是从哪里来的？', options: ['石头里', '树木', '动物身上'], answer: '树木' },
      { question: '木头能做什么？', options: ['桌子和椅子', '玻璃窗', '塑料袋'], answer: '桌子和椅子' },
      { question: '木头放进水里会怎么样？', options: ['沉下去', '浮在水面', '溶化'], answer: '浮在水面' },
    ],
  },
  {
    id: 'know_glass',
    name: '认识玻璃',
    module: '材料与物品',
    grade: '一年级上册',
    description: '玻璃是透明的，硬而脆，容易碎。可以做窗户、杯子、镜子。',
    practice: [
      { question: '玻璃的特点是？', options: ['柔软', '透明、硬、容易碎', '不透明'], answer: '透明、硬、容易碎' },
      { question: '玻璃可以做什么？', options: ['木头桌子', '窗户和杯子', '衣服'], answer: '窗户和杯子' },
      { question: '玻璃掉在地上会怎么样？', options: ['弹起来', '碎掉', '变弯'], answer: '碎掉' },
    ],
  },
  {
    id: 'plastic_vs_paper',
    name: '塑料和纸',
    module: '材料与物品',
    grade: '一年级上册',
    description: '塑料轻而结实，纸可以写字画画。塑料难降解，要注意回收保护环境。',
    practice: [
      { question: '塑料的特点是？', options: ['容易撕破', '轻、结实、防水', '能吃'], answer: '轻、结实、防水' },
      { question: '我们应该怎么处理用过的塑料瓶？', options: ['随便乱扔', '分类回收', '埋在土里'], answer: '分类回收' },
      { question: '纸是用什么做的？', options: ['石油', '树木', '泥土'], answer: '树木' },
    ],
  },

  // 模块：天气与自然
  {
    id: 'sunny_and_rainy',
    name: '晴和雨',
    module: '天气与自然',
    grade: '一年级上册',
    description: '晴天有太阳，阳光充足；下雨天有水从天上落下来，出门要带伞。',
    practice: [
      { question: '晴天天空里有什么？', options: ['太阳', '月亮', '星星'], answer: '太阳' },
      { question: '下雨天出门要带什么？', options: ['太阳镜', '雨伞', '游泳圈'], answer: '雨伞' },
      { question: '雨后可能会看到什么？', options: ['彩虹', '雪花', '闪电'], answer: '彩虹' },
    ],
  },
  {
    id: 'water_is_important',
    name: '水很重要',
    module: '天气与自然',
    grade: '一年级上册',
    description: '水是生命之源，我们喝的水、洗澡、洗衣都需要水。要节约用水。',
    practice: [
      { question: '人几天不喝水就不行了？', options: ['7天', '2-3天', '一个月'], answer: '2-3天' },
      { question: '下面哪种是节约用水的好习惯？', options: ['刷牙时一直开水龙头', '用洗菜水浇花', '漏水不管'], answer: '用洗菜水浇花' },
      { question: '地球上的淡水多不多？', options: ['很多很多', '很少，要珍惜', '用不完'], answer: '很少，要珍惜' },
    ],
  },

  // ── 一年级下册 ──

  // 模块：植物与动物
  {
    id: 'know_flower',
    name: '认识花',
    module: '植物与动物',
    grade: '一年级下册',
    description: '花有花瓣、花蕊。花谢了会结出果实。蝴蝶和蜜蜂喜欢采花蜜。',
    practice: [
      { question: '花中间细细的部分叫什么？', options: ['叶子', '花蕊', '根'], answer: '花蕊' },
      { question: '花谢了之后会怎么样？', options: ['重新开花', '结出果实', '消失不见'], answer: '结出果实' },
      { question: '什么昆虫喜欢在花上采蜜？', options: ['蚂蚁', '蜜蜂和蝴蝶', '蜘蛛'], answer: '蜜蜂和蝴蝶' },
    ],
  },
  {
    id: 'butterfly_life',
    name: '蝴蝶的一生',
    module: '植物与动物',
    grade: '一年级下册',
    description: '蝴蝶的一生要经历四个阶段：卵→毛毛虫→蛹→蝴蝶。这叫完全变态。',
    practice: [
      { question: '蝴蝶小时候是什么样？', options: ['小蝴蝶', '毛毛虫', '小虫子'], answer: '毛毛虫' },
      { question: '蝴蝶的一生经历几个阶段？', options: ['2个', '4个', '6个'], answer: '4个' },
      { question: '毛毛虫会变成什么？', options: ['蜘蛛', '蝴蝶', '蜜蜂'], answer: '蝴蝶' },
    ],
  },

  // 模块：我们的感官
  {
    id: 'hot_and_cold',
    name: '冷和热',
    module: '我们的感官',
    grade: '一年级下册',
    description: '我们的皮肤能感觉冷和热。太烫的东西不能碰，会烫伤。',
    practice: [
      { question: '刚烧开的水能直接喝吗？', options: ['能，直接喝', '不能，会烫伤舌头', '能，没关系'], answer: '不能，会烫伤舌头' },
      { question: '冬天手碰到冰会怎么样？', options: ['暖和', '感觉很冷', '没感觉'], answer: '感觉很冷' },
      { question: '皮肤能感觉到什么？', options: ['只看见颜色', '冷、热、软、硬、疼', '听见声音'], answer: '冷、热、软、硬、疼' },
    ],
  },
  {
    id: 'good_smell_bad_smell',
    name: '好气味和坏气味',
    module: '我们的感官',
    grade: '一年级下册',
    description: '鼻子能闻出好气味和坏气味。饭菜香是好气味，垃圾臭是坏气味。',
    practice: [
      { question: '鼻子的主要作用是？', options: ['看东西', '闻气味', '听声音'], answer: '闻气味' },
      { question: '下面哪种是好气味？', options: ['垃圾味', '花香味', '臭鸡蛋味'], answer: '花香味' },
      { question: '闻到煤气味应该怎么办？', options: ['不管，继续玩', '赶紧告诉大人并开窗通风', '闻一闻没关系'], answer: '赶紧告诉大人并开窗通风' },
    ],
  },
  {
    id: 'taste_four',
    name: '四种味道',
    module: '我们的感官',
    grade: '一年级下册',
    description: '舌头能尝出四种基本味道：酸、甜、苦、辣。不同部位敏感不同。',
    practice: [
      { question: '糖是什么味道？', options: ['酸', '甜', '苦'], answer: '甜' },
      { question: '柠檬是什么味道？', options: ['甜', '酸', '辣'], answer: '酸' },
      { question: '中药一般是什么味道？', options: ['甜', '苦', '咸'], answer: '苦' },
    ],
  },

  // 模块：材料与物品
  {
    id: 'iron_and_rust',
    name: '铁会生锈',
    module: '材料与物品',
    grade: '一年级下册',
    description: '铁在潮湿的环境中会生锈，变成红褐色。涂油漆可以防止生锈。',
    practice: [
      { question: '铁钉放在潮湿的地方会怎么样？', options: ['变干净', '生锈变红褐色', '消失'], answer: '生锈变红褐色' },
      { question: '铁生锈是什么颜色？', options: ['黑色', '银白色', '红褐色'], answer: '红褐色' },
      { question: '怎么防止铁生锈？', options: ['泡在水里', '涂油漆', '埋在土里'], answer: '涂油漆' },
    ],
  },
  {
    id: 'rubber_and_elastic',
    name: '橡胶和弹性',
    module: '材料与物品',
    grade: '一年级下册',
    description: '橡胶是一种有弹性的材料。篮球、橡皮筋、汽车轮胎都是用橡胶做的。',
    practice: [
      { question: '篮球为什么能弹起来？', options: ['因为里面有水', '因为橡胶有弹性', '因为硬'], answer: '因为橡胶有弹性' },
      { question: '下面哪种是橡胶做的？', options: ['铅笔', '汽车轮胎', '玻璃杯'], answer: '汽车轮胎' },
      { question: '橡皮筋拉长后松开能怎么样？', options: ['断掉', '弹回去', '变硬'], answer: '弹回去' },
    ],
  },

  // 模块：天气与自然
  {
    id: 'wind_power',
    name: '风的力量',
    module: '天气与自然',
    grade: '一年级下册',
    description: '风是空气的流动。风可以吹走落叶、推动风车，也能造成灾害。',
    practice: [
      { question: '风是什么？', options: ['水的流动', '空气的流动', '火的燃烧'], answer: '空气的流动' },
      { question: '大风天什么东西会被吹走？', options: ['石头', '轻的树叶、纸张', '汽车'], answer: '轻的树叶、纸张' },
      { question: '风可以帮我们做什么？', options: ['吹大风车发电', '煮饭', '洗脸'], answer: '吹大风车发电' },
    ],
  },
  {
    id: 'rainbow',
    name: '彩虹',
    module: '天气与自然',
    grade: '一年级下册',
    description: '彩虹是雨后阳光穿过小水滴折射形成的，有七种颜色：红橙黄绿蓝靛紫。',
    practice: [
      { question: '彩虹什么时候会出现？', options: ['下雪后', '雨后出太阳', '打雷时'], answer: '雨后出太阳' },
      { question: '彩虹有几种颜色？', options: ['3种', '5种', '7种'], answer: '7种' },
      { question: '彩虹是怎么形成的？', options: ['灯光照的', '阳光穿过小水滴折射', '画画画的'], answer: '阳光穿过小水滴折射' },
    ],
  },
  {
    id: 'day_and_night',
    name: '白天和黑夜',
    module: '天气与自然',
    grade: '一年级下册',
    description: '地球自转产生了白天和黑夜。面向太阳的一面是白天，背向的一面是黑夜。',
    practice: [
      { question: '白天和黑夜是怎么来的？', options: ['地球自转', '太阳绕着地球转', '月亮发光'], answer: '地球自转' },
      { question: '白天天空里最亮的是？', options: ['月亮', '太阳', '星星'], answer: '太阳' },
      { question: '夜晚能看到什么？', options: ['只有太阳', '月亮和星星', '只能看到云'], answer: '月亮和星星' },
    ],
  },
]
