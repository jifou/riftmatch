import type { MigrationModule } from './runner'

export const id = '120-riot-patch2613-msi-meta-champions'
export const description = 'RIOT — Patch 26.13 MSI : buffs LeBlanc/Draven/Aphelios, nerfs Senna/K\'Sante/Sion, le meta pour le MSI 2026'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-19T08:00:00.000Z'
const COVER = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg'
const SOURCE = 'https://www.leagueoflegends.com/en-us/news/game-updates/'

const articles = [
  {
    title: "Patch 26.13 : LeBlanc, Draven, Aphelios boostés — le méta du MSI 2026 prend forme",
    slug: 'patch-2613-msi-meta-champions-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Le patch 26.13 débarque le 24 juin, soit 4 jours avant le MSI 2026 à Daejeon. Riot muscle LeBlanc, Draven et Aphelios tout en freinant Senna, K'Sante et Sion — un rééquilibrage taillé pour le haut niveau.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Patch 26.13' }, { tag: 'MSI 2026' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Le patch 26.13 sera en ligne le 24 juin 2026, soit quatre jours seulement avant le coup d'envoi du Mid-Season Invitational 2026 à Daejeon, Corée du Sud. C'est donc sur cette version que les meilleures équipes mondiales s'affronteront à partir du 28 juin. Riot a calibré ses changements en conséquence : le lead gameplay designer Matt « Phroxzon » Leung-Harrison a confirmé que l'objectif est de « rendre certains picks de niche un peu plus viables, notamment en fin de série au MSI ».",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Les grands gagnants : LeBlanc, Draven, Aphelios et Kai'Sa" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "LeBlanc reçoit des buffs sur son Q et son W pour consolider sa présence en mid lane, un rôle qu'elle occupait de façon irrégulière depuis le patch 26.10. Draven voit son passif et son Q renforcés, ce qui pourrait le propulser en premier choix AD carry dans les compositions agressives. Aphelios bénéficie d'améliorations sur ses statistiques de base, lui permettant de mieux tenir la lane d'entrée de jeu. Kai'Sa reçoit un buff sur son Q, renforçant sa polyvalence entre AD et AP. Au total, plus de dix champions sont dopés dans ce patch, un volume inhabituel qui illustre la volonté de Riot d'élargir le pool de picks viable en compétitif.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Les nerfs ciblés : Senna, K'Sante et Sion recadrés" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Senna perd en efficacité sur son Q et son passif, une décision qui vise à limiter sa dominance dans les compositions de soutien hyperscaling. K'Sante voit son W et son R affaiblis — il restait l'un des tanks les plus pick-and-ban du circuit mondial. Sion subit des ajustements sur son passif et ses statistiques de base, réduisant sa résistance en lane. Bard reçoit également un nerf sur son Q. Du côté des objets, Doran's Helm est nerfé (régénération de vie réduite), ce qui devrait légèrement pénaliser les top laners qui en dépendaient pour tenir les matchups difficiles.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Locke arrivera mais ne jouera pas au MSI" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le nouveau champion Locke, l'Exorciste des Cendres, fait également son entrée dans le patch 26.13 — mais Riot a confirmé qu'il ne sera pas activé en compétitif pour le MSI 2026. Une règle standard pour tout nouveau champion : il faut au minimum deux semaines de live avant l'autorisation en tournoi. Zaahen, Cassiopeia et Kindred reçoivent aussi des ajustements, dont les détails seront confirmés dans les notes officielles du patch le 24 juin.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Le patch 26.13 s'annonce comme l'un des plus stratégiques de l'année. Rendez-vous le 28 juin à Daejeon pour voir quel meta émerge réellement au MSI 2026.",
          },
        ],
      },
    ],
  },
  {
    title: "Patch 26.13: LeBlanc, Draven, Aphelios Buffed — MSI 2026 Meta Takes Shape",
    slug: 'patch-2613-msi-meta-champions-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Patch 26.13 drops June 24, just four days before MSI 2026 kicks off in Daejeon. Riot buffs LeBlanc, Draven and Aphelios while nerfing Senna, K'Sante and Sion — a deliberate reshaping of the competitive meta.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Patch 26.13' }, { tag: 'MSI 2026' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Patch 26.13 goes live on June 24, 2026 — just four days before the 2026 Mid-Season Invitational opens in Daejeon, South Korea. This means the world's best teams will compete on this very version starting June 28. Riot has been intentional about its changes: lead gameplay designer Matt 'Phroxzon' Leung-Harrison confirmed the goal is to make \"some of the fringe picks a little more viable, especially heading into the later series at MSI.\"",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Winners: LeBlanc, Draven, Aphelios, and Kai'Sa" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "LeBlanc receives buffs to her Q and W to solidify her mid-lane presence, which had been inconsistent since patch 26.10. Draven gets improvements to his passive and Q, potentially making him a first-pick AD carry in aggressive compositions. Aphelios benefits from base stat improvements, making him easier to lane with early. Kai'Sa gets a Q buff, reinforcing her flexibility between AD and AP builds. In total, more than ten champions are receiving buffs this patch — an unusually high volume that signals Riot's intent to broaden the competitive pick pool heading into MSI.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Nerfs: Senna, K'Sante, and Sion Reined In" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Senna loses power on her Q and passive, targeting her dominance in hyperscaling support compositions. K'Sante sees his W and R weakened — he was still one of the most pick-or-banned tanks on the international circuit. Sion receives adjustments to his passive and base stats, reducing his early-game durability. Bard also gets a Q nerf. On the item side, Doran's Helm receives a health regeneration reduction, lightly punishing top laners who relied on it to survive difficult matchups.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Locke Joins the Roster — But Not at MSI" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "New champion Locke, the Ashen Exorcist, also makes his live debut in patch 26.13 — but Riot confirmed he won't be enabled for MSI 2026 competition. Standard practice dictates a minimum of two weeks on live servers before a champion can be approved for pro play. Zaahen, Cassiopeia, and Kindred are also receiving adjustments, with full details to be confirmed in the official patch notes on June 24.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Patch 26.13 is shaping up to be one of the most strategically consequential updates of the year. All eyes turn to Daejeon on June 28 to see which meta actually emerges at MSI 2026.",
          },
        ],
      },
    ],
  },
  {
    title: "Parche 26.13: LeBlanc, Draven y Aphelios con buffs — el meta del MSI 2026 se perfila",
    slug: 'patch-2613-msi-meta-champions-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "El parche 26.13 llega el 24 de junio, solo cuatro días antes del MSI 2026 en Daejeon. Riot potencia a LeBlanc, Draven y Aphelios mientras debilita a Senna, K'Sante y Sion para moldear el meta competitivo.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Parche 26.13' }, { tag: 'MSI 2026' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "El parche 26.13 se lanzará el 24 de junio de 2026, apenas cuatro días antes de que comience el Mid-Season Invitational 2026 en Daejeon, Corea del Sur. Esto significa que los mejores equipos del mundo competirán en esta versión a partir del 28 de junio. Riot ha sido deliberado en sus cambios: el diseñador principal Matt 'Phroxzon' Leung-Harrison confirmó que el objetivo es hacer que «algunos picks de nicho sean un poco más viables, especialmente en las últimas series del MSI».",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Ganadores: LeBlanc, Draven, Aphelios y Kai'Sa" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "LeBlanc recibe buffs en su Q y su W para consolidar su presencia en el carril central, que había sido irregular desde el parche 26.10. Draven obtiene mejoras en su pasiva y su Q, lo que podría convertirlo en primera opción como tirador en composiciones agresivas. Aphelios se beneficia de mejoras en estadísticas base, facilitando su fase de línea. Kai'Sa recibe un buff en su Q que refuerza su versatilidad entre builds AD y AP. En total, más de diez campeones reciben buffs en este parche, un volumen inusualmente alto que refleja la intención de Riot de ampliar el pool de picks viables en competitivo.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Nerfs: Senna, K'Sante y Sion contenidos" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Senna pierde poder en su Q y su pasiva, apuntando a su dominio en composiciones de soporte hyperscaling. K'Sante ve debilitados su W y su R — seguía siendo uno de los tanques más pick-or-ban del circuito internacional. Sion recibe ajustes en su pasiva y sus estadísticas base, reduciendo su durabilidad en la fase de línea. Bard también recibe un nerf en su Q. En cuanto a objetos, Doran's Helm sufre una reducción de su regeneración de vida, penalizando ligeramente a los top laners que dependían de él en matchups difíciles.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Locke llega al juego — pero no al MSI" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El nuevo campeón Locke, el Exorcista Ceniciento, también debuta en el parche 26.13, pero Riot confirmó que no estará habilitado para el MSI 2026. La normativa estándar exige un mínimo de dos semanas en servidores en vivo antes de que un campeón pueda ser aprobado para el juego profesional. Zaahen, Cassiopeia y Kindred también recibirán ajustes, cuyos detalles completos se confirmarán en las notas oficiales del parche el 24 de junio.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "El parche 26.13 promete ser uno de los más estratégicamente decisivos del año. El 28 de junio en Daejeon sabremos qué meta emerge realmente en el MSI 2026.",
          },
        ],
      },
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
