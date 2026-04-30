import type { MigrationModule } from './runner'

export const id = '021-add-cover-images'
export const description = 'Ajoute les images de couverture sur tous les patch notes et news'

const IMAGES: Record<string, string> = {
  // Patch notes — images officielles depuis le CDN Riot (cmsassets.rgpub.io)
  'patch-26-9':
    'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/c5b5258034a7e4c34fc360db44a5af4703ec9d9b-1920x1080.jpg',
  'patch-26-8':
    'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/d0b58e4a579fc573b9dd177332acd3c094694fa8-1920x1080.png',

  // News — photos presse & visuels officiels
  'keria-re-signe-t1-2029':
    'https://static.invenglobal.com/upload/image/2026/04/26/i1777204515962872.jpeg',
  'saison-2-pandemonium-lol-2026':
    'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/c5b5258034a7e4c34fc360db44a5af4703ec9d9b-1920x1080.jpg',
  'tier-list-patch-26-9-saison-2':
    'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg',
}

export const up: MigrationModule['up'] = async (payload) => {

  // ── Patch notes ────────────────────────────────────────────────
  for (const [slug, imageUrl] of Object.entries(IMAGES)) {
    const collection = slug.startsWith('patch-') ? 'patch-notes' : 'news'
    const res = await payload.find({
      collection,
      where: { slug: { equals: slug } },
      limit: 1,
    })
    const doc = res.docs[0]
    if (!doc) {
      console.warn(`⚠️  Doc introuvable : ${collection}/${slug}`)
      continue
    }
    await payload.update({
      collection,
      id: doc.id,
      data: { coverImage: imageUrl },
    })
    console.log(`✅  Image ajoutée sur ${collection}/${slug}`)
  }
}
