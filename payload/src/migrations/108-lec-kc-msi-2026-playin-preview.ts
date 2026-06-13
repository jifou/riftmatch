import type { MigrationModule } from './runner'

export const id = '108-lec-kc-msi-2026-playin-preview'
export const description = 'LEC — Karmine Corp au MSI 2026 Play-In à Daejeon, première participation historique (juin 2026)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-13T08:00:00.000Z'

const articles = [
  {
    title: "Karmine Corp au MSI 2026 : première historique et route des Play-In à Daejeon",
    slug: 'lec-kc-msi-2026-playin-preview-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Pour la première fois de leur histoire, Karmine Corp disputeront le Mid-Season Invitational. Les Bleus, qualifiés le 6 juin après un sweep 3-0 sur Movistar KOI, affrontent les Play-In de MSI 2026 à Daejeon du 28 juin au 12 juillet.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LEC/2026/Spring',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Karmine Corp' }, { tag: 'MSI' }],
    content: [
      { type: 'p', children: [{ text: "Le 6 juin 2026, Karmine Corp a décroché son premier billet pour le Mid-Season Invitational en balayant Movistar KOI 3-0 en finale du Lower Bracket du LEC Spring 2026. Malgré la défaite 3-2 face à G2 Esports en Grande Finale le lendemain, les deux finalistes LEC partent pour Daejeon : G2 en Bracket Stage direct, KC en Play-In. Pour les Bleus, c'est une première historique — Karmine Corp n'avait jamais participé au MSI auparavant." }] },
      { type: 'h2', children: [{ text: "G2 direct, KC par les Play-In" }] },
      { type: 'p', children: [{ text: "En tant que champion LEC, G2 Esports est la première graine de la région et rejoint directement le Bracket Stage du MSI 2026. Karmine Corp, en tant que deuxième graine, devra passer par les Play-In. Ce format oppose quatre équipes — les deuxièmes graines de la LCK, LEC, LCS et LCP — dans un bracket double-élimination entièrement en BO5. Une seule équipe obtient son billet pour le Bracket Stage." }] },
      { type: 'h2', children: [{ text: "Les adversaires de KC aux Play-In" }] },
      { type: 'p', children: [{ text: "Au 13 juin, deux des quatre adversaires de KC sont encore en cours de détermination. Le deuxième représentant de la LCK sortira du LCK Road to MSI, dont le Lower Bracket se joue ce jour même : Gen.G affronte KT Rolster, et le vainqueur défiera T1. Le deuxième représentant LCS sera connu le 14 juin après la Grande Finale LCS au Mullett Arena (Arizona). Seul Relove Deep Cross Gaming — deuxième graine LCP — est déjà confirmé parmi les adversaires de KC." }] },
      { type: 'h2', children: [{ text: "Le First Stand, rampe de lancement vers Daejeon" }] },
      { type: 'p', children: [{ text: "Karmine Corp a déjà prouvé sa capacité à rivaliser à l'international en 2026. Lors du First Stand 2026, KC a atteint la Grande Finale avant de s'incliner face à Hanwha Life Esports. Cette expérience internationale récente est un atout précieux pour aborder des Play-In sous haute pression. Le roster de KC pour le MSI : Canna (top), Yike (jungle), kyeahoo (mid), Caliste (ADC), Busio (support)." }] },
      { type: 'blockquote', children: [{ text: "Karmine Corp est confirmé au MSI 2026 pour la première fois de leur histoire. Objectif Play-In : décrocher l'unique billet pour le Bracket Stage parmi quatre équipes. Rendez-vous à Daejeon du 28 juin au 12 juillet 2026." }] },
    ],
  },
  {
    title: "Karmine Corp at MSI 2026: Historic first appearance and Play-In road to Daejeon",
    slug: 'lec-kc-msi-2026-playin-preview-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "For the first time in their history, Karmine Corp will compete at the Mid-Season Invitational. The French squad, who qualified on June 6 with a dominant 3-0 sweep over Movistar KOI, will face the MSI 2026 Play-In stage in Daejeon from June 28 to July 12.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LEC/2026/Spring',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Karmine Corp' }, { tag: 'MSI' }],
    content: [
      { type: 'p', children: [{ text: "On June 6, 2026, Karmine Corp secured their first-ever MSI ticket with a dominant 3-0 sweep over Movistar KOI in the LEC Spring Lower Bracket Final. Despite a 3-2 loss to G2 Esports in the Grand Final the next day, both LEC finalists are heading to Daejeon: G2 directly to the Bracket Stage, KC to the Play-In. For the Blue Wall, this is a historic milestone — Karmine Corp had never participated in an MSI before." }] },
      { type: 'h2', children: [{ text: "G2 direct, KC through Play-Ins" }] },
      { type: 'p', children: [{ text: "As LEC champion, G2 Esports enters MSI 2026 directly as the region's first seed, earning a spot in the Bracket Stage. Karmine Corp, as second seed, must fight through the Play-In stage. This format pits four teams — the second seeds from the LCK, LEC, LCS, and LCP — in an all-best-of-five double-elimination bracket. Only one team advances to join the Bracket Stage." }] },
      { type: 'h2', children: [{ text: "KC's Play-In opponents" }] },
      { type: 'p', children: [{ text: "As of June 13, two of KC's four Play-In opponents are still being determined. The LCK's second representative will emerge from the LCK Road to MSI lower bracket, with matches happening today: Gen.G faces KT Rolster, and the winner will then face T1. The LCS second seed will be confirmed on June 14 after the LCS Grand Final at Mullett Arena in Arizona. Only Relove Deep Cross Gaming — the LCP's second seed — is already confirmed among KC's opponents." }] },
      { type: 'h2', children: [{ text: "First Stand form heading into Daejeon" }] },
      { type: 'p', children: [{ text: "Karmine Corp already proved they can compete at the international level in 2026. At First Stand 2026, KC made a remarkable run to the Grand Final before falling to Hanwha Life Esports. That recent international experience is a key asset for navigating a high-stakes Play-In stage. KC's MSI roster: Canna (top), Yike (jungle), kyeahoo (mid), Caliste (ADC), Busio (support)." }] },
      { type: 'blockquote', children: [{ text: "Karmine Corp are confirmed at MSI 2026 for the first time in their history. One goal at the Play-In: claim the single Bracket Stage ticket among four teams. See you in Daejeon, June 28 to July 12, 2026." }] },
    ],
  },
  {
    title: "Karmine Corp en MSI 2026: primera participación histórica y camino por los Play-In en Daejeon",
    slug: 'lec-kc-msi-2026-playin-preview-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Por primera vez en su historia, Karmine Corp competirá en el Mid-Season Invitational. El equipo francés, clasificado el 6 de junio tras un barrido 3-0 sobre Movistar KOI, disputará los Play-In del MSI 2026 en Daejeon del 28 de junio al 12 de julio.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LEC/2026/Spring',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Karmine Corp' }, { tag: 'MSI' }],
    content: [
      { type: 'p', children: [{ text: "El 6 de junio de 2026, Karmine Corp aseguró su primer billete para el MSI con una dominante victoria 3-0 sobre Movistar KOI en la final del Lower Bracket del LEC Spring 2026. A pesar de la derrota 3-2 ante G2 Esports en la Gran Final al día siguiente, ambos finalistas de la LEC viajan a Daejeon: G2 directamente al Bracket Stage, y KC a los Play-In. Para el Blue Wall, es un hito histórico — Karmine Corp nunca antes había participado en un MSI." }] },
      { type: 'h2', children: [{ text: "G2 directo, KC por los Play-In" }] },
      { type: 'p', children: [{ text: "Como campeón de la LEC, G2 Esports entra directamente al MSI 2026 como primera cabeza de serie de la región, obteniendo plaza en el Bracket Stage. Karmine Corp, como segunda cabeza de serie, debe pasar por los Play-In. Este formato enfrenta a cuatro equipos — las segundas cabezas de serie de la LCK, LEC, LCS y LCP — en un bracket de doble eliminación totalmente en BO5. Solo un equipo avanza al Bracket Stage." }] },
      { type: 'h2', children: [{ text: "Los rivales de KC en los Play-In" }] },
      { type: 'p', children: [{ text: "A 13 de junio, dos de los cuatro rivales de KC en los Play-In aún están por determinarse. El segundo representante de la LCK saldrá del LCK Road to MSI lower bracket, con partidos que se disputan hoy mismo: Gen.G enfrenta a KT Rolster, y el ganador se medirá a T1. El segundo representante de la LCS se confirmará el 14 de junio tras la Gran Final LCS en el Mullett Arena de Arizona. Solo Relove Deep Cross Gaming — segunda cabeza de serie de la LCP — ya está confirmado entre los rivales de KC." }] },
      { type: 'h2', children: [{ text: "El rodaje del First Stand antes de Daejeon" }] },
      { type: 'p', children: [{ text: "Karmine Corp ya demostró en 2026 que puede competir a nivel internacional. En el First Stand 2026, KC llegó hasta la Gran Final antes de caer ante Hanwha Life Esports. Esa experiencia internacional reciente es un activo clave para afrontar unos Play-In de alta exigencia. La plantilla de KC para el MSI: Canna (top), Yike (jungle), kyeahoo (mid), Caliste (ADC), Busio (support)." }] },
      { type: 'blockquote', children: [{ text: "Karmine Corp está confirmado en el MSI 2026 por primera vez en su historia. Un objetivo en los Play-In: conseguir el único billete al Bracket Stage entre cuatro equipos. Nos vemos en Daejeon, del 28 de junio al 12 de julio de 2026." }] },
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
