import type { MigrationModule } from './runner'

export const id = '010-drop-slug-unique-index'
export const description = 'Drop unique index on pages.slug to allow same slug across locales'

export const up: MigrationModule['up'] = async (payload) => {
  try {
    // Access the underlying MongoDB collection via Payload's db adapter
    const col = (payload.db as any).collections?.pages
      ?? (payload as any).db?.connection?.collection?.('pages')

    if (!col) {
      console.log('  → Could not access pages collection directly, skipping.')
      return
    }

    const indexes = await col.indexes()
    const hasSlugUnique = indexes.some(
      (idx: any) => idx.key?.slug === 1 && idx.unique === true
    )

    if (!hasSlugUnique) {
      console.log('  → Unique index on slug already absent, skip.')
      return
    }

    await col.dropIndex('slug_1')
    console.log('  ✓ Unique index slug_1 dropped.')
  } catch (e: any) {
    // Index may not exist or already dropped — not fatal
    console.log(`  → dropIndex skipped: ${e.message}`)
  }
}
