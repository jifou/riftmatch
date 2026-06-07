import type { MigrationModule } from './runner'

export const id = '093-international-lck-road-msi-kt-dk'
export const description = 'LCK Road to MSI 2026 — KT Rolster sweep DK 3-0, round 2'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-07T08:00:00.000Z'
const COVER = 'https://img.youtube.com/vi/LGATIG9P-2s/maxresdefault.jpg'

const articles = [
  {
    title: "LCK Road to MSI 2026 : KT Rolster élimine Dplus KIA 3-0",
    slug: 'lck-road-msi-2026-kt-dplus-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "KT Rolster a dominé Dplus KIA 3-0 au second tour du LCK Road to MSI 2026, éliminant la formation adverse et se rapprochant d'une qualification pour le MSI à Daejeon.",
    sourceUrl: 'https://lolesports.com/en-GB/tournament/115548128960088078/stage/115548128961398800',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'MSI 2026' }, { tag: 'KT Rolster' }],
    content: [
      { type: 'p', children: [{ text: "Le LCK Road to MSI 2026 a vécu une journée charnière ce dimanche 7 juin à Séoul. KT Rolster a dominé Dplus KIA du début à la fin, s'imposant 3-0 dans un duel du lower bracket. Cette victoire élimine définitivement Dplus KIA de la course au MSI 2026 et maintient KT dans la lutte pour représenter la Corée à Daejeon." }] },
      { type: 'h2', children: [{ text: "Bdd, Cuzz et Peter au sommet de leur jeu" }] },
      { type: 'p', children: [{ text: "Le mid-laner Gwak \"Bdd\" Bo-seong a livré une performance de haute tenue tout au long du BO5, imposant son tempo en phase de laning et dans les combats d'équipe. Le jungler Mun \"Cuzz\" U-chan a maintenu une pression constante sur la carte, tandis que le support Jeong \"Peter\" Yoon-su a parfaitement initié les engagements décisifs. L'alchimie entre les trois joueurs a été trop difficile à contrer pour Dplus KIA." }] },
      { type: 'h2', children: [{ text: "Le chemin de KT vers Daejeon se dessine" }] },
      { type: 'p', children: [{ text: "Le tournoi court du 6 au 14 juin avec des matches en double élimination. En parallèle, T1 et Hanwha Life Esports, qui profitent d'une double chance en upper bracket, s'affronteront le 12 juin pour déterminer le premier représentant coréen au MSI. KT devra poursuivre sa série de victoires dans le lower bracket pour décrocher l'un des deux précieux billets LCK." }] },
      { type: 'h2', children: [{ text: "Un MSI 2026 qui s'annonce historique" }] },
      { type: 'p', children: [{ text: "Le Mid-Season Invitational 2026 se tiendra à Daejeon, en Corée du Sud, du 28 juin au 12 juillet — une première pour cette ville coréenne. Les représentants LPL Bilibili Gaming sont déjà qualifiés directement en bracket stage grâce à leur titre au First Stand 2026. En LEC, G2 Esports et Karmine Corp ont également assuré leur place. La compétition s'annonce relevée pour les équipes coréennes qui auront l'avantage de jouer devant leur public." }] },
      { type: 'blockquote', children: [{ text: "KT Rolster confirme sa forme du moment avec un sweep autoritaire et s'affirme comme un sérieux prétendant à la qualification MSI 2026." }] },
    ],
  },
  {
    title: "LCK Road to MSI 2026: KT Rolster sweeps Dplus KIA 3-0",
    slug: 'lck-road-msi-2026-kt-dplus-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "KT Rolster swept Dplus KIA 3-0 in Round 2 of the LCK Road to MSI 2026, eliminating DK from contention and keeping their MSI Daejeon dreams alive.",
    sourceUrl: 'https://lolesports.com/en-GB/tournament/115548128960088078/stage/115548128961398800',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'MSI 2026' }, { tag: 'KT Rolster' }],
    content: [
      { type: 'p', children: [{ text: "The LCK Road to MSI 2026 continued on Sunday, June 7 in Seoul, as KT Rolster delivered a dominant 3-0 sweep against Dplus KIA in a lower bracket showdown. KT controlled the pace from start to finish across all three games, officially eliminating Dplus KIA from the MSI 2026 race." }] },
      { type: 'h2', children: [{ text: "Bdd, Cuzz, and Peter shine for KT" }] },
      { type: 'p', children: [{ text: "Mid-laner Gwak \"Bdd\" Bo-seong was the standout performer of the series, asserting control in the laning phase and team fights alike. Jungler Mun \"Cuzz\" U-chan applied relentless pressure across the map throughout the series, while support Jeong \"Peter\" Yoon-su delivered key engages that repeatedly broke Dplus KIA's formation. The trio's cohesion proved too much for DK to handle over the course of three maps." }] },
      { type: 'h2', children: [{ text: "KT's road to MSI is still open" }] },
      { type: 'p', children: [{ text: "The double-elimination tournament runs from June 6 to 14, with KT still alive in the lower bracket. T1 and Hanwha Life Esports, who both hold a double chance from the upper bracket, are set to clash on June 12 in what will be a decisive match for the first confirmed Korean MSI 2026 representative. KT will need to keep their winning streak going to earn one of the two LCK spots heading to Daejeon." }] },
      { type: 'h2', children: [{ text: "MSI 2026: A first for Daejeon" }] },
      { type: 'p', children: [{ text: "MSI 2026 takes place in Daejeon, South Korea from June 28 to July 12, marking the first time the city hosts the prestigious international event. LPL's Bilibili Gaming have already secured a direct entry to the bracket stage following their First Stand 2026 title, while G2 Esports and Karmine Corp will fly the LEC flag. The Korean teams will have the rare privilege of competing in front of a home crowd." }] },
      { type: 'blockquote', children: [{ text: "KT Rolster's authoritative sweep positions them as a real contender in the fight for an LCK MSI 2026 berth." }] },
    ],
  },
  {
    title: "LCK Road to MSI 2026: KT Rolster elimina a Dplus KIA 3-0",
    slug: 'lck-road-msi-2026-kt-dplus-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "KT Rolster barrió a Dplus KIA 3-0 en la ronda 2 del LCK Road to MSI 2026, eliminando a DK de la carrera por el MSI en Daejeon.",
    sourceUrl: 'https://lolesports.com/en-GB/tournament/115548128960088078/stage/115548128961398800',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'MSI 2026' }, { tag: 'KT Rolster' }],
    content: [
      { type: 'p', children: [{ text: "El LCK Road to MSI 2026 vivió este domingo 7 de junio en Seúl una jornada decisiva. KT Rolster dominó de principio a fin a Dplus KIA con un contundente 3-0 en el lower bracket, eliminando definitivamente a DK de la carrera por el MSI 2026 y consolidando su candidatura para viajar a Daejeon." }] },
      { type: 'h2', children: [{ text: "Bdd, Cuzz y Peter lideran a KT" }] },
      { type: 'p', children: [{ text: "El mid-laner Gwak \"Bdd\" Bo-seong fue la figura más destacada de la serie, imponiendo su sello en la fase de líneas y en los teamfights. El jungler Mun \"Cuzz\" U-chan ejerció una presión constante sobre el mapa, mientras que el support Jeong \"Peter\" Yoon-su ejecutó los engages decisivos que dejaron a Dplus KIA sin respuesta. La conjunción de los tres resultó imposible de contrarestar para DK en los tres mapas disputados." }] },
      { type: 'h2', children: [{ text: "KT sigue vivo en la lucha por el MSI" }] },
      { type: 'p', children: [{ text: "El torneo de doble eliminación se disputa del 6 al 14 de junio. KT Rolster continúa con vida en el lower bracket y deberá seguir ganando para hacerse con uno de los dos cupos LCK para Daejeon. En el upper bracket, T1 y Hanwha Life Esports —ambos con doble oportunidad de clasificación— se enfrentarán el 12 de junio en el duelo que determinará al primer representante coreano confirmado en el MSI 2026." }] },
      { type: 'h2', children: [{ text: "MSI 2026: Daejeon, un escenario histórico" }] },
      { type: 'p', children: [{ text: "El Mid-Season Invitational 2026 se celebrará en Daejeon, Corea del Sur, del 28 de junio al 12 de julio, siendo la primera vez que esta ciudad acogerá el evento. Bilibili Gaming de la LPL ya tiene asegurado el acceso directo a la fase de bracket tras su victoria en el First Stand 2026, mientras que G2 Esports y Karmine Corp representarán a la LEC. Los equipos coreanos tendrán la ventaja de competir ante su propio público." }] },
      { type: 'blockquote', children: [{ text: "KT Rolster demuestra con este sweep que es uno de los principales candidatos a representar a Corea en el MSI 2026." }] },
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
