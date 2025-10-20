import { defineType, defineField } from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
      initialValue: 'Explore Treatments',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gradientColors',
      title: 'Gradient Colors',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Hex color codes for the animated gradient background',
    }),
    defineField({
      name: 'carouselImages',
      title: 'Carousel Images',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'carouselSlide',
          title: 'Carousel Slide',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'text',
              title: 'Text',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'ctaLink',
              title: 'CTA Link',
              type: 'url',
              validation: (Rule) => Rule.uri({
                allowRelative: true,
                scheme: ['http', 'https', 'mailto', 'tel']
              }),
            },
            {
              name: 'ctaText',
              title: 'CTA Text',
              type: 'string',
              initialValue: 'Learn More',
            },
          ],
          preview: {
            select: {
              title: 'text',
              media: 'image',
              subtitle: 'ctaText',
            },
          },
        },
      ],
      description: 'Images for the hero carousel with text and call-to-action links',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
})

