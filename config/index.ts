import type { Metadata } from "next";

export const links = {
  sourceCode: "https://github.com/himanshuach/Himanshu-Portfolio.git",
  ownerName: "Himanshu Raj",
  ownerEmail: "himanshuach.842@gmail.com",
  phone: "+91 9470283413",
  linkedin: "https://linkedin.com/in/r-himanshu",
  github: "https://github.com/himanshuach",
  leetcode: "https://leetcode.com/himanshuach",
} as const;

export const siteConfig: Metadata = {
  title: `${links.ownerName} | Frontend-Focused Full Stack Developer`,
  description:
    "Portfolio of Himanshu Raj — frontend-focused full stack developer building intelligent interfaces, AI engineering projects, and high-performance web experiences.",
  keywords: [
    "fullstack",
    "frontend",
    "typescript",
    "nextjs",
    "react",
    "ai engineering",
    "portfolio",
    "web development",
    "tailwindcss",
  ],
  authors: {
    name: links.ownerName,
    url: links.github,
  },
} as const;
