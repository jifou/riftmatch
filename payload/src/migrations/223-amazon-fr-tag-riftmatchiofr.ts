import type { MigrationModule } from './runner'
import { diffDoc } from './runner-amazon-tag'

export const id = '223-amazon-fr-tag-riftmatchiofr'
export const description = 'Liens amazon.fr: tag riftmatchio-21 / riftmatch-21 remplace par riftmatchiofr-21 (ID reel du compte Associates FR)'

export const up: MigrationModule['up'] = async (payload) => {
  for (const collection of ['pages', 'affiliate-blocks', 'news'] as const) {
    let page = 1
    let fixed = 0
    let total = 0
    while (true) {
      const res = await payload.find({ collection, limit: 100, page, depth: 0 })
      for (const doc of res.docs as any[]) {
        total++
        const data = diffDoc(doc)
        if (!data) continue
        await payload.update({ collection, id: doc.id, data })
        fixed++
      }
      if (page >= res.totalPages) break
      page++
    }
    console.log(`  ${collection}: ${fixed} document(s) corrige(s) sur ${total}`)
  }
}
