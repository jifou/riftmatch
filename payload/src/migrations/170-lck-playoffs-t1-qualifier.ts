import type { MigrationModule } from './runner'

export const id = '170-lck-playoffs-t1-qualifier'
export const description = 'LCK Playoffs 2026 — T1 qualifié en finale après avoir battu Hanwha Life 3-1'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-17T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/syndra/skins/base/images/syndra_splash_centered_0.jpg'

const articles = [
  {
    title: 'LCK Playoffs 2026 : T1 en finale après sa victoire 3-1 contre Hanwha Life',
    slug: 'lck-playoffs-2026-t1-hle-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "T1 file en finale des LCK Playoffs en dominant Hanwha Life Esports 3-1 ce dimanche. Faker et Gumayusi ont été les grands artisans de la victoire.",
    sourceUrl: 'https://lolesports.com/leagues/lck',
    tags: [{ tag: 'LCK' }, { tag: 'T1' }, { tag: 'Hanwha Life' }, { tag: 'Playoffs' }],
    content: [
      { type: 'p', children: [{ text: "T1 a confirmé son statut de favori en s'imposant 3-1 contre Hanwha Life Esports lors des demi-finales des LCK Playoffs 2026. La formation de Faker est en finale et confirmera sa qualification pour les Worlds 2026 lors du dernier match." }] },
      { type: 'h2', children: [{ text: 'Un match de haute volée' }] },
      { type: 'p', children: [{ text: "Hanwha Life a montré un très bon visage en game 1, remportant la manche grâce à un draft agressif centred sur Jarvan IV et Ashe. Mais T1 a rétabli l'ordre en games 2, 3 et 4 avec une clarté stratégique impressionnante. Faker sur Orianna a dicté le rythme des teamfights, et Gumayusi sur Zeri a été le carry défensif parfait." }] },
      { type: 'h2', children: [{ text: 'T1 en finale et qualifié pour les Worlds' }] },
      { type: 'p', children: [{ text: "En atteignant la finale, T1 est automatiquement qualifié pour les Worlds 2026 comme tête de série 1 du LCK. Gen.G, qui attend en finale, leur fera face dans ce qui s'annonce comme le choc de la saison en Corée." }] },
    ],
  },
  {
    title: 'LCK Playoffs 2026: T1 advance to the final with a 3-1 win over Hanwha Life',
    slug: 'lck-playoffs-2026-t1-hle-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "T1 are through to the LCK Playoffs final after a commanding 3-1 win over Hanwha Life Esports on Sunday. Faker and Gumayusi were the standout performers.",
    sourceUrl: 'https://lolesports.com/leagues/lck',
    tags: [{ tag: 'LCK' }, { tag: 'T1' }, { tag: 'Hanwha Life' }, { tag: 'Playoffs' }],
    content: [
      { type: 'p', children: [{ text: "T1 confirmed their status as the tournament favorite with a 3-1 win over Hanwha Life Esports on Sunday, booking their place in the LCK Playoffs final and automatically qualifying for Worlds 2026 as LCK's first seed." }] },
      { type: 'h2', children: [{ text: 'A high-quality semifinal' }] },
      { type: 'p', children: [{ text: "Hanwha Life shocked T1 in Game 1 with an aggressive Jarvan IV–Ashe composition, but T1 recalibrated and dominated Games 2–4 with impressive clarity. Faker dictated teamfight tempo on Orianna, while Gumayusi on Zeri served as the perfect insurance carry." }] },
      { type: 'h2', children: [{ text: 'T1 in the final, Worlds confirmed' }] },
      { type: 'p', children: [{ text: "By reaching the final, T1 are officially heading to Worlds 2026 as the LCK's top seed. They'll face Gen.G in what shapes up to be the series of the Korean season." }] },
    ],
  },
  {
    title: 'LCK Playoffs 2026: T1 llega a la final tras superar a Hanwha Life 3-1',
    slug: 'lck-playoffs-2026-t1-hle-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "T1 accede a la final de los LCK Playoffs 2026 con una contundente victoria 3-1 sobre Hanwha Life Esports. Faker y Gumayusi, figuras del partido.",
    sourceUrl: 'https://lolesports.com/leagues/lck',
    tags: [{ tag: 'LCK' }, { tag: 'T1' }, { tag: 'Hanwha Life' }, { tag: 'Playoffs' }],
    content: [
      { type: 'p', children: [{ text: "T1 confirmó su condición de favorito con una victoria 3-1 ante Hanwha Life Esports en las semifinales de los LCK Playoffs 2026, asegurando su presencia en la final y la clasificación automática a los Worlds 2026 como primera cabeza de serie del LCK." }] },
      { type: 'h2', children: [{ text: 'Una semifinal de alto nivel' }] },
      { type: 'p', children: [{ text: "Hanwha Life sorprendió a T1 en el juego 1 con una composición agresiva de Jarvan IV y Ashe, pero T1 se recompuso y dominó los juegos 2, 3 y 4 con gran claridad táctica. Faker en Orianna marcó el ritmo de las peleas de equipo, y Gumayusi en Zeri fue el carry de seguridd perfecto." }] },
      { type: 'h2', children: [{ text: 'T1 en la final y clasificado para Worlds' }] },
      { type: 'p', children: [{ text: "Al llegar a la final, T1 está oficialmente clasificado para los Worlds 2026 como primera cabeza de serie de la LCK. Les esperará Gen.G en lo que promete ser la serie del año en Corea." }] },
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
