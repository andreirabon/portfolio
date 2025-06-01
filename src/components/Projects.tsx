import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

interface Project {
  id: number;
  picture: string;
  pictureAlt: string;
  title: string;
  description: string;
  link: string;
  tools: string[];
}

interface PlannedProject {
  id: number;
  status: string;
  statusAriaLabel: string;
  name: React.ReactNode;
  description: React.ReactNode;
}

const projectsData: Project[] = [
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
];

const plannedProjectsData: PlannedProject[] = [
  {
    id: 1,
    status: "🚧",
    statusAriaLabel: "In Progress",
    name: (
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-blue-600 dark:text-blue-400">
        Expense Tracker
      </a>
    ),
    description: "A comprehensive expense tracker application.",
  },
];

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 group m-1 bg-card">
      <CardContent className="p-0">
        <div className="relative">
          {isImageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted z-10">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
            </div>
          )}

          <img
            src={project.picture}
            alt={project.pictureAlt}
            className={`w-full h-72 object-cover transition-all duration-500 ${
              isImageLoading ? "opacity-0" : "opacity-100 brightness-90 group-hover:brightness-100"
            }`}
            loading="lazy"
            onLoad={() => {
              setIsImageLoading(false);
            }}
            onError={() => {
              setIsImageLoading(false);
            }}
          />
        </div>
        <div className="p-6 md:p-8 space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h3 className="text-2xl md:text-3xl font-bold text-card-foreground">{project.title}</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2 bg-green-500 text-white font-medium rounded-md text-sm hover:bg-green-700 transition-colors whitespace-nowrap">
              View Project
            </a>
          </div>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full transition-colors hover:bg-primary hover:text-primary-foreground">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Projects() {
  return (
    <div className="space-y-10 md:space-y-12">
      <section aria-labelledby="projects-heading">
        <div className="space-y-3 mb-5">
          <h2
            id="projects-heading"
            className="inter text-2xl font-bold tracking-tight dark:text-gray-100">
            Featured Projects ({projectsData.length})
          </h2>
          <p className="text-muted-foreground">Showcase of completed work.</p>
        </div>
        {projectsData.length > 0 ? (
          <Carousel
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "start",
              loop: projectsData.length > 1,
            }}>
            <CarouselContent className="-ml-4">
              {" "}
              {projectsData.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="pl-4 md:basis-1/1 lg:basis-1/1">
                  {" "}
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            {projectsData.length > 1 && (
              <>
                <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 border bg-background/80 hover:bg-background shadow-md" />
                <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 border bg-background/80 hover:bg-background shadow-md" />
              </>
            )}
          </Carousel>
        ) : (
          <p className="text-muted-foreground italic text-center">No featured projects to display yet.</p>
        )}
      </section>
      <section aria-labelledby="planned-projects-heading">
        <div className="space-y-3 mb-5">
          <h2
            id="planned-projects-heading"
            className="inter text-2xl font-bold tracking-tight dark:text-gray-100">
            Projects
          </h2>
          <p className="text-muted-foreground">Currently in progress & not started.</p>
        </div>
        <Card className="overflow-hidden">
          {" "}
          <CardContent className="p-0">
            {" "}
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-[80px] sm:w-[100px] font-semibold text-center">Status</TableHead>
                  <TableHead className="font-semibold">Name</TableHead>
                  <TableHead className="font-semibold hidden md:table-cell">Description</TableHead>{" "}
                </TableRow>
              </TableHeader>
              <TableBody>
                {plannedProjectsData.map((project) => (
                  <TableRow
                    key={project.id}
                    className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-medium text-center">
                      <span
                        aria-label={project.statusAriaLabel}
                        className="inline-flex items-center justify-center w-6 h-6 text-xl"
                        role="img">
                        {project.status}
                      </span>
                    </TableCell>
                    <TableCell className="font-medium">{project.name}</TableCell>
                    <TableCell className="text-muted-foreground hidden md:table-cell">{project.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default Projects;
