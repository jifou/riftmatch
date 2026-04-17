import type { MigrationModule } from './runner'

export const id = '016-fix-image-urls'
export const description = 'Corrige les URLs images avec les bons IDs Amazon CDN par ASIN'

// URLs Amazon CDN correctes — format : images-na.ssl-images-amazon.com/images/P/{ASIN}.01.LZZZZZZZ.jpg
// Plus fiable que m.media-amazon.com qui nécessite un ID image spécifique
const ASIN_IMAGES: Record<string, string> = {
  // Logitech G Pro X Superlight 2 — B09NBQN3X2
  'https://www.amazon.fr/dp/B09NBQN3X2': 'https://images-na.ssl-images-amazon.com/images/P/B09NBQN3X2.01.LZZZZZZZ.jpg',
  'https://www.amazon.com/dp/B09NBQN3X2': 'https://images-na.ssl-images-amazon.com/images/P/B09NBQN3X2.01.LZZZZZZZ.jpg',
  'https://www.amazon.es/dp/B09NBQN3X2': 'https://images-na.ssl-images-amazon.com/images/P/B09NBQN3X2.01.LZZZZZZZ.jpg',

  // Logitech G Pro X Superlight 2 — B09NBHKRBS (migration 005)
  'https://www.amazon.fr/dp/B09NBHKRBS': 'https://images-na.ssl-images-amazon.com/images/P/B09NBHKRBS.01.LZZZZZZZ.jpg',

  // SteelSeries Arctis Nova 3 — B0B3VGNFCP
  'https://www.amazon.fr/dp/B0B3VGNFCP': 'https://images-na.ssl-images-amazon.com/images/P/B0B3VGNFCP.01.LZZZZZZZ.jpg',
  'https://www.amazon.com/dp/B0B3VGNFCP': 'https://images-na.ssl-images-amazon.com/images/P/B0B3VGNFCP.01.LZZZZZZZ.jpg',
  'https://www.amazon.es/dp/B0B3VGNFCP': 'https://images-na.ssl-images-amazon.com/images/P/B0B3VGNFCP.01.LZZZZZZZ.jpg',

  // SteelSeries Arctis Nova 3 — B09ZQTG4BV (migration 002/004)
  'https://www.amazon.fr/dp/B09ZQTG4BV': 'https://images-na.ssl-images-amazon.com/images/P/B09ZQTG4BV.01.LZZZZZZZ.jpg',

  // HyperX Cloud III — B0BZMQD9HB
  'https://www.amazon.fr/dp/B0BZMQD9HB': 'https://images-na.ssl-images-amazon.com/images/P/B0BZMQD9HB.01.LZZZZZZZ.jpg',
  'https://www.amazon.com/dp/B0BZMQD9HB': 'https://images-na.ssl-images-amazon.com/images/P/B0BZMQD9HB.01.LZZZZZZZ.jpg',

  // HyperX Cloud Alpha — B074NBSF9N
  'https://www.amazon.com/dp/B074NBSF9N': 'https://images-na.ssl-images-amazon.com/images/P/B074NBSF9N.01.LZZZZZZZ.jpg',

  // BenQ ZOWIE XL2411K — B08CXWDKSH
  'https://www.amazon.fr/dp/B08CXWDKSH': 'https://images-na.ssl-images-amazon.com/images/P/B08CXWDKSH.01.LZZZZZZZ.jpg',
  'https://www.amazon.com/dp/B08CXWDKSH': 'https://images-na.ssl-images-amazon.com/images/P/B08CXWDKSH.01.LZZZZZZZ.jpg',

  // Razer DeathAdder V3 — B0BJWRQMWY
  'https://www.amazon.es/dp/B0BJWRQMWY': 'https://images-na.ssl-images-amazon.com/images/P/B0BJWRQMWY.01.LZZZZZZZ.jpg',
}

export const up: MigrationModule['up'] = async (payload) => {
  const all = await payload.find({
    collection: 'affiliate-blocks',
    limit: 200,
  })

  let fixed = 0
  for (const block of all.docs) {
    const affiliateUrl = (block as any).product?.affiliateUrl || ''
    // Extrait l'URL de base sans le tag affiliate
    const baseUrl = affiliateUrl.split('?')[0]
    const newImageUrl = ASIN_IMAGES[baseUrl]

    if (!newImageUrl) continue

    await payload.update({
      collection: 'affiliate-blocks',
      id: block.id,
      data: {
        product: {
          ...(block as any).product,
          imageUrl: newImageUrl,
        },
      },
    })
    console.log(`  ✓ Image mise à jour : "${(block as any).title}"`)
    fixed++
  }

  console.log(`✅ Migration 016 : ${fixed} image(s) corrigée(s)`)
}
