import type { MigrationModule } from './runner'

export const id = '054-riot-eternal-aspects-leona-diana-skins'
export const description = 'RIOT — Eternal Aspects Leona & Diana : skins Légendaires + édition Mythique le 27 mai 2026'

const DATE = '2026-05-20T08:00:00.000Z'
const COVER = 'https://img.youtube.com/vi/hoF7DAqDc4U/maxresdefault.jpg'
const SOURCE = 'https://www.leagueoflegends.com/en-us/news/'

const articles = [
  {
    title: 'Eternal Aspects Leona & Diana : deux skins Légendaires et une édition Mythique pour le 27 mai',
    slug: 'eternal-aspects-leona-diana-skins-legendaires-mai-2026-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: COVER,
    excerpt:
      'Riot Games a officiellement révélé les skins Eternal Aspects pour Leona et Diana, deux cosmétiques Légendaires à 1 820 RP arrivant le 27 mai 2026 dans le Patch 26.11, accompagnés d\'une version Mythique Eclipse pour Diana.',
    sourceUrl: SOURCE,
    tags: [
      { tag: 'LoL' },
      { tag: 'Riot Games' },
      { tag: 'Leona' },
      { tag: 'Diana' },
      { tag: 'Skins' },
      { tag: 'Patch 26.11' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Riot Games a officiellement annoncé les skins Eternal Aspects pour Leona et Diana, disponibles sur les serveurs live le 27 mai 2026 avec le Patch 26.11. Ces deux cosmétiques de rang Légendaire sont proposés au prix de 1 820 RP chacun et viennent couronner la relation canonique entre les deux championnes.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'La dualité soleil / lune sublimée' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Eternal Aspect Leona habille la Radieuse d\'une armure baignée d\'un éclat doré, prolongeant l\'iconographie de l\'Aspect du Soleil avec de nouvelles animations de sorts, des effets de particules solaires et des lignes de dialogue inédites qui approfondissent son lien avec Diana. De l\'autre côté, Eternal Aspect Diana enveloppe la Lune dans un argent lunaire vif, avec des effets de lumière froide sur chaque compétence et des animations rappelant les phases de la lune.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Édition Mythique Eclipse Diana' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'En complément, Riot propose l\'Édition Mythique Eclipse Diana le même jour. Contrairement au skin Légendaire aux teintes bleues, cette variante Mythique adopte un coloris rose-rouge intense, évoquant une éclipse totale de lune. Ce type d\'édition est réservé aux joueurs souhaitant une identité visuelle encore plus distinctive pour leur championne favorite.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Des origines dans TFT Ensemble 17' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Ces designs ne sont pas entièrement nouveaux : ils avaient été introduits dans Teamfight Tactics lors de l\'Ensemble 17, et leur popularité a convaincu Riot de les intégrer dans le client principal de League of Legends. C\'est la deuxième fois cette saison qu\'un skin né dans TFT fait le chemin inverse vers la Faille de l\'Invocateur.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Les deux skins Eternal Aspects rappellent également le canon romantique établi par Riot entre Leona et Diana : sous l\'éternelle opposition des Solari et des Lunari se cache un amour que les deux guerrières n\'ont jamais pu pleinement s\'avouer. La ligne Eternal Aspects cristallise visuellement cette tension et cette harmonie simultanées.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Eternal Aspects Leona et Diana seront disponibles le 27 mai 2026 à 1 820 RP chacun. L\'édition Mythique Eclipse Diana sort le même jour. À suivre dans le Patch 26.11.',
          },
        ],
      },
    ],
  },
  {
    title: 'Eternal Aspects Leona & Diana: Two Legendary Skins and a Mythic Edition on May 27',
    slug: 'eternal-aspects-leona-diana-legendary-skins-may-2026-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: COVER,
    excerpt:
      'Riot Games officially revealed the Eternal Aspects skin line for Leona and Diana — two Legendary cosmetics at 1,820 RP landing May 27 with Patch 26.11, alongside a Mythic Eclipse Edition for Diana.',
    sourceUrl: SOURCE,
    tags: [
      { tag: 'LoL' },
      { tag: 'Riot Games' },
      { tag: 'Leona' },
      { tag: 'Diana' },
      { tag: 'Skins' },
      { tag: 'Patch 26.11' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Riot Games has officially announced the Eternal Aspects skins for Leona and Diana, set to go live on May 27, 2026 with Patch 26.11. Both cosmetics are Legendary tier, priced at 1,820 RP each, and arrive as a celebration of the canonical bond between these two iconic champions.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Sun and Moon, Perfected' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Eternal Aspect Leona dresses the Radiant Dawn in a golden-radiant armor that expands on her Sun Aspect identity — new spell animations, solar particle effects, and fresh voice lines that deepen her bond with Diana. Eternal Aspect Diana, meanwhile, wraps the moon warrior in vivid lunar silver, with cold-light effects across every ability and animations evoking the phases of the moon.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Mythic Eclipse Diana Edition' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Alongside the two Legendary skins, Riot is releasing the Mythic Eclipse Diana Edition on the same day. Unlike the Legendary skin\'s blue lunar tones, the Mythic variant features a vivid pinkish-red color scheme, conjuring the imagery of a total lunar eclipse. This Mythic edition is designed for players who want the most distinctive visual identity for their favourite champion.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Rooted in TFT Set 17' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'These designs are not entirely brand new: they originated in Teamfight Tactics during Set 17, where their popularity prompted Riot to bring them into the main League of Legends client. It marks the second time this season that a TFT-born skin has made the reverse journey to the Summoner\'s Rift.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'The Eternal Aspects release also echoes the canonical romance Riot established between Leona and Diana — beneath the eternal opposition of the Solari and Lunari lies a love the two warriors have never fully been able to admit. The Eternal Aspects skin line crystallises that tension and harmony at once.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Eternal Aspects Leona and Diana arrive May 27, 2026, at 1,820 RP each. The Mythic Eclipse Diana Edition drops the same day — all part of Patch 26.11.',
          },
        ],
      },
    ],
  },
  {
    title: 'Eternal Aspects Leona & Diana: Dos skins Legendarias y una Edición Mítica el 27 de mayo',
    slug: 'eternal-aspects-leona-diana-skins-legendarios-mayo-2026-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: COVER,
    excerpt:
      'Riot Games ha revelado oficialmente la línea de skins Eternal Aspects para Leona y Diana — dos cosméticos Legendarios a 1.820 RP que llegan el 27 de mayo con el Parche 26.11, acompañados de una Edición Mítica Eclipse para Diana.',
    sourceUrl: SOURCE,
    tags: [
      { tag: 'LoL' },
      { tag: 'Riot Games' },
      { tag: 'Leona' },
      { tag: 'Diana' },
      { tag: 'Skins' },
      { tag: 'Patch 26.11' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Riot Games ha anunciado oficialmente las skins Eternal Aspects para Leona y Diana, disponibles en los servidores en vivo el 27 de mayo de 2026 con el Parche 26.11. Ambos cosméticos son de rango Legendario a 1.820 RP cada uno, y celebran el vínculo canónico entre estas dos icónicas campeonas.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'El sol y la luna en su máxima expresión' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Eternal Aspect Leona viste a la Radiante con una armadura bañada en un resplandor dorado que amplía su identidad de Aspecto Solar — nuevas animaciones de habilidades, efectos de partículas solares y líneas de diálogo inéditas que profundizan su vínculo con Diana. Por su parte, Eternal Aspect Diana envuelve a la guerrera lunar en plata lunar viva, con efectos de luz fría en cada habilidad y animaciones que evocan las fases de la luna.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Edición Mítica Eclipse Diana' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Junto a las dos skins Legendarias, Riot lanza la Edición Mítica Eclipse Diana el mismo día. A diferencia de los tonos azul lunares de la skin Legendaria, la variante Mítica presenta un vibrante esquema de colores rojizo-rosado, evocando el eclipse lunar total. Esta edición está diseñada para los jugadores que buscan la identidad visual más distintiva para su campeona favorita.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Origen en TFT Set 17' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Estos diseños no son completamente nuevos: se originaron en Teamfight Tactics durante el Set 17, donde su popularidad llevó a Riot a integrarlos en el cliente principal de League of Legends. Es la segunda vez esta temporada que una skin nacida en TFT hace el camino inverso hacia la Grieta del Invocador.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'El lanzamiento de Eternal Aspects también hace eco del romance canónico que Riot estableció entre Leona y Diana: bajo la eterna oposición de los Solari y los Lunari existe un amor que las dos guerreras nunca pudieron admitirse plenamente. La línea Eternal Aspects cristaliza visualmente esa tensión y armonía simultáneas.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Eternal Aspects Leona y Diana llegan el 27 de mayo de 2026 a 1.820 RP cada una. La Edición Mítica Eclipse Diana sale el mismo día, todo como parte del Parche 26.11.',
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
