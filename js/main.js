/**
 * PORTFOLIO — Main Script
 * Reads PORTFOLIO from data/content.js and renders the entire page.
 */

document.addEventListener('DOMContentLoaded', () => {
  populateNav();
  populateHero();
  populateAbout();
  populateSkills();
  populateCertifications();
  populateExplore();
  populateContact();
  populateFooter();

  initScrollSpy();
  initMobileMenu();
  initScrollAnimations();
});

/* ── HELPERS ─────────────────────────────────────────────── */

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

function sectionHeading(label, title) {
  const wrap = el('div', 'section-heading');
  wrap.appendChild(el('p', 'section-label', label));
  wrap.appendChild(el('h2', 'section-title', title));
  wrap.appendChild(el('div', 'section-rule'));
  return wrap;
}

/* ── NAV ─────────────────────────────────────────────────── */

function populateNav() {
  const { name } = PORTFOLIO.identity;

  // Logo
  const logo = document.getElementById('nav-logo');
  if (logo) {
    const first = name.split(' ')[0];
    const last  = name.split(' ').slice(1).join(' ');
    logo.innerHTML = `${first} <span>${last}</span>`;
  }

  // Nav links
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
    links.appendChild(a);
  });
}

/* ── HERO ────────────────────────────────────────────────── */

