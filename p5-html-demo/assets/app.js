const assetBase = "../素材图片/";
const editStoreKey = "shimao-p5-html-demo-edits-v1";
const freeEditStoreKey = "shimao-p5-free-edits-v1";
const mediaReplaceMetaKey = "shimao-p5-media-replacements-v1";
const mediaPositionStoreKey = "shimao-p5-media-positions-v1";
const mediaDbName = "shimao-p5-media-db-v1";
const mediaStoreName = "media";

const image = {
  officialA: `${assetBase}cf00a3454b216360c7391b1d3e4ba536.jpg`,
  officialB: `${assetBase}2bb925e5d44fc3a1c57c304bd5a783be.jpg`,
  groupA: `${assetBase}3ecd67b7e741338a6c35fdf3469d86eb.jpg`,
  liveA: `${assetBase}6971f802c9176247f772c780ba42f01f.jpg`,
  liveB: `${assetBase}78c699534006963b1683ab3c6078c6aa.jpg`,
  liveC: `${assetBase}9eb20beee95ceb5da75e3c951d37d215.jpg`,
  liveD: `${assetBase}c0dd22df10d037b0dcba06c569e567d6.jpg`,
  liveE: `${assetBase}f20b98e1bc77cb725a6415513a6ecc3d.jpg`
};

const video = {
  solo1: `${assetBase}5.mp4`,
  solo2: `${assetBase}6.mp4`,
  solo3: `${assetBase}7.mp4`,
  solo4: `${assetBase}8.mp4`,
  group1: `${assetBase}10.mp4`,
  group2: `${assetBase}11.mp4`,
  group3: `${assetBase}12.mp4`,
  group4: `${assetBase}13.mp4`,
  group5: `${assetBase}15.mp4`,
  group6: `${assetBase}17.mp4`
};

const slides = [
  {
    type: "cover",
    kicker: "STAGE 01",
    title: "世茂传媒",
    lead: "让舞台有光，让努力有钱",
    chips: ["男团女团团播", "艺人孵化", "直播运营", "商业化兑现"]
  },
  {
    type: "toc",
    kicker: "MISSION MENU",
    title: "这不是一份介绍，而是一套造星行动手册",
    titleLines: [
      { text: "这不是一份介绍，", tone: "major" },
      { text: "而是一套", tone: "minor", indent: true },
      { text: "造星行动手册", tone: "major" }
    ],
    items: ["我们的故事", "品牌印象", "造星孵化", "团播呈现", "成果展示", "未来展望"]
  },
  {
    type: "statement",
    kicker: "BRAND READ",
    title: "我们不是只做流量，我们在帮有潜力的人站上舞台",
    titleLines: [
      { text: "我们不是只做流量，", tone: "major" },
      { text: "我们在帮有潜力的人", tone: "minor", indent: true },
      { text: "站上舞台", tone: "major" }
    ],
    lead: "世茂传媒专注男团、女团娱乐团播内容的艺人孵化与直播运营。",
    points: ["用内容训练建立舞台表达", "用运营能力放大直播表现", "用商业化路径帮助努力被兑现"]
  },
  {
    type: "manifesto",
    kicker: "MISSION",
    title: "让每一个愿意努力的艺人，都有被看见、被成就、被兑现的机会。",
    titleLines: [
      { text: "让每一个愿意努力的艺人，", tone: "minor" },
      { text: "都有被看见、", tone: "major", indent: true },
      { text: "被成就、被兑现的机会。", tone: "major", indent: true }
    ],
    side: "被看见 / 被成就 / 被兑现"
  },
  {
    type: "target",
    kicker: "VISION LOCK",
    title: "成为娱乐团播行业最会造团、最能成就艺人的传媒公司。",
    titleLines: [
      { text: "成为娱乐团播行业", tone: "minor" },
      { text: "最会造团、", tone: "major" },
      { text: "最能成就艺人的", tone: "minor", indent: true },
      { text: "传媒公司", tone: "major", indent: true }
    ],
    rings: ["造团能力", "艺人成就", "行业心智"]
  },
  {
    type: "values",
    kicker: "RULES",
    title: "我们的战斗准则",
    values: [
      ["成就艺人", "公司存在的意义，不是消耗艺人，而是成就艺人"],
      ["结果为王", "热爱需要被看见，努力需要被兑现"],
      ["专业造星", "用体系培养艺人，而不是靠运气等待爆火"],
      ["团队共赢", "一群人的共同战场，彼此成就"],
      ["长期主义", "不做昙花一现，要做持续被喜欢的艺人"]
    ]
  },
  {
    type: "section",
    kicker: "CHAPTER 02",
    title: "造星孵化",
    lead: "从素人到专业，从普通上镜到舞台人格建立。",
    chips: ["妆造", "发型", "服装", "镜头感", "人设辨识度"]
  },
  {
    type: "compare",
    kicker: "BEFORE / AFTER 01",
    title: "改造样张 01：先让镜头记住这个人",
    titleLines: [
      { text: "改造样张 01：", tone: "minor" },
      { text: "先让镜头", tone: "major" },
      { text: "记住这个人", tone: "major" }
    ],
    lead: "示意版交互。后续替换为真实改造前 / 改造后原图。",
    beforeLabel: "改造前",
    afterLabel: "改造后",
    after: image.liveD,
    notes: ["发型轮廓更利落", "服装风格更聚焦", "镜头气质更明确"]
  },
  {
    type: "splitGallery",
    kicker: "BEFORE / AFTER 02",
    title: "改造进阶：从造型变化到舞台人格变化",
    titleLines: [
      { text: "改造进阶：", tone: "minor" },
      { text: "从造型变化", tone: "major" },
      { text: "到舞台人格变化", tone: "major" }
    ],
    lead: "一组页面承载多张改造后效果，可横向扩展更多案例。",
    images: [image.liveE, image.liveB, image.liveC],
    tags: ["服装强化", "灯光适配", "人设表达"]
  },
  {
    type: "compare",
    kicker: "BEFORE / AFTER 03",
    title: "改造样张 03：把普通上镜变成可记忆的舞台风格",
    titleLines: [
      { text: "改造样张 03：", tone: "minor" },
      { text: "把普通上镜", tone: "major" },
      { text: "变成可记忆的舞台风格", tone: "small" }
    ],
    lead: "保留 A/B 拖拽对比，适合展示妆容、服装、发色、姿态差异。",
    beforeLabel: "改造前",
    afterLabel: "改造后",
    after: image.liveA,
    notes: ["妆面识别度", "服装风格化", "直播画面适配"]
  },
  {
    type: "compareWall",
    kicker: "INCUBATION WALL",
    title: "更多改造案例可以持续扩列",
    lead: "这里建议放 4-6 组 A/B，小图看趋势，大图看细节。",
    items: [
      { label: "男团感", before: "", after: image.liveD },
      { label: "女团感", before: "", after: image.liveA },
      { label: "舞台感", before: "", after: image.liveB },
      { label: "直播感", before: "", after: image.liveE }
    ]
  },
  {
    type: "section",
    kicker: "CHAPTER 03",
    title: "团播效果呈现",
    lead: "从个播画面，到团播舞台；从单点表现，到整体内容。",
    chips: ["官方推荐", "个播画面", "团播舞台", "视频合集", "内容玩法"]
  },
  {
    type: "evidence",
    kicker: "PLATFORM PROOF",
    title: "团播内容曾被抖音官方推荐",
    lead: "两张截图组合成证据页：保留可信截图信息，同时用红框和标题强化重点。",
    images: [
      [image.officialA, "第二十九周案例"],
      [image.officialB, "11 月抖音优秀案例"]
    ]
  },
  {
    type: "videoFeature",
    kicker: "SOLO LIVE 01",
    title: "个播效果：先把单人画面打透",
    lead: "人物状态、妆造、灯光、美颜、背景氛围共同决定停留。",
    media: video.solo1,
    sideImages: [image.liveC, image.liveE],
    points: ["人物更上镜", "直播间更有记忆点", "观众更容易停留"]
  },
  {
    type: "videoGrid",
    kicker: "SOLO LIVE 02",
    title: "个播进阶：用画面建立人设，用镜头承接互动",
    lead: "这里后续可替换为你选中的个播视频。",
    videos: [video.solo2, video.solo3, video.solo4],
    labels: ["妆面", "灯光", "互动"]
  },
  {
    type: "videoFeature",
    kicker: "GROUP LIVE 01",
    title: "团播效果：多人阵容需要统一的舞台完成度",
    lead: "站位、服化、灯光、镜头切换共同决定团播的专业感。",
    media: video.group1,
    sideImages: [image.groupA, image.liveD],
    points: ["阵容更完整", "舞台更统一", "内容更像节目"]
  },
  {
    type: "videoGrid",
    kicker: "GROUP LIVE 02",
    title: "团播进阶：从好看，到有节奏、可传播",
    lead: "建议放队形变化、互动段落、舞台高光片段。",
    videos: [video.group2, video.group3, video.group4],
    labels: ["队形", "互动", "高光"]
  },
  {
    type: "videoMosaic",
    kicker: "VIDEO STAGE",
    title: "视频合集页：4-6 个片段并列展示",
    lead: "后续你提供最终视频文件后，这页作为高密度展示墙。",
    videos: [video.solo1, video.solo2, video.group5, video.group6]
  },
  {
    type: "results",
    kicker: "RESULTS AS PROOF",
    title: "核心业务不靠讲解，靠成果被看见",
    lead: "把妆造调整、肤色优化、美颜调试、画面升级、团播运营融进案例展示。",
    items: [
      ["妆造调整", "让艺人具备更强舞台辨识度"],
      ["肤色优化", "让画面更干净、更适配直播光线"],
      ["美颜调试", "让镜头风格稳定，降低随机性"],
      ["画面升级", "让内容从第一眼开始争取流量"]
    ]
  },
  {
    type: "caseWall",
    kicker: "CASE WALL",
    title: "优秀案例扩展墙",
    lead: "可继续放月度优秀案例、官方推荐、新玩法、主播战绩和团播截图。",
    images: [image.officialA, image.officialB, image.groupA, image.liveA, image.liveB, image.liveC, image.liveD, image.liveE]
  },
  {
    type: "future",
    kicker: "NEXT STAGE",
    title: "未来展望",
    steps: ["让更多有舞台感的年轻人被看见", "帮助更多主播真正赚到钱", "成为娱乐团播领域的造星工厂", "用专业成就每一位站上舞台的人"]
  },
  {
    type: "end",
    kicker: "TO BE CONTINUED",
    title: "世茂传媒",
    lead: "期待与你同行"
  }
];

