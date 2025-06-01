import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react({
      // Enable React 19 features
      babel: {
        plugins: [
          // Add any React 19 specific babel plugins if needed
        ],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: [
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-separator",
            "@radix-ui/react-tabs",
            "@radix-ui/react-tooltip",
          ],
          carousel: ["embla-carousel-react"],
          icons: ["lucide-react", "react-icons"],
          utils: ["class-variance-authority", "clsx", "tailwind-merge"],
        },
      },
    },
    // Enable source maps for better debugging
    sourcemap: true,
    // Optimize for modern browsers
    target: "es2022",
    // Enable minification
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  // Enable better development experience
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: true,
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "@radix-ui/react-navigation-menu",
      "@radix-ui/react-separator",
      "@radix-ui/react-tabs",
      "@radix-ui/react-tooltip",
      "embla-carousel-react",
      "lucide-react",
    ],
  },
  // Enable CSS code splitting
  css: {
    devSourcemap: true,
  },
});
