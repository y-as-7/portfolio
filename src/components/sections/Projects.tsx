import { type Component, For } from "solid-js";
import { projects } from "../../data/projects";

const Projects: Component = () => {
  return (
    <section id="projects" class="section">
      <h2 class="section-title">03. Some Things I've Built</h2>
      
      <div class="projects-grid">
        <For each={projects.filter(p => p.variant === "featured" && !p.hidden)}>
          {(project) => (
            <div class="project-card">
              <a href={`#project/${project.id}`} class="project-image-wrapper" style="display: block;">
                <img src={project.image} alt={project.name} class="project-img" loading="lazy" />
              </a>
              <div class="project-content">
                <h3 class="project-title">{project.name.toUpperCase()}</h3>
                <p class="project-desc">{project.description}</p>
                <div class="project-tech">
                  <For each={project.features.slice(0, 4)}>
                    {(feature) => <span class="tech-pill">{feature}</span>}
                  </For>
                </div>
                <div class="project-links">
                  {project.links?.website && (
                    <a href={project.links.website} target="_blank" rel="noopener noreferrer" class="project-link" title="Visit Website">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                  {project.links?.appStore && (
                    <a href={project.links.appStore} target="_blank" rel="noopener noreferrer" class="project-link" title="App Store">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.62-1.458 3.608-2.918 1.15-1.674 1.615-3.298 1.639-3.385-.035-.015-3.184-1.22-3.197-4.858-.013-3.046 2.483-4.524 2.597-4.591-1.442-2.106-3.679-2.39-4.482-2.428-1.803-.122-3.55 1.12-4.45 1.12zm-.145-6.843c1.015 0 2.332.62 3.018 1.632.617.892 1.107 2.146.903 3.33-1.136.046-2.522-.656-3.266-1.617-.63-.822-1.168-2.112-.904-3.284.03-.04.07-.061.249-.061z"/>
                      </svg>
                    </a>
                  )}
                  {project.links?.googlePlay && (
                    <a href={project.links.googlePlay} target="_blank" rel="noopener noreferrer" class="project-link" title="Play Store">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.242 1.343a.925.925 0 0 0-.242.613v20.088c0 .243.09.463.242.613l.022.022 11.231-11.233v-.092l-11.231-11.234-.022.023zm11.97 12.593l3.96-2.288c1.13-.644 1.13-1.696 0-2.34L15.212 7.02l-3.203 3.203 3.203 3.203zm-14.28 7.377a.9.9 0 0 0 .493.136c.189 0 .392-.045.586-.151l4.577-2.64-5.656-5.656-5.655 5.655 5.655 2.656zM8.985 8.35L3.33 2.694 8.985 5.35l4.577-2.64c.2-.11.4-.15.586-.15.2 0 .393.04.536.104h.007L8.985 8.35z"/>
                      </svg>
                    </a>
                  )}
                </div>
                <a href={`#project/${project.id}`} class="project-link" style="margin-top: var(--space-6); display: inline-flex; align-items: center; gap: 8px; font-weight: 500; font-size: 0.95rem; color: var(--accent-primary);">
                  Read Case Study <span style="font-size: 1.2rem; transition: transform 0.2s;" onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(4px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}>→</span>
                </a>
              </div>
            </div>
          )}
        </For>
      </div>
    </section>
  );
};

export default Projects;
