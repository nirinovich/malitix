import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  async prerender() {
    const staticRoutes = [
      "/",
      "/developpement-sur-mesure",
      "/developpement-mobile",
      "/refonte-si",
      "/sprint-commando",
      "/externalisation",
      "/mentions-legales",
      "/politique-de-confidentialite",
      // Previously SSR-rendered static pages — promoted to SSG
      "/bi-advisor",
      "/soc-monitoring",
      "/contact",
      "/services",
      "/qui-sommes-nous",
    ];

    return staticRoutes;
  },
} satisfies Config;
