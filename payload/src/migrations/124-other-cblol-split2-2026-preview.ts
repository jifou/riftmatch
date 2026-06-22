import type { MigrationModule } from './runner'

export const id = '124-other-cblol-split2-2026-preview'
export const description = 'Autres Régions — CBLOL Split 2 2026 : preview, 8 équipes, début le 30 juin, qualifs Worlds en jeu'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-22T08:00:00.000Z'

const articles = [
  {
    title: "CBLOL Split 2 2026 : FURIA championne en titre à l'assaut du ticket pour les Worlds",
    slug: 'cblol-split2-2026-preview-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/LX5WzaEhEIk/maxresdefault.jpg',
    excerpt: "Le CBLOL Split 2 2026 démarre le 30 juin au Riot Games Arena de São Paulo. Huit équipes se disputent le dernier titre de la saison brésilienne, avec en jeu une qualification directe pour les Worlds 2026.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/cblol-brazil',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'CBLOL' }, { tag: 'Brésil' }],
    content: [
      { type: 'p', children: [{ text: "Le Campeonato Brasileiro de League of Legends reprend ses droits le 30 juin 2026. Après la victoire de FURIA au Split 1 (3-1 contre LOS Grandes en Grande Finale), les huit équipes brésiliennes se retrouvent au Riot Games Arena de São Paulo pour un deuxième acte décisif. Cette fois, l'enjeu dépasse le simple titre régional : le vainqueur du Split 2 décrochera un billet direct pour les Worlds 2026, la plus grande scène mondiale du League of Legends compétitif." }] },
      { type: 'h2', children: [{ text: "Huit équipes, une ambition : les Mondiaux" }] },
      { type: 'p', children: [{ text: "Le plateau est identique à celui du Split 1 : Fluxo W7M, FURIA, Keyd Stars, LOUD, paiN Gaming, RED Canids, Leviatán et LOS Grandes. La formule reste également inchangée, avec un tour unique en round-robin (toutes les rencontres en BO3), puis un double-elimination en BO5 pour les six meilleures équipes. Les résultats du Split 2 seront également cumulés avec ceux du Split 1 pour l'attribution des points de championnat, qui serviront à départager les équipes à égalité dans la course aux Worlds." }] },
      { type: 'h2', children: [{ text: "FURIA, favorite logique mais jamais assurée" }] },
      { type: 'p', children: [{ text: "Championne en titre, FURIA aborde le Split 2 avec l'avantage psychologique, mais les autres équipes ont eu le temps d'analyser leurs défauts. LOUD et paiN Gaming sont attendues en sérieuses prétendantes au titre, tandis que RED Canids, éliminée dès les demi-finales du Split 1, voudra se racheter. Leviatán, la franchise d'Amérique latine intégrée à la compétition, constitue toujours un adversaire dangereux malgré ses résultats mitigés lors de la première étape de la saison." }] },
      { type: 'p', children: [{ text: "Le CBLOL reste la ligue la plus regardée d'Amérique latine et représente la fierté de l'esport brésilien sur la scène internationale. Avec les Worlds 2026 en ligne de mire, chaque BO3 de cet été prendra une saveur particulière. Rendez-vous le 30 juin pour le coup d'envoi." }] },
      { type: 'blockquote', children: [{ text: "CBLOL Split 2 : le 30 juin au Riot Games Arena de São Paulo — 8 équipes, un seul ticket pour les Worlds 2026." }] },
    ],
  },
  {
    title: "CBLOL Split 2 2026 Preview: Defending Champion FURIA Leads the Charge for Worlds",
    slug: 'cblol-split2-2026-preview-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/LX5WzaEhEIk/maxresdefault.jpg',
    excerpt: "CBLOL Split 2 2026 kicks off on June 30 at the Riot Games Arena in São Paulo. Eight teams battle for the final Brazilian title of the year, with a direct spot at the 2026 World Championship on the line.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/cblol-brazil',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'CBLOL' }, { tag: 'Brazil' }],
    content: [
      { type: 'p', children: [{ text: "Brazil's premier League of Legends competition returns on June 30, 2026. Following FURIA's dominant Split 1 victory — a 3-1 Grand Final win over LOS Grandes — all eight CBLOL franchises reconvene at the Riot Games Arena in São Paulo for the most important stretch of the Brazilian season. The stakes couldn't be higher: the Split 2 champion earns a direct berth at the 2026 World Championship, the pinnacle of global competitive League of Legends." }] },
      { type: 'h2', children: [{ text: "Same Eight Teams, Higher Stakes" }] },
      { type: 'p', children: [{ text: "The roster of competing organisations is unchanged from Split 1: Fluxo W7M, FURIA, Keyd Stars, LOUD, paiN Gaming, RED Canids, Leviatán, and LOS Grandes. The format also carries over — a single round-robin regular season played in best-of-three series, followed by a double-elimination best-of-five playoff bracket for the top six teams. Crucially, championship points from both splits will be combined, meaning every match in the regular season carries weight beyond just playoff seeding." }] },
      { type: 'h2', children: [{ text: "FURIA the Favourite, But Far From Safe" }] },
      { type: 'p', children: [{ text: "As reigning champions, FURIA enter Split 2 with momentum on their side. However, rivals have had months to study their playstyle. LOUD and paiN Gaming look to be the strongest challengers, while RED Canids — knocked out in the Split 1 semifinals — will be hungry for redemption. Leviatán, the Latin American guest franchise, remains a wildcard after a solid if ultimately disappointing first split." }] },
      { type: 'p', children: [{ text: "The CBLOL remains the most-watched esports league in Latin America and one of the most passionate fan bases in the world. With a Worlds ticket directly on the line, every best-of-three this summer carries enormous weight. The action starts June 30 — do not miss it." }] },
      { type: 'blockquote', children: [{ text: "CBLOL Split 2 begins June 30 at the Riot Games Arena in São Paulo — eight teams, one ticket to Worlds 2026." }] },
    ],
  },
  {
    title: "CBLOL Split 2 2026 Preview: FURIA defenderá el título con los Worlds 2026 en juego",
    slug: 'cblol-split2-2026-preview-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/LX5WzaEhEIk/maxresdefault.jpg',
    excerpt: "El CBLOL Split 2 2026 arranca el 30 de junio en el Riot Games Arena de São Paulo. Ocho equipos se disputarán el último título de la temporada brasileña, con una clasificación directa a los Worlds 2026 en juego.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/cblol-brazil',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'CBLOL' }, { tag: 'Brasil' }],
    content: [
      { type: 'p', children: [{ text: "El Campeonato Brasileño de League of Legends regresa el 30 de junio de 2026. Tras la victoria de FURIA en el Split 1 —un triunfo 3-1 sobre LOS Grandes en la Gran Final— las ocho franquicias del CBLOL vuelven al Riot Games Arena de São Paulo para el tramo más importante de la temporada. Lo que está en juego no podría ser más alto: el campeón del Split 2 obtendrá un cupo directo a los Worlds 2026, la máxima cita del League of Legends competitivo a nivel mundial." }] },
      { type: 'h2', children: [{ text: "Los mismos ocho equipos, las mayores apuestas" }] },
      { type: 'p', children: [{ text: "El elenco de equipos participantes no cambia respecto al Split 1: Fluxo W7M, FURIA, Keyd Stars, LOUD, paiN Gaming, RED Canids, Leviatán y LOS Grandes. El formato también se mantiene: una fase regular de round-robin simple en BO3, seguida de un bracket de playoffs de doble eliminación en BO5 para los seis mejores clasificados. Los puntos de campeonato de ambos splits se acumularán, por lo que cada partido de la fase regular tiene importancia más allá del simple seeding de playoffs." }] },
      { type: 'h2', children: [{ text: "FURIA, favorita pero no invencible" }] },
      { type: 'p', children: [{ text: "Como campeonas defensoras, FURIA llegan al Split 2 con el viento a favor. Sin embargo, sus rivales han tenido meses para analizar su estilo de juego. LOUD y paiN Gaming se perfilan como los principales aspirantes al título, mientras que RED Canids —eliminados en semifinales del Split 1— querrán tomarse la revancha. Leviatán, la franquicia invitada de América Latina, sigue siendo un rival imprevisible tras un primer split con luces y sombras." }] },
      { type: 'p', children: [{ text: "El CBLOL sigue siendo la liga de esports más vista en Latinoamérica y cuenta con una de las bases de fans más apasionadas del mundo. Con un cupo a Worlds en juego directamente, cada BO3 de este verano tendrá un peso enorme. El evento comienza el 30 de junio — no te lo pierdas." }] },
      { type: 'blockquote', children: [{ text: "CBLOL Split 2 comienza el 30 de junio en el Riot Games Arena de São Paulo — ocho equipos, un ticket para los Worlds 2026." }] },
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
