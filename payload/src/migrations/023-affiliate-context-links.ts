import type { MigrationModule } from './runner'

export const id = '023-affiliate-context-links'
export const description =
  'Migre les blocs affiliés : ajoute le champ `context` (mappé depuis placement) et le tableau `links[]` (depuis affiliateUrl FR). Prépare le système multilingue.'

/**
 * Mapping placement legacy → context nouveau
 */
const PLACEMENT_TO_CONTEXT: Record<string, string> = {
  'homepage-hero':       'homepage',
  'quiz-results':        'quiz',
  'quiz-results-bottom': 'quiz',
  'champion-sidebar':    'sidebar',
  'article-content':     'content',
  'article-sidebar':     'sidebar',
}

export const up: MigrationModule['up'] = async (payload) => {
  // ── 1. Récupérer tous les blocs existants ─────────────────────
  const res = await payload.find({
    collection: 'affiliate-blocks',
    limit: 200,
    pagination: false,
  })

  console.log(`📦 ${res.docs.length} blocs affiliés à migrer…`)

  let updated = 0
  let skipped = 0

  for (const doc of res.docs) {
    // Déjà migré si context est renseigné ET links a des entrées
    if (doc.context && Array.isArray(doc.links) && doc.links.length > 0) {
      skipped++
      console.log(`  → skip (déjà migré) : ${doc.title}`)
      continue
    }

    const legacyPlacement = (doc as any).placement ?? ''
    const newContext = PLACEMENT_TO_CONTEXT[legacyPlacement] ?? null

    // Construire links[] depuis affiliateUrl existant
    const existingUrl = (doc as any).product?.affiliateUrl ?? ''
    const links = existingUrl
      ? [{ locale: 'fr', url: existingUrl }]
      : []

    if (!newContext) {
      console.warn(`  ⚠️  Placement inconnu "${legacyPlacement}" pour "${doc.title}" — context non défini`)
    }

    await payload.update({
      collection: 'affiliate-blocks',
      id: doc.id,
      data: {
        ...(newContext ? { context: newContext } : {}),
        links,
      } as any,
    })

    updated++
    console.log(
      `  ✅ ${doc.title} → context: ${newContext ?? '?'}, links: [${links.map(l => l.locale).join(', ')}]`
    )
  }

  console.log(`\n📊 Résumé : ${updated} mis à jour, ${skipped} déjà migrés`)

  // ── 2. Créer des blocs spécifiques context=content pour news/patch-notes ──
  // (en plus des article-content déjà convertis)
  // Ces blocs seront affichés dans les articles news et patch notes.

  const DISCLOSURE = 'Lien affilié — nous percevons une commission sans surcoût pour vous.'

  const contentBlocks = [
    {
      title: 'Logitech G Pro X Superlight 2 — Content (News/Patch)',
      context: 'content',
      active: true,
      roles: ['all'],
      links: [
        { locale: 'fr', url: 'https://www.amazon.fr/dp/B09NBQN3X2' },
        { locale: 'en', url: 'https://www.amazon.co.uk/dp/B09NBQN3X2' },
        { locale: 'es', url: 'https://www.amazon.es/dp/B09NBQN3X2' },
      ],
      product: {
        name: 'Logitech G Pro X Superlight 2',
        tagline: 'La souris des pros LoL — légère, précise, sans fil',
        imageUrl: 'https://m.media-amazon.com/images/I/61rEjGq9daL._AC_SL1500_.jpg',
        ctaText: 'Voir sur Amazon →',
        badge: 'Pro Gamers',
        affiliateUrl: 'https://www.amazon.fr/dp/B09NBQN3X2',
      },
      disclosure: DISCLOSURE,
    },
    {
      title: 'SteelSeries Arctis Nova 3 — Content (News/Patch)',
      context: 'content',
      active: true,
      roles: ['all'],
      links: [
        { locale: 'fr', url: 'https://www.amazon.fr/dp/B0B3VGNFCP' },
        { locale: 'en', url: 'https://www.amazon.co.uk/dp/B0B3VGNFCP' },
        { locale: 'es', url: 'https://www.amazon.es/dp/B0B3VGNFCP' },
      ],
      product: {
        name: 'SteelSeries Arctis Nova 3',
        tagline: 'Le casque gaming des champions LoL',
        imageUrl: 'https://m.media-amazon.com/images/I/61RMB7XVPBL._AC_SL1500_.jpg',
        ctaText: "Voir l'offre →",
        badge: 'Top Ventes',
        affiliateUrl: 'https://www.amazon.fr/dp/B0B3VGNFCP',
      },
      disclosure: DISCLOSURE,
    },
    {
      title: 'HyperX Cloud III — Content (News/Patch)',
      context: 'content',
      active: true,
      roles: ['all'],
      links: [
        { locale: 'fr', url: 'https://www.amazon.fr/dp/B0BZMQD9HB' },
        { locale: 'en', url: 'https://www.amazon.co.uk/dp/B0BZMQD9HB' },
        { locale: 'es', url: 'https://www.amazon.es/dp/B0BZMQD9HB' },
      ],
      product: {
        name: 'HyperX Cloud III',
        tagline: 'Audio spatial 3D pour entendre chaque pas ennemi',
        imageUrl: 'https://m.media-amazon.com/images/I/71YGhfZ9+YL._AC_SL1500_.jpg',
        ctaText: 'Voir sur Amazon →',
        badge: '',
        affiliateUrl: 'https://www.amazon.fr/dp/B0BZMQD9HB',
      },
      disclosure: DISCLOSURE,
    },
  ]

  console.log('\n🆕 Création des blocs content (news/patch-notes)…')

  for (const block of contentBlocks) {
    const existing = await payload.find({
      collection: 'affiliate-blocks',
      where: { title: { equals: block.title } },
    })
    if (existing.docs.length > 0) {
      console.log(`  → "${block.title}" déjà présent, skip.`)
      continue
    }
    await payload.create({ collection: 'affiliate-blocks', data: block as any })
    console.log(`  ✅ ${block.title}`)
  }

  console.log('\n✅ Migration 023 terminée — blocs affiliés migrés vers context+links')
}
