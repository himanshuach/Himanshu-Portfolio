# Himanshu Raj — Full-Stack & AI Engineering Portfolio

A minimalist-futuristic, high-performance portfolio showcase built for **Himanshu Raj**, featuring full-page WebGL fragment shader backgrounds, an interactive System Architecture Canvas visualizer, Bento Grid project showcases, searchable tech toolkits, real-time transmission contact engine, and an embedded resume viewer.

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Next.js 15](https://img.shields.io/badge/Framework-Next.js%2015-black)
![React 19](https://img.shields.io/badge/UI-React%2019-61dafb)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)
![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38bdf8)

---

## Key Features & Experience Design

- **WebGL Plasma Aurora Shader**: Full-page interactive WebGL fragment shader rendering smooth animated plasma waves with mouse responsiveness and radial vignette depth.
- **System Architecture Canvas Visualizer**: Real-time HTML5 particle simulation node graph supporting 3 interaction modes (*Neural Net*, *RAG Pipeline*, *Agent Graph*) with mouse attraction physics, network synapse pulse trigger, FPS monitor, and live vector telemetry.
- **AI Engineering Showcase**: Dedicated breakdown of 4 core pillars (*LLM Orchestration*, *RAG Architectures*, *AI Agents*, and *Performance & Ethics*).
- **Select Works Bento Grid**: Interactive layout highlighting production work (FastAPI Payment Gateway, MERN Chat App, LocalAIAgent, WebRTC Bluechat, KopyKitabh, Weber Landing) with detailed modal previews, performance metrics, and feature lists.
- **Engineering Experience & Academic Background**: Clean timeline cards detailing internships (*OBRIVE*, *Weber Technologies*, *United Tours India*, *Achilyon*) and academic degree at *Chandigarh University*.
- **Searchable Tech Toolkit**: Live skill search bar paired with category tabs (*Frontend*, *Backend*, *Languages*, *AI & Databases*, *Tools & Platforms*) and skill highlight indicators.
- **Transmission Contact Engine**: Direct contact line cards with 1-click email copying and an interactive transmission form with live console log simulation.
- **Interactive Resume Modal**: PDF preview viewer modal for instant resume inspection, full-screen view, and 1-click download.
- **Floating Top Dock Navigation**: Glassmorphism navbar with active section intersection observer scroll tracking and mobile drawer navigation.

---

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router & Server/Client Components)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5.8](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Vanilla Glassmorphism CSS design system
- **Graphics & Canvas**: WebGL Fragment Shader + HTML5 2D Canvas Context
- **Icons**: [Lucide React](https://lucide.react.dev/)
- **Deployment**: [Netlify](https://www.netlify.com/) / [Vercel](https://vercel.com/)

---

## Project Structure

```
Himanshu-Portfolio/
├── App.tsx                      # Main single-page application orchestrator
├── data.ts                      # Authoritative data store (Projects, Experiences, Education, Tech, AI Pillars)
├── types.ts                     # TypeScript interface & type definitions
├── app/                         # Next.js App Router root
│   ├── globals.css              # Glassmorphism utilities, animations, and color tokens
│   ├── layout.tsx               # Root HTML layout, metadata, & Google Fonts (Inter, Sora, JetBrains Mono)
│   └── page.tsx                 # Client page entrypoint
├── components/                  # Modern modular UI components
│   ├── AboutSection.tsx         # System thinking narrative & core expertise cards
│   ├── AIEngineeringSection.tsx # System Architecture Canvas visualizer & AI pillars
│   ├── AuroraShaderBackground.tsx # Interactive WebGL Aurora background shader
│   ├── ContactSection.tsx       # Connection cards & simulated transmission engine
│   ├── EducationSection.tsx     # Academic history card
│   ├── ExperienceSection.tsx    # Engineering experience timeline
│   ├── Footer.tsx               # Brand footer & navigation links
│   ├── HeroSection.tsx          # Hero banner, status pill, social links, and CTAs
│   ├── Navigation.tsx           # Floating glass top dock navbar & mobile menu
│   ├── ProjectsSection.tsx      # Bento grid showcase & project detail modal
│   ├── ResumeModal.tsx          # Interactive PDF resume viewer modal
│   └── TechStackSection.tsx     # Searchable technology toolkit with category filters
├── config/                      # Site metadata & owner configuration
│   └── index.ts
├── public/                      # Static assets & resume PDF
│   ├── Himanshu_Dev_1Y0E.pdf
│   └── projects/
├── netlify.toml                 # Netlify deployment configuration
└── tsconfig.json                # TypeScript compiler config
```

---

## Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/himanshuach/Himanshu-Portfolio.git
   cd Himanshu-Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the live application.

---

## Build & Deployment

To generate a production build:

```bash
# Build the application
npm run build

# Preview production build locally
npm run start
```

### Deploying on Netlify / Vercel

The project includes `netlify.toml` for seamless 1-click deployments on Netlify. It can also be deployed to Vercel with zero extra configuration.

---

## Author & Socials

**Himanshu Raj**  
*Frontend-Focused Full Stack Developer // AI Engineering*

- **GitHub**: [@himanshuach](https://github.com/himanshuach)
- **LinkedIn**: [in/r-himanshu](https://linkedin.com/in/r-himanshu)
- **LeetCode**: [himanshuach](https://leetcode.com/himanshuach)
- **Email**: [himanshuach.842@gmail.com](mailto:himanshuach.842@gmail.com)

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
