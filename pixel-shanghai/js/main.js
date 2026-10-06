import { SCENES, SPEAKERS, CARDS, ITEMS, MAIN_ROUTE, BONUS, MAP_PINS } from "./data.js?v=20261006c";
import * as A from "./audio.js?v=20261006c";
import { FX, pixelWipe } from "./fx.js?v=20261006c";
import { lineId } from "./voice-id.js?v=20261006c";
import { TRACKS } from "./tracks.js?v=20261006c";
import { T, isEN, setLang, getLang, onLang, applyStatic, tLine, tChoice, tTip, tSpeaker, tScene, tItem, tCard, tHu, tHot, rich, plain } from "./i18n.js?v=20261006c";
import { XHS, V, media, onFirstFrame, voiceIndex, voiceUrl, clipUrl, imgUrl, loadImage, prefetchVideo, prefetchSceneVoices, holdPrefetch, whenIdle, loadDiag, saveImage, postImageNote } from "./platform.js?v=20261006c";

const $ = (s, r = document) => r.querySelector(s);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
if (XHS) document.documentElement.classList.add("xhs");

// 页面上的图片读失败（小工具容器偶发读包失败）时换新请求重试几次，不留裂图
addEventListener("error", (e) => {
  const img = e.target;
  if (!(img instanceof HTMLImageElement)) return;
  const src = img.getAttribute("src");
  if (!src || src.startsWith("data:")) return;
  if (img.dataset.retrySrc !== src) { img.dataset.retrySrc = src; img.dataset.retry = "0"; }
  const n = Number(img.dataset.retry) + 1;
  if (n > 5) return;
  img.dataset.retry = String(n);
  setTimeout(() => { if (img.getAttribute("src") === src) img.src = src; }, 500 * 2 ** (n - 1));
}, true);
// 读图一直没有回应（容器读包卡住）：8 秒后取消这次请求再读，最多 3 次
const imgWait = new WeakMap();
setInterval(() => {
  const now = Date.now();
  for (const img of document.images) {
    const src = img.getAttribute("src");
    if (!src || src.startsWith("data:") || img.complete) { imgWait.delete(img); continue; }
    const w = imgWait.get(img);
    if (!w || w.src !== src) { imgWait.set(img, { src, t: now, n: 0 }); continue; }
    if (now - w.t < 8000 || w.n >= 3) continue;
    w.n++; w.t = now;
    img.src = "";
    setTimeout(() => { if (img.getAttribute("src") === "") img.src = src; }, 50);
  }
}, 2000);

// 配音索引：台词 id → 时长（秒）；缺失时回退到“嘀嗒”声
let VOICE = {};
voiceIndex().then((j) => { VOICE = j || {}; }).catch(() => {});
const RADIO_VOICES = new Set(["signal", "booth"]);
const voiceFor = (who, text) => { const id = lineId(who, text); return VOICE[id] ? id : null; };
function prefetchVoices(steps) {
  if (!A.voiceOn()) return;
  const walk = (list) => { for (const s of list || []) { if (Array.isArray(s)) { const id = voiceFor(s[0], s[1]); if (id) A.loadVoice(voiceUrl(id)); } else if (s && s.choice) s.choice.forEach((c) => walk(c[1])); } };
  walk(steps);
}
const SAVE_KEY = "pixel-shanghai-lane-radio-v1";
const FINAL_NEED = 28;

const SCENE = SCENES.reduce((all, scene) => { all[scene.id] = scene; return all; }, {});
const CARD_IDS = Object.keys(CARDS);
const MAIN_CARDS = CARD_IDS.filter((id) => !CARDS[id].bonus && !CARDS[id].final);
const HU_CARDS = CARD_IDS.filter((id) => CARDS[id].hu);
const CARD_FREQ = CARD_IDS.reduce((all, id, i) => { all[id] = (87.6 + (i * 20.2) / (CARD_IDS.length - 1)).toFixed(1); return all; }, {});

// 从剧本里找出每张卡属于哪个场景、哪个热点
const CARD_HOME = {};
function scanCards(steps, sceneId, spotId, found) {
  for (const s of steps || []) {
    if (!s || Array.isArray(s)) continue;
    if (s.card) { found.add(s.card); CARD_HOME[s.card] ||= { scene: sceneId, spot: spotId }; }
    if (s.choice) s.choice.forEach(([, sub]) => scanCards(sub, sceneId, spotId, found));
    if (s.then) scanCards(s.then, sceneId, spotId, found);
  }
}
for (const sc of SCENES) for (const h of sc.hotspots) { h.cards = new Set(); for (const t of h.talk) scanCards(t.do, sc.id, h.id, h.cards); h.cards = [...h.cards]; }
const sceneCards = (id) => CARD_IDS.filter((c) => CARD_HOME[c]?.scene === id);

// ---------------------------------------------------------------- 存档

const fresh = () => ({ scene: "tianjing", visited: {}, seenHold: {}, cards: {}, items: [], flags: {}, bonus: {}, ended: false, started: Date.now(), playMs: 0 });
let S = load();
// 清空进度后页面刷新前不再存档（刷新时的 visibilitychange 会把内存里的进度又写回去）
let wiped = false;
function load() { try { return { ...fresh(), ...JSON.parse(localStorage.getItem(SAVE_KEY)) }; } catch { return fresh(); } }
function save() { if (wiped) return; try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } catch {} }
const hasSave = () => { try { return !!localStorage.getItem(SAVE_KEY); } catch { return false; } };

const has = (id) => !!S.cards[id];
const mainCount = () => MAIN_CARDS.filter(has).length;
const totalCount = () => CARD_IDS.filter(has).length;
const cleared = (id) => sceneCards(id).filter(has).length >= SCENE[id].need;
const unlocked = (id) => {
  const sc = SCENE[id];
  if (sc.bonus) return !!S.bonus[id];
  const i = MAIN_ROUTE.indexOf(id);
  return i === 0 || MAIN_ROUTE.slice(0, i).every(cleared);
};

function cond(expr) {
  if (!expr) return true;
  return expr.split("&").every((raw) => {
    const neg = raw.startsWith("!");
    const c = neg ? raw.slice(1) : raw;
    let v;
    if (c.startsWith("card:")) v = has(c.slice(5));
    else if (c.startsWith("item:")) v = S.items.includes(c.slice(5));
    else if (c.startsWith("flag:")) v = !!S.flags[c.slice(5)];
    else if (c.startsWith("count<")) v = mainCount() < Number(c.slice(6));
    else v = !!S.flags[c];
    return neg ? !v : v;
  });
}

// ---------------------------------------------------------------- 布局

const app = $("#app"), stage = $("#stage"), layer = $("#layer"), video = media($("#bgv")), still = $("#still");
const titleVideo = media($("#tv")), endVideo = media($("#end-video"));
const fx = new FX($("#fx"));
const wipe = $("#wipe");
const radioConsole = $("#radio-console"), sceneChip = $("#chip");
let portraitMode = false;

const pan = { x: 0, tx: 0, lw: 0, min: 0, drag: null, moved: false };
function layout() {
  const vw = innerWidth, vh = innerHeight;
  portraitMode = vh / vw > 1.05;
  const insets = getComputedStyle($("#layout-insets"));
  const top = parseFloat(insets.paddingTop) || 0, bottom = parseFloat(insets.paddingBottom) || 0;
  const left = parseFloat(insets.paddingLeft) || 0, right = parseFloat(insets.paddingRight) || 0;
  // 44px 是本版为容器控件预留的工程空间，不是平台提供的导航栏高度。
  const contentTop = top + (XHS ? 44 : 8);
  const usableWidth = Math.max(1, vw - left - right), usableHeight = Math.max(1, vh - contentTop - bottom);
  // 导出图片面板挂在 body，安全区放到根节点让它们与 app 使用同一布局。
  Object.entries({ "--safe-left": left, "--safe-right": right, "--safe-bottom": bottom, "--content-top": contentTop, "--usable-height": usableHeight, "--usable-width": usableWidth }).forEach(([k, v]) => document.documentElement.style.setProperty(k, `${v}px`));
  let sw, sh, sl, st;
  // 竖屏：画框接近正方形，16:9 画面放大后可左右拖动
  if (portraitMode) {
    // 小红书原生返回/分享控件占独立一行；场景牌在它下方，收集数移到电台面板。
    st = Math.round(contentTop + 36);
    sw = usableWidth; sl = left;
    sh = Math.round(Math.max(sw * 9 / 16, Math.min(vh * .47, sw * 1.05, vh - st - bottom - 252)));
  }
  else { sw = Math.min(usableWidth, (usableHeight * 16) / 9); sh = (sw * 9) / 16; sl = left + (usableWidth - sw) / 2; st = contentTop + (usableHeight - sh) / 2; }
  pan.lw = portraitMode ? Math.round((sh * 16) / 9) : sw;
  pan.min = Math.min(0, sw - pan.lw);
  app.style.setProperty("--lw", `${pan.lw}px`);
  pan.tx = Math.max(pan.min, Math.min(0, pan.tx));
  const base = portraitMode ? vw / 21 : sh / 27;
  const fs = Math.max(12, Math.round(base / 6) * 6);
  const ui = Math.max(12, Math.round((portraitMode ? vw / 26 : sh / 36) / 6) * 6);
  Object.entries({ "--sw": sw, "--sh": sh, "--sl": sl, "--st": st, "--fs": fs, "--ui": ui }).forEach(([k, v]) => app.style.setProperty(k, `${v}px`));
  app.classList.toggle("portrait", portraitMode);
  // 保留原节点和事件；横屏继续用舞台里的 HUD 坐标，竖屏使用正常流式面板。
  const hudParent = portraitMode ? app : stage;
  if (radioConsole.parentNode !== hudParent) hudParent.append(radioConsole);
  if (sceneChip.parentNode !== hudParent) hudParent.append(sceneChip);
}
addEventListener("resize", layout);
layout();

// 轻微视差
let par = { x: 0, y: 0, tx: 0, ty: 0 };
stage.addEventListener("pointermove", (e) => {
  if (e.pointerType !== "mouse") return;
  const r = stage.getBoundingClientRect();
  par.tx = ((e.clientX - r.left) / r.width - 0.5) * -1.2;
  par.ty = ((e.clientY - r.top) / r.height - 0.5) * -1.0;
});
(function parLoop() {
  if (portraitMode) {
    pan.x += (pan.tx - pan.x) * (pan.drag ? 0.6 : 0.12);
    layer.style.transform = `translate3d(${Math.round(pan.x)}px, 0, 0)`;
    const hint = $("#pan-hint");
    if (hint) { hint.classList.toggle("l", pan.x < -4); hint.classList.toggle("r", pan.x > pan.min + 4); }
  } else {
    par.x += (par.tx - par.x) * 0.06; par.y += (par.ty - par.y) * 0.06;
    layer.style.transform = `scale(1.03) translate(${par.x}%, ${par.y}%)`;
  }
  requestAnimationFrame(parLoop);
})();

// 竖屏拖动画面；拖动过的这次触摸不触发热点
function panTo(xPercent, instant = false) {
  if (!portraitMode) return;
  const vw = stage.clientWidth;
  pan.tx = Math.max(pan.min, Math.min(0, vw / 2 - (xPercent / 100) * pan.lw));
  if (instant) pan.x = pan.tx;
}
stage.addEventListener("pointerdown", (e) => {
  if (!portraitMode || e.target.closest(".hud")) return;
  pan.drag = { x: e.clientX, start: pan.tx, id: e.pointerId };
  pan.moved = false;
});
addEventListener("pointermove", (e) => {
  if (!pan.drag || e.pointerId !== pan.drag.id) return;
  const dx = e.clientX - pan.drag.x;
  if (Math.abs(dx) > 8) pan.moved = true;
  if (pan.moved) { pan.tx = Math.max(pan.min, Math.min(0, pan.drag.start + dx)); S.flags.panned = true; $("#pan-hint")?.classList.add("used"); }
});
addEventListener("pointerup", () => { pan.drag = null; });
addEventListener("pointercancel", () => { pan.drag = null; });
stage.addEventListener("click", (e) => { if (pan.moved) { e.stopPropagation(); e.preventDefault(); pan.moved = false; } }, true);

