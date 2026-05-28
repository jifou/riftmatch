import type { MigrationModule } from './runner'

export const id = '053-international-asian-games-2026-korea-roster'
export const description = 'International — Jeux Asiatiques 2026 : KeSPA dévoile le roster coréen LoL (Faker, Zeus, Canyon, Keria, Gumayusi, Zeka)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-19T08:00:00.000Z'

const articles = [
  {
    title: 'Jeux Asiatiques 2026 : la Corée dévoile son roster LoL avec Faker, Zeus et Canyon',
    slug: 'asian-games-2026-korea-lol-roster-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      'La KeSPA a officialisé le 18 mai les six joueurs qui représenteront la Corée du Sud en League of Legends aux Jeux Asiatiques de septembre 2026 à Aichi-Nagoya : Faker, Zeus, Canyon, Zeka, Gumayusi et Keria — une équipe sur le papier inarrêtable.',
    sourceUrl: 'https://esports.gg/news/league-of-legends/team-south-korea-asian-games-2026/',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'International' }, { tag: 'Asian Games' }, { tag: 'Corée' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Le 18 mai 2026, la Korea eSports Association (KeSPA) a officiellement annoncé les six joueurs sélectionnés pour représenter la Corée du Sud en League of Legends lors des Jeux Asiatiques 2026. La compétition se tiendra en septembre à Aichi-Nagoya, au Japon, où l'esport figure une nouvelle fois au programme officiel en tant qu'épreuve de médaille.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "La composition — six stars pour un objectif : l'or" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le roster retenu par le coach Kang « Hirai » Dong-hoon réunit des joueurs issus de trois franchises LCK. En top lane, Choi « Zeus » Woo-je (Hanwha Life Esports) prend sa place. À la jungle, Kim « Canyon » Geon-bu (Gen.G) est le choix retenu. Le poste de mid est partagé entre la légende vivante Lee « Faker » Sang-hyeok (T1) et Kim « Zeka » Geon-woo (HLE). En bot lane, la duo HLE-T1 Gumayusi–Keria est reconduite : Lee « Gumayusi » Min-hyeong portera le rôle d'ADC, Ryu « Keria » Min-seok celui de support.",
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "Trois joueurs de Hanwha Life Esports (Zeus, Zeka, Gumayusi) — actuellement en tête de la LCK 2026 — côtoient deux piliers de T1 (Faker, Keria) et le jungler de Gen.G. Canyon. L'association ZFGK (Zeus, Faker, Gumayusi, Keria), cœur du roster T1 vainqueur des Worlds 2023 et 2024, se retrouve une fois de plus réunie sous les couleurs nationales.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Les absents notables : Oner et Chovy snobés' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La sélection fait néanmoins des déçus. Moon « Oner » Hyeon-joon, jungler titulaire de T1, et Jeong « Chovy » Ji-hoon, mid laner de Gen.G et l'un des meilleurs de sa génération, ne figurent pas dans la liste. Leur absence alimente déjà les débats dans la communauté coréenne. Les clubs et joueurs ont jusqu'au 28 mai pour déposer un recours, et la validation officielle interviendra en juin.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Faker : une troisième participation aux Jeux Asiatiques' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Pour Lee « Faker » Sang-hyeok, cette sélection marque sa troisième présence aux Jeux Asiatiques, après 2018 (Palembang) et 2022 (Hangzhou). En 2022, la Corée avait décroché l'or. L'objectif est clairement d'inscrire une deuxième médaille d'or au palmarès national.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Sur le papier, ce roster coréen est l'un des plus compétitifs jamais envoyés à des Jeux Asiatiques. Rendez-vous en septembre à Aichi-Nagoya pour savoir si cette génération dorée convertira son talent en médaille olympique.",
          },
        ],
      },
    ],
  },
  {
    title: 'Asian Games 2026: South Korea reveals LoL roster featuring Faker, Zeus and Canyon',
    slug: 'asian-games-2026-korea-lol-roster-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      'KeSPA officially announced South Korea\'s six-man League of Legends roster for the 2026 Asian Games on May 18: Faker, Zeus, Canyon, Zeka, Gumayusi, and Keria will represent the nation in Aichi-Nagoya, Japan this September.',
    sourceUrl: 'https://esports.gg/news/league-of-legends/team-south-korea-asian-games-2026/',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'International' }, { tag: 'Asian Games' }, { tag: 'Korea' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'On May 18, 2026, the Korea eSports Association (KeSPA) officially revealed the six players selected to represent South Korea in League of Legends at the 2026 Asian Games. The competition will take place in September in Aichi-Nagoya, Japan, where esports returns as an official medal event for the second time in its history.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'The Roster — Six Stars, One Goal: Gold' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Head coach Kang "Hirai" Dong-hoon assembled a squad drawn from three LCK franchises. In the top lane, Choi "Zeus" Woo-je (Hanwha Life Esports) takes his spot. Kim "Canyon" Geon-bu (Gen.G) fills the jungle role. The mid lane is shared between legend Lee "Faker" Sang-hyeok (T1) and Kim "Zeka" Geon-woo (HLE). The bot lane brings back the classic duo: Lee "Gumayusi" Min-hyeong as ADC and Ryu "Keria" Min-seok as support.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "Three players from Hanwha Life Esports — currently sitting at the top of the LCK 2026 standings — join two T1 veterans (Faker and Keria) and Gen.G's Canyon. Notably, the ZFGK core (Zeus, Faker, Gumayusi, Keria) that powered T1 to back-to-back Worlds titles in 2023 and 2024 is reunited under the Korean national flag.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Notable Snubs: Oner and Chovy Left Out' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The selection has sparked debate in the Korean community. T1's starting jungler Moon \"Oner\" Hyeon-joon and Gen.G mid laner Jeong \"Chovy\" Ji-hoon, widely regarded as two of the best players in the world at their positions, were both left off the roster. Teams and players have until May 28 to file objections, and the final approval from KeSPA is expected in June.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Faker's Third Asian Games Campaign" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "For Lee \"Faker\" Sang-hyeok, this marks his third Asian Games appearance, following Palembang 2018 and Hangzhou 2022. South Korea claimed the gold medal in 2022 in dominant fashion. With this star-studded squad, the goal is clear: repeat that achievement and cement the nation's dominance on the international stage.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'On paper, this is one of the most stacked Korean national LoL rosters ever assembled. All eyes will be on Aichi-Nagoya in September to see whether this golden generation can deliver another gold medal for South Korea.',
          },
        ],
      },
    ],
  },
  {
    title: 'Juegos Asiáticos 2026: Corea del Sur revela su equipo de LoL con Faker, Zeus y Canyon',
    slug: 'asian-games-2026-korea-lol-roster-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      'KeSPA anunció oficialmente el 18 de mayo los seis jugadores que representarán a Corea del Sur en League of Legends en los Juegos Asiáticos 2026 de Aichi-Nagoya: Faker, Zeus, Canyon, Zeka, Gumayusi y Keria.',
    sourceUrl: 'https://esports.gg/news/league-of-legends/team-south-korea-asian-games-2026/',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'International' }, { tag: 'Asian Games' }, { tag: 'Corea' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'El 18 de mayo de 2026, la Korea eSports Association (KeSPA) anunció oficialmente los seis jugadores seleccionados para representar a Corea del Sur en League of Legends durante los Juegos Asiáticos 2026. La competición se celebrará en septiembre en Aichi-Nagoya, Japón, donde los esports vuelven al programa oficial como disciplina de medalla por segunda vez en su historia.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'La plantilla — seis estrellas con un único objetivo: el oro' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'El entrenador jefe Kang "Hirai" Dong-hoon ha reunido un equipo procedente de tres franquicias de la LCK. En el top lane, Choi "Zeus" Woo-je (Hanwha Life Esports). En la jungla, Kim "Canyon" Geon-bu (Gen.G). El mid lane es compartido entre la leyenda Lee "Faker" Sang-hyeok (T1) y Kim "Zeka" Geon-woo (HLE). En el bot lane se reencuentra el clásico dúo: Lee "Gumayusi" Min-hyeong como ADC y Ryu "Keria" Min-seok como support.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Tres jugadores de Hanwha Life Esports — actualmente líderes de la LCK 2026 — se unen a dos veteranos de T1 (Faker y Keria) y al jungler de Gen.G, Canyon. Destaca la reunión del núcleo ZFGK (Zeus, Faker, Gumayusi, Keria), corazón del T1 campeón del mundo en 2023 y 2024, esta vez bajo la bandera nacional coreana.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Los grandes ausentes: Oner y Chovy se quedan fuera' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'La selección genera debate en la comunidad coreana. El jungler titular de T1, Moon "Oner" Hyeon-joon, y el mid laner de Gen.G, Jeong "Chovy" Ji-hoon, considerados entre los mejores del mundo en sus posiciones, no han sido convocados. Los clubes y jugadores tienen hasta el 28 de mayo para presentar reclamaciones, y la aprobación definitiva de KeSPA se espera para junio.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Faker: su tercera participación en los Juegos Asiáticos' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Para Lee "Faker" Sang-hyeok, esta será su tercera presencia en los Juegos Asiáticos, tras Palembang 2018 y Hangzhou 2022. En Hangzhou, Corea del Sur se proclamó campeona olímpica de forma contundente. Con este equipo estelar, el objetivo es claro: repetir aquel éxito y consolidar la hegemonía coreana a nivel internacional.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Sobre el papel, este es uno de los rosters nacionales más potentes que Corea del Sur haya enviado jamás a una competición internacional de LoL. Cita en Aichi-Nagoya en septiembre para ver si esta generación dorada puede convertir su talento en otra medalla de oro.',
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
