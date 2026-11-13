// 一年级语文知识点（扁平数组，与数学 knowledgeData 统一格式）
export const chineseData = [
  // ── 一年级上册 ──

  // 模块：幼小衔接与习惯
  {
    id: 'i_am_chinese',
    name: '我是中国人',
    module: '幼小衔接与习惯',
    grade: '一年级上册',
    description: '认识自己是中国人，了解祖国的名称和国旗。',
    practice: [
      { question: '我们是哪个国家的小朋友？', options: ['美国', '中国', '日本'], answer: '中国' },
      { question: '中国的国旗是什么颜色的？', options: ['红色', '蓝色', '绿色'], answer: '红色' },
      { question: '我们的祖国叫什么名字？', options: ['中华人民共和国', '英格兰', '澳大利亚'], answer: '中华人民共和国' },
    ],
  },
  {
    id: 'i_am_pupil',
    name: '我是小学生',
    module: '幼小衔接与习惯',
    grade: '一年级上册',
    description: '认识"小学生"的身份，了解学校里一天的安排。',
    practice: [
      { question: '你现在是什么身份？', options: ['幼儿园小朋友', '小学生', '老师'], answer: '小学生' },
      { question: '上学路上见到老师应该怎么做？', options: ['低头跑过去', '主动问好', '装没看见'], answer: '主动问好' },
      { question: '上课铃响了应该做什么？', options: ['出去玩', '安静坐好等老师', '继续说话'], answer: '安静坐好等老师' },
    ],
  },
  {
    id: 'love_chinese',
    name: '我爱学语文',
    module: '幼小衔接与习惯',
    grade: '一年级上册',
    description: '感受语文的有趣，认识书本、铅笔、课桌这些学习用品。',
    practice: [
      { question: '看书时应该怎么拿书？', options: ['倒着拿', '正拿着读', '随便拿'], answer: '正拿着读' },
      { question: '写字要用什么？', options: ['橡皮', '铅笔', '尺子'], answer: '铅笔' },
      { question: '语文书里主要有什么？', options: ['数学题', '汉字和故事', '英语单词'], answer: '汉字和故事' },
    ],
  },

  // 模块：识字启蒙
  {
    id: 'sky_earth_human',
    name: '天地人',
    module: '识字启蒙',
    grade: '一年级上册',
    description: '认识"天、地、人"三个最基本的象形字，了解它们的意思。',
    practice: [
      { question: '抬头看到的是什么？', options: ['地', '天', '水'], answer: '天' },
      { question: '脚踩在什么上面？', options: ['天', '人', '地'], answer: '地' },
      { question: '"人"这个字像什么？', options: ['一个人站着', '一棵树', '一只鸟'], answer: '一个人站着' },
    ],
  },
  {
    id: 'gold_wood_water',
    name: '金木水火土',
    module: '识字启蒙',
    grade: '一年级上册',
    description: '认识五个基础五行字：金、木、水、火、土。',
    practice: [
      { question: '木头属于哪一行？', options: ['金', '木', '水'], answer: '木' },
      { question: '用来灭火的是什么？', options: ['水', '火', '土'], answer: '水' },
      { question: '"土"字加一横变成什么？', options: ['王', '金', '地'], answer: '王' },
    ],
  },
  {
    id: 'eye_ear_hand',
    name: '口耳目手足',
    module: '识字启蒙',
    grade: '一年级上册',
    description: '认识身体部位的汉字：口、耳、目、手、足。',
    practice: [
      { question: '用来吃饭的是哪个部位？', options: ['耳', '口', '目'], answer: '口' },
      { question: '听到声音用什么？', options: ['手', '耳', '足'], answer: '耳' },
      { question: '"目"在古代就是今天的哪个字？', options: ['耳朵', '眼睛', '嘴巴'], answer: '眼睛' },
    ],
  },
  {
    id: 'dui_yun_ge',
    name: '对韵歌',
    module: '识字启蒙',
    grade: '一年级上册',
    description: '学习对韵：云对雨，雪对风，晚照对晴空。',
    practice: [
      { question: '"云"对什么？', options: ['风', '雨', '雪'], answer: '雨' },
      { question: '"雪"对什么？', options: ['风', '雨', '花'], answer: '风' },
      { question: '对韵讲究的是词语怎么样？', options: ['随便对', '意思差不多、字数一样', '意思相反就行'], answer: '意思差不多、字数一样' },
    ],
  },
  {
    id: 'sun_moon_bright',
    name: '日月明',
    module: '识字启蒙',
    grade: '一年级上册',
    description: '学习会意字：日+月=明，木+木=林，木+木+木=森。',
    practice: [
      { question: '日加月变成什么字？', options: ['星', '明', '光'], answer: '明' },
      { question: '两个木并排是什么字？', options: ['森', '林', '树'], answer: '林' },
      { question: '三个木叠在一起是什么？', options: ['树林', '森林', '树木'], answer: '森林' },
    ],
  },
  {
    id: 'small_schoolbag',
    name: '小书包',
    module: '识字启蒙',
    grade: '一年级上册',
    description: '认识文具：橡皮、尺子、作业本、笔袋、铅笔、转笔刀。',
    practice: [
      { question: '写错字了用什么擦掉？', options: ['尺子', '橡皮', '铅笔'], answer: '橡皮' },
      { question: '画直线用什么工具？', options: ['橡皮', '转笔刀', '尺子'], answer: '尺子' },
      { question: '小书包里主要装什么？', options: ['玩具', '书本和文具', '零食'], answer: '书本和文具' },
    ],
  },

  // 模块：汉语拼音
  {
    id: 'pinyin_a_o_e',
    name: 'a o e',
    module: '汉语拼音',
    grade: '一年级上册',
    description: '学习汉语拼音最基础的三个单韵母 a、o、e 的发音和书写。',
    practice: [
      { question: '张大嘴巴发出的第一个音是？', options: ['o', 'a', 'e'], answer: 'a' },
      { question: '"o" 的口型像什么？', options: ['扁扁的', '圆圆的', '长长的'], answer: '圆圆的' },
      { question: '这三个字母是什么？', options: ['声母', '单韵母', '复韵母'], answer: '单韵母' },
    ],
  },
  {
    id: 'pinyin_i_u_v',
    name: 'i u ü',
    module: '汉语拼音',
    grade: '一年级上册',
    description: '学习另外三个单韵母 i、u、ü，注意 ü 上两点在 j/q/x 后要去掉。',
    practice: [
      { question: '吹口哨的口型发什么音？', options: ['i', 'u', 'ü'], answer: 'u' },
      { question: 'j 和 ü 拼在一起时，ü 上的两点要怎么样？', options: ['保留', '去掉', '变成一点'], answer: '去掉' },
      { question: '穿衣的"衣"读音接近哪个字母？', options: ['i', 'u', 'ü'], answer: 'i' },
    ],
  },
  {
    id: 'pinyin_b_p_m_f',
    name: 'b p m f',
    module: '汉语拼音',
    grade: '一年级上册',
    description: '学习四个声母 b、p、m、f，都是双唇音。',
    practice: [
      { question: '你名字第一个字如果是"爸"，声母是哪个？', options: ['p', 'b', 'm'], answer: 'b' },
      { question: '摸鼻子发音的声母是？', options: ['b', 'p', 'm'], answer: 'm' },
      { question: '"飞"的声母是？', options: ['f', 'p', 'b'], answer: 'f' },
    ],
  },
  {
    id: 'pinyin_d_t_n_l',
    name: 'd t n l',
    module: '汉语拼音',
    grade: '一年级上册',
    description: '学习 d、t、n、l 四个舌尖音，注意 n 和 l 的区别。',
    practice: [
      { question: '舌尖顶住上颚发的音是？', options: ['d', 'b', 'g'], answer: 'd' },
      { question: '"牛奶"的"奶"声母是？', options: ['l', 'n', 't'], answer: 'n' },
      { question: '"拉"的声母是？', options: ['n', 'l', 'd'], answer: 'l' },
    ],
  },
  {
    id: 'pinyin_zh_ch_sh_r',
    name: 'zh ch sh r',
    module: '汉语拼音',
    grade: '一年级上册',
    description: '学习翘舌音 zh、ch、sh、r，舌头要翘起来碰到硬腭。',
    practice: [
      { question: '"吃"的声母是？', options: ['zh', 'ch', 'sh'], answer: 'ch' },
      { question: '"日"的声母是？', options: ['sh', 's', 'r'], answer: 'r' },
      { question: '翘舌音和舌面音的区别在于什么？', options: ['响度不同', '舌头翘不翘', '嘴型不同'], answer: '舌头翘不翘' },
    ],
  },

  // 模块：课文阅读（一）
  {
    id: 'autumn',
    name: '秋天',
    module: '课文阅读',
    grade: '一年级上册',
    description: '课文《秋天》：天气凉了，树叶黄了，一片片叶子从树上落下来。',
    practice: [
      { question: '秋天的天气怎么样？', options: ['很热', '很凉', '很冷'], answer: '很凉' },
      { question: '秋天树叶是什么颜色的？', options: ['绿色', '黄了', '蓝色'], answer: '黄了' },
      { question: '秋天会看到什么往南飞？', options: ['蝴蝶', '大雁', '蚂蚁'], answer: '大雁' },
    ],
  },
  {
    id: 'jiangnan',
    name: '江南',
    module: '课文阅读',
    grade: '一年级上册',
    description: '古诗《江南》：江南可采莲，莲叶何田田。鱼戏莲叶间。',
    practice: [
      { question: '江南可以采什么？', options: ['花', '莲', '草'], answer: '莲' },
      { question: '鱼戏莲叶间，鱼在哪里？', options: ['池塘里', '树上', '山上'], answer: '池塘里' },
      { question: '"莲叶何田田"里"田田"是说莲叶怎么样？', options: ['又大又圆', '又小又碎', '又高又直'], answer: '又大又圆' },
    ],
  },
  {
    id: 'shadow',
    name: '影子',
    module: '课文阅读',
    grade: '一年级上册',
    description: '课文《影子》：影子在前，影子在后，影子常常跟着我。',
    practice: [
      { question: '影子什么时候出现？', options: ['有光的时候', '天黑的时候', '下雨的时候'], answer: '有光的时候' },
      { question: '太阳在你的左边，影子就在你的？', options: ['左边', '右边', '前面'], answer: '右边' },
      { question: '影子像什么一样跟着你？', options: ['朋友', '敌人', '陌生人'], answer: '朋友' },
    ],
  },
  {
    id: 'crow_drinks_water',
    name: '乌鸦喝水',
    module: '课文阅读',
    grade: '一年级上册',
    description: '寓言故事：乌鸦想喝瓶子里的水，想了什么办法？',
    practice: [
      { question: '乌鸦遇到了什么困难？', options: ['水太深喝不到', '瓶里水少喝不到', '瓶子打不开'], answer: '瓶里水少喝不到' },
      { question: '乌鸦最后用什么方法喝到水？', options: ['打破瓶子', '往瓶里丢小石子', '推倒瓶子'], answer: '往瓶里丢小石子' },
      { question: '这个故事告诉我们遇到事情要？', options: ['放弃', '多动脑筋想办法', '发脾气'], answer: '多动脑筋想办法' },
    ],
  },

  // ── 一年级下册 ──

  {
    id: 'spring_summer_autumn_winter',
    name: '春夏秋冬',
    module: '识字',
    grade: '一年级下册',
    description: '认识四季的名称和每个季节的特点。',
    practice: [
      { question: '哪个季节会下雪？', options: ['春天', '秋天', '冬天'], answer: '冬天' },
      { question: '哪个季节小草发芽？', options: ['夏天', '春天', '秋天'], answer: '春天' },
      { question: '一年有几个季节？', options: ['两个', '三个', '四个'], answer: '四个' },
    ],
  },
  {
    id: 'surname_song',
    name: '姓氏歌',
    module: '识字',
    grade: '一年级下册',
    description: '百家姓：赵钱孙李，周吴郑王。认识常见姓氏。',
    practice: [
      { question: '"李"是什么？', options: ['水果', '姓氏', '数字'], answer: '姓氏' },
      { question: '"木子"合起来是什么姓？', options: ['张', '李', '王'], answer: '李' },
      { question: '"双人徐"的徐怎么写？', options: ['左边一个人', '右边一个人', '两个人都在左边'], answer: '左边一个人' },
    ],
  },
  {
    id: 'frog',
    name: '小青蛙',
    module: '识字',
    grade: '一年级下册',
    description: '小青蛙，大眼睛，保护庄稼的益虫。',
    practice: [
      { question: '小青蛙有什么特点？', options: ['大眼睛', '长尾巴', '会飞'], answer: '大眼睛' },
      { question: '青蛙会吃什么？', options: ['粮食', '害虫', '青草'], answer: '害虫' },
      { question: '青蛙对庄稼来说是益虫还是害虫？', options: ['害虫', '益虫', '没用'], answer: '益虫' },
    ],
  },

  {
    id: 'dinner_no_forget_digger',
    name: '吃水不忘挖井人',
    module: '阅读与家国',
    grade: '一年级下册',
    description: '瑞金城外沙洲坝，毛主席带领战士们挖井的故事。',
    practice: [
      { question: '沙洲坝的乡亲们原来喝水方便吗？', options: ['方便', '不方便', '还行'], answer: '不方便' },
      { question: '是谁带领战士挖的井？', options: ['周总理', '毛主席', '朱总司令'], answer: '毛主席' },
      { question: '"吃水不忘挖井人"告诉我们要？', options: ['忘记别人', '感恩帮助过自己的人', '自己挖井'], answer: '感恩帮助过自己的人' },
    ],
  },
  {
    id: 'missing_the_hometown',
    name: '静夜思',
    module: '古诗',
    grade: '一年级下册',
    description: '李白的《静夜思》：床前明月光，疑是地上霜。举头望明月，低头思故乡。',
    practice: [
      { question: '床前看到的像什么？', options: ['雪', '霜', '星星'], answer: '霜' },
      { question: '举头望什么？', options: ['太阳', '明月', '云'], answer: '明月' },
      { question: '这首诗是谁写的？', options: ['杜甫', '李白', '白居易'], answer: '李白' },
    ],
  },
  {
    id: 'pond',
    name: '小池',
    module: '古诗',
    grade: '一年级下册',
    description: '杨万里的《小池》：泉眼无声惜细流，树阴照水爱晴柔。小荷才露尖尖角，早有蜻蜓立上头。',
    practice: [
      { question: '小荷指的是什么？', options: ['小荷花', '小荷叶', '小鱼'], answer: '小荷叶' },
      { question: '站在小荷尖上的是什么？', options: ['蝴蝶', '蜻蜓', '蜜蜂'], answer: '蜻蜓' },
      { question: '诗的作者是谁？', options: ['杨万里', '李白', '孟浩然'], answer: '杨万里' },
    ],
  },

  // ── 一年级下册 · 补全 ──

  // 识字（补：猜字谜、动物儿歌、古对今、操场上、人之初）
  {
    id: 'guess_riddle',
    name: '猜字谜',
    module: '识字',
    grade: '一年级下册',
    description: '学习猜字谜："绿的喜欢及时雨，红的最怕水来攻"——谜底是"秋"字。',
    practice: [
      { question: '"绿的喜欢及时雨，红的最怕水来攻"打一字？', options: ['春', '秋', '夏'], answer: '秋' },
      { question: '"言"来互相尊重，"心"至令人感动——这是猜什么？', options: ['水果', '汉字', '动物'], answer: '汉字' },
      { question: '猜字谜是一种什么游戏？', options: ['数学游戏', '文字游戏', '体育游戏'], answer: '文字游戏' },
    ],
  },
  {
    id: 'animal_song',
    name: '动物儿歌',
    module: '识字',
    grade: '一年级下册',
    description: '蜻蜓半空展翅飞，蝴蝶花间捉迷藏。蚯蚓土里造宫殿，蚂蚁地上运食粮。',
    practice: [
      { question: '蜻蜓在哪里飞？', options: ['水里', '半空', '地上'], answer: '半空' },
      { question: '谁在土里造宫殿？', options: ['蚂蚁', '蚯蚓', '蝴蝶'], answer: '蚯蚓' },
      { question: '蚂蚁在做什么？', options: ['捉迷藏', '运食粮', '造宫殿'], answer: '运食粮' },
    ],
  },
  {
    id: 'gu_dui_jin',
    name: '古对今',
    module: '识字',
    grade: '一年级下册',
    description: '古对今，圆对方。严寒对酷暑，春暖对秋凉。学习对仗。',
    practice: [
      { question: '"古"对什么？', options: ['圆', '今', '方'], answer: '今' },
      { question: '"严寒"对什么？', options: ['春暖', '酷暑', '秋凉'], answer: '酷暑' },
      { question: '"圆"对什么？', options: ['方', '今', '古'], answer: '方' },
    ],
  },
  {
    id: 'playground',
    name: '操场上',
    module: '识字',
    grade: '一年级下册',
    description: '操场上真热闹：打球、拔河、拍皮球、跳高、跑步、踢足球。',
    practice: [
      { question: '操场上真怎么？', options: ['安静', '热闹', '冷清'], answer: '热闹' },
      { question: '课文里提到的运动不包括？', options: ['打篮球', '踢足球', '游泳'], answer: '游泳' },
      { question: '"踢"足球，"打"篮球——动词和什么搭配？', options: ['随便搭', '不同的运动', '都一样'], answer: '不同的运动' },
    ],
  },
  {
    id: 'ren_zhi_chu',
    name: '人之初',
    module: '识字',
    grade: '一年级下册',
    description: '《三字经》：人之初，性本善。性相近，习相远。',
    practice: [
      { question: '"人之初"的下一句是？', options: ['性相近', '性本善', '习相远'], answer: '性本善' },
      { question: '"性相近，习相远"是什么意思？', options: ['性格天生不一样', '天生差不多，后天学习差别大', '都一样'], answer: '天生差不多，后天学习差别大' },
      { question: '《三字经》是什么类型的书？', options: ['数学书', '国学启蒙', '故事书'], answer: '国学启蒙' },
    ],
  },

  // 课文阅读（补：我多想去看看、一个接一个、四个太阳、小公鸡和小鸭子、树和喜鹊、怎么都快乐）
  {
    id: 'i_want_to_see',
    name: '我多想去看看',
    module: '课文阅读',
    grade: '一年级下册',
    description: '一个住在天山的孩子想去北京看天安门，一个住在北京的孩子想去天山看雪莲。',
    practice: [
      { question: '住在天山的孩子想去哪里？', options: ['上海', '北京', '广州'], answer: '北京' },
      { question: '北京的孩子想去天山看什么？', options: ['天安门', '雪莲', '长城'], answer: '雪莲' },
      { question: '天安门在哪里？', options: ['上海', '北京', '西安'], answer: '北京' },
    ],
  },
  {
    id: 'one_by_one',
    name: '一个接一个',
    module: '课文阅读',
    grade: '一年级下册',
    description: '踩影子游戏被叫回家睡觉——唉，要是没有放学就好了。转念一想，睡觉也不错，可以做美梦。',
    practice: [
      { question: '课文里的小朋友在玩什么？', options: ['跳绳', '踩影子', '捉迷藏'], answer: '踩影子' },
      { question: '被叫回家时心情是？', options: ['开心', '难过，但转念一想也不错', '生气'], answer: '难过，但转念一想也不错' },
      { question: '这个故事告诉我们什么？', options: ['要永远玩', '换个角度想事情', '不能睡觉'], answer: '换个角度想事情' },
    ],
  },
  {
    id: 'four_suns',
    name: '四个太阳',
    module: '课文阅读',
    grade: '一年级下册',
    description: '春天画彩色的太阳，夏天画绿绿的，秋天画金黄的，冬天画红红的。',
    practice: [
      { question: '春天画了一个什么颜色的太阳？', options: ['绿绿的', '彩色的', '红红的'], answer: '彩色的' },
      { question: '为什么夏天画绿色的太阳？', options: ['好看', '让夏天更凉快', '让草更绿'], answer: '让夏天更凉快' },
      { question: '冬天画红红的太阳是因为？', options: ['红色好看', '想让冬天暖和', '太阳本来就是红的'], answer: '想让冬天暖和' },
    ],
  },
  {
    id: 'little_rooster_duck',
    name: '小公鸡和小鸭子',
    module: '课文阅读',
    grade: '一年级下册',
    description: '小公鸡和小鸭子出去玩，小公鸡不听劝想下水，小鸭子救了它。',
    practice: [
      { question: '谁想下水游泳？', options: ['小鸭子', '小公鸡', '都想'], answer: '小公鸡' },
      { question: '最后是谁救了小公鸡？', options: ['妈妈', '小鸭子', '老师'], answer: '小鸭子' },
      { question: '这个故事告诉我们什么？', options: ['要勇敢', '要听朋友的劝告', '不要喝水'], answer: '要听朋友的劝告' },
    ],
  },
  {
    id: 'tree_and_magpie',
    name: '树和喜鹊',
    module: '课文阅读',
    grade: '一年级下册',
    description: '从前这里只有一棵树，树上只有一个鸟窝，鸟窝里只有一只喜鹊。后来种了很多树，来了很多喜鹊。',
    practice: [
      { question: '从前这里有几棵树？', options: ['很多棵', '只有一棵', '没有'], answer: '只有一棵' },
      { question: '后来为什么热闹起来了？', options: ['树多了，喜鹊也多了', '开了商店', '来了小朋友'], answer: '树多了，喜鹊也多了' },
      { question: '"树很孤单，喜鹊也很孤单"——孤单的意思是？', options: ['高兴', '只有自己一个，没有伙伴', '害怕'], answer: '只有自己一个，没有伙伴' },
    ],
  },

  // 习惯养成与科学（补：文具的家、一分钟、动物王国开大会、小猴子下山、要下雨了、棉花姑娘、小壁虎借尾巴）
  {
    id: 'stationery_home',
    name: '文具的家',
    module: '习惯养成与科学',
    grade: '一年级下册',
    description: '铅笔只愿意住在文具盒里。养成好习惯：用完文具要放回原处。',
    practice: [
      { question: '铅笔的家在哪里？', options: ['书包里随便放', '文具盒里', '课桌抽屉'], answer: '文具盒里' },
      { question: '用完文具应该怎么做？', options: ['随便一丢', '放回原处', '送给同学'], answer: '放回原处' },
      { question: '丢文具是不是好习惯？', options: ['是', '不是', '无所谓'], answer: '不是' },
    ],
  },
  {
    id: 'one_minute',
    name: '一分钟',
    module: '习惯养成与科学',
    grade: '一年级下册',
    description: '多睡一分钟迟到了，要等别人；珍惜时间，早睡早起。',
    practice: [
      { question: '多睡一分钟的结果是？', options: ['刚刚好', '迟到了', '早退了'], answer: '迟到了' },
      { question: '元元到学校时已经上课了，他坐在那里怎么样？', options: ['很开心', '红着脸，低着头', '认真听讲'], answer: '红着脸，低着头' },
      { question: '这个故事告诉我们要？', options: ['多睡觉', '珍惜时间', '少上课'], answer: '珍惜时间' },
    ],
  },
  {
    id: 'animal_kingdom_meeting',
    name: '动物王国开大会',
    module: '习惯养成与科学',
    grade: '一年级下册',
    description: '狗熊发通知说"明天开大会"——没有时间地点，大家不知道怎么去。通知要说清楚。',
    practice: [
      { question: '狗熊第一次发通知大家为什么不知道怎么做？', options: ['大家不想去', '没说清楚时间地点', '通知没收到'], answer: '没说清楚时间地点' },
      { question: '一个好通知应该包含什么？', options: ['只有时间', '时间、地点、人物、事情', '只有地点'], answer: '时间、地点、人物、事情' },
      { question: '这个故事的作者是？', options: ['李白', '佚名（大家传的故事）', '安徒生'], answer: '佚名（大家传的故事）' },
    ],
  },
  {
    id: 'little_monkey_down',
    name: '小猴子下山',
    module: '习惯养成与科学',
    grade: '一年级下册',
    description: '小猴子下山扔了玉米捡桃子，扔了桃子摘西瓜，扔了西瓜追兔子——最后什么也没拿到。',
    practice: [
      { question: '小猴子最后拿到了什么？', options: ['玉米和桃子', '西瓜', '什么都没拿到'], answer: '什么都没拿到' },
      { question: '小猴子为什么什么都没拿到？', options: ['东西太少', '见一个爱一个，半途而废', '兔子跑了'], answer: '见一个爱一个，半途而废' },
      { question: '这个故事告诉我们做事要？', options: ['三心二意', '坚持到底', '先玩再说'], answer: '坚持到底' },
    ],
  },
  {
    id: 'going_to_rain',
    name: '要下雨了',
    module: '习惯养成与科学',
    grade: '一年级下册',
    description: '下雨前的自然现象：小燕子低飞捉虫，小鱼跳出水面透气，蚂蚁搬家。',
    practice: [
      { question: '要下雨了，小燕子会怎么样？', options: ['飞得更高', '低飞捉虫子', '躲进窝里'], answer: '低飞捉虫子' },
      { question: '小鱼为什么跳出水面？', options: ['想跳跳舞', '水里闷，出来透气', '吃东西'], answer: '水里闷，出来透气' },
      { question: '蚂蚁下雨前会做什么？', options: ['睡觉', '往高处搬家', '到处乱跑'], answer: '往高处搬家' },
    ],
  },
  {
    id: 'cotton_girl',
    name: '棉花姑娘',
    module: '习惯养成与科学',
    grade: '一年级下册',
    description: '棉花姑娘生病了长了蚜虫，燕子、啄木鸟、青蛙都不会治，最后七星瓢虫治好了。',
    practice: [
      { question: '棉花姑娘得了什么病？', options: ['感冒', '叶子上长了蚜虫', '根烂了'], answer: '叶子上长了蚜虫' },
      { question: '谁治好了棉花姑娘的病？', options: ['燕子', '青蛙', '七星瓢虫'], answer: '七星瓢虫' },
      { question: '燕子只会捉哪里的害虫？', options: ['树里的', '空中飞的', '水里的'], answer: '空中飞的' },
    ],
  },
  {
    id: 'little_gecko_tail',
    name: '小壁虎借尾巴',
    module: '习惯养成与科学',
    grade: '一年级下册',
    description: '小壁虎尾巴断了，向小鱼、老牛、燕子借——大家的尾巴都有用。后来自己长出了新尾巴。',
    practice: [
      { question: '小壁虎为什么要借尾巴？', options: ['想更漂亮', '尾巴被蛇咬断了', '想当扫帚'], answer: '尾巴被蛇咬断了' },
      { question: '小鱼的尾巴用来做什么？', options: ['赶蝇子', '拨水游泳', '当伞'], answer: '拨水游泳' },
      { question: '小壁虎最后借到尾巴了吗？', options: ['借到了', '没有，自己长出了新尾巴', '不要了'], answer: '没有，自己长出了新尾巴' },
    ],
  },

  // 古诗（补：寻隐者不遇、池上）
  {
    id: 'hermit_not_found',
    name: '寻隐者不遇',
    module: '古诗',
    grade: '一年级下册',
    description: '贾岛：松下问童子，言师采药去。只在此山中，云深不知处。',
    practice: [
      { question: '"松下问童子"的作者是谁？', options: ['李白', '贾岛', '孟浩然'], answer: '贾岛' },
      { question: '童子说师傅去做什么了？', options: ['采药', '钓鱼', '砍柴'], answer: '采药' },
      { question: '诗人找到隐者了吗？', options: ['找到了', '没找到', '找到了他徒弟'], answer: '没找到' },
    ],
  },
  {
    id: 'on_the_pond',
    name: '池上',
    module: '古诗',
    grade: '一年级下册',
    description: '白居易：小娃撑小艇，偷采白莲回。不解藏踪迹，浮萍一道开。',
    practice: [
      { question: '"小娃撑小艇"里的小艇是什么？', options: ['小船', '自行车', '汽车'], answer: '小船' },
      { question: '小娃采了什么东西？', options: ['荷花', '白莲', '莲蓬'], answer: '白莲' },
      { question: '谁写的《池上》？', options: ['李白', '白居易', '王维'], answer: '白居易' },
    ],
  },
]
