import type { MigrationModule } from './runner'

export const id = '129-lpl-split3-2026-primer'
export const description = 'LPL Split 3 2026 — Primer : 12 équipes pour les Worlds, OMG et Ultra Prime relégués, BLG triple champion en lice'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-25T08:00:00.000Z'

const articles = [
  {
    title: "LPL Split 3 2026 : 12 équipes pour les Worlds, OMG et Ultra Prime relégués",
    slug: 'lpl-split3-2026-primer-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg',
    excerpt: "Le LPL 2026 entre dans sa phase décisive : le Split 3 met aux prises 12 équipes pour les places aux Worlds 2026. Oh My God et Ultra Prime ne seront pas de la partie après leur élimination en bas de classement du Split 2.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LPL/2026/Split_3',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'Worlds' }, { tag: 'BLG' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Le LPL 2026 Split 3 — le split des Worlds — est sur le point de débuter avec 12 équipes en lice. Oh My God (OMG) et Ultra Prime (UP) ne seront pas de la partie : les deux clubs ont terminé en bas du classement du Split 2 et sont exclus de la phase finale de la saison, qui détermine les qualifiés pour les Worlds 2026." }],
      },
      {
        type: 'h2',
        children: [{ text: "BLG, triple champion et grande favorite" }],
      },
      {
        type: 'p',
        children: [{ text: "Bilibili Gaming entre dans ce Split 3 avec un statut unique : triple champion LPL consécutif. Après avoir remporté le Split 2 2026 en balayant Top Esports 3-0 en grande finale le 14 juin, BLG — composé de Bin (top), Xun (jungle), Knight (mid), Viper (ADC) et ON (support) — est la référence absolue de la scène chinoise. L'équipe est aussi engagée au MSI 2026 à Daejeon du 28 juin au 12 juillet, ce qui en fait la concurrente la plus attendue du circuit." }],
      },
      {
        type: 'h2',
        children: [{ text: "Les 12 équipes et le format" }],
      },
      {
        type: 'p',
        children: [{ text: "Les douze équipes présentes dans ce Split 3 sont : Anyone's Legend (AL), Bilibili Gaming (BLG), EDward Gaming (EDG), Invictus Gaming (IG), JD Gaming (JDG), LGD Gaming (LGD), LNG Esports (LNG), Ninjas in Pyjamas (NIP), Team WE (WE), ThunderTalk Gaming (TT), Top Esports (TES) et Weibo Gaming (WBG). Elles seront réparties en deux groupes — Group Ascend et Group Nirvana — pour la saison régulière, avant une phase playoffs en best-of-five." }],
      },
      {
        type: 'h2',
        children: [{ text: "Les enjeux : Worlds 2026 en ligne de mire" }],
      },
      {
        type: 'p',
        children: [{ text: "L'enjeu de ce Split 3 est clair : le vainqueur est sacré Season Champion et obtient une qualification directe pour les Worlds 2026. Les équipes qui terminent en bas de classement pour la seconde fois consécutive risquent quant à elles de perdre leur place dans la ligue. Top Esports, JD Gaming et Weibo Gaming, forts de leurs parcours en playoffs lors des splits précédents, seront les principaux challengers de BLG pour le titre de Season Champion." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "BLG, TES, JDG, WBG : la course aux Worlds 2026 est lancée. Le Split 3 déterminera qui représentera la Chine sur la scène mondiale." }],
      },
    ],
  },
  {
    title: "LPL Split 3 2026: 12 Teams Compete for Worlds Slots as OMG and Ultra Prime Exit",
    slug: 'lpl-split3-2026-primer-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg',
    excerpt: "The LPL 2026 enters its decisive phase: Split 3 features 12 teams battling for Worlds 2026 spots. Oh My God and Ultra Prime are out after finishing at the bottom of the Split 2 standings.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LPL/2026/Split_3',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'Worlds' }, { tag: 'BLG' }],
    content: [
      {
        type: 'p',
        children: [{ text: "The LPL 2026 Split 3 — the Worlds qualification split — is set to begin with 12 teams. Oh My God (OMG) and Ultra Prime (UP) will not be participating: both organizations finished at the bottom of the Split 2 standings and have been excluded from the final phase of the season, which determines China's representatives at the 2026 World Championship." }],
      },
      {
        type: 'h2',
        children: [{ text: "BLG: Triple Champions and Heavy Favorites" }],
      },
      {
        type: 'p',
        children: [{ text: "Bilibili Gaming enters Split 3 as three-time consecutive LPL champions. After sweeping Top Esports 3-0 in the Split 2 Grand Final on June 14, BLG — featuring Bin (top), Xun (jungle), Knight (mid), Viper (ADC), and ON (support) — stands as the undisputed benchmark of the Chinese competitive scene. The squad is also competing at MSI 2026 in Daejeon from June 28 to July 12, making them the most watched team heading into the second half of the season." }],
      },
      {
        type: 'h2',
        children: [{ text: "The 12 Teams and Format" }],
      },
      {
        type: 'p',
        children: [{ text: "The twelve participating teams are: Anyone's Legend (AL), Bilibili Gaming (BLG), EDward Gaming (EDG), Invictus Gaming (IG), JD Gaming (JDG), LGD Gaming (LGD), LNG Esports (LNG), Ninjas in Pyjamas (NIP), Team WE (WE), ThunderTalk Gaming (TT), Top Esports (TES), and Weibo Gaming (WBG). They will be split into Group Ascend and Group Nirvana for the regular season, followed by a best-of-five playoff bracket." }],
      },
      {
        type: 'h2',
        children: [{ text: "What's at Stake: Worlds 2026" }],
      },
      {
        type: 'p',
        children: [{ text: "The stakes are clear: the Split 3 champion is crowned LPL Season Champion and earns a direct berth to Worlds 2026. Teams that finish at the bottom of the standings risk losing their league spot for a second consecutive time. Top Esports, JD Gaming, and Weibo Gaming — all strong playoff performers in previous splits — are expected to be the main challengers to BLG for the Season Champion title." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "BLG, TES, JDG, WBG: the race for Worlds 2026 is on. Split 3 will decide who carries China's flag on the world stage." }],
      },
    ],
  },
  {
    title: "LPL Split 3 2026: 12 equipos por los Worlds, OMG y Ultra Prime relegados",
    slug: 'lpl-split3-2026-primer-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg',
    excerpt: "El LPL 2026 entra en su fase decisiva: el Split 3 enfrenta a 12 equipos por los puestos en los Worlds 2026. Oh My God y Ultra Prime quedan fuera tras terminar en el fondo de la clasificación del Split 2.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LPL/2026/Split_3',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'Worlds' }, { tag: 'BLG' }],
    content: [
      {
        type: 'p',
        children: [{ text: "El LPL 2026 Split 3 — el split de clasificación para los Worlds — está a punto de comenzar con 12 equipos. Oh My God (OMG) y Ultra Prime (UP) no estarán presentes: ambas organizaciones terminaron en el fondo de la clasificación del Split 2 y han sido excluidas de la fase final de la temporada, que determina los representantes de China en el Campeonato Mundial 2026." }],
      },
      {
        type: 'h2',
        children: [{ text: "BLG: Triple campeones y grandes favoritos" }],
      },
      {
        type: 'p',
        children: [{ text: "Bilibili Gaming entra en el Split 3 como triple campeón consecutivo de la LPL. Tras barrer a Top Esports 3-0 en la Gran Final del Split 2 el 14 de junio, BLG — con Bin (top), Xun (jungla), Knight (mid), Viper (ADC) y ON (support) — es la referencia absoluta de la escena china. El equipo también participa en el MSI 2026 en Daejeon del 28 de junio al 12 de julio, lo que los convierte en el conjunto más observado de cara a la segunda mitad de la temporada." }],
      },
      {
        type: 'h2',
        children: [{ text: "Los 12 equipos y el formato" }],
      },
      {
        type: 'p',
        children: [{ text: "Los doce equipos participantes son: Anyone's Legend (AL), Bilibili Gaming (BLG), EDward Gaming (EDG), Invictus Gaming (IG), JD Gaming (JDG), LGD Gaming (LGD), LNG Esports (LNG), Ninjas in Pyjamas (NIP), Team WE (WE), ThunderTalk Gaming (TT), Top Esports (TES) y Weibo Gaming (WBG). Se dividirán en Group Ascend y Group Nirvana para la temporada regular, seguida de una fase playoff en best-of-five." }],
      },
      {
        type: 'h2',
        children: [{ text: "Lo que está en juego: los Worlds 2026" }],
      },
      {
        type: 'p',
        children: [{ text: "El objetivo es claro: el campeón del Split 3 es proclamado Season Champion de la LPL y obtiene una plaza directa para los Worlds 2026. Los equipos que terminen en los últimos puestos del clasificatorio arriesgan perder su lugar en la liga por segunda vez consecutiva. Top Esports, JD Gaming y Weibo Gaming — destacados en playoffs en splits anteriores — serán los principales aspirantes al título de Season Champion frente a BLG." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "BLG, TES, JDG, WBG: la carrera por los Worlds 2026 está en marcha. El Split 3 decidirá quién lleva la bandera de China al escenario mundial." }],
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