// ---------------------------------------------------------------- 场景

let current = null;
let busy = false;
let listening = false;
// 只在本次游玩刚修好收音机时显示引导；旧档和刷新不重新教学。
let listenGuideScene = null;
let holdPlaying = false;
let sceneRun = 0, holdTimer = 0;

let entering = false;
// 换场景中途出任何异常都要把 busy / entering 复位，否则之后所有点击和换场景都会被挡住
async function travel(id, { instant = false } = {}) {
  if ((busy || entering) && !instant) return;
  busy = true; entering = true;
  tuning(false);
  holdPrefetch(true);
  let first = false;
  try {
    closeAllPanels();
    A.stopVoice();
    A.sfx("tune");
    await pixelWipe(wipe, "in", instant ? 1 : 480);
    first = await loadScene(id);
    if (XHS) await sceneReady();
  } catch (e) {
    console.warn("loadScene", e);
  } finally {
    // 提示只表示当前画面尚未就绪；配音或旧场景的异步回调不能把它重新打开。
    tuning(XHS && visualReadyRun !== sceneRun);
    holdPrefetch(false);
    await pixelWipe(wipe, "out", 520);
    busy = false;
  }
  try { await afterEnter(id, first); } catch (e) { console.warn("afterEnter", e); } finally { entering = false; }
}

// 转场只等可见画面。声音仍提前读取，由每句对白自己的等待/降级逻辑管理。
let visualReadyRun = -1, visualReady = Promise.resolve(), resolveVisual = () => {};
const tuningEl = el("div", "tuning");
stage.appendChild(tuningEl);
function tuning(on) { tuningEl.textContent = T("调频中…"); tuningEl.classList.toggle("show", Boolean(on && visualReadyRun !== sceneRun)); }
function markVisualReady(run) {
  if (run !== sceneRun) return;
  visualReadyRun = run;
  tuning(false);
  resolveVisual();
}
async function sceneReady() {
  const run = sceneRun;
  const t = setTimeout(() => { if (run === sceneRun) tuning(true); }, 400);
  try { await Promise.race([visualReady, wait(2500)]); }
  finally { clearTimeout(t); }
}

async function loadScene(id) {
  const sc = SCENE[id];
  listenGuideScene = null;
  current = sc;
  S.scene = id;
  setListen(false);
  const first = !S.visited[id];
  S.visited[id] = true;
  save();
  $("#hotspots").innerHTML = "";
  holdPlaying = false;
  clearTimeout(holdTimer);
  video.onended = null;
  const mp4 = clipUrl(id);
  const run = ++sceneRun;
  visualReady = new Promise(r => { resolveVisual = r; });
  prefetchSceneVoices(id, 2);
  // 画面：先挂本场景静帧，动画（画布）真正画出第一帧后才换上去；换片段时画布已清空，绝不露出上一个场景
  video.style.opacity = 0;
  if (sc.mode === "loop") {
    showStill(`assets/scene/${id}.webp${V}`);
    video.loop = true; video.poster = `assets/scene/${id}.webp${V}`; video.src = mp4;
    revealOnFrame(run);
    playLoop(run);
  } else if (sc.mode === "hold" && !S.seenHold[id]) {
    showStill(`assets/scene/${id}-start.webp${V}`);
    video.loop = false; video.poster = `assets/scene/${id}-start.webp${V}`; video.src = mp4;
    revealOnFrame(run);
    loadImage(`assets/scene/${id}.webp${V}`);
    holdPlaying = true;
    // 看门狗：动画迟迟起不来（读包慢 / 解码失败）或播完却没收到 ended，都直接进场景
    const arm = (sec) => { clearTimeout(holdTimer); holdTimer = setTimeout(() => { if (run === sceneRun) finishHold(); }, sec * 1000); };
    arm(10);
    video.play().then(() => { if (run === sceneRun && holdPlaying) arm((video.duration || 6) + 3); }).catch(() => finishHold());
    video.onended = finishHold;
    $("#skip").hidden = false;
  } else {
    video.pause(); video.removeAttribute("src"); video.load();
    showStill(`assets/scene/${sc.mode === "still" ? id + "-start" : id}.webp${V}`);
  }
  A.playMusic(sc.music || sc.mood);
  A.playAmbience(sc.amb);
  fx.setScene(sc.fx);
  renderHotspots();
  const vis = sc.hotspots.filter((h) => !h.hidden);
  panTo(vis.length ? vis.reduce((s, h) => s + h.x + h.w / 2, 0) / vis.length : 50, true);
  renderHUD();
  prefetchSceneVoices(id);
  prefetchNext();
  return first;
}

// 场景静帧和动画海报是同一张图：交给共享的 loadImage 去读，读好了再挂到 <img> 上（不会再发请求），
// 这样卡住的读取只有一个请求方、能被取消重读。读不到就一直隔几秒再试，直到离开这个场景（进场时没读到，之后读到了会补上）。
// keep：读好之前先留着 <img> 上现在的图（同一场景里从起始帧换到终帧时用）
async function setStill(url, keep = false) {
  const run = sceneRun;
  still.dataset.want = url;
  if (!keep) still.removeAttribute("src");
  for (let n = 1; run === sceneRun && still.dataset.want === url; n++) {
    const img = await loadImage(url);
    if (run !== sceneRun || still.dataset.want !== url) return false;
    if (img) {
      still.src = img.src;
      // 内嵌图和缓存图赋给可见 img 后仍需完成它自己的解码，不能只凭 detached Image 的成功。
      if (still.decode) await still.decode().catch(() => {});
      if (run !== sceneRun || still.dataset.want !== url) return false;
      if (still.complete && still.naturalWidth) { markVisualReady(run); return true; }
    }
    await wait(Math.min(15000, 3000 * n));
  }
  return false;
}
function showStill(url) {
  still.style.opacity = 1;
  setStill(url);
}
function revealOnFrame(run) {
  onFirstFrame(video, () => { if (run === sceneRun) { video.style.opacity = 1; still.style.opacity = 0; markVisualReady(run); } });
}

// 循环动画没起来（读包失败 / 超时）时隔几秒再试，一直到离开这个场景；设备不支持解码就停在静帧
async function playLoop(run) {
  for (let n = 1; run === sceneRun && current?.mode === "loop"; n++) {
    try { await video.play(); return; } catch (e) { if (/unsupported/.test(e?.message)) return; }
    await wait(Math.min(20000, 2000 * n));
  }
}

function finishHold() {
  if (!holdPlaying) return;
  holdPlaying = false;
  clearTimeout(holdTimer);
  if (!video.ended) video.pause();
  S.seenHold[current.id] = true; save();
  $("#skip").hidden = true;
  // 换成终帧静帧：读好之前画布（停在动画最后一帧）或起始静帧先顶着
  const run = sceneRun;
  setStill(`assets/scene/${current.id}.webp${V}`, true).then(() => {
    if (run !== sceneRun || holdPlaying) return;
    still.style.opacity = 1;
    setTimeout(() => { if (run === sceneRun && !holdPlaying) video.style.opacity = 0; }, 450);
  });
  renderHotspots();
}
$("#skip").addEventListener("click", (e) => { e.stopPropagation(); finishHold(); });

async function afterEnter(id, first = true) {
  const sc = SCENE[id];
  await showSceneCard(sc, !first);
  if (holdPlaying) {
    const t0 = Date.now();
    await new Promise((r) => { const t = setInterval(() => { if (holdPlaying && Date.now() - t0 > 30000) finishHold(); if (!holdPlaying) { clearInterval(t); r(); } }, 120); });
  }
  if (!S.flags[`intro_${id}`]) {
    S.flags[`intro_${id}`] = true; save();
    await runDialog(sc.intro);
  }
  renderHUD();
}

async function showSceneCard(sc, quick = false) {
  const box = $("#scenecard");
  box.innerHTML = `<div class="sc-time">${tScene(sc, "time")}</div><div class="sc-name">${tScene(sc, "name")}</div><div class="sc-weather">${tScene(sc, "weather")}</div>`;
  box.classList.toggle("en", isEN());
  box.classList.toggle("quick", quick);
  box.classList.remove("show"); void box.offsetWidth; box.classList.add("show");
  await wait(quick ? 900 : 1700);
}

// 下一站的配音块马上排进预取（排在本场景的动画和配音块后面，预取只占一个读取位置），动画和静帧过一会儿再取
function prefetchNext() {
  const i = MAIN_ROUTE.indexOf(current.id);
  const next = i < 0 ? null : MAIN_ROUTE[i + 1];
  if (!next) return;
  prefetchSceneVoices(next, 0);
  const run = sceneRun;
  setTimeout(() => { if (run !== sceneRun) return; prefetchVideo(next); whenIdle(() => { if (run === sceneRun) loadImage(`assets/scene/${next}.webp${V}`); }); }, 2500);
}

// ---------------------------------------------------------------- 热点

function pendingCards(h) { return h.cards.filter((c) => !has(c)); }
// 卡片都收过了，但现在点下去能拿到或交出道具的热点，也要亮起来
function hasErrand(h) {
  const b = h.talk.find((t) => cond(t.when));
  return !!b && b.do.some((s) => (s.give && !S.items.includes(s.give)) || (s.take && S.items.includes(s.take)));
}

// 会移动的角色：热点框按视频时间沿轨迹移动，角色不在画面里时隐藏
let tracked = [];
function trackBox(tr, t) {
  const keys = tr.keys, step = keys[1][0] - keys[0][0];
  const i = Math.min(keys.length - 1, Math.floor((t % tr.dur) / step));
  const a = keys[i], b = keys[(i + 1) % keys.length];
  if (a[1] == null) return null;
  const f = b[1] == null ? 0 : Math.min(1, ((t % tr.dur) - a[0]) / step);
  const [x, y, w, h] = [1, 2, 3, 4].map((j) => a[j] + (b[1] == null ? 0 : (b[j] - a[j]) * f));
  const W = Math.max(w * 1.4, 7), H = Math.max(h * 1.3, 11);
  return { x: x + w / 2 - W / 2, y: y + h / 2 - H / 2, w: W, h: H };
}
(function trackLoop() {
  if (tracked.length && current?.mode === "loop" && video.src) {
    for (const k of tracked) {
      const box = trackBox(k.track, video.currentTime);
      k.el.classList.toggle("gone", !box);
      k.spot.gone = !box;
      if (box) {
        k.el.classList.toggle("tag-below", box.y < 14);
        k.el.style.left = `${box.x}%`; k.el.style.top = `${box.y}%`; k.el.style.width = `${box.w}%`; k.el.style.height = `${box.h}%`;
        Object.assign(k.spot, box);
      }
    }
  }
  requestAnimationFrame(trackLoop);
})();

