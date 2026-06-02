import type { MigrationModule } from './runner'

export const id = '086-other-lcs-spring-2026-playoffs-lb-r1'
export const description = 'Autres Régions — LCS Spring 2026 Playoffs lower bracket R1 : FlyQuest 3-0 SEN, Team Liquid 3-0 SR'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-02T08:00:00.000Z'

const articles = [
  {
    title: "LCS Spring 2026 Playoffs : FlyQuest et Team Liquid écrasent leurs adversaires au premier tour du lower bracket",
    slug: 'lcs-spring-2026-playoffs-lb-r1-fly-tl-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/qvzuPtwP-5g/maxresdefault.jpg',
    excerpt: "FlyQuest et Team Liquid ont tous les deux balayé leurs adversaires 3-0 lors du premier tour du lower bracket des LCS Spring Playoffs 2026.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcs',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'LCS' }],
    content: [
      { type: 'p', children: [{ text: "Le week-end du 30 au 31 mai 2026 a vu s'ouvrir le premier tour du lower bracket des LCS Spring Playoffs avec éclat. FlyQuest et Team Liquid ont chacun remporté leur série 3-0, confirmant leur statut de sérieux prétendants au titre nord-américain et à la qualification pour le MSI 2026." }] },
      { type: 'h2', children: [{ text: "FlyQuest étrille Sentinels 3-0" }] },
      { type: 'p', children: [{ text: "Le 30 mai, FlyQuest a rapidement mis fin aux ambitions de Sentinels en s'imposant en trois manches consécutives. Portée par un jeu collectif parfaitement rodé et une supériorité en vision du jeu, l'équipe a pris le contrôle de chaque partie dès les premières minutes. Sentinels, pourtant qualifiés pour les playoffs avec de bonnes performances en saison régulière, n'ont jamais trouvé les ressources pour inverser la tendance. FlyQuest s'avance ainsi en demi-finale du lower bracket, la tête haute et confiant pour la suite." }] },
      { type: 'h2', children: [{ text: "Team Liquid blanchit Shopify Rebellion" }] },
      { type: 'p', children: [{ text: "Le lendemain, le 31 mai, Team Liquid a répliqué avec une performance tout aussi impressionnante. Opposés à Shopify Rebellion, les Liquid ont livré une série de haut niveau en remportant les trois manches sans jamais trembler. Leur discipline tactique et leur capacité à exécuter les objectifs clés de façon quasi chirurgicale ont rendu la tâche insurmontable pour Shopify Rebellion, désormais éliminés. Team Liquid rejoint FlyQuest en demi-finale du lower bracket." }] },
      { type: 'h2', children: [{ text: "La suite : C9 vs LYON et FlyQuest vs Team Liquid" }] },
      { type: 'p', children: [{ text: "Les playoffs entrent désormais dans leur phase la plus intense. Le 6 juin, Cloud9 et LYON s'affronteront pour la finale de l'upper bracket dans un choc qui s'annonce épique entre les deux équipes les plus dominantes de la saison. Le 7 juin, FlyQuest et Team Liquid se disputeront leur place en finale du lower bracket. La grande finale des LCS Spring 2026 est programmée les 13 et 14 juin à la Mullett Arena d'Arizona State University à Tempe, Arizona. Le champion décrochera une qualification directe pour le MSI 2026 et représentera l'Amérique du Nord sur la scène internationale." }] },
      { type: 'blockquote', children: [{ text: "Avec FlyQuest et Team Liquid qui avancent en demi-finale et la grande finale de l'upper bracket entre Cloud9 et LYON qui approche, les LCS Spring Playoffs 2026 promettent une fin de compétition explosive à Tempe." }] },
    ],
  },
  {
    title: "LCS Spring 2026 Playoffs: FlyQuest and Team Liquid sweep through lower bracket round one",
    slug: 'lcs-spring-2026-playoffs-lb-r1-fly-tl-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/qvzuPtwP-5g/maxresdefault.jpg',
    excerpt: "FlyQuest and Team Liquid both swept their opponents 3-0 in the lower bracket quarterfinals of the LCS Spring 2026 Playoffs.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcs',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'LCS' }],
    content: [
      { type: 'p', children: [{ text: "The opening weekend of the LCS Spring 2026 Playoffs lower bracket delivered two dominant performances from North America's strongest contenders. On May 30 and 31 respectively, FlyQuest and Team Liquid both claimed commanding 3-0 victories, advancing to the lower bracket semifinals and keeping their championship aspirations very much alive." }] },
      { type: 'h2', children: [{ text: "FlyQuest sweeps Sentinels 3-0" }] },
      { type: 'p', children: [{ text: "On May 30, FlyQuest dismantled Sentinels in convincing fashion, claiming a clean sweep in the lower bracket quarterfinals. FlyQuest demonstrated cohesive teamplay and superior macro decision-making throughout all three games, controlling the pace from the earliest stages of each match. Sentinels, despite their strong showing during the regular season, were unable to find consistent answers to FlyQuest's aggressive and well-structured approach. With Sentinels now eliminated, FlyQuest move on full of confidence to face Team Liquid in the lower bracket semifinals on June 7." }] },
      { type: 'h2', children: [{ text: "Team Liquid blanks Shopify Rebellion 3-0" }] },
      { type: 'p', children: [{ text: "The following day on May 31, Team Liquid completed an equally dominant 3-0 sweep against Shopify Rebellion. Liquid's disciplined playstyle and clinical objective execution left Shopify Rebellion with no way back across the entire series. Not a single game was close enough to give Rebellion hope of mounting a comeback. With this result, Shopify Rebellion are eliminated from the competition while Team Liquid advance as one of the favourites heading into the lower bracket semifinal stage." }] },
      { type: 'h2', children: [{ text: "What's next: Cloud9 vs LYON and FlyQuest vs Team Liquid" }] },
      { type: 'p', children: [{ text: "The LCS playoffs now move into their most decisive stretch. On June 6, Cloud9 will take on LYON in a highly anticipated upper bracket final between the two dominant forces of the 2026 Spring Split. On June 7, FlyQuest and Team Liquid will collide in the lower bracket semifinal to determine who advances to the lower bracket final on June 13. The LCS Spring 2026 Grand Final is set for June 13-14 at the Mullett Arena at Arizona State University in Tempe, Arizona, with the champion earning a direct qualification spot to MSI 2026 as North America's representative on the world stage." }] },
      { type: 'blockquote', children: [{ text: "With FlyQuest and Team Liquid advancing and a blockbuster Cloud9 vs LYON upper bracket final on the horizon, the LCS Spring 2026 Playoffs are building to a thrilling conclusion at the Mullett Arena in Tempe." }] },
    ],
  },
  {
    title: "Playoffs LCS Spring 2026: FlyQuest y Team Liquid arrasan en la primera ronda del lower bracket",
    slug: 'lcs-spring-2026-playoffs-lb-r1-fly-tl-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/qvzuPtwP-5g/maxresdefault.jpg',
    excerpt: "FlyQuest y Team Liquid barrieron 3-0 a sus rivales en los cuartos de final del lower bracket de los Playoffs LCS Spring 2026.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcs',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'LCS' }],
    content: [
      { type: 'p', children: [{ text: "El fin de semana del 30 y 31 de mayo de 2026 ofreció dos actuaciones dominantes en los cuartos de final del lower bracket de los Playoffs LCS Spring 2026. FlyQuest y Team Liquid ganaron sus respectivas series por un contundente 3-0, demostrando que son las fuerzas más sólidas de Norteamérica en este momento clave de la temporada." }] },
      { type: 'h2', children: [{ text: "FlyQuest arrasa con Sentinels 3-0" }] },
      { type: 'p', children: [{ text: "El 30 de mayo, FlyQuest barrió a Sentinels con un perfecto 3-0 en los cuartos de final del lower bracket. Con un juego de equipo impecable y una toma de decisiones macro muy superior, FlyQuest controló el ritmo de los tres partidos desde el inicio hasta el final. Sentinels, pese a su buen rendimiento en la fase regular, no encontraron la manera de plantarle cara al esquema de juego de sus rivales. Con esta derrota, Sentinels quedan eliminados de los playoffs, mientras que FlyQuest avanzan con confianza a las semifinales del lower bracket." }] },
      { type: 'h2', children: [{ text: "Team Liquid derrota a Shopify Rebellion 3-0" }] },
      { type: 'p', children: [{ text: "Al día siguiente, el 31 de mayo, Team Liquid repitió la hazaña al eliminar a Shopify Rebellion sin ceder ni un mapa. Los Liquid mostraron una disciplina táctica sobresaliente y una ejecución de objetivos impecable a lo largo de toda la serie, sin dar ninguna oportunidad de reacción a sus rivales. Shopify Rebellion queda eliminado de la competición y Team Liquid se convierte en otro de los grandes favoritos de cara a las rondas finales del lower bracket." }] },
      { type: 'h2', children: [{ text: "Lo que viene: Cloud9 vs LYON y FlyQuest vs Team Liquid" }] },
      { type: 'p', children: [{ text: "Los playoffs de la LCS Spring 2026 entran ahora en su recta final. El 6 de junio, Cloud9 y LYON se enfrentarán en la gran final del upper bracket, una eliminatoria esperadísima entre los dos equipos más dominantes de la temporada. El 7 de junio, FlyQuest y Team Liquid disputarán las semifinales del lower bracket para decidir quién avanza a la gran final del 13 y 14 de junio en el Mullett Arena de la Universidad Estatal de Arizona en Tempe, Arizona. El campeón obtendrá la clasificación directa para el MSI 2026 y representará a Norteamérica en el escenario global." }] },
      { type: 'blockquote', children: [{ text: "Con FlyQuest y Team Liquid avanzando y la gran final del upper bracket entre Cloud9 y LYON a punto de disputarse, los Playoffs LCS Spring 2026 prometen una recta final de infarto en la Mullett Arena de Tempe." }] },
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
