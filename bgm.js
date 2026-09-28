/* 배경음악 — 앱(index.html)과 랜딩페이지(landing.html)가 **같은 파일**을 쓴다.
   ⛔ fx.js 와 같은 까닭이다 : 두 벌로 두면 앱에서 고쳐도 랜딩은 옛 모양으로 남는다.

   쓰는 법
     <button id="btnBgm" aria-label="배경음악"></button>
     <script src="/bgm.js"></script>
     LBBgm.start()            // 앱은 알림말을 넘긴다 : LBBgm.start(toast)

   ⛔ **소리는 30% 로 시작한다** (사장님 지시 2026-08-17 : 「볼륨을 30%으로 시작해주고
      고객이 직접 음량을 조절해서 키울수 있도록」). 처음 오신 분이 놀라지 않을 만큼 작게 켜고,
      더 듣고 싶으면 **손님이 올린다.** 올린 값은 그 기기에 남는다.
      ⛔ 여기 기본값을 올리지 말 것 — 크게 시작하면 조용한 자리에서 앱을 닫는다.
   ⛔ **앞 1초는 파일에서 잘라 두었다** (2026-08-24). 예전에는 파일을 안 자르고 JS 로
      currentTime 을 1 초로 옮겼는데, 그게 **느린 회선에서 노래가 안 나오던 큰 원인**이었다 :
      아직 받는 중인 mp3 에서 자리를 옮기면 브라우저가 **받던 걸 버리고 그 지점부터 다시**
      달라고 한다. 회선이 나쁘면 거기서 그대로 굳는다.
      ⛔ 시작초(시작=0)를 다시 1 로 올리지 말 것 — 그 순간 그 고장이 돌아온다.
      자른 파일 만드는 법 : ffmpeg -ss 1 -i 원본.mp3 -vn -map_metadata -1 -ac 1 -ar 44100 -b:a 64k 결과.mp3
   ⚠ 앞 여백이 없어졌으므로 **loop 를 쓴다.** 한 바퀴 돌아 0 초로 가도 빈 자리가 없다.
   ⛔ **가벼운 판을 기본으로 튼다** (2026-08-24 사장님 신고 「섬에서 노래가 안 나온다」).
      원본은 3.3MB(188kbps 스테레오 + 앨범 그림)라 회선이 나쁜 곳에서는 첫 소리까지 한참 걸렸다.
      가벼운 판은 **1.1MB(64kbps 모노, 그림 없음)** 다. mp3 는 앞에서부터 받아 가며 트는지라
      몇 KB 만 와도 소리가 난다.
   ⛔ **파일 이름을 한글로 두지 않았다.** Vercel CLI 가 윈도우에서 비ASCII 이름을 조용히
      누락한다 — 카프카로키에서 사진이 통째로 404 가 났던 그 함정이다(2026-08-17).
   ⛔ **여는 속도가 먼저다** (사장님 지시 : 「메모장보다 빨라야」).
      태그는 preload='none' 으로 두고, 첫 화면이 **다 뜬 뒤에** 조용히 받기 시작한다.
   ⛔ **브라우저는 손이 닿기 전에 소리를 안 내준다.** 그래서 ① 화면이 다 뜨면 먼저 틀어 보고
      (막혀도 그때부터 파일을 받아 둔다 → 손이 닿는 순간 바로 난다)
      ② 소리가 **진짜 날 때까지** 손짓마다 다시 건다.
   ⛔ 켬/끔과 음량은 localStorage 에 둔다. 서버가 아니라 **기기마다** 따로다 —
      조용한 곳에서 쓰는 폰과 PC 가 달라야 한다. 앱에서 끄면 랜딩도 조용하다(같은 열쇠).
   ⛔ **없으면 켠 것**으로 본다 — 「들어오면 바로」가 기본이라 그래야 맞는다. */
