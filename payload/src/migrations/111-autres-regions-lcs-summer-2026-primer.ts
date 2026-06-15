import type { MigrationModule } from './runner'

export const id = '111-autres-regions-lcs-summer-2026-primer'
export const description = 'Autres Régions — LCS Summer 2026 : début le 25 juillet, finale à Atlanta le 3-4 octobre'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-15T08:00:00.000Z'

const articles = [
  {
    title: "LCS Summer 2026 : coup d'envoi le 25 juillet, finale à Atlanta en octobre",
    slug: 'lcs-summer-2026-primer-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Riot Games a dévoilé le programme complet du LCS Summer 2026 : la saison régulière débute le 25 juillet, le Top 6 disputera les playoffs et la grande finale se tiendra au Gas South Arena d'Atlanta les 3 et 4 octobre.",
    sourceUrl: 'https://lolesports.com/en-US/news/2026-lcs-summer-primer',
    tags: [{ tag: 'LCS' }, { tag: 'LoL' }, { tag: 'Esports' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games a publié ce 15 juin le primer officiel du LCS Summer 2026, donnant aux fans nord-américains tous les détails dont ils avaient besoin pour préparer la suite de la saison. La saison régulière débutera les 25 et 26 juillet avec l'Opening Week présentée par Mastercard, deux journées de compétition en direct accompagnées d'activations pour les fans et d'animations communautaires. Ce lancement marque le coup d'envoi de la deuxième moitié de la saison LCS.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Format : Best-of-3 et six équipes en playoffs' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le LCS Summer 2026 adopte un format de saison régulière en Best-of-3 round robin, ce qui élève l'enjeu de chaque rencontre. Les matchs de la saison régulière se dérouleront au Face Off Studio, à l'exception de l'Opening Week et de la Closing Week. À l'issue de la phase régulière, les six meilleures équipes se qualifient pour les playoffs, qui mettront en place un bracket inférieur élargi pour tester la résilience de chaque formation sur la route du championnat.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'La grande finale à Atlanta : Gas South Arena, 3-4 octobre' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le point culminant de la saison sera le LCS Championship 2026 présenté par Kia, qui se tiendra les 3 et 4 octobre au Gas South Arena à Atlanta, en Géorgie. C'est la première fois que la compétition LCS se rend dans cette ville, et l'arène — d'une capacité de plusieurs milliers de spectateurs — promet une atmosphère mémorable pour ce qui sera l'un des événements les plus importants de l'esport nord-américain de l'année.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Qualification pour les Worlds 2026' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Au-delà du titre régional, le LCS Summer est la dernière chance pour les équipes nord-américaines de décrocher leur billet pour les World Championship 2026. Les trois premières équipes à l'issue du LCS Championship représenteront la région LCS sur la scène mondiale. Après une saison Spring animée et un MSI 2026 à suivre à Daejeon du 28 juin au 12 juillet, le Summer s'annonce comme la compétition décisive pour l'Amérique du Nord.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "LCS Summer 2026 : le 25 juillet, la scène nord-américaine reprend vie — avec Atlanta et les Worlds en ligne de mire.",
          },
        ],
      },
    ],
  },
  {
    title: 'LCS Summer 2026: Season Kicks Off July 25, Championship Heads to Atlanta',
    slug: 'lcs-summer-2026-primer-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Riot Games has unveiled the full LCS Summer 2026 roadmap: the regular season opens on July 25, the top six teams will compete in an expanded playoff bracket, and the LCS Championship will take place at Gas South Arena in Atlanta on October 3-4.",
    sourceUrl: 'https://lolesports.com/en-US/news/2026-lcs-summer-primer',
    tags: [{ tag: 'LCS' }, { tag: 'LoL' }, { tag: 'Esports' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games released the official LCS Summer 2026 primer on June 15, giving North American fans all the information they need for the second half of the competitive year. The regular season will begin with Opening Week Presented by Mastercard on July 25-26, featuring two days of live competition, fan experiences, and community celebrations. It marks the official start of one of the most anticipated splits in recent LCS history.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Format: Best-of-3 Round Robin with Top 6 Playoffs' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The LCS Summer 2026 will use a best-of-three round robin regular season format, raising the stakes for every matchup. Regular season games will be held at the Face Off Studio, with the exception of Opening and Closing weeks. Once the regular season concludes, the top six teams advance to the playoffs, where an expanded lower-bracket gauntlet will test resilience and force teams to stay at peak performance all the way to the LCS Championship.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'LCS Championship at Gas South Arena, Atlanta — October 3-4' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The crown jewel of the LCS Summer 2026 is the LCS Championship Driven by Kia, set for October 3-4 at Gas South Arena in Atlanta, Georgia. The venue will host thousands of passionate fans as North America's best teams compete for the regional title. This marks a major moment for the LCS as it brings the championship to one of the most vibrant cities in the southeastern United States.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Worlds 2026 Qualification on the Line' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Beyond the regional title, the Summer Split is the decisive moment for LCS teams to earn a spot at the 2026 World Championship. The top three finishers at the LCS Championship will represent North America on the global stage. With the MSI 2026 taking place in Daejeon from June 28 to July 12, the Summer Split will shape the region's Worlds ambitions and determine whether North America can build on its recent international momentum.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "LCS Summer 2026: July 25 is the date — Atlanta, Worlds, and everything in between.",
          },
        ],
      },
    ],
  },
  {
    title: 'LCS Summer 2026: Inicio el 25 de julio y Final en Atlanta en octubre',
    slug: 'lcs-summer-2026-primer-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Riot Games ha revelado el calendario completo del LCS Summer 2026: la temporada regular arranca el 25 de julio, los seis mejores equipos disputarán los playoffs y el LCS Championship se celebrará en el Gas South Arena de Atlanta los días 3 y 4 de octubre.",
    sourceUrl: 'https://lolesports.com/en-US/news/2026-lcs-summer-primer',
    tags: [{ tag: 'LCS' }, { tag: 'LoL' }, { tag: 'Esports' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games publicó este 15 de junio el primer oficial del LCS Summer 2026, ofreciendo a los fans norteamericanos todos los detalles de la segunda mitad de la temporada competitiva. La temporada regular arrancará con la Opening Week Presented by Mastercard los días 25 y 26 de julio, con dos jornadas de competición en directo, experiencias para los aficionados y activaciones comunitarias. Es el pistoletazo de salida de uno de los splits más esperados de la historia reciente del LCS.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Formato: Best-of-3 y seis equipos en playoffs' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El LCS Summer 2026 adoptará un formato de temporada regular Best-of-3 round robin, lo que eleva el nivel de exigencia en cada enfrentamiento. Los partidos de la fase regular se disputarán en el Face Off Studio, a excepción de la Opening Week y la Closing Week. Al término de la temporada regular, los seis mejores equipos avanzan a los playoffs, donde un bracket inferior ampliado pondrá a prueba la resistencia de cada organización en el camino hacia el campeonato.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'LCS Championship en el Gas South Arena de Atlanta, 3-4 de octubre' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El punto álgido del verano será el LCS Championship Driven by Kia, que tendrá lugar los días 3 y 4 de octubre en el Gas South Arena de Atlanta, Georgia. El recinto acogerá a miles de aficionados mientras los mejores equipos de Norteamérica se disputan el título regional. Es la primera vez que el campeonato LCS llega a Atlanta, y la elección de este escenario supone un paso importante en la expansión del ecosistema del LCS más allá de las grandes ciudades tradicionales.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'La clasificación para Worlds 2026 en juego' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Más allá del título regional, el Summer Split es el momento decisivo para que los equipos del LCS consigan su plaza en el World Championship 2026. Los tres primeros clasificados del LCS Championship representarán a Norteamérica en el escenario mundial. Con el MSI 2026 desarrollándose en Daejeon del 28 de junio al 12 de julio, el Summer Split determinará las ambiciones mundialistas de la región y si Norteamérica puede construir sobre el impulso internacional de los últimos años.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "LCS Summer 2026: el 25 de julio arranca la cuenta atrás hacia Atlanta y los Worlds.",
          },
        ],
      },
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
