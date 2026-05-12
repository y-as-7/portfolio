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
            <p>Mansoura, Egypt • +20 110 481 4728 • <a href="mailto:youssefaskar111@outlook.com">youssefaskar111@outlook.com</a></p>
            <p>
              <a href="https://portfolio-chi-sable-56.vercel.app/" target="_blank" rel="noopener noreferrer">
                portfolio-chi-sable-56.vercel.app
              </a>
            </p>
          </div>
        </header>

        <section class="resume-section">
          <h2>PROFESSIONAL SUMMARY</h2>
          <p>
            Senior Software Engineer dedicated to architecting and building
            scalable, high-performance applications from the ground up.
            Expertise in designing robust system architectures, optimizing
            backend efficiency, and leading technical teams to deliver
            excellence in complex environments. Passionate about engineering
            well-structured, maintainable codebases that drive long-term
            success.
          </p>
        </section>

        <section class="resume-section">
          <h2>TECHNICAL SKILLS</h2>
          <div class="skill-group">
            <p>
              <strong>Languages:</strong> <strong>Golang</strong>,
              TypeScript, PHP, Python, SQL, Bash, CSS, JavaScript
            </p>
          </div>
          <div class="skill-group">
            <p>
              <strong>Frameworks:</strong> Fiber, Gin, gRPC, SolidJS, NestJS, Next.js,
              React, Laravel, Tailwind CSS, TanStack Query, hls.js, Express.js
            </p>
          </div>
          <div class="skill-group">
            <p>
              <strong>Databases:</strong> PostgreSQL, MySQL, Redis, SQLx, Prisma
            </p>
          </div>
          <div class="skill-group">
            <p>
              <strong>DevOps & Tools:</strong> Docker, Kubernetes, Terraform,
              Huawei Cloud, MediaMTX, Cloudflare Stream, BunnyCDN, Amazon AWS, Nginx
            </p>
          </div>
          <div class="skill-group">
            <p>
              <strong>Spoken Languages:</strong> Arabic, English
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
              <li>
                Led the development of a new financial platform (Invesier) <strong>from scratch</strong>, utilizing <strong>Golang</strong> to create scalable microservices, resulting in a <strong>significant increase</strong> in transaction efficiency.
              </li>
              <li>
                Scaled financial infrastructure to support <strong>a massive global user base</strong>, ensuring high availability and fault tolerance.
              </li>
              <li>
                Optimized cloud infrastructure costs across AWS and Huawei Cloud environments through efficient <strong>resource orchestration</strong>.
              </li>
            </ul>
          </div>

          <div class="experience-item">
            <div class="item-header">
              <div class="item-title">TBS</div>
              <div class="item-date">Jan 2024 - Dec 2025</div>
            </div>
            <div class="item-subtitle">Team Lead (Full Stack)</div>
            <ul class="features-list">
              <li>
                Architected and built an enterprise ERP system <strong>from scratch</strong> for industrial clients, <strong>significantly</strong> improving operational efficiency.
              </li>
              <li>
                Led a <strong>team of developers</strong> in an Agile environment, <strong>significantly</strong> reducing time-to-market for critical modules.
              </li>
              <li>
                Managed <strong>VPS infrastructure</strong> and automated <strong>application deployments</strong>, ensuring stability and seamless release cycles.
              </li>
            </ul>
          </div>

          <div class="experience-item">
            <div class="item-header">
              <div class="item-title">Rizme Software</div>
              <div class="item-date">Jan 2023 - Dec 2024</div>
            </div>
            <div class="item-subtitle">Backend Developer</div>
            <ul class="features-list">
              <li>
                Developed a custom <strong>Laravel 12</strong> admin dashboard with <strong>Filament v3</strong> for real-time management of boxing federations, players, and live events.
              </li>
              <li>
                Built responsive and interactive frontend interfaces using <strong>React</strong>, integrated within the Laravel ecosystem.
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
                Delivered custom <strong>E-commerce</strong> and SaaS solutions for <strong>numerous clients</strong>, driving <strong>substantial ROI</strong>.
              </li>
              <li>
                Optimized database schemas for large-scale production data sets, <strong>substantially</strong> reducing storage and query costs.
              </li>
            </ul>
          </div>
        </section>

        <section class="resume-section">
          <h2>EDUCATION</h2>

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
                <div class="item-subtitle">{project.tag}</div>
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
                <div class="item-subtitle">{project.tag}</div>
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
