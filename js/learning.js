/* ─────────────────────────────────────────────────────────────
   LEARNING PATH PAGE — learning.js
   Reads PORTFOLIO from data/content.js and renders the full
   learning path page: nav, hero, education section, online courses.
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
    { href: 'projects.html',  label: 'Projects'      },
    { href: 'workshops.html', label: 'Workshops'     },
    { href: 'learning.html',  label: 'Learning Path' },
  ];

  pages.forEach(({ href, label }) => {
    const a = el('a', '', label);
    a.href = href;
    if (href === 'learning.html') a.classList.add('active');
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

/* ── EDUCATION CARD BUILDER ──────────────────────────────── */

function buildEduCard(edu) {
  const card = el('div', 'wshop-card');

  // Header: school name + meta (degree, years · location)
  const header = el('div', 'wshop-card-header');
  header.appendChild(el('div', 'wshop-card-title', edu.school));

  const meta = el('div', 'wshop-card-meta');
  [edu.degree, `${edu.years} · ${edu.location}`].forEach(line => {
    const p = document.createElement('p');
    p.textContent = line;
    meta.appendChild(p);
  });
  header.appendChild(meta);
  card.appendChild(header);

  // Programme description
  if (edu.description) {
    const p = el('p', 'wshop-card-desc');
    p.innerHTML = edu.description.replace(/\n/g, '<br>');
    card.appendChild(p);
  }

  // Semester highlights — collapsible
  if (edu.subjects && edu.subjects.length) {
    const wrap = el('div', 'lpath-subjects');
    wrap.appendChild(el('div', 'lpath-block-label', 'Semester Highlights'));

    edu.subjects.forEach(sem => {
      const semWrap = el('div', 'lpath-semester');

      const toggle = el('button', 'lpath-semester-toggle');
      toggle.setAttribute('aria-expanded', 'false');
      const labelSpan = el('span', '', sem.semester);
      const icon = el('i', 'fa-solid fa-chevron-down lpath-semester-icon');
      toggle.appendChild(labelSpan);
      toggle.appendChild(icon);

      const body = el('div', 'lpath-semester-body lpath-semester-body--collapsed');
      if (sem.highlights) {
        const p = el('p', 'lpath-semester-highlights');
        p.innerHTML = sem.highlights.replace(/\n/g, '<br>');
        body.appendChild(p);
      }

      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        body.classList.toggle('lpath-semester-body--collapsed', expanded);
        icon.className = expanded
          ? 'fa-solid fa-chevron-down lpath-semester-icon'
          : 'fa-solid fa-chevron-up lpath-semester-icon';
      });

      semWrap.appendChild(toggle);
      semWrap.appendChild(body);
      wrap.appendChild(semWrap);
    });

    card.appendChild(wrap);
  }

  // Personal Reflection
  if (edu.reflection) {
    const wrap = el('div', 'lpath-reflection');
    wrap.appendChild(el('div', 'lpath-block-label', 'Personal Reflection'));
    const p = el('p', 'lpath-reflection-text');
    p.innerHTML = edu.reflection.replace(/\n/g, '<br>');
    wrap.appendChild(p);
    card.appendChild(wrap);
  }

  return card;
}

/* ── PAGE BUILDER ────────────────────────────────────────── */

function buildPage() {
  const main = document.getElementById('learning-main');
  if (!main) return;

  const { education, onlineCourses } = PORTFOLIO.learningPath;

  // ── HERO ──────────────────────────────────────────────────
  const hero = el('div', 'page-hero');
  hero.appendChild(el('div', 'page-hero-overlay'));

  const heroInner = el('div', 'container page-hero-inner');
  heroInner.appendChild(el('p',   'page-hero-label', 'Studies & Growth'));
  heroInner.appendChild(el('h1',  'page-hero-title', 'Learning Path'));
  heroInner.appendChild(el('div', 'page-hero-rule'));
  heroInner.appendChild(el('p',   'page-hero-sub',   'Education, courses & self-study'));
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

  // ── EDUCATION SECTION ─────────────────────────────────────
  if (education && education.length) {
    const sec = el('div', 'wshop-section');
    sec.appendChild(sectionHeading('Formal Studies', 'Education'));

    const cards = el('div', 'wshop-cards');
    education.forEach(edu => cards.appendChild(buildEduCard(edu)));
    sec.appendChild(cards);
    sections.appendChild(sec);
  }

  // ── ONLINE COURSES SECTION ────────────────────────────────
  if (onlineCourses && onlineCourses.length) {
    const sec = el('div', 'wshop-section');
    sec.appendChild(sectionHeading('Self-Study', 'Online Courses'));

    const card = el('div', 'wshop-small-card');
    const list = el('div', 'wshop-small-list');

    onlineCourses.forEach(course => {
      const item = el('div', 'wshop-small-item');

      const row = el('div', 'wshop-small-row');
      row.appendChild(el('span', 'wshop-small-name',  course.title));
      row.appendChild(el('span', 'wshop-small-dash',  '—'));
      row.appendChild(el('span', 'wshop-small-topic', course.platform));
      if (course.date) row.appendChild(el('span', 'wshop-small-date', course.date));
      item.appendChild(row);

      if (course.description) {
        const p = el('p', 'wshop-small-desc');
        p.innerHTML = course.description.replace(/\n/g, '<br>');
        item.appendChild(p);
      }

      // Image toggle buttons — only rendered when an image path exists
      if (course.progressImage || course.examImage) {
        const btnRow   = el('div', 'course-img-btns');
        const imgWraps = [];

        const makeToggle = (label, icon, imageSrc) => {
          const btn = el('button', 'course-img-btn');
          btn.innerHTML = `<i class="fa-solid ${icon}"></i> ${label}`;

          const imgWrap = el('div', 'course-img-wrap course-img-wrap--hidden');
          const img     = el('img', 'course-img');
          img.src = imageSrc;
          img.alt = label;
          imgWrap.appendChild(img);

          btn.addEventListener('click', () => {
            const hidden = imgWrap.classList.toggle('course-img-wrap--hidden');
            btn.classList.toggle('course-img-btn--active', !hidden);
          });

          btnRow.appendChild(btn);
          imgWraps.push(imgWrap);
        };

        if (course.progressImage) makeToggle('Course Progress', 'fa-bars-progress', course.progressImage);
        if (course.examImage)     makeToggle('Exam Results',    'fa-file-lines',    course.examImage);

        item.appendChild(btnRow);
        imgWraps.forEach(w => item.appendChild(w));
      }

      list.appendChild(item);
    });

    card.appendChild(list);
    sec.appendChild(card);
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
