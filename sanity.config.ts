import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'hathira-clinic',
  title: 'Hathira Clinic',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '0q3heonp',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  env: {
    NODE_ENV: process.env.NODE_ENV || 'development',
  },
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  basePath: '/studio',
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '0q3heonp',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  },
})

