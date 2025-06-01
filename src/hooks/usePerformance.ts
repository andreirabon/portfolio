import type { PerformanceMetrics } from "@/lib/types";
import { useEffect, useRef } from "react";

interface UsePerformanceOptions {
  componentName: string;
  enabled?: boolean;
  threshold?: number; // Log only if render time exceeds threshold (ms)
  onMetric?: (metric: PerformanceMetrics) => void;
}

export const usePerformance = ({
  componentName,
  enabled = import.meta.env.DEV,
  threshold = 16, // 16ms = 60fps
  onMetric,
}: UsePerformanceOptions) => {
  const startTimeRef = useRef<number>(0);
  const mountTimeRef = useRef<number>(0);

  // Mark component start time
  const markStart = () => {
    if (!enabled) return;
    startTimeRef.current = performance.now();
  };

  // Mark component end time and calculate metrics
  const markEnd = () => {
    if (!enabled || !startTimeRef.current) return;

    const endTime = performance.now();
    const renderTime = endTime - startTimeRef.current;

    const metric: PerformanceMetrics = {
      renderTime,
      componentName,
    };

    // Log if exceeds threshold
    if (renderTime > threshold) {
      console.warn(`🐌 Slow render detected: ${componentName} took ${renderTime.toFixed(2)}ms`, metric);
    }

    // Call custom metric handler
    onMetric?.(metric);

    // Reset start time
    startTimeRef.current = 0;
  };

  // Track mount time
  useEffect(() => {
    if (!enabled) return;

    mountTimeRef.current = performance.now();

    return () => {
      if (mountTimeRef.current) {
        const mountTime = performance.now() - mountTimeRef.current;
        console.log(`📊 ${componentName} mount time: ${mountTime.toFixed(2)}ms`);
      }
    };
  }, [componentName, enabled]);

  return { markStart, markEnd };
};

// Hook for measuring specific operations
export const useMeasure = (enabled: boolean = import.meta.env.DEV) => {
  const measure = (name: string, fn: () => void | Promise<void>) => {
    if (!enabled) {
      return typeof fn === "function" ? fn() : Promise.resolve();
    }

    const start = performance.now();
    const result = fn();

    if (result instanceof Promise) {
      return result.finally(() => {
        const duration = performance.now() - start;
        console.log(`⏱️ ${name}: ${duration.toFixed(2)}ms`);
      });
    } else {
      const duration = performance.now() - start;
      console.log(`⏱️ ${name}: ${duration.toFixed(2)}ms`);
      return result;
    }
  };

  return { measure };
};

// Hook for detecting slow renders with React 19 features
export const useRenderTracker = (componentName: string) => {
  const renderCountRef = useRef(0);
  const lastRenderTimeRef = useRef(0);

  useEffect(() => {
    renderCountRef.current += 1;
    const now = performance.now();

    if (lastRenderTimeRef.current > 0) {
      const timeSinceLastRender = now - lastRenderTimeRef.current;

      if (import.meta.env.DEV) {
        console.log(
          `🔄 ${componentName} render #${String(renderCountRef.current)} (${timeSinceLastRender.toFixed(
            2,
          )}ms since last)`,
        );
      }
    }

    lastRenderTimeRef.current = now;
  });

  return renderCountRef.current;
};
