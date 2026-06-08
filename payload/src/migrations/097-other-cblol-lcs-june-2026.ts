import type { MigrationModule } from './runner'

export const id = '097-other-cblol-lcs-june-2026'
export const description = 'Autres Régions — FURIA champion CBLOL 2026 Split 1 (3-1 vs LOS) + LYON sweep Cloud9 3-0 UBF LCS Spring 2026'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-08T08:00:00.000Z'

const articles = [
  // ──────────────────────────────────────────────
  // CBLOL 2026 Split 1 — FR
  // ──────────────────────────────────────────────
  {
    title: 'CBLOL 2026 Split 1 : FURIA sacre champion en battant LOS 3-1 et file au MSI',
    slug: 'cblol-2026-split-1-furia-champion-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/JuL1dVm0VWw/maxresdefault.jpg',
    excerpt:
      "Le 6 juin 2026, FURIA Esports a remporté la Grande Finale du CBLOL 2026 Split 1 en dominant LOS 3-1. Le titre offre à l'organisation brésilienne une qualification directe pour le MSI 2026 et l'EWC.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/cblol',
    tags: [{ tag: 'LoL' }, { tag: 'CBLOL' }, { tag: 'Playoffs' }, { tag: 'FURIA' }, { tag: 'Brésil' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Le 6 juin 2026 au Riot Games Arena de São Paulo, FURIA Esports a décroché le titre de champion du CBLOL 2026 Split 1 en dominant LOS sur le score de 3-1 lors d'une Grande Finale très attendue. C'est le second titre majeur de l'organisation brésilienne, après celui décroché en 2025, et il s'accompagne d'une qualification directe pour le Mid-Season Invitational 2026.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "FURIA confirme son statut de favori" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Tout au long des playoffs, FURIA n'a laissé aucune chance à ses adversaires. Après avoir sorti RED Canids 3-0 en demi-finale, l'équipe a abordé la Grande Finale avec une confiance absolue. LOS, pourtant solides pour atteindre la finale après leur victoire 3-2 sur Fluxo W7M, n'ont pu prendre qu'une seule carte face à une FURIA au sommet de sa forme. La victoire 3-1 est à la fois méritée et convaincante.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Cap sur le MSI 2026 et l'EWC" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "En remportant le Split 1, FURIA valide automatiquement sa place au Mid-Season Invitational 2026, prévu du 28 juin au 12 juillet à Daejeon, en Corée du Sud. C'est la première fois depuis plusieurs années qu'une équipe brésilienne se qualifie pour le MSI avec autant d'aisance dès le premier split. L'organisation décroche également une invitation à l'Esports World Cup 2026, renforçant encore son agenda international.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "LOS tombe en finale, mais s'impose comme outsider à surveiller" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Malgré la défaite, LOS réalise un beau parcours pour un premier accès à la Grande Finale du CBLOL. L'équipe a notamment éliminé Fluxo W7M 3-2 en demi-finale dans une série accrochée. Le potentiel affiché laisse entrevoir une équipe capable de monter encore en puissance lors du prochain split. RED Canids et Fluxo W7M complètent le podium de ce Split 1.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "FURIA, ambassadeur du Brésil sur la scène mondiale" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Avec cette victoire, FURIA s'affirme comme la meilleure équipe d'Amérique du Sud en ce début de saison 2026. Leur jeu agressif, leur maîtrise macro et la solidité individuelle de leur roster les placent parmi les équipes à surveiller sur la scène internationale. Les regards se tournent désormais vers Daejeon et la confrontation avec les meilleures équipes mondiales au MSI 2026.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Champions du Brésil, qualifiés pour le MSI et l'EWC : FURIA Esports s'impose comme la référence sud-américaine de la saison 2026.",
          },
        ],
      },
    ],
  },
  // ──────────────────────────────────────────────
  // CBLOL 2026 Split 1 — EN
  // ──────────────────────────────────────────────
  {
    title: 'CBLOL 2026 Split 1: FURIA Win Championship 3-1 Over LOS, Qualify for MSI',
    slug: 'cblol-2026-split-1-furia-champion-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/JuL1dVm0VWw/maxresdefault.jpg',
    excerpt:
      "FURIA Esports claimed the CBLOL 2026 Split 1 title on June 6, defeating LOS 3-1 in the Grand Final. The victory earns FURIA a direct qualification to MSI 2026 and the Esports World Cup.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/cblol',
    tags: [{ tag: 'LoL' }, { tag: 'CBLOL' }, { tag: 'Playoffs' }, { tag: 'FURIA' }, { tag: 'Brazil' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "FURIA Esports are the CBLOL 2026 Split 1 champions. On June 6 at the Riot Games Arena in São Paulo, the Brazilian squad defeated LOS 3-1 in a Grand Final that confirmed their status as the dominant force in Brazil. It is the organization's second major title following their 2025 championship, and it comes with an automatic spot at the 2026 Mid-Season Invitational.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "FURIA Live Up to Favourites Tag" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "FURIA had been the standout team throughout the CBLOL 2026 Split 1 playoffs. They dispatched RED Canids 3-0 in the semifinals before turning their attention to LOS in the Grand Final. LOS had earned their spot with a thrilling 3-2 win over Fluxo W7M, but could only claim one map against a FURIA side operating at peak level. The 3-1 scoreline flatters LOS slightly — FURIA were firmly in control for most of the series.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "MSI 2026 and EWC Spots Locked In" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "By winning the CBLOL Split 1, FURIA secure Brazil's representative slot at the 2026 Mid-Season Invitational, scheduled from June 28 to July 12 in Daejeon, South Korea. It marks Brazil's return to MSI as genuine contenders after years of results that failed to match expectations. FURIA also lock in a spot at the Esports World Cup 2026, adding another major international event to their summer calendar.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "LOS Show Their Potential" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Despite the loss, LOS produced an impressive tournament run. Reaching a CBLOL Grand Final for the first time, the team demonstrated the kind of competitive depth that suggests they will be challengers for future splits. The 3-2 semifinal win over Fluxo W7M showed their resilience and adaptability. They finish as CBLOL 2026 Split 1 runners-up, with RED Canids and Fluxo W7M rounding out the top four.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "All Eyes on Daejeon" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "FURIA head to MSI 2026 as Brazil's flag-bearers, carrying real momentum from a dominant Split 1 campaign. Their aggressive team-fighting style, macro control, and individual quality make them a team capable of making noise on the international stage. The competition in Daejeon will feature the best teams from LCK, LPL, LEC, and all other major regions — FURIA will be among the most watched.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Brazil's champions, MSI-bound, and EWC-locked: FURIA Esports enter the international stage as South America's strongest team of the 2026 season.",
          },
        ],
      },
    ],
  },
  // ──────────────────────────────────────────────
  // CBLOL 2026 Split 1 — ES
  // ──────────────────────────────────────────────
  {
    title: 'CBLOL 2026 Split 1: FURIA se corona campeona 3-1 ante LOS y se clasifica para el MSI',
    slug: 'cblol-2026-split-1-furia-champion-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/JuL1dVm0VWw/maxresdefault.jpg',
    excerpt:
      "FURIA Esports conquistó el título del CBLOL 2026 Split 1 el 6 de junio, derrotando a LOS 3-1 en la Gran Final. La victoria le otorga clasificación directa al MSI 2026 y al Esports World Cup.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/cblol',
    tags: [{ tag: 'LoL' }, { tag: 'CBLOL' }, { tag: 'Playoffs' }, { tag: 'FURIA' }, { tag: 'Brasil' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "FURIA Esports es el nuevo campeón del CBLOL 2026 Split 1. El 6 de junio en el Riot Games Arena de São Paulo, el equipo brasileño derrotó a LOS por 3-1 en una Gran Final que certificó su dominio absoluto sobre el panorama competitivo de Brasil. Se trata del segundo título importante de la organización, tras el logrado en 2025, y viene acompañado de una plaza directa en el Mid-Season Invitational 2026.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "FURIA confirma su hegemonía en Brasil" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "A lo largo de los playoffs, FURIA no dejó margen alguno a sus rivales. Tras barrer a RED Canids 3-0 en las semifinales, el equipo llegó a la Gran Final con una confianza máxima. LOS, que había alcanzado la final tras una vibrante remontada 3-2 sobre Fluxo W7M, solo pudo arañar un mapa. El 3-1 final es un reflejo claro del nivel de diferencia: FURIA fue superior en todos los aspectos del juego.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Rumbo al MSI 2026 y al EWC" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Al ganar el Split 1, FURIA asegura la plaza de Brasil en el Mid-Season Invitational 2026, programado del 28 de junio al 12 de julio en Daejeon, Corea del Sur. Será la primera vez en varios años que un equipo brasileño llega al MSI con semejante nivel de confianza y con una actuación que lo respalda. Además, la organización se asegura también una invitación al Esports World Cup 2026, consolidando un verano internacional repleto de compromisos de alto nivel.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "LOS, un finalista revelación" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Pese a caer en la Gran Final, LOS realizó un torneo muy notable. Llegar a la final del CBLOL por primera vez supone un hito importante para la organización, que mostró una capacidad competitiva real frente a los mejores equipos de Brasil. Su victoria 3-2 ante Fluxo W7M en semifinales dejó claro que tienen argumentos para pelear más. Terminan como subcampeones del CBLOL 2026 Split 1, con RED Canids y Fluxo W7M cerrando el podio.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "FURIA, la bandera sudamericana en Daejeon" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "FURIA llega al MSI 2026 con un impulso magnífico tras un Split 1 dominado de principio a fin. Su estilo agresivo, el dominio macro y la calidad individual del roster los convierten en uno de los equipos más peligrosos que competirán en Daejeon. Las miradas de toda Sudamérica estarán puestas en el equipo para ver si pueden llevar el banner regional a lo más alto de la competición internacional.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Campeones de Brasil, clasificados para el MSI y el EWC: FURIA Esports se consolida como la referencia de Sudamérica en la temporada 2026.",
          },
        ],
      },
    ],
  },
  // ──────────────────────────────────────────────
  // LCS Spring 2026 UBF — FR
  // ──────────────────────────────────────────────
  {
    title: 'LCS Spring 2026 : LYON balaie Cloud9 3-0 en Upper Bracket Final et file en Grande Finale',
    slug: 'lcs-spring-2026-lyon-sweep-c9-ubf-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/263S-RuG_CA/maxresdefault.jpg',
    excerpt:
      "Le 7 juin 2026, LYON a dominé Cloud9 3-0 en Upper Bracket Final des LCS Spring 2026 Playoffs. L'équipe accède directement à la Grande Finale du 14 juin, tandis que Cloud9 chute en Lower Bracket Final face à Team Liquid.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcs',
    tags: [{ tag: 'LoL' }, { tag: 'LCS' }, { tag: 'Playoffs' }, { tag: 'LYON' }, { tag: 'Cloud9' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Le 7 juin 2026 à Los Angeles, LYON a réalisé l'un des résultats les plus marquants des LCS Spring 2026 Playoffs en balayant Cloud9 3-0 lors de l'Upper Bracket Final. Un sweep net qui propulse LYON directement en Grande Finale prévue le 14 juin, alors que Cloud9 — invaincu en saison régulière — doit désormais passer par le bracket inférieur pour tenter de rester en lice.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "LYON, une machine en playoffs" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Cette victoire confirme la montée en puissance de LYON depuis le début de la saison 2026. Après avoir remporté le LCS Lock-In en début d'année, l'équipe avait terminé deuxième de la saison régulière derrière Cloud9. En playoffs, le rapport de force s'est inversé : LYON a imposé son rythme dès le premier jeu, ne laissant jamais à Cloud9 l'espace pour s'exprimer. Les trois cartes ont été maîtrisées avec une aisance remarquable.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Cloud9 contraint au Lower Bracket" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Cloud9, grande favorite de ces playoffs après une saison régulière parfaite, encaisse une défaite surprise en Upper Bracket Final. L'équipe est désormais relégée en Lower Bracket Final, où elle affrontera Team Liquid, qui avait battu FlyQuest pour atteindre ce stade. Une victoire reste possible, mais le chemin vers la Grande Finale s'est considérablement allongé pour C9, qui devra répondre présent face à une Liquid motivée.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "L'enjeu : le ticket MSI pour l'Amérique du Nord" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La Grande Finale des LCS Spring 2026 Playoffs déterminera non seulement le champion de la région, mais aussi le représentant nord-américain au Mid-Season Invitational 2026. LYON, en réservant sa place en finale dès l'Upper Bracket, aura un avantage logistique et mental pour préparer cette grande finale. Quelle que soit l'équipe qui atteint la finale côté Lower Bracket, LYON sera à attendre au tournant.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "La Grande Finale le 14 juin à Los Angeles" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le LCS Spring 2026 sera couronné d'une Grande Finale le 14 juin à Los Angeles. LYON s'y présente avec un avantage de bracket et une dynamique favorable après deux victoires en Upper Bracket. Leur adversaire sortira de la Lower Bracket Final entre Cloud9 et Team Liquid. L'issue de cette série déterminera si C9 peut retrouver LYON et prendre sa revanche, ou si Liquid crée la surprise pour atteindre la grande finale.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "LYON sweep Cloud9 et s'installe en Grande Finale : les champions du Lock-In visent maintenant le titre LCS Spring 2026 et le ticket pour le MSI.",
          },
        ],
      },
    ],
  },
  // ──────────────────────────────────────────────
  // LCS Spring 2026 UBF — EN
  // ──────────────────────────────────────────────
  {
    title: 'LCS Spring 2026 Playoffs: LYON Sweep Cloud9 3-0 in Upper Bracket Final',
    slug: 'lcs-spring-2026-lyon-sweep-c9-ubf-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/263S-RuG_CA/maxresdefault.jpg',
    excerpt:
      "LYON swept Cloud9 3-0 in the LCS Spring 2026 Upper Bracket Final on June 7, booking their spot in the Grand Final on June 14. Cloud9 now face Team Liquid in the Lower Bracket Final.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcs',
    tags: [{ tag: 'LoL' }, { tag: 'LCS' }, { tag: 'Playoffs' }, { tag: 'LYON' }, { tag: 'Cloud9' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "LYON delivered one of the most impressive performances of the LCS Spring 2026 Playoffs on June 7, sweeping Cloud9 3-0 in the Upper Bracket Final in Los Angeles. The clean sweep sends LYON directly to the Grand Final on June 14, while Cloud9 — who had gone undefeated through the regular season — must now fight through the Lower Bracket Final just to stay alive.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "LYON Look Unstoppable in Playoffs" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "LYON's dominant run through these playoffs is no accident. The Lock-In 2026 champions finished second in the regular season behind Cloud9, but have since looked a level above everyone else in the playoff bracket. In all three games of the Upper Bracket Final, LYON controlled the pace and shut down Cloud9's attempts to find any footing. The sweep was convincing on every front — drafting, macro, and individual play.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Cloud9 Knocked Into Lower Bracket" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Cloud9's unbeaten regular season form has not carried over into the playoffs. After defeating FlyQuest 3-2 in the Upper Bracket Semifinals, C9 now face a tougher path to the title. They drop into the Lower Bracket Final against Team Liquid, who defeated FlyQuest to reach this stage. Cloud9 remain capable of winning from this position, but they will need a significant improvement from the performance against LYON to do so.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "MSI 2026 Spot on the Line" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The LCS Spring 2026 Grand Final carries significant stakes beyond the title. The champion will represent North America at the 2026 Mid-Season Invitational in Daejeon, South Korea. LYON, already in the Grand Final with a full week to prepare, hold the advantage in that race. Whoever survives the Lower Bracket Final will arrive as challengers, while LYON will be waiting with bracket advantage and momentum.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Grand Final Set for June 14 in Los Angeles" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The LCS Spring 2026 Grand Final takes place on June 14 at the Mullett Arena in Los Angeles. LYON arrive as the bracket favourite after their dominant run through the upper side of the bracket. The opponent will be determined by the Lower Bracket Final between Cloud9 and Team Liquid. A potential LYON vs Cloud9 rematch in the Grand Final would be one of the most anticipated finals in recent LCS history.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "LYON sweep Cloud9 and march into the Grand Final: the Lock-In champions are now one win away from claiming the LCS Spring 2026 title and North America's MSI spot.",
          },
        ],
      },
    ],
  },
  // ──────────────────────────────────────────────
  // LCS Spring 2026 UBF — ES
  // ──────────────────────────────────────────────
  {
    title: 'LCS Spring 2026 Playoffs: LYON arrasa a Cloud9 3-0 en la Final del Bracket Superior',
    slug: 'lcs-spring-2026-lyon-sweep-c9-ubf-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/263S-RuG_CA/maxresdefault.jpg',
    excerpt:
      "LYON barrió a Cloud9 3-0 el 7 de junio en la Final del Bracket Superior de los LCS Spring 2026 Playoffs. El equipo se asegura un lugar en la Gran Final del 14 de junio, mientras Cloud9 cae al bracket inferior.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcs',
    tags: [{ tag: 'LoL' }, { tag: 'LCS' }, { tag: 'Playoffs' }, { tag: 'LYON' }, { tag: 'Cloud9' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "LYON protagonizó una de las actuaciones más impactantes de los LCS Spring 2026 Playoffs al arrasar a Cloud9 por 3-0 en la Final del Bracket Superior el 7 de junio en Los Ángeles. El sweep coloca a LYON directamente en la Gran Final del 14 de junio, mientras que Cloud9 — invicto en la fase regular — se ve obligado a pelear a través del bracket inferior para mantenerse con vida en el torneo.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "LYON, dominadores absolutos en los playoffs" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "LYON lleva varios partidos demostrando que su nivel en playoffs supera ampliamente al de la fase regular. Los campeones del Lock-In 2026 terminaron segundos en la clasificación regular por detrás de Cloud9, pero en el formato de eliminación directa la historia ha sido completamente diferente. En los tres mapas de la Final del Bracket Superior, LYON impuso su ritmo desde el inicio, controlando el mapa y neutralizando todos los intentos de reacción de Cloud9.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Cloud9 relegado al bracket inferior" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La temporada regular perfecta de Cloud9 no ha encontrado continuidad en los playoffs. Tras ganar a FlyQuest 3-2 en las semifinales del bracket superior, C9 ahora enfrenta un camino mucho más difícil. Caen a la Final del Bracket Inferior, donde se medirán a Team Liquid, que derrotó a FlyQuest para alcanzar esta fase. Cloud9 sigue siendo capaz de ganar desde ahí, pero necesita una mejora considerable respecto a lo mostrado ante LYON.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "En juego: la plaza para el MSI 2026" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La Gran Final de los LCS Spring 2026 Playoffs decide algo más que el título regional: el campeón representará a Norteamérica en el Mid-Season Invitational 2026 en Daejeon, Corea del Sur. LYON, ya clasificado con una semana de ventaja para preparar la final, parte como favorito en esa carrera. Quien supere la Final del Bracket Inferior llegará como retador, pero con LYON esperando con el momentum de bracket a su favor.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Gran Final el 14 de junio en Los Ángeles" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La Gran Final del LCS Spring 2026 se disputará el 14 de junio en el Mullett Arena de Los Ángeles. LYON llega como favorito tras su dominante trayectoria por el bracket superior. El rival será el ganador de la Final del Bracket Inferior entre Cloud9 y Team Liquid. Una posible revancha entre LYON y Cloud9 en la Gran Final sería uno de los duelos más esperados en la historia reciente de la LCS.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "LYON barre a Cloud9 y marcha hacia la Gran Final: los campeones del Lock-In están ahora a un paso del título LCS Spring 2026 y la plaza de Norteamérica en el MSI.",
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
