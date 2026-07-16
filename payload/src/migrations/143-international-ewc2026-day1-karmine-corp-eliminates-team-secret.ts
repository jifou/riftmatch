import type { MigrationModule } from './runner'

export const id = '143-international-ewc2026-day1-karmine-corp-eliminates-team-secret'
export const description = "EWC 2026 — Karmine Corp élimine Team Secret dès le jour 1, T1, BLG, G2 et Hanwha Life valident leur entrée à Paris"

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-07-16T08:00:00.000Z'

const articles = [
  {
    title: "EWC 2026 : Karmine Corp élimine Team Secret dès le jour 1, T1, BLG, G2 et Hanwha Life valident leur entrée à Paris",
    slug: 'ewc2026-day1-karmine-corp-eliminates-team-secret-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "La phase de groupes du League of Legends à l'Esports World Cup 2026 a démarré le 15 juillet à Paris Expo Porte de Versailles. Gen.G a ouvert son bal en champion en titre face à Karmine Corp, qui a ensuite éliminé Team Secret 2-1 en bracket inférieur, tandis que T1, Bilibili Gaming, G2 Esports et Hanwha Life Esports validaient leur billet pour les finales de groupe du 16 juillet.",
    sourceUrl: 'https://esportsworldcup.com/en/competitions/2026/league-of-legends',
    tags: [{ tag: 'EWC 2026' }, { tag: 'Karmine Corp' }, { tag: 'T1' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "L'Esports World Cup 2026 a lancé sa compétition League of Legends le 15 juillet à Paris Expo Porte de Versailles, réunissant 16 équipes pour se disputer une part d'une cagnotte de 2 000 000 de dollars. La phase de groupes s'étale sur deux jours, du 15 au 16 juillet, avant les quarts de finale le 17, les demi-finales le 18 et la grande finale le 19." }] },
      { type: 'h2', children: [{ text: "Gen.G ouvre en champion, Karmine Corp élimine Team Secret" }] },
      { type: 'p', children: [{ text: "Dans le groupe B, Gen.G, tenant du titre EWC, a lancé sa défense de couronne en s'imposant face à Karmine Corp en seulement 28 minutes lors du match d'ouverture du tournoi. Basculée en bracket inférieur, la formation française s'est ensuite reprise pour éliminer Team Secret 2-1 dans une série décisive, envoyant les Néerlandais à une 13e-16e place et hors compétition. Karmine Corp, portée par son public parisien, poursuit l'aventure avec l'ambition de devenir la première équipe française à performer sur la scène mondiale du jeu." }] },
      { type: 'h2', children: [{ text: "T1 et Bilibili Gaming se donnent rendez-vous en finale de groupe" }] },
      { type: 'p', children: [{ text: "Dans le groupe C, T1 a dominé GAM Esports tandis que Bilibili Gaming s'imposait face à Movistar KOI, qualifiant les deux formations pour la finale de bracket supérieur du groupe le 16 juillet. Ce duel T1-BLG sera suivi de près : Bilibili Gaming avait déjà éliminé les Coréens en cinq manches lors du bracket du MSI 2026 début juillet, et T1 cherchera sa revanche pour valider directement sa place en quarts de finale." }] },
      { type: 'h2', children: [{ text: "G2, AG.AL et Hanwha Life complètent le tableau" }] },
      { type: 'p', children: [{ text: "Dans le groupe A, G2 Esports a battu FURIA tandis qu'AG.AL International créait la surprise face à Dplus KIA, envoyant les deux formations en finale de groupe. Dans le groupe D, Hanwha Life Esports, sacrée championne du MSI 2026, a dominé MIBR.LOS pour composer avec JD Gaming la finale de bracket supérieur, tandis que MIBR.LOS affrontera LYON en match d'élimination." }] },
      { type: 'blockquote', children: [{ text: "Huit places en quarts de finale restent à distribuer à l'issue de la journée du 16 juillet, avant que l'Esports World Cup 2026 n'entre dans sa phase à élimination directe jusqu'à la grande finale du 19 juillet." }] },
    ],
  },
  {
    title: "EWC 2026: Karmine Corp Eliminate Team Secret on Day 1, T1, BLG, G2 and Hanwha Life Advance in Paris",
    slug: 'ewc2026-day1-karmine-corp-eliminates-team-secret-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "The Esports World Cup 2026 League of Legends group stage kicked off on July 15 at Paris Expo Porte de Versailles. Defending champion Gen.G opened with a win over Karmine Corp, who bounced back to eliminate Team Secret 2-1 in the lower bracket, while T1, Bilibili Gaming, G2 Esports and Hanwha Life Esports all booked their spots in the July 16 group finals.",
    sourceUrl: 'https://esportsworldcup.com/en/competitions/2026/league-of-legends',
    tags: [{ tag: 'EWC 2026' }, { tag: 'Karmine Corp' }, { tag: 'T1' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "The Esports World Cup 2026 League of Legends competition launched on July 15 at Paris Expo Porte de Versailles, bringing together 16 teams to fight for a share of a $2,000,000 prize pool. The group stage runs over two days, July 15-16, ahead of quarterfinals on the 17th, semifinals on the 18th, and the grand final on the 19th." }] },
      { type: 'h2', children: [{ text: "Gen.G open as champions, Karmine Corp eliminate Team Secret" }] },
      { type: 'p', children: [{ text: "In Group B, defending EWC champion Gen.G began their title defense with a win over Karmine Corp in just 28 minutes in the tournament's opening match. Dropped to the lower bracket, the French squad regrouped to eliminate Team Secret 2-1 in a decisive series, sending the Dutch org to a 13th-16th place finish and out of the tournament. Backed by their home crowd in Paris, Karmine Corp push on with a chance to become the first French team to make a real mark on the international LoL stage." }] },
      { type: 'h2', children: [{ text: "T1 and Bilibili Gaming set up a group final rematch" }] },
      { type: 'p', children: [{ text: "In Group C, T1 dominated GAM Esports while Bilibili Gaming defeated Movistar KOI, sending both teams to the group's upper bracket final on July 16. The T1-BLG clash will draw plenty of attention: Bilibili Gaming already eliminated the Koreans in a five-game series during the MSI 2026 bracket stage earlier this month, and T1 will be looking for revenge and a direct ticket to the quarterfinals." }] },
      { type: 'h2', children: [{ text: "G2, AG.AL and Hanwha Life round out the field" }] },
      { type: 'p', children: [{ text: "In Group A, G2 Esports beat FURIA while AG.AL International pulled off an upset over Dplus KIA, sending both teams into the group final. In Group D, MSI 2026 champions Hanwha Life Esports defeated MIBR.LOS and will face JD Gaming in the upper bracket final, while MIBR.LOS will battle LYON in an elimination match." }] },
      { type: 'blockquote', children: [{ text: "Eight quarterfinal spots remain up for grabs after the July 16 group finals, before the Esports World Cup 2026 moves into single elimination through to the July 19 grand final." }] },
    ],
  },
  {
    title: "EWC 2026: Karmine Corp elimina a Team Secret en el dia 1, T1, BLG, G2 y Hanwha Life avanzan en Paris",
    slug: 'ewc2026-day1-karmine-corp-eliminates-team-secret-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "La fase de grupos de League of Legends en la Esports World Cup 2026 arranco el 15 de julio en Paris Expo Porte de Versailles. El campeon defensor Gen.G abrio con una victoria ante Karmine Corp, que luego elimino a Team Secret 2-1 en el bracket inferior, mientras T1, Bilibili Gaming, G2 Esports y Hanwha Life Esports aseguraban su lugar en las finales de grupo del 16 de julio.",
    sourceUrl: 'https://esportsworldcup.com/en/competitions/2026/league-of-legends',
    tags: [{ tag: 'EWC 2026' }, { tag: 'Karmine Corp' }, { tag: 'T1' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "La competicion de League of Legends de la Esports World Cup 2026 comenzo el 15 de julio en Paris Expo Porte de Versailles, reuniendo a 16 equipos que se reparten una bolsa de premios de 2.000.000 de dolares. La fase de grupos se disputa en dos dias, 15 y 16 de julio, antes de los cuartos de final el 17, las semifinales el 18 y la gran final el 19." }] },
      { type: 'h2', children: [{ text: "Gen.G abre como campeon, Karmine Corp elimina a Team Secret" }] },
      { type: 'p', children: [{ text: "En el grupo B, el campeon defensor Gen.G inicio la defensa de su titulo con una victoria ante Karmine Corp en apenas 28 minutos en el partido inaugural del torneo. Caido al bracket inferior, el equipo frances se rehizo para eliminar a Team Secret 2-1 en una serie decisiva, dejando a los neerlandeses en el puesto 13-16 y fuera del torneo. Con el apoyo de su publico parisino, Karmine Corp continua su camino con la ambicion de convertirse en el primer equipo frances en dejar huella en la escena internacional." }] },
      { type: 'h2', children: [{ text: "T1 y Bilibili Gaming se citan en la final de grupo" }] },
      { type: 'p', children: [{ text: "En el grupo C, T1 domino a GAM Esports mientras Bilibili Gaming vencia a Movistar KOI, clasificando a ambos equipos a la final de bracket superior del grupo el 16 de julio. El cruce T1-BLG llamara la atencion: Bilibili Gaming ya habia eliminado a los coreanos en una serie a cinco partidas durante el bracket del MSI 2026 a principios de mes, y T1 buscara la revancha y un billete directo a cuartos de final." }] },
      { type: 'h2', children: [{ text: "G2, AG.AL y Hanwha Life completan el cuadro" }] },
      { type: 'p', children: [{ text: "En el grupo A, G2 Esports vencio a FURIA mientras AG.AL International daba la sorpresa ante Dplus KIA, enviando a ambos equipos a la final de grupo. En el grupo D, el campeon del MSI 2026, Hanwha Life Esports, derroto a MIBR.LOS y se vera las caras con JD Gaming en la final de bracket superior, mientras MIBR.LOS se enfrentara a LYON en un partido de eliminacion." }] },
      { type: 'blockquote', children: [{ text: "Quedan ocho plazas de cuartos de final por definir tras las finales de grupo del 16 de julio, antes de que la Esports World Cup 2026 entre en su fase de eliminacion directa hasta la gran final del 19 de julio." }] },
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
