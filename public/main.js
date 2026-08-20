/**
 * HackSJSU — Shared JavaScript
 * Handles: navbar, footer, countdown, scroll animations,
 * and all config-driven content rendering.
 * Loaded on every page after config.js.
 */

// ─── Navbar ───────────────────────────────────────────────
function renderNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const isHome = currentPage === '' || currentPage === 'index.html';

  const linksHTML = CONFIG.nav.links.map(l => {
    const isActive = currentPage === l.href ? 'active' : '';
    return `<li><a href="${l.href}" class="nav-link ${isActive}">${l.label}</a></li>`;
  }).join('');

  const html = `
    <nav id="navbar">
      <div class="container">
        <div class="nav-inner">
          <a href="index.html" class="nav-logo" id="nav-logo">${CONFIG.event.name}</a>
          <ul class="nav-links" id="nav-links-desktop">${linksHTML}</ul>
          <a href="${CONFIG.nav.ctaHref}" class="btn btn-primary btn-sm nav-cta" id="nav-cta-desktop">${CONFIG.nav.ctaLabel}</a>
          <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
        <div class="nav-mobile" id="nav-mobile">
          <ul>${linksHTML}</ul>
          <a href="${CONFIG.nav.ctaHref}" class="btn btn-primary btn-sm">${CONFIG.nav.ctaLabel}</a>
        </div>
      </div>
    </nav>`;
  document.getElementById('nav-placeholder').innerHTML = html;

  // Scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  // Mobile menu
  document.getElementById('nav-hamburger').addEventListener('click', () => {
    document.getElementById('nav-mobile').classList.toggle('open');
  });
}

// ─── Footer ───────────────────────────────────────────────
function renderFooter() {
  const s = CONFIG.event.social;
  const e = CONFIG.event;

  const navCols = [
    { title: 'Event',   links: [
      { label:'About',      href:'about.html' },
      { label:'Schedule',   href:'schedule.html' },
      { label:'Challenges', href:'challenges.html' },
      { label:'Prizes',     href:'prizes.html' },
    ]},
    { title: 'People',  links: [
      { label:'Judges',   href:'judges.html' },
      { label:'Mentors',  href:'mentors.html' },
      { label:'Sponsors', href:'sponsors.html' },
    ]},
    { title: 'Info',    links: [
      { label:'FAQ',       href:'faq.html' },
      { label:'Resources', href:'resources.html' },
      { label:'Register',  href:'register.html' },
      { label:'Contact',   href:'contact.html' },
    ]},
  ];

  const colsHTML = navCols.map(col => `
    <div>
      <p class="footer-col-title">${col.title}</p>
      <ul class="footer-links">
        ${col.links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
      </ul>
    </div>`).join('');

  const html = `
    <footer id="footer">
      <div class="container">
        <div class="footer-inner">
          <div class="footer-brand">
            <p class="footer-logo">${e.name} <span style="font-size:0.7em;font-weight:500;opacity:0.6">'${e.edition.slice(-2)}</span></p>
            <p>${e.shortDesc}</p>
            <p style="margin-top:0.4rem;font-size:0.85rem;">📅 ${e.displayDateRange} &nbsp;·&nbsp; 📍 ${e.location}</p>
            <div class="footer-social" style="margin-top:1rem;">
              ${s.instagram !== '#' ? `<a href="${s.instagram}" target="_blank" rel="noopener" aria-label="Instagram">📷</a>` : ''}
              ${s.twitter   !== '#' ? `<a href="${s.twitter}"   target="_blank" rel="noopener" aria-label="Twitter">🐦</a>` : ''}
              ${s.linkedin  !== '#' ? `<a href="${s.linkedin}"  target="_blank" rel="noopener" aria-label="LinkedIn">💼</a>` : ''}
              ${s.github    !== '#' ? `<a href="${s.github}"    target="_blank" rel="noopener" aria-label="GitHub">🐙</a>` : ''}
              <a href="mailto:${s.email}" aria-label="Email">✉️</a>
            </div>
          </div>
          ${colsHTML}
        </div>
        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} ${e.name}. Co-hosted by SJSU & HP Inc. All rights reserved.</p>
          <p>Made with ❤️ by the ${e.name} team · <a href="contact.html">Contact Us</a></p>
        </div>
      </div>
    </footer>`;
  document.getElementById('footer-placeholder').innerHTML = html;
}

