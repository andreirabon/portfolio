import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { CgNotes } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInformation2Line } from "react-icons/ri";
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
            <p className="inter-desc text-lg md:text-m">
              a <span className="border-b-1 border-white pb-0.1">Full Stack Developer</span> based in the philippines.
            </p>
            <Alert>
              <RiInformation2Line className="h-4 w-4" />
              <AlertDescription>Seeking opportunities for a Junior Full Stack Developer position.</AlertDescription>
            </Alert>
          </div>

          <div className="shrink-0">
            <img
              src="meram.png"
              alt="Andrei Rabon"
              className="rounded-full w-49 h-49 object-cover"
            />
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-4">
          <Button
            variant="outline"
            className="inter group px-6 py-2 text-white border-white dark:hover:bg-white dark:hover:text-black transition-all"
            onClick={() => window.open("https://www.linkedin.com/in/andreirabon/", "_blank")}>
            <FaLinkedin className="mr-2 group-hover:scale-110 transition-transform" />
            <span>LinkedIn</span>
          </Button>
          <Button
            variant="outline"
            className="inter group px-6 py-2 text-white border-white dark:hover:bg-white dark:hover:text-black transition-all"
            onClick={() => window.open("https://github.com/andreirabon", "_blank")}>
            <FaGithub className="mr-2 group-hover:scale-110 transition-transform" />
            <span>GitHub</span>
          </Button>
          <Button
            variant="outline"
            className="inter group px-6 py-2 text-white border-white dark:hover:bg-white dark:hover:text-black transition-all"
            onClick={() => window.open("Andrei R. Rabon - Curriculum Vitae - React Front End Developer.pdf", "_blank")}>
            <CgNotes className="mr-2 group-hover:scale-110 transition-transform" />
            <span>Curriculum Vitae</span>
          </Button>
          {/* <Button
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
          </Button> */}
        </div>
      </div>
    </>
  );
}

export default Introduction;
