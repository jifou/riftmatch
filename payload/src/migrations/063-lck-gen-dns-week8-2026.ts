import type { MigrationModule } from './runner'

export const id = '063-lck-gen-dns-week8-2026'
export const description = 'LCK 2026 — Gen.G écrase DNS 2-0 en S8, 26 défaites consécutives pour les SOOPers'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-24T08:00:00.000Z'

const articles = [
  {
    title: 'LCK 2026 S8 : Gen.G écrase DNS 2-0, la série noire record des SOOPers atteint 26 défaites',
    slug: 'lck-gen-dns-week8-2026-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/ikrEO6gqFuQ/maxresdefault.jpg',
    excerpt:
      'Gen.G a écrasé DN SOOPers 2-0 lors de la semaine 8 des LCK 2026 Rounds 1-2, maintenant leur invincibilité en saison régulière alors que les SOOPers sombrent dans un record historique de 26 défaites consécutives.',
    sourceUrl:
      'https://www.yardbarker.com/entertainment/articles/lck_2026_regular_season_week_eight_multiple_teams_challenging_for_the_final_road_to_msi_spots/s1_17456_43862030',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'Gen.G' }, { tag: 'DN SOOPers' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Ce dimanche 24 mai 2026, Gen.G a poursuivi sa marche implacable en dominant DN SOOPers 2-0 lors de la huitième semaine des LCK 2026 Rounds 1-2. Une nouvelle victoire qui confirme que rien ni personne ne semble capable d'arrêter la machine Gen.G en saison régulière cette année.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'DNS et le record qui ne fait pas envie' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "DN SOOPers traversent la pire période de l'histoire de la LCK. Avec cette nouvelle défaite, la série de défaites consécutives de l'organisation atteint désormais 26 — un record absolu dans la compétition coréenne. Pourtant, les ambitions étaient grandes en début de saison : l'arrivée de deokdam et Peter depuis KT Rolster, ainsi que l'ex-milieu de BRION Clozer, devait apporter une bouffée d'air frais. Mais les synergies n'ont jamais pris. La résignation en cours de saison de leur entraîneur principal Odin a symbolisé la profondeur de la crise. Éliminés de toute course au Road to MSI depuis plusieurs semaines, les SOOPers jouent désormais pour l'honneur.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Gen.G, cap sur le 18-0 historique' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "De l'autre côté du spectre se trouvent Kiin, Canyon, Chovy, Ruler et Duro — un cinq majeur qui n'a toujours pas concédé la moindre série depuis le début des Rounds 1-2. Gen.G est en passe de répéter — voire d'égaler — leur propre exploit historique : le 18-0 en saison régulière réalisé en 2025. Les victoires ne sont pas toujours faciles (quelques parties serrées ont rappelé que les adversaires existent), mais la régularité de l'équipe est tout simplement implacable. Canyon domine les jungles coréennes, Chovy reste indiscutablement le meilleur mid-laner du monde, et Ruler continue de porter l'attaque avec une constance remarquable.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'T1 s\'impose également face à BRO' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "En deuxième match de la soirée, T1 a dominé HANJIN BRION 2-0, consolidant leur position dans la course aux dernières places qualificatives pour le Road to MSI. La semaine 9 s'annonce décisive : Dplus KIA et BRION se disputent encore les derniers tickets, et chaque série comptera double dans ce sprint final.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Gen.G est en route pour un second 18-0 historique consécutif. La LCK 2026 pourrait bien s'achever avec une dynasty plus dominante encore qu'en 2025.",
          },
        ],
      },
    ],
  },
  {
    title: 'LCK 2026 W8: Gen.G Sweep DNS 2-0 as DN SOOPers\' Historic Losing Streak Hits 26',
    slug: 'lck-gen-dns-week8-2026-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/ikrEO6gqFuQ/maxresdefault.jpg',
    excerpt:
      "Gen.G swept DN SOOPers 2-0 in Week 8 of LCK 2026 Rounds 1-2, staying undefeated in the regular season while DNS sink deeper into an LCK-record 26-game losing streak.",
    sourceUrl:
      'https://www.yardbarker.com/entertainment/articles/lck_2026_regular_season_week_eight_multiple_teams_challenging_for_the_final_road_to_msi_spots/s1_17456_43862030',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'Gen.G' }, { tag: 'DN SOOPers' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Gen.G extended their perfect record in LCK 2026 Rounds 1-2 with a commanding 2-0 sweep over DN SOOPers on Sunday, Week 8 of the regular season. The result further cements the reigning world-class roster as the most dominant force in Korean League of Legends this year.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "DNS Sink to an LCK-Record 26 Consecutive Losses" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The defeat pushed DN SOOPers' losing streak to 26 consecutive series — the longest in LCK history. It is a painful fall for a team that entered 2026 with genuine ambitions: high-profile additions deokdam and Peter arrived from KT Rolster alongside former BRION mid-laner Clozer. The pieces looked good on paper, but the squad never gelled. Mid-season, head coach Odin stepped down — a stark signal of a team in crisis. Eliminated from Road to MSI contention weeks ago, DNS are now playing out the string, searching for momentum heading into the offseason.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Gen.G Marching Toward Back-to-Back 18-0 Seasons" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Gen.G's Kiin, Canyon, Chovy, Ruler and Duro remain undefeated in series play since the very first week of Rounds 1-2. Their form puts them firmly on course to match — or surpass — their legendary 18-0 regular season from 2025. While a handful of matches have been tighter than expected, the five-man core has never been truly threatened. Canyon continues to dictate the pace from the jungle, Chovy remains the best mid-laner in the world, and Ruler's ADC play has been flawless.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "T1 Also Claim 2-0 Win Over BRION" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "In the evening's second match, T1 dispatched HANJIN BRION 2-0, keeping themselves in a strong position as the regular season approaches its final stretch. With Week 9 on the horizon, the Road to MSI race remains alive — Dplus KIA and BRION are still scrapping for the final qualifying spots, and every remaining series will count.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Gen.G are on a collision course with history. A second consecutive 18-0 regular season would confirm them as the most dominant dynasty Korean LoL has ever seen.",
          },
        ],
      },
    ],
  },
  {
    title: 'LCK 2026 S8: Gen.G arrasa 2-0 a DNS y los SOOPers alcanzan un récord histórico de 26 derrotas',
    slug: 'lck-gen-dns-week8-2026-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/ikrEO6gqFuQ/maxresdefault.jpg',
    excerpt:
      'Gen.G barrió 2-0 a DN SOOPers en la semana 8 de las LCK 2026 Rounds 1-2, manteniéndose invictos mientras los SOOPers rozan el récord histórico de 26 derrotas consecutivas en la LCK.',
    sourceUrl:
      'https://www.yardbarker.com/entertainment/articles/lck_2026_regular_season_week_eight_multiple_teams_challenging_for_the_final_road_to_msi_spots/s1_17456_43862030',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'Gen.G' }, { tag: 'DN SOOPers' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Gen.G sumó una nueva victoria en las LCK 2026 Rounds 1-2 este domingo, barriendo 2-0 a DN SOOPers en la jornada de la semana 8. El invicto de la escuadra de Seúl se mantiene intacto, y el equipo apunta directamente a repetir su histórico registro perfecto de la temporada 2025.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'DNS y el récord que nadie quiere' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La derrota eleva a 26 la racha de derrotas consecutivas de DN SOOPers, un récord absoluto en la historia de la LCK. Los SOOPers llegaron a 2026 con grandes promesas: deokdam y Peter llegaron desde KT Rolster junto al ex-mid de BRION Clozer, pero las sinergias nunca llegaron a cuajar. La dimisión del entrenador principal Odin a mitad de temporada marcó el punto más bajo de una campaña para olvidar. Eliminados de la carrera por el Road to MSI desde hace semanas, el equipo busca ahora recuperar la moral de cara a la próxima temporada.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Gen.G, rumbo a un segundo 18-0 histórico' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Kiin, Canyon, Chovy, Ruler y Duro no han cedido ninguna serie desde el inicio de las Rounds 1-2. Su rendimiento los sitúa en el camino de igualar —o incluso superar— su propio récord histórico de 18-0 en fase regular establecido en 2025. Algunos partidos han sido más disputados de lo esperado, pero el cinco titular nunca ha estado en verdadero peligro. Canyon sigue dictando el ritmo desde la jungla, Chovy permanece como el mejor midlaner del mundo, y la consistencia de Ruler en el carril inferior es simplemente aplastante.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'T1 también suma frente a BRION' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "En el segundo partido de la jornada, T1 derrotó 2-0 a HANJIN BRION, consolidando su posición en la lucha por los últimos puestos de clasificación para el Road to MSI. Con la semana 9 a la vuelta de la esquina, la pelea entre Dplus KIA y BRION por los tickets restantes promete ser encarnizada en el sprint final de la fase regular.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Gen.G está en camino de consagrarse como la dinastía más dominante de la historia reciente de la LCK. Un segundo 18-0 consecutivo lo confirmaría más allá de toda duda.",
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
