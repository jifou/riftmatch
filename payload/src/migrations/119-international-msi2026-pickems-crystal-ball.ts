import type { MigrationModule } from './runner'

export const id = '119-international-msi2026-pickems-crystal-ball'
export const description = 'International — MSI 2026 : Pick\'Ems et Crystal Ball lancés, gagnez le skin Broken Covenant Jhin'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-18T08:00:00.000Z'
const COVER = 'https://img.youtube.com/vi/pWOrzTZD5Oo/maxresdefault.jpg'
const SOURCE = 'https://lolesports.com/en-US/news/msi-2026-pickems-are-here'

const articles = [
  {
    title: "MSI 2026 : les Pick'Ems et le Crystal Ball sont lancés — gagnez le skin Broken Covenant Jhin",
    slug: 'international-msi2026-pickems-crystal-ball-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Riot Games a ouvert les Pick'Ems et le Crystal Ball pour le MSI 2026. Les fans ont jusqu'au 28 juin pour verrouiller leurs pronostics et remporter des récompenses exclusives, dont le skin Broken Covenant Jhin.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'MSI 2026' }, { tag: 'LoL Esports' }, { tag: 'International' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Les Pick'Ems et le Crystal Ball du MSI 2026 sont officiellement lancés. Riot Games invite tous les fans à poser leurs pronostics avant le coup d'envoi du tournoi, le 28 juin à Daejeon (Corée du Sud). Les deux outils sont accessibles sur lolesports.com ou directement depuis le client League of Legends.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Les Pick'Ems : prédis et gagne" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Les Pick'Ems powered by AWS permettent de prédire les résultats match par match tout au long du tournoi. Le système de récompenses est échelonné selon votre précision : participer débloque déjà l'emote El Tigre Braum \"Pinfall\". Arriver dans le top 50 % rapporte en plus l'icône Zenith Games Blitzcrank \"Settle the Score\". Le top 25 % obtient également l'emote Janitor Thresh & Zac \"Clean Up\". Enfin, un pronostic parfait récompense le joueur du skin Broken Covenant Jhin — plus le champion si vous ne le possédez pas encore — ainsi que toutes les récompenses des paliers précédents.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Crystal Ball : une nouveauté au MSI" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Pour la première fois au MSI, le Crystal Ball powered by AWS invite les fans à anticiper les grandes tendances du tournoi : champion le plus joué, équipe surprise, MVP potentiel... Au total, 20 pronostics sont à remplir. Quatre se résoudront à l'issue des Play-In (28 juin - 1er juillet) et les seize restants à la fin du tournoi, le 12 juillet. Remplir son Crystal Ball avant le 28 juin garantit l'emote \"Doesn't Look Good\" de Smolder. Les 100 meilleurs pronostiqueurs mondiaux repartent aussi avec le skin Broken Covenant Jhin.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Onze équipes à Daejeon" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le MSI 2026 réunira onze formations issues de chaque région majeure : Hanwha Life Esports et T1 pour la LCK, Bilibili Gaming et Top Esports pour la LPL, G2 Esports et Karmine Corp pour la LEC, LYON et Team Liquid Alienware pour la LCS, Team Secret Whales et Revolve Deep Cross Gaming pour la LCP, et FURIA pour le CBLOL. Les Play-In se dérouleront du 28 juin au 1er juillet, et la grande finale aura lieu le 12 juillet.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Ne ratez pas votre chance : les pronostics Crystal Ball ferment le 28 juin avant le premier match. Rendez-vous sur lolesports.com pour jouer.",
          },
        ],
      },
    ],
  },
  {
    title: "MSI 2026: Pick'Ems and Crystal Ball are live — earn the Broken Covenant Jhin skin",
    slug: 'international-msi2026-pickems-crystal-ball-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Riot Games has launched Pick'Ems and Crystal Ball for MSI 2026. Fans have until June 28 to lock in their predictions and earn exclusive rewards, including the Broken Covenant Jhin skin.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'MSI 2026' }, { tag: 'LoL Esports' }, { tag: 'International' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "MSI 2026 Pick'Ems and Crystal Ball are officially live. Riot Games is inviting all fans to lock in their predictions before the tournament kicks off on June 28 in Daejeon, South Korea. Both features are available on lolesports.com or directly through the League of Legends client.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Pick'Ems: Predict and earn" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Pick'Ems powered by AWS let you predict match results throughout the entire tournament. Rewards are tiered based on accuracy: just participating earns the El Tigre Braum \"Pinfall\" emote. Finishing in the top 50% adds the Zenith Games Blitzcrank \"Settle the Score\" icon. The top 25% also picks up the Janitor Thresh and Zac \"Clean Up\" emote. A perfect prediction record rewards you with the Broken Covenant Jhin skin — plus the Jhin champion if you don't own it — alongside all previous tier rewards.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Crystal Ball: A first for MSI" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Crystal Ball powered by AWS makes its MSI debut this year, challenging fans to forecast the tournament's biggest trends: most-played champion, biggest upset team, potential MVP, and more. There are 20 total predictions to fill out — four resolve after the Play-In Stage (June 28 - July 1) and the remaining 16 at the end of the tournament on July 12. Locking in your Crystal Ball answers before June 28 earns the \"Doesn't Look Good\" Smolder emote. The top 100 players globally on the Crystal Ball leaderboard will also receive the Broken Covenant Jhin skin.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Eleven teams heading to Daejeon" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "MSI 2026 will feature eleven teams from every major region: Hanwha Life Esports and T1 from the LCK, Bilibili Gaming and Top Esports from the LPL, G2 Esports and Karmine Corp from the LEC, LYON and Team Liquid Alienware from the LCS, Team Secret Whales and Revolve Deep Cross Gaming from the LCP, and FURIA from the CBLOL. Play-Ins run from June 28 to July 1, with the Grand Final set for July 12.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Don't miss your window: Crystal Ball predictions close on June 28 before the first match. Head to lolesports.com to play.",
          },
        ],
      },
    ],
  },
  {
    title: "MSI 2026: los Pick'Ems y el Crystal Ball ya están activos — gana la skin Broken Covenant Jhin",
    slug: 'international-msi2026-pickems-crystal-ball-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Riot Games ha abierto los Pick'Ems y el Crystal Ball para el MSI 2026. Los fans tienen hasta el 28 de junio para bloquear sus predicciones y ganar recompensas exclusivas, incluyendo la skin Broken Covenant Jhin.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'MSI 2026' }, { tag: 'LoL Esports' }, { tag: 'Internacional' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Los Pick'Ems y el Crystal Ball del MSI 2026 ya están en marcha. Riot Games invita a todos los fans a bloquear sus predicciones antes del inicio del torneo el 28 de junio en Daejeon, Corea del Sur. Ambas herramientas están disponibles en lolesports.com o directamente desde el cliente de League of Legends.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Pick'Ems: predice y gana" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Los Pick'Ems powered by AWS permiten predecir los resultados de los partidos a lo largo de todo el torneo. Las recompensas están escalonadas según tu precisión: solo participar desbloquea el emote El Tigre Braum \"Pinfall\". Quedar en el top 50% añade el icono Zenith Games Blitzcrank \"Settle the Score\". El top 25% también obtiene el emote Janitor Thresh y Zac \"Clean Up\". Unas predicciones perfectas recompensan con la skin Broken Covenant Jhin — más el campeón Jhin si no lo tienes — junto con todas las recompensas de niveles anteriores.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Crystal Ball: una novedad en el MSI" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El Crystal Ball powered by AWS hace su debut en el MSI este año, desafiando a los fans a predecir las grandes tendencias del torneo: el campeón más jugado, el equipo sorpresa, el posible MVP y mucho mas. Hay 20 predicciones en total — cuatro se resuelven tras la Play-In Stage (28 de junio - 1 de julio) y las 16 restantes al final del torneo el 12 de julio. Rellenar el Crystal Ball antes del 28 de junio garantiza el emote \"Doesn't Look Good\" de Smolder. Los 100 mejores jugadores del mundo en el ranking del Crystal Ball tambien recibiran la skin Broken Covenant Jhin.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Once equipos rumbo a Daejeon" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El MSI 2026 reunira a once equipos de todas las regiones principales: Hanwha Life Esports y T1 por la LCK, Bilibili Gaming y Top Esports por la LPL, G2 Esports y Karmine Corp por la LEC, LYON y Team Liquid Alienware por la LCS, Team Secret Whales y Revolve Deep Cross Gaming por la LCP, y FURIA por el CBLOL. Las Play-Ins se celebraran del 28 de junio al 1 de julio, con la Gran Final prevista para el 12 de julio.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "No pierdas tu oportunidad: las predicciones del Crystal Ball cierran el 28 de junio antes del primer partido. Ve a lolesports.com para jugar.",
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