function renderHotspots() {
  const wrap = $("#hotspots");
  wrap.innerHTML = "";
  tracked = [];
  if (holdPlaying) { fx.setSpots([]); return; }
  const spots = [];
  current.hotspots.forEach((h, i) => {
    const b = el("button", "hs");
    b.dataset.id = h.id;
    b.style.cssText = `left:${h.x}%;top:${h.y}%;width:${h.w}%;height:${h.h}%`;
    const pend = pendingCards(h).length || hasErrand(h);
    if (h.hidden) b.classList.add("secret");
    if (pend) b.classList.add("new"); else if (h.cards.length) b.classList.add("done");
    if (h.hidden && !S.flags.fixed) b.classList.add("sealed");
    const label = tHot(current.id, h, "label"), verb = tHot(current.id, h, "verb");
    b.innerHTML = `<i class="c tl"></i><i class="c tr"></i><i class="c bl"></i><i class="c br"></i><span class="tag">${label}<em>${verb}</em></span>${pend && !h.hidden ? '<b class="dot"></b>' : ""}`;
    b.setAttribute("aria-label", `${label}: ${verb}`);
    b.addEventListener("pointerenter", () => { if (!dialogOpen) A.sfx("hover"); });
    b.addEventListener("click", (e) => { e.stopPropagation(); interact(h); });
    wrap.appendChild(b);
    const spot = { ...h, done: !pend, seed: i * 0.37 };
    if (!h.hidden || S.flags.fixed) spots.push(spot);
    const track = TRACKS[current.id]?.[h.id];
    if (track && current.mode === "loop") { b.classList.add("moving"); tracked.push({ el: b, spot, track }); }
  });
  fx.setSpots(spots);
}

async function interact(h) {
  if (dialogOpen || busy || holdPlaying || entering) return;
  if (h.hidden && (!S.flags.fixed || !listening)) {
    if (!S.flags.fixed) { toast(T("这里好像有声音……但收音机还修不好。")); return; }
    toast(T("打开「收听模式」才能听见这里的声音")); pulse("#btn-listen"); return;
  }
  A.sfx("click");
  const branch = h.talk.find((t) => cond(t.when));
  if (!branch) return;
  const moving = tracked.find((k) => k.spot.id === h.id);
  panTo(moving ? moving.spot.x + moving.spot.w / 2 : h.x + h.w / 2);
  if (moving) video.pause();
  await runDialog(branch.do, moving ? moving.spot : h);
  if (moving && current.mode === "loop") video.play().catch(() => {});
  renderHotspots();
  renderHUD();
}

// ---------------------------------------------------------------- 对话

let dialogOpen = false;
let advance = null;
let pendingEnding = false;
const dlg = $("#dialog"), dText = $("#d-text"), dName = $("#d-name"), dPort = $("#d-portrait"), dChoices = $("#d-choices");
addEventListener("resize", () => { if (dialogOpen) placeDialog(dlgSpot); });
const waveCanvas = el("canvas", "wave");
waveCanvas.width = 64; waveCanvas.height = 64;
let waveColor = "#7ee0c3", waveTalking = false;
(function waveLoop(t) {
  const g = waveCanvas.getContext("2d");
  g.fillStyle = "#101a1c"; g.fillRect(0, 0, 64, 64);
  g.fillStyle = "rgba(126,224,195,0.08)"; for (let y = 0; y < 64; y += 4) g.fillRect(0, y, 64, 1);
  g.fillStyle = waveColor;
  for (let x = 4; x < 60; x += 2) {
    const amp = waveTalking ? 12 + 8 * Math.sin(t / 90 + x) : 2;
    const y = 32 + Math.sin(x / 4 + t / 120) * amp * Math.sin(x / 18 + t / 300) + (waveTalking ? (Math.random() - 0.5) * 6 : 0);
    g.fillRect(x, y | 0, 2, 2);
  }
  requestAnimationFrame(waveLoop);
})(0);

function openDialog() { dialogOpen = true; dlg.classList.add("open"); app.classList.add("talking"); A.duckMusic(0.55); }
function closeDialog() { dialogOpen = false; sayToken++; A.stopVoice(); dlg.classList.remove("open"); app.classList.remove("talking"); A.duckMusic(listening ? 0.35 : 1); }

// 横屏时对话框放在上方或下方：取和说话人（没有说话人时取本场景热点）重叠更少的一边
const DLG_BOTTOM = [70, 97], DLG_TOP = [13, 40];
function placeDialog(spot) {
  const boxes = spot ? [spot] : (current?.hotspots || []).filter((h) => !h.hidden);
  const overlap = ([a, b]) => boxes.reduce((s, h) => s + Math.max(0, Math.min(b, h.y + h.h) - Math.max(a, h.y)), 0);
  const top = overlap(DLG_TOP) < overlap(DLG_BOTTOM);
  dlg.classList.toggle("top", top);
  if (top) {
    const base = app.getBoundingClientRect().top;
    const hudBottom = Math.max(...["#chip", "#counter"].map((s) => $(s).getBoundingClientRect().bottom)) - base;
    dlg.style.setProperty("--dtop", `${Math.round(hudBottom + 8)}px`);
  }
}

async function runDialog(steps, spot) {
  if (!steps || !steps.length) return;
  dlgSpot = spot || null;
  placeDialog(spot);
  prefetchVoices(steps);
  openDialog();
  await runSteps(steps, spot);
  closeDialog();
  if (pendingEnding) { pendingEnding = false; await wait(400); playEnding(); }
  else checkProgress();
}

async function runSteps(steps, spot) {
  for (const s of steps) {
    if (Array.isArray(s)) { await say(s[0], s[1]); continue; }
    if (s.choice) {
      const i = await choose(s.choice.map((c) => c[0]));
      await runSteps(s.choice[i][1], spot);
    } else if (s.card) await grantCard(s.card);
    else if (s.give) { if (!S.items.includes(s.give)) { S.items.push(s.give); save(); A.sfx("item"); renderHUD(); toast(T("获得：{name}", { name: tItem(s.give, ITEMS[s.give], "name") }), ITEMS[s.give].icon); } }
    else if (s.take) { S.items = S.items.filter((x) => x !== s.take); save(); renderHUD(); }
    else if (s.set) {
      if (s.set === "fixed" && !S.flags.fixed) listenGuideScene = current.id;
      S.flags[s.set] = true; save();
      if (s.set === "fixed") { renderHUD(); pulse("#btn-listen"); }
    }
    else if (s.sfx) A.sfx(s.sfx);
    else if (s.tip) await say("tip", s.tip);
    else if (s.tipCount) { const n = mainCount(); await say("tip", T("已收集 {n} / {need} 段声音，还差 {left} 段。打开收听模式，回到之前的场景，找找藏起来的声音吧。", { n, need: s.tipCount, left: Math.max(0, s.tipCount - n) })); }
    else if (s.ending) pendingEnding = true;
  }
}

// 头像背景：取说话人所在位置的场景画面，缩成 20×20 马赛克并染上角色色，静止不动；只有角色精灵会跳。
let dlgSpot = null;
const PBG = 20, PBG_UP = 8;
const portBg = el("canvas", "pbg");
portBg.width = portBg.height = PBG * PBG_UP;
const portBgSmall = el("canvas");
portBgSmall.width = portBgSmall.height = PBG;
const portSprite = el("img", "spr");
function paintPortraitBg(tint) {
  const g = portBgSmall.getContext("2d");
  g.globalCompositeOperation = "source-over"; g.globalAlpha = 1;
  g.fillStyle = "#231d35"; g.fillRect(0, 0, PBG, PBG);
  if (still.complete && still.naturalWidth) {
    const W = still.naturalWidth, H = still.naturalHeight, s = dlgSpot || { x: 40, y: 45, w: 20, h: 40 };
    const side = H * 0.5;
    const sx = Math.min(W - side, Math.max(0, (s.x + s.w / 2) / 100 * W - side / 2));
    const sy = Math.min(H - side, Math.max(0, (s.y + s.h / 2) / 100 * H - side / 2));
    g.imageSmoothingEnabled = true;
    g.drawImage(still, sx, sy, side, side, 0, 0, PBG, PBG);
  }
  g.globalCompositeOperation = "multiply"; g.globalAlpha = 0.6; g.fillStyle = tint; g.fillRect(0, 0, PBG, PBG);
  g.globalCompositeOperation = "source-over"; g.globalAlpha = 0.42; g.fillStyle = "#120f1c"; g.fillRect(0, 0, PBG, PBG);
  g.globalAlpha = 1;
  const big = portBg.getContext("2d");
  big.imageSmoothingEnabled = false;
  big.drawImage(portBgSmall, 0, 0, PBG * PBG_UP, PBG * PBG_UP);
}

// 头像精灵 64×64：让每个像素格正好占整数个物理像素，边缘才锐利
const SPRITE = 64;
function fitSprite() {
  const box = Math.min(dPort.clientWidth, dPort.clientHeight);
  if (!box) return;
  const dpr = window.devicePixelRatio || 1;
  let k = Math.max(1, Math.round((box * dpr) / SPRITE));
  if ((SPRITE * k) / dpr > box * 1.06 && k > 1) k--;
  const size = (SPRITE * k) / dpr;
  Object.assign(portSprite.style, { width: `${size}px`, height: `${size}px`, left: `${Math.round(((box - size) / 2) * dpr) / dpr}px` });
  dPort.style.setProperty("--sp", `${k / dpr}px`);
}
addEventListener("resize", () => { if (dPort.contains(portSprite)) fitSprite(); });

let lastPortrait = "", portraitReady = Promise.resolve(true), portraitRun = 0;
function preparePortrait(img, src, key) {
  // 内嵌字节已在内存里，但新图仍要解码；头像就绪后再开始当前句，避免先说话后出脸。
  img.style.visibility = "hidden";
  const run = ++portraitRun;
  return new Promise((resolve) => {
    let done = false;
    const matches = () => run === portraitRun && img.getAttribute("src") === src && dPort.contains(img);
    const finish = (ok) => {
      if (done) return;
      done = true; clearTimeout(timer);
      img.removeEventListener("load", loaded); img.removeEventListener("error", failed);
      if (matches()) img.style.visibility = "";
      if (!ok && run === portraitRun && lastPortrait === key) lastPortrait = ""; // 失败不能缓存成已准备，下句可重新加载。
      resolve(ok);
    };
    const loaded = () => { if (matches()) finish(Boolean(img.complete && img.naturalWidth)); };
    const failed = () => finish(false);
    const timer = setTimeout(() => finish(false), 4000);
    img.addEventListener("load", loaded); img.addEventListener("error", failed);
    img.src = src;
    if (img.complete && img.naturalWidth && matches()) finish(true);
  });
}
function setSpeaker(who) {
  const sp = who === "tip" ? { name: T("提示"), wave: "#f4c56b" } : SPEAKERS[who];
  dName.textContent = who === "tip" ? sp.name : tSpeaker(who, sp.name);
  dName.style.setProperty("--c", sp.wave);
  dlg.classList.toggle("tip", who === "tip");
  dlg.classList.toggle("radio", !sp.portrait && who !== "tip");
  const key = `${who}|${dlgSpot?.id || ""}|${current?.id || ""}`;
  if (key === lastPortrait && dPort.firstChild) return sp;
  lastPortrait = key;
  dPort.innerHTML = "";
  portraitReady = Promise.resolve(true);
  if (who === "tip") {
    const img = dPort.appendChild(el("img", "item-port", null));
    portraitReady = preparePortrait(img, imgUrl("assets/item/radio.png"), key);
  }
  else if (sp.portrait) {
    paintPortraitBg(sp.wave);
    if (!still.naturalWidth) lastPortrait = "";
    portSprite.alt = sp.name;
    dPort.append(portBg, portSprite);
    portraitReady = preparePortrait(portSprite, imgUrl(`assets/portrait/${sp.portrait}.png`), key);
    fitSprite();
  }
  else { waveColor = sp.wave; dPort.appendChild(waveCanvas); }
  return sp;
}

