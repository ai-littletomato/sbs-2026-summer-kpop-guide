const palette = [
  ["#ff4fb5", "#4aa7ff"],
  ["#d8ff35", "#ff9b2f"],
  ["#7ff6d5", "#7a5cff"],
  ["#ff6a3d", "#ffe24f"],
  ["#1f2937", "#ff4fb5"],
  ["#4aa7ff", "#d8ff35"],
];

const memberNameMap = {
  "Sung Han-bin": "成韩彬",
  "Kim Ji-woong": "金地雄",
  "Seok Matthew": "石马修",
  "Kim Tae-rae": "金泰来",
  "Park Gun-wook": "朴乾旭",
  "Zhang Hao": "章昊",
  "Ricky": "RICKY",
  "Kim Gyu-vin": "金奎彬",
  "Han Yu-jin": "韩维辰",
  "Yoo Seung-eon": "刘昇彦",
};

function localCover(id) {
  return `assets/artists/${id}/cover.jpg`;
}

function localMemberImage(artistId, member) {
  return `assets/artists/${artistId}/members/${slugify(member)}.jpg`;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function makeMembers(artistId, names) {
  return names.map((name) => ({
    name,
    cn: memberNameMap[name] || "",
    image: localMemberImage(artistId, name),
  }));
}

function yt(videoId) {
  return {
    url: `https://www.youtube.com/watch?v=${videoId}`,
    thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
  };
}

const artists = [
  {
    id: "picheolin",
    name: "Picheolin",
    korean: "피철인",
    type: "solo",
    rank: 1,
    agency: "SEVENTEEN Dino alter ego",
    hook: "SEVENTEEN Dino 的角色型舞台企划，综艺感和表演反差是重点。",
    intro:
      "Picheolin 来自 SEVENTEEN 成员 Dino 的角色企划，常以夸张人设和舞台反差制造记忆点。它不是传统 solo 档案，更接近大型舞台里的特别角色卡。",
    members: makeMembers("picheolin", ["Dino"]),
    media: ["Picheolin official stage", "SEVENTEEN Dino dance performance"],
  },
  {
    id: "wonpil",
    name: "Wonpil",
    korean: "원필",
    type: "solo",
    rank: 2,
    agency: "DAY6 / JYP",
    hook: "DAY6 主唱键盘手，擅长清亮抒情与乐队情绪线。",
    intro:
      "Wonpil 是 DAY6 的成员之一，solo 作品偏抒情和细腻叙事。拼盘里他的价值在于让整场不只有强舞曲，也有能让观众坐下来听旋律的段落。",
    members: makeMembers("wonpil", ["Wonpil"]),
    media: ["Wonpil solo MV", "DAY6 live performance"],
  },
  {
    id: "taeyong",
    name: "TAEYONG",
    korean: "태용",
    type: "solo",
    rank: 3,
    agency: "NCT / SM",
    hook: "NCT 成员兼 solo 歌手，rap、舞蹈和视觉概念都很强。",
    intro:
      "TAEYONG 是 NCT 成员，也是 SM 男 solo 中个人风格非常鲜明的一位。作品常带实验电子、hip-hop 和强视觉概念，适合关注舞台动作质感与个人表达的观众。",
    members: makeMembers("taeyong", ["TAEYONG"]),
    media: ["TAEYONG latest MV", "TAEYONG TAP official MV", "TAEYONG SHALALA official MV"],
  },
  {
    id: "ten",
    name: "TEN",
    korean: "텐",
    type: "solo",
    rank: 4,
    agency: "NCT / WayV / SM",
    hook: "舞蹈型 solo，线条、律动和视觉概念都很鲜明。",
    intro:
      "TEN 是 NCT/WayV 成员，solo 舞台强调身体控制、时装感和偏暗色的流行编舞。适合关注舞台完成度、镜头表现和个人风格的观众。",
    members: makeMembers("ten", ["TEN"]),
    media: ["TEN latest MV", "TEN Nightwalker official MV", "TEN dance performance"],
  },
  {
    id: "bol4",
    name: "BOL4",
    korean: "볼빨간사춘기",
    type: "solo",
    rank: 5,
    agency: "Shofar",
    hook: "清新女声代表，旋律轻盈，适合夏天场的中段换气。",
    intro:
      "BOL4 以清新、轻快、带一点少女叙事感的歌曲出圈。对于第一次看拼盘的人，她能提供和大编舞男团女团完全不同的听感。",
    members: makeMembers("bol4", ["Ahn Ji-young"]),
    media: ["BOL4 latest MV", "BOL4 Some official MV"],
  },
  {
    id: "bibi",
    name: "BIBI",
    korean: "비비",
    type: "solo",
    rank: 6,
    agency: "Feel Ghood",
    hook: "R&B、hip-hop、另类流行之间自由切换，舞台气质很强。",
    intro:
      "BIBI 的作品常带电影感和坏女孩叙事，唱腔、造型、表达都很有个人标签。她在拼盘里通常承担“风格转换器”的角色。",
    members: makeMembers("bibi", ["BIBI"]),
    media: ["BIBI latest MV", "BIBI Bam Yang Gang official MV", "BIBI live stage"],
  },
  {
    id: "yena",
    name: "YENA",
    korean: "최예나",
    type: "solo",
    rank: 7,
    agency: "Yuehua",
    hook: "明亮能量型女 solo，综艺感和舞台亲和力都高。",
    intro:
      "Choi Yena 以活泼、明快、漫画感的 pop-rock/舞曲路线被熟悉。她的舞台适合不熟 K-Pop 的观众快速建立好感。",
    members: makeMembers("yena", ["YENA"]),
    media: ["YENA latest MV", "YENA Smiley official MV"],
  },
  {
    id: "evan",
    name: "EVAN",
    korean: "에반",
    type: "solo",
    rank: 8,
    agency: "BELIFT LAB",
    hook: "Heeseung 的 solo 名义，主唱底子和舞台脸都很有辨识度。",
    intro:
      "EVAN 是 Lee Hee-seung 使用的 solo 艺名。公开资料显示他从 ENHYPEN 活动后转入个人阶段，声线、舞台中心感和高音表现是最容易被记住的部分。",
    members: makeMembers("evan", ["EVAN"]),
    media: ["EVAN official stage", "EVAN profile video"],
  },
  {
    id: "stray-kids",
    name: "Stray Kids",
    korean: "스트레이 키즈",
    type: "boy",
    rank: 1,
    agency: "JYP",
    hook: "全球巡演级男团，强节奏、自制作和爆发型舞台是核心看点。",
    intro:
      "Stray Kids 以 3RACHA 自作体系、重低音编曲和高能群舞闻名，是理解近年 K-Pop 男团“制作人化”和全球化的高浓度样本。",
    members: makeMembers("stray-kids", ["Bang Chan", "Lee Know", "Changbin", "Hyunjin", "Han", "Felix", "Seungmin", "I.N"]),
    media: ["Stray Kids latest MV", "Stray Kids Chk Chk Boom official MV", "Stray Kids God's Menu MV"],
  },
  {
    id: "ateez",
    name: "ATEEZ",
    korean: "에이티즈",
    type: "boy",
    rank: 2,
    agency: "KQ",
    hook: "强表情管理和叙事型舞台，现场感染力常被夸。",
    intro:
      "ATEEZ 的舞台语言很戏剧化，常用海盗、反乌托邦、狂欢等概念放大表演张力。适合看大场面、看成员眼神和队形变化。",
    members: makeMembers("ateez", ["Hongjoong", "Seonghwa", "Yunho", "Yeosang", "San", "Mingi", "Wooyoung", "Jongho"]),
    media: ["ATEEZ latest MV", "ATEEZ Crazy Form official MV", "ATEEZ live stage"],
  },
  {
    id: "xikers",
    name: "xikers",
    korean: "싸이커스",
    type: "boy",
    rank: 3,
    agency: "KQ",
    hook: "ATEEZ 师弟团，高能、年轻、舞台密度高。",
    intro:
      "xikers 延续 KQ 对男团舞台能量的偏好，音乐更强调年轻、冲撞和速度感。拼盘里适合观察新一代男团的体能和群舞调度。",
    members: makeMembers("xikers", ["Minjae", "Junmin", "Sumin", "Jinsik", "Hyunwoo", "Junghoon", "Seeun", "Yujun", "Hunter", "Yechan"]),
    media: ["xikers latest MV", "xikers TRICKY HOUSE official MV"],
  },
  {
    id: "zerobaseone",
    name: "ZEROBASEONE",
    korean: "제로베이스원",
    type: "boy",
    rank: 4,
    agency: "WAKEONE",
    hook: "《Boys Planet》出身的 5 人体制男团，清爽感和粉丝动员依旧强。",
    intro:
      "ZEROBASEONE 由《Boys Planet》诞生，2026 年转为金地雄、成韩彬、石马修、金泰来、朴乾旭 5 人体制。现在的看点从“限定团全员人气”转向更紧凑的 vocal、表演和团队重塑。",
    members: makeMembers("zerobaseone", ["Kim Ji-woong", "Sung Han-bin", "Seok Matthew", "Kim Tae-rae", "Park Gun-wook"]),
    media: ["ZEROBASEONE latest MV", "ZEROBASEONE In Bloom official MV"],
  },
  {
    id: "riize",
    name: "RIIZE",
    korean: "라이즈",
    type: "boy",
    rank: 5,
    agency: "SM",
    hook: "SM 新世代男团代表，主打青春、成长和舞蹈 groove。",
    intro:
      "RIIZE 的关键词是 real-time odyssey，强调成员成长过程和时髦的流行舞曲。新观众可先看《Get A Guitar》《Boom Boom Bass》理解他们的轻快路线。",
    members: makeMembers("riize", ["Shotaro", "Eunseok", "Sungchan", "Wonbin", "Sohee", "Anton"]),
    media: ["RIIZE latest MV", "RIIZE Get A Guitar official MV", "RIIZE Boom Boom Bass MV"],
  },
  {
    id: "nct-wish",
    name: "NCT WISH",
    korean: "엔시티 위시",
    type: "boy",
    rank: 6,
    agency: "SM",
    hook: "NCT 日本/新世代分队，清爽少年感与 SM 编舞质感并存。",
    intro:
      "NCT WISH 是 NCT 的年轻分队，定位更明亮、清新。适合关注 SM 如何把 NCT 的体系延伸到更年轻的市场。",
    members: makeMembers("nct-wish", ["Sion", "Riku", "Yushi", "Jaehee", "Ryo", "Sakuya"]),
    media: ["NCT WISH latest MV", "NCT WISH WISH official MV"],
  },
  {
    id: "nexz",
    name: "NEXZ",
    korean: "넥스지",
    type: "boy",
    rank: 7,
    agency: "JYP",
    hook: "JYP 日韩男团新势力，主打年轻、速度和清爽表现。",
    intro:
      "NEXZ 通过 JYP 的选拔体系出道，面向日韩与全球市场。舞台通常强调整齐度、年轻感和公司训练风格。",
    members: makeMembers("nexz", ["Tomoya", "Yu", "Haru", "So Geon", "Seita", "Hyui", "Yuki"]),
    media: ["NEXZ latest MV", "NEXZ Ride the Vibe official MV"],
  },
  {
    id: "kickflip",
    name: "KickFlip",
    korean: "킥플립",
    type: "boy",
    rank: 8,
    agency: "JYP",
    hook: "JYP 新人男团位，名字自带滑板和街头运动感。",
    intro:
      "KickFlip 是 JYP 新人男团企划，拼盘出席意味着公司希望在大型舞台上尽快建立大众认知。适合关注新人出道期的舞台完成度。",
    members: makeMembers("kickflip", ["Kyehoon", "Amaru", "Donghwa", "Juwang", "Minje", "Keiju", "Donghyeon"]),
    media: ["KickFlip latest MV", "KickFlip official performance"],
  },
  {
    id: "axmxp",
    name: "AxMxP",
    korean: "에이엠피",
    type: "boy",
    rank: 9,
    agency: "FNC",
    hook: "FNC 四人 band 型新人，摇滚、K-pop 和 hip-hop 混在一起。",
    intro:
      "AxMxP 是 FNC 推出的四人男团/乐队企划，成员配置覆盖主唱、鼓、贝斯等 band 结构。相比纯舞团，他们更像把偶像舞台和乐队现场揉在一起。",
    members: makeMembers("axmxp", ["Ha Yoo-joon", "Cru", "Kim Shin", "Juhwan"]),
    media: ["AxMxP official stage", "AxMxP profile film"],
  },
  {
    id: "alpha-drive-one",
    name: "ALPHA DRIVE ONE",
    korean: "알파드라이브원",
    type: "boy",
    rank: 10,
    agency: "WAKEONE",
    hook: "《Boys II Planet》出身 8 人男团，2026 年出道的新世代大项目。",
    intro:
      "ALPHA DRIVE ONE 由《Boys II Planet》诞生，成员来自选秀节目最终阵容。团名和视觉都走速度、推进、未来感路线，是 WAKEONE 在 2026 年重点押注的新男团。",
    members: makeMembers("alpha-drive-one", ["Junseo", "Arno", "Leo", "Geonwoo", "Sangwon", "Xinlong", "Anxin", "Sanghyeon"]),
    media: ["ALPHA DRIVE ONE official video", "ALPHA DRIVE ONE stage"],
  },
  {
    id: "and2ble",
    name: "AND2BLE",
    korean: "앤더블",
    type: "boy",
    rank: 11,
    agency: "YH",
    hook: "章昊、RICKY、金奎彬、韩维辰再出发，叠加刘昇彦的 5 人新团。",
    intro:
      "AND2BLE 是 YH 在 2026 年推出的五人男团，包含前 ZEROBASEONE 成员章昊、RICKY、金奎彬、韩维辰，以及前 EVNNE 成员刘昇彦。天然自带选秀粉丝盘，舞台会很吃成员辨识度。",
    members: makeMembers("and2ble", ["Zhang Hao", "Yoo Seung-eon", "Ricky", "Kim Gyu-vin", "Han Yu-jin"]),
    media: ["AND2BLE official video", "AND2BLE profile"],
  },
  {
    id: "kiss-of-life",
    name: "KISS OF LIFE",
    korean: "키스오브라이프",
    type: "girl",
    rank: 1,
    agency: "S2",
    hook: "四人女团，擅长 R&B、复古流行和强个人色彩。",
    intro:
      "KISS OF LIFE 以成员个人魅力、成熟声线和复古/性感路线获得关注。新观众可先看《Midas Touch》《Sticky》理解她们的夏季适配度。",
    members: makeMembers("kiss-of-life", ["Julie", "Natty", "Belle", "Haneul"]),
    media: ["KISS OF LIFE latest MV", "KISS OF LIFE Midas Touch official MV", "KISS OF LIFE Sticky MV"],
  },
  {
    id: "babymonster",
    name: "BABYMONSTER",
    korean: "베이비몬스터",
    type: "girl",
    rank: 2,
    agency: "YG",
    hook: "YG 新世代女团，唱跳 rap 综合能力和海外关注度都高。",
    intro:
      "BABYMONSTER 承接 YG 女团的强 vocal、rap 和舞台存在感路线。适合看大公司新人如何在高压舞台上抢镜。",
    members: makeMembers("babymonster", ["Ruka", "Pharita", "Asa", "Ahyeon", "Rami", "Rora", "Chiquita"]),
    media: ["BABYMONSTER latest MV", "BABYMONSTER SHEESH official MV", "BABYMONSTER live stage"],
  },
  {
    id: "meovv",
    name: "MEOVV",
    korean: "미야오",
    type: "girl",
    rank: 3,
    agency: "THEBLACKLABEL",
    hook: "THEBLACKLABEL 女团，时装感和神秘感是记忆点。",
    intro:
      "MEOVV 的关注点在于 THEBLACKLABEL 的制作与视觉体系。她们适合被放在“潮流感、镜头感、新人曝光”的观察维度里。",
    members: makeMembers("meovv", ["Sooin", "Gawon", "Anna", "Narin", "Ella"]),
    media: ["MEOVV latest MV", "MEOVV official performance"],
  },
  {
    id: "izna",
    name: "izna",
    korean: "이즈나",
    type: "girl",
    rank: 4,
    agency: "WAKEONE",
    hook: "《I-LAND 2》出身女团，2025 年经历阵容变化后进入 6 人体制。",
    intro:
      "izna 由《I-LAND 2》诞生，2025 年 Yoon Ji-yoon 离队后以 Mai、Bang Jee-min、Koko、Ryu Sa-rang、Choi Jung-eun、Jeong Sae-bi 6 人活动。风格更强调自信、锋利和 Gen Z 气质。",
    members: makeMembers("izna", ["Mai", "Bang Jee-min", "Koko", "Ryu Sa-rang", "Choi Jung-eun", "Jeong Sae-bi"]),
    media: ["izna latest MV", "izna official stage"],
  },
  {
    id: "hearts2hearts",
    name: "Hearts2Hearts",
    korean: "하츠투하츠",
    type: "girl",
    rank: 5,
    agency: "SM",
    hook: "SM 八人新人女团，明亮、甜感和一点点怪趣味是记忆点。",
    intro:
      "Hearts2Hearts 是 SM 2025 年推出的八人女团，成员配置年轻，视觉和音乐都偏高饱和青春感。她们的优势不是压迫感，而是把清亮旋律、甜味 hook 和整齐队形做得很顺。",
    members: makeMembers("hearts2hearts", ["Carmen", "Jiwoo", "Yuha", "Stella", "Juun", "A-na", "Ian", "Ye-on"]),
    media: ["Hearts2Hearts latest MV", "Hearts2Hearts official performance"],
  },
  {
    id: "allday-project",
    name: "ALLDAY PROJECT",
    korean: "올데이 프로젝트",
    type: "girl",
    rank: 6,
    agency: "THEBLACKLABEL",
    hook: "THEBLACKLABEL 五人混声团，成员背景和时装感自带话题。",
    intro:
      "ALLDAY PROJECT 在本页按新人项目团处理，核心看点是公司资源、成员话题和首波作品是否能快速破圈。",
    members: makeMembers("allday-project", ["Annie", "Tarzzan", "Bailey", "Woochan", "Youngseo"]),
    media: ["ALLDAY PROJECT latest MV", "ALLDAY PROJECT official video"],
  },
  {
    id: "baby-dont-cry",
    name: "Baby DONT Cry",
    korean: "베이비 돈 크라이",
    type: "girl",
    rank: 7,
    agency: "P NATION",
    hook: "P NATION 四人女团，Soyeon 制作线加持，名字和概念都很抓眼。",
    intro:
      "Baby DONT Cry 是 P NATION 的四人女团，成员为 Yihyun、Kumi、Mia、Beni。出道期就带着强烈话题和清晰制作标签，舞台走少女感与叛逆感并存的路线。",
    members: makeMembers("baby-dont-cry", ["Yihyun", "Kumi", "Mia", "Beni"]),
    media: ["Baby DONT Cry official video", "Baby DONT Cry profile"],
  },
  {
    id: "idid",
    name: "IDID",
    korean: "아이딧",
    type: "boy",
    rank: 12,
    agency: "Starship",
    hook: "Starship 七人男团，生存节目出身，名字就带着“I did it”的冲劲。",
    intro:
      "IDID 由 Starship 生存节目《Debut's Plan》推出，2025 年以七人阵容出道。当前成员为 Jang Yong-hoon、Kim Min-jae、Park Won-bin、Chu Yoo-chan、Park Seong-hyeon、Baek Jun-hyuk、Jeong Se-min。",
    members: makeMembers("idid", ["Jang Yong-hoon", "Kim Min-jae", "Park Won-bin", "Chu Yoo-chan", "Park Seong-hyeon", "Baek Jun-hyuk", "Jeong Se-min"]),
    media: ["IDID official video", "IDID profile"],
  },
];

const history = [
  {
    title: "2024 Summer",
    date: "2024.07.21 · Inspire Arena",
    artists: ["Cravity", "Enhypen", "(G)I-DLE", "Illit", "Ive", "Jannabi", "Kiss of Life", "Le Sserafim", "Lee Young-ji", "NCT 127", "NCT Wish", "NewJeans", "Nmixx", "ONF", "STAYC", "Stray Kids", "TXT", "Wooah", "Xikers", "Zerobaseone"],
  },
  {
    title: "2024 Winter",
    date: "2024.12.25 · Inspire Arena",
    artists: ["2NE1", "Aespa", "Ateez", "Babymonster", "BoyNextDoor", "Cravity", "Enhypen", "G-Dragon", "(G)I-DLE", "Illit", "Itzy", "Ive", "Izna", "Key", "Le Sserafim", "Lee Young-ji", "NCT 127", "NCT Dream", "NCT Wish", "NewJeans", "Nexz", "Nmixx", "Riize", "Stray Kids", "TXT", "Treasure", "TWS", "WayV", "Zerobaseone"],
  },
  {
    title: "2025 Summer",
    date: "2025.07.26-27 · KINTEX",
    artists: ["AHOF", "AllDay Project", "Be First", "Doyoung", "Ive", "Itzy", "Izna", "Jannabi", "Meovv", "NCT 127", "NCT Wish", "Nmixx", "Paul Kim", "Uspeer", "Xikers", "Baby Dont Cry", "Babymonster", "Close Your Eyes", "Enhypen", "Hearts2Hearts", "Hitgs", "I-dle", "Idid", "Illit", "KickFlip", "KiiiKiii", "Mark", "NCT Dream", "STAYC", "TXT", "Woodz"],
  },
  {
    title: "2025 Winter",
    date: "2025.12.25 · Inspire Arena",
    artists: ["&Team", "Aespa", "AHOF", "AllDay Project", "Ateez", "AxMxP", "Baby Dont Cry", "Babymonster", "BoyNextDoor", "Cortis", "Enhypen", "Hearts2Hearts", "Hitgs", "Idid", "Illit", "Itzy", "Ive", "Izna", "KickFlip", "KiiiKiii", "Le Sserafim", "Meovv", "NCT Dream", "NCT Wish", "Nexz", "Nmixx", "Riize", "Skinz", "Stray Kids", "Taeyong", "The Boyz", "TXT", "Treasure", "TWS", "U-Know Yunho", "Zerobaseone"],
  },
  {
    title: "2026 Summer",
    date: "2026.08.09 · KINTEX",
    artists: artists.map((artist) => artist.name),
  },
];

const mediaByArtist = {
  picheolin: [{ title: "Picheolin Stage", type: "Stage", year: "2026", channel: "YouTube", ...yt("U5Ppzz8jeI8") }],
  wonpil: [{ title: "A journey", type: "Official MV", year: "2022", channel: "JYP Entertainment", ...yt("5gR8kqgv9oc") }],
  taeyong: [{ title: "TAP", type: "Official MV", year: "2024", channel: "SMTOWN", ...yt("vjGIY_GyAz4") }],
  ten: [{ title: "Nightwalker", type: "Official MV", year: "2024", channel: "SMTOWN", ...yt("ri6FaIavnWA") }],
  bol4: [{ title: "Lips", type: "Official MV", year: "2024", channel: "BOL4", ...yt("TOy0BL_HrO8") }],
  bibi: [{ title: "Bam Yang Gang", type: "Official MV", year: "2024", channel: "BIBI", ...yt("smdmEhkIRVc") }],
  yena: [{ title: "SMILEY", type: "Official MV", year: "2022", channel: "YENA", ...yt("y9kkXTucnLU") }],
  evan: [{ title: "Dial Tragedy", type: "Official MV", year: "2026", channel: "EVAN", ...yt("F6Ix6V2Cx-w") }],
  "stray-kids": [{ title: "Chk Chk Boom", type: "Official MV", year: "2024", channel: "JYP Entertainment", ...yt("0P0aQreFs8w") }],
  ateez: [{ title: "Ice On My Teeth", type: "Official MV", year: "2024", channel: "KQ Entertainment", ...yt("5OflOlcHLb8") }],
  xikers: [{ title: "BREATHE", type: "Official MV", year: "2025", channel: "KQ Entertainment", ...yt("aUMr0Oi1I-E") }],
  zerobaseone: [{ title: "Running to Future", type: "Official MV", year: "2026", channel: "ZEROBASEONE", ...yt("v5_GoNFr5wc") }],
  riize: [{ title: "Boom Boom Bass", type: "Official MV", year: "2024", channel: "SMTOWN", ...yt("78lNnCitcBM") }],
  "nct-wish": [{ title: "poppop", type: "Official MV", year: "2025", channel: "SMTOWN", ...yt("LNETckymbzk") }],
  nexz: [{ title: "Ride the Vibe", type: "Official MV", year: "2024", channel: "JYP Entertainment", ...yt("8SrSOZUuw8Q") }],
  kickflip: [{ title: "Twenty", type: "Official MV", year: "2026", channel: "JYP Entertainment", ...yt("Gt0wRAFpwvg") }],
  axmxp: [{ title: "I Did It", type: "Official MV", year: "2025", channel: "FNC Entertainment", ...yt("p1vNN9UzVvI") }],
  "alpha-drive-one": [{ title: "Freak Alarm", type: "Official MV", year: "2026", channel: "WAKEONE", ...yt("P8VVnopM610") }],
  and2ble: [{ title: "Curiosity", type: "Official MV", year: "2026", channel: "AND2BLE", ...yt("m6kmpiOsLVk") }],
  "kiss-of-life": [{ title: "Sticky", type: "Official MV", year: "2024", channel: "KISS OF LIFE", ...yt("IajeQM00yfE") }],
  babymonster: [{ title: "SHEESH", type: "Official MV", year: "2024", channel: "BABYMONSTER", ...yt("2wA_b6YHjqQ") }],
  meovv: [{ title: "HANDS UP", type: "Official MV", year: "2025", channel: "THEBLACKLABEL", ...yt("sL0pCS6K9bc") }],
  izna: [{ title: "Not Just Pretty", type: "Official MV", year: "2025", channel: "izna", ...yt("2fyFx2u5fbU") }],
  hearts2hearts: [{ title: "Rude!", type: "Official MV", year: "2026", channel: "SMTOWN", ...yt("F7sGJVUrkjQ") }],
  "allday-project": [{ title: "FAMOUS", type: "Official MV", year: "2025", channel: "THEBLACKLABEL", ...yt("VjvzYjU1mY0") }],
  "baby-dont-cry": [{ title: "Bittersweet", type: "Official MV", year: "2026", channel: "P NATION", ...yt("P9q7NoOQHIo") }],
  idid: [{ title: "PUSH BACK", type: "Official MV", year: "2025", channel: "STARSHIP", ...yt("dWZCMV5ZEFk") }],
};

const sources = [
  {
    label: "SBS Gayo Daejeon 历届条目",
    url: "https://en.wikipedia.org/wiki/SBS_Gayo_Daejeon",
    note: "用于校对 2024 Summer、2025 Summer、2025 Winter 等公开场次阵容。",
  },
  {
    label: "KINTEX 交通与场馆信息",
    url: "https://www.kintex.com/",
    note: "用于补充场馆定位、首尔出发交通和散场预留时间。",
  },
  {
    label: "YouTube 官方 MV",
    url: "https://www.youtube.com/",
    note: "视频卡片已改为直达 YouTube 视频，并使用 YouTube 缩略图作为封面。",
  },
  {
    label: "成员资料更新",
    url: "https://en.wikipedia.org/wiki/Zerobaseone",
    note: "ZEROBASEONE 已更新为 2026 年 5 人体制；izna、IDID、AND2BLE 等也按当前公开资料修正。",
  },
];

const grid = document.querySelector("#artist-grid");
const tabs = [...document.querySelectorAll(".tab")];
const profile = document.querySelector("#profile-card");

function getTone(index) {
  return palette[index % palette.length];
}

function applyTone(el, index) {
  const [a, b] = getTone(index);
  el.style.setProperty("--tone-a", a);
  el.style.setProperty("--tone-b", b);
}

function imageFallback(img) {
  const fallback = img.dataset.fallback;
  if (fallback && img.src !== new URL(fallback, window.location.href).href) {
    img.src = fallback;
    return;
  }
  img.closest(".image-shell")?.classList.add("is-missing");
}

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function coverFallback(artist) {
  return mediaByArtist[artist.id]?.[0]?.thumbnail || "assets/sbs-2026-summer-poster.jpg";
}

function renderGrid(type = "solo") {
  const filtered = artists.filter((artist) => artist.type === type).sort((a, b) => a.rank - b.rank);
  grid.innerHTML = filtered
    .map(
      (artist, index) => `
        <button class="artist-card reveal" type="button" data-id="${artist.id}" style="--tone-a:${getTone(index)[0]};--tone-b:${getTone(index)[1]}">
          <div class="artist-visual image-shell">
            <img src="${localCover(artist.id)}" data-fallback="${coverFallback(artist)}" alt="${artist.name} cover" onerror="imageFallback(this)" />
            <span class="fallback-name">${artist.name}</span>
            <span class="artist-rank">#${artist.rank}</span>
          </div>
          <div class="artist-body">
            <h3>${artist.name}</h3>
            <p>${artist.hook}</p>
          </div>
        </button>
      `,
    )
    .join("");

  grid.querySelectorAll(".artist-card").forEach((card) => {
    card.addEventListener("click", () => {
      const selected = artists.find((artist) => artist.id === card.dataset.id);
      renderProfile(selected);
      document.querySelector("#profile").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderProfile(artist) {
  const index = artists.findIndex((item) => item.id === artist.id);
  const [toneA, toneB] = getTone(index);
  const media = (mediaByArtist[artist.id] || []).slice(0, 8);
  profile.style.setProperty("--tone-a", toneA);
  profile.style.setProperty("--tone-b", toneB);
  profile.classList.remove("reveal");
  profile.offsetHeight;
  profile.classList.add("reveal");
  profile.innerHTML = `
    <div class="profile-hero">
      <div class="profile-cover image-shell">
        <img src="${localCover(artist.id)}" data-fallback="${coverFallback(artist)}" alt="${artist.name} cover" onerror="imageFallback(this)" />
        <span class="fallback-name">${artist.name}</span>
      </div>
      <div>
        <p class="eyebrow">${artist.korean} · ${artist.agency}</p>
        <h2>${artist.name}</h2>
        <div class="profile-meta">
          <span class="pill">${artist.type === "solo" ? "个人 / 乐队" : artist.type === "boy" ? "男团" : "女团"}</span>
          <span class="pill">海报排序 #${artist.rank}</span>
          <span class="pill">${media.length ? `${media.length} 个官方视频` : "视频待补"}</span>
        </div>
      </div>
    </div>
    <div class="profile-content">
      <div>
        <h3>基本信息</h3>
        <p>${artist.hook}</p>
        <h3>艺人简介</h3>
        <p>${artist.intro}</p>
        <h3>成员</h3>
        <div class="member-grid">
          ${artist.members
            .map(
              (member) => `
                <span class="member-chip image-shell">
                  <img src="${member.image}" data-fallback="${coverFallback(artist)}" alt="${member.name}" onerror="imageFallback(this)" />
                  <span class="member-initials">${initials(member.name)}</span>
                  <strong>${member.name}</strong>
                  ${member.cn ? `<small>${member.cn}</small>` : ""}
                </span>
              `,
            )
            .join("")}
        </div>
      </div>
      <aside>
        <h3>MV / Stage</h3>
        <div class="media-list">
          ${
            media.length
              ? media
                  .map(
                    (item) => `
                      <a class="media-card" href="${item.url}" target="_blank" rel="noreferrer">
                        <span class="media-thumb image-shell">
                          <img src="${item.thumbnail}" alt="${item.title}" onerror="imageFallback(this)" />
                          <span class="play-mark">PLAY</span>
                        </span>
                        <span>
                          <strong>${item.title}</strong>
                          <span>${item.type} · ${item.year} · ${item.channel}</span>
                        </span>
                      </a>
                    `,
                  )
                  .join("")
              : `<div class="media-empty">官方视频链接待补。建议优先使用官方频道 MV 或 SBS/KBS/Mnet 等节目频道舞台。</div>`
          }
        </div>
      </aside>
    </div>
  `;
}

function renderHistory() {
  document.querySelector("#history-list").innerHTML = history
    .map(
      (item) => `
        <article class="timeline-item reveal">
          <div>
            <div class="timeline-date">${item.title}</div>
            <p>${item.date}</p>
          </div>
          <div class="timeline-tags">
            ${item.artists.map((name) => `<span>${name}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderSources() {
  document.querySelector("#sources-list").innerHTML = sources
    .map(
      (source) => `
        <p><a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>：${source.note}</p>
      `,
    )
    .join("");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      item.classList.toggle("active", item === tab);
      item.setAttribute("aria-selected", item === tab ? "true" : "false");
    });
    renderGrid(tab.dataset.tab);
  });
});

document.querySelector(".ghost-action").addEventListener("click", (event) => {
  event.preventDefault();
  const randomArtist = artists[Math.floor(Math.random() * artists.length)];
  renderProfile(randomArtist);
  document.querySelector("#profile").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#artist-count").textContent = `${artists.length} 组`;
renderGrid("solo");
renderProfile(artists[0]);
renderHistory();
renderSources();
