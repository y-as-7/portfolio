import { type Component, createSignal, Show } from "solid-js";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Resume from "./components/Resume"; 
import ProjectDetails from "./components/ProjectDetails";
import { projects } from "./data/projects";

import "./styles/sections.css"; // Ensure sections CSS is loaded

const App: Component = () => {
  const [currentRoute, setCurrentRoute] = createSignal(window.location.hash);

  window.addEventListener("hashchange", () => {
    setCurrentRoute(window.location.hash);
  });

  const activeProject = () => {
    const route = currentRoute();
    if (route.startsWith("#project/")) {
      const id = route.split("#project/")[1];
      return projects.find(p => p.id === id) || null;
    }
    return null;
  };

  return (
    <>
      <Show when={!currentRoute().startsWith("#cv") && !activeProject()}>
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <footer style="text-align: center; padding: 2rem; color: var(--text-muted); font-size: 0.9rem; font-family: monospace;">
          <p>Designed & Built by Youssef Askar</p>
        </footer>
      </Show>

      <Show when={currentRoute().startsWith("#cv")}>
        <Resume />
        <div
          class="no-print"
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            "z-index": 1000,
          }}
        >
          <a
            href="#"
            style={{
              padding: "10px 20px",
              background: "#0a0a0b",
              border: "1px solid #27272a",
              color: "#fafafa",
              "text-decoration": "none",
              "border-radius": "4px",
              "font-family": "var(--font-sans)",
            }}
          >
            ← Back to Portfolio
          </a>
        </div>
      </Show>

      <Show when={activeProject()}>
        {(project) => (
          <ProjectDetails 
            project={project()} 
            onBack={() => { window.location.hash = "#projects"; }} 
          />
        )}
      </Show>
    </>
  );
};

export default App;
