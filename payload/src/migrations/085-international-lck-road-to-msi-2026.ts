import type { MigrationModule } from './runner'

export const id = '085-international-lck-road-to-msi-2026'
export const description = 'International — LCK Road to MSI 2026 : 6 équipes pour 2 places à Daejeon, HLE et T1 en favoris (2 juin)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-02T08:00:00.000Z'
const COVER = 'https://img.youtube.com/vi/SwMexySOIHc/maxresdefault.jpg'

const articles = [
  {
    title: "LCK Road to MSI 2026 : six équipes, deux places, le tout commence le 6 juin",
    slug: 'lck-road-to-msi-2026-preview-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Hanwha Life Esports et T1 partent favoris du LCK Road to MSI 2026, le tournoi de qualification qui désignera les deux représentants coréens au MSI de Daejeon (28 juin – 12 juillet).",
    sourceUrl: 'https://lolesports.com/en-US/tournament/115548128960088078/stage/115548128961398800',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'International' }, { tag: 'LCK' }, { tag: 'MSI' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Le LCK Road to MSI 2026 débute le 6 juin et opposera six équipes coréennes dans un format King of the Hill en double-élimination, où tous les matchs se jouent en best-of-5. À la clé : deux places pour le Mid-Season Invitational 2026, prévu du 28 juin au 12 juillet à Daejeon, en Corée du Sud." }],
      },
      {
        type: 'h2',
        children: [{ text: "Les six équipes et leurs seeds" }],
      },
      {
        type: 'p',
        children: [{ text: "Hanwha Life Esports (HLE) et T1 entrent directement au bracket supérieur en tant que 1er et 2e seeds de la saison régulière, ce qui leur garantit deux chances de se qualifier. Les quatre autres équipes — Gen.G (3e), Dplus KIA (4e), KT Rolster (5e) et Brion (6e) — devront se frayer un chemin depuis le bracket inférieur. Gen.G, pourtant coêgalité de record avec T1, a dû se contenter du 3e rang en raison d'un différentiel de parties moins favorable." }],
      },
      {
        type: 'h2',
        children: [{ text: "Format et calendrier" }],
      },
      {
        type: 'p',
        children: [{ text: "Les deux premiers tours se disputent au LCK Arena du LoL PARK de Séoul. KT Rolster et Brion s'affrontent en Round 1 (6 juin) ; le vainqueur défie Dplus KIA en Round 2. Puis le tournoi bascule à Wonju pour les matchs décisifs :" }],
      },
      {
        type: 'p',
        children: [{ text: "— Vendredi 12 juin : HLE vs T1 (bracket supérieur) — le vainqueur sécurise le premier seed LCK au MSI." }],
      },
      {
        type: 'p',
        children: [{ text: "— Samedi 13 juin : Gen.G affronte le survivant du bracket inférieur." }],
      },
      {
        type: 'p',
        children: [{ text: "— Dimanche 14 juin : la grande finale au Wonju DB Promy Arena désigne le deuxième représentant coréen." }],
      },
      {
        type: 'h2',
        children: [{ text: "Enjeux : le MSI 2026 et au-delà" }],
      },
      {
        type: 'p',
        children: [{ text: "L'affrontement HLE vs T1 du 12 juin s'annonce comme un classique de la rivalité coréenne. HLE a dominé la saison régulière split 2 et cherche à confirmer sa suprématie. T1, guidé par Faker, vise une nouvelle qualification internationale après son titre à l'EWC 2026 en cours de préparation. Seule une défaite en upper bracket priverait l'un d'eux d'une seconde chance — le perdant retrouvant alors le vainqueur du bracket inférieur le lendemain." }],
      },
      {
        type: 'p',
        children: [{ text: "Le MSI 2026 de Daejeon accueillera 11 équipes au total : deux par région parmi LCK, LPL, LEC, LCS et LCP, plus la championne du CBLOL. G2 Esports (LEC) et Secret Whales (LCP) sont déjà qualifiés, tandis que les deux graines LPL bénéficient d'une entrée directe en bracket stage grâce au titre de Bilibili Gaming au First Stand 2026." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "À partir du 6 juin, la Corée choisit ses deux ambassadeurs pour le MSI. Rendez-vous à Wonju les 12-14 juin pour les matchs qui feront l'histoire." }],
      },
    ],
  },
  {
    title: "LCK Road to MSI 2026: Six Teams, Two Spots, Starting June 6",
    slug: 'lck-road-to-msi-2026-preview-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Hanwha Life Esports and T1 enter the LCK Road to MSI 2026 as favorites, competing for two Korean slots at MSI 2026 in Daejeon (June 28 – July 12).",
    sourceUrl: 'https://lolesports.com/en-US/tournament/115548128960088078/stage/115548128961398800',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'International' }, { tag: 'LCK' }, { tag: 'MSI' }],
    content: [
      {
        type: 'p',
        children: [{ text: "The LCK Road to MSI 2026 kicks off on June 6, pitting six Korean teams in a double-elimination King of the Hill bracket where every match is a best-of-five. The prize: two spots at the 2026 Mid-Season Invitational, set for June 28 to July 12 in Daejeon, South Korea." }],
      },
      {
        type: 'h2',
        children: [{ text: "The Six Teams and Their Seeds" }],
      },
      {
        type: 'p',
        children: [{ text: "Hanwha Life Esports (HLE) and T1 enter the Upper Bracket as the first and second seeds from the LCK Split 2 regular season, giving both teams two chances to qualify. The remaining four — Gen.G (3rd), Dplus KIA (4th), KT Rolster (5th), and Brion (6th) — must fight through the Lower Bracket. Gen.G, despite matching T1's record, was placed third due to a worse game differential." }],
      },
      {
        type: 'h2',
        children: [{ text: "Format and Schedule" }],
      },
      {
        type: 'p',
        children: [{ text: "The first two rounds take place at the LCK Arena in LoL PARK, Seoul. KT Rolster and Brion clash in Round 1 (June 6); the winner faces Dplus KIA in Round 2. The tournament then moves to Wonju for the decisive matches:" }],
      },
      {
        type: 'p',
        children: [{ text: "— Friday, June 12: HLE vs T1 (Upper Bracket) — the winner secures LCK's first MSI seed." }],
      },
      {
        type: 'p',
        children: [{ text: "— Saturday, June 13: Gen.G faces the Lower Bracket survivor." }],
      },
      {
        type: 'p',
        children: [{ text: "— Sunday, June 14: The Grand Final at the Wonju DB Promy Arena crowns Korea's second MSI representative." }],
      },
      {
        type: 'h2',
        children: [{ text: "Stakes: MSI 2026 and Beyond" }],
      },
      {
        type: 'p',
        children: [{ text: "The HLE vs T1 showdown on June 12 is set to be another chapter in Korean rivalry. HLE dominated the Split 2 regular season and aims to stamp its authority. T1, led by Faker, is hunting another international qualification. Only an upper bracket loss removes the safety net — the loser would then face the Lower Bracket finalist the following day." }],
      },
      {
        type: 'p',
        children: [{ text: "MSI 2026 in Daejeon will host 11 teams total: two per region from LCK, LPL, LEC, LCS, and LCP, plus the CBLOL champion. G2 Esports (LEC) and Secret Whales (LCP) are already confirmed, while both LPL seeds received a direct Bracket Stage entry following Bilibili Gaming's First Stand 2026 title." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Korea picks its two MSI ambassadors starting June 6. The defining matches arrive in Wonju on June 12-14." }],
      },
    ],
  },
  {
    title: "LCK Road to MSI 2026: Seis Equipos, Dos Plazas, Comienza el 6 de Junio",
    slug: 'lck-road-to-msi-2026-preview-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Hanwha Life Esports y T1 son los favoritos del LCK Road to MSI 2026, el torneo que determinará los dos representantes coreanos en el MSI de Daejeon (28 de junio – 12 de julio).",
    sourceUrl: 'https://lolesports.com/en-US/tournament/115548128960088078/stage/115548128961398800',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'International' }, { tag: 'LCK' }, { tag: 'MSI' }],
    content: [
      {
        type: 'p',
        children: [{ text: "El LCK Road to MSI 2026 arranca el 6 de junio y enfrentará a seis equipos coreanos en un bracket King of the Hill de doble eliminación, donde todos los partidos se disputan al mejor de cinco. En juego: dos plazas para el Mid-Season Invitational 2026, previsto del 28 de junio al 12 de julio en Daejeon, Corea del Sur." }],
      },
      {
        type: 'h2',
        children: [{ text: "Los Seis Equipos y Sus Seeds" }],
      },
      {
        type: 'p',
        children: [{ text: "Hanwha Life Esports (HLE) y T1 entran directamente al Upper Bracket como los seeds 1 y 2 de la temporada regular del Split 2 de la LCK, lo que les otorga dos oportunidades de clasificarse. Los otros cuatro — Gen.G (3°), Dplus KIA (4°), KT Rolster (5°) y Brion (6°) — deberán abrirse camino desde el Lower Bracket. Gen.G, pese a igualar el récord de T1, quedó en tercer lugar por un diferencial de partidas inferior." }],
      },
      {
        type: 'h2',
        children: [{ text: "Formato y Calendario" }],
      },
      {
        type: 'p',
        children: [{ text: "Las dos primeras rondas se celebran en el LCK Arena del LoL PARK de Seúl. KT Rolster y Brion se enfrentan en la Ronda 1 (6 de junio); el ganador se mide a Dplus KIA en la Ronda 2. Después el torneo se traslada a Wonju para las partidas decisivas:" }],
      },
      {
        type: 'p',
        children: [{ text: "— Viernes 12 de junio: HLE vs T1 (Upper Bracket) — el ganador asegura el primer seed coreano en el MSI." }],
      },
      {
        type: 'p',
        children: [{ text: "— Sábado 13 de junio: Gen.G se enfrenta al superviviente del Lower Bracket." }],
      },
      {
        type: 'p',
        children: [{ text: "— Domingo 14 de junio: la Gran Final en el Wonju DB Promy Arena elige al segundo representante coreano." }],
      },
      {
        type: 'h2',
        children: [{ text: "En Juego: el MSI 2026 y Más" }],
      },
      {
        type: 'p',
        children: [{ text: "El duelo HLE vs T1 del 12 de junio promete ser un nuevo capítulo de la rivalidad coreana. HLE dominó la temporada regular del Split 2 y busca consolidar su hegemonía. T1, liderado por Faker, aspira a otra clasificación internacional. Solo una derrota en el Upper Bracket les priva de la segunda oportunidad, enfrentándose entonces al finalista del Lower Bracket al día siguiente." }],
      },
      {
        type: 'p',
        children: [{ text: "El MSI 2026 de Daejeon contará con 11 equipos en total: dos por región entre LCK, LPL, LEC, LCS y LCP, más el campeón del CBLOL. G2 Esports (LEC) y Secret Whales (LCP) ya están clasificados, mientras que ambas semillas de la LPL acceden directamente al Bracket Stage gracias al título de Bilibili Gaming en el First Stand 2026." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Corea elige a sus dos embajadores para el MSI a partir del 6 de junio. Las partidas que definirán la historia llegan a Wonju los días 12 al 14 de junio." }],
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
