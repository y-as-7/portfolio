import { createSignal, type Component } from 'solid-js';
import './CenterPanel.css';

interface CenterPanelProps {
  view?: string;
}

const CenterPanel: Component<CenterPanelProps> = (props) => {
  const [isPlaying, setIsPlaying] = createSignal(false);
  
  const isContact = () => props.view === 'contact';
  const isProjects = () => props.view === 'projects';
  
  const [activeModule, setActiveModule] = createSignal<string | null>(null);

  const getModuleData = (mod: string) => {
    switch(mod) {
      case 'MISSIONS': return [
         { title: 'SENIOR ENG.', subtitle: 'TECH CORP B', desc: '2023 - PRESENT // LEAD ARCHITECT' },
         { title: 'FULL STACK DEV', subtitle: 'STARTUP A', desc: '2021 - 2023 // CORE SYSTEMS' },
         { title: 'FREELANCE', subtitle: 'VARIOUS', desc: '2019 - 2021 // WEB SOLUTIONS' }
      ];
      case 'SERVICES': return [
         { title: 'WEB DEVELOPMENT', subtitle: 'FULL STACK', desc: 'MODERN APPS & SYSTEMS' },
         { title: 'UI / UX DESIGN', subtitle: 'INTERACTIVE', desc: 'RETRO & MODERN AESTHETICS' },
         { title: 'OPTIMIZATION', subtitle: 'PERFORMANCE', desc: 'SEO & SPEED TUNING' }
      ];
      case 'TROPHIES': return [
         { title: 'HACKATHON 2024', subtitle: '1ST PLACE', desc: 'BEST INNOVATION AWARD' },
         { title: 'CERTIFIED', subtitle: 'CLOUD ARCHITECT', desc: 'AWS PROFESSIONAL' },
         { title: 'OPEN SOURCE', subtitle: 'CONTRIBUTOR', desc: 'TOP 500 GH RANK' }
      ];
      default: return [];
    }
  };

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
        <span>{isContact() ? 'CONTACT_ME.EXE' : isProjects() ? 'MISSIONS.BAT' : 'SKILLS.NES'}</span>
        <span>{isContact() ? 'STATUS: ONLINE' : isProjects() ? 'SELECT TARGET' : 'HIGH SCORE: 99999'}</span>
      </div>
      <div class="game-viewport">
        <div class="sky-gradient"></div>
        <div class="ground-layer">
          {!isPlaying() && !isContact() && !isProjects() && (
             <div class="copyright-text">
               © 2026 YOUSSEF ASKAR - LICENSED BY NINTENDO
             </div>
          )}
        </div>
        
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
        ) : isProjects() ? (
          <div class="start-screen-overlay projects-overlay">
             <h1 class="game-title">MISSION SELECT</h1>
             
             <div class="projects-grid" style="display: flex; justify-content: center; align-items: center; min-height: 200px;">
               <div class="project-card" style="width: 100%; max-width: 500px; text-align: center; border: 4px double #33ff00;">
                 <div class="project-header" style="justify-content: center;">
                   <span>SYSTEM MESSAGE</span>
                 </div>
                 <div class="project-body" style="align-items: center;">
                   <p class="blink-cursor" style="color: #33ff00; font-family: var(--font-body); font-size: 1.5rem; margin: 2rem 0;">
                     &gt; MISSIONS STILL PREPARING...
                   </p>
                 </div>
               </div>
             </div>
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
             

          </div>
        ) : (
          <div class="game-play-area">
             {activeModule() === null ? (
               <div class="modules-grid">
                 <button class="module-btn" onClick={() => setActiveModule('MISSIONS')}>
                   <span class="icon">📜</span> MISSION_LOGS
                 </button>
                 <button class="module-btn" onClick={() => setActiveModule('SERVICES')}>
                   <span class="icon">💎</span> SERVICES_OFFER
                 </button>
                 <button class="module-btn" onClick={() => setActiveModule('TROPHIES')}>
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
                   <button class="close-btn" onClick={() => setActiveModule(null)}>X</button>
                 </div>
                 <div class="scan-line"></div>
                 <div class="data-list">
                   {getModuleData(activeModule()!).map(item => (
                     <div class="data-row">
                       <div class="data-main">
                         <span class="data-title">{item.title}</span>
                         <span class="data-sub">{item.subtitle}</span>
                       </div>
                       <span class="data-desc">{item.desc}</span>
                     </div>
                   ))}
                 </div>
                 <button class="game-btn blinking Back-btn" onClick={() => setActiveModule(null)} style="margin-top: 2rem;">&lt; RETURN</button>
               </div>
             )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CenterPanel;
