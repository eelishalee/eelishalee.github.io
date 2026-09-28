/* 계속 쓰기판 백업 (2026-09-28) — 폰을 바꿔도 기록이 안 사라지게.
   ① 구글 드라이브 자동 백업 : 적을 때마다(15초 모아서) 손님 **자기** 구글 드라이브에 보관본 한 파일을 덮어쓴다.
      우리 서버를 거치지 않는다(브라우저 → 구글). 권한은 drive.file — **이 앱이 만든 파일만** 보고 고친다.
   ② 카톡으로 보내 두기 : 폰의 공유 창으로 보관본 파일을 넘긴다 → 카카오톡 「나와의 채팅」을 고르면 끝.
   ③ 파일로 받기.
   ⛔ 보관본 = 서비스워커가 만드는 /api/ledger?r=dump&as=book (산 사람 도장까지 들어 있다). 되살리기도 같은 길(restore).
   ⛔ 구글 로그인 창은 **사람이 누를 때만** 뜰 수 있다(팝업). 그래서 연결이 끊기면 조용히 밀어 두고, 단추에 점을 찍어 알린다. */
(function () {
  var 구글ID = '272789825423-i53acuhpnh28tgupip08lbdavkstl72q.apps.googleusercontent.com';
  var 파일이름 = '아엠어굿펄슨-장부-보관본.html';
  var 권한 = 'https://www.googleapis.com/auth/drive.file';
  var 열쇠 = null, 열쇠끝 = 0, 요청기 = null;
  var ls = { get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
  var 오늘 = function () { return new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 10); };
  var 날말 = function (iso) { if (!iso) return '아직 없어'; var d = new Date(iso); return (d.getMonth() + 1) + '월 ' + d.getDate() + '일 ' + d.getHours() + ':' + String(d.getMinutes()).padStart(2, '0'); };

  /* ── 보관본 만들기 · 되살리기 ── */
  function 보관본() { return fetch('/api/ledger?r=dump&as=book').then(function (r) { if (!r.ok) throw new Error('보관본을 못 만들었어'); return r.text(); }); }
  function 되살리기(html) {
    var m = /<script type="application[/]json" id="lb-data">([^]*?)<[/]script>/.exec(html);
    if (!m) throw new Error('아엠어굿펄슨 보관본이 아니야');
    var d = JSON.parse(m[1].split(String.fromCharCode(92) + 'u003c').join('<'));
    return fetch('/api/ledger?r=restore', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ kv: d.kv, 달: d.달, 이용권: d.이용권 || '' }) })
      .then(function (r) { return r.json(); }).then(function (j) { if (!j.ok) throw new Error(j.err || '못 되살렸어'); return d.받은날 || ''; });
  }

  /* ── 구글 ── */
  function gis() {
    if (window.google && google.accounts && google.accounts.oauth2) return Promise.resolve();
    return new Promise(function (ok, no) {
      var s = document.createElement('script'); s.src = 'https://accounts.google.com/gsi/client'; s.async = true;
      s.onload = function () { ok(); }; s.onerror = function () { no(new Error('구글에 못 붙었어 · 인터넷을 확인해 줘')); };
      document.head.appendChild(s);
    });
  }
  function 열쇠받기(처음) {   // 사람이 누른 자리에서만 부른다
    return gis().then(function () {
      return new Promise(function (ok, no) {
        요청기 = google.accounts.oauth2.initTokenClient({
          client_id: 구글ID, scope: 권한,
          callback: function (t) {
            if (t.error) return no(new Error('구글 연결을 못 했어'));
            열쇠 = t.access_token; 열쇠끝 = Date.now() + (Number(t.expires_in) || 3600) * 1000 - 60000;
            ls.set('keepDrive', '1'); ok();
          },
          error_callback: function () { no(new Error('구글 연결 창이 닫혔어')); },
        });
        요청기.requestAccessToken({ prompt: 처음 ? 'consent' : '' });
      });
    });
  }
  var 열쇠있나 = function () { return 열쇠 && Date.now() < 열쇠끝; };
  function 드라이브(url, opt) {
    opt = opt || {}; opt.headers = Object.assign({ Authorization: 'Bearer ' + 열쇠 }, opt.headers || {});
    return fetch(url, opt).then(function (r) { if (r.status === 401) { 열쇠 = null; throw new Error('구글 연결이 끝났어 · 한 번 더 눌러 줘'); } if (!r.ok) throw new Error('구글 드라이브가 거절했어 (' + r.status + ')'); return r; });
  }
  function 파일찾기() {
    var id = ls.get('keepDriveFile'); if (id) return Promise.resolve(id);
    var q = encodeURIComponent("name='" + 파일이름 + "' and trashed=false");
    return 드라이브('https://www.googleapis.com/drive/v3/files?q=' + q + '&fields=files(id,modifiedTime)&orderBy=modifiedTime desc')
      .then(function (r) { return r.json(); }).then(function (j) { var f = (j.files || [])[0]; if (f) ls.set('keepDriveFile', f.id); return f ? f.id : null; });
  }
  function 드라이브에올리기() {
    return 보관본().then(function (html) {
      return 파일찾기().then(function (id) {
        if (id) return 드라이브('https://www.googleapis.com/upload/drive/v3/files/' + id + '?uploadType=media', { method: 'PATCH', headers: { 'Content-Type': 'text/html; charset=utf-8' }, body: html })
          .catch(function (e) { ls.set('keepDriveFile', ''); throw e; });
        var 경계 = 'igp' + Date.now();
        var 몸 = '--' + 경계 + '\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n' + JSON.stringify({ name: 파일이름, mimeType: 'text/html' })
          + '\r\n--' + 경계 + '\r\nContent-Type: text/html; charset=UTF-8\r\n\r\n' + html + '\r\n--' + 경계 + '--';
        return 드라이브('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id', { method: 'POST', headers: { 'Content-Type': 'multipart/related; boundary=' + 경계 }, body: 몸 })
          .then(function (r) { return r.json(); }).then(function (j) { if (j.id) ls.set('keepDriveFile', j.id); });
      });
    }).then(function () { ls.set('keepLastBackup', new Date().toISOString()); ls.set('keepLastDrive', new Date().toISOString()); ls.set('keepPending', ''); 점(); });
  }
  function 드라이브에서불러오기() {
    return 파일찾기().then(function (id) {
      if (!id) throw new Error('드라이브에 보관본이 아직 없어');
      return 드라이브('https://www.googleapis.com/drive/v3/files/' + id + '?alt=media').then(function (r) { return r.text(); });
    });
  }

  /* 적을 때마다 — 서비스워커가 「바뀌었어」를 보내 준다. 15초 모아서 한 번 올린다 */
  var 대기 = null;
  function 바뀜() {
    ls.set('keepPending', '1'); 점();
    if (!ls.get('keepDrive')) return;
    clearTimeout(대기);
    대기 = setTimeout(function () { if (열쇠있나()) 드라이브에올리기().catch(function () { 점(); }); }, 15000);
  }
  if (navigator.serviceWorker) navigator.serviceWorker.addEventListener('message', function (e) { if (e.data && e.data.type === 'keep-changed') 바뀜(); });
  document.addEventListener('visibilitychange', function () { if (document.hidden && ls.get('keepPending') && 열쇠있나()) 드라이브에올리기().catch(function () {}); });

  /* ── 카톡으로 보내 두기 (공유 창) ── */
  function 카톡() {
    return 보관본().then(function (html) {
      var 이름 = '아엠어굿펄슨-장부-' + 오늘() + '.html';
      var f = new File([html], 이름, { type: 'text/html' });
      if (navigator.canShare && navigator.canShare({ files: [f] })) {
        return navigator.share({ files: [f], title: '아엠어굿펄슨 장부 보관본', text: '카카오톡 「나와의 채팅」에 보내 두면 새 폰에서도 불러올 수 있어요.' })
          .then(function () { ls.set('keepLastBackup', new Date().toISOString()); 점(); return '보냈어'; });
      }
      내려받기(html, 이름);
      return '이 폰은 공유 창을 못 열어서 파일로 받았어. 받은 파일을 카톡 「나와의 채팅」에 보내 두면 돼.';
    });
  }
  function 내려받기(html, 이름) {
    var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([html], { type: 'text/html' })); a.download = 이름 || ('아엠어굿펄슨-장부-' + 오늘() + '.html');
    document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    ls.set('keepLastBackup', new Date().toISOString()); 점();
  }

  /* ── 화면 : 떠 있는 「백업」 단추 + 창 ── */
  var 단추 = document.createElement('button');
  단추.type = 'button'; 단추.id = 'keepBackupBtn'; 단추.textContent = '☁ 백업';
  /* ⛔ 떠 있는 단추로 두지 않는다 — 메모 칸·계산기에 겹쳤다(사장님 2026-09-28). 맨 위 줄(로고 줄) 음악 단추 옆에 붙인다 */
  단추.style.cssText = 'margin-left:auto;flex:none;border:2px solid var(--ink,#111);background:var(--paper,#fff);color:var(--ink,#111);border-radius:999px;padding:7px 12px;font:700 13px/1 inherit';
  function 점() {
    var 마지막 = ls.get('keepLastBackup'), 오래 = !마지막 || (Date.now() - Date.parse(마지막)) > 30 * 864e5;
    var 밀림 = ls.get('keepPending') && ls.get('keepDrive') && !열쇠있나();
    단추.style.background = (오래 || 밀림) ? '#C8FF00' : 'var(--paper,#fff)';
    단추.textContent = (오래 || 밀림) ? '☁ 백업 •' : '☁ 백업';
  }
  function 창() {
    var 드 = ls.get('keepDrive');
    var 판 = document.createElement('div');
    판.style.cssText = 'position:fixed;inset:0;z-index:70;background:rgba(0,0,0,.45);display:flex;align-items:flex-end;justify-content:center';
    판.innerHTML = '<div style="background:var(--paper,#fff);color:var(--ink,#111);width:100%;max-width:520px;border-radius:20px 20px 0 0;padding:20px 18px calc(env(safe-area-inset-bottom,0px) + 20px);font-size:15px;line-height:1.6">'
      + '<b style="font-size:18px">폰을 바꿔도 안 사라지게</b>'
      + '<div style="color:var(--sub,#777);margin:2px 0 14px">마지막 백업 · ' + 날말(ls.get('keepLastBackup')) + '</div>'
      + '<div style="border:2px solid var(--ink,#111);border-radius:14px;padding:12px 14px;margin-bottom:10px"><b>구글 드라이브 자동 백업</b> ' + (드 ? '<span style="background:#C8FF00;color:#000;padding:0 6px;font-size:12px">켜짐</span>' : '') + '<br>'
      +   '<small>적을 때마다 <b>내 구글 드라이브</b>에 저절로 저장돼. 새 폰에서 「드라이브에서 불러오기」 한 번이면 끝.</small>'
      +   '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px">'
      +     '<button data-k="drive-up" style="flex:1">' + (드 ? '지금 백업' : '구글 드라이브 연결') + '</button>'
      +     '<button data-k="drive-down" style="flex:1">드라이브에서 불러오기</button></div>'
      +   (드 ? '<div style="margin-top:6px"><small style="color:var(--sub,#777)">드라이브에 마지막 저장 · ' + 날말(ls.get('keepLastDrive')) + '</small></div>' : '') + '</div>'
      + '<div style="border:2px solid var(--ink,#111);border-radius:14px;padding:12px 14px;margin-bottom:10px"><b>카톡으로 보내 두기</b><br>'
      +   '<small>공유 창에서 카카오톡 → <b>나와의 채팅</b>을 고르면 보관본이 카톡에 남아.</small>'
      +   '<div style="margin-top:8px"><button data-k="kakao" style="width:100%">카톡으로 보내기</button></div></div>'
      + '<div style="display:flex;gap:6px"><button data-k="file" style="flex:1">파일로 받기</button><button data-k="load" style="flex:1">받아 둔 파일 불러오기</button></div>'
      + '<div style="margin-top:6px"><button data-k="x" style="width:100%">닫기</button></div>'
      + '<div data-msg style="margin-top:10px;min-height:1.4em;color:var(--sub,#777)"></div></div>';
    판.querySelectorAll('button').forEach(function (b) { b.style.cssText += ';border:2px solid var(--ink,#111);background:var(--ink,#111);color:var(--paper,#fff);border-radius:10px;padding:10px 8px;font:700 14px inherit'; });
    var 말 = function (t) { 판.querySelector('[data-msg]').textContent = t; };
    판.onclick = function (e) {
      var b = e.target.closest('button'); if (e.target === 판) return 판.remove(); if (!b) return;
      var k = b.getAttribute('data-k');
      if (k === 'x') return 판.remove();
      if (k === 'load') { return 파일불러오기(말); }
      if (k === 'file') { 말('만드는 중…'); return 보관본().then(function (h) { 내려받기(h); 말('받았어. 파일을 안전한 곳(카톡 나와의 채팅 · 메일)에 옮겨 두면 더 좋아.'); }).catch(function (x) { 말(x.message); }); }
      if (k === 'kakao') { 말('여는 중…'); return 카톡().then(function (t) { 말(t); }).catch(function (x) { if (x && x.name === 'AbortError') 말('안 보냈어'); else 말(x.message); }); }
      if (k === 'drive-up') {
        말('구글에 붙는 중…');
        var 먼저 = 열쇠있나() ? Promise.resolve() : 열쇠받기(!ls.get('keepDrive'));
        return 먼저.then(드라이브에올리기).then(function () { 판.remove(); 창(); }).catch(function (x) { 말(x.message); });
      }
      if (k === 'drive-down') {
        말('구글에 붙는 중…');
        var 먼저2 = 열쇠있나() ? Promise.resolve() : 열쇠받기(!ls.get('keepDrive'));
        return 먼저2.then(드라이브에서불러오기).then(function (html) {
          if (!confirm('드라이브의 보관본으로 이 기기 장부를 통째로 바꿀까? 지금 적힌 건 사라져.')) return 말('안 바꿨어');
          return 되살리기(html).then(function (날) { 말('불러왔어 (' + (날 || '') + ' 보관본) · 화면을 새로 여는 중…'); setTimeout(function () { location.reload(); }, 900); });
        }).catch(function (x) { 말(x.message); });
      }
    };
    document.body.appendChild(판);
  }
  /* 받아 둔 보관본 파일을 골라 불러온다 (앱 설정의 「파일에서 되살리기」와 같은 일 · 여기서 바로) */
  function 파일불러오기(말) {
    말 = 말 || function (t) { if (t) alert(t); };
    var i = document.createElement('input'); i.type = 'file'; i.accept = '.html,text/html,.json,application/json';
    i.onchange = function () {
      var f = i.files && i.files[0]; if (!f) return;
      f.text().then(function (html) {
        if (!confirm('이 파일로 이 폰의 장부를 통째로 바꿀까? 지금 적힌 건 사라져.')) return 말('안 바꿨어');
        return 되살리기(html).then(function () { 말('불러왔어 · 화면을 새로 여는 중…'); setTimeout(function () { location.reload(); }, 800); });
      }).catch(function (x) { 말(x.message); });
    };
    i.click();
  }
  window.keepBackup = { 열기: 창, 불러오기: 파일불러오기 };
  document.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('[data-keepload]')) 파일불러오기(); });
  단추.onclick = 창;
  function 붙이기() {
    var 음악 = document.getElementById('btnBgm'), 줄 = 음악 && 음악.parentNode;
    if (줄) { 줄.insertBefore(단추, 음악); 음악.style.marginLeft = '6px'; }
    else { 단추.style.cssText += ';position:fixed;top:calc(env(safe-area-inset-top,0px) + 10px);right:12px;z-index:57'; document.body.appendChild(단추); }
    점();
  }
  addEventListener('load', 붙이기);
})();
