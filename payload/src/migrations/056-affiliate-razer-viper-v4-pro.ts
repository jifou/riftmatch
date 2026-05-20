import type { MigrationModule } from './runner'

export const id = '056-affiliate-razer-viper-v4-pro'
export const description = 'Nouveau bloc affilié — Razer Viper V4 Pro'

const products = [
  {
    title: 'Razer Viper V4 Pro',
    active: true,
    links: [
      { locale: 'fr', url: 'https://www.amazon.fr/dp/B0G5QBTC2Q' },
      { locale: 'en', url: 'https://www.amazon.co.uk/dp/B0G5QBTC2Q' },
      { locale: 'es', url: 'https://www.amazon.es/dp/B0G5QBTC2Q' },
    ],
    product: {
      name: 'Razer Viper V4 Pro',
      tagline: 'Souris esport sans-fil ultra-légère 49g, capteur 50K DPI, 8K polling — la référence des pros',
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
  console.log('✅ Migration affiliation terminée')
}
