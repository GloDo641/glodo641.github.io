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
  populateEducation();
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
    { href: 'projects.html', label: 'Projects' },
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

  cta.appendChild(btnCV);
  body.appendChild(cta);
  container.appendChild(body);
  section.appendChild(container);
}

/* ── SKILLS ──────────────────────────────────────────────── */

function populateSkills() {
  const section = document.getElementById('skills');
  if (!section) return;

  const container = el('div', 'container');
  container.appendChild(sectionHeading('What I know', 'Skills'));

  const groups = el('div', 'skills-groups fade-up');

  // Strip trailing slash for display
  const categoryLabels = {
    'cloud/':       'Cloud',
    'systems/':     'Systems',
    'networking/':  'Networking',
    'programming/': 'Programming',
    'office/':      'Office',
    'management/':  'Management',
  };

  PORTFOLIO.skills.forEach(skill => {
    const group = el('div', 'skill-group');

    const label = categoryLabels[skill.category] || skill.category.replace('/', '');
    group.appendChild(el('span', 'skill-group-label', label));

    const tags = el('div', 'skill-tags');
    skill.items.forEach(item => tags.appendChild(el('span', 'skill-tag', item)));
    group.appendChild(tags);

    groups.appendChild(group);
  });

  container.appendChild(groups);
  section.appendChild(container);
}

/* ── PROJECTS ────────────────────────────────────────────── */

function populateProjects() {
  const section = document.getElementById('projects');
  if (!section) return;

  const container = el('div', 'container');
  container.appendChild(sectionHeading('What I built', 'Projects'));

  const grid = el('div', 'projects-grid fade-up');

  PORTFOLIO.projects.forEach(proj => {
    const card = el('div', 'project-card');

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

  PORTFOLIO.certifications.forEach((cert, i) => {
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
  container.appendChild(sectionHeading('Hands-on Experience', 'Workshops'));

  const grid = el('div', 'list-grid fade-up');

  PORTFOLIO.workshops.forEach(w => {
    const card = el('div', 'list-card');

    const icon = el('div', 'list-icon', '◆');
    card.appendChild(icon);

    const body = el('div', 'list-body');
    body.appendChild(el('div', 'list-title', w.title));
    body.appendChild(el('div', 'list-desc', w.description));
    card.appendChild(body);

    grid.appendChild(card);
  });

  container.appendChild(grid);
  section.appendChild(container);
}

/* ── EDUCATION ───────────────────────────────────────────── */

function populateEducation() {
  const section = document.getElementById('education');
  if (!section) return;

  const container = el('div', 'container');
  container.appendChild(sectionHeading('Academic Background', 'Education'));

  const grid = el('div', 'edu-grid fade-up');

  PORTFOLIO.education.forEach(edu => {
    const card = el('div', 'edu-card');
    card.appendChild(el('div', 'edu-years', edu.years));
    card.appendChild(el('div', 'edu-school', edu.school));
    card.appendChild(el('div', 'edu-degree', edu.degree));
    card.appendChild(el('div', 'edu-location', edu.location));
    grid.appendChild(card);
  });

  container.appendChild(grid);
  section.appendChild(container);
}

/* ── CONTACT ─────────────────────────────────────────────── */

function populateContact() {
  const section = document.getElementById('contact');
  if (!section) return;

  const { email, github, githubDisplay, linkedin, linkedinDisplay } = PORTFOLIO.identity;

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
