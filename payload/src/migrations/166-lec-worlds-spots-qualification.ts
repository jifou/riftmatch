import type { MigrationModule } from './runner'

export const id = '166-lec-worlds-spots-qualification'
export const description = 'LEC Summer 2026 — qualification Worlds confirmée pour G2 et Vitality, LEC Play-In à venir'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-13T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/lucian/skins/base/images/lucian_splash_centered_0.jpg'

const articles = [
  {
    title: 'LEC Summer 2026 : G2 et Vitality qualifiés directement pour les Worlds, LEC Play-In ce week-end',
    slug: 'lec-summer-2026-worlds-spots-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "G2 Esports et Team Vitality sont officiellement qualifiés en phases de groupes des Worlds 2026. Fnatic et MAD Lions se disputeront la troisième place européenne en Play-In.",
    sourceUrl: 'https://lolesports.com/leagues/lec',
    tags: [{ tag: 'LEC' }, { tag: 'G2 Esports' }, { tag: 'Team Vitality' }, { tag: 'Worlds 2026' }],
    content: [
      { type: 'p', children: [{ text: "La qualification directe pour les Worlds 2026 est désormais actée pour deux équipes européennes. G2 Esports et Team Vitality ont respectivement terminé 1er et 2e de la saison régulière LEC Summer, leur assurant une place en phases de groupes du Championnat du Monde." }] },
      { type: 'h2', children: [{ text: 'Une course haletante jusqu\'au bout' }] },
      { type: 'p', children: [{ text: "Pendant plusieurs semaines, trois équipes se sont battues pour deux places. Fnatic, longtemps en position de force, a craqué lors des deux dernières journées en perdant face à MAD Lions et BDS, laissant Vitality s'imposer à la deuxième place. Une déception pour l'équipe au Phoenix, qui devra passer par le LEC Play-In." }] },
      { type: 'h2', children: [{ text: 'Le LEC Play-In ce week-end' }] },
      { type: 'p', children: [{ text: "Fnatic, MAD Lions, Team BDS et SK Gaming se disputeront la troisième place européenne lors du LEC Play-In ce week-end. Les deux premières équipes rejoindront G2 et Vitality en Play-In Worlds." }] },
    ],
  },
  {
    title: 'LEC Summer 2026: G2 and Vitality secure direct Worlds spots, Play-In this weekend',
    slug: 'lec-summer-2026-worlds-spots-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "G2 Esports and Team Vitality are confirmed for the Worlds 2026 group stage. Fnatic, MAD Lions, BDS, and SK Gaming will battle this weekend for the remaining LEC Worlds spots.",
    sourceUrl: 'https://lolesports.com/leagues/lec',
    tags: [{ tag: 'LEC' }, { tag: 'G2 Esports' }, { tag: 'Team Vitality' }, { tag: 'Worlds 2026' }],
    content: [
      { type: 'p', children: [{ text: "Two European teams have officially booked their Worlds 2026 group stage tickets. G2 Esports and Team Vitality, finishing 1st and 2nd in the LEC Summer regular season, are heading straight to the main event." }] },
      { type: 'h2', children: [{ text: 'A tight race to the finish' }] },
      { type: 'p', children: [{ text: "Fnatic looked set for second place heading into the final weekend but stumbled in back-to-back losses to MAD Lions and BDS, allowing Vitality to leapfrog them into the direct qualification spot. Fnatic now face the Play-In gauntlet." }] },
      { type: 'h2', children: [{ text: 'LEC Play-In this weekend' }] },
      { type: 'p', children: [{ text: "Fnatic, MAD Lions, Team BDS, and SK Gaming compete for the remaining Worlds berths this weekend. The top two teams will join G2 and Vitality at Worlds 2026." }] },
    ],
  },
  {
    title: 'LEC Summer 2026: G2 y Vitality clasificados directos a Worlds, Play-In este fin de semana',
    slug: 'lec-summer-2026-worlds-spots-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "G2 Esports y Team Vitality tienen asegurada la clasificación directa a los Worlds 2026. Fnatic y MAD Lions pelearán este fin de semana por la tercera plaza europea.",
    sourceUrl: 'https://lolesports.com/leagues/lec',
    tags: [{ tag: 'LEC' }, { tag: 'G2 Esports' }, { tag: 'Team Vitality' }, { tag: 'Worlds 2026' }],
    content: [
      { type: 'p', children: [{ text: "Dos equipos europeos tienen ya confirmada su clasificación directa a los Worlds 2026. G2 Esports y Team Vitality, primero y segundo en la fase regular de la LEC Summer, van directamente a la fase de grupos del Campeonato Mundial." }] },
      { type: 'h2', children: [{ text: 'Una carrera apretada hasta el final' }] },
      { type: 'p', children: [{ text: "Fnatic pareció asegurar la segunda plaza durante semanas, pero cayó en los dos últimos partidos frente a MAD Lions y BDS, permitiendo que Vitality les superara. El equipo del Fénix tendrá que pasar por el Play-In." }] },
      { type: 'h2', children: [{ text: 'Play-In de la LEC este fin de semana' }] },
      { type: 'p', children: [{ text: "Fnatic, MAD Lions, Team BDS y SK Gaming disputarán este fin de semana los puestos restantes para los Worlds. Los dos mejores equipos acompañarán a G2 y Vitality en el torneo mundial." }] },
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
