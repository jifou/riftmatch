import type { MigrationModule } from './runner'

export const id = '005-affiliate-rotation-demo'
export const description = 'Ajoute plusieurs blocs affiliate pour tester la rotation'

const blocks = [
  // article-content (bannière bas d'article)
  {
    title: 'Logitech G Pro X Superlight 2 — Article',
    placement: 'article-content',
    active: true,
    roles: ['all'],
    product: {
      name: 'Logitech G Pro X Superlight 2',
      tagline: 'La souris des pros LoL — légère, précise, sans fil',
      imageUrl: 'https://m.media-amazon.com/images/I/61rEjGq9daL._AC_SL1500_.jpg',
      affiliateUrl: 'https://www.amazon.fr/dp/B09NBHKRBS',
      ctaText: 'Voir sur Amazon →',
      badge: 'Best-seller',
    },
    disclosure: 'Lien affilié — nous percevons une commission sans surcoût pour vous.',
  },
  {
    title: 'HyperX Cloud III — Article',
    placement: 'article-content',
    active: true,
    roles: ['all'],
    product: {
      name: 'HyperX Cloud III',
      tagline: 'Audio spatial 3D pour entendre chaque pas ennemi',
      imageUrl: 'https://m.media-amazon.com/images/I/71YGhfZ9+YL._AC_SL1500_.jpg',
      affiliateUrl: 'https://www.amazon.fr/dp/B0BZMQD9HB',
      ctaText: 'Voir sur Amazon →',
      badge: '',
    },
    disclosure: 'Lien affilié — nous percevons une commission sans surcoût pour vous.',
  },
  {
    title: 'BenQ ZOWIE XL2411K — Article',
    placement: 'article-content',
    active: true,
    roles: ['all'],
    product: {
      name: 'BenQ ZOWIE XL2411K',
      tagline: 'Moniteur 144Hz privilégié par les joueurs classés',
      imageUrl: 'https://m.media-amazon.com/images/I/71p0GInAHbL._AC_SL1500_.jpg',
      affiliateUrl: 'https://www.amazon.fr/dp/B08CXWDKSH',
      ctaText: 'Voir sur Amazon →',
      badge: 'Pro choice',
    },
    disclosure: 'Lien affilié — nous percevons une commission sans surcoût pour vous.',
  },

  // article-sidebar (card dans la sidebar des guides)
  {
    title: 'Logitech G Pro X Superlight 2 — Sidebar',
    placement: 'article-sidebar',
    active: true,
    roles: ['all'],
    product: {
      name: 'Logitech G Pro X Superlight 2',
      tagline: 'La souris des pros LoL — légère, précise, sans fil',
      imageUrl: 'https://m.media-amazon.com/images/I/61rEjGq9daL._AC_SL1500_.jpg',
      affiliateUrl: 'https://www.amazon.fr/dp/B09NBHKRBS',
      ctaText: 'Voir sur Amazon →',
      badge: 'Best-seller',
    },
    disclosure: 'Lien affilié — nous percevons une commission sans surcoût pour vous.',
  },
  {
    title: 'HyperX Cloud III — Sidebar',
    placement: 'article-sidebar',
    active: true,
    roles: ['all'],
    product: {
      name: 'HyperX Cloud III',
      tagline: 'Audio spatial 3D pour entendre chaque pas ennemi',
      imageUrl: 'https://m.media-amazon.com/images/I/71YGhfZ9+YL._AC_SL1500_.jpg',
      affiliateUrl: 'https://www.amazon.fr/dp/B0BZMQD9HB',
      ctaText: 'Voir sur Amazon →',
      badge: '',
    },
    disclosure: 'Lien affilié — nous percevons une commission sans surcoût pour vous.',
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
}
