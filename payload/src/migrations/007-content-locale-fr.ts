import type { MigrationModule } from './runner'

export const id = '007-content-locale-fr'
export const description = 'Tag all existing pages and champion-content as locale:fr'

export const up: MigrationModule['up'] = async (payload) => {
  // ── Pages ────────────────────────────────────────────────────
  const pages = await payload.find({ collection: 'pages', limit: 200 })
  for (const page of pages.docs) {
    if (!page.locale) {
      await payload.update({
        collection: 'pages',
        id: page.id,
        data: { locale: 'fr' },
      })
    }
  }
  console.log(`  Tagged ${pages.docs.length} pages as fr`)

  // ── Champion content ─────────────────────────────────────────
  const champContent = await payload.find({ collection: 'champion-content', limit: 500 })
  for (const doc of champContent.docs) {
    if (!doc.locale) {
      await payload.update({
        collection: 'champion-content',
        id: doc.id,
        data: { locale: 'fr' },
      })
    }
  }
  console.log(`  Tagged ${champContent.docs.length} champion-content docs as fr`)
}
