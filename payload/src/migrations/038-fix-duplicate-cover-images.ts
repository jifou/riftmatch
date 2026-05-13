import type { MigrationModule } from './runner'

export const id = '038-fix-duplicate-cover-images'
export const description = 'Fix all duplicate coverImages across news articles'

// ── Mapping slug → nouvelle image ──────────────────────────────────────────
//
// 030 (LEC playoffs bracket KC vs G2) réutilisait l'image de 026 (Madrid roadshow)
// → Azir loading screen : champion emblématique des playoffs LEC, feel "tournoi"
//
// 032 (Game Changers Rising 2026) réutilisait la même image que 026 ES + 030 ES
// → Seraphine loading screen : champion "rising star", communauté diverse
//
// 034 (Lee Sin rework RIOT news) réutilisait le même splash que 027 (patch-note)
// → Lee Sin loading screen : même champion, image différente (portrait vs panoramique)
//
const FIXES: Array<{ slug: string; coverImage: string }> = [
  // 030 — LEC Spring 2026 playoffs bracket
  {
    slug: 'lec-spring-2026-playoffs-bracket-kc-g2-vitality-mkoi',
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Azir_0.jpg',
  },
  {
    slug: 'lec-spring-2026-playoffs-bracket-kc-g2-vitality-mkoi-en',
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Azir_0.jpg',
  },
  {
    slug: 'lec-spring-2026-playoffs-bracket-kc-g2-vitality-mkoi-es',
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Azir_0.jpg',
  },

  // 032 — Game Changers Rising 2026
  {
    slug: 'game-changers-rising-2026-format-nouveau',
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Seraphine_0.jpg',
  },
  {
    slug: 'game-changers-rising-2026-format-nouveau-en',
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Seraphine_0.jpg',
  },
  {
    slug: 'game-changers-rising-2026-format-nouveau-es',
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Seraphine_0.jpg',
  },

  // 034 — Lee Sin rework RIOT news (doublon avec patch-note 027)
  {
    slug: 'patch-2610-lee-sin-rework-fr',
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/LeeSin_0.jpg',
  },
  {
    slug: 'patch-2610-lee-sin-rework-en',
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/LeeSin_0.jpg',
  },
  {
    slug: 'patch-2610-lee-sin-rework-es',
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/LeeSin_0.jpg',
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
  console.log('✅ Migration 038 terminée — 9 articles mis à jour')
}
