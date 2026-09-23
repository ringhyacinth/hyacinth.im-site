import { SCENES, SPEAKERS, CARDS, ITEMS, MAIN_ROUTE, BONUS, MAP_PINS } from "./data.js?v=20260923";
import * as A from "./audio.js?v=20260923";
import { FX, pixelWipe } from "./fx.js?v=20260923";

const $ = (s, r = document) => r.querySelector(s);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const V = "?v=20260923";
const SAVE_KEY = "pixel-shanghai-lane-radio-v1";
const FINAL_NEED = 28;

const SCENE = Object.fromEntries(SCENES.map((s) => [s.id, s]));
const CARD_IDS = Object.keys(CARDS);
const MAIN_CARDS = CARD_IDS.filter((id) => !CARDS[id].bonus && !CARDS[id].final);
const HU_CARDS = CARD_IDS.filter((id) => CARDS[id].hu);
const CARD_FREQ = Object.fromEntries(CARD_IDS.map((id, i) => [id, (87.6 + (i * 20.2) / (CARD_IDS.length - 1)).toFixed(1)]));

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
function load() { try { return { ...fresh(), ...JSON.parse(localStorage.getItem(SAVE_KEY)) }; } catch { return fresh(); } }
function save() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } catch {} }
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

const app = $("#app"), stage = $("#stage"), layer = $("#layer"), video = $("#bgv"), still = $("#still");
const fx = new FX($("#fx"));
const wipe = $("#wipe");
let portraitMode = false;

function layout() {
  const vw = innerWidth, vh = innerHeight;
  portraitMode = vh / vw > 1.05;
  let sw, sh, sl, st;
  if (portraitMode) { sw = vw; sh = (vw * 9) / 16; sl = 0; st = Math.max(0, Math.min(vh * 0.12, (vh - sh) * 0.22)); }
  else { sw = Math.min(vw, (vh * 16) / 9); sh = (sw * 9) / 16; sl = (vw - sw) / 2; st = (vh - sh) / 2; }
  const base = portraitMode ? vw / 21 : sh / 27;
  const fs = Math.max(12, Math.round(base / 6) * 6);
  const ui = Math.max(12, Math.round((portraitMode ? vw / 26 : sh / 36) / 6) * 6);
  Object.entries({ "--sw": sw, "--sh": sh, "--sl": sl, "--st": st, "--fs": fs, "--ui": ui }).forEach(([k, v]) => app.style.setProperty(k, `${v}px`));
  app.classList.toggle("portrait", portraitMode);
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
  par.x += (par.tx - par.x) * 0.06; par.y += (par.ty - par.y) * 0.06;
  layer.style.transform = `scale(1.03) translate(${par.x}%, ${par.y}%)`;
  requestAnimationFrame(parLoop);
})();

// ---------------------------------------------------------------- 场景

let current = null;
let busy = false;
let listening = false;
let holdPlaying = false;

let entering = false;
async function travel(id, { instant = false } = {}) {
  if ((busy || entering) && !instant) return;
  busy = true; entering = true;
  closeAllPanels();
  A.sfx("tune");
  await pixelWipe(wipe, "in", instant ? 1 : 480);
  await loadScene(id);
  await pixelWipe(wipe, "out", 520);
  busy = false;
  try { await afterEnter(id); } finally { entering = false; }
}

async function loadScene(id) {
  const sc = SCENE[id];
  current = sc;
  S.scene = id;
  setListen(false);
  const first = !S.visited[id];
  S.visited[id] = true;
  save();
  $("#hotspots").innerHTML = "";
  holdPlaying = false;
  video.onended = null;
  const mp4 = `assets/video/${id}.mp4${V}`;
  if (sc.mode === "loop") {
    still.style.opacity = 0;
    video.loop = true; video.poster = `assets/scene/${id}.webp${V}`; video.src = mp4;
    video.style.opacity = 1;
    video.play().catch(() => {});
    still.src = `assets/scene/${id}.webp${V}`;
  } else if (sc.mode === "hold" && !S.seenHold[id]) {
    still.style.opacity = 0;
    still.src = `assets/scene/${id}.webp${V}`;
    video.loop = false; video.poster = `assets/scene/${id}-start.webp${V}`; video.src = mp4;
    video.style.opacity = 1;
    holdPlaying = true;
    video.play().catch(() => finishHold());
    video.onended = finishHold;
    $("#skip").hidden = false;
  } else {
    video.pause(); video.removeAttribute("src"); video.load(); video.style.opacity = 0;
    still.src = `assets/scene/${sc.mode === "still" ? id + "-start" : id}.webp${V}`;
    still.style.opacity = 1;
  }
  A.playMusic(sc.mood);
  A.playAmbience(sc.amb);
  fx.setScene(sc.fx);
  renderHotspots();
  renderHUD();
  prefetchNext();
  return first;
}

