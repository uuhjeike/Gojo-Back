'use strict';

/* ==========================================================================
   CONFIG — single source of truth. Change once, every post updates.
   ========================================================================== */
const CONFIG = {
  postSourceUrl: 'https://sites.google.com/view/gojo-back/home',
  postSourceLabel: 'Source · Gojo Back ↗',
  postsFilePath: './text%201.txt',
  githubRepoBlobPattern: /^https?:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\/(.+)$/i,
  // The supplied file currently reads newest → oldest from top to bottom
  // (confirmed against the dated entries embedded in the posts). Flip to
  // 'oldest-first' if a future export is written chronologically instead.
  sourceOrder: 'newest-first'
};

const IMAGE_EXT = /\.(jpe?g|png|gif|webp|avif|bmp|svg)(\?.*)?$/i;
const VIDEO_EXT = /\.(mp4|webm|mov|m4v)(\?.*)?$/i;
const AUDIO_EXT = /\.(mp3|wav|ogg|m4a|aac)(\?.*)?$/i;
const TEXT_EXT = /\.(txt|md)(\?.*)?$/i;

const URL_RE = /(https?:\/\/[^\s<>"']+)/i;
const STANDALONE_URL_RE = /^(https?:\/\/[^\s<>"']+)(?:\s*\(([^)]+)\))?$/i;

/* ==========================================================================
   Boot
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initBackgroundScene();
  loadPosts();
});

/* ==========================================================================
   Background video — cinematic layer with graceful still-image fallback
   ========================================================================== */
function initBackgroundScene() {
  const scene = document.querySelector('.scene');
  const video = document.getElementById('bgVideo');
  if (!scene || !video) return;

  const markActive = () => scene.classList.add('is-video-active');
  const markFailed = () => scene.classList.add('is-video-failed');

  video.addEventListener('playing', markActive);
  video.addEventListener('error', markFailed);
  video.addEventListener('stalled', markFailed);

  const playPromise = video.play();
  if (playPromise && typeof playPromise.catch === 'function') {
    playPromise.then(markActive).catch(markFailed);
  }

  // If nothing happens within a reasonable window, fall back safely.
  window.setTimeout(() => {
    if (!scene.classList.contains('is-video-active')) markFailed();
  }, 4000);

  // Pause the background video when the tab is hidden to save resources.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      video.pause();
    } else if (!scene.classList.contains('is-video-failed')) {
      video.play().catch(markFailed);
    }
  });
}

/* ==========================================================================
   Load + parse text 1.txt
   ========================================================================== */
async function loadPosts() {
  const list = document.getElementById('feedList');
  const status = document.getElementById('feedStatus');

  try {
    const response = await fetch(CONFIG.postsFilePath, { cache: 'no-store' });
    if (!response.ok) throw new Error('Posts file responded with ' + response.status);
    const raw = await response.text();

    const posts = parsePosts(raw);
    if (posts.length === 0) {
      showStatus(status, 'No posts yet.');
      return;
    }

    const ordered = CONFIG.sourceOrder === 'oldest-first' ? posts.reverse() : posts;
    renderFeed(list, ordered);
  } catch (err) {
    showStatus(status, 'Posts could not be loaded right now.');
  }
}

function showStatus(el, message) {
  if (!el) return;
  el.hidden = false;
  el.textContent = message;
}

/**
 * Splits the raw file on lines that are exactly "-" (the delimiter).
 * Every run of lines between one delimiter and the next is one post.
 * Content before the first delimiter is discarded, and empty/whitespace
 * -only blocks (e.g. two delimiters in a row) are ignored.
 */
function parsePosts(raw) {
  const lines = raw.replace(/\r\n/g, '\n').split('\n');
  const segments = [];
  let current = [];
  let started = false;

  for (const line of lines) {
    if (line.trim() === '-') {
      if (started) segments.push(current);
      current = [];
      started = true;
      continue;
    }
    current.push(line);
  }
  if (started) segments.push(current);

  return segments
    .map((seg) => seg.join('\n').trim())
    .filter((text) => text.length > 0);
}

/* ==========================================================================
   Render
   ========================================================================== */
function renderFeed(list, posts) {
  const fragment = document.createDocumentFragment();
  posts.forEach((postText) => fragment.appendChild(buildPostElement(postText)));
  list.appendChild(fragment);
  observeLazyMedia();
}

function buildPostElement(postText) {
  const article = document.createElement('article');
  article.className = 'post';

  const lines = postText.split('\n');
  const blocks = groupLines(lines);

  blocks.forEach((block) => {
    if (block.kind === 'text') {
      article.appendChild(buildTextBlock(block.lines));
    } else {
      article.appendChild(buildMediaBlock(block.items));
    }
  });

  article.appendChild(buildSourceFooter());
  return article;
}

/**
 * Walks the post's lines, separating plain text from lines that are
 * *standalone* URLs (the whole line is a link). Consecutive standalone
 * URLs are grouped so image runs can render as a gallery.
 */
function groupLines(lines) {
  const blocks = [];
  let textBuffer = [];
  let mediaBuffer = [];

  const flushText = () => {
    if (textBuffer.length) {
      blocks.push({ kind: 'text', lines: textBuffer });
      textBuffer = [];
    }
  };
  const flushMedia = () => {
    if (mediaBuffer.length) {
      blocks.push({ kind: 'media', items: mediaBuffer });
      mediaBuffer = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (trimmed === '') {
      textBuffer.push(line);
      return;
    }
    const match = trimmed.match(STANDALONE_URL_RE);
    if (match) {
      flushText();
      mediaBuffer.push({ url: match[1], label: match[2] || null });
    } else {
      flushMedia();
      textBuffer.push(line);
    }
  });

  flushText();
  flushMedia();

  // Trim leading/trailing blank lines inside text blocks
  return blocks
    .map((b) => {
      if (b.kind !== 'text') return b;
      const trimmedLines = [...b.lines];
      while (trimmedLines.length && trimmedLines[0].trim() === '') trimmedLines.shift();
      while (trimmedLines.length && trimmedLines[trimmedLines.length - 1].trim() === '') trimmedLines.pop();
      return { kind: 'text', lines: trimmedLines };
    })
    .filter((b) => (b.kind === 'text' ? b.lines.length > 0 : b.items.length > 0));
}

function buildTextBlock(lines) {
  const p = document.createElement('p');
  p.className = 'post__text';
  p.appendChild(linkify(lines.join('\n')));
  return p;
}

function linkify(text) {
  const frag = document.createDocumentFragment();
  let rest = text;
  let match;

  while ((match = rest.match(URL_RE))) {
    const before = rest.slice(0, match.index);
    if (before) frag.appendChild(document.createTextNode(before));

    const url = match[1];
    const a = document.createElement('a');
    a.href = toRawGithubUrl(url);
    a.textContent = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    frag.appendChild(a);

    rest = rest.slice(match.index + url.length);
  }
  if (rest) frag.appendChild(document.createTextNode(rest));
  return frag;
}

function buildMediaBlock(items) {
  // Explicit "(Label)" syntax always renders as a button, regardless of type.
  const buttons = items.filter((i) => i.label);
  const plain = items.filter((i) => !i.label);

  const wrap = document.createElement('div');
  wrap.className = 'post__media';

  buttons.forEach((item) => wrap.appendChild(buildButton(item.url, item.label)));

  if (plain.length > 1 && plain.every((i) => classifyUrl(i.url).type === 'image')) {
    wrap.appendChild(buildGallery(plain.map((i) => i.url)));
  } else {
    plain.forEach((item) => wrap.appendChild(buildSingleMedia(item.url)));
  }

  return wrap;
}

function buildButton(url, label) {
  const a = document.createElement('a');
  a.className = 'post-button';
  a.href = toRawGithubUrl(url);
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.textContent = label;
  return a;
}

function buildSingleMedia(url) {
  const info = classifyUrl(url);
  const rawUrl = toRawGithubUrl(url);

  switch (info.type) {
    case 'image':
      return buildImage(rawUrl, 'Post image');
    case 'video':
      return buildVideo(rawUrl);
    case 'audio':
      return buildAudio(rawUrl);
    case 'youtube':
      return buildYouTube(info.embedUrl);
    default:
      return buildFileLink(url, info.label);
  }
}

function buildImage(src, alt) {
  const img = document.createElement('img');
  img.loading = 'lazy';
  img.decoding = 'async';
  img.alt = alt;
  img.src = src;
  img.addEventListener('error', () => img.replaceWith(buildMediaError('Image unavailable')), { once: true });
  return img;
}

function buildVideo(src) {
  const container = document.createElement('div');
  const video = document.createElement('video');
  video.controls = true;
  video.playsInline = true;
  video.preload = 'none';
  video.dataset.src = src;
  video.className = 'lazy-video';
  video.addEventListener('error', () => container.replaceWith(buildMediaError('Video unavailable')), { once: true });
  container.appendChild(video);
  return container;
}

function buildAudio(src) {
  const audio = document.createElement('audio');
  audio.controls = true;
  audio.preload = 'none';
  audio.src = src;
  audio.addEventListener('error', () => audio.replaceWith(buildMediaError('Audio unavailable')), { once: true });
  return audio;
}

function buildYouTube(embedUrl) {
  const iframe = document.createElement('iframe');
  iframe.dataset.src = embedUrl;
  iframe.className = 'lazy-iframe';
  iframe.title = 'Embedded video';
  iframe.loading = 'lazy';
  iframe.allow = 'accelerometer; encrypted-media; gyroscope; picture-in-picture';
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  return iframe;
}

function buildFileLink(url, label) {
  const a = document.createElement('a');
  a.className = 'post-file';
  a.href = toRawGithubUrl(url);
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  const text = document.createElement('span');
  text.textContent = label;
  a.appendChild(fileIcon());
  a.appendChild(text);
  return a;
}

function fileIcon() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.6');
  svg.classList.add('post-file__icon');
  svg.innerHTML = '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>';
  return svg;
}

