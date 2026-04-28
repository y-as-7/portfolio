import { type Experience, type SkillCategory } from "../types";

export const experiences: Experience[] = [
  {
    id: "reyada",
    role: "Direct Manager (Software Engineering)",
    company: "Reyada Capital",
    date: "Jan 2024 - Present",
    description: [
      "Led the development of a new financial platform (Invesier) from scratch, utilizing Golang to create scalable microservices, resulting in a significant increase in transaction efficiency.",
      "Scaled financial infrastructure to support a massive global user base, ensuring high availability and fault tolerance.",
      "Optimized cloud infrastructure costs across AWS and Huawei Cloud environments through efficient resource orchestration."
    ],
    skills: ["Golang", "AWS", "Huawei Cloud", "Microservices", "System Architecture"]
  },
  {
    id: "tbs",
    role: "Team Lead (Full Stack)",
    company: "TBS",
    date: "Jan 2024 - Dec 2025",
    description: [
      "Architected and built an enterprise ERP system from scratch for industrial clients, significantly improving operational efficiency.",
      "Led a team of developers in an Agile environment, drastically reducing time-to-market for critical modules.",
      "Designed a high-throughput real-time notification engine using event-driven architecture."
    ],
    skills: ["Full Stack", "Agile Leadership", "Event-Driven Architecture", "Enterprise Apps"]
  },
  {
    id: "rizme",
    role: "Backend Developer",
    company: "Rizme Software",
    date: "Jan 2023 - Dec 2024",
    description: [
      "Architected a microservices-based streaming platform using Go and Kubernetes, capable of handling high-concurrency boxing events.",
      "Reduced video delivery latency by 40% through the implementation of a multi-tier MediaMTX origin-edge cluster and BunnyCDN integration.",
      "Automated infrastructure provisioning using Terraform, ensuring environment parity between local development, staging, and production.",
      "Developed a custom Laravel 12 admin dashboard with Filament v3 for real-time management of boxing federations, players, and live events.",
      "Implemented a resilient transactional email system using Go workers and Redis queues to handle user onboarding and payment confirmations."
    ],
    skills: ["Go", "Kubernetes", "Terraform", "MediaMTX", "BunnyCDN", "Stripe API", "Redis"]
  },
  {
    id: "freelance",
    role: "Software Engineer",
    company: "Freelance",
    date: "Jan 2021 - Present",
    description: [
      "Delivered custom E-commerce and SaaS solutions for numerous clients, driving substantial ROI for their platforms.",
      "Optimized database schemas for large-scale production data sets, substantially reducing storage and query costs."
    ],
    skills: ["SaaS Delivery", "Database Optimization", "Client Architecture"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Systems",
    skills: [
      { name: "Golang (Go)" },
      { name: "PHP / Laravel" },
      { name: "Python" },
      { name: "C / C++" },
      { name: "REST APIs" },
      { name: "gRPC" },
      { name: "Fiber" },
      { name: "Stripe API" },
      { name: "Resend" }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "TypeScript" },
      { name: "React / Next.js" },
      { name: "Solid.js" },
      { name: "Vue.js" },
      { name: "TanStack Query" },
      { name: "hls.js" },
      { name: "Tailwind CSS" }
    ]
  },
  {
    title: "Infrastructure & DevOps",
    skills: [
      { name: "AWS" },
      { name: "Huawei Cloud" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Terraform" },
      { name: "MediaMTX" },
      { name: "BunnyCDN" },
      { name: "Nginx" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Redis" },
      { name: "TaurusDB" },
      { name: "DCS (Redis)" },
      { name: "Prisma" }
    ]
  }
];
