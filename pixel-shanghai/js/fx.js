// 场景粒子、收听模式声波、像素转场。画布用低分辨率绘制，再按像素放大。

const W = 480, H = 270;

export class FX {
  constructor(canvas) {
    this.c = canvas;
    this.c.width = W; this.c.height = H;
    this.g = canvas.getContext("2d");
    this.parts = [];
    this.kind = null;
    this.listen = 0;
    this.listenTarget = 0;
    this.spots = [];
    this.t = 0;
    this.last = performance.now();
    this.hot = null;
    this.reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame((n) => this.loop(n));
  }

  setScene(kind) { this.kind = kind; this.parts = []; for (let i = 0; i < 60; i++) this.spawn(true); }
  setListen(on) { this.listenTarget = on ? 1 : 0; }
  setSpots(spots) { this.spots = spots; }

  spawn(initial = false) {
    const k = this.kind, r = Math.random;
    const p = { x: r() * W, y: initial ? r() * H : -6, vx: 0, vy: 0, life: 1, s: 1, a: 1, ph: r() * 6.28, col: "#fff" };
    switch (k) {
      case "leaves": Object.assign(p, { vx: 6 + r() * 8, vy: 10 + r() * 10, s: 2, col: r() < 0.5 ? "#f2b650" : "#e89a3c" }); break;
      case "sunleaves": Object.assign(p, { vx: 4 + r() * 6, vy: 8 + r() * 8, s: 2, col: r() < 0.6 ? "#9fbf5a" : "#d8c26a" }); break;
      case "maple": Object.assign(p, { vx: 5 + r() * 10, vy: 12 + r() * 10, s: 2, col: r() < 0.5 ? "#e0702e" : "#f09a3a" }); break;
      case "petals": Object.assign(p, { vx: 8 + r() * 10, vy: 9 + r() * 8, s: 1, col: r() < 0.5 ? "#ffc4d8" : "#ffe3ec" }); break;
      case "steam": Object.assign(p, { x: 30 + r() * 50, y: initial ? 170 + r() * 60 : 230, vx: (r() - 0.5) * 3, vy: -8 - r() * 8, s: 2, col: "rgba(255,255,255,0.35)", life: 0.9 + r() }); break;
      case "dust": Object.assign(p, { vx: (r() - 0.5) * 2, vy: (r() - 0.5) * 2, s: 1, col: "rgba(255,240,200,0.8)", y: r() * H }); break;
      case "fireflies": Object.assign(p, { y: 120 + r() * 140, vx: (r() - 0.5) * 5, vy: (r() - 0.5) * 3, s: 1, col: "#ffe58a" }); break;
      case "sparkle": case "stars": Object.assign(p, { y: r() * H * (k === "stars" ? 0.45 : 0.3), vx: 0, vy: 0, s: 1, col: "#fff6d8" }); break;
      case "rain": Object.assign(p, { vx: -12, vy: 240 + r() * 120, s: 1, col: "rgba(200,225,255,0.5)", len: 4 + r() * 5 }); break;
      case "gulls": Object.assign(p, { x: initial ? r() * W : -10, y: 10 + r() * 70, vx: 14 + r() * 10, vy: 0, s: 1, col: "#f6f1e6" }); break;
      case "haze": Object.assign(p, { x: r() * W, y: 60 + r() * 120, vx: 2 + r() * 3, vy: 0, s: 20 + r() * 30, col: "rgba(255,245,235,0.05)" }); break;
      case "moon": Object.assign(p, { y: r() * H, vx: (r() - 0.5) * 1.5, vy: -1 - r() * 2, s: 1, col: "rgba(230,235,255,0.7)" }); break;
      case "neon": Object.assign(p, { y: 180 + r() * 90, vx: (r() - 0.5) * 4, vy: -4 - r() * 6, s: 1, col: r() < 0.5 ? "#ff8ed0" : "#ffd36b" }); break;
      default: return;
    }
    this.parts.push(p);
  }

  loop(now) {
    const dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now; this.t += dt;
    this.listen += (this.listenTarget - this.listen) * Math.min(1, dt * 6);
    const g = this.g;
    g.clearRect(0, 0, W, H);
    if (!this.reduced) this.drawParticles(dt);
    this.drawListen();
    requestAnimationFrame((n) => this.loop(n));
  }

