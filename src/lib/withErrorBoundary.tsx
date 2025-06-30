import { ErrorBoundary } from "@/components/ErrorBoundary";
import { memo } from "react";
import type { ErrorInfo } from "./types";

// ==========================================
// Higher-Order Component for Error Boundaries
// ==========================================

interface ErrorBoundaryProps {
  readonly children: React.ReactNode;
  readonly fallback?: React.ComponentType<any>;
  readonly onError?: (error: Error, errorInfo: ErrorInfo) => void;
  readonly level?: "page" | "section" | "component";
  readonly resetKeys?: readonly unknown[];
}

/**
 * HOC that wraps a component with an error boundary
 * @param Component - The component to wrap
 * @param errorBoundaryProps - Props for the error boundary
 * @returns Wrapped component with error boundary
 */
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, "children">,
) {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;

  return memo(WrappedComponent);
}
