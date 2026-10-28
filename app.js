/* =========================================================
   本周英语游戏 —— 句型 + 单词，iPad 触屏版
   ========================================================= */

/* ---------- 常见儿童英语词 → 表情图（不联网、不依赖图片文件） ---------- */
const EMOJI_MAP = {
  mother: '👩', mom: '👩', father: '👨', dad: '👨', parents: '👨‍👩‍👧',
  sister: '👧', brother: '👦', baby: '👶', grandma: '👵', grandpa: '👨‍🦳',
  family: '👨‍👩‍👧‍👦', friend: '🧑‍🤝‍🧑', teacher: '👩‍🏫', doctor: '👨‍⚕️', nurse: '👩‍⚕️',
  boy: '👦', girl: '👧', child: '🧒', man: '👨', woman: '👩', people: '👫',
  student: '🧑‍🎓', driver: '🚗', farmer: '👨‍🌾', cook: '👨‍🍳', police: '👮',
  apple: '🍎', banana: '🍌', orange: '🍊', grape: '🍇', pear: '🍐', peach: '🍑',
  strawberry: '🍓', watermelon: '🍉', lemon: '🍋', cherry: '🍒', mango: '🥭',
  pineapple: '🍍', kiwi: '🥝', fruit: '🍎',
  tomato: '🍅', potato: '🥔', carrot: '🥕', corn: '🌽', mushroom: '🍄',
  onion: '🧅', cabbage: '🥬', pumpkin: '🎃', vegetable: '🥦',
  bread: '🍞', cake: '🎂', milk: '🥛', egg: '🥚', eggs: '🥚', rice: '🍚',
  noodle: '🍜', noodles: '🍜', soup: '🍲', meat: '🍖', fish: '🐟', chicken: '🍗',
  hamburger: '🍔', pizza: '🍕', sandwich: '🥪', salad: '🥗', candy: '🍬',
  chocolate: '🍫', icecream: '🍦', cookie: '🍪', juice: '🧃', water: '💧',
  tea: '🍵', coffee: '☕', food: '🍽️', breakfast: '🥞', lunch: '🍱', dinner: '🍽️',
  cat: '🐱', dog: '🐶', pig: '🐷', cow: '🐮', duck: '🦆', hen: '🐔', bird: '🐦',
  rabbit: '🐰', mouse: '🐭', horse: '🐴', sheep: '🐑', tiger: '🐯', lion: '🦁',
  bear: '🐻', panda: '🐼', monkey: '🐵', elephant: '🐘', fish1: '🐠',
  snake: '🐍', frog: '🐸', bee: '🐝', butterfly: '🦋', animal: '🐾',
  red: '🔴', yellow: '🟡', blue: '🔵', green: '🟢', orange1: '🟠', purple: '🟣',
  black: '⚫', white: '⚪', pink: '🌸', brown: '🟤', color: '🎨',
  one: '1️⃣', two: '2️⃣', three: '3️⃣', four: '4️⃣', five: '5️⃣',
  six: '6️⃣', seven: '7️⃣', eight: '8️⃣', nine: '9️⃣', ten: '🔟',
  book: '📕', pen: '🖊️', pencil: '✏️', ruler: '📏', bag: '🎒', eraser: '🧽',
  school: '🏫', desk: '🪑', chair: '🪑', classroom: '🏫', homework: '📝',
  crayon: '🖍️', notebook: '📓', scissors: '✂️', glue: '🧴',
  head: '🗣️', hair: '💇', eye: '👁️', ear: '👂', nose: '👃', mouth: '👄',
  hand: '✋', foot: '🦶', leg: '🦵', arm: '💪', face: '😊', tooth: '🦷',
  sun: '☀️', moon: '🌙', star: '⭐', cloud: '☁️', rain: '🌧️', snow: '❄️',
  wind: '🌬️', rainbow: '🌈', tree: '🌳', flower: '🌸', grass: '🌿', leaf: '🍃',
  sky: '🌤️', sea: '🌊', mountain: '⛰️',
  car: '🚗', bus: '🚌', bike: '🚲', train: '🚆', plane: '✈️', boat: '⛵',
  ship: '🚢', taxi: '🚕', truck: '🚚',
  house: '🏠', home: '🏠', door: '🚪', window: '🪟', bed: '🛏️', sofa: '🛋️',
  table: '🪑', clock: '🕐', lamp: '💡', tv: '📺', phone: '📱', key: '🔑',
  ball: '⚽', basketball: '🏀', football: '⚽', soccer: '⚽', doll: '🧸',
  kite: '🪁', game: '🎮', music: '🎵', song: '🎶', dance: '💃',
  hat: '🧢', cap: '🧢', shirt: '👕', coat: '🧥', dress: '👗', shoe: '👟',
  shoes: '👟', sock: '🧦', pants: '👖', umbrella: '☂️',
  happy: '😊', sad: '😢', angry: '😠', tired: '😴', hungry: '🍽️',
  big: '🐘', small: '🐜', tall: '🦒', short: '🐧', hot: '🔥', cold: '🥶',
  up: '⬆️', down: '⬇️', in: '📥', out: '📤', left: '⬅️', right: '➡️',
  run: '🏃', walk: '🚶', jump: '🤸', swim: '🏊', sing: '🎤', read: '📖',
  write: '✍️', draw: '🎨', play: '🤾', eat: '🍽️', drink: '🥤', sleep: '😴',
  like: '❤️', love: '❤️', see: '👀', look: '👀', go: '🏃', come: '🏃',
  morning: '🌅', afternoon: '🌤️', evening: '🌆', night: '🌃', today: '📅',
  tomorrow: '📅', week: '🗓️', birthday: '🎂', park: '🏞️', zoo: '🦁',
  shop: '🏪', store: '🏪', hospital: '🏥', library: '📚'
};

const STOP = new Set(['a', 'an', 'the', 'is', 'am', 'are', 'to', 'of', 'in', 'on',
  'at', 'it', 'this', 'that', 'my', 'your', 'i', 'you', 'he', 'she', 'we', 'they',
  'and', 'do', 'does', 'can', 'have', 'has', 'me', 'him', 'her', 'his', 'our']);

// 词不够时，从内置词典随机借几个当干扰项
const DICT = Object.keys(EMOJI_MAP).filter(k => !/\d/.test(k) && k.length > 2 && !STOP.has(k));

