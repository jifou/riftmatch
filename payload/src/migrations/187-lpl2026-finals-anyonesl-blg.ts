import type { MigrationModule } from './runner'

export const id = '187-lpl2026-finals-anyonesl-blg'
export const description = "LPL 2026 Split 3: Anyone's Legend remporte le titre en battant Bilibili Gaming 3-1 (13 septembre)"

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-09-13T14:00:00.000Z'

const articles = [
  {
    title: "LPL 2026 Split 3 : Anyone's Legend crée la surprise et remporte le titre face à Bilibili Gaming (3-1)",
    slug: 'lpl2026-finals-anyonesl-blg-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Anyone's Legend a créé la surprise en remportant le titre LPL Split 3, battant Bilibili Gaming 3-1 en finale le 13 septembre. Les champions de Split 2 brisent la domination de BLG pour devenir les premiers seeds chinois aux Worlds 2026.",
    sourceUrl: 'https://www.gosugamers.net/lol/news/79164-anyone-s-legend-crowned-the-lpl-split-3-champions-after-taking-down-bilibili-gaming',
    tags: [{ tag: 'LPL 2026' }, { tag: "Anyone's Legend" }, { tag: 'Bilibili Gaming' }, { tag: 'Chine' }],
    content: [
      { type: 'p', children: [{ text: "Anyone's Legend a créé une sensation en remportant le titre LPL Split 3 2026 en battant Bilibili Gaming 3-1 en finale, le 13 septembre. Cette victoire envoie Anyone's Legend en tant que première tête de série chinoise aux Worlds 2026, mettant fin à la domination de Bilibili Gaming qui avait remporté les deux splits précédents de 2026." }] },
      { type: 'h2', children: [{ text: "Une victoire improbable contre BLG" }] },
      { type: 'p', children: [{ text: "Bilibili Gaming était arrivée en finale en tant que favori incontesté, grâce à des performances dominantes tout au long de la saison LPL. Cependant, Anyone's Legend a joué avec une cohésion remarquable, remportant les deux premières manches avant de subir une défaite en game 3. La pression n'a pas fléchi puisque Anyone's Legend a scellé l'issue de la série en game 4, s'adjugeant un titre qui n'était pas donné." }] },
      { type: 'h2', children: [{ text: "Tarzan brille en Finals MVP" }] },
      { type: 'p', children: [{ text: "Lee Seung-yong, connu sous le pseudonyme Tarzan, a été nommé MVP de la finale pour sa performance dominante au poste de jungler. Son contrôle de la carte et ses décisions d'engagement ont façonné le narratif de cette série improbable." }] },
      { type: 'h2', children: [{ text: "Prize pool et seeding aux Worlds" }] },
      { type: 'p', children: [{ text: "En remportant le titre, Anyone's Legend empoche 1.7 million de yuans (environ 253 000 dollars USD) en prize money. Plus important encore, la victoire garantit à l'équipe la première place chinoise aux Worlds 2026, en tant que Tier 1 seed direct au Swiss Stage à Allen, Texas, en octobre." }] },
      { type: 'blockquote', children: [{ text: "Anyone's Legend brise la domination de Bilibili Gaming et se présente aux Worlds 2026 comme les champions LPL, deux ans après leur titre Split 2 2025." }] },
    ],
  },
  {
    title: "LPL 2026 Split 3: Anyone's Legend Upset Bilibili Gaming to Claim Championship Title 3-1",
    slug: 'lpl2026-finals-anyonesl-blg-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Anyone's Legend pulled off an upset to win the LPL 2026 Split 3 title, defeating Bilibili Gaming 3-1 in the finals on September 13. The former Split 2 champions break BLG's dominance to secure China's first seed at Worlds 2026.",
    sourceUrl: 'https://www.sheepesports.com/en/articles/anyone-s-legend-crowned-2026-lpl-champions-after-upsetting-bilibili-gaming/en',
    tags: [{ tag: 'LPL 2026' }, { tag: "Anyone's Legend" }, { tag: 'Bilibili Gaming' }, { tag: 'China' }],
    content: [
      { type: 'p', children: [{ text: "Anyone's Legend pulled off an upset victory to win the LPL 2026 Split 3 championship, defeating Bilibili Gaming 3-1 in the finals on September 13. The victory sends Anyone's Legend to Worlds 2026 as China's first seed, ending BLG's dominant run after winning both splits earlier in 2026." }] },
      { type: 'h2', children: [{ text: "Upsetting the favorites" }] },
      { type: 'p', children: [{ text: "Bilibili Gaming arrived at the finals as heavy favorites, backed by dominant performances throughout the LPL season. However, Anyone's Legend displayed remarkable cohesion and macro play, claiming the first two games before dropping game three. The pressure remained as Anyone's Legend sealed the series with a game four victory, capturing a title that few had predicted." }] },
      { type: 'h2', children: [{ text: "Tarzan dominates as Finals MVP" }] },
      { type: 'p', children: [{ text: "Lee Seung-yong, known professionally as Tarzan, was named Finals MVP for his commanding jungler performance. His map control and engagement decisions were pivotal in shaping the narrative of this unlikely championship run." }] },
      { type: 'h2', children: [{ text: "Prize money and Worlds seeding" }] },
      { type: 'p', children: [{ text: "With the title secured, Anyone's Legend takes home 1.7 million CNY (approximately USD $253,000) in prize money. More significantly, the victory guarantees the team China's first seed at Worlds 2026, entering the Swiss Stage in Allen, Texas as a Tier 1 seed in October." }] },
      { type: 'blockquote', children: [{ text: "Anyone's Legend breaks Bilibili Gaming's dominance and heads to Worlds 2026 as LPL champions, their first title since Split 2 2025." }] },
    ],
  },
  {
    title: "LPL 2026 Split 3: Anyone's Legend Sorprende a Bilibili Gaming para Conquistar el Campeonato 3-1",
    slug: 'lpl2026-finals-anyonesl-blg-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Anyone's Legend consiguió una sorpresa al conquistar el título LPL 2026 Split 3, derrotando a Bilibili Gaming 3-1 en la final del 13 de septiembre. Los antiguos campeones de Split 2 rompen la dominancia de BLG para asegurar la primera plaza de China en Worlds 2026.",
    sourceUrl: 'https://www.strafe.com/news/read/anyone-s-legend-defy-blg-to-win-the-lpl-2026-grand-finals/',
    tags: [{ tag: 'LPL 2026' }, { tag: "Anyone's Legend" }, { tag: 'Bilibili Gaming' }, { tag: 'China' }],
    content: [
      { type: 'p', children: [{ text: "Anyone's Legend logró una sorprendente victoria para ganar el campeonato LPL 2026 Split 3, derrotando a Bilibili Gaming 3-1 en la final disputada el 13 de septiembre. La victoria envía a Anyone's Legend a Worlds 2026 como la primera semilla de China, terminando la racha dominante de BLG tras ganar ambos splits a principios de 2026." }] },
      { type: 'h2', children: [{ text: "Sorprendiendo a los favoritos" }] },
      { type: 'p', children: [{ text: "Bilibili Gaming llegó a la final como favorito claro, respaldado por actuaciones dominantes en toda la temporada de la LPL. Sin embargo, Anyone's Legend mostró una cohesión notable y excelente macro, ganando los dos primeros juegos antes de ceder el tercero. La presión continuó cuando Anyone's Legend selló la serie con una victoria en el cuarto juego, capturando un título que pocos habían predicho." }] },
      { type: 'h2', children: [{ text: "Tarzan domina como MVP de la Final" }] },
      { type: 'p', children: [{ text: "Lee Seung-yong, conocido profesionalmente como Tarzan, fue nombrado MVP de la Final por su actuación dominante como jungler. Su control de mapa y sus decisiones de enganche fueron fundamentales para dar forma a esta improbable carrera hacia el campeonato." }] },
      { type: 'h2', children: [{ text: "Premio en metálico y seeding en Worlds" }] },
      { type: 'p', children: [{ text: "Con el título asegurado, Anyone's Legend se lleva a casa 1.7 millones de CNY (aproximadamente USD 253.000) en dinero en premios. Aún más importante, la victoria garantiza a China la primera semilla en Worlds 2026, entrando en la Swiss Stage en Allen, Texas como semilla Tier 1 en octubre." }] },
      { type: 'blockquote', children: [{ text: "Anyone's Legend rompe la dominancia de Bilibili Gaming y se dirige a Worlds 2026 como campeones de la LPL, su primer título desde Split 2 2025." }] },
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
