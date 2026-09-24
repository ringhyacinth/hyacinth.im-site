// 像素上海：弄堂电台 —— 剧本与数据
// 坐标均为 16:9 画面的百分比。hidden 热点需要修好收音机后在“收听模式”里才会显形。

export const SPEAKERS = {
  me: { name: "小满", portrait: "xiaoman", voice: 1.18, wave: "#f4c56b" },
  apo: { name: "楼上阿婆", portrait: "apo", voice: 0.92, wave: "#d9b3e6" },
  zhang: { name: "张老伯", portrait: "zhang", voice: 0.78, wave: "#f0c88c" },
  wang: { name: "王老伯", portrait: "wang", voice: 0.72, wave: "#9fd6bf" },
  xiufen: { name: "秀芬阿姨", portrait: "xiufen", voice: 1.05, wave: "#f2b3a6" },
  li: { name: "李师傅", portrait: "li", voice: 0.7, wave: "#c7d69b" },
  amia: { name: "阿咪", portrait: "amia", voice: 1.6, wave: "#f7c98f" },
  squirrel: { name: "电线上的松鼠", portrait: "squirrel", voice: 1.9, wave: "#e98c5a" },
  zhou: { name: "周先生", portrait: "zhou", voice: 0.8, wave: "#eab194" },
  tourist: { name: "成都来的阿哥", portrait: "tourist", voice: 0.95, wave: "#f5a25d" },
  walker: { name: "散步的老伯", portrait: "bundwalker", voice: 0.74, wave: "#cfc7bb" },
  aqiang: { name: "阿强", portrait: "aqiang", voice: 0.9, wave: "#8fd1cc" },
  boss: { name: "酒馆老板 Tony", portrait: "tavernboss", voice: 0.82, wave: "#ffb36b" },
  rider: { name: "外卖小哥小陈", portrait: "rider", voice: 0.96, wave: "#9aa3ff" },
  barista: { name: "咖啡店小安", portrait: "barista", voice: 1.12, wave: "#8fc0f0" },
  aning: { name: "书摊阿宁", portrait: "bookgirl", voice: 1.08, wave: "#9fb0e0" },
  auntie: { name: "天台阿姨", portrait: "auntie", voice: 1.0, wave: "#86d0c9" },
  kid: { name: "小胖", portrait: "kid", voice: 1.45, wave: "#8fb3ff" },
  moonman: { name: "夜归人", portrait: "moonman", voice: 0.86, wave: "#b9c6ff" },
  waipo: { name: "外婆", portrait: "waipo", voice: 0.95, wave: "#ffd08a" },
  radio: { name: "收音机", portrait: null, voice: 1.3, wave: "#ffb347" },
  signal: { name: "电波里的声音", portrait: null, voice: 1.0, wave: "#7ee0c3" },
  guests: { name: "露台上的朋友们", portrait: null, voice: 1.1, wave: "#ffcf7a" },
  monk: { name: "扫地的师父", portrait: null, voice: 0.7, wave: "#ffd36b" },
  dancer: { name: "穿西装的舞客", portrait: null, voice: 0.85, wave: "#ff9ec7" },
  booth: { name: "电话亭里的声音", portrait: null, voice: 1.05, wave: "#ff7a6b" }
};

export const ITEMS = {
  radio: { name: "外婆的收音机", icon: "radio", desc: "红色的老式半导体收音机，指针停在一个没有刻度的地方。" },
  cifan: { name: "粢饭团", icon: "cifan", desc: "糯米包油条，还烫手。王老伯排不到队。" },
  knob: { name: "调谐旋钮", icon: "knob", desc: "镀铬的小旋钮，从阿咪肚皮底下找到的。" },
  umbrella: { name: "透明雨伞", icon: "umbrella", desc: "小安托你带给转角书摊的阿宁。" }
};

