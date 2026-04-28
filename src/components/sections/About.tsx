import type { Component } from "solid-js";

const About: Component = () => {
  return (
    <section id="about" class="section">
      <h2 class="section-title">01. About Me</h2>
      
      <div class="about-content">
        <div class="about-text">
          <p>
            Hello! My name is Youssef and I enjoy creating things that live on the internet. 
            My interest in software engineering started back in my freelance mercenary days, 
            building custom web and desktop solutions for diverse clients, which taught me 
            the art of clean client relations and requirements analysis.
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at a 
            <span style="color: var(--accent-primary)"> sports federation software company</span>, a 
            <span style="color: var(--accent-primary)"> major enterprise ERP firm</span>, and a 
            <span style="color: var(--accent-primary)"> rapidly scaling fintech startup</span>. 
            My main focus these days is architecting massive, fault-tolerant financial 
            infrastructure to process transactions seamlessly for millions of users.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          
          <ul class="skills-list">
            <li class="skill-item">Golang (Go)</li>
            <li class="skill-item">TypeScript</li>
            <li class="skill-item">Next.js & React</li>
            <li class="skill-item">PHP / Laravel</li>
            <li class="skill-item">AWS & Huawei Cloud</li>
            <li class="skill-item">Docker & Kubernetes</li>
          </ul>
        </div>
        
        <div class="about-image-column">
          <div class="about-image-wrapper">
             <span class="text-gradient" style="font-family: monospace; font-size: 4rem; z-index: 1;">YA</span>
             <img 
               src="/me.png" 
               alt="Youssef Askar" 
               class="about-image" 
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
               }}
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
