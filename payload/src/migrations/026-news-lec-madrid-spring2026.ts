import type { MigrationModule } from './runner'

export const id = '026-news-lec-madrid-spring2026'
export const description = 'Article LEC Spring 2026 — Semaine 7 à Madrid, qualification playoffs'

const DISCLOSURE_DATE = '2026-05-11T10:00:00.000Z'

const articles = [
  // ── FR ─────────────────────────────────────────────────────────────────────
  {
    title: 'LEC Spring 2026 : Vitality domine, Fnatic éliminé — le bilan du Roadshow de Madrid',
    slug: 'lec-spring-2026-madrid-semaine7-bilan',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/c5b5258034a7e4c34fc360db44a5af4703ec9d9b-1920x1080.jpg',
    excerpt: 'La semaine 7 du LEC Spring Split 2026 s\'est jouée en live au Madrid Arena (8-10 mai). Team Vitality termine première, Fnatic et Team Heretics manquent les playoffs.',
    sourceUrl: 'https://lolesports.com/tournament/115548424304940735',
    tags: [
      { tag: 'LEC' }, { tag: 'Esports' }, { tag: 'Vitality' },
      { tag: 'Fnatic' }, { tag: 'Madrid' }, { tag: 'Spring 2026' },
    ],
    content: [
      {
        type: 'p',
        children: [{ text: 'La semaine 7 du LEC Spring Split 2026 s\'est déroulée en direct au Madrid Arena du 8 au 10 mai, réunissant des milliers de fans ibériques pour le dernier Roadshow de la phase régulière. Résultats, classements, qualifiés et éliminés : voici le bilan complet.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Team Vitality, reine incontestée de la saison régulière' }],
      },
      {
        type: 'p',
        children: [{ text: 'Team Vitality confirme sa domination en terminant première du classement après avoir battu Fnatic lors de cette semaine décisive. L\'équipe franco-européenne s\'impose comme la grande favorite de ces playoffs et entrera dans le bracket de l\'Upper Bracket avec l\'avantage du premier seed.' }],
      },
      {
        type: 'p',
        children: [{ text: 'Karmine Corp prend la deuxième place et valide sa qualification au MSI 2026, une première depuis plusieurs splits. Le public madrilène a particulièrement applaudi les performances de l\'organisation française, fidèle à son identité aggressive.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Les 6 qualifiés pour les playoffs' }],
      },
      {
        type: 'p',
        children: [{ text: 'Six équipes ont décroché leur ticket pour la phase finale du LEC Spring 2026 :' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: '🥇 Team Vitality — 1ère seed, Upper Bracket direct' }] },
          { type: 'li', children: [{ text: '🥈 Karmine Corp — 2ème seed' }] },
          { type: 'li', children: [{ text: '3. G2 Esports' }] },
          { type: 'li', children: [{ text: '4. Movistar KOI' }] },
          { type: 'li', children: [{ text: '5. GIANTX' }] },
          { type: 'li', children: [{ text: '6. NAVI' }] },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Fnatic et Team Heretics : la saison s\'arrête ici' }],
      },
      {
        type: 'p',
        children: [{ text: 'La grande désillusion de ce split reste l\'élimination de Fnatic. Malgré quelques sursauts en milieu de saison, la team britannique ne parvient pas à enchaîner les victoires face aux meilleures équipes. Team Heretics connaît le même sort, avec une saison décevante qui ne leur offre pas d\'accès aux playoffs.' }],
      },
      {
        type: 'p',
        children: [{ text: 'Les deux équipes se retrouveront en Summer Split pour tenter de se rebâtir et valider leur place sur la scène européenne.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Les playoffs : à suivre prochainement' }],
      },
      {
        type: 'p',
        children: [{ text: 'Le bracket playoff se dessine avec des affiches prometteuses. Team Vitality et Karmine Corp partent favoris, mais G2 Esports — jamais à court de ressources — pourrait créer la surprise. Movistar KOI, sur ses terres espagnoles, bénéficie d\'un soutien indéfectible du public local.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'Les playoffs LEC Spring 2026 sont à suivre sur lolesports.com. Le format est en double élimination avec 6 équipes.' }],
      },
    ],
  },

  // ── EN ─────────────────────────────────────────────────────────────────────
  {
    title: 'LEC Spring 2026: Vitality tops the standings, Fnatic eliminated — Madrid Roadshow recap',
    slug: 'lec-spring-2026-madrid-week7-recap-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/c5b5258034a7e4c34fc360db44a5af4703ec9d9b-1920x1080.jpg',
    excerpt: 'Week 7 of the LEC Spring Split 2026 was played live at Madrid Arena (May 8-10). Team Vitality finish first, while Fnatic and Team Heretics miss the playoffs.',
    sourceUrl: 'https://lolesports.com/tournament/115548424304940735',
    tags: [
      { tag: 'LEC' }, { tag: 'Esports' }, { tag: 'Vitality' },
      { tag: 'Fnatic' }, { tag: 'Madrid' }, { tag: 'Spring 2026' },
    ],
    content: [
      {
        type: 'p',
        children: [{ text: 'Week 7 of the LEC Spring Split 2026 took place live at the Madrid Arena from May 8 to 10, bringing thousands of Iberian fans together for the final Roadshow of the regular season. Results, standings, qualifiers and eliminations — here\'s the full recap.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Team Vitality: undisputed regular season champions' }],
      },
      {
        type: 'p',
        children: [{ text: 'Team Vitality cemented their dominance by finishing first in the standings, defeating Fnatic in a crucial matchup during the Madrid week. The European squad enters the playoffs as heavy favourites, securing a first seed and direct entry into the Upper Bracket.' }],
      },
      {
        type: 'p',
        children: [{ text: 'Karmine Corp claim second place and secure their ticket to MSI 2026 — a milestone for the organisation. The Madrid crowd gave them a warm reception despite the French rivalry with Spanish team Movistar KOI.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'The 6 playoff qualifiers' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: '🥇 Team Vitality — 1st seed' }] },
          { type: 'li', children: [{ text: '🥈 Karmine Corp — 2nd seed' }] },
          { type: 'li', children: [{ text: '3. G2 Esports' }] },
          { type: 'li', children: [{ text: '4. Movistar KOI' }] },
          { type: 'li', children: [{ text: '5. GIANTX' }] },
          { type: 'li', children: [{ text: '6. NAVI' }] },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Fnatic and Team Heretics: season over' }],
      },
      {
        type: 'p',
        children: [{ text: 'The biggest disappointment of the split is Fnatic\'s elimination. Despite showing flashes of their former self mid-season, they couldn\'t string together enough wins against top-tier competition. Team Heretics suffer the same fate, wrapping up a forgettable split outside the top 6.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Playoffs: what to expect' }],
      },
      {
        type: 'p',
        children: [{ text: 'Team Vitality and Karmine Corp are the clear favourites going into playoffs, but G2 Esports — always dangerous in a BO5 setting — could shake things up. Movistar KOI will also have home support behind them as playoffs return to an online format.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'LEC Spring 2026 Playoffs are available to watch on lolesports.com. Six teams compete in a double elimination bracket.' }],
      },
    ],
  },

  // ── ES ─────────────────────────────────────────────────────────────────────
  {
    title: 'LEC Spring 2026: Vitality lidera, Fnatic eliminado — resumen del Roadshow de Madrid',
    slug: 'lec-spring-2026-madrid-semana7-resumen-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/c5b5258034a7e4c34fc360db44a5af4703ec9d9b-1920x1080.jpg',
    excerpt: 'La semana 7 del LEC Spring Split 2026 se jugó en directo en el Madrid Arena (8-10 de mayo). Team Vitality termina primera, Fnatic y Team Heretics quedan eliminados de playoffs.',
    sourceUrl: 'https://lolesports.com/tournament/115548424304940735',
    tags: [
      { tag: 'LEC' }, { tag: 'Esports' }, { tag: 'Vitality' },
      { tag: 'Fnatic' }, { tag: 'Madrid' }, { tag: 'Spring 2026' },
    ],
    content: [
      {
        type: 'p',
        children: [{ text: 'La semana 7 del LEC Spring Split 2026 se celebró en directo en el Madrid Arena del 8 al 10 de mayo, reuniendo a miles de fans ibéricos para el último Roadshow de la fase regular. Resultados, clasificaciones, clasificados y eliminados: aquí está el resumen completo.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Team Vitality, reina de la temporada regular' }],
      },
      {
        type: 'p',
        children: [{ text: 'Team Vitality confirma su dominio terminando primera de la clasificación tras derrotar a Fnatic en esta semana decisiva. El equipo europeo se perfila como gran favorito de estos playoffs y entrará en el bracket del Upper Bracket con la ventaja del primer seed.' }],
      },
      {
        type: 'p',
        children: [{ text: 'Karmine Corp se hace con el segundo puesto y valida su clasificación al MSI 2026. El público madrileño también vivió grandes momentos con Movistar KOI, el equipo local, que pelea por seguir escalando posiciones de cara a los playoffs.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Los 6 clasificados para playoffs' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: '🥇 Team Vitality — 1ª seed' }] },
          { type: 'li', children: [{ text: '🥈 Karmine Corp — 2ª seed' }] },
          { type: 'li', children: [{ text: '3. G2 Esports' }] },
          { type: 'li', children: [{ text: '4. Movistar KOI' }] },
          { type: 'li', children: [{ text: '5. GIANTX' }] },
          { type: 'li', children: [{ text: '6. NAVI' }] },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Fnatic y Team Heretics: la temporada termina aquí' }],
      },
      {
        type: 'p',
        children: [{ text: 'La gran decepción del split es la eliminación de Fnatic. A pesar de algunos destellos a mitad de temporada, el equipo inglés no logra encadenar victorias ante los mejores. Team Heretics sufre el mismo destino, con una temporada decepcionante que no les da acceso a playoffs.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Playoffs: lo que viene' }],
      },
      {
        type: 'p',
        children: [{ text: 'El bracket de playoffs promete grandes duelos. Team Vitality y Karmine Corp salen como favoritos, pero G2 Esports — siempre peligroso en formato BO5 — podría dar la sorpresa. Movistar KOI contará con el apoyo del público local.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'Los playoffs LEC Spring 2026 se pueden seguir en lolesports.com. Seis equipos compiten en un bracket de doble eliminación.' }],
      },
    ],
  },
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const article of articles) {
    const existing = await payload.find({
      collection: 'news',
      where: { slug: { equals: article.slug } },
    })
    if (existing.docs.length > 0) {
      console.log(`  → "${article.title}" déjà présent, skip.`)
      continue
    }
    await payload.create({ collection: 'news', data: article as any })
    console.log(`  ✅ ${article.locale.toUpperCase()} — ${article.title}`)
  }
  console.log('✅ Migration 026 terminée — article LEC Madrid Spring 2026')
}
