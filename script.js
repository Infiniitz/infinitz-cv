// Contact details — shown in both languages.
// Set "show: false" (or remove the entry) to hide a line.
// Each inner array is one line in the contact block.
const CONTACT = [
  [
    { icon: "phone", label: "+47 930 39 213", href: "tel:+4793039213" },
    { icon: "pin", label: "Norge", href: "" },
    { icon: "github", label: "github.com/Infiniitz", href: "https://github.com/Infiniitz" },
  ],
  [
    { icon: "mail", label: "harald@innlandetteknologi.no", href: "mailto:harald@innlandetteknologi.no" },
    { icon: "globe", label: "www.innlandetteknologi.no", href: "https://www.innlandetteknologi.no" },
  ],
  [
    { icon: "mail", label: "harald@blueeliteesports.com", href: "mailto:harald@blueeliteesports.com" },
    { icon: "globe", label: "www.blueeliteesports.com", href: "https://www.blueeliteesports.com" },
  ],
];

const ICONS = {
  mail:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.4l8 5 8-5V6H4zm16 2.3-7.5 4.7a1 1 0 0 1-1 0L4 8.3V18h16V8.3z"/></svg>',
  phone:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1l-2.22 2.2z"/></svg>',
  pin:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
  globe:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-3a15.7 15.7 0 0 0-1.3-3.6A8 8 0 0 1 18.9 8zM12 4c.8 1.1 1.5 2.5 1.9 4h-3.8c.4-1.5 1.1-2.9 1.9-4zM4.3 14a8 8 0 0 1 0-4h3.4a16.9 16.9 0 0 0 0 4H4.3zm.8 2h3a15.7 15.7 0 0 0 1.3 3.6A8 8 0 0 1 5.1 16zm3-8h-3a8 8 0 0 1 4.3-3.6A15.7 15.7 0 0 0 8.1 8zM12 20c-.8-1.1-1.5-2.5-1.9-4h3.8c-.4 1.5-1.1 2.9-1.9 4zm2.3-6H9.7a14.7 14.7 0 0 1 0-4h4.6a14.7 14.7 0 0 1 0 4zm.6 5.6c.6-1.1 1-2.3 1.3-3.6h3a8 8 0 0 1-4.3 3.6zM16.3 14a16.9 16.9 0 0 0 0-4h3.4a8 8 0 0 1 0 4h-3.4z"/></svg>',
  github:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>',
};

