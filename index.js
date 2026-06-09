/* ═══════════════════════════════════════════════════════════
   CENTRAL CONTENT MANIFEST  —  DECOUPLED DATA LAYER
   All UI components ingest from these independent variables.
   No content strings are permitted in HTML templates.
   ═══════════════════════════════════════════════════════════ */

const SiteMetadata = {
  name: "Priyanshu Mohanty",
  navLinks: [
    { label: "Work", href: "#hero" },
    { label: "Cases", href: "#case-studies" },
    { label: "Path", href: "#timeline" },
    { label: "Insights", href: "#insights-matrix" }
  ],
  footerText: "Designed with precision. Built with intent."
};

const HeroContent = {
  headline:
    "I build scalable data foundations that power high-impact user products.",
  subheadline: "Data engineer by trade, product manager by design.",
  targetNotice:
    "Focusing on the transition from technical complexity to core product strategy. Targeting APM / PM-Data & AI roles.",
  ctas: [
    { label: "View Case Studies", href: "#case-studies", variant: "primary" },
    { label: "Read Timeline", href: "#timeline", variant: "ghost" }
  ]
};

const CaseStudiesData = [
  {
    id: "case-study-1",
    title: "OneDeere Engineering Hub",
    badge: "Leadership & PM Showcase",
    opportunity:
      "Identified massive workflow latency and decision ambiguity caused by key engineering metrics being critically scattered across disparate siloed dashboards.",
    strategy:
      "Formulated and led user discovery. Personally interviewed 5 Engineering Managers/PMs and coordinated a cross-functional team of 7 to complete ~25 stakeholder discovery interviews with L3/L4 organizational leaders.",
    execution:
      "Authored comprehensive functional frameworks. Managed agile development sprint structures as a pseudo-Scrum Master, coordinating closely with UX designers, data infrastructure squads, and AI research teams over a focused 5-month lifecycle.",
    impact:
      "Vibe-coded a functional MVP using licensed GitHub Copilot, Copilot Studio, and Databricks Genie. Showcased to an audience of 50-60 senior organizational leaders, successfully securing immediate formal validation and active corporate project funding."
  },
  {
    id: "case-study-2",
    title: "Nebula Tools Hub — File Search",
    badge: "Growth & Scale Showcase",
    opportunity:
      "Identified critical developer friction where multiple platform teams relied on sluggish, inefficient external tools to navigate and locate raw multi-modal robotic sensor log files across cloud infrastructure.",
    strategy:
      "Proposed and designed the integration of a native, low-latency multi-modal file search utility directly inside the shared internal web application shell to establish early MVP framework milestones.",
    execution:
      "Spearheaded platform technical development. Rolled out v1.0 directly to 2 project squads (~20-30 active users). Gathered feedback via office hours and surveys. Engineered a migration pipeline shifting indexes to a high-performance Postgres RDS framework.",
    impact:
      "Successfully evolved the codebase through 4 major iterative lifecycle rollouts to achieve a scale of over 125+ regular internal users, eliminating third-party utility reliance and unlocking directory-tree path visualizations."
  }
];

const TimelineData = [
  {
    dateRange: "July 2024 – Present",
    company: "John Deere",
    roleTitle:
      "Senior Engineer I (Automation & Autonomy Robotics Data Engineering)",
    headlineMetric:
      "Optimized log processing workflows by 80% and secured the Eureka Innovation Award.",
    impactBulletPoints: [
      "Engineered robust Databricks log parsing pipelines, cutting operational latency from ~3 hours down to 15 minutes.",
      "Decreased cloud infrastructure footprint overhead costs by $60k per year.",
      "Deployed specialized Tableau product analytics dashboards to empower cross-functional business stakeholders to evaluate strategies.",
      "Received the departmental Eureka Innovation Award for outstanding contributions to corporate asset optimization."
    ]
  },
  {
    dateRange: "July 2023 – June 2024",
    company: "John Deere",
    roleTitle:
      "Graduate Engineer Trainee (Automation & Autonomy Robotics Software)",
    headlineMetric:
      "Fielded simulation features for autonomous dump trucks, saving $550k in lifecycle testing costs.",
    impactBulletPoints: [
      "Designed and fielded critical simulation features for a customer-facing live product demonstration of an autonomous Articulated Dump Truck (ADT).",
      "Reduced operational project overhead by saving up to $150k in system execution costs and $400k in physical machine field trial testing requirements annually.",
      "Partnered across engineering lines to build early proof-of-concept components utilizing Visual SLAM algorithms and synthetic Generative AI workflows."
    ]
  }
];

