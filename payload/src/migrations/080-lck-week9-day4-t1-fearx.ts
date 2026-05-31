import type { MigrationModule } from './runner'

export const id = '080-lck-week9-day4-t1-fearx'
export const description = 'LCK Semaine 9 Jour 4 — T1 2-0 BNK FearX, sécurise au moins la 2e place'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-31T08:00:00.000Z'

const articles = [
  {
    title: 'LCK Semaine 9 Jour 4 — T1 domine BNK FearX 2-0 et sécurise au moins la 2e place',
    slug: 'lck-2026-week9-day4-t1-fearx-resultats-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "T1 s'impose 2-0 face à BNK FearX le 30 mai 2026 grâce à une supériorité nette en teamfights. Cette victoire assure à la formation de Faker au moins la 2e place de la saison régulière LCK 2026.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Rounds_1-2',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'T1' }, { tag: 'BNK FearX' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Le 30 mai 2026, lors de la 4e journée de la semaine 9 des LCK 2026 Rounds 1-2, T1 a balayé BNK FearX 2-0 au LoL Park de Jongno. Une victoire acquise par la supériorité de T1 dans les combats d'équipe, qui permet à la formation de Faker de sécuriser au moins la 2e place de la saison régulière.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "T1 domine les teamfights dans les deux manches" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "T1 s'est présenté avec la composition habituelle de la saison : Doran en top, Oner à la jungle, Faker en mid, Peyz en ADC et Keria au support. FearX a aligné Clear en top, Raptor à la jungle, VicLa en mid et Dia en ADC. En première manche, T1 a construit son avantage autour de la mobilité d'Oner sur Nocturne et du contrôle de zone de Faker sur Anivia, neutralisant progressivement les axes d'attaque de FearX. La seconde manche a suivi le même schéma : T1 a fait preuve d'une discipline tactique exemplaire, ne laissant aucune ouverture à l'adversaire pour revenir dans la partie.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Oner franchit un cap historique en LCK" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La rencontre a également été marquée par un record de carrière pour Oner, qui a franchi un cap symbolique en nombre d'assistances en LCK. Le jungler de T1, en grande forme depuis le début de la phase Rounds 1-2, confirme son statut de l'un des meilleurs joueurs à son poste dans la ligue coréenne.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Conséquences sur le classement et la Road to MSI" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Avec cette victoire, T1 s'assure au moins la 2e place en vue des playoffs, selon les résultats des dernières journées. Du côté de BNK FearX, la défaite est définitive sur le plan de la qualification : l'équipe est mathématiquement éliminée de la course à la Road to MSI. La semaine 9 se clôture le 31 mai avec HANJIN BRION face à HLE et Nongshim RedForce face à Dplus KIA, derniers matchs de la saison régulière avant le début des playoffs.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "T1 aborde les playoffs LCK 2026 avec la confiance d'une équipe qui a su monter en puissance au fil des semaines, Faker et ses coéquipiers visant une nouvelle consécration en fin de saison.",
          },
        ],
      },
    ],
  },
  {
    title: 'LCK Week 9 Day 4 — T1 Defeats BNK FearX 2-0, Secures at Least 2nd Place',
    slug: 'lck-2026-week9-day4-t1-fearx-results-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "T1 swept BNK FearX 2-0 on May 30, 2026, with superior teamfighting sealing the win. The result guarantees T1 at least 2nd place in the LCK 2026 regular season standings.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Rounds_1-2',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'T1' }, { tag: 'BNK FearX' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "On May 30, 2026, T1 defeated BNK FearX 2-0 in Week 9 Day 4 of the LCK 2026 Rounds 1-2 at LoL Park in Jongno. T1's superior teamfighting proved the decisive factor across both games, and the victory locks in at least a 2nd-place finish in the regular season for Faker's squad.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "T1's Teamfighting Decides Both Games" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "T1 fielded their regular lineup: Doran (Top), Oner (Jungle), Faker (Mid), Peyz (ADC), and Keria (Support). BNK FearX countered with Clear in the top lane, Raptor in the jungle, VicLa in mid, and Dia in the ADC role. In Game 1, T1 built their lead on the back of Oner's Nocturne mobility and Faker's Anivia zone control, methodically cutting off FearX's avenues of counterplay. Game 2 followed a similar script: T1 maintained composure and gave FearX no opening to claw back into the match.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Oner Hits a Career Milestone" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The match also featured a personal milestone for Oner, who crossed a career assists record in the LCK during this series. The T1 jungler has been one of the standout performers throughout the Rounds 1-2 phase, reinforcing his reputation as one of the best players at his position in the Korean league.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Standings and Road to MSI Implications" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "This result clinches at least a 2nd-place finish for T1 heading into the playoff bracket. For BNK FearX, the loss brings a hard stop to their Road to MSI hopes — the team is mathematically eliminated from MSI qualification. The LCK regular season closes on May 31 with HANJIN BRION vs HLE and Nongshim RedForce vs Dplus KIA, completing the final day of Rounds 1-2 before the playoff stage begins.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "T1 enters the LCK 2026 playoffs in confident form, with Faker and his teammates eyeing another deep playoff run after a strong finish to the regular season.",
          },
        ],
      },
    ],
  },
  {
    title: 'LCK Semana 9 Día 4 — T1 vence a BNK FearX 2-0 y asegura al menos el 2.º puesto',
    slug: 'lck-2026-week9-day4-t1-fearx-resultados-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "T1 arrolla a BNK FearX 2-0 el 30 de mayo de 2026 con una superioridad táctica en los combates de equipo. La victoria garantiza a T1 al menos el 2.º puesto en la temporada regular de la LCK 2026.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Rounds_1-2',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'T1' }, { tag: 'BNK FearX' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "El 30 de mayo de 2026, T1 derrotó a BNK FearX por 2-0 en el cuarto día de la semana 9 de las LCK 2026 Rounds 1-2, celebrado en el LoL Park de Jongno. La superioridad táctica de T1 en los teamfights fue determinante en ambas partidas, y el resultado garantiza al equipo de Faker al menos el 2.º puesto en la clasificación de la temporada regular.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Los teamfights de T1 deciden ambas partidas" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "T1 salió con su quinteto titular: Doran (top), Oner (jungla), Faker (mid), Peyz (ADC) y Keria (support). BNK FearX respondió con Clear en el top, Raptor en la jungla, VicLa en el mid y Dia en el ADC. En la primera partida, T1 construyó su ventaja aprovechando la movilidad de Oner con Nocturno y el control de zona de Faker con Anivia, cortando progresivamente las opciones de BNK FearX. La segunda partida siguió el mismo patrón: T1 mantuvo la compostura y no dejó ningún margen de reacción al rival.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Oner alcanza un hito en su carrera" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El partido también estuvo marcado por un hito personal para Oner, quien superó un récord de asistencias en su carrera dentro de la LCK durante esta serie. El jungler de T1 ha sido uno de los jugadores más destacados a lo largo de la fase Rounds 1-2, consolidando su estatus como uno de los mejores en su posición en la liga coreana.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Consecuencias en la clasificación y la Road to MSI" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Con esta victoria, T1 asegura al menos el 2.º puesto de cara al bracket de playoffs. Para BNK FearX, la derrota supone el fin matemático de sus aspiraciones a la Road to MSI: el equipo queda eliminado de la carrera por la clasificación al MSI. La temporada regular de la LCK concluye el 31 de mayo con los duelos HANJIN BRION contra HLE y Nongshim RedForce contra Dplus KIA, las últimas jornadas antes del inicio de los playoffs.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "T1 afronta los playoffs de la LCK 2026 con la confianza de un equipo que ha crecido semana a semana, con Faker y sus compañeros apuntando a una nueva gran actuación en la fase definitiva de la temporada.",
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
