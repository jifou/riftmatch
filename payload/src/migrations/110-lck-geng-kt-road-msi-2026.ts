import type { MigrationModule } from './runner'

export const id = '110-lck-geng-kt-road-msi-2026'
export const description = 'LCK Road to MSI 2026 — Gen.G élimine KT 3-0 et file affronter T1 pour la 2e place MSI'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-14T08:00:00.000Z'

const articles = [
  {
    title: "Gen.G écrase KT 3-0 et défie T1 pour le 2e ticket MSI LCK 2026",
    slug: 'lck-geng-kt-road-msi-2026-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg',
    excerpt: "Gen.G a balayé KT Rolster 3-0 le 13 juin 2026 lors du Round 4 du LCK Road to MSI, et affrontera T1 ce 14 juin pour décider de la seconde place qualificative de la LCK au MSI 2026.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Road_to_MSI',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'MSI' }, { tag: 'Gen.G' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Le 13 juin 2026 au Wonju DB Promy Arena, Gen.G Esports a dominé KT Rolster 3-0 en format Fearless Draft (Bo5) lors du Round 4 du LCK Road to MSI 2026. Ce résultat net propulse Gen.G en finale du tournoi, où ils retrouveront T1 ce 14 juin pour décider qui obtient la deuxième place de la LCK au Mid-Season Invitational 2026." }],
      },
      {
        type: 'h2',
        children: [{ text: "Un sweep propre malgré la résistance de KT" }],
      },
      {
        type: 'p',
        children: [{ text: "En Game 1, KT Rolster a tenté de prendre le contrôle grâce à Lee Sin et Camille, bâtissant une avance en or supérieure à 7 000. Mais Gen.G a fait preuve d'une grande résilience : Kiin sur Sion a tenu la ligne en front, Chovy sur Mel a pris le dessus en mid game, et Ruler sur Ezreal a conclu la partie avec un backdoor qui a court-circuité toute la défense de KT. En Game 3, le scénario fut encore plus net : Canyon sur Naafiri a volé le dragon lors du troisième essai de KT, cassant leur momentum et offrant à Gen.G une domination totale pour fermer la carte." }],
      },
      {
        type: 'h2',
        children: [{ text: "Gen.G vs T1 : la finale ultime pour le MSI" }],
      },
      {
        type: 'p',
        children: [{ text: "Hanwha Life Esports ayant déjà décroché le premier ticket LCK pour le MSI en battant T1 3-1 le 12 juin, c'est désormais Gen.G qui se dresse face à T1 pour la dernière place disponible de la LCK. Les deux équipes se retrouvent dans un format Fearless Draft, où l'expérience et la profondeur de champion pool seront décisives. Ce choc Gen.G vs T1 est prévu le 14 juin 2026 à Wonju — un duel au sommet de la scène coréenne pour une place en Corée du Sud au MSI 2026 à Daejeon." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Gen.G impose son jeu avec une sweep convaincante sur KT. Après avoir été éliminée par T1 en début de tournoi, la revanche est désormais en jeu pour la qualification MSI." }],
      },
    ],
  },
  {
    title: "Gen.G Sweeps KT Rolster 3-0, Sets Up T1 Showdown for LCK's Second MSI Seed",
    slug: 'lck-geng-kt-road-msi-2026-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg',
    excerpt: "Gen.G swept KT Rolster 3-0 on June 13, 2026 in Round 4 of the LCK Road to MSI, advancing to face T1 on June 14 for the second LCK seed at MSI 2026.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Road_to_MSI',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'MSI' }, { tag: 'Gen.G' }],
    content: [
      {
        type: 'p',
        children: [{ text: "On June 13, 2026 at the Wonju DB Promy Arena, Gen.G Esports eliminated KT Rolster with a clean 3-0 sweep in Round 4 of the LCK Road to MSI 2026, played in Fearless Draft format. Gen.G will now face T1 on June 14 in the deciding match for the second LCK seed at the 2026 Mid-Season Invitational in Daejeon." }],
      },
      {
        type: 'h2',
        children: [{ text: "A resilient sweep despite KT's early aggression" }],
      },
      {
        type: 'p',
        children: [{ text: "In Game 1, KT Rolster built an early advantage exceeding 7,000 gold using Lee Sin and Camille, threatening to take control of the series. Gen.G responded with composure: Kiin held the frontline on Sion, Chovy carried the mid game on Mel, and Ruler closed out the game with a backdoor play on Ezreal that dismantled KT's base defense. Game 3 was more decisive: Canyon on Naafiri stole the third Dragon from KT at a critical moment, seizing the map and allowing Gen.G to shut the game down with overwhelming control." }],
      },
      {
        type: 'h2',
        children: [{ text: "Gen.G vs T1: the final battle for MSI 2026" }],
      },
      {
        type: 'p',
        children: [{ text: "With Hanwha Life Esports having already locked in the first LCK seat at MSI by defeating T1 3-1 on June 12, Gen.G now stands between T1 and the final Korean qualification spot. The two rivals meet in a Fearless Draft Bo5 on June 14 in Wonju — a high-stakes showdown to determine who joins HLE at the 2026 Mid-Season Invitational hosted in Daejeon, South Korea." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Gen.G looked sharp and clinical against KT. After being knocked to the lower bracket earlier in the tournament, the team has found its rhythm at exactly the right moment." }],
      },
    ],
  },
  {
    title: "Gen.G aplasta a KT Rolster 3-0 y se enfrenta a T1 por el segundo cupo LCK al MSI 2026",
    slug: 'lck-geng-kt-road-msi-2026-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg',
    excerpt: "Gen.G barrió a KT Rolster 3-0 el 13 de junio de 2026 en la Ronda 4 del LCK Road to MSI, y ahora se enfrenta a T1 el 14 de junio por el segundo cupo de la LCK para el MSI 2026.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LCK/2026/Road_to_MSI',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'MSI' }, { tag: 'Gen.G' }],
    content: [
      {
        type: 'p',
        children: [{ text: "El 13 de junio de 2026 en el Wonju DB Promy Arena, Gen.G Esports eliminó a KT Rolster con un contundente 3-0 en la Ronda 4 del LCK Road to MSI 2026, jugado en formato Fearless Draft. Gen.G se medirá ahora a T1 el 14 de junio en la gran final del torneo para decidir el segundo cupo de la LCK en el Mid-Season Invitational 2026 en Daejeon." }],
      },
      {
        type: 'h2',
        children: [{ text: "Un sweep sólido a pesar de la agresividad inicial de KT" }],
      },
      {
        type: 'p',
        children: [{ text: "En el Game 1, KT Rolster construyó una ventaja de más de 7.000 de oro con Lee Sin y Camille, amenazando con tomar el control de la serie. Gen.G respondió con calma y solidez: Kiin aguantó en el frente con Sion, Chovy dominó la fase media con Mel y Ruler cerró la partida con un backdoor en Ezreal que desmanteló la base de KT. El Game 3 fue aún más claro: Canyon con Naafiri robó el tercer Dragón en un momento clave, arrebatando el control del mapa a KT y permitiendo a Gen.G cerrar la partida con total dominio." }],
      },
      {
        type: 'h2',
        children: [{ text: "Gen.G vs T1: la batalla final por el MSI 2026" }],
      },
      {
        type: 'p',
        children: [{ text: "Con Hanwha Life Esports ya clasificada al MSI tras vencer a T1 3-1 el 12 de junio, Gen.G se convierte en el último obstáculo para T1 en la búsqueda del segundo cupo coreano. El duelo entre Gen.G y T1 está programado para el 14 de junio en Wonju, un enfrentamiento decisivo en formato Fearless Draft Bo5 para determinar quién acompañará a HLE en el Mid-Season Invitational 2026 en Daejeon, Corea del Sur." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Gen.G mostró un juego sólido y clínico ante KT. Tras caer al lower bracket al inicio del torneo, el equipo ha encontrado su mejor nivel en el momento más importante." }],
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
