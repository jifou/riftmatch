import type { MigrationModule } from './runner'

export const id = '077-lpl-split2-2026-qf-day1-jdg-tes-results'
export const description = 'LPL Split 2 2026 — QF Jour 1 : JDG 3-1 TT, TES élimine LGD, Jour 2 en vue'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-30T08:00:00.000Z'

const articles = [
  {
    title: 'LPL Split 2 2026 : JDG domine ThunderTalk 3-1, TES passe LGD au Jour 1 des quarts',
    slug: 'lpl-split2-2026-qf-day1-jdg-tt-results-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://liquipedia.net/commons/images/9/91/LPL_2020_Logo.png',
    excerpt:
      "Jour 1 des quarts de finale du LPL Split 2 2026 (29 mai) : JD Gaming a éliminé ThunderTalk Gaming 3-1 avec HongQ nommé MVP, tandis que Top Esports a sorti LGD Gaming. Les deux équipes Ascend valident leur passage en demi-finales.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LPL/2026/Split_2/Knockout_Stage',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'JDG' }, { tag: 'TES' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Le Jour 1 des quarts de finale du LPL Split 2 2026 a tenu ses promesses. Le 29 mai au Shenzhen LongGang BuJi Cultural & Sports Center, JD Gaming et Top Esports ont respectivement validé leur ticket pour les demi-finales en dominant leurs adversaires issus du play-in Knights Rivals. Les quatre formations jouaient en best-of-five Hard Fearless Draft.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'JDG 3-1 ThunderTalk : maîtrise et efficacité' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "JD Gaming a mis fin au parcours de ThunderTalk Gaming en quatre games. La série n'a jamais vraiment basculé en faveur de TT, malgré l'élan que l'équipe avait acquis après son sweep 3-0 d'Invictus Gaming en play-in. La cohérence de JDG — portée par leur mid-laner en forme et un duo bottom solide — a suffi à contenir les velléités offensives adverses. Le support HongQ a été nommé MVP de la série, illustrant le rôle clé joué par la vision game et le contrôle de carte dans la victoire de JDG. La série s'est conclue 3-1, JDG avançant vers les demi-finales avec de l'énergie en réserve.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'TES s\'impose face à LGD Gaming' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Dans le second match du Jour 1, Top Esports a éliminé LGD Gaming et mis fin à la belle histoire de l'outsider du play-in. LGD avait créé la surprise en remportant une victoire 3-2 sur Weibo Gaming en Knights Rivals, mais TES — avec 369 en top, Creme en mid et JackeyLove en ADC — a démontré qu'un échelon supplémentaire séparait les deux rosters. Top Esports confirme ainsi son statut de candidat au titre et rejoint JDG en demi-finales.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Jour 2 (30 mai) : AL vs EDG et BLG vs WE' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La journée du 30 mai complète le tableau avec deux autres quarts de finale. Anyone's Legend, unique équipe LPL à avoir conservé son roster intégral en 2026, affronte EDward Gaming dans une série très attendue. Dans l'autre quart, BiliBili Gaming — champions du Split 1 avec Viper et Xun — se mesure à Team WE, qui a survécu au play-in en cinq games face à LNG. Les deux vainqueurs rejoindront JDG et TES pour des demi-finales au format 2-vs-2.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "JDG et TES sont qualifiés pour les demi-finales du LPL Split 2 2026. La suite se joue le 30 mai avec AL vs EDG et BLG vs WE — deux séries qui dessineront le tableau final.",
          },
        ],
      },
    ],
  },
  {
    title: 'LPL Split 2 2026 Quarterfinals Day 1: JDG Beat ThunderTalk 3-1, TES Eliminate LGD',
    slug: 'lpl-split2-2026-qf-day1-jdg-tt-results-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://liquipedia.net/commons/images/9/91/LPL_2020_Logo.png',
    excerpt:
      "LPL Split 2 2026 Quarterfinals Day 1 (May 29): JD Gaming defeated ThunderTalk Gaming 3-1 with HongQ named MVP, while Top Esports eliminated LGD Gaming. Both Ascend teams advance to the semifinals.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LPL/2026/Split_2/Knockout_Stage',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'JDG' }, { tag: 'TES' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Day 1 of the LPL Split 2 2026 quarterfinals delivered exactly what was expected. On May 29 at the Shenzhen LongGang BuJi Cultural & Sports Center, JD Gaming and Top Esports both secured their spots in the semifinals, each eliminating a Knights Rivals play-in qualifier. All matches were played under Hard Fearless Draft rules in a best-of-five format.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'JDG 3-1 ThunderTalk: Controlled and Clinical' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "JD Gaming dispatched ThunderTalk Gaming in four games and never let the series get close. ThunderTalk had momentum coming in after their dominant 3-0 sweep of Invictus Gaming in the play-in stage, but JDG's consistency was on another level. Their mid-jungle coordination and controlled macro game kept TT at arm's length throughout. Support HongQ was named MVP of the series, a testament to JDG's vision-centric approach and clean map control. The 3-1 result was a comfortable win that left JDG with plenty of energy for the rounds ahead.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'TES Advance Past LGD Gaming' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "In the second match of the day, Top Esports ended LGD Gaming's Cinderella run through the playoff bracket. LGD had been one of the stories of the play-in, knocking out Weibo Gaming 3-2 in a stunning upset, but TES — led by top laner 369, mid laner Creme, and ADC JackeyLove — proved that the gap between a play-in qualifier and an Ascend seed is real. TES control their own destiny heading into the semifinals and look like a genuine title contender.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Day 2 (May 30): AL vs EDG and BLG vs WE' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Day 2 of the quarterfinals completes the bracket on May 30. Anyone's Legend — the only LPL team to carry their full roster into 2026 — faces EDward Gaming in one of the most intriguing matchups of the round. In the other quarterfinal, defending Split 1 champions BiliBili Gaming take on Team WE, who survived the play-in in five grueling games against LNG. The two winners will join JDG and TES in the semifinals.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "JDG and TES are through to the LPL Split 2 2026 semifinals. The bracket picture will be complete after May 30, when AL vs EDG and BLG vs WE decide who joins them.",
          },
        ],
      },
    ],
  },
  {
    title: 'LPL Split 2 2026 Cuartos Día 1: JDG vence a ThunderTalk 3-1, TES elimina a LGD',
    slug: 'lpl-split2-2026-qf-day1-jdg-tt-results-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://liquipedia.net/commons/images/9/91/LPL_2020_Logo.png',
    excerpt:
      "Cuartos de final del LPL Split 2 2026, Día 1 (29 de mayo): JD Gaming derrotó a ThunderTalk Gaming 3-1 con HongQ nombrado MVP, y Top Esports eliminó a LGD Gaming. Ambos equipos Ascend avanzan a semifinales.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LPL/2026/Split_2/Knockout_Stage',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'JDG' }, { tag: 'TES' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "El Día 1 de los cuartos de final del LPL Split 2 2026 cumplió con lo esperado. El 29 de mayo en el Shenzhen LongGang BuJi Cultural & Sports Center, JD Gaming y Top Esports sellaron su pase a semifinales al eliminar a sendos clasificados del play-in Knights Rivals. Todos los partidos se jugaron al mejor de cinco en formato Hard Fearless Draft.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'JDG 3-1 ThunderTalk: control y eficacia' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "JD Gaming despachó a ThunderTalk Gaming en cuatro partidas sin que la serie se pusiera en peligro en ningún momento. ThunderTalk llegaba con la confianza de haber barrido a Invictus Gaming 3-0 en el play-in, pero el nivel de JDG fue muy superior. La coordinación entre carriles y el control macro impecable dejaron a TT sin recursos. El support HongQ fue nombrado MVP de la serie, reconocimiento a la importancia del control de visión y del mapa en la victoria de JDG. Resultado final: 3-1.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'TES pone fin al sueño de LGD Gaming' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "En el segundo enfrentamiento del día, Top Esports eliminó a LGD Gaming y cortó la historia de la Cenicienta del play-in. LGD había dado la sorpresa al vencer a Weibo Gaming 3-2 en la fase Knights Rivals, pero TES — con 369 en top, Creme en mid y JackeyLove en ADC — demostró que la diferencia entre un clasificado del play-in y un equipo Ascend es real y significativa. Top Esports avanza a semifinales como uno de los favoritos al título.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Día 2 (30 de mayo): AL vs EDG y BLG vs WE' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El Día 2 de los cuartos de final completa el cuadro el 30 de mayo. Anyone's Legend — el único equipo de la LPL que mantiene su quinteto intacto en 2026 — se mide a EDward Gaming en uno de los duelos más interesantes de la ronda. En el otro cuarto, los campeones del Split 1 BiliBili Gaming afrontan a Team WE, que superó el play-in en cinco partidas ante LNG. Los dos ganadores acompañarán a JDG y TES en las semifinales.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "JDG y TES están en semifinales del LPL Split 2 2026. El cuadro se completará el 30 de mayo tras AL vs EDG y BLG vs WE.",
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
