import type { MigrationModule } from './runner'

export const id = '058-lck-dns-odin-coach-resignation'
export const description = 'LCK 2026 — DN SOOPers : démission du coach oDin après 13 défaites consécutives (record historique LCK)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-22T08:00:00.000Z'

const articles = [
  {
    title: 'DN SOOPers : le coach oDin démissionne après un record historique de 13 défaites en LCK 2026',
    slug: 'lck-dns-odin-resignation-2026-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'mercato',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/kNvFTN9CJdM/maxresdefault.jpg',
    excerpt:
      'Le head coach de DN SOOPers, Ju "oDin" Yeong-dal, a démissionné après que l\'équipe a enchaîné 13 défaites de série consécutives — soit 26 maps perdues d\'affilée — établissant ainsi le record absolu de la pire série de l\'histoire de la LCK. Yu "Ggoong" Byeong-jun assure l\'intérim.',
    sourceUrl: 'https://lolesports.com/en-US/leagues/lck',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'DN SOOPers' }, { tag: 'Mercato' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'C\'est officiel : DN SOOPers et leur head coach Ju "oDin" Yeong-dal se séparent. La décision, annoncée le 19 mai 2026, intervient après une saison cauchemardesque pour la franchise coréenne, calée à 1-13 dans la saison régulière LCK 2026. La série de 13 défaites consécutives en best-of-3 — et 26 maps perdues de suite — est la plus longue de toute l\'histoire de la Ligue coréenne.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Un bilan catastrophique malgré un recrutement ambitieux' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Le paradoxe de DNS en 2026 est frappant. L\'organisation avait pourtant misé gros cet hiver en recrutant Seo "deokdam" Dae-gil et Jeong "Peter" Yoon-su, le duo bot lane finaliste des Worlds 2025 sous les couleurs de KT Rolster. Sur le papier, cette paire était l\'une des plus redoutables du circuit. En pratique, la mayonnaise n\'a jamais pris : communication, meta, adaptation tactique — tout a semblé dysfonctionnel d\'emblée.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'oDin prend ses responsabilités, Ggoong en intérim' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Face à l\'ampleur du désastre, Ju "oDin" Yeong-dal a tenu à assumer : "J\'ai décidé de quitter l\'équipe pour prendre mes responsabilités en tant que head coach pour ces mauvais résultats." L\'assistant coach Yu "Ggoong" Byeong-jun lui succède en attendant qu\'une solution pérenne soit trouvée. L\'organisation a aussi évoqué le retour progressif de deokdam et Peter dans le cinq de base, après que DDoiV et Enosh avaient été intégrés en cours de route pour tenter d\'enrayer la spirale.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Un avenir sous haute tension' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'DNS dispute encore la fin de la saison régulière, avec des matchs contre KRX et GEN prévus cette semaine. La relégation et la place dans le Rise Group semblent les seuls enjeux restants pour une équipe déjà éliminée de toute course aux playoffs. La question désormais est de savoir si l\'organisation peut stabiliser son projet pour 2027, ou si d\'autres départs sont à attendre avant la fin de la saison.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'La saison de DN SOOPers en 2026 restera dans les annales de la LCK — pour les mauvaises raisons. Une leçon sur les dangers de recruter des stars sans construire un collectif cohérent.',
          },
        ],
      },
    ],
  },
  {
    title: 'DN SOOPers: Head Coach oDin Resigns After Setting LCK\'s Longest Losing Streak in 2026',
    slug: 'lck-dns-odin-resignation-2026-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'mercato',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/kNvFTN9CJdM/maxresdefault.jpg',
    excerpt:
      'DN SOOPers head coach Ju "oDin" Yeong-dal has stepped down after the team recorded 13 consecutive series losses — 26 straight map losses — the longest losing streak in LCK history. Yu "Ggoong" Byeong-jun takes over as interim head coach.',
    sourceUrl: 'https://lolesports.com/en-US/leagues/lck',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'DN SOOPers' }, { tag: 'Roster' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'DN SOOPers and head coach Ju "oDin" Yeong-dal have officially parted ways. The announcement came on May 19, 2026, following a catastrophic regular season run that left the team sitting at 1-13 — the worst record in the LCK. Their streak of 13 consecutive series losses, translating to 26 straight map defeats, is the longest losing run ever recorded in the history of Korean League of Legends.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'High-Profile Signings That Never Delivered' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'The collapse is all the more striking given DN SOOPers\' ambitious offseason. The organization invested heavily in Seo "deokdam" Dae-gil and Jeong "Peter" Yoon-su — KT Rolster\'s bot lane duo and 2025 World Championship Grand Finalists. On paper, it was one of the strongest bot sides in the LCK. In practice, the team never found its footing, struggling with coordination, meta adaptation, and in-game decision-making throughout the split.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'oDin Steps Down, Ggoong Named Interim Coach' }],
      },
      {
        type: 'p',
        children: [
          {
            text: '"I have decided to leave the team to take responsibility as head coach for the poor results," oDin stated in his departure message. Assistant coach Yu "Ggoong" Byeong-jun has been named interim head coach while the organization searches for a permanent replacement. DNS also confirmed that deokdam and Peter are expected to return to the starting lineup, after DDoiV and Enosh were fielded as substitutes in an attempt to reverse the team\'s fortunes.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'What Comes Next for DNS?' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'DN SOOPers still have matches remaining in the regular season, including clashes against KRX and GEN this week. With no path to the playoffs, the team\'s remaining games are essentially irrelevant in terms of standings. The focus now shifts to the offseason: can the organization rebuild a coherent structure around their talented-but-misfiring roster, or will further departures follow before the year is out?',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'DN SOOPers\' 2026 season will go down as a cautionary tale in LCK history — a reminder that star power alone is no substitute for team identity and coaching stability.',
          },
        ],
      },
    ],
  },
  {
    title: 'DN SOOPers: el entrenador oDin dimite tras establecer el récord de derrotas consecutivas en la LCK 2026',
    slug: 'lck-dns-odin-resignation-2026-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'mercato',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/kNvFTN9CJdM/maxresdefault.jpg',
    excerpt:
      'El head coach de DN SOOPers, Ju "oDin" Yeong-dal, ha dimitido tras 13 derrotas consecutivas de serie — 26 mapas perdidos seguidos — el récord histórico de la LCK. Yu "Ggoong" Byeong-jun asume el cargo de entrenador interino.',
    sourceUrl: 'https://lolesports.com/en-US/leagues/lck',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'DN SOOPers' }, { tag: 'Mercato' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Es oficial: DN SOOPers y su head coach Ju "oDin" Yeong-dal han tomado caminos separados. El anuncio llegó el 19 de mayo de 2026, tras una temporada regular desastrosa que dejó al equipo con un registro de 1-13, el peor de toda la LCK. Su racha de 13 derrotas consecutivas en series —es decir, 26 mapas perdidos de forma seguida— es la más larga jamás registrada en la historia de la liga coreana.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Un fichaje ambicioso que no dio resultados' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'El derrumbe resulta aún más llamativo dado el ambicioso mercado de invierno de DNS. La organización apostó fuerte por Seo "deokdam" Dae-gil y Jeong "Peter" Yoon-su, el duo de bot lane de KT Rolster y finalistas del Campeonato Mundial 2025. Sobre el papel, era una de las bots más temibles de la LCK. En la práctica, el equipo nunca encontró su juego, luchando con la coordinación, la adaptación a la meta y la toma de decisiones durante todo el split.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'oDin asume responsabilidades, Ggoong como técnico interino' }],
      },
      {
        type: 'p',
        children: [
          {
            text: '"He decidido abandonar el equipo para asumir mi responsabilidad como head coach por los malos resultados", declaró oDin en su mensaje de despedida. El segundo entrenador Yu "Ggoong" Byeong-jun ha sido nombrado técnico interino mientras la organización busca un sustituto permanente. DNS también confirmó que deokdam y Peter tienen previsto regresar al cinco inicial, después de que DDoiV y Enosh fueran alineados como suplentes en un intento de revertir la situación.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: '¿Qué le espera a DNS?' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'DN SOOPers todavía tiene partidas pendientes en la temporada regular, incluyendo enfrentamientos contra KRX y GEN esta semana. Sin opciones de clasificarse para los playoffs, los partidos restantes del equipo son prácticamente testimoniales. El foco se traslada ahora a la pretemporada: ¿puede la organización reconstruir una estructura coherente en torno a una plantilla talentosa pero desconectada, o habrá más salidas antes de que acabe el año?',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'La temporada 2026 de DN SOOPers quedará en los anales de la LCK como advertencia: el talento individual sin identidad colectiva ni estabilidad en el cuerpo técnico no es suficiente para triunfar.',
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
