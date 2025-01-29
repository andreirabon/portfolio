import "./style.css";

document.querySelector("#navbar").innerHTML = `
<div class="bg-white dark:bg-gray-900">
			<header class="absolute inset-x-0 top-0 z-50">
				<nav
					class="flex items-center justify-center p-6 lg:px-8"
					aria-label="Global">
					<button
						type="button"
						aria-controls="mobile-menu"
						aria-expanded="false"
						class="absolute left-6 flex lg:hidden -m-2.5 items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
					<div class="hidden lg:flex lg:gap-x-12">
						<a
							href="#about"
							class="text-sm/6 font-semibold text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
							>About Me</a
						>
						<a
							href="#projects"
							class="text-sm/6 font-semibold text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
							>Projects</a
						>
					</div>
				</nav>

				<!-- Mobile menu, show/hide based on menu open state. -->
				<div
					id="mobile-menu"
					class="lg:hidden hidden"
					role="dialog"
					aria-modal="true">
					<!-- Background backdrop, show/hide based on slide-over state. -->
					<div
						class="fixed inset-0 z-50 bg-gray-900/50 dark:bg-black/50 backdrop-blur-sm"
						aria-hidden="true"></div>
					<div
						class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-100/10">
						<div class="flex items-center justify-between">
							<button
								type="button"
								class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200">
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
							<div
								class="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/50">
								<div class="space-y-2 py-6">
									<a
										href="#about"
										class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
										>About Me</a
									>
									<a
										href="#projects"
										class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
										>Projects</a
									>
								</div>
								<div class="py-6"></div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div class="relative isolate px-6 pt-14 lg:px-8">
				<div
					class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					aria-hidden="true">
					<div
						class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#48c9b0] to-[##48c9b0] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style="
							clip-path: polygon(
								74.1% 44.1%,
								100% 61.6%,
								97.5% 26.9%,
								85.5% 0.1%,
								80.7% 2%,
								72.5% 32.5%,
								60.2% 62.4%,
								52.4% 68.1%,
								47.5% 58.3%,
								45.2% 34.5%,
								27.5% 76.7%,
								0.1% 64.9%,
								17.9% 100%,
								27.6% 76.8%,
								76.1% 97.7%,
								74.1% 44.1%
							);
						"></div>
				</div>
				<div class="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
					<h1
						class="mb-4 text-4xl font-bold tracking-tighter text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl text-center">
						Ola, I'm
						<span
							class="bg-gradient-to-r from-emerald-400 to-emerald-600 dark:from-emerald-300 dark:to-emerald-500 bg-clip-text text-transparent hover:from-emerald-500 hover:to-emerald-700 dark:hover:from-emerald-400 dark:hover:to-emerald-600 transition-colors">
							Andrei Rabon
						</span>
					</h1>
					<div class="text-center">
						<h2
							class="text-4xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-100 sm:text-6xl font-inter1">
							a Web developer based in the Philippines.
						</h2>
						<p
							class="mt-6 text-justify text-lg font-medium text-pretty text-gray-500 dark:text-gray-400 sm:text-xl/8 max-w-prose mx-auto font-inter2">
							With three years of dedicated experience as a
							<span class="font-semibold">Quality Assurance Tester</span>. I'm
							transitioning back to my foundational role as a
							<span class="font-semibold">Web Developer</span>, focusing on
							<span class="font-semibold">React</span> to develop web
							applications.
						</p>
					</div>
				</div>
				<!-- <div
					class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true">
					<div
						class="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#48c9b0] to-[#48c9b0] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style="
							clip-path: polygon(
								74.1% 44.1%,
								100% 61.6%,
								97.5% 26.9%,
								85.5% 0.1%,
								80.7% 2%,
								72.5% 32.5%,
								60.2% 62.4%,
								52.4% 68.1%,
								47.5% 58.3%,
								45.2% 34.5%,
								27.5% 76.7%,
								0.1% 64.9%,
								17.9% 100%,
								27.6% 76.8%,
								76.1% 97.7%,
								74.1% 44.1%
							);
						"></div>
				</div> -->
			</div>
		</div>
`;
