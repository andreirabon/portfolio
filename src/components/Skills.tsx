import { Badge } from "@/components/ui/badge";

function Skills() {
	const skills = ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript"];
	const learning = ["React", "Next.js"];

	return (
		<>
			<div
				id="skills"
				className="space-y-4">
				<h1 className="inter text-2xl font-bold tracking-wide dark:text-gray-100">Tech Stack</h1>
				<div className="flex flex-wrap gap-2">
					{skills.map((skill) => (
						<Badge
							key={skill}
							variant="secondary"
							className="inter px-3 py-1 text-sm font-medium transition-all hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800">
							{skill}
						</Badge>
					))}
				</div>
			</div>
			<br />
			<div
				id="skills"
				className="space-y-4">
				<h1 className="inter text-2xl font-bold tracking-wide dark:text-gray-100">
					Currently Learning
				</h1>
				<div className="flex flex-wrap gap-2">
					{learning.map((learning) => (
						<Badge
							key={learning}
							variant="secondary"
							className="inter px-3 py-1 text-sm font-medium transition-all hover:scale-105 dark:bg-gray-800">
							{learning}
						</Badge>
					))}
				</div>
			</div>
		</>
	);
}

export default Skills;
