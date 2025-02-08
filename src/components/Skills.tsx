import { Badge } from "@/components/ui/badge";

function Skills() {
	const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"];

	return (
		<div className="space-y-4">
			<h1 className="text-2xl font-bold tracking-tight dark:text-gray-100">Tech Stack</h1>
			<div className="flex flex-wrap gap-2">
				{skills.map((skill) => (
					<Badge
						key={skill}
						variant="secondary"
						className="px-3 py-1 text-sm font-medium transition-all hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800">
						{skill}
					</Badge>
				))}
			</div>
		</div>
	);
}

export default Skills;
