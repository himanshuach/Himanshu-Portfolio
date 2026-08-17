import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: "var(--portfolio-bg)",
          surface: "var(--portfolio-surface)",
          nav: "var(--portfolio-nav)",
          text: "var(--portfolio-text)",
          muted: "var(--portfolio-muted)",
          highlight: "var(--portfolio-highlight)",
          accent: "var(--portfolio-accent)",
          border: "var(--portfolio-border)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;

/*
 * LEGACY TAILWIND CONFIG — archived during Figma redesign
 * Previous config included three.js animation utilities, mini-svg-data-uri grid
 * patterns, and extended shadcn color tokens. See `_legacy/README.md`.
 */
