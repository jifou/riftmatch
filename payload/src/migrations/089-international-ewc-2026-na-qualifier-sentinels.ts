import type { MigrationModule } from './runner'

export const id = '089-international-ewc-2026-na-qualifier-sentinels'
export const description = "International — EWC 2026 qualifier NA : Sentinels qualifiés 3-1 contre FlyQuest, première équipe LCS à Paris (29 avril 2026)"

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-04T08:00:00.000Z'

const articles = [
  {
    title: "EWC 2026 : Sentinels qualifiés, la LCS envoie son premier représentant à Paris",
    slug: 'ewc-2026-sentinels-qualifies-lcs-paris-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Sentinels remportent le qualifier nord-américain de l'EWC 2026 en battant FlyQuest 3-1 en grande finale, devenant la première équipe LCS à se qualifier pour Paris.",
    sourceUrl: 'https://insider-gaming.com/sentinels-qualify-esports-world-cup/',
    tags: [{tag: 'LoL'}, {tag: 'Esports'}, {tag: 'International'}, {tag: 'EWC'}, {tag: 'LCS'}],
    content: [
      {type: 'p', children: [{text: "Sentinels ont décroché leur billet pour l'Esports World Cup 2026 le 29 avril dernier, en dominant la grande finale du qualifier nord-américain face à FlyQuest sur un score de 3-1. L'organisation de San Francisco devient ainsi la première équipe LCS à confirmer sa présence au grand rendez-vous esport de l'été à Paris."}]},
      {type: 'h2', children: [{text: "Un parcours sans faute dans le bracket supérieur"}]},
      {type: 'p', children: [{text: "Sentinels ont réalisé un tournoi impressionnant, ne perdant que deux parties sur l'ensemble de la compétition. Après des victoires nettes 2-0 contre Disguised et Cloud9 dans le bracket supérieur, ils ont ensuite dominé FlyQuest 2-1 en demi-finale haute, confirmant leur statut de favoris. En grande finale, ils ont de nouveau affronté FlyQuest — remontés depuis le bracket inférieur après leur victoire sur Team Liquid — et se sont imposés 3-1 pour valider définitivement leur qualification."}]},
      {type: 'h2', children: [{text: "Une deuxième place LCS toujours en jeu"}]},
      {type: 'p', children: [{text: "La LCS dispose d'un second slot pour l'EWC 2026, qui sera attribué lors des LCS Spring Finals les 13 et 14 juin à l'ASU Mullett Arena de Tempe, Arizona. FlyQuest, Team Liquid, Cloud9 et les autres prétendants se battront pour cette dernière place nord-américaine, avec à la clé un ticket pour rejoindre Sentinels à Paris."}]},
      {type: 'blockquote', children: [{text: "L'EWC 2026 se tiendra du 6 juillet au 23 août au Paris Expo Porte de Versailles. Le tournoi LoL est programmé du 15 au 19 juillet, avec un prize pool de 2 millions de dollars pour 16 équipes représentant les six grandes régions mondiales."}]},
    ],
  },
  {
    title: "EWC 2026: Sentinels qualify, first LCS team heading to Paris",
    slug: 'ewc-2026-sentinels-qualified-lcs-paris-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Sentinels won the EWC 2026 North America qualifier by defeating FlyQuest 3-1 in the grand final, becoming the first LCS team to secure a spot in Paris.",
    sourceUrl: 'https://insider-gaming.com/sentinels-qualify-esports-world-cup/',
    tags: [{tag: 'LoL'}, {tag: 'Esports'}, {tag: 'International'}, {tag: 'EWC'}, {tag: 'LCS'}],
    content: [
      {type: 'p', children: [{text: "Sentinels secured their spot at the 2026 Esports World Cup on April 29, defeating FlyQuest 3-1 in the grand final of the North American qualifier. The San Francisco organization becomes the first LCS team to confirm their presence at this summer's premier esports event in Paris."}]},
      {type: 'h2', children: [{text: "A flawless upper bracket run"}]},
      {type: 'p', children: [{text: "Sentinels ran through the tournament dropping only two games across the entire event. After clean 2-0 victories over Disguised and Cloud9 in the upper bracket, they edged FlyQuest 2-1 in the upper bracket final to cement their status as favorites. In the grand final, they faced a rematch against FlyQuest — who had fought back through the lower bracket past Team Liquid — and sealed the deal 3-1 to claim the first North American slot."}]},
      {type: 'h2', children: [{text: "A second LCS spot still up for grabs"}]},
      {type: 'p', children: [{text: "The LCS holds a second slot at EWC 2026, which will be awarded at the LCS Spring Finals on June 13-14 at ASU's Mullett Arena in Tempe, Arizona. FlyQuest, Team Liquid, Cloud9 and the other contenders will fight for the remaining North American berth to join Sentinels in Paris."}]},
      {type: 'blockquote', children: [{text: "EWC 2026 runs from July 6 to August 23 at Paris Expo Porte de Versailles. The LoL tournament is scheduled for July 15-19, with a $2 million prize pool split across 16 teams representing the world's six major regions."}]},
    ],
  },
  {
    title: "EWC 2026: Sentinels clasifican, el primer equipo LCS con destino a París",
    slug: 'ewc-2026-sentinels-clasificados-lcs-paris-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Sentinels ganan el clasificatorio norteamericano del EWC 2026 derrotando a FlyQuest 3-1 en la gran final, convirtiéndose en el primer equipo LCS en clasificarse para París.",
    sourceUrl: 'https://insider-gaming.com/sentinels-qualify-esports-world-cup/',
    tags: [{tag: 'LoL'}, {tag: 'Esports'}, {tag: 'Internacional'}, {tag: 'EWC'}, {tag: 'LCS'}],
    content: [
      {type: 'p', children: [{text: "Sentinels aseguraron su lugar en la Copa del Mundo de Esports 2026 el 29 de abril, derrotando a FlyQuest 3-1 en la gran final del clasificatorio norteamericano. La organización de San Francisco se convierte así en el primer equipo de la LCS en confirmar su presencia en el gran evento esportivo del verano en París."}]},
      {type: 'h2', children: [{text: "Un recorrido impecable en el bracket superior"}]},
      {type: 'p', children: [{text: "Sentinels atravesaron el torneo perdiendo apenas dos partidas en toda la competición. Tras victorias contundentes 2-0 sobre Disguised y Cloud9 en el bracket superior, superaron a FlyQuest 2-1 en la semifinal alta para confirmar su rol de favoritos. En la gran final, se reencontraron con FlyQuest —que había remontado desde el bracket inferior tras eliminar a Team Liquid— y se impusieron 3-1 para validar definitivamente su clasificación."}]},
      {type: 'h2', children: [{text: "Una segunda plaza LCS todavía en juego"}]},
      {type: 'p', children: [{text: "La LCS cuenta con un segundo puesto en el EWC 2026, que se decidirá en las LCS Spring Finals del 13 y 14 de junio en el ASU Mullett Arena de Tempe, Arizona. FlyQuest, Team Liquid, Cloud9 y otros contendientes lucharán por ese último cupo norteamericano para unirse a Sentinels en París."}]},
      {type: 'blockquote', children: [{text: "El EWC 2026 se celebrará del 6 de julio al 23 de agosto en el Paris Expo Porte de Versailles. El torneo de LoL está programado del 15 al 19 de julio, con un premio total de 2 millones de dólares para 16 equipos de las seis grandes regiones mundiales."}]},
    ],
  },
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const a of articles) {
    const ex = await payload.find({collection: 'news', where: {slug: {equals: a.slug}}})
    if (ex.docs.length > 0) {console.log(`→ skip ${a.slug}`); continue}
    await payload.create({collection: 'news', data: a as any})
    console.log(`✅ ${a.locale.toUpperCase()} — ${a.title}`)
  }
}
