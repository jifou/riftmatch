import type { MigrationModule } from './runner'

export const id = '098-lec-spring-2026-grand-final-g2-kc'
export const description = 'LEC Spring 2026 Grand Final — G2 Esports bat Karmine Corp 3-2, back-to-back et Nasus jungle légendaire de Skewmond (7 juin 2026)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-08T08:00:00.000Z'

const articles = [
  {
    title: 'LEC Spring 2026 : G2 Esports champion 3-2 contre Karmine Corp, le back-to-back est réel',
    slug: 'lec-spring-2026-grand-final-g2-kc-champion-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      "Le 7 juin 2026, G2 Esports a battu Karmine Corp 3-2 en Grand Final du LEC Spring 2026. Skewmond a joué un Nasus jungle inédit depuis 9 ans en partie 5, terminant sans aucune mort et remportant le titre de MVP. G2 s'offre un back-to-back et file en Bracket Stage du MSI.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LEC/2026/Spring',
    tags: [
      { tag: 'LoL' },
      { tag: 'LEC' },
      { tag: 'Playoffs' },
      { tag: 'G2 Esports' },
      { tag: 'Karmine Corp' },
      { tag: 'Grand Final' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Le 7 juin 2026, G2 Esports a remporté le LEC Spring 2026 en battant Karmine Corp 3-2 lors d'une Grande Finale disputée en Fearless Draft. Ce titre offre à G2 un back-to-back historique — l'organisation avait déjà soulevé le trophée lors du LEC Versus 2026 plus tôt dans l'année.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Une série totalement équilibrée" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Les deux équipes se sont rendues coup pour coup tout au long de la série. Le match est allé jusqu'à la limite, un cinquième et dernier game décisif dont l'issue a été scellée par un pick jungle improbable. La Fearless Draft a mis une pression supplémentaire sur les équipes, interdisant de rejouer tout champion déjà utilisé dans la série.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Skewmond et le Nasus jungle : 9 ans d'attente" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La décision la plus marquante de la soirée est venue du jungler de G2, SkewMond, qui a sorti un Nasus en jungle lors du Game 5 — une proposition que la scène compétitive n'avait pas vue depuis neuf ans. Le pari a été total : SkewMond a dominé la carte, accumulant des stacks sans interruption, et a terminé la partie sans aucune mort. Il a été désigné MVP de la finale.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Direction le MSI Bracket Stage" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Avec ce titre, G2 Esports se qualifie pour le Bracket Stage du MSI 2026. Le roster — BrokenBlade (top), SkewMond (jungle), Caps (mid), Hans Sama (bot), Labrov (support) — confirme sa domination sur la scène EMEA et arrive dans la phase internationale avec le statut de favori régional.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "G2 Esports boucle le LEC Spring 2026 avec un back-to-back incontestable. Le Nasus jungle de SkewMond en Game 5 restera l'image de cette finale. Rendez-vous au MSI pour mesurer la valeur de ce titre à l'échelle mondiale.",
          },
        ],
      },
    ],
  },
  {
    title: 'LEC Spring 2026 Grand Final: G2 Esports Defeats Karmine Corp 3-2, Claims Back-to-Back Title',
    slug: 'lec-spring-2026-grand-final-g2-kc-champion-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      "G2 Esports defeated Karmine Corp 3-2 in the LEC Spring 2026 Grand Final on June 7, 2026. SkewMond played a legendary deathless jungle Nasus in Game 5 — first seen in pro play in 9 years — and was named MVP. G2 secures a back-to-back title and advances to the MSI Bracket Stage.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LEC/2026/Spring',
    tags: [
      { tag: 'LoL' },
      { tag: 'LEC' },
      { tag: 'Playoffs' },
      { tag: 'G2 Esports' },
      { tag: 'Karmine Corp' },
      { tag: 'Grand Final' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "On June 7, 2026, G2 Esports claimed the LEC Spring 2026 title by defeating Karmine Corp 3-2 in a Fearless Draft Grand Final. The victory marks a historic back-to-back for G2, who also won the LEC Versus 2026 split earlier in the year.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "A Series That Went the Distance" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Both teams traded wins throughout the series in a tightly contested best-of-five. The Fearless Draft format added extra strategic complexity, preventing teams from repeating any champion used earlier in the series. The outcome was only decided in the final game.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "SkewMond's Jungle Nasus: Nine Years in the Making" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The moment of the night belonged to G2 jungler SkewMond, who pulled out a jungle Nasus in Game 5 — a pick that had not been seen in professional play for nine years. SkewMond stacked relentlessly throughout the game, becoming unkillable by the mid-game, and finished without dying once. He was named MVP of the Grand Final.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "MSI Bracket Stage Bound" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "With this championship, G2 Esports secure their spot in the MSI 2026 Bracket Stage. The roster of BrokenBlade (top), SkewMond (jungle), Caps (mid), Hans Sama (bot), and Labrov (support) heads into the international stage as EMEA's top representative.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "G2 Esports complete an unquestionable back-to-back with the LEC Spring 2026 title. SkewMond's deathless jungle Nasus in Game 5 will be remembered as the defining image of this Grand Final. The team now takes their run to the MSI stage.",
          },
        ],
      },
    ],
  },
  {
    title: 'LEC Spring 2026 Grand Final: G2 Esports derrota a Karmine Corp 3-2 y logra el doblete histórico',
    slug: 'lec-spring-2026-grand-final-g2-kc-champion-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      "G2 Esports derrotó a Karmine Corp 3-2 en la Gran Final del LEC Spring 2026 el 7 de junio de 2026. SkewMond jugó un Nasus jungla legendario sin morir en la partida 5 — visto por última vez en competición hace 9 años — y fue nombrado MVP. G2 logra el doblete y avanza al Bracket Stage del MSI.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LEC/2026/Spring',
    tags: [
      { tag: 'LoL' },
      { tag: 'LEC' },
      { tag: 'Playoffs' },
      { tag: 'G2 Esports' },
      { tag: 'Karmine Corp' },
      { tag: 'Grand Final' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "El 7 de junio de 2026, G2 Esports se proclamó campeón del LEC Spring 2026 al derrotar a Karmine Corp por 3-2 en una Gran Final disputada en formato Fearless Draft. Este título supone un doblete histórico para G2, que ya había levantado el trofeo del LEC Versus 2026 a principios de año.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Una serie que necesitó cinco partidas" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Ambos equipos se repartieron las victorias a lo largo de la serie en un ajustado best-of-five. El formato Fearless Draft añadió complejidad estratégica adicional, impidiendo repetir campeones ya elegidos durante la serie. El desenlace no llegó hasta la quinta y última partida.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "El Nasus jungla de SkewMond: nueve años de espera" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El momento de la noche fue protagonizado por el jungla de G2, SkewMond, que sacó un Nasus jungla en la partida 5 — un pick que no se había visto en juego profesional desde hacía nueve años. SkewMond acumuló stacks durante toda la partida y se volvió imbatible en el mid-game, terminando la partida sin ninguna muerte. Fue nombrado MVP de la Gran Final.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Camino al Bracket Stage del MSI" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Con este campeonato, G2 Esports asegura su plaza en el Bracket Stage del MSI 2026. El equipo formado por BrokenBlade (top), SkewMond (jungla), Caps (mid), Hans Sama (bot) y Labrov (support) llega a la fase internacional como el principal representante de EMEA.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "G2 Esports cierra un doblete incuestionable con el título del LEC Spring 2026. El Nasus jungla sin muertes de SkewMond en la partida 5 quedará como la imagen definitoria de esta Gran Final. El equipo lleva ahora su trayectoria al MSI.",
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