const state = {
  index: 0,
  editOpen: false,
  pointer: null,
  transitionTimer: null,
  openingTimer: null,
  valueFlipTimers: [],
  caseMarqueeTimer: null,
  caseMarqueeDelayTimer: null,
  navLockUntil: 0,
  pendingNavDelta: 0,
  pendingNavTimer: null,
  selectedFreeEl: null,
  freeDrag: null,
  mediaPan: null,
  mediaTarget: null
};
const deck = document.getElementById("deck");

function safeText(text) {
  return String(text).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[m]));
}

function mediaVideo(src, cls = "", key = "") {
  const videoKey = key || src;
  return `<video class="${cls}" src="${src}" data-media-key="${safeText(videoKey)}" data-media-type="video" muted loop autoplay playsinline controls></video>`;
}

function placeholder(label, key = "") {
  return `<div class="placeholder-portrait replaceable-media" data-media-type="image" data-media-key="${safeText(key)}"><span>${safeText(label)}</span><small>等待替换真实图片</small></div>`;
}

function beforeAfterPanel({ before = "", after, beforeLabel = "改造前", afterLabel = "改造后", className = "compare-card", keyPrefix = "" }) {
  const beforeKey = `${keyPrefix || "ba"}-before`;
  const afterKey = `${keyPrefix || "ba"}-after`;
  const beforeMedia = before
    ? `<img class="ba-img ba-before-img replaceable-media" data-media-type="image" data-media-key="${safeText(beforeKey)}" src="${before}" alt="${safeText(beforeLabel)}">`
    : `<div class="ba-img ba-before">${placeholder(beforeLabel, beforeKey)}</div>`;
  return `
    <div class="${className}" style="--pos:50%" data-compare-card>
      ${beforeMedia}
      <img class="ba-img ba-after replaceable-media" data-media-type="image" data-media-key="${safeText(afterKey)}" src="${after}" alt="${safeText(afterLabel)}">
      <div class="ba-tag before">${safeText(beforeLabel)}</div>
      <div class="ba-tag after">${safeText(afterLabel)}</div>
      <div class="ba-replace-hint ba-before-hint">双击左侧替换${safeText(beforeLabel)}</div>
      <div class="ba-replace-hint ba-after-hint">双击右侧替换${safeText(afterLabel)}</div>
      <input class="ba-slider" type="range" min="0" max="100" value="50" aria-label="Before After 对比滑块">
      <div class="ba-handle"></div>
    </div>
  `;
}

function readEdits() {
  try {
    return JSON.parse(localStorage.getItem(editStoreKey) || "{}");
  } catch {
    return {};
  }
}

function writeEdits(edits) {
  localStorage.setItem(editStoreKey, JSON.stringify(edits));
}

function layoutDefaults(slide) {
  const gridDefaults = {
    toc: [2, 18, 70],
    values: [5, 14, 350],
    splitGallery: [3, 22, 390],
    compareWall: [4, 16, 360],
    videoGrid: [3, 22, 438],
    videoMosaic: [3, 16, 420],
    results: [4, 18, 300],
    caseWall: [8, 12, 438],
    future: [4, 18, 250]
  };
  const [gridCols, gridGap, mediaH] = gridDefaults[slide.type] || [3, 18, 360];
  return {
    titleScale: 1,
    blockX: 0,
    blockY: 0,
    leadScale: 1,
    gridCols,
    gridGap,
    mediaH
  };
}

function getSlideEdit(index) {
  return {
    ...layoutDefaults(slides[index]),
    ...(readEdits()[index] || {})
  };
}

