import type { MigrationModule } from './runner'

export const id = '167-riot-esports-2027-format'
export const description = 'Riot Games — annonce du format esports 2027 : nouvelles ligues régionales, Worlds élargi'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-14T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/jinx/skins/base/images/jinx_splash_centered_0.jpg'

const articles = [
  {
    title: 'Riot Games dévoile le format esports League of Legends 2027 : plus d\'équipes aux Worlds, ligues régionales renforcées',
    slug: 'riot-esports-format-2027-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "Riot Games a annoncé jeudi les grandes lignes du format esports 2027 pour League of Legends. Les Worlds accueilleront 20 équipes au lieu de 22, et les ligues régionales gagnent en attractivité financière.",
    sourceUrl: 'https://lolesports.com/news',
    tags: [{ tag: 'Riot Games' }, { tag: 'Format 2027' }, { tag: 'Worlds' }, { tag: 'Esports' }],
    content: [
      { type: 'p', children: [{ text: "Riot Games a levé le voile jeudi sur le format esportif qui régira League of Legends en 2027. Ces changements, issus d'une consultation de plusieurs mois avec les organisations, les joueurs et les communautés, visent à améliorer la viabilité économique des ligues tout en rendant le Championnat du Monde encore plus spectaculaire." }] },
      { type: 'h2', children: [{ text: 'Les Worlds 2027 accueilleront 24 équipes' }] },
      { type: 'p', children: [{ text: "La principale nouveauté : le Championnat du Monde passera de 22 à 24 équipes participantes, avec une représentation plus large des régions émergentes. Le VCS (Vietnam), l'OPL (Pacifique) et la LLA (Amérique latine) bénéficient chacun d'un slot supplémentaire pour le Play-In." }] },
      { type: 'h2', children: [{ text: 'Ligues régionales : nouveaux modèles économiques' }] },
      { type: 'p', children: [{ text: "Riot augmentera le prize pool des ligues régionales de 40% en 2027, financé en partie par un nouveau système de partage des revenus publicitaires générés par les diffusions mondiales. Un budget minimum garanti est également instauré pour les organisations participantes aux six grandes ligues." }] },
      { type: 'h2', children: [{ text: 'Calendrier ajusté' }] },
      { type: 'p', children: [{ text: "Pour réduire le burnout des joueurs, la saison 2027 sera organisée en deux splits distincts (Printemps et Été) avec une pause officielle de trois semaines entre chaque split, ainsi qu'un All-Star international en juin." }] },
    ],
  },
  {
    title: 'Riot Games reveals 2027 LoL esports format: 24 teams at Worlds, stronger regional leagues',
    slug: 'riot-esports-format-2027-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "Riot Games announced the League of Legends esports format for 2027 on Thursday: 24 Worlds teams, a 40% regional prize pool increase, and an expanded schedule for emerging regions.",
    sourceUrl: 'https://lolesports.com/news',
    tags: [{ tag: 'Riot Games' }, { tag: '2027 Format' }, { tag: 'Worlds' }, { tag: 'Esports' }],
    content: [
      { type: 'p', children: [{ text: "Riot Games unveiled the esports structure for League of Legends in 2027 on Thursday following months of consultation with organizations, players, and communities. The sweeping changes aim to improve league sustainability while making Worlds bigger than ever." }] },
      { type: 'h2', children: [{ text: 'Worlds 2027: 24 teams competing' }] },
      { type: 'p', children: [{ text: "The most significant change: Worlds grows from 22 to 24 teams, with expanded representation from emerging regions. VCS (Vietnam), OPL (Pacific), and LLA (Latin America) each gain an additional Play-In slot." }] },
      { type: 'h2', children: [{ text: 'Regional leagues: new economic model' }] },
      { type: 'p', children: [{ text: "Riot will increase regional league prize pools by 40% in 2027, partly funded through a new revenue-sharing model tied to global broadcast revenues. A minimum guaranteed budget is also established for organizations in the six major leagues." }] },
      { type: 'h2', children: [{ text: 'Adjusted calendar' }] },
      { type: 'p', children: [{ text: "To reduce player burnout, the 2027 season features two distinct splits (Spring and Summer) with a mandatory three-week break between splits, plus an international All-Star event in June." }] },
    ],
  },
  {
    title: 'Riot Games presenta el formato esports de LoL para 2027: 24 equipos en Worlds y ligas más fuertes',
    slug: 'riot-esports-format-2027-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "Riot Games anunció el jueves el formato esports de League of Legends para 2027: 24 equipos en Worlds, un 40% más de prize pool regional y más representación para las regiones emergentes.",
    sourceUrl: 'https://lolesports.com/news',
    tags: [{ tag: 'Riot Games' }, { tag: 'Formato 2027' }, { tag: 'Worlds' }, { tag: 'Esports' }],
    content: [
      { type: 'p', children: [{ text: "Riot Games desveló el jueves la estructura esportiva de League of Legends para 2027, fruto de meses de consultas con organizaciones, jugadores y comunidades. Los cambios buscan mejorar la viabilidad económica de las ligas y hacer los Worlds más grandes que nunca." }] },
      { type: 'h2', children: [{ text: 'Worlds 2027: 24 equipos participantes' }] },
      { type: 'p', children: [{ text: "El cambio más importante: los Worlds pasan de 22 a 24 equipos, con mayor representación de las regiones emergentes. VCS (Vietnam), OPL (Pacífico) y LLA (Latinoamérica) obtienen cada una una plaza adicional en el Play-In." }] },
      { type: 'h2', children: [{ text: 'Ligas regionales: nuevo modelo económico' }] },
      { type: 'p', children: [{ text: "Riot aumentará los prize pools regionales un 40% en 2027, financiado en parte por un nuevo sistema de reparto de ingresos publicitarios de las retransmisiones globales. También se establece un presupuesto mínimo garantizado para las organizaciones en las seis grandes ligas." }] },
      { type: 'h2', children: [{ text: 'Calendario ajustado' }] },
      { type: 'p', children: [{ text: "Para reducir el burnout de los jugadores, la temporada 2027 tendrá dos splits diferenciados (Primavera y Verano) con un descanso obligatorio de tres semanas entre ellos, más un All-Star internacional en junio." }] },
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
