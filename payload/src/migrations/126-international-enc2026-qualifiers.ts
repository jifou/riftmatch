import type { MigrationModule } from './runner'

export const id = '126-international-enc2026-qualifiers'
export const description = 'International — ENC 2026 : 14 nations qualifiées pour LoL, résultats des qualificatifs'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-23T08:00:00.000Z'
const COVER = ''

const articles = [
  {
    title: "ENC 2026 : 14 nations qualifiées pour LoL — Nouvelle-Zélande première, la Mongolie crée la surprise",
    slug: 'enc-2026-qualificatifs-lol-resultats-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Du 19 au 21 juin, les qualificatifs de l'Esports Nations Cup 2026 ont révélé 14 nouvelles nations pour LoL. La Nouvelle-Zélande première qualifiée, la Mongolie élimine le Japon : tour d'horizon des résultats.",
    sourceUrl: 'https://esportsnationscup.com/en/competitions/2026/league-of-legends',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'International' }, { tag: 'ENC 2026' }],
    content: [
      { type: 'p', children: [{ text: "Du 19 au 21 juin 2026, sept qualificatifs continentaux ont déterminé 14 des 32 nations qui participeront à l'Esports Nations Cup (ENC) 2026 en League of Legends. Plus de 90 équipes nationales issues de tous les continents se sont affrontées, avec deux places par région à décrocher pour rejoindre l'événement principal à Riyad en novembre." }] },
      { type: 'h2', children: [{ text: "Nouvelle-Zélande : première nation qualifiée" }] },
      { type: 'p', children: [{ text: "Dans la zone SEA & Océanie, la Nouvelle-Zélande est devenue la toute première nation à décrocher sa qualification pour l'ENC 2026. Les Kiwis ont enchaîné quatre victoires consécutives, dont un 2-0 contre Singapour en série décisive et une victoire contre l'Australie voisine. Les Philippines ont décroché la deuxième place du qualificatif pour représenter la région." }] },
      { type: 'h2', children: [{ text: "Asie : Hong Kong s'impose, la Mongolie crée l'upset" }] },
      { type: 'p', children: [{ text: "Le qualificatif asiatique a offert les scénarios les plus dramatiques. Hong Kong, dont le roster n'avait été confirmé que trois jours avant le début de la compétition, a dominé le upper bracket et battu le Japon 2-0 en finale haute. Dans le lower bracket, la Mongolie a signé l'upset de la phase en éliminant le Japon 2-1 pour arracher la deuxième place qualificative — une double défaite historique pour le Japon, qui quitte les qualificatifs sans ticket pour Riyad." }] },
      { type: 'h2', children: [{ text: "Europe de l'Est et MEA : des records tombent" }] },
      { type: 'p', children: [{ text: "L'Europe de l'Est a vu la Lituanie et la Roumanie se qualifier pour le Main Event. En zone Moyen-Orient & Afrique, le Maroc a battu la RDC lors de l'un des matchs compétitifs les plus courts de l'histoire du LoL — moins de 14 minutes —, classant cette partie parmi les 12 games professionnelles les plus rapides jamais disputées." }] },
      { type: 'h2', children: [{ text: "30 places sur 32 pourvues avant Riyad" }] },
      { type: 'p', children: [{ text: "Ces 14 qualifications s'ajoutent aux 16 invitations directes déjà attribuées via le classement ENC (cut-off au 14 juin 2026), portant le total à 30 des 32 places confirmées. Deux spots wildcards restent à attribuer : un représentant de la zone GCC et un Slot Solidarité réservé à une région en développement. Le tournoi principal se déroulera du 21 au 29 novembre 2026 à Riyad, en Arabie Saoudite, avec 32 nations qui s'affronteront pour le premier titre mondial par nations en League of Legends." }] },
      { type: 'blockquote', children: [{ text: "Nouvelle-Zélande, Mongolie, Hong Kong, Maroc... L'ENC 2026 s'annonce déjà comme l'un des tournois les plus représentatifs et les plus imprévisibles de l'histoire du LoL." }] },
    ],
  },
  {
    title: 'ENC 2026: 14 Nations Qualify for LoL — New Zealand First, Mongolia Stuns Japan',
    slug: 'enc-2026-lol-qualifiers-results-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "From June 19-21, the ENC 2026 online qualifiers crowned 14 new nations for League of Legends. New Zealand were first to qualify, while Mongolia shocked Japan in the Asia bracket.",
    sourceUrl: 'https://esportsnationscup.com/en/competitions/2026/league-of-legends',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'International' }, { tag: 'ENC 2026' }],
    content: [
      { type: 'p', children: [{ text: "From June 19 to 21, 2026, seven continental online qualifiers determined 14 of the 32 nations competing at the Esports Nations Cup 2026 in League of Legends. Over 90 national teams from every continent fought for two spots per region, with the main event set for Riyadh, Saudi Arabia in November." }] },
      { type: 'h2', children: [{ text: "New Zealand: First Nation to Qualify" }] },
      { type: 'p', children: [{ text: "In the SEA & Oceania qualifier, New Zealand made history by becoming the first nation to secure a spot at the ENC 2026 Main Event. The Kiwis went on a flawless four-win run — defeating Australia and topping the qualifier with a convincing 2-0 sweep of Singapore in the decisive series. The Philippines claimed the second qualification spot from the region." }] },
      { type: 'h2', children: [{ text: "Asia: Hong Kong Dominates, Mongolia Upsets Japan" }] },
      { type: 'p', children: [{ text: "The Asia qualifier produced the most dramatic storylines. Hong Kong — whose roster was only confirmed three days before the tournament started — swept Japan 2-0 in the upper bracket final to claim first place. In the lower bracket, Mongolia delivered the biggest upset of the qualifiers by defeating Japan 2-1, eliminating the heavily favored Japanese squad from contention and claiming the second qualifying spot." }] },
      { type: 'h2', children: [{ text: "Europe East and MEA: Records Broken" }] },
      { type: 'p', children: [{ text: "Europe East saw Lithuania and Romania advance to the main event. In the Middle East & Africa qualifier, Morocco defeated DR Congo in one of the shortest competitive LoL matches ever recorded — under 14 minutes — ranking it among the 12 fastest professional games in League of Legends history." }] },
      { type: 'h2', children: [{ text: "30 of 32 Spots Filled Ahead of Riyadh" }] },
      { type: 'p', children: [{ text: "With 14 qualifier spots added to the 16 direct invites (awarded via the ENC Ranking with a cut-off date of June 14, 2026), 30 of 32 ENC 2026 slots are now confirmed. Two wildcard spots remain: one for a GCC representative and one Solidarity Slot reserved for a developing region. The main event runs from November 21-29, 2026 in Riyadh — the first-ever League of Legends world title contested between nations rather than clubs." }] },
      { type: 'blockquote', children: [{ text: "New Zealand, Mongolia, Hong Kong, Morocco — ENC 2026 is shaping up to be one of the most diverse and unpredictable tournaments in League of Legends history." }] },
    ],
  },
  {
    title: 'ENC 2026: 14 naciones clasificadas para LoL — Nueva Zelanda primera, Mongolia sorprende a Japón',
    slug: 'enc-2026-lol-clasificatorios-resultados-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Del 19 al 21 de junio, los clasificatorios del ENC 2026 definieron 14 naciones para LoL. Nueva Zelanda fue la primera en clasificarse, mientras Mongolia eliminó a Japón en Asia.",
    sourceUrl: 'https://esportsnationscup.com/en/competitions/2026/league-of-legends',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'Internacional' }, { tag: 'ENC 2026' }],
    content: [
      { type: 'p', children: [{ text: "Del 19 al 21 de junio de 2026, siete clasificatorios continentales online definieron a 14 de las 32 naciones que participarán en el Esports Nations Cup (ENC) 2026 de League of Legends. Más de 90 equipos nacionales de todos los continentes compitieron por dos plazas por región, con el evento principal en Riad, Arabia Saudita, en noviembre." }] },
      { type: 'h2', children: [{ text: "Nueva Zelanda: primera nación clasificada" }] },
      { type: 'p', children: [{ text: "En la zona SEA & Oceanía, Nueva Zelanda hizo historia al convertirse en la primera nación en asegurar un lugar en el ENC 2026 Main Event. Los neozelandeses encadenaron cuatro victorias consecutivas — incluyendo un triunfo sobre Australia y un convincente 2-0 ante Singapur en la serie decisiva. Las Filipinas se adjudicaron la segunda plaza clasificatoria de la región." }] },
      { type: 'h2', children: [{ text: "Asia: Hong Kong domina, Mongolia sorprende a Japón" }] },
      { type: 'p', children: [{ text: "El clasificatorio asiático fue el más espectacular. Hong Kong — cuyo roster se confirmó solo tres días antes del torneo — arrasó a Japón 2-0 en el upper bracket final. En el lower bracket, Mongolia protagonizó el mayor upset de los clasificatorios al vencer a Japón 2-1, eliminando al favorito nipón y arrebatándole la segunda plaza de clasificación." }] },
      { type: 'h2', children: [{ text: "Europa del Este y MEA: récords históricos" }] },
      { type: 'p', children: [{ text: "Europa del Este vio a Lituania y Rumanía avanzar al evento principal. En Medio Oriente & África, Marruecos derrotó a la RD Congo en una de las partidas competitivas de LoL más rápidas de la historia — menos de 14 minutos —, ubicándola entre las 12 games profesionales más cortas jamás disputadas." }] },
      { type: 'h2', children: [{ text: "30 de 32 plazas cubiertas antes de Riad" }] },
      { type: 'p', children: [{ text: "Con 14 clasificados sumados a las 16 invitaciones directas (otorgadas por el ranking ENC con fecha límite del 14 de junio de 2026), 30 de las 32 plazas del ENC 2026 están ya confirmadas. Quedan dos wildcards: un representante de la zona GCC y un Slot de Solidaridad para una región en desarrollo. El evento principal se celebrará del 21 al 29 de noviembre de 2026 en Riad — el primer título mundial de League of Legends entre naciones, no entre clubes." }] },
      { type: 'blockquote', children: [{ text: "Nueva Zelanda, Mongolia, Hong Kong, Marruecos... El ENC 2026 promete ser uno de los torneos más diversos e impredecibles de toda la historia del LoL." }] },
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
