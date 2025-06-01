import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Declare global interface for React DevTools
interface ReactDevToolsHook {
  onCommitFiberRoot?: (id: unknown, root: unknown, priorityLevel: unknown) => void;
}

declare global {
  interface Window {
    __REACT_DEVTOOLS_GLOBAL_HOOK__?: ReactDevToolsHook;
  }
}

// Performance monitoring
if (import.meta.env.DEV) {
  // Enable React DevTools Profiler in development
  const hook: ReactDevToolsHook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__ ?? {};
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook;

  hook.onCommitFiberRoot = () => {
    // Custom profiling logic can go here
  };
}

// Get root element
const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element not found");
}

// Create React 19 root
const root = createRoot(container);

// Render app with StrictMode for development checks
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Performance monitoring in production
if (import.meta.env.PROD) {
  // Report Web Vitals
  import("web-vitals")
    .then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(console.log);
      onINP(console.log);
      onFCP(console.log);
      onLCP(console.log);
      onTTFB(console.log);
    })
    .catch(() => {
      // Silently fail if web-vitals is not available
    });
}

// Hot module replacement for development
if (import.meta.hot) {
  import.meta.hot.accept();
}
