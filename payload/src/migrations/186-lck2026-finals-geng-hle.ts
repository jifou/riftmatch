import type { MigrationModule } from './runner'

export const id = '186-lck2026-finals-geng-hle'
export const description = "LCK 2026 Finals: Gen.G remporte son 6e titre en battant HLE 3-1 (13 septembre)"

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-09-13T09:00:00.000Z'

const articles = [
  {
    title: "LCK 2026 : Gen.G remporte son 6e titre en 4 ans après un 3-1 sur Hanwha Life",
    slug: 'lck2026-finals-geng-hle-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'regional' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Gen.G a remporté sa 6e couronne LCK en 4 ans en battant Hanwha Life 3-1 en finale, le 13 septembre. Le trio Chovy-Canyon-Ruler a dominé les MSI 2026 champions, qui s'inclinaient pour la 2e fois consécutive contre les champions.",
    sourceUrl: 'https://rdy.gg/en/lol/news/gen-g-lck-2026-champs',
    tags: [{ tag: 'LCK 2026' }, { tag: 'Gen.G' }, { tag: 'Hanwha Life' }, { tag: 'Coree du Sud' }],
    content: [
      { type: 'p', children: [{ text: "Gen.G Esports a remporté le titre des LCK 2026 Playoffs en battant Hanwha Life Esports 3-1 en finale, le 13 septembre. Grâce à cette victoire, Gen.G s'adjuge son 6e titre LCK en seulement 4 ans, confirmant sa domination constante de la scène coréenne depuis 2022." }] },
      { type: 'h2', children: [{ text: "La revanche contre les champions du MSI" }] },
      { type: 'p', children: [{ text: "Hanwha Life Esports arrivait en finale des LCK 2026 après avoir remporté le Mid-Season Invitational 2026, quelques mois plus tôt. Cependant, l'équipe n'a pas su capitaliser sur cette dynamique face à Gen.G. Après une première défaite en game 1, HLE avait remporté game 2, mais Gen.G a ensuite enchaîné 3 victoires consécutives pour sceller le sort de la rencontre 3-1." }] },
      { type: 'h2', children: [{ text: "Ruler dominateur en Finals MVP" }] },
      { type: 'p', children: [{ text: "Park Jae-hyuk, alias Ruler, l'ADC emblématique de Gen.G, a livré une performance de haut niveau tout au long de la série et s'est logiquement vu décerner le titre de Finals MVP. Son jeu d'équipe et sa précision ont été les clés de la domination de Gen.G lors de cette finale." }] },
      { type: 'h2', children: [{ text: "Vers le Worlds 2026 en tant que 1er seed coréen" }] },
      { type: 'p', children: [{ text: "Cette victoire offre à Gen.G la place de première tête de série coréenne pour le League of Legends World Championship 2026, qui se tiendra en octobre à Los Angeles et novembre à New York. Gen.G entre aux Swiss Stage en tant que Tier 1 seed, une position privilégiée pour aspirer à un titre mondial." }] },
      { type: 'blockquote', children: [{ text: "6e titre LCK en 4 ans pour Gen.G: la domination de la Corée du Sud incarnée par Chovy, Canyon et Ruler." }] },
    ],
  },
  {
    title: "LCK 2026 Finals: Gen.G Claim Sixth Title in Four Years with 3-1 Victory Over Hanwha Life",
    slug: 'lck2026-finals-geng-hle-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'regional' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Gen.G Esports claimed their sixth LCK title in four years by defeating Hanwha Life 3-1 in the finals on September 13. The trio of Chovy, Canyon, and Ruler dominated the MSI 2026 champions, securing Korea's first seed at Worlds 2026.",
    sourceUrl: 'https://esportsbonus.net/en/all-news/gen-g-go-back-to-back-3-1-over-hanwha-life-seals-a-second-straight-lck-title-as-ruler-takes-finals-mvp',
    tags: [{ tag: 'LCK 2026' }, { tag: 'Gen.G' }, { tag: 'Hanwha Life' }, { tag: 'South Korea' }],
    content: [
      { type: 'p', children: [{ text: "Gen.G Esports secured the LCK 2026 title by defeating Hanwha Life Esports 3-1 in the finals on September 13. With this victory, Gen.G claims their sixth LCK trophy in four years, cementing their position as the dominant force in Korean League of Legends since 2022." }] },
      { type: 'h2', children: [{ text: "Rematch against MSI champions" }] },
      { type: 'p', children: [{ text: "Hanwha Life arrived in the finals riding high on their Mid-Season Invitational 2026 championship earlier in the year. Despite their recent success, HLE could not withstand Gen.G's assault in the matchup. After losing game one, HLE equalized with a game two win, but Gen.G answered with three consecutive victories to close out the series 3-1." }] },
      { type: 'h2', children: [{ text: "Ruler earns Finals MVP" }] },
      { type: 'p', children: [{ text: "Park Jae-hyuk, known as Ruler, delivered a stellar performance throughout the series and was rightfully awarded Finals MVP. His teamfighting and mechanical precision were instrumental in Gen.G's dominant performance throughout the finals." }] },
      { type: 'h2', children: [{ text: "Heading to Worlds 2026 as Korea's first seed" }] },
      { type: 'p', children: [{ text: "The championship secures Gen.G Korea's first seed for the League of Legends World Championship 2026, hosted in Los Angeles in October and New York in November. Gen.G enters the Swiss Stage as a Tier 1 seed, positioning themselves favorably for a deep Worlds run." }] },
      { type: 'blockquote', children: [{ text: "Gen.G's sixth LCK title in four years: the dominance of Korean League embodied by Chovy, Canyon, and Ruler." }] },
    ],
  },
  {
    title: "LCK 2026: Gen.G Conquista su Sexto Título en Cuatro Años tras Vencer 3-1 a Hanwha Life",
    slug: 'lck2026-finals-geng-hle-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'regional' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Gen.G Esports se ha hecho con su sexto título de la LCK en cuatro años tras derrotar a Hanwha Life 3-1 en las finales del 13 de septiembre. El dúo de Chovy, Canyon y Ruler dominó a los campeones del MSI 2026, asegurando la primera plaza de Corea del Sur en Worlds 2026.",
    sourceUrl: 'https://esportsbonus.net/en/all-news/gen-g-go-back-to-back-3-1-over-hanwha-life-seals-a-second-straight-lck-title-as-ruler-takes-finals-mvp',
    tags: [{ tag: 'LCK 2026' }, { tag: 'Gen.G' }, { tag: 'Hanwha Life' }, { tag: 'Corea del Sur' }],
    content: [
      { type: 'p', children: [{ text: "Gen.G Esports se proclamó campeones de la LCK 2026 al derrotar a Hanwha Life Esports 3-1 en la final disputada el 13 de septiembre. Con esta victoria, Gen.G consigue su sexto título de la LCK en cuatro años, consolidando su posición como la fuerza dominante de la Liga de Campeones de Corea del Sur desde 2022." }] },
      { type: 'h2', children: [{ text: "Revancha contra los campeones del MSI" }] },
      { type: 'p', children: [{ text: "Hanwha Life llegaba a la final como vigentes campeones del Mid-Season Invitational 2026, logro conseguido meses atrás. Sin embargo, el conjunto de HLE no pudo resistir el asalto de Gen.G en el encuentro. Tras perder el primer juego, HLE igualó con una victoria en el segundo, pero Gen.G respondió con tres victorias consecutivas para cerrar la serie 3-1." }] },
      { type: 'h2', children: [{ text: "Ruler gana el MVP de la Final" }] },
      { type: 'p', children: [{ text: "Park Jae-hyuk, conocido como Ruler, ofreció una actuación de alto nivel a lo largo de toda la serie y fue justamente galardonado con el título de MVP de la Final. Su juego de equipo y su precisión mecánica fueron fundamentales para la actuación dominante de Gen.G durante las finales." }] },
      { type: 'h2', children: [{ text: "Rumbo a Worlds 2026 como primera semilla de Corea" }] },
      { type: 'p', children: [{ text: "El campeonato asegura a Gen.G la primera plaza de Corea para el League of Legends World Championship 2026, que se celebrará en Los Ángeles en octubre y Nueva York en noviembre. Gen.G entra en la Swiss Stage como semilla Tier 1, posicionándose favorablemente para una profunda carrera en Worlds." }] },
      { type: 'blockquote', children: [{ text: "Sexto título de la LCK para Gen.G en cuatro años: la dominancia de la Liga de Campeones de Corea encarnada por Chovy, Canyon y Ruler." }] },
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
