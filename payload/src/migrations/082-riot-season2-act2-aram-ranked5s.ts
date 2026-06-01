import type { MigrationModule } from './runner'

export const id = '082-riot-season2-act2-aram-ranked5s'
export const description = 'RIOT — Acte 2 saison 2026 : refonte ARAM Mayhem, retour Classé 5c5, ARAM Wardrobe'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-01T08:00:00.000Z'

const articles = [
  {
    title: "LoL Acte 2 2026 : ARAM Mayhem repensé, Classé 5c5 de retour et ARAM Wardrobe en test",
    slug: 'riot-season2-act2-aram-ranked5s-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/qVGCm_aY09s/maxresdefault.jpg',
    excerpt: "Riot Games a dévoilé le 28 mai 2026 les grandes lignes de l'Acte 2 de la saison 2026 : une refonte complète d'ARAM Mayhem avec des Augments de Capacité, le retour expérimental du Classé 5c5 et un nouveau système de skins ARAM en test.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/dev/tldw-mayhem-ranked-5s-more-dev-update/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'ARAM' }, { tag: 'Classé 5c5' }, { tag: 'Saison 2' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games a publié le 28 mai 2026 son dev update TL;DW consacré aux nouveautés de l'Acte 2 de la saison 2026. Au programme : une refonte majeure du mode ARAM Mayhem, le retour expérimental du Classé 5c5 et le lancement d'un nouveau système de skins dédié à l'ARAM, actuellement testé dans deux régions. L'Acte 2 sera disponible sur les serveurs live dès le 11 juin 2026.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "ARAM Mayhem : adieu les Traits, bonjour les Augments de Capacité" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le patch 26.12 apporte une transformation profonde à ARAM Mayhem. Le système de Traits — qui combinait plusieurs Augments pour déclencher des effets bonus — est supprimé. Les Traits les plus populaires sont convertis en Augments classiques afin de préserver les combos appréciés de la communauté. En parallèle, Riot introduit un nouveau type d'Augment : les Augments de Capacité. Ces derniers modifient directement les sorts des champions pour créer des situations de jeu inédites. L'exemple donné par Riot est parlant : un Augment permet à Blitzcrank de harponnner plusieurs ennemis simultanément d'un seul Poing Rocket.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Classé 5c5 : le retour d'une légende, en mode expérimental" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Riot relance le Classé 5c5, une file de classement réservée aux équipes complètes de cinq joueurs. Contrairement au Classé standard, aucune restriction de rang entre coéquipiers ne s'applique : cinq amis peuvent jouer ensemble quelle que soit leur division respective. Le mode reste expérimental. Il ne sera accessible que le week-end, à des horaires fixes, du 26 juin au 6 septembre 2026. Riot a précisé que la décision de le pérenniser dépendra des retours des joueurs et des données collectées pendant cette fenêtre de test.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "ARAM Wardrobe : un abonnement skins pour l'ARAM" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Riot teste également un système baptisé ARAM Wardrobe au Brésil et en Océanie. Pour 1 350 RP, les joueurs obtiennent accès à la quasi-totalité des skins de rareté Épique et inférieure sortis avant 2026, mais exclusivement dans les modes ARAM et ARAM Mayhem. Les skins à durée limitée disponibles en boutique sont également inclus. Un déploiement mondial dépendra des résultats de ce test régional.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "L'Acte 2 de la saison 2026 débarque sur les serveurs live le 11 juin 2026, avec le nouveau champion Locke prévu pour le patch 26.13 le 24 juin.",
          },
        ],
      },
    ],
  },
  {
    title: "LoL Act 2 2026: ARAM Mayhem Reworked, Ranked 5s Return, and ARAM Wardrobe Test",
    slug: 'riot-season2-act2-aram-ranked5s-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/qVGCm_aY09s/maxresdefault.jpg',
    excerpt: "Riot Games revealed on May 28, 2026 the key features of Season 2 Act 2: a full ARAM Mayhem overhaul with Ability Augments, the experimental return of Ranked 5s, and a new ARAM skin system currently being tested.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/dev/tldw-mayhem-ranked-5s-more-dev-update/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'ARAM' }, { tag: 'Ranked 5s' }, { tag: 'Season 2' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games published its TL;DW dev update on May 28, 2026, outlining the major changes coming in Season 2 Act 2. The update covers a significant ARAM Mayhem overhaul, the experimental return of Ranked 5s, and a new ARAM skin system currently being tested in two regions. Act 2 goes live on June 11, 2026.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "ARAM Mayhem: Traits Out, Ability Augments In" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Patch 26.12 brings a major overhaul to ARAM Mayhem. The Trait system — which combined Augments to trigger bonus effects — is being removed. Popular Traits will be converted into standalone Augments to preserve the combos players enjoy. Riot is also introducing a brand-new type of Augment called Ability Augments, which directly modify champion abilities to create entirely new gameplay situations. The highlighted example: an Augment that allows Blitzcrank to pull multiple enemies at once with a single Rocket Grab.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Ranked 5s: Back as an Experimental Queue" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Riot is bringing back Ranked 5s, a dedicated ranked queue for full premade groups of five players with no rank restrictions between teammates. The mode will be experimental and only available on weekends at set times, running from June 26 to September 6, 2026. Riot has stated that its long-term future will depend on player feedback and data collected during this test window.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "ARAM Wardrobe: A Skin Pass for ARAM" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Riot is testing a new system called ARAM Wardrobe in Brazil and Oceania. For 1,350 RP, players gain access to nearly all Epic-tier and below skins released before 2026, exclusively usable in ARAM and ARAM Mayhem. Time-limited skins available in the shop are also included. A global rollout will depend on the results of this regional test.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Season 2 Act 2 launches on live servers on June 11, 2026, with new champion Locke scheduled for Patch 26.13 on June 24.",
          },
        ],
      },
    ],
  },
  {
    title: "LoL Acto 2 2026: ARAM Mayhem renovado, regreso del Clasificado 5c5 y prueba de ARAM Wardrobe",
    slug: 'riot-season2-act2-aram-ranked5s-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/qVGCm_aY09s/maxresdefault.jpg',
    excerpt: "Riot Games presentó el 28 de mayo de 2026 las novedades del Acto 2 de la temporada 2026: una renovación completa de ARAM Mayhem con Aumentos de Habilidad, el regreso experimental del Clasificado 5c5 y un nuevo sistema de skins para ARAM en pruebas.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/dev/tldw-mayhem-ranked-5s-more-dev-update/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'ARAM' }, { tag: 'Clasificado 5c5' }, { tag: 'Temporada 2' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games publicó el 28 de mayo de 2026 su dev update TL;DW con los detalles del Acto 2 de la temporada 2026. Las grandes novedades incluyen una renovación profunda de ARAM Mayhem, el regreso experimental del Clasificado 5c5 y el lanzamiento de un nuevo sistema de skins exclusivo para modos ARAM, actualmente en pruebas en dos regiones. El Acto 2 llegará a los servidores en directo el 11 de junio de 2026.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "ARAM Mayhem: adiós a los Rasgos, bienvenidos los Aumentos de Habilidad" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El parche 26.12 transforma ARAM Mayhem en profundidad. El sistema de Rasgos — que combinaba Aumentos para activar efectos adicionales — desaparece. Los Rasgos más populares se convierten en Aumentos independientes para preservar las combinaciones favoritas de la comunidad. Riot también introduce un nuevo tipo de Aumento llamado Aumento de Habilidad, que modifica directamente las habilidades de los campeones. El ejemplo destacado: un Aumento que permite a Blitzcrank agarrar a varios enemigos a la vez con un solo Puño Cohete.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Clasificado 5c5: regresa en modo experimental" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Riot relanza el Clasificado 5c5, una cola de clasificación exclusiva para equipos completos de cinco jugadores sin restricciones de rango entre compañeros. El modo será experimental y solo estará disponible los fines de semana en horarios definidos, del 26 de junio al 6 de septiembre de 2026. Riot ha señalado que su futuro a largo plazo dependerá de los datos y comentarios recogidos durante esta ventana de prueba.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "ARAM Wardrobe: un pase de skins para el ARAM" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Riot está probando un nuevo sistema llamado ARAM Wardrobe en Brasil y Oceanía. Por 1350 RP, los jugadores obtienen acceso a casi todos los skins de rareza Épica o inferior lanzados antes de 2026, únicamente usables en ARAM y ARAM Mayhem. Los skins de tiempo limitado disponibles en la tienda también están incluidos. Una distribución global dependerá de los resultados de esta prueba regional.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "El Acto 2 de la temporada 2026 llega a los servidores en directo el 11 de junio, con el nuevo campeón Locke previsto para el parche 26.13 el 24 de junio.",
          },
        ],
      },
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