// Bilingual CV content — each value is defined ONCE.
// Use a plain string when it's identical in both languages, or { no, en }
// when the wording differs. Norwegian (no) is the default tab, English (en) second.
// Skills are defined separately in the shared SKILLS object below.
const CONTENT = {
  role: {
    no: "Backend-utvikler · Prosjektleder · Konsulent · Frivillig",
    en: "Backend Developer · Project Manager · Consultant · Volunteer",
  },
  profile: {
    title: { no: "Profil", en: "Profile" },
    body: {
      no: "Hardtarbeidende og motivert mann, med mange idéer og ambisjoner. Er en positiv person som liker godt å jobbe sammen med energiske og engasjerte mennesker, men som også er veldig fokusert og jobber godt selvstendig. I min hverdag jobber jeg med mange forskjellige oppgaver og utfordringer, og er kreativ i problemløsning, nøyaktig, strukturert og detaljeorientert i mitt arbeid. Er en person med klare verdier og drives av å støtte, oppmuntre og motivere andre i min hverdag.",
      en: "A hardworking and motivated person with plenty of ideas and ambitions. I am a positive individual who enjoys working alongside energetic and engaged people, while also being highly focused and effective working independently. In my everyday work I handle a wide range of tasks and challenges, and I am creative in problem-solving, precise, structured and detail-oriented. I am a person with clear values, driven by supporting, encouraging and motivating others.",
    },
  },
  education: {
    title: { no: "Utdanning", en: "Education" },
    0: {
      role: { no: "Backend-utvikling", en: "Backend Development" },
      date: { no: "August 2024 – Juni 2026", en: "August 2024 – June 2026" },
      org: "Noroff Fagskole",
      desc: {
        no: "Toårig utdanning som backend-utvikler med avanserte ferdigheter i JavaScript, skyteknologi og .NET — teknologiene bak dagens mest kraftfulle systemer. Med fordypning for Full-stack.",
        en: "A two-year program as a backend developer with advanced skills in JavaScript, cloud technology and .NET — the technologies behind today's most powerful systems. Specialising in Full-stack.",
      },
    },
  },
  experience: {
    title: { no: "Utvalgt erfaring", en: "Selected Experience" },
    0: {
      role: { no: "Daglig leder, Konsulent", en: "Managing Director, Consultant" },
      date: { no: "November 2023 – I dag", en: "November 2023 – Present" },
      org: "Innlandet Teknologi AS",
      desc: {
        no: "Ansvar for bedriftens daglige drift, IT-konsultasjoner, teknisk oppfølging av datasystemer for kunder og web/grafisk design for kunder.",
        en: "Responsible for the company's daily operations, IT consulting, technical support of customer systems, and web/graphic design for clients.",
      },
    },
    1: {
      role: {
        no: "Styreleder, Prosjektleder, CTO, Kulturskolelærer",
        en: "Chair of the Board, Project Manager, CTO, Instructor",
      },
      date: { no: "Oktober 2016 – I dag", en: "October 2016 – Present" },
      org: "Blue Elite Esports",
      desc: {
        no: "Ansvar for organisasjonens daglige drift, prosjekter, arrangementer, teknisk utvikling, organisasjonens nettside, grafisk arbeid og videoproduksjon. Samt én av to som jobber som kulturskolelærer i organisasjonen.",
        en: "Responsible for the organisation's daily operations, projects, events, technical development, the organisation's website, graphic work and video production. Also one of two working as a cultural-school instructor within the organisation.",
      },
    },
    2: {
      role: { no: "Selger, Lageransvarlig", en: "Sales, Warehouse Manager" },
      date: "April 2012 – November 2016",
      org: "Jysk AS",
      desc: {
        no: "Ansvar for salg, samt restrukturering og vedlikehold av lager.",
        en: "Responsible for sales, as well as restructuring and maintenance of the warehouse.",
      },
    },
  },
  otherExperience: {
    title: { no: "Annen erfaring", en: "Other Experience" },
    body: {
      no: "Lang erfaring som musiker, live-lydtekniker, studiotekniker og musikkprodusent.",
      en: "Extensive experience as a musician, live sound engineer, studio engineer and music producer.",
    },
  },
  references: {
    title: { no: "Referanser", en: "References" },
    body: { no: "Oppgis ved forespørsel.", en: "Available upon request." },
  },
  actions: {
    print: { no: "Last ned PDF", en: "Download PDF" },
  },
  footer: {
    updated: { no: "Sist oppdatert: Juni 2026", en: "Last updated: June 2026" },
  },
};

// Projects — defined once, shared across both languages.
const PROJECTS = {
  title: { no: "Prosjekter", en: "Projects" },
  items: [
    {
      name: "Wing Browser Meters",
      icon: "public/wbm-logo.svg",
      url: "https://github.com/Infiniitz/wing-browser-meters",
      desc: {
        no:
          "Live Behringer Wing nivåer i nettleseren — Node.js tjeneste med Socket.IO og Docker. Støtte for OBS Studio browser-dokker, PRE/POST-taps, scribble-navn og farger, horisontale og vertikale layouter.",
        en:
          "Live Behringer Wing meters in the browser — a Node.js service with Socket.IO and Docker. OBS Studio browser docks, PRE/POST taps, scribble names and colours, horizontal and vertical layouts.",
      },
      tags: ["Node.js", "Socket.IO", "Docker", "JavaScript", "OBS Studio", "Behringer Wing"],
    },
  ],
};

