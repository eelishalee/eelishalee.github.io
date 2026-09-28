/* 테마 색 — 사장님이 고른 값만 담는 파일.

   ⛔ 색을 눈대중으로 여기 적지 않는다.
      `tools/tint.html` 을 열고 원본 사진에서 스포이드로 찍은 뒤
      「palettes.js 내려받기」를 눌러 나온 파일로 이 파일을 통째로 갈아 끼운다.

   비어 있으면 `patterns.js` 의 TUNE slots 에 적힌 기본색을 그대로 쓴다.
   여기 적힌 칸만 기본색을 덮어쓴다 — 한 칸만 적어도 된다.

   손대는 순서
     1. E:\아엠어굿펄슨\서버켜기.cmd  → http://localhost:8090/tools/tint.html
     2. 칸을 고르고 원본 사진을 눌러 색을 찍는다
     3. 「palettes.js 내려받기」 → 받은 파일을 E:\아엠어굿펄슨\palettes.js 에 덮어쓴다
     4. 앱을 새로고침하면 화면과 「한 달 카드」에 같이 반영된다

   ⛔ 이 파일은 index.html 에서 patterns.js **보다 먼저** 불려야 한다. */
window.LBPalettes = {
  // 예) wendylove: { env: '#EB96B0', card: '#FBF4E4' },
};
