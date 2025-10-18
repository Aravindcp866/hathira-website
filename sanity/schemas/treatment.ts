import { defineType, defineField } from 'sanity'

export const treatment = defineType({
  name: 'treatment',
  title: 'Treatment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Treatment Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'benefits',
      title: 'Key Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., "30-45 minutes"',
    }),
    defineField({
      name: 'price',
      title: 'Price Range',
      type: 'string',
      description: 'e.g., "₹2,000 - ₹5,000"',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Skin', value: 'skin' },
          { title: 'Hair', value: 'hair' },
          { title: 'Body', value: 'body' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Treatment',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
  },
})

