'use client'

import { NextStudio } from 'next-sanity/studio'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from '../../../../sanity/schemas'

// Create a config with structure tool for content editing
const studioConfig = defineConfig({
  name: 'hathira-clinic',
  title: 'Hathira Clinic',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '0q3heonp',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Hero Section')
              .child(S.document().schemaType('hero').documentId('hero')),
            S.listItem()
              .title('Services')
              .child(S.documentTypeList('service')),
            S.listItem()
              .title('Treatments')
              .child(S.documentTypeList('treatment')),
            S.listItem()
              .title('Contact Info')
              .child(S.document().schemaType('contactInfo').documentId('contactInfo')),
          ]),
    }),
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

export default function StudioPage() {
  return <NextStudio config={studioConfig} />
}
