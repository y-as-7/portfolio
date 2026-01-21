import { createSignal, type Component, For } from "solid-js";
import Header from "./Header";
import CenterPanel from "./CenterPanel";
import SidePanel from "./SidePanel";
import "./Dashboard.css";

const Dashboard: Component = () => {
  const [currentView, setCurrentView] = createSignal("home");
  const [termInput, setTermInput] = createSignal("");
  const [terminalHistory, setTerminalHistory] = createSignal<string[]>([
    "> _INITIATING PORTFOLIO SEQUENCE...",
    "> _LOADING ASSETS... [OK]",
    "> _ESTABLISHING CONNECTION... [OK]",
    '>TYPE "help" FOR COMMANDS',
  ]);

  const handleCommand = () => {
    const cmd = termInput().trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...terminalHistory(), `> ${termInput()}`];

    switch (cmd) {
      case "help":
        newHistory.push(
          "> AVAILABLE COMMANDS:",
          ">  - projects: VIEW PROJECTS",
          ">  - contact: OPEN COMM LINK",
          ">  - about: SYSTEM INFO",
          ">  - clear: CLEAR TERMINAL",
          ">  - whoami: IDENTIFY USER",
        );
        break;
      case "projects":
        newHistory.push("> LAUNCHING MISSION SELECT...");
        setCurrentView("projects");
        break;
      case "contact":
        newHistory.push("> OPENING SECURE CHANNEL...");
        setCurrentView("contact");
        break;
      case "about":
        newHistory.push("> ACCESSING BIO DATA...");
        setCurrentView("about");
        break;
      case "home":
        newHistory.push("> RETURNING TO BASE...");
        setCurrentView("home");
        break;
      case "clear":
        setTerminalHistory(["> _TERMINAL CLEARED"]);
        setTermInput("");
        return;
      case "whoami":
        newHistory.push("> GUEST USER DETECTED", "> ACCESS LEVEL: RESTRICTED");
        break;
      default:
        newHistory.push(`> ERROR: COMMAND "${cmd}" NOT RECOGNIZED`);
    }

    setTerminalHistory(newHistory);
    setTermInput("");

    // Auto scroll to bottom
    setTimeout(() => {
      const term = document.querySelector(".terminal-output");
      if (term) term.scrollTop = term.scrollHeight;
    }, 10);
  };

  return (
    <div class="dashboard-container">
      <Header currentView={currentView()} setView={setCurrentView} />

      <div
        class={`dashboard-grid ${currentView() === "projects" ? "full-width-mode" : ""}`}
      >
        {currentView() !== "projects" && (
          <SidePanel title="LANGUAGES" className="left-panel">
            <ul class="retro-list">
              <li>
                <span class="icon">JS</span> JavaScript
              </li>
              <li>
                <span class="icon">TS</span> TypeScript
              </li>
              <li>
                <span class="icon">PY</span> Python
              </li>
              <li>
                <span class="icon">PHP</span> PHP
              </li>
              <li>
                <span class="icon">GO</span> GoLang
              </li>
              <li>
                <span class="icon">SQL</span> MySQL
              </li>
              <li>
                <span class="icon">MD</span> Markdown
              </li>
              <li>
                <span class="icon">SH</span> Bash
              </li>
              <li>
                <span class="icon">C</span> C
              </li>
              <li>
                <span class="icon">CPP</span> C++
              </li>
            </ul>

            <div class="section-divider"></div>

            <div class="panel-header-small">System Status</div>
            <div class="status-row">
              <span>CPU:</span> <span class="text-term">i7-8665U</span>
            </div>
            <div class="status-row">
              <span>MEM:</span> <span>16GB</span>
            </div>
            <div class="status-row">
              <span>SYS:</span> <span>UBUNTU 25.10</span>
            </div>
          </SidePanel>
        )}

        <div class="center-wrapper">
          <CenterPanel view={currentView()} setView={setCurrentView} />
          {currentView() !== "projects" && (
            <div
              class="terminal-output"
              onClick={() => document.getElementById("term-input")?.focus()}
            >
              <For each={terminalHistory()}>
                {(line) => <p class="term-line">{line}</p>}
              </For>
              <div class="input-line">
                <span class="prompt">&gt;</span>
                <input
                  id="term-input"
                  aria-label="Terminal Input"
                  type="text"
                  class="term-input"
                  value={termInput()}
                  onInput={(e) => setTermInput(e.currentTarget.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleCommand();
                  }}
                  autocomplete="off"
                  spellcheck={false}
                />
              </div>
            </div>
          )}
        </div>

        {currentView() !== "projects" && (
          <SidePanel title="FRAMEWORKS" className="right-panel">
            <div class="panel-header-small">FULLSTACK</div>
            <ul class="retro-list">
              <li>
                <span class="icon">NXT</span> Next.js
              </li>
              <li>
                <span class="icon">INR</span> Inertia.js
              </li>
            </ul>

            <div class="section-divider"></div>

            <div class="panel-header-small">FRONTEND</div>
            <ul class="retro-list">
              <li>
                <span class="icon">RE</span> React
              </li>
              <li>
                <span class="icon">VU</span> Vue
              </li>
            </ul>

            <div class="section-divider"></div>

            <div class="panel-header-small">BACKEND</div>
            <ul class="retro-list">
              <li>
                <span class="icon">LVR</span> Laravel
              </li>
              <li>
                <span class="icon">GIN</span> Gin
              </li>
              <li>
                <span class="icon">EXP</span> Express
              </li>
              <li>
                <span class="icon">NST</span> NestJS
              </li>
            </ul>
          </SidePanel>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
