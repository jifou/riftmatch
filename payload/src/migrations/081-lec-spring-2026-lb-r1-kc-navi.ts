import type { MigrationModule } from './runner'

export const id = '081-lec-spring-2026-lb-r1-kc-navi'
export const description = 'LEC Spring 2026 Playoffs — Karmine Corp élimine NAVI 3-1 (bracket inférieur, 30 mai)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-31T08:00:00.000Z'

const articles = [
  {
    title: 'LEC Spring 2026 Playoffs : Karmine Corp élimine NAVI 3-1 et reste en lice',
    slug: 'lec-spring-2026-lb-r1-kc-navi-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      "Ce vendredi 30 mai, Karmine Corp a dominé Natus Vincere 3-1 au premier tour du bracket inférieur des LEC Spring 2026 Playoffs. Les Bleus restent en vie et visent la grande finale du 7 juin.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LEC/2026/Spring/Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Playoffs' }, { tag: 'Karmine Corp' }, { tag: 'NAVI' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Ce vendredi 30 mai 2026, Karmine Corp a éliminé Natus Vincere sur le score de 3-1 lors du premier tour du bracket inférieur des LEC Spring 2026 Playoffs. Les Bleus maintiennent leur parcours en compétition et avancent en demi-finale du bracket inférieur.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "KC rebondit après la chute en bracket supérieur" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Envoyé dans le bracket inférieur après leur défaite 3-1 face à G2 Esports en demi-finale du bracket supérieur le 23 mai, Karmine Corp se devait de répondre. Contre Natus Vincere, sixième du classement de la saison régulière, les joueurs coachés par Reapered ont livré une prestation convaincante.",
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "KC a pris le contrôle de la série dès les deux premiers games, s'imposant avec autorité avant que NAVI ne réduise l'écart avec une victoire en game 3. Le quatrième game a vu Karmine Corp conclure le dossier rapidement, bouclant la série 3-1 et infligeant l'élimination à l'équipe ukrainienne.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "La route vers la finale" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Karmine Corp affronte en demi-finale du bracket inférieur le vainqueur du match entre Team Vitality et GIANTX, programmé le 31 mai 2026. En cas de victoire, les Bleus défieraient Movistar KOI (battu en finale UB par G2 3-2) pour une place en grande finale. Le grand rendez-vous est fixé au 7 juin 2026.",
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "De son côté, Natus Vincere termine son parcours dans les LEC Spring 2026 Playoffs au premier tour du bracket inférieur. L'équipe dirigée par son staff ukrainien quitte la compétition sans décrocher de place en finale pour ce split printanier.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Avec ce 3-1 net contre NAVI, Karmine Corp confirme qu'une défaite en bracket supérieur n'est pas une fin — les Bleus ont encore trois victoires à saisir pour décrocher le titre LEC Spring 2026.",
          },
        ],
      },
    ],
  },
  {
    title: 'LEC Spring 2026 Playoffs: Karmine Corp Beat NAVI 3-1 to Advance in Lower Bracket',
    slug: 'lec-spring-2026-lb-r1-kc-navi-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      "On May 30, Karmine Corp defeated Natus Vincere 3-1 in the LEC Spring 2026 Playoffs Lower Bracket Round 1. The French squad stays alive in the hunt for the Spring title.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LEC/2026/Spring/Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Playoffs' }, { tag: 'Karmine Corp' }, { tag: 'NAVI' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Karmine Corp defeated Natus Vincere 3-1 on May 30, 2026 in the Lower Bracket Round 1 of the LEC Spring 2026 Playoffs. The result keeps KC alive in the double-elimination bracket as they push for a shot at the grand final.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "KC Bounces Back After Upper Bracket Exit" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Karmine Corp had been dropped into the lower bracket following their 3-1 defeat to G2 Esports in the Upper Bracket Semifinals on May 23. Facing Natus Vincere — who entered the playoffs from the sixth seed — KC showed resilience and composure under pressure, coached by veteran strategist Reapered.",
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "The series saw KC take command in games one and two before NAVI pulled one back in game three to keep their season alive. Karmine Corp settled the series decisively in game four, closing out the best-of-five with authority and sending the Ukrainian organization out of the tournament.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "What Comes Next" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Karmine Corp now await the winner of Team Vitality versus GIANTX, scheduled for May 31. Should KC win that lower bracket semifinal, they would face Movistar KOI — who fell to G2 in the Upper Bracket Final 3-2 — for a spot in the grand final. The LEC Spring 2026 Grand Final is set for June 7, 2026.",
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "Natus Vincere exit the LEC Spring 2026 Playoffs at the lower bracket round of sixteen. The squad will need to regroup ahead of the Summer split following this early elimination from their first Spring playoff appearance.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "A clean 3-1 against NAVI is exactly the response Karmine Corp needed. Three more wins stand between the French org and the LEC Spring 2026 title.",
          },
        ],
      },
    ],
  },
  {
    title: 'LEC Spring 2026 Playoffs: Karmine Corp elimina a NAVI 3-1 y sigue viva en el bracket inferior',
    slug: 'lec-spring-2026-lb-r1-kc-navi-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      "El 30 de mayo, Karmine Corp derrotó a Natus Vincere 3-1 en el bracket inferior de los LEC Spring 2026 Playoffs. Los franceses siguen con vida y buscan la gran final del 7 de junio.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LEC/2026/Spring/Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Playoffs' }, { tag: 'Karmine Corp' }, { tag: 'NAVI' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Karmine Corp derrotó a Natus Vincere por 3-1 el 30 de mayo de 2026 en el primer turno del bracket inferior de los LEC Spring 2026 Playoffs. El resultado mantiene viva a KC en la eliminatoria de doble eliminación mientras busca llegar a la gran final.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "KC responde tras caer al bracket inferior" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Karmine Corp había caído al bracket inferior tras su derrota 3-1 ante G2 Esports en las Semifinales del Bracket Superior el 23 de mayo. Frente a Natus Vincere —que entró a los playoffs como sexta cabeza de serie—, el equipo dirigido por el veterano entrenador Reapered demostró solidez y determinación.",
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "KC tomó el control de la serie desde los dos primeros juegos antes de que NAVI recortara diferencias con una victoria en el juego tres, manteniendo viva su esperanza. Karmine Corp cerró la serie en el cuarto juego con contundencia, asegurando el pase a las semifinales del bracket inferior y dejando fuera a la organización ucraniana.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "El camino hacia la gran final" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Karmine Corp espera ahora al ganador del duelo entre Team Vitality y GIANTX, programado para el 31 de mayo. Si KC supera esa semifinal del bracket inferior, se enfrentaría a Movistar KOI —eliminada por G2 en la Final del Bracket Superior 3-2— para conseguir una plaza en la gran final. La gran final de los LEC Spring 2026 está fijada para el 7 de junio de 2026.",
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "Natus Vincere dice adiós a los LEC Spring 2026 Playoffs en el primer turno del bracket inferior. El equipo ucraniano deberá reagruparse de cara al split de verano tras esta eliminación prematura en su primera participación en los playoffs de primavera.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Un contundente 3-1 ante NAVI es exactamente la respuesta que necesitaba Karmine Corp. Tres victorias más separan a la organización francesa del título LEC Spring 2026.",
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
