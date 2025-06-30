import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS, PERSONAL_INFO, SKILL_COLORS } from "@/lib/constants";
import type { PersonalInfo, SkillColorValue, SocialLink } from "@/lib/types";
import { memo, useMemo } from "react";
import { CgNotes } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInformation2Line } from "react-icons/ri";

// ==========================================
// Type Guards and Validation
// ==========================================

/**
 * Type guard to validate PersonalInfo structure
 * @param data - Data to validate
 * @returns True if data is valid PersonalInfo
 */
const isValidPersonalInfo = (data: unknown): data is PersonalInfo => {
  return (
    typeof data === "object" &&
    data !== null &&
    "name" in data &&
    "title" in data &&
    "location" in data &&
    "image" in data &&
    "specializations" in data &&
    typeof (data as PersonalInfo).name === "string" &&
    typeof (data as PersonalInfo).title === "string" &&
    typeof (data as PersonalInfo).location === "string" &&
    typeof (data as PersonalInfo).image === "object" &&
    Array.isArray((data as PersonalInfo).specializations)
  );
};

/**
 * Type guard to validate external links structure
 * @param data - Data to validate
 * @returns True if data has required link properties
 */
const isValidExternalLinks = (data: unknown): data is Record<string, string> => {
  return (
    typeof data === "object" &&
    data !== null &&
    "LINKEDIN" in data &&
    "GITHUB" in data &&
    "RESUME" in data &&
    typeof (data as Record<string, string>).LINKEDIN === "string" &&
    typeof (data as Record<string, string>).GITHUB === "string" &&
    typeof (data as Record<string, string>).RESUME === "string"
  );
};

/**
 * Type guard to validate skill colors structure
 * @param data - Data to validate
 * @returns True if data is valid skill colors map
 */
const isValidSkillColors = (data: unknown): data is Record<string, SkillColorValue> => {
  return typeof data === "object" && data !== null;
};

// ==========================================
// Helper Functions
// ==========================================

/**
 * Handles external link navigation
 * @param url - The URL to navigate to
 * @param isFile - Whether the URL is a file (opens in same tab)
 */
const handleLinkClick = (url: string, isFile = false): void => {
  if (isFile) {
    window.open(url, "_blank");
  } else {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

/**
 * Safely gets skill colors with proper type checking
 * @param skill - The skill name
 * @returns SkillColorValue with proper fallback
 */
const getSafeSkillColors = (skill: string): SkillColorValue => {
  try {
    if (isValidSkillColors(SKILL_COLORS)) {
      const colors = SKILL_COLORS[skill];

      if ("bg" in colors && "text" in colors && typeof colors.bg === "string" && typeof colors.text === "string") {
        return colors;
      }
    }

    return { bg: "#6B7280", text: "#ffffff" };
  } catch {
    return { bg: "#6B7280", text: "#ffffff" };
  }
};

// ==========================================
// Safe Data Access
// ==========================================

const getSafePersonalInfo = (): PersonalInfo => {
  if (isValidPersonalInfo(PERSONAL_INFO)) {
    return PERSONAL_INFO;
  }

  // Fallback with properly typed default values
  return {
    name: "Andrei Rabon",
    title: "Full Stack Developer",
    location: "Philippines",
    image: {
      src: "meram.png",
      alt: "Profile picture",
    },
    specializations: ["Vue.js", "Laravel"],
  };
};

const getSafeExternalLinks = (): Record<string, string> => {
  if (isValidExternalLinks(EXTERNAL_LINKS)) {
    const links = EXTERNAL_LINKS as Record<string, string>;
    return {
      LINKEDIN: links.LINKEDIN,
      GITHUB: links.GITHUB,
      RESUME: links.RESUME,
    };
  }

  // Fallback with safe default values
  return {
    LINKEDIN: "#",
    GITHUB: "#",
    RESUME: "#",
  };
};

// ==========================================
// Social Links Configuration
// ==========================================

const safeLinks = getSafeExternalLinks();

const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    url: safeLinks.LINKEDIN,
    label: "LinkedIn",
    icon: <FaLinkedin className="mr-2 group-hover:scale-110 transition-transform" />,
  },
  {
    url: safeLinks.GITHUB,
    label: "GitHub",
    icon: <FaGithub className="mr-2 group-hover:scale-110 transition-transform" />,
  },
  {
    url: safeLinks.RESUME,
    label: "Curriculum Vitae",
    icon: <CgNotes className="mr-2 group-hover:scale-110 transition-transform" />,
  },
] as const;