let sayToken = 0;
let autoAdvance = (() => { try { return localStorage.getItem(SAVE_KEY + "-auto") === "1"; } catch { return false; } })();
function say(who, text) {
  dlg.scrollTop = 0;
  const sp = setSpeaker(who);
  dChoices.innerHTML = "";
  dlg.classList.remove("ready");
  const radio = !sp.portrait;
  const vid = who !== "tip" ? voiceFor(who, text) : null;
  const token = ++sayToken;
  // 配音按原文查；屏幕显示当前语言的字幕（英文里 *xx* 为沪语拼读，打完后高亮）
  const shown = who === "tip" ? tTip(text) : tLine(who, text);
  text = plain(shown);
  dlg.classList.toggle("en", isEN());
  return new Promise(async (resolve) => {
    let i = 0, done = false, timer = 0, voice = null, next = null;
    dText.textContent = "";
    waveTalking = true;
    advance = null;
    const preparing = setTimeout(() => {
      if (token === sayToken && dialogOpen) dText.textContent = T(vid ? "正在准备语音…" : "正在准备对话…");
    }, 600);
    try {
      await portraitReady;
      if (token === sayToken && dialogOpen && vid) voice = await A.playVoice(voiceUrl(vid), { radio: RADIO_VOICES.has(who) });
    } finally { clearTimeout(preparing); if (token === sayToken) dText.textContent = ""; }
    if (token !== sayToken || !dialogOpen) { resolve(); return; }
    if (voice) window.__onVoice?.(vid, RADIO_VOICES.has(who));
    dlg.classList.toggle("speaking", Boolean(sp.portrait));
    // 有配音时，打字机与语音同步；停顿符号按语音节奏略微放慢
    const pauses = (text.match(/[，。！？…,.!?]/g) || []).length;
    const cps = voice ? Math.min(40, Math.max(7, (text.length + pauses * 4) / Math.max(0.6, voice.duration - 0.2))) : 36;
    const tick = () => {
      if (done) return;
      i++;
      dText.textContent = text.slice(0, i);
      const ch = text[i - 1];
      if (!voice && who !== "tip" && i % 2 === 1 && !/[，。！？、…—（）\s“”]/.test(ch)) A.blip(sp.voice || 1, radio);
      if (i >= text.length) finish();
      else timer = setTimeout(tick, /[，。！？…]/.test(ch) || (/[,.!?]/.test(ch) && text[i] === " ") ? 1000 / cps * 5 : 1000 / cps);
    };
    timer = setTimeout(tick, 60);
    const finish = () => {
      done = true; clearTimeout(timer); dText.innerHTML = rich(shown); dlg.classList.add("ready");
      if (!voice) { waveTalking = false; dlg.classList.remove("speaking"); }
      next = () => { advance = null; if (voice) A.stopVoice(); dlg.classList.remove("speaking"); A.sfx("click"); resolve(); };
      advance = next;
    };
    if (voice) voice.ended.then(() => {
      if (token !== sayToken) return;
      dlg.classList.remove("speaking"); waveTalking = false;
      if (!autoAdvance) return;
      const go = () => { if (token !== sayToken) return; if (!done) return setTimeout(go, 200); setTimeout(() => { if (token === sayToken && next && advance === next) next(); }, 800); };
      go();
    });
    advance = () => finish();
  });
}

function choose(labels) {
  dlg.classList.remove("ready");
  dChoices.innerHTML = "";
  return new Promise((resolve) => {
    labels.forEach((l, i) => {
      const b = el("button", "choice", `<span>${i + 1}</span>${rich(tChoice(l))}`);
      b.addEventListener("click", (e) => { e.stopPropagation(); advance = null; A.sfx("click"); dChoices.innerHTML = ""; resolve(i); });
      dChoices.appendChild(b);
    });
    advance = null;
    choiceKeys = (n) => { const b = dChoices.children[n]; if (b) b.click(); };
    if (portraitMode) dChoices.scrollIntoView({ block: "nearest" });
  });
}
let choiceKeys = null;

dlg.addEventListener("click", () => { if (advance) advance(); });

// ---------------------------------------------------------------- 声音卡

function thumbStyle(id) {
  const home = CARD_HOME[id];
  if (!home) return "";
  const sc = SCENE[home.scene];
  const h = sc.hotspots.find((x) => x.id === home.spot);
  const k = 3.2;
  const cx = (h.x + h.w / 2) / 100, cy = (h.y + h.h / 2) / 100;
  const px = Math.min(1, Math.max(0, (cx * k - 0.5) / (k - 1))) * 100, py = Math.min(1, Math.max(0, (cy * k - 0.5) / (k - 1))) * 100;
  const img = sc.mode === "still" ? `${sc.id}-start` : sc.id;
  return `background-image:url(${imgUrl(`assets/scene/${img}.webp`)});background-size:${k * 100}% auto;background-position:${px}% ${py}%`;
}

function cardHTML(id, big = false) {
  const c = CARDS[id], sp = SPEAKERS[c.who];
  const sc = SCENE[CARD_HOME[id]?.scene];
  const hu = c.hu ? `<div class="hu"><b>${c.hu[0]}</b><i>${c.hu[1]}</i><span>${rich(tHu(id, c))}</span></div>` : "";
  // 英文模式：英文在上，中文原句小字在下
  const zh = isEN() ? `<p class="quote-zh">${c.quote}</p>` : "";
  return `<div class="card ${c.kind === "thing" ? "thing" : ""} ${c.hidden ? "secret" : ""} ${big ? "big" : ""}">
    <div class="thumb" style="${thumbStyle(id)}"><span class="freq">FM ${CARD_FREQ[id]}</span>${c.hidden ? `<span class="badge">${T("隐藏")}</span>` : ""}</div>
    <div class="cbody"><div class="ctitle">${rich(tCard(id, c, "title"))}</div><div class="cwho" style="--c:${sp.wave}">${tSpeaker(c.who, sp.name)} · ${sc ? tScene(sc, "name") : ""}</div>
    <p class="quote">“${rich(tCard(id, c, "quote"))}”</p>${zh}${hu}${c.freq ? `<div class="hint">${T("📻 线索频率 FM {f}", { f: c.freq })}</div>` : ""}</div></div>`;
}

async function grantCard(id) {
  if (has(id)) return;
  S.cards[id] = Date.now(); save();
  if (CARDS[id].hidden) listenGuideScene = null;
  A.sfx("card");
  const pop = $("#cardpop");
  pop.innerHTML = `<div class="pop-head">${T("收到一段声音 · {n}/{total}", { n: mainCount(), total: MAIN_CARDS.length })}</div>${cardHTML(id, true)}<div class="pop-foot">${T("点击继续")}</div>`;
  pop.classList.add("show");
  renderHUD(true);
  await new Promise((r) => { const f = (e) => { e.stopPropagation(); pop.removeEventListener("click", f); advance = null; r(); }; pop.addEventListener("click", f); advance = () => f(new Event("x")); });
  pop.classList.remove("show");
  A.sfx("close");
  await wait(120);
}

// ---------------------------------------------------------------- HUD

function renderHUD(bump = false) {
  if (!current) return;
  $("#chip").innerHTML = `<b>${tScene(current, "time")}</b><span>${tScene(current, "name")}</span><i>${tScene(current, "weather")}</i>`;
  const bonusIds = CARD_IDS.filter((id) => CARDS[id].bonus);
  const n = current.bonus ? bonusIds.filter(has).length : mainCount();
  const total = current.bonus ? bonusIds.length : MAIN_CARDS.length;
  $("#counter").innerHTML = `<div class="dial"><div class="needle" style="left:${8 + (n / total) * 84}%"></div>${Array.from({ length: 21 }, (_, i) => `<i style="left:${4 + i * 4.6}%"></i>`).join("")}</div><div class="cnt"><span class="count-label">${T("已收集")}</span><b>${n}</b>/${total}<span>${T(current.bonus ? "段电台旧梦" : "段上海闲话")}</span></div>`;
  if (bump) { const c = $("#counter"); c.classList.remove("bump"); void c.offsetWidth; c.classList.add("bump"); }
  const itemText = (k) => `${tItem(k, ITEMS[k], "name")}${isEN() ? ": " : "："}${tItem(k, ITEMS[k], "desc")}`;
  $("#inv").innerHTML = S.items.map((it) => `<button class="slot" title="${itemText(it)}"><img src="${imgUrl(`assets/item/${ITEMS[it].icon}.png`)}" alt="${tItem(it, ITEMS[it], "name")}"></button>`).join("");
  $("#inv").querySelectorAll(".slot").forEach((b, i) => b.addEventListener("click", (e) => { e.stopPropagation(); const k = S.items[i]; toast(itemText(k), ITEMS[k].icon); }));
  $("#btn-listen").classList.toggle("locked", !S.flags.fixed);
  $("#btn-tuner").classList.toggle("locked", !S.flags.fixed);
  $("#btn-listen").classList.toggle("on", listening);
  renderListenGuide();
  // 下一站
  const i = MAIN_ROUTE.indexOf(current.id);
  const next = MAIN_ROUTE[i + 1];
  const nb = $("#next");
  if (!current.bonus && next && cleared(current.id)) {
    const ns = SCENE[next];
    nb.hidden = false;
    nb.innerHTML = T("下一站 <b>{time} {name}</b> ▸", { time: tScene(ns, "time"), name: tScene(ns, "name") });
    nb.onclick = (e) => { e.stopPropagation(); travel(next); };
  } else if (current.bonus) {
    nb.hidden = false; nb.innerHTML = T("回到今天 ▸"); nb.onclick = (e) => { e.stopPropagation(); openMap(); };
  } else nb.hidden = true;
  $("#console-route").classList.toggle("available", !nb.hidden);
  const left = sceneCards(current.id).filter((c) => !has(c));
  $("#scene-left").textContent = left.length ? T("这里还有 {n} 段声音", { n: left.length }) : T("这里的声音都收集到了");
}

function checkProgress() {
  const i = MAIN_ROUTE.indexOf(current.id);
  const next = MAIN_ROUTE[i + 1];
  if (next && cleared(current.id) && !S.flags[`unlock_${next}`]) {
    S.flags[`unlock_${next}`] = true; save();
    A.sfx("unlock");
    toast(T("新地点解锁：{name}", { name: tScene(SCENE[next], "name") }));
    pulse("#next");
  }
}

let toastTimer;
function toast(msg, icon) {
  const t = $("#toast");
  t.innerHTML = `${icon ? `<img src="${imgUrl(`assets/item/${icon}.png`)}" alt="">` : ""}<span>${msg}</span>`;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}
function pulse(sel) { const e = $(sel); if (!e) return; e.classList.remove("pulse"); void e.offsetWidth; e.classList.add("pulse"); }

// ---------------------------------------------------------------- 收听模式

function renderListenGuide() {
  const button = $("#btn-listen"), guide = $("#listen-guide");
  button.setAttribute("aria-pressed", String(listening));
  button.querySelector("span").textContent = T(listening ? "收听中" : "收听");
  guide.hidden = !S.flags.fixed || !current || listenGuideScene !== current.id;
  if (guide.hidden) { guide.textContent = ""; return; }
  const hidden = sceneCards(current.id).filter((id) => CARDS[id].hidden);
  const left = hidden.filter((id) => !has(id)).length;
  const status = left ? T("本场景隐藏声音还剩 {n} 段", { n: left }) : T(hidden.length ? "本场景隐藏声音已收齐" : "本场景没有隐藏声音");
  const action = listening ? T("收听中：点场景里的金色发光处，收集声音卡。") : T("点工具栏「收听」，再点场景里的金色发光处收集声音卡。");
  guide.textContent = `${status} · ${action}${portraitMode && left ? T("可左右拖动场景寻找。") : ""}`;
}
addEventListener("resize", renderListenGuide);

function setListen(on, notify = false) {
  if (on && !S.flags.fixed) { toast(T("收音机还没修好。去弄堂口的修理铺看看。")); return; }
  listening = on;
  app.classList.toggle("listening", on);
  fx.setListen(on);
  A.setStatic(on ? 0.035 : 0);
  if (!dialogOpen) A.duckMusic(on ? 0.35 : 1);
  if (on) A.sfx("static");
  $("#btn-listen").classList.toggle("on", on);
  renderListenGuide();
  if (notify) toast(T(on ? "收听已开启：点场景里的金色发光处收音" : "收听已关闭，可继续与街坊交谈"));
}