function applySlideEdit(index) {
  const slideEl = document.querySelectorAll(".slide")[index];
  if (!slideEl) return;
  const edit = getSlideEdit(index);
  slideEl.style.setProperty("--edit-title-scale", edit.titleScale);
  slideEl.style.setProperty("--edit-block-x", `${edit.blockX}px`);
  slideEl.style.setProperty("--edit-block-y", `${edit.blockY}px`);
  slideEl.style.setProperty("--edit-lead-scale", edit.leadScale);
  slideEl.style.setProperty("--edit-grid-cols", edit.gridCols);
  slideEl.style.setProperty("--edit-grid-gap", `${edit.gridGap}px`);
  slideEl.style.setProperty("--edit-media-h", `${edit.mediaH}px`);
}

function applyAllEdits() {
  slides.forEach((_, index) => applySlideEdit(index));
}

function titleBlock(slide, extraClass = "") {
  if (!slide.titleLines) return `<h1 class="${extraClass}">${safeText(slide.title)}</h1>`;
  const lines = slide.titleLines.map((line) => {
    const classes = [
      "title-line",
      line.tone ? `is-${line.tone}` : "",
      line.indent ? "is-indent" : "",
      line.mark ? "is-marked" : ""
    ].filter(Boolean).join(" ");
    return `<span class="${classes}">${safeText(line.text)}</span>`;
  }).join("");
  return `<h1 class="title-stack ${extraClass}">${lines}</h1>`;
}

function renderSlide(slide, idx) {
  const no = String(idx + 1).padStart(2, "0");
  const common = `
    <div class="slide-meta">
      <span>${no}</span>
      <b>SHIMAO MEDIA</b>
    </div>
    <div class="kicker">${safeText(slide.kicker || "")}</div>
  `;

  const title = titleBlock(slide);
  const lead = slide.lead ? `<p class="lead">${safeText(slide.lead)}</p>` : "";

  switch (slide.type) {
    case "cover":
      return `
        <section class="slide slide-cover">
          ${common}
          <div class="cover-mark">SM</div>
          <div class="cover-copy">${title}${lead}</div>
          <div class="chip-row">${slide.chips.map((c) => `<span>${safeText(c)}</span>`).join("")}</div>
        </section>`;
    case "toc":
      return `
        <section class="slide slide-toc">
          ${common}${title}
          <div class="toc-list">${slide.items.map((item, i) => `<div><span>${String(i + 1).padStart(2, "0")}</span><strong>${safeText(item)}</strong></div>`).join("")}</div>
        </section>`;
    case "statement":
      return `
        <section class="slide slide-statement">
          ${common}<div class="statement-grid"><div>${title}${lead}</div>
          <div class="proof-list">${slide.points.map((p, i) => `<article><span>${String(i + 1).padStart(2, "0")}</span><b>${safeText(p)}</b></article>`).join("")}</div></div>
        </section>`;
    case "manifesto":
      return `
        <section class="slide slide-manifesto">
          ${common}
          <div class="manifesto-stage" aria-hidden="true">
            <span></span><span></span><span></span><span></span>
          </div>
          <div class="manifesto-wrap">
            <div class="manifesto-frame">${titleBlock(slide, "manifesto-title")}</div>
            <aside>${safeText(slide.side)}</aside>
          </div>
        </section>`;
    case "target":
      return `
        <section class="slide slide-target">
          ${common}<div class="target-layout"><div class="vision-copy">${titleBlock(slide, "vision-title")}</div>
          <div class="target-rings">${slide.rings.map((r, i) => `<span style="--i:${i}">${safeText(r)}</span>`).join("")}</div></div>
        </section>`;
    case "values":
      return `
        <section class="slide slide-values">
          ${common}${title}
          <div class="value-grid">${slide.values.map((v, i) => `
            <article class="value-flip-card" style="--i:${i}" tabindex="0" role="button" aria-pressed="false" aria-label="点击翻转 ${safeText(v[0])}">
              <div class="value-card-inner">
                <div class="value-face value-front">
                  <span>${String(i + 1).padStart(2, "0")}</span>
                  <h2>${safeText(v[0])}</h2>
                  <small>点击解密</small>
                </div>
                <div class="value-face value-back">
                  <span>${String(i + 1).padStart(2, "0")}</span>
                  <h2>${safeText(v[0])}</h2>
                  <p>${safeText(v[1])}</p>
                  <small>再次点击返回</small>
                </div>
              </div>
            </article>`).join("")}</div>
        </section>`;
    case "section":
      return `
        <section class="slide slide-section">
          ${common}<div class="section-no">${no}</div>${title}${lead}
          <div class="chip-row">${slide.chips.map((c) => `<span>${safeText(c)}</span>`).join("")}</div>
        </section>`;
    case "compare":
      return `
        <section class="slide slide-compare">
          ${common}<div class="compare-copy">${title}${lead}<ul>${slide.notes.map((n) => `<li>${safeText(n)}</li>`).join("")}</ul></div>
          ${beforeAfterPanel({ after: slide.after, beforeLabel: slide.beforeLabel, afterLabel: slide.afterLabel, keyPrefix: `slide-${idx + 1}-ba` })}
        </section>`;
    case "splitGallery":
      return `
        <section class="slide slide-split-gallery">
          ${common}<div class="gallery-copy">${title}${lead}</div>
          <div class="slash-gallery">${slide.images.map((src, i) => `<figure class="hover-pop" data-src="${src}" data-caption="${safeText(slide.tags[i])}"><img src="${src}" alt="${safeText(slide.tags[i])}"><figcaption>${safeText(slide.tags[i])}</figcaption></figure>`).join("")}</div>
        </section>`;
    case "compareWall":
      return `
        <section class="slide slide-compare-wall">
          ${common}<div class="wide-copy">${title}${lead}</div>
          <div class="mini-compare-grid">${slide.items.map((item, i) => `<article>${beforeAfterPanel({ before: item.before, after: item.after, className: "mini-ba-card", keyPrefix: `slide-${idx + 1}-ba-${i + 1}` })}<strong>${safeText(item.label)}</strong></article>`).join("")}</div>
        </section>`;
    case "evidence":
      return `
        <section class="slide slide-evidence">
          ${common}<div class="evidence-copy">${title}${lead}</div>
          <div class="evidence-grid">${slide.images.map((item) => `<figure><img src="${item[0]}" alt="${safeText(item[1])}"><figcaption>${safeText(item[1])}</figcaption></figure>`).join("")}</div>
        </section>`;
    case "videoFeature":
      return `
        <section class="slide slide-video-feature">
          ${common}<div class="video-copy">${title}${lead}<div class="point-stack">${slide.points.map((p) => `<span>${safeText(p)}</span>`).join("")}</div></div>
          <div class="phone-video">${mediaVideo(slide.media, "", `slide-${idx + 1}-main-video`)}</div>
          <div class="side-strip">${slide.sideImages.map((src) => `<img src="${src}" alt="">`).join("")}</div>
        </section>`;
    case "videoGrid":
      return `
        <section class="slide slide-video-grid">
          ${common}<div class="wide-copy">${title}${lead}</div>
          <div class="video-grid">${slide.videos.map((src, i) => `<figure>${mediaVideo(src, "", `slide-${idx + 1}-video-${i + 1}`)}<figcaption>${safeText(slide.labels[i])}</figcaption></figure>`).join("")}</div>
        </section>`;
    case "videoMosaic":
      return `
        <section class="slide slide-video-mosaic">
          ${common}<div class="wide-copy">${title}${lead}</div>
          <div class="mosaic">${slide.videos.map((src, i) => `<figure class="m${i + 1}">${mediaVideo(src, "", `slide-${idx + 1}-video-${i + 1}`)}<figcaption>VIDEO ${String(i + 1).padStart(2, "0")}</figcaption></figure>`).join("")}</div>
        </section>`;
    case "results":
      return `
        <section class="slide slide-results">
          ${common}<div class="results-copy">${title}${lead}</div>
          <div class="result-lanes">${slide.items.map((item, i) => `<article><span>${String(i + 1).padStart(2, "0")}</span><h2>${safeText(item[0])}</h2><p>${safeText(item[1])}</p></article>`).join("")}</div>
        </section>`;
    case "caseWall":
      return `
        <section class="slide slide-case-wall">
          ${common}<div class="wide-copy">${title}${lead}</div>
          <div class="case-grid">${slide.images.map((src, i) => `<figure><img src="${src}" alt=""><figcaption>CASE ${String(i + 1).padStart(2, "0")}</figcaption></figure>`).join("")}</div>
        </section>`;
    case "future":
      return `
        <section class="slide slide-future">
          ${common}${title}
          <div class="future-track">${slide.steps.map((s, i) => `<article><span>${String(i + 1).padStart(2, "0")}</span><strong>${safeText(s)}</strong></article>`).join("")}</div>
        </section>`;
    case "end":
      return `
        <section class="slide slide-end">
          ${common}<div class="end-flash" aria-hidden="true"></div><div class="end-mark">SM</div><div class="end-scene"><h1 data-cut="${safeText(slide.title)}">${safeText(slide.title)}</h1>${lead}</div>
        </section>`;
    default:
      return `<section class="slide">${common}${title}${lead}</section>`;
  }
}

