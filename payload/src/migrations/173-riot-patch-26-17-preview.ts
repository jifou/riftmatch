import type { MigrationModule } from './runner'

export const id = '173-riot-patch-26-17-preview'
export const description = 'Preview Patch 26.17 — buffs Tanks, nerfs Mages, rework mineur Cassiopeia'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-20T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/cassiopeia/skins/base/images/cassiopeia_splash_centered_0.jpg'

const articles = [
  {
    title: 'Preview Patch 26.17 : buffs pour les tanks, nerfs mages, rework mineur de Cassiopeia',
    slug: 'patch-26-17-preview-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "Le patch 26.17 prévu pour le 20 août se concentre sur le renforcement des champions tanks Top Lane, des nerfs ciblés sur les mages burst, et un rework mineur du kit de Cassiopeia.",
    sourceUrl: 'https://www.leagueoflegends.com/fr-fr/news/game-updates/',
    tags: [{ tag: 'Patch' }, { tag: '26.17' }, { tag: 'Preview' }, { tag: 'Cassiopeia' }],
    content: [
      { type: 'p', children: [{ text: "Riot Games a publié les notes de preview du patch 26.17, prévu pour le 20 août 2026. Ce patch précède les Worlds 2026 et vise à équilibrer la méta compétitive avant le plus grand événement de l'année." }] },
      { type: 'h2', children: [{ text: 'Buffs pour les tanks Top Lane' }] },
      { type: 'p', children: [{ text: "Malphite, Ornn et Cho'Gath reçoivent des buffs de résistances de base pour les rendre plus viables en Top Lane face aux compositions d'engage. Ce changement fait écho à la demande de la communauté compétitive qui juge la Top Lane trop pauvre en options défensives depuis le patch 26.14." }] },
      { type: 'h2', children: [{ text: 'Nerfs mages burst' }] },
      { type: 'p', children: [{ text: "Lux, Vex et Viktor voient leur burst légèrement réduit — principalement via les ratios d'AP de leurs sorts signature. L'objectif est de maintenir leur présence compétitive sans qu'ils dominent trop la mid-lane solo-queue." }] },
      { type: 'h2', children: [{ text: 'Rework mineur de Cassiopeia' }] },
      { type: 'p', children: [{ text: "Cassiopeia fait l'objet d'un ajustement de kit : son passive gagne en clarté (progression maintenant affichée dans la barre de stats), et son E (Jumelles Venimeuses) bénéficie d'un léger buff de portée (+25 unités). L'objectif est de la remettre en compétition en mid sans la rendre envahissante." }] },
    ],
  },
  {
    title: 'Patch 26.17 Preview: Tank buffs, mage nerfs, and a minor Cassiopeia rework incoming',
    slug: 'patch-26-17-preview-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "The patch 26.17 preview reveals incoming buffs for top lane tanks, targeted nerfs on burst mages, and a minor Cassiopeia kit adjustment ahead of Worlds 2026.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/game-updates/',
    tags: [{ tag: 'Patch' }, { tag: '26.17' }, { tag: 'Preview' }, { tag: 'Cassiopeia' }],
    content: [
      { type: 'p', children: [{ text: "Riot Games has published the 26.17 patch preview, scheduled for August 20, 2026. This is the pre-Worlds patch and aims to balance the competitive meta before the season's biggest event." }] },
      { type: 'h2', children: [{ text: 'Top lane tank buffs' }] },
      { type: 'p', children: [{ text: "Malphite, Ornn, and Cho'Gath receive base resistance buffs to make them more viable in top lane against engage-heavy compositions. The change responds to competitive feedback that top lane has felt too shallow in defensive options since Patch 26.14." }] },
      { type: 'h2', children: [{ text: 'Burst mage nerfs' }] },
      { type: 'p', children: [{ text: "Lux, Vex, and Viktor see slight burst reductions — primarily through AP ratios on their signature abilities. Riot wants to maintain their competitive presence without letting them dominate solo-queue mid lane." }] },
      { type: 'h2', children: [{ text: 'Minor Cassiopeia rework' }] },
      { type: 'p', children: [{ text: "Cassiopeia receives a kit clarity adjustment: her passive progression is now displayed in the stats bar, and her E (Twin Fang) gains a small range increase (+25 units). Riot aims to bring her back into competitive consideration without making her oppressive." }] },
    ],
  },
  {
    title: 'Preview Parche 26.17: Buffs a los tanques de top, nerfs a los magos burst y rework menor de Cassiopeia',
    slug: 'patch-26-17-preview-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "El preview del parche 26.17 incluye buffs para los tanques de top lane, nerfs a los magos burst y un ajuste menor al kit de Cassiopeia, todo antes de los Worlds 2026.",
    sourceUrl: 'https://www.leagueoflegends.com/es-es/news/game-updates/',
    tags: [{ tag: 'Parche' }, { tag: '26.17' }, { tag: 'Preview' }, { tag: 'Cassiopeia' }],
    content: [
      { type: 'p', children: [{ text: "Riot Games ha publicado el avance del parche 26.17, previsto para el 20 de agosto de 2026. Este es el parche previo a los Worlds y busca equilibrar la meta competitiva antes del mayor evento de la temporada." }] },
      { type: 'h2', children: [{ text: 'Buffs para los tanques de top lane' }] },
      { type: 'p', children: [{ text: "Malphite, Ornn y Cho'Gath reciben mejoras en sus resistencias base para hacerlos más viables en el top lane frente a composiciones de engage. El cambio responde a las peticiones de la comunidad competitiva." }] },
      { type: 'h2', children: [{ text: 'Nerfs a los magos burst' }] },
      { type: 'p', children: [{ text: "Lux, Vex y Viktor ven reducido ligeramente su daño explosivo, principalmente a través de los ratios de AP de sus habilidades principales." }] },
      { type: 'h2', children: [{ text: 'Ajuste menor a Cassiopeia' }] },
      { type: 'p', children: [{ text: "Cassiopeia recibe mejoras de claridad en su pasiva (ahora visible en la barra de estadísticas) y un pequeño aumento de rango en su E (+25 unidades), buscando recuperar presencia competitiva sin hacerla dominante." }] },
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
