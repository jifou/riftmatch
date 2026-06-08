import type { MigrationModule } from './runner'

export const id = '096-international-worlds-2026-tickets'
export const description = 'RIOT — Worlds 2026 : ventes de billets ouvertes, inscription Fan First jusqu\'au 30 juin'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-08T08:00:00.000Z'

const articles = [
  {
    title: "Worlds 2026 : les ventes de billets sont ouvertes, inscrivez-vous avant le 30 juin",
    slug: 'worlds-2026-billets-fan-first-inscription',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Riot Games a lancé les inscriptions Fan First pour les Worlds 2026. Trois villes américaines accueilleront le Championnat du Monde : Los Angeles, Allen (Texas) et Brooklyn. Inscrivez-vous avant le 30 juin pour accéder à la prévente du 22 juillet.",
    sourceUrl: 'https://lolesports.com/en-US/news/worlds-2026-ticket-sales',
    tags: [{ tag: 'Worlds 2026' }, { tag: 'LoL Esports' }, { tag: 'billets' }, { tag: 'Fan First' }],
    content: [
      { type: 'p', children: [{ text: "Riot Games a officiellement ouvert les inscriptions pour les Worlds 2026, le Championnat du Monde de League of Legends qui se tiendra en Amérique du Nord cet automne. Les fans souhaitant assister à l'événement en direct ont jusqu'au 30 juin 2026 pour s'enregistrer dans le système Fan First — le sésame pour accéder à la prévente de billets." }] },
      { type: 'h2', children: [{ text: "Le retour du système Fan First" }] },
      { type: 'p', children: [{ text: "Pour lutter contre les bots et les revendeurs, Riot Games réintroduit son système Fan First déjà éprouvé lors des éditions précédentes. Les fans doivent s'inscrire sur lolesports.com/tickets en utilisant leur compte Riot Games. Une vérification est effectuée pour s'assurer que les billets aboutissent entre les mains des véritables joueurs et non des scalpers." }] },
      { type: 'p', children: [{ text: "Condition importante : l'adresse email de votre compte Ticketmaster doit correspondre exactement à celle de votre compte Riot Games. Sans cette correspondance, la finalisation de l'achat sera impossible lors des ventes." }] },
      { type: 'h2', children: [{ text: "Trois villes, trois lieux emblématiques" }] },
      { type: 'p', children: [{ text: "Les Worlds 2026 traverseront trois grandes villes américaines au fil des phases du tournoi :" }] },
      { type: 'p', children: [{ text: "La phase de jeu (Play-In) se déroulera au Riot Games Arena de Los Angeles, en Californie — le fief même de Riot Games. La phase suisse et les phases éliminatoires (quarts et demi-finales) auront lieu au Credit Union of Texas Event Center à Allen, au Texas. Enfin, la Grande Finale se jouera au mythique Barclays Center de Brooklyn, à New York." }] },
      { type: 'h2', children: [{ text: "Calendrier des ventes de billets" }] },
      { type: 'p', children: [{ text: "Les inscriptions Fan First sont ouvertes depuis le 1er juin et se clôturent le 30 juin 2026 à 17h00 CEST. Les fans vérifiés auront accès à la prévente le 22 juillet 2026 à 17h00 CEST. La vente générale ouvre quant à elle le 24 juillet 2026 à 17h00 CEST, sur la base du premier arrivé, premier servi." }] },
      { type: 'p', children: [{ text: "Le tournoi se tiendra en octobre et novembre 2026, avec des dates précises pour chaque phase qui seront communiquées prochainement par Riot Games et LoL Esports." }] },
      { type: 'blockquote', children: [{ text: "Les Worlds 2026 promettent d'être un événement historique pour la scène LoL. Ne manquez pas votre chance de vivre en direct ce qui s'annonce comme l'une des plus grandes éditions du Championnat du Monde — inscrivez-vous avant le 30 juin sur lolesports.com/tickets." }] },
    ],
  },
  {
    title: "Worlds 2026 Ticket Sales Are Open: Fan First Registration Ends June 30",
    slug: 'worlds-2026-ticket-sales-fan-first-registration',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Riot Games has opened Fan First registration for Worlds 2026. Three US cities will host the World Championship: Los Angeles, Allen (Texas), and Brooklyn. Sign up before June 30 to access the July 22 presale.",
    sourceUrl: 'https://lolesports.com/en-US/news/worlds-2026-ticket-sales',
    tags: [{ tag: 'Worlds 2026' }, { tag: 'LoL Esports' }, { tag: 'tickets' }, { tag: 'Fan First' }],
    content: [
      { type: 'p', children: [{ text: "Riot Games has officially opened registration for Worlds 2026, the League of Legends World Championship coming to North America this fall. Fans who want to attend in person have until June 30, 2026, to register through the Fan First system — their ticket to accessing the early presale." }] },
      { type: 'h2', children: [{ text: "The Fan First System Returns" }] },
      { type: 'p', children: [{ text: "To combat bots and scalpers, Riot Games is bringing back its Fan First Verification system. Fans must register at lolesports.com/tickets using their Riot Games account. The system verifies that tickets end up in the hands of real players rather than automated purchasers." }] },
      { type: 'p', children: [{ text: "One key requirement: your Ticketmaster account email must exactly match your Riot Games account email. Without this match, completing a ticket purchase will not be possible." }] },
      { type: 'h2', children: [{ text: "Three Cities, Three Iconic Venues" }] },
      { type: 'p', children: [{ text: "Worlds 2026 will move across three major American cities throughout the tournament's stages:" }] },
      { type: 'p', children: [{ text: "The Play-In stage will take place at the Riot Games Arena in Los Angeles, California — Riot's home turf. The Swiss Stage and Knockout Stage (quarterfinals and semifinals) head to the Credit Union of Texas Event Center in Allen, Texas. The Grand Finals will be held at the iconic Barclays Center in Brooklyn, New York." }] },
      { type: 'h2', children: [{ text: "Ticket Sale Timeline" }] },
      { type: 'p', children: [{ text: "Fan First registration runs from June 1 through June 30, 2026 at 8:00 AM PDT. Verified fans will get access to the presale on July 22, 2026 at 8:00 AM PDT. General ticket sales open on July 24, 2026 at 8:00 AM PDT on a first-come, first-served basis." }] },
      { type: 'p', children: [{ text: "The tournament itself is scheduled for October and November 2026, with specific dates for each stage to be announced by Riot Games and LoL Esports in the coming weeks." }] },
      { type: 'blockquote', children: [{ text: "Worlds 2026 is shaping up to be a landmark event for the LoL competitive scene. Don't miss your chance to witness it live — register before June 30 at lolesports.com/tickets." }] },
    ],
  },
  {
    title: "Worlds 2026: La venta de entradas está abierta, regístrate antes del 30 de junio",
    slug: 'worlds-2026-entradas-fan-first-registro',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Riot Games ha abierto el registro Fan First para Worlds 2026. Tres ciudades de EE.UU. albergarán el Campeonato del Mundo: Los Ángeles, Allen (Texas) y Brooklyn. Regístrate antes del 30 de junio para acceder a la preventa del 22 de julio.",
    sourceUrl: 'https://lolesports.com/en-US/news/worlds-2026-ticket-sales',
    tags: [{ tag: 'Worlds 2026' }, { tag: 'LoL Esports' }, { tag: 'entradas' }, { tag: 'Fan First' }],
    content: [
      { type: 'p', children: [{ text: "Riot Games ha abierto oficialmente el registro para Worlds 2026, el Campeonato del Mundo de League of Legends que se celebrará en América del Norte este otoño. Los fans que quieran asistir en persona tienen hasta el 30 de junio de 2026 para registrarse en el sistema Fan First, su acceso a la preventa de entradas." }] },
      { type: 'h2', children: [{ text: "El regreso del sistema Fan First" }] },
      { type: 'p', children: [{ text: "Para combatir los bots y los revendedores, Riot Games recupera su sistema Fan First Verification. Los fans deben registrarse en lolesports.com/tickets usando su cuenta de Riot Games. El sistema verifica que las entradas lleguen a manos de jugadores reales y no de compradores automatizados." }] },
      { type: 'p', children: [{ text: "Un requisito clave: el correo electrónico de tu cuenta de Ticketmaster debe coincidir exactamente con el de tu cuenta de Riot Games. Sin esta coincidencia, no podrás completar la compra de entradas." }] },
      { type: 'h2', children: [{ text: "Tres ciudades, tres lugares icónicos" }] },
      { type: 'p', children: [{ text: "Worlds 2026 recorrerá tres grandes ciudades estadounidenses a lo largo de las fases del torneo: la fase de Play-In en el Riot Games Arena de Los Ángeles (California), la fase suiza y las eliminatorias en el Credit Union of Texas Event Center de Allen (Texas), y la Gran Final en el legendario Barclays Center de Brooklyn, Nueva York." }] },
      { type: 'h2', children: [{ text: "Calendario de venta de entradas" }] },
      { type: 'p', children: [{ text: "El registro Fan First está abierto desde el 1 de junio y cierra el 30 de junio de 2026 a las 17:00 CEST. Los fans verificados tendrán acceso a la preventa el 22 de julio de 2026 a las 17:00 CEST. La venta general abre el 24 de julio de 2026 a las 17:00 CEST, por orden de llegada." }] },
      { type: 'p', children: [{ text: "El torneo se celebrará en octubre y noviembre de 2026, con fechas específicas para cada fase que Riot Games anunciará próximamente." }] },
      { type: 'blockquote', children: [{ text: "Worlds 2026 promete ser un evento histórico para la escena competitiva de LoL. No pierdas tu oportunidad de vivirlo en directo — regístrate antes del 30 de junio en lolesports.com/tickets." }] },
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
