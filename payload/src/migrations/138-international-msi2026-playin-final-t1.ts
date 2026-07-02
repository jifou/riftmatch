import type { MigrationModule } from './runner'

export const id = '138-international-msi2026-playin-final-t1'
export const description = "MSI 2026 — Play-In Final : T1 termine invaincu (3-0 vs Team Liquid) et rejoint le Bracket Stage (1er juillet)"

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-07-02T08:00:00.000Z'

const articles = [
  {
    title: "MSI 2026 : T1 termine le Play-In invaincu et file au Bracket Stage après un 3-0 sur Team Liquid",
    slug: 'msi2026-playin-final-t1-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "T1 a bouclé le Play-In du MSI 2026 sans perdre la moindre partie, en balayant Team Liquid 3-0 lors de la manche décisive du 1er juillet. Une penta kill de Peyz a marqué la rencontre avant le choc à venir contre Bilibili Gaming.",
    sourceUrl: 'https://lolesports.com/en-US/tournament/115570934354631452/stage/115570934355090205',
    tags: [{ tag: 'MSI 2026' }, { tag: 'T1' }, { tag: 'Team Liquid' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "T1 a conclu son parcours au Play-In du MSI 2026 de la meilleure des manières en balayant Team Liquid 3-0 lors de la manche décisive du 1er juillet, disputée au Daejeon Convention Center en Corée du Sud. Cette victoire offre aux Coréens la dernière place qualificative pour le Bracket Stage du tournoi." }] },
      { type: 'h2', children: [{ text: "Un parcours parfait, sans la moindre partie perdue" }] },
      { type: 'p', children: [{ text: "En s'imposant 3-0 face à Team Liquid pour la seconde fois du tournoi, T1 achève le Play-In avec un bilan immaculé : trois séries remportées 3-0, soit neuf victoires en neuf parties, sans jamais céder une seule carte. Une démonstration de force qui confirme le statut de favori des Coréens avant d'entamer la phase à élimination directe du MSI 2026." }] },
      { type: 'h2', children: [{ text: "Le moment fort : la penta kill de Peyz" }] },
      { type: 'p', children: [{ text: "La rencontre a été marquée par une penta kill signée Peyz, qui a scellé le sort de Team Liquid sous les acclamations du public de Daejeon. L'ADC de T1 continue d'alimenter son propre record de penta kills en carrière professionnelle, désormais le plus élevé de l'histoire compétitive de League of Legends." }] },
      { type: 'h2', children: [{ text: "Cap sur Bilibili Gaming au Bracket Stage" }] },
      { type: 'p', children: [{ text: "T1 affrontera Bilibili Gaming (BLG) dès l'ouverture du Bracket Stage, le 3 juillet, en bracket supérieur. Un remake de la finale du MSI 2025, que les Coréens avaient alors remportée 3-0. Le Bracket Stage se disputera jusqu'à la grande finale, prévue le 12 juillet au Daejeon Convention Center." }] },
      { type: 'blockquote', children: [{ text: "Invaincu depuis le début du tournoi, T1 aborde le Bracket Stage du MSI 2026 avec le statut de favori incontesté." }] },
    ],
  },
  {
    title: "MSI 2026: T1 Finishes Play-In Undefeated, Advances to Bracket Stage After 3-0 Sweep of Team Liquid",
    slug: 'msi2026-playin-final-t1-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "T1 closed out the MSI 2026 Play-In stage without dropping a single game, sweeping Team Liquid 3-0 in the July 1 decider. A Peyz penta kill capped the win ahead of the upcoming clash with Bilibili Gaming.",
    sourceUrl: 'https://lolesports.com/en-US/tournament/115570934354631452/stage/115570934355090205',
    tags: [{ tag: 'MSI 2026' }, { tag: 'T1' }, { tag: 'Team Liquid' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "T1 closed out the MSI 2026 Play-In stage in style, sweeping Team Liquid 3-0 in the July 1 decider at the Daejeon Convention Center in South Korea. The win secures the Korean side the final qualifying spot for the tournament's Bracket Stage." }] },
      { type: 'h2', children: [{ text: "A perfect run, without dropping a single game" }] },
      { type: 'p', children: [{ text: "By beating Team Liquid 3-0 for the second time in the tournament, T1 finished Play-In with an immaculate record: three series won 3-0, nine wins in nine games, without ever dropping a single map. A dominant showing that confirms T1 as the favorite heading into the knockout stage of MSI 2026." }] },
      { type: 'h2', children: [{ text: "The highlight: Peyz's penta kill" }] },
      { type: 'p', children: [{ text: "The match was capped by a penta kill from Peyz, sealing Team Liquid's fate in front of the Daejeon crowd. T1's AD carry keeps extending his own career penta kill record, now the highest in competitive League of Legends history." }] },
      { type: 'h2', children: [{ text: "Next up: Bilibili Gaming in the Bracket Stage" }] },
      { type: 'p', children: [{ text: "T1 will open the Bracket Stage against Bilibili Gaming (BLG) on July 3 in the upper bracket, a rematch of the MSI 2025 final, which T1 won 3-0. The Bracket Stage runs through the Grand Final on July 12, also at the Daejeon Convention Center." }] },
      { type: 'blockquote', children: [{ text: "Unbeaten since the start of the tournament, T1 enters the MSI 2026 Bracket Stage as the undisputed favorite." }] },
    ],
  },
  {
    title: "MSI 2026: T1 termina el Play-In invicto y avanza al Bracket Stage tras barrer 3-0 a Team Liquid",
    slug: 'msi2026-playin-final-t1-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "T1 cerró la etapa de Play-In del MSI 2026 sin perder una sola partida, barriendo a Team Liquid 3-0 en el desempate del 1 de julio. Una penta kill de Peyz coronó el triunfo antes del próximo choque contra Bilibili Gaming.",
    sourceUrl: 'https://lolesports.com/en-US/tournament/115570934354631452/stage/115570934355090205',
    tags: [{ tag: 'MSI 2026' }, { tag: 'T1' }, { tag: 'Team Liquid' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "T1 cerró su participación en el Play-In del MSI 2026 de la mejor manera posible, barriendo 3-0 a Team Liquid en el desempate disputado el 1 de julio en el Daejeon Convention Center de Corea del Sur. La victoria le otorga a los coreanos la última plaza clasificatoria para el Bracket Stage del torneo." }] },
      { type: 'h2', children: [{ text: "Un recorrido perfecto, sin perder una sola partida" }] },
      { type: 'p', children: [{ text: "Al imponerse 3-0 ante Team Liquid por segunda vez en el torneo, T1 terminó el Play-In con un registro inmaculado: tres series ganadas 3-0, es decir, nueve victorias en nueve partidas, sin ceder ni un solo mapa. Una demostración de fuerza que confirma a los coreanos como favoritos de cara a la fase eliminatoria del MSI 2026." }] },
      { type: 'h2', children: [{ text: "El momento destacado: la penta kill de Peyz" }] },
      { type: 'p', children: [{ text: "El encuentro estuvo marcado por una penta kill de Peyz, que selló la suerte de Team Liquid ante el público de Daejeon. El ADC de T1 sigue ampliando su propio récord de penta kills en la carrera profesional, ahora el más alto en la historia competitiva de League of Legends." }] },
      { type: 'h2', children: [{ text: "Próxima parada: Bilibili Gaming en el Bracket Stage" }] },
      { type: 'p', children: [{ text: "T1 abrirá el Bracket Stage ante Bilibili Gaming (BLG) el 3 de julio en el bracket superior, una revancha de la final del MSI 2025, que T1 ganó 3-0. El Bracket Stage se disputará hasta la gran final, prevista para el 12 de julio en el Daejeon Convention Center." }] },
      { type: 'blockquote', children: [{ text: "Invicto desde el inicio del torneo, T1 llega al Bracket Stage del MSI 2026 como el favorito indiscutido." }] },
    ],
  },
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const a of articles) {
    const ex = await payload.find({ collection: 'news', where: { slug: { equals: a.slug } } })
    if (ex.docs.length > 0) {
      console.log(`→ skip ${a.slug}`)
      continue
    }
    await payload.create({ collection: 'news', data: a as any })
    console.log(`✅ ${a.locale.toUpperCase()} — ${a.title}`)
  }
}
