function Navbar() {
	return (
		<div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
			<div className="container flex items-center justify-center h-16 gap-8 mx-auto">
				<a
					href="#home"
					className="hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400">
					home
				</a>
				<a
					href="#skills"
					className="hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400">
					skills
				</a>
				<a
					href="#projects"
					className="hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400">
					projects
				</a>
			</div>
		</div>
	);
}

export default Navbar;
