import type { MigrationModule } from './runner'

export const id = '177-autres-regions-cblol-semifinals'
export const description = 'Autres régions — CBLOL Split 2 2026 demi-finales : LOUD et FURIA au rendez-vous de la finale'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-24T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/vi/skins/base/images/vi_splash_centered_0.jpg'

const articles = [
  {
    title: 'CBLOL Split 2 2026 : LOUD et FURIA en finale, un classique brésilien en vue',
    slug: 'cblol-split2-2026-semifinals-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "LOUD et FURIA ont tous deux remporté leurs demi-finales du CBLOL Split 2 2026 ce week-end. La finale opposera les deux meilleures équipes du Brésil la semaine prochaine.",
    sourceUrl: 'https://lolesports.com/leagues/cblol',
    tags: [{ tag: 'CBLOL' }, { tag: 'LOUD' }, { tag: 'FURIA' }, { tag: 'Brésil' }],
    content: [
      { type: 'p', children: [{ text: "La grande finale du CBLOL Split 2 2026 est connue : LOUD et FURIA se retrouveront la semaine prochaine pour le titre brésilien, et avec lui la qualification pour les Worlds 2026 en tant que représentant du CBLOL." }] },
      { type: 'h2', children: [{ text: 'LOUD domine paiN Gaming 3-0' }] },
      { type: 'p', children: [{ text: "LOUD n'a laissé aucune chance à paiN Gaming en demi-finale, dominant les trois games avec une composition d'engage-disengage parfaitement exécutée. Le mid de LOUD a été au-dessus tout au long de la série, ne laissant aucune liberté à son vis-à-vis. Le 3-0 est sans appel et envoie LOUD en finale avec confiance." }] },
      { type: 'h2', children: [{ text: "FURIA passe l\'épreuve R7 2-1" }] },
      { type: 'p', children: [{ text: "La demi-finale entre FURIA et R7 a été plus disputée. R7 a remporté le game 1 en exploitant des erreurs de split-push de FURIA, mais la formation a rectifié le tir en games 2 et 3, s'appuyant sur son jungler Tatu (revenu de suspension) qui a montré un niveau impressionnant. FURIA file en finale avec la dynamique d'une équipe qui monte en puissance." }] },
      { type: 'h2', children: [{ text: 'Une finale très attendue' }] },
      { type: 'p', children: [{ text: "LOUD vs FURIA est le Classique brésilien par excellence. Ces deux équipes ont une rivalité de longue date, et leur affrontement en finale pour une place aux Worlds 2026 promet d'être l'un des événements esportifs les plus suivis au Brésil de l'année." }] },
    ],
  },
  {
    title: 'CBLOL Split 2 2026: LOUD and FURIA reach the final, Brazil\'s premier rivalry set for the title',
    slug: 'cblol-split2-2026-semifinals-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "LOUD and FURIA both won their CBLOL Split 2 2026 semifinals this weekend. The Grand Final between Brazil's top two teams takes place next week.",
    sourceUrl: 'https://lolesports.com/leagues/cblol',
    tags: [{ tag: 'CBLOL' }, { tag: 'LOUD' }, { tag: 'FURIA' }, { tag: 'Brazil' }],
    content: [
      { type: 'p', children: [{ text: "CBLOL Split 2 2026 has its finalists: LOUD and FURIA will meet next week for the Brazilian title and a Worlds 2026 berth as the CBLOL representative." }] },
      { type: 'h2', children: [{ text: 'LOUD sweep paiN Gaming 3-0' }] },
      { type: 'p', children: [{ text: "LOUD left paiN Gaming no room to breathe across all three games, running a perfectly executed engage-disengage composition. The LOUD mid laner was a level above throughout the series, and the 3-0 sends LOUD to the final full of confidence." }] },
      { type: 'h2', children: [{ text: 'FURIA survive R7 2-1' }] },
      { type: 'p', children: [{ text: "The FURIA vs R7 semifinal was closer. R7 took Game 1 off FURIA split-push errors, but FURIA adjusted in Games 2 and 3, with returning jungler Tatu (back from suspension) putting on an impressive show. FURIA head to the final on the rise." }] },
      { type: 'h2', children: [{ text: 'A final the whole of Brazil is waiting for' }] },
      { type: 'p', children: [{ text: "LOUD vs FURIA is the Brazilian Classic. With a Worlds 2026 spot on the line, this Grand Final promises to be one of the most-watched esports events in Brazil this year." }] },
    ],
  },
  {
    title: 'CBLOL Split 2 2026: LOUD y FURIA llegan a la final, el clásico brasileño por un cupo en Worlds',
    slug: 'cblol-split2-2026-semifinals-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "LOUD y FURIA ganan sus respectivas semifinales del CBLOL Split 2 2026 este fin de semana. La gran final entre los dos mejores equipos de Brasil se disputará la semana que viene.",
    sourceUrl: 'https://lolesports.com/leagues/cblol',
    tags: [{ tag: 'CBLOL' }, { tag: 'LOUD' }, { tag: 'FURIA' }, { tag: 'Brasil' }],
    content: [
      { type: 'p', children: [{ text: "El CBLOL Split 2 2026 ya tiene finalistas: LOUD y FURIA se verán las caras la próxima semana por el título brasileño y una plaza en los Worlds 2026 como representante del CBLOL." }] },
      { type: 'h2', children: [{ text: 'LOUD arrasa a paiN Gaming 3-0' }] },
      { type: 'p', children: [{ text: "LOUD no dejó ninguna opción a paiN Gaming, dominando los tres juegos con una composición de engage-disengage ejecutada a la perfección. El midlaner de LOUD fue superior en toda la serie y el 3-0 les envía a la final con plena confianza." }] },
      { type: 'h2', children: [{ text: 'FURIA supera a R7 2-1' }] },
      { type: 'p', children: [{ text: "La semifinal entre FURIA y R7 fue más disputada. R7 ganó el primer juego aprovechando errores de split-push de FURIA, pero el equipo corrigió en los juegos 2 y 3, con el regreso del jungler Tatu (después de su suspensión) en gran forma. FURIA llega a la final en ascenso." }] },
      { type: 'h2', children: [{ text: 'Una final que todo Brasil espera' }] },
      { type: 'p', children: [{ text: "LOUD vs FURIA es el clásico brasileño por excelencia. Con una plaza en los Worlds 2026 en juego, esta gran final promete ser uno de los eventos esportivos más seguidos en Brasil en todo el año." }] },
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