function filler(need, exclude) {
  const ex = exclude.map(x => String(x).toLowerCase());
  return shuffle(DICT.filter(k => ex.indexOf(k) < 0)).slice(0, need);
}

/* ---------- 存储 ---------- */
const KEY_DATA = 'enggame_data_v1';
const KEY_PROG = 'enggame_prog_v1';

function blankData() {
  return { week: '本周', sentences: [], words: [], isDemo: false, settings: { recog: false, rate: 0.85 } };
}

function loadData() {
  try {
    const raw = localStorage.getItem(KEY_DATA);
    if (!raw) return blankData();
    const d = JSON.parse(raw);
    // 老数据没有 isDemo 字段：如果内容还是那套示例，仍然标成示例
    if (d.isDemo === undefined && d.week === '第 1 周' && Array.isArray(d.sentences)
      && d.sentences.length === 3 && d.sentences[0] && d.sentences[0].en === 'This is my mother.') {
      d.isDemo = true;
    }
    return Object.assign(blankData(), d, { settings: Object.assign(blankData().settings, d.settings || {}) });
  } catch (e) { return blankData(); }
}

function saveData() {
  try { localStorage.setItem(KEY_DATA, JSON.stringify(data)); } catch (e) {}
}

function loadProg() {
  try {
    const raw = localStorage.getItem(KEY_PROG);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  const p = {};
  ['juicy', 'geimi'].forEach(k => p[k] = { awarded: {} });
  return p;
}

function saveProg() {
  try { localStorage.setItem(KEY_PROG, JSON.stringify(prog)); } catch (e) {}
}

let data = loadData();
let prog = loadProg();

const state = {
  view: 'puzzle',
  kid: 'juicy',
  puzzleIdx: null,
  fillQs: [], fillI: 0,
  listenQs: [], listenI: 0,
  talkI: 0,
  recording: false
};

/* ---------- 小工具 ---------- */
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));

function esc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function emoOf(word) {
  const k = String(word || '').toLowerCase().replace(/[^a-z]/g, '');
  return EMOJI_MAP[k] || '';
}

function tokenize(s) {
  return (String(s).trim().match(/[A-Za-z][A-Za-z']*|[.,!?]/g) || []);
}

// 拆分 "英文 | 中文"
function splitSent(line) {
  let parts = line.split(/[|｜\t]/).map(s => s.trim()).filter(Boolean);
  if (!parts.length) return null;
  if (parts.length === 1) return { en: parts[0], zh: '' };
  const zi = parts.findIndex(p => /[\u4e00-\u9fa5]/.test(p));
  if (zi >= 0) {
    const zh = parts[zi];
    const en = parts.filter((_, i) => i !== zi).join(' ');
    return { en, zh };
  }
  return { en: parts[0], zh: parts.slice(1).join(' ') };
}

// 拆分 "apple 苹果" / "ice cream 冰淇淋"
function splitWord(line) {
  let parts;
  if (/[\t,，;；]/.test(line)) {
    parts = line.split(/[\t,，;；]/).map(s => s.trim()).filter(Boolean);
  } else {
    const seg = line.trim().split(/\s+/);
    if (seg.length <= 2) parts = seg;
    else parts = [seg.slice(0, -1).join(' '), seg[seg.length - 1]];
  }
  const en = (parts[0] || '').trim();
  const zh = parts.slice(1).join(' ').trim();
  if (!en) return null;
  return { en, zh };
}

/* ---------- 朗读 ---------- */
let cachedVoice = null;

function pickVoice() {
  if (cachedVoice) return cachedVoice;
  if (!('speechSynthesis' in window)) return null;
  const all = speechSynthesis.getVoices().filter(v => v.lang && v.lang.toLowerCase().startsWith('en'));
  if (!all.length) return null;
  const us = all.filter(v => v.lang.replace('_', '-').toLowerCase() === 'en-us');
  const pool = us.length ? us : all;
  const prefer = ['samantha', 'alex', 'ava', 'allison', 'susan', 'karen', 'daniel', 'moira', 'google us english'];
  for (const n of prefer) {
    const hit = pool.find(v => v.name.toLowerCase().includes(n));
    if (hit) { cachedVoice = hit; return hit; }
  }
  cachedVoice = pool[0];
  return cachedVoice;
}

if ('speechSynthesis' in window) {
  speechSynthesis.onvoiceschanged = () => { cachedVoice = null; pickVoice(); };
  pickVoice();
}

function speak(text, opts) {
  opts = opts || {};
  if (!('speechSynthesis' in window)) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = opts.rate || (data.settings.rate || 0.85);
    u.pitch = 1.05;
    const v = pickVoice();
    if (v) u.voice = v;
    if (opts.onend) u.onend = opts.onend;
    speechSynthesis.speak(u);
  } catch (e) {}
}

function shutUp() {
  if ('speechSynthesis' in window) { try { speechSynthesis.cancel(); } catch (e) {} }
}

/* ---------- 音效（无需音频文件） ---------- */
let AC = null;
function sfx(type) {
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    if (AC.state === 'suspended') AC.resume();
    const notes = { right: [523, 659, 784], wrong: [311, 233], tap: [700], win: [523, 659, 784, 1047] }[type] || [600];
    const t0 = AC.currentTime;
    notes.forEach((f, i) => {
      const o = AC.createOscillator(), g = AC.createGain();
      o.type = 'sine';
      o.frequency.value = f;
      const st = t0 + i * 0.1;
      g.gain.setValueAtTime(0.0001, st);
      g.gain.linearRampToValueAtTime(0.16, st + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, st + 0.25);
      o.connect(g); g.connect(AC.destination);
      o.start(st); o.stop(st + 0.28);
    });
  } catch (e) {}
}

/* iOS 上语音引擎必须在用户手势里先"碰"一次，否则后面自动朗读会没声音 */
let unlocked = false;
function unlockSpeech() {
  if (unlocked) return;
  unlocked = true;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    if (AC.state === 'suspended') AC.resume();
  } catch (e) {}
  if ('speechSynthesis' in window) {
    try {
      const u = new SpeechSynthesisUtterance(' ');
      u.volume = 0;
      u.lang = 'en-US';
      speechSynthesis.speak(u);
    } catch (e) {}
  }
}
document.addEventListener('click', unlockSpeech);

