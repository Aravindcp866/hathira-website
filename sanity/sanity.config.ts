import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'hathira-clinic',
  title: 'Hathira Clinic',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '0q3heonp',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  env: {
    NODE_ENV: process.env.NODE_ENV || 'development',
  },
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
            S.listItem()
              .title('Stack Card Section')
              .child(S.document().schemaType('stackcard').documentId('stackcard')),
            S.listItem()
            .title('Faq Section')
            .child(S.document().schemaType('faqs').documentId('faqs')),
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
