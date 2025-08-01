import type { Metadata } from "next";

export const links = {
  sourceCode: "https://github.com/himanshuach/Himanshu-Portfolio.git",
  ownerName: "Himanshu Raj",
  ownerEmail: "himanshu.raj@example.com",
} as const;

export const siteConfig: Metadata = {
  title: `${links.ownerName}'s Portfolio`,
  description: "A modern, responsive portfolio website showcasing web development projects and skills.",
  keywords: [
    "nextjs",
    "react",
    "typescript",
    "tailwindcss",
    "portfolio",
    "web development",
    "frontend",
    "threejs",
    "framer-motion"
  ],
  authors: {
    name: links.ownerName,
    url: "https://github.com/himanshuach",
  },
} as const;
