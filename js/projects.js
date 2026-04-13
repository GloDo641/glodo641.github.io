/* ─────────────────────────────────────────────────────────────
   PROJECTS PAGE — projects.js
   Reads PORTFOLIO from data/content.js and renders the full
   projects page: nav, hero, search bar, tag filters, rows,
   and a detail modal on row click.
───────────────────────────────────────────────────────────── */

/* ── HELPERS ─────────────────────────────────────────────── */

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls)               e.className   = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

/* ── NAV ─────────────────────────────────────────────────── */

function buildNav() {
  const { name } = PORTFOLIO.identity;

  // Logo — links back to home page
  const logo = document.getElementById('nav-logo');
  if (logo) {
    const first = name.split(' ')[0];
    const last  = name.split(' ').slice(1).join(' ');
    logo.innerHTML = `${first} <span>${last}</span>`;
  }

  // Nav links — add more pages here as they are created
  const links = document.getElementById('nav-links');
  if (!links) return;

  const pages = [
    { href: 'projects.html',  label: 'Projects'      },
    { href: 'workshops.html', label: 'Workshops'     },
    { href: 'learning.html',  label: 'Learning Path' },
  ];

  pages.forEach(({ href, label }) => {
    const a = el('a', '', label);
    a.href = href;
    if (href === 'projects.html') a.classList.add('active');
    links.appendChild(a);
  });

  // Mobile toggle
  const toggle = document.getElementById('nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
    });
  }
}

/* ── STATUS MAP ──────────────────────────────────────────── */

const STATUS_MAP = {
  complete:  { cls: 'status-complete',  label: 'Complete'    },
  wip:       { cls: 'status-wip',       label: 'In Progress' },
  cancelled: { cls: 'status-cancelled', label: 'Cancelled'   },
};

/* ── MODAL ───────────────────────────────────────────────── */

let modalBackdrop, modalTitle, modalStatus,
    modalDesc, modalReflectionWrap, modalReflection,
    modalTags, modalDownload;

