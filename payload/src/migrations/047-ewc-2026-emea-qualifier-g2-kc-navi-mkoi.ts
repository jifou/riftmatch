import type { MigrationModule } from './runner'

export const id = '047-ewc-2026-emea-qualifier-g2-kc-navi-mkoi'
export const description = 'EWC 2026 EMEA Qualifier — G2 vs KC en finale upper bracket, NAVI et MKOI survivent'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-16T08:00:00.000Z'

const articles = [
  // ── FR ─────────────────────────────────────────────────────────────────────
  {
    title: 'EWC 2026 Qualificatif EMEA : G2 vs Karmine Corp pour une place directe, NAVI et MKOI en danger',
    slug: 'ewc-2026-qualificatif-emea-g2-kc-navi-mkoi-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      'Le qualificatif EMEA pour l\'Esports World Cup 2026 entre dans sa phase décisive : G2 Esports et Karmine Corp s\'affrontent en finale upper bracket pour une place directe à Riyad, tandis que NAVI et MKOI, vainqueurs la veille, jouent leur survie en lower bracket.',
    sourceUrl: 'https://insider-gaming.com/lec-esports-world-cup-qualifier-finals-preview/',
    tags: [{ tag: 'LEC' }, { tag: 'EWC' }, { tag: 'Esports' }, { tag: 'EMEA' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Le qualificatif EMEA pour l'Esports World Cup 2026 est entré dans sa phase décisive. Après une journée du 15 mai riche en rebondissements dans le bracket perdant, le samedi 16 mai s'annonce historique pour l'esport européen avec deux rencontres à fort enjeu.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'NAVI et MKOI survivent en lower bracket' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La veille, Natus Vincere a éliminé les Galions pour maintenir leurs espoirs de qualification. NAVI, qui avait chuté 0-2 face à G2 Esports en demi-finale de l'upper bracket, a su rebondir avec autorité dans le bracket perdant. Dans le même temps, Movistar KOI a livré une prestation dominante face à GiantX, s'imposant 2-0 sans trembler.",
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le jungler Elyoya a été omniprésent tout au long de la série contre GiantX, accumulant plus de 3 000 or d'avance sur son adversaire dès la 20e minute. Le midlaner Jojopyun a lancé la machine espagnole avec un solokill précoce, tandis que l'ADC Supa a conclu le deuxième mapa avec près de 12 000 or d'avance sur son opposant.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'G2 vs Karmine Corp : la finale tant attendue' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Ce samedi, tous les regards sont tournés vers la finale upper bracket entre G2 Esports et Karmine Corp. Les deux équipes ont affiché un parcours sans faute dans ce qualificatif, balayant respectivement NAVI (2-0) et MKOI (2-0) lors de leurs demi-finales. Ce Best-of-5 désignera le premier représentant EMEA à l'Esports World Cup 2026.",
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "L'EWC 2026 se tiendra à Riyad du 15 au 19 juillet avec une prize pool de 2 millions de dollars et 16 équipes issues des meilleures régions mondiales. Deux places qualificatives sont disponibles pour l'EMEA. Le vainqueur d'aujourd'hui s'assure un ticket direct ; le perdant devra continuer sa route via le bracket inférieur pour décrocher la deuxième place lors de la finale du 17 mai.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "G2 contre Karmine Corp, c'est le choc que l'Europe attendait : la rivalité franco-internationale au sommet de l'esport continental, pour un billet vers Riyad.",
          },
        ],
      },
    ],
  },

  // ── EN ─────────────────────────────────────────────────────────────────────
  {
    title: 'EWC 2026 EMEA Qualifier: G2 vs Karmine Corp Upper Bracket Final, NAVI and MKOI Fight for Survival',
    slug: 'ewc-2026-emea-qualifier-g2-kc-navi-mkoi-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      'The EWC 2026 EMEA Qualifier reaches its decisive phase: G2 Esports and Karmine Corp clash in the upper bracket final for a direct EWC spot, while NAVI and MKOI — both victorious on May 15 — face elimination in the lower bracket.',
    sourceUrl: 'https://insider-gaming.com/lec-esports-world-cup-qualifier-finals-preview/',
    tags: [{ tag: 'LEC' }, { tag: 'EWC' }, { tag: 'Esports' }, { tag: 'EMEA' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'The EWC 2026 EMEA Qualifier is reaching its climax, with high-stakes matches on May 16 following a dramatic lower bracket day on May 15. Two EMEA slots to the Esports World Cup 2026 remain up for grabs, and every match now carries elimination weight.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'NAVI and MKOI keep their EWC dreams alive' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Natus Vincere survived their lower bracket run by defeating the Galions on May 15, bouncing back after their 0-2 loss to G2 Esports in the upper bracket semifinals. Meanwhile, Movistar KOI put on a dominant display against GIANTX, winning 2-0 with clinical efficiency.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Jungler Elyoya was the standout performer for MKOI, building over 3,000 gold advantage by minute 20 while relentlessly finding kills across the map. Midlaner Jojopyun drew first blood with an early solo kill that set the tone, and ADC Supa closed out Game 2 with a near 12,000 gold lead over his opponent. GIANTX had no answer.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'G2 vs Karmine Corp: The Upper Bracket Final' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'The marquee match of the weekend is the upper bracket final between G2 Esports and Karmine Corp. Both squads were flawless in their semifinals, sweeping NAVI and MKOI 2-0 respectively. This best-of-five will decide the first EMEA team to secure a direct berth at the Esports World Cup 2026.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "EWC 2026 is scheduled in Riyadh from July 15-19 with a $2 million prize pool and 16 teams from the world's top regions. The winner of today's G2 vs KC match earns a guaranteed EWC slot, while the loser must fight through the lower bracket for the second and final EMEA qualification spot — decided in the grand final on May 17.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "G2 vs Karmine Corp is the matchup Europe has been waiting for — two giants of the LEC competing for the right to represent EMEA on the world's biggest esports stage.",
          },
        ],
      },
    ],
  },

  // ── ES ─────────────────────────────────────────────────────────────────────
  {
    title: 'EWC 2026 Clasificatorio EMEA: G2 vs Karmine Corp por plaza directa, NAVI y MKOI luchan por sobrevivir',
    slug: 'ewc-2026-clasificatorio-emea-g2-kc-navi-mkoi-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      'El Clasificatorio EMEA de la Esports World Cup 2026 llega a su momento más crítico: G2 Esports y Karmine Corp se enfrentan en la final del upper bracket por una plaza directa en Riyadh, mientras NAVI y MKOI — vencedores el 15 de mayo — se juegan su futuro en el bracket de perdedores.',
    sourceUrl: 'https://insider-gaming.com/lec-esports-world-cup-qualifier-finals-preview/',
    tags: [{ tag: 'LEC' }, { tag: 'EWC' }, { tag: 'Esports' }, { tag: 'EMEA' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'El Clasificatorio EMEA de la Esports World Cup 2026 llega a su fase más crítica. Tras una intensa jornada el 15 de mayo en el bracket de perdedores, el sábado 16 de mayo se presenta como un día histórico para el esport europeo con dos enfrentamientos de máximo nivel.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'NAVI y MKOI se mantienen vivos en el lower bracket' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'El viernes 15 de mayo, Natus Vincere eliminó a los Galions manteniéndose vivos en la carrera por la clasificación. NAVI había caído 0-2 ante G2 Esports en las semifinales del upper bracket, pero respondió con contundencia. Por su parte, Movistar KOI dominó de manera aplastante a GIANTX con un 2-0 sin discusión.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'El jungler Elyoya fue el gran protagonista frente a GIANTX, acumulando más de 3.000 de oro de ventaja en el minuto 20 mientras encontraba kills por todo el mapa. El midlaner Jojopyun marcó el ritmo con un solokill temprano, y el ADC Supa cerró el segundo mapa con casi 12.000 de oro de diferencia sobre su rival. GIANTX no tuvo respuesta.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'G2 vs Karmine Corp: la gran final del upper bracket' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'El partido del día es sin duda la final del upper bracket entre G2 Esports y Karmine Corp. Ambos equipos llegaron sin perder un solo mapa en sus semifinales, barriendo a NAVI y MKOI respectivamente con marcadores de 2-0. Este Best-of-5 determinará el primer representante de EMEA en la Esports World Cup 2026.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'La EWC 2026 se celebrará en Riyadh del 15 al 19 de julio con una bolsa de premios de 2 millones de dólares y 16 equipos de las mejores regiones del mundo. Dos plazas están disponibles para EMEA. El vencedor de hoy se asegura clasificación directa; el perdedor deberá continuar por el bracket inferior para pelear por la segunda y última plaza en la gran final del 17 de mayo.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'G2 contra Karmine Corp es el duelo que Europa esperaba: dos gigantes del LEC compitiendo por el derecho a representar a EMEA en el mayor evento de esports del año.',
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
