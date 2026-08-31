import type { MigrationModule } from './runner'

export const id = '184-delete-august-2026-news'
export const description = 'Supprime toutes les news publiées en août 2026 (migrations 158-177)'

export const up: MigrationModule['up'] = async (payload) => {
  const result = await payload.find({
    collection: 'news',
    where: {
      publishedAt: {
        greater_than_equal: '2026-08-01T00:00:00.000Z',
        less_than: '2026-09-01T00:00:00.000Z',
      },
    },
    limit: 200,
  })

  console.log(`🗑️  ${result.docs.length} article(s) trouvé(s) en août 2026`)

  for (const doc of result.docs) {
    await payload.delete({ collection: 'news', id: doc.id })
    console.log(`✅ Supprimé : ${doc.slug} (${doc.publishedAt})`)
  }

  console.log(`✅ Terminé — ${result.docs.length} article(s) supprimé(s)`)
}
