import type { MigrationModule } from './runner'

export const id = '129-affiliate-steelseries-qck-heavy-xxl'
export const description = 'Nouveau bloc affilié — SteelSeries QcK Heavy XXL'

const products = [
  {
    title: 'SteelSeries QcK Heavy XXL',
    active: true,
    links: [
      { locale: 'fr', url: 'https://www.amazon.fr/dp/B00WAA2704' },
      { locale: 'en', url: 'https://www.amazon.co.uk/dp/B00WAA2704' },
      { locale: 'es', url: 'https://www.amazon.es/dp/B00WAA2704' },
    ],
    product: {
      name: 'SteelSeries QcK Heavy XXL',
      tagline: 'Le tapis de souris des pros esport — XXL 900×400mm, tissu micro-tissé 6mm, anti-dérapant',
      imageUrl: 'IMAGE_MANQUANTE',
      ctaText: 'Voir sur Amazon →',
      badge: 'Choix Pro',
    },
    disclosure: 'Lien affilié Amazon — nous touchons une commission sans coût supplémentaire pour toi.',
  },
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const product of products) {
    const existing = await payload.find({
      collection: 'affiliate-blocks',
      where: { title: { equals: product.title } },
    })
    if (existing.docs.length > 0) {
      console.log(`  → "${product.title}" déjà présent, skip.`)
      continue
    }
    await payload.create({ collection: 'affiliate-blocks', data: product as any })
    console.log(`  ✅ ${product.title}`)
  }
  console.log('✅ Migration 129 terminée — SteelSeries QcK Heavy XXL')
}
