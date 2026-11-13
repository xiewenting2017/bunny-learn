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

  // ── 二年级上册 ──

  // 模块：植物与动物的生活
  {
    id: 'plant_seed',
    name: '植物的种子',
    module: '植物与动物的生活',
    grade: '二年级上册',
    description: '种子是植物繁衍后代的方式。种子有果皮包裹，里面有胚，在适合的条件下可以发芽成长。',
  },
  {
    id: 'seed_germinate',
    name: '种子发芽',
    module: '植物与动物的生活',
    grade: '二年级上册',
    description: '种子发芽需要水、空气和适宜的温度。最先长出根，然后长出茎和叶。',
  },
  {
    id: 'plant_grow_stage',
    name: '植物的生长',
    module: '植物与动物的生活',
    grade: '二年级上册',
    description: '植物生长需要阳光、水、空气和养分。根部吸收水分和矿物质，叶子利用阳光进行光合作用。',
  },
  {
    id: 'plant_flower_fruit',
    name: '开花结果',
    module: '植物与动物的生活',
    grade: '二年级上册',
    description: '植物长到一定阶段会开花，花经过传粉受精后结出果实，果实里含有种子。',
  },
  {
    id: 'animal_egg',
    name: '动物的卵',
    module: '植物与动物的生活',
    grade: '二年级上册',
    description: '许多动物靠卵繁殖后代，如鸟类、鱼类、爬行动物。卵里有胚胎和营养物质。',
  },
  {
    id: 'chick_hatch',
    name: '小鸡的孵化',
    module: '植物与动物的生活',
    grade: '二年级上册',
    description: '鸡蛋在母鸡的体温下经过21天左右可以孵化出小鸡。孵化过程需要适宜的温度和湿度。',
  },
  {
    id: 'silkworm_life',
    name: '蚕的一生',
    module: '植物与动物的生活',
    grade: '二年级上册',
    description: '蚕的一生经历四个阶段：卵→幼虫（蚕宝宝）→蛹→成虫（蚕蛾）。以桑叶为食，可以吐丝结茧。',
  },

  // 模块：水与空气
  {
    id: 'water_three_states',
    name: '水的三态',
    module: '水与空气',
    grade: '二年级上册',
    description: '水有三种状态：液态（水）、固态（冰）、气态（水蒸气）。温度变化可以使它们相互转化。',
  },
  {
    id: 'water_purify',
    name: '水的净化',
    module: '水与空气',
    grade: '二年级上册',
    description: '自然界中的水含有杂质，需要经过沉淀、过滤、消毒等步骤净化后才能饮用。',
  },
  {
    id: 'water_cycle',
    name: '水的循环',
    module: '水与空气',
    grade: '二年级上册',
    description: '水在自然界中循环：太阳照射使水蒸发变成水蒸气，水蒸气凝结成云，降水又回到地面。',
  },
  {
    id: 'air_exist',
    name: '空气的存在',
    module: '水与空气',
    grade: '二年级上册',
    description: '空气看不见摸不着，但确实存在。我们可以通过吹气球、扇扇子等方式感受到空气的存在。',
  },
  {
    id: 'air_weight',
    name: '空气有重量',
    module: '水与空气',
    grade: '二年级上册',
    description: '空气虽然轻，但确实有重量。实验中充气的气球比没充气的气球重可以证明这一点。',
  },
  {
    id: 'wind_form',
    name: '风的形成',
    module: '水与空气',
    grade: '二年级上册',
    description: '风是空气流动形成的。不同地方温度不同，冷热空气的对流产生了风。',
  },
  {
    id: 'wind_use',
    name: '风的利用',
    module: '水与空气',
    grade: '二年级上册',
    description: '风可以推动帆船、转动风车发电、帮助花粉传播。但大风也会造成灾害。',
  },

  // 模块：力与运动
  {
    id: 'push_pull',
    name: '推和拉',
    module: '力与运动',
    grade: '二年级上册',
    description: '推和拉是常见的两种力。推力使物体远离自己，拉力使物体靠近自己。',
  },
  {
    id: 'gravity',
    name: '重力',
    module: '力与运动',
    grade: '二年级上册',
    description: '地球对所有物体都有吸引的力，叫做重力。所以东西掉下来、水往低处流都是重力的作用。',
  },
  {
    id: 'buoyancy',
    name: '浮力',
    module: '力与运动',
    grade: '二年级上册',
    description: '物体放入水中会受到水向上的浮力。浮力大于物体重力时物体浮起来，小于时就沉下去。',
  },
  {
    id: 'friction',
    name: '摩擦力',
    module: '力与运动',
    grade: '二年级上册',
    description: '两个物体接触并有相对运动时会产生摩擦力。摩擦力有时有用（走路、刹车），有时是阻碍。',
  },
  {
    id: 'lever',
    name: '杠杆',
    module: '力与运动',
    grade: '二年级上册',
    description: '杠杆是一种简单机械，有支点、力点和重点。用小木棍撬石头就是利用杠杆原理省力。',
  },
  {
    id: 'pulley',
    name: '滑轮',
    module: '力与运动',
    grade: '二年级上册',
    description: '滑轮也是简单机械。定滑轮可以改变用力方向，动滑轮可以省力。',
  },
  {
    id: 'simple_machine',
    name: '简单机械',
    module: '力与运动',
    grade: '二年级上册',
    description: '杠杆、滑轮、斜面、轮轴都属于简单机械。它们能帮助我们省力或改变力的方向。',
  },

  // 模块：太阳与影子
  {
    id: 'sun_light_heat',
    name: '太阳的光和热',
    module: '太阳与影子',
    grade: '二年级上册',
    description: '太阳是地球能量的主要来源，它发出光和热，使地球上的生命得以生存。',
  },
  {
    id: 'shadow_form',
    name: '影子的形成',
    module: '太阳与影子',
    grade: '二年级上册',
    description: '不透明的物体挡住光就会形成影子。影子的方向和长度会随光源位置的变化而变化。',
  },
  {
    id: 'shadow_change',
    name: '影子的变化',
    module: '太阳与影子',
    grade: '二年级上册',
    description: '一天中，早上和傍晚影子最长，中午影子最短。影子的方向总是与太阳相反。',
  },
  {
    id: 'compass',
    name: '指南针',
    module: '太阳与影子',
    grade: '二年级上册',
    description: '指南针利用地球的磁场指示南北方向，是重要的导航工具。红色指针总是指向北方。',
  },
  {
    id: 'magnet_basic',
    name: '认识磁铁',
    module: '太阳与影子',
    grade: '二年级上册',
    description: '磁铁有磁性，能吸引铁制品。磁铁有南北两极，同极相斥，异极相吸。',
  },
  {
    id: 'magnet_property',
    name: '磁铁的性质',
    module: '太阳与影子',
    grade: '二年级上册',
    description: '磁铁两极磁性最强，中间最弱。磁铁可以隔着纸、水等薄物体吸引铁钉。',
  },

  // 模块：我们的身体
  {
    id: 'bones_know',
    name: '骨骼',
    module: '我们的身体',
    grade: '二年级上册',
    description: '骨骼构成了人体的支架，支撑身体、保护内脏器官。人体共有206块骨头。',
  },
  {
    id: 'joints',
    name: '关节',
    module: '我们的身体',
    grade: '二年级上册',
    description: '两块骨头连接的地方叫关节。关节让我们能灵活地转动手臂、腿等部位。',
  },
  {
    id: 'muscles',
    name: '肌肉',
    module: '我们的身体',
    grade: '二年级上册',
    description: '肌肉附着在骨骼上，通过收缩和舒张使身体运动。多锻炼能让肌肉更发达。',
  },
  {
    id: 'breath_organ',
    name: '呼吸器官',
    module: '我们的身体',
    grade: '二年级上册',
    description: '呼吸器官包括鼻腔、气管、肺。肺是主要的呼吸器官，吸进氧气，呼出二氧化碳。',
  },
  {
    id: 'blood_circuit',
    name: '血液循环',
    module: '我们的身体',
    grade: '二年级上册',
    description: '心脏像水泵一样推动血液在血管里流动，把氧气和营养送到全身各处。',
  },
  {
    id: 'heart_know',
    name: '认识心脏',
    module: '我们的身体',
    grade: '二年级上册',
    description: '心脏在胸腔内，大约拳头大小，有四个腔。它一生不停地跳动，推动血液循环。',
  },

  // ── 二年级下册 ──

  // 模块：物质的变化
  {
    id: 'dissolve_salt',
    name: '溶解与不溶解',
    module: '物质的变化',
    grade: '二年级下册',
    description: '有些物质能溶解在水里（如盐、糖），有些不能（如沙子、石头）。溶解后的物质看不见但还在水中。',
  },
  {
    id: 'dissolve_test',
    name: '溶解实验',
    module: '物质的变化',
    grade: '二年级下册',
    description: '可以通过过滤或蒸发的方法把溶解的物质从水中分离出来，说明溶解是可逆的。',
  },
  {
    id: 'evaporate_condense',
    name: '蒸发与凝结',
    module: '物质的变化',
    grade: '二年级下册',
    description: '水变成水蒸气叫蒸发，水蒸气变成水叫凝结。温度越高，蒸发越快。',
  },
  {
    id: 'state_change',
    name: '状态的变化',
    module: '物质的变化',
    grade: '二年级下册',
    description: '物质三态之间可以相互转化：冰融化成水，水变成水蒸气，这个过程是物理变化。',
  },
  {
    id: 'physical_change',
    name: '物理变化',
    module: '物质的变化',
    grade: '二年级下册',
    description: '物理变化只是物质的形态或状态改变，没有产生新物质。如冰融化、纸撕碎、木头被锯。',
  },
  {
    id: 'chemical_change',
    name: '化学变化',
    module: '物质的变化',
    grade: '二年级下册',
    description: '化学变化产生了新的物质，通常伴随发光、发热、变色、产生气体或沉淀等现象。如铁生锈、燃烧。',
  },

  // 模块：电路与简单电器
  {
    id: 'simple_circuit',
    name: '简单电路',
    module: '电路与简单电器',
    grade: '二年级下册',
    description: '一个完整的电路需要电源（电池）、导线、用电器（灯泡）。电流从正极流出，经过用电器回到负极。',
  },
  {
    id: 'series_circuit',
    name: '串联电路',
    module: '电路与简单电器',
    grade: '二年级下册',
    description: '把电池和灯泡依次连接在同一条电路上叫串联。串联电路中一个灯泡坏了，所有灯泡都不亮。',
  },
  {
    id: 'parallel_circuit',
    name: '并联电路',
    module: '电路与简单电器',
    grade: '二年级下册',
    description: '把用电器并排连接在电源两端叫并联。每个用电器互不影响，一个坏了另一个还能工作。',
  },
  {
    id: 'conductor_insulator',
    name: '导体与绝缘体',
    module: '电路与简单电器',
    grade: '二年级下册',
    description: '容易导电的物体叫导体（金属、人体、大地），不容易导电的叫绝缘体（塑料、橡胶、玻璃）。',
  },
  {
    id: 'switch',
    name: '开关的作用',
    module: '电路与简单电器',
    grade: '二年级下册',
    description: '开关可以控制电路的通断。打开开关电路接通，用电器工作；关闭开关电路断开。',
  },
  {
    id: 'electric_safety',
    name: '用电安全',
    module: '电路与简单电器',
    grade: '二年级下册',
    description: '不能用湿手摸电器，不要靠近高压线，触电时要先切断电源或用绝缘体推开电源。',
  },

  // 模块：光与颜色
  {
    id: 'light_source',
    name: '光源',
    module: '光与颜色',
    grade: '二年级下册',
    description: '能自己发光的物体叫光源。太阳、蜡烛、灯泡都是光源；月亮不是光源，它反射太阳光。',
  },
  {
    id: 'light_travel',
    name: '光的传播',
    module: '光与颜色',
    grade: '二年级下册',
    description: '光在同种均匀物质中沿直线传播。这就是为什么会有影子，以及小孔成像的原因。',
  },
  {
    id: 'light_reflect',
    name: '光的反射',
    module: '光与颜色',
    grade: '二年级下册',
    description: '光碰到物体会被反射回来。镜子是最好的反射面，我们照镜子就是利用了光的反射。',
  },
  {
    id: 'rainbow_dispersion',
    name: '彩虹与色散',
    module: '光与颜色',
    grade: '二年级下册',
    description: '白光通过棱镜或水滴会被分解成七种颜色的光，这叫光的色散。彩虹就是色散的结果。',
  },
  {
    id: 'prism_exp',
    name: '棱镜实验',
    module: '光与颜色',
    grade: '二年级下册',
    description: '用三棱镜可以把太阳光分解成红橙黄绿蓝靛紫七种颜色的光带，证明白光是由多种色光组成的。',
  },
  {
    id: 'color_mix',
    name: '颜色的混合',
    module: '光与颜色',
    grade: '二年级下册',
    description: '红、绿、蓝是光的三原色，按不同比例混合可以得到各种颜色的光。颜料的三原色是红黄蓝。',
  },

  // 模块：地球与宇宙
  {
    id: 'earth_shape',
    name: '地球的形状',
    module: '地球与宇宙',
    grade: '二年级下册',
    description: '地球是一个两极稍扁、赤道略鼓的球体。从太空看，地球是一颗蓝色的星球。',
  },
  {
    id: 'earth_size',
    name: '地球的大小',
    module: '地球与宇宙',
    grade: '二年级下册',
    description: '地球的赤道周长约4万千米，平均半径约6371千米。地球表面大部分是海洋。',
  },
  {
    id: 'day_night_cycle',
    name: '昼夜交替',
    module: '地球与宇宙',
    grade: '二年级下册',
    description: '地球每24小时自转一周，产生了昼夜交替。面向太阳的一面是白天，背向的一面是黑夜。',
  },
  {
    id: 'seasons_change',
    name: '四季的变化',
    module: '地球与宇宙',
    grade: '二年级下册',
    description: '地球绕太阳公转，由于地轴倾斜，太阳直射点在南北回归线之间移动，产生了春夏秋冬四季。',
  },
  {
    id: 'moon_change',
    name: '月亮的变化',
    module: '地球与宇宙',
    grade: '二年级下册',
    description: '月亮本身不发光，它反射太阳光。由于日地月位置的变化，我们看到月相从新月到满月再到新月循环变化。',
  },
  {
    id: 'solar_system',
    name: '太阳系',
    module: '地球与宇宙',
    grade: '二年级下册',
    description: '太阳是太阳系的中心，八大行星绕着太阳转：水星、金星、地球、火星、木星、土星、天王星、海王星。',
  },

  // 模块：环保与资源
  {
    id: 'save_water',
    name: '节约用水',
    module: '环保与资源',
    grade: '二年级下册',
    description: '地球上的淡水资源有限。随手关水龙头、用洗菜水浇花、修漏水都是节约用水的好方法。',
  },
  {
    id: 'garbage_classify',
    name: '垃圾分类',
    module: '环保与资源',
    grade: '二年级下册',
    description: '垃圾分为可回收物、有害垃圾、厨余垃圾、其他垃圾。垃圾分类便于资源回收利用和环境保护。',
  },
  {
    id: 'save_energy',
    name: '节约能源',
    module: '环保与资源',
    grade: '二年级下册',
    description: '随手关灯、空调温度不要太低、多坐公交少开车都是节约能源、减少碳排放的好做法。',
  },
  {
    id: 'love_animal',
    name: '爱护小动物',
    module: '环保与资源',
    grade: '二年级下册',
    description: '动物是人类的朋友，我们要保护野生动物，不随意伤害、不买卖野生动物及其制品。',
  },
  {
    id: 'protect_earth',
    name: '保护地球',
    module: '环保与资源',
    grade: '二年级下册',
    description: '地球是我们唯一的家园。保护环境、节约资源、减少污染是每个人的责任。',
  },
  {
    id: 'green_life',
    name: '绿色生活',
    module: '环保与资源',
    grade: '二年级下册',
    description: '绿色生活就是环保的生活方式：自带水杯不用一次性用品、多种树、垃圾分类、绿色出行。',
  },
]
