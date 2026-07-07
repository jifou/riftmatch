import type { MigrationModule } from './runner'

export const id = '141-international-msi2026-bracket-round2'
export const description = "MSI 2026 — T1 balaie FURIA 3-0 et affrontera G2, BLG écrase LYON 3-0 et rejoint la finale du bracket supérieur face à Hanwha Life"

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-07-07T08:00:00.000Z'

const articles = [
  {
    title: "MSI 2026 : T1 balaie FURIA 3-0 et affrontera G2, BLG écrase LYON 3-0 et file en finale du bracket supérieur face à Hanwha Life",
    slug: 'msi2026-bracket-round2-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/mVJLXnBzl-M/maxresdefault.jpg',
    excerpt: "Le 6 juillet au Daejeon Convention Center, T1 a éliminé FURIA 3-0 pour rester en vie en bracket inférieur du MSI 2026 et affrontera G2 Esports, pendant que Bilibili Gaming balayait LYON 3-0 pour valider sa place en finale du bracket supérieur contre Hanwha Life Esports le 9 juillet.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026/Bracket_Stage',
    tags: [{ tag: 'MSI 2026' }, { tag: 'T1' }, { tag: 'Bilibili Gaming' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "Le Bracket Stage du MSI 2026 a livré son deuxième tour ce 6 juillet au Daejeon Convention Center, avec deux balayages 3-0 qui redessinent la route vers la finale du 12 juillet." }] },
      { type: 'h2', children: [{ text: "T1 se relève et écarte FURIA" }] },
      { type: 'p', children: [{ text: "Encore sonné par sa défaite 3-2 face à BLG, T1 devait réagir en bracket inférieur contre FURIA. La bot lane coréenne a répondu présent : la Caitlyn de Peyz, épaulée par le soutien de Keria, est devenue injouable et a permis aux Coréens de dominer chaque teamfight. La série s'est conclue 3-0, malgré une troisième manche plus disputée où T1 a multiplié les prises de risques sur une composition scalante de FURIA sans jamais craquer." }] },
      { type: 'h2', children: [{ text: "BLG confirme son statut de favori face à LYON" }] },
      { type: 'p', children: [{ text: "Dans le même temps, Bilibili Gaming a validé son ticket pour la finale du bracket supérieur en balayant LYON 3-0. Les Français ont pourtant rendu coup pour coup dans chaque partie, mais BLG n'a jamais laissé la moindre ouverture pour un retour, refermant la série sur un ace complet lors d'un combat pour un dragon." }] },
      { type: 'h2', children: [{ text: "La suite du tableau" }] },
      { type: 'p', children: [{ text: "FURIA quitte le tournoi sans avoir remporté la moindre map, terminant 7e-8e. T1 poursuit sa remontée en bracket inférieur face à G2 Esports pour rester en course vers la finale. Bilibili Gaming affrontera Hanwha Life Esports en finale du bracket supérieur le 9 juillet, avec une place directe en grande finale à la clé. LYON, de son côté, tombe en bracket inférieur où les Français croiseront Team Secret Whales le 8 juillet." }] },
      { type: 'blockquote', children: [{ text: "Deux balayages 3-0 et un tableau qui se resserre : T1 doit désormais enchaîner les remontées pour espérer recroiser BLG, intraitable depuis le début du Bracket Stage." }] },
    ],
  },
  {
    title: "MSI 2026: T1 Sweep FURIA 3-0 to Set Up G2 Clash, BLG Crush LYON 3-0 to Reach Upper Bracket Final Against Hanwha Life",
    slug: 'msi2026-bracket-round2-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/mVJLXnBzl-M/maxresdefault.jpg',
    excerpt: "On July 6 at the Daejeon Convention Center, T1 eliminated FURIA 3-0 to stay alive in the MSI 2026 lower bracket and will face G2 Esports next, while Bilibili Gaming swept LYON 3-0 to lock in a spot in the Upper Bracket Final against Hanwha Life Esports on July 9.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026/Bracket_Stage',
    tags: [{ tag: 'MSI 2026' }, { tag: 'T1' }, { tag: 'Bilibili Gaming' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "MSI 2026's Bracket Stage delivered its second round on July 6 at the Daejeon Convention Center, with two 3-0 sweeps reshaping the road to the July 12 Grand Final." }] },
      { type: 'h2', children: [{ text: "T1 bounce back and dismiss FURIA" }] },
      { type: 'p', children: [{ text: "Still reeling from their 3-2 loss to BLG, T1 needed a response in the lower bracket against FURIA. The Korean bot lane delivered: Peyz's Caitlyn, backed by Keria's support play, became unstoppable and let T1 dominate every teamfight. The series closed out 3-0, though Game 3 was tighter as T1 took repeated risks against a scaling FURIA composition without ever cracking." }] },
      { type: 'h2', children: [{ text: "BLG confirm favorite status against LYON" }] },
      { type: 'p', children: [{ text: "Meanwhile, Bilibili Gaming punched their ticket to the Upper Bracket Final by sweeping LYON 3-0. The French squad traded blows in every game, but BLG never left an opening for a comeback, closing the series with a clean ace during a dragon fight." }] },
      { type: 'h2', children: [{ text: "What's next" }] },
      { type: 'p', children: [{ text: "FURIA exit the tournament without winning a single map, finishing 7th-8th. T1 continue their lower bracket run against G2 Esports to stay alive. Bilibili Gaming will face Hanwha Life Esports in the Upper Bracket Final on July 9, with a direct Grand Final spot on the line. LYON drop to the lower bracket, where they'll meet Team Secret Whales on July 8." }] },
      { type: 'blockquote', children: [{ text: "Two 3-0 sweeps and a tightening bracket: T1 must now string together comebacks to have any hope of rematching BLG, untouchable since the Bracket Stage began." }] },
    ],
  },
  {
    title: "MSI 2026: T1 barre 3-0 a FURIA y se medira a G2, BLG aplasta 3-0 a LYON y avanza a la final del bracket superior contra Hanwha Life",
    slug: 'msi2026-bracket-round2-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/mVJLXnBzl-M/maxresdefault.jpg',
    excerpt: "El 6 de julio en el Daejeon Convention Center, T1 eliminó a FURIA 3-0 para seguir con vida en el bracket inferior del MSI 2026 y se medira a G2 Esports, mientras Bilibili Gaming barrio 3-0 a LYON para asegurar su lugar en la final del bracket superior ante Hanwha Life Esports el 9 de julio.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026/Bracket_Stage',
    tags: [{ tag: 'MSI 2026' }, { tag: 'T1' }, { tag: 'Bilibili Gaming' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "El Bracket Stage del MSI 2026 vivio su segunda ronda el 6 de julio en el Daejeon Convention Center, con dos barridos 3-0 que redibujan el camino hacia la gran final del 12 de julio." }] },
      { type: 'h2', children: [{ text: "T1 se recupera y elimina a FURIA" }] },
      { type: 'p', children: [{ text: "Todavia golpeado por su derrota 3-2 ante BLG, T1 necesitaba reaccionar en el bracket inferior frente a FURIA. La botlane coreana respondio: la Caitlyn de Peyz, respaldada por el soporte de Keria, se volvio imparable y permitio a los coreanos dominar cada teamfight. La serie se cerro 3-0, aunque el tercer mapa fue mas reñido, con T1 asumiendo riesgos constantes ante una composicion escalante de FURIA sin llegar a ceder." }] },
      { type: 'h2', children: [{ text: "BLG confirma su condicion de favorito ante LYON" }] },
      { type: 'p', children: [{ text: "Mientras tanto, Bilibili Gaming sello su pase a la final del bracket superior barriendo 3-0 a LYON. Los franceses respondieron golpe por golpe en cada partida, pero BLG nunca dejo un resquicio para la remontada, cerrando la serie con un ace completo en una pelea por dragon." }] },
      { type: 'h2', children: [{ text: "Lo que viene" }] },
      { type: 'p', children: [{ text: "FURIA sale del torneo sin ganar un solo mapa, terminando 7mo-8vo. T1 continua su camino en el bracket inferior frente a G2 Esports para seguir con vida. Bilibili Gaming se enfrentara a Hanwha Life Esports en la final del bracket superior el 9 de julio, con un cupo directo a la gran final en juego. LYON cae al bracket inferior, donde se vera con Team Secret Whales el 8 de julio." }] },
      { type: 'blockquote', children: [{ text: "Dos barridos 3-0 y un cuadro que se estrecha: T1 debe encadenar remontadas para tener alguna chance de reencontrarse con BLG, intratable desde el inicio del Bracket Stage." }] },
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