// ---------------------------------------------------------------- 面板：收集簿 / 地图 / 调频 / 设置

function closeAllPanels() { const panels = document.querySelectorAll(".panel.open"); if (panels.length) stopCardReplay(); panels.forEach((p) => p.classList.remove("open")); stopTuner(); }
function openPanel(id) { if (dialogOpen || busy || entering) return false; const p = $(id); const was = p.classList.contains("open"); closeAllPanels(); if (was) { A.sfx("close"); return false; } p.classList.add("open"); A.sfx("open"); return true; }
document.querySelectorAll(".panel .x").forEach((b) => b.addEventListener("click", (e) => { e.stopPropagation(); closeAllPanels(); A.sfx("close"); }));

let jTab = "cards";
function openJournal() { if (!openPanel("#journal")) return; renderJournal(); }
function renderJournal() {
  stopCardReplay();
  const body = $("#j-body");
  $("#j-stats").innerHTML = T("声音卡 <b>{a}</b>/{b} · 沪语词条 <b>{c}</b>/{d}", { a: totalCount(), b: CARD_IDS.length, c: HU_CARDS.filter(has).length, d: HU_CARDS.length });
  document.querySelectorAll("#journal .tab").forEach((t) => t.classList.toggle("on", t.dataset.tab === jTab));
  if (jTab === "cards") {
    body.innerHTML = SCENES.filter((sc) => !sc.bonus || S.bonus[sc.id]).map((sc) => {
      const ids = sceneCards(sc.id);
      const known = S.visited[sc.id];
      return `<section><h3>${known ? `${tScene(sc, "time")} · ${tScene(sc, "name")}` : T("？？？")}<small>${ids.filter(has).length}/${ids.length}</small></h3><div class="grid">${ids.map((id) => has(id)
        ? `<button class="mini" data-id="${id}"><div class="thumb" style="${thumbStyle(id)}"></div><span>${rich(tCard(id, CARDS[id], "title"))}</span>${CARDS[id].hu ? "<em>沪</em>" : ""}</button>`
        : `<div class="mini lock"><div class="thumb"></div><span>${T(CARDS[id].hidden ? "藏起来的声音" : "？？？")}</span></div>`).join("")}</div></section>`;
    }).join("") + (BONUS.some((b) => !S.bonus[b.id]) ? `<section class="bonus-hint"><h3>${T("番外电台")}<small>${BONUS.filter((b) => S.bonus[b.id]).length}/${BONUS.length}</small></h3><p>${T("用「调频」旋钮在夜空里找找别的电台。线索藏在一些声音卡里。")}</p></section>` : "");
    body.querySelectorAll(".mini[data-id]").forEach((b) => b.addEventListener("click", () => showCardDetail(b.dataset.id)));
  } else if (jTab === "hu") {
    body.innerHTML = `<div class="dict">${HU_CARDS.map((id) => {
      const c = CARDS[id];
      return has(id) ? `<button class="word" data-id="${id}"><b>${c.hu[0]}</b><i>${c.hu[1]}</i><span>${rich(tHu(id, c))}</span></button>` : `<div class="word lock"><b>${T("？？")}</b><span>${T("还没听到")}</span></div>`;
    }).join("")}</div><p class="note">${T("读音为近似拼读，只作游戏里的趣味提示。")}</p>`;
    body.querySelectorAll(".word[data-id]").forEach((b) => b.addEventListener("click", () => {
      const hid = voiceFor("hu", CARDS[b.dataset.id].hu[0]);
      showCardDetail(b.dataset.id);
      if (hid) A.playVoice(voiceUrl(hid), REPLAY);
    }));
  } else {
    const all = Object.keys(ITEMS);
    body.innerHTML = `<div class="items">${all.map((k) => S.items.includes(k)
      ? `<div class="itm"><img src="${imgUrl(`assets/item/${ITEMS[k].icon}.png`)}" alt=""><b>${tItem(k, ITEMS[k], "name")}</b><span>${tItem(k, ITEMS[k], "desc")}</span></div>`
      : `<div class="itm lock"><div class="ph"></div><b>${T("？？？")}</b><span>${k === "radio" ? "" : T("在路上也许会用到")}</span></div>`).join("")}</div>
      <p class="note">${T("道具送出去以后就不在包里了，但它们的故事留在声音卡里。")}</p>`;
  }
}
document.querySelectorAll("#journal .tab").forEach((t) => t.addEventListener("click", (e) => { e.stopPropagation(); jTab = t.dataset.tab; A.sfx("click"); renderJournal(); }));

// 场景外的重听（收集簿、词典、设置试听）：小红书版给慢设备更多解码时间。
const REPLAY = globalThis.__XHS__ ? { wait: 8000 } : {};
let cardReplayRun = 0, cardReplayTimer = 0;
function stopCardReplay() { cardReplayRun++; clearInterval(cardReplayTimer); cardReplayTimer = 0; A.stopVoice(); }
function showCardDetail(id) {
  stopCardReplay();
  const d = $("#j-detail");
  // 打开卡片时就开始读这张卡的配音，点「重听」时多半已经好了
  const qv = voiceFor(CARDS[id].who, CARDS[id].quote), hv = CARDS[id].hu && voiceFor("hu", CARDS[id].hu[0]);
  for (const v of [qv, hv]) if (v) A.loadVoice(voiceUrl(v));
  d.innerHTML = `${cardHTML(id, true)}<div class="dbtn"><button class="px-btn" id="replay">${T("▶ 重听")}</button><button class="px-btn" id="dclose">${T("收起")}</button></div>`;
  d.classList.add("show");
  A.sfx("open");
  $("#dclose").onclick = (e) => { e.stopPropagation(); stopCardReplay(); d.classList.remove("show"); A.sfx("close"); };
  $("#replay").onclick = async (e) => {
    e.stopPropagation();
    stopCardReplay();
    const run = cardReplayRun;
    const active = () => run === cardReplayRun && $("#journal").classList.contains("open") && d.classList.contains("show");
    const c = CARDS[id], sp = SPEAKERS[c.who];
    const vid = voiceFor(c.who, c.quote);
    if (vid && await A.playVoice(voiceUrl(vid), { radio: RADIO_VOICES.has(c.who), ...REPLAY })) return;
    if (!active()) return;
    let k = 0;
    cardReplayTimer = setInterval(() => { if (!active()) { clearInterval(cardReplayTimer); return; } A.blip(sp.voice, !sp.portrait); if (++k > Math.min(28, c.quote.length / 2)) clearInterval(cardReplayTimer); }, 60);
  };
  const hu = d.querySelector(".hu");
  const hid = CARDS[id].hu && voiceFor("hu", CARDS[id].hu[0]);
  if (hu && hid) {
    const b = el("button", "hu-play", "▶");
    b.title = T("听听上海话怎么讲");
    b.addEventListener("click", (e) => { e.stopPropagation(); stopCardReplay(); A.playVoice(voiceUrl(hid), REPLAY); });
    hu.prepend(b);
  }
}

function openMap() {
  if (!openPanel("#map")) return;
  const pins = $("#map-pins");
  const pts = MAIN_ROUTE.map((id) => MAP_PINS[id]);
  $("#map-route").innerHTML = `<polyline points="${pts.map((p) => `${p[0]},${p[1] * 0.5625}`).join(" ")}" />`;
  pins.innerHTML = MAIN_ROUTE.map((id, i) => {
    const sc = SCENE[id], [x, y] = MAP_PINS[id];
    const open = unlocked(id), here = current?.id === id, full = sceneCards(id).every(has);
    const got = sceneCards(id).filter(has).length;
    return `<button class="pin ${open ? "" : "locked"} ${here ? "here" : ""} ${full ? "full" : ""}" data-id="${id}" style="left:${x}%;top:${y}%">
      <span class="num">${open ? (full ? "★" : i + 1) : "🔒"}</span><span class="pl">${open ? `<b>${tScene(sc, "time")}</b> ${tScene(sc, "name")}<small>${got}/${sceneCards(id).length}</small>` : T("？？？")}</span>${here ? `<img class="me" src="${imgUrl("assets/portrait/xiaoman.png")}" alt="">` : ""}</button>`;
  }).join("");
  pins.querySelectorAll(".pin").forEach((b) => b.addEventListener("click", (e) => {
    e.stopPropagation();
    const id = b.dataset.id;
    if (!unlocked(id)) { A.sfx("click"); toast(T("先把上一站的声音收集够")); return; }
    if (id === current?.id) { closeAllPanels(); return; }
    travel(id);
  }));
  $("#map-list").innerHTML = MAIN_ROUTE.map((id, i) => {
    const sc = SCENE[id], open = unlocked(id), here = current?.id === id;
    const got = sceneCards(id).filter(has).length, all = sceneCards(id).length;
    return `<button class="ml ${open ? "" : "locked"} ${here ? "here" : ""} ${got === all ? "full" : ""}" data-id="${id}">
      <i>${open ? (got === all ? "★" : i + 1) : "🔒"}</i>${open ? `<em><b>${tScene(sc, "time")}</b><span>${tScene(sc, "name")}</span></em><small>${got}/${all}</small>` : `<em><span>${T("？？？")}</span></em>`}</button>`;
  }).join("");
  $("#map-list").querySelectorAll(".ml").forEach((b) => b.addEventListener("click", (e) => {
    e.stopPropagation();
    $(`#map-pins .pin[data-id="${b.dataset.id}"]`).click();
  }));
  $("#map-bonus").innerHTML = BONUS.map((b) => S.bonus[b.id]
    ? `<button class="px-btn gold" data-id="${b.id}">📻 FM ${b.freq} ${tScene(SCENE[b.id], "name")}</button>`
    : `<span class="px-btn ghost">📻 FM ??.? ${T("？？？")}</span>`).join("") + `<button class="px-btn" id="map-share">🗺 ${T("声音地图")}</button>`;
  $("#map-bonus").querySelectorAll("button[data-id]").forEach((b) => b.addEventListener("click", (e) => { e.stopPropagation(); travel(b.dataset.id); }));
  $("#map-share").addEventListener("click", (e) => { e.stopPropagation(); A.sfx("click"); showSoundMap(); });
  $("#map-progress").textContent = T("今天已经收集 {n} 段上海闲话", { n: mainCount() });
}

