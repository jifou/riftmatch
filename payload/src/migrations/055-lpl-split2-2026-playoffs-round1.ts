import type { MigrationModule } from './runner'

export const id = '055-lpl-split2-2026-playoffs-round1'
export const description = 'LPL Split 2 2026 — Playoffs Round 1 : BLG 3-0 NIP, JDG 3-2 TES, semis BLG/JDG et AL/TES'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-20T08:00:00.000Z'

const articles = [
  {
    title: 'LPL Split 2 2026 : BLG écrase NIP 3-0, JDG survit à TES en cinq games',
    slug: 'lpl-split2-2026-playoffs-round1-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg',
    excerpt:
      'Premier tour des playoffs LPL Split 2 2026 : BiliBili Gaming a dominé NIP 3-0 tandis que JD Gaming a survécu à un thriller 3-2 contre Top Esports. Les demies opposent désormais BLG à JDG et AL à TES.',
    sourceUrl: 'https://lolesports.com/en-US/tournament/113503620829714518/overview',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'BLG' }, { tag: 'JDG' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Les playoffs du LPL Split 2 2026 ont débuté avec fracas. BiliBili Gaming, champions en titre du Split 1, ont confirmé leur statut de favori en balayant les Ninjas in Pyjamas 3-0 sans trembler. De leur côté, JD Gaming ont souffert avant de plier Top Esports 3-2 dans un duel haletant.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "BLG implacable, NIP n'a pas tenu le choc" }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Portés par leur ADC Park "Viper" Do-hyeon et le jungler Peng "XUN" Li-xun, BLG ont survolé les trois manches face à NIP. La saison régulière avait déjà mis en évidence leur supériorité : 11 victoires pour 2 défaites, soit 85 % de win rate, meilleur bilan de tout le Groupe Ascend. Le coaching staff emmené par Yang "Daeny" Dae-in a imposé une macro irréprochable, sans laisser de prise à leur adversaire.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "JDG s'en sort au tie-break contre TES" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "JD Gaming ont eu beaucoup plus de fil à retordre. Face à Top Esports et leur top-laner Bai \"369\" Jia-Hao, la série est allée jusqu'au game 5. JDG ont finalement cracké la résistance de TES pour s'imposer 3-2 et rejoindre BLG en demi-finales. Les deux équipes étaient à égalité en saison régulière (8-5), et la tension sur le Summoner's Rift l'a confirmé.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Demi-finales : BLG vs JDG, le choc tant attendu' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La prochaine étape s'annonce épique. BLG retrouve JDG, l'équipe qu'ils ont battue 3-1 en finale du Split 1. Mais JDG a faim de revanche. En parallèle, Anyone's Legend affronte la série AL vs TES, avec le mid-laner Lin \"Creme\" Jian de TES comme danger principal. Les deux vainqueurs des demies se qualifieront directement pour le Mid-Season Invitational 2026.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Le LPL Split 2 2026 tient toutes ses promesses : BLG vise un nouveau titre, mais JDG est prêt à tout pour renverser les champions en titre.',
          },
        ],
      },
    ],
  },
  {
    title: 'LPL Split 2 2026 Playoffs: BLG Sweep NIP 3-0, JDG Survive TES in Five Games',
    slug: 'lpl-split2-2026-playoffs-round1-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg',
    excerpt:
      'LPL Split 2 2026 Playoffs Round 1 results: BiliBili Gaming crushed NIP 3-0, while JD Gaming survived a five-game thriller against Top Esports. Semifinals: BLG vs JDG and AL vs TES.',
    sourceUrl: 'https://lolesports.com/en-US/tournament/113503620829714518/overview',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'BLG' }, { tag: 'JDG' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'The LPL Split 2 2026 playoffs have started with a bang. BiliBili Gaming, reigning Split 1 champions, showcased their dominance by sweeping Ninjas in Pyjamas 3-0, while JD Gaming had to grind through a tough five-game series to eliminate Top Esports 3-2.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'BLG Dominant, NIP Never Stood a Chance' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Powered by ADC Park \"Viper\" Do-hyeon and jungler Peng \"XUN\" Li-xun, BLG cruised through all three games against NIP. Their regular season record of 11-2 (85% win rate), the best in Group Ascend, was a clear indication of where this series was heading. Head coach Yang \"Daeny\" Dae-in's macro game plan left NIP with no answers throughout the series.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'JDG Edge Out TES in a Nail-Biting Tie-Breaker' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'JDG had a much harder road. Facing Top Esports and their top laner Bai "369" Jia-Hao, the series went all the way to Game 5. JDG ultimately sealed the deal 3-2 in a series that could have gone either way. Both teams finished the regular season at 8-5, and the match lived up to every bit of that parity.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Semifinals Preview: BLG vs JDG — A Rematch for the Ages' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "BLG and JDG are set for a massive rematch — BLG beat JDG 3-1 in the Split 1 Finals. JDG now has a chance for revenge. In the other semifinal, Anyone's Legend takes on TES. The two winners will advance to the Grand Final and secure their spot at the 2026 Mid-Season Invitational.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'LPL Split 2 2026 is delivering elite-level action. BLG look unstoppable, but JDG is hungry for redemption.',
          },
        ],
      },
    ],
  },
  {
    title: 'LPL Split 2 2026 Playoffs: BLG aplasta NIP 3-0, JDG sobrevive a TES en cinco partidas',
    slug: 'lpl-split2-2026-playoffs-round1-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg',
    excerpt:
      'Resultados del Round 1 de los playoffs del LPL Split 2 2026: BiliBili Gaming aplastó a NIP 3-0, y JD Gaming sobrevivió a Top Esports en cinco partidas (3-2). Semifinales: BLG vs JDG y AL vs TES.',
    sourceUrl: 'https://lolesports.com/en-US/tournament/113503620829714518/overview',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'BLG' }, { tag: 'JDG' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Los playoffs del LPL Split 2 2026 arrancaron con contundencia. BiliBili Gaming, campeones del Split 1, reafirmaron su condición de favoritos barriendo a Ninjas in Pyjamas 3-0, mientras que JD Gaming tuvo que sufrir para eliminar a Top Esports 3-2 en un thriller de cinco partidas.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'BLG imparable, NIP sin respuesta' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Con Park "Viper" Do-hyeon y Peng "XUN" Li-xun como grandes protagonistas, BLG dominó las tres partidas sin dar opciones a NIP. Su récord en la temporada regular fue de 11 victorias y 2 derrotas (85% de win rate), el mejor del Grupo Ascend. El head coach Yang "Daeny" Dae-in implementó una macro de juego impecable que dejó a los NIP sin margen de reacción.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'JDG resiste el asalto de TES en el game decisivo' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'JDG lo tuvo mucho más complicado. Frente a Top Esports y su top-laner Bai "369" Jia-Hao, la serie se fue hasta el quinto juego. Finalmente, JDG se impuso 3-2 en un duelo que reflejó la igualdad que ya mostraron en la fase regular, donde ambos terminaron con registros de 8-5.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Semifinales: BLG vs JDG, la revancha del año' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El próximo duelo entre BLG y JDG es el más esperado del torneo. BLG ya venció a JDG 3-1 en la gran final del Split 1, y JDG llega sediento de revancha. En la otra semifinal, Anyone's Legend se medirá a TES. Los dos ganadores disputarán la Gran Final y se clasificarán para el Mid-Season Invitational 2026.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'El LPL Split 2 2026 está siendo una fiesta del alto nivel competitivo. BLG parece imparable, pero JDG tiene muchas ganas de venganza.',
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
