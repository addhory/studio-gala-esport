import {defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'GET MORE EXCLUSIVE SERVICE',
    }),
    defineField({
      name: 'services',
      title: 'Services List',
      type: 'array',
      of: [{type: 'string'}],
      initialValue: [
        'Connect with Teammates',
        'Create Esports Team',
        'Win Big Lottery',
        'Free Game Time*',
      ],
    }),
    defineField({
      name: 'discordText',
      title: 'Discord Section Text',
      type: 'text',
      initialValue:
        'There’s always something new and exciting happening.\nJoin us to find out what’s next!',
    }),
    defineField({
      name: 'discordImage',
      title: 'Discord Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'discordButtonText',
      title: 'Discord Button Text',
      type: 'string',
      initialValue: 'Join Discord Community',
    }),
    defineField({
      name: 'discordUrl',
      title: 'Discord Link URL',
      type: 'url',
    }),
    defineField({
      name: 'memberCountText',
      title: 'Member Count Text',
      type: 'string',
      initialValue: '250+ Gala Members',
    }),
    defineField({
      name: 'memberAvatars',
      title: 'Member Avatars',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'mapLocation',
      title: 'Map Location',
      type: 'geopoint',
      initialValue: {
        lat: -37.921118,
        lng: 145.120563,
      },
    }),
    defineField({
      name: 'contactAddress',
      title: 'Contact Address',
      type: 'string',
      initialValue: '336 Clayton Rd, Clayton VIC 3168, Australia',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
      initialValue: '+61 3750 30566',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'galaclayton@gala.com.au',
    }),
  ],
})
