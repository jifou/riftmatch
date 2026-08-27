import type { MigrationModule } from './runner'

export const id = '172-lec-finals-g2-worlds'
export const description = 'LEC Summer 2026 — G2 Esports champion européen, qualifié comme tête de série 1 aux Worlds'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-19T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/jinx/skins/base/images/jinx_splash_centered_0.jpg'

const articles = [
  {
    title: 'LEC Summer 2026 : G2 Esports champion d\'Europe, qualifié en tête de série 1 pour les Worlds',
    slug: 'lec-summer-2026-g2-champion-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "G2 Esports remporte le LEC Summer 2026 en dominant Team Vitality 3-1 en grande finale. Caps est nommé MVP de la finale, G2 file aux Worlds comme tête de série 1 européenne.",
    sourceUrl: 'https://lolesports.com/leagues/lec',
    tags: [{ tag: 'LEC' }, { tag: 'G2 Esports' }, { tag: 'Worlds 2026' }, { tag: 'Caps' }],
    content: [
      { type: 'p', children: [{ text: "G2 Esports est le champion d'Europe. Dans une grande finale disputée face à Team Vitality, G2 a imposé son jeu pour s'imposer 3-1 et décrocher le titre LEC Summer 2026, synonyme de qualification en phase de groupes des Worlds 2026 comme tête de série 1 européenne." }] },
      { type: 'h2', children: [{ text: 'Caps, MVP impérial' }] },
      { type: 'p', children: [{ text: "Caps a été l'homme du match tout au long de la finale. Nommé MVP de la série après des performances de haut vol sur Azir (game 2) et Orianna (game 4), le mid-laner belge a démontré pourquoi il est considéré comme l'un des meilleurs joueurs du monde à son poste. Sa capacité à dominer en mid-game tout en restant actif sur les visions de carte a mis Vitality constamment sous pression." }] },
      { type: 'h2', children: [{ text: 'G2 vise haut aux Worlds' }] },
      { type: 'p', children: [{ text: "Avec ce titre, G2 affiche une ambition claire pour les Worlds 2026. L'équipe n'a pas atteint les demi-finales mondiales depuis deux ans, et Caps a affiché publiquement sa volonté de ramener le trophée en Europe." }] },
    ],
  },
  {
    title: 'LEC Summer 2026: G2 Esports are European champions, headed to Worlds as first seed',
    slug: 'lec-summer-2026-g2-champion-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "G2 Esports are LEC Summer 2026 champions after defeating Team Vitality 3-1 in the Grand Final. Caps is named Finals MVP, and G2 head to Worlds as Europe's first seed.",
    sourceUrl: 'https://lolesports.com/leagues/lec',
    tags: [{ tag: 'LEC' }, { tag: 'G2 Esports' }, { tag: 'Worlds 2026' }, { tag: 'Caps' }],
    content: [
      { type: 'p', children: [{ text: "G2 Esports are champions of Europe. In a hard-fought Grand Final against Team Vitality, G2 imposed their game to win 3-1 and claim the LEC Summer 2026 title, sending them to Worlds 2026 as Europe's first seed." }] },
      { type: 'h2', children: [{ text: 'Caps: an MVP masterclass' }] },
      { type: 'p', children: [{ text: "Caps was the standout player throughout the final. Named Finals MVP after dominant showings on Azir (Game 2) and Orianna (Game 4), the Belgian mid laner proved once again why he's among the world's elite. His mid-game dominance and vision control kept Vitality under constant pressure." }] },
      { type: 'h2', children: [{ text: 'G2 set sights on Worlds glory' }] },
      { type: 'p', children: [{ text: "With the title in hand, G2 head to Worlds with clear ambitions. The team hasn't reached the world semifinals in two years, and Caps has publicly stated his goal of bringing the trophy back to Europe." }] },
    ],
  },
  {
    title: 'LEC Summer 2026: G2 Esports, campeones europeos y primera cabeza de serie en los Worlds',
    slug: 'lec-summer-2026-g2-champion-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "G2 Esports se proclama campeón de la LEC Summer 2026 al derrotar a Team Vitality 3-1 en la gran final. Caps, MVP de la serie. G2 va a Worlds como primera cabeza de serie europea.",
    sourceUrl: 'https://lolesports.com/leagues/lec',
    tags: [{ tag: 'LEC' }, { tag: 'G2 Esports' }, { tag: 'Worlds 2026' }, { tag: 'Caps' }],
    content: [
      { type: 'p', children: [{ text: "G2 Esports son los campeones de Europa. En una gran final muy disputada ante Team Vitality, G2 impuso su juego para llevarse el título de la LEC Summer 2026 por 3-1, clasificándose para los Worlds 2026 como primera cabeza de serie europea." }] },
      { type: 'h2', children: [{ text: 'Caps, MVP magistral' }] },
      { type: 'p', children: [{ text: "Caps fue el mejor jugador de la final. Nombrado MVP de la serie tras actuaciones dominantes en Azir (juego 2) y Orianna (juego 4), el midlaner belga demostró por qué está entre los mejores del mundo. Su dominio en la fase media del juego y el control de visión mantuvieron a Vitality constantemente bajo presión." }] },
      { type: 'h2', children: [{ text: 'G2 apunta alto en los Worlds' }] },
      { type: 'p', children: [{ text: "Con el título, G2 llega a los Worlds con ambición declarada. El equipo no llega a semifinales mundiales desde hace dos años, y Caps ha dicho públicamente que quiere traer el trofeo a Europa." }] },
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
