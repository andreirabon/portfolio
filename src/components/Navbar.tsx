import { useCallback, useEffect, useState } from "react";

const Navbar: React.FC = () => {
	const [activeSection, setActiveSection] = useState("home");

	const handleScroll = useCallback(() => {
		// Add requestIdleCallback for better performance
		const handler = () => {
			const sections = document.querySelectorAll("section");
			const scrollPosition = window.scrollY + 100;

			let currentSection = "";
			sections.forEach((section) => {
				const top = section.offsetTop;
				const height = section.offsetHeight;
				const id = section.getAttribute("id") || "";

				if (scrollPosition >= top && scrollPosition < top + height) {
					currentSection = id;
				}
			});

			if (currentSection !== activeSection) {
				setActiveSection(currentSection);
				history.replaceState(null, "", `#${currentSection}`);
			}
		};

		if (window.requestIdleCallback) {
			window.requestIdleCallback(handler);
		} else {
			setTimeout(handler, 1);
		}
	}, [activeSection]);

	useEffect(() => {
		const throttledScroll = () => {
			let ticking = false;
			if (!ticking) {
				window.requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", throttledScroll, { passive: true });
		return () => window.removeEventListener("scroll", throttledScroll);
	}, [handleScroll]);

	return (
		<nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
			<div className="container flex items-center justify-center h-16 mx-auto overflow-x-auto gap-4 md:gap-8 px-4 md:px-8">
				{[
					{ id: "home", label: "Home" },
					{ id: "experiences", label: "Experience" },
					{ id: "skills", label: "Tech Stack" },
					{ id: "projects", label: "Projects" },
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
