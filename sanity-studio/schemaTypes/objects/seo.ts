import {defineField, defineType} from 'sanity'
import {SearchIcon} from '@sanity/icons'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  icon: SearchIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'SEO Title',
      type: 'string',
      validation: (rule) => rule.max(70).warning('Idéalement 60-70 caractères.'),
    }),
    defineField({
      name: 'description',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(160).warning('Idéalement 140-160 caractères.'),
    }),
    defineField({
      name: 'image',
      title: 'SEO Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (rule) => rule.required().error('Ajoutez un texte alternatif.'),
        }),
      ],
    }),
  ],
})
