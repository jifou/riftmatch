import type { MigrationModule } from './runner'

export const id = '030-news-lec-spring2026-playoffs-bracket'
export const description = 'Article LEC Spring 2026 — Bracket playoffs annoncé : Vitality choisit MKOI, KC vs G2'

const DISCLOSURE_DATE = '2026-05-11T10:00:00.000Z'

const articles = [
  // ── FR ─────────────────────────────────────────────────────────────────────
  {
    title: 'LEC Spring 2026 : le bracket playoffs est connu — KC vs G2, Vitality choisit MKOI',
    slug: 'lec-spring-2026-playoffs-bracket-kc-g2-vitality-mkoi',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/2eeffc27c7d611657950840ad3f7b8086b367a20-1920x1080.jpg',
    excerpt: 'Le bracket des playoffs LEC Spring 2026 est officiel. Team Vitality, premier seed, choisit Movistar KOI et propulse Karmine Corp face à G2 Esports dès le premier tour. Les playoffs débutent le 23 mai.',
    sourceUrl: 'https://esports-news.co.uk/2026/05/11/lec-spring-playoffs-bracket-karmine-corp-g2-vitality-mko/',
    tags: [
      { tag: 'LEC' }, { tag: 'Esports' }, { tag: 'Playoffs' },
      { tag: 'Vitality' }, { tag: 'Karmine Corp' }, { tag: 'G2 Esports' },
      { tag: 'Spring 2026' },
    ],
    content: [
      {
        type: 'p',
        children: [{ text: 'La phase régulière du LEC Spring Split 2026 est terminée. Six équipes se sont qualifiées pour la phase finale en double-élimination, et le bracket est désormais officiel. Team Vitality, première du classement, a exercé son droit de choisir son adversaire : elle affrontera Movistar KOI dès le 23 mai.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Le choix de Vitality : MKOI plutôt que G2' }],
      },
      {
        type: 'p',
        children: [{ text: 'Avec l\'avantage du premier seed, Team Vitality avait la main pour désigner son adversaire parmi les équipes de l\'Upper Bracket. Le choix s\'est porté sur Movistar KOI (4ème seed), laissant ainsi Karmine Corp (2ème) face à G2 Esports (3ème) dans un choc qui promet d\'être électrique.' }],
      },
      {
        type: 'p',
        children: [{ text: 'Ce n\'est pas anodin : G2 avait battu Karmine Corp 3-2 en grande finale du LEC Versus 2026, le tournoi qui a remplacé le Winter Split cette année. La rivalité entre les deux organisations européennes est donc plus vive que jamais à l\'approche de ces playoffs.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Le bracket complet' }],
      },
      {
        type: 'p',
        children: [{ text: 'Upper Bracket (demi-finales) :' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: '🔵 Vitality (seed 1) vs Movistar KOI (seed 4) — vendredi 23 mai à 17h00 CEST' }] },
          { type: 'li', children: [{ text: '🔴 Karmine Corp (seed 2) vs G2 Esports (seed 3) — samedi 24 mai à 17h00 CEST' }] },
        ],
      },
      {
        type: 'p',
        children: [{ text: 'Lower Bracket (1er tour) :' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: 'NAVI (seed 5) vs premier perdant UB — vendredi 30 mai' }] },
          { type: 'li', children: [{ text: 'GiantX (seed 6) vs deuxième perdant UB — samedi 31 mai' }] },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Le calendrier complet' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: '23 mai — UB Demi 1 : Vitality vs MKOI (17h00 CEST)' }] },
          { type: 'li', children: [{ text: '24 mai — UB Demi 2 : Karmine Corp vs G2 (17h00 CEST)' }] },
          { type: 'li', children: [{ text: '30 mai — LB Tour 1 : NAVI vs perdant UB1' }] },
          { type: 'li', children: [{ text: '31 mai — LB Tour 1 : GiantX vs perdant UB2' }] },
          { type: 'li', children: [{ text: '1er juin — LB Demi-finale' }] },
          { type: 'li', children: [{ text: '6 juin — LB Finale' }] },
          { type: 'li', children: [{ text: '7 juin — Grande Finale' }] },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Format : double-élimination, tout en BO5' }],
      },
      {
        type: 'p',
        children: [{ text: 'Les six équipes s\'affrontent dans un format double-élimination. Toutes les rencontres de playoffs sont disputées en BO5 (best-of-five), ce qui signifie qu\'une équipe doit accumuler trois victoires pour avancer. Une défaite en Upper Bracket offre une seconde chance via le Lower Bracket.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Les équipes éliminées en phase régulière' }],
      },
      {
        type: 'p',
        children: [{ text: 'Quatre équipes manquent les playoffs : Fnatic, SK Gaming, Shifters et Team Heretics. L\'élimination de Fnatic est sans doute la plus marquante après leur parcours en dents de scie tout au long du split. Ces équipes ne retrouveront les Rift qu\'en Summer Split.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'Les playoffs LEC Spring 2026 sont diffusés en direct sur lolesports.com. À partir du 23 mai, six équipes se battront pour le titre européen et une qualification au MSI 2026.' }],
      },
    ],
  },

  // ── EN ─────────────────────────────────────────────────────────────────────
  {
    title: 'LEC Spring 2026 playoffs bracket revealed: KC vs G2, Vitality picks MKOI',
    slug: 'lec-spring-2026-playoffs-bracket-kc-g2-vitality-mkoi-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/2eeffc27c7d611657950840ad3f7b8086b367a20-1920x1080.jpg',
    excerpt: 'The LEC Spring 2026 playoffs bracket is set. First seed Team Vitality chose Movistar KOI as their opponent, sending Karmine Corp into a blockbuster clash with G2 Esports. Playoffs start May 23.',
    sourceUrl: 'https://esports-news.co.uk/2026/05/11/lec-spring-playoffs-bracket-karmine-corp-g2-vitality-mko/',
    tags: [
      { tag: 'LEC' }, { tag: 'Esports' }, { tag: 'Playoffs' },
      { tag: 'Vitality' }, { tag: 'Karmine Corp' }, { tag: 'G2 Esports' },
      { tag: 'Spring 2026' },
    ],
    content: [
      {
        type: 'p',
        children: [{ text: 'The LEC Spring Split 2026 regular season is over. Six teams earned their spot in the double-elimination playoffs, and the bracket is now locked. Team Vitality, who finished first in the standings, exercised their seeding advantage and selected their opponent: they will face Movistar KOI starting May 23.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Vitality\'s pick: MKOI over G2' }],
      },
      {
        type: 'p',
        children: [{ text: 'As the first seed, Team Vitality had the power to choose their upper bracket opponent from the remaining qualified teams. They opted for Movistar KOI (4th seed), leaving Karmine Corp (2nd) to face G2 Esports (3rd) in what is shaping up to be one of the most anticipated early-playoff series in recent LEC memory.' }],
      },
      {
        type: 'p',
        children: [{ text: 'The KC vs G2 matchup carries significant weight: G2 defeated Karmine Corp 3-2 in the LEC Versus 2026 grand final — the tournament that replaced the Winter Split this year. That rivalry is far from settled, making this upper bracket semifinal a must-watch.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Full bracket breakdown' }],
      },
      {
        type: 'p',
        children: [{ text: 'Upper Bracket (Semifinals):' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: '🔵 Vitality (seed 1) vs Movistar KOI (seed 4) — Friday May 23 at 5:00 PM CEST' }] },
          { type: 'li', children: [{ text: '🔴 Karmine Corp (seed 2) vs G2 Esports (seed 3) — Saturday May 24 at 5:00 PM CEST' }] },
        ],
      },
      {
        type: 'p',
        children: [{ text: 'Lower Bracket (Round 1):' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: 'NAVI (seed 5) vs first UB loser — Friday May 30' }] },
          { type: 'li', children: [{ text: 'GiantX (seed 6) vs second UB loser — Saturday May 31' }] },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Full schedule' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: 'May 23 — UB Semi 1: Vitality vs MKOI (5 PM CEST)' }] },
          { type: 'li', children: [{ text: 'May 24 — UB Semi 2: Karmine Corp vs G2 (5 PM CEST)' }] },
          { type: 'li', children: [{ text: 'May 30 — LB Round 1: NAVI vs UB1 loser' }] },
          { type: 'li', children: [{ text: 'May 31 — LB Round 1: GiantX vs UB2 loser' }] },
          { type: 'li', children: [{ text: 'June 1 — LB Semifinal' }] },
          { type: 'li', children: [{ text: 'June 6 — LB Final' }] },
          { type: 'li', children: [{ text: 'June 7 — Grand Final' }] },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Format: double-elimination, all BO5' }],
      },
      {
        type: 'p',
        children: [{ text: 'The six-team double-elimination bracket means every match is a best-of-five. A loss in the upper bracket is not the end — teams drop into the lower bracket for a second chance. Only a loss in the lower bracket eliminates a team entirely.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Teams eliminated in the regular season' }],
      },
      {
        type: 'p',
        children: [{ text: 'Four teams failed to make the cut: Fnatic, SK Gaming, Shifters and Team Heretics. Fnatic\'s absence is the most notable given their history, following an inconsistent split that left them outside the top six. They will return in the Summer Split.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'LEC Spring 2026 Playoffs begin May 23 on lolesports.com. Six teams compete for the European title and a seed at MSI 2026.' }],
      },
    ],
  },

  // ── ES ─────────────────────────────────────────────────────────────────────
  {
    title: 'LEC Spring 2026: bracket de playoffs revelado — KC vs G2, Vitality elige MKOI',
    slug: 'lec-spring-2026-playoffs-bracket-kc-g2-vitality-mkoi-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/c5b5258034a7e4c34fc360db44a5af4703ec9d9b-1920x1080.jpg',
    excerpt: 'El bracket de los playoffs de LEC Spring 2026 ya es oficial. Team Vitality, primer seed, eligió a Movistar KOI y enfrentará a Karmine Corp contra G2 Esports desde el primer round. Los playoffs arrancan el 23 de mayo.',
    sourceUrl: 'https://esports-news.co.uk/2026/05/11/lec-spring-playoffs-bracket-karmine-corp-g2-vitality-mko/',
    tags: [
      { tag: 'LEC' }, { tag: 'Esports' }, { tag: 'Playoffs' },
      { tag: 'Vitality' }, { tag: 'Karmine Corp' }, { tag: 'G2 Esports' },
      { tag: 'Spring 2026' },
    ],
    content: [
      {
        type: 'p',
        children: [{ text: 'La fase regular del LEC Spring Split 2026 ha llegado a su fin. Seis equipos se han clasificado para los playoffs de doble eliminación, y el bracket ya está definido. Team Vitality, líder del torneo, ejerció su derecho de selección como primer seed y eligió a Movistar KOI para enfrentarse el 23 de mayo.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'La elección de Vitality: MKOI en lugar de G2' }],
      },
      {
        type: 'p',
        children: [{ text: 'Como primer seed, Team Vitality tenía la ventaja de elegir rival en el Upper Bracket. La elección recayó en Movistar KOI (4.º seed), dejando a Karmine Corp (2.º) frente a G2 Esports (3.º) en lo que promete ser uno de los enfrentamientos más esperados de los playoffs.' }],
      },
      {
        type: 'p',
        children: [{ text: 'El duelo KC vs G2 tiene historia reciente: G2 derrotó a Karmine Corp 3-2 en la gran final del LEC Versus 2026, el torneo que sustituyó al Winter Split esta temporada. La rivalidad entre ambas organizaciones está más viva que nunca.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'El bracket completo' }],
      },
      {
        type: 'p',
        children: [{ text: 'Upper Bracket (semifinales):' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: '🔵 Vitality (seed 1) vs Movistar KOI (seed 4) — viernes 23 de mayo a las 17:00 CEST' }] },
          { type: 'li', children: [{ text: '🔴 Karmine Corp (seed 2) vs G2 Esports (seed 3) — sábado 24 de mayo a las 17:00 CEST' }] },
        ],
      },
      {
        type: 'p',
        children: [{ text: 'Lower Bracket (primera ronda):' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: 'NAVI (seed 5) vs primer eliminado del UB — viernes 30 de mayo' }] },
          { type: 'li', children: [{ text: 'GiantX (seed 6) vs segundo eliminado del UB — sábado 31 de mayo' }] },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Calendario completo' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: '23 mayo — UB Semi 1: Vitality vs MKOI (17h00 CEST)' }] },
          { type: 'li', children: [{ text: '24 mayo — UB Semi 2: Karmine Corp vs G2 (17h00 CEST)' }] },
          { type: 'li', children: [{ text: '30 mayo — LB Ronda 1: NAVI vs perdedor UB1' }] },
          { type: 'li', children: [{ text: '31 mayo — LB Ronda 1: GiantX vs perdedor UB2' }] },
          { type: 'li', children: [{ text: '1 junio — LB Semifinal' }] },
          { type: 'li', children: [{ text: '6 junio — LB Final' }] },
          { type: 'li', children: [{ text: '7 junio — Gran Final' }] },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Formato: doble eliminación, todo en BO5' }],
      },
      {
        type: 'p',
        children: [{ text: 'El bracket de doble eliminación implica que todos los enfrentamientos son al mejor de cinco partidas. Una derrota en el Upper Bracket no supone la eliminación: los equipos caen al Lower Bracket con una segunda oportunidad. Solo una derrota en el Lower Bracket elimina definitivamente a un equipo.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Equipos eliminados en fase regular' }],
      },
      {
        type: 'p',
        children: [{ text: 'Cuatro equipos se quedan fuera de los playoffs: Fnatic, SK Gaming, Shifters y Team Heretics. La eliminación de Fnatic es la más llamativa, dado su histórico en la competición europea y su irregular temporada. Todos ellos volverán en el Summer Split.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'Los playoffs del LEC Spring 2026 comienzan el 23 de mayo en lolesports.com. Seis equipos lucharán por el título europeo y una plaza en el MSI 2026.' }],
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
  console.log('✅ Migration 030 terminée — bracket playoffs LEC Spring 2026')
}
