import type { MigrationModule } from './runner'

export const id = '106-riot-patch2613-preview-high-noon-aram-ranked5s'
export const description = 'RIOT — Patch 26.13 preview : skins High Noon, refonte ARAM Chaos et retour du Ranked 5s'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-12T08:00:00.000Z'

const articles = [
  // ─────────────────────────────────────────────
  // FR
  // ─────────────────────────────────────────────
  {
    title: "Patch 26.13 : skins High Noon, refonte d'ARAM Chaos et retour du Ranked 5s",
    slug: 'patch-2613-preview-high-noon-aram-ranked5s-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Le patch 26.13 de League of Legends arrive le 24 juin avec le champion Locke, une ligne de skins High Noon pour Akshan et Locke, une refonte majeure d'ARAM Chaos, et le retour du mode Ranked 5s pour l'été.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/game-updates/',
    tags: [
      { tag: 'LoL' },
      { tag: 'Riot Games' },
      { tag: 'Patch 26.13' },
      { tag: 'ARAM' },
      { tag: 'Skins' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games a dévoilé le contenu complet du patch 26.13, dont la mise en ligne est prévue le 24 juin 2026. Si l'arrivée de Locke, l'Exorciste des Cendres, constitue le clou du spectacle, le patch apporte également une vague de nouveautés qui vont bien au-delà du seul nouveau champion.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Skins High Noon : Akshan et Locke en vedette" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La ligne de skins High Noon fait son retour avec deux nouvelles additions très attendues. Akshan et Locke rejoignent le thème western fantastique de Riot, offrant à Akshan un look de pistolero mystique et à Locke un costume d'exorciste aux accents infernaux pour marquer ses débuts dans le jeu. Les visuels de ces skins ont été officiellement dévoilés par Riot quelques jours avant la mise en production, suscitant un accueil très positif de la communauté.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "ARAM Chaos : plus de 50 nouveaux augments" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le mode ARAM Chaos reçoit sa refonte la plus ambitieuse à ce jour. Les anciens sets d'augments sont désactivés et remplacés par plus de 50 nouveaux augments, dont une catégorie inédite : les augments de compétences. Ces derniers modifient directement les capacités de base des champions, ouvrant la voie à des combinaisons inédites et à un gameplay radicalement différent selon les parties. Riot précise que ce système évoluera régulièrement au fil des prochains patchs pour maintenir la fraîcheur du mode.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Ranked 5s : la file 5 rangs de retour pour l'été" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le mode Ranked 5s, qui permet exclusivement aux équipes complètes de 5 joueurs de s'affronter en classé sur la Faille de l'Invocateur, fait son retour pour une fenêtre estivale allant du 26 juin au 6 septembre 2026. Disponible uniquement le week-end pendant des plages horaires définies, ce mode était très demandé par la communauté compétitive amateur. C'est l'occasion pour les premade de tester leur coordination face à d'autres équipes organisées.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Avec Locke, les skins High Noon, la refonte d'ARAM Chaos et le retour du Ranked 5s, le patch 26.13 s'annonce comme l'un des plus riches de l'année. Rendez-vous le 24 juin sur les serveurs live.",
          },
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────
  // EN
  // ─────────────────────────────────────────────
  {
    title: 'Patch 26.13 Preview: High Noon Skins, ARAM Chaos Overhaul, and Ranked 5s Return',
    slug: 'patch-2613-preview-high-noon-aram-ranked5s-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "League of Legends Patch 26.13 lands June 24 with new champion Locke, High Noon skins for Akshan and Locke, a massive ARAM Chaos overhaul featuring 50+ new augments, and the return of Ranked 5s for summer.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/game-updates/',
    tags: [
      { tag: 'LoL' },
      { tag: 'Riot Games' },
      { tag: 'Patch 26.13' },
      { tag: 'ARAM' },
      { tag: 'Skins' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games has officially revealed the full contents of Patch 26.13, scheduled to go live on June 24, 2026. While new champion Locke — the Ashen Exorcist — is the headliner, the patch packs a number of significant updates that will impact a wide range of players.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "High Noon Skins: Akshan and Locke" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The beloved High Noon skin line is back with two new additions. Akshan and Locke both receive skins in the dark western fantasy theme, with Akshan taking on the role of a mystical gunslinger and Locke debuting as an infernal exorcist straight out of the frontier. Both skin previews were released by Riot ahead of the patch and were met with enthusiasm from the community.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "ARAM Chaos Gets a Major Overhaul" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "ARAM Chaos is receiving its most significant update to date. All existing augment sets are being disabled and replaced by over 50 brand-new augments, including a new category called skill augments that directly modify champion abilities. This creates entirely new gameplay combinations that vary dramatically from game to game. Riot has indicated the system will continue to evolve in subsequent patches.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Ranked 5s Returns for Summer" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Ranked 5s — the full-party ranked mode exclusive to pre-made teams of five — is making its return from June 26 through September 6, 2026. The mode will only be available during specific weekend hours, giving organized teams a chance to test their coordination against other full squads in a competitive setting. It was one of the most requested features by the amateur competitive community.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "With Locke, High Noon skins, a revamped ARAM Chaos, and Ranked 5s making a comeback, Patch 26.13 is shaping up to be one of the most content-rich patches of the year. Mark your calendars for June 24.",
          },
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────
  // ES
  // ─────────────────────────────────────────────
  {
    title: 'Parche 26.13: skins High Noon, renovación de ARAM Chaos y regreso del Ranked 5s',
    slug: 'patch-2613-preview-high-noon-aram-ranked5s-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "El parche 26.13 de League of Legends llega el 24 de junio con el campeón Locke, skins High Noon para Akshan y Locke, una gran renovación de ARAM Chaos con más de 50 nuevos aumentos y el regreso del Ranked 5s para el verano.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/game-updates/',
    tags: [
      { tag: 'LoL' },
      { tag: 'Riot Games' },
      { tag: 'Parche 26.13' },
      { tag: 'ARAM' },
      { tag: 'Skins' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games ha revelado oficialmente el contenido completo del parche 26.13, cuya llegada está programada para el 24 de junio de 2026. Si bien el nuevo campeón Locke — el Exorcista de las Cenizas — es el gran protagonista, el parche también trae novedades significativas que afectarán a una gran variedad de jugadores.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Skins High Noon: Akshan y Locke" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La popular línea de skins High Noon regresa con dos nuevas incorporaciones. Akshan y Locke reciben skins enmarcadas en el tema del western fantástico oscuro de Riot, con Akshan adoptando el papel de pistolero místico y Locke debutando como exorcista infernal de la frontera. Ambos diseños fueron presentados por Riot días antes del parche y generaron una respuesta muy positiva en la comunidad.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Gran renovación de ARAM Chaos" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "ARAM Chaos recibe su actualización más ambiciosa hasta la fecha. Todos los conjuntos de aumentos actuales serán desactivados y reemplazados por más de 50 nuevos aumentos, incluyendo una categoría inédita: los aumentos de habilidades, que modifican directamente las capacidades base de los campeones. Esto crea combinaciones de juego completamente nuevas que varían drásticamente de partida en partida. Riot ha confirmado que el sistema seguirá evolucionando en parches futuros.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "El Ranked 5s vuelve para el verano" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El Ranked 5s — el modo clasificatorio exclusivo para equipos completos de cinco jugadores — regresa del 26 de junio al 6 de septiembre de 2026. El modo estará disponible solo durante horas específicas del fin de semana, ofreciendo a los equipos organizados la oportunidad de medir su coordinación frente a otros grupos completos en un entorno competitivo. Era una de las funciones más solicitadas por la comunidad competitiva amateur.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Con Locke, los skins High Noon, la renovación de ARAM Chaos y el regreso del Ranked 5s, el parche 26.13 se perfila como uno de los más completos del año. Apuntad el 24 de junio en vuestros calendarios.",
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
