import type { MigrationModule } from './runner'

export const id = '138-affiliate-razer-gigantus-v2-xxl'
export const description = 'Nouveau bloc affilié — Razer Gigantus V2 XXL'

const products = [
  {
    title: 'Razer Gigantus V2 XXL',
    active: true,
    links: [
      { locale: 'fr', url: 'https://www.amazon.fr/dp/B086RGYBY9' },
      { locale: 'en', url: 'https://www.amazon.co.uk/dp/B086RGYBY9' },
      { locale: 'es', url: 'https://www.amazon.es/dp/B086RGYBY9' },
    ],
    product: {
      name: 'Razer Gigantus V2 XXL',
      tagline: 'Tapis de souris gaming XXL 940×410mm — surface micro-tissée, base antidérapante',
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
