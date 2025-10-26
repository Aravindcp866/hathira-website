import { defineType, defineField } from 'sanity'

export const fatLoss = defineType({
  name: 'fatLoss',
  title: 'Fat Loss Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Fat Loss Solutions'
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'text',
      rows: 3,
      description: 'A compelling subtitle for the fat loss section.'
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Important for SEO and accessibility',
        },
      ],
    }),
    defineField({
      name: 'benefits',
      title: 'Key Benefits',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'benefit',
          title: 'Benefit',
          fields: [
            {
              name: 'title',
              title: 'Benefit Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            },
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Icon name from Lucide React (e.g., "Zap", "Target", "Heart")',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'treatments',
      title: 'Fat Loss Treatments',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'treatment',
          title: 'Treatment',
          fields: [
            {
              name: 'name',
              title: 'Treatment Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            },
            {
              name: 'price',
              title: 'Price Range',
              type: 'string',
              description: 'e.g., "₹2,000 - ₹5,000", "Starting from ₹1,500"',
            },
            {
              name: 'duration',
              title: 'Session Duration',
              type: 'string',
              description: 'e.g., "45 minutes", "1 hour"',
            },
            {
              name: 'image',
              title: 'Treatment Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  description: 'Important for SEO and accessibility',
                },
              ],
            },
            {
              name: 'features',
              title: 'Key Features',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'featured',
              title: 'Featured Treatment',
              type: 'boolean',
              initialValue: false,
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'price',
              media: 'image',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'testimonials',
      title: 'Success Stories',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'testimonial',
          title: 'Testimonial',
          fields: [
            {
              name: 'name',
              title: 'Client Name',
              type: 'string',
            },
            {
              name: 'text',
              title: 'Testimonial Text',
              type: 'text',
              rows: 4,
            },
            {
              name: 'weightLoss',
              title: 'Weight Loss (kg)',
              type: 'number',
              description: 'Amount of weight lost',
            },
            {
              name: 'duration',
              title: 'Duration',
              type: 'string',
              description: 'e.g., "3 months", "6 weeks"',
            },
            {
              name: 'image',
              title: 'Client Photo',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'weightLoss',
              media: 'image',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
      initialValue: 'Start Your Fat Loss Journey'
    }),
    defineField({
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'url',
      description: 'Optional: Override default phone link with a custom URL (e.g., booking page)'
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
})
