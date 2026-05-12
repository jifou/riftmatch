import type { MigrationModule } from './runner'

export const id = '030-news-lec-spring2026-playoffs'
export const description = 'Article LEC Spring 2026 — Bracket playoffs annoncé, Vitality vs KOI et KC vs G2 le 23-24 mai'

const DISCLOSURE_DATE = '2026-05-12T08:00:00.000Z'

const articles = [
  // ── FR ─────────────────────────────────────────────────────────────────────
  {
    title: 'LEC Spring 2026 : le bracket des playoffs est fixé — Vitality vs KOI, KC vs G2',
    slug: 'lec-spring-2026-playoffs-bracket-annonce',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage:
      'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/2eeffc27c7d611657950840ad3f7b8086b367a20-1920x1080.jpg',
    excerpt:
      'Le bracket des playoffs LEC Spring 2026 est officiel : Team Vitality affronte Movistar KOI, Karmine Corp défie G2 Esports. Matches en double élimination à partir du 23 mai.',
    sourceUrl: 'https://lolesports.com/tournament/115548424304940735',
    tags: [
      { tag: 'LEC' },
      { tag: 'Esports' },
      { tag: 'Playoffs' },
      { tag: 'Vitality' },
      { tag: 'Karmine Corp' },
      { tag: 'G2' },
      { tag: 'Spring 2026' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "La phase régulière du LEC Spring Split 2026 est terminée. Les six équipes qualifiées connaissent désormais leur adversaire de premier tour : le bracket de double élimination est officiel et les hostilités débutent le 23 mai à 17h00 CEST.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Le bracket complet' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Les quatre meilleures équipes entrent directement dans l'Upper Bracket, tandis que GIANTX (5e) et Natus Vincere (6e) commencent dans le Lower Bracket.",
          },
        ],
      },
      {
        type: 'h4',
        children: [{ text: 'Upper Bracket — Demi-finales' }],
      },
      {
        type: 'ul',
        children: [
          {
            type: 'li',
            children: [{ text: '📅 23 mai · 17h00 CEST : Team Vitality (1er) vs Movistar KOI (4e)' }],
          },
          {
            type: 'li',
            children: [{ text: '📅 24 mai · 17h00 CEST : Karmine Corp (2e) vs G2 Esports (3e)' }],
          },
        ],
      },
      {
        type: 'h4',
        children: [{ text: 'Upper Bracket — Finale' }],
      },
      {
        type: 'ul',
        children: [
          {
            type: 'li',
            children: [{ text: '📅 25 mai : Upper Bracket Final (vainqueurs des deux demi-finales)' }],
          },
        ],
      },
      {
        type: 'h4',
        children: [{ text: 'Lower Bracket — Quarts de finale' }],
      },
      {
        type: 'ul',
        children: [
          {
            type: 'li',
            children: [{ text: '📅 30 mai : Lower Bracket QF — TBD vs Natus Vincere' }],
          },
          {
            type: 'li',
            children: [{ text: '📅 31 mai : Lower Bracket QF — TBD vs GIANTX' }],
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "L'affiche de la semaine : Karmine Corp vs G2 Esports" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le choc le plus attendu de ces demi-finales oppose Karmine Corp — deuxième de la saison régulière et déjà qualifiée pour le MSI 2026 — à G2 Esports, organisation la plus titrée de l'histoire du LEC. Un BO5 entre deux formations à forte identité, qui promet d'être le match le plus électrique de la première semaine de playoffs.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Team Vitality, grande favorite face à Movistar KOI' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Team Vitality aborde ces playoffs en position de force : première du classement après sept semaines dominées, elle entre dans l'Upper Bracket avec l'avantage du premier seed. Movistar KOI, quatrième de la saison régulière, devra réaliser un exploit pour faire tomber le favori désigné dès l'entrée.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Format double élimination' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Les playoffs LEC Spring 2026 se jouent en double élimination à six équipes. Les perdants de l'Upper Bracket ne sont pas éliminés : ils retombent dans le Lower Bracket et gardent leur chance jusqu'à la grande finale. Seule une défaite dans le Lower Bracket met fin à l'aventure.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Les playoffs LEC Spring 2026 débutent le 23 mai sur lolesports.com. Toutes les rencontres sont en BO5 à partir de la demi-finale de l\'Upper Bracket.',
          },
        ],
      },
    ],
  },

  // ── EN ─────────────────────────────────────────────────────────────────────
  {
    title: 'LEC Spring 2026: Playoffs bracket set — Vitality vs KOI, KC vs G2',
    slug: 'lec-spring-2026-playoffs-bracket-confirmed-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage:
      'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/2eeffc27c7d611657950840ad3f7b8086b367a20-1920x1080.jpg',
    excerpt:
      'The LEC Spring 2026 playoffs bracket is confirmed: Team Vitality face Movistar KOI, Karmine Corp take on G2 Esports. Matches kick off May 23 in a double elimination format.',
    sourceUrl: 'https://lolesports.com/tournament/115548424304940735',
    tags: [
      { tag: 'LEC' },
      { tag: 'Esports' },
      { tag: 'Playoffs' },
      { tag: 'Vitality' },
      { tag: 'Karmine Corp' },
      { tag: 'G2' },
      { tag: 'Spring 2026' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'The LEC Spring 2026 regular season is over. Six teams are locked into the double elimination bracket, with the first matches set for May 23 at 17:00 CEST.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Full bracket breakdown' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'The top four seeds enter the Upper Bracket directly, while GIANTX (5th) and Natus Vincere (6th) start in the Lower Bracket.',
          },
        ],
      },
      {
        type: 'h4',
        children: [{ text: 'Upper Bracket Semifinals' }],
      },
      {
        type: 'ul',
        children: [
          {
            type: 'li',
            children: [{ text: '📅 May 23 · 17:00 CEST: Team Vitality (1st) vs Movistar KOI (4th)' }],
          },
          {
            type: 'li',
            children: [{ text: '📅 May 24 · 17:00 CEST: Karmine Corp (2nd) vs G2 Esports (3rd)' }],
          },
        ],
      },
      {
        type: 'h4',
        children: [{ text: 'Upper Bracket Final' }],
      },
      {
        type: 'ul',
        children: [
          {
            type: 'li',
            children: [{ text: '📅 May 25: Upper Bracket Final (both semifinal winners)' }],
          },
        ],
      },
      {
        type: 'h4',
        children: [{ text: 'Lower Bracket Quarterfinals' }],
      },
      {
        type: 'ul',
        children: [
          {
            type: 'li',
            children: [{ text: '📅 May 30: Lower Bracket QF — TBD vs Natus Vincere' }],
          },
          {
            type: 'li',
            children: [{ text: '📅 May 31: Lower Bracket QF — TBD vs GIANTX' }],
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'The headline matchup: Karmine Corp vs G2 Esports' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The most anticipated semifinal pits Karmine Corp — second in the regular season standings and already MSI 2026 bound — against G2 Esports, the most decorated organisation in LEC history. A BO5 between two high-identity rosters, this is the match that fans have been waiting for since the bracket dropped.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Team Vitality: clear favourites against Movistar KOI' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Team Vitality enter the playoffs as the undisputed regular-season champions, holding the first seed and a direct path through the Upper Bracket. Movistar KOI, finishing fourth, will need to pull off a significant upset to knock out the competition\'s frontrunners right out of the gate.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Double elimination format explained' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'The LEC Spring 2026 playoffs use a six-team double elimination bracket. Losing in the Upper Bracket sends a team to the Lower Bracket rather than eliminating them. Every series from the Upper Bracket Semifinals onwards is a best-of-five.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'LEC Spring 2026 Playoffs begin May 23 on lolesports.com. All matches are BO5 from the Upper Bracket Semifinals onward.',
          },
        ],
      },
    ],
  },

  // ── ES ─────────────────────────────────────────────────────────────────────
  {
    title: 'LEC Spring 2026: Bracket de playoffs confirmado — Vitality vs KOI, KC vs G2',
    slug: 'lec-spring-2026-playoffs-bracket-confirmado-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage:
      'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/c5b5258034a7e4c34fc360db44a5af4703ec9d9b-1920x1080.jpg',
    excerpt:
      'El bracket de playoffs del LEC Spring 2026 está confirmado: Team Vitality se enfrenta a Movistar KOI, Karmine Corp desafía a G2 Esports. Los partidos arrancan el 23 de mayo en doble eliminación.',
    sourceUrl: 'https://lolesports.com/tournament/115548424304940735',
    tags: [
      { tag: 'LEC' },
      { tag: 'Esports' },
      { tag: 'Playoffs' },
      { tag: 'Vitality' },
      { tag: 'Karmine Corp' },
      { tag: 'G2' },
      { tag: 'Spring 2026' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'La fase regular del LEC Spring Split 2026 ha llegado a su fin. Los seis equipos clasificados ya conocen a su rival de primera ronda: el bracket de doble eliminación es oficial y el torneo arranca el 23 de mayo a las 17:00 CEST.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'El bracket completo' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Los cuatro mejores equipos entran directamente al Upper Bracket, mientras que GIANTX (5º) y Natus Vincere (6º) comienzan en el Lower Bracket.',
          },
        ],
      },
      {
        type: 'h4',
        children: [{ text: 'Upper Bracket — Semifinales' }],
      },
      {
        type: 'ul',
        children: [
          {
            type: 'li',
            children: [{ text: '📅 23 may · 17:00 CEST: Team Vitality (1º) vs Movistar KOI (4º)' }],
          },
          {
            type: 'li',
            children: [{ text: '📅 24 may · 17:00 CEST: Karmine Corp (2º) vs G2 Esports (3º)' }],
          },
        ],
      },
      {
        type: 'h4',
        children: [{ text: 'Upper Bracket — Final' }],
      },
      {
        type: 'ul',
        children: [
          {
            type: 'li',
            children: [{ text: '📅 25 may: Upper Bracket Final (ganadores de las dos semifinales)' }],
          },
        ],
      },
      {
        type: 'h4',
        children: [{ text: 'Lower Bracket — Cuartos de final' }],
      },
      {
        type: 'ul',
        children: [
          {
            type: 'li',
            children: [{ text: '📅 30 may: Lower Bracket QF — TBD vs Natus Vincere' }],
          },
          {
            type: 'li',
            children: [{ text: '📅 31 may: Lower Bracket QF — TBD vs GIANTX' }],
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'El duelo estrella: Karmine Corp vs G2 Esports' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'El enfrentamiento más esperado de las semifinales enfrenta a Karmine Corp —segunda en la clasificación y ya clasificada para el MSI 2026— contra G2 Esports, la organización más laureada de la historia del LEC. Un BO5 entre dos equipos con mucha identidad que promete ser el partido más explosivo de la primera semana de playoffs.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Team Vitality, gran favorita ante Movistar KOI' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Team Vitality llega a los playoffs como reina indiscutible de la temporada regular, con el primer seed y acceso directo al Upper Bracket. Movistar KOI, cuarta clasificada, tendrá que superar a la gran favorita de la competición para avanzar, algo que el público español espera con ilusión.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Formato de doble eliminación' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Los playoffs del LEC Spring 2026 utilizan un formato de doble eliminación con seis equipos. Perder en el Upper Bracket no elimina al equipo: cae al Lower Bracket y mantiene su oportunidad hasta la gran final. Cada serie desde las semifinales del Upper Bracket es al mejor de cinco mapas.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Los playoffs LEC Spring 2026 comienzan el 23 de mayo en lolesports.com. Todos los partidos son al mejor de cinco desde las semifinales del Upper Bracket.',
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
  console.log('✅ Migration 030 terminée — LEC Spring 2026 Playoffs bracket')
}
