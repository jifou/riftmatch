import type { MigrationModule } from './runner'

export const id = '144-international-msi2026-grand-final-hle-champion'
export const description = "MSI 2026 — Hanwha Life Esports remporte la finale 3-2 face à Bilibili Gaming et decroche son premier titre international"

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-07-14T08:00:00.000Z'

const articles = [
  {
    title: "MSI 2026 : Hanwha Life Esports remporte la finale 3-2 face à Bilibili Gaming et décroche son premier titre international",
    slug: 'msi2026-grand-final-hle-champion-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Hanwha Life Esports a remporté la grande finale du MSI 2026 face à Bilibili Gaming au terme d'une série à rebondissements conclue 3-2 ce 12 juillet à Daejeon, décrochant le tout premier titre international du club et prolongeant la domination coréenne sur le tournoi.",
    sourceUrl: 'https://www.koreaherald.com/article/10806995',
    tags: [{ tag: 'MSI 2026' }, { tag: 'Hanwha Life Esports' }, { tag: 'Bilibili Gaming' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "Hanwha Life Esports est sacré champion du MSI 2026. Ce 12 juillet au Daejeon Convention Center II, le club coréen a battu Bilibili Gaming 3-2 au terme d'une grande finale à rebondissements, decrochant son tout premier titre international à domicile." }] },
      { type: 'h2', children: [{ text: "Une série à double bascule" }] },
      { type: 'p', children: [{ text: "Hanwha Life Esports a pris les devants en remportant la première manche, avant que Bilibili Gaming ne réplique en enchaînant deux victoires consécutives pour prendre l'avantage dans la série. Les Coréens ont ensuite haussé le niveau pour s'imposer dans les quatrième et cinquième manches et sceller le titre." }] },
      { type: 'h2', children: [{ text: "Le vol de Baron de Kanavi fait basculer la série" }] },
      { type: 'p', children: [{ text: "Dans une cinquième manche décisive, Seo « Kanavi » Jin-hyeok a volé le Baron Nashor sur Pantheon aux alentours de la 35e minute, un tournant immédiatement exploité par son équipe pour remporter le combat qui a suivi et clore la série. En bot lane, Gumayusi sur Yunara, épaulé par un Lulu protecteur, a rendu la tâche impossible à ses adversaires tout au long de la finale." }] },
      { type: 'h2', children: [{ text: "Zeus élu MVP, la Corée prolonge son règne" }] },
      { type: 'p', children: [{ text: "Zeus a été désigné MVP de la finale pour ses performances tout au long de la série. Cette victoire confirme la mainmise coréenne sur le MSI et offre à Hanwha Life Esports son premier titre international, quelques semaines après avoir vu LYON décrocher une troisième place inattendue face aux cadors habituels du tournoi." }] },
      { type: 'blockquote', children: [{ text: "Menée 1-2 après trois manches, Hanwha Life Esports renverse la finale du MSI 2026 pour offrir à la Corée un nouveau titre international à domicile." }] },
    ],
  },
  {
    title: "MSI 2026: Hanwha Life Esports Wins the Grand Final 3-2 Over Bilibili Gaming to Claim Its First International Title",
    slug: 'msi2026-grand-final-hle-champion-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Hanwha Life Esports won the MSI 2026 Grand Final against Bilibili Gaming in a back-and-forth series that ended 3-2 on July 12 in Daejeon, claiming the club's first international title and extending Korea's grip on the tournament.",
    sourceUrl: 'https://www.koreaherald.com/article/10806995',
    tags: [{ tag: 'MSI 2026' }, { tag: 'Hanwha Life Esports' }, { tag: 'Bilibili Gaming' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "Hanwha Life Esports are the MSI 2026 champions. On July 12 at the Daejeon Convention Center II, the Korean side defeated Bilibili Gaming 3-2 in a back-and-forth Grand Final, securing the club's first-ever international title on home soil." }] },
      { type: 'h2', children: [{ text: "A series with two swings of momentum" }] },
      { type: 'p', children: [{ text: "Hanwha Life Esports took the early lead by winning Game 1, only for Bilibili Gaming to answer with back-to-back wins in Games 2 and 3 to take control of the series. Hanwha Life Esports then raised their level to close it out with wins in Games 4 and 5." }] },
      { type: 'h2', children: [{ text: "Kanavi's Baron steal turns the tide" }] },
      { type: 'p', children: [{ text: "In a decisive Game 5, Seo \"Kanavi\" Jin-hyeok stole Baron Nashor on Pantheon around the 35-minute mark, a turning point his team immediately converted by winning the ensuing teamfight to close out the series. In the bot lane, Gumayusi's Yunara, backed by a protective Lulu, made life impossible for the opposing duo throughout the final." }] },
      { type: 'h2', children: [{ text: "Zeus named MVP as Korea extends its reign" }] },
      { type: 'p', children: [{ text: "Zeus was named Finals MVP for his performances across the series. The win confirms Korea's continued grip on MSI and hands Hanwha Life Esports its first international title, weeks after LYON secured a surprise third-place finish against the tournament's usual heavyweights." }] },
      { type: 'blockquote', children: [{ text: "Down 1-2 after three games, Hanwha Life Esports turn the MSI 2026 Grand Final around to hand Korea another international title on home soil." }] },
    ],
  },
  {
    title: "MSI 2026: Hanwha Life Esports gana la gran final 3-2 ante Bilibili Gaming y logra su primer título internacional",
    slug: 'msi2026-grand-final-hle-champion-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Hanwha Life Esports se coronó campeón del MSI 2026 al vencer a Bilibili Gaming en una gran final de vaivenes que termino 3-2 el 12 de julio en Daejeon, logrando el primer titulo internacional del club y prolongando el dominio coreano en el torneo.",
    sourceUrl: 'https://www.koreaherald.com/article/10806995',
    tags: [{ tag: 'MSI 2026' }, { tag: 'Hanwha Life Esports' }, { tag: 'Bilibili Gaming' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "Hanwha Life Esports es el campeon del MSI 2026. Este 12 de julio en el Daejeon Convention Center II, el equipo coreano vencio 3-2 a Bilibili Gaming en una gran final de vaivenes, logrando el primer titulo internacional del club jugando en casa." }] },
      { type: 'h2', children: [{ text: "Una serie con dos giros" }] },
      { type: 'p', children: [{ text: "Hanwha Life Esports tomo la delantera al ganar el primer juego, pero Bilibili Gaming respondio con dos victorias consecutivas en los juegos 2 y 3 para tomar el control de la serie. Hanwha Life Esports elevo despues su nivel para cerrar la serie con triunfos en los juegos 4 y 5." }] },
      { type: 'h2', children: [{ text: "El robo de Baron de Kanavi cambia la serie" }] },
      { type: 'p', children: [{ text: "En un quinto juego decisivo, Seo \"Kanavi\" Jin-hyeok robo el Baron Nashor con Pantheon alrededor del minuto 35, un momento clave que su equipo aprovecho de inmediato al ganar la pelea siguiente y cerrar la serie. En la carrilera inferior, el Yunara de Gumayusi, respaldado por un Lulu protector, hizo imposible la tarea del duo rival durante toda la final." }] },
      { type: 'h2', children: [{ text: "Zeus elegido MVP mientras Corea prolonga su reinado" }] },
      { type: 'p', children: [{ text: "Zeus fue nombrado MVP de la final por su rendimiento a lo largo de la serie. El triunfo confirma el dominio coreano sobre el MSI y le da a Hanwha Life Esports su primer titulo internacional, semanas despues de que LYON lograra un sorprendente tercer puesto ante los favoritos habituales del torneo." }] },
      { type: 'blockquote', children: [{ text: "Tras ir abajo 1-2 luego de tres juegos, Hanwha Life Esports da vuelta la gran final del MSI 2026 y le entrega a Corea otro titulo internacional en casa." }] },
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