function finishHold() {
  if (!holdPlaying) return;
  holdPlaying = false;
  S.seenHold[current.id] = true; save();
  still.style.opacity = 1;
  $("#skip").hidden = true;
  setTimeout(() => { if (!holdPlaying) video.style.opacity = 0; }, 400);
  renderHotspots();
}
$("#skip").addEventListener("click", (e) => { e.stopPropagation(); finishHold(); });

async function afterEnter(id) {
  const sc = SCENE[id];
  await showSceneCard(sc);
  if (holdPlaying) await new Promise((r) => { const t = setInterval(() => { if (!holdPlaying) { clearInterval(t); r(); } }, 120); });
  if (!S.flags[`intro_${id}`]) {
    S.flags[`intro_${id}`] = true; save();
    await runDialog(sc.intro);
  }
  renderHUD();
}

async function showSceneCard(sc) {
  const box = $("#scenecard");
  box.innerHTML = `<div class="sc-time">${sc.time}</div><div class="sc-name">${sc.name}</div><div class="sc-weather">${sc.weather}</div>`;
  box.classList.remove("show"); void box.offsetWidth; box.classList.add("show");
  await wait(1700);
}

function prefetchNext() {
  const i = MAIN_ROUTE.indexOf(current.id);
  const next = MAIN_ROUTE[i + 1];
  if (!next) return;
  setTimeout(() => { fetch(`assets/video/${next}.mp4${V}`).catch(() => {}); new Image().src = `assets/scene/${next}.webp${V}`; }, 2500);
}

// ---------------------------------------------------------------- 热点

function pendingCards(h) { return h.cards.filter((c) => !has(c)); }

function renderHotspots() {
  const wrap = $("#hotspots");
  wrap.innerHTML = "";
  if (holdPlaying) { fx.setSpots([]); return; }
  const spots = [];
  current.hotspots.forEach((h, i) => {
    const b = el("button", "hs");
    b.style.cssText = `left:${h.x}%;top:${h.y}%;width:${h.w}%;height:${h.h}%`;
    const pend = pendingCards(h).length;
    if (h.hidden) b.classList.add("secret");
    if (pend) b.classList.add("new"); else if (h.cards.length) b.classList.add("done");
    if (h.hidden && !S.flags.fixed) b.classList.add("sealed");
    b.innerHTML = `<i class="c tl"></i><i class="c tr"></i><i class="c bl"></i><i class="c br"></i><span class="tag">${h.label}<em>${h.verb}</em></span>${pend && !h.hidden ? '<b class="dot"></b>' : ""}`;
    b.setAttribute("aria-label", `${h.label}：${h.verb}`);
    b.addEventListener("pointerenter", () => { if (!dialogOpen) A.sfx("hover"); });
    b.addEventListener("click", (e) => { e.stopPropagation(); interact(h); });
    wrap.appendChild(b);
    if (!h.hidden || S.flags.fixed) spots.push({ ...h, done: !pend, seed: i * 0.37 });
  });
  fx.setSpots(spots);
}

async function interact(h) {
  if (dialogOpen || busy || holdPlaying || entering) return;
  if (h.hidden && (!S.flags.fixed || !listening)) {
    if (!S.flags.fixed) { toast("这里好像有声音……但收音机还修不好。"); return; }
    toast("打开「收听模式」才能听见这里的声音"); pulse("#btn-listen"); return;
  }
  A.sfx("click");
  const branch = h.talk.find((t) => cond(t.when));
  if (!branch) return;
  await runDialog(branch.do, h);
  renderHotspots();
  renderHUD();
}

