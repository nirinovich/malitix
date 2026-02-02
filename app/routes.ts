import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("developpement-sur-mesure", "routes/custom-dev.tsx"),
  route("developpement-mobile", "routes/mobile-app.tsx"),
  route("refonte-si", "routes/si-refonte.tsx"),
  route("sprint-commando", "routes/sprint.tsx"),
  route("externalisation", "routes/conversion-landing.tsx"),
  route("admin/*", "routes/admin.tsx"),
  route("politique-de-confidentialite", "routes/privacy-policy.tsx"),
  route("mentions-legales", "routes/legal-notice.tsx"),
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
