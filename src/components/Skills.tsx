import { Badge } from "@/components/ui/badge";
import { memo } from "react";

interface SkillCategory {
  title: string;
  items: string[];
}

const skillColorMap: Record<string, string> = {
  TypeScript: "bg-[#3178C6] hover:bg-[#2a6ab3]",
  "Tailwind CSS": "bg-[#38BDF8] hover:bg-[#2fa8e0]",
  "REST API": "bg-[#6B7280] hover:bg-[#5a626e]",
  PostgreSQL: "bg-[#336791] hover:bg-[#2b577a]",
  HTML: "bg-[#E34F26] hover:bg-[#c74421]",
  CSS: "bg-[#1572B6] hover:bg-[#12619c]",
  JavaScript: "bg-[#F7DF1E] hover:bg-[#dcc81b]",
  Laravel: "bg-[#FF2D20] hover:bg-[#e6281c]",
  PHP: "bg-[#777BB4] hover:bg-[#666a9c]",
  React: "bg-[#61DAFB] hover:bg-[#4fc7e0]",
  Inertia: "bg-[#9553E9] hover:bg-[#7e45c7]",
  "Next.js": "bg-[#000000] hover:bg-[#1a1a1a]",
  Vitest: "bg-[#6E3CBC] hover:bg-[#5c32a0]",
  Hono: "bg-[#FF6F61] hover:bg-[#e65a4e]",
  Prisma: "bg-[#2D3748] hover:bg-[#252d3a]",
  "React Native": "bg-[#61DAFB] hover:bg-[#4fc7e0]",
  Expo: "bg-[#000020] hover:bg-[#000018]",
  "Amazon Web Services (AWS)": "bg-[#FF9900] hover:bg-[#e68a00]",
  Docker: "bg-[#2496ED] hover:bg-[#1e7cc7]",
  Kubernetes: "bg-[#326CE5] hover:bg-[#2a5bc7]",
  Terraform: "bg-[#7B42BC] hover:bg-[#6a37a0]",
  Python: "bg-[#3776AB] hover:bg-[#2e618f]",
  Go: "bg-[#00ADD8] hover:bg-[#0093b8]",
};

const Skills: React.FC = memo(() => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Current Skills",
      items: ["TypeScript", "Tailwind CSS", "REST API", "PostgreSQL", "HTML", "CSS", "JavaScript", "Laravel", "PHP"],
    },
    {
      title: "Currently Learning",
      items: ["React", "Inertia", "Next.js", "Vitest", "Hono", "Prisma"],
    },
    {
      title: "Planning to Learn",
      items: ["React Native", "Expo", "Amazon Web Services (AWS)", "Docker", "Kubernetes", "Terraform", "Python", "Go"],
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
                className={`inter text-xs sm:text-sm px-2 sm:px-3 py-1 font-medium transition-all hover:scale-105 ${
                  skillColorMap[item] || "bg-gray-100 dark:hover:bg-gray-800"
                }`}
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
