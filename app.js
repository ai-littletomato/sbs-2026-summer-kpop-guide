const palette = [
  ["#ff4fb5", "#4aa7ff"],
  ["#d8ff35", "#ff9b2f"],
  ["#7ff6d5", "#7a5cff"],
  ["#ff6a3d", "#ffe24f"],
  ["#1f2937", "#ff4fb5"],
  ["#4aa7ff", "#d8ff35"],
];

const artists = [
  {
    id: "picheolin",
    name: "Picheolin",
    korean: "피철인",
    type: "solo",
    rank: 1,
    agency: "SEVENTEEN Dino alter ego",
    hook: "SEVENTEEN 成员 Dino 的角色企划，适合作为开场梗和综艺感入口。",
    intro:
      "Picheolin 是 SEVENTEEN Dino 延伸出的角色型企划，通常带有表演者人格、幽默感和舞台反差。对新观众来说，可以先把他理解成“偶像成员的特别人格舞台”。",
    members: ["Dino"],
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
    members: ["Wonpil"],
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
    members: ["TAEYONG"],
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
    members: ["TEN"],
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
    members: ["Ahn Ji-young"],
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
    members: ["BIBI"],
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
    members: ["YENA"],
    media: ["YENA latest MV", "YENA Smiley official MV"],
  },
  {
    id: "evan",
    name: "EVAN",
    korean: "에반",
    type: "solo",
    rank: 8,
    agency: "Rookie solo",
    hook: "海报尾段新人位，适合关注潜力股。",
    intro:
      "EVAN 在本页暂按新人 solo/特别出席位处理。正式上线前建议用 SBS 官方节目页或所属社资料补齐完整履历。",
    members: ["EVAN"],
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
      "Stray Kids 以 3RACHA 自作体系、重低音编曲和高能群舞闻名。对新观众来说，他们是理解近年 K-Pop 男团“制作人化”和全球化的代表入口。",
    members: ["Bang Chan", "Lee Know", "Changbin", "Hyunjin", "Han", "Felix", "Seungmin", "I.N"],
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
    members: ["Hongjoong", "Seonghwa", "Yunho", "Yeosang", "San", "Mingi", "Wooyoung", "Jongho"],
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
    members: ["Minjae", "Junmin", "Sumin", "Jinsik", "Hyunwoo", "Junghoon", "Seeun", "Yujun", "Hunter", "Yechan"],
    media: ["xikers latest MV", "xikers TRICKY HOUSE official MV"],
  },
  {
    id: "zerobaseone",
    name: "ZEROBASEONE",
    korean: "제로베이스원",
    type: "boy",
    rank: 4,
    agency: "WAKEONE",
    hook: "选秀系高人气限定团，粉丝动员和舞台清爽度都强。",
    intro:
      "ZEROBASEONE 由《Boys Planet》诞生，成员人气和舞台训练基础都很强。风格偏清爽、明亮、青春，也能做更锋利的舞曲。",
    members: ["Sung Han-bin", "Kim Ji-woong", "Zhang Hao", "Seok Matthew", "Kim Tae-rae", "Ricky", "Kim Gyu-vin", "Park Gun-wook", "Han Yu-jin"],
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
    members: ["Shotaro", "Eunseok", "Sungchan", "Wonbin", "Sohee", "Anton"],
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
    members: ["Sion", "Riku", "Yushi", "Jaehee", "Ryo", "Sakuya"],
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
    members: ["Tomoya", "Yu", "Haru", "So Geon", "Seita", "Hyui", "Yuki"],
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
    members: ["Kyehoon", "Amaru", "Donghwa", "Juwang", "Minje", "Keiju", "Donghyeon"],
    media: ["KickFlip latest MV", "KickFlip official performance"],
  },
  {
    id: "axmxp",
    name: "AxMxP",
    korean: "에이엠피",
    type: "boy",
    rank: 9,
    agency: "Rookie band",
    hook: "新人乐队/团体位，适合补充非典型舞曲的舞台口味。",
    intro:
      "AxMxP 在当前资料中更接近新人企划位。资料页保留为可更新结构，上线前可补充成员、公司、出道作品和官方频道。",
    members: ["Ha Yu-joon", "Kim Shin", "Joo Hwan", "Crux"],
    media: ["AxMxP official stage", "AxMxP profile film"],
  },
  {
    id: "alpha-drive-one",
    name: "ALPHA DRIVE ONE",
    korean: "알파드라이브원",
    type: "boy",
    rank: 10,
    agency: "Rookie project",
    hook: "新人/项目团位置，预测会承担发现感。",
    intro:
      "ALPHA DRIVE ONE 属于本次海报中新面孔含量很高的艺人之一。建议把它放在“提前认识潜力股”而非“已完全大众化”的观看区。",
    members: ["Profile pending"],
    media: ["ALPHA DRIVE ONE official video", "ALPHA DRIVE ONE stage"],
  },
  {
    id: "and2ble",
    name: "AND2BLE",
    korean: "앤더블",
    type: "boy",
    rank: 11,
    agency: "Rookie project",
    hook: "新人男团/项目团位，适合后续补官方物料。",
    intro:
      "AND2BLE 当前更适合在资料站中作为待补充新人档案处理。用户可以在演出前通过官方账号确认成员构成和代表作品。",
    members: ["Profile pending"],
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
    members: ["Julie", "Natty", "Belle", "Haneul"],
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
    members: ["Ruka", "Pharita", "Asa", "Ahyeon", "Rami", "Rora", "Chiquita"],
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
    members: ["Sooin", "Gawon", "Anna", "Narin", "Ella"],
    media: ["MEOVV latest MV", "MEOVV official performance"],
  },
  {
    id: "izna",
    name: "izna",
    korean: "이즈나",
    type: "girl",
    rank: 4,
    agency: "WAKEONE",
    hook: "选秀出身新女团，粉丝基础和成长叙事明显。",
    intro:
      "izna 由选秀节目体系延伸而来，适合关注新人女团的成员认知、舞台成长和粉丝动员。",
    members: ["Mai", "Jeemin", "Jiyoon", "Koko", "Sarang", "Jungeun", "Saebi"],
    media: ["izna latest MV", "izna official stage"],
  },
  {
    id: "hearts2hearts",
    name: "Hearts2Hearts",
    korean: "하츠투하츠",
    type: "girl",
    rank: 5,
    agency: "SM",
    hook: "SM 新人女团，适合观察公司审美新方向。",
    intro:
      "Hearts2Hearts 是 SM 新世代女团企划，本次出席会让她们在大量新人中拥有较高可见度。适合重点看视觉概念、编舞队形和成员辨识度。",
    members: ["Carmen", "Jiwoo", "Yuha", "Stella", "Juuna", "A-na", "Ian", "Ye-on"],
    media: ["Hearts2Hearts latest MV", "Hearts2Hearts official performance"],
  },
  {
    id: "allday-project",
    name: "ALLDAY PROJECT",
    korean: "올데이 프로젝트",
    type: "girl",
    rank: 6,
    agency: "THEBLACKLABEL",
    hook: "话题型新人项目，适合看概念包装和跨圈传播。",
    intro:
      "ALLDAY PROJECT 在本页按新人项目团处理，核心看点是公司资源、成员话题和首波作品是否能快速破圈。",
    members: ["Annie", "Tarzzan", "Bailey", "Woochan", "Youngseo"],
    media: ["ALLDAY PROJECT latest MV", "ALLDAY PROJECT official video"],
  },
  {
    id: "baby-dont-cry",
    name: "Baby DONT Cry",
    korean: "베이비 돈 크라이",
    type: "girl",
    rank: 7,
    agency: "Rookie project",
    hook: "新人女团/项目团位，适合做演前预习。",
    intro:
      "Baby DONT Cry 当前公开认知仍偏新人，资料站先保留可扩展档案。建议演出前关注官方账号更新成员照和出道作品。",
    members: ["Profile pending"],
    media: ["Baby DONT Cry official video", "Baby DONT Cry profile"],
  },
  {
    id: "idid",
    name: "IDID",
    korean: "아이딧",
    type: "girl",
    rank: 8,
    agency: "Rookie project",
    hook: "海报尾段新人位，适合发现未来上升组合。",
    intro:
      "IDID 在本页归为新人女团/项目团。由于资料会随出道期快速更新，建议用官方渠道替换成员信息和作品入口。",
    members: ["Profile pending"],
    media: ["IDID official video", "IDID profile"],
  },
];

