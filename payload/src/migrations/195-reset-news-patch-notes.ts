import type { MigrationModule } from './runner'

export const id = '195-reset-news-patch-notes'
export const description = 'Remise a zero: supprime toutes les news et tous les patch notes pour repartir du 12 octobre 2026 (guides conserves)'

async function wipe(payload: any, collection: string) {
  let total = 0
  // On boucle: find renvoie au plus `limit` documents, on supprime puis on recommence
  for (let i = 0; i < 20; i++) {
    const res = await payload.find({ collection, limit: 200, depth: 0 })
    if (res.docs.length === 0) break
    for (const doc of res.docs) {
      await payload.delete({ collection, id: doc.id })
      total++
    }
  }
  console.log(`   ${collection}: ${total} document(s) supprime(s)`)
}

export const up: MigrationModule['up'] = async (payload) => {
  await wipe(payload, 'news')
  await wipe(payload, 'patch-notes')
}
