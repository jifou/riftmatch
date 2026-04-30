import { CollectionConfig } from 'payload/types'

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

const LINK_LOCALES = [
  { label: '🇫🇷 Français (amazon.fr)', value: 'fr' },
  { label: '🇬🇧 English (amazon.co.uk / .com)', value: 'en' },
  { label: '🇪🇸 Español (amazon.es)', value: 'es' },
]

const AffiliateBlocks: CollectionConfig = {
  slug: 'affiliate-blocks',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'active', 'updatedAt'],
    description:
      '1 produit = 1 bloc. S\'affiche en rotation aléatoire sur toutes les pages du site. Configurer les liens par langue pour chaque marché.',
  },
  access: {
    read: () => true,
  },
  fields: [
    // ── Identité ─────────────────────────────────────────────────
    {
      name: 'title',
      label: 'Nom interne',
      type: 'text',
      required: true,
      admin: {
        description: 'Ex: "Logitech G Pro X Superlight 2" — identifiant visible uniquement dans l\'admin.',
      },
    },
    {
      name: 'active',
      label: 'Actif',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Décocher pour retirer ce produit de la rotation sans le supprimer.',
      },
    },

    // ── Liens par marché ─────────────────────────────────────────
    {
      name: 'links',
      label: 'Liens affiliés par marché',
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        description:
          'Ajouter un lien par langue/marché. Le site choisit automatiquement le bon lien selon la langue du visiteur (fallback FR si la langue est absente).',
      },
      fields: [
        {
          name: 'locale',
          label: 'Marché',
          type: 'select',
          required: true,
          options: LINK_LOCALES,
        },
        {
          name: 'url',
          label: 'URL affiliée (avec tag de tracking)',
          type: 'text',
          required: true,
          admin: {
            description: 'Ex: https://www.amazon.fr/dp/B0C...?tag=riftmatch-21',
          },
        },
      ],
    },

    // ── Produit ──────────────────────────────────────────────────
    {
      name: 'product',
      label: 'Produit',
      type: 'group',
      fields: [
        {
          name: 'name',
          label: 'Nom affiché',
          type: 'text',
          required: true,
          admin: { description: 'Ex: "Logitech G Pro X Superlight 2"' },
        },
        {
          name: 'tagline',
          label: 'Accroche courte',
          type: 'text',
          admin: { description: 'Ex: "La souris des pros LoL — légère, précise, sans fil"' },
        },
        {
          name: 'imageUrl',
          label: 'Image produit (URL)',
          type: 'text',
          admin: {
            description: 'URL absolue vers l\'image (Amazon CDN, upload, etc.)',
          },
        },
        {
          name: 'ctaText',
          label: 'Texte du bouton',
          type: 'text',
          defaultValue: 'Voir sur Amazon →',
        },
        {
          name: 'badge',
          label: 'Badge optionnel',
          type: 'text',
          admin: { description: 'Ex: "Recommandé", "Promo -20%", "Top Ventes"' },
        },
      ],
    },

    // ── Ciblage rôles (optionnel, fiches champion) ───────────────
    {
      name: 'roles',
      label: 'Rôles ciblés (optionnel)',
      type: 'select',
      hasMany: true,
      options: ROLES,
      defaultValue: ['all'],
      admin: {
        description:
          'Sur les fiches champion, ce produit s\'affiche en priorité pour ces rôles. Laisser "Tous rôles" pour apparaître partout.',
      },
    },

    // ── Mention légale ───────────────────────────────────────────
    {
      name: 'disclosure',
      label: 'Mention légale',
      type: 'text',
      defaultValue: 'Lien affilié — nous percevons une commission sans surcoût pour vous.',
    },
  ],
}

export default AffiliateBlocks