function populateHero() {
  const { name, role, school, cv, cvFrench } = PORTFOLIO.identity;
  const container = document.querySelector('#home .container');
  if (!container) return;

  const content = el('div', 'hero-content');

  // Text side
  const text = el('div', 'hero-text fade-up');
  text.innerHTML = `
    <p class="hero-greeting">Hello, I'm</p>
    <h1 class="hero-name">${name}</h1>
    <div class="hero-divider"></div>
    <p class="hero-role">${role}</p>
    <p class="hero-school">${school}</p>
  `;

  // Section navigation links
  const navLinks = el('div', 'hero-nav-links');
  const sections = [
    { href: '#about',          label: 'About' },
    { href: '#skills',         label: 'Skills' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#explore',        label: 'Explore' },
    { href: '#contact',        label: 'Contact' },
  ];
  sections.forEach(({ href, label }) => {
    const a = el('a', '', label);
    a.href = href;
    navLinks.appendChild(a);
  });
  text.appendChild(navLinks);

  const actions = el('div', 'hero-actions');

  const btnCV = document.createElement('a');
  btnCV.href = cv;
  btnCV.target = '_blank';
  btnCV.className = 'btn-primary';
  btnCV.textContent = 'Download CV (EN)';

  const btnCVFr = document.createElement('a');
  btnCVFr.href = cvFrench;
  btnCVFr.target = '_blank';
  btnCVFr.className = 'btn-secondary';
  btnCVFr.textContent = 'Download CV (FR)';

  actions.appendChild(btnCV);
  actions.appendChild(btnCVFr);
  text.appendChild(actions);
  content.appendChild(text);

  // Profile image
  const imageWrap = el('div', 'hero-image fade-up');
  imageWrap.style.transitionDelay = '0.15s';
  const ring = el('div', 'profile-ring');
  const img = document.createElement('img');
  img.src = '../images/profile.jpg';
  img.alt = name;
  ring.appendChild(img);
  imageWrap.appendChild(ring);
  content.appendChild(imageWrap);

  container.appendChild(content);

  // Wave separator at the bottom of the hero
  const section = document.getElementById('home');
  if (section) {
    const wave = el('div', 'hero-wave');
    wave.innerHTML = `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" class="wave-fill"></path></svg>`;
    section.appendChild(wave);
  }
}

/* ── ABOUT ───────────────────────────────────────────────── */

function populateAbout() {
  const section = document.getElementById('about');
  if (!section) return;
  const { cv, cvFrench } = PORTFOLIO.identity;

  const container = el('div', 'container');
  container.appendChild(sectionHeading('Introduction', 'About Me'));

  const body = el('div', 'about-text fade-up');

  PORTFOLIO.about.forEach(p => body.appendChild(el('p', '', p)));

  const cta = el('div', 'about-cta');

  const btnCV = document.createElement('a');
  btnCV.href = cv;
  btnCV.target = '_blank';
  btnCV.className = 'btn-primary';
  btnCV.textContent = 'View CV (EN)';

  const btnCVFr = document.createElement('a');
  btnCVFr.href = cvFrench;
  btnCVFr.target = '_blank';
  btnCVFr.className = 'btn-primary';
  btnCVFr.textContent = 'View CV (FR)';

  const btnSummary = document.createElement('button');
  btnSummary.className = 'btn-secondary';
  btnSummary.textContent = 'CV Summary';
  btnSummary.addEventListener('click', openCVModal);

  cta.appendChild(btnCV);
  cta.appendChild(btnCVFr);
  cta.appendChild(btnSummary);
  body.appendChild(cta);
  container.appendChild(body);
  section.appendChild(container);

  buildCVModal();
}

/* ── CV SUMMARY MODAL ────────────────────────────────────── */

function buildCVCard(title) {
  const card = el('div', 'cv-summary-card');
  card.appendChild(el('div', 'cv-summary-card-title', title));
  return card;
}

function buildCVModal() {
  const backdrop = el('div', 'modal-backdrop');
  backdrop.id = 'cv-modal';
  backdrop.addEventListener('click', e => { if (e.target === backdrop) backdrop.classList.remove('open'); });

  const box = el('div', 'modal-box');

  const closeBtn = el('button', 'modal-close', '✕');
  closeBtn.addEventListener('click', () => backdrop.classList.remove('open'));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && backdrop.classList.contains('open'))
      backdrop.classList.remove('open');
  });
  box.appendChild(closeBtn);

  const header = el('div', 'modal-header');
  header.appendChild(el('h2', 'modal-title', 'CV Summary'));
  box.appendChild(header);

  const grid = el('div', 'cv-summary-grid');

  // Row 1 — Education | Work Experience
  const eduCard = buildCVCard('Education');
  PORTFOLIO.learningPath.education.forEach(edu => {
    const item = el('div', 'cv-summary-edu-item');
    item.appendChild(el('div', 'cv-summary-edu-school', edu.school));
    item.appendChild(el('div', 'cv-summary-edu-degree', edu.degree));
    item.appendChild(el('span', 'cv-summary-edu-years', edu.years));
    eduCard.appendChild(item);
  });
  grid.appendChild(eduCard);

  const workCard = buildCVCard('Work Experience');
  PORTFOLIO.workExperience.forEach(job => {
    const item = el('div', 'cv-summary-edu-item');
    item.appendChild(el('div', 'cv-summary-edu-school', job.role));
    item.appendChild(el('div', 'cv-summary-edu-degree', job.company));
    item.appendChild(el('span', 'cv-summary-edu-years', job.years));
    if (job.description) item.appendChild(el('p', 'cv-summary-work-desc', job.description));
    workCard.appendChild(item);
  });
  grid.appendChild(workCard);

  // Row 2 — Certifications | Languages
  const certCard = buildCVCard('Certifications');
  const certList = el('div', 'cv-summary-list');
  PORTFOLIO.certifications.filter(c => c.priority).forEach(cert => {
    certList.appendChild(el('div', 'cv-summary-list-item', cert.title));
  });
  certCard.appendChild(certList);
  grid.appendChild(certCard);

  const langCard = buildCVCard('Languages');
  const langList = el('div', 'cv-summary-list');
  PORTFOLIO.languages.forEach(l => {
    const row = el('div', 'cv-summary-lang-row');
    row.appendChild(el('span', 'cv-summary-lang-name', l.language));
    row.appendChild(el('span', 'cv-summary-lang-level', l.level));
    langList.appendChild(row);
  });
  langCard.appendChild(langList);
  grid.appendChild(langCard);

  // Row 3 — Soft Skills (full width)
  const softCard = buildCVCard('Soft Skills');
  softCard.classList.add('cv-summary-card--wide');
  const softTags = el('div', 'cv-summary-tags');
  PORTFOLIO.softSkills.forEach(s => softTags.appendChild(el('span', 'skill-tag', s)));
  softCard.appendChild(softTags);
  grid.appendChild(softCard);

  box.appendChild(grid);
  backdrop.appendChild(box);
  document.body.appendChild(backdrop);
}

