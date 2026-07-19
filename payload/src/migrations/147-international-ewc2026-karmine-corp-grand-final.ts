import type { MigrationModule } from './runner'

export const id = '147-international-ewc2026-karmine-corp-grand-final'
export const description = "EWC 2026 — Karmine Corp bat T1 2-1 et rejoint DPlus KIA en grande finale à Paris"

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-07-19T08:00:00.000Z'

const articles = [
  {
    title: "EWC 2026 : Karmine Corp renverse T1 2-1 et affrontera DPlus KIA en grande finale à Paris",
    slug: 'ewc2026-karmine-corp-grand-final-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Karmine Corp a créé la sensation le 18 juillet à Paris Expo Porte de Versailles en battant T1 2-1 lors de la première demi-finale de l'Esports World Cup 2026, décrochant sa toute première victoire face aux Coréens après deux défaites. La formation française affrontera DPlus KIA, vainqueur de Bilibili Gaming 2-1, en grande finale ce 19 juillet.",
    sourceUrl: 'https://esportsworldcup.com/en/competitions/2026/league-of-legends',
    tags: [{ tag: 'EWC 2026' }, { tag: 'Karmine Corp' }, { tag: 'DPlus KIA' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "Dernière équipe occidentale encore en lice à l'Esports World Cup 2026, Karmine Corp a créé l'exploit le 18 juillet à Paris Expo Porte de Versailles en écartant T1 2-1 lors de la première demi-finale du tournoi. Porté par son public parisien, le club français décroche là sa toute première victoire en compétition officielle face aux triples champions du monde, après deux défaites lors de confrontations précédentes." }] },
      { type: 'h2', children: [{ text: "Un scénario renversé face à T1" }] },
      { type: 'p', children: [{ text: "T1 avait pourtant idéalement démarré la série en s'imposant sur la première manche, portée par une meilleure lecture du jeu et un contrôle plus serré des objectifs. Mais Karmine Corp a répondu immédiatement sur la deuxième carte, sa bot lane prenant le dessus sur celle de T1 pratiquement sans le soutien de son jungler. Dans la manche décisive, la bataille pour le Baron a semblé un temps tourner à l'avantage des Coréens avant que KC ne renverse totalement le combat, scellant une qualification historique pour la grande finale." }] },
      { type: 'h2', children: [{ text: "DPlus KIA rejoint KC après avoir sorti Bilibili Gaming" }] },
      { type: 'p', children: [{ text: "Dans la seconde demi-finale, DPlus KIA a validé son billet pour la finale en battant Bilibili Gaming, champion du First Stand 2026, sur le score de 2-1. Les deux finalistes se retrouveront ce 19 juillet à Paris pour une grande finale en best-of-five, avec à la clé le titre EWC 2026 et une part majeure de la cagnotte de 2 000 000 de dollars, dont 600 000 dollars réservés au vainqueur." }] },
      { type: 'blockquote', children: [{ text: "Portée par son public, Karmine Corp tentera de devenir la première équipe française championne d'un tournoi international majeur de League of Legends face à des Coréens de DPlus KIA qui restent, eux, invaincus depuis le début des playoffs." }] },
    ],
  },
  {
    title: "EWC 2026: Karmine Corp Stuns T1 2-1, Sets Up Grand Final vs DPlus KIA in Paris",
    slug: 'ewc2026-karmine-corp-grand-final-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Karmine Corp pulled off a shock 2-1 win over T1 in the first semifinal of the Esports World Cup 2026 on July 18 in Paris, their first-ever competitive win over the Korean giants. The French squad now meets DPlus KIA, who beat Bilibili Gaming 2-1, in the grand final on July 19.",
    sourceUrl: 'https://esportsworldcup.com/en/competitions/2026/league-of-legends',
    tags: [{ tag: 'EWC 2026' }, { tag: 'Karmine Corp' }, { tag: 'DPlus KIA' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "The last Western team standing at the Esports World Cup 2026, Karmine Corp delivered a stunning upset on July 18 at Paris Expo Porte de Versailles, defeating T1 2-1 in the tournament's first semifinal. Backed by a roaring home crowd, the French organization claimed its first-ever competitive win over the three-time world champions, having lost their two previous meetings." }] },
      { type: 'h2', children: [{ text: "A comeback story against T1" }] },
      { type: 'p', children: [{ text: "T1 opened the series in strong fashion, taking game one on the back of sharper macro play and tighter objective control. Karmine Corp answered immediately in game two, with their bot lane completely dismantling T1's despite getting little help from the jungle. In the decisive third game, a Baron fight that initially looked to favor the Koreans swung entirely in KC's favor, sealing a historic trip to the grand final." }] },
      { type: 'h2', children: [{ text: "DPlus KIA joins KC after eliminating Bilibili Gaming" }] },
      { type: 'p', children: [{ text: "In the second semifinal, DPlus KIA punched their own ticket to the final by beating First Stand 2026 champions Bilibili Gaming 2-1. Both finalists meet on July 19 in Paris for a best-of-five grand final, with the EWC 2026 title and the largest share of the $2,000,000 prize pool on the line — including $600,000 for the winner." }] },
      { type: 'blockquote', children: [{ text: "Riding a wave of home support, Karmine Corp will look to become the first French team to win a major international League of Legends tournament, facing a DPlus KIA side that remains undefeated since the start of the playoffs." }] },
    ],
  },
  {
    title: "EWC 2026: Karmine Corp sorprende a T1 2-1 y jugará la gran final ante DPlus KIA en París",
    slug: 'ewc2026-karmine-corp-grand-final-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Karmine Corp dio la sorpresa al vencer 2-1 a T1 en la primera semifinal de la Esports World Cup 2026 el 18 de julio en París, su primera victoria competitiva ante los coreanos. El equipo francés se medirá a DPlus KIA, que eliminó a Bilibili Gaming por 2-1, en la gran final del 19 de julio.",
    sourceUrl: 'https://esportsworldcup.com/en/competitions/2026/league-of-legends',
    tags: [{ tag: 'EWC 2026' }, { tag: 'Karmine Corp' }, { tag: 'DPlus KIA' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "Último equipo occidental con vida en la Esports World Cup 2026, Karmine Corp firmó una sorpresa mayúscula el 18 de julio en el Paris Expo Porte de Versailles al derrotar a T1 por 2-1 en la primera semifinal del torneo. Impulsado por su público parisino, el conjunto francés logró su primera victoria competitiva ante los tricampeones del mundo, tras caer en sus dos enfrentamientos previos." }] },
      { type: 'h2', children: [{ text: "Una remontada ante T1" }] },
      { type: 'p', children: [{ text: "T1 arrancó la serie de la mejor manera, llevándose el primer mapa gracias a una lectura de juego más precisa y un mejor control de objetivos. Karmine Corp respondió de inmediato en el segundo mapa, con su bot lane desarbolando por completo al de T1 pese a recibir poco apoyo de su jungla. En el tercer mapa, decisivo, una pelea por Barón que en un principio parecía favorecer a los coreanos terminó inclinándose totalmente del lado de KC, sellando un pase histórico a la gran final." }] },
      { type: 'h2', children: [{ text: "DPlus KIA se une a KC tras eliminar a Bilibili Gaming" }] },
      { type: 'p', children: [{ text: "En la segunda semifinal, DPlus KIA selló su boleto a la final al vencer 2-1 a Bilibili Gaming, campeón del First Stand 2026. Ambos finalistas se verán las caras el 19 de julio en París en una gran final al mejor de cinco mapas, con el título de la EWC 2026 y la mayor parte de la bolsa de 2 000 000 de dólares en juego, incluidos 600 000 dólares para el campeón." }] },
      { type: 'blockquote', children: [{ text: "Con el respaldo de su afición, Karmine Corp buscará convertirse en el primer equipo francés en ganar un torneo internacional importante de League of Legends, frente a un DPlus KIA que se mantiene invicto desde el inicio de los playoffs." }] },
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