// Skills — defined ONCE and shared across both languages.
// "tier" sets the proficiency border color (1 neutral, 2 grey, 3 blue, 4 purple).
// Omitting "tier" defaults to 1. "label" is a string when identical in both
// languages, or { no, en } when the wording differs.
const SKILLS = {
  title: { no: "Ferdigheter", en: "Skills" },
  note: {
    no: "Generelt veldig god teknisk kompetanse, og er rask til å lære nye programmer eller løsninger til tekniske oppgaver.",
    en: "Strong overall technical competence, and quick to learn new software or solutions for technical tasks.",
  },
  legend: {
    title: { no: "Ferdighetsnivå", en: "Proficiency levels" },
    items: [
      { tier: 4, label: { no: "Ekspert", en: "Expert" } },
      { tier: 3, label: { no: "Meget god kunnskap", en: "Very good knowledge" } },
      { tier: 2, label: { no: "God kunnskap", en: "Good knowledge" } },
      { tier: 1, label: { no: "Noe kunnskap", en: "Some knowledge" } },
    ],
  },
  groups: [
    {
      title: { no: "Språk", en: "Languages" },
      items: [
        { tier: 3, label: { no: "Norsk — Morsmål", en: "Norwegian — Native" } },
        { tier: 3, label: { no: "Engelsk — Flytende skriftlig og muntlig", en: "English — Fluent, written and spoken" } },
        { tier: 1, label: { no: "Ukrainsk — Nybegynner", en: "Ukrainian — Beginner" } },
      ],
    },
    {
      title: { no: "Programvare", en: "Software" },
      items: [
        { tier: 4, label: "Photoshop" },
        { tier: 3, label: "Lightroom" },
        { tier: 3, label: "Premiere Pro" },
        { tier: 3, label: "Pro Tools" },
        { tier: 3, label: "Logic Pro" },
        { tier: 3, label: "Davinci Resolve" },
        { tier: 4, label: "OBS" },
        { tier: 4, label: "Qlab" },
        { tier: 2, label: "Illustrator" },
        { tier: 2, label: "vMix" },
        { tier: 3, label: "Discord" },
        { tier: 2, label: "NewBlue Titler Live" },
        { tier: 2,label: "SketchUp" },
        { label: "Resolume" },
        { label: "After Effects" },
        { tier: 4, label: "Blackmagic ATEM" },
      ],
    },
    {
      title: { no: "Nettbasert", en: "Web-based" },
      items: [
        { tier: 3, label: "WordPress" },
        { tier: 4, label: "Wix Studio" },
        { tier: 2, label: "Figma" },
        { tier: 3, label: "Facebook Business Suite" },
        { tier: 3, label: "Google Workspace" },
        { tier: 4, label: "Notion" },
        { tier: 2, label: "Slack" },
        { label: "SquareSpace" },
        { tier: 2,label: "Shopify" },
        { tier: 3, label: "Jira" },
      ],
    },
    {
      title: { no: "Systemer og andre programmer", en: "Systems & Other Software" },
      items: [
        { tier: 4, label: "Windows" },
        { tier: 3, label: "Windows Server" },
        { tier: 4, label: "macOS" },
        { tier: 4, label: "Linux (CLI)" },
        { tier: 4, label: "Proxmox" },
        { tier: 4, label: "Docker" },
        { tier: 3, label: "Ubiquiti" },
        { tier: 2, label: "VMware" },
        { tier: 4, label: "Companion" },
        { tier: 3, label: "HomeAssistant" },
        { tier: 3, label: "Microsoft Azure" },
        { tier: 2, label: "Amazon AWS" },
        { label: "Kubernetes" },
      ],
    },
    {
      title: { no: "Kode og andre plattformer", en: "Code & Other Platforms" },
      items: [
        { tier: 4, label: "JavaScript" },
        { tier: 3, label: "TypeScript" },
        { tier: 4, label: "CSS" },
        { tier: 4, label: "HTML" },
        { tier: 3, label: "MySQL" },
        { tier: 4, label: "EJS" },
        { tier: 4, label: "REST API" },
        { tier: 3, label: "Node" },
        { tier: 3,label: "Git" },
        { tier: 2, label: "C#" },
        { tier: 2, label: "React" },
        { label: "Vite" },
        { label: { no: "Kotlin (lærer)", en: "Kotlin (learning)" } },
      ],
    },
    {
      title: { no: "AI", en: "AI" },
      items: [
        { tier: 3, label: "OpenClaw" },
        { tier: 3, label: "Ollama" },
        { tier: 4, label: "Cursor" },
        { tier: 2, label: "MCP" },
        { tier: 2, label: "Hermes" },
      ],
    },
    {
      title: { no: "Sertifikater", en: "Certificates" },
      items: [
        { tier: 3, label: { no: "Førerkort Klasse B", en: "Driver's Licence Class B" } },
      ],
    },
  ],
};

function getValue(dict, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), dict);
}

function localize(value, lang) {
  return value && typeof value === "object" ? value[lang] : value;
}

function renderContact() {
  const container = document.querySelector("[data-contact]");
  if (!container) return;
  container.innerHTML = "";

  CONTACT.forEach((line) => {
    const row = document.createElement("div");
    row.className = "contact__row";

    line
      .filter((c) => c.show !== false)
      .forEach((c) => {
        const icon = ICONS[c.icon] || "";
        const inner = `<span class="contact__icon">${icon}</span><span>${c.label}</span>`;
        let el;
        if (c.href) {
          el = document.createElement("a");
          el.className = "contact__item";
          el.href = c.href;
          if (/^https?:/.test(c.href)) {
            el.target = "_blank";
            el.rel = "noopener";
          }
        } else {
          el = document.createElement("span");
          el.className = "contact__item contact__item--static";
        }
        el.innerHTML = inner;
        row.appendChild(el);
      });

    container.appendChild(row);
  });
}

