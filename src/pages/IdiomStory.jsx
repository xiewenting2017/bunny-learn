import { useEffect, useRef, useState } from 'react'
import { trySpeech } from '../hooks/useSpeech'

// ── 每个成语的完整故事数据 ──
// story: 给小朋友读的完整故事（~80-120 字，分句自然）
// summary: 一句话梗概
// moral: 小道理
// image: 插画（AI 生成的儿童绘本风格）
const STORIES = {
  wenjiqiwu: {
    title: '闻鸡起舞',
    subtitle: '祖逖和刘琨的故事',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, an ancient Chinese boy in simple hanfu practicing sword at sunrise in a courtyard, a rooster crowing on a wooden fence, warm orange morning sky, soft pastel colors, cute gentle style, no text",
    )}&image_size=landscape_16_9`,
    story:
      '西晋的时候，有两个好朋友，一个叫祖逖，一个叫刘琨。他们住在一起，都想为国家出力。有一天半夜，祖逖听到远处传来公鸡的叫声，就用脚踢醒刘琨，说：这不是讨厌的声音，这是提醒我们起床练剑的声音呀！于是两个人披上衣服，拿起宝剑，在院子里练了起来。从那天起，每天一听到鸡叫，他们就起床练剑，不管刮风下雨，从来没有停过。后来，祖逖和刘琨都成了很有本领的人，为国家做了很多大事。',
    summary:
      '祖逖和好朋友刘琨，每天听到鸡叫就起床练剑，后来都成了很厉害的人。',
    moral: '想做好一件事，就要坚持不懈地练习。',
  },
  zaobi: {
    title: '凿壁借光',
    subtitle: '匡衡的读书故事',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, a little Chinese boy in old hanfu reading a book by a small hole in the wall, warm yellow light shining through from next door, wooden room interior, cute gentle style, soft pastel colors, no text",
    )}&image_size=landscape_16_9`,
    story:
      '从前有个小朋友叫匡衡，家里很穷，买不起灯油，晚上想读书也没有光亮。他家隔壁住着一个大户人家，每天晚上点着灯，亮堂堂的。匡衡想了想，就在自己家和邻居家的墙壁上凿了一个小小的洞。这样，邻居家的灯光就从小洞里透了过来，照在匡衡的书上。匡衡就借着这一点点光，每天晚上都认真地读书。后来，匡衡成了一个很有学问的人。',
    summary: '匡衡家里穷买不起灯油，就在墙上凿了个洞，借邻居家的灯光读书。',
    moral: '不管条件多困难，只要努力想办法，就一定能成功。',
  },
  hualong: {
    title: '画龙点睛',
    subtitle: '张僧繇画龙的故事',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, an ancient Chinese painter in flowing robes painting two big dragons on a temple wall with a brush, blue sky background, the dragons look vivid, cute gentle style, soft pastel colors, no text",
    )}&image_size=landscape_16_9`,
    story:
      '古时候有个画家叫张僧繇，画得特别好。有一天，他在一座寺庙的墙上画了四条龙。围观的人都说画得太像了，就像真的龙在墙上飞一样。可是大家发现，这四条龙都没有画眼睛。有人就问：你为什么不给龙画上眼睛呢？张僧繇说：不能画！画上眼睛，龙就会飞走的！大家都不信，说他吹牛。张僧繇没办法，就拿起笔，给其中两条龙点上了眼睛。突然，天空乌云密布，雷声大作，那两条龙真的腾空而起，飞到云里去了！',
    summary: '画家张僧繇画的龙太逼真，点上眼睛后龙就飞走了。',
    moral: '有时候，关键的一笔能让整件事变得特别精彩。',
  },
  wangmei: {
    title: '望梅止渴',
    subtitle: '曹操带军的故事',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, a Chinese general on horseback pointing ahead with soldiers in ancient army uniforms, hot desert sun, green plum trees in the distance, warm sunny sky, cute gentle style, soft pastel colors, no text",
    )}&image_size=landscape_16_9`,
    story:
      '有一年夏天，曹操带着军队去打仗。天气特别热，太阳火辣辣的，晒得大地都冒烟了。士兵们走了很远很远，水喝完了，一个个口渴得厉害，走不动路了。曹操骑在马上，心里很着急。他想了想，就指着前面说：大家看！前面有一大片梅林，树上结满了又酸又甜的梅子！士兵们一听，口水都流出来了，好像自己已经吃到了梅子一样，一下子就不那么渴了，精神也来了，继续往前走。虽然最后没有找到梅林，但大家还是坚持走到了有水的地方。',
    summary: '曹操骗士兵说前面有梅林，大家想到梅子就不渴了。',
    moral: '遇到困难时，用积极的想法鼓励自己，就能坚持下去。',
  },
  jinggong: {
    title: '惊弓之鸟',
    subtitle: '更羸射雁的故事',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, an ancient Chinese archer standing in a field with bow, a goose falling from the sky in the distance, autumn sky with clouds, cute gentle style, soft pastel colors, no text",
    )}&image_size=landscape_16_9`,
    story:
      '古时候有个射箭能手叫更羸。有一天，他跟魏王一起去打猎，看见天上飞着一只大雁。更羸说：大王，我不用箭，只要拉一下弓，就能把这只大雁射下来。魏王不信。只见更羸拿起弓，搭上弦，拉了一下，只听嘣的一声响，那只大雁居然真的从天上掉了下来！魏王大吃一惊，问他是怎么做到的。更羸说：这只雁飞得很慢，叫声又很凄惨，一定是以前被箭射伤过，伤口还没好。它听到弓弦的响声，以为又有箭射过来了，就拼命往上飞，结果伤口裂开，就掉下来了。',
    summary: '更羸不用箭，只拉弓响一声，受伤的大雁就吓得掉了下来。',
    moral: '受过伤的人，遇到一点点动静就会害怕，要勇敢战胜恐惧。',
  },
  duiniu: {
    title: '对牛弹琴',
    subtitle: '公明仪弹琴的故事',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, an ancient Chinese musician sitting on grass playing a zither for a big ox, green grass field, blue sky with clouds, cute gentle style, soft pastel colors, no text",
    )}&image_size=landscape_16_9`,
    story:
      '古时候有个音乐家叫公明仪，琴弹得特别好。有一天，他看见一头老牛在草地上吃草，就想：牛整天吃草，有没有听过音乐呢？我来弹一首给它听听吧。于是他坐下来，认真地弹了一首高雅的曲子。可是那头老牛低着头，继续吃它的草，连头都没抬一下。公明仪又换了一首曲子，老牛还是不理他。原来，老牛根本听不懂那些高雅的曲子。后来有人说：对牛弹琴，白费力气。这个成语就流传下来了。',
    summary: '公明仪对老牛弹高雅的曲子，老牛只顾吃草，根本听不懂。',
    moral: '说话要看对象，对着不懂的人讲，就是白费口舌。',
  },
  shouzhu: {
    title: '守株待兔',
    subtitle: '农夫的傻运气',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, a Chinese farmer in straw hat sitting by a tree stump in a rice field, a white rabbit running in the distance, warm autumn afternoon, cute gentle style, soft pastel colors, no text",
    )}&image_size=landscape_16_9`,
    story:
      '从前有个农夫，每天早出晚归，在田里辛苦地劳作。有一天，他正在田里干活，忽然看见一只白色的小兔子从草丛里跑出来。那只兔子跑得太快了，没注意到前面有一个树桩，砰的一声撞在了树桩上，当场就死了。农夫高兴极了，跑过去捡起兔子，晚上回家吃了一顿香喷喷的兔肉。第二天，农夫又去田里干活。可是他干了一会儿就想：昨天我白捡了一只兔子，今天说不定还能再捡到一只呢！于是他就坐在树桩旁边等起来，等着有兔子再撞上来。他等啊等，等啊等，一整天过去了，再也没有兔子撞上来。可是他的田地却因为他一直没干活，长满了野草。大家都笑话他：哪有那么多兔子会撞树桩呀？',
    summary: '农夫捡到一只撞死的兔子后，天天守在树桩边等，田地都荒废了。',
    moral: '意外的好运气不会天天有，想要收获就要自己努力。',
  },
  xuanliang: {
    title: '悬梁刺股',
    subtitle: '刻苦学习的古人',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, a Chinese boy in hanfu studying at night, his hair tied to a rafter beam, warm candlelight, wooden desk with books, cute gentle style, soft pastel colors, no text",
    )}&image_size=landscape_16_9`,
    story:
      '从前有两个很爱学习的人，一个叫孙敬，一个叫苏秦。孙敬每天读书读到很晚很晚，有时候太困了就会打瞌睡。为了不让自己睡着，他想了个办法：把自己的头发用绳子拴在房梁上。这样一来，只要他一低头打瞌睡，头发就会被绳子扯一下，疼得他立刻清醒过来，继续读书。苏秦呢，他也怕自己打瞌睡，就准备了一把锥子放在桌子上。每当困得要睡着了，他就用锥子在自己的大腿上刺一下，一疼就不困了，接着读下去。后来，孙敬成了很有学问的老师，苏秦成了能言善辩的政治家。',
    summary: '孙敬把头发拴在房梁上，苏秦用锥子扎大腿，怕自己打瞌睡刻苦读书。',
    moral: '想学好本领，就要不怕辛苦，有毅力坚持下去。',
  },
  nangying: {
    title: '囊萤映雪',
    subtitle: '车胤和孙康的故事',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, a little Chinese boy reading a book by the light of fireflies in a cloth bag, summer night with stars, cute gentle style, soft pastel colors, no text",
    )}&image_size=landscape_16_9`,
    story:
      '古时候有两个爱读书的小朋友，一个叫车胤，一个叫孙康。车胤家里很穷，晚上买不起灯油，没法看书。夏天的一个晚上，他看见许多萤火虫飞来飞去，尾巴上一闪一闪地发光。车胤灵机一动，找了一个白纱布袋子，捉了几十只萤火虫装进去。袋子里亮闪闪的，就像一盏小灯笼。车胤就借着这萤囊的光，认真地读起书来。孙康呢，他也是家里穷得买不起灯油。有一年冬天的夜里，他一觉醒来，看见窗外亮堂堂的，原来是下了大雪！地上的雪把月光反射得好亮好亮。孙康赶紧穿上衣服，跑到雪地里，借着雪地反射的光，读起书来。',
    summary: '车胤捉萤火虫装在袋子里照亮，孙康借着雪地里的反光读书，都很刻苦。',
    moral: '办法总比困难多，勤奋的人总能找到学习的好方法。',
  },
  feiqin: {
    title: '废寝忘食',
    subtitle: '颜回读书的故事',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, a young Chinese scholar in hanfu deeply focused on reading ancient books, books scattered on wooden desk, warm study room, cute gentle style, soft pastel colors, no text",
    )}&image_size=landscape_16_9`,
    story:
      '孔子有一个很喜欢的学生，叫颜回。颜回非常聪明，也非常爱学习。有一次，孔子在讲一个很重要的道理，颜回听得入了迷，眼睛一眨不眨，连吃饭都忘了。同学们都吃完饭回来继续听课了，颜回还坐在那里一动不动，脑子里全是老师讲的道理。到了晚上，同学们都回去睡觉了，颜回还在房间里思考老师讲的内容。他一会儿翻翻书，一会儿写写画画，连睡觉都忘了。孔子知道了，笑着说：颜回真是废寝忘食啊，这样学习一定会有大成就的。',
    summary: '颜回读书太认真了，连吃饭睡觉都忘了。',
    moral: '一心一意地做一件事，忘记吃饭睡觉也没关系，这样才能学好。',
  },
  shoubu: {
    title: '手不释卷',
    subtitle: '吕蒙读书的故事',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, a Chinese general in ancient armor sitting on a horse holding a book, a king speaking to him, outdoor military camp, cute gentle style, soft pastel colors, no text",
    )}&image_size=landscape_16_9`,
    story:
      '三国时候，有一个大将军叫吕蒙。他从小当兵，没有读过书，孙权就劝他说：你现在当了大将军，要多读书，才能更聪明地打仗啊。吕蒙觉得自己很忙，没有时间。孙权又说：你再忙，能比我还忙吗？我每天都抽出时间读书，收获很大呢。吕蒙听了，觉得很有道理。从那以后，他每天不管多忙，都要抽出时间读书。他骑在马上读，睡觉前读，吃饭后也读，手里总是拿着一本书不肯放下。过了一段时间，吕蒙见到孙权，跟他讨论起国家大事来，说的话非常有道理。孙权惊讶地说：吕蒙变了，现在他有学问了，不再是以前那个粗鲁的将军了！',
    summary: '吕蒙在孙权的劝说下，手不离书地读书，后来成了有学问的大将军。',
    moral: '只要想学习，再忙也能挤出时间，什么时候开始都不晚。',
  },
  weibian: {
    title: '韦编三绝',
    subtitle: '孔子读易经的故事',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, Confucius in flowing robes reading ancient bamboo scrolls with leather straps, candlelit study room, cute gentle style, soft pastel colors, no text",
    )}&image_size=landscape_16_9`,
    story:
      '古时候还没有纸，书都是把竹子削成竹简，然后用皮绳一根一根地串起来的。孔子晚年的时候，特别喜欢读一本叫《易经》的书。《易经》很深奥，里面讲了天地万物变化的道理。孔子读第一遍的时候，觉得看不懂，就再读一遍。第二遍还有很多地方不懂，他就读第三遍。就这样，他翻来覆去地读，把串竹筒的皮绳都磨断了三次！每断一次，他就重新找一根结实的皮绳，把竹简串好，继续读。有人问他：您读了这么多遍，还没读完吗？孔子笑着说：如果让我再多活几年，我就能把《易经》学得更精通啦！',
    summary: '孔子读《易经》，把串书的皮绳磨断了三次，还在不停地读。',
    moral: '一本好书要反复读，读得遍数越多，理解就越深。',
  },
  chengmen: {
    title: '程门立雪',
    subtitle: '杨时拜见老师',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, two young Chinese scholars standing in deep snow outside a traditional Chinese gate, winter snow scene, cute gentle style, soft pastel colors, no text",
    )}&image_size=landscape_16_9`,
    story:
      '宋朝的时候，有两个很爱学习的年轻人，一个叫杨时，一个叫游酢。他们听说程颐老师很有学问，就一起去拜访他。那天天气很冷，北风呼呼地刮着，还下着大雪。他们来到程老师家门口，刚好遇到程老师在睡觉。游酢说：我们把老师叫醒吧。杨时摇摇头说：老师累了，让他好好休息，我们在外面等一等吧。于是他们就站在雪地里等。雪越下越大，他们的肩膀上、头上都落满了雪，变成了两个大雪人。可是他们谁也没有走开，一直站着等。过了好久，程老师终于醒来了，打开门一看，看见两个年轻人站在雪里，吓了一跳。杨时恭敬地说：老师，我们想向您请教问题。程老师感动极了，从此把所有的学问都耐心地教给了他们。',
    summary: '杨时和游酢去拜见老师，老师在睡觉，他们就站在雪地里等。',
    moral: '尊敬老师，有礼貌，同时要有耐心，这样才能学到真本事。',
  },
  niujiao: {
    title: '牛角挂书',
    subtitle: '李密勤学的故事',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, a young Chinese boy riding an ox with a book tied to the ox horn, countryside path with willow trees, warm spring day, cute gentle style, soft pastel colors, no text",
    )}&image_size=landscape_16_9`,
    story:
      '隋朝有个叫李密的小朋友，从小就很聪明，也很爱读书。可是他家里很穷，没有钱买灯油，也没有钱供他上学。后来，李密听说有个山脚下住着一个很有学问的老先生，就决定去拜他为师。可是他家离老先生的家很远很远，走路要好几天呢。李密想了想，就想出了一个好办法。他跟家里人借了一头牛，骑在牛背上出发了。临行前，他把一本厚厚的书用绳子拴好，挂在牛角上。这样一来，牛走路的时候，李密就可以骑着牛，低着头读书啦。一路上，他不管是上坡还是下坡，都手不释卷，认真地读着。等他走到老先生家的时候，那本书他已经读了好几遍了。',
    summary: '李密骑牛出门，把书挂在牛角上，一边赶路一边读书。',
    moral: '只要想学习，什么地方什么时候都可以读书。',
  },
  tiechu: {
    title: '铁杵成针',
    subtitle: '老婆婆磨针的启示',
    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
      "Children's storybook watercolor illustration, a little boy watching an old woman grinding an iron rod with a stone by a river, green bamboo forest, peaceful scenery, cute gentle style, soft pastel colors, no text",
    )}&image_size=landscape_16_9`,
    story:
      '大诗人李白小时候很聪明，可是他也很贪玩。有一天，他趁老师不在，偷偷溜出了私塾，跑到小河边玩。他看见河边有一个老婆婆，坐在石头上，手里拿着一根又粗又长的大铁棒，在另一块石头上磨呀磨呀。李白觉得很奇怪，就跑过去问：老婆婆，您在做什么呀？老婆婆抬起头，笑着说：我在磨绣花针呀。李白大吃一惊：这么粗的铁棒，要磨成细细的绣花针，那得磨到什么时候呀？老婆婆说：没关系，只要我每天都磨一点，总有一天会磨成的。李白听了，心里一下子明白了。他不好意思再玩了，赶紧跑回学校，从此以后认认真真地读书，再也不逃学了。后来，李白成了唐朝最有名的大诗人。',
    summary: '李白看到老婆婆把粗铁棒磨成绣花针，明白了只要坚持就能成功。',
    moral: '不管做什么事，只要坚持不懈，就一定能成功。',
  },
}

function IdiomStory({ idiom, onBack, onFinish }) {
  const story = STORIES[idiom?.id] ?? null
  const title = idiom?.title ?? story?.title ?? ''
  const audioRef = useRef(null)
  const [playingId, setPlayingId] = useState(null) // 'story' | 'summary' | 'moral' | null
  const [loadingId, setLoadingId] = useState(null)

  // 切换内容时（上一个成语→下一个），停掉旧音频
  useEffect(() => {
    const a = audioRef.current
    if (a?.src) {
      a.pause()
      URL.revokeObjectURL(a.src)
      audioRef.current = null
    }
    setPlayingId(null)
    setLoadingId(null)
  }, [idiom?.id])

  // 组件卸载清理
  useEffect(() => () => {
    const a = audioRef.current
    if (a?.src) URL.revokeObjectURL(a.src)
  }, [])

  const play = async (id, text) => {
    if (!text) return

    // 同一个按钮正在播放 → 暂停（原生 speechSynthesis 整体停）
    if (playingId === id) {
      window.speechSynthesis?.cancel()
      setPlayingId(null)
      return
    }

    // 同一个按钮被暂停过 → 重新走 trySpeech
    // 或者第一次点击任何按钮 → 走 trySpeech

    setLoadingId(id)
    setPlayingId(null)

    const ok = await trySpeech(text, {
      onSuccess: () => {
        setPlayingId(id)
        // 原生 speechSynthesis 没有 ended 事件能精准绑定到这个 utterance
        // 用定时检查兜底
        if (window.speechSynthesis) {
          const checkDone = () => {
            if (!window.speechSynthesis.speaking) {
              setPlayingId((cur) => (cur === id ? null : cur))
              return
            }
            setTimeout(checkDone, 300)
          }
          setTimeout(checkDone, 500)
        }
      },
      onFail: () => {
        // 原生也不支持 → 静默（不再弹 alert 打扰）
        console.warn('[成语故事] 语音不可用')
      },
    })

    if (!ok) setPlayingId(null)
    setLoadingId(null)
  }

  // 没有故事数据 → 占位
  if (!story) {
    return (
      <>
        <div className="flex items-center justify-between">
          <button type="button" onClick={onBack} className="...">← 返回</button>
        </div>
        <div className="mt-10 text-center text-sm text-slate-400">
          这个成语的故事正在准备中，请敬请期待～
        </div>
      </>
    )
  }

  return (
    <>
      {/* 顶部栏 */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1 rounded-full px-2 py-1.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 active:scale-95"
        >
          <span aria-hidden="true">←</span> 返回
        </button>
        <button
          type="button"
          onClick={() => play('story', story.story)}
          className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1.5 text-sm font-medium text-violet-600 transition hover:bg-violet-100 active:scale-95"
        >
          <span aria-hidden="true">
            {loadingId === 'story' ? '⏳' : playingId === 'story' ? '🔊' : '🔈'}
          </span>
          再听一遍
        </button>
      </div>

      {/* 插画区域 */}
      <div className="relative mt-5 h-44 overflow-hidden rounded-3xl bg-gradient-to-br from-amber-200 via-orange-200 to-rose-200">
        <img
          src={story.image}
          alt={`${title}插画`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent px-4 pb-3 pt-10 text-white">
          <p className="text-xl font-bold">{title}</p>
          <p className="text-xs text-white/85">{story.subtitle}</p>
        </div>
      </div>

      {/* 播放故事 */}
      <div className="mt-4 flex flex-col items-center">
        <button
          type="button"
          onClick={() => play('story', story.story)}
          className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-base font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-600 active:scale-[0.98]"
        >
          <span aria-hidden="true">
            {loadingId === 'story' ? '⏳' : playingId === 'story' ? '⏸' : '▶️'}
          </span>
          {loadingId === 'story' ? '加载中…' : playingId === 'story' ? '暂停' : '播放故事'}
        </button>
        <p className="mt-2 text-center text-xs text-slate-400">
          雪爱伊姐姐讲故事 🎧
        </p>
      </div>

      <div className="my-5 h-px w-full bg-slate-100" />

      {/* 故事讲了什么 */}
      <h2 className="text-sm font-bold text-slate-600">这个故事讲了什么？</h2>
      <div className="mt-2 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
        <p className="text-sm leading-relaxed text-slate-600">
          {story.summary}
        </p>
        <button
          type="button"
          onClick={() => play('summary', story.summary)}
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-violet-600 transition hover:text-violet-700"
        >
          <span aria-hidden="true">
            {loadingId === 'summary' ? '⏳' : playingId === 'summary' ? '🔊' : '🔈'}
          </span>
          {playingId === 'summary' ? '播放中…' : '听一听这句话'}
        </button>
      </div>

      {/* 小道理 */}
      <div className="mt-3 rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-100">
        <p className="flex items-center gap-1 text-xs font-bold text-amber-600">
          <span aria-hidden="true">💡</span> 小道理
        </p>
        <div className="mt-1.5 flex items-start justify-between gap-3">
          <p className="text-sm leading-relaxed text-amber-900/80">
            {story.moral}
          </p>
          <button
            type="button"
            onClick={() => play('moral', story.moral)}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition active:scale-90"
            style={{
              backgroundColor: playingId === 'moral' ? '#f59e0b' : undefined,
            }}
          >
            <span className="text-xs" aria-hidden="true">
              {loadingId === 'moral' ? '⏳' : playingId === 'moral' ? '🔊' : '🔈'}
            </span>
          </button>
        </div>
      </div>

      {/* 下一步 */}
      <button
        type="button"
        onClick={onFinish}
        className="mt-6 w-full rounded-full bg-violet-500 py-3.5 text-base font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-600 active:scale-[0.98]"
      >
        我听完啦，说一说 →
      </button>
    </>
  )
}

export default IdiomStory
