import type { MigrationModule } from './runner'

export const id = '176-international-worlds2026-venue-broadcast'
export const description = 'Worlds 2026 — États-Unis confirmés comme pays hôte (15 oct – 14 nov), broadcast mondial annoncé'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-23T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/azir/skins/base/images/azir_splash_centered_0.jpg'

const articles = [
  {
    title: 'Worlds 2026 : les États-Unis confirmés comme pays hôte, du 15 octobre au 14 novembre',
    slug: 'worlds-2026-venues-broadcast-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "Riot Games confirme que les Worlds 2026 se tiendront aux États-Unis du 15 octobre au 14 novembre 2026. 19 équipes participeront avec un format revu incluant un Play-In, un Swiss Stage et un Knockout Stage.",
    sourceUrl: 'https://lolesports.com/news',
    tags: [{ tag: 'Worlds 2026' }, { tag: 'États-Unis' }, { tag: 'Format' }],
    content: [
      { type: 'p', children: [{ text: "C'est officiel : les Worlds 2026 se tiendront aux États-Unis du 15 octobre au 14 novembre 2026. Riot Games a confirmé le pays hôte, et le tournoi sera le plus grand de l'histoire avec 19 équipes invitées en provenance de toutes les grandes régions." }] },
      { type: 'h2', children: [{ text: 'Un format revu en profondeur' }] },
      { type: 'p', children: [{ text: "Le format 2026 comprend trois phases distinctes. Le Play-In (4 équipes, double élimination, format BO5) donnera accès au Swiss Stage (16 équipes, 5 rondes, BO1/BO3 selon la situation). Les 8 meilleures équipes du Swiss s'affronteront ensuite dans un bracket Knockout en BO5. Une structure qui promet des matchs intenses dès les premières heures du tournoi." }] },
      { type: 'h2', children: [{ text: 'Représentation régionale' }] },
      { type: 'p', children: [{ text: "La LCK et la LPL envoient chacune 4 représentants, NA et EMEA 3 chacune, l'APAC 3, et le Brésil 2. Les villes hôtes spécifiques aux États-Unis n'ont pas encore été annoncées à ce stade." }] },
      { type: 'h2', children: [{ text: 'Diffusion mondiale' }] },
      { type: 'p', children: [{ text: "La diffusion sera assurée dans plus de 20 langues sur Twitch et YouTube. Riot devrait confirmer prochainement les partenariats TV pour les phases finales." }] },
    ],
  },
  {
    title: 'Worlds 2026 confirmed in the United States, October 15 to November 14',
    slug: 'worlds-2026-venues-broadcast-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "Riot Games confirms the 2026 Season World Championship will take place in the United States from October 15 to November 14, 2026, featuring 19 teams across a revamped Play-In, Swiss, and Knockout format.",
    sourceUrl: 'https://lolesports.com/news',
    tags: [{ tag: 'Worlds 2026' }, { tag: 'United States' }, { tag: 'Format' }],
    content: [
      { type: 'p', children: [{ text: "It's official: Worlds 2026 will be held in the United States from October 15 to November 14, 2026. Riot Games has confirmed the host country, with the tournament set to be the largest in Worlds history at 19 invited teams." }] },
      { type: 'h2', children: [{ text: 'Revamped format' }] },
      { type: 'p', children: [{ text: "The 2026 format features three stages. A Play-In (4 teams, double elimination, BO5) feeds into a Swiss Stage (16 teams, 5 rounds, BO1/BO3 depending on record). The top 8 from Swiss then compete in a single-elimination Knockout bracket, all BO5. Expect high-stakes matches from day one." }] },
      { type: 'h2', children: [{ text: 'Regional breakdown' }] },
      { type: 'p', children: [{ text: "LCK and LPL each send 4 representatives, NA and EMEA 3 each, APAC 3, and Brazil 2. Specific US host cities have not yet been announced." }] },
      { type: 'h2', children: [{ text: 'Global broadcast' }] },
      { type: 'p', children: [{ text: "Coverage will be available in over 20 languages on Twitch and YouTube. Riot is expected to confirm TV broadcast partnerships for the later stages shortly." }] },
    ],
  },
  {
    title: 'Worlds 2026 confirmados en Estados Unidos del 15 de octubre al 14 de noviembre',
    slug: 'worlds-2026-venues-broadcast-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "Riot Games confirma que los Worlds 2026 se celebrarán en Estados Unidos del 15 de octubre al 14 de noviembre, con 19 equipos y un formato renovado de Play-In, Swiss Stage y Knockout.",
    sourceUrl: 'https://lolesports.com/news',
    tags: [{ tag: 'Worlds 2026' }, { tag: 'Estados Unidos' }, { tag: 'Formato' }],
    content: [
      { type: 'p', children: [{ text: "Es oficial: los Worlds 2026 se celebrarán en Estados Unidos del 15 de octubre al 14 de noviembre de 2026. Riot Games ha confirmado el país anfitrión, con el torneo preparado para ser el más grande de la historia con 19 equipos invitados." }] },
      { type: 'h2', children: [{ text: 'Formato renovado' }] },
      { type: 'p', children: [{ text: "El formato 2026 consta de tres fases: un Play-In (4 equipos, doble eliminación, BO5), un Swiss Stage (16 equipos, 5 rondas, BO1/BO3 según el marcador) y un Knockout Stage de eliminación directa en BO5. Se esperan partidos de alta intensidad desde el primer día." }] },
      { type: 'h2', children: [{ text: 'Distribución regional' }] },
      { type: 'p', children: [{ text: "LCK y LPL envían 4 representantes cada una, NA y EMEA 3 cada una, APAC 3 y Brasil 2. Las ciudades sede específicas en Estados Unidos aún no han sido anunciadas." }] },
      { type: 'h2', children: [{ text: 'Retransmisión mundial' }] },
      { type: 'p', children: [{ text: "La cobertura estará disponible en más de 20 idiomas en Twitch y YouTube. Riot confirmará próximamente los acuerdos de retransmisión televisiva para las fases finales." }] },
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
