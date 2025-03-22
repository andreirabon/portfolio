interface Project {
	id: number;
	picture: {
		src: string;
		width: number;
		height: number;
		loading: "lazy" | "eager";
		sizes: string;
	};
	pictureAlt: string;
	title: string;
	description: string;
	link: string;
	tools: string[];
}

interface PlannedProject {
	id: number;
	status: "✅" | "❌";
	name: string;
	description: string;
}

export type { PlannedProject, Project };
