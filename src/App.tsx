import { useEffect, useState } from "react";

// ---------- Data ----------
const NAV = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  {
    title: "Salesforce",
    items: ["Apex", "Triggers", "SOQL", "SOSL", "JavaScript", "LWC", "Aura", "Visualforce", "SLDS", "Force.com Sites", "REST", "SOAP"],
  },
  {
    title: "Clouds",
    items: ["CPQ", "Service Cloud", "Sales Cloud", "ServiceMax", "FSL", "Experience Cloud"],
  },
  {
    title: "Android & IoT",
    items: ["Java", "MySQL", "Android", "REST", "SOAP", "Socket.IO", "C", "C++"],
  },
  {
    title: "Tooling & Misc",
    items: ["Azure DevOps", "Jira", "Git", "GitLab", "GitHub", "ANT (Salesforce)", "HTML", "CSS", "XML", "JSON"],
  },
  {
    title: "IDEs",
    items: ["VS Code", "IntelliJ", "Eclipse"],
  },
];

const EXPERIENCE = [
  {
    company: "Infotech",
    location: "Jaipur",
    role: "Team Lead",
    period: "August 2024 — Present",
    logo: "IT",
    color: "#0070D2",
    responsibilities: ["Develop POCs", "Code Review", "Solution designs", "Support Integration / Data teams"],
  },
  {
    company: "Accenture",
    location: "Jaipur",
    role: "Application Development Team Lead (CL9)",
    period: "July 2022 — August 2024",
    logo: "A",
    color: "#A100FF",
    responsibilities: ["Develop POCs", "LWC / Flows / CPQ development", "Code Review", "Solution designs"],
  },
  {
    company: "Capgemini",
    location: "Bengaluru",
    role: "Consultant — Salesforce & ServiceMax Solution Engineer",
    period: "February 2019 — July 2022",
    logo: "C",
    color: "#005FB2",
    subRoles: [
      { title: "Consultant (B2)", period: "Mar 2022 — Jul 2022" },
      { title: "Associate Consultant (B1)", period: "Jan 2021 — Mar 2022" },
      { title: "Senior Analyst (A5)", period: "Feb 2019 — Jan 2021" },
    ],
    responsibilities: ["Requirements gathering", "Code review", "Module designs", "ServiceMax Development"],
  },
  {
    company: "The Nine Hertz",
    location: "Jaipur",
    role: "Android Developer",
    period: "April 2017 — October 2018",
    logo: "9H",
    color: "#1B96FF",
    responsibilities: ["App navigation", "Bug fixing", "Custom views", "Writing API docs"],
  },
];

const PROJECTS = [
  {
    name: "Extra-Validation",
    type: "Salesforce Screen Flow",
    desc: "Utility to set up extra-validation instead of using Connect to Element. Configurable, reusable and deployable across orgs.",
    tag: "Flow",
  },
  {
    name: "Google-Feed",
    type: "Salesforce Lightning Component",
    desc: "RSS Feed reader inside Salesforce using a Lightning component paired with Apex callouts. Fully themeable with SLDS.",
    tag: "LWC",
  },
  {
    name: "RetroLet",
    type: "Android Library",
    desc: "Simplifies RetroFit 2.0 usage — GET, POST, File upload — with a clean, opinionated API surface.",
    tag: "Android",
  },
  {
    name: "CrashLet",
    type: "Android Library",
    desc: "Lightweight, unobtrusive crash handling library for Android. Captures, logs and reports crashes gracefully.",
    tag: "Android",
  },
];

const EDUCATION = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Rajasthan Institute of Engineering and Technology",
    score: "69%",
    period: "July 2013 — June 2016",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Govt. Polytechnic of Obulavaripalli",
    score: "76.76%",
    period: "July 2013 — June 2016",
  },
];

const MARQUEE = [
  "Salesforce", "Apex", "LWC", "CPQ", "Service Cloud", "Sales Cloud",
  "ServiceMax", "FSL", "Experience Cloud", "REST", "SOAP", "Android",
  "Java", "Azure DevOps", "Jira", "Git", "VS Code",
];

