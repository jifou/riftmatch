import type { MigrationModule } from './runner'

export const id = '142-international-msi2026-g2-eliminates-t1'
export const description = "MSI 2026 — G2 Esports élimine T1 3-1 et met fin à sept ans d'invincibilité, LYON balaie Team Secret Whales 3-0"

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-07-09T08:00:00.000Z'

const articles = [
  {
    title: "MSI 2026 : G2 Esports élimine T1 3-1 et met fin à sept ans d'invincibilité, LYON balaie Team Secret Whales 3-0",
    slug: 'msi2026-g2-eliminates-t1-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "G2 Esports a créé la sensation en éliminant T1 3-1 en bracket inférieur du MSI 2026 ce 8 juillet, sa première victoire en série face aux Coréens depuis sept ans, tandis que LYON balayait Team Secret Whales 3-0 pour assurer au minimum une quatrième place.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026/Bracket_Stage',
    tags: [{ tag: 'MSI 2026' }, { tag: 'G2 Esports' }, { tag: 'T1' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "Le Bracket Stage du MSI 2026 a livré son verdict le plus retentissant ce 8 juillet au Daejeon Convention Center : G2 Esports a éliminé T1 3-1 en bracket inférieur, mettant fin à sept ans d'invincibilité du club coréen face aux Européens et à sa série historique de finish top 4 dans les tournois internationaux." }] },
      { type: 'h2', children: [{ text: "G2 renverse la malédiction face à T1" }] },
      { type: 'p', children: [{ text: "Portée par un BrokenBlade des grands soirs, G2 a dominé la deuxième manche 18 kills à 8 pour prendre les commandes de la série. T1 a répliqué dans la troisième manche pour recoller au score, avant qu'une quatrième partie à rallonge, prolongée au-delà de 50 minutes, ne bascule dans le money time : Peyz a d'abord signé un pentakill sur un combat de Baron pour donner l'avantage aux Coréens, mais G2 a immédiatement répondu au combat de dragon suivant pour reprendre le contrôle et sceller la série. Sur Kled, BrokenBlade a totalisé 15 kills, égalant le record du plus grand nombre d'éliminations pour un top laner lors d'un tournoi international, et a été désigné MVP de la confrontation." }] },
      { type: 'h2', children: [{ text: "LYON balaie Team Secret Whales et assure sa place en demi-finale" }] },
      { type: 'p', children: [{ text: "Dans l'autre choc de bracket inférieur du jour, LYON a signé un 3-0 sans appel face à Team Secret Whales, s'imposant 13-9 puis 16-8 en un peu moins de 30 minutes à chaque manche. Les Français valident ainsi au minimum une quatrième place au classement final et poursuivent l'aventure en bracket inférieur." }] },
      { type: 'h2', children: [{ text: "T1 quitte le tournoi par la petite porte" }] },
      { type: 'p', children: [{ text: "Pour la première fois de son histoire, T1 termine un tournoi international hors du top 4, aux côtés de Team Secret Whales, à la cinquième-sixième place et 160 000 dollars de gains. Bilibili Gaming, de son côté, affrontera Hanwha Life Esports ce 9 juillet en finale du bracket supérieur, avec une place directe en grande finale à la clé." }] },
      { type: 'blockquote', children: [{ text: "Sept ans après leur dernière victoire face aux Coréens, G2 signe l'un des plus gros exploits de son histoire et prive T1 d'un top 4 pour la première fois de son histoire internationale." }] },
    ],
  },
  {
    title: "MSI 2026: G2 Esports Eliminate T1 3-1 to End Seven-Year Losing Streak, LYON Sweep Team Secret Whales 3-0",
    slug: 'msi2026-g2-eliminates-t1-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "G2 Esports pulled off a stunner by eliminating T1 3-1 in the MSI 2026 lower bracket on July 8, their first series win over the Koreans in seven years, while LYON swept Team Secret Whales 3-0 to lock in at least a fourth-place finish.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026/Bracket_Stage',
    tags: [{ tag: 'MSI 2026' }, { tag: 'G2 Esports' }, { tag: 'T1' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "MSI 2026's Bracket Stage delivered its biggest shock yet on July 8 at the Daejeon Convention Center: G2 Esports eliminated T1 3-1 in the lower bracket, ending seven years without a series win over the Korean powerhouse and snapping T1's historic streak of top-4 finishes at international events." }] },
      { type: 'h2', children: [{ text: "G2 break the curse against T1" }] },
      { type: 'p', children: [{ text: "Carried by a vintage BrokenBlade performance, G2 dominated Game 2 18 kills to 8 to take control of the series. T1 hit back in Game 3 to level the score, before a marathon Game 4 that ran past the 50-minute mark swung in the final stretch: Peyz first landed a pentakill in a Baron fight to put the Koreans ahead, but G2 answered immediately at the next Dragon fight to seize back control and close out the series. On Kled, BrokenBlade racked up 15 kills, tying the record for most kills by a toplaner in an international game, and was named series MVP." }] },
      { type: 'h2', children: [{ text: "LYON sweep Team Secret Whales to lock in a top-4 finish" }] },
      { type: 'p', children: [{ text: "In the day's other lower bracket clash, LYON delivered a clean 3-0 sweep of Team Secret Whales, winning 13-9 and 16-8 in games that both wrapped up in under 30 minutes. The French squad now guarantee at least a fourth-place finish and continue their run through the lower bracket." }] },
      { type: 'h2', children: [{ text: "T1 exit through the back door" }] },
      { type: 'p', children: [{ text: "For the first time in its history, T1 finish an international tournament outside the top four, tied with Team Secret Whales for fifth-sixth place and a $160,000 payout. Bilibili Gaming, meanwhile, face Hanwha Life Esports on July 9 in the Upper Bracket Final, with a direct spot in the Grand Final on the line." }] },
      { type: 'blockquote', children: [{ text: "Seven years after their last series win over the Koreans, G2 pull off one of the biggest upsets in their history and deny T1 a top-4 finish for the first time on the international stage." }] },
    ],
  },
  {
    title: "MSI 2026: G2 Esports elimina a T1 3-1 y corta una racha de siete años, LYON barre 3-0 a Team Secret Whales",
    slug: 'msi2026-g2-eliminates-t1-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "G2 Esports dio la sorpresa al eliminar a T1 3-1 en el bracket inferior del MSI 2026 el 8 de julio, su primera victoria en serie ante los coreanos en siete años, mientras LYON barrio 3-0 a Team Secret Whales para asegurar al menos el cuarto puesto.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026/Bracket_Stage',
    tags: [{ tag: 'MSI 2026' }, { tag: 'G2 Esports' }, { tag: 'T1' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "El Bracket Stage del MSI 2026 dejo su mayor sorpresa el 8 de julio en el Daejeon Convention Center: G2 Esports elimino a T1 3-1 en el bracket inferior, poniendo fin a siete años sin ganarle una serie al gigante coreano y cortando la historica racha de T1 de terminar entre los cuatro primeros en torneos internacionales." }] },
      { type: 'h2', children: [{ text: "G2 rompe la maldicion ante T1" }] },
      { type: 'p', children: [{ text: "Impulsado por un BrokenBlade en gran nivel, G2 domino el Juego 2 por 18 kills a 8 para tomar el control de la serie. T1 respondio en el Juego 3 para igualar el marcador, antes de que un larguisimo Juego 4, que supero los 50 minutos, se definiera en el tramo final: Peyz firmo primero una pentakill en una pelea de Baron para poner en ventaja a los coreanos, pero G2 respondio de inmediato en la siguiente pelea de dragon para recuperar el control y cerrar la serie. Con Kled, BrokenBlade sumo 15 kills, igualando el record de mas eliminaciones de un toplaner en un partido internacional, y fue nombrado MVP de la serie." }] },
      { type: 'h2', children: [{ text: "LYON barre a Team Secret Whales y asegura el top 4" }] },
      { type: 'p', children: [{ text: "En el otro cruce del bracket inferior de la jornada, LYON firmo un contundente 3-0 ante Team Secret Whales, ganando 13-9 y 16-8 en partidas que se resolvieron en menos de 30 minutos cada una. Los franceses aseguran asi al menos el cuarto puesto y continuan su camino en el bracket inferior." }] },
      { type: 'h2', children: [{ text: "T1 sale por la puerta de atras" }] },
      { type: 'p', children: [{ text: "Por primera vez en su historia, T1 termina un torneo internacional fuera del top 4, junto a Team Secret Whales en el quinto-sexto puesto y con 160.000 dolares de premio. Bilibili Gaming, por su parte, se enfrentara a Hanwha Life Esports el 9 de julio en la final del bracket superior, con un cupo directo a la gran final en juego." }] },
      { type: 'blockquote', children: [{ text: "Siete años despues de su ultima victoria en serie ante los coreanos, G2 firma una de las mayores sorpresas de su historia y le niega a T1 un top 4 por primera vez en el plano internacional." }] },
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
