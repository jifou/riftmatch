import type { MigrationModule } from './runner'

export const id = '140-international-msi2026-blg-t1-upset'
export const description = "MSI 2026 — BLG renverse T1 3-2 dans un remake explosif de la finale 2025, les Coréens plongent en bracket inférieur"

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-07-05T08:00:00.000Z'

const articles = [
  {
    title: "MSI 2026 : BLG renverse T1 3-2 dans un remake explosif de la finale 2025, les Coréens plongent en bracket inférieur",
    slug: 'msi2026-blg-t1-upset-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/XVAxzw9m8wQ/maxresdefault.jpg',
    excerpt: "Bilibili Gaming a créé la sensation en battant T1 3-2 lors du choc d'ouverture du Bracket Stage du MSI 2026, un remake de la finale 2025 que les Coréens avaient alors balayée 3-0. Le favori du tournoi est envoyé en bracket inférieur, où il affrontera FURIA le 6 juillet.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026/Bracket_Stage',
    tags: [{ tag: 'MSI 2026' }, { tag: 'T1' }, { tag: 'Bilibili Gaming' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "Bilibili Gaming a créé l'une des plus grosses sensations du MSI 2026 en battant T1 3-2 ce 4 juillet au Daejeon Convention Center, dans le choc d'ouverture du bracket supérieur. Un remake de la finale du MSI 2025, que les Coréens avaient alors remportée 3-0, mais cette fois le scénario s'est inversé." }] },
      { type: 'h2', children: [{ text: "Une série à rebondissements jusqu'à la cinquième manche" }] },
      { type: 'p', children: [{ text: "Invaincu depuis le début du tournoi et large favori après un Play-In parfait, T1 a buté sur une équipe chinoise portée par son duo de lignes solo Bin et Knight. La série est allée jusqu'à la manche décisive, disputée en Fearless Draft comme l'ensemble du Bracket Stage." }] },
      { type: 'h2', children: [{ text: "Le Baron manqué qui a coûté la série" }] },
      { type: 'p', children: [{ text: "Dans la cinquième partie, BLG a pris l'avantage tôt en éliminant le Trundle d'Oner grâce au trio Kindred de Xun, Ashe de Viper et Seraphine d'On, avant de sécuriser deux stacks de dragon. Les Chinois ont ensuite surpris la Taliyah de Faker en milieu de terrain. En réponse, T1 a tenté sa chance sur le Baron, utilisant l'ultime de Taliyah pour bloquer l'accès à la zone, mais sans assez de dégâts pour finir l'objectif à temps. BLG a fondu sur les Coréens par l'arrière, sécurisé le Baron et éliminé quatre membres de T1, ne laissant que Taliyah en vie." }] },
      { type: 'h2', children: [{ text: "T1 en bracket inférieur, BLG file vers LYON" }] },
      { type: 'p', children: [{ text: "Cette défaite envoie T1 en bracket inférieur, où les Coréens affronteront FURIA le 6 juillet pour rester en course vers la finale du 12 juillet. De son côté, Bilibili Gaming poursuit son parcours au bracket supérieur face à LYON, avec une place en finale du bracket supérieur à la clé." }] },
      { type: 'blockquote', children: [{ text: "Un an après avoir explosé T1 en finale, BLG prend sa revanche dès le premier tour et plonge le grand favori du MSI 2026 en bracket inférieur." }] },
    ],
  },
  {
    title: "MSI 2026: BLG Stuns T1 3-2 in an Explosive Rematch of the 2025 Final, Koreans Drop to the Lower Bracket",
    slug: 'msi2026-blg-t1-upset-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/XVAxzw9m8wQ/maxresdefault.jpg',
    excerpt: "Bilibili Gaming pulled off one of MSI 2026's biggest upsets, beating T1 3-2 in the Bracket Stage's opening clash — a rematch of the 2025 final the Koreans had swept 3-0. The tournament favorite drops to the lower bracket, where they'll face FURIA on July 6.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026/Bracket_Stage',
    tags: [{ tag: 'MSI 2026' }, { tag: 'T1' }, { tag: 'Bilibili Gaming' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "Bilibili Gaming produced one of the biggest upsets of MSI 2026 on July 4, beating T1 3-2 at the Daejeon Convention Center in the opening Upper Bracket clash of the Bracket Stage. It was a rematch of the MSI 2025 final, which the Koreans had swept 3-0 — but this time the script flipped." }] },
      { type: 'h2', children: [{ text: "A back-and-forth series that went the distance" }] },
      { type: 'p', children: [{ text: "Undefeated since the start of the tournament and heavy favorites after a flawless Play-In run, T1 ran into a Chinese squad carried by solo laners Bin and Knight. The series went all the way to a decisive Game 5, played under Fearless Draft rules like the rest of the Bracket Stage." }] },
      { type: 'h2', children: [{ text: "The missed Baron that sealed the series" }] },
      { type: 'p', children: [{ text: "In Game 5, BLG got off to a fast start, taking down Oner's Trundle through Xun's Kindred, Viper's Ashe, and On's Seraphine, before securing two dragon stacks. BLG then caught Faker's Taliyah in the mid lane. T1 answered by going for Baron, using Taliyah's ultimate to block the pit, but couldn't deal enough damage to finish the objective in time. BLG collapsed on them from behind, secured Baron, and wiped four members of T1, leaving only Taliyah alive." }] },
      { type: 'h2', children: [{ text: "T1 to the lower bracket, BLG advances to face LYON" }] },
      { type: 'p', children: [{ text: "The loss sends T1 to the lower bracket, where the Koreans will face FURIA on July 6 to stay alive on the road to the July 12 Grand Final. Bilibili Gaming, meanwhile, continues its Upper Bracket run against LYON, with a spot in the Upper Bracket final on the line." }] },
      { type: 'blockquote', children: [{ text: "A year after being swept by T1 in the final, BLG gets its revenge in the very first round, sending MSI 2026's biggest favorite to the lower bracket." }] },
    ],
  },
  {
    title: "MSI 2026: BLG sorprende a T1 con un 3-2 en una explosiva revancha de la final de 2025, los coreanos caen al bracket inferior",
    slug: 'msi2026-blg-t1-upset-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/XVAxzw9m8wQ/maxresdefault.jpg',
    excerpt: "Bilibili Gaming protagonizó una de las mayores sorpresas del MSI 2026 al vencer 3-2 a T1 en el choque inaugural del Bracket Stage, una revancha de la final de 2025 que los coreanos habían ganado 3-0. El gran favorito del torneo cae al bracket inferior, donde se medirá a FURIA el 6 de julio.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026/Bracket_Stage',
    tags: [{ tag: 'MSI 2026' }, { tag: 'T1' }, { tag: 'Bilibili Gaming' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "Bilibili Gaming firmó una de las mayores sorpresas del MSI 2026 al vencer 3-2 a T1 este 4 de julio en el Daejeon Convention Center, en el duelo inaugural del bracket superior. Fue una revancha de la final del MSI 2025, que los coreanos habían ganado 3-0, pero esta vez el guion se invirtió." }] },
      { type: 'h2', children: [{ text: "Una serie de vaivenes hasta la quinta partida" }] },
      { type: 'p', children: [{ text: "Invicto desde el inicio del torneo y gran favorito tras un Play-In perfecto, T1 se topó con un equipo chino impulsado por su dúo de líneas solo, Bin y Knight. La serie llegó hasta la partida decisiva, disputada en Fearless Draft como el resto del Bracket Stage." }] },
      { type: 'h2', children: [{ text: "El Barón fallido que costó la serie" }] },
      { type: 'p', children: [{ text: "En la quinta partida, BLG arrancó fuerte al eliminar al Trundle de Oner gracias al trío formado por la Kindred de Xun, la Ashe de Viper y la Seraphine de On, antes de asegurar dos cargas de dragón. Los chinos sorprendieron después a la Taliyah de Faker en la línea central. T1 respondió yendo a por el Barón, usando la definitiva de Taliyah para bloquear el acceso, pero sin daño suficiente para completar el objetivo a tiempo. BLG cayó sobre ellos por la espalda, aseguró el Barón y eliminó a cuatro miembros de T1, dejando solo a Taliyah con vida." }] },
      { type: 'h2', children: [{ text: "T1 al bracket inferior, BLG avanza hacia LYON" }] },
      { type: 'p', children: [{ text: "La derrota envía a T1 al bracket inferior, donde los coreanos se enfrentarán a FURIA el 6 de julio para seguir con vida rumbo a la gran final del 12 de julio. Bilibili Gaming, por su parte, continúa su camino en el bracket superior ante LYON, con una plaza en la final del bracket superior en juego." }] },
      { type: 'blockquote', children: [{ text: "Un año después de caer barridos por T1 en la final, BLG se toma la revancha en la primera ronda y hunde al gran favorito del MSI 2026 en el bracket inferior." }] },
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
