// 运行平台：网页 / B 站 Toy 用原生 <video> 与 fetch；小红书小工具（tools/release/build-xhs.mjs 打包，globalThis.__XHS__ 为真）
// 是离线容器：禁 fetch、包里不能放 mp4 / mp3，配音和场景动画以字节打进 JS，动画用 WebCodecs 解码画到 canvas 上
export const XHS = Boolean(globalThis.__XHS__);
export const V = globalThis.__XHS__ ? "" : "?v=20261006c";

// 小红书包里没有 mp3 / mp4：压缩媒体随 app.js 内嵌；保留旧分块包的兼容读取。
export const voiceUrl = (id) => (globalThis.__XHS__ ? id : `assets/voice/${id}.mp3${V}`);
export const clipUrl = (id) => (globalThis.__XHS__ ? `v/${id}.js` : `assets/video/${id}.mp4${V}`);
// 头像、道具与静帧：小红书包随 app.js 内嵌，不再逐张读文件。
export const imgUrl = (path) => (globalThis.__XHS__ && globalThis.__XHS_IMG?.[path]) || `${path}${V}`;

// 网页专用分支都写成 if / else，打小红书包时整段剔除（包里不能留 fetch）
export async function loadBytes(url) {
  if (globalThis.__XHS__) {
    const scene = globalThis.__XHS_VOICE_SCENE?.[url];
    if (!scene) throw new Error(`no voice ${url}`);
    if (!globalThis.__XHS_VOICE?.[url]) {
      if (globalThis.__XHS_BUNDLED) throw new Error(`missing embedded voice ${url}`);
      await loadScript(`voice/${scene}.js`, () => globalThis.__XHS_VOICE?.[url], 2);
    }
    return b64ToBytes(globalThis.__XHS_VOICE[url]).buffer;
  } else {
    const r = await fetch(url);
    if (!r.ok) throw new Error(r.status);
    return r.arrayBuffer();
  }
}

export async function voiceIndex() {
  if (globalThis.__XHS__) {
    return globalThis.__XHS_VOICE_INDEX || {};
  } else {
    const r = await fetch(`assets/voice/index.json${V}`);
    return r.ok ? r.json() : {};
  }
}

export function prefetchVideo(id, urgent = false) {
  if (globalThis.__XHS__) return typeof VideoDecoder === "undefined" ? Promise.resolve() : loadClip(id, urgent).catch(() => {});
  else return fetch(clipUrl(id)).catch(() => {});
}
// 配音块排队：当前场景用 prio 1（排在预取前面），下一站 / 番外电台 / 词条块用 0（预取）
export function prefetchSceneVoices(scene, prio = 1) {
  if (globalThis.__XHS__ && globalThis.__XHS_VOICE_CHUNKS?.includes(scene)) loadScript(`voice/${scene}.js`, () => globalThis.__XHS_VOICE_LOADED?.[scene], prio).catch(() => {});
}
// 进场景前等本场景配音块（网页版逐句 fetch，没有块）；读不到也返回，不抛错
export function sceneVoices(scene) {
  if (globalThis.__XHS__ && globalThis.__XHS_VOICE_CHUNKS?.includes(scene)) return loadScript(`voice/${scene}.js`, () => globalThis.__XHS_VOICE_LOADED?.[scene], 1).catch(() => null);
  return Promise.resolve(null);
}

// ---------------------------------------------------------------- 读取日志（隐藏的加载日志面板用）
const loadLog = [];
function logStart(kind, src) {
  const e = { kind, src: src.startsWith("data:") ? "内嵌图" : src, at: Date.now(), ms: null, res: "…" };
  loadLog.push(e);
  if (loadLog.length > 60) loadLog.shift();
  return e;
}
function logEnd(e, res) {
  if (e.ms == null) { e.ms = Date.now() - e.at; e.res = res; } else e.late = `${res} ${((Date.now() - e.at) / 1000).toFixed(1)}s`;
}
export const loadDiag = () => ({ hung, paused: prefetchPaused(), held: holdPre, active, pending: active + hung, queued: queue.map((j) => `${j.src}(${j.prio})`), log: loadLog });

