import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from "react";

// ==========================================
// Base Types
// ==========================================

export interface BaseProps {
  readonly className?: string;
  readonly children?: ReactNode;
}

export interface WithId {
  readonly id: string | number;
}

// ==========================================
// Error Boundary Types
// ==========================================

export interface ErrorInfo {
  readonly componentStack: string;
  readonly digest?: string;
}

export interface ErrorBoundaryState {
  readonly hasError: boolean;
  readonly error?: Error;
}

export interface ErrorFallbackProps {
  readonly error: Error;
  readonly resetError: () => void;
}

// ==========================================
// Project Types
// ==========================================

export interface Project extends WithId {
  readonly picture: string;
  readonly pictureAlt: string;
  readonly title: string;
  readonly description: string;
  readonly link: string;
  readonly tools: readonly string[];
}

export interface PlannedProject extends WithId {
  readonly status: string;
  readonly statusAriaLabel: string;
  readonly name: ReactNode;
  readonly description: string;
}

export interface ProjectCardProps {
  readonly project: Project;
}

// ==========================================
// Experience Types
// ==========================================

export interface BaseTimelineEntry extends WithId {
  readonly logo: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly institution: string;
}

export interface EduTimelineEntry extends BaseTimelineEntry {
  readonly level: string;
  readonly qualification: string;
}

export interface WorkTimelineEntry extends WithId {
  readonly logo: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly employer: string;
  readonly role: string;
}

export interface TimelineItemProps<T extends WithId> {
  readonly entry: T;
}

// ==========================================
// Skills Types
// ==========================================

export interface SkillCategory {
  readonly title: string;
  readonly items: readonly string[];
}

export interface SkillColorValue {
  readonly bg: string;
  readonly text: string;
}

export interface SkillColors {
  readonly [skillName: string]: SkillColorValue;
}

export interface SkillBadgeProps {
  readonly skill: string;
  readonly colors: SkillColorValue;
}

// ==========================================
// Navigation Types
// ==========================================

export interface NavItem {
  readonly id: string;
  readonly label: string;
}

export interface NavbarProps {
  readonly items?: readonly NavItem[];
}

// ==========================================
// Introduction Types
// ==========================================

export interface SocialLink {
  readonly url: string;
  readonly label: string;
  readonly icon: ReactNode;
}

export interface PersonalInfo {
  readonly name: string;
  readonly title: string;
  readonly location: string;
  readonly image: {
    readonly src: string;
    readonly alt: string;
  };
  readonly specializations: readonly string[];
}

// ==========================================
// Performance Hook Types
// ==========================================

export interface PerformanceOptions {
  readonly componentName: string;
  readonly threshold?: number;
}

export interface PerformanceHook {
  readonly markStart: () => void;
  readonly markEnd: () => void;
}

export interface PerformanceMetrics {
  readonly startTime: number;
  readonly endTime: number;
  readonly duration: number;
  readonly componentName: string;
}

// ==========================================
// Image Optimization Types
// ==========================================

export interface ImageOptimizationOptions {
  readonly src: string;
  readonly onLoad?: () => void;
  readonly onError?: (error: Event) => void;
}

export interface ImageOptimizationHook {
  readonly loaded: boolean;
  readonly error: boolean;
  readonly loading: boolean;
  readonly imgProps: ComponentPropsWithoutRef<"img">;
  readonly setupIntersectionObserver: (element: HTMLImageElement) => void;
}

// ==========================================
// Theme Types
// ==========================================

export type ThemeMode = "light" | "dark" | "system";

export interface Theme {
  readonly mode: ThemeMode;
  readonly colors: {
    readonly primary: string;
    readonly secondary: string;
    readonly accent: string;
  };
}

// ==========================================
// Utility Types
// ==========================================

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type StrictOmit<T, K extends keyof T> = Omit<T, K>;

export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;

// ==========================================
// Component Ref Types
// ==========================================

export type ButtonElement = ElementRef<"button">;
export type DivElement = ElementRef<"div">;
export type ImageElement = ElementRef<"img">;
export type SectionElement = ElementRef<"section">;

// ==========================================
// Event Handler Types
// ==========================================

export type ClickHandler = (event: React.MouseEvent<HTMLElement>) => void;
export type FocusHandler = (event: React.FocusEvent<HTMLElement>) => void;
export type KeyboardHandler = (event: React.KeyboardEvent<HTMLElement>) => void;

// ==========================================
// Accessibility Types
// ==========================================

export interface AriaProps {
  readonly "aria-label"?: string;
  readonly "aria-labelledby"?: string;
  readonly "aria-describedby"?: string;
  readonly "aria-expanded"?: boolean;
  readonly "aria-current"?: "page" | "step" | "location" | "date" | "time" | "true" | "false";
  readonly role?: string;
}

// ==========================================
// Form Types
// ==========================================

export interface FormProps extends Omit<ComponentPropsWithoutRef<"form">, "onSubmit"> {
  readonly onSubmit: (data: FormData) => Promise<void>;
}

// ==========================================
// Layout Types
// ==========================================

export interface ContainerProps extends BaseProps {
  readonly maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  readonly padding?: boolean;
}

export interface SectionProps extends BaseProps {
  readonly as?: "section" | "div" | "article" | "aside";
  readonly id?: string;
}
