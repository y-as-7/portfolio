import type { Component } from 'solid-js';
import './Header.css';

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
}

const Header: Component<HeaderProps> = (props) => {
  return (
    <header class="retro-header">
      <nav class="header-left">
        <a href="#projects" class="retro-btn" onClick={(e) => { e.preventDefault(); props.setView('projects'); }}>PROJECTS</a>
        <a href="https://github.com" target="_blank" class="retro-btn">GITHUB</a>
      </nav>
      
      <div class="header-center">
        <h1 class="logo-text" onClick={() => props.setView('home')} style="cursor: pointer">YOUSSEF.ASKAR</h1>
      </div>
      
      <nav class="header-right">
        <a href="#about" class="retro-btn" onClick={(e) => { e.preventDefault(); props.setView('home'); }}>ABOUT</a>
        <a href="#contact" class="retro-btn" onClick={(e) => { e.preventDefault(); props.setView('contact'); }}>CONTACT</a>
      </nav>
    </header>
  );
};

export default Header;
