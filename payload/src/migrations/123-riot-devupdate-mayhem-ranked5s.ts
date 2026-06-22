import type { MigrationModule } from './runner'

export const id = '123-riot-devupdate-mayhem-ranked5s'
export const description = 'RIOT — Dev Update : ARAM Mayhem remaniée, Ranked 5s et ARAM Wardrobe annoncés'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-22T08:00:00.000Z'
const SOURCE = 'https://www.leagueoflegends.com/en-us/news/dev/tldw-mayhem-ranked-5s-more-dev-update/'
const COVER = 'https://img.youtube.com/vi/3_0h_vuIKv4/maxresdefault.jpg'

const articles = [
  {
    title: "Dev Update Riot : ARAM Mayhem révolutionnée, Ranked 5s de retour et ARAM Wardrobe en test",
    slug: 'riot-devupdate-mayhem-ranked5s-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Riot Games publie un nouveau Dev Update majeur : ARAM : Mayhem change radicalement de système, la file Ranked 5s revient en test et un abonnement ARAM Wardrobe débarque en Amérique du Sud et en Océanie.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'ARAM' }, { tag: 'Ranked' }],
    content: [
      { type: 'p', children: [{ text: "Riot Games vient de publier un nouveau Dev Update intitulé « TL;DW : Mayhem, Ranked 5s & More », résumant les changements majeurs qui arrivent sur League of Legends dans les prochaines semaines. Au programme : une refonte en profondeur d'ARAM : Mayhem, le retour de la file Ranked 5 joueurs, et l'expérimentation d'un abonnement inédit pour les skins." }] },
      { type: 'h2', children: [{ text: "ARAM : Mayhem — le système de Traits disparaît, les Augments arrivent" }] },
      { type: 'p', children: [{ text: "Le changement le plus attendu concerne ARAM : Mayhem. Riot supprime entièrement le système de Traits, jugé trop rigide, pour le remplacer par plus de 50 nouveaux Augments. Parmi les nouveautés les plus spectaculaires : les Augments de Compétences, qui modifient directement les sorts des champions. À titre d'exemple, Blitzcrank pourra utiliser sa Prise de Rouages pour attirer plusieurs ennemis à la fois. Ces ajouts visent à offrir davantage de liberté et des interactions plus dynamiques en jeu." }] },
      { type: 'h2', children: [{ text: "ARAM Wardrobe — un abonnement pour les skins" }] },
      { type: 'p', children: [{ text: "Riot teste également une nouvelle fonctionnalité baptisée ARAM Wardrobe. Pour 1 350 RP, les joueurs des serveurs du Brésil et de l'Océanie auront accès à la quasi-totalité des skins de rareté Épique (et inférieure) sortis avant 2026, utilisables exclusivement en ARAM et ARAM : Mayhem. Les skins limités dans le temps seront également inclus lorsqu'ils sont disponibles en boutique. Si les tests s'avèrent concluants, la fonctionnalité sera étendue à l'ensemble des régions." }] },
      { type: 'h2', children: [{ text: "Ranked 5s — la file pour parties complètes revient" }] },
      { type: 'p', children: [{ text: "La file Ranked dédiée aux équipes de 5 joueurs fait son retour pour une phase de test limité. Disponible uniquement pendant des créneaux horaires restreints sur plusieurs semaines, cette queue ne sera accessible qu'aux groupes de 5 joueurs souhaitant affronter d'autres équipes complètes. Un mode apprécié des groupes d'amis et des équipes semi-pro, qui avait disparu depuis plusieurs saisons." }] },
      { type: 'h2', children: [{ text: "Locke désactivé pendant le MSI 2026" }] },
      { type: 'p', children: [{ text: "Le Dev Update confirme enfin que Locke, le nouvel assassin AP dont la sortie est prévue le 24 juin avec le Patch 26.13, sera désactivé pendant tout le MSI 2026. Riot souhaite laisser le temps à la communauté de tester le champion avant d'envisager son apparition en compétition officielle." }] },
      { type: 'blockquote', children: [{ text: "Un Dev Update dense qui souligne l'ambition de Riot pour la seconde moitié de la saison 2026 : plus de contenu, plus de flexibilité en ARAM, et de nouvelles façons de jouer en équipe." }] },
    ],
  },
  {
    title: "Riot Dev Update: ARAM Mayhem Overhauled, Ranked 5s Returns, and ARAM Wardrobe Tested",
    slug: 'riot-devupdate-mayhem-ranked5s-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Riot Games dropped a major Dev Update covering ARAM: Mayhem's complete system rework, the return of Ranked 5s, and a new ARAM Wardrobe subscription being tested in Brazil and Oceania.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'ARAM' }, { tag: 'Ranked' }],
    content: [
      { type: 'p', children: [{ text: "Riot Games has published a new Dev Update titled \"TL;DW: Mayhem, Ranked 5s & More,\" outlining the major changes coming to League of Legends over the next few weeks. The highlights include a sweeping overhaul of ARAM: Mayhem, the return of the Ranked 5-player queue, and an experimental skin subscription for ARAM players." }] },
      { type: 'h2', children: [{ text: "ARAM: Mayhem — Traits Out, Augments In" }] },
      { type: 'p', children: [{ text: "The biggest change hits ARAM: Mayhem. Riot is completely removing the Trait system and replacing it with over 50 new Augments. The headline addition is Ability Augments — these directly modify champion abilities for wild new interactions. A standout example: Blitzcrank's Rocket Grab can pull multiple enemies simultaneously. The goal is to give players much greater freedom and create more dynamic, unpredictable teamfights. Popular Traits will be preserved in Augment form so nothing beloved is lost entirely." }] },
      { type: 'h2', children: [{ text: "ARAM Wardrobe — Skin Subscription Comes to ARAM" }] },
      { type: 'p', children: [{ text: "Riot is testing a brand-new feature called ARAM Wardrobe in Brazil and Oceania. For 1,350 RP, players gain access to nearly all Epic-tier and lower skins released before 2026, usable exclusively in ARAM and ARAM: Mayhem. Time-limited skins in that category will also be included when they are available in the shop. If the regional test succeeds, Riot plans to roll it out globally." }] },
      { type: 'h2', children: [{ text: "Ranked 5s Returns for Limited Testing" }] },
      { type: 'p', children: [{ text: "The Ranked queue for full five-player parties is coming back. Available only during limited time windows across several weeks, the Ranked 5s queue allows full premade teams to compete against other five-player groups for ranked points. The mode had been absent for several seasons and its return is welcome news for friend groups and semi-pro teams alike." }] },
      { type: 'h2', children: [{ text: "Locke Disabled During MSI 2026" }] },
      { type: 'p', children: [{ text: "The Dev Update also confirms that Locke, the new AP mid assassin arriving with Patch 26.13 on June 24, will be disabled for the entirety of MSI 2026. Riot wants to give the community time to explore the champion before he appears in professional competition." }] },
      { type: 'blockquote', children: [{ text: "A packed Dev Update that signals Riot's ambition for the second half of Season 2026: more ARAM content, more ways to play with friends in ranked, and experimental new features being pushed out faster than ever." }] },
    ],
  },
  {
    title: "Dev Update de Riot: ARAM Mayhem renovada, regresa Ranked 5s y se prueba ARAM Wardrobe",
    slug: 'riot-devupdate-mayhem-ranked5s-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Riot Games lanzó un importante Dev Update con la renovación completa de ARAM: Mayhem, el regreso de la cola Ranked 5s y la prueba de una suscripción de skins llamada ARAM Wardrobe en Brasil y Oceanía.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'ARAM' }, { tag: 'Ranked' }],
    content: [
      { type: 'p', children: [{ text: "Riot Games ha publicado un nuevo Dev Update titulado \"TL;DW: Mayhem, Ranked 5s & More\" en el que detalla los grandes cambios que llegarán a League of Legends en las próximas semanas. Los puntos destacados son la renovación radical de ARAM: Mayhem, el regreso de la cola Ranked para equipos de 5 jugadores y una nueva suscripción experimental de skins para ARAM." }] },
      { type: 'h2', children: [{ text: "ARAM: Mayhem — adiós a los Rasgos, bienvenidos los Aumentos" }] },
      { type: 'p', children: [{ text: "El cambio más importante afecta a ARAM: Mayhem. Riot elimina por completo el sistema de Rasgos y lo sustituye por más de 50 nuevos Aumentos. La novedad estrella son los Aumentos de Habilidad, que modifican directamente las habilidades de los campeones para crear interacciones nunca vistas. El ejemplo más llamativo: el Agarre Cohete de Blitzcrank podrá arrastrar a varios enemigos a la vez. Los Rasgos populares se conservarán en forma de Aumentos para que ningún favorito desaparezca del todo." }] },
      { type: 'h2', children: [{ text: "ARAM Wardrobe — una suscripción de skins solo para ARAM" }] },
      { type: 'p', children: [{ text: "Riot está probando una nueva función llamada ARAM Wardrobe en Brasil y Oceanía. Por 1.350 RP, los jugadores tendrán acceso a casi todas las skins de rareza Épica (o inferior) lanzadas antes de 2026, utilizables exclusivamente en ARAM y ARAM: Mayhem. Las skins de tiempo limitado también estarán incluidas cuando estén disponibles en la tienda. Si la prueba regional tiene éxito, Riot planea extenderla a nivel global." }] },
      { type: 'h2', children: [{ text: "Ranked 5s — regresa la cola para equipos completos" }] },
      { type: 'p', children: [{ text: "La cola Ranked exclusiva para grupos de cinco jugadores vuelve de forma temporal. Solo disponible durante franjas horarias limitadas a lo largo de varias semanas, Ranked 5s permite que equipos completos compitan contra otros grupos de cinco por puntos clasificatorios. El modo había desaparecido hace varias temporadas y su regreso es una excelente noticia para grupos de amigos y equipos semiprofesionales." }] },
      { type: 'h2', children: [{ text: "Locke deshabilitado durante el MSI 2026" }] },
      { type: 'p', children: [{ text: "El Dev Update también confirma que Locke, el nuevo asesino de AP de carril medio que llegará con el Parche 26.13 el 24 de junio, estará deshabilitado durante todo el MSI 2026. Riot quiere dar tiempo a la comunidad para explorar al campeón antes de que aparezca en competición oficial." }] },
      { type: 'blockquote', children: [{ text: "Un Dev Update denso que refleja la ambición de Riot para la segunda mitad de la temporada 2026: más contenido en ARAM, nuevas formas de jugar en clasificatoria y funciones experimentales que llegan más rápido que nunca." }] },
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