function render() {
  deck.innerHTML = `
    <div class="slide-frame">
      ${slides.map(renderSlide).join("")}
      <div class="opening-glitch" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <b>SHIMAO MEDIA</b>
      </div>
    </div>
    <nav class="deck-nav">
      <a href="./index.html">选择版本</a>
      <button type="button" data-dir="-1">上一页</button>
      <span><b id="pageNow">01</b> / ${String(slides.length).padStart(2, "0")}</span>
      <button type="button" data-dir="1">下一页</button>
    </nav>
    <button class="edit-fab" type="button" data-edit-toggle>编辑</button>
    <input type="file" accept="image/*,video/*" data-media-picker hidden>
    <aside class="edit-panel" data-edit-panel hidden>
      <header>
        <strong>自由编辑当前页</strong>
        <button type="button" data-edit-toggle>关闭</button>
      </header>
      <p class="edit-help">点击任意标题、段落、图片块选中；拖动改变位置；双击文字直接改字；双击图片或视频替换本地文件；A/B 对比图左半区替换改造前、右半区替换改造后；按住图片上下拖动可调整构图；方向键微调位置，+ / - 调整大小。</p>
      <div class="selected-readout" data-free-selected>未选中对象</div>
      <div class="edit-actions">
        <button type="button" data-free-action="smaller">缩小</button>
        <button type="button" data-free-action="larger">放大</button>
        <button type="button" data-free-action="resetSelected">重置对象</button>
        <button type="button" data-free-action="resetPage">重置本页</button>
        <button type="button" data-edit-export>导出配置</button>
      </div>
      <textarea data-edit-output readonly placeholder="导出的配置会显示在这里"></textarea>
    </aside>
    <div class="hover-preview" aria-hidden="true">
      <div class="hover-preview-bg"></div>
      <figure>
        <img src="" alt="">
        <video src="" controls playsinline></video>
        <figcaption></figcaption>
      </figure>
    </div>
    <div class="progress"><span></span></div>
  `;
  bind();
  prepareFreeEditables();
  prepareReplaceableMedia();
  applyAllEdits();
  applyAllFreeEdits();
  bindMediaReplacing();
  applyMediaReplacements();
  bindValueFlips();
  bindMediaPreview();
  applyMediaPositions();
  bindMediaPanning();
  const requested = Number(new URLSearchParams(window.location.search).get("slide"));
  if (new URLSearchParams(window.location.search).get("edit") === "1") toggleEditPanel(true);
  show(Number.isFinite(requested) && requested > 0 ? requested - 1 : 0);
}

function show(next) {
  const nextIndex = Math.max(0, Math.min(slides.length - 1, next));
  const currentIndex = state.index;
  const firstRender = !document.querySelector(".slide.active");
  if (!firstRender && nextIndex === currentIndex) return;
  selectFreeEl(null);
  const direction = firstRender ? 1 : Math.sign(nextIndex - currentIndex) || 1;
  const slideEls = Array.from(document.querySelectorAll(".slide"));
  const currentSlide = slideEls[currentIndex];
  const nextSlide = slideEls[nextIndex];
  window.clearTimeout(state.transitionTimer);
  hideHoverPreview();
  if (firstRender && nextIndex === 0) {
    playOpeningGlitch();
  }
  deck.classList.toggle("is-forward", direction > 0);
  deck.classList.toggle("is-back", direction < 0);
  slideEls.forEach((slide) => {
    slide.classList.remove("is-entering", "is-leaving", "is-playing", "leave-forward", "leave-back");
  });
  if (firstRender) {
    slideEls.forEach((slide, i) => slide.classList.toggle("active", i === nextIndex));
    nextSlide.classList.add("is-playing");
  } else {
    currentSlide.classList.add("is-leaving", direction > 0 ? "leave-forward" : "leave-back");
    nextSlide.classList.add("active", "is-entering", "is-playing");
    state.transitionTimer = window.setTimeout(() => {
      currentSlide.classList.remove("active", "is-leaving", "leave-forward", "leave-back");
      nextSlide.classList.remove("is-entering");
    }, 120);
  }
  state.index = nextIndex;
  document.getElementById("pageNow").textContent = String(state.index + 1).padStart(2, "0");
  document.querySelector(".progress span").style.width = `${((state.index + 1) / slides.length) * 100}%`;
  syncEditPanel();
  startCaseMarquee();
}

function clearFxClasses() {
  deck.classList.remove(
    "is-transitioning",
    "is-opening",
    "fx-forward",
    "fx-back",
    "fx-shake",
    "fx-blackout",
    "fx-horror"
  );
}

function playOpeningGlitch() {
  window.clearTimeout(state.openingTimer);
  clearFxClasses();
  void deck.offsetWidth;
  deck.classList.add("is-opening");
  state.openingTimer = window.setTimeout(() => deck.classList.remove("is-opening"), 1280);
}

