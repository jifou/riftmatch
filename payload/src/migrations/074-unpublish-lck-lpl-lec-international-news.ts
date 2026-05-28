import type { MigrationModule } from './runner'

export const id = '074-unpublish-lck-lpl-lec-international-news'
export const description =
  'Dépublier (→ draft) tous les articles LCK, LPL, LEC et International — contenu auto-généré potentiellement inexact, à régénérer via Liquipedia'

const TYPES = ['lck', 'lpl', 'lec', 'international']

export const up: MigrationModule['up'] = async (payload) => {
  let total = 0

  for (const newsType of TYPES) {
    const res = await payload.find({
      collection: 'news',
      where: {
        and: [
          { newsType: { equals: newsType } },
          { status: { equals: 'published' } },
        ],
      },
      limit: 500,
    })

    console.log(`\n[${newsType.toUpperCase()}] ${res.docs.length} articles publiés trouvés`)

    for (const doc of res.docs) {
      await payload.update({
        collection: 'news',
        id: doc.id,
        data: { status: 'draft' },
      })
      console.log(`  → draft : ${doc.slug}`)
      total++
    }
  }

  console.log(`\n✅ Migration 074 terminée — ${total} articles passés en draft`)
}
