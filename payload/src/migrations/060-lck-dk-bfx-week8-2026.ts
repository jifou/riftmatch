import type { MigrationModule } from './runner'

export const id = '060-lck-dk-bfx-week8-2026'
export const description = 'LCK 2026 — Dplus KIA s\'impose 2-0 face à BNK FEARX (semaine 8, ShowMaker + Lucid MVP)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-23T08:00:00.000Z'

const articles = [
  {
    title: 'LCK 2026 S8 : Dplus KIA domine BNK FEARX 2-0, ShowMaker et Lucid en feu',
    slug: 'dk-bfx-lck-2026-semaine-8-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/pme39ReRVaA/maxresdefault.jpg',
    excerpt: 'En semaine 8 des LCK 2026 Rounds 1-2, Dplus KIA s\'est imposé 2-0 face à BNK FEARX grâce à des performances dominantes de ShowMaker sur Ahri et Lucid sur Lee Sin.',
    sourceUrl: 'https://www.invenglobal.com/articles/21501/dplus-kia-extends-winning-streak-to-4-behind-lucid-and-showmaker',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'Dplus KIA' }, { tag: 'BNK FEARX' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Ce samedi 23 mai 2026, Dplus KIA a dominé BNK FEARX sur un score parfait de 2-0 lors de la huitième semaine des LCK 2026 Rounds 1-2. Une victoire qui porte à quatre la série de succès consécutifs de l'organisation, consolidant leur place dans la course au top 6 synonyme de qualification pour le Road to MSI." }],
      },
      {
        type: 'h2',
        children: [{ text: 'ShowMaker et Lucid, les architectes de la victoire' }],
      },
      {
        type: 'p',
        children: [{ text: 'Le mid-laner Heo "ShowMaker" Su a régné sur la carte avec son Ahri lors du second match. Décisif grâce à une roam gagnante en bot lane dès les premières minutes, il a rapidement offert un avantage décisif à son équipe. Sa mobilité et sa lecture du jeu ont rendu le plan adverse totalement inopérant, empêchant BNK FEARX de mettre en place la moindre réponse collective.' }],
      },
      {
        type: 'p',
        children: [{ text: "En game 1, c'est le jungler Choi \"Lucid\" Yong-hyeok qui a porté l'estocade sur Lee Sin. En partant d'un gank éclair à mi-partie, il a enchaîné les picks et utilisé son ultime avec une précision chirurgicale pour éjecter les carries adverses hors des combats, privant BNK FEARX de tout espace de respiration." }],
      },
      {
        type: 'h2',
        children: [{ text: 'BNK FEARX en difficulté malgré le retour de VicLa' }],
      },
      {
        type: 'p',
        children: [{ text: "Du côté de BNK FEARX, le retour du mid-laner Kim \"VicLa\" Gu-hyeon dans la composition de départ n'a pas suffi à renverser la tendance. Pointant à 5 victoires pour 10 défaites avant cette rencontre, l'équipe continue de manquer de régularité et peine à concrétiser ses avantages en phase de mid-game." }],
      },
      {
        type: 'h2',
        children: [{ text: 'La course au Road to MSI se resserre' }],
      },
      {
        type: 'p',
        children: [{ text: "Avec ce quatrième succès consécutif, Dplus KIA confirme leur montée en puissance et renforce leur candidature pour intégrer le top 6 final. La saison régulière des Rounds 1-2 approche de son terme et la lutte pour les places qualificatives s'annonce serrée jusqu'au dernier match. HLE et KT ont déjà validé leur statut de Legend Group ; DK, de leur côté, veulent s'assurer une position confortable avant les phases finales." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "DK enchaîne une quatrième victoire d'affilée : ShowMaker démontre une nouvelle fois pourquoi il reste l'un des meilleurs mid-laners de la LCK, et Lucid confirme son statut de jungler de premier plan." }],
      },
    ],
  },
  {
    title: 'LCK 2026 Week 8: Dplus KIA Sweep BNK FEARX 2-0, ShowMaker and Lucid Shine',
    slug: 'dk-bfx-lck-2026-week-8-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/pme39ReRVaA/maxresdefault.jpg',
    excerpt: 'Dplus KIA swept BNK FEARX 2-0 in Week 8 of LCK 2026 Rounds 1-2, with ShowMaker on Ahri and Lucid on Lee Sin delivering standout performances to extend their winning streak to four.',
    sourceUrl: 'https://www.invenglobal.com/articles/21501/dplus-kia-extends-winning-streak-to-4-behind-lucid-and-showmaker',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'Dplus KIA' }, { tag: 'BNK FEARX' }],
    content: [
      {
        type: 'p',
        children: [{ text: "On Saturday, May 23, 2026, Dplus KIA secured a commanding 2-0 sweep over BNK FEARX in Week 8 of the LCK 2026 Rounds 1-2. The result extended DK's winning streak to four consecutive matches, strengthening their position in the race for a top-6 finish and a Road to MSI qualification spot." }],
      },
      {
        type: 'h2',
        children: [{ text: 'ShowMaker and Lucid Lead the Way' }],
      },
      {
        type: 'p',
        children: [{ text: "Mid-laner Heo \"ShowMaker\" Su put on a clinic on Ahri during Game 2, roaming to the bot lane early for a kill that immediately opened up the map for DK. His assassin mechanics and superior vision control left BNK FEARX's composition with no viable answer throughout the mid-game, and the game was effectively over before the first major objective spawned." }],
      },
      {
        type: 'p',
        children: [{ text: "In Game 1, jungler Choi \"Lucid\" Yong-hyeok on Lee Sin was the standout performer. A well-timed mid-game gank ignited DK's snowball, and Lucid kept piling on with precise Dragon Kick ultimates that displaced FEARX's carries in every team fight, denying them any opportunity to stage a comeback." }],
      },
      {
        type: 'h2',
        children: [{ text: "BNK FEARX Struggles Despite VicLa's Return" }],
      },
      {
        type: 'p',
        children: [{ text: "BNK FEARX entered the match with mid-laner Kim \"VicLa\" Gu-hyeon back in the starting lineup, but the change failed to spark the team's performance. Sitting at 5 wins and 10 losses heading into Saturday, FEARX continue to struggle with consistency and converting early leads into match victories against higher-caliber opponents." }],
      },
      {
        type: 'h2',
        children: [{ text: 'DK Eyes Road to MSI Qualification' }],
      },
      {
        type: 'p',
        children: [{ text: "Dplus KIA's recent form represents their best run of the split, and this fourth straight win places them firmly in contention for a top-6 finish as the regular season nears its conclusion. With HLE and KT already locked into Legend Group status, the competition for the remaining spots is fierce. DK's momentum arriving at the final stretch could prove decisive." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "DK's four-match winning streak is a testament to ShowMaker's consistency and Lucid's explosive playmaking — the duo is making a strong case for DK's place in the Road to MSI." }],
      },
    ],
  },
  {
    title: 'LCK 2026 Semana 8: Dplus KIA vence a BNK FEARX 2-0, ShowMaker y Lucid brillan',
    slug: 'dk-bfx-lck-2026-semana-8-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/pme39ReRVaA/maxresdefault.jpg',
    excerpt: 'Dplus KIA derrotó a BNK FEARX 2-0 en la semana 8 de LCK 2026 Rounds 1-2, con actuaciones destacadas de ShowMaker en Ahri y Lucid en Lee Sin que extienden la racha ganadora a cuatro.',
    sourceUrl: 'https://www.invenglobal.com/articles/21501/dplus-kia-extends-winning-streak-to-4-behind-lucid-and-showmaker',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'Dplus KIA' }, { tag: 'BNK FEARX' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'Este sábado 23 de mayo de 2026, Dplus KIA dominó a BNK FEARX con un contundente 2-0 en la octava semana de las LCK 2026 Rounds 1-2. La victoria extiende la racha ganadora del equipo a cuatro partidos consecutivos, reforzando su candidatura para terminar en el top 6 y clasificarse para el Road to MSI.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'ShowMaker y Lucid, figuras del partido' }],
      },
      {
        type: 'p',
        children: [{ text: 'El mid-laner Heo "ShowMaker" Su fue determinante con su Ahri en la segunda partida, ejecutando un roam decisivo al bot lane en los primeros compases del juego que abrió el mapa para Dplus KIA. Su dominio mecánico y su lectura del juego dejaron sin respuesta a la composición de BNK FEARX durante toda la fase media.' }],
      },
      {
        type: 'p',
        children: [{ text: 'En la primera partida, el jungla Choi "Lucid" Yong-hyeok brilló sobre Lee Sin. Un gank explosivo a mitad de partida desencadenó la ventaja de DK, y Lucid mantuvo la presión con patadas perfectas que desplazaron a los carries rivales en cada teamfight, negándoles cualquier posibilidad de reacción.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'BNK FEARX sin respuesta pese al regreso de VicLa' }],
      },
      {
        type: 'p',
        children: [{ text: 'BNK FEARX contó con el regreso al equipo titular del mid-laner Kim "VicLa" Gu-hyeon, pero el cambio no fue suficiente para revertir la situación. Con un balance de 5 victorias y 10 derrotas antes del sábado, FEARX sigue sin encontrar la regularidad necesaria para competir contra los mejores equipos del campeonato.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'DK en la carrera por el Road to MSI' }],
      },
      {
        type: 'p',
        children: [{ text: 'La reciente forma de Dplus KIA es la mejor del split, y esta cuarta victoria consecutiva los sitúa como candidatos firmes al top 6 mientras se acerca el final de la temporada regular. Con HLE y KT ya asegurados en el Legend Group, la competencia por los puestos restantes es intensa. El impulso de DK puede ser decisivo en las últimas semanas de Rounds 1-2.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'La racha de cuatro victorias de DK demuestra la consistencia de ShowMaker y el potencial explosivo de Lucid: el dúo refuerza la ambición de Dplus KIA de llegar al Road to MSI.' }],
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
