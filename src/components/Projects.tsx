// import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Suspense } from "react";
import { ProjectCard } from "./ProjectCard";
import { Card } from "./ui/card";

const projects = [
  {
    id: 1,
    picture: {
      src: "/titanic-dashboard.png",
      width: 1200,
      height: 630,
      loading: "lazy",
      sizes: "(max-width: 768px) 100vw, 50vw",
    },
    pictureAlt: "ocean.png",
    title: "Titanic Dashboard",
    description:
      "This dashboard, built with TypeScript, React, Tailwind CSS, shadcn/ui, and AG Grid, lets you explore the Titanic dataset. You can view passenger details, filter data, and analyze survival rates.",
    link: "https://titanic-dashboard.vercel.app/",
    tools: ["TypeScript", "React", "Tailwind CSS", "shadcn/ui", "AG Grid"],
  },
];

const plannedProjects = [
  {
    id: 1,
    status: "✅",
    name: "Dashboard",
    description: "Using tables and charts to create a dashboard.",
  },

  {
    id: 2,
    status: "❌",
    name: "Human Resource Management System",
    description:
      "Information system that handles recruitment, daily time record, payroll, leave management, and employee evaluations.",
  },
];

function ProjectSkeleton() {
  return (
    <div className="p-3">
      <Card className="bg-white dark:bg-gray-800 animate-pulse">
        <div className="h-72 bg-gray-200 dark:bg-gray-700" />
        <div className="p-8 space-y-6">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
          </div>
        </div>
      </Card>
    </div>
  );
}

function TableSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4" />
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="space-y-3 mb-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
        </div>
      ))}
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="space-y-8"
      aria-labelledby="projects-title">
      <h1
        id="planned-projects"
        className="inter text-2xl font-bold tracking-wide dark:text-gray-100">
        Planned Projects
      </h1>
      <Suspense fallback={<TableSkeleton />}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Status</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {plannedProjects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">{project.status}</TableCell>
                <TableCell>{project.name}</TableCell>
                <TableCell>{project.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Suspense>
      <br />
      <h1
        id="featured-projects"
        className="inter text-2xl font-bold tracking-wide dark:text-gray-100">
        Featured Projects
      </h1>
      <Suspense fallback={<ProjectSkeleton />}>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <div className="p-3">
                  <ProjectCard
                    project={{
                      picture: {
                        src: project.picture.src,
                        alt: project.pictureAlt,
                        loading: "lazy",
                      },
                      title: project.title,
                      description: project.description,
                      link: project.link,
                      tools: project.tools,
                    }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="-left-4 h-12 w-12 border-0 bg-white dark:bg-gray-800 dark:text-gray-100 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            aria-label="View previous project"
          />
          <CarouselNext
            className="-right-4 h-12 w-12 border-0 bg-white dark:bg-gray-800 dark:text-gray-100 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            aria-label="View next project"
          />
        </Carousel>
      </Suspense>
      <br />
    </section>
  );
}

export default Projects;
