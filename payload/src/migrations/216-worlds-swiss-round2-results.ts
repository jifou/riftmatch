import type { MigrationModule } from './runner'

export const id = '216-worlds-swiss-round2-results'

export const description = 'Worlds 2026 Swiss Stage Round 2 results: DK beats T1, Gen.G dominates HLE'

export const up: MigrationModule['up'] = async (payload) => {
  const baseNews = [
    {
      locale: 'fr',
      slug: 'worlds-2026-swiss-round2-results-fr',
      title: 'Worlds 2026 : DK détrône T1, Gen.G perfectionne 2-0',
      excerpt: 'Le 24 octobre, Round 2 du Swiss Stage couronne ses premières équipes. Dplus KIA élimine T1 au terme d\'un combat draconique, Gen.G balaye Hanwha Life. Résultats complets.',
      newsType: 'international',
      newsSubtype: 'resultats',
      category: 'esports',
      tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'DK' }, { tag: 'T1' }, { tag: 'Gen.G' }],
      sourceUrl: 'https://lolesports.com/en-US/tournament/115660540725177488/overview',
      content: [
        { type: 'p', children: [{ text: 'La deuxième ronde du Swiss Stage des Worlds 2026 s\'est achevée le 24 octobre à Allen, Texas, consacrant les équipes les plus cohérentes et entraînant les premières surprises du tournoi. Avec les premières équipes à 2-0, le format commence à se durcir pour ceux qui trébuche.' }] },
        { type: 'h2', children: [{ text: 'DK éjecte T1 sur Elder Dragon' }] },
        { type: 'p', children: [{ text: 'En affrontement LCK direct, Dplus KIA a réalisé un come-back spectaculaire contre T1 en matchup 1-0 face à 1-0. T1 dominait depuis le début avec Faker en Anivia et une position confortable, mais DK a tenu bon jusqu\'au combat d\'Elder Dragon décisif. Oh Career\'s ultime parfait a décidé du match au profit de Dplus KIA. Un revers majeur pour T1, qui passe à 1-1.' }] },
        { type: 'h2', children: [{ text: 'Gen.G : 2-0 et déjà un pied en quarts' }] },
        { type: 'p', children: [{ text: 'Gen.G a écrasé Hanwha Life Esports en 29 minutes seulement. Canyon au Qiyana a contrôlé tous les objectifs, tandis que Hanwha Life ne voyait aucune ouverture pour exister. Un match clinique qui établit Gen.G comme l\'équipe à battre cette semaine.' }] },
        { type: 'h2', children: [{ text: 'Le reste du Round 2' }] },
        { type: 'p', children: [{ text: 'Movistar KOI maintient son sans-faute (2-0) face à CTBC Flying Oyster. LYON (LCS #2) a dû composer avec Karmine Corp en duel européen, remportant 1-0 une belle partie. Top Esports a redressé la tête en battant Anyone\'s Legend et remonte à 1-1, tandis que Bilibili Gaming pulvérise Team Liquid Alienware 1-0 : enfin une victoire du LPL.' }] },
        { type: 'h2', children: [{ text: 'Enjeux du Round 3' }] },
        { type: 'p', children: [{ text: 'Les 2-0 (Gen.G, DK, LYON, Movistar KOI) entrent en Bo3 qui qualifie : le vainqueur sera 3-0 et en quarts. Les 1-1 jouent en Bo1, les enjeux maximaux pour rester dans la course. Dépêchez-vous dimanche 25 et lundi 26 à Allen, Texas.' }] },
      ],
    },
    {
      locale: 'en',
      slug: 'worlds-2026-swiss-round2-results-en',
      title: 'Worlds 2026: DK Stuns T1, Gen.G Perfect at 2-0',
      excerpt: 'On October 24, Round 2 of the Swiss Stage crowns the first undefeated teams. Dplus KIA shocks T1 with a clutch Elder Dragon win, Gen.G dominates Hanwha Life. Full recap.',
      newsType: 'international',
      newsSubtype: 'resultats',
      category: 'esports',
      tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'DK' }, { tag: 'T1' }, { tag: 'Gen.G' }],
      sourceUrl: 'https://lolesports.com/en-US/tournament/115660540725177488/overview',
      content: [
        { type: 'p', children: [{ text: 'Round 2 of the Worlds 2026 Swiss Stage concluded on October 24 in Allen, Texas, producing both dominance and upsets. With the first teams now undefeated at 2-0, the bracket is tightening and mistakes are becoming costly.' }] },
        { type: 'h2', children: [{ text: 'DK Shocks T1 on Elder Dragon Teamfight' }] },
        { type: 'p', children: [{ text: 'In a historic LCK clash, Dplus KIA pulled off a stunning comeback against T1 in a battle between two 1-0 teams. T1 controlled the early game with Faker\'s flawless Anivia play and amassed a 2000-gold lead, but DK refused to break. When Elder Dragon spawned, DK made the desperate call to rush it. Oh Career\'s perfect ultimate decided the teamfight, and DK walked away with the upset 1-0. T1 falls to 1-1.' }] },
        { type: 'h2', children: [{ text: 'Gen.G: 2-0 and One Step From Quarters' }] },
        { type: 'p', children: [{ text: 'Gen.G dismantled Hanwha Life Esports in just 29 minutes, a clinical display of dominance. Canyon\'s Qiyana locked down every objective, leaving Hanwha Life no room to breathe. This marks Gen.G as the strongest team through two rounds.' }] },
        { type: 'h2', children: [{ text: 'Round 2 Wrap-Up' }] },
        { type: 'p', children: [{ text: 'Movistar KOI stays perfect at 2-0 after beating CTBC Flying Oyster. LYON (LCS #2) defeated Karmine Corp in a tense 1-0 European battle. Top Esports bounced back against Anyone\'s Legend to go 1-1, while Bilibili Gaming finally got a LPL win, crushing Team Liquid 1-0.' }] },
        { type: 'h2', children: [{ text: 'Round 3 Stakes' }] },
        { type: 'p', children: [{ text: 'The four 2-0 teams (Gen.G, DK, LYON, Movistar KOI) play best-of-three matches on October 25-26: the winner qualifies for Quarterfinals. All 1-1 teams battle in best-of-ones. The stakes have never been higher. Watch Allen, Texas, this weekend.' }] },
      ],
    },
    {
      locale: 'es',
      slug: 'worlds-2026-swiss-round2-results-es',
      title: 'Worlds 2026: DK Asombra a T1, Gen.G Perfecto en 2-0',
      excerpt: 'El 24 de octubre, Round 2 del Swiss Stage corona a los primeros equipos invictos. Dplus KIA sorprende a T1 con una victoria épica en dragón anciano, Gen.G domina Hanwha Life. Resumen completo.',
      newsType: 'international',
      newsSubtype: 'resultats',
      category: 'esports',
      tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'DK' }, { tag: 'T1' }, { tag: 'Gen.G' }],
      sourceUrl: 'https://lolesports.com/en-US/tournament/115660540725177488/overview',
      content: [
        { type: 'p', children: [{ text: 'La ronda 2 del Swiss Stage de Worlds 2026 terminó el 24 de octubre en Allen, Texas, produciendo dominio absoluto y sorpresas que nadie esperaba. Los primeros equipos invictos están a 2-0, y el bracket se aprieta minuto a minuto.' }] },
        { type: 'h2', children: [{ text: 'DK Sorprende a T1 en Dragón Anciano' }] },
        { type: 'p', children: [{ text: 'En un duelo histórico LCK, Dplus KIA logró un comeback épico contra T1. Faker controlaba el juego temprano con su Anivia perfecta y T1 acumulaba 2000 de oro de ventaja, pero DK se negaba a ceder. Cuando apareció el Dragón Anciano, DK forzó el pelea de team crucial. La ulti perfecta de Oh Career decidió la batalla a favor de Dplus KIA. T1 cae a 1-1.' }] },
        { type: 'h2', children: [{ text: 'Gen.G: 2-0 y a un Paso de Cuartos' }] },
        { type: 'p', children: [{ text: 'Gen.G aniquiló a Hanwha Life Esports en solo 29 minutos, con una demostración clínica de dominio. Canyon en Qiyana controló cada objetivo, dejando a Hanwha sin aire. Este es Gen.G en su máxima expresión.' }] },
        { type: 'h2', children: [{ text: 'El Resto del Round 2' }] },
        { type: 'p', children: [{ text: 'Movistar KOI mantiene su invicto 2-0 tras vencer a CTBC Flying Oyster. LYON (LCS #2) ganó el duelo europeo contra Karmine Corp en un 1-0 tenso. Top Esports se recuperó al vencer a Anyone\'s Legend y sube a 1-1. Bilibili Gaming finalmente obtiene su primera victoria en Worlds, aplastando a Team Liquid 1-0.' }] },
        { type: 'h2', children: [{ text: 'Los Enjuegos del Round 3' }] },
        { type: 'p', children: [{ text: 'Los cuatro invictos (Gen.G, DK, LYON, Movistar KOI) juegan al mejor de 3 el 25-26 de octubre: el ganador se clasifica directo. Los 1-1 luchan en partidas individuales con todo en juego. Síguelos en Allen, Texas, este fin de semana.' }] },
      ],
    },
    {
      locale: 'de',
      slug: 'worlds-2026-swiss-round2-results-de',
      title: 'Worlds 2026: DK überrascht T1, Gen.G perfekt bei 2-0',
      excerpt: 'Am 24. Oktober, Round 2 der Swiss Stage, stehen die ersten unbesiegten Teams fest. Dplus KIA schockt T1 mit einem Sieg beim Elder Dragon, Gen.G dominiert Hanwha Life. Vollständige Zusammenfassung.',
      newsType: 'international',
      newsSubtype: 'resultats',
      category: 'esports',
      tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'DK' }, { tag: 'T1' }, { tag: 'Gen.G' }],
      sourceUrl: 'https://lolesports.com/en-US/tournament/115660540725177488/overview',
      content: [
        { type: 'p', children: [{ text: 'Die zweite Runde der Swiss Stage der Worlds 2026 endete am 24. Oktober in Allen, Texas, mit Dominanz und einigen Überraschungen. Die ersten Teams sind jetzt ungeschlagen bei 2-0, und das Feld wird enger.' }] },
        { type: 'h2', children: [{ text: 'DK schockt T1 beim Elder Dragon' }] },
        { type: 'p', children: [{ text: 'In einer historischen LCK-Auseinandersetzung schaffte Dplus KIA ein episches Comeback gegen T1 in einem Aufeinandertreffen zwischen zwei 1-0-Teams. T1 kontrollierte das frühe Spiel mit Fakers fehlerfreiem Anivia-Play und hatte einen 2000er-Goldvorsprung, aber DK gab nicht auf. Beim Elder Dragon machte DK den Verzweiflungszug: Sie erzwangen den Kampf. Oh Careers perfekte Ultimate entschied die Teamfight für Dplus KIA. T1 fällt auf 1-1 zurück.' }] },
        { type: 'h2', children: [{ text: 'Gen.G: 2-0 und ein Schritt zu den Vierteln' }] },
        { type: 'p', children: [{ text: 'Gen.G zerlegte Hanwha Life Esports in nur 29 Minuten, eine klinische Demonstration von Dominanz. Canyons Qiyana controlierte jeden Objektiv, während Hanwha Life kein Entrinnen fand.' }] },
        { type: 'h2', children: [{ text: 'Weitere Ergebnisse der Runde 2' }] },
        { type: 'p', children: [{ text: 'Movistar KOI bleibt bei 2-0 nach einem Sieg über CTBC Flying Oyster. LYON (LCS #2) besiegte Karmine Corp in einem europäischen Duell 1-0. Top Esports kam zurück und schlug Anyone\'s Legend 1-0, um auf 1-1 zu gehen. Bilibili Gaming holte sich endlich einen LPL-Sieg und besiegte Team Liquid klar 1-0.' }] },
        { type: 'h2', children: [{ text: 'Round 3 Einsätze' }] },
        { type: 'p', children: [{ text: 'Die vier unbesiegten Teams (Gen.G, DK, LYON, Movistar KOI) spielen Best-of-Three am 25. und 26. Oktober: Der Gewinner qualifiziert sich direkt. Alle 1-1-Teams kämpfen in Einzelspielen. Folgt dem Duell in Allen, Texas, dieses Wochenende.' }] },
      ],
    },
    {
      locale: 'it',
      slug: 'worlds-2026-swiss-round2-results-it',
      title: 'Worlds 2026: DK Sorprende T1, Gen.G Perfetto a 2-0',
      excerpt: 'Il 24 ottobre, Round 2 del Swiss Stage incoronala i primi team imbattuti. Dplus KIA sorprende T1 con una vittoria epica al Dragone Anziano, Gen.G domina Hanwha Life. Resoconto completo.',
      newsType: 'international',
      newsSubtype: 'resultats',
      category: 'esports',
      tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'DK' }, { tag: 'T1' }, { tag: 'Gen.G' }],
      sourceUrl: 'https://lolesports.com/en-US/tournament/115660540725177488/overview',
      content: [
        { type: 'p', children: [{ text: 'La seconda ronda dello Swiss Stage dei Worlds 2026 si è conclusa il 24 ottobre ad Allen, Texas, producendo dominio assoluto e sorprese storiche. I primi team imbattuti sono ora a 2-0, e la corsa si fa sempre piu tesa.' }] },
        { type: 'h2', children: [{ text: 'DK Sorprende T1 al Dragone Anziano' }] },
        { type: 'p', children: [{ text: 'In uno scontro storico tra LCK, Dplus KIA ha realizzato un comeback epico contro T1 in un match tra due squadre 1-0. T1 controllava il gioco iniziale con l\'Anivia perfetta di Faker e accumulava 2000 di oro di vantaggio, ma DK ha resistito. Quando il Dragone Anziano è apparso, DK ha forzato lo scontro decisivo. L\'ulti perfetta di Oh Career ha deciso la battaglia a favore di Dplus KIA. T1 cade a 1-1.' }] },
        { type: 'h2', children: [{ text: 'Gen.G: 2-0 e un Passo dai Quarti' }] },
        { type: 'p', children: [{ text: 'Gen.G ha annientato Hanwha Life Esports in soli 29 minuti, una dimostrazione clinica di dominio assoluto. Il Qiyana di Canyon ha controllato ogni obiettivo, lasciando Hanwha senza scampo.' }] },
        { type: 'h2', children: [{ text: 'Il Resto del Round 2' }] },
        { type: 'p', children: [{ text: 'Movistar KOI rimane imbattuta a 2-0 dopo aver battuto CTBC Flying Oyster. LYON (LCS #2) ha vinto il duello europeo contro Karmine Corp 1-0 in un match teso. Top Esports si è ripresa sconfiggendo Anyone\'s Legend e sale a 1-1. Bilibili Gaming ottiene finalmente una vittoria mondiale, schiacciando Team Liquid 1-0.' }] },
        { type: 'h2', children: [{ text: 'La Posta in Gioco nel Round 3' }] },
        { type: 'p', children: [{ text: 'I quattro imbattuti (Gen.G, DK, LYON, Movistar KOI) giocano al meglio di 3 il 25-26 ottobre: il vincitore si qualifica per i Quarti. Tutti i team 1-1 si sfidano in partite singole con tutto in palio. Segui Allen, Texas, questo fine settimana.' }] },
      ],
    },
  ]

  for (const news of baseNews) {
    const existing = await payload.find({
      collection: 'news',
      where: { slug: { equals: news.slug } },
    })

    if (existing.docs.length === 0) {
      await payload.create({
        collection: 'news',
        data: {
          ...news,
          status: 'published',
          publishedAt: new Date('2026-10-24T12:00:00Z'),
        },
      })
    }
  }
}
