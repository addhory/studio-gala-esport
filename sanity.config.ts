import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'gala-esport',
  projectId: '7u6zqftu',
  dataset: 'production_database',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Homepage')
              .id('homepage')
              .child(S.document().schemaType('homepage').documentId('homepage')),
            S.listItem()
              .title('Terms & Conditions')
              .id('termsAndConditions')
              .child(
                S.document().schemaType('termsAndConditions').documentId('termsAndConditions'),
              ),
            S.listItem()
              .title('Privacy Policy')
              .id('privacyPolicy')
              .child(S.document().schemaType('privacyPolicy').documentId('privacyPolicy')),
            S.listItem()
              .title('Locations Page')
              .id('locationsPage')
              .child(S.document().schemaType('locationsPage').documentId('locationsPage')),
            S.listItem()
              .title('Contact Page')
              .id('contactPage')
              .child(S.document().schemaType('contactPage').documentId('contactPage')),
            S.listItem()
              .title('Franchise Page')
              .id('franchisePage')
              .child(S.document().schemaType('franchisePage').documentId('franchisePage')),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) =>
                item.getId() !== 'homepage' &&
                item.getId() !== 'termsAndConditions' &&
                item.getId() !== 'privacyPolicy' &&
                item.getId() !== 'locationsPage' &&
                item.getId() !== 'contactPage' &&
                item.getId() !== 'franchisePage',
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
