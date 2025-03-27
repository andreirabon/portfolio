interface ProjectCardProps {
  project: {
    picture: {
      src: string;
      alt: string;
      loading?: "lazy" | "eager";
    };
    title: string;
    description: string;
    link: string;
    tools: string[];
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <img
      src={project.picture.src}
      alt={project.picture.alt}
      loading={project.picture.loading}
      className="w-full h-full object-cover"
    />
  );
}
