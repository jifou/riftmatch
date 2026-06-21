import type { MigrationModule } from './runner'

export const id = '122-lec-summer-2026-primer'
export const description = 'LEC Summer 2026 — primer : début le 24 juillet, 10 équipes, finale à Madrid (4-6 septembre), top 3 qualifié pour les Worlds'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-21T08:00:00.000Z'

const articles = [
  {
    title: "LEC Summer 2026 : tout ce qu'il faut savoir avant la reprise du 24 juillet",
    slug: 'lec-summer-2026-primer-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lec' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Dix équipes, un format single round robin BO3 et trois places pour les Worlds en jeu : le LEC Summer 2026 débute le 24 juillet à Berlin. La grande finale se disputera à Madrid les 4-6 septembre.",
    sourceUrl: 'https://lolesports.com/en-GB/news/lec-summer-primer-finals-in-madrid-await',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Esports' }, { tag: 'LEC Summer 2026' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Le LEC reprend ses droits le 24 juillet 2026 avec le coup d'envoi du Summer Split, le second et dernier acte de la saison LEC. Après un Spring couronné par G2 Esports (3-2 face à Karmine Corp en grande finale) et un MSI 2026 à Daejeon, les dix formations de l'EMEA retournent à la Riot Games Arena de Berlin pour la course aux Worlds.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Format : single round robin BO3, six qualifiés en playoffs' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le LEC Summer 2026 conserve le même format que le Spring : dix équipes s'affrontent dans un single round robin en best-of-three. À l'issue de la phase régulière, les six premières équipes se qualifient pour les playoffs en double élimination, intégralement joués en BO5. Les matchs de saison régulière se tiennent à Berlin chaque semaine, avant un déplacement exceptionnel à Madrid pour la grande finale.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Les dix équipes en lice' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "G2 Esports, Karmine Corp, Team Vitality, Fnatic, GIANTX, Movistar KOI, SK Gaming, Natus Vincere, Shifters (ex-Team BDS, renommés en décembre 2025) et Team Heretics constituent le plateau 2026. G2 abordent ce Summer en champions en titre du LEC Spring et en vainqueurs de la First Stand 2026, avec l'objectif de signer un troisième titre consécutif. KC, finaliste de chaque split depuis le printemps 2025, voudra enfin décrocher le premier titre de son histoire en LEC.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Trois places pour les Worlds 2026' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "L'enjeu est maximal : les trois premières équipes des playoffs LEC Summer décrochent leur billet pour le World Championship 2026. C'est la compétition la plus importante de la saison pour les organisations européennes. Le Summer Split est également la dernière occasion pour les équipes hors-playoffs de renverser la hiérarchie avant la fin de saison.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Grande finale à Madrid : 4-6 septembre' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La grande finale du LEC Summer 2026 se disputera au Madrid Arena les 4, 5 et 6 septembre 2026, dans le cadre des LEC Roadtrips. L'événement de Madrid marquera le climax de la saison EMEA, avec les meilleures équipes européennes en lice pour le titre régional et la qualification mondiale. La ville avait déjà accueilli un Roadtrip de printemps les 8-10 mai.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "LEC Summer 2026 : Berlin d'abord, Madrid en finale — les Worlds comme horizon pour les trois premiers.",
          },
        ],
      },
    ],
  },
  {
    title: "LEC Summer 2026 Primer: Start Date, Teams, Format and Worlds Stakes",
    slug: 'lec-summer-2026-primer-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lec' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Ten teams, a BO3 single round robin format and three Worlds spots on the line: LEC Summer 2026 kicks off July 24 in Berlin, with the grand finals heading to Madrid on September 4-6.",
    sourceUrl: 'https://lolesports.com/en-GB/news/lec-summer-primer-finals-in-madrid-await',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Esports' }, { tag: 'LEC Summer 2026' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "The LEC returns on July 24, 2026 with the start of the Summer Split — the second and final chapter of the 2026 season. After a Spring crowned by G2 Esports (3-2 over Karmine Corp in the grand final) and MSI 2026 in Daejeon, all ten EMEA organizations head back to the Riot Games Arena in Berlin to battle for the most coveted prize of the year: a spot at Worlds.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Format: BO3 single round robin, top six to playoffs' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "LEC Summer 2026 keeps the same format as the Spring split: ten teams compete in a single round robin where every match is a best-of-three. At the end of the regular season, the top six teams advance to a double-elimination playoff bracket, with all playoff matches played in best-of-five. Weekly regular season games take place in Berlin, before the competition heads to Madrid for the grand finals.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'The ten competing teams' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "G2 Esports, Karmine Corp, Team Vitality, Fnatic, GIANTX, Movistar KOI, SK Gaming, Natus Vincere, Shifters (formerly Team BDS, rebranded in December 2025) and Team Heretics make up the 2026 LEC roster. G2 enter the Summer as reigning LEC Spring champions and First Stand 2026 winners, looking to secure a third consecutive LEC title. Karmine Corp, finalists in every split since Spring 2025, will be aiming to claim the organization's first-ever LEC trophy.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Three Worlds spots up for grabs' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The stakes could not be higher: the top three teams from the LEC Summer playoffs earn direct qualification to the 2026 World Championship. For European organizations, this is the most important competition of the year. The Summer split also represents the last chance for teams outside the traditional top four to upset the established hierarchy before the season closes.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Grand finals in Madrid: September 4-6' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The LEC Summer 2026 grand finals will be held at the Madrid Arena on September 4, 5 and 6, as part of the LEC Roadtrips series. The Madrid event marks the season's climax for EMEA, with the top teams competing for the regional title and a Worlds berth. Madrid already hosted a Spring Roadtrip event on May 8-10.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "LEC Summer 2026: Berlin first, Madrid in the finals — with Worlds as the ultimate destination for the top three.",
          },
        ],
      },
    ],
  },
  {
    title: "LEC Summer 2026: Todo lo que necesitas saber antes del 24 de julio",
    slug: 'lec-summer-2026-primer-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lec' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Diez equipos, formato BO3 single round robin y tres plazas para Worlds en juego: el LEC Summer 2026 arranca el 24 de julio en Berlín, con la gran final en Madrid del 4 al 6 de septiembre.",
    sourceUrl: 'https://lolesports.com/en-GB/news/lec-summer-primer-finals-in-madrid-await',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Esports' }, { tag: 'LEC Summer 2026' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "La LEC regresa el 24 de julio de 2026 con el inicio del Summer Split, el segundo y último acto de la temporada. Tras un Spring coronado por G2 Esports (3-2 sobre Karmine Corp en la gran final) y el MSI 2026 en Daejeon, las diez organizaciones de la EMEA vuelven al Riot Games Arena de Berlín para disputar los puestos más codiciados de la temporada: las plazas para el Mundial.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Formato: round robin BO3, seis equipos a playoffs' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El LEC Summer 2026 mantiene el mismo formato que el Spring: diez equipos compiten en un single round robin con partidos al mejor de tres. Al término de la fase regular, los seis primeros clasificados acceden a un bracket de playoffs en doble eliminación, donde todos los duelos son al mejor de cinco. Los partidos de temporada regular se celebran semanalmente en Berlín, antes de que la competición se traslade a Madrid para la gran final.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Los diez equipos participantes' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "G2 Esports, Karmine Corp, Team Vitality, Fnatic, GIANTX, Movistar KOI, SK Gaming, Natus Vincere, Shifters (exTeam BDS, rebautizados en diciembre de 2025) y Team Heretics componen el elenco 2026 de la LEC. G2 llegan al Summer como campeones vigentes del LEC Spring y de la First Stand 2026, en busca de un tercer título consecutivo. Karmine Corp, finalistas en cada split desde la primavera de 2025, intentarán lograr el primer título de la LEC en la historia del club.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Tres plazas para el Mundial 2026' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El premio mayor es claro: los tres primeros clasificados en los playoffs del LEC Summer 2026 consiguen su pase directo al World Championship 2026. Para las organizaciones europeas, este split es la competición más importante del año. Además, representa la última oportunidad para los equipos fuera del top cuatro de cambiar la jerarquía establecida antes del cierre de temporada.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Gran final en Madrid: 4-6 de septiembre' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La gran final del LEC Summer 2026 se disputará en el Madrid Arena los días 4, 5 y 6 de septiembre, dentro de la serie de LEC Roadtrips. El evento de Madrid representa el punto culminante de la temporada EMEA, con los mejores equipos europeos luchando por el título regional y una plaza en los Worlds. Madrid ya acogió un Roadtrip de primavera los días 8-10 de mayo.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "LEC Summer 2026: Berlín primero, Madrid en la final — con los Worlds como horizonte para los tres primeros.",
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