const history = [
  {
    title: "2024 Summer",
    date: "2024.07.21 · Inspire Arena",
    artists: ["NCT 127", "Stray Kids", "ITZY", "TXT", "ENHYPEN", "aespa", "IVE", "LE SSERAFIM", "NewJeans", "NMIXX", "STAYC", "ZEROBASEONE"],
  },
  {
    title: "2024 Winter",
    date: "2024.12.25 · Inspire Arena",
    artists: ["Key", "NCT 127", "NCT DREAM", "Stray Kids", "(G)I-DLE", "ATEEZ", "ITZY", "TXT", "aespa", "IVE", "NMIXX", "RIIZE", "BABYMONSTER", "NCT WISH"],
  },
  {
    title: "2025 Summer",
    date: "2025.07.26-27 · KINTEX",
    artists: ["NCT DREAM", "IVE", "NMIXX", "ENHYPEN", "aespa", "ATEEZ", "ITZY", "LE SSERAFIM", "TWS", "ILLIT", "BABYMONSTER", "KISS OF LIFE"],
  },
  {
    title: "2025 Winter",
    date: "2025.12.25 · 年末场",
    artists: ["NCT 127", "NCT DREAM", "Stray Kids", "ATEEZ", "TXT", "ENHYPEN", "aespa", "IVE", "LE SSERAFIM", "RIIZE", "ZEROBASEONE", "BABYMONSTER"],
  },
  {
    title: "2026 Summer",
    date: "2026.08.09 · KINTEX",
    artists: artists.map((artist) => artist.name),
  },
];

