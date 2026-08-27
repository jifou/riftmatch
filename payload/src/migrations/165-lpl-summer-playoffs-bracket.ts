import type { MigrationModule } from './runner'

export const id = '165-lpl-summer-playoffs-bracket'
export const description = 'LPL Summer 2026 — bracket des playoffs dévoilé, BLG tête de série 1'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-12T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/kaisa/skins/base/images/kaisa_splash_centered_0.jpg'

const articles = [
  {
    title: 'LPL Summer 2026 : le bracket des playoffs dévoilé, BLG et T1 favori absolu',
    slug: 'lpl-summer-2026-playoffs-bracket-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "Le bracket des playoffs LPL Summer 2026 est officiel. BiliBili Gaming prend la tête de série 1, suivis de JDG et EDG. Le double élimination commence vendredi.",
    sourceUrl: 'https://lolesports.com/leagues/lpl',
    tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'JDG' }, { tag: 'Playoffs' }],
    content: [
      { type: 'p', children: [{ text: "Les playoffs LPL Summer 2026 sont officiellement lancés avec la publication du bracket complet. BiliBili Gaming, auteurs de la meilleure saison régulière, débutent comme tête de série 1 et bénéficient d'un avantage en double élimination." }] },
      { type: 'h2', children: [{ text: 'Le bracket complet' }] },
      { type: 'p', children: [{ text: "1. BiliBili Gaming (14-4) — 2. JDG Gaming (11-7) — 3. EDward Gaming (11-7) — 4. Top Esports (10-8) — 5. Weibo Gaming (9-9) — 6. NIP (8-10). Les matchs de la Winners Bracket débutent vendredi avec JDG vs EDG et Top vs NIP, tandis que BLG attend en bye." }] },
      { type: 'h2', children: [{ text: 'BLG, ogre des playoffs' }] },
      { type: 'p', children: [{ text: "BiliBili Gaming arrive dans ce playoffs avec 7 victoires consécutives et la meilleure forme de la ligue. Leur jungler Xun et leur ADC Elk ont été les deux meilleurs joueurs de la LPL Summer, et l'équipe semble rodée pour un long run jusqu'en finale." }] },
    ],
  },
  {
    title: 'LPL Summer 2026 playoffs bracket revealed: BLG as top seed, double-elimination format',
    slug: 'lpl-summer-2026-playoffs-bracket-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "The LPL Summer 2026 playoff bracket is set with BiliBili Gaming as the top seed. JDG and EDG clash in the first Winners Bracket match on Friday.",
    sourceUrl: 'https://lolesports.com/leagues/lpl',
    tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'JDG' }, { tag: 'Playoffs' }],
    content: [
      { type: 'p', children: [{ text: "The LPL Summer 2026 playoffs are set. BiliBili Gaming, who posted the best regular-season record, enter as the top seed with a first-round bye in the double-elimination bracket." }] },
      { type: 'h2', children: [{ text: 'Full bracket seedings' }] },
      { type: 'p', children: [{ text: "1. BiliBili Gaming (14-4) — 2. JDG Gaming (11-7) — 3. EDward Gaming (11-7) — 4. Top Esports (10-8) — 5. Weibo Gaming (9-9) — 6. NIP (8-10). Winners Bracket opens Friday with JDG vs EDG and Top vs NIP, while BLG have a bye." }] },
      { type: 'h2', children: [{ text: 'BLG the team to beat' }] },
      { type: 'p', children: [{ text: "BLG enter on a seven-game winning streak with Xun and Elk performing at the highest level. They look built for a deep playoff run." }] },
    ],
  },
  {
    title: 'LPL Summer 2026: Se desvela el bracket de playoffs con BLG como primera cabeza de serie',
    slug: 'lpl-summer-2026-playoffs-bracket-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "El bracket de playoffs de la LPL Summer 2026 ya es oficial. BiliBili Gaming como primera cabeza de serie. JDG y EDG se enfrentan en el primer partido del viernes.",
    sourceUrl: 'https://lolesports.com/leagues/lpl',
    tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'JDG' }, { tag: 'Playoffs' }],
    content: [
      { type: 'p', children: [{ text: "Los playoffs de la LPL Summer 2026 ya tienen bracket completo. BiliBili Gaming, con el mejor récord de la fase regular, debutan como primera cabeza de serie con pase directo a la segunda ronda del formato de doble eliminación." }] },
      { type: 'h2', children: [{ text: 'El bracket completo' }] },
      { type: 'p', children: [{ text: "1. BiliBili Gaming (14-4) — 2. JDG Gaming (11-7) — 3. EDward Gaming (11-7) — 4. Top Esports (10-8) — 5. Weibo Gaming (9-9) — 6. NIP (8-10). La Winners Bracket abre el viernes con JDG vs EDG y Top vs NIP, mientras BLG espera con bye." }] },
      { type: 'h2', children: [{ text: 'BLG, el equipo a batir' }] },
      { type: 'p', children: [{ text: "BLG llega con siete victorias consecutivas y con Xun y Elk en el mejor nivel de la temporada. Parecen el favorito claro para llegar a la final." }] },
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