  drawParticles(dt) {
    const g = this.g, k = this.kind;
    const target = { rain: 110, leaves: 26, sunleaves: 18, maple: 30, petals: 40, steam: 26, dust: 40, fireflies: 22, sparkle: 26, stars: 40, gulls: 3, haze: 8, moon: 24, neon: 20 }[k] || 0;
    if (this.parts.length < target && Math.random() < 0.6) this.spawn();
    for (let i = this.parts.length - 1; i >= 0; i--) {
      const p = this.parts[i];
      p.ph += dt * 2;
      if (k === "leaves" || k === "sunleaves" || k === "maple" || k === "petals") p.x += Math.sin(p.ph) * 0.4;
      if (k === "fireflies" || k === "dust") { p.vx += (Math.random() - 0.5) * 0.6; p.vy += (Math.random() - 0.5) * 0.6; }
      p.x += p.vx * dt; p.y += p.vy * dt;
      if (k === "steam") { p.life -= dt * 0.6; if (p.life <= 0) { this.parts.splice(i, 1); continue; } }
      if (p.y > H + 8 || p.x > W + 40 || p.x < -40 || p.y < -20) { this.parts.splice(i, 1); continue; }
      g.globalAlpha = 1;
      if (k === "rain") {
        g.strokeStyle = p.col; g.lineWidth = 1; g.beginPath(); g.moveTo(p.x | 0, p.y | 0); g.lineTo((p.x - 1) | 0, (p.y - p.len) | 0); g.stroke();
        if (p.y > 220 && Math.random() < 0.03) { g.fillStyle = "rgba(220,235,255,0.6)"; g.fillRect((p.x - 1) | 0, p.y | 0, 3, 1); }
        continue;
      }
      if (k === "sparkle" || k === "stars") {
        const tw = (Math.sin(p.ph * 1.7) + 1) / 2;
        if (tw > 0.75) { g.fillStyle = p.col; g.globalAlpha = tw; g.fillRect(p.x | 0, p.y | 0, 1, 1); if (tw > 0.93) { g.fillRect((p.x - 1) | 0, p.y | 0, 3, 1); g.fillRect(p.x | 0, (p.y - 1) | 0, 1, 3); } }
        continue;
      }
      if (k === "fireflies" || k === "neon") { g.globalAlpha = 0.5 + 0.5 * Math.sin(p.ph * 2); }
      if (k === "steam") g.globalAlpha = Math.min(1, p.life);
      if (k === "gulls") {
        const f = Math.sin(p.ph * 4) > 0 ? 1 : 0;
        g.fillStyle = p.col; g.fillRect(p.x | 0, p.y | 0, 1, 1); g.fillRect((p.x - 2) | 0, (p.y - f) | 0, 2, 1); g.fillRect((p.x + 1) | 0, (p.y - f) | 0, 2, 1);
        continue;
      }
      if (k === "haze") { g.fillStyle = p.col; g.fillRect(p.x | 0, p.y | 0, p.s * 3, p.s * 0.4); continue; }
      g.fillStyle = p.col;
      g.fillRect(p.x | 0, p.y | 0, p.s, p.s);
      if ((k === "leaves" || k === "maple") && Math.sin(p.ph) > 0) g.fillRect((p.x + 1) | 0, (p.y + 1) | 0, 1, 1);
    }
    g.globalAlpha = 1;
  }

  drawListen() {
    const L = this.listen;
    if (L < 0.01) return;
    const g = this.g;
    // 扫描线与暗角
    g.fillStyle = `rgba(10,14,30,${0.28 * L})`;
    g.fillRect(0, 0, W, H);
    g.fillStyle = `rgba(120,255,210,${0.05 * L})`;
    for (let y = (this.t * 20) % 3 | 0; y < H; y += 3) g.fillRect(0, y, W, 1);
    const band = ((this.t * 40) % (H + 40)) - 20;
    g.fillStyle = `rgba(160,255,220,${0.06 * L})`; g.fillRect(0, band | 0, W, 6);
    // 每个热点的声波
    for (const s of this.spots) {
      if (s.gone) continue;
      const cx = (s.x + s.w / 2) / 100 * W, cy = (s.y + s.h / 2) / 100 * H;
      const col = s.hidden ? [255, 206, 90] : [140, 255, 215];
      const done = s.done;
      for (let i = 0; i < 3; i++) {
        const ph = ((this.t * 0.8 + i / 3 + s.seed) % 1);
        const r = 4 + ph * (done ? 10 : 22);
        const a = (1 - ph) * L * (done ? 0.35 : 0.9);
        g.strokeStyle = `rgba(${col[0]},${col[1]},${col[2]},${a})`;
        g.lineWidth = 1;
        pixelCircle(g, cx, cy, r);
      }
      g.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${L})`;
      g.fillRect((cx - 1) | 0, (cy - 1) | 0, 3, 3);
    }
  }
}

function pixelCircle(g, cx, cy, r) {
  const n = Math.max(12, (r * 3) | 0);
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    g.fillStyle = g.strokeStyle;
    g.fillRect((cx + Math.cos(a) * r) | 0, (cy + Math.sin(a) * r * 0.8) | 0, 1, 1);
  }
}

// 像素块溶解转场
export function pixelWipe(canvas, dir = "in", ms = 520, color = "#0d0b18") {
  const g = canvas.getContext("2d");
  const cols = 48, rows = 27;
  canvas.width = cols; canvas.height = rows;
  const order = [];
  for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
    const bayer = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]][y % 4][x % 4] / 16;
    const d = Math.hypot(x - cols / 2, (y - rows / 2) * 1.6) / Math.hypot(cols / 2, rows * 0.8);
    order.push({ x, y, v: d * 0.55 + bayer * 0.45 });
  }
  canvas.style.display = "block";
  return new Promise((resolve) => {
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - t0) / ms);
      g.clearRect(0, 0, cols, rows);
      g.fillStyle = color;
      for (const c of order) {
        const on = dir === "in" ? c.v < p * 1.02 : c.v >= p;
        if (on) g.fillRect(c.x, c.y, 1, 1);
      }
      if (p < 1) requestAnimationFrame(step);
      else { if (dir === "out") canvas.style.display = "none"; resolve(); }
    };
    requestAnimationFrame(step);
  });
}
