import type { MigrationModule } from './runner'

export const id = '149-affiliate-razer-goliathus'
export const description = 'Nouveau bloc affilié — Razer Goliathus Extended Chroma'

const products = [
  {
    title: 'Razer Goliathus Extended Chroma',
    active: true,
    links: [
      { locale: 'fr', url: 'https://www.amazon.fr/dp/B07D93JK17' },
      { locale: 'en', url: 'https://www.amazon.co.uk/dp/B07D93JK17' },
      { locale: 'es', url: 'https://www.amazon.es/dp/B07D93JK17' },
    ],
    product: {
      name: 'Razer Goliathus Extended Chroma',
      tagline: 'Tapis de souris XXL RGB Chroma — surface micro-texturée, base antidérapante',
      imageUrl: 'https://assets.razerzone.com/eeimages/support/products/1395/1395_goliathusextended.png',
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
