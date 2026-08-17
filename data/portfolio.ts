import { links } from "@/config";

export const navItems = [
  { name: "Hero", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Education", href: "#education" },
] as const;

export const heroContent = {
  status: "AVAILABLE FOR DEPLOYMENT",
  name: links.ownerName,
  headline: ["Building intelligent interfaces for the", "web."],
  role: "FRONTEND-FOCUSED FULL STACK DEVELOPER // AI ENGINEERING",
  primaryCta: { label: "VIEW PROJECTS", href: "#projects" },
  secondaryCta: { label: "DOWNLOAD RESUME", href: "/resume.pdf" },
} as const;

export type ProjectLayout =
  | "featured-large"
  | "compact"
  | "featured-alt"
  | "split"
  | "small";

export type PortfolioProject = {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  layout: ProjectLayout;
  icon?: "external" | "mobile";
};

export const projects: readonly PortfolioProject[] = [
  {
    id: "payment-gateway",
    number: "01",
    title: "3rd Party Payment Gateway API Integration",
    description:
      "Designed and developed RESTful payment APIs for initiation, status tracking, and transactions. Implemented a mock payment workflow with real-time monitoring using Supabase.",
    tags: ["Python", "FastAPI", "Supabase", "REST APIs", "Redis"],
    layout: "featured-alt",
    icon: "external",
  },
  {
    id: "chat-app",
    number: "02",
    title: "Chat-App",
    description:
      "Real-time MERN stack application featuring user authentication, real-time messaging, and group chats.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "JWT"],
    link: "https://github.com/himanshuach/Chat-App",
    image: "/projects/chat-app.png",
    layout: "featured-large",
  },
  {
    id: "kopykitabh",
    number: "03",
    title: "KopyKitabh",
    description:
      "An e-commerce website for buying books with product listings and details.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/himanshuach/KopyKitabh",
    image: "/projects/kopykitabh.png",
    layout: "compact",
  },
  {
    id: "local-ai-agent",
    number: "04",
    title: "LocalAIAgent",
    description:
      "An autonomous agent system designed to run entirely locally, prioritizing data privacy and offline capabilities while maintaining advanced reasoning.",
    tags: ["Python", "LLM"],
    link: "https://github.com/himanshuach/LocalAIAgent",
    image: "/projects/local-ai-agent.png",
    layout: "featured-alt",
  },
  {
    id: "teach-do-it",
    number: "05",
    title: "Teach-Do-It",
    description:
      "Interactive tutorial platform bridging the gap between theoretical learning and practical implementation.",
    tags: ["Vue.js", "Firebase"],
    link: "https://github.com/himanshuach/Teach-Do-It",
    image: "/projects/teach-do-it.png",
    layout: "split",
  },
  {
    id: "bluechat",
    number: "06",
    title: "Bluechat",
    description: "Secure peer-to-peer communication tool.",
    tags: ["WebRTC", "React"],
    link: "https://github.com/himanshuach/Bluechat",
    layout: "small",
    icon: "external",
  },
  {
    id: "reminder-app",
    number: "07",
    title: "Reminder_app",
    description: "Task management with intelligent scheduling.",
    tags: ["Svelte", "Tailwind"],
    link: "https://github.com/himanshuach/Reminder-App",
    layout: "small",
    icon: "mobile",
  },
] as const;

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  companyUrl?: string;
  liveUrl?: string;
  highlights: readonly string[];
};

export const experiences: readonly ExperienceItem[] = [
  {
    id: "obrive",
    role: "Full Stack Intern",
    company: "OBRive",
    location: "Remote",
    period: "June 2026 – July 2026",
    highlights: [
      "Developed responsive web interfaces from Figma designs using Next.js, React, TypeScript, and Tailwind CSS.",
      "Built reusable UI components and collaborated with designers.",
    ],
  },
  {
    id: "weber-technologies",
    role: "Full Stack Intern",
    company: "Weber Technologies",
    period: "Sep 2025 – Dec 2025",
    liveUrl: "https://ll-ten-ivory.vercel.app",
    highlights: [
      "Built and optimized full-stack web applications using React, TypeScript, Supabase, and Tailwind CSS.",
      "Designed responsive landing pages and implemented UI components with shadcn/ui and animations.",
    ],
  },
  {
    id: "united-tours-india",
    role: "Frontend Developer",
    company: "United Tours India",
    period: "Jan 2025 – Apr 2025",
    companyUrl: "https://unitedtoursindia.com",
    highlights: [
      "Redesigned 20+ pages using React and Tailwind CSS, focusing on UI/UX, SEO, and performance optimization (lazy loading, memoization).",
    ],
  },
  {
    id: "achilyon",
    role: "Designing Intern",
    company: "Achilyon",
    location: "Remote",
    period: "Sep 2024 – Dec 2024",
    highlights: [
      "Developed 20+ responsive web pages with a focus on usability.",
      "Assisted in shaping the digital identity and UI/UX design language for core products.",
      "Developed high-fidelity prototypes, wireframes, and user flows to communicate interaction concepts.",
      "Contributed to the creation and maintenance of a unified design system.",
    ],
  },
] as const;

export type TechCategory = {
  id: string;
  title: string;
  skills: readonly string[];
};

export const techStack: readonly TechCategory[] = [
  {
    id: "frontend",
    title: "FRONTEND",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Flutter",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "shadcn/ui",
      "Vue.js",
      "Svelte",
    ],
  },
  {
    id: "backend",
    title: "BACKEND",
    skills: [
      "FastAPI",
      "Node.js",
      "REST APIs",
      "JWT Authentication",
      "Supabase",
      "MongoDB",
      "Firebase",
      "Socket.io",
    ],
  },
  {
    id: "languages",
    title: "LANGUAGES",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "C", "Dart", "HTML/CSS"],
  },
  {
    id: "ai-data",
    title: "AI & DATABASES",
    skills: [
      "LLM Integration",
      "RAG",
      "AI Agents",
      "Prompt Engineering",
      "MongoDB",
      "PostgreSQL",
      "LLMs",
      "LangChain",
      "Vector DBs",
      "Pandas",
    ],
  },
  {
    id: "tools",
    title: "TOOLS & PLATFORMS",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Postman",
      "VS Code",
      "Render",
      "Vercel",
      "Firebase",
      "Netlify",
      "Docker",
      "WebRTC",
      "Figma",
      "AWS",
    ],
  },
] as const;

export type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  period: string;
};

export const education: readonly EducationItem[] = [
  {
    id: "chandigarh-university",
    degree: "BE in Computer Science and Engineering",
    institution: "Chandigarh University",
    period: "July 2021 – May 2025",
  },
] as const;

export const contactContent = {
  badge: "SYSTEM.CONNECTION",
  title: "Let's Connect",
  description:
    "Ready to turn your ideas into digital reality? Whether you have a question, a project proposition, or just want to discuss software architecture, let's build something amazing together.",
  email: {
    label: "Direct Line",
    value: links.ownerEmail,
  },
  phone: {
    label: "Phone",
    value: links.phone,
  },
  network: {
    label: "Network",
    links: [
      { name: "GitHub", href: links.github },
      { name: "LinkedIn", href: links.linkedin },
    ],
  },
} as const;

export const footerLinks = [
  { name: "Email", href: `mailto:${links.ownerEmail}` },
  { name: "LinkedIn", href: links.linkedin },
  { name: "GitHub", href: links.github },
  { name: "Twitter", href: "https://twitter.com/himanshuach" },
] as const;
