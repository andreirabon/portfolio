import { useCallback, useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    const sections = ["home", "projects-heading", "current-skills-heading", "experiences"];
    const current = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    if (current) setActiveSection(current);
  }, []);

  useEffect(() => {
    let ticking = false;

    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [handleScroll]);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <div className="container flex items-center justify-center h-16 mx-auto overflow-x-auto gap-4 md:gap-8 px-4 md:px-8">
        {[
          { id: "home", label: "Home" },
          { id: "projects-heading", label: "Featured Projects" },
          { id: "current-skills-heading", label: "Skills" },
          { id: "experiences", label: "Experiences" },
        ].map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-current={activeSection === id ? "page" : undefined}
            className={`inter transition-colors duration-200 cursor-pointer ${
              activeSection === id ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
            }`}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
