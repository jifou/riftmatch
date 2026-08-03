import type { MigrationModule } from './runner'

export const id = '155-autres-regions-cblol-split2-2026-los-red-canids'
export const description = "Autres Régions — CBLOL Split 2 2026 : la LOS balaie la RED Canids et reste invaincue"

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-03T08:00:00.000Z'

const articles = [
  {
    title: "CBLOL Split 2 2026 : la LOS reste invaincue en balayant la RED Canids",
    slug: 'cblol-split2-2026-los-red-canids-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/jayce/skins/base/images/jayce_splash_centered_0.jpg',
    excerpt: "La LOS a balayé la RED Canids 2-0 le 2 août dans le cadre du CBLOL Split 2 2026, confortant sa place en tête du classement aux côtés de Vivo Keyd Stars et de la LOUD.",
    sourceUrl: 'https://lolesports.com/pt-BR/leagues/cblol-brazil',
    tags: [{ tag: 'CBLOL' }, { tag: 'LoL' }, { tag: 'Esports' }, { tag: 'LOS' }],
    content: [
      { type: 'p', children: [{ text: "La LOS a signé une nouvelle victoire nette dans le CBLOL Split 2 2026, en s'imposant 2-0 face à la RED Canids le 2 août. Une série à sens unique qui permet à la franchise de conserver son invincibilité et de rester au sommet du classement." }] },
      { type: 'h2', children: [{ text: "Zest impérial sur Jayce dans la première manche" }] },
      { type: 'p', children: [{ text: "Dans la première manche, le top laner Zest a fait basculer la rencontre avec un Jayce à 3/3/11, prenant l'ascendant sur zynts avant de conclure la partie en 38 minutes sur un net avantage de 18 kills à 11." }] },
      { type: 'h2', children: [{ text: "Duduhh décisif en flanc sur la seconde manche" }] },
      { type: 'p', children: [{ text: "La RED Canids a pourtant bien débuté la seconde manche, avec une bonne position en early game. Mais la LOS s'est montrée supérieure dans les affrontements collectifs, portée par une prestation sans faute de Duduhh sur Akali, en embuscade permanente sur les flancs adverses." }] },
      { type: 'h2', children: [{ text: "La LOS toujours en tête du Split 2" }] },
      { type: 'p', children: [{ text: "Avec ce succès, la LOS se maintient à la première place du classement du Split 2, aux côtés de Vivo Keyd Stars et de la LOUD, dans une phase régulière particulièrement disputée entre les trois franchises brésiliennes." }] },
      { type: 'blockquote', children: [{ text: "Deuxième balayage de la saison pour la LOS, qui confirme son statut de favori du CBLOL Split 2 2026." }] },
    ],
  },
  {
    title: "CBLOL Split 2 2026: LOS stays unbeaten after sweeping RED Canids",
    slug: 'cblol-split2-2026-los-red-canids-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/jayce/skins/base/images/jayce_splash_centered_0.jpg',
    excerpt: "LOS swept RED Canids 2-0 on August 2 in CBLOL 2026 Split 2, keeping their unbeaten run alive and holding the top of the standings alongside Vivo Keyd Stars and LOUD.",
    sourceUrl: 'https://lolesports.com/pt-BR/leagues/cblol-brazil',
    tags: [{ tag: 'CBLOL' }, { tag: 'LoL' }, { tag: 'Esports' }, { tag: 'LOS' }],
    content: [
      { type: 'p', children: [{ text: "LOS picked up another clean win in CBLOL 2026 Split 2, sweeping RED Canids 2-0 on August 2. A one-sided series that keeps the franchise unbeaten and on top of the standings." }] },
      { type: 'h2', children: [{ text: "Zest dominant on Jayce in game one" }] },
      { type: 'p', children: [{ text: "In the first game, top laner Zest swung the match with a 3/3/11 Jayce, taking over the lane against zynts before closing out the game at 38 minutes with an 18-11 kill lead." }] },
      { type: 'h2', children: [{ text: "Duduhh decisive from the flanks in game two" }] },
      { type: 'p', children: [{ text: "RED Canids actually started game two well, holding a solid early-game position. But LOS proved superior in teamfights, powered by a flawless Akali performance from Duduhh, who was a constant threat flanking from the sides." }] },
      { type: 'h2', children: [{ text: "LOS still leads Split 2" }] },
      { type: 'p', children: [{ text: "With this win, LOS remains in first place in the Split 2 standings, alongside Vivo Keyd Stars and LOUD, in a tightly contested regular season among the three Brazilian franchises." }] },
      { type: 'blockquote', children: [{ text: "A second sweep of the season for LOS, further cementing their status as CBLOL Split 2 2026 favorites." }] },
    ],
  },
  {
    title: "CBLOL Split 2 2026: LOS sigue invicta tras barrer a RED Canids",
    slug: 'cblol-split2-2026-los-red-canids-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/jayce/skins/base/images/jayce_splash_centered_0.jpg',
    excerpt: "LOS barrió 2-0 a RED Canids el 2 de agosto en el CBLOL Split 2 2026, manteniendo su invicto y el liderato de la tabla junto a Vivo Keyd Stars y LOUD.",
    sourceUrl: 'https://lolesports.com/pt-BR/leagues/cblol-brazil',
    tags: [{ tag: 'CBLOL' }, { tag: 'LoL' }, { tag: 'Esports' }, { tag: 'LOS' }],
    content: [
      { type: 'p', children: [{ text: "LOS sumó otra victoria contundente en el CBLOL Split 2 2026 al barrer 2-0 a RED Canids el 2 de agosto. Una serie unilateral que mantiene a la franquicia invicta y en lo más alto de la tabla." }] },
      { type: 'h2', children: [{ text: "Zest dominante con Jayce en la primera partida" }] },
      { type: 'p', children: [{ text: "En la primera partida, el top laner Zest inclinó la balanza con un Jayce de 3/3/11, tomando ventaja sobre zynts antes de cerrar el juego en el minuto 38 con una diferencia de 18 a 11 asesinatos." }] },
      { type: 'h2', children: [{ text: "Duduhh decisivo desde los flancos en la segunda partida" }] },
      { type: 'p', children: [{ text: "RED Canids arrancó bien la segunda partida, con una buena posición en el early game. Pero LOS fue superior en las peleas de equipo, impulsada por una actuación impecable de Duduhh con Akali, una amenaza constante flanqueando por los costados." }] },
      { type: 'h2', children: [{ text: "LOS sigue al frente del Split 2" }] },
      { type: 'p', children: [{ text: "Con este triunfo, LOS se mantiene en el primer lugar de la tabla del Split 2, junto a Vivo Keyd Stars y LOUD, en una fase regular muy reñida entre las tres franquicias brasileñas." }] },
      { type: 'blockquote', children: [{ text: "Segundo barrido de la temporada para LOS, que refuerza su condición de favorita en el CBLOL Split 2 2026." }] },
    ],
  },
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const a of articles) {
    const ex = await payload.find({ collection: 'news', where: { slug: { equals: a.slug } } })
    if (ex.docs.length > 0) {
      console.log(`→ skip ${a.slug}`)
      continue
    }
    await payload.create({ collection: 'news', data: a as any })
    console.log(`✅ ${a.locale.toUpperCase()} — ${a.title}`)
  }
}
