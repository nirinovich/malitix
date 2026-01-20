import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  async prerender() {
    return [
      "/",
      "/custom-dev",
      "/mobile-app",
      "/si-refonte",
      "/sprint",
      "/legal-notice",
      "/privacy-policy",
    ];
  },
} satisfies Config;
