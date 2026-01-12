import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("custom-dev", "routes/custom-dev.tsx"),
  route("mobile-app", "routes/mobile-app.tsx"),
  route("si-refonte", "routes/si-refonte.tsx"),
  route("sprint", "routes/sprint.tsx"),
  route("privacy-policy", "routes/privacy-policy.tsx"),
  route("legal-notice", "routes/legal-notice.tsx"),
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
