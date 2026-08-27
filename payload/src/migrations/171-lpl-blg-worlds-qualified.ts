import type { MigrationModule } from './runner'

export const id = '171-lpl-blg-worlds-qualified'
export const description = 'LPL Summer 2026 — BiliBili Gaming qualifié pour les Worlds, JDG également confirmé'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-18T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/zeri/skins/base/images/zeri_splash_centered_0.jpg'

const articles = [
  {
    title: 'LPL Summer 2026 : BiliBili Gaming et JDG qualifiés pour les Worlds en phases de groupes',
    slug: 'lpl-summer-2026-blg-jdg-worlds-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "BiliBili Gaming et JDG Gaming sont officiellement qualifiés pour les phases de groupes des Worlds 2026 suite aux résultats des playoffs LPL ce week-end.",
    sourceUrl: 'https://lolesports.com/leagues/lpl',
    tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'JDG' }, { tag: 'Worlds 2026' }],
    content: [
      { type: 'p', children: [{ text: "La Chine aura deux représentants en phase de groupes des Worlds 2026. BiliBili Gaming et JDG Gaming ont tous deux validé leur qualification lors du week-end des playoffs LPL, confirmant la Chine comme la région la plus représentée parmi les têtes de série." }] },
      { type: 'h2', children: [{ text: 'BLG : qualification méritée après une saison record' }] },
      { type: 'p', children: [{ text: "BiliBili Gaming a conclu sa meilleure saison de l'histoire avec 14 victoires en saison régulière et une domination des playoffs. Elk et Xun sont considérés comme la meilleure duo Jungle-ADC de la LPL sur cette saison. La qualification directe en groupes leur évite le Play-In et leur permet de se concentrer sur la préparation stratégique." }] },
      { type: 'h2', children: [{ text: 'JDG accroche sa place de justesse' }] },
      { type: 'p', children: [{ text: "JDG a quant à elle connu un chemin plus tortueux, passant par la Losers Bracket après une défaite initiale contre EDG. Mais l'organisation a su rebondir pour s'imposer face à Top Esports en demi-finale de Losers Bracket et ainsi valider leur qualification. Top Esports et Weibo Gaming iront en Play-In Worlds." }] },
    ],
  },
  {
    title: 'LPL Summer 2026: BiliBili Gaming and JDG qualify for Worlds group stage',
    slug: 'lpl-summer-2026-blg-jdg-worlds-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "BiliBili Gaming and JDG Gaming are confirmed for the Worlds 2026 group stage following this weekend's LPL playoff results.",
    sourceUrl: 'https://lolesports.com/leagues/lpl',
    tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'JDG' }, { tag: 'Worlds 2026' }],
    content: [
      { type: 'p', children: [{ text: "China will have two representatives in the Worlds 2026 group stage. BiliBili Gaming and JDG Gaming both confirmed their qualifications this weekend, reinforcing China as the most strongly seeded region entering the tournament." }] },
      { type: 'h2', children: [{ text: "BLG: A record season earns a direct group stage spot" }] },
      { type: 'p', children: [{ text: "BiliBili Gaming concludes their best-ever season, with 14 regular-season wins and playoff dominance. The Elk–Xun jungle-ADC duo was the LPL's premier combination this split. Their direct group stage qualification gives them extra preparation time before Worlds." }] },
      { type: 'h2', children: [{ text: 'JDG survive the Losers Bracket' }] },
      { type: 'p', children: [{ text: "JDG's road was rockier — they dropped to the Losers Bracket after losing to EDG, but fought back to defeat Top Esports in the Losers Bracket semifinal. Top Esports and Weibo Gaming will head to the Play-In instead." }] },
    ],
  },
  {
    title: 'LPL Summer 2026: BiliBili Gaming y JDG clasificados para la fase de grupos de Worlds 2026',
    slug: 'lpl-summer-2026-blg-jdg-worlds-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "BiliBili Gaming y JDG Gaming son oficialmente clasificados para la fase de grupos de los Worlds 2026 tras los resultados de los playoffs de la LPL este fin de semana.",
    sourceUrl: 'https://lolesports.com/leagues/lpl',
    tags: [{ tag: 'LPL' }, { tag: 'BiliBili Gaming' }, { tag: 'JDG' }, { tag: 'Worlds 2026' }],
    content: [
      { type: 'p', children: [{ text: "China tendrá dos representantes en la fase de grupos de los Worlds 2026. BiliBili Gaming y JDG Gaming confirmaron su clasificación este fin de semana, consolidando a China como la región con las cabezas de serie más fuertes del torneo." }] },
      { type: 'h2', children: [{ text: 'BLG: una temporada récord les da plaza directa' }] },
      { type: 'p', children: [{ text: "BiliBili Gaming cierra su mejor temporada histórica con 14 victorias en la fase regular. El dúo Elk–Xun fue el mejor de la LPL en este split. Su clasificación directa a la fase de grupos les da más tiempo para prepararse para los Worlds." }] },
      { type: 'h2', children: [{ text: 'JDG resiste en el Losers Bracket' }] },
      { type: 'p', children: [{ text: "JDG tuvo un camino más difícil: cayeron al Losers Bracket tras perder ante EDG, pero remontaron para derrotar a Top Esports y confirmar su clasificación. Top Esports y Weibo Gaming irán al Play-In." }] },
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
