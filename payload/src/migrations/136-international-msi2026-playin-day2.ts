import type { MigrationModule } from './runner'

export const id = '136-international-msi2026-playin-day2'
export const description = 'MSI 2026 — Play-In Jour 2 : T1 3-0 Karmine Corp, Team Liquid 3-0 Deep Cross Gaming (29 juin)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-30T08:00:00.000Z'

const articles = [
  {
    title: "MSI 2026 Play-In Jour 2 : T1 atomise la Karmine Corp, Team Liquid élimine Deep Cross Gaming",
    slug: 'msi2026-playin-day2-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "T1 enchaîne six victoires consécutives en balayant la Karmine Corp 3-0, tandis que Team Liquid élimine Deep Cross Gaming et avance dans le bracket inférieur du MSI 2026.",
    sourceUrl: 'https://lolesports.com/en-US/tournament/115570934354631452/stage/115570934355090205',
    tags: [{ tag: 'MSI 2026' }, { tag: 'T1' }, { tag: 'Karmine Corp' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "Le deuxième jour du Play-In MSI 2026, disputé le 29 juin au Daejeon Convention Center en Corée du Sud, a confirmé la domination de T1 sur la scène internationale et vu Deep Cross Gaming quitter prématurément le tournoi sans la moindre carte à son actif." }] },
      { type: 'h2', children: [{ text: "T1 3-0 Karmine Corp : les Coréens dans une autre dimension" }] },
      { type: 'p', children: [{ text: "T1 a une nouvelle fois démontré toute sa supériorité en balayant la Karmine Corp 3-0 dans le bracket supérieur. Dès la première partie, un essai de contre-jungle de la KC s'est retourné contre la formation française, permettant à Phase de s'envoler sur Mel avec 6 kills en à peine 10 minutes. Keria sur Pyke a affiché un taux de précision dévastateur, permettant à Peyz d'étendre continuellement son avance." }] },
      { type: 'p', children: [{ text: "Sur les trois cartes, T1 n'a laissé aucune chance à ses adversaires européens. L'équipe coréenne affiche désormais un bilan parfait de 6 victoires en 6 parties au Play-In. La Karmine Corp, qui participait pour la toute première fois à un MSI, se retrouve envoyée dans le bracket inférieur où elle affrontera Team Liquid ce 30 juin." }] },
      { type: 'h2', children: [{ text: "Team Liquid 3-0 Deep Cross Gaming : DCG éliminé" }] },
      { type: 'p', children: [{ text: "De son côté, Team Liquid a rempli sa mission en écartant Deep Cross Gaming 3-0 dans le bracket inférieur. JoseDeodo a notamment sorti une Shyvana surprenante lors d'une des parties, un pick audacieux qui a contribué à la victoire de la formation nord-américaine. DCG, représentant de la LCP, quitte le MSI 2026 sans avoir remporté la moindre carte de tout le Play-In." }] },
      { type: 'p', children: [{ text: "La Karmine Corp affronte Team Liquid ce 30 juin dans un duel européen vs nord-américain décisif en bracket inférieur. Le vainqueur s'avancera vers la grande finale du Play-In pour défier T1, avec à la clé la dernière place qualificative pour le Bracket Stage du MSI 2026." }] },
      { type: 'blockquote', children: [{ text: "T1 est dans une forme écrasante — 6-0 en parties et aucune faiblesse visible. La vraie bataille sera de savoir qui les rejoindra en finale du Play-In." }] },
    ],
  },
  {
    title: "MSI 2026 Play-In Day 2: T1 Sweeps Karmine Corp, Team Liquid Eliminates Deep Cross Gaming",
    slug: 'msi2026-playin-day2-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "T1 extend their flawless run to six straight map wins by sweeping Karmine Corp 3-0, while Team Liquid eliminate Deep Cross Gaming and advance in the lower bracket at MSI 2026.",
    sourceUrl: 'https://lolesports.com/en-US/tournament/115570934354631452/stage/115570934355090205',
    tags: [{ tag: 'MSI 2026' }, { tag: 'T1' }, { tag: 'Karmine Corp' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "Day 2 of the MSI 2026 Play-In stage, held on June 29 at the Daejeon Convention Center in South Korea, saw T1 extend their dominant run to a perfect 6-0 record and Deep Cross Gaming bow out of the tournament without a single map win." }] },
      { type: 'h2', children: [{ text: "T1 3-0 Karmine Corp: A Masterclass in Efficiency" }] },
      { type: 'p', children: [{ text: "T1 dispatched Karmine Corp 3-0 in the upper bracket, confirming their status as overwhelming favorites for the entire Play-In. In Game 1, an early counter-jungle attempt from KC backfired disastrously. Phase exploded on Mel, racking up 6 kills in just 10 minutes, while Keria's Pyke punished every mistake with surgical precision. Peyz remained untouchable throughout all three maps and was a constant threat regardless of champion pick." }] },
      { type: 'p', children: [{ text: "T1 now hold a perfect 6-0 record across all individual games at the Play-In stage, having not dropped a single map yet. Karmine Corp, making their first-ever MSI appearance, showed flashes of creativity but were clearly outmatched at every phase of the game. They now drop to the lower bracket and must face Team Liquid on June 30 to keep their international dreams alive." }] },
      { type: 'h2', children: [{ text: "Team Liquid 3-0 Deep Cross Gaming: DCG Exit the Tournament" }] },
      { type: 'p', children: [{ text: "Team Liquid secured their lower bracket survival by cleanly dispatching Deep Cross Gaming 3-0. The North American squad displayed solid macro play throughout the series, with JoseDeodo pulling out a surprising Shyvana pick in one of the maps — an unconventional choice that paid off. DCG, representing the LCP, failed to win a single game across the entire Play-In stage and are now eliminated from MSI 2026." }] },
      { type: 'p', children: [{ text: "The stage is set for a dramatic lower bracket clash between Karmine Corp and Team Liquid on June 30. The loser will be sent home, while the winner earns one final shot at facing T1 in the Play-In grand final — with the prize being the last ticket into the MSI 2026 Bracket Stage." }] },
      { type: 'blockquote', children: [{ text: "T1 are on another level — six maps, zero dropped. The question is who will step up to challenge them in the Play-In grand final." }] },
    ],
  },
  {
    title: "MSI 2026 Play-In Día 2: T1 arrasa a Karmine Corp, Team Liquid elimina a Deep Cross Gaming",
    slug: 'msi2026-playin-day2-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "T1 extiende su racha perfecta a seis victorias consecutivas barriendo a Karmine Corp 3-0, mientras Team Liquid elimina a Deep Cross Gaming y avanza en el bracket inferior del MSI 2026.",
    sourceUrl: 'https://lolesports.com/en-US/tournament/115570934354631452/stage/115570934355090205',
    tags: [{ tag: 'MSI 2026' }, { tag: 'T1' }, { tag: 'Karmine Corp' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "El segundo día del Play-In del MSI 2026, disputado el 29 de junio en el Daejeon Convention Center de Corea del Sur, confirmó la supremacía absoluta de T1 y vio a Deep Cross Gaming despedirse del torneo sin haber ganado ni una sola partida." }] },
      { type: 'h2', children: [{ text: "T1 3-0 Karmine Corp: Dominio absoluto sin concesiones" }] },
      { type: 'p', children: [{ text: "T1 aplastó a Karmine Corp con un contundente 3-0 en el bracket superior, confirmando su condición de amplio favorito para todo el MSI 2026. Desde el primer juego, un intento de contra-jungla por parte del equipo europeo resultó catastrófico: Phase se disparó sobre Mel acumulando 6 kills en apenas 10 minutos, mientras Keria castigaba cada error de KC con una Pyke de precisión quirúrgica. Peyz mantuvo su nivel dominante durante las tres partidas." }] },
      { type: 'p', children: [{ text: "T1 acumula ahora un impecable récord de 6-0 en partidas individuales en el Play-In, sin haber cedido ni una sola victoria en mapa. Karmine Corp, en su primera participación histórica en un MSI, mostró valentía pero fue ampliamente superada en cada fase del juego. Caen al bracket inferior, donde deberán enfrentarse a Team Liquid el 30 de junio para seguir con vida." }] },
      { type: 'h2', children: [{ text: "Team Liquid 3-0 Deep Cross Gaming: DCG queda eliminado" }] },
      { type: 'p', children: [{ text: "Team Liquid cumplió su objetivo al eliminar a Deep Cross Gaming con un sólido 3-0 en el bracket inferior. La escuadra norteamericana mostró un juego macro ordenado, con JoseDeodo sacando incluso a Shyvana en una de las partidas — una elección poco convencional que resultó exitosa. DCG, representante de la LCP, no logró ganar ni una sola partida en todo el MSI 2026 y queda definitivamente eliminado." }] },
      { type: 'p', children: [{ text: "El 30 de junio se disputa el gran duelo del bracket inferior entre Karmine Corp y Team Liquid. El perdedor abandona el torneo, mientras que el ganador tendrá su última oportunidad de desafiar a T1 en la gran final del Play-In por el único pase al Bracket Stage del MSI 2026." }] },
      { type: 'blockquote', children: [{ text: "T1 opera en otra dimensión — seis victorias, cero partidas cedidas. La verdadera batalla será decidir quién les acompañará en la final del Play-In." }] },
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
