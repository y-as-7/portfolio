import { type Component, For } from "solid-js";
import { experiences } from "../../data/experience";

const Experience: Component = () => {
  return (
    <section id="experience" class="section">
      <h2 class="section-title">02. Where I've Worked</h2>
      
      <div class="experience-list">
        <For each={experiences}>
          {(exp) => (
            <div class="exp-item">
              <div class="exp-header">
                <h3 class="exp-role">
                  {exp.role} <span class="exp-company">@ {exp.company}</span>
                </h3>
                <div class="exp-date">{exp.date}</div>
              </div>
              
              <ul class="exp-desc">
                <For each={exp.description}>
                  {(desc) => <li>{desc}</li>}
                </For>
              </ul>
              
              <div class="exp-skills">
                <For each={exp.skills}>
                  {(skill) => <span class="skill-tag">{skill}</span>}
                </For>
              </div>
            </div>
          )}
        </For>
      </div>
    </section>
  );
};

export default Experience;