const MediaMatrixData = [
  {
    title: "An Ensemble Transformer Model For Speech Emotion Recognition",
    category: "technical",
    source: "IEEE",
    snippet:
      "Deep neural architecture research presenting a speech-to-emotion transformer layer optimized for human affective computing.",
    redirectUrl: "https://ieeexplore.ieee.org/"
  },
  {
    title: "The English Lit Masters Selection",
    category: "creative",
    source: "StoryMirror",
    snippet:
      "Award-winning creative narrative engineering exploring complex human dynamics, achieving 2nd prize in a nationwide writing challenge.",
    redirectUrl: "https://storymirror.com/"
  }
];

/* ═══════════════════════════════════════════════════════════
   THEME STATE MACHINE
   isDarkMode: boolean — single source of truth
   Follows modern-web-guidance:
     • Updates <meta name="color-scheme">
     • Persists to localStorage
     • Listens for system preference changes
   ═══════════════════════════════════════════════════════════ */

const ThemeEngine = (() => {
  let isDarkMode = false;

  const metaTag = () => document.querySelector('meta[name="color-scheme"]');
  const root = () => document.documentElement;

  function apply() {
    const scheme = isDarkMode ? "dark" : "light";
    root().setAttribute("data-theme", scheme);
    metaTag().content = scheme;
    root().style.colorScheme = scheme;
  }

  function toggle() {
    isDarkMode = !isDarkMode;
    localStorage.setItem("color-scheme", isDarkMode ? "dark" : "light");
    apply();
  }

  function init() {
    const stored = localStorage.getItem("color-scheme");
    if (stored) {
      isDarkMode = stored === "dark";
    } else {
      isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    apply();

    // React to OS-level changes when no user override is stored
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem("color-scheme")) {
          isDarkMode = e.matches;
          apply();
        }
      });
  }

  return { init, toggle, get isDark() { return isDarkMode; } };
})();

/* ═══════════════════════════════════════════════════════════
   SVG ICON LIBRARY  —  inline SVGs for zero network requests
   ═══════════════════════════════════════════════════════════ */

