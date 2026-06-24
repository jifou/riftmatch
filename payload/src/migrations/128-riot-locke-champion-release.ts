import type { MigrationModule } from './runner'

export const id = '128-riot-locke-champion-release'
export const description = 'RIOT — Locke, l\'Exorciste des Cendres : nouveau champion AP assassin disponible dans le patch 26.13'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-24T08:00:00.000Z'
const COVER = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Locke_0.jpg'
const SOURCE = 'https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-13-notes/'

const articles = [
  {
    title: "Locke, l'Exorciste des Cendres : le premier assassin AP mid depuis Sylas débarque dans LoL",
    slug: 'locke-exorciste-cendres-champion-sortie-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Locke, l'Exorciste des Cendres, est le nouveau champion League of Legends disponible dès le patch 26.13 ce 24 juin. AP assassin de mid lane, il est le premier du genre depuis Sylas il y a sept ans.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Nouveau champion' }, { tag: 'Locke' }, { tag: 'Patch 26.13' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Aujourd'hui, le patch 26.13 de League of Legends marque l'arrivée tant attendue de Locke, l'Exorciste des Cendres. Ce champion demacien manie les Clous de l'Âme et des rites interdits pour traquer ses ennemis et révéler les ténèbres qui sommeillent en eux. Il s'impose comme le premier assassin AP mid lane à rejoindre le jeu depuis Sylas, sorti il y a près de sept ans — un vide que de nombreux joueurs espéraient voir comblé.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Un kit taillé pour l'assassinat magique" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La passivité de Locke confère à ses attaques des dégâts magiques supplémentaires, amplifiés selon les points de vie manquants de la cible — un scaling naturel vers l'exécution. Son Q lui permet de projeter des Clous de l'Âme qui marquent les ennemis touchés ; Locke peut ensuite consommer ces marques pour déclencher des dégâts bonus sur ses attaques. Son W embrase son âme pendant 6 secondes, lui accordant jusqu'à 70 % de vitesse d'attaque bonus et jusqu'à 60 % de vitesse de déplacement (+ 2 % par 100 PA), tout en stockant de la vie grise correspondant aux dégâts subis — une mécanique de survie unique pour un assassin.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Ashen Pursuit et Purgatoire : mobilité et exécution" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Son E, Poursuite Cendrée, est la clé de sa mobilité : pendant 4 secondes, Locke gagne 275 de portée bonus et peut désigner une cible. Il s'élance alors vers elle, infligeant des dégâts magiques aux ennemis traversés et appliquant les effets On-Hit à la cible principale. Son ultime, Purgatoire, projette un artefact liant qui inflige des dégâts et peut exécuter les ennemis touchés — et Locke gagne en puissance chaque fois qu'il scelle un champion adverse. Un combo en rafale typique d'un assassin AP, mais avec une couche de scaling et de résistance inédite.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "High Noon Locke et compétitif" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Locke est lancé avec son skin de sortie High Noon (1 350 PE), aux côtés du High Noon Akshan également disponible dès ce patch. En compétitif, Riot a confirmé que Locke ne sera pas activé pour le MSI 2026 — la règle standard impose deux semaines de live avant toute autorisation en tournoi. Les pros devront donc attendre, mais les files classées ont déjà accès à ce nouveau hunter dès aujourd'hui.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Locke comble un vide de sept ans dans le pool des assassins AP. Sa mécanique de vie grise et son scaling exécution en font déjà l'un des champions les plus attendus de 2026.",
          },
        ],
      },
    ],
  },
  {
    title: "Locke, the Ashen Exorcist: The First AP Mid Assassin Since Sylas Is Now Live in LoL",
    slug: 'locke-ashen-exorcist-champion-release-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Locke, the Ashen Exorcist, is League of Legends' newest champion, launching today in Patch 26.13. An AP mid lane assassin, he is the first of his kind since Sylas launched seven years ago.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'New Champion' }, { tag: 'Locke' }, { tag: 'Patch 26.13' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "League of Legends Patch 26.13 goes live today, June 24, 2026, and with it arrives Locke, the Ashen Exorcist — one of the most anticipated champion releases in years. A Demacian exorcist who wields Soul Nails and forbidden rites to hunt his prey and expose the darkness within, Locke is the first dedicated AP assassin in the mid lane since Sylas debuted nearly seven years ago. The gap has been long, and the community is eager to see how he fits into the meta.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "A Kit Built for Magic Burst" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Locke's passive gives his attacks bonus magic damage that scales with the target's missing health — a natural execute curve. His Q lets him throw Soul Nails that mark hit enemies, which he can then consume to deal bonus damage on subsequent attacks. His W ignites his soul for 6 seconds, granting up to 70% bonus attack speed and up to 60% bonus movement speed (+ 2% per 100 AP) — but here's the twist: while active, he stores grey health equal to damage taken from enemy champions, giving him a uniquely tanky window for an assassin.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Ashen Pursuit and Purgatory: Mobility Meets Execution" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Locke's E, Ashen Pursuit, is his gap-closer: for 4 seconds, he gains 275 bonus range and can target an enemy. He then dashes toward them, dealing magic damage to enemies in his path and applying on-hit effects to the primary target. His ultimate, Purgatory, throws a binding artifact that deals damage and can execute enemies — and each time Locke seals away an enemy champion, he grows more powerful. The full combo creates a burst assassin pattern with a deeper execution-scaling layer than most AP mids.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "High Noon Locke and Pro Play" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Locke launches alongside his release skin, High Noon Locke (1,350 RP), releasing alongside High Noon Akshan in the same patch. On the competitive side, Riot confirmed Locke will not be enabled for MSI 2026 — standard protocol requires at least two weeks on live servers before a champion can appear in professional tournaments. Pros will have to wait, but ranked queues are already open for business on day one.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Locke fills a seven-year gap in the AP assassin roster. His grey health mechanic and execute scaling make him one of the most mechanically interesting champions Riot has released in recent memory.",
          },
        ],
      },
    ],
  },
  {
    title: "Locke, el Exorcista Ceniciento: el primer asesino AP de carril central desde Sylas ya está disponible en LoL",
    slug: 'locke-exorcista-ceniciento-lanzamiento-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Locke, el Exorcista Ceniciento, es el nuevo campeón de League of Legends disponible hoy con el parche 26.13. Asesino AP de carril central, es el primero de su estilo desde Sylas, hace siete años.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Nuevo campeón' }, { tag: 'Locke' }, { tag: 'Parche 26.13' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "El parche 26.13 de League of Legends llega hoy, 24 de junio de 2026, y con él debuta Locke, el Exorcista Ceniciento. Este campeón demaciano empuña Clavos del Alma y ritos prohibidos para cazar a sus enemigos y revelar la oscuridad que llevan dentro. Es el primer asesino AP dedicado al carril central desde el lanzamiento de Sylas hace casi siete años, un vacío que la comunidad llevaba tiempo pidiendo que Riot llenara.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Un kit diseñado para el burst mágico" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La pasiva de Locke añade daño mágico adicional a sus ataques, escalando con la vida que le falta al objetivo — una curva de ejecución natural. Su Q lanza Clavos del Alma que marcan a los enemigos impactados; Locke puede consumir esas marcas para infligir daño bonus con sus ataques. Su W enciende su alma durante 6 segundos, otorgándole hasta un 70 % de velocidad de ataque adicional y hasta un 60 % de velocidad de movimiento bonus (+ 2 % por cada 100 PA). Además, mientras está activa, almacena vida gris equivalente al daño recibido de campeones enemigos — una mecánica de supervivencia única para un asesino.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Persecución Cenicienta y Purgatorio: movilidad y ejecución" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Su E, Persecución Cenicienta, es su herramienta de movilidad: durante 4 segundos, Locke gana 275 de rango adicional y puede designar un objetivo. Luego se lanza hacia él, infligiendo daño mágico a los enemigos que atraviesa y aplicando efectos On-Hit al objetivo principal. Su definitiva, Purgatorio, lanza un artefacto que ata y daña a los enemigos, con posibilidad de ejecutar — y cada vez que Locke sella a un campeón rival, gana más poder. El combo completo ofrece un patrón de asesino de burst con una capa de escalado de ejecución más profunda que la mayoría de magos de carril central.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "High Noon Locke y el competitivo" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Locke se lanza junto a su skin de salida High Noon (1 350 PE), que llega al mismo tiempo que High Noon Akshan en este parche. En el plano competitivo, Riot confirmó que Locke no estará habilitado para el MSI 2026 — el protocolo estándar exige al menos dos semanas en servidores en vivo antes de que un campeón pueda aparecer en torneos profesionales. Los pros tendrán que esperar, pero las colas clasificatorias ya están abiertas desde el primer día.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Locke llena un vacío de siete años en el pool de asesinos AP. Su mecánica de vida gris y su escalado de ejecución lo convierten en uno de los campeones más esperados de 2026.",
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