function buildModal() {
  modalBackdrop = el('div', 'modal-backdrop');
  modalBackdrop.setAttribute('role', 'dialog');
  modalBackdrop.setAttribute('aria-modal', 'true');

  const box = el('div', 'modal-box');

  // Close button
  const closeBtn = el('button', 'modal-close', '✕');
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.addEventListener('click', closeModal);
  box.appendChild(closeBtn);

  // Header: title + status badge
  const header = el('div', 'modal-header');
  modalTitle  = el('div', 'modal-title');
  modalStatus = el('span', 'project-status');
  header.appendChild(modalTitle);
  header.appendChild(modalStatus);
  box.appendChild(header);

  // Body: left + right columns
  const body = el('div', 'modal-body');

  // Left: description + reflection
  const left = el('div', 'modal-left');

  const descWrap = el('div', '');
  descWrap.appendChild(el('div', 'modal-section-label', 'Description'));
  modalDesc = el('p', 'modal-text');
  descWrap.appendChild(modalDesc);
  left.appendChild(descWrap);

  modalReflectionWrap = el('div', '');
  modalReflectionWrap.appendChild(el('div', 'modal-section-label', 'Reflection'));
  modalReflection = el('p', 'modal-text');
  modalReflectionWrap.appendChild(modalReflection);
  left.appendChild(modalReflectionWrap);

  body.appendChild(left);

  // Right: all tags + download button
  const right = el('div', 'modal-right');

  const tagsWrap = el('div', '');
  tagsWrap.appendChild(el('div', 'modal-section-label', 'Technologies'));
  modalTags = el('div', 'modal-tags');
  tagsWrap.appendChild(modalTags);
  right.appendChild(tagsWrap);

  modalDownload = document.createElement('a');
  modalDownload.className = 'project-link modal-download-btn';
  modalDownload.target    = '_blank';
  right.appendChild(modalDownload);

  body.appendChild(right);
  box.appendChild(body);
  modalBackdrop.appendChild(box);

  // Close when clicking outside the box
  modalBackdrop.addEventListener('click', e => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  document.body.appendChild(modalBackdrop);
}

function openModal(proj) {
  const info = STATUS_MAP[proj.status] || STATUS_MAP.wip;

  modalTitle.textContent = proj.title;
  modalStatus.className  = `project-status ${info.cls}`;
  modalStatus.textContent = info.label;

  // Full description (falls back to short description)
  modalDesc.innerHTML = (proj.fullDescription || proj.description).replace(/\n/g, '<br>');

  // Reflection — hide section if not provided
  if (proj.reflection) {
    modalReflection.textContent = proj.reflection;
    modalReflectionWrap.hidden  = false;
  } else {
    modalReflectionWrap.hidden = true;
  }

  // Tags: main tech + extra tech combined
  modalTags.innerHTML = '';
  const allTags = [...(proj.tech || []), ...(proj.extraTech || [])];
  allTags.forEach(t => modalTags.appendChild(el('span', 'tech-tag', t)));

  // Download button
  if (proj.link) {
    modalDownload.href        = proj.link;
    modalDownload.innerHTML   = `<span>&#8595;</span> ${proj.linkLabel || 'Download'}`;
    modalDownload.style.display = '';
  } else {
    modalDownload.style.display = 'none';
  }

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── ROW RENDERER ────────────────────────────────────────── */

let projectList;

function renderRows(projects) {
  projectList.innerHTML = '';

  if (projects.length === 0) {
    projectList.appendChild(el('p', 'no-results', 'No projects match your search.'));
    return;
  }

  projects.forEach(proj => {
    const row = el('div', 'project-row');
    row.style.cursor = 'pointer';
    row.setAttribute('title', 'Click for more details');
    row.addEventListener('click', () => openModal(proj));

    // ── LEFT: title + description + date ──
    const left = el('div', 'proj-left');
    left.appendChild(el('div', 'proj-title', proj.title));
    left.appendChild(el('p', 'proj-desc', proj.description));
    if (proj.date) left.appendChild(el('p', 'proj-date', proj.date));
    row.appendChild(left);

    // ── MIDDLE: tech tags ──
    const mid = el('div', 'proj-mid');
    (proj.tech || []).forEach(t => mid.appendChild(el('span', 'tech-tag', t)));
    row.appendChild(mid);

    // ── RIGHT: status badge + download ──
    const right = el('div', 'proj-right');

    const info = STATUS_MAP[proj.status] || STATUS_MAP.wip;
    right.appendChild(el('span', `project-status ${info.cls}`, info.label));

    if (proj.link) {
      const a     = document.createElement('a');
      a.href      = proj.link;
      a.target    = '_blank';
      a.className = 'project-link';
      a.innerHTML = `<span>&#8595;</span> ${proj.linkLabel || 'Download'}`;
      // Prevent row click from firing when the link is clicked
      a.addEventListener('click', e => e.stopPropagation());
      right.appendChild(a);
    }

    row.appendChild(right);
    projectList.appendChild(row);
  });
}

/* ── FILTER LOGIC ────────────────────────────────────────── */

let searchInput;
let tagPills;

function applyFilters() {
  const query  = searchInput.value.toLowerCase().trim();
  const active = [...tagPills]
    .filter(p => p.classList.contains('active'))
    .map(p => p.dataset.tag);

  const filtered = PORTFOLIO.projects.filter(proj => {
    const nameMatch = proj.title.toLowerCase().includes(query);
    const tagMatch  = active.length === 0
      || active.every(t => (proj.tech || []).includes(t));
    return nameMatch && tagMatch;
  });

  renderRows(filtered);
}

/* ── PAGE BUILDER ────────────────────────────────────────── */

function buildPage() {
  const main = document.getElementById('projects-main');
  if (!main) return;

  // ── HERO ──────────────────────────────────────────────────
  const hero = el('div', 'page-hero');

  // Subtle red gradient overlay (same approach as home hero)
  const overlay = el('div', 'page-hero-overlay');
  hero.appendChild(overlay);

  const heroInner = el('div', 'container page-hero-inner');
  heroInner.appendChild(el('p',   'page-hero-label', 'What I built'));
  heroInner.appendChild(el('h1',  'page-hero-title', 'Projects'));
  heroInner.appendChild(el('div', 'page-hero-rule'));
  heroInner.appendChild(el('p',   'page-hero-sub',
    `${PORTFOLIO.projects.length} project${PORTFOLIO.projects.length !== 1 ? 's' : ''}`));
  hero.appendChild(heroInner);

  // Wave separator at bottom of hero (same as home page)
  const wave = el('div', 'hero-wave');
  wave.innerHTML = `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" class="wave-fill"></path></svg>`;
  hero.appendChild(wave);

  main.appendChild(hero);

  // ── CONTENT AREA ──────────────────────────────────────────
  const content   = el('div', 'projects-content');
  const container = el('div', 'container');
  content.appendChild(container);
  main.appendChild(content);

  // ── SEARCH BAR ──
  const searchBar = el('div', 'search-bar');

  searchInput             = el('input', 'search-input');
  searchInput.id          = 'proj-search';
  searchInput.type        = 'text';
  searchInput.placeholder = 'Search by name…';
  searchBar.appendChild(searchInput);

  const advBtn = el('button', 'btn-secondary adv-btn', 'Filters');
  advBtn.id = 'adv-toggle';
  advBtn.setAttribute('aria-expanded', 'false');
  searchBar.appendChild(advBtn);

  container.appendChild(searchBar);

  // ── ADVANCED TAG PANEL (hidden by default) ──
  const advPanel   = el('div', 'adv-panel');
  advPanel.id      = 'adv-panel';
  advPanel.hidden  = true;

  advPanel.appendChild(el('div', 'adv-panel-label', 'Filter by tag'));

  const pillsWrap = el('div', 'tag-pills');

  const allTags = [...new Set(
    PORTFOLIO.projects.flatMap(p => p.tech || [])
  )].sort();

  allTags.forEach(tag => {
    const pill       = el('span', 'tag-pill', tag);
    pill.dataset.tag = tag;
    pill.addEventListener('click', () => {
      pill.classList.toggle('active');
      applyFilters();
    });
    pillsWrap.appendChild(pill);
  });

  advPanel.appendChild(pillsWrap);

  const clearBtn = el('span', 'clear-filters', 'Clear filters');
  clearBtn.addEventListener('click', () => {
    [...pillsWrap.querySelectorAll('.tag-pill')].forEach(p => p.classList.remove('active'));
    searchInput.value = '';
    applyFilters();
  });
  advPanel.appendChild(clearBtn);

  container.appendChild(advPanel);

  // Toggle advanced panel
  advBtn.addEventListener('click', () => {
    const open      = !advPanel.hidden;
    advPanel.hidden = open;
    advBtn.setAttribute('aria-expanded', String(!open));
    advBtn.textContent = open ? 'Filters' : 'Filters ▴';
  });

  searchInput.addEventListener('input', applyFilters);

  tagPills = pillsWrap.querySelectorAll('.tag-pill');

  // ── PROJECT LIST ──
  projectList = el('div', 'project-list');
  container.appendChild(projectList);

  renderRows(PORTFOLIO.projects);

  // Build modal once (appended to body)
  buildModal();
}

/* ── FOOTER ──────────────────────────────────────────────── */

function buildFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;
  const { name } = PORTFOLIO.identity;
  footer.innerHTML = `<p>&copy; ${new Date().getFullYear()} ${name}. All rights reserved.</p>`;
}

/* ── INIT ─────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildPage();
  buildFooter();
});
