import type { MigrationModule } from './runner'

export const id = '100-international-msi-2026-preview'
export const description = 'International — MSI 2026 à Daejeon : équipes qualifiées, format et enjeux'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-09T08:00:00.000Z'
const COVER = 'https://img.youtube.com/vi/mpnzapniLpI/maxresdefault.jpg'

const articles = [
  {
    title: "MSI 2026 à Daejeon : équipes qualifiées, format et grands enjeux",
    slug: 'msi-2026-daejeon-preview-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Le Mid-Season Invitational 2026 se déroule à Daejeon, en Corée du Sud, du 28 juin au 12 juillet. Neuf des onze équipes sont déjà confirmées — voici le point complet avant le lancement.",
    sourceUrl: 'https://lolesports.com/en-GB/news/msi-and-worlds-updates',
    tags: [{ tag: 'LoL' }, { tag: 'MSI' }, { tag: 'International' }, { tag: 'Esports' }],
    content: [
      { type: 'p', children: [{ text: "Dans moins de trois semaines, le Mid-Season Invitational 2026 ouvrira ses portes à Daejeon, en Corée du Sud. C'est la première fois que la ville accueille un événement international de League of Legends, et l'engouement local promet une atmosphère particulière pour les équipes coréennes qui joueront devant leur propre public. Le tournoi se déroule du 28 juin au 12 juillet au Daejeon Convention Center." }] },
      { type: 'h2', children: [{ text: "Neuf équipes sur onze déjà confirmées" }] },
      { type: 'p', children: [{ text: "Onze équipes se disputeront le titre : deux représentants pour la LCK, la LCS, la LCP, la LEC et la LPL, et un seul pour le CBLOL. À ce jour, neuf places ont été officiellement attribuées. Du côté de la LPL, Top Esports a validé leur billet le 7 juin en remportant les playoffs Split 2. Les deux représentants LPL bénéficieront d'un avantage de format : grâce au titre de Bilibili Gaming au First Stand 2026, la LPL envoie ses deux équipes directement en Bracket Stage, sans passer par les Play-In." }] },
      { type: 'p', children: [{ text: "En LEC, G2 Esports et Karmine Corp sont qualifiés depuis fin mai et début juin respectivement. La LCP sera représentée par Secret Whales et Relove Deep Cross Gaming, tous deux confirmés. Le CBLOL envoie FURIA, champion du Split 1 brésilien (3-1 sur LOS le 6 juin), unique représentant de la région en Amérique du Sud." }] },
      { type: 'h2', children: [{ text: "LCS et LCK : les dernières places en jeu" }] },
      { type: 'p', children: [{ text: "Deux régions n'ont pas encore finalisé leurs représentants. En LCS, LYON est assuré de participer après sa victoire en Upper Bracket Final contre Cloud9. Le deuxième représentant nord-américain sera connu le 14 juin, à l'issue de la Grande Finale LCS Spring. Ce même week-end, le LCK déterminera ses deux qualifiés lors de la dernière phase du Road to MSI à Wonju. Hanwha Life Esports affronte T1 en Upper Bracket dès le 12 juin pour un billet direct en finale, tandis que KT Rolster espère continuer depuis le Lower Bracket." }] },
      { type: 'h2', children: [{ text: "Format repensé et nouveaux enjeux" }] },
      { type: 'p', children: [{ text: "La formule des Play-In est allégée cette année : seulement quatre équipes (les deuxièmes graines de la LCK, LCS, LCP et LEC) s'affrontent dans un bracket double-élimination en BO5, avec une seule place à la clé pour le Bracket Stage. Les sept autres équipes entrent directement en phase finale. Gen.G, double champion en titre du MSI, devra d'abord se qualifier via le Road to MSI LCK avant de défendre sa couronne à Daejeon." }] },
      { type: 'blockquote', children: [{ text: "Daejeon, Corée du Sud — 28 juin au 12 juillet 2026. Rendez-vous dans trois semaines pour le choc des meilleures équipes du monde." }] },
    ],
  },
  {
    title: "MSI 2026 in Daejeon: Qualified Teams, Format, and Key Storylines",
    slug: 'msi-2026-daejeon-preview-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "The 2026 Mid-Season Invitational heads to Daejeon, South Korea from June 28 to July 12. Nine of eleven spots are confirmed — here is everything you need to know ahead of the tournament.",
    sourceUrl: 'https://lolesports.com/en-GB/news/msi-and-worlds-updates',
    tags: [{ tag: 'LoL' }, { tag: 'MSI' }, { tag: 'International' }, { tag: 'Esports' }],
    content: [
      { type: 'p', children: [{ text: "The 2026 Mid-Season Invitational is just under three weeks away, with the action set to unfold at the Daejeon Convention Center in South Korea from June 28 to July 12. It marks the first time Daejeon has hosted an international League of Legends event, and Korean fans will have the rare chance to watch their region's teams compete on home soil. Eleven teams across six regions will fight for the MSI title." }] },
      { type: 'h2', children: [{ text: "Nine Teams Confirmed, Two Regions Still Deciding" }] },
      { type: 'p', children: [{ text: "The LPL is represented by Top Esports, who secured their berth on June 7 by winning the Split 2 playoffs. The second LPL seed will be confirmed on June 14 — and crucially, both LPL teams skip the Play-In stage entirely and enter directly into the Bracket Stage, a privilege earned by Bilibili Gaming's First Stand 2026 title. From the LEC, G2 Esports and Karmine Corp are both locked in. The LCP sends Secret Whales and Relove Deep Cross Gaming. FURIA, CBLOL Split 1 champions (3-1 over LOS on June 6), are Brazil's sole representative." }] },
      { type: 'p', children: [{ text: "The LCS and LCK are the last two regions to finalize their rosters. In North America, LYON are already confirmed as Spring finalists; the Grand Final on June 14 will determine the second seed. The LCK will crown its two MSI representatives at the Road to MSI event in Wonju on June 12-14. Hanwha Life Esports and T1 clash in the Upper Bracket on June 12, with KT Rolster still alive after eliminating Dplus KIA in the Lower Bracket." }] },
      { type: 'h2', children: [{ text: "A Streamlined Play-In and LPL Bracket Advantage" }] },
      { type: 'p', children: [{ text: "The Play-In stage has been tightened to just four teams — the second seeds from the LCK, LCS, LCP, and LEC — competing in a double-elimination bracket (all best-of-fives) for a single spot in the Bracket Stage. The remaining seven teams advance directly. Gen.G, the two-time defending MSI champions, must first earn their place at Worlds through the Road to MSI before they can set their sights on a third consecutive title in Daejeon." }] },
      { type: 'blockquote', children: [{ text: "Daejeon, South Korea — June 28 to July 12, 2026. The world's best teams descend on Korea in less than three weeks." }] },
    ],
  },
  {
    title: "MSI 2026 en Daejeon: equipos clasificados, formato y claves del torneo",
    slug: 'msi-2026-daejeon-preview-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "El Mid-Season Invitational 2026 llega a Daejeon, Corea del Sur, del 28 de junio al 12 de julio. Nueve de once equipos ya están confirmados — aquí tienes todo lo que necesitas saber.",
    sourceUrl: 'https://lolesports.com/en-GB/news/msi-and-worlds-updates',
    tags: [{ tag: 'LoL' }, { tag: 'MSI' }, { tag: 'Internacional' }, { tag: 'Esports' }],
    content: [
      { type: 'p', children: [{ text: "Faltan menos de tres semanas para que el Mid-Season Invitational 2026 abra sus puertas en el Daejeon Convention Center, Corea del Sur, del 28 de junio al 12 de julio. Es la primera vez que la ciudad de Daejeon acoge un evento internacional de League of Legends, lo que promete un ambiente especial para los equipos coreanos que competirán delante de su propio público. Once equipos de seis regiones se disputarán el título." }] },
      { type: 'h2', children: [{ text: "Nueve equipos ya confirmados, dos regiones pendientes" }] },
      { type: 'p', children: [{ text: "La LPL estará representada por Top Esports, que selló su clasificación el 7 de junio ganando los playoffs del Split 2. El segundo representante LPL se conocerá el 14 de junio — y ambos equipos de la LPL entran directamente al Bracket Stage sin pasar por los Play-In, privilegio conseguido gracias al título de Bilibili Gaming en el First Stand 2026. La LEC envía a G2 Esports y Karmine Corp, ambos confirmados. La LCP tendrá a Secret Whales y Relove Deep Cross Gaming. FURIA, campeones del CBLOL Split 1 (3-1 sobre LOS el 6 de junio), es el único representante de Brasil." }] },
      { type: 'p', children: [{ text: "LCS y LCK son las dos últimas regiones en definir sus representantes. En Norteamérica, LYON ya está asegurado como finalista del Spring; la Gran Final del 14 de junio decidirá el segundo puesto. En la LCK, el Road to MSI en Wonju (12-14 de junio) determinará los dos cupos: Hanwha Life Esports y T1 se enfrentan el 12 de junio en el Upper Bracket, mientras KT Rolster sigue vivo desde el Lower Bracket tras eliminar a Dplus KIA." }] },
      { type: 'h2', children: [{ text: "Play-In reducido y ventaja LPL en el Bracket Stage" }] },
      { type: 'p', children: [{ text: "Los Play-In de este año se reducen a solo cuatro equipos — los segundos cabezas de serie de LCK, LCS, LCP y LEC — en un bracket de doble eliminación al mejor de cinco. Solo un equipo pasará al Bracket Stage principal. Los otros siete entran directamente. Gen.G, doble campeón defensores del MSI, deben primero clasificarse a través del Road to MSI LCK antes de poder defender su corona en Daejeon. El torneo promete ser el mejor MSI de la historia con todas las regiones en plena forma." }] },
      { type: 'blockquote', children: [{ text: "Daejeon, Corea del Sur — del 28 de junio al 12 de julio de 2026. El choque entre los mejores del mundo llega en menos de tres semanas." }] },
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
