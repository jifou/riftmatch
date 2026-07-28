import type { MigrationModule } from './runner'

export const id = '152-autres-regions-cblol-split2-2026-round1-results'
export const description = "Autres Régions — CBLOL Split 2 2026 : LOUD renverse paiN, LOS surprend la FURIA en ouverture"

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-07-28T08:00:00.000Z'

const articles = [
  {
    title: "CBLOL Split 2 2026 : la LOUD renverse paiN Gaming, la LOS surprend la FURIA en ouverture",
    slug: 'cblol-split2-2026-round1-loud-los-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Le CBLOL Split 2 2026 a démarré le 25 juillet à l'Arena Riot Games de São Paulo. Premiere journée marquée par deux revanches des finales du Split 1 : LOUD a renversé paiN Gaming et la LOS a surpris la FURIA, tenante du titre.",
    sourceUrl: 'https://lolesports.com/pt-BR/leagues/cblol-brazil',
    tags: [{ tag: 'CBLOL' }, { tag: 'LoL' }, { tag: 'Esports' }, { tag: 'LOUD' }],
    content: [
      { type: 'p', children: [{ text: "Le CBLOL Split 2 2026 a débuté le 25 juillet à l'Arena Riot Games de São Paulo, avec une première journée disputée en intégralité en LAN et marquée par deux revanches directes des finales du Split 1." }] },
      { type: 'h2', children: [{ text: "LOUD renverse paiN Gaming au terme d'un classique" }] },
      { type: 'p', children: [{ text: "LOUD s'est imposée 2-1 face à paiN Gaming le 25 juillet, après avoir concédé la première manche. Le duo Kaze - meilleur artificier de la rencontre avec 16 kills - et Rabelo, dominant en lane avec 878 CS, a permis à la franchise de renverser la série. Un succès qui lance idéalement le Split 2 pour la jeune formation de LOUD." }] },
      { type: 'h2', children: [{ text: "La LOS surprend la FURIA, tenante du titre" }] },
      { type: 'p', children: [{ text: "La LOS a dominé la FURIA 2-0 dès l'ouverture du split, un résultat qui prend sa revanche sur la finale du Split 1 remportée 2-1 par la FURIA quelques mois plus tôt. Une entame parfaite pour la LOS, qui n'a laissé aucune ouverture à son adversaire sur les deux manches." }] },
      { type: 'h2', children: [{ text: "Vivo Keyd Stars et Fluxo W7M complètent la première journée" }] },
      { type: 'p', children: [{ text: "Le 26 juillet, Vivo Keyd Stars a pris sa revanche sur RED Canids en s'imposant 2-1, portée par un Lee Sin très actif de son joueur Disamis en début de partie. Fluxo W7M a de son côté validé sa série face à Leviatán, bouclant une première journée équilibrée avant la suite du calendrier du Split 2." }] },
      { type: 'blockquote', children: [{ text: "Deux revanches des finales du Split 1 en guise d'ouverture : le CBLOL Split 2 2026 démarre sur les chapeaux de roue." }] },
    ],
  },
  {
    title: "CBLOL Split 2 2026: LOUD comes back to beat paiN Gaming, LOS stuns defending champions FURIA",
    slug: 'cblol-split2-2026-round1-loud-los-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "CBLOL Split 2 2026 kicked off on July 25 at the Riot Games Arena in São Paulo. Opening week featured two direct rematches of the Split 1 finals: LOUD came back to beat paiN Gaming, and LOS stunned defending champions FURIA.",
    sourceUrl: 'https://lolesports.com/pt-BR/leagues/cblol-brazil',
    tags: [{ tag: 'CBLOL' }, { tag: 'LoL' }, { tag: 'Esports' }, { tag: 'LOUD' }],
    content: [
      { type: 'p', children: [{ text: "CBLOL Split 2 2026 got underway on July 25 at the Riot Games Arena in São Paulo, with an opening round played entirely on LAN and featuring two direct rematches of the Split 1 finals." }] },
      { type: 'h2', children: [{ text: "LOUD comes back to beat paiN Gaming in a classic derby" }] },
      { type: 'p', children: [{ text: "LOUD defeated paiN Gaming 2-1 on July 25 after dropping the opening game. The duo of Kaze - the match's top fragger with 16 kills - and Rabelo, who dominated his lane with 878 CS, powered the comeback. A strong result that gives LOUD's young roster an ideal start to the Split." }] },
      { type: 'h2', children: [{ text: "LOS stuns defending champions FURIA" }] },
      { type: 'p', children: [{ text: "LOS swept FURIA 2-0 in the split opener, avenging the Split 1 final that FURIA had won 2-1 just months earlier. A flawless start for LOS, who gave their opponent no openings across either game." }] },
      { type: 'h2', children: [{ text: "Vivo Keyd Stars and Fluxo W7M round out the opening round" }] },
      { type: 'p', children: [{ text: "On July 26, Vivo Keyd Stars avenged their own Split 1 final loss by defeating RED Canids 2-1, powered by an aggressive early-game Lee Sin from Disamis. Fluxo W7M, for their part, closed out their series against Leviatán, capping off a balanced opening round ahead of the rest of the Split 2 schedule." }] },
      { type: 'blockquote', children: [{ text: "Two Split 1 final rematches to open the split: CBLOL Split 2 2026 starts with a bang." }] },
    ],
  },
  {
    title: "CBLOL Split 2 2026: LOUD remonta y vence a paiN Gaming, LOS sorprende a la campeona FURIA",
    slug: 'cblol-split2-2026-round1-loud-los-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "El CBLOL Split 2 2026 arrancó el 25 de julio en el Riot Games Arena de São Paulo. La primera jornada trajo dos revanchas directas de las finales del Split 1: LOUD remontó ante paiN Gaming y LOS sorprendió a la campeona FURIA.",
    sourceUrl: 'https://lolesports.com/pt-BR/leagues/cblol-brazil',
    tags: [{ tag: 'CBLOL' }, { tag: 'LoL' }, { tag: 'Esports' }, { tag: 'LOUD' }],
    content: [
      { type: 'p', children: [{ text: "El CBLOL Split 2 2026 comenzó el 25 de julio en el Riot Games Arena de São Paulo, con una primera jornada disputada íntegramente en formato LAN y marcada por dos revanchas directas de las finales del Split 1." }] },
      { type: 'h2', children: [{ text: "LOUD remonta y vence a paiN Gaming en un clásico" }] },
      { type: 'p', children: [{ text: "LOUD se impuso 2-1 ante paiN Gaming el 25 de julio, tras haber perdido la primera partida. El dúo formado por Kaze -el mejor artillero del encuentro con 16 asesinatos- y Rabelo, dominante en su carril con 878 de CS, permitió a la franquicia dar vuelta la serie. Un triunfo que arranca de la mejor manera el Split 2 para la joven plantilla de LOUD." }] },
      { type: 'h2', children: [{ text: "LOS sorprende a la campeona vigente FURIA" }] },
      { type: 'p', children: [{ text: "LOS dominó 2-0 a FURIA en la apertura del split, un resultado que vengó la final del Split 1, ganada 2-1 por FURIA apenas unos meses antes. Un comienzo perfecto para LOS, que no dio ninguna oportunidad a su rival en ninguna de las dos partidas." }] },
      { type: 'h2', children: [{ text: "Vivo Keyd Stars y Fluxo W7M completan la primera jornada" }] },
      { type: 'p', children: [{ text: "El 26 de julio, Vivo Keyd Stars se tomó revancha ante RED Canids al imponerse 2-1, impulsado por un Lee Sin muy activo de su jugador Disamis en el inicio de la partida. Por su parte, Fluxo W7M cerró su serie ante Leviatán, completando una primera jornada pareja antes de que continúe el calendario del Split 2." }] },
      { type: 'blockquote', children: [{ text: "Dos revanchas de las finales del Split 1 como apertura: el CBLOL Split 2 2026 arranca con fuerza." }] },
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
