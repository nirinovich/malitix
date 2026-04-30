import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  optimizeDeps: {
    include: ["lucide-react"],
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
          // Sanity Studio into its own chunk (only loaded on /admin)
          // Exclude @sanity/client and @sanity/image-url — they're small and used by blog
          if (
            id.includes("node_modules/sanity/") ||
            id.includes("node_modules\\sanity\\") ||
            id.includes("@sanity/vision") ||
            id.includes("@sanity/icons") ||
            id.includes("@sanity/ui") ||
            id.includes("sanity/structure")
          ) {
            return "sanity-studio";
          }
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
