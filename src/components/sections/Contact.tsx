import type { Component } from "solid-js";

const Contact: Component = () => {
  return (
    <section id="contact" class="contact-section">
      <div class="hero-subtitle" style="justify-content: center; display: flex;">04. What's Next?</div>
      <h2 class="contact-title">Get In Touch</h2>
      <p class="contact-desc">
        Although I'm not currently looking for any new opportunities, my inbox is always open. 
        Whether you have a question, a proposal, or just want to say hi, I'll try my best to get back to you!
      </p>
      
      <a href="mailto:youssefaskar111@outlook.com" class="btn-outline" style="display: inline-block; padding: 1rem 2rem; font-size: 1.1rem;">
        Say Hello
      </a>
      
      <div style="margin-top: 4rem; display: flex; gap: 1rem; justify-content: center;">
        <a href="https://github.com/y-as-7" target="_blank" rel="noopener noreferrer" class="social-icon">GH</a>
        <a href="https://www.linkedin.com/in/youssef-askar-023a02251/" target="_blank" rel="noopener noreferrer" class="social-icon">IN</a>
        <a href="https://wa.me/971566580292" target="_blank" rel="noopener noreferrer" class="social-icon">WA</a>
      </div>
    </section>
  );
};

export default Contact;
