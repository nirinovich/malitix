import { defineConfig, type SchemaTypeDefinition, Studio } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "../../../sanity-studio/schemaTypes";

const studioConfig = defineConfig({
  name: "default",
  title: "Malitix",
  projectId: "tuac272n",
  dataset: "production",
  basePath: "/admin",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes as unknown as SchemaTypeDefinition[],
  },
});

export default function SanityStudio() {
  return <Studio config={studioConfig} />;
}
