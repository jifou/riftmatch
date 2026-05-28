import type { MigrationModule } from './runner'

export const id = '061-lec-spring-2026-ub-semis-kc-g2'
export const description = 'LEC Spring 2026 — KC vs G2, demi-finale bracket supérieur (23 mai)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-23T08:00:00.000Z'

const articles = [
  {
    title: 'LEC Spring 2026 Playoffs : KC vs G2, la demi-finale du bracket supérieur',
    slug: 'lec-spring-2026-ub-semis-kc-g2-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/MHbMTHjE6II/maxresdefault.jpg',
    excerpt:
      'Ce samedi 23 mai à 17h CEST, Karmine Corp et G2 Esports s\'ouvrent les hostilités des LEC Spring 2026 Playoffs en demi-finale du bracket supérieur. Le vainqueur file directement en finale UB le 25 mai.',
    sourceUrl: 'https://lolesports.com/tournament/115548424304940735',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Playoffs' }, { tag: 'G2' }, { tag: 'Karmine Corp' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Les LEC Spring 2026 Playoffs débutent ce samedi 23 mai et l'affiche de lancement est immédiatement spectaculaire : Karmine Corp affronte G2 Esports en demi-finale du bracket supérieur, à 17h CEST. Un choc Best-of-5 qui lance la phase décisive de la saison régulière européenne.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Les rosters en présence' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'G2 Esports aligne une équipe inchangée depuis 2025 : BrokenBlade en top, SkewMond à la jungle, Caps au milieu, Hans Sama en carry et Labrov au support. Un cinq cohérent et rodé qui a terminé la saison régulière à la deuxième place avec un bilan solide.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'En face, Karmine Corp présente son nouveau visage 2026 : Canna (top), Yike (jungle), kyeahoo (mid), Caliste (ADC) et Busio (support), sous les ordres du coach légendaire Reapered. Les Bleus ont terminé troisièmes de la saison régulière et ont décroché leur ticket playoff avec régularité.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Les enjeux de ce BO5' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le format est un double-élimination avec six équipes. Le vainqueur d'aujourd'hui se qualifie directement pour la finale du bracket supérieur prévue le 25 mai — à une seule victoire de la grande finale du Spring. L'équipe battue tombe dans le bracket inférieur et devra prendre un chemin beaucoup plus long pour rêver du titre.",
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "Ces deux formations se connaissent bien : lors du LEC Versus en février 2026, G2 avait dominé KC 2-0 en demi-finale du bracket supérieur de ce même tournoi. Karmine Corp aura à cœur de renverser cette tendance sur le format BO5, plus favorable aux équipes capables d'adapter leur stratégie.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Où suivre le match ?' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La rencontre est diffusée en direct à 17h CEST sur la chaîne officielle LoL Esports. Les playoffs LEC se déroulent dans le cadre d'un double-élimination et se poursuivent jusqu'à la grande finale prévue le 7 juin 2026.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "KC vs G2 est l'affrontement le plus attendu de ces playoffs. Deux philosophies de jeu, deux approches tactiques — mais un seul ticket pour la finale du bracket supérieur.",
          },
        ],
      },
    ],
  },
  {
    title: 'LEC Spring 2026 Playoffs: KC vs G2 — Upper Bracket Semifinals Preview',
    slug: 'lec-spring-2026-ub-semis-kc-g2-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/MHbMTHjE6II/maxresdefault.jpg',
    excerpt:
      'On May 23 at 17:00 CEST, Karmine Corp and G2 Esports clash in the Upper Bracket Semifinals of the LEC Spring 2026 Playoffs. The winner heads straight to the UB Finals on May 25.',
    sourceUrl: 'https://lolesports.com/tournament/115548424304940735',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Playoffs' }, { tag: 'G2' }, { tag: 'Karmine Corp' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "The LEC Spring 2026 Playoffs kick off this Saturday, May 23, and the opening matchup couldn't be more exciting: Karmine Corp versus G2 Esports in the Upper Bracket Semifinals at 17:00 CEST. A Best-of-5 series that immediately raises the stakes for European League of Legends.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'The Rosters' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'G2 Esports enter with an unchanged lineup from 2025 — BrokenBlade (Top), SkewMond (Jungle), Caps (Mid), Hans Sama (ADC), and Labrov (Support). The team finished second in the regular season and arrives with the experience of three consecutive LEC final appearances behind them.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Karmine Corp field their rebuilt 2026 roster: Canna (Top), Yike (Jungle), kyeahoo (Mid), Caliste (ADC), and Busio (Support), coached by the veteran strategist Reapered. The French organization claimed third place in the regular season and is eager to prove they can compete at the very top of the LEC.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "What's at Stake" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The Spring Playoffs use a double-elimination format with six teams. The winner of today's series advances directly to the Upper Bracket Final on May 25 — just one series away from the grand final. The losing side falls into the lower bracket, where the road to the title becomes significantly longer.",
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'These two sides have recent history. In the LEC Versus tournament earlier this season (February 2026), G2 swept KC 2-0 in the Upper Bracket Semifinals. Karmine Corp will be hungry to flip that result in a longer BO5 format, where adaptation between games can be decisive.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'How to Watch' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'The match will be broadcast live at 17:00 CEST on the official LoL Esports channel. The LEC Spring 2026 Playoffs run through to the grand final on June 7, 2026.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'KC vs G2 is the marquee matchup of these playoffs. Two elite lineups, two contrasting styles — only one ticket to the Upper Bracket Final.',
          },
        ],
      },
    ],
  },
  {
    title: 'LEC Spring 2026 Playoffs: KC vs G2 — Previa de las Semifinales del Bracket Superior',
    slug: 'lec-spring-2026-ub-semis-kc-g2-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/MHbMTHjE6II/maxresdefault.jpg',
    excerpt:
      'Este sábado 23 de mayo a las 17:00 CEST, Karmine Corp y G2 Esports se enfrentan en las Semifinales del Bracket Superior de los LEC Spring 2026 Playoffs. El ganador pasa directamente a la Final del UB el 25 de mayo.',
    sourceUrl: 'https://lolesports.com/tournament/115548424304940735',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Playoffs' }, { tag: 'G2' }, { tag: 'Karmine Corp' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Los LEC Spring 2026 Playoffs arrancan este sábado 23 de mayo con un duelo de alto voltaje: Karmine Corp contra G2 Esports en las Semifinales del Bracket Superior, a las 17:00 CEST. Una serie al mejor de cinco que abre la fase decisiva de la temporada europea de League of Legends.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Las alineaciones' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'G2 Esports mantiene su alineación sin cambios desde 2025: BrokenBlade (Top), SkewMond (Jungla), Caps (Mid), Hans Sama (ADC) y Labrov (Support). El equipo terminó segundo en la fase regular y llega con la experiencia de haber disputado tres finales del LEC consecutivas.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Karmine Corp presenta su renovada plantilla 2026: Canna (Top), Yike (Jungla), kyeahoo (Mid), Caliste (ADC) y Busio (Support), bajo la dirección del veterano estratega Reapered. La organización francesa terminó tercera en la fase regular y quiere demostrar que puede competir al más alto nivel del LEC.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Lo que está en juego' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Los playoffs utilizan un formato de doble eliminación con seis equipos. El ganador de hoy avanza directamente a la Final del Bracket Superior el 25 de mayo, a solo una serie de la gran final. El equipo eliminado cae al bracket inferior, donde el camino hacia el título se vuelve considerablemente más largo.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Ambos equipos tienen historia reciente. En el torneo LEC Versus de esta misma temporada (febrero de 2026), G2 barrió a KC 2-0 en las Semifinales del Bracket Superior. Karmine Corp tendrá ganas de revancha en un formato BO5, donde la capacidad de adaptación entre partidas puede ser determinante.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Dónde ver el partido' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'El enfrentamiento se emitirá en directo a las 17:00 CEST en el canal oficial de LoL Esports. Los LEC Spring 2026 Playoffs se extienden hasta la gran final prevista para el 7 de junio de 2026.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'KC vs G2 es el duelo más esperado de estos playoffs. Dos alineaciones de élite, dos estilos contrastados — solo un billete para la Final del Bracket Superior.',
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
