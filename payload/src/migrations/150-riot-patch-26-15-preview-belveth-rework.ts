import type { MigrationModule } from './runner'

export const id = '150-riot-patch-26-15-preview-belveth-rework'
export const description = "RIOT — Aperçu du patch 26.15 : refonte de Bel'Veth, nouveaux nerfs pour Locke et Riven"

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-07-24T08:00:00.000Z'
const COVER = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_0.jpg'
const SOURCE = 'https://www.leagueoflegends.com/en-us/news/game-updates/'

const articles = [
  {
    title: "Aperçu du patch 26.15 : Bel'Veth refondue, Locke et Riven nerfés avant le 29 juillet",
    slug: 'patch-26-15-apercu-belveth-refonte-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Riot Games dévoile les grandes lignes du patch 26.15, attendu le 29 juillet en même temps que League of Legends Classic. Au programme : une refonte en profondeur de Bel'Veth, de nouveaux nerfs pour Locke et Riven, et des ajustements pour Mordekaiser et Naafiri.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Patch Notes' }, { tag: "Bel'Veth" }],
    content: [
      {
        type: 'p',
        children: [{ text: "À cinq jours du lancement du patch 26.15, prévu le 29 juillet 2026 en même temps que League of Legends Classic, Riot Games a communiqué les grandes lignes de la mise à jour à venir. Le morceau central du patch est une refonte numérique complète de Bel'Veth, accompagnée de nouveaux nerfs pour Locke et Riven." }],
      },
      {
        type: 'h2',
        children: [{ text: "Bel'Veth réorientée vers le late game" }],
      },
      {
        type: 'p',
        children: [{ text: "Quasiment chaque statistique de base, chaque courbe de progression et chaque sort de Bel'Veth reçoit un ajustement chiffré. L'objectif de Riot est de l'éloigner de son profil dominant en invade dès le début de partie pour en faire une carry de scaling plus classique. Ses statistiques de base sont sensiblement réduites, en échange d'un potentiel de montée en puissance plus élevé en fin de partie. Son Q à bas niveau fonctionnera davantage comme un sort de duel classique à faible temps de recharge, limitant sa capacité à mettre certains champions hors jeu dès l'invade. Autre changement marquant : sa forme empuissantée devient de durée infinie une fois le niveau 16 atteint." }],
      },
      {
        type: 'h2',
        children: [{ text: "Locke et Riven encore recadrés" }],
      },
      {
        type: 'p',
        children: [{ text: "Locke, déjà nerfé au patch 26.14, subit une nouvelle vague d'ajustements après être resté oppressant dans les rangs intermédiaires. Riven fait également l'objet de nerfs ciblés. Mordekaiser voit sa puissance recadrée après que de précédents changements l'ont rendu quasiment insubmersible une fois son ultime activé, tandis que Naafiri complète la liste des champions revus à la baisse." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Un aperçu d'équilibrage conséquent qui précède de cinq jours seulement le grand rendez-vous du 29 juillet : le lancement conjoint du patch 26.15 et de League of Legends Classic." }],
      },
    ],
  },
  {
    title: "Patch 26.15 preview: Bel'Veth reworked, Locke and Riven nerfed ahead of July 29",
    slug: 'patch-26-15-preview-belveth-rework-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Riot Games has previewed the headline changes coming in patch 26.15, due July 29 alongside League of Legends Classic. The centerpiece is a full numbers rework for Bel'Veth, plus fresh nerfs for Locke and Riven and adjustments to Mordekaiser and Naafiri.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Patch Notes' }, { tag: "Bel'Veth" }],
    content: [
      {
        type: 'p',
        children: [{ text: "Five days ahead of patch 26.15, set to launch on July 29, 2026 alongside League of Legends Classic, Riot Games has previewed the update's headline changes. The centerpiece is a full numbers rework for Bel'Veth, paired with fresh nerfs for Locke and Riven." }],
      },
      {
        type: 'h2',
        children: [{ text: "Bel'Veth reshaped toward late-game scaling" }],
      },
      {
        type: 'p',
        children: [{ text: "Nearly every base stat, stat growth, and ability in Bel'Veth's kit is getting a numbers change. Riot's goal is to move her away from her dominant early-game invade pattern into a more traditional scaling carry. Her base stats are being pulled down significantly in exchange for stronger late-game scaling potential. At early levels, her Q will function more like a regular dueling ability with a lower cooldown, curbing how hard she can put opponents behind through early invades. The other headline change is that her empowered form now lasts indefinitely once she hits level 16." }],
      },
      {
        type: 'h2',
        children: [{ text: "Locke and Riven pulled back again" }],
      },
      {
        type: 'p',
        children: [{ text: "Locke, already nerfed in patch 26.14, is getting another round of adjustments after remaining oppressive in mid-tier ranks. Riven is also facing targeted nerfs. Mordekaiser is being toned down after earlier changes left him nearly unkillable once his ultimate is active, while Naafiri rounds out the list of champions losing power." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "A hefty balance preview landing just five days before the big date: the joint launch of patch 26.15 and League of Legends Classic on July 29." }],
      },
    ],
  },
  {
    title: "Adelanto del parche 26.15: Bel'Veth se rediseña, Locke y Riven reciben nuevos nerfeos antes del 29 de julio",
    slug: 'patch-26-15-adelanto-belveth-rediseno-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Riot Games adelantó los principales cambios del parche 26.15, previsto para el 29 de julio junto a League of Legends Classic. El plato fuerte es un rediseño numérico completo de Bel'Veth, junto a nuevos nerfeos para Locke y Riven, además de ajustes para Mordekaiser y Naafiri.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Notas de parche' }, { tag: "Bel'Veth" }],
    content: [
      {
        type: 'p',
        children: [{ text: "A cinco días del lanzamiento del parche 26.15, previsto para el 29 de julio de 2026 junto a League of Legends Classic, Riot Games adelantó los principales cambios de la actualización. El plato fuerte es un rediseño numérico completo de Bel'Veth, acompañado de nuevos nerfeos para Locke y Riven." }],
      },
      {
        type: 'h2',
        children: [{ text: "Bel'Veth se reorienta hacia el late game" }],
      },
      {
        type: 'p',
        children: [{ text: "Prácticamente todas las estadísticas base, curvas de crecimiento y habilidades de Bel'Veth reciben un ajuste numérico. El objetivo de Riot es alejarla de su patrón dominante de invade en el inicio de la partida para convertirla en una carry de escalado más tradicional. Sus estadísticas base se reducen de forma notable a cambio de un mayor potencial de crecimiento en el late game. En los niveles iniciales, su Q funcionará más como una habilidad de duelo clásica con menor tiempo de reutilización, limitando cuánto puede perjudicar a sus rivales con invades tempranos. El otro cambio destacado es que su forma potenciada pasará a durar indefinidamente al alcanzar el nivel 16." }],
      },
      {
        type: 'h2',
        children: [{ text: "Locke y Riven, recortados de nuevo" }],
      },
      {
        type: 'p',
        children: [{ text: "Locke, ya nerfeado en el parche 26.14, recibe otra ronda de ajustes tras seguir siendo opresivo en los rangos intermedios. Riven también sufre nerfeos específicos. Mordekaiser se recorta tras haber quedado casi imposible de derrotar con su definitiva activa en cambios anteriores, mientras que Naafiri cierra la lista de campeones que pierden poder." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Un adelanto de balance considerable que llega solo cinco días antes de la gran cita del 29 de julio: el lanzamiento conjunto del parche 26.15 y League of Legends Classic." }],
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
