import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  prerender: [
    "/",
    "/developpement-sur-mesure",
    "/developpement-mobile",
    "/refonte-si",
    "/sprint-commando",
    "/externalisation",
    "/mentions-legales",
    "/politique-de-confidentialite",
  ],
} satisfies Config;
