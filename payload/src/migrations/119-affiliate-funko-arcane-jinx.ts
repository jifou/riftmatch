import type { MigrationModule } from './runner'

export const id = '119-affiliate-funko-arcane-jinx'
export const description = 'Nouveau bloc affilié — Funko POP! Arcane: League of Legends — Jinx #1602'

const products = [
  {
    title: 'Funko POP! Arcane — Jinx #1602',
    active: true,
    links: [
      { locale: 'fr', url: 'https://www.amazon.fr/dp/B0CSVP1N8X' },
      { locale: 'en', url: 'https://www.amazon.co.uk/dp/B0CSVP1N8X' },
      { locale: 'es', url: 'https://www.amazon.es/dp/B0CSVP1N8X' },
    ],
    product: {
      name: 'Funko POP! Arcane — Jinx #1602',
      tagline: 'La figurine vinyle officielle de Jinx de la série Arcane — collector League of Legends',
      imageUrl: 'IMAGE_MANQUANTE',
      ctaText: 'Voir sur Amazon →',
      badge: 'Collector Officiel',
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
