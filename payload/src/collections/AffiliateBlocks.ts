import { CollectionConfig } from 'payload/types'

const PLACEMENTS = [
  { label: 'Homepage — sous le hero', value: 'homepage-hero' },
  { label: 'Quiz résultats — sous les champions', value: 'quiz-results' },
  { label: 'Quiz résultats — bannière bas', value: 'quiz-results-bottom' },
  { label: 'Page champion — sidebar', value: 'champion-sidebar' },
  { label: 'Article — bannière en fin de contenu', value: 'article-content' },
  { label: 'Guide — sidebar sticky (colonne droite)', value: 'article-sidebar' },
]

// Contextes champion — un produit peut cibler plusieurs rôles/archétypes
const ROLES = [
  { label: '🎯 ADC / Bot (précision, skillshots)', value: 'adc' },
  { label: '🧙 Mage / Mid (réflexes, APM)', value: 'mage' },
  { label: '🗡️ Assassin (rapidité, micro)', value: 'assassin' },
  { label: '🛡️ Tank / Top (durabilité)', value: 'tank' },
  { label: '🌿 Jungle (vision, timing)', value: 'jungle' },
  { label: '💚 Support (communication, macro)', value: 'support' },
  { label: '⚔️ Bruiser / Combattant', value: 'fighter' },
  { label: '✨ Tous rôles (générique)', value: 'all' },
]

const LOCALES = [
  { label: '🌍 Toutes les langues (fallback)', value: 'all' },
  { label: '🇫🇷 Français', value: 'fr' },
  { label: '🇬🇧 English', value: 'en' },
  { label: '🇪🇸 Español', value: 'es' },
]

const AffiliateBlocks: CollectionConfig = {
  slug: 'affiliate-blocks',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'placement', 'locale', 'active', 'updatedAt'],
    description: 'Blocs de publicité affiliée. Un bloc par emplacement.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Titre interne (non affiché)',
      type: 'text',
      required: true,
      admin: {
        description: 'Ex: "SteelSeries Arctis Nova Pro — Homepage"',
      },
    },
    {
      name: 'placement',
      label: 'Emplacement',
      type: 'select',
      required: true,
      options: PLACEMENTS,
      admin: {
        description: 'Plusieurs produits peuvent partager un emplacement — un sera affiché aléatoirement.',
      },
    },
    {
      name: 'locale',
      label: 'Langue / Marché',
      type: 'select',
      required: true,
      defaultValue: 'all',
      options: LOCALES,
      admin: {
        description: 'Affiche ce bloc uniquement pour cette langue. "Toutes les langues" = fallback si aucun bloc spécifique n\'existe.',
      },
    },
    {
      name: 'active',
      label: 'Actif',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'roles',
      label: 'Rôles ciblés',
      type: 'select',
      hasMany: true,
      options: ROLES,
      defaultValue: ['all'],
      admin: {
        description: 'Sur les fiches champion, ce produit s\'affiche en priorité pour ces rôles. "Tous rôles" = fallback universel.',
      },
    },
    {
      name: 'product',
      label: 'Produit',
      type: 'group',
      fields: [
        {
          name: 'name',
          label: 'Nom du produit',
          type: 'text',
          required: true,
        },
        {
          name: 'tagline',
          label: 'Accroche courte',
          type: 'text',
          admin: {
            description: 'Ex: "Le casque des champions LoL"',
          },
        },
        {
          name: 'imageUrl',
          label: 'URL de l\'image produit',
          type: 'text',
          admin: {
            description: 'URL absolue vers l\'image (CDN affilié ou upload)',
          },
        },
        {
          name: 'affiliateUrl',
          label: 'Lien affilié',
          type: 'text',
          required: true,
          admin: {
            description: 'URL avec tracking affilié (Amazon, etc.)',
          },
        },
        {
          name: 'ctaText',
          label: 'Texte du bouton',
          type: 'text',
          defaultValue: 'Voir l\'offre →',
        },
        {
          name: 'badge',
          label: 'Badge optionnel',
          type: 'text',
          admin: {
            description: 'Ex: "Recommandé", "Promo -20%"',
          },
        },
      ],
    },
    {
      name: 'disclosure',
      label: 'Mention légale',
      type: 'text',
      defaultValue: 'Lien affilié — nous percevons une commission sans surcoût pour vous.',
    },
  ],
}

export default AffiliateBlocks