// ─── Status Badge ──────────────────────────────────────────
function getStatusBadge() {
  const statusMap = {
    coming_soon:          { text: 'Coming Soon',           cls: 'badge-status-soon' },
    registration_open:    { text: '🟢 Registration Open',  cls: 'badge-status-reg'  },
    registration_closed:  { text: 'Registration Closed',   cls: 'badge-status-soon' },
    in_progress:          { text: '🔴 Hackathon Live!',    cls: 'badge-status-live' },
    judging:              { text: '⚖️ Judging in Progress', cls: 'badge-status-soon' },
    concluded:            { text: '🏁 Event Concluded',    cls: 'badge-status-soon' },
  };
  const s = statusMap[CONFIG.event.status] || statusMap['coming_soon'];
  return `<span class="hero-badge ${s.cls}"><span class="badge-dot"></span>${s.text}</span>`;
}

// ─── Countdown Timer ───────────────────────────────────────
function initCountdown(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const target = new Date(CONFIG.event.date).getTime();

  function update() {
    const now  = Date.now();
    const diff = target - now;
    if (diff <= 0) {
      el.innerHTML = `<p class="countdown-ended">🚀 The Hackathon has begun!</p>`;
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    el.innerHTML = `
      <div class="countdown">
        ${[['Days',d],['Hours',h],['Mins',m],['Secs',s]].map(([lbl,val]) => `
          <div class="countdown-unit">
            <span class="countdown-number">${String(val).padStart(2,'0')}</span>
            <span class="countdown-label">${lbl}</span>
          </div>`).join('')}
      </div>`;
  }
  update();
  setInterval(update, 1000);
}

// ─── Stats Bar ─────────────────────────────────────────────
function renderStats(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const s = CONFIG.event.stats;
  const items = [
    { num: s.participants, label: 'Participants' },
    { num: s.prizes,       label: 'In Prizes'   },
    { num: s.mentors,      label: 'Mentors'      },
    { num: s.hours,        label: 'Hours'        },
  ];
  el.innerHTML = items.map(i => `
    <div class="stat-item">
      <div class="stat-num">${i.num}</div>
      <div class="stat-label">${i.label}</div>
    </div>`).join('');
}

// ─── Judges Grid ───────────────────────────────────────────
function renderJudges(containerId, limit = 999) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const judges = CONFIG.judges.slice(0, limit);
  if (!judges.length) { el.innerHTML = '<p class="text-center" style="opacity:.5">Judges to be announced soon.</p>'; return; }
  el.innerHTML = judges.map(j => `
    <div class="person-card fade-in">
      <img class="person-card-img"
           src="assets/judges/${j.imageFile}"
           alt="${j.name}"
           onerror="this.src='assets/judges/placeholder.jpg'">
      <div class="person-card-body">
        <div class="person-card-name">${j.name}</div>
        <div class="person-card-title">${j.title}</div>
        <div class="person-card-company">${j.company}</div>
        ${j.bio ? `<div class="person-card-bio">${j.bio}</div>` : ''}
        <div class="person-card-links">
          ${j.linkedin && j.linkedin !== '#' ? `<a href="${j.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">💼</a>` : ''}
        </div>
      </div>
    </div>`).join('');
  initFadeIn();
}