const Icons = {
  sun: `<svg class="theme-toggle__sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,

  moon: `<svg class="theme-toggle__moon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,

  arrowRight: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,

  research: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,

  pen: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`
};

/* Category → icon map for insights */
const categoryIcons = {
  technical: Icons.research,
  creative: Icons.pen
};

/* ═══════════════════════════════════════════════════════════
   RENDER ENGINE  —  Pure functions that build DOM from data
   ═══════════════════════════════════════════════════════════ */

function renderNavDock(container) {
  const nav = document.createElement("nav");
  nav.className = "nav-dock";
  nav.setAttribute("aria-label", "Primary navigation");

  const links = SiteMetadata.navLinks
    .map(
      (l, i) =>
        `<a href="${l.href}" class="nav-dock__link${i === 0 ? " nav-dock__link--active" : ""}" id="nav-${l.label.toLowerCase()}">${l.label}</a>`
    )
    .join("");

  nav.innerHTML = `
    ${links}
    <span class="nav-dock__sep" aria-hidden="true"></span>
    <button class="theme-toggle" id="theme-toggle" type="button"
            aria-label="Toggle colour theme">
      ${Icons.sun}${Icons.moon}
    </button>
  `;

  container.prepend(nav);

  // Wire toggle
  nav.querySelector("#theme-toggle").addEventListener("click", () => {
    ThemeEngine.toggle();
  });

  // Active link tracking on scroll
  const sections = SiteMetadata.navLinks.map((l) =>
    document.querySelector(l.href)
  );
  const navLinks = nav.querySelectorAll(".nav-dock__link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((a) => a.classList.remove("nav-dock__link--active"));
          const activeLink = nav.querySelector(
            `a[href="#${entry.target.id}"]`
          );
          if (activeLink) activeLink.classList.add("nav-dock__link--active");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((s) => { if (s) observer.observe(s); });
}

function renderHero(container) {
  const d = HeroContent;
  container.innerHTML = `
    <div class="viewport-section">
      <p class="hero__eyebrow">${d.subheadline}</p>
      <h1 class="hero__title">${d.headline}</h1>
      <p class="hero__subtitle">${d.targetNotice}</p>
      <div class="hero__cta-group">
        ${d.ctas
          .map(
            (c) =>
              `<a href="${c.href}" class="btn btn--${c.variant}" id="cta-${c.variant}">${c.label}${c.variant === "primary" ? " " + Icons.arrowRight : ""}</a>`
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderCaseStudies(container) {
  const d = CaseStudiesData;
  const tabKeys = ["opportunity", "strategy", "execution", "impact"];
  const tabLabels = ["Opportunity", "Strategy", "Execution", "Impact"];

  container.innerHTML = `
    <div class="viewport-section">
      <header class="section-header">
        <p class="section-header__label">Case Studies</p>
        <h2 class="section-header__title">Product-Led Impact</h2>
        <p class="section-header__desc">End-to-end case narratives — from problem discovery through strategic execution to measurable outcome.</p>
      </header>
      <div class="case-grid" id="case-grid">
        ${d
          .map(
            (c) => `
          <article class="case-card" id="${c.id}">
            <span class="case-card__tag">${c.badge}</span>
            <h3 class="case-card__title">${c.title}</h3>
            <nav class="case-tabs" role="tablist" aria-label="Case study phases for ${c.title}">
              ${tabLabels
                .map(
                  (label, i) =>
                    `<button class="case-tabs__btn${i === 0 ? " case-tabs__btn--active" : ""}" role="tab" type="button" aria-selected="${i === 0}" data-tab="${tabKeys[i]}" id="tab-${c.id}-${tabKeys[i]}" aria-controls="panel-${c.id}">${label}</button>`
                )
                .join("")}
              <span class="case-tabs__indicator" aria-hidden="true"></span>
            </nav>
            <div class="case-card__panel" id="panel-${c.id}" role="tabpanel">
              <p class="case-card__panel-text">${c[tabKeys[0]]}</p>
            </div>
          </article>
        `
          )
          .join("")}
      </div>
    </div>
  `;

  // Wire up tab interactions
  container.querySelectorAll(".case-card").forEach((card) => {
    const tabs = card.querySelectorAll(".case-tabs__btn");
    const indicator = card.querySelector(".case-tabs__indicator");
    const panelText = card.querySelector(".case-card__panel-text");
    const caseId = card.id;
    const caseData = d.find((c) => c.id === caseId);

    // Position indicator on the active tab
    function moveIndicator(btn) {
      indicator.style.left = btn.offsetLeft + "px";
      indicator.style.width = btn.offsetWidth + "px";
    }

    // Init indicator position after layout
    requestAnimationFrame(() => moveIndicator(tabs[0]));

    tabs.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Update active states
        tabs.forEach((t) => {
          t.classList.remove("case-tabs__btn--active");
          t.setAttribute("aria-selected", "false");
        });
        btn.classList.add("case-tabs__btn--active");
        btn.setAttribute("aria-selected", "true");

        // Slide indicator
        moveIndicator(btn);

        // Swap content with fade
        const key = btn.dataset.tab;
        panelText.style.animation = "none";
        // Force reflow to restart animation
        panelText.offsetHeight;
        panelText.textContent = caseData[key];
        panelText.style.animation = "tabFadeIn 0.2s ease both";
      });
    });
  });
}

function renderTimeline(container) {
  const d = TimelineData;
  container.innerHTML = `
    <div class="viewport-section">
      <header class="section-header">
        <p class="section-header__label">Career Path</p>
        <h2 class="section-header__title">Professional Timeline</h2>
        <p class="section-header__desc">Key milestones in engineering, leadership, and product impact.</p>
      </header>
      <div class="timeline-list">
        ${d
          .map(
            (t, i) => `
          <div class="timeline-item">
            <span class="timeline-item__period">${t.dateRange}</span>
            <h3 class="timeline-item__role">${t.roleTitle}</h3>
            <p class="timeline-item__org">${t.company}</p>
            <p class="timeline-item__headline">${t.headlineMetric}</p>
            <button class="timeline-item__toggle" type="button"
                    aria-expanded="false"
                    aria-controls="bullets-${i}"
                    id="toggle-${i}">
              <span class="timeline-item__toggle-icon" aria-hidden="true">+</span>
              View Impact Strategy
            </button>
            <div class="timeline-item__bullets" id="bullets-${i}">
              <div class="timeline-item__bullets-inner">
                ${t.impactBulletPoints.map((b) => `<li>${b}</li>`).join("")}
              </div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;

  // Wire expand/collapse toggles
  container.querySelectorAll(".timeline-item__toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("aria-controls");
      const drawer = document.getElementById(targetId);
      const isOpen = btn.classList.toggle("timeline-item__toggle--open");

      btn.setAttribute("aria-expanded", isOpen);
      drawer.classList.toggle("timeline-item__bullets--open", isOpen);
    });
  });
}

