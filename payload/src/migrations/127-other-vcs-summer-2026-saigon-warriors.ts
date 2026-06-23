import type { MigrationModule } from './runner'

export const id = '127-other-vcs-summer-2026-saigon-warriors'
export const description = 'Autres Régions — VCS 2026 Mùa Hè : Saigon Warriors champion 3-0 face à Saigon Dino'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-23T08:00:00.000Z'

const articles = [
  // ──────────────────────────────────────────────
  // VCS 2026 Summer — FR
  // ──────────────────────────────────────────────
  {
    title: "VCS 2026 Mùa Hè : les Saigon Warriors s'imposent 3-0 en finale et sont sacrés champions d'été",
    slug: 'vcs-2026-summer-saigon-warriors-champion-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Le 20 juin 2026, les Saigon Warriors ont remporté le VCS 2026 Summer en dominant Saigon Dino 3-0 en grande finale. Un sacre qui confirme la montée en puissance du roster emmenée par AisyL et Aomine.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/VCS/2026/Summer',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'VCS' }, { tag: 'Vietnam' }, { tag: 'Saigon Warriors' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Le 20 juin 2026, le Vietnam Championship Series a désigné son champion d'été : les Saigon Warriors ont écrasé Saigon Dino 3-0 en grande finale du VCS 2026 Summer, concluant un split dominant et décrochant le titre de champion pour la saison estivale. La finale s'est disputée en ligne, au terme d'un playoffs en double-élimination (best-of-five) qui avait débuté le 11 juin." }],
      },
      {
        type: 'h2',
        children: [{ text: "Un roster restructuré qui tient ses promesses" }],
      },
      {
        type: 'p',
        children: [{ text: "Les Saigon Warriors avaient profité de la trêve hivernale pour remodeler leur effectif. L'arrivée en mai 2026 de l'ADC Aomine, du coach Hankay et de l'analyste DN a manifestement porté ses fruits : le roster composé de Nern (top), j1n5 (jungle), AisyL (mid), Aomine (ADC) et Kairi (support) a affiché une cohésion sans faille tout au long de la saison. Sous la houlette du head coach SwizZ, l'équipe a terminé en tête de la phase régulière avant de dominer les playoffs sans concéder le moindre match dans le bracket supérieur." }],
      },
      {
        type: 'h2',
        children: [{ text: "La finale : une démonstration sans appel" }],
      },
      {
        type: 'p',
        children: [{ text: "Face à Saigon Dino, surprenant finaliste sorti du lower bracket, les Warriors n'ont laissé aucune chance à l'adversaire. Les trois parties ont été maîtrisées de bout en bout, portées par la régularité d'AisyL en mid lane et l'impact constant d'Aomine en late game. Saigon Dino, malgré son parcours courageux en remontée, n'a pu trouver la brèche nécessaire pour prolonger la série. Le score final de 3-0 traduit la supériorité qui a caractérisé le split entier des Warriors." }],
      },
      {
        type: 'h2',
        children: [{ text: "Un VCS en pleine mutation : place aux VCS Finals" }],
      },
      {
        type: 'p',
        children: [{ text: "Depuis 2025, le VCS n'est plus une ligue de qualification directe pour les Worlds : les slots vers le championnat du monde passent désormais par le LCP (League of Legends Championship Pacific), la ligue unifiée Asie-Pacifique. Le VCS a toutefois conservé son identité de compétition nationale vietnamienne de premier plan. Le prochain grand rendez-vous sera les VCS Finals (du 1er août au 6 septembre 2026), qui réuniront le champion d'été Saigon Warriors et les quatre équipes les mieux classées au cumul de points saison — l'occasion pour le Vietnam de désigner son représentant en vue d'éventuelles qualifications internationales." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Les Saigon Warriors confirment que le Vietnam continue de produire des talents esports de haut niveau, même dans une structure compétitive en pleine recomposition." }],
      },
    ],
  },
  // ──────────────────────────────────────────────
  // VCS 2026 Summer — EN
  // ──────────────────────────────────────────────
  {
    title: 'VCS 2026 Summer: Saigon Warriors sweep Saigon Dino 3-0 to claim the championship',
    slug: 'vcs-2026-summer-saigon-warriors-champion-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "On June 20, 2026, Saigon Warriors swept Saigon Dino 3-0 in the VCS 2026 Summer grand final to claim the Vietnamese Summer championship. A dominant split capped by a flawless finals performance.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/VCS/2026/Summer',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'VCS' }, { tag: 'Vietnam' }, { tag: 'Saigon Warriors' }],
    content: [
      {
        type: 'p',
        children: [{ text: "On June 20, 2026, Saigon Warriors were crowned VCS 2026 Summer champions after sweeping Saigon Dino 3-0 in the grand final of the Vietnam Championship Series Summer split. The all-online playoff bracket, played in a double-elimination best-of-five format from June 11 to 20, ended with a decisive performance from the Warriors roster." }],
      },
      {
        type: 'h2',
        children: [{ text: "A rebuilt roster delivers" }],
      },
      {
        type: 'p',
        children: [{ text: "Saigon Warriors entered the Summer split with a retooled lineup following mid-season changes in May 2026 — ADC Aomine, coach Hankay, and analyst DN joined ahead of the split. The full roster of Nern (top), j1n5 (jungle), AisyL (mid), Aomine (ADC), and Kairi (support), led by head coach SwizZ, delivered on expectations with a top-of-the-table regular season finish before running the upper bracket clean in the playoffs." }],
      },
      {
        type: 'h2',
        children: [{ text: "Grand final: no contest" }],
      },
      {
        type: 'p',
        children: [{ text: "Saigon Dino made the final via an impressive lower bracket run, but ran into a wall against the Warriors. All three games were controlled affairs: AisyL imposed his will in the mid lane throughout, while Aomine provided consistent late-game carries. Saigon Dino had no answer for the Warriors' macro discipline, and the 3-0 scoreline reflected the gap between the two sides on the day." }],
      },
      {
        type: 'h2',
        children: [{ text: "What comes next: VCS Finals in August" }],
      },
      {
        type: 'p',
        children: [{ text: "Since 2025, VCS teams no longer qualify directly to the World Championship — international spots from Southeast Asia now route through the LCP (League of Legends Championship Pacific). The VCS remains Vietnam's top domestic competition. As Summer champions, Saigon Warriors have secured their place at the VCS Finals (August 1 – September 6, 2026), where they will face the four teams with the highest accumulated season points to determine Vietnam's overall 2026 representative for potential international events." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Saigon Warriors prove that Vietnam continues to develop high-level esports talent, even as the regional structure around the VCS evolves." }],
      },
    ],
  },
  // ──────────────────────────────────────────────
  // VCS 2026 Summer — ES
  // ──────────────────────────────────────────────
  {
    title: 'VCS 2026 Summer: Saigon Warriors arrasan 3-0 a Saigon Dino y se coronan campeones',
    slug: 'vcs-2026-summer-saigon-warriors-campeon-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "El 20 de junio de 2026, Saigon Warriors barrieron a Saigon Dino 3-0 en la gran final del VCS 2026 Summer y se proclamaron campeones del split de verano vietnamita.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/VCS/2026/Summer',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'VCS' }, { tag: 'Vietnam' }, { tag: 'Saigon Warriors' }],
    content: [
      {
        type: 'p',
        children: [{ text: "El 20 de junio de 2026, Saigon Warriors se proclamaron campeones del VCS 2026 Summer tras barrer a Saigon Dino 3-0 en la gran final del Vietnam Championship Series. Los playoffs, disputados en formato de doble eliminación (best-of-five) del 11 al 20 de junio, concluyeron con una actuación dominante de los Warriors que no dio ninguna opción al rival." }],
      },
      {
        type: 'h2',
        children: [{ text: "Un roster renovado que cumple lo prometido" }],
      },
      {
        type: 'p',
        children: [{ text: "Los Saigon Warriors afrontaron el split de verano con un equipo renovado: en mayo de 2026 incorporaron al ADC Aomine, al coach Hankay y al analista DN. El cinco titular formado por Nern (top), j1n5 (jungla), AisyL (mid), Aomine (ADC) y Kairi (soporte), dirigido por el head coach SwizZ, respondió con creces: terminaron primeros en la fase regular y barrieron el upper bracket de playoffs sin perder un solo mapa." }],
      },
      {
        type: 'h2',
        children: [{ text: "Gran final: una exhibición sin paliativos" }],
      },
      {
        type: 'p',
        children: [{ text: "Saigon Dino llegó a la final tras una remontada épica desde el lower bracket, pero no pudo hacer nada contra los Warriors. Los tres partidos fueron controlados de principio a fin: AisyL fue determinante en el carril central en los tres juegos, mientras que Aomine brilló como carry en las fases tardías. El marcador de 3-0 refleja con fidelidad la superioridad que mostraron los Warriors a lo largo de toda la temporada." }],
      },
      {
        type: 'h2',
        children: [{ text: "Lo que viene: las VCS Finals en agosto" }],
      },
      {
        type: 'p',
        children: [{ text: "Desde 2025, el VCS ya no clasifica directamente a los Worlds: los cupos internacionales del sudeste asiático pasan ahora por el LCP (League of Legends Championship Pacific). El VCS mantiene su estatus de principal competición doméstica vietnamita. Como campeones de verano, los Saigon Warriors se han ganado su plaza en las VCS Finals (del 1 de agosto al 6 de septiembre de 2026), donde se enfrentarán a los cuatro equipos con mayor puntuación acumulada de la temporada para determinar al representante vietnamita de cara a los eventos internacionales." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Los Saigon Warriors demuestran que Vietnam sigue produciendo talento esportivo de alto nivel, incluso en plena reestructuración del panorama competitivo regional." }],
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
