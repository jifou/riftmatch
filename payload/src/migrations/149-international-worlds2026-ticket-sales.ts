import type { MigrationModule } from './runner'

export const id = '149-international-worlds2026-ticket-sales'
export const description = 'International — Ouverture de la vente des billets pour Worlds 2026'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-07-23T08:00:00.000Z'

const articles = [
  {
    title: 'Worlds 2026 : la vente des billets est lancée, la finale à Brooklyn dans le viseur',
    slug: 'worlds-2026-vente-billets-lancement',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Riot Games a ouvert la prévente des billets pour Worlds 2026 le 22 juillet, avec la vente générale prévue dès le 24 juillet. Le tournoi se déroulera sur trois villes américaines, de Los Angeles à Brooklyn.",
    sourceUrl: 'https://lolesports.com/en-US/news/worlds-2026-ticket-sales',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'International' }, { tag: 'Worlds' }],
    content: [
      { type: 'p', children: [{ text: "Riot Games a officiellement lancé la billetterie de Worlds 2026, le championnat du monde de League of Legends qui se tiendra du 15 octobre au 14 novembre aux États-Unis. Après une phase d'inscription Fan First ouverte du 1er au 30 juin, la prévente réservée aux fans vérifiés a débuté le 22 juillet à 8h00 (heure du Pacifique). La vente générale, elle, ouvrira ses portes le 24 juillet à 8h00, toujours selon le principe du premier arrivé, premier servi." }] },
      { type: 'h2', children: [{ text: "Trois villes, trois étapes du tournoi" }] },
      { type: 'p', children: [{ text: "L'édition 2026 de Worlds se déploiera sur trois sites américains. La phase de Play-In se disputera à la Riot Games Arena de Los Angeles, en Californie. Le Swiss Stage ainsi que les quarts et demi-finales prendront ensuite place au Credit Union of Texas Event Center, à Allen, dans la métropole de Dallas-Fort Worth. Le tournoi culminera avec la grande finale au Barclays Center de Brooklyn, à New York, le 14 novembre." }] },
      { type: 'h2', children: [{ text: "Comment acheter ses billets" }] },
      { type: 'p', children: [{ text: "Les fans doivent s'inscrire via la page officielle de billetterie LoL Esports en utilisant leur Riot ID. L'adresse e-mail associée au compte Riot sert de vérification et de canal d'information pour les mises à jour de vente. Riot Games précise également que l'adresse e-mail du compte Ticketmaster utilisé pour l'achat doit correspondre à celle du compte Riot pour finaliser la transaction." }] },
      { type: 'blockquote', children: [{ text: "Avec une finale programmée au Barclays Center, Worlds 2026 s'annonce comme l'un des évènements esport les plus suivis de l'année aux États-Unis." }] },
    ],
  },
  {
    title: 'Worlds 2026: Ticket sales are live, with the grand final set for Brooklyn',
    slug: 'worlds-2026-ticket-sales-launch',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: 'Riot Games opened Worlds 2026 presale on July 22, with general admission tickets going on sale July 24. The tournament spans three US cities, from Los Angeles to Brooklyn.',
    sourceUrl: 'https://lolesports.com/en-US/news/worlds-2026-ticket-sales',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'International' }, { tag: 'Worlds' }],
    content: [
      { type: 'p', children: [{ text: 'Riot Games has officially opened ticket sales for Worlds 2026, the League of Legends World Championship running October 15 through November 14 in the United States. Following a Fan First registration window that ran from June 1 to June 30, presale access for verified fans began on July 22 at 8:00 AM PDT. General admission tickets go on sale July 24 at 8:00 AM PDT, on a first-come, first-served basis.' }] },
      { type: 'h2', children: [{ text: 'Three cities, three stages of the tournament' }] },
      { type: 'p', children: [{ text: 'Worlds 2026 will be spread across three US venues. The Play-In Stage will take place at the Riot Games Arena in Los Angeles, California. The Swiss Stage, Quarterfinals, and Semifinals will follow at the Credit Union of Texas Event Center in Allen, part of the Dallas-Fort Worth metroplex. The tournament will culminate with the grand final at the Barclays Center in Brooklyn, New York, on November 14.' }] },
      { type: 'h2', children: [{ text: 'How to buy tickets' }] },
      { type: 'p', children: [{ text: 'Fans must register through the official LoL Esports ticket page using their Riot ID. Riot account emails are used for verification and sale updates. Riot Games notes that the Ticketmaster account email used for purchase must match the Riot account email to complete the transaction.' }] },
      { type: 'blockquote', children: [{ text: 'With a grand final set at the Barclays Center, Worlds 2026 is shaping up to be one of the most closely watched esports events of the year in the US.' }] },
    ],
  },
  {
    title: 'Worlds 2026: ya está a la venta la entrada, con la gran final en Brooklyn',
    slug: 'worlds-2026-venta-entradas-lanzamiento',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: 'Riot Games abrio la preventa de entradas para Worlds 2026 el 22 de julio, con la venta general prevista para el 24 de julio. El torneo se disputara en tres ciudades de Estados Unidos, de Los Angeles a Brooklyn.',
    sourceUrl: 'https://lolesports.com/en-US/news/worlds-2026-ticket-sales',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'International' }, { tag: 'Worlds' }],
    content: [
      { type: 'p', children: [{ text: 'Riot Games ha abierto oficialmente la venta de entradas para Worlds 2026, el Campeonato Mundial de League of Legends que se disputara del 15 de octubre al 14 de noviembre en Estados Unidos. Tras una ventana de registro Fan First del 1 al 30 de junio, la preventa para fans verificados comenzo el 22 de julio a las 8:00 AM PDT. La venta general se abrira el 24 de julio a las 8:00 AM PDT, por orden de llegada.' }] },
      { type: 'h2', children: [{ text: 'Tres ciudades, tres etapas del torneo' }] },
      { type: 'p', children: [{ text: 'Worlds 2026 se repartira entre tres sedes estadounidenses. La fase Play-In se disputara en la Riot Games Arena de Los Angeles, California. El Swiss Stage, junto con los cuartos y semifinales, tendra lugar en el Credit Union of Texas Event Center, en Allen, dentro del area metropolitana de Dallas-Fort Worth. El torneo culminara con la gran final en el Barclays Center de Brooklyn, Nueva York, el 14 de noviembre.' }] },
      { type: 'h2', children: [{ text: 'Como comprar las entradas' }] },
      { type: 'p', children: [{ text: 'Los fans deben registrarse a traves de la pagina oficial de entradas de LoL Esports usando su Riot ID. El correo asociado a la cuenta Riot se usa para la verificacion y las novedades de venta. Riot Games señala ademas que el correo de la cuenta de Ticketmaster usada para la compra debe coincidir con el de la cuenta Riot para completar la transaccion.' }] },
      { type: 'blockquote', children: [{ text: 'Con la gran final programada en el Barclays Center, Worlds 2026 se perfila como uno de los eventos de esports mas seguidos del año en Estados Unidos.' }] },
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
