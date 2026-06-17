import type { MigrationModule } from './runner'

export const id = '118-lpl-msi2026-bracket-draw'
export const description = 'LPL — MSI 2026 : tirage du Bracket Stage révélé, BLG tête de série n°1, TES vs G2 en revanche de Worlds 2025'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-17T08:00:00.000Z'

const articles = [
  {
    title: "MSI 2026 : BLG tête de série n°1, TES défie G2 en revanche de Worlds 2025",
    slug: 'lpl-msi2026-bracket-draw-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg',
    excerpt: "Le tableau du Bracket Stage du MSI 2026 est connu : Bilibili Gaming héritera du vainqueur des Play-In, tandis que Top Esports affrontera G2 Esports en revanche directe du quart de finale de Worlds 2025. Deux équipes chinoises, deux destins opposés.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'MSI' }, { tag: 'BLG' }, { tag: 'TES' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Le tirage du Bracket Stage du MSI 2026 a été révélé. Les huit équipes directement qualifiées pour la phase principale du Mid-Season Invitational connaissent désormais leur chemin à Daejeon, et les deux représentants LPL — Bilibili Gaming (BLG) et Top Esports (TES) — héritent de parcours radicalement différents." }],
      },
      {
        type: 'h2',
        children: [{ text: "BLG tête de série n°1 : le tirage le plus doux possible" }],
      },
      {
        type: 'p',
        children: [{ text: "Grâce à leur victoire au First Stand 2026 disputé en mars à São Paulo, BLG et G2 Esports ont été placés dans le Pool 1, le rang le plus favorablement positionné du Bracket Stage. BLG, tête de série n°1, affrontera au premier tour le vainqueur des Play-In — soit T1 ou Team Liquid. C'est le chemin le plus accessible sur le papier, même si T1 reste un adversaire redoutable. Un premier round gagnable pour les champions de Chine en titre, qui arrivent à Daejeon avec trois titres LPL consécutifs dans les bagages." }],
      },
      {
        type: 'h2',
        children: [{ text: "TES vs G2 : revanche immédiate de Worlds 2025" }],
      },
      {
        type: 'p',
        children: [{ text: "Top Esports, placé dans le Pool 4 en tant que deuxième graine LPL, tombe d'emblée sur G2 Esports. Ce duel est une revanche directe de leur quart de finale à Worlds 2025. TES devra composer avec ce tirage difficile dès l'entrée en lice du Bracket Stage, prévu du 3 au 12 juillet. En face, G2 — champion du First Stand 2026 — sera en quête d'un titre international supplémentaire." }],
      },
      {
        type: 'h2',
        children: [{ text: "Le reste du tableau : HLE, LYON, FURIA, Secret Whales" }],
      },
      {
        type: 'p',
        children: [{ text: "Les quatre autres équipes du Bracket Stage se répartissent en Pool 2 (Hanwha Life Esports et LYON) contre Pool 3 (FURIA et Secret Whales). Le Bracket Stage du MSI 2026 se tiendra du 3 au 12 juillet au Daejeon Convention Center II. La grande finale est prévue le 12 juillet. Les Play-In débutent le 28 juin, avec T1 contre Team Liquid et Karmine Corp contre Deep Cross Gaming." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "BLG tête de série, TES dans le grand bain dès le premier tour : le MSI 2026 s'annonce comme un test grandeur nature pour la suprématie LPL sur la scène mondiale." }],
      },
    ],
  },
  {
    title: "MSI 2026 Bracket Stage Draw: BLG Gets Favorable Path, TES Faces G2 in Worlds 2025 Rematch",
    slug: 'lpl-msi2026-bracket-draw-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg',
    excerpt: "The MSI 2026 Bracket Stage draw is set: Bilibili Gaming will face the Play-In winner while Top Esports must battle G2 Esports — a direct rematch of their Worlds 2025 quarterfinal. Two LPL teams, two very different paths to glory.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'MSI' }, { tag: 'BLG' }, { tag: 'TES' }],
    content: [
      {
        type: 'p',
        children: [{ text: "The MSI 2026 Bracket Stage draw has been revealed. All eight teams that qualified directly for the main stage of the Mid-Season Invitational in Daejeon now know their first-round opponents, and both LPL representatives — Bilibili Gaming (BLG) and Top Esports (TES) — are facing drastically different paths." }],
      },
      {
        type: 'h2',
        children: [{ text: "BLG Seeded First: The Best Possible Draw" }],
      },
      {
        type: 'p',
        children: [{ text: "BLG and G2 Esports earned Pool 1 placement thanks to their First Stand 2026 finalists status following the March tournament in São Paulo. As the top seed in the Bracket Stage, BLG will open against the Play-In winner — either T1 or Team Liquid. While T1 is never an easy opponent, this remains the most manageable path on paper for the reigning three-time LPL champions, who arrive in Daejeon as the undisputed kings of China's competitive scene." }],
      },
      {
        type: 'h2',
        children: [{ text: "TES vs G2: Worlds 2025 Quarterfinal Rematch" }],
      },
      {
        type: 'p',
        children: [{ text: "Top Esports, placed in Pool 4 as the LPL's second seed, drew G2 Esports in the first round — a direct rematch of their Worlds 2025 quarterfinal clash. TES faces an immediate challenge as they open the Bracket Stage, which runs from July 3 to 12. G2, the First Stand 2026 champions, will be hungry to add another international title to their collection." }],
      },
      {
        type: 'h2',
        children: [{ text: "Rest of the Bracket: HLE, LYON, FURIA, Secret Whales" }],
      },
      {
        type: 'p',
        children: [{ text: "The remaining four Bracket Stage slots pit Pool 2 teams (Hanwha Life Esports and LYON) against Pool 3 opponents (FURIA and Secret Whales). The Bracket Stage at MSI 2026 takes place July 3-12 at the Daejeon Convention Center II, with the Grand Final on July 12. Play-Ins open on June 28 with T1 vs Team Liquid and Karmine Corp vs Deep Cross Gaming." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "BLG with the top seed, TES in the deep end from day one — MSI 2026 will be a true test of LPL's global dominance." }],
      },
    ],
  },
  {
    title: "MSI 2026: BLG como cabeza de serie, TES se medirá a G2 en revancha de Worlds 2025",
    slug: 'lpl-msi2026-bracket-draw-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg',
    excerpt: "Se ha revelado el cuadro del Bracket Stage del MSI 2026: Bilibili Gaming enfrentará al ganador del Play-In mientras Top Esports chocará contra G2 Esports, una revancha directa de su cuartos de Worlds 2025. Dos equipos LPL con caminos opuestos.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Mid-Season_Invitational/2026',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'MSI' }, { tag: 'BLG' }, { tag: 'TES' }],
    content: [
      {
        type: 'p',
        children: [{ text: "El sorteo del Bracket Stage del MSI 2026 ha sido revelado. Los ocho equipos clasificados directamente para la fase principal del Mid-Season Invitational en Daejeon ya conocen sus rivales de primera ronda, y los dos representantes de la LPL — Bilibili Gaming (BLG) y Top Esports (TES) — afrontan caminos radicalmente distintos." }],
      },
      {
        type: 'h2',
        children: [{ text: "BLG como cabeza de serie n°1: el emparejamiento más favorable" }],
      },
      {
        type: 'p',
        children: [{ text: "BLG y G2 Esports obtuvieron la posición de Pool 1 gracias a haber sido los finalistas del First Stand 2026 celebrado en marzo en São Paulo. Como primer cabeza de serie del Bracket Stage, BLG abrirá contra el ganador de los Play-In — ya sea T1 o Team Liquid. Aunque T1 nunca es un rival sencillo, este sigue siendo el camino más accesible sobre el papel para los tricampeones consecutivos de la LPL, que llegan a Daejeon como los reyes indiscutibles de la escena competitiva china." }],
      },
      {
        type: 'h2',
        children: [{ text: "TES vs G2: revancha del cuarto de final de Worlds 2025" }],
      },
      {
        type: 'p',
        children: [{ text: "Top Esports, situado en el Pool 4 como segundo clasificado de la LPL, ha caído ante G2 Esports en primera ronda — una revancha directa de su enfrentamiento en cuartos de final de Worlds 2025. TES deberá superar este difícil emparejamiento desde el inicio del Bracket Stage, que se disputará entre el 3 y el 12 de julio. G2, campeones del First Stand 2026, buscará sumar otro título internacional." }],
      },
      {
        type: 'h2',
        children: [{ text: "El resto del cuadro: HLE, LYON, FURIA, Secret Whales" }],
      },
      {
        type: 'p',
        children: [{ text: "Las cuatro plazas restantes del Bracket Stage enfrentan a los equipos del Pool 2 (Hanwha Life Esports y LYON) contra los del Pool 3 (FURIA y Secret Whales). El Bracket Stage del MSI 2026 se celebrará del 3 al 12 de julio en el Daejeon Convention Center II, con la Gran Final el 12 de julio. Los Play-In arrancan el 28 de junio con T1 contra Team Liquid y Karmine Corp contra Deep Cross Gaming." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "BLG como cabeza de serie número uno, TES con el sorteo más difícil desde el primer día: el MSI 2026 pondrá a prueba la supremacía de la LPL en el escenario mundial." }],
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
