import type { MigrationModule } from './runner'

export const id = '091-riot-pandemonium-act2'
export const description = 'RIOT — Pandemonium Act 2 : skins Sinful Shores, ARAM: Mayhem overhaul, ranked 5v5'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-05T08:00:00.000Z'

const articles = [
  {
    title: "Pandemonium Acte 2 : skins Sinful Shores, refonte d'ARAM: Mayhem et retour du ranked 5v5",
    slug: 'pandemonium-act-2-saison-2-lol-juin-2026',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/e5YRVqMrpkY/maxresdefault.jpg',
    excerpt: "Riot Games lance l'Acte 2 de la saison Pandemonium le 10 juin : trois skins Sinful Shores, le retour des skins Broken Covenant pour le MSI, une refonte majeure d'ARAM: Mayhem et le ranked 5v5 en accès limité.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/dev/tldw-pandemonium-arena-more-dev-update/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Pandemonium' }, { tag: 'ARAM' }, { tag: 'skins' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games a dévoilé le contenu de l'Acte 2 de la saison Pandemonium, qui débarque sur League of Legends avec le patch 26.12 le 10 juin 2026. Au programme : une nouvelle ligne de skins, une refonte profonde d'ARAM: Mayhem et le retour du mode ranked 5v5 en temps limité.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Skins Sinful Shores et Broken Covenant MSI' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La ligne Sinful Shores s'enrichit de trois nouvelles apparences : un skin Prestige pour LeBlanc (obtenu via le Battle Pass Acte 2), ainsi que des skins épiques pour Hwei et Brand. Ces créations à ambiance estivale et démoniaque s'inscrivent parfaitement dans la thématique Pandemonium. En parallèle, la ligne Broken Covenant fait son retour avec des skins dédiés à Aurora, Shen et Jhin, ces derniers étant liés aux revenus du Mid-Season Invitational 2026.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'ARAM: Mayhem refondu en profondeur' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le mode ARAM: Mayhem reçoit sa plus grande mise à jour depuis son lancement. Avec le patch 26.12, le système de traits est supprimé au profit d'augments liés aux capacités des champions (ability augments), offrant une personnalisation beaucoup plus ciblée. Plus de 50 nouveaux augments viennent élargir le pool, et les anciens ensembles sont désactivés. L'objectif affiché par Riot : donner plus de liberté aux joueurs et rendre chaque partie unique.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Ranked 5v5 et Battle Pass' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le mode ranked 5v5 — réservé aux équipes complètes de cinq joueurs — revient pour une durée limitée sur la Faille de l'Invocateur. C'est une opportunité rare pour les groupes d'amis de tester leur coordination en environnement compétitif. Le Battle Pass Pandemonium Acte 2 sera disponible du 10 juin au 28 juillet 2026, avec le skin Prestige Sinful Shores LeBlanc comme récompense phare.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "L'Acte 2 Pandemonium s'annonce comme l'une des mises à jour les plus riches du premier semestre 2026 : entre les skins, la refonte d'ARAM: Mayhem et le ranked 5v5, il y en a pour tous les profils de joueurs.",
          },
        ],
      },
    ],
  },
  {
    title: "Pandemonium Act 2: Sinful Shores Skins, ARAM: Mayhem Overhaul and Ranked 5s Return",
    slug: 'pandemonium-act-2-season-2-lol-june-2026-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/e5YRVqMrpkY/maxresdefault.jpg',
    excerpt: "Riot Games launches Pandemonium Act 2 on June 10 with three Sinful Shores skins, MSI Broken Covenant cosmetics, a massive ARAM: Mayhem overhaul, and a limited-time Ranked 5s mode.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/dev/tldw-pandemonium-arena-more-dev-update/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Pandemonium' }, { tag: 'ARAM' }, { tag: 'skins' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games has revealed the full content of Pandemonium Act 2, arriving in League of Legends with Patch 26.12 on June 10, 2026. The update brings a new skin line, a sweeping overhaul of ARAM: Mayhem, and the return of Ranked 5v5 for a limited time.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Sinful Shores and Broken Covenant MSI Skins' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The Sinful Shores skin line expands with three new cosmetics: a Prestige skin for LeBlanc (earned through the Act 2 Battle Pass), plus Epic skins for Hwei and Brand. Alongside these, the Broken Covenant skin line makes a comeback with new looks for Aurora, Shen, and Jhin — the latter being this year's MSI revenue-share skin.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'ARAM: Mayhem Gets a Major Rework' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "ARAM: Mayhem is receiving its biggest update yet in Patch 26.12. The existing trait-based augment system is being removed and replaced with champion ability augments — modifiers that directly enhance or transform specific skills. Over 50 new augments are being added to give players greater build freedom, while old augment sets are being retired. Riot's goal is to make every game feel distinct and push champion identity to the forefront.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Ranked 5s Return and Battle Pass' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The popular Ranked 5s mode — limited to full five-player pre-made teams — is returning to Summoner's Rift for a limited window, giving organized squads a chance to compete together in a ranked environment. The Pandemonium Act 2 Battle Pass runs from June 10 to July 28, 2026, with Prestige Sinful Shores LeBlanc as its headline reward.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Act 2 of Pandemonium shapes up to be one of the most content-packed updates of 2026 — new skins, a revamped ARAM mode, and Ranked 5s all arriving at once.",
          },
        ],
      },
    ],
  },
  {
    title: "Pandemonium Acto 2: skins Sinful Shores, gran actualización de ARAM: Mayhem y regreso del ranked 5v5",
    slug: 'pandemonium-acto-2-temporada-2-lol-junio-2026-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://img.youtube.com/vi/e5YRVqMrpkY/maxresdefault.jpg',
    excerpt: "Riot Games lanza el Acto 2 de Pandemonium el 10 de junio con tres skins Sinful Shores, las skins Broken Covenant del MSI, una gran remodelación de ARAM: Mayhem y el ranked 5v5 de duración limitada.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/dev/tldw-pandemonium-arena-more-dev-update/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Pandemonium' }, { tag: 'ARAM' }, { tag: 'skins' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Riot Games ha presentado todo el contenido del Acto 2 de la temporada Pandemonium, que llegará a League of Legends con el parche 26.12 el 10 de junio de 2026. La actualización trae una nueva línea de skins, una importante renovación de ARAM: Mayhem y el regreso temporal del modo clasificatorio 5v5.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Skins Sinful Shores y Broken Covenant del MSI' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La línea Sinful Shores se amplía con tres nuevas apariencias: una skin Prestige para LeBlanc (obtenible a través del Pase de batalla del Acto 2) y skins épicas para Hwei y Brand. Además, la línea Broken Covenant regresa con skins para Aurora, Shen y Jhin, siendo esta última la skin de reparto de ingresos del Mid-Season Invitational 2026.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'ARAM: Mayhem recibe una renovación masiva' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "ARAM: Mayhem recibe su mayor actualización desde su lanzamiento con el parche 26.12. El sistema de rasgos (traits) es eliminado y sustituido por aumentos de habilidades de campeón (ability augments), que modifican directamente las habilidades específicas de cada personaje. Se añaden más de 50 nuevos aumentos para dar mayor libertad de personalización, mientras que los conjuntos de aumentos antiguos son retirados. El objetivo de Riot es que cada partida sea única y que la identidad de cada campeón destaque más que nunca.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Ranked 5v5 y Pase de batalla' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El modo clasificatorio 5v5 —reservado a grupos completos de cinco jugadores— regresa a la Grieta del Invocador por tiempo limitado, ofreciendo a los equipos organizados la oportunidad de competir juntos en un entorno competitivo. El Pase de batalla Pandemonium Acto 2 estará disponible del 10 de junio al 28 de julio de 2026, con la skin Prestige Sinful Shores LeBlanc como gran recompensa.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "El Acto 2 de Pandemonium se perfila como una de las actualizaciones más completas del primer semestre de 2026: skins nuevas, ARAM renovado y ranked 5v5, todo a la vez.",
          },
        ],
      },
    ],
  },
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const a of articles) {
    const ex = await payload.find({ collection: 'news', where: { slug: { equals: a.slug } } })
    if (ex.docs.length > 0) { console.log(`→ skip ${a.slug}`); continue }
    await payload.create({ collection: 'news', data: a as any })
    console.log(`✅ ${a.locale.toUpperCase()} — ${a.title}`)
  }
}
