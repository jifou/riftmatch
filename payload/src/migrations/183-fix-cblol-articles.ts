import type { MigrationModule } from './runner'

export const id = '183-fix-cblol-articles'
export const description = 'Correction CBLOL — standings Split 2 réels (LOUD 1er, playoffs TBD, suppression R7 inexistant)'

export const up: MigrationModule['up'] = async (payload) => {
  const updates: { slug: string; data: Record<string, unknown> }[] = [
    // 163 — cblol-split2-2026-pain-loud-week3 : standings réels Split 2, LOUD leader
    {
      slug: 'cblol-split2-2026-pain-loud-week3-fr',
      data: {
        title: "CBLOL Split 2 2026 : LOUD en tête (6-1) devant LØS, FURIA et VKS en embuscade",
        excerpt: "LOUD domine le CBLOL Split 2 2026 avec un bilan de 6-1, à égalité avec LØS. FURIA et Vivo Keyd Stars suivent en 3e et 4e position. Les playoffs s'annoncent très ouverts.",
        content: [
          { type: 'p', children: [{ text: "La saison régulière du CBLOL Split 2 2026 touche à sa fin et LOUD s'est affirmé comme l'une des deux meilleures équipes du Brésil. Avec un bilan de 6-1, les champions du CBLOL Cup 2026 partagent la 1ère place avec LØS (6-1 également)." }] },
          { type: 'h2', children: [{ text: "LOUD et LØS co-leaders" }] },
          { type: 'p', children: [{ text: "LOUD et LØS terminent à égalité en tête de la saison régulière et bénéficieront toutes deux d'un bye au Round 2 des playoffs, entrant directement dans le bracket principal. Leur tête-à-tête lors des playoffs sera très attendu par les fans brésiliens." }] },
          { type: 'h2', children: [{ text: "FURIA et VKS en embuscade" }] },
          { type: 'p', children: [{ text: "FURIA (4e, 5-2) et Vivo Keyd Stars (3e, 5-2) complètent le top 4 et participeront également aux playoffs. paiN Gaming (2-5) et Fluxo W7M (1-6) ont eu une saison difficile. Les playoffs CBLOL Split 2 détermineront le ou les représentants brésiliens aux Worlds 2026." }] },
        ],
        tags: [{ tag: 'CBLOL' }, { tag: 'LOUD' }, { tag: 'LØS' }, { tag: 'FURIA' }, { tag: 'Split 2' }],
      },
    },
    {
      slug: 'cblol-split2-2026-pain-loud-week3-en',
      data: {
        title: "CBLOL Split 2 2026: LOUD lead (6-1) alongside LØS, FURIA and VKS close behind",
        excerpt: "LOUD top the CBLOL Split 2 2026 standings at 6-1, tied with LØS. FURIA and Vivo Keyd Stars sit third and fourth. The playoffs look wide open.",
        content: [
          { type: 'p', children: [{ text: "The CBLOL Split 2 2026 regular season is nearing its end and LOUD have emerged as one of Brazil's two best teams. At 6-1, the CBLOL Cup 2026 champions share first place with LØS (also 6-1)." }] },
          { type: 'h2', children: [{ text: "LOUD and LØS co-leaders" }] },
          { type: 'p', children: [{ text: "LOUD and LØS tie at the top of the regular season, earning both squads a Round 2 bye in the playoffs — they enter the main bracket directly. Their potential playoff meeting has fans buzzing ahead of the Split 2 playoffs." }] },
          { type: 'h2', children: [{ text: "FURIA and VKS in pursuit" }] },
          { type: 'p', children: [{ text: "FURIA (4th, 5-2) and Vivo Keyd Stars (3rd, 5-2) also qualify for the playoffs. paiN Gaming (2-5) and Fluxo W7M (1-6) had difficult regular seasons. The CBLOL Split 2 playoffs will determine Brazil's Worlds 2026 representative(s)." }] },
        ],
        tags: [{ tag: 'CBLOL' }, { tag: 'LOUD' }, { tag: 'LØS' }, { tag: 'FURIA' }, { tag: 'Split 2' }],
      },
    },
    {
      slug: 'cblol-split2-2026-pain-loud-week3-es',
      data: {
        title: "CBLOL Split 2 2026: LOUD lidera (6-1) junto a LØS, FURIA y VKS al acecho",
        excerpt: "LOUD encabeza el CBLOL Split 2 2026 con un balance de 6-1, empatado con LØS. FURIA y Vivo Keyd Stars ocupan el tercer y cuarto puesto. Los playoffs se perfilan muy abiertos.",
        content: [
          { type: 'p', children: [{ text: "La fase regular del CBLOL Split 2 2026 llega a su fin y LOUD se ha consolidado como uno de los dos mejores equipos de Brasil. Con un balance de 6-1, los campeones de la CBLOL Cup 2026 comparten el primer puesto con LØS (también 6-1)." }] },
          { type: 'h2', children: [{ text: "LOUD y LØS co-líderes" }] },
          { type: 'p', children: [{ text: "LOUD y LØS terminan igualadas en lo alto de la fase regular y ambas tienen bye en la segunda ronda de los playoffs, entrando directamente en el cuadro principal. Un posible enfrentamiento entre ellas en playoffs es uno de los más esperados por los fans brasileños." }] },
          { type: 'h2', children: [{ text: "FURIA y VKS al acecho" }] },
          { type: 'p', children: [{ text: "FURIA (4a, 5-2) y Vivo Keyd Stars (3a, 5-2) también están clasificadas para los playoffs. paiN Gaming (2-5) y Fluxo W7M (1-6) tuvieron una fase regular difícil. Los playoffs del CBLOL Split 2 determinarán el o los representantes brasileños en los Worlds 2026." }] },
        ],
        tags: [{ tag: 'CBLOL' }, { tag: 'LOUD' }, { tag: 'LØS' }, { tag: 'FURIA' }, { tag: 'Split 2' }],
      },
    },

    // 177 — cblol-split2-2026-semifinals : playoffs pas encore joués, LOUD et LØS ont un bye (pas demi-finales)
    {
      slug: 'cblol-split2-2026-semifinals-fr',
      data: {
        title: "CBLOL Split 2 2026 : LOUD et LØS favoris avec bye en R2, playoffs imminents",
        excerpt: "LOUD (1er, 6-1) et LØS (2e, 6-1) débutent les playoffs du CBLOL Split 2 directement en Round 2 grâce à leur bye de tête de série. FURIA affrontera RED Canids en Round 1.",
        content: [
          { type: 'p', children: [{ text: "Les playoffs du CBLOL Split 2 2026 sont sur le point de débuter. LOUD et LØS, co-leaders de la phase régulière (6-1 chacune), profitent d'un bye et entrent directement en Round 2. Deux places aux Worlds 2026 sont en jeu pour le Brésil." }] },
          { type: 'h2', children: [{ text: "LOUD et LØS, favoris du bracket" }] },
          { type: 'p', children: [{ text: "Terminer 1er et 2e de la saison régulière offre un avantage considérable à LOUD et LØS. Ces deux équipes évitent le Round 1 et attendent leurs adversaires en Round 2, bien reposées. Un choc LOUD vs LØS en finale reste le scénario le plus probable selon les observateurs." }] },
          { type: 'h2', children: [{ text: "FURIA et VKS en Round 1" }] },
          { type: 'p', children: [{ text: "FURIA (4e) affronte RED Canids et Vivo Keyd Stars (3e) joue contre paiN Gaming en Round 1. Les vainqueurs de ces séries rejoindront LOUD et LØS en Round 2. Les playoffs CBLOL Split 2 promettent un esport brésilien au sommet de son intensité." }] },
        ],
        tags: [{ tag: 'CBLOL' }, { tag: 'LOUD' }, { tag: 'LØS' }, { tag: 'FURIA' }, { tag: 'Playoffs' }, { tag: 'Worlds 2026' }],
      },
    },
    {
      slug: 'cblol-split2-2026-semifinals-en',
      data: {
        title: "CBLOL Split 2 2026: LOUD and LØS enter playoffs as favourites with Round 2 byes",
        excerpt: "LOUD (1st, 6-1) and LØS (2nd, 6-1) enter the CBLOL Split 2 2026 playoffs directly in Round 2. FURIA face RED Canids in Round 1. Two Worlds 2026 spots are on the line for Brazil.",
        content: [
          { type: 'p', children: [{ text: "The CBLOL Split 2 2026 playoffs are about to begin. Co-leaders LOUD and LØS (both 6-1) earn Round 2 byes as the top two seeds. Brazil's two Worlds 2026 spots are at stake." }] },
          { type: 'h2', children: [{ text: "LOUD and LØS, the bracket favourites" }] },
          { type: 'p', children: [{ text: "Finishing first and second gives LOUD and LØS a massive head start. Both teams skip Round 1 and rest while opponents battle for a place in Round 2. A LOUD vs LØS Grand Final is seen as the most likely scenario, and it would be a rematch of two of Brazil's fiercest rivals." }] },
          { type: 'h2', children: [{ text: "FURIA and VKS in Round 1" }] },
          { type: 'p', children: [{ text: "FURIA (4th) takes on RED Canids and Vivo Keyd Stars (3rd) faces paiN Gaming in Round 1. The winners advance to Round 2 to face LOUD and LØS. The CBLOL Split 2 playoffs promise Brazilian esports at its most intense." }] },
        ],
        tags: [{ tag: 'CBLOL' }, { tag: 'LOUD' }, { tag: 'LØS' }, { tag: 'FURIA' }, { tag: 'Playoffs' }, { tag: 'Worlds 2026' }],
      },
    },
    {
      slug: 'cblol-split2-2026-semifinals-es',
      data: {
        title: "CBLOL Split 2 2026: LOUD y LØS llegan a los playoffs como favoritas con bye en R2",
        excerpt: "LOUD (1a, 6-1) y LØS (2a, 6-1) entran en los playoffs del CBLOL Split 2 directamente en la segunda ronda. FURIA se enfrenta a RED Canids en la primera. Dos plazas para los Worlds 2026 están en juego.",
        content: [
          { type: 'p', children: [{ text: "Los playoffs del CBLOL Split 2 2026 están a punto de comenzar. LOUD y LØS, co-líderes de la fase regular (6-1 cada una), tienen bye en la primera ronda y entran directamente en la segunda. Dos plazas para los Worlds 2026 en juego para Brasil." }] },
          { type: 'h2', children: [{ text: "LOUD y LØS, favoritas del cuadro" }] },
          { type: 'p', children: [{ text: "Terminar primera y segunda da a LOUD y LØS una ventaja enorme. Ambas evitan la primera ronda y esperan a sus rivales descansadas en la segunda. Un choque LOUD vs LØS en la gran final es el escenario más esperado por los aficionados brasileños." }] },
          { type: 'h2', children: [{ text: "FURIA y VKS en primera ronda" }] },
          { type: 'p', children: [{ text: "FURIA (4a) se enfrenta a RED Canids y Vivo Keyd Stars (3a) juega contra paiN Gaming en la primera ronda. Los ganadores avanzan a la segunda ronda para enfrentarse a LOUD y LØS. Los playoffs del CBLOL Split 2 prometen un esport brasileño en su máxima intensidad." }] },
        ],
        tags: [{ tag: 'CBLOL' }, { tag: 'LOUD' }, { tag: 'LØS' }, { tag: 'FURIA' }, { tag: 'Playoffs' }, { tag: 'Worlds 2026' }],
      },
    },
  ]

  for (const u of updates) {
    const ex = await payload.find({ collection: 'news', where: { slug: { equals: u.slug } } })
    if (ex.docs.length === 0) { console.log(`⚠️  Not found: ${u.slug}`); continue }
    await payload.update({ collection: 'news', id: ex.docs[0].id, data: u.data as any })
    console.log(`✅ Updated: ${u.slug}`)
  }
}