// 调频
let tuner = { f: 95.0, drag: false, locked: null };
const FMIN = 87.5, FMAX = 108;
function openTuner() {
  if (!S.flags.fixed) { toast(T("收音机还没修好。")); return; }
  if (!openPanel("#tuner")) return;
  const scale = $("#t-scale");
  scale.innerHTML = Array.from({ length: 21 }, (_, i) => { const f = FMIN + i * ((FMAX - FMIN) / 20); return `<i style="left:${(i / 20) * 100}%"><span>${i % 2 === 0 ? Math.round(f) : ""}</span></i>`; }).join("")
    + BONUS.map((b) => (knownFreq(b.freq) ? `<em class="mark ${S.bonus[b.id] ? "found" : ""}" style="left:${((b.freq - FMIN) / (FMAX - FMIN)) * 100}%">${S.bonus[b.id] ? "★" : "?"}</em>` : "")).join("");
  A.stopMusic(0.3);
  // 已经知道频率、还没去过的番外电台：先把配音块预取上
  for (const b of BONUS) if (knownFreq(b.freq) && !S.visited[b.id]) prefetchSceneVoices(b.id, 0);
  updateTuner();
}
const knownFreq = (f) => S.ended || CARD_IDS.some((id) => has(id) && CARDS[id].freq && Number(CARDS[id].freq) === f);
function stopTuner() {
  if (!$("#tuner").classList.contains("open") && !tuner.active) return;
  tuner.active = false;
  A.setStatic(listening ? 0.035 : 0);
  A.tunerSignal(null, 0); A.tunerRelease();
  A.duckMusic(1);
  if (current) A.playMusic(current.music || current.mood);
}
function updateTuner() {
  tuner.active = true;
  const f = tuner.f;
  $("#t-needle").style.left = `${((f - FMIN) / (FMAX - FMIN)) * 100}%`;
  $("#t-freq").textContent = f.toFixed(1);
  let best = null, strength = 0;
  for (const b of BONUS) { const s = Math.max(0, 1 - Math.abs(f - b.freq) / 0.9); if (s > strength) { strength = s; best = b; } }
  A.setStatic(0.11 * (1 - strength) + 0.01, 1800 + strength * 1200);
  A.tunerSignal(best ? SCENE[best.id].mood : null, strength);
  const meter = $("#t-meter");
  meter.style.setProperty("--s", strength);
  const info = $("#t-info");
  if (best && strength > 0.86) {
    tuner.locked = best;
    info.innerHTML = `<b>${T("锁定信号 · FM {f}", { f: best.freq })}</b><span>${tScene(SCENE[best.id], "name")}</span><button class="px-btn gold" id="t-go">${T("跟着声音去 ▸")}</button>`;
    $("#t-go").onclick = (e) => { e.stopPropagation(); const id = best.id; if (!S.bonus[id]) { S.bonus[id] = true; save(); A.sfx("lock"); } travel(id); };
    if (!tuner.lockedSfx) { A.sfx("lock"); tuner.lockedSfx = true; prefetchSceneVoices(best.id, 1); }
  } else {
    tuner.locked = null; tuner.lockedSfx = false;
    info.innerHTML = strength > 0.35 ? `<b>${T("好像有什么……")}</b><span>${T("再慢一点")}</span>` : `<b>${T("沙沙沙……")}</b><span>${T("慢慢转动旋钮，寻找藏在夜空里的电台")}</span>`;
  }
}
function tunerFromPointer(e) {
  const r = $("#t-scale").getBoundingClientRect();
  const p = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
  tuner.f = Math.round((FMIN + p * (FMAX - FMIN)) * 10) / 10;
  updateTuner();
}
$("#t-dial").addEventListener("pointerdown", (e) => { e.stopPropagation(); tuner.drag = true; $("#t-dial").setPointerCapture(e.pointerId); tunerFromPointer(e); });
$("#t-dial").addEventListener("pointermove", (e) => { if (tuner.drag) tunerFromPointer(e); });
$("#t-dial").addEventListener("pointerup", () => { tuner.drag = false; });
$("#t-knob").addEventListener("wheel", (e) => { e.preventDefault(); nudge(e.deltaY > 0 ? -0.1 : 0.1); }, { passive: false });
$("#t-left").addEventListener("click", (e) => { e.stopPropagation(); nudge(-0.1); });
$("#t-right").addEventListener("click", (e) => { e.stopPropagation(); nudge(0.1); });
function nudge(d) { tuner.f = Math.round(Math.min(FMAX, Math.max(FMIN, tuner.f + d)) * 10) / 10; A.sfx("hover"); updateTuner(); $("#t-knob").style.transform = `rotate(${(tuner.f - FMIN) * 30}deg)`; }

// 设置
function openSettings() {
  if (!openPanel("#settings")) return;
  const v = A.getVolumes();
  $("#vol-music").value = v.music; $("#vol-sfx").value = v.sfx; $("#vol-voice").value = v.voice;
}
$("#vol-music").addEventListener("input", (e) => { A.setVolumes({ music: Number(e.target.value) }); storeVol(); });
$("#vol-voice").addEventListener("input", (e) => { A.setVolumes({ voice: Number(e.target.value) }); storeVol(); });
$("#vol-voice").addEventListener("change", () => { const id = voiceFor("hu", "侬好"); if (id) A.playVoice(voiceUrl(id), REPLAY); });
$("#vol-sfx").addEventListener("input", (e) => { A.setVolumes({ sfx: Number(e.target.value) }); A.sfx("hover"); storeVol(); });
function storeVol() { try { localStorage.setItem(SAVE_KEY + "-vol", JSON.stringify(A.getVolumes())); } catch {} }
try { const v = JSON.parse(localStorage.getItem(SAVE_KEY + "-vol")); if (v) A.setVolumes(v); } catch {}
$("#btn-reset").addEventListener("click", (e) => {
  e.stopPropagation();
  if (!confirm(T("确定要清空进度，重新开始这一天吗？"))) return;
  wiped = true;
  try { localStorage.removeItem(SAVE_KEY); } catch {}
  location.reload();
});
// 隐藏的加载日志（真机排查用）：3 秒内连点左上时间牌或设置标题 5 下打开，截图发回来即可。换场景卡住时也能打开
let diagTaps = [];
function diagTap(e) {
  e.stopPropagation();
  const now = Date.now();
  diagTaps = diagTaps.filter((t) => now - t < 3000).concat(now);
  if (diagTaps.length >= 5) { diagTaps = []; openDiag(); }
}
$("#chip").addEventListener("click", diagTap);
$("#settings h2").addEventListener("click", diagTap);
function openDiag() {
  let box = $("#diag");
  if (!box) {
    box = el("div", "panel", `<div class="p-win"><div class="p-head"><h2>加载日志</h2><div>截图发给我们</div><button class="x" aria-label="关闭">✕</button></div><pre class="p-body diag-log"></pre></div>`);
    box.id = "diag";
    document.body.appendChild(box);
    box.querySelector(".x").addEventListener("click", (e) => { e.stopPropagation(); box.classList.remove("open"); });
  }
  box.classList.add("open");
  const paint = () => { if (!box.classList.contains("open")) return; box.querySelector("pre").textContent = diagText(); setTimeout(paint, 1000); };
  paint();
}
function diagText() {
  const d = loadDiag(), m = window.__XHS_MEDIA?.[0], audio = A.voiceDiag();
  const yes = (v) => (v ? "是" : "否"), clock = (t) => new Date(t).toTimeString().slice(0, 8), file = (s) => String(s || "无").replace(/^.*\//, "");
  const stillOk = still.getAttribute("src") && still.complete && still.naturalWidth;
  return [
    `${clock(Date.now())} 场景 ${current?.id || "-"} · 忙 ${yes(busy)} · 进场中 ${yes(entering)} · 开场动画 ${yes(holdPlaying)} · 对话 ${yes(dialogOpen)}`,
    `挂起未返回 ${d.hung} · 读取中 ${d.active} · 预取 ${d.paused ? "暂停（挂起太多）" : d.held ? "换场景中暂缓" : "正常"}`,
    `静帧 ${file(still.dataset.want)} ${stillOk ? "已显示" : "未读到"}（透明度 ${still.style.opacity || 0}） · 画布 ${m ? `${file(m.src)} 共画 ${m.framesDrawn} 帧（透明度 ${video.style.opacity || 0}）` : "原生视频"}`,
    `排队 ${d.queued.map(file).join(" ") || "无"}`,
    `配音解码 ${audio.decoding} · 挂起 ${audio.hung} · 排队 ${audio.queued.length} · 已缓存 ${audio.cached}`,
    ...(XHS ? [`内嵌资源：图片 ${Object.keys(globalThis.__XHS_IMG || {}).length} · 配音 ${Object.keys(globalThis.__XHS_VOICE || {}).length} · 动画 ${Object.keys(globalThis.__XHS_VID || {}).length}`] : []),
    "",
    ...d.log.slice().reverse().map((e) => `${clock(e.at)} ${e.kind} ${file(e.src)} ${e.ms == null ? `读取中 ${((Date.now() - e.at) / 1000).toFixed(1)}s` : `${(e.ms / 1000).toFixed(1)}s ${e.res}`}${e.late ? ` → 后来${e.late}` : ""}`),
  ].join("\n");
}
window.__loadDiag = () => ({ ...loadDiag(), scene: current?.id, busy, entering, text: diagText() });

// 小红书小工具的全屏由容器管理
if (globalThis.__XHS__) $("#btn-full").remove();
else $("#btn-full").addEventListener("click", (e) => { e.stopPropagation(); if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen?.().catch(() => {}); });

// ---------------------------------------------------------------- 按钮与键盘

const bind = (sel, fn) => $(sel).addEventListener("click", (e) => { e.stopPropagation(); A.initAudio(); fn(); });
bind("#btn-listen", () => { if (!dialogOpen) setListen(!listening, true); });
bind("#btn-map", openMap);
bind("#btn-journal", openJournal);
bind("#btn-bag", () => { if (openPanel("#journal")) { jTab = "items"; renderJournal(); } });
bind("#btn-tuner", openTuner);
bind("#btn-settings", openSettings);

addEventListener("keydown", (e) => {
  if (!started) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); $("#t-start").click(); } return; }
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    if ($("#cardpop").classList.contains("show") && advance) return advance();
    if (dialogOpen) { if (advance) advance(); return; }
    if (e.key === " " && !document.querySelector(".panel.open")) setListen(!listening, true);
    return;
  }
  if (dialogOpen && /^[1-9]$/.test(e.key) && choiceKeys) { choiceKeys(Number(e.key) - 1); return; }
  if (e.key === "Escape") { closeAllPanels(); $("#j-detail").classList.remove("show"); return; }
  if (dialogOpen) return;
  const k = e.key.toLowerCase();
  if (k === "m") openMap();
  if (k === "j" || k === "tab") { e.preventDefault(); openJournal(); }
  if (k === "t") openTuner();
  if (k === "l") setListen(!listening, true);
  if (tunerOpen() && (e.key === "ArrowLeft" || e.key === "ArrowRight")) nudge(e.key === "ArrowLeft" ? -0.1 : 0.1);
});
const tunerOpen = () => $("#tuner").classList.contains("open");
stage.addEventListener("click", () => { if (holdPlaying) finishHold(); });

// ---------------------------------------------------------------- 标题与结局

// 首次加载：先把第一个场景需要的素材拉下来，按字节显示进度
async function preloadFirstScene() {
  const t = $("#title");
  t.classList.add("loading");
  const images = [`assets/scene/tianjing.webp${V}`, imgUrl("assets/portrait/apo.png"), imgUrl("assets/portrait/xiaoman.png"), imgUrl("assets/item/radio.png")];
  const bar = (p) => { $("#t-load i").style.width = `${p}%`; $("#t-load span").textContent = `${T("正在调频…")} ${p}%`; };
  if (globalThis.__XHS__) {
    // 离线包：素材都在本地，只要把第一个场景的动画数据和图片先解出来
    const jobs = images.map(loadImg);
    // 停在标题页的这段时间顺手预取：要进的第一个场景的配音块、词条块（词典点读、设置试听）
    prefetchSceneVoices(unlocked(S.scene) ? S.scene : "tianjing", 1);
    prefetchVideo("tianjing");
    prefetchSceneVoices("hu", 0);
    let n = 0;
    await Promise.race([Promise.all(jobs.map((j) => Promise.resolve(j).finally(() => bar(Math.round((++n / jobs.length) * 100))))), wait(8000)]);
  } else {
    const urls = [clipUrl("tianjing"), ...images];
    const got = new Map(), size = new Map();
    const paint = () => {
      const total = [...size.values()].reduce((a, b) => a + b, 0) || 1;
      const done = [...got.values()].reduce((a, b) => a + b, 0);
      bar(Math.min(100, Math.round((done / total) * 100)));
    };
    const one = async (u) => {
      try {
        const r = await fetch(u);
        size.set(u, Number(r.headers.get("content-length")) || 200000);
        if (!r.body) { await r.arrayBuffer(); got.set(u, size.get(u)); paint(); return; }
        const rd = r.body.getReader();
        let n = 0;
        for (;;) { const { done, value } = await rd.read(); if (done) break; n += value.length; got.set(u, n); paint(); }
        got.set(u, size.get(u)); paint();
      } catch { size.set(u, 1); got.set(u, 1); }
    };
    await Promise.race([Promise.all(urls.map(one)), wait(12000)]);
  }
  t.classList.remove("loading");
}

