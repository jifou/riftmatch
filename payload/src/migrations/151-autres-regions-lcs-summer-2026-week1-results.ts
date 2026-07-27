import type { MigrationModule } from './runner'

export const id = '151-autres-regions-lcs-summer-2026-week1-results'
export const description = 'Autres Régions — LCS Summer 2026 : Team Liquid termine la semaine 1 invaincu, Cloud9 chute à 0-2'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-07-27T08:00:00.000Z'

const articles = [
  {
    title: "LCS Summer 2026 : Team Liquid balaie Cloud9 et referme une semaine 1 parfaite",
    slug: 'lcs-summer-2026-semaine1-team-liquid-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Le LCS Summer 2026 a démarré le 25 juillet et Team Liquid a refermé la semaine d'ouverture avec un bilan parfait de 2-0, en balayant Cloud9. De leur côté, Cloud9, FlyQuest et Dignitas ont tous débuté la saison sur une défaite.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcs',
    tags: [{ tag: 'LCS' }, { tag: 'LoL' }, { tag: 'Esports' }, { tag: 'Team Liquid' }],
    content: [
      { type: 'p', children: [{ text: "Le LCS Summer 2026 a repris ses droits le 25 juillet au format best-of-3 round-robin, et c'est Team Liquid qui referme la semaine d'ouverture en tête de classement. La franchise a conclu sa semaine 1 par un net 2-0 face à Cloud9, un succès qui lui permet d'entamer la saison estivale avec un bilan parfait." }] },
      { type: 'h2', children: [{ text: "Team Liquid balaie Cloud9 en clôture de semaine 1" }] },
      { type: 'p', children: [{ text: "Pour conclure la première semaine du Summer Split, Team Liquid s'est imposé 2-0 face à Cloud9 le 26 juillet, en 38 puis 29 minutes. Le jungler Sean \"Yeon\" Sung a livré une performance de tout premier plan sur les deux cartes, tandis que le support CoreJJ a également été salué pour son impact dans la victoire. Ce résultat porte Team Liquid à un bilan de 2-0 sur la semaine, le seul avec LYON à n'avoir concédé aucune défaite." }] },
      { type: 'h2', children: [{ text: "Une semaine 1 compliquée pour Cloud9, FlyQuest et Dignitas" }] },
      { type: 'p', children: [{ text: "À l'inverse, Cloud9 ferme la marche avec un bilan de 0-2 après cette défaite face à Team Liquid, un début de split décevant pour l'une des organisations les plus titrées du LCS. FlyQuest, qui avait ouvert la saison contre LYON dès le 25 juillet, se retrouve également à 0-2, tout comme Dignitas. Ces trois franchises devront rapidement redresser la barre pour ne pas se laisser distancer dans la course aux six places qualificatives pour les playoffs." }] },
      { type: 'h2', children: [{ text: "LYON, champion en titre, dans le rythme" }] },
      { type: 'p', children: [{ text: "LYON, tenant du titre du Spring Split et représentant du LCS au MSI 2026, a également bien lancé sa défense de couronne avec un bilan de 2-0 lors de cette première semaine. La franchise mexicaine fait donc jeu égal avec Team Liquid en tête du classement, confirmant que ces deux équipes restent les références de la région pour cet été. La semaine 2 du Summer Split débutera le 1er août." }] },
      { type: 'blockquote', children: [{ text: "Team Liquid et LYON démarrent le LCS Summer 2026 sur les chapeaux de roue, invaincus après la semaine 1." }] },
    ],
  },
  {
    title: "LCS Summer 2026: Team Liquid sweeps Cloud9 to close out a perfect Week 1",
    slug: 'lcs-summer-2026-week1-team-liquid-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "LCS Summer 2026 kicked off on July 25, and Team Liquid closed out Opening Week with a perfect 2-0 record after sweeping Cloud9. Cloud9, FlyQuest, and Dignitas all opened the season with a loss.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcs',
    tags: [{ tag: 'LCS' }, { tag: 'LoL' }, { tag: 'Esports' }, { tag: 'Team Liquid' }],
    content: [
      { type: 'p', children: [{ text: "LCS Summer 2026 returned on July 25 with its best-of-three round-robin format, and Team Liquid closed out Opening Week at the top of the standings. The franchise wrapped up Week 1 with a clean 2-0 sweep of Cloud9, giving them a perfect start to the summer split." }] },
      { type: 'h2', children: [{ text: "Team Liquid sweeps Cloud9 to close Week 1" }] },
      { type: 'p', children: [{ text: "To conclude the opening week of the Summer Split, Team Liquid defeated Cloud9 2-0 on July 26 in games lasting 38 and 29 minutes. Jungler Sean \"Yeon\" Sung delivered a standout performance across both maps, with support CoreJJ also praised for his impact in the win. The result puts Team Liquid at 2-0 for the week, alongside LYON as the only two teams without a loss." }] },
      { type: 'h2', children: [{ text: "A rough Week 1 for Cloud9, FlyQuest, and Dignitas" }] },
      { type: 'p', children: [{ text: "On the other side, Cloud9 finishes the week at 0-2 following the loss to Team Liquid, a disappointing start for one of the LCS's most decorated organizations. FlyQuest, who opened the split against LYON on July 25, also sits at 0-2, as does Dignitas. All three franchises will need to bounce back quickly to stay in contention for one of the six playoff spots." }] },
      { type: 'h2', children: [{ text: "Defending champions LYON keep pace" }] },
      { type: 'p', children: [{ text: "LYON, the reigning Spring Split champions and the LCS's representative at MSI 2026, also opened their title defense in style, finishing Week 1 at 2-0. The Mexican franchise matches Team Liquid at the top of the standings, confirming both teams as the region's benchmarks heading into the summer. Week 2 of the Summer Split begins on August 1." }] },
      { type: 'blockquote', children: [{ text: "Team Liquid and LYON open LCS Summer 2026 undefeated after Week 1." }] },
    ],
  },
  {
    title: "LCS Summer 2026: Team Liquid barre a Cloud9 y cierra una semana 1 perfecta",
    slug: 'lcs-summer-2026-semana1-team-liquid-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "El LCS Summer 2026 arrancó el 25 de julio y Team Liquid cerró la semana de apertura con un registro perfecto de 2-0 tras barrer a Cloud9. Cloud9, FlyQuest y Dignitas comenzaron la temporada con una derrota.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcs',
    tags: [{ tag: 'LCS' }, { tag: 'LoL' }, { tag: 'Esports' }, { tag: 'Team Liquid' }],
    content: [
      { type: 'p', children: [{ text: "El LCS Summer 2026 volvió el 25 de julio con su formato al mejor de tres en round-robin, y Team Liquid cerró la Semana 1 en lo más alto de la clasificación. La franquicia terminó la semana con un contundente 2-0 sobre Cloud9, un resultado que le permite arrancar la temporada de verano con un registro perfecto." }] },
      { type: 'h2', children: [{ text: "Team Liquid barre a Cloud9 para cerrar la semana 1" }] },
      { type: 'p', children: [{ text: "Para cerrar la primera semana del Summer Split, Team Liquid se impuso 2-0 ante Cloud9 el 26 de julio, en partidas de 38 y 29 minutos. El jungla Sean \"Yeon\" Sung firmó una actuación destacada en ambos mapas, mientras que el soporte CoreJJ también recibió elogios por su impacto en la victoria. Este resultado deja a Team Liquid con un registro de 2-0 en la semana, junto a LYON como los únicos equipos invictos." }] },
      { type: 'h2', children: [{ text: "Una semana 1 complicada para Cloud9, FlyQuest y Dignitas" }] },
      { type: 'p', children: [{ text: "Por el contrario, Cloud9 cierra la semana con un registro de 0-2 tras la derrota ante Team Liquid, un inicio decepcionante para una de las organizaciones más laureadas del LCS. FlyQuest, que abrió la temporada ante LYON el 25 de julio, también se queda en 0-2, al igual que Dignitas. Las tres franquicias deberán reaccionar rápido para no quedarse atrás en la carrera por una de las seis plazas de playoffs." }] },
      { type: 'h2', children: [{ text: "LYON, campeón vigente, mantiene el ritmo" }] },
      { type: 'p', children: [{ text: "LYON, campeón vigente del Spring Split y representante del LCS en el MSI 2026, también arrancó con fuerza la defensa de su corona, cerrando la Semana 1 con un 2-0. La franquicia mexicana iguala a Team Liquid en lo más alto de la tabla, confirmando a ambos equipos como la referencia de la región de cara al verano. La Semana 2 del Summer Split comenzará el 1 de agosto." }] },
      { type: 'blockquote', children: [{ text: "Team Liquid y LYON arrancan el LCS Summer 2026 invictos tras la semana 1." }] },
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
