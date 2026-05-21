import type { MigrationModule } from './runner'

export const id = '057-lpl-split2-2026-semifinals-preview'
export const description = 'LPL Split 2 2026 — Preview demi-finales : BLG vs JDG revanche, AL vs TES, MSI en jeu'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-21T08:00:00.000Z'

const articles = [
  {
    title: 'LPL Split 2 2026 : BLG vs JDG et AL vs TES — les demi-finales qui envoient deux équipes au MSI',
    slug: 'lpl-split2-2026-semifinals-preview-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg',
    excerpt:
      'Les demi-finales du LPL Split 2 2026 sont fixées : BiliBili Gaming affronte JD Gaming pour une revanche de la finale du Split 1, tandis qu\'Anyone\'s Legend défie Top Esports. Les deux vainqueurs se qualifient pour le Mid-Season Invitational 2026.',
    sourceUrl: 'https://lolesports.com/en-US/tournament/113503620829714518/overview',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'BLG' }, { tag: 'JDG' }, { tag: 'MSI' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Après un premier tour de playoffs animé, le LPL Split 2 2026 entre dans sa phase décisive. BiliBili Gaming et JD Gaming se retrouvent en demi-finale, revivant la finale du Split 1 remportée 3-1 par BLG. De l\'autre côté du tableau, Anyone\'s Legend et Top Esports croisent à nouveau le fer. L\'enjeu est clair : les deux vainqueurs décrocheront leur billet pour le Mid-Season Invitational 2026.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'BLG vs JDG : la revanche de la finale du Split 1' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'BiliBili Gaming abordent ces demi-finales depuis le sommet du Groupe Ascend, avec un bilan de 11 victoires pour 2 défaites en saison régulière. Leur ADC Park "Viper" Do-hyeon, recruté cet hiver en provenance de la LCK, s\'est imposé comme l\'un des meilleurs joueurs de la saison. Épaulé par le jungler Peng "XUN" Li-xun et coaché par Yang "Daeny" Dae-in, BLG affiche une cohérence redoutable. JD Gaming (8-5 en régulière) arrive cependant avec un capital revanche intact après la défaite en finale du Split 1. Leur mid-laner et leur support constituent l\'un des duos les plus dangereux du circuit.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'AL vs TES : la surprise de la saison contre les vétérans' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'L\'autre demi-finale met en scène Anyone\'s Legend, la révélation du Split 2 avec 8 victoires pour 5 défaites, face à Top Esports et leur armada de stars. Le top-laner Bai "369" Jia-Hao, le mid-laner Lin "Creme" Jian et l\'ADC Yu "JackeyLove" Wen-Bo forment l\'une des lignes offensives les plus expérimentées du LPL. Mais AL a montré tout au long de la saison régulière une capacité à rivaliser avec les meilleures équipes grâce à une résilience et une coordination impressionnantes.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'MSI 2026 : tout se joue sur ces deux séries' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Le LPL envoie ses deux finalistes au Mid-Season Invitational 2026, qui se tiendra à Daejeon en Corée du Sud. Chaque équipe engagée dans ces demi-finales sait que perdre signifie l\'élimination du plus grand rendez-vous international printanier. BLG vise un doublé historique ; JDG, AL et TES ont chacun une raison de se battre jusqu\'au bout. Les séries se jouent en best-of-five, format Hard Fearless Draft : zéro répétition de champion entre les parties, ce qui demande une préparation stratégique exemplaire.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'BLG vs JDG, AL vs TES : le LPL Split 2 2026 offre les demi-finales les plus alléchantes de l\'année. Deux billets pour le MSI, une seule chance de les décrocher.',
          },
        ],
      },
    ],
  },
  {
    title: 'LPL Split 2 2026 Semifinals Preview: BLG vs JDG Rematch, AL vs TES — Two MSI Spots at Stake',
    slug: 'lpl-split2-2026-semifinals-preview-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg',
    excerpt:
      'LPL Split 2 2026 semifinals are set: BiliBili Gaming face JD Gaming in a rematch of the Split 1 Finals, while Anyone\'s Legend takes on Top Esports. Both winners punch their ticket to the 2026 Mid-Season Invitational.',
    sourceUrl: 'https://lolesports.com/en-US/tournament/113503620829714518/overview',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'BLG' }, { tag: 'JDG' }, { tag: 'MSI' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'After an action-packed first round of the LPL Split 2 2026 playoffs, the semifinal matchups are locked in. BiliBili Gaming and JD Gaming are set for a rematch of the Split 1 Finals — a series BLG won 3-1. On the other side of the bracket, Anyone\'s Legend meets Top Esports. The stakes couldn\'t be higher: both winners secure a spot at the 2026 Mid-Season Invitational in Daejeon, South Korea.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'BLG vs JDG: The Revenge Series' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'BiliBili Gaming enter the semifinals as clear favorites after finishing the regular season with an 11-2 record, best in Group Ascend. ADC Park "Viper" Do-hyeon, the Korean import who joined the squad this winter, has been one of the standout players of the season. Jungler Peng "XUN" Li-xun and head coach Yang "Daeny" Dae-in complete a roster that looks well-equipped to defend their title. JD Gaming, who finished 8-5 in the regular season, are hungry for revenge. Their mid-jungle synergy and the experience of key veterans make them the most dangerous challenger BLG could face.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'AL vs TES: The Surprise vs the Veterans' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Anyone\'s Legend has been one of the storylines of Split 2, finishing 8-5 and earning a direct seed from Group Ascend. They now face Top Esports, a team loaded with established stars: top laner Bai "369" Jia-Hao, mid laner Lin "Creme" Jian, and ADC Yu "JackeyLove" Wen-Bo. TES finished 8-6 in the regular season but have historically peaked in playoff situations. AL will need to bring their full game to pull off an upset.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Everything Rides on These Two Series' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'The LPL sends its two finalists to MSI 2026. Every team still in this bracket has everything to play for — there\'s no consolation prize for a semifinal exit. All matches are best-of-five under Hard Fearless Draft rules, meaning no champion can be repeated by the same player across games in a series. Strategic depth and preparation are as important as mechanical skill at this stage.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'BLG vs JDG, AL vs TES — the LPL Split 2 2026 semifinals are the most compelling matchups of the season. Two MSI tickets. Four teams. No margin for error.',
          },
        ],
      },
    ],
  },
  {
    title: 'LPL Split 2 2026 Semifinales: BLG vs JDG, la revancha; AL vs TES — dos plazas para el MSI en juego',
    slug: 'lpl-split2-2026-semifinals-preview-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg',
    excerpt:
      'Las semifinales del LPL Split 2 2026 están definidas: BiliBili Gaming enfrenta a JD Gaming en una revancha de la final del Split 1, y Anyone\'s Legend se mide a Top Esports. Los dos ganadores se clasifican para el Mid-Season Invitational 2026.',
    sourceUrl: 'https://lolesports.com/en-US/tournament/113503620829714518/overview',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'BLG' }, { tag: 'JDG' }, { tag: 'MSI' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Tras una primera ronda de playoffs cargada de acción, el LPL Split 2 2026 llega a su fase decisiva. BiliBili Gaming y JD Gaming se vuelven a ver las caras en semifinales, reviviendo la final del Split 1 que BLG ganó 3-1. Al otro lado del cuadro, Anyone\'s Legend se enfrenta a Top Esports. La recompensa es clara: los dos vencedores consiguen su billete para el Mid-Season Invitational 2026 en Daejeon, Corea del Sur.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'BLG vs JDG: la revancha que todos esperaban' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'BiliBili Gaming llegan como grandes favoritos tras cerrar la temporada regular con un récord de 11 victorias y 2 derrotas, el mejor del Grupo Ascend. Su ADC Park "Viper" Do-hyeon, incorporado desde la LCK este invierno, ha sido uno de los jugadores más destacados de toda la temporada. Junto al jungler Peng "XUN" Li-xun y el head coach Yang "Daeny" Dae-in, BLG presentan un equipo temible en todos los aspectos del juego. JD Gaming (8-5 en regular) llegan con el hambre de la revancha: perdieron la gran final del Split 1 y no van a olvidarlo fácilmente.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'AL vs TES: la sorpresa ante los veteranos' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Anyone\'s Legend ha sido la gran revelación del Split 2, consiguiendo la clasificación directa desde el Grupo Ascend con un registro de 8-5. Ahora se miden a Top Esports, que cuenta con figuras como el top Bai "369" Jia-Hao, el mid Lin "Creme" Jian y el ADC Yu "JackeyLove" Wen-Bo. TES cerró la regular con 8-6 pero históricamente ha mostrado su mejor nivel en los playoffs. Para AL, es la mayor prueba de la temporada.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'El MSI 2026, el gran objetivo de estas semifinales' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'El LPL envía a sus dos finalistas al MSI 2026. No hay segunda oportunidad: quedar eliminado en semifinales significa perderse el torneo internacional más importante de la primera mitad del año. Todos los enfrentamientos se juegan al mejor de cinco partidas bajo el formato Hard Fearless Draft, donde ningún jugador puede repetir campeón dentro de una misma serie. La preparación estratégica es tan crucial como el nivel mecánico en esta fase del torneo.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'BLG vs JDG, AL vs TES: las semifinales del LPL Split 2 2026 son los duelos más emocionantes de la temporada. Dos plazas para el MSI, cuatro equipos, ningún margen de error.',
          },
        ],
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
