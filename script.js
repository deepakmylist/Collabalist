/* ============================================================
   Deepak's Portfolio
   Content is loaded from data.json so the page can be updated
   without changing the HTML or CSS.
   ============================================================ */

// Small helper to select an element from the page.
const $ = (selector, root = document) => root.querySelector(selector);

// Escape text before inserting it into HTML templates.
function escapeHTML(value = '') {
  return String(value).replace(/[&<>"']/g, (character) => {
    const replacements = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };

    return replacements[character];
  });
}

// Allow only common safe link protocols.
function safeHref(href = '') {
  return /^(https?:|mailto:|tel:|#)/i.test(href) ? href : '#';
}

// Render a list of tags. Items can be strings or objects with a name.
function renderTags(items = []) {
  const tagsHTML = items.map((item) => {
    const label = typeof item === 'string' ? item : (item.name || '');
    return `<span class="tag">${escapeHTML(label)}</span>`;
  }).join('');

  return `<div class="tag-list">${tagsHTML}</div>`;
}

// SVG paths used by the floating navigation menu.
const navIcons = {
  'user-round': `
    <circle cx="12" cy="8" r="4" />
    <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
  `,
  'layers': `
    <path d="m12 2 9 5-9 5-9-5 9-5Z" />
    <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
  `,
  'briefcase-business': `
    <rect x="3" y="7" width="18" height="14" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
  `,
  'folder-code': `
    <path d="M3 5a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v2H3Z" />
    <path d="M3 9h18l-2 10H5L3 9Z" />
    <path d="m10 12-2 2 2 2m4-4 2 2-2 2" />
  `,
  'code-2': `
    <path d="m8 17-5-5 5-5m8 0 5 5-5 5m-2-12-4 14" />
  `,
  'mail': `
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  `,
  'openSource': `
    <path d="M-.102 12.53C.01 5.956 4.613 1.277 10.248.52c6.718-.9 12.371 3.67 13.456 9.735 1.03 5.75-2.13 11.133-7.339 13.263-.45.184-.697.082-.87-.373l-2.587-6.728c-.15-.392-.048-.64.34-.814 1.17-.532 1.901-1.423 2.095-2.7a3.46 3.46 0 0 0-3.122-3.98 3.463 3.463 0 0 0-3.75 2.89c-.253 1.598.536 3.084 2.027 3.76.464.214.556.418.377.892l-2.6 6.772c-.125.334-.4.45-.75.315a11.98 11.98 0 0 1-6.33-5.76c-1.206-2.383-1.22-4.247-1.297-5.263zm1.012-.092c.02.32.03.692.063 1.07.305 3.48 2.4 6.946 6.34 8.862.156.073.214.04.272-.11q1.082-2.84 2.178-5.68c.063-.16.03-.231-.116-.323-1.53-.963-2.29-2.348-2.207-4.163.048-1.045.45-1.96 1.152-2.725 1.452-1.583 3.727-1.927 5.59-.852a4.436 4.436 0 0 1 2.188 4.376c-.174 1.48-.934 2.609-2.212 3.378-.13.078-.17.14-.11.29q1.102 2.847 2.187 5.698c.058.15.116.184.27.11 1.72-.802 3.157-1.95 4.265-3.484 1.685-2.333 2.377-4.932 2.048-7.793-.663-5.687-5.78-10.397-12.368-9.584-5.135.63-9.453 4.96-9.54 10.93z"/>
  `
};

// Build an SVG icon for a navigation item.
function renderNavigationIcon(name = 'code-2') {
  const paths = navIcons[name] || navIcons['code-2'];

  return `
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      ${paths}
    </svg>
  `;
}

// Render a button from JSON data.
function renderButton(item = {}) {
  const href = safeHref(item.href || '#');
  const allowedStyles = ['primary', 'secondary', 'linkedin'];
  const style = allowedStyles.includes(item.style) ? item.style : 'secondary';
  const opensNewTab = /^https?:/i.test(item.href || '');
  const externalAttributes = opensNewTab
    ? 'target="_blank" rel="noopener noreferrer"'
    : '';

  return `
    <a class="button ${style}" href="${escapeHTML(href)}" ${externalAttributes}>
      ${escapeHTML(item.label || 'Open link')}
    </a>
  `;
}

// Load the portfolio content from data.json.
async function loadPortfolio() {
  try {
    const response = await fetch('./data.json');

    if (!response.ok) {
      throw new Error(`Could not load data.json (HTTP ${response.status})`);
    }

    const data = await response.json();
    renderPortfolio(data);
  } catch (error) {
    console.error('Portfolio loading error:', error);

    document.body.innerHTML = `
      <main style="padding: 3rem; font-family: system-ui, sans-serif;">
        <h1>Portfolio data could not be loaded</h1>
        <p>
          Make sure <code>data.json</code> is in the same folder as
          <code>index.html</code>, and open the page through GitHub Pages
          or a local static server such as Live Server.
        </p>
        <p style="color: #b45309;">
          Details: ${escapeHTML(error.message || 'Unknown error')}
        </p>
      </main>
    `;
  }
}

// Render every page section using values from data.json.
function renderPortfolio(data) {
  const site = data.site || {};

  document.title = site.title || 'Portfolio';

  const wordmark = $('#wordmark');
  if (wordmark) {
    wordmark.innerHTML = escapeHTML(site.brand || 'D•').replace('•', '<span>•</span>');
  }

  const availability = $('#availability');
  if (availability) {
    availability.textContent = site.availability || '';
  }

  const footerText = $('#footerText');
  if (footerText) {
    footerText.textContent = site.footer || '';
  }

  // Floating section navigation.
  const navigation = $('#navigation');
  if (navigation) {
    navigation.innerHTML = (data.navigation || []).map((item) => `
      <a
        href="${escapeHTML(safeHref(item.href || '#'))}"
        aria-label="${escapeHTML(item.label || 'Section')}"
        title="${escapeHTML(item.label || 'Section')}"
      >
        ${renderNavigationIcon(item.icon)}
        <span>${escapeHTML(item.label || '')}</span>
      </a>
    `).join('');
  }

  // Hero section.
  const hero = data.hero || {};

  const eyebrow = $('#eyebrow');
  if (eyebrow) {
    eyebrow.textContent = hero.eyebrow || '';
  }

  const heroTitle = $('#heroTitle');
  if (heroTitle) {
    const titleLines = hero.titleLines || [];
    heroTitle.innerHTML = titleLines.map((line, index) => {
      const accentClass = index === titleLines.length - 1 ? 'accent-line' : '';
      return `<span class="${accentClass}">${escapeHTML(line)}</span>`;
    }).join('<br>');
  }

  const heroSummary = $('#heroSummary');
  if (heroSummary) {
    heroSummary.textContent = hero.summary || '';
  }

  const heroActions = $('#heroActions');
  if (heroActions) {
    heroActions.innerHTML = (hero.actions || []).map(renderButton).join('');
  }

  const heroMeta = $('#heroMeta');
  if (heroMeta) {
    heroMeta.innerHTML = (hero.meta || []).map((item) => `
      <span class="pill">${escapeHTML(item)}</span>
    `).join('');
  }

  const heroCard = $('#heroCard');
  if (heroCard) {
    const card = hero.card || {};
    heroCard.innerHTML = `
      <p class="eyebrow">${escapeHTML(card.label || '')}</p>
      <h3>${escapeHTML(card.title || '')}</h3>
      <p>${escapeHTML(card.copy || '')}</p>
      ${renderTags(card.chips || [])}
    `;
  }

  // About section.
  const about = data.about || {};
  const aboutGrid = $('#aboutGrid');

  if (aboutGrid) {
    const paragraphs = (about.paragraphs || []).map((paragraph) => `
      <p>${escapeHTML(paragraph)}</p>
    `).join('');

    const facts = (about.facts || []).map((fact) => `
      <div class="fact">
        <small>${escapeHTML(fact.label || '')}</small>
        <strong>${escapeHTML(fact.value || '')}</strong>
      </div>
    `).join('');

    aboutGrid.innerHTML = `
      <div class="about-lead">
        <p class="eyebrow">A LITTLE ABOUT ME</p>
        <h3>${escapeHTML(about.lead || '')}</h3>
      </div>
      <div class="about-copy">
        ${paragraphs}
        <div class="facts">${facts}</div>
      </div>
    `;
  }

  // Expertise section.
  const expertiseGrid = $('#expertiseGrid');
  if (expertiseGrid) {
    expertiseGrid.innerHTML = (data.expertise || []).map((item) => `
      <article class="expertise-card">
        <div class="card-top">
          <span>${escapeHTML(item.number || '')}</span>
          <span class="icon">${escapeHTML(item.icon || '◈')}</span>
        </div>
        <h3>${escapeHTML(item.title || '')}</h3>
        <p>${escapeHTML(item.description || '')}</p>
        ${renderTags(item.tags || [])}
      </article>
    `).join('');
  }

  // Experience section, including company logos and employment dates.
  const experienceList = $('#experienceList');
  if (experienceList) {
    experienceList.innerHTML = (data.experience || []).map((item) => {
      let period = '';

      if (item.start || item.end) {
        period = `${item.start || 'Start date'} — ${item.end || 'Present'}`;
      } else {
        period = item.period || 'Add employment dates in data.json';
      }

      const companyName = item.company || 'Company';
      const logoUrl = item.logoUrl ? safeHref(item.logoUrl) : '';
      const hasValidLogoUrl = logoUrl && logoUrl !== '#';

      const logoHTML = hasValidLogoUrl
        ? `
          <img
            class="company-logo"
            src="${escapeHTML(logoUrl)}"
            alt="${escapeHTML(companyName)} logo"
            loading="lazy"
            onerror="this.hidden = true; this.nextElementSibling.hidden = false"
          >
          <span class="company-logo-placeholder" aria-hidden="true" hidden>
            ${escapeHTML(companyName.slice(0, 1) || '?')}
          </span>
        `
        : `
          <span class="company-logo-placeholder" aria-hidden="true">
            ${escapeHTML(companyName.slice(0, 1) || '?')}
          </span>
        `;

      const roles = Array.isArray(item.roles) ? item.roles.filter(Boolean) : [];
      const hasRoles = roles.length > 0;

      const rolesHTML = hasRoles
        ? `
          <ul class="experience-roles">
            ${roles.map((role) => {
              const dates = [role.start, role.end].filter(Boolean).join(' — ');
              return `
                <li>
                  ${dates ? `<strong>${escapeHTML(dates)}</strong>: ` : ''}
                  ${escapeHTML(role.title || '')}
                </li>
              `;
            }).join('')}
          </ul>
        `
        : '';

      const highlights = (item.highlights || []).map((highlight) => `
        <li>${escapeHTML(highlight)}</li>
      `).join('');

      return `
        <article class="timeline-item">
          <div class="timeline-side">
            <div class="timeline-period">${escapeHTML(period)}</div>
            ${logoHTML}
          </div>

          <div class="timeline-content">
            <div class="experience-company-row${hasRoles ? ' has-roles' : ''}">
              <div>
                ${hasRoles
                  ? `<div class="company">${escapeHTML(item.company || '')}</div>`
                  : `
                    <h3>${escapeHTML(item.role || '')}</h3>
                    <div class="company">${escapeHTML(item.company || '')}</div>
                  `}
              </div>
            </div>
            ${rolesHTML}

            <p>${escapeHTML(item.description || '')}</p>
            ${highlights ? `<ul>${highlights}</ul>` : ''}
          </div>
        </article>
      `;
    }).join('');
  }

  // Projects section.
  const projectsGrid = $('#projectsGrid');
  if (projectsGrid) {
    projectsGrid.innerHTML = (data.projects || []).map((item) => {
      const projectLink = item.link
        ? `
          <a
            class="project-link"
            href="${escapeHTML(safeHref(item.link))}"
            target="_blank"
            rel="noopener noreferrer"
          >${escapeHTML(item.linkLabel || 'View project ↗')}</a>
        `
        : `
          <span class="project-link disabled">
            ${escapeHTML(item.linkLabel || 'Concept in progress')}
          </span>
        `;

      return `
        <article class="project-card">
          <div class="project-visual">
            <span class="project-number">${escapeHTML(item.number || '')}</span>
            <span class="project-symbol">${escapeHTML(item.symbol || '↗')}</span>
          </div>

          <div class="project-content">
            <span class="project-category">${escapeHTML(item.category || '')}</span>
            <h3>${escapeHTML(item.title || '')}</h3>
            <p>${escapeHTML(item.description || '')}</p>
            ${renderTags(item.tags || [])}
            ${projectLink}
          </div>
        </article>
      `;
    }).join('');
  }

  // Skills section.
  // Supported JSON icon properties: iconUrl or icon.
  // If the URL is missing or fails to load, show the skill's initials.
  const skillsLayout = $('#skillsLayout');
  if (skillsLayout) {
    skillsLayout.innerHTML = (data.skills || []).map((group) => {
      const skillItems = (group.items || []).map((skill) => {
        const item = typeof skill === 'string'
          ? { name: skill }
          : skill;

        const skillName = item.name || 'Skill';
        const rawIconUrl = item.iconUrl || item.icon || '';
        const iconUrl = rawIconUrl ? safeHref(rawIconUrl) : '';
        const hasIconUrl = iconUrl && iconUrl !== '#';
        const initials = skillName.slice(0, 2);

        const iconHTML = hasIconUrl
          ? `
            <img
              class="skill-icon-image"
              src="${escapeHTML(iconUrl)}"
              alt="${escapeHTML(skillName)} icon"
              loading="lazy"
              onerror="this.hidden = true; this.nextElementSibling.hidden = false"
            >
            <span class="skill-icon-fallback" aria-hidden="true" hidden>
              ${escapeHTML(initials)}
            </span>
          `
          : `
            <span class="skill-icon-fallback" aria-hidden="true">
              ${escapeHTML(initials)}
            </span>
          `;

        return `
          <div class="skill-item" title="${escapeHTML(skillName)}">
            ${iconHTML}
            <span class="skill-name">${escapeHTML(skillName)}</span>
          </div>
        `;
      }).join('');

      return `
        <article class="skill-group">
          <h3>${escapeHTML(group.group || '')}</h3>
          <div class="skill-icons">${skillItems}</div>
        </article>
      `;
    }).join('');
  }

  // Contact section.
  const contact = data.contact || {};
  const contactTitle = $('#contactTitle');

  if (contactTitle) {
    const titleLines = contact.titleLines || ['Let’s connect.'];

    contactTitle.innerHTML = titleLines.map((line, index) => {
      const accentClass = index === 1 ? '' : 'accent-line';
      return `<span class="${accentClass}">${escapeHTML(line)}</span>`;
    }).join('<br>');
  }

  const contactCopy = $('#contactCopy');
  if (contactCopy) {
    contactCopy.textContent = contact.copy || '';
  }

  const contactActions = $('#contactActions');
  if (contactActions) {
    contactActions.innerHTML = (contact.links || []).map(renderButton).join('');

    if (site.email) {
      contactActions.insertAdjacentHTML(
        'afterbegin',
        renderButton({
          label: 'Email me ↗',
          href: `mailto:${site.email}`,
          style: 'primary'
        })
      );
    }
  }

  if (site.resumeUrl && heroActions) {
    heroActions.insertAdjacentHTML(
      'beforeend',
      renderButton({
        label: 'Résumé ↓',
        href: site.resumeUrl,
        style: 'secondary'
      })
    );
  }

  // Apply saved theme, then connect the theme toggle.
  let savedTheme = 'light';

  try {
    savedTheme = localStorage.getItem('portfolio-theme') || 'light';
  } catch (error) {
    // localStorage may be unavailable in some browser contexts.
    console.warn('Could not read saved theme:', error);
  }

  setTheme(savedTheme || site.theme || 'light');

  const themeToggle = $('#themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme, true);
    });
  }

  // Update the active floating navigation item as the user scrolls.
  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('#navigation a')];

  if ('IntersectionObserver' in window && sections.length && navLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          link.classList.toggle('active', link.hash === `#${entry.target.id}`);
        });
      });
    }, {
      rootMargin: '-35% 0px -55% 0px'
    });

    sections.forEach((section) => observer.observe(section));
  }

  const openSourceGrid = $('#openSourceGrid');
  if (openSourceGrid) {
    openSourceGrid.innerHTML = (data.openSource || []).map((item) => {
      const href = safeHref(item.url || '');
      if (href === '#') return '';
      const logo = String(item.logo || '').trim();
      const isLogoUrl = /^https?:\/\//i.test(logo);
      const fallbackInitials = String(item.initials || item.title || 'GH')
        .trim()
        .slice(0, 2)
        .toUpperCase();

      const logoMarkup = isLogoUrl
        ? `
          <img src="${escapeHTML(logo)}" alt="" loading="lazy"
            onerror="this.hidden=true; this.nextElementSibling.hidden=false">
          <span hidden>${escapeHTML(fallbackInitials)}</span>
        `
        : `<span>${escapeHTML(logo || 'GH')}</span>`;

      return `
        <a class="open-source-card" href="${escapeHTML(href)}"
          target="_blank" rel="noopener noreferrer">
          <span class="open-source-logo">${logoMarkup}</span>
          <h3>${escapeHTML(item.title || '')}</h3>
          <p>${escapeHTML(item.description || '')}</p>
          <span class="open-source-link">View contribution ↗</span>
        </a>
      `;
    }).join('');
  }

  
}

// Change the visual theme and optionally save the preference.
function setTheme(theme, save = false) {
  const activeTheme = theme === 'dark' ? 'dark' : 'light';

  document.body.dataset.theme = activeTheme;

  const themeIcon = $('#themeIcon');
  if (themeIcon) {
    themeIcon.textContent = activeTheme === 'dark' ? '☀' : '☾';
  }

  const themeToggle = $('#themeToggle');
  if (themeToggle) {
    themeToggle.setAttribute(
      'aria-label',
      activeTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
    );
  }

  const themeColor = $('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.content = activeTheme === 'dark' ? '#171815' : '#f4f2ed';
  }

  if (save) {
    try {
      localStorage.setItem('portfolio-theme', activeTheme);
    } catch (error) {
      console.warn('Could not save theme preference:', error);
    }
  }
}

// Start the page.
loadPortfolio();
