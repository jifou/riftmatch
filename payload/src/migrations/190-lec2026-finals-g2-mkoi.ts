import type { MigrationModule } from './runner'

export const id = '190-lec2026-finals-g2-mkoi'
export const description = "LEC 2026 Finals: G2 complete la Golden Road avec un sweep 3-0 sur Movistar KOI (20 septembre)"

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-09-20T19:00:00.000Z'

const articles = [
  {
    title: "LEC 2026 : G2 remporte son 20e titre en balayant Movistar KOI 3-0 et complète la Golden Road",
    slug: 'lec2026-finals-g2-mkoi-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lec' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "G2 Esports a remporté son 20e titre LEC en effectuant un balayage 3-0 de Movistar KOI lors de la finale du 20 septembre. En gagnant Versus, Spring et Summer 2026, G2 complète la Golden Road, et Labrov remporte le MVP des finales.",
    sourceUrl: 'https://www.invenglobal.com/articles/26330/g2-esports-wins-record-20th-lec-title-with-sweep-of-movistar-koi',
    tags: [{ tag: 'LEC 2026' }, { tag: 'G2 Esports' }, { tag: 'Movistar KOI' }, { tag: 'Europe' }],
    content: [
      { type: 'p', children: [{ text: "G2 Esports a remporté le titre LEC 2026 Summer en balayant Movistar KOI 3-0 en finale, le 20 septembre au Palais Nikaïa à Nice. Cette victoire marque le 20e titre LEC dans l'histoire de l'équipe, une domination inégalée en Europe." }] },
      { type: 'h2', children: [{ text: "La Golden Road 2026 : Versus, Spring et Summer" }] },
      { type: 'p', children: [{ text: "G2 a complété en 2026 une Golden Road impressionnante en remportant les titres Versus, Spring et Summer consécutivement. Cette trilogie de victoires en une seule année confirme G2 comme la force dominante incontestée de la région EMEA cette saison." }] },
      { type: 'h2', children: [{ text: "La domination en trois jeux" }] },
      { type: 'p', children: [{ text: "Le balayage 3-0 face à Movistar KOI a été une démonstration magistrale du macro game et du contrôle de ressources. G2 n'a laissé aucune opportunité à MKOI, remportant chaque jeu de manière décisive et montrant une supériorité constante dans les teamfights et la rotation." }] },
      { type: 'h2', children: [{ text: "Labrov, le support légendaire en Finals MVP" }] },
      { type: 'p', children: [{ text: "Labros Papoutsakis, alias Labrov, le support de G2, a été nommé Finals MVP, un honneur rare pour cette position. Avec seulement deux morts sur l'ensemble des trois jeux, Labrov a affiché une stabilité défensive impressionnante et une vision d'équipe sans faille qui ont guidé G2 à la victoire." }] },
      { type: 'h2', children: [{ text: "Europe en force vers les Worlds 2026" }] },
      { type: 'p', children: [{ text: "La victoire de G2 sécurise la première tête de série européenne pour le League of Legends World Championship 2026. Avec cette domination domestique, G2 entre aux Worlds en tant que Tier 1 seed, en position très favorable pour aspirer au titre mondial." }] },
      { type: 'blockquote', children: [{ text: "G2's Golden Road 2026 : trois titres majeurs en une seule année, couronnée par un 20e titre LEC et une sécurisation de la première place européenne aux Worlds." }] },
    ],
  },
  {
    title: "LEC 2026 Finals: G2 Esports Claim Record 20th Title with Perfect 3-0 Sweep Over Movistar KOI",
    slug: 'lec2026-finals-g2-mkoi-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lec' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "G2 Esports claimed their 20th LEC title with a dominant 3-0 sweep over Movistar KOI in the finals on September 20. By winning Versus, Spring, and Summer in 2026, G2 completed the Golden Road, with Labrov earning Finals MVP.",
    sourceUrl: 'https://earlygame.com/news/lol/g2-destroy-movistar-koi-and-complete-a-perfect-lec-year',
    tags: [{ tag: 'LEC 2026' }, { tag: 'G2 Esports' }, { tag: 'Movistar KOI' }, { tag: 'Europe' }],
    content: [
      { type: 'p', children: [{ text: "G2 Esports captured their record 20th LEC title by sweeping Movistar KOI 3-0 in the finals on September 20 at the Palais Nikaïa in Nice, France. This dominant performance underscores G2's unmatched control over the European competitive scene in 2026." }] },
      { type: 'h2', children: [{ text: "The Golden Road: Versus, Spring, and Summer" }] },
      { type: 'p', children: [{ text: "G2 achieved an impressive Golden Road in 2026 by winning the Versus, Spring, and Summer titles consecutively. This trio of championships in a single year affirms G2 as the undisputed dominant force across the EMEA region." }] },
      { type: 'h2', children: [{ text: "Flawless three-game performance" }] },
      { type: 'p', children: [{ text: "The 3-0 sweep showcased G2's mastery of macro play and resource control. G2 left no openings for MKOI, winning each game decisively and demonstrating consistent superiority in teamfights and rotation patterns throughout the series." }] },
      { type: 'h2', children: [{ text: "Labrov earns Finals MVP with historic consistency" }] },
      { type: 'p', children: [{ text: "Labros Papoutsakis, known as Labrov, G2's support player, earned Finals MVP honors, a rare recognition for the support position. Recording just two deaths across all three games, Labrov demonstrated exceptional defensive stability and flawless team vision that guided G2 to victory." }] },
      { type: 'h2', children: [{ text: "Europe's force heading into Worlds 2026" }] },
      { type: 'p', children: [{ text: "The championship secures G2 Europe's first seed for the League of Legends World Championship 2026. With this domestic dominance, G2 enters Worlds as a Tier 1 seed, positioned favorably to contend for the world title." }] },
      { type: 'blockquote', children: [{ text: "G2's 2026 Golden Road: three major titles in a single year, crowned by a record 20th LEC title and Europe's first seed at Worlds." }] },
    ],
  },
  {
    title: "LEC 2026: G2 Esports Conquista su 20e Título al Barrer 3-0 a Movistar KOI en la Final",
    slug: 'lec2026-finals-g2-mkoi-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lec' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "G2 Esports conquistó su 20e título de la LEC con un arrasador 3-0 sobre Movistar KOI en la final el 20 de septiembre. Al ganar Versus, Spring y Summer en 2026, G2 completa la Golden Road, con Labrov siendo MVP de la final.",
    sourceUrl: 'https://earlygame.com/news/lol/g2-destroy-movistar-koi-and-complete-a-perfect-lec-year',
    tags: [{ tag: 'LEC 2026' }, { tag: 'G2 Esports' }, { tag: 'Movistar KOI' }, { tag: 'Europa' }],
    content: [
      { type: 'p', children: [{ text: "G2 Esports capturó su 20e título de la LEC al barrer 3-0 a Movistar KOI en la final el 20 de septiembre en el Palais Nikaïa en Niza, Francia. Esta actuación dominante subraya el control incomparable de G2 sobre la escena competitiva europea en 2026." }] },
      { type: 'h2', children: [{ text: "El Camino Dorado: Versus, Spring y Summer" }] },
      { type: 'p', children: [{ text: "G2 logró un impresionante Camino Dorado en 2026 al ganar los títulos de Versus, Spring y Summer consecutivamente. Este trío de campeonatos en un solo año afirma a G2 como la fuerza dominante indiscutible en toda la región EMEA." }] },
      { type: 'h2', children: [{ text: "Actuación impecable de tres juegos" }] },
      { type: 'p', children: [{ text: "El barrido 3-0 mostró el dominio de G2 en el macro juego y el control de recursos. G2 no dejó ninguna abertura para MKOI, ganando cada juego de manera decisiva y demostrando una superioridad consistente en los teamfights y los patrones de rotación a lo largo de toda la serie." }] },
      { type: 'h2', children: [{ text: "Labrov gana MVP de la Final con consistencia histórica" }] },
      { type: 'p', children: [{ text: "Labros Papoutsakis, conocido como Labrov, el soporte de G2, ganó los honores de MVP de la Final, un reconocimiento raro para la posición de soporte. Al registrar solo dos muertes en los tres juegos, Labrov demostró una estabilidad defensiva excepcional y una visión de equipo impecable que guió a G2 hacia la victoria." }] },
      { type: 'h2', children: [{ text: "La fuerza de Europa hacia Worlds 2026" }] },
      { type: 'p', children: [{ text: "El campeonato asegura a G2 la primera semilla de Europa para el League of Legends World Championship 2026. Con este dominio doméstico, G2 entra a Worlds como una semilla Tier 1, posicionada favorablemente para contender por el título mundial." }] },
      { type: 'blockquote', children: [{ text: "El Camino Dorado de G2 en 2026: tres títulos importantes en un solo año, coronado por un 20e título de la LEC y la primera semilla de Europa en Worlds." }] },
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
