import type { MigrationModule } from './runner'

export const id = '169-autres-regions-lcs-summer-playoffs'
export const description = 'Autres régions — LCS Summer 2026 playoffs : Cloud9 champion, qualifié pour les Worlds'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-16T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/nilah/skins/base/images/nilah_splash_centered_0.jpg'

const articles = [
  {
    title: 'LCS Summer 2026 : Cloud9 sacré champion et qualifié pour les Worlds 2026',
    slug: 'lcs-summer-2026-cloud9-champion-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "Cloud9 a remporté les LCS Summer 2026 playoffs en battant 100 Thieves 3-1 en finale, s'assurant la représentation nord-américaine aux Worlds 2026 en Play-In.",
    sourceUrl: 'https://lolesports.com/leagues/lcs',
    tags: [{ tag: 'LCS' }, { tag: 'Cloud9' }, { tag: 'Amérique du Nord' }, { tag: 'Worlds 2026' }],
    content: [
      { type: 'p', children: [{ text: "Cloud9 est le champion LCS Summer 2026. La formation nord-américaine a dominé la finale des playoffs 3-1 face à 100 Thieves, s'offrant le titre et la qualification pour les Worlds 2026 en tant que représentant du LCS." }] },
      { type: 'h2', children: [{ text: 'Une finale à sens unique' }] },
      { type: 'p', children: [{ text: "Après avoir perdu le game 1 sur un draft trop conservateur, Cloud9 a sorti sa meilleure version sur les trois games suivants. La synergie entre leur mid-laner Jojopyun et leur ADC Berserker a été irréprochable, dominant les skirmish et les teamfights de façon convaincante. 100 Thieves n'a jamais semblé être en mesure de renverser la vapeur." }] },
      { type: 'h2', children: [{ text: 'Direction les Worlds' }] },
      { type: 'p', children: [{ text: "Cloud9 représentera le LCS lors du Play-In Worlds 2026. L'Amérique du Nord n'a que rarement brillé lors des dernières éditions du Championnat du Monde, et Cloud9 espère inverser la tendance avec un roster jugé compétitif au niveau international." }] },
    ],
  },
  {
    title: 'LCS Summer 2026: Cloud9 crowned champions, headed to Worlds 2026 Play-In',
    slug: 'lcs-summer-2026-cloud9-champion-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "Cloud9 are the LCS Summer 2026 champions after defeating 100 Thieves 3-1 in the Grand Final, securing North America's Worlds 2026 Play-In spot.",
    sourceUrl: 'https://lolesports.com/leagues/lcs',
    tags: [{ tag: 'LCS' }, { tag: 'Cloud9' }, { tag: 'North America' }, { tag: 'Worlds 2026' }],
    content: [
      { type: 'p', children: [{ text: "Cloud9 are LCS Summer 2026 champions. The North American squad dismantled 100 Thieves 3-1 in the Grand Final to claim the title and North America's sole Worlds 2026 berth." }] },
      { type: 'h2', children: [{ text: 'A lopsided final after Game 1' }] },
      { type: 'p', children: [{ text: "100 Thieves stole the opening game off an overly conservative C9 draft, but Cloud9 reasserted control over the next three games. The Jojopyun–Berserker synergy was on full display, with the duo dominating skirmishes and teamfights to close out the series convincingly." }] },
      { type: 'h2', children: [{ text: 'Cloud9 at Worlds' }] },
      { type: 'p', children: [{ text: "Cloud9 will represent the LCS at Worlds 2026 Play-In. North America has struggled at recent World Championships, and C9 will be hoping their internationally competitive roster can finally turn the tide." }] },
    ],
  },
  {
    title: 'LCS Summer 2026: Cloud9, campeones y clasificados para el Play-In de los Worlds 2026',
    slug: 'lcs-summer-2026-cloud9-champion-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "Cloud9 se proclama campeón de la LCS Summer 2026 al derrotar a 100 Thieves 3-1 en la gran final, asegurando la plaza de Norteamérica en el Play-In de los Worlds 2026.",
    sourceUrl: 'https://lolesports.com/leagues/lcs',
    tags: [{ tag: 'LCS' }, { tag: 'Cloud9' }, { tag: 'Norteamérica' }, { tag: 'Worlds 2026' }],
    content: [
      { type: 'p', children: [{ text: "Cloud9 son los campeones de la LCS Summer 2026. El equipo norteamericano aplastó a 100 Thieves 3-1 en la gran final para alzarse con el título y la plaza de Norteamérica en los Worlds 2026." }] },
      { type: 'h2', children: [{ text: 'Una final dominada desde el juego 2' }] },
      { type: 'p', children: [{ text: "100 Thieves se llevó el primer juego gracias a un draft demasiado conservador de C9, pero Cloud9 tomó el control en los tres juegos siguientes. La sintonía entre Jojopyun y Berserker fue perfecta, dominando los skirmishes y las peleas de equipo de manera convincente." }] },
      { type: 'h2', children: [{ text: 'Cloud9 rumbo a los Worlds' }] },
      { type: 'p', children: [{ text: "Cloud9 representará a la LCS en el Play-In de los Worlds 2026. Norteamérica ha tenido dificultades en los últimos Mundiales, y C9 espera que su plantilla competitiva a nivel internacional pueda cambiar esa tendencia." }] },
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