// ---------------------------------------------------------------- 对话

let dialogOpen = false;
let advance = null;
let pendingEnding = false;
const dlg = $("#dialog"), dText = $("#d-text"), dName = $("#d-name"), dPort = $("#d-portrait"), dChoices = $("#d-choices");
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
function closeDialog() { dialogOpen = false; dlg.classList.remove("open"); app.classList.remove("talking"); A.duckMusic(listening ? 0.35 : 1); }

async function runDialog(steps, spot) {
  if (!steps || !steps.length) return;
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
    else if (s.give) { if (!S.items.includes(s.give)) { S.items.push(s.give); save(); A.sfx("item"); renderHUD(); toast(`获得：${ITEMS[s.give].name}`, ITEMS[s.give].icon); } }
    else if (s.take) { S.items = S.items.filter((x) => x !== s.take); save(); renderHUD(); }
    else if (s.set) { S.flags[s.set] = true; save(); if (s.set === "fixed") { renderHUD(); pulse("#btn-listen"); } }
    else if (s.sfx) A.sfx(s.sfx);
    else if (s.tip) await say("tip", s.tip);
    else if (s.tipCount) { const n = mainCount(); await say("tip", `已收集 ${n} / ${s.tipCount} 段声音，还差 ${Math.max(0, s.tipCount - n)} 段。打开收听模式，回到之前的场景，找找藏起来的声音吧。`); }
    else if (s.ending) pendingEnding = true;
  }
}

function setSpeaker(who) {
  const sp = who === "tip" ? { name: "提示", wave: "#f4c56b" } : SPEAKERS[who];
  dName.textContent = sp.name;
  dName.style.setProperty("--c", sp.wave);
  dlg.classList.toggle("tip", who === "tip");
  dlg.classList.toggle("radio", !sp.portrait && who !== "tip");
  dPort.innerHTML = "";
  if (who === "tip") dPort.appendChild(el("img", "item-port", null)).src = `assets/item/radio.webp${V}`;
  else if (sp.portrait) { const img = el("img"); img.src = `assets/portrait/${sp.portrait}.webp${V}`; img.alt = sp.name; dPort.appendChild(img); }
  else { waveColor = sp.wave; dPort.appendChild(waveCanvas); }
  return sp;
}

function say(who, text) {
  const sp = setSpeaker(who);
  dChoices.innerHTML = "";
  dlg.classList.remove("ready");
  const radio = !sp.portrait;
  return new Promise((resolve) => {
    let i = 0, done = false;
    dText.textContent = "";
    waveTalking = true;
    const cps = 36;
    const tick = () => {
      if (done) return;
      i++;
      dText.textContent = text.slice(0, i);
      const ch = text[i - 1];
      if (who !== "tip" && i % 2 === 1 && !/[，。！？、…—（）\s“”]/.test(ch)) A.blip(sp.voice || 1, radio);
      if (i >= text.length) finish();
      else timer = setTimeout(tick, /[，。！？…]/.test(ch) ? 1000 / cps * 5 : 1000 / cps);
    };
    let timer = setTimeout(tick, 60);
    const finish = () => { done = true; clearTimeout(timer); dText.textContent = text; waveTalking = false; dlg.classList.add("ready"); advance = () => { advance = null; A.sfx("click"); resolve(); }; };
    advance = () => finish();
  });
}

