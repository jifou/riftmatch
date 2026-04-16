import type { MigrationModule } from './runner'

export const id = '004-affiliate-sidebar'
export const description = 'Crée un bloc affiliate pour la sidebar des pages guide'

export const up: MigrationModule['up'] = async (payload) => {
  const existing = await payload.find({
    collection: 'affiliate-blocks',
    where: { title: { equals: 'SteelSeries Arctis Nova 3 — Sidebar' } },
  })
  if (existing.docs.length > 0) {
    console.log('  → Bloc déjà présent, skip.')
    return
  }

  await payload.create({
    collection: 'affiliate-blocks',
    data: {
      title: 'SteelSeries Arctis Nova 3 — Sidebar',
      placement: 'article-sidebar',
      active: true,
      roles: ['all'],
      product: {
        name: 'SteelSeries Arctis Nova 3',
        tagline: 'Le casque gaming plébiscité par les joueurs LoL compétitifs',
        imageUrl: 'https://m.media-amazon.com/images/I/61RMB7XVPBL._AC_SL1500_.jpg',
        affiliateUrl: 'https://www.amazon.fr/dp/B09ZQTG4BV',
        ctaText: 'Voir sur Amazon →',
        badge: 'Recommandé',
      },
      disclosure: 'Lien affilié — nous percevons une commission sans surcoût pour vous.',
    } as any,
  })
}
