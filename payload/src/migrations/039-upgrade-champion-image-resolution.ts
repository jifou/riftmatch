import type { MigrationModule } from './runner'

export const id = '039-upgrade-champion-image-resolution'
export const description = 'Upgrade champion images: loading screen (308×560) → centered splash (1280×720) via Community Dragon'

// Les migrations 037 et 038 avaient utilisé des loading screens DDragon (308×560px)
// qui apparaissent pixelisés sur les grands écrans (27"+).
// Community Dragon fournit des "centered splash" à 1280×720px pour tous les champions.
// Source : raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/

const CDN = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters'

const FIXES: Array<{ slug: string; coverImage: string }> = [
  // --- LCK Week 6 (T1 vs DK — Doran/Ambessa carry) ---
  // Migration 037 utilisait Ambessa loading screen (308×560)
  {
    slug: 'lck-2026-semaine-6-resultats-t1-hle',
    coverImage: `${CDN}/ambessa/skins/base/images/ambessa_splash_centered_0.jpg`,
  },
  {
    slug: 'lck-2026-week-6-results-t1-hle-en',
    coverImage: `${CDN}/ambessa/skins/base/images/ambessa_splash_centered_0.jpg`,
  },
  {
    slug: 'lck-2026-semana-6-resultados-t1-hle-es',
    coverImage: `${CDN}/ambessa/skins/base/images/ambessa_splash_centered_0.jpg`,
  },

  // --- LEC Spring 2026 Playoffs Bracket (KC vs G2) ---
  // Migration 038 utilisait Azir loading screen (308×560)
  {
    slug: 'lec-spring-2026-playoffs-bracket-kc-g2-vitality-mkoi',
    coverImage: `${CDN}/azir/skins/base/images/azir_splash_centered_0.jpg`,
  },
  {
    slug: 'lec-spring-2026-playoffs-bracket-kc-g2-vitality-mkoi-en',
    coverImage: `${CDN}/azir/skins/base/images/azir_splash_centered_0.jpg`,
  },
  {
    slug: 'lec-spring-2026-playoffs-bracket-kc-g2-vitality-mkoi-es',
    coverImage: `${CDN}/azir/skins/base/images/azir_splash_centered_0.jpg`,
  },

  // --- Game Changers Rising 2026 ---
  // Migration 038 utilisait Seraphine loading screen (308×560)
  {
    slug: 'game-changers-rising-2026-format-nouveau',
    coverImage: `${CDN}/seraphine/skins/base/images/seraphine_splash_centered_0.jpg`,
  },
  {
    slug: 'game-changers-rising-2026-format-nouveau-en',
    coverImage: `${CDN}/seraphine/skins/base/images/seraphine_splash_centered_0.jpg`,
  },
  {
    slug: 'game-changers-rising-2026-format-nouveau-es',
    coverImage: `${CDN}/seraphine/skins/base/images/seraphine_splash_centered_0.jpg`,
  },

  // --- Lee Sin Rework RIOT News ---
  // Migration 038 utilisait Lee Sin loading screen (308×560)
  {
    slug: 'patch-2610-lee-sin-rework-fr',
    coverImage: `${CDN}/leesin/skins/base/images/leesin_splash_centered_0.jpg`,
  },
  {
    slug: 'patch-2610-lee-sin-rework-en',
    coverImage: `${CDN}/leesin/skins/base/images/leesin_splash_centered_0.jpg`,
  },
  {
    slug: 'patch-2610-lee-sin-rework-es',
    coverImage: `${CDN}/leesin/skins/base/images/leesin_splash_centered_0.jpg`,
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
  console.log('✅ Migration 039 terminée — 12 articles mis à jour (308×560 → 1280×720)')
}
