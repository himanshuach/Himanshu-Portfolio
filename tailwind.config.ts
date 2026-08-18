import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./App.tsx",
    "./data.ts",
    "./types.ts",
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
