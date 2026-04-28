import { type Component, createEffect, For } from "solid-js";
import { type Project } from "../types";
import "../styles/project-details.css";

interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetails: Component<ProjectDetailsProps> = (props) => {
  createEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  });

  return (
    <div 
      class="project-details-page"
      style={{
        "--project-color": `rgb(${props.project.colors.primary})`,
        "--project-color-transparent": `rgba(${props.project.colors.primary}, 0.15)`
      }}
    >
      <div class="pd-ambient-bg"></div>

      <div 
        class="fixed-header no-print"
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          "z-index": 1000,
        }}
      >
        <button onClick={props.onBack} class="pd-back-btn glass">
          <span style="font-family: monospace;">←</span> Back to Portfolio
        </button>
      </div>

      <header class="pd-hero">
        <div class="pd-hero-content">
          <div class="pd-tag-wrapper">
            <span class="pd-tag">{props.project.tag}</span>
          </div>
          <h1 class="pd-title" style={`text-shadow: 0 0 80px rgba(${props.project.colors.primary}, 0.4);`}>
            {props.project.name.toUpperCase()}
          </h1>
          <p class="pd-desc">{props.project.description}</p>
          
          <div class="pd-hero-links">
             {props.project.links?.website && (
               <a href={props.project.links.website} target="_blank" rel="noopener noreferrer" class="pd-hero-btn primary" style={`background: rgb(${props.project.colors.primary}); box-shadow: 0 0 20px rgba(${props.project.colors.primary}, 0.4);`}>
                 Live Site
               </a>
             )}
             {/* Note: In a real app we might show App Store buttons here too */}
          </div>
        </div>
        
        <div class="pd-hero-image-wrapper">
           <img src={props.project.image} alt={props.project.name} class="pd-hero-img" />
           <div class="pd-hero-img-glow" style={`background: radial-gradient(circle, rgba(${props.project.colors.primary}, 0.3) 0%, transparent 70%);`}></div>
        </div>
      </header>

      <main class="pd-main section">
        <div class="pd-grid">
          <div class="pd-content">
            {props.project.problem && (
              <section class="pd-section">
                <div class="pd-section-header">
                  <span class="pd-number" style={`color: rgb(${props.project.colors.primary});`}>01</span>
                  <h2>The Problem</h2>
                </div>
                <p class="pd-text-large">{props.project.problem}</p>
              </section>
            )}

            {props.project.mission && (
              <section class="pd-section">
                <div class="pd-section-header">
                  <span class="pd-number" style={`color: rgb(${props.project.colors.primary});`}>02</span>
                  <h2>Mission & Vision</h2>
                </div>
                <div class="pd-info-box">
                  <h4 style={`color: rgb(${props.project.colors.secondary});`}>The Mission</h4>
                  <p>{props.project.mission}</p>
                </div>
                {props.project.vision && (
                  <div class="pd-info-box" style="margin-top: var(--space-4);">
                    <h4 style={`color: rgb(${props.project.colors.secondary});`}>The Vision</h4>
                    <p>{props.project.vision}</p>
                  </div>
                )}
              </section>
            )}

            {props.project.journey && (
              <section class="pd-section">
                <div class="pd-section-header">
                  <span class="pd-number" style={`color: rgb(${props.project.colors.primary});`}>03</span>
                  <h2>{props.project.journey.title}</h2>
                </div>
                <p class="pd-text-lead">{props.project.journey.subtitle}</p>
              </section>
            )}

            {props.project.story && (
              <section class="pd-section">
                <div class="pd-section-header">
                  <span class="pd-number" style={`color: rgb(${props.project.colors.primary});`}>04</span>
                  <h2>The Story</h2>
                </div>
                <div class="pd-story-text">
                  <For each={props.project.story.split('\n\n')}>
                    {(paragraph) => <p>{paragraph}</p>}
                  </For>
                </div>
              </section>
            )}
          </div>

          <aside class="pd-sidebar">
            <div class="pd-card sticky">
              <h3 style={`border-bottom: 2px solid rgb(${props.project.colors.primary}); padding-bottom: 10px;`}>External Links</h3>
              <div class="pd-links" style="margin-top: 15px;">
                {props.project.links?.website && (
                  <a href={props.project.links.website} target="_blank" rel="noopener noreferrer" class="pd-link group">
                    <span class="link-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </span> 
                    Visit Website
                  </a>
                )}
                {props.project.links?.appStore && (
                  <a href={props.project.links.appStore} target="_blank" rel="noopener noreferrer" class="pd-link group">
                    <span class="link-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.62-1.458 3.608-2.918 1.15-1.674 1.615-3.298 1.639-3.385-.035-.015-3.184-1.22-3.197-4.858-.013-3.046 2.483-4.524 2.597-4.591-1.442-2.106-3.679-2.39-4.482-2.428-1.803-.122-3.55 1.12-4.45 1.12zm-.145-6.843c1.015 0 2.332.62 3.018 1.632.617.892 1.107 2.146.903 3.33-1.136.046-2.522-.656-3.266-1.617-.63-.822-1.168-2.112-.904-3.284.03-.04.07-.061.249-.061z"/>
                      </svg>
                    </span> 
                    App Store
                  </a>
                )}
                {props.project.links?.googlePlay && (
                  <a href={props.project.links.googlePlay} target="_blank" rel="noopener noreferrer" class="pd-link group">
                    <span class="link-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.242 1.343a.925.925 0 0 0-.242.613v20.088c0 .243.09.463.242.613l.022.022 11.231-11.233v-.092l-11.231-11.234-.022.023zm11.97 12.593l3.96-2.288c1.13-.644 1.13-1.696 0-2.34L15.212 7.02l-3.203 3.203 3.203 3.203zm-14.28 7.377a.9.9 0 0 0 .493.136c.189 0 .392-.045.586-.151l4.577-2.64-5.656-5.656-5.655 5.655 5.655 2.656zM8.985 8.35L3.33 2.694 8.985 5.35l4.577-2.64c.2-.11.4-.15.586-.15.2 0 .393.04.536.104h.007L8.985 8.35z"/>
                      </svg>
                    </span> 
                    Google Play
                  </a>
                )}
                {(!props.project.links || Object.keys(props.project.links).length === 0) && (
                  <span style="color: var(--text-muted); font-size: 0.9rem;">No public links available.</span>
                )}
              </div>

              <h3 style={`border-bottom: 2px solid rgb(${props.project.colors.primary}); padding-bottom: 10px; margin-top: 30px;`}>Key Features</h3>
              <div class="pd-tech-cloud" style="margin-top: 15px;">
                <For each={props.project.features}>
                  {(feature) => <span class="pd-tech-pill">{feature}</span>}
                </For>
              </div>
            </div>
          </aside>
        </div>

        {props.project.images && props.project.images.length > 0 && (
          <section class="pd-gallery pd-section">
            <div class="pd-section-header center">
              <h2>Project Gallery</h2>
            </div>
            <div class="pd-gallery-grid">
              <For each={props.project.images}>
                {(img) => (
                  <div class="pd-gallery-img-wrapper scale-on-hover">
                    <img src={img} alt={`${props.project.name} screenshot`} class="pd-gallery-img" loading="lazy" />
                  </div>
                )}
              </For>
            </div>
          </section>
        )}
      </main>
      
      <footer style="text-align: center; padding: 6rem 2rem; color: var(--text-muted); border-top: 1px solid var(--border-color); position: relative; z-index: 10;">
        <h2 style="margin-bottom: 2rem; color: var(--text-primary);">Next Project?</h2>
        <button onClick={props.onBack} class="pd-back-btn large glass">
          Return to Portfolio
        </button>
      </footer>
    </div>
  );
};

export default ProjectDetails;
