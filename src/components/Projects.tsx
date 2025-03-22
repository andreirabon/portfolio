// import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Suspense } from "react";
import { Card, CardContent } from "./ui/card";

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
									<Card className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
										<CardContent className="p-0">
											<div className="relative group">
												<img
													src={project.picture.src}
													alt={project.pictureAlt}
													width={project.picture.width}
													height={project.picture.height}
													loading={project.picture.loading}
													sizes={project.picture.sizes}
													className="w-full h-72 object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
													onError={(e) => {
														e.currentTarget.src = "/placeholder-project.png";
														e.currentTarget.alt = "Project preview unavailable";
													}}
												/>
												<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
											</div>
											<div className="p-8 space-y-6">
												<h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
												<p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
													{project.description}
												</p>
												<div className="flex flex-wrap gap-3">
													{project.tools.map((tool) => (
														<span
															key={tool}
															className="px-4 py-1.5 text-sm font-medium bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-300 rounded-lg">
															{tool}
														</span>
													))}
												</div>
												<a
													href={project.link}
													className="group flex items-center justify-between w-full px-6 py-4 text-white bg-gray-900 dark:bg-gray-700 rounded-xl hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors duration-300">
													<span className="text-base font-medium">View Project</span>
													<span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
												</a>
											</div>
										</CardContent>
									</Card>
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
