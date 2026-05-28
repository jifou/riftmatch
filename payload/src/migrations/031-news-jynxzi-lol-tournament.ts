import type { MigrationModule } from './runner'

export const id = '031-news-jynxzi-lol-tournament'
export const description = "Tournoi LoL de Jynxzi (11 mai 2026) — Team xQc victorieuse, 417 000 viewers peak"

const DISCLOSURE_DATE = '2026-05-12T08:00:00.000Z'

const articles = [
  // ── FR ─────────────────────────────────────────────────────────────────────
  {
    title: 'Tournoi LoL de Jynxzi : Team xQc remporte tout, record historique de 417 000 viewers',
    slug: 'jynxzi-lol-tournament-xqc-winner-may-2026',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage: 'https://img.youtube.com/vi/MUZRi5f4UKY/maxresdefault.jpg',
    excerpt:
      'Le tournoi League of Legends organisé par Jynxzi le 11 mai 2026 a réuni 40 streamers et pulvérisé les records : Team xQc a dominé la finale 28-4 en 27 minutes, et le stream a culminé à 417 711 spectateurs simultanés.',
    sourceUrl: 'https://www.sportskeeda.com/us/streamers/news-who-won-jynxzi-s-40-streamer-league-legends-tournament',
    tags: [
      { tag: 'LoL' },
      { tag: 'Esports' },
      { tag: 'Tournoi' },
      { tag: 'Jynxzi' },
      { tag: 'xQc' },
      { tag: 'Streamers' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Le 11 mai 2026, Jynxzi a organisé son premier grand tournoi League of Legends mettant en scène 40 créateurs de contenu parmi les plus suivis de la planète. Le résultat ? Un événement qui restera dans les annales du streaming : 417 711 spectateurs simultanés au pic sur Twitch, battant le record personnel du streamer.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Team xQc : cinq minutes de perfection en finale' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La grande finale a opposé Team xQc à Team Zoil. En 27 minutes seulement, Team xQc a infligé un cinglant 28-4 à ses adversaires pour décrocher le titre. xQc a incarné Malphite en top lane tandis que Kingsman, en rôle ADC sur Samira, a été l'un des joueurs les plus en vue de la rencontre.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'La composition des équipes finalistes' }],
      },
      {
        type: 'p',
        children: [{ text: 'Team xQc (vainqueurs) :' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: 'xQc – Top lane (Malphite)' }] },
          { type: 'li', children: [{ text: 'Kingsman – ADC (Samira)' }] },
          { type: 'li', children: [{ text: 'AloisNL' }] },
          { type: 'li', children: [{ text: 'rayasianboy' }] },
          { type: 'li', children: [{ text: 'Sapnap' }] },
        ],
      },
      {
        type: 'p',
        children: [{ text: 'Team Zoil (finalistes) :' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: 'Ludwig' }] },
          { type: 'li', children: [{ text: 'ArrowCS' }] },
          { type: 'li', children: [{ text: 'Pokelawls' }] },
          { type: 'li', children: [{ text: 'Sneaky' }] },
        ],
      },
      {
        type: 'h2',
        children: [{ text: '417 000 viewers et un record personnel pour Jynxzi' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Avec 417 711 spectateurs au pic sur sa chaîne Twitch, Jynxzi a établi son nouveau record d'audience, surpassant toutes ses performances précédentes. Le tournoi réunissait également des personnalités comme MrBeast, ohnePixel, Tyler1, Doublelift, Dantes et Emiru, de quoi garantir un afflux massif de spectateurs tout au long de la soirée.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Drops Twitch : la skin Inkshadow Master Yi offerte' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Pour l'occasion, Riot Games avait activé des Twitch Drops exclusifs : les spectateurs pouvaient débloquer gratuitement la skin Inkshadow Master Yi en regardant les streams des participants pendant une durée déterminée. Une belle opportunité pour les fans d'obtenir un cosmétique prisé sans dépenser de RP.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "\"C'est le meilleur stream que j'ai jamais fait.\" — Jynxzi, après l'événement. AloisNL a lui aussi réagi sur X : \"C'est le plus de fun et d'adrénaline que j'ai jamais ressenti en jouant à un jeu compétitif.\"",
          },
        ],
      },
    ],
  },

  // ── EN ─────────────────────────────────────────────────────────────────────
  {
    title: "Jynxzi's LoL Tournament: Team xQc wins it all with 417K peak viewers",
    slug: 'jynxzi-lol-tournament-xqc-winner-may-2026-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage: 'https://img.youtube.com/vi/MUZRi5f4UKY/maxresdefault.jpg',
    excerpt:
      "Jynxzi's first League of Legends creator tournament on May 11, 2026 shattered records: Team xQc dominated the grand final 28-4 in just 27 minutes, and Jynxzi's stream peaked at 417,711 concurrent viewers — a new personal best.",
    sourceUrl: 'https://www.sportskeeda.com/us/streamers/news-who-won-jynxzi-s-40-streamer-league-legends-tournament',
    tags: [
      { tag: 'LoL' },
      { tag: 'Esports' },
      { tag: 'Tournament' },
      { tag: 'Jynxzi' },
      { tag: 'xQc' },
      { tag: 'Streamers' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "On May 11, 2026, Jynxzi hosted his first-ever League of Legends tournament featuring 40 of the biggest content creators on the internet. The event was a massive success, peaking at 417,711 concurrent viewers on Twitch — a new all-time record for Jynxzi's channel.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Team xQc dominates the grand final' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Team xQc faced Team Zoil in the grand final and delivered a commanding performance, winning 28-4 in just 27 minutes. xQc played Malphite in the top lane while Kingsman, playing Samira as ADC, was one of the standout performers of the match.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Finalists lineup' }],
      },
      {
        type: 'p',
        children: [{ text: 'Team xQc (winners):' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: 'xQc – Top lane (Malphite)' }] },
          { type: 'li', children: [{ text: 'Kingsman – ADC (Samira)' }] },
          { type: 'li', children: [{ text: 'AloisNL' }] },
          { type: 'li', children: [{ text: 'rayasianboy' }] },
          { type: 'li', children: [{ text: 'Sapnap' }] },
        ],
      },
      {
        type: 'p',
        children: [{ text: 'Team Zoil (runners-up):' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: 'Ludwig' }] },
          { type: 'li', children: [{ text: 'ArrowCS' }] },
          { type: 'li', children: [{ text: 'Pokelawls' }] },
          { type: 'li', children: [{ text: 'Sneaky' }] },
        ],
      },
      {
        type: 'h2',
        children: [{ text: '417K viewers and a new Twitch record' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The tournament drew an incredible crowd online. At its peak, Jynxzi's stream alone attracted 417,711 concurrent viewers, breaking his personal Twitch record by a wide margin. Big names like MrBeast, ohnePixel, Tyler1, Doublelift, Dantes, and Emiru all participated, driving viewership through the roof.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Twitch Drops: Inkshadow Master Yi skin up for grabs' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Riot Games activated Twitch Drops for the event, letting viewers earn the Inkshadow Master Yi skin for free by watching participating streams for a set amount of time — a great incentive for the League community to tune in.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "\"This is the best stream I've ever done.\" — Jynxzi. AloisNL added on X: \"This was the most fun and hype I have ever had playing a competitive game.\"",
          },
        ],
      },
    ],
  },

  // ── ES ─────────────────────────────────────────────────────────────────────
  {
    title: 'Torneo LoL de Jynxzi: Team xQc campeón con 417K viewers históricos',
    slug: 'jynxzi-lol-tournament-xqc-winner-may-2026-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage: 'https://img.youtube.com/vi/MUZRi5f4UKY/maxresdefault.jpg',
    excerpt:
      'El primer torneo de League of Legends organizado por Jynxzi el 11 de mayo de 2026 rompió todos los récords: Team xQc arrasó en la gran final 28-4 en 27 minutos, y el stream alcanzó un pico histórico de 417.711 espectadores.',
    sourceUrl: 'https://www.sportskeeda.com/us/streamers/news-who-won-jynxzi-s-40-streamer-league-legends-tournament',
    tags: [
      { tag: 'LoL' },
      { tag: 'Esports' },
      { tag: 'Torneo' },
      { tag: 'Jynxzi' },
      { tag: 'xQc' },
      { tag: 'Streamers' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'El 11 de mayo de 2026, Jynxzi organizó su primer gran torneo de League of Legends con 40 de los creadores de contenido más seguidos del mundo. El evento fue un éxito rotundo: el stream alcanzó un pico de 417.711 espectadores simultáneos en Twitch, estableciendo un nuevo récord personal para Jynxzi.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Team xQc domina la gran final' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'La gran final enfrentó a Team xQc contra Team Zoil. En tan solo 27 minutos, Team xQc se impuso con un aplastante marcador de 28-4. xQc jugó como Malphite en el carril superior, mientras que Kingsman, como ADC con Samira, fue uno de los mejores jugadores del encuentro.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Composición de los equipos finalistas' }],
      },
      {
        type: 'p',
        children: [{ text: 'Team xQc (campeones):' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: 'xQc – Top lane (Malphite)' }] },
          { type: 'li', children: [{ text: 'Kingsman – ADC (Samira)' }] },
          { type: 'li', children: [{ text: 'AloisNL' }] },
          { type: 'li', children: [{ text: 'rayasianboy' }] },
          { type: 'li', children: [{ text: 'Sapnap' }] },
        ],
      },
      {
        type: 'p',
        children: [{ text: 'Team Zoil (finalistas):' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: 'Ludwig' }] },
          { type: 'li', children: [{ text: 'ArrowCS' }] },
          { type: 'li', children: [{ text: 'Pokelawls' }] },
          { type: 'li', children: [{ text: 'Sneaky' }] },
        ],
      },
      {
        type: 'h2',
        children: [{ text: '417K espectadores y un nuevo récord en Twitch' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Con 417.711 espectadores en el pico de audiencia, Jynxzi superó ampliamente su propio récord en Twitch. El torneo contó con la participación de grandes nombres como MrBeast, ohnePixel, Tyler1, Doublelift, Dantes y Emiru, lo que garantizó un flujo masivo de espectadores durante toda la noche.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Drops de Twitch: la skin Inkshadow Master Yi gratis' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Riot Games activó Drops de Twitch para el evento, permitiendo a los espectadores desbloquear gratuitamente la skin Inkshadow Master Yi viendo los streams de los participantes durante un tiempo determinado.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: '"Es el mejor stream que he hecho jamás." — Jynxzi. AloisNL añadió en X: "Ha sido el momento más divertido e intenso que he vivido jugando a un juego competitivo."',
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
  console.log('✅ Migration 031 terminée')
}