// ---------- Icon helpers (inline SVG) ----------
const Icon = {
  Logo: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M7 10l5 2.5 5-2.5M7 14l5 2.5 5-2.5" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  Arrow: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Mail: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.8"/>
    </svg>
  ),
  Phone: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M4 5c0 9 6 15 15 15l2-4-5-2-2 2c-3-1-5-3-6-6l2-2-2-5-4 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  ),
  Pin: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
    </svg>
  ),
  Github: (p: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 .5C5.73.5.67 5.56.67 11.83c0 5.02 3.24 9.27 7.74 10.77.57.1.78-.25.78-.55v-2c-3.15.69-3.81-1.35-3.81-1.35-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .95-.3 3.12 1.16.9-.25 1.87-.38 2.83-.38.96 0 1.93.13 2.83.38 2.17-1.46 3.12-1.16 3.12-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.64 5.3-5.16 5.58.41.35.77 1.05.77 2.12v3.14c0 .3.2.66.79.55 4.49-1.5 7.73-5.75 7.73-10.77C23.33 5.56 18.27.5 12 .5z"/>
    </svg>
  ),
  Linkedin: (p: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4V9z"/>
    </svg>
  ),
  Download: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M12 4v12m0 0l-5-5m5 5l5-5M4 20h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Sparkle: (p: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2l1.8 5.4L19 9l-5.2 1.6L12 16l-1.8-5.4L5 9l5.2-1.6L12 2zM19 14l.9 2.7L22 17l-2.1.7L19 20l-.9-2.3L16 17l2.1-.3L19 14zM5 14l.7 2.3L8 17l-2.3.7L5 20l-.7-2.3L2 17l2.3-.3L5 14z"/>
    </svg>
  ),
  Check: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Menu: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Close: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