function choose(labels) {
  dlg.classList.remove("ready");
  dChoices.innerHTML = "";
  return new Promise((resolve) => {
    labels.forEach((l, i) => {
      const b = el("button", "choice", `<span>${i + 1}</span>${l}`);
      b.addEventListener("click", (e) => { e.stopPropagation(); advance = null; A.sfx("click"); dChoices.innerHTML = ""; resolve(i); });
      dChoices.appendChild(b);
    });
    advance = null;
    choiceKeys = (n) => { const b = dChoices.children[n]; if (b) b.click(); };
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
  return `background-image:url(assets/scene/${img}.webp${V});background-size:${k * 100}% auto;background-position:${px}% ${py}%`;
}

function cardHTML(id, big = false) {
  const c = CARDS[id], sp = SPEAKERS[c.who];
  const sc = SCENE[CARD_HOME[id]?.scene];
  const hu = c.hu ? `<div class="hu"><b>${c.hu[0]}</b><i>${c.hu[1]}</i><span>${c.hu[2]}</span></div>` : "";
  return `<div class="card ${c.kind === "thing" ? "thing" : ""} ${c.hidden ? "secret" : ""} ${big ? "big" : ""}">
    <div class="thumb" style="${thumbStyle(id)}"><span class="freq">FM ${CARD_FREQ[id]}</span>${c.hidden ? '<span class="badge">隐藏</span>' : ""}</div>
    <div class="cbody"><div class="ctitle">${c.title}</div><div class="cwho" style="--c:${sp.wave}">${sp.name} · ${sc ? sc.name : ""}</div>
    <p class="quote">“${c.quote}”</p>${hu}${c.freq ? `<div class="hint">📻 线索频率 FM ${c.freq}</div>` : ""}</div></div>`;
}

async function grantCard(id) {
  if (has(id)) return;
  S.cards[id] = Date.now(); save();
  A.sfx("card");
  const pop = $("#cardpop");
  pop.innerHTML = `<div class="pop-head">收到一段声音 · ${mainCount()}/${MAIN_CARDS.length}</div>${cardHTML(id, true)}<div class="pop-foot">点击继续</div>`;
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
  $("#chip").innerHTML = `<b>${current.time}</b><span>${current.name}</span><i>${current.weather}</i>`;
  const n = mainCount();
  $("#counter").innerHTML = `<div class="dial"><div class="needle" style="left:${8 + (n / MAIN_CARDS.length) * 84}%"></div>${Array.from({ length: 21 }, (_, i) => `<i style="left:${4 + i * 4.6}%"></i>`).join("")}</div><div class="cnt"><b>${n}</b>/${MAIN_CARDS.length}<span>段上海闲话</span></div>`;
  if (bump) { const c = $("#counter"); c.classList.remove("bump"); void c.offsetWidth; c.classList.add("bump"); }
  $("#inv").innerHTML = S.items.map((it) => `<button class="slot" title="${ITEMS[it].name}：${ITEMS[it].desc}"><img src="assets/item/${ITEMS[it].icon}.webp${V}" alt="${ITEMS[it].name}"></button>`).join("");
  $("#inv").querySelectorAll(".slot").forEach((b, i) => b.addEventListener("click", (e) => { e.stopPropagation(); const it = ITEMS[S.items[i]]; toast(`${it.name}：${it.desc}`, it.icon); }));
  $("#btn-listen").classList.toggle("locked", !S.flags.fixed);
  $("#btn-tuner").classList.toggle("locked", !S.flags.fixed);
  $("#btn-listen").classList.toggle("on", listening);
  // 下一站
  const i = MAIN_ROUTE.indexOf(current.id);
  const next = MAIN_ROUTE[i + 1];
  const nb = $("#next");
  if (!current.bonus && next && cleared(current.id)) {
    const ns = SCENE[next];
    nb.hidden = false;
    nb.innerHTML = `下一站 <b>${ns.time} ${ns.name}</b> ▸`;
    nb.onclick = (e) => { e.stopPropagation(); travel(next); };
  } else if (current.bonus) {
    nb.hidden = false; nb.innerHTML = "回到今天 ▸"; nb.onclick = (e) => { e.stopPropagation(); openMap(); };
  } else nb.hidden = true;
  const left = sceneCards(current.id).filter((c) => !has(c));
  $("#scene-left").textContent = left.length ? `这里还有 ${left.length} 段声音` : "这里的声音都收集到了";
}

function checkProgress() {
  const i = MAIN_ROUTE.indexOf(current.id);
  const next = MAIN_ROUTE[i + 1];
  if (next && cleared(current.id) && !S.flags[`unlock_${next}`]) {
    S.flags[`unlock_${next}`] = true; save();
    A.sfx("unlock");
    toast(`新地点解锁：${SCENE[next].name}`);
    pulse("#next");
  }
}

let toastTimer;
function toast(msg, icon) {
  const t = $("#toast");
  t.innerHTML = `${icon ? `<img src="assets/item/${icon}.webp${V}" alt="">` : ""}<span>${msg}</span>`;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}
function pulse(sel) { const e = $(sel); if (!e) return; e.classList.remove("pulse"); void e.offsetWidth; e.classList.add("pulse"); }

// ---------------------------------------------------------------- 收听模式

function setListen(on) {
  if (on && !S.flags.fixed) { toast("收音机还没修好。去弄堂口的修理铺看看。"); return; }
  listening = on;
  app.classList.toggle("listening", on);
  fx.setListen(on);
  A.setStatic(on ? 0.035 : 0);
  if (!dialogOpen) A.duckMusic(on ? 0.35 : 1);
  if (on) A.sfx("static");
  $("#btn-listen").classList.toggle("on", on);
}

// ---------------------------------------------------------------- 面板：收集簿 / 地图 / 调频 / 设置

function closeAllPanels() { document.querySelectorAll(".panel.open").forEach((p) => p.classList.remove("open")); stopTuner(); }
function openPanel(id) { if (dialogOpen || busy || entering) return false; const p = $(id); const was = p.classList.contains("open"); closeAllPanels(); if (was) { A.sfx("close"); return false; } p.classList.add("open"); A.sfx("open"); return true; }
document.querySelectorAll(".panel .x").forEach((b) => b.addEventListener("click", (e) => { e.stopPropagation(); closeAllPanels(); A.sfx("close"); }));

let jTab = "cards";
function openJournal() { if (!openPanel("#journal")) return; renderJournal(); }
function renderJournal() {
  const body = $("#j-body");
  $("#j-stats").innerHTML = `声音卡 <b>${totalCount()}</b>/${CARD_IDS.length} · 沪语词条 <b>${HU_CARDS.filter(has).length}</b>/${HU_CARDS.length}`;
  document.querySelectorAll("#journal .tab").forEach((t) => t.classList.toggle("on", t.dataset.tab === jTab));
  if (jTab === "cards") {
    body.innerHTML = SCENES.filter((sc) => !sc.bonus || S.bonus[sc.id]).map((sc) => {
      const ids = sceneCards(sc.id);
      const known = S.visited[sc.id];
      return `<section><h3>${known ? `${sc.time} · ${sc.name}` : "？？？"}<small>${ids.filter(has).length}/${ids.length}</small></h3><div class="grid">${ids.map((id) => has(id)
        ? `<button class="mini" data-id="${id}"><div class="thumb" style="${thumbStyle(id)}"></div><span>${CARDS[id].title}</span>${CARDS[id].hu ? "<em>沪</em>" : ""}</button>`
        : `<div class="mini lock"><div class="thumb"></div><span>${CARDS[id].hidden ? "藏起来的声音" : "？？？"}</span></div>`).join("")}</div></section>`;
    }).join("") + (BONUS.some((b) => !S.bonus[b.id]) ? `<section class="bonus-hint"><h3>番外电台<small>${BONUS.filter((b) => S.bonus[b.id]).length}/${BONUS.length}</small></h3><p>用「调频」旋钮在夜空里找找别的电台。线索藏在一些声音卡里。</p></section>` : "");
    body.querySelectorAll(".mini[data-id]").forEach((b) => b.addEventListener("click", () => showCardDetail(b.dataset.id)));
  } else if (jTab === "hu") {
    body.innerHTML = `<div class="dict">${HU_CARDS.map((id) => {
      const c = CARDS[id];
      return has(id) ? `<button class="word" data-id="${id}"><b>${c.hu[0]}</b><i>${c.hu[1]}</i><span>${c.hu[2]}</span></button>` : `<div class="word lock"><b>？？</b><span>还没听到</span></div>`;
    }).join("")}</div><p class="note">读音为近似拼读，只作游戏里的趣味提示。</p>`;
    body.querySelectorAll(".word[data-id]").forEach((b) => b.addEventListener("click", () => showCardDetail(b.dataset.id)));
  } else {
    const all = Object.keys(ITEMS);
    body.innerHTML = `<div class="items">${all.map((k) => S.items.includes(k)
      ? `<div class="itm"><img src="assets/item/${ITEMS[k].icon}.webp${V}" alt=""><b>${ITEMS[k].name}</b><span>${ITEMS[k].desc}</span></div>`
      : `<div class="itm lock"><div class="ph"></div><b>？？？</b><span>${k === "radio" ? "" : "在路上也许会用到"}</span></div>`).join("")}</div>
      <p class="note">道具送出去以后就不在包里了，但它们的故事留在声音卡里。</p>`;
  }
}
document.querySelectorAll("#journal .tab").forEach((t) => t.addEventListener("click", (e) => { e.stopPropagation(); jTab = t.dataset.tab; A.sfx("click"); renderJournal(); }));

function showCardDetail(id) {
  const d = $("#j-detail");
  d.innerHTML = `${cardHTML(id, true)}<div class="dbtn"><button class="px-btn" id="replay">▶ 重听</button><button class="px-btn" id="dclose">收起</button></div>`;
  d.classList.add("show");
  A.sfx("open");
  $("#dclose").onclick = (e) => { e.stopPropagation(); d.classList.remove("show"); A.sfx("close"); };
  $("#replay").onclick = (e) => {
    e.stopPropagation();
    const c = CARDS[id], sp = SPEAKERS[c.who];
    let k = 0; const it = setInterval(() => { A.blip(sp.voice, !sp.portrait); if (++k > Math.min(28, c.quote.length / 2)) clearInterval(it); }, 60);
  };
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
      <span class="num">${open ? (full ? "★" : i + 1) : "🔒"}</span><span class="pl">${open ? `<b>${sc.time}</b> ${sc.name}<small>${got}/${sceneCards(id).length}</small>` : "？？？"}</span>${here ? `<img class="me" src="assets/portrait/xiaoman.webp${V}" alt="">` : ""}</button>`;
  }).join("");
  pins.querySelectorAll(".pin").forEach((b) => b.addEventListener("click", (e) => {
    e.stopPropagation();
    const id = b.dataset.id;
    if (!unlocked(id)) { A.sfx("click"); toast("先把上一站的声音收集够"); return; }
    if (id === current?.id) { closeAllPanels(); return; }
    travel(id);
  }));
  $("#map-list").innerHTML = MAIN_ROUTE.map((id, i) => {
    const sc = SCENE[id], open = unlocked(id), here = current?.id === id;
    const got = sceneCards(id).filter(has).length, all = sceneCards(id).length;
    return `<button class="ml ${open ? "" : "locked"} ${here ? "here" : ""} ${got === all ? "full" : ""}" data-id="${id}">
      <i>${open ? (got === all ? "★" : i + 1) : "🔒"}</i>${open ? `<em><b>${sc.time}</b><span>${sc.name}</span></em><small>${got}/${all}</small>` : "<em><span>？？？</span></em>"}</button>`;
  }).join("");
  $("#map-list").querySelectorAll(".ml").forEach((b) => b.addEventListener("click", (e) => {
    e.stopPropagation();
    $(`#map-pins .pin[data-id="${b.dataset.id}"]`).click();
  }));
  $("#map-bonus").innerHTML = BONUS.map((b) => S.bonus[b.id]
    ? `<button class="px-btn gold" data-id="${b.id}">📻 FM ${b.freq} ${b.name}</button>`
    : `<span class="px-btn ghost">📻 FM ??.? ？？？</span>`).join("");
  $("#map-bonus").querySelectorAll("button").forEach((b) => b.addEventListener("click", (e) => { e.stopPropagation(); travel(b.dataset.id); }));
  $("#map-progress").textContent = `今天已经收集 ${mainCount()} 段上海闲话`;
}

