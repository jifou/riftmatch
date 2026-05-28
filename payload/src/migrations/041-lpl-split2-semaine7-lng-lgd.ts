import type { MigrationModule } from './runner'

export const id = '041-lpl-split2-semaine7-lng-lgd'
export const description = 'LPL Split 2 2026 — Semaine 7 : LNG vs LGD, duel décisif pour la tête du groupe Nirvana'

const DATE = '2026-05-14T08:00:00.000Z'
const COVER = 'https://img.youtube.com/vi/5AU4mra548o/maxresdefault.jpg'

const articles = [
  {
    title: 'LPL Split 2 2026 : LNG Esports et LGD Gaming s\'affrontent pour la tête du groupe Nirvana',
    slug: 'lpl-2026-split2-semaine7-lng-lgd-nirvana-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: 'En cette semaine 7 décisive, LNG Esports et LGD Gaming se disputent la tête du groupe Nirvana à égalité de bilan (3-1), tandis que Bilibili Gaming domine le groupe Ascend.',
    sourceUrl: 'https://lolesports.com/tournament/113503620829714518',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'LNG Esports' }, { tag: 'LGD Gaming' }],
    content: [
      { type: 'p', children: [{ text: 'La saison régulière de la LPL 2026 Split 2 entre dans sa dernière ligne droite. Ce jeudi 14 mai, le match le plus attendu oppose LNG Esports à LGD Gaming, deux formations à égalité parfaite en tête du groupe Nirvana avec un bilan de 3 victoires pour 1 défaite.' }] },
      { type: 'h2', children: [{ text: 'LNG favori mais LGD combatif' }] },
      { type: 'p', children: [{ text: "LNG Esports aborde cette confrontation en position de force : l'équipe de Suzhou mène le face-à-face 2-0 cette saison et a su imposer un jeu solide tout au long du split. Cependant, LGD Gaming ne s'est pas qualifié en tête du groupe Nirvana par hasard. L'équipe a multiplié les performances convaincantes et rêve d'arracher la première seed pour aborder les play-ins avec un maximum d'avantage." }] },
      { type: 'h2', children: [{ text: 'Le groupe Ascend sous la domination de BLG' }] },
      { type: 'p', children: [{ text: "Du côté du groupe Ascend, Bilibili Gaming confirme sa domination avec un bilan de 10-2, fruit d'une saison exceptionnelle couronnée par le titre du First Stand 2026. JD Gaming (8-4) et Top Esports (8-5) occupent les places de qualification directe aux playoffs, suivis d'Anyone's Legend (7-5). Ces quatre équipes évitent les play-ins et attendent leurs adversaires directement en quarts de finale." }] },
      { type: 'h2', children: [{ text: 'Les enjeux : playoffs et MSI 2026 à la clé' }] },
      { type: 'p', children: [{ text: "Le format de la LPL 2026 Split 2 est clair : les 4 meilleures équipes du groupe Ascend se qualifient directement pour le tableau final des playoffs, tandis que les 4 meilleures du groupe Nirvana rejoignent le bas du groupe Ascend pour une phase de play-ins. Les 2 derniers du groupe Nirvana sont éliminés de la saison. Cerise sur le gâteau : les deux finalistes des playoffs LPL décrocheront leur billet pour le Mid-Season Invitational 2026, l'un des tournois internationaux les plus prestigieux du calendrier." }] },
      { type: 'h2', children: [{ text: 'Hard Fearless Draft : des stratégies inédites en playoffs' }] },
      { type: 'p', children: [{ text: "Les playoffs seront disputés avec le format \"Hard Fearless Draft\", une règle spéciale où chaque champion ne peut être sélectionné qu'une seule fois par équipe sur l'ensemble d'une série. Ce règlement impose aux équipes une profondeur de roster et une préparation stratégique poussée, promettant des matchs riches en surprises. Bilibili Gaming, JD Gaming et Top Esports sont considérés comme les favoris, mais la compétition de la LPL reste imprévisible." }] },
      { type: 'blockquote', children: [{ text: 'La semaine 7 est la dernière chance pour les équipes de solidifier leur position. LNG vs LGD est le match de la journée : le vainqueur prend la tête de groupe Nirvana et entre dans les play-ins avec un avantage certain.' }] },
    ],
  },
  {
    title: 'LPL Split 2 2026 Week 7: LNG Esports and LGD Gaming clash for Group Nirvana top seed',
    slug: 'lpl-2026-split2-week7-lng-lgd-nirvana-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: 'In this decisive Week 7 of LPL 2026 Split 2, LNG Esports and LGD Gaming face off with identical 3-1 records to determine who leads Group Nirvana heading into playoffs.',
    sourceUrl: 'https://lolesports.com/tournament/113503620829714518',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'LNG Esports' }, { tag: 'LGD Gaming' }],
    content: [
      { type: 'p', children: [{ text: 'The LPL 2026 Split 2 regular season is coming to an end. On Thursday, May 14, the most anticipated match of the day pits LNG Esports against LGD Gaming — two teams level at the top of Group Nirvana with identical 3-1 records. The winner claims the number-one seed heading into the play-in stage.' }] },
      { type: 'h2', children: [{ text: 'LNG the favorites, but LGD hungry for the top spot' }] },
      { type: 'p', children: [{ text: "LNG Esports enter this matchup as clear favorites. The Suzhou squad holds a dominant 2-0 head-to-head record against LGD this season and has consistently shown strong macro play throughout Split 2. That said, LGD Gaming have earned their position at the top of Group Nirvana and will be looking to prove that their season-long performances weren't a fluke." }] },
      { type: 'h2', children: [{ text: 'Group Ascend: BLG leads, top 4 nearly locked in' }] },
      { type: 'p', children: [{ text: "In Group Ascend, Bilibili Gaming continues to dominate with a 10-2 record — a remarkable run following their First Stand 2026 championship. JD Gaming (8-4) and Top Esports (8-5) hold playoff direct spots, joined by Anyone's Legend (7-5). These four teams skip the play-in stage and await their opponents directly in the quarter-finals bracket." }] },
      { type: 'h2', children: [{ text: 'MSI 2026 qualification on the line' }] },
      { type: 'p', children: [{ text: 'The playoff format sees the top 4 of Group Ascend earn direct playoff entry, while the bottom 4 of Group Ascend and the top 4 of Group Nirvana compete in a play-in stage. The bottom 2 of Group Nirvana are eliminated from LPL 2026 entirely. Most importantly, the two finalists of LPL Split 2 playoffs will qualify for the 2026 Mid-Season Invitational, making every seeding point critical.' }] },
      { type: 'h2', children: [{ text: 'Hard Fearless Draft adds strategic depth to playoffs' }] },
      { type: 'p', children: [{ text: 'Playoffs will be played under the "Hard Fearless Draft" ruleset, where each champion can only be selected once per team over the entire series. This format demands roster depth and creative preparation from coaching staffs, and is expected to produce unpredictable, high-quality series. BLG, JDG, and TES are considered the top playoff contenders.' }] },
      { type: 'blockquote', children: [{ text: 'Week 7 is the final opportunity for teams to cement their standings. LNG vs LGD is the match of the day: the winner leads Group Nirvana and enters the play-ins with a critical seeding advantage.' }] },
    ],
  },
  {
    title: 'LPL Split 2 2026 Semana 7: LNG Esports y LGD Gaming luchan por la cabeza del grupo Nirvana',
    slug: 'lpl-2026-split2-semana7-lng-lgd-nirvana-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: 'En la Semana 7 decisiva de la LPL 2026 Split 2, LNG Esports y LGD Gaming se enfrentan con récords idénticos de 3-1 para determinar quién encabeza el Grupo Nirvana de cara a los playoffs.',
    sourceUrl: 'https://lolesports.com/tournament/113503620829714518',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'LNG Esports' }, { tag: 'LGD Gaming' }],
    content: [
      { type: 'p', children: [{ text: 'La temporada regular de la LPL 2026 Split 2 llega a su recta final. Este jueves 14 de mayo, el partido más esperado enfrenta a LNG Esports con LGD Gaming, dos equipos empatados en la cima del Grupo Nirvana con registros idénticos de 3 victorias y 1 derrota. El ganador se lleva la primera posición de grupo antes de los play-ins.' }] },
      { type: 'h2', children: [{ text: 'LNG favorito, pero LGD con hambre de liderato' }] },
      { type: 'p', children: [{ text: 'LNG Esports llega a este enfrentamiento como claro favorito. El equipo de Suzhou domina el historial de la temporada con un marcador de 2-0 frente a LGD y ha demostrado un juego sólido durante todo el Split 2. Sin embargo, LGD Gaming se ha ganado su lugar en lo más alto del Grupo Nirvana con actuaciones convincentes y no tiene intención de ceder.' }] },
      { type: 'h2', children: [{ text: 'Grupo Ascend: BLG domina, el top 4 casi cerrado' }] },
      { type: 'p', children: [{ text: "En el Grupo Ascend, Bilibili Gaming sigue siendo imbatible con un balance de 10-2, fruto de una temporada excepcional que incluyó el título del First Stand 2026. JD Gaming (8-4) y Top Esports (8-5) ocupan los puestos de clasificación directa a playoffs, seguidos por Anyone's Legend (7-5). Estos cuatro equipos evitan los play-ins y esperan a sus rivales directamente en el cuadro de cuartos de final." }] },
      { type: 'h2', children: [{ text: 'La clasificación para el MSI 2026 en juego' }] },
      { type: 'p', children: [{ text: 'El formato de playoffs de la LPL 2026 Split 2 establece que el top 4 del Grupo Ascend accede directamente al bracket de playoffs, mientras que el resto del Grupo Ascend y el top 4 del Grupo Nirvana compiten en una fase play-in. Los 2 últimos del Grupo Nirvana quedan eliminados de la LPL 2026. La gran apuesta: los dos finalistas de los playoffs LPL se clasifican para el Mid-Season Invitational 2026, lo que convierte cada punto de clasificación en algo crucial.' }] },
      { type: 'h2', children: [{ text: 'Hard Fearless Draft: estrategia al máximo en playoffs' }] },
      { type: 'p', children: [{ text: 'Los playoffs se disputarán bajo el formato "Hard Fearless Draft", donde cada campeón solo puede ser seleccionado una vez por equipo a lo largo de toda la serie. Esta regla exige una gran profundidad de plantilla y una preparación estratégica exhaustiva, prometiendo partidas sorprendentes e impredecibles. BLG, JDG y TES son los principales candidatos al título.' }] },
      { type: 'blockquote', children: [{ text: 'La Semana 7 es la última oportunidad para consolidar posiciones. LNG vs LGD es el partido del día: el vencedor liderará el Grupo Nirvana y entrará en los play-ins con una ventaja clave en el sorteo.' }] },
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
