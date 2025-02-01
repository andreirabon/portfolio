import "./style.css";

document.querySelector("#navbar").innerHTML = `
<div class="bg-[##FFFEFC]">
			<header class="absolute inset-x-0 top-0 z-50">
				<nav
					class="flex items-center justify-between p-4 sm:p-6 lg:px-8"
					aria-label="Global">
					<div class="flex flex-1">
						<h1
							class="-mx-3 block rounded-lg px-3 py-2 text-xl sm:text-2xl font-bold text-black hover:bg-[#FFFEFC] transition-colors">
							Andrei<span class="text-[#20b2aa]">.</span>
						</h1>
					</div>
					<button
						type="button"
						aria-controls="mobile-menu"
						aria-expanded="false"
						class="flex sm:hidden -m-2.5 items-center justify-center rounded-md p-2.5 text-black hover:bg-[#FFFEFC] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#20b2aa]">
						<span class="sr-only">Open main menu</span>
						<svg
							class="size-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					</button>
					<div
						class="hidden sm:flex sm:gap-x-6 lg:gap-x-12 backdrop-blur-sm bg-[#FFFEFC] rounded-full px-6 py-2 shadow-lg ring-1 ring-black/5">
						<a
							href="#"
							class="text-sm/6 font-bold text-black hover:text-[#20b2aa] px-1 py-1 rounded-lg hover:bg-gray-50">
							About Me
						</a>
                        <a
							href="#skills"
							class="text-sm/6 font-bold text-black hover:text-[#20b2aa] px-1 py-1 rounded-lg hover:bg-gray-50">
							Skills
						</a>
						<a
							href="#projects"
							class="text-sm/6 font-bold text-black hover:text-[#20b2aa] px-1 py-1 rounded-lg hover:bg-gray-50">
							Projects
						</a>
					</div>
					<div class="hidden sm:flex sm:flex-1 sm:justify-end"></div>
				</nav>

				<!-- Mobile menu, show/hide based on menu open state. -->
				<div
					id="mobile-menu"
					class="lg:hidden hidden"
					role="dialog"
					aria-modal="true">
					<!-- Background backdrop, show/hide based on slide-over state. -->
					<div
						class="fixed inset-0 z-50 bg-black backdrop-blur-sm"
						aria-hidden="true"></div>
					<div
						class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#FFFEFC] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-black">
						<div class="flex items-center justify-between">
							<button
								type="button"
								class="-m-2.5 rounded-md p-2.5 text-black">
								<span class="sr-only">Close menu</span>
								<svg
									class="size-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
									data-slot="icon">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6 18 18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
						<div class="mt-6 flow-root">
							<div class="-my-6 divide-y divide-black">
								<div class="space-y-2 py-6">
									<a
										href="#"
										class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black hover:bg-[#FFFEFC]"
										>About Me</a
									>
                                    <a
										href="#skills"
										class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black hover:bg-[#FFFEFC]"
										>Skills</a
									>
									<a
										href="#projects"
										class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black hover:bg-[#FFFEFC]"
										>Projects</a
									>
								</div>
								<div class="py-6"></div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
`;

document.querySelector("#andrei").innerHTML = `
<div class="relative isolate px-6 pt-14 lg:px-8">
				<div class="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
					<div class="flex justify-center items-center">
						<img
							src="/andrei.png"
							alt="Andrei Rabon"
							class="size-32 sm:size-40 md:size-48 rounded-full object-cover"
							loading="lazy"
							width="192"
							height="192" />
					</div>
					<h1
						class="mb-4 text-4xl font-bold tracking-tighter text-black sm:text-5xl md:text-6xl text-center font-inter">
						I'm
						<span class="text-[#20b2aa]"> Andrei Rabon </span>
					</h1>
					<div class="text-center">
						<h2
							class="text-4xl text-center font-semibold tracking-tight text-balance text-black sm:text-6xl font-inter">
							a Web developer based in the Philippines.
						</h2>
						<p
							class="mt-6 text-justify text-lg font-medium text-pretty text-black sm:text-xl/8 max-w-prose mx-auto font-inter">
							With three years of dedicated experience as a
							<span class="font-bold">Quality Assurance Tester</span>. I'm now
							refocusing on my primary expertise as a
							<span class="font-bold">Web Developer</span>, specializing in
							<span class="font-bold">React</span>. This transition enables me
							to leverage my background in quality assurance in conjunction with
							my development skills to create efficient and effective
							single-page applications.
						</p>
					</div>
				</div>
			</div>
`;