function buildGallery(urls) {
  const grid = document.createElement('div');
  const count = urls.length;
  const sizeClass = count === 1 ? '--1' : count === 2 ? '--2' : count === 3 ? '--3' : '--many';
  grid.className = 'media-grid media-grid' + sizeClass;

  urls.forEach((url, idx) => {
    const frame = document.createElement('div');
    frame.className = 'media-frame';
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.decoding = 'async';
    img.alt = 'Post image ' + (idx + 1) + ' of ' + urls.length;
    img.src = toRawGithubUrl(url);
    img.addEventListener('error', () => frame.replaceWith(buildMediaError('Image unavailable')), { once: true });
    frame.appendChild(img);
    grid.appendChild(frame);
  });

  return grid;
}

function buildMediaError(message) {
  const div = document.createElement('div');
  div.className = 'media-error';
  div.textContent = message;
  return div;
}

function buildSourceFooter() {
  const wrap = document.createElement('div');
  wrap.className = 'post__source';

  const a = document.createElement('a');
  a.className = 'post__source-link';
  a.href = CONFIG.postSourceUrl;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.textContent = CONFIG.postSourceLabel;

  wrap.appendChild(a);
  return wrap;
}

/* ==========================================================================
   URL classification + GitHub raw conversion
   ========================================================================== */
