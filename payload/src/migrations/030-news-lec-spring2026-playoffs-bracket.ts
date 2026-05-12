import type { MigrationModule } from './runner'

export const id = '030-news-lec-spring2026-playoffs-bracket'
export const description = 'Article LEC Spring 2026 — Bracket playoffs révélé : Vitality vs MKOI, KC vs G2'

const DISCLOSURE_DATE = '2026-05-12T08:00:00.000Z'

const articles = [
  // ── FR ─────────────────────────────────────────────────────────────────────
  {
    title: 'LEC Spring 2026 : le bracket playoffs est révélé — Karmine Corp vs G2 en demi-finale',
    slug: 'lec-spring-2026-playoffs-bracket-reveal',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/2eeffc27c7d611657950840ad3f7b8086b367a20-1920x1080.jpg',
    excerpt: 'Le bracket des playoffs LEC Spring 2026 est officiel. Team Vitality affronte MKOI, tandis que Karmine Corp retrouve G2 Esports en demi-finale de l\'Upper Bracket le 23-24 mai.',
    sourceUrl: 'https://lolesports.com/tournament/115548424304940735',
    tags: [
      { tag: 'LEC' }, { tag: 'Esports' }, { tag: 'Karmine Corp' },
      { tag: 'G2 Esports' }, { tag: 'Vitality' }, { tag: 'Playoffs' }, { tag: 'Spring 2026' },
    ],
    content: [
      {
        type: 'p',
        children: [{ text: 'Le bracket officiel des playoffs LEC Spring 2026 a été dévoilé le 11 mai. Six équipes s\'affrontent dans un format double élimination, avec des demi-finales d\'Upper Bracket prévues les 23 et 24 mai pour des series au meilleur des cinq manches.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Upper Bracket : Vitality vs MKOI, et le choc Karmine Corp vs G2' }],
      },
      {
        type: 'p',
        children: [{ text: 'Team Vitality, première seed du split avec un record exemplaire, a exercé son droit de choisir son adversaire et a désigné Movistar KOI. Le duel ibéro-européen s\'annonce solide, MKOI ayant terminé quatrième avec de belles performances collectives.' }],
      },
      {
        type: 'p',
        children: [{ text: 'La série la plus attendue oppose Karmine Corp (2ème seed) à G2 Esports (3ème seed). Les deux équipes s\'étaient déjà affrontées en LEC Versus 2026, où G2 avait pris le dessus en grande finale sur un score de 3-2. La revanche est officiellement lancée.' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: '🗓️ Vendredi 23 mai — Team Vitality vs Movistar KOI (UB Semis, BO5, 17h CET)' }] },
          { type: 'li', children: [{ text: '🗓️ Samedi 24 mai — Karmine Corp vs G2 Esports (UB Semis, BO5, 17h CET)' }] },
          { type: 'li', children: [{ text: '🗓️ Dimanche 25 mai — Finale Upper Bracket (BO5)' }] },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Lower Bracket : NAVI et GIANTX entrent en scène' }],
      },
      {
        type: 'p',
        children: [{ text: 'Les deux équipes en cinquième et sixième positions — GIANTX et NAVI — intègrent directement le Lower Bracket. Elles affronteront les perdants des demi-finales d\'Upper Bracket dès le weekend suivant, les 30 et 31 mai.' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: '🗓️ 30 mai — NAVI vs perdant UB1 (LB Round 1, BO5)' }] },
          { type: 'li', children: [{ text: '🗓️ 31 mai — GIANTX vs perdant UB2 (LB Round 1, BO5)' }] },
          { type: 'li', children: [{ text: '🗓️ 1er juin — Demi-finale Lower Bracket (BO5)' }] },
          { type: 'li', children: [{ text: '🗓️ 6 juin — Finale Lower Bracket (BO5)' }] },
          { type: 'li', children: [{ text: '🗓️ 7 juin — Grande Finale LEC Spring 2026 (BO5)' }] },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Favoris et enjeux' }],
      },
      {
        type: 'p',
        children: [{ text: 'Team Vitality part avec la pression du favori absolu. Karmine Corp voudra prendre sa revanche sur G2 après la finale amère du LEC Versus. G2, de son côté, montait en puissance en fin de saison régulière avec notamment une victoire 2-0 sur GIANTX. La finale Grand Final du 7 juin promet d\'être un moment marquant pour la scène européenne.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'Les playoffs LEC Spring 2026 sont diffusés en direct sur lolesports.com et les chaînes officielles LEC. Tous les matchs sont en BO5.' }],
      },
    ],
  },

  // ── EN ─────────────────────────────────────────────────────────────────────
  {
    title: 'LEC Spring 2026 Playoffs bracket revealed: Karmine Corp vs G2 in Upper Bracket semifinals',
    slug: 'lec-spring-2026-playoffs-bracket-reveal-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/2eeffc27c7d611657950840ad3f7b8086b367a20-1920x1080.jpg',
    excerpt: 'The LEC Spring 2026 Playoffs bracket is set. Team Vitality faces MKOI while Karmine Corp rematch G2 Esports in the Upper Bracket Semifinals on May 23-24.',
    sourceUrl: 'https://lolesports.com/tournament/115548424304940735',
    tags: [
      { tag: 'LEC' }, { tag: 'Esports' }, { tag: 'Karmine Corp' },
      { tag: 'G2 Esports' }, { tag: 'Vitality' }, { tag: 'Playoffs' }, { tag: 'Spring 2026' },
    ],
    content: [
      {
        type: 'p',
        children: [{ text: 'The official LEC Spring 2026 Playoffs bracket was unveiled on May 11. Six teams will compete in a double-elimination format, with Upper Bracket Semifinals scheduled for May 23-24 in best-of-five series.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Upper Bracket: Vitality vs MKOI, and the marquee Karmine Corp vs G2 clash' }],
      },
      {
        type: 'p',
        children: [{ text: 'Team Vitality, the first seed after a dominant regular season, used their seeding advantage to pick Movistar KOI as their Upper Bracket opponent. MKOI finished fourth and have shown strong collective form throughout the split.' }],
      },
      {
        type: 'p',
        children: [{ text: 'The most anticipated match-up pits Karmine Corp (2nd seed) against G2 Esports (3rd seed). The two squads already met in the LEC Versus 2026 Grand Final, where G2 edged a thrilling 3-2 victory. The rematch is on.' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: '🗓️ Friday May 23 — Team Vitality vs Movistar KOI (UB Semis, BO5, 5 PM CET)' }] },
          { type: 'li', children: [{ text: '🗓️ Saturday May 24 — Karmine Corp vs G2 Esports (UB Semis, BO5, 5 PM CET)' }] },
          { type: 'li', children: [{ text: '🗓️ Sunday May 25 — Upper Bracket Final (BO5)' }] },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Lower Bracket: NAVI and GIANTX waiting in the wings' }],
      },
      {
        type: 'p',
        children: [{ text: 'The fifth and sixth seeds — GIANTX and NAVI — enter at the Lower Bracket Round 1, facing the losers from the Upper Bracket Semifinals on May 30-31.' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: '🗓️ May 30 — NAVI vs UB1 loser (LB Round 1, BO5)' }] },
          { type: 'li', children: [{ text: '🗓️ May 31 — GIANTX vs UB2 loser (LB Round 1, BO5)' }] },
          { type: 'li', children: [{ text: '🗓️ June 1 — Lower Bracket Semifinal (BO5)' }] },
          { type: 'li', children: [{ text: '🗓️ June 6 — Lower Bracket Final (BO5)' }] },
          { type: 'li', children: [{ text: '🗓️ June 7 — LEC Spring 2026 Grand Final (BO5)' }] },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Favourites and storylines' }],
      },
      {
        type: 'p',
        children: [{ text: 'Team Vitality enter as heavy favourites, while Karmine Corp are hungry for revenge after falling to G2 in the LEC Versus final. G2 themselves were in brilliant form late in the regular season, including a clean 2-0 sweep over GIANTX. The Grand Final on June 7 is shaping up to be a landmark moment for European League of Legends.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'LEC Spring 2026 Playoffs are available on lolesports.com and official LEC broadcast channels. All matches are best-of-five.' }],
      },
    ],
  },

  // ── ES ─────────────────────────────────────────────────────────────────────
  {
    title: 'LEC Spring 2026: el bracket de playoffs ya es oficial — Karmine Corp vs G2 en semifinales',
    slug: 'lec-spring-2026-playoffs-bracket-reveal-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/2eeffc27c7d611657950840ad3f7b8086b367a20-1920x1080.jpg',
    excerpt: 'El bracket de playoffs del LEC Spring 2026 ya está definido. Team Vitality se enfrenta a MKOI y Karmine Corp revive su rivalidad con G2 Esports en las semifinales del Upper Bracket el 23-24 de mayo.',
    sourceUrl: 'https://lolesports.com/tournament/115548424304940735',
    tags: [
      { tag: 'LEC' }, { tag: 'Esports' }, { tag: 'Karmine Corp' },
      { tag: 'G2 Esports' }, { tag: 'Vitality' }, { tag: 'Playoffs' }, { tag: 'Spring 2026' },
    ],
    content: [
      {
        type: 'p',
        children: [{ text: 'El bracket oficial de los playoffs del LEC Spring 2026 fue desvelado el 11 de mayo. Seis equipos competirán en un formato de doble eliminación, con semifinales del Upper Bracket programadas para el 23 y 24 de mayo en series al mejor de cinco partidas.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Upper Bracket: Vitality vs MKOI, y el duelo estelar Karmine Corp vs G2' }],
      },
      {
        type: 'p',
        children: [{ text: 'Team Vitality, primera seed tras una temporada regular dominante, ha ejercido su ventaja de clasificación y ha elegido a Movistar KOI como rival en las semifinales del Upper Bracket. El equipo español terminó cuarto con una actuación muy sólida durante todo el split.' }],
      },
      {
        type: 'p',
        children: [{ text: 'El duelo más esperado enfrenta a Karmine Corp (2ª seed) contra G2 Esports (3ª seed). Ambos equipos ya se vieron las caras en la gran final del LEC Versus 2026, donde G2 se llevó la victoria por 3-2 en un emocionante partido. La revancha está servida.' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: '🗓️ Viernes 23 mayo — Team Vitality vs Movistar KOI (UB Semis, BO5, 17h CET)' }] },
          { type: 'li', children: [{ text: '🗓️ Sábado 24 mayo — Karmine Corp vs G2 Esports (UB Semis, BO5, 17h CET)' }] },
          { type: 'li', children: [{ text: '🗓️ Domingo 25 mayo — Final Upper Bracket (BO5)' }] },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Lower Bracket: NAVI y GIANTX esperan su turno' }],
      },
      {
        type: 'p',
        children: [{ text: 'Los equipos en quinta y sexta posición — GIANTX y NAVI — entran directamente en el Lower Bracket y se enfrentarán a los perdedores de las semifinales del Upper Bracket el 30 y 31 de mayo.' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: '🗓️ 30 mayo — NAVI vs perdedor UB1 (LB Ronda 1, BO5)' }] },
          { type: 'li', children: [{ text: '🗓️ 31 mayo — GIANTX vs perdedor UB2 (LB Ronda 1, BO5)' }] },
          { type: 'li', children: [{ text: '🗓️ 1 junio — Semifinal Lower Bracket (BO5)' }] },
          { type: 'li', children: [{ text: '🗓️ 6 junio — Final Lower Bracket (BO5)' }] },
          { type: 'li', children: [{ text: '🗓️ 7 junio — Gran Final LEC Spring 2026 (BO5)' }] },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Favoritos y narrativas clave' }],
      },
      {
        type: 'p',
        children: [{ text: 'Team Vitality llega como gran favorita, mientras que Karmine Corp está hambrienta de venganza tras caer ante G2 en la final del LEC Versus. G2, por su parte, llega en excelente forma tras terminar la temporada regular con una victoria 2-0 sobre GIANTX. La Gran Final del 7 de junio promete ser un momento histórico para el League of Legends europeo.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'Los playoffs del LEC Spring 2026 pueden seguirse en directo en lolesports.com y los canales oficiales del LEC. Todos los partidos son al mejor de cinco.' }],
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
