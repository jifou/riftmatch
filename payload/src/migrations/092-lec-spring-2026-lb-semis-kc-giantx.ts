import type { MigrationModule } from './runner'

export const id = '092-lec-spring-2026-lb-semis-kc-giantx'
export const description = 'LEC Spring 2026 Playoffs — Karmine Corp élimine GIANTX 3-0 en demi-finale LB (1er juin 2026), Yike MVP'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-06T08:00:00.000Z'

const articles = [
  {
    title: 'LEC Spring 2026 Playoffs : Karmine Corp domine GIANTX 3-0 et file en finale LB',
    slug: 'lec-spring-2026-lb-semis-kc-giantx-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      "Le 1er juin 2026, Karmine Corp a éliminé GIANTX 3-0 en demi-finale du bracket inférieur des LEC Spring 2026 Playoffs. Yike, élu MVP, a brillé sur Vi, Pantheon et Lee Sin. KC se qualifie pour la finale LB face à Movistar KOI.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LEC/2026/Spring/Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Playoffs' }, { tag: 'Karmine Corp' }, { tag: 'GIANTX' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Le 1er juin 2026, Karmine Corp a éliminé GIANTX sur le score de 3-0 en demi-finale du bracket inférieur des LEC Spring 2026 Playoffs. Un sweep autoritaire de 91 minutes de jeu cumulées — 33:56, 29:44, 27:54 — qui envoie KC en finale LB et met fin à l'aventure de GIANTX.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Yike, MVP incontestable de la série" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le jungler de Karmine Corp, Yike, a été le facteur X de cette rencontre. Récompensé du titre de MVP, il a montré une palette de champions impressionnante : Vi en game 1 pour contrôler les objectives, Pantheon en game 2 pour multiplier les impacts globaux, et Lee Sin en game 3 pour apporter l'engage nécessaire à une victoire en moins de 28 minutes. À chaque partie, Yike a guidé KC vers les ressources clés de la carte, étouffant systématiquement le jeu adverse.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Trois games, zéro répit pour GIANTX" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "GIANTX, pourtant auteur d'un 3-0 impressionnant contre Team Vitality au tour précédent, n'a jamais réussi à trouver les clés pour renverser KC. Karmine Corp a imposé un rythme élevé dès les premières minutes de chaque partie, ne laissant aucun espace à l'adversaire pour installer son jeu. La progression du bilan : game 1 en 33:56, game 2 en 29:44, game 3 en 27:54 illustre parfaitement la montée en puissance collective de l'équipe.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "GIANTX éliminé, 4e place au classement final" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Pour GIANTX, l'aventure LEC Spring 2026 s'arrête en demi-finale du bracket inférieur. L'équipe termine à la 4e place des playoffs. Après une saison régulière solide et un premier tour de playoffs réussi, cette élimination face à Karmine Corp clôt un parcours prometteur mais insuffisant pour viser un ticket MSI.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "KC en finale LB contre Movistar KOI" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Karmine Corp se retrouve désormais en finale du bracket inférieur face à Movistar KOI, programmée le 6 juin 2026. MKOI avait de son côté été éliminé de l'upper bracket le 25 mai après une défaite 3-2 contre G2 Esports en finale UB. Le vainqueur de cette LB Final ira défier G2 Esports pour le titre LEC Spring 2026 et une place au Mid-Season Invitational.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Avec un Yike en forme olympique et un collectif de plus en plus huilé au fil des séries, Karmine Corp est l'équipe la plus chaude du bracket inférieur. Le duel contre Movistar KOI s'annonce comme la plus belle affiche de ces playoffs.",
          },
        ],
      },
    ],
  },
  {
    title: 'LEC Spring 2026 Playoffs: Karmine Corp Sweep GIANTX 3-0 to Reach Lower Bracket Final',
    slug: 'lec-spring-2026-lb-semis-kc-giantx-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      "Karmine Corp eliminated GIANTX 3-0 on June 1, 2026 in the LEC Spring 2026 Playoffs Lower Bracket Semifinals. Yike claimed MVP honours with performances on Vi, Pantheon, and Lee Sin. KC advances to face Movistar KOI in the LB Final.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LEC/2026/Spring/Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Playoffs' }, { tag: 'Karmine Corp' }, { tag: 'GIANTX' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Karmine Corp eliminated GIANTX with a dominant 3-0 sweep in the LEC Spring 2026 Playoffs Lower Bracket Semifinals on June 1, 2026. The three games lasted 33:56, 29:44, and 27:54 respectively, showcasing KC's ability to close out matches efficiently and without hesitation.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Yike Earns MVP With a Three-Champion Showcase" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Karmine Corp's jungler Yike was named MVP of the series after delivering standout performances on three different champions. He opened on Vi in Game 1 to control objectives and enable his carries, switched to Pantheon in Game 2 for cross-map pressure, then closed the series with Lee Sin in Game 3 — sealing a sub-28-minute victory. Yike's adaptability and impact on every game made him the clear driver of KC's success throughout the series.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "KC Maintain Momentum Through Three Convincing Games" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Despite GIANTX having swept Team Vitality 3-0 in the previous round, Karmine Corp gave them no room to breathe. KC established control early in each game and systematically dismantled GIANTX's attempts to contest objectives or find fights on even terms. The declining game times across the series — from 33 minutes to under 28 — showed KC growing more comfortable and clinical as the best-of-five progressed.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "GIANTX Exit in Fourth Place" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "GIANTX's LEC Spring 2026 run comes to an end at the Lower Bracket Semifinals, finishing the playoffs in fourth place. After a strong regular season and a convincing first-round playoff win over Vitality, they were ultimately unable to find answers against a Karmine Corp side operating at a high level in the lower bracket.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Karmine Corp vs Movistar KOI: LB Final on June 6" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Karmine Corp now faces Movistar KOI in the Lower Bracket Final on June 6, 2026. MKOI dropped from the upper bracket on May 25 after losing 3-2 to G2 Esports in the Upper Bracket Final. The winner of this LB Final will earn the right to challenge G2 Esports for the LEC Spring 2026 title and a spot at the Mid-Season Invitational.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "A 3-0 sweep with Yike dominating across three different champions makes Karmine Corp the most dangerous team still fighting through the lower bracket. June 6 against Movistar KOI is the must-watch match of these playoffs.",
          },
        ],
      },
    ],
  },
  {
    title: 'LEC Spring 2026 Playoffs: Karmine Corp aplasta a GIANTX 3-0 y se mete en la Final del Bracket Inferior',
    slug: 'lec-spring-2026-lb-semis-kc-giantx-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      "El 1 de junio de 2026, Karmine Corp eliminó a GIANTX por 3-0 en las semifinales del bracket inferior de los LEC Spring 2026 Playoffs. Yike fue nombrado MVP con actuaciones sobre Vi, Pantheon y Lee Sin. KC se clasifica para la Final del LB ante Movistar KOI.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LEC/2026/Spring/Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Playoffs' }, { tag: 'Karmine Corp' }, { tag: 'GIANTX' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Karmine Corp eliminó a GIANTX con un contundente 3-0 en las semifinales del bracket inferior de los LEC Spring 2026 Playoffs el 1 de junio de 2026. Los tres partidos duraron 33:56, 29:44 y 27:54 respectivamente, dejando claro el dominio total del equipo francés a lo largo de toda la serie.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Yike, MVP indiscutible con tres campeones diferentes" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El junglero de Karmine Corp, Yike, fue galardonado con el MVP de la serie tras unas actuaciones sobresalientes en tres campeones distintos. Comenzó con Vi en el juego 1 para controlar los objetivos del mapa, apostó por Pantheon en el juego 2 con el fin de ejercer presión global, y cerró la serie con Lee Sin en el juego 3, sellando la victoria en menos de 28 minutos. La versatilidad y el impacto constante de Yike lo convirtieron en el principal artífice del triunfo de KC.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Tres partidos, cero respiro para GIANTX" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "A pesar de que GIANTX había barrido a Team Vitality 3-0 en la ronda anterior, Karmine Corp no les dio ningún margen de maniobra. KC tomó el control de forma temprana en cada uno de los partidos y desmanteló sistemáticamente los intentos de GIANTX de disputar objetivos o pelear en condiciones de igualdad. La reducción progresiva de los tiempos de juego — de 33 a menos de 28 minutos — demuestra la solidez y la confianza creciente de Karmine Corp a medida que avanzaba la serie.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "GIANTX se despide en cuarta posición" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La aventura de GIANTX en los LEC Spring 2026 Playoffs llega a su fin en las semifinales del bracket inferior, con una cuarta posición en el clasificatorio final. Tras una sólida temporada regular y una primera ronda de playoffs resuelta ante Team Vitality, el equipo no ha encontrado las respuestas necesarias para superar a un Karmine Corp en plena forma.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "KC se medirá a Movistar KOI en la Final del LB el 6 de junio" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Karmine Corp se enfrentará ahora a Movistar KOI en la Final del Bracket Inferior el 6 de junio de 2026. MKOI cayó del bracket superior el 25 de mayo tras perder 3-2 ante G2 Esports en la Final del UB. El ganador de esta Final del LB se medirá a G2 Esports por el título del LEC Spring 2026 y una plaza en el Mid-Season Invitational.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Un 3-0 con Yike dominando en tres campeones diferentes convierte a Karmine Corp en el equipo más peligroso que aún lucha desde el bracket inferior. El 6 de junio ante Movistar KOI es la cita imprescindible de estos playoffs.",
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
