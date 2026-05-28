import type { MigrationModule } from './runner'

export const id = '043-riot-locke-nouveau-champion-2026'
export const description = 'RIOT — Locke, seul nouveau champion LoL de 2026 : assassin AP milieu inspiré de Jujutsu Kaisen'

const DATE = '2026-05-15T08:00:00.000Z'
const COVER = 'https://img.youtube.com/vi/T82siGxdRhY/maxresdefault.jpg'
const SOURCE = 'https://www.leagueoflegends.com/en-us/news/dev/dev-2026-season-one-gameplay-preview/'

const articles = [
  {
    title: 'Locke : le seul nouveau champion LoL de 2026 est un assassin AP inspiré de Jujutsu Kaisen',
    slug: 'locke-nouveau-champion-2026-assassin-ap-milieu-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: COVER,
    excerpt:
      'Riot Games a confirmé que Locke sera le seul nouveau champion de League of Legends en 2026. Assassin AP jouable au milieu ou dans la jungle, il s\'inspire visuellement et mécaniquement de l\'animé Jujutsu Kaisen.',
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Nouveau champion' }, { tag: 'Locke' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games a confirmé par la voix d'Andrei \"Meddler\" van Roon, directeur du studio League of Legends, qu'un seul nouveau champion sera publié en 2026 : Locke. Sa sortie est prévue pour la Saison 2, Acte 2 — baptisé \"Pandemonium\" — aux alentours du Patch 26.15, soit vers le 29 juillet 2026.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Un assassin AP venu de Demacia' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Locke est un assassin AP destiné au milieu de carte, avec une viabilité potentielle dans la jungle. Son style visuel rappelle immédiatement Nanami Kento de l'animé Jujutsu Kaisen : silhouette encapuchonnée, lunettes rondes à verres rouges et carquois dans le dos. Ses capacités semblent tout aussi référencées : son sort Q, intitulé \"Soul Nail\", projette un gigantesque clou fantomatique en ligne droite, une mécanique proche des techniques de Nobara Kugisaki dans le même manga.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Changement de forme et artefacts scellés' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Les premières images du gameplay font apparaître une seconde forme encore plus éthérée pour Locke, infligeant des dégâts en zone autour de lui. Le champion peut également ramasser des \"artefacts scellés\" dont le rôle précis dans son kit reste à préciser. Sa trame narrative prend racine à Demacia : une scène d'introduction le montre s'adressant à un barman qui l'avertit que \"personne ne revient de ces forêts inchangé\".",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Un choix stratégique de Riot pour 2026' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La décision de limiter les sorties à un seul champion cette année s'inscrit dans la stratégie \"League Next\", refonte majeure du jeu sur laquelle Riot concentre ses ressources. C'est aussi la raison pour laquelle Locke cristallise l'attention de la communauté : il n'aura pas de concurrent interne en 2026. Les deux reworks confirmés — dont celui de Shyvana sorti en mars — complètent le programme.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Avec un seul nouveau champion prévu pour toute l'année, Locke s'annonce comme l'un des sorties les plus attendues de l'histoire récente de League of Legends. Rendez-vous à l'été 2026.",
          },
        ],
      },
    ],
  },
  {
    title: 'Locke: The Only New LoL Champion of 2026 Is a JJK-Inspired AP Assassin',
    slug: 'locke-new-champion-2026-ap-assassin-mid-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: COVER,
    excerpt:
      'Riot Games confirmed that Locke will be the only new League of Legends champion in 2026 — an AP assassin for the mid lane or jungle visually and mechanically inspired by the anime Jujutsu Kaisen.',
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'New Champion' }, { tag: 'Locke' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Riot Games head of League studio Andrei "Meddler" van Roon has confirmed that only one new champion will be released in League of Legends in 2026: Locke. His arrival is tied to Season 2, Act 2 — codenamed "Pandemonium" — targeting Patch 26.15, expected around July 29, 2026.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'An AP Assassin from Demacia' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Locke is designed as an AP assassin for the mid lane, with potential jungle viability. His visual design immediately evokes Jujutsu Kaisen's Nanami Kento: hooded figure, round red-tinted glasses, and a quiver on his back. His gameplay follows suit — his Q ability, called \"Soul Nail,\" fires a giant ghostly nail in a straight line, a mechanic reminiscent of Nobara Kugisaki's cursed nail techniques from the same anime.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Form Swapping and Sealed Artifacts' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Early gameplay footage reveals a second, more spectral form for Locke that deals AoE damage in a circle around him. He can also interact with "sealed artifacts," though their exact role in his kit remains unclear pending an official reveal. His lore is rooted in Demacia: an introductory cinematic shows him speaking to a bartender who warns that "no one that goes into those woods comes back the same."',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'A Strategic Choice as Riot Builds League Next' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The decision to release only one champion this year is directly tied to \"League Next,\" Riot's large-scale rework of the game's core systems, which is absorbing a significant portion of the development team's bandwidth. Two reworks are also on the calendar — Shyvana launched in March 2026, while a second remains unconfirmed. With no other new champion competing for the spotlight, Locke carries enormous community expectations heading into the summer.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Locke is shaping up to be one of the most anticipated champion releases in recent League of Legends history. All eyes turn to summer 2026.',
          },
        ],
      },
    ],
  },
  {
    title: 'Locke: El único campeón nuevo de LoL en 2026 es un asesino AP inspirado en Jujutsu Kaisen',
    slug: 'locke-nuevo-campeon-2026-asesino-ap-carril-medio-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: COVER,
    excerpt:
      'Riot Games confirmó que Locke será el único campeón nuevo de League of Legends en 2026. Un asesino AP para el carril central o la jungla, con un diseño visual y mecánico inspirado en el anime Jujutsu Kaisen.',
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Nuevo campeón' }, { tag: 'Locke' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Andrei "Meddler" van Roon, director del estudio de League of Legends en Riot Games, ha confirmado que solo habrá un campeón nuevo en 2026: Locke. Su llegada está prevista para la Temporada 2, Acto 2 — conocido como "Pandemonium" — aproximadamente en el Parche 26.15, alrededor del 29 de julio de 2026.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Un asesino AP procedente de Demacia' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Locke está diseñado como un asesino AP para el carril central, con posible viabilidad en la jungla. Su diseño visual recuerda inmediatamente a Nanami Kento de Jujutsu Kaisen: figura encapuchada, gafas redondas de cristales rojos y una aljaba en la espalda. Su gameplay sigue la misma línea — su habilidad Q, llamada "Soul Nail", lanza un enorme clavo fantasmal en línea recta, una mecánica similar a las técnicas de clavos malditos de Nobara Kugisaki en el mismo anime.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Cambio de forma y artefactos sellados' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Las primeras imágenes del gameplay muestran una segunda forma aún más espectral para Locke, que inflige daño en área alrededor de él. También puede interactuar con "artefactos sellados", aunque su rol exacto en el kit aún no está confirmado oficialmente. Su trasfondo narrativo está anclado en Demacia: una cinemática introductoria lo muestra hablando con un tabernero que le advierte que "nadie que entra en esos bosques vuelve siendo el mismo".',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Una decisión estratégica mientras Riot construye League Next' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'La decisión de publicar un único campeón este año está directamente ligada a "League Next", la gran renovación de los sistemas centrales del juego que absorbe buena parte del equipo de desarrollo. También hay dos reworks en el calendario: el de Shyvana se lanzó en marzo de 2026, mientras que el segundo no ha sido confirmado. Sin otro campeón nuevo compitiendo por la atención de la comunidad, Locke llega con enormes expectativas de cara al verano.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Locke se perfila como uno de los lanzamientos de campeón más esperados de la historia reciente de League of Legends. Nos vemos en el verano de 2026.',
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
