import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Full Stack Developer",
    description: "Passionate about building scalable, responsive, and user-friendly web applications",
    className: "lg:col-span-4 md:col-span-4 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-2 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "",
    className: "lg:col-span-2 md:col-span-2 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about creating innovative solutions",
    description: "",
    className: "lg:col-span-2 md:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently working on Chat App using MERN Stack",
    description: "",
    className: "lg:col-span-4 md:col-span-4 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "flex justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Chat-App",
    des: "A real-time chat application built with MERN stack featuring user authentication, real-time messaging, group chats, and modern UI/UX design. Includes features like message encryption, file sharing, and responsive design.",
    img: "/collaboration.svg",
    iconLists: ["/re.svg", "/ts.svg", "/fm.svg"],
    link: "https://github.com/himanshuach/Chat-App",
  },
  {
    id: 2,
    title: "KopyKitabh",
    des: "A comprehensive e-commerce platform for book purchases with advanced features including product catalog, shopping cart, user authentication, payment integration, and admin dashboard for inventory management.",
    img: "/collaboration.svg",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/fm.svg"],
    link: "https://github.com/himanshuach/KopyKitabh",
  },
  {
    id: 3,
    title: "LocalAIAgent",
    des: "An intelligent AI agent with RAG (Retrieval-Augmented Generation) implementation for local AI processing, knowledge retrieval, and natural language understanding with custom training capabilities.",
    img: "/collaboration.svg",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg", "/fm.svg"],
    link: "https://github.com/himanshuach/LocalAIAgent",
  },
  {
    id: 4,
    title: "Teach-Do-It",
    des: "An interactive educational platform featuring learning modules, progress tracking, quizzes, and gamified learning experiences. Built with modern web technologies for optimal user engagement.",
    img: "/collaboration.svg",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/fm.svg"],
    link: "https://github.com/himanshuach/Teach-Do-It",
  },
  {
    id: 5,
    title: "Bluechat",
    des: "A modern real-time chat application with sleek UI/UX design, featuring instant messaging, user profiles, message history, and cross-platform compatibility for seamless communication.",
    img: "/collaboration.svg",
    iconLists: ["/re.svg", "/ts.svg", "/fm.svg"],
    link: "https://github.com/himanshuach/Bluechat",
  },
  {
    id: 6,
    title: "Reminder_app",
    des: "A feature-rich reminder application built with Flutter, offering task management, notifications, categories, priority levels, and beautiful Material Design interface for enhanced productivity.",
    img: "/collaboration.svg",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg", "/fm.svg"],
    link: "https://github.com/himanshuach/Reminder-App",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: [
      "Led the development of United Tours India's complete web platform",
      "Enhanced UI/UX by redesigning 20+ pages with Tailwind CSS",
      "Implemented SEO optimization strategies using modern React toolkits",
      "Built a 100% functional web solution using React.js",
      "Optimized page performance by 30% through advanced JavaScript techniques"
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Designing Intern",
    desc: [
      "Enhanced UI/UX design for 5+ client projects",
      "Achieved 30% improvement in user engagement metrics",
      "Implemented strategic design enhancements boosting performance by 20%",
      "Designed and developed 20+ responsive web pages",
      "Maintained 95% client satisfaction rate",
      "Collaborated with cross-functional teams"
    ],
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
] as const;

export const socialLinks = [
  {
    name: "GitHub",
    icon: "/git.svg",
    link: "https://github.com/himanshuach",
  },
  {
    name: "LinkedIn",
    icon: "/link.svg",
    link: "https://linkedin.com/in/himanshuach",
  },
] as const;

export const approach = [
  {
    id: "01",
    title: "Discuss the project idea",
    description:
      "We begin by thoroughly understanding your project requirements, goals, and vision to ensure we're aligned on the desired outcome.",
    className: "md:col-span-3 lg:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: "02",
    title: "Research and planning",
    description:
      "I conduct comprehensive research on the latest technologies and best practices to create an optimal solution architecture.",
    className: "md:col-span-3 lg:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: "03",
    title: "Development and testing",
    description:
      "I develop the solution using modern technologies while maintaining high code quality and comprehensive testing throughout the process.",
    className: "md:col-span-3 lg:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: "04",
    title: "Deployment and maintenance",
    description:
      "I ensure smooth deployment and provide ongoing maintenance and support to keep your application running optimally.",
    className: "md:col-span-3 lg:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const recentProjects = [
  {
    id: "1",
    title: "Chat-App",
    des: "Real-time messaging application with user authentication and group chat functionality using MERN stack",
    img: "/collaboration.svg",
    iconLists: ["/re.svg", "/ts.svg", "/fm.svg"],
    link: "https://github.com/himanshuach/Chat-App",
  },
  {
    id: "2",
    title: "KopyKitabh",
    des: "E-commerce platform for book purchases with comprehensive product management",
    img: "/collaboration.svg",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/fm.svg"],
    link: "https://github.com/himanshuach/KopyKitabh",
  },
  {
    id: "3",
    title: "LocalAIAgent",
    des: "Local AI agent with RAG implementation for knowledge retrieval and processing",
    img: "/collaboration.svg",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg", "/fm.svg"],
    link: "https://github.com/himanshuach/LocalAIAgent",
  },
  {
    id: "4",
    title: "Teach-Do-It",
    des: "Educational website with interactive learning modules and content",
    img: "/collaboration.svg",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/fm.svg"],
    link: "https://github.com/himanshuach/Teach-Do-It",
  },
  {
    id: "5",
    title: "Bluechat",
    des: "Modern real-time chat application with responsive design",
    img: "/collaboration.svg",
    iconLists: ["/re.svg", "/ts.svg", "/fm.svg"],
    link: "https://github.com/himanshuach/Bluechat",
  },
  {
    id: "6",
    title: "Reminder_app",
    des: "Flutter-based reminder app with clean UI and task management features",
    img: "/collaboration.svg",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg", "/fm.svg"],
    link: "https://github.com/himanshuach/Reminder-App",
  },
] as const;

export const skills = [
  {
    id: 1,
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: 2,
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
  },
  {
    id: 3,
    title: "Languages",
    skills: ["C++", "C", "JavaScript", "Dart", "Python"],
  },
  {
    id: 4,
    title: "Tools & Platforms",
    skills: ["Git", "Postman", "VS Code", "Firebase"],
  },
] as const;

export const certifications = [
  {
    id: 1,
    name: "ReactJs Certification by Infosys - SpringBoard",
  },
  {
    id: 2,
    name: "CSS3 Certification by Infosys - SpringBoard",
  },
  {
    id: 3,
    name: "JavaScript Certification by Infosys - SpringBoard",
  },
] as const;
