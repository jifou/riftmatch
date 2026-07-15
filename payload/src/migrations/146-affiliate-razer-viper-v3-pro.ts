import type { MigrationModule } from './runner'

export const id = '146-affiliate-razer-viper-v3-pro'
export const description = 'Nouveau bloc affilié — Razer Viper V3 Pro'

const products = [
  {
    title: 'Razer Viper V3 Pro',
    active: true,
    links: [
      { locale: 'fr', url: 'https://www.amazon.fr/dp/B0CSPN2G5Z' },
      { locale: 'en', url: 'https://www.amazon.co.uk/dp/B0CSPN2G5Z' },
      { locale: 'es', url: 'https://www.amazon.es/dp/B0CSPN2G5Z' },
    ],
    product: {
      name: 'Razer Viper V3 Pro',
      tagline: 'Souris esport sans-fil ultra-légère 54g, capteur 35K DPI, HyperPolling 8K — la référence pro',
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
