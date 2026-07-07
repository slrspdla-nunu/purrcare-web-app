/* ============================================================
   PurrCare · 반려묘 건강 관리  —  Vanilla JS SPA
   ============================================================ */

(function () {
  'use strict';

  /* ---------- SVG 아이콘 세트 (직접 제작 · currentColor 기반) ---------- */
  const ICON = {
    paw: `<svg class="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><ellipse cx="6.5" cy="10" rx="1.7" ry="2.2"/><ellipse cx="10.3" cy="7.6" rx="1.7" ry="2.3"/><ellipse cx="13.7" cy="7.6" rx="1.7" ry="2.3"/><ellipse cx="17.5" cy="10" rx="1.7" ry="2.2"/><path d="M12 11.5c-2.6 0-4.8 2-4.8 4.3 0 1.7 1.4 2.7 3.1 2.7.9 0 1.2-.3 1.7-.3s.8.3 1.7.3c1.7 0 3.1-1 3.1-2.7 0-2.3-2.2-4.3-4.8-4.3z"/></svg>`,
    home: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 11 12 4l8.5 7"/><path d="M5.5 9.6V19a1 1 0 0 0 1 1H17.5a1 1 0 0 0 1-1V9.6"/><path d="M9.5 20v-4.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V20"/></svg>`,
    cat: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 5C4.3 7.6 4.8 9 6 10.2 4.8 11.6 4.2 13.2 4.2 14.6c0 3.1 3.5 5.2 7.8 5.2s7.8-2.1 7.8-5.2c0-1.4-.6-3-1.8-4.4 1.2-1.2 1.7-2.6 1.5-5.2-1.9.8-3.4 2-4.3 3.5-.9-.4-2-.6-3.2-.6s-2.3.2-3.2.6C7.9 7 6.4 5.8 4.5 5Z"/><circle cx="9.4" cy="13" r=".7" fill="currentColor" stroke="none"/><circle cx="14.6" cy="13" r=".7" fill="currentColor" stroke="none"/><path d="M12 14.4v1.1M10.6 16h2.8"/></svg>`,
    records: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="4.2" width="14" height="16.6" rx="2.3"/><path d="M9 3.6h6a1 1 0 0 1 1 1V6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V4.6a1 1 0 0 1 1-1Z"/><path d="M9 12h6M9 16h4"/></svg>`,
    meal: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 11.5h17"/><path d="M5 11.5a7 7 0 0 0 14 0"/><path d="M10.2 8.2C9.4 7.2 9.4 6.2 10.4 5.2M13.8 8.2C13 7.2 13 6.2 14 5.2"/></svg>`,
    litter: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9.5h18l-1.4 8.7a1.4 1.4 0 0 1-1.4 1.2H5.8a1.4 1.4 0 0 1-1.4-1.2Z"/><path d="M2.4 9.5h19.2"/><path d="M9 12.6l2.2 2.2M11.2 12.6 9 14.8M14 13.7h2.4"/></svg>`,
    medicine: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="8.5" width="18" height="7" rx="3.5" transform="rotate(-45 12 12)"/><path d="M9.5 7.6l6.9 6.9"/></svg>`,
    play: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="7.8"/><path d="M6.4 9C9 10.4 10.8 13 11.4 19.6M8.6 5.6C10.8 8 12.6 11.6 13.2 19.4M12.4 4.4C13.6 7.4 15.4 10 18.6 11.6M6.2 15.2c2.6-.5 5.2-.2 8.3 1.4"/></svg>`,
    sleep: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 14A8.2 8.2 0 1 1 10 3.5 6.4 6.4 0 0 0 20.5 14Z"/></svg>`,
    edit: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.8 6 18 10.2M4 20l4.5-1L18.4 9.1a1.6 1.6 0 0 0 0-2.3l-2.2-2.2a1.6 1.6 0 0 0-2.3 0L4 14.5Z"/></svg>`,
    plus: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>`,
    close: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>`,
    trash: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M9.5 7V5.6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V7M6.6 7l.8 12.1a1 1 0 0 0 1 .9h7.2a1 1 0 0 0 1-.9L18.4 7M10 10.5v6.5M14 10.5v6.5"/></svg>`,
    arrow: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 12h15M13 5.5l6.5 6.5L13 18.5"/></svg>`,
    chevron: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>`,
    calendar: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="5.5" width="16" height="15" rx="2.5"/><path d="M4 9.5h16M8 3.5v4M16 3.5v4M8 13h2.5M8 16.5h2.5M14 13h2"/></svg>`,
    search: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"/><path d="M15.5 15.5 20 20"/></svg>`,
    check: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5 10 17.5 19 7"/></svg>`,
    dot: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5.2"/></svg>`,
    note: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.5 3.5h7.2L18 7.8V19a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 19V5a1.5 1.5 0 0 1 1.5-1.5Z"/><path d="M13.5 3.5V8h4.4M8.5 12.5h7M8.5 15.5h5"/></svg>`,
    chat: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 5h14a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 16h-6l-4.5 3.5V16H5a1.5 1.5 0 0 1-1.5-1.5v-8A1.5 1.5 0 0 1 5 5Z"/><path d="M9 10h.01M12 10h.01M15 10h.01"/></svg>`,
    up: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V6M6 11l6-6 6 6"/></svg>`,
    down: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v13M6 13l6 6 6-6"/></svg>`,
  };

  /* 고양이 얼굴 아바타 (색상은 컨테이너 color로 제어) */
  const CAT_FACE = `<svg class="ic-catface" viewBox="0 0 48 48" aria-hidden="true"><path fill="currentColor" d="M11 9c-1 5 .5 8 2.5 9.7C9.5 21 8.5 27 11.5 31.5 14 35.5 18.7 37.5 24 37.5s10-2 12.5-6C39.5 27 38.5 21 34.5 18.7 36.5 17 38 14 37 9c-4 1.5-7.5 4-9.4 6.8-1.1-.4-2.4-.6-3.6-.6s-2.5.2-3.6.6C16.5 13 13 10.5 11 9Z"/><circle cx="18.8" cy="25" r="2.1" fill="#fff"/><circle cx="29.2" cy="25" r="2.1" fill="#fff"/><path fill="#fff" d="M24 28.2l-1.8 1.8h3.6z"/><path d="M24 30v1.6M24 31.4c-.9 1.1-2.4 1-3.1-.2M24 31.4c.9 1.1 2.4 1 3.1-.2" stroke="#fff" stroke-width="1.3" stroke-linecap="round" fill="none"/><path d="M9 25.5l6 .9M9 28.5l6-.4M39 25.5l-6 .9M39 28.5l-6-.4" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity=".9"/></svg>`,
    CAT_COLORS = ['#3A3A3A', '#6E6E6E', '#4F4F4F', '#8A8A8A', '#5C5C5C', '#A0A0A0'];

  /* 고양이 아바타 박스 마크업 (color 인라인으로 색 지정) */
  const catAvatar = (cat, cls) => {
    if (cat && cat.photo) return `<div class="${cls} has-photo" style="background-image:url('${cat.photo}')"></div>`;
    return `<div class="${cls}" style="color:${cat ? cat.color : 'var(--sage)'}">${CAT_FACE}</div>`;
  };

  /* ---------- 기록 종류 정의 ---------- */
  const TYPES = {
    meal:        { label: '식사',     group: 'health',   color: 'var(--c-meal)',     bg: 'var(--c-meal-bg)' },
    water:       { label: '물',       group: 'health',   color: 'var(--c-water)',    bg: 'var(--c-water-bg)' },
    litter:      { label: '배변',     group: 'health',   color: 'var(--c-litter)',   bg: 'var(--c-litter-bg)' },
    medicine:    { label: '약',       group: 'health',   color: 'var(--c-medicine)', bg: 'var(--c-medicine-bg)' },
    healthEtc:   { label: '기타',     group: 'health',   color: 'var(--c-etc)',      bg: 'var(--c-etc-bg)' },
    play:        { label: '놀이',     group: 'behavior', color: 'var(--c-play)',     bg: 'var(--c-play-bg)' },
    sleep:       { label: '수면',     group: 'behavior', color: 'var(--c-sleep)',    bg: 'var(--c-sleep-bg)' },
    abnormal:    { label: '이상행동', group: 'behavior', color: 'var(--c-abn)',      bg: 'var(--c-abn-bg)' },
    behaviorEtc: { label: '기타',     group: 'behavior', color: 'var(--c-etc)',      bg: 'var(--c-etc-bg)' },
  };

  /* 그룹 → 카테고리(=type) 목록 */
  const REC_GROUPS = {
    health:   ['meal', 'litter', 'medicine', 'healthEtc'],
    behavior: ['play', 'sleep', 'abnormal', 'behaviorEtc'],
  };
  const GROUP_LABEL = { health: '건강', behavior: '행동' };

  /* 카테고리별 유형(subtype) 선택지 */
  const REC_SUBTYPES = {
    meal:        ['건식 사료', '습식 사료', '간식', '물', '처방식', '기타'],
    litter:      ['대변', '소변', '대소변', '설사', '변비', '혈변', '기타'],
    medicine:    ['구충제', '영양제', '처방약', '예방접종', '기타'],
    healthEtc:   ['체중 측정', '발톱 정리', '목욕', '미용', '기타'],
    play:        ['낚싯대', '레이저', '공', '터널', '캣휠', '기타'],
    sleep:       ['낮잠', '숙면', '얕은 잠', '기타'],
    abnormal:    ['과도한 그루밍', '숨기', '공격성', '과도한 울음', '구토', '식욕부진', '기타'],
    behaviorEtc: ['훈련', '외출', '손님 방문', '기타'],
  };
  const ABNORMAL_OPTS = ['구토', '설사', '식욕부진', '기력 없음', '기침', '재채기', '피부 이상', '기타'];

  /* ---------- 상태 ---------- */
  const LS_CATS = 'purrcare.cats';
  const LS_RECS = 'purrcare.records';
  const LS_ME = 'purrcare.me';
  let cats = [];
  let records = [];
  let me = { name: '우리집 집사', email: '', color: '#4A4A4A', bio: '', photo: '' };
  const meInitial = () => (me.name || '나').trim().slice(0, 1) || '나';
  const meAvaStyle = () => me.photo ? `background-image:url('${me.photo}');background-size:cover;background-position:center` : `background:${me.color}`;
  const meAvaText = () => me.photo ? '' : escapeHtml(meInitial());
  const meAvatar = cls => `<div class="${cls}${me.photo ? ' has-photo' : ''}" style="${meAvaStyle()}">${meAvaText()}</div>`;
  /* 가족 구성원: 이메일/이름 기반 고정 색상 + 이니셜 */
  const MEMBER_COLORS = ['#4F4F4F', '#7A7A7A', '#5C5C5C', '#909090', '#3A3A3A', '#A0A0A0'];
  const memberKey = m => (m.email || m.name || '');
  const memberColor = key => { let h = 0; for (let i = 0; i < (key || '').length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0; return MEMBER_COLORS[h % MEMBER_COLORS.length]; };
  const memberInitial = m => escapeHtml((m.name || m.email || '?').trim().slice(0, 1));
  let selectedColor = CAT_COLORS[0];
  let selectedGender = '';     // 등록 모달: 성별
  let healthSlide = 0;         // 건강 히어로 캐러셀 현재 슬라이드
  let healthTimer = null;      // 건강 히어로 자동 넘김 타이머
  let selectedNeutered = '';   // 등록 모달: 중성화 여부
  let selectedPhoto = '';      // 등록 모달: 업로드 사진(data URL)
  let weightUnknown = false;   // 등록 모달: 체중 모름
  let selectedType = 'meal';
  let selectedGroup = 'health';   // 기록 모달: 건강/행동
  let recTimeUnknown = false;     // 기록 모달: 시간 모름
  let recPhotos = [];             // 기록 모달: 첨부 사진(data URL 배열)
  let editingRecId = null;        // 기록 수정 중인 id (null=새 기록)
  let detailRecId = null;         // 상세 모달에서 보고 있는 기록
  let detailCatId = null;         // 고양이 상세 페이지에서 보고 있는 고양이
  let catDetailDate = '';         // 고양이 일기 날짜 필터
  let profilePhoto = '';          // 프로필 편집: 업로드 사진(data URL)
  let selectedCatId = null;   // 대시보드에서 보고 있는 고양이
  let filterCat = 'all';
  let filterGroup = 'all';
  let filterType = 'all';
  let filterDate = '';   // 기록 날짜 필터 (ISO, ''=전체)
  let searchQuery = '';   // 헤더 검색어

  /* ---------- 유틸 ---------- */
  const $  = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  const todayISO = () => new Date().toISOString().slice(0, 10);
  const escapeHtml = (str = '') => str.replace(/[&<>"]/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]
  ));

  function ageFromBirth(birth) {
    if (!birth) return null;
    const b = new Date(birth), n = new Date();
    let months = (n.getFullYear() - b.getFullYear()) * 12 + (n.getMonth() - b.getMonth());
    if (n.getDate() < b.getDate()) months--;
    if (months < 0) return null;
    const y = Math.floor(months / 12), m = months % 12;
    if (y === 0) return `${m}개월`;
    return m === 0 ? `${y}살` : `${y}살 ${m}개월`;
  }

  /* 업로드 사진을 480px JPEG data URL로 축소 (localStorage 용량 보호) */
  function readPhoto(file, cb) {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const max = 480;
        let w = img.width, h = img.height;
        if (w > h && w > max) { h = Math.round(h * max / w); w = max; }
        else if (h >= w && h > max) { w = Math.round(w * max / h); h = max; }
        try {
          const c = document.createElement('canvas');
          c.width = w; c.height = h;
          c.getContext('2d').drawImage(img, 0, 0, w, h);
          cb(c.toDataURL('image/jpeg', 0.82));
        } catch (err) { cb(reader.result); }
      };
      img.onerror = () => cb(reader.result);
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  /* 기록의 사진 배열 (구버전 photo 호환) */
  const recPhotosOf = r => (r.photos && r.photos.length) ? r.photos : (r.photo ? [r.photo] : []);

  /* 타임스탬프(ms) → 상대 시간 */
  function tsAgo(ts) {
    const diffMin = Math.floor((Date.now() - ts) / 60000);
    if (isNaN(diffMin) || diffMin < 1) return '방금';
    if (diffMin < 60) return `${diffMin}분 전`;
    const h = Math.floor(diffMin / 60);
    if (h < 24) return `${h}시간 전`;
    const d = Math.floor(h / 24);
    return d === 1 ? '어제' : `${d}일 전`;
  }

  /* 상대 시간: "방금 / N분 전 / N시간 전 / 어제 / N일 전" */
  function timeAgo(date, time) {
    const then = new Date(date + 'T' + (time || '00:00'));
    const diffMin = Math.floor((Date.now() - then.getTime()) / 60000);
    if (isNaN(diffMin)) return '';
    if (diffMin < 1) return '방금';
    if (diffMin < 60) return `${diffMin}분 전`;
    const diffH = Math.floor(diffMin / 60);
    if (diffH < 24) return `${diffH}시간 전`;
    const diffD = Math.floor(diffH / 24);
    if (diffD === 1) return '어제';
    return `${diffD}일 전`;
  }

  function fmtDayLabel(iso) {
    const d = new Date(iso + 'T00:00');
    const t = new Date(todayISO() + 'T00:00');
    const diff = Math.round((t - d) / 86400000);
    if (diff === 0) return '오늘';
    if (diff === 1) return '어제';
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return `${d.getMonth() + 1}월 ${d.getDate()}일 (${days[d.getDay()]})`;
  }

  /* ---------- 저장 / 로드 ---------- */
  function save() {
    try {
      localStorage.setItem(LS_CATS, JSON.stringify(cats));
      localStorage.setItem(LS_RECS, JSON.stringify(records));
    } catch (e) { /* 저장 불가 환경에서도 동작 유지 */ }
  }

  function load() {
    try {
      const c = JSON.parse(localStorage.getItem(LS_CATS) || 'null');
      const r = JSON.parse(localStorage.getItem(LS_RECS) || 'null');
      if (c && r && localStorage.getItem('purrcare.seedv') === '4') {
        cats = c; records = r;
        // 이전 버전(이모지) 데이터 보정: color 없으면 팔레트에서 부여
        cats.forEach((cat, i) => { if (!cat.color) cat.color = CAT_COLORS[i % CAT_COLORS.length]; });
        return;
      }
    } catch (e) { /* fall through to dummy */ }
    seedDummy();
  }

  function saveMe() { try { localStorage.setItem(LS_ME, JSON.stringify(me)); } catch (e) { /* noop */ } }
  function loadMe() {
    try { const m = JSON.parse(localStorage.getItem(LS_ME) || 'null'); if (m && m.name) me = Object.assign(me, m); } catch (e) { /* noop */ }
  }

  /* ---------- 설정 ---------- */
  let settings = { notiSchedule: true, notiActivity: true, notiCommunity: true, theme: 'charcoal' };
  function saveSettings() { try { localStorage.setItem('purrcare.settings', JSON.stringify(settings)); } catch (e) { /* noop */ } }
  function loadSettings() { try { const s = JSON.parse(localStorage.getItem('purrcare.settings') || 'null'); if (s) settings = Object.assign(settings, s); } catch (e) { /* noop */ } }

  /* ---------- 테마 ---------- */
  const THEMES = [
    { key: 'charcoal', name: '차콜', color: '#2A2A2A' },
    { key: 'sage', name: '세이지', color: '#5F7D66' },
    { key: 'latte', name: '라떼', color: '#7C6650' },
    { key: 'ocean', name: '오션', color: '#4E7290' },
    { key: 'blush', name: '블러시', color: '#A26775' },
    { key: 'lavender', name: '라벤더', color: '#77689B' },
  ];
  function applyTheme(key) {
    if (!key || key === 'charcoal') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', key);
  }

  /* 예시 사진 (오프라인 인라인 SVG 플레이스홀더) */
  const PAW_SVG = "<ellipse cx='6.5' cy='10' rx='1.7' ry='2.2'/><ellipse cx='10.3' cy='7.6' rx='1.7' ry='2.3'/><ellipse cx='13.7' cy='7.6' rx='1.7' ry='2.3'/><ellipse cx='17.5' cy='10' rx='1.7' ry='2.2'/><path d='M12 11.5c-2.6 0-4.8 2-4.8 4.3 0 1.7 1.4 2.7 3.1 2.7.9 0 1.2-.3 1.7-.3s.8.3 1.7.3c1.7 0 3.1-1 3.1-2.7 0-2.3-2.2-4.3-4.8-4.3z'/>";
  function samplePhoto(bg) {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='${bg}'/><g transform='translate(140 78) scale(5)' fill='rgba(255,255,255,0.88)'>${PAW_SVG}</g></svg>`;
    return 'data:image/svg+xml,' + encodeURIComponent(svg).replace(/'/g, '%27');
  }

  /* ---------- 더미 데이터 ---------- */
  function seedDummy() {
    const c1 = uid(), c2 = uid(), c3 = uid();
    cats = [
      { id: c1, name: '나비', color: CAT_COLORS[0], breed: '코리안숏헤어', gender: '여아', neutered: 'yes', birth: '2021-04-12', weight: 4.2, note: '닭고기 알레르기 있음', members: [{ name: '엄마', email: 'mom@example.com' }, { name: '아빠', email: 'dad@example.com' }] },
      { id: c2, name: '치즈', color: CAT_COLORS[1], breed: '먼치킨',       gender: '남아', neutered: 'yes', birth: '2022-09-03', weight: 5.1, note: '활동량 매우 많음', members: [{ name: '누나', email: 'sister@example.com' }] },
      { id: c3, name: '깜냥', color: CAT_COLORS[4], breed: '봄베이',       gender: '남아', neutered: 'no',  birth: '2019-11-20', weight: 4.8, note: '정기 신장 검진 중', members: [] },
    ];
    const t = todayISO();
    const y = (() => { const d = new Date(); d.setDate(d.getDate() - 1); return d.toISOString().slice(0, 10); })();
    const d2 = (() => { const d = new Date(); d.setDate(d.getDate() - 2); return d.toISOString().slice(0, 10); })();
    const now = Date.now(), hr = 3600000;

    records = [
      { id: uid(), catId: c1, type: 'meal', date: t, time: '08:10', amount: '습식 1봉 (85g)', memo: '아주 잘 먹었다. 그릇까지 싹 비움!', photos: [samplePhoto('#C7C7C7')], comments: [
        { id: uid(), author: '엄마', text: '오구 잘 먹었네~ 기특해', ts: now - 5 * hr },
        { id: uid(), author: '우리집 집사', text: '응 오늘 컨디션 좋아 보여', ts: now - 4 * hr },
      ] },
      { id: uid(), catId: c2, type: 'play', date: t, time: '09:00', amount: '낚싯대 20분', memo: '에너지 폭발, 우다다 대박이었음', photos: [samplePhoto('#B0B0B0')], comments: [
        { id: uid(), author: '누나', text: '영상 찍어둘걸 ㅋㅋ 너무 귀엽다', ts: now - 3 * hr },
      ] },
      { id: uid(), catId: c1, type: 'litter', date: t, time: '10:25', amount: '대변 정상', memo: '' },
      { id: uid(), catId: c3, type: 'medicine', date: t, time: '12:00', amount: '신장 보조제 1정', memo: '간식에 섞어줌', comments: [
        { id: uid(), author: '우리집 집사', text: '이번엔 잘 먹었다', ts: now - 2 * hr },
      ] },
      { id: uid(), catId: c2, type: 'meal', date: t, time: '13:30', amount: '건사료 40g', memo: '' },
      { id: uid(), catId: c3, type: 'sleep', date: t, time: '14:00', amount: '3시간 낮잠', memo: '창가에서 햇살 맞으며', photos: [samplePhoto('#BDBDBD')] },
      { id: uid(), catId: c1, type: 'play', date: y, time: '19:40', amount: '레이저 10분', memo: '', photos: [samplePhoto('#D2D2D2'), samplePhoto('#A8A8A8')] },
      { id: uid(), catId: c2, type: 'litter', date: y, time: '21:15', amount: '소변 3회', memo: '정상' },
      { id: uid(), catId: c3, type: 'meal', date: y, time: '07:50', amount: '처방식 50g', memo: '' },
      { id: uid(), catId: c1, type: 'medicine', date: d2, time: '11:00', amount: '구충제 1정', memo: '월 1회 정기', comments: [
        { id: uid(), author: '아빠', text: '다음 접종 일정도 잡아두자', ts: now - 40 * hr },
      ] },
      { id: uid(), catId: c2, type: 'sleep', date: d2, time: '15:30', amount: '5시간 숙면', memo: '' },
    ];
    try { localStorage.setItem('purrcare.seedv', '4'); } catch (e) { /* noop */ }
    save();
  }

  /* ============================================================
     렌더링
     ============================================================ */
  function renderAll() {
    renderDashboard();
    renderCats();
    renderFilters();
    renderRecords();
    renderRecCatOptions();
    renderUserPill();
    renderMyPage();
    updateBellDot();
  }

  /* ----- 헤더 알림: 안읽음 점 + 전체 화면 알림 탭 ----- */
  let notifCleared = false;
  function notifCount() {
    if (notifCleared) return 0;
    const t = todayISO();
    let n = 0;
    if (settings.notiActivity) n += records.filter(r => r.date === t).length;
    if (settings.notiSchedule) n += SCHEDULE.filter(s => s.date >= t && !s.done).length;
    return n;
  }
  function updateBellDot() {
    const dot = $('#bellDot');
    if (!dot) return;
    dot.classList.toggle('is-on', notifCount() > 0);
  }

  function openNotif() { renderNotif(); switchView('notif'); }

  function buildNotifSections() {
    const t = todayISO();
    // 예정된 일정 (오늘 포함 미래, 완료 제외) — 가까운 순
    const sched = SCHEDULE.filter(s => s.date >= t && !s.done)
      .sort((a, b) => a.date.localeCompare(b.date) || (a.time || '').localeCompare(b.time || ''))
      .slice(0, 6)
      .map(s => {
        const c = SCHED_CATS[s.cat] || {};
        return { icon: ICON.calendar, title: escapeHtml(s.title),
          sub: [c.label, fmtDayLabel(s.date) + (s.time ? ' ' + s.time : '')].filter(Boolean).join(' · '), go: 'schedule' };
      });
    // 오늘의 활동 (오늘 기록)
    const recs = records.filter(r => r.date === t)
      .sort((a, b) => (b.time || '').localeCompare(a.time || ''))
      .map(r => {
        const c = cats.find(x => x.id === r.catId);
        const ty = TYPES[r.type] || {};
        return { icon: ICON[r.type] || ICON.records, title: `${ty.label || '기록'} · ${c ? escapeHtml(c.name) : ''}`,
          sub: escapeHtml(r.amount || r.subtype || ty.label || ''), meta: r.time, go: 'records' };
      });
    // 커뮤니티 소식 (데모)
    const comm = [{ icon: ICON.chat, title: '커뮤니티 소식', sub: '회원님의 관심 글에 새 댓글이 달렸어요 (데모)', go: 'community' }];
    return [
      { label: '예정된 일정', items: settings.notiSchedule ? sched : [] },
      { label: '오늘의 활동', items: settings.notiActivity ? recs : [] },
      { label: '커뮤니티 소식', items: settings.notiCommunity ? comm : [] },
    ];
  }

  function renderNotif() {
    const box = $('#notifBody');
    if (!box) return;
    const sections = buildNotifSections();
    const total = sections.reduce((n, s) => n + s.items.length, 0);
    const body = sections.filter(s => s.items.length).map(s => `
      <div class="notif-sec">
        <div class="notif-sec__label">${s.label}</div>
        ${s.items.map(it => `
          <button type="button" class="notif-item" data-notif-go="${it.go}">
            <span class="notif-item__ic">${it.icon}</span>
            <span class="notif-item__body">
              <span class="notif-item__t">${it.title}</span>
              <span class="notif-item__s">${it.sub}</span>
            </span>
            ${it.meta ? `<span class="notif-item__meta">${it.meta}</span>` : ''}
          </button>`).join('')}
      </div>`).join('');
    box.innerHTML = `
      <div class="view__head">
        <div>
          <h1 class="view__title">알림</h1>
          <p class="view__sub">일정 · 오늘의 활동 · 커뮤니티 소식</p>
        </div>
        ${(total && !notifCleared) ? `<div class="view__head-acts"><button type="button" class="btn btn--ghost" data-notif-clear>모두 읽음</button></div>` : ''}
      </div>
      ${total ? body : `<div class="cd-empty">새로운 알림이 없어요.</div>`}`;
  }

  /* ----- 선택된 고양이 헬퍼 ----- */
  function getSelectedCat() {
    if (!cats.length) return null;
    let c = cats.find(x => x.id === selectedCatId);
    if (!c) { c = cats[0]; selectedCatId = c.id; }
    return c;
  }

  /* ----- 대시보드 전체 ----- */
  function renderDashboard() {
    renderHero();
    renderToday();
    renderRecentRecords();
    renderCalendar();
    renderSideCats();
    renderBriefBanner();
  }

  /* ----- 홈 사이드: 오늘 브리핑 배너 ----- */
  function renderBriefBanner() {
    const box = $('#briefBanner');
    if (!box) return;
    const t = todayISO();
    const todayCnt = records.filter(r => r.date === t).length;
    const weekAgo = (() => { const d = new Date(); d.setDate(d.getDate() - 6); return d.toISOString().slice(0, 10); })();
    const weekAbn = records.filter(r => r.date >= weekAgo && r.abnormal).length;
    const teaser = weekAbn ? `최근 7일 이상 증상 ${weekAbn}건` : `오늘 ${todayCnt}건 기록됨`;
    box.innerHTML = `
      <button type="button" class="brief-banner" data-briefing>
        <span class="brief-banner__badge">${ICON.paw}</span>
        <span class="brief-banner__body">
          <span class="brief-banner__title">오늘 브리핑</span>
          <span class="brief-banner__text">${escapeHtml(teaser)} · 최근 7일 요약 보기</span>
        </span>
        <span class="brief-banner__go">${ICON.arrow}</span>
      </button>`;
  }

  /* ----- 인사 줄 ("오늘 [이름]의 하루는") ----- */
  function renderGreet() {
    const el = $('#greetLine');
    if (!el) return;
    const cat = getSelectedCat();
    el.innerHTML = cat ? `오늘 <b>${escapeHtml(cat.name)}</b>의 활동` : '오늘의 활동';
  }

  /* ----- 오늘 상태 카드 (초록 · 체크리스트) ----- */
  function renderStatusCard() {
    const el = $('#statusCard');
    if (!el) return;
    const cat = getSelectedCat();
    const t = todayISO();
    const recs = cat ? records.filter(r => r.catId === cat.id && r.date === t) : [];
    const has = k => recs.some(r => r.type === k);
    const items = [
      { ok: has('meal'), t: has('meal') ? '식사량 정상' : '식사 기록 없음' },
      { ok: has('water'), t: has('water') ? '음수량 정상' : '음수 기록 없음' },
      { ok: has('play') || has('sleep'), t: (has('play') || has('sleep')) ? '컨디션 좋아요' : '활동 기록 없음' },
    ];
    el.innerHTML = `
      ${cat ? catAvatar(cat, 'status-card__ava') : '<span class="status-card__ava"></span>'}
      <div class="status-card__body">
        <div class="status-card__title">오늘 ${cat ? escapeHtml(cat.name) : '고양이'}는</div>
        <div class="status-card__list">
          ${items.map(i => `<div class="status-card__item">${i.ok ? ICON.check : ICON.dot} ${i.t}</div>`).join('')}
        </div>
      </div>
      <span class="status-card__arrow">${ICON.chevron}</span>`;
  }

  /* ----- 히어로 (선택 고양이 + 전환) ----- */
  function renderHero() {
    const hero = $('#dashHero');
    if (!cats.length) {
      hero.innerHTML = `
        <div class="hbanner__text">
          <p class="hbanner__hello">안녕하세요!</p>
          <h2 class="hbanner__title">고양이를 등록해볼까요?</h2>
          <button class="btn hbanner__cta" id="heroAddCat"><span class="btn-ic">${ICON.plus}</span> 고양이 등록</button>
        </div>`;
      return;
    }
    hero.innerHTML = `
      <div class="hbanner__text">
        <p class="hbanner__hello">안녕하세요, 집사님!</p>
        <h2 class="hbanner__title">오늘도 우리 아이들과 함께</h2>
      </div>
      <button class="btn hbanner__cta" data-open-record><span class="btn-ic">${ICON.plus}</span> 기록 작성</button>`;
  }

  /* ----- 오늘: 날짜 + 지표 스트립 + 상태 한 줄 ----- */
  function renderToday() {
    const t = todayISO();
    const recs = records.filter(r => r.date === t);
    const dateEl = $('#todayDate2');
    if (dateEl) {
      const now = new Date(), d = ['일', '월', '화', '수', '목', '금', '토'];
      dateEl.textContent = `${now.getMonth() + 1}월 ${now.getDate()}일 ${d[now.getDay()]}`;
    }
    const cnt = k => recs.filter(r => r.type === k).length;
    const GOALS = { meal: 4, litter: 3, play: 2, sleep: 2 };
    const cells = ['meal', 'litter', 'play', 'sleep'];
    const R = 22, C = 2 * Math.PI * R;
    $('#statStrip').innerHTML = cells.map(k => {
      const ty = TYPES[k], c = cnt(k), goal = (GOALS[k] || 3) * Math.max(cats.length, 1);
      const pct = Math.min(c / goal, 1), off = (C * (1 - pct)).toFixed(1);
      return `<div class="rstat">
        <div class="rstat__info">
          <div class="rstat__num" style="color:${ty.color}">${c}</div>
          <div class="rstat__label">${ty.label}</div>
          <div class="rstat__sub">오늘</div>
        </div>
        <div class="rstat__ring">
          <svg width="52" height="52" viewBox="0 0 52 52" aria-hidden="true">
            <circle cx="26" cy="26" r="${R}" fill="none" stroke="var(--line)" stroke-width="4"/>
            <circle cx="26" cy="26" r="${R}" fill="none" stroke="${ty.color}" stroke-width="4" stroke-linecap="round" stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${off}" transform="rotate(-90 26 26)"/>
          </svg>
          <span class="rstat__pct">${Math.round(pct * 100)}%</span>
        </div>
      </div>`;
    }).join('');
  }

  /* ----- AI 브리핑 (실제 기록 기반 요약 + 행동 연결) ----- */
  function briefingText(catId, days) {
    days = days || 7;
    const since = (() => { const d = new Date(); d.setDate(d.getDate() - (days - 1)); return d.toISOString().slice(0, 10); })();
    const scope = records.filter(r => r.date >= since && (!catId || catId === 'all' || r.catId === catId));
    const cnt = k => scope.filter(r => r.type === k).length;
    const abn = scope.filter(r => r.abnormal).length;
    const meds = scope.filter(r => r.type === 'medicine').sort((a, b) => b.date.localeCompare(a.date));
    const who = (catId && catId !== 'all') ? ((cats.find(c => c.id === catId) || {}).name || '') : '아이들';
    const lines = [];
    lines.push(`최근 ${days}일간 ${who ? who + '의' : ''} 기록을 정리했어요. 총 ${scope.length}건이에요.`);
    lines.push(`식사 ${cnt('meal')}회 · 물 ${cnt('water')}회 · 배변 ${cnt('litter')}회 · 놀이 ${cnt('play')}회 · 수면 ${cnt('sleep')}회`);
    if (meds.length) lines.push(`약 복용 ${meds.length}회 (최근 ${fmtDayLabel(meds[0].date)})`);
    lines.push(abn ? `이상 증상이 ${abn}건 기록됐어요. 증상이 지속되면 병원 상담을 권장해요.` : '특별한 이상 증상 기록은 없었어요.');
    if (scope.length === 0) lines.push('아직 이 기간 기록이 없어요. 오늘의 활동을 남겨보세요.');
    else if (cnt('water') === 0) lines.push('물 섭취 기록이 적어요. 신장 건강을 위해 수분 섭취를 확인해 주세요.');
    return { lines };
  }
  function openBriefing(catId, days) {
    const b = briefingText(catId, days);
    const box = $('#briefingBody');
    const [head, stats, ...points] = b.lines;
    if (box) box.innerHTML = `
      ${head ? `<p class="brief-head">${escapeHtml(head)}</p>` : ''}
      ${stats ? `<p class="brief-stats">${escapeHtml(stats)}</p>` : ''}
      ${points.length ? `<div class="brief-points">${points.map(l => `<p class="brief-point">${escapeHtml(l)}</p>`).join('')}</div>` : ''}
      <div class="brief-actions">
        <button type="button" class="ares-act" data-briefing-hospital>주변 병원 찾기</button>
        <button type="button" class="ares-act" data-briefing-ai>AI에게 물어보기</button>
        <button type="button" class="ares-act" data-briefing-record>기록하기</button>
      </div>
      <p class="hd-note">* 실제 기록 기반 요약이며, AI 종합 분석은 참고용이에요.</p>`;
    openModal('briefingModal');
  }

  /* ----- 미니 캘린더 ----- */
  let calMonth = null;   // 보고 있는 달의 1일 Date
  function renderCalendar() {
    const box = $('#calendar');
    if (!box) return;
    if (!calMonth) { const n = new Date(); calMonth = new Date(n.getFullYear(), n.getMonth(), 1); }
    const y = calMonth.getFullYear(), m = calMonth.getMonth();
    const firstDow = new Date(y, m, 1).getDay();
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const now = new Date();
    const isThisMonth = now.getFullYear() === y && now.getMonth() === m;
    const recDays = new Set(records
      .map(r => new Date(r.date + 'T00:00'))
      .filter(d => d.getFullYear() === y && d.getMonth() === m)
      .map(d => d.getDate()));
    const dow = ['일', '월', '화', '수', '목', '금', '토'];
    let cells = '';
    for (let i = 0; i < firstDow; i++) cells += `<div class="cal__cell cal__cell--empty"></div>`;
    for (let d = 1; d <= daysInMonth; d++) {
      const cls = ['cal__cell'];
      if (isThisMonth && d === now.getDate()) cls.push('is-today');
      if (recDays.has(d)) cls.push('has-rec');
      cells += `<div class="${cls.join(' ')}">${d}</div>`;
    }
    box.innerHTML = `
      <div class="cal__head">
        <button class="cal__nav" data-cal="-1" aria-label="이전 달">‹</button>
        <div class="cal__title">${y}년 ${m + 1}월</div>
        <button class="cal__nav" data-cal="1" aria-label="다음 달">›</button>
      </div>
      <div class="cal__grid">
        ${dow.map(x => `<div class="cal__dow">${x}</div>`).join('')}
        ${cells}
      </div>`;
  }

  /* ============================================================
     커스텀 날짜 선택 팝업 (네이티브 date picker 대체)
     ============================================================ */
  let dpMonth = null;       // 보는 달 (해당 월 1일 Date)
  let dpValue = '';         // 선택된 ISO (YYYY-MM-DD)
  let dpOnPick = null;      // 선택 콜백
  let dpAllowClear = true;  // '지우기' 노출 여부
  let dpAnchor = null;      // 위치 기준 요소

  function openDatePicker(anchorEl, currentISO, onPick, opts) {
    opts = opts || {};
    dpValue = currentISO || '';
    dpOnPick = onPick;
    dpAllowClear = opts.allowClear !== false;
    dpAnchor = anchorEl;
    const base = dpValue ? new Date(dpValue + 'T00:00') : new Date();
    dpMonth = new Date(base.getFullYear(), base.getMonth(), 1);
    renderDatePicker();
    const box = $('#datePicker');
    box.hidden = false;
    positionDatePicker(anchorEl);
    // 열려 있는 동안 외부 클릭 / Esc / 리사이즈로 닫기
    setTimeout(() => document.addEventListener('mousedown', dpOutside, true), 0);
    document.addEventListener('keydown', dpEsc, true);
    window.addEventListener('resize', closeDatePicker);
  }

  function closeDatePicker() {
    const box = $('#datePicker');
    if (box) box.hidden = true;
    dpOnPick = null; dpAnchor = null;
    document.removeEventListener('mousedown', dpOutside, true);
    document.removeEventListener('keydown', dpEsc, true);
    window.removeEventListener('resize', closeDatePicker);
  }

  function dpOutside(e) {
    const t = e.target;
    if (t && t.closest && t.closest('#datePicker')) return;
    if (dpAnchor && dpAnchor.contains(t)) return;
    closeDatePicker();
  }
  function dpEsc(e) { if (e.key === 'Escape') closeDatePicker(); }

  function renderDatePicker() {
    const box = $('#datePicker');
    if (!box || !dpMonth) return;
    const y = dpMonth.getFullYear(), m = dpMonth.getMonth();
    const firstDow = new Date(y, m, 1).getDay();
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const now = new Date();
    const todayIso = todayISO();
    const dow = ['일', '월', '화', '수', '목', '금', '토'];
    let cells = '';
    for (let i = 0; i < firstDow; i++) cells += `<span class="dpick__cell dpick__cell--empty"></span>`;
    for (let d = 1; d <= daysInMonth; d++) {
      const iso = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const cls = ['dpick__cell'];
      if (iso === todayIso) cls.push('is-today');
      if (iso === dpValue) cls.push('is-selected');
      cells += `<button type="button" class="${cls.join(' ')}" data-dp-cell="${iso}">${d}</button>`;
    }
    box.innerHTML = `
      <div class="dpick__head">
        <button type="button" class="dpick__nav" data-dp-nav="-1" aria-label="이전 달">‹</button>
        <div class="dpick__title">${y}년 ${m + 1}월</div>
        <button type="button" class="dpick__nav" data-dp-nav="1" aria-label="다음 달">›</button>
      </div>
      <div class="dpick__grid">
        ${dow.map((x, i) => `<span class="dpick__dow${i === 0 ? ' is-sun' : ''}${i === 6 ? ' is-sat' : ''}">${x}</span>`).join('')}
        ${cells}
      </div>
      <div class="dpick__foot">
        ${dpAllowClear ? `<button type="button" class="dpick__link" data-dp-clear>지우기</button>` : `<span></span>`}
        <button type="button" class="dpick__link dpick__link--accent" data-dp-today>오늘</button>
      </div>`;
  }

  function positionPopup(box, anchorEl) {
    if (!box || !anchorEl) return;
    const a = anchorEl.getBoundingClientRect();
    const w = box.offsetWidth, h = box.offsetHeight;
    const gap = 6;
    let left = a.right - w;               // 앵커 오른쪽에 정렬
    if (left < 8) left = a.left;          // 넘치면 왼쪽 정렬
    left = Math.max(8, Math.min(left, window.innerWidth - w - 8));
    let top = a.bottom + gap;             // 기본은 아래
    if (top + h > window.innerHeight - 8) top = a.top - h - gap;  // 아래 넘치면 위로 flip
    if (top < 8) top = 8;
    box.style.left = left + 'px';
    box.style.top = top + 'px';
  }
  function positionDatePicker(anchorEl) { positionPopup($('#datePicker'), anchorEl); }

  /* ----- 커스텀 시간 선택 팝업 (날짜 선택기와 동일 디자인) ----- */
  let tpValue = '', tpOnPick = null, tpAnchor = null;
  const pad2 = n => String(n).padStart(2, '0');

  function openTimePicker(anchorEl, current, onPick) {
    tpValue = current || '';
    if (tpValue) { let [h, m] = tpValue.split(':').map(Number); m = Math.round(m / 5) * 5; if (m >= 60) { m = 0; h = (h + 1) % 24; } tpValue = pad2(h) + ':' + pad2(m); }
    tpOnPick = onPick; tpAnchor = anchorEl;
    renderTimePicker();
    const box = $('#timePicker'); box.hidden = false;
    positionPopup(box, anchorEl);
    // 선택값을 각 열 가운데로 스크롤
    ['tpHours', 'tpMins'].forEach(id => { const col = $('#' + id); const sel = col && col.querySelector('.is-sel'); if (sel) col.scrollTop = sel.offsetTop - col.clientHeight / 2 + sel.offsetHeight / 2; });
    setTimeout(() => document.addEventListener('mousedown', tpOutside, true), 0);
    document.addEventListener('keydown', tpEsc, true);
    window.addEventListener('resize', closeTimePicker);
  }
  function closeTimePicker() {
    const box = $('#timePicker'); if (box) box.hidden = true;
    tpOnPick = null; tpAnchor = null;
    document.removeEventListener('mousedown', tpOutside, true);
    document.removeEventListener('keydown', tpEsc, true);
    window.removeEventListener('resize', closeTimePicker);
  }
  function tpOutside(e) { const t = e.target; if (t && t.closest && t.closest('#timePicker')) return; if (tpAnchor && tpAnchor.contains(t)) return; closeTimePicker(); }
  function tpEsc(e) { if (e.key === 'Escape') closeTimePicker(); }

  function renderTimePicker() {
    const box = $('#timePicker'); if (!box) return;
    const [ch, cm] = (tpValue || '').split(':');
    let hrs = '', mins = '';
    for (let h = 0; h < 24; h++) { const v = pad2(h); hrs += `<button type="button" class="tpick__opt ${v === ch ? 'is-sel' : ''}" data-tp-h="${v}">${v}</button>`; }
    for (let m = 0; m < 60; m += 5) { const v = pad2(m); mins += `<button type="button" class="tpick__opt ${v === cm ? 'is-sel' : ''}" data-tp-m="${v}">${v}</button>`; }
    box.innerHTML = `
      <div class="tpick__head"><span class="tpick__title">시간 선택</span><span class="tpick__val">${tpValue || '--:--'}</span></div>
      <div class="tpick__cols">
        <div><div class="tpick__collabel">시</div><div class="tpick__col" id="tpHours">${hrs}</div></div>
        <div><div class="tpick__collabel">분</div><div class="tpick__col" id="tpMins">${mins}</div></div>
      </div>
      <div class="tpick__foot">
        <button type="button" class="tpick__link" data-tp-clear>지우기</button>
        <button type="button" class="tpick__link" data-tp-now>지금</button>
        <button type="button" class="tpick__link tpick__link--accent" data-tp-done>완료</button>
      </div>`;
  }
  function tpPaint() {
    const [ch, cm] = (tpValue || '').split(':');
    const v = $('#timePicker .tpick__val'); if (v) v.textContent = tpValue || '--:--';
    $$('#timePicker [data-tp-h]').forEach(b => b.classList.toggle('is-sel', b.dataset.tpH === ch));
    $$('#timePicker [data-tp-m]').forEach(b => b.classList.toggle('is-sel', b.dataset.tpM === cm));
  }

  /* ----- 사이드 고양이 목록 ----- */
  function renderSideCats() {
    const box = $('#sideCats');
    if (!box) return;
    if (!cats.length) { box.innerHTML = `<div class="mini-empty">등록된 고양이가 없어요</div>`; return; }
    box.innerHTML = cats.map(c => {
      const rc = records.filter(r => r.catId === c.id).length;
      return `<button class="mini-cat" data-cat-detail="${c.id}">
        ${catAvatar(c, 'mini-cat__ava')}
        <div style="flex:1;min-width:0;text-align:left">
          <div class="mini-cat__name">${escapeHtml(c.name)}</div>
          <div class="mini-cat__meta">${escapeHtml(c.breed || '품종 미상')} · 기록 ${rc}</div>
        </div>
      </button>`;
    }).join('');
  }

  /* ----- 최근 기록 (전체 고양이, 최신순) ----- */
  function renderRecentRecords() {
    const box = $('#recentList');
    if (!box) return;
    const list = records.slice().sort((a, b) => (b.date + b.time).localeCompare(a.date + a.time));
    if (!list.length) {
      box.innerHTML = `<div class="reclist__empty">${ICON.paw} 아직 기록이 없어요</div>`;
      return;
    }
    box.innerHTML = list.slice(0, 4).map(r => {
      const ty = TYPES[r.type] || { label: '기록', color: 'var(--ink-faint)' };
      const c = cats.find(x => x.id === r.catId);
      return `<div class="rec-row" data-rec-detail="${r.id}">
        <span class="rec-row__dot" style="background:${ty.color}"></span>
        <span class="rec-row__type">${c ? escapeHtml(c.name) : '?'}</span>
        <span class="rec-row__text">${escapeHtml(r.amount || r.memo || ty.label)}</span>
        <span class="rec-row__time">${r.timeUnknown ? fmtDayLabel(r.date) : timeAgo(r.date, r.time)}</span>
      </div>`;
    }).join('');
  }

  /* ----- 몸무게 미니 차트 ----- */
  function renderWeightMini() {
    const box = $('#weightMini');
    const cat = getSelectedCat();
    if (!cat) { box.innerHTML = ''; $('#weightHint').textContent = ''; return; }
    $('#weightHint').textContent = '최근 6주';
    const base = cat.weight || 4.0;
    let seed = 0;
    for (const ch of cat.id) seed = (seed * 31 + ch.charCodeAt(0)) % 997;
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const wob = (Math.sin(seed + i * 1.7)) * 0.12;
      pts.push(+(base - (5 - i) * 0.05 + wob).toFixed(2));
    }
    pts[5] = base;
    const min = Math.min(...pts) - 0.15, max = Math.max(...pts) + 0.15;
    const W = 320, H = 120, pad = 8;
    const x = i => pad + i * ((W - pad * 2) / (pts.length - 1));
    const y = v => H - pad - ((v - min) / (max - min)) * (H - pad * 2);
    const line = pts.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
    const delta = +(pts[5] - pts[0]).toFixed(2);
    const deltaTxt = delta === 0 ? '변화 없음'
      : delta > 0 ? `${ICON.up}${delta}kg` : `${ICON.down}${Math.abs(delta)}kg`;
    const deltaColor = delta > 0 ? 'var(--c-meal)' : delta < 0 ? 'var(--c-play)' : 'var(--ink-faint)';
    box.innerHTML = `
      <svg class="weight-chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true">
        <line x1="0" y1="${H - 0.5}" x2="${W}" y2="${H - 0.5}" stroke="var(--line)" stroke-width="1"/>
        <path d="${line}" fill="none" stroke="var(--sage)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="weight-now">
        <span class="weight-now__val">${base}kg</span>
        <span class="weight-now__delta" style="color:${deltaColor}">${deltaTxt}</span>
      </div>`;
  }

  /* ----- 사이드 메타 (최근 약 / 이번 주) ----- */
  function renderSideMeta() {
    const box = $('#metaList');
    const cat = getSelectedCat();
    if (!cat) { box.innerHTML = ''; return; }
    const meds = records.filter(r => r.catId === cat.id && r.type === 'medicine')
      .sort((a, b) => (b.date + b.time).localeCompare(a.date + a.time));
    const lastMed = meds[0] ? fmtDayLabel(meds[0].date) : '없음';
    const weekAgo = (() => { const d = new Date(); d.setDate(d.getDate() - 6); return d.toISOString().slice(0, 10); })();
    const weekCnt = records.filter(r => r.catId === cat.id && r.date >= weekAgo).length;
    box.innerHTML = `
      <div class="meta-row">
        <span class="meta-row__ic" style="color:var(--c-medicine)">${ICON.medicine}</span>
        <span class="meta-row__label">최근 약 복용</span>
        <span class="meta-row__val">${lastMed}</span>
      </div>
      <div class="meta-row">
        <span class="meta-row__ic" style="color:var(--sage-deep)">${ICON.calendar}</span>
        <span class="meta-row__label">이번 주 기록</span>
        <span class="meta-row__val">${weekCnt}건</span>
      </div>`;
  }

  /* ----- 내 고양이 그리드 ----- */
  function renderCats() {
    const grid = $('#catGrid');
    const cards = cats.map(c => {
      const age = ageFromBirth(c.birth);
      const recCount = records.filter(r => r.catId === c.id).length;
      const tags = [];
      if (c.gender) tags.push(c.gender);
      if (c.neutered === 'yes') tags.push('중성화 완료');
      else if (c.neutered === 'no') tags.push('중성화 전');
      if (c.note) tags.push(c.note.length > 14 ? c.note.slice(0, 14) + '…' : c.note);
      return `<div class="cat-card" data-cat-detail="${c.id}">
        <div class="cat-card__top">
          <button class="cat-card__del" data-del-cat="${c.id}" title="삭제">${ICON.trash}</button>
          ${catAvatar(c, 'cat-card__ava')}
          <div>
            <div class="cat-card__name">${escapeHtml(c.name)}</div>
            <div class="cat-card__breed">${escapeHtml(c.breed || '품종 미상')}</div>
          </div>
        </div>
        <div class="cat-card__body">
          <div class="cat-meta-row">
            <div class="cat-meta"><div class="cat-meta__val">${age || '—'}</div><div class="cat-meta__label">나이</div></div>
            <div class="cat-meta"><div class="cat-meta__val">${c.weight ? c.weight + 'kg' : '—'}</div><div class="cat-meta__label">몸무게</div></div>
            <div class="cat-meta"><div class="cat-meta__val">${recCount}</div><div class="cat-meta__label">기록</div></div>
          </div>
          <div class="cat-tags">${tags.map(t => `<span class="cat-tag">${escapeHtml(t)}</span>`).join('')}</div>
          <button class="cat-card__btn" data-cat-detail="${c.id}">일기 보기 <span class="btn-ic">${ICON.arrow}</span></button>
        </div>
      </div>`;
    }).join('');

    const addCard = `<div class="cat-card cat-card--add" id="addCatCard">
      <div class="plus">${ICON.plus}</div>
      <div style="font-weight:700">고양이 등록</div>
    </div>`;

    grid.innerHTML = cards + addCard;
  }

  /* ----- 필터 칩 ----- */
  function renderFilters() {
    // 고양이: 선택 picker (현재 고양이 버튼 → 목록 드롭다운으로 필터)
    const catStrip = $('#catStrip');
    if (catStrip) {
      const sel = filterCat === 'all' ? null : cats.find(c => c.id === filterCat);
      const btnInner = sel
        ? `${catAvatar(sel, 'catpick__ava')}<span class="catpick__name">${escapeHtml(sel.name)}</span>`
        : `<span class="catpick__all">${ICON.paw}</span><span class="catpick__name">전체</span>`;
      const opt = (val, inner, active) =>
        `<button type="button" class="catpick__opt ${active ? 'is-active' : ''}" data-catpick-set="${val}">${inner}</button>`;
      const opts = [opt('all', `<span class="catpick__all">${ICON.paw}</span><span>전체</span>`, filterCat === 'all')]
        .concat(cats.map(c => opt(c.id, `${catAvatar(c, 'catpick__ava')}<span>${escapeHtml(c.name)}</span>`, filterCat === c.id)));
      catStrip.className = 'catpick';
      catStrip.innerHTML =
        `<button type="button" class="catpick__btn" data-catpick-toggle aria-haspopup="listbox">${btnInner}<span class="catpick__chev">${ICON.chevron}</span></button>` +
        `<div class="catpick__menu" role="listbox">${opts.join('')}</div>`;
    }
    // 날짜 필터 버튼 상태
    const dLabel = $('#dateBtnLabel'), dClear = $('#dateClear'), dBtn = $('#dateBtn');
    if (dLabel) {
      if (filterDate) {
        const d = new Date(filterDate + 'T00:00');
        dLabel.textContent = `${d.getMonth() + 1}월 ${d.getDate()}일`;
        if (dBtn) dBtn.classList.add('is-active');
        if (dClear) dClear.hidden = false;
      } else {
        dLabel.textContent = '';
        if (dBtn) dBtn.classList.remove('is-active');
        if (dClear) dClear.hidden = true;
      }
    }
    // 종류: 그룹 세그먼트 활성 표시
    $$('#groupFilter [data-fgroup]').forEach(b => b.classList.toggle('is-active', b.dataset.fgroup === filterGroup));
    // 종류: 선택한 그룹의 카테고리만 칩으로 (전체 그룹이면 비움)
    const typeBox = $('#typeFilter');
    if (filterGroup === 'all') { typeBox.innerHTML = ''; return; }
    const chips = [`<button class="chip ${filterType === 'all' ? 'is-active' : ''}" data-ftype="all">전체</button>`]
      .concat(REC_GROUPS[filterGroup].map(k => {
        const v = TYPES[k];
        return `<button class="chip chip--type ${filterType === k ? 'is-active' : ''}" data-ftype="${k}"><span class="chip-dot" style="background:${v.color}"></span>${v.label}</button>`;
      }));
    typeBox.innerHTML = chips.join('');
  }

  /* ----- 기록 리스트 ----- */
  function renderRecords() {
    const box = $('#recordList');
    let list = records.slice();
    if (filterCat !== 'all') list = list.filter(r => r.catId === filterCat);
    if (filterGroup !== 'all') list = list.filter(r => TYPES[r.type] && TYPES[r.type].group === filterGroup);
    if (filterType !== 'all') list = list.filter(r => r.type === filterType);
    if (filterDate) list = list.filter(r => r.date === filterDate);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(r => {
        const c = cats.find(x => x.id === r.catId);
        return [(c ? c.name : ''), r.amount, r.memo, TYPES[r.type].label]
          .join(' ').toLowerCase().includes(q);
      });
    }
    list.sort((a, b) => (b.date + b.time).localeCompare(a.date + a.time));

    if (!list.length) {
      box.innerHTML = `<div class="empty">
        <div class="empty__ico">${ICON.search}</div>
        <div class="empty__title">기록 없음</div>
        <div class="empty__sub">필터를 바꾸거나 기록을 추가하세요</div>
      </div>`;
      return;
    }

    let html = '', curDay = '';
    list.forEach(r => {
      if (r.date !== curDay) {
        curDay = r.date;
        html += `<div class="rec-day-label">${fmtDayLabel(r.date)}</div>`;
      }
      html += recordEntryHTML(r);
    });
    box.innerHTML = html;
  }

  /* 기록 한 건의 타임라인 항목 HTML (기록 탭·고양이 상세 공유) */
  function recordEntryHTML(r, opts) {
    opts = opts || {};
    const cat = cats.find(c => c.id === r.catId);
    const ty = TYPES[r.type] || { label: '기록', color: 'var(--ink-faint)' };
    const sub = r.subtype || r.amount;
    const photos = recPhotosOf(r);
    const timeStr = r.timeUnknown ? '시간 모름' : (r.time || '');
    const title = r.memo || sub || ty.label;
    const metaBits = [ty.label];
    if (r.memo && sub) metaBits.push(sub);
    if (opts.showCat !== false) metaBits.push(cat ? cat.name : '삭제된 고양이');
    const comments = r.comments || [];
    const lastC = comments[comments.length - 1];
    return `<div class="jrnl" data-rec-detail="${r.id}">
      <div class="jrnl__rail"><span class="jrnl__dot" style="background:${ty.color}"></span></div>
      <div class="jrnl__body">
        ${timeStr ? `<div class="jrnl__time">${timeStr}</div>` : ''}
        <div class="jrnl__title">${escapeHtml(title)}</div>
        ${r.abnormal ? `<div class="jrnl__abn">이상 증상 · ${escapeHtml(r.abnormal)}</div>` : ''}
        <div class="jrnl__meta">${escapeHtml(metaBits.filter(Boolean).join(' · '))}</div>
        ${lastC ? `<div class="jrnl__cmt"><span class="jrnl__cmt-ic">${ICON.chat}</span><b>${escapeHtml(lastC.author || '')}</b> ${escapeHtml(lastC.text)}${comments.length > 1 ? ` <span class="jrnl__cmt-more">외 ${comments.length - 1}개</span>` : ''}</div>` : ''}
        <button class="jrnl__del" data-del-rec="${r.id}" aria-label="삭제">${ICON.trash}</button>
      </div>
    </div>`;
  }

  /* ----- 고양이 상세 페이지 ----- */
  function openCat(catId) {
    closeAllModals();
    detailCatId = catId;
    catDetailDate = '';
    renderCatDetail();
    switchView('catdetail');
  }

  /* 가족 구성원 프로필 팝업 */
  function openMemberProfile(key) {
    let member = null;
    cats.forEach(c => (c.members || []).forEach(m => { if (!member && memberKey(m) === key) member = m; }));
    if (!member) return;
    const name = member.name || member.email;
    const sharedCats = cats.filter(c => (c.members || []).some(m => memberKey(m) === key));
    const comments = [];
    records.forEach(r => (r.comments || []).forEach(cm => {
      if (cm.author === member.name) { const cat = cats.find(x => x.id === r.catId); comments.push({ text: cm.text, ts: cm.ts, cat: cat ? cat.name : '' }); }
    }));
    comments.sort((a, b) => b.ts - a.ts);

    const catChips = sharedCats.map(c =>
      `<button type="button" class="mp-catchip" data-cat-detail="${c.id}">${catAvatar(c, 'mp-catchip__ava')}<span>${escapeHtml(c.name)}</span></button>`
    ).join('');
    const cmtList = comments.length
      ? comments.slice(0, 6).map(cm => `<div class="mp-cmt"><div class="mp-cmt__meta">${escapeHtml(cm.cat)} · ${tsAgo(cm.ts)}</div><div class="mp-cmt__text">${escapeHtml(cm.text)}</div></div>`).join('')
      : `<div class="cd-empty">아직 남긴 댓글이 없어요.</div>`;

    $('#memberModalBody').innerHTML = `
      <header class="mp-head">
        <div class="mp-ava" style="background:${memberColor(key)}">${memberInitial(member)}</div>
        <div class="mp-head__info">
          <div class="mp-head__name">${escapeHtml(name)}</div>
          <div class="mp-head__email">${escapeHtml(member.email || '이메일 미등록')}</div>
        </div>
      </header>
      <div class="mp-sec">
        <h4 class="mp-sec__title">함께하는 고양이 <span class="my-count">${sharedCats.length}</span></h4>
        <div class="mp-catchips">${catChips}</div>
      </div>
      <div class="mp-sec">
        <h4 class="mp-sec__title">남긴 댓글 <span class="my-count">${comments.length}</span></h4>
        <div class="mp-cmts">${cmtList}</div>
      </div>`;
    openModal('memberModal');
  }
  function renderCatDetail() {
    const box = $('#catDetailBody');
    if (!box) return;
    const cat = cats.find(c => c.id === detailCatId) || cats[0];
    if (!cat) { box.innerHTML = `<div class="empty"><div class="empty__title">고양이가 없어요</div></div>`; return; }
    detailCatId = cat.id;
    const age = ageFromBirth(cat.birth);
    const meta = [cat.breed, age, cat.gender, cat.weight ? cat.weight + 'kg' : null].filter(Boolean).join(' · ');
    const members = cat.members || [];

    // 일기 (날짜 필터 적용)
    const all = records.filter(r => r.catId === cat.id).sort((a, b) => (b.date + b.time).localeCompare(a.date + a.time));
    const list = catDetailDate ? all.filter(r => r.date === catDetailDate) : all;
    let diary = '', curDay = '';
    list.forEach(r => {
      if (r.date !== curDay) { curDay = r.date; diary += `<div class="rec-day-label">${fmtDayLabel(r.date)}</div>`; }
      diary += recordEntryHTML(r, { showCat: false });
    });
    const diaryEmpty = catDetailDate ? '이 날짜엔 기록이 없어요.' : '아직 기록이 없어요. ‘기록 작성’으로 첫 일기를 남겨보세요.';

    // 요약
    const weekAgo = (() => { const d = new Date(); d.setDate(d.getDate() - 6); return d.toISOString().slice(0, 10); })();
    const weekCnt = all.filter(r => r.date >= weekAgo).length;
    const meds = all.filter(r => r.type === 'medicine');
    const lastMed = meds.length ? fmtDayLabel(meds[0].date) : '없음';

    // 사진 모음 (날짜 필터와 무관하게 전체)
    const photos = [];
    all.forEach(r => recPhotosOf(r).forEach(p => photos.push({ src: p, rid: r.id })));
    const photoGrid = photos.length
      ? `<div class="cd-photos">${photos.map(p => `<button type="button" class="cd-photo" style="background-image:url('${p.src}')" data-rec-detail="${p.rid}" aria-label="사진 보기"></button>`).join('')}</div>`
      : `<div class="cd-empty">아직 올린 사진이 없어요.</div>`;

    // 날짜 필터 버튼
    const dLabel = catDetailDate ? (() => { const d = new Date(catDetailDate + 'T00:00'); return `${d.getMonth() + 1}월 ${d.getDate()}일`; })() : '';
    const dateCtl = `
      <div class="date-ctl">
        <button type="button" class="date-btn ${catDetailDate ? 'is-active' : ''}" data-catdate-pick aria-label="날짜 선택"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="5.5" width="16" height="15" rx="2.5"/><path d="M4 9.5h16M8 3.5v4M16 3.5v4"/></svg><span class="date-btn__label">${dLabel}</span></button>
        <button type="button" class="date-clear" data-catdate-clear aria-label="날짜 해제" ${catDetailDate ? '' : 'hidden'}><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
      </div>`;

    box.innerHTML = `
      <button class="cd-back" data-view="records"><span class="cd-back__ic">${ICON.arrow}</span> 전체 기록</button>
      <header class="cd-head">
        ${catAvatar(cat, 'cd-ava')}
        <div class="cd-head__info">
          <div class="cd-head__name">${escapeHtml(cat.name)}</div>
          <div class="cd-head__meta">${escapeHtml(meta || '프로필을 완성해보세요')}</div>
        </div>
        <button class="btn btn--primary" data-open-record><span class="btn-ic">${ICON.plus}</span> 기록 작성</button>
      </header>

      <div class="cd-grid">
        <div class="cd-main">
          <div class="cd-diaryhead">
            <h3 class="cd-diary__title">${escapeHtml(cat.name)}의 일기</h3>
            ${dateCtl}
          </div>
          <div class="record-list">${diary || `<div class="cd-empty">${diaryEmpty}</div>`}</div>
        </div>

        <aside class="cd-side">
          <section class="cd-panel">
            <h3 class="cd-panel__title">가족</h3>
            <div class="cd-members">
              <button type="button" class="cd-mem" data-edit-profile><span class="cd-mem__ava${me.photo ? ' has-photo' : ''}" style="${meAvaStyle()}">${meAvaText()}</span><span class="cd-mem__name">나</span></button>
              ${members.map(m => `<button type="button" class="cd-mem" data-member="${escapeHtml(memberKey(m))}"><span class="cd-mem__ava" style="background:${memberColor(memberKey(m))}">${memberInitial(m)}</span><span class="cd-mem__name">${escapeHtml(m.name || m.email)}</span></button>`).join('')}
              <button type="button" class="cd-invite" data-open-share aria-label="가족 초대·공유"><span class="cd-invite__ico">${ICON.plus}</span><span class="cd-mem__name">초대</span></button>
            </div>
          </section>

          <section class="cd-panel">
            <h3 class="cd-panel__title">이 아이 요약</h3>
            <div class="cd-sum">
              <div class="cd-sum__row"><span class="cd-sum__label">총 기록</span><span class="cd-sum__val">${all.length}건</span></div>
              <div class="cd-sum__row"><span class="cd-sum__label">이번 주</span><span class="cd-sum__val">${weekCnt}건</span></div>
              <div class="cd-sum__row"><span class="cd-sum__label">몸무게</span><span class="cd-sum__val">${cat.weight ? cat.weight + 'kg' : '—'}</span></div>
              <div class="cd-sum__row"><span class="cd-sum__label">최근 약</span><span class="cd-sum__val">${lastMed}</span></div>
            </div>
          </section>

          <section class="cd-panel">
            <h3 class="cd-panel__title">사진 <span class="my-count">${photos.length}</span></h3>
            ${photoGrid}
          </section>
        </aside>
      </div>`;
  }

  /* ============================================================
     마이페이지 (집사 프로필)
     ============================================================ */
  function renderUserPill() {
    const pill = $('#userPill');
    if (!pill) return;
    pill.setAttribute('title', me.name);
    pill.innerHTML = `<span class="user-chip__avatar${me.photo ? ' has-photo' : ''}" style="${meAvaStyle()}">${meAvaText()}</span>`;
  }

  function renderMyPage() {
    const box = $('#myPageBody');
    if (!box) return;

    const weekAgo = (() => { const d = new Date(); d.setDate(d.getDate() - 6); return d.toISOString().slice(0, 10); })();
    const weekCnt = records.filter(r => r.date >= weekAgo).length;
    const myComments = records.reduce((n, r) => n + ((r.comments || []).filter(c => c.author === me.name).length), 0);
    const sharedCats = cats.filter(c => (c.members || []).length);

    const catCards = cats.length
      ? cats.map(c => {
          const cnt = records.filter(r => r.catId === c.id).length;
          const meta = [c.breed, ageFromBirth(c.birth)].filter(Boolean).join(' · ');
          return `<button type="button" class="my-cat" data-cat-detail="${c.id}">
            ${catAvatar(c, 'my-cat__ava')}
            <span class="my-cat__info">
              <span class="my-cat__name">${escapeHtml(c.name)}</span>
              <span class="my-cat__meta">${escapeHtml(meta || '프로필 미완성')} · 기록 ${cnt}건</span>
            </span>
            <span class="my-cat__go">›</span>
          </button>`;
        }).join('')
      : `<div class="cd-empty">아직 등록한 고양이가 없어요.</div>`;

    const familyRows = sharedCats.length
      ? sharedCats.map(c => `<button type="button" class="my-fam" data-cat-detail="${c.id}">
          ${catAvatar(c, 'my-fam__ava')}
          <span class="my-fam__body">
            <span class="my-fam__name">${escapeHtml(c.name)}</span>
            <span class="my-fam__members">
              <span class="my-fam__chip${me.photo ? ' has-photo' : ''}" style="${meAvaStyle()}">${meAvaText()}</span>
              ${(c.members || []).map(m => `<span class="my-fam__chip my-fam__chip--guest">${escapeHtml((m.name || '?').slice(0, 1))}</span>`).join('')}
              <span class="my-fam__count">${escapeHtml(['나', ...(c.members || []).map(m => m.name || m.email)].join(', '))}</span>
            </span>
          </span>
        </button>`).join('')
      : `<div class="cd-empty">아직 함께하는 가족이 없어요. 고양이 페이지에서 초대해보세요.</div>`;

    const friendRows = friendsAdded.size
      ? [...friendsAdded].sort((a, b) => a - b).map(i => {
          const f = FRIENDS[i]; if (!f) return '';
          return `<button type="button" class="my-cat" data-view="friends">
            <span class="my-cat__ava my-cat__ava--txt" style="background:${memberColor(f.name)}">${escapeHtml(f.name.slice(0, 1))}</span>
            <span class="my-cat__info">
              <span class="my-cat__name">${escapeHtml(f.name)} <span class="friend-card__match">${f.match}%</span></span>
              <span class="my-cat__meta">${escapeHtml(f.cat)}</span>
            </span>
            <span class="my-cat__go">›</span>
          </button>`;
        }).join('')
      : `<div class="cd-empty">아직 추가한 친구가 없어요. AI 매칭에서 친구를 추가해보세요.</div>`;

    const favRows = adoptFav.size
      ? [...adoptFav].sort((a, b) => a - b).map(i => {
          const a = ADOPTS[i]; if (!a) return '';
          return `<button type="button" class="my-cat" data-adopt-open="${i}">
            <span class="my-cat__ava my-cat__ava--face">${CAT_FACE}</span>
            <span class="my-cat__info">
              <span class="my-cat__name">${escapeHtml(a.name)}</span>
              <span class="my-cat__meta">${escapeHtml([a.age, a.gender, a.region].filter(Boolean).join(' · '))}</span>
            </span>
            <span class="my-cat__go">›</span>
          </button>`;
        }).join('')
      : `<div class="cd-empty">입양 탭에서 마음에 드는 아이를 찜해보세요.</div>`;

    box.innerHTML = `
      <header class="cd-head">
        ${meAvatar('cd-ava cd-ava--me')}
        <div class="cd-head__info">
          <div class="cd-head__name">${escapeHtml(me.name)}</div>
          <div class="cd-head__meta">${escapeHtml(me.email || '이메일을 등록해보세요')}</div>
          ${me.bio ? `<div class="my-bio">${escapeHtml(me.bio)}</div>` : ''}
        </div>
        <button class="btn btn--ghost cd-head__edit" data-edit-profile aria-label="프로필 편집"><span class="btn-ic">${ICON.edit || ''}</span><span class="cd-head__edit-txt">프로필 편집</span></button>
      </header>

      <div class="cd-grid">
        <div class="cd-main">
          <section class="my-section">
            <h3 class="cd-panel__title">내 고양이 <span class="my-count">${cats.length}</span></h3>
            <div class="my-cats">${catCards}</div>
          </section>
          <section class="my-section">
            <h3 class="cd-panel__title">함께하는 가족</h3>
            <div class="my-fams">${familyRows}</div>
          </section>
          <section class="my-section">
            <h3 class="cd-panel__title">내 친구 <span class="my-count">${friendsAdded.size}</span></h3>
            <div class="my-cats">${friendRows}</div>
          </section>
          <button type="button" class="my-match" data-view="friends">
            <span class="my-match__ic">${ICON.paw}</span>
            <span class="my-match__body"><span class="my-match__title">AI 집사 매칭</span><span class="my-match__text">우리 아이와 라이프스타일이 비슷한 집사 찾기</span></span>
            <span class="my-match__go">${ICON.arrow}</span>
          </button>
          <section class="my-section">
            <h3 class="cd-panel__title">찜한 아이 <span class="my-count">${adoptFav.size}</span></h3>
            <div class="my-cats">${favRows}</div>
          </section>
        </div>

        <aside class="cd-side">
          <section class="cd-panel">
            <h3 class="cd-panel__title">내 활동</h3>
            <div class="cd-sum">
              <div class="cd-sum__row"><span class="cd-sum__label">등록한 고양이</span><span class="cd-sum__val">${cats.length}마리</span></div>
              <div class="cd-sum__row"><span class="cd-sum__label">전체 기록</span><span class="cd-sum__val">${records.length}건</span></div>
              <div class="cd-sum__row"><span class="cd-sum__label">이번 주</span><span class="cd-sum__val">${weekCnt}건</span></div>
              <div class="cd-sum__row"><span class="cd-sum__label">남긴 댓글</span><span class="cd-sum__val">${myComments}개</span></div>
            </div>
          </section>
        </aside>
      </div>

      <section class="my-account">
        <h3 class="cd-panel__title">계정</h3>
        <div class="my-account__rows">
          <button type="button" class="my-acct-btn" data-logout>
            <span class="my-acct-btn__ic"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 12H4M8 8l-4 4 4 4"/><path d="M10 4h8a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-8"/></svg></span>
            로그아웃
          </button>
          <button type="button" class="my-acct-btn my-acct-btn--danger" data-withdraw>
            <span class="my-acct-btn__ic"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h12M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M7 7l1 12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-12"/></svg></span>
            회원 탈퇴
          </button>
        </div>
        <p class="field-help">데모 버전이라 데이터는 이 브라우저에만 저장돼요. 탈퇴하면 모든 고양이·기록·프로필이 삭제됩니다.</p>
      </section>`;
  }

  function updateProfilePhotoPreview() {
    const box = $('#profilePhotoPreview');
    if (!box) return;
    if (profilePhoto) { box.style.backgroundImage = `url('${profilePhoto}')`; box.classList.add('has-photo'); }
    else { box.style.backgroundImage = 'none'; box.classList.remove('has-photo'); }
    const rm = $('#profilePhotoRm');
    if (rm) rm.hidden = !profilePhoto;
  }

  function openProfileModal() {
    const f = $('#profileForm');
    if (!f) return;
    $('#profileName').value = me.name || '';
    $('#profileEmail').value = me.email || '';
    $('#profileBio').value = me.bio || '';
    $$('#profileForm [data-mecolor]').forEach(b => b.classList.toggle('is-active', b.dataset.mecolor === me.color));
    profilePhoto = me.photo || '';
    updateProfilePhotoPreview();
    openModal('profileModal');
  }

  function doLogout() {
    if (!confirm('로그아웃할까요?')) return;
    closeAllModals();
    $('#authGate').classList.add('is-open');
    document.body.classList.add('is-locked');
  }

  function doWithdraw() {
    if (!confirm('정말 탈퇴할까요?\n모든 고양이·기록·프로필이 삭제되며 되돌릴 수 없어요.')) return;
    cats = []; records = [];
    me = { name: '우리집 집사', email: '', color: '#4A4A4A', bio: '', photo: '' };
    save(); saveMe();
    try { localStorage.setItem('purrcare.seedv', '4'); } catch (e) { /* noop */ }
    closeAllModals();
    renderAll();
    $('#authGate').classList.add('is-open');
    document.body.classList.add('is-locked');
  }

  /* ----- 설정 화면 ----- */
  function renderSettings() {
    const box = $('#settingsBody');
    if (!box) return;
    const toggle = (key, label, desc) => `
      <div class="set-row">
        <div class="set-row__text"><span class="set-row__label">${label}</span><span class="set-row__desc">${desc}</span></div>
        <label class="switch"><input type="checkbox" data-set="${key}" ${settings[key] ? 'checked' : ''}><span class="switch__track"></span></label>
      </div>`;
    const link = (attr, label, sub, danger) => `
      <button type="button" class="set-row set-row--btn${danger ? ' set-row--danger' : ''}" ${attr}>
        <div class="set-row__text"><span class="set-row__label">${escapeHtml(label)}</span>${sub ? `<span class="set-row__desc">${escapeHtml(sub)}</span>` : ''}</div>
        <span class="set-row__go">${ICON.chevron}</span>
      </button>`;
    box.innerHTML = `
      <div class="view__head">
        <div>
          <h1 class="view__title">설정</h1>
          <p class="view__sub">알림 · 계정 · 데이터 관리</p>
        </div>
      </div>
      <div class="set-list">
        <div class="set-group">
          <div class="set-group__title">테마</div>
          <div class="theme-picker">
            ${THEMES.map(t => `<button type="button" class="theme-sw ${settings.theme === t.key ? 'is-active' : ''}" data-theme-set="${t.key}" style="--sw:${t.color}" aria-label="${t.name}"><span class="theme-sw__dot"></span><span class="theme-sw__name">${t.name}</span></button>`).join('')}
          </div>
        </div>
        <div class="set-group">
          <div class="set-group__title">알림</div>
          ${toggle('notiSchedule', '일정 알림', '예방접종 · 병원 예약 · 복약 리마인더')}
          ${toggle('notiActivity', '오늘의 활동 요약', '오늘 기록한 활동을 알림에 표시')}
          ${toggle('notiCommunity', '커뮤니티 소식', '내 글의 새 댓글 · 반응')}
        </div>
        <div class="set-group">
          <div class="set-group__title">계정</div>
          ${link('data-view="mypage"', '프로필 편집', me.name)}
          ${link('data-logout', '로그아웃')}
          ${link('data-withdraw', '회원 탈퇴', '', true)}
        </div>
        <div class="set-group">
          <div class="set-group__title">데이터</div>
          ${link('data-export', '데이터 내보내기', 'JSON 파일로 저장')}
          ${link('data-reset', '데이터 초기화', '예시 데이터로 되돌리기', true)}
        </div>
        <div class="set-group">
          <div class="set-group__title">앱 정보</div>
          <div class="set-row"><div class="set-row__text"><span class="set-row__label">버전</span></div><span class="set-row__val">v1.0 · 데모</span></div>
          ${link('data-terms', '이용약관 · 개인정보', '')}
          ${link('data-contact', '문의하기', me.email || 'zip.dooly@gmail.com')}
        </div>
      </div>
      <p class="hd-note">* 모든 데이터는 이 브라우저에만 저장되는 로컬 데모예요.</p>`;
  }

  function doLogin() {
    $('#authGate').classList.remove('is-open');
    document.body.classList.remove('is-locked');
    switchView('dashboard');
    toast('환영해요!');
  }

  /* ============================================================
     건강 페이지 (히어로 캐러셀 + 액션 카드)
     ============================================================ */
  const HEALTH_TIPS = [
    { key: 'water', q: '물을 잘 안 마셔요', t: '탈수 신호가 아닌지 살펴봐요', img: 'image/health/health-banner-water.png' },
    { key: 'meal', q: '밥을 갑자기 안 먹어요', t: '식욕 저하 체크포인트', img: 'image/health/health-banner-meal.png' },
    { key: 'litter', q: '화장실을 자주 가요', t: '방광·신장 건강 살펴보기', img: 'image/health/health-banner-litter.png' },
    { key: 'vomit', q: '갑자기 토하는 고양이', t: '응급 신호인지 확인해보세요', img: 'image/health/health-banner-vomit.png' },
    { key: 'coat', q: '털이 부쩍 많이 빠져요', t: '피부·영양 상태를 함께 봐요', img: 'image/health/health-banner-coat.png' },
  ];
  const HEALTH_ACTIONS = [
    { key: 'hospital', sub: '당장 갈 수 있는<br>병원을 찾아드려요!', title: '주위 병원 검색', icon: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-5.1-6.5-10A6.5 6.5 0 0 1 18.5 11c0 4.9-6.5 10-6.5 10Z"/><path d="M12 8v5M9.5 10.5h5"/></svg>` },
    { key: 'analysis', sub: '간단한 질문과 사진으로<br>솔루션 확인하기', title: '비대면 건강분석', icon: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="4" width="14" height="16" rx="2.3"/><path d="M9 3.5h6a1 1 0 0 1 1 1V6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"/><path d="M9 12l2 2 3.5-3.5"/></svg>` },
    { key: 'ai', sub: '당장 병원에<br>갈 수 없다면', title: 'AI로 간단 진료보기', icon: `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 5h14a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 16h-6l-4.5 3.5V16H5a1.5 1.5 0 0 1-1.5-1.5v-8A1.5 1.5 0 0 1 5 5Z"/><path d="M9 10h.01M12 10h.01M15 10h.01"/></svg>` },
  ];
  const CHEVRON = `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>`;

  function renderHealth() {
    const box = $('#healthBody');
    if (!box) return;
    const dots = HEALTH_TIPS.map((_, i) => `<button type="button" class="hhero__dot ${i === healthSlide ? 'is-active' : ''}" data-hslide="${i}" aria-label="${i + 1}번째 안내"></button>`).join('');
    const cards = HEALTH_ACTIONS.map(a => `
      <button type="button" class="hcard" data-hcard="${a.key}">
        <span class="hcard__ico">${a.icon}</span>
        <span class="hcard__body">
          <span class="hcard__sub">${a.sub}</span>
          <span class="hcard__title">${a.title}</span>
        </span>
        <span class="hcard__go">${CHEVRON}</span>
      </button>`).join('');
    const tip = HEALTH_TIPS[healthSlide];
    box.innerHTML = `
      <div class="view__head">
        <div>
          <h1 class="view__title">건강</h1>
          <p class="view__sub">병원 검색 · 비대면 건강분석 · AI 간단 진료</p>
        </div>
      </div>
      <section class="hhero hhero--${tip.key}" id="healthHero" aria-label="${escapeHtml(tip.q)} ${escapeHtml(tip.t)}">
        <img class="hhero__img" id="hheroImg" src="${tip.img}" alt="${escapeHtml(tip.q)} ${escapeHtml(tip.t)}" />
        <div class="hhero__dots" id="hheroDots">${dots}</div>
      </section>
      <div class="hcards">${cards}</div>`;
    startHealthAuto();
  }

  function paintHealthSlide(i) {
    healthSlide = (i + HEALTH_TIPS.length) % HEALTH_TIPS.length;
    const tip = HEALTH_TIPS[healthSlide];
    const hero = $('#healthHero'), img = $('#hheroImg');
    if (hero) hero.className = `hhero hhero--${tip.key}`;
    if (hero) hero.setAttribute('aria-label', `${tip.q} ${tip.t}`);
    if (img) {
      img.src = tip.img;
      img.alt = `${tip.q} ${tip.t}`;
    }
    $$('#hheroDots .hhero__dot').forEach((d, idx) => d.classList.toggle('is-active', idx === healthSlide));
  }

  function startHealthAuto() {
    if (healthTimer) clearInterval(healthTimer);
    healthTimer = setInterval(() => {
      const v = $('#view-health');
      if (!v || !v.classList.contains('is-active')) return;   // 건강 화면일 때만 넘김
      paintHealthSlide(healthSlide + 1);
    }, 4500);
  }

  /* ----- 건강 상세 (병원검색 / 건강분석 / AI진료) ----- */
  let healthDetailKey = '';
  let hospSort = 'dist';      // 병원 정렬: dist | rating
  let hospFilter = 'all';     // 병원 필터: all | 24h | open
  let activeHospital = 0;     // 지도/목록 활성 병원 index (visible 기준)

  const HOSPITALS = [
    { name: '행복동물병원', dist: '0.4km', km: 0.4, open: true, tag: '진료중', rating: '4.8', addr: '서울 강남구 테헤란로 12길 30', hours: '오늘 09:00–21:00', phone: '02-538-1004', desc: '내과·건강검진 · 고양이 친화(Cat Friendly) 병원', mx: 38, my: 30, saved: false },
    { name: '튼튼동물메디컬센터', dist: '1.1km', km: 1.1, open: true, tag: '진료중', rating: '4.6', addr: '서울 강남구 봉은사로 210', hours: '오늘 10:00–20:00', phone: '02-518-7942', desc: '정형외과·치과·영상진단(CT) 전문', mx: 62, my: 42, saved: false },
    { name: '24시 우리동물의료센터', dist: '2.3km', km: 2.3, open: true, tag: '24시간', rating: '4.9', addr: '서울 서초구 강남대로 55', hours: '24시간 진료', phone: '02-3486-2400', desc: '24시간 응급·중환자 입원실 운영', mx: 28, my: 66, saved: false },
    { name: '냥이 고양이 전문의원', dist: '3.0km', km: 3.0, open: false, tag: '진료마감', rating: '4.7', addr: '서울 송파구 올림픽로 300', hours: '오늘 마감 · 내일 10:00 오픈', phone: '02-449-9088', desc: '고양이 단독 진료 · 스트레스 최소 환경', mx: 74, my: 72, saved: false },
  ];
  const HOSP_REVIEWS = [
    { author: '콩이맘', rating: 5, text: '겁 많은 우리 아이도 차분하게 봐주셨어요. 설명이 아주 자세해요.' },
    { author: '두부씨', rating: 4, text: '대기 짧고 시설이 깨끗해요. 주차가 조금 애매한 건 아쉬움.' },
    { author: '봄이언니', rating: 5, text: '야간에 급하게 갔는데 친절하게 응대해주셔서 감사했어요.' },
  ];
  let hospQuery = '';       // 지역·이름 검색어
  let hospDetailId = null;  // 병원 상세로 보고 있는 원본 index (null=목록)
  const SYMPTOMS = ['구토', '설사', '식욕부진', '기침', '피부·털', '배뇨 이상', '활력 저하', '기타'];
  const SYMPTOM_MORE = ['눈곱·눈물', '귀 긁음', '잇몸·구취', '절뚝거림', '체중 감소', '호흡 이상', '발작', '이물질 섭취'];
  const AI_QUICKS = ['갑자기 토해요', '밥을 안 먹어요', '기운이 없어요', '설사를 해요'];

  function openHealthDetail(key) {
    healthDetailKey = key;
    hospSort = 'dist'; hospFilter = 'all'; activeHospital = 0;
    hospQuery = ''; hospDetailId = null;
    anaResult = null;   // 건강분석은 항상 폼부터
    renderHealthDetail();
    switchView('healthdetail');
  }

  function setActiveHospital(i) {
    activeHospital = i;
    $$('#healthDetailBody [data-hosp-row]').forEach(r => r.classList.toggle('is-active', +r.dataset.hospRow === i));
    $$('#healthDetailBody [data-hosp-pin]').forEach(p => p.classList.toggle('is-active', +p.dataset.hospPin === i));
    const row = $(`#healthDetailBody [data-hosp-row="${i}"]`);
    if (row) row.scrollIntoView({ block: 'nearest' });
  }

  function renderHealthDetail() {
    const box = $('#healthDetailBody');
    if (!box) return;
    const back = `<button class="cd-back" data-view="health"><span class="cd-back__ic">${ICON.arrow}</span> 건강</button>`;
    let body = '';
    if (healthDetailKey === 'hospital') {
      const icPhone = `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z"/></svg>`;
      const icRoute = `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4Z"/><path d="M9 4v14M15 6v14"/></svg>`;
      const icBm = s => `<svg class="ic" viewBox="0 0 24 24" fill="${s ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1Z"/></svg>`;
      const stars = n => '★★★★★☆☆☆☆☆'.slice(5 - n, 10 - n);
      const mapBg = `<svg class="hfind-map__bg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><rect width="100" height="100" fill="#EDEDED"/><rect x="8" y="10" width="26" height="20" rx="3" fill="#E1E1E1"/><rect x="60" y="8" width="30" height="24" rx="3" fill="#E1E1E1"/><rect x="12" y="54" width="30" height="26" rx="3" fill="#E1E1E1"/><rect x="58" y="58" width="30" height="30" rx="3" fill="#E1E1E1"/><circle cx="50" cy="46" r="12" fill="#E6E6E6"/><path d="M0 40 H100 M0 41 H100" stroke="#F8F8F8" stroke-width="6"/><path d="M46 0 V100 M47 0 V100" stroke="#F8F8F8" stroke-width="6"/><path d="M0 84 H100" stroke="#F8F8F8" stroke-width="4"/></svg>`;

      if (hospDetailId != null && HOSPITALS[hospDetailId]) {
        // ── 병원 상세 ──
        const h = HOSPITALS[hospDetailId];
        const reviews = HOSP_REVIEWS.map(r => `
          <div class="hrev">
            <div class="hrev__head"><span class="hrev__ava" style="background:${memberColor(r.author)}">${escapeHtml(r.author.slice(0, 1))}</span><span class="hrev__name">${escapeHtml(r.author)}</span><span class="hrev__stars">${stars(r.rating)}</span></div>
            <div class="hrev__text">${escapeHtml(r.text)}</div>
          </div>`).join('');
        body = `
          <button class="cd-back" data-hosp-back><span class="cd-back__ic">${ICON.arrow}</span> 병원 목록</button>
          <header class="hdetail-head">
            <div class="hdetail-head__info">
              <div class="hdetail-head__top"><h2 class="hdetail-head__name">${escapeHtml(h.name)}</h2><span class="hosp__badge ${h.open ? 'is-open' : 'is-closed'}">${h.tag}</span></div>
              <div class="hdetail-head__meta"><span class="hfind-row__rating">★ ${h.rating}</span><span class="hfind-dot">·</span>${h.dist}</div>
            </div>
            <button type="button" class="hdetail-bm ${h.saved ? 'is-saved' : ''}" data-hosp-save="${hospDetailId}" aria-label="북마크">${icBm(h.saved)}</button>
          </header>
          <p class="hdetail-desc">${escapeHtml(h.desc)}</p>
          <div class="hdetail-info">
            <div class="hdetail-info__row"><span class="hdetail-info__label">주소</span><span>${escapeHtml(h.addr)}</span></div>
            <div class="hdetail-info__row"><span class="hdetail-info__label">진료시간</span><span>${escapeHtml(h.hours)}</span></div>
            <div class="hdetail-info__row"><span class="hdetail-info__label">전화</span><span>${escapeHtml(h.phone)}</span></div>
          </div>
          <div class="hdetail-actions">
            <button type="button" class="btn btn--primary" data-hosp-action="call:${h.name}">전화하기</button>
            <button type="button" class="btn btn--ghost" data-hosp-action="book:${h.name}">예약하기</button>
            <button type="button" class="btn btn--ghost" data-hosp-action="map:${h.name}">길찾기</button>
          </div>
          <div class="hdetail-map">
            ${mapBg}
            <span class="hfind-myloc" aria-label="내 위치"></span>
            <span class="hfind-pin is-active" style="left:${h.mx}%;top:${h.my}%"><span>1</span></span>
          </div>
          <section class="hdetail-rev">
            <div class="hdetail-rev__head"><h3 class="ares-sec__title">방문자 후기 <span class="my-count">${HOSP_REVIEWS.length}</span></h3><button type="button" class="ares-link" data-hosp-reviews>후기 더 보기</button></div>
            ${reviews}
          </section>
          <p class="hd-note">* 예시 데이터예요. 전화·예약·길찾기·외부 후기는 준비 중입니다.</p>`;
      } else {
        // ── 병원 목록 (검색·저장 필터 포함) ──
        let visible = HOSPITALS.filter(h => hospFilter === 'saved' ? h.saved : hospFilter === '24h' ? h.tag === '24시간' : hospFilter === 'open' ? h.open : true);
        const q = hospQuery.trim();
        if (q) visible = visible.filter(h => h.name.includes(q) || h.addr.includes(q));
        visible = visible.slice().sort((a, b) => hospSort === 'rating' ? parseFloat(b.rating) - parseFloat(a.rating) : a.km - b.km);

        const rows = visible.map((h, i) => { const oi = HOSPITALS.indexOf(h); return `
          <div class="hfind-row" data-hosp-open="${oi}">
            <span class="hfind-num">${i + 1}</span>
            <span class="hfind-row__main">
              <span class="hfind-row__top"><span class="hfind-row__name">${escapeHtml(h.name)}</span><span class="hosp__badge ${h.open ? 'is-open' : 'is-closed'}">${h.tag}</span></span>
              <span class="hfind-row__meta"><span class="hfind-row__rating">★ ${h.rating}</span><span class="hfind-dot">·</span>${h.dist}<span class="hfind-dot">·</span>${h.hours}</span>
              <span class="hfind-row__addr">${escapeHtml(h.addr)}</span>
            </span>
            <span class="hfind-row__acts">
              <span class="hfind-ibtn ${h.saved ? 'is-saved' : ''}" data-hosp-save="${oi}" role="button" aria-label="북마크">${icBm(h.saved)}</span>
              <span class="hfind-ibtn hfind-ibtn--call" data-hosp-action="call:${h.name}" role="button" aria-label="전화">${icPhone}</span>
              <span class="hfind-ibtn" data-hosp-action="map:${h.name}" role="button" aria-label="길찾기">${icRoute}</span>
            </span>
          </div>`; }).join('');
        const pins = visible.map((h, i) => { const oi = HOSPITALS.indexOf(h); return `
          <button type="button" class="hfind-pin" data-hosp-open="${oi}" style="left:${h.mx}%;top:${h.my}%" aria-label="${h.name}"><span>${i + 1}</span></button>`; }).join('');
        const listEmpty = `<div class="cd-empty">${q ? '검색 결과가 없어요.' : '조건에 맞는 병원이 없어요.'}</div>`;
        body = `
          <header class="hd-head">
            <h2 class="hd-head__title">주위 병원 검색</h2>
            <p class="hd-head__sub">지금 문 연 병원을 거리·평점순으로 찾아드려요</p>
          </header>
          <div class="hosp-search">
            <span class="hosp-search__ic"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"/><path d="M15.5 15.5 20 20"/></svg></span>
            <input type="text" id="hospSearchInput" placeholder="지역 · 병원 이름으로 검색" value="${escapeHtml(hospQuery)}" autocomplete="off" />
          </div>
          <div class="hfind">
            <div class="hfind__panel">
              <div class="hfind__controls">
                <div class="seg-filter hfind-sort">
                  <button type="button" class="${hospSort === 'dist' ? 'is-active' : ''}" data-hosp-sort="dist">거리순</button>
                  <button type="button" class="${hospSort === 'rating' ? 'is-active' : ''}" data-hosp-sort="rating">평점순</button>
                </div>
                <div class="hd-chips hfind-filters">
                  <button type="button" class="hd-chip ${hospFilter === 'all' ? 'is-active' : ''}" data-hosp-filter="all">전체</button>
                  <button type="button" class="hd-chip ${hospFilter === '24h' ? 'is-active' : ''}" data-hosp-filter="24h">24시간</button>
                  <button type="button" class="hd-chip ${hospFilter === 'open' ? 'is-active' : ''}" data-hosp-filter="open">진료중</button>
                  <button type="button" class="hd-chip ${hospFilter === 'saved' ? 'is-active' : ''}" data-hosp-filter="saved">저장</button>
                </div>
              </div>
              <div class="hfind-list">${rows || listEmpty}</div>
            </div>
            <aside class="hfind__map">
              <div class="hfind-map">${mapBg}<span class="hfind-myloc" aria-label="내 위치"></span>${pins}</div>
              <p class="hfind-map__cap">도식 지도 · 실제 위치 지도는 준비 중이에요</p>
            </aside>
          </div>
          <p class="hd-note">* 표시된 병원은 예시 데이터예요.</p>`;
      }
    } else if (healthDetailKey === 'analysis' && anaResult) {
      const syms = anaSyms();
      const rel = relatedPosts();
      const recs = relatedRecords();
      const advice = symptomAdvice().map(l => `<p class="ares-vet__line">${escapeHtml(l)}</p>`).join('');
      body = `
        <button class="cd-back" data-ana-reset><span class="cd-back__ic">${ICON.arrow}</span> 다시 분석</button>
        <header class="hd-head">
          <h2 class="hd-head__title">분석 결과</h2>
          <p class="hd-head__sub">${syms.length ? escapeHtml(syms.join(' · ')) : '증상 미선택'}${anaResult.when ? ' · ' + escapeHtml(anaResult.when) + '부터' : ''}</p>
        </header>
        <section class="ares-vet">
          <div class="ares-vet__head"><span class="ares-vet__badge"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.5-9.3-9C1.2 8 2.6 5 5.5 5c1.9 0 3.2 1.1 4 2.3.8-1.2 2.1-2.3 4-2.3 2.9 0 4.3 3 2.8 6"/></svg></span><span class="ares-vet__title">수의사 참고 코멘트</span></div>
          ${advice}
          <p class="ares-vet__more">증상이 심하거나 24시간 이상 지속되면 병원 방문을 권장해요.</p>
        </section>
        <div class="ares-actions">
          <button type="button" class="ares-act" data-ana-hospital>주변 병원 찾기</button>
          <button type="button" class="ares-act" data-ana-ai>AI에게 물어보기</button>
          <button type="button" class="ares-act" data-ana-ask>커뮤니티에 질문하기</button>
        </div>
        <section class="ares-sec">
          <h3 class="ares-sec__title">비슷한 증상 글</h3>
          ${rel.length ? `<div class="cfeed-list">${rel.map(postCardHTML).join('')}</div>` : `<div class="ares-empty">아직 비슷한 글이 없어요. <button type="button" class="ares-link" data-ana-ask>커뮤니티에 질문해보세요</button></div>`}
        </section>
        <section class="ares-sec">
          <h3 class="ares-sec__title">내 기록에서 관련 정보</h3>
          ${recs.length ? `<div class="ares-recs">${recs.map(anaRecRow).join('')}</div>` : `<div class="ares-empty">관련 기록이 없어요. <button type="button" class="ares-link" data-open-record>지금 기록해보세요</button></div>`}
        </section>
        <p class="hd-note">* 참고용 안내이며 정확한 진단은 수의사와 상담하세요.</p>`;
    } else if (healthDetailKey === 'analysis') {
      const steps = ['증상 선택', '사진 첨부', '상세 질문', '솔루션 확인'];
      const stepHTML = steps.map((s, i) => `<div class="ana-step ${i === 0 ? 'is-active' : ''}"><span class="ana-step__n">${i + 1}</span><span>${s}</span></div>`).join('<span class="ana-step__line"></span>');
      const chips = SYMPTOMS.map(s => `<button type="button" class="ana-chip" data-symptom="${s}">${s}</button>`).join('');
      const moreChips = SYMPTOM_MORE.map(s => `<button type="button" class="ana-chip" data-symptom="${s}">${s}</button>`).join('');
      body = `
        <header class="hd-head">
          <h2 class="hd-head__title">비대면 건강분석</h2>
          <p class="hd-head__sub">간단한 질문과 사진으로 지금 상태를 확인해요</p>
        </header>
        <div class="ana-steps">${stepHTML}</div>
        <section class="ana-sec">
          <h3 class="ana-sec__title">어떤 증상인가요?</h3>
          <div class="ana-chips">${chips}</div>
          <div class="ana-etc" id="anaEtc" hidden>
            <div class="ana-etc__label">이런 증상도 있나요?</div>
            <div class="ana-chips">${moreChips}</div>
            <textarea class="ana-etc__text" id="anaEtcText" rows="3" placeholder="증상을 직접 적어주세요. 예) 어제 저녁부터 오른쪽 뒷다리를 살짝 절어요"></textarea>
          </div>
        </section>
        <section class="ana-sec">
          <h3 class="ana-sec__title">사진 첨부 <span class="ana-sec__opt">선택</span></h3>
          <button type="button" class="ana-photo" data-demo-input>
            <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="14" rx="2.5"/><path d="M3.5 16l4.5-4 3 2.5L15 9l5.5 6"/><circle cx="9" cy="10" r="1.4"/></svg>
            <span>증상 부위 사진을 올리면 더 정확해요</span>
          </button>
        </section>
        <section class="ana-sec">
          <h3 class="ana-sec__title">언제부터 그랬나요?</h3>
          <div class="ana-chips">
            <button type="button" class="ana-chip" data-when="오늘">오늘</button>
            <button type="button" class="ana-chip" data-when="2~3일">2~3일 전</button>
            <button type="button" class="ana-chip" data-when="일주일+">일주일 이상</button>
          </div>
        </section>
        <div class="ana-foot">
          <button type="button" class="btn btn--primary ana-submit" data-analyze>분석 시작</button>
          <p class="hd-note">* 분석 결과는 참고용이며, 실제 진단·처방은 수의사와 상담하세요.</p>
        </div>`;
    } else if (healthDetailKey === 'ai') {
      const sugs = AI_QUICKS.map(q => `<button type="button" class="aisug" data-ai-quick="${q}"><span class="aisug__ic">${ICON.chat}</span><span>${q}</span></button>`).join('');
      body = `
        <header class="hd-head">
          <h2 class="hd-head__title">AI 간단 진료</h2>
          <p class="hd-head__sub">수의학 정보를 바탕으로 안내해요 · 참고용</p>
        </header>
        <div class="aichat">
          <div class="aichat__scroll" id="aiMsgs">
            <div class="aiwelcome" id="aiWelcome">
              <div class="aiwelcome__badge">${ICON.paw}</div>
              <h3 class="aiwelcome__title">무엇이 걱정되시나요?</h3>
              <p class="aiwelcome__sub">증상을 알려주시면 참고 정보를 안내해 드려요.<br>아래를 눌러 시작하거나 직접 입력해 보세요.</p>
              <div class="aiwelcome__cards">${sugs}</div>
              <div class="aiwelcome__kw">
                <span class="aiwelcome__kwlabel">키워드로 문장 만들기</span>
                <div class="aikw-chips">${SYMPTOMS.filter(s => s !== '기타').map(s => `<button type="button" class="aikw" data-ai-kw="${s}">${s}</button>`).join('')}</div>
              </div>
              <div class="aiwelcome__links">
                <button type="button" class="ares-act" data-ai-hospital>주변 병원 찾기</button>
                <button type="button" class="ares-act" data-ai-ask>커뮤니티에 질문</button>
              </div>
            </div>
          </div>
          <div class="aichat__composer">
            <input type="text" class="aichat__input" id="aiInput" placeholder="증상을 입력해 보세요" autocomplete="off" />
            <button type="button" class="aichat__send" id="aiSendBtn" aria-label="전송">${ICON.up}</button>
          </div>
        </div>
        <p class="hd-note">* AI 안내는 참고용이에요. 증상이 심하면 즉시 병원을 방문하세요.</p>`;
    }
    box.innerHTML = back + body;
  }

  /* AI 진료: 메시지 추가 + 캔드 응답 */
  function aiAppend(role, text) {
    const wrap = $('#aiMsgs');
    if (!wrap) return;
    const welcome = $('#aiWelcome'); if (welcome) welcome.remove();  // 첫 메시지에 환영 화면 제거
    const row = document.createElement('div');
    row.className = 'aimsg aimsg--' + (role === 'me' ? 'me' : 'ai');
    if (role === 'me') {
      row.innerHTML = `<div class="aimsg__text"></div>`;
    } else {
      row.innerHTML = `<span class="aimsg__ava">${ICON.paw}</span><div class="aimsg__text"></div>`;
    }
    row.querySelector('.aimsg__text').textContent = text;
    wrap.appendChild(row);
    wrap.scrollTop = wrap.scrollHeight;
  }
  function aiReply(userText) {
    const t = userText;
    let msg;
    if (/토|구토|게워/.test(t)) msg = '구토는 헤어볼·급하게 먹은 경우 흔하지만, 하루 3회 이상 반복되거나 무기력·식욕부진이 함께면 주의가 필요해요.';
    else if (/안\s*먹|식욕|밥/.test(t)) msg = '식욕 저하는 스트레스·구강 문제·질환 등 원인이 다양해요. 24시간 이상 아무것도 안 먹으면 특히 주의가 필요해요.';
    else if (/기운|활력|무기력|처져/.test(t)) msg = '평소보다 많이 처지고 숨거나 반응이 둔하다면 통증·발열 신호일 수 있어요. 체온과 잇몸 색을 확인해 보세요.';
    else if (/설사|묽은|변/.test(t)) msg = '설사는 사료 변경·스트레스로도 생기지만, 혈변이거나 이틀 이상 지속되면 탈수 위험이 있어 진료가 필요해요.';
    else msg = '증상을 조금 더 자세히 알려주시면 안내해 드릴게요. 언제부터, 얼마나 자주 그런지 적어주세요.';
    return msg + '\n증상이 심하거나 24시간 이상 지속되면 병원 방문을 권장해요.';
  }
  function aiSend(text) {
    const val = (text || '').trim();
    if (!val) return;
    aiAppend('me', val);
    const input = $('#aiInput'); if (input) input.value = '';
    setTimeout(() => aiAppend('ai', aiReply(val)), 450);
  }

  /* ----- 건강분석 결과 연결 ----- */
  let anaResult = null;   // null=폼 / {syms,when,etc}=결과
  const SYMPTOM_KW = {
    '구토': ['토', '구토', '게워'], '설사': ['설사', '묽은', '변'], '식욕부진': ['안 먹', '밥', '식욕', '편식'],
    '기침': ['기침', '재채기', '호흡'], '피부·털': ['피부', '털', '탈모', '가려', '알레르기'], '배뇨 이상': ['소변', '배뇨', '오줌', '방광'],
    '활력 저하': ['기운', '무기력', '활력', '처져', '우다다'], '눈곱·눈물': ['눈곱', '눈물'], '귀 긁음': ['귀', '긁'],
    '잇몸·구취': ['잇몸', '구취', '치아', '스케일링'], '절뚝거림': ['절', '다리'], '체중 감소': ['체중', '살'],
    '호흡 이상': ['호흡', '숨'], '발작': ['발작', '경련'], '이물질 섭취': ['이물', '삼킴', '먹었'],
  };
  const SYMPTOM_ADVICE = {
    '구토': '구토는 헤어볼·급하게 먹은 경우도 있지만, 하루 3회 이상 반복되거나 무기력·식욕부진이 함께면 주의가 필요해요.',
    '설사': '설사는 사료 변경·스트레스로도 생기지만, 혈변이거나 이틀 이상 지속되면 탈수 위험이 있어 진료가 필요해요.',
    '식욕부진': '24시간 이상 아무것도 안 먹으면 특히 주의가 필요해요. 물 섭취량과 구강 상태도 확인해 주세요.',
    '기침': '기침이 잦거나 호흡이 가빠지면 심장·호흡기 문제일 수 있어 진료를 권장해요.',
    '피부·털': '과도한 그루밍·탈모·발적은 알레르기·기생충 가능성이 있어요. 부위를 사진으로 남겨두면 좋아요.',
    '배뇨 이상': '소변을 자주 보거나 힘들어하면 방광·요로 문제일 수 있어 빠른 확인이 필요해요.',
    '활력 저하': '평소보다 많이 처지고 숨거나 반응이 둔하면 통증·발열 신호일 수 있어요.',
  };
  function anaSyms() { return (anaResult && anaResult.syms) || []; }
  function anaKeywords() { const k = []; anaSyms().forEach(s => (SYMPTOM_KW[s] || [s]).forEach(x => k.push(x))); return k; }
  function symptomAdvice() {
    const lines = anaSyms().map(s => SYMPTOM_ADVICE[s]).filter(Boolean);
    if (!lines.length) lines.push('선택한 증상만으로는 원인이 다양할 수 있어요. 언제부터·얼마나 자주인지 함께 살펴보는 게 좋아요.');
    return lines;
  }
  function relatedPosts() { const kws = anaKeywords(); return POSTS.filter(p => { const hay = p.title + ' ' + p.body + ' ' + p.cat; return kws.some(k => hay.includes(k)); }).slice(0, 3); }
  function relatedRecords() {
    const kws = anaKeywords();
    return records.filter(r => { const hay = (r.memo || '') + ' ' + (r.abnormal || '') + ' ' + ((TYPES[r.type] || {}).label || ''); return r.abnormal || kws.some(k => hay.includes(k)); })
      .sort((a, b) => (b.date + b.time).localeCompare(a.date + a.time)).slice(0, 3);
  }
  function symptomSentence() {
    const syms = anaSyms();
    let s = '우리 고양이가 ' + (syms.length ? syms.join(', ') : '이상 증상') + ' 증상이 있어요';
    if (anaResult && anaResult.when) s += ' (' + anaResult.when + '부터)';
    if (anaResult && anaResult.etc) s += '. ' + anaResult.etc;
    return s + '. 어떻게 해야 할까요?';
  }
  function anaRecRow(r) {
    const label = r.abnormal || (TYPES[r.type] || {}).label || '기록';
    return `<button type="button" class="ares-rec" data-rec-detail="${r.id}"><span class="ares-rec__date">${fmtDayLabel(r.date)}</span><span class="ares-rec__txt">${escapeHtml(label)}${r.memo ? ' · ' + escapeHtml(r.memo) : ''}</span><span class="ares-rec__go">›</span></button>`;
  }

  /* ============================================================
     일정 (달력 + 예방접종·병원예약·리마인더)
     ============================================================ */
  const SCHED_CATS = {
    vaccine:  { label: '예방접종', bar: '#2A2A2A' },
    visit:    { label: '병원 예약', bar: '#6E6E6E' },
    reminder: { label: '리마인더', bar: '#A0A0A0' },
    etc:      { label: '기타',     bar: '#C4C4C4' },
  };
  const SCHEDULE = [
    { id: 's1', date: '2026-07-02', cat: 'visit',    title: '건강검진 예약',   sub: '튼튼동물메디컬 · 14:00', tags: ['나', '엄마'], done: false },
    { id: 's2', date: '2026-07-02', cat: 'reminder', title: '심장사상충 예방약', sub: '매월 초 복용',          tags: ['엄마'], done: true },
    { id: 's3', date: '2026-07-05', cat: 'vaccine',  title: '종합백신 4차 접종', sub: '행복동물병원 · 11:00',   tags: ['나', '아빠'], done: false },
    { id: 's4', date: '2026-07-10', cat: 'reminder', title: '사료 주문',        sub: '재고 확인 후 주문',      done: false },
    { id: 's5', date: '2026-07-16', cat: 'visit',    title: '스케일링 상담',     sub: '냥이 고양이 전문의원',    done: false },
    { id: 's6', date: '2026-07-22', cat: 'vaccine',  title: '광견병 예방접종',   sub: '행복동물병원',          done: false },
  ];
  let schedMonth = null;      // 보는 달 (1일 Date)
  let schedSelected = '';     // 선택된 날짜 ISO

  function renderSchedule() {
    const box = $('#scheduleBody');
    if (!box) return;
    if (!schedMonth) { const n = new Date(); schedMonth = new Date(n.getFullYear(), n.getMonth(), 1); }
    if (!schedSelected) schedSelected = todayISO();
    const y = schedMonth.getFullYear(), m = schedMonth.getMonth();
    const firstDow = new Date(y, m, 1).getDay();
    const dim = new Date(y, m + 1, 0).getDate();
    const todayIso = todayISO();
    const evDays = new Set(SCHEDULE.map(s => s.date));
    const dow = ['일', '월', '화', '수', '목', '금', '토'];

    let cells = '';
    for (let i = 0; i < firstDow; i++) cells += `<span class="scal__cell scal__cell--empty"></span>`;
    for (let d = 1; d <= dim; d++) {
      const iso = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const cls = ['scal__cell'];
      if (iso === todayIso) cls.push('is-today');
      if (iso === schedSelected) cls.push('is-sel');
      if (evDays.has(iso)) cls.push('has-ev');
      cells += `<button type="button" class="${cls.join(' ')}" data-sched-day="${iso}">${d}</button>`;
    }

    const sel = new Date(schedSelected + 'T00:00');
    const dayLabel = `${sel.getFullYear()}년 ${sel.getMonth() + 1}월 ${sel.getDate()}일 (${dow[sel.getDay()]})`;
    const dayEvents = SCHEDULE.filter(s => s.date === schedSelected);
    const evHTML = dayEvents.length ? dayEvents.map(s => {
      const c = SCHED_CATS[s.cat];
      return `<div class="sched-ev ${s.done ? 'is-done' : ''}">
        <span class="sched-ev__bar" style="background:${c.bar}"></span>
        <div class="sched-ev__body">
          <span class="sched-ev__cat">${c.label}</span>
          <div class="sched-ev__title">${escapeHtml(s.title)}</div>
          <div class="sched-ev__sub">${escapeHtml([s.time, s.sub].filter(Boolean).join(' · '))}</div>
          ${(s.tags && s.tags.length) ? `<div class="sched-ev__tags">${s.tags.map(n => `<span class="sched-tag"><span class="sched-tag__ava">${escapeHtml(n.slice(0, 1))}</span>${escapeHtml(n)}</span>`).join('')}</div>` : ''}
        </div>
        <button type="button" class="sched-ev__check ${s.done ? 'is-checked' : ''}" data-sched-toggle="${s.id}" aria-label="완료 표시"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></button>
      </div>`;
    }).join('') : `<div class="cd-empty">이 날짜엔 일정이 없어요.</div>`;

    box.innerHTML = `
      <div class="view__head">
        <div>
          <h1 class="view__title">일정</h1>
          <p class="view__sub">예방접종 · 병원 예약 · 리마인더 일정</p>
        </div>
      </div>
      <div class="sched">
        <div class="sched__main">
          <div class="scal">
            <div class="scal__head">
              <button type="button" class="scal__nav" data-sched-nav="-1" aria-label="이전 달">‹</button>
              <div class="scal__title">${y}년 ${m + 1}월</div>
              <button type="button" class="scal__nav" data-sched-nav="1" aria-label="다음 달">›</button>
            </div>
            <div class="scal__grid">
              ${dow.map((x, i) => `<span class="scal__dow${i === 0 ? ' is-sun' : ''}${i === 6 ? ' is-sat' : ''}">${x}</span>`).join('')}
              ${cells}
            </div>
          </div>
        </div>
        <aside class="sched__side">
          <div class="sched__dayhead">${dayLabel}</div>
          <div class="sched__list">${evHTML}</div>
          <button type="button" class="btn btn--primary sched__add" data-sched-add><span class="btn-ic">${ICON.plus}</span> 일정 추가</button>
        </aside>
      </div>`;
  }

  /* 일정 추가 모달 */
  function setSchedDate(iso) {
    const inp = $('#schedDate'); if (inp) inp.value = iso || '';
    const lab = $('#schedDateLabel');
    if (lab) { const d = iso ? new Date(iso + 'T00:00') : null; lab.textContent = d ? `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일` : '날짜 선택'; }
  }
  function setSchedTime(hhmm) {
    const inp = $('#schedTime'); if (inp) inp.value = hhmm || '';
    const lab = $('#schedTimeLabel'); if (lab) lab.textContent = hhmm || '시간 선택';
  }
  /* 나 + 모든 고양이의 가족 구성원(중복 제거) */
  function familyList() {
    const out = [{ key: 'me', name: '나', color: me.color, photo: me.photo }];
    const seen = new Set();
    cats.forEach(c => (c.members || []).forEach(m => {
      const k = memberKey(m);
      if (k && !seen.has(k)) { seen.add(k); out.push({ key: k, name: m.name || m.email, color: memberColor(k) }); }
    }));
    return out;
  }

  function openScheduleModal() {
    const f = $('#scheduleForm'); if (!f) return;
    f.reset();
    $$('#scheduleForm .seg[data-seg="schedcat"] .seg-opt').forEach((b, i) => b.classList.toggle('is-active', i === 0));
    setSchedDate(schedSelected || todayISO());
    setSchedTime('');
    const tagBox = $('#schedTags');
    if (tagBox) tagBox.innerHTML = familyList().map(p =>
      `<button type="button" class="tagchip" data-tag-toggle data-tag-name="${escapeHtml(p.name)}">
        <span class="tagchip__ava${p.photo ? ' has-photo' : ''}" style="${p.photo ? `background-image:url('${p.photo}')` : `background:${p.color}`}">${p.photo ? '' : escapeHtml(p.name.slice(0, 1))}</span>${escapeHtml(p.name)}
      </button>`).join('');
    openModal('scheduleModal');
  }

  /* ============================================================
     커뮤니티 (히어로 캐러셀 + 커뮤니티 카드)
     ============================================================ */
  const COMMUNITIES = [
    { title: '노묘 케어 함께해요', cap: '묘르신이 된 우리 고양이', members: '1.2천' },
    { title: '편식 탈출 프로젝트', cap: '밥 안 먹는 고양이 모여요', members: '860' },
    { title: '다묘 가정 노하우', cap: '여러 냥이와 함께 산다면', members: '2.4천' },
    { title: '길고양이 돌봄', cap: 'TNR·구조 이야기', members: '3.1천' },
    { title: '고양이 행동 상담', cap: '우다다·하악 왜 그럴까?', members: '1.7천' },
    { title: '건강검진 후기', cap: '병원·검사 정보 공유', members: '940' },
  ];
  const COMM_CATS = ['수다', '질문', '자랑', '정보', '입양', '지역'];
  const POSTS = [
    { id: 'p1', author: '봄이언니', cat: '자랑', time: '32분 전', title: '3살 된 나비 생일이에요 🎂', body: '오늘 나비 생일이라 츄르 케이크 만들어줬는데 앞발로 콕콕 찍어먹네요. 다들 생일 어떻게 챙겨주시나요?', likes: 128, liked: false, views: 1040, thumb: true, cmts: [
      { author: '치즈맘', time: '20분 전', text: '헉 너무 귀여워요 ㅠㅠ 우리도 케이크 도전해봐야겠어요!' },
      { author: '무무아빠', time: '18분 전', text: '생일 축하해 나비야 🎉' },
      { author: '보리누나', time: '15분 전', text: '앞발로 찍어먹는 거 상상되네요 ㅋㅋㅋ 완전 복덩이' },
      { author: '두부씨', time: '10분 전', text: '저희는 닭가슴살 삶아서 초 대신 꽂아줬어요!' },
      { author: '랑이집사', time: '7분 전', text: '3살이면 한창 예쁠 때죠 🥹' },
      { author: '콩이맘', time: '4분 전', text: '케이크 레시피 공유 가능할까요? 궁금해요!' },
    ] },
    { id: 'p2', author: '치즈맘', cat: '질문', time: '1시간 전', title: '갑자기 밥을 안 먹어요, 병원 가야 할까요?', body: '어제 저녁부터 사료를 안 먹고 물만 마셔요. 활력은 있는 편인데 하루 더 지켜봐도 될까요?', likes: 41, liked: false, views: 620, thumb: false, cmts: [
      { author: '집사3년차', time: '52분 전', text: '24시간 이상 안 먹으면 병원 가보시는 걸 추천해요. 저희 아이도 그랬는데 구내염이었어요.' },
      { author: '보리누나', time: '45분 전', text: '사료 바꾸신 적 있나요? 저희는 사료 교체 스트레스였어요.' },
      { author: '무무아빠', time: '38분 전', text: '간식은 먹는지 확인해보세요. 간식도 거부하면 확실히 병원행이요.' },
      { author: '호두집사', time: '30분 전', text: '날씨 더워지면 입맛 떨어지기도 해요. 물 자주 갈아주세요.' },
      { author: '두부씨', time: '18분 전', text: '물이라도 마신다니 다행이네요. 그래도 하루 지나면 검진 권장!' },
      { author: '젤리언니', time: '9분 전', text: '토하거나 숨는 증상 있으면 바로 가세요. 걱정되시겠어요 ㅠㅠ' },
    ] },
    { id: 'p3', author: '무무아빠', cat: '정보', time: '3시간 전', title: '겨울철 실내 습도 관리 팁 공유해요', body: '건조하면 고양이도 코가 마르고 헤어볼이 심해지더라구요. 가습기 + 물그릇 위치 바꾸니 확실히 나아졌어요.', likes: 96, liked: false, views: 880, thumb: true, cmts: [
      { author: '봄이언니', time: '2시간 전', text: '오 물그릇 위치도 영향이 있군요! 바로 옮겨볼게요.' },
      { author: '콩이맘', time: '2시간 전', text: '적정 습도 몇 %로 맞추시나요?' },
      { author: '무무아빠', time: '1시간 전', text: '@콩이맘 저는 45~55% 정도로 유지해요.' },
      { author: '집사3년차', time: '1시간 전', text: '헤어볼 줄었다니 저도 가습기 켜야겠어요.' },
      { author: '호두집사', time: '48분 전', text: '정수기 분수형 쓰니까 물 마시는 양이 늘더라구요.' },
      { author: '랑이집사', time: '20분 전', text: '정보 감사합니다 🙏 스크랩해갑니다!' },
    ] },
    { id: 'p4', author: '보리누나', cat: '수다', time: '5시간 전', title: '우리집 고양이는 왜 새벽 3시에 우다다를 할까', body: '분명 낮에 실컷 놀았는데도 새벽만 되면 온 집안을 뛰어다녀요. 다들 그런가요 ㅠㅠ', likes: 210, liked: false, views: 2300, thumb: false, cmts: [
      { author: '치즈맘', time: '4시간 전', text: 'ㅋㅋㅋㅋ 우리집도요 새벽 3시 정각 알람 수준' },
      { author: '두부씨', time: '4시간 전', text: '자기 전에 격하게 놀아주면 좀 줄어요. 사냥놀이 추천!', replies: [
        { author: '보리누나', time: '3시간 전', text: '오 오늘 자기 전에 낚싯대로 제대로 놀려볼게요!' },
        { author: '두부씨', time: '3시간 전', text: '@보리누나 효과 있으면 후기 알려주세요 ㅎㅎ' },
      ] },
      { author: '깜냥러버', time: '3시간 전', text: '야행성이라 어쩔 수 없나봐요 😹 어젯밤 우다다 현장이에요', photo: samplePhoto('#C7C7C7') },
      { author: '봄이언니', time: '2시간 전', text: '자기 전 급여 타이밍 바꾸니 저흰 나아졌어요.' },
      { author: '젤리언니', time: '1시간 전', text: '공감의 눈물... 저는 그냥 포기했습니다' },
      { author: '나비아빠', time: '40분 전', text: '우다다 영상 찍어두면 나중에 개꿀잼이에요 ㅋㅋ' },
    ] },
    { id: 'p5', author: '랑이집사', cat: '입양', time: '어제', title: '[서울] 3개월 아기 고양이 임보처/입양처 구해요', body: '길에서 구조한 아기 고양이예요. 건강검진 완료했고 밥 잘 먹어요. 책임비 없이 좋은 가족 찾습니다.', likes: 74, liked: false, views: 1500, thumb: true, cmts: [
      { author: '콩이맘', time: '20시간 전', text: '너무 예뻐요 ㅠㅠ 성별이 어떻게 되나요?' },
      { author: '랑이집사', time: '19시간 전', text: '@콩이맘 여아예요! 사람 잘 따릅니다.' },
      { author: '호두집사', time: '18시간 전', text: '중성화 전이라면 추후 안내도 부탁드려요.' },
      { author: '무무아빠', time: '12시간 전', text: '좋은 가족 만나길 바랄게요 🙏' },
      { author: '봄이언니', time: '8시간 전', text: '지역이 서울 어디쯤일까요?' },
      { author: '두부씨', time: '3시간 전', text: '홍보 응원합니다! 공유해갈게요.' },
    ] },
    { id: 'p6', author: '두부씨', cat: '지역', time: '어제', title: '강남 근처 괜찮은 고양이 전문 병원 추천받아요', body: '이사 와서 아직 단골 병원이 없어요. 검진 꼼꼼히 봐주는 곳 있을까요?', likes: 33, liked: false, views: 540, thumb: false, cmts: [
      { author: '집사3년차', time: '22시간 전', text: '테헤란로 쪽 행복동물병원 검진 꼼꼼해요.' },
      { author: '치즈맘', time: '20시간 전', text: '저는 24시 우리동물의료센터 다녀요. 야간에도 가능!' },
      { author: '젤리언니', time: '15시간 전', text: '예약제라 대기 짧은 곳이 좋더라구요.' },
      { author: '봄이언니', time: '10시간 전', text: '고양이 친화(캣 프렌들리) 인증 병원 찾아보세요.' },
      { author: '나비아빠', time: '6시간 전', text: '스케일링 잘하는 곳도 미리 알아두면 좋아요.' },
      { author: '두부씨', time: '2시간 전', text: '다들 감사합니다! 하나씩 가볼게요 🙇' },
    ] },
    { id: 'p7', author: '깜냥러버', cat: '자랑', time: '2일 전', title: '창밖 구경하는 뒷모습이 너무 귀여워서', body: '햇살 맞으면서 새 구경하는데 실루엣이 예술이에요. 자랑 좀 하겠습니다 😻', likes: 187, liked: false, views: 1980, thumb: true, cmts: [
      { author: '보리누나', time: '2일 전', text: '뒷모습 미남/미녀네요 😻' },
      { author: '콩이맘', time: '2일 전', text: '햇살 맞는 고양이는 국룰 귀여움이죠' },
      { author: '호두집사', time: '1일 전', text: '캣타워 창가에 두니 하루종일 봐요 ㅋㅋ' },
      { author: '치즈맘', time: '1일 전', text: '액자 같아요 진짜 예쁘다' },
      { author: '무무아빠', time: '22시간 전', text: '새 구경 = 고양이 넷플릭스 ㅋㅋㅋ' },
      { author: '젤리언니', time: '10시간 전', text: '심장 폭행이네요… 저장했습니다' },
    ] },
    { id: 'p8', author: '집사3년차', cat: '정보', time: '3일 전', title: '사료 알레르기 확인하는 방법 정리', body: '단백질원 하나씩 바꿔가며 2주씩 관찰하는 제한급식 후기예요. 우리 아이는 닭에서 반응이 있었어요.', likes: 142, liked: false, views: 1220, thumb: false, cmts: [
      { author: '두부씨', time: '3일 전', text: '제한급식 2주 기준 유용하네요. 저장!' },
      { author: '봄이언니', time: '3일 전', text: '닭 알레르기 은근 많다더라구요. 저희도 의심 중이에요.' },
      { author: '나비아빠', time: '2일 전', text: '증상은 주로 어떤 식으로 나타났나요?' },
      { author: '집사3년차', time: '2일 전', text: '@나비아빠 턱드름이랑 귀 긁음이 심했어요.' },
      { author: '콩이맘', time: '1일 전', text: '가수분해 사료도 병행하면 도움 돼요.' },
      { author: '호두집사', time: '5시간 전', text: '좋은 정보 감사합니다 🙏 실천해볼게요.' },
    ] },
  ];
  // 예시 글의 소속 커뮤니티(COMMUNITIES 인덱스) 매핑 — 게시판이 비지 않게
  const POST_COMM = { p1: 0, p2: 1, p3: 2, p4: 4, p5: 3, p6: 5, p7: 0, p8: 1 };
  let commCat = 'all';
  let commSort = 'hot';
  let commTopic = null;     // null=전체 피드 / 숫자=그 커뮤니티 게시판
  let postWritePhoto = '';  // 글쓰기 첨부 사진(dataURL)
  let detailPostId = null;
  let postReplyTo = null;   // 인라인 대댓글 입력창이 열린 댓글 index (null=닫힘)
  let postCmtPhoto = '';    // 작성 중 댓글 첨부 사진(dataURL)
  let postReplyPhoto = '';  // 작성 중 대댓글 첨부 사진(dataURL)
  const postCmtCount = p => (p.cmts || []).reduce((n, c) => n + 1 + ((c.replies && c.replies.length) || 0), 0);

  // "32분 전" 같은 예시 문자열 → 분(minutes)
  function agoMinutes(str) {
    if (!str) return 0;
    if (str.indexOf('방금') >= 0) return 0;
    let m;
    if ((m = str.match(/(\d+)\s*분/))) return +m[1];
    if ((m = str.match(/(\d+)\s*시간/))) return +m[1] * 60;
    if (str.indexOf('어제') >= 0) return 26 * 60;
    if ((m = str.match(/(\d+)\s*일/))) return +m[1] * 24 * 60;
    return 0;
  }
  // 작성 시각(ts) → 최근이면 상대시간, 7일 지나면 정확한 날짜
  function feedTime(ts) {
    if (!ts) return '';
    const diffMin = Math.floor((Date.now() - ts) / 60000);
    if (diffMin < 1) return '방금';
    if (diffMin < 60) return diffMin + '분 전';
    const h = Math.floor(diffMin / 60);
    if (h < 24) return h + '시간 전';
    const d = Math.floor(h / 24);
    if (d === 1) return '어제';
    if (d < 7) return d + '일 전';
    const dt = new Date(ts), now = new Date();
    return dt.getFullYear() === now.getFullYear()
      ? (dt.getMonth() + 1) + '월 ' + dt.getDate() + '일'
      : dt.getFullYear() + '년 ' + (dt.getMonth() + 1) + '월 ' + dt.getDate() + '일';
  }
  // 예시 데이터의 상대시간 문자열을 1회 실제 타임스탬프로 변환
  function normalizePostTimes() {
    const now = Date.now();
    POSTS.forEach(p => {
      if (p.comm == null && POST_COMM[p.id] != null) p.comm = POST_COMM[p.id];
      if (p.ts == null) p.ts = now - agoMinutes(p.time) * 60000;
      (p.cmts || []).forEach(c => {
        if (c.ts == null) c.ts = now - agoMinutes(c.time) * 60000;
        (c.replies || []).forEach(r => { if (r.ts == null) r.ts = now - agoMinutes(r.time) * 60000; });
      });
    });
  }
  const svgHeart = liked => `<svg class="ic" viewBox="0 0 24 24" fill="${liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>`;
  const svgBubble = `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 5h14a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 16h-6l-4.5 3.5V16H5a1.5 1.5 0 0 1-1.5-1.5v-8A1.5 1.5 0 0 1 5 5Z"/></svg>`;
  const svgEye = `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="2.6"/></svg>`;
  const svgShare = `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.8 15.7 6.4M8.3 13.2l7.4 4.4"/></svg>`;
  const svgImage = `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="14" rx="2.5"/><path d="M3.5 16l4.5-4 3 2.5L15 9l5.5 6"/><circle cx="9" cy="10" r="1.4"/></svg>`;

  function postCardHTML(p) {
    return `
      <article class="post${p.thumb ? ' post--thumb' : ''}" data-post="${p.id}">
        <div class="post__head">
          <span class="post__ava" style="background:${memberColor(p.author)}">${escapeHtml(p.author.slice(0, 1))}</span>
          <span class="post__author">${escapeHtml(p.author)}</span>
          <span class="post__badge">${escapeHtml(p.cat)}</span>
          <span class="post__time">${escapeHtml(feedTime(p.ts))}</span>
        </div>
        <div class="post__wrap">
          <div class="post__text">
            <h3 class="post__title">${escapeHtml(p.title)}</h3>
            <p class="post__body">${escapeHtml(p.body)}</p>
          </div>
          ${p.thumb ? `<span class="post__thumb"${p.photo ? ` style="background-image:url('${p.photo}')"` : ''}></span>` : ''}
        </div>
        <div class="post__foot">
          <button type="button" class="post__stat ${p.liked ? 'is-liked' : ''}" data-post-like="${p.id}">${svgHeart(p.liked)} ${p.likes}</button>
          <span class="post__stat">${svgBubble} ${postCmtCount(p)}</span>
          <span class="post__stat">${svgEye} ${p.views}</span>
        </div>
      </article>`;
  }

  function renderCommunity() {
    const box = $('#communityBody');
    if (!box) return;
    const sortBtns = `
      <div class="seg-filter cfeed-sort">
        <button type="button" class="${commSort === 'hot' ? 'is-active' : ''}" data-cfeed-sort="hot">인기</button>
        <button type="button" class="${commSort === 'new' ? 'is-active' : ''}" data-cfeed-sort="new">최신</button>
      </div>`;
    const sortFn = (a, b) => commSort === 'hot' ? b.likes - a.likes : (b.ts || 0) - (a.ts || 0);

    // ── 게시판 모드 (특정 커뮤니티) ──
    if (commTopic != null && COMMUNITIES[commTopic]) {
      const c = COMMUNITIES[commTopic];
      const posts = POSTS.filter(p => p.comm === commTopic).sort(sortFn);
      const list = posts.length ? posts.map(postCardHTML).join('') : `<div class="cd-empty">아직 글이 없어요. 첫 글을 남겨보세요.</div>`;
      box.innerHTML = `
        <button class="cd-back" data-comm-back><span class="cd-back__ic">${ICON.arrow}</span> 커뮤니티</button>
        <header class="cboard-head">
          <div class="cboard-head__info">
            <h2 class="cboard-head__name">${escapeHtml(c.title)}</h2>
            <p class="cboard-head__desc">${escapeHtml(c.cap)}</p>
            <span class="cboard-head__meta">멤버 ${escapeHtml(c.members)}명</span>
          </div>
          <div class="cboard-head__acts">
            <button type="button" class="btn btn--ghost" data-comm-join>가입</button>
            <button type="button" class="btn btn--primary" data-post-write><span class="btn-ic">${ICON.plus}</span> 글쓰기</button>
          </div>
        </header>
        ${sortBtns}
        <div class="cfeed-list">${list}</div>`;
      return;
    }

    // ── 전체 피드 모드 ──
    const tabs = ['all', ...COMM_CATS].map(cc =>
      `<button type="button" class="hd-chip ${commCat === cc ? 'is-active' : ''}" data-cfeed-cat="${cc}">${cc === 'all' ? '전체' : cc}</button>`).join('');
    let visible = POSTS.filter(p => commCat === 'all' ? true : p.cat === commCat).sort(sortFn);
    const feed = visible.length ? visible.map(postCardHTML).join('') : `<div class="cd-empty">이 카테고리엔 아직 글이 없어요.</div>`;

    const popList = COMMUNITIES.map((c, i) => `
      <button type="button" class="cpop" data-comm-open="${i}">
        <span class="cpop__rank">${i + 1}</span>
        <span class="cpop__body"><span class="cpop__name">${escapeHtml(c.title)}</span><span class="cpop__meta">멤버 ${escapeHtml(c.members)}명</span></span>
      </button>`).join('');
    const topPosts = POSTS.slice().sort((a, b) => b.likes - a.likes).slice(0, 3).map((p, i) => `
      <button type="button" class="ctop" data-post="${p.id}"><span class="ctop__rank">${i + 1}</span><span class="ctop__title">${escapeHtml(p.title)}</span></button>`).join('');

    box.innerHTML = `
      <div class="view__head">
        <div>
          <h1 class="view__title">커뮤니티</h1>
          <p class="view__sub">고양이 집사들과 정보를 나누고 소통하세요</p>
        </div>
      </div>
      <div class="cfeed-top">
        <div class="hd-chips cfeed-tabs">${tabs}</div>
      </div>
      <div class="cfeed-sortbar">
        ${sortBtns}
        <button type="button" class="btn btn--primary cfeed-write" data-post-write><span class="btn-ic">${ICON.plus}</span> 글쓰기</button>
      </div>
      <div class="cfeed">
        <div class="cfeed__main">
          <div class="cfeed-list">${feed}</div>
        </div>
        <aside class="cfeed__side">
          <section class="cwidget">
            <h3 class="cwidget__title">인기 커뮤니티</h3>
            <div class="cpop-list">${popList}</div>
            <button type="button" class="btn btn--ghost btn--block cwidget__cta" data-comm-create><span class="btn-ic">${ICON.plus}</span> 커뮤니티 만들기</button>
          </section>
          <section class="cwidget">
            <h3 class="cwidget__title">이번 주 인기글</h3>
            <div class="ctop-list">${topPosts}</div>
          </section>
        </aside>
      </div>`;
  }

  /* 글쓰기 (공통 부품) */
  function updatePostWritePreview() {
    const box = $('#postWritePreview'); if (!box) return;
    if (postWritePhoto) { box.hidden = false; box.innerHTML = `<div class="pcmt-preview__img" style="background-image:url('${postWritePhoto}')"><button type="button" data-post-write-photo-rm aria-label="사진 삭제">${ICON.close}</button></div>`; }
    else { box.hidden = true; box.innerHTML = ''; }
  }
  function openPostWrite(preset) {
    preset = preset || {};
    const f = $('#postForm'); if (!f) return;
    f.reset();
    postWritePhoto = '';
    const sel = $('#postCommSelect');
    if (sel) { sel.innerHTML = `<option value="">커뮤니티 선택 안 함</option>` + COMMUNITIES.map((c, i) => `<option value="${i}">${escapeHtml(c.title)}</option>`).join(''); if (preset.comm != null) sel.value = String(preset.comm); }
    $$('#postForm [data-write-cat]').forEach(b => b.classList.toggle('is-active', b.dataset.writeCat === (preset.cat || '')));
    $('#postTitle').value = preset.title || '';
    $('#postBody').value = preset.body || '';
    updatePostWritePreview();
    openModal('postModal');
  }
  function openCommunityCreate() {
    const f = $('#communityCreateForm'); if (f) f.reset();
    openModal('communityCreateModal');
  }

  /* 게시글 상세 */
  function openPost(id) {
    detailPostId = id;
    postReplyTo = null; postCmtPhoto = ''; postReplyPhoto = '';
    const p = POSTS.find(x => x.id === id);
    if (p) p.views += 1;
    renderPostDetail();
    switchView('postdetail');
  }

  // 댓글/대댓글 한 개 마크업
  function pcmtHTML(c, reply) {
    return `<div class="pcmt${reply ? ' pcmt--reply' : ''}">
      <span class="pcmt__ava" style="background:${memberColor(c.author)}">${escapeHtml((c.author || '?').slice(0, 1))}</span>
      <div class="pcmt__body">
        <div class="pcmt__head"><span class="pcmt__name">${escapeHtml(c.author || '')}</span><span class="pcmt__time">${escapeHtml(feedTime(c.ts))}</span></div>
        ${c.text ? `<div class="pcmt__text">${escapeHtml(c.text)}</div>` : ''}
        ${c.photo ? `<div class="pcmt__photo" style="background-image:url('${c.photo}')"></div>` : ''}
        ${reply ? '' : `<button type="button" class="pcmt__reply ${postReplyTo === c.__i ? 'is-open' : ''}" data-post-reply="${c.__i}">답글</button>`}
        ${(!reply && c.replies && c.replies.length) ? `<div class="pcmt-replies">${c.replies.map(r => pcmtHTML(r, true)).join('')}</div>` : ''}
        ${(!reply && postReplyTo === c.__i) ? replyComposerHTML(c.__i) : ''}
      </div>
    </div>`;
  }

  // 인라인 대댓글 입력창 (댓글 바로 아래)
  function replyComposerHTML(i) {
    return `<div class="preply">
      <div class="pcmt-preview" id="postReplyPreview" ${postReplyPhoto ? '' : 'hidden'}>${postReplyPhoto ? `<div class="pcmt-preview__img" style="background-image:url('${postReplyPhoto}')"><button type="button" data-post-reply-photo-rm aria-label="사진 삭제">${ICON.close}</button></div>` : ''}</div>
      <div class="pcmt-add">
        <button type="button" class="pcmt-photobtn" id="postReplyPhotoBtn" aria-label="사진 첨부">${svgImage}</button>
        <input type="text" id="postReplyInput" placeholder="답글을 입력해 보세요" autocomplete="off" />
        <button type="button" class="btn btn--primary" data-reply-submit="${i}">등록</button>
        <button type="button" class="btn btn--ghost preply__cancel" data-reply-cancel>취소</button>
      </div>
    </div>`;
  }

  function renderPostDetail() {
    const box = $('#postDetailBody');
    if (!box) return;
    const p = POSTS.find(x => x.id === detailPostId);
    if (!p) { box.innerHTML = ''; return; }
    const cmts = p.cmts || [];
    const total = postCmtCount(p);
    const cmtHTML = cmts.length
      ? cmts.map((c, i) => pcmtHTML(Object.assign({ __i: i }, c), false)).join('')
      : `<div class="cd-empty">아직 댓글이 없어요. 첫 댓글을 남겨보세요.</div>`;

    box.innerHTML = `
      <button class="cd-back" data-view="community"><span class="cd-back__ic">${ICON.arrow}</span> 커뮤니티</button>
      <article class="pdetail">
        <div class="post__head">
          <span class="post__ava" style="background:${memberColor(p.author)}">${escapeHtml(p.author.slice(0, 1))}</span>
          <span class="post__author">${escapeHtml(p.author)}</span>
          <span class="post__badge">${escapeHtml(p.cat)}</span>
          <span class="post__time">${escapeHtml(feedTime(p.ts))}</span>
        </div>
        <h1 class="pdetail__title">${escapeHtml(p.title)}</h1>
        <p class="pdetail__body">${escapeHtml(p.body)}</p>
        ${p.thumb ? `<div class="pdetail__thumb"></div>` : ''}
        <div class="pdetail__foot">
          <button type="button" class="post__stat ${p.liked ? 'is-liked' : ''}" data-post-like="${p.id}">${svgHeart(p.liked)} ${p.likes}</button>
          <span class="post__stat">${svgBubble} ${total}</span>
          <span class="post__stat">${svgEye} ${p.views}</span>
          <button type="button" class="post__stat pdetail__share" data-post-share>${svgShare} 공유</button>
        </div>
      </article>
      <section class="pdetail-cmts">
        <h3 class="cwidget__title">댓글 ${total}</h3>
        <div class="pcmt-list">${cmtHTML}</div>
        <div class="pcmt-compose">
          <div class="pcmt-preview" id="pcmtPreview" ${postCmtPhoto ? '' : 'hidden'}>${postCmtPhoto ? `<div class="pcmt-preview__img" style="background-image:url('${postCmtPhoto}')"><button type="button" data-post-cmt-photo-rm aria-label="사진 삭제">${ICON.close}</button></div>` : ''}</div>
          <div class="pcmt-add">
            <button type="button" class="pcmt-photobtn" id="postCmtPhotoBtn" aria-label="사진 첨부">${svgImage}</button>
            <input type="text" id="postCommentInput" placeholder="댓글을 입력해 보세요" autocomplete="off" />
            <button type="button" class="btn btn--primary" data-post-comment="${p.id}">등록</button>
          </div>
        </div>
      </section>`;
  }

  function updatePostCmtPreview() {
    const box = $('#pcmtPreview'); if (!box) return;
    if (postCmtPhoto) { box.hidden = false; box.innerHTML = `<div class="pcmt-preview__img" style="background-image:url('${postCmtPhoto}')"><button type="button" data-post-cmt-photo-rm aria-label="사진 삭제">${ICON.close}</button></div>`; }
    else { box.hidden = true; box.innerHTML = ''; }
  }
  function updateReplyPreview() {
    const box = $('#postReplyPreview'); if (!box) return;
    if (postReplyPhoto) { box.hidden = false; box.innerHTML = `<div class="pcmt-preview__img" style="background-image:url('${postReplyPhoto}')"><button type="button" data-post-reply-photo-rm aria-label="사진 삭제">${ICON.close}</button></div>`; }
    else { box.hidden = true; box.innerHTML = ''; }
  }

  /* ============================================================
     유기묘 입양 / PurrCare 쇼핑 / AI 집사 매칭 (데모)
     ============================================================ */
  const ADOPTS = [
    { name: '보리', age: '3개월', gender: '여아', region: '서울 강남', shelter: '행복보호소', desc: '사람 손 잘 타고 애교가 많아요. 건강검진 완료.', tags: ['애교많음', '건강검진완료'], story: '길에서 구조된 뒤 임시보호를 거치며 사람 손을 잘 타게 됐어요. 무릎에 올라와 골골거리는 걸 좋아하고, 장난감으로 놀아주면 하루 종일도 뛰어놀 수 있는 활발한 아이예요. 기초 예방접종과 건강검진을 모두 마쳤습니다.' },
    { name: '모카', age: '1살', gender: '남아', region: '경기 성남', shelter: '냥이쉼터', desc: '중성화 완료. 다른 고양이와도 잘 지내요.', tags: ['중성화완료', '다묘가능'], story: '온순하고 붙임성이 좋아 다른 고양이들과도 금방 친해지는 아이예요. 중성화 수술을 마쳤고 사회성이 좋아 다묘 가정에도 잘 적응합니다. 사람을 무서워하지 않고 먼저 다가와 인사해요.' },
    { name: '설기', age: '5개월', gender: '여아', region: '서울 마포', shelter: '길냥이구조대', desc: '겁이 조금 많지만 금방 마음을 열어요.', tags: ['소심한', '예방접종완료'], story: '처음엔 낯을 조금 가리지만 익숙해지면 세상 애교쟁이가 되는 반전 매력의 아이예요. 조용한 환경에서 천천히 교감해 줄 가족을 기다리고 있어요. 예방접종을 마쳤습니다.' },
    { name: '까망', age: '2살', gender: '남아', region: '인천 부평', shelter: '평화동물보호소', desc: '조용하고 얌전한 성격. 성묘 입양 추천해요.', tags: ['얌전한', '성묘'], story: '차분하고 독립적인 성격이라 바쁜 집사님과도 잘 맞아요. 스크래처와 창가 자리만 있으면 혼자서도 잘 지내는 어른 고양이예요. 조용한 하루를 함께할 가족을 찾고 있어요.' },
    { name: '루나', age: '4개월', gender: '여아', region: '서울 송파', shelter: '행복보호소', desc: '활발하고 사냥놀이를 좋아하는 개구쟁이.', tags: ['활발한', '건강검진완료'], story: '에너지가 넘치는 개구쟁이 아기 고양이예요. 깃털 낚싯대만 보면 눈이 반짝반짝. 함께 놀아주는 걸 좋아하는 활동적인 가족에게 딱이에요. 건강검진을 마쳤습니다.' },
    { name: '치노', age: '8개월', gender: '남아', region: '경기 고양', shelter: '냥이쉼터', desc: '무릎냥이. 사람을 정말 좋아해요.', tags: ['무릎냥이', '중성화완료'], story: '사람을 정말 좋아하는 껌딱지 무릎냥이예요. 집사님이 앉기만 하면 어느새 무릎 위로 올라와 골골송을 불러줘요. 애정 표현이 풍부해 첫 반려묘로도 추천합니다.' },
  ];
  const PRODUCTS = [
    { name: '그레인프리 연어 사료 2kg', price: 28900, cat: '사료', tag: '베스트' },
    { name: '벤토나이트 고양이 모래 10kg', price: 15900, cat: '모래' },
    { name: '깃털 낚싯대 장난감', price: 6900, cat: '장난감' },
    { name: '동결건조 닭가슴살 간식', price: 12900, cat: '간식', tag: '인기' },
    { name: '원목 스크래처', price: 24500, cat: '용품' },
    { name: '3단 캣타워', price: 59000, cat: '용품' },
    { name: '자동 급수기', price: 33000, cat: '용품' },
    { name: '헤어볼 케어 간식', price: 9900, cat: '간식' },
    { name: '치석 케어 사료 1.5kg', price: 21500, cat: '사료' },
    { name: '숨숨집 하우스', price: 18900, cat: '용품', tag: '신상' },
  ];
  const SHOP_CATS = ['사료', '모래', '장난감', '간식', '용품'];
  let shopCat = 'all';
  const FRIENDS = [
    { name: '치즈맘', cat: '치즈 · 먼치킨 2살', match: 92, common: ['비슷한 기상 시간', '습식 위주 급여', '실내 놀이 선호'] },
    { name: '무무아빠', cat: '무무 · 러시안블루 4살', match: 87, common: ['다묘 가정', '정기 건강검진', '체중 관리 중'] },
    { name: '보리누나', cat: '보리 · 코숏 1살', match: 81, common: ['활동량 많은 아이', '자동 급수기 사용'] },
    { name: '두부씨', cat: '두부 · 스코티시폴드 3살', match: 78, common: ['같은 지역(강남)', '노즈워크 놀이'] },
  ];

  let adoptRegion = 'all';
  const adoptFav = new Set();
  const friendsAdded = new Set();
  const adoptHeart = fav => `<svg class="ic" viewBox="0 0 24 24" fill="${fav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>`;
  const adoptFaceTone = i => ['var(--ink-soft)', 'var(--ink-faint)', 'var(--line-strong)'][i % 3];
  const adoptRegionOf = a => a.region.split(' ')[0];
  function adoptRegions() {
    const seen = [];
    ADOPTS.forEach(a => { const r = adoptRegionOf(a); if (!seen.includes(r)) seen.push(r); });
    return seen;
  }
  function adoptBadges(a) {
    return [a.age, a.gender, ...(a.tags || [])].map(t => `<span class="acard__badge">${escapeHtml(t)}</span>`).join('');
  }
  function adoptFaceHTML(i, lg) {
    return `<div class="acard__face${lg ? ' acard__face--lg' : ''}" style="color:${adoptFaceTone(i)}">${CAT_FACE}</div>`;
  }

  function renderAdopt() {
    const box = $('#adoptBody');
    if (!box) return;
    const chips = ['all', ...adoptRegions()].map(r =>
      `<button type="button" class="hd-chip ${adoptRegion === r ? 'is-active' : ''}" data-adopt-region="${r}">${r === 'all' ? '전체' : r}</button>`).join('');
    const cards = ADOPTS
      .map((a, i) => ({ a, i }))
      .filter(({ a }) => adoptRegion === 'all' || adoptRegionOf(a) === adoptRegion)
      .map(({ a, i }) => `
        <article class="acard" data-adopt-open="${i}">
          <div class="acard__photo acard__photo--${i % 3}">
            ${adoptFaceHTML(i)}
            <button type="button" class="acard__fav ${adoptFav.has(i) ? 'is-on' : ''}" data-adopt-fav="${i}" aria-label="찜하기">${adoptHeart(adoptFav.has(i))}</button>
          </div>
          <div class="acard__body">
            <h3 class="acard__name">${escapeHtml(a.name)}</h3>
            <div class="acard__badges">${adoptBadges(a)}</div>
            <div class="acard__where">${escapeHtml(a.region)} · ${escapeHtml(a.shelter)}</div>
            <p class="acard__desc">${escapeHtml(a.desc)}</p>
          </div>
          <div class="acard__foot">
            <button type="button" class="btn btn--primary btn--block" data-adopt-inquiry="${i}">입양 문의</button>
          </div>
        </article>`).join('');
    box.innerHTML = `
      <div class="view__head">
        <div>
          <h1 class="view__title">유기묘 입양</h1>
          <p class="view__sub">가족을 기다리는 아이들이에요</p>
        </div>
      </div>
      <div class="adopt-filter">${chips}</div>
      <div class="adopt-grid">${cards}</div>
      <p class="hd-note">* 예시 데이터예요. 실제 입양은 보호소를 통해 진행됩니다.</p>`;
  }

  function openAdoptDetail(i) {
    const a = ADOPTS[i];
    const body = $('#adoptDetailBody');
    if (!a || !body) return;
    const fav = adoptFav.has(i);
    body.innerHTML = `
      <div class="adopt-detail__photo acard__photo--${i % 3}">${adoptFaceHTML(i, true)}</div>
      <div class="adopt-detail__info">
        <h2 class="adopt-detail__name">${escapeHtml(a.name)}</h2>
        <div class="acard__badges">${adoptBadges(a)}</div>
        <div class="adopt-detail__where">${escapeHtml(a.region)} · ${escapeHtml(a.shelter)}</div>
        <p class="adopt-detail__story">${escapeHtml(a.story || a.desc)}</p>
        <div class="adopt-detail__acts">
          <button type="button" class="btn btn--ghost adopt-detail__fav ${fav ? 'is-on' : ''}" data-adopt-fav="${i}">${adoptHeart(fav)} ${fav ? '찜 완료' : '찜하기'}</button>
          <button type="button" class="btn btn--primary" data-adopt-inquiry="${i}">입양 문의</button>
        </div>
      </div>`;
    openModal('adoptModal');
  }

  function renderShop() {
    const box = $('#shopBody');
    if (!box) return;
    const tabs = ['all', ...SHOP_CATS].map(c => `<button type="button" class="hd-chip ${shopCat === c ? 'is-active' : ''}" data-shop-cat="${c}">${c === 'all' ? '전체' : c}</button>`).join('');
    const list = PRODUCTS.filter(p => shopCat === 'all' || p.cat === shopCat);
    const cards = list.map((p, i) => { const oi = PRODUCTS.indexOf(p); return `
      <div class="prod-card" data-shop-open="${oi}">
        <span class="prod-card__img">${p.tag ? `<span class="prod-card__tag">${escapeHtml(p.tag)}</span>` : ''}</span>
        <div class="prod-card__cat">${escapeHtml(p.cat)}</div>
        <div class="prod-card__name">${escapeHtml(p.name)}</div>
        <div class="prod-card__foot"><span class="prod-card__price">${p.price.toLocaleString()}원</span><button type="button" class="prod-card__add" data-shop-add="${oi}" aria-label="담기">${ICON.plus}</button></div>
      </div>`; }).join('');
    box.innerHTML = `
      <header class="hd-head shop-head">
        <div>
          <h2 class="hd-head__title">PurrCare 쇼핑</h2>
          <p class="hd-head__sub">우리 아이를 위한 엄선한 용품</p>
        </div>
        <button type="button" class="shop-cart" data-shop-cart aria-label="장바구니"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 6h15l-1.5 9.5a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7L5 4H3"/><circle cx="9" cy="20" r="1.3"/><circle cx="16" cy="20" r="1.3"/></svg><span class="shop-cart__n" id="shopCartN">${shopCart}</span></button>
      </header>
      <div class="hd-chips shop-tabs">${tabs}</div>
      <div class="prod-grid">${cards}</div>
      <p class="hd-note">* 예시 상품이에요. 실제 결제·배송은 준비 중입니다.</p>`;
  }

  function renderFriends() {
    const box = $('#friendsBody');
    if (!box) return;
    const cards = FRIENDS.map((f, i) => `
      <div class="friend-card">
        <span class="friend-card__ava" style="background:${memberColor(f.name)}">${escapeHtml(f.name.slice(0, 1))}</span>
        <div class="friend-card__body">
          <div class="friend-card__top"><span class="friend-card__name">${escapeHtml(f.name)}</span><span class="friend-card__match">${f.match}% 일치</span></div>
          <div class="friend-card__cat">${escapeHtml(f.cat)}</div>
          <div class="friend-card__tags">${f.common.map(c => `<span class="friend-card__tag">${escapeHtml(c)}</span>`).join('')}</div>
        </div>
        <button type="button" class="btn ${friendsAdded.has(i) ? 'btn--ghost' : 'btn--primary'} btn--sm friend-card__btn" data-friend-add="${i}">${friendsAdded.has(i) ? '추가됨' : '친구 추가'}</button>
      </div>`).join('');
    box.innerHTML = `
      <button class="cd-back" data-view="mypage"><span class="cd-back__ic">${ICON.arrow}</span> 마이페이지</button>
      <header class="hd-head">
        <h2 class="hd-head__title">AI 집사 매칭</h2>
        <p class="hd-head__sub">우리 아이와 라이프스타일이 비슷한 집사를 찾았어요</p>
      </header>
      <div class="friend-list">${cards}</div>
      <p class="hd-note">* 데모 화면이에요. 실제 매칭·친구 기능은 준비 중입니다.</p>`;
  }

  let shopCart = 0;

  /* ----- 기록 모달: 고양이 선택 옵션 ----- */
  function renderRecCatOptions() {
    const sel = $('#recCat');
    if (!cats.length) {
      sel.innerHTML = `<option value="">먼저 고양이를 등록하세요</option>`;
      return;
    }
    sel.innerHTML = cats.map(c => `<option value="${c.id}">${escapeHtml(c.name)}</option>`).join('');
  }

  /* ----- 기록 종류 선택 UI ----- */
  function renderRecForm() {
    renderRecGroups();
    renderRecCats();
    renderRecSubtype();
    $('#abnormalField').style.display = selectedGroup === 'health' ? '' : 'none';
  }
  function renderRecGroups() {
    $$('#recordForm .rec-group').forEach(b => b.classList.toggle('is-active', b.dataset.group === selectedGroup));
  }
  function renderRecCats() {
    const box = $('#recCats');
    box.innerHTML = REC_GROUPS[selectedGroup].map(k =>
      `<button type="button" class="rec-cat ${k === selectedType ? 'is-active' : ''}" data-reccat="${k}">${TYPES[k].label}</button>`
    ).join('');
  }
  function renderRecSubtype() {
    const label = TYPES[selectedType].label;
    $('#subtypeLabel').textContent = `${label} 유형`;
    $('#timeLabel').textContent = `${label} 시간`;
    const subs = REC_SUBTYPES[selectedType] || [];
    $('#recSubtype').innerHTML =
      `<option value="">${label} 유형을 선택해주세요.</option>` +
      subs.map(t => `<option value="${t}">${t}</option>`).join('');
    $('#recAbnormal').innerHTML =
      `<option value="">이상 증상을 선택해주세요.</option>` +
      ABNORMAL_OPTS.map(o => `<option value="${o}">${o}</option>`).join('');
  }

  /* ============================================================
     화면 전환 (SPA)
     ============================================================ */
  const VIEW_TITLES = { dashboard: '홈', cats: '내 고양이', records: '기록', health: '건강', schedule: '일정', community: '커뮤니티', mypage: '마이페이지', notif: '알림', settings: '설정' };
  function switchView(view) {
    $$('.view').forEach(v => v.classList.toggle('is-active', v.id === 'view-' + view));
    $$('.nav-item[data-view], .botnav__item[data-view]').forEach(n => n.classList.toggle('is-active', n.dataset.view === view));
    if (view === 'community') renderCommunity();   // 상세에서 돌아올 때 최신 좋아요·댓글·조회 반영
    const sm = $('.shell-main');
    if (sm) { sm.classList.toggle('no-fab', view === 'community' || view === 'postdetail'); sm.classList.toggle('on-shop', view === 'shop'); }
    const title = $('#pageTitle');
    if (title) title.textContent = VIEW_TITLES[view] || '';
    closeSidebar();
    const main = $('.main');
    if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ============================================================
     사이드바 (모바일)
     ============================================================ */
  function openSidebar() { const s = $('#sidebar'); if (s) s.classList.add('is-open'); const sc = $('#scrim'); if (sc) sc.classList.add('is-open'); }
  function closeSidebar() { const s = $('#sidebar'); if (s) s.classList.remove('is-open'); const sc = $('#scrim'); if (sc) sc.classList.remove('is-open'); }

  /* ============================================================
     모달 제어
     ============================================================ */
  function openModal(id) { $('#' + id).classList.add('is-open'); $('#' + id).setAttribute('aria-hidden', 'false'); }
  function closeModal(el) { el.classList.remove('is-open'); el.setAttribute('aria-hidden', 'true'); }
  function closeAllModals() { $$('.modal').forEach(closeModal); }

  function openCatModal() {
    $('#catForm').reset();
    selectedColor = CAT_COLORS[cats.length % CAT_COLORS.length];
    selectedGender = '';
    selectedNeutered = '';
    selectedPhoto = '';
    weightUnknown = false;
    $$('#catForm .seg-opt').forEach(b => b.classList.remove('is-active'));
    $('#weightDunno').classList.remove('is-active');
    const w = $('#catWeight'); w.disabled = false; w.value = '';
    updatePhotoPreview();
    openModal('catModal');
  }

  /* 사진 미리보기 갱신 (없으면 고양이 얼굴 색) */
  function updatePhotoPreview() {
    const box = $('#catPhotoPreview');
    if (!box) return;
    if (selectedPhoto) { box.style.backgroundImage = `url('${selectedPhoto}')`; box.classList.add('has-photo'); }
    else { box.style.backgroundImage = 'none'; box.classList.remove('has-photo'); }
  }

  function openRecordModal(presetType, editId) {
    if (!cats.length) {
      toast('먼저 고양이를 등록해주세요');
      switchView('cats');
      openCatModal();
      return;
    }
    $('#recordForm').reset();
    const edit = editId ? records.find(r => r.id === editId) : null;
    editingRecId = edit ? edit.id : null;
    $('#recordModal .modal__title').textContent = edit ? '기록 수정' : '기록 작성';
    $('#recordModal button[type="submit"]').textContent = edit ? '수정 완료' : '기록하기';

    if (edit) { selectedGroup = edit.group || (TYPES[edit.type] || {}).group || 'health'; selectedType = edit.type; }
    else if (presetType && REC_SUBTYPES[presetType]) { selectedType = presetType; selectedGroup = TYPES[presetType].group; }
    else { selectedGroup = 'health'; selectedType = 'meal'; }

    recTimeUnknown = edit ? !!edit.timeUnknown : false;
    recPhotos = edit ? recPhotosOf(edit).slice() : [];
    $('#timeDunno').classList.toggle('is-active', recTimeUnknown);
    renderRecForm();
    updateRecPhotoPreview();
    renderRecCatOptions();

    if (edit) {
      $('#recSubtype').value = edit.subtype || edit.amount || '';
      if (selectedGroup === 'health') $('#recAbnormal').value = edit.abnormal || '';
      $('#recMemo').value = edit.memo || '';
      $('#recCat').value = edit.catId;
      setRecDate(edit.date || todayISO());
      const rt = $('#recTime');
      rt.value = edit.timeUnknown ? '' : (edit.time || '');
      rt.disabled = !!edit.timeUnknown;
    } else {
      setRecDate(todayISO());
      const now = new Date();
      const rt = $('#recTime');
      rt.disabled = false;
      rt.value = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    }
    openModal('recordModal');
  }

  /* 기록 폼: 날짜 hidden 값 + 표시 라벨 갱신 */
  function setRecDate(iso) {
    const inp = $('#recDate'); if (inp) inp.value = iso || '';
    const lab = $('#recDateLabel');
    if (lab) { const d = iso ? new Date(iso + 'T00:00') : null; lab.textContent = d ? `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일` : '날짜 선택'; }
  }

  /* 기록 사진 미리보기 */
  function updateRecPhotoPreview() {
    const ui = $('#recPhotoUI');
    if (!ui) return;
    const thumbs = recPhotos.map((p, i) =>
      `<div class="rec-photo__img" style="background-image:url('${p}')"><button type="button" class="rec-photo__rm" data-rec-photo-remove="${i}" aria-label="사진 삭제">${ICON.close}</button></div>`
    ).join('');
    const addBtn = recPhotos.length < 8
      ? `<button type="button" class="rec-photo__add" id="recPhotoBtn" aria-label="사진 추가">${ICON.plus}</button>`
      : '';
    ui.innerHTML = `<div class="rec-photo__grid">${thumbs}${addBtn}</div>`;
  }

  /* 기록 상세 (팝업) */
  function openRecordDetail(id) {
    const r = records.find(x => x.id === id);
    if (!r) return;
    detailRecId = id;
    const cat = cats.find(c => c.id === r.catId);
    const ty = TYPES[r.type] || { label: '기록', color: 'var(--ink-faint)' };
    const timeStr = r.timeUnknown ? '시간 모름' : (r.time || '');
    const when = `${fmtDayLabel(r.date)}${timeStr ? ' · ' + timeStr : ''}`;
    const sub = r.subtype || r.amount;
    const photos = recPhotosOf(r);
    const members = (cat && cat.members) ? cat.members : [];
    const comments = r.comments || [];
    $('#recDetailBody').innerHTML = `
      ${photos.length ? `<div class="detail-gallery ${photos.length === 1 ? 'is-single' : ''}">${photos.map(p => `<div class="detail-gphoto" style="background-image:url('${p}')"></div>`).join('')}</div>` : ''}
      <div class="detail-head">
        <span class="detail-cat" style="background:${ty.color}"></span>
        <div>
          <div class="detail-type">${ty.label}${sub ? ` · ${escapeHtml(sub)}` : ''}</div>
          <div class="detail-meta">${cat ? escapeHtml(cat.name) : '삭제된 고양이'} · ${when}</div>
        </div>
      </div>
      ${r.abnormal ? `<div class="detail-abn">이상 증상 · ${escapeHtml(r.abnormal)}</div>` : ''}
      ${r.memo ? `<div class="detail-memo">${escapeHtml(r.memo)}</div>` : `<div class="detail-memo detail-memo--empty">작성된 메모가 없어요.</div>`}

      <div class="detail-comments">
        <div class="detail-comments__title">댓글${comments.length ? ` ${comments.length}` : ''}</div>
        <div class="detail-comments__list">
          ${comments.length ? comments.map(c => `
            <div class="cmt">
              <span class="cmt__ava">${escapeHtml((c.author || '?').slice(0, 1))}</span>
              <div class="cmt__body">
                <div class="cmt__head"><span class="cmt__name">${escapeHtml(c.author || '')}</span><span class="cmt__time">${tsAgo(c.ts)}</span></div>
                <div class="cmt__text">${escapeHtml(c.text)}</div>
              </div>
            </div>`).join('') : `<div class="cmt-empty">첫 댓글을 남겨보세요.</div>`}
        </div>
        <div class="cmt-input">
          <input type="text" id="commentInput" placeholder="댓글 달기…" autocomplete="off" />
          <button type="button" class="btn btn--primary btn--sm" data-add-comment>등록</button>
        </div>
      </div>`;
    openModal('recordDetailModal');
  }

  /* ============================================================
     토스트
     ============================================================ */
  let toastTimer;
  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('is-show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-show'), 2400);
  }

  /* ============================================================
     이벤트 바인딩
     ============================================================ */
  function bindEvents() {
    // 사이드바 토글 (구형 요소가 있을 때만)
    const menuToggle = $('#menuToggle');
    if (menuToggle) menuToggle.addEventListener('click', openSidebar);
    const scrim = $('#scrim');
    if (scrim) scrim.addEventListener('click', closeSidebar);

    // 고양이 사진 업로드
    $('#catPhotoInput').addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) readPhoto(file, (url) => { selectedPhoto = url; updatePhotoPreview(); });
      e.target.value = '';
    });

    // 프로필 사진 업로드
    const ppi = $('#profilePhotoInput');
    if (ppi) ppi.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) readPhoto(file, (url) => { profilePhoto = url; updateProfilePhotoPreview(); });
      e.target.value = '';
    });

    // 병원 지역·이름 검색 (재렌더돼도 유지되도록 문서 위임)
    document.addEventListener('input', (e) => {
      if (e.target && e.target.id === 'hospSearchInput') {
        hospQuery = e.target.value;
        renderHealthDetail();
        const inp = $('#hospSearchInput');
        if (inp) { inp.focus(); const v = inp.value; try { inp.setSelectionRange(v.length, v.length); } catch (err) { /* noop */ } }
      }
    });

    // AI 진료 입력: Enter로 전송 (재렌더돼도 유지되도록 문서 위임)
    document.addEventListener('keydown', (e) => {
      if (e.target && e.target.id === 'aiInput' && e.key === 'Enter') { e.preventDefault(); aiSend(e.target.value); }
      if (e.target && e.target.id === 'postCommentInput' && e.key === 'Enter') { e.preventDefault(); const btn = $('#postDetailBody [data-post-comment]'); if (btn) btn.click(); }
      if (e.target && e.target.id === 'postReplyInput' && e.key === 'Enter') { e.preventDefault(); const btn = $('#postDetailBody [data-reply-submit]'); if (btn) btn.click(); }
    });

    // 댓글 사진 업로드 (정적 input, 상세 재렌더와 무관)
    const pci = $('#postCmtPhotoInput');
    if (pci) pci.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) readPhoto(file, (url) => { postCmtPhoto = url; updatePostCmtPreview(); });
      e.target.value = '';
    });
    // 대댓글 사진 업로드
    const pri = $('#postReplyPhotoInput');
    if (pri) pri.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) readPhoto(file, (url) => { postReplyPhoto = url; updateReplyPreview(); });
      e.target.value = '';
    });

    // 기록 사진 업로드
    const rpi = $('#recPhotoInput');
    if (rpi) rpi.addEventListener('change', (e) => {
      const files = [...(e.target.files || [])].slice(0, 8 - recPhotos.length);
      files.forEach(file => readPhoto(file, (url) => { recPhotos.push(url); updateRecPhotoPreview(); }));
      e.target.value = '';
    });

    // 헤더 검색 → 기록 화면 필터
    const gs = $('#globalSearch');
    if (gs) gs.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      if (searchQuery && !$('#view-records').classList.contains('is-active')) switchView('records');
      renderRecords();
    });

    // 설정 토글 스위치
    document.addEventListener('change', (e) => {
      const setEl = e.target.closest('[data-set]');
      if (setEl) { settings[setEl.dataset.set] = setEl.checked; saveSettings(); updateBellDot(); }
    });

    // 네비게이션 + 위임 처리
    document.addEventListener('click', (e) => {
      // 알림: 벨 클릭 → 알림 전체 화면
      if (e.target.closest('#bellBtn')) { openNotif(); return; }
      // 설정: 데이터 내보내기 / 초기화 / 정보
      if (e.target.closest('[data-export]')) {
        try {
          const data = JSON.stringify({ cats, records, me, settings, exportedAt: todayISO() }, null, 2);
          const a = document.createElement('a');
          a.href = URL.createObjectURL(new Blob([data], { type: 'application/json' }));
          a.download = 'purrcare-data.json';
          document.body.appendChild(a); a.click(); a.remove();
          setTimeout(() => URL.revokeObjectURL(a.href), 1000);
          toast('데이터를 내보냈어요');
        } catch (err) { toast('내보내기에 실패했어요'); }
        return;
      }
      if (e.target.closest('[data-reset]')) {
        if (!confirm('모든 데이터를 예시 데이터로 초기화할까요?\n지금까지 등록한 고양이·기록·프로필이 삭제되며 되돌릴 수 없어요.')) return;
        try { [LS_CATS, LS_RECS, LS_ME, 'purrcare.settings', 'purrcare.seedv'].forEach(k => localStorage.removeItem(k)); } catch (err) { /* noop */ }
        location.reload();
        return;
      }
      const themeBtn = e.target.closest('[data-theme-set]');
      if (themeBtn) { settings.theme = themeBtn.dataset.themeSet; saveSettings(); applyTheme(settings.theme); renderSettings(); return; }
      if (e.target.closest('[data-terms]')) { toast('이용약관·개인정보 처리방침은 준비 중이에요'); return; }
      if (e.target.closest('[data-contact]')) { toast(`문의: ${me.email || 'zip.dooly@gmail.com'}`); return; }
      // 알림 항목 클릭 → 관련 화면으로 이동
      const notifGo = e.target.closest('[data-notif-go]');
      if (notifGo) { switchView(notifGo.dataset.notifGo); return; }
      if (e.target.closest('[data-notif-clear]')) { notifCleared = true; updateBellDot(); renderNotif(); toast('알림을 모두 읽음 처리했어요'); return; }

      // 기록: 고양이 선택 picker (버튼 → 목록 드롭다운)
      const cpEl = $('#catStrip');
      if (cpEl && cpEl.classList.contains('catpick')) {
        if (e.target.closest('[data-catpick-toggle]')) { cpEl.classList.toggle('is-open'); return; }
        const cpSet = e.target.closest('[data-catpick-set]');
        if (cpSet) { filterCat = cpSet.dataset.catpickSet; renderFilters(); renderRecords(); return; }
        if (cpEl.classList.contains('is-open') && !e.target.closest('#catStrip')) cpEl.classList.remove('is-open');
      }

      const navItem = e.target.closest('[data-view]');
      if (navItem) { e.preventDefault(); switchView(navItem.dataset.view); return; }

      const quick = e.target.closest('[data-quick]');
      if (quick) { e.preventDefault(); openRecordModal(quick.dataset.quick); return; }

      if (e.target.closest('[data-open-record]')) { openRecordModal(); return; }

      if (e.target.closest('#addCatBtn') || e.target.closest('#addCatCard') || e.target.closest('#heroAddCat') || e.target.closest('#sidebarAddCat')) { openCatModal(); return; }

      // 캘린더 월 이동
      const cal = e.target.closest('[data-cal]');
      if (cal) { const dir = parseInt(cal.dataset.cal, 10); calMonth = new Date(calMonth.getFullYear(), calMonth.getMonth() + dir, 1); renderCalendar(); return; }

      // 대시보드 고양이 전환
      const selCat = e.target.closest('[data-select-cat]');
      if (selCat) { selectedCatId = selCat.dataset.selectCat; renderDashboard(); return; }
      if (e.target.closest('[data-cycle-cat]')) {
        if (cats.length) { const i = cats.findIndex(c => c.id === selectedCatId); selectedCatId = cats[(i + 1) % cats.length].id; renderDashboard(); }
        return;
      }

      // AI 상담 FAB → 건강 탭의 AI 간단 진료 페이지로 연동
      if (e.target.closest('#aiCard')) { openHealthDetail('ai'); return; }
      // PurrCare 쇼핑 플로팅 버튼 → 배포된 쇼핑몰(새 탭)
      if (e.target.closest('#shopFab')) { window.open('https://slrspdla-nunu.github.io/0610_purrcare/', '_blank', 'noopener'); return; }

      // 유기묘 입양 (카드 내부 버튼 먼저 체크 → 카드 오픈)
      const adoptFavBtn = e.target.closest('[data-adopt-fav]');
      if (adoptFavBtn) {
        const i = +adoptFavBtn.dataset.adoptFav;
        if (adoptFav.has(i)) adoptFav.delete(i); else adoptFav.add(i);
        renderAdopt();
        renderMyPage();
        if ($('#adoptModal').classList.contains('is-open')) openAdoptDetail(i);
        return;
      }
      if (e.target.closest('[data-adopt-inquiry]')) { toast('입양 문의는 보호소 연동 준비 중이에요'); return; }
      const adoptRegionBtn = e.target.closest('[data-adopt-region]');
      if (adoptRegionBtn) { adoptRegion = adoptRegionBtn.dataset.adoptRegion; renderAdopt(); return; }
      const adoptOpen = e.target.closest('[data-adopt-open]');
      if (adoptOpen) { openAdoptDetail(+adoptOpen.dataset.adoptOpen); return; }
      // 쇼핑: 카테고리 / 담기 / 상품 / 장바구니
      const shopCatBtn = e.target.closest('[data-shop-cat]');
      if (shopCatBtn) { shopCat = shopCatBtn.dataset.shopCat; renderShop(); return; }
      const shopAdd = e.target.closest('[data-shop-add]');
      if (shopAdd) { shopCart += 1; const n = $('#shopCartN'); if (n) n.textContent = shopCart; toast('장바구니에 담았어요'); return; }
      if (e.target.closest('[data-shop-cart]')) { toast(shopCart ? `장바구니에 ${shopCart}개 담겨 있어요 (결제 준비 중)` : '장바구니가 비어 있어요'); return; }
      if (e.target.closest('[data-shop-open]')) { toast('상품 상세는 준비 중이에요'); return; }
      // AI 집사 매칭
      const friendAddBtn = e.target.closest('[data-friend-add]');
      if (friendAddBtn) {
        const i = +friendAddBtn.dataset.friendAdd;
        const had = friendsAdded.has(i);
        if (had) friendsAdded.delete(i); else friendsAdded.add(i);
        renderFriends(); renderMyPage();
        toast(had ? '친구를 삭제했어요' : '친구로 추가했어요');
        return;
      }

      // AI 브리핑 (홈 = 전체 7일 / 기록 = 현재 필터 30일)
      if (e.target.closest('[data-briefing]')) { openBriefing('all', 7); return; }
      if (e.target.closest('[data-records-briefing]')) { openBriefing(filterCat || 'all', 30); return; }
      if (e.target.closest('[data-briefing-hospital]')) { closeAllModals(); openHealthDetail('hospital'); return; }
      if (e.target.closest('[data-briefing-ai]')) { closeAllModals(); openHealthDetail('ai'); return; }
      if (e.target.closest('[data-briefing-record]')) { closeAllModals(); openRecordModal(); return; }

      // 건강: 히어로 캐러셀 dot / 액션 카드
      const hslide = e.target.closest('[data-hslide]');
      if (hslide) { paintHealthSlide(+hslide.dataset.hslide); startHealthAuto(); return; }

      // 커뮤니티 피드: 카테고리 / 정렬 / 좋아요 / 글쓰기 / 커뮤니티
      const cfeedCat = e.target.closest('[data-cfeed-cat]');
      if (cfeedCat) { commCat = cfeedCat.dataset.cfeedCat; renderCommunity(); return; }
      const cfeedSort = e.target.closest('[data-cfeed-sort]');
      if (cfeedSort) { commSort = cfeedSort.dataset.cfeedSort; renderCommunity(); return; }
      const postLike = e.target.closest('[data-post-like]');
      if (postLike) { const p = POSTS.find(x => x.id === postLike.dataset.postLike); if (p) { p.liked = !p.liked; p.likes += p.liked ? 1 : -1; if ($('#view-postdetail') && $('#view-postdetail').classList.contains('is-active')) renderPostDetail(); else renderCommunity(); } return; }
      // 글쓰기 (전체/게시판 공통) — 현재 보고 있는 커뮤니티·카테고리 프리필
      if (e.target.closest('[data-post-write]')) { openPostWrite({ comm: commTopic != null ? commTopic : undefined, cat: commCat !== 'all' ? commCat : undefined }); return; }
      // 글쓰기 모달: 카테고리 단일 선택 / 사진
      const writeCat = e.target.closest('[data-write-cat]');
      if (writeCat) { $$('#postForm [data-write-cat]').forEach(b => b.classList.toggle('is-active', b === writeCat)); return; }
      if (e.target.closest('#postWritePhotoBtn')) { $('#postWritePhotoInput').click(); return; }
      if (e.target.closest('[data-post-write-photo-rm]')) { postWritePhoto = ''; updatePostWritePreview(); return; }
      // 커뮤니티 만들기 / 주제 게시판 열기·뒤로 / 가입
      if (e.target.closest('[data-comm-create]')) { openCommunityCreate(); return; }
      const commOpen = e.target.closest('[data-comm-open]');
      if (commOpen) { commTopic = +commOpen.dataset.commOpen; renderCommunity(); const m = $('.main'); if (m) m.scrollTo({ top: 0 }); return; }
      if (e.target.closest('[data-comm-back]')) { commTopic = null; renderCommunity(); return; }
      if (e.target.closest('[data-comm-join]')) { toast('가입했어요 (데모)'); return; }
      // 게시글 상세: 공유
      if (e.target.closest('[data-post-share]')) {
        const link = 'https://purrcare.app/post/' + detailPostId;
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(link).then(() => toast('게시글 링크를 복사했어요')).catch(() => toast('링크: ' + link));
        else toast('링크: ' + link);
        return;
      }
      // 인라인 대댓글: 열기(토글) / 취소 / 등록
      const postReply = e.target.closest('[data-post-reply]');
      if (postReply) {
        const i = +postReply.dataset.postReply;
        postReplyTo = (postReplyTo === i) ? null : i;   // 같은 버튼 다시 누르면 닫힘
        postReplyPhoto = '';
        renderPostDetail();
        if (postReplyTo != null) { const ri = $('#postReplyInput'); if (ri) ri.focus(); }
        return;
      }
      if (e.target.closest('[data-reply-cancel]')) { postReplyTo = null; postReplyPhoto = ''; renderPostDetail(); return; }
      const replySubmit = e.target.closest('[data-reply-submit]');
      if (replySubmit) {
        const inp = $('#postReplyInput'); const text = (inp && inp.value.trim()) || '';
        if (!text && !postReplyPhoto) return;
        const p = POSTS.find(x => x.id === detailPostId);
        const idx = +replySubmit.dataset.replySubmit;
        if (p && p.cmts[idx]) { p.cmts[idx].replies = p.cmts[idx].replies || []; p.cmts[idx].replies.push({ author: me.name, ts: Date.now(), text, photo: postReplyPhoto || '' }); }
        postReplyTo = null; postReplyPhoto = '';
        renderPostDetail();
        return;
      }
      // 댓글 사진 첨부 / 삭제
      if (e.target.closest('#postCmtPhotoBtn')) { $('#postCmtPhotoInput').click(); return; }
      if (e.target.closest('[data-post-cmt-photo-rm]')) { postCmtPhoto = ''; updatePostCmtPreview(); return; }
      // 대댓글 사진 첨부 / 삭제
      if (e.target.closest('#postReplyPhotoBtn')) { $('#postReplyPhotoInput').click(); return; }
      if (e.target.closest('[data-post-reply-photo-rm]')) { postReplyPhoto = ''; updateReplyPreview(); return; }
      // 댓글/대댓글 등록
      const postComment = e.target.closest('[data-post-comment]');
      if (postComment) {
        const inp = $('#postCommentInput'); const text = (inp && inp.value.trim()) || '';
        if (!text && !postCmtPhoto) return;
        const p = POSTS.find(x => x.id === postComment.dataset.postComment);
        if (p) {
          p.cmts = p.cmts || [];
          p.cmts.push({ author: me.name, ts: Date.now(), text, photo: postCmtPhoto || '' });
          postCmtPhoto = '';
          renderPostDetail();
        }
        return;
      }
      const postOpen = e.target.closest('[data-post]');
      if (postOpen) { openPost(postOpen.dataset.post); return; }
      const hcard = e.target.closest('[data-hcard]');
      if (hcard) { openHealthDetail(hcard.dataset.hcard); return; }

      // 병원: 북마크 / 전화·예약·길찾기 (행 열기보다 먼저 체크)
      const hospSave = e.target.closest('[data-hosp-save]');
      if (hospSave) { const h = HOSPITALS[+hospSave.dataset.hospSave]; if (h) { h.saved = !h.saved; toast(h.saved ? '저장했어요' : '저장 해제'); renderHealthDetail(); } return; }
      const hospAct = e.target.closest('[data-hosp-action]');
      if (hospAct) { const [k, n] = hospAct.dataset.hospAction.split(':'); toast(k === 'call' ? `${n} 연결은 준비 중이에요` : k === 'book' ? `${n} 예약은 준비 중이에요` : `${n} 길찾기는 준비 중이에요`); return; }
      if (e.target.closest('[data-hosp-reviews]')) { toast('외부 후기 연동은 준비 중이에요'); return; }
      // 병원 상세 열기 / 목록으로
      const hospOpen = e.target.closest('[data-hosp-open]');
      if (hospOpen) { hospDetailId = +hospOpen.dataset.hospOpen; renderHealthDetail(); const m = $('.main'); if (m) m.scrollTo({ top: 0 }); return; }
      if (e.target.closest('[data-hosp-back]')) { hospDetailId = null; renderHealthDetail(); return; }
      // 병원 정렬 / 필터 → 재렌더
      const hospSortBtn = e.target.closest('[data-hosp-sort]');
      if (hospSortBtn) { hospSort = hospSortBtn.dataset.hospSort; activeHospital = 0; renderHealthDetail(); return; }
      const hospFilterBtn = e.target.closest('[data-hosp-filter]');
      if (hospFilterBtn) { hospFilter = hospFilterBtn.dataset.hospFilter; activeHospital = 0; renderHealthDetail(); return; }
      // 건강 상세: 건강분석 증상/기간 칩 (다중·단일 토글)
      const symp = e.target.closest('[data-symptom]');
      if (symp) {
        symp.classList.toggle('is-active');
        if (symp.dataset.symptom === '기타') {
          const etc = $('#anaEtc');
          if (etc) { etc.hidden = !symp.classList.contains('is-active'); if (!etc.hidden) { const ta = $('#anaEtcText'); if (ta) ta.focus(); } }
        }
        return;
      }
      const whenChip = e.target.closest('[data-when]');
      if (whenChip) { $$('#healthDetailBody [data-when]').forEach(b => b.classList.toggle('is-active', b === whenChip)); return; }
      // 건강분석: 분석 시작 → 결과 화면
      if (e.target.closest('[data-analyze]')) {
        const syms = $$('#healthDetailBody [data-symptom].is-active').map(b => b.dataset.symptom);
        const whenEl = $('#healthDetailBody [data-when].is-active');
        const etcEl = $('#anaEtcText');
        anaResult = { syms, when: whenEl ? whenEl.dataset.when : '', etc: etcEl ? etcEl.value.trim() : '' };
        renderHealthDetail();
        const m = $('.main'); if (m) m.scrollTo({ top: 0 });
        return;
      }
      if (e.target.closest('[data-ana-reset]')) { anaResult = null; renderHealthDetail(); return; }
      if (e.target.closest('[data-ana-hospital]')) { openHealthDetail('hospital'); return; }
      if (e.target.closest('[data-ana-ai]')) { const s = symptomSentence(); openHealthDetail('ai'); aiSend(s); return; }
      if (e.target.closest('[data-ana-ask]')) { const syms = anaSyms(); openPostWrite({ cat: '질문', title: (syms.length ? syms.join(', ') + ' ' : '') + '증상, 어떻게 해야 할까요?', body: symptomSentence() }); return; }
      if (e.target.closest('[data-demo-input]')) { toast('준비 중이에요'); return; }
      // 건강 상세: AI 진료 채팅
      const aiKw = e.target.closest('[data-ai-kw]');
      if (aiKw) { const inp = $('#aiInput'); if (inp) { inp.value = (inp.value.trim() ? inp.value.trim() + ' ' : '') + aiKw.dataset.aiKw; inp.focus(); } return; }
      if (e.target.closest('[data-ai-hospital]')) { openHealthDetail('hospital'); return; }
      if (e.target.closest('[data-ai-ask]')) { openPostWrite({ cat: '질문' }); return; }
      const aiQuick = e.target.closest('[data-ai-quick]');
      if (aiQuick) { aiSend(aiQuick.dataset.aiQuick); return; }
      if (e.target.closest('#aiSendBtn')) { aiSend($('#aiInput') && $('#aiInput').value); return; }

      // 일정: 달 이동 / 날짜 선택 / 완료 토글 / 추가
      const schedNav = e.target.closest('[data-sched-nav]');
      if (schedNav) { schedMonth = new Date(schedMonth.getFullYear(), schedMonth.getMonth() + parseInt(schedNav.dataset.schedNav, 10), 1); renderSchedule(); return; }
      const schedDay = e.target.closest('[data-sched-day]');
      if (schedDay) { schedSelected = schedDay.dataset.schedDay; renderSchedule(); return; }
      const schedToggle = e.target.closest('[data-sched-toggle]');
      if (schedToggle) { const s = SCHEDULE.find(x => x.id === schedToggle.dataset.schedToggle); if (s) { s.done = !s.done; renderSchedule(); } return; }
      if (e.target.closest('[data-sched-add]')) { openScheduleModal(); return; }
      if (e.target.closest('#schedDateBtn')) { openDatePicker($('#schedDateBtn'), $('#schedDate').value, iso => setSchedDate(iso), { allowClear: false }); return; }
      if (e.target.closest('#schedTimeBtn')) { openTimePicker($('#schedTimeBtn'), $('#schedTime').value, hhmm => setSchedTime(hhmm)); return; }
      const tagChip = e.target.closest('[data-tag-toggle]');
      if (tagChip) { tagChip.classList.toggle('is-active'); return; }

      // 미니카드 / 기록보기 → 해당 고양이 필터로 기록 화면
      const goRec = e.target.closest('[data-go-records]');
      if (goRec) { filterCat = goRec.dataset.goRecords; filterGroup = 'all'; filterType = 'all'; renderFilters(); renderRecords(); switchView('records'); return; }
      const goCat = e.target.closest('[data-go-cat]');
      if (goCat) { filterCat = goCat.dataset.goCat; filterGroup = 'all'; filterType = 'all'; renderFilters(); renderRecords(); switchView('records'); return; }

      // 고양이 삭제
      const delCat = e.target.closest('[data-del-cat]');
      if (delCat) { handleDeleteCat(delCat.dataset.delCat); return; }

      // 기록 삭제
      const delRec = e.target.closest('[data-del-rec]');
      if (delRec) { handleDeleteRecord(delRec.dataset.delRec); return; }

      // 가족 구성원 프로필 열기
      const memberBtn = e.target.closest('[data-member]');
      if (memberBtn) { openMemberProfile(memberBtn.dataset.member); return; }
      // 마이페이지: 프로필 편집 열기
      if (e.target.closest('[data-edit-profile]')) { openProfileModal(); return; }
      // 마이페이지: 프로필 색상 선택
      const meColor = e.target.closest('[data-mecolor]');
      if (meColor) { $$('#profileForm [data-mecolor]').forEach(b => b.classList.remove('is-active')); meColor.classList.add('is-active'); return; }
      // 프로필 사진 추가 / 삭제
      if (e.target.closest('#profilePhotoBtn')) { $('#profilePhotoInput').click(); return; }
      if (e.target.closest('#profilePhotoRm')) { profilePhoto = ''; updateProfilePhotoPreview(); return; }
      // 로그아웃 / 탈퇴 / 로그인
      if (e.target.closest('[data-logout]')) { doLogout(); return; }
      if (e.target.closest('[data-withdraw]')) { doWithdraw(); return; }
      if (e.target.closest('[data-login]')) { doLogin(); return; }

      // 고양이 상세 열기
      const catDetail = e.target.closest('[data-cat-detail]');
      if (catDetail) { openCat(catDetail.dataset.catDetail); return; }

      // 상세에서 삭제
      if (e.target.closest('[data-del-rec-detail]')) {
        if (detailRecId && confirm('이 기록을 삭제할까요?')) {
          records = records.filter(r => r.id !== detailRecId);
          save(); closeAllModals(); renderAll(); toast('기록 삭제됨');
        }
        return;
      }
      // 상세에서 수정
      if (e.target.closest('[data-edit-rec-detail]')) { const id = detailRecId; closeAllModals(); openRecordModal(null, id); return; }
      // 가족 초대·공유 팝업 열기
      if (e.target.closest('[data-open-share]')) {
        const c = cats.find(x => x.id === detailCatId);
        const li = $('#shareLinkInput'); if (li) li.value = `https://purrcare.app/diary/${c ? c.id : ''}`;
        const ie = $('#inviteEmail'); if (ie) ie.value = '';
        openModal('shareModal');
        return;
      }
      // 고양이 공유 링크 복사
      if (e.target.closest('[data-share-cat]')) {
        const li = $('#shareLinkInput');
        const link = (li && li.value) || `https://purrcare.app/diary/${detailCatId}`;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(link).then(() => toast('공유 링크를 복사했어요')).catch(() => toast('공유 링크: ' + link));
        } else { toast('공유 링크: ' + link); }
        return;
      }
      // 가족 초대 (로컬 데모)
      if (e.target.closest('[data-invite-member]')) {
        const inp = $('#inviteEmail'); const email = (inp && inp.value.trim()) || '';
        if (!email) { toast('이메일을 입력해주세요'); return; }
        const c = cats.find(x => x.id === detailCatId);
        if (c) { c.members = c.members || []; c.members.push({ name: email.split('@')[0], email }); save(); renderCatDetail(); if (inp) inp.value = ''; toast('초대를 보냈어요 (데모)'); }
        return;
      }
      // 댓글 등록
      if (e.target.closest('[data-add-comment]')) {
        const inp = $('#commentInput'); const text = (inp && inp.value.trim()) || '';
        if (!text) return;
        const r = records.find(x => x.id === detailRecId);
        if (r) { r.comments = r.comments || []; r.comments.push({ id: uid(), author: me.name, text, ts: Date.now() }); save(); openRecordDetail(detailRecId); }
        return;
      }

      // 기록 상세 열기
      const recDetail = e.target.closest('[data-rec-detail]');
      if (recDetail) { openRecordDetail(recDetail.dataset.recDetail); return; }

      // 필터: 그룹 세그먼트 (전체·건강·행동)
      const fgroup = e.target.closest('[data-fgroup]');
      if (fgroup) { filterGroup = fgroup.dataset.fgroup; filterType = 'all'; renderFilters(); renderRecords(); return; }
      // 필터: 카테고리 칩
      const ftype = e.target.closest('[data-ftype]');
      if (ftype) { filterType = ftype.dataset.ftype; renderFilters(); renderRecords(); return; }
      // 커스텀 달력 팝업: 달 이동 / 일자 선택 / 오늘 / 지우기
      const dpNav = e.target.closest('[data-dp-nav]');
      if (dpNav) { dpMonth = new Date(dpMonth.getFullYear(), dpMonth.getMonth() + parseInt(dpNav.dataset.dpNav, 10), 1); renderDatePicker(); positionDatePicker(dpAnchor); return; }
      const dpCell = e.target.closest('[data-dp-cell]');
      if (dpCell) { const cb = dpOnPick; closeDatePicker(); if (cb) cb(dpCell.dataset.dpCell); return; }
      if (e.target.closest('[data-dp-today]')) { const cb = dpOnPick; closeDatePicker(); if (cb) cb(todayISO()); return; }
      if (e.target.closest('[data-dp-clear]')) { const cb = dpOnPick; closeDatePicker(); if (cb) cb(''); return; }

      // 커스텀 시간 선택: 시 / 분 / 지금 / 지우기 / 완료
      const tpH = e.target.closest('[data-tp-h]');
      if (tpH) { const mm = (tpValue || '00:00').split(':')[1] || '00'; tpValue = tpH.dataset.tpH + ':' + mm; tpPaint(); if (tpOnPick) tpOnPick(tpValue); return; }
      const tpM = e.target.closest('[data-tp-m]');
      if (tpM) { const hh = (tpValue || '00:00').split(':')[0] || '00'; tpValue = hh + ':' + tpM.dataset.tpM; tpPaint(); if (tpOnPick) tpOnPick(tpValue); return; }
      if (e.target.closest('[data-tp-now]')) { const n = new Date(); tpValue = pad2(n.getHours()) + ':' + pad2(Math.round(n.getMinutes() / 5) * 5 % 60); tpPaint(); if (tpOnPick) tpOnPick(tpValue); return; }
      if (e.target.closest('[data-tp-clear]')) { const cb = tpOnPick; closeTimePicker(); if (cb) cb(''); return; }
      if (e.target.closest('[data-tp-done]')) { closeTimePicker(); return; }

      // 필터: 날짜 선택 / 해제
      const datePick = e.target.closest('[data-date-pick]');
      if (datePick) { openDatePicker(datePick, filterDate, iso => { filterDate = iso; renderFilters(); renderRecords(); }); return; }
      if (e.target.closest('[data-date-clear]')) { filterDate = ''; renderFilters(); renderRecords(); return; }
      // 고양이 일기 날짜 선택 / 해제
      const catDatePick = e.target.closest('[data-catdate-pick]');
      if (catDatePick) { openDatePicker(catDatePick, catDetailDate, iso => { catDetailDate = iso; renderCatDetail(); }); return; }
      if (e.target.closest('[data-catdate-clear]')) { catDetailDate = ''; renderCatDetail(); return; }

      // 모달 닫기
      if (e.target.closest('[data-close]')) { closeAllModals(); return; }

      // 성별 / 중성화 세그먼트
      const seg = e.target.closest('.seg-opt');
      if (seg) {
        const wrap = seg.closest('.seg');
        [...wrap.children].forEach(b => b.classList.toggle('is-active', b === seg));
        if (wrap.dataset.seg === 'gender') selectedGender = seg.dataset.val;
        else if (wrap.dataset.seg === 'neutered') selectedNeutered = seg.dataset.val;
        return;
      }

      // 기록 폼: 날짜 선택 (커스텀 달력)
      const recDateBtn = e.target.closest('#recDateBtn');
      if (recDateBtn) { openDatePicker(recDateBtn, $('#recDate').value, iso => setRecDate(iso), { allowClear: false }); return; }

      // 사진 추가
      if (e.target.closest('#catPhotoBtn')) { $('#catPhotoInput').click(); return; }
      if (e.target.closest('#recPhotoBtn')) { $('#recPhotoInput').click(); return; }
      const rmPhoto = e.target.closest('[data-rec-photo-remove]');
      if (rmPhoto) { recPhotos.splice(+rmPhoto.dataset.recPhotoRemove, 1); updateRecPhotoPreview(); return; }

      // 체중 모르겠어요
      if (e.target.closest('#weightDunno')) {
        weightUnknown = !weightUnknown;
        $('#weightDunno').classList.toggle('is-active', weightUnknown);
        const w = $('#catWeight'); w.disabled = weightUnknown; if (weightUnknown) w.value = '';
        return;
      }

      // 기록: 그룹(건강/행동) 전환
      const recGroup = e.target.closest('[data-group]');
      if (recGroup) {
        selectedGroup = recGroup.dataset.group;
        selectedType = REC_GROUPS[selectedGroup][0];
        renderRecForm();
        return;
      }
      // 기록: 카테고리 탭
      const recCat = e.target.closest('[data-reccat]');
      if (recCat) {
        selectedType = recCat.dataset.reccat;
        renderRecCats();
        renderRecSubtype();
        return;
      }
      // 기록: 시간 모름
      if (e.target.closest('#timeDunno')) {
        recTimeUnknown = !recTimeUnknown;
        $('#timeDunno').classList.toggle('is-active', recTimeUnknown);
        const rt = $('#recTime'); rt.disabled = recTimeUnknown; if (recTimeUnknown) rt.value = '';
        return;
      }
    });

    // ESC로 모달 닫기
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeAllModals(); closeSidebar(); } });

    // 고양이 등록 폼
    $('#catForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const f = e.target;
      const name = f.name.value.trim();
      if (!name) return;
      const y = f.birthY.value.trim(), m = f.birthM.value.trim(), d = f.birthD.value.trim();
      let birth = '';
      if (y) birth = `${y}-${(m || '1').padStart(2, '0')}-${(d || '1').padStart(2, '0')}`;
      const newId = uid();
      cats.push({
        id: newId,
        name,
        color: selectedColor,
        photo: selectedPhoto || '',
        breed: f.breed.value,
        gender: selectedGender,
        neutered: selectedNeutered,
        birth,
        weight: (!weightUnknown && f.weight.value.trim()) ? parseFloat(f.weight.value) : null,
        note: '',
      });
      selectedCatId = newId;  // 새로 등록한 고양이를 대시보드에 표시
      save();
      closeAllModals();
      renderAll();
      toast(`${name} 등록됨`);
    });

    // 프로필 편집 폼
    const profileForm = $('#profileForm');
    if (profileForm) profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = $('#profileName').value.trim();
      if (!name) { toast('이름을 입력해주세요'); return; }
      const active = $('#profileForm [data-mecolor].is-active');
      me = { name, email: $('#profileEmail').value.trim(), bio: $('#profileBio').value.trim(), color: active ? active.dataset.mecolor : me.color, photo: profilePhoto || '' };
      saveMe();
      closeAllModals();
      renderAll();
      toast('프로필이 저장됐어요');
    });

    // 글쓰기 폼
    const postForm = $('#postForm');
    if (postForm) postForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = $('#postTitle').value.trim();
      const body = $('#postBody').value.trim();
      if (!title) { toast('제목을 입력해주세요'); return; }
      if (!body && !postWritePhoto) { toast('내용이나 사진을 넣어주세요'); return; }
      const activeCat = $('#postForm [data-write-cat].is-active');
      const cat = activeCat ? activeCat.dataset.writeCat : '수다';
      const commVal = $('#postCommSelect').value;
      const comm = commVal === '' ? null : +commVal;
      POSTS.unshift({ id: uid(), author: me.name, comm, cat, ts: Date.now(), title, body, likes: 0, liked: false, views: 0, thumb: !!postWritePhoto, photo: postWritePhoto || '', cmts: [] });
      postWritePhoto = '';
      if (comm != null) commTopic = comm;          // 커뮤니티 지정 시 그 게시판으로
      else if (commTopic == null) commCat = 'all'; // 전체 피드면 전체 탭으로
      closeAllModals();
      renderCommunity();
      switchView('community');
      toast('글을 등록했어요');
    });
    // 커뮤니티 만들기 폼
    const communityCreateForm = $('#communityCreateForm');
    if (communityCreateForm) communityCreateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = $('#commName').value.trim();
      if (!name) { toast('커뮤니티 이름을 입력해주세요'); return; }
      COMMUNITIES.unshift({ title: name, cap: $('#commCap').value.trim() || '새 커뮤니티', members: '1' });
      closeAllModals();
      commTopic = null;
      renderCommunity();
      toast('커뮤니티를 만들었어요');
    });
    // 글쓰기 사진 업로드
    const pwi = $('#postWritePhotoInput');
    if (pwi) pwi.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) readPhoto(file, (url) => { postWritePhoto = url; updatePostWritePreview(); });
      e.target.value = '';
    });

    // 일정 추가 폼
    const scheduleForm = $('#scheduleForm');
    if (scheduleForm) scheduleForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = $('#schedTitle').value.trim();
      const date = $('#schedDate').value;
      if (!title) { toast('제목을 입력해주세요'); return; }
      if (!date) { toast('날짜를 선택해주세요'); return; }
      const active = $('#scheduleForm .seg[data-seg="schedcat"] .seg-opt.is-active');
      const cat = active ? active.dataset.val : 'reminder';
      const tags = $$('#schedTags .tagchip.is-active').map(t => t.dataset.tagName);
      const time = $('#schedTime').value || '';
      SCHEDULE.push({ id: uid(), date, time, cat, title, sub: $('#schedSub').value.trim(), tags, done: false });
      const d = new Date(date + 'T00:00');
      schedSelected = date;
      schedMonth = new Date(d.getFullYear(), d.getMonth(), 1);
      renderSchedule();
      closeAllModals();
      toast('일정을 추가했어요');
    });

    // 기록 작성 폼
    $('#recordForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const f = e.target;
      if (!f.catId.value) { toast('고양이를 선택해주세요'); return; }
      const subtype = $('#recSubtype').value;
      const abnormal = selectedGroup === 'health' ? $('#recAbnormal').value : '';
      const data = {
        catId: f.catId.value,
        group: selectedGroup,
        type: selectedType,
        subtype,
        abnormal,
        date: f.date.value || todayISO(),
        time: recTimeUnknown ? '' : f.time.value,
        timeUnknown: recTimeUnknown,
        amount: subtype,
        memo: f.memo.value.trim(),
        photos: recPhotos.slice(),
        photo: '',
      };
      const wasEdit = !!editingRecId;
      if (wasEdit) {
        const idx = records.findIndex(r => r.id === editingRecId);
        if (idx >= 0) records[idx] = { ...records[idx], ...data };
      } else {
        records.push({ id: uid(), comments: [], ...data });
      }
      // 다시 알림 → 일정(리마인더)에 추가
      let remindMsg = '';
      const rw = $('#recRemindWhen') ? $('#recRemindWhen').value : '';
      if (!wasEdit && rw) {
        const d = new Date((data.date || todayISO()) + 'T00:00');
        d.setDate(d.getDate() + parseInt(rw, 10));
        const riso = d.toISOString().slice(0, 10);
        const catName = (cats.find(c => c.id === data.catId) || {}).name || '';
        SCHEDULE.push({ id: uid(), date: riso, time: data.timeUnknown ? '' : data.time, cat: 'reminder', title: `${catName} ${subtype || TYPES[selectedType].label} 알림`.trim(), sub: '기록에서 설정한 알림', tags: [], done: false });
        remindMsg = ' · 일정에 알림 추가';
      }
      editingRecId = null;
      save();
      closeAllModals();
      renderAll();
      renderSchedule();
      toast((wasEdit ? '기록이 수정됐어요' : `${TYPES[selectedType].label} 기록 저장됨`) + remindMsg);
    });
  }

  function handleDeleteCat(id) {
    const cat = cats.find(c => c.id === id);
    if (!cat) return;
    const cnt = records.filter(r => r.catId === id).length;
    const msg = cnt
      ? `'${cat.name}'와 관련 기록 ${cnt}건을 모두 삭제할까요?`
      : `'${cat.name}'를 삭제할까요?`;
    if (!confirm(msg)) return;
    cats = cats.filter(c => c.id !== id);
    records = records.filter(r => r.catId !== id);
    if (filterCat === id) filterCat = 'all';
    save();
    renderAll();
    toast('삭제됨');
  }

  function handleDeleteRecord(id) {
    if (!confirm('이 기록을 삭제할까요?')) return;
    records = records.filter(r => r.id !== id);
    save();
    renderAll();
    toast('기록 삭제됨');
  }

  /* ============================================================
     시작
     ============================================================ */
  function init() {
    load();
    loadMe();
    loadSettings();
    applyTheme(settings.theme);
    selectedCatId = cats.length ? cats[0].id : null;
    bindEvents();
    normalizePostTimes();
    renderAll();
    renderHealth();
    renderSchedule();
    renderCommunity();
    renderAdopt();
    renderShop();
    renderFriends();
    renderSettings();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
