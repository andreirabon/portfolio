import type { NavItem, PersonalInfo, SkillColors, SkillColorValue } from "./types";

// ==========================================
// Skill Colors Configuration
// ==========================================

export const SKILL_COLORS: SkillColors = {
  // Frontend Frameworks & Libraries
  React: { bg: "#61DAFB", text: "#000000" },
  "Vue.js": { bg: "#4FC08D", text: "#ffffff" },
  TypeScript: { bg: "#3178C6", text: "#ffffff" },
  JavaScript: { bg: "#F7DF1E", text: "#000000" },

  // Styling & UI
  "Tailwind CSS": { bg: "#38B2AC", text: "#ffffff" },
  CSS: { bg: "#1572B6", text: "#ffffff" },
  SCSS: { bg: "#CF649A", text: "#ffffff" },

  // Testing
  Vitest: { bg: "#FCC72B", text: "#000000" },
  Jest: { bg: "#C21325", text: "#ffffff" },
  Playwright: { bg: "#45BA4B", text: "#ffffff" },

  // State Management & Data Fetching
  "TanStack Query": { bg: "#EF4841", text: "#ffffff" },
  Jotai: { bg: "#ffffff", text: "#000000" },
  Zustand: { bg: "#2D3748", text: "#ffffff" },

  // Authentication & Security
  "Better Auth": { bg: "#ffffff", text: "#000000" },
  Auth0: { bg: "#EB5424", text: "#ffffff" },

  // Databases & ORMs
  "Drizzle ORM": { bg: "#C5F74F", text: "#000000" },
  Prisma: { bg: "#2D3748", text: "#ffffff" },
  MongoDB: { bg: "#47A248", text: "#ffffff" },
  PostgreSQL: { bg: "#336791", text: "#ffffff" },

  // Backend Technologies
  "Node.js": { bg: "#339933", text: "#ffffff" },
  Express: { bg: "#000000", text: "#ffffff" },
  "Next.js": { bg: "#000000", text: "#ffffff" },

  // Programming Languages
  Python: { bg: "#3670A0", text: "#ffffff" },
  Java: { bg: "#ED8B00", text: "#ffffff" },
  "C#": { bg: "#9B4F96", text: "#ffffff" },
  PHP: { bg: "#777BB4", text: "#ffffff" },
  Go: { bg: "#00ADD8", text: "#ffffff" },
  Rust: { bg: "#000000", text: "#ffffff" },

  // Frameworks
  Laravel: { bg: "#FF2D20", text: "#ffffff" },
  ".NET": { bg: "#512BD4", text: "#ffffff" },
  "ASP.NET": { bg: "#0078D4", text: "#ffffff" },
  Django: { bg: "#092E20", text: "#ffffff" },
  "Spring Boot": { bg: "#6DB33F", text: "#ffffff" },

  // Mobile Development
  Expo: { bg: "#1C1E24", text: "#ffffff" },
  "React Native": { bg: "#61DAFB", text: "#000000" },
  Flutter: { bg: "#02569B", text: "#ffffff" },

  // Validation & Forms
  Zod: { bg: "#142641", text: "#ffffff" },
  "React Hook Form": { bg: "#EC5990", text: "#ffffff" },

  // Development Tools
  Vite: { bg: "#646CFF", text: "#ffffff" },
  Webpack: { bg: "#8DD6F9", text: "#000000" },
  ESLint: { bg: "#4B32C3", text: "#ffffff" },
  Prettier: { bg: "#F7B93E", text: "#000000" },

  // Cloud & DevOps
  AWS: { bg: "#FF9900", text: "#000000" },
  Vercel: { bg: "#000000", text: "#ffffff" },
  Docker: { bg: "#2496ED", text: "#ffffff" },

  // Version Control
  Git: { bg: "#F05032", text: "#ffffff" },
  GitHub: { bg: "#181717", text: "#ffffff" },
} as const;

export const DEFAULT_SKILL_COLOR: SkillColorValue = { bg: "#6B7280", text: "#ffffff" } as const;

// ==========================================
// Navigation Configuration
// ==========================================

