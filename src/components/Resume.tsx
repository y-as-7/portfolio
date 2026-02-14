import { type Component, For } from "solid-js";
import { projects } from "../data/projects";
import "./Resume.css";

const Resume: Component = () => {
  return (
    <div class="resume-page-wrapper">
      <div class="resume-container">
        <header class="resume-header">
          <h1>Youssef Askar</h1>
          <div class="contact-info">
            <p>Dubai, UAE • youssefaskar111@outlook.com • +971 56 658 0292</p>
            <p>
              <a href="https://portfolio-chi-sable-56.vercel.app/">
                portfolio-chi-sable-56.vercel.app
              </a>
            </p>
          </div>
        </header>

        <section class="resume-section">
          <h2>PROFESSIONAL SUMMARY</h2>
          <p>
            Dedicated and innovative Software Engineer with extensive experience
            in architecting and developing high-performance web and mobile
            applications. Proven track record in building complex ecosystems,
            from national sport management platforms to enterprise-grade ERP
            systems and social investment platforms. Expertise in Laravel,
            React, TypeScript, and Microservices architecture.
          </p>
        </section>

        <section class="resume-section">
          <h2>TECHNICAL SKILLS</h2>
          <div class="skill-group">
            <p>
              <strong>Languages:</strong> Bash (SH), CSS, Go (GO), JavaScript
              (JS), PHP, Python (PY), SQL, TypeScript (TS)
            </p>
          </div>
          <div class="skill-group">
            <p>
              <strong>Frameworks:</strong> Electron, Express.js, Fiber, Gin,
              gRPC, Laravel, NestJS, Next.js, React, Tailwind CSS, Vue.js
            </p>
          </div>
          <div class="skill-group">
            <p>
              <strong>Databases:</strong> MySQL, PostgreSQL, Prisma, Redis, SQLx
            </p>
          </div>
          <div class="skill-group">
            <p>
              <strong>DevOps & Tools:</strong> Amazon AWS, Docker, Huawei Cloud,
              Ingress, Kubernetes, Nginx, Agile (Scrum / Kanban)
            </p>
          </div>
          <div class="skill-group">
            <p>
              <strong>Spoken Languages:</strong> Arabic (Native), English
              (Fluent)
            </p>
          </div>
        </section>

        <section class="resume-section">
          <h2>WORK EXPERIENCE</h2>
          <div class="experience-item">
            <div class="item-header">
              <div class="item-title">Reyada Capital</div>
              <div class="item-date">Jan 2024 - Present</div>
            </div>
            <div class="item-subtitle">
              Direct Manager (Software Engineering)
            </div>
            <ul class="features-list">
              <li>Scaled financial infrastructure to support +100k users</li>
              <li>
                Reduced core API response times by <strong>45%</strong> by
                migrating legacy monoliths to Go-based microservices.
              </li>
              <li>
                Optimized cloud infrastructure costs by <strong>20%</strong>{" "}
                across AWS and Huawei Cloud environments.
              </li>
            </ul>
          </div>

          <div class="experience-item">
            <div class="item-header">
              <div class="item-title">TBS</div>
              <div class="item-date">Jan 2023 - Dec 2023</div>
            </div>
            <div class="item-subtitle">Team Lead (Full Stack)</div>
            <ul class="features-list">
              <li>
                Led a team of 8 developers to launch an enterprise ERP,
                resulting in a <strong>30% improvement</strong> in operational
                efficiency for industrial clients.
              </li>
              <li>
                Implemented Agile/Scrum methodologies, reducing time-to-market
                for new features by <strong>25%</strong>.
              </li>
              <li>
                Architected a real-time notification system handling{" "}
                <strong>100k+ events per minute</strong>.
              </li>
            </ul>
          </div>

          <div class="experience-item">
            <div class="item-header">
              <div class="item-title">Rizme Software</div>
              <div class="item-date">Jan 2022 - Dec 2022</div>
            </div>
            <div class="item-subtitle">Backend Developer</div>
            <ul class="features-list">
              <li>
                Engineered the core backend for the national sports platform
                (UAE Boxing), supporting <strong>1k+ active members</strong>.
              </li>
              <li>
                Developed a high-performance news aggregation engine that
                increased user content consumption by <strong>40%</strong>.
              </li>
              <li>
                Maintained a <strong>99.9% transaction success rate</strong> for
                integrated payment gateways and document verification workflows.
              </li>
            </ul>
          </div>

          <div class="experience-item">
            <div class="item-header">
              <div class="item-title">Freelance</div>
              <div class="item-date">Jan 2021 - Present</div>
            </div>
            <div class="item-subtitle">Software Engineer (Mercenary)</div>
            <ul class="features-list">
              <li>
                Delivered custom SaaS solutions for <strong>15+ clients</strong>
                , resulting in a cumulative <strong>150% ROI</strong> within 6
                months.
              </li>
              <li>
                Optimized database schemas for large-scale production data sets,
                reducing storage and query costs by <strong>25%</strong>.
              </li>
            </ul>
          </div>
        </section>

        <section class="resume-section">
          <h2>EDUCATION</h2>
          <div class="experience-item">
            <div class="item-header">
              <div class="item-title">
                Bachelor of Computer Science (In Progress)
              </div>
              <div class="item-date">Jan 2021 - Present</div>
            </div>
            <div class="item-subtitle">
              Elite University of Technology in Navigation Science and Space
              Tech
            </div>
            <p class="item-description">
              Specialized focus on high-performance computing and complex
              systems within the navigation and aerospace domains.
            </p>
          </div>

          <div class="experience-item">
            <div class="item-header">
              <div class="item-title">Autonomous Learning</div>
              <div class="item-date">Continuous</div>
            </div>
            <div class="item-subtitle">
              Self-Learner (Full Stack Development)
            </div>
            <p class="item-description">
              Expertly navigated and mastered various technologies through
              rigorous self-directed study across global documentation,
              technical forums, and open-source communities.
            </p>
          </div>
        </section>

        <section class="resume-section">
          <h2>PROFESSIONAL PROJECTS</h2>

          <For each={projects.filter((p) => p.id === "invesier")}>
            {(project) => (
              <div class="project-item">
                <div class="item-header">
                  <div class="item-title">{project.name.toUpperCase()}</div>
                </div>
                <div class="item-subtitle">
                  {project.tag} ({project.impact})
                </div>
                <p class="item-description">{project.description}</p>
                <ul class="features-list">
                  <For each={project.features.slice(0, 4)}>
                    {(feature) => <li>{feature}</li>}
                  </For>
                </ul>
              </div>
            )}
          </For>

          <div class="project-item">
            <div class="item-header">
              <div class="item-title">GRIDE</div>
            </div>
            <div class="item-subtitle">
              Mobile App & Admin Dashboard (Uber-like Platform)
            </div>
            <p class="item-description">
              Engineered an on-demand transportation ecosystem for exclusive
              resort areas, enabling golf car booking, service scheduling, and
              real-time tracking.
            </p>
            <ul class="features-list">
              <li>On-demand Golf Car Booking (Uber-style)</li>
              <li>Advance Service Scheduling</li>
              <li>Real-time Driver Tracking</li>
              <li>Multi-service Order Management</li>
            </ul>
          </div>

          <div class="project-item">
            <div class="item-header">
              <div class="item-title">CARDO</div>
            </div>
            <div class="item-subtitle">
              IoT & Mobile App (Wearable Connectivity)
            </div>
            <p class="item-description">
              Developed an IoT ecosystem connecting smartphones with wearables
              (smartwatches, earbuds), implementing robust device
              synchronization and real-time user event tracking.
            </p>
            <ul class="features-list">
              <li>Multi-device Bluetooth Synchronization</li>
              <li>Smartwatch & Earbud Integration</li>
              <li>Real-time User Event Tracking</li>
              <li>Hardware-to-Mobile Data Pipelines</li>
            </ul>
          </div>

          <div class="project-item">
            <div class="item-header">
              <div class="item-title">GARMENT ERP</div>
            </div>
            <div class="item-subtitle">
              Enterprise ERP (Fashion Manufacturing)
            </div>
            <p class="item-description">
              Engineered a comprehensive ERP solution for a garment factory,
              managing high-volume cutting orders, style lifecycles, and diverse
              product types across the entire production floor.
            </p>
            <ul class="features-list">
              <li>Cutting Order & Production Tracking</li>
              <li>Style & Material Management</li>
              <li>Custom Product Configuration Types</li>
              <li>Factory-wide Resource Planning</li>
            </ul>
          </div>

          <For each={projects.filter((p) => p.id !== "invesier")}>
            {(project) => (
              <div class="project-item">
                <div class="item-header">
                  <div class="item-title">{project.name.toUpperCase()}</div>
                </div>
                <div class="item-subtitle">
                  {project.tag} ({project.impact})
                </div>
                <p class="item-description">{project.description}</p>
                <ul class="features-list">
                  <For each={project.features.slice(0, 4)}>
                    {(feature) => <li>{feature}</li>}
                  </For>
                </ul>
              </div>
            )}
          </For>
        </section>

        <div
          class="no-print"
          style={{ "margin-top": "40px", "text-align": "center" }}
        >
          <button
            onClick={() => window.print()}
            style={{
              padding: "12px 24px",
              "background-color": "#000",
              color: "#fff",
              border: "none",
              "border-radius": "6px",
              cursor: "pointer",
              "font-weight": "bold",
            }}
          >
            Download as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
