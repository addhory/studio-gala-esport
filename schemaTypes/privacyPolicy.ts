import {defineField, defineType} from 'sanity'

export const privacyPolicy = defineType({
  name: 'privacyPolicy',
  title: 'Privacy Policy',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'PRIVACY POLICY',
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
      initialValue: 'Privacy Policy - Gala Esports',
    }),
    defineField({
      name: 'introductionText',
      title: 'Introduction Text',
      type: 'text',
      initialValue:
        'At Gala Esports ("we", "our", "us"), we are committed to protecting your personal information and maintaining your trust. This Privacy Policy explains how we collect, use, store, and safeguard your data when you visit gala-esports.com.au, interact with our services, participate in events, or communicate with our team.',
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
