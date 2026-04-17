import type { MigrationModule } from './runner'

export const id = '014-affiliate-all-placements'
export const description = 'Ajoute des blocs affiliate sur tous les placements manquants (homepage-hero, quiz-results, quiz-results-bottom, champion-sidebar) avec rotation 3 produits'

// Catalogue produits commun
const PRODUCTS = {
  logitech: {
    name: 'Logitech G Pro X Superlight 2',
    tagline: 'La souris des pros LoL — légère, précise, sans fil',
    imageUrl: 'https://resource.logitechg.com/w_692,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x2-superlight/pro-x2-superlight-gallery-1-black.png',
    affiliateUrl: 'https://www.amazon.fr/dp/B09NBQN3X2',
    ctaText: 'Voir sur Amazon →',
    badge: 'Pro Gamers',
  },
  steelseries: {
    name: 'SteelSeries Arctis Nova 3',
    tagline: 'Le casque gaming des champions LoL',
    imageUrl: 'https://media.steelseriescdn.com/thumbs/catalog/items/61631/a22b9b2433b84266915eb4d5cd0af24f.png.500x400_q100_crop-fit_optimize.png',
    affiliateUrl: 'https://www.amazon.fr/dp/B0B3VGNFCP',
    ctaText: "Voir l'offre →",
    badge: 'Top Ventes',
  },
  hyperx: {
    name: 'HyperX Cloud III',
    tagline: 'Audio spatial 3D pour entendre chaque pas ennemi',
    imageUrl: 'https://media.kingston.com/hyperx/feature/aa-hx-headset-cloud-alpha-black-red-1-lg.jpg',
    affiliateUrl: 'https://www.amazon.fr/dp/B0BZMQD9HB',
    ctaText: 'Voir sur Amazon →',
    badge: '',
  },
  benq: {
    name: 'BenQ ZOWIE XL2411K',
    tagline: 'Moniteur 144Hz privilégié par les joueurs classés',
    imageUrl: 'https://m.media-amazon.com/images/I/71p0GInAHbL._AC_SL1500_.jpg',
    affiliateUrl: 'https://www.amazon.fr/dp/B08CXWDKSH',
    ctaText: 'Voir sur Amazon →',
    badge: 'Pro choice',
  },
}

const DISCLOSURE = 'Lien affilié — nous percevons une commission sans surcoût pour vous.'

const blocks = [
  // ── homepage-hero (card) ─────────────────────────────────────────
  {
    title: 'Logitech G Pro X Superlight 2 — Homepage Hero',
    placement: 'homepage-hero',
    locale: 'all',
    active: true,
    roles: ['all'],
    product: PRODUCTS.logitech,
    disclosure: DISCLOSURE,
  },
  {
    title: 'SteelSeries Arctis Nova 3 — Homepage Hero',
    placement: 'homepage-hero',
    locale: 'all',
    active: true,
    roles: ['all'],
    product: PRODUCTS.steelseries,
    disclosure: DISCLOSURE,
  },
  {
    title: 'BenQ ZOWIE XL2411K — Homepage Hero',
    placement: 'homepage-hero',
    locale: 'all',
    active: true,
    roles: ['all'],
    product: PRODUCTS.benq,
    disclosure: DISCLOSURE,
  },

  // ── quiz-results (card, sous les 3 champions) ────────────────────
  {
    title: 'Logitech G Pro X Superlight 2 — Quiz Results',
    placement: 'quiz-results',
    locale: 'all',
    active: true,
    roles: ['all'],
    product: PRODUCTS.logitech,
    disclosure: DISCLOSURE,
  },
  {
    title: 'HyperX Cloud III — Quiz Results',
    placement: 'quiz-results',
    locale: 'all',
    active: true,
    roles: ['all'],
    product: PRODUCTS.hyperx,
    disclosure: DISCLOSURE,
  },
  {
    title: 'SteelSeries Arctis Nova 3 — Quiz Results',
    placement: 'quiz-results',
    locale: 'all',
    active: true,
    roles: ['all'],
    product: PRODUCTS.steelseries,
    disclosure: DISCLOSURE,
  },

  // ── quiz-results-bottom (banner, bas de page quiz) ───────────────
  {
    title: 'Logitech G Pro X Superlight 2 — Quiz Bottom Banner',
    placement: 'quiz-results-bottom',
    locale: 'all',
    active: true,
    roles: ['all'],
    product: PRODUCTS.logitech,
    disclosure: DISCLOSURE,
  },
  {
    title: 'BenQ ZOWIE XL2411K — Quiz Bottom Banner',
    placement: 'quiz-results-bottom',
    locale: 'all',
    active: true,
    roles: ['all'],
    product: PRODUCTS.benq,
    disclosure: DISCLOSURE,
  },

  // ── champion-sidebar (card, sidebar fiche champion) ──────────────
  {
    title: 'SteelSeries Arctis Nova 3 — Champion Sidebar',
    placement: 'champion-sidebar',
    locale: 'all',
    active: true,
    roles: ['all'],
    product: PRODUCTS.steelseries,
    disclosure: DISCLOSURE,
  },
  {
    title: 'Logitech G Pro X Superlight 2 — Champion Sidebar',
    placement: 'champion-sidebar',
    locale: 'all',
    active: true,
    roles: ['all'],
    product: PRODUCTS.logitech,
    disclosure: DISCLOSURE,
  },
  {
    title: 'HyperX Cloud III — Champion Sidebar',
    placement: 'champion-sidebar',
    locale: 'all',
    active: true,
    roles: ['all'],
    product: PRODUCTS.hyperx,
    disclosure: DISCLOSURE,
  },
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const block of blocks) {
    const existing = await payload.find({
      collection: 'affiliate-blocks',
      where: { title: { equals: block.title } },
    })
    if (existing.docs.length > 0) {
      console.log(`  → "${block.title}" déjà présent, skip.`)
      continue
    }
    await payload.create({ collection: 'affiliate-blocks', data: block as any })
    console.log(`  ✓ ${block.title}`)
  }
  console.log('✅ Migration 014: tous les placements couverts avec rotation')
}
