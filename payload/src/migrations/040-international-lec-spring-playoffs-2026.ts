import type { MigrationModule } from './runner'

export const id = '040-international-lec-spring-playoffs-2026'
export const description = 'International — LEC Spring 2026 : bracket playoffs dévoilé, G2 vs Karmine Corp pour MSI 2026'

const DATE = '2026-05-14T08:00:00.000Z'

const articles = [
  // ── FR ─────────────────────────────────────────────────────────────────────
  {
    title: 'LEC Spring 2026 : G2 affronte Karmine Corp en playoffs, deux billets pour MSI en jeu',
    slug: 'lec-spring-2026-playoffs-bracket-g2-kc-msi-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/V7kJZLT1OJs/maxresdefault.jpg',
    excerpt:
      'Le bracket des playoffs LEC Spring 2026 est fixé : G2 Esports défie Karmine Corp et Team Vitality choisit Movistar KOI. Les deux équipes qui sortiront des demi-finales upper bracket décrocheront leur billet pour MSI 2026 à Daejeon.',
    sourceUrl: 'https://esports-news.co.uk/2026/05/11/lec-spring-playoffs-bracket-karmine-corp-g2-vitality-mko/',
    tags: [
      { tag: 'LEC' },
      { tag: 'Esports' },
      { tag: 'International' },
      { tag: 'G2 Esports' },
      { tag: 'Karmine Corp' },
      { tag: 'MSI 2026' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Après sept semaines de saison régulière — dont une tournée à guichets fermés au Madrid Arena —, la LEC Spring 2026 entre dans son acte final. Le bracket des six-team playoffs a été révélé le 11 mai : les demi-finales de l\'upper bracket opposeront Team Vitality à Movistar KOI le vendredi 23 mai, et Karmine Corp à G2 Esports le samedi 24. Les deux vainqueurs se retrouveront en demi-finale supérieure le lundi 25, et cette victoire vaudra non seulement une place en grande finale mais aussi la qualification directe pour le Mid-Season Invitational 2026.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'G2 vs KC : une rivalité qui enflamme la LEC' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "G2 Esports et Karmine Corp sont les deux formations les plus populaires d\'Europe, et leur opposition cristallise la saison. G2 a remporté la finale de LEC Versus 2026 face à KC sur le score de 3-2, puis a confirmé sa supériorité récente en les balayant 2-0 lors du Roadtrip de Madrid (8 mai), soit le jour d\'ouverture de la semaine 7. G2 n\'a pas manqué un MSI depuis 2022. Karmine Corp, de son côté, a semblé quasi inarrêtable pendant la quasi-totalité de la saison régulière avant de trébucher lors du dernier week-end, concédant deux défaites qui ont rebattu les cartes de la tête de série.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Vitality et le reste du tableau' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Team Vitality a terminé première de la saison régulière et a exercé son droit de choisir son adversaire en demi-finale upper, optant pour Movistar KOI. La seed 2 de Karmine Corp a ainsi hérité de G2 dans l\'autre match. Les équipes éliminées au premier tour (GIANTX et Natus Vincere complètent le tableau à six) rejoindront le lower bracket pour tenter une remontée. Le format est une double élimination : toutes les rencontres sont des best-of-five.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'MSI 2026 : Daejeon attend ses représentants européens' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le Mid-Season Invitational 2026 se tiendra du 28 juin au 12 juillet à Daejeon, en Corée du Sud. Onze équipes s\'affronteront, dont les deux meilleures de chaque grande ligue (LCK, LCS, LCP, LEC, LPL) plus le champion du CBLOL. Bilibili Gaming, vainqueur du First Stand 2026, envoie les deux seeds LPL directement en bracket stage. Secret Whales (LCP) est à ce jour la seule équipe qualifiée, après avoir dominé leur split avec un bilan parfait. La LEC livrera ses deux noms fin mai.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Les playoffs LEC Spring 2026 s\'annoncent comme les plus relevés de ces dernières années. G2 vs Karmine Corp pourrait bien redéfinir la hiérarchie européenne — et le vainqueur portera le drapeau de la région à MSI 2026 à Daejeon.",
          },
        ],
      },
    ],
  },

  // ── EN ─────────────────────────────────────────────────────────────────────
  {
    title: 'LEC Spring 2026 Playoffs Bracket Set: G2 vs Karmine Corp Clash For MSI 2026 Berth',
    slug: 'lec-spring-2026-playoffs-bracket-g2-kc-msi-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/V7kJZLT1OJs/maxresdefault.jpg',
    excerpt:
      'The LEC Spring 2026 playoffs bracket has been revealed. G2 Esports will face Karmine Corp while Team Vitality takes on Movistar KOI in the upper bracket semifinals, with both winners securing a spot at MSI 2026 in Daejeon.',
    sourceUrl: 'https://esports-news.co.uk/2026/05/11/lec-spring-playoffs-bracket-karmine-corp-g2-vitality-mko/',
    tags: [
      { tag: 'LEC' },
      { tag: 'Esports' },
      { tag: 'International' },
      { tag: 'G2 Esports' },
      { tag: 'Karmine Corp' },
      { tag: 'MSI 2026' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "After seven weeks of regular season play — capped off by a sold-out Roadtrip at the Madrid Arena — LEC Spring 2026 is heading into its final chapter. The six-team playoffs bracket was unveiled on May 11: Team Vitality will face Movistar KOI on Friday, May 23, while Karmine Corp and G2 Esports meet on Saturday, May 24. Both upper bracket semifinal winners then clash on Monday, May 25, with a grand final berth and direct MSI 2026 qualification on the line.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "G2 vs KC: Europe's Defining Rivalry" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "G2 Esports and Karmine Corp are the two most high-profile organisations in European League of Legends, and their ongoing feud has defined the 2026 LEC season. G2 defeated KC 3-2 to win the LEC Versus 2026 grand final earlier this year, then hammered them 2-0 again during Week 7 in Madrid on May 8. G2 have not missed an MSI since 2022. Karmine Corp looked near-unstoppable for most of the split but stumbled in the final weekend, losing two series and dropping to the second seed heading into the playoffs.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Vitality's Pick and the Full Bracket" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Team Vitality finished the regular season in first place and exercised their right to choose their upper bracket opponent, selecting Movistar KOI. That left Karmine Corp — as the second seed — to take on G2 in the other match. GIANTX and Natus Vincere complete the six-team field and will enter through the lower bracket. Every series in the playoffs is a best-of-five.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "MSI 2026: Daejeon Awaits Europe's Best" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The Mid-Season Invitational 2026 runs from June 28 to July 12 in Daejeon, South Korea, featuring 11 teams from the world\'s top regions. The LEC will send its champion and runner-up — the champion advances directly to the bracket stage while the runner-up enters play-ins. Bilibili Gaming (LPL), winner of First Stand 2026, already secured both LPL seeds into the bracket stage. Secret Whales (LCP) are currently the only team fully confirmed for MSI after an undefeated split. Europe\'s two representatives will be decided by the end of May.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "The LEC Spring 2026 playoffs may be the most competitive in years. Whoever wins between G2 and Karmine Corp will carry Europe\'s hopes to Daejeon — and both teams have everything to prove.",
          },
        ],
      },
    ],
  },

  // ── ES ─────────────────────────────────────────────────────────────────────
  {
    title: 'LEC Spring 2026: G2 Esports se enfrenta a Karmine Corp por una plaza en el MSI 2026',
    slug: 'lec-spring-2026-playoffs-bracket-g2-kc-msi-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/V7kJZLT1OJs/maxresdefault.jpg',
    excerpt:
      'El bracket de los playoffs de la LEC Spring 2026 ya está definido: G2 Esports medirá fuerzas con Karmine Corp y Team Vitality eligió a Movistar KOI. Los dos ganadores del upper bracket asegurarán su clasificación para el MSI 2026 en Daejeon.',
    sourceUrl: 'https://esports-news.co.uk/2026/05/11/lec-spring-playoffs-bracket-karmine-corp-g2-vitality-mko/',
    tags: [
      { tag: 'LEC' },
      { tag: 'Esports' },
      { tag: 'International' },
      { tag: 'G2 Esports' },
      { tag: 'Karmine Corp' },
      { tag: 'MSI 2026' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Tras siete semanas de temporada regular — coronadas por una Roadtrip con el Madrid Arena a rebosar —, la LEC Spring 2026 entra en su fase decisiva. El bracket de los playoffs de seis equipos se reveló el 11 de mayo: Team Vitality se medirá a Movistar KOI el viernes 23 de mayo, mientras que Karmine Corp y G2 Esports se enfrentarán el sábado 24. Los dos ganadores del upper bracket se citarán el lunes 25 de mayo, con una plaza en la gran final y la clasificación directa para el MSI 2026 en juego.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'G2 vs KC: la rivalidad que define Europa' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "G2 Esports y Karmine Corp son los dos grandes nombres del League of Legends europeo, y su duelo ha marcado la temporada 2026 de la LEC. G2 derrotó a KC 3-2 en la gran final del LEC Versus 2026 y volvió a imponerse por 2-0 durante la Semana 7 en Madrid el pasado 8 de mayo. G2 no ha faltado a un MSI desde 2022. Por su parte, Karmine Corp fue casi intratable durante la mayor parte de la fase regular, pero tropezó en el último fin de semana —dos derrotas consecutivas— lo que los dejó como segunda cabeza de serie y les depara este duelo de alto voltaje desde el primer cruce.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'La elección de Vitality y el cuadro completo' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Team Vitality terminó la fase regular en primer lugar y ejerció su derecho a elegir rival en las semifinales del upper bracket, optando por Movistar KOI. Esto hizo que Karmine Corp —como segunda cabeza de serie— heredara a G2 en el otro cruce. GIANTX y Natus Vincere completan el cuadro de seis equipos y entrarán por el lower bracket. Todos los enfrentamientos de los playoffs se disputarán en formato al mejor de cinco partidas.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'MSI 2026: Daejeon espera a los representantes europeos' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El Mid-Season Invitational 2026 se celebrará del 28 de junio al 12 de julio en Daejeon, Corea del Sur, con 11 equipos de las principales regiones del mundo. La LEC enviará a su campeón y al subcampeón: el campeón accederá directamente a la fase de grupos, mientras que el subcampeón pasará por los play-ins. Bilibili Gaming (LPL), campeón del First Stand 2026, ya aseguró que ambas plazas del LPL irán directamente al bracket stage. Secret Whales (LCP) es por el momento el único equipo totalmente confirmado para el MSI. Europa conocerá a sus dos representantes a finales de mayo.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Los playoffs de la LEC Spring 2026 se perfilan como los más competitivos en años. Quien gane entre G2 y Karmine Corp portará la bandera de Europa en Daejeon, y ambos equipos tienen mucho que demostrar.",
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
