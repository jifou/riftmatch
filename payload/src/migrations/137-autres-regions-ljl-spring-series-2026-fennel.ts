import type { MigrationModule } from './runner'

export const id = '137-autres-regions-ljl-spring-series-2026-fennel'
export const description = 'Autres Régions — LJL 2026 Spring Series : FENNEL champion 3-2 face à Rising Gaming, doublé Winter + Spring'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-30T08:00:00.000Z'

const articles = [
  {
    title: "LJL 2026 Spring Series : FENNEL s'impose 3-2 en finale et réalise le doublé Winter + Spring",
    slug: 'ljl-2026-spring-series-fennel-champion-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "FENNEL remporte la LJL 2026 Spring Series 3-2 face à Rising Gaming après une finale épique en cinq manches. La formation japonaise réalise le doublé en 2026 après avoir déjà décroché la Winter Series.",
    sourceUrl: 'https://lol.fandom.com/wiki/LJL/2026_Season/Spring_Series',
    tags: [{ tag: 'LJL' }, { tag: 'Esports' }, { tag: 'Japon' }, { tag: 'FENNEL' }],
    content: [
      { type: 'p', children: [{ text: "La League of Legends Japan League (LJL) a vécu une finale mémorable lors de sa Spring Series 2026. FENNEL a battu Rising Gaming 3-2 dans un affrontement palpitant en cinq manches, décrochant ainsi leur deuxième titre de la saison 2026 après avoir déjà remporté la Winter Series. Un véritable doublé historique pour la formation nippone." }] },
      { type: 'h2', children: [{ text: "Un duel épique en cinq manches" }] },
      { type: 'p', children: [{ text: "La finale de la LJL 2026 Spring Series a tenu toutes ses promesses. Rising Gaming a longtemps cru pouvoir détrôner le champion en titre, poussant FENNEL jusqu'à la manche décisive. Mais la formation de FENNEL a su trouver les ressources nécessaires pour s'imposer en Game 5, affichant une maîtrise collective et une solidité mentale exemplaires sous la pression des moments cruciaux de la série." }] },
      { type: 'h2', children: [{ text: "FENNEL, machine à gagner au Japon" }] },
      { type: 'p', children: [{ text: "FENNEL confirme sa domination sur la scène japonaise en 2026. Après avoir remporté la LJL Winter Series en début d'année, la formation enchaîne avec un second titre, devenant ainsi l'équipe dominante du Japon cette saison. Ce doublé Winter + Spring leur assure une position de force avant le LJL Summer Championship, prévu à partir du 13 juillet 2026, où les meilleures équipes japonaises s'affronteront pour le titre de fin de saison." }] },
      { type: 'h2', children: [{ text: "La LJL dans l'écosystème LCP" }] },
      { type: 'p', children: [{ text: "La LJL fonctionne désormais comme une ligue domestique au sein de la structure élargie du LCP (League of Legends Championship Pacific), qui réunit le Japon, le Vietnam, l'Asie-Pacifique et l'Océanie. Les bonnes performances en LJL influencent directement les qualifications pour le LCP, où les meilleures équipes de la région s'affrontent pour décrocher des places en compétitions internationales comme le MSI ou les Worlds." }] },
      { type: 'blockquote', children: [{ text: "FENNEL réalise le doublé Winter + Spring 2026 — la formation japonaise est clairement dans une classe à part sur la scène nationale." }] },
    ],
  },
  {
    title: "LJL 2026 Spring Series: FENNEL claim 3-2 victory over Rising Gaming to complete back-to-back titles",
    slug: 'ljl-2026-spring-series-fennel-champion-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "FENNEL win the LJL 2026 Spring Series with a 3-2 victory over Rising Gaming in a thrilling five-game final, completing a Winter + Spring double in Japan this season.",
    sourceUrl: 'https://lol.fandom.com/wiki/LJL/2026_Season/Spring_Series',
    tags: [{ tag: 'LJL' }, { tag: 'Esports' }, { tag: 'Japan' }, { tag: 'FENNEL' }],
    content: [
      { type: 'p', children: [{ text: "FENNEL are back-to-back champions in Japan. The League of Legends Japan League (LJL) 2026 Spring Series concluded with FENNEL defeating Rising Gaming 3-2 in a tightly-contested five-game final, securing the team's second title of the 2026 season following their Winter Series victory earlier this year." }] },
      { type: 'h2', children: [{ text: "A five-game thriller" }] },
      { type: 'p', children: [{ text: "Rising Gaming pushed FENNEL to the absolute limit in the Spring Series final. The series went the full distance, with Rising Gaming refusing to go quietly and forcing the match into a decisive fifth game. FENNEL, however, proved they had the mental fortitude and team cohesion to close out when it mattered most, securing a hard-fought 3-2 victory to retain their title." }] },
      { type: 'h2', children: [{ text: "FENNEL establish dominance in Japan" }] },
      { type: 'p', children: [{ text: "This Winter + Spring double makes FENNEL the undisputed top team in Japan's 2026 season so far. Having already lifted the LJL Winter Series trophy, adding the Spring Series crown cements their position as the clear benchmark for every other LJL squad. Their next challenge will be the LJL Summer Championship, set to run from July 13 to September 6 2026, where they will look to make it a hat-trick of titles in one calendar year." }] },
      { type: 'h2', children: [{ text: "LJL within the LCP ecosystem" }] },
      { type: 'p', children: [{ text: "The LJL now operates as a domestic feeder league within the broader LCP (League of Legends Championship Pacific) structure, alongside the VCS (Vietnam), LCO (Oceania), and former PCS teams. Strong LJL performances translate into opportunities at the LCP level, where the region's best teams compete for slots at global events such as MSI and Worlds. With FENNEL's continued dominance, their ambitions at the LCP level will be closely watched when the LCP Split 3 gets underway in late July 2026." }] },
      { type: 'blockquote', children: [{ text: "FENNEL's Winter + Spring 2026 double puts them in a league of their own in Japan — and raises the question of who can stop them at the Summer Championship." }] },
    ],
  },
  {
    title: "LJL 2026 Spring Series: FENNEL gana 3-2 frente a Rising Gaming y completa el doblete de la temporada",
    slug: 'ljl-2026-spring-series-fennel-champion-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "FENNEL se impone 3-2 sobre Rising Gaming en una emocionante final a cinco partidas y se corona campeón de la LJL 2026 Spring Series, completando el doblete Winter + Spring en Japón.",
    sourceUrl: 'https://lol.fandom.com/wiki/LJL/2026_Season/Spring_Series',
    tags: [{ tag: 'LJL' }, { tag: 'Esports' }, { tag: 'Japón' }, { tag: 'FENNEL' }],
    content: [
      { type: 'p', children: [{ text: "FENNEL se consagra bicampeón en Japón. La LJL 2026 Spring Series concluyó con FENNEL derrotando a Rising Gaming por 3-2 en una apasionante final a cinco partidas, asegurando el segundo título de la organización en la temporada 2026 tras su victoria en la Winter Series a comienzos de año." }] },
      { type: 'h2', children: [{ text: "Una final épica a cinco partidas" }] },
      { type: 'p', children: [{ text: "Rising Gaming llevó la final hasta el límite, forzando un emocionante quinto juego decisivo. FENNEL, sin embargo, demostró la solidez mental y la cohesión de equipo necesarias para cerrar la serie cuando más importaba, imponiéndose en el Game 5 y levantando el trofeo de la Spring Series 2026." }] },
      { type: 'h2', children: [{ text: "FENNEL domina la escena japonesa en 2026" }] },
      { type: 'p', children: [{ text: "Este doblete Winter + Spring convierte a FENNEL en el equipo más dominante de la escena japonesa en 2026. Tras levantar el título de la LJL Winter Series, sumar el de la Spring Series refuerza su posición como referente indiscutible en el panorama nacional. Su próximo reto será el LJL Summer Championship, programado del 13 de julio al 6 de septiembre de 2026, donde buscarán completar un hat-trick de títulos en un mismo año." }] },
      { type: 'h2', children: [{ text: "La LJL dentro del ecosistema LCP" }] },
      { type: 'p', children: [{ text: "La LJL funciona actualmente como liga doméstica dentro de la estructura ampliada del LCP (League of Legends Championship Pacific), junto al VCS (Vietnam), LCO (Oceanía) y los antiguos equipos del PCS. Los buenos resultados en la LJL abren puertas al nivel LCP, donde los mejores equipos de la región compiten por plazas en eventos internacionales como el MSI o los Worlds. Con el dominio continuo de FENNEL, sus ambiciones en el LCP serán muy seguidas cuando comience el Split 3 a finales de julio de 2026." }] },
      { type: 'blockquote', children: [{ text: "El doblete Winter + Spring 2026 de FENNEL los sitúa en una categoría superior en Japón — y plantea la pregunta de quién podrá detenerlos en el Summer Championship." }] },
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
