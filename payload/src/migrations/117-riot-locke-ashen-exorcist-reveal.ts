import type { MigrationModule } from './runner'

export const id = '117-riot-locke-ashen-exorcist-reveal'
export const description = 'RIOT — Locke, l\'Exorciste des Cendres : révélation officielle du kit complet, patch 26.13 le 24 juin 2026'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-17T08:00:00.000Z'
const COVER = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Locke_0.jpg'
const SOURCE = 'https://www.leagueoflegends.com/en-us/news/game-updates/locke-the-ashen-exorcist-champion-reveal/'

const articles = [
  {
    title: "Locke, l'Exorciste des Cendres : kit complet révélé — sortie le 24 juin et skin High Noon",
    slug: 'locke-ashen-exorcist-reveal-kit-high-noon-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Riot Games dévoile le kit officiel de Locke, le 173e champion de League of Legends. Assassin AP du milieu, il arrive dans le patch 26.13 le 24 juin 2026 avec son skin de lancement High Noon.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Nouveau champion' }, { tag: 'Locke' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games vient de révéler officiellement le kit complet de Locke, l'Exorciste des Cendres, le 173e champion de League of Legends. Prévu dans le patch 26.13, il débarque sur le Rift le 24 juin 2026 pour marquer le début de la Saison 2, Acte 2 : Pandemonium. Il sera le seul nouveau champion sorti cette année, portant des attentes immenses de la part de la communauté.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Un exorciste de Demacia entre lumière et démons" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Corvin Locke est un exorciste originaire de Demacia, fils d'occultistes qui l'ont élevé dans le mensonge et l'hypocrisie. Là où les habitants du Royaume d'Acier accusent les démons d'être la source de la noirceur humaine, Locke est convaincu qu'ils n'en sont que la conséquence. Armé de rituels interdits et d'une vision du monde implacable, il traque les âmes pour en exposer l'obscurité — un exorcisme à la fois. Sa dernière cinématique de présentation le connecte d'ailleurs à la trame narrative de Vayne, ouvrant la voie à un event thématique autour de la possession démoniaque.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Un kit d'assassin AP centré sur les Clous Rituels" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Passif — Pieu d'Argent : renforce les auto-attaques avec des dégâts magiques supplémentaires, amplifiés contre les ennemis à basse vie. Q — Clous Rituels : projette des Clous de l'Âme qui marquent, ralentissent et blessent les cibles — peut être relancé deux fois supplémentaires. Attaquer un ennemi marqué consomme les marques pour des dégâts décuplés. W — Ignition de l'Âme : octroie une vitesse de déplacement décroissante mais inflige des dégâts vrais en pourcentage de vie par seconde ; Locke se soigne partiellement des dégâts reçus. E — Poursuite des Cendres : téléportation vers un emplacement ciblé, infligeant des dégâts magiques autour de lui à l'arrivée, se réinitialisant sur les éliminations. R — Purgatoire : ultime d'exécution en zone qui emprisonne dans un artefact maudit les ennemis marqués tombant sous un seuil de vie.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "High Noon Locke et potentiel méta" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Locke fera ses débuts avec le skin de lancement High Noon Locke, une esthétique western surnaturel qui colle parfaitement à son thème d'exorciste sans pitié. Son profil d'assassin AP à réinitialisation sur éliminations et ultimate d'exécution le place d'emblée dans la catégorie des champions potentiellement dominants en milieu de game, aussi bien en solo queue qu'en compétitif. Le meta de l'Acte 2 : Pandemonium s'annonce électrique.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Locke incarne la tension entre la rigueur apparente de Demacia et les ombres qu'elle dissimule. Rendez-vous sur le Rift le 24 juin pour son premier exorcisme.",
          },
        ],
      },
    ],
  },
  {
    title: 'Locke the Ashen Exorcist officially revealed: full kit, June 24 release, and High Noon skin',
    slug: 'locke-ashen-exorcist-reveal-kit-high-noon-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Riot Games has officially unveiled Locke's complete kit. The AP assassin brings nail-based marks, a risky movement speed steroid, and an execution ultimate to the mid lane — arriving in patch 26.13 on June 24, 2026.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'New Champion' }, { tag: 'Locke' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games has officially revealed the full kit of Locke, the Ashen Exorcist — League of Legends' 173rd champion. Arriving in patch 26.13 on June 24, 2026, Locke launches the start of Season 2, Act 2: Pandemonium. He is the only new champion released by Riot this year, making his reveal one of the most anticipated moments in recent LoL history.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "A Demacian Exorcist Walking a Razor's Edge" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Corvin Locke is a nail-slinging exorcist born into a Demacian family of occultists who raised him on lies and hypocrisy. Where most of Demacia blames demons for humanity's suffering, Locke believes they are merely a reflection of the darkness humans carry within themselves. Armed with forbidden rites and a ruthless worldview, he tears through every soul he encounters, exposing what is hidden — one exorcism at a time. His champion reveal cinematic ties him directly to Vayne's narrative, teasing a demonic-possession themed event on the horizon.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Full Kit Breakdown: Ritual Nails and an Execution Ultimate" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Passive — Silver Stake: Empowers basic attacks with bonus magic damage, scaling stronger against low-health enemies. Q — Ritual Nails: Fires a burst of Soul Nails that damage, mark, and slow enemies; can be recast twice more, with attacks against marked targets consuming marks for amplified damage. W — Soul Ignition: Grants decaying movement speed while dealing percentage health true damage per second; Locke heals back a portion of damage taken plus a bonus tied to missing health and time elapsed. E — Ashen Pursuit: Blinks to a target location, dealing magic damage on arrival; resets on takedowns for chained assassinations. R — Purgatory: AoE execution ultimate that traps marked enemies inside a cursed artifact when they fall below a health threshold.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "High Noon Locke and Meta Outlook" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Locke launches with the High Noon Locke skin — a supernatural western aesthetic that suits his ruthless exorcist persona perfectly. His combination of mark-stacking burst, E reset on takedowns, and an execute ultimate positions him as a high-ceiling AP assassin with serious snowball potential. Both solo queue players and professional teams will be watching closely when he hits live servers on June 24.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "With a fully revealed kit, a Vayne crossover in the works, and the Pandemonium act kicking off, Locke's arrival on June 24 is shaping up to be one of the biggest LoL moments of 2026.",
          },
        ],
      },
    ],
  },
  {
    title: 'Locke, el Exorcista Ceniciento, revelado oficialmente: kit completo, fecha el 24 de junio y skin High Noon',
    slug: 'locke-ashen-exorcist-reveal-kit-high-noon-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Riot Games ha desvelado oficialmente el kit completo de Locke, el campeón 173 de League of Legends. El asesino AP llega al carril central con clous rituales y un ultimate de ejecución, disponible en el parche 26.13 el 24 de junio de 2026.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Nuevo campeón' }, { tag: 'Locke' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games ha revelado oficialmente el kit completo de Locke, el Exorcista Ceniciento, el campeón número 173 de League of Legends. Llegará en el parche 26.13 el 24 de junio de 2026, marcando el inicio de la Temporada 2, Acto 2: Pandemonium. Es el único campeón nuevo de Riot este año, lo que convierte su presentación en uno de los momentos más esperados de la historia reciente del juego.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Un exorcista de Demacia entre la luz y las sombras" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Corvin Locke es un exorcista nacido en Demacia, hijo de ocultistas que lo criaron entre mentiras e hipocresía. Mientras la mayoría en el Reino del Acero culpa a los demonios de los males de la humanidad, Locke está convencido de que son simplemente su consecuencia. Armado con ritos prohibidos y una visión del mundo despiadada, desgarra cada alma que encuentra para exponer lo que esconde, un exorcismo a la vez. Su cinemática de presentación lo conecta con la historia de Vayne, anticipando un evento temático sobre posesión demoníaca.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Desglose completo del kit: Clavos Rituales y ultimate de ejecución" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Pasiva — Estaca de Plata: potencia los ataques básicos con daño mágico adicional, más fuerte contra enemigos con poca vida. Q — Clavos Rituales: lanza Clavos del Alma que dañan, marcan y ralentizan; puede reactivarse dos veces más y atacar a enemigos marcados consume las marcas para multiplicar el daño. W — Ignición del Alma: otorga velocidad de movimiento decreciente pero inflige daño verdadero porcentual por segundo; Locke se cura parte del daño recibido. E — Persecución Cenicienta: teletransportación a un punto elegido con daño mágico al llegar; se reinicia con bajas para encadenar eliminaciones. R — Purgatorio: ultimate de ejecución en área que atrapa en un artefacto maldito a los enemigos marcados que caen por debajo de un umbral de vida.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "High Noon Locke y perspectiva de meta" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Locke llegará con la skin de lanzamiento High Noon Locke, una estética western sobrenatural que encaja a la perfección con su perfil de exorcista sin piedad. Su combinación de marcas acumulables, reinicio de E tras eliminaciones y ultimate de ejecución lo convierten en un asesino AP con enorme potencial de snowball, tanto en partidas clasificatorias como en el juego profesional. Todo el foco de la comunidad y de los equipos de la LEC y el LCK estará puesto en él desde el 24 de junio.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Con el kit revelado, un cruce narrativo con Vayne en el horizonte y el Acto Pandemonium a punto de comenzar, la llegada de Locke el 24 de junio promete ser uno de los mayores momentos de League of Legends en 2026.",
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
