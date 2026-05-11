import type { MigrationModule } from './runner'

export const id = '028-fix-lec-cover-image'
export const description = 'Fix coverImage for LEC Spring 2026 Madrid articles (was patch 26.9 image)'

const NEW_IMG = 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/2eeffc27c7d611657950840ad3f7b8086b367a20-1920x1080.jpg'
const SLUGS = [
  'lec-spring-2026-madrid-semaine7-bilan',
  'lec-spring-2026-madrid-week7-recap-en',
  'lec-spring-2026-madrid-semana7-resumen-es',
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const slug of SLUGS) {
    const res = await payload.find({ collection: 'news', where: { slug: { equals: slug } } })
    if (!res.docs.length) {
      console.log(`  → ${slug} introuvable, skip.`)
      continue
    }
    const doc = res.docs[0]
    await payload.update({ collection: 'news', id: doc.id, data: { coverImage: NEW_IMG } as any })
    console.log(`  ✅ Image mise à jour : ${slug}`)
  }
  console.log('✅ Migration 028 terminée')
}