// ─── Mentors Grid ──────────────────────────────────────────
function renderMentors(containerId, limit = 999) {
  const el = document.getElementById(containerId);
  if (!el) return;
  // Advisory panel is the single source of truth for the mentors page
  const mentors = (CONFIG.advisoryPanel || CONFIG.mentors || []).slice(0, limit);
  if (!mentors.length) { el.innerHTML = '<p class="text-center" style="opacity:.5">Advisory board to be announced soon.</p>'; return; }
  el.innerHTML = mentors.map(m => `
    <div class="person-card fade-in">
      <img class="person-card-img"
           src="assets/mentors/${m.imageFile}"
           alt="${m.name}"
           onerror="this.src='assets/mentors/placeholder.jpg'">
      <div class="person-card-body">
        <div class="person-card-name">${m.name}</div>
        <div class="person-card-title">${m.title}</div>
        <div class="person-card-company">${m.company}</div>
        ${m.tag ? `<span class="person-card-tag">⭐ ${m.tag}</span>` : ''}
        ${m.bio ? `<div class="person-card-bio">${m.bio}</div>` : ''}
        <div class="person-card-links">
          ${m.linkedin && m.linkedin !== '#' ? `<a href="${m.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">💼</a>` : ''}
        </div>
      </div>
    </div>`).join('');
  initFadeIn();
}

// ─── Sponsors Grid ─────────────────────────────────────────
function renderSponsors(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const tiers = ['platinum', 'gold', 'silver', 'bronze', 'community'];
  const tierLabels = { platinum:'Platinum', gold:'Gold', silver:'Silver', bronze:'Bronze', community:'Community Partners' };
  let html = '';
  tiers.forEach(tier => {
    const list = CONFIG.sponsors[tier];
    if (!list || !list.length) return;
    html += `<div class="sponsor-tier-label ${tier}">${tierLabels[tier]}</div>
      <div class="sponsors-grid">
        ${list.map(s => `
          <a href="${s.url}" target="_blank" rel="noopener"
             class="sponsor-card ${tier}" title="${s.name}${s.description ? ' — ' + s.description : ''}">
            <div>
              <img src="assets/sponsors/${s.imageFile}"
                   alt="${s.name}"
                   onerror="this.style.display='none';this.nextElementSibling.style.display='block'"
                   style="max-height:${tier==='platinum'?80:tier==='gold'?60:45}px;object-fit:contain;">
              <div class="sponsor-name" style="display:none">${s.name}</div>
            </div>
          </a>`).join('')}
      </div>`;
  });
  el.innerHTML = html || '<p class="text-center" style="opacity:.5">Sponsors to be announced soon.</p>';
}

// ─── Challenges ────────────────────────────────────────────
function renderChallenges(containerId, limit = 999) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = CONFIG.challenges.slice(0, limit).map(c => `
    <div class="challenge-card fade-in" style="--challenge-color:${c.color || 'var(--clr-primary)'}">
      <span class="challenge-emoji">${c.emoji}</span>
      ${c.special ? `<span class="challenge-badge-special">⭐ Sponsored by ${c.sponsor}</span>` : ''}
      <h3 class="challenge-title">${c.title}</h3>
      <p class="challenge-desc">${c.description}</p>
      <div class="challenge-prize">${c.prize}</div>
      <div class="challenge-prize-label">Track Prize</div>
      ${c.requirements?.length ? `
        <ul class="challenge-reqs">
          ${c.requirements.map(r => `<li>${r}</li>`).join('')}
        </ul>` : ''}
      ${c.tools?.length ? `
        <div class="tools-list">
          ${c.tools.map(t => `<span class="tool-tag">${t}</span>`).join('')}
        </div>` : ''}
    </div>`).join('');
  initFadeIn();
}

// ─── Prizes ────────────────────────────────────────────────
function renderPrizes() {
  const overall = document.getElementById('prizes-overall');
  if (overall) {
    overall.innerHTML = CONFIG.prizes.overall.map(p => `
      <div class="prize-card ${p.highlight ? 'highlight' : ''}">
        <div class="prize-place">${p.place}</div>
        <div class="prize-amount">${p.amount}</div>
        <ul class="prize-perks">${p.perks.map(pk => `<li>${pk}</li>`).join('')}</ul>
      </div>`).join('');
  }
  const tracks = document.getElementById('prizes-tracks');
  if (tracks) {
    tracks.innerHTML = CONFIG.prizes.tracks.map(t => `
      <div class="track-prize-card">
        <span class="track-prize-name">${t.track}</span>
        <span class="track-prize-amt">${t.amount}</span>
      </div>`).join('');
  }
  const special = document.getElementById('prizes-special');
  if (special) {
    special.innerHTML = CONFIG.prizes.special.map(a => `
      <div class="special-award-card">
        <div class="special-award-name">${a.award}</div>
        <div class="special-award-desc">${a.description}</div>
        <div class="special-award-prize">${a.prize}</div>
      </div>`).join('');
  }
}

