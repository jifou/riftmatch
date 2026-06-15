import type { MigrationModule } from './runner'

export const id = '114-lck-road-msi-2026-t1-qualifie'
export const description = 'LCK Road to MSI 2026 — T1 élimine Gen.G 3-2 dans un thriller et décroche le 2e billet LCK pour le MSI 2026'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-14T08:00:00.000Z'

const articles = [
  {
    title: "LCK Road to MSI 2026 : T1 bat Gen.G 3-2 dans un thriller et rejoint HLE au MSI 2026",
    slug: 'lck-road-msi-2026-t1-qualifie-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lck' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg',
    excerpt: "T1 (Doran, Oner, Faker, Peyz, Keria) s'impose 3-2 sur Gen.G le 14 juin lors du LCK Road to MSI 2026, devant plus de 2,2 millions de spectateurs en pic. T1 rejoint Hanwha Life Esports comme second représentant LCK au MSI 2026.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Road_to_MSI',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'T1' }, { tag: 'MSI' }, { tag: 'Faker' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Le 14 juin 2026, T1 a décroché la deuxième place qualificative de la LCK pour le MSI 2026 en battant Gen.G Esports 3-2 lors du Round 5 du LCK Road to MSI. La série, disputée en Fearless Draft (Bo5), a tenu les fans en haleine jusqu'au dernier jeu. Plus de 2,2 millions de spectateurs en pic ont suivi ce choc, signe de l'immense popularité de cette confrontation entre deux géants de la scène coréenne." }],
      },
      {
        type: 'h2',
        children: [{ text: "Faker et T1 au rendez-vous" }],
      },
      {
        type: 'p',
        children: [{ text: "Le roster de T1 composé de Doran (top), Oner (jungle), Faker (mid), Peyz (ADC) et Keria (support) a su résister à la pression de Gen.G pour renverser la série au cinquième jeu. Cette qualification s'inscrit dans la continuité des ambitions mondiales de T1, qui visent le titre au MSI 2026 après avoir été éliminés par Hanwha Life Esports 3-1 au Round 3, le 12 juin." }],
      },
      {
        type: 'h2',
        children: [{ text: "MSI 2026 : LCK avec deux cadors" }],
      },
      {
        type: 'p',
        children: [{ text: "T1 rejoint Hanwha Life Esports — vainqueur du tournoi et premier seed LCK — au Mid-Season Invitational 2026 (28 juin – 12 juillet, Corée du Sud). La LCK sera donc représentée par ses deux plus grandes franchises, ce qui augure d'un MSI de très haute intensité face à Bilibili Gaming et Top Esports (LPL) ainsi qu'à G2 Esports (LEC)." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Thriller cinq jeux, 2,2 millions de spectateurs : T1 et Faker ne manqueront pas le MSI 2026 et débarquent en Corée avec l'envie de venger leur défaite face à HLE." }],
      },
    ],
  },
  {
    title: "LCK Road to MSI 2026: T1 Defeats Gen.G 3-2 in Five-Game Thriller to Qualify for MSI 2026",
    slug: 'lck-road-msi-2026-t1-qualifie-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lck' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg',
    excerpt: "T1 (Doran, Oner, Faker, Peyz, Keria) defeated Gen.G 3-2 on June 14 in the LCK Road to MSI 2026, watched by a peak of over 2.2 million concurrent viewers. T1 join Hanwha Life Esports as LCK's second representative at MSI 2026.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Road_to_MSI',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'T1' }, { tag: 'MSI' }, { tag: 'Faker' }],
    content: [
      {
        type: 'p',
        children: [{ text: "On June 14, 2026, T1 secured the LCK's second spot at MSI 2026 by defeating Gen.G Esports 3-2 in Round 5 of the LCK Road to MSI. The Fearless Draft best-of-five series went the full distance in a gripping back-and-forth, peaking at more than 2.2 million concurrent viewers — a testament to the massive appeal of a T1 versus Gen.G clash." }],
      },
      {
        type: 'h2',
        children: [{ text: "Faker and T1 Step Up" }],
      },
      {
        type: 'p',
        children: [{ text: "T1's roster of Doran (top), Oner (jungle), Faker (mid), Peyz (ADC), and Keria (support) held their nerve through five games to close out the series against Gen.G. This qualification continues T1's pursuit of global glory at MSI 2026, where they will look to build on their form after falling to Hanwha Life Esports 3-1 in Round 3 on June 12." }],
      },
      {
        type: 'h2',
        children: [{ text: "MSI 2026: Two LCK Giants" }],
      },
      {
        type: 'p',
        children: [{ text: "T1 join Hanwha Life Esports — tournament winner and LCK first seed — at the 2026 Mid-Season Invitational (June 28 – July 12, South Korea). The LCK will field both of its biggest franchises, setting the stage for a high-caliber MSI alongside Bilibili Gaming and Top Esports (LPL) and G2 Esports (LEC)." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Five-game thriller, 2.2 million viewers at peak: T1 and Faker will not miss MSI 2026, arriving with motivation to avenge their earlier loss to HLE." }],
      },
    ],
  },
  {
    title: "LCK Road to MSI 2026: T1 vence a Gen.G 3-2 en un thriller de cinco partidas y se clasifica para el MSI 2026",
    slug: 'lck-road-msi-2026-t1-qualifie-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lck' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg',
    excerpt: "T1 (Doran, Oner, Faker, Peyz, Keria) venció a Gen.G 3-2 el 14 de junio en el LCK Road to MSI 2026, ante un pico de más de 2,2 millones de espectadores. T1 se une a Hanwha Life Esports como segundo representante de la LCK en el MSI 2026.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Road_to_MSI',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'T1' }, { tag: 'MSI' }, { tag: 'Faker' }],
    content: [
      {
        type: 'p',
        children: [{ text: "El 14 de junio de 2026, T1 aseguró la segunda plaza de la LCK para el MSI 2026 al derrotar a Gen.G Esports 3-2 en el Round 5 del LCK Road to MSI. La serie al mejor de cinco en formato Fearless Draft fue de máxima tensión hasta el último juego, con un pico de más de 2,2 millones de espectadores simultáneos que refleja el enorme atractivo del duelo T1 contra Gen.G." }],
      },
      {
        type: 'h2',
        children: [{ text: "Faker y T1 responden" }],
      },
      {
        type: 'p',
        children: [{ text: "El roster de T1 formado por Doran (top), Oner (jungle), Faker (mid), Peyz (ADC) y Keria (support) aguantó la presión durante cinco partidas para cerrar la serie frente a Gen.G. Esta clasificación continúa la búsqueda de gloria mundial de T1 en el MSI 2026, donde querrán resarcirse de su derrota ante Hanwha Life Esports 3-1 el 12 de junio." }],
      },
      {
        type: 'h2',
        children: [{ text: "MSI 2026: Dos gigantes de la LCK" }],
      },
      {
        type: 'p',
        children: [{ text: "T1 se une a Hanwha Life Esports — ganador del torneo y primer seed de la LCK — en el Mid-Season Invitational 2026 (28 de junio – 12 de julio, Corea del Sur). La LCK presentará a sus dos franquicias más grandes, lo que augura un MSI de grandísimo nivel junto a Bilibili Gaming y Top Esports (LPL) y G2 Esports (LEC)." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Thriller en cinco juegos, 2,2 millones de espectadores en pico: T1 y Faker no se perderán el MSI 2026 y llegan con el objetivo de vengar su derrota ante HLE." }],
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
