// Performance thresholds (in milliseconds)
export const PERFORMANCE_THRESHOLDS = {
  RENDER_WARNING: 16, // 60fps threshold
  SLOW_COMPONENT: 50,
  CRITICAL_SLOW: 100,
} as const;

// Image optimization settings
export const IMAGE_CONFIG = {
  LAZY_LOAD_MARGIN: "50px",
  INTERSECTION_THRESHOLD: 0.1,
  TRANSITION_DURATION: "0.3s",
  PLACEHOLDER_BLUR: 10,
} as const;

// Animation durations
export const ANIMATION = {
  FAST: "0.15s",
  NORMAL: "0.3s",
  SLOW: "0.5s",
  HOVER_SCALE: "scale(1.02)",
} as const;

// Breakpoints (should match Tailwind config)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  THEME: "portfolio-theme",
  PERFORMANCE_METRICS: "portfolio-perf",
  USER_PREFERENCES: "portfolio-prefs",
} as const;

// External links
export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com",
  LINKEDIN: "https://linkedin.com",
  EMAIL: "mailto:contact@example.com",
} as const;

// SEO and meta information
export const META = {
  TITLE: "Andrei Rabon - Portfolio",
  DESCRIPTION: "Full-stack developer specializing in React, TypeScript, and modern web technologies",
  KEYWORDS: ["React", "TypeScript", "Frontend", "Developer", "Portfolio"],
  AUTHOR: "Andrei Rabon",
  SITE_URL: "https://andreirabonportfolio.com",
  IMAGE: "/og-image.jpg",
} as const;

// Component display names for debugging
export const COMPONENT_NAMES = {
  APP: "App",
  NAVBAR: "Navbar",
  INTRODUCTION: "Introduction",
  PROJECTS: "Projects",
  PROJECT_CARD: "ProjectCard",
  SKILLS: "Skills",
  EXPERIENCE: "Experience",
  ERROR_BOUNDARY: "ErrorBoundary",
} as const;

// Error messages
export const ERROR_MESSAGES = {
  IMAGE_LOAD_FAILED: "Failed to load image",
  COMPONENT_CRASHED: "Something went wrong with this component",
  NETWORK_ERROR: "Network error occurred",
  GENERIC_ERROR: "An unexpected error occurred",
} as const;

// Feature flags for development
export const FEATURE_FLAGS = {
  ENABLE_PERFORMANCE_MONITORING: import.meta.env.DEV,
  ENABLE_ERROR_REPORTING: import.meta.env.PROD,
  ENABLE_ANALYTICS: import.meta.env.PROD,
  SHOW_DEBUG_INFO: import.meta.env.DEV,
} as const;
