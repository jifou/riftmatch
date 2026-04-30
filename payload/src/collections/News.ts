import { CollectionConfig } from 'payload/types'

const News: CollectionConfig = {
  slug: 'news',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'locale', 'status', 'publishedAt'],
    description: 'Articles et actualités League of Legends.',
  },
  access: { read: () => true },
  fields: [
    {
      name: 'title',
      label: 'Titre',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug (URL)',
      type: 'text',
      required: true,
      admin: { description: 'Ex: patch-14-8-changements-adc → /news/patch-14-8-changements-adc' },
    },
    {
      name: 'excerpt',
      label: 'Résumé (affiché sur la card)',
      type: 'textarea',
      admin: { description: '1-2 phrases max.' },
    },
    {
      name: 'coverImage',
      label: 'Image de couverture (URL)',
      type: 'text',
    },
    {
      name: 'category',
      label: 'Catégorie',
      type: 'select',
      required: true,
      defaultValue: 'news',
      options: [
        { label: '📰 Actualité générale', value: 'news' },
        { label: '⚔️ Champion', value: 'champion' },
        { label: '📊 Méta', value: 'meta' },
        { label: '🏆 Esports', value: 'esports' },
        { label: '📣 Annonce Riot', value: 'announcement' },
        { label: '🛠️ Mise à jour', value: 'update' },
      ],
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
        { label: '🌍 Toutes les langues', value: 'all' },
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
      admin: { description: 'Laissez vide pour aujourd\'hui.' },
    },
    {
      name: 'content',
      label: 'Contenu',
      type: 'richText',
    },
    {
      name: 'author',
      label: 'Auteur',
      type: 'text',
      defaultValue: 'RiftMatch',
    },
    {
      name: 'tags',
      label: 'Tags',
      type: 'array',
      fields: [
        { name: 'tag', type: 'text', label: 'Tag' },
      ],
      admin: { description: 'Ex: Ahri, ADC, Patch 14.8' },
    },
    {
      name: 'sourceUrl',
      label: 'Source officielle (URL)',
      type: 'text',
      admin: {
        description: 'Lien vers l\'article original (Riot, ESPN, Inven…) — affiché automatiquement en bas de page avec un lien SEO.',
      },
    },
  ],
}

export default News
