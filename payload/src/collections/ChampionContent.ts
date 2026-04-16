import { CollectionConfig } from 'payload/types'

const ChampionContent: CollectionConfig = {
  slug: 'champion-content',
  admin: {
    useAsTitle: 'championApiId',
    defaultColumns: ['championApiId', 'locale', 'updatedAt'],
    description: 'Descriptions éditorialisées par champion (optionnel — auto-généré si absent).',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'championApiId',
      label: 'Champion API ID',
      type: 'text',
      required: true,
      admin: {
        description: 'Ex: Ahri, LeeSin, MasterYi — correspond à l\'apiId dans le code',
      },
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
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      label: 'Description courte (2-3 phrases)',
      type: 'textarea',
      admin: {
        description: 'Comment jouer ce champion, son style, son point fort. Laisse vide pour utiliser la description auto.',
      },
    },
    {
      name: 'teaze',
      label: 'azezaezaaz',
      type: 'textarea',
      admin: {
        description: 'Comment jouer ce champion, son style, son point fort. Laisse vide pour utiliser la description auto.',
      },
    },
    {
      name: 'tip',
      label: 'Conseil clé',
      type: 'text',
      admin: {
        description: 'Une astuce courte pour bien démarrer. Ex: "Placez vos wards avant le niveau 6"',
      },
    },
  ],
}

export default ChampionContent
