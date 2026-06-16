import type { MigrationModule } from './runner'

export const id = '116-lcp-split2-2026-secret-whales'
export const description = 'LCP Split 2 2026 — Secret Whales remporte le titre 3-1 face à Deep Cross Gaming, double champion de la saison'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-16T08:00:00.000Z'

const articles = [
  {
    title: "Secret Whales s'impose 3-1 face à Deep Cross Gaming et remporte le LCP 2026 Split 2",
    slug: 'lcp-split2-2026-secret-whales-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "L'équipe vietnamienne Team Secret Whales a décroché son deuxième titre consécutif en remportant le LCP 2026 Split 2 face à Deep Cross Gaming (3-1), le 7 juin à Taipei. Hizto sacré MVP de la compétition.",
    sourceUrl: 'https://lolesports.com/en-PH/news/lcp-2026-split-2-etynk',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'LCP' }, { tag: 'Secret Whales' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Team Secret Whales a confirmé sa domination sur la scène pacifique en remportant le LCP 2026 Split 2 le 7 juin à Taipei. Face à leurs rivaux de toujours Deep Cross Gaming, les Vietnamiens se sont imposés 3-1 dans une grande finale à suspense, s'octroyant ainsi leur deuxième titre de la saison après leur victoire en Split 1. Un doublé historique qui place l'équipe parmi les plus grandes formations de l'histoire de la ligue."
          }
        ]
      },
      {
        type: 'h2',
        children: [{ text: "Une finale disputée mais sans appel" }]
      },
      {
        type: 'p',
        children: [
          {
            text: "La rencontre au sommet entre Secret Whales et Deep Cross Gaming promettait un duel électrique, et les deux formations ont tenu leur promesse. Deep Cross Gaming a décroché le premier acte pour maintenir le suspense, avant que Secret Whales ne prenne le contrôle total de la série en remportant trois maps consécutives. La solidité collective de l'équipe et son sens du rythme dans les phases de mid-game ont fait la différence face à une formation coréenne pourtant redoutable. La victoire illustre la maturité tactique d'un roster qui a dominé le LCP de bout en bout."
          }
        ]
      },
      {
        type: 'h2',
        children: [{ text: "Hizto, MVP incontestable de la compétition" }]
      },
      {
        type: 'p',
        children: [
          {
            text: "Le mid-laner Lê Văn \"Hizto\" Hoàng Hải a été sacré MVP du LCP 2026 Split 2 après des playoffs remarquables. Pièce maîtresse du dispositif de Secret Whales, il a enchaîné les performances de haute voltige sur une grande variété de champions, incarnant à lui seul la supériorité technique de son équipe tout au long de la compétition. Sa régularité et sa capacité à peser sur chaque partie ont été déterminantes dans la quête du titre, faisant de lui l'un des meilleurs joueurs de la région cette saison."
          }
        ]
      },
      {
        type: 'h2',
        children: [{ text: "Cap sur le MSI 2026 à Daejeon" }]
      },
      {
        type: 'p',
        children: [
          {
            text: "Avec ce doublé historique, Secret Whales s'affirment comme les représentants incontestables de la région LCP. Aux côtés de Deep Cross Gaming — qui disputera également le MSI 2026 — ils porteront les couleurs de la zone pacifique à Daejeon, Corée du Sud, du 28 juin au 12 juillet. Pour une équipe composée de joueurs vietnamiens évoluant dans une ligue fusionnée regroupant le PCS, le VCS, la LJL et la LCO, ce sacre représente une reconnaissance internationale majeure."
          }
        ]
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Deux splits, deux titres, un MVP : Secret Whales réalisent l'une des saisons les plus abouties de l'histoire du LCP. La scène pacifique envoie au MSI 2026 deux équipes capables de rivaliser avec les meilleures nations mondiales."
          }
        ]
      }
    ]
  },
  {
    title: "Secret Whales claim LCP 2026 Split 2 title with dominant 3-1 win over Deep Cross Gaming",
    slug: 'lcp-split2-2026-secret-whales-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Vietnamese roster Team Secret Whales secured the LCP 2026 Split 2 championship on June 7 in Taipei, defeating Deep Cross Gaming 3-1 in the Grand Final to complete a historic back-to-back title run. Hizto named Split 2 MVP.",
    sourceUrl: 'https://lolesports.com/en-PH/news/lcp-2026-split-2-etynk',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'LCP' }, { tag: 'Secret Whales' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Team Secret Whales have made history in the League of Legends Championship Pacific by winning LCP 2026 Split 2, defeating Deep Cross Gaming 3-1 in the Grand Final on June 7 in Taipei. The victory marks their second straight title of the 2026 season, following their Split 1 championship, cementing their status as the undisputed best team in the Pacific region and one of the most dominant rosters in LCP history."
          }
        ]
      },
      {
        type: 'h2',
        children: [{ text: "Grand Final Recap" }]
      },
      {
        type: 'p',
        children: [
          {
            text: "The series opened with Deep Cross Gaming taking Game 1, briefly threatening an upset against the reigning champions. However, Secret Whales quickly reasserted their dominance, winning the next three games in commanding fashion. The Vietnamese squad showcased superior macro play and mid-game decision-making throughout the series, with their ability to close out games efficiently proving too much for Deep Cross Gaming to handle. The final match was a masterclass in objective control and team fighting, sealing yet another trophy for Secret Whales."
          }
        ]
      },
      {
        type: 'h2',
        children: [{ text: "Hizto Named Split 2 MVP" }]
      },
      {
        type: 'p',
        children: [
          {
            text: "Mid-laner Lê Văn \"Hizto\" Hoàng Hải was awarded the LCP 2026 Split 2 Season MVP after an incredible performance throughout the playoffs. Playing with creativity and consistency across multiple champion pools, Hizto was the linchpin of Secret Whales' offense and a constant threat that opposing teams struggled to contain. His ability to carry from the mid lane while enabling his teammates set him apart from every other player in the tournament, making him a standout performer in one of the LCP's most competitive seasons."
          }
        ]
      },
      {
        type: 'h2',
        children: [{ text: "Looking Ahead: MSI 2026 in Daejeon" }]
      },
      {
        type: 'p',
        children: [
          {
            text: "With the Split 2 title secured, Secret Whales will head to the 2026 Mid-Season Invitational in Daejeon, South Korea (June 28 to July 12), representing the LCP alongside Deep Cross Gaming. Both Pacific representatives arrive at MSI in strong form: Secret Whales with back-to-back titles and Deep Cross Gaming as consistent runners-up. The Pacific region, which merged the PCS, VCS, LJL, and LCO into the unified LCP in 2025, will be looking to make a major statement on the international stage."
          }
        ]
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Back-to-back LCP champions, a Season MVP, and two tickets to MSI 2026 — Secret Whales have had a near-perfect 2026 so far, and the international stage is where they will look to prove that the Pacific can compete with the world's elite."
          }
        ]
      }
    ]
  },
  {
    title: "Secret Whales conquista el LCP 2026 Split 2 con victoria 3-1 sobre Deep Cross Gaming",
    slug: 'lcp-split2-2026-secret-whales-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "El equipo vietnamita Team Secret Whales se consagró campeón del LCP 2026 Split 2 el 7 de junio en Taipéi, derrotando a Deep Cross Gaming por 3-1 en la Gran Final para completar un doblete histórico en la temporada. Hizto elegido MVP.",
    sourceUrl: 'https://lolesports.com/en-PH/news/lcp-2026-split-2-etynk',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'LCP' }, { tag: 'Secret Whales' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Team Secret Whales ha escrito una página de historia en la League of Legends Championship Pacific al conquistar el título del LCP 2026 Split 2, derrotando a Deep Cross Gaming por 3-1 en la Gran Final celebrada el 7 de junio en Taipéi. Este triunfo les otorga el segundo campeonato consecutivo de la temporada 2026, consolidándose como el mejor equipo de la región del Pacífico y uno de los más dominantes en la historia de la liga."
          }
        ]
      },
      {
        type: 'h2',
        children: [{ text: "Una Gran Final con emoción hasta el final" }]
      },
      {
        type: 'p',
        children: [
          {
            text: "Deep Cross Gaming arrancó fuerte en la serie arrebatando el primer juego, generando incertidumbre entre los seguidores de Secret Whales. Sin embargo, el equipo vietnamita respondió con autoridad, encadenando tres victorias consecutivas para cerrar la serie. La superioridad táctica de Secret Whales en la fase media de las partidas fue el factor clave, con una gestión de objetivos impecable y una comunicación en equipo que resultó imposible de igualar para sus rivales coreanos. El último juego fue especialmente contundente, mostrando la mejor versión del conjunto vietnamita."
          }
        ]
      },
      {
        type: 'h2',
        children: [{ text: "Hizto, el mejor jugador del torneo" }]
      },
      {
        type: 'p',
        children: [
          {
            text: "El mid-laner Lê Văn \"Hizto\" Hoàng Hải recibió el galardón de MVP del LCP 2026 Split 2 tras una actuación sobresaliente a lo largo de toda la fase de playoffs. Hizto demostró una versatilidad excepcional en su pool de campeones y una consistencia admirable, convirtiéndose en el pilar ofensivo de Secret Whales. Su capacidad para crear ventajas desde el carril central y potenciar el juego de sus compañeros fue determinante en la búsqueda del título, haciendo de él uno de los mejores jugadores de la región en toda la temporada."
          }
        ]
      },
      {
        type: 'h2',
        children: [{ text: "Rumbo al MSI 2026 en Daejeon" }]
      },
      {
        type: 'p',
        children: [
          {
            text: "Con este doblete histórico, Secret Whales se posicionan como los representantes indiscutibles de la región LCP. Junto a Deep Cross Gaming, viajarán al Mid-Season Invitational 2026 que se celebrará en Daejeon, Corea del Sur, del 28 de junio al 12 de julio. La región del Pacífico, que en 2025 fusionó el PCS, el VCS, la LJL y la LCO para crear el LCP, enviará al MSI dos equipos en plena forma, dispuestos a demostrar que pueden competir contra las mejores naciones del mundo."
          }
        ]
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Dos splits, dos títulos y un MVP: Secret Whales realizan una temporada histórica en el LCP 2026. El Pacífico llega al MSI 2026 con sus mejores credenciales desde la creación de la liga y con grandes ambiciones en el plano internacional."
          }
        ]
      }
    ]
  }
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
