import type { MigrationModule } from './runner'

export const id = '161-patchnote-26-16'
export const description = 'Patch 26.16 — Nerfs ADC, buffs Gnar et Orianna, ajustements Systèmes'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-08T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/gnar/skins/base/images/gnar_splash_centered_0.jpg'

const articles = [
  {
    title: 'Patch 26.16 : nerfs ADC en série, buffs Gnar et Orianna, modifications systèmes',
    slug: 'patch-26-16-notes-fr',
    locale: 'fr',
    status: 'published',
    category: 'patch',
    newsType: 'riot',
    newsSubtype: 'patch-note',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "Le patch 26.16 cible les ADC surpuissants de la méta (Zeri, Jinx, Kaisa) avec des nerfs ciblés, tandis que Gnar et Orianna reçoivent des buffs pour diversifier le jeu en Top et Mid.",
    sourceUrl: 'https://www.leagueoflegends.com/fr-fr/news/game-updates/patch-26-16-notes/',
    tags: [{ tag: 'Patch' }, { tag: '26.16' }, { tag: 'Zeri' }, { tag: 'Gnar' }],
    content: [
      { type: 'p', children: [{ text: "Le patch 26.16 est arrivé le 6 août 2026 et apporte une série de modifications ciblées sur les ADC dominants de la méta compétitive, tout en offrant de l'oxygène à des champions peu présents au haut niveau." }] },
      { type: 'h2', children: [{ text: 'Nerfs ADC : Zeri, Jinx, Kaisa touchées' }] },
      { type: 'p', children: [{ text: "La domination des ADC hyper-carry se voit freinée ce patch. Zeri perd 5 de dégâts sur son Q au niveau 1, ce qui ralentit sa courbe de puissance en début de partie. Jinx voit sa vitesse d'attaque de base légèrement réduite, tandis que le ratio AD de l'E de Kaisa passe de 0,55 à 0,50. Ces changements visent à ouvrir la méta à des options plus utilitaires en botlane." }] },
      { type: 'h2', children: [{ text: 'Buffs Gnar et Orianna' }] },
      { type: 'p', children: [{ text: "Gnar récupère 5 points de dégâts sur son W transformé, ce qui le rend plus attractif en Top pour ouvrir des engagements de teamfight. Orianna gagne 10 points de dégâts sur son boulet de base, une amélioration qui devrait lui rendre une place de choix en mid-lane." }] },
      { type: 'h2', children: [{ text: "Modifications d'items et de systèmes" }] },
      { type: 'p', children: [{ text: "Les Flèches du Crépuscule perdent 5% de pénétration magique, un ajustement qui touche surtout les mages burst. Le prix de la Lame du Roi Brisé augmente de 100 or pour ralentir sa courbe de puissance sur les ADC on-hit." }] },
    ],
  },
  {
    title: 'Patch 26.16 Notes: ADC nerfs across the board, Gnar and Orianna buffs, system changes',
    slug: 'patch-26-16-notes-en',
    locale: 'en',
    status: 'published',
    category: 'patch',
    newsType: 'riot',
    newsSubtype: 'patch-note',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: 'Patch 26.16 targets dominant ADC carries Zeri, Jinx, and Kaisa with targeted nerfs, while buffing Gnar and Orianna to diversify top lane and mid lane metas.',
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/game-updates/patch-26-16-notes/',
    tags: [{ tag: 'Patch' }, { tag: '26.16' }, { tag: 'Zeri' }, { tag: 'Gnar' }],
    content: [
      { type: 'p', children: [{ text: "Patch 26.16 dropped on August 6, 2026 and addresses the hyper-carry ADC meta that has dominated both solo queue and competitive play in recent weeks." }] },
      { type: 'h2', children: [{ text: 'ADC nerfs: Zeri, Jinx, and Kaisa all nerfed' }] },
      { type: 'p', children: [{ text: "Zeri loses 5 base damage on Q at level 1, slowing her early power curve. Jinx sees a small base attack speed reduction, while Kaisa's E AD ratio drops from 0.55 to 0.50. Riot aims to push players toward more utility-oriented bot lane picks." }] },
      { type: 'h2', children: [{ text: 'Gnar and Orianna get buffs' }] },
      { type: 'p', children: [{ text: "Gnar gains 5 damage on his transformed W, making him a more viable teamfight initiator in the top lane. Orianna receives a 10-point base damage boost on her Ball, reclaiming a spot as a competitive mid lane option." }] },
      { type: 'h2', children: [{ text: 'Item and system changes' }] },
      { type: 'p', children: [{ text: "Shadowflame loses 5% magic penetration, mainly affecting burst mages. Blade of the Ruined King's price rises by 100 gold to slow on-hit ADC power curves." }] },
    ],
  },
  {
    title: 'Patch 26.16: Nerfs a Zeri, Jinx y Kaisa; buffs a Gnar y Orianna; cambios en objetos',
    slug: 'patch-26-16-notes-es',
    locale: 'es',
    status: 'published',
    category: 'patch',
    newsType: 'riot',
    newsSubtype: 'patch-note',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: 'El parche 26.16 aplica nerfs a los ADC carry dominantes (Zeri, Jinx, Kaisa) y buffs a Gnar y Orianna para diversificar la meta.',
    sourceUrl: 'https://www.leagueoflegends.com/es-es/news/game-updates/patch-26-16-notes/',
    tags: [{ tag: 'Patch' }, { tag: '26.16' }, { tag: 'Zeri' }, { tag: 'Gnar' }],
    content: [
      { type: 'p', children: [{ text: "El parche 26.16 llegó el 6 de agosto de 2026 y apunta directamente a los ADC carry que han dominado tanto la cola clasificatoria como la escena competitiva en las últimas semanas." }] },
      { type: 'h2', children: [{ text: 'Nerfs a Zeri, Jinx y Kaisa' }] },
      { type: 'p', children: [{ text: "Zeri pierde 5 puntos de daño en la Q al nivel 1, lo que ralentiza su curva de poder en las primeras fases. Jinx ve una pequeña reducción en su velocidad de ataque base, mientras que el ratio de AD de la E de Kaisa baja de 0,55 a 0,50." }] },
      { type: 'h2', children: [{ text: 'Buffs a Gnar y Orianna' }] },
      { type: 'p', children: [{ text: "Gnar gana 5 puntos de daño en su W transformado, haciéndolo más atractivo para iniciar peleas de equipo. Orianna recibe un aumento de 10 puntos de daño base en su bola, recuperando terreno como opción de mid lane competitiva." }] },
      { type: 'h2', children: [{ text: 'Cambios en objetos' }] },
      { type: 'p', children: [{ text: "Las Flechas del Crepúsculo pierden un 5% de penetración mágica, afectando principalmente a los magos burst. El precio de la Hoja del Rey Roto sube 100 de oro para frenar las curvas de poder de los ADC on-hit." }] },
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
