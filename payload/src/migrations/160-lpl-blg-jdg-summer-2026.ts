import type { MigrationModule } from './runner'

export const id = '160-lpl-blg-jdg-summer-2026'
export const description = 'LPL Summer 2026 — BLG bat JDG 2-1 dans un choc au sommet, Elk MVP de la série'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-07T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/zeri/skins/base/images/zeri_splash_centered_0.jpg'

const articles = [
  {
    title: 'LPL Summer 2026 : BiliBili Gaming domine JDG 2-1 dans un choc au sommet tendu',
    slug: 'lpl-summer-2026-blg-jdg-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: 'BiliBili Gaming a signé sa septième victoire consécutive en disposant de JDG Gaming 2-1 jeudi, avec Elk en grande forme sur Zeri lors du game décisif.',
    sourceUrl: 'https://lolesports.com/leagues/lpl',
    tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'JDG' }, { tag: 'Elk' }],
    content: [
      { type: 'p', children: [{ text: "BiliBili Gaming continue de régner en LPL Summer 2026. Ce jeudi, l'équipe a signé une septième victoire consécutive en dominant JDG Gaming 2-1 dans l'un des matchs les plus suivis de la semaine." }] },
      { type: 'h2', children: [{ text: 'Un game 3 décisif' }] },
      { type: 'p', children: [{ text: "Après un game 1 remporté facilement par BLG (35 minutes), JDG a répondu en game 2 grâce à une composition d'engage redoutable centrée sur Malphite et Orianna. Mais en game 3, BLG a sorti le grand jeu : Elk sur Zeri a été intenable, terminant la partie 8/1/10 avec 40% des dégâts de son équipe. Le jeune ADC chinois confirme pourquoi il est considéré comme l'un des meilleurs joueurs de la LPL cette saison." }] },
      { type: 'h2', children: [{ text: 'BLG se qualifie pour les playoffs' }] },
      { type: 'p', children: [{ text: "Avec 13 victoires pour 3 défaites, BiliBili Gaming valide mathématiquement sa place en playoffs LPL. JDG, de son côté, reste à 10 victoires et devra régler quelques problèmes de cohésion avant les échéances qui approchent." }] },
    ],
  },
  {
    title: 'LPL Summer 2026: BiliBili Gaming beats JDG 2-1 in top-of-table thriller, Elk MVP',
    slug: 'lpl-summer-2026-blg-jdg-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "BiliBili Gaming extended their win streak to seven with a hard-fought 2-1 victory over JDG, powered by Elk's dominant Zeri performance in the deciding game.",
    sourceUrl: 'https://lolesports.com/leagues/lpl',
    tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'JDG' }, { tag: 'Elk' }],
    content: [
      { type: 'p', children: [{ text: "BiliBili Gaming's hot streak shows no signs of stopping. Thursday's 2-1 victory over JDG Gaming was their seventh straight win, cementing their position as the LPL's form team with playoffs already secured mathematically." }] },
      { type: 'h2', children: [{ text: 'Elk delivers when it counts' }] },
      { type: 'p', children: [{ text: "BLG took Game 1 comfortably in 35 minutes, but JDG struck back in Game 2 with a crushing Malphite-Orianna engage composition that ran BLG over. The rubber game was all about Elk: the young ADC on Zeri went 8/1/10, accounting for 40% of his team's damage as BLG dismantled JDG's base methodically." }] },
      { type: 'h2', children: [{ text: 'BLG clinch playoff berth' }] },
      { type: 'p', children: [{ text: "At 13-3, BiliBili Gaming have officially booked their playoff spot. JDG sit at 10 wins but will need to address their consistency issues before the postseason begins." }] },
    ],
  },
  {
    title: 'LPL Summer 2026: BiliBili Gaming vence a JDG 2-1 en un emocionante duelo de líderes',
    slug: 'lpl-summer-2026-blg-jdg-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: 'BiliBili Gaming extiende su racha a siete victorias consecutivas al superar a JDG 2-1, con Elk brillando en Zeri en el juego decisivo.',
    sourceUrl: 'https://lolesports.com/leagues/lpl',
    tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'JDG' }, { tag: 'Elk' }],
    content: [
      { type: 'p', children: [{ text: "BiliBili Gaming no da señales de detenerse en la LPL Summer 2026. Este jueves, el equipo firmó su séptima victoria consecutiva al doblegar a JDG Gaming 2-1 en uno de los duelos más esperados de la semana." }] },
      { type: 'h2', children: [{ text: 'Un tercer juego para la historia' }] },
      { type: 'p', children: [{ text: "BLG ganó el primer juego con comodidad en 35 minutos, pero JDG respondió en el segundo con una composición de engage devastadora centrada en Malphite y Orianna. En el juego decisivo, Elk en Zeri fue inalcanzable: cerró la partida con 8/1/10 y el 40% del daño del equipo, sellando la victoria de BLG." }] },
      { type: 'h2', children: [{ text: 'BLG asegura plaza en playoffs' }] },
      { type: 'p', children: [{ text: "Con un balance de 13-3, BiliBili Gaming ya tiene matemáticamente asegurado su puesto en los playoffs de la LPL. JDG se mantiene con 10 victorias y deberá resolver sus problemas de coherencia antes de la postemporada." }] },
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
