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
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently working on exciting projects",
    subtitle: "Full Stack Development",
    description: "Building modern web applications with cutting-edge technologies.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's start a project journey together",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    des: "A full-stack e-commerce platform with user authentication, payment integration, and admin dashboard.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "#",
    sourceCode: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    des: "A collaborative task management application with real-time updates and team collaboration features.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "#",
    sourceCode: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    des: "A modern portfolio website with 3D animations and interactive elements built with Next.js and Three.js.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "#",
    sourceCode: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    des: "A weather dashboard with real-time data, interactive maps, and responsive design for mobile and desktop.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "#",
    sourceCode: "#",
  },
] as const;

export const testimonials = [
  {
    quote: `Working with ${links.ownerName} was an excellent experience. His attention to detail and technical expertise helped deliver a project that exceeded our expectations.`,
    name: "Sarah Johnson",
    title: "Project Manager at TechCorp",
  },
  {
    quote: `${links.ownerName} demonstrated exceptional problem-solving skills and delivered high-quality code that was both maintainable and scalable.`,
    name: "Michael Chen",
    title: "Senior Developer at InnovateLab",
  },
  {
    quote: `The collaboration with ${links.ownerName} was smooth and professional. He consistently met deadlines and provided valuable insights throughout the project.`,
    name: "Emily Rodriguez",
    title: "Product Owner at StartupXYZ",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Developed responsive web applications using React.js and modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    desc: "Built end-to-end web applications with Node.js, React, and MongoDB.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/himanshuach",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/r-himanshu",
  },
] as const;

export const techStack = {
  stack1: ["JavaScript", "React.js", "Next.js", "TypeScript"],
  stack2: ["Node.js", "Express.js", "MongoDB"],
  stack3: ["Tailwind CSS", "Three.js", "Framer Motion"],
  stack4: ["Git", "Figma", "Postman", "Docker"]
} as const;
