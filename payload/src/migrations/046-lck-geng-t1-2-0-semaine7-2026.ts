import type { MigrationModule } from './runner'

export const id = '046-lck-geng-t1-2-0-semaine7-2026'
export const description = 'LCK Rounds 1-2 2026 Semaine 7 — Gen.G s\'impose 2-0 face à T1, série portée à 8 victoires'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-16T08:00:00.000Z'
const COVER = 'https://img.youtube.com/vi/wmeIA4yr3k4/maxresdefault.jpg'

const articles = [
  {
    title: 'Gen.G domine T1 2-0 et enchaîne une 8e victoire consécutive en LCK',
    slug: 'geng-bat-t1-2-0-lck-semaine7-2026-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: 'Gen.G continue sa marche triomphale en LCK Rounds 1-2 2026 : les champions du LCK Cup ont balayé T1 2-0 ce samedi pour porter leur série à 8 victoires consécutives.',
    sourceUrl: 'https://www.invenglobal.com/esports/lol',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'Gen.G' }, { tag: 'T1' }],
    content: [
      {
        type: 'p',
        children: [{ text: "La semaine 7 de la LCK 2026 Rounds 1-2 a livré son choc tant attendu ce samedi 16 mai au LoL Park de Jongno, à Séoul : Gen.G Esports a dominé T1 de bout en bout pour s'imposer sur le score de 2-0. Une victoire qui porte à 8 le nombre de succès consécutifs pour les champions du LCK Cup 2026." }],
      },
      {
        type: 'h2',
        children: [{ text: 'Gen.G intouchable, Chovy tient parole' }],
      },
      {
        type: 'p',
        children: [{ text: "Avant la rencontre, le midlaner Chovy avait déclaré sans détour : \"Nous allons maintenir notre niveau de jeu et battre T1.\" Une promesse tenue avec autorité. Épaulé par Canyon en jungle et Ruler en bot lane, Chovy a imposé sa loi à chaque phase du jeu. Dès la mi-game, Gen.G contrôlait l'accès aux objectifs, enchaînant les Dragons et forçant T1 à gérer une pression constante sur toute la carte." }],
      },
      {
        type: 'p',
        children: [{ text: "Dans les deux manches, la recette est restée identique : une phase de laning serrée, un teamfight clé qui brise l'égalité en faveur de Gen.G, puis une prise de Baron suivie d'un siège du Nexus sans appel. Kiin en top a tenu son couloir avec solidité, tandis que Duro en support a facilité chaque engagement décisif avec une précision redoutable." }],
      },
      {
        type: 'h2',
        children: [{ text: 'T1 et Faker sans solution' }],
      },
      {
        type: 'p',
        children: [{ text: "Du côté de T1, Faker et ses coéquipiers n'ont pas réussi à trouver la faille. Malgré quelques échanges prometteurs en début de partie, T1 s'est systématiquement retrouvé en position réactive face à une Gen.G qui dictait les termes du combat. Peyz en bot lane et Oner en jungle n'ont pas réussi à renverser la domination écrasante des adversaires. Gen.G sait exactement quand et comment frapper." }],
      },
      {
        type: 'p',
        children: [{ text: "Avec 8 victoires de suite, Gen.G s'installe sans discussion comme le grand favori pour le titre de la saison régulière LCK 2026. Les regards se tournent désormais vers la fin du split et la course à la qualification pour l'Esports World Cup qui se profile à l'horizon estival." }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'Gen.G est en mission. Huit victoires consécutives, une promesse de Chovy tenue, et Faker qui ne trouve pas la clé. La saison régulière LCK 2026 a déjà son favori incontesté.' }],
      },
    ],
  },
  {
    title: 'Gen.G crushes T1 2-0 and extends their win streak to 8 in LCK 2026',
    slug: 'geng-beats-t1-2-0-lck-week7-2026-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: 'Gen.G continued their dominant run in LCK 2026 Rounds 1-2 by sweeping T1 2-0 in Week 7, extending their winning streak to 8 consecutive series victories.',
    sourceUrl: 'https://www.invenglobal.com/esports/lol',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'Gen.G' }, { tag: 'T1' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'Week 7 of LCK 2026 Rounds 1-2 delivered its marquee matchup on Saturday, May 16 at LoL Park in Jongno, Seoul: Gen.G Esports dismantled T1 2-0 in emphatic fashion, extending their current winning streak to eight consecutive series. The LCK Cup 2026 champions showed no signs of slowing down.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Chovy delivers on his promise' }],
      },
      {
        type: 'p',
        children: [{ text: "Before the match, Gen.G's mid laner Chovy stated with quiet confidence: \"We'll maintain our form and win against T1.\" He made good on those words. Supported by Canyon in the jungle and Ruler in the bot lane, Gen.G controlled the tempo of both games from start to finish. They consistently stacked Dragons, secured crucial Baron buffs, and sieged T1's base with precision. Top laner Kiin held his side of the map firmly, while support Duro enabled Gen.G's aggressive engage patterns throughout." }],
      },
      {
        type: 'p',
        children: [{ text: 'The formula was consistent across both games: a competitive laning phase followed by a decisive teamfight that opened up a gold lead, then a clean Baron-to-Nexus sequence that left T1 with no time to breathe.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'T1 and Faker left without answers' }],
      },
      {
        type: 'p',
        children: [{ text: "T1, despite fielding the legendary Faker and a revamped roster with Peyz in the bot lane and Oner in the jungle, could not find a way through Gen.G's coordinated machine. Promising early skirmishes failed to translate into meaningful advantages, and T1 found themselves constantly reacting rather than dictating. It was a stark reminder that even one of the most storied rosters in LCK history cannot match Gen.G's current momentum." }],
      },
      {
        type: 'p',
        children: [{ text: 'With eight consecutive wins, Gen.G has firmly established themselves as the team to beat in the LCK 2026 regular season. Attention now turns to the final weeks of the split and the increasingly important race for Esports World Cup qualification spots.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'Gen.G are on a mission. Eight straight wins, Chovy delivers on his word, and even Faker cannot crack the code. The LCK 2026 regular season already has its undisputed frontrunner.' }],
      },
    ],
  },
  {
    title: 'Gen.G aplasta a T1 2-0 y extiende su racha a 8 victorias seguidas en la LCK',
    slug: 'geng-derrota-t1-2-0-lck-semana7-2026-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: 'Gen.G sigue imparable en LCK 2026 Rounds 1-2 al barrer a T1 por 2-0 en la Semana 7, extendiendo su racha de victorias a ocho series consecutivas.',
    sourceUrl: 'https://www.invenglobal.com/esports/lol',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'Gen.G' }, { tag: 'T1' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'La Semana 7 de LCK 2026 Rounds 1-2 ofreció su duelo estelar el sábado 16 de mayo en el LoL Park de Jongno, Seúl: Gen.G Esports arrasó a T1 por un contundente 2-0, llevando su racha de victorias consecutivas a ocho series. Los campeones del LCK Cup 2026 continúan siendo el equipo dominante de Corea sin discusión posible.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Chovy cumple su promesa' }],
      },
      {
        type: 'p',
        children: [{ text: 'Antes del partido, el midlaner Chovy había declarado con total seguridad: "Mantendremos nuestra forma y ganaremos a T1." Misión cumplida con autoridad. Respaldado por Canyon en la jungla y Ruler en el carril inferior, Chovy impuso su ley en cada fase del juego. Gen.G acumuló dragones, aseguró el Baron y sitió la base de T1 sin encontrar resistencia suficiente. Kiin en top dominó su sector del mapa, mientras que Duro en support facilitó todos los engages decisivos con una coordinación impecable.' }],
      },
      {
        type: 'p',
        children: [{ text: 'La fórmula fue idéntica en ambas partidas: inicio igualado, teamfight clave que abrió la ventaja de oro para Gen.G, seguido de una secuencia Baron-victoria sin contemplaciones.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'T1 y Faker sin respuestas' }],
      },
      {
        type: 'p',
        children: [{ text: 'T1, con el legendario Faker y una formación renovada con Peyz en el bot lane y Oner en la jungla, no pudo encontrar el camino a través del juego coordinado de Gen.G. Los prometedores enfrentamientos iniciales no se tradujeron en ventajas reales, y T1 siempre llegó tarde a reaccionar. Una clara demostración de que incluso uno de los rosters más legendarios de la historia de la LCK no puede igualar el nivel actual de Gen.G.' }],
      },
      {
        type: 'p',
        children: [{ text: 'Con ocho victorias consecutivas, Gen.G se consolida como el gran favorito para el título de la temporada regular LCK 2026. Las miradas se dirigen ahora a las últimas semanas del split y la crucial carrera de clasificación para el Esports World Cup.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'Gen.G está en modo campeón. Ocho victorias seguidas, Chovy cumple su palabra y ni siquiera Faker puede resolver el enigma. La temporada regular LCK 2026 ya tiene a su gran favorito indiscutible.' }],
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
