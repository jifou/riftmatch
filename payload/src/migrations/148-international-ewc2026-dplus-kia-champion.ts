import type { MigrationModule } from './runner'

export const id = '148-international-ewc2026-dplus-kia-champion'
export const description = "EWC 2026 — DPlus KIA balaie Karmine Corp 3-0 en grande finale et remporte le titre à Paris"

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-07-21T08:00:00.000Z'

const articles = [
  {
    title: "EWC 2026 : DPlus KIA écrase Karmine Corp 3-0 et décroche son premier titre international en six ans",
    slug: 'ewc2026-dplus-kia-champion-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "DPlus KIA a conclu l'Esports World Cup 2026 en beauté le 19 juillet à Paris, balayant Karmine Corp 3-0 en grande finale de League of Legends. Un premier titre international majeur en six ans pour le club coréen, porté par un Smash intenable, désigné MVP du tournoi.",
    sourceUrl: 'https://www.gosugamers.net/lol/news/78825-dplus-kia-crowned-2026-league-of-legends-esports-world-cup-champions-after-defeating-karmine-corp',
    tags: [{ tag: 'EWC 2026' }, { tag: 'DPlus KIA' }, { tag: 'Karmine Corp' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "Le 19 juillet à Paris Expo Porte de Versailles, DPlus KIA a conclu l'Esports World Cup 2026 en beauté en balayant Karmine Corp 3-0 lors de la grande finale de League of Legends, mettant fin à six ans d'attente pour un titre international majeur pour le club coréen." }] },
      { type: 'h2', children: [{ text: "Une finale à sens unique" }] },
      { type: 'p', children: [{ text: "Devant un public parisien acquis à la cause de Karmine Corp, DPlus KIA n'a laissé aucune chance à la dernière équipe occidentale encore en lice. Sur la première manche, portée par un Kai'Sa dominant de Smash, la formation coréenne a méthodiquement pris le contrôle de la partie, remportant un combat décisif en mid game avant de sceller la victoire autour du Baron. La deuxième manche, plus disputée, a vu l'or rester quasiment à égalité jusqu'à ce que DPlus KIA profite d'erreurs tardives de Karmine Corp pour s'imposer lors d'un affrontement décisif au Baron. La troisième carte a tourné au sans-appel : DPlus KIA a infligé quatre kills en six minutes pour boucler un sweep sans discussion possible." }] },
      { type: 'h2', children: [{ text: "Smash sacré MVP, Karmine Corp salué pour son parcours" }] },
      { type: 'p', children: [{ text: "Sin \"Smash\" Geum-jae a été désigné MVP du tournoi avec un KDA de 8,1, 69,8% de participation aux kills et 28,4% des dégâts totaux de son équipe sur l'ensemble de la compétition. DPlus KIA empoche 600 000 dollars et 1000 points de Club Championship, après avoir sorti Bilibili Gaming puis les champions en titre de Gen.G en demi-finale. Karmine Corp, qui avait créé la sensation en éliminant AG.AL puis T1, repart sans trophée mais avec la satisfaction d'une épopée historique devant son public." }] },
      { type: 'blockquote', children: [{ text: "Six ans après son dernier sacre international, DPlus KIA renoue avec les sommets du jeu coréen, pendant qu'une Karmine Corp portée par son public laisse entrevoir un avenir prometteur sur la scène internationale." }] },
    ],
  },
  {
    title: "EWC 2026: DPlus KIA Sweep Karmine Corp 3-0 to Win First International Title in Six Years",
    slug: 'ewc2026-dplus-kia-champion-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "DPlus KIA closed out the Esports World Cup 2026 in style on July 19 in Paris, sweeping Karmine Corp 3-0 in the League of Legends grand final. It's the Korean team's first major international title in six years, powered by a dominant Smash, named tournament MVP.",
    sourceUrl: 'https://www.gosugamers.net/lol/news/78825-dplus-kia-crowned-2026-league-of-legends-esports-world-cup-champions-after-defeating-karmine-corp',
    tags: [{ tag: 'EWC 2026' }, { tag: 'DPlus KIA' }, { tag: 'Karmine Corp' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "On July 19 at Paris Expo Porte de Versailles, DPlus KIA capped off the Esports World Cup 2026 in style, sweeping Karmine Corp 3-0 in the League of Legends grand final and ending a six-year wait for a major international title for the Korean organization." }] },
      { type: 'h2', children: [{ text: "A one-sided grand final" }] },
      { type: 'p', children: [{ text: "In front of a Paris crowd firmly behind Karmine Corp, DPlus KIA gave the last Western team standing no room to breathe. In game one, powered by a dominant Kai'Sa from Smash, the Korean side methodically took over the map, winning a decisive mid-game fight before closing out the win around the Baron pit. Game two was tighter, with gold staying close through most of the match until DPlus KIA punished late mistakes from Karmine Corp to win a crucial Baron fight. Game three was one-sided from the start, with DPlus KIA landing four kills in six minutes to complete a clean sweep." }] },
      { type: 'h2', children: [{ text: "Smash crowned MVP, Karmine Corp praised for its run" }] },
      { type: 'p', children: [{ text: "Sin \"Smash\" Geum-jae was named tournament MVP after posting an 8.1 KDA, 69.8% kill participation, and 28.4% of his team's total damage across the event. DPlus KIA pockets $600,000 and 1,000 Club Championship points after eliminating Bilibili Gaming and then defending champions Gen.G in the semifinal. Karmine Corp, who stunned AG.AL and T1 en route to the final, leaves without the trophy but with a historic run in front of their home crowd." }] },
      { type: 'blockquote', children: [{ text: "Six years after their last international title, DPlus KIA return to the top of Korean League of Legends, while a home-crowd Karmine Corp hint at a bright future on the international stage." }] },
    ],
  },
  {
    title: "EWC 2026: DPlus KIA arrasa 3-0 a Karmine Corp y conquista su primer título internacional en seis años",
    slug: 'ewc2026-dplus-kia-champion-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "DPlus KIA cerró la Esports World Cup 2026 por todo lo alto el 19 de julio en París, barriendo 3-0 a Karmine Corp en la gran final de League of Legends. Es el primer título internacional importante del equipo coreano en seis años, impulsado por un Smash intratable, nombrado MVP del torneo.",
    sourceUrl: 'https://www.gosugamers.net/lol/news/78825-dplus-kia-crowned-2026-league-of-legends-esports-world-cup-champions-after-defeating-karmine-corp',
    tags: [{ tag: 'EWC 2026' }, { tag: 'DPlus KIA' }, { tag: 'Karmine Corp' }, { tag: 'International' }],
    content: [
      { type: 'p', children: [{ text: "El 19 de julio en el Paris Expo Porte de Versailles, DPlus KIA cerró la Esports World Cup 2026 por todo lo alto al barrer 3-0 a Karmine Corp en la gran final de League of Legends, poniendo fin a seis años de espera por un título internacional importante para el club coreano." }] },
      { type: 'h2', children: [{ text: "Una final sin discusión" }] },
      { type: 'p', children: [{ text: "Ante un público parisino volcado con Karmine Corp, DPlus KIA no dio ninguna opción al último equipo occidental con vida. En el primer mapa, impulsado por un Kai'Sa dominante de Smash, el conjunto coreano tomó el control de la partida de forma metódica, ganando una pelea decisiva en la mitad de la partida antes de sellar la victoria en torno al Barón. El segundo mapa estuvo más reñido, con el oro casi igualado durante buena parte del encuentro, hasta que DPlus KIA castigó errores tardíos de Karmine Corp para imponerse en una pelea clave por el Barón. El tercer mapa fue un trámite: DPlus KIA logró cuatro asesinatos en seis minutos para completar un barrido limpio." }] },
      { type: 'h2', children: [{ text: "Smash, nombrado MVP, y elogios para el recorrido de Karmine Corp" }] },
      { type: 'p', children: [{ text: "Sin \"Smash\" Geum-jae fue nombrado MVP del torneo tras firmar un KDA de 8,1, un 69,8% de participación en asesinatos y un 28,4% del daño total de su equipo en toda la competición. DPlus KIA se embolsa 600 000 dólares y 1000 puntos de Club Championship, tras eliminar a Bilibili Gaming y después a los campeones defensores de Gen.G en semifinales. Karmine Corp, que había sorprendido al eliminar a AG.AL y a T1, se marcha sin el trofeo pero con una gesta histórica ante su público." }] },
      { type: 'blockquote', children: [{ text: "Seis años después de su último título internacional, DPlus KIA vuelve a la cima del League of Legends coreano, mientras un Karmine Corp arropado por su afición deja entrever un futuro prometedor en la escena internacional." }] },
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
