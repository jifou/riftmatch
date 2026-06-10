import type { MigrationModule } from './runner'

export const id = '102-riot-locke-champion-reveal'
export const description = 'RIOT — Locke, l\'Exorciste des Cendres : révélation du 173e champion LoL, sortie patch 26.13 (24 juin 2026)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-10T08:00:00.000Z'

const articles = [
  // ──────────────────────────────────────────────
  // FR
  // ──────────────────────────────────────────────
  {
    title: "Locke, l'Exorciste des Cendres : le 173e champion de LoL arrive le 24 juin",
    slug: 'locke-exorciste-cendres-nouveau-champion-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/ynG4T9yLKFs/maxresdefault.jpg',
    excerpt: "Riot Games a officiellement révélé Locke, l'Exorciste des Cendres, 173e champion de League of Legends. Cet assassin AP de Demacia débarque avec le patch 26.13 le 24 juin 2026, accompagné d'un skin High Noon et d'un événement narratif centré sur une Vayne possédée.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/champions/locke/',
    tags: [
      { tag: 'LoL' },
      { tag: 'Riot Games' },
      { tag: 'Nouveau Champion' },
      { tag: 'Locke' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games a officiellement révélé Locke, l'Exorciste des Cendres, 173e champion de League of Legends. Ce chasseur de démons originaire de Demacia sera disponible sur les serveurs live avec le patch 26.13, prévu le 24 juin 2026. Seul nouveau champion de l'année 2026, Locke est un assassin AP orienté mid lane conçu autour d'un système de marquage et de détonation via ses Soul Nails.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Un chasseur de démons ancré dans la lore de Demacia" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Dans le cinématique \"Back from the Brink\", Locke apparaît comme un jeune homme blond aux lunettes rouges portant un cercueil rempli d'énormes clous sur le dos. Son histoire est directement connectée à Vayne : un événement de possession démoniaque servira de fil narratif pour le second acte de la saison 2026. Locke incarne le pendant masculin du chasseur de monstres dans l'univers de LoL, là où Vayne reste l'icône féminine du genre.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Kit : Soul Nails et exécution en burst" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Son kit repose sur un passif (Silver Stake) infligeant des dégâts magiques bonus en fonction des PV manquants. Son Q (Ritual Nails) projette des clous qui marquent et ralentissent les ennemis, détonables via les attaques pour un burst massif. Son W (Soul Ignition) lui accorde de la vitesse de déplacement mais le blesse par seconde, compensé par un soin basé sur les dégâts encaissés. Son E (Ashen Pursuit) lui permet de se téléporter puis de plonger sur sa cible en infligeant des dégâts en chemin. Son ultime (Purgatory) envoie un artefact qui enchaîne les ennemis proches avec des Soul Nails — les champions marqués sous un seuil de PV sont aspirés et exécutés.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Locke sera le seul nouveau champion de League of Legends en 2026. Sa sortie le 24 juin sur le patch 26.13 s'accompagne d'un skin High Noon et d'un événement narratif inédit. Un profil d'assassin AP à haute récompense qui promet de redistribuer la meta mid lane dès son arrivée.",
          },
        ],
      },
    ],
  },
  // ──────────────────────────────────────────────
  // EN
  // ──────────────────────────────────────────────
  {
    title: "Locke, the Ashen Exorcist: League of Legends' 173rd champion drops June 24",
    slug: 'locke-ashen-exorcist-new-champion-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/ynG4T9yLKFs/maxresdefault.jpg',
    excerpt: "Riot Games officially revealed Locke, the Ashen Exorcist, as the 173rd League of Legends champion. This AP assassin from Demacia launches with Patch 26.13 on June 24, 2026, alongside a High Noon skin and a demonic narrative event featuring a possessed Vayne.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/champions/locke/',
    tags: [
      { tag: 'LoL' },
      { tag: 'Riot Games' },
      { tag: 'New Champion' },
      { tag: 'Locke' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games has officially revealed Locke, the Ashen Exorcist, as the 173rd champion coming to League of Legends. The Demacian demon hunter will hit live servers with Patch 26.13 on June 24, 2026, making him the only new champion released in 2026. Locke is designed as a high-burst AP assassin for the mid lane, built around a unique Soul Nails marking-and-detonation system.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "A demon hunter woven into Demacia's lore" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Revealed in the cinematic \"Back from the Brink\", Locke is depicted as a blonde young man with red glasses who carries a coffin full of massive nails — his weapons against demons. His narrative is tightly linked to Vayne: a story arc around demonic possession will serve as the central thread of Season 2026's second act. Locke arrives as the male counterpart to Vayne in the monster-hunter niche of Runeterra's lore.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Kit breakdown: Soul Nails and execute potential" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Locke's passive (Silver Stake) deals bonus magic damage on-hit, scaling with the enemy's missing health. His Q (Ritual Nails) throws nails that mark and slow enemies, with attacks detonating the marks for massive damage. His W (Soul Ignition) grants movement speed but deals true damage per second to himself, healed back through incoming damage. His E (Ashen Pursuit) blinks to a location then dashes to a target dealing damage along the path. His ultimate (Purgatory) launches an artifact that fires chained Soul Nails at nearby enemies — marked champions below a health threshold are dragged in and executed.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Locke launches on June 24 in Patch 26.13 with a High Noon skin. As the only new champion of 2026, he represents Riot's flagship assassin design for the year and is expected to shake up the mid lane meta on release.",
          },
        ],
      },
    ],
  },
  // ──────────────────────────────────────────────
  // ES
  // ──────────────────────────────────────────────
  {
    title: "Locke, el Exorcista de las Cenizas: el campeón 173 de LoL llega el 24 de junio",
    slug: 'locke-exorcista-cenizas-nuevo-campeon-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/ynG4T9yLKFs/maxresdefault.jpg',
    excerpt: "Riot Games reveló oficialmente a Locke, el Exorcista de las Cenizas, el campeón número 173 de League of Legends. Este asesino AP de Demacia llega con el parche 26.13 el 24 de junio de 2026, junto a un skin High Noon y un evento narrativo con una Vayne poseída.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/champions/locke/',
    tags: [
      { tag: 'LoL' },
      { tag: 'Riot Games' },
      { tag: 'Nuevo Campeón' },
      { tag: 'Locke' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games ha revelado oficialmente a Locke, el Exorcista de las Cenizas, el campeón número 173 de League of Legends. Este cazador de demonios originario de Demacia llegará a los servidores en vivo con el parche 26.13, previsto para el 24 de junio de 2026. Siendo el único nuevo campeón del año 2026, Locke es un asesino AP diseñado para el carril central, construido alrededor de un sistema de marcado y detonación con sus Soul Nails.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Un cazador de demonios en la lore de Demacia" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Revelado en la cinemática \"Back from the Brink\", Locke aparece como un joven rubio con gafas rojas que carga un ataúd lleno de enormes clavos en la espalda. Su historia está directamente relacionada con Vayne: un arco narrativo sobre posesión demoníaca marcará el segundo acto de la temporada 2026. Locke se convierte en el equivalente masculino de Vayne en el nicho de cazadores de monstruos del universo de Runaterra.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Kit: Soul Nails y potencial de ejecución" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Su pasivo (Silver Stake) inflige daño mágico adicional en cada ataque, escalando con la vida faltante del enemigo. Su Q (Ritual Nails) lanza clavos que marcan y ralentizan, con ataques que detonan las marcas para un daño masivo. Su W (Soul Ignition) otorga velocidad de movimiento pero causa daño verdadero por segundo a sí mismo, recuperado a través del daño recibido. Su E (Ashen Pursuit) lo teletransporta a una ubicación y luego se lanza hacia su objetivo infligiendo daño en el trayecto. Su ulti (Purgatory) lanza un artefacto que encadena Soul Nails a los enemigos cercanos, ejecutando a los campeones marcados que estén por debajo de un umbral de vida.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Locke se lanza el 24 de junio con el parche 26.13 junto a un skin High Noon. Como único campeón nuevo de 2026, es el diseño de asesino insignia de Riot para este año y promete transformar la meta del carril central desde su llegada.",
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
      console.log(`  → skip ${a.slug}`)
      continue
    }
    await payload.create({ collection: 'news', data: a as any })
    console.log(`  ✅ ${a.locale.toUpperCase()} — ${a.title}`)
  }
  console.log('✅ Migration 102 terminée')
}
