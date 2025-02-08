import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects";
function App() {
	return (
		<>
			<div className="mx-auto flex min-h-screen max-w-3xl flex-col px-8 dark:bg-black">
				<Navbar />
				<Introduction />
				<br />
				<Skills />
				<br />
				<Projects />
			</div>
		</>
	);
}

export default App;