function openCVModal() {
  document.getElementById('cv-modal').classList.add('open');
}

/* ── SKILLS ──────────────────────────────────────────────── */

function populateSkills() {
  const section = document.getElementById('skills');
  if (!section) return;

  const container = el('div', 'container');
  container.appendChild(sectionHeading('What I know', 'Skills'));

  const groups = el('div', 'skills-groups fade-up');

  const categoryMeta = {
    'cloud/':          { label: 'Cloud',          icon: 'fa-solid fa-cloud'        },
    'virtualization/': { label: 'Virtualization', icon: 'fa-solid fa-layer-group'  },
    'systems/':        { label: 'Systems',        icon: 'fa-solid fa-server'       },
    'networking/':  { label: 'Networking',  icon: 'fa-solid fa-network-wired'  },
    'programming/': { label: 'Programming', icon: 'fa-solid fa-code'           },
    'scripting/':   { label: 'Scripting',   icon: 'fa-solid fa-terminal'       },
    'office/':      { label: 'Office',      icon: 'fa-solid fa-briefcase'      },
    'management/':  { label: 'Management',  icon: 'fa-solid fa-list-check'     },
    'other/':       { label: 'Other',       icon: 'fa-solid fa-circle'         }
  };

  PORTFOLIO.skills.forEach(skill => {
    const meta = categoryMeta[skill.category] || { label: skill.category.replace('/', ''), icon: 'fa-solid fa-circle' };
    const card = el('div', 'skill-card');

    const header = el('div', 'skill-card-header');
    const iconBox = el('div', 'skill-card-icon');
    iconBox.appendChild(el('i', meta.icon));
    header.appendChild(iconBox);
    header.appendChild(el('span', 'skill-group-label', meta.label));
    card.appendChild(header);

    const tags = el('div', 'skill-tags');
    skill.items.forEach(item => tags.appendChild(el('span', 'skill-tag', item)));
    card.appendChild(tags);

    groups.appendChild(card);
  });

  container.appendChild(groups);
  section.appendChild(container);
}

/* ── EXPLORE (redirection cards) ──────────────────────────── */

function populateExplore() {
  const section = document.getElementById('explore');
  if (!section) return;

  const container = el('div', 'container');
  container.appendChild(sectionHeading('Dive deeper', 'Explore More'));

  const grid = el('div', 'explore-grid fade-up');

  PORTFOLIO.explore.forEach(item => {
    const card = el('a', 'explore-card');
    card.href = item.href;

    const iconBox = el('div', 'explore-card-icon');
    iconBox.appendChild(el('i', item.icon));
    card.appendChild(iconBox);

    card.appendChild(el('div', 'explore-card-title', item.title));
    card.appendChild(el('p', 'explore-card-desc', item.description));

    const cta = el('span', 'explore-card-link');
    cta.innerHTML = `${item.linkLabel} <span aria-hidden="true">→</span>`;
    card.appendChild(cta);

    grid.appendChild(card);
  });

  container.appendChild(grid);
  section.appendChild(container);
}

/* ── CERTIFICATIONS ──────────────────────────────────────── */

