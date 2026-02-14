import { createSignal, createEffect, type Component } from "solid-js";
import "./CenterPanel.css";
import { projects } from "../data/projects";

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
  const [currentProjectIndex, setCurrentProjectIndex] = createSignal(0);
  const [showingDetails, setShowingDetails] = createSignal(false);
  const [activeImageIndex, setActiveImageIndex] = createSignal<number | null>(
    null,
  );

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1,
    );
  };

  const allProjectImages = () => {
    const p = projects[currentProjectIndex()];
    return [...p.images, ...(p.desktopImages || [])];
  };

  const nextImage = () => {
    const images = allProjectImages();
    setActiveImageIndex((prev) =>
      prev === null ? 0 : (prev + 1) % images.length,
    );
  };

  const prevImage = () => {
    const images = allProjectImages();
    setActiveImageIndex((prev) =>
      prev === null ? 0 : prev === 0 ? images.length - 1 : prev - 1,
    );
  };

  createEffect(() => {
    if (props.view === "about") {
      setIsPlaying(false);
      setActiveModule(null);
    }

    if (props.view === "projects") {
      let lastScrollTime = 0;
      const scrollThreshold = 500; // ms

      const handleWheel = (e: WheelEvent) => {
        if (showingDetails()) return; // Disable scroll nav when in details
        const now = Date.now();
        if (now - lastScrollTime < scrollThreshold) return;

        if (e.deltaY > 0) {
          nextProject();
          lastScrollTime = now;
        } else if (e.deltaY < 0) {
          prevProject();
          lastScrollTime = now;
        }
      };

      const handleKeyDown = (e: KeyboardEvent) => {
        if (activeImageIndex() !== null) {
          if (e.key === "ArrowRight") nextImage();
          if (e.key === "ArrowLeft") prevImage();
          if (e.key === "Escape") setActiveImageIndex(null);
          return;
        }
        if (showingDetails()) return; // Disable keyboard nav when in details
        if (e.key === "ArrowRight" || e.key === "ArrowDown") nextProject();
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") prevProject();
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("wheel", handleWheel, { passive: true });

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("wheel", handleWheel);
      };
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
              : isAbout()
                ? "ABOUT.EXE"
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
            <div class="about-container">
              <div class="about-section">
                <h3>&gt; IDENTITY:</h3>
                <p>Youssef Askar // Software Engineer</p>
                <p style="font-size: 1.1rem; margin-top: 0.5rem; color: #aaa;">
                  Architect of digital realms. I don't just write functions; I
                  craft experiences that resonate. Driven by insatiable
                  curiosity and a commitment to excellence.
                </p>
              </div>
              <div class="about-section">
                <h3>&gt; CAREER LOG:</h3>
                <p>Started: Freelance Mercenary</p>
                <p>Joined: Rizme Software (Backend Dev)</p>
                <p>Leveled Up: TBS (Team Lead)</p>
                <p>Maximized: Reyada Capital (Direct Manager)</p>
              </div>
              <div class="about-section">
                <h3>&gt; PASSION:</h3>
                <p>
                  Scalable architectures, revolutionizing digital commerce, and
                  the retro-futuristic aesthetics of the early internet. I live
                  for the "aha!" moment of a complex bug resolved.
                </p>
              </div>
              <div class="about-section highlight">
                <h3>&gt; MISSION FOCUS:</h3>
                <p>
                  Bridging tech & business. Expert in requirements analysis &
                  client relations.
                </p>
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
            <div class="project-navigator">
              <div class="navigator-header">
                <span class="mission-status-label">MISSION_LOG</span>
                <span class="mission-counter">
                  [ {currentProjectIndex() + 1} / {projects.length} ]
                </span>
              </div>

              <div class="project-card single-view">
                {showingDetails() ? (
                  <div class="project-details-expanded">
                    <div class="details-nav">
                      <button
                        class="game-btn sm"
                        onClick={() => setShowingDetails(false)}
                      >
                        &lt; CLOSE_LOG
                      </button>
                      <span class="details-id">
                        LOG::{projects[currentProjectIndex()].id.toUpperCase()}
                      </span>
                    </div>

                    <div class="details-content">
                      <div class="details-section">
                        <h4>// MISSION_STORY</h4>
                        <p>
                          {projects[currentProjectIndex()].story ||
                            projects[currentProjectIndex()].description}
                        </p>
                      </div>

                      <div class="details-row">
                        <div class="details-section half">
                          <h4>// OBJECTIVE</h4>
                          <p>
                            {projects[currentProjectIndex()].mission ||
                              projects[currentProjectIndex()].problem}
                          </p>
                        </div>
                        <div class="details-section half">
                          <h4>// VISION</h4>
                          <p>
                            {projects[currentProjectIndex()].vision ||
                              "Classified"}
                          </p>
                        </div>
                      </div>

                      <div class="details-section">
                        <h4>// DATA_VISUALS</h4>
                        <div class="details-gallery">
                          {projects[currentProjectIndex()].images.map(
                            (img: string, idx: number) => (
                              <div
                                class="gallery-item"
                                onClick={() => setActiveImageIndex(idx)}
                              >
                                <img src={img} alt="Mission Screenshot" />
                              </div>
                            ),
                          )}
                          {projects[currentProjectIndex()].desktopImages?.map(
                            (img: string, idx: number) => (
                              <div
                                class="gallery-item desktop"
                                onClick={() =>
                                  setActiveImageIndex(
                                    idx +
                                      projects[currentProjectIndex()].images
                                        .length,
                                  )
                                }
                              >
                                <img
                                  src={img}
                                  alt="Desktop Mission Screenshot"
                                />
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      <div class="details-section">
                        <h4>// SYSTEM_FEATURES</h4>
                        <div class="tech-stack expanded">
                          {projects[currentProjectIndex()].features.map(
                            (f: string) => (
                              <span class="tech-tag">{f}</span>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div class="project-header">
                      <span class="project-title">
                        {projects[currentProjectIndex()].name.toUpperCase()}
                      </span>
                      <span class="project-version">
                        {projects[currentProjectIndex()].tag}
                      </span>
                    </div>
                    <div class="project-body">
                      <div class="project-image-container">
                        <img
                          src={projects[currentProjectIndex()].image}
                          alt={projects[currentProjectIndex()].name}
                          class="project-image"
                        />
                      </div>
                      <p class="project-description">
                        &gt; {projects[currentProjectIndex()].description}
                      </p>
                      <div class="tech-stack">
                        {projects[currentProjectIndex()].features
                          .slice(0, 5)
                          .map((f: string) => (
                            <span class="tech-tag">
                              {f.length > 25 ? f.slice(0, 25) + "..." : f}
                            </span>
                          ))}
                      </div>
                    </div>
                    <button
                      class="init-btn"
                      onClick={() => setShowingDetails(true)}
                    >
                      &gt; INITIALIZE SYSTEM
                    </button>
                  </>
                )}
              </div>
            </div>
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

      {activeImageIndex() !== null && (
        <div class="lightbox-overlay" onClick={() => setActiveImageIndex(null)}>
          <button
            class="lightbox-close"
            onClick={() => setActiveImageIndex(null)}
          >
            &times;
          </button>

          <button
            class="lightbox-nav prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            &lt;
          </button>

          <div class="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={allProjectImages()[activeImageIndex()!]}
              alt="Full Resolution Mission Data"
              class="lightbox-image"
            />
            <div class="lightbox-caption">
              [ SCREENSHOT_{activeImageIndex()! + 1} /{" "}
              {allProjectImages().length} ]
            </div>
          </div>

          <button
            class="lightbox-nav next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default CenterPanel;
