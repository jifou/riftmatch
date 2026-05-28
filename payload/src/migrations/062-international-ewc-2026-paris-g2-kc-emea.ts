import type { MigrationModule } from './runner'

export const id = '062-international-ewc-2026-paris-g2-kc-emea'
export const description = 'International — EWC 2026 déplacé à Paris, G2 et Karmine Corp qualifiés EMEA'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-24T08:00:00.000Z'

const articles = [
  {
    title: "EWC 2026 se jouera à Paris : G2 et Karmine Corp déjà qualifiés depuis l\'EMEA",
    slug: 'ewc-2026-paris-g2-kc-emea-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'annonce',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/w3KR-B_qSz8/maxresdefault.jpg',
    excerpt:
      "L\'Esports World Cup 2026 quitte Riyad pour Paris suite aux tensions géopolitiques au Moyen-Orient. G2 Esports et Karmine Corp ont déjà décroché les deux places EMEA disponibles, avec 16 équipes attendues à partir du 15 juillet.",
    sourceUrl: 'https://lolesports.com/en-GB/leagues/first_stand,lec,msi,worlds',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'EWC' }, { tag: 'International' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "L\'Esports World Cup 2026 ne se déroulera plus à Riyad, en Arabie Saoudite. Le 20 mai, l\'Esports Foundation a officialisé le transfert de l\'événement vers Paris, en France, invoquant les incertitudes régionales liées au conflit Iran-Arabie Saoudite. C\'est la première fois depuis sa création sous le nom Gamers8 que l\'EWC quitte la péninsule arabique.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Paris accueillera 16 équipes du 15 juillet au 23 août' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le tournoi LoL à l\'EWC 2026 se tiendra du 15 juillet avec une prize pool d\'environ 600 000 dollars pour le vainqueur. Le nombre d\'équipes participantes passe de 12 en 2025 à 16 cette année, signe de l\'ambition croissante du circuit. Gen.G, champion sortant, est directement invité. Les champions de chaque grande ligue (LEC, LCS, LCK, LPL, LCP, CBLOL) se qualifient via leur titre régional, les places restantes étant disputées via des qualifiers en ligne.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "G2 et Karmine Corp : l\'EMEA a ses représentants" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Du côté de l\'EMEA, le qualifier s\'est achevé le 17 mai avec deux équipes qualifiées. G2 Esports a remporté la grande finale contre Karmine Corp 3-0, dominant du début à la fin avec notamment un Game 3 autoritaire sur un score de kills de 27-6. Les deux équipes rejoignent donc Paris, confirmant que la grande rivalité franco-européenne continuera sur la scène internationale. KOI a terminé troisième mais repart bredouille.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'La course aux qualifications continue' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Les qualifiers Korea (LCK) se jouent ce week-end des 25-26 mai, avec T1 et Dplus KIA en finale du bracket supérieur. Sentinels a décroché la place nord-américaine, Team Secret représente l\'APAC. Le tableau complet sera connu d\'ici fin juin, avant le grand rendez-vous estival sous la Tour Eiffel.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Paris 2026 : un EWC inédit hors d\'Arabie Saoudite, avec la promesse d\'un tournoi LoL plus relevé que jamais avec 16 clubs des quatre coins du globe.",
          },
        ],
      },
    ],
  },
  {
    title: 'EWC 2026 moves to Paris: G2 and Karmine Corp secure EMEA spots',
    slug: 'ewc-2026-paris-g2-kc-emea-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'annonce',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/w3KR-B_qSz8/maxresdefault.jpg',
    excerpt:
      'The Esports World Cup 2026 is relocating from Riyadh to Paris amid Middle East tensions. G2 Esports and Karmine Corp have already locked in EMEA spots, with 16 teams set to compete starting July 15.',
    sourceUrl: 'https://lolesports.com/en-GB/leagues/first_stand,lec,msi,worlds',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'EWC' }, { tag: 'International' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "The Esports World Cup 2026 will not be held in Riyadh, Saudi Arabia after all. On May 20, the Esports Foundation officially announced the event\'s relocation to Paris, France, citing regional uncertainty stemming from the Iran-Saudi conflict. This marks the first time since the tournament\'s inception under the Gamers8 brand that the EWC will take place outside the Arabian Peninsula.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Paris hosts 16 teams from July 15 to August 23' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The LoL tournament at EWC 2026 kicks off July 15 with a prize pool of approximately $600,000 for the winner. The field expands from 12 teams in 2025 to 16 this year. Gen.G, the defending EWC champions, hold a direct invite. League champions from each major region (LEC, LCS, LCK, LPL, LCP, CBLOL) qualify automatically, with remaining spots contested through online regional qualifiers.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'G2 and Karmine Corp: EMEA is settled' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The EMEA qualifier wrapped up on May 17. G2 Esports swept Karmine Corp 3-0 in the grand final, capping a dominant run with a stunning 27-6 Game 3. Both teams are heading to Paris, ensuring Europe\'s fiercest rivalry will play out on the biggest international stage. KOI finished third but miss out on a spot.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Qualification picture still taking shape' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The Korea qualifier concludes this weekend (May 25–26), with T1 and Dplus KIA meeting in the upper bracket final. Sentinels have secured the NA slot, Team Secret represents APAC. The full 16-team roster will be confirmed by late June ahead of a summer showdown in the French capital.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Paris 2026: an unprecedented EWC outside Saudi Arabia, promising the most competitive LoL field the tournament has ever seen.',
          },
        ],
      },
    ],
  },
  {
    title: 'EWC 2026 se muda a París: G2 y Karmine Corp ya clasificados por EMEA',
    slug: 'ewc-2026-paris-g2-kc-emea-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'annonce',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/w3KR-B_qSz8/maxresdefault.jpg',
    excerpt:
      'La Esports World Cup 2026 deja Riad y se traslada a París por las tensiones geopolíticas en Oriente Medio. G2 Esports y Karmine Corp ya tienen asegurados los dos cupos de EMEA, con 16 equipos compitiendo desde el 15 de julio.',
    sourceUrl: 'https://lolesports.com/en-GB/leagues/first_stand,lec,msi,worlds',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'EWC' }, { tag: 'Internacional' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'La Esports World Cup 2026 no se celebrará en Riad, Arabia Saudita. El 20 de mayo, la Esports Foundation confirmó oficialmente el traslado del evento a París, Francia, alegando la incertidumbre regional provocada por el conflicto entre Irán y Arabia Saudita. Es la primera vez desde el origen del torneo, bajo el nombre Gamers8, que el EWC abandona la Península Arábiga.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'París acoge a 16 equipos del 15 de julio al 23 de agosto' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'El torneo de LoL en el EWC 2026 arranca el 15 de julio con un prize pool de aproximadamente 600 000 dólares para el ganador. El campo crece de 12 equipos en 2025 a 16 esta edición. Gen.G, campeones defensores, tienen invitación directa. Los campeones de cada liga mayor (LEC, LCS, LCK, LPL, LCP, CBLOL) clasifican automáticamente, y las plazas restantes se deciden mediante qualifiers regionales en línea.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'G2 y Karmine Corp: EMEA ya tiene representantes' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'El qualifier de EMEA finalizó el 17 de mayo. G2 Esports barrió a Karmine Corp 3-0 en la gran final, cerrando la serie con un Game 3 aplastante de 27-6 en kills. Ambos equipos viajarán a París, garantizando que la mayor rivalidad de la escena europea se dispute en el mayor escenario internacional. KOI terminó tercero pero se queda sin plaza.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'La clasificación aún no está completa' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'El qualifier de Corea cierra este fin de semana (25-26 de mayo), con T1 y Dplus KIA en la final del upper bracket. Sentinels aseguró el cupo de Norteamérica y Team Secret representa a APAC. El cuadro completo de 16 equipos quedará confirmado a finales de junio antes del gran evento estival en la capital francesa.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'París 2026: un EWC sin precedentes fuera de Arabia Saudita, con el campo de LoL más competitivo de la historia del torneo.',
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
