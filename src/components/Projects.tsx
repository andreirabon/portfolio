import { ErrorBoundary, ProjectErrorFallback } from "@/components/ErrorBoundary";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useImageOptimization } from "@/hooks/useImageOptimization";
import { usePerformance } from "@/hooks/usePerformance";
import type { PlannedProject, Project, ProjectCardProps } from "@/lib/types";
import { memo, Suspense, useCallback, useMemo } from "react";

// ==========================================
// Project Data Configuration
// ==========================================

const PROJECTS_DATA: readonly Project[] = [
  {
    id: 1,
    picture: "/titanic-dashboard.png",
    pictureAlt: "Screenshot of the Titanic Dashboard showing charts and data grids",
    title: "Titanic Dashboard",
    description:
      "This dashboard, built with TypeScript, React, Tailwind CSS, shadcn/ui, and AG Grid, lets you explore the Titanic dataset. You can view passenger details, filter data, and analyze survival rates.",
    link: "https://titanic-dashboard.vercel.app/",
    tools: ["TypeScript", "React", "Tailwind CSS", "shadcn/ui", "AG Grid"],
  },
] as const;

const PLANNED_PROJECTS_DATA: readonly PlannedProject[] = [
  {
    id: 1,
    status: "🚧",
    statusAriaLabel: "In Progress",
    name: (
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-blue-600 dark:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded">
        Expense Tracker
      </a>
    ),
    description: "A comprehensive expense tracker application.",
  },
] as const;

// ==========================================
// Helper Functions
// ==========================================

/**
 * Generates a unique key for project tools
 * @param tool - The tool name
 * @param projectId - The project ID
 * @returns Unique key string
 */
const generateToolKey = (tool: string, projectId: string | number): string =>
  `${String(projectId)}-${tool.replace(/\s+/g, "-").toLowerCase()}`;

/**
 * Opens external link safely
 * @param url - The URL to open
 */
const openExternalLink = (url: string): void => {
  window.open(url, "_blank", "noopener,noreferrer");
};

// ==========================================
// Project Tool Badge Component
// ==========================================

interface ProjectToolBadgeProps {
  readonly tool: string;
  readonly projectId: string | number;
}

const ProjectToolBadge = memo<ProjectToolBadgeProps>(({ tool, projectId }) => {
  const key = useMemo(() => generateToolKey(tool, projectId), [tool, projectId]);

  return (
    <span
      key={key}
      className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full transition-all duration-200 hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      role="listitem"
      aria-label={`${tool} technology used`}
      tabIndex={0}>
      {tool}
    </span>
  );
});

ProjectToolBadge.displayName = "ProjectToolBadge";

// ==========================================
// Project Card Component
// ==========================================

