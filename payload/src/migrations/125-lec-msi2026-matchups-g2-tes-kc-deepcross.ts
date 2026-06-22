import type { MigrationModule } from './runner'

export const id = '125-lec-msi2026-matchups-g2-tes-kc-deepcross'
export const description = 'LEC — MSI 2026 : programme confirmé, G2 vs TES en Bracket Stage le 3 juillet, KC vs Deep Cross en Play-In le 28 juin'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-22T08:00:00.000Z'

const articles = [
  {
    title: "MSI 2026 : G2 face à TES en Bracket Stage, Karmine Corp ouvre contre Deep Cross le 28 juin",
    slug: 'lec-msi-2026-matchups-g2-tes-kc-deepcross-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Le calendrier du MSI 2026 à Daejeon est fixé : G2 Esports défie Top Esports en Bracket Stage dès le 3 juillet, tandis que Karmine Corp lance son Play-In contre Deep Cross Gaming le 28 juin à 10h CET.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'MSI' }, { tag: 'G2 Esports' }, { tag: 'Karmine Corp' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Le programme complet du Mid-Season Invitational 2026 est désormais arrêté. G2 Esports, champion du LEC Spring 2026 et première graine européenne, affrontera Top Esports (TES) dès l'ouverture du Bracket Stage le 3 juillet au Daejeon Convention Center II. Karmine Corp, deuxième représentante de la LEC, lancera quant à elle son Play-In contre Deep Cross Gaming le 28 juin à 10h CET (17h KST)." }],
      },
      {
        type: 'h2',
        children: [{ text: "G2 Esports vs TES : duel LEC-LPL dès le 3 juillet" }],
      },
      {
        type: 'p',
        children: [{ text: "En tant que champion du LEC Spring 2026, G2 Esports rejoint directement le Bracket Stage en première graine régionale. Le tirage au sort les oppose à Top Esports : TES ne pouvant affronter Bilibili Gaming en ouverture (règle anti-régionale), G2 hérite de ce match en BO5. La rencontre se tiendra à Daejeon le 3 juillet, date du premier jour du Bracket Stage." }],
      },
      {
        type: 'h2',
        children: [{ text: "Karmine Corp vs Deep Cross Gaming : le Play-In le 28 juin" }],
      },
      {
        type: 'p',
        children: [{ text: "Karmine Corp ouvre son MSI 2026 contre Deep Cross Gaming, deuxième graine LCP, le 28 juin à 10h CET. Le même jour, T1 affronte Team Liquid à 5h CET. Le format Play-In est une double-élimination en BO5 entre quatre équipes : une seule obtient son ticket pour le Bracket Stage. Victoire dans la upper bracket = voie facilitée ; défaite = un dernier match avant l'élimination." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "G2 vs TES le 3 juillet, KC vs Deep Cross le 28 juin : les deux représentants LEC ont leurs adversaires confirmés au MSI 2026 de Daejeon (28 juin – 12 juillet)." }],
      },
    ],
  },
  {
    title: "MSI 2026: G2 Esports face Top Esports in Bracket Stage, Karmine Corp open Play-In vs Deep Cross on June 28",
    slug: 'lec-msi-2026-matchups-g2-tes-kc-deepcross-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "The MSI 2026 schedule in Daejeon is set: G2 Esports face Top Esports in the Bracket Stage from July 3, while Karmine Corp opens their Play-In against Deep Cross Gaming on June 28 at 10am CET.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'MSI' }, { tag: 'G2 Esports' }, { tag: 'Karmine Corp' }],
    content: [
      {
        type: 'p',
        children: [{ text: "The full MSI 2026 schedule is now confirmed. G2 Esports, LEC Spring 2026 champions and the region's first seed, will face Top Esports (TES) on the opening day of the Bracket Stage — July 3 at the Daejeon Convention Center II. Karmine Corp, LEC's second seed, begin their Play-In run against Deep Cross Gaming on June 28 at 10am CET (5pm KST)." }],
      },
      {
        type: 'h2',
        children: [{ text: "G2 Esports vs TES: LEC meets LPL on July 3" }],
      },
      {
        type: 'p',
        children: [{ text: "As LEC Spring 2026 champions, G2 Esports earn a direct berth into the Bracket Stage as the region's first seed. The draw slots them against Top Esports: TES cannot face Bilibili Gaming in the opening round due to the same-region rule, making G2 their opponent. The best-of-five match is scheduled for July 3, the first day of the Bracket Stage in Daejeon." }],
      },
      {
        type: 'h2',
        children: [{ text: "Karmine Corp vs Deep Cross Gaming: Play-In on June 28" }],
      },
      {
        type: 'p',
        children: [{ text: "Karmine Corp play their first MSI match against Deep Cross Gaming (LCP 2nd seed) on June 28 at 10am CET. On the same day, T1 and Team Liquid face off at 5am CET. The Play-In runs as a four-team double-elimination bracket, all series best-of-five — only one team advances to the Bracket Stage. A win puts KC on the winner's path; a loss leaves one final match before elimination." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "G2 vs TES on July 3, KC vs Deep Cross on June 28: both LEC representatives now have confirmed opponents at MSI 2026 in Daejeon (June 28 – July 12)." }],
      },
    ],
  },
  {
    title: "MSI 2026: G2 Esports debuta ante Top Esports en el Bracket Stage, Karmine Corp abre el Play-In contra Deep Cross el 28 de junio",
    slug: 'lec-msi-2026-matchups-g2-tes-kc-deepcross-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "El calendario del MSI 2026 en Daejeon ya está fijado: G2 Esports se enfrenta a Top Esports en el Bracket Stage desde el 3 de julio, mientras que Karmine Corp abre su Play-In contra Deep Cross Gaming el 28 de junio a las 10h CET.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'MSI' }, { tag: 'G2 Esports' }, { tag: 'Karmine Corp' }],
    content: [
      {
        type: 'p',
        children: [{ text: "El programa completo del MSI 2026 ya es oficial. G2 Esports, campeón del LEC Spring 2026 y primera cabeza de serie europea, se medirá a Top Esports (TES) en la ronda inaugural del Bracket Stage el 3 de julio en el Daejeon Convention Center II. Karmine Corp, segunda representante de la LEC, comenzará su Play-In frente a Deep Cross Gaming el 28 de junio a las 10h CET (17h KST)." }],
      },
      {
        type: 'h2',
        children: [{ text: "G2 Esports vs TES: la LEC se mide a la LPL el 3 de julio" }],
      },
      {
        type: 'p',
        children: [{ text: "Como campeón del LEC Spring 2026, G2 Esports accede directamente al Bracket Stage como primera cabeza de serie de la región. El sorteo los empareja con Top Esports: TES no puede enfrentarse a Bilibili Gaming en la ronda inaugural por la regla antiregional, convirtiendo a G2 en su rival. El partido al mejor de cinco se disputará el 3 de julio en Daejeon." }],
      },
      {
        type: 'h2',
        children: [{ text: "Karmine Corp vs Deep Cross Gaming: el Play-In arranca el 28 de junio" }],
      },
      {
        type: 'p',
        children: [{ text: "Karmine Corp jugará su primer partido del MSI ante Deep Cross Gaming (2a cabeza de serie de la LCP) el 28 de junio a las 10h CET. Ese mismo día, T1 y Team Liquid se miden a las 5h CET. El Play-In se disputa en formato de doble eliminación entre cuatro equipos, con todas las series al mejor de cinco: solo un equipo accede al Bracket Stage. Una victoria en la upper bracket coloca a KC en la vía del ganador; una derrota deja un único partido antes de la eliminación." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "G2 vs TES el 3 de julio, KC vs Deep Cross el 28 de junio: ambos representantes de la LEC ya conocen a sus rivales en el MSI 2026 de Daejeon (28 de junio – 12 de julio)." }],
      },
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
