// 全部音乐与音效都在浏览器里实时合成：芯片乐、环境声、音效、角色“嘀嗒”语音；角色配音为预录 MP3。
import { TUNES as TUNE_DATA } from "./tunes.js?v=20260925h";

let ctx = null;
let master, musicBus, musicDuck, ambBus, sfxBus, voiceBus, radioBus, lineBus, lineRadio, noiseBuf;
const settings = { music: 0.55, sfx: 0.8, voice: 0.9 };
let listenGain = null;

const midiHz = (m) => 440 * Math.pow(2, (m - 69) / 12);

function mulberry(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 切到后台时挂起，回到前台后在下一次触摸时恢复（iOS 会把上下文置为 interrupted）
let pausedByPage = false;
export function setPageHidden(hidden) {
  if (!ctx) return;
  if (hidden && ctx.state === "running") { pausedByPage = true; ctx.suspend(); }
  if (!hidden && pausedByPage) { pausedByPage = false; ctx.resume().catch(() => {}); }
}

export function initAudio() {
  if (ctx) { if (ctx.state !== "running" && !document.hidden) ctx.resume().catch(() => {}); return; }
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  ctx = new AC();
  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -16; comp.ratio.value = 3; comp.attack.value = 0.01; comp.release.value = 0.25;
  master = ctx.createGain(); master.gain.value = 0.9;
  master.connect(comp).connect(ctx.destination);
  musicDuck = ctx.createGain(); musicDuck.connect(master);
  musicBus = ctx.createGain(); musicBus.gain.value = settings.music; musicBus.connect(musicDuck);
  // 角色配音：直出，或经过“电波/电话”滤波
  lineBus = ctx.createGain(); lineBus.gain.value = settings.voice * 1.25; lineBus.connect(master);
  lineRadio = ctx.createBiquadFilter(); lineRadio.type = "bandpass"; lineRadio.frequency.value = 1700; lineRadio.Q.value = 0.7;
  const lineShaper = ctx.createWaveShaper(); lineShaper.curve = makeCurve(2.5);
  const lineRadioGain = ctx.createGain(); lineRadioGain.gain.value = 1.6;
  lineRadio.connect(lineShaper).connect(lineRadioGain).connect(lineBus);
  ambBus = ctx.createGain(); ambBus.gain.value = 0.7 * settings.sfx; ambBus.connect(master);
  sfxBus = ctx.createGain(); sfxBus.gain.value = settings.sfx; sfxBus.connect(master);
  voiceBus = ctx.createGain(); voiceBus.gain.value = 0.55 * settings.sfx; voiceBus.connect(master);
  // “收音机音色”：带通 + 轻微失真
  radioBus = ctx.createBiquadFilter(); radioBus.type = "bandpass"; radioBus.frequency.value = 1500; radioBus.Q.value = 0.9;
  const shaper = ctx.createWaveShaper(); shaper.curve = makeCurve(6); radioBus.connect(shaper).connect(voiceBus);
  noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
  const d = noiseBuf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  buildWaves();
  startListenStatic();
}

// 离线渲染某个 BGM 为 PCM（用于自动化试听检查），不影响正在运行的上下文。
export async function renderMusicOffline(name, seconds = 30, rate = 22050) {
  const saved = { ctx, master, musicBus, noiseBuf, pulse12, pulse25, music };
  const off = new OfflineAudioContext(1, Math.ceil(seconds * rate), rate);
  ctx = off;
  master = off.createGain(); master.gain.value = 0.9; master.connect(off.destination);
  musicBus = off.createGain(); musicBus.gain.value = 0.8; musicBus.connect(master);
  noiseBuf = off.createBuffer(1, rate * 2, rate);
  const d = noiseBuf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  buildWaves();
  music = null;
  const song = SONGS[name];
  const tune = song && song.tune && TUNES[song.tune];
  if (!tune) throw new Error(`no tune for ${name}`);
  music = { name, radio: false, song, tune, out: musicBus, bar: 0, pass: 0, nextBarTime: 0.05 };
  let fake = 0;
  Object.defineProperty(off, "currentTime", { get: () => fake });
  while (music.nextBarTime < seconds) { scheduleTune(); fake = music.nextBarTime; }
  ({ ctx, master, musicBus, noiseBuf, pulse12, pulse25, music } = saved);
  const buf = await off.startRendering();
  return buf.getChannelData(0);
}

function makeCurve(k) {
  const n = 1024, c = new Float32Array(n);
  for (let i = 0; i < n; i++) { const x = (i / n) * 2 - 1; c[i] = ((1 + k) * x) / (1 + k * Math.abs(x)); }
  return c;
}

let pulse12, pulse25;
function buildWaves() {
  const pw = (duty) => {
    const N = 48, re = new Float32Array(N), im = new Float32Array(N);
    for (let n = 1; n < N; n++) im[n] = (2 / (n * Math.PI)) * Math.sin(n * Math.PI * duty);
    return ctx.createPeriodicWave(re, im);
  };
  pulse12 = pw(0.125); pulse25 = pw(0.25);
}

export function setVolumes({ music, sfx, voice }) {
  if (music != null) settings.music = music;
  if (sfx != null) settings.sfx = sfx;
  if (voice != null) settings.voice = voice;
  if (!ctx) return;
  const t = ctx.currentTime;
  lineBus.gain.setTargetAtTime(settings.voice * 1.25, t, 0.1);
  musicBus.gain.setTargetAtTime(settings.music * duckLevel, t, 0.1);
  sfxBus.gain.setTargetAtTime(settings.sfx, t, 0.1);
  ambBus.gain.setTargetAtTime(0.7 * settings.sfx, t, 0.1);
  voiceBus.gain.setTargetAtTime(0.55 * settings.sfx, t, 0.1);
}
export const getVolumes = () => ({ ...settings });

let duckLevel = 1;
export function duckMusic(level) {
  duckLevel = level;
  if (ctx) musicBus.gain.setTargetAtTime(settings.music * level, ctx.currentTime, 0.25);
}

// ---------------------------------------------------------------- 角色配音

const voiceCache = new Map();
export const voiceOn = () => Boolean(ctx) && settings.voice > 0.01;
export function loadVoice(url) {
  if (!ctx) return Promise.resolve(null);
  if (!voiceCache.has(url)) {
    voiceCache.set(url, fetch(url)
      .then((r) => { if (!r.ok) throw new Error(r.status); return r.arrayBuffer(); })
      .then((b) => new Promise((res, rej) => ctx.decodeAudioData(b, res, rej)))
      .catch(() => { voiceCache.delete(url); return null; }));
  }
  return voiceCache.get(url);
}
let curVoice = null;
export function stopVoice() {
  if (!curVoice) return;
  const v = curVoice; curVoice = null;
  try { v.src.stop(); } catch {}
  v.finish();
}
export async function playVoice(url, { radio = false, wait = 900 } = {}) {
  if (!voiceOn()) return null;
  const buf = await Promise.race([loadVoice(url), new Promise((r) => setTimeout(() => r(null), wait))]);
  if (!buf) return null;
  stopVoice();
  if (ctx.state === "suspended") ctx.resume();
  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.connect(radio ? lineRadio : lineBus);
  const t = ctx.currentTime;
  musicDuck.gain.setTargetAtTime(0.4, t, 0.06);
  let finish;
  const ended = new Promise((r) => { finish = () => { musicDuck.gain.setTargetAtTime(1, ctx.currentTime, 0.35); r(); }; });
  const handle = { src, finish, ended, duration: buf.duration };
  src.onended = () => { if (curVoice === handle) { curVoice = null; finish(); } };
  curVoice = handle;
  src.start(t + 0.02);
  return handle;
}

// ---------------------------------------------------------------- 基本音源

function env(g, t, a, peak, d, sustain = 0, r = 0.05, hold = 0) {
  g.gain.cancelScheduledValues(t);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(peak, t + a);
  g.gain.exponentialRampToValueAtTime(Math.max(0.0001, sustain || peak * 0.001), t + a + d);
  if (hold) g.gain.setValueAtTime(Math.max(0.0001, sustain), t + a + d + hold);
  g.gain.exponentialRampToValueAtTime(0.0001, t + a + d + hold + r);
}

function tone({ type = "square", wave, f, t, dur, vol = 0.2, a = 0.005, d = null, sus = 0.6, out, detune = 0, vib = 0, lp = 0, glide = 0 }) {
  const o = ctx.createOscillator();
  if (wave) o.setPeriodicWave(wave); else o.type = type;
  o.frequency.setValueAtTime(glide ? f * glide : f, t);
  if (glide) o.frequency.exponentialRampToValueAtTime(f, t + 0.06);
  o.detune.value = detune;
  const g = ctx.createGain();
  let node = o;
  if (lp) { const fl = ctx.createBiquadFilter(); fl.type = "lowpass"; fl.frequency.value = lp; o.connect(fl); node = fl; }
  node.connect(g).connect(out || sfxBus);
  if (vib) {
    const l = ctx.createOscillator(), lg = ctx.createGain();
    l.frequency.value = 5.2; lg.gain.value = vib; l.connect(lg).connect(o.frequency);
    l.start(t + 0.12); l.stop(t + dur + 0.3);
  }
  const decay = d ?? dur;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(vol, t + a);
  g.gain.setTargetAtTime(vol * sus, t + a, decay * 0.35);
  g.gain.setTargetAtTime(0.0001, t + dur, 0.05);
  o.start(t); o.stop(t + dur + 0.4);
  return o;
}

function noise({ t, dur, vol = 0.2, type = "highpass", f = 6000, q = 0.7, out, a = 0.001 }) {
  const s = ctx.createBufferSource(); s.buffer = noiseBuf;
  s.playbackRate.value = 0.8 + Math.random() * 0.4;
  const fl = ctx.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q;
  const g = ctx.createGain();
  s.connect(fl).connect(g).connect(out || sfxBus);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(vol, t + a);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  s.start(t, Math.random() * 1.5); s.stop(t + dur + 0.05);
}

// ---------------------------------------------------------------- 乐器

const INST = {
  lead: (m, t, dur, v, out) => tone({ wave: pulse12, f: midiHz(m), t, dur, vol: 0.075 * v, a: 0.01, sus: 0.55, out, vib: 3, lp: 3800 }),
  soft: (m, t, dur, v, out) => tone({ type: "triangle", f: midiHz(m), t, dur, vol: 0.13 * v, a: 0.02, sus: 0.6, out, vib: 2.5 }),
  clar: (m, t, dur, v, out) => tone({ type: "square", f: midiHz(m), t, dur, vol: 0.06 * v, a: 0.04, sus: 0.8, out, vib: 4, lp: 1800 }),
  arp: (m, t, dur, v, out) => tone({ wave: pulse25, f: midiHz(m), t, dur: Math.min(dur, 0.22), vol: 0.05 * v, a: 0.003, sus: 0.2, out, lp: 3000 }),
  bell: (m, t, dur, v, out) => {
    tone({ type: "sine", f: midiHz(m), t, dur: 1.2, vol: 0.12 * v, a: 0.002, sus: 0.05, d: 0.6, out });
    tone({ type: "sine", f: midiHz(m + 24) * 1.003, t, dur: 0.4, vol: 0.03 * v, a: 0.002, sus: 0.02, d: 0.2, out });
  },
  pluck: (m, t, dur, v, out) => tone({ type: "sawtooth", f: midiHz(m), t, dur: 0.9, vol: 0.07 * v, a: 0.002, sus: 0.04, d: 0.4, out, lp: 2200, glide: 1.012 }),
  ep: (m, t, dur, v, out) => {
    tone({ type: "sine", f: midiHz(m), t, dur, vol: 0.05 * v, a: 0.005, sus: 0.35, out });
    tone({ type: "triangle", f: midiHz(m + 12), t, dur: 0.3, vol: 0.012 * v, a: 0.002, sus: 0.1, out });
  },
  pad: (m, t, dur, v, out) => {
    tone({ type: "sawtooth", f: midiHz(m), t, dur, vol: 0.018 * v, a: 0.4, sus: 0.9, out, lp: 900, detune: -7 });
    tone({ type: "sawtooth", f: midiHz(m), t, dur, vol: 0.018 * v, a: 0.4, sus: 0.9, out, lp: 900, detune: 7 });
  },
  bass: (m, t, dur, v, out) => tone({ type: "triangle", f: midiHz(m), t, dur: dur * 0.9, vol: 0.2 * v, a: 0.005, sus: 0.7, out }),
  kick: (t, v, out) => {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.12);
    g.gain.setValueAtTime(0.35 * v, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    o.connect(g).connect(out); o.start(t); o.stop(t + 0.3);
  },
  snare: (t, v, out) => noise({ t, dur: 0.16, vol: 0.12 * v, type: "bandpass", f: 1800, q: 0.8, out }),
  brush: (t, v, out) => noise({ t, dur: 0.22, vol: 0.05 * v, type: "bandpass", f: 3500, q: 0.5, out, a: 0.03 }),
  hat: (t, v, out) => noise({ t, dur: 0.045, vol: 0.05 * v, type: "highpass", f: 8000, out }),
  ride: (t, v, out) => noise({ t, dur: 0.3, vol: 0.035 * v, type: "highpass", f: 6500, out })
};

// ---------------------------------------------------------------- 作曲

const SCALES = { major: [0, 2, 4, 5, 7, 9, 11], minor: [0, 2, 3, 5, 7, 8, 10], penta: [0, 2, 4, 7, 9], mpenta: [0, 3, 5, 7, 10], dorian: [0, 2, 3, 5, 7, 9, 10] };

const SONGS = {
  // 8-bit 老歌（tunes.js）；其余为程序生成
  title: { tune: "yeshanghai", tempo: 0.62, lead: "bell", lead2: "soft", comp: "pad", drums: "none" },
  t_zizhu: { tune: "zizhudiao", tempo: 1, lead: "soft", lead2: "lead", comp: "pluck", drums: "none" },
  t_maibao: { tune: "maibaoge", tempo: 0.95, lead: "lead", lead2: "arp", comp: "pluck", drums: "march" },
  t_qiangwei: { tune: "qiangwei", tempo: 0.92, lead: "clar", lead2: "lead", comp: "ep", drums: "rumba" },
  t_suzhou: { tune: "suzhouhebian", tempo: 1, swing: 0.6, lead: "soft", lead2: "clar", comp: "ep", drums: "foxtrot" },
  t_yuguang: { tune: "yuguangqu", tempo: 0.9, lead: "soft", lead2: "bell", comp: "arp", drums: "none" },
  dusk: { tune: "meigui", tempo: 1, swing: 0.62, lead: "clar", lead2: "lead", comp: "ep", drums: "swing" },
  jazz: { tune: "yeshanghai", tempo: 1, swing: 0.64, lead: "clar", lead2: "lead", comp: "ep", drums: "swing" },
  finale: { tune: "caiyunzhuiyue", tempo: 0.8, lead: "soft", lead2: "bell", comp: "pad", arp: "arp", drums: "none" },  morning: { bpm: 96, root: 60, scale: "penta", prog: [[0, 4, 7, 14], [9, 12, 16, 19], [5, 9, 12, 16], [7, 11, 14, 17]], lead: "lead", arp: "arp", arpRate: 2, bass: "root5", drums: "light", seed: 3 },
  noon: { bpm: 108, root: 67, scale: "major", prog: [[0, 4, 7, 11], [5, 9, 12, 16], [2, 5, 9, 12], [7, 11, 14, 17]], lead: "lead", arp: "arp", arpRate: 2, bass: "bounce", drums: "pop", seed: 7 },
  night: { bpm: 76, root: 56, scale: "penta", prog: [[0, 4, 7, 11], [4, 7, 11, 14], [5, 9, 12, 16], [5, 8, 12, 15]], lead: "soft", comp: "pad", arp: "arp", arpRate: 2, bass: "long", drums: "light", seed: 5 },
  rain: { bpm: 70, swing: 0.6, root: 57, scale: "mpenta", prog: [[0, 3, 7, 10], [-4, 0, 3, 7], [5, 8, 12, 15], [7, 10, 14, 17]], lead: "soft", comp: "ep", bass: "long", drums: "lofi", seed: 9 },
  spring: { bpm: 84, root: 62, scale: "penta", prog: [[0, 4, 7, 14], [9, 12, 16, 21], [5, 9, 12, 14], [0, 7, 12, 16]], lead: "pluck", arp: "pluck", arpRate: 4, bass: "long", drums: "none", seed: 17 },
  autumn: { bpm: 80, swing: 0.58, root: 64, scale: "mpenta", prog: [[0, 3, 7, 14], [5, 8, 12, 15], [-2, 2, 5, 9], [3, 7, 10, 14]], lead: "soft", comp: "ep", bass: "long", drums: "lofi", seed: 13 }
};

const RHYTHMS = [
  [4, 2, 2, 4, 4], [2, 2, 4, 2, 2, 4], [6, 2, 4, 4], [3, 3, 2, 4, 4], [4, 4, 8], [2, 2, 2, 2, 8], [8, 4, 4], [4, 2, 2, 8]
];

function compose(song) {
  const rnd = mulberry(song.seed * 977);
  const sc = SCALES[song.scale];
  const pitches = [];
  for (let o = -1; o <= 2; o++) for (const s of sc) pitches.push(song.root + o * 12 + s);
  const nearest = (m) => pitches.reduce((a, b) => (Math.abs(b - m) < Math.abs(a - m) ? b : a));
  const chordTone = (chord, m) => {
    const opts = [];
    for (const c of chord) for (let o = -1; o <= 2; o++) opts.push(song.root + c + o * 12);
    return opts.reduce((a, b) => (Math.abs(b - m) < Math.abs(a - m) ? b : a));
  };
  const motif = (bars, startBar) => {
    const out = [];
    let cur = song.root + 7 + 12 * (rnd() < 0.5 ? 0 : 0);
    for (let b = 0; b < bars; b++) {
      const chord = song.prog[(startBar + b) % song.prog.length];
      const rh = RHYTHMS[Math.floor(rnd() * RHYTHMS.length)];
      let step = 0;
      const notes = [];
      for (const dur of rh) {
        const strong = step % 8 === 0;
        if (rnd() < 0.12 && !strong) { step += dur; continue; }
        let idx = pitches.indexOf(nearest(cur));
        idx += Math.round((rnd() - 0.5) * 4);
        idx = Math.max(6, Math.min(pitches.length - 4, idx));
        cur = pitches[idx];
        if (strong) cur = chordTone(chord, cur);
        cur = Math.max(song.root + 2, Math.min(song.root + 19, cur));
        notes.push({ s: step, d: dur, m: cur });
        step += dur;
      }
      out.push(notes);
    }
    return out;
  };
  const A = motif(2, 0), B = motif(2, 2), C = motif(2, 0);
  const vary = (bars) => bars.map((n, i) => (i === bars.length - 1 ? n.map((x, j) => (j === n.length - 1 ? { ...x, m: song.root + 12 } : x)) : n));
  return [...A, ...vary(A), ...B, ...vary(C)];
}

// ---------------------------------------------------------------- 老歌曲谱

const TUNES = {};
export function registerTunes(list) { for (const t of list) TUNES[t.id] = prepareTune(t); }

const PC = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
const pcOf = (s) => (PC[s[0]] + (s[1] === "#" ? 1 : s[1] === "b" ? -1 : 0) + 12) % 12;
const QUAL = [["maj7", [0, 4, 7, 11]], ["m7b5", [0, 3, 6, 10]], ["m7", [0, 3, 7, 10]], ["m6", [0, 3, 7, 9]], ["dim7", [0, 3, 6, 9]], ["dim", [0, 3, 6]], ["aug", [0, 4, 8]], ["sus4", [0, 5, 7]], ["sus2", [0, 2, 7]], ["m", [0, 3, 7]], ["7", [0, 4, 7, 10]], ["9", [0, 4, 7, 10]], ["6", [0, 4, 7, 9]], ["", [0, 4, 7]]];
function chordOffsets(sym, keyPc) {
  const m = /^([A-G][#b]?)(.*?)(\/.*)?$/.exec(String(sym || "C").trim());
  if (!m) return [0, 4, 7];
  let off = (pcOf(m[1]) - keyPc + 12) % 12;
  if (off > 7) off -= 12;
  const q = (QUAL.find(([k]) => m[2] === k || (k && m[2].startsWith(k))) || QUAL[QUAL.length - 1])[1];
  return q.map((x) => x + off);
}

function prepareTune(t) {
  const beats = Number(String(t.meter || "4/4").split("/")[0]);
  const steps = beats * 4;
  const keyPc = pcOf(t.key || "C");
  let root = t.tonic_midi ?? 60 + (keyPc > 6 ? keyPc - 12 : keyPc);
  while (root > 65) root -= 12;
  while (root < 54) root += 12;
  const bars = [];
  let abs = t.pickup_beats ? (beats - t.pickup_beats) * 4 : 0;
  for (const [m, len] of t.notes) {
    const d = Math.round(len * 4);
    const b = Math.floor(abs / steps);
    while (bars.length <= b) bars.push([]);
    if (m != null) bars[b].push({ s: abs % steps, d, m });
    abs += d;
  }
  while (bars.length < Math.ceil(abs / steps)) bars.push([]);
  // 一格里可以有两个和弦（各占半小节），用空格分开
  const chords = (t.chords || []).map((c) => String(c).trim().split(/\s+/).map((x) => chordOffsets(x, keyPc)));
  const pick = t.pickup_beats ? 1 : 0;
  const chordAt = (i) => chords[Math.max(0, i - pick) % Math.max(1, chords.length)] || [[0, 4, 7]];
  return { ...t, beats, steps, root, bars, chordAt };
}

registerTunes(TUNE_DATA);
export function defineSong(name, def) { SONGS[name] = def; }

let music = null;

export function playMusic(name, { radio = false } = {}) {
  if (!ctx) return;
  if (music && music.name === name && music.radio === radio) return;
  stopMusic();
  const song = SONGS[name] || SONGS.morning;
  if (song.tune && TUNES[song.tune]) return playTune(name, song, radio);
  const melody = compose(song);
  const out = ctx.createGain();
  out.gain.value = 0.0001;
  out.gain.setTargetAtTime(1, ctx.currentTime, 0.6);
  if (radio) {
    const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 1400; bp.Q.value = 0.6;
    out.connect(bp).connect(musicBus);
  } else out.connect(musicBus);
  music = { name, radio, song, melody, out, bar: 0, nextBarTime: ctx.currentTime + 0.1 };
  music.timer = setInterval(scheduleMusic, 60);
  scheduleMusic();
}

function playTune(name, song, radio) {
  const tune = TUNES[song.tune];
  const out = ctx.createGain();
  out.gain.value = 0.0001;
  out.gain.setTargetAtTime(1, ctx.currentTime, 0.6);
  if (radio) {
    const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 1400; bp.Q.value = 0.6;
    out.connect(bp).connect(musicBus);
  } else out.connect(musicBus);
  music = { name, radio, song, tune, out, bar: 0, pass: 0, nextBarTime: ctx.currentTime + 0.1 };
  music.timer = setInterval(scheduleTune, 60);
  scheduleTune();
}

const INTERLUDE = 2;
function scheduleTune() {
  if (!music || !music.tune) return;
  const { song, tune, out } = music;
  const bpm = (tune.bpm || 90) * (song.tempo || 1);
  const sixteenth = 60 / bpm / 4;
  const steps = tune.steps, barLen = sixteenth * steps;
  const cycle = tune.bars.length + INTERLUDE;
  while (music.nextBarTime < ctx.currentTime + 0.4) {
    const t0 = music.nextBarTime;
    const i = music.bar % cycle;
    if (i === 0 && music.bar > 0) music.pass++;
    const inTune = i < tune.bars.length;
    const cell = inTune ? tune.chordAt(i) : tune.chordAt(i - tune.bars.length + (tune.pickup_beats ? 1 : 0));
    const chordFor = (s) => cell[cell.length > 1 && s >= steps / 2 ? 1 : 0];
    const chord = cell[0];
    const swing = song.swing || 0.5;
    const sw = (step) => t0 + (Math.floor(step / 2) * 2 + (step % 2)) * sixteenth + (step % 2 ? (swing - 0.5) * 2 * sixteenth : 0);
    const root = tune.root + (song.transpose || 0);
    if (inTune) {
      const lead = music.pass % 2 && song.lead2 ? song.lead2 : song.lead || "lead";
      const shift = (song.transpose || 0) + (music.pass % 2 && song.lead2Octave ? song.lead2Octave : 0);
      for (const n of tune.bars[i]) INST[lead](n.m + shift, sw(n.s), n.d * sixteenth * 0.92, song.leadVol || 1, out);
    }
    if (song.solo) { music.bar++; music.nextBarTime += barLen; continue; }
    const stab = (s, v = 0.8) => { const inst = INST[song.comp || "ep"]; for (const c of chordFor(s)) inst(root - 12 + c, sw(s), sixteenth * 1.6, v, out); };
    const bassOf = (s) => root - 24 + chordFor(s)[0];
    const fifthOf = (b) => (b + 7 > root - 12 ? b - 5 : b + 7);
    const split = cell.length > 1;
    if (song.comp === "pad") for (const [s, len] of split ? [[0, steps / 2], [steps / 2, steps / 2]] : [[0, steps]]) for (const c of chordFor(s)) INST.pad(root - 12 + c, sw(s), sixteenth * len * 0.98, 1, out);
    if (song.comp === "arp" || song.arp) {
      const seq = [0, 1, 2, 3, 2, 1];
      for (let s = 0, k = 0; s < steps; s += 2, k++) { const ch = chordFor(s); INST[song.arp || "arp"](root + ch[seq[k % seq.length] % ch.length], sw(s), sixteenth * 2, 0.8, out); }
    }
    const comping = song.comp !== "pad" && song.comp !== "arp";
    if (tune.beats === 3) {
      INST.bass(bassOf(0), t0, sixteenth * 3.5, 1, out);
      if (comping) { stab(4); stab(8); }
    } else if (tune.beats === 2) {
      const b = bassOf(0);
      INST.bass(split ? b : music.bar % 2 ? fifthOf(b) : b, t0, sixteenth * 3.5, 1, out);
      if (split) INST.bass(bassOf(4), sw(4), sixteenth * 3.5, 0.9, out);
      if (comping) { stab(2, 0.6); stab(6, 0.6); }
    } else {
      if (song.bass === "walk" && !split) {
        const b = bassOf(0), next = root - 24 + tune.chordAt((i + 1) % cycle)[0][0];
        [b, b + (chord[1] - chord[0]), b + 7, next + (next > b ? -1 : 1)].forEach((m, k) => INST.bass(m, sw(k * 4), sixteenth * 3.5, 0.9, out));
      } else { const b = bassOf(0), b2 = bassOf(8); INST.bass(b, t0, sixteenth * 7, 1, out); INST.bass(split ? b2 : fifthOf(b), sw(8), sixteenth * 7, 0.85, out); }
      if (comping) { stab(4); stab(12); }
    }
    const dr = song.drums || "none";
    for (let s = 0; s < steps; s++) {
      const t = sw(s);
      if (dr === "waltz") { if (s === 0) INST.kick(t, 0.5, out); if (s === 4 || s === 8) INST.hat(t, 0.5, out); }
      if (dr === "march") { if (s === 0) INST.kick(t, 0.7, out); if (s === steps / 2) INST.snare(t, 0.5, out); if (s % 2 === 0) INST.hat(t, 0.45, out); }
      if (dr === "foxtrot") { if (s === 0 || s === 8) INST.kick(t, 0.55, out); if (s === 4 || s === 12) INST.brush(t, 0.9, out); if (s % 2 === 0) INST.hat(t, 0.35, out); }
      if (dr === "swing") { if (s % 4 === 0 || s % 4 === 3) INST.ride(t, 0.7, out); if (s === 4 || s === 12) INST.brush(t, 0.8, out); if (s === 0) INST.kick(t, 0.4, out); }
      if (dr === "rumba") { if (s === 0 || s === 6 || s === 8) INST.kick(t, 0.5, out); if (s === 3 || s === 6 || s === 10 || s === 12) INST.hat(t, 0.5, out); }
      if (dr === "lofi") { if (s === 0 || s === 7 || s === 10) INST.kick(t, 0.5, out); if (s === 4 || s === 12) INST.snare(t, 0.4, out); if (s % 2 === 0) INST.hat(t, 0.3, out); }
    }
    music.bar++;
    music.nextBarTime += barLen;
  }
}

export function stopMusic(fade = 0.8) {
  if (!music) return;
  const m = music;
  music = null;
  clearInterval(m.timer);
  m.out.gain.setTargetAtTime(0.0001, ctx.currentTime, fade / 4);
  setTimeout(() => m.out.disconnect(), fade * 1000 + 600);
}

function scheduleMusic() {
  if (!music) return;
  const { song, out } = music;
  const sixteenth = 60 / song.bpm / 4;
  const barLen = sixteenth * 16;
  while (music.nextBarTime < ctx.currentTime + 0.4) {
    const t0 = music.nextBarTime;
    const bar = music.bar;
    const chord = song.prog[bar % song.prog.length];
    const sw = (step) => {
      const swing = song.swing || 0.5;
      const pair = Math.floor(step / 2) * 2;
      const off = step % 2 === 1 ? (swing - 0.5) * 2 * sixteenth : 0;
      return t0 + (pair + (step % 2)) * sixteenth + off;
    };
    // 旋律：前 8 小节演奏，后 8 小节只留伴奏，给对话留空间
    const phrase = Math.floor(bar / 8) % 2;
    if (phrase === 0) {
      const notes = music.melody[bar % music.melody.length];
      for (const n of notes) INST[song.lead](n.m, sw(n.s), n.d * sixteenth * 0.95, 1, out);
    }
    // 伴奏
    if (song.comp) {
      const inst = INST[song.comp];
      if (song.comp === "pad") for (const c of chord) inst(song.root - 12 + c, t0, barLen * 0.98, 1, out);
      else for (const s of [2, 6, 10, 14]) if (Math.random() < 0.75) for (const c of chord) inst(song.root - 12 + c, sw(s), sixteenth * 1.6, 0.8, out);
    }
    if (song.arp) {
      const rate = song.arpRate || 2;
      const seq = [0, 1, 2, 3, 2, 1, 0, 2];
      for (let s = 0, k = 0; s < 16; s += rate, k++) INST[song.arp](song.root + chord[seq[k % seq.length] % chord.length], sw(s), sixteenth * rate, 0.9, out);
    }
    // 低音
    const r = song.root - 24 + chord[0];
    if (song.bass === "root5") { INST.bass(r, t0, sixteenth * 6, 1, out); INST.bass(r + 7, t0 + sixteenth * 8, sixteenth * 6, 0.8, out); }
    if (song.bass === "bounce") for (const [s, iv] of [[0, 0], [4, 12], [8, 7], [12, 12]]) INST.bass(r + iv, sw(s), sixteenth * 3, 0.9, out);
    if (song.bass === "long") INST.bass(r, t0, barLen * 0.95, 0.8, out);
    if (song.bass === "walk") {
      const next = song.root - 24 + song.prog[(bar + 1) % song.prog.length][0];
      const walk = [r, r + chord[1] - chord[0], r + 7, next + (next > r ? -1 : 1)];
      walk.forEach((m, i) => INST.bass(m, sw(i * 4), sixteenth * 3.5, 0.9, out));
    }
    // 鼓
    const dr = song.drums;
    for (let s = 0; s < 16; s++) {
      const t = sw(s);
      if (dr === "light") { if (s === 0 || s === 10) INST.kick(t, 0.6, out); if (s % 4 === 2) INST.hat(t, 0.6, out); }
      if (dr === "pop") { if (s === 0 || s === 8 || s === 11) INST.kick(t, 0.8, out); if (s === 4 || s === 12) INST.snare(t, 0.7, out); if (s % 2 === 0) INST.hat(t, 0.5, out); }
      if (dr === "brush") { if (s === 4 || s === 12) INST.brush(t, 1, out); if (s % 4 === 0) INST.hat(t, 0.35, out); }
      if (dr === "lofi") { if (s === 0 || s === 7 || s === 10) INST.kick(t, 0.55, out); if (s === 4 || s === 12) INST.snare(t, 0.45, out); if (s % 2 === 0) INST.hat(t, 0.35, out); }
      if (dr === "swing") { if (s % 4 === 0 || s % 4 === 3) INST.ride(t, 0.8, out); if (s === 4 || s === 12) INST.brush(t, 0.8, out); if (s === 0) INST.kick(t, 0.4, out); }
    }
    if (dr === "lofi") noise({ t: t0, dur: barLen, vol: 0.006, type: "bandpass", f: 3000, q: 0.3, out, a: 0.2 });
    music.bar++;
    music.nextBarTime += barLen;
  }
}

// ---------------------------------------------------------------- 环境声

let amb = null;

export function playAmbience(name) {
  if (!ctx) return;
  if (amb && amb.name === name) return;
  stopAmbience();
  const out = ctx.createGain(); out.gain.value = 0.0001; out.connect(ambBus);
  out.gain.setTargetAtTime(1, ctx.currentTime, 0.8);
  amb = { name, out, nodes: [], timers: [] };
  const bed = (type, f, vol, q = 0.7, lfo = 0) => {
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
    const fl = ctx.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q;
    const g = ctx.createGain(); g.gain.value = vol;
    s.connect(fl).connect(g).connect(out); s.start();
    if (lfo) { const l = ctx.createOscillator(), lg = ctx.createGain(); l.frequency.value = lfo; lg.gain.value = vol * 0.6; l.connect(lg).connect(g.gain); l.start(); amb.nodes.push(l); }
    amb.nodes.push(s);
  };
  const every = (min, max, fn) => {
    const loop = () => { if (!amb || amb.out !== out) return; fn(ctx.currentTime + 0.05); amb.timers.push(setTimeout(loop, (min + Math.random() * (max - min)) * 1000)); };
    amb.timers.push(setTimeout(loop, min * 500 + Math.random() * 1000));
  };
  const chirp = (t) => { const n = 2 + Math.floor(Math.random() * 3), f = 2600 + Math.random() * 1600; for (let i = 0; i < n; i++) tone({ type: "sine", f, t: t + i * 0.09, dur: 0.06, vol: 0.03, a: 0.005, out, glide: 0.7 }); };
  const gull = (t) => { const o = tone({ type: "sawtooth", f: 900, t, dur: 0.35, vol: 0.012, a: 0.03, out, lp: 1600 }); o.frequency.setValueAtTime(1200, t); o.frequency.exponentialRampToValueAtTime(700, t + 0.35); };
  const clink = (t) => { tone({ type: "sine", f: 3200 + Math.random() * 1500, t, dur: 0.3, vol: 0.018, a: 0.001, sus: 0.05, d: 0.2, out }); };
  const drip = (t) => { tone({ type: "sine", f: 1200 + Math.random() * 900, t, dur: 0.06, vol: 0.03, a: 0.001, sus: 0.1, out, glide: 1.6 }); };
  const cricket = (t) => { for (let i = 0; i < 3; i++) tone({ type: "sine", f: 4600, t: t + i * 0.05, dur: 0.03, vol: 0.012, a: 0.002, out }); };
  switch (name) {
    case "birds": bed("lowpass", 500, 0.03, 0.5, 0.1); every(1.2, 3.5, chirp); break;
    case "street": bed("bandpass", 700, 0.05, 0.6, 0.15); every(2.5, 6, chirp); every(5, 10, clink); break;
    case "shop": bed("bandpass", 2500, 0.012, 0.8); bed("lowpass", 180, 0.05); every(0.5, 0.5, (t) => noise({ t, dur: 0.02, vol: 0.01, type: "highpass", f: 3000, out })); break;
    case "river": bed("lowpass", 420, 0.12, 0.5, 0.12); every(3, 7, gull); break;
    case "dock": bed("lowpass", 380, 0.1, 0.5, 0.1); bed("highpass", 3000, 0.01); every(2, 5, gull); break;
    case "bar": bed("bandpass", 650, 0.07, 1.2, 0.3); bed("bandpass", 1300, 0.03, 1.5, 0.45); every(1.2, 3, clink); break;
    case "city": bed("lowpass", 220, 0.12, 0.5, 0.05); every(6, 12, (t) => tone({ type: "square", f: 420, t, dur: 0.18, vol: 0.006, out, lp: 900 })); break;
    case "rain": bed("highpass", 1200, 0.07); bed("lowpass", 600, 0.05); every(0.15, 0.6, drip); break;
    case "rainsoft": bed("highpass", 1800, 0.04); bed("lowpass", 500, 0.04); every(0.4, 1.4, drip); break;
    case "summer": bed("lowpass", 300, 0.03); every(0.3, 0.9, cricket); break;
    case "night": bed("lowpass", 300, 0.04, 0.5, 0.07); every(8, 14, (t) => tone({ type: "sine", f: 180, t, dur: 1.4, vol: 0.02, a: 0.5, out })); break;
    case "temple": bed("lowpass", 400, 0.03, 0.5, 0.08); every(2, 4, chirp); every(7, 12, (t) => INST.bell(67, t, 1, 0.5, out)); break;
    default: break;
  }
}

export function stopAmbience() {
  if (!amb) return;
  const a = amb; amb = null;
  a.timers.forEach(clearTimeout);
  a.out.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.3);
  setTimeout(() => { a.nodes.forEach((n) => { try { n.stop(); } catch {} }); a.out.disconnect(); }, 1600);
}

// ---------------------------------------------------------------- 收听模式与调频的静电声

let staticGain, staticFilter;
function startListenStatic() {
  const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
  staticFilter = ctx.createBiquadFilter(); staticFilter.type = "bandpass"; staticFilter.frequency.value = 2200; staticFilter.Q.value = 0.6;
  staticGain = ctx.createGain(); staticGain.gain.value = 0;
  s.connect(staticFilter).connect(staticGain).connect(sfxBus); s.start();
  listenGain = staticGain;
}
export function setStatic(level, freq = 2200) {
  if (!ctx || !listenGain) return;
  listenGain.gain.setTargetAtTime(level, ctx.currentTime, 0.08);
  staticFilter.frequency.setTargetAtTime(freq, ctx.currentTime, 0.08);
}

// ---------------------------------------------------------------- 语音与音效

export function blip(voice = 1, radio = false) {
  if (!ctx) return;
  const t = ctx.currentTime;
  const base = 330 * voice * Math.pow(2, (Math.floor(Math.random() * 5) - 2) / 12);
  tone({ wave: pulse25, f: base, t, dur: 0.045, vol: radio ? 0.16 : 0.1, a: 0.002, sus: 0.3, out: radio ? radioBus : voiceBus, lp: 2600 });
  if (radio && Math.random() < 0.5) noise({ t, dur: 0.05, vol: 0.02, type: "bandpass", f: 2500, out: voiceBus });
}

export function sfx(name) {
  if (!ctx) return;
  const t = ctx.currentTime + 0.01;
  const S = sfxBus;
  switch (name) {
    case "click": tone({ wave: pulse25, f: 880, t, dur: 0.04, vol: 0.06, out: S }); break;
    case "hover": tone({ type: "triangle", f: 1320, t, dur: 0.03, vol: 0.025, out: S }); break;
    case "open": [0, 4, 7].forEach((s, i) => tone({ wave: pulse25, f: midiHz(72 + s), t: t + i * 0.04, dur: 0.06, vol: 0.05, out: S })); break;
    case "close": [7, 4, 0].forEach((s, i) => tone({ wave: pulse25, f: midiHz(72 + s), t: t + i * 0.04, dur: 0.06, vol: 0.045, out: S })); break;
    case "card": [0, 4, 7, 12, 16].forEach((s, i) => { tone({ wave: pulse12, f: midiHz(76 + s), t: t + i * 0.07, dur: 0.18, vol: 0.07, out: S }); INST.bell(88 + s, t + i * 0.07, 0.3, 0.3, S); }); break;
    case "item": [0, 7, 12].forEach((s, i) => tone({ type: "triangle", f: midiHz(79 + s), t: t + i * 0.06, dur: 0.12, vol: 0.12, out: S })); break;
    case "unlock": [0, 4, 7, 11, 14].forEach((s, i) => tone({ type: "triangle", f: midiHz(67 + s), t: t + i * 0.09, dur: 0.3, vol: 0.1, out: S })); break;
    case "static": noise({ t, dur: 1.2, vol: 0.12, type: "bandpass", f: 2400, q: 0.4, a: 0.05, out: S }); break;
    case "tune": {
      noise({ t, dur: 0.9, vol: 0.1, type: "bandpass", f: 2000, q: 0.5, a: 0.02, out: S });
      const o = tone({ type: "sine", f: 400, t, dur: 0.8, vol: 0.05, out: S }); o.frequency.setValueAtTime(300, t); o.frequency.exponentialRampToValueAtTime(1800, t + 0.7);
      break;
    }
    case "whoosh": noise({ t, dur: 0.7, vol: 0.08, type: "bandpass", f: 900, q: 0.6, a: 0.25, out: S }); break;
    case "meow": {
      const o = ctx.createOscillator(); o.type = "sawtooth";
      o.frequency.setValueAtTime(520, t); o.frequency.linearRampToValueAtTime(780, t + 0.18); o.frequency.linearRampToValueAtTime(430, t + 0.6);
      const f = ctx.createBiquadFilter(); f.type = "bandpass"; f.Q.value = 5; f.frequency.setValueAtTime(900, t); f.frequency.linearRampToValueAtTime(1800, t + 0.2); f.frequency.linearRampToValueAtTime(700, t + 0.6);
      const g = ctx.createGain(); env(g, t, 0.05, 0.25, 0.5, 0.1, 0.1);
      o.connect(f).connect(g).connect(S); o.start(t); o.stop(t + 0.8);
      break;
    }
    case "squeak": [0, 0.09, 0.18].forEach((d) => tone({ type: "square", f: 2600, t: t + d, dur: 0.05, vol: 0.03, out: S, glide: 0.6, lp: 4000 })); break;
    case "bell": [0, 0.22].forEach((d) => { tone({ type: "sine", f: 2200, t: t + d, dur: 0.5, vol: 0.08, sus: 0.05, d: 0.3, out: S }); tone({ type: "sine", f: 3350, t: t + d, dur: 0.4, vol: 0.04, sus: 0.05, d: 0.2, out: S }); }); break;
    case "chime": [0, 1.4].forEach((d) => [1, 2.4, 3, 4.2].forEach((p, i) => tone({ type: "sine", f: 196 * p, t: t + d, dur: 3, vol: 0.09 / (i + 1), a: 0.003, sus: 0.02, d: 2.2, out: S }))); break;
    case "horn": { const o = tone({ type: "sawtooth", f: 82, t, dur: 2.2, vol: 0.12, a: 0.4, sus: 0.9, out: S, lp: 420 }); tone({ type: "sawtooth", f: 123, t, dur: 2.2, vol: 0.06, a: 0.4, sus: 0.9, out: S, lp: 420 }); o.detune.value = -8; break; }
    case "shutter": noise({ t, dur: 0.05, vol: 0.2, type: "highpass", f: 2000, out: S }); noise({ t: t + 0.08, dur: 0.06, vol: 0.15, type: "highpass", f: 2500, out: S }); break;
    case "fix": [0, 0.1, 0.2].forEach((d) => noise({ t: t + d, dur: 0.04, vol: 0.2, type: "bandpass", f: 3000, q: 2, out: S })); tone({ type: "triangle", f: 988, t: t + 0.35, dur: 0.2, vol: 0.1, out: S }); break;
    case "vinyl": for (let i = 0; i < 20; i++) noise({ t: t + Math.random() * 1.5, dur: 0.01, vol: 0.12, type: "highpass", f: 4000, out: S }); break;
    case "beep": [0, 0.35, 0.7, 1.05].forEach((d) => tone({ type: "square", f: 1000, t: t + d, dur: 0.12, vol: 0.04, out: S, lp: 3000 })); break;
    case "projector": for (let i = 0; i < 16; i++) noise({ t: t + i * 0.09, dur: 0.02, vol: 0.12, type: "bandpass", f: 1800, q: 3, out: S }); break;
    case "ring": [0, 0.5].forEach((d) => { for (let i = 0; i < 8; i++) tone({ type: "sine", f: i % 2 ? 800 : 1000, t: t + d + i * 0.04, dur: 0.04, vol: 0.05, out: S }); }); break;
    case "lock": [0, 7, 12, 19].forEach((s, i) => INST.bell(72 + s, t + i * 0.1, 1, 0.8, S)); break;
    default: break;
  }
}

// 调频：让某首曲子透过“收音机”若隐若现
let tunerSong = null;
export function tunerSignal(name, strength) {
  if (!ctx) return;
  if (!name || strength <= 0.02) { if (tunerSong) { stopMusic(0.3); tunerSong = null; } return; }
  if (tunerSong !== name) { playMusic(name, { radio: true }); tunerSong = name; }
  duckMusic(Math.min(1, strength * 1.4));
}
export function tunerRelease() { tunerSong = null; }
