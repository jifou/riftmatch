import type { MigrationModule } from './runner'

export const id = '032-news-game-changers-rising-2026'
export const description = 'LoL Game Changers Rising 2026 — Retour avec nouveau format, 5 étapes de mai à octobre'

const DISCLOSURE_DATE = '2026-05-12T08:00:00.000Z'

const articles = [
  // ── FR ─────────────────────────────────────────────────────────────────────
  {
    title: 'Game Changers Rising 2026 : le tournoi féminin de LoL revient avec un format élargi',
    slug: 'game-changers-rising-2026-format-nouveau',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage:
      'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/c5b5258034a7e4c34fc360db44a5af4703ec9d9b-1920x1080.jpg',
    excerpt:
      "Le LoL Game Changers Rising fait son grand retour en 2026 avec un calendrier inédit de 5 étapes mensuelles, du 29 mai jusqu'aux playoffs d'octobre. Riot Games confirme également la continuité du programme pour 2027.",
    sourceUrl: 'https://lolesports.com/en-GB/news/league-of-legends-game-changers-returns',
    tags: [
      { tag: 'LoL' },
      { tag: 'Esports' },
      { tag: 'Game Changers' },
      { tag: 'EMEA' },
      { tag: 'Femmes' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games a officiellement annoncé le retour du LoL Game Changers Rising pour 2026, la compétition EMEA dédiée aux joueuses qui s'identifient comme femmes. Après une saison inaugurale 2025 remportée par Eterna face à G2 Hel, le programme revient avec un format considérablement élargi.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Un nouveau format sur 5 étapes mensuelles' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La compétition débutera les 29-31 mai 2026 et se déroulera jusqu'en octobre, soit une saison bien plus longue que l'édition inaugurale. Le format comprend cinq étapes ouvertes, à l'issue desquelles les équipes cumulent des points de qualification pour accéder aux playoffs finaux.",
          },
        ],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: 'Coup d\'envoi : 29-31 mai 2026' }] },
          { type: 'li', children: [{ text: '5 étapes mensuelles ouvertes (jusqu\'à 32 équipes par étape)' }] },
          { type: 'li', children: [{ text: 'Top 6 du classement général qualifié pour les playoffs d\'octobre' }] },
          {
            type: 'li',
            children: [{ text: '2 places supplémentaires via l\'Equal Esports Cup (Allemagne) et la Nova Series (France)' }],
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'N.E.O et le co-streaming au cœur du dispositif' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Riot Games reconduit son partenariat avec N.E.O comme organisateur licencié du tournoi. Principale nouveauté pour 2026 : l'ouverture au co-streaming et à la diffusion communautaire, permettant à des créateurs de contenu et des casters amateurs de relayer les matchs auprès de leur audience.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Continuité confirmée jusqu\'en 2027' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Bertrand Amar, vice-président des opérations esports chez Riot Games, a confirmé que des compétitions Game Changers auraient lieu à la fois en 2026 et en 2027. Un signal fort envoyé à la communauté féminine sur l'engagement durable de Riot pour l'inclusivité dans le jeu compétitif.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Le Game Changers Rising va bien au-delà de la compétition : il s'agit de créer activement les conditions pour que les femmes de toute l'EMEA puissent se présenter, concourir au plus haut niveau, et être vues et reconnues pour leur talent. — Riot Games",
          },
        ],
      },
    ],
  },

  // ── EN ─────────────────────────────────────────────────────────────────────
  {
    title: 'LoL Game Changers Rising 2026: New expanded format with 5 monthly stages announced',
    slug: 'game-changers-rising-2026-format-nouveau-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage:
      'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/c5b5258034a7e4c34fc360db44a5af4703ec9d9b-1920x1080.jpg',
    excerpt:
      'LoL Game Changers Rising is back for 2026 with an expanded format: 5 monthly open stages starting May 29, leading to an October playoffs. Riot Games also confirms the program will continue into 2027.',
    sourceUrl: 'https://lolesports.com/en-GB/news/league-of-legends-game-changers-returns',
    tags: [
      { tag: 'LoL' },
      { tag: 'Esports' },
      { tag: 'Game Changers' },
      { tag: 'EMEA' },
      { tag: "Women's esports" },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games has officially announced the return of LoL Game Changers Rising for 2026, the EMEA competition designed for players who identify as women. Following a successful inaugural season in 2025 — won by Eterna over G2 Hel — the program is back with a significantly expanded format.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'A brand new format: 5 monthly open stages' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The competition kicks off on May 29-31, 2026 and runs all the way through October — a considerably longer season than the inaugural edition. The format includes five open stages where teams accumulate championship points to secure their spots at the October Playoffs.",
          },
        ],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: 'Season start: May 29-31, 2026' }] },
          { type: 'li', children: [{ text: '5 monthly open stages (up to 32 teams per stage)' }] },
          { type: 'li', children: [{ text: 'Top 6 in overall standings qualify for October Playoffs' }] },
          {
            type: 'li',
            children: [{ text: '2 additional playoff spots via Germany\'s Equal Esports Cup and France\'s Nova Series' }],
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'N.E.O partnership and co-streaming opportunities' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Riot Games has renewed its partnership with N.E.O as the tournament's official licensing partner. A key addition for 2026 is the introduction of co-streaming and community broadcasting, allowing content creators and community casters to bring the action to their audiences throughout the season.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Confirmed through 2027' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Riot Games VP of Esports Operations Bertrand Amar confirmed that LoL Game Changers competitions will take place in both 2026 and 2027, signaling a long-term commitment to women's esports in the League of Legends ecosystem.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Game Changers Rising goes beyond competition: it's about actively creating the conditions for women across EMEA to step forward, compete at the highest level, and be seen and recognized for their talent and achievements. — Riot Games",
          },
        ],
      },
    ],
  },

  // ── ES ─────────────────────────────────────────────────────────────────────
  {
    title: 'LoL Game Changers Rising 2026: nuevo formato ampliado con 5 etapas mensuales',
    slug: 'game-changers-rising-2026-format-nouveau-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage:
      'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/c5b5258034a7e4c34fc360db44a5af4703ec9d9b-1920x1080.jpg',
    excerpt:
      'El LoL Game Changers Rising regresa en 2026 con un formato muy ampliado: 5 etapas abiertas mensuales desde el 29 de mayo hasta los playoffs de octubre. Riot Games también confirma la continuación del programa en 2027.',
    sourceUrl: 'https://lolesports.com/en-GB/news/league-of-legends-game-changers-returns',
    tags: [
      { tag: 'LoL' },
      { tag: 'Esports' },
      { tag: 'Game Changers' },
      { tag: 'EMEA' },
      { tag: 'Esports femenino' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Riot Games ha anunciado oficialmente el regreso del LoL Game Changers Rising para 2026, la competición EMEA diseñada para jugadoras que se identifican como mujeres. Tras una exitosa temporada inaugural en 2025 — ganada por Eterna frente a G2 Hel — el programa regresa con un formato considerablemente ampliado.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Un nuevo formato: 5 etapas abiertas mensuales' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'La competición arrancará los días 29-31 de mayo de 2026 y se extenderá hasta octubre, formando una temporada mucho más larga que la edición inaugural. El formato incluye cinco etapas abiertas donde los equipos acumulan puntos de clasificación para acceder a los playoffs de octubre.',
          },
        ],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: 'Inicio de la temporada: 29-31 de mayo de 2026' }] },
          { type: 'li', children: [{ text: '5 etapas abiertas mensuales (hasta 32 equipos por etapa)' }] },
          { type: 'li', children: [{ text: 'Top 6 del ranking general clasificado para los playoffs de octubre' }] },
          {
            type: 'li',
            children: [
              { text: '2 plazas adicionales mediante la Equal Esports Cup (Alemania) y la Nova Series (Francia)' },
            ],
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Alianza con N.E.O y co-streaming abierto' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Riot Games renueva su asociación con N.E.O como organizador oficial del torneo. La principal novedad de 2026 es la apertura al co-streaming y la difusión comunitaria, que permite a creadores de contenido y comentaristas amateurs retransmitir los partidos para sus audiencias.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Programa confirmado hasta 2027' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Bertrand Amar, vicepresidente de operaciones de esports en Riot Games, confirmó que habrá competiciones Game Changers tanto en 2026 como en 2027, lo que representa un compromiso a largo plazo con el esports femenino en el ecosistema de League of Legends.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Game Changers Rising va más allá de la competición: se trata de crear activamente las condiciones para que las mujeres de toda la EMEA puedan dar un paso adelante, competir al más alto nivel y ser vistas y reconocidas por su talento. — Riot Games",
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
  console.log('✅ Migration 032 terminée')
}
