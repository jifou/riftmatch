import type { MigrationModule } from './runner'

export const id = '025-affiliate-cleanup'
export const description =
  'Supprime définitivement les blocs affiliés inactifs (doublons) et nettoie les titres des blocs canoniques.'

// Titres propres pour chaque produit canonique
const CLEAN_TITLES: Record<string, string> = {
  'logitech g pro x superlight 2': 'Logitech G Pro X Superlight 2',
  'steelseries arctis nova 3':     'SteelSeries Arctis Nova 3',
  'hyperx cloud iii':              'HyperX Cloud III',
  'benq zowie xl2411k':            'BenQ ZOWIE XL2411K',
  'razer deathadder v3':           'Razer DeathAdder V3',
  'hyperx cloud alpha':            'HyperX Cloud Alpha',
}

export const up: MigrationModule['up'] = async (payload) => {
  const res = await payload.find({
    collection: 'affiliate-blocks',
    limit: 200,
    pagination: false,
  })

  const docs = res.docs as any[]
  console.log(`📦 ${docs.length} blocs en base`)

  let deleted = 0
  let renamed = 0

  for (const doc of docs) {
    // ── Supprimer les inactifs ─────────────────────────────────
    if (!doc.active) {
      await payload.delete({ collection: 'affiliate-blocks', id: doc.id })
      deleted++
      console.log(`  🗑  Supprimé : ${doc.title}`)
      continue
    }

    // ── Nettoyer le titre des actifs ───────────────────────────
    const productName = (doc.product?.name ?? '').trim().toLowerCase()
    const cleanTitle = CLEAN_TITLES[productName]

    if (cleanTitle && doc.title !== cleanTitle) {
      await payload.update({
        collection: 'affiliate-blocks',
        id: doc.id,
        data: { title: cleanTitle } as any,
      })
      renamed++
      console.log(`  ✏️  Renommé : "${doc.title}" → "${cleanTitle}"`)
    } else {
      console.log(`  ✓  OK : ${doc.title}`)
    }
  }

  console.log(`\n📊 Résumé : ${deleted} supprimés, ${renamed} renommés`)
  console.log('✅ Migration 025 terminée — base affiliés propre')
}
