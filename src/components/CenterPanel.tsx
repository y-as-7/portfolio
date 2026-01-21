import { createSignal, createEffect, type Component } from "solid-js";
import "./CenterPanel.css";

interface CenterPanelProps {
  view?: string;
  setView?: (view: string) => void;
}

const CenterPanel: Component<CenterPanelProps> = (props) => {
  const [isPlaying, setIsPlaying] = createSignal(false);

  const isContact = () => props.view === "contact";
  const isProjects = () => props.view === "projects";
  const isAbout = () => props.view === "about";

  const [activeModule, setActiveModule] = createSignal<string | null>(null);

  createEffect(() => {
    if (props.view === "about") {
      setIsPlaying(false);
      setActiveModule(null);
    }
  });

  const getModuleData = (mod: string) => {
    switch (mod) {
      case "MISSIONS":
        return [
          {
            title: "MANAGER & LEAD",
            subtitle: "REYADA CAPITAL",
            desc: "DIRECT MANAGER & TEAM LEAD",
          },
          { title: "TEAM LEAD", subtitle: "TBS", desc: "SOFTWARE TEAM LEAD" },
          {
            title: "BACKEND DEV",
            subtitle: "RIZME SOFTWARE",
            desc: "BACKEND DEVELOPER",
          },
          {
            title: "FREELANCE",
            subtitle: "VARIOUS",
            desc: "WEB & DESKTOP SOLUTIONS",
          },
        ];
      case "SERVICES":
        return [
          {
            title: "WEB DEVELOPMENT",
            subtitle: "FULL STACK",
            desc: "MODERN APPS & SYSTEMS",
          },
          {
            title: "UI / UX DESIGN",
            subtitle: "INTERACTIVE",
            desc: "RETRO & MODERN AESTHETICS",
          },
          {
            title: "OPTIMIZATION",
            subtitle: "PERFORMANCE",
            desc: "SEO & SPEED TUNING",
          },
          {
            title: "TECH CONSULTING",
            subtitle: "BUSINESS",
            desc: "REQ. ANALYSIS & CLIENT COMMS",
          },
        ];
      case "TROPHIES":
        return [
          {
            title: "HACKATHON 2024",
            subtitle: "1ST PLACE",
            desc: "BEST INNOVATION AWARD",
          },
          {
            title: "CERTIFIED",
            subtitle: "CLOUD ARCHITECT",
            desc: "AWS PROFESSIONAL",
          },
          {
            title: "OPEN SOURCE",
            subtitle: "CONTRIBUTOR",
            desc: "TOP 500 GH RANK",
          },
        ];
      default:
        return [];
    }
  };

  return (
    <div class="center-panel">
      <div class="game-screen-bar">
        <span>
          {isContact()
            ? "CONTACT_ME.EXE"
            : isProjects()
              ? "MISSIONS.BAT"
              : "SKILLS.NES"}
        </span>
        <span>
          {isContact()
            ? "STATUS: ONLINE"
            : isProjects()
              ? "SELECT TARGET"
              : "HIGH SCORE: +99999"}
        </span>
      </div>
      <div class="game-viewport">
        {/* Sky and Ground layers removed for pure black data terminal look */}

        {isContact() ? (
          <div class="start-screen-overlay">
            <h1 class="game-title">CONTACT ME</h1>
            <form class="retro-form" onSubmit={(e) => e.preventDefault()}>
              <div class="form-group">
                <label for="contact-name">&gt; ENTER NAME:</label>
                <input id="contact-name" type="text" placeholder="_" />
              </div>
              <div class="form-group">
                <label for="contact-email">&gt; ENTER EMAIL:</label>
                <input id="contact-email" type="email" placeholder="_" />
              </div>
              <div class="form-group">
                <label for="contact-message">&gt; MESSAGE:</label>
                <textarea
                  id="contact-message"
                  rows="4"
                  placeholder="_"
                ></textarea>
              </div>
              <button type="submit" class="game-btn blinking">
                SEND MESSAGE
              </button>
            </form>
          </div>
        ) : isAbout() ? (
          <div class="start-screen-overlay about-overlay">
            <h1 class="game-title">PLAYER PROFILE</h1>
            <div class="about-container">
              <div class="about-section">
                <h3>&gt; IDENTITY:</h3>
                <p>YOUSSEF ASKAR // SOFTWARE ENGINEER</p>
              </div>
              <div class="about-section">
                <h3>&gt; SKILLS:</h3>
                <p>
                  WEB (FRONT/BACK) . DEVOPS . DESKTOP APPS . ELECTRON . DOCKER .
                  KUBERNETES
                </p>
              </div>
              <div class="about-section">
                <h3>&gt; CAREER LOG:</h3>
                <p>STARTED: FREELANCE MERCENARY</p>
                <p>JOINED: RIZME SOFTWARE (BACKEND DEV)</p>
                <p>LEVELED UP: TBS (TEAM LEAD)</p>
                <p>MAXIMIZED: REYADA CAPITAL (DIRECT MANAGER)</p>
              </div>
              <div class="about-section highlight">
                <h3>&gt; MISSION FOCUS:</h3>
                <p>
                  BRIDGING TECH & BUSINESS. EXPERT IN REQUIREMENTS ANALYSIS &
                  CLIENT RELATIONS.
                </p>
              </div>
              <div class="about-section">
                <h3>&gt; COMS:</h3>
                <div class="about-links">
                  <a
                    href="https://www.linkedin.com/in/youssef-askar-638531154/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="game-btn"
                    style="font-size: 0.7rem; display: inline-block; margin-right: 1rem;"
                  >
                    LINKEDIN
                  </a>
                  <a
                    href="https://github.com/y-as-7"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="game-btn"
                    style="font-size: 0.7rem; display: inline-block;"
                  >
                    GITHUB
                  </a>
                </div>
              </div>
              <button
                class="game-btn blinking"
                onClick={() => props.setView?.("home")}
                style="margin-top: 1rem; align-self: flex-start; font-size: 0.8rem;"
              >
                &lt; RETURN TO BASE
              </button>
            </div>
          </div>
        ) : isProjects() ? (
          <div class="start-screen-overlay projects-overlay">
            <div class="projects-grid">
              {[
                {
                  id: 1,
                  title: "NEON_MARKET.EXE",
                  version: "v2.4.0",
                  desc: "Next-gen e-commerce platform featuring real-time inventory tracking, crypto payments, and AI-driven recommendations.",
                  tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
                  placeholder: "ECOMM_SYS",
                },
                {
                  id: 2,
                  title: "CYBER_CHAT.DAT",
                  version: "v1.0.2",
                  desc: "End-to-end encrypted messaging service with matrix protocol support and ephemeral data streams.",
                  tech: ["React", "Socket.io", "Redis", "Node"],
                  placeholder: "SECURE_MSG",
                },
                {
                  id: 3,
                  title: "TASK_FORCE.BAT",
                  version: "v3.1.5",
                  desc: "Collaborative project management tool designed for distributed teams with offline-first capabilities.",
                  tech: ["Vue", "Firebase", "PWA", "Tailwind"],
                  placeholder: "MGMT_TOOL",
                },
                {
                  id: 4,
                  title: "ZERO_GRAVITY.APP",
                  version: "v0.9.beta",
                  desc: "Physics simulation engine for web browsers utilizing WebAssembly for high-performance calculations.",
                  tech: ["Rust", "WASM", "WebGL", "Three.js"],
                  placeholder: "PHYS_ENG",
                },
              ].map((project) => (
                <div class="project-card">
                  <div class="project-header">
                    <span class="project-title">{project.title}</span>
                    <span class="project-version">{project.version}</span>
                  </div>
                  <div class="project-body">
                    <div class="project-image-placeholder">
                      <span>[{project.placeholder}]</span>
                    </div>
                    <p class="project-description">&gt; {project.desc}</p>
                    <div class="tech-stack">
                      {project.tech.map((t) => (
                        <span class="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                  <button class="init-btn">&gt; INITIALIZE SYSTEM</button>
                </div>
              ))}
            </div>

            <button
              class="game-btn blinking"
              onClick={() => props.setView?.("home")}
              style="margin: 2rem auto; display: block;"
            >
              &lt; RETURN TO BASE
            </button>
          </div>
        ) : !isPlaying() ? (
          <div class="start-screen-overlay">
            <h1 class="game-title">CODE WARRIOR</h1>

            <div class="bio-box">
              <p class="type-line-1">SOFTWARE ENGINEER</p>
              <p class="type-line-2">WEB . BACKEND . DEVOPS</p>
              <div class="scan-line-decor"></div>
              <p class="type-line-3">TECH & BUSINESS SOLUTIONS</p>
            </div>

            <div class="menu-selection">
              <button
                class="press-start-btn"
                onClick={() => setIsPlaying(true)}
              >
                PRESS START
              </button>
            </div>
          </div>
        ) : (
          <div class="game-play-area">
            {activeModule() === null ? (
              <div class="modules-grid">
                <button
                  class="module-btn"
                  onClick={() => setActiveModule("MISSIONS")}
                >
                  <span class="icon">📜</span> MISSION_LOGS
                </button>
                <button
                  class="module-btn"
                  onClick={() => setActiveModule("SERVICES")}
                >
                  <span class="icon">💎</span> SERVICES_OFFER
                </button>
                <button
                  class="module-btn"
                  onClick={() => setActiveModule("TROPHIES")}
                >
                  <span class="icon">🏆</span> TROPHIES_ACH
                </button>
                <div class="dialog-box typing-effect" style="margin-top: 2rem;">
                  <p>&gt; SELECT A SYSTEM TO INSPECT...</p>
                </div>
              </div>
            ) : (
              <div class="module-detail">
                <div class="detail-header">
                  <h2>{activeModule()}</h2>
                  <button
                    class="close-btn"
                    onClick={() => setActiveModule(null)}
                  >
                    X
                  </button>
                </div>
                <div class="scan-line"></div>
                <div class="data-list">
                  {getModuleData(activeModule()!).map((item) => (
                    <div class="data-row">
                      <div class="data-main">
                        <span class="data-title">{item.title}</span>
                        <span class="data-sub">{item.subtitle}</span>
                      </div>
                      <span class="data-desc">{item.desc}</span>
                    </div>
                  ))}
                </div>
                <button
                  class="game-btn blinking Back-btn"
                  onClick={() => setActiveModule(null)}
                  style="margin-top: 2rem;"
                >
                  &lt; RETURN
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CenterPanel;
