import { Button } from "@/components/ui/button";
import { BsPersonFillDown } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Introduction() {
	return (
		<>
			<div className="space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold">
					hi andrei here <span className="animate-wave inline-block">👋🏽</span>
				</h1>
				<p className="text-lg md:text-xl">a frontend developer based in the philippines.</p>

				<div className="flex flex-row gap-4">
					<Button
						variant="outline"
						className="group px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
						onClick={() => window.open("/resume.pdf", "_blank")}>
						<BsPersonFillDown className="mr-2 group-hover:scale-110 transition-transform" />
						<span>Resume</span>
					</Button>
					<Button
						variant="outline"
						className="group px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
						onClick={() => window.open("https://www.linkedin.com/in/andreirabon/", "_blank")}>
						<FaLinkedin className="mr-2 group-hover:scale-110 transition-transform" />
						<span>LinkedIn</span>
					</Button>
					<Button
						variant="outline"
						className="group px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
						onClick={() => window.open("https://github.com/andreirabon", "_blank")}>
						<FaGithub className="mr-2 group-hover:scale-110 transition-transform" />
						<span>GitHub</span>
					</Button>
				</div>
			</div>
		</>
	);
}

export default Introduction;