function navigate(delta, options = {}) {
  const direction = Math.sign(delta);
  if (!direction) return;
  const now = performance.now();
  if (!options.force && now < state.navLockUntil) {
    state.pendingNavDelta = direction;
    window.clearTimeout(state.pendingNavTimer);
    state.pendingNavTimer = window.setTimeout(() => {
      const pending = state.pendingNavDelta;
      state.pendingNavDelta = 0;
      if (pending) navigate(pending, { force: true });
    }, Math.max(40, state.navLockUntil - now));
    return;
  }
  state.navLockUntil = now + 360;
  state.pendingNavDelta = 0;
  show(state.index + direction);
}

function bind() {
  document.querySelectorAll("[data-dir]").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      navigate(Number(btn.dataset.dir), { force: true });
    });
  });
  document.querySelectorAll(".compare-card, .mini-ba-card").forEach((card) => {
    const slider = card.querySelector(".ba-slider");
    slider.addEventListener("input", () => card.style.setProperty("--pos", `${slider.value}%`));
    slider.addEventListener("pointerdown", () => card.classList.add("dragging"));
    slider.addEventListener("pointerup", () => card.classList.remove("dragging"));
  });
  document.querySelectorAll(".hover-pop").forEach((figure) => {
    figure.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!state.editOpen) showMediaPreview(figure.querySelector("img"), figure.dataset.caption || "");
    });
  });
  const preview = document.querySelector(".hover-preview");
  preview.addEventListener("click", (event) => {
    if (!event.target.closest("figure")) hideHoverPreview();
  });
  preview.querySelector("figure").addEventListener("click", (event) => event.stopPropagation());
  bindSlideGestures();
  document.querySelectorAll("[data-edit-toggle]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleEditPanel();
    });
  });
  document.querySelectorAll("[data-free-action]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      runFreeAction(button.dataset.freeAction);
    });
  });
  document.querySelector("[data-edit-export]").addEventListener("click", exportEdits);
  bindFreeEditing();
}

function isInteractiveTarget(target, mode = "pointer") {
  if (!target?.closest) return false;
  const control = target.closest("button, a, input, textarea, .edit-panel, .hover-preview");
  if (control) return true;
  if (mode === "wheel") return false;
  if (target.closest("video, .compare-card, .mini-ba-card, .hover-pop, .value-flip-card")) return true;
  return state.editOpen && Boolean(target.closest(".free-editable"));
}

function bindSlideGestures() {
  const frame = document.querySelector(".slide-frame");
  const canNavigateFrom = (target) => !state.editOpen && !isInteractiveTarget(target);
  frame.addEventListener("pointerdown", (event) => {
    if (!canNavigateFrom(event.target)) return;
    state.pointer = {
      x: event.clientX,
      y: event.clientY,
      moved: false,
      time: Date.now(),
      id: event.pointerId
    };
    frame.setPointerCapture?.(event.pointerId);
  });
  frame.addEventListener("pointermove", (event) => {
    if (!state.pointer) return;
    const dx = event.clientX - state.pointer.x;
    const dy = event.clientY - state.pointer.y;
    if (Math.hypot(dx, dy) > 10) state.pointer.moved = true;
  });
  frame.addEventListener("pointerup", (event) => {
    if (!state.pointer) return;
    const dx = event.clientX - state.pointer.x;
    const dy = event.clientY - state.pointer.y;
    const rect = frame.getBoundingClientRect();
    const isSwipe = Math.abs(dx) > 52 && Math.abs(dx) > Math.abs(dy) * 1.25;
    const isTap = !state.pointer.moved && Math.abs(dx) < 8 && Math.abs(dy) < 8 && event.button === 0;
    if (isSwipe) {
      navigate(dx < 0 ? 1 : -1);
    } else if (isTap) {
      navigate(event.clientX > rect.left + rect.width / 2 ? 1 : -1);
    }
    state.pointer = null;
  });
  frame.addEventListener("pointercancel", () => {
    state.pointer = null;
  });
  frame.addEventListener("mousedown", (event) => {
    if (event.button === 3 || event.button === 4) {
      event.preventDefault();
      navigate(event.button === 4 ? 1 : -1, { force: true });
    }
  });
  frame.addEventListener("auxclick", (event) => {
    if (event.button === 3 || event.button === 4) {
      event.preventDefault();
      navigate(event.button === 4 ? 1 : -1, { force: true });
    }
  });
  let wheelStamp = 0;
  let wheelAccum = 0;
  frame.addEventListener("wheel", (event) => {
    if (state.editOpen) return;
    if (isInteractiveTarget(event.target, "wheel")) return;
    const primaryDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (Math.abs(primaryDelta) < 2) return;
    event.preventDefault();
    const now = Date.now();
    if (now - wheelStamp < 360) return;
    wheelAccum += primaryDelta;
    if (Math.abs(wheelAccum) < 48) return;
    const direction = wheelAccum > 0 ? 1 : -1;
    wheelAccum = 0;
    wheelStamp = now;
    navigate(direction);
  }, { passive: false });
}

function readFreeEdits() {
  try {
    return JSON.parse(localStorage.getItem(freeEditStoreKey) || "{}");
  } catch {
    return {};
  }
}

function writeFreeEdits(edits) {
  localStorage.setItem(freeEditStoreKey, JSON.stringify(edits));
}

function prepareFreeEditables() {
  document.querySelectorAll(".slide").forEach((slideEl, slideIndex) => {
    const targets = slideEl.querySelectorAll([
      ".title-line",
      "h1:not(.title-stack)",
      ".lead",
      ".toc-list div",
      ".proof-list article",
      ".value-grid article",
      ".compare-copy li",
      ".slash-gallery figure",
      ".mini-compare-grid article",
      ".evidence-grid figure",
      ".video-copy",
      ".wide-copy",
      ".gallery-copy",
      ".results-copy",
      ".result-lanes article",
      ".future-track article",
      ".case-grid figure",
      ".phone-video",
      ".video-grid figure",
      ".mosaic figure",
      ".side-strip img"
    ].join(","));
    targets.forEach((el, itemIndex) => {
      el.classList.add("free-editable");
      el.dataset.freeId = `s${slideIndex + 1}-${itemIndex + 1}`;
      el.dataset.freeName = getFreeName(el, slideIndex, itemIndex);
      if (isFreeTextTarget(el)) el.dataset.freeText = "1";
    });
  });
}

function getFreeName(el, slideIndex, itemIndex) {
  const text = el.textContent.trim().replace(/\s+/g, " ").slice(0, 14);
  if (el.matches(".phone-video, .video-grid figure, .mosaic figure") || el.querySelector("video")) return `第 ${slideIndex + 1} 页 · 视频 ${itemIndex + 1}`;
  if (text) return `第 ${slideIndex + 1} 页 · ${text}`;
  if (el.matches("figure")) return `第 ${slideIndex + 1} 页 · 图片 ${itemIndex + 1}`;
  if (el.matches("img")) return `第 ${slideIndex + 1} 页 · 图片`;
  return `第 ${slideIndex + 1} 页 · 对象 ${itemIndex + 1}`;
}

function isFreeTextTarget(el) {
  return el.matches(".title-line, h1, .lead, .toc-list div, .proof-list article, .compare-copy li, .video-copy, .wide-copy, .gallery-copy, .results-copy, .result-lanes article, .future-track article");
}

