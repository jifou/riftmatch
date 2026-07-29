import type { MigrationModule } from './runner'

export const id = '153-riot-lol-classic-launch'
export const description = "RIOT — League of Legends Classic est disponible, lancement officiel avec le patch 26.15"

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-07-29T08:00:00.000Z'

const articles = [
  {
    title: "League of Legends Classic est disponible : le mode nostalgique lance avec le patch 26.15",
    slug: 'lol-classic-disponible-lancement-patch-26-15-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "League of Legends Classic est officiellement lancé ce 29 juillet 2026, en même temps que le patch 26.15. Le mode nostalgique inspiré de la Saison 3 est directement intégré au client habituel, avec 60 champions, l'ancien système de runes et de maîtrises, et une file dédiée en draft PvP.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-15-notes/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'LoL Classic' }, { tag: 'Patch 26.15' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Après plusieurs semaines d'attente depuis sa révélation lors de la finale du MSI 2026, League of Legends Classic est officiellement disponible depuis ce mercredi 29 juillet 2026, 8h00 (heure du Pacifique), en même temps que le déploiement du patch 26.15." }],
      },
      {
        type: 'h2',
        children: [{ text: "Un mode directement accessible depuis le client habituel" }],
      },
      {
        type: 'p',
        children: [{ text: "Comme annoncé, League of Legends Classic ne nécessite aucune installation séparée : le mode est intégré au launcher Riot classique, aux côtés du jeu principal. Au lancement, seule une file de draft PvP est disponible, complétée par le mode Coop vs IA et les parties personnalisées. Riot Games a précisé que d'autres files pourraient être ajoutées selon les retours de la communauté." }],
      },
      {
        type: 'h2',
        children: [{ text: "60 champions, anciennes runes et maîtrises au menu" }],
      },
      {
        type: 'p',
        children: [{ text: "Le contenu confirme ce qui avait été annoncé : 60 champions jouables dans leurs versions pré-rework, un système de runes et de maîtrises basé sur les statistiques de l'époque Saison 3, des paliers de puissance d'objets d'origine et des coûts de vision classiques. Le patch 26.15 apporte par ailleurs son lot d'ajustements pour le jeu principal, notamment autour du rework de Bel'Veth." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Un pari nostalgique que Riot veut désormais faire vivre sur la durée, patch après patch, au rythme des votes de la communauté." }],
      },
    ],
  },
  {
    title: "League of Legends Classic is now live, launching alongside patch 26.15",
    slug: 'lol-classic-launch-patch-26-15-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "League of Legends Classic officially launched on July 29, 2026, alongside patch 26.15. The Season 3-inspired nostalgia mode is built directly into the regular client, with 60 champions, the old rune and mastery system, and a dedicated PvP draft queue.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-15-notes/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'LoL Classic' }, { tag: 'Patch 26.15' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Weeks after being revealed on stage at the MSI 2026 grand finals, League of Legends Classic officially went live on Wednesday, July 29, 2026, at 8:00 AM PT, alongside the rollout of patch 26.15." }],
      },
      {
        type: 'h2',
        children: [{ text: "Built straight into the regular client" }],
      },
      {
        type: 'p',
        children: [{ text: "As announced, League of Legends Classic requires no separate install: the mode lives inside the standard Riot launcher, next to the main game. At launch, only a single PvP draft queue is available, alongside Co-op vs AI and custom games. Riot Games noted that additional queues could be added based on community feedback." }],
      },
      {
        type: 'h2',
        children: [{ text: "60 champions, old runes and masteries included" }],
      },
      {
        type: 'p',
        children: [{ text: "The content matches what was previously announced: 60 champions playable in their pre-rework versions, a stat-based rune and mastery system from the Season 3 era, era-appropriate item power spikes, and classic vision costs. Patch 26.15 also brings its usual round of balance changes to the main game, notably around the Bel'Veth rework." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "A nostalgia bet Riot now intends to keep alive over time, patch after patch, guided by community votes." }],
      },
    ],
  },
  {
    title: "League of Legends Classic ya está disponible, lanzamiento junto al parche 26.15",
    slug: 'lol-classic-disponible-lanzamiento-parche-26-15-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "League of Legends Classic se lanzó oficialmente el 29 de julio de 2026, junto con el parche 26.15. El modo nostálgico inspirado en la Temporada 3 está integrado directamente en el cliente habitual, con 60 campeones, el antiguo sistema de runas y maestrías, y una cola de draft PvP dedicada.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-15-notes/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'LoL Classic' }, { tag: 'Parche 26.15' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Semanas después de ser revelado en el escenario de la gran final del MSI 2026, League of Legends Classic se lanzó oficialmente este miércoles 29 de julio de 2026 a las 8:00 AM (hora del Pacífico), junto con el despliegue del parche 26.15." }],
      },
      {
        type: 'h2',
        children: [{ text: "Integrado directamente en el cliente habitual" }],
      },
      {
        type: 'p',
        children: [{ text: "Tal como se anunció, League of Legends Classic no requiere una instalación separada: el modo vive dentro del launcher habitual de Riot, junto al juego principal. En el lanzamiento, solo hay disponible una cola de draft PvP, junto con el modo Cooperativo vs IA y las partidas personalizadas. Riot Games señaló que podrían añadirse más colas según el feedback de la comunidad." }],
      },
      {
        type: 'h2',
        children: [{ text: "60 campeones, con las antiguas runas y maestrías" }],
      },
      {
        type: 'p',
        children: [{ text: "El contenido coincide con lo anunciado previamente: 60 campeones jugables en sus versiones previas a los reworks, un sistema de runas y maestrías basado en estadísticas de la era de la Temporada 3, picos de poder de objetos de época y costos de visión clásicos. El parche 26.15 también trae su habitual tanda de ajustes de balance para el juego principal, especialmente en torno al rework de Bel'Veth." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Una apuesta nostálgica que Riot ahora quiere mantener viva con el tiempo, parche tras parche, guiada por las votaciones de la comunidad." }],
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
