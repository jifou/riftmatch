import type { MigrationModule } from './runner'

export const id = '175-lpl-final-blg-champion'
export const description = 'LPL Summer 2026 — BiliBili Gaming champion de Chine, Elk MVP de la finale'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-22T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/kaisa/skins/base/images/kaisa_splash_centered_0.jpg'

const articles = [
  {
    title: 'LPL Summer 2026 : BiliBili Gaming sacré champion de Chine, Elk MVP de la finale',
    slug: 'lpl-summer-2026-final-blg-champion-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "BiliBili Gaming remporte la LPL Summer 2026 en dominant JDG Gaming 3-1 en finale. Elk signe une performance de career-high en game 4 pour offrir le titre à son équipe.",
    sourceUrl: 'https://lolesports.com/leagues/lpl',
    tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'JDG' }, { tag: 'Elk' }, { tag: 'Finale' }],
    content: [
      { type: 'p', children: [{ text: "BiliBili Gaming est le champion de la LPL Summer 2026. La formation a conclu sa saison parfaite en disposant de JDG Gaming 3-1 en grande finale et s'affirme comme le grand favori des Worlds 2026 du côté chinois." }] },
      { type: 'h2', children: [{ text: 'Elk, une performance pour les livres d\'histoire' }] },
      { type: 'p', children: [{ text: "L'ADC de BLG a signé l'une des meilleures performances de l'année en LPL lors du game 4. Sur Kai'Sa, Elk a terminé avec un score de 12/0/8 et 28 kills en seulement 30 minutes. Sa capacité à trouver des positionnements parfaits dans des teamfights ultra-serrés l'a placé dans une autre dimension que son adversaire ce soir-là." }] },
      { type: 'h2', children: [{ text: 'BLG, armée pour les Worlds' }] },
      { type: 'p', children: [{ text: "Avec 14 victoires en saison régulière, un run de playoffs sans défaite, et une cohésion collective rarement vue en Chine depuis les grandes années de RNG, BiliBili Gaming arrive aux Worlds 2026 comme le concurrent numéro 1 de T1 pour le titre mondial." }] },
    ],
  },
  {
    title: 'LPL Summer 2026 Final: BiliBili Gaming are China\'s champions, Elk delivers career-high performance',
    slug: 'lpl-summer-2026-final-blg-champion-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "BiliBili Gaming claim the LPL Summer 2026 title with a dominant 3-1 win over JDG. Elk posts a career-high performance on Kai'Sa in the decisive Game 4.",
    sourceUrl: 'https://lolesports.com/leagues/lpl',
    tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'JDG' }, { tag: 'Elk' }, { tag: 'Finals' }],
    content: [
      { type: 'p', children: [{ text: "BiliBili Gaming are LPL Summer 2026 champions. The squad wrapped up their near-perfect season by defeating JDG Gaming 3-1 in the Grand Final, establishing themselves as the clear LPL representative to fear at Worlds 2026." }] },
      { type: 'h2', children: [{ text: "Elk's all-time performance" }] },
      { type: 'p', children: [{ text: "Game 4 was Elk's show. On Kai'Sa, the BLG ADC finished 12/0/8 with 28 solo kills and 30 minutes of perfection. His positioning in contested teamfights was on a completely different plane from his opponent, and his performance will be talked about for years." }] },
      { type: 'h2', children: [{ text: 'BLG built for Worlds' }] },
      { type: 'p', children: [{ text: "With a 14-win regular season, an undefeated playoff run, and team cohesion not seen in China since RNG's golden era, BiliBili Gaming enter Worlds 2026 as T1's most dangerous challenger for the world title." }] },
    ],
  },
  {
    title: 'Final LPL Summer 2026: BiliBili Gaming, campeones de China; Elk logra su mejor actuación',
    slug: 'lpl-summer-2026-final-blg-champion-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "BiliBili Gaming se proclama campeón de la LPL Summer 2026 al superar a JDG 3-1 en la final. Elk firma su mejor actuación en la carrera en el juego decisivo.",
    sourceUrl: 'https://lolesports.com/leagues/lpl',
    tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'JDG' }, { tag: 'Elk' }, { tag: 'Final' }],
    content: [
      { type: 'p', children: [{ text: "BiliBili Gaming es el campeón de la LPL Summer 2026. La escuadra cerró su temporada casi perfecta derrotando a JDG Gaming 3-1 en la gran final, consolidándose como el principal representante chino a tener en cuenta en los Worlds 2026." }] },
      { type: 'h2', children: [{ text: 'La actuación de Elk para los libros de historia' }] },
      { type: 'p', children: [{ text: "El juego 4 fue el show de Elk. En Kai'Sa, el ADC de BLG terminó 12/0/8 con 28 kills en apenas 30 minutos. Su posicionamiento en las peleas de equipo fue incomparable, y su actuación se recordará durante años." }] },
      { type: 'h2', children: [{ text: 'BLG llega preparado a los Worlds' }] },
      { type: 'p', children: [{ text: "Con 14 victorias en la fase regular, un recorrido de playoffs sin derrota y una cohesión de equipo inédita en China desde los mejores años de RNG, BiliBili Gaming llega a los Worlds 2026 como el principal rival de T1 para el título mundial." }] },
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
