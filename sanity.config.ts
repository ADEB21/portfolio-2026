import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaType } from "./src/sanity";
import { structure } from "./src/sanity/deskStructure";
import Favicon from "@components/atoms/Icons/Favicon";
import {themerTool} from '@sanity/themer/tool'
import { theme } from "./src/sanity/themes";
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  name: "portfolio-2026",
  title: "Portfolio",
  icon: Favicon,
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [structureTool({ structure }), themerTool(), codeInput()],
  schema: {
    types: schemaType,
  },
  theme: theme
});