const predictions = [
  {
    tier: "高概率",
    note: "年末台常客或 2026 热度强",
    names: ["Stray Kids", "NCT DREAM", "RIIZE", "ZEROBASEONE", "BABYMONSTER", "IVE", "aespa", "LE SSERAFIM", "NMIXX"],
  },
  {
    tier: "中高概率",
    note: "若无巡演撞期，适合补齐舞台结构",
    names: ["ATEEZ", "ENHYPEN", "TXT", "KISS OF LIFE", "NCT WISH", "TWS", "ILLIT", "MEOVV", "Hearts2Hearts"],
  },
  {
    tier: "观察位",
    note: "新人曝光、公司推新或特别合作",
    names: ["ALLDAY PROJECT", "KickFlip", "NEXZ", "izna", "xikers", "IDID", "ALPHA DRIVE ONE", "BIBI", "TAEYONG"],
  },
];

const sources = [
  {
    label: "SBS Gayo Daejeon 历届条目",
    url: "https://en.wikipedia.org/wiki/SBS_Gayo_Daejeon",
    note: "用于校对历届场次、日期和公开表演阵容，正式上线前建议再比对 SBS 官方节目页。",
  },
  {
    label: "KINTEX 交通与场馆信息",
    url: "https://www.kintex.com/",
    note: "用于补充场馆定位、首尔出发交通和散场预留时间。",
  },
  {
    label: "YouTube 官方搜索入口",
    url: "https://www.youtube.com/",
    note: "艺人资料页的 MV/舞台入口采用官方关键词搜索，后续可替换为具体官方视频链接和封面。",
  },
  {
    label: "本次海报图",
    url: "assets/sbs-2026-summer-poster.jpg",
    note: "用户提供的阵容图，作为 2026 Summer 页面当前基础信息。",
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

function youtubeSearchUrl(artist, keyword) {
  const query = encodeURIComponent(`${artist} ${keyword} official`);
  return `https://www.youtube.com/results?search_query=${query}`;
}

function renderGrid(type = "solo") {
  const filtered = artists.filter((artist) => artist.type === type).sort((a, b) => a.rank - b.rank);
  grid.innerHTML = filtered
    .map(
      (artist, index) => `
        <button class="artist-card reveal" type="button" data-id="${artist.id}" style="--tone-a:${getTone(index)[0]};--tone-b:${getTone(index)[1]}">
          <div class="artist-visual">
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
  const media = artist.media.slice(0, 8);
  profile.style.setProperty("--tone-a", toneA);
  profile.style.setProperty("--tone-b", toneB);
  profile.classList.remove("reveal");
  profile.offsetHeight;
  profile.classList.add("reveal");
  profile.innerHTML = `
    <div class="profile-hero">
      <p class="eyebrow">${artist.korean} · ${artist.agency}</p>
      <h2>${artist.name}</h2>
      <div class="profile-meta">
        <span class="pill">${artist.type === "solo" ? "个人 / 乐队" : artist.type === "boy" ? "男团" : "女团"}</span>
        <span class="pill">海报排序 #${artist.rank}</span>
        <span class="pill">推荐先看 ${media.length} 个入口</span>
      </div>
    </div>
    <div class="profile-content">
      <div>
        <h3>入门一句话</h3>
        <p>${artist.hook}</p>
        <h3>个人 / 团体介绍</h3>
        <p>${artist.intro}</p>
        <h3>成员</h3>
        <div class="member-grid">
          ${artist.members.map((member) => `<span class="member-chip">${member}</span>`).join("")}
        </div>
      </div>
      <aside>
        <h3>MV 与舞台入口</h3>
        <div class="media-list">
          ${media
            .map(
              (item, mediaIndex) => `
                <a class="media-card" href="${youtubeSearchUrl(artist.name, item)}" target="_blank" rel="noreferrer">
                  <span class="media-thumb">PLAY</span>
                  <span>
                    <strong>${item}</strong>
                    <span>打开 YouTube，优先选择官方频道/节目频道。</span>
                  </span>
                </a>
              `,
            )
            .join("")}
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

function renderPredictions() {
  document.querySelector("#prediction-list").innerHTML = predictions
    .map(
      (tier) => `
        <article class="prediction-tier reveal">
          <h3>${tier.tier}<small>${tier.note}</small></h3>
          <div class="timeline-tags">
            ${tier.names.map((name) => `<span>${name}</span>`).join("")}
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
renderPredictions();
renderSources();
