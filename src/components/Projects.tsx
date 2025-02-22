// import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "./ui/card";

const projects = [
	{
		id: 1,
		picture: "/titanic-dashboard.png",
		pictureAlt: "ocean.png",
		title: "Titanic Dashboard",
		description:
			"This dashboard, built with TypeScript, React, Tailwind CSS, shadcn/ui, and AG Grid, lets you explore the Titanic dataset in an easy and interactive way. You can view passenger details, filter data, and analyze survival rates with just a few clicks.",
		link: "https://titanic-dashboard.vercel.app/",
		tools: ["TypeScript", "React", "Tailwind CSS", "shadcn/ui", "AG Grid"],
	},
];

const plannedProjects = [
	{
		id: 1,
		status: "✅",
		name: "Dashboard",
		description: "Using table & charts to create a dashboard.",
	},

	{
		id: 2,
		status: "❌",
		name: "API Server",
		description: "Create a monolithic architecture api server using Go.",
	},
];

function Projects() {
	return (
		<>
			<h1
				id="projects"
				className="inter text-2xl font-bold tracking-wide dark:text-gray-100">
				Planned Projects
			</h1>
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
			<br />
			<h1
				id="projects"
				className="inter text-2xl font-bold tracking-wide dark:text-gray-100">
				Featured Projects
			</h1>
			<Carousel className="w-full max-w-5xl mx-auto">
				<CarouselContent>
					{projects.map((project) => (
						<CarouselItem key={project.id}>
							<div className="p-3">
								<div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500"></div>
								<Card className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
									<CardContent className="p-0">
										<div className="relative group">
											<img
												src={project.picture}
												alt={project.pictureAlt}
												className="w-full h-72 object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
											/>
											<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
										</div>
										<div className="p-8 space-y-6">
											<h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
											<p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{project.description}</p>
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
				<CarouselPrevious className="-left-4 h-12 w-12 border-0 bg-white dark:bg-gray-800 dark:text-gray-100 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700" />
				<CarouselNext className="-right-4 h-12 w-12 border-0 bg-white dark:bg-gray-800 dark:text-gray-100 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700" />
			</Carousel>
			<br />
		</>
	);
}

export default Projects;
