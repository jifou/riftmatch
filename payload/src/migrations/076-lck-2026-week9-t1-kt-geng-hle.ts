import type { MigrationModule } from './runner'

export const id = '076-lck-2026-week9-t1-kt-geng-hle'
export const description = 'LCK Rounds 1-2 Semaine 9 — T1 bat KT 2-0, Gen.G bat HLE 2-1'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-29T08:00:00.000Z'

const articles = [
  {
    title: 'LCK Semaine 9 — T1 domine KT 2-0 et monte en 2e position',
    slug: 'lck-2026-week9-t1-bat-kt-2-0-resultats-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yorick_0.jpg',
    excerpt: "T1 s'impose 2-0 face à KT Rolster et remonte en 2e position des LCK 2026 Rounds 1-2. La veille, Gen.G avait renversé le leader HLE 2-1.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Rounds_1-2',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'T1' }, { tag: 'KT Rolster' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "T1 a dominé KT Rolster 2-0 le 28 mai 2026 lors de la semaine 9 des LCK 2026 Rounds 1-2. Cette victoire permet à T1 de remonter en 2e position du classement de la saison régulière, tandis que KT Rolster valide sa 4e place.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Un Yorick héroïque mais insuffisant pour KT" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "En première manche, 'Perfect' Lee Seung-min a réalisé un superplay sur Yorick, obtenant le first blood en s'échappant d'un gank adverse avec maestria. 'Bdd' Kwak Bo-seong est venu appuyer avec son Ryze depuis la mid-lane pour décrocher un deuxième kill, faisant basculer la voie top en faveur de KT. Malgré cet avantage initial autour de Yorick, T1 a répondu avec méthode : trouvant systématiquement des ouvertures loin des zones d'influence du champion de KT, la formation rouge et noire a progressivement repris le contrôle de la carte et remporté la partie.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Gen.G renverse HLE la veille" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le 27 mai, Gen.G avait déjà frappé fort en s'imposant face au leader Hanwha Life Esports sur le score de 2-1. Une victoire qui avait resserré l'écart en tête du classement.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Classement LCK 2026 Rounds 1-2 (après le 28 mai)" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "HLE reste en tête avec un bilan de 14 victoires pour 3 défaites. T1 s'installe en 2e position à 12-4 grâce à sa victoire du jour. Gen.G affiche 13 victoires et 4 défaites. KT Rolster, avec 12 victoires et 4 défaites, confirme sa 4e place. DK complète le top 5 à 9-7. La semaine 9 se poursuit jusqu'au 31 mai avec notamment DK vs KRX et Gen.G vs BRO le 29 mai.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "La phase Rounds 1-2 touche à sa fin : les classements définitifs seront arrêtés au terme de la semaine 9, avant le début des playoffs.",
          },
        ],
      },
    ],
  },
  {
    title: 'LCK Week 9 — T1 Sweeps KT 2-0, Rises to 2nd Place',
    slug: 'lck-2026-week9-t1-beats-kt-2-0-results-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yorick_0.jpg',
    excerpt: "T1 defeated KT Rolster 2-0 on May 28 to move into 2nd place in LCK 2026 Rounds 1-2. A day earlier, Gen.G had upset league leader HLE 2-1.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Rounds_1-2',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'T1' }, { tag: 'KT Rolster' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "T1 swept KT Rolster 2-0 on May 28, 2026 in Week 9 of LCK 2026 Rounds 1-2. The victory moves T1 up to 2nd place in the regular season standings, while KT Rolster officially locks in 4th place.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Perfect's Yorick Couldn't Stop T1's Comeback" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "In Game 1, KT's 'Perfect' Lee Seung-min turned heads with a superplay on Yorick, securing first blood by escaping a gank in spectacular fashion. 'Bdd' Kwak Bo-seong followed up with his Ryze, roaming top to pick up a second kill and tilting the top lane in KT's favor. However, despite the early advantage around Yorick, KT could not convert it into a game win. T1 consistently found engages away from Yorick's range, gradually shifted momentum, and closed out both games.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Gen.G Takes Down HLE the Day Before" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "On May 27, Gen.G had already made headlines by defeating league leader Hanwha Life Esports 2-1, tightening the race at the top of the standings.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "LCK 2026 Rounds 1-2 Standings (as of May 28)" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "HLE holds 1st place at 14-3. T1 climbs to 2nd at 12-4. Gen.G sits at 13-4. KT Rolster confirms 4th place at 12-4. DK rounds out the top 5 at 9-7. Week 9 continues through May 31, with DK vs KRX and Gen.G vs BRO scheduled for May 29.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "The Rounds 1-2 phase wraps up at the end of Week 9 before the playoff bracket begins.",
          },
        ],
      },
    ],
  },
  {
    title: 'LCK Semana 9 — T1 vence a KT 2-0 y sube al 2.º puesto',
    slug: 'lck-2026-semana9-t1-vence-kt-2-0-resultados-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yorick_0.jpg',
    excerpt: "T1 derrotó a KT Rolster 2-0 el 28 de mayo y asciende al 2.º puesto en las LCK 2026 Rounds 1-2. El día anterior, Gen.G había eliminado al líder HLE 2-1.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Rounds_1-2',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'T1' }, { tag: 'KT Rolster' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "T1 barrió a KT Rolster 2-0 el 28 de mayo de 2026 en la semana 9 de las LCK 2026 Rounds 1-2. La victoria sube a T1 al 2.º puesto de la clasificación de la temporada regular, mientras que KT Rolster confirma su 4.º lugar.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "El Yorick de Perfect no bastó para frenar a T1" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "En la partida 1, 'Perfect' Lee Seung-min sorprendió a todos con una jugada de lujo sobre Yorick, consiguiendo el primer muerto al escapar de un gank de manera espectacular. 'Bdd' Kwak Bo-seong llegó con su Ryze para sumar un segundo kill y desequilibrar el carril superior a favor de KT. Sin embargo, pese a la ventaja inicial construida alrededor de Yorick, KT no pudo materializarla. T1 encontró constantemente peleas alejadas del radio de acción de Yorick, fue tomando el control del mapa y cerró ambas partidas.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Gen.G derrota a HLE el día anterior" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El 27 de mayo, Gen.G ya había dado la campanada al vencer al líder Hanwha Life Esports 2-1, apretando la lucha en lo alto de la tabla.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Clasificación LCK 2026 Rounds 1-2 (tras el 28 de mayo)" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "HLE lidera con 14 victorias y 3 derrotas. T1 escala al 2.º puesto con 12-4. Gen.G se sitúa en 13-4. KT Rolster confirma el 4.º puesto con 12-4. DK completa el top 5 con 9-7. La semana 9 continúa hasta el 31 de mayo, con DK vs KRX y Gen.G vs BRO programados para el 29 de mayo.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "La fase Rounds 1-2 llega a su fin al término de la semana 9, antes del inicio del bracket de playoffs.",
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
