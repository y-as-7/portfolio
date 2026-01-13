import { createSignal, type Component } from 'solid-js';
import './CenterPanel.css';

interface CenterPanelProps {
  view?: string;
}

const CenterPanel: Component<CenterPanelProps> = (props) => {
  const [isPlaying, setIsPlaying] = createSignal(false);
  
  const isContact = () => props.view === 'contact';
  const isProjects = () => props.view === 'projects';
  
  const projects = [
    {
      id: 1,
      title: 'PORTFOLIO_V1',
      desc: '// The current retro-themed site.\n// Built with SolidJS & Vite.',
      tech: ['SOLID', 'TS', 'CSS'],
      link: '#'
    },
    {
      id: 2,
      title: 'AI_ASSISTANT',
      desc: '// Neural network chat interface.\n// Powered by LLM Integration.',
      tech: ['PYTHON', 'PYTORCH', 'REACT'],
      link: '#'
    },
    {
      id: 3,
      title: 'ECOMMERCE_BOT',
      desc: '// Automated trading bot.\n// High-frequency algo.',
      tech: ['GO', 'SQL', 'DOCKER'],
      link: '#'
    }
  ];

  return (
    <div class="center-panel">
      <div class="game-screen-bar">
        <span>{isContact() ? 'CONTACT_ME.EXE' : 'SKILLS.NES'}</span>
        <span>{isContact() ? 'STATUS: ONLINE' : 'HIGH SCORE: 99999'}</span>
      </div>
      <div class="game-viewport">
        <div class="sky-gradient"></div>
        <div class="ground-layer"></div>
        
        {isContact() ? (
           <div class="start-screen-overlay">
              <h1 class="game-title">CONTACT ME</h1>
              <form class="retro-form" onSubmit={(e) => e.preventDefault()}>
                <div class="form-group">
                  <label>&gt; ENTER NAME:</label>
                  <input type="text" placeholder="_" />
                </div>
                <div class="form-group">
                   <label>&gt; ENTER EMAIL:</label>
                   <input type="email" placeholder="_" />
                </div>
                <div class="form-group">
                   <label>&gt; MESSAGE:</label>
                   <textarea rows="4" placeholder="_"></textarea>
                </div>
                <button type="submit" class="game-btn blinking">SEND MESSAGE</button>
              </form>
           </div>
        ) : !isPlaying() ? (
          <div class="start-screen-overlay">
             <h1 class="game-title">CODE WARRIOR</h1>
             
             <div class="retro-bio">
               <p class="type-line-1">FULL STACK DEVELOPER</p>
               <p class="type-line-2">SPECIALIZED IN WEB TECH.</p>
               <p class="type-line-3">MISSION: BUILD THE FUTURE</p>
             </div>

             <div class="menu-selection">
                <button class="game-btn blinking" onClick={() => setIsPlaying(true)}>
                  ▶ START GAME
                </button>
                <button class="game-btn disabled">
                  OPTIONS
                </button>
             </div>
             
             <div class="copyright-text">
               © 2026 YOUSSEF ASKAR<br/>
               LICENSED BY NINTENDO
             </div>
          </div>
        ) : (
          <div class="game-play-area">
             <div class="player-character"></div>
             <div class="dialog-box typing-effect">
               <p>&gt; SYSTEM INTIALIZED...</p>
               <p>&gt; WELCOME USER. SELECT A MODULE.</p>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CenterPanel;
