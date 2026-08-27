import type { MigrationModule } from './runner'

export const id = '162-international-worlds2026-draw-preview'
export const description = 'Worlds 2026 — Preview du tirage au sort des groupes, format et équipes attendues'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-09T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/azir/skins/base/images/azir_splash_centered_0.jpg'

const articles = [
  {
    title: 'Worlds 2026 : tout ce qu\'il faut savoir avant le tirage au sort des groupes',
    slug: 'worlds-2026-draw-preview-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "Le tirage au sort des groupes des Worlds 2026 approche. On fait le point sur le format, les équipes déjà qualifiées et les Play-In à venir.",
    sourceUrl: 'https://lolesports.com/news',
    tags: [{ tag: 'Worlds 2026' }, { tag: 'International' }, { tag: 'Esports' }],
    content: [
      { type: 'p', children: [{ text: "Les Worlds 2026 se profilent à l'horizon, et avec eux l'un des événements les plus attendus du calendrier esportif mondial. Avant le tirage au sort des groupes, faisons le point sur tout ce que l'on sait." }] },
      { type: 'h2', children: [{ text: 'Le format 2026' }] },
      { type: 'p', children: [{ text: "Cette édition conserve le format introduit en 2024 : un Play-In à 12 équipes suivi d'une phase de groupes à 8 équipes réparties en deux groupes de quatre, puis des double élimination en quarts, demi-finales et grande finale. La compétition se tiendra en septembre-octobre 2026 dans trois villes hôtes." }] },
      { type: 'h2', children: [{ text: 'Les têtes de série attendues' }] },
      { type: 'p', children: [{ text: "T1 (Corée) et BiliBili Gaming (Chine) font figure de grands favoris selon les observateurs. En Europe, G2 Esports et Team Vitality se disputent encore la première tête de série. Les régions émergentes (LCS, VCS, CBLOL, LLA) enverront leurs représentants via le Play-In." }] },
      { type: 'h2', children: [{ text: 'Les dates à retenir' }] },
      { type: 'p', children: [{ text: "Le tirage au sort des groupes est prévu fin août, après la fin des phases finales régionales. Le Play-In débutera début septembre, suivi de la phase de groupes, des quarts et des demi-finales, pour une grande finale en octobre." }] },
    ],
  },
  {
    title: 'Worlds 2026: Everything you need to know ahead of the group stage draw',
    slug: 'worlds-2026-draw-preview-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "The Worlds 2026 group stage draw is approaching. Here's a full breakdown of the format, confirmed qualifiers, and what to expect from the Play-In.",
    sourceUrl: 'https://lolesports.com/news',
    tags: [{ tag: 'Worlds 2026' }, { tag: 'International' }, { tag: 'Esports' }],
    content: [
      { type: 'p', children: [{ text: "Worlds 2026 is on the horizon, and with it one of the most anticipated events in the global esports calendar. Ahead of the group draw, here's everything you need to know." }] },
      { type: 'h2', children: [{ text: '2026 format breakdown' }] },
      { type: 'p', children: [{ text: "The 2026 edition retains the format introduced in 2024: a 12-team Play-In followed by an 8-team group stage split into two groups of four, then a double-elimination bracket through quarterfinals, semifinals, and the Grand Final. The event spans three host cities across September and October 2026." }] },
      { type: 'h2', children: [{ text: 'Expected top seeds' }] },
      { type: 'p', children: [{ text: "T1 (LCK) and BiliBili Gaming (LPL) are widely considered the pre-tournament favorites. In Europe, G2 Esports and Team Vitality are still competing for the region's top seed. Emerging regions (LCS, VCS, CBLOL, LLA) will send representatives through the Play-In." }] },
      { type: 'h2', children: [{ text: 'Key dates' }] },
      { type: 'p', children: [{ text: "The group draw is scheduled for late August, once regional finals conclude. The Play-In starts in early September, feeding into the group stage, knockout rounds, and the Grand Final in October." }] },
    ],
  },
  {
    title: 'Worlds 2026: Todo lo que necesitas saber antes del sorteo de grupos',
    slug: 'worlds-2026-draw-preview-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "Se acerca el sorteo de grupos de los Worlds 2026. Un repaso al formato, los equipos ya clasificados y lo que esperar del Play-In.",
    sourceUrl: 'https://lolesports.com/news',
    tags: [{ tag: 'Worlds 2026' }, { tag: 'Internacional' }, { tag: 'Esports' }],
    content: [
      { type: 'p', children: [{ text: "Los Worlds 2026 se acercan, y con ellos uno de los eventos más esperados del calendario esportivo mundial. Antes del sorteo de grupos, repasamos todo lo que se sabe hasta ahora." }] },
      { type: 'h2', children: [{ text: 'El formato 2026' }] },
      { type: 'p', children: [{ text: "Esta edición mantiene el formato de 2024: un Play-In de 12 equipos, seguido de una fase de grupos de 8 equipos divididos en dos grupos de cuatro, y luego eliminatoria de doble eliminación hasta la gran final. La competición se celebrará en tres ciudades anfitrionas en septiembre y octubre de 2026." }] },
      { type: 'h2', children: [{ text: 'Los grandes favoritos' }] },
      { type: 'p', children: [{ text: "T1 (LCK) y BiliBili Gaming (LPL) son los máximos favoritos. En Europa, G2 Esports y Team Vitality siguen disputando la primera cabeza de serie. Las regiones emergentes (LCS, VCS, CBLOL, LLA) enviarán representantes a través del Play-In." }] },
      { type: 'h2', children: [{ text: 'Fechas clave' }] },
      { type: 'p', children: [{ text: "El sorteo de grupos está previsto para finales de agosto, tras la conclusión de las finales regionales. El Play-In comenzará en septiembre, seguido de la fase de grupos, cuartos, semifinales y la gran final en octubre." }] },
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
