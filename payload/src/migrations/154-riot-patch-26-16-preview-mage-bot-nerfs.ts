import type { MigrationModule } from './runner'

export const id = '154-riot-patch-26-16-preview-mage-bot-nerfs'
export const description = 'RIOT — Aperçu du patch 26.16 : Riot muscle les ADC et freine les mages bot lane'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-03T08:00:00.000Z'
const COVER = ''
const SOURCE = 'https://www.leagueoflegends.com/en-us/news/game-updates/'

const articles = [
  {
    title: 'Aperçu du patch 26.16 : Riot muscle les ADC et freine les mages en bot lane',
    slug: 'patch-26-16-apercu-mages-bot-lane-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt:
      "Riot Games a dévoilé les grandes lignes du patch 26.16, attendu le 12 août. Le lead gameplay designer Matt « Phroxzon » Leung-Harrison détaille des buffs pour les ADC et de nouveaux freins pour les supports roamers, dans le but de faire reculer les mages en bot lane.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Patch Notes' }, { tag: 'Bot Lane' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games a communiqué les grandes lignes du patch 26.16, prévu pour le 12 août 2026. Par la voix de son lead gameplay designer Matt « Phroxzon » Leung-Harrison, le studio annonce vouloir recadrer la présence des mages en bot lane, en forte hausse depuis l'Esports World Cup et la KeSPA Cup, et qui commence désormais à déborder sur le ranked.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Un déséquilibre jugé trop marqué' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Les mages ne représentaient qu'environ 20 % des picks en bot lane au moment du MSI 2026. Riot indique apprécier cette diversité de picks, mais juge que la bascule est allée trop loin dans l'autre sens : le studio souhaite avant tout préserver le rôle des ADC classiques comme carry prioritaire de la lane.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Supports roamers pénalisés, ADC renforcés' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Concrètement, la pénalité d'or et d'expérience appliquée aux supports qui roam tôt passe de 25 % jusqu'au niveau 3 à 33 % jusqu'au niveau 5, un frein direct aux compositions mage-support agressives. En parallèle, les ADC reçoivent plusieurs coups de pouce : les Bottes du Berserker, la rune Prise de guerre, le sort Soin et la résistance magique de base des tireurs sont tous buffés.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Un aperçu d'équilibrage ciblé sur un seul objectif : redonner de l'air aux ADC en bot lane, dix jours avant le déploiement du patch 26.16 le 12 août.",
          },
        ],
      },
    ],
  },
  {
    title: 'Patch 26.16 preview: Riot buffs ADCs and reins in mage bot lane meta',
    slug: 'patch-26-16-preview-mage-bot-lane-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt:
      "Riot Games has previewed patch 26.16, due August 12. Lead gameplay designer Matt \"Phroxzon\" Leung-Harrison outlined ADC buffs and new penalties for roaming supports, aimed at reining in the rising mage bot lane meta.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Patch Notes' }, { tag: 'Bot Lane' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games has previewed the headline changes coming in patch 26.16, set to launch on August 12, 2026. Lead gameplay designer Matt \"Phroxzon\" Leung-Harrison says the studio wants to rein in mage presence in the bot lane, a trend that accelerated through the Esports World Cup and the KeSPA Cup and has now started spilling into ranked play.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'A swing Riot sees as too far' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Mages made up only around 20 percent of bot lane picks going into MSI 2026. Riot says it likes mages being viable in the role, but views the current swing as excessive, and wants to keep traditional ADCs as the primary carry class in the lane.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Roaming supports penalized, ADCs buffed' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Concretely, the gold and experience penalty for supports who roam early is rising from 25 percent until level 3 to 33 percent until level 5, a direct hit to aggressive mage-support pairings. On the other side, ADCs are getting several buffs: Berserker's Greaves, the Fleet Footwork rune, the Heal summoner spell, and base ADC magic resistance are all being increased.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'A tightly scoped balance preview with one goal: give ADCs breathing room in the bot lane, ten days before patch 26.16 lands on August 12.',
          },
        ],
      },
    ],
  },
  {
    title: 'Adelanto del parche 26.16: Riot refuerza a los ADC y frena a los magos en la línea inferior',
    slug: 'patch-26-16-adelanto-magos-bot-lane-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt:
      'Riot Games adelantó los cambios principales del parche 26.16, previsto para el 12 de agosto. El lead gameplay designer Matt "Phroxzon" Leung-Harrison detalló mejoras para los ADC y nuevas penalizaciones para los soportes roamers, buscando frenar el auge de los magos en la línea inferior.',
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Notas de parche' }, { tag: 'Bot Lane' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Riot Games adelantó los principales cambios del parche 26.16, previsto para el 12 de agosto de 2026. El lead gameplay designer Matt "Phroxzon" Leung-Harrison explicó que el estudio busca frenar la presencia de los magos en la línea inferior, una tendencia que se aceleró durante la Esports World Cup y la KeSPA Cup y que ya empieza a notarse en el ranked.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Un desequilibrio que Riot considera excesivo' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Los magos representaban apenas un 20 % de los picks en la línea inferior antes del MSI 2026. Riot afirma que le gusta que los magos sean viables en ese rol, pero considera que el desequilibrio actual es excesivo y quiere mantener a los ADC tradicionales como la carry principal de la línea.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Soportes roamers penalizados, ADC reforzados' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'En concreto, la penalización de oro y experiencia para los soportes que hacen roam temprano sube del 25 % hasta el nivel 3 al 33 % hasta el nivel 5, un golpe directo a las parejas mago-soporte agresivas. Por otro lado, los ADC reciben varias mejoras: las Botas del Berserker, la runa Ímpetu de guerra, el hechizo Curar y la resistencia mágica base de los tiradores aumentan.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Un adelanto de balance con un solo objetivo: darle aire a los ADC en la línea inferior, diez días antes de la llegada del parche 26.16 el 12 de agosto.',
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
