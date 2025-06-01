// Core types for the portfolio application
export interface Project {
  id: number;
  picture: string;
  pictureAlt: string;
  title: string;
  description: string;
  link: string;
  tools: string[];
}

export interface PlannedProject {
  id: number;
  status: string;
  statusAriaLabel: string;
  name: React.ReactNode;
  description: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface EduTimelineEntry {
  logo: string;
  startDate: string;
  endDate: string;
  level: string;
  institution: string;
  qualification: string;
}

export interface WorkTimelineEntry {
  logo: string;
  startDate: string;
  endDate: string;
  employer: string;
  role: string;
}

// Component props interfaces
export interface ProjectCardProps {
  project: Project;
}

export interface EduTimelineItemProps {
  entry: EduTimelineEntry;
}

export interface WorkTimelineItemProps {
  entry: WorkTimelineEntry;
}

// Error boundary types
export interface ErrorInfo {
  componentStack: string;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

// Performance monitoring types
export interface PerformanceMetrics {
  renderTime: number;
  componentName: string;
}

// Navigation types
export interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}
