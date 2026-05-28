import type { MigrationModule } from './runner'

export const id = '035-international-first-stand-2026'
export const description = 'International — First Stand 2026 : BLG champion, bat G2 3-1 en finale à São Paulo'

const DATE = '2026-05-13T08:00:00.000Z'

const articles = [
  // ── FR ─────────────────────────────────────────────────────────────────────
  {
    title: 'First Stand 2026 : Bilibili Gaming sacré champion, Bin élu MVP de la finale',
    slug: 'first-stand-2026-blg-champion-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/I4uLe1RegxQ/maxresdefault.jpg',
    excerpt:
      'Bilibili Gaming a remporté le First Stand 2026 en dominant G2 Esports 3-1 en grande finale à São Paulo. Bin a été élu MVP avec un bilan exceptionnel de 17/7/18, et BLG décroche ainsi son tout premier titre international.',
    sourceUrl: 'https://esports.gg/news/league-of-legends/g2-blg-the-first-stand-2026-grand-finals/',
    tags: [
      { tag: 'LoL' },
      { tag: 'Esports' },
      { tag: 'International' },
      { tag: 'First Stand' },
      { tag: 'BLG' },
      { tag: 'G2 Esports' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Le 22 mars 2026, la grande finale du First Stand 2026 s'est jouée au Ginásio do Ibirapuera de São Paulo, au Brésil. Bilibili Gaming (BLG) a dominé G2 Esports 3-1 pour décrocher le premier titre international de l'organisation depuis sa fondation.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Bin, un MVP inarrêtable en finale' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le toplaner Bin a livré une prestation magistrale tout au long de la série. Il termine la finale avec un bilan de 17/7/18 (53 % de participation aux kills) et 122 500 points de dégâts — deuxième total de la série, juste derrière Viper. \"Je savais que je serais le MVP\", a-t-il lancé avec assurance lors de la conférence de presse. Ses interventions décisives en teamfight ont été le moteur de la victoire de BLG dans les moments cruciaux.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Viper, premier double-vainqueur du First Stand" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Park 'Viper' Do-hyeon entre dans l'histoire en devenant le premier joueur à remporter le First Stand deux fois. Il avait triomphé en 2025 avec Hanwha Life Esports avant de rejoindre BLG pour la saison 2026. Côté G2, la campagne restera mémorable : les Européens avaient renversé Gen.G 3-0 en demi-finale le 21 mars, signant la première apparition européenne en finale internationale depuis 2019.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Audience record et prize pool' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La grande finale a attiré plus de 1 500 000 téléspectateurs en pic simultané, confirmant le statut du First Stand comme l'un des rendez-vous internationaux les plus regardés de l'année. BLG repart avec 250 000 dollars de prize money, G2 avec 150 000 dollars.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Bilibili Gaming écrit l'histoire en décrochant son premier trophée international, tandis que G2 Esports rappelle à l'Europe qu'elle peut tenir tête aux meilleures équipes mondiales.",
          },
        ],
      },
    ],
  },

  // ── EN ─────────────────────────────────────────────────────────────────────
  {
    title: 'First Stand 2026: Bilibili Gaming crowned champions, Bin named Finals MVP',
    slug: 'first-stand-2026-blg-champion-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/I4uLe1RegxQ/maxresdefault.jpg',
    excerpt:
      'Bilibili Gaming won First Stand 2026, defeating G2 Esports 3-1 in the grand final in São Paulo. Top laner Bin delivered a dominant FMVP performance, and BLG claimed their first-ever international title.',
    sourceUrl: 'https://esports.gg/news/league-of-legends/g2-blg-the-first-stand-2026-grand-finals/',
    tags: [
      { tag: 'LoL' },
      { tag: 'Esports' },
      { tag: 'International' },
      { tag: 'First Stand' },
      { tag: 'BLG' },
      { tag: 'G2 Esports' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "On March 22, 2026, Bilibili Gaming (BLG) defeated G2 Esports 3-1 in the First Stand 2026 Grand Final at the Ginásio do Ibirapuera in São Paulo, Brazil. The victory marks the first international title in BLG's history.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Bin Dominates: A Historic FMVP Performance' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Top laner Bin was the undisputed standout of the series, finishing the grand final with a 17/7/18 scoreline, 53% kill participation, and 122,500 total damage — second highest in the series behind only Viper. \"I knew I'd be the MVP,\" he said confidently at the post-match press conference. His decisive teamfight contributions were instrumental in BLG's clutch victories throughout the series.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Viper Makes History as First Two-Time First Stand Champion" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Park 'Viper' Do-hyeon etched his name in the history books by becoming the first player to win First Stand twice, having claimed the inaugural 2025 edition with Hanwha Life Esports before joining BLG for 2026. On the other side of the bracket, G2's run was historic in its own right: the LEC representatives stunned Gen.G 3-0 in the March 21 semifinal, marking Europe's first international grand final appearance since 2019.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Record Viewership and Prize Pool' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The grand final peaked at over 1,500,000 concurrent viewers, cementing First Stand's place as one of the most-watched international events of the year. BLG take home $250,000 in prize money, with G2 Esports earning $150,000 for their runner-up finish.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Bilibili Gaming write a new chapter in their history, while G2 Esports serve as a reminder that Europe can still compete at the very highest level on the world stage.",
          },
        ],
      },
    ],
  },

  // ── ES ─────────────────────────────────────────────────────────────────────
  {
    title: 'First Stand 2026: Bilibili Gaming se corona campeón, Bin elegido MVP de la final',
    slug: 'first-stand-2026-blg-champion-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/I4uLe1RegxQ/maxresdefault.jpg',
    excerpt:
      'Bilibili Gaming se proclamó campeón del First Stand 2026 al vencer a G2 Esports 3-1 en la gran final de São Paulo. Bin fue elegido MVP de la final con un rendimiento histórico, y BLG conquista su primer título internacional.',
    sourceUrl: 'https://esports.gg/news/league-of-legends/g2-blg-the-first-stand-2026-grand-finals/',
    tags: [
      { tag: 'LoL' },
      { tag: 'Esports' },
      { tag: 'Internacional' },
      { tag: 'First Stand' },
      { tag: 'BLG' },
      { tag: 'G2 Esports' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'El 22 de marzo de 2026, Bilibili Gaming (BLG) derrotó a G2 Esports 3-1 en la gran final del First Stand 2026 celebrada en el Ginásio do Ibirapuera de São Paulo, Brasil. La victoria supone el primer título internacional de la organización desde su fundación.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Bin, MVP imparable en la gran final' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El top laner Bin fue el jugador más destacado de la serie, terminando la final con un marcador de 17/7/18 (53 % de participación en kills) y 122 500 puntos de daño — el segundo total más alto de la serie, solo por detrás de Viper. \"Sabía que sería el MVP\", declaró con confianza en la rueda de prensa. Sus intervenciones decisivas en los teamfights fueron el motor de las victorias de BLG en los momentos clave.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Viper, primer bicampeón del First Stand' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Park 'Viper' Do-hyeon hizo historia al convertirse en el primer jugador en ganar el First Stand en dos ocasiones, tras haber triunfado en la edición inaugural de 2025 con Hanwha Life Esports antes de unirse a BLG para la temporada 2026. Por su parte, la campaña de G2 también fue histórica: los representantes del LEC eliminaron a Gen.G 3-0 en la semifinal del 21 de marzo, logrando la primera final internacional de Europa desde 2019.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Audiencia récord y premio económico' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La gran final alcanzó un pico de más de 1 500 000 espectadores simultáneos, consolidando el First Stand como uno de los eventos internacionales más vistos del año. BLG se lleva 250 000 dólares en premios, mientras que G2 Esports obtiene 150 000 dólares por su subcampeonato.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Bilibili Gaming escribe un nuevo capítulo en su historia al conquistar su primer trofeo internacional, mientras G2 Esports demuestra que Europa sigue siendo capaz de competir al más alto nivel mundial.',
          },
        ],
      },
    ],
  },
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const article of articles) {
    const existing = await payload.find({
      collection: 'news',
      where: { slug: { equals: article.slug } },
    })
    if (existing.docs.length > 0) {
      console.log(`  → "${article.title}" déjà présent, skip.`)
      continue
    }
    await payload.create({ collection: 'news', data: article as any })
    console.log(`  ✅ ${article.locale.toUpperCase()} — ${article.title}`)
  }
  console.log('✅ Migration 035 terminée')
}
