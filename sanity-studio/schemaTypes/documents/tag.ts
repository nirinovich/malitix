import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons'

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');

export const tag = defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) =>
        rule.required().custom((value, context) => {
          const title = context.document?.title as string | undefined;
          if (!title || !value?.current) return true;
          return value.current === slugify(title)
            ? true
            : 'Le slug doit correspondre au titre.';
        }),
    }),
  ],
})
