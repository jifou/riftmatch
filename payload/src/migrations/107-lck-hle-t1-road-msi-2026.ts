import type { MigrationModule } from './runner'

export const id = '107-lck-hle-t1-road-msi-2026'
export const description = 'LCK Road to MSI 2026 — HLE bat T1 3-1 et décroche la première place MSI de la LCK'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-13T08:00:00.000Z'

const articles = [
  {
    title: "HLE bat T1 3-1 et décroche la première place LCK pour le MSI 2026",
    slug: 'lck-hle-t1-road-msi-2026-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sivir_0.jpg',
    excerpt: "Hanwha Life Esports élimine T1 3-1 lors du LCK Road to MSI 2026 et devient la première équipe coréenne qualifiée pour le MSI 2026, devant 1,29 million de spectateurs.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Road_to_MSI',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'MSI' }, { tag: 'HLE' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Le 12 juin 2026 à Wonju, Hanwha Life Esports (HLE) a dominé T1 3-1 lors du Round 3 du LCK Road to MSI 2026, décrochant la première place directe de la LCK pour le Mid-Season Invitational 2026. La série en Fearless Draft (Bo5) a attiré 1,29 million de spectateurs en pic, un record qui illustre le poids de la confrontation T1 vs HLE." }],
      },
      {
        type: 'h2',
        children: [{ text: "Un 3-1 malgré la résistance de T1" }],
      },
      {
        type: 'p',
        children: [{ text: "HLE a pris les rênes dès le game 1, imposant un jeu agressif face à T1 en difficulté dans ce format Fearless. En game 2, T1 est revenu dans la série grâce à une performance exceptionnelle de Peyz : sa Sivir a décroché un quadra kill lors d'un teamfight chaotique à la 27e minute, offrant un ace à son équipe. Mais HLE a répondu avec fermeté en game 3 — Kanavi s'est montré omniprésent, verrouillant la carte et réduisant T1 à l'impuissance. En game 4, tout espoir de remontée de T1 a été rapidement étouffé, HLE concluant la série sans laisser de place au doute." }],
      },
      {
        type: 'h2',
        children: [{ text: "Une première historique pour HLE" }],
      },
      {
        type: 'p',
        children: [{ text: "Cette victoire marque un tournant majeur pour Hanwha Life Esports, qui se qualifie pour la première fois de son histoire au MSI. HLE hérite également du seul slot de la LCK pour l'Esports World Cup 2026, confirmant leur statut de meilleure équipe coréenne du moment. La série a réuni 1,29 million de spectateurs en simultané, signe de l'intérêt mondial suscité par ce duel entre deux des meilleures équipes du monde." }],
      },
      {
        type: 'h2',
        children: [{ text: "La suite : Gen.G vs KT pour la deuxième place" }],
      },
      {
        type: 'blockquote',
        children: [{ text: "T1, Gen.G et KT Rolster se battent toujours pour les places restantes au MSI 2026. Le Round 4 oppose Gen.G à KT le 13 juin, avec le vainqueur qui avancera en finale le 14 juin pour décider de la deuxième place qualificative de la LCK." }],
      },
    ],
  },
  {
    title: "HLE Defeats T1 3-1 to Clinch LCK's First MSI 2026 Slot",
    slug: 'lck-hle-t1-road-msi-2026-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sivir_0.jpg',
    excerpt: "Hanwha Life Esports eliminated T1 3-1 at the LCK Road to MSI 2026, securing the first LCK seed for MSI 2026 in front of 1.29 million peak viewers.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Road_to_MSI',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'MSI' }, { tag: 'HLE' }],
    content: [
      {
        type: 'p',
        children: [{ text: "On June 12, 2026 in Wonju, Hanwha Life Esports (HLE) defeated T1 3-1 in Round 3 of the LCK Road to MSI 2026, securing the first direct LCK qualification spot for Mid-Season Invitational 2026. The best-of-5 series played in Fearless Draft format attracted a peak audience of 1.29 million viewers, underscoring the historic weight of a T1 vs HLE clash." }],
      },
      {
        type: 'h2',
        children: [{ text: "A decisive 3-1 with T1 fighting back" }],
      },
      {
        type: 'p',
        children: [{ text: "HLE established control from game 1, imposing an aggressive style that T1 struggled to answer in the Fearless Draft format. T1 struck back in game 2 with Peyz delivering a spectacular performance on Sivir — a clean quadra kill in a chaotic 27-minute teamfight gave T1 an ace and leveled the series. HLE responded decisively in game 3, with Kanavi delivering dominant plays that stifled any T1 momentum. In game 4, T1's hopes of a reverse sweep were swiftly extinguished as HLE closed out the series cleanly." }],
      },
      {
        type: 'h2',
        children: [{ text: "A historic first MSI qualification for HLE" }],
      },
      {
        type: 'p',
        children: [{ text: "This result makes Hanwha Life Esports the first LCK team to secure a direct slot for MSI 2026 — and marks the first-ever MSI qualification in the organization's history. The victory also grants HLE the sole LCK slot for the Esports World Cup 2026. The series peaked at 1.29 million concurrent viewers, reflecting the global appetite for top-tier LCK competition." }],
      },
      {
        type: 'h2',
        children: [{ text: "What's next: Gen.G vs KT for the second slot" }],
      },
      {
        type: 'blockquote',
        children: [{ text: "T1, Gen.G, and KT Rolster are still competing for the remaining MSI 2026 spots. Round 4 sees Gen.G face KT on June 13, with the winner advancing to the final on June 14 to determine the second LCK seed for MSI." }],
      },
    ],
  },
  {
    title: "HLE vence a T1 3-1 y asegura la primera plaza de LCK para el MSI 2026",
    slug: 'lck-hle-t1-road-msi-2026-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sivir_0.jpg',
    excerpt: "Hanwha Life Esports elimina a T1 con un 3-1 en el LCK Road to MSI 2026, asegurando el primer cupo de la LCK para el MSI 2026 ante 1,29 millones de espectadores en pico.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Road_to_MSI',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'MSI' }, { tag: 'HLE' }],
    content: [
      {
        type: 'p',
        children: [{ text: "El 12 de junio de 2026 en Wonju, Hanwha Life Esports (HLE) derrotó a T1 por 3-1 en la Ronda 3 del LCK Road to MSI 2026, asegurando el primer cupo directo de la LCK para el Mid-Season Invitational 2026. La serie al mejor de 5 en formato Fearless Draft atrajo a 1,29 millones de espectadores en pico, confirmando el enorme atractivo del duelo T1 vs HLE." }],
      },
      {
        type: 'h2',
        children: [{ text: "Un 3-1 con la resistencia de T1 en el medio" }],
      },
      {
        type: 'p',
        children: [{ text: "HLE dominó el juego 1 desde el inicio, imponiendo un estilo agresivo que T1 no supo responder en el formato Fearless. T1 reaccionó en el juego 2 gracias a una actuación memorable de Peyz: su Sivir logró un quadra kill limpio en un teamfight caótico al minuto 27, dando un ace a su equipo para igualar la serie. Sin embargo, HLE retomó el control en el juego 3 con Kanavi liderando jugadas decisivas que neutralizaron cualquier intento de reacción. En el juego 4, toda esperanza de remontada de T1 fue aplastada rápidamente por un HLE contundente." }],
      },
      {
        type: 'h2',
        children: [{ text: "Una primera histórica clasificación al MSI para HLE" }],
      },
      {
        type: 'p',
        children: [{ text: "Esta victoria convierte a Hanwha Life Esports en el primer equipo de la LCK con plaza directa para el MSI 2026, y representa la primera clasificación histórica de la organización al Mid-Season Invitational. HLE también aseguró el único cupo de la LCK para el Esports World Cup 2026. La serie alcanzó 1,29 millones de espectadores en simultáneo, evidenciando el interés mundial por la LCK." }],
      },
      {
        type: 'h2',
        children: [{ text: "Próxima cita: Gen.G vs KT por la segunda plaza" }],
      },
      {
        type: 'blockquote',
        children: [{ text: "T1, Gen.G y KT Rolster siguen peleando por las plazas restantes para el MSI 2026. La Ronda 4 enfrenta a Gen.G con KT el 13 de junio, con el ganador avanzando a la final el 14 de junio para decidir el segundo cupo de la LCK para el MSI." }],
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
