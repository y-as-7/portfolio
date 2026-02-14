export interface Project {
  id: string;
  name: string;
  tag: string;
  impact: string;
  problem: string;
  journey?: { title: string; subtitle: string };
  mission?: string;
  vision?: string;
  story?: string;
  image: string;
  blurhash: string;
  images: string[];
  imageHashes: string[];
  desktopImages?: string[];
  description: string;
  colors: { primary: string; secondary: string };
  links?: { appStore?: string; googlePlay?: string; website?: string };
  features: string[];
  variant: "featured" | "regular";
}

export const projects: Project[] = [
  {
    id: "invesier",
    name: "invesier",
    tag: "Mobile App",
    impact: "1M+ Users",
    problem: "Invesier was founded in 2024 with a mission to democratize investment education and make financial literacy accessible to everyone.",
    journey: {
      title: "Our Journey to Redefine Social Connections",
      subtitle: "From sharing simple posts to building vibrant networks, discover how our platform is transforming the way people connect, engage, and grow together."
    },
    mission: "At Invesier, we believe that financial education should be engaging, practical, and accessible to everyone. Our mission is to break down the barriers to investment education and create a new generation of confident, knowledgeable investors.",
    vision: "At Invesier, we make financial education fun, social, and hands-on. Through gamified learning, virtual trading, and a vibrant community, users gain real-world investing skills in an engaging, risk-free environment.",
    story: "Invesier was founded in 2024 with a mission to democratize investment education and make financial literacy accessible to everyone. We recognized that traditional financial education often fails to engage learners and lacks practical application.\n\nOur platform bridges this gap by providing a comprehensive environment where users can learn investment concepts, practice strategies using virtual currency, and connect with a community of like-minded individuals.\n\nThrough our innovative approach combining education, social networking, and gamification, we're building the future of financial education and empowering the next generation of confident investors.",
    image: "/images/invesier_battle_ai.webp",
    blurhash: "L007N*j[00ay00j[00ay00j[00ay",
    images: [
      "/images/invesier_home.webp",
      "/images/invesier_ranking.webp",
      "/images/invesier_trading.webp"
    ],
    imageHashes: [
      "L00000fQfQfQfQfQfQfQfQfQfQfQ",
      "L00000fQfQfQfQfQfQfQfQfQfQfQ",
      "L00000fQfQfQfQfQfQfQfQfQfQfQ",
      "L00000fQfQfQfQfQfQfQfQfQfQfQ",
      "L00000fQfQfQfQfQfQfQfQfQfQfQ",
      "L00000fQfQfQfQfQfQfQfQfQfQfQ",
      "L00000fQfQfQfQfQfQfQfQfQfQfQ"
    ],
    desktopImages: [
      "/images/invesier_studio_dashboard.webp",
      "/images/invesier_studio_settings.webp",
      "/images/invesier_studio_login.webp"
    ],
    description: "Empowering investors through education, practice, and community. Learn, Chase and Challenge.",
    colors: { primary: "34, 197, 94", secondary: "16, 185, 129" },
    links: {
      appStore: "https://apps.apple.com/eg/app/invesier/id6751276435",
      googlePlay: "https://play.google.com/store/apps/details?id=com.reyada.invesier",
      website: "https://invesier.com"
    },
    features: [
      "Virtual Investment Practice",
      "Social Networking for Investors",
      "Educational Resources",
      "Competitive Ranking System",
      "Live Investment Battles",
      "Real-time Trading Competition",
      "Interactive Gifting & Rewards",
      "Comment & Reply System",
      "Follow System (Fans, Mates, Pioneers)",
      "Post & Share Content",
      "Personalized Feeds",
      "Risk-free Learning Environment",
      "Live Video Streaming & Co-hosting",
      "Real-time Market Data Feeds",
      "Multi-currency Wallet System",
      "Trading Competitions & Challenges",
      "Push Notifications & Real-time Updates",
      "TradingView Chart Integration",
      "Position Management & P&L Tracking",
      "Dark & Light Mode Support",
      "Multi-language Support",
      "Expert Verification System",
      "CloudFront CDN",
      "Kubernetes Deployment",
      "Microservices Architecture"
    ],
    variant: "featured"
  },
  {
    id: "checkout-forex",
    name: "checkout forex",
    tag: "Website",
    impact: "10k+ Monthly Visitors",
    problem: "Connect with top-rated forex brokers, access real-time market data, and learn from expert insights to accelerate your trading success in the global financial markets.",
    image:  "/images/checkout_forex_hero.webp",
    blurhash: "LGF5?^Y7%M%Mvp%M_3j[?^%M%M%M",
    images: [
      "/images/checkout_forex_hero.webp",
      "/images/checkout_forex_directory.webp",
      "/images/checkout_forex_markets.webp",
      "/images/checkout_forex_articles.webp"
    ],
    imageHashes: [
      "LGF5?^Y7%M%Mvp%M_3j[?^%M%M%M",
      "LGF5?^Y7%M%Mvp%M_3j[?^%M%M%M", 
      "LGF5?^Y7%M%Mvp%M_3j[?^%M%M%M",
      "LGF5?^Y7%M%Mvp%M_3j[?^%M%M%M"
    ],
    desktopImages: [
      "/images/checkout_forex_hero.webp",
      "/images/checkout_forex_directory.webp",
      "/images/checkout_forex_markets.webp"
    ],
    description: "Professional forex broker comparison platform with real-time market data and educational resources.",
    colors: { primary: "14, 165, 233", secondary: "6, 182, 212" },
    features: [
      "Professional Admin Dashboard (Filament 4)",
      "Advanced Content Management System",
      "User Management & Role-based Permissions",
      "Media Management & File Processing",
      "Settings Management System",
      "Content Moderation & Review System",
      "Forex Broker Directory & Comparison",
      "Broker Rating & Review System",
      "Multi-variant Broker Listings",
      "Real-time Market Data Integration",
      "Financial News Aggregation System",
      "Market Analysis & Updates",
      "Trading Educational Resources",
      "Learn Video Content Management",
      "Multi-channel Authentication System",
      "Social Login (Google & Facebook)",
      "User Profile Management",
      "Email Verification System",
      "Password Reset & Security",
      "User Activity Tracking",
      "RESTful API Architecture",
      "Multiple News Provider Integration",
      "AlphaVantage Financial Data API",
      "Finnhub Market Data API",
      "NewsAPI Integration",
      "Polygon Financial Data API",
      "External API Rate Limiting",
      "React 19 Frontend with Inertia.js v2",
      "Responsive Mobile-first Design",
      "Dark & Light Mode Support",
      "Multi-language Support (i18n)",
      "RTL (Right-to-Left) Language Support",
      "Advanced Search & Filtering",
      "Dynamic Content Loading",
      "Laravel Octane High Performance",
      "Laravel Horizon Queue Management",
      "Background Job Processing",
      "Database Query Optimization",
      "Media Library with Image Processing",
      "Caching Strategy Implementation",
      "SEO Optimization Features",
      "Sitemap Generation",
      "Meta Data Management",
      "Open Graph Support",
      "Structured Data Implementation",
      "URL Slug Management",
      "Email Notification System",
      "Contact Form Management",
      "Slack Integration for Notifications",
      "Multi-provider Email Services",
      "Screenshot Generation API",
      "Laravel Sanctum API Authentication",
      "CSRF Protection",
      "SQL Injection Prevention",
      "XSS Protection",
      "Rate Limiting",
      "Secure File Upload",
      "Article Publishing System",
      "Featured Content Management",
      "Reading Time Calculation",
      "View Count Tracking",
      "Content Categorization",
      "Tag Management System",
      "Database Migration System",
      "Model Factories for Testing",
      "Soft Delete Implementation",
      "Data Export Capabilities",
      "Backup Configuration",
      "Pest Testing Framework v4",
      "Laravel Pint Code Formatting",
      "API Documentation Generation",
      "Modern Build Tools (Vite)",
      "TypeScript Support",
      "ESLint & Prettier Integration"
    ],
    variant: "featured"
  },
  {
    id: "uae-boxing-federation",
    name: "uae boxing federation",
    tag: "Website",
    impact: "1k+ Members",
    problem: "The official digital ecosystem for the UAE Boxing Federation, managing national champions, tournaments, and a multi-role athletic community with 1k+ members.",
    image: "/images/uae_boxing_hero.webp",
    blurhash: "LnHV6nWB2yk8pyo0adRj00WBngjc",
    images: [
      "/images/uae_boxing_hero.webp",
      "/images/uae_boxing_news.webp",
      "/images/uae_boxing_stories.webp",
      "/images/uae_boxing_about.webp",
      "/images/uae_boxing_tournament.webp",
      "/images/uae_boxing_gallery_hero.webp",
      "/images/uae_boxing_gallery_grid.webp",
      "/images/uae_boxing_live_streaming.webp",
      "/images/uae_boxing_registration.webp",
      "/images/uae_boxing_login.webp",
      "/images/uae_boxing_shop.webp",
      "/images/uae_boxing_gallery_extended.webp"
    ],
    imageHashes: [
      "LnHV6nWB2yk8pyo0adRj00WBngjc",
      "LnHV6nWB2yk8pyo0adRj00WBngjc",
      "LnHV6nWB2yk8pyo0adRj00WBngjc",
      "LnHV6nWB2yk8pyo0adRj00WBngjc",
      "LnHV6nWB2yk8pyo0adRj00WBngjc",
      "LnHV6nWB2yk8pyo0adRj00WBngjc",
      "LnHV6nWB2yk8pyo0adRj00WBngjc",
      "LnHV6nWB2yk8pyo0adRj00WBngjc",
      "LnHV6nWB2yk8pyo0adRj00WBngjc",
      "LnHV6nWB2yk8pyo0adRj00WBngjc",
      "LnHV6nWB2yk8pyo0adRj00WBngjc",
      "LnHV6nWB2yk8pyo0adRj00WBngjc"
    ],
    description: "Official digital ecosystem for national boxing federation with tournament and member management.",
    colors: { primary: "239, 68, 68", secondary: "220, 38, 38" },
    features: [
      "National Champion Showcase & Power Ratings",
      "Complex Multi-Role Registration (Athlete, Coach, Club, Referee)",
      "Advanced Tournament & Event Management System",
      "Boxing News & Media Publication Engine",
      "Governance & Leadership Transparency Hub",
      "Automated QR Code Identity Generation",
      "Secure Document Verification (Medical/Identity/License)",
      "Multi-channel Notification System",
      "Email & Phone Verification Workflows",
      "Club Affiliation & Membership Tracking",
      "React 19 with Inertia.js v2 Architecture",
      "Complete Multi-language Support (English/Arabic)",
      "Native RTL (Right-to-Left) UI Optimization",
      "Responsive Mobile-First Interface",
      "Advanced Micro-animations for Premium UX",
      "Professional Admin Dashboard (Filament 4)",
      "Spatie Media Library for Asset Management",
      "JSON-based Translatable Content Architecture",
      "Laravel 12 High-Performance Core",
      "SEO & Open Graph Optimization"
    ],
    variant: "regular"
  },
  {
    id: "green-diamond-erp",
    name: "green diamond system erp",
    tag: "Enterprise ERP",
    impact: "Unified Operations",
    problem: "Managing complex industrial and financial ecosystems with fragmented tools leads to inefficiency and data loss.",
    mission: "To provide an all-in-one, high-performance ERP solution that integrates storage, finance, HR, and sales into a single, secure digital fortress.",
    vision: "A unified digital ecosystem where every organizational unit operates in perfect synchrony.",
    story: "The Green Diamond System ERP was architected as the ultimate command center for modern enterprises. By consolidating disparate modules—from inventory management to financial statements—it ensures data integrity and operational peak performance.",
    image: "/images/green_diamond_erp_dashboard.png",
    blurhash: "LnHV6nWB2yk8pyo0adRj00WBngjc",
    images: [
      "/images/green_diamond_erp_dashboard.png",
    ],
    imageHashes: [
      "LnHV6nWB2yk8pyo0adRj00WBngjc",
    ],
    description: "Advanced multi-module Enterprise Resource Planning system for holistic industrial and financial management.",
    colors: { primary: "34, 197, 94", secondary: "16, 185, 129" },
    features: [
      "Dashboard & General Global Reports",
      "Storage: Documents, Files & Warehouse Management",
      "Organizations Mapping & Subsidiary Storages",
      "Products, Inventories & Supply Chain",
      "Suppliers & Cross-Warehouse Transfer Requests",
      "Shield: High-Security Role-Based Access Controls",
      "Product Categories & Main Inventory Oversight",
      "Shipping Companies & Multimodal Logistics",
      "Customers, Leads & Strategic Client Contracts",
      "Sales Engine: Report Pages & Service Invoices",
      "Accounts: Finance Statements & Daily Entries",
      "Accounts Tree & Balance Sheet Analysis",
      "Income Sheets & Performance Analytics",
      "Human Resource: Attendance & Employee Records",
      "Contracts, Departments & Personnel Requests",
      "Task Management & Workflow Automation",
      "Zone: Multilateral Country & Region Support",
      "Advanced System Logs & Audit Trails",
      "Modular Settings & Enterprise Configuration",
      "Green Diamond Core Integration"
    ],
    variant: "featured"
  }
];