// ─── Schedule ──────────────────────────────────────────────
function renderSchedule(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const tabsHTML = CONFIG.schedule.map((day, i) => `
    <button class="schedule-tab ${i===0?'active':''}"
            onclick="switchDay(${i})" id="tab-${i}">${day.day} — ${day.date}</button>`).join('');

  const daysHTML = CONFIG.schedule.map((day, i) => `
    <div class="schedule-day ${i===0?'active':''}" id="day-${i}">
      <div class="timeline">
        ${day.events.map(ev => `
          <div class="timeline-item">
            <div class="timeline-time">${ev.time}</div>
            <div class="timeline-dot"><div class="timeline-dot-inner"></div></div>
            <div class="timeline-content">
              <span class="timeline-type-badge type-${ev.type}">${ev.type}</span>
              <div class="timeline-event-title">${ev.title}</div>
              <div class="timeline-event-desc">${ev.description}</div>
              ${ev.duration ? `<div style="font-size:0.78rem;color:var(--clr-text-dim);margin-top:0.35rem">⏱ ${ev.duration}</div>` : ''}
            </div>
          </div>`).join('')}
      </div>
    </div>`).join('');

  el.innerHTML = `<div class="schedule-tabs">${tabsHTML}</div>${daysHTML}`;
}

window.switchDay = function(idx) {
  document.querySelectorAll('.schedule-day').forEach((d,i) => d.classList.toggle('active', i===idx));
  document.querySelectorAll('.schedule-tab').forEach((t,i) => t.classList.toggle('active', i===idx));
};

