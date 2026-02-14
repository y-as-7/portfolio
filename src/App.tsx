import { type Component, createSignal, Show } from "solid-js";
import Dashboard from "./components/Dashboard";
import Resume from "./components/Resume";

const App: Component = () => {
  const [showResume, setShowResume] = createSignal(false);

  // Simple "routing" based on hash or state
  window.addEventListener("hashchange", () => {
    setShowResume(window.location.hash === "#cv");
  });

  // Initial check
  if (window.location.hash === "#cv") {
    setShowResume(true);
  }

  return (
    <>
      <div class="scanlines"></div>
      <div class="starfield"></div>

      <Show when={!showResume()}>
        <Dashboard />
        <div
          class="no-print"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            "z-index": 1000,
          }}
        >
          <a
            href="#cv"
            style={{
              padding: "10px 20px",
              background: "rgba(0, 255, 0, 0.2)",
              border: "1px solid #0f0",
              color: "#0f0",
              "text-decoration": "none",
              "border-radius": "4px",
              "font-family": "monospace",
              "backdrop-filter": "blur(5px)",
            }}
          >
            ATS CV
          </a>
        </div>
      </Show>

      <Show when={showResume()}>
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
              background: "#000",
              border: "1px solid #333",
              color: "#fff",
              "text-decoration": "none",
              "border-radius": "4px",
              "font-family": "monospace",
            }}
          >
            ← Back to Portfolio
          </a>
        </div>
      </Show>
    </>
  );
};

export default App;
