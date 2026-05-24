import type { MigrationModule } from './runner'

export const id = '064-lec-spring-2026-ub-semis-vit-mkoi'
export const description = 'LEC Spring 2026 — MKOI bat VIT en demi-finale bracket supérieur (24 mai)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-24T08:00:00.000Z'

const articles = [
  {
    title: 'LEC Spring 2026 Playoffs : Movistar KOI domine Team Vitality et file en finale UB',
    slug: 'lec-spring-2026-ub-semis-vit-mkoi-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      'Ce dimanche 24 mai, Movistar KOI a créé la sensation en dominant la tête de série numéro un Team Vitality dans les demi-finales du bracket supérieur des LEC Spring 2026 Playoffs. Les Espagnols s\'avancent vers la finale UB prévue le 25 mai.',
    sourceUrl: 'https://lolesports.com/tournament/115548424304940735',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Playoffs' }, { tag: 'Movistar KOI' }, { tag: 'Vitality' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Movistar KOI a réalisé l\'une des performances les plus impressionnantes de ces LEC Spring 2026 Playoffs en s\'imposant face à Team Vitality lors des demi-finales du bracket supérieur, ce dimanche 24 mai à 17h CEST. La tête de série numéro un, qui avait terminé première de la saison régulière, tombe de haut et doit désormais prendre la voie du bracket inférieur.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Elyoya et MKOI au sommet de leur jeu' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Emmenés par un Elyoya étincelant à la jungle, les joueurs de Movistar KOI ont su imposer leur style de jeu à chaque moment décisif de la série. L\'équipe espagnole, quatrième de la saison régulière, avait pourtant été choisie comme adversaire par Vitality — une décision que la tête de série numéro un paie cash ce soir. MKOI a prouvé que son bilan en phase régulière sous-estimait largement leur potentiel en Best-of-5.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Vitality contraint de remonter par le bas' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Pour Team Vitality, la défaite est un coup dur mais pas fatal dans ce format à double élimination. Humanoid et ses coéquipiers, dont Carzzy en ADC, devront désormais enchaîner les victoires dans le bracket inférieur pour espérer atteindre la grande finale du LEC Spring. La route sera longue, mais le LEC Versus avait déjà montré que VIT était capable de renversements spectaculaires.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Ces deux équipes se retrouvaient après des affrontements tendus tout au long de la saison. En LEC Versus (février 2026), MKOI avait déjà pris le dessus sur Vitality. Ce soir, les Espagnols confirment leur statut de prétendants sérieux au titre de LEC Spring 2026.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'La suite du programme' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Movistar KOI affrontera le vainqueur de la demi-finale KC vs G2 en finale du bracket supérieur, prévue le lundi 25 mai. Un ticket direct pour la grande finale du Spring — et potentiellement une place en représentation internationale — est en jeu. Les playoffs LEC Spring 2026 se concluent par la grande finale le 7 juin 2026.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Movistar KOI démontre que le classement régulier ne dit pas tout : dans un BO5 de playoffs, la profondeur stratégique prime. Les Espagnols sont en finale UB.',
          },
        ],
      },
    ],
  },
  {
    title: 'LEC Spring 2026 Playoffs: Movistar KOI Outplay Team Vitality to Reach UB Final',
    slug: 'lec-spring-2026-ub-semis-vit-mkoi-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      'Movistar KOI delivered a stunning performance on May 24, eliminating top seed Team Vitality in the Upper Bracket Semifinals of the LEC Spring 2026 Playoffs. MKOI now advance to the UB Final on May 25.',
    sourceUrl: 'https://lolesports.com/tournament/115548424304940735',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Playoffs' }, { tag: 'Movistar KOI' }, { tag: 'Vitality' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Movistar KOI pulled off one of the standout results of the LEC Spring 2026 Playoffs on Sunday, May 24, defeating first seed Team Vitality in the Upper Bracket Semifinals at 17:00 CEST. Vitality, who had secured the top regular season spot before the final week concluded, now drop into the lower bracket and must fight their way back if they want to reach the grand final.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Elyoya Leads MKOI to an Impressive Win' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Jungler Elyoya was a standout performer throughout the series, exemplifying the controlled and proactive style that has defined Movistar KOI this split. The Spanish organization, which entered the playoffs as the fourth seed, was actually hand-picked as Vitality\'s opponent — a choice that backfired spectacularly. MKOI demonstrated that their regular season record did not reflect their true ceiling in extended Best-of-5 play.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Vitality Sent to the Lower Bracket' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'For Team Vitality, the loss is a painful one, but the double-elimination format keeps their title hopes alive. Humanoid, Carzzy, and the rest of the Vitality lineup will now need to run the gauntlet through the lower bracket — winning every series — to have a shot at the Spring crown. It is a far more difficult path, but Vitality have shown resilience throughout the 2026 season.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'This matchup had been anticipated all split. Earlier in the LEC Versus (February 2026), MKOI had already gotten the better of Vitality. Tonight\'s result confirms that Movistar KOI are no longer just a regular season contender — they are a legitimate finals threat.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'What\'s Next' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'MKOI will face the winner of the Karmine Corp vs G2 Upper Bracket Semifinal in the UB Final, scheduled for Monday, May 25. A direct path to the grand final — and a shot at international representation — awaits the winner. The LEC Spring 2026 grand final is set for June 7, 2026.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Movistar KOI prove that seeding means little in a Best-of-5 Playoffs. They are the real deal, and the Upper Bracket Final is the stage they deserve.',
          },
        ],
      },
    ],
  },
  {
    title: 'LEC Spring 2026 Playoffs: Movistar KOI supera a Team Vitality y avanza a la Final del UB',
    slug: 'lec-spring-2026-ub-semis-vit-mkoi-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      'Movistar KOI brilló este 24 de mayo al eliminar al primer cabeza de serie Team Vitality en las Semifinales del Bracket Superior de los LEC Spring 2026 Playoffs. Los españoles se citan con la Final del UB el 25 de mayo.',
    sourceUrl: 'https://lolesports.com/tournament/115548424304940735',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Playoffs' }, { tag: 'Movistar KOI' }, { tag: 'Vitality' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Movistar KOI protagonizó uno de los resultados más destacados de los LEC Spring 2026 Playoffs este domingo 24 de mayo, derrotando al primer cabeza de serie Team Vitality en las Semifinales del Bracket Superior a las 17:00 CEST. Vitality, que había asegurado el primer puesto de la fase regular antes de la última jornada, cae al bracket inferior y deberá luchar para llegar a la gran final.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Elyoya y MKOI, sobresalientes' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'El jungla Elyoya fue el jugador más destacado de la serie, mostrando el estilo controlado y proactivo que ha definido a Movistar KOI durante todo el split. La organización española, que entró en playoffs como cuarta cabeza de serie y fue elegida por Vitality como rival, respondió de la mejor manera posible. MKOI demostró que su clasificación en la fase regular no reflejaba su verdadero potencial en series al mejor de cinco partidas.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Vitality, al bracket inferior' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Para Team Vitality, la derrota es un golpe duro, pero el formato de doble eliminación mantiene viva su esperanza. Humanoid, Carzzy y el resto de la plantilla deberán ganar todas las series del bracket inferior para tener opciones de llegar a la gran final del Spring. Es un camino mucho más difícil, pero Vitality ha demostrado resiliencia a lo largo de toda la temporada 2026.',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Este enfrentamiento era esperado desde el inicio del split. Anteriormente en el LEC Versus (febrero de 2026), MKOI ya había superado a Vitality. El resultado de esta noche confirma que Movistar KOI no son solo contendientes en la fase regular: son una amenaza real de cara al título.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Qué viene ahora' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'MKOI se enfrentará al ganador de la Semifinal del Bracket Superior entre Karmine Corp y G2 en la Final del UB, programada para el lunes 25 de mayo. El ganador obtiene un pase directo a la gran final del Spring 2026 — y potencialmente la representación internacional de la región. La gran final del LEC Spring 2026 está prevista para el 7 de junio de 2026.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Movistar KOI demuestra que el seeding importa poco en unos Playoffs al mejor de cinco. Son un equipo de primer nivel y la Final del Bracket Superior es el escenario que merecen.',
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
