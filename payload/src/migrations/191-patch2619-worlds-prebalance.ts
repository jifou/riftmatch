import type { MigrationModule } from './runner'

export const id = '191-patch2619-worlds-prebalance'
export const description = "Patch 26.19 Worlds: pré-balance majeure, 10 buffs et 6 nerfs avant le World Championship 2026"

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-09-23T18:00:00.000Z'

const articles = [
  {
    title: "Patch 26.19 : Riot publie le premier pré-balance majeur avant les Worlds 2026",
    slug: 'patch2619-worlds-prebalance-fr',
    locale: 'fr',
    status: 'published',
    category: 'balance',
    newsType: 'patch' as const,
    newsSubtype: 'balancechanges' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Le patch 26.19 est sorti le 23 septembre avec un premier round de changements pré-Worlds : 10 champions buffés, 6 nerfs (Nasus, Nocturne, Poppy, Rumble, Ryze, Vi), et des ajustements aux items support et Teleport pour haut.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-19-notes/',
    tags: [{ tag: 'Patch 26.19' }, { tag: 'Worlds 2026' }, { tag: 'Balance' }, { tag: 'Pre-Worlds' }],
    content: [
      { type: 'p', children: [{ text: "Le patch 26.19, sorti le 23 septembre, représente le premier des deux pré-balance majeurs pour le League of Legends World Championship 2026. Riot Games a déployé 10 buffes de champions et 6 nerfs ciblés pour affiner la méta avant le tournoi mondial." }] },
      { type: 'h2', children: [{ text: "Les champions nerfs" }] },
      { type: 'p', children: [{ text: "Six champions ont reçu des nerfs dans ce patch : Nasus (réduction du bonus Q), Nocturne (augmentation du cooldown de l'ultimate), Poppy (réduction du dégât Q contre les monstres), Rumble (réduction du attack speed passif), Ryze, et Vi (augmentation du cooldown de l'ultimate de 60/55/50s à 80/70/60s, avec réduction du ratio de dégât)." }] },
      { type: 'h2', children: [{ text: "Les champions buffés" }] },
      { type: 'p', children: [{ text: "Dix champions ont été renforcés, dont Aatrox et Aphelios, pour augmenter la diversité de pick au Worlds. Ces buffs visent à redynamiser la méta de jungle et de mid-lane, et à offrir plus d'options viables pour les equipes." }] },
      { type: 'h2', children: [{ text: "Ajustements d'items et de mécaniques" }] },
      { type: 'p', children: [{ text: "Le patch inclut également des modifications aux items support (starter items) et à Teleport pour les tops lanes, afin d'ajuster l'équilibre macro-économique du jeu. Lucian reçoit un réajustement (ni buff ni nerf) suite à ses performances récentes." }] },
      { type: 'h2', children: [{ text: "Deux rounds de pré-Worlds pour la stabilité méta" }] },
      { type: 'p', children: [{ text: "Ce premier patch pré-Worlds est suivi d'un second round de changements sur le prochain patch, permettant à Riot de finely-tuner la méta avant l'arrivée des équipes en octobre à Los Angeles pour la play-in stage." }] },
      { type: 'h2', children: [{ text: "Skins et contenu cosmetique" }] },
      { type: 'p', children: [{ text: "Le patch ajoute également les skins Coven Janna, Coven Mel, Old God Anivia et Old God Urgot disponibles le 23 septembre, avec leurs chromas respectifs." }] },
      { type: 'blockquote', children: [{ text: "Patch 26.19 : le premier lever de rideau sur la méta des Worlds 2026, avec un équilibre visant à maximiser la diversité et la compétitivité." }] },
    ],
  },
  {
    title: "Patch 26.19: Riot's First Major Pre-Worlds Balance Update Features 10 Champion Buffs and 6 Nerfs",
    slug: 'patch2619-worlds-prebalance-en',
    locale: 'en',
    status: 'published',
    category: 'balance',
    newsType: 'patch' as const,
    newsSubtype: 'balancechanges' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Patch 26.19 launched on September 23 with the first major pre-Worlds balance sweep: 10 champion buffs, 6 nerfs (Nasus, Nocturne, Poppy, Rumble, Ryze, Vi), plus adjustments to support items and Teleport for top laners.",
    sourceUrl: 'https://www.altchar.com/game-news/league-of-legends-patch-26.19-all-champion-buffs-nerfs-and-changes-a1WmX6f2aLH4',
    tags: [{ tag: 'Patch 26.19' }, { tag: 'Worlds 2026' }, { tag: 'Balance' }, { tag: 'Pre-Worlds' }],
    content: [
      { type: 'p', children: [{ text: "Patch 26.19, released on September 23, marks Riot Games' first major pre-Worlds balance update for the League of Legends World Championship 2026. The patch features 10 champion buffs, 6 targeted nerfs, and adjustments to items and mechanics to refine the competitive meta." }] },
      { type: 'h2', children: [{ text: "Champions receiving nerfs" }] },
      { type: 'p', children: [{ text: "Six champions were nerfed in this patch: Nasus (Q bonus damage reduction), Nocturne (ult cooldown increase), Poppy (Q damage to monsters reduction), Rumble (passive attack speed reduction), Ryze, and Vi (ultimate cooldown increased from 60/55/50s to 80/70/60s, with damage ratio reduction)." }] },
      { type: 'h2', children: [{ text: "Champions receiving buffs" }] },
      { type: 'p', children: [{ text: "Ten champions were buffed, including Aatrox and Aphelios, to increase pick diversity heading into Worlds. These buffs target underperforming roles and aim to open up more viable options for professional teams." }] },
      { type: 'h2', children: [{ text: "Item and mechanic adjustments" }] },
      { type: 'p', children: [{ text: "The patch also includes modifications to support starter items and Teleport for top laners to balance macro-economic gameplay. Lucian receives a readjustment following his recent performances." }] },
      { type: 'h2', children: [{ text: "Two rounds of pre-Worlds tuning for meta stability" }] },
      { type: 'p', children: [{ text: "This first pre-Worlds patch is followed by a second round of changes on the next patch, allowing Riot to fine-tune the competitive meta before teams arrive in Los Angeles in October for the play-in stage." }] },
      { type: 'h2', children: [{ text: "Cosmetic content" }] },
      { type: 'p', children: [{ text: "The patch also adds Coven Janna, Coven Mel, Old God Anivia, and Old God Urgot skins available September 23, each with corresponding chromas." }] },
      { type: 'blockquote', children: [{ text: "Patch 26.19: Riot's opening act in tuning the Worlds 2026 meta, aimed at maximizing diversity and competitive integrity." }] },
    ],
  },
  {
    title: "Patch 26.19: El Primer Grand Ajuste Pre-Worlds con 10 Buffs y 6 Nerfs de Campeones",
    slug: 'patch2619-worlds-prebalance-es',
    locale: 'es',
    status: 'published',
    category: 'balance',
    newsType: 'patch' as const,
    newsSubtype: 'balancechanges' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "El parche 26.19 se lanzó el 23 de septiembre con el primer ajuste de balance pre-Worlds importante: 10 buffs de campeones, 6 nerfs (Nasus, Nocturne, Poppy, Rumble, Ryze, Vi), además de ajustes a items de soporte y Teleport.",
    sourceUrl: 'https://www.altchar.com/game-news/league-of-legends-patch-26.19-all-champion-buffs-nerfs-and-changes-a1WmX6f2aLH4',
    tags: [{ tag: 'Patch 26.19' }, { tag: 'Worlds 2026' }, { tag: 'Balance' }, { tag: 'Pre-Worlds' }],
    content: [
      { type: 'p', children: [{ text: "El parche 26.19, lanzado el 23 de septiembre, marca el primer ajuste de balance pre-Worlds importante de Riot Games para el League of Legends World Championship 2026. El parche presenta 10 buffs de campeones, 6 nerfs orientados y ajustes a items y mecánicas para refinar la meta competitiva." }] },
      { type: 'h2', children: [{ text: "Campeones que reciben nerfs" }] },
      { type: 'p', children: [{ text: "Seis campeones fueron nerfeados en este parche: Nasus (reducción de daño de bonificación Q), Nocturne (aumento de cooldown de ulti), Poppy (reducción de daño Q contra monstruos), Rumble (reducción de ataque pasivo), Ryze, y Vi (cooldown de ulti aumentado de 60/55/50s a 80/70/60s, con reducción de ratio de daño)." }] },
      { type: 'h2', children: [{ text: "Campeones que reciben buffs" }] },
      { type: 'p', children: [{ text: "Diez campeones fueron mejorados, incluyendo Aatrox y Aphelios, para aumentar la diversidad de picks rumbo a Worlds. Estos buffs se dirigen a roles con bajo desempeño y tienen como objetivo abrir más opciones viables para los equipos profesionales." }] },
      { type: 'h2', children: [{ text: "Ajustes de items y mecánicas" }] },
      { type: 'p', children: [{ text: "El parche también incluye modificaciones a items iniciales de soporte y Teleport para tops para equilibrar el juego macro-economico. Lucian recibe un reajuste luego de sus actuaciones recientes." }] },
      { type: 'h2', children: [{ text: "Dos rondas de ajuste pre-Worlds para estabilidad de meta" }] },
      { type: 'p', children: [{ text: "Este primer parche pre-Worlds es seguido por una segunda ronda de cambios en el próximo parche, permitiendo a Riot afinar la meta competitiva antes de que los equipos lleguen a Los Ángeles en octubre para la etapa de play-in." }] },
      { type: 'h2', children: [{ text: "Contenido cosmético" }] },
      { type: 'p', children: [{ text: "El parche también agrega las skins Coven Janna, Coven Mel, Old God Anivia y Old God Urgot disponibles el 23 de septiembre, cada una con sus cromas correspondientes." }] },
      { type: 'blockquote', children: [{ text: "Parche 26.19: El acto de apertura de Riot en el ajuste de la meta de Worlds 2026, con el objetivo de maximizar la diversidad e integridad competitiva." }] },
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
