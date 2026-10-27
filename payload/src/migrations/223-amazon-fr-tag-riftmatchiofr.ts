import type { MigrationModule } from './runner'

export const id = '223-amazon-fr-tag-riftmatchiofr'
export const description = 'Liens amazon.fr: tag riftmatchio-21 / riftmatch-21 remplace par riftmatchiofr-21 (ID reel du compte Associates FR)'

const FR_TAG = 'riftmatchiofr-21'
// amazon.fr uniquement: les autres boutiques gardent leur propre tag.
const OLD_FR_TAG = /(https:\/\/www\.amazon\.fr\/[^"'\s<>]*?[?&]tag=)(?:riftmatchio|riftmatch)-21(?![\w-])/g
const SKIP = new Set(['id', 'createdAt', 'updatedAt', '_status'])

// Retourne les seuls champs de premier niveau qui changent, ou null.
function diffDoc(doc: Record<string, any>): Record<string, any> | null {
  const changed: Record<string, any> = {}
  for (const [key, value] of Object.entries(doc)) {
    if (SKIP.has(key) || value == null) continue
    const before = JSON.stringify(value)
    const after = before.replace(OLD_FR_TAG, `$1${FR_TAG}`)
    if (after !== before) changed[key] = JSON.parse(after)
  }
  return Object.keys(changed).length ? changed : null
}

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
      if (!res.docs.length || !res.totalPages || page >= res.totalPages) break
      page++
    }
    console.log(`  ${collection}: ${fixed} document(s) corrige(s) sur ${total}`)
  }
}
