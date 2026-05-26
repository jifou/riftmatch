import type { MigrationModule } from './runner'

export const id = '069-other-cblol-split1-2026-ub-semis-furia-red'
export const description = 'Autres Régions — CBLOL 2026 Etapa 1 Playoffs : FURIA et RED Canids dominent les demi-finales Upper Bracket'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-26T08:00:00.000Z'

const articles = [
  {
    title: 'CBLOL 2026 Etapa 1 : FURIA et RED Canids dominent les demi-finales Upper Bracket',
    slug: 'cblol-2026-split1-ub-semis-furia-red-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/PfFMC67hWB8/maxresdefault.jpg',
    excerpt: 'FURIA a éliminé LOUD 3-0 et RED Canids a dominé Fluxo W7M 3-1 : les deux cadors brésiliens se retrouveront en finale Upper Bracket des playoffs de la 1ère Etapa du CBLOL 2026.',
    sourceUrl: 'https://lolesports.com/tournament/115565518151768348',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'CBLOL' }, { tag: 'FURIA' }, { tag: 'RED Canids' }],
    content: [
      { type: 'p', children: [{ text: 'Les playoffs de la 1ère Etapa du CBLOL 2026 ont livré deux séries Upper Bracket de grande qualité les 25 et 26 mai. FURIA et RED Canids Kalunga ont tous deux validé leur billet pour la finale du bracket supérieur, en écartant respectivement LOUD et Fluxo W7M avec autorité.' }] },
      { type: 'h2', children: [{ text: 'FURIA écrase LOUD 3-0 : l\'upset de la saison' }] },
      { type: 'p', children: [{ text: 'La série la plus attendue de ces playoffs a tourné court pour LOUD. FURIA a livré une performance collective remarquable, s\'imposant 3-0 en n\'accordant aucun jeu à l\'adversaire. Dès le premier match, FURIA a imposé son tempo, contrôlant l\'objectifs map et exploitant la moindre erreur des joueurs de LOUD. Les compositions de FURIA, centrées sur un contrôle méthodique de la carte, ont empêché LOUD de trouver ses marques.' }] },
      { type: 'p', children: [{ text: 'LOUD, champion en titre de la Copa CBLOL 2026, paie le prix d\'une préparation insuffisante face à la montée en puissance de FURIA. La formation devra désormais passer par le Lower Bracket pour espérer atteindre la grande finale. La pression sera maximale à chaque rencontre, avec l\'élimination comme seule sanction en cas de défaite.' }] },
      { type: 'h2', children: [{ text: 'RED Canids confirme sa domination : 3-1 face à Fluxo W7M' }] },
      { type: 'p', children: [{ text: 'Dans l\'autre demi-finale Upper Bracket, RED Canids Kalunga a confirmé son statut de favori numéro un du tournoi. Fluxo W7M a réussi à remporter un jeu et a offert une belle résistance au cœur de la série, mais l\'expérience et la cohésion de RED ont fait la différence. Le mid-laner de RED a été particulièrement brillant, affichant des performances de haut niveau sur plusieurs champions différents.' }] },
      { type: 'p', children: [{ text: 'Fluxo W7M survit dans les playoffs grâce au format Double Élimination et rejoindra le Lower Bracket pour poursuivre son aventure. La formation devra enchaîner les victoires pour espérer revenir jusqu\'à la grande finale.' }] },
      { type: 'h2', children: [{ text: 'La finale Upper Bracket : FURIA vs RED Canids en vue' }] },
      { type: 'p', children: [{ text: 'Les deux meilleures équipes de l\'Etapa 1 se retrouveront lors de la finale Upper Bracket la semaine prochaine. Le vainqueur obtiendra une place directe en grande finale, avec l\'avantage considérable de pouvoir perdre un match sans être éliminé. FURIA, en grande forme, sera l\'outsider face à RED Canids, régulier et dominant tout au long de la saison régulière.' }] },
      { type: 'blockquote', children: [{ text: 'Ces playoffs confirment la densité exceptionnelle du niveau brésilien en 2026 : le CBLOL s\'affirme comme l\'une des meilleures ligues secondaires de la planète League of Legends.' }] },
    ],
  },
  {
    title: 'CBLOL 2026 Split 1: FURIA and RED Canids Advance to Upper Bracket Final',
    slug: 'cblol-2026-split1-ub-semis-furia-red-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/PfFMC67hWB8/maxresdefault.jpg',
    excerpt: 'FURIA swept LOUD 3-0 and RED Canids edged Fluxo W7M 3-1 in the CBLOL 2026 Split 1 Upper Bracket semifinals, setting up a blockbuster UB Final next weekend.',
    sourceUrl: 'https://lolesports.com/tournament/115565518151768348',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'CBLOL' }, { tag: 'FURIA' }, { tag: 'RED Canids' }],
    content: [
      { type: 'p', children: [{ text: 'The CBLOL 2026 Split 1 Playoffs delivered two high-quality Upper Bracket series on May 25–26. FURIA and RED Canids Kalunga both secured their places in the UB Final, defeating LOUD and Fluxo W7M respectively in convincing fashion.' }] },
      { type: 'h2', children: [{ text: 'FURIA Sweeps LOUD 3-0 in a Statement Performance' }] },
      { type: 'p', children: [{ text: 'The most anticipated series of the bracket turned into a one-sided affair as FURIA steamrolled LOUD in a clean 3-0 sweep. From the opening game, FURIA displayed exceptional macro play, denying LOUD any opportunity to scale into late-game compositions. Their vision control and objective prioritization left the reigning Copa CBLOL champions unable to find a foothold in any of the three games.' }] },
      { type: 'p', children: [{ text: 'LOUD now drop to the Lower Bracket, where they will need to go on an extended winning streak to reach the Grand Final. Every remaining series in the lower bracket will be a must-win, with elimination on the line at each step.' }] },
      { type: 'h2', children: [{ text: 'RED Canids Defeat Fluxo W7M 3-1 to Confirm Favorite Status' }] },
      { type: 'p', children: [{ text: 'In the other Upper Bracket semifinal, RED Canids Kalunga reinforced their status as the tournament favorites with a 3-1 victory over Fluxo W7M. Fluxo fought back to claim one game and made things interesting mid-series, but RED\'s experience proved decisive. RED\'s mid-laner delivered a standout performance across multiple champion picks, making high-impact plays in key moments.' }] },
      { type: 'p', children: [{ text: 'Fluxo W7M remain alive in the tournament via the double-elimination format and head to the Lower Bracket. They will need to maintain their momentum and win several consecutive series to make a run at the championship.' }] },
      { type: 'h2', children: [{ text: 'FURIA vs RED Canids: UB Final Set for Next Weekend' }] },
      { type: 'p', children: [{ text: 'The two best teams in Split 1 will clash in the Upper Bracket Final next weekend. The winner earns a direct spot in the Grand Final and the luxury of a bracket reset advantage. FURIA arrives in electric form after their sweep of LOUD, while RED Canids have been the most consistent side throughout the regular season.' }] },
      { type: 'blockquote', children: [{ text: 'These playoffs prove once again that CBLOL is one of the strongest secondary leagues in the world — Brazilian League of Legends continues to punch above its weight on the international stage.' }] },
    ],
  },
  {
    title: 'CBLOL 2026 Etapa 1: FURIA y RED Canids dominan las semifinales del Upper Bracket',
    slug: 'cblol-2026-split1-ub-semis-furia-red-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/PfFMC67hWB8/maxresdefault.jpg',
    excerpt: 'FURIA arrasó con LOUD 3-0 y RED Canids venció a Fluxo W7M 3-1 en las semifinales del Upper Bracket de los playoffs de la Etapa 1 del CBLOL 2026.',
    sourceUrl: 'https://lolesports.com/tournament/115565518151768348',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'CBLOL' }, { tag: 'FURIA' }, { tag: 'RED Canids' }],
    content: [
      { type: 'p', children: [{ text: 'Los playoffs de la Etapa 1 del CBLOL 2026 vivieron dos emocionantes series del Upper Bracket los días 25 y 26 de mayo. FURIA y RED Canids Kalunga sellaron su clasificación para la final del bracket superior, eliminando a LOUD y Fluxo W7M respectivamente con solvencia.' }] },
      { type: 'h2', children: [{ text: 'FURIA aplasta a LOUD 3-0: el resultado más contundente de los playoffs' }] },
      { type: 'p', children: [{ text: 'La serie más esperada de estos playoffs quedó resuelta de forma contundente. FURIA no dio opción a LOUD, imponiéndose 3-0 en una actuación colectiva de altísimo nivel. Desde el primer mapa, FURIA tomó las riendas con un control del mapa impecable, cortocircuitando todas las vías de juego de LOUD. Sus composiciones, orientadas al control y a la visión, impidieron que los campeones de la Copa CBLOL 2026 pudieran desarrollar su estilo.' }] },
      { type: 'p', children: [{ text: 'LOUD desciende al Lower Bracket, donde deberá encadenar victorias consecutivas para aspirar a llegar a la Gran Final. La eliminación directa estará en juego en cada serie, lo que añade una presión enorme a cada partido que dispute la organización.' }] },
      { type: 'h2', children: [{ text: 'RED Canids confirma su favoritismo: 3-1 ante Fluxo W7M' }] },
      { type: 'p', children: [{ text: 'En la otra semifinal del Upper Bracket, RED Canids Kalunga corroboró su condición de máximo favorito al superar a Fluxo W7M por 3-1. Fluxo ofreció resistencia en el tramo central de la serie, logrando arrebatar un juego, pero la experiencia y la cohesión de RED terminaron por inclinar la balanza. El midlaner de RED fue el jugador más destacado, con actuaciones brillantes en múltiples campeones.' }] },
      { type: 'p', children: [{ text: 'Fluxo W7M sigue con vida en el torneo gracias al formato de doble eliminación y se incorpora al Lower Bracket. La escuadra tendrá que mantenerse enchufada para poder remontar y llegar hasta la final del campeonato.' }] },
      { type: 'h2', children: [{ text: 'Final del Upper Bracket: FURIA vs RED Canids el próximo fin de semana' }] },
      { type: 'p', children: [{ text: 'Los dos mejores equipos de la Etapa 1 se enfrentarán la próxima semana en la final del Upper Bracket. El ganador obtendrá plaza directa en la Gran Final con la ventaja del bracket reset. FURIA llega en estado de gracia tras su barrida a LOUD, mientras que RED Canids ha sido el conjunto más regular durante toda la fase regular de la temporada.' }] },
      { type: 'blockquote', children: [{ text: 'Estos playoffs confirman que el CBLOL sigue siendo una de las ligas secundarias más fuertes del mundo: el LoL brasileño demuestra su nivel año tras año.' }] },
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
