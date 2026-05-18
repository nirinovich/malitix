import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  optimizeDeps: {
    include: ["lucide-react", "react-hook-form"],
  },
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80, lossless: false },
      avif: { quality: 50, lossless: false },
      svg: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                removeViewBox: false,
                cleanupNumericValues: false,
              },
            },
          },
        ],
      },
      includePublic: true,
      logStats: true,
      cache: true,
      cacheLocation: "node_modules/.cache/image-optimizer",
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Removed manual chunking for sanity-studio because it was trapping Vite's preload helper
          // and shared dependencies, causing a 5.7MB chunk to load on the homepage.
          // Vite's default dynamic import chunking will handle Sanity Studio automatically
          // since it's lazy-loaded in admin.tsx.
          if (
            id.includes("/node_modules/react/") ||
            id.includes("\\node_modules\\react\\") ||
            id.includes("/node_modules/react-dom/") ||
            id.includes("\\node_modules\\react-dom\\") ||
            id.includes("/node_modules/scheduler/") ||
            id.includes("\\node_modules\\scheduler\\")
          ) {
            return "react-vendor";
          }
        },
      },
    },
    // Warn when chunks exceed 200KB
    chunkSizeWarningLimit: 200,
  },
});
