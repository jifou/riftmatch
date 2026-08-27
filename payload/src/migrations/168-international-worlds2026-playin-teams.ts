import type { MigrationModule } from './runner'

export const id = '168-international-worlds2026-playin-teams'
export const description = 'Worlds 2026 — 12 équipes du Play-In confirmées, Cloud9 représente le LCS'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-15T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/samira/skins/base/images/samira_splash_centered_0.jpg'

const articles = [
  {
    title: 'Worlds 2026 Play-In : les 12 équipes confirmées, Cloud9 et PSG Talon au rendez-vous',
    slug: 'worlds-2026-playin-teams-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "Les 12 équipes du Play-In des Worlds 2026 sont désormais toutes connues. Cloud9 (LCS), PSG Talon (PCS), KT Rolster (LCK) et Fnatic (LEC) figurent parmi les participants.",
    sourceUrl: 'https://lolesports.com/news',
    tags: [{ tag: 'Worlds 2026' }, { tag: 'Play-In' }, { tag: 'Cloud9' }, { tag: 'Fnatic' }],
    content: [
      { type: 'p', children: [{ text: "Le tableau des Worlds 2026 se précise. Les douze équipes qui disputeront le Play-In sont désormais toutes connues, suite à la fin des phases finales régionales en LCK, LPL, LEC et dans les ligues secondaires." }] },
      { type: 'h2', children: [{ text: 'La liste complète des 12 équipes' }] },
      { type: 'p', children: [{ text: "LCK (2) : KT Rolster, DRX — LPL (2) : Top Esports, Weibo Gaming — LEC (2) : Fnatic, MAD Lions — LCS (1) : Cloud9 — PCS (1) : PSG Talon — VCS (1) : Team Flash — CBLOL (1) : LOUD — LLA (1) : Isurus — LJL (1) : DetonatioN FocusMe." }] },
      { type: 'h2', children: [{ text: 'Les surprises et les favoris du Play-In' }] },
      { type: 'p', children: [{ text: "KT Rolster et DRX, deux équipes de premier plan en LCK, devront passer par le Play-In, ce qui promet une compétition très dense. Fnatic, en grande forme depuis quelques semaines, est l'une des équipes à surveiller. PSG Talon, régulièrement solide au Play-In, voudra cette fois franchir l'étape et accéder aux groupes." }] },
    ],
  },
  {
    title: 'Worlds 2026 Play-In: All 12 teams confirmed, Cloud9 and PSG Talon set to compete',
    slug: 'worlds-2026-playin-teams-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "All 12 Play-In teams for Worlds 2026 are now confirmed. Cloud9 (LCS), PSG Talon (PCS), KT Rolster (LCK), and Fnatic (LEC) are among the participants.",
    sourceUrl: 'https://lolesports.com/news',
    tags: [{ tag: 'Worlds 2026' }, { tag: 'Play-In' }, { tag: 'Cloud9' }, { tag: 'Fnatic' }],
    content: [
      { type: 'p', children: [{ text: "The Worlds 2026 Play-In field is complete. All twelve competing teams are confirmed following the conclusion of regional finals across LCK, LPL, LEC, and secondary leagues." }] },
      { type: 'h2', children: [{ text: 'The full Play-In roster' }] },
      { type: 'p', children: [{ text: "LCK (2): KT Rolster, DRX — LPL (2): Top Esports, Weibo Gaming — LEC (2): Fnatic, MAD Lions — LCS (1): Cloud9 — PCS (1): PSG Talon — VCS (1): Team Flash — CBLOL (1): LOUD — LLA (1): Isurus — LJL (1): DetonatioN FocusMe." }] },
      { type: 'h2', children: [{ text: 'Ones to watch' }] },
      { type: 'p', children: [{ text: "KT Rolster and DRX enter as the strongest Play-In seeds from LCK. Fnatic, in strong recent form, are also considered heavy favorites. PSG Talon, perennial Play-In performers, will be looking to finally break through to the group stage." }] },
    ],
  },
  {
    title: 'Worlds 2026 Play-In: Los 12 equipos confirmados, Cloud9 y PSG Talon entre los participantes',
    slug: 'worlds-2026-playin-teams-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "Los 12 equipos del Play-In de los Worlds 2026 ya están confirmados. Cloud9 (LCS), PSG Talon (PCS), KT Rolster (LCK) y Fnatic (LEC) entre los participantes.",
    sourceUrl: 'https://lolesports.com/news',
    tags: [{ tag: 'Worlds 2026' }, { tag: 'Play-In' }, { tag: 'Cloud9' }, { tag: 'Fnatic' }],
    content: [
      { type: 'p', children: [{ text: "El cuadro del Play-In de los Worlds 2026 está completo. Los doce equipos participantes ya están confirmados tras la conclusión de las finales regionales en LCK, LPL, LEC y las ligas secundarias." }] },
      { type: 'h2', children: [{ text: 'La lista completa de los 12 equipos' }] },
      { type: 'p', children: [{ text: "LCK (2): KT Rolster, DRX — LPL (2): Top Esports, Weibo Gaming — LEC (2): Fnatic, MAD Lions — LCS (1): Cloud9 — PCS (1): PSG Talon — VCS (1): Team Flash — CBLOL (1): LOUD — LLA (1): Isurus — LJL (1): DetonatioN FocusMe." }] },
      { type: 'h2', children: [{ text: 'Los favoritos del Play-In' }] },
      { type: 'p', children: [{ text: "KT Rolster y DRX entran como las semillas más fuertes desde la LCK. Fnatic, en gran forma reciente, también es uno de los favoritos. PSG Talon buscará esta vez romper la barrera y acceder a la fase de grupos." }] },
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
