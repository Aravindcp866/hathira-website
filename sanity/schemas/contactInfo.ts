import { defineType, defineField } from 'sanity'

export const contactInfo = defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hours',
      title: 'Operating Hours',
      type: 'object',
      fields: [
        {
          name: 'weekdays',
          title: 'Weekdays (Mon-Sat)',
          type: 'string',
        },
        {
          name: 'sunday',
          title: 'Sunday',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        },
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter URL',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'mapEmbed',
      title: 'Google Maps Embed URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'phone',
      subtitle: 'email',
    },
  },
})

