import { defineType, defineField } from 'sanity'

export const bridalMakeup = defineType({
  name: 'bridalMakeup',
  title: 'Bridal Makeup Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Bridal Makeup Services'
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'text',
      rows: 3
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
      name: 'services',
      title: 'Bridal Services',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'bridalService',
          title: 'Bridal Service',
          fields: [
            {
              name: 'name',
              title: 'Service Name',
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
              title: 'Price',
              type: 'string',
              description: 'e.g., "Starting from $150" or "Contact for pricing"',
            },
            {
              name: 'duration',
              title: 'Duration',
              type: 'string',
              description: 'e.g., "2-3 hours" or "Half day"',
            },
            {
              name: 'image',
              title: 'Service Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
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
              title: 'Featured Service',
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
      title: 'Bridal Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'testimonial',
          title: 'Testimonial',
          fields: [
            {
              name: 'name',
              title: 'Bride Name',
              type: 'string',
            },
            {
              name: 'text',
              title: 'Testimonial Text',
              type: 'text',
              rows: 4,
            },
            {
              name: 'rating',
              title: 'Rating',
              type: 'number',
              validation: (Rule) => Rule.min(1).max(5),
            },
            {
              name: 'image',
              title: 'Bride Photo',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'text',
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
      initialValue: 'Book Your Bridal Consultation'
    }),
    defineField({
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'string',
      description: 'Phone number or booking link',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
})
