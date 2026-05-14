"use client";

import { useState, useEffect } from "react";

const projects = [
  { title: "InventoryOS", desc: "Real-time inventory management system with WebSocket sync and multi-warehouse support.", tags: ["Next.js", "PostgreSQL", "Redis"], year: "2024", link: "#" },
  { title: "Flowboard", desc: "Drag-and-drop kanban tool built for distributed teams. Offline-first with CRDT conflict resolution.", tags: ["React", "Yjs", "Node.js"], year: "2024", link: "#" },
  { title: "Helios CLI", desc: "Developer CLI for scaffolding, linting, and deploying monorepo projects with one command.", tags: ["TypeScript", "Ink", "Bun"], year: "2023", link: "#" },
  { title: "Paperweight", desc: "Minimalist markdown editor with local-first storage, bi-directional links, and instant search.", tags: ["Svelte", "SQLite", "WASM"], year: "2023", link: "#" },
];

const skills = [
  { group: "Languages", items: ["TypeScript", "Python", "Go", "Rust"] },
  { group: "Frontend", items: ["React", "Next.js", "Svelte", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "FastAPI", "PostgreSQL", "Redis"] },
  { group: "Infra", items: ["Docker", "AWS", "Vercel", "GitHub Actions"] },
];

const contacts = [
  { label: "Email", value: "araya@example.com", href: "mailto:araya@example.com" },
  { label: "GitHub", value: "github.com/araya-k", href: "https://github.com" },
  { label: "LinkedIn", value: "linkedin.com/in/araya-k", href: "https://linkedin.com" },
  { label: "Resume", value: "Download PDF", href: "#" },
];

