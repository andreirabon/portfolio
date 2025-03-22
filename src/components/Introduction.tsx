import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { CgNotes } from "react-icons/cg";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInformation2Line } from "react-icons/ri";

function Introduction() {
	const handleExternalLink = (url: string) => {
		try {
			window.open(url, "_blank", "noopener,noreferrer");
		} catch (error) {
			console.error(`Failed to open ${url}:`, error);
			// Fallback to basic navigation
			window.location.href = url;
		}
	};

	return (
		<>
			<section
				id="home"
				className="space-y-6"
				aria-labelledby="home-title">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
					<div className="space-y-6">
						<h1
							id="home-title"
							className="calistoga text-4xl md:text-6xl font-bold">
							hi andrei here{" "}
							<span
								className="animate-wave inline-block"
								aria-hidden="true">
								🤙🏽
							</span>
						</h1>
						<p className="inter-desc text-lg md:text-m">
							a <span className="border-b-1 border-[#86EFAC] pb-0.1">react frontend web developer</span> based in the
							Philippines.
						</p>
						<Alert>
							<RiInformation2Line className="h-4 w-4" />
							<AlertDescription>Seeking opportunities for a junior frontend web developer position.</AlertDescription>
						</Alert>
					</div>

					<div className="shrink-0">
						<img
							src="avatartion.png"
							alt="Andrei Rabon"
							width={196}
							height={196}
							className="rounded-full w-[196px] h-[196px] object-cover"
						/>
					</div>
				</div>

				<div className="flex flex-row flex-wrap gap-4">
					<Button
						type="button"
						variant="outline"
						className="inter group px-6 py-2 text-[#86EFAC] border-[#86EFAC] dark:hover:bg-[#86EFAC] dark:hover:text-black transition-all"
						onClick={() => handleExternalLink("https://www.linkedin.com/in/andreirabon/")}
						aria-label="Visit LinkedIn Profile">
						<FaLinkedin
							className="mr-2 group-hover:scale-110 transition-transform"
							aria-hidden="true"
						/>
						<span>LinkedIn</span>
					</Button>
					<Button
						variant="outline"
						className="inter group px-6 py-2 text-[#86EFAC] border-[#86EFAC] dark:hover:bg-[#86EFAC] dark:hover:text-black transition-all"
						onClick={() => window.open("https://github.com/andreirabon", "_blank")}
						aria-label="Visit GitHub Profile">
						<FaGithub
							className="mr-2 group-hover:scale-110 transition-transform"
							aria-hidden="true"
						/>
						<span>GitHub</span>
					</Button>
					<Button
						variant="outline"
						className="inter group px-6 py-2 text-[#86EFAC] border-[#86EFAC] dark:hover:bg-[#86EFAC] dark:hover:text-black transition-all"
						onClick={() =>
							window.open("Andrei R. Rabon - Curriculum Vitae - React Frontend Web Developer.pdf", "_blank")
						}>
						<CgNotes className="mr-2 group-hover:scale-110 transition-transform" />
						<span>Curriculum Vitae</span>
					</Button>
					<Button
						variant="outline"
						className="inter group px-6 py-2 text-[#86EFAC] border-[#86EFAC] dark:hover:bg-[#86EFAC] dark:hover:text-black transition-all"
						asChild>
						<a
							href="mailto:andreirabon@gmail.com"
							target="_blank"
							rel="noopener noreferrer">
							<FaEnvelope className="mr-2 group-hover:scale-110 transition-transform" />
							<span>Contact Me</span>
						</a>
					</Button>
				</div>
			</section>
		</>
	);
}

export default Introduction;