function populateCertifications() {
  const section = document.getElementById('certifications');
  if (!section) return;

  const container = el('div', 'container');
  container.appendChild(sectionHeading('Credentials', 'Certifications'));

  let showingAll = false;

  const grid = el('div', 'certs-grid fade-up');

  PORTFOLIO.certifications.forEach(cert => {
    const card = el('div', 'cert-card');
    if (!cert.priority) card.style.display = 'none';

    card.appendChild(el('p', 'cert-issuer', cert.issuer));

    const img = document.createElement('img');
    img.src    = cert.badge;
    img.alt    = cert.title;
    img.className = 'cert-badge';
    card.appendChild(img);

    card.appendChild(el('p', 'cert-title', cert.title));

    const actions = el('div', 'cert-actions');

    const credlyLink = document.createElement('a');
    credlyLink.href = cert.credlyLink;
    credlyLink.target = '_blank';
    credlyLink.className = 'cert-link';
    credlyLink.textContent = 'View Badge';
    actions.appendChild(credlyLink);

    if (cert.pdf) {
      const pdfLink = document.createElement('a');
      pdfLink.href = cert.pdf;
      pdfLink.target = '_blank';
      pdfLink.className = 'cert-link';
      pdfLink.textContent = 'Score Report';
      actions.appendChild(pdfLink);
    }

    card.appendChild(actions);
    grid.appendChild(card);
  });

  container.appendChild(grid);

  // Show more button
  const extraCount = PORTFOLIO.certifications.filter(c => !c.priority).length;
  if (extraCount > 0) {
    const btn = el('button', 'show-more-btn');
    btn.innerHTML = `Show ${extraCount} more ▾`;

    btn.addEventListener('click', () => {
      showingAll = !showingAll;
      grid.querySelectorAll('.cert-card').forEach((card, idx) => {
        if (!PORTFOLIO.certifications[idx]?.priority) {
          card.style.display = showingAll ? '' : 'none';
        }
      });
      btn.innerHTML = showingAll
        ? `Show fewer ▴`
        : `Show ${extraCount} more ▾`;
    });

    container.appendChild(btn);
  }

  section.appendChild(container);
}

/* ── CONTACT ─────────────────────────────────────────────── */

function populateContact() {
  const section = document.getElementById('contact');
  if (!section) return;

  const { email, linkedin, linkedinDisplay } = PORTFOLIO.identity;

  const container = el('div', 'container');
  container.appendChild(sectionHeading('Get in touch', 'Contact'));

  const grid = el('div', 'contact-grid fade-up');

  const contactItems = [
    { icon: '✉', label: 'Email',    value: `<a href="mailto:${email}">${email}</a>` },
    { icon: '↗', label: 'LinkedIn', value: `<a href="${linkedin}" target="_blank">${linkedinDisplay}</a>` },
  ];

  contactItems.forEach(item => {
    const card = el('div', 'contact-card');
    card.appendChild(el('div', 'contact-icon', item.icon));
    const info = el('div');
    info.appendChild(el('div', 'contact-label', item.label));
    const val = el('div', 'contact-value');
    val.innerHTML = item.value;
    info.appendChild(val);
    card.appendChild(info);
    grid.appendChild(card);
  });

  container.appendChild(grid);
  section.appendChild(container);
}

/* ── FOOTER ──────────────────────────────────────────────── */

function populateFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;
  const { name } = PORTFOLIO.identity;
  footer.innerHTML = `<p>&copy; ${new Date().getFullYear()} ${name}. All rights reserved.</p>`;
}

/* ── SCROLL SPY ──────────────────────────────────────────── */

function initScrollSpy() {
  const navLinks = document.querySelectorAll('#nav-links a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.3, rootMargin: `-${64}px 0px 0px 0px` });

  document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
}

/* ── MOBILE MENU ─────────────────────────────────────────── */

function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
  });

  links.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.textContent = '☰';
  });
}

/* ── SCROLL ANIMATIONS ───────────────────────────────────── */

function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  // Observe after a tick so JS-rendered elements are in the DOM
  setTimeout(() => {
    document.querySelectorAll('.fade-up').forEach(e => observer.observe(e));
  }, 50);
}