const sections = ["about", "projects", "skills", "contact"];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [visible, setVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setVisible(true);
    // เช็ค preference ของเครื่องผู้ใช้
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <main className={`min-h-screen transition-colors duration-500 font-mono ${darkMode ? "bg-[#121210] text-[#f8f7f4]" : "bg-[#f8f7f4] text-[#1a1a18]"} overflow-x-hidden`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=DM+Sans:wght@300;400;500&display=swap');
        body { font-family: 'DM Mono', 'Courier New', monospace; }
        .font-sans-custom { font-family: 'DM Sans', sans-serif; }
        .fade-up { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
        
        /* Custom Colors based on Theme */
        .text-muted { color: ${darkMode ? "#888" : "#777"}; }
        .border-theme { border-color: ${darkMode ? "#2a2a26" : "#e2e0da"}; }
        .tag-bg { background-color: ${darkMode ? "#1e1e1c" : "#eeede8"}; }
      `}</style>

      <div className="max-w-5xl mx-auto px-8 py-16 grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-20">

        {/* Sidebar - Fixed/Sticky Position */}
        <aside className="hidden sm:block">
          <div className="fixed top-16 h-fit">
            {/* Avatar + name */}
            <div className="mb-12">
              <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-medium font-sans-custom mb-5 transition-colors duration-300 ${darkMode ? "bg-[#f8f7f4] text-[#121210]" : "bg-[#1a1a18] text-[#f8f7f4]"}`}>
                KP
              </div>
              <p className="font-sans-custom text-[15px] font-medium mb-0.5">Kan Phimook</p>
              <p className="text-xs text-muted">Full-stack developer</p>
            </div>

            {/* Nav */}
            <nav className="flex flex-col gap-3">
              {sections.map((s) => (
                <button
                  key={s}
                  onClick={() => scrollTo(s)}
                  className={`text-left text-[11px] uppercase tracking-widest pb-0.5 border-b bg-transparent transition-all duration-200 cursor-pointer w-fit
                    ${activeSection === s
                      ? (darkMode ? "text-white border-white" : "text-[#1a1a18] border-[#1a1a18]")
                      : "text-[#888] border-transparent hover:text-current"
                    }`}
                >
                  {s}
                </button>
              ))}
            </nav>

            {/* Theme Toggle & Status */}
            <div className="mt-12 flex flex-col gap-6">
              <button 
                onClick={toggleDarkMode}
                className="text-[11px] uppercase tracking-widest text-[#888] hover:text-current transition-colors text-left"
              >
                {darkMode ? "○ Light Mode" : "● Dark Mode"}
              </button>

              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                <span className="text-[11px] text-[#888] tracking-wide">Available for work</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div>
          {/* About */}
          <section id="about" className={`fade-up mb-24 ${visible ? "visible" : ""}`}>
            <p className="text-[11px] uppercase tracking-[0.1em] text-[#999] mb-6">About</p>
            <h1 className={`font-sans-custom text-[clamp(2rem,5vw,3.25rem)] font-light leading-[1.15] tracking-tight mb-8 ${darkMode ? "text-white" : "text-[#1a1a18]"}`}>
              Building things that <em className="italic font-light">work</em>,<br />
              simply and well.
            </h1>
            <p className={`font-sans-custom text-[15px] leading-[1.8] max-w-lg mb-5 ${darkMode ? "text-[#ccc]" : "text-[#555]"}`}>
              I'm a full-stack developer based in Bangkok with 5 years of experience
              building web products — from quick prototypes to production systems
              handling millions of requests.
            </p>
          </section>

          {/* Projects */}
          <section id="projects" className={`fade-up mb-24 ${visible ? "visible" : ""}`} style={{ transitionDelay: "0.1s" }}>
            <p className="text-[11px] uppercase tracking-[0.1em] text-[#999] mb-6">Projects</p>
            {projects.map((p, i) => (
              <a
                key={p.title}
                href={p.link}
                className={`grid grid-cols-[1fr_auto] gap-4 py-8 border-t border-theme no-underline text-inherit transition-opacity duration-200 hover:opacity-60 ${i === projects.length - 1 ? "border-b" : ""}`}
              >
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="font-sans-custom text-base font-medium">{p.title}</h3>
                    <span className="text-xs text-[#aaa]">{p.year}</span>
                  </div>
                  <p className="font-sans-custom text-[13px] text-muted leading-[1.65] max-w-sm mb-3">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 tag-bg rounded-sm text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-0.5 text-[#bbb] text-lg">→</div>
              </a>
            ))}
          </section>

          {/* Skills */}
          <section id="skills" className={`fade-up mb-24 ${visible ? "visible" : ""}`} style={{ transitionDelay: "0.2s" }}>
            <p className="text-[11px] uppercase tracking-[0.1em] text-[#999] mb-6">Skills</p>
            {skills.map((s, i) => (
              <div key={s.group} className={`flex gap-8 py-5 border-t border-theme items-baseline ${i === skills.length - 1 ? "border-b" : ""}`}>
                <span className="text-[11px] uppercase tracking-[0.08em] text-[#aaa] min-w-[80px]">{s.group}</span>
                <div className={`font-sans-custom text-sm flex flex-wrap gap-x-6 gap-y-1 ${darkMode ? "text-[#bbb]" : "text-[#444]"}`}>
                  {s.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </section>

          {/* Contact */}
          <section id="contact" className={`fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: "0.3s" }}>
            <p className="text-[11px] uppercase tracking-[0.1em] text-[#999] mb-6">Contact</p>
            {contacts.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                className={`flex items-center gap-3 py-5 border-t border-theme no-underline transition-opacity duration-200 hover:opacity-50 group ${i === contacts.length - 1 ? "border-b" : ""} ${darkMode ? "text-white" : "text-[#1a1a18]"}`}
              >
                <span className="text-[11px] uppercase tracking-[0.08em] text-[#aaa] min-w-[70px]">{c.label}</span>
                <span className={`font-sans-custom text-sm ${darkMode ? "text-[#bbb]" : "text-[#444]"}`}>{c.value}</span>
                <span className="ml-auto text-lg transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            ))}
          </section>

          {/* Footer */}
          <footer className="mt-20 pt-8 border-t border-theme flex justify-between items-center">
            <span className="text-[11px] text-[#bbb] tracking-wide">© 2026 Kan Phimook</span>
            <span className="text-[11px] text-[#bbb] tracking-wide">KPP, TH</span>
          </footer>
        </div>
      </div>
    </main>
  );
}