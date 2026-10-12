import type { MigrationModule } from './runner'

export const id = '188-lcs2026-summer-tl-lyon'
export const description = "LCS 2026 Summer: Team Liquid bat LYON 3-1, CoreJJ devient le plus vieux champion (4 octobre)"

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-10-04T22:00:00.000Z'

const articles = [
  {
    title: "LCS 2026 Summer : Team Liquid triomphe en finale et brise la domination de LYON (3-1)",
    slug: 'lcs2026-summer-tl-lyon-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Team Liquid a remporté le titre LCS 2026 Summer en battant LYON 3-1 en finale le 4 octobre, mettant fin à la domination de cinq titres consécutifs de LYON. CoreJJ devient le plus ancien joueur à remporter un titre majeur compétitif.",
    sourceUrl: 'https://dotesports.com/league-of-legends/news/team-liquid-lcs-2026-summer-champions',
    tags: [{ tag: 'LCS 2026' }, { tag: 'Team Liquid' }, { tag: 'LYON' }, { tag: 'Amerique du Nord' }],
    content: [
      { type: 'p', children: [{ text: "Team Liquid a remporté le titre LCS 2026 Summer en battant LYON 3-1 en finale, le 4 octobre. Cette victoire met fin à la domination de LYON sur la scène nord-américaine, qui avait remporté cinq titres consécutifs depuis le LTA North Split 2 2025. Team Liquid sécurise également une première tête de série pour les Worlds 2026." }] },
      { type: 'h2', children: [{ text: "Josedeodo impose sa domination en Finals MVP" }] },
      { type: 'p', children: [{ text: "Brandon Villegas, alias Josedeodo, a livré une performance exceptionnelle en tant que jungler de Team Liquid, remportant le titre de Finals MVP. Avec des victoires sur Lee Sin, Qiyana et Wukong, Josedeodo a affiché un KDA de 16/4/27 sur l'ensemble de la série, contrôlant la carte et les teamfights critiques qui ont scellé la victoire." }] },
      { type: 'h2', children: [{ text: "Un record historique pour CoreJJ" }] },
      { type: 'p', children: [{ text: "Yong-in Jo, alias CoreJJ, devient le plus ancien joueur à remporter un titre majeur dans l'histoire compétitive de League of Legends, à l'âge de 32 ans. Cette victoire représente son 6e titre LCS en carrière, consolidant son statut de légende nord-américaine après plus d'une décennie de compétition professionnelle." }] },
      { type: 'h2', children: [{ text: "Fin de la domination de LYON" }] },
      { type: 'p', children: [{ text: "LYON, qui n'avait connu que des victoires domestiques en 2026 (Lock-In, Spring, et qualifié pour le second tour des playoffs en tant que 1er seed), voit sa série impressionnante se terminer. Inspiré, la jungles emblématique de LYON, perd également son statut de champion incontesté après cinq titres consécutifs." }] },
      { type: 'blockquote', children: [{ text: "Team Liquid retrouve le trône nord-américain pour la première fois depuis Spring 2024, tandis que CoreJJ écrit l'histoire en devenant le plus vieux champion d'un grand tournoi LoL." }] },
    ],
  },
  {
    title: "LCS 2026 Summer: Team Liquid Defeat LYON 3-1 to End Five-Title Winning Streak",
    slug: 'lcs2026-summer-tl-lyon-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Team Liquid won the LCS 2026 Summer title by defeating LYON 3-1 in the finals on October 4, ending LYON's five-title winning streak. CoreJJ made history as the oldest player to win a major League championship at 32 years old.",
    sourceUrl: 'https://sportsoftheday.com/back-at-the-top-at-32-corejj-makes-history-with-lcs-triumph?noamp=mobile',
    tags: [{ tag: 'LCS 2026' }, { tag: 'Team Liquid' }, { tag: 'LYON' }, { tag: 'North America' }],
    content: [
      { type: 'p', children: [{ text: "Team Liquid captured the LCS 2026 Summer championship by defeating LYON 3-1 in the finals on October 4. The victory ends LYON's dominant reign over North American League of Legends, which had produced five consecutive titles since the LTA North Split 2 in 2025. Team Liquid also secures a first seed for the Worlds 2026 Swiss Stage." }] },
      { type: 'h2', children: [{ text: "Josedeodo delivers Finals MVP performance" }] },
      { type: 'p', children: [{ text: "Brandon Villegas, known as Josedeodo, delivered an outstanding performance in the jungler role, earning Finals MVP honors. Playing Lee Sin, Qiyana, and Wukong across the series, Josedeodo compiled a 16/4/27 KDA, controlling the map and dictating the critical teamfights that secured Team Liquid's championship." }] },
      { type: 'h2', children: [{ text: "CoreJJ makes esports history" }] },
      { type: 'p', children: [{ text: "Yong-in Jo, widely known as CoreJJ, became the oldest player ever to win a major League of Legends championship at age 32. This victory marks his sixth LCS title in his career, cementing his legacy as a North American icon after more than a decade of professional competition." }] },
      { type: 'h2', children: [{ text: "End of LYON's domestic dominance" }] },
      { type: 'p', children: [{ text: "LYON, which dominated North American competition with wins in Lock-In and Spring 2026, sees their undefeated year in domestic tournaments come to an end. Inspired, LYON's iconic jungler, also loses his status as an undefeated champion after five consecutive titles." }] },
      { type: 'blockquote', children: [{ text: "Team Liquid reclaims the North American throne for the first time since Spring 2024, while CoreJJ writes history as the oldest champion of a major LoL tournament." }] },
    ],
  },
  {
    title: "LCS 2026 Summer: Team Liquid Derrota a LYON 3-1 para Terminar Racha de Cinco Títulos",
    slug: 'lcs2026-summer-tl-lyon-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Team Liquid conquistó el título LCS 2026 Summer al derrotar a LYON 3-1 en la final el 4 de octubre, terminando la racha ganadora de cinco títulos de LYON. CoreJJ hizo historia como el jugador más anciano en ganar un campeonato mayor de League a los 32 años.",
    sourceUrl: 'https://sportsoftheday.com/back-at-the-top-at-32-corejj-makes-history-with-lcs-triumph?noamp=mobile',
    tags: [{ tag: 'LCS 2026' }, { tag: 'Team Liquid' }, { tag: 'LYON' }, { tag: 'America del Norte' }],
    content: [
      { type: 'p', children: [{ text: "Team Liquid capturó el campeonato LCS 2026 Summer al derrotar a LYON 3-1 en la final el 4 de octubre. La victoria termina el reinado dominante de LYON sobre League of Legends de América del Norte, que había producido cinco títulos consecutivos desde el LTA North Split 2 en 2025. Team Liquid también asegura una primera semilla para la Swiss Stage de Worlds 2026." }] },
      { type: 'h2', children: [{ text: "Josedeodo entrega actuación MVP de la Final" }] },
      { type: 'p', children: [{ text: "Brandon Villegas, conocido como Josedeodo, entregó una actuación sobresaliente en el rol de jungler, ganando los honores de MVP de la Final. Jugando Lee Sin, Qiyana y Wukong a lo largo de la serie, Josedeodo compiló un KDA de 16/4/27, controlando el mapa y dictando los teamfights críticos que aseguraron el campeonato de Team Liquid." }] },
      { type: 'h2', children: [{ text: "CoreJJ hace historia en esports" }] },
      { type: 'p', children: [{ text: "Yong-in Jo, ampliamente conocido como CoreJJ, se convirtió en el jugador más antiguo en ganar un campeonato importante de League of Legends a los 32 años. Esta victoria marca su sexto título de la LCS en su carrera, consolidando su legado como un icono de América del Norte después de más de una década de competencia profesional." }] },
      { type: 'h2', children: [{ text: "Fin de la dominancia doméstica de LYON" }] },
      { type: 'p', children: [{ text: "LYON, que dominó la competencia de América del Norte con victorias en Lock-In y Spring 2026, ve su año invicto en torneos domésticos llegar a su fin. Inspired, el jungler icónico de LYON, también pierde su estatus de campeón invicto después de cinco títulos consecutivos." }] },
      { type: 'blockquote', children: [{ text: "Team Liquid recupera el trono de América del Norte por primera vez desde Spring 2024, mientras CoreJJ escribe historia como el campeón más antiguo de un torneo LoL importante." }] },
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