/* ---------- 彩纸 ---------- */
function confetti() {
  const layer = $('#confetti');
  const emos = ['🎉', '⭐', '🎊', '🌟', '🎈', '🍬'];
  for (let i = 0; i < 30; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.textContent = emos[i % emos.length];
    el.style.left = (Math.random() * 96 + 2) + 'vw';
    el.style.top = '-50px';
    layer.appendChild(el);
    const dur = 1700 + Math.random() * 1300;
    const anim = el.animate([
      { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
      { transform: `translate(${(Math.random() * 160 - 80).toFixed(0)}px, 110vh) rotate(${(Math.random() * 720 - 360).toFixed(0)}deg)`, opacity: 0.85 }
    ], { duration: dur, easing: 'cubic-bezier(.25,.6,.6,1)' });
    anim.onfinish = () => el.remove();
  }
}

/* ---------- 弹层 ---------- */
function showOverlay(html, ms) {
  $('#overlayCard').innerHTML = html;
  $('#overlay').classList.remove('hidden');
  if (ms) setTimeout(hideOverlay, ms);
}

function hideOverlay() {
  $('#overlay').classList.add('hidden');
  shutUp();
}

/* ---------- 星星 ---------- */
function award(key) {
  const p = prog[state.kid] || (prog[state.kid] = { awarded: {} });
  if (p.awarded[key]) return false;
  p.awarded[key] = true;
  saveProg();
  paintStars();
  return true;
}

function starCount() {
  const p = prog[state.kid];
  return p ? Object.keys(p.awarded || {}).length : 0;
}

function paintStars() {
  $('#starNum').textContent = starCount();
}

function isDone(view) {
  const p = prog[state.kid] || { awarded: {} };
  const keys = Object.keys(p.awarded || {});
  return keys.some(k => k.indexOf(view + '_') === 0);
}

function weekCleared() {
  return ['puzzle', 'fill', 'listen', 'talk'].every(isDone);
}

/* ---------- 顶部 ---------- */
function paintTop() {
  $('#weekLabel').textContent = data.week || '本周';
  const sc = data.sentences.length, wc = data.words.length;
  $('#weekSub').textContent = (sc || wc)
    ? `${sc} 个句型 · ${wc} 个单词` + (weekCleared() ? ' · 本周通关 🎉' : '')
    : '还没有内容，点「录入」加进去';
  $$('.kid-btn').forEach(b => b.classList.toggle('active', b.dataset.kid === state.kid));
  $$('.tab').forEach(b => b.classList.toggle('active', b.dataset.view === state.view));
  paintStars();
}

/* =========================================================
   视图：拼句子
   ========================================================= */
function viewPuzzle() {
  if (!data.sentences.length) return emptyView('🧩', '还没有句型', '去「设置」里把本周句型粘进去');
  if (state.puzzleIdx === null) return viewPuzzleList();

  const s = data.sentences[state.puzzleIdx];
  const toks = tokenize(s.en);
  const last = toks[toks.length - 1] || '';
  const tail = /^[.,!?]$/.test(last) ? last : '';

  let html = '<div class="view-inner">';
  html += `<h2 class="page-title">把单词排成句子</h2>`;
  html += `<p class="page-hint">${esc(s.zh || '点下面的单词卡片，按顺序放进上面的方框')}</p>`;
  html += `<div class="slots-row" id="slots"></div>`;
  if (tail) {
    html += `<p class="page-hint" style="text-align:center;margin:-6px 0 14px">句尾的「${esc(tail)}」已经帮你放好啦</p>`;
  }
  html += `<div class="cards-row" id="cards"></div>`;
  html += `<div class="puzzle-bar">
      <button class="big-btn ghost" data-act="pz-hint">💡 提示</button>
      <button class="big-btn blue" data-act="pz-speak">🔊 听一听</button>
      <button class="big-btn ghost" data-act="pz-reset">🔄 重来</button>
      <button class="big-btn ghost" data-act="pz-back">← 换一句</button>
    </div>`;
  html += `</div>`;
  return html;
}

function viewPuzzleList() {
  let html = '<div class="view-inner">';
  if (data.isDemo) {
    html += `<button class="demo-banner" data-act="go-setup">
      👀 现在显示的是<b>示例内容</b>，不是孩子这周真正学的<br>
      <span class="demo-cta">点这里把句型和单词换掉 →</span>
    </button>`;
  }
  html += `<h2 class="page-title">选一句来拼</h2>`;
  html += `<p class="page-hint">点一下要练的句子</p>`;
  html += '<div class="sent-list">';
  data.sentences.forEach((s, i) => {
    const done = (prog[state.kid] || { awarded: {} }).awarded['puzzle_' + i];
    html += `<button class="sent-card ${done ? 'done' : ''}" data-act="pz-open" data-i="${i}">
      ${done ? '<span class="done-flag">✅</span>' : ''}
      <div class="en">${esc(s.en)}</div>
      <div class="zh">${esc(s.zh || '')}</div>
    </button>`;
  });
  html += '</div></div>';
  return html;
}

function puzzleState() {
  const s = data.sentences[state.puzzleIdx];
  const toks = tokenize(s.en);
  const tail = /[.,!?]/.test(toks[toks.length - 1]) ? toks[toks.length - 1] : '';
  const words = tail ? toks.slice(0, -1) : toks;
  return { words, pieces: shuffle(words) };
}

// 运行时状态挂在 DOM 上
let pz = { words: [], pieces: [], used: {}, slots: [] };

function initPuzzle() {
  const st = puzzleState();
  pz = { words: st.words, pieces: st.pieces, used: {}, slots: new Array(st.words.length).fill(null) };
  paintPuzzle();
}

function paintPuzzle() {
  const slotsEl = $('#slots');
  slotsEl.innerHTML = pz.words.map((w, i) => {
    const v = pz.slots[i];
    return `<div class="slot ${v ? 'filled' : ''}" data-act="pz-unslot" data-i="${i}">${v ? esc(v) : ''}</div>`;
  }).join('');

  $('#cards').innerHTML = pz.pieces.map((w, i) => {
    return `<button class="word-card ${pz.used[i] ? 'used' : ''}" data-act="pz-slot" data-p="${i}">${esc(w)}</button>`;
  }).join('');
}

function pzPlace(pIdx) {
  if (pz.used[pIdx]) return;
  const empty = pz.slots.indexOf(null);
  if (empty < 0) return;
  pz.used[pIdx] = true;
  pz.slots[empty] = pz.pieces[pIdx];
  sfx('tap');
  paintPuzzle();
  if (pz.slots.indexOf(null) < 0) setTimeout(pzCheck, 180);
}

function pzUnslot(i) {
  if (!pz.slots[i]) return;
  const w = pz.slots[i];
  // 找到对应卡片下标（优先未使用的同内容卡片）
  const idx = pz.pieces.findIndex((p, k) => p === w && !pz.used[k]);
  if (idx >= 0) pz.used[idx] = false;
  else {
    const any = pz.pieces.findIndex((p, k) => p === w && pz.used[k]);
    if (any >= 0) pz.used[any] = false;
  }
  pz.slots[i] = null;
  sfx('tap');
  paintPuzzle();
}

function pzCheck() {
  const ok = pz.slots.every((v, i) => String(v).toLowerCase() === String(pz.words[i]).toLowerCase());
  const s = data.sentences[state.puzzleIdx];
  if (ok) {
    sfx('win');
    confetti();
    $$('.slot').forEach(el => el.classList.add('right'));
    const fresh = award('puzzle_' + state.puzzleIdx);
    speak(s.en, { rate: 0.8 });
    showOverlay(`<div class="overlay-emoji">🎉</div>
      <h3 class="overlay-title">拼对啦！</h3>
      <p class="overlay-text">${esc(s.en)}<br><span style="color:#a0a0a0">${esc(s.zh || '')}</span></p>
      <button class="big-btn green" data-act="ov-closepuzzle">继续 →</button>`);
  } else {
    sfx('wrong');
    $$('.slot').forEach(el => el.classList.add('wrong'));
    setTimeout(() => {
      pz.slots = new Array(pz.words.length).fill(null);
      pz.used = {};
      paintPuzzle();
    }, 1200);
  }
}

function pzPut(i) {
  const idx = pz.pieces.findIndex((p, k) => p.toLowerCase() === pz.words[i].toLowerCase() && !pz.used[k]);
  if (idx < 0) return false;
  pz.used[idx] = true;
  pz.slots[i] = pz.pieces[idx];
  paintPuzzle();
  const c = $$('.word-card')[idx];
  if (c) c.classList.add('hinted');
  return true;
}

function pzHint() {
  // 从左往右找到第一个不对的位置：错的先撤回，再把正确词放进去
  for (let i = 0; i < pz.words.length; i++) {
    const cur = pz.slots[i];
    if (cur && String(cur).toLowerCase() === String(pz.words[i]).toLowerCase()) continue;
    if (cur) pzUnslot(i);
    if (pzPut(i)) sfx('tap');
    if (pz.slots.indexOf(null) < 0) setTimeout(pzCheck, 180);
    return;
  }
}

/* =========================================================
   视图：挖空填空
   ========================================================= */
function buildFillQs() {
  const qs = [];
  const allWords = data.words.map(w => w.en);

  data.sentences.forEach((s, si) => {
    const toks = tokenize(s.en);
    const cands = toks.filter(t => /^[A-Za-z]/.test(t) && t.length > 2 && !STOP.has(t.toLowerCase()));
    if (!cands.length) return;
    const target = cands[Math.floor(Math.random() * cands.length)];
    // 干扰项：本周其他单词
    let pool = allWords.filter(w => w.toLowerCase() !== target.toLowerCase());
    // 再从其他句型里捞实词
    data.sentences.forEach((o, oi) => {
      if (oi === si) return;
      tokenize(o.en).forEach(t => {
        if (/^[A-Za-z]/.test(t) && t.length > 2 && !STOP.has(t.toLowerCase()) && t.toLowerCase() !== target.toLowerCase()) pool.push(t);
      });
    });
    pool = Array.from(new Set(pool));
    const need = 3 - pool.length;
    if (need > 0) pool = pool.concat(filler(need, pool.concat([target])));
    const opts = shuffle([target].concat(shuffle(pool).slice(0, 3)));
    qs.push({ kind: 'sentence', target, opts, sent: s, si });
  });

  data.words.forEach((w, wi) => {
    let pool = allWords.filter(x => x.toLowerCase() !== w.en.toLowerCase());
    const need = 3 - pool.length;
    if (need > 0) pool = pool.concat(filler(need, pool.concat([w.en])));
    const opts = shuffle([w.en].concat(shuffle(pool).slice(0, 3)));
    qs.push({ kind: 'word', target: w.en, opts, word: w, wi });
  });

  return qs;
}

function viewFill() {
  if (!data.sentences.length && !data.words.length) return emptyView('🕳️', '还没有内容', '去「设置」里添加句型和单词');
  if (!state.fillQs.length) state.fillQs = shuffle(buildFillQs());
  const q = state.fillQs[state.fillI];
  if (!q) { setTimeout(() => { state.fillQs = []; state.fillI = 0; render(); }, 0); return '<div class="view-inner"></div>'; }

  let body = '';
  if (q.kind === 'sentence') {
    const parts = q.sent.en.split(new RegExp(`\\b${q.target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i'));
    body = `<div class="fill-sentence">${esc(parts[0] || '')}<span class="blank">&nbsp;?&nbsp;</span>${esc(parts.slice(1).join(q.target) || '')}</div>
            <div class="fill-zh">${esc(q.sent.zh || '')}</div>`;
  } else {
    body = `<div class="fill-sentence"><span class="blank">&nbsp;?&nbsp;</span></div>
            <div class="fill-zh">${esc(q.word.zh || '这个东西英文怎么说？')}</div>`;
  }

  let html = '<div class="view-inner">';
  html += `<h2 class="page-title">选一个词填进去</h2>`;
  html += `<p class="page-hint">第 ${state.fillI + 1} / ${state.fillQs.length} 题</p>`;
  html += body;
  html += '<div class="opt-grid" id="optGrid">';
  q.opts.forEach(o => {
    const ico = emoOf(o);
    html += `<button class="opt-card" data-act="fill-pick" data-w="${esc(o)}">
      ${ico ? `<span class="ico">${ico}</span>` : ''}
      <span class="en">${esc(o)}</span>
    </button>`;
  });
  html += '</div></div>';
  return html;
}

function fillPick(btn) {
  const q = state.fillQs[state.fillI];
  const pick = btn.dataset.w;
  if (pick.toLowerCase() === q.target.toLowerCase()) {
    btn.classList.add('ok');
    sfx('right');
    const key = q.kind === 'sentence' ? 'fill_s' + q.si : 'fill_w' + q.wi;
    award(key);
    speak(q.kind === 'sentence' ? q.sent.en : q.target);
    setTimeout(() => {
      state.fillI++;
      if (state.fillI >= state.fillQs.length) {
        state.fillQs = [];
        state.fillI = 0;
        showFillFinish();
      } else render();
    }, 1100);
  } else {
    btn.classList.add('no');
    sfx('wrong');
    setTimeout(() => btn.classList.remove('no'), 600);
  }
}

function showFillFinish() {
  sfx('win');
  confetti();
  showOverlay(`<div class="overlay-emoji">🏆</div>
    <h3 class="overlay-title">全部填完啦！</h3>
    <p class="overlay-text">这一轮的题目都做完了</p>
    <button class="big-btn green" data-act="ov-restart-fill">再来一轮 →</button>`);
}

/* =========================================================
   视图：听音选词
   ========================================================= */
function buildListenQs() {
  const qs = [];
  const allWords = data.words.map(w => w.en);
  data.words.forEach((w, wi) => {
    let pool = allWords.filter(x => x.toLowerCase() !== w.en.toLowerCase());
    const need = 3 - pool.length;
    if (need > 0) pool = pool.concat(filler(need, pool.concat([w.en])));
    const opts = shuffle([w.en].concat(shuffle(pool).slice(0, 3)));
    qs.push({ kind: 'word', target: w.en, opts, zh: w.zh, wi });
  });
  data.sentences.forEach((s, si) => {
    const pool = data.sentences.filter((_, i) => i !== si).map(o => o.zh).filter(Boolean);
    if (pool.length < 3) return;
    const opts = shuffle([s.zh].concat(shuffle(pool).slice(0, 3)));
    qs.push({ kind: 'sent', target: s.en, opts, zh: '', si });
  });
  return qs;
}

function viewListen() {
  if (!data.words.length && !data.sentences.length) return emptyView('👂', '还没有内容', '去「设置」里添加句型和单词');
  if (!state.listenQs.length) state.listenQs = shuffle(buildListenQs());
  const q = state.listenQs[state.listenI];
  if (!q) { setTimeout(() => { state.listenQs = []; state.listenI = 0; render(); }, 0); return '<div class="view-inner"></div>'; }

  let html = '<div class="view-inner">';
  html += `<h2 class="page-title">听一听，是哪个？</h2>`;
  html += `<p class="page-hint">第 ${state.listenI + 1} / ${state.listenQs.length} 题</p>`;
  html += `<div class="listen-hero">
      <button class="play-btn" data-act="ls-play">🔊</button>
      <div class="listen-hint">再点一次可以再听一遍</div>
      <div class="listen-zh-hint" id="lsReveal"></div>
    </div>`;
  html += '<div class="opt-grid" id="lsGrid">';
  q.opts.forEach(o => {
    const ico = q.kind === 'word' ? emoOf(o) : '';
    html += `<button class="opt-card" data-act="ls-pick" data-w="${esc(o)}">
      ${ico ? `<span class="ico">${ico}</span>` : ''}
      <span class="en">${esc(o)}</span>
    </button>`;
  });
  html += '</div></div>';
  return html;
}

function listenPlay() {
  const q = state.listenQs[state.listenI];
  sfx('tap');
  speak(q.target, { rate: 0.75 });
}

function listenPick(btn) {
  const q = state.listenQs[state.listenI];
  const pick = btn.dataset.w;
  // 单词题：听到的英文；句型题：听到的整句对应的中文
  const right = q.kind === 'word'
    ? pick.toLowerCase() === q.target.toLowerCase()
    : pick === data.sentences[q.si].zh;

  if (right) {
    btn.classList.add('ok');
    sfx('right');
    award(q.kind === 'word' ? 'listen_w' + q.wi : 'listen_s' + q.si);
    speak(q.target, { rate: 0.8 });
    setTimeout(() => {
      state.listenI++;
      if (state.listenI >= state.listenQs.length) {
        state.listenQs = [];
        state.listenI = 0;
        showListenFinish();
      } else render();
    }, 1100);
  } else {
    btn.classList.add('no');
    sfx('wrong');
    setTimeout(() => btn.classList.remove('no'), 600);
  }
}

function showListenFinish() {
  sfx('win');
  confetti();
  showOverlay(`<div class="overlay-emoji">🎧</div>
    <h3 class="overlay-title">耳朵真灵！</h3>
    <p class="overlay-text">这一轮听力都听出来了</p>
    <button class="big-btn green" data-act="ov-restart-listen">再来一轮 →</button>`);
}

/* =========================================================
   视图：语音对话 / 跟读
   ========================================================= */
function viewTalk() {
  if (!data.sentences.length) return emptyView('💬', '还没有句型', '去「设置」里把本周句型粘进去');
  const list = data.sentences;
  if (state.talkI >= list.length) return talkFinishView();
  const s = list[state.talkI];
  const talkIco = (s.en.split(/\s+/).map(emoOf).find(Boolean) || '');

  let html = '<div class="view-inner">';
  html += `<h2 class="page-title">大声说出来</h2>`;
  html += `<p class="page-hint">先听一遍，再跟着读出来</p>`;
  html += `<div class="talk-stage">
      <div class="talk-role">第 ${state.talkI + 1} / ${list.length} 句</div>
      ${talkIco ? `<div class="talk-emoji">${talkIco}</div>` : ''}
      <div class="talk-en">${esc(s.en)}</div>
      <div class="talk-zh">${esc(s.zh || '')}</div>
      <button class="mic-btn" data-act="tk-mic">🎤</button>
      <div class="heard-text hidden" id="heard"></div>
    </div>`;
  html += `<div class="talk-nav">
      <button class="big-btn blue" data-act="tk-play">🔊 听一遍</button>
      <button class="big-btn ${state.recording ? 'ghost' : 'green'}" data-act="tk-done">${state.recording ? '⏹ 说完了，下一句' : '✅ 读好了，下一句'}</button>
      <button class="big-btn ghost" data-act="tk-prev">← 上一句</button>
    </div>`;
  html += `<div class="progress-dots">`;
  list.forEach((_, i) => {
    const cls = i < state.talkI ? 'done' : (i === state.talkI ? 'on' : '');
    html += `<div class="dot ${cls}"></div>`;
  });
  html += `</div>`;
  html += `</div>`;
  return html;
}

function talkFinishView() {
  return `<div class="view-inner"><div class="empty">
    <div class="ico">🗣️</div>
    <div class="txt">这一轮都说完啦！</div>
    <button class="big-btn green" data-act="tk-restart">再说一轮 →</button>
  </div></div>`;
}

/* 语音识别（可选，不支持会自动退回跟读） */
let recogObj = null;

function startRecog(cb) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) { cb(null, 'unsupported'); return; }
  try {
    const r = new SR();
    r.lang = 'en-US';
    r.interimResults = false;
    r.maxAlternatives = 3;
    let got = false;
    r.onresult = e => {
      got = true;
      const res = e.results[0];
      let best = '';
      for (let i = 0; i < res.length; i++) best = best || res[i].transcript;
      cb(best, null);
    };
    r.onerror = e => { if (!got) cb(null, e.error || 'error'); };
    r.onend = () => { if (!got) cb(null, 'noresult'); };
    r.start();
    recogObj = r;
  } catch (e) { cb(null, 'error'); }
}

function talkMic() {
  const s = data.sentences[state.talkI];
  const heard = $('#heard');
  if (!heard) return;

  if (!data.settings.recog) {
    // 跟读模式：点击 = 朗读 + 提示孩子跟着读
    speak(s.en, { rate: 0.75 });
    heard.classList.remove('hidden', 'bad');
    heard.textContent = '🔊 跟着读一遍吧';
    return;
  }

  if (state.recording) {
    try { recogObj && recogObj.stop(); } catch (e) {}
    state.recording = false;
    render();
    return;
  }

  state.recording = true;
  render();
  const btn = document.querySelector('.mic-btn');
  btn && btn.classList.add('recording');
  heard.classList.remove('hidden', 'bad');
  heard.textContent = '🎙️ 在听你说…';

  startRecog((text, err) => {
    state.recording = false;
    const el = $('#heard');
    if (!el) return;
    if (text) {
      const norm = t => String(t).toLowerCase().replace(/[^a-z\s]/g, ' ').trim();
      const want = norm(s.en).split(/\s+/).filter(Boolean);
      const got = norm(text).split(/\s+/).filter(Boolean);
      let hit = 0;
      want.forEach(w => { if (got.indexOf(w) >= 0) hit++; });
      const score = hit / Math.max(want.length, 1);
      el.classList.remove('hidden');
      if (score >= 0.6) {
        el.classList.remove('bad');
        el.textContent = `👂 听到啦：${text}`;
        sfx('right');
        award('talk_' + state.talkI);
      } else {
        el.classList.add('bad');
        el.textContent = `👂 听到：${text}（再试一次）`;
      }
    } else {
      el.classList.add('bad');
      const msg = err === 'not-allowed' ? '没拿到麦克风权限，去设置里打开' :
        err === 'no-speech' ? '没听到声音，靠近一点再说' :
        err === 'unsupported' ? '这台设备不能用听写，已切回跟读模式' : '没听清，再试一次';
      el.textContent = `🙈 ${msg}`;
      if (err === 'unsupported') data.settings.recog = false;
    }
  });
}

function talkDone() {
  const s = data.sentences[state.talkI];
  if (state.recording) {
    try { recogObj && recogObj.stop(); } catch (e) {}
    state.recording = false;
  }
  if (!data.settings.recog) {
    award('talk_' + state.talkI);   // 跟读模式：读完即记
  }
  speak(s.en, { rate: 0.8 });
  sfx('tap');
  state.talkI++;
  if (state.talkI >= data.sentences.length) {
    sfx('win');
    confetti();
    showOverlay(`<div class="overlay-emoji">🎤</div>
      <h3 class="overlay-title">全部读完啦！</h3>
      <p class="overlay-text">今天又说了 ${data.sentences.length} 句英语</p>
      <button class="big-btn green" data-act="tk-restart">再来一轮 →</button>`);
    state.talkI = 0;
    render();
    return;
  }
  render();
}

/* =========================================================
   视图：设置
   ========================================================= */
function viewSetup() {
  let html = '<div class="view-inner">';
  html += `<h2 class="page-title">本周内容</h2>`;
  html += `<p class="page-hint">把孩子这周学的句型和单词粘进来，四个游戏会自动用上</p>`;

  html += `<div class="setup-block">
    <h3>本周名字</h3>
    <input class="input" id="inpWeek" value="${esc(data.week)}" placeholder="比如：第 8 周">
  </div>`;

  html += `<div class="setup-block">
    <h3>句型</h3>
    <p class="desc">一行一句。格式：<b>英文 | 中文</b>（没有中文也行）<br>
      例：<b>This is my mother. | 这是我的妈妈。</b></p>
    <textarea class="input" id="inpSent" placeholder="This is my mother. | 这是我的妈妈。&#10;I like apples. | 我喜欢苹果。">${esc(data.sentences.map(s => s.en + (s.zh ? ' | ' + s.zh : '')).join('\n'))}</textarea>
  </div>`;

  html += `<div class="setup-block">
    <h3>单词</h3>
    <p class="desc">一行一个。格式：<b>英文 中文</b>（空格或逗号隔开都行）<br>
      例：<b>apple 苹果</b>　或　<b>ice cream,冰淇淋</b></p>
    <textarea class="input" id="inpWord" placeholder="apple 苹果&#10;banana 香蕉&#10;mother 妈妈">${esc(data.words.map(w => w.en + (w.zh ? ' ' + w.zh : '')).join('\n'))}</textarea>
    <div class="row-btns">
      <button class="small-btn primary" data-act="su-save">💾 保存本周内容</button>
      <button class="small-btn" data-act="su-demo">🎁 填入示例内容</button>
      <button class="small-btn danger" data-act="su-clear">🗑 清空内容</button>
    </div>
  </div>`;

  if (data.words.length) {
    html += `<div class="setup-block"><h3>已录入的单词（${data.words.length}）</h3>
      <div class="word-chips">`;
    data.words.forEach((w, i) => {
      const ico = emoOf(w.en) || w.emoji || '';
      html += `<span class="chip">${ico ? `<span class="chip-ico">${ico}</span>` : ''}<b>${esc(w.en)}</b><span class="chip-zh">${esc(w.zh || '')}</span><span class="chip-x" data-act="su-delword" data-i="${i}">✕</span></span>`;
    });
    html += `</div></div>`;
  }

  html += `<div class="setup-block">
    <h3>声音与语音</h3>
    <div class="switch-row">
      <div>
        <div class="switch-label">跟读打分（语音识别）</div>
        <div class="switch-desc">iPad 上不一定能用；用不了会自动退回跟读模式</div>
      </div>
      <button class="toggle ${data.settings.recog ? 'on' : ''}" data-act="su-recog"><span class="knob"></span></button>
    </div>
    <div class="switch-row">
      <div>
        <div class="switch-label">朗读速度</div>
        <div class="switch-desc">孩子跟读建议用「慢」</div>
      </div>
      <div class="row-btns" style="margin:0">
        ${[['慢', 0.7], ['中', 0.85], ['快', 1]].map(([t, v]) =>
          `<button class="small-btn ${Math.abs(data.settings.rate - v) < 0.01 ? 'primary' : ''}" data-act="su-rate" data-v="${v}">${t}</button>`).join('')}
      </div>
    </div>
    <div class="switch-row">
      <div>
        <div class="switch-label">试听一下</div>
        <div class="switch-desc">听不到声音：检查 iPad 侧边静音键是否已关闭</div>
      </div>
      <button class="small-btn" data-act="su-test">🔊 试听</button>
    </div>
  </div>`;

  html += `<div class="setup-block">
    <h3>备份与复用</h3>
    <p class="desc">下周换内容前，可以把这周导出存着</p>
    <div class="row-btns">
      <button class="small-btn" data-act="su-export">📤 导出本周</button>
      <button class="small-btn" data-act="su-import">📥 导入</button>
    </div>
  </div>`;

  html += `<div class="setup-block">
    <h3>怎么用（第一次看这里）</h3>
    <div class="desc" style="font-size:16px;line-height:1.9">
      1. 在这里把本周句型、单词粘进来，点「保存本周内容」。<br>
      2. 上面点 <b>juicy / geimi</b> 切换孩子，两个人的星星各记各的。<br>
      3. 每天玩 10 分钟：<b>🧩拼句子 → 🕳️填空 → 👂听音 → 💬对话</b>。<br>
      4. iPad 发音设置：<b>设置 → 辅助功能 → 朗读内容 → 声音 → 英语</b>，
         下一个女声（如 Samantha）并下载。<br>
      5. 把它加到主屏幕：Safari 打开 → 分享 → 添加到主屏幕，就变成一个 App 图标。<br>
      6. 侧边<b>静音键</b>打开的话听不到声音，记得拨回去。
    </div>
    <div class="row-btns">
      <button class="small-btn danger" data-act="su-resetstars">🔄 清空两个孩子的星星</button>
    </div>
  </div>`;

  html += '</div>';
  return html;
}

function emptyView(ico, txt, sub) {
  return `<div class="view-inner"><div class="empty">
    <div class="ico">${ico}</div>
    <div class="txt">${txt}<br><span style="font-size:17px">${sub}</span></div>
    <button class="big-btn" data-act="go-setup">去设置 →</button>
  </div></div>`;
}

function demoData() {
  data.week = '第 1 周';
  data.isDemo = true;
  data.sentences = [
    { en: 'This is my mother.', zh: '这是我的妈妈。' },
    { en: 'I like apples.', zh: '我喜欢苹果。' },
    { en: 'She is a teacher.', zh: '她是一位老师。' }
  ];
  data.words = [
    { en: 'mother', zh: '妈妈' }, { en: 'father', zh: '爸爸' },
    { en: 'sister', zh: '姐妹' }, { en: 'apple', zh: '苹果' },
    { en: 'banana', zh: '香蕉' }, { en: 'orange', zh: '橙子' },
    { en: 'teacher', zh: '老师' }, { en: 'doctor', zh: '医生' }
  ];
  saveData();
}

/* =========================================================
   渲染与事件
   ========================================================= */
function render() {
  const v = $('#view');
  const map = { puzzle: viewPuzzle, fill: viewFill, listen: viewListen, talk: viewTalk, setup: viewSetup };
  v.innerHTML = (map[state.view] || viewPuzzle)();
  v.scrollTop = 0;
  paintTop();
  if (state.view === 'puzzle' && state.puzzleIdx !== null) initPuzzle();
}

function switchView(name) {
  shutUp();
  state.view = name;
  if (name === 'fill') { state.fillQs = []; state.fillI = 0; }
  if (name === 'listen') { state.listenQs = []; state.listenI = 0; }
  render();
}

document.addEventListener('DOMContentLoaded', () => {
  // 底部导航
  $('#tabbar').addEventListener('click', e => {
    const t = e.target.closest('.tab');
    if (!t) return;
    sfx('tap');
    switchView(t.dataset.view);
  });

  // 孩子切换
  $('#kidSwitch').addEventListener('click', e => {
    const b = e.target.closest('.kid-btn');
    if (!b) return;
    state.kid = b.dataset.kid;
    sfx('tap');
    render();
  });

  // 顶部「录入」按钮
  $('#editBtn').addEventListener('click', () => {
    sfx('tap');
    switchView('setup');
  });

  // 主视图事件
  $('#view').addEventListener('click', e => {
    const el = e.target.closest('[data-act]');
    if (!el) return;
    const act = el.dataset.act;

    if (act === 'go-setup') { switchView('setup'); return; }

    // 拼句子
    if (act === 'pz-open') { state.puzzleIdx = +el.dataset.i; sfx('tap'); render(); return; }
    if (act === 'pz-slot') { pzPlace(+el.dataset.p); return; }
    if (act === 'pz-unslot') { pzUnslot(+el.dataset.i); return; }
    if (act === 'pz-hint') { pzHint(); return; }
    if (act === 'pz-speak') { speak(data.sentences[state.puzzleIdx].en, { rate: 0.8 }); return; }
    if (act === 'pz-reset') { initPuzzle(); return; }
    if (act === 'pz-back') { state.puzzleIdx = null; sfx('tap'); render(); return; }

    // 填空
    if (act === 'fill-pick') { fillPick(el); return; }

    // 听音
    if (act === 'ls-play') { listenPlay(); return; }
    if (act === 'ls-pick') { listenPick(el); return; }

    // 对话
    if (act === 'tk-mic') { talkMic(); return; }
    if (act === 'tk-play') { speak(data.sentences[state.talkI].en, { rate: 0.75 }); return; }
    if (act === 'tk-done') { talkDone(); return; }
    if (act === 'tk-prev') { state.talkI = Math.max(0, state.talkI - 1); sfx('tap'); render(); return; }
    if (act === 'tk-restart') { state.talkI = 0; hideOverlay(); sfx('tap'); render(); return; }

    // 设置
    if (act === 'su-save') { saveSetup(); return; }
    if (act === 'su-demo') { demoData(); sfx('right'); showOverlay(`<div class="overlay-emoji">🎁</div><h3 class="overlay-title">示例已填入</h3><p class="overlay-text">先拿示例玩一遍，熟了再换成孩子真正的课本内容</p><button class="big-btn" data-act="ov-close">知道了</button>`); return; }
    if (act === 'su-clear') {
      data.sentences = []; data.words = [];
      state.puzzleIdx = null; state.fillQs = []; state.fillI = 0; state.listenQs = []; state.listenI = 0; state.talkI = 0;
      saveData(); sfx('tap'); render();
      return;
    }
    if (act === 'su-delword') { data.words.splice(+el.dataset.i, 1); saveData(); render(); return; }
    if (act === 'su-recog') {
      data.settings.recog = !data.settings.recog;
      saveData();
      render();
      if (data.settings.recog) speak('Hello, I can hear you.', { rate: 0.85 });
      return;
    }
    if (act === 'su-rate') { data.settings.rate = +el.dataset.v; saveData(); render(); speak('Hello!', { rate: +el.dataset.v }); return; }
    if (act === 'su-test') { speak('Hello! This is my mother. I like apples.', { rate: data.settings.rate }); return; }
    if (act === 'su-export') { exportData(); return; }
    if (act === 'su-import') { importData(); return; }
    if (act === 'su-resetstars') {
      ['juicy', 'geimi'].forEach(k => prog[k] = { awarded: {} });
      saveProg(); sfx('tap'); paintTop();
      showOverlay(`<div class="overlay-emoji">🔄</div><h3 class="overlay-title">星星已清空</h3><p class="overlay-text">换新一周内容时清一次就行</p><button class="big-btn" data-act="ov-close">好的</button>`);
      return;
    }
  });

  // 弹层事件
  $('#overlay').addEventListener('click', e => {
    const el = e.target.closest('[data-act]');
    if (e.target.id === 'overlay') { hideOverlay(); return; }
    if (!el) return;
    const act = el.dataset.act;
    hideOverlay();
    if (act === 'ov-closepuzzle') { state.puzzleIdx = null; render(); }
    if (act === 'ov-restart-fill') { state.fillQs = []; state.fillI = 0; render(); }
    if (act === 'ov-restart-listen') { state.listenQs = []; state.listenI = 0; render(); }
  });

  render();
});

/* ---------- 保存设置 ---------- */
function saveSetup() {
  const week = ($('#inpWeek').value || '').trim() || '本周';
  const sentLines = ($('#inpSent').value || '').split('\n').map(s => s.trim()).filter(Boolean);
  const wordLines = ($('#inpWord').value || '').split('\n').map(s => s.trim()).filter(Boolean);

  data.week = week;
  data.sentences = sentLines.map(splitSent).filter(x => x && x.en);
  data.words = wordLines.map(splitWord).filter(x => x && x.en);
  data.isDemo = false;

  state.puzzleIdx = null;
  state.fillQs = []; state.fillI = 0;
  state.listenQs = []; state.listenI = 0;
  state.talkI = 0;

  saveData();
  sfx('right');
  render();
  showOverlay(`<div class="overlay-emoji">✅</div>
    <h3 class="overlay-title">已保存</h3>
    <p class="overlay-text">${data.sentences.length} 个句型 · ${data.words.length} 个单词<br>可以去玩了</p>
    <button class="big-btn green" data-act="ov-close">开始玩 →</button>`);
}

/* ---------- 导入导出 ---------- */
function exportData() {
  const name = `${data.week || '本周'}-英语内容.json`;
  const blob = new Blob([JSON.stringify({ week: data.week, sentences: data.sentences, words: data.words }, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 500);
  showOverlay(`<div class="overlay-emoji">📤</div><h3 class="overlay-title">已导出</h3><p class="overlay-text">文件名：${esc(name)}<br>存在「文件」App 里，下周可以导回来</p><button class="big-btn" data-act="ov-close">好的</button>`);
}

function importData() {
  const inp = document.createElement('input');
  inp.type = 'file';
  inp.accept = '.json,application/json';
  inp.onchange = () => {
    const f = inp.files && inp.files[0];
    if (!f) return;
    const fr = new FileReader();
    fr.onload = () => {
      try {
        const d = JSON.parse(fr.result);
        if (!d || !Array.isArray(d.sentences) || !Array.isArray(d.words)) throw new Error('格式不对');
        data.week = d.week || '本周';
        data.sentences = d.sentences;
        data.words = d.words;
        data.isDemo = false;
        state.puzzleIdx = null;
        state.fillQs = []; state.fillI = 0;
        state.listenQs = []; state.listenI = 0;
        state.talkI = 0;
        saveData();
        sfx('right');
        render();
        showOverlay(`<div class="overlay-emoji">📥</div><h3 class="overlay-title">导入成功</h3><p class="overlay-text">${esc(data.week)}：${data.sentences.length} 句型 · ${data.words.length} 单词</p><button class="big-btn green" data-act="ov-close">开始玩 →</button>`);
      } catch (err) {
        showOverlay(`<div class="overlay-emoji">🙈</div><h3 class="overlay-title">导入失败</h3><p class="overlay-text">这个文件读不出来，确认是本游戏导出的 JSON</p><button class="big-btn" data-act="ov-close">知道了</button>`);
      }
    };
    fr.readAsText(f);
  };
  inp.click();
}

/* ---------- 首次进入：没有内容就先给示例，方便上手 ---------- */
(function firstRun() {
  if (!data.sentences.length && !data.words.length) {
    demoData();
  }
})();
