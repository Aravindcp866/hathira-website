import { defineField, defineType } from 'sanity'

export const stackcard = defineType({
  name: 'stackcard',
  title: 'Stack Card Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Main title for the stack card section',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      description: 'Brief description of the stack card section',
    }),
    defineField({
      name: 'cards',
      title: 'Stack Cards',
      type: 'array',
      description: 'Array of cards to display in the stack',
      of: [
        {
          type: 'object',
          name: 'cardItem',
          title: 'Card Item',
          fields: [
            defineField({
              name: 'image',
              title: 'Card Image',
              type: 'image',
              description: 'Image for the card',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'heading',
              title: 'Card Heading',
              type: 'string',
              description: 'Main heading for the card',
              validation: (Rule) => Rule.required().max(100),
            }),
            defineField({
              name: 'description',
              title: 'Card Description',
              type: 'text',
              description: 'Description text for the card',
              validation: (Rule) => Rule.required().max(500),
            }),
            defineField({
              name: 'listingItems',
              title: 'Listing Items',
              type: 'array',
              description: 'List of items to display as bullet points',
              of: [
                {
                  type: 'object',
                  name: 'listingItem',
                  title: 'Listing Item',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'Item Text',
                      type: 'string',
                      description: 'Individual listing item',
                      validation: (Rule) => Rule.required().max(200),
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'text',
                    },
                  },
                },
              ],
              validation: (Rule) => Rule.required().min(1),
            }),
          ],
          preview: {
            select: {
              title: 'heading',
              subtitle: 'description',
              media: 'image',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
