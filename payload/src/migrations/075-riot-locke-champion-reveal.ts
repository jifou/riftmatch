import type { MigrationModule } from './runner'

export const id = '075-riot-locke-champion-reveal'
export const description = 'RIOT — Révélation de Locke, prochain champion LoL AP assassin (patch 26.13)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-29T08:00:00.000Z'

const articles = [
  {
    title: "Locke révélé : le prochain champion de League of Legends est un assassin AP mid lane",
    slug: 'riot-locke-champion-reveal-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Riot Games a officiellement révélé Locke lors du dev update du 27 mai 2026 : un assassin AP haute rafale pour le mid lane, prévu en patch 26.13 le 24 juin. Premier nouveau champion depuis Aurora en 2024.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/dev/tldw-mayhem-ranked-5s-more-dev-update/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Nouveau champion' }, { tag: 'Locke' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games a levé le voile sur Locke, le prochain champion de League of Legends, lors du dev update TL;DW publié le 27 mai 2026. Locke sera un assassin AP à haute rafale dédié au mid lane — le premier vrai nouveau champion depuis Aurora, sortie en 2024. Riot le décrit avec le slogan : \"Slinging nails and taking names\", ce qui donne déjà une indication claire sur son identité visuelle et son style de jeu.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Un kit centré sur la préparation et l'exécution" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Selon les informations partagées par Riot et les premières révélations du PBE, Locke utilisera des projectiles de clous comme mécanique de base. Son kit exploiterait une dualité de forme — une seconde forme activable — couplée à des dégâts de zone et un mécanisme d'artéfact scellé encore non détaillé. Sa puissance sera fortement conditionnée par la préparation du combat : mal positionné ou mal engagé, Locke perdra une grande partie de son potentiel de dégâts. Riot confirme qu'il s'agit d'un assassin AP à haute explosion, à manier avec précision pour en tirer le maximum.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Date de sortie : patch 26.13, le 24 juin 2026' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Locke arrivera avec le patch 26.13, prévu le 24 juin 2026. Il sera accompagné d'un skin High Noon dès son lancement — Akshan recevra également un skin High Noon dans ce même patch. C'est la première fois depuis Aurora (patch 14.13 en 2024) que League of Legends accueille un tout nouveau champion, Riot ayant concentré ses efforts sur des reworks de champions existants (VGUs) pendant cette période. Locke marque donc un retour attendu pour les joueurs qui aiment les assassins AP au mid.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Dev update : Ranked 5s et ARAM Mayhem au programme' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Au-delà de Locke, le dev update du 27 mai a également annoncé le retour des Ranked 5s (parties classées en équipe de cinq) et la suppression des traits de Mayhem dans l'ARAM — un mode qui avait pourtant été accueilli positivement lors de son introduction. Le patch 26.11, sorti le 28 mai, redistribue lui la méta du support avec des nerfs ciblés sur les enchanteurs et des buffs pour les tanks en support, accompagné du rework de Smolder orienté critical strike.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Locke est le champion le plus attendu de l'année. Rendez-vous le 24 juin sur le PBE puis en live pour découvrir si cet assassin AP peut s'imposer dans la méta actuelle.",
          },
        ],
      },
    ],
  },
  {
    title: 'Locke Revealed: League of Legends Next Champion is a Mid Lane AP Assassin',
    slug: 'riot-locke-champion-reveal-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Riot Games officially revealed Locke in the May 27, 2026 dev update: a high-burst AP assassin for mid lane, arriving in patch 26.13 on June 24. The first new champion since Aurora in 2024.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/dev/tldw-mayhem-ranked-5s-more-dev-update/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'New Champion' }, { tag: 'Locke' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games officially unveiled Locke, the next League of Legends champion, in the TL;DW dev update published on May 27, 2026. Locke is described as a high-burst AP assassin built for the mid lane — the first brand-new champion to hit the Rift since Aurora launched in 2024. Riot's own tagline for the champion sums up his identity perfectly: \"Slinging nails and taking names.\"",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'A Kit Built Around Setup and Execution' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Based on information shared by Riot and early PBE reports, Locke will use nail-like projectiles as his core mechanic. His kit is said to feature a dual-form design — an activatable second form — combined with area damage and a sealed artifact mechanic that has yet to be fully detailed. His damage output is heavily dependent on proper setup: a poorly timed engagement will drastically reduce his burst potential. Riot confirms he is a skill-expressive AP assassin where execution and positioning are everything.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Release Date: Patch 26.13, June 24, 2026' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Locke is set to launch with patch 26.13, scheduled for June 24, 2026. He will be accompanied by a High Noon skin on day one — Akshan will also receive a High Noon skin in the same patch cycle. This marks the first time since Aurora (patch 14.13, 2024) that League of Legends is introducing a completely new champion, as Riot spent the interim period focused on VGUs and existing champion updates.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Dev Update: Ranked 5s Return and ARAM Mayhem Traits Removed' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Beyond Locke, the May 27 dev update also confirmed the return of Ranked 5s — organized five-man ranked queues — and announced the removal of Mayhem traits from ARAM. On the live game side, patch 26.11 shipped on May 28 with a support meta overhaul: enchanter runes and items received targeted nerfs while tank support options were buffed. Smolder also received a rework steering him toward critical strike builds.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Locke is shaping up to be the most anticipated champion of 2026. Mark June 24 on your calendar — the first new AP assassin in the mid lane since Aurora is almost here.",
          },
        ],
      },
    ],
  },
  {
    title: 'Locke revelado: el próximo campeón de LoL es un asesino AP de carril central',
    slug: 'riot-locke-champion-reveal-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Riot Games reveló oficialmente a Locke en el dev update del 27 de mayo de 2026: un asesino AP de alta explosión para el carril central, llegando en el parche 26.13 el 24 de junio. El primer campeón nuevo desde Aurora en 2024.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/dev/tldw-mayhem-ranked-5s-more-dev-update/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Nuevo campeón' }, { tag: 'Locke' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games ha desvelado oficialmente a Locke, el próximo campeón de League of Legends, en el dev update TL;DW publicado el 27 de mayo de 2026. Locke es un asesino AP de alta explosión diseñado para el carril central — el primer campeón completamente nuevo desde la llegada de Aurora en 2024. Riot lo presentó con el lema: \"Slinging nails and taking names\", una descripción que ya adelanta su identidad visual y estilo de juego.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Un kit basado en la preparación y la ejecución' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Según la información compartida por Riot y los primeros reportes del PBE, Locke utilizará proyectiles con forma de clavos como mecánica central. Su kit contaría con un diseño de doble forma — una segunda forma activable —, daño en área y un mecanismo de artefacto sellado que aún no ha sido detallado completamente. Su potencial de daño depende en gran medida de una buena preparación previa al combate: un engage mal ejecutado reducirá drásticamente su explosión. Riot confirma que se trata de un asesino AP expresivo donde la precisión y el posicionamiento lo son todo.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Fecha de lanzamiento: parche 26.13, el 24 de junio de 2026' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Locke llegará con el parche 26.13, programado para el 24 de junio de 2026. Vendrá acompañado de una skin High Noon desde el primer día — Akshan también recibirá una skin High Noon en el mismo ciclo de parche. Es la primera vez desde Aurora (parche 14.13, 2024) que League of Legends presenta un campeón completamente nuevo, ya que Riot dedicó ese periodo a reworks de campeones existentes (VGUs).",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Dev update: vuelven las Ranked 5s y se eliminan los rasgos de ARAM Mayhem' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Más allá de Locke, el dev update del 27 de mayo también confirmó el regreso de las Ranked 5s — colas clasificatorias organizadas de cinco jugadores — y anunció la eliminación de los rasgos de Mayhem en ARAM. En el juego en vivo, el parche 26.11 llegó el 28 de mayo con una revisión de la meta de soporte: los runas y objetos de encantadores recibieron nerfs específicos mientras se buffaron las opciones de tanques en soporte. Smolder también recibió un rework orientado a builds de golpe crítico.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Locke se perfila como el campeón más esperado de 2026. Apunta el 24 de junio en tu calendario — el primer asesino AP nuevo en el carril central desde Aurora está a punto de llegar.",
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