function applyAllFreeEdits() {
  document.querySelectorAll(".free-editable").forEach(applyFreeEdit);
}

function applyFreeEdit(el) {
  const edit = readFreeEdits()[el.dataset.freeId];
  if (!edit) {
    el.classList.remove("is-free-custom");
    el.style.removeProperty("--free-x");
    el.style.removeProperty("--free-y");
    el.style.removeProperty("--free-scale");
    return;
  }
  el.classList.add("is-free-custom");
  el.style.setProperty("--free-x", `${edit.x || 0}px`);
  el.style.setProperty("--free-y", `${edit.y || 0}px`);
  el.style.setProperty("--free-scale", edit.scale || 1);
  if (edit.html && el.dataset.freeText === "1" && el.innerHTML !== edit.html) {
    el.innerHTML = edit.html;
  }
}

function getFreeEdit(el) {
  const edits = readFreeEdits();
  return {
    x: 0,
    y: 0,
    scale: 1,
    ...(edits[el.dataset.freeId] || {})
  };
}

function saveFreeEdit(el, patch) {
  const edits = readFreeEdits();
  edits[el.dataset.freeId] = {
    ...getFreeEdit(el),
    ...patch
  };
  writeFreeEdits(edits);
  applyFreeEdit(el);
}

function bindFreeEditing() {
  document.addEventListener("pointerdown", (event) => {
    if (!state.editOpen) return;
    if (event.target.closest(".ba-slider")) return;
    const target = event.target.closest(".free-editable");
    if (!target || !target.closest(".slide.active")) {
      if (!event.target.closest(".edit-panel")) selectFreeEl(null);
      return;
    }
    if (target.isContentEditable || event.detail > 1) return;
    event.preventDefault();
    event.stopPropagation();
    selectFreeEl(target);
    const edit = getFreeEdit(target);
    state.freeDrag = {
      el: target,
      id: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      x: edit.x,
      y: edit.y
    };
    target.setPointerCapture?.(event.pointerId);
  });

  document.addEventListener("pointermove", (event) => {
    if (!state.freeDrag) return;
    const dx = event.clientX - state.freeDrag.startX;
    const dy = event.clientY - state.freeDrag.startY;
    saveFreeEdit(state.freeDrag.el, {
      x: state.freeDrag.x + dx,
      y: state.freeDrag.y + dy
    });
  });

  document.addEventListener("pointerup", () => {
    state.freeDrag = null;
  });

  document.addEventListener("dblclick", (event) => {
    if (!state.editOpen) return;
    const target = event.target.closest(".free-editable[data-free-text='1']");
    if (!target || !target.closest(".slide.active")) return;
    event.preventDefault();
    event.stopPropagation();
    selectFreeEl(target);
    startTextEditing(target);
  });

  document.addEventListener("input", (event) => {
    const target = event.target.closest(".free-editable[data-free-text='1']");
    if (!target || !target.isContentEditable) return;
    saveFreeEdit(target, { html: target.innerHTML });
  });

  document.addEventListener("blur", (event) => {
    const target = event.target.closest?.(".free-editable[data-free-text='1']");
    if (!target) return;
    target.contentEditable = "false";
    target.classList.remove("is-text-editing");
    saveFreeEdit(target, { html: target.innerHTML });
  }, true);
}

function readMediaMeta() {
  try {
    return JSON.parse(localStorage.getItem(mediaReplaceMetaKey) || "{}");
  } catch {
    return {};
  }
}

function writeMediaMeta(meta) {
  localStorage.setItem(mediaReplaceMetaKey, JSON.stringify(meta));
}

function readMediaPositions() {
  try {
    return JSON.parse(localStorage.getItem(mediaPositionStoreKey) || "{}");
  } catch {
    return {};
  }
}

function writeMediaPositions(positions) {
  localStorage.setItem(mediaPositionStoreKey, JSON.stringify(positions));
}

function getMediaPosition(el) {
  const key = el?.dataset?.mediaKey;
  return {
    y: 50,
    ...((key && readMediaPositions()[key]) || {})
  };
}

function setMediaPosition(el, y, save = true) {
  if (!el?.dataset?.mediaKey) return;
  const nextY = Math.max(0, Math.min(100, Number(y)));
  el.style.setProperty("--media-pos-y", `${nextY}%`);
  if (el.classList.contains("placeholder-portrait")) {
    el.style.backgroundPosition = `center ${nextY}%`;
  }
  if (!save) return;
  const positions = readMediaPositions();
  positions[el.dataset.mediaKey] = { y: nextY };
  writeMediaPositions(positions);
}

function applyMediaPosition(el) {
  setMediaPosition(el, getMediaPosition(el).y, false);
}

function applyMediaPositions() {
  document.querySelectorAll(".replaceable-media").forEach(applyMediaPosition);
}

function openMediaDb() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error("当前浏览器不支持 IndexedDB，替换素材只能临时预览。"));
      return;
    }
    const request = indexedDB.open(mediaDbName, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(mediaStoreName)) db.createObjectStore(mediaStoreName);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function putMediaBlob(key, file) {
  const db = await openMediaDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(mediaStoreName, "readwrite");
    tx.objectStore(mediaStoreName).put(file, key);
    tx.oncomplete = () => {
      db.close();
      resolve();
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error);
    };
  });
}

async function getMediaBlob(key) {
  const db = await openMediaDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(mediaStoreName, "readonly");
    const request = tx.objectStore(mediaStoreName).get(key);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
    tx.oncomplete = () => db.close();
  });
}

function prepareReplaceableMedia() {
  document.querySelectorAll(".slide").forEach((slideEl, slideIndex) => {
    const imgs = Array.from(slideEl.querySelectorAll("img, .placeholder-portrait.replaceable-media"));
    imgs.forEach((img, imageIndex) => {
      if (!img.dataset.mediaKey) img.dataset.mediaKey = `slide-${slideIndex + 1}-image-${imageIndex + 1}`;
      img.dataset.mediaType = "image";
      img.classList.add("replaceable-media");
      applyMediaPosition(img);
    });
    const videos = Array.from(slideEl.querySelectorAll("video"));
    videos.forEach((videoEl, videoIndex) => {
      if (!videoEl.dataset.mediaKey) videoEl.dataset.mediaKey = `slide-${slideIndex + 1}-video-${videoIndex + 1}`;
      videoEl.dataset.mediaType = "video";
      videoEl.classList.add("replaceable-media");
      applyMediaPosition(videoEl);
    });
  });
}

