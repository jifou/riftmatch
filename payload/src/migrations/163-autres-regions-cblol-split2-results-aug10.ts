import type { MigrationModule } from './runner'

export const id = '163-autres-regions-cblol-split2-results-aug10'
export const description = 'Autres régions — CBLOL Split 2 2026 : résultats semaine 3, paiN Gaming surprend LOUD'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-10T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/orianna/skins/base/images/orianna_splash_centered_0.jpg'

const articles = [
  {
    title: 'CBLOL Split 2 2026 : paiN Gaming renverse LOUD dans un match référence de la semaine 3',
    slug: 'cblol-split2-2026-pain-loud-week3-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "paiN Gaming a créé la surprise de la semaine 3 du CBLOL Split 2 en battant LOUD 2-1, avec un draft agressif centré sur Orianna et Gragas qui a pris de court les favoris.",
    sourceUrl: 'https://lolesports.com/leagues/cblol',
    tags: [{ tag: 'CBLOL' }, { tag: 'paiN Gaming' }, { tag: 'LOUD' }, { tag: 'Brésil' }],
    content: [
      { type: 'p', children: [{ text: "La semaine 3 du CBLOL Split 2 2026 a réservé une belle surprise : paiN Gaming, considérée comme l'outsider du match, a renversé LOUD 2-1 dans une rencontre de haute intensité qui remet en question la hiérarchie établie dans la ligue brésilienne." }] },
      { type: 'h2', children: [{ text: 'Un draft courageux payant' }] },
      { type: 'p', children: [{ text: "La clé du succès de paiN Gaming réside dans ses choix de draft. L'équipe a opté pour une composition double AP avec Orianna en mid et Gragas en jungle, une combinaison peu orthodoxe qui a totalement déstabilisé LOUD. Le double combo Shockwave + Explosive Cask a enchaîné les teamfights victorieux, ne laissant aucune prise à LOUD pour revenir dans les games 1 et 3." }] },
      { type: 'h2', children: [{ text: 'Classement après la semaine 3' }] },
      { type: 'p', children: [{ text: "Après cette victoire, paiN Gaming intègre le top 4 du CBLOL avec 4 victoires pour 2 défaites. LOUD reste en tête à égalité avec la FURIA (5-1), mais ce revers montre que la formation n'est pas aussi invulnérable qu'espéré par ses supporters." }] },
    ],
  },
  {
    title: "CBLOL Split 2 2026: paiN Gaming upsets LOUD 2-1 in Week 3's biggest match",
    slug: 'cblol-split2-2026-pain-loud-week3-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "paiN Gaming pulled off the upset of the week by beating LOUD 2-1, using an aggressive double AP draft centered on Orianna and Gragas to catch the favorites off guard.",
    sourceUrl: 'https://lolesports.com/leagues/cblol',
    tags: [{ tag: 'CBLOL' }, { tag: 'paiN Gaming' }, { tag: 'LOUD' }, { tag: 'Brazil' }],
    content: [
      { type: 'p', children: [{ text: "Week 3 of CBLOL Split 2 2026 had the upset of the week: paiN Gaming, entering as the underdogs, knocked LOUD off their perch with a 2-1 victory that sends shockwaves through the Brazilian league standings." }] },
      { type: 'h2', children: [{ text: 'A brave draft pays dividends' }] },
      { type: 'p', children: [{ text: "paiN's game plan was unconventional: a double AP composition with Orianna in mid and Gragas in the jungle. The Shockwave plus Explosive Cask combo delivered one winning teamfight after another, and LOUD never found a way to neutralize the combo across Games 1 and 3." }] },
      { type: 'h2', children: [{ text: 'Standings after Week 3' }] },
      { type: 'p', children: [{ text: "paiN Gaming move into the top 4 at 4-2. LOUD remain tied with FURIA at 5-1 at the summit, but this loss proves they're not invincible." }] },
    ],
  },
  {
    title: 'CBLOL Split 2 2026: paiN Gaming elimina a LOUD 2-1 en la gran sorpresa de la Semana 3',
    slug: 'cblol-split2-2026-pain-loud-week3-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "paiN Gaming dio la sorpresa de la semana al vencer a LOUD 2-1 con un draft doble AP basado en Orianna y Gragas que tomó por sorpresa a los favoritos.",
    sourceUrl: 'https://lolesports.com/leagues/cblol',
    tags: [{ tag: 'CBLOL' }, { tag: 'paiN Gaming' }, { tag: 'LOUD' }, { tag: 'Brasil' }],
    content: [
      { type: 'p', children: [{ text: "La Semana 3 del CBLOL Split 2 2026 trajo la sorpresa de la jornada: paiN Gaming, considerada como el equipo menos favorito, desbancó a LOUD 2-1 en un partido de alta intensidad que revuelve la jerarquía del torneo brasileño." }] },
      { type: 'h2', children: [{ text: 'Un draft arriesgado que funciona' }] },
      { type: 'p', children: [{ text: "La clave de paiN fue su composición doble AP con Orianna en mid y Gragas en la jungla. La combinación de Shockwave + Barril Explosivo encadenó peleas de equipo victoriosas en los juegos 1 y 3, sin que LOUD encontrara respuesta." }] },
      { type: 'h2', children: [{ text: 'Clasificación tras la Semana 3' }] },
      { type: 'p', children: [{ text: "paiN Gaming asciende al top 4 con un balance de 4-2. LOUD sigue empatada con FURIA en la cima con 5-1, pero esta derrota demuestra que no son invencibles." }] },
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
