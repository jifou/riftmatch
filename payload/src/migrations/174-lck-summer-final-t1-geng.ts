import type { MigrationModule } from './runner'

export const id = '174-lck-summer-final-t1-geng'
export const description = 'LCK Summer Final 2026 — T1 champion après victoire 3-2 épique contre Gen.G'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-21T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/syndra/skins/base/images/syndra_splash_centered_0.jpg'

const articles = [
  {
    title: 'LCK Summer 2026 : T1 champion après une finale épique 3-2 contre Gen.G, Faker exceptionnel',
    slug: 'lck-summer-2026-final-t1-geng-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "T1 remporte sa quatrième LCK Summer consécutive dans une finale anthologique 3-2 face à Gen.G. Faker, auteur du game 5 de sa vie, est nommé MVP de la finale.",
    sourceUrl: 'https://lolesports.com/leagues/lck',
    tags: [{ tag: 'LCK' }, { tag: 'T1' }, { tag: 'Gen.G' }, { tag: 'Faker' }, { tag: 'Finale' }],
    content: [
      { type: 'p', children: [{ text: "T1 est le champion de la LCK Summer 2026. Dans une finale qui restera dans les mémoires, la formation de Faker a battu Gen.G 3-2 dans un game 5 haletant, soulevant à nouveau le trophée de la meilleure ligue du monde et s'assurant la première tête de série coréenne pour les Worlds 2026." }] },
      { type: 'h2', children: [{ text: 'Un game 5 inoubliable' }] },
      { type: 'p', children: [{ text: "Après quatre games équilibrés (Gen.G menant 2-1 avant le game 4), le game 5 a été un chef d'œuvre de tension. T1 et Gen.G ont échangé objectif après objectif pendant 45 minutes. C'est finalement Faker, sorti sur Syndra dans un meta qu'il a lui-même redéfini cette saison, qui a déclenché le teamfight final depuis lequel T1 a pu détruire le Nexus de Gen.G." }] },
      { type: 'h2', children: [{ text: 'T1, la machine à gagner' }] },
      { type: 'p', children: [{ text: "Ce titre marque la quatrième victoire consécutive de T1 en LCK Summer, un record dans l'histoire de la ligue. Faker, 30 ans, continue de défier le temps et de démontrer pourquoi il est universellement reconnu comme le Greatest of All Time. Le roster complet est qualifié pour les Worlds 2026 en groupe, avec l'ambition de décrocher un troisième titre mondial." }] },
    ],
  },
  {
    title: 'LCK Summer 2026 Final: T1 are champions in an epic 3-2 over Gen.G, Faker named MVP',
    slug: 'lck-summer-2026-final-t1-geng-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "T1 claim their fourth consecutive LCK Summer title in an all-time 3-2 final against Gen.G. Faker delivers a legendary Game 5 on Syndra and is named Finals MVP.",
    sourceUrl: 'https://lolesports.com/leagues/lck',
    tags: [{ tag: 'LCK' }, { tag: 'T1' }, { tag: 'Gen.G' }, { tag: 'Faker' }, { tag: 'Finals' }],
    content: [
      { type: 'p', children: [{ text: "T1 are LCK Summer 2026 champions. In a final for the ages, Faker's squad defeated Gen.G 3-2 in a pulsating five-game series, lifting the trophy for the fourth consecutive time and claiming Korea's top seed for Worlds 2026." }] },
      { type: 'h2', children: [{ text: 'A legendary Game 5' }] },
      { type: 'p', children: [{ text: "After four balanced games — Gen.G led 2-1 going into Game 4 — Game 5 was a masterclass in high-stakes League of Legends. Both teams traded objectives for 45 minutes in a back-and-forth that had the arena on its feet. It was Faker on Syndra who triggered the decisive teamfight, leading T1 to the Nexus." }] },
      { type: 'h2', children: [{ text: "T1's unmatched dynasty" }] },
      { type: 'p', children: [{ text: "This title marks four consecutive LCK Summer victories — a league record. Faker, now 30, continues to defy time and justify his GOAT status. The full roster heads to Worlds 2026 as LCK's top seed, targeting a third world title." }] },
    ],
  },
  {
    title: 'Final LCK Summer 2026: T1, campeones en un épico 3-2 ante Gen.G; Faker, MVP',
    slug: 'lck-summer-2026-final-t1-geng-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "T1 se proclama campeón de la LCK Summer 2026 en una final antológica 3-2 ante Gen.G. Faker protagoniza el juego 5 de su vida en Syndra y es nombrado MVP.",
    sourceUrl: 'https://lolesports.com/leagues/lck',
    tags: [{ tag: 'LCK' }, { tag: 'T1' }, { tag: 'Gen.G' }, { tag: 'Faker' }, { tag: 'Final' }],
    content: [
      { type: 'p', children: [{ text: "T1 es el campeón de la LCK Summer 2026. En una final para la historia, el equipo de Faker derrotó a Gen.G 3-2 en un trepidante quinto juego, levantando el trofeo por cuarta vez consecutiva y asegurando la primera cabeza de serie coreana para los Worlds 2026." }] },
      { type: 'h2', children: [{ text: 'Un juego 5 para la eternidad' }] },
      { type: 'p', children: [{ text: "Tras cuatro juegos equilibrados —Gen.G ganaba 2-1 antes del juego 4—, el quinto fue una obra maestra de tensión. Ambos equipos intercambiaron objetivos durante 45 minutos en un partido de ida y vuelta que tuvo al arena en pie. Fue Faker en Syndra quien desencadenó la pelea de equipo decisiva que llevó a T1 al Nexus rival." }] },
      { type: 'h2', children: [{ text: 'La dinastía imparable de T1' }] },
      { type: 'p', children: [{ text: "Este título supone cuatro victorias consecutivas en la LCK Summer, un récord histórico de la liga. Faker, con 30 años, sigue desafiando el tiempo y justificando su condición de GOAT. Todo el roster va a los Worlds 2026 como primera cabeza de serie del LCK, con la mira puesta en un tercer título mundial." }] },
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
