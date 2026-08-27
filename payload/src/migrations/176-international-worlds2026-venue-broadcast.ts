import type { MigrationModule } from './runner'

export const id = '176-international-worlds2026-venue-broadcast'
export const description = 'Worlds 2026 — villes hôtes annoncées (Seoul, Paris, Londres), broadcast mondial confirmé'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-23T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/azir/skins/base/images/azir_splash_centered_0.jpg'

const articles = [
  {
    title: 'Worlds 2026 : Séoul, Paris et Londres confirmées comme villes hôtes, diffusion mondiale annoncée',
    slug: 'worlds-2026-venues-broadcast-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "Riot Games a officiellement annoncé les trois villes hôtes des Worlds 2026 : Séoul (Play-In et groupes), Paris (quarts et demi-finales), Londres (grande finale). Les modalités de diffusion mondiale sont également confirmées.",
    sourceUrl: 'https://lolesports.com/news',
    tags: [{ tag: 'Worlds 2026' }, { tag: 'Séoul' }, { tag: 'Paris' }, { tag: 'Londres' }],
    content: [
      { type: 'p', children: [{ text: "Riot Games a officiellement levé le voile sur les villes hôtes des Worlds 2026. C'est Séoul qui accueillera le début du tournoi (Play-In et phase de groupes), Paris prendra le relais pour les phases finales (quarts et demi-finales), et Londres accueillera la grande finale à l'O2 Arena le 19 octobre 2026." }] },
      { type: 'h2', children: [{ text: 'Trois capitales, trois atmosphères' }] },
      { type: 'p', children: [{ text: "Le choix de Séoul pour le Play-In s'explique par la proximité avec les équipes LCK et LPL, favorisant l'ambiance locale. Paris marquera le retour des Worlds en France pour la première fois depuis 2019 — la grande finale au AccorArena en 2019 reste l'un des moments les plus emblématiques de l'histoire des Worlds. Londres, avec son O2 Arena de 20 000 places, promet une grande finale de haute volée." }] },
      { type: 'h2', children: [{ text: 'Diffusion mondiale' }] },
      { type: 'p', children: [{ text: "La diffusion sera assurée dans plus de 20 langues. En France, la chaîne LoL Esports France propose un coverage intégral sur Twitch et YouTube. Riot a également annoncé un partenariat avec des chaînes TV sportives en Corée, en Chine et en Allemagne pour la grande finale." }] },
    ],
  },
  {
    title: 'Worlds 2026: Seoul, Paris, and London confirmed as host cities, global broadcast details released',
    slug: 'worlds-2026-venues-broadcast-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "Riot Games has officially confirmed the three host cities for Worlds 2026: Seoul (Play-In and groups), Paris (quarterfinals and semifinals), London (Grand Final). Global broadcast details are also confirmed.",
    sourceUrl: 'https://lolesports.com/news',
    tags: [{ tag: 'Worlds 2026' }, { tag: 'Seoul' }, { tag: 'Paris' }, { tag: 'London' }],
    content: [
      { type: 'p', children: [{ text: "Riot Games has officially unveiled the host cities for Worlds 2026. Seoul will open the tournament with the Play-In and group stage, Paris takes over for the knockout rounds (quarterfinals and semifinals), and London's O2 Arena hosts the Grand Final on October 19, 2026." }] },
      { type: 'h2', children: [{ text: 'Three capitals, three atmospheres' }] },
      { type: 'p', children: [{ text: "Seoul's selection for the Play-In leverages the proximity to LCK and LPL teams for a home-crowd feel. Paris marks the first time Worlds returns to France since 2019's iconic AccorArena Grand Final. London's 20,000-seat O2 Arena promises a spectacular finale atmosphere." }] },
      { type: 'h2', children: [{ text: 'Global broadcast' }] },
      { type: 'p', children: [{ text: "Coverage will be available in over 20 languages. Riot has confirmed broadcast partnerships with sports TV channels in Korea, China, and Germany for the Grand Final, alongside full Twitch and YouTube coverage across all stages." }] },
    ],
  },
  {
    title: 'Worlds 2026: Seúl, París y Londres confirmadas como sedes, detalles de la retransmisión mundial',
    slug: 'worlds-2026-venues-broadcast-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "Riot Games confirma las tres sedes de los Worlds 2026: Seúl (Play-In y grupos), París (cuartos y semis), Londres (gran final). También se desvelan los detalles de la retransmisión mundial.",
    sourceUrl: 'https://lolesports.com/news',
    tags: [{ tag: 'Worlds 2026' }, { tag: 'Seúl' }, { tag: 'París' }, { tag: 'Londres' }],
    content: [
      { type: 'p', children: [{ text: "Riot Games ha confirmado oficialmente las sedes de los Worlds 2026. Seúl acogerá el inicio del torneo (Play-In y fase de grupos), París tomará el relevo para las rondas eliminatorias (cuartos y semifinales), y el O2 Arena de Londres será el escenario de la gran final el 19 de octubre de 2026." }] },
      { type: 'h2', children: [{ text: 'Tres capitales, tres atmósferas' }] },
      { type: 'p', children: [{ text: "La elección de Seúl para el Play-In aprovecha la proximidad a los equipos de la LCK y la LPL. París representa el regreso de los Worlds a Francia por primera vez desde la icónica final de 2019 en el AccorArena. El O2 Arena de Londres, con capacidad para 20.000 personas, promete una gran final espectacular." }] },
      { type: 'h2', children: [{ text: 'Retransmisión mundial' }] },
      { type: 'p', children: [{ text: "La cobertura estará disponible en más de 20 idiomas. Riot ha confirmado acuerdos de retransmisión con cadenas de TV deportivas en Corea, China y Alemania para la gran final, además de cobertura completa en Twitch y YouTube." }] },
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