// 图片读失败或没回应（容器偶发读包失败 / 卡住）时取消重试（第一次等 4 秒，之后 8 秒）；全部失败返回 null。
// 同一地址同时只有这一个请求方：浏览器会把同地址的图片请求合并，两个请求方各自取消时谁也取消不掉卡住的读取
const imgLoads = new Map();
const imgCache = new Map();
export function loadImage(src) {
  if (globalThis.__XHS__ && !src.startsWith("data:")) src = imgUrl(src.replace(/^\.\//, "").split("?")[0]);
  if (imgCache.has(src)) {
    const img = imgCache.get(src); imgCache.delete(src); imgCache.set(src, img);
    return Promise.resolve(img);
  }
  if (!imgLoads.has(src)) {
    const p = loadImageOnce(src, 4);
    imgLoads.set(src, p);
    p.then(img => {
      imgLoads.delete(src);
      // 小红书内嵌图保留少量已解码位图，避免静帧/海报重复解码；离开多站后释放位图。
      if (img && globalThis.__XHS__) { imgCache.set(src, img); while (imgCache.size > 6) imgCache.delete(imgCache.keys().next().value); }
    });
  }
  return imgLoads.get(src);
}
function loadImageOnce(src, tries) {
  return new Promise((resolve) => {
    let n = 0, timer = 0, done = false, e = null;
    const img = new Image();
    const start = () => { clearTimeout(timer); e = logStart("图", src); timer = setTimeout(() => retry("超时取消"), n ? 8000 : 4000); img.onerror = () => retry("失败"); img.src = src; };
    const retry = (why) => {
      clearTimeout(timer);
      if (done) return;
      logEnd(e, why);
      img.onerror = null;
      img.src = "";
      if (++n >= tries) { done = true; resolve(null); } else setTimeout(start, 500 * 2 ** (n - 1));
    };
    img.onload = () => { done = true; clearTimeout(timer); logEnd(e, "成功"); resolve(img); };
    start();
  });
}

// <video> 或同接口的 CodecVideo
export const media = (el) => (globalThis.__XHS__ ? new CodecVideo(el) : el);
// 当前片段真正画出第一帧（不是海报）时回调一次；换片段后要重新登记
export function onFirstFrame(m, fn) {
  if (m instanceof CodecVideo) m.onframe = () => { m.onframe = null; fn(); };
  else m.addEventListener("playing", fn, { once: true });
}

// 小红书：图片存相册 / 发笔记（JSBridge）
export async function saveImage(dataUrl) {
  const mt = globalThis.xhs?.miniTool;
  if (!mt) throw new Error("no bridge");
  const { filePath } = await mt.writeTempFile({ data: dataUrl });
  await mt.saveImageToPhotosAlbum({ filePath });
}
// postNote：title 最长 20、content 最长 1000（jsbridge-api.md）
export async function postImageNote(dataUrl, title, content) {
  const mt = globalThis.xhs?.miniTool;
  if (!mt) throw new Error("no bridge");
  await mt.postNote({ title: title.slice(0, 20), content: content.slice(0, 1000), pageType: "photo_publish", mediaInfo: { image_resources: [{ url: dataUrl }] } });
}

function b64ToBytes(b64) {
  const s = atob(b64), u = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i);
  return u;
}

// 包内数据脚本按需加载（经典 <script src>，容器允许）。容器读包可能很慢、偶发失败或一直不返回。
// prio：2 眼下就要（正在播的动画、这句台词），1 当前场景马上要用，0 预取。
// active + hung 始终最多 2：超时的 script 不能确认已取消，仍占真实读取预算，绝不另挂同地址或 ?r= 重试。
// 超时任务保留失败记录；调用者及时退回静帧/文字。迟到的 onload/onerror 才归还预算，后续读取可恢复。
// 队列和实际读取都有有限等待；两个读取永久挂起时立即降级，不把后续场景永远堵在队列里。
const READ_MAX = 2, QUEUE_WAIT = 8000;
const scripts = new Map();
const queue = [];
let active = 0, hung = 0, holdPre = false;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const prefetchPaused = () => hung >= READ_MAX;
const loadError = (src, reason) => Object.assign(new Error(`${reason} ${src}`), { degraded: true, timeout: reason === "timeout" });
// 换场景期间先不预取，留给本场景要读的
export function holdPrefetch(on) { holdPre = on; pump(); }
// 空闲时再做的预取（下一站静帧）：没有脚本在读、没在换场景、挂起不多；最多等 30 秒
export function whenIdle(fn) {
  const t0 = Date.now();
  const tick = () => { if (!active && !holdPre && !prefetchPaused() && !queue.some((j) => j.prio > 0)) fn(); else if (Date.now() - t0 < 30000) setTimeout(tick, 500); };
  tick();
}
function loadScript(src, ready, prio = 0) {
  if (ready()) return Promise.resolve(ready());
  let job = scripts.get(src);
  if (!job) {
    if (prefetchPaused()) return Promise.reject(loadError(src, "read budget exhausted"));
    job = { src, ready, prio, state: "queued" };
    job.promise = new Promise((resolve, reject) => { job.resolve = resolve; job.reject = reject; });
    // 挂住的请求保留这个已拒绝的 Promise；重复 play/prefetch 不会创建新 script。
    job.promise.catch(() => {});
    scripts.set(src, job);
    queue.push(job);
    job.timer = setTimeout(() => { dropQueued(job, "queue timeout"); pump(); }, QUEUE_WAIT);
  } else if (prio > job.prio) job.prio = prio;
  pump();
  return job.promise;
}
function dropQueued(job, reason) {
  if (job.state !== "queued") return;
  queue.splice(queue.indexOf(job), 1);
  clearTimeout(job.timer);
  job.state = "done";
  if (scripts.get(job.src) === job) scripts.delete(job.src);
  job.reject(loadError(job.src, reason));
}
function pump() {
  if (prefetchPaused()) {
    for (const job of [...queue]) dropQueued(job, "read budget exhausted");
    return;
  }
  while (active + hung < READ_MAX && queue.length) {
    let i = 0;
    for (let k = 1; k < queue.length; k++) if (queue[k].prio > queue[i].prio) i = k;
    // 预取：空闲才开始，一次一个
    if (queue[i].prio === 0 && (active || holdPre)) return;
    const job = queue.splice(i, 1)[0];
    clearTimeout(job.timer);
    job.state = "active";
    active++;
    attach(job);
  }
}
function attach(job) {
  const { src, ready } = job;
  const s = document.createElement("script");
  const e = logStart(src.startsWith("v/") ? "动画" : "配音", src);
  const t0 = performance.now();
  const settle = (err) => {
    if (job.state === "done") return;
    if (job.state === "hung") hung--; else active--;
    job.state = "done";
    clearInterval(timer);
    s.onload = s.onerror = null;
    logEnd(e, err ? "失败" : "成功");
    // 成功由数据缓存负责；明确错误已归还读取通道，之后的调用允许重试。
    if (scripts.get(src) === job) scripts.delete(src);
    if (err) { s.remove(); job.reject(err); } else job.resolve(ready());
    pump();
  };
  const timer = setInterval(() => {
    if (ready()) { settle(null); return; }
    const limit = src.startsWith("voice/") && job.prio >= 1 ? 4000 : 8000;
    if (performance.now() - t0 >= limit) {
      clearInterval(timer);
      active--; hung++;
      job.state = "hung";
      logEnd(e, "超时，已降级");
      job.reject(loadError(src, "timeout"));
      pump();
    }
  }, 250);
  s.onload = () => settle(ready() ? null : loadError(src, "empty"));
  s.onerror = () => settle(loadError(src, "load failed"));
  s.src = src;
  try { document.head.appendChild(s); } catch (err) { settle(err); }
}

// ---------------------------------------------------------------- 场景动画：v/<id>.js 注册 __XHS_VID[id] = { w, h, fps, codec, desc, data, sizes }
function loadClip(id, urgent = false) {
  if (globalThis.__XHS_BUNDLED) {
    const clip = globalThis.__XHS_VID?.[id];
    return clip ? Promise.resolve(unpack(clip)) : Promise.reject(new Error(`missing embedded clip ${id}`));
  }
  return loadScript(`v/${id}.js`, () => globalThis.__XHS_VID?.[id], urgent ? 2 : 0).then(unpack);
}
function unpack(c) {
  if (c.chunks) return c;
  const data = b64ToBytes(c.data);
  let o = 0;
  c.chunks = c.sizes.map((n) => { const v = data.subarray(o, o + n); o += n; return v; });
  c.description = b64ToBytes(c.desc);
  c.duration = c.sizes.length / c.fps;
  delete c.data;
  return c;
}

const decodable = new Map();
async function supported(clip) {
  if (typeof VideoDecoder === "undefined") return false;
  const key = `${clip.codec}/${clip.w}x${clip.h}`;
  if (!decodable.has(key)) decodable.set(key, VideoDecoder.isConfigSupported(config(clip)).then((r) => r.supported).catch(() => false));
  return decodable.get(key);
}
const config = (clip) => ({ codec: clip.codec, codedWidth: clip.w, codedHeight: clip.h, description: clip.description, optimizeForLatency: true });

// 模拟游戏用到的那部分 <video>：src / poster / loop / play() / pause() / currentTime / duration / ended / onended / style
// 不支持 WebCodecs 的设备停在海报帧（场景静帧），游戏逻辑按播放失败处理
export class CodecVideo {
  constructor(el) {
    const c = document.createElement("canvas");
    c.id = el.id;
    c.className = el.className;
    el.replaceWith(c);
    this.canvas = c;
    this.g = c.getContext("2d");
    this.loop = Boolean(el.loop);
    this.onended = null;
    this.ended = false;
    this._src = "";
    this._poster = "";
    this._pos = 0;
    this._paused = true;
    this._drawn = false;
    this._run = 0;
    this.framesDrawn = 0;
    this.shown = "";
    (globalThis.__XHS_MEDIA ||= []).push(this);
  }
  get style() { return this.canvas.style; }
  get className() { return this.canvas.className; }
  set className(v) { this.canvas.className = v; }
  get src() { return this._src; }
  // 换片段时立即清空画布：新海报、新片段读到之前绝不能还留着上一个场景的最后一帧
  set src(v) {
    this._halt();
    this._src = v || "";
    this._pos = 0;
    this.ended = false;
    this._drawn = false;
    this.shown = "";
    this.onframe = null;
    this.g.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this._poster) this._drawPoster();
  }
  set poster(url) { this._poster = url; if (!this._drawn) this._drawPoster(); }
  get poster() { return this._poster; }
  removeAttribute(k) { if (k === "src") this.src = ""; }
  load() {}
  get duration() { return this._clip ? this._clip.duration : NaN; }
  get paused() { return this._paused; }
  get currentTime() { return this._paused ? this._pos : Math.min(this.duration || 0, (performance.now() - this._t0) / 1000); }

  // shown：画布上现在是哪张海报或哪段动画（换 src 后旧画面不算数）
  async _drawPoster() {
    const url = this._poster;
    for (let n = 0; n < 3; n++) {
      const img = await loadImage(url);
      if (this._drawn || this._poster !== url) return;
      if (img) {
        this._size(img.naturalWidth, img.naturalHeight);
        this.g.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
        this.shown = url;
        return;
      }
      await sleep(3000);
    }
  }
  _size(w, h) { if (this.canvas.width !== w || this.canvas.height !== h) { this.canvas.width = w; this.canvas.height = h; } }

  async play() {
    if (typeof VideoDecoder === "undefined") throw new Error("webcodecs unsupported");
    const id = (this._src.match(/([^/]+)\.(?:mp4|js)/) || [])[1];
    if (!id) throw new Error("no src");
    const run = this._run;
    const clip = await loadClip(id, true);
    if (run !== this._run) return;
    if (!(await supported(clip))) throw new Error("webcodecs unsupported");
    if (run !== this._run) return;
    this._clip = clip;
    if (!this._paused) return;
    this._paused = false;
    this.ended = false;
    try {
      if (!this._dec) this._open();
    } catch (e) {
      this._halt();
      throw e;
    }
    this._t0 = performance.now() - this._pos * 1000;
    this._frame = requestAnimationFrame(this._tick);
  }
  // 和 <video> 一样：还在加载时 pause() 会取消这次 play()
  pause() {
    if (this._paused) { this._run++; return; }
    this._pos = this.currentTime;
    this._paused = true;
    cancelAnimationFrame(this._frame);
  }

  _open() {
    const clip = this._clip;
    this._queue = [];
    this._next = 0;
    this._dec = new VideoDecoder({ output: (f) => this._queue.push(f), error: () => this._fail() });
    this._dec.configure(config(clip));
    this._size(clip.w, clip.h);
  }
  // 解码中途出错：停在当前画面；不循环的片段按播完处理，等 onended 的逻辑不会卡住
  _fail() {
    const once = !this.loop && !this._paused;
    this._halt();
    if (once) { this.ended = true; this.onended?.(); }
  }
  _restart() {
    for (const f of this._queue) f.close();
    this._queue = [];
    this._next = 0;
    this._dec.reset();
    this._dec.configure(config(this._clip));
  }
  _halt() {
    this._run++;
    cancelAnimationFrame(this._frame);
    this._paused = true;
    if (this._queue) for (const f of this._queue) f.close();
    this._queue = [];
    if (this._dec && this._dec.state !== "closed") this._dec.close();
    this._dec = null;
    this._clip = null;
  }

  _tick = () => {
    if (this._paused || !this._dec) return;
    try { this._step(); } catch { this._fail(); }
  };
  _step() {
    const clip = this._clip, fps = clip.fps, n = clip.chunks.length;
    let t = (performance.now() - this._t0) / 1000;
    if (t >= clip.duration) {
      if (this.loop) {
        this._t0 += clip.duration * 1000;
        t -= clip.duration;
        this._restart();
      } else {
        this._pos = clip.duration;
        this._paused = true;
        this.ended = true;
        this.onended?.();
        return;
      }
    }
    // 喂到当前时刻后 0.3 秒，画出时间戳不超过当前时刻的最新一帧
    while (this._next < n && this._next / fps < t + 0.3 && this._dec.decodeQueueSize < 6) {
      const i = this._next++;
      this._dec.decode(new EncodedVideoChunk({ type: i === 0 ? "key" : "delta", timestamp: Math.round((i * 1e6) / fps), duration: Math.round(1e6 / fps), data: clip.chunks[i] }));
    }
    let show = null;
    while (this._queue.length && this._queue[0].timestamp / 1e6 <= t + 0.001) {
      if (show) show.close();
      show = this._queue.shift();
    }
    if (show) {
      this.g.drawImage(show, 0, 0, this.canvas.width, this.canvas.height);
      show.close();
      const first = !this._drawn;
      this._drawn = true;
      this.shown = this._src;
      this.framesDrawn++;
      if (first) this.onframe?.();
    }
    this._frame = requestAnimationFrame(this._tick);
  }
}
