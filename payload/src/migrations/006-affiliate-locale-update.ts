import type { MigrationModule } from './runner'

export const id = '006-affiliate-locale-update'
export const description = 'Tag existing FR blocks with locale:fr and add EN+ES blocks'

export const up: MigrationModule['up'] = async (payload) => {
  // Note: existing blocks (001-005) have no locale → they act as 'all' fallback.
  // This migration only adds locale-specific FR/EN/ES blocks.

  // ── 1. French blocks (Amazon.fr) — locale-specific ──────────────

  await payload.create({
    collection: 'affiliate-blocks',
    data: {
      title: 'SteelSeries Arctis Nova 3 — Article FR (locale)',
      placement: 'article-content',
      locale: 'fr',
      active: true,
      roles: ['all'],
      product: {
        name: 'SteelSeries Arctis Nova 3',
        tagline: 'Le casque gaming des champions LoL',
        imageUrl: 'https://media.steelseriescdn.com/thumbs/catalog/items/61631/a22b9b2433b84266915eb4d5cd0af24f.png.500x400_q100_crop-fit_optimize.png',
        affiliateUrl: 'https://www.amazon.fr/dp/B0B3VGNFCP',
        ctaText: "Voir l'offre →",
        badge: 'Top Ventes',
      },
      disclosure: 'Lien affilié — nous percevons une commission sans surcoût pour vous.',
    },
  })

  await payload.create({
    collection: 'affiliate-blocks',
    data: {
      title: 'Logitech G Pro X Superlight 2 — Sidebar FR (locale)',
      placement: 'article-sidebar',
      locale: 'fr',
      active: true,
      roles: ['all'],
      product: {
        name: 'Logitech G Pro X Superlight 2',
        tagline: 'La souris des pros LoL',
        imageUrl: 'https://resource.logitechg.com/w_692,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x2-superlight/pro-x2-superlight-gallery-1-black.png',
        affiliateUrl: 'https://www.amazon.fr/dp/B09NBQN3X2',
        ctaText: 'Acheter →',
        badge: 'Pro Gamers',
      },
      disclosure: 'Lien affilié — nous percevons une commission sans surcoût pour vous.',
    },
  })

  // ── 2. English blocks (Amazon.com) ──────────────────────────────

  // EN — article-content (banner)
  await payload.create({
    collection: 'affiliate-blocks',
    data: {
      title: 'SteelSeries Arctis Nova 3 — Article EN',
      placement: 'article-content',
      locale: 'en',
      active: true,
      roles: ['all'],
      product: {
        name: 'SteelSeries Arctis Nova 3',
        tagline: 'Pro gaming headset for League of Legends',
        imageUrl: 'https://media.steelseriescdn.com/thumbs/catalog/items/61631/a22b9b2433b84266915eb4d5cd0af24f.png.500x400_q100_crop-fit_optimize.png',
        affiliateUrl: 'https://www.amazon.com/dp/B0B3VGNFCP',
        ctaText: 'View Deal →',
        badge: 'Top Rated',
      },
      disclosure: 'Affiliate link — we earn a commission at no extra cost to you.',
    },
  })

  // EN — article-sidebar (card)
  await payload.create({
    collection: 'affiliate-blocks',
    data: {
      title: 'Logitech G Pro X Superlight 2 — Sidebar EN',
      placement: 'article-sidebar',
      locale: 'en',
      active: true,
      roles: ['all'],
      product: {
        name: 'Logitech G Pro X Superlight 2',
        tagline: 'Used by pro LoL players worldwide',
        imageUrl: 'https://resource.logitechg.com/w_692,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x2-superlight/pro-x2-superlight-gallery-1-black.png',
        affiliateUrl: 'https://www.amazon.com/dp/B09NBQN3X2',
        ctaText: 'Shop Now →',
        badge: 'Pro Choice',
      },
      disclosure: 'Affiliate link — we earn a commission at no extra cost to you.',
    },
  })

  // EN — article-content rotation: HyperX Cloud Alpha
  await payload.create({
    collection: 'affiliate-blocks',
    data: {
      title: 'HyperX Cloud Alpha — Article EN',
      placement: 'article-content',
      locale: 'en',
      active: true,
      roles: ['all'],
      product: {
        name: 'HyperX Cloud Alpha',
        tagline: 'Legendary comfort for long gaming sessions',
        imageUrl: 'https://media.kingston.com/hyperx/feature/aa-hx-headset-cloud-alpha-black-red-1-lg.jpg',
        affiliateUrl: 'https://www.amazon.com/dp/B074NBSF9N',
        ctaText: 'Check Price →',
        badge: 'Best Value',
      },
      disclosure: 'Affiliate link — we earn a commission at no extra cost to you.',
    },
  })

  // ── 3. Spanish blocks (Amazon.es) ───────────────────────────────

  // ES — article-content (banner)
  await payload.create({
    collection: 'affiliate-blocks',
    data: {
      title: 'SteelSeries Arctis Nova 3 — Article ES',
      placement: 'article-content',
      locale: 'es',
      active: true,
      roles: ['all'],
      product: {
        name: 'SteelSeries Arctis Nova 3',
        tagline: 'Auriculares gaming pro para League of Legends',
        imageUrl: 'https://media.steelseriescdn.com/thumbs/catalog/items/61631/a22b9b2433b84266915eb4d5cd0af24f.png.500x400_q100_crop-fit_optimize.png',
        affiliateUrl: 'https://www.amazon.es/dp/B0B3VGNFCP',
        ctaText: 'Ver Oferta →',
        badge: 'Recomendado',
      },
      disclosure: 'Enlace de afiliado — ganamos una comisión sin coste adicional para ti.',
    },
  })

  // ES — article-sidebar (card)
  await payload.create({
    collection: 'affiliate-blocks',
    data: {
      title: 'Logitech G Pro X Superlight 2 — Sidebar ES',
      placement: 'article-sidebar',
      locale: 'es',
      active: true,
      roles: ['all'],
      product: {
        name: 'Logitech G Pro X Superlight 2',
        tagline: 'El ratón de los pros de LoL',
        imageUrl: 'https://resource.logitechg.com/w_692,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x2-superlight/pro-x2-superlight-gallery-1-black.png',
        affiliateUrl: 'https://www.amazon.es/dp/B09NBQN3X2',
        ctaText: 'Comprar →',
        badge: 'Pro Gamers',
      },
      disclosure: 'Enlace de afiliado — ganamos una comisión sin coste adicional para ti.',
    },
  })

  // ES — article-content rotation: Razer DeathAdder V3
  await payload.create({
    collection: 'affiliate-blocks',
    data: {
      title: 'Razer DeathAdder V3 — Article ES',
      placement: 'article-content',
      locale: 'es',
      active: true,
      roles: ['adc', 'mage', 'assassin'],
      product: {
        name: 'Razer DeathAdder V3',
        tagline: 'Precisión extrema para ADCs y Midlaners',
        imageUrl: 'https://assets2.razerzone.com/images/pnx.assets/5d01f47059b3d06dbe0ef8c28e3eb1c3/razer-deathadder-v3-500x500.webp',
        affiliateUrl: 'https://www.amazon.es/dp/B0BJWRQMWY',
        ctaText: 'Ver Precio →',
        badge: '-15%',
      },
      disclosure: 'Enlace de afiliado — ganamos una comisión sin coste adicional para ti.',
    },
  })

  console.log('✅ Migration 006: locale tags updated, EN + ES blocks created')
}
