import ErrorBoundary from "@/components/ErrorBoundary";
import { usePerformance } from "@/hooks/usePerformance";
import type { ErrorInfo } from "@/lib/types";
import { Loader2 } from "lucide-react";
import React, { lazy, Suspense, useCallback } from "react";

// Lazy load components with better chunk naming
// const Navbar = lazy(() =>
//   import("./components/Navbar").then((module) => ({
//     default: module.default,
//   })),
// );

const Introduction = lazy(() =>
  import("./components/Introduction").then((module) => ({
    default: module.default,
  })),
);

const Skills = lazy(() =>
  import("./components/Skills").then((module) => ({
    default: module.default,
  })),
);

const Projects = lazy(() =>
  import("./components/Projects").then((module) => ({
    default: module.default,
  })),
);

const Experience = lazy(() =>
  import("./components/Experience").then((module) => ({
    default: module.default,
  })),
);

// Enhanced loading spinner with better UX
const LoadingSpinner = React.memo(() => (
  <div
    className="flex justify-center items-center min-h-[200px]"
    role="status"
    aria-label="Loading content">
    <div className="flex flex-col items-center space-y-4">
      <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      <span className="text-sm text-muted-foreground">Loading...</span>
    </div>
  </div>
));

LoadingSpinner.displayName = "LoadingSpinner";

// Component-specific loading states
const NavbarSkeleton = React.memo(() => <div className="h-16 bg-muted/50 rounded animate-pulse" />);

const SectionSkeleton = React.memo(() => (
  <div className="space-y-4">
    <div className="h-8 bg-muted/50 rounded w-1/3 animate-pulse" />
    <div className="h-32 bg-muted/50 rounded animate-pulse" />
  </div>
));

NavbarSkeleton.displayName = "NavbarSkeleton";
SectionSkeleton.displayName = "SectionSkeleton";

function App() {
  const { markStart, markEnd } = usePerformance({
    componentName: "App",
    threshold: 100,
  });

  // Handle global errors
  const handleError = useCallback((error: Error, errorInfo: ErrorInfo) => {
    console.error("Global error:", error, errorInfo);
    // Here you could send to analytics/error reporting service
    if (import.meta.env.PROD) {
      // Send to error reporting service like Sentry
    }
  }, []);

  React.useEffect(() => {
    markStart();
    return () => {
      markEnd();
    };
  }, [markStart, markEnd]);

  return (
    <ErrorBoundary onError={handleError}>
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-8 dark:bg-black">
        {/* <Suspense fallback={<NavbarSkeleton />}>
          <Navbar />
        </Suspense> */}

        <main className="space-y-8 py-8">
          <div id="home">
            <ErrorBoundary>
              <Suspense fallback={<SectionSkeleton />}>
                <Introduction />
              </Suspense>
            </ErrorBoundary>
          </div>

          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton />}>
              <Projects />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton />}>
              <Skills />
            </Suspense>
          </ErrorBoundary>

          <div id="experiences">
            <ErrorBoundary>
              <Suspense fallback={<SectionSkeleton />}>
                <Experience />
              </Suspense>
            </ErrorBoundary>
          </div>
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;
