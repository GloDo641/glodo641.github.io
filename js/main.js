/**
 * PORTFOLIO — Main Script
 * Reads PORTFOLIO from data/content.js and renders the entire page.
 */

document.addEventListener('DOMContentLoaded', () => {
  populateNav();
  populateHero();
  populateAbout();
  populateSkills();
  populateProjects();
  populateCertifications();
  populateWorkshops();
  populateLearning();
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
  const { name, role, school, cv } = PORTFOLIO.identity;
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
    { href: '#projects',       label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
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
  btnCV.textContent = 'Download CV';

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
  const { cv } = PORTFOLIO.identity;

  const container = el('div', 'container');
  container.appendChild(sectionHeading('Introduction', 'About Me'));

  const body = el('div', 'about-text fade-up');

  PORTFOLIO.about.forEach(p => body.appendChild(el('p', '', p)));

  const cta = el('div', 'about-cta');

  const btnCV = document.createElement('a');
  btnCV.href = cv;
  btnCV.target = '_blank';
  btnCV.className = 'btn-primary';
  btnCV.textContent = 'View Full CV';

  const btnSummary = document.createElement('button');
  btnSummary.className = 'btn-secondary';
  btnSummary.textContent = 'CV Summary';
  btnSummary.addEventListener('click', openCVModal);

  cta.appendChild(btnCV);
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
    'cloud/':       { label: 'Cloud',       icon: 'fa-solid fa-cloud'          },
    'systems/':     { label: 'Systems',     icon: 'fa-solid fa-server'         },
    'networking/':  { label: 'Networking',  icon: 'fa-solid fa-network-wired'  },
    'programming/': { label: 'Programming', icon: 'fa-solid fa-code'           },
    'scripting/':   { label: 'Scripting',   icon: 'fa-solid fa-terminal'       },
    'office/':      { label: 'Office',      icon: 'fa-solid fa-briefcase'      },
    'management/':  { label: 'Management',  icon: 'fa-solid fa-list-check'     },
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

/* ── PROJECTS ────────────────────────────────────────────── */

function populateProjects() {
  const section = document.getElementById('projects');
  if (!section) return;

  const container = el('div', 'container');
  container.appendChild(sectionHeading('What I built', 'Highlighted Projects'));

  const grid = el('div', 'projects-grid fade-up');

  PORTFOLIO.projects.slice(0, 2).forEach(proj => {
    const card = el('div', 'project-card');

    // Project image
    if (proj.image) {
      const img = document.createElement('img');
      img.src       = proj.image;
      img.alt       = proj.title;
      img.className = 'project-card-img';
      card.appendChild(img);
    }

    // Header: title + status
    const header = el('div', 'project-card-header');
    header.appendChild(el('div', 'project-title', proj.title));
    const statusCls   = proj.status === 'complete' ? 'status-complete' : 'status-wip';
    const statusLabel = proj.status === 'complete' ? 'Complete' : 'In Progress';
    header.appendChild(el('span', `project-status ${statusCls}`, statusLabel));
    card.appendChild(header);

    card.appendChild(el('p', 'project-desc', proj.description));

    // Tech tags
    const tech = el('div', 'project-tech');
    proj.tech.forEach(t => tech.appendChild(el('span', 'tech-tag', t)));
    card.appendChild(tech);

    // Download link
    if (proj.link) {
      const a = document.createElement('a');
      a.href = proj.link;
      a.target = '_blank';
      a.className = 'project-link';
      a.innerHTML = `<span>↓</span> ${proj.linkLabel}`;
      card.appendChild(a);
    }

    grid.appendChild(card);
  });

  container.appendChild(grid);

  // Link to the full projects page
  const viewAllWrap = el('div', 'section-cta fade-up');
  const viewAll = document.createElement('a');
  viewAll.href = 'projects.html';
  viewAll.className = 'btn-secondary';
  viewAll.textContent = 'View All Projects →';
  viewAllWrap.appendChild(viewAll);
  container.appendChild(viewAllWrap);

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

/* ── WORKSHOPS ───────────────────────────────────────────── */

function populateWorkshops() {
  const section = document.getElementById('workshops');
  if (!section) return;

  const container = el('div', 'container');
  container.appendChild(sectionHeading('Hands-on Experience', 'Highlighted Workshops'));

  const { visits, speakers } = PORTFOLIO.workshops;
  const cols = el('div', 'split-columns fade-up');

  // Left: Visits
  const visitsCol = el('div', 'split-col');
  visitsCol.appendChild(el('div', 'split-col-title', 'Visits'));
  visits.slice(0, 1).forEach(v => {
    const card = el('div', 'list-card');
    const body = el('div', 'list-body');
    body.appendChild(el('div', 'list-title', v.title));
    body.appendChild(el('div', 'list-desc', v.description));
    card.appendChild(body);
    visitsCol.appendChild(card);
  });
  cols.appendChild(visitsCol);

  // Right: Speakers
  const speakersCol = el('div', 'split-col');
  speakersCol.appendChild(el('div', 'split-col-title', 'Speakers'));
  speakers.slice(0, 1).forEach(s => {
    const card = el('div', 'list-card');
    const body = el('div', 'list-body');
    body.appendChild(el('div', 'list-title', s.name));
    body.appendChild(el('div', 'list-desc', s.description));
    card.appendChild(body);
    speakersCol.appendChild(card);
  });
  cols.appendChild(speakersCol);

  container.appendChild(cols);

  const cta = el('div', 'section-cta fade-up');
  const link = document.createElement('a');
  link.href      = 'workshops.html';
  link.className = 'btn-secondary';
  link.textContent = 'View All Workshops →';
  cta.appendChild(link);
  container.appendChild(cta);

  section.appendChild(container);
}

/* ── LEARNING PATH ───────────────────────────────────────── */

function populateLearning() {
  const section = document.getElementById('learning');
  if (!section) return;

  const container = el('div', 'container');
  container.appendChild(sectionHeading('Studies', 'Learning Path'));

  const { education, onlineCourses } = PORTFOLIO.learningPath;
  const cols = el('div', 'split-columns fade-up');

  // Left: Education
  const eduCol = el('div', 'split-col');
  eduCol.appendChild(el('div', 'split-col-title', 'Education'));
  education.forEach(edu => {
    const card = el('div', 'edu-card');
    card.appendChild(el('div', 'edu-years', edu.years));
    card.appendChild(el('div', 'edu-school', edu.school));
    card.appendChild(el('div', 'edu-degree', edu.degree));
    card.appendChild(el('div', 'edu-location', edu.location));
    if (edu.description) card.appendChild(el('p', 'edu-desc', edu.description));
    eduCol.appendChild(card);
  });
  cols.appendChild(eduCol);

  // Right: Online Courses
  const courseCol = el('div', 'split-col');
  courseCol.appendChild(el('div', 'split-col-title', 'Highlighted Online Courses'));
  onlineCourses.slice(0, 1).forEach(course => {
    const card = el('div', 'list-card');
    const body = el('div', 'list-body');
    body.appendChild(el('div', 'list-title', course.title));
    if (course.platform)    body.appendChild(el('div', 'list-desc', course.platform));
    if (course.description) body.appendChild(el('p',   'list-desc', course.description));
    card.appendChild(body);
    courseCol.appendChild(card);
  });
  cols.appendChild(courseCol);

  container.appendChild(cols);

  const cta = el('div', 'section-cta fade-up');
  const link = document.createElement('a');
  link.href      = 'learning.html';
  link.className = 'btn-secondary';
  link.textContent = 'View All Courses →';
  cta.appendChild(link);
  container.appendChild(cta);

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