const ProjectCard = memo<ProjectCardProps>(({ project }) => {
  const { markStart, markEnd } = usePerformance({
    componentName: `ProjectCard-${String(project.id)}`,
    threshold: 10,
  });

  const { loaded, error, loading, imgProps, setupIntersectionObserver } = useImageOptimization({
    src: project.picture,
    onLoad: markEnd,
    onError: (err) => {
      console.error(`Project image failed to load for ${project.title}:`, err);
      markEnd();
    },
  });

  const handleImageRef = useCallback(
    (element: HTMLImageElement | null) => {
      if (element) {
        setupIntersectionObserver(element);
        markStart();
      }
    },
    [setupIntersectionObserver, markStart],
  );

  const handleProjectClick = useCallback(() => {
    openExternalLink(project.link);
  }, [project.link]);

  const toolElements = useMemo(
    () =>
      project.tools.map((tool) => (
        <ProjectToolBadge
          key={generateToolKey(tool, project.id)}
          tool={tool}
          projectId={project.id}
        />
      )),
    [project.tools, project.id],
  );

  if (error) {
    return (
      <Card className="overflow-hidden border-0 shadow-lg m-1 bg-card">
        <CardContent className="p-6 text-center">
          <div
            className="text-muted-foreground"
            role="alert">
            Failed to load project image for {project.title}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 group m-1 bg-card focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
      role="article"
      aria-labelledby={`project-title-${String(project.id)}`}>
      <CardContent className="p-0">
        <div className="relative">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted z-10">
              <Skeleton className="w-full h-72" />
            </div>
          )}

          <img
            ref={handleImageRef}
            {...imgProps}
            alt={project.pictureAlt}
            className={`w-full h-72 object-cover transition-all duration-500 ${
              loaded ? "brightness-90 group-hover:brightness-100" : ""
            }`}
          />
        </div>

        <div className="p-6 md:p-8 space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h3
              id={`project-title-${String(project.id)}`}
              className="text-2xl md:text-3xl font-bold text-card-foreground">
              {project.title}
            </h3>
            <button
              onClick={handleProjectClick}
              className="inline-flex items-center justify-center px-5 py-2 bg-green-500 text-white font-medium rounded-md text-sm hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 transition-colors whitespace-nowrap"
              aria-label={`View ${project.title} project`}>
              View Project
            </button>
          </div>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{project.description}</p>

          <div
            className="flex flex-wrap gap-2 pt-2"
            role="list"
            aria-label={`Technologies used in ${project.title}`}>
            {toolElements}
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

ProjectCard.displayName = "ProjectCard";

// ==========================================
// Planned Project Row Component
// ==========================================

interface PlannedProjectRowProps {
  readonly project: PlannedProject;
}

const PlannedProjectRow = memo<PlannedProjectRowProps>(({ project }) => (
  <TableRow
    className="hover:bg-muted/50 transition-colors"
    role="row">
    <TableCell
      className="font-medium text-center"
      role="gridcell">
      <span
        aria-label={project.statusAriaLabel}
        className="inline-flex items-center justify-center w-6 h-6 text-xl"
        role="img">
        {project.status}
      </span>
    </TableCell>
    <TableCell
      className="font-medium"
      role="gridcell">
      {project.name}
    </TableCell>
    <TableCell
      className="text-muted-foreground hidden md:table-cell"
      role="gridcell">
      {project.description}
    </TableCell>
  </TableRow>
));

PlannedProjectRow.displayName = "PlannedProjectRow";

// ==========================================
// Projects Section Component
// ==========================================

interface ProjectsSectionProps {
  readonly projects: readonly Project[];
  readonly title: string;
  readonly description: string;
  readonly sectionId: string;
}

const ProjectsSection = memo<ProjectsSectionProps>(({ projects, title, description, sectionId }) => {
  const carouselOpts = useMemo(
    () => ({
      align: "start" as const,
      loop: projects.length > 1,
    }),
    [projects.length],
  );

  const projectCards = useMemo(
    () =>
      projects.map((project) => (
        <CarouselItem
          key={project.id}
          className="pl-4 md:basis-1/1 lg:basis-1/1">
          <Suspense fallback={<Skeleton className="w-full h-96" />}>
            <ProjectCard project={project} />
          </Suspense>
        </CarouselItem>
      )),
    [projects],
  );

  const hasMultipleProjects = projects.length > 1;

  return (
    <section aria-labelledby={sectionId}>
      <header className="space-y-3 mb-5">
        <h2
          id={sectionId}
          className="inter text-2xl font-bold tracking-tight dark:text-gray-100">
          {title} ({projects.length})
        </h2>
        <p className="text-muted-foreground">{description}</p>
      </header>

      {projects.length > 0 ? (
        <Carousel
          className="w-full max-w-5xl mx-auto"
          opts={carouselOpts}
          role="region"
          aria-label={title}>
          <CarouselContent className="-ml-4">{projectCards}</CarouselContent>
          {hasMultipleProjects && (
            <>
              <CarouselPrevious
                className="absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 border bg-background/80 hover:bg-background shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Previous project"
              />
              <CarouselNext
                className="absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 border bg-background/80 hover:bg-background shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Next project"
              />
            </>
          )}
        </Carousel>
      ) : (
        <p className="text-muted-foreground italic text-center py-8">No featured projects to display yet.</p>
      )}
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";

// ==========================================
// Planned Projects Section Component
// ==========================================

interface PlannedProjectsSectionProps {
  readonly projects: readonly PlannedProject[];
  readonly title: string;
  readonly description: string;
  readonly sectionId: string;
}

const PlannedProjectsSection = memo<PlannedProjectsSectionProps>(({ projects, title, description, sectionId }) => {
  const plannedProjectRows = useMemo(
    () =>
      projects.map((project) => (
        <PlannedProjectRow
          key={project.id}
          project={project}
        />
      )),
    [projects],
  );

  return (
    <section aria-labelledby={sectionId}>
      <header className="space-y-3 mb-5">
        <h2
          id={sectionId}
          className="inter text-2xl font-bold tracking-tight dark:text-gray-100">
          {title} ({projects.length})
        </h2>
        <p className="text-muted-foreground">{description}</p>
      </header>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <Table
            role="table"
            aria-label={title}>
            <TableHeader>
              <TableRow
                className="bg-muted/50"
                role="row">
                <TableHead
                  className="w-[80px] sm:w-[100px] font-semibold text-center"
                  role="columnheader">
                  Status
                </TableHead>
                <TableHead
                  className="font-semibold"
                  role="columnheader">
                  Name
                </TableHead>
                <TableHead
                  className="font-semibold hidden md:table-cell"
                  role="columnheader">
                  Description
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody role="rowgroup">{plannedProjectRows}</TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
});

PlannedProjectsSection.displayName = "PlannedProjectsSection";

// ==========================================
// Main Projects Component
// ==========================================

interface ProjectsProps {
  readonly className?: string;
  readonly featuredProjects?: readonly Project[];
  readonly plannedProjects?: readonly PlannedProject[];
}

const Projects = memo<ProjectsProps>(
  ({ className, featuredProjects = PROJECTS_DATA, plannedProjects = PLANNED_PROJECTS_DATA }) => {
    const { markStart, markEnd } = usePerformance({
      componentName: "Projects",
      threshold: 50,
    });

    const containerClassName = useMemo(() => {
      const baseClasses = "space-y-10 md:space-y-12";
      return className ? `${baseClasses} ${className}` : baseClasses;
    }, [className]);

    // Performance monitoring
    useMemo(() => {
      markStart();
      return () => {
        markEnd();
      };
    }, [markStart, markEnd]);

    return (
      <div className={containerClassName}>
        <ErrorBoundary fallback={ProjectErrorFallback}>
          <ProjectsSection
            projects={featuredProjects}
            title="Featured Projects"
            description="Showcase of completed work."
            sectionId="projects-heading"
          />
        </ErrorBoundary>

        <ErrorBoundary fallback={ProjectErrorFallback}>
          <PlannedProjectsSection
            projects={plannedProjects}
            title="Planned Projects"
            description="Currently in progress & not started."
            sectionId="planned-projects-heading"
          />
        </ErrorBoundary>
      </div>
    );
  },
);

Projects.displayName = "Projects";

export default Projects;
