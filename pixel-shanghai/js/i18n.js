// 中 / EN 切换。配音始终是原声，英文模式只换字幕与界面。
import { lineId } from "./voice-id.js?v=20260925f";
import { EN } from "./i18n-en.js?v=20260925f";

const KEY = "pixel-shanghai-lang";
let lang = (() => {
  try { const v = localStorage.getItem(KEY); if (v === "zh" || v === "en") return v; } catch {}
  return /^zh/i.test(navigator.language || "zh") ? "zh" : "en";
})();
const listeners = new Set();
export const getLang = () => lang;
export const isEN = () => lang === "en";
export function setLang(l) {
  lang = l === "en" ? "en" : "zh";
  try { localStorage.setItem(KEY, lang); } catch {}
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
  applyStatic();
  listeners.forEach((f) => f(lang));
}
export const onLang = (f) => listeners.add(f);

const fill = (s, vars) => (vars ? s.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? "")) : s);
// 界面文字：以中文原文为键
export function T(zh, vars) { return fill(lang === "en" ? UI[zh] ?? zh : zh, vars); }

// 剧本内容
const en = (v, fallback) => (lang === "en" && v ? v : fallback);
export const tLine = (who, text) => en(EN.lines?.[lineId(who, text)], text);
export const tChoice = (label) => en(EN.choices?.[lineId("choice", label)], label);
export const tTip = (text) => en(EN.tips?.[lineId("tip", text)], text);
export const tSpeaker = (id, zh) => en(EN.speakers?.[id], zh);
export const tScene = (sc, field) => en(EN.scenes?.[sc.id]?.[field], sc[field]);
export const tItem = (id, it, field) => en(EN.items?.[id]?.[field], it[field]);
export const tCard = (id, c, field) => en(EN.cards?.[id]?.[field], c[field]);
export const tHu = (id, c) => en(EN.cards?.[id]?.hu_meaning, c.hu[2]);
export const tHot = (sceneId, h, field) => en(EN.hotspots?.[`${sceneId}/${h.id}`]?.[field], h[field]);
// *romanised* → 强调样式
export const rich = (s) => String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]).replace(/\*([^*]+)\*/g, "<em class=\"rom\">$1</em>");
export const plain = (s) => String(s).replace(/\*([^*]+)\*/g, "$1");

// 静态 HTML：data-i18n（文本）、data-i18n-html（含标签）、data-i18n-title / -aria / -alt（属性）
export function applyStatic(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((el) => { el.dataset.zh ??= el.textContent; el.textContent = T(el.dataset.zh); });
  root.querySelectorAll("[data-i18n-html]").forEach((el) => { el.dataset.zh ??= el.innerHTML; el.innerHTML = lang === "en" ? UI[el.dataset.zh] ?? el.dataset.zh : el.dataset.zh; });
  for (const attr of ["title", "aria-label", "alt"]) {
    root.querySelectorAll(`[data-i18n-${attr === "aria-label" ? "aria" : attr}]`).forEach((el) => {
      const k = `zh${attr.replace(/-./g, (m) => m[1].toUpperCase())}`;
      el.dataset[k] ??= el.getAttribute(attr);
      el.setAttribute(attr, T(el.dataset[k]));
    });
  }
}

