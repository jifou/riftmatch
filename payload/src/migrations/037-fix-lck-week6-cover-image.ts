import type { MigrationModule } from './runner'

export const id = '037-fix-lck-week6-cover-image'
export const description = 'Fix LCK Week 6 cover image — remplace Keria (doublon) par Ambessa loading screen (Doran carry)'

// L'article LCK Semaine 6 utilisait la même image que l'article "Keria re-signe T1".
// Doran a carry sur Ambessa vs DK — image pertinente et unique.
const NEW_COVER = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ambessa_0.jpg'

const SLUGS = [
  'lck-2026-semaine-6-resultats-t1-hle',
  'lck-2026-week-6-results-t1-hle-en',
  'lck-2026-semana-6-resultados-t1-hle-es',
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const slug of SLUGS) {
    const res = await payload.find({ collection: 'news', where: { slug: { equals: slug } } })
    if (!res.docs.length) {
      console.log(`  → introuvable: ${slug}`)
      continue
    }
    const doc = res.docs[0]
    await payload.update({ collection: 'news', id: doc.id, data: { coverImage: NEW_COVER } })
    console.log(`  ✅ ${slug} — image mise à jour`)
  }
  console.log('✅ Migration 037 terminée')
}
