/* ─────────────────────────────────────────────────────────────
   WORKSHOPS PAGE — workshops.js
   Reads PORTFOLIO from data/content.js and renders the full
   workshops page: nav, hero, visits section, external speakers.
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

  const logo = document.getElementById('nav-logo');
  if (logo) {
    const first = name.split(' ')[0];
    const last  = name.split(' ').slice(1).join(' ');
    logo.innerHTML = `${first} <span>${last}</span>`;
  }

  const links = document.getElementById('nav-links');
  if (!links) return;

  const pages = [
    { href: 'projects.html',   label: 'Projects'   },
    { href: 'workshops.html',  label: 'Workshops'  },
  ];

  pages.forEach(({ href, label }) => {
    const a = el('a', '', label);
    a.href = href;
    if (href === 'workshops.html') a.classList.add('active');
    links.appendChild(a);
  });

  const toggle = document.getElementById('nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
    });
  }
}

/* ── SECTION HEADING ─────────────────────────────────────── */

function sectionHeading(label, title) {
  const wrap = el('div', 'section-heading');
  wrap.appendChild(el('p',   'section-label', label));
  wrap.appendChild(el('h2',  'section-title', title));
  wrap.appendChild(el('div', 'section-rule'));
  return wrap;
}

/* ── CARD BUILDER ────────────────────────────────────────── */

// Builds a full workshop card (visit or major speaker).
// metaLines: optional array of strings shown top-right (date, location, etc.)
function buildCard(title, description, learnings, metaLines) {
  const card = el('div', 'wshop-card');

  // Header: title + optional meta
  const header = el('div', 'wshop-card-header');
  header.appendChild(el('div', 'wshop-card-title', title));

  if (metaLines && metaLines.length) {
    const meta = el('div', 'wshop-card-meta');
    metaLines.forEach(line => {
      const p = document.createElement('p');
      p.textContent = line;
      meta.appendChild(p);
    });
    header.appendChild(meta);
  }
  card.appendChild(header);

  // Description — \n renders as a line break
  if (description) {
    const p = el('p', 'wshop-card-desc');
    p.innerHTML = description.replace(/\n/g, '<br>');
    card.appendChild(p);
  }

  // Key learnings list
  if (learnings && learnings.length) {
    const wrap = el('div', 'wshop-learnings');
    wrap.appendChild(el('div', 'wshop-learnings-label', 'Key Learnings'));
    const ul = el('ul', 'wshop-learnings-list');
    learnings.forEach(item => ul.appendChild(el('li', '', item)));
    wrap.appendChild(ul);
    card.appendChild(wrap);
  }

  return card;
}

/* ── PAGE BUILDER ────────────────────────────────────────── */

function buildPage() {
  const main = document.getElementById('workshops-main');
  if (!main) return;

  const { visits, speakers, smallerSpeakers } = PORTFOLIO.workshops;

  // ── HERO ──────────────────────────────────────────────────
  const hero = el('div', 'page-hero');

  const overlay = el('div', 'page-hero-overlay');
  hero.appendChild(overlay);

  const heroInner = el('div', 'container page-hero-inner');
  heroInner.appendChild(el('p',   'page-hero-label', 'External Experience'));
  heroInner.appendChild(el('h1',  'page-hero-title', 'Workshops'));
  heroInner.appendChild(el('div', 'page-hero-rule'));
  heroInner.appendChild(el('p',   'page-hero-sub',   'Site visits, lectures & external talks'));
  hero.appendChild(heroInner);

  const wave = el('div', 'hero-wave');
  wave.innerHTML = `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" class="wave-fill"></path></svg>`;
  hero.appendChild(wave);

  main.appendChild(hero);

  // ── CONTENT ───────────────────────────────────────────────
  const content = el('div', 'wshop-content');
  const container = el('div', 'container');
  const sections  = el('div', 'wshop-sections');
  container.appendChild(sections);
  content.appendChild(container);
  main.appendChild(content);

  // ── VISITS ────────────────────────────────────────────────
  if (visits && visits.length) {
    const sec = el('div', 'wshop-section');
    sec.appendChild(sectionHeading('Places & Events', 'Visits'));

    const cards = el('div', 'wshop-cards');
    visits.forEach(v => {
      const meta = [];
      if (v.date)     meta.push(v.date);
      if (v.location) meta.push(v.location);
      cards.appendChild(buildCard(v.title, v.description, v.learnings, meta));
    });

    sec.appendChild(cards);
    sections.appendChild(sec);
  }

  // ── EXTERNAL SPEAKERS ─────────────────────────────────────
  const hasSpeakers = speakers && speakers.length;
  const hasSmaller  = smallerSpeakers && smallerSpeakers.length;

  if (hasSpeakers || hasSmaller) {
    const sec = el('div', 'wshop-section');
    sec.appendChild(sectionHeading('Guest Lectures', 'External Speakers'));

    const cards = el('div', 'wshop-cards');

    // Full speaker cards
    if (hasSpeakers) {
      speakers.forEach(s => {
        cards.appendChild(buildCard(s.name, s.description, s.learnings, null));
      });
    }

    // Smaller speakers — compact list under a sub-label
    if (hasSmaller) {
      cards.appendChild(el('div', 'wshop-subsection-label', 'One-Session Lectures'));

      const smallCard = el('div', 'wshop-small-card');
      const list      = el('div', 'wshop-small-list');

      smallerSpeakers.forEach(sp => {
        const item = el('div', 'wshop-small-item');

        const row = el('div', 'wshop-small-row');
        row.appendChild(el('span', 'wshop-small-name',  sp.name));
        row.appendChild(el('span', 'wshop-small-dash',  '—'));
        row.appendChild(el('span', 'wshop-small-topic', sp.topic));
        item.appendChild(row);

        if (sp.description) {
          const p = el('p', 'wshop-small-desc');
          p.innerHTML = sp.description.replace(/\n/g, '<br>');
          item.appendChild(p);
        }

        list.appendChild(item);
      });

      smallCard.appendChild(list);
      cards.appendChild(smallCard);
    }

    sec.appendChild(cards);
    sections.appendChild(sec);
  }
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
