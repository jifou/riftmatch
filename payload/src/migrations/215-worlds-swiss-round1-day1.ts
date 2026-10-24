import type { MigrationModule } from './runner'

export const id = '215-worlds-swiss-round1-day1'

export const description = 'Worlds 2026 Swiss Stage Round 1: all eight matches from October 23'

export const up: MigrationModule['up'] = async (payload) => {
  // French news
  await payload.create({
    collection: 'news',
    data: {
      title: 'Worlds 2026 : LCK parfait, LPL sans victoire en première ronde',
      slug: 'worlds-2026-swiss-round1-results-fr',
      excerpt:
        'Le 23 octobre, le premier jour du Swiss Stage des Worlds 2026 révèle un classique : 4-0 pour la Corée (LCK) et 0-4 pour la Chine (LPL). Movistar KOI et Karmine Corp portent l\'espoir européen.',
      newsType: 'international',
      newsSubtype: 'resultats',
      category: 'esports',
      locale: 'fr',
      status: 'published',
      publishedAt: new Date('2026-10-23T05:00:00Z'),
      sourceUrl: 'https://www.lolesports.com/news/',
      content: [
        {
          type: 'p',
          children: [
            {
              text: 'Le Swiss Stage des Worlds 2026 a ouvert ses portes le 23 octobre à Allen, Texas, avec un premier jour dominé par les équipes coréennes et un revers collectif pour les champions du LPL. Les quatre seed LCK (Gen.G, Hanwha Life Esports, Dplus KIA et T1) ont remporté leurs matchs respectifs, tandis que les quatre équipes chinoises (Invictus Gaming, Top Esports, Bilibili Gaming et Anyone\'s Legend) ont encaissé des défaites.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'La domination coréenne' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Gen.G a lancé le tournoi en écrasant Invictus Gaming en 26 minutes, après un début chaotique où iG menait de 2000 d\'or. Chovy et Canyon ont pris le contrôle à la mid-game avec des combats d\'équipe irréprochables. Hanwha Life Esports s\'est imposée sur Top Esports en 23 minutes, une démolition pure.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Dplus KIA a réussi un comeback épique contre G2 après être tombée en arrière, tandis que T1 a étouffé LOS en 24 minutes, chaque membre de sa ligne supérieure signant un 0 morts.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'L\'effondrement du LPL en un jour' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Pour la première fois dans l\'histoire de Worlds, les quatre représentants du LPL n\'ont remporté aucun match lors de la première ronde du Swiss. Bilibili Gaming, champion régional de la Ligue Pro, a chuté face à Movistar KOI après un draft questionnable. Anyone\'s Legend, champion split d\'une autre région LPL, s\'est inclinée 0-1 contre Karmine Corp malgré le statut de favori.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Les surprises de la journée' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'L\'Europe a tiré son épingle du jeu : Movistar KOI a vaincu Bilibili Gaming, tandis que Karmine Corp, venant du Play-In, a réalisé un exploit contre Anyone\'s Legend. Le LCP s\'est montré compétitif, CTBC Flying Oyster surprenant Team Liquid Alienware. Enfin, LYON (LCS) a dominé Team Secret Whales (LCP #1).',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'La suite du Swiss continue avec le Round 2 le 24 octobre, toujours à Allen, Texas.',
            },
          ],
        },
      ],
      tags: [
        { tag: 'Worlds 2026' },
        { tag: 'Swiss Stage' },
        { tag: 'LCK' },
        { tag: 'LPL' },
        { tag: 'LEC' },
      ],
    },
  })

  // English news
  await payload.create({
    collection: 'news',
    data: {
      title: 'Worlds 2026: LCK Perfect, LPL Winless in Swiss Stage Round 1',
      slug: 'worlds-2026-swiss-round1-results-en',
      excerpt:
        'October 23 marks a historic first: all four LPL teams fail to win on Swiss Stage day one, while LCK goes 4-0. Movistar KOI and Karmine Corp bring European hope.',
      newsType: 'international',
      newsSubtype: 'resultats',
      category: 'esports',
      locale: 'en',
      status: 'published',
      publishedAt: new Date('2026-10-23T05:00:00Z'),
      sourceUrl: 'https://www.lolesports.com/news/',
      content: [
        {
          type: 'p',
          children: [
            {
              text: 'The Worlds 2026 Swiss Stage opened on October 23 in Allen, Texas, with LCK teams sweeping day one while all four LPL teams fell in their opening matches. In eight best-of-one games, the Korean region went 4-0, the Chinese region 0-4 - the first winless opening day for LPL in Worlds history.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Korea dominates' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Gen.G opened the tournament by crushing Invictus Gaming 1-0 in 26 minutes, recovering from a 2000-gold deficit after IG won an early Voidgrubs fight. Chovy\'s Akali and Canyon\'s Qiyana secured control in the mid-game, forcing out Baron and overwhelming IG\'s teamfights.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Hanwha Life Esports demolished Top Esports in just 23 minutes. Dplus KIA pulled off a stunning comeback against G2 after falling behind, while T1 smothered LOS in 24 minutes with a perfect 0-death showing from its entire upper trio.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'China\'s worst day at Worlds' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'For the first time ever at Worlds, the LPL failed to win a single game on the Swiss Stage opening day. Bilibili Gaming, the LPL split champion, lost to Movistar KOI despite a favored seeding. Anyone\'s Legend, standing as one of China\'s hopes after beating rivals in the Play-In, fell to Karmine Corp 0-1 in a major upset.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Europe and underdogs shine' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Europe had the best non-LCK day at Worlds, going 2-1 with Movistar KOI and Karmine Corp both securing wins. CTBC Flying Oyster defeated Team Liquid Alienware in a major upset, and LYON (LCS #2) comfortably beat Team Secret Whales.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Round 2 takes place on October 24, still in Allen, Texas.',
            },
          ],
        },
      ],
      tags: [
        { tag: 'Worlds 2026' },
        { tag: 'Swiss Stage' },
        { tag: 'LCK' },
        { tag: 'LPL' },
        { tag: 'esports' },
      ],
    },
  })

  // Spanish news
  await payload.create({
    collection: 'news',
    data: {
      title: 'Worlds 2026: Corea perfecta, China sin victorias en la ronda 1 del Swiss',
      slug: 'worlds-2026-swiss-round1-results-es',
      excerpt:
        'El 23 de octubre es histórico: los cuatro equipos LPL pierden en el primer día del Swiss Stage, mientras que LCK va 4-0. Movistar KOI y Karmine Corp llevan la esperanza europea.',
      newsType: 'international',
      newsSubtype: 'resultats',
      category: 'esports',
      locale: 'es',
      status: 'published',
      publishedAt: new Date('2026-10-23T05:00:00Z'),
      sourceUrl: 'https://www.lolesports.com/news/',
      content: [
        {
          type: 'p',
          children: [
            {
              text: 'El Swiss Stage de los Worlds 2026 abrió puertas el 23 de octubre en Allen, Texas, con una jornada completamente dominada por los equipos coreanos. Las cuatro semillas LCK ganaron sus matchs (4-0), mientras que todos los cuatro equipos LPL cayeron en sus juegos de apertura: un primer día sin victorias nunca visto en la historia de Worlds para la región china.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'La supremacía de Corea' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Gen.G abrió el torneo aplastando a Invictus Gaming en 26 minutos. Aunque el equipo coreano cayó atrás por 2000 de oro tras perder un teamfight de Voidgrubs, Chovy y Canyon tomaron el control con sus picks en la mid-game, ganando peleas decisivas y logrando Baron.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Hanwha Life Esports demolió a Top Esports en tan solo 23 minutos. Dplus KIA completó un comeback épico contra G2 después de ir por debajo, y T1 sofocó a LOS en 24 minutos con un desempeño perfecto de su trío superior, sin muertes.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'El peor día de China en Worlds' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Por primera vez en la historia de Worlds, el LPL no ganó ni un solo juego el primer día del Swiss Stage. Bilibili Gaming, campeón de split del LPL, perdió contra Movistar KOI. Anyone\'s Legend, que venía con esperanzas tras vencer rivales en Play-In, cayó ante Karmine Corp en un sorprendente 0-1.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Europa y equipos revelación brillan' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Europa tuvo el mejor día fuera del LCK con récord de 2-1. Movistar KOI y Karmine Corp ganaron sus matchs. CTBC Flying Oyster sorprendió a Team Liquid Alienware, y LYON (LCS #2) derrotó cómodamente a Team Secret Whales.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'La ronda 2 se juega el 24 de octubre, también en Allen, Texas.',
            },
          ],
        },
      ],
      tags: [
        { tag: 'Worlds 2026' },
        { tag: 'Swiss Stage' },
        { tag: 'LCK' },
        { tag: 'LPL' },
        { tag: 'esports' },
      ],
    },
  })

  // German news
  await payload.create({
    collection: 'news',
    data: {
      title: 'Worlds 2026: LCK perfekt, LPL ohne Siege in der Swiss Stage Runde 1',
      slug: 'worlds-2026-swiss-round1-results-de',
      excerpt:
        'Am 23. Oktober ein historisches Ergebnis: Alle vier LPL-Teams verlieren am ersten Tag der Swiss Stage, während LCK 4-0 geht. Movistar KOI und Karmine Corp tragen europäische Hoffnungen.',
      newsType: 'international',
      newsSubtype: 'resultats',
      category: 'esports',
      locale: 'de',
      status: 'published',
      publishedAt: new Date('2026-10-23T05:00:00Z'),
      sourceUrl: 'https://www.lolesports.com/news/',
      content: [
        {
          type: 'p',
          children: [
            {
              text: 'Die Worlds 2026 Swiss Stage öffnete am 23. Oktober in Allen, Texas, mit einem Tag, der vollständig von südkoreanischen Teams dominiert wurde. Alle vier LCK-Seeds gewannen ihre Spiele (4-0), während alle vier LPL-Teams in ihren Auftaktspielen verloren, was das erste Mal in der Worlds-Geschichte ist, dass die LPL keinen Sieg am ersten Tag der Swiss Stage schafft.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Koreas Überlegenheit' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Gen.G eröffnete das Turnier mit einem 26-Minuten-Sieg gegen Invictus Gaming. Obwohl Gen.G nach einer Niederlage beim Voidgrubs-Teamfight mit 2000 Gold im Nachteil war, übernahmen Chovy und Canyon mit ihrer Kontrolle die Kontrolle über das Mid-Game.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Hanwha Life Esports zerstörte Top Esports in nur 23 Minuten. Dplus KIA gelang ein epischer Comeback gegen G2 nach einem schwachen Start. T1 erstickte LOS in 24 Minuten mit einer perfekten Leistung.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Chinas schlechtester Tag bei Worlds' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Zum ersten Mal in der Worlds-Geschichte konnte die LPL am ersten Tag der Swiss Stage kein einziges Spiel gewinnen. Bilibili Gaming, der LPL-Split-Champion, verlor gegen Movistar KOI. Anyone\'s Legend, das mit großen Hoffnungen kam, unterlag Karmine Corp überraschend.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Europa und Außenseiter glänzen' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Europa hatte den besten Tag außerhalb der LCK mit 2-1. Movistar KOI und Karmine Corp gewannen ihre Spiele. CTBC Flying Oyster schockte Team Liquid Alienware, und LYON besiegte Team Secret Whales überzeugend.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Runde 2 findet am 24. Oktober statt, ebenfalls in Allen, Texas.',
            },
          ],
        },
      ],
      tags: [
        { tag: 'Worlds 2026' },
        { tag: 'Swiss Stage' },
        { tag: 'LCK' },
        { tag: 'LPL' },
        { tag: 'esports' },
      ],
    },
  })

  // Italian news
  await payload.create({
    collection: 'news',
    data: {
      title: 'Worlds 2026: LCK perfetto, LPL senza vittorie nella ronda 1 della Swiss Stage',
      slug: 'worlds-2026-swiss-round1-results-it',
      excerpt:
        'Il 23 ottobre, evento storico: tutti e quattro i team LPL perdono nel primo giorno della Swiss Stage, mentre LCK va 4-0. Movistar KOI e Karmine Corp portano la speranza europea.',
      newsType: 'international',
      newsSubtype: 'resultats',
      category: 'esports',
      locale: 'it',
      status: 'published',
      publishedAt: new Date('2026-10-23T05:00:00Z'),
      sourceUrl: 'https://www.lolesports.com/news/',
      content: [
        {
          type: 'p',
          children: [
            {
              text: 'La Swiss Stage dei Worlds 2026 ha aperto le porte il 23 ottobre ad Allen, in Texas, con una giornata dominata completamente dai team coreani. Tutti e quattro i seed LCK hanno vinto le loro partite (4-0), mentre tutti e quattro i team LPL hanno perso nei loro match iniziali, un primo giorno senza vittorie mai visto prima nella storia di Worlds per la regione cinese.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Il dominio della Corea' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Gen.G ha aperto il torneo schiacciando Invictus Gaming in 26 minuti. Nonostante il team coreano fosse indietro di 2000 oro dopo aver perso un teamfight ai Voidgrubs, Chovy e Canyon hanno preso il controllo nel mid-game con le loro scelte.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Hanwha Life Esports ha demolito Top Esports in soli 23 minuti. Dplus KIA ha completato un clamoroso ritorno contro G2 dopo essere andata indietro. T1 ha soffocato LOS in 24 minuti con una prestazione perfetta.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Il peggior giorno della Cina a Worlds' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Per la prima volta nella storia di Worlds, la LPL non ha vinto nemmeno una partita nel primo giorno della Swiss Stage. Bilibili Gaming, campione split della LPL, ha perso contro Movistar KOI. Anyone\'s Legend, con grandi speranze, ha ceduto sorprendentemente a Karmine Corp.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'L\'Europa e gli outsider brillano' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'L\'Europa ha avuto il miglior giorno al di fuori della LCK con record 2-1. Movistar KOI e Karmine Corp hanno vinto le loro partite. CTBC Flying Oyster ha sorpreso Team Liquid Alienware, e LYON ha sconfitto comodamente Team Secret Whales.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'La ronda 2 si svolge il 24 ottobre, sempre ad Allen, Texas.',
            },
          ],
        },
      ],
      tags: [
        { tag: 'Worlds 2026' },
        { tag: 'Swiss Stage' },
        { tag: 'LCK' },
        { tag: 'LPL' },
        { tag: 'esports' },
      ],
    },
  })
}