export const NAVIGATION_ITEMS: readonly NavItem[] = [
  { id: "home", label: "Home" },
  { id: "projects-heading", label: "Featured Projects" },
  { id: "current-skills-heading", label: "Skills" },
  { id: "experiences", label: "Experiences" },
] as const;

// ==========================================
// Personal Information
// ==========================================

export const PERSONAL_INFO: PersonalInfo = {
  name: "Andrei Rabon",
  title: "Full Stack Developer",
  location: "Philippines",
  image: {
    src: "meram.png",
    alt: "Andrei Rabon - Full Stack Developer",
  },
  specializations: ["Vue.js", "Laravel"],
} as const;

// ==========================================
// Application Configuration
// ==========================================

export const APP_CONFIG = {
  // Performance thresholds
  PERFORMANCE_THRESHOLDS: {
    COMPONENT_RENDER: 50,
    PROJECT_CARD: 10,
    IMAGE_LOAD: 5000,
  },

  // Animation durations
  ANIMATION_DURATIONS: {
    FADE_IN: 300,
    SLIDE_IN: 250,
    HOVER_TRANSITION: 150,
    SCALE_TRANSITION: 200,
  },

  // Breakpoints (matching Tailwind CSS defaults)
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    "2XL": 1536,
  },

  // Z-index scale
  Z_INDEX: {
    NAVBAR: 50,
    MODAL: 100,
    TOOLTIP: 200,
    DROPDOWN: 300,
  },

  // Intersection Observer thresholds
  OBSERVER_THRESHOLDS: [0, 0.25, 0.5, 0.75, 1],

  // Image optimization
  IMAGE_OPTIMIZATION: {
    LAZY_LOAD_THRESHOLD: 0.1,
    PLACEHOLDER_COLOR: "#f3f4f6",
    FADE_DURATION: 300,
  },
} as const;

// ==========================================
// External Links
// ==========================================

export const EXTERNAL_LINKS = {
  LINKEDIN: "https://www.linkedin.com/in/andreirabon/",
  GITHUB: "https://github.com/andreirabon",
  RESUME: "Andrei R. Rabon - Curriculum Vitae - React Front End Developer.pdf",
  EMAIL: "mailto:andreirabon@gmail.com",
} as const;

// ==========================================
// SEO & Meta Configuration
// ==========================================

export const SEO_CONFIG = {
  SITE_NAME: "Andrei Rabon - Portfolio",
  SITE_DESCRIPTION: "Full Stack Developer specializing in Vue.js and Laravel, based in the Philippines.",
  SITE_URL: "https://andreirabon.dev",
  AUTHOR: "Andrei Rabon",
  KEYWORDS: [
    "Full Stack Developer",
    "Vue.js",
    "Laravel",
    "TypeScript",
    "React",
    "Philippines",
    "Web Development",
    "Frontend",
    "Backend",
  ],
} as const;

// ==========================================
// Accessibility Configuration
// ==========================================

export const A11Y_CONFIG = {
  // Focus trap settings
  FOCUS_TRAP: {
    DELAY: 100,
    RETURN_FOCUS: true,
  },

  // Screen reader announcements
  ANNOUNCEMENTS: {
    NAVIGATION_CHANGED: "Navigation updated",
    CONTENT_LOADED: "Content loaded",
    ERROR_OCCURRED: "An error occurred",
  },

  // ARIA labels
  ARIA_LABELS: {
    SKIP_TO_CONTENT: "Skip to main content",
    OPEN_EXTERNAL_LINK: "Opens in a new tab",
    CLOSE_DIALOG: "Close dialog",
    TOGGLE_MENU: "Toggle menu",
  },
} as const;

// ==========================================
// Error Messages
// ==========================================

export const ERROR_MESSAGES = {
  GENERIC: "Something went wrong. Please try again.",
  NETWORK: "Network error. Please check your connection.",
  IMAGE_LOAD_FAILED: "Failed to load image",
  PROJECT_LOAD_FAILED: "Failed to load projects",
  NAVIGATION_FAILED: "Navigation failed",
} as const;

// ==========================================
// Loading States
// ==========================================

export const LOADING_STATES = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
} as const satisfies Record<string, string>;

export type LoadingState = (typeof LOADING_STATES)[keyof typeof LOADING_STATES];
