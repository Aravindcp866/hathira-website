import { defineType, defineField } from 'sanity'

export const testfaq = defineType({
  name: 'testfaq',
  title: 'Test FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    })
  ]
})
