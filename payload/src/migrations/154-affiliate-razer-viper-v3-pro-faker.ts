import type { MigrationModule } from './runner'

export const id = '154-affiliate-razer-viper-v3-pro-faker'
export const description = 'Nouveau bloc affilié — Razer Viper V3 Pro Faker Edition'

const products = [
  {
    title: 'Razer Viper V3 Pro Faker Edition',
    active: true,
    links: [
      { locale: 'fr', url: 'https://www.amazon.fr/dp/B0DT19Z5XL' },
      { locale: 'en', url: 'https://www.amazon.co.uk/dp/B0DT19Z5XL' },
      { locale: 'es', url: 'https://www.amazon.es/dp/B0DT19Z5XL' },
    ],
    product: {
      name: 'Razer Viper V3 Pro Faker Edition',
      tagline: 'La souris de Faker — 54g ultra-légère, 35K DPI, 8000Hz sans-fil — édition collector',
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
  console.log('✅ Migration 154 terminée — Razer Viper V3 Pro Faker Edition')
}
