import type { MigrationModule } from './runner'

export const id = '180-fix-lck-articles'
export const description = 'Correction LCK — standings réels (Gen.G 1er, HLE 2e, T1 3e, DK 4e) + playoffs Round 1 résultats'

export const up: MigrationModule['up'] = async (payload) => {
  const updates: { slug: string; data: Record<string, unknown> }[] = [
    // 158 — lck-summer-2026-t1-drx-week-results : standings corrigés (Gen.G leads, pas T1)
    {
      slug: 'lck-summer-2026-t1-drx-week-results-fr',
      data: {
        title: "LCK 2026 : Gen.G en tête, T1 et HLE au coude à coude pour les meilleures têtes de série",
        excerpt: "Gen.G s'impose comme le leader de la LCK en 2026. T1 et Hanwha Life se disputent les 2e et 3e places, tandis que DK assure sa qualification directe en playoffs.",
        content: [
          { type: 'p', children: [{ text: "Gen.G confirme son statut de meilleure équipe de la LCK 2026. La formation coréenne devance ses rivaux au classement et est en passe de décrocher la 1ère tête de série pour les Season Playoffs, ce qui lui garantit un bye au 1er tour." }] },
          { type: 'h2', children: [{ text: "T1 et HLE se disputent le 2e rang" }] },
          { type: 'p', children: [{ text: "Derrière Gen.G, Hanwha Life Esports (champion de MSI 2026) et T1 se livrent une bataille serrée pour les meilleures têtes de série. Les deux équipes se qualifient directement pour les playoffs, mais la hiérarchie entre elles aura son importance sur le bracket final." }] },
          { type: 'h2', children: [{ text: "DK assure la 4e place, Play-In en vue pour KT et BNK FearX" }] },
          { type: 'p', children: [{ text: "Dplus Kia consolide sa 4e place et sa qualification directe. KT Rolster et BNK FearX devront passer par le LCK Season Play-In (26-28 août) pour décrocher les deux dernières places en playoffs." }] },
        ],
        tags: [{ tag: 'LCK' }, { tag: 'Gen.G' }, { tag: 'T1' }, { tag: 'Hanwha Life' }],
      },
    },
    {
      slug: 'lck-summer-2026-t1-drx-week-results-en',
      data: {
        title: "LCK 2026: Gen.G lead the pack, T1 and HLE battle for top seeds",
        excerpt: "Gen.G are the clear leaders of LCK 2026. T1 and Hanwha Life are locked in a race for second and third, while DK secures direct playoff qualification.",
        content: [
          { type: 'p', children: [{ text: "Gen.G are asserting themselves as the best team in the LCK in 2026. The Korean squad leads the standings and is on track for the top playoff seed, earning a first-round bye in the Season Playoffs." }] },
          { type: 'h2', children: [{ text: "T1 and HLE neck and neck" }] },
          { type: 'p', children: [{ text: "Behind Gen.G, MSI 2026 champion Hanwha Life Esports and T1 are fighting closely for second and third. Both squads have secured direct playoff spots, but their final seeding will shape the bracket significantly." }] },
          { type: 'h2', children: [{ text: "DK locks in 4th, KT and BNK FearX face Play-In" }] },
          { type: 'p', children: [{ text: "Dplus Kia holds down the fourth direct seed. KT Rolster and BNK FearX will need to go through the LCK Season Play-In (August 26-28) for the final two playoff spots." }] },
        ],
        tags: [{ tag: 'LCK' }, { tag: 'Gen.G' }, { tag: 'T1' }, { tag: 'Hanwha Life' }],
      },
    },
    {
      slug: 'lck-summer-2026-t1-drx-week-results-es',
      data: {
        title: "LCK 2026: Gen.G lidera, T1 y HLE pelean por los mejores cabezas de serie",
        excerpt: "Gen.G se confirma como el mejor equipo de la LCK 2026. T1 y Hanwha Life se disputan el segundo y tercer puesto, mientras DK asegura su clasificación directa.",
        content: [
          { type: 'p', children: [{ text: "Gen.G se reafirma como el equipo más fuerte de la LCK en 2026. El equipo coreano lidera la clasificación y está a punto de asegurarse la primera cabeza de serie para los Season Playoffs." }] },
          { type: 'h2', children: [{ text: "T1 y HLE muy igualados" }] },
          { type: 'p', children: [{ text: "Detrás de Gen.G, el campeón del MSI 2026, Hanwha Life Esports, y T1 se pelean el segundo y tercer puesto. Ambos equipos están clasificados directamente para los playoffs, pero su posición final en el bracket tendrá su importancia." }] },
          { type: 'h2', children: [{ text: "DK asegura el 4o puesto, KT y BNK FearX al Play-In" }] },
          { type: 'p', children: [{ text: "Dplus Kia consolida el cuarto puesto directo. KT Rolster y BNK FearX tendrán que pasar por el LCK Season Play-In (26-28 de agosto) para conseguir las dos últimas plazas de playoffs." }] },
        ],
        tags: [{ tag: 'LCK' }, { tag: 'Gen.G' }, { tag: 'T1' }, { tag: 'Hanwha Life' }],
      },
    },

    // 164 — lck-summer-2026-regular-season-end : standings finaux corrects
    {
      slug: 'lck-summer-2026-regular-season-end-fr',
      data: {
        title: "LCK 2026 : fin de saison régulière — Gen.G 1er, HLE 2e, T1 3e, DK 4e qualifiés directement",
        excerpt: "La saison régulière LCK 2026 est terminée. Gen.G, Hanwha Life, T1 et Dplus Kia sont qualifiés directement pour les Season Playoffs. KT et BNK FearX passent par le Play-In (26-28 août).",
        content: [
          { type: 'p', children: [{ text: "La saison régulière LCK 2026 s'est conclue avec Gen.G en tête du classement. La formation coréenne termine 1ère et obtient la meilleure tête de série pour les Season Playoffs, garantissant un bye au 1er tour de la double élimination." }] },
          { type: 'h2', children: [{ text: "Les 4 équipes à qualification directe" }] },
          { type: 'p', children: [{ text: "Gen.G (Seed 1), Hanwha Life Esports (Seed 2, champion MSI 2026), T1 (Seed 3) et Dplus Kia (Seed 4) rejoignent directement les Season Playoffs. Les 4 premières têtes de série bénéficient d'un bye au Round 1 des playoffs." }] },
          { type: 'h2', children: [{ text: "KT et BNK FearX au Play-In" }] },
          { type: 'p', children: [{ text: "KT Rolster et BNK FearX devront passer par le Season Play-In (26-28 août) pour obtenir les deux dernières places en playoffs. Les Season Playoffs se dérouleront du 29 août au 13 septembre, avec les 4 premières places qualificatives pour les Worlds 2026 aux États-Unis." }] },
        ],
        tags: [{ tag: 'LCK' }, { tag: 'Gen.G' }, { tag: 'T1' }, { tag: 'Hanwha Life' }, { tag: 'Worlds 2026' }],
      },
    },
    {
      slug: 'lck-summer-2026-regular-season-end-en',
      data: {
        title: "LCK 2026: Regular season over — Gen.G 1st, HLE 2nd, T1 3rd, DK 4th with direct playoff spots",
        excerpt: "The LCK 2026 regular season is complete. Gen.G, Hanwha Life, T1, and Dplus Kia qualify directly for the Season Playoffs. KT and BNK FearX head to the Play-In (Aug 26-28).",
        content: [
          { type: 'p', children: [{ text: "The LCK 2026 regular season is over, with Gen.G topping the final standings. The Korean squad earned the top playoff seed, securing a first-round bye in the double-elimination bracket." }] },
          { type: 'h2', children: [{ text: "Four direct playoff qualifiers" }] },
          { type: 'p', children: [{ text: "Gen.G (Seed 1), Hanwha Life Esports (Seed 2, MSI 2026 champions), T1 (Seed 3), and Dplus Kia (Seed 4) advance directly to the Season Playoffs. All four top seeds receive a Round 1 bye." }] },
          { type: 'h2', children: [{ text: "KT and BNK FearX go to the Play-In" }] },
          { type: 'p', children: [{ text: "KT Rolster and BNK FearX must battle through the Season Play-In (August 26-28) for the final two playoff spots. The Season Playoffs run from August 29 to September 13, with the top four finishing positions earning Worlds 2026 berths." }] },
        ],
        tags: [{ tag: 'LCK' }, { tag: 'Gen.G' }, { tag: 'T1' }, { tag: 'Hanwha Life' }, { tag: 'Worlds 2026' }],
      },
    },
    {
      slug: 'lck-summer-2026-regular-season-end-es',
      data: {
        title: "LCK 2026: Fin de la fase regular — Gen.G 1o, HLE 2o, T1 3o, DK 4o con clasificación directa",
        excerpt: "La fase regular de la LCK 2026 ha concluido. Gen.G, Hanwha Life, T1 y Dplus Kia están clasificados directamente para los Season Playoffs. KT y BNK FearX van al Play-In (26-28 ago).",
        content: [
          { type: 'p', children: [{ text: "La fase regular de la LCK 2026 ha finalizado con Gen.G a la cabeza. El equipo coreano se ha asegurado la primera cabeza de serie para los Season Playoffs y un bye en la primera ronda." }] },
          { type: 'h2', children: [{ text: "Cuatro clasificados directos" }] },
          { type: 'p', children: [{ text: "Gen.G (Semilla 1), Hanwha Life Esports (Semilla 2, campeones del MSI 2026), T1 (Semilla 3) y Dplus Kia (Semilla 4) avanzan directamente a los Season Playoffs. Las cuatro primeras cabezas de serie tienen bye en la primera ronda." }] },
          { type: 'h2', children: [{ text: "KT y BNK FearX al Play-In" }] },
          { type: 'p', children: [{ text: "KT Rolster y BNK FearX tendrán que pasar por el Season Play-In (26-28 de agosto) para conseguir las dos últimas plazas de playoffs. Los Season Playoffs van del 29 de agosto al 13 de septiembre, con las cuatro primeras plazas clasificatorias para los Worlds 2026." }] },
        ],
        tags: [{ tag: 'LCK' }, { tag: 'Gen.G' }, { tag: 'T1' }, { tag: 'Hanwha Life' }, { tag: 'Worlds 2026' }],
      },
    },

    // 170 — lck-playoffs-2026-t1-hle : Play-In résultats (KT et BNK FearX qualifiés)
    {
      slug: 'lck-playoffs-2026-t1-hle-fr',
      data: {
        title: "LCK 2026 Season Play-In : KT Rolster et BNK FearX se qualifient pour les playoffs",
        excerpt: "Le LCK 2026 Season Play-In (26-28 août) a désigné ses deux qualifiés : KT Rolster et BNK FearX rejoignent Gen.G, HLE, T1 et DK pour les Season Playoffs qui débutent le 29 août.",
        content: [
          { type: 'p', children: [{ text: "Le LCK 2026 Season Play-In (26-28 août) a permis de désigner les deux dernières équipes pour les Season Playoffs. KT Rolster et BNK FearX ont décroché leur ticket et complètent le tableau de six équipes." }] },
          { type: 'h2', children: [{ text: "Un tableau de playoffs 100% coréen" }] },
          { type: 'p', children: [{ text: "Les six participants aux Season Playoffs LCK sont désormais connus : Gen.G (Seed 1), Hanwha Life Esports (Seed 2), T1 (Seed 3), Dplus Kia (Seed 4) en qualification directe, plus KT Rolster et BNK FearX via le Play-In. Les quatre premiers places sont qualificatives pour les Worlds 2026 aux États-Unis." }] },
          { type: 'h2', children: [{ text: "Les playoffs débutent le 29 août" }] },
          { type: 'p', children: [{ text: "Le format est une double élimination. T1 (Seed 3) et Dplus Kia (Seed 4) affrontent respectivement BNK FearX et KT en Round 1. Gen.G et HLE bénéficient d'un bye et entrent directement en Round 2. Le champion sera connu le 13 septembre." }] },
        ],
        tags: [{ tag: 'LCK' }, { tag: 'KT Rolster' }, { tag: 'BNK FearX' }, { tag: 'Playoffs' }, { tag: 'Worlds 2026' }],
      },
    },
    {
      slug: 'lck-playoffs-2026-t1-hle-en',
      data: {
        title: "LCK 2026 Season Play-In: KT Rolster and BNK FearX earn playoff spots",
        excerpt: "The LCK 2026 Season Play-In (August 26-28) has produced its two qualifiers: KT Rolster and BNK FearX join Gen.G, HLE, T1, and DK for the Season Playoffs starting August 29.",
        content: [
          { type: 'p', children: [{ text: "The LCK 2026 Season Play-In (August 26-28) has determined the final two teams for the Season Playoffs. KT Rolster and BNK FearX punched their tickets and complete the six-team bracket." }] },
          { type: 'h2', children: [{ text: "A six-team playoff field" }] },
          { type: 'p', children: [{ text: "The LCK Season Playoffs participants are: Gen.G (Seed 1), Hanwha Life Esports (Seed 2), T1 (Seed 3), Dplus Kia (Seed 4) as direct qualifiers, plus KT Rolster and BNK FearX via Play-In. The top four finishing positions earn Worlds 2026 spots." }] },
          { type: 'h2', children: [{ text: "Playoffs begin August 29" }] },
          { type: 'p', children: [{ text: "The format is a double elimination bracket. T1 (Seed 3) faces BNK FearX and Dplus Kia takes on KT in Round 1. Gen.G and HLE receive first-round byes and enter at Round 2. The LCK champion will be crowned on September 13." }] },
        ],
        tags: [{ tag: 'LCK' }, { tag: 'KT Rolster' }, { tag: 'BNK FearX' }, { tag: 'Playoffs' }, { tag: 'Worlds 2026' }],
      },
    },
    {
      slug: 'lck-playoffs-2026-t1-hle-es',
      data: {
        title: "LCK 2026 Season Play-In: KT Rolster y BNK FearX se clasifican para los playoffs",
        excerpt: "El LCK 2026 Season Play-In (26-28 agosto) ha designado a sus dos clasificados: KT Rolster y BNK FearX se unen a Gen.G, HLE, T1 y DK para los Season Playoffs que comienzan el 29 de agosto.",
        content: [
          { type: 'p', children: [{ text: "El LCK 2026 Season Play-In (26-28 agosto) ha designado a los dos últimos equipos para los Season Playoffs. KT Rolster y BNK FearX han conseguido su plaza y completan el cuadro de seis equipos." }] },
          { type: 'h2', children: [{ text: "Un cuadro de seis equipos" }] },
          { type: 'p', children: [{ text: "Los participantes en los LCK Season Playoffs son: Gen.G (Semilla 1), Hanwha Life Esports (Semilla 2), T1 (Semilla 3), Dplus Kia (Semilla 4) como clasificados directos, más KT Rolster y BNK FearX vía Play-In. Los cuatro primeros puestos darán acceso a los Worlds 2026." }] },
          { type: 'h2', children: [{ text: "Los playoffs empiezan el 29 de agosto" }] },
          { type: 'p', children: [{ text: "El formato es de doble eliminación. T1 (Semilla 3) se enfrenta a BNK FearX y DK a KT en la primera ronda. Gen.G y HLE tienen bye y entran directamente en la segunda ronda. El campeón de la LCK se conocerá el 13 de septiembre." }] },
        ],
        tags: [{ tag: 'LCK' }, { tag: 'KT Rolster' }, { tag: 'BNK FearX' }, { tag: 'Playoffs' }, { tag: 'Worlds 2026' }],
      },
    },

    // 174 — lck-summer-2026-final-t1-geng : Round 1 playoffs résultats réels
    {
      slug: 'lck-summer-2026-final-t1-geng-fr',
      data: {
        title: "LCK Season Playoffs Round 1 : T1 survit 3-2 à BNK FearX, KT domine DK 3-0",
        excerpt: "Le Round 1 des LCK 2026 Season Playoffs a livré deux résultats : T1 s'en sort difficilement 3-2 face à BNK FearX, tandis que KT Rolster écrase DK 3-0. Gen.G et HLE entrent en Round 2.",
        content: [
          { type: 'p', children: [{ text: "Le Round 1 des LCK 2026 Season Playoffs a ouvert les hostilités avec deux matchs intenses. T1 et KT Rolster ont décroché leur billet pour le Round 2, où ils affronteront respectivement Hanwha Life Esports et Gen.G." }] },
          { type: 'h2', children: [{ text: "T1 3-2 BNK FearX : une série accrochée" }] },
          { type: 'p', children: [{ text: "T1 n'a pas eu la tâche facile face à BNK FearX, qualifiés via le Play-In. La série s'est étendue sur 5 games, et FearX a poussé T1 dans ses retranchements. Finalement, T1 s'en sort 3-2 et avance en Round 2 où ils retrouveront Hanwha Life Esports." }] },
          { type: 'h2', children: [{ text: "KT Rolster 3-0 Dplus Kia : dominance totale" }] },
          { type: 'p', children: [{ text: "KT Rolster a en revanche été impérial, balayant Dplus Kia 3-0 sans discussion. KT se retrouve en Round 2 face à Gen.G, la 1ère tête de série. BNK FearX et DK tombent dans le losers bracket et devront continuer à jouer pour rester en vie." }] },
        ],
        tags: [{ tag: 'LCK' }, { tag: 'T1' }, { tag: 'KT Rolster' }, { tag: 'BNK FearX' }, { tag: 'Playoffs' }],
      },
    },
    {
      slug: 'lck-summer-2026-final-t1-geng-en',
      data: {
        title: "LCK Season Playoffs Round 1: T1 survive BNK FearX scare 3-2, KT sweep DK 3-0",
        excerpt: "Round 1 of the LCK 2026 Season Playoffs is done: T1 edge BNK FearX 3-2 in a tense five-game series, while KT Rolster dominant sweeps Dplus Kia 3-0. Gen.G and HLE enter at Round 2.",
        content: [
          { type: 'p', children: [{ text: "Round 1 of the LCK 2026 Season Playoffs produced two very different series. T1 and KT Rolster both advance to Round 2, where they will face Hanwha Life Esports and Gen.G respectively." }] },
          { type: 'h2', children: [{ text: "T1 3-2 BNK FearX: a close call" }] },
          { type: 'p', children: [{ text: "T1 were pushed to the limit by Play-In qualifier BNK FearX. The series went the full five games, with FearX showing they belong at this level. T1 ultimately closed it out 3-2 and will now face MSI champion Hanwha Life Esports in Round 2." }] },
          { type: 'h2', children: [{ text: "KT Rolster 3-0 Dplus Kia: no contest" }] },
          { type: 'p', children: [{ text: "KT Rolster were dominant, sweeping Dplus Kia 3-0 in clinical fashion. KT advance to face Gen.G, the top seed, in Round 2. BNK FearX and Dplus Kia drop to the losers bracket and must keep winning to stay alive." }] },
        ],
        tags: [{ tag: 'LCK' }, { tag: 'T1' }, { tag: 'KT Rolster' }, { tag: 'BNK FearX' }, { tag: 'Playoffs' }],
      },
    },
    {
      slug: 'lck-summer-2026-final-t1-geng-es',
      data: {
        title: "LCK Season Playoffs Ronda 1: T1 supera con apuros a BNK FearX (3-2), KT barre a DK (3-0)",
        excerpt: "La Ronda 1 de los LCK 2026 Season Playoffs tiene sus resultados: T1 elimina a BNK FearX 3-2 en una tensa serie de 5 partidas, y KT Rolster arrasa a Dplus Kia 3-0. Gen.G y HLE entran en la Ronda 2.",
        content: [
          { type: 'p', children: [{ text: "La Ronda 1 de los LCK 2026 Season Playoffs nos dejó dos series muy distintas. T1 y KT Rolster avanzan a la Ronda 2, donde se enfrentarán a Hanwha Life Esports y Gen.G respectivamente." }] },
          { type: 'h2', children: [{ text: "T1 3-2 BNK FearX: un susto de los grandes" }] },
          { type: 'p', children: [{ text: "T1 tuvo que sufrir ante BNK FearX, clasificado vía Play-In. La serie se fue a las 5 partidas y FearX demostró estar a la altura del nivel de los playoffs. Finalmente T1 cerró 3-2 y se mide ahora a Hanwha Life Esports en la Ronda 2." }] },
          { type: 'h2', children: [{ text: "KT Rolster 3-0 Dplus Kia: dominio total" }] },
          { type: 'p', children: [{ text: "KT Rolster fue dominante y barrió a Dplus Kia 3-0 sin discusión. KT avanza para enfrentarse al primer cabeza de serie, Gen.G. BNK FearX y DK caen al losers bracket y deberán seguir ganando para seguir con vida." }] },
        ],
        tags: [{ tag: 'LCK' }, { tag: 'T1' }, { tag: 'KT Rolster' }, { tag: 'BNK FearX' }, { tag: 'Playoffs' }],
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