// 沪语读音为近似拼读，仅作游戏里的趣味提示。
export const CARDS = {
  // 天井
  A1: { title: "早饭吃过伐", who: "apo", quote: "早饭吃过伐？吃过了就好。人是铁，饭是钢。", hu: ["吃过伐", "qih ku va", "吃过了吗，上海人最常用的问候"] },
  A2: { title: "万国旗", who: "apo", quote: "一弄堂晒出来的衣裳，花花绿绿，阿拉叫伊“万国旗”。", kind: "thing" },
  A3: { title: "天井里的天", who: "me", quote: "从天井往上看，天是一块方方正正的手帕。", kind: "thing", hidden: true },
  // 弄堂
  B1: { title: "嘎讪胡", who: "zhang", quote: "弄堂里的人，一天勿嘎讪胡，浑身勿适意。", hu: ["嘎讪胡", "ga sae wu", "闲聊、聊天"] },
  B2: { title: "老灵额", who: "wang", quote: "粢饭团要趁热，一口下去——老灵额！", hu: ["老灵额", "lao lin geh", "非常好、真棒"] },
  B3: { title: "最嗲的人", who: "xiufen", quote: "侬外婆年轻辰光，是阿拉弄堂里最嗲的人。", hu: ["嗲", "dia", "好、有味道、有腔调"] },
  B4: { title: "四大金刚", who: "me", quote: "大饼、油条、粢饭、豆浆，上海早饭的四大金刚。", kind: "thing" },
  B5: { title: "黄包车的铃", who: "zhang", quote: "叮铃——这部车老早不拉客了，现在是我的报刊架。", kind: "thing", hidden: true },
  B6: { title: "天降甘露", who: "me", quote: "夏天走过弄堂，头顶会滴下空调水。阿婆讲，这是天降甘露。", kind: "thing", hidden: true },
  // 修理铺
  C1: { title: "收音机的耳朵", who: "li", quote: "机器我修得好，耳朵要侬自家去养。多听人家讲闲话，伊就会唱了。" },
  C2: { title: "困觉", who: "amia", quote: "喵呜——（打了一个很长的哈欠，继续困觉）", hu: ["困觉", "kun gao", "睡觉"] },
  C3: { title: "停在1999", who: "li", quote: "挂历是我老太婆最后一年撕的。伊走了以后，我就勿舍得再翻。", kind: "thing" },
  C4: { title: "雪花屏", who: "li", quote: "老电视没信号，沙沙沙，像落雪。阿拉小辰光就看这种雪。", kind: "thing", hidden: true },
  // 梧桐
  D1: { title: "空中高速", who: "squirrel", quote: "吱！这根电线是我修的高速公路，勿收过路费。", kind: "thing" },
  D2: { title: "老克勒", who: "zhou", quote: "衣裳要挺括，讲闲话要轻，吃咖啡要慢慢叫——这就是老克勒。", hu: ["老克勒", "lao ke leh", "讲究体面、懂生活的老派绅士"], freq: "90.3" },
  D3: { title: "法国梧桐", who: "me", quote: "上海人叫伊法国梧桐，其实伊的大名叫悬铃木。", kind: "thing" },
  D4: { title: "五块洋钿", who: "signal", quote: "搿盆月季是菜场门口五块洋钿买的，养了十年，比我还会过日子。", hu: ["洋钿", "yang di", "钱（老派说法）"], hidden: true },
  // 外滩
  E1: { title: "侬好", who: "tourist", quote: "上海话好温柔哦！“侬好”，我学会了，回成都讲给我妈听。", hu: ["侬好", "nong ho", "你好"] },
  E2: { title: "老早", who: "walker", quote: "我从小在外滩看船。老早是看船来，现在是看人来。", hu: ["老早", "lao zao", "以前、很久以前"] },
  E3: { title: "对表", who: "me", quote: "外滩的钟一敲，半个上海都抬头对一对表。", kind: "thing" },
  E4: { title: "最低的一个音", who: "signal", quote: "呜——黄浦江的汽笛，是上海最低的一个音。", kind: "thing", hidden: true },
  // 老码头
  F1: { title: "结棍", who: "aqiang", quote: "我阿爷在码头扛包，我爸开轮渡，我在码头边卖奶茶——一代比一代轻松，结棍伐？", hu: ["结棍", "jih gun", "厉害、了不起"] },
  F2: { title: "慢一眼眼", who: "aqiang", quote: "这只钟一直慢三分钟。码头上的人讲，慢一眼眼，好等等来晚的人。", hu: ["一眼眼", "yih nge nge", "一点点"], kind: "thing" },
  F3: { title: "吊钩上的星", who: "signal", quote: "星星是码头工人的小囡挂上去的，讲夜里爸爸下班，抬头就看得见。", kind: "thing", hidden: true },
  // 酒馆
  G1: { title: "吃老酒", who: "boss", quote: "上海人白天吃咖啡讲道理，夜到吃老酒讲心事。", hu: ["吃老酒", "qih lao jiu", "喝酒"] },
  G2: { title: "轧闹猛", who: "guests", quote: "今朝礼拜五，全上海的人都出来轧闹猛了！", hu: ["轧闹猛", "ga nao mang", "凑热闹"] },
  G3: { title: "蓬嚓嚓", who: "signal", quote: "门里的留声机在放一支老爵士。老板讲，老早百乐门也放过。", kind: "thing", hidden: true, freq: "90.3" },
  // 陆家嘴
  H1: { title: "谢谢侬", who: "rider", quote: "来上海七年，上海话只会一句“谢谢侬”——因为每天听到最多的就是这句。", hu: ["谢谢侬", "xia xia nong", "谢谢你"] },
  H2: { title: "屋顶上的明珠", who: "me", quote: "外婆讲，明珠造好那年，弄堂里的人都爬到屋顶上看。", kind: "thing" },
  H3: { title: "加班的灯", who: "signal", quote: "妈，今朝勿回来吃夜饭了……嗯，晓得，会早点困觉的。", kind: "thing", hidden: true },
  // 雨夜
  I1: { title: "落雨了", who: "barista", quote: "落雨了，收衣裳！——我妈每趟都这样喊，我到现在还是条件反射。", hu: ["落雨", "loh yu", "下雨"] },
  I2: { title: "一把伞", who: "signal", quote: "落雨天，一把伞，两个人，就会走得慢一点。" },
  I3: { title: "红灯", who: "me", quote: "滴、滴、滴——上海的红绿灯，等人等得老有耐心。", kind: "thing", hidden: true },
  I4: { title: "两个上海", who: "me", quote: "落过雨，上海就有两个：一个在天上，一个在脚底下。", kind: "thing", hidden: true },
  // 书摊
  J1: { title: "夜里十点", who: "aning", quote: "阿爷讲，书摊要摆到夜里十点，因为总有人下班晚。" },
  J2: { title: "小人书", who: "aning", quote: "老早一分洋钿看一本，坐在小矮凳上，一直看到天黑。", kind: "thing" },
  J3: { title: "滴答", who: "me", quote: "水桶接雨，滴答、滴答，像一只慢慢走的钟。", kind: "thing", hidden: true, freq: "99.1" },
  // 天台
  K1: { title: "小囡吃西瓜", who: "auntie", quote: "西瓜切好了！小囡们，一人一块，吃好再看电影！", hu: ["小囡", "xiao noe", "小孩子"] },
  K2: { title: "第一遍", who: "kid", quote: "这部电影我看过三遍了，但是跟大家一起看，就像第一遍。" },
  K3: { title: "黑白的上海", who: "me", quote: "银幕上是黑白的上海，银幕下面是彩色的。", kind: "thing" },
  K4: { title: "最后的放映员", who: "signal", quote: "胶片转起来的声音，咔嗒咔嗒，是夏天夜里最好听的虫叫。", kind: "thing", hidden: true, freq: "104.5" },
  // 月夜
  L1: { title: "加班人的月亮", who: "moonman", quote: "我每天夜班回来，都在这条马路上看一眼月亮。" },
  L2: { title: "外婆的声音", who: "waipo", quote: "上海勿是一幢一幢的房子，是一句一句的闲话。侬听见了，就到屋里了。", final: true },
  // 番外电台
  M1: { title: "蓬嚓嚓", who: "dancer", quote: "蓬嚓嚓、蓬嚓嚓——跳舞勿要看脚，要看对方的眼睛。", bonus: true },
  M2: { title: "扎台型", who: "dancer", quote: "头发要梳得苍蝇立勿牢，这叫扎台型。", hu: ["扎台型", "zah de yin", "撑场面、出风头"], bonus: true },
  M3: { title: "大世界", who: "signal", quote: "进了大世界，哈哈镜里一照，胖子变瘦子，瘦子变胖子。", kind: "thing", hidden: true, bonus: true },
  N1: { title: "一个愿望", who: "monk", quote: "许愿勿要贪多，一样就够。多了，菩萨也记勿牢。", bonus: true },
  N2: { title: "香火与樱花", who: "me", quote: "静安寺的香烟往上飘，樱花往下落，一个去天上，一个到人间。", kind: "thing", bonus: true },
  N3: { title: "红灯笼", who: "signal", quote: "过年的辰光，这里的灯笼会一直亮到正月十五。", kind: "thing", hidden: true, bonus: true },
  O1: { title: "橘猫巡街", who: "me", quote: "武康路的橘猫，每天下午三点准时巡街，比邮差还准。", kind: "thing", bonus: true },
  O2: { title: "喂，是我呀", who: "booth", quote: "喂？是我呀……我到上海了。一切都好，侬勿要担心。", bonus: true },
  O3: { title: "路灯下的落叶", who: "me", quote: "秋天的路灯下面，落叶会自己排好队，等扫地的阿姨来。", kind: "thing", hidden: true, bonus: true }
};

