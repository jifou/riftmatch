import type { MigrationModule } from './runner'

export const id = '044-ewc-qualifier-korea-dk-t1-semifinals'
export const description = 'EWC 2026 Korea Qualifier — DK élimine HLE 2-1, T1 sweepé BFX 2-0 : demi-finales de bracket supérieur'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-15T08:00:00.000Z'

const articles = [
  {
    title: 'EWC 2026 Korea Qualifier : DK renverse HLE, T1 écrase BFX — les demi-finales du bracket supérieur',
    slug: 'ewc-qualifier-2026-dk-hle-t1-bfx-semifinals-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: 'Dplus KIA s\'offre un upset retentissant contre Hanwha Life Esports (2-1), tandis que T1 domine BNK FEARX (2-0). Les deux équipes filent en finale du bracket supérieur de l\'EWC 2026 Korea Qualifier.',
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Esports_World_Cup/2026/Korea',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'EWC' }, { tag: 'Esports World Cup' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Le 12 mai 2026, les demi-finales du bracket supérieur de l'EWC 2026 Korea Qualifier ont livré deux résultats marquants. Dplus KIA a renversé Hanwha Life Esports en trois manches (2-1), et T1 a balayé BNK FEARX sans trembler (2-0). Les deux équipes qualifiées rejoignent la finale du bracket supérieur prévue le 25 mai, tandis que HLE et BFX descendent dans le bracket inférieur." }],
      },
      {
        type: 'h2',
        children: [{ text: "DK renverse HLE : l'upset de la semaine" }],
      },
      {
        type: 'p',
        children: [{ text: "Hanwha Life Esports, première tête de série du tournoi grâce à ses résultats de la phase régulière LCK, partait favori face à Dplus KIA. Mais DK a livré une performance collective impressionnante. Le top laner Siwoo, au duel direct avec Zeus d'HLE, a été décisif et a décroché le titre de MVP du match. Avec des pick créatifs en draft fearless, DK a su contraindre HLE sur deux des trois parties pour s'imposer 2-1 et valider sa place en finale du bracket supérieur." }],
      },
      {
        type: 'p',
        children: [{ text: "Cette victoire confirme la progression de DK depuis le début du split. ShowMaker, Lucid et Smash ont chacun apporté leur contribution dans les games clés, illustrant la montée en puissance d'un effectif parmi les plus jeunes de la LCK cette saison." }],
      },
      {
        type: 'h2',
        children: [{ text: 'T1 sans pitié contre BFX : 2-0 expéditif' }],
      },
      {
        type: 'p',
        children: [{ text: "Dans le deuxième match de la soirée, T1 n'a laissé aucune chance à BNK FEARX. La machine T1 a fonctionné à plein régime : contrôle de la vision, priorité mid-jungle, et macro exemplaire. BFX n'a pas trouvé de failles exploitables et tombe dans le bracket inférieur où il devra enchaîner les victoires pour espérer encore se qualifier." }],
      },
      {
        type: 'h2',
        children: [{ text: "La route vers l'EWC : ce qui reste à jouer" }],
      },
      {
        type: 'p',
        children: [{ text: "Le format du Korea Qualifier est en double élimination. Deux spots sont en jeu pour le Main Event de l'Esports World Cup à Riyad (Arabie Saoudite). Gen.G, champion en titre de l'EWC, est déjà qualifié directement. Les deux places restantes seront attribuées : une au vainqueur de la finale du bracket supérieur (T1 vs DK, le 25 mai), l'autre au vainqueur de la finale du bracket inférieur (le 26 mai). HLE et BFX ont donc encore leur chance, mais devront gagner chaque match sans droit à l'erreur." }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'DK et T1 sont en position de force, mais HLE et BFX gardent leur destin en main dans le bracket inférieur. Le rendez-vous est pris pour les finales du 25 et 26 mai.' }],
      },
    ],
  },
  {
    title: 'EWC 2026 Korea Qualifier: DK upsets HLE 2-1, T1 sweeps BFX 2-0 — Upper Bracket Semifinals recap',
    slug: 'ewc-qualifier-2026-dk-hle-t1-bfx-semifinals-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: 'Dplus KIA pulls off a major upset against first-seed Hanwha Life Esports (2-1), while T1 dominates BNK FEARX (2-0). Both teams advance to the Upper Bracket Final of the EWC 2026 Korea Qualifier.',
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Esports_World_Cup/2026/Korea',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'EWC' }, { tag: 'Esports World Cup' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'On May 12, 2026, the Upper Bracket Semifinals of the EWC 2026 Korea Qualifier delivered two decisive results. Dplus KIA upset Hanwha Life Esports in three games (2-1), and T1 swept BNK FEARX without dropping a single map (2-0). DK and T1 now advance to the Upper Bracket Final on May 25, while HLE and BFX are sent to the Lower Bracket to fight for survival.' }],
      },
      {
        type: 'h2',
        children: [{ text: "DK's upset win: Siwoo steals the show" }],
      },
      {
        type: 'p',
        children: [{ text: "Hanwha Life Esports entered as the number one seed thanks to their dominant LCK regular season performance, and were considered heavy favorites heading into the match. DK, however, had a different plan. Top laner Siwoo outperformed HLE's Zeus in the critical individual matchup, earning MVP honors for his performance across the series. DK's fearless draft strategy proved creative and unpredictable, ultimately securing the 2-1 victory." }],
      },
      {
        type: 'p',
        children: [{ text: "The win underscores DK's collective growth throughout the split. ShowMaker, Lucid, and Smash all contributed in key games, showcasing one of the LCK's youngest rosters firing on all cylinders at the right moment." }],
      },
      {
        type: 'h2',
        children: [{ text: 'T1 dominant: BFX cannot find an opening' }],
      },
      {
        type: 'p',
        children: [{ text: "T1's match against BNK FEARX was a showcase of disciplined, macro-focused League of Legends. T1 controlled vision, dominated the mid-jungle corridor, and never allowed BFX a path back into either game. The 2-0 sweep was clinical, and BFX now faces a challenging run through the Lower Bracket if they want to reach the EWC Main Event." }],
      },
      {
        type: 'h2',
        children: [{ text: "What's next: road to EWC Riyadh" }],
      },
      {
        type: 'p',
        children: [{ text: 'The Korea Qualifier uses a double-elimination format with two spots available for the EWC Main Event in Riyadh, Saudi Arabia. Gen.G, as defending EWC champions, already hold a direct invitation. The remaining two spots go to the Upper Bracket Final winner (T1 vs. DK on May 25) and the Lower Bracket Final winner (May 26). HLE and BFX still have a path forward, but cannot afford a single slip-up.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: "DK and T1 are in the driver's seat, but HLE and BFX are still alive in the Lower Bracket. All eyes turn to the finals on May 25–26." }],
      },
    ],
  },
  {
    title: 'EWC 2026 Korea Qualifier: DK vence a HLE 2-1, T1 arrasa con BFX 2-0 — resumen de las semifinales del bracket superior',
    slug: 'ewc-qualifier-2026-dk-hle-t1-bfx-semifinals-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: 'Dplus KIA consigue un gran upset ante el primer cabeza de serie Hanwha Life Esports (2-1), mientras que T1 domina a BNK FEARX (2-0). Ambos equipos avanzan a la Final del Bracket Superior del EWC 2026 Korea Qualifier.',
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Esports_World_Cup/2026/Korea',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'EWC' }, { tag: 'Esports World Cup' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'El 12 de mayo de 2026, las semifinales del bracket superior del EWC 2026 Korea Qualifier ofrecieron dos resultados definitivos. Dplus KIA derrotó a Hanwha Life Esports en tres partidas (2-1), y T1 barrió a BNK FEARX sin perder un solo mapa (2-0). DK y T1 avanzan a la Final del Bracket Superior prevista para el 25 de mayo, mientras que HLE y BFX caen al bracket inferior con su clasificación aún en juego.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'DK derriba a HLE: Siwoo protagoniza la jornada' }],
      },
      {
        type: 'p',
        children: [{ text: 'Hanwha Life Esports llegaba como primer cabeza de serie gracias a su temporada regular dominante en la LCK, siendo amplios favoritos. Sin embargo, DK tenía otros planes. El toplaner Siwoo superó al veterano Zeus en el duelo individual más esperado del match y se llevó el MVP de la serie. La estrategia de draft fearless de DK resultó creativa y difícil de contrarrestar, permitiéndoles imponerse 2-1.' }],
      },
      {
        type: 'p',
        children: [{ text: 'Este triunfo confirma el crecimiento colectivo de DK durante el split. ShowMaker, Lucid y Smash aportaron en los momentos decisivos, demostrando que uno de los rosters más jóvenes de la LCK puede rendir al máximo nivel cuando más importa.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'T1 imparable: BFX no encuentra soluciones' }],
      },
      {
        type: 'p',
        children: [{ text: 'El encuentro entre T1 y BNK FEARX fue un ejercicio de dominio total. T1 controló la visión, dictó el ritmo del juego desde el corredor mid-jungle y no dejó ningún resquicio a BFX en ninguna de las dos partidas. El 2-0 fue contundente, y BFX deberá ganar todos sus partidos en el bracket inferior para seguir soñando con el EWC Main Event.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'El camino hacia Riad: qué queda por jugar' }],
      },
      {
        type: 'p',
        children: [{ text: 'El Korea Qualifier utiliza un formato de doble eliminación con dos plazas en juego para el Main Event del Esports World Cup en Riad, Arabia Saudí. Gen.G, como campeón defensor del EWC, ya tiene invitación directa. Los dos cupos restantes se disputarán en la Final del Bracket Superior (T1 vs. DK, 25 de mayo) y la Final del Bracket Inferior (26 de mayo). HLE y BFX siguen vivos, pero ya no pueden permitirse ningún error.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'DK y T1 salen como grandes favoritos, pero HLE y BFX mantienen viva su esperanza en el bracket inferior. Las finales del 25 y 26 de mayo definirán los representantes coreanos en Riad.' }],
      },
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
