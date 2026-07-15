import type { MigrationModule } from './runner'

export const id = '145-riot-patchnote-26-14'
export const description = 'RIOT — Patch 26.14 : buffs Corki, nerfs Locke, fixes Azir et arrivée des skins T1 Worlds 2025'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-07-15T08:00:00.000Z'
const COVER = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg'
const SOURCE = 'https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-14-notes/'

const articles = [
  {
    title: "Patch 26.14 : Corki buffé, Locke nerfé et les skins T1 Worlds 2025 débarquent",
    slug: 'patch-26-14-corki-locke-t1-skins-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Le patch 26.14 est disponible ce 15 juillet 2026. Au menu : des buffs pour Corki en bot lane, des nerfs ciblés sur Locke après son ascension fulgurante, des fixes de bugs qui boostent Azir, et l'arrivée tant attendue des skins T1 Worlds 2025.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Patch Notes' }, { tag: 'Équilibrage' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Riot Games a déployé le patch 26.14 ce 15 juillet 2026. Cette mise à jour se concentre sur l'équilibrage des champions plutôt que sur de grosses nouveautés systémiques, avec des ajustements notables pour Corki, Locke et Azir, ainsi que le lancement très attendu des skins Championship T1 Worlds 2025." }],
      },
      {
        type: 'h2',
        children: [{ text: "Corki renforcé en bot lane" }],
      },
      {
        type: 'p',
        children: [{ text: "Corki peine à s'imposer en bot lane depuis plusieurs patchs. Riot lui redonne du répondant en fin de partie en musclant sa fantaisie de tissage de sorts autour de ses missiles : la réduction du temps de recharge restant sur ses attaques de base passe d'une fourchette de 2-4 secondes à 2-6 secondes, ce qui lui permet d'enchaîner ses sorts bien plus rapidement en late game." }],
      },
      {
        type: 'h2',
        children: [{ text: "Locke recadré après son ascension" }],
      },
      {
        type: 'p',
        children: [{ text: "Locke, l'Exorciste des Cendres, sorti au patch 26.13, voit sa puissance retirée aussi bien côté dégâts que côté durabilité. Les dégâts de Nail passent de 50-90 à 50-82, le bonus de dégâts de base par stack de 20-60 à 18-50, le temps de maintien du recast de Nail est réduit de 5 à 4 secondes, et le plafond de Grey Health de base tombe de 40-200 à 40-160." }],
      },
      {
        type: 'h2',
        children: [{ text: "Azir profite de corrections de bugs" }],
      },
      {
        type: 'p',
        children: [{ text: "Plutôt que des buffs directs, Azir bénéficie d'une série de corrections de bugs qui devraient sensiblement renforcer son gameplay : Scorch, Liandry's Torment, Blackfire Torch et Hextech Alternator infligent désormais 100% de leurs dégâts au contact au lieu de 50%, Conqueror applique 2 stacks au contact au lieu d'une, et Press the Attack s'applique correctement à la cible principale touchée." }],
      },
      {
        type: 'h2',
        children: [{ text: "Les skins T1 Worlds 2025 sont enfin là" }],
      },
      {
        type: 'p',
        children: [{ text: "Le patch 26.14 marque aussi l'arrivée de la collection Championship T1 Worlds 2025, bâtie autour du concept \"Ascended Warriors\". Six skins sont au programme pour Ambessa, Xin Zhao, Galio, Yunara, Seraphine et Miss Fortune. Élu MVP de la finale, Gumayusi est le seul joueur à recevoir deux cosmétiques : un skin Yunara personnalisé et un skin Prestige Miss Fortune évoquant ses trois titres mondiaux de 2023, 2024 et 2025." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Un patch d'équilibrage classique qui prépare le terrain avant le grand rendez-vous du 29 juillet : le lancement de League of Legends Classic au patch 26.15." }],
      },
    ],
  },
  {
    title: "Patch 26.14: Corki buffed, Locke nerfed, and T1 Worlds 2025 skins arrive",
    slug: 'patch-26-14-corki-locke-t1-skins-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Patch 26.14 went live on July 15, 2026, bringing bot-lane buffs to Corki, targeted nerfs to Locke after his explosive release, bug fixes that boost Azir, and the long-awaited T1 Worlds 2025 championship skins.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Patch Notes' }, { tag: 'Balance' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Riot Games rolled out patch 26.14 on July 15, 2026. This update focuses on champion balance rather than major systemic changes, with notable adjustments to Corki, Locke, and Azir, alongside the highly anticipated launch of the T1 Worlds 2025 championship skin line." }],
      },
      {
        type: 'h2',
        children: [{ text: "Corki gets a bot-lane boost" }],
      },
      {
        type: 'p',
        children: [{ text: "Corki has struggled to find his footing in bot lane over the past several patches. Riot is giving him extra firepower for later in the game by enhancing his spell-weaving missile fantasy: remaining recharge time reduction from autos moves from a 2-4 second range to 2-6 seconds, letting him chain his spells much faster in the late game." }],
      },
      {
        type: 'h2',
        children: [{ text: "Locke pulled back after a hot start" }],
      },
      {
        type: 'p',
        children: [{ text: "Locke, the Ashen Exorcist, released in patch 26.13, is losing power on both damage and durability. Nail damage drops from 50-90 to 50-82, stack base bonus damage falls from 20-60 to 18-50, Nail recast hold time is cut from 5 to 4 seconds, and base Grey Health cap shrinks from 40-200 to 40-160." }],
      },
      {
        type: 'h2',
        children: [{ text: "Azir benefits from bug fixes" }],
      },
      {
        type: 'p',
        children: [{ text: "Rather than straight buffs, Azir gets a batch of bug fixes that should meaningfully strengthen his gameplay: Scorch, Liandry's Torment, Blackfire Torch, and Hextech Alternator now deal 100% of their damage on-hit instead of 50%, Conqueror applies 2 stacks on-hit instead of 1, and Press the Attack now correctly applies to the primary target hit." }],
      },
      {
        type: 'h2',
        children: [{ text: "T1 Worlds 2025 skins finally arrive" }],
      },
      {
        type: 'p',
        children: [{ text: "Patch 26.14 also marks the arrival of the T1 Worlds 2025 Championship collection, built around the \"Ascended Warriors\" concept. Six skins are included for Ambessa, Xin Zhao, Galio, Yunara, Seraphine, and Miss Fortune. Finals MVP Gumayusi is the only player receiving two cosmetics: a personalized Yunara skin and a Prestige Miss Fortune skin honoring his three World titles from 2023, 2024, and 2025." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "A routine balance patch that sets the stage for the big date on July 29: the launch of League of Legends Classic in patch 26.15." }],
      },
    ],
  },
  {
    title: "Parche 26.14: Corki mejora, Locke se debilita y llegan las skins T1 Worlds 2025",
    slug: 'patch-26-14-corki-locke-t1-skins-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "El parche 26.14 llegó el 15 de julio de 2026 con mejoras para Corki en la línea inferior, nerfeos específicos a Locke tras su explosivo estreno, correcciones de bugs que potencian a Azir, y el esperado lanzamiento de las skins de campeonato T1 Worlds 2025.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Notas de parche' }, { tag: 'Balance' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Riot Games lanzó el parche 26.14 el 15 de julio de 2026. Esta actualización se centra en el balance de campeones más que en grandes cambios de sistema, con ajustes notables para Corki, Locke y Azir, junto al muy esperado lanzamiento de la línea de skins de campeonato T1 Worlds 2025." }],
      },
      {
        type: 'h2',
        children: [{ text: "Corki recibe un impulso en la línea inferior" }],
      },
      {
        type: 'p',
        children: [{ text: "Corki ha tenido dificultades para asentarse en la línea inferior durante varios parches. Riot le da más poder de fuego para el final de la partida potenciando su fantasía de tejer hechizos con sus misiles: la reducción del tiempo de recarga restante por ataques básicos pasa de un rango de 2-4 segundos a 2-6 segundos, permitiéndole encadenar hechizos mucho más rápido en el late game." }],
      },
      {
        type: 'h2',
        children: [{ text: "Locke se recorta tras un inicio arrollador" }],
      },
      {
        type: 'p',
        children: [{ text: "Locke, el Exorcista de Cenizas, lanzado en el parche 26.13, pierde poder tanto en daño como en durabilidad. El daño de Nail baja de 50-90 a 50-82, el daño base adicional por stack cae de 20-60 a 18-50, el tiempo de mantenimiento del recast de Nail se reduce de 5 a 4 segundos, y el límite base de Grey Health se reduce de 40-200 a 40-160." }],
      },
      {
        type: 'h2',
        children: [{ text: "Azir se beneficia de correcciones de bugs" }],
      },
      {
        type: 'p',
        children: [{ text: "En lugar de mejoras directas, Azir recibe una serie de correcciones de bugs que deberían fortalecer notablemente su juego: Scorch, Liandry's Torment, Blackfire Torch y Hextech Alternator ahora infligen el 100% de su daño al golpear en vez del 50%, Conqueror aplica 2 stacks al golpear en vez de 1, y Press the Attack ahora se aplica correctamente al objetivo principal golpeado." }],
      },
      {
        type: 'h2',
        children: [{ text: "Las skins T1 Worlds 2025 llegan por fin" }],
      },
      {
        type: 'p',
        children: [{ text: "El parche 26.14 también marca la llegada de la colección de campeonato T1 Worlds 2025, construida en torno al concepto \"Ascended Warriors\". Se incluyen seis skins para Ambessa, Xin Zhao, Galio, Yunara, Seraphine y Miss Fortune. El MVP de la final, Gumayusi, es el único jugador que recibe dos cosméticos: una skin personalizada de Yunara y una skin Prestige de Miss Fortune que homenajea sus tres títulos mundiales de 2023, 2024 y 2025." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Un parche de balance habitual que prepara el terreno para la gran cita del 29 de julio: el lanzamiento de League of Legends Classic en el parche 26.15." }],
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
