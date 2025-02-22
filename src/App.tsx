import { lazy, Suspense } from "react";
import { Loader2 } from "lucide-react";

const Navbar = lazy(() => import("./components/Navbar"));
const Introduction = lazy(() => import("./components/Introduction"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));

const LoadingSpinner = () => (
	<div className="flex justify-center items-center min-h-[200px]">
		<Loader2 className="h-8 w-8 animate-spin text-gray-500" />
	</div>
);

function App() {
	return (
		<>
			<div className="mx-auto flex min-h-screen max-w-3xl flex-col px-8 dark:bg-black">
				<Suspense fallback={<LoadingSpinner />}>
					<Navbar />
					<div className="space-y-8 py-8">
						<Introduction />
						<Experience />
						<Skills />
						<Projects />
					</div>
				</Suspense>
			</div>
		</>
	);
}

export default App;
