import type { MigrationModule } from './runner'

export const id = '131-international-msi2026-playin-day1'
export const description = 'MSI 2026 — Play-In Day 1 : T1 écrase Team Liquid, Karmine Corp entre en lice à Daejeon'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-28T08:00:00.000Z'

const articles = [
  {
    title: "MSI 2026 : T1 domine Team Liquid pour ouvrir le Play-In à Daejeon",
    slug: 'msi2026-playin-day1-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Le MSI 2026 a débuté ce 28 juin à Daejeon avec le Play-In : T1 a écrasé Team Liquid Alienware dès l'ouverture, porté par un retournement de situation spectaculaire de Doran. Karmine Corp affronte Deep Cross Gaming dans le second match du jour.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026',
    tags: [{ tag: 'LoL' }, { tag: 'MSI' }, { tag: 'International' }, { tag: 'T1' }, { tag: 'Esports' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Le Mid-Season Invitational 2026 a ouvert ses portes ce samedi 28 juin au Daejeon Convention Center, en Corée du Sud. Le Play-In, qui met aux prises quatre équipes dans un bracket à double élimination, a démarré sur les chapeaux de roues avec T1 qui a pris le contrôle de sa série face à Team Liquid Alienware." }],
      },
      {
        type: 'h2',
        children: [{ text: "T1 impressionne d'entrée face à Team Liquid" }],
      },
      {
        type: 'p',
        children: [{ text: "Dans la première partie de la journée, T1 a rapidement imposé son tempo face à la représentante LCS. Le Game 1 s'est conclu en seulement 26 minutes, marqué par une séquence décisive en faveur du top laner Doran : alors que Team Liquid tentait d'enchaîner un wombo combo Wukong + Yasuo ultime sur le Baron, Doran a retourné la situation et sécurisé l'Objectif Épique pour T1, scellant ainsi la victoire." }],
      },
      {
        type: 'p',
        children: [{ text: "Sur leur lancée, les champions LCK ont enchaîné avec un deuxième match maîtrisé, portant la série à 2-0. T1 affiche une domination sans équivoque sur une Team Liquid qui peine à trouver des réponses au niveau de jeu coréen. La série au meilleur des cinq manches s'est conclue en faveur de T1, qui s'empare de sa place dans le bracket du Play-In." }],
      },
      {
        type: 'h2',
        children: [{ text: "Karmine Corp vs Deep Cross Gaming : l'autre choc du jour" }],
      },
      {
        type: 'p',
        children: [{ text: "Le second match du Play-In oppose Karmine Corp, représentante européenne de la LEC, à Deep Cross Gaming, le deuxième seed LPL. KC part largement favorite dans les pronostics des fans, avec 88 % des votes en leur faveur avant la rencontre. Les Bleus ont les moyens de s'imposer, mais DCG a démontré tout au long de la saison LPL une capacité à surprendre les favoris." }],
      },
      {
        type: 'h2',
        children: [{ text: "Format Play-In : une seule équipe passera" }],
      },
      {
        type: 'p',
        children: [{ text: "Rappelons que ce Play-In est particulièrement sélectif : sur les quatre équipes engagées (T1, Team Liquid Alienware, Karmine Corp, Deep Cross Gaming), une seule rejoindra le Bracket Stage, où attendent déjà BLG, TES, Gen.G, HLE, G2 Esports et FlyQuest. La pression est donc maximale pour chaque équipe dès le premier match." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Le MSI 2026 se déroule jusqu'au 12 juillet à Daejeon. L'enjeu est simple : une seule équipe du Play-In survivra pour affronter l'élite mondiale." }],
      },
    ],
  },
  {
    title: "MSI 2026: T1 Storms Through Team Liquid on Play-In Opening Day in Daejeon",
    slug: 'msi2026-playin-day1-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "MSI 2026 kicked off on June 28 in Daejeon with T1 dominating Team Liquid Alienware in the Play-In opener. Doran's incredible Baron steal sealed Game 1 in just 26 minutes as T1 cruised to a series win.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026',
    tags: [{ tag: 'LoL' }, { tag: 'MSI' }, { tag: 'International' }, { tag: 'T1' }, { tag: 'Esports' }],
    content: [
      {
        type: 'p',
        children: [{ text: "The 2026 Mid-Season Invitational officially opened on Saturday, June 28, at the Daejeon Convention Center in South Korea. The Play-In stage — a double-elimination bracket featuring four teams — began with a statement performance from T1 against LCS representative Team Liquid Alienware." }],
      },
      {
        type: 'h2',
        children: [{ text: "T1 Takes Control with Dominant Series Win" }],
      },
      {
        type: 'p',
        children: [{ text: "T1 set the tone immediately, taking Game 1 in just 26 minutes. The highlight of the match came from top laner Doran, who turned a potentially devastating Wukong and Yasuo ultimate combo by Team Liquid into a Baron steal for T1, swinging the game entirely in the LCK representative's favor and sealing the victory." }],
      },
      {
        type: 'p',
        children: [{ text: "Building on that momentum, T1 took Game 2 with similar authority to go up 2-0 in the best-of-five series, ultimately closing it out and advancing in the Play-In bracket. Team Liquid Alienware, the LCS seed, struggled to match T1's level of play throughout the series." }],
      },
      {
        type: 'h2',
        children: [{ text: "Karmine Corp vs Deep Cross Gaming: The Day's Second Clash" }],
      },
      {
        type: 'p',
        children: [{ text: "The second match of the day pits Karmine Corp (LEC) against Deep Cross Gaming, the second LPL seed. Fans heavily favored KC going in, with 88% of the pre-match vote backing the French squad. However, DCG proved their worth in a competitive LPL season and should not be taken lightly." }],
      },
      {
        type: 'h2',
        children: [{ text: "One Spot, Four Teams: Play-In Format Explained" }],
      },
      {
        type: 'p',
        children: [{ text: "The MSI 2026 Play-In is unforgiving: only one team out of T1, Team Liquid Alienware, Karmine Corp, and Deep Cross Gaming will advance to the Bracket Stage, where BLG, TES, Gen.G, HLE, G2 Esports, and FlyQuest are already seeded and waiting." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "MSI 2026 runs from June 28 to July 12 in Daejeon, South Korea. The pressure is on — only one Play-In team will earn the right to compete against the world's elite." }],
      },
    ],
  },
  {
    title: "MSI 2026: T1 arrasa con Team Liquid en el primer día del Play-In en Daejeon",
    slug: 'msi2026-playin-day1-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "El MSI 2026 arrancó el 28 de junio en Daejeon con T1 dominando a Team Liquid Alienware en la apertura del Play-In. Doran protagonizó el momento del día con un robo de Barón que cerró el Game 1 en solo 26 minutos.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026',
    tags: [{ tag: 'LoL' }, { tag: 'MSI' }, { tag: 'Internacional' }, { tag: 'T1' }, { tag: 'Esports' }],
    content: [
      {
        type: 'p',
        children: [{ text: "El Mid-Season Invitational 2026 abrió sus puertas el sábado 28 de junio en el Daejeon Convention Center, Corea del Sur. El Play-In, que enfrenta a cuatro equipos en un bracket de doble eliminación, arrancó con todo con T1 aplastando a Team Liquid Alienware desde el primer momento." }],
      },
      {
        type: 'h2',
        children: [{ text: "T1 impone su ley desde el inicio" }],
      },
      {
        type: 'p',
        children: [{ text: "T1 no dejó lugar a dudas: el Game 1 se cerró en apenas 26 minutos, con Doran como protagonista absoluto. El top laner convirtió un wombo combo de Wukong y Yasuo de Team Liquid en un robo del Barón para su equipo, dando la vuelta a la situación y sellando la victoria de manera espectacular." }],
      },
      {
        type: 'p',
        children: [{ text: "El equipo coreano mantuvo su rendimiento en el Game 2 para ponerse 2-0 en la serie al mejor de cinco, y finalmente cerró la eliminatoria de manera convincente. Team Liquid Alienware, la representante de la LCS, no encontró respuestas al nivel de juego de T1 durante toda la serie." }],
      },
      {
        type: 'h2',
        children: [{ text: "Karmine Corp vs Deep Cross Gaming: el otro duelo del día" }],
      },
      {
        type: 'p',
        children: [{ text: "El segundo partido del día enfrenta a Karmine Corp (LEC) contra Deep Cross Gaming, el segundo seed de la LPL. Los aficionados favorecen ampliamente a los Blues, con un 88% de los votos previos a favor de KC. Sin embargo, DCG demostró su potencial durante la temporada en la LPL y no debe subestimarse." }],
      },
      {
        type: 'h2',
        children: [{ text: "Solo un clasificado: el formato del Play-In" }],
      },
      {
        type: 'p',
        children: [{ text: "El Play-In del MSI 2026 es despiadado: de los cuatro equipos — T1, Team Liquid Alienware, Karmine Corp y Deep Cross Gaming — solo uno avanzará al Bracket Stage, donde ya esperan BLG, TES, Gen.G, HLE, G2 Esports y FlyQuest." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "El MSI 2026 se celebra del 28 de junio al 12 de julio en Daejeon, Corea del Sur. Solo un equipo del Play-In tendrá el honor de competir contra la élite mundial." }],
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
