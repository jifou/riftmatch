import type { MigrationModule } from './runner'

export const id = '143-riot-lol-classic-release-date'
export const description = 'RIOT — League of Legends Classic : date de sortie fixée au 29 juillet, 60 champions au lancement'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-07-13T08:00:00.000Z'

const articles = [
  {
    title: "League of Legends Classic : la date de sortie confirmée au 29 juillet, 60 champions au lancement",
    slug: 'lol-classic-date-sortie-29-juillet-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Riot Games a profité de la finale du MSI 2026 à Daejeon pour dévoiler la date de sortie officielle de League of Legends Classic : le 29 juillet 2026. Le mode nostalgique proposera 60 champions au lancement, avec l'ancien système de runes et de maîtrises.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/announcements/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'LoL Classic' }, { tag: 'Annonce' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Riot Games a dévoilé la date de sortie officielle de League of Legends Classic lors de la finale du Mid-Season Invitational 2026, disputée le 12 juillet à Daejeon en Corée du Sud. L'annonce a été faite en direct depuis le plateau par Sjokz et Paul \"Pabro\" Bellezza, accompagnée d'un showmatch de légendes mettant en scène d'anciens champions pré-rework." }],
      },
      {
        type: 'h2',
        children: [{ text: "Une sortie fixée au 29 juillet" }],
      },
      {
        type: 'p',
        children: [{ text: "League of Legends Classic sera disponible dès le 29 juillet 2026 à 8h00 (heure du Pacifique), en même temps que le patch 26.15. Le mode s'intégrera directement au client Riot habituel, sans installation séparée ni launcher dédié, ce qui signifie que les configurations actuelles resteront compatibles." }],
      },
      {
        type: 'h2',
        children: [{ text: "60 champions au lancement, un mélange de plusieurs époques" }],
      },
      {
        type: 'p',
        children: [{ text: "Plutôt qu'une reconstitution figée d'une saison précise, League of Legends Classic proposera une sélection curatée des grands moments de l'histoire du jeu : la Saison 3 sert de socle, complétée par des éléments issus d'époques antérieures et postérieures. Soixante champions seront jouables dès le lancement, avec l'ancien système de runes et de maîtrises basé sur les statistiques, des pics de puissance d'objets d'époque et des coûts de vision propres aux anciennes versions du jeu." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Un retour aux sources pensé pour évoluer avec les retours de la communauté, présenté en grande pompe depuis le plateau de la finale du MSI 2026." }],
      },
    ],
  },
  {
    title: "League of Legends Classic: release date confirmed for July 29, 60 champions at launch",
    slug: 'lol-classic-release-date-july-29-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Riot Games used the MSI 2026 finals in Daejeon to reveal the official release date for League of Legends Classic: July 29, 2026. The nostalgia mode will launch with 60 champions and the old rune and mastery system.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/announcements/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'LoL Classic' }, { tag: 'Announcement' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Riot Games revealed the official release date for League of Legends Classic during the Mid-Season Invitational 2026 grand finals, held on July 12 in Daejeon, South Korea. The announcement was made live from the stage by Sjokz and Paul \"Pabro\" Bellezza, alongside a legends showmatch featuring old pre-rework champions." }],
      },
      {
        type: 'h2',
        children: [{ text: "Launch set for July 29" }],
      },
      {
        type: 'p',
        children: [{ text: "League of Legends Classic will go live on July 29, 2026 at 8:00 AM PT, alongside patch 26.15. The mode will live inside the regular Riot Client, with no separate install or dedicated launcher, meaning current system requirements remain valid." }],
      },
      {
        type: 'h2',
        children: [{ text: "60 champions at launch, a mix of eras" }],
      },
      {
        type: 'p',
        children: [{ text: "Rather than a frozen recreation of one specific season, League of Legends Classic will offer a curated experience featuring the \"greatest hits\" of the game's history: Season 3 serves as the foundation, with elements from both earlier and later versions layered on top. Sixty champions will be playable at launch, running on the old stat-based rune and mastery system, era-appropriate item power spikes, and classic vision costs." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "A throwback built to evolve with community feedback, unveiled in style from the MSI 2026 finals stage." }],
      },
    ],
  },
  {
    title: "League of Legends Classic: fecha de lanzamiento confirmada para el 29 de julio, 60 campeones al inicio",
    slug: 'lol-classic-fecha-lanzamiento-29-julio-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Riot Games aprovechó la final del MSI 2026 en Daejeon para revelar la fecha oficial de lanzamiento de League of Legends Classic: el 29 de julio de 2026. El modo nostálgico llegará con 60 campeones y el antiguo sistema de runas y maestrías.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/announcements/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'LoL Classic' }, { tag: 'Anuncio' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Riot Games reveló la fecha oficial de lanzamiento de League of Legends Classic durante la gran final del Mid-Season Invitational 2026, disputada el 12 de julio en Daejeon, Corea del Sur. El anuncio se hizo en vivo desde el escenario por Sjokz y Paul \"Pabro\" Bellezza, junto a un showmatch de leyendas con campeones antiguos previos a sus reworks." }],
      },
      {
        type: 'h2',
        children: [{ text: "El lanzamiento se fija para el 29 de julio" }],
      },
      {
        type: 'p',
        children: [{ text: "League of Legends Classic estará disponible desde el 29 de julio de 2026 a las 8:00 AM (hora del Pacífico), junto con el parche 26.15. El modo vivirá dentro del cliente habitual de Riot, sin instalación separada ni launcher propio, por lo que los requisitos de sistema actuales seguirán siendo válidos." }],
      },
      {
        type: 'h2',
        children: [{ text: "60 campeones al inicio, una mezcla de varias épocas" }],
      },
      {
        type: 'p',
        children: [{ text: "En lugar de recrear de forma fija una temporada concreta, League of Legends Classic ofrecerá una selección curada de los grandes momentos de la historia del juego: la Temporada 3 sirve de base, complementada con elementos de épocas anteriores y posteriores. Sesenta campeones serán jugables desde el lanzamiento, con el antiguo sistema de runas y maestrías basado en estadísticas, picos de poder de objetos de época y costos de visión propios de las versiones clásicas del juego." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Un regreso a los orígenes pensado para evolucionar con el feedback de la comunidad, presentado a lo grande desde el escenario de la final del MSI 2026." }],
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
