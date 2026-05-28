import type { MigrationModule } from './runner'

export const id = '072-international-g2-msi-2026-lec-ub-final'
export const description = 'International — G2 Esports qualifié MSI 2026 après reverse sweep MKOI 3-2 (LEC UB Final)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-28T08:00:00.000Z'
const COVER = 'https://img.youtube.com/vi/095aOGqMyD0/maxresdefault.jpg'
const SOURCE = 'https://lolesports.com/vod/115548668059589364/1'

const articles = [
  {
    title: 'G2 Esports qualifié pour le MSI 2026 après un reverse sweep épique contre Movistar KOI',
    slug: 'slug-intl-g2-msi-2026-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: 'Down 0-2 au Riot Games Arena de Berlin, G2 Esports a réalisé un reverse sweep historique face à Movistar KOI (3-2) et devient la première équipe LEC qualifiée pour le MSI 2026 à Daejeon.',
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'International' }, { tag: 'LEC' }, { tag: 'MSI' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'Le 25 mai 2026, dans une Upper Bracket Final des LEC Spring Playoffs qui restera dans les mémoires, G2 Esports a réalisé l\'impensable : après être tombé 0-2 face à Movistar KOI, le club berlinois a enchaîné trois victoires consécutives pour s\'imposer 3-2 et décrocher son ticket pour le MSI 2026 à Daejeon, Corée du Sud.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Un reverse sweep de légende' }],
      },
      {
        type: 'p',
        children: [{ text: 'MKOI avait pourtant débuté en patron. Leur maîtrise du Fearless Draft leur a permis de remporter les deux premières games de façon convaincante, laissant G2 dans une position quasi-intenable. Mais dès la Game 3, l\'équipe de Caps a renoué avec son meilleur niveau, offrant des drafts plus propres et un macro jeu irréprochable. La Game 5 fut le théâtre du moment décisif : Labrov, sur Soraka, a flashé vers l\'avant pour réduire au silence l\'Azir de Jojopyun. BrokenBlade, sur Malphite, a immédiatement enchaîné. G2 a alors pris le contrôle de la partie et ne l\'a plus lâché, signant un reverse sweep qui a électrisé le Riot Games Arena de Berlin.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Cinquième MSI consécutif pour G2' }],
      },
      {
        type: 'p',
        children: [{ text: 'Cette qualification est la cinquième consécutive pour G2 Esports sur la scène internationale de mi-saison, et leur onzième finale LEC d\'affilée — une régularité sans équivalent en Europe. À Daejeon du 28 juin au 12 juillet, G2 sera le premier représentant européen, fort de son run jusqu\'en finale du First Stand 2026 et d\'une victoire 3-0 retentissante face à Gen.G. L\'Europe regarde vers la Corée avec espoir et confiance.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'G2 Esports est la première équipe LEC confirmée pour le MSI 2026. Daejeon, préparez-vous.' }],
      },
    ],
  },
  {
    title: 'G2 Esports Qualify for MSI 2026 with Epic Reverse Sweep Over Movistar KOI',
    slug: 'slug-intl-g2-msi-2026-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: 'Down 0-2 at the Riot Games Arena in Berlin, G2 Esports completed a historic 3-2 reverse sweep over Movistar KOI to become the first LEC team qualified for MSI 2026 in Daejeon.',
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'International' }, { tag: 'LEC' }, { tag: 'MSI' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'On May 25, 2026, in an Upper Bracket Final that will live long in LEC history, G2 Esports delivered one of the great reverse sweeps of the modern era. Down 0-2 against Movistar KOI at the Riot Games Arena in Berlin, G2 won three straight games to close out the series 3-2 and punch their ticket to MSI 2026 in Daejeon, South Korea.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'A Legendary Reverse Sweep' }],
      },
      {
        type: 'p',
        children: [{ text: 'MKOI came out firing on all cylinders. Their Fearless Draft expertise allowed them to build convincing advantages in Games 1 and 2, leaving G2 on the back foot and the Berlin crowd in stunned silence. But G2 found another gear from Game 3 onward: cleaner drafts, sharper macro decisions, and Caps operating at his absolute peak. The decisive moment came in Game 5 when Labrov flashed forward on Soraka to silence Jojopyun\'s Azir, with BrokenBlade instantly following up on Malphite. G2 seized control and never let go, completing one of the most dramatic comebacks in recent LEC playoff history.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'G2 Head to Daejeon for a Fifth Straight MSI' }],
      },
      {
        type: 'p',
        children: [{ text: 'The win secures G2 their fifth consecutive MSI appearance and eleventh straight LEC Grand Final — a remarkable streak of consistency. MSI 2026 runs June 28 to July 12 in Daejeon, South Korea, and G2 arrive as credible international contenders. Their First Stand 2026 run to the final and a statement 3-0 victory over Gen.G earlier this year have shown that Europe\'s best can compete with anyone on the global stage.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'G2 Esports are the first LEC team confirmed for MSI 2026. Europe\'s best are heading to Daejeon.' }],
      },
    ],
  },
  {
    title: 'G2 Esports se clasifican para el MSI 2026 con un épico reverse sweep contra Movistar KOI',
    slug: 'slug-intl-g2-msi-2026-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: 'Perdiendo 0-2 en el Riot Games Arena de Berlín, G2 Esports completó un histórico reverse sweep 3-2 ante Movistar KOI y se convierte en el primer equipo de la LEC clasificado para el MSI 2026 en Daejeon.',
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'International' }, { tag: 'LEC' }, { tag: 'MSI' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'El 25 de mayo de 2026, en una Final del Upper Bracket de los LEC Spring Playoffs que pasará a la historia, G2 Esports protagonizó uno de los momentos más épicos de la temporada. Tras caer 0-2 ante Movistar KOI en el Riot Games Arena de Berlín, el equipo consiguió encadenar tres victorias consecutivas para imponerse 3-2 y asegurar su plaza en el MSI 2026 de Daejeon, Corea del Sur.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Un reverse sweep para la historia' }],
      },
      {
        type: 'p',
        children: [{ text: 'MKOI comenzó la serie dominando de principio a fin. Su maestría en el Fearless Draft les permitió ganar los dos primeros mapas de forma convincente, dejando a G2 en una situación casi desesperada. Sin embargo, a partir de la Game 3, G2 Esports recuperó su mejor versión: drafts más sólidos, decisiones de macro más certeras y un Caps en estado puro. El punto de inflexión llegó en la Game 5: Labrov flasheó sobre Soraka para silenciar al Azir de Jojopyun, y BrokenBlade reaccionó de inmediato sobre Malphite. G2 tomó el control de la partida y no lo soltó, firmando un reverse sweep que hizo vibrar el arena de Berlín.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Quinto MSI consecutivo para G2 Esports' }],
      },
      {
        type: 'p',
        children: [{ text: 'Con esta victoria, G2 Esports se asegura su quinta participación consecutiva en el MSI y su undécima Final de la LEC seguida, una racha impresionante que consolida al equipo como la potencia indiscutible de Europa. El MSI 2026 se disputará en Daejeon, Corea del Sur, del 28 de junio al 12 de julio. G2 llega como serio candidato tras su final en el First Stand 2026 y su contundente victoria 3-0 sobre Gen.G, demostrando que Europa puede plantar cara al mundo entero.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'G2 Esports es el primer equipo LEC confirmado para el MSI 2026. Europa llega con ambición a Daejeon.' }],
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
