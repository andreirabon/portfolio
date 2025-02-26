import { Badge } from "@/components/ui/badge";
import { memo } from "react";

interface SkillCategory {
	title: string;
	items: string[];
}

const Skills: React.FC = memo(() => {
	const skillCategories: SkillCategory[] = [
		{
			title: "Current Skills",
			items: [
				"Figma",
				"Git",
				"HTML",
				"CSS",
				"JavaScript",
				"TypeScript",
				"REST API",
				"Tailwind CSS",
				"PHP",
				"Laravel",
				"PostgreSQL",
			],
		},
		{
			title: "Currently Learning",
			items: ["React", "Next.js", "Jest"],
		},
		{
			title: "Planning to Learn",
			items: ["Amazon Web Services (AWS)", "Docker", "Kubernetes", "Terraform", "Python", "Go"],
		},
	];
	return (
		<section
			id="skills"
			className="space-y-6 sm:space-y-8 px-4 sm:px-0"
			aria-label="Skills and Technologies">
			{skillCategories.map((category) => (
				<div
					key={category.title}
					className="space-y-3 sm:space-y-4"
					role="region"
					aria-labelledby={`${category.title.toLowerCase().replace(/\s+/g, "-")}-heading`}>
					<h2
						id={`${category.title.toLowerCase().replace(/\s+/g, "-")}-heading`}
						className="inter text-xl sm:text-2xl font-bold tracking-wide dark:text-gray-100">
						{category.title}
					</h2>
					<div
						className="flex flex-wrap gap-1.5 sm:gap-2"
						role="list">
						{category.items.map((item) => (
							<Badge
								key={item}
								variant="secondary"
								className="inter text-xs sm:text-sm px-2 sm:px-3 py-1 font-medium transition-all hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800"
								role="listitem">
								{item}
							</Badge>
						))}
					</div>
				</div>
			))}
		</section>
	);
});

Skills.displayName = "Skills";

export default Skills;