function renderInsightsMatrix(container) {
  const d = MediaMatrixData;

  // Derive unique categories from data
  const categories = [...new Set(d.map((m) => m.category))];
  const filterLabels = [
    { key: "all", label: "All" },
    ...categories.map((c) => ({
      key: c,
      label: c.charAt(0).toUpperCase() + c.slice(1)
    }))
  ];

  container.innerHTML = `
    <div class="viewport-section">
      <header class="section-header">
        <p class="section-header__label">Published Work</p>
        <h2 class="section-header__title">Insights Matrix</h2>
        <p class="section-header__desc">Research publications and creative writing across technical and narrative domains.</p>
      </header>
      <div class="insights-filters" role="toolbar" aria-label="Filter by category">
        ${filterLabels
          .map(
            (f, i) =>
              `<button class="insights-filters__btn${i === 0 ? " insights-filters__btn--active" : ""}" type="button" data-filter="${f.key}" id="filter-${f.key}">${f.label}</button>`
          )
          .join("")}
      </div>
      <div class="insights-grid" id="insights-grid">
        ${d
          .map(
            (m, i) => `
          <div class="insight-card insight-card--visible" data-category="${m.category}"
               role="button" tabindex="0" id="insight-${m.category}-${i}"
               aria-label="${m.title} — ${m.source}">
            <div class="insight-card__icon" aria-hidden="true">
              ${categoryIcons[m.category] || Icons.research}
            </div>
            <h3 class="insight-card__title">${m.title}</h3>
            <p class="insight-card__body">${m.snippet}</p>
            <span class="insight-card__date">${m.source}</span>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;

  // Wire filter buttons
  const filterBtns = container.querySelectorAll(".insights-filters__btn");
  const cards = container.querySelectorAll(".insight-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active filter pill
      filterBtns.forEach((b) => b.classList.remove("insights-filters__btn--active"));
      btn.classList.add("insights-filters__btn--active");

      const filter = btn.dataset.filter;

      cards.forEach((card) => {
        const match = filter === "all" || card.dataset.category === filter;
        if (match) {
          card.classList.remove("insight-card--hidden");
          card.classList.add("insight-card--visible");
        } else {
          card.classList.remove("insight-card--visible");
          card.classList.add("insight-card--hidden");
        }
      });
    });
  });

  // Wire card clicks → open in new tab
  cards.forEach((card, i) => {
    const handler = () => window.open(d[i].redirectUrl, "_blank");
    card.addEventListener("click", handler);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handler();
      }
    });
  });
}

function renderFooter(container) {
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `<p>${SiteMetadata.footerText} &copy; ${new Date().getFullYear()} ${SiteMetadata.name}</p>`;
  container.appendChild(footer);
}

/* ═══════════════════════════════════════════════════════════
   SCROLL REVEAL  —  lightweight IntersectionObserver fade-in
   ═══════════════════════════════════════════════════════════ */

function initScrollReveal() {
  const targets = document.querySelectorAll(
    ".case-card, .timeline-item, .insight-card, .section-header"
  );

  // Apply initial hidden state
  targets.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition =
      "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
  );

  // Stagger children within grids
  document.querySelectorAll(".case-grid, .insights-grid, .timeline-list").forEach((grid) => {
    Array.from(grid.children).forEach((child, i) => {
      child.style.transitionDelay = `${i * 100}ms`;
    });
  });

  targets.forEach((el) => observer.observe(el));
}

/* ═══════════════════════════════════════════════════════════
   BOOTSTRAP
   ═══════════════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  ThemeEngine.init();

  const app = document.getElementById("app");

  renderNavDock(app);
  renderHero(document.getElementById("hero"));
  renderCaseStudies(document.getElementById("case-studies"));
  renderTimeline(document.getElementById("timeline"));
  renderInsightsMatrix(document.getElementById("insights-matrix"));
  renderFooter(app);

  // Reveal after a micro-tick so initial styles are applied
  requestAnimationFrame(() => {
    initScrollReveal();
  });
});
