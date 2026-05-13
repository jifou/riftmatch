import type { MigrationModule } from './runner'

export const id = '036-news-lpl-split2-2026-final-week'
export const description = 'LPL Split 2 2026 — Dernière semaine saison régulière : BLG en tête, WE en crise historique'

const DATE = '2026-05-13T08:00:00.000Z'

const articles = [
  // ── FR ─────────────────────────────────────────────────────────────────────
  {
    title: 'LPL Split 2 2026 : BLG domine, WE au bord du précipice avant la dernière semaine',
    slug: 'lpl-split2-2026-derniere-semaine-blg-we',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/AX5n_CxE-VU/maxresdefault.jpg',
    excerpt:
      'À quatre jours de la fin de la saison régulière du LPL Split 2 2026, Bilibili Gaming (8-2) file vers les playoffs en dominateurs, tandis que Team WE (0-9) vit la pire campagne de son histoire récente.',
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LPL/2026/Split_2',
    tags: [
      { tag: 'LPL' },
      { tag: 'Esports' },
      { tag: 'BLG' },
      { tag: 'TES' },
      { tag: 'LPL 2026' },
      { tag: 'Résultats' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "La saison régulière du LPL Split 2 2026 touche à sa fin — les matchs s'achèvent le 17 mai. Alors que la course aux playoffs entre dans sa phase décisive, le classement dessine des destins très contrastés : au sommet, Bilibili Gaming écrase la concurrence ; en bas, Team WE vit un calvaire inédit.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'BLG, la machine bien huilée de Viper et Xun' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Avec un bilan de 8 victoires pour 2 défaites, Bilibili Gaming est la formation la plus régulière du split. Le recrutement de Park 'Viper' Do-Hyeon en ADC, couplé au retour du jungler Peng 'Xun' Lixun, a transformé BLG en rouleau compresseur. Sous la direction du coach Daeny, l'équipe affiche un macro-jeu quasi-irréprochable et figure parmi les grands favoris pour le titre et une place à l'international.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'TES et AL à égalité, JDG dans leur sillage' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Derrière BLG, Top Esports et Anyone's Legend se tiennent coude à coude à 7-3. TES s'appuie sur la constance de 369 en top lane et la maturité de JackeyLove en ADC, tandis qu'AL est la seule équipe du LPL à avoir conservé son roster 2025 intégralement. JDG (6-3), emmené par un effectif renouvelé, occupe la quatrième place et reste en lice pour l'une des qualifications directes en playoffs.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Team WE : la chute libre (0-9)" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "À l'autre bout du tableau, Team WE connaît une saison cauchemardesque. Avec 0 victoire en 9 matchs disputés, c'est l'une des pires performances enregistrées par une organisation historique de la LPL. Weibo Gaming (3-8) et NiP peinent également, mais la situation de WE soulève de vraies questions sur la viabilité du roster et son avenir dans la ligue.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Format playoffs et enjeux MSI' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le top 4 du Group Ascend se qualifie directement pour la phase de brackets des playoffs, tandis que les places 5-8 (Group Ascend) et les places 1-4 (Group Nirvana) disputeront un play-in. Les deux derniers de Group Nirvana seront éliminés. La LPL envoie ses meilleures équipes au MSI — avec BLG, TES et AL en forme, la région repart avec de solides arguments.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "La dernière semaine de la saison régulière LPL se joue du 13 au 17 mai. BLG semble intouchable pour la première place, mais la lutte pour les seeds 2, 3 et 4 entre TES, AL et JDG s'annonce intense jusqu'au bout.",
          },
        ],
      },
    ],
  },

  // ── EN ─────────────────────────────────────────────────────────────────────
  {
    title: 'LPL Split 2 2026: BLG Lead the Pack, WE in Historic Slump Heading into Final Week',
    slug: 'lpl-split2-2026-final-week-blg-we-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/AX5n_CxE-VU/maxresdefault.jpg',
    excerpt:
      'With the LPL Split 2 2026 regular season wrapping up on May 17, Bilibili Gaming (8-2) are on course for the top seed while Team WE sit at a shocking 0-9 — one of the worst records in LPL history.',
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LPL/2026/Split_2',
    tags: [
      { tag: 'LPL' },
      { tag: 'Esports' },
      { tag: 'BLG' },
      { tag: 'TES' },
      { tag: 'LPL 2026' },
      { tag: 'Results' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "The LPL Split 2 2026 regular season is entering its final stretch — matches conclude on May 17. As the playoff race reaches its critical phase, the standings reveal a tale of two extremes: Bilibili Gaming crushing the opposition at the top, and Team WE enduring an unprecedented collapse at the bottom.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "BLG: Viper and Xun's Dominant Machine" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "At 8-2, Bilibili Gaming are the most consistent team of the split by a clear margin. The acquisition of Korean ADC Park 'Viper' Do-Hyeon alongside the return of jungler Peng 'Xun' Lixun has transformed BLG into a near-unstoppable force. Under head coach Daeny, the team's macro play has been remarkably clean, and they are heavy favourites to claim the first seed heading into the playoffs.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'TES and AL Level at 7-3, JDG Close Behind' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Top Esports and Anyone's Legend are locked in a tight race for second and third at 7-3 each. TES rely on the consistency of veteran top laner 369 and the firepower of JackeyLove in the bot lane, while AL — the only LPL team to keep their entire 2025 roster — benefit from strong synergy built over the past year. JD Gaming (6-3) remain firmly in playoff contention and are fighting for a direct bracket spot.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Team WE in Freefall: 0-9 and Counting" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "At the bottom of the standings, Team WE are having one of the worst regular-season runs in modern LPL history. With zero wins from nine series played, the organisation faces serious questions about its roster and its place in the league. Weibo Gaming (3-8) and Ninjas in Pyjamas are also struggling, but WE's winless record stands out as a stark contrast to the competitive level of the rest of the field.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Playoffs Format and MSI Stakes' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The top 4 of Group Ascend qualify directly for the playoffs bracket stage, with positions 5-8 of Group Ascend and positions 1-4 of Group Nirvana entering a play-in. The bottom two of Group Nirvana face elimination from the LPL 2026 season. With the LPL sending its top performers to MSI, the stakes for playoff seeding could not be higher.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "The final week of LPL Split 2 2026 runs from May 13 to 17. BLG look set for the first seed, but the battle for seeds 2 through 4 between TES, AL, and JDG is shaping up to be one of the most competitive finishes the league has seen this season.",
          },
        ],
      },
    ],
  },

  // ── ES ─────────────────────────────────────────────────────────────────────
  {
    title: 'LPL Split 2 2026: BLG Lidera, WE en Caída Histórica en la Última Semana',
    slug: 'lpl-split2-2026-ultima-semana-blg-we-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/AX5n_CxE-VU/maxresdefault.jpg',
    excerpt:
      'La temporada regular del LPL Split 2 2026 llega a su fin el 17 de mayo. Bilibili Gaming lidera con un récord de 8-2, mientras que Team WE se hunde con un impactante 0-9 histórico.',
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LPL/2026/Split_2',
    tags: [
      { tag: 'LPL' },
      { tag: 'Esports' },
      { tag: 'BLG' },
      { tag: 'TES' },
      { tag: 'LPL 2026' },
      { tag: 'Resultados' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "La temporada regular del LPL Split 2 2026 entra en su recta final — los partidos concluyen el 17 de mayo. Con la carrera por los playoffs en su fase más crítica, la clasificación muestra dos realidades muy distintas: Bilibili Gaming aplastando a la competencia desde lo alto, y Team WE sufriendo un hundimiento sin precedentes en la parte baja.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "BLG: La Máquina de Viper y Xun" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Con un récord de 8-2, Bilibili Gaming es el equipo más consistente del split con gran diferencia. La incorporación del ADC coreano Park 'Viper' Do-Hyeon junto con el regreso del jungler Peng 'Xun' Lixun ha transformado a BLG en una fuerza casi imparable. Bajo la dirección del entrenador Daeny, el macro-juego del equipo ha sido sobresaliente y se posicionan como los grandes favoritos para el primer seed en los playoffs.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'TES y AL Empatados a 7-3, JDG Muy Cerca' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Top Esports y Anyone's Legend están igualados en 7-3 en una intensa disputa por el segundo y tercer puesto. TES confía en la regularidad del veterano top laner 369 y el poder de JackeyLove en el carril bot, mientras que AL — el único equipo de la LPL que mantuvo intacto su roster de 2025 — aprovecha la sinergia forjada durante el año pasado. JD Gaming (6-3) se mantiene en la pelea por una clasificación directa a la fase de brackets.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Team WE en Caída Libre: 0-9 Victorias" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "En el fondo de la clasificación, Team WE está viviendo una de las peores temporadas regulares de la historia moderna de la LPL. Sin ninguna victoria en nueve series disputadas, la organización enfrenta serias preguntas sobre su roster y su futuro en la liga. Weibo Gaming (3-8) y los Ninjas in Pyjamas también tienen dificultades, pero el récord sin victorias de WE destaca como un contraste brutal con el nivel del resto del campo.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Formato de Playoffs y las Apuestas del MSI' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El top 4 del Group Ascend se clasifica directamente para la fase de brackets de los playoffs, mientras que las posiciones 5-8 del Group Ascend y las posiciones 1-4 del Group Nirvana disputarán un play-in. Los dos últimos del Group Nirvana serán eliminados del LPL 2026. Con la LPL enviando a sus mejores equipos al MSI, los objetivos de clasificación a playoffs no podrían ser más altos.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "La última semana del LPL Split 2 2026 se disputa del 13 al 17 de mayo. BLG parece asegurado para el primer seed, pero la batalla por los seeds 2, 3 y 4 entre TES, AL y JDG se perfila como uno de los finales más competidos de la temporada.",
          },
        ],
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
  console.log('✅ Migration 036 terminée')
}
