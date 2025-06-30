import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { getErrorSeverity, logError } from "@/lib/error-utils";
import type { ErrorBoundaryState, ErrorInfo } from "@/lib/types";
import { AlertTriangle, RefreshCw } from "lucide-react";
import React, { memo, useCallback, useMemo } from "react";

// ==========================================
// Error Boundary Props Types
// ==========================================

interface ErrorBoundaryProps {
  readonly children: React.ReactNode;
  readonly fallback?: React.ComponentType<ErrorFallbackProps>;
  readonly onError?: (error: Error, errorInfo: ErrorInfo) => void;
  readonly level?: "page" | "section" | "component";
  readonly resetKeys?: readonly unknown[];
}

interface ErrorFallbackProps {
  readonly error: Error;
  readonly resetError: () => void;
  readonly level?: "page" | "section" | "component";
}

// ==========================================
// Error Boundary Component
// ==========================================

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private resetTimeoutId: number | null = null;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    const { level = "component", onError } = this.props;

    // Log error with context
    logError(error, errorInfo, level);

    // Determine severity and take appropriate action
    const severity = getErrorSeverity(error, level);

    if (severity === "critical") {
      // For critical errors, you might want to redirect or show a maintenance page
      console.warn("Critical error detected - consider implementing fallback strategy");
    }

    // Call optional error handler
    onError?.(error, errorInfo);
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps): void {
    const { resetKeys } = this.props;
    const { hasError } = this.state;

    if (hasError && prevProps.resetKeys !== resetKeys) {
      if (resetKeys?.some((resetKey, idx) => resetKey !== prevProps.resetKeys?.[idx])) {
        this.resetError();
      }
    }
  }

  componentWillUnmount(): void {
    if (this.resetTimeoutId) {
      clearTimeout(this.resetTimeoutId);
    }
  }

  resetError = (): void => {
    this.setState({ hasError: false, error: undefined });
  };

  render(): React.ReactNode {
    const { hasError, error } = this.state;
    const { children, fallback: Fallback, level = "component" } = this.props;

    if (hasError) {
      if (Fallback && error) {
        return (
          <Fallback
            error={error}
            resetError={this.resetError}
            level={level}
          />
        );
      }

      return (
        <DefaultErrorFallback
          error={error || new Error("Unknown error occurred")}
          resetError={this.resetError}
          level={level}
        />
      );
    }

    return children;
  }
}

// ==========================================
// Default Error Fallback Component
// ==========================================

interface DefaultErrorFallbackProps extends ErrorFallbackProps {
  readonly level: "page" | "section" | "component";
}

const DefaultErrorFallback = memo<DefaultErrorFallbackProps>(({ error, resetError, level }) => {
  const containerClasses = useMemo(() => {
    const baseClasses = "flex items-center justify-center p-4";
    const sizeClasses = {
      page: "min-h-screen",
      section: "min-h-[400px]",
      component: "min-h-[200px]",
    };
    return `${baseClasses} ${sizeClasses[level]}`;
  }, [level]);

  const handleRetry = useCallback(() => {
    resetError();
  }, [resetError]);

  const handleReload = useCallback(() => {
    window.location.reload();
  }, []);

  const errorMessage = useMemo(() => {
    if (import.meta.env.DEV) {
      return error.message || "An unexpected error occurred";
    }
    return "We're sorry, but something unexpected happened. Please try refreshing the page.";
  }, [error.message]);

  const showReloadOption = level === "page" || level === "section";

  return (
    <div
      className={containerClasses}
      role="alert"
      aria-live="assertive">
      <Alert className="max-w-md">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Something went wrong</AlertTitle>
        <AlertDescription className="mt-2">
          <p className="mb-4">{errorMessage}</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              onClick={handleRetry}
              variant="outline"
              size="sm"
              className="inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2">
              <RefreshCw className="h-4 w-4" />
              Try again
            </Button>
            {showReloadOption && (
              <Button
                onClick={handleReload}
                variant="outline"
                size="sm"
                className="inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2">
                <RefreshCw className="h-4 w-4" />
                Reload page
              </Button>
            )}
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
});

DefaultErrorFallback.displayName = "DefaultErrorFallback";

// ==========================================
// Specialized Error Fallback Components
// ==========================================

/**
 * Custom fallback component for project-specific error scenarios
 */
export const ProjectErrorFallback = memo<ErrorFallbackProps>(({ error, resetError }) => {
  const handleRetry = useCallback(() => {
    resetError();
  }, [resetError]);

  const errorMessage = useMemo(() => {
    if (import.meta.env.DEV) {
      return error.message;
    }
    return "Please check your connection and try again.";
  }, [error.message]);

  return (
    <div
      className="border rounded-lg p-6 text-center bg-card"
      role="alert"
      aria-live="polite">
      <AlertTriangle className="h-8 w-8 mx-auto mb-4 text-amber-500" />
      <h3 className="text-lg font-semibold mb-2">Failed to load projects</h3>
      <p className="text-muted-foreground mb-4">{errorMessage}</p>
      <Button
        onClick={handleRetry}
        variant="outline"
        size="sm"
        className="focus-visible:outline-2 focus-visible:outline-offset-2">
        <RefreshCw className="h-4 w-4 mr-2" />
        Retry
      </Button>
    </div>
  );
});

ProjectErrorFallback.displayName = "ProjectErrorFallback";

/**
 * Fallback component for image loading errors
 */
export const ImageErrorFallback = memo<{ alt?: string; onRetry?: () => void }>(({ alt = "Image", onRetry }) => (
  <div
    className="flex items-center justify-center bg-muted rounded-lg p-8 text-center"
    role="img"
    aria-label={`Failed to load ${alt}`}>
    <div>
      <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
      <p className="text-sm text-muted-foreground mb-2">Failed to load image</p>
      {onRetry && (
        <Button
          onClick={onRetry}
          variant="ghost"
          size="sm"
          className="text-xs">
          Try again
        </Button>
      )}
    </div>
  </div>
));

ImageErrorFallback.displayName = "ImageErrorFallback";

export default ErrorBoundary;
