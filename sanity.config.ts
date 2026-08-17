import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaType } from "./src/sanity";
import { structure } from "./src/sanity/deskStructure";

export default defineConfig({
  name: "portfolio-2026",
  title: "Portfolio",
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaType,
  },
});
