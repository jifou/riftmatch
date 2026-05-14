import type { MigrationModule } from './runner'

export const id = '042-fix-lpl-broken-youtube-thumbnails'
export const description = 'Fix LPL articles with broken YouTube thumbnails (404) → Community Dragon centered splash'

// Les migrations 036 et 041 utilisaient des thumbnails YouTube en maxresdefault
// qui retournent 404 (vidéos sans HD disponible).
// Remplacement par Community Dragon centered splash 1280×720 — URLs garanties.

const CDN = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters'

const FIXES: Array<{ slug: string; coverImage: string }> = [
  // --- Migration 036 : BLG vs WE — dernière semaine LPL Split 2 ---
  // img.youtube.com/vi/AX5n_CxE-VU/maxresdefault.jpg → 404
  // Yone : champion dominant de la meta LPL, pick phare de BLG
  {
    slug: 'lpl-split2-2026-derniere-semaine-blg-we',
    coverImage: `${CDN}/yone/skins/base/images/yone_splash_centered_0.jpg`,
  },
  {
    slug: 'lpl-split2-2026-final-week-blg-we-en',
    coverImage: `${CDN}/yone/skins/base/images/yone_splash_centered_0.jpg`,
  },
  {
    slug: 'lpl-split2-2026-ultima-semana-blg-we-es',
    coverImage: `${CDN}/yone/skins/base/images/yone_splash_centered_0.jpg`,
  },

  // --- Migration 041 : LNG vs LGD Nirvana — semaine 7 LPL Split 2 ---
  // img.youtube.com/vi/5AU4mra548o/maxresdefault.jpg → 404
  // Draven : champion emblématique du style agressif LPL
  {
    slug: 'lpl-2026-split2-semaine7-lng-lgd-nirvana-fr',
    coverImage: `${CDN}/draven/skins/base/images/draven_splash_centered_0.jpg`,
  },
  {
    slug: 'lpl-2026-split2-week7-lng-lgd-nirvana-en',
    coverImage: `${CDN}/draven/skins/base/images/draven_splash_centered_0.jpg`,
  },
  {
    slug: 'lpl-2026-split2-semana7-lng-lgd-nirvana-es',
    coverImage: `${CDN}/draven/skins/base/images/draven_splash_centered_0.jpg`,
  },
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const { slug, coverImage } of FIXES) {
    const res = await payload.find({ collection: 'news', where: { slug: { equals: slug } } })
    if (!res.docs.length) {
      console.log(`  → introuvable: ${slug}`)
      continue
    }
    const doc = res.docs[0]
    await payload.update({ collection: 'news', id: doc.id, data: { coverImage } })
    console.log(`  ✅ ${slug}`)
  }
  console.log('✅ Migration 042 terminée — 6 articles LPL corrigés (YouTube 404 → Community Dragon 1280×720)')
}
