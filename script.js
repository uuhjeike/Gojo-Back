/* =========================================================
   GOJO BACK — script.js
   Loads posts from "text 1.txt", parses the "-" delimiter
   format, renders a newest-first feed, and manages smart
   (viewport-aware) media loading and playback.
   No post content is ever hard-coded here.
   ========================================================= */

(function () {
  'use strict';

  var POSTS_FILE = './text%201.txt';
  var feedEl = document.getElementById('feed');
  var feedStateEl = document.getElementById('feedState');

  /* ---------------------------------------------------------
     1. BACKGROUND VIDEO LIFECYCLE
     --------------------------------------------------------- */
  function initBackgroundVideo() {
    var bgLayer = document.getElementById('bgLayer');
    var bgVideo = document.getElementById('bgVideo');
    if (!bgLayer || !bgVideo) return;

    function fallbackToImage() {
      bgLayer.classList.add('video-failed');
    }

    bgVideo.addEventListener('error', fallbackToImage);

    // If autoplay is blocked entirely, fall back gracefully.
    var playPromise = bgVideo.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(function () {
        // Try once more on first user interaction; otherwise keep
        // the (still visible, just paused) video as a static frame.
        var resume = function () {
          bgVideo.play().catch(fallbackToImage);
          document.removeEventListener('touchstart', resume);
          document.removeEventListener('click', resume);
        };
        document.addEventListener('touchstart', resume, { once: true });
        document.addEventListener('click', resume, { once: true });
      });
    }

    // Pause the (expensive) background video when the tab isn't visible.
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        bgVideo.pause();
      } else if (!bgLayer.classList.contains('video-failed')) {
        bgVideo.play().catch(function () {});
      }
    });
  }

  /* ---------------------------------------------------------
     2. FETCH + PARSE text 1.txt
     ---------------------------------------------------------
     Format:
       -
       post content...
       -

       -
       another post...
       -

     Each block between a pair of "-" delimiter lines is one
     post. Delimiter lines themselves are discarded. Empty
     blocks are ignored. The file is treated as oldest-first
     unless it only contains a single post; we reverse the
     parsed list so newest appears first in the feed (see
     README.md for the documented convention).
     --------------------------------------------------------- */
  function parsePosts(raw) {
    if (!raw) return [];

    // Normalize line endings.
    var text = raw.replace(/\r\n/g, '\n');

    // Split on lines that are exactly a delimiter: "-" or "+"
    // (a stray "+" delimiter appears in some exports; treat it
    // the same as "-" so it never leaks into rendered content).
    var lines = text.split('\n');
    var blocks = [];
    var current = [];

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var trimmed = line.trim();
      if (trimmed === '-' || trimmed === '+') {
        blocks.push(current.join('\n'));
        current = [];
      } else {
        current.push(line);
      }
    }
    // Trailing content after the final delimiter (if any) is not
    // a complete fenced block, so it's intentionally dropped —
    // this mirrors "ignore empty/incomplete blocks".
    blocks.push(current.join('\n'));

    // Clean + filter empty blocks.
    var posts = blocks
      .map(function (block) {
        return block.replace(/^\n+|\n+$/g, '').replace(/[ \t]+$/gm, '');
      })
      .filter(function (block) {
        return block.trim().length > 0;
      });

    // File is stored oldest → newest; reverse for newest-first display.
    posts.reverse();
    return posts;
  }

  /* ---------------------------------------------------------
     3. CONTENT-LINE PARSING (media / buttons / links / text)
     --------------------------------------------------------- */
  var IMAGE_EXT = /\.(png|jpe?g|gif|webp|avif|svg)(\?.*)?$/i;
  var VIDEO_EXT = /\.(mp4|webm|mov|m4v)(\?.*)?$/i;
  var AUDIO_EXT = /\.(mp3|wav|ogg|m4a|flac)(\?.*)?$/i;
  var URL_RE = /(https?:\/\/[^\s<>"']+)/gi;
  var BUTTON_SUFFIX_RE = /^(https?:\/\/[^\s<>"']+?)\s*\(\s*button\s*\)$/i;
  var BUTTON_LABELED_RE = /^(https?:\/\/[^\s<>"']+?)\s*\(\s*([^()]+?)\s*\)$/i;

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // A "media line" is a line whose *entire* trimmed content is a
  // single URL pointing at an image/video/audio file.
  function classifyLine(line) {
    var trimmed = line.trim();

    var soloUrlMatch = trimmed.match(/^(https?:\/\/[^\s<>"']+)$/i);
    if (soloUrlMatch) {
      var url = soloUrlMatch[1];
      if (IMAGE_EXT.test(url)) return { type: 'image', url: url };
      if (VIDEO_EXT.test(url)) return { type: 'video', url: url };
      if (AUDIO_EXT.test(url)) return { type: 'audio', url: url };
    }

    var btnMatch = trimmed.match(BUTTON_SUFFIX_RE);
    if (btnMatch) {
      return { type: 'button', url: btnMatch[1], label: 'Open Link' };
    }

    var labeledBtnMatch = trimmed.match(BUTTON_LABELED_RE);
    if (labeledBtnMatch && /button/i.test(labeledBtnMatch[0]) === false) {
      // e.g. "https://example.com (Open Website)" — a labeled button.
      return { type: 'button', url: labeledBtnMatch[1], label: labeledBtnMatch[2] };
    }

    return { type: 'text', content: line };
  }

  // Convert a block of plain text (with inline bare URLs) into safe HTML,
  // auto-linking any http(s) URLs that appear inline within a text line.
  function linkifyText(line) {
    var escaped = escapeHtml(line);
    return escaped.replace(URL_RE, function (m) {
      var safe = escapeHtml(m).replace(/&amp;/g, '&amp;');
      return '<a href="' + m.replace(/"/g, '%22') + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(m) + '</a>';
    });
  }

  var BUTTON_ICON =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>';

  /* ---------------------------------------------------------
     4. BUILD A POST DOM NODE (media deferred via data-src)
     --------------------------------------------------------- */
  function buildPost(rawText, index) {
    var article = document.createElement('article');
    article.className = 'post';
    article.setAttribute('data-post-index', String(index));

    var lines = rawText.split('\n');
    var textLines = [];
    var mediaItems = [];
    var buttons = [];

    lines.forEach(function (line) {
      if (line.trim() === '') {
        textLines.push('');
        return;
      }
      var classified = classifyLine(line);
      if (classified.type === 'text') {
        textLines.push(classified.content);
      } else if (classified.type === 'button') {
        buttons.push(classified);
      } else {
        mediaItems.push(classified);
      }
    });

    // Collapse leading/trailing blank text lines.
    while (textLines.length && textLines[0].trim() === '') textLines.shift();
    while (textLines.length && textLines[textLines.length - 1].trim() === '') textLines.pop();

    if (textLines.length) {
      var p = document.createElement('p');
      p.className = 'post-text';
      p.innerHTML = textLines.map(linkifyText).join('\n');
      article.appendChild(p);
    }

    if (mediaItems.length > 1) {
      var grid = document.createElement('div');
      grid.className = 'media-grid';
      mediaItems.forEach(function (m) {
        grid.appendChild(buildMediaElement(m));
      });
      article.appendChild(grid);
    } else if (mediaItems.length === 1) {
      article.appendChild(buildMediaElement(mediaItems[0]));
    }

    if (buttons.length) {
      var actions = document.createElement('div');
      actions.className = 'post-actions';
      buttons.forEach(function (b) {
        var a = document.createElement('a');
        a.className = 'post-button';
        a.href = b.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.innerHTML = BUTTON_ICON + '<span>' + escapeHtml(b.label) + '</span>';
        actions.appendChild(a);
      });
      article.appendChild(actions);
    }

    // A post with literally nothing recognizable still shows its raw text.
    if (!textLines.length && !mediaItems.length && !buttons.length) {
      var fallbackP = document.createElement('p');
      fallbackP.className = 'post-text';
      fallbackP.textContent = rawText;
      article.appendChild(fallbackP);
    }

    return article;
  }

  function buildMediaElement(item) {
    var wrap = document.createElement('div');
    wrap.className = 'post-media';

    if (item.type === 'image') {
      var img = document.createElement('img');
      img.setAttribute('data-src', item.url);
      img.alt = 'Post image';
      img.loading = 'lazy';
      img.decoding = 'async';
      wrap.appendChild(img);
    } else if (item.type === 'video') {
      var video = document.createElement('video');
      video.setAttribute('data-src', item.url);
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.controls = true;
      video.preload = 'none';
      wrap.appendChild(video);
    } else if (item.type === 'audio') {
      var audio = document.createElement('audio');
      audio.setAttribute('data-src', item.url);
      audio.controls = true;
      audio.preload = 'none';
      wrap.appendChild(audio);
    }

    return wrap;
  }

  /* ---------------------------------------------------------
     5. SMART / LAZY MEDIA LOADING VIA INTERSECTIONOBSERVER
     --------------------------------------------------------- */
  var mediaLoadObserver = null;
  var videoPlaybackObserver = null;

  function initMediaObservers() {
    if ('IntersectionObserver' in window) {
      mediaLoadObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              loadMediaElement(entry.target);
              mediaLoadObserver.unobserve(entry.target);
            }
          });
        },
        { root: null, rootMargin: '600px 0px', threshold: 0.01 }
      );

      videoPlaybackObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            var el = entry.target;
            if (entry.isIntersecting) {
              var playPromise = el.play();
              if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(function () {});
              }
            } else {
              el.pause();
            }
          });
        },
        { root: null, rootMargin: '0px', threshold: 0.35 }
      );
    }
  }

  function loadMediaElement(el) {
    var src = el.getAttribute('data-src');
    if (!src) return;
    el.src = src;
    el.removeAttribute('data-src');

    if (el.tagName === 'VIDEO') {
      el.addEventListener('loadedmetadata', function () {
        if (videoPlaybackObserver) videoPlaybackObserver.observe(el);
      }, { once: true });
    }

    el.addEventListener('error', function () {
      // Individual media failure must never break the rest of the feed.
      var holder = el.closest('.post-media');
      if (holder) {
        holder.innerHTML = '';
        holder.style.display = 'none';
      }
    });
  }

  function observeMediaIn(container) {
    var mediaEls = container.querySelectorAll('img[data-src], video[data-src], audio[data-src]');
    mediaEls.forEach(function (el) {
      if (mediaLoadObserver) {
        mediaLoadObserver.observe(el);
      } else {
        loadMediaElement(el); // No IntersectionObserver support: load eagerly.
      }
    });
  }

  /* ---------------------------------------------------------
     6. PROGRESSIVE POST RENDERING (viewport-aware entrance)
     --------------------------------------------------------- */
  var postRevealObserver = null;

  function initRevealObserver() {
    if ('IntersectionObserver' in window) {
      postRevealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              postRevealObserver.unobserve(entry.target);
            }
          });
        },
        { root: null, rootMargin: '80px 0px', threshold: 0.01 }
      );
    }
  }

  var RENDER_CHUNK = 12;

  function renderPosts(posts) {
    feedStateEl.remove();

    if (!posts.length) {
      var empty = document.createElement('div');
      empty.className = 'feed-state';
      empty.textContent = 'No posts yet.';
      feedEl.appendChild(empty);
      return;
    }

    var index = 0;

    function renderChunk() {
      var frag = document.createDocumentFragment();
      var end = Math.min(index + RENDER_CHUNK, posts.length);

      for (; index < end; index++) {
        var node = buildPost(posts[index], index);
        frag.appendChild(node);
      }

      feedEl.appendChild(frag);

      // Observe newly added posts for media loading + entrance animation.
      var newPosts = feedEl.querySelectorAll('.post:not([data-observed])');
      newPosts.forEach(function (postEl) {
        postEl.setAttribute('data-observed', '1');
        observeMediaIn(postEl);
        if (postRevealObserver) {
          postRevealObserver.observe(postEl);
        } else {
          postEl.classList.add('is-visible');
        }
      });

      if (index < posts.length) {
        // Defer remaining chunks so a huge feed never blocks the main thread.
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(renderChunk, { timeout: 500 });
        } else {
          setTimeout(renderChunk, 16);
        }
      }
    }

    renderChunk();
  }

  /* ---------------------------------------------------------
     7. LOAD text 1.txt
     --------------------------------------------------------- */
  function loadFeed() {
    fetch(POSTS_FILE)
      .then(function (response) {
        if (!response.ok) {
          throw new Error('HTTP ' + response.status);
        }
        return response.text();
      })
      .then(function (raw) {
        var posts = parsePosts(raw);
        renderPosts(posts);
      })
      .catch(function () {
        feedStateEl.textContent =
          'Posts could not be loaded right now. Make sure "text 1.txt" is in the same folder as this page.';
      });
  }

  /* ---------------------------------------------------------
     INIT
     --------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initBackgroundVideo();
    initMediaObservers();
    initRevealObserver();
    loadFeed();
  });
})();