// 调频
let tuner = { f: 95.0, drag: false, locked: null };
const FMIN = 87.5, FMAX = 108;
function openTuner() {
  if (!S.flags.fixed) { toast("收音机还没修好。"); return; }
  if (!openPanel("#tuner")) return;
  const scale = $("#t-scale");
  scale.innerHTML = Array.from({ length: 21 }, (_, i) => { const f = FMIN + i * ((FMAX - FMIN) / 20); return `<i style="left:${(i / 20) * 100}%"><span>${i % 2 === 0 ? Math.round(f) : ""}</span></i>`; }).join("")
    + BONUS.map((b) => (knownFreq(b.freq) ? `<em class="mark ${S.bonus[b.id] ? "found" : ""}" style="left:${((b.freq - FMIN) / (FMAX - FMIN)) * 100}%">${S.bonus[b.id] ? "★" : "?"}</em>` : "")).join("");
  A.stopMusic(0.3);
  updateTuner();
}
const knownFreq = (f) => S.ended || CARD_IDS.some((id) => has(id) && CARDS[id].freq && Number(CARDS[id].freq) === f);
function stopTuner() {
  if (!$("#tuner").classList.contains("open") && !tuner.active) return;
  tuner.active = false;
  A.setStatic(listening ? 0.035 : 0);
  A.tunerSignal(null, 0); A.tunerRelease();
  A.duckMusic(1);
  if (current) A.playMusic(current.mood);
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
    info.innerHTML = `<b>锁定信号 · FM ${best.freq}</b><span>${best.name}</span><button class="px-btn gold" id="t-go">跟着声音去 ▸</button>`;
    $("#t-go").onclick = (e) => { e.stopPropagation(); const id = best.id; if (!S.bonus[id]) { S.bonus[id] = true; save(); A.sfx("lock"); } travel(id); };
    if (!tuner.lockedSfx) { A.sfx("lock"); tuner.lockedSfx = true; }
  } else {
    tuner.locked = null; tuner.lockedSfx = false;
    info.innerHTML = strength > 0.35 ? `<b>好像有什么……</b><span>再慢一点</span>` : `<b>沙沙沙……</b><span>慢慢转动旋钮，寻找藏在夜空里的电台</span>`;
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
  $("#vol-music").value = v.music; $("#vol-sfx").value = v.sfx;
}
$("#vol-music").addEventListener("input", (e) => { A.setVolumes({ music: Number(e.target.value) }); storeVol(); });
$("#vol-sfx").addEventListener("input", (e) => { A.setVolumes({ sfx: Number(e.target.value) }); A.sfx("hover"); storeVol(); });
function storeVol() { try { localStorage.setItem(SAVE_KEY + "-vol", JSON.stringify(A.getVolumes())); } catch {} }
try { const v = JSON.parse(localStorage.getItem(SAVE_KEY + "-vol")); if (v) A.setVolumes(v); } catch {}
$("#btn-reset").addEventListener("click", (e) => {
  e.stopPropagation();
  if (!confirm("确定要清空进度，重新开始这一天吗？")) return;
  localStorage.removeItem(SAVE_KEY); location.reload();
});
$("#btn-full").addEventListener("click", (e) => { e.stopPropagation(); if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen?.().catch(() => {}); });

