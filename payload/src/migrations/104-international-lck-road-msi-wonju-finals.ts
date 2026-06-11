import type { MigrationModule } from './runner'

export const id = '104-international-lck-road-msi-wonju-finals'
export const description = 'International — LCK Road to MSI 2026 : finales à Wonju, T1 vs HLE + Gen.G vs KT pour deux places à Daejeon'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-11T08:00:00.000Z'
const COVER = 'https://img.youtube.com/vi/Pci88kY0pIw/maxresdefault.jpg'

const articles = [
  {
    title: "LCK Road to MSI 2026 : les finales de Wonju débutent demain — T1, HLE, Gen.G et KT en lice",
    slug: 'lck-road-msi-wonju-finals-preview-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "T1, Hanwha Life, Gen.G et KT Rolster se retrouvent à Wonju du 12 au 14 juin pour décider des deux représentants de la LCK au MSI 2026.",
    sourceUrl: 'https://lolesports.com/en-US/tournament/115548128960088078/stage/115548128961398800',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'LCK' }, { tag: 'MSI 2026' }],
    content: [
      { type: 'p', children: [{ text: "Le LCK Road to MSI 2026 entre dans sa phase finale. Après deux tours disputés en ligne les 6 et 7 juin — Dplus KIA a éliminé BRION 3-0 puis KT Rolster a renversé DK 3-2 — quatre équipes restent en vie pour décrocher l'une des deux places qui représenteront la Corée au Mid-Season Invitational 2026 à Daejeon." }] },
      { type: 'h2', children: [{ text: "Trois matches en trois jours à Wonju" }] },
      { type: 'p', children: [{ text: "Les Rounds 3, 4 et la Grande Finale se tiendront au Wonju DB Promi Arena du 12 au 14 juin. Le format reste en Bo5 et l'atmosphère promet d'être électrique dans cette salle de 8 000 places du Gangwon-do." }] },
      { type: 'p', children: [{ text: "Vendredi 12 juin : T1 affronte Hanwha Life Esports pour la première graine. HLE, qui a terminé premier des phases régulières, arrive avec une légère avance psychologique, mais T1 et Faker n'ont jamais abdiqué facilement. Le vainqueur décroche immédiatement sa qualification pour le MSI 2026 et l'Esports World Cup 2026 à Paris. Le perdant conserve néanmoins une seconde chance via le Round 4 du dimanche." }] },
      { type: 'h2', children: [{ text: "Gen.G vs KT : le ticket pour défier le perdant de T1/HLE" }] },
      { type: 'p', children: [{ text: "Samedi 13 juin : Gen.G (3ème en saison régulière) reçoit KT Rolster, qui a déjà sorti DK en cinq maps. Le gagnant affrontera dimanche le perdant du duel T1/HLE pour la seconde qualification au MSI. Une défaite à ce stade signifie l'élimination définitive." }] },
      { type: 'p', children: [{ text: "Dimanche 14 juin : la grande finale entre le perdant de T1/HLE et le vainqueur de Gen.G/KT. Deux équipes, un seul billet pour Daejeon. L'enjeu est total : MSI 2026 (28 juin – 12 juillet) et une place au sein des seize meilleures équipes mondiales." }] },
      { type: 'h2', children: [{ text: "Les enjeux dépassent le seul MSI" }] },
      { type: 'p', children: [{ text: "La première place (vainqueur du match T1/HLE) offre également un slot direct à l'Esports World Cup 2026 à Paris, compétition dotée de 2 millions de dollars pour le seul titre LoL. En 2025, Gen.G avait remporté le titre EWC ; la Corée voudra conserver sa domination sur la scène mondiale." }] },
      { type: 'blockquote', children: [{ text: "Trois jours, trois matches, deux tickets pour Daejeon : la Corée du League of Legends désignera ses champions des 12 au 14 juin à Wonju." }] },
    ],
  },
  {
    title: "LCK Road to MSI 2026 Finals: T1, HLE, Gen.G and KT battle for two MSI spots in Wonju",
    slug: 'lck-road-msi-wonju-finals-preview-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "T1, Hanwha Life Esports, Gen.G, and KT Rolster head to Wonju from June 12-14 to determine Korea's two representatives at MSI 2026.",
    sourceUrl: 'https://lolesports.com/en-US/tournament/115548128960088078/stage/115548128961398800',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'LCK' }, { tag: 'MSI 2026' }],
    content: [
      { type: 'p', children: [{ text: "The LCK Road to MSI 2026 enters its final stage. After two online rounds on June 6-7 — Dplus KIA eliminated BRION 3-0 before KT Rolster turned the tables on DK 3-2 in five maps — four teams remain alive to claim one of two spots representing Korea at the 2026 Mid-Season Invitational in Daejeon." }] },
      { type: 'h2', children: [{ text: "Three matches over three days at Wonju DB Promi Arena" }] },
      { type: 'p', children: [{ text: "Rounds 3, 4, and the Grand Final will be held at the Wonju DB Promi Arena from June 12-14. All matches are best-of-five, and the atmosphere is expected to be electric in this 8,000-seat arena in Gangwon-do." }] },
      { type: 'p', children: [{ text: "Friday June 12: T1 vs Hanwha Life Esports for the first seed. HLE finished top of the regular season and enters with a slight edge on paper, but T1 and Faker are never easy to beat. The winner qualifies immediately for MSI 2026 and EWC 2026 in Paris. The loser still has a second chance in the Round 4 match on Sunday." }] },
      { type: 'h2', children: [{ text: "Gen.G vs KT Rolster: the right to challenge the T1/HLE loser" }] },
      { type: 'p', children: [{ text: "Saturday June 13: Gen.G (3rd in the regular season) faces KT Rolster, who already defeated DK in a tense five-game series. The winner will face the loser of T1/HLE on Sunday for the second MSI spot. A defeat here ends a team's Road to MSI run entirely." }] },
      { type: 'p', children: [{ text: "Sunday June 14: The Grand Final between the T1/HLE loser and the Gen.G/KT winner. Two teams, one ticket to Daejeon. MSI 2026 runs from June 28 to July 12 and will bring together eleven of the world's best teams on home Korean soil." }] },
      { type: 'h2', children: [{ text: "Stakes beyond MSI: EWC 2026 on the line too" }] },
      { type: 'p', children: [{ text: "The first seed from the T1/HLE match also earns a direct slot at the Esports World Cup 2026 in Paris, which carries a $2 million prize pool for the LoL title alone. Defending EWC champion Gen.G will be looking to make it back to Paris — but they must first get through KT on Saturday." }] },
      { type: 'blockquote', children: [{ text: "Three days, three matches, two tickets to Daejeon: Korean League of Legends decides its champions June 12-14 in Wonju." }] },
    ],
  },
  {
    title: "LCK Road to MSI 2026: T1, HLE, Gen.G y KT se disputan dos plazas para MSI en Wonju",
    slug: 'lck-road-msi-wonju-finals-preview-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "T1, Hanwha Life Esports, Gen.G y KT Rolster se reúnen en Wonju del 12 al 14 de junio para decidir los dos representantes de la LCK en el MSI 2026.",
    sourceUrl: 'https://lolesports.com/en-US/tournament/115548128960088078/stage/115548128961398800',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'LCK' }, { tag: 'MSI 2026' }],
    content: [
      { type: 'p', children: [{ text: "El LCK Road to MSI 2026 entra en su fase definitiva. Tras dos rondas online celebradas los días 6 y 7 de junio — Dplus KIA eliminó a BRION 3-0 y luego KT Rolster remontó ante DK 3-2 en cinco mapas — cuatro equipos siguen vivos para conseguir una de las dos plazas que representarán a Corea en el Mid-Season Invitational 2026 en Daejeon." }] },
      { type: 'h2', children: [{ text: "Tres partidos en tres días en el Wonju DB Promi Arena" }] },
      { type: 'p', children: [{ text: "Las Rondas 3, 4 y la Gran Final se disputarán en el Wonju DB Promi Arena del 12 al 14 de junio. Todos los enfrentamientos son al mejor de cinco partidas, y se espera un ambiente electrizante en este recinto de 8.000 asientos en la provincia de Gangwon-do." }] },
      { type: 'p', children: [{ text: "Viernes 12 de junio: T1 vs Hanwha Life Esports por la primera plaza. HLE terminó primero en la temporada regular y llega con una ligera ventaja sobre el papel, pero T1 y Faker nunca se rinden fácilmente. El ganador se clasifica de inmediato para el MSI 2026 y el EWC 2026 en París. El perdedor conserva una segunda oportunidad el domingo en la Ronda 4." }] },
      { type: 'h2', children: [{ text: "Gen.G vs KT Rolster: el derecho a desafiar al perdedor de T1/HLE" }] },
      { type: 'p', children: [{ text: "Sábado 13 de junio: Gen.G (3er clasificado en la temporada regular) se enfrenta a KT Rolster, que ya eliminó a DK en una tensa serie de cinco partidas. El ganador se medirá al domingo al perdedor de T1/HLE por la segunda plaza del MSI. Una derrota aquí supone la eliminación definitiva." }] },
      { type: 'p', children: [{ text: "Domingo 14 de junio: la Gran Final entre el perdedor de T1/HLE y el ganador de Gen.G/KT. Dos equipos, un único billete para Daejeon. El MSI 2026 se celebra del 28 de junio al 12 de julio y reunirá a once de los mejores equipos del mundo en suelo coreano." }] },
      { type: 'h2', children: [{ text: "Más allá del MSI: el EWC 2026 también en juego" }] },
      { type: 'p', children: [{ text: "La primera plaza del partido T1/HLE garantiza además un puesto directo en el Esports World Cup 2026 en París, que cuenta con un prize pool de 2 millones de dólares solo para el título de LoL. Gen.G, campeón del EWC 2025, querrá volver a París, pero primero deberá superar a KT el sábado." }] },
      { type: 'blockquote', children: [{ text: "Tres días, tres partidos, dos billetes para Daejeon: el League of Legends coreano designa a sus campeones del 12 al 14 de junio en Wonju." }] },
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
