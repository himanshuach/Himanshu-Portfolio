import type { Metadata } from "next";

export const links = {
  sourceCode: "https://github.com/himanshuach/Himanshu-Portfolio.git",
  ownerName: "Himanshu Raj",
  ownerEmail: "himanshuach.842@gmail.com",
  phone: "+91 7634814232",
  linkedin: "https://linkedin.com/in/himanshuach",
  github: "https://github.com/himanshuach",
  leetcode: "https://leetcode.com/himanshuach",
} as const;

export const siteConfig: Metadata = {
  title: `${links.ownerName}'s Portfolio`,
  description: "Full Stack Developer skilled in ReactJS, Node.js, and UI/UX design. Passionate about building scalable, responsive, and user-friendly web applications.",
  keywords: [
    "fullstack",
    "reactjs",
    "nodejs",
    "nextjs",
    "react",
    "javascript",
    "typescript",
    "mongodb",
    "express",
    "tailwindcss",
    "portfolio",
    "web development",
    "frontend",
    "threejs",
    "framer-motion",
    "backend",
    "mern stack"
  ],
  authors: {
    name: links.ownerName,
    url: links.github,
  },
} as const;
