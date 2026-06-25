import type { MigrationModule } from './runner'

export const id = '129-international-msi2026-t1-vs-liquid-playin'
export const description = 'International — MSI 2026 Play-In : T1 vs Team Liquid le 28 juin à Daejeon'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-25T08:00:00.000Z'

const articles = [
  {
    title: "MSI 2026 : T1 et Faker défient Team Liquid au Play-In le 28 juin — le ticket pour le Bracket Stage en jeu",
    slug: 't1-vs-team-liquid-msi-2026-play-in-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "À trois jours du MSI 2026, T1 devra d'abord sortir du Play-In face à Team Liquid avant d'espérer jouer sur la scène principale de Daejeon.",
    sourceUrl: 'https://lolesports.com/en-US/news/msi-2026-primer',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'International' }, { tag: 'MSI 2026' }, { tag: 'T1' }],
    content: [
      { type: 'p', children: [{ text: "Le MSI 2026 ouvre ses portes le 28 juin au Daejeon Convention Center II, en Corée du Sud. Avant d'accéder au Bracket Stage, quatre équipes devront se départager dans un Play-In en double élimination intégral — entièrement en Best-of-5 avec le format Fearless Draft. Un seul ticket est disponible pour rejoindre les huit équipes directement qualifiées." }] },
      { type: 'h2', children: [{ text: "Le Play-In : format et enjeux" }] },
      { type: 'p', children: [{ text: "Les quatre équipes du Play-In sont les deuxièmes graines de la LCK, de la LEC, de la LCS et de la LCP. T1 (LCK 2) affronte Team Liquid (LCS 2) lors du match d'ouverture le 28 juin, tandis que Karmine Corp (LEC 2) fait face à Relove Deep Cross Gaming (LCP 2). En double élimination, une seule défaite n'est pas éliminatoire — mais seule l'équipe qui remporte le bracket final intègre le Bracket Stage. Les trois autres rentrent à la maison." }] },
      { type: 'h2', children: [{ text: "T1 et Faker : le 9e MSI du légendaire mid laner" }] },
      { type: 'p', children: [{ text: "T1 arrive au MSI 2026 en tant que 2e graine LCK après avoir cédé la première place à Hanwha Life Esports lors de la LCK Road to MSI (défaite 1-3). C'est la neuvième participation de Faker à un Mid-Season Invitational — et la première fois qu'il le disputera en Corée du Sud, devant le public coréen. T1 reste le grand favori de ce Play-In : leur palmarès international et leur maîtrise du Fearless Draft les placent au-dessus de leurs adversaires désignés." }] },
      { type: 'h2', children: [{ text: "Team Liquid : de retour sur la scène internationale" }] },
      { type: 'p', children: [{ text: "Team Liquid retrouve la scène internationale après avoir manqué à la fois le MSI et les Worlds l'an passé. L'équipe s'appuie sur le duo jungle-mid composé de Josedeodo et Quid (Lim Hyeon-seung) pour créer du jeu — mais les analystes pointent des faiblesses en top lane (Morgan) et en bot lane (Yeon). Battre T1 en Best-of-5 avec le Fearless Draft représente un défi colossal que peu d'équipes LCS ont su relever ces dernières années." }] },
      { type: 'h2', children: [{ text: "Le Bracket Stage attend" }] },
      { type: 'p', children: [{ text: "Si T1 passe le Play-In comme attendu, ils rejoindront HLE, Bilibili Gaming, Top Esports, G2 Esports, LYON, Team Secret Whales et FURIA dans un Bracket Stage en double élimination. Le chemin vers le titre mondial intermédiaire passe forcément par les géants du LPL et de la LCK. La question est : quel état d'esprit T1 affichera-t-il après avoir été contraint de passer par la porte de service ?" }] },
      { type: 'blockquote', children: [{ text: "Le MSI 2026 à Daejeon, c'est l'occasion pour T1 de répondre à ceux qui les ont relégués en Play-In — et Faker a rarement manqué ces rendez-vous." }] },
    ],
  },
  {
    title: "MSI 2026: T1 and Faker Must Survive Play-In Against Team Liquid on June 28 in Daejeon",
    slug: 't1-vs-team-liquid-msi-2026-play-in-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Three days before MSI 2026 kicks off in Daejeon, T1 and Faker must first navigate the Play-In stage against Team Liquid to reach the main event.",
    sourceUrl: 'https://lolesports.com/en-US/news/msi-2026-primer',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'International' }, { tag: 'MSI 2026' }, { tag: 'T1' }],
    content: [
      { type: 'p', children: [{ text: "MSI 2026 begins on June 28 at the Daejeon Convention Center II in South Korea. Before the Bracket Stage can take place, four teams must battle through a Play-In — a fully double-elimination bracket played entirely in Best-of-5 with Fearless Draft. Only one team will advance to join the eight directly seeded squads." }] },
      { type: 'h2', children: [{ text: "Play-In Format and Stakes" }] },
      { type: 'p', children: [{ text: "The four Play-In teams are the second seeds from the LCK, LEC, LCS, and LCP. T1 (LCK 2nd seed) opens against Team Liquid (LCS 2nd seed) on June 28, while Karmine Corp (LEC 2) faces Relove Deep Cross Gaming (LCP 2). In double elimination, a single loss is not fatal — but only the last team standing earns a Bracket Stage spot. The other three are eliminated." }] },
      { type: 'h2', children: [{ text: "Faker's 9th MSI — on Home Soil" }] },
      { type: 'p', children: [{ text: "T1 arrives as the LCK 2nd seed after falling 1-3 to Hanwha Life Esports in the LCK Road to MSI. For Faker, this marks his ninth appearance at a Mid-Season Invitational — and the first to be held in South Korea, meaning he will compete in front of a home crowd. T1 are heavy favourites in this Play-In: their international track record and Fearless Draft expertise put them comfortably ahead of their opponents." }] },
      { type: 'h2', children: [{ text: "Team Liquid: Back on the International Stage" }] },
      { type: 'p', children: [{ text: "Team Liquid return to international competition after missing both MSI and Worlds last year. The team leans on their jungle-mid duo of Josedeodo and Quid (Lim Hyeon-seung) to generate advantages — but analysts highlight concerns in the top lane (Morgan) and bot lane (Yeon). Upsetting T1 in a Best-of-5 Fearless Draft series represents a monumental challenge that few LCS sides have managed in recent history." }] },
      { type: 'h2', children: [{ text: "The Bracket Stage Awaits" }] },
      { type: 'p', children: [{ text: "Should T1 advance as expected, they will join HLE, Bilibili Gaming, Top Esports, G2 Esports, LYON, Team Secret Whales, and FURIA in a double-elimination Bracket Stage. The road to the mid-season title runs through the best teams the LPL and LCK have to offer. The question becomes: what mentality will T1 carry after being forced through the Play-In door?" }] },
      { type: 'blockquote', children: [{ text: "MSI 2026 in Daejeon is T1's chance to answer everyone who relegated them to the Play-In — and Faker has rarely missed those appointments." }] },
    ],
  },
  {
    title: "MSI 2026: T1 y Faker deben superar el Play-In ante Team Liquid el 28 de junio en Daejeon",
    slug: 't1-vs-team-liquid-msi-2026-play-in-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "A tres días del inicio del MSI 2026 en Daejeon, T1 y Faker deberán primero sobrevivir al Play-In frente a Team Liquid para alcanzar el evento principal.",
    sourceUrl: 'https://lolesports.com/en-US/news/msi-2026-primer',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'Internacional' }, { tag: 'MSI 2026' }, { tag: 'T1' }],
    content: [
      { type: 'p', children: [{ text: "El MSI 2026 arranca el 28 de junio en el Daejeon Convention Center II de Corea del Sur. Antes de llegar al Bracket Stage, cuatro equipos deberán disputar un Play-In en formato de doble eliminación, enteramente en Best-of-5 con Fearless Draft. Solo un equipo logrará acceder a la fase principal junto a los ocho clasificados directos." }] },
      { type: 'h2', children: [{ text: "Formato y apuestas del Play-In" }] },
      { type: 'p', children: [{ text: "Los cuatro equipos del Play-In son las segundas semillas del LCK, LEC, LCS y LCP. T1 (2ª semilla LCK) abre contra Team Liquid (2ª semilla LCS) el 28 de junio, mientras Karmine Corp (LEC 2) se enfrenta a Relove Deep Cross Gaming (LCP 2). En doble eliminación, una sola derrota no es eliminatoria, pero solo el último equipo en pie obtiene el boleto al Bracket Stage. Los otros tres quedan eliminados." }] },
      { type: 'h2', children: [{ text: "El 9.º MSI de Faker — en casa" }] },
      { type: 'p', children: [{ text: "T1 llega como segunda semilla del LCK tras caer 1-3 ante Hanwha Life Esports en el LCK Road to MSI. Para Faker, esta es su novena participación en el Mid-Season Invitational, y la primera celebrada en Corea del Sur, lo que significa que competirá ante su público local. T1 son los grandes favoritos de este Play-In: su historial internacional y su dominio del Fearless Draft les sitúan claramente por delante de sus rivales." }] },
      { type: 'h2', children: [{ text: "Team Liquid: de vuelta en la escena internacional" }] },
      { type: 'p', children: [{ text: "Team Liquid regresa a la competición internacional tras perderse MSI y Worlds el año pasado. El equipo se apoya en el dúo jungla-mid formado por Josedeodo y Quid (Lim Hyeon-seung) para generar ventajas, aunque los analistas señalan debilidades en la top lane (Morgan) y la bot lane (Yeon). Vencer a T1 en un Best-of-5 con Fearless Draft supone un desafío enorme que pocas escuadras de la LCS han logrado en los últimos años." }] },
      { type: 'h2', children: [{ text: "El Bracket Stage espera" }] },
      { type: 'p', children: [{ text: "Si T1 avanza como se espera, se reunirá con HLE, Bilibili Gaming, Top Esports, G2 Esports, LYON, Team Secret Whales y FURIA en un Bracket Stage de doble eliminación. El camino hacia el título de mitad de temporada pasa por los mejores equipos del LPL y el LCK. La gran pregunta es: ¿qué mentalidad mostrará T1 después de verse obligado a pasar por el Play-In?" }] },
      { type: 'blockquote', children: [{ text: "El MSI 2026 en Daejeon es la oportunidad de T1 para responder a quienes los relegaron al Play-In — y Faker raramente falla en estas citas." }] },
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
