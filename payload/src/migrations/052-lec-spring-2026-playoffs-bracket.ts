import type { MigrationModule } from './runner'

export const id = '052-lec-spring-2026-playoffs-bracket'
export const description = 'LEC Spring 2026 — bracket playoffs fixé, Vitality 1re, KC vs G2 en UB'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-18T08:00:00.000Z'

const articles = [
  {
    title: 'LEC Spring 2026 : le bracket des playoffs est fixé, KC vs G2 en affiche',
    slug: 'lec-spring-2026-playoffs-bracket-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      'La saison régulière du LEC Spring 2026 s\'est achevée à Madrid. Vitality termine 1ère avec 8 victoires pour 1 défaite et choisit d\'affronter MKOI. Karmine Corp et G2 s\'offrent le choc des demies de bracket supérieur.',
    sourceUrl: 'https://lolesports.com/tournament/115548424304940735',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "La saison régulière du LEC Spring 2026 a pris fin lors du Roadtrip de Madrid (semaine 7), et les six équipes qualifiées pour les playoffs sont désormais connues. Team Vitality s'est imposée en tête du classement avec un bilan record de 8 victoires pour une seule défaite, s'assurant ainsi la première tête de série et le privilège de choisir son adversaire en bracket supérieur.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Classement final — qui est qualifié ?' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le top 4 du classement — Vitality (1re), Karmine Corp (2e), G2 Esports (3e) et Movistar KOI (4e) — rejoint directement le bracket supérieur. Natus Vincere (5e) et GIANTX (6e) démarrent quant à eux en bracket inférieur, où ils attendront les perdants du premier tour de l'upper bracket.",
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "Quatre équipes ne verront pas les playoffs : Fnatic, SK Gaming, Shifters et Team Heretics terminent respectivement aux places 7 à 10 et voient leur saison s'arrêter. Pour Fnatic, pourtant finaliste du LEC Versus en 2025, c'est une désillusion après un Sprint 2026 décevant.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Le bracket : KC vs G2, le choc de l'upper bracket" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Forte de sa première place, Team Vitality a exercé son droit de choisir son adversaire et a désigné Movistar KOI. Le match ouvre les playoffs le vendredi 23 mai à 17h CET. Karmine Corp et G2 Esports s'affrontent dès le samedi 24 mai dans ce qui promet d'être le duel de la semaine : deux équipes au style offensif marqué, des supporters enflammés des deux côtés.",
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "Les perdants de ces deux demies plongeront en bracket inférieur (lower bracket), où ils retrouveront NAVI et GIANTX les 30 et 31 mai. L'ensemble des matchs se joue en format best-of-5.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Enjeux : MSI et Esports World Cup au bout' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Les deux finalistes du LEC Spring 2026 décrocheront leur billet pour le Mid-Season Invitational (MSI) 2026 ainsi que pour l'Esports World Cup 2026. Le Grand Final est prévu pour le 7 juin, avec un format double élimination qui garantit plusieurs duels palpitants avant la grande finale.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Le LEC Spring 2026 est à son niveau le plus compétitif depuis des années. Vitality semble inarrêtable, mais KC et G2 ont montré tout l'été qu'ils pouvaient renverser n'importe quelle équipe. Cette postseason s'annonce mémorable.",
          },
        ],
      },
    ],
  },
  {
    title: 'LEC Spring 2026 Playoffs Bracket Set: KC vs G2 Headlines Upper Bracket',
    slug: 'lec-spring-2026-playoffs-bracket-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      'The LEC Spring 2026 regular season wrapped up in Madrid. Vitality secured first place with an 8-1 record, picking MKOI as their upper bracket opponent. Karmine Corp vs G2 is the must-watch clash of round one.',
    sourceUrl: 'https://lolesports.com/tournament/115548424304940735',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "The LEC Spring 2026 regular season came to an end during Week 7's Madrid Roadtrip, and all six playoff teams are now set. Team Vitality dominated the season with an impressive 8-1 record, claiming the first seed and the right to choose their upper bracket opponent heading into the postseason.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Final Standings — Who Made It?' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The top four teams in the standings — Vitality (1st), Karmine Corp (2nd), G2 Esports (3rd), and Movistar KOI (4th) — enter directly into the upper bracket. Natus Vincere (5th) and GIANTX (6th) start in the lower bracket, waiting for the upper bracket's first-round losers.",
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "Fnatic, SK Gaming, Shifters, and Team Heretics failed to qualify for the playoffs, ending their Spring 2026 campaign. Fnatic's absence is particularly notable, given the organization's historic playoff presence in the LEC.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'The Bracket: KC vs G2 Is the Blockbuster Matchup' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'As the number one seed, Vitality exercised their pick and selected Movistar KOI as their upper bracket opponent on May 23 at 5 PM CET. That left Karmine Corp and G2 Esports facing off on May 24 — arguably the most anticipated matchup of the first round, as both teams boast aggressive playstyles and passionate fanbases.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'The losers of those upper bracket semifinals drop into the lower bracket on May 30 and 31, where NAVI and GIANTX await. All matches are played in a best-of-five format.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "What's at Stake: MSI and Esports World Cup Spots" }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'The top two finishers from the LEC Spring 2026 playoffs will earn spots at both the 2026 Mid-Season Invitational (MSI) and the Esports World Cup (EWC) 2026. The Grand Final is scheduled for June 7, capping off a three-week double elimination run.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Vitality look like the team to beat after a near-perfect regular season, but both Karmine Corp and G2 have proven they can take down anyone on their day. The LEC Spring playoffs could be the most entertaining in recent memory.',
          },
        ],
      },
    ],
  },
  {
    title: 'LEC Spring 2026: Bracket de playoffs definido, KC vs G2 en la upper bracket',
    slug: 'lec-spring-2026-playoffs-bracket-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      'La temporada regular del LEC Spring 2026 finalizó en Madrid. Vitality terminó primera con un récord de 8-1 y eligió a MKOI como rival en la upper bracket. Karmine Corp vs G2 será el duelo estelar del primer turno.',
    sourceUrl: 'https://lolesports.com/tournament/115548424304940735',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'La temporada regular del LEC Spring 2026 llegó a su fin durante el Roadtrip de Madrid en la semana 7. Las seis plazas de playoffs ya están asignadas, y Team Vitality se coronó como el equipo número uno con un brillante balance de 8 victorias y solo 1 derrota, asegurándose la primera cabeza de serie.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Clasificación final — ¿Quién pasó a playoffs?' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Los cuatro primeros del ranking — Vitality (1º), Karmine Corp (2º), G2 Esports (3º) y Movistar KOI (4º) — entran directamente en la upper bracket. Natus Vincere (5º) y GIANTX (6º) comenzarán en la lower bracket, a la espera de los perdedores de la primera ronda superior.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Fnatic, SK Gaming, Shifters y Team Heretics no lograron clasificarse y dan por terminada su participación en el split de primavera. La eliminación de Fnatic es especialmente llamativa, dado el histórico del equipo en los playoffs del LEC.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'El bracket: KC vs G2 es el duelo más esperado' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Como primera cabeza de serie, Vitality eligió a Movistar KOI como rival en los semifinales de la upper bracket el 23 de mayo a las 17:00 CET. Esto dejó enfrentados a Karmine Corp y G2 Esports el 24 de mayo, el choque más llamativo de la primera ronda dado el estilo agresivo y la pasión de ambas aficiones.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Los perdedores de estos cruces de upper bracket caerán a la lower bracket los días 30 y 31 de mayo, donde NAVI y GIANTX estarán esperando. Todos los enfrentamientos se juegan al mejor de cinco partidas.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Lo que está en juego: MSI y Esports World Cup' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Los dos finalistas del LEC Spring 2026 obtendrán plaza en el Mid-Season Invitational (MSI) 2026 y en el Esports World Cup (EWC) 2026. La Gran Final está programada para el 7 de junio, poniendo el broche a tres semanas de eliminación doble.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Vitality parece el equipo a batir tras una temporada regular casi perfecta, pero KC y G2 han demostrado que pueden ganar a cualquiera en su mejor día. Estos playoffs prometen ser históricos.',
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
