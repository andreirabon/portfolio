function Navbar() {
	return (
		<div className="sticky top-0 z-50 bg-white dark:bg-black backdrop-blur-sm">
			<div className="container flex items-center justify-center h-16 gap-8 mx-auto">
				<a
					href="#home"
					className="inter text-white hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400">
					home
				</a>
				<a
					href="#experiences"
					className="inter hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400">
					experience
				</a>

				<a
					href="#skills"
					className="inter hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400">
					tech stack
				</a>
				<a
					href="#projects"
					className="inter hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400">
					projects
				</a>
			</div>
		</div>
	);
}

export default Navbar;
