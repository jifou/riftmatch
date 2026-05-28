import type { MigrationModule } from './runner'

export const id = '073-lpl-split2-2026-playoffs-qf-preview'
export const description = 'LPL Split 2 2026 — Preview quarts de finale : JDG, TES, BLG, AL en lice'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-28T08:00:00.000Z'

const articles = [
  {
    title: 'LPL Split 2 2026 : preview des quarts de finale — JDG favori, LGD en outsider parfait',
    slug: 'lpl-split2-2026-playoffs-qf-preview-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    excerpt:
      'Les quarts de finale du LPL Split 2 2026 débutent le 29 mai à Shenzhen. Quatre séries au format best-of-five avec Hard Fearless Draft : JDG vs TT, TES vs LGD, AL vs EDG, BLG vs WE. Tour d\'horizon des affiches et des enjeux.',
    sourceUrl: 'https://lolesports.com/en-US/tournament/115615907996665826',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'JDG' }, { tag: 'BLG' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Les play-in Knights Rivals sont dans les livres d'histoire et le bracket des playoffs LPL Split 2 2026 est désormais complet. À partir du 29 mai, quatre meilleures équipes de la phase Ascend retrouvent quatre survivants des play-in au Shenzhen LongGang BuJi Cultural & Sports Center. Tous les matchs sont au format best-of-five Hard Fearless Draft, qui interdit de répéter un champion joué dans la même partie. Tour d'horizon des quatre quarts de finale.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'JD Gaming vs ThunderTalk Gaming (29 mai, 17h CST)' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "JD Gaming aborde ces playoffs comme l'un des grands favoris du tournoi. Avec leur jungle Knight et un ADC Ruler en pleine forme, JDG a montré une constance redoutable en saison régulière Ascend. En face, ThunderTalk Gaming a impressionné en play-in avec un sweep 3-0 propre contre Invictus Gaming. TT misera sur un draft agressif et une early game rapide pour prendre JDG de court — mais les Bleus partent favoris dans cette série et devront surtout éviter l'euphorie des play-ins chez leur adversaire.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Top Esports vs LGD Gaming (30 mai, 14h CST)' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "C'est le choc de la phase de groupes. LGD Gaming arrive en outsider absolu après avoir renversé Weibo Gaming 3-2 dans l'un des upsets les plus retentissants de la saison. Top Esports, avec 369 en top, Creme en mid et JackeyLove en ADC, reste sur papier la formation la plus équilibrée du bracket. Mais LGD a désormais la confiance d'une équipe qui sait qu'elle peut battre n'importe qui. Ce quart de finale est la série à ne pas rater.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Anyone's Legend vs EDward Gaming (30 mai, 17h CST)" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Anyone's Legend est la seule équipe LPL à avoir conservé son roster intégral pour 2026 : Flandre (top), Tarzan (jungle), Shanks (mid), Hope (ADC) et Kael (support). Cette cohésion est leur plus grand atout face à EDward Gaming, qui a souffert contre NiP en play-in (3-2) avant de se qualifier. EDG reste dangereux — leur capacité à s'adapter en cours de série est connue — mais AL sera difficile à déjouer avec un système aussi rodé.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'BiliBili Gaming vs Team WE (31 mai, 17h CST)' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "BiliBili Gaming est l'autre mastodonte de ces playoffs. Portés par l'ADC coréen Viper et le jungler Xun, avec le coach Daeny aux manettes, BLG a le potentiel pour remporter ce split. Team WE a survécu au play-in en cinq games contre LNG, mais se retrouve face à une machine redoutable. WE devra s'appuyer sur sa flexibilité de draft et sa solidité défensive pour créer la surprise — un exploit possible, mais qui demandera un WE au maximum de ses capacités.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "LGD-TES est le match à surveiller en priorité. Si LGD confirme son upset de Weibo, les demi-finales LPL risquent d'être historiques. Rendez-vous le 29 mai pour le coup d'envoi.",
          },
        ],
      },
    ],
  },
  {
    title: 'LPL Split 2 2026 Quarterfinals Preview: JDG Favorites, LGD the Giant Killers',
    slug: 'lpl-split2-2026-playoffs-qf-preview-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    excerpt:
      'The LPL Split 2 2026 quarterfinals kick off May 29 in Shenzhen. Four best-of-five series under Hard Fearless Draft: JDG vs TT, TES vs LGD, AL vs EDG, BLG vs WE. Full preview of every matchup.',
    sourceUrl: 'https://lolesports.com/en-US/tournament/115615907996665826',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'JDG' }, { tag: 'BLG' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'The Knights Rivals play-in stage is over and the LPL Split 2 2026 quarterfinals bracket is locked in. Starting May 29 at the Shenzhen LongGang BuJi Cultural & Sports Center, the four Ascend-stage leaders welcome four play-in survivors. All matchups are best-of-five under Hard Fearless Draft rules, which prohibit repeating a champion used in the same match. Here is what to expect from each quarterfinal.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'JD Gaming vs ThunderTalk Gaming (May 29, 17:00 CST)' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "JD Gaming head into the playoffs as one of the clearest title favorites. With Knight dominating in the mid lane and Ruler delivering consistent ADC performances, JDG showed steady top-tier play throughout Ascend. ThunderTalk earned their spot with a dominant 3-0 sweep of Invictus Gaming in the play-in, but a different challenge awaits. TT will look to draft aggressively and win the early game before JDG's macro superiority takes over. JDG are heavy favorites, but TT enters this series with real momentum.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Top Esports vs LGD Gaming (May 30, 14:00 CST)' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'This is the marquee matchup of the bracket. LGD Gaming arrive as the ultimate underdogs after stunning Weibo Gaming 3-2 in the most shocking result of the entire split. Top Esports, boasting 369, Creme, and JackeyLove — arguably the most complete roster on paper — are the clear favorites. However, LGD now has the belief of a team that knows it can topple anyone. If LGD brings the same resilience they showed against Weibo, this could be another five-game classic.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Anyone's Legend vs EDward Gaming (May 30, 17:00 CST)" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Anyone's Legend is the only LPL team that kept their entire roster intact heading into 2026: Flandre, Tarzan, Shanks, Hope, and Kael make up one of the most cohesive five-man units in the league. This consistency is their biggest weapon against EDward Gaming, who needed a full five games to get past NiP in the play-in. EDG are known for their in-series adaptability, but breaking down a well-drilled system like AL's is no easy task.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'BiliBili Gaming vs Team WE (May 31, 17:00 CST)' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "BiliBili Gaming may be the strongest team in this bracket. Korean import ADC Viper, jungler Xun, and head coach Daeny form a loaded lineup that looks capable of going all the way. Team WE survived the play-in in five games against LNG, and their defensive playstyle and drafting flexibility give them a theoretical path to an upset. But BLG's teamfighting is arguably the best in the tournament, and WE will need a near-perfect performance across five games to pull it off.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'TES vs LGD is the must-watch quarterfinal. If LGD can back up their Weibo upset, the LPL Split 2 semifinals could be historic. Everything starts May 29 in Shenzhen.',
          },
        ],
      },
    ],
  },
  {
    title: 'LPL Split 2 2026: Preview de cuartos — JDG favorito, LGD el asesino de gigantes',
    slug: 'lpl-split2-2026-playoffs-qf-preview-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    excerpt:
      'Los cuartos de final del LPL Split 2 2026 arrancan el 29 de mayo en Shenzhen. Cuatro series al mejor de cinco con Hard Fearless Draft: JDG vs TT, TES vs LGD, AL vs EDG, BLG vs WE. Análisis completo de cada enfrentamiento.',
    sourceUrl: 'https://lolesports.com/en-US/tournament/115615907996665826',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'JDG' }, { tag: 'BLG' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'La fase de play-in Knights Rivals ha concluido y el bracket de cuartos de final del LPL Split 2 2026 está cerrado. A partir del 29 de mayo en el Shenzhen LongGang BuJi Cultural & Sports Center, los cuatro primeros de Ascend se enfrentan a los cuatro supervivientes del play-in. Todos los cruces son al mejor de cinco bajo el formato Hard Fearless Draft, que prohíbe repetir campeones usados en la misma serie. Aquí analizamos cada cuarto de final.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'JD Gaming vs ThunderTalk Gaming (29 de mayo, 17:00 CST)' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'JD Gaming llega a los playoffs como uno de los grandes favoritos al título. Con Knight dominando en el carril central y Ruler sólido en el rol de ADC, JDG demostró una constancia de alto nivel durante toda la fase Ascend. ThunderTalk se ganó su puesto con un 3-0 dominante ante Invictus Gaming en el play-in, pero ahora afronta un reto de otro calibre. TT buscará un draft agresivo y golpear temprano para sorprender a JDG antes de que su superioridad macro se imponga. JDG es el favorito, pero TT llega con el viento a favor.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Top Esports vs LGD Gaming (30 de mayo, 14:00 CST)' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Este es el duelo estrella del bracket. LGD Gaming llega como el mayor outsider tras eliminar a Weibo Gaming 3-2 en el resultado más impactante de todo el split. Top Esports, con 369, Creme y JackeyLove — probablemente el roster más completo sobre el papel — parte como favorito claro. Sin embargo, LGD ahora tiene la confianza de un equipo que sabe que puede con cualquiera. Si reproducen el nivel mostrado ante Weibo, esta serie puede volver a ir a cinco partidas.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Anyone's Legend vs EDward Gaming (30 de mayo, 17:00 CST)" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Anyone's Legend es el único equipo de la LPL que mantiene su quinteto intacto en 2026: Flandre, Tarzan, Shanks, Hope y Kael forman uno de los cinco hombres más cohesionados de la liga. Esa cohesión es su principal arma frente a EDward Gaming, que necesitó cinco partidas para superar a NiP en el play-in. EDG es conocido por su capacidad de adaptación dentro de las series, pero desmontar un sistema tan rodado como el de AL no resulta nada fácil.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'BiliBili Gaming vs Team WE (31 de mayo, 17:00 CST)' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'BiliBili Gaming puede ser el equipo más fuerte del bracket. El ADC coreano importado Viper, el jungler Xun y el entrenador jefe Daeny conforman una alineación cargada con posibilidades reales de llevarse el split. Team WE sobrevivió al play-in en cinco partidas ante LNG, y su estilo defensivo y flexibilidad de draft les dan una vía teórica para la sorpresa. Pero el teamfighting de BLG es posiblemente el mejor del torneo, y WE necesitará una actuación casi perfecta en las cinco partidas para lograrlo.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'TES vs LGD es el cuarto de final imprescindible. Si LGD confirma el upset ante Weibo, las semifinales del LPL Split 2 podrían ser históricas. Todo comienza el 29 de mayo en Shenzhen.',
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
