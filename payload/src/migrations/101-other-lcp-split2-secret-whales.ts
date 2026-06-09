import type { MigrationModule } from './runner'

export const id = '101-other-lcp-split2-secret-whales'
export const description = 'Autres Régions — LCP 2026 Split 2 : Secret Whales champion 3-1 vs Deep Cross Gaming, DCG qualifié MSI 2026'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-09T08:00:00.000Z'

const articles = [
  // ──────────────────────────────────────────────
  // LCP 2026 Split 2 — FR
  // ──────────────────────────────────────────────
  {
    title: 'LCP 2026 Split 2 : Secret Whales sacre champion 3-1 face à Deep Cross Gaming',
    slug: 'lcp-2026-split-2-secret-whales-champion-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/HF6Kr_qrEDg/maxresdefault.jpg',
    excerpt:
      "Le 7 juin 2026 au LCP Arena de Taipei, Team Secret Whales a remporté le Grand Final du LCP 2026 Split 2 en dominant Relove Deep Cross Gaming 3-1. Une victoire qui consacre une saison parfaite pour le roster pacifique, tandis que Deep Cross Gaming file au MSI 2026.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcp',
    tags: [
      { tag: 'LoL' },
      { tag: 'LCP' },
      { tag: 'Playoffs' },
      { tag: 'Secret Whales' },
      { tag: 'Pacifique' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Le 7 juin 2026, Team Secret Whales a remporté le Grand Final du LCP 2026 Split 2 au LCP Arena de Taipei en battant Relove Deep Cross Gaming sur le score de 3-1. Une victoire qui vient couronner une saison exceptionnelle pour le roster pacifique, invaincu lors de la phase régulière avec un bilan parfait de 7-0. Secret Whales s'impose comme la référence absolue de la région LCP en ce début de saison 2026.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Une domination sans partage depuis le début de la saison" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Secret Whales n'a laissé aucune chance à ses adversaires tout au long du Split 2. Après un parcours parfait en saison régulière (7-0), l'équipe a maintenu ce niveau de jeu en playoffs. Dans le Grand Final, Deep Cross Gaming a bien résisté en arrachant un match, mais n'a jamais semblé capable de renverser la dynamique face à un Secret Whales au sommet de son efficacité macro et de sa cohérence individuelle sur chaque position.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Deep Cross Gaming obtient son billet pour le MSI 2026" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Malgré la défaite en Grand Final, Deep Cross Gaming repart de Taipei avec l'essentiel : une qualification directe pour le Mid-Season Invitational 2026. L'équipe taïwanaise avait préalablement écarté GAM Esports en série éliminatoire pour sécuriser la deuxième place du classement des Championship Points LCP. Ce ticket MSI représente un accomplissement majeur pour une organisation qui monte en puissance dans le contexte de la ligue unifiée pacifique.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Deux représentants LCP au MSI 2026 à Daejeon" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le LCP envoie deux équipes au Mid-Season Invitational 2026, prévu du 28 juin au 12 juillet à Daejeon, en Corée du Sud. Secret Whales, déjà qualifié grâce à ses Championship Points cumulés depuis le Split 1, et Deep Cross Gaming, qualifié via les playoffs du Split 2, représenteront la région pacifique. C'est une démonstration de la santé compétitive de cette ligue, née de la fusion entre la PCS, la LJL, la LCO et la VCS.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Le LCP, une ligue unifiée qui gagne en visibilité" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Avec la présence simultanée de GAM Esports (Vietnam), CTBC Flying Oyster (Taïwan), SoftBank HAWKS (Japon), Secret Whales et Deep Cross Gaming dans la même compétition, le LCP représente une expérience inédite d'intégration régionale. Cette édition Split 2 a prouvé que la fusion des ligues du Pacifique peut produire un niveau de jeu compétitif attrayant, même si la visibilité internationale reste encore à construire.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Champions invaincu du Split 2, Secret Whales et Deep Cross Gaming portent la bannière pacifique au MSI 2026 : le LCP prend ses marques sur la scène mondiale.",
          },
        ],
      },
    ],
  },
  // ──────────────────────────────────────────────
  // LCP 2026 Split 2 — EN
  // ──────────────────────────────────────────────
  {
    title: 'LCP 2026 Split 2: Secret Whales Win Grand Final 3-1 Over Deep Cross Gaming',
    slug: 'lcp-2026-split-2-secret-whales-champion-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/HF6Kr_qrEDg/maxresdefault.jpg',
    excerpt:
      "Team Secret Whales claimed the LCP 2026 Split 2 title on June 7 at the LCP Arena in Taipei, defeating Relove Deep Cross Gaming 3-1 in the Grand Final. The win completes an undefeated season for Secret Whales, while Deep Cross Gaming lock in their MSI 2026 spot.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcp',
    tags: [
      { tag: 'LoL' },
      { tag: 'LCP' },
      { tag: 'Playoffs' },
      { tag: 'Secret Whales' },
      { tag: 'Pacific' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Team Secret Whales are the LCP 2026 Split 2 champions. On June 7 at the LCP Arena in Taipei, Taiwan, the Pacific squad swept through the Grand Final against Relove Deep Cross Gaming with a 3-1 victory. The result caps a dominant season that saw Secret Whales go undefeated through the regular season with a perfect 7-0 record, making them the undisputed best team in the Pacific league this split.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Undefeated Regular Season Carried Into Playoffs" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Secret Whales had been the standout team throughout the entire LCP 2026 Split 2. Their 7-0 regular season record was built on consistent macro execution, disciplined drafting, and strong individual performances across all five roles. Deep Cross Gaming fought back to take one map in the Grand Final but were ultimately unable to match the level of play that Secret Whales produced on the biggest stage of the split.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Deep Cross Gaming Secure MSI 2026 Berth" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Despite falling short of the title, Deep Cross Gaming leave Taipei having achieved what matters most at this stage of the season: a place at the 2026 Mid-Season Invitational. The Taiwanese organisation had earlier eliminated GAM Esports to consolidate their position in the LCP Championship Points standings, earning the region's second MSI seat. For Deep Cross Gaming, who compete under the Relove sponsorship branding, reaching MSI marks a major milestone.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Two LCP Teams Heading to Daejeon" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The LCP will send two representatives to the 2026 Mid-Season Invitational in Daejeon, South Korea (June 28 – July 12). Secret Whales, who had already locked in MSI qualification through their accumulated Championship Points from Split 1, will be joined by Deep Cross Gaming. Both teams represent different corners of what is now a unified Pacific league — the LCP is the merged competition that brought together the former PCS, LJL, LCO, and VCS regions.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "LCP Building Its Identity on the World Stage" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The LCP roster — featuring GAM Esports from Vietnam, CTBC Flying Oyster from Taiwan, Fukuoka SoftBank HAWKS from Japan, alongside guest teams like Secret Whales and Deep Cross Gaming — has produced an increasingly competitive environment since the league's unification. This Split 2 showed the league can deliver high-level playoff action, and the presence of two Pacific squads at MSI 2026 is a meaningful sign of the region's growing ambition.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Undefeated champions in Split 2 and MSI-qualified alongside Deep Cross Gaming: Secret Whales lead the Pacific charge to Daejeon.",
          },
        ],
      },
    ],
  },
  // ──────────────────────────────────────────────
  // LCP 2026 Split 2 — ES
  // ──────────────────────────────────────────────
  {
    title: 'LCP 2026 Split 2: Secret Whales se corona campeón 3-1 ante Deep Cross Gaming',
    slug: 'lcp-2026-split-2-secret-whales-champion-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/HF6Kr_qrEDg/maxresdefault.jpg',
    excerpt:
      "Team Secret Whales conquistó el título del LCP 2026 Split 2 el 7 de junio en el LCP Arena de Taipéi, derrotando a Relove Deep Cross Gaming 3-1 en la Gran Final. El resultado corona una temporada invicta para Secret Whales, mientras Deep Cross Gaming asegura su plaza en el MSI 2026.",
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcp',
    tags: [
      { tag: 'LoL' },
      { tag: 'LCP' },
      { tag: 'Playoffs' },
      { tag: 'Secret Whales' },
      { tag: 'Pacífico' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Team Secret Whales son los campeones del LCP 2026 Split 2. El 7 de junio en el LCP Arena de Taipéi, Taiwán, el equipo del Pacífico culminó una temporada dominante al derrotar a Relove Deep Cross Gaming 3-1 en la Gran Final. El resultado corona un recorrido impecable que incluyó un récord perfecto de 7-0 en la fase regular, consolidando a Secret Whales como el mejor equipo de la región en este split.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Una temporada regular perfecta que llegó hasta la final" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Secret Whales dominó el LCP 2026 Split 2 de principio a fin. Su récord de 7-0 en la fase regular no fue un espejismo, sino el reflejo de un equipo con una ejecución macro superior, una fase de draft sólida y actuaciones individuales de alto nivel en cada posición. Deep Cross Gaming opuso resistencia y consiguió arañar un mapa en la Gran Final, pero nunca encontró la manera de igualar la intensidad del equipo campeón.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Deep Cross Gaming asegura su billete para el MSI 2026" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "A pesar de caer en la Gran Final, Deep Cross Gaming se marcha de Taipéi con el objetivo más importante de la temporada cumplido: una plaza en el Mid-Season Invitational 2026. La organización taiwanesa había eliminado previamente a GAM Esports para consolidar su posición en el ranking de Championship Points del LCP, asegurando el segundo cupo de la región para el MSI. Para Relove Deep Cross Gaming, alcanzar este torneo internacional supone un logro histórico.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Dos equipos del LCP rumbo a Daejeon" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El LCP enviará dos representantes al Mid-Season Invitational 2026 en Daejeon, Corea del Sur (28 de junio – 12 de julio). Secret Whales, que ya había asegurado su clasificación gracias a los Championship Points acumulados desde el Split 1, estará acompañado por Deep Cross Gaming. Ambos equipos representan la diversidad de la liga unificada del Pacífico, nacida de la fusión entre la antigua PCS, la LJL, la LCO y la VCS.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "El LCP construye su identidad en el escenario mundial" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Con equipos como GAM Esports (Vietnam), CTBC Flying Oyster (Taiwán) y Fukuoka SoftBank HAWKS (Japón) compitiendo junto a equipos invitados, el LCP ha creado un entorno competitivo único en la escena del LoL. Este Split 2 demostró que la liga puede generar playoffs de alto nivel, y la presencia de dos equipos pacíficos en el MSI 2026 es una señal positiva para la proyección internacional de una competición que todavía está construyendo su identidad.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Campeones invictos en el Split 2 y clasificados junto a Deep Cross Gaming para el MSI 2026: Secret Whales lidera la carga del Pacífico hacia Daejeon.",
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
