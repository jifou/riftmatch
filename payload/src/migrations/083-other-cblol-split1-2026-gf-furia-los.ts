import type { MigrationModule } from './runner'

export const id = '083-other-cblol-split1-2026-gf-furia-los'
export const description = 'Autres Régions — CBLOL 2026 Etapa 1 : Grande Finale FURIA vs LOS Grandes le 6 juin'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-01T08:00:00.000Z'

const articles = [
  {
    title: 'CBLOL 2026 Etapa 1 : FURIA affronte LOS Grandes en Grande Finale le 6 juin',
    slug: 'cblol-2026-split1-gf-furia-los-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "La Grande Finale de la 1ère Etapa du CBLOL 2026 est officiellement confirmée : FURIA affrontera LOS Grandes le samedi 6 juin à São Paulo, avec une place au MSI 2026 en Corée du Sud à la clé.",
    sourceUrl: 'https://lolesports.com/tournament/115565518151768348',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'CBLOL' }, { tag: 'FURIA' }, { tag: 'LOS Grandes' }],
    content: [
      { type: 'p', children: [{ text: "La 1ère Etapa du CBLOL 2026 atteindra son sommet samedi 6 juin : FURIA, dominateur du bracket supérieur, retrouvera LOS Grandes, rescapée miraculeuse du Lower Bracket, pour une Grande Finale au Riot Games Arena de São Paulo. L'enjeu est immense — le champion décrochera la représentation du Brésil au Mid-Season Invitational 2026 en Corée du Sud." }] },
      { type: 'h2', children: [{ text: "FURIA : l'Upper Bracket en maître absolu" }] },
      { type: 'p', children: [{ text: "FURIA a traversé le bracket supérieur sans la moindre faiblesse. Après avoir balayé LOUD 3-0 en demi-finale, la formation a confirmé sa supériorité en s'imposant face à RED Canids Kalunga en finale Upper Bracket, s'offrant ainsi un accès direct à la Grande Finale avec l'avantage du bracket reset. FURIA n'a concédé aucun set dans sa moitié haute du tableau, affichant une maîtrise collective impressionnante et une flexibilité de draft redoutable." }] },
      { type: 'p', children: [{ text: "Le collectif de FURIA repose sur une coordination d'équipe hors pair et une lecture macro du jeu exemplaire. Favori désigné, FURIA aborde cette finale avec la sérénité d'une équipe qui sait qu'elle a déjà accompli l'essentiel : elle n'a qu'une seule série à gagner pour être sacrée championne." }] },
      { type: 'h2', children: [{ text: "LOS Grandes : le parcours du combattant côté Lower Bracket" }] },
      { type: 'p', children: [{ text: "Du côté de LOS Grandes, le chemin vers la Grande Finale a été bien plus tortueux — et bien plus spectaculaire. Le 30 mai, LOS a éliminé Fluxo W7M 3-2 dans une série mémorable marquée par deux renversements de situation, s'imposant dans un game 5 décisif grâce à un engagement victorieux dans la voie du haut conduit par Arckerman. La série avait pourtant mal commencé pour LOS, mais le collectif a su puiser dans ses ressources mentales pour renverser la tendance." }] },
      { type: 'p', children: [{ text: "Le 31 mai, LOS a ensuite affronté RED Canids — relégué dans le Lower Bracket après leur défaite en finale Upper Bracket — et s'est de nouveau imposé pour décrocher sa place en Grande Finale. Ce double exploit face à deux adversaires de premier plan démontre la profondeur et la résilience de LOS Grandes, une équipe qui monte clairement en puissance au fil des semaines." }] },
      { type: 'h2', children: [{ text: "Un duel inédit pour le titre et le MSI 2026" }] },
      { type: 'p', children: [{ text: "FURIA vs LOS Grandes : c'est un choc de styles qui s'annonce. D'un côté, la régularité et la puissance collective de FURIA, qui n'a jamais semblé en danger depuis le début des playoffs. De l'autre, la combativité et la capacité à renverser des séries perdues de LOS, qui arrive en finale avec la confiance de deux victoires arrachées en cinq matchs. LOS devra remporter une première série pour forcer un bracket reset avant d'espérer décrocher le titre." }] },
      { type: 'p', children: [{ text: "Le champion du CBLOL 2026 Etapa 1 représentera le Brésil au Mid-Season Invitational 2026 en Corée du Sud. Le CBLOL bénéficie d'un slot direct depuis l'annonce de l'attribution de slots supplémentaires aux régions secondaires pour Worlds 2026 — une motivation supplémentaire pour les deux équipes." }] },
      { type: 'blockquote', children: [{ text: "Rendez-vous samedi 6 juin au Riot Games Arena de São Paulo pour une Grande Finale qui promet d'être historique : FURIA cherche la perfection, LOS Grandes veut écrire son conte de fées." }] },
    ],
  },
  {
    title: 'CBLOL 2026 Split 1 Grand Final Set: FURIA vs LOS Grandes on June 6',
    slug: 'cblol-2026-split1-gf-furia-los-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "The CBLOL 2026 Split 1 Grand Final is officially confirmed: FURIA will face LOS Grandes on Saturday, June 6 in São Paulo, with a spot at MSI 2026 in South Korea on the line.",
    sourceUrl: 'https://lolesports.com/tournament/115565518151768348',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'CBLOL' }, { tag: 'FURIA' }, { tag: 'LOS Grandes' }],
    content: [
      { type: 'p', children: [{ text: "The CBLOL 2026 Split 1 Grand Final is set. FURIA, who went undefeated through the Upper Bracket, will face Lower Bracket survivor LOS Grandes on Saturday, June 6 at the Riot Games Arena in São Paulo. The stakes could not be higher — the winner earns Brazil's direct slot at the Mid-Season Invitational 2026 in South Korea." }] },
      { type: 'h2', children: [{ text: "FURIA: Flawless Through the Upper Bracket" }] },
      { type: 'p', children: [{ text: "FURIA dominated from start to finish in the upper half of the bracket. After sweeping LOUD 3-0 in the Upper Bracket semifinals, the team continued their momentum and defeated RED Canids Kalunga in the Upper Bracket Final, securing a direct path to the Grand Final. Throughout the playoff run, FURIA conceded not a single series, showcasing exceptional team coordination, elite drafting flexibility, and airtight macro execution." }] },
      { type: 'p', children: [{ text: "Going into the Grand Final, FURIA hold a significant structural advantage: as the upper bracket representative, they only need to win one series to claim the championship, while LOS Grandes must defeat them twice. FURIA arrive as heavy favorites — but also know that LOS has already proved capable of overturning deficits in brutal conditions." }] },
      { type: 'h2', children: [{ text: "LOS Grandes: A Remarkable Lower Bracket Gauntlet" }] },
      { type: 'p', children: [{ text: "LOS Grandes earned their Grand Final spot the hard way. On May 30, they defeated Fluxo W7M 3-2 in a thrilling five-game series that featured two separate momentum swings. After falling behind, LOS clawed back with a game-five performance headlined by Arckerman's decisive engage in the top lane. It was the kind of mental fortitude that defines playoff contenders." }] },
      { type: 'p', children: [{ text: "Then, on May 31, LOS went the distance once more, defeating RED Canids — the heavy favorite who had just fallen from the Upper Bracket — to secure their Grand Final berth. Two back-to-back series victories against two of the strongest rosters in the CBLOL, both requiring nerves of steel. LOS Grandes have shown they are not just a Cinderella story — they are a legitimate championship contender." }] },
      { type: 'h2', children: [{ text: "Grand Final Preview: Styles, Stakes, and the MSI Slot" }] },
      { type: 'p', children: [{ text: "This Grand Final sets up a fascinating clash of identities. FURIA bring methodical precision, superior macro, and the confidence of a team that has never been tested in these playoffs. LOS Grandes bring heart, adaptability, and a proven ability to win under pressure — qualities that can neutralize any opponent in a five-game series." }] },
      { type: 'p', children: [{ text: "Beyond the domestic championship, the winner will represent Brazil at MSI 2026 in South Korea — one of the most prestigious international events in the League of Legends calendar, especially given Brazil's expanded representation at international events this year." }] },
      { type: 'blockquote', children: [{ text: "Saturday, June 6 — Riot Games Arena, São Paulo: FURIA chases perfection, LOS Grandes chases a fairy-tale. One of them will be writing history." }] },
    ],
  },
  {
    title: 'CBLOL 2026 Etapa 1: Gran Final confirmada, FURIA vs LOS Grandes el 6 de junio',
    slug: 'cblol-2026-split1-gf-furia-los-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "La Gran Final de la Etapa 1 del CBLOL 2026 ya está confirmada: FURIA y LOS Grandes se enfrentarán el sábado 6 de junio en São Paulo, con una plaza en el MSI 2026 en Corea del Sur en juego.",
    sourceUrl: 'https://lolesports.com/tournament/115565518151768348',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'CBLOL' }, { tag: 'FURIA' }, { tag: 'LOS Grandes' }],
    content: [
      { type: 'p', children: [{ text: "La Gran Final de la Etapa 1 del CBLOL 2026 ya está decidida. FURIA, invicta en el Upper Bracket, se medirá a LOS Grandes, superviviente del Lower Bracket, el sábado 6 de junio en el Riot Games Arena de São Paulo. El premio en disputa es el más grande de la temporada: la plaza directa de Brasil en el Mid-Season Invitational 2026 en Corea del Sur." }] },
      { type: 'h2', children: [{ text: "FURIA: dominio absoluto en el Upper Bracket" }] },
      { type: 'p', children: [{ text: "FURIA ha completado el Upper Bracket sin conceder una sola derrota en ninguna serie. Tras arrollar a LOUD 3-0 en semifinales, el equipo confirmó su superioridad al eliminar a RED Canids Kalunga en la final del Upper Bracket, ganándose así el acceso directo a la Gran Final con la ventaja del bracket reset. Su juego colectivo, la flexibilidad en el draft y una macro ejecutada con precisión quirúrgica les han convertido en el favorito indiscutible de este torneo." }] },
      { type: 'p', children: [{ text: "La ventaja estructural es clara: FURIA solo necesita ganar una serie para proclamarse campeona, mientras que LOS Grandes deberá vencerles dos veces seguidas. Sin embargo, el equipo sabe que LOS ha demostrado que es capaz de remontar en las peores circunstancias, lo que convierte a este rival en especialmente peligroso." }] },
      { type: 'h2', children: [{ text: "LOS Grandes: un camino épico a través del Lower Bracket" }] },
      { type: 'p', children: [{ text: "LOS Grandes ha llegado a la Gran Final por la vía más dura. El 30 de mayo, eliminaron a Fluxo W7M 3-2 en una serie épica de cinco partidas con dos vueltas de guión espectaculares. LOS remontó la desventaja para cerrar la eliminatoria en el quinto mapa gracias a un engage decisivo de Arckerman en el carril superior, mostrando una capacidad mental de élite bajo presión." }] },
      { type: 'p', children: [{ text: "Al día siguiente, el 31 de mayo, LOS volvió a superar todos los pronósticos al eliminar a RED Canids —caídos del Upper Bracket tras su derrota ante FURIA— y certificar así su presencia en la Gran Final. Dos victorias consecutivas ante dos de los mejores equipos del CBLOL, ambas arrancadas al límite. LOS Grandes no es solo una historia de supervivencia: es un aspirante real al título." }] },
      { type: 'h2', children: [{ text: "Gran Final: dos estilos, un trofeo y la plaza para el MSI" }] },
      { type: 'p', children: [{ text: "El choque entre FURIA y LOS Grandes promete ser un enfrentamiento de estilos opuestos. FURIA representa la regularidad, la disciplina táctica y la confianza de un equipo que nunca ha sido puesto a prueba en estos playoffs. LOS Grandes aporta corazón, adaptabilidad y la capacidad demostrada de ganar cuando más importa, cubriendo un déficit cuando ningún rival se lo espera." }] },
      { type: 'p', children: [{ text: "Más allá del campeonato nacional, el ganador representará a Brasil en el MSI 2026 en Corea del Sur, uno de los eventos internacionales más prestigiosos del calendario de League of Legends. Con la mayor representación internacional para las ligas secundarias anunciada para este año, el CBLOL tiene más peso que nunca en el panorama global." }] },
      { type: 'blockquote', children: [{ text: "Sábado 6 de junio, Riot Games Arena, São Paulo: FURIA busca la perfección, LOS Grandes escribe su cuento de hadas. Solo uno podrá alzar el trofeo." }] },
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
