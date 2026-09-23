// 全部声音都在浏览器里实时合成：芯片乐、环境声、音效、角色“嘀嗒”语音。

let ctx = null;
let master, musicBus, ambBus, sfxBus, voiceBus, radioBus, noiseBuf;
const settings = { music: 0.55, sfx: 0.8 };
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

export function initAudio() {
  if (ctx) { if (ctx.state === "suspended") ctx.resume(); return; }
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  ctx = new AC();
  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -16; comp.ratio.value = 3; comp.attack.value = 0.01; comp.release.value = 0.25;
  master = ctx.createGain(); master.gain.value = 0.9;
  master.connect(comp).connect(ctx.destination);
  musicBus = ctx.createGain(); musicBus.gain.value = settings.music; musicBus.connect(master);
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

export function setVolumes({ music, sfx }) {
  if (music != null) settings.music = music;
  if (sfx != null) settings.sfx = sfx;
  if (!ctx) return;
  const t = ctx.currentTime;
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
  title: { bpm: 70, root: 63, scale: "penta", prog: [[0, 4, 7, 11], [9, 12, 16, 19], [5, 9, 12, 16], [7, 11, 14, 17]], lead: "bell", comp: "pad", arp: "bell", arpRate: 4, bass: false, drums: "none", seed: 11 },
  morning: { bpm: 96, root: 60, scale: "penta", prog: [[0, 4, 7, 14], [9, 12, 16, 19], [5, 9, 12, 16], [7, 11, 14, 17]], lead: "lead", arp: "arp", arpRate: 2, bass: "root5", drums: "light", seed: 3 },
  noon: { bpm: 108, root: 67, scale: "major", prog: [[0, 4, 7, 11], [5, 9, 12, 16], [2, 5, 9, 12], [7, 11, 14, 17]], lead: "lead", arp: "arp", arpRate: 2, bass: "bounce", drums: "pop", seed: 7 },
  dusk: { bpm: 92, swing: 0.64, root: 65, scale: "dorian", prog: [[2, 5, 9, 12], [7, 11, 14, 17], [0, 4, 7, 11], [9, 13, 16, 19]], lead: "clar", comp: "ep", bass: "walk", drums: "brush", seed: 21 },
  night: { bpm: 76, root: 56, scale: "penta", prog: [[0, 4, 7, 11], [4, 7, 11, 14], [5, 9, 12, 16], [5, 8, 12, 15]], lead: "soft", comp: "pad", arp: "arp", arpRate: 2, bass: "long", drums: "light", seed: 5 },
  rain: { bpm: 70, swing: 0.6, root: 57, scale: "mpenta", prog: [[0, 3, 7, 10], [-4, 0, 3, 7], [5, 8, 12, 15], [7, 10, 14, 17]], lead: "soft", comp: "ep", bass: "long", drums: "lofi", seed: 9 },
  finale: { bpm: 64, root: 65, scale: "penta", prog: [[0, 4, 7, 11], [-3, 0, 4, 7], [5, 9, 12, 16], [7, 11, 14, 17]], lead: "bell", comp: "pad", arp: "bell", arpRate: 2, bass: "long", drums: "none", seed: 2 },
  jazz: { bpm: 136, swing: 0.66, root: 58, scale: "major", prog: [[0, 4, 7, 9], [9, 12, 16, 19], [2, 5, 9, 12], [7, 11, 14, 17]], lead: "clar", comp: "ep", bass: "walk", drums: "swing", seed: 31 },
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

let music = null;

export function playMusic(name, { radio = false } = {}) {
  if (!ctx) return;
  if (music && music.name === name && music.radio === radio) return;
  stopMusic();
  const song = SONGS[name] || SONGS.morning;
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