// ---------- Small components ----------
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/80 border-b border-sf-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-sf-navy">
          <span className="w-9 h-9 rounded-xl bg-sf-blue text-white grid place-items-center shadow-lg shadow-sf-blue/20">
            <Icon.Logo className="w-5 h-5" />
          </span>
          <span className="hidden sm:inline">Deepak<span className="text-sf-blue">.</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-sf-muted hover:text-sf-navy transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-sf-navy text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-sf-blue transition-colors"
        >
          Let's talk <Icon.Arrow className="w-4 h-4" />
        </a>

        <button
          className="md:hidden w-10 h-10 grid place-items-center rounded-lg border border-sf-border text-sf-navy"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <Icon.Close className="w-5 h-5" /> : <Icon.Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-sf-border bg-white">
          <div className="px-5 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sf-text hover:text-sf-blue border-b border-sf-border/60"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-sf-blue text-white font-medium px-4 py-3 rounded-full"
            >
              Let's talk <Icon.Arrow className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-sf-blue/25 blob pointer-events-none" />
      <div className="absolute top-40 -right-24 w-[380px] h-[380px] rounded-full bg-sf-blue-light/20 blob pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white border border-sf-border rounded-full px-3 py-1.5 text-xs text-sf-muted shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sf-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sf-green"></span>
            </span>
            Available for new opportunities
          </div>

          <h1 className="font-display font-bold text-[44px] sm:text-6xl md:text-7xl leading-[1.02] tracking-tight mt-5 text-sf-navy">
            Senior <span className="gradient-text">Salesforce</span>
            <br />
            Developer.
          </h1>

          <p className="mt-6 text-lg text-sf-muted max-w-xl leading-relaxed">
            I'm <span className="text-sf-text font-semibold">Deepak Sharma</span> — designing and building scalable
            Salesforce solutions across CPQ, Service, Sales & Experience clouds for over <b>7+ years</b>.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-sf-navy text-white px-6 py-3.5 rounded-full font-medium hover:bg-sf-blue transition-colors shadow-lg shadow-sf-navy/10"
            >
              View my work <Icon.Arrow className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-sf-navy px-6 py-3.5 rounded-full font-medium border border-sf-border hover:border-sf-blue transition-colors"
            >
              <Icon.Download className="w-4 h-4" /> Download CV
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sf-muted">
            <a href="https://github.com/deepak-sharma" target="_blank" rel="noreferrer" className="hover:text-sf-blue transition-colors" aria-label="GitHub">
              <Icon.Github className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-sf-blue transition-colors" aria-label="LinkedIn">
              <Icon.Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:deepak.mylist@outlook.com" className="hover:text-sf-blue transition-colors" aria-label="Email">
              <Icon.Mail className="w-5 h-5" />
            </a>
            <div className="h-6 w-px bg-sf-border" />
            <div className="text-sm">
              <span className="font-semibold text-sf-navy">7+</span> years experience
            </div>
          </div>
        </div>

        {/* Profile card */}
        <div className="md:col-span-5 fade-in-up">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 bg-gradient-to-br from-sf-blue/30 via-sf-blue-light/20 to-transparent rounded-[2rem] blur-2xl" />
            <div className="relative bg-white rounded-[2rem] border border-sf-border p-5 shadow-2xl shadow-sf-navy/10">
              <div className="relative rounded-3xl overflow-hidden bg-sf-cloud aspect-[4/5]">
                <div className="absolute inset-0 bg-gradient-to-br from-sf-blue/10 via-transparent to-sf-navy/20" />
                <img
                  src="https://avatars.githubusercontent.com/u/31879436?w=800&auto=format&fit=crop&q=80"
                  alt="Deepak Sharma"
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'><rect width='400' height='500' fill='%23EAF5FE'/><circle cx='200' cy='190' r='80' fill='%230070D2' opacity='0.85'/><rect x='100' y='300' width='200' height='200' rx='100' fill='%230070D2' opacity='0.85'/></svg>";
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-medium text-sf-navy">
                  @deepak
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-2xl p-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sf-blue grid place-items-center text-white">
                    <Icon.Sparkle className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-sf-navy">Salesforce Expert</div>
                    <div className="text-xs text-sf-muted">Apex · LWC · CPQ · Flows</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sf-navy">Deepak Sharma</div>
                  <div className="text-xs text-sf-muted">Jaipur, India · UTC+5:30</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-sf-muted">Status</div>
                  <div className="text-xs font-semibold text-sf-green">Open to work</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-20 border-y border-sf-border bg-white overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-5">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="mx-8 text-sf-navy font-display text-lg md:text-xl font-semibold inline-flex items-center gap-8">
              {m}
              <Icon.Sparkle className="w-4 h-4 text-sf-blue" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionLabel index="01" title="About" />
        <div className="grid md:grid-cols-12 gap-10 mt-10">
          <div className="md:col-span-5">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-sf-navy leading-tight">
              Building <span className="gradient-text">robust</span> Salesforce platforms since 2017.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-sf-muted leading-relaxed text-[17px]">
            <p>
              I'm a Senior Salesforce Developer based in Jaipur with a passion for architecting clean, scalable and
              maintainable CRM solutions. Over the past 7+ years I've shipped production-grade features across
              <b className="text-sf-navy"> CPQ, Service Cloud, Sales Cloud, ServiceMax, FSL </b>
              and <b className="text-sf-navy">Experience Cloud</b>.
            </p>
            <p>
              I enjoy translating ambiguous business requirements into simple, well-tested Apex, LWC and Flow
              components. I care deeply about code quality, peer reviews, solution design and mentoring junior
              engineers on the team.
            </p>
            <p>
              Outside of Salesforce, I've built Android libraries (RetroLet, CrashLet) and tinkered with IoT
              firmware in C/C++. A generalist at heart — with Salesforce as my weapon of choice.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <Stat value="7+" label="Years Exp." />
              <Stat value="4" label="Companies" />
              <Stat value="50+" label="Deliveries" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-sf-border bg-white p-5">
      <div className="font-display text-3xl font-bold text-sf-blue">{value}</div>
      <div className="text-xs text-sf-muted mt-1">{label}</div>
    </div>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-mono text-sf-blue">{index}</span>
      <span className="h-px flex-1 bg-sf-border" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sf-muted">{title}</span>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="py-24 bg-sf-sky relative">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionLabel index="02" title="Selected Work" />
        <div className="mt-10 flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-sf-navy leading-tight max-w-2xl">
            A curated selection of recent <span className="gradient-text">projects & utilities</span>.
          </h2>
          <a href="#projects" className="text-sm font-medium text-sf-blue inline-flex items-center gap-2">
            View all projects <Icon.Arrow className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {PROJECTS.slice(0, 2).map((p, i) => (
            <ProjectCard key={p.name} project={p} big index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, big, index = 0 }: { project: any; big?: boolean; index?: number }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-sf-border bg-white card-hover ${
        big ? "p-8" : "p-6"
      }`}
    >
      <div
        className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity`}
        style={{ background: index % 2 === 0 ? "#0070D2" : "#1B96FF" }}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div className="inline-flex items-center gap-2 bg-sf-cloud text-sf-blue text-xs font-semibold px-3 py-1.5 rounded-full">
          {project.tag}
        </div>
        <div className="w-10 h-10 rounded-full border border-sf-border grid place-items-center text-sf-muted group-hover:bg-sf-blue group-hover:text-white group-hover:border-sf-blue transition-all">
          <Icon.Arrow className="w-4 h-4 -rotate-45" />
        </div>
      </div>

      <h3 className={`relative font-display font-bold text-sf-navy mt-6 ${big ? "text-3xl" : "text-2xl"}`}>
        {project.name}
      </h3>
      <p className="text-sm text-sf-blue font-medium mt-1">{project.type}</p>
      <p className="relative text-sf-muted mt-4 leading-relaxed">{project.desc}</p>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionLabel index="03" title="Experience" />
        <div className="mt-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-sf-navy leading-tight">
              Where I've <span className="gradient-text">shipped</span> impact.
            </h2>
            <p className="mt-5 text-sf-muted">
              Four companies. Multiple roles. One consistent thread — shipping reliable Salesforce & Android
              products at scale.
            </p>
          </div>

          <div className="md:col-span-8 relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-sf-border hidden md:block" />
            <div className="space-y-6">
              {EXPERIENCE.map((e, i) => (
                <div key={i} className="relative md:pl-14">
                  <div
                    className="hidden md:grid absolute left-0 top-6 w-8 h-8 rounded-full place-items-center text-white text-xs font-bold shadow-lg"
                    style={{ background: e.color }}
                  >
                    {e.logo}
                  </div>
                  <div className="rounded-3xl border border-sf-border bg-white p-6 card-hover">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display font-bold text-xl text-sf-navy">{e.company}</h3>
                          <span className="text-xs text-sf-muted">· {e.location}</span>
                        </div>
                        <p className="text-sf-blue font-medium mt-1">{e.role}</p>
                      </div>
                      <span className="text-xs font-mono bg-sf-cloud text-sf-navy rounded-full px-3 py-1.5">
                        {e.period}
                      </span>
                    </div>

                    {e.subRoles && (
                      <div className="mt-4 grid sm:grid-cols-3 gap-2">
                        {e.subRoles.map((s: any) => (
                          <div key={s.title} className="rounded-xl border border-sf-border bg-sf-cream p-3">
                            <div className="text-xs font-semibold text-sf-navy">{s.title}</div>
                            <div className="text-[11px] text-sf-muted mt-0.5">{s.period}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                      {e.responsibilities.map((r: string) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-sf-text">
                          <Icon.Check className="w-4 h-4 text-sf-blue mt-0.5 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 bg-sf-navy text-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-sf-blue/30 blob pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-sf-blue-light/20 blob pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-sf-blue-light">04</span>
          <span className="h-px flex-1 bg-white/15" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Skills</span>
        </div>

        <div className="mt-10 flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
            My technical <span className="text-sf-blue-light">arsenal</span>.
          </h2>
          <p className="text-white/60 max-w-md">
            A toolbox refined across Salesforce, Android and the DevOps stack. I pick the right tool for the job —
            not the trendiest one.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {SKILLS.map((s, i) => (
            <div
              key={s.title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-xl">{s.title}</h3>
                <span className="text-xs font-mono text-sf-blue-light">0{i + 1}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/10 text-white/90 border border-white/10"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionLabel index="05" title="Projects & Libraries" />
        <div className="mt-10 grid md:grid-cols-12 gap-10 items-end">
          <h2 className="md:col-span-7 font-display text-4xl md:text-5xl font-bold text-sf-navy leading-tight">
            Utilities & open-source <span className="gradient-text">libraries</span>.
          </h2>
          <p className="md:col-span-5 text-sf-muted">
            A mix of Salesforce utilities (for the day job) and Android libraries I've published to scratch my own
            itch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>

        {/* Education */}
        <div className="mt-24">
          <SectionLabel index="06" title="Education" />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {EDUCATION.map((e) => (
              <div key={e.degree} className="rounded-3xl border border-sf-border bg-white p-7 card-hover">
                <div className="w-12 h-12 rounded-2xl bg-sf-cloud text-sf-blue grid place-items-center">
                  <Icon.Sparkle className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-sf-navy mt-5">{e.degree}</h3>
                <p className="text-sf-blue text-sm font-medium mt-1">{e.institution}</p>
                <div className="mt-5 flex items-center justify-between text-sm text-sf-muted">
                  <span>{e.period}</span>
                  <span className="font-semibold text-sf-navy">{e.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-sf-sky">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="relative rounded-[2.5rem] bg-sf-navy text-white overflow-hidden p-8 md:p-16">
          <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-sf-blue/40 blob pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-sf-blue-light/20 blob pointer-events-none" />

          <div className="relative grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-sf-blue-light">07</span>
                <span className="h-px w-10 bg-white/20" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Contact</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] mt-6">
                Let's build something <span className="text-sf-blue-light">great</span> together.
              </h2>
              <p className="mt-6 text-white/70 max-w-xl">
                Have a Salesforce project, an integration puzzle, or a team that needs a senior hand? Drop me a
                line — I reply within 24 hours.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="mailto:deepak.mylist@outlook.com"
                  className="inline-flex items-center gap-2 bg-white text-sf-navy px-6 py-3.5 rounded-full font-semibold hover:bg-sf-blue-light hover:text-white transition-colors"
                >
                  <Icon.Mail className="w-4 h-4" /> deepak.mylist@outlook.com
                </a>
                <a
                  href="tel:+917062323012"
                  className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3.5 rounded-full font-medium hover:bg-white/20 transition-colors"
                >
                  <Icon.Phone className="w-4 h-4" /> +91 70623 23012
                </a>
              </div>
            </div>

            <div className="md:col-span-5 space-y-4">
              <InfoRow icon={<Icon.Pin className="w-5 h-5" />} title="Address">
                26, Pratap Nagar Colony, Nadi Ka Phatak, Benad Road, Jaipur (RJ) — 302039
              </InfoRow>
              <InfoRow icon={<Icon.Github className="w-5 h-5" />} title="GitHub">
                github.com/deepak-sharma
              </InfoRow>
              <InfoRow icon={<Icon.Linkedin className="w-5 h-5" />} title="LinkedIn">
                /in/deepak-sharma
              </InfoRow>
              <InfoRow icon={<Icon.Sparkle className="w-5 h-5" />} title="Languages">
                Hindi · English
              </InfoRow>
            </div>
          </div>
        </div>

        <footer className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-sf-muted">
          <div>© {new Date().getFullYear()} Deepak Sharma. Crafted with ☕ & Salesforce blue.</div>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-sf-blue">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </section>
  );
}

function InfoRow({ icon, title, children }: any) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-sf-blue/30 text-sf-blue-light grid place-items-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-white/50">{title}</div>
        <div className="text-white mt-1 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-sf-cream text-sf-text">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
