import type { Route } from "./+types/admin";
import { defineConfig, Studio } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "../../sanity-studio/schemaTypes";

const studioConfig = defineConfig({
  name: "default",
  title: "Malitix",
  projectId: "5uv74e4h",
  dataset: "production",
  basePath: "/admin",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});

export const meta: Route.MetaFunction = () => [
  { title: "Malitix Admin" },
];

export default function AdminStudio() {
  return <Studio config={studioConfig} />;
}
