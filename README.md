# Dion Stacey Sellar — 3D Liquid Glass Portfolio

A production-ready, futuristic 3D interactive professional portfolio website for **Dion Stacey Sellar**, a Software Engineering undergraduate at Plymouth University (NSBM) and aspiring AI & Full-Stack Developer.

Built with a sophisticated **Liquid Glass design system**, 3D workspace canvas, smooth animations, and complete **Dark + Light theme mode** support.

---

## 🌟 Core Highlights

- **Liquid Glass Design System**: Deep refraction, edge highlights, soft internal glow, layered transparency, backdrop blur, cursor-following light highlights, and depth-aware shadows.
- **Dark + Light Theme System**: Instant theme switching without reload, centralized CSS variables, `localStorage` persistence, and automatic `prefers-color-scheme` operating system detection.
- **3D Workstation & Constellation**: Powered by **Three.js**, **React Three Fiber (R3F)**, and **Drei**. Includes floating glass workstation octahedron, neural particle cloud wave, interactive skill constellation, and a holographic 3D AI core for the flagship **JARVIS** project.
- **Theme-Adaptive 3D Lighting**: 3D materials, lights, and environment automatically transform between dark glowing cyber atmosphere and bright studio light mode.
- **Flagship Project — JARVIS**: Detailed visual showcase of the local-first desktop AI assistant combining voice synthesis (Edge TTS), local LLM reasoning (Ollama/Llama 3), and vision analysis (LLaVA).
- **Building Next Roadmap**: Grid of 15 planned project concepts clearly labeled as Planned or In Development with status badges and numbered IDs.
- **Academic Credentials**: Plymouth University BSc (Hons) Software Engineering degree timeline delivered through NSBM Green University (2026–2029).
- **Interactive Journey**: Vertical interactive timeline tracing computer science milestones.
- **Performance & Accessibility**: Mobile adaptive quality reduction, lazy-loaded components, keyboard focus visibility, and `prefers-reduced-motion` compliance.

---

## 🛠️ Technology Stack

- **Framework**: React 18, Vite, TypeScript
- **3D Engine**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animations**: Framer Motion
- **Styling**: Modern CSS, CSS Variables, Tailwind CSS
- **Icons**: Lucide React

---

## 📁 Project Architecture

```
src/
├── components/
│   ├── 3d/
│   │   ├── HeroScene.tsx        # Interactive 3D Workstation Core & Lighting
│   │   ├── JarvisCore3D.tsx     # Holographic AI Core for flagship project
│   │   ├── NeuralParticles.tsx  # 3D Point-Cloud wave mesh
│   │   └── TechOrbit.tsx        # 3D Skill Capsule Constellation
│   ├── About.tsx                # Bio copy, terminal snippet & 4 Liquid Glass focus cards
│   ├── BuildingNext.tsx         # 15 planned project concepts grid
│   ├── Contact.tsx              # Contact form with validation & social links
│   ├── CustomCursor.tsx         # Liquid cursor ring for desktop
│   ├── Education.tsx            # Plymouth University (NSBM) degree details
│   ├── Footer.tsx               # Minimal footer with dynamic current year
│   ├── GitHubSection.tsx        # "Building in Public" developer card
│   ├── Hero.tsx                 # Full-screen hero, rotating roles, CTAs & 3D canvas
│   ├── Journey.tsx              # Chronological vertical timeline
│   ├── Loader.tsx               # DS monogram initial liquid loading screen
│   ├── Navbar.tsx font          # Floating Liquid Glass navbar & mobile drawer
│   ├── ProjectModal.tsx         # Expanded project architecture inspector
│   ├── Projects.tsx             # Featured work showcase, search & category filters
│   ├── Skills.tsx               # Categorized skill pills & 3D orbit
│   └── ThemeToggle.tsx          # Liquid Glass Dark/Light mode toggle switch
├── data/
│   ├── buildingNext.ts          # 15 planned project objects (01 to 15)
│   ├── projects.ts              # Featured project specifications
│   ├── skills.ts                # Categorized skill data
│   └── timeline.ts              # Academic degree info & journey milestones
├── hooks/
│   ├── useReducedMotion.ts      # Accessibility motion hook
│   └── useTheme.ts              # Theme manager & localStorage sync
└── styles/
    ├── glass.css                # Liquid Glass UI system classes & refraction
    ├── theme.css                # CSS variables for Dark and Light themes
    └── globals.css              # Core resets, typography & ambient mesh
```

---

## 🚀 Development & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Local Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Production Build & Deployment

### Build Production Bundle

```bash
npm run build
```

The compiled output will be generated in the `dist/` directory.

### Deploying to Vercel

```bash
vercel --prod
```

Or connect the GitHub repository [https://github.com/dionstacey03-dev](https://github.com/dionstacey03-dev) directly to Vercel.

---

## 👤 Owner & Credentials

- **Name**: Dion Stacey Sellar
- **Degree**: BSc (Hons) Software Engineering — University of Plymouth (NSBM Green University, 2026–2029)
- **Focus**: Software Development, AI Systems, Local LLMs, Full-Stack Architecture
- **GitHub**: [dionstacey03-dev](https://github.com/dionstacey03-dev)
- **LinkedIn**: [dion-stacey-sellar](https://www.linkedin.com/in/dion-stacey-sellar-1066a7339/)
- **Live Site**: [dion-portfolio-sigma.vercel.app](https://dion-portfolio-sigma.vercel.app)

---

&copy; Dion Stacey Sellar. Built with React, Three.js, and Liquid Glass UI.
