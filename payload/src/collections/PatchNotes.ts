import { CollectionConfig } from 'payload/types'

const PatchNotes: CollectionConfig = {
  slug: 'patch-notes',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'version', 'type', 'status', 'publishedAt'],
    description: 'Notes de patch LoL — PBE (preview) et Live (officiel).',
  },
  access: { read: () => true },
  fields: [
    {
      name: 'version',
      label: 'Version du patch',
      type: 'text',
      required: true,
      admin: { description: 'Ex: 14.8, 14.9 PBE' },
    },
    {
      name: 'title',
      label: 'Titre',
      type: 'text',
      required: true,
      admin: { description: 'Ex: Patch 14.8 — Notes de mise à jour' },
    },
    {
      name: 'slug',
      label: 'Slug (URL)',
      type: 'text',
      required: true,
      admin: { description: 'Ex: patch-14-8 → /patch-notes/patch-14-8' },
    },
    {
      name: 'type',
      label: 'Type',
      type: 'select',
      required: true,
      defaultValue: 'live',
      options: [
        { label: '🧪 PBE — Serveur de test (preview)', value: 'pbe' },
        { label: '✅ Live — Patch officiel', value: 'live' },
      ],
    },
    {
      name: 'status',
      label: 'Statut',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: '📝 Brouillon', value: 'draft' },
        { label: '✅ Publié', value: 'published' },
      ],
    },
    {
      name: 'publishedAt',
      label: 'Date de publication',
      type: 'date',
    },
    {
      name: 'coverImage',
      label: 'Image de couverture (URL)',
      type: 'text',
    },
    {
      name: 'excerpt',
      label: 'Résumé',
      type: 'textarea',
      admin: { description: '1-2 phrases sur les grands changements du patch.' },
    },
    {
      name: 'highlights',
      label: 'Points clés du patch',
      type: 'array',
      admin: { description: 'Changements majeurs affichés en avant sur la card (buffs/nerfs importants).' },
      fields: [
        {
          name: 'text',
          label: 'Changement',
          type: 'text',
          admin: { description: 'Ex: 🔺 Ahri — Dégâts Q augmentés' },
        },
      ],
    },
    {
      name: 'content',
      label: 'Contenu complet',
      type: 'richText',
    },
    {
      name: 'sourceUrl',
      label: 'Source officielle (URL)',
      type: 'text',
      admin: {
        description: 'Ex: https://www.leagueoflegends.com/fr-fr/news/game-updates/patch-26-9-notes/ — affiché automatiquement en bas de page avec un lien SEO.',
      },
    },
  ],
}

export default PatchNotes
