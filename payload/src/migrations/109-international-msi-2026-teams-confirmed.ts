import type { MigrationModule } from './runner'

export const id = '109-international-msi-2026-teams-confirmed'
export const description = 'International — MSI 2026 Daejeon : 10 équipes qualifiées, dernier ticket LCK (T1 vs Gen.G) en jeu le 14 juin'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-14T08:00:00.000Z'
const COVER = 'https://img.youtube.com/vi/XEVqMaaaihE/maxresdefault.jpg'

const articles = [
  {
    title: "MSI 2026 Daejeon : 10 équipes qualifiées, le dernier ticket LCK entre T1 et Gen.G ce soir",
    slug: 'international-msi-2026-teams-confirmed-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "En ce 14 juin, dix des onze équipes du MSI 2026 à Daejeon ont déjà validé leur billet. Il ne manque qu'un ticket — le deuxième seed LCK — dont le sort se joue ce soir entre T1 et Gen.G.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'MSI' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "En ce 14 juin 2026, les qualifications pour le MSI 2026 à Daejeon touchent à leur fin. Sur les onze équipes qui se disputeront le titre entre le 28 juin et le 12 juillet au Daejeon Convention Center II, dix ont déjà validé leur billet. Il ne manque plus qu'un seul ticket — le deuxième représentant LCK — dont le destin se jouera ce soir dans le dernier match du LCK Road to MSI entre T1 et Gen.G." }] },
      { type: 'h2', children: [{ text: "Sept équipes directement en Bracket Stage" }] },
      { type: 'p', children: [{ text: "Les deux représentants LPL, Top Esports et Bilibili Gaming, intègrent directement le Bracket Stage. Ce privilège découle de la victoire de BLG au First Stand 2026, qui a offert à toute la région LPL deux places directes en phase principale. BLG a consolidé sa qualification en dominant Team WE 3-2 le 13 juin dans la Lower Final du LPL Split 2, un duel haletant qui conclut un parcours remarquable depuis le lower bracket après un upset en début de playoffs. G2 Esports (LEC champion), Hanwha Life Esports — vainqueur de T1 3-1 le 12 juin pour le premier seed LCK —, LYON (LCS premier seed), Team Secret Wales (LCP premier seed) et FURIA — champions du CBLOL Split 1 après leur victoire 3-1 contre LOS — complètent ce groupe d'élite." }] },
      { type: 'h2', children: [{ text: "Les Play-In : trois places confirmées, une à décider ce soir" }] },
      { type: 'p', children: [{ text: "Le tableau des Play-In se dessine presque entièrement. Karmine Corp (LEC deuxième graine), Cloud9 — qui a balayé Team Liquid 3-0 le 13 juin en Lower Final LCS — et Deep Cross Gaming (LCP deuxième graine) ont assuré leur présence aux Play-In de Daejeon. Pour la quatrième place, Gen.G, qui a écarté KT Rolster 3-0 le 13 juin, affronte T1 ce 14 juin dans un choc décisif au format BO5. Le vainqueur sera le dernier participant des Play-In, où une seule équipe sur quatre décrochera son billet pour le Bracket Stage. Rappel du format : les Play-In se déroulent du 28 juin au 1er juillet, en double élimination intégralement en BO5." }] },
      { type: 'blockquote', children: [{ text: "MSI 2026 à Daejeon : dix équipes sur onze sont confirmées. Gen.G et T1 s'affrontent ce soir pour le dernier ticket. Le tournoi débute le 28 juin — la plus grande scène de mi-saison mondiale de League of Legends accueillera bientôt les meilleures équipes de la planète." }] },
    ],
  },
  {
    title: "MSI 2026 Daejeon: 10 teams confirmed, final LCK slot between T1 and Gen.G tonight",
    slug: 'international-msi-2026-teams-confirmed-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Ten of eleven teams have secured their spot at MSI 2026 in Daejeon. Only one ticket remains — the LCK second seed — to be decided tonight between T1 and Gen.G.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'MSI' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "June 14, 2026 marks the final day of MSI qualification across all major leagues. Ten of eleven teams bound for the Daejeon Convention Center II (June 28 – July 12) have already secured their spots. One ticket remains — the LCK second seed — to be decided tonight between T1 and Gen.G in the last match of the LCK Road to MSI." }] },
      { type: 'h2', children: [{ text: "Seven teams heading straight to the Bracket Stage" }] },
      { type: 'p', children: [{ text: "Both LPL representatives, Top Esports and Bilibili Gaming, earn a direct spot in the Bracket Stage. This privilege stems from BLG's First Stand 2026 victory, which granted the entire LPL region two free passes to the main event. BLG locked in their qualification on June 13 by defeating Team WE 3-2 in the LPL Split 2 Lower Final — a tense series completing a remarkable run through the lower bracket after an early-playoffs upset. G2 Esports (LEC champion), Hanwha Life Esports — who beat T1 3-1 on June 12 to claim the LCK first seed —, LYON (LCS first seed), Team Secret Wales (LCP first seed), and FURIA — CBLOL Split 1 champions after a 3-1 win over LOS — round out this group of seven." }] },
      { type: 'h2', children: [{ text: "Play-In: three spots filled, one to go tonight" }] },
      { type: 'p', children: [{ text: "The Play-In bracket is nearly complete. Karmine Corp (LEC second seed), Cloud9 — who swept Team Liquid 3-0 on June 13 in the LCS Lower Final — and Deep Cross Gaming (LCP second seed) are all confirmed for the Daejeon Play-In. The fourth slot will be decided tonight: Gen.G, who shut out KT Rolster 3-0 on June 13, takes on T1 in a winner-takes-all best-of-five. The winner joins the other three teams in the Play-In stage (June 28 – July 1, full double elimination in BO5), where only one team out of four advances to the Bracket Stage." }] },
      { type: 'blockquote', children: [{ text: "MSI 2026 Daejeon: ten of eleven teams are set. Gen.G and T1 fight tonight for the final spot. The tournament kicks off June 28 — the world's best teams are almost ready." }] },
    ],
  },
  {
    title: "MSI 2026 Daejeon: 10 equipos clasificados, el último ticket LCK entre T1 y Gen.G esta noche",
    slug: 'international-msi-2026-teams-confirmed-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Diez de los once equipos del MSI 2026 en Daejeon ya tienen su plaza confirmada. Solo queda un ticket — el segundo seed LCK — que se decidirá esta noche entre T1 y Gen.G.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'MSI' }, { tag: 'Internacional' }],
    content: [
      { type: 'p', children: [{ text: "El 14 de junio de 2026 marca el último día de clasificación para el MSI 2026. Diez de los once equipos que competirán en Daejeon del 28 de junio al 12 de julio en el Daejeon Convention Center II ya tienen su billete confirmado. Solo queda una plaza por asignar — el segundo representante de la LCK — que se decidirá esta noche entre T1 y Gen.G en el último partido del LCK Road to MSI." }] },
      { type: 'h2', children: [{ text: "Siete equipos directos al Bracket Stage" }] },
      { type: 'p', children: [{ text: "Los dos representantes de la LPL, Top Esports y Bilibili Gaming, acceden directamente al Bracket Stage. Este privilegio viene dado por la victoria de BLG en el First Stand 2026, que otorgó a toda la región LPL dos plazas directas en la fase principal. BLG selló su clasificación el 13 de junio al vencer a Team WE 3-2 en la Lower Final de la LPL Split 2, una batalla tensa que culminó un increíble recorrido por el lower bracket tras caer en un temprano upset. G2 Esports (campeón LEC), Hanwha Life Esports — que venció a T1 3-1 el 12 de junio para ser el primer seed LCK —, LYON (primer seed LCS), Team Secret Wales (primer seed LCP) y FURIA — campeones del CBLOL Split 1 tras vencer 3-1 a LOS — completan este grupo de siete." }] },
      { type: 'h2', children: [{ text: "Play-In: tres plazas confirmadas, una por decidir esta noche" }] },
      { type: 'p', children: [{ text: "El cuadro de Play-In también está casi completo. Karmine Corp (segundo seed LEC), Cloud9 — que barrió 3-0 a Team Liquid el 13 de junio en la Lower Final LCS — y Deep Cross Gaming (segundo seed LCP) están confirmados para los Play-In de Daejeon. La cuarta plaza se decidirá esta noche: Gen.G, que arrasó a KT Rolster 3-0 el 13 de junio, se enfrenta a T1 en una eliminatoria decisiva al mejor de cinco. El ganador acompañará a los otros tres equipos en los Play-In (28 de junio al 1 de julio, doble eliminación en BO5), donde solo uno de los cuatro avanzará al Bracket Stage." }] },
      { type: 'blockquote', children: [{ text: "MSI 2026 Daejeon: diez de once equipos están listos. Esta noche, Gen.G y T1 disputan el último ticket. El torneo arranca el 28 de junio — la hora de la verdad se acerca para los mejores equipos del mundo." }] },
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
