import type { MigrationModule } from './runner'

export const id = '054-other-cblol-furia-sweep-loud-playoffs'
export const description = 'Autres Régions — CBLOL 2026 Split 1 Playoffs : FURIA atomise LOUD 3-0 et file en finale du bracket supérieur'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-19T08:00:00.000Z'

const articles = [
  {
    title: 'CBLOL 2026 Split 1 Playoffs : FURIA atomise LOUD 3-0 et défie RED en finale supérieure',
    slug: 'cblol-2026-split-1-furia-sweep-loud-3-0-demis-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: 'Le 17 mai, FURIA a balayé LOUD 3-0 lors des demi-finales du bracket supérieur du CBLOL 2026 Split 1. Les Panthères s\'offrent un affrontement décisif face à RED Canids le 24 mai pour une place en grande finale.',
    sourceUrl: 'https://lolesports.com/pt-BR/leagues/cblol-brazil',
    tags: [{ tag: 'LoL' }, { tag: 'CBLOL' }, { tag: 'FURIA' }, { tag: 'Esports' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'Samedi 17 mai à la Riot Games Arena de São Paulo, FURIA a livré une leçon de League of Legends à LOUD en s\'imposant 3-0 lors du deuxième week-end de playoffs du CBLOL 2026 Split 1. Une victoire nette et sans bavure qui propulse les Panthères en finale du bracket supérieur, où elles retrouveront RED Canids Kalunga le 24 mai.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Un sweep historique contre la bête noire' }],
      },
      {
        type: 'p',
        children: [{ text: 'Sur le papier, LOUD faisait figure de test crucial pour FURIA : la franchise au lion rouge n\'avait encore jamais battu son rival en Bo5 dans l\'histoire du circuit brésilien. Cette fois, le script a été totalement réécrit. FURIA a dominé chacune des trois manches, imposant un rythme agressif dès l\'early game avec un jungler omniprésent et des laners capables de prendre les devants en 1v1. LOUD, sans réponse convaincante, n\'a jamais réussi à trouver le pick ou la composition pour renverser la tendance. Le sweep 3-0 confirme la montée en puissance de FURIA depuis le début du split.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Le bracket supérieur se dessine' }],
      },
      {
        type: 'p',
        children: [{ text: 'En remportant cette série, FURIA rejoint RED Canids Kalunga — seule organisation à avoir terminé la saison régulière avec une invincibilité avant d\'être battue par les Panthères elles-mêmes. La finale du bracket supérieur du 24 mai s\'annonce comme un véritable choc au sommet du CBLOL, avec à la clé une place directe en grande finale. De son côté, LOUD bascule dans le bracket inférieur pour tenter de survivre et se frayer un chemin vers la remontée.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Le reste du tableau et les enjeux' }],
      },
      {
        type: 'p',
        children: [{ text: 'Plus tôt dans le tableau, Fluxo W7M avait également validé sa qualification en battant Los Grandes 3-2 le 10 mai, dans une série intense que cody et ses coéquipiers ont su retourner à leur avantage. La compétition entre dans sa phase décisive : les équipes éliminées en demi-finale de bracket inférieur quittent le Split 1 sans qualification pour la suite. Les deux finalistes du Split 1 décrocheront leur ticket pour les EWC 2026 et contribueront à la représentation brésilienne à l\'international.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'FURIA a prouvé le 17 mai qu\'elle est la meilleure équipe du Brésil en ce moment — un sweep 3-0 contre LOUD qui efface toutes les statistiques défavorables des années précédentes et lance les Panthères en grand favori pour la finale du Split 1.' }],
      },
    ],
  },
  {
    title: 'CBLOL 2026 Split 1 Playoffs: FURIA sweeps LOUD 3-0, faces RED Canids in upper bracket final',
    slug: 'cblol-2026-split-1-furia-sweep-loud-3-0-semis-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: 'On May 17, FURIA dismantled LOUD 3-0 in the upper bracket semifinals of the CBLOL 2026 Split 1 playoffs. The Panthers now face RED Canids Kalunga on May 24 for a direct spot in the grand final.',
    sourceUrl: 'https://lolesports.com/pt-BR/leagues/cblol-brazil',
    tags: [{ tag: 'LoL' }, { tag: 'CBLOL' }, { tag: 'FURIA' }, { tag: 'Esports' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'On Saturday, May 17 at the Riot Games Arena in São Paulo, FURIA delivered a dominant performance against LOUD, sweeping their rivals 3-0 in the upper bracket semifinals of the CBLOL 2026 Split 1 playoffs. The result sends FURIA into the upper bracket final on May 24, where they will face RED Canids Kalunga for a direct path to the grand final.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'A historic sweep against their greatest rival' }],
      },
      {
        type: 'p',
        children: [{ text: 'LOUD had historically been FURIA\'s nemesis in best-of-five series — the Panthers had never beaten them in a Bo5 throughout CBLOL history. That narrative changed completely on May 17. FURIA came out with relentless early aggression, a jungle presence that set the tempo across all three games, and laners who dominated their individual matchups. LOUD found no answers: no champion picks, no composition, no strategy that could slow FURIA down. The clean 3-0 sweep underlines just how much FURIA has grown over the course of this split.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Upper bracket final set for May 24' }],
      },
      {
        type: 'p',
        children: [{ text: 'FURIA now meets RED Canids Kalunga — the only team that finished the regular season with an unbeaten record before FURIA themselves handed them a loss. Their May 24 clash is shaping up to be the defining match of Brazil\'s 2026 Spring, with the winner advancing directly to the grand final. LOUD, for their part, drop into the lower bracket and will need to navigate a longer elimination path if they want to reach the championship.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Bracket context and what\'s at stake' }],
      },
      {
        type: 'p',
        children: [{ text: 'Earlier in the playoffs, Fluxo W7M also secured their spot by defeating Los Grandes 3-2 on May 10 — a gripping five-game series in which cody delivered a standout performance. The CBLOL Split 1 is now entering its decisive phase, with both finalist teams earning qualification for EWC 2026 and cementing Brazil\'s international representation for the summer.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'FURIA\'s 3-0 sweep on May 17 sent a clear message to the entire CBLOL: the Panthers are the best team in Brazil right now, and they\'re not done yet.' }],
      },
    ],
  },
  {
    title: 'CBLOL 2026 Split 1 Playoffs: FURIA arrasa a LOUD 3-0 y se cita con RED Canids en la final del bracket superior',
    slug: 'cblol-2026-split-1-furia-sweep-loud-3-0-semis-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: 'El 17 de mayo, FURIA barrió a LOUD 3-0 en las semifinales del bracket superior del CBLOL 2026 Split 1. Las Panteras se medirán a RED Canids Kalunga el 24 de mayo por un pase directo a la gran final.',
    sourceUrl: 'https://lolesports.com/pt-BR/leagues/cblol-brazil',
    tags: [{ tag: 'LoL' }, { tag: 'CBLOL' }, { tag: 'FURIA' }, { tag: 'Esports' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'El sábado 17 de mayo en el Riot Games Arena de São Paulo, FURIA ofreció una actuación dominadora ante LOUD y se impuso 3-0 en las semifinales del bracket superior de los playoffs del CBLOL 2026 Split 1. La victoria manda a las Panteras a la final del bracket superior el 24 de mayo, donde se enfrentarán a RED Canids Kalunga por un pase directo a la gran final del torneo.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Un sweep histórico ante su mayor rival' }],
      },
      {
        type: 'p',
        children: [{ text: 'LOUD había sido históricamente la pesadilla de FURIA en las series al mejor de cinco: las Panteras jamás habían vencido a su rival en un Bo5 a lo largo de la historia del CBLOL. Ese guión cambió radicalmente el 17 de mayo. FURIA salió con una agresividad asfixiante desde el early game, un jungla omnipresente que marcó el ritmo en los tres mapas y unos laners capaces de dominar sus enfrentamientos individuales. LOUD no encontró respuesta: ni en los picks, ni en las composiciones, ni en la estrategia. El 3-0 limpio confirma la enorme progresión de FURIA a lo largo de este split.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Final del bracket superior el 24 de mayo' }],
      },
      {
        type: 'p',
        children: [{ text: 'FURIA se cita ahora con RED Canids Kalunga, el único equipo que terminó la fase regular invicto hasta que las propias Panteras les dieron su primera derrota del split. El duelo del 24 de mayo se perfila como el partido más importante del CBLOL en lo que llevamos de 2026: quien gane avanzará directamente a la gran final. LOUD, por su parte, cae al bracket inferior y deberá ganar una serie más para mantenerse viva y trazar un camino más largo hacia el título.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Contexto del bracket y lo que está en juego' }],
      },
      {
        type: 'p',
        children: [{ text: 'En una fase anterior del torneo, Fluxo W7M también había sellado su clasificación derrotando a Los Grandes 3-2 el 10 de mayo en una vibrante serie de cinco partidas en la que cody fue el gran protagonista. El CBLOL Split 1 entra ahora en su tramo decisivo: los dos finalistas se clasificarán para los EWC 2026 y representarán a Brasil en el circuito internacional de verano.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'El sweep 3-0 de FURIA el 17 de mayo lanzó un mensaje inequívoco a todo el CBLOL: las Panteras son el mejor equipo de Brasil en este momento, y aún no han terminado.' }],
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
