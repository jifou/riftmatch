import type { MigrationModule } from './runner'

export const id = '181-fix-lpl-articles'
export const description = 'Correction LPL — Split 2 Finals BLG 3-0 TES (pas JDG), BLG qualifié Worlds, standings Split 2'

export const up: MigrationModule['up'] = async (payload) => {
  const updates: { slug: string; data: Record<string, unknown> }[] = [
    // 160 — lpl-summer-2026-blg-jdg : BLG vs JDG en Split 2 regular season, BLG dominant (12-2)
    {
      slug: 'lpl-summer-2026-blg-jdg-fr',
      data: {
        title: "LPL Split 2 2026 : BiliBili Gaming inarrêtable (12-2), JDG en difficulté",
        excerpt: "BiliBili Gaming domine la saison régulière du LPL Split 2 2026 avec un bilan de 12-2, loin devant la concurrence. JDG Gaming est 2e mais peine à suivre le rythme imposé par BLG.",
        content: [
          { type: 'p', children: [{ text: "BiliBili Gaming est sur une autre planète en LPL Split 2 2026. Avec 12 victoires pour seulement 2 défaites, la formation de Shanghai impose un rythme que personne n'arrive à suivre. BLG avait déjà remporté le Split 1 contre JDG Gaming (3-1 en finale), et confirme que leur domination n'est pas un accident." }] },
          { type: 'h2', children: [{ text: "JDG 2e, à distance" }] },
          { type: 'p', children: [{ text: "JDG Gaming est 2e avec un bilan de 9-5, mais la distance avec BLG est nette. JDG devra s'améliorer en playoffs pour espérer renverser des BLG qui paraissent inarrêtables. Top Esports (8-6) et Anyone's Legend (8-6) se disputent la 3e et 4e place." }] },
          { type: 'h2', children: [{ text: "BLG visent la domination totale" }] },
          { type: 'p', children: [{ text: "Gagner le Split 1 et dominer le Split 2 : BLG est en route pour réaliser un exploit rarissime dans l'histoire de la LPL. Leur cohésion collective et leur polyvalence tactique font d'eux les favoris absolus pour les Worlds 2026 aux États-Unis." }] },
        ],
        tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'JDG' }, { tag: 'Split 2' }],
      },
    },
    {
      slug: 'lpl-summer-2026-blg-jdg-en',
      data: {
        title: "LPL Split 2 2026: BiliBili Gaming unstoppable at 12-2, JDG struggling to keep pace",
        excerpt: "BiliBili Gaming dominate the LPL Split 2 2026 regular season at 12-2, far ahead of the field. JDG Gaming sit second but are struggling to match BLG's relentless pace.",
        content: [
          { type: 'p', children: [{ text: "BiliBili Gaming are in a league of their own in LPL Split 2 2026. A 12-2 record puts them comfortably clear of all competition. BLG already won the Split 1 title over JDG Gaming (3-1 in the finals) and are proving that their dominance is no fluke." }] },
          { type: 'h2', children: [{ text: "JDG 2nd, but distant" }] },
          { type: 'p', children: [{ text: "JDG Gaming sit second at 9-5, but the gap to BLG is significant. JDG will need to find another level in the playoffs to challenge a BLG squad that looks unstoppable. Top Esports (8-6) and Anyone's Legend (8-6) are fighting for third and fourth." }] },
          { type: 'h2', children: [{ text: "BLG chasing total LPL domination" }] },
          { type: 'p', children: [{ text: "Winning Split 1 and dominating Split 2 — BLG are chasing something rarely seen in LPL history. Their collective cohesion and tactical versatility make them the clear frontrunners for the Worlds 2026 title." }] },
        ],
        tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'JDG' }, { tag: 'Split 2' }],
      },
    },
    {
      slug: 'lpl-summer-2026-blg-jdg-es',
      data: {
        title: "LPL Split 2 2026: BiliBili Gaming imparable (12-2), JDG Gaming sin poder seguir el ritmo",
        excerpt: "BiliBili Gaming domina la fase regular del LPL Split 2 2026 con un balance de 12-2, muy por delante de sus rivales. JDG Gaming es segundo pero lucha por seguir el ritmo de BLG.",
        content: [
          { type: 'p', children: [{ text: "BiliBili Gaming está en otro nivel en la LPL Split 2 2026. Con 12 victorias y solo 2 derrotas, la escuadra de Shanghái impone un ritmo imposible de seguir. BLG ya ganó el Split 1 ante JDG Gaming (3-1 en la final) y confirman que su dominio no es casualidad." }] },
          { type: 'h2', children: [{ text: "JDG 2o, pero a distancia" }] },
          { type: 'p', children: [{ text: "JDG Gaming es segundo con un balance de 9-5, pero la distancia con BLG es considerable. JDG necesitará un nivel superior en playoffs para desafiar a un BLG que parece imparable. Top Esports (8-6) y Anyone's Legend (8-6) se disputan el tercero y cuarto puesto." }] },
          { type: 'h2', children: [{ text: "BLG busca la dominación total" }] },
          { type: 'p', children: [{ text: "Ganar el Split 1 y dominar el Split 2: BLG está a punto de lograr algo inusual en la historia de la LPL. Su cohesión colectiva y versatilidad táctica les convierten en los claros favoritos para los Worlds 2026." }] },
        ],
        tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'JDG' }, { tag: 'Split 2' }],
      },
    },

    // 165 — lpl-summer-2026-playoffs-bracket : vrai bracket Split 2, BLG via losers bracket
    {
      slug: 'lpl-summer-2026-playoffs-bracket-fr',
      data: {
        title: "LPL Split 2 Playoffs : BLG chute en R1 face à WE, remontée spectaculaire par le losers bracket",
        excerpt: "Surprise en Round 1 des LPL Split 2 Playoffs : BiliBili Gaming perd face à Team WE 1-3. La formation prend la voie du losers bracket et doit tout reconstruire pour atteindre la finale.",
        content: [
          { type: 'p', children: [{ text: "Le Round 1 des LPL Split 2 Playoffs a réservé une immense surprise : BiliBili Gaming, dominateurs de la saison régulière (12-2), s'est incliné 1-3 face à Team WE. La formation a dû repartir du losers bracket pour espérer se qualifier en finale." }] },
          { type: 'h2', children: [{ text: "Le winners bracket" }] },
          { type: 'p', children: [{ text: "Du côté du winners bracket, JDG Gaming bat Top Esports 3-1 au Round 1, avant de céder face à TES en Round 2 (1-3). TES s'impose comme le finaliste du winners bracket. Anyone's Legend et WE avancent également avant de croiser BLG en losers." }] },
          { type: 'h2', children: [{ text: "La remontée de BLG" }] },
          { type: 'p', children: [{ text: "Depuis le losers bracket, BLG a enchaîné les victoires : contre EDG (3-0), puis JDG (3-1 en R2), puis Anyone's Legend (3-0 en R3) et enfin WE (3-2 en R4). BLG se retrouve en finale face à Top Esports, qu'ils balayent 3-0 pour décrocher leur deuxième titre LPL consécutif." }] },
        ],
        tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'Top Esports' }, { tag: 'Playoffs' }, { tag: 'Split 2' }],
      },
    },
    {
      slug: 'lpl-summer-2026-playoffs-bracket-en',
      data: {
        title: "LPL Split 2 Playoffs: BLG fall in Round 1 to WE, mount stunning losers bracket run",
        excerpt: "Huge upset in LPL Split 2 Playoffs Round 1: BiliBili Gaming falls to Team WE 1-3. BLG must navigate the losers bracket to reach the finals — and they pull it off.",
        content: [
          { type: 'p', children: [{ text: "Round 1 of the LPL Split 2 Playoffs delivered a massive shock: BiliBili Gaming, who dominated the regular season at 12-2, fell 1-3 to Team WE. BLG were forced into the losers bracket and had to win every remaining series to make the finals." }] },
          { type: 'h2', children: [{ text: "Winners bracket route" }] },
          { type: 'p', children: [{ text: "In the winners bracket, JDG Gaming beat Top Esports 3-1 in Round 1 before falling to TES in Round 2 (1-3). Top Esports advance through the winners side to reach the Grand Final. Anyone's Legend and WE also had solid runs before running into BLG in the losers bracket." }] },
          { type: 'h2', children: [{ text: "BLG's incredible run" }] },
          { type: 'p', children: [{ text: "BLG fought back through the losers bracket, defeating EDG (3-0), JDG (3-1), Anyone's Legend (3-0), and WE (3-2) in succession. BLG reached the Grand Final against Top Esports and swept them 3-0 to claim back-to-back LPL titles." }] },
        ],
        tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'Top Esports' }, { tag: 'Playoffs' }, { tag: 'Split 2' }],
      },
    },
    {
      slug: 'lpl-summer-2026-playoffs-bracket-es',
      data: {
        title: "LPL Split 2 Playoffs: BLG cae en R1 ante WE y protagoniza una remontada épica por el losers bracket",
        excerpt: "Gran sorpresa en los LPL Split 2 Playoffs: BiliBili Gaming cae ante Team WE (1-3). El equipo remonta por el losers bracket y llega a la gran final.",
        content: [
          { type: 'p', children: [{ text: "La primera ronda de los LPL Split 2 Playoffs nos dejó una gran sorpresa: BiliBili Gaming, dominadores de la fase regular (12-2), cayeron 1-3 ante Team WE. BLG tuvo que remontar desde el losers bracket para llegar a la final." }] },
          { type: 'h2', children: [{ text: "El camino del winners bracket" }] },
          { type: 'p', children: [{ text: "En el winners bracket, JDG Gaming superó a Top Esports 3-1 en la primera ronda, pero cayó ante TES en la segunda (1-3). Top Esports avanzó por el lado ganador hasta la gran final." }] },
          { type: 'h2', children: [{ text: "La remontada de BLG" }] },
          { type: 'p', children: [{ text: "Desde el losers bracket, BLG encadenó victorias ante EDG (3-0), JDG (3-1), Anyone's Legend (3-0) y WE (3-2). BLG llegó a la gran final frente a Top Esports y los barrió 3-0 para conquistar el segundo título LPL consecutivo." }] },
        ],
        tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'Top Esports' }, { tag: 'Playoffs' }, { tag: 'Split 2' }],
      },
    },

    // 171 — lpl-summer-2026-blg-jdg-worlds : BLG qualifié Worlds (Split 2 winner, battu TES pas JDG)
    {
      slug: 'lpl-summer-2026-blg-jdg-worlds-fr',
      data: {
        title: "LPL Split 2 : BiliBili Gaming champion en battant Top Esports 3-0, qualifié pour les Worlds",
        excerpt: "BiliBili Gaming remporte le LPL Split 2 en dominant Top Esports 3-0 en finale, après une remontée spectaculaire depuis le losers bracket. BLG est le premier représentant chinois officiellement qualifié pour les Worlds 2026.",
        content: [
          { type: 'p', children: [{ text: "BiliBili Gaming est le champion du LPL Split 2 2026. Après une remontée épique depuis le losers bracket (suite à une défaite surprise en R1 contre WE), BLG a balayé Top Esports 3-0 en grande finale et décroche son second titre LPL consécutif." }] },
          { type: 'h2', children: [{ text: "BLG qualifié pour les Worlds 2026" }] },
          { type: 'p', children: [{ text: "Avec cette victoire, BiliBili Gaming est officiellement qualifié pour les Worlds 2026 aux États-Unis (15 oct – 14 nov) en tant que Seed 2 de la LCN Chine. HLE (champion MSI 2026) est également qualifié. Le titre mondial est désormais l'objectif de la saison pour BLG." }] },
          { type: 'h2', children: [{ text: "La machine BLG" }] },
          { type: 'p', children: [{ text: "En remportant le Split 1 (contre JDG 3-1) puis le Split 2 (contre TES 3-0), BLG réalise une domination totale de la scène LPL en 2026. Leur capacité à rebondir en losers bracket et leur régularité sur toute la saison les placent comme sérieux prétendants au titre mondial." }] },
        ],
        tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'Top Esports' }, { tag: 'Worlds 2026' }],
      },
    },
    {
      slug: 'lpl-summer-2026-blg-jdg-worlds-en',
      data: {
        title: "LPL Split 2: BiliBili Gaming champion after sweeping Top Esports 3-0, Worlds-bound",
        excerpt: "BiliBili Gaming win LPL Split 2 with a dominant 3-0 over Top Esports in the Grand Final, completing a stunning losers bracket run. BLG are confirmed as China's first Worlds 2026 representative.",
        content: [
          { type: 'p', children: [{ text: "BiliBili Gaming are LPL Split 2 2026 champions. After a dramatic losers bracket run — sparked by a shocking Round 1 loss to Team WE — BLG swept Top Esports 3-0 in the Grand Final to claim their second consecutive LPL title." }] },
          { type: 'h2', children: [{ text: "BLG confirmed for Worlds 2026" }] },
          { type: 'p', children: [{ text: "With the Split 2 title, BiliBili Gaming are officially qualified for Worlds 2026 in the United States (Oct 15–Nov 14) as CN Seed 2. MSI 2026 champion Hanwha Life Esports is also confirmed. The world title is now the clear target for BLG." }] },
          { type: 'h2', children: [{ text: "BLG's total LPL dominance" }] },
          { type: 'p', children: [{ text: "Winning Split 1 (over JDG 3-1) and Split 2 (over TES 3-0) puts BLG in rarefied company in LPL history. Their resilience through the losers bracket and their consistency all season make them one of the most dangerous teams heading into Worlds." }] },
        ],
        tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'Top Esports' }, { tag: 'Worlds 2026' }],
      },
    },
    {
      slug: 'lpl-summer-2026-blg-jdg-worlds-es',
      data: {
        title: "LPL Split 2: BiliBili Gaming campeón al barrer a Top Esports 3-0, rumbo a los Worlds",
        excerpt: "BiliBili Gaming gana el LPL Split 2 con un contundente 3-0 sobre Top Esports en la gran final, tras una espectacular remontada por el losers bracket. BLG es el primer representante chino clasificado para los Worlds 2026.",
        content: [
          { type: 'p', children: [{ text: "BiliBili Gaming es el campeón del LPL Split 2 2026. Tras una épica remontada por el losers bracket — después de una sorprendente derrota en primera ronda ante Team WE — BLG barrió a Top Esports 3-0 en la gran final para conquistar su segundo título LPL consecutivo." }] },
          { type: 'h2', children: [{ text: "BLG confirmado para los Worlds 2026" }] },
          { type: 'p', children: [{ text: "Con este título, BiliBili Gaming queda oficialmente clasificado para los Worlds 2026 en Estados Unidos (15 oct – 14 nov) como CN Semilla 2. HLE (campeón del MSI 2026) también está confirmado. El título mundial es ahora el objetivo de BLG." }] },
          { type: 'h2', children: [{ text: "La dominación total de BLG en la LPL" }] },
          { type: 'p', children: [{ text: "Ganar el Split 1 (ante JDG 3-1) y el Split 2 (ante TES 3-0) sitúa a BLG en un nivel raramente visto en la LPL. Su resiliencia en el losers bracket y su regularidad a lo largo de la temporada les convierten en uno de los equipos más peligrosos de cara a los Worlds." }] },
        ],
        tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'Top Esports' }, { tag: 'Worlds 2026' }],
      },
    },

    // 175 — lpl-summer-2026-final-blg-champion : adversaire corrigé (TES pas JDG)
    {
      slug: 'lpl-summer-2026-final-blg-champion-fr',
      data: {
        title: "LPL Split 2 2026 : BiliBili Gaming sacré en dominant Top Esports 3-0 en finale",
        excerpt: "BiliBili Gaming remporte la finale du LPL Split 2 2026 en balayant Top Esports 3-0. BLG devient le seul club de l'histoire récente de la LPL à remporter deux Splits consécutifs.",
        content: [
          { type: 'p', children: [{ text: "BiliBili Gaming est le champion du LPL Split 2 2026. La finale a tourné à la démonstration de force : BLG a balayé Top Esports 3-0, ne concédant aucun game sur l'ensemble de la série finale." }] },
          { type: 'h2', children: [{ text: "Une finale sans suspense" }] },
          { type: 'p', children: [{ text: "Même après leur défaite surprise en R1 des playoffs contre WE, BLG a montré pourquoi ils sont la meilleure équipe de la région. Leur remontée depuis le losers bracket, terminée par ce 3-0 net contre TES, est l'une des performances les plus impressionnantes de la saison LPL." }] },
          { type: 'h2', children: [{ text: "BLG, l'ogre du LPL en 2026" }] },
          { type: 'p', children: [{ text: "Split 1 (vs JDG, 3-1), Split 2 (vs TES, 3-0) : BiliBili Gaming domine la LPL de la tête et des épaules en 2026. La formation arrive aux Worlds 2026 aux États-Unis comme le premier représentant chinois officiellement qualifié et l'un des favoris absolus pour le titre mondial." }] },
        ],
        tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'Top Esports' }, { tag: 'Finale' }, { tag: 'Worlds 2026' }],
      },
    },
    {
      slug: 'lpl-summer-2026-final-blg-champion-en',
      data: {
        title: "LPL Split 2 2026 Final: BiliBili Gaming sweep Top Esports 3-0 to claim the title",
        excerpt: "BiliBili Gaming win the LPL Split 2 2026 Grand Final with a clean 3-0 sweep over Top Esports. BLG become the rare team to win back-to-back LPL splits.",
        content: [
          { type: 'p', children: [{ text: "BiliBili Gaming are LPL Split 2 2026 champions. The Grand Final was a one-sided affair: BLG swept Top Esports 3-0, dropping not a single game across the entire series." }] },
          { type: 'h2', children: [{ text: "A one-sided Grand Final" }] },
          { type: 'p', children: [{ text: "Even after their shocking Round 1 loss to WE, BLG showed exactly why they are the best team in the region. Their losers bracket run, capped by this dominant 3-0 over TES, is one of the most impressive playoff performances in recent LPL history." }] },
          { type: 'h2', children: [{ text: "BLG, the LPL's dominant force in 2026" }] },
          { type: 'p', children: [{ text: "Split 1 (vs JDG, 3-1), Split 2 (vs TES, 3-0): BiliBili Gaming have owned the LPL in 2026. They arrive at Worlds 2026 in the United States as the first confirmed Chinese team and one of the most feared squads in the world." }] },
        ],
        tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'Top Esports' }, { tag: 'Finals' }, { tag: 'Worlds 2026' }],
      },
    },
    {
      slug: 'lpl-summer-2026-final-blg-champion-es',
      data: {
        title: "Final LPL Split 2 2026: BiliBili Gaming arrasa a Top Esports 3-0 y se corona campeón",
        excerpt: "BiliBili Gaming gana la gran final del LPL Split 2 2026 con un contundente 3-0 sobre Top Esports. BLG se convierte en el equipo que gana dos splits consecutivos de la LPL.",
        content: [
          { type: 'p', children: [{ text: "BiliBili Gaming es el campeón del LPL Split 2 2026. La gran final no tuvo historia: BLG arrasó a Top Esports 3-0, sin conceder ni un solo juego en toda la serie." }] },
          { type: 'h2', children: [{ text: "Una final sin suspense" }] },
          { type: 'p', children: [{ text: "Incluso después de su sorprendente derrota en primera ronda ante WE, BLG demostró por qué es el mejor equipo de la región. Su remontada por el losers bracket, culminada con este 3-0 ante TES, es una de las actuaciones en playoffs más impresionantes de la reciente historia de la LPL." }] },
          { type: 'h2', children: [{ text: "BLG, la fuerza dominante de la LPL en 2026" }] },
          { type: 'p', children: [{ text: "Split 1 (vs JDG, 3-1), Split 2 (vs TES, 3-0): BiliBili Gaming ha dominado la LPL en 2026. Llegan a los Worlds 2026 en Estados Unidos como el primer equipo chino confirmado y uno de los favoritos al título mundial." }] },
        ],
        tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'Top Esports' }, { tag: 'Final' }, { tag: 'Worlds 2026' }],
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
