import type { MigrationModule } from './runner'

export const id = '139-international-msi2026-bracket-stage-draw'
export const description = 'MSI 2026 — Le Bracket Stage démarre le 3 juillet : les quatre affiches dévoilées (T1-BLG, G2-TES, FURIA-LYON, HLE-TSW)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-07-03T08:00:00.000Z'

const articles = [
  {
    title: "MSI 2026 : le Bracket Stage s'ouvre ce 3 juillet, T1 défie BLG dans un remake de la finale 2025",
    slug: 'msi2026-bracket-stage-draw-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Le Bracket Stage du MSI 2026 débute ce 3 juillet au Daejeon Convention Center. Huit équipes s'affrontent en élimination directe, avec en ouverture un remake de la finale 2025 entre T1 et Bilibili Gaming, avant la grande finale prévue le 12 juillet.",
    sourceUrl: 'https://lolesports.com/en-US/tournament/115570934354631452/stage/115570934355090205',
    tags: [{ tag: 'MSI 2026' }, { tag: 'T1' }, { tag: 'Bilibili Gaming' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "Le Bracket Stage du MSI 2026 débute ce vendredi 3 juillet au Daejeon Convention Center, en Corée du Sud. Huit équipes s'affrontent désormais en élimination directe pour désigner le champion du tournoi international, avec une grande finale programmée le 12 juillet." }] },
      { type: 'h2', children: [{ text: "Un tirage au sort par poules de performance" }] },
      { type: 'p', children: [{ text: "Le tirage a réparti les huit qualifiés en quatre poules selon leurs résultats au First Stand. La poule 1 regroupe les champions de printemps des deux régions finalistes du First Stand, Bilibili Gaming (LPL) et G2 Esports (LEC). La poule 2 réunit LYON et Hanwha Life Esports, tandis que la poule 3 associe FURIA et Team Secret Whales. La poule 4 complète le tableau avec Top Esports et T1, seule équipe issue du Play-In." }] },
      { type: 'h2', children: [{ text: "T1 ouvre le bal face à Bilibili Gaming" }] },
      { type: 'p', children: [{ text: "La première affiche du Bracket Stage voit T1 défier Bilibili Gaming (BLG), dans un remake de la finale du MSI 2025 que les Coréens avaient remportée 3-0. Trois autres duels complètent ce premier tour : G2 Esports affronte Top Esports dans une revanche des quarts de finale du Mondial 2025, FURIA (championne du CBLOL) rencontre LYON, première tête de série de la LCS, et Hanwha Life Esports, tombeur du Road to MSI et néophyte à ce tournoi, croise Team Secret Whales, dominateur de la LCP cette saison." }] },
      { type: 'blockquote', children: [{ text: "Huit équipes, quatre continents, un seul titre : le Bracket Stage du MSI 2026 promet une phase à élimination directe sans répit jusqu'à la finale du 12 juillet." }] },
    ],
  },
  {
    title: "MSI 2026: Bracket Stage Kicks Off July 3, T1 to Face BLG in a Rematch of the 2025 Final",
    slug: 'msi2026-bracket-stage-draw-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "The MSI 2026 Bracket Stage begins on July 3 at the Daejeon Convention Center. Eight teams enter single-elimination play, opening with a rematch of the 2025 final between T1 and Bilibili Gaming, ahead of the Grand Final on July 12.",
    sourceUrl: 'https://lolesports.com/en-US/tournament/115570934354631452/stage/115570934355090205',
    tags: [{ tag: 'MSI 2026' }, { tag: 'T1' }, { tag: 'Bilibili Gaming' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "The MSI 2026 Bracket Stage begins this Friday, July 3, at the Daejeon Convention Center in South Korea. Eight teams now enter single-elimination play to determine the champion of the international tournament, with the Grand Final set for July 12." }] },
      { type: 'h2', children: [{ text: "A performance-based pool draw" }] },
      { type: 'p', children: [{ text: "The draw split the eight qualified teams into four pools based on their First Stand results. Pool 1 holds the Spring champions of the two First Stand finalist regions, Bilibili Gaming (LPL) and G2 Esports (LEC). Pool 2 pairs LYON and Hanwha Life Esports, while Pool 3 groups FURIA and Team Secret Whales. Pool 4 rounds things out with Top Esports and T1, the tournament's sole Play-In qualifier." }] },
      { type: 'h2', children: [{ text: "T1 opens against Bilibili Gaming" }] },
      { type: 'p', children: [{ text: "The Bracket Stage's opening match pits T1 against Bilibili Gaming (BLG), a rematch of the MSI 2025 final, which the Koreans won 3-0. Three other first-round series round out the draw: G2 Esports faces Top Esports in a rematch of their Worlds 2025 quarterfinal, CBLOL champion FURIA meets LYON, the LCS' first seed, and Road to MSI winner Hanwha Life Esports — making its tournament debut — takes on Team Secret Whales, this season's dominant LCP side." }] },
      { type: 'blockquote', children: [{ text: "Eight teams, four continents, one title: the MSI 2026 Bracket Stage promises a relentless knockout run through to the July 12 Grand Final." }] },
    ],
  },
  {
    title: "MSI 2026: el Bracket Stage arranca el 3 de julio, T1 se mide a BLG en una revancha de la final de 2025",
    slug: 'msi2026-bracket-stage-draw-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "El Bracket Stage del MSI 2026 comienza el 3 de julio en el Daejeon Convention Center. Ocho equipos entran en eliminación directa, con una revancha de la final de 2025 entre T1 y Bilibili Gaming como choque inaugural, antes de la gran final del 12 de julio.",
    sourceUrl: 'https://lolesports.com/en-US/tournament/115570934354631452/stage/115570934355090205',
    tags: [{ tag: 'MSI 2026' }, { tag: 'T1' }, { tag: 'Bilibili Gaming' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "El Bracket Stage del MSI 2026 arranca este viernes 3 de julio en el Daejeon Convention Center, Corea del Sur. Ocho equipos entran ahora en eliminación directa para definir al campeón del torneo internacional, con la gran final programada para el 12 de julio." }] },
      { type: 'h2', children: [{ text: "Un sorteo por bombos según el rendimiento" }] },
      { type: 'p', children: [{ text: "El sorteo repartió a los ocho clasificados en cuatro bombos según sus resultados en el First Stand. El bombo 1 reúne a los campeones de primavera de las dos regiones finalistas del First Stand, Bilibili Gaming (LPL) y G2 Esports (LEC). El bombo 2 junta a LYON y Hanwha Life Esports, mientras que el bombo 3 agrupa a FURIA y Team Secret Whales. El bombo 4 completa el cuadro con Top Esports y T1, único equipo procedente del Play-In." }] },
      { type: 'h2', children: [{ text: "T1 abre el torneo ante Bilibili Gaming" }] },
      { type: 'p', children: [{ text: "El primer duelo del Bracket Stage enfrenta a T1 con Bilibili Gaming (BLG), una revancha de la final del MSI 2025 que los coreanos ganaron 3-0. Otras tres series completan la primera ronda: G2 Esports se mide a Top Esports en una revancha de los cuartos de final del Mundial 2025, la campeona del CBLOL FURIA se enfrenta a LYON, primera cabeza de serie de la LCS, y Hanwha Life Esports, ganador del Road to MSI y debutante en el torneo, choca con Team Secret Whales, dominador de la LCP esta temporada." }] },
      { type: 'blockquote', children: [{ text: "Ocho equipos, cuatro continentes, un solo título: el Bracket Stage del MSI 2026 promete una fase eliminatoria sin tregua hasta la gran final del 12 de julio." }] },
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
