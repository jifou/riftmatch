import type { MigrationModule } from './runner'

export const id = '068-international-ewc-2026-t1-lck-qualifier'
export const description = 'International — T1 qualifié EWC 2026 : victoire 3-1 contre Dplus KIA au qualifier LCK (25 mai 2026)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-26T08:00:00.000Z'
const COVER = 'https://img.youtube.com/vi/DgDhiSnt9Co/maxresdefault.jpg'

const articles = [
  {
    title: 'T1 qualifié pour l\'EWC 2026 : Faker écrase Dplus KIA 3-1 au qualifier LCK',
    slug: 'slug-intl-ewc-2026-t1-dk-qualifier-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: 'T1 a dominé Dplus KIA 3-1 le 25 mai dans le qualifier LCK de l\'Esports World Cup 2026, avec Faker MVP incontestable. L\'équipe représentera la Corée à Paris pour la 3e année consécutive.',
    sourceUrl: 'https://egamersworld.com/lol/news/35006/t1-becomes-the-first-lck-team-to-qualify-for-the-e-Cl73wtDf-',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'International' }, { tag: 'T1' }, { tag: 'EWC' }, { tag: 'Faker' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Le 25 mai 2026, T1 a validé sa place à l'Esports World Cup 2026 en s'imposant 3-1 face à Dplus KIA lors de la finale du bracket supérieur du qualifier LCK. Faker et ses coéquipiers représenteront la Corée à Paris pour la troisième année consécutive, confirmant leur statut de référence absolue de la scène internationale." }],
      },
      {
        type: 'h2',
        children: [{ text: "Un parcours sans faute jusqu'à la finale contre DK" }],
      },
      {
        type: 'p',
        children: [{ text: "T1 avait déjà impressionné en écartant HANJIN Brion 2-0 puis BNK FEARX 2-0 avant de retrouver Dplus KIA en finale du bracket supérieur. Face aux hommes de ShowMaker et Lucid, la série s'est révélée plus disputée : DK a réussi à remporter la troisième manche, forçant T1 à aller en game 4. Mais Doran, Oner, Faker, Peyz et Keria ont tenu bon, clôturant le match avec autorité pour décrocher le précieux ticket parisien." }],
      },
      {
        type: 'h2',
        children: [{ text: 'Faker, maître sur Akali et Annie' }],
      },
      {
        type: 'p',
        children: [{ text: "Faker a lancé les hostilités sur Akali en game 1, imposant immédiatement son rythme avec des roams décisifs et des kills stratégiques. Sa performance sur Annie dans les games suivants a été tout aussi remarquable : un Flash Tibbers dévastateur lui a permis de retourner un teamfight crucial et d'ouvrir la route de la victoire pour T1. La rencontre a attiré plus de 500 000 spectateurs en simultané — un chiffre éloquent pour un qualifier en ligne." }],
      },
      {
        type: 'h2',
        children: [{ text: 'Rendez-vous à Paris le 15 juillet' }],
      },
      {
        type: 'p',
        children: [{ text: "Dplus KIA bascule dans le bracket inférieur et conserve une chance de décrocher le second slot coréen. T1, eux, ont déjà leur billet. Ils débarqueront à Paris du 15 au 19 juillet pour la compétition LoL de l'EWC 2026, dotée d'un prize pool de 2 millions de dollars. Gen.G, champions sortants de l'EWC, bénéficient d'une invitation directe et retrouveront T1 sur la scène internationale pour un affrontement 100 % coréen très attendu." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "T1 s'offre Paris pour la 3e fois de suite : Faker, Oner et Keria confirment que la meilleure équipe de Corée reste la meilleure équipe du monde." }],
      },
    ],
  },
  {
    title: 'T1 qualify for EWC 2026: Faker dismantles Dplus KIA 3-1 in LCK qualifier',
    slug: 'slug-intl-ewc-2026-t1-dk-qualifier-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: 'T1 swept through the EWC 2026 LCK qualifier with a 3-1 victory over Dplus KIA on May 25, Faker delivering a masterclass on Akali and Annie. T1 will represent Korea in Paris for the third straight year.',
    sourceUrl: 'https://egamersworld.com/lol/news/35006/t1-becomes-the-first-lck-team-to-qualify-for-the-e-Cl73wtDf-',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'International' }, { tag: 'T1' }, { tag: 'EWC' }, { tag: 'Faker' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'On May 25, 2026, T1 secured their spot at the Esports World Cup 2026 by defeating Dplus KIA 3-1 in the upper bracket final of the LCK qualifier. Faker and his teammates will once again represent Korea at the prestigious summer international, heading to Paris for the third consecutive year.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Unbeaten run through the qualifier' }],
      },
      {
        type: 'p',
        children: [{ text: "T1 entered the upper bracket final on a dominant wave, having swept both HANJIN Brion 2-0 and BNK FearX 2-0 in earlier rounds. Dplus KIA proved to be the stiffest test, with ShowMaker and Lucid rallying to win Game 3 and deny T1 a clean series — but it wasn't enough. The roster of Doran, Oner, Faker, Peyz, and Keria closed out Game 4 with conviction to confirm their EWC berth." }],
      },
      {
        type: 'h2',
        children: [{ text: "Faker's masterclass on Akali and Annie" }],
      },
      {
        type: 'p',
        children: [{ text: "Faker set the tone immediately, opening on Akali in Game 1 with calculated roams and decisive kills that gave T1 early control of the series. His Annie games were equally impactful: a clutch Flash Tibbers shifted the momentum in a pivotal teamfight and proved once again why the 30-year-old veteran remains a game-changer at the highest level. The match peaked at over 500,000 concurrent viewers — a remarkable figure for an online qualifier — underscoring T1's global appeal." }],
      },
      {
        type: 'h2',
        children: [{ text: 'Paris awaits: July 15–19' }],
      },
      {
        type: 'p',
        children: [{ text: 'Dplus KIA drop to the lower bracket with one final shot at the second Korean slot. T1 are already booked for Paris, where they will compete in the EWC 2026 LoL tournament (July 15–19) for a share of the $2 million prize pool. Defending EWC champions Gen.G have a direct invite, setting the stage for a blockbuster all-Korean clash on the international stage.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'T1 make it to Paris for the third consecutive year: Faker, Oner, and Keria prove that the best team in Korea is still the best team in the world.' }],
      },
    ],
  },
  {
    title: 'T1 clasificado para EWC 2026: Faker destruye a Dplus KIA 3-1 en el qualifier de LCK',
    slug: 'slug-intl-ewc-2026-t1-dk-qualifier-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: 'T1 dominó el qualifier LCK de la Esports World Cup 2026 con una victoria 3-1 sobre Dplus KIA el 25 de mayo, con Faker como figura indiscutible en Akali y Annie. El equipo representará a Corea en París por tercer año consecutivo.',
    sourceUrl: 'https://egamersworld.com/lol/news/35006/t1-becomes-the-first-lck-team-to-qualify-for-the-e-Cl73wtDf-',
    tags: [{ tag: 'LoL' }, { tag: 'Esports' }, { tag: 'Internacional' }, { tag: 'T1' }, { tag: 'EWC' }, { tag: 'Faker' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'El 25 de mayo de 2026, T1 confirmó su presencia en la Esports World Cup 2026 al derrotar a Dplus KIA 3-1 en la gran final del bracket superior del qualifier de LCK. Faker y sus compañeros representarán a Corea en París por tercer año consecutivo, consolidando su dominio absoluto en la escena de esports internacional.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Un camino imparable hasta la final del bracket superior' }],
      },
      {
        type: 'p',
        children: [{ text: 'T1 llegó a la final tras superar a HANJIN Brion 2-0 y a BNK FearX 2-0 sin conceder ninguna derrota. Dplus KIA resultó ser el rival más exigente: ShowMaker y Lucid lideraron una remontada para arrebatar la tercera partida y poner a T1 contra las cuerdas. Pero el quinteto formado por Doran, Oner, Faker, Peyz y Keria respondió con solidez en el Game 4, cerrando la serie para asegurarse el billete a París.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Faker, maestro con Akali y Annie' }],
      },
      {
        type: 'p',
        children: [{ text: 'Faker abrió la serie con Akali en el Game 1, marcando el tempo con roams precisos y kills determinantes que colocaron a T1 en una posición ventajosa desde el inicio. Su actuación posterior con Annie fue igualmente brillante: un Flash Tibbers devastador decantó un teamfight crucial y demostró que, con 30 años, la leyenda sigue siendo el factor diferencial de su equipo. El partido superó los 500.000 espectadores simultáneos, una cifra extraordinaria para un qualifier online que refleja el impacto global de T1.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'París espera: del 15 al 19 de julio' }],
      },
      {
        type: 'p',
        children: [{ text: 'Dplus KIA cae al bracket inferior con una última oportunidad para conseguir el segundo slot coreano para la EWC. T1, por su parte, ya tienen su billete. Competirán en el torneo de LoL de la EWC 2026 en París del 15 al 19 de julio, con un prize pool de 2 millones de dólares en juego. Gen.G, campeones defensores de la EWC, cuentan con invitación directa, lo que augura un enfrentamiento 100 % coreano muy esperado por la comunidad.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'T1 vuela a París por tercera vez consecutiva: Faker, Oner y Keria demuestran que el mejor equipo de Corea sigue siendo el mejor equipo del mundo.' }],
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
