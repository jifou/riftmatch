import type { MigrationModule } from './runner'

export const id = '087-riot-locke-champion'
export const description = 'RIOT — Locke, nouvel assassin AP démacien, annoncé pour le patch 26.13 (24 juin 2026)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-03T08:00:00.000Z'

const articles = [
  {
    title: "Locke, le nouvel assassin de League of Legends : tout savoir avant sa sortie le 24 juin",
    slug: 'locke-nouveau-champion-lol-patch-26-13',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/FXeMbSN-wLY/maxresdefault.jpg',
    excerpt: "Riot Games officialise Locke, un assassin AP démacien qui utilise des clous comme armes. Sortie prévue le 24 juin 2026 avec le patch 26.13.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/dev/tldw-mayhem-ranked-5s-more-dev-update/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Nouveau Champion' }, { tag: 'Locke' }],
    content: [
      { type: 'p', children: [{ text: "Riot Games a officiellement révélé Locke lors du Dev Update du 27 mai 2026. Ce nouvel assassin AP rejoint la liste des champions de League of Legends avec le patch 26.13, dont la sortie est prévue le mercredi 24 juin 2026. Un seul nouveau champion est attendu cette année, et c'est lui." }] },
      { type: 'h2', children: [{ text: "Un assassin AP basé sur la préparation" }] },
      { type: 'p', children: [{ text: "Locke est décrit par Riot comme un assassin AP à haute pointe de dégâts, mais dont le potentiel est conditionné par une bonne exécution. Il s'inspire dans sa conception de champions comme Zed ou Akali : sans setup, le joueur meurt ; avec un setup optimal, les adversaires fondent. Son Q lui permet de lancer un énorme clou comme projectile, une mécanique centrale dans son jeu. Il peut également entrer dans une forme spectrale qui inflige des dégâts en zone autour de lui. Des artefacts scellés apparaissent sur la carte et interagissent avec son kit." }] },
      { type: 'h2', children: [{ text: "Lore : chasseur de démons à Démacia" }] },
      { type: 'p', children: [{ text: "Côté lore, Locke est originaire de Démacia. Il est décrit comme un chasseur de démons arborant des lunettes rouges, une tenue sombre et un style ténébreux. Son histoire serait liée à la pétricithe, le matériau anti-magie emblématique de Démacia, ce qui en ferait un personnage au cœur des tensions magiques de la région. Sa silhouette encapuchonnée avait été aperçue dans plusieurs teasers liés à la saga démacienne." }] },
      { type: 'h2', children: [{ text: "Skin High Noon dès le lancement" }] },
      { type: 'p', children: [{ text: "Locke bénéficiera d'un skin High Noon dès sa sortie le 24 juin, en même temps qu'Akshan qui reçoit lui aussi un skin High Noon dans le même patch 26.13. Pour les joueurs qui souhaitent l'adopter dès le départ, le skin sera disponible en boutique dès le premier jour." }] },
      { type: 'blockquote', children: [{ text: "Avec Locke, Riot apporte un assassin AP qui change les règles : préparez votre coup ou rentrez chez vous. Rendez-vous le 24 juin sur la Faille de l'Invocateur." }] },
    ],
  },
  {
    title: "Locke Revealed as League of Legends' Next Champion: AP Assassin Arriving in Patch 26.13",
    slug: 'locke-new-lol-champion-patch-26-13-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/FXeMbSN-wLY/maxresdefault.jpg',
    excerpt: "Riot Games officially reveals Locke, a Demacian AP assassin who slings nails. He releases on June 24, 2026 with Patch 26.13.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/dev/tldw-mayhem-ranked-5s-more-dev-update/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'New Champion' }, { tag: 'Locke' }],
    content: [
      { type: 'p', children: [{ text: "Riot Games officially confirmed Locke as League of Legends' next champion during the Dev Update published on May 27, 2026. Described as a high-burst AP assassin, Locke is set to hit the Summoner's Rift on June 24, 2026 with Patch 26.13 — and he's the only new champion planned for this year." }] },
      { type: 'h2', children: [{ text: "A Setup-Dependent AP Assassin" }] },
      { type: 'p', children: [{ text: "Locke rewards players who do the legwork before going in. Get your setup right and you're looking at a massive burst window; skip the setup and you're probably dying for nothing. That places him in the same conversation as Zed and Akali when it comes to mechanical depth. His Q involves hurling a giant nail as a projectile — a core element of his kit. He can also enter a ghostly form that deals AoE damage around him. Sealed artifacts that spawn on the map interact with his abilities, adding a unique map-awareness layer to his gameplay." }] },
      { type: 'h2', children: [{ text: "Lore: Demacian Demon Hunter" }] },
      { type: 'p', children: [{ text: "On the lore side, Locke hails from Demacia. He is depicted as a hooded demon hunter with red glasses and a dark, brooding aesthetic. His story is tied to petricite — the anti-magic stone central to Demacian identity — suggesting he operates in the tension between magic and the law. His silhouette had appeared in various Demacian story teasers prior to his official reveal." }] },
      { type: 'h2', children: [{ text: "High Noon Skin at Launch" }] },
      { type: 'p', children: [{ text: "Locke will launch with a High Noon skin on day one, alongside Akshan's own High Noon treatment in Patch 26.13. Players who want to embrace Locke's full aesthetic from the start won't have to wait — both skins drop together with the patch on June 24." }] },
      { type: 'blockquote', children: [{ text: "Slinging nails and taking names — Locke is the most anticipated League champion of 2026. June 24 can't come soon enough." }] },
    ],
  },
  {
    title: "Riot confirma a Locke como nuevo campeón de League of Legends: el asesino AP llega el 24 de junio",
    slug: 'locke-nuevo-campeon-lol-parche-26-13-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/FXeMbSN-wLY/maxresdefault.jpg',
    excerpt: "Riot Games confirma oficialmente a Locke, un asesino AP de Demacia que usa clavos como armas. Llega el 24 de junio de 2026 con el parche 26.13.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/dev/tldw-mayhem-ranked-5s-more-dev-update/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Nuevo Campeón' }, { tag: 'Locke' }],
    content: [
      { type: 'p', children: [{ text: "Riot Games confirmó oficialmente a Locke como el próximo campeón de League of Legends durante la Dev Update publicada el 27 de mayo de 2026. Se trata de un asesino AP de alto impacto, y llegará a la Grieta del Invocador el miércoles 24 de junio de 2026 con el parche 26.13. Es el único campeón nuevo previsto para este año." }] },
      { type: 'h2', children: [{ text: "Un asesino AP que requiere preparación" }] },
      { type: 'p', children: [{ text: "Locke es un campeón que premia la preparación antes del combate. Si ejecutas bien el setup, obtienes una ventana de daño masivo; si lo omites, lo más probable es que mueras sin lograr nada. Riot lo ha comparado en profundidad mecánica con campeones como Zed o Akali. Su habilidad Q consiste en lanzar un enorme clavo como proyectil, eje central de su jugabilidad. También puede adoptar una forma espectral que inflige daño en área a su alrededor. Artefactos sellados que aparecen en el mapa interactúan con su kit, añadiendo una capa estratégica única." }] },
      { type: 'h2', children: [{ text: "Lore: cazador de demonios de Demacia" }] },
      { type: 'p', children: [{ text: "En cuanto al lore, Locke es originario de Demacia. Se le describe como un cazador de demonios encapuchado con gafas rojas y una estética oscura y misteriosa. Su historia está ligada a la petricita, la piedra anti-magia característica de Demacia, lo que lo sitúa en el corazón del conflicto entre la magia y la ley de la región. Su silueta había aparecido en varios teasers de la saga demaciana antes de su revelación oficial." }] },
      { type: 'h2', children: [{ text: "Skin High Noon desde el primer día" }] },
      { type: 'p', children: [{ text: "Locke llegará acompañado de un skin High Noon desde su lanzamiento el 24 de junio, en el mismo parche 26.13 en que Akshan recibe su propio skin High Noon. Los jugadores que quieran adoptar su look completo desde el principio podrán hacerlo sin esperar: ambas skins estarán disponibles en la tienda el día uno del parche." }] },
      { type: 'blockquote', children: [{ text: "Clavos voladores y enemigos liquidados — Locke es el campeón más esperado de 2026. El 24 de junio, la Grieta cambia para siempre." }] },
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
