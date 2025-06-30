import type { ErrorInfo } from "./types";

// ==========================================
// Error Logging Utilities
// ==========================================

/**
 * Logs error to external service based on environment
 * @param error - The error object
 * @param errorInfo - Additional error information
 * @param level - The error boundary level
 */
export const logError = (error: Error, errorInfo: ErrorInfo, level: string = "component"): void => {
  const errorData = {
    message: error.message,
    stack: error.stack,
    componentStack: errorInfo.componentStack,
    digest: errorInfo.digest,
    level,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    url: window.location.href,
  };

  if (import.meta.env.PROD) {
    // In production, send to error tracking service
    console.error("Error Boundary caught error:", errorData);

    // TODO: Integrate with error tracking service (Sentry, LogRocket, etc.)
    // Example: Sentry.captureException(error, { extra: errorData });
  } else {
    // In development, log to console with more detail
    console.group("🚨 Error Boundary");
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);
    console.error("Full Context:", errorData);
    console.groupEnd();
  }
};

/**
 * Determines error severity based on error type and level
 * @param error - The error object
 * @param level - The error boundary level
 * @returns Error severity level
 */
export const getErrorSeverity = (error: Error, level: string): "low" | "medium" | "high" | "critical" => {
  if (level === "page") return "critical";
  if (level === "section") return "high";

  // Check error type for component level
  if (error.name === "ChunkLoadError" || error.message.includes("Loading chunk")) {
    return "medium";
  }

  if (error.name === "TypeError" || error.name === "ReferenceError") {
    return "high";
  }

  return "low";
};
