/* 사진에서 뜬 배경 테마 — 사장님이 준 사진 일곱 장을 하나씩 그림으로 옮긴 것.
   격자·깅엄은 쓰지 않는다(사장님이 싫어함). 전부 손으로 그린 SVG 라 그림 파일이 없다.

   ⛔ 여기 한 곳이 화면(app.css 변수)과 카드(card.js) 두 군데를 같이 먹인다.
      새 테마를 넣을 때 다른 파일을 고칠 필요가 없다. */
window.LBPat = (() => {
  'use strict';

  const rnd = (seed) => () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648;
  const n = (v) => Math.round(v * 10) / 10;

  /* ── 그림 조각 ─────────────────────────────────────────── */

  // 리본
  const bow = (x, y, c, s, rot) => `<g transform="translate(${x} ${y}) rotate(${rot || 0}) scale(${s})" fill="none" stroke="${c}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M0 0C-6-12-20-15-22-6-24 3-9 5 0 0Z"/><path d="M0 0C6-12 20-15 22-6 24 3 9 5 0 0Z"/>
    <path d="M-2 2C-7 12-13 18-17 23"/><path d="M2 2C7 12 13 18 17 23"/></g>`;

  // 체리 두 알
  const cherry = (x, y, rot) => `<g transform="translate(${x} ${y}) rotate(${rot || 0})">
    <path d="M-9-10C-6-24 0-31 3-34" fill="none" stroke="#7A5A3C" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M11-7C10-22 6-30 3-34" fill="none" stroke="#7A5A3C" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M3-34C10-40 20-38 22-32 15-29 7-30 3-34Z" fill="#8AA75F"/>
    <circle cx="-9" cy="0" r="10.5" fill="#C0392B"/><circle cx="11" cy="3" r="9.5" fill="#AE3226"/>
    <circle cx="-12" cy="-3" r="2.6" fill="#E98B80" opacity=".8"/></g>`;

  // 작은 파란 꽃
  const flower5 = (x, y, p, ctr, r) => `<g transform="translate(${x} ${y})">` +
    Array.from({ length: 5 }, (_, i) => {
      const a = -1.5708 + (i / 5) * 6.2832;
      return `<circle cx="${n(Math.cos(a) * r)}" cy="${n(Math.sin(a) * r)}" r="${n(r * .62)}" fill="${p}"/>`;
    }).join('') + `<circle r="${n(r * .5)}" fill="${ctr}"/></g>`;

  // 곰인형 얼굴
  const bear = (x, y, rot) => `<g transform="translate(${x} ${y}) rotate(${rot || 0})">
    <circle cx="-17" cy="-17" r="9.5" fill="#96643D"/><circle cx="17" cy="-17" r="9.5" fill="#96643D"/>
    <circle r="22" fill="#A87548"/>
    <ellipse cy="9" rx="12.5" ry="9.5" fill="#DFBE95"/>
    <circle cx="-8.5" cy="-3" r="2.7" fill="#33210F"/><circle cx="8.5" cy="-3" r="2.7" fill="#33210F"/>
    <ellipse cy="4" rx="4.2" ry="3.1" fill="#33210F"/></g>`;

  // 네 갈래 반짝임
  const spark = (x, y, r, c, sw) => (sw
    ? `<path d="M${x} ${y - r}Q${x + r * .16} ${y - r * .16} ${x + r} ${y}Q${x + r * .16} ${y + r * .16} ${x} ${y + r}Q${x - r * .16} ${y + r * .16} ${x - r} ${y}Q${x - r * .16} ${y - r * .16} ${x} ${y - r}Z" fill="none" stroke="${c}" stroke-width="${sw}" stroke-linejoin="round"/>`
    : `<path d="M${x} ${y - r}Q${x + r * .16} ${y - r * .16} ${x + r} ${y}Q${x + r * .16} ${y + r * .16} ${x} ${y + r}Q${x - r * .16} ${y + r * .16} ${x - r} ${y}Q${x - r * .16} ${y - r * .16} ${x} ${y - r}Z" fill="${c}"/>`);

  // 다섯 갈래 별
  const star5 = (x, y, r, fill, stroke, sw) => {
    let d = '';
    for (let i = 0; i < 10; i++) {
      const a = -1.5708 + (i * Math.PI) / 5, rr = i % 2 ? r * .45 : r;
      d += (i ? 'L' : 'M') + n(x + Math.cos(a) * rr) + ' ' + n(y + Math.sin(a) * rr);
    }
    return `<path d="${d}Z" fill="${fill || 'none'}"${stroke ? ` stroke="${stroke}" stroke-width="${sw || 3}" stroke-linejoin="round"` : ''}/>`;
  };

  // 물결치는 세로줄 — 세로로 이어 붙여도 이음매가 안 보이게 반 주기씩 번갈아 그린다
  const vwave = (x, h, amp, half) => {
    let d = `M${x} 0`;
    for (let y = 0, s = 1; y < h; y += half, s = -s) {
      d += `C${n(x + amp * s)} ${n(y + half * .34)} ${n(x + amp * s)} ${n(y + half * .66)} ${x} ${y + half}`;
    }
    return d;
  };

  /* ── 테마 일곱 ─────────────────────────────────────────── */

  // 1. 오라 — 무지개빛 하트가 크게 번지는 하늘
  const HEART = 'M12 21C-4 11 1 3 7 3c3 0 5 3 5 3s2-3 5-3c6 0 11 8-5 18z';
  const aura = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1400" viewBox="0 0 800 1400">
<defs><linearGradient id="ag" x1="0" y1="0" x2=".35" y2="1"><stop offset="0" stop-color="#C4C8EE"/><stop offset=".4" stop-color="#CEDFF5"/><stop offset="1" stop-color="#E1DBF3"/></linearGradient>
<radialGradient id="ah"><stop offset="0" stop-color="#FF7FB2"/><stop offset=".22" stop-color="#FFA98C"/><stop offset=".42" stop-color="#FFD979"/><stop offset=".62" stop-color="#FFF6D2"/><stop offset=".8" stop-color="#F2E4FF" stop-opacity=".7"/><stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/></radialGradient>
<radialGradient id="ai"><stop offset="0" stop-color="#FF7CAF"/><stop offset=".55" stop-color="#FFB6D2"/><stop offset="1" stop-color="#FFD4E4" stop-opacity="0"/></radialGradient>
<filter id="ab" x="-45%" y="-45%" width="190%" height="190%"><feGaussianBlur stdDeviation="62"/></filter>
<filter id="ac" x="-45%" y="-45%" width="190%" height="190%"><feGaussianBlur stdDeviation="16"/></filter></defs>
<rect width="800" height="1400" fill="url(#ag)"/>
<g filter="url(#ab)"><g transform="translate(400 660) scale(27) translate(-12 -12)"><path d="${HEART}" fill="url(#ah)"/></g></g>
<g filter="url(#ac)"><g transform="translate(400 640) scale(7.5) translate(-12 -12)"><path d="${HEART}" fill="url(#ai)"/></g></g>
<ellipse cx="400" cy="680" rx="330" ry="170" fill="none" stroke="#FFFFFF" stroke-width="2.6" opacity=".5" transform="rotate(-16 400 680)"/>
${spark(608, 300, 30, '#FFFFFF')}${spark(196, 900, 24, '#FFFFFF')}${spark(660, 1060, 18, '#FFFFFF')}${spark(150, 420, 15, '#FFFFFF')}${spark(470, 1230, 20, '#FFFFFF')}
${flower5(118, 700, '#F2C94C', '#F7E9B5', 15)}${flower5(676, 588, '#7FA6DC', '#FBF0C4', 12)}${flower5(292, 1150, '#F2C94C', '#F7E9B5', 13)}${flower5(700, 850, '#F2C94C', '#F7E9B5', 11)}
<circle cx="520" cy="150" r="9" fill="#F5A05C"/><circle cx="238" cy="1010" r="7" fill="#F5A05C"/><circle cx="712" cy="746" r="6" fill="#8FBE6E"/><circle cx="146" cy="1290" r="7" fill="#8FBE6E"/>
<path d="M118 372l26-32M150 390l26-32M182 408l26-32" stroke="#F2884E" stroke-width="8" stroke-linecap="round"/>
<path d="M640 460c8-14 16-2 22-12" stroke="#E8607F" stroke-width="6" stroke-linecap="round" fill="none"/></svg>`;

  // 2. 체리와 곰 — 크림색 종이에 그린 그림
  const cherryBear = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320">
${bear(232, 74, 8)}${bear(76, 230, -6)}
${cherry(64, 70, -8)}${cherry(178, 178, 12)}${cherry(292, 258, -4)}
${bow(150, 44, '#E2A6B2', 1, -12)}${bow(30, 176, '#E2A6B2', .9, 8)}${bow(268, 150, '#E2A6B2', .85, -6)}${bow(174, 296, '#E2A6B2', .9, 6)}
${flower5(112, 122, '#6E8BC4', '#EBD79A', 7)}${flower5(258, 208, '#6E8BC4', '#EBD79A', 6)}${flower5(20, 268, '#6E8BC4', '#EBD79A', 6.5)}${flower5(300, 40, '#6E8BC4', '#EBD79A', 6)}</svg>`;

  // 3. 별사탕 — 흰 바탕에 번진 하트와 파스텔 별
  const candyBlur = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1400" viewBox="0 0 800 1400">
<defs><filter id="cb" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="40"/></filter></defs>
<rect width="800" height="1400" fill="#FFFFFF"/>
<g filter="url(#cb)">
<g transform="translate(230 620) scale(11) translate(-12 -12)"><path d="M12 21C-4 11 1 3 7 3c3 0 5 3 5 3s2-3 5-3c6 0 11 8-5 18z" fill="#FBBBD4"/></g>
<g transform="translate(600 1140) scale(9) translate(-12 -12)"><path d="M12 21C-4 11 1 3 7 3c3 0 5 3 5 3s2-3 5-3c6 0 11 8-5 18z" fill="#FBBBD4"/></g>
${star5(660, 260, 130, '#FCEFA8')}${star5(140, 1080, 110, '#FCEFA8')}
<circle cx="470" cy="300" r="70" fill="#BFE0F2"/><circle cx="330" cy="980" r="60" fill="#BFE0F2"/></g></svg>`;
  const candyStars = `<svg xmlns="http://www.w3.org/2000/svg" width="340" height="340" viewBox="0 0 340 340">
${star5(52, 46, 26, 'none', '#F3A9C6', 3.4)}${star5(168, 28, 17, 'none', '#F0D98A', 3)}${star5(272, 74, 23, 'none', '#A9C6E8', 3.2)}
${star5(112, 128, 20, 'none', '#C3B2E4', 3)}${star5(238, 172, 27, 'none', '#F3A9C6', 3.4)}${star5(36, 216, 18, 'none', '#F0D98A', 3)}
${star5(150, 268, 24, 'none', '#A9C6E8', 3.2)}${star5(298, 286, 16, 'none', '#C3B2E4', 3)}
${spark(206, 96, 11, '#F3A9C6')}${spark(80, 300, 10, '#F0D98A')}${spark(316, 190, 9, '#A9C6E8')}</svg>`;

  // 4. 리본 — 아이보리 종이에 하늘색 물결선과 검은 리본
  const bowPat = (() => {
    let lines = '';
    for (let i = 0; i < 5; i++) lines += `<path d="${vwave(26 + i * 62, 420, 9, 105)}" fill="none" stroke="#A9CDE2" stroke-width="2.6" stroke-linecap="round"/>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="420" viewBox="0 0 320 420">${lines}
${bow(60, 54, '#141418', 1.05, -6)}${bow(214, 90, '#141418', 1, 5)}${bow(136, 186, '#141418', 1.05, -3)}${bow(38, 292, '#141418', 1, 7)}${bow(258, 300, '#141418', 1.05, -8)}${bow(150, 396, '#141418', 1, 4)}</svg>`;
  })();

  /* ══ 재질 ═══════════════════════════════════════════════════
     「CSS 티가 난다」는 말은 곧 **결이 없다**는 뜻이다.
     실제 사진에는 필름 알갱이·종이 섬유·천 짜임·돌 알갱이가 늘 깔려 있다.
     그래서 색만 칠하지 말고 이 결을 한 겹 덮는다. */

  // 필름 알갱이 — 어두운 사진일수록 거칠다
  const grain = (op, sz) => `<filter id="gr"><feTurbulence type="fractalNoise" baseFrequency="${sz || 0.9}" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>`
    + `<rect width="100%" height="100%" filter="url(#gr)" opacity="${op}"/>`;

  // 종이 섬유 — 잔결이 가로로 눕는다 (⚠ 지금 쓰는 테마 없음 · 새 테마용으로 남겨 둔다)
  const fiber = (op) => `<filter id="fb"><feTurbulence type="fractalNoise" baseFrequency="0.02 0.6" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>`
    + `<rect width="100%" height="100%" filter="url(#fb)" opacity="${op}"/>`;

  // 벨벳 — 결이 한 방향으로 눕고 빛이 스친다 (⚠ 지금 쓰는 테마 없음)
  const velvet = (op) => `<filter id="vv"><feTurbulence type="fractalNoise" baseFrequency="0.008 0.9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>`
    + `<rect width="100%" height="100%" filter="url(#vv)" opacity="${op}"/>`;

  /* ══ 초대장 카드 ═══════════════════════════════════════════
     사장님이 준 사진들은 방도 천도 아니다. 전부 **초대장·카드**다.
     하나같이 「글씨가 주인공」이고 그 둘레를 손그림이 둘러싼다.
     ⛔ 재질만 정교하게 옮기면 반려된다 (2026-07-31 여덟 개가 그렇게 날아갔다).
        옮겨야 하는 건 **색감 · 배치 · 타이포**다.

     ⛔ 배경 SVG 는 앱 웹폰트(assets/fonts)를 못 쓴다.
        CSS 배경 그림은 별개 문서라 @font-face 가 닿지 않는다.
        그래서 어느 기계에나 깔려 있는 서체만 골라 겹쳐 적는다.
        아이폰은 Snell Roundhand · 윈도우는 Brush Script MT / Segoe Script 가 잡힌다. */
  const F = {
    script: "'Snell Roundhand','Brush Script MT','Segoe Script',cursive",
    serif: "Georgia,'Times New Roman',serif",
    heavy: "'Arial Black',Impact,'Helvetica Neue',sans-serif",
  };
  // 글씨 한 줄 (가운데 맞춤이 기본)
  const T = (x, y, size, fam, fill, str, more) =>
    `<text x="${n(x)}" y="${n(y)}" font-family="${fam}" font-size="${n(size)}" fill="${fill}" text-anchor="middle"${more || ''}>${str}</text>`;
  // 글자마다 색이 다른 낱말 — 색연필로 한 자씩 칠한 것처럼
  const rainbowWord = (word, cx, y, size, cols, fam, gap) => {
    const w = size * (gap || .66), total = word.length * w;
    return word.split('').map((ch, i) => (ch === ' ' ? ''
      : T(cx - total / 2 + w * i + w / 2, y, size, fam, cols[i % cols.length], ch))).join('');
  };

  // 둥근 가장자리를 부채꼴로 판 것 (라벨·레이스 테두리)
  const scallop = (cx, cy, rx, ry, N, out) => {
    let d = '';
    for (let i = 0; i < N; i++) {
      const a = (i / N) * 6.2832, a2 = ((i + 1) / N) * 6.2832;
      const x1 = cx + Math.cos(a) * rx, y1 = cy + Math.sin(a) * ry;
      const x2 = cx + Math.cos(a2) * rx, y2 = cy + Math.sin(a2) * ry;
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      d += (i ? '' : `M${n(x1)} ${n(y1)}`)
        + `Q${n(cx + (mx - cx) * out)} ${n(cy + (my - cy) * out)} ${n(x2)} ${n(y2)}`;
    }
    return d + 'Z';
  };

  /* 하트 테두리 — 타원을 하트라고 우기면 안 된다.
     하트 곡선을 직접 따라가며 점을 뜨고, 그 점 사이를 바깥으로 볼록하게 판다. */
  const heartPts = (cx, cy, s, N) => {
    const p = [];
    for (let i = 0; i < N; i++) {
      const t = (i / N) * 6.2832;
      const st = Math.sin(t);
      p.push([cx + 16 * st * st * st * s,
        cy - (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * s]);
    }
    return p;
  };
  const heartLine = (cx, cy, s) =>
    'M' + heartPts(cx, cy, s, 140).map((q) => `${n(q[0])} ${n(q[1])}`).join('L') + 'Z';
  const heartScallop = (cx, cy, s, N, out) => {
    const p = heartPts(cx, cy, s, N);
    let d = `M${n(p[0][0])} ${n(p[0][1])}`;
    for (let i = 0; i < N; i++) {
      const a = p[i], b = p[(i + 1) % N];
      const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
      const vx = mx - cx, vy = my - cy, vl = Math.hypot(vx, vy) || 1;
      d += `Q${n(mx + (vx / vl) * out)} ${n(my + (vy / vl) * out)} ${n(b[0])} ${n(b[1])}`;
    }
    return d + 'Z';
  };

  /* ══ 손맛 ═══════════════════════════════════════════════════
     「CSS 같다 · 딱딱하다」는 말은 곧 **자국이 고르다**는 뜻이다.
     사람 손은 고른 적이 없다 — 고리 크기도, 줄 높이도, 글자 기울기도 다 다르다.
     그래서 여기서는 자를 대고 그리지 않는다. **점을 흔들고 그 사이를 부드럽게 잇는다.**

     ⚠ 2026-07-31 사장님이 렛츠 파티를 빼면서 **지금 이 연장을 쓰는 테마는 없다.**
        지우지 않고 남겨 둔다 — 「손으로 그린 테마」를 다시 만들 때 처음부터 짜지 않으려고.
        필요 없어지면 이 칸을 통째로 지우면 된다 (다른 테마는 하나도 안 쓴다). */

  // 점 사이를 부드럽게 잇는다 — 꺾인 모서리를 깎아 손으로 그은 선처럼 만든다
  const thru = (pts, close) => {
    const P = close ? pts.concat([pts[0], pts[1]]) : pts;
    if (P.length < 3) return 'M' + P.map((q) => n(q[0]) + ' ' + n(q[1])).join('L');
    let d = `M${n(close ? (P[0][0] + P[1][0]) / 2 : P[0][0])} ${n(close ? (P[0][1] + P[1][1]) / 2 : P[0][1])}`;
    for (let i = 1; i < P.length - 1; i++) {
      d += `Q${n(P[i][0])} ${n(P[i][1])} ${n((P[i][0] + P[i + 1][0]) / 2)} ${n((P[i][1] + P[i + 1][1]) / 2)}`;
    }
    return d + (close ? 'Z' : `L${n(P[P.length - 1][0])} ${n(P[P.length - 1][1])}`);
  };

  // 점을 흔든다 — 손이 떨린 만큼
  const jit = (pts, amp, r) => pts.map(([x, y]) => [x + (r() - .5) * amp, y + (r() - .5) * amp]);

  // 타원 위의 점 (각도는 도, y 는 아래로)
  const ring = (cx, cy, rx, ry, a0, a1, k) => Array.from({ length: k + 1 }, (_, i) => {
    const a = (a0 + (a1 - a0) * (i / k)) * Math.PI / 180;
    return [cx + Math.cos(a) * rx, cy + Math.sin(a) * ry];
  });

  // 모서리를 이어 촘촘한 테두리 점으로 — 오린 자국을 내려면 점이 촘촘해야 흔들 수 있다
  const chain = (corners, step) => {
    const out = [];
    for (let i = 0; i < corners.length; i++) {
      const a = corners[i], b = corners[(i + 1) % corners.length];
      const k = Math.max(1, Math.round(Math.hypot(b[0] - a[0], b[1] - a[1]) / step));
      for (let s = 0; s < k; s++) out.push([a[0] + (b[0] - a[0]) * s / k, a[1] + (b[1] - a[1]) * s / k]);
    }
    return out;
  };

  /* 이어 굴린 크림 — 펜을 떼지 않고 한 번에 굴린 자국.
     ⛔ 같은 크기 고리를 같은 간격으로 굴리면(예전 coil) **스프링**으로 보인다.
        고리마다 폭·높이·줄 높이를 다르게 두고 조금씩 겹쳐 굴려야 크림이 된다. */
  const scribble = (x0, x1, y, loops, r, amp) => {
    const pts = [];
    const seg = (x1 - x0) / loops;
    let x = x0;
    for (let i = 0; i < loops; i++) {
      const w = seg * (.9 + r() * .55);
      const h = (amp || 34) * (.72 + r() * .6);
      const dy = (r() - .5) * (amp || 34) * .34;
      for (let k = 0; k <= 16; k++) {
        const t = k / 16, th = t * 6.2832;
        pts.push([x + w * t + Math.sin(th) * w * .46 + (r() - .5) * 2.6,
          y + dy + Math.cos(th) * h * .5 + (r() - .5) * 2.6]);
      }
      x += w * (.66 + r() * .22);                    // 다음 고리가 조금 겹쳐 들어간다
    }
    return thru(pts, false);
  };

  // 손으로 그린 하트 테두리 — 한 번에 못 그려서 좌우가 조금 다르다
  const handHeart = (x, y, s, rot, c, w, r) =>
    `<g transform="translate(${n(x)} ${n(y)}) rotate(${n(rot)})"><path d="${thru(jit(heartPts(0, 0, s, 26), s * 1.6, r), true)}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/></g>`;

  // 손으로 그린 작은 꽃 — 꽃잎이 저마다 다르게 생겼다 (동그라미 다섯이면 톱니바퀴다)
  const handFlower = (x, y, R, petal, ctr, r) => {
    const N = 5 + (r() > .6 ? 1 : 0);
    let g = '';
    for (let i = 0; i < N; i++) {
      const a = (i / N) * 6.2832 + (r() - .5) * .5;
      const px = Math.cos(a) * R * .74, py = Math.sin(a) * R * .74;
      const rr = R * (.52 + r() * .2);
      g += `<path d="${thru(jit(ring(px, py, rr, rr * (.74 + r() * .34), 0, 360, 8), rr * .5, r), true)}" fill="${petal}" opacity="${n(.82 + r() * .18)}"/>`;
    }
    return `<g transform="translate(${n(x)} ${n(y)}) rotate(${n(r() * 360)})">${g}<circle r="${n(R * .3)}" fill="${ctr}"/></g>`;
  };

  // 알맹이 한 뭉치 (빨간 열매) — 크기도 자리도 제각각이라야 뭉치로 보인다
  const cluster = (x, y, R, c, r) => {
    let g = '';
    for (let i = 0; i < 7; i++) {
      const a = r() * 6.2832, d = r() * R;
      g += `<circle cx="${n(Math.cos(a) * d)}" cy="${n(Math.sin(a) * d)}" r="${n(R * (.22 + r() * .18))}" fill="${c}" opacity="${n(.85 + r() * .15)}"/>`;
    }
    return `<g transform="translate(${n(x)} ${n(y)})">${g}</g>`;
  };

  // 잎 달린 잔가지
  const sprig = (x, y, s, rot, c, r) => {
    let g = `<path d="${thru(jit([[0, 0], [4, -14], [2, -30]], 3, r), false)}" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/>`;
    for (let i = 0; i < 3; i++) {
      const yy = -6 - i * 9, sx = i % 2 ? 1 : -1;
      g += `<path d="${thru(jit([[0, yy], [sx * 9, yy - 6], [sx * 14, yy + 1], [0, yy]], 2, r), true)}" fill="${c}" opacity=".85"/>`;
    }
    return `<g transform="translate(${n(x)} ${n(y)}) rotate(${n(rot)}) scale(${n(s)})">${g}</g>`;
  };

  /* 손글씨 대문자 — 획을 점으로 적어 두고 흔들어 긋는다.
     ⛔ 서체로 찍으면 색을 아무리 곱게 입혀도 「인쇄물」로 보인다. 획을 직접 그어야 손글씨가 된다.
        글자 상자는 가로 w · 세로 100 (밑줄이 100). */
  const GL = {
    I: { w: 22, s: [[[11, 2], [10, 50], [11, 98]]] },
    F: { w: 56, s: [[[9, 3], [8, 50], [9, 98]], [[8, 5], [30, 1], [53, 4]], [[9, 51], [26, 48], [43, 50]]] },
    E: { w: 56, s: [[[9, 3], [8, 50], [9, 97]], [[8, 5], [30, 1], [53, 4]], [[9, 51], [26, 48], [43, 50]], [[9, 97], [30, 100], [54, 97]]] },
    L: { w: 52, s: [[[9, 2], [8, 50], [9, 97]], [[9, 97], [30, 100], [51, 97]]] },
    R: { w: 60, s: [[[9, 2], [8, 50], [9, 98]], [[9, 4], [34, 1], [50, 11], [53, 27], [43, 45], [26, 52], [9, 53]], [[29, 52], [43, 75], [57, 98]]] },
    A: { w: 64, s: [[[6, 98], [19, 52], [32, 2]], [[32, 2], [46, 52], [58, 98]], [[17, 68], [32, 64], [47, 67]]] },
    T: { w: 58, s: [[[4, 5], [29, 1], [55, 4]], [[30, 3], [28, 50], [29, 99]]] },
    G: { w: 72, s: [ring(36, 50, 30, 48, 40, 320, 13), [[59, 81], [67, 62], [45, 58]]] },
  };
  /* 낱말 한 줄 — 글자마다 색·기울기·크기·높이가 다 다르다.
     이 「제각각」이 없으면 손으로 쓴 것으로 안 보인다. */
  const handWord = (word, cx, y, size, cols, sw, r) => {
    const k = size / 100, gap = 13;
    const wid = (ch) => (GL[ch] ? GL[ch].w : 28);
    let total = -gap;
    word.split('').forEach((ch) => { total += wid(ch) + gap; });
    let x = cx - total * k / 2, out = '';
    word.split('').forEach((ch, i) => {
      const G = GL[ch];
      if (G) {
        const rot = (r() - .5) * 7.5, dy = (r() - .5) * 13, sc = .93 + r() * .15;
        let d = '';
        G.s.forEach((st) => { d += thru(jit(st, 3.4, r), false); });
        const c = cols[i % cols.length];
        out += `<g transform="translate(${n(x + G.w * k / 2)} ${n(y + dy)}) rotate(${n(rot)}) scale(${n(k * sc)}) translate(${n(-G.w / 2)} -100)">`
          + `<path d="${d}" fill="none" stroke="${dark(c, .2)}" stroke-width="${n(sw + 1.8)}" stroke-linecap="round" stroke-linejoin="round" opacity=".22" transform="translate(1.6 2.2)"/>`
          + `<path d="${d}" fill="none" stroke="${c}" stroke-width="${n(sw)}" stroke-linecap="round" stroke-linejoin="round"/></g>`;
      }
      x += (wid(ch) + gap) * k;
    });
    return out;
  };

  // 딸기
  const berry = (x, y, s, rot, c) => `<g transform="translate(${n(x)} ${n(y)}) rotate(${n(rot || 0)}) scale(${n(s)})">
<path d="M0-16C14-16 20-6 16 6 12 18 4 24 0 24-4 24-12 18-16 6-20-6-14-16 0-16Z" fill="${c}"/>
<path d="M-13-15C-6-21 6-21 13-15 6-11-6-11-13-15Z" fill="#4FA96E"/>
<circle cx="-5" cy="0" r="1.4" fill="#FFF3D0"/><circle cx="5" cy="6" r="1.4" fill="#FFF3D0"/>
<circle cx="0" cy="12" r="1.4" fill="#FFF3D0"/></g>`;

  // 레몬·오렌지 반쪽 — 결이 부챗살처럼 뻗는다
  const citrus = (x, y, s, rot, rind, flesh) => {
    let g = '';
    for (let i = 0; i < 8; i++) {
      const a = ((i + .5) / 8) * 6.2832;
      const px = Math.cos(a) * 9, py = Math.sin(a) * 9;
      g += `<ellipse cx="${n(px)}" cy="${n(py)}" rx="6.6" ry="4.6" fill="${flesh}" transform="rotate(${n(a * 57.3)} ${n(px)} ${n(py)})"/>`;
    }
    return `<g transform="translate(${n(x)} ${n(y)}) rotate(${n(rot || 0)}) scale(${n(s)})">
<circle r="22" fill="${rind}"/><circle r="17.5" fill="#FFF8E4"/>${g}</g>`;
  };

  /* ══ 사진에서 뜬 초대장 카드 ═══════════════════════════════
     ⛔ 색을 눈대중으로 찍지 않는다.
        테마마다 원본 사진(tools/ref/*.png)이 짝지어져 있고,
        쓰는 색은 전부 이름 붙은 칸(slots)으로 빼 두었다.
        tools/tint.html 에서 원본 사진을 스포이드로 찍으면 그 칸에 그대로 들어간다.
        고른 값을 slots 의 d: 에 박으면 확정된다.

     영문은 원본 문구를 그대로 옮기지 않고 **우리 앱에 어울리는 말**로 바꿨다.
     장부 앱이라 「잘 적으면 마음이 편해진다」 쪽 말만 쓴다. ⛔ 혼내는 말은 안 쓴다. */

  /* 색 셈 — 스포이드로 찍은 한 색에서 글씨색·선색을 뽑아낸다.
     그래야 사장님이 색 하나만 바꿔도 화면 전체가 같이 따라온다. */
  const hx = (h) => {
    let s = String(h).replace('#', '');
    if (s.length === 3) s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2];
    return [parseInt(s.slice(0, 2), 16) || 0, parseInt(s.slice(2, 4), 16) || 0, parseInt(s.slice(4, 6), 16) || 0];
  };
  const rgbHex = (a) => '#' + a.map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('').toUpperCase();
  const mix = (a, b, t) => { const x = hx(a), y = hx(b); return rgbHex(x.map((v, i) => v + (y[i] - v) * t)); };
  const dark = (c, t) => mix(c, '#000000', t);
  const lite = (c, t) => mix(c, '#FFFFFF', t);
  // 밝은가 어두운가 — 배경 위에 올릴 글씨색을 정할 때 쓴다
  const lum = (c) => { const [r, g, b] = hx(c); return (r * .299 + g * .587 + b * .114) / 255; };
  const readable = (bg, dk, lt) => (lum(bg) > .55 ? (dk || dark(bg, .78)) : (lt || lite(bg, .9)));

  /* 글씨가 정말 보이나 — 눈대중으로 「괜찮아 보인다」 하지 말고 **명암비를 잰다**.
     WCAG 기준 : 본문 4.5:1 · 큰 글씨 3:1 · 넉넉하게 보려면 7:1.
     ⛔ 위의 lum() 은 어림값이라 이 계산에 쓰면 안 된다. 여기서는 제대로 편다(sRGB→선형). */
  const rlum = (c) => {
    const f = (v) => { const u = v / 255; return u <= .03928 ? u / 12.92 : Math.pow((u + .055) / 1.055, 2.4); };
    const [r, g, b] = hx(c).map(f);
    return r * .2126 + g * .7152 + b * .0722;
  };
  const contrast = (a, b) => {
    const x = rlum(a), y = rlum(b);
    return (Math.max(x, y) + .05) / (Math.min(x, y) + .05);
  };
  /* 흰 종이 위에서 원하는 명암비가 나올 때까지 색을 어둡게 민다.
     색감(빛깔)은 그대로 두고 밝기만 낮추므로 테마 분위기가 안 깨진다. */
  const onWhite = (c, ratio) => {
    let out = c;
    for (let i = 0; i < 30 && contrast(out, '#FFFFFF') < ratio; i++) out = dark(out, .07);
    return out;
  };

  /* 그림 위에 앉는 글씨(앱 이름·달 이름)에 두르는 테.
     ⛔ 뒤가 한 가지 색이라고 믿으면 안 된다. `cover` 는 **창 크기마다 다르게 잘라서**
        같은 자리에 어떤 때는 진한 바탕이, 어떤 때는 밝은 카드가 온다.
        (발렌타인 카드에서 실제로 겪음 — 폰에서는 멀쩡한데 넓은 창에서 「아이필그레잇」이 묻혔다)
     그래서 색 하나로 풀지 않고 **글씨 둘레에 반대 톤의 테**를 둘러 어느 바탕에서나 읽히게 한다. */
  const onbgEdge = (c) => (lum(c) > .5
    ? '0 0 3px rgba(0,0,0,.92), 0 0 9px rgba(0,0,0,.8), 0 1px 2px rgba(0,0,0,.85)'
    : '0 0 3px rgba(255,255,255,.95), 0 0 9px rgba(255,255,255,.85), 0 1px 2px rgba(255,255,255,.9)');

  const TUNE = {

    /* 1. 웬디 러브 — 하늘색 새틴 커튼 앞에 놓인 분홍 봉투와 크림 카드 */
    wendylove: {
      name: '웬디 러브', ref: 'wendylove.png',
      slots: [
        { k: 'curtHi', t: '커튼 밝은 쪽', d: '#A8D3E6' },
        { k: 'curtLo', t: '커튼 어두운 쪽', d: '#6DA6C8' },
        { k: 'env', t: '봉투', d: '#EB96B0' },
        { k: 'flap', t: '봉투 덮개', d: '#F5B4C6' },
        { k: 'card', t: '카드 종이', d: '#FBF4E4' },
        { k: 'script', t: '카드 글씨', d: '#5B9DC8' },
        { k: 'sign', t: '서명 글씨', d: '#C4849A' },
        { k: 'sheet', t: '아래 이불', d: '#EEF5F8' },
      ],
      sw: (p) => [p.curtHi, p.env, p.card],
      ui: (p) => ({
        bg: lite(p.curtHi, .86), paper: '#FFFFFF',
        ink: onWhite(dark(p.script, .58), 8), sub: onWhite(p.script, 4.5),
        faint: onWhite(mix(p.script, p.sign, .5), 3.2),
        line: mix('#FFFFFF', p.sign, .12), line2: mix('#FFFFFF', p.sign, .26),
        acc: lite(p.env, .42), acc2: lite(p.curtHi, .35), pop: onWhite(p.script, 4.5),
        in: onWhite('#3E8A72', 4.5), out: onWhite(dark(p.env, .28), 4.5), mark: lite(p.env, .42),
        onbg: readable(p.curtHi), onbg2: mix(readable(p.curtHi), p.curtHi, .3),
        onbgsh: onbgEdge(readable(p.curtHi)),
      }),
      make: (p) => `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1400" viewBox="0 0 800 1400">
<defs><linearGradient id="wc" x1="0" y1="0" x2="1" y2=".25">
<stop offset="0" stop-color="${p.curtLo}"/><stop offset=".45" stop-color="${p.curtHi}"/><stop offset="1" stop-color="${mix(p.curtLo, p.curtHi, .4)}"/></linearGradient>
<linearGradient id="we" x1=".1" y1="0" x2=".9" y2="1">
<stop offset="0" stop-color="${lite(p.env, .3)}"/><stop offset="1" stop-color="${p.env}"/></linearGradient>
<filter id="wb"><feGaussianBlur stdDeviation="16"/></filter></defs>
<rect width="800" height="1400" fill="url(#wc)"/>
${(() => {                     // 새틴 커튼 — 빛이 세로로 길게 눕는다
        const r = rnd(717);
        let g = '';
        for (let x = -20; x < 830; x += 24 + r() * 24) {
          g += `<path d="${vwave(x, 1400, 9 + r() * 10, 330)}" fill="none" stroke="${r() > .5 ? lite(p.curtHi, .55) : dark(p.curtLo, .42)}" stroke-width="${n(6 + r() * 24)}" opacity="${n(.05 + r() * .15)}"/>`;
        }
        return g;
      })()}
<path d="M0 1180C170 1128 310 1160 430 1192 570 1228 700 1210 800 1176V1400H0Z" fill="${p.sheet}" opacity=".9"/>
<g transform="translate(400 690) rotate(-2)">
<rect x="-268" y="-208" width="536" height="416" rx="8" fill="${dark(p.env, .3)}" filter="url(#wb)" opacity=".4"/>
<rect x="-262" y="-202" width="524" height="404" rx="6" fill="url(#we)"/>
<path d="M-262-202L0 24 262-202Z" fill="${p.flap}"/>
<g transform="translate(4 -24) rotate(1.4)">
<rect x="-226" y="-170" width="452" height="334" rx="3" fill="${p.card}" stroke="${mix(p.card, p.sign, .28)}" stroke-width="1.6"/>
${/* ⛔ 「I feel great」에서 갈았다 (이름 갈이 2026-08-18). 글이 두 배로 길어져
      100 → 70 으로 줄였다. 더 키우면 카드 밖으로 넘친다. */''}
${/* ⛔ 카드 안 큰 글씨는 걷어냈다 (사장님 2026-09-08 : 「가계부 내용을 겹치게 보인다」).
      배경 한가운데 글씨가 있으면 그 위에 앉는 금액·목록과 서로 싸운다. ⛔ 되살리지 말 것.
      카드 종이와 테두리는 그대로 두어 그림은 살아 있다. */''}
${T(-4, 130, 27, F.script, p.sign, 'from me, to me')}
<g transform="translate(-158 -112) rotate(-8)">
<rect x="-32" y="-24" width="64" height="48" rx="2" fill="${lite(p.env, .5)}" stroke="${p.sign}" stroke-width="1.4"/>
${T(0, 6, 15, F.serif, p.sign, 'POST')}</g></g>
<path d="M-262 202L0 34 262 202Z" fill="${mix(p.env, p.flap, .45)}"/></g>
<g transform="translate(468 990) rotate(-8)">
<g transform="scale(4.4) translate(-12 -12)"><path d="${HEART}" fill="${lite(p.sheet, .3)}" stroke="${mix(p.curtLo, p.sheet, .5)}" stroke-width=".8"/></g>
${T(-14, 8, 18, F.script, mix(p.curtLo, p.sheet, .35), 'me')}</g>
${grain(0.04, 1.3)}</svg>`,
    },

    /* 2. 스티커 봉투 — 분홍 판에 봉투 하나, 그 안팎에 스티커가 잔뜩 */
    finissage: {
      name: '스티커 봉투', ref: 'finissage.png',
      slots: [
        { k: 'bg', t: '바탕', d: '#F2A6C0' },
        { k: 'bgHi', t: '바탕 밝은 쪽', d: '#F7C0D2' },
        { k: 'env', t: '봉투', d: '#F6BCD0' },
        { k: 'flap', t: '봉투 덮개', d: '#FCE8F0' },
        { k: 'paper', t: '속지', d: '#FBF4E6' },
        { k: 'heart', t: '하트 스티커', d: '#E23A4E' },
        { k: 'ink', t: '글씨', d: '#8E4A64' },
        { k: 'label', t: '아래 라벨', d: '#FBE4EC' },
      ],
      sw: (p) => [p.bg, p.heart, p.paper],
      ui: (p) => ({
        bg: lite(p.bgHi, .82), paper: '#FFFFFF',
        ink: onWhite(dark(p.ink, .55), 8), sub: onWhite(p.ink, 4.5), faint: onWhite(p.ink, 3.2),
        line: mix('#FFFFFF', p.ink, .1), line2: mix('#FFFFFF', p.ink, .22),
        acc: p.label, acc2: '#F7E27A', pop: onWhite(p.heart, 4.5),
        in: onWhite('#3E7A5C', 4.5), out: onWhite(p.heart, 4.5), mark: p.label,
        onbg: readable(p.bgHi), onbg2: mix(readable(p.bgHi), p.bgHi, .3),
        onbgsh: onbgEdge(readable(p.bgHi)),
      }),
      make: (p) => `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1400" viewBox="0 0 800 1400">
<defs><linearGradient id="fg" x1=".2" y1="0" x2=".8" y2="1">
<stop offset="0" stop-color="${p.bgHi}"/><stop offset=".5" stop-color="${p.bg}"/><stop offset="1" stop-color="${dark(p.bg, .12)}"/></linearGradient>
<linearGradient id="fe" x1=".1" y1="0" x2=".9" y2="1">
<stop offset="0" stop-color="${lite(p.env, .35)}"/><stop offset="1" stop-color="${p.env}"/></linearGradient>
<filter id="fs"><feGaussianBlur stdDeviation="14"/></filter></defs>
<rect width="800" height="1400" fill="url(#fg)"/>
<g transform="translate(400 730) rotate(-1)">
<rect x="-306" y="-342" width="612" height="668" rx="12" fill="${dark(p.bg, .35)}" filter="url(#fs)" opacity=".35"/>
<rect x="-300" y="-336" width="600" height="656" rx="10" fill="url(#fe)"/>
<path d="M-300-336L0-40 300-336Z" fill="${p.flap}"/>
<rect x="-176" y="-250" width="238" height="300" rx="4" fill="${p.paper}" transform="rotate(-4)"/>
<rect x="30" y="-214" width="196" height="252" rx="4" fill="${dark(p.paper, .06)}" transform="rotate(5)"/>
${star5(-206, -108, 34, '#2B2320')}${star5(150, -276, 26, dark(p.ink, .1))}${star5(-88, 90, 30, '#2B2320')}${star5(236, 128, 22, dark(p.ink, .1))}
<g transform="translate(96 -122) rotate(8)">
<g transform="scale(5.4) translate(-12 -12)"><path d="${HEART}" fill="${p.heart}"/></g>
<g transform="scale(5.4) translate(-12 -12)"><path d="${HEART}" fill="none" stroke="${lite(p.env, .5)}" stroke-width=".6"/></g></g>
<g transform="translate(-208 216)"><circle r="34" fill="${dark(p.heart, .12)}"/><circle r="26" fill="none" stroke="${dark(p.heart, .45)}" stroke-width="2" opacity=".5"/>
${[[-9, -9], [9, -9], [-9, 9], [9, 9]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="${dark(p.heart, .45)}"/>`).join('')}</g>
${bear(216, -288, 10)}
<g transform="translate(232 244) rotate(-8)">${flower5(0, 0, '#6FC2D6', '#F7E27A', 22)}</g>
${bow(-140, -300, '#F7E27A', 1.4, -10)}${bow(268, -40, '#B7E0EA', 1.2, 8)}
${berry(-244, -34, 1.6, -10, dark(p.heart, .08))}${citrus(258, -190, 1.3, 12, '#F2A63C', '#FBCF6E')}</g>
<g transform="translate(400 1234) rotate(-1)"><rect x="-186" y="-40" width="372" height="80" rx="10" fill="${p.label}"/>
${T(0, -6, 25, F.serif, p.ink, 'write it down,')}${T(0, 24, 25, F.serif, p.ink, 'feel better')}</g>
${grain(0.05, 1.2)}</svg>`,
    },

    /* 3. 발렌타인 카드 — 원본 네 장 중 첫 장만 크게. 요소 색은 사장님이 고른다 */
    vcard: {
      name: '발렌타인 카드', ref: 'vcard.png',
      slots: [
        { k: 'bg', t: '카드 바탕', d: '#5E1220' },
        { k: 'paper', t: '라벨 종이', d: '#FCF7EE' },
        { k: 'edge', t: '테두리 선', d: '#D9A8B4' },
        { k: 'ink', t: '글씨', d: '#8E1F2E' },
      ],
      chips: [
        { t: '진버건디', v: { bg: '#5E1220', paper: '#FCF7EE', edge: '#D9A8B4', ink: '#8E1F2E' } },
        { t: '체리 레드', v: { bg: '#C0392F', paper: '#FDF6EC', edge: '#F2C4B4', ink: '#8E2018' } },
        { t: '분홍 줄', v: { bg: '#F0C6D4', paper: '#FFFBF6', edge: '#2A2024', ink: '#2A2024' } },
        { t: '겨자 노랑', v: { bg: '#E8C845', paper: '#FDFAEE', edge: '#6E5A18', ink: '#6E5A18' } },
        { t: '먹빛', v: { bg: '#26231F', paper: '#FBF8F2', edge: '#C4BCAE', ink: '#3E3A34' } },
        { t: '하늘', v: { bg: '#7FB4D2', paper: '#FDFBF4', edge: '#2E5E7E', ink: '#2E5E7E' } },
      ],
      sw: (p) => [p.bg, p.paper, p.edge],
      ui: (p) => ({
        /* ⛔ bg 를 카드 바탕색(진버건디)으로 두면 안 된다.
           bg 는 「뒤에 깔린 색」이 아니라 **바닥시트·잠금화면·＋단추 글자색**으로도 쓰인다.
           어두운 색을 넣으면 어두운 글씨와 겹쳐 아무것도 안 보인다 (2026-07-31 실제로 그랬다). */
        bg: lite(p.paper, .4), paper: '#FFFFFF',
        ink: onWhite(dark(p.ink, .55), 8), sub: onWhite(p.ink, 4.5), faint: onWhite(p.ink, 3.2),
        line: mix('#FFFFFF', p.edge, .3), line2: mix('#FFFFFF', p.edge, .55),
        acc: lite(p.edge, .45), acc2: lite(p.bg, .78), pop: onWhite(p.ink, 4.5),
        in: onWhite('#3E7A5C', 4.5), out: onWhite(p.ink, 4.5), mark: lite(p.edge, .5),
        /* 앱 이름·달 이름은 **테마의 주색(버건디)** 으로 쓴다 + 흰 테.
           ⛔ 밝은 글씨로 두면 안 된다 — 넓은 창에서는 뒤에 크림색 카드가 와서 묻힌다.
              주색으로 두면 크림 위에서 또렷하고, 진한 바탕 위에서는 흰 테가 받쳐 준다. */
        onbg: onWhite(p.ink, 7), onbg2: onWhite(p.ink, 4),
        onbgsh: onbgEdge(onWhite(p.ink, 7)),
      }),
      make: (p) => `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1400" viewBox="0 0 800 1400">
<defs><radialGradient id="vb2" cx=".5" cy=".4" r=".8">
<stop offset="0" stop-color="${p.bg}" stop-opacity="0"/><stop offset="1" stop-color="#000000" stop-opacity=".22"/></radialGradient></defs>
<rect width="800" height="1400" fill="${p.bg}"/>
<rect width="800" height="1400" fill="url(#vb2)"/>
${T(400, 150, 22, F.serif, p.paper, 'TODAY AND EVERY DAY', ' letter-spacing="5"')}
<path d="${scallop(400, 730, 296, 372, 30, 1.09)}" fill="${p.paper}" stroke="${p.edge}" stroke-width="2.4"/>
<path d="${scallop(400, 730, 258, 328, 30, 1.07)}" fill="none" stroke="${p.edge}" stroke-width="1.2" opacity=".7"/>
${/* ⛔ 카드 안 큰 글씨는 걷어냈다 (사장님 2026-09-08 : 「가계부 내용을 겹치게 보인다」).
      배경 한가운데 글씨가 있으면 그 위에 앉는 금액·목록과 서로 싸운다. ⛔ 되살리지 말 것.
      카드 종이와 테두리는 그대로 두어 그림은 살아 있다. */''}
${T(400, 1300, 20, F.serif, p.paper, 'WRITE IT DOWN &#183; FEEL BETTER', ' letter-spacing="3"')}
${grain(0.045, 1.2)}</svg>`,
    },

    /* 맑은 날 — 사장님이 보여 주신 금융앱 화면(2026-08-14) 결로 만든 것.
       크림 → 살구 → 하늘로 번지는 그라데이션, 아래에 뭉게구름, 가운데 흰 카드.
       ⛔ 3D 그림(낙하산·병아리)은 **일부러 안 넣었다.** 사장님이 「배경·카드 모양만
          먼저」로 고르셨다(2026-08-14). 그림을 넣을 자리는 카드 양옆으로 비워 뒀다.
       ⛔ ref 사진이 아직 없다(tools/ref/monimo.png). tint.html 의 스포이드는 사진이
          있어야 찍히고, 색칸(색 고르개)은 사진 없이도 그대로 쓸 수 있다.
       ⛔ 이 테마는 앱의 **색만** 바꾼다. 모서리 둥글기(--r-card)는 테마가 아니라
          :root 에 한 벌뿐이라 여기서 못 만진다 — 그건 따로 여쭙고 고칠 것. */
    monimo: {
      name: '맑은 날', ref: 'monimo.png',
      slots: [
        { k: 'skyTop', t: '하늘 위 (크림)', d: '#FFF7E8' },
        { k: 'skyMid', t: '하늘 가운데 (살구)', d: '#FFE0C4' },
        { k: 'skyLow', t: '하늘 아래 (하늘색)', d: '#BFDFF5' },
        { k: 'cloud', t: '구름', d: '#FFFFFF' },
        /* ⛔ 순백으로 두지 말 것. 앱 카드도 흰색이라, 배경 카드가 카드와 카드 **사이로**
           비치면 화면이 깨진 것처럼 보인다(첫 판에서 실제로 그렇게 보였다).
           원본 사진은 흰 카드지만 우리 화면에서는 그 색을 그대로 쓰면 안 된다 —
           살구빛을 섞어야 「배경 그림」으로 읽힌다. */
        { k: 'card', t: '카드 종이', d: '#FFEEDC' },
        { k: 'script', t: '카드 글씨', d: '#2C6BE0' },
        { k: 'sign', t: '작은 글씨', d: '#7FA3C8' },
      ],
      sw: (p) => [p.skyMid, p.skyLow, p.script],
      ui: (p) => ({
        bg: lite(p.skyLow, .62), paper: '#FFFFFF',
        ink: onWhite(dark(p.script, .62), 8), sub: onWhite(p.script, 4.5),
        faint: onWhite(mix(p.script, p.sign, .5), 3.2),
        line: mix('#FFFFFF', p.sign, .14), line2: mix('#FFFFFF', p.sign, .28),
        acc: lite(p.skyMid, .28), acc2: lite(p.skyLow, .34), pop: onWhite(p.script, 4.5),
        in: onWhite('#2F8A6E', 4.5), out: onWhite('#DC5A4E', 4.5), mark: lite(p.skyMid, .34),
        onbg: readable(p.skyLow), onbg2: mix(readable(p.skyLow), p.skyLow, .3),
        onbgsh: onbgEdge(readable(p.skyLow)),
      }),
      make: (p) => {
        // 뭉게구름 — 동그라미 몇 개를 겹쳐 아래를 평평하게 깎는다
        const cloud = (x, y, s, a) => `<g transform="translate(${n(x)} ${n(y)}) scale(${n(s)})" fill="${p.cloud}" opacity="${a}">
<ellipse cx="-52" cy="6" rx="46" ry="30"/><ellipse cx="8" cy="-14" rx="58" ry="42"/>
<ellipse cx="62" cy="4" rx="44" ry="30"/><rect x="-96" y="4" width="160" height="30" rx="15"/></g>`;
        const r = rnd(824);
        let 반짝 = '';
        for (let i = 0; i < 9; i++) {
          반짝 += spark(60 + r() * 680, 120 + r() * 1160, 9 + r() * 15, i % 2 ? p.cloud : lite(p.script, .62));
        }
        return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1400" viewBox="0 0 800 1400">
<defs><linearGradient id="ms" x1="0" y1="0" x2=".12" y2="1">
<stop offset="0" stop-color="${p.skyTop}"/><stop offset=".3" stop-color="${mix(p.skyTop, p.skyMid, .8)}"/>
<stop offset=".52" stop-color="${p.skyMid}"/><stop offset=".78" stop-color="${mix(p.skyMid, p.skyLow, .82)}"/>
<stop offset="1" stop-color="${p.skyLow}"/></linearGradient>
<filter id="mb" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="26"/></filter>
<filter id="mc" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter></defs>
<rect width="800" height="1400" fill="url(#ms)"/>
<!-- 해가 번지는 자리 — 살구빛이 왼쪽 위에서 한 번 부풀었다 사라진다 -->
<g filter="url(#mb)"><ellipse cx="250" cy="270" rx="230" ry="180" fill="${lite(p.skyMid, .5)}" opacity=".85"/></g>
<!-- 구름은 아래쪽에만. 위까지 채우면 카드 글씨가 묻힌다 -->
<g filter="url(#mc)">
${cloud(150, 1120, 1.5, .95)}${cloud(620, 1240, 1.8, .92)}${cloud(380, 1352, 2.1, .88)}
${cloud(720, 1020, 1.1, .7)}${cloud(70, 940, .85, .55)}</g>
${반짝}
<!-- 가운데 흰 카드 — 모서리를 크게 굴린다(rx 46). 이 결이 사진의 핵심이었다 -->
<g transform="translate(400 640)">
<rect x="-244" y="-214" width="488" height="428" rx="52" fill="${dark(p.skyLow, .22)}" filter="url(#mb)" opacity=".35"/>
<rect x="-238" y="-208" width="476" height="416" rx="46" fill="${p.card}" stroke="${mix(p.card, p.sign, .3)}" stroke-width="2"/>
${/* ⛔ 이름 갈이 2026-08-18 · 104 → 70 */''}
${/* ⛔ 카드 안 큰 글씨는 걷어냈다 (사장님 2026-09-08 : 「가계부 내용을 겹치게 보인다」).
      배경 한가운데 글씨가 있으면 그 위에 앉는 금액·목록과 서로 싸운다. ⛔ 되살리지 말 것.
      카드 종이와 테두리는 그대로 두어 그림은 살아 있다. */''}
</g>
<!-- ⛔ 카드 밖 글씨는 다시 넣지 말 것. 넓은 창에서는 배경이 늘어나 글씨가
     다른 자리에 오는데, 하필 목록 위에 얹혀 **앱이 적은 글처럼** 읽혔다.
     글씨는 가운데 카드 안에서만 쓴다. -->
${grain(0.03, 1.3)}</svg>`;
      },
    },
  };
  /* 쓸 색 한 벌 만들기 — 기본색 위에 사장님이 고른 색(palettes.js)을 덮는다.
     ⛔ 고른 색은 palettes.js 한 곳에만 있다. 여기 slots 의 d: 는 「아직 안 고른 것」의 기본값이다. */
  const tuneDef = (t, id) => Object.assign(
    Object.fromEntries(t.slots.map((s) => [s.k, s.d])),
    (typeof window !== 'undefined' && window.LBPalettes && id && window.LBPalettes[id]) || {});
  /* ── 정리 ──────────────────────────────────────────────── */
  const P = {
    aura: {
      name: '오라', sw: ['#C6C9EE', '#FF93BE', '#FFC46E'],
      c: { bg: '#CBD3F0', paper: '#FFFFFF', ink: '#2B2740', sub: '#6C6790', faint: '#9A96B8',
        line: '#EBE9F5', line2: '#DAD7EA', acc: '#FFC9DE', acc2: '#BFD8F5', pop: '#F2749F',
        in: '#3D8A78', out: '#F2749F', mark: '#FFE3EE' },
      layers: [{ svg: aura, mode: 'cover', a: 1 }],
    },
    cherry: {
      name: '체리와 곰', sw: ['#F7F0DE', '#C0392B', '#A87548'],
      c: { bg: '#F7F0DE', paper: '#FFFDF6', ink: '#33251A', sub: '#7E6A55', faint: '#AC9982',
        line: '#EFE8D6', line2: '#E0D7C1', acc: '#E2A6B2', acc2: '#6E8BC4', pop: '#C0392B',
        in: '#4B7A4E', out: '#C0392B', mark: '#F0D9A8' },
      layers: [{ svg: cherryBear, mode: 'tile', tw: 320, th: 320, a: .95 }],
    },
    starcandy: {
      name: '별사탕', sw: ['#FFFFFF', '#FBBBD4', '#FCEFA8'],
      c: { bg: '#FFFFFF', paper: '#FFFFFF', ink: '#2E2732', sub: '#7A7280', faint: '#A8A2AE',
        line: '#EFEBF1', line2: '#E0DBE4', acc: '#FBC9DE', acc2: '#BFE0F2', pop: '#EE6FA4',
        in: '#3D8A78', out: '#EE6FA4', mark: '#FCEFA8' },
      layers: [{ svg: candyBlur, mode: 'cover', a: 1 },
        { svg: candyStars, mode: 'tile', tw: 340, th: 340, a: .95 }],
    },

    /* ── 초대장 카드 ─────────────────────────────────────────
       색을 여기 손으로 적지 않는다. TUNE 의 slots 에서 그대로 가져온다.
       tools/tint.html 에서 원본 사진을 스포이드로 찍어 고른 값을 slots 의 d: 에 박는다. */

    bowline: {
      name: '리본', sw: ['#F3F0E6', '#141418', '#A9CDE2'],
      c: { bg: '#F3F0E6', paper: '#FFFFFF', ink: '#141418', sub: '#6E6A62', faint: '#9C978C',
        line: '#EAE6DA', line2: '#DBD6C8', acc: '#A9CDE2', acc2: '#E6E2D4', pop: '#141418',
        in: '#3E7A5C', out: '#B4483E', mark: '#DCEAF2' },
      layers: [{ svg: bowPat, mode: 'tile', tw: 320, th: 420, a: 1 }],
    },
  };

  /* 초대장 카드 셋 — TUNE 에서 통째로 만들어 붙인다.
     색을 두 군데 적어 두면 반드시 어긋난다. 여기서는 한 줄도 손으로 안 적는다. */
  Object.keys(TUNE).forEach((id) => {
    const t = TUNE[id], p = tuneDef(t, id);
    P[id] = { name: t.name, ref: t.ref, sw: t.sw(p), c: t.ui(p),
      layers: [{ svg: t.make(p), mode: 'cover', a: 1 }] };
  });

  const list = Object.keys(P).map((id) => ({ id, name: P[id].name, sw: P[id].sw }));

  /* ── 도장 다섯 ───────────────────────────────────────────
     안 쓴 날에 찍히는 도장. 고객이 고른다.
     화면(app.js)은 이 그림을 그대로 박아 넣고, 카드(card.js)는 같은 그림을 색만 입혀 쓴다. */
  const STAMP_ART = {
    heart: (c) => `<g transform="translate(50 50) scale(3.5) translate(-12 -12)"><path d="${HEART}" fill="${c}"/></g>`,
    star: (c) => star5(50, 52, 42, c),
    ribbon: (c) => `<g transform="translate(50 46) scale(1.75)">${bow(0, 0, c, 1, 0).replace(/stroke-width="3.2"/, 'stroke-width="3.6"')}</g>`,
    good: (c) => `<circle cx="50" cy="50" r="37" fill="none" stroke="${c}" stroke-width="6"/>
<circle cx="38" cy="44" r="4.6" fill="${c}"/><circle cx="62" cy="44" r="4.6" fill="${c}"/>
<path d="M34 60c6 9 26 9 32 0" fill="none" stroke="${c}" stroke-width="5.5" stroke-linecap="round"/>`,
    clover: (c) => `<g fill="${c}" transform="translate(50 48) scale(1.3) translate(-50 -50)"><path d="M50 46c-14-14-30-6-24 8 3 7 15 9 24 4Z"/>
<path d="M54 50c14-14 6-30-8-24-7 3-9 15-4 24Z"/><path d="M50 54c14 14 30 6 24-8-3-7-15-9-24-4Z"/>
<path d="M46 50c-14 14-6 30 8 24 7-3 9-15 4-24Z"/>
<path d="M52 60c4 10 6 18 5 26" fill="none" stroke="${c}" stroke-width="4.5" stroke-linecap="round"/></g>`,
  };
  const STAMPS = [
    { id: 'heart', name: '하트' }, { id: 'star', name: '별' }, { id: 'ribbon', name: '리본' },
    { id: 'good', name: '참 잘했어요' }, { id: 'clover', name: '클로버' },
  ];
  // 화면에 바로 박아 넣는 그림. 색은 CSS 가 정한다(currentColor).
  const stampSvg = (id, c) =>
    `<svg viewBox="0 0 100 100" aria-hidden="true">${(STAMP_ART[id] || STAMP_ART.heart)(c || 'currentColor')}</svg>`;

  // 카드(캔버스)용 — 색을 구워 넣은 그림을 만들어 둔다
  const stampCache = {};
  function stampImg(id, color) {
    const key = id + '|' + color;
    if (!stampCache[key]) {
      const im = new Image();
      im.src = 'data:image/svg+xml,' + encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">${(STAMP_ART[id] || STAMP_ART.heart)(color)}</svg>`);
      stampCache[key] = im;
    }
    return stampCache[key];
  }
  // 카드를 그리기 전에 도장 그림이 와 있어야 한다 — 안 그러면 맹숭한 동그라미가 찍힌다
  function stampReady(id, color) {
    const im = stampImg(id, color);
    if (im.complete && im.naturalWidth) return Promise.resolve();
    return im.decode ? im.decode().catch(() => {})
      : new Promise((r) => { im.onload = im.onerror = r; });
  }

  const url = (s) => 'url("data:image/svg+xml,' + encodeURIComponent(s).replace(/'/g, '%27').replace(/"/g, '%22') + '")';

  // 이 목록의 변수만 심고 지운다 — CSS 로 된 테마로 돌아갈 때 깨끗이 비워야 한다
  const VARS = ['--bg', '--paper', '--ink', '--sub', '--faint', '--line', '--line2', '--acc', '--acc2',
    '--pop', '--in', '--out', '--mark', '--onbg', '--onbg2', '--onbgsh',
    '--pat', '--pat-size', '--pat-pos', '--pat-a',
    '--pat2', '--pat2-size', '--pat2-pos', '--pat2-a'];

  /* fit 을 주면 무늬 한 칸을 그 폭 안으로 줄인다 — 설정 화면의 작은 미리보기용.
     안 줄이면 큰 무늬(물결 400px·리본 320px)가 미리보기 칸을 넘어가 한 조각만 보인다. */
  function apply(el, id, fit) {
    const t = P[id];
    if (!t) { VARS.forEach((v) => el.style.removeProperty(v)); return false; }
    Object.keys(t.c).forEach((k) => el.style.setProperty('--' + k, t.c[k]));
    [0, 1].forEach((i) => {
      const p = i ? '--pat2' : '--pat';
      const L = t.layers[i];
      if (!L) { el.style.setProperty(p, 'none'); el.style.setProperty(p + '-a', '1'); return; }
      const k = fit ? Math.min(1, fit / L.tw) : 1;
      el.style.setProperty(p, url(L.svg));
      el.style.setProperty(p + '-size', L.mode === 'cover' ? 'cover' : `${n(L.tw * k)}px ${n(L.th * k)}px`);
      el.style.setProperty(p + '-pos', 'center');
      el.style.setProperty(p + '-a', String(L.a == null ? 1 : L.a));
    });
    return true;
  }

  // 카드(캔버스)에서 쓰려면 그림이 다 와 있어야 한다 — 미리 받아 둔다
  const cache = {};
  function imgs(id) {
    const t = P[id];
    if (!t) return null;
    if (!cache[id]) {
      cache[id] = t.layers.map((L) => {
        const im = new Image();
        im.src = 'data:image/svg+xml,' + encodeURIComponent(L.svg);
        return { im, L };
      });
    }
    return cache[id];
  }
  function ready(id) {
    const list2 = imgs(id);
    if (!list2) return Promise.resolve();
    return Promise.all(list2.map(({ im }) => (im.complete && im.naturalWidth
      ? Promise.resolve()
      : (im.decode ? im.decode().catch(() => {}) : new Promise((r) => { im.onload = im.onerror = r; })))));
  }

  return { P, list, apply, imgs, ready, url, STAMPS, stampSvg, stampImg, stampReady,
    TUNE, tuneDef };
})();
