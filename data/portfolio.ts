import { links } from "@/config";

export const navItems = [
  { name: "Hero", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Tech Stack", href: "#tech-stack" },
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
    id: "chat-app",
    number: "01",
    title: "Chat-App",
    description:
      "A real-time messaging platform engineered for low latency and high concurrency, featuring end-to-end encryption and a modern interface.",
    tags: ["React", "Node.js", "Socket.io"],
    link: "https://github.com/himanshuach/Chat-App",
    image: "/projects/chat-app.png",
    layout: "featured-large",
  },
  {
    id: "kopykitabh",
    number: "02",
    title: "KopyKitabh",
    description: "Digital learning resource aggregator.",
    tags: ["Next.js", "MongoDB"],
    link: "https://github.com/himanshuach/KopyKitabh",
    image: "/projects/kopykitabh.png",
    layout: "compact",
  },
  {
    id: "local-ai-agent",
    number: "03",
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
    number: "04",
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
    number: "05",
    title: "Bluechat",
    description: "Secure peer-to-peer communication tool.",
    tags: ["WebRTC", "React"],
    link: "https://github.com/himanshuach/Bluechat",
    layout: "small",
    icon: "external",
  },
  {
    id: "reminder-app",
    number: "06",
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
  period: string;
  highlights: readonly string[];
};

export const experiences: readonly ExperienceItem[] = [
  {
    id: "frontend-developer",
    role: "Frontend Developer",
    company: "United Tours India",
    period: "Present",
    highlights: [
      "Engineered responsive, high-performance web interfaces using modern frontend frameworks.",
      "Optimized load times and improved core web vitals for the main consumer platform.",
      "Collaborated cross-functionally to integrate complex APIs and robust state management.",
    ],
  },
  {
    id: "design-intern",
    role: "Designing Intern",
    company: "Achilyon",
    period: "Past",
    highlights: [
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
    skills: ["React", "Next.js", "Vue.js", "Svelte", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "BACKEND",
    skills: ["Node.js", "MongoDB", "Firebase", "Socket.io"],
  },
  {
    id: "languages",
    title: "LANGUAGES",
    skills: ["JavaScript", "TypeScript", "Python", "HTML/CSS"],
  },
  {
    id: "ai-data",
    title: "AI & DATA",
    skills: ["LLMs", "LangChain", "Vector DBs", "Pandas"],
  },
  {
    id: "tools",
    title: "TOOLS & PLATFORMS",
    skills: ["Git", "Docker", "WebRTC", "Figma", "AWS"],
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
