import type { MigrationModule } from './runner'

export const id = '133-riot-lol-classic-announcement'
export const description = 'RIOT — League of Legends Classic officiellement annoncé : runas anciennes, IP et champions pre-rework reviennent'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-29T08:00:00.000Z'

const articles = [
  {
    title: "League of Legends Classic officialisé : runas anciennes, IP et vieux champions de retour en 2026",
    slug: 'lol-classic-annonce-officiel-2026-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/96q1XSRSncE/maxresdefault.jpg',
    excerpt: "Riot Games a officiellement annoncé League of Legends Classic le 26 juin 2026 : ancien système de runas, monnaie IP, progression niveau 1-30, objets légendaires et versions classiques des champions seront de retour. La révélation complète est prévue le 11 juillet lors de la finale du MSI 2026 à Daejeon.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'LoL Classic' }, { tag: 'Annonce' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Riot Games a officiellement annoncé League of Legends Classic le 26 juin 2026, prenant les devants sur une vague de fuites de dataminers qui avaient déjà mis en ligne des artworks de champions et des ressources de la version bêta publique. L'annonce a pris la forme d'une vidéo comique mettant en scène Paul 'Pabro' Bellezza et Andrei 'Meddler' van Roon, les deux figures clés du studio League of Legends." }],
      },
      {
        type: 'h2',
        children: [{ text: "Les fonctionnalités confirmées de LoL Classic" }],
      },
      {
        type: 'p',
        children: [{ text: "League of Legends Classic proposera une expérience fidèle aux premières années du jeu. Parmi les éléments confirmés : le système de progression du niveau 1 au 30 avec la monnaie de Points d'Influence (IP), l'ancien système de runas et de maîtrises basé sur les statistiques, des objets emblématiques comme le Cœur d'Or et le Soufflet de Deathfire, et les versions pré-rework des champions sur l'ancienne carte de la Faille de l'Invocateur. Le mode comptera environ 40 à 60 champions au lancement et disposera de son propre passe de combat et système de jetons." }],
      },
      {
        type: 'h2',
        children: [{ text: "Révélation complète le 11 juillet à la finale du MSI 2026" }],
      },
      {
        type: 'p',
        children: [{ text: "Riot a confirmé que la révélation complète de League of Legends Classic aura lieu le 11 juillet 2026, lors de la grande finale du Mid-Season Invitational 2026 à Daejeon, en Corée du Sud. Le mode sera intégré directement dans le client LoL existant, avec une technologie moderne en coulisses, ce qui signifie que les configurations système actuelles resteront valables. Aucune date de sortie officielle n'a encore été communiquée." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "League of Legends Classic est le retour aux sources que des millions de joueurs nostalgiques attendaient depuis des années. Rendez-vous le 11 juillet au MSI 2026 pour la révélation complète du mode." }],
      },
    ],
  },
  {
    title: "League of Legends Classic officially announced: old runes, IP currency and pre-rework champions return",
    slug: 'lol-classic-official-announcement-2026-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/96q1XSRSncE/maxresdefault.jpg',
    excerpt: "Riot Games officially announced League of Legends Classic on June 26, 2026: the old rune and mastery system, IP currency, level 1-30 progression, classic items, and pre-rework champion versions are all returning. The full reveal is set for July 11 at the MSI 2026 Finals in Daejeon.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'LoL Classic' }, { tag: 'Announcement' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Riot Games officially announced League of Legends Classic on June 26, 2026, getting ahead of a wave of dataminer leaks that had already surfaced champion artwork and assets from the game's Public Beta Environment. The announcement came through a comedic video starring executive producer Paul 'Pabro' Bellezza and League Studio head Andrei 'Meddler' van Roon on the official League of Legends account." }],
      },
      {
        type: 'h2',
        children: [{ text: "Confirmed features of LoL Classic" }],
      },
      {
        type: 'p',
        children: [{ text: "League of Legends Classic will recreate the early era of the game with several confirmed features: the level 1-to-30 progression system, the original Influence Points (IP) currency, the old stat-based rune and mastery systems, classic items like Heart of Gold and Deathfire Grasp, and pre-rework versions of champions on the original Summoner's Rift visuals. The mode is expected to include around 40 to 60 champions at launch and will feature its own battle pass and token system." }],
      },
      {
        type: 'h2',
        children: [{ text: "Full reveal at MSI 2026 Finals on July 11" }],
      },
      {
        type: 'p',
        children: [{ text: "Riot confirmed the full reveal of League Classic is coming on July 11, 2026, during the MSI Finals in Daejeon, South Korea. The mode will live inside the existing LoL client with modern technology powering it under the hood, meaning current system requirements will still apply. No official release date has been confirmed yet." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "League of Legends Classic is the long-awaited return to the roots for millions of nostalgic players. The full reveal at MSI 2026 Finals on July 11 promises to be a landmark moment for the community." }],
      },
    ],
  },
  {
    title: "League of Legends Classic anunciado oficialmente: runas antiguas, IP y campeones clásicos regresan en 2026",
    slug: 'lol-classic-anuncio-oficial-2026-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/96q1XSRSncE/maxresdefault.jpg',
    excerpt: "Riot Games anunció oficialmente League of Legends Classic el 26 de junio de 2026: el antiguo sistema de runas y maestrías, la moneda IP, la progresión del nivel 1 al 30, objetos clásicos y versiones pre-rework de los campeones regresan. La revelación completa llega el 11 de julio en la Final del MSI 2026 en Daejeon.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'LoL Classic' }, { tag: 'Anuncio' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Riot Games anunció oficialmente League of Legends Classic el 26 de junio de 2026, adelantándose a una avalancha de filtraciones de dataminers que ya habían publicado artworks de campeones y recursos del entorno beta público del juego. El anuncio llegó en forma de vídeo cómico protagonizado por el productor ejecutivo Paul 'Pabro' Bellezza y el director del estudio League, Andrei 'Meddler' van Roon, en la cuenta oficial de League of Legends." }],
      },
      {
        type: 'h2',
        children: [{ text: "Funciones confirmadas de LoL Classic" }],
      },
      {
        type: 'p',
        children: [{ text: "League of Legends Classic recreará la era inicial del juego con varias características confirmadas: el sistema de progresión del nivel 1 al 30, la moneda original de Puntos de Influencia (IP), los antiguos sistemas de runas y maestrías basados en estadísticas, objetos clásicos como el Corazón de Oro y el Fuelle de Deathfire, y versiones pre-rework de los campeones en la Grieta del Invocador original. Se espera que el modo cuente con entre 40 y 60 campeones en el lanzamiento e incluirá su propio pase de batalla y sistema de tokens." }],
      },
      {
        type: 'h2',
        children: [{ text: "Revelación completa en la Final del MSI 2026 el 11 de julio" }],
      },
      {
        type: 'p',
        children: [{ text: "Riot confirmó que la revelación completa de League Classic llegará el 11 de julio de 2026, durante la Final del MSI en Daejeon, Corea del Sur. El modo se integrará directamente en el cliente de LoL existente con tecnología moderna bajo el capó, lo que significa que los requisitos del sistema actuales seguirán siendo válidos. No se ha confirmado aún una fecha de lanzamiento oficial." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "League of Legends Classic es el regreso a los orígenes que millones de jugadores nostálgicos llevan años esperando. La revelación completa en la Final del MSI 2026 el 11 de julio promete ser un momento histórico para la comunidad." }],
      },
    ],
  },
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const a of articles) {
    const ex = await payload.find({ collection: 'news', where: { slug: { equals: a.slug } } })
    if (ex.docs.length > 0) { console.log(`→ skip ${a.slug}`); continue }
    await payload.create({ collection: 'news', data: a as any })
    console.log(`✅ ${a.locale.toUpperCase()} — ${a.title}`)
  }
}
