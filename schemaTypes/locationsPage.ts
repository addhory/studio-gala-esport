import {defineField, defineType} from 'sanity'

export const locationsPage = defineType({
  name: 'locationsPage',
  title: 'Locations Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'OUR INTERNET CAFE CENTER',
    }),
    defineField({
      name: 'subtitle',
      title: 'Page Subtitle',
      type: 'string',
      initialValue: '(LOCATIONS)',
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
      name: 'locations',
      title: 'Locations List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'id',
              title: 'ID (Slug)',
              type: 'slug',
              options: {source: 'name'},
            }),
            defineField({
              name: 'address',
              title: 'Address',
              type: 'string',
            }),
            defineField({
              name: 'phone',
              title: 'Phone',
              type: 'string',
            }),
            defineField({
              name: 'email',
              title: 'Email',
              type: 'string',
            }),
            defineField({
              name: 'hours',
              title: 'Opening Hours',
              type: 'string',
            }),
            defineField({
              name: 'coordinates',
              title: 'Coordinates',
              type: 'geopoint',
            }),
            defineField({
              name: 'prices',
              title: 'Prices',
              type: 'object',
              fields: [
                defineField({name: 'guest', title: 'Guest Price', type: 'string'}),
                defineField({name: 'member', title: 'Member Price', type: 'string'}),
                defineField({name: 'vip', title: 'VIP Price', type: 'string'}),
              ],
            }),
            defineField({
              name: 'image',
              title: 'Main Image',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({
              name: 'images',
              title: 'Gallery Images',
              type: 'array',
              of: [{type: 'image', options: {hotspot: true}}],
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
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({name: 'highlightText', title: 'Highlight Text', type: 'string'}),
            defineField({name: 'extraText', title: 'Extra Text (e.g. Time)', type: 'string'}),
            defineField({name: 'buttonText', title: 'Button Text', type: 'string'}),
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Discount (Percent)', value: 'discount'},
                  {title: 'Membership (Headphones)', value: 'membership'},
                ],
              },
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'franchiseSection',
      title: 'Franchise Section',
      type: 'object',
      fields: [
        defineField({
          name: 'sectionNumber',
          title: 'Section Number',
          type: 'string',
          initialValue: '(02)',
        }),
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
        defineField({
          name: 'priceOffer',
          title: 'Price Offer',
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'currentPrice', title: 'Current Price', type: 'string'}),
            defineField({name: 'originalPrice', title: 'Original Price', type: 'string'}),
          ],
        }),
        defineField({name: 'primaryButtonText', title: 'Primary Button Text', type: 'string'}),
        defineField({name: 'secondaryButtonText', title: 'Secondary Button Text', type: 'string'}),
      ],
    }),
  ],
})
