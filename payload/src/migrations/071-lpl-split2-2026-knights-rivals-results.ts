import type { MigrationModule } from './runner'

export const id = '071-lpl-split2-2026-knights-rivals-results'
export const description = 'LPL Split 2 2026 — Résultats Knights Rivals : LGD upset Weibo, EDG bat NiP, bracket playoffs confirmé'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-27T08:00:00.000Z'

const articles = [
  {
    title: 'LPL Split 2 2026 : LGD crée l\'exploit en éliminant Weibo, le bracket des playoffs est complet',
    slug: 'lpl-split2-2026-knights-rivals-results-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg',
    excerpt:
      'Les Play-In Knights Rivals du LPL Split 2 2026 sont terminés. LGD Gaming a réalisé l\'un des plus grands upsets du split en éliminant Weibo Gaming 3-2, pendant qu\'EDward Gaming serrait les dents face à NiP 3-2. Le bracket des quarts de finale du 29 mai est désormais connu.',
    sourceUrl: 'https://lolesports.com/en-US/tournament/115615907996665826',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'LGD' }, { tag: 'EDG' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Les quatre matchs des Play-In Knights Rivals du LPL Split 2 2026 sont désormais joués. Le bilan est sans appel : quatre séries disputées, dont trois décidées au cinquième game, et un upset majeur qui va redistribuer les cartes dans les playoffs. LGD Gaming, donnés perdants par la majorité des observateurs, a éliminé Weibo Gaming dans un game 5 épique, provoquant l'une des surprises les plus retentissantes de la saison en LPL.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "LGD renverse Weibo Gaming : l'upset de la saison" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "C'est le résultat qui a fait trembler toute la scène LPL. Weibo Gaming, armés de Zhao \"Elk\" Jia-Hao à l'ADC et du jungler Zhao \"jiejie\" Li-Jie, entraient dans la série avec le statut de favoris absolus. LGD, bien plus discrets en saison régulière, ont refusé de plier. La série s'est étirée jusqu'au game 5, où LGD a réussi à tenir le choc pour arracher la qualification. Weibo Gaming, l'une des équipes les plus chères construites cet hiver, s'en va dès le play-in.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'EDG survit à NiP dans un duel haletant (3-2)' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "EDward Gaming, leaders du Groupe Nirvana, ont failli être victimes d'un autre upset. Les Ninjas in Pyjamas ont poussé EDG jusqu'à la limite dans un BO5 âprement disputé. EDG a finalement su renverser la situation au game 5, confirmant leur qualification pour les playoffs. Cette série aura montré que NiP n'est pas l'équipe que leur bilan de saison régulière laissait penser — mais EDG reste bien présent dans la course.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'ThunderTalk et WE : deux qualifications aux antipodes' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "ThunderTalk Gaming a réalisé le meilleur résultat du play-in en dominant Invictus Gaming 3-0 sans trembler. TT a affiché un niveau collectif impressionnant, laissant iG sans réponse dans chacune des trois manches. De l'autre côté, Team WE a dû aller chercher sa qualification en cinq games contre LNG Esports dans une série tout aussi serrée. WE s'en sort grâce à une constance défensive et une gestion des ressources irréprochable dans le game décisif.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Bracket des quarts de finale (29 mai)' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Les matchs des quarts de finale débuteront le 29 mai au Shenzhen LongGang BuJi Cultural & Sports Center. Le bracket est le suivant : JD Gaming affronte ThunderTalk Gaming, Top Esports challenge LGD Gaming (le favori TES face au géant tué), Anyone's Legend retrouve EDward Gaming, et BiliBili Gaming ouvre contre Team WE. Tous les matchs sont en best-of-five avec le format Hard Fearless Draft.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Le LPL Split 2 2026 va désormais s'emballer : LGD, outsider parfait après son upset de Weibo, peut-il continuer sur sa lancée face à TES ? Les réponses dès le 29 mai.",
          },
        ],
      },
    ],
  },
  {
    title: 'LPL Split 2 2026: LGD Stun Weibo Gaming, Full Playoffs Bracket Set for May 29',
    slug: 'lpl-split2-2026-knights-rivals-results-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg',
    excerpt:
      'The LPL Split 2 2026 Knights Rivals play-in stage is over. LGD Gaming delivered the biggest upset of the split by eliminating Weibo Gaming 3-2, while EDward Gaming narrowly beat NiP 3-2. The full quarterfinals bracket is now set for May 29.',
    sourceUrl: 'https://lolesports.com/en-US/tournament/115615907996665826',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'LGD' }, { tag: 'EDG' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'All four Knights Rivals play-in matches for LPL Split 2 2026 have been played. The results delivered drama on every front: three out of four series went the distance to Game 5, and one massive upset rocked the entire playoff picture. LGD Gaming, written off by most analysts before the play-in, eliminated the heavily favored Weibo Gaming in a stunning five-game series.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'LGD Eliminates Weibo Gaming: The Upset of the Split' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Weibo Gaming entered the series as heavy favorites, boasting one of the most expensive rosters assembled this offseason — ADC Zhao "Elk" Jia-Hao and jungler Zhao "jiejie" Li-Jie were expected to be the difference-makers. Instead, LGD Gaming proved their resilience and outplayed the star-studded lineup when it mattered most. Taking the series 3-2, LGD sent Weibo home in the play-in round, marking one of the most shocking results of the entire 2026 LPL season.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'EDG Edges NiP in a Five-Game Thriller' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "EDward Gaming, who topped Group Nirvana in the regular season, came dangerously close to being upset themselves. Ninjas in Pyjamas showed impressive early-game coordination across all five games and pushed EDG to the absolute limit. In the end, EDG's macro game and teamfighting depth proved decisive in Game 5, allowing them to close out the series 3-2 and earn their playoff spot.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'ThunderTalk Sweep iG, WE Survive LNG' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "ThunderTalk Gaming had the cleanest run of the play-in, dispatching Invictus Gaming 3-0 in a dominant performance that left iG without answers in all three games. Team WE, meanwhile, had to dig deep to overcome LNG Esports in another five-game series. WE's disciplined defensive play and superior late-game decision-making in the final game secured their passage to the main bracket.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Quarterfinals Bracket — May 29 in Shenzhen' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The quarterfinals begin May 29 at the Shenzhen LongGang BuJi Cultural & Sports Center. Matchups: JD Gaming vs ThunderTalk Gaming, Top Esports vs LGD Gaming (an intriguing test for the giant killer), Anyone's Legend vs EDward Gaming, and BiliBili Gaming vs Team WE. All matches are best-of-five under Hard Fearless Draft rules.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'LGD arrives in the quarterfinals as the hottest team in the bracket after shocking Weibo. Can they continue stunning the LPL? Top Esports will have something to say about that starting May 29.',
          },
        ],
      },
    ],
  },
  {
    title: 'LPL Split 2 2026: LGD elimina a Weibo Gaming y el bracket de cuartos queda cerrado',
    slug: 'lpl-split2-2026-knights-rivals-results-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg',
    excerpt:
      'Los Play-In Knights Rivals del LPL Split 2 2026 han concluido. LGD Gaming protagonizó el mayor upset del split eliminando a Weibo Gaming 3-2, mientras que EDward Gaming superó a NiP 3-2 al límite. El bracket de cuartos de final arranca el 29 de mayo.',
    sourceUrl: 'https://lolesports.com/en-US/tournament/115615907996665826',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'LGD' }, { tag: 'EDG' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Los cuatro enfrentamientos de los Play-In Knights Rivals del LPL Split 2 2026 ya han concluido. El balance es claro: tres de las cuatro series llegaron al game 5, y un upset monumental sacudió el panorama competitivo. LGD Gaming, considerados claros perdedores por la mayoría de expertos, eliminó a Weibo Gaming en cinco partidas y escribió una de las páginas más sorprendentes de la temporada en la LPL.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'LGD elimina a Weibo Gaming: el mayor upset del split' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Weibo Gaming llegaba a la serie como gran favorito con uno de los rosters más caros construidos en el mercado de invierno, con Zhao "Elk" Jia-Hao en el carril bot y el jungler Zhao "jiejie" Li-Jie como piezas clave. Sin embargo, LGD no se dejó intimidar y mostró un nivel colectivo muy superior al esperado. La serie se decidió en el quinto juego, donde LGD cerró el partido y mandó a Weibo a casa en la fase de play-in, en lo que es sin duda el resultado más impactante de la temporada.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'EDG sobrevive a NiP en un duelo al límite (3-2)' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'EDward Gaming, líderes del Grupo Nirvana, estuvieron cerca de sufrir otro upset. Ninjas in Pyjamas plantaron cara durante los cinco juegos y llevaron la serie hasta el límite. Finalmente, EDG se impuso gracias a su superioridad en el juego tardío y en los teamfights del game decisivo, asegurando su clasificación para los playoffs con un 3-2 que no estuvo nada claro hasta el final.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'ThunderTalk arrasa a iG, WE supera a LNG por los pelos' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'ThunderTalk Gaming fue el equipo más sólido del play-in, dominando a Invictus Gaming 3-0 sin que iG pudiera encontrar respuesta en ninguna de las tres partidas. Por su parte, Team WE tuvo que luchar hasta el último game para superar a LNG Esports en una serie también de cinco juegos. El juego defensivo de WE y su gestión del mapa en la partida definitiva les permitió clasificarse para los cuartos de final.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Cuartos de final — 29 de mayo en Shenzhen' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Los cuartos de final arrancan el 29 de mayo en el Shenzhen LongGang BuJi Cultural & Sports Center. Los cruces son los siguientes: JD Gaming vs ThunderTalk Gaming, Top Esports vs LGD Gaming (el favorito ante el equipo revelación), Anyone's Legend vs EDward Gaming, y BiliBili Gaming vs Team WE. Todos los partidos son al mejor de cinco bajo el formato Hard Fearless Draft.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'LGD llega a cuartos como el equipo más caliente del bracket tras eliminar a Weibo. ¿Puede seguir sorprendiendo ante Top Esports el 29 de mayo? Los playoffs del LPL Split 2 2026 prometen.',
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