let started = false;
function showTitle() {
  const t = $("#title");
  t.classList.add("show");
  const resumable = hasSave() && Object.keys(S.visited).length > 0;
  $("#t-continue").hidden = !resumable;
  t.classList.toggle("resumable", resumable);
  $("#t-start").textContent = T(resumable ? "重新开始" : "开始新的一天");
}
async function begin(resume) {
  A.initAudio();
  started = true;
  if (!resume) { S = fresh(); save(); }
  A.sfx("tune");
  $("#title").classList.add("leave");
  titleVideo.pause();
  await wait(700);
  $("#title").classList.remove("show", "leave");
  // 标题动画不再需要：释放解码器（手机上硬件解码器数量有限）
  if (XHS) titleVideo.src = "";
  app.classList.add("playing");
  const id = resume && unlocked(S.scene) ? S.scene : "tianjing";
  await travel(id, { instant: true });
}
$("#t-start").addEventListener("click", (e) => { e.stopPropagation(); begin(false); });
$("#t-continue").addEventListener("click", (e) => { e.stopPropagation(); begin(true); });
$("#title").addEventListener("pointerdown", () => { A.initAudio(); A.playMusic("title"); }, { once: true });

async function playEnding() {
  S.ended = true; save();
  const end = $("#ending");
  const ev = endVideo;
  end.classList.add("show");
  app.classList.add("ended");
  A.stopAmbience();
  A.playMusic("finale");
  setListen(false);
  const cap = $("#end-cap");
  const caption = async (txt, ms) => { cap.textContent = txt; cap.classList.add("show"); await wait(ms); cap.classList.remove("show"); await wait(600); };
  ev.poster = `assets/scene/moon.webp${V}`; ev.src = clipUrl("moon"); ev.className = "wide";
  ev.play().catch(() => {});
  await caption(T("那天晚上，外婆的收音机，第一次唱了歌。"), 2600);
  await new Promise((r) => { if (ev.ended) r(); ev.onended = r; setTimeout(r, 4000); });
  ev.poster = `assets/scene/sleep.webp${V}`; ev.src = clipUrl("sleep"); ev.className = "square";
  ev.play().catch(() => {});
  await caption(T("小满关了灯。窗外的上海，还在小声讲话。"), 3000);
  await new Promise((r) => { if (ev.ended) r(); ev.onended = r; setTimeout(r, 3000); });
  await caption(T("晚安，上海。"), 2200);
  showCredits();
}

// 小红书会因工具名和 GitHub 链接限流：小工具版只署名、引导关注
const CREDITS = [
  "《像素上海》视频与游戏 · 海辛 Hyacinth &amp; 阿文 Simon",
  ...(globalThis.__XHS__ ? [] : [
    "场景动画来自原片素材 · 角色与地图由 Nano Banana Pro 生成",
    "剧本、程序、8-bit 编曲与音效 · AI 助手 Mouse 协助",
    "沪语 / 四川话 / 普通话配音 · Seedance 2.5 生成",
  ]),
  "老歌旋律：陈歌辛《夜上海》《玫瑰玫瑰我爱你》《苏州河边》《蔷薇处处开》· 任光《彩云追月》《渔光曲》· 聂耳《卖报歌》· 江南曲调《紫竹调》",
  "字体 Fusion Pixel Font（SIL OFL 1.1）",
];
function showCredits() {
  const c = $("#credits");
  const mins = Math.max(1, Math.round((Date.now() - S.started) / 60000));
  const quotes = CARD_IDS.filter(has).map((id) => `<li><b>${tSpeaker(CARDS[id].who, SPEAKERS[CARDS[id].who].name)}</b>“${rich(tCard(id, CARDS[id], "quote"))}”</li>`).join("");
  c.innerHTML = `<h2>${T("像素上海：弄堂电台")}</h2>
    <div class="stats"><div><b>${totalCount()}</b><span>${T("段声音")}</span></div><div><b>${HU_CARDS.filter(has).length}</b><span>${T("句上海话")}</span></div><div><b>${mins}</b><span>${T("分钟")}</span></div></div>
    <div class="roll"><ul>${quotes}</ul></div>
    ${globalThis.__XHS__ ? `<p class="follow">${T("喜欢的话，来小红书关注我们")}<br><b>@海辛Hyacinth</b>　<b>@Simon阿文</b></p>` : ""}
    <p class="thanks">${CREDITS.map((ln) => T(ln)).join("<br>")}</p>
    <div class="cbtn"><button class="px-btn gold" id="c-card">${T("生成我的上海明信片")}</button><button class="px-btn gold" id="c-more">${T("继续寻找番外电台")}</button><button class="px-btn" id="c-title">${T("回到标题")}</button></div>`;
  c.classList.add("show");
  $("#c-card").onclick = (e) => { e.stopPropagation(); A.sfx("open"); showPostcard(); };
  $("#c-more").onclick = async () => { c.classList.remove("show"); $("#ending").classList.remove("show"); app.classList.remove("ended"); endVideo.pause(); await travel("moon", { instant: true }); openTuner(); toast(T("试着把指针拨到 90.3、99.1 或 104.5")); };
  $("#c-title").onclick = () => location.reload();
}

// ---------------------------------------------------------------- 明信片

const loadImg = (src) => loadImage(src);
function wrapText(g, text, maxW) {
  if (/[a-z]/i.test(text) && !/[\u4e00-\u9fff]/.test(text)) {
    const out = [];
    let cur = "";
    for (const w of text.split(/\s+/)) {
      const next = cur ? `${cur} ${w}` : w;
      if (g.measureText(next).width > maxW && cur) { out.push(cur); cur = w; } else cur = next;
    }
    if (cur) out.push(cur);
    return out;
  }
  const lines = [];
  let cur = "";
  for (const ch of text) {
    if (g.measureText(cur + ch).width > maxW && cur) { lines.push(cur); cur = /[，。！？、…”]/.test(ch) ? "" : ch; if (!cur) lines[lines.length - 1] += ch; }
    else cur += ch;
  }
  if (cur) lines.push(cur);
  return lines;
}
async function makePostcard() {
  const W = 1080, H = 1560, P = 12;
  const cv = el("canvas"); cv.width = W; cv.height = H;
  const g = cv.getContext("2d");
  g.imageSmoothingEnabled = false;
  await document.fonts?.load?.("40px Px").catch(() => {});
  const got = CARD_IDS.filter(has);
  const pool = got.filter((id) => CARDS[id].who !== "me");
  const pickId = pool.length ? pool[Math.floor(Math.random() * pool.length)] : "L2";
  const pick = CARDS[pickId];
  const sc = SCENE[CARD_HOME[pickId]?.scene || "moon"];
  // 纸张与像素边框
  g.fillStyle = "#f3e6c8"; g.fillRect(0, 0, W, H);
  g.fillStyle = "#e6d3ab"; for (let y = 0; y < H; y += P * 2) for (let x = (y / P) % 4 ? P : 0; x < W; x += P * 4) g.fillRect(x, y, P, P);
  g.fillStyle = "#231d35"; g.fillRect(0, 0, W, P * 2); g.fillRect(0, H - P * 2, W, P * 2); g.fillRect(0, 0, P * 2, H); g.fillRect(W - P * 2, 0, P * 2, H);
  g.fillStyle = "#d9573f"; g.fillRect(P * 3, P * 3, W - P * 6, P); g.fillRect(P * 3, H - P * 4, W - P * 6, P);
  // 场景画面：先缩成小图再放大，保持像素颗粒
  const img = await loadImg(`assets/scene/${sc.mode === "still" ? sc.id + "-start" : sc.id}.webp${V}`);
  const fx0 = 60, fy0 = 84, fw = W - 120, fh = Math.round(fw * 9 / 16);
  g.fillStyle = "#231d35"; g.fillRect(fx0 - P, fy0 - P, fw + P * 2, fh + P * 2);
  if (img) {
    const tiny = el("canvas"); tiny.width = 240; tiny.height = 135;
    const tg = tiny.getContext("2d"); tg.imageSmoothingEnabled = true; tg.drawImage(img, 0, 0, 240, 135);
    g.drawImage(tiny, fx0, fy0, fw, fh);
  }
  // 邮戳
  g.save(); g.translate(W - 210, fy0 + fh - 30); g.rotate(-0.18);
  g.strokeStyle = "rgba(217,87,63,.9)"; g.lineWidth = 8; g.beginPath(); g.arc(0, 0, 112, 0, Math.PI * 2); g.stroke();
  g.lineWidth = 3; g.beginPath(); g.arc(0, 0, 96, 0, Math.PI * 2); g.stroke();
  g.fillStyle = "rgba(217,87,63,.95)"; g.textAlign = "center"; g.font = "24px Px, sans-serif";
  if (isEN()) g.font = "15px Px, sans-serif";
  g.fillText(T("上海 · 弄堂电台"), 0, -22); g.font = "40px Px, sans-serif"; g.fillText(`FM ${CARD_FREQ[pickId]}`, 0, 34);
  g.restore();
  // 标题与数据
  let y = fy0 + fh + 90;
  g.textAlign = "left"; g.fillStyle = "#231d35"; g.font = "64px Px, sans-serif"; g.fillText(T("我的上海一天"), 72, y);
  g.fillStyle = "#8a5a3c"; g.font = "32px Px, sans-serif"; g.fillText(`${tScene(sc, "time")} · ${tScene(sc, "name")}`, 72, y + 52);
  y += 120;
  const stats = [[totalCount(), T("段声音")], [HU_CARDS.filter(has).length, T("句上海话")], [Object.keys(S.visited).length, T("个地方")]];
  stats.forEach(([n, label], k) => {
    const x = 72 + k * 320;
    g.fillStyle = "#231d35"; g.fillRect(x, y, 290, 120);
    g.fillStyle = "#f4c56b"; g.font = "60px Px, sans-serif"; g.fillText(String(n), x + 24, y + 76);
    const nw = g.measureText(String(n)).width;
    g.fillStyle = "#f3e6c8"; g.font = isEN() ? "20px Px, sans-serif" : "28px Px, sans-serif";
    wrapText(g, label, 290 - 48 - nw).slice(0, 2).forEach((ln, j, arr) => g.fillText(ln, x + 36 + nw, y + 74 - (arr.length - 1) * 13 + j * 26));
  });
  // 金句
  y += 200;
  g.fillStyle = "#d9573f"; g.font = "90px Px, sans-serif"; g.fillText("“", 60, y + 20);
  g.fillStyle = "#231d35";
  // 金句区在数据格与页脚之间；按长度缩小字号，最多四行
  const quote = plain(tCard(pickId, pick, "quote"));
  let size = 44, lines;
  for (size of [44, 40, 36, 32]) { g.font = `${size}px Px, sans-serif`; lines = wrapText(g, quote, W - 260); if (lines.length <= 3) break; }
  lines = lines.slice(0, 4);
  const lh = Math.round(size * 1.42);
  lines.forEach((ln, k) => g.fillText(ln, 130, y + k * lh));
  y += lines.length * lh - lh + 58;
  g.fillStyle = "#8a5a3c"; g.font = "32px Px, sans-serif"; g.textAlign = "right"; g.fillText(`—— ${tSpeaker(pick.who, SPEAKERS[pick.who].name)}`, W - 90, y);
  // 小满
  const me = await loadImg(imgUrl("assets/portrait/xiaoman.png"));
  if (me) { g.imageSmoothingEnabled = false; g.drawImage(me, 60, H - 322, 256, 256); }
  g.textAlign = "left"; g.fillStyle = "#231d35"; g.font = "40px Px, sans-serif"; g.fillText(T("像素上海：弄堂电台"), 330, H - 190);
  g.fillStyle = "#8a5a3c"; g.font = "26px Px, sans-serif";
  g.fillText(T("一台老收音机，一天，一座城的闲话"), 330, H - 140);
  g.fillText(globalThis.__XHS__ ? `${T("小红书")} @海辛Hyacinth · @Simon阿文` : "ringhyacinth.github.io/hyacinth.im-site/pixel-shanghai", 330, H - 96);
  return cv;
}
// 保存方式：网页点下载；小红书小工具（禁下载、禁长按菜单）存相册或直接发笔记
const SAVE_HINT = globalThis.__XHS__ ? "存到相册，或直接发一篇笔记" : "长按图片或点下载保存";
function saveButtons(file) {
  if (globalThis.__XHS__) return `<button class="px-btn gold" data-act="save" data-i18n>存到相册</button><button class="px-btn gold" data-act="note" data-i18n>发笔记</button>`;
  return `<a class="px-btn gold" data-act="dl" download="${T(file)}" data-i18n>下载</a>`;
}
function bindSave(box, note) {
  box.querySelectorAll("[data-act]").forEach((b) => b.addEventListener("click", async (e) => {
    e.stopPropagation();
    const url = box.dataset.url;
    if (!url || b.dataset.act === "dl") return;
    A.sfx("click");
    try {
      if (b.dataset.act === "save") { await saveImage(url); toast(T("已存到相册")); }
      else await postImageNote(url, T(note.title), T(note.content));
    } catch { toast(T("没有成功，再试一次")); }
  }));
}
function setSaved(box, url) {
  box.dataset.url = url;
  box.querySelector("img").src = url;
  const dl = box.querySelector('[data-act="dl"]');
  if (dl) dl.href = url;
}
async function showPostcard() {
  let box = $("#postcard");
  if (!box) {
    box = el("div", "panel", `<div class="p-win small pc-win"><div class="p-head"><h2 data-i18n>明信片</h2><div data-i18n>${SAVE_HINT}</div><button class="x" aria-label="关闭" data-i18n-aria>✕</button></div><div class="pc-body"><img alt="我的上海明信片" data-i18n-alt></div><div class="row">${saveButtons("像素上海明信片.png")}<button class="px-btn" id="pc-again" data-i18n>换一句</button></div></div>`);
    applyStatic(box);
    box.id = "postcard";
    document.body.appendChild(box);
    box.querySelector(".x").addEventListener("click", (e) => { e.stopPropagation(); box.classList.remove("open"); A.sfx("close"); });
    box.querySelector("#pc-again").addEventListener("click", (e) => { e.stopPropagation(); A.sfx("click"); showPostcard(); });
    bindSave(box, { title: "我的上海明信片", content: "在《像素上海：弄堂电台》里收到一张上海明信片 #像素上海" });
  }
  box.classList.add("open");
  const cv = await makePostcard();
  setSaved(box, cv.toDataURL("image/png"));
}

