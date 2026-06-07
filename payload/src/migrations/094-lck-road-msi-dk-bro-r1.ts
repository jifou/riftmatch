import type { MigrationModule } from './runner'

export const id = '094-lck-road-msi-dk-bro-r1'
export const description = 'LCK Road to MSI 2026 — Dplus KIA sweep BRION 3-0, Round 1'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-06T08:00:00.000Z'

const articles = [
  {
    title: "LCK Road to MSI 2026 : Dplus KIA élimine BRION 3-0 au premier tour",
    slug: 'lck-road-msi-2026-dk-bro-r1-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Dplus KIA a dominé Hanjin BRION 3-0 au premier tour du LCK Road to MSI 2026, s'offrant le droit d'affronter KT Rolster au round suivant dans la course aux deux places LCK pour le MSI à Daejeon.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Road_to_MSI',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'MSI 2026' }, { tag: 'Dplus KIA' }],
    content: [
      { type: 'p', children: [{ text: "Le LCK Road to MSI 2026 a débuté ce vendredi 6 juin à Séoul. Pour ce premier round du tournoi en double élimination, Dplus KIA (DK) n'a laissé aucune chance à Hanjin BRION, s'imposant 3-0 dans un BO5 sans suspense. Cette victoire expéditive qualifie DK pour le second tour où ils croiseront la route de KT Rolster." }] },
      { type: 'h2', children: [{ text: "Une domination sans partage" }] },
      { type: 'p', children: [{ text: "Dplus KIA avait terminé la saison régulière du LCK Split 2 à la 5e place avec un bilan de 11 victoires et 7 défaites, tandis que BRION avait conclu 6e avec 6 victoires et 12 défaites. L'écart de niveau entre les deux formations s'est confirmé tout au long du BO5 : DK a contrôlé le rythme du jeu dans les trois parties disputées, ne laissant jamais BRO s'installer dans la partie. Il s'agit de la quatrième victoire consécutive de DK contre BRION cette saison, les deux équipes s'étant affrontées à trois reprises en saison régulière avec le même résultat à chaque fois." }] },
      { type: 'h2', children: [{ text: "Un Road to MSI en double élimination" }] },
      { type: 'p', children: [{ text: "Le LCK Road to MSI 2026 réunit six équipes dans un tableau à double élimination en format BO5. Les deux premiers de la saison régulière — Hanwha Life Esports et T1 — bénéficient d'un avantage en upper bracket. BRION, éliminé dès le premier tour, quitte donc la compétition sans avoir décroché de point supplémentaire. De son côté, DK devra encore gagner plusieurs séries pour espérer représenter la Corée au MSI 2026 à Daejeon, qui se tiendra du 28 juin au 12 juillet." }] },
      { type: 'h2', children: [{ text: "La suite du programme" }] },
      { type: 'p', children: [{ text: "Dplus KIA affrontera KT Rolster au Round 2 du lower bracket. En parallèle, le 12 juin à Wonju, Hanwha Life Esports et T1 s'opposeront en upper bracket pour une place directe en finale et une première qualification MSI assurée. Le tableau se précisera rapidement au cours de la semaine du 12 juin." }] },
      { type: 'blockquote', children: [{ text: "Dplus KIA déroule face à BRION et conserve ses chances de qualifications MSI, mais la route reste longue dans ce lower bracket." }] },
    ],
  },
  {
    title: "LCK Road to MSI 2026: Dplus KIA sweeps BRION 3-0 in Round 1",
    slug: 'lck-road-msi-2026-dk-bro-r1-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Dplus KIA swept Hanjin BRION 3-0 in Round 1 of the LCK Road to MSI 2026, advancing to face KT Rolster in the next stage of the lower bracket.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Road_to_MSI',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'MSI 2026' }, { tag: 'Dplus KIA' }],
    content: [
      { type: 'p', children: [{ text: "The LCK Road to MSI 2026 kicked off on Friday, June 6 in Seoul. In the opening round of the double-elimination bracket, Dplus KIA (DK) left no room for doubt against Hanjin BRION, delivering a clean 3-0 sweep in a one-sided best-of-five. The result eliminates BRION from the tournament and sends DK into a Round 2 clash against KT Rolster." }] },
      { type: 'h2', children: [{ text: "DK in full control from the start" }] },
      { type: 'p', children: [{ text: "Dplus KIA had finished the LCK Split 2 regular season in 5th place with an 11-7 series record, while BRION concluded their campaign in 6th with a 6-12 record. The gap in level was evident across all three games, as DK dictated the pace throughout the series. This victory marks the fourth consecutive win for DK over BRION this season — the two sides had already met three times in the regular season, with DK taking each encounter." }] },
      { type: 'h2', children: [{ text: "Road to MSI format: a double-elimination gauntlet" }] },
      { type: 'p', children: [{ text: "Six LCK teams compete in a double-elimination bracket, all in best-of-five format. Hanwha Life Esports and T1, who finished first and second in the regular season respectively, entered from the upper bracket with a double chance. BRION's elimination in Round 1 ends their MSI hopes for 2026. DK, now in the lower bracket, will need to string together more wins to secure one of the two LCK spots heading to MSI 2026 in Daejeon, South Korea (June 28 – July 12)." }] },
      { type: 'h2', children: [{ text: "What comes next" }] },
      { type: 'p', children: [{ text: "Dplus KIA will face KT Rolster in Round 2 of the lower bracket. On the upper bracket side, Hanwha Life Esports and T1 are set to meet on June 12 in Wonju for a spot in the final and a guaranteed MSI berth. The tournament will reach a decisive stretch during the week of June 12." }] },
      { type: 'blockquote', children: [{ text: "Dplus KIA brush past BRION and keep their MSI 2026 hopes alive, though the road through the lower bracket remains long." }] },
    ],
  },
  {
    title: "LCK Road to MSI 2026: Dplus KIA elimina a BRION 3-0 en la Ronda 1",
    slug: 'lck-road-msi-2026-dk-bro-r1-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Dplus KIA arrasó a Hanjin BRION 3-0 en la Ronda 1 del LCK Road to MSI 2026, avanzando al siguiente enfrentamiento ante KT Rolster en el lower bracket.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Road_to_MSI',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'MSI 2026' }, { tag: 'Dplus KIA' }],
    content: [
      { type: 'p', children: [{ text: "El LCK Road to MSI 2026 arrancó este viernes 6 de junio en Seúl. En el primer round del cuadro de doble eliminación, Dplus KIA (DK) no dio ninguna oportunidad a Hanjin BRION, imponiéndose 3-0 en un BO5 completamente dominado. Con este resultado, BRION queda eliminado del torneo y DK se medirá a KT Rolster en la Ronda 2 del lower bracket." }] },
      { type: 'h2', children: [{ text: "DK, superior en los tres mapas" }] },
      { type: 'p', children: [{ text: "Dplus KIA había cerrado la fase regular del LCK Split 2 en 5ª posición con un balance de 11-7 en series, mientras que BRION terminó en 6ª plaza con solo 6 victorias y 12 derrotas. La diferencia de nivel se hizo patente en los tres partidos: DK controló el ritmo de juego de principio a fin y nunca permitió a BRO encontrar su juego. Esta victoria es además la cuarta consecutiva de DK sobre BRION en 2026, después de haberles ganado en sus tres encuentros de temporada regular." }] },
      { type: 'h2', children: [{ text: "El formato del Road to MSI" }] },
      { type: 'p', children: [{ text: "El LCK Road to MSI 2026 enfrenta a seis equipos en un cuadro de doble eliminación con series al mejor de cinco. Hanwha Life Esports y T1, primero y segundo de la temporada regular, accedieron directamente al upper bracket con doble oportunidad. La eliminación de BRION en primera ronda pone fin a sus aspiraciones de MSI para 2026. DK debe seguir ganando desde el lower bracket para conseguir uno de los dos cupos LCK para el MSI 2026 en Daejeon, Corea del Sur (28 de junio – 12 de julio)." }] },
      { type: 'h2', children: [{ text: "Lo que viene" }] },
      { type: 'p', children: [{ text: "Dplus KIA se enfrentará a KT Rolster en la Ronda 2 del lower bracket. Por su parte, en el upper bracket, Hanwha Life Esports y T1 se medirán el 12 de junio en Wonju, en un duelo que definirá al primer clasificado coreano para el MSI 2026. La semana del 12 de junio será decisiva para conocer a los dos representantes del LCK en Daejeon." }] },
      { type: 'blockquote', children: [{ text: "Dplus KIA supera el primer obstáculo y sigue vivo en la carrera por el MSI, aunque el camino desde el lower bracket exige ganar sin margen de error." }] },
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
