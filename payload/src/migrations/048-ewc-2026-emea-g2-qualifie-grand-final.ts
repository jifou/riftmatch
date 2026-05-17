import type { MigrationModule } from './runner'

export const id = '048-ewc-2026-emea-g2-qualifie-grand-final'
export const description = 'EWC 2026 EMEA — G2 qualifié 3-0 vs KC, grand final 17 mai pour la 2e place'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-17T08:00:00.000Z'

const articles = [
  // ── FR ─────────────────────────────────────────────────────────────────────
  {
    title: 'EWC 2026 : G2 Esports écrase Karmine Corp 3-0 et décroche le premier ticket EMEA pour Riyad',
    slug: 'ewc-2026-emea-g2-qualifie-3-0-kc-grand-final-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      'G2 Esports a dominé Karmine Corp 3-0 dans le Best-of-5 de la finale upper bracket et s\'assure le premier ticket EMEA pour l\'Esports World Cup 2026 à Riyad. Ce dimanche 17 mai, Karmine Corp affronte le survivant du duel NAVI/MKOI pour la deuxième et dernière place qualificative.',
    sourceUrl: 'https://lol.fandom.com/wiki/Esports_World_Cup_2026/Online_Qualifiers/EMEA',
    tags: [{ tag: 'LEC' }, { tag: 'EWC' }, { tag: 'Esports' }, { tag: 'G2 Esports' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'G2 Esports a réalisé une démonstration de force samedi 16 mai en dominant Karmine Corp 3-0 dans le Best-of-5 de la finale upper bracket du qualificatif EMEA pour l\'Esports World Cup 2026. Sans concéder un seul mapa dans tout le qualificatif, G2 s\'est imposé comme la première équipe EMEA à décrocher son billet pour Riyad.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'G2 intouchable du début à la fin' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'La domination de G2 Esports sur l\'ensemble du qualificatif a été totale. Après avoir éliminé Natus Vincere 2-0 en demi-finale, les Allemands ont récidivé face à Karmine Corp avec un sweep 3-0 net et sans appel. Le roster G2 a montré une maturité tactique et une régularité impressionnantes à chaque étape du bracket, ne laissant aucune fenêtre de réaction à leurs adversaires.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Pour Karmine Corp, cette défaite 0-3 n\'est pas une élimination : la formation française bascule dans le bracket inférieur et conserve une chance de se qualifier. Ce dimanche 17 mai, la KC affrontera le vainqueur du duel NAVI vs Movistar KOI dans un match à élimination directe pour décrocher la deuxième et dernière place qualificative EMEA à l\'EWC 2026.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'NAVI vs MKOI : qui affrontera Karmine Corp ?' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Le programme du 17 mai s\'ouvre avec la demi-finale du bracket perdant entre Natus Vincere et Movistar KOI. Les deux équipes ont survécu en éliminant respectivement les Galions et GiantX lors de la journée du 15 mai. NAVI avait perdu face à G2 (0-2) tandis que MKOI avait chuté face à KC (0-2) en demi-finales upper. Tous deux ont faim de revanche et de qualification.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'L\'enjeu est colossal : il ne reste qu\'un seul ticket EMEA disponible pour l\'Esports World Cup 2026. L\'équipe qui s\'imposera en finale du bracket inférieur rejoindra G2 Esports à Riyad pour représenter l\'Europe du 15 au 19 juillet avec une prize pool globale de 2 millions de dollars.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'G2 a prouvé ce week-end qu\'ils sont au-dessus du lot en EMEA. La vraie question maintenant : qui les rejoindra à Riyad — la Karmine Corp, NAVI ou Movistar KOI ?',
          },
        ],
      },
    ],
  },

  // ── EN ─────────────────────────────────────────────────────────────────────
  {
    title: 'EWC 2026: G2 Esports sweep Karmine Corp 3-0 to claim first EMEA slot for Riyadh',
    slug: 'ewc-2026-emea-g2-qualified-3-0-kc-grand-final-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      'G2 Esports dominated Karmine Corp 3-0 in the upper bracket Best-of-5 final and secured the first EMEA slot at the Esports World Cup 2026 in Riyadh. On Sunday May 17, Karmine Corp will face the winner of the NAVI vs MKOI lower bracket semifinal for the final EMEA qualification spot.',
    sourceUrl: 'https://lol.fandom.com/wiki/Esports_World_Cup_2026/Online_Qualifiers/EMEA',
    tags: [{ tag: 'LEC' }, { tag: 'EWC' }, { tag: 'Esports' }, { tag: 'G2 Esports' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'G2 Esports delivered a commanding performance on Saturday May 16, sweeping Karmine Corp 3-0 in the upper bracket Best-of-5 final of the EWC 2026 EMEA Qualifier. Having not dropped a single map throughout the entire qualifier, G2 cemented their status as the undisputed top EMEA team and punched their ticket to Riyadh.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'G2 untouchable from start to finish' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'G2\'s dominance over the EMEA qualifier was comprehensive. After sweeping Natus Vincere 2-0 in the upper bracket semifinals, they replicated that efficiency against Karmine Corp with a clean 3-0 sweep in the BO5 final. The G2 roster displayed impressive tactical maturity and consistency at every stage of the bracket, leaving opponents no room to respond.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'For Karmine Corp, this 0-3 defeat is not an elimination — the French roster drops to the lower bracket and retains their shot at qualification. On Sunday May 17, KC will face the winner of NAVI vs Movistar KOI in an elimination match for the second and final EMEA spot at EWC 2026.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'NAVI vs MKOI: who will face Karmine Corp?' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'May 17 opens with the lower bracket semifinal between Natus Vincere and Movistar KOI. Both teams survived their elimination matches by defeating the Galions and GIANTX respectively on May 15. NAVI had fallen to G2 (0-2) while MKOI lost to KC (0-2) in the upper bracket semifinals. Both squads are hungry for a spot in Riyadh.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'The stakes could not be higher: only one EMEA ticket to the Esports World Cup 2026 remains. Whoever wins the lower bracket final will join G2 Esports in Riyadh to represent EMEA from July 15-19, competing for a share of the $2 million prize pool.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'G2 proved this weekend they are on another level in EMEA. The real question now: who will join them in Riyadh — Karmine Corp, NAVI, or Movistar KOI?',
          },
        ],
      },
    ],
  },

  // ── ES ─────────────────────────────────────────────────────────────────────
  {
    title: 'EWC 2026: G2 Esports aplasta a Karmine Corp 3-0 y se lleva el primer cupo EMEA para Riyad',
    slug: 'ewc-2026-emea-g2-clasificado-3-0-kc-gran-final-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      'G2 Esports dominó a Karmine Corp 3-0 en la gran final del upper bracket y aseguró el primer cupo EMEA en la Esports World Cup 2026 en Riyad. Este domingo 17 de mayo, Karmine Corp se medirá al ganador del duelo NAVI/MKOI por la última plaza de clasificación.',
    sourceUrl: 'https://lol.fandom.com/wiki/Esports_World_Cup_2026/Online_Qualifiers/EMEA',
    tags: [{ tag: 'LEC' }, { tag: 'EWC' }, { tag: 'Esports' }, { tag: 'G2 Esports' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'G2 Esports ofreció una actuación dominante el sábado 16 de mayo al barrer a Karmine Corp 3-0 en la final del upper bracket del Clasificatorio EMEA de la Esports World Cup 2026. Sin ceder ni un solo mapa en todo el torneo, G2 confirmó su condición de mejor equipo EMEA y se aseguró su plaza en Riyad.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'G2, intocable de principio a fin' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'La dominación de G2 Esports sobre el clasificatorio EMEA fue absoluta. Tras eliminar a Natus Vincere 2-0 en las semifinales del upper bracket, repitieron la fórmula ante Karmine Corp con un contundente sweep 3-0 en el BO5 de la final. El equipo de G2 demostró una madurez táctica y una consistencia formidables en cada ronda del bracket, sin darle a sus rivales ninguna oportunidad de reacción.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Para Karmine Corp, esta derrota 0-3 no supone la eliminación: el equipo francés cae al lower bracket y mantiene sus opciones de clasificación. Este domingo 17 de mayo, KC se enfrentará al ganador del duelo NAVI vs Movistar KOI en un partido a vida o muerte por el segundo y último cupo EMEA en la EWC 2026.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'NAVI vs MKOI: ¿quién se enfrentará a Karmine Corp?' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'La jornada del 17 de mayo arranca con la semifinal del lower bracket entre Natus Vincere y Movistar KOI. Ambos equipos sobrevivieron en sus respectivos partidos de eliminación el 15 de mayo, derrotando a los Galions y a GIANTX. NAVI había caído ante G2 (0-2) y MKOI ante KC (0-2) en las semifinales del upper bracket. Los dos llegan con hambre de revancha y de clasificación.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'El premio en juego no puede ser mayor: solo queda una plaza EMEA disponible para la Esports World Cup 2026. El equipo que gane la final del lower bracket acompañará a G2 Esports en Riyad para representar a EMEA del 15 al 19 de julio, compitiendo por una parte del prize pool global de 2 millones de dólares.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'G2 demostró este fin de semana que están en otro nivel en EMEA. La pregunta ahora es: ¿quién les acompañará en Riyad — Karmine Corp, NAVI o Movistar KOI?',
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
