import type { MigrationModule } from './runner'

export const id = '056-international-msi-2026-tickets-daejeon'
export const description = 'International — MSI 2026 Daejeon : ouverture des ventes de billets résidents coréens (21 mai)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-21T08:00:00.000Z'

const articles = [
  {
    title: 'MSI 2026 à Daejeon : les billets pour résidents coréens en vente aujourd\'hui',
    slug: 'msi-2026-daejeon-billets-residents-coreens-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg',
    excerpt:
      'À partir d\'aujourd\'hui, 21 mai 2026, les résidents coréens peuvent acheter leurs billets pour le Mid-Season Invitational 2026. Le tournoi se déroule du 28 juin au 12 juillet au Daejeon Convention Center II.',
    sourceUrl: 'https://lolesports.com/en-US/news/msi-and-worlds-updates',
    tags: [{ tag: 'LoL' }, { tag: 'MSI' }, { tag: 'International' }, { tag: 'Daejeon' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "C'est le jour J pour les fans coréens de League of Legends. Ce 21 mai 2026, Riot Games ouvre la vente de billets pour le Mid-Season Invitational 2026 à destination des résidents sud-coréens. Les tickets sont disponibles via la plateforme Interpark, accessible uniquement avec une carte d'identité coréenne.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Daejeon accueille le MSI pour la première fois' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le MSI 2026 se tiendra du 28 juin au 12 juillet au Daejeon Convention Center II, en Corée du Sud. C'est la première fois qu'une ville autre que Séoul accueille un événement majeur de LoL Esports en Corée. Riot Games estime que quelque 80 000 fans — locaux et internationaux — feront le déplacement, générant un impact économique estimé à plus de 100 milliards de wons (~73 millions d'euros) pour la région.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Tarifs et modalités' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Les billets sont 100 % mobiles et liés au compte Interpark vérifié de l'acheteur. Les journées de Play-In sont proposées à 50 000 KRW (~36 €), les phases de bracket montant progressivement jusqu'à 80 000 KRW (~58 €), et les places pour les demi-finales et la finale atteignent entre 80 000 et 150 000 KRW (~58–109 €) selon le placement dans l'enceinte. Des frais de service de 4 000 KRW s'ajoutent à chaque achat. Les billets internationaux (avec passeport) avaient été mis en vente les 21 et 23 avril.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Format et équipes qualifiées' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Onze équipes de six régions se disputeront le titre : deux représentants chacun pour LCK, LPL, LEC, LCS et LCP, plus une équipe CBLOL. Bilibili Gaming, vainqueurs du First Stand 2026 contre G2 Esports à São Paulo, accèdent directement au Bracket Stage. La phase de Play-In est réduite de 6 à 4 équipes cette année, avec un seul qualifié pour le bracket principal au lieu de deux.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Le MSI 2026 à Daejeon s'annonce comme l'un des événements LoL les plus attendus de l'année — le centre de la Corée du Sud prêt à vibrer au rythme du jeu mondial.",
          },
        ],
      },
    ],
  },
  {
    title: 'MSI 2026 Daejeon: Korean Resident Ticket Sales Open Today',
    slug: 'msi-2026-daejeon-korean-resident-tickets-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg',
    excerpt:
      'Starting today, May 21, 2026, South Korean residents can purchase tickets for MSI 2026 via Interpark. The tournament runs June 28–July 12 at the Daejeon Convention Center II.',
    sourceUrl: 'https://lolesports.com/en-US/news/msi-and-worlds-updates',
    tags: [{ tag: 'LoL' }, { tag: 'MSI' }, { tag: 'International' }, { tag: 'Daejeon' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Today, May 21, 2026, is the moment Korean LoL fans have been waiting for. Riot Games opens domestic ticket sales for the 2026 Mid-Season Invitational to South Korean residents via the Interpark platform. A verified Korean ID is required to complete the purchase, and all tickets are mobile-only.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Daejeon Hosts Its First Major LoL Esports Event' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'MSI 2026 runs from June 28 to July 12 at the Daejeon Convention Center II — the first time a major LoL Esports event has been held in the city. Riot Games expects approximately 80,000 domestic and international fans to attend across the two weeks, generating an economic impact of over 100 billion KRW (roughly $73 million) for the Daejeon region. The venue gives fans a fresh environment compared to the traditional Seoul-centric hosting of Korean esports events.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Ticket Pricing Breakdown' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Tickets are tiered by match stage: Play-In days cost 50,000 KRW (~$36), Bracket Round 1 days run between 60,000 and 80,000 KRW (~$44–58), and Finals weekend seating ranges from 80,000 to 150,000 KRW (~$58–109) depending on section. A 4,000 KRW booking fee applies to every purchase. International fans with a passport were able to buy tickets during the April 21 Mastercard presale and the April 23 general sale.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Format and Qualified Teams' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Eleven teams from six regions will compete: two from LCK, LPL, LEC, LCS, and LCP each, plus one from CBLOL. Bilibili Gaming, winners of First Stand 2026 after defeating G2 Esports in São Paulo, head directly to the Bracket Stage. The Play-In field has been trimmed from six to four teams this year, with only one team advancing to the main bracket instead of two.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "MSI 2026 in Daejeon is shaping up to be one of the biggest LoL events of the year — a new city ready to welcome the world's best teams.",
          },
        ],
      },
    ],
  },
  {
    title: 'MSI 2026 en Daejeon: hoy abren las ventas de entradas para residentes coreanos',
    slug: 'msi-2026-daejeon-entradas-residentes-coreanos-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg',
    excerpt:
      'Desde hoy, 21 de mayo de 2026, los residentes de Corea del Sur pueden comprar entradas para MSI 2026 a través de Interpark. El torneo se celebra del 28 de junio al 12 de julio en el Daejeon Convention Center II.',
    sourceUrl: 'https://lolesports.com/en-US/news/msi-and-worlds-updates',
    tags: [{ tag: 'LoL' }, { tag: 'MSI' }, { tag: 'International' }, { tag: 'Daejeon' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Hoy, 21 de mayo de 2026, Riot Games abre la venta de entradas para los residentes surcoreanos que quieran asistir al Mid-Season Invitational 2026. Las entradas se comercializan a través de la plataforma Interpark y requieren una tarjeta de identidad coreana verificada. Todos los tickets son exclusivamente en formato móvil.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Daejeon acoge su primer gran evento de LoL Esports' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'MSI 2026 se disputará del 28 de junio al 12 de julio en el Daejeon Convention Center II, marcando la primera vez que una gran ciudad surcoreana fuera de Seúl acoge un evento internacional de League of Legends. Riot Games espera la asistencia de aproximadamente 80.000 fans locales e internacionales a lo largo de las dos semanas, con un impacto económico estimado superior a los 100.000 millones de wons (~73 millones de euros) para la región.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Precios y condiciones de compra' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Las entradas están escalonadas por fase: los días de Play-In cuestan 50.000 KRW (~36 €), las rondas del bracket oscilan entre 60.000 y 80.000 KRW (~44–58 €), y las semifinales y la final van de 80.000 a 150.000 KRW (~58–109 €) según el sector. Se aplica una tarifa de gestión de 4.000 KRW por compra. Los fans internacionales con pasaporte pudieron adquirir entradas durante la preventa Mastercard del 21 de abril y la venta general del 23 de abril.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Formato y equipos clasificados' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Once equipos de seis regiones competirán por el título: dos por la LCK, LPL, LEC, LCS y LCP, más uno del CBLOL. Bilibili Gaming, campeones del First Stand 2026 tras superar a G2 Esports en São Paulo, acceden directamente al Bracket Stage. La fase de Play-In se reduce de seis a cuatro equipos este año, con solo un clasificado para el bracket principal en lugar de dos.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'El MSI 2026 en Daejeon promete ser uno de los eventos de LoL más emocionantes del año: una nueva ciudad lista para recibir a los mejores equipos del mundo.',
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
