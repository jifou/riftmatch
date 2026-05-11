import type { MigrationModule } from './runner'

export const id = '029-affiliate-new-products'
export const description = 'Nouveaux blocs affiliés : Logitech LoL Keyboard, Tibbers Plush, Razer DeathAdder V3, SteelSeries Arctis Nova Pro'

const products = [
  {
    title: 'Logitech G PRO Keyboard — LoL Edition',
    active: true,
    links: [
      { locale: 'fr', url: 'https://www.amazon.fr/dp/B098J8XTLG' },
      { locale: 'en', url: 'https://www.amazon.co.uk/dp/B098J8XTLG' },
      { locale: 'es', url: 'https://www.amazon.es/dp/B098J8XTLG' },
    ],
    product: {
      name: 'Logitech G PRO Keyboard LoL Edition',
      tagline: 'Le clavier officiel League of Legends — compact, switches GX Brown, RGB',
      imageUrl: 'https://media.ldlc.com/r1600/ld/products/00/05/91/08/LD0005910841_1.jpg',
      ctaText: 'Voir sur Amazon →',
      badge: 'Official LoL Gear',
    },
    disclosure: 'Lien affilié Amazon — nous touchons une commission sans coût supplémentaire pour toi.',
  },
  {
    title: 'Tibbers Plush Officiel Riot — 40cm',
    active: true,
    links: [
      { locale: 'fr', url: 'https://www.amazon.fr/dp/B0B4Y142RB' },
      { locale: 'en', url: 'https://www.amazon.co.uk/dp/B0B4Y142RB' },
      { locale: 'es', url: 'https://www.amazon.es/dp/B0B4Y142RB' },
    ],
    product: {
      name: 'Tibbers Plush Officiel Riot',
      tagline: 'L\'ours de feu d\'Annie en peluche géante 40cm — collector officiel Riot',
      imageUrl: 'https://cdn.sanity.io/images/dsfx7636/consumer_products_live/040c6db5586e389b4184f3ea24b722aee33d77ff-1000x1000.png',
      ctaText: 'Voir sur Amazon →',
      badge: 'Collector Officiel',
    },
    disclosure: 'Lien affilié Amazon — nous touchons une commission sans coût supplémentaire pour toi.',
  },
  {
    title: 'Razer DeathAdder V3',
    active: true,
    links: [
      { locale: 'fr', url: 'https://www.amazon.fr/dp/B09ZLTV8B3' },
      { locale: 'en', url: 'https://www.amazon.co.uk/dp/B09ZLTV8B3' },
      { locale: 'es', url: 'https://www.amazon.es/dp/B09ZLTV8B3' },
    ],
    product: {
      name: 'Razer DeathAdder V3',
      tagline: 'Souris gaming ultra-légère 59g, capteur 30K DPI, filaire — pro de l\'esport',
      imageUrl: 'https://assets2.razerzone.com/images/pnx.assets/bf7ea91398b704ea710dfad671d185b9/razer-deathadder-v3-hero-desktop.webp',
      ctaText: 'Voir sur Amazon →',
      badge: 'Choix Pro',
    },
    disclosure: 'Lien affilié Amazon — nous touchons une commission sans coût supplémentaire pour toi.',
  },
  {
    title: 'SteelSeries Arctis Nova Pro Wireless',
    active: true,
    links: [
      { locale: 'fr', url: 'https://www.amazon.fr/dp/B09ZLRCH1H' },
      { locale: 'en', url: 'https://www.amazon.co.uk/dp/B09ZLRCH1H' },
      { locale: 'es', url: 'https://www.amazon.es/dp/B09ZLRCH1H' },
    ],
    product: {
      name: 'SteelSeries Arctis Nova Pro Wireless',
      tagline: 'Casque gaming sans-fil premium — ANC, double batterie, son Hi-Res',
      imageUrl: 'https://media.steelseriescdn.com/thumbs/filer_public/46/8e/468ed57e-3790-4dd1-b043-57161fe83821/arctis_nova_family_lp_img_desktop_hero.jpg',
      ctaText: 'Voir sur Amazon →',
      badge: 'Premium',
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
  console.log('✅ Migration 029 terminée — 4 nouveaux blocs affiliés')
}
