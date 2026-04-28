import { type Component, createSignal, onMount, onCleanup } from "solid-js";
import "./Header.css";

const Header: Component = () => {
  const [scrolled, setScrolled] = createSignal(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = createSignal(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onCleanup(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header class="header-wrapper">
      <nav class={`header-nav glass ${scrolled() ? 'scrolled' : ''}`}>
        <a href="#" class="logo text-gradient">Y.A</a>

        <div class={`nav-links ${isMobileMenuOpen() ? 'open' : ''}`}>
          <a href="#about" class="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#experience" class="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
          <a href="#projects" class="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
          <a href="#cv" class="nav-link" onClick={() => setIsMobileMenuOpen(false)}>CV</a>
          
          <div class="social-links">
            <a href="https://github.com/y-as-7" target="_blank" rel="noopener noreferrer" class="social-icon" title="GitHub">GH</a>
            <a href="https://www.linkedin.com/in/youssef-askar-023a02251/" target="_blank" rel="noopener noreferrer" class="social-icon" title="LinkedIn">IN</a>
            <a href="mailto:youssefaskar111@outlook.com" class="social-icon" title="Email">@</a>
          </div>

          <a href="#contact" class="btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Let's Talk</a>
        </div>

        <button class="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen())}>
          {isMobileMenuOpen() ? '✕' : '☰'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
