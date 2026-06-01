import type { MigrationModule } from './runner'

export const id = '084-lec-spring-2026-lb-giantx-vit'
export const description = 'LEC Spring 2026 Playoffs — GIANTX élimine Team Vitality 3-0 (bracket inférieur, 31 mai)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-01T08:00:00.000Z'

const articles = [
  {
    title: 'LEC Spring 2026 Playoffs : GIANTX écrase Team Vitality 3-0 et passe en demi-finale LB',
    slug: 'lec-spring-2026-lb-giantx-vit-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      "Le 31 mai 2026, GIANTX a éliminé Team Vitality 3-0 au premier tour du bracket inférieur des LEC Spring 2026 Playoffs. Humanoid, Carzzy et leurs coéquipiers avancent en demi-finale LB face à Karmine Corp.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LEC/2026/Spring/Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Playoffs' }, { tag: 'GIANTX' }, { tag: 'Team Vitality' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Ce dimanche 31 mai 2026, GIANTX a éliminé Team Vitality sur le score de 3-0 au premier tour du bracket inférieur des LEC Spring 2026 Playoffs. Un sweep autoritaire qui confirme la dangerosité des Géants dans cette phase finale.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Un sweep sans discussion" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "GIANTX a imposé son jeu sur l'ensemble des trois parties. Avec Humanoid en position de mid laner dominant et Carzzy en ADC au plus haut de son niveau, l'équipe composée également de Naak (top), Nako (jungle) et Fleshy (support) n'a laissé aucun espace à Team Vitality. Le score cumulé de la série (3-0) traduit une domination collective de bout en bout.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Vitality éliminée, 5e-6e au classement final" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Pour Team Vitality, l'aventure LEC Spring 2026 s'arrête en bracket inférieur, premier tour. Envoyée dans la partie basse du tableau après sa défaite 3-0 contre Movistar KOI en demi-finale du bracket supérieur le 24 mai, Vitality n'a pas réussi à trouver les ressources pour rebondir. L'équipe quitte les playoffs en 5e-6e position aux côtés de Natus Vincere, également éliminée la veille.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "GIANTX vs Karmine Corp le 1er juin" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "GIANTX affronte maintenant Karmine Corp en demi-finale du bracket inférieur, ce lundi 1er juin 2026. KC avait de son côté éliminé Natus Vincere 3-1 le 30 mai. Le vainqueur de cette demi-finale défiera Movistar KOI — tombé en finale du bracket supérieur face à G2 Esports 3-2 — lors de la finale LB du 6 juin. La grande finale est programmée le 7 juin 2026.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Un 3-0 net contre l'une des meilleures équipes de la saison régulière : GIANTX envoie un message fort à tout le bracket inférieur. La confrontation avec Karmine Corp s'annonce déjà électrique.",
          },
        ],
      },
    ],
  },
  {
    title: 'LEC Spring 2026 Playoffs: GIANTX Sweep Team Vitality 3-0 to Advance to Lower Bracket Semis',
    slug: 'lec-spring-2026-lb-giantx-vit-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      "GIANTX eliminated Team Vitality 3-0 on May 31, 2026 in the LEC Spring 2026 Playoffs Lower Bracket. Humanoid, Carzzy and the squad advance to face Karmine Corp in the Lower Bracket Semifinals on June 1.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LEC/2026/Spring/Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Playoffs' }, { tag: 'GIANTX' }, { tag: 'Team Vitality' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "GIANTX defeated Team Vitality 3-0 on May 31, 2026 in Lower Bracket Round 1 of the LEC Spring 2026 Playoffs. The dominant sweep sends Vitality out of the competition and moves GIANTX into the lower bracket semifinals.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "GIANTX Deliver a Commanding Performance" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "GIANTX controlled all three games from start to finish. Mid laner Humanoid and ADC Carzzy were the standout performers across the series, consistently finding advantages in the mid and late game. Top laner Naak, jungler Nako, and support Fleshy completed a roster that gave Vitality no room to breathe throughout the best-of-five.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Vitality Exit in Fifth or Sixth Place" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Team Vitality's LEC Spring 2026 campaign is over. After being dropped to the lower bracket following a 3-0 loss to Movistar KOI in the Upper Bracket Semifinals on May 24, Vitality had one last chance — but GIANTX shut the door with a clean sweep. Vitality finish the playoffs in fifth or sixth place alongside Natus Vincere, who were eliminated by Karmine Corp 3-1 on May 30.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "What Is Next: GIANTX vs Karmine Corp" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "GIANTX will face Karmine Corp in the Lower Bracket Semifinals on June 1, 2026. KC advanced by defeating Natus Vincere 3-1 on May 30. The winner of this match will take on Movistar KOI — dropped from the upper bracket after their 3-2 loss to G2 Esports in the Upper Bracket Final — in the Lower Bracket Final on June 6. The LEC Spring 2026 Grand Final is set for June 7.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "A clean 3-0 against a regular-season frontrunner makes GIANTX one of the most dangerous teams left standing. The June 1 clash with Karmine Corp is must-watch LEC.",
          },
        ],
      },
    ],
  },
  {
    title: 'LEC Spring 2026 Playoffs: GIANTX aplasta a Team Vitality 3-0 y avanza a semifinales del LB',
    slug: 'lec-spring-2026-lb-giantx-vit-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lec',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt:
      "El 31 de mayo de 2026, GIANTX eliminó a Team Vitality 3-0 en el bracket inferior de los LEC Spring 2026 Playoffs. Humanoid, Carzzy y sus compañeros se enfrentarán a Karmine Corp en las semifinales del LB el 1 de junio.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LEC/2026/Spring/Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LEC' }, { tag: 'Playoffs' }, { tag: 'GIANTX' }, { tag: 'Team Vitality' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "GIANTX derrotó a Team Vitality por 3-0 el 31 de mayo de 2026 en el primer turno del bracket inferior de los LEC Spring 2026 Playoffs. El contundente sweep elimina a Vitality de la competición y clasifica a GIANTX para las semifinales del bracket inferior.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "GIANTX dominó los tres partidos" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "GIANTX impuso su juego en la totalidad de la serie. El mid laner Humanoid y el ADC Carzzy lideraron la actuación del equipo, encontrando ventajas consistentes en la fase media y tardía de cada partida. El top laner Naak, el junglero Nako y el soporte Fleshy completaron una alineación que no dio respiro a Team Vitality en ningún momento del enfrentamiento.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Vitality se despide en quinta o sexta posición" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La temporada de primavera de Team Vitality llega a su fin. Tras caer ante Movistar KOI por 3-0 en las semifinales del bracket superior el 24 de mayo y ser enviada al bracket inferior, Vitality tuvo una última oportunidad que GIANTX cerró con un sweep 3-0. El equipo concluye los playoffs en quinta o sexta posición junto a Natus Vincere, eliminada por Karmine Corp 3-1 el 30 de mayo.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "GIANTX se medirá a Karmine Corp el 1 de junio" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "GIANTX se enfrentará a Karmine Corp en las semifinales del bracket inferior el 1 de junio de 2026. KC avanzó derrotando a Natus Vincere 3-1 el 30 de mayo. El ganador de este duelo se medirá a Movistar KOI —eliminada del bracket superior tras caer ante G2 Esports 3-2 en la final UB— en la final del bracket inferior el 6 de junio. La gran final está programada para el 7 de junio de 2026.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Un impecable 3-0 contra una de las mejores escuadras de la temporada regular: GIANTX demuestra que ningún rival debe subestimarles. El duelo ante Karmine Corp el 1 de junio será el próximo gran examen.",
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