// ---------------------------------------------------------------- 按钮与键盘

const bind = (sel, fn) => $(sel).addEventListener("click", (e) => { e.stopPropagation(); A.initAudio(); fn(); });
bind("#btn-listen", () => { if (!dialogOpen) setListen(!listening); });
bind("#btn-map", openMap);
bind("#btn-journal", openJournal);
bind("#btn-tuner", openTuner);
bind("#btn-settings", openSettings);

addEventListener("keydown", (e) => {
  if (!started) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); $("#t-start").click(); } return; }
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    if ($("#cardpop").classList.contains("show") && advance) return advance();
    if (dialogOpen) { if (advance) advance(); return; }
    if (e.key === " " && !document.querySelector(".panel.open")) setListen(!listening);
    return;
  }
  if (dialogOpen && /^[1-9]$/.test(e.key) && choiceKeys) { choiceKeys(Number(e.key) - 1); return; }
  if (e.key === "Escape") { closeAllPanels(); $("#j-detail").classList.remove("show"); return; }
  if (dialogOpen) return;
  const k = e.key.toLowerCase();
  if (k === "m") openMap();
  if (k === "j" || k === "tab") { e.preventDefault(); openJournal(); }
  if (k === "t") openTuner();
  if (k === "l") setListen(!listening);
  if (tunerOpen() && (e.key === "ArrowLeft" || e.key === "ArrowRight")) nudge(e.key === "ArrowLeft" ? -0.1 : 0.1);
});
const tunerOpen = () => $("#tuner").classList.contains("open");
stage.addEventListener("click", () => { if (holdPlaying) finishHold(); });