document.querySelector("#skills").innerHTML = `
<div
			id="skills"
			class="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
			<div class="max-w-4xl mx-auto">
				<h2
					class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
					Skills</a>
				</h2>
				<div
					class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
					<!-- HTML Skill -->
					<div
						class="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transform hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 hover:outline-2 hover:outline-[#20b2aa]">
						<img
							src="html.webp"
							alt="HTML"
							class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
						<h3
							class="text-lg sm:text-xl font-semibold text-black mb-1 sm:mb-2 text-center">
							HTML
						</h3>
					</div>

					<!-- CSS Skill -->
					<div
						class="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transform hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 hover:outline-2 hover:outline-[#20b2aa]">
						<img
							src="css.webp"
							alt="CSS"
							class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
						<h3
							class="text-lg sm:text-xl font-semibold text-black mb-1 sm:mb-2 text-center">
							CSS
						</h3>
					</div>

					<!-- JavaScript Skill -->
					<div
						class="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transform hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 hover:outline-2 hover:outline-[#20b2aa]">
						<img
							src="javascript.webp"
							alt="JavaScript"
							class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
						<h3
							class="text-lg sm:text-xl font-semibold text-black mb-1 sm:mb-2 text-center">
							JavaScript
						</h3>
					</div>

					<!-- PHP Skill -->
					<div
						class="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transform hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 hover:outline-2 hover:outline-[#20b2aa]">
						<img
							src="php.webp"
							alt="PHP"
							class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
						<h3
							class="text-lg sm:text-xl font-semibold text-black mb-1 sm:mb-2 text-center">
							PHP
						</h3>
					</div>

					<!-- Laravel Skill -->
					<div
						class="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transform hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 hover:outline-2 hover:outline-[#20b2aa]">
						<img
							src="laravel.webp"
							alt="Laravel"
							class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
						<h3
							class="text-lg sm:text-xl font-semibold text-black mb-1 sm:mb-2 text-center">
							Laravel
						</h3>
					</div>

					<!-- TypeScript Skill -->
					<div
						class="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transform hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 hover:outline-2 hover:outline-[#20b2aa]">
						<img
							src="typescript.webp"
							alt="TypeScript"
							class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
						<h3
							class="text-lg sm:text-xl font-semibold text-black mb-1 sm:mb-2 text-center">
							TypeScript
						</h3>
					</div>

					<!-- Tailwind CSS Skill -->
					<div
						class="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transform hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 hover:outline-2 hover:outline-[#20b2aa]">
						<img
							src="tailwindcss.svg"
							alt="Tailwind CSS"
							class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
						<h3
							class="text-lg sm:text-xl font-semibold text-black mb-1 sm:mb-2 text-center">
							Tailwind CSS
						</h3>
					</div>

					<!-- React Skill -->
					<div
						class="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transform hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 hover:outline-2 hover:outline-[#20b2aa]">
						<img
							src="react.webp"
							alt="React"
							class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
						<h3
							class="text-lg sm:text-xl font-semibold text-black mb-1 sm:mb-2 text-center">
							React
						</h3>
					</div>

					<!-- Next.js Skill -->
					<div
						class="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transform hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 hover:outline-2 hover:outline-[#20b2aa]">
						<img
							src="nextjs.webp"
							alt="Next.js"
							class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
						<h3
							class="text-lg sm:text-xl font-semibold text-black mb-1 sm:mb-2 text-center">
							Next.js
						</h3>
					</div>

					<!-- PostgreSQL Skill -->
					<div
						class="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transform hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 hover:outline-2 hover:outline-[#20b2aa]">
						<img
							src="postgresql.webp"
							alt="PostgreSQL"
							class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
						<h3
							class="text-lg sm:text-xl font-semibold text-black mb-1 sm:mb-2 text-center">
							PostgreSQL
						</h3>
					</div>

					<!-- Playwright Skill -->
					<div
						class="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transform hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 hover:outline-2 hover:outline-[#20b2aa]">
						<img
							src="playwright.webp"
							alt="Playwright"
							class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
						<h3
							class="text-lg sm:text-xl font-semibold text-black mb-1 sm:mb-2 text-center">
							Playwright
						</h3>
					</div>

					<!-- Figma Skill -->
					<div
						class="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transform hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 hover:outline-2 hover:outline-[#20b2aa]">
						<img
							src="figma.webp"
							alt="Figma"
							class="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
						<h3
							class="text-lg sm:text-xl font-semibold text-black mb-1 sm:mb-2 text-center">
							Figma
						</h3>
					</div>
				</div>
			</div>
		</div>
`;

document.querySelector("#projects").innerHTML = `
<section
			id="projects"
			class="mb-20 px-4 sm:px-6 lg:px-8">
			<h2 class="text-2xl sm:text-3xl font-bold text-black mb-8 text-center">
				Projects (Work in Progress)
			</h2>

			<div
				class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
				<!-- Project 1 -->
				<div
					class="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden transform hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 hover:outline-2 hover:outline-[#20b2aa]">
					<img
						src="project1.jpg"
						alt="Project 1"
						class="w-full h-40 sm:h-48 object-cover"
						loading="lazy"
						width="400"
						height="240" />
					<div class="p-4 sm:p-6">
						<h3 class="text-lg sm:text-xl font-semibold text-black mb-2">
							Project 1
						</h3>
						<p class="text-sm sm:text-base text-gray-600 mb-4">
							Project 1 description.
						</p>
						<a
							href="#"
							class="text-sm sm:text-base text-[#20b2aa] font-medium"
							>View Details →</a
						>
					</div>
				</div>

				<!-- Project 2 -->
				<div
					class="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden transform hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 hover:outline-2 hover:outline-[#20b2aa]">
					<img
						src="project1.jpg"
						alt="Project 2"
						class="w-full h-40 sm:h-48 object-cover"
						loading="lazy"
						width="400"
						height="240" />
					<div class="p-4 sm:p-6">
						<h3 class="text-lg sm:text-xl font-semibold text-black mb-2">
							Project 2
						</h3>
						<p class="text-sm sm:text-base text-gray-600 mb-4">
							Project 2 description.
						</p>
						<a
							href="#"
							class="text-sm sm:text-base text-[#20b2aa] font-medium"
							>View Details →</a
						>
					</div>
				</div>
			</div>
		</section>
`;
