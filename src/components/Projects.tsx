// import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { CardContent } from "./ui/card";

const projects = [
  {
    id: 1,
    picture: "/titanic-dashboard.png",
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
    name: (
      <a
        href="https://github.com/andreirabon/titanic-dashboard"
        target="_blank"
        rel="noopener noreferrer">
        Titanic Dashboard
      </a>
    ),
    description: (
      <a
        href="https://github.com/andreirabon/titanic-dashboard"
        target="_blank"
        rel="noopener noreferrer">
        Using tables and charts to create a dashboard from the Titanic dataset.
      </a>
    ),
  },

  {
    id: 2,
    status: "❌",
    name: "Human Resource Management System",
    description:
      "Information system that handles recruitment, daily time record, payroll, leave management, and employee evaluations.",
  },

  {
    id: 3,
    status: "🏗️",
    name: (
      <a
        href="https://github.com/andreirabon/api-hono"
        target="_blank"
        rel="noopener noreferrer">
        Application Programming Interface (API)
      </a>
    ),
    description: (
      <a
        href="https://github.com/andreirabon/api-hono"
        target="_blank"
        rel="noopener noreferrer">
        Using Hono, Prisma, and PostgreSQL.
      </a>
    ),
  },
];

function Projects() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="space-y-2 mb-6">
        <h1 className="inter text-2xl font-bold tracking-wide dark:text-gray-100"> Planned Projects</h1>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-[100px] font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Name</TableHead>
              <TableHead className="font-semibold">Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {plannedProjects.map((project) => (
              <TableRow
                key={project.id}
                className="hover:bg-muted/50 transition-colors">
                <TableCell className="font-medium">
                  <span className="inline-flex items-center justify-center w-6 h-6">{project.status}</span>
                </TableCell>
                <TableCell>{project.name}</TableCell>
                <TableCell className="text-muted-foreground">{project.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <br />
      <h1
        id="projects"
        className="inter text-2xl font-bold tracking-wide dark:text-gray-100">
        Projects
      </h1>
      <Carousel
        className="w-full max-w-5xl mx-auto"
        opts={{
          align: "start",
          loop: true,
          autoplay: true,
          interval: 5000,
        }}>
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.id}>
              <div className="p-3">
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group">
                  <CardContent className="p-0">
                    <div className="relative group">
                      <img
                        src={project.picture}
                        alt={project.pictureAlt}
                        className="w-full h-72 object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
                        loading="lazy"
                        onLoad={() => {
                          setIsLoading(false);
                        }}
                      />
                      {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                    </div>
                    <div className="p-8 space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-2.5 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
                          View Project
                        </a>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-3">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-4 py-1.5 text-sm font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded-lg">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 h-12 w-12 border-0 bg-white dark:bg-gray-800 dark:text-gray-100 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700" />
        <CarouselNext className="-right-4 h-12 w-12 border-0 bg-white dark:bg-gray-800 dark:text-gray-100 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700" />
      </Carousel>
      <br />
    </>
  );
}

export default Projects;
