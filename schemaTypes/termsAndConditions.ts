import {defineField, defineType} from 'sanity'

export const termsAndConditions = defineType({
  name: 'termsAndConditions',
  title: 'Terms & Conditions',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'TERMS & CONDITIONS',
    }),
    defineField({
      name: 'subtitle',
      title: 'Page Subtitle',
      type: 'string',
      initialValue: '(GALA ESPORT)',
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'introductionTitle',
      title: 'Introduction Title',
      type: 'string',
      initialValue: 'Terms & Conditions - Gala Esports',
    }),
    defineField({
      name: 'introductionText',
      title: 'Introduction Text',
      type: 'text',
      initialValue:
        'Welcome to gala-esports.com.au ("Website"). By accessing or using our website, services, or participating in any Gala Esports activities ("Services"), you agree to the following Terms & Conditions. Please read them carefully.',
    }),
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
            }),
            defineField({
              name: 'id',
              title: 'Anchor ID',
              type: 'slug',
              options: {
                source: 'title',
                maxLength: 96,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{type: 'block'}],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'id.current',
            },
          },
        },
      ],
    }),
  ],
})