const S = (who, text) => [who, text];

export const SCENES = [
  {
    id: "tianjing", name: "石库门天井", music: "t_zizhu", time: "06:40", weather: "晴 · 微风", mood: "morning", amb: "birds", fx: "leaves", mode: "loop", need: 2,
    intro: [
      S("me", "（外婆留下的亭子间，窗外是一方小小的天井。）"),
      S("me", "搬进来的第一个早上。外婆的老收音机放在窗台上，怎么拧都没有声音。"),
      S("radio", "……沙……沙沙……"),
      S("me", "天井上面好像有人在晒衣服。去打个招呼吧。"),
      { give: "radio" },
      { tip: "点击画面里发光的人或物件，去听听他们讲话。" }
    ],
    hotspots: [
      { id: "apo", x: 30, y: 27, w: 40, h: 21, label: "楼上阿婆", verb: "交谈", talk: [
        { when: "!card:A1", do: [
          S("apo", "哎哟，是小满伐？长这么高了！我是楼上的阿婆，侬外婆的老邻居。"),
          S("apo", "早饭吃过伐？"),
          { choice: [
            ["还没吃……", [S("apo", "勿来事勿来事！人是铁，饭是钢。弄堂口的早点摊，粢饭团老灵额！")]],
            ["吃过了，阿婆早！", [S("apo", "乖。吃过了就好，吃过了就好。")]]
          ] },
          S("me", "阿婆，外婆这台收音机，好像坏掉了。"),
          S("apo", "伊呀，一天到夜抱牢这台收音机。弄堂口的李师傅，修了一辈子收音机，侬去寻伊。"),
          { card: "A1" }
        ] },
        { do: [S("apo", "李师傅的铺子就在弄堂口，门口一排旧电视机，一看就晓得。")] }
      ] },
      { id: "wanguoqi", x: 20, y: 58, w: 64, h: 24, label: "晾衣绳", verb: "查看", talk: [
        { when: "!card:A2", do: [
          S("me", "床单、衬衫、花裙子，一格一格挂满了天井。"),
          S("apo", "阿拉上海人叫伊“万国旗”。一弄堂的万国旗一升，太阳就出来了。"),
          S("me", "……好像真的是在升旗。"),
          { card: "A2" }
        ] },
        { do: [S("me", "风一吹，万国旗就呼啦呼啦地响。")] }
      ] },
      { id: "sky", x: 36, y: 2, w: 26, h: 22, label: "天井上方", verb: "聆听", hidden: true, talk: [
        { do: [
          S("radio", "……啾……啾啾……"),
          S("me", "收音机收到了一只麻雀的声音。"),
          S("me", "从天井往上看，天是一块方方正正的手帕。外婆以前，每天也这样看吗？"),
          { card: "A3" }
        ] }
      ] },
      { id: "self", x: 43, y: 82, w: 15, h: 18, label: "小满", verb: "自言自语", talk: [
        { do: [S("me", "新家，新城市。其实是外婆的旧家，我的旧城市。"), S("me", "先把收音机修好再说。")] }
      ] }
    ]
  },
  {
    id: "longtang", name: "弄堂早点", music: "t_maibao", time: "07:30", weather: "晴", mood: "morning", amb: "street", fx: "steam", mode: "loop", need: 3,
    intro: [S("me", "弄堂里已经坐满了人。报纸、藤椅、蒸笼的白气——这里比闹钟还早醒。")],
    hotspots: [
      { id: "zhang", x: 29, y: 57, w: 12, h: 35, label: "张老伯", verb: "交谈", talk: [
        { when: "!card:B1", do: [
          S("zhang", "新面孔？是顾家阿婆的外孙囡吧？我看侬眉毛就看出来了。"),
          S("me", "老伯您好。您每天都在这里看报纸吗？"),
          S("zhang", "看报纸是假的，嘎讪胡是真的。"),
          { choice: [
            ["嘎讪胡是什么意思？", [S("zhang", "就是闲聊天！弄堂里的人，一天勿嘎讪胡，浑身勿适意。"), S("zhang", "侬也坐下来，嘎两句。")]],
            ["外婆以前也坐这里吗？", [S("zhang", "伊坐在最当中。伊一来，报纸就勿用看了——新闻都从伊嘴巴里出来。"), S("zhang", "这叫嘎讪胡，嘎出来的新闻，比报纸还快。")]]
          ] },
          { card: "B1" }
        ] },
        { do: [S("zhang", "今朝报纸上讲，要落雨。我讲勿会。赌一根油条。")] }
      ] },
      { id: "wang", x: 42, y: 51, w: 10, h: 34, label: "王老伯", verb: "交谈", talk: [
        { when: "card:B2", do: [S("wang", "吃饱了，报纸也看得懂了。哈哈！")] },
        { when: "item:cifan", do: [
          S("me", "王老伯，粢饭团，还烫着呢。"),
          { take: "cifan" },
          S("wang", "哎呀！侬哪能晓得我要粢饭团的？"),
          S("wang", "（咬了一大口）……老灵额！"),
          S("wang", "“老灵额”就是非常好。这个词侬要记牢，在上海，用得着的地方交关多。"),
          { card: "B2" }
        ] },
        { do: [
          S("wang", "唉，早点摊门口排了一条长龙，我这把老骨头排勿动。"),
          S("wang", "要是有人帮我带只粢饭团就好了……（偷偷看你）"),
          { set: "wantCifan" }
        ] }
      ] },
      { id: "xiufen", x: 54, y: 41, w: 8, h: 34, label: "秀芬阿姨", verb: "交谈", talk: [
        { when: "!card:B3", do: [
          S("xiufen", "小满，侬跟侬外婆年轻辰光，一模一样。"),
          S("me", "阿姨认识我外婆？"),
          S("xiufen", "啥人勿认得伊？侬外婆是阿拉弄堂里最嗲的人。"),
          S("xiufen", "“嗲”就是好、有腔调。伊夜到一开收音机，整条弄堂都跟牢伊一道听沪剧。"),
          { card: "B3" }
        ] },
        { do: [S("xiufen", "这件旗袍，是侬外婆帮我挑的料子。三十年了，还是嗲。")] }
      ] },
      { id: "stall", x: 2, y: 67, w: 20, h: 33, label: "早点摊", verb: "查看", talk: [
        { when: "!card:B4", do: [
          S("me", "大饼、油条、粢饭、豆浆。蒸笼一掀，香气能飘半条弄堂。"),
          S("signal", "（摊主）上海早饭四大金刚，小姑娘要哪一样？"),
          { choice: [
            ["来一只粢饭团", [S("me", "（买了一只粢饭团，还烫手。）"), { give: "cifan" }]],
            ["先看看", [S("signal", "好的呀，看好再讲。")]]
          ] },
          { card: "B4" }
        ] },
        { when: "!item:cifan&!card:B2", do: [
          S("me", "再来一只粢饭团！"), { give: "cifan" }
        ] },
        { do: [S("me", "蒸笼里的白气，一阵一阵往天上跑。")] }
      ] },
      { id: "rickshaw", x: 62, y: 50, w: 21, h: 38, label: "黄包车", verb: "聆听", hidden: true, talk: [
        { do: [
          { sfx: "bell" },
          S("radio", "叮铃——叮铃——"),
          S("zhang", "莫瞎拉铃！这部车老早不拉客了，现在是我的报刊架。"),
          S("me", "收音机把铃声录得清清楚楚。"),
          { card: "B5" }
        ] }
      ] },
      { id: "aircon", x: 80, y: 33, w: 9, h: 15, label: "空调外机", verb: "聆听", hidden: true, talk: [
        { do: [
          S("radio", "……嗡嗡……滴答。"),
          S("me", "一滴水落在我额头上。"),
          S("apo", "（远远地）小满！这叫天降甘露，勿要紧的！"),
          { card: "B6" }
        ] }
      ] }
    ]
  },
  {
    id: "radio", name: "收音机修理铺", music: "t_qiangwei", time: "09:10", weather: "晴 · 闷热", mood: "noon", amb: "shop", fx: "dust", mode: "loop", need: 3,
    intro: [S("me", "“收音机修理”——招牌上的红字掉了一半的漆。里面的收音机比人还多。")],
    hotspots: [
      { id: "li", x: 34, y: 28, w: 28, h: 34, label: "李师傅", verb: "交谈", talk: [
        { when: "card:C1", do: [S("li", "耳朵养得哪能了？多听，多听。机器跟人一样，勿讲闲话要生锈的。")] },
        { when: "item:knob", do: [
          S("me", "李师傅，旋钮找到了！在阿咪肚皮底下。"),
          { take: "knob" },
          S("li", "我讲哪能寻勿着！这只猫，啥物事都当枕头。"),
          { sfx: "fix" },
          S("li", "（咔哒一声，旋钮装上了。）"),
          S("radio", "……沙沙……沙……"),
          S("me", "还是只有沙沙声……"),
          S("li", "机器我修得好，耳朵要侬自家去养。"),
          S("li", "这种老机器有灵性的。侬带伊多听人家讲闲话，听得越多，伊唱得越响。"),
          S("li", "侬按住那个小耳朵——对，就是“收听”——有些声音，眼睛看勿见，耳朵听得见。"),
          { set: "fixed" },
          { card: "C1" },
          { tip: "解锁「收听模式」：点右下角耳朵按钮（电脑上也可以按空格），找到隐藏的声音。之前场景里也藏着声音。" }
        ] },
        { do: [
          S("li", "（放下烙铁）顾家阿婆的收音机？我认得。七十年代的老机器，是我帮伊配的喇叭。"),
          S("li", "毛病勿大。就是调谐旋钮没了……奇怪，今朝早上还在台子上。"),
          S("li", "侬帮我寻寻看？我眼睛勿灵了。"),
          { set: "needKnob" }
        ] }
      ] },
      { id: "cat", x: 70, y: 55, w: 15, h: 20, label: "阿咪", verb: "摸摸", talk: [
        { when: "flag:needKnob&!flag:gotKnob", do: [
          { sfx: "meow" },
          S("amia", "喵呜——"),
          S("me", "阿咪打了一个很长的哈欠，翻了个身……肚皮下面有个亮晶晶的东西。"),
          S("me", "旋钮！"),
          { give: "knob" }, { set: "gotKnob" },
          { card: "C2" }
        ] },
        { when: "!card:C2", do: [{ sfx: "meow" }, S("amia", "喵呜——（困觉中，勿要吵）"), { card: "C2" }] },
        { do: [{ sfx: "meow" }, S("amia", "（呼噜呼噜）"), S("li", "伊一天困二十个钟头，是阿拉铺子里最适意的一个。")] }
      ] },
      { id: "calendar", x: 19, y: 16, w: 8, h: 21, label: "1999年挂历", verb: "查看", talk: [
        { when: "!card:C3", do: [
          S("me", "一九九九年的挂历。纸都黄了。"),
          S("li", "……挂历是我老太婆最后一年撕的。"),
          S("li", "伊走了以后，我就勿舍得再翻。铺子里的时间，就停在那一年。"),
          S("me", "……"),
          S("li", "勿要紧。收音机里，伊的沪剧我还听得到。"),
          { card: "C3" }
        ] },
        { do: [S("me", "挂历停在1999年。窗外已经是另一个世纪了。")] }
      ] },
      { id: "tvs", x: 0, y: 38, w: 28, h: 30, label: "旧电视墙", verb: "聆听", hidden: true, talk: [
        { do: [
          { sfx: "static" },
          S("radio", "沙沙沙沙沙……"),
          S("li", "听见伐？老电视没信号就是这样，沙沙沙，像落雪。"),
          S("li", "阿拉小辰光，半夜电视台收台了，就对牢这种雪看。"),
          { card: "C4" }
        ] }
      ] },
      { id: "fan", x: 90, y: 55, w: 10, h: 32, label: "老电扇", verb: "查看", talk: [
        { do: [S("me", "绿色的老电扇，转起来咔哒咔哒的，像在给收音机打拍子。")] }
      ] }
    ]
  },
  {
    id: "wutong", name: "梧桐马路", time: "10:20", weather: "晴 · 树影", mood: "noon", amb: "birds", fx: "sunleaves", mode: "loop", need: 2,
    intro: [S("me", "拐进一条梧桐马路。红砖楼的转角，树影一格一格落在墙上。"), S("radio", "……吱吱……吱？")],
    hotspots: [
      { id: "squirrel", x: 30, y: 12, w: 15, h: 22, label: "松鼠", verb: "聆听", talk: [
        { when: "!card:D1", do: [
          { sfx: "squeak" },
          S("me", "电线上有只松鼠！收音机里的沙沙声变成了……"),
          S("squirrel", "吱！看什么看，没见过走高速的？"),
          S("me", "……收音机在翻译松鼠说话？"),
          S("squirrel", "这根电线是我修的高速公路，从这棵树到那棵树，勿收过路费。"),
          { card: "D1" }
        ] },
        { do: [{ sfx: "squeak" }, S("squirrel", "吱！今天路况良好，就是鸽子老是逆行。")] }
      ] },
      { id: "zhou", x: 48, y: 55, w: 13, h: 19, label: "窗口的周先生", verb: "交谈", talk: [
        { when: "!card:D2", do: [
          S("zhou", "小姑娘，侬手里那台，是顾家的收音机伐？"),
          S("me", "您怎么知道？"),
          S("zhou", "全上海只有伊，会把收音机调到没有刻度的地方。"),
          S("zhou", "我姓周。年轻辰光，我跟侬外婆在百乐门跳过一支舞。就一支。"),
          { choice: [
            ["周先生好有腔调。", [S("zhou", "衣裳要挺括，讲闲话要轻，吃咖啡要慢慢叫——这就是老克勒。")]],
            ["老克勒是什么？", [S("zhou", "讲究体面、懂生活的老派人。衣裳要挺括，讲闲话要轻，吃咖啡要慢慢叫。")]]
          ] },
          S("zhou", "对了，夜里侬试试把指针拨到 90.3。老早的舞曲，也许还听得到。"),
          { card: "D2" }
        ] },
        { do: [S("zhou", "90.3，勿要忘记。转旋钮要慢，像请人跳舞一样。")] }
      ] },
      { id: "tree", x: 78, y: 0, w: 22, h: 44, label: "梧桐树", verb: "查看", talk: [
        { when: "!card:D3", do: [
          S("me", "上海人都叫它法国梧桐。"),
          S("me", "其实它的大名叫悬铃木，春天会飘一城的絮，全上海一起打喷嚏。"),
          { card: "D3" }
        ] },
        { do: [S("me", "树影在红砖墙上晃，像有人在墙上写字。")] }
      ] },
      { id: "flowers", x: 67, y: 75, w: 14, h: 13, label: "阳台月季", verb: "聆听", hidden: true, talk: [
        { do: [
          S("signal", "……搿盆月季，是菜场门口五块洋钿买的。"),
          S("signal", "养了十年，比我还会过日子。"),
          S("me", "是楼上阿姨在跟花讲话。"),
          { card: "D4" }
        ] }
      ] }
    ]
  },
  {
    id: "bund", name: "外滩", time: "12:00", weather: "薄雾", mood: "noon", amb: "river", fx: "haze", mode: "loop", need: 3,
    intro: [S("me", "外滩。江面上有薄薄的雾，钟楼刚好指向正午。"), { sfx: "chime" }]
    , hotspots: [
      { id: "tourists", x: 72, y: 80, w: 11, h: 17, label: "游客一家", verb: "交谈", talk: [
        { when: "!card:E1", do: [
          S("tourist", "美女！可不可以帮我们拍张合照嘛？要把钟楼拍进去哈！"),
          { choice: [
            ["好呀，一、二、三——", [S("me", "茄子！"), { sfx: "shutter" }, S("tourist", "巴适！拍得太好了！")]],
            ["要不要试试说上海话？", [S("me", "拍照前说一句“侬好”，笑得会更自然。"), S("tourist", "侬——好——！"), { sfx: "shutter" }, S("tourist", "哈哈哈，我们一家都笑了！")]]
          ] },
          S("tourist", "上海话好温柔哦！“侬好”，我学会了，回成都讲给我妈听。"),
          { card: "E1" }
        ] },
        { do: [S("tourist", "下一站去城隍庙吃小笼包！上海话怎么说好吃？……“嗲”？要得！")] }
      ] },
      { id: "walker", x: 55, y: 70, w: 6, h: 15, label: "散步的老伯", verb: "交谈", talk: [
        { when: "!card:E2", do: [
          S("walker", "我每天十二点，从外白渡桥走到这里，再走回去。走了五十年。"),
          S("me", "每天都来？不会腻吗？"),
          S("walker", "老早是看船来，现在是看人来。船会重复，人勿会。"),
          { card: "E2" }
        ] },
        { do: [S("walker", "侬看，江对面的楼，又高了一眼眼。")] }
      ] },
      { id: "clock", x: 56, y: 2, w: 10, h: 24, label: "钟楼", verb: "聆听", talk: [
        { when: "!card:E3", do: [
          { sfx: "chime" },
          S("radio", "当——当——"),
          S("me", "钟声一响，江边的人都抬头看了一眼，又低头看了看手机。"),
          S("me", "外滩的钟一敲，半个上海都对一对表。"),
          { card: "E3" }
        ] },
        { do: [{ sfx: "chime" }, S("me", "钟声在江面上弹了一下，飞到对岸去了。")] }
      ] },
      { id: "river", x: 0, y: 58, w: 35, h: 40, label: "黄浦江", verb: "聆听", hidden: true, talk: [
        { do: [
          { sfx: "horn" },
          S("radio", "呜————"),
          S("me", "一艘货船的汽笛，从江心慢慢传过来。"),
          S("me", "这是上海最低的一个音。其他所有声音，都在它上面。"),
          { card: "E4" }
        ] }
      ] }
    ]
  },
  {
    id: "riverroad", name: "老码头", time: "14:30", weather: "晴 · 江风", mood: "noon", amb: "dock", fx: "gulls", mode: "hold", need: 2,
    intro: [S("me", "顺着江往南走，是一段老码头。钟楼、木箱、黄色的吊车，还有一个在看报纸的人。")],
    hotspots: [
      { id: "aqiang", x: 48, y: 81, w: 14, h: 19, label: "看报纸的阿强", verb: "交谈", talk: [
        { when: "!card:F1", do: [
          S("aqiang", "报纸？我勿看新闻的，我看招工启事——帮我阿爸看。"),
          S("aqiang", "我阿爷在码头扛包，我阿爸开轮渡，我呢，在码头边开奶茶店。"),
          { choice: [
            ["一代比一代轻松！", [S("aqiang", "对呀！结棍伐？到我儿子，估计就在家里打游戏赚钞票了。")]],
            ["那你喜欢码头吗？", [S("aqiang", "喜欢。码头的风是咸的，奶茶是甜的，刚刚好。结棍伐？")]]
          ] },
          S("aqiang", "“结棍”，就是厉害。侬讲讲看。"),
          S("me", "……结棍。"),
          S("aqiang", "有腔调！"),
          { card: "F1" }
        ] },
        { do: [S("aqiang", "下趟来，请侬吃奶茶。要三分糖，上海小姑娘都要三分糖。")] }
      ] },
      { id: "tower", x: 22, y: 47, w: 25, h: 26, label: "码头钟楼", verb: "查看", talk: [
        { when: "!card:F2", do: [
          S("me", "钟楼的时间……好像慢了三分钟？"),
          S("aqiang", "一直慢三分钟的，几十年了，没人去修。"),
          S("aqiang", "码头上的人讲，慢一眼眼，好等等来晚的人。"),
          { card: "F2" }
        ] },
        { do: [S("me", "慢三分钟的钟，是这个码头的温柔。")] }
      ] },
      { id: "crates", x: 50, y: 31, w: 14, h: 27, label: "木箱", verb: "查看", talk: [
        { do: [S("me", "木箱上印着看不清的外文。里面装的会是什么呢？"), S("aqiang", "空的！是我店里的招牌装饰。")] }
      ] },
      { id: "star", x: 82, y: 43, w: 8, h: 16, label: "吊钩上的星星", verb: "聆听", hidden: true, talk: [
        { do: [
          S("signal", "（一个小孩的声音）爸爸，我把星星挂在吊钩上了！"),
          S("signal", "这样你夜里下班，抬头就看得见。"),
          S("me", "吊车上那颗黄色的星星，原来是这样来的。"),
          { card: "F3" }
        ] }
      ] }
    ]
  },
  {
    id: "tavern", name: "老洋房酒馆", time: "18:10", weather: "晚霞", mood: "dusk", amb: "bar", fx: "fireflies", mode: "hold", need: 2,
    intro: [S("me", "天慢慢暗下来。爬满藤蔓的老洋房里，灯一盏一盏亮了。")],
    hotspots: [
      { id: "boss", x: 61, y: 64, w: 16, h: 36, label: "门口的老板", verb: "交谈", talk: [
        { when: "!card:G1", do: [
          S("boss", "进来坐坐？今朝有现磨的咖啡，也有黄酒。"),
          { choice: [
            ["来杯咖啡。", [S("boss", "好眼光。白天的咖啡讲道理。")]],
            ["来一点黄酒。", [S("boss", "哦哟，识货。夜里的老酒讲心事。")]]
          ] },
          S("boss", "上海人白天吃咖啡讲道理，夜到吃老酒讲心事。"),
          S("boss", "“吃老酒”就是喝酒。阿拉上海人，喝啥都讲“吃”。"),
          { card: "G1" }
        ] },
        { do: [S("boss", "我这里以前是一户人家的客厅。现在变成大家的客厅了。")] }
      ] },
      { id: "guests", x: 0, y: 70, w: 42, h: 28, label: "露台上的朋友们", verb: "聆听", talk: [
        { when: "!card:G2", do: [
          S("guests", "干杯！今朝礼拜五——"),
          S("guests", "全上海的人都出来轧闹猛了！"),
          S("me", "“轧闹猛”，是凑热闹的意思吧。"),
          S("guests", "小姑娘，一道来轧闹猛呀！"),
          { card: "G2" }
        ] },
        { do: [S("guests", "（笑声、碰杯声，还有人在讲明天去哪里吃早饭。）")] }
      ] },
      { id: "door", x: 52, y: 35, w: 9, h: 27, label: "门里的留声机", verb: "聆听", hidden: true, talk: [
        { do: [
          { sfx: "vinyl" },
          S("radio", "……蓬嚓嚓，蓬嚓嚓……"),
          S("boss", "侬也听见了？里面那台留声机，在放一支老爵士。"),
          S("boss", "老早百乐门也放过这支。有人讲，频率拨到 90.3，还能听到当年的舞池。"),
          { card: "G3" }
        ] }
      ] }
    ]
  },
  {
    id: "pearl", name: "陆家嘴", time: "19:40", weather: "晴 · 夜", mood: "night", amb: "city", fx: "sparkle", mode: "hold", need: 2,
    intro: [S("me", "坐轮渡过江。江对面的灯全亮了，明珠像一串粉色的糖葫芦。")],
    hotspots: [
      { id: "rider", x: 22, y: 77, w: 27, h: 23, label: "外卖小哥", verb: "交谈", talk: [
        { when: "!card:H1", do: [
          S("rider", "借过借过！……啊，不好意思，差点撞到你。"),
          S("me", "没事，你忙吧。"),
          S("rider", "马上最后一单了。我来上海七年，送的外卖能绕陆家嘴一百圈。"),
          S("rider", "上海话只会一句：“谢谢侬”。"),
          { choice: [
            ["为什么只会这一句？", [S("rider", "因为每天听到最多的，就是这句啊。")]],
            ["谢谢侬，辛苦了。", [S("rider", "……嘿，今天第一百零一句。")]]
          ] },
          { card: "H1" }
        ] },
        { do: [S("rider", "（电动车嗖地一下开走了，留下一句）谢谢侬——")] }
      ] },
      { id: "pearltower", x: 21, y: 0, w: 12, h: 76, label: "东方明珠", verb: "查看", talk: [
        { when: "!card:H2", do: [
          S("me", "外婆说过，明珠造好的那一年，弄堂里的人都爬到屋顶上看。"),
          S("radio", "……沙沙……（一段很老的广播声，带着欢呼）……"),
          S("me", "收音机好像在回放那一天。"),
          { card: "H2" }
        ] },
        { do: [S("me", "粉色的球一闪一闪，像在跟弄堂里的屋顶打招呼。")] }
      ] },
      { id: "office", x: 57, y: 5, w: 28, h: 70, label: "还亮着的窗", verb: "聆听", hidden: true, talk: [
        { do: [
          S("signal", "妈，今朝勿回来吃夜饭了……"),
          S("signal", "嗯，晓得，会早点困觉的。侬也早点困。"),
          S("me", "大楼里，还有好多窗没关灯。"),
          { card: "H3" }
        ] }
      ] }
    ]
  },
  {
    id: "rain", name: "雨夜街角", music: "t_suzhou", time: "20:40", weather: "小雨", mood: "rain", amb: "rain", fx: "rain", mode: "loop", need: 2,
    intro: [S("me", "回到浦西，突然落雨了。整条马路的伞，像一朵一朵透明的蘑菇。")],
    hotspots: [
      { id: "barista", x: 0, y: 40, w: 22, h: 42, label: "咖啡店", verb: "交谈", talk: [
        { when: "card:I1", do: [S("barista", "伞送到了伐？……伊有没有讲什么？（小声）")] },
        { do: [
          S("barista", "落雨了，收衣裳！——啊，不好意思，我妈每次都这样喊，我到现在还是条件反射。"),
          S("barista", "“落雨”就是下雨。上海人落雨天，就想吃热的。"),
          S("barista", "对了……你能帮我个忙吗？"),
          S("barista", "转角的书摊，那个小姑娘又没带伞。你帮我把这把伞带给她好吗？别说是我给的。"),
          { give: "umbrella" },
          { card: "I1" }
        ] }
      ] },
      { id: "couple", x: 27, y: 52, w: 15, h: 28, label: "撑伞的人", verb: "聆听", talk: [
        { when: "!card:I2", do: [
          S("signal", "你伞往你那边一点，你肩膀都湿了。"),
          S("signal", "没事，我走慢一点就好。"),
          S("me", "落雨天，一把伞，两个人，就会走得慢一点。"),
          { card: "I2" }
        ] },
        { do: [S("me", "他们已经走远了，伞还是歪向一边。")] }
      ] },
      { id: "light", x: 83, y: 33, w: 7, h: 19, label: "红绿灯", verb: "聆听", hidden: true, talk: [
        { do: [
          { sfx: "beep" },
          S("radio", "滴、滴、滴、滴——"),
          S("me", "上海的红绿灯，等人等得老有耐心。"),
          { card: "I3" }
        ] }
      ] },
      { id: "puddle", x: 42, y: 81, w: 30, h: 19, label: "水塘", verb: "聆听", hidden: true, talk: [
        { do: [
          S("radio", "……啪嗒。"),
          S("me", "水塘里倒映着整栋楼的灯。"),
          S("me", "落过雨，上海就有两个：一个在天上，一个在脚底下。"),
          { card: "I4" }
        ] }
      ] }
    ]
  },
  {
    id: "bookstall", name: "转角书摊", time: "21:30", weather: "小雨", mood: "rain", amb: "rainsoft", fx: "rain", mode: "loop", need: 2,
    intro: [S("me", "转角有个用塑料布围起来的书摊。一盏小灯，一个戴帽子的人，一桌小人书。")],
    hotspots: [
      { id: "aning", x: 52, y: 31, w: 16, h: 31, label: "书摊阿宁", verb: "交谈", talk: [
        { when: "card:J1", do: [S("aning", "小人书随便看，勿收钞票。落雨天，看书的人都是朋友。")] },
        { when: "item:umbrella", do: [
          S("me", "这是……有人托我带给你的伞。"),
          { take: "umbrella" },
          S("aning", "……咖啡店那个？"),
          S("me", "她说别说是她给的。"),
          S("aning", "（笑了）伊每趟都这样讲。这是第七把了。"),
          S("aning", "阿爷讲，书摊要摆到夜里十点，因为总有人下班晚。"),
          S("aning", "我现在晓得了，也总有人会记得带伞来。"),
          { card: "J1" }
        ] },
        { do: [
          S("aning", "（翻了一页书）……要避雨可以进来。"),
          S("aning", "我每天摆到夜里十点。伞？我老是忘记带。"),
          { set: "aningNeed" }
        ] }
      ] },
      { id: "comics", x: 27, y: 56, w: 30, h: 36, label: "小人书", verb: "查看", talk: [
        { when: "!card:J2", do: [
          S("me", "连环画！封面都卷边了。"),
          S("aning", "都是我阿爷留下来的。老早一分洋钿看一本，坐在小矮凳上，一直看到天黑。"),
          { card: "J2" }
        ] },
        { do: [S("me", "一本《三毛流浪记》，一本《西游记》，还有一本没有封面的。")] }
      ] },
      { id: "bucket", x: 12, y: 57, w: 12, h: 24, label: "接雨的水桶", verb: "聆听", hidden: true, talk: [
        { do: [
          S("radio", "滴答……滴答……滴答……"),
          S("me", "像一只慢慢走的钟。"),
          S("aning", "侬听得见？我阿爷讲，水桶滴满了，就是 99.1 的意思——静安寺那边，有一只钟。"),
          { card: "J3" }
        ] }
      ] }
    ]
  },
  {
    id: "rooftop", name: "天台露天电影", music: "t_yuguang", time: "22:10", weather: "晴 · 星空", mood: "night", amb: "summer", fx: "stars", mode: "hold", need: 2,
    intro: [S("me", "雨停了。爬上一栋老公房的天台——有人在放露天电影！")],
    hotspots: [
      { id: "auntie", x: 16, y: 68, w: 10, h: 29, label: "天台阿姨", verb: "交谈", talk: [
        { when: "!card:K1", do: [
          S("auntie", "新来的？来来来，坐！电扇我拎上来了，西瓜在下面冰着。"),
          { choice: [
            ["我帮阿姨拎西瓜！", [S("auntie", "哦哟，懂事！")]],
            ["阿姨，今天放什么电影？", [S("auntie", "老电影，黑白的，看了几十年了，还是要看。")]]
          ] },
          S("auntie", "西瓜切好了！小囡们，一人一块，吃好再看电影！"),
          S("auntie", "“小囡”就是小孩。侬在阿姨眼里，也是小囡。"),
          { card: "K1" }
        ] },
        { do: [S("auntie", "吃西瓜的辰光勿要讲话，籽要吐到报纸上！")] }
      ] },
      { id: "kids", x: 70, y: 66, w: 25, h: 20, label: "看电影的小孩们", verb: "交谈", talk: [
        { when: "!card:K2", do: [
          S("kid", "嘘——马上到最好看的地方了！"),
          S("me", "你看过这部电影？"),
          S("kid", "看过三遍了。但是跟大家一起看，就像第一遍。"),
          { card: "K2" }
        ] },
        { do: [S("kid", "（嘴里塞满西瓜）唔……唔好看！")] }
      ] },
      { id: "screen", x: 79, y: 35, w: 18, h: 24, label: "银幕", verb: "查看", talk: [
        { when: "!card:K3", do: [
          S("me", "银幕上是黑白的上海，有人在弄堂里唱歌。"),
          S("me", "银幕下面，是彩色的上海，有人在天台上吃西瓜。"),
          { card: "K3" }
        ] },
        { do: [S("me", "电影里的人，好像也在看我们。")] }
      ] },
      { id: "projector", x: 35, y: 17, w: 8, h: 11, label: "放映机", verb: "聆听", hidden: true, talk: [
        { do: [
          { sfx: "projector" },
          S("radio", "咔嗒、咔嗒、咔嗒……"),
          S("signal", "（放映员）我是这一片最后一个会放胶片的人。"),
          S("signal", "胶片转起来的声音，是夏天夜里最好听的虫叫。"),
          S("signal", "侬要是还想听更老的声音，拨到 104.5 试试。武康路那边，秋天来得早。"),
          { card: "K4" }
        ] }
      ] }
    ]
  },
  {
    id: "moon", name: "月下", time: "23:50", weather: "满月", mood: "finale", amb: "night", fx: "moon", mode: "still", need: 1, finale: true,
    intro: [S("me", "快到午夜了。老楼中间，挂着一个很大很圆的月亮。"), S("me", "有个人站在马路中间，抬头看着它。")],
    hotspots: [
      { id: "moonman", x: 45, y: 57, w: 12, h: 43, label: "夜归人", verb: "交谈", talk: [
        { when: "!card:L1", do: [
          S("moonman", "……啊，吓我一跳。你也是来看月亮的？"),
          S("moonman", "我每天夜班回来，都在这条马路上看一眼月亮。"),
          S("moonman", "上海的月亮，是加班的人的，也是睡不着的人的。"),
          S("moonman", "你手里那台收音机……好像在发光？"),
          { card: "L1" }
        ] },
        { do: [S("moonman", "明天见，月亮。明天见，陌生人。")] }
      ] },
      { id: "themoon", x: 43, y: 12, w: 14, h: 24, label: "月亮", verb: "举起收音机", talk: [
        { when: "count<28", do: [
          S("radio", "……沙沙……沙……（指针在晃，但还差一点点）"),
          S("me", "还不够……收音机的耳朵，还没有养好。"),
          { tipCount: 28 }
        ] },
        { do: [
          S("me", "我把收音机举向月亮。"),
          { sfx: "tune" },
          S("radio", "……沙……沙沙……"),
          S("radio", "（指针慢慢停在那个没有刻度的地方）"),
          S("waipo", "……小满，是侬伐？"),
          S("waipo", "外婆晓得，侬总有一天会回来的。所以外婆把想讲的闲话，都存在这台收音机里了。"),
          S("waipo", "上海勿是一幢一幢的房子，是一句一句的闲话。"),
          S("waipo", "阿婆的“早饭吃过伐”，张老伯的嘎讪胡，李师傅的沙沙声，还有江上那一声汽笛……"),
          S("waipo", "侬听见了，就到屋里了。"),
          S("waipo", "困觉去吧，小囡。明朝的上海，还有交关闲话等侬去听。"),
          { card: "L2" },
          { ending: true }
        ] }
      ] }
    ]
  },
  // ---------- 番外电台：用调频旋钮找到 ----------
  {
    id: "paramount", name: "百乐门旧梦", time: "1947", weather: "霓虹", mood: "jazz", amb: "bar", fx: "neon", mode: "loop", need: 1, bonus: true, freq: 90.3,
    intro: [S("radio", "……蓬嚓嚓……（一段很老很老的舞曲）"), S("me", "收音机把我带到了一个霓虹闪烁的年代。")],
    hotspots: [
      { id: "dancers", x: 15, y: 77, w: 50, h: 23, label: "跳舞的人们", verb: "聆听", talk: [
        { when: "!card:M1", do: [S("dancer", "蓬嚓嚓、蓬嚓嚓——小姐，跳舞勿要看脚，要看对方的眼睛。"), S("me", "……周先生说的那支舞，会是这样吗？"), { card: "M1" }] },
        { when: "!card:M2", do: [S("dancer", "头发要梳得苍蝇立勿牢，这叫扎台型！"), { card: "M2" }] },
        { do: [S("dancer", "今夜勿打烊！")] }
      ] },
      { id: "dashijie", x: 3, y: 27, w: 16, h: 20, label: "大世界招牌", verb: "聆听", hidden: true, talk: [
        { do: [S("signal", "进了大世界，哈哈镜里一照，胖子变瘦子，瘦子变胖子！"), { card: "M3" }] }
      ] }
    ]
  },
  {
    id: "jingan", name: "静安寺的春天", time: "春", weather: "樱花", mood: "spring", amb: "temple", fx: "petals", mode: "loop", need: 1, bonus: true, freq: 99.1,
    intro: [S("radio", "……当——（一声很远的钟）"), S("me", "金色的屋顶，被高楼围在中间。樱花在落。")],
    hotspots: [
      { id: "monk", x: 37, y: 69, w: 9, h: 30, label: "师父", verb: "交谈", talk: [
        { when: "!card:N1", do: [S("monk", "施主要许愿？"), S("monk", "许愿勿要贪多，一样就够。多了，菩萨也记勿牢。"), S("me", "那……希望外婆在那边，也有人陪她嘎讪胡。"), { card: "N1" }] },
        { do: [S("monk", "阿弥陀佛。樱花落了明年还开。")] }
      ] },
      { id: "censer", x: 46, y: 73, w: 9, h: 15, label: "香炉", verb: "查看", talk: [
        { when: "!card:N2", do: [S("me", "香烟往上飘，樱花往下落。一个去天上，一个到人间。"), { card: "N2" }] },
        { do: [S("me", "香火的味道，混着一点点樱花香。")] }
      ] },
      { id: "lantern", x: 5, y: 16, w: 8, h: 16, label: "红灯笼", verb: "聆听", hidden: true, talk: [
        { do: [S("signal", "过年的辰光，这里的灯笼会一直亮到正月十五。"), { card: "N3" }] }
      ] }
    ]
  },
  {
    id: "maple", name: "武康路的秋天", time: "秋", weather: "落叶", mood: "autumn", amb: "birds", fx: "maple", mode: "loop", need: 1, bonus: true, freq: 104.5,
    intro: [S("radio", "……沙沙……（落叶的声音）"), S("me", "一条安静的马路。红电话亭，路灯，还有一只橘猫。")],
    hotspots: [
      { id: "orangecat", x: 50, y: 75, w: 10, h: 16, label: "橘猫", verb: "摸摸", talk: [
        { when: "!card:O1", do: [{ sfx: "meow" }, S("me", "武康路的橘猫，每天下午三点准时巡街，比邮差还准。"), { card: "O1" }] },
        { do: [{ sfx: "meow" }, S("me", "它踩着落叶跑远了，一步一个沙沙。")] }
      ] },
      { id: "booth", x: 86, y: 58, w: 13, h: 41, label: "红电话亭", verb: "聆听", talk: [
        { when: "!card:O2", do: [{ sfx: "ring" }, S("booth", "喂？是我呀……我到上海了。"), S("booth", "一切都好，侬勿要担心。这里的人讲话，都老温柔的。"), S("me", "……这个声音，好像很年轻的外婆。"), { card: "O2" }] },
        { do: [S("me", "听筒里只剩下嘟——嘟——的声音。")] }
      ] },
      { id: "lamp", x: 12, y: 8, w: 11, h: 30, label: "路灯", verb: "聆听", hidden: true, talk: [
        { do: [S("me", "秋天的路灯下面，落叶会自己排好队，等扫地的阿姨来。"), { card: "O3" }] }
      ] }
    ]
  }
];

export const MAIN_ROUTE = SCENES.filter((s) => !s.bonus).map((s) => s.id);
export const BONUS = SCENES.filter((s) => s.bonus).map((s) => ({ id: s.id, freq: s.freq, name: s.name }));

// 地图上的位置（百分比），基于生成的像素上海地图
export const MAP_PINS = {
  tianjing: [28, 40], longtang: [18, 56], radio: [30, 69], wutong: [10, 38], bund: [50, 44], riverroad: [54, 75],
  tavern: [15, 21], pearl: [72, 34], rain: [40, 28], bookstall: [34, 15], rooftop: [60, 19], moon: [44, 60]
};
