import type { MigrationModule } from './runner'

export const id = '189-cblol2026-split2-los-furia'
export const description = "CBLOL 2026 Split 2: LOS Grandes remporte le titre en battant FURIA 3-2 (10 octobre)"

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-10-10T23:00:00.000Z'

const articles = [
  {
    title: "CBLOL 2026 Split 2 : LOS Grandes remporte son premier titre en battant FURIA 3-2 en finale",
    slug: 'cblol2026-split2-los-furia-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "LOS Grandes a remporté le titre CBLOL 2026 Split 2 en battant FURIA Esports 3-2 en finale, le 10 octobre. La victoire envoie LOS en tant que première tête de série brésilienne pour le League of Legends World Championship 2026.",
    sourceUrl: 'https://www.strafe.com/news/read/los-wins-cblol-2026-split-2-and-secures-direct-spot-in-worlds-swiss-stage/',
    tags: [{ tag: 'CBLOL 2026' }, { tag: 'LOS Grandes' }, { tag: 'FURIA' }, { tag: 'Bresil' }],
    content: [
      { type: 'p', children: [{ text: "LOS Grandes a remporté le championnat CBLOL 2026 Split 2 en battant FURIA Esports en série serrée 3-2 lors de la finale disputée le 10 octobre. Cette victoire couronne une remarquable remontée pour LOS Grandes et les envoie directement au Worlds 2026 en tant que première tête de série brésilienne." }] },
      { type: 'h2', children: [{ text: "Une finale épique de cinq manches" }] },
      { type: 'p', children: [{ text: "Le match s'est déroulé sur cinq manches, reflétant l'intensité extrême de ces deux équipes brésiliennes de haut niveau. Bien que FURIA ait lancé fort et ait créé des occasions de remporter le titre, LOS Grandes a montré leur résilience en faisant basculer la série en leur faveur après un premier revers." }] },
      { type: 'h2', children: [{ text: "Curse brille en Finals MVP" }] },
      { type: 'p', children: [{ text: "Curse, l'ADC de LOS Grandes, a été nommé Finals MVP pour sa performance décisive tout au long de la série. Son jeu offensif et sa capacité à créer du pressure ont été des facteurs clés dans la conquête du titre." }] },
      { type: 'h2', children: [{ text: "Les trois piliers de LOS Grandes" }] },
      { type: 'p', children: [{ text: "LOS Grandes s'appuie sur une trio puissante associant Curse à l'ADC, Duduhh en support, et plusieurs autres joueurs clés qui ont démontré leur cohésion d'équipe tout au long de la saison. Curse, Duduhh et leurs coéquipiers ont collectivement remporté trois MVP individuels durant les playoffs." }] },
      { type: 'h2', children: [{ text: "Vers les Worlds 2026 en tant que 1er seed brésilien" }] },
      { type: 'p', children: [{ text: "La victoire confirme LOS Grandes comme les premiers seeds brésiliens pour le League of Legends World Championship 2026. L'équipe intègre directement la Swiss Stage en tant que seed Tier 2, aux côtés des autres représentants majeurs du circuit professionnel mondial." }] },
      { type: 'blockquote', children: [{ text: "LOS Grandes, vainqueurs du CBLOL 2026 Split 2, se préparent à affronter l'élite mondiale aux Worlds 2026." }] },
    ],
  },
  {
    title: "CBLOL 2026 Split 2: LOS Grandes Claim Championship Title with 3-2 Victory Over FURIA",
    slug: 'cblol2026-split2-los-furia-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "LOS Grandes won the CBLOL 2026 Split 2 championship by defeating FURIA Esports 3-2 in the finals on October 10. The victory secures Brazil's first seed at the League of Legends World Championship 2026.",
    sourceUrl: 'https://www.strafe.com/news/read/los-wins-cblol-2026-split-2-and-secures-direct-spot-in-worlds-swiss-stage/',
    tags: [{ tag: 'CBLOL 2026' }, { tag: 'LOS Grandes' }, { tag: 'FURIA' }, { tag: 'Brazil' }],
    content: [
      { type: 'p', children: [{ text: "LOS Grandes captured the CBLOL 2026 Split 2 championship by defeating FURIA Esports in a thrilling 3-2 series in the finals on October 10. The victory marks a remarkable triumph for LOS Grandes and sends them directly to Worlds 2026 as Brazil's first seed." }] },
      { type: 'h2', children: [{ text: "An epic five-game finals" }] },
      { type: 'p', children: [{ text: "The championship series went the full distance across five games, showcasing the intense competition between these two top Brazilian squads. Although FURIA started strong and had opportunities to claim the title, LOS Grandes demonstrated resilience and tactical adaptability to turn the series in their favor." }] },
      { type: 'h2', children: [{ text: "Curse earns Finals MVP" }] },
      { type: 'p', children: [{ text: "Curse, LOS Grandes' AD carry, was named Finals MVP for his decisive performances throughout the series. His aggressive play and ability to create pressure were instrumental in securing the championship." }] },
      { type: 'h2', children: [{ text: "The pillars of LOS Grandes" }] },
      { type: 'p', children: [{ text: "LOS Grandes' strength lies in a powerful core featuring Curse at AD carry, Duduhh on support, and several other key players who have demonstrated exceptional team cohesion throughout the season. Collectively, they earned multiple MVP awards during the playoffs." }] },
      { type: 'h2', children: [{ text: "Heading to Worlds 2026 as Brazil's first seed" }] },
      { type: 'p', children: [{ text: "The championship victory confirms LOS Grandes as Brazil's first seed for the League of Legends World Championship 2026. The team directly enters the Swiss Stage as a Tier 2 seed, alongside other major representatives from the global competitive circuit." }] },
      { type: 'blockquote', children: [{ text: "LOS Grandes, champions of CBLOL 2026 Split 2, prepare to face the world's elite at Worlds 2026." }] },
    ],
  },
  {
    title: "CBLOL 2026 Split 2: LOS Grandes Conquista el Título al Derrotar a FURIA 3-2",
    slug: 'cblol2026-split2-los-furia-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "LOS Grandes conquistó el campeonato CBLOL 2026 Split 2 al derrotar a FURIA Esports 3-2 en la final el 10 de octubre. La victoria asegura la primera semilla de Brasil en el League of Legends World Championship 2026.",
    sourceUrl: 'https://www.strafe.com/news/read/los-wins-cblol-2026-split-2-and-secures-direct-spot-in-worlds-swiss-stage/',
    tags: [{ tag: 'CBLOL 2026' }, { tag: 'LOS Grandes' }, { tag: 'FURIA' }, { tag: 'Brasil' }],
    content: [
      { type: 'p', children: [{ text: "LOS Grandes capturó el campeonato CBLOL 2026 Split 2 al derrotar a FURIA Esports en una emocionante serie 3-2 en la final el 10 de octubre. La victoria marca un triunfo notable para LOS Grandes y los envía directamente a Worlds 2026 como la primera semilla de Brasil." }] },
      { type: 'h2', children: [{ text: "Una épica final de cinco juegos" }] },
      { type: 'p', children: [{ text: "La serie de campeonato se extendió hasta el máximo de cinco juegos, mostrando la competencia intensa entre estos dos mejores equipos brasileños. Aunque FURIA comenzó fuerte y tuvo oportunidades de reclamar el título, LOS Grandes demostró resiliencia y adaptabilidad táctica para girar la serie a su favor." }] },
      { type: 'h2', children: [{ text: "Curse gana MVP de la Final" }] },
      { type: 'p', children: [{ text: "Curse, el ADC de LOS Grandes, fue nombrado MVP de la Final por sus actuaciones decisivas en toda la serie. Su juego agresivo y su capacidad para generar presión fueron fundamentales para asegurar el campeonato." }] },
      { type: 'h2', children: [{ text: "Los pilares de LOS Grandes" }] },
      { type: 'p', children: [{ text: "La fortaleza de LOS Grandes reside en un núcleo poderoso que presenta a Curse en ADC, Duduhh en soporte, y varios otros jugadores clave que han demostrado una cohesión de equipo excepcional durante toda la temporada. Colectivamente, ganaron varios premios MVP durante los playoffs." }] },
      { type: 'h2', children: [{ text: "Rumbo a Worlds 2026 como primera semilla de Brasil" }] },
      { type: 'p', children: [{ text: "La victoria en el campeonato confirma a LOS Grandes como la primera semilla de Brasil para el League of Legends World Championship 2026. El equipo entra directamente en la Swiss Stage como una semilla Tier 2, junto con otros representantes importantes del circuito competitivo mundial." }] },
      { type: 'blockquote', children: [{ text: "LOS Grandes, campeones del CBLOL 2026 Split 2, se preparan para enfrentarse a la élite mundial en Worlds 2026." }] },
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