function setMediaSource(el, blob, name = "") {
  if (el.dataset.objectUrl) URL.revokeObjectURL(el.dataset.objectUrl);
  const url = URL.createObjectURL(blob);
  el.dataset.objectUrl = url;
  el.dataset.localName = name;
  if (el.tagName.toLowerCase() === "video") {
    el.src = url;
    el.load();
    el.play().catch(() => {});
  } else if (el.classList.contains("placeholder-portrait")) {
    el.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.08), rgba(0,0,0,0.08)), url("${url}")`;
    el.style.backgroundSize = "cover";
    el.innerHTML = "";
    el.dataset.replacedSrc = url;
  } else {
    el.src = url;
    const pop = el.closest(".hover-pop");
    if (pop) pop.dataset.src = url;
  }
  applyMediaPosition(el);
}

async function applyMediaReplacements() {
  const meta = readMediaMeta();
  const mediaEls = Array.from(document.querySelectorAll(".replaceable-media"));
  for (const el of mediaEls) {
    const key = el.dataset.mediaKey;
    if (!key || !meta[key]) continue;
    try {
      const blob = await getMediaBlob(key);
      if (blob) setMediaSource(el, blob, meta[key].name || "");
    } catch (error) {
      console.warn("素材恢复失败：", key, error);
    }
  }
}

function getCompareMediaTarget(card, clientX) {
  const before = card.querySelector(".ba-before-img, .ba-before .placeholder-portrait.replaceable-media");
  const after = card.querySelector(".ba-after.replaceable-media");
  if (!before && !after) return null;
  if (typeof clientX !== "number") return after || before;
  const rect = card.getBoundingClientRect();
  const ratio = rect.width ? (clientX - rect.left) / rect.width : 0.5;
  return ratio < 0.5 ? before || after : after || before;
}

function getReplaceTarget(eventOrTarget) {
  const eventTarget = eventOrTarget?.target || eventOrTarget;
  const clientX = typeof eventOrTarget?.clientX === "number" ? eventOrTarget.clientX : null;
  if (!eventTarget?.closest) return null;
  const compareCard = eventTarget.closest(".compare-card, .mini-ba-card");
  if (compareCard) return getCompareMediaTarget(compareCard, clientX);
  const media = eventTarget.closest("img, video, .placeholder-portrait.replaceable-media");
  if (media) return media;
  const container = eventTarget.closest(".phone-video, .video-grid figure, .mosaic figure, .case-grid figure, .evidence-grid figure, .slash-gallery figure, .side-strip img, .compare-card, .mini-ba-card");
  if (!container) return null;
  return container.matches("img, video, .placeholder-portrait") ? container : container.querySelector("video, img, .placeholder-portrait.replaceable-media");
}

function bindMediaReplacing() {
  const picker = document.querySelector("[data-media-picker]");
  if (!picker) return;
  document.addEventListener("dblclick", (event) => {
    if (!state.editOpen) return;
    const target = getReplaceTarget(event);
    if (!target || !target.closest(".slide.active")) return;
    event.preventDefault();
    event.stopPropagation();
    const type = target.tagName.toLowerCase() === "video" ? "video" : "image";
    state.mediaTarget = target;
    picker.accept = type === "video" ? "video/*" : "image/*";
    picker.value = "";
    picker.click();
  }, true);

  picker.addEventListener("change", async () => {
    const file = picker.files?.[0];
    const target = state.mediaTarget;
    if (!file || !target) return;
    const type = target.tagName.toLowerCase() === "video" ? "video" : "image";
    if (type === "video" && !file.type.startsWith("video/")) {
      alert("请选择视频文件。");
      return;
    }
    if (type === "image" && !file.type.startsWith("image/")) {
      alert("请选择图片文件。");
      return;
    }
    const key = target.dataset.mediaKey;
    setMediaSource(target, file, file.name);
    const meta = readMediaMeta();
    meta[key] = {
      name: file.name,
      type: file.type,
      size: file.size,
      kind: type,
      updatedAt: new Date().toISOString()
    };
    writeMediaMeta(meta);
    try {
      await putMediaBlob(key, file);
    } catch (error) {
      console.warn("素材保存失败，仅当前页面临时可见：", error);
      alert("素材已替换，但浏览器未能长期保存这个文件；如果刷新后丢失，请重新选择一次。");
    }
  });
}

function clearValueFlipTimers() {
  state.valueFlipTimers.forEach((timer) => window.clearTimeout(timer));
  state.valueFlipTimers = [];
}

function runValueFlipSequence(card) {
  const cards = Array.from(card.closest(".value-grid")?.querySelectorAll(".value-flip-card") || []);
  if (!cards.length) return;
  clearValueFlipTimers();
  cards.forEach((item) => item.classList.remove("is-flip-kick"));
  const shouldReveal = !cards.every((item) => item.classList.contains("is-flipped"));
  const ordered = shouldReveal ? cards : [...cards].reverse();
  ordered.forEach((item, step) => {
    const timer = window.setTimeout(() => {
      item.classList.add("is-flip-kick");
      item.classList.toggle("is-flipped", shouldReveal);
      item.setAttribute("aria-pressed", String(shouldReveal));
      const cleanup = window.setTimeout(() => item.classList.remove("is-flip-kick"), 520);
      state.valueFlipTimers.push(cleanup);
    }, step * 120);
    state.valueFlipTimers.push(timer);
  });
}

function bindValueFlips() {
  document.querySelectorAll(".value-flip-card").forEach((card) => {
    card.addEventListener("pointerdown", (event) => {
      if (state.editOpen) return;
      event.stopPropagation();
    });
    card.addEventListener("click", (event) => {
      if (state.editOpen) return;
      event.preventDefault();
      event.stopPropagation();
      runValueFlipSequence(card);
    });
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      event.stopPropagation();
      runValueFlipSequence(card);
    });
  });
}

function bindMediaPreview() {
  document.addEventListener("click", (event) => {
    if (state.editOpen) return;
    const target = getReplaceTarget(event);
    if (!target || !target.closest(".slide.active")) return;
    const tag = target.tagName.toLowerCase();
    if (tag !== "img" && tag !== "video" && !target.classList.contains("placeholder-portrait")) return;
    event.preventDefault();
    event.stopPropagation();
    showMediaPreview(target, target.closest("figure")?.querySelector("figcaption")?.textContent || target.dataset.localName || "");
  });
}

function bindMediaPanning() {
  document.addEventListener("pointerdown", (event) => {
    if (!state.editOpen || event.button !== 0 || event.detail > 1) return;
    const target = getReplaceTarget(event);
    if (!target || !target.closest(".slide.active")) return;
    if (target.dataset.mediaType !== "image" && target.dataset.mediaType !== "video") return;
    event.preventDefault();
    event.stopPropagation();
    const rect = (target.closest(".compare-card, .mini-ba-card") || target).getBoundingClientRect();
    state.mediaPan = {
      el: target,
      id: event.pointerId,
      startY: event.clientY,
      y: getMediaPosition(target).y,
      height: Math.max(1, rect.height)
    };
    target.classList.add("is-panning-media");
    target.setPointerCapture?.(event.pointerId);
  }, true);

  document.addEventListener("pointermove", (event) => {
    if (!state.mediaPan) return;
    event.preventDefault();
    const dy = event.clientY - state.mediaPan.startY;
    const nextY = state.mediaPan.y - (dy / state.mediaPan.height) * 100;
    setMediaPosition(state.mediaPan.el, nextY);
  }, true);

  document.addEventListener("pointerup", () => {
    if (state.mediaPan?.el) state.mediaPan.el.classList.remove("is-panning-media");
    state.mediaPan = null;
  }, true);
}

function startCaseMarquee() {
  window.clearInterval(state.caseMarqueeTimer);
  window.clearTimeout(state.caseMarqueeDelayTimer);
  const frames = Array.from(document.querySelectorAll(".slide-case-wall.active .case-grid figure"));
  if (!frames.length) return;
  let last = -1;
  const tick = () => {
    frames.forEach((frame) => frame.classList.remove("is-marquee-hot", "is-case-pop"));
    let next = Math.floor(Math.random() * frames.length);
    if (frames.length > 1 && next === last) next = (next + 1) % frames.length;
    frames[next]?.classList.add("is-case-pop");
    last = next;
  };
  state.caseMarqueeDelayTimer = window.setTimeout(() => {
    tick();
    state.caseMarqueeTimer = window.setInterval(tick, 1400);
  }, 2100);
}

function selectFreeEl(el) {
  if (state.selectedFreeEl) state.selectedFreeEl.classList.remove("is-selected");
  state.selectedFreeEl = el;
  if (el) el.classList.add("is-selected");
  updateFreePanel();
}

function startTextEditing(el) {
  el.contentEditable = "true";
  el.classList.add("is-text-editing");
  el.focus();
  const range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(false);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

function updateFreePanel() {
  const readout = document.querySelector("[data-free-selected]");
  if (!readout) return;
  readout.textContent = state.selectedFreeEl ? state.selectedFreeEl.dataset.freeName : "未选中对象";
}

function runFreeAction(action) {
  if (action === "resetPage") {
    resetFreePage();
    return;
  }
  const el = state.selectedFreeEl;
  if (!el) return;
  if (action === "larger") scaleFreeEl(el, 1.08);
  if (action === "smaller") scaleFreeEl(el, 0.92);
  if (action === "resetSelected") resetFreeEl(el);
}

function scaleFreeEl(el, factor) {
  const edit = getFreeEdit(el);
  const scale = Math.max(0.35, Math.min(2.8, Number((edit.scale * factor).toFixed(3))));
  saveFreeEdit(el, { scale });
}

function moveFreeEl(el, dx, dy) {
  const edit = getFreeEdit(el);
  saveFreeEdit(el, { x: edit.x + dx, y: edit.y + dy });
}

function resetFreeEl(el) {
  const edits = readFreeEdits();
  delete edits[el.dataset.freeId];
  writeFreeEdits(edits);
  el.contentEditable = "false";
  el.classList.remove("is-text-editing", "is-selected");
  state.selectedFreeEl = null;
  applyFreeEdit(el);
  updateFreePanel();
}

function resetFreePage() {
  const edits = readFreeEdits();
  document.querySelectorAll(".slide.active .free-editable").forEach((el) => {
    delete edits[el.dataset.freeId];
    el.classList.remove("is-selected", "is-text-editing");
    el.contentEditable = "false";
  });
  writeFreeEdits(edits);
  state.selectedFreeEl = null;
  applyAllFreeEdits();
  updateFreePanel();
}

function showHoverPreview(figure) {
  showMediaPreview(figure.querySelector("img"), figure.dataset.caption || "");
}

function showMediaPreview(mediaEl, label = "") {
  const preview = document.querySelector(".hover-preview");
  const img = preview.querySelector("img");
  const video = preview.querySelector("video");
  const caption = preview.querySelector("figcaption");
  const isVideo = mediaEl?.tagName?.toLowerCase() === "video";
  const source = isVideo
    ? mediaEl.currentSrc || mediaEl.src
    : mediaEl?.dataset?.replacedSrc || mediaEl?.src || mediaEl?.closest?.(".hover-pop")?.dataset?.src || "";
  if (!source) return;
  img.style.display = isVideo ? "none" : "block";
  video.style.display = isVideo ? "block" : "none";
  if (isVideo) {
    video.src = source;
    video.currentTime = 0;
    video.play().catch(() => {});
    img.removeAttribute("src");
  } else {
    video.pause();
    video.removeAttribute("src");
    img.src = source;
    img.alt = label || "";
  }
  caption.textContent = label || (isVideo ? "VIDEO PREVIEW" : "IMAGE PREVIEW");
  preview.classList.add("is-active");
  deck.classList.add("is-previewing");
}

function hideHoverPreview() {
  const preview = document.querySelector(".hover-preview");
  if (!preview) return;
  const video = preview.querySelector("video");
  if (video) {
    video.pause();
    video.removeAttribute("src");
  }
  preview.classList.remove("is-active");
  deck.classList.remove("is-previewing");
}

function toggleEditPanel(force) {
  state.editOpen = typeof force === "boolean" ? force : !state.editOpen;
  const panel = document.querySelector("[data-edit-panel]");
  panel.hidden = !state.editOpen;
  deck.classList.toggle("is-editing", state.editOpen);
  if (!state.editOpen) selectFreeEl(null);
  if (state.editOpen) {
    syncEditPanel();
    updateFreePanel();
  }
}

function syncEditPanel() {
  const panel = document.querySelector("[data-edit-panel]");
  if (!panel || panel.hidden) return;
  panel.querySelector("header strong").textContent = `自由编辑第 ${String(state.index + 1).padStart(2, "0")} 页`;
  updateFreePanel();
}

function updateCurrentEdit(key, rawValue) {
  const value = key === "gridCols" ? Number.parseInt(rawValue, 10) : Number.parseFloat(rawValue);
  const edits = readEdits();
  edits[state.index] = {
    ...layoutDefaults(slides[state.index]),
    ...(edits[state.index] || {}),
    [key]: value
  };
  writeEdits(edits);
  applySlideEdit(state.index);
  syncEditPanel();
}

function resetCurrentEdit() {
  const edits = readEdits();
  delete edits[state.index];
  writeEdits(edits);
  applySlideEdit(state.index);
  syncEditPanel();
}

function exportEdits() {
  document.querySelector("[data-edit-output]").value = JSON.stringify({
    freeEdits: readFreeEdits(),
    legacyLayoutEdits: readEdits(),
    mediaReplacements: readMediaMeta(),
    mediaPositions: readMediaPositions()
  }, null, 2);
}

window.addEventListener("keydown", (event) => {
  if (event.target.matches("input, textarea")) return;
  if (event.key.toLowerCase() === "e") toggleEditPanel();
  if (state.editOpen && state.selectedFreeEl) {
    const step = event.shiftKey ? 10 : 2;
    if (event.key === "ArrowUp") { event.preventDefault(); moveFreeEl(state.selectedFreeEl, 0, -step); return; }
    if (event.key === "ArrowDown") { event.preventDefault(); moveFreeEl(state.selectedFreeEl, 0, step); return; }
    if (event.key === "ArrowLeft") { event.preventDefault(); moveFreeEl(state.selectedFreeEl, -step, 0); return; }
    if (event.key === "ArrowRight") { event.preventDefault(); moveFreeEl(state.selectedFreeEl, step, 0); return; }
    if (event.key === "+" || event.key === "=") { event.preventDefault(); scaleFreeEl(state.selectedFreeEl, 1.04); return; }
    if (event.key === "-" || event.key === "_") { event.preventDefault(); scaleFreeEl(state.selectedFreeEl, 0.96); return; }
  }
  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    navigate(1);
    return;
  }
  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    navigate(-1);
    return;
  }
  if (event.key === "Escape") hideHoverPreview();
});

render();
