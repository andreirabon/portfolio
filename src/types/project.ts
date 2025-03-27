interface Project {
  id: number;
  picture: {
    src: string;
    width: number;
    height: number;
    sizes: string;
  };
  pictureAlt: string;
  title: string;
  description: string;
  link: string;
  tools: string[];
}

interface PlannedProject {
  id: number;
  status: "✅" | "❌";
  name: string;
  description: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
}

export type { PlannedProject, Project };
