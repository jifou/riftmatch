import type { MigrationModule } from './runner'

export const id = '066-other-lcs-spring-2026-ub-semis-c9-lyon'
export const description = 'Autres Régions — LCS Spring 2026 : Cloud9 et LYON en finale Upper Bracket après deux demi-finales épiques'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-25T08:00:00.000Z'

const articles = [
  {
    title: 'LCS Spring 2026 : Cloud9 et LYON s\'imposent en demi-finales Upper Bracket',
    slug: 'lcs-spring-2026-c9-lyon-ub-semis-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/euo4b0aim-M/maxresdefault.jpg',
    excerpt: 'Cloud9 survit à l\'élimination directe face à FlyQuest (3-2) en cinq parties palpitantes, tandis que LYON domine Team Liquid 3-1. Les deux formations s\'affronteront le 6 juin pour une place directe en grande finale.',
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcs',
    tags: [{ tag: 'LoL' }, { tag: 'LCS' }, { tag: 'Cloud9' }, { tag: 'LYON' }, { tag: 'Esports' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Les demi-finales de l'Upper Bracket des playoffs LCS Spring 2026 ont livré deux séries mémorables ce week-end à Los Angeles. Cloud9 et LYON se sont qualifiés pour la finale Upper Bracket, prévue le 6 juin, avec des parcours très différents : une survie épique côté Cloud9, une démonstration de force côté LYON." }],
      },
      {
        type: 'h2',
        children: [{ text: 'Cloud9 arrache sa qualification face à FlyQuest (3-2)' }],
      },
      {
        type: 'p',
        children: [{ text: "Samedi 23 mai, Cloud9, tête de série numéro un après une saison régulière parfaite (7-0), a failli tout perdre face à une FlyQuest ambitieuse. Après avoir mené 2-0, les Bleus ont vu FlyQuest égaliser à 2-2 grâce à deux parties de haute intensité. C'est dans un match 5 décisif que Cloud9 a su hausser son niveau, porté par un Robert « Blaber » Huang exceptionnel, nommé MVP de la série avec un KDA combiné de 10-15-35. FlyQuest bascule dans le Lower Bracket où une longue route les attend." }],
      },
      {
        type: 'h2',
        children: [{ text: 'LYON confirme son statut avec une victoire nette sur Team Liquid (3-1)' }],
      },
      {
        type: 'p',
        children: [{ text: "Le lendemain, dimanche 24 mai, LYON a répondu avec autorité. Face à Team Liquid Alienware (5e de la saison régulière et surprenant qualifié), l'organisation texane a dominé la série 3-1, ne concédant qu'un seul match sur les quatre disputés. LYON confirme ainsi sa place parmi les grands favoris du titre printanier, une constance notable depuis leur victoire au Lock-In en janvier." }],
      },
      {
        type: 'h2',
        children: [{ text: 'Finale Upper Bracket : Cloud9 vs LYON le 6 juin' }],
      },
      {
        type: 'p',
        children: [{ text: 'La finale Upper Bracket opposera donc deux des meilleures équipes de la LCS depuis le début de la saison. Le vainqueur accèdera directement à la grande finale, tandis que le perdant retombera dans le Lower Bracket mais conservera sa chance. FlyQuest et Team Liquid, de leur côté, devront batailler dans le Lower Bracket pour espérer un run miracle.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Rendez-vous le 6 juin pour une finale Upper Bracket qui s'annonce explosive entre Cloud9 et LYON. Le trône de la LCS Spring 2026 se jouera là." }],
      },
    ],
  },
  {
    title: 'LCS Spring 2026: Cloud9 and LYON punch their tickets to the Upper Bracket Final',
    slug: 'lcs-spring-2026-c9-lyon-ub-semis-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/euo4b0aim-M/maxresdefault.jpg',
    excerpt: 'Cloud9 survived a five-game thriller against FlyQuest (3-2) while LYON dominated Team Liquid 3-1. The two powerhouses will clash in the Upper Bracket Final on June 6.',
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcs',
    tags: [{ tag: 'LoL' }, { tag: 'LCS' }, { tag: 'Cloud9' }, { tag: 'LYON' }, { tag: 'Esports' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'The LCS Spring 2026 Upper Bracket Semifinals delivered two captivating series this weekend in Los Angeles. Cloud9 narrowly escaped elimination against FlyQuest while LYON made a commanding statement against Team Liquid. Both teams will now meet in the Upper Bracket Final on June 6, with a direct path to the grand final on the line.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Cloud9 escape artists: a 3-2 thriller against FlyQuest' }],
      },
      {
        type: 'p',
        children: [{ text: 'On Saturday, May 23, top seed Cloud9 — who finished the regular season with a perfect 7-0 record — found themselves on the edge against an inspired FlyQuest squad. After racing to a 2-0 lead, Cloud9 dropped the next two games and were pushed to a decisive game 5. Jungle Robert "Blaber" Huang rose to the occasion, earning MVP honors with a combined KDA of 10-15-35 and delivering a statement performance when it mattered most. FlyQuest fought valiantly but now must navigate the lower bracket to keep their title dreams alive.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'LYON dominate Team Liquid 3-1' }],
      },
      {
        type: 'p',
        children: [{ text: 'On Sunday, May 24, LYON left little doubt about their caliber. Facing a surprising Team Liquid Alienware side that had finished fifth in the regular season, LYON controlled the series from start to finish, dropping only one game across the four played. This win cements their status as co-favorites alongside Cloud9, continuing a dominant run that began with their Lock-In title back in January.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Upper Bracket Final: Cloud9 vs LYON on June 6' }],
      },
      {
        type: 'p',
        children: [{ text: 'The winner of the June 6 clash between Cloud9 and LYON will advance directly to the grand final. The loser drops to the lower bracket but remains alive. Meanwhile, FlyQuest and Team Liquid will fight for their playoff lives in the lower bracket, hoping to stage a Cinderella run back to the top.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Cloud9 vs LYON on June 6: two of NA's best square off for a direct seat in the LCS Spring 2026 Grand Final." }],
      },
    ],
  },
  {
    title: 'LCS Primavera 2026: Cloud9 y LYON avanzan a la Final del Upper Bracket',
    slug: 'lcs-spring-2026-c9-lyon-ub-semis-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/euo4b0aim-M/maxresdefault.jpg',
    excerpt: 'Cloud9 remontó un 0-2 ante FlyQuest para ganar 3-2, mientras LYON derrotó cómodamente a Team Liquid 3-1. Ambas organizaciones se verán las caras el 6 de junio por el acceso directo a la gran final.',
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcs',
    tags: [{ tag: 'LoL' }, { tag: 'LCS' }, { tag: 'Cloud9' }, { tag: 'LYON' }, { tag: 'Esports' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'Las semifinales del Upper Bracket de los playoffs de la LCS Primavera 2026 dejaron dos series para el recuerdo este fin de semana en Los Ángeles. Cloud9 salvó una bala ante FlyQuest en cinco partidas, mientras que LYON barrió a Team Liquid 3-1 con autoridad. Ambos equipos disputarán la Final del Upper Bracket el próximo 6 de junio, con un pasaje directo a la gran final en juego.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Cloud9 remonta ante FlyQuest y gana 3-2' }],
      },
      {
        type: 'p',
        children: [{ text: 'El sábado 23 de mayo, Cloud9 — primer cabeza de serie tras una temporada regular perfecta de 7-0 — estuvo a punto de caer ante una FlyQuest muy competitiva. Los azules se pusieron 2-0 arriba antes de que FlyQuest empatara la serie 2-2 y forzara el quinto y definitivo encuentro. Fue el jungla Robert "Blaber" Huang quien resolvió la papeleta, alzándose con el MVP de la serie gracias a un KDA combinado de 10-15-35. FlyQuest cae al Lower Bracket, donde tendrá que remontar para seguir en la lucha.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'LYON aplasta a Team Liquid y confirma su candidatura (3-1)' }],
      },
      {
        type: 'p',
        children: [{ text: 'El domingo 24 de mayo, LYON no dio lugar a sorpresas. Frente a un Team Liquid Alienware que se había colado entre los favoritos con su quinta plaza en la fase regular, la organización texana dominó la serie de principio a fin, concediendo solo un mapa en cuatro partidas. La victoria refuerza su condición de cofavorita junto a Cloud9, consolidando una racha impresionante que arrancó con el título del Lock-In en enero.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Final del Upper Bracket: Cloud9 vs LYON el 6 de junio' }],
      },
      {
        type: 'p',
        children: [{ text: 'Quien gane el 6 de junio tendrá acceso directo a la gran final. El perdedor caerá al Lower Bracket pero seguirá con vida. FlyQuest y Team Liquid, por su parte, deberán superar varios obstáculos para tener otra oportunidad de pelear por el título.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'El 6 de junio, Cloud9 y LYON deciden quién va directo a la Final de la LCS Primavera 2026. La cita está en el calendario.' }],
      },
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
