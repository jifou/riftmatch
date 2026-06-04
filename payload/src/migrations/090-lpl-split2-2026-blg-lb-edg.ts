import type { MigrationModule } from './runner'

export const id = '090-lpl-split2-2026-blg-lb-edg'
export const description = 'LPL Split 2 2026 — BLG 3-0 EDG, Lower Bracket Round 1 : BLG survit, EDG éliminé'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-04T08:00:00.000Z'

const articles = [
  {
    title: "LPL Split 2 2026 : Bilibili Gaming élimine EDward Gaming 3-0 et reste en lice dans le Lower Bracket",
    slug: 'lpl-split2-2026-blg-lb-edg-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg',
    excerpt: "Après leur défaite face à Team WE en Upper Bracket, Bilibili Gaming a rebondi en sweepant EDward Gaming 3-0 le 3 juin pour rester en vie dans les Playoffs LPL Split 2 2026.",
    sourceUrl: 'https://lol.fandom.com/wiki/LPL/2026_Season/Split_2_Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'Playoffs' }, { tag: 'BLG' }, { tag: 'EDG' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Bilibili Gaming s'est imposé 3-0 face à EDward Gaming le 3 juin dans le Lower Bracket Round 1 des Playoffs LPL Split 2 2026, maintenant leur espoir de remporter le titre. EDG quitte ainsi le tournoi, éliminé dès leur première rencontre dans le lower bracket. BLG, tombé dans le lower bracket après leur défaite 1-3 contre Team WE le 30 mai, repart de l'avant avec une victoire sans appel.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "BLG : de la défaite à la domination" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La défaite de BLG face à Team WE en Upper Bracket avait créé une surprise dans ces playoffs. Mais la réponse de Bilibili Gaming dans le lower bracket a été sans appel. Contre EDG, BLG a remporté les trois parties en série, sans laisser à leurs adversaires la moindre possibilité de revenir dans le match. Ce sweep 3-0 confirme que BLG dispose toujours du niveau pour prétendre au titre, même en passant par la voie des perdants.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "BLG vs JDG le 6 juin : un choc au sommet dans le lower bracket" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le prochain adversaire de BLG sera JD Gaming, éliminé de l'Upper Bracket après une défaite 1-3 contre Top Esports le 31 mai. Ce duel BLG vs JDG est prévu le 6 juin — un affrontement entre deux des équipes historiques de la LPL, toutes deux contraintes de passer par le lower bracket pour accéder à la grande finale. Dans l'autre demi-finale du Lower Bracket Round 2, Anyone's Legend affronte LGD Gaming le 5 juin.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Upper Bracket Final : WE vs TES le 7 juin" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Pendant que le lower bracket joue sa survie, Team WE et Top Esports s'affrontent en finale de l'Upper Bracket le 7 juin pour une place directe en Grand Final et une qualification au Mid-Season Invitational 2026. WE arrive avec l'élan de deux victoires dominantes (3-1 vs BLG, 3-0 vs AL), tandis que TES a confirmé sa domination avec des victoires sur LGD et JDG. La LPL désignera son premier finaliste le 7 juin au BuJi Cultural & Sports Center de Shenzhen.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "BLG fait le travail en Lower Bracket (3-0 vs EDG) et prépare son duel face à JDG le 6 juin — avec leurs aspirations au titre encore bien vivantes.",
          },
        ],
      },
    ],
  },
  {
    title: "LPL Split 2 2026: Bilibili Gaming Sweep EDward Gaming 3-0, Stay Alive in the Lower Bracket",
    slug: 'lpl-split2-2026-blg-lb-edg-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg',
    excerpt: "Bilibili Gaming swept EDward Gaming 3-0 on June 3 in Lower Bracket Round 1 of the LPL Split 2 2026 Playoffs, keeping their title hopes alive after dropping from the Upper Bracket.",
    sourceUrl: 'https://lol.fandom.com/wiki/LPL/2026_Season/Split_2_Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'Playoffs' }, { tag: 'BLG' }, { tag: 'EDG' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Bilibili Gaming eliminated EDward Gaming with a dominant 3-0 sweep on June 3 in Lower Bracket Round 1 of the LPL Split 2 2026 Playoffs. EDG are now officially out of the tournament. BLG, who dropped into the lower bracket after losing 1-3 to Team WE on May 30, bounced back in commanding fashion to keep their championship ambitions alive.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "From Upset Loss to Dominant Sweep" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "BLG's loss to Team WE in the Upper Bracket was considered a significant upset. Yet in the lower bracket, Bilibili Gaming answered with authority. Against EDG, they won all three games without giving their opponents any room to breathe. The clean sweep signals that BLG retains the firepower to make a deep run from the lower bracket — and potentially challenge for the LPL Split 2 championship.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Next: BLG vs JDG on June 6" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "BLG's lower bracket journey continues on June 6 when they face JD Gaming, who were eliminated from the Upper Bracket after a 1-3 loss to Top Esports on May 31. It will be a marquee lower bracket matchup between two of the LPL's most storied organizations, both fighting for a route back to the Grand Final. The other Lower Bracket Round 2 match sees Anyone's Legend take on LGD Gaming on June 5.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Upper Bracket Final: WE vs TES on June 7" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "On the winners' side, Team WE and Top Esports meet in the Upper Bracket Final on June 7, with a direct Grand Final berth and an MSI 2026 spot at stake. WE arrive with momentum from back-to-back dominant wins (3-1 vs BLG, 3-0 vs AL), while TES have looked equally convincing throughout the playoffs. All matches take place at the BuJi Cultural & Sports Center in Shenzhen.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "BLG get the job done in the lower bracket and set up a high-stakes clash against JDG on June 6 — their championship hopes still very much alive.",
          },
        ],
      },
    ],
  },
  {
    title: "LPL Split 2 2026: Bilibili Gaming elimina a EDward Gaming 3-0 y sigue vivo en el Lower Bracket",
    slug: 'lpl-split2-2026-blg-lb-edg-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg',
    excerpt: "Bilibili Gaming barrió a EDward Gaming por 3-0 el 3 de junio en el Lower Bracket Round 1, manteniendo vivas sus aspiraciones al título en los Playoffs LPL Split 2 2026.",
    sourceUrl: 'https://lol.fandom.com/wiki/LPL/2026_Season/Split_2_Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'Playoffs' }, { tag: 'BLG' }, { tag: 'EDG' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Bilibili Gaming eliminó a EDward Gaming con un dominante 3-0 el 3 de junio en el Lower Bracket Round 1 de los Playoffs LPL Split 2 2026. EDG queda oficialmente fuera del torneo. BLG, que cayó al lower bracket tras perder 1-3 contra Team WE el 30 de mayo, respondió de forma contundente para mantener vivas sus aspiraciones al título.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "De la derrota al sweep dominante" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La derrota de BLG ante Team WE en el Upper Bracket fue considerada una de las sorpresas de estos playoffs. Sin embargo, en el cuadro de perdedores, Bilibili Gaming respondió con autoridad. Ante EDG, ganaron los tres juegos seguidos sin dejar entrar a sus rivales en partido. El sweep 3-0 demuestra que BLG sigue siendo un equipo capaz de llegar hasta el final, incluso desde el lower bracket.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "El siguiente duelo: BLG vs JDG el 6 de junio" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El camino de BLG en el lower bracket continúa el 6 de junio frente a JD Gaming, que fue eliminado del Upper Bracket tras perder 1-3 ante Top Esports el 31 de mayo. Será un enfrentamiento de alto nivel entre dos de las organizaciones más históricas de la LPL, ambas luchando por llegar a la Gran Final. En la otra semifinal del Lower Bracket Round 2, Anyone's Legend se enfrenta a LGD Gaming el 5 de junio.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Final del Upper Bracket: WE vs TES el 7 de junio" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "En el lado de los ganadores, Team WE y Top Esports se medirán en la Final del Upper Bracket el 7 de junio, con una plaza directa en la Gran Final y clasificación para el MSI 2026 en juego. WE llega con el impulso de dos victorias dominantes (3-1 vs BLG, 3-0 vs AL), mientras TES también ha mostrado un juego sólido. Todos los partidos se disputan en el BuJi Cultural & Sports Center de Shenzhen.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "BLG cumple en el lower bracket (3-0 vs EDG) y se prepara para el duelo decisivo contra JDG el 6 de junio, con sus aspiraciones al campeonato todavía intactas.",
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
