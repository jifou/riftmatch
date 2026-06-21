import type { MigrationModule } from './runner'

export const id = '121-international-msi2026-primer-preview'
export const description = 'International — MSI 2026 Primer : tout savoir avant Daejeon (28 juin – 12 juillet)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-21T08:00:00.000Z'

const articles = [
  {
    title: "MSI 2026 : tout ce qu'il faut savoir avant le coup d'envoi à Daejeon",
    slug: 'international-msi2026-primer-daejeon-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/tXL6v2XM1CA/maxresdefault.jpg',
    excerpt: "Le Mid-Season Invitational 2026 démarre le 28 juin à Daejeon, Corée du Sud. 11 équipes, un Play-In à enjeux et des rivalités qui promettent du spectacle — voici tout ce qu'il faut savoir.",
    sourceUrl: 'https://lolesports.com/en-US/news/msi-2026-primer',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'International' }, { tag: 'MSI 2026' }],
    content: [
      { type: 'p', children: [{ text: "Le Mid-Season Invitational 2026 débute dans une semaine. Direction Daejeon, en Corée du Sud, du 28 juin au 12 juillet. Onze équipes de six régions s'affrontent pour le titre international le plus convoité du premier semestre, sous le thème \"Call Your Shot\"." }] },
      { type: 'h2', children: [{ text: 'Le format' }] },
      { type: 'p', children: [{ text: "Le tournoi démarre avec un Play-In en double-élimination (28 juin – 1er juillet) opposant quatre équipes : T1, Team Liquid, Karmine Corp et Deep Cross Gaming. Un seul ticket est en jeu pour rejoindre les sept équipes directement qualifiées. Le Bracket Stage (3 – 12 juillet) se joue en double-élimination BO5 avec fearless draft, où la moindre erreur stratégique peut coûter le titre." }] },
      { type: 'h2', children: [{ text: 'Les équipes à suivre' }] },
      { type: 'p', children: [{ text: "Hanwha Life Esports arrivent comme tête de série n°1 LCK pour leur toute première participation au MSI — un accomplissement historique acquis après avoir éliminé T1 3-1 en Road to MSI. Bilibili Gaming, invaincu sur la scène internationale en 2026, peut encore compléter le Golden Road. G2 Esports, champion du First Stand 2026, veut ajouter un MSI à son palmarès. T1, de son côté, doit d'abord franchir le Play-In face à Team Liquid avant de viser le titre sur home soil en Corée." }] },
      { type: 'p', children: [{ text: "L'absence de Gen.G est l'une des grandes surprises de ce MSI : les champions du monde en titre n'ont pas réussi à décrocher leur billet. HLE, TES, BLG, G2, LYON et FURIA rejoignent directement le Bracket Stage." }] },
      { type: 'h2', children: [{ text: 'Le lieu' }] },
      { type: 'p', children: [{ text: "Le Daejeon Convention Center II accueille le MSI pour la toute première fois, marquant l'entrée de cette ville tech-forward dans le circuit des grands événements Riot Games. La Fan Festa offrira des expériences immersives inspirées du champion Locke." }] },
      { type: 'blockquote', children: [{ text: "Avec des rivalités régionales intenses et un format fearless draft qui met la créativité à l'épreuve, le MSI 2026 s'annonce comme le tournoi international le plus électrique du premier semestre. Le Play-In débute le 28 juin — l'heure de choisir son camp." }] },
    ],
  },
  {
    title: "MSI 2026: Everything you need to know ahead of Daejeon",
    slug: 'international-msi2026-primer-daejeon-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/tXL6v2XM1CA/maxresdefault.jpg',
    excerpt: "MSI 2026 kicks off June 28 in Daejeon, South Korea. Eleven teams, a high-stakes Play-In stage, and intense regional rivalries — here is everything you need to know before the first match.",
    sourceUrl: 'https://lolesports.com/en-US/news/msi-2026-primer',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'International' }, { tag: 'MSI 2026' }],
    content: [
      { type: 'p', children: [{ text: "The 2026 Mid-Season Invitational arrives in Daejeon, South Korea, from June 28 to July 12. Eleven teams from six regions will fight for the year's first international title in this city's debut as a major Riot Games host, under the theme \"Call Your Shot\"." }] },
      { type: 'h2', children: [{ text: 'Format breakdown' }] },
      { type: 'p', children: [{ text: "MSI 2026 opens with a Play-In stage (June 28 – July 1) in a double-elimination bracket. Four teams — T1, Team Liquid, Karmine Corp, and Deep Cross Gaming — battle for the final Main Event slot. The Bracket Stage (July 3 – 12) then features eight teams competing in a double-elimination BO5 format with fearless draft rules, where one strategic misstep can end a team's title run." }] },
      { type: 'h2', children: [{ text: 'Teams to watch' }] },
      { type: 'p', children: [{ text: "Hanwha Life Esports make their first-ever MSI appearance as LCK's first seed, after beating T1 3-1 in the Road to MSI finals — a historic debut for the organization. Bilibili Gaming remain the only team capable of completing the Golden Road in 2026, still undefeated internationally this year. G2 Esports enter as First Stand 2026 champions, hungry to add MSI gold to their growing trophy cabinet. T1 must first survive the Play-In against Team Liquid before they can challenge for the title on home soil in South Korea." }] },
      { type: 'p', children: [{ text: "One major storyline heading into Daejeon: Gen.G, the defending World Champions, failed to qualify for MSI 2026 — a notable absence that opens the door for new champions. HLE, TES, BLG, G2, LYON, and FURIA advance directly to the Bracket Stage." }] },
      { type: 'h2', children: [{ text: 'Venue and theme' }] },
      { type: 'p', children: [{ text: "The tournament takes place at Daejeon Convention Center II — the first time this city has hosted a major Riot Games international event. The \"Call Your Shot\" theme centers on regional rivalries and personal grudge matches, with Fan Festa experiences inspired by new champion Locke." }] },
      { type: 'blockquote', children: [{ text: "With fearless draft raising the strategic stakes and inter-regional rivalries at a boiling point, MSI 2026 promises to be the most exciting international event of the first half of the year. The Play-In stage begins June 28 — it's time to call your shot." }] },
    ],
  },
  {
    title: "MSI 2026: Todo lo que necesitas saber antes del arranque en Daejeon",
    slug: 'international-msi2026-primer-daejeon-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/tXL6v2XM1CA/maxresdefault.jpg',
    excerpt: "El MSI 2026 empieza el 28 de junio en Daejeon, Corea del Sur. Once equipos, una fase Play-In con mucho en juego y rivalidades regionales al rojo vivo — aquí está todo lo que necesitas saber.",
    sourceUrl: 'https://lolesports.com/en-US/news/msi-2026-primer',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'Internacional' }, { tag: 'MSI 2026' }],
    content: [
      { type: 'p', children: [{ text: "El Mid-Season Invitational 2026 llega a Daejeon, Corea del Sur, del 28 de junio al 12 de julio. Once equipos de seis regiones se disputarán el título internacional más importante del primer semestre bajo el lema \"Call Your Shot\" (\"Elige tu blanco\")." }] },
      { type: 'h2', children: [{ text: 'El formato' }] },
      { type: 'p', children: [{ text: "El torneo arranca con la fase Play-In (28 de junio – 1 de julio), un bracket de doble eliminación con cuatro equipos: T1, Team Liquid, Karmine Corp y Deep Cross Gaming, con un único boleto para el Bracket Stage en juego. Esta segunda fase (3 – 12 de julio) reunirá a ocho equipos en eliminatoria doble de BO5 con fearless draft, donde un error de preparación puede costar el campeonato." }] },
      { type: 'h2', children: [{ text: 'Equipos a seguir' }] },
      { type: 'p', children: [{ text: "Hanwha Life Esports debutan en el MSI como cabeza de serie n°1 del LCK tras eliminar a T1 (3-1) en la Road to MSI — un hito histórico para la organización. Bilibili Gaming, invictos en la escena internacional en 2026, siguen con opciones para completar el Golden Road. G2 Esports, campeones del First Stand 2026, buscan su primer título en un MSI. T1 deberá superar el Play-In ante Team Liquid antes de poder aspirar al oro en casa, en Corea del Sur." }] },
      { type: 'p', children: [{ text: "La gran ausencia: Gen.G, campeones del mundo defensores, no lograron clasificarse para el MSI 2026. HLE, TES, BLG, G2, LYON y FURIA pasan directamente al Bracket Stage." }] },
      { type: 'h2', children: [{ text: 'Sede y tema' }] },
      { type: 'p', children: [{ text: "El Daejeon Convention Center II acoge por primera vez un gran evento internacional de Riot Games. El tema \"Call Your Shot\" gira en torno a rivalidades regionales y ajustes de cuentas entre jugadores y equipos, con experiencias de Fan Festa inspiradas en el nuevo campeón Locke." }] },
      { type: 'blockquote', children: [{ text: "Con el fearless draft elevando el nivel estratégico y las rivalidades entre regiones en su punto más álgido, el MSI 2026 promete ser el torneo internacional más emocionante del primer semestre. El Play-In empieza el 28 de junio — ¡elige tu bando!" }] },
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
