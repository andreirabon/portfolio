import { Button } from "@/components/ui/button";
import { CgNotes } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Introduction() {
	return (
		<>
			<div
				id="home"
				className="space-y-6">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
					<div className="space-y-6">
						<h1 className="calistoga text-4xl md:text-6xl font-bold">
							hi andrei here <span className="animate-wave inline-block">🤙🏽</span>
						</h1>
						<p className="inter text-lg md:text-xl">
							a frontend web developer based in the philippines.
						</p>
					</div>

					<div className="shrink-0">
						<img
							src="avatartion.png"
							alt="Andrei Rabon"
							className="rounded-full w-49 h-49 object-cover"
						/>
					</div>
				</div>

				<div className="flex flex-row gap-4">
					<Button
						variant="outline"
						className="inter group px-6 py-2 text-[#86EFAC] border-[#86EFAC] dark:hover:bg-[#86EFAC] dark:hover:text-black transition-all"
						onClick={() => window.open("/CV.pdf", "_blank")}>
						<CgNotes className="mr-2 group-hover:scale-110 transition-transform" />
						<span>Resume</span>
					</Button>
					<Button
						variant="outline"
						className="inter group px-6 py-2 text-[#86EFAC] border-[#86EFAC] dark:hover:bg-[#86EFAC] dark:hover:text-black transition-all"
						onClick={() => window.open("https://www.linkedin.com/in/andreirabon/", "_blank")}>
						<FaLinkedin className="mr-2 group-hover:scale-110 transition-transform" />
						<span>LinkedIn</span>
					</Button>
					<Button
						variant="outline"
						className="inter group px-6 py-2 text-[#86EFAC] border-[#86EFAC] dark:hover:bg-[#86EFAC] dark:hover:text-black transition-all"
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
