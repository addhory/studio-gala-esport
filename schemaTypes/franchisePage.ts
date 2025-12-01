import {defineField, defineType} from 'sanity'

export const franchisePage = defineType({
  name: 'franchisePage',
  title: 'Franchise Page',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'BRING THE GAMING ARENA TO YOUR PLACE',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      initialValue:
        'Build a profitable esports space with our support, setup standards, and brand recognition. You focus on running the café we provide the roadmap.',
    }),
    defineField({
      name: 'heroButtonText',
      title: 'Hero Button Text',
      type: 'string',
      initialValue: 'Register Your Interest',
    }),
    defineField({
      name: 'heroImageLeft',
      title: 'Hero Image Left',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'heroImageRight',
      title: 'Hero Image Right',
      type: 'image',
      options: {hotspot: true},
    }),

    // Guide Section (Services)
    defineField({
      name: 'guideTitle',
      title: 'Guide Section Title',
      type: 'string',
      initialValue: "We'll Guide You As You Grow Your Cafe",
    }),
    defineField({
      name: 'services',
      title: 'Services (Guide)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({
              name: 'features',
              title: 'Features List',
              type: 'array',
              of: [{type: 'string'}], // Simplified for now, or could be object with icon name
            }),
            defineField({
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Read More',
            }),
            defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
          ],
        },
      ],
    }),

    // Roadmap Section
    defineField({
      name: 'roadmapTitle',
      title: 'Roadmap Section Title',
      type: 'string',
      initialValue: 'Start Your Franchise, The Simple Way',
    }),
    defineField({
      name: 'roadmapDescription',
      title: 'Roadmap Section Description',
      type: 'text',
      initialValue:
        'We help you understand, plan, and execute every step, empowering you to build a thriving esports venue from day one.',
    }),
    defineField({
      name: 'roadmapSteps',
      title: 'Roadmap Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Step Title', type: 'string'}),
            defineField({name: 'description', title: 'Step Description', type: 'text'}),
            defineField({
              name: 'image',
              title: 'Step Image',
              type: 'image',
              options: {hotspot: true},
            }),
          ],
        },
      ],
    }),

    // Interactive Section
    defineField({
      name: 'interactiveFeatures',
      title: 'Interactive Features',
      type: 'array',
      validation: (Rule) => Rule.max(4), // "only four items here"
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
            // Note: Icons are tricky in CMS. We might stick to static icons based on index or add an icon name selector if needed.
            // For now, let's assume static icons or maybe a string selector if strictly required.
            // The user said "create the sanity also" for this section.
          ],
        },
      ],
    }),

    // Why Choose Section
    defineField({
      name: 'whyChooseTitle',
      title: 'Why Choose Title',
      type: 'string',
      initialValue: 'Gala As A Partner That Puts You First',
    }),
    defineField({
      name: 'whyChooseDescription',
      title: 'Why Choose Description',
      type: 'text',
      initialValue:
        "We understand that every market and location is unique. That's why our franchise approach is flexible, transparent, and built on real partnership.",
    }),
    defineField({
      name: 'whyChooseItems',
      title: 'Why Choose Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
          ],
        },
      ],
    }),
    defineField({
      name: 'whyChooseBackgroundImage',
      title: 'Why Choose Background Image',
      type: 'image',
      options: {hotspot: true},
    }),

    // Testimonial Section
    defineField({
      name: 'testimonialName',
      title: 'Testimonial Name',
      type: 'string',
      initialValue: 'Mario Baskoro',
    }),
    defineField({
      name: 'testimonialRole',
      title: 'Testimonial Role',
      type: 'string',
      initialValue: 'Owner, Gala Box Hill',
    }),
    defineField({
      name: 'testimonialQuote',
      title: 'Testimonial Quote',
      type: 'text',
      initialValue:
        'The business model works. From setup to daily operations, everything is structured and scalable.',
    }),
    defineField({
      name: 'testimonialImage',
      title: 'Testimonial Image',
      type: 'image',
      options: {hotspot: true},
    }),

    // Branch Section
    defineField({
      name: 'branchTitle',
      title: 'Branch Section Title',
      type: 'string',
      initialValue: 'Our Existing Venue',
    }),
    defineField({
      name: 'branches',
      title: 'Branches',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Branch Name', type: 'string'}),
            defineField({name: 'address', title: 'Address', type: 'string'}),
            defineField({name: 'hours', title: 'Opening Hours', type: 'string'}),
            defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
            defineField({
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Get My Direction',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'branchCtaText',
      title: 'Branch Bottom CTA Text',
      type: 'string',
      initialValue: 'Register Your Interest',
    }),

    // Form Section (View Only)
    defineField({
      name: 'formLeftTitle',
      title: 'Form Left Title',
      type: 'string',
      initialValue: 'Esports Gaming',
    }),
    defineField({
      name: 'formLeftDescription',
      title: 'Form Left Description',
      type: 'text',
      initialValue: 'Experience a premium gaming environment equipped with high-performance PCs,',
    }),
    defineField({
      name: 'formLeftButtonText',
      title: 'Form Left Button Text',
      type: 'string',
      initialValue: 'Download Guide book',
    }),
    defineField({
      name: 'formLeftImage',
      title: 'Form Left Background Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'formRightTitle',
      title: 'Form Right Title',
      type: 'string',
      initialValue: 'Build my own Internet Cafe',
    }),
    defineField({
      name: 'formRightSubtitle',
      title: 'Form Right Subtitle',
      type: 'string', // or text, using string for short text
      initialValue: 'Complete the form below and we will be in touch within 24 hours',
    }),
  ],
})
