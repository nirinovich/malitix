import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
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
          if (id.includes("sanity") || id.includes("@sanity")) {
            return "sanity-vendor";
          }
          // React core
          if (id.includes("react-dom") || id.includes("react/")) {
            return "react-vendor";
          }
        },
      },
    },
    // Warn when chunks exceed 200KB
    chunkSizeWarningLimit: 200,
  },
});
