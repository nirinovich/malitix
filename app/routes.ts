import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("custom-dev", "routes/custom-dev.tsx"),
  route("mobile-app", "routes/mobile-app.tsx"),
  route("si-refonte", "routes/si-refonte.tsx"),
  route("sprint", "routes/sprint.tsx"),
  route("politique-de-confidentialite", "routes/privacy-policy.tsx"),
  route("mentions-legales", "routes/legal-notice.tsx"),
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