// ---------------------------------------------------------------- 标题与结局

let started = false;
function showTitle() {
  const t = $("#title");
  t.classList.add("show");
  $("#t-continue").hidden = !hasSave() || !Object.keys(S.visited).length;
  $("#t-start").textContent = $("#t-continue").hidden ? "开始新的一天" : "重新开始";
}
async function begin(resume) {
  A.initAudio();
  started = true;
  if (!resume) { S = fresh(); save(); }
  A.sfx("tune");
  $("#title").classList.add("leave");
  $("#tv").pause();
  await wait(700);
  $("#title").classList.remove("show", "leave");
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
  const ev = $("#end-video");
  end.classList.add("show");
  app.classList.add("ended");
  A.stopAmbience();
  A.playMusic("finale");
  setListen(false);
  const cap = $("#end-cap");
  const caption = async (txt, ms) => { cap.textContent = txt; cap.classList.add("show"); await wait(ms); cap.classList.remove("show"); await wait(600); };
  ev.src = `assets/video/moon.mp4${V}`; ev.className = "wide";
  ev.play().catch(() => {});
  await caption("那天晚上，外婆的收音机，第一次唱了歌。", 2600);
  await new Promise((r) => { if (ev.ended) r(); ev.onended = r; setTimeout(r, 4000); });
  ev.src = `assets/video/sleep.mp4${V}`; ev.className = "square";
  ev.play().catch(() => {});
  await caption("小满关了灯。窗外的上海，还在小声讲话。", 3000);
  await new Promise((r) => { if (ev.ended) r(); ev.onended = r; setTimeout(r, 3000); });
  await caption("晚安，上海。", 2200);
  showCredits();
}