// ==========================================
// Specialization Badge Component
// ==========================================

interface SpecializationBadgeProps {
  readonly skill: string;
}

const SpecializationBadge = memo<SpecializationBadgeProps>(({ skill }) => {
  const skillColors = getSafeSkillColors(skill);

  const badgeStyle = useMemo(
    () => ({
      backgroundColor: skillColors.bg,
      color: skillColors.text,
    }),
    [skillColors],
  );

  return (
    <span
      style={badgeStyle}
      className="px-2 py-1 rounded text-xs font-medium transition-all duration-200 hover:scale-105"
      role="img"
      aria-label={`${skill} specialization`}>
      {skill}
    </span>
  );
});

SpecializationBadge.displayName = "SpecializationBadge";

// ==========================================
// Social Link Button Component
// ==========================================

interface SocialLinkButtonProps {
  readonly link: SocialLink;
}

const SocialLinkButton = memo<SocialLinkButtonProps>(({ link }) => {
  const isResumeFile = link.url.endsWith(".pdf");

  const handleClick = (): void => {
    handleLinkClick(link.url, isResumeFile);
  };

  return (
    <Button
      variant="outline"
      className="inter group px-6 py-2 text-white border-white dark:hover:bg-white dark:hover:text-black transition-all focus-visible:outline-2 focus-visible:outline-offset-2"
      onClick={handleClick}
      aria-label={`Visit ${link.label}`}>
      {link.icon}
      <span>{link.label}</span>
    </Button>
  );
});

SocialLinkButton.displayName = "SocialLinkButton";

// ==========================================
// Main Introduction Component
// ==========================================

interface IntroductionProps {
  readonly className?: string;
}

const Introduction = memo<IntroductionProps>(({ className }) => {
  const containerClassName = useMemo(() => {
    const baseClasses = "space-y-6";
    return className ? `${baseClasses} ${className}` : baseClasses;
  }, [className]);

  // Safely handle personal info with proper fallbacks
  const safePersonalInfo = useMemo(() => getSafePersonalInfo(), []);

  const specializationBadges = useMemo(
    () =>
      safePersonalInfo.specializations.map((skill: string) => (
        <SpecializationBadge
          key={skill}
          skill={skill}
        />
      )),
    [safePersonalInfo.specializations],
  );

  const socialButtons = useMemo(
    () =>
      SOCIAL_LINKS.map((link) => (
        <SocialLinkButton
          key={link.label}
          link={link}
        />
      )),
    [],
  );

  // Safe name processing
  const firstName = useMemo(() => {
    const name = safePersonalInfo.name;
    return name.toLowerCase().split(" ")[0] || "andrei";
  }, [safePersonalInfo.name]);

  return (
    <section
      id="home"
      className={containerClassName}
      aria-label="Introduction and Contact Information">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="space-y-6">
          <header>
            <h1 className="calistoga text-4xl md:text-6xl font-bold">
              hi {firstName} here{" "}
              <span
                className="animate-wave inline-block"
                role="img"
                aria-label="waving hand">
                🤙🏽
              </span>
            </h1>
            <p className="inter-desc text-lg md:text-xl mt-4">
              a <span className="border-b-1 border-white pb-0.1 font-medium">{safePersonalInfo.title}</span> based in
              the {safePersonalInfo.location.toLowerCase()}.
            </p>
          </header>

          <Alert className="border-muted-foreground/20">
            <RiInformation2Line className="h-4 w-4" />
            <AlertDescription className="flex items-center gap-2 flex-wrap">
              <span>Currently specializing in</span>
              {specializationBadges.reduce<React.ReactNode[]>((acc, badge, index) => {
                if (index === specializationBadges.length - 1) {
                  return [...acc, badge];
                }
                if (index === specializationBadges.length - 2) {
                  return [...acc, badge, <span key={`separator-${String(index)}`}> and </span>];
                }
                return [...acc, badge, <span key={`separator-${String(index)}`}>, </span>];
              }, [])}
            </AlertDescription>
          </Alert>
        </div>

        <div className="shrink-0">
          <img
            src={safePersonalInfo.image.src}
            alt={safePersonalInfo.image.alt}
            className="rounded-full w-48 h-48 md:w-49 md:h-49 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            loading="eager"
            width={196}
            height={196}
          />
        </div>
      </div>

      <nav
        className="flex flex-row flex-wrap gap-4"
        aria-label="Social Links and Resume">
        {socialButtons}
      </nav>
    </section>
  );
});

Introduction.displayName = "Introduction";

export default Introduction;