// 声音地图：每个地方收集到几段声音，画成一张可以保存的图
async function makeSoundMap() {
  const W = 1600, H = 1200, P = 10;
  const cv = el("canvas"); cv.width = W; cv.height = H;
  const g = cv.getContext("2d");
  g.imageSmoothingEnabled = false;
  await document.fonts?.load?.("40px Px").catch(() => {});
  g.fillStyle = "#231d35"; g.fillRect(0, 0, W, H);
  g.fillStyle = "#d9573f"; g.fillRect(P * 3, P * 3, W - P * 6, P / 2); g.fillRect(P * 3, H - P * 3.5, W - P * 6, P / 2);
  g.textAlign = "left"; g.fillStyle = "#f4c56b"; g.font = "56px Px, sans-serif"; g.fillText(T("我的上海声音地图"), 60, 104);
  g.fillStyle = "#f3e6c8"; g.font = "28px Px, sans-serif";
  g.fillText(T("收集了 {n}/{total} 段声音 · {h} 句上海话 · {p} 个地方", { n: totalCount(), total: CARD_IDS.length, h: HU_CARDS.filter(has).length, p: Object.keys(S.visited).length }), 60, 150);
  const mx = 60, my = 190, mw = W - 120, mh = Math.round(mw * 9 / 16);
  g.fillStyle = "#f3e6c8"; g.fillRect(mx - P, my - P, mw + P * 2, mh + P * 2);
  const map = await loadImg(`assets/scene/map.png${V}`);
  if (map) g.drawImage(map, mx, my, mw, mh);
  g.fillStyle = "rgba(24,18,40,.38)"; g.fillRect(mx, my, mw, mh);
  const at = (id) => [mx + MAP_PINS[id][0] / 100 * mw, my + MAP_PINS[id][1] / 100 * mh];
  g.strokeStyle = "rgba(244,197,107,.75)"; g.lineWidth = 4; g.setLineDash([14, 10]); g.beginPath();
  MAIN_ROUTE.forEach((id, i) => { const [x, y] = at(id); i ? g.lineTo(x, y) : g.moveTo(x, y); });
  g.stroke(); g.setLineDash([]);
  for (const id of MAIN_ROUTE) {
    const [x, y] = at(id), all = sceneCards(id).length, got = sceneCards(id).filter(has).length;
    const col = !got ? "#6a6480" : got === all ? "#f4c56b" : "#7ee0c3";
    if (got) {
      g.strokeStyle = col; g.lineWidth = 3;
      for (let k = 1; k <= got; k++) { g.globalAlpha = 0.75 - k * 0.12; g.beginPath(); g.arc(x, y, 12 + k * 9, 0, Math.PI * 2); g.stroke(); }
      g.globalAlpha = 1;
    }
    g.fillStyle = "#231d35"; g.fillRect(x - 12, y - 12, 24, 24);
    g.fillStyle = col; g.fillRect(x - 8, y - 8, 16, 16);
    const label = S.visited[id] ? `${tScene(SCENE[id], "name")} ${got}/${all}` : T("？？？");
    g.font = "22px Px, sans-serif";
    const lw = g.measureText(label).width + 20;
    const lx = Math.min(mx + mw - lw, Math.max(mx, x - lw / 2)), ly = y + 22;
    g.fillStyle = "rgba(35,29,53,.88)"; g.fillRect(lx, ly, lw, 32);
    g.fillStyle = S.visited[id] ? "#f3e6c8" : "#9a93b0"; g.fillText(label, lx + 10, ly + 24);
  }
  let bx = 60;
  const by = my + mh + 44;
  g.font = "24px Px, sans-serif";
  for (const b of BONUS) {
    const all = sceneCards(b.id).length, got = sceneCards(b.id).filter(has).length;
    const label = S.bonus[b.id] ? `FM ${b.freq} ${tScene(SCENE[b.id], "name")} ${got}/${all}` : "FM ??.?";
    const w = g.measureText(label).width + 32;
    g.fillStyle = S.bonus[b.id] ? "#f4c56b" : "#3a3150"; g.fillRect(bx, by, w, 44);
    g.fillStyle = S.bonus[b.id] ? "#231d35" : "#9a93b0"; g.fillText(label, bx + 16, by + 31);
    bx += w + 16;
  }
  g.fillStyle = "#8a83a0"; g.font = "22px Px, sans-serif";
  g.fillText(`${T("像素上海：弄堂电台")} · ${globalThis.__XHS__ ? `${T("小红书")} @海辛Hyacinth · @Simon阿文` : "ringhyacinth.github.io/hyacinth.im-site/pixel-shanghai"}`, 60, H - 56);
  return cv;
}
async function showSoundMap() {
  let box = $("#soundmap");
  if (!box) {
    box = el("div", "panel", `<div class="p-win pc-win"><div class="p-head"><h2 data-i18n>声音地图</h2><div data-i18n>${SAVE_HINT}</div><button class="x" aria-label="关闭" data-i18n-aria>✕</button></div><div class="pc-body"><img alt="我的上海声音地图" data-i18n-alt></div><div class="row">${saveButtons("像素上海声音地图.png")}</div></div>`);
    applyStatic(box);
    box.id = "soundmap";
    document.body.appendChild(box);
    box.querySelector(".x").addEventListener("click", (e) => { e.stopPropagation(); box.classList.remove("open"); A.sfx("close"); });
    bindSave(box, { title: "我的上海声音地图", content: "在《像素上海：弄堂电台》里走了一天，收集到的上海声音 #像素上海" });
  }
  box.classList.add("open");
  setSaved(box, (await makeSoundMap()).toDataURL("image/png"));
}

// ---------------------------------------------------------------- 启动

// 语言：标题页与设置里的按钮；切换后刷新界面
function syncLangButtons() { document.querySelectorAll(".lang-btn").forEach((b) => b.classList.toggle("on", b.dataset.lang === getLang())); }
document.querySelectorAll(".lang-btn").forEach((b) => b.addEventListener("click", (e) => { e.stopPropagation(); A.initAudio(); A.sfx("click"); setLang(b.dataset.lang); }));
function syncAutoButtons() { document.querySelectorAll(".auto-btn").forEach((b) => b.classList.toggle("on", (b.dataset.auto === "1") === autoAdvance)); }
document.querySelectorAll(".auto-btn").forEach((b) => b.addEventListener("click", (e) => {
  e.stopPropagation(); A.sfx("click"); autoAdvance = b.dataset.auto === "1";
  try { localStorage.setItem(SAVE_KEY + "-auto", autoAdvance ? "1" : "0"); } catch {}
  syncAutoButtons();
}));
syncAutoButtons();
onLang(() => {
  syncLangButtons();
  showTitle();
  $("#t-load span").textContent = T("正在调频…");
  if (current) { renderHUD(); renderHotspots(); }
  if ($("#journal").classList.contains("open")) renderJournal();
  if ($("#map").classList.contains("open")) { closeAllPanels(); openMap(); }
});
setLang(getLang());

titleVideo.poster = `assets/scene/skyline.webp${V}`;
titleVideo.src = clipUrl("skyline");
titleVideo.play().catch(() => {});
document.fonts?.ready.then(() => app.classList.add("font-ready"));
showTitle();
preloadFirstScene();
addEventListener("visibilitychange", () => { if (document.hidden) save(); A.setPageHidden(document.hidden); });
// 任意一次触摸都尝试恢复音频（微信 / 微博内置浏览器切回前台后常被挂起）
addEventListener("pointerdown", () => A.initAudio(), { capture: true, passive: true });

// 调试与自动化测试入口
window.__game = {
  state: () => S, travel, cards: CARD_IDS, scenes: SCENES.map((s) => s.id), setListen, openMap, openJournal, openTuner,
  interact: (id) => interact(current.hotspots.find((h) => h.id === id)), current: () => current?.id, busy: () => busy || holdPlaying || entering,
  dialogOpen: () => dialogOpen, advance: () => advance && advance(), choose: (n) => choiceKeys && choiceKeys(n),
  tune: (f) => { tuner.f = f; updateTuner(); }, mainCount, totalCount, setLang,
  credits: showCredits,
  postcard: async () => (await makePostcard()).toDataURL("image/png"),
  soundmap: async () => (await makeSoundMap()).toDataURL("image/png"),
  defineSong: (name, def, tune) => { if (tune) A.registerTunes([tune]); A.defineSong(name, def); },
  renderMusic: async (name, sec) => {
    const f = await A.renderMusicOffline(name, sec);
    let peak = 0.001; for (const x of f) peak = Math.max(peak, Math.abs(x));
    const pcm = new Int16Array(f.length); for (let i = 0; i < f.length; i++) pcm[i] = (f[i] / peak) * 30000;
    const bytes = new Uint8Array(pcm.buffer); let s = "";
    for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(s);
  }
};
