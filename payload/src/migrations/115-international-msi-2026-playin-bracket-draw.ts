import type { MigrationModule } from './runner'

export const id = '115-international-msi-2026-playin-bracket-draw'
export const description = 'International — MSI 2026 Play-In : tirage révélé, T1 vs Team Liquid et KC vs Deep Cross Gaming'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-16T08:00:00.000Z'

const articles = [
  {
    title: "MSI 2026 : le tirage des Play-In est tombé — T1 vs Team Liquid, KC vs Deep Cross Gaming",
    slug: 'international-msi-2026-playin-bracket-draw-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Le tableau des Play-In du MSI 2026 à Daejeon est connu : T1 affronte Team Liquid et Karmine Corp défie Deep Cross Gaming. Un seul billet pour le Bracket Stage. Le format est impitoyable — double-élimination en BO5, à partir du 28 juin.",
    sourceUrl: 'https://lolesports.com/en-US/news/msi-2026-primer',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'MSI' }, { tag: 'International' }, { tag: 'T1' }, { tag: 'Karmine Corp' }],
    content: [
      { type: 'p', children: [{ text: "Le tableau des Play-In du MSI 2026 est désormais établi. Les quatre équipes qui s'affronteront pour décrocher l'unique billet vers le Bracket Stage du Mid-Season Invitational connaissent leur chemin : T1 (deuxième graine LCK) sera opposé à Team Liquid (deuxième graine LCS), tandis que Karmine Corp (deuxième graine LEC) défiera Revolve Deep Cross Gaming (deuxième graine LCP). Le tout en BO5, en double-élimination, au Daejeon Convention Center II à partir du 28 juin." }] },
      { type: 'h2', children: [{ text: "Un format sans pitié : un seul survivant" }] },
      { type: 'p', children: [{ text: "Le format des Play-In 2026 ne laisse aucune place à l'erreur. Quatre équipes entrent dans le bracket double-élimination, et une seule en ressort. Toutes les rencontres se jouent en BO5 — un choix qui récompense la régularité mais élimine la possibilité d'un upset sur un seul match. Les trois équipes éliminées rentrent chez elles sans avoir participé au Bracket Stage. Les matchs débutent le 28 juin à 12h00 KST (5h00 CEST) et la phase de Play-In s'achève le 1er juillet." }] },
      { type: 'h2', children: [{ text: "Un tirage guidé par le First Stand 2026" }] },
      { type: 'p', children: [{ text: "Contrairement aux années précédentes, le tirage n'est pas aléatoire. Les têtes de série ont été déterminées par les résultats du First Stand 2026 disputé en mars à São Paulo. G2 Esports — champion du First Stand — avait éliminé deux équipes LCK au cours du tournoi, accordant à toute la représentation LEC un meilleur positionnement dans le bracket. Karmine Corp hérite ainsi du duel théoriquement plus abordable face à Deep Cross Gaming, tandis que T1 — les champions du monde en titre — se retrouvent opposés à Team Liquid, le finaliste LCS." }] },
      { type: 'h2', children: [{ text: "T1 vs Team Liquid : le choc de l'ouverture" }] },
      { type: 'p', children: [{ text: "La rencontre T1 vs Team Liquid est sans doute le duel le plus attendu des Play-In. Les Coréens, qui ont terminé deuxièmes du LCK Road to MSI après une défaite 3-1 contre Hanwha Life Esports en finale, voudront se racheter sur la scène internationale. En face, Team Liquid représente la deuxième graine LCS et arrive à Daejeon motivée pour créer l'upset. Qui que ce soit qui remporte ce duel, l'adversaire sera envoyé dans la bracket inférieure avec une dernière chance de survie." }] },
      { type: 'blockquote', children: [{ text: "Un seul billet pour huit équipes directes en Bracket Stage — la marge d'erreur aux Play-In est nulle. Le MSI 2026 débute le 28 juin à Daejeon, avec la grande finale prévue le 12 juillet." }] },
    ],
  },
  {
    title: "MSI 2026 Play-In bracket draw revealed: T1 vs Team Liquid, KC vs Deep Cross Gaming",
    slug: 'international-msi-2026-playin-bracket-draw-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "The MSI 2026 Play-In bracket is set: T1 takes on Team Liquid while Karmine Corp faces Deep Cross Gaming. Only one ticket to the Bracket Stage is on the line. Double elimination, all best-of-fives, starting June 28 in Daejeon.",
    sourceUrl: 'https://lolesports.com/en-US/news/msi-2026-primer',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'MSI' }, { tag: 'International' }, { tag: 'T1' }, { tag: 'Karmine Corp' }],
    content: [
      { type: 'p', children: [{ text: "The MSI 2026 Play-In bracket has been revealed. Four teams will compete for a single spot in the Bracket Stage of the Mid-Season Invitational at Daejeon Convention Center II: T1 (LCK 2nd seed) faces Team Liquid (LCS 2nd seed), and Karmine Corp (LEC 2nd seed) takes on Revolve Deep Cross Gaming (LCP 2nd seed). Every match is a best-of-five in a double-elimination bracket, starting June 28 at 12 PM KST (5 AM CEST)." }] },
      { type: 'h2', children: [{ text: "A brutal format: only one team survives" }] },
      { type: 'p', children: [{ text: "The Play-In format this year leaves no margin for error. Four teams enter the bracket, and only one advances to the Main Event Bracket Stage alongside the seven direct seeds. All matches are played as BO5, meaning there are no fluky upsets — only the most consistent team on the day will move on. The three eliminated teams go home before the main competition even begins. Play-Ins run from June 28 through July 1, with the Bracket Stage opening on July 2." }] },
      { type: 'h2', children: [{ text: "Seeding determined by First Stand 2026 results" }] },
      { type: 'p', children: [{ text: "This was not a random draw. The bracket seedings were pre-determined based on First Stand 2026 results from March. G2 Esports won the First Stand in São Paulo, defeating two LCK teams along the way — a result that granted the LEC region a favorable seeding advantage. As a result, Karmine Corp received the theoretically easier opening matchup against Deep Cross Gaming, while the reigning World Champions T1 were placed against Team Liquid in the upper bracket opener." }] },
      { type: 'h2', children: [{ text: "T1 vs Team Liquid: the headline clash" }] },
      { type: 'p', children: [{ text: "T1 versus Team Liquid is the marquee matchup of the Play-In stage. T1 finished as LCK runners-up after falling 3-1 to Hanwha Life Esports in the Road to MSI final — and will arrive in Daejeon hungry to bounce back on the international stage. Team Liquid, representing the LCS as second seed, has everything to gain in this bracket. The loser of the upper bracket match drops to the lower bracket for one last chance, while the other advances toward the sole Bracket Stage ticket." }] },
      { type: 'blockquote', children: [{ text: "One ticket to join eight direct seeds in the Bracket Stage — the Play-In margin is zero. MSI 2026 opens June 28 in Daejeon, with the Grand Final set for July 12." }] },
    ],
  },
  {
    title: "MSI 2026: El sorteo de Play-In revela T1 vs Team Liquid y KC vs Deep Cross Gaming",
    slug: 'international-msi-2026-playin-bracket-draw-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "El cuadro de Play-In del MSI 2026 en Daejeon está definido: T1 enfrenta a Team Liquid y Karmine Corp se medirá con Deep Cross Gaming. Solo un equipo avanza al Bracket Stage. Formato doble eliminación en BO5, desde el 28 de junio.",
    sourceUrl: 'https://lolesports.com/en-US/news/msi-2026-primer',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'MSI' }, { tag: 'Internacional' }, { tag: 'T1' }, { tag: 'Karmine Corp' }],
    content: [
      { type: 'p', children: [{ text: "El cuadro de Play-In del MSI 2026 ya está definido. Las cuatro equipos que competirán por el único boleto al Bracket Stage del Mid-Season Invitational en Daejeon Convention Center II ya conocen sus rivales: T1 (segundo seed LCK) se enfrenta a Team Liquid (segundo seed LCS), mientras que Karmine Corp (segundo seed LEC) se mide con Revolve Deep Cross Gaming (segundo seed LCP). Todos los partidos son al mejor de cinco en un bracket de doble eliminación, a partir del 28 de junio a las 12:00 KST (5:00 CEST)." }] },
      { type: 'h2', children: [{ text: "Un formato implacable: solo un equipo sobrevive" }] },
      { type: 'p', children: [{ text: "El formato de Play-In 2026 no deja margen de error. Cuatro equipos entran al cuadro y solo uno avanza al Bracket Stage junto a los siete seeds directos. Todos los enfrentamientos son en BO5, eliminando los posibles upset de un solo partido. Los tres equipos eliminados regresan a casa sin haber disputado la fase principal. Los Play-In se celebrarán del 28 de junio al 1 de julio, y el Bracket Stage arrancará el 2 de julio." }] },
      { type: 'h2', children: [{ text: "El sorteo determinado por el First Stand 2026" }] },
      { type: 'p', children: [{ text: "El sorteo no fue aleatorio. Los seeds del cuadro se determinaron en función de los resultados del First Stand 2026 de marzo en São Paulo. G2 Esports ganó el torneo eliminando a dos equipos LCK en el proceso, lo que otorgó a la región LEC una ventaja de seeding. Como resultado, Karmine Corp recibió el cruce inicial teóricamente más accesible contra Deep Cross Gaming, mientras que los actuales campeones mundiales T1 quedaron emparejados con Team Liquid en el upper bracket." }] },
      { type: 'h2', children: [{ text: "T1 vs Team Liquid: el choque estelar" }] },
      { type: 'p', children: [{ text: "T1 contra Team Liquid es el enfrentamiento más esperado de los Play-In. Los coreanos, que cayeron 3-1 ante Hanwha Life Esports en la final del Road to MSI de la LCK, llegan a Daejeon con ganas de redimirse en el escenario internacional. Team Liquid, representando al LCS como segundo seed, lo tiene todo por ganar en este bracket. El perdedor del upper bracket cae al lower bracket con una última oportunidad de supervivencia." }] },
      { type: 'blockquote', children: [{ text: "Un solo boleto para unirse a los ocho seeds directos en el Bracket Stage — el margen en Play-In es cero. El MSI 2026 arranca el 28 de junio en Daejeon, con la Gran Final el 12 de julio." }] },
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