const UI = {
  // 标题
  "一台老收音机 · 一天 · 五十二段上海闲话": "One old radio · one day · fifty-two Shanghai voices",
  "开始新的一天": "Start a new day",
  "重新开始": "Start over",
  "继续": "Continue",
  "正在调频…": "Tuning in…",
  '🎧 建议戴耳机 · 点亮的人和物件都能交谈 · 修好收音机后，<span class="kb-only">按空格</span><span class="touch-only">点「收听」</span>找到藏起来的声音':
    '🎧 Headphones recommended · Tap glowing people and things to talk · Once the radio works, <span class="kb-only">press Space</span><span class="touch-only">tap “Listen”</span> to find hidden sounds · Voices in Shanghainese with English subtitles',
  "《像素上海》视频与游戏 · 海辛 Hyacinth & 阿文 Simon": "“Pixel Shanghai” film & game by Hyacinth & Simon",
  "🎧 建议戴耳机 · 全程上海话配音": "🎧 Best with headphones · Shanghainese voices, English subs",
  "这个小游戏需要开启 JavaScript。": "This little game needs JavaScript.",
  // 工具栏与面板
  "收听": "Listen", "调频": "Tuner", "地图": "Map", "收集簿": "Journal", "设置": "Settings",
  "收听模式（空格）": "Listen mode (Space)", "调频（T）": "Tuner (T)", "地图（M）": "Map (M)", "收集簿（J）": "Journal (J)",
  "跳过 ▸▸": "Skip ▸▸", "关闭": "Close",
  "声音收集簿": "Sound Journal", "声音卡": "Voices", "沪语小词典": "Shanghainese", "道具": "Items",
  "上海 · 一天": "One Day in Shanghai",
  "外婆的收音机 · FM": "Grandma's radio · FM", "拖动微调": "Drag to fine-tune",
  "配音": "Voices", "音乐": "Music", "音效": "Sound FX", "语言": "Language",
  '<kbd>空格</kbd> 继续对话 / 收听模式': "<kbd>Space</kbd> next line / Listen mode",
  '<kbd>M</kbd> 地图 <kbd>J</kbd> 收集簿 <kbd>T</kbd> 调频': "<kbd>M</kbd> Map <kbd>J</kbd> Journal <kbd>T</kbd> Tuner",
  '<kbd>1</kbd><kbd>2</kbd> 选择回答 <kbd>Esc</kbd> 关闭': "<kbd>1</kbd><kbd>2</kbd> choose a reply <kbd>Esc</kbd> close",
  "全屏": "Fullscreen", "清空进度": "Reset progress",
  "像素上海地图": "Pixel map of Shanghai",
  // 对话与提示
  "提示": "Tip",
  "这里好像有声音……但收音机还修不好。": "There's a sound here… but the radio isn't fixed yet.",
  "打开「收听模式」才能听见这里的声音": "Turn on Listen mode to hear this one",
  "获得：{name}": "Got: {name}",
  "已收集 {n} / {need} 段声音，还差 {left} 段。打开收听模式，回到之前的场景，找找藏起来的声音吧。": "{n} / {need} voices collected — {left} to go. Turn on Listen mode and revisit earlier places to find hidden sounds.",
  "收音机还没修好。去弄堂口的修理铺看看。": "The radio isn't fixed yet. Try the repair shop at the lane entrance.",
  "收音机还没修好。": "The radio isn't fixed yet.",
  "先把上一站的声音收集够": "Collect enough voices at the previous stop first",
  "新地点解锁：{name}": "New place: {name}",
  "试着把指针拨到 90.3、99.1 或 104.5": "Try tuning to 90.3, 99.1 or 104.5",
  "确定要清空进度，重新开始这一天吗？": "Reset all progress and start the day again?",
  // HUD
  "段上海闲话": "Shanghai voices", "段电台旧梦": "radio dreams",
  "下一站 <b>{time} {name}</b> ▸": "Next <b>{time} {name}</b> ▸",
  "回到今天 ▸": "Back to today ▸",
  "这里还有 {n} 段声音": "{n} more voices here",
  "这里的声音都收集到了": "All voices here collected",
  // 卡片与收集簿
  "隐藏": "Hidden",
  "📻 线索频率 FM {f}": "📻 Clue: FM {f}",
  "收到一段声音 · {n}/{total}": "New voice · {n}/{total}",
  "点击继续": "Tap to continue",
  "声音卡 <b>{a}</b>/{b} · 沪语词条 <b>{c}</b>/{d}": "Voices <b>{a}</b>/{b} · Shanghainese <b>{c}</b>/{d}",
  "沪": "沪",
  "藏起来的声音": "Hidden sound", "？？？": "???", "？？": "??", "还没听到": "Not heard yet",
  "番外电台": "Bonus stations",
  "用「调频」旋钮在夜空里找找别的电台。线索藏在一些声音卡里。": "Use the Tuner to search the night sky for other stations. Clues hide in some voice cards.",
  "读音为近似拼读，只作游戏里的趣味提示。": "Romanisations are approximate — just for fun.",
  "在路上也许会用到": "Might come in handy",
  "道具送出去以后就不在包里了，但它们的故事留在声音卡里。": "Items you give away leave your bag, but their stories stay in the voice cards.",
  "▶ 重听": "▶ Replay", "收起": "Close", "听听上海话怎么讲": "Hear it in Shanghainese",
  // 地图与调频
  "今天已经收集 {n} 段上海闲话": "{n} Shanghai voices collected today",
  "锁定信号 · FM {f}": "Signal locked · FM {f}", "跟着声音去 ▸": "Follow the voice ▸",
  "好像有什么……": "Something's there…", "再慢一点": "Slower…",
  "沙沙沙……": "Static…", "慢慢转动旋钮，寻找藏在夜空里的电台": "Turn the knob slowly to find stations hidden in the night sky",
  // 结局
  "那天晚上，外婆的收音机，第一次唱了歌。": "That night, Grandma's radio sang for the first time.",
  "小满关了灯。窗外的上海，还在小声讲话。": "Xiaoman turned off the light. Outside, Shanghai was still whispering.",
  "晚安，上海。": "Good night, Shanghai.",
  "像素上海：弄堂电台": "Pixel Shanghai: Lane Radio",
  "段声音": "voices", "句上海话": "Shanghainese words", "分钟": "minutes", "个地方": "places",
  "生成我的上海明信片": "Make my Shanghai postcard", "继续寻找番外电台": "Find the bonus stations", "回到标题": "Back to title",
  "《像素上海》视频与游戏 · 海辛 Hyacinth &amp; 阿文 Simon<br>场景动画来自原片素材 · 角色与地图由 Nano Banana Pro 生成<br>剧本、程序、8-bit 编曲与音效 · AI 助手 Mouse 协助<br>沪语 / 四川话 / 普通话配音 · Seedance 2.5 生成<br>老歌旋律：陈歌辛《夜上海》《玫瑰玫瑰我爱你》《苏州河边》《蔷薇处处开》· 任光《彩云追月》《渔光曲》· 聂耳《卖报歌》· 江南曲调《紫竹调》<br>字体 Fusion Pixel Font（SIL OFL 1.1）":
    "“Pixel Shanghai” film &amp; game by Hyacinth &amp; Simon<br>Scene animation from the original film · Characters and map generated with Nano Banana Pro<br>Story, code, 8-bit arrangements and sound · assisted by Mouse, an AI assistant<br>Shanghainese / Sichuanese / Mandarin voices generated with Seedance 2.5<br>Classic melodies: Chen Gexin “Night Shanghai”, “Rose, Rose, I Love You”, “By Suzhou Creek”, “Roses Bloom Everywhere” · Ren Guang “Colourful Clouds Chasing the Moon”, “Song of the Fishermen” · Nie Er “Newspaper Seller's Song” · Jiangnan tune “Purple Bamboo”<br>Font: Fusion Pixel Font (SIL OFL 1.1)",
  // 明信片
  "明信片": "Postcard", "长按图片或点下载保存": "Long-press the image or tap Download",
  "下载": "Download", "换一句": "Another quote", "我的上海明信片": "My Shanghai postcard", "像素上海明信片.png": "pixel-shanghai-postcard.png",
  "上海 · 弄堂电台": "SHANGHAI · LANE RADIO", "我的上海一天": "My Day in Shanghai",
  "一台老收音机，一天，五十二段上海闲话": "One old radio, one day, fifty-two Shanghai voices",
  "分享": "Share"
};
