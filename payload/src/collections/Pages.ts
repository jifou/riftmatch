import { CollectionConfig } from 'payload/types'

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'locale', 'template', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'locale',
      label: 'Langue',
      type: 'select',
      required: true,
      defaultValue: 'fr',
      options: [
        { label: '🇫🇷 Français', value: 'fr' },
        { label: '🇬🇧 English', value: 'en' },
        { label: '🇪🇸 Español', value: 'es' },
      ],
      admin: {
        description: 'Langue de cet article. Le même slug peut exister dans plusieurs langues.',
        position: 'sidebar',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        description: 'URL segment (ex: guide-adc). Peut être identique dans plusieurs langues.',
      },
    },
    {
      name: 'template',
      type: 'select',
      defaultValue: 'article',
      options: [
        { label: 'Article — lecture longue, centré', value: 'article' },
        { label: 'Guide — 2 colonnes avec sidebar (TdM + affiliation)', value: 'guide' },
        { label: 'Listicle — Top X, sections en cards numérotées', value: 'listicle' },
      ],
      admin: {
        description: 'Choisir le design de la page',
      },
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'Meta description for search engines',
          },
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      admin: {
        description: 'Main content of the page',
      },
    },
  ],
}

export default Pages
