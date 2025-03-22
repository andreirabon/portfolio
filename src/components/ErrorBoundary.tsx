import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
	children: ReactNode;
}

interface State {
	hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	};

	public static getDerivedStateFromError(): State {
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Uncaught error:", error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return (
				<div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
					<h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
					<p className="mb-4 text-gray-600 dark:text-gray-400">Please refresh the page and try again.</p>
					<button
						onClick={() => window.location.reload()}
						className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
						Refresh Page
					</button>
				</div>
			);
		}

		return this.props.children;
	}
}
