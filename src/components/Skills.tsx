import { Badge } from "@/components/ui/badge";
import { SKILL_COLORS } from "@/lib/constants";
import type { SkillBadgeProps, SkillCategory, SkillColorValue } from "@/lib/types";
import { memo, useMemo } from "react";

// ==========================================
// Skill Categories Data
// ==========================================

const SKILL_CATEGORIES = [
  {
    title: "Current Skills",
    items: ["PHP", "Laravel", "TypeScript"],
  },
  {
    title: "Currently Learning",
    items: ["Vue.js", "Python"],
  },
  {
    title: "Planning to Learn",
    items: ["Java", "Spring", "C#", ".NET", "ASP.NET"],
  },
] as const satisfies readonly SkillCategory[];

// ==========================================
// Helper Functions
// ==========================================

/**
 * Safely retrieves skill colors with fallback to default
 * @param skill - The skill name to look up
 * @returns SkillColorValue object with bg and text colors
 */
const getSkillColors = (skill: string): SkillColorValue => {
  try {
    const skillColorsMap = SKILL_COLORS as Record<string, SkillColorValue | undefined>;
    const colors = skillColorsMap[skill];

    if (
      colors &&
      typeof colors === "object" &&
      "bg" in colors &&
      "text" in colors &&
      typeof colors.bg === "string" &&
      typeof colors.text === "string"
    ) {
      return colors;
    }

    return { bg: "#6B7280", text: "#ffffff" };
  } catch {
    return { bg: "#6B7280", text: "#ffffff" };
  }
};

/**
 * Generates accessible category ID from title
 * @param title - The category title
 * @returns Kebab-case ID string
 */
const generateCategoryId = (title: string): string => title.toLowerCase().replace(/\s+/g, "-");

// ==========================================
// Skill Badge Component
// ==========================================

const SkillBadge = memo<SkillBadgeProps>(({ skill, colors }) => {
  const badgeStyles = useMemo(
    () => ({
      backgroundColor: colors.bg,
      color: colors.text,
      borderColor: colors.bg,
    }),
    [colors.bg, colors.text],
  );

  const ariaLabel = `${skill} technology`;

  return (
    <Badge
      variant="secondary"
      style={badgeStyles}
      className="text-xs font-medium transition-all duration-200 ease-out hover:scale-105 hover:shadow-sm hover:shadow-black/10 focus-visible:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-default select-none px-3 py-1.5 rounded-full dark:hover:shadow-white/10"
      role="listitem"
      aria-label={ariaLabel}>
      {skill}
    </Badge>
  );
});

SkillBadge.displayName = "SkillBadge";

// ==========================================
// Skill Category Section Component
// ==========================================

interface SkillCategorySectionProps {
  readonly category: SkillCategory;
}

const SkillCategorySection = memo<SkillCategorySectionProps>(({ category }) => {
  const categoryId = useMemo(() => generateCategoryId(category.title), [category.title]);

  const headingId = `${categoryId}-heading`;
  const ariaLabel = `${category.title} technologies`;

  const skillBadges = useMemo(
    () =>
      category.items.map((skill) => (
        <SkillBadge
          key={skill}
          skill={skill}
          colors={getSkillColors(skill)}
        />
      )),
    [category.items],
  );

  return (
    <section
      className="space-y-4"
      role="region"
      aria-labelledby={headingId}>
      <h3
        id={headingId}
        className="text-xl font-bold tracking-wide text-foreground sm:text-2xl">
        {category.title}
      </h3>

      <div
        className="flex flex-wrap gap-2 sm:gap-3"
        role="list"
        aria-label={ariaLabel}>
        {skillBadges}
      </div>
    </section>
  );
});

SkillCategorySection.displayName = "SkillCategorySection";

// ==========================================
// Main Skills Component
// ==========================================

interface SkillsProps {
  readonly className?: string;
  readonly categories?: readonly SkillCategory[];
}

const Skills = memo<SkillsProps>(({ className, categories = SKILL_CATEGORIES }) => {
  const categorySections = useMemo(
    () =>
      categories.map((category) => (
        <SkillCategorySection
          key={category.title}
          category={category}
        />
      )),
    [categories],
  );

  const containerClassName = useMemo(() => {
    const baseClasses = "space-y-8 px-4 sm:space-y-10 sm:px-0";
    return className ? `${baseClasses} ${className}` : baseClasses;
  }, [className]);

  return (
    <section
      id="skills"
      className={containerClassName}
      aria-label="Skills and Technologies">
      <header>
        <h2
          id="current-skills-heading"
          className="text-2xl font-bold tracking-wide text-foreground sm:text-3xl">
          Skills & Technologies
        </h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Technologies I work with and am currently exploring
        </p>
      </header>

      <div className="space-y-8 sm:space-y-10">{categorySections}</div>
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;
