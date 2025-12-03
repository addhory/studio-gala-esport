import {defineField, defineType} from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Home Page',
      readOnly: true,
    }),
    // --- Hero Section ---
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({
          name: 'slides',
          title: 'Carousel Slides',
          type: 'array',
          of: [
            {
              type: 'image',
              options: {hotspot: true},
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                },
                {
                  name: 'label',
                  type: 'string',
                  title: 'Slide Label',
                  initialValue: 'GALA LOCATION',
                },
              ],
            },
          ],
        }),
        defineField({
          name: 'pillText',
          title: 'Pill Text',
          type: 'string',
          initialValue: 'Internet Cafe',
        }),
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'REDEFINE YOUR GAMING ESPORTS EXPERIENCE',
        }),
        defineField({
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
          initialValue:
            'Step into a next-level gaming café built for comfort, competition, and opportunity. Join us or build your own arena.',
        }),
        defineField({
          name: 'primaryButtonText',
          title: 'Primary Button Text',
          type: 'string',
          initialValue: 'Find & Join us',
        }),
        defineField({
          name: 'secondaryButtonText',
          title: 'Secondary Button Text',
          type: 'string',
          initialValue: 'Build My Own',
        }),
      ],
    }),

    // --- About Section ---
    defineField({
      name: 'aboutSection',
      title: 'About Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({
          name: 'sectionLabel',
          title: 'Section Label',
          type: 'string',
          initialValue: '(ABOUT)',
        }),
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: "LET'S BUILD THE FUTURE OF ESPORTS TOGETHER",
        }),
        defineField({
          name: 'tags',
          title: 'Feature Tags',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'text', type: 'string', title: 'Text'},
                {
                  name: 'iconName',
                  type: 'string',
                  title: 'Icon Name',
                  description: 'Lucide Icon name (e.g. Headset, UserStar, PcCase)',
                  initialValue: 'Headset',
                },
                {
                  name: 'dotColor',
                  type: 'string',
                  title: 'Dot Color',
                  description: 'Hex color code for the separator dot (e.g. #9333ea)',
                  initialValue: '#9333ea',
                },
              ],
              preview: {
                select: {title: 'text'},
              },
            },
          ],
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{type: 'block'}],
          description: 'Use Bold/Strong for the highlighted text part.',
        }),
        defineField({
          name: 'marqueeImages',
          title: 'Marquee Logos',
          type: 'array',
          of: [
            {
              type: 'image',
              fields: [
                {
                  name: 'name',
                  type: 'string',
                  title: 'Company Name',
                },
              ],
            },
          ],
        }),
        defineField({
          name: 'features',
          title: 'Features Grid',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'icon',
                  type: 'image',
                  title: 'Icon Image',
                },
                {
                  name: 'title',
                  type: 'string',
                  title: 'Title',
                },
                {
                  name: 'description',
                  type: 'text',
                  title: 'Description',
                },
              ],
            },
          ],
        }),
        defineField({
          name: 'ctaButtonText',
          title: 'CTA Button Text',
          type: 'string',
          initialValue: 'Start My Franchise',
        }),
      ],
    }),

    // Service Section
    defineField({
      name: 'serviceSection',
      title: 'Service Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Our Service',
        }),
        defineField({
          name: 'services',
          title: 'Services',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'text'}),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {hotspot: true},
                }),
                defineField({name: 'buttonText', title: 'Button Text', type: 'string'}),
              ],
            },
          ],
        }),
      ],
    }),

    // Locations Section
    defineField({
      name: 'locationsSection',
      title: 'Locations Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Our Internet Cafe Center',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: '(Locations)',
        }),
        defineField({
          name: 'locations',
          title: 'Locations List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'name', title: 'Name', type: 'string'}),
                defineField({name: 'address', title: 'Address', type: 'string'}),
                defineField({name: 'hours', title: 'Opening Hours', type: 'string'}),
                defineField({
                  name: 'features',
                  title: 'Features',
                  type: 'array',
                  of: [{type: 'string'}],
                }),
                defineField({
                  name: 'images',
                  title: 'Gallery Images',
                  type: 'array',
                  of: [{type: 'image', options: {hotspot: true}}],
                }),
                defineField({
                  name: 'mapPosition',
                  title: 'Map Position',
                  type: 'object',
                  fields: [
                    defineField({name: 'top', title: 'Top (%)', type: 'number'}),
                    defineField({name: 'left', title: 'Left (%)', type: 'number'}),
                  ],
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'promoBanners',
          title: 'Promo Banners',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'string'}),
                defineField({name: 'highlightText', title: 'Highlight Text', type: 'string'}),
                defineField({name: 'extraText', title: 'Extra Text (e.g. Time)', type: 'string'}),
                defineField({name: 'buttonText', title: 'Button Text', type: 'string'}),
                defineField({
                  name: 'type',
                  title: 'Type',
                  type: 'string',
                  options: {list: ['discount', 'membership']},
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // Testimonials Section
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: "Honest Reviews From Best Gala Player's",
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: '(Testimonials)',
        }),
        defineField({
          name: 'overallRating',
          title: 'Overall Rating',
          type: 'number',
          initialValue: 4.4,
        }),
        defineField({
          name: 'totalReviews',
          title: 'Total Reviews',
          type: 'number',
          initialValue: 886,
        }),
        defineField({
          name: 'testimonials',
          title: 'Testimonials List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'name', title: 'Name', type: 'string'}),
                defineField({
                  name: 'avatar',
                  title: 'Avatar',
                  type: 'image',
                  options: {hotspot: true},
                }),
                defineField({name: 'time', title: 'Time/Date', type: 'string'}),
                defineField({name: 'rating', title: 'Rating', type: 'number'}),
                defineField({name: 'comment', title: 'Comment', type: 'text'}),
              ],
            },
          ],
        }),
      ],
    }),

    // Bento Section
    defineField({
      name: 'bentoSection',
      title: 'Bento Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'locationCard',
          title: 'Location Card',
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string'}),
            defineField({name: 'description', type: 'text'}),
            defineField({name: 'image', type: 'image', options: {hotspot: true}}),
            defineField({name: 'buttonText', type: 'string'}),
          ],
        }),
        defineField({
          name: 'franchiseCard',
          title: 'Franchise Card',
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string'}),
            defineField({name: 'largeText', title: 'Large Text Background', type: 'string'}),
            defineField({name: 'description', type: 'text'}),
            defineField({name: 'image', type: 'image', options: {hotspot: true}}),
            defineField({name: 'buttonPrimaryText', type: 'string'}),
            defineField({name: 'buttonSecondaryText', type: 'string'}),
          ],
        }),
        defineField({
          name: 'clubCard',
          title: 'Club Card',
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string'}),
            defineField({name: 'description', type: 'text'}),
            defineField({name: 'image', type: 'image', options: {hotspot: true}}),
            defineField({name: 'buttonText', type: 'string'}),
          ],
        }),
        defineField({
          name: 'palCard',
          title: 'Pal Card',
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string'}),
            defineField({name: 'description', type: 'text'}),
            defineField({name: 'buttonText', type: 'string'}),
            defineField({name: 'balance', title: 'Mockup Balance', type: 'string'}),
          ],
        }),
        defineField({
          name: 'powerCard',
          title: 'Power Card',
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string'}),
            defineField({name: 'description', type: 'text'}),
            defineField({name: 'image', type: 'image', options: {hotspot: true}}),
            defineField({name: 'buttonText', type: 'string'}),
          ],
        }),
      ],
    }),

    // FAQ Section
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'FREQUENTLY ASKED QUESTION',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: '(FAQ)',
        }),
        defineField({
          name: 'faqs',
          title: 'FAQs List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'question', title: 'Question', type: 'string'}),
                defineField({name: 'answer', title: 'Answer', type: 'text'}),
              ],
            },
          ],
        }),
      ],
    }),
  ],
})
