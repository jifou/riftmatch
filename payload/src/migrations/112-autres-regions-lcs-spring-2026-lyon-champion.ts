import type { MigrationModule } from './runner'

export const id = '112-autres-regions-lcs-spring-2026-lyon-champion'
export const description = 'Autres Régions — LCS Spring 2026 : LYON champion, bat Team Liquid en grande finale'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-15T08:00:00.000Z'
const COVER = 'https://img.youtube.com/vi/HKr9xxFKfyw/maxresdefault.jpg'

const articles = [
  {
    title: "LCS Spring 2026 : LYON sacré champion, direction le MSI à Daejeon",
    slug: 'lcs-spring-2026-lyon-champion-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "LYON remporte le LCS Spring 2026 en battant Team Liquid en grande finale le 14 juin. Emmenée par Berserker et Inspired, la formation mexicaine devient la représentante de l'Amérique du Nord au MSI 2026 à Daejeon.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcs',
    tags: [{ tag: 'LCS' }, { tag: 'LoL' }, { tag: 'Esports' }, { tag: 'LYON' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "C'est officiel : LYON est la meilleure équipe d'Amérique du Nord au Spring 2026. Le 14 juin, la formation mexicaine a conclu sa saison de manière magistrale en remportant la grande finale du LCS Spring 2026 face à Team Liquid. Cette victoire vient couronner plusieurs mois de domination au sein du LCS, une ligue que LYON avait déjà ouverte en mars en remportant le LCS Lock-In pour se qualifier au First Stand 2026 au Brésil.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Une saison printanière sans partage" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Tout au long du LCS Spring 2026, LYON a affiché une constance impressionnante. En demi-finale du Upper Bracket, l'équipe avait déjà écrasé Team Liquid 3-2 dans un match intense, avant de balayer Cloud9 3-0 en finale du Upper Bracket le 7 juin pour décrocher leur billet direct pour la grande finale. Dhokla en top, Inspired à la jungle, Saint au mid, Berserker en ADC et Isles en support ont formé un collectif redoutable, capable d'écraser l'opposition aussi bien en early game qu'en late game.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "La grande finale : revanche face à Team Liquid" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "De leur côté, Team Liquid avaient réalisé un superbe parcours en Lower Bracket pour forcer la revanche face à LYON. La grande finale du 14 juin a tenu toutes ses promesses. LYON a dominé dès le Game 1, avec 18 kills contre 9 pour TL, et a su maintenir la pression tout au long de la série pour s'imposer et conquérir le titre de champion LCS Spring 2026. Le jungler Inspired, pilier offensif de l'équipe, a une fois de plus été omniprésent sur la carte.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Direction le MSI 2026 à Daejeon" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Ce titre offre à LYON le statut de première tête de série du LCS au Mid-Season Invitational 2026, prévu du 28 juin au 12 juillet à Daejeon, en Corée du Sud. La formation mexicaine rejoindra les représentants du LCK, LPL, LEC, LCP et du CBLOL pour tenter de représenter l'Amérique du Nord sur la scène internationale. Après plusieurs années difficiles pour la région, LYON portera l'espoir d'un LCS en pleine renaissance.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "LYON, double champion LCS en 2026 dès le printemps — Berserker, Inspired et leurs coéquipiers ont imposé leur loi en Amérique du Nord.",
          },
        ],
      },
    ],
  },
  {
    title: "LCS Spring 2026: LYON crowned champion, heads to MSI in Daejeon",
    slug: 'lcs-spring-2026-lyon-champion-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "LYON wins the LCS Spring 2026 championship, defeating Team Liquid in the Grand Final on June 14. Led by Berserker and Inspired, the Mexican organization will represent North America at MSI 2026 in Daejeon.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcs',
    tags: [{ tag: 'LCS' }, { tag: 'LoL' }, { tag: 'Esports' }, { tag: 'LYON' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "LYON has officially claimed the throne of North American League of Legends. On June 14, the Mexican organization closed out the LCS Spring 2026 season in style, defeating Team Liquid in the Grand Final to be crowned LCS Spring champions. The victory caps an extraordinary season for LYON, who already opened 2026 by winning the LCS Lock-In tournament in March, earning a spot at First Stand in Brazil.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "A dominant Spring split from wire to wire" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "LYON's LCS Spring run was marked by consistency and outright dominance. In the Upper Bracket semifinals, they took down Team Liquid 3-2 in a tense series. They then swept Cloud9 3-0 in the Upper Bracket Final on June 7, locking in their Grand Final berth and their first-seed spot for MSI 2026. The roster of Dhokla (top), Inspired (jungle), Saint (mid), Berserker (ADC), and Isles (support) proved to be one of the most complete lineups North America has fielded in years.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Grand Final: a rematch that ended the same way" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Team Liquid fought back through the Lower Bracket to earn a rematch with LYON in the Grand Final. The series started decisively, with LYON winning Game 1 convincingly — 18 kills to 9 — establishing early psychological control. LYON continued to press their advantages throughout the series, ultimately closing out the championship title. Jungler Inspired was once again at the heart of LYON's game plan, setting up kills and objectives across the map.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "LCS's top seed heading to MSI 2026 in Daejeon" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "With the LCS Spring title secured, LYON will represent North America as the region's first seed at the 2026 Mid-Season Invitational, scheduled from June 28 to July 12 in Daejeon, South Korea. They'll face off against the top teams from the LCK, LPL, LEC, LCP, and CBLOL. For a North American scene that has struggled internationally in recent years, LYON's arrival at MSI will be eagerly anticipated by the entire region.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "LYON: double LCS champions in 2026 before summer even begins — Berserker, Inspired and co. have made NA believe again.",
          },
        ],
      },
    ],
  },
  {
    title: "LCS Spring 2026: LYON se corona campeón y viaja al MSI de Daejeon",
    slug: 'lcs-spring-2026-lyon-champion-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "LYON conquista el LCS Spring 2026 al derrotar a Team Liquid en la gran final del 14 de junio. Liderada por Berserker e Inspired, la organización mexicana representará a Norteamérica en el MSI 2026 en Daejeon.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcs',
    tags: [{ tag: 'LCS' }, { tag: 'LoL' }, { tag: 'Esports' }, { tag: 'LYON' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "LYON es el mejor equipo de Norteamérica en la primavera de 2026. El 14 de junio, la organización mexicana completó una temporada sobresaliente conquistando el LCS Spring 2026 al vencer a Team Liquid en la gran final. Este título culmina meses de dominio en el LCS, una liga que LYON ya había inaugurado en marzo ganando el LCS Lock-In 2026 para clasificarse al First Stand en Brasil.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Una primavera de dominio total" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Durante todo el LCS Spring 2026, LYON mostró una consistencia admirable. En las semifinales del Upper Bracket, superaron a Team Liquid por 3-2 en una serie intensa. Posteriormente, barrieron a Cloud9 con un contundente 3-0 en la final del Upper Bracket el 7 de junio, asegurando su plaza directa en la gran final y la primera plaza de cabeza de serie del LCS en el MSI 2026. El quinteto formado por Dhokla (top), Inspired (jungla), Saint (mid), Berserker (ADC) e Isles (support) se consolidó como uno de los mejores rosters que ha visto la región norteamericana en los últimos años.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "La gran final: revancha y título para LYON" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Team Liquid realizó una remontada épica en el Lower Bracket para forzar la revancha ante LYON en la gran final. La serie arrancó de manera decidida, con LYON dominando el Game 1 con un marcador de 18 kills a 9 a su favor. A partir de ahí, el equipo mexicano mantuvo el control de la situación para hacerse con el título de campeón del LCS Spring 2026. El jungler Inspired fue una vez más el motor del equipo, generando ventajas en toda la grieta.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Primera cabeza de serie del LCS rumbo al MSI 2026 en Daejeon" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Con el título del LCS Spring 2026 en el bolsillo, LYON representará a Norteamérica como primera cabeza de serie en el Mid-Season Invitational 2026, que se celebrará del 28 de junio al 12 de julio en Daejeon, Corea del Sur. Allí se medirán con los mejores equipos del LCK, LPL, LEC, LCP y CBLOL. Para una región norteamericana que ha sufrido en el plano internacional en los últimos años, la presencia de LYON en el MSI supone un rayo de esperanza y orgullo para toda la comunidad.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "LYON: doble campeón del LCS en 2026 antes de que llegue el verano — Berserker, Inspired y sus compañeros han devuelto la ilusión a Norteamérica.",
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
