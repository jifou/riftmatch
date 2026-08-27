import type { MigrationModule } from './runner'

export const id = '159-lec-g2-fnc-summer-2026-week'
export const description = 'LEC Summer 2026 — G2 domine Fnatic 2-0 et prend la tête à une semaine du terme de la phase régulière'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-06T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/jinx/skins/base/images/jinx_splash_centered_0.jpg'

const articles = [
  {
    title: 'LEC Summer 2026 : G2 Esports prend le dessus sur Fnatic 2-0 et vise la première place en playoffs',
    slug: 'lec-summer-2026-g2-fnatic-week-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: 'Le Classique Européen a tourné en faveur de G2 ce mercredi. Caps a brillé sur Corki en game 2 pour offrir à G2 deux points précieux dans la course à la première place du LEC.',
    sourceUrl: 'https://lolesports.com/leagues/lec',
    tags: [{ tag: 'LEC' }, { tag: 'G2 Esports' }, { tag: 'Fnatic' }, { tag: 'Caps' }],
    content: [
      { type: 'p', children: [{ text: "Le classique G2 vs Fnatic a tenu toutes ses promesses ce mercredi dans le LEC Summer 2026. Dans une série à l'enjeu important pour les deux équipes, G2 Esports a su faire la différence au moment critique pour s'imposer 2-0 et confirmer son statut de co-leader." }] },
      { type: 'h2', children: [{ text: 'Caps, pivot du succès de G2' }] },
      { type: 'p', children: [{ text: "Caps a été le facteur X de cette série, notamment en game 2 sur Corki. Après un game 1 disputé, remporté par G2 grâce à un Baron steal de Hans sama à la 32e minute, le milieu de jeu de G2 a écrasé son vis-à-vis en game 2. Il a terminé la partie avec un score de 7/0/5 et un ratio de dégâts dominant, ne laissant aucune chance à Fnatic de revenir dans le game." }] },
      { type: 'h2', children: [{ text: 'Classement LEC et course aux playoffs' }] },
      { type: 'p', children: [{ text: "Avec cette victoire, G2 et Team Vitality se retrouvent à égalité en tête du LEC Summer avec 9 victoires chacun. La lutte pour les places directement qualificatives en Worlds va s'intensifier lors des deux dernières semaines de la saison régulière. Fnatic, de son côté, reste en milieu de tableau avec 6 victoires et doit impérativement finir fort pour espérer une qualification directe." }] },
    ],
  },
  {
    title: 'LEC Summer 2026: G2 Esports defeats Fnatic 2-0, ties for first place heading into final weeks',
    slug: 'lec-summer-2026-g2-fnatic-week-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: 'G2 claimed the European Classic 2-0 on Wednesday, with Caps delivering a standout Corki performance in Game 2 to put G2 level at the top of the LEC standings.',
    sourceUrl: 'https://lolesports.com/leagues/lec',
    tags: [{ tag: 'LEC' }, { tag: 'G2 Esports' }, { tag: 'Fnatic' }, { tag: 'Caps' }],
    content: [
      { type: 'p', children: [{ text: "Wednesday's G2 vs Fnatic clash delivered what European fans expected: a tightly contested series that came down to individual brilliance. G2 prevailed 2-0, with Caps and Hans sama combining for the decisive plays in both games." }] },
      { type: 'h2', children: [{ text: 'Caps outclasses the competition' }] },
      { type: 'p', children: [{ text: "Game 1 was hard-fought until Hans sama stole the Baron at the 32-minute mark, opening a window for G2 to close out. Game 2 was a different story: Caps on Corki smothered Fnatic's midlane from minute one and finished 7/0/5, giving Fnatic no route back. The series showcased why G2 are considered Europe's strongest Worlds contender." }] },
      { type: 'h2', children: [{ text: 'LEC standings and playoff picture' }] },
      { type: 'p', children: [{ text: "G2 and Team Vitality are now tied at 9-3 atop the LEC standings, while Fnatic sits at 6-6 in mid-table. The final two weeks of the regular season will determine seeding for the LEC playoffs and Europe's direct Worlds qualification spots." }] },
    ],
  },
  {
    title: 'LEC Summer 2026: G2 Esports supera a Fnatic 2-0 y empata en la cima de la clasificación',
    slug: 'lec-summer-2026-g2-fnatic-week-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: 'El Clásico Europeo fue para G2 este miércoles. Caps brilló en Corki en la partida 2 y G2 se coloca empatado en lo alto del LEC con dos semanas por delante.',
    sourceUrl: 'https://lolesports.com/leagues/lec',
    tags: [{ tag: 'LEC' }, { tag: 'G2 Esports' }, { tag: 'Fnatic' }, { tag: 'Caps' }],
    content: [
      { type: 'p', children: [{ text: "El clásico G2 vs Fnatic no decepcionó este miércoles en la LEC Summer 2026. En una serie con mucho en juego para ambos equipos, G2 Esports supo marcar la diferencia en los momentos clave para imponerse 2-0 y confirmar su condición de colíder." }] },
      { type: 'h2', children: [{ text: 'Caps, el factor diferencial' }] },
      { type: 'p', children: [{ text: "Caps fue clave en esta serie, especialmente en la partida 2 con Corki. Tras un primer juego igualado que se resolvió con un robo de Barón de Hans sama al minuto 32, el midlaner de G2 aplastó a su rival en la partida 2 con un marcador de 7/0/5, sin darle opciones a Fnatic de reaccionar." }] },
      { type: 'h2', children: [{ text: 'Clasificación y carrera por los Worlds' }] },
      { type: 'p', children: [{ text: "Con esta victoria, G2 y Team Vitality quedan empatados en la cima de la LEC con 9 victorias cada uno. Fnatic se mantiene en mitad de tabla con 6 triunfos. Las dos últimas semanas de temporada regular definirán los clasificados directos para los Worlds 2026." }] },
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
