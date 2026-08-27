import type { MigrationModule } from './runner'

export const id = '158-lck-t1-drx-2026-summer-results'
export const description = 'LCK Summer 2026 — T1 domine DRX 2-0 et consolide sa place de leader à deux journées de la fin'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-05T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/syndra/skins/base/images/syndra_splash_centered_0.jpg'

const articles = [
  {
    title: 'LCK Summer 2026 : T1 écrase DRX 2-0 et reste seul en tête à deux journées du terme',
    slug: 'lck-summer-2026-t1-drx-week-results-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: 'T1 a disposé de DRX sans trembler lors de la dernière journée LCK, Faker terminant MVP du match avec une performance de roi sur Syndra.',
    sourceUrl: 'https://lolesports.com/leagues/lck',
    tags: [{ tag: 'LCK' }, { tag: 'T1' }, { tag: 'DRX' }, { tag: 'Faker' }],
    content: [
      { type: 'p', children: [{ text: "T1 continue d'impressionner en LCK Summer 2026. Ce mardi, la formation de Faker a balayé DRX 2-0 lors d'un match que le tenant du titre a contrôlé de bout en bout, confirmant sa domination à deux rondes du terme de la saison régulière." }] },
      { type: 'h2', children: [{ text: 'Faker intouchable sur Syndra' }] },
      { type: 'p', children: [{ text: "Le mid-laner de T1 a sorti une performance de très haut niveau sur Syndra en game 1, totalement étouffant le carry adverse. Une association Gumayusi – Keria parfaite en botlane a permis d'ouvrir la carte dès la 15e minute, et la remontée de DRX n'a jamais eu lieu. En game 2, T1 a opté pour un style plus agressif avec Faker sur Azir, exploitant chaque erreur de rotation adverse pour fermer la partie en 28 minutes." }] },
      { type: 'h2', children: [{ text: 'Le classement avant les deux dernières journées' }] },
      { type: 'p', children: [{ text: 'Avec cette victoire, T1 totalise 14 victoires pour 3 défaites. Gen.G suit à deux victoires de retard, tandis que Hanwha Life et DRX se disputent les places de playoffs. La dernière journée de la saison régulière LCK se tiendra la semaine prochaine, avant l'entrée en playoffs.' }] },
      { type: 'blockquote', children: [{ text: "« On veut rester concentrés sur notre jeu, pas sur le classement. Chaque match nous sert à peaufiner nos stratégies avant les playoffs. » — Faker" }] },
    ],
  },
  {
    title: 'LCK Summer 2026: T1 crushes DRX 2-0, stays atop standings with two weeks left',
    slug: 'lck-summer-2026-t1-drx-week-results-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: 'T1 dispatched DRX in convincing fashion, with Faker earning MVP honors on Syndra as the squad remains the LCK frontrunner heading into the final stretch.',
    sourceUrl: 'https://lolesports.com/leagues/lck',
    tags: [{ tag: 'LCK' }, { tag: 'T1' }, { tag: 'DRX' }, { tag: 'Faker' }],
    content: [
      { type: 'p', children: [{ text: 'T1 keeps rolling in LCK Summer 2026. Tuesday\'s 2-0 sweep of DRX was a clinic in macro dominance, with the reigning world champions showcasing why they remain the team to beat heading into playoffs.' }] },
      { type: 'h2', children: [{ text: 'Faker dominant on Syndra' }] },
      { type: 'p', children: [{ text: 'Faker drew first blood in the mid lane less than three minutes in during Game 1, snowballing his Syndra lead into a stranglehold by the 20-minute mark. The Gumayusi–Keria bot lane added pressure from below, and DRX never found an answer. Game 2 saw T1 switch gears with Faker on Azir, methodically dismantling DRX's map control before closing out in under 30 minutes.' }] },
      { type: 'h2', children: [{ text: 'Standings with two weeks remaining' }] },
      { type: 'p', children: [{ text: 'T1 now sits at 14-3, two wins clear of Gen.G in second. Hanwha Life and DRX are locked in a battle for the remaining playoff spots, making the final weeks crucial for the bottom half of the bracket.' }] },
      { type: 'blockquote', children: [{ text: '"We want to stay focused on our game, not the standings. Every match is preparation for playoffs." — Faker' }] },
    ],
  },
  {
    title: 'LCK Summer 2026: T1 aplasta a DRX 2-0 y sigue líder a dos jornadas del final',
    slug: 'lck-summer-2026-t1-drx-week-results-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: 'T1 derrotó a DRX sin dificultades, con Faker siendo MVP en Syndra mientras el equipo se mantiene líder indiscutible de la LCK Summer.',
    sourceUrl: 'https://lolesports.com/leagues/lck',
    tags: [{ tag: 'LCK' }, { tag: 'T1' }, { tag: 'DRX' }, { tag: 'Faker' }],
    content: [
      { type: 'p', children: [{ text: 'T1 sigue imparable en la LCK Summer 2026. El martes, la escuadra de Faker barrió 2-0 a DRX en un partido que el campeón vigente controló de principio a fin, confirmando su dominio con dos jornadas por delante en la fase regular.' }] },
      { type: 'h2', children: [{ text: 'Faker intocable en Syndra' }] },
      { type: 'p', children: [{ text: 'Faker fue MVP indiscutible de la partida 1 con Syndra, neutralizando por completo al carry rival. La bot lane Gumayusi–Keria abrió el mapa a los 15 minutos y DRX nunca encontró la vuelta. En la partida 2, T1 apostó por Azir para Faker y aprovechó cada error de rotación rival para cerrar en 28 minutos.' }] },
      { type: 'h2', children: [{ text: 'Clasificación antes de las dos últimas jornadas' }] },
      { type: 'p', children: [{ text: 'Con esta victoria, T1 acumula 14 victorias por 3 derrotas. Gen.G le sigue a dos triunfos, mientras Hanwha Life y DRX pelean por los puestos de playoffs en la recta final.' }] },
      { type: 'blockquote', children: [{ text: '"Queremos centrarnos en nuestro juego, no en la clasificación. Cada partido es preparación para los playoffs." — Faker' }] },
    ],
  },
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const a of articles) {
    const ex = await payload.find({ collection: 'news', where: { slug: { equals: a.slug } } })
    if (ex.docs.length > 0) { console.log(`→ skip ${a.slug}`); continue }
    await payload.create({ collection: 'news', data: a as any })
    console.log(`✅ ${a.locale.toUpperCase()} — ${a.title}`)
  }
}