// ─── FAQ Accordion ─────────────────────────────────────────
function renderFAQ(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = CONFIG.faq.map((item, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-question" onclick="toggleFAQ(${i})" aria-expanded="false">
        ${item.question}
        <span class="faq-chevron">▼</span>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-inner">${item.answer}</div>
      </div>
    </div>`).join('');
}

window.toggleFAQ = function(idx) {
  const item = document.getElementById(`faq-${idx}`);
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.faq-question').setAttribute('aria-expanded','false');
  });
  if (!isOpen) {
    item.classList.add('open');
    item.querySelector('.faq-question').setAttribute('aria-expanded','true');
  }
};

// ─── Resources ─────────────────────────────────────────────
function renderResources(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = CONFIG.resources.map(cat => `
    <div class="resource-category">
      <h3 class="resource-category-title">${cat.category}</h3>
      <div class="resource-grid">
        ${cat.items.map(item => `
          <a href="${item.url}" target="_blank" rel="noopener" class="resource-item">
            <div class="resource-item-title">${item.title}</div>
            ${item.description ? `<div class="resource-item-desc">${item.description}</div>` : ''}
          </a>`).join('')}
      </div>
    </div>`).join('');
}

// ─── Why Join Grid (About page) ────────────────────────────
function renderWhyJoin(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = CONFIG.about.whyJoin.map(item => `
    <div class="why-join-card fade-in">
      <div class="why-join-icon">${item.icon}</div>
      <div class="why-join-title">${item.title}</div>
      <div class="why-join-desc">${item.desc}</div>
    </div>`).join('');
  initFadeIn();
}

// ─── Scroll Fade-In Animations ─────────────────────────────
function initFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ─── Contact Form Handler ───────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = '✓ Message Sent!';
    btn.disabled = true;
    btn.style.background = 'rgba(0,200,100,0.2)';
    btn.style.color = '#00C878';
    btn.style.border = '1px solid #00C878';
    setTimeout(() => { btn.textContent = 'Send Message'; btn.disabled = false; btn.style = ''; }, 3500);
  });
}

// ─── Featured Judges (Homepage) ────────────────────────────
function renderFeaturedJudges(containerId, limit = 4) {
  renderJudges(containerId, limit);
}

// ─── Keynote Speakers Grid ──────────────────────────────────
function renderKeynoteSpeakers(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const speakers = CONFIG.keynoteSpeakers || [];
  if (!speakers.length) {
    el.innerHTML = '<p class="text-center" style="opacity:.5">Keynote speakers to be announced.</p>';
    return;
  }
  el.innerHTML = speakers.map(s => `
    <div class="person-card person-card--keynote fade-in">
      <div class="keynote-badge">🎤 ${s.tag || 'Keynote Speaker'}</div>
      <img class="person-card-img"
           src="assets/speakers/${s.imageFile}"
           alt="${s.name}"
           onerror="this.src='assets/judges/placeholder.jpg'">
      <div class="person-card-body">
        <div class="person-card-name">${s.name}</div>
        <div class="person-card-title">${s.title}</div>
        <div class="person-card-company">${s.company}</div>
        ${s.bio ? `<div class="person-card-bio">${s.bio}</div>` : ''}
        <div class="person-card-links">
          ${s.linkedin && s.linkedin !== '#' ? `<a href="${s.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">💼</a>` : ''}
        </div>
      </div>
    </div>`).join('');
  initFadeIn();
}

// ─── Advisory Panel Grid ───────────────────────────────────
function renderAdvisoryPanel(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const panel = CONFIG.advisoryPanel || [];
  if (!panel.length) {
    el.innerHTML = '<p class="text-center" style="opacity:.5">Advisory panel to be announced.</p>';
    return;
  }
  el.innerHTML = panel.map(a => `
    <div class="person-card fade-in">
      <img class="person-card-img"
           src="assets/mentors/${a.imageFile}"
           alt="${a.name}"
           onerror="this.src='assets/mentors/placeholder.jpg'">
      <div class="person-card-body">
        <div class="person-card-name">${a.name}</div>
        <div class="person-card-title">${a.title}</div>
        <div class="person-card-company">${a.company}</div>
        ${a.tag ? `<span class="person-card-tag">⭐ ${a.tag}</span>` : ''}
        ${a.bio ? `<div class="person-card-bio">${a.bio}</div>` : ''}
        <div class="person-card-links">
          ${a.linkedin && a.linkedin !== '#' ? `<a href="${a.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">💼</a>` : ''}
        </div>
      </div>
    </div>`).join('');
  initFadeIn();
}

// ─── Homepage Challenge Preview ────────────────────────────
function renderFeaturedChallenges(containerId, limit = 3) {
  renderChallenges(containerId, limit);
}

// ─── Homepage Sponsors Preview ─────────────────────────────
function renderHomepageSponsors(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const all = [
    ...CONFIG.sponsors.platinum,
    ...CONFIG.sponsors.gold,
  ].slice(0, 8);
  el.innerHTML = `<div class="sponsors-grid">
    ${all.map(s => `
      <a href="${s.url}" target="_blank" rel="noopener" class="sponsor-card" title="${s.name}">
        <div>
          <img src="assets/sponsors/${s.imageFile}" alt="${s.name}"
               style="max-height:60px;object-fit:contain;"
               onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <div class="sponsor-name" style="display:none">${s.name}</div>
        </div>
      </a>`).join('')}
  </div>`;
}

// ─── Boot ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  initFadeIn();
  initContactForm();

  // Homepage-only sections (each targets a specific element id)
  renderStats('stats-grid');
  renderFeaturedChallenges('featured-challenges', 3);
  renderKeynoteSpeakers('keynote-speakers');
  renderFeaturedJudges('featured-judges', 999);
  renderAdvisoryPanel('advisory-panel');
  renderHomepageSponsors('homepage-sponsors');
});
