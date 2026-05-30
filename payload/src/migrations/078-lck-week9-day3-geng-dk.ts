import type { MigrationModule } from './runner'

export const id = '078-lck-week9-day3-geng-dk'
export const description = 'LCK Semaine 9 Jour 3 — Gen.G 2-0 BRION, Dplus KIA 2-1 KRX (débuts de Chabel)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-30T08:00:00.000Z'

const articles = [
  {
    title: 'LCK Semaine 9 Jour 3 — Gen.G écrase Brion 2-0, Dplus KIA s\'impose 2-1 face à KRX',
    slug: 'lck-2026-week9-day3-geng-dk-resultats-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Gen.G conclut sa saison régulière à 14-4 en dominant Brion 2-0. Dans le même temps, Dplus KIA arrache un 2-1 face à KRX grâce aux débuts remarqués du jungler Chabel.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Rounds_1-2',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'Gen.G' }, { tag: 'Dplus KIA' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Le 29 mai 2026, troisième journée de la semaine 9 des LCK 2026 Rounds 1-2, Gen.G a balayé HANJIN BRION 2-0 et Dplus KIA a arraché une victoire 2-1 face à Kiwoom DRX. Ces deux succès redistribuent les cartes en tête du classement à deux jours de la fin de la saison régulière.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Gen.G conclut sa saison régulière à 14 victoires" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Gen.G a dominé HANJIN BRION avec autorité dans les deux manches de la rencontre, sans jamais laisser à l'adversaire la moindre chance de revenir dans la partie. Avec ce 2-0, l'équipe clôture sa campagne de saison régulière avec un bilan de 14 victoires et 4 défaites. Gen.G rejoint ainsi le leader HLE au palmarès des victoires — HLE affichant 14-3 conserve son avantage grâce à une défaite de moins. La régularité de Gen.G sur l'ensemble de la phase Rounds 1-2 lui assure une place solide en vue des playoffs.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Dplus KIA 2-1 KRX — Chabel brille dès ses débuts" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Dplus KIA a vécu une soirée plus disputée face à Kiwoom DRX. L'équipe a aligné 'Chabel' à la jungle en remplacement du titulaire 'Lucid', offrant au jeune joueur ses premières minutes en LCK. Si Dplus KIA s'est imposé en première manche, c'est KRX qui a égalisé à 1-1 en Game 2 en mettant la main sur le Dragon Soul et le Baron, dominant la partie du début à la fin. En troisième manche, Chabel sur Jarvan IV s'est montré décisif lors des combats d'équipe, permettant à Dplus KIA de sécuriser les objectifs-clés et d'empocher la série 2-1. Une entrée en matière réussie pour le jeune jungler.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Classement LCK 2026 Rounds 1-2 au 30 mai" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "HLE reste leader avec 14 victoires et 3 défaites. Gen.G est 2e à 14-4. KT Rolster s'adjuge une 3e place confortée par sa victoire 2-1 face à DNS Soopers le 30 mai, portant son bilan à 13-4. T1 suit à 12 victoires et 4 défaites. Dplus KIA remonte à 10-7 après son succès du 29 mai.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "La semaine 9 se conclut le 31 mai avec les rencontres HANJIN BRION contre HLE et Nongshim Red Force contre Dplus KIA, qui achèveront la phase de saison régulière avant le début des playoffs.",
          },
        ],
      },
    ],
  },
  {
    title: 'LCK Week 9 Day 3 — Gen.G Sweeps Brion 2-0, Dplus KIA Edges KRX 2-1',
    slug: 'lck-2026-week9-day3-geng-dk-results-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Gen.G closes out the regular season at 14-4 after sweeping Brion 2-0. Meanwhile, Dplus KIA survive a scare to defeat KRX 2-1 with rookie jungler Chabel shining on debut.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Rounds_1-2',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'Gen.G' }, { tag: 'Dplus KIA' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Day 3 of LCK 2026 Rounds 1-2 Week 9 on May 29, 2026 delivered two decisive results: Gen.G swept HANJIN BRION 2-0 to wrap up their regular season campaign, while Dplus KIA edged out Kiwoom DRX 2-1 in a tightly contested series that saw a rookie make his LCK debut.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Gen.G Finishes Regular Season at 14-4" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Gen.G put on a clinical performance against HANJIN BRION, closing out both games without giving the opponent a foothold. The 2-0 victory brings their final regular season record to 14 wins and 4 losses. Gen.G now matches league leader HLE in total victories — HLE holds the top spot at 14-3, maintaining their edge by one fewer loss. The result confirms Gen.G as one of the strongest teams heading into the LCK playoff bracket.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Dplus KIA 2-1 KRX — Chabel's Debut Stands Out" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Dplus KIA had a harder road against Kiwoom DRX. The team started rookie jungler 'Chabel' in place of regular starter 'Lucid', marking Chabel's first appearance in the LCK. DK won Game 1, but KRX came storming back in Game 2, securing the Dragon Soul and Baron to win convincingly and level the series at 1-1. In the decisive Game 3, Chabel on Jarvan IV delivered in the key teamfights, helping DK secure objectives and close out the series 2-1. A strong debut outing for the young jungler.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "LCK 2026 Rounds 1-2 Standings (as of May 30)" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "HLE leads at 14-3. Gen.G sits in 2nd at 14-4. KT Rolster holds 3rd place after defeating DNS Soopers 2-1 on May 30, bringing their record to 13-4. T1 follows at 12-4. Dplus KIA climbs to 10-7 after their May 29 victory.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Week 9 concludes on May 31 with HANJIN BRION vs HLE and Nongshim Red Force vs Dplus KIA, the final matches of the LCK 2026 regular season before the playoff stage begins.",
          },
        ],
      },
    ],
  },
  {
    title: 'LCK Semana 9 Día 3 — Gen.G arrasa a Brion 2-0, Dplus KIA supera a KRX 2-1',
    slug: 'lck-2026-week9-dia3-geng-dk-resultados-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Gen.G cierra la temporada regular con un récord de 14-4 al dominar a Brion 2-0. Mientras tanto, Dplus KIA supera a KRX 2-1 con el debut destacado del jungler Chabel.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Rounds_1-2',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'Gen.G' }, { tag: 'Dplus KIA' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "El tercer día de la semana 9 de las LCK 2026 Rounds 1-2, disputado el 29 de mayo de 2026, dejó dos resultados destacados: Gen.G barrió a HANJIN BRION 2-0 para cerrar su temporada regular, mientras que Dplus KIA venció a Kiwoom DRX 2-1 en una serie reñida en la que un debutante se llevó los elogios.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Gen.G cierra la temporada regular con 14 victorias" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Gen.G ofreció una actuación impecable frente a HANJIN BRION, cerrando ambas partidas con contundencia y sin dar opción al rival a reengancharse. Esta victoria 2-0 deja el balance final de Gen.G en 14 victorias y 4 derrotas. El equipo iguala en número de victorias al líder HLE, que mantiene el primer puesto con un mejor registro de 14-3. La regularidad de Gen.G a lo largo de toda la fase Rounds 1-2 los sitúa en una posición privilegiada de cara a los playoffs.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Dplus KIA 2-1 KRX — Chabel debuta con nota" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Dplus KIA tuvo que trabajar más duro frente a Kiwoom DRX. El equipo alineó al debutante 'Chabel' en la jungla en lugar del habitual 'Lucid', dando al joven jugador su primera aparición en la LCK. DK ganó la primera partida, pero KRX respondió con fuerza en la segunda, haciéndose con el Dragon Soul y el Barón para imponerse con claridad y empatar la serie a 1-1. En la tercera y decisiva partida, Chabel con Jarvan IV resultó clave en las peleas de equipo, ayudando a DK a asegurar los objetivos y cerrar la serie 2-1. Un debut muy convincente para el novel jungler.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Clasificación LCK 2026 Rounds 1-2 al 30 de mayo" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "HLE lidera con 14 victorias y 3 derrotas. Gen.G ocupa el 2.º puesto con 14-4. KT Rolster consolida el 3.er puesto tras derrotar a DNS Soopers 2-1 el 30 de mayo, situándose en 13-4. T1 sigue a 12 victorias y 4 derrotas. Dplus KIA asciende hasta 10-7 tras su victoria del 29 de mayo.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "La semana 9 concluye el 31 de mayo con los enfrentamientos HANJIN BRION contra HLE y Nongshim Red Force contra Dplus KIA, que pondrán el punto final a la temporada regular antes del inicio del bracket de playoffs.",
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