window.LBBgm = (() => {
  /* 가벼운 판(1.1MB · 64kbps 모노 · 앞 1초 잘림). 느린 곳에서도 몇 KB 만 오면 소리가 난다.
     ⛔ 원본(grace-on-my-way.mp3 · 3.3MB)으로 되돌리지 말 것 — 섬에서 안 나오던 그 파일이다.
        원본은 지우지 않고 그대로 둔다(다시 자를 때 쓴다). */
  const 파일 = '/assets/bgm/grace-on-my-way-lite.mp3';
  const 시작 = 0;                      // ⛔ 파일에서 이미 잘랐다. 0 을 다시 1 로 올리지 말 것(위 주석).
  /* ⛔ **10% 로 시작한다** (사장님 지시 2026-09-08 : 「공공장소에서 열 수 있어서」).
     앞서는 30 이었는데, 지하철·카페에서 열었다가 소리가 나면 그 자리에서 앱을 닫는다.
     ⛔ 올리지 말 것. 더 듣고 싶은 분은 손으로 올린다 — 올린 값은 그 기기에 남는다. */
  /* ⛔ **5% 로 내렸다** (사장님 2026-09-28 : 스르륵이 아이폰에서 먹자 「볼륨을 더 작게 유지해 줄 수 있니」).
     더 올리지 말 것. 설정의 음량 막대는 5 칸씩이라 5 도 손으로 고를 수 있는 값이다. */
  const 기본음량 = 5;
  /* 아이콘을 여기서 그린다 — 랜딩에는 앱의 SVG 묶음(#i-sound)이 없다.
     한 군데서 그려야 두 페이지가 같은 그림이 된다. */
  const 몸통 = '<path d="M4.5 9.5h3l4-3.2v11.4l-4-3.2h-3z"/>';
  const 그림 = (안) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
    stroke-linecap="round" stroke-linejoin="round">${몸통}${안}</svg>`;
  const 켬 = 그림('<path d="M15 9.4a3.6 3.6 0 0 1 0 5.2"/><path d="M17.6 7a7 7 0 0 1 0 10"/>');
  const 끔 = 그림('<path d="M15.4 9.6 20 14.4M20 9.6l-4.6 4.8"/>');

  let el = null, on = true, 음량 = 기본음량, 걸었나 = false, 판 = null, 꾹 = 0, 꾹눌렀나 = false;
  /* 🔴 **끈 것은 그 방문에만 남는다** (사장님 2026-09-15 : 「배경음악은 항상 틀어져야하는데 요즘 꺼져있더라고」).
     앞서는 한 번 끄면 localStorage 에 남아 **다음에 열어도 영영 꺼져 있었다.**
     ⛔ 이제 끔은 sessionStorage(그 창 하나)에만 둔다. 앱을 다시 열면 기본음량으로 다시 난다.
     ⛔ 옛 「끔」 표식은 여기서 한 번 걷어낸다. 안 걷으면 이미 꺼 두신 기기는 계속 조용하다. */
  try { localStorage.removeItem('lb.bgm'); } catch (e) {}
  try { on = sessionStorage.getItem('lb.bgm') !== '0'; } catch (e) {}
  /* 🔴 **아이폰에 남아 있던 음량은 한 번 걷는다** (2026-09-28 · lb-v205).
     v204 전까지 아이폰 사파리는 음량 막대를 무시했다 — 막대를 옮겨도 소리는 그대로였다.
     그래서 아이폰에 적힌 값은 **들어 보고 고른 값이 아니다.** 그대로 두면 이제서야 그 값(예: 30%)으로
     크게 난다. 한 번만 걷어 5% 로 새로 시작한다. 그 뒤에 고르신 값은 그대로 남는다. */
  try {
    const 아이폰 = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (아이폰 && !localStorage.getItem('lb.bgmvol.ios1')) {
      localStorage.removeItem('lb.bgmvol');
      localStorage.setItem('lb.bgmvol.ios1', '1');
    }
  } catch (e) {}
  try {
    const v = Number(localStorage.getItem('lb.bgmvol'));
    /* ⛔ 0 도 손님이 고른 값이다. Number('') 도 0 이라 **빈 값과 0 을 갈라야** 한다 —
       안 가르면 0 으로 내려 두신 분이 다음에 열 때 30 으로 되돌아간다. */
    if (localStorage.getItem('lb.bgmvol') !== null && v >= 0 && v <= 100) 음량 = v;
  } catch (e) {}

  const 단추들 = () => [...document.querySelectorAll('#btnBgm')];
  const 그리기 = () => 단추들().forEach((b) => {
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
    b.classList.toggle('on', on);
    b.innerHTML = on ? 켬 : 끔;
  });
  /* ⛔ 자리 옮기기(currentTime)는 **이제 안 한다.** 앞 여백은 파일에서 잘라 두었다.
     받는 중인 mp3 에서 자리를 옮기면 브라우저가 받던 것을 버리고 다시 요청한다 —
     느린 회선에서 노래가 영영 안 나오던 원인이 이것이었다(2026-08-24).
     시작 이 0 이 아닐 때만(누가 되돌려 놓았을 때만) 옮긴다. */
  const 앞으로 = () => { if (!시작) return; try { if (el && el.currentTime < 시작) el.currentTime = 시작; } catch (e) {} };
  const 만들기 = () => {
    if (el) return el;
    el = new Audio(파일);
    el.loop = true;                    // 앞 여백이 없으니 그냥 돌린다(이음매 없음)
    el.volume = 음량 / 100;
    el.preload = 'none';               // ⛔ 여는 속도 — 화면이 뜨는 동안엔 안 받는다(아래 받아두기 참고)
    if (시작) el.addEventListener('loadedmetadata', 앞으로);
    return el;
  };
  /* 화면이 다 뜬 뒤 **조용히 받기 시작한다.**
     ⚠ 이게 「바로 나오게」의 핵심이다 : 브라우저가 손이 닿기 전엔 소리를 안 내주지만,
        **받아 두는 것은 막지 않는다.** 미리 받아 두면 손님이 화면을 만지는 순간 바로 난다.
     ⛔ 화면이 뜨는 동안에는 부르지 말 것 — 여는 속도가 먼저다. */
  const 받아두기 = () => { const a = 만들기(); if (a.preload !== 'auto') { a.preload = 'auto'; try { a.load(); } catch (e) {} } };

  /* 🔴 **저절로 켜질 때는 0 에서 스르륵 커진다 + 「음악 끄기」 말풍선** (사장님 2026-09-28 :
     「음악이 바로 재생이 되면 조용한 환경일 때 고객이 당황할 수 있을 것 같아」 → A+B 고르심).
     ⛔ 끄지 않는다. 「항상 틀어져야」(9/15)는 그대로다. 놀람만 없앤다.
     ⚠ **아이폰은 audio.volume 을 무시한다**(늘 기기 음량 그대로 난다). 그래서 10% 도, 스르륵도
        아이폰에서는 안 먹었다. 소리를 Web Audio 의 gain 한 칸에 흘려 거기서 크기를 정한다.
        AudioContext 가 없는 브라우저는 예전처럼 volume 으로 간다.
     ⚠ gain 을 쓰면 AudioContext 가 깨어 있어야 소리가 난다 — 브라우저는 손이 닿기 전엔 재운다.
        그래서 「울고 있나」에 그것까지 넣고, 손짓마다 깨운다(아래 잇기). */
  let 판소리 = null, 칸 = null;
  /* 🔴 **아이폰도 gain 길을 쓴다** (사장님 2026-09-28).
     v202 에서 「음악이 안 나와」 → v203 에서 아이폰만 뺐는데, 알고 보니 **무음모드**였다
     (Web Audio 는 벨소리 무음 스위치를 따른다). 그러자 v203 은 「천천히 안 켜지고 한 번에 나와」.
     ⛔ 무음 스위치를 따르는 것은 **고장이 아니라 바라던 것**이다 — 조용한 곳의 사람은 대개 무음모드다.
        navigator.audioSession 을 'playback' 으로 바꿔 무음을 뚫지 말 것.
     ⛔ 아이폰을 다시 빼지 말 것. 빼면 사파리가 volume 을 무시해 10%·스르륵이 통째로 안 먹는다. */
  const 소리길 = () => {
    if (칸 || !el) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try {
      판소리 = new AC();
      칸 = 판소리.createGain();
      칸.gain.value = 음량 / 100;
      판소리.createMediaElementSource(el).connect(칸).connect(판소리.destination);
      el.volume = 1;
    } catch (e) { 칸 = null; 판소리 = null; }
  };
  const 깨우기 = () => { try { if (판소리 && 판소리.state !== 'running') 판소리.resume(); } catch (e) {} };
  const 크기 = (v) => { if (칸) 칸.gain.value = v; else if (el) el.volume = v; };
  let 스르륵중 = 0;
  const 스르륵 = () => {
    clearInterval(스르륵중);
    const 끝 = 음량 / 100, 걸음 = 35;          // 100ms × 35 = 3.5초
    let n = 0; 크기(0);
    스르륵중 = setInterval(() => { n++; 크기(끝 * Math.min(1, n / 걸음)); if (n >= 걸음) clearInterval(스르륵중); }, 100);
  };
  let 말했나 = false;
  const 말풍선 = () => {
    if (말했나 || 음량 === 0) return; 말했나 = true;   // 음량 0 으로 두신 분은 들리지도 않으니 말할 까닭이 없다
    const b = 단추들().find((x) => x.offsetParent !== null); if (!b) return;
    const p = document.createElement('div');
    p.setAttribute('role', 'status');
    /* ⛔ 모양을 여기 박는다 — 앱(ui2)은 app.css 를 안 불러서 .bgmpop 이 없다. */
    p.style.cssText = 'position:fixed;z-index:70;background:#1b1b1b;color:#fff;border-radius:999px;'
      + 'padding:9px 15px;font-size:15px;font-weight:700;line-height:1.3;white-space:nowrap;'
      + 'box-shadow:0 6px 20px rgba(0,0,0,.18);pointer-events:none;';
    p.textContent = '🎵 음악 끄기는 여기 · 한 번 누르면 꺼져요';
    document.body.appendChild(p);
    const r = b.getBoundingClientRect(), w = p.getBoundingClientRect().width;
    p.style.top = (r.bottom + 8) + 'px';
    p.style.left = Math.max(8, Math.min(r.right - w, innerWidth - w - 8)) + 'px';
    setTimeout(() => p.remove(), 3500);
  };
  /* 손님이 단추로 켤 때 — 원하신 것이니 바로 그 크기로 */
  const 틀기 = () => { 받아두기(); 소리길(); 깨우기(); 퍼졌나 = true; clearInterval(스르륵중); 크기(음량 / 100); return el.play().then(앞으로).catch(() => {}); };
  /* 저절로 켜 볼 때 — 0 에서 시작해 **진짜 울기 시작하면 한 번만** 스르륵 + 말풍선 */
  let 퍼졌나 = false;
  const 시작됨 = () => { if (퍼졌나) return; 퍼졌나 = true; 스르륵(); 말풍선(); };
  const 저절로 = () => {
    받아두기(); 소리길(); 깨우기();
    if (!퍼졌나) 크기(0);
    return el.play().then(() => { 앞으로(); if (울리나()) 시작됨(); }).catch(() => {});
  };
  const 세우기 = () => { clearInterval(스르륵중); if (el) el.pause(); };
  /* 진짜로 울고 있는가. play() 가 되돌아왔다고 소리가 나는 것은 아니다 —
     회선이 느리면 받는 중에 멈춰 서 있고(paused=false 라도 readyState 가 낮다),
     막히면 조용히 되돌아온다. 「다시 걸어 볼지」는 이 값으로 정한다.
     gain 길을 쓰면 AudioContext 가 깨어 있어야 진짜 들린다. */
  const 울리나 = () => !!el && !el.paused && !el.ended && (!판소리 || 판소리.state === 'running');

  /* ── 음량 판 ────────────────────────────────────────────────
     ⛔ **누르면 켜고 끄는 것은 그대로 둔다** (한 번에 조용해져야 한다).
        음량은 **꾹 누르면** 열린다. 그리고 **켤 때 한 번 같이 열어** 준다 —
        안 그러면 조절할 수 있다는 걸 아무도 모른다.
     ⛔ 판은 body 에 붙이고 단추 밑에 자리를 잡는다. 머리 안에 넣으면 잘린다. */
  /* 음량을 바꾸는 곳은 **여기 하나** — 꾹 누르는 판과 설정의 막대가 같이 쓴다. */
  const 음량맞추기 = (v) => {
    음량 = Math.min(100, Math.max(0, Number(v) || 0));
    clearInterval(스르륵중);            // 손으로 맞추면 스르륵은 거기서 멈춘다
    크기(음량 / 100);
    try { localStorage.setItem('lb.bgmvol', String(음량)); } catch (e) {}
    /* 0 으로 내리면 끈 것과 같다 — 단추 그림도 같이 바꿔 준다.
       ⛔ 다만 켬/끔은 안 건드린다. 「음량 0」과 「끔」은 다른 것이고,
          올리면 그 자리에서 다시 들려야 한다. */
    단추들().forEach((b) => b.classList.toggle('mute', 음량 === 0));
  };
  const 판닫기 = () => { if (판) { 판.remove(); 판 = null; } };
  const 판열기 = (btn) => {
    판닫기();
    판 = document.createElement('div');
    판.className = 'bgmpop';
    판.innerHTML = '<s>음량</s>'
      + `<input type="range" min="0" max="100" step="5" value="${음량}" aria-label="음량">`
      + `<i class="num">${음량}%</i>`;
    document.body.appendChild(판);
    const r = btn.getBoundingClientRect();
    판.style.top = (r.bottom + 8) + 'px';
    /* 오른쪽으로 넘치지 않게 민다 — 단추가 화면 오른쪽 끝에 붙어 있다 */
    const w = 판.getBoundingClientRect().width;
    판.style.left = Math.max(8, Math.min(r.right - w, innerWidth - w - 8)) + 'px';
    const 막대 = 판.querySelector('input'), 글 = 판.querySelector('i');
    막대.oninput = () => { 음량맞추기(Number(막대.value)); 글.textContent = 음량 + '%'; };
    /* 판 밖을 누르면 닫는다. ⛔ 이 손짓이 판 자체를 닫아 버리지 않게 다음 틱에 건다. */
    setTimeout(() => {
      const 밖 = (e) => { if (판 && !판.contains(e.target) && e.target !== btn && !btn.contains(e.target)) { 판닫기(); removeEventListener('pointerdown', 밖); } };
      addEventListener('pointerdown', 밖, { passive: true });
    }, 0);
  };

  /* 🔴 **카프카로키에서 넘어온 손님에게는 스스로 켜지 않는다** (사장님 2026-09-10 :
     「카프카로키에서 아엠어굿펄슨 들어가면 노래가 끊겨있는거 확인해줘 · 양쪽중 하나만 나오면돼」).

     재 보고 알았다 : **두 집이 같은 곡**을 쓴다(Grace On My Way). 카프카로키는 새 탭이 열려
     제 탭이 숨으면 노래를 멈춘다 — 오브체험에서 두 곡이 겹치던 사고(2026-09-03) 때 넣은 규칙이다.
     그래서 넘어오는 순간 카프카로키 노래가 멈추고, 여기서 **같은 곡이 0초부터 다시** 난다.
     듣는 사람에게는 「노래가 끊겼다」가 된다.

     ⛔ **자리(currentTime)를 옮겨 이어 붙이지 않는다.** 받는 중인 mp3 에서 자리를 옮기면
        브라우저가 받던 것을 버리고 다시 요청한다 — 2026-08-24 「섬에서 노래가 안 나온다」의
        원인이 바로 그것이었다. 그 함정을 다시 밟지 않는다.
     → 그래서 **여기서는 안 켠다.** 한 곡이 두 번 시작하는 일이 없어지고, 카프카로키 탭으로
       돌아가면 그 곡이 멈춘 자리에서 이어진다. 「양쪽 중 하나만」이 글자 그대로 지켜진다.
     ⛔ **끄는 것이 아니다.** 소리 단추는 그대로 서고, 누르시면 그때 난다.
     ⛔ 그 방문 한 번만이다. 다음에 주소로 직접 들어오시면 예전처럼 저절로 난다.
     ⛔ 켬·끔을 손수 정해 두신 분(lb.bgm 이 적혀 있는 분)은 그 뜻을 따른다 — 여기서 안 가로챈다. */
  const 카프카로키에서왔나 = () => {
    try {
      if (!document.referrer) return false;
      const h = new URL(document.referrer).hostname;
      return /(^|\.)kafka-roki\.com$/.test(h) || /(^|\.)kafkaroki\.com$/.test(h);
    } catch (e) { return false; }
  };

  /* 🔴 **틀 안에서는 스스로 켜지 않는다** (사장님 2026-09-10 :
     「랜딩에서 노래가 2개가 틀어져 · 손으로 밀어봐 눌렀을때」).

     파는 화면은 앱을 **iframe 으로 세 대** 띄운다(「손으로 밀어 봐」). 그 셋이 저마다
     제 노래를 켜니, 랜딩 것까지 합쳐 **한 화면에서 네 곡**이 어긋난 자리에서 같이 난다.
     ⛔ 미리보기는 소리를 내면 안 된다 — 남의 화면 안에 들어가 있는 것이라
        손님이 어느 것을 끄는지도 알 수 없다.
     ⛔ **끄는 것이 아니다.** 소리 단추는 그대로 있고 누르면 난다.
     ⛔ 여기 한 곳에서 막는다. ui2 쪽에서 막으면 다음에 다른 화면을 끼울 때 또 샌다. */
  const 틀안인가 = () => { try { return window.top !== window.self; } catch (e) { return true; } };

  function start(알림) {
    if (틀안인가()) { on = false; 그리기(); return; }
    let 정해둠 = false;
    try { 정해둠 = sessionStorage.getItem('lb.bgm') !== null; } catch (e) {}
    /* ⛔ on 만 내린다. 단추 거는 아래 토막은 그대로 지나가야 손님이 눌러서 켤 수 있다.
       (아래 `if (!on || 걸었나) return;` 이 저절로 켜는 것만 건너뛴다) */
    if (!정해둠 && 카프카로키에서왔나()) on = false;

    그리기();
    단추들().forEach((b) => {
      b.classList.toggle('mute', 음량 === 0);
      /* ⛔ 꾹 누름을 **기기가 먼저 가로채지 못하게** 막는다 (사장님 지적 2026-08-17 :
         「음량버튼을 꾹 눌렀더니 아이필그레잇이 복사되어버리네」).
         아이폰은 꾹 누름을 「글자 고르기」로 받아 복사 딱지를 띄우고, 안드로이드는
         contextmenu 를 띄운다. CSS 로도 막았고(.iconbtn), 여기서 한 번 더 막는다.
         ⛔ pointerdown 에서 preventDefault 하면 **click 이 안 온다** — 여기서는 막지 않는다.
            대신 판이 열린 뒤에 남아 있는 글자 고르기를 걷어낸다. */
      b.oncontextmenu = (e) => { e.preventDefault(); return false; };
      /* 꾹 누르기 — 450ms 넘게 누르고 있으면 음량 판만 연다(켜고 끄지 않는다) */
      b.onpointerdown = () => {
        꾹눌렀나 = false;
        꾹 = setTimeout(() => {
          꾹눌렀나 = true;
          try { const s = getSelection(); if (s) s.removeAllRanges(); } catch (e) {}
          판열기(b);
        }, 450);
      };
      ['pointerup', 'pointerleave', 'pointercancel'].forEach((n) =>
        b.addEventListener(n, () => clearTimeout(꾹)));
      b.onclick = () => {
        if (꾹눌렀나) { 꾹눌렀나 = false; return; }   // 꾹 눌러 판을 연 것은 누른 것이 아니다
        판닫기();
        on = !on;
        try { sessionStorage.setItem('lb.bgm', on ? '1' : '0'); } catch (e) {}
        그리기();
        b.classList.toggle('mute', 음량 === 0);
        if (on) {
          틀기();
          /* ⛔ **한 번 누름은 켜고 끄는 것만** 한다 (사장님 지시 2026-08-17 :
             「꾹 누르면 음량조절 · 한번 터치로는 끄기 키우기」).
             ⛔ 다만 **음량을 한 번도 안 만져 보신 분에게는 딱 한 번** 판을 같이 연다 —
                꾹 누르면 음량이 나온다는 걸 알 길이 그것뿐이다. 한 번 만지신 뒤로는
                (lb.bgmvol 이 생긴다) 다시 안 연다. */
          let 처음 = true;
          try { 처음 = localStorage.getItem('lb.bgmvol') === null; } catch (e) {}
          if (처음) 판열기(b);
          if (알림) 알림(처음 ? '배경음악을 켰어요 · 꾹 누르면 음량' : '배경음악을 켰어요');
        } else { 세우기(); if (알림) 알림('배경음악을 껐어요'); }
      };
    });
    if (!on || 걸었나) return;
    걸었나 = true;
    /* 화면이 다 뜨고 0.4초 뒤 : ① 받아 두기를 시작하고 ② 틀어 본다.
       막히면 소리는 안 나지만 **받는 것은 계속된다** → 손님이 화면을 만지는 순간 바로 난다. */
    const 늦게 = () => setTimeout(저절로, 400);
    if (document.readyState === 'complete') 늦게();
    else addEventListener('load', 늦게, { once: true });
    /* 회선이 아주 느려 load 가 안 떨어질 수도 있다 — 3초가 지나면 그냥 받기 시작한다. */
    setTimeout(() => { if (on) 받아두기(); }, 3000);
    /* ── 손짓이 올 때마다 다시 걸어 본다 (2026-08-23 사장님 신고 「가계부 노래가 안 나온다 ·
          섬에서 폰으로 열어 봤다」) ──────────────────────────────────────────────
       예전에는 첫 손짓 **딱 한 번**만 걸었다(once:true). 그 한 번이 실패하면 그걸로 끝이라,
       음악은 그 방문 내내 영영 안 나온다. 실패는 흔하다 :
         · 회선이 느린 곳(섬·지하·시골)에서는 첫 손짓 때 아직 파일이 안 왔다.
         · 그 손짓이 브라우저가 「소리를 내도 된다」고 쳐 주는 손짓이 아닐 때가 있다.
       그래서 **소리가 실제로 울 때까지** 손짓마다 다시 건다. 울기 시작하면 그때 손을 뗀다.
       ⛔ once:true 로 되돌리지 말 것 — 그게 이 고장의 원인이었다.
       ⚠ passive 로 듣는다. 손님의 손짓 자체를 막으면 안 된다.
       ⚠ 붙일 때와 뗄 때의 capture 값이 같아야 한다 — 다르면 안 떨어진다. */
    const 손짓들 = ['pointerdown', 'touchstart', 'touchend', 'click', 'keydown', 'scroll'];
    const 손떼기 = () => 손짓들.forEach((n) => removeEventListener(n, 잇기, true));
    function 잇기() {
      if (!on) return;                       // 손님이 꺼 두셨으면 켜지 않는다
      if (울리나()) { 손떼기(); return; }     // 이미 울고 있다 — 더 걸 일이 없다
      /* 손짓 안에서 깨워야 브라우저가 소리를 내준다. 깨는 것은 곧바로가 아니라 잠깐 뒤라
         한 틱 기다렸다가 확인한다. */
      저절로().then(() => setTimeout(() => { if (울리나()) { 손떼기(); 시작됨(); } }, 60));
    }
    손짓들.forEach((n) => addEventListener(n, 잇기, { capture: true, passive: true }));
    /* 🔴 **다른 앱에 갔다 오면 소리 길(AudioContext)이 잠들 수 있다** — 아이폰은 앱을 내리면
       컨텍스트를 「interrupted」로 세운다. audio 는 도는데 gain 뒤가 막혀 **조용해진다.**
       예전(volume 만 쓰던 때)엔 없던 일이라 여기서 막는다 : 돌아오면 깨워 보고,
       안 깨면 다음 손짓에서 다시 깨운다(손짓 안이어야 브라우저가 허락한다). */
    const 다시깨우기 = () => { if (on && el && !el.paused) 깨우기(); };
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) return;
      다시깨우기();
      손짓들.forEach((n) => addEventListener(n, 다시깨우기, { capture: true, passive: true, once: true }));
    });
  }

  return { start, 켜졌나: () => on, 음량: () => 음량, 음량맞추기 };
})();