function renderSkills(lang) {
  const root = document.querySelector("[data-skills]");
  if (!root) return;

  const titleEl = document.querySelector("[data-skills-title]");
  if (titleEl) titleEl.textContent = localize(SKILLS.title, lang);

  const noteEl = document.querySelector("[data-skills-note]");
  if (noteEl) noteEl.textContent = localize(SKILLS.note, lang);

  const legendEl = document.querySelector("[data-skills-legend]");
  if (legendEl && SKILLS.legend) {
    legendEl.innerHTML = "";
    if (SKILLS.legend.title) {
      const legendTitle = document.createElement("span");
      legendTitle.className = "tier-legend__title";
      legendTitle.textContent = localize(SKILLS.legend.title, lang);
      legendEl.appendChild(legendTitle);
    }
    SKILLS.legend.items.forEach((item) => {
      const row = document.createElement("span");
      row.className = "tier-legend__item";
      const swatch = document.createElement("span");
      swatch.className = "tier-legend__swatch chip chip--t" + item.tier;
      swatch.setAttribute("aria-hidden", "true");
      const label = document.createElement("span");
      label.textContent = localize(item.label, lang);
      row.append(swatch, label);
      legendEl.appendChild(row);
    });
  }

  root.innerHTML = "";
  SKILLS.groups.forEach((group) => {
    const groupEl = document.createElement("div");
    groupEl.className = "skill-group";

    const heading = document.createElement("h3");
    heading.className = "skill-group__title";
    heading.textContent = localize(group.title, lang);
    groupEl.appendChild(heading);

    const chips = document.createElement("div");
    chips.className = "chips";
    const tierOf = (item) => ([1, 2, 3, 4].includes(item.tier) ? item.tier : 1);
    const sortedItems = group.items
      .map((item, index) => ({ item, index }))
      .sort((a, b) => tierOf(b.item) - tierOf(a.item) || a.index - b.index)
      .map((entry) => entry.item);
    sortedItems.forEach((item) => {
      const chip = document.createElement("span");
      const tier = [1, 2, 3, 4].includes(item.tier) ? item.tier : 1;
      chip.className = "chip chip--t" + tier;
      chip.textContent = localize(item.label, lang);
      chips.appendChild(chip);
    });
    groupEl.appendChild(chips);

    root.appendChild(groupEl);
  });
}

function renderProjects(lang) {
  const root = document.querySelector("[data-projects]");
  if (!root) return;

  const titleEl = document.querySelector("[data-projects-title]");
  if (titleEl) titleEl.textContent = localize(PROJECTS.title, lang);

  root.innerHTML = "";
  PROJECTS.items.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project";

    const body = document.createElement("div");
    body.className = "project__body";

    const head = document.createElement("div");
    head.className = "project__head";

    const icon = document.createElement("img");
    icon.className = "project__icon";
    icon.src = project.icon;
    icon.alt = "";
    icon.width = 28;
    icon.height = 28;
    icon.loading = "lazy";
    head.appendChild(icon);

    const link = document.createElement("a");
    link.className = "project__name";
    link.href = project.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = project.name;
    head.appendChild(link);

    body.appendChild(head);

    const desc = document.createElement("p");
    desc.className = "project__desc";
    desc.textContent = localize(project.desc, lang);
    body.appendChild(desc);

    if (project.tags && project.tags.length) {
      const tags = document.createElement("div");
      tags.className = "chips project__tags";
      project.tags.forEach((tag) => {
        const chip = document.createElement("span");
        chip.className = "chip";
        chip.textContent = tag;
        tags.appendChild(chip);
      });
      body.appendChild(tags);
    }

    card.append(body);
    root.appendChild(card);
  });
}

function render(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = localize(getValue(CONTENT, el.getAttribute("data-i18n")), lang);
    if (typeof text === "string") el.textContent = text;
  });

  renderSkills(lang);
  renderProjects(lang);

  document.documentElement.lang = lang;

  document.querySelectorAll(".tab").forEach((tab) => {
    const active = tab.dataset.lang === lang;
    tab.classList.toggle("tab--active", active);
    tab.setAttribute("aria-selected", String(active));
  });

  const url = new URL(window.location.href);
  if (lang === "no") url.searchParams.delete("lang");
  else url.searchParams.set("lang", lang);
  history.replaceState(null, "", url);
}

renderContact();

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => render(tab.dataset.lang));
});

const urlLang = new URLSearchParams(window.location.search).get("lang");
render(urlLang === "en" ? "en" : "no");