function showCredits() {
  const c = $("#credits");
  const mins = Math.max(1, Math.round((Date.now() - S.started) / 60000));
  const quotes = CARD_IDS.filter(has).map((id) => `<li><b>${SPEAKERS[CARDS[id].who].name}</b>“${CARDS[id].quote}”</li>`).join("");
  c.innerHTML = `<h2>像素上海：弄堂电台</h2>
    <div class="stats"><div><b>${totalCount()}</b><span>段声音</span></div><div><b>${HU_CARDS.filter(has).length}</b><span>句上海话</span></div><div><b>${mins}</b><span>分钟</span></div></div>
    <div class="roll"><ul>${quotes}</ul></div>
    <p class="thanks">原作视频《像素上海》· 海辛 Hyacinth<br>场景动画来自原片素材 · 角色与地图由 Nano Banana Pro 生成<br>剧本、程序、芯片音乐与音效 · Mouse（Cursor Agent）<br>字体 Fusion Pixel Font（SIL OFL 1.1）</p>
    <div class="cbtn"><button class="px-btn gold" id="c-more">继续寻找番外电台</button><button class="px-btn" id="c-title">回到标题</button></div>`;
  c.classList.add("show");
  $("#c-more").onclick = async () => { c.classList.remove("show"); $("#ending").classList.remove("show"); app.classList.remove("ended"); $("#end-video").pause(); await travel("moon", { instant: true }); openTuner(); toast("试着把指针拨到 90.3、99.1 或 104.5"); };
  $("#c-title").onclick = () => location.reload();
}

// ---------------------------------------------------------------- 启动

$("#tv").src = `assets/video/skyline.mp4${V}`;
$("#tv").play().catch(() => {});
document.fonts?.ready.then(() => app.classList.add("font-ready"));
showTitle();
addEventListener("visibilitychange", () => { if (document.hidden) { S.playMs += 0; save(); } });

// 调试与自动化测试入口
window.__game = {
  state: () => S, travel, cards: CARD_IDS, scenes: SCENES.map((s) => s.id), setListen, openMap, openJournal, openTuner,
  interact: (id) => interact(current.hotspots.find((h) => h.id === id)), current: () => current?.id, busy: () => busy || holdPlaying || entering,
  dialogOpen: () => dialogOpen, advance: () => advance && advance(), choose: (n) => choiceKeys && choiceKeys(n),
  tune: (f) => { tuner.f = f; updateTuner(); }, mainCount, totalCount
};
