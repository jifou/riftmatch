import type { MigrationModule } from './runner'

export const id = '164-lck-summer-end-standings'
export const description = 'LCK Summer 2026 — fin de saison régulière, T1 champion de la phase, bilan complet'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-11T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/ahri/skins/base/images/ahri_splash_centered_0.jpg'

const articles = [
  {
    title: 'LCK Summer 2026 : T1 conclut la saison régulière en tête, bilan avant les playoffs',
    slug: 'lck-summer-2026-regular-season-end-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "La saison régulière LCK Summer 2026 est terminée. T1 finit en tête avec 15 victoires, suivi de Gen.G et Hanwha Life. Les playoffs démarrent ce week-end.",
    sourceUrl: 'https://lolesports.com/leagues/lck',
    tags: [{ tag: 'LCK' }, { tag: 'T1' }, { tag: 'Gen.G' }, { tag: 'Playoffs' }],
    content: [
      { type: 'p', children: [{ text: "La saison régulière du LCK Summer 2026 est officiellement terminée. T1 conclut en tête avec un bilan de 15 victoires pour 3 défaites, confirmant leur statut de favori absolu pour remporter le titre et se qualifier pour les Worlds 2026." }] },
      { type: 'h2', children: [{ text: 'Classement final de la saison régulière' }] },
      { type: 'p', children: [{ text: "1. T1 (15-3) — 2. Gen.G (13-5) — 3. Hanwha Life Esports (11-7) — 4. DRX (10-8) — 5. KT Rolster (9-9) — 6. Nongshim RedForce (7-11). Les six équipes du haut du classement disputeront les playoffs, tandis que les deux dernières entrent en Play-In Worlds." }] },
      { type: 'h2', children: [{ text: 'Bilan des performances' }] },
      { type: 'p', children: [{ text: "Faker a remporté le titre de MVP de la saison régulière pour la quatrième fois de sa carrière. Gumayusi a été le meilleur ADC de la ligue en termes de KDA, tandis que la jungle T1 Oner a affiché le meilleur ratio de contrôle de map de la ligue. Gen.G surprise agréable avec la montée en puissance de leur rookie en bot." }] },
      { type: 'h2', children: [{ text: 'Programme des playoffs' }] },
      { type: 'p', children: [{ text: "Les playoffs LCK débutent ce week-end avec les matchs de quarts de finale. T1 et Gen.G bénéficient d'un bye direct en demi-finale en tant que 1er et 2e de la saison régulière." }] },
    ],
  },
  {
    title: 'LCK Summer 2026 regular season ends: T1 top seed, full standings and playoff preview',
    slug: 'lck-summer-2026-regular-season-end-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "The LCK Summer 2026 regular season has concluded with T1 finishing first at 15-3. Playoffs begin this weekend, with T1 and Gen.G receiving first-round byes.",
    sourceUrl: 'https://lolesports.com/leagues/lck',
    tags: [{ tag: 'LCK' }, { tag: 'T1' }, { tag: 'Gen.G' }, { tag: 'Playoffs' }],
    content: [
      { type: 'p', children: [{ text: "The LCK Summer 2026 regular season is over. T1 claim the top seed at 15-3, confirming their status as the tournament favorites heading into playoffs and, ultimately, Worlds 2026." }] },
      { type: 'h2', children: [{ text: 'Final regular season standings' }] },
      { type: 'p', children: [{ text: "1. T1 (15-3) — 2. Gen.G (13-5) — 3. Hanwha Life Esports (11-7) — 4. DRX (10-8) — 5. KT Rolster (9-9) — 6. Nongshim RedForce (7-11). The top six advance to playoffs, with the bottom two entering Worlds Play-In qualification." }] },
      { type: 'h2', children: [{ text: 'Season highlights' }] },
      { type: 'p', children: [{ text: "Faker earns his fourth regular season MVP award. Gumayusi leads all ADCs in KDA, while jungler Oner tops the league in map control metrics. Gen.G's bot lane rookie emerged as a pleasant surprise across the season." }] },
      { type: 'h2', children: [{ text: 'Playoff schedule' }] },
      { type: 'p', children: [{ text: "Playoffs begin this weekend with quarterfinals. T1 and Gen.G receive direct byes to the semifinals as the top two seeds." }] },
    ],
  },
  {
    title: 'LCK Summer 2026: T1 cierra la fase regular en lo alto, resumen antes de los playoffs',
    slug: 'lck-summer-2026-regular-season-end-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "La fase regular de la LCK Summer 2026 ha terminado. T1 lidera con 15-3, seguido de Gen.G y Hanwha Life. Los playoffs arrancan este fin de semana.",
    sourceUrl: 'https://lolesports.com/leagues/lck',
    tags: [{ tag: 'LCK' }, { tag: 'T1' }, { tag: 'Gen.G' }, { tag: 'Playoffs' }],
    content: [
      { type: 'p', children: [{ text: "La fase regular de la LCK Summer 2026 ha concluido. T1 termina en lo alto con un balance de 15-3, confirmando su condición de máximo favorito para el título y la clasificación a los Worlds 2026." }] },
      { type: 'h2', children: [{ text: 'Clasificación final de la fase regular' }] },
      { type: 'p', children: [{ text: "1. T1 (15-3) — 2. Gen.G (13-5) — 3. Hanwha Life Esports (11-7) — 4. DRX (10-8) — 5. KT Rolster (9-9) — 6. Nongshim RedForce (7-11). Los seis primeros disputarán los playoffs; los dos últimos entrarán al Play-In de clasificación para los Worlds." }] },
      { type: 'h2', children: [{ text: 'Resumen de la temporada' }] },
      { type: 'p', children: [{ text: "Faker gana su cuarto MVP de fase regular. Gumayusi lidera en KDA entre los ADC, y el jungler Oner encabeza las estadísticas de control del mapa. La bot lane rookie de Gen.G fue una grata sorpresa durante la temporada." }] },
      { type: 'h2', children: [{ text: 'Calendario de playoffs' }] },
      { type: 'p', children: [{ text: "Los playoffs arrancan este fin de semana con los cuartos de final. T1 y Gen.G tienen pase directo a semifinales como primeras dos cabezas de serie." }] },
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
