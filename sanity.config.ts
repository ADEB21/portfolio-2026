import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaType } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'portfolio-2026',
  title: 'Portfolio',
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [structureTool()],
  schema: {
    types: schemaType
  },
})