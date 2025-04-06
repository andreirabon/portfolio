import { Badge } from "@/components/ui/badge";
import { memo } from "react";

interface SkillCategory {
  title: string;
  items: string[];
}

const skillColors: Record<string, { bg: string; text: string }> = {
  TypeScript: { bg: "#3178C6", text: "#ffffff" },
  "Tailwind CSS": { bg: "#38BDF8", text: "#ffffff" },
  "REST API": { bg: "#6B7280", text: "#ffffff" },
  HTML: { bg: "#E34F26", text: "#ffffff" },
  CSS: { bg: "#1572B6", text: "#ffffff" },
  JavaScript: { bg: "#F7DF1E", text: "#000000" },
  PHP: { bg: "#777BB4", text: "#ffffff" },
  Laravel: { bg: "#FF2D20", text: "#ffffff" },
  React: { bg: "#61DAFB", text: "#000000" },
  Vitest: { bg: "#729B1B", text: "#ffffff" },
  "Next.js": { bg: "#171717", text: "#ffffff" },
  "TanStack Start": { bg: "#06B6D4", text: "#000000" },
  ArkType: { bg: "#0EA5E9", text: "#ffffff" },
  GraphQL: { bg: "#E535AB", text: "#ffffff" },
  "React Native": { bg: "#61DAFB", text: "#000000" },
  Expo: { bg: "#0A192F", text: "#ffffff" },
};

const defaultSkillColor = { bg: "#6B7280", text: "#ffffff" }; // e.g., gray

const skillCategories: SkillCategory[] = [
  {
    title: "Current Skills",
    items: ["TypeScript", "Tailwind CSS", "REST API", "HTML", "CSS", "JavaScript", "PHP", "Laravel"],
  },
  {
    title: "Currently Learning",
    items: ["React", "Vitest", "Next.js", "TanStack Start", "ArkType"],
  },
  {
    title: "Planning to Learn",
    items: ["GraphQL", "React Native", "Expo"],
  },
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
              const colors = skillColors[item] || defaultSkillColor;
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
