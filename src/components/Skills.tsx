import { Badge } from "@/components/ui/badge";
import { memo } from "react";

interface SkillCategory {
  title: string;
  items: string[];
}

const skillColors: Record<string, { bg: string; text: string }> = {
  TypeScript: { bg: "#3178C6", text: "#ffffff" },
  "Tailwind CSS": { bg: "#38B2AC", text: "#ffffff" },
  React: { bg: "#61DAFB", text: "#000000" },
  Vitest: { bg: "#FCC72B", text: "#000000" },
  "TanStack Query": { bg: "#EF4841", text: "#ffffff" },
  Jotai: { bg: "white", text: "#000000" },
  "Better Auth": { bg: "white", text: "#000000" },
  Expo: { bg: "#1C1E24", text: "#ffffff" },
  Playwright: { bg: "#45BA4B", text: "#ffffff" },
  Zod: { bg: "#142641", text: "#ffffff" },
  "Drizzle ORM": { bg: "#C5F74F", text: "#000000" },
  Python: { bg: "#3670A0", text: "#ffffff" },
  Laravel: { bg: "#FF2D20", text: "#ffffff" },
  PHP: { bg: "#777BB4", text: "#ffffff" },
  "Inertia.js": { bg: "#9157EA", text: "white" },
  "Vue.js": { bg: "#4FC08D", text: "white" },
};

const defaultSkillColor = { bg: "#6B7280", text: "#ffffff" }; // e.g., gray

const skillCategories: SkillCategory[] = [
  {
    title: "Current Skills",
    items: ["PHP", "Laravel", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Currently Learning",
    items: ["Vue.js", "Inertia.js", "Python"],
  },
  // {
  //   title: "Planning to Learn",
  //   items: ["Expo", "Zod", "Jotai", "TanStack Query", "Better Auth", "Drizzle ORM"],
  // },
];

const Skills: React.FC = memo(() => {
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
            {category.items.map((item) => {
              const colors = skillColors[item] ?? defaultSkillColor;
              return (
                <Badge
                  key={item}
                  variant="secondary"
                  style={{
                    backgroundColor: colors.bg,
                    color: colors.text,
                  }}
                  className="inter text-xs sm:text-sm px-2 sm:px-3 py-1 font-medium transition-transform duration-150 ease-in-out hover:scale-105" //
                  role="listitem">
                  {item}
                </Badge>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;