function toRawGithubUrl(url) {
  const match = url.match(CONFIG.githubRepoBlobPattern);
  if (!match) return url;
  const [, owner, repo, rest] = match;
  return 'https://raw.githubusercontent.com/' + owner + '/' + repo + '/' + rest;
}

function classifyUrl(url) {
  let pathname = url;
  try {
    pathname = new URL(url).pathname;
  } catch (e) {
    // ignore malformed URL, fall back to raw string matching
  }

  if (IMAGE_EXT.test(pathname)) return { type: 'image' };
  if (VIDEO_EXT.test(pathname)) return { type: 'video' };
  if (AUDIO_EXT.test(pathname)) return { type: 'audio' };

  const youtubeId = getYouTubeId(url);
  if (youtubeId) {
    return { type: 'youtube', embedUrl: 'https://www.youtube.com/embed/' + youtubeId };
  }

  if (TEXT_EXT.test(pathname)) {
    return { type: 'file', label: 'Open text file ↗' };
  }

  let host = '';
  try { host = new URL(url).hostname.replace(/^www\./, ''); } catch (e) { /* noop */ }

  if (host === 'pin.it' || host === 'pinterest.com') return { type: 'file', label: 'Open on Pinterest ↗' };
  if (host === 'facebook.com') return { type: 'file', label: 'Open on Facebook ↗' };
  if (host === 'docs.google.com' || host === 'sites.google.com' || host === 'drive.google.com') {
    return { type: 'file', label: 'Open document ↗' };
  }

  return { type: 'file', label: 'Open link ↗' };
}

function getYouTubeId(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, '');
    if (host === 'youtu.be') return u.pathname.slice(1) || null;
    if (host === 'youtube.com' || host === 'm.youtube.com') {
      if (u.pathname === '/watch') return u.searchParams.get('v');
      if (u.pathname.startsWith('/embed/')) return u.pathname.split('/')[2] || null;
    }
  } catch (e) { /* not a valid URL */ }
  return null;
}

/* ==========================================================================
   Lazy media lifecycle — prepare / load / play / pause / restore
   ========================================================================== */
let mediaObserver = null;

function observeLazyMedia() {
  if (!('IntersectionObserver' in window)) {
    // No observer support: just hydrate everything immediately.
    document.querySelectorAll('.lazy-video, .lazy-iframe').forEach(hydrateLazyElement);
    return;
  }

  if (!mediaObserver) {
    mediaObserver = new IntersectionObserver(handleMediaIntersect, {
      root: null,
      rootMargin: '200px 0px',
      threshold: 0.01
    });
  }

  document.querySelectorAll('.lazy-video, .lazy-iframe').forEach((el) => mediaObserver.observe(el));
}

function handleMediaIntersect(entries) {
  entries.forEach((entry) => {
    const el = entry.target;
    if (entry.isIntersecting) {
      hydrateLazyElement(el);
    } else if (el.tagName === 'VIDEO' && !el.paused) {
      el.pause();
    }
  });
}

function hydrateLazyElement(el) {
  if (el.dataset.src && !el.src) {
    el.src = el.dataset.src;
  }
}
