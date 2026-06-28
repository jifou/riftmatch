import type { MigrationModule } from './runner'

export const id = '132-international-msi2026-bracket-preview'
export const description = 'MSI 2026 — Bracket Stage : G2 Esports vs TES en ouverture, tirage complet du tableau principal'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-28T08:00:00.000Z'

const articles = [
  {
    title: "MSI 2026 : G2 Esports affronte TES en ouverture du Bracket Stage — le tirage dévoilé",
    slug: 'msi2026-bracket-stage-preview-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Le tirage du Bracket Stage du MSI 2026 est connu : G2 Esports (LEC) affrontera Top Esports (LPL) dès le premier tour le 4 juillet, tandis que Bilibili Gaming attend le vainqueur du Play-In dès le 3 juillet. Sept équipes directement qualifiées + un qualifié Play-In se disputeront le titre mondial à Daejeon du 3 au 12 juillet.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026',
    tags: [{ tag: 'LoL' }, { tag: 'MSI' }, { tag: 'International' }, { tag: 'G2 Esports' }, { tag: 'Esports' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Le tableau principal du Mid-Season Invitational 2026 est désormais fixé. Tandis que le Play-In se dispute à Daejeon depuis ce 28 juin, les matchs du Bracket Stage ont été tirés au sort et les affiches sont officielles : sept équipes directement qualifiées s'y retrouveront du 3 au 12 juillet, rejointes par l'unique rescapé du Play-In." }],
      },
      {
        type: 'h2',
        children: [{ text: "G2 Esports vs Top Esports : le choc d'ouverture" }],
      },
      {
        type: 'p',
        children: [{ text: "Le duel le plus attendu du premier tour est sans conteste G2 Esports (LEC, Pool 1) contre Top Esports (LPL, Pool 4). Ce match de l'Upper Bracket Round 1 est programmé le 4 juillet à 17h00 KST. Les règles d'appariement interdisent aux équipes de la même région de se rencontrer dès l'ouverture, ce qui explique que TES ne peut pas affronter Bilibili Gaming — ce choc inter-régional LEC/LPL est donc la conséquence directe du système de pools." }],
      },
      {
        type: 'p',
        children: [{ text: "G2 Esports aborde ce MSI en tant que champion LEC et tête de série du Pool 1 aux côtés de Bilibili Gaming, champion LPL et lauréat du First Stand 2026. Pour TES, second seed LPL, affronter immédiatement la bannière européenne est un défi de taille dès le départ du tableau." }],
      },
      {
        type: 'h2',
        children: [{ text: "Bilibili Gaming vs vainqueur du Play-In : le 3 juillet" }],
      },
      {
        type: 'p',
        children: [{ text: "L'autre match d'ouverture du Upper Bracket Round 1 opposera Bilibili Gaming (LPL) au vainqueur du Play-In, et ce dès le 3 juillet à 12h00 KST. BLG, champion LPL et tenant du statut de première tête de série, débutera donc face à l'équipe qui aura survécu au double élimination du Play-In parmi T1 (LCK), Team Liquid Alienware (LCS), Karmine Corp (LEC) et Deep Cross Gaming (LPL)." }],
      },
      {
        type: 'h2',
        children: [{ text: "Les sept équipes directement qualifiées" }],
      },
      {
        type: 'p',
        children: [{ text: "Le Bracket Stage du MSI 2026 réunit sept équipes directement qualifiées, réparties en quatre pools : Pool 1 — Bilibili Gaming (LPL1) et G2 Esports (LEC1) ; Pool 2 — Hanwha Life Esports (LCK1) et LYON (LCS1) ; Pool 3 — Team Secret Whales (LCP1) et FURIA (CBLOL1) ; Pool 4 — Top Esports (LPL2) et le futur qualifié du Play-In. Toutes les rencontres se jouent en Best of 5 avec le Fearless Draft." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Le Bracket Stage du MSI 2026 se dispute du 3 au 12 juillet 2026 au Daejeon Convention Center en Corée du Sud, dans un format double élimination BO5 Fearless. La grande finale est prévue le 12 juillet." }],
      },
    ],
  },
  {
    title: "MSI 2026: G2 Esports vs TES Opens the Bracket Stage — Full Draw Revealed",
    slug: 'msi2026-bracket-stage-preview-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "MSI 2026 Bracket Stage draw is set: G2 Esports (LEC) takes on Top Esports (LPL) on July 4, while Bilibili Gaming faces the Play-In winner on July 3. Seven direct qualifiers plus one Play-In survivor will battle for the world title in Daejeon, July 3-12.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026',
    tags: [{ tag: 'LoL' }, { tag: 'MSI' }, { tag: 'International' }, { tag: 'G2 Esports' }, { tag: 'Esports' }],
    content: [
      {
        type: 'p',
        children: [{ text: "With the MSI 2026 Play-In stage underway in Daejeon since June 28, the Bracket Stage draw has been officially revealed. Seven teams earn direct entry into the main event, joined by one survivor from the Play-In double-elimination bracket. The Bracket Stage runs from July 3 to July 12 at the Daejeon Convention Center in South Korea." }],
      },
      {
        type: 'h2',
        children: [{ text: "G2 Esports vs Top Esports: The Headline Clash" }],
      },
      {
        type: 'p',
        children: [{ text: "The most anticipated first-round matchup sends G2 Esports (LEC, Pool 1) against Top Esports (LPL, Pool 4) in the Upper Bracket Round 1 on July 4 at 17:00 KST. The seeding rules prevent same-region teams from meeting in the opening round, meaning TES cannot face fellow LPL side Bilibili Gaming — making this LEC vs LPL cross-regional clash the headline fixture of the opening day." }],
      },
      {
        type: 'p',
        children: [{ text: "G2 Esports enter as LEC champions and a Pool 1 top seed alongside Bilibili Gaming, the LPL champions and First Stand 2026 winners. For TES, the second LPL seed, meeting G2 straight out of the gate is a major challenge in a bracket that allows no easy paths." }],
      },
      {
        type: 'h2',
        children: [{ text: "Bilibili Gaming vs Play-In Winner: July 3 Opener" }],
      },
      {
        type: 'p',
        children: [{ text: "The Bracket Stage kicks off on July 3 at 12:00 KST with Bilibili Gaming facing the Play-In survivor. BLG, the LPL champion and top seed of the entire tournament, will open against whichever team emerges from the Play-In bracket among T1 (LCK), Team Liquid Alienware (LCS), Karmine Corp (LEC), and Deep Cross Gaming (LPL)." }],
      },
      {
        type: 'h2',
        children: [{ text: "The Seven Direct Qualifiers and Bracket Format" }],
      },
      {
        type: 'p',
        children: [{ text: "The seven teams with direct Bracket Stage entry are organized into four seeding pools: Pool 1 — Bilibili Gaming (LPL1) and G2 Esports (LEC1); Pool 2 — Hanwha Life Esports (LCK1) and LYON (LCS1); Pool 3 — Team Secret Whales (LCP1) and FURIA (CBLOL1); Pool 4 — Top Esports (LPL2) and the Play-In winner. Every match is a best-of-five series played under Fearless Draft rules." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "MSI 2026 Bracket Stage runs from July 3 to July 12 at the Daejeon Convention Center, South Korea, in a double-elimination BO5 Fearless format. The Grand Final is scheduled for July 12." }],
      },
    ],
  },
  {
    title: "MSI 2026: G2 Esports vs TES abre el Bracket Stage — el cuadro completo revelado",
    slug: 'msi2026-bracket-stage-preview-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "El sorteo del Bracket Stage del MSI 2026 está definido: G2 Esports (LEC) se enfrenta a Top Esports (LPL) el 4 de julio, mientras Bilibili Gaming espera al ganador del Play-In el 3 de julio. Siete equipos clasificados directamente más un superviviente del Play-In lucharán por el título mundial en Daejeon del 3 al 12 de julio.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026',
    tags: [{ tag: 'LoL' }, { tag: 'MSI' }, { tag: 'Internacional' }, { tag: 'G2 Esports' }, { tag: 'Esports' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Con el Play-In del MSI 2026 en marcha en Daejeon desde el 28 de junio, el sorteo del Bracket Stage ha sido revelado oficialmente. Siete equipos acceden directamente a la fase principal, a los que se sumará un superviviente del doble eliminación del Play-In. El Bracket Stage se disputa del 3 al 12 de julio en el Daejeon Convention Center, Corea del Sur." }],
      },
      {
        type: 'h2',
        children: [{ text: "G2 Esports vs Top Esports: el gran choque de apertura" }],
      },
      {
        type: 'p',
        children: [{ text: "El enfrentamiento más esperado del primer turno enfrenta a G2 Esports (LEC, Pool 1) contra Top Esports (LPL, Pool 4) en el Upper Bracket Round 1 el 4 de julio a las 17:00 KST. Las reglas del sorteo impiden que equipos de la misma región se crucen en la primera ronda, por lo que TES no puede enfrentarse a Bilibili Gaming — de ahí este cruce LEC/LPL como partido estelar de la jornada inaugural." }],
      },
      {
        type: 'p',
        children: [{ text: "G2 Esports llega como campeón de la LEC y cabeza de serie del Pool 1 junto a Bilibili Gaming, campeón LPL y ganador del First Stand 2026. Para TES, segundo seed de la LPL, enfrentarse a G2 desde el inicio es un gran desafío en un cuadro donde no hay rivales sencillos." }],
      },
      {
        type: 'h2',
        children: [{ text: "Bilibili Gaming vs ganador del Play-In: el 3 de julio" }],
      },
      {
        type: 'p',
        children: [{ text: "El Bracket Stage arranca el 3 de julio a las 12:00 KST con Bilibili Gaming frente al superviviente del Play-In. BLG, campeón de la LPL y primera cabeza de serie del torneo, abrirá ante el equipo que supere el bracket del Play-In entre T1 (LCK), Team Liquid Alienware (LCS), Karmine Corp (LEC) y Deep Cross Gaming (LPL)." }],
      },
      {
        type: 'h2',
        children: [{ text: "Los siete clasificados directos y el formato del Bracket" }],
      },
      {
        type: 'p',
        children: [{ text: "Los siete equipos clasificados directamente al Bracket Stage se organizan en cuatro grupos de siembra: Pool 1 — Bilibili Gaming (LPL1) y G2 Esports (LEC1); Pool 2 — Hanwha Life Esports (LCK1) y LYON (LCS1); Pool 3 — Team Secret Whales (LCP1) y FURIA (CBLOL1); Pool 4 — Top Esports (LPL2) y el ganador del Play-In. Todos los encuentros son al mejor de cinco con Fearless Draft." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "El Bracket Stage del MSI 2026 se disputará del 3 al 12 de julio en el Daejeon Convention Center, Corea del Sur, en formato doble eliminación BO5 Fearless. La gran final está prevista para el 12 de julio." }],
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
