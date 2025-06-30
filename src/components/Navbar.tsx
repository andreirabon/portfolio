import { NAVIGATION_ITEMS } from "@/lib/constants";
import type { NavItem } from "@/lib/types";
import { memo, useCallback, useEffect, useMemo, useState } from "react";

// ==========================================
// Navigation Constants
// ==========================================

const SCROLL_THRESHOLD = 100;
const SCROLL_BEHAVIOR_OPTIONS: ScrollIntoViewOptions = {
  behavior: "smooth",
  block: "start",
};

// ==========================================
// Helper Functions
// ==========================================

/**
 * Smoothly scrolls to a target element
 * @param targetId - The ID of the element to scroll to
 */
const scrollToElement = (targetId: string): void => {
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView(SCROLL_BEHAVIOR_OPTIONS);
  }
};

/**
 * Determines which section is currently active based on scroll position
 * @param sections - Array of section IDs to check
 * @returns The ID of the active section or null
 */
const getActiveSection = (sections: readonly string[]): string | null => {
  for (const sectionId of sections) {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= SCROLL_THRESHOLD && rect.bottom >= SCROLL_THRESHOLD) {
        return sectionId;
      }
    }
  }
  return null;
};

/**
 * Type guard to validate NavItem structure
 * @param item - Item to validate
 * @returns True if item is a valid NavItem
 */
const isValidNavItem = (item: unknown): item is NavItem => {
  return (
    typeof item === "object" &&
    item !== null &&
    "id" in item &&
    "label" in item &&
    typeof (item as NavItem).id === "string" &&
    typeof (item as NavItem).label === "string"
  );
};

/**
 * Safely validates and filters navigation items
 * @param items - Items to validate
 * @returns Array of valid NavItems
 */
const getSafeNavItems = (items: unknown): readonly NavItem[] => {
  if (Array.isArray(items)) {
    return items.filter(isValidNavItem);
  }
  return [];
};

// ==========================================
// Navigation Link Component
// ==========================================

interface NavLinkProps {
  readonly item: NavItem;
  readonly isActive: boolean;
  readonly onClick: (id: string) => void;
}

const NavLink = memo<NavLinkProps>(({ item, isActive, onClick }) => {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      onClick(item.id);
    },
    [item.id, onClick],
  );

  const className = useMemo(() => {
    const baseClasses =
      "inter transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm px-2 py-1";
    return isActive
      ? `${baseClasses} text-primary font-medium`
      : `${baseClasses} text-muted-foreground hover:text-primary`;
  }, [isActive]);

  return (
    <a
      href={`#${item.id}`}
      onClick={handleClick}
      aria-current={isActive ? "page" : undefined}
      className={className}
      role="menuitem">
      {item.label}
    </a>
  );
});

NavLink.displayName = "NavLink";

// ==========================================
// Main Navbar Component
// ==========================================

interface NavbarProps {
  readonly items?: readonly NavItem[];
  readonly className?: string;
}

const Navbar = memo<NavbarProps>(({ items, className }) => {
  // Safely handle navigation items with proper fallback
  const safeItems = useMemo((): readonly NavItem[] => {
    if (items) {
      return getSafeNavItems(items);
    }
    return getSafeNavItems(NAVIGATION_ITEMS);
  }, [items]);

  const [activeSection, setActiveSection] = useState<string>(() => {
    return safeItems.length > 0 ? safeItems[0].id : "home";
  });

  // Memoize section IDs to prevent recreation on every render
  const sectionIds = useMemo(() => {
    return safeItems.map((item) => item.id);
  }, [safeItems]);

  const handleScroll = useCallback(() => {
    const current = getActiveSection(sectionIds);
    if (current) {
      setActiveSection(current);
    }
  }, [sectionIds]);

  const handleNavClick = useCallback((id: string) => {
    setActiveSection(id);
    scrollToElement(id);
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

    // Set initial active section
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [handleScroll]);

  const navLinks = useMemo(
    () =>
      safeItems.map((item) => (
        <NavLink
          key={item.id}
          item={item}
          isActive={activeSection === item.id}
          onClick={handleNavClick}
        />
      )),
    [safeItems, activeSection, handleNavClick],
  );

  const containerClassName = useMemo(() => {
    const baseClasses = "sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-border/50";
    return className ? `${baseClasses} ${className}` : baseClasses;
  }, [className]);

  return (
    <nav
      className={containerClassName}
      role="navigation"
      aria-label="Main navigation">
      <div className="container flex items-center justify-center h-16 mx-auto overflow-x-auto gap-4 md:gap-8 px-4 md:px-8">
        <div
          className="flex items-center gap-4 md:gap-8"
          role="menubar"
          aria-orientation="horizontal">
          {navLinks}
        </div>
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
