import type { MigrationModule } from './runner'

export const id = '088-lpl-split2-2026-we-upper-final'
export const description = 'LPL Split 2 2026 — Team WE 3-0 AL, finale Upper Bracket vs TES le 7 juin (MSI 2026 en jeu)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-03T08:00:00.000Z'

const articles = [
  {
    title: 'LPL Split 2 2026 : Team WE écrase Anyone\'s Legend 3-0 et rejoint TES en finale Upper Bracket',
    slug: 'lpl-split2-2026-we-upper-final-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    excerpt: "Team WE a réalisé une performance dominante face à Anyone's Legend (3-0) le 1er juin pour s'assurer une place en finale Upper Bracket contre Top Esports le 7 juin. Un ticket direct pour le MSI 2026 est en jeu.",
    sourceUrl: 'https://lol.fandom.com/wiki/LPL/2026_Season/Split_2_Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'Playoffs' }, { tag: 'Team WE' }, { tag: 'TES' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Team WE continue d'écrire l'une des plus belles histoires de la LPL Split 2 2026. Le 1er juin, l'équipe a balayé Anyone's Legend 3-0 en demi-finale de l'Upper Bracket pour se qualifier pour la grande finale face à Top Esports, prévue le 7 juin. Un ticket direct pour le Mid-Season Invitational 2026 est en jeu.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Un run de playoffs exceptionnel" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le parcours de WE en playoffs est tout simplement remarquable. L'équipe a terminé la saison régulière en-dehors du top 4, contrainte de passer par le play-in. Pourtant, depuis leur entrée dans le tableau principal, WE enchaîne les performances : une victoire 3-1 sur Bilibili Gaming le 30 mai — l'une des équipes favorites du tournoi — puis un sweep 3-0 d'Anyone's Legend deux jours plus tard. WE a déjà remporté plus de victoires en playoffs que durant l'ensemble de sa saison régulière, un fait souligné par plusieurs observateurs.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "WE vs TES le 7 juin : le MSI 2026 en jeu" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "De l'autre côté du bracket, Top Esports a confirmé sa domination en battant JD Gaming 3-1 en demi-finale. TES aborde la finale Upper Bracket en position de favori, avec une saison régulière solide derrière eux. Face à eux, Team WE arrive avec l'élan d'une équipe en totale confiance, ayant enchaîné des victoires face à deux prétendants sérieux au titre. Le vainqueur de ce match du 7 juin se qualifiera directement pour le MSI 2026.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Lower Bracket : la lutte continue" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Pendant ce temps, dans le tableau des perdants, Bilibili Gaming et EDward Gaming se disputent leur survie dans le tournoi ce 3 juin. ThunderTalk Gaming a de son côté éliminé LGD Gaming 3-2 le 2 juin pour rester en course. Les Playoffs LPL Split 2 2026 se disputent au BuJi Cultural & Sports Center de Shenzhen.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Team WE vs Top Esports : le 7 juin, la LPL connaîtra son premier finaliste — et son premier qualifié pour le MSI 2026.",
          },
        ],
      },
    ],
  },
  {
    title: 'LPL Split 2 2026: Team WE Sweeps Anyone\'s Legend 3-0, Will Face TES in Upper Bracket Final',
    slug: 'lpl-split2-2026-we-upper-final-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    excerpt: "Team WE swept Anyone's Legend 3-0 on June 1 to advance to the Upper Bracket Final against Top Esports on June 7, with a direct MSI 2026 slot on the line.",
    sourceUrl: 'https://lol.fandom.com/wiki/LPL/2026_Season/Split_2_Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'Playoffs' }, { tag: 'Team WE' }, { tag: 'TES' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Team WE are writing one of the most impressive stories in LPL Split 2 2026. On June 1, they swept Anyone's Legend 3-0 in the Upper Bracket Semifinal, booking a spot in the Grand Final against Top Esports on June 7. A direct qualification slot for Mid-Season Invitational 2026 is at stake.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "A Remarkable Playoff Run" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "WE's playoff journey has been extraordinary. The team entered the main bracket through the play-in stage, yet they have gone on to defeat two top contenders back-to-back. On May 30, WE upset Bilibili Gaming 3-1 in a match that shocked the region. Two days later, they dismantled Anyone's Legend without dropping a single game. According to analysts, WE have now won more matches in this playoff run than they did during the entire regular season.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "WE vs TES on June 7: MSI 2026 on the Line" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Top Esports reached the Upper Bracket Final by defeating JD Gaming 3-1 in their own semifinal. TES enter the final as favorites, backed by a strong regular season. But WE arrive with momentum and confidence after back-to-back dominant wins. The winner of the June 7 clash will earn a direct berth to MSI 2026.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Lower Bracket: The Fight Goes On" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "In the lower bracket, Bilibili Gaming and EDward Gaming clash for survival on June 3. ThunderTalk Gaming also stayed alive after eliminating LGD Gaming 3-2 on June 2. All playoff matches are held at the BuJi Cultural & Sports Center in Shenzhen.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Team WE vs Top Esports on June 7 — the LPL will crown its first finalist and its first MSI 2026 qualifier.",
          },
        ],
      },
    ],
  },
  {
    title: 'LPL Split 2 2026: Team WE arrasa a Anyone\'s Legend 3-0 y se medirá a TES en la Final Upper Bracket',
    slug: 'lpl-split2-2026-we-upper-final-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    excerpt: "Team WE barrió a Anyone's Legend 3-0 el 1 de junio y avanzó a la Final del Upper Bracket contra Top Esports el 7 de junio, con una plaza directa para el MSI 2026 en juego.",
    sourceUrl: 'https://lol.fandom.com/wiki/LPL/2026_Season/Split_2_Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'Playoffs' }, { tag: 'Team WE' }, { tag: 'TES' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Team WE está protagonizando una de las historias más impresionantes de los Playoffs LPL Split 2 2026. El 1 de junio, barrieron a Anyone's Legend por 3-0 en las semifinales del Upper Bracket y se clasificaron para la gran final contra Top Esports el 7 de junio. En juego: una plaza directa para el Mid-Season Invitational 2026.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Una campaña de playoffs extraordinaria" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El recorrido de WE en estos playoffs es sobresaliente. El equipo llegó al cuadro principal a través de la fase de clasificación, pero desde entonces no ha parado de sorprender. El 30 de mayo eliminaron a Bilibili Gaming por 3-1, uno de los equipos favoritos al título. Dos días después, destrozaron a Anyone's Legend sin ceder ni un solo juego. Según los analistas, WE ya ha conseguido más victorias en estos playoffs que en toda la temporada regular.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "WE vs TES el 7 de junio: el MSI 2026 en juego" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Top Esports llegó a la final del Upper Bracket tras derrotar a JD Gaming por 3-1 en su propia semifinal. TES llega como favorito, respaldado por una sólida temporada regular. Sin embargo, Team WE llega con un impulso imparable tras dos victorias consecutivas de alto nivel. El ganador del 7 de junio se clasificará directamente para el MSI 2026.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Lower Bracket: la batalla continúa" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "En el cuadro de perdedores, Bilibili Gaming y EDward Gaming se enfrentan por su supervivencia el 3 de junio. ThunderTalk Gaming también sigue en liza tras eliminar a LGD Gaming por 3-2 el 2 de junio. Todos los partidos de los Playoffs se disputan en el BuJi Cultural & Sports Center de Shenzhen.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Team WE contra Top Esports el 7 de junio — la LPL conocerá a su primer finalista y a su primer clasificado para el MSI 2026.",
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
