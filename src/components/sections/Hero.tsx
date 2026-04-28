import type { Component } from "solid-js";

const Hero: Component = () => {
  return (
    <section id="hero" class="section hero">
      <div class="hero-subtitle">Hi, my name is</div>
      <h1 class="hero-title">Youssef Askar.</h1>
      <h2 class="hero-title" style="color: var(--text-secondary); margin-top: -1rem;">
        I build robust digital systems.
      </h2>
      
      <p class="hero-desc">
        I'm a Senior Software Engineer specializing in scalable architectures, high-performance backends, and full-stack solutions. 
        Currently engaged as a Direct Manager & Lead at <span class="text-gradient" style="font-weight: 600;">Reyada Capital</span>, 
        designing systems that serve a massive global user base.
      </p>

      <div class="hero-cta">
        <a href="#projects" class="btn-primary-large">Check out my work!</a>
        <a href="#cv" class="btn-outline">View Resume</a>
      </div>
    </section>
  );
};

export default Hero;
