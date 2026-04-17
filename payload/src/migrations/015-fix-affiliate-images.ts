import type { MigrationModule } from './runner'

export const id = '015-fix-affiliate-images'
export const description = 'Corrige les URLs images des blocs affiliate (SteelSeries CDN et Logitech CDN → Amazon CDN)'

// Les CDNs SteelSeries et Logitech bloquent le hotlinking.
// On remplace toutes les imageUrl par des URLs Amazon CDN fiables.
const IMAGE_FIXES: Record<string, string> = {
  // SteelSeries CDN → Amazon CDN
  'https://media.steelseriescdn.com/thumbs/catalog/items/61631/a22b9b2433b84266915eb4d5cd0af24f.png.500x400_q100_crop-fit_optimize.png':
    'https://m.media-amazon.com/images/I/61RMB7XVPBL._AC_SL1500_.jpg',

  // Logitech CDN (transformation URL) → Amazon CDN
  'https://resource.logitechg.com/w_692,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x2-superlight/pro-x2-superlight-gallery-1-black.png':
    'https://m.media-amazon.com/images/I/61rEjGq9daL._AC_SL1500_.jpg',

  // HyperX Kingston CDN → Amazon CDN
  'https://media.kingston.com/hyperx/feature/aa-hx-headset-cloud-alpha-black-red-1-lg.jpg':
    'https://m.media-amazon.com/images/I/71YGhfZ9+YL._AC_SL1500_.jpg',
}

export const up: MigrationModule['up'] = async (payload) => {
  const all = await payload.find({
    collection: 'affiliate-blocks',
    limit: 200,
  })

  let fixed = 0
  for (const block of all.docs) {
    const currentUrl = (block as any).product?.imageUrl
    const newUrl = IMAGE_FIXES[currentUrl]
    if (!newUrl) continue

    await payload.update({
      collection: 'affiliate-blocks',
      id: block.id,
      data: {
        product: {
          ...(block as any).product,
          imageUrl: newUrl,
        },
      },
    })
    console.log(`  ✓ Image corrigée : "${(block as any).title}"`)
    fixed++
  }

  console.log(`✅ Migration 015 : ${fixed} image(s) corrigée(s)`)
}
