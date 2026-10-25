import type { MigrationModule } from './runner'

export const id = '217-worlds-swiss-round3-preview'

export const description = 'Worlds 2026 Swiss Stage Round 3 official schedule and stakes preview'

export const up: MigrationModule['up'] = async (payload) => {
  const baseNews = [
    {
      locale: 'fr',
      slug: 'worlds-2026-swiss-round3-preview-fr',
      title: 'Worlds 2026 : Round 3, le tournant du Swiss. Gen.G vs LYON, DK vs Movistar',
      excerpt: 'Le 25 et 26 octobre, Round 3 couronne les premiers champions. Gen.G affronte LYON en Bo3 pour une place directe. DK defend sa victoire contre Movistar KOI. Les matchs les plus attendus.',
      newsType: 'international',
      newsSubtype: 'other',
      category: 'esports',
      tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'Gen.G' }, { tag: 'LYON' }, { tag: 'DK' }, { tag: 'Movistar KOI' }],
      sourceUrl: 'https://lolesports.com/en-US/leagues/worlds',
      content: [
        { type: 'p', children: [{ text: 'La troisième ronde du Swiss Stage des Worlds 2026 arrive le 25 et 26 octobre à Allen, Texas, et elle décidera des premières qualifications directes pour les quarts de finale. Les équipes à 2-0 jouent en Bo3 : une victoire = quarts garantis, une défaite = une deuxième chance. Les 1-1 et 0-2 jouent des matchs cruciaux pour leur survie.' }] },
        { type: 'h2', children: [{ text: 'Les deux demi-finales de facto du Round 3' }] },
        { type: 'p', children: [{ text: 'Gen.G (LCK) affronte LYON (LCS #2) le dimanche 25 octobre à 9h du matin PT (18h CET) en Bo3. Un choc entre deux régions sur un tableau 2-0 qui désignera un des deux premiers qualifiés. LYON ne s\'attend à rien, mais déjà deux victoires en Worlds, c\'est une belle histoire.' }] },
        { type: 'p', children: [{ text: 'Dplus KIA (LCK) affronte Movistar KOI (LEC #2) aussi le 25 octobre, mais à 14h PT (23h CET). DK sort du match époustouflant contre T1, tandis que Movistar KOI reste le seul vrai concurrent de Gen.G en Europe. La victoire envoie droit aux quarts.' }] },
        { type: 'h2', children: [{ text: 'Les enjeux des 1-1 : le lundi sera mortel' }] },
        { type: 'p', children: [{ text: 'T1 repartira dimanche contre CTBC Flying Oyster, une chance de rester vivant après la défaite contre DK. Hanwha Life Esports affronte Invictus Gaming, G2 Esports croise Top Esports, et Karmine Corp doit passer Bilibili Gaming. Un seul combat, zéro marge : 1-2 te laisse la survie, 0-2 t\'élimine.' }] },
        { type: 'h2', children: [{ text: 'Les 0-2 : c\'est l\'élimination qui se joue le 26' }] },
        { type: 'p', children: [{ text: 'Team Liquid et Anyone\'s Legend sont dos au mur. LOS et Team Secret Whales aussi. Quatre équipes, deux séries Bo3 le lundi : les perdants s\'en vont. C\'est un tournant à ne pas rater.' }] },
        { type: 'h2', children: [{ text: 'Calendrier complet du Round 3' }] },
        { type: 'p', children: [{ text: 'Dimanche 25 octobre : Hanwha Life vs Invictus Gaming (13h PT / 22h CET), G2 vs Top Esports (14h PT / 23h CET), Movistar KOI vs DK (15h PT / 00h CET lundi), Gen.G vs LYON (16h PT / 01h CET lundi). Lundi 26 octobre : CTBC Flying Oyster vs T1 (13h PT / 22h CET), Bilibili Gaming vs Karmine Corp (14h PT / 23h CET), LOS vs Team Secret Whales (15h PT / 00h CET mardi), Team Liquid vs Anyone\'s Legend (16h PT / 01h CET mardi). À suivre en direct sur lolesports.com.' }] },
        { type: 'p', children: [{ text: 'Une question reste : qui sera le prochain qualifié après Gen.G et Dplus KIA, si ces deux s\'imposent comme prévu ? Attends dimanche pour le savoir.' }] },
      ],
    },
    {
      locale: 'en',
      slug: 'worlds-2026-swiss-round3-preview-en',
      title: 'Worlds 2026: Round 3, The Swiss Turning Point. Gen.G vs LYON, DK vs Movistar',
      excerpt: 'On October 25-26, Round 3 crowns the first champions. Gen.G faces LYON in Bo3 for a direct spot. DK defends its undefeated record against Movistar KOI. The matches to watch.',
      newsType: 'international',
      newsSubtype: 'other',
      category: 'esports',
      tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'Gen.G' }, { tag: 'LYON' }, { tag: 'DK' }, { tag: 'Movistar KOI' }],
      sourceUrl: 'https://lolesports.com/en-US/leagues/worlds',
      content: [
        { type: 'p', children: [{ text: 'Round 3 of the Worlds 2026 Swiss Stage arrives on October 25-26 in Allen, Texas, and it will determine the first direct qualifications to the Quarterfinals. Teams at 2-0 play best-of-three: a win sends you straight, a loss gives you another chance. Teams at 1-1 and 0-2 are fighting for their tournament lives.' }] },
        { type: 'h2', children: [{ text: 'The Two De Facto Semifinals of Round 3' }] },
        { type: 'p', children: [{ text: 'Gen.G (LCK) takes on LYON (LCS #2) on Sunday, October 25 at 9 AM PT (6 PM CET) in a best-of-three. A clash of regions with both teams at 2-0. LYON has already won twice at Worlds against the odds, a genuine underdog story.' }] },
        { type: 'p', children: [{ text: 'Dplus KIA (LCK) faces Movistar KOI (LEC #2) also on October 25 at 1 PM PT (10 PM CET). DK just pulled off a shocking upset against T1 at Elder Dragon, while Movistar KOI is the last European hope standing at 2-0. Winner goes to Quarterfinals.' }] },
        { type: 'h2', children: [{ text: 'The 1-1 Stakes: Monday Will Be Brutal' }] },
        { type: 'p', children: [{ text: 'T1 returns Sunday against CTBC Flying Oyster, a chance to stay alive after losing to DK. Hanwha Life Esports faces Invictus Gaming, G2 Esports meets Top Esports, and Karmine Corp must get past Bilibili Gaming. One game, no room for error: 1-2 means survival, 0-2 means elimination.' }] },
        { type: 'h2', children: [{ text: 'The 0-2 Teams: Elimination on October 26' }] },
        { type: 'p', children: [{ text: 'Team Liquid and Anyone\'s Legend are one loss away. LOS and Team Secret Whales too. Four teams, two best-of-three series on Monday: the losers go home. This is the turning point of Worlds.' }] },
        { type: 'h2', children: [{ text: 'Round 3 Full Schedule' }] },
        { type: 'p', children: [{ text: 'Sunday, October 25: Hanwha Life vs Invictus Gaming (10 AM PT / 1 PM CT / 6 PM CET), G2 vs Top Esports (11 AM PT / 1 PM CT / 7 PM CET), Movistar KOI vs DK (12 PM PT / 2 PM CT / 8 PM CET), Gen.G vs LYON (1 PM PT / 3 PM CT / 9 PM CET). Monday, October 26: CTBC Flying Oyster vs T1 (10 AM PT / 12 PM CT / 6 PM CET), Bilibili Gaming vs Karmine Corp (11 AM PT / 1 PM CT / 7 PM CET), LOS vs Team Secret Whales (12 PM PT / 2 PM CT / 8 PM CET), Team Liquid vs Anyone\'s Legend (1 PM PT / 3 PM CT / 9 PM CET). Stream live on lolesports.com.' }] },
        { type: 'p', children: [{ text: 'One question remains: who will be the next team to lock in Quarterfinals after Gen.G and DK if they win as expected? Tune in Sunday to find out.' }] },
      ],
    },
    {
      locale: 'es',
      slug: 'worlds-2026-swiss-round3-preview-es',
      title: 'Worlds 2026: Round 3, el Punto de Inflexion del Swiss. Gen.G vs LYON, DK vs Movistar',
      excerpt: 'El 25 y 26 de octubre, Round 3 corona a los primeros campeones. Gen.G se enfrenta a LYON en Bo3 para un lugar directo. DK defiende su marca invicta contra Movistar KOI. Los partidos imprescindibles.',
      newsType: 'international',
      newsSubtype: 'other',
      category: 'esports',
      tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'Gen.G' }, { tag: 'LYON' }, { tag: 'DK' }, { tag: 'Movistar KOI' }],
      sourceUrl: 'https://lolesports.com/en-US/leagues/worlds',
      content: [
        { type: 'p', children: [{ text: 'La tercera ronda del Swiss Stage de Worlds 2026 llega el 25 y 26 de octubre en Allen, Texas, y decidira las primeras clasificaciones directas a Cuartos de Final. Los equipos a 2-0 juegan al mejor de 3: una victoria y van directo, una derrota y tienen otra oportunidad. Los 1-1 y 0-2 luchan por sus vidas en el torneo.' }] },
        { type: 'h2', children: [{ text: 'Las Dos Semifinales Reales de Round 3' }] },
        { type: 'p', children: [{ text: 'Gen.G (LCK) se enfrenta a LYON (LCS #2) el domingo 25 de octubre a las 9 AM PT (18h CET) en al mejor de 3. Un choque entre regiones con ambos equipos a 2-0. LYON ya ha ganado dos veces en Worlds contra todo pronostico, es una historia de sorpresa genuina.' }] },
        { type: 'p', children: [{ text: 'Dplus KIA (LCK) enfrenta a Movistar KOI (LEC #2) el 25 de octubre a la 1 PM PT (23h CET). DK acaba de lograr una victoria epica contra T1 en Dragón Anciano, mientras que Movistar KOI es la última esperanza europea invicta a 2-0. Ganador va a Cuartos.' }] },
        { type: 'h2', children: [{ text: 'Los Enjuegos de 1-1: El Lunes Será Brutal' }] },
        { type: 'p', children: [{ text: 'T1 vuelve el domingo contra CTBC Flying Oyster, una ultima oportunidad después de perder contra DK. Hanwha Life Esports afronta Invictus Gaming, G2 Esports se cruzacon Top Esports, y Karmine Corp debe pasar Bilibili Gaming. Un solo juego, sin margen: 1-2 significa supervivencia, 0-2 significa eliminación.' }] },
        { type: 'h2', children: [{ text: 'Los Equipos a 0-2: Eliminación el 26 de Octubre' }] },
        { type: 'p', children: [{ text: 'Team Liquid y Anyone\'s Legend están contra la pared. LOS y Team Secret Whales también. Cuatro equipos, dos series al mejor de 3 el lunes: los perdedores se van a casa. Este es el momento decisivo de Worlds.' }] },
        { type: 'h2', children: [{ text: 'Calendario Completo del Round 3' }] },
        { type: 'p', children: [{ text: 'Domingo 25 de octubre: Hanwha Life vs Invictus Gaming (10 AM PT / 18h CET), G2 vs Top Esports (11 AM PT / 19h CET), Movistar KOI vs DK (12 PM PT / 20h CET), Gen.G vs LYON (1 PM PT / 21h CET). Lunes 26 de octubre: CTBC Flying Oyster vs T1 (10 AM PT / 18h CET), Bilibili Gaming vs Karmine Corp (11 AM PT / 19h CET), LOS vs Team Secret Whales (12 PM PT / 20h CET), Team Liquid vs Anyone\'s Legend (1 PM PT / 21h CET). Transmisión directa en lolesports.com.' }] },
        { type: 'p', children: [{ text: 'Una pregunta queda abierta: quien sera el proximo equipo en asegurar Cuartos después de Gen.G y DK si ganan como se espera? Sintoniza el domingo para descubrirlo.' }] },
      ],
    },
    {
      locale: 'de',
      slug: 'worlds-2026-swiss-round3-preview-de',
      title: 'Worlds 2026: Round 3, der Wendepunkt der Swiss Stage. Gen.G vs LYON, DK vs Movistar',
      excerpt: 'Am 25. und 26. Oktober krönt Round 3 die ersten Champions. Gen.G trifft auf LYON im Best-of-Three fur einen direkten Platz. DK verteidigt seinen makellosen Record gegen Movistar KOI. Die Topspiele.',
      newsType: 'international',
      newsSubtype: 'other',
      category: 'esports',
      tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'Gen.G' }, { tag: 'LYON' }, { tag: 'DK' }, { tag: 'Movistar KOI' }],
      sourceUrl: 'https://lolesports.com/en-US/leagues/worlds',
      content: [
        { type: 'p', children: [{ text: 'Round 3 der Swiss Stage der Worlds 2026 findet am 25. und 26. Oktober in Allen, Texas statt, und sie wird die ersten direkten Qualifikationen für das Viertelfinale bestimmen. Teams mit 2-0 spielen Best-of-Three: ein Sieg bringt direkt weiter, eine Niederlage gibt dir eine zweite Chance. Teams mit 1-1 und 0-2 kämpfen ums Überleben.' }] },
        { type: 'h2', children: [{ text: 'Die beiden faktischen Halbfinals von Round 3' }] },
        { type: 'p', children: [{ text: 'Gen.G (LCK) trifft LYON (LCS #2) am Sonntag, 25. Oktober um 9 Uhr PT (18 Uhr CET) in einem Best-of-Three. Ein Duell zwischen Regionen, beide Teams ungeschlagen bei 2-0. LYON hat bereits zweimal bei Worlds gegen alle Erwartungen gewonnen, eine echte Underdog-Geschichte.' }] },
        { type: 'p', children: [{ text: 'Dplus KIA (LCK) trifft auf Movistar KOI (LEC #2) auch am 25. Oktober um 13 Uhr PT (22 Uhr CET). DK hat gerade einen schockierenden Sieg über T1 beim Elder Dragon geschafft, während Movistar KOI die letzte europäische Hoffnung darstellt, die noch bei 2-0 steht. Der Gewinner geht ins Viertelfinale.' }] },
        { type: 'h2', children: [{ text: 'Die 1-1-Einsatze: Montag wird brutal' }] },
        { type: 'p', children: [{ text: 'T1 spielt am Sonntag gegen CTBC Flying Oyster, eine Chance, nach der Niederlage gegen DK zu uberleben. Hanwha Life Esports trifft auf Invictus Gaming, G2 Esports kreuzt mit Top Esports, und Karmine Corp muss an Bilibili Gaming vorbei. Ein Spiel, keine Toleranz: 1-2 bedeutet Uberleben, 0-2 bedeutet Ausscheiden.' }] },
        { type: 'h2', children: [{ text: 'Die 0-2-Teams: Elimination am 26. Oktober' }] },
        { type: 'p', children: [{ text: 'Team Liquid und Anyone\'s Legend sitzen in der Ecke. LOS und Team Secret Whales auch. Vier Teams, zwei Best-of-Three-Serien am Montag: Die Verlierer fliegen raus. Das ist der Wendepunkt bei Worlds.' }] },
        { type: 'h2', children: [{ text: 'Vollstandiger Round-3-Zeitplan' }] },
        { type: 'p', children: [{ text: 'Sonntag, 25. Oktober: Hanwha Life vs Invictus Gaming (10 Uhr PT / 18 Uhr CET), G2 vs Top Esports (11 Uhr PT / 19 Uhr CET), Movistar KOI vs DK (12 Uhr PT / 20 Uhr CET), Gen.G vs LYON (13 Uhr PT / 21 Uhr CET). Montag, 26. Oktober: CTBC Flying Oyster vs T1 (10 Uhr PT / 18 Uhr CET), Bilibili Gaming vs Karmine Corp (11 Uhr PT / 19 Uhr CET), LOS vs Team Secret Whales (12 Uhr PT / 20 Uhr CET), Team Liquid vs Anyone\'s Legend (13 Uhr PT / 21 Uhr CET). Live auf lolesports.com.' }] },
        { type: 'p', children: [{ text: 'Eine Frage bleibt offen: Wer wird das nächste Team sein, das sich Viertelfinale sichert, wenn Gen.G und DK wie erwartet gewinnen? Schalte am Sonntag ein, um es herauszufinden.' }] },
      ],
    },
    {
      locale: 'it',
      slug: 'worlds-2026-swiss-round3-preview-it',
      title: 'Worlds 2026: Round 3, la Svolta dello Swiss. Gen.G vs LYON, DK vs Movistar',
      excerpt: 'Il 25 e 26 ottobre, Round 3 incoronai primi campioni. Gen.G affronta LYON in Bo3 per un posto diretto. DK difende il suo record perfetto contro Movistar KOI. Le partite imprescindibili.',
      newsType: 'international',
      newsSubtype: 'other',
      category: 'esports',
      tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'Gen.G' }, { tag: 'LYON' }, { tag: 'DK' }, { tag: 'Movistar KOI' }],
      sourceUrl: 'https://lolesports.com/en-US/leagues/worlds',
      content: [
        { type: 'p', children: [{ text: 'La terza ronda dello Swiss Stage dei Worlds 2026 arriva il 25 e 26 ottobre ad Allen, Texas, e decidera le prime qualificazioni dirette ai Quarti di Finale. I team a 2-0 giocano al meglio di 3: una vittoria e vai diretto, una sconfitta e hai una seconda chance. I team a 1-1 e 0-2 lottano per le loro vite nel torneo.' }] },
        { type: 'h2', children: [{ text: 'Le Due Semifinali Reali di Round 3' }] },
        { type: 'p', children: [{ text: 'Gen.G (LCK) affronta LYON (LCS #2) domenica 25 ottobre alle 9 AM PT (18h CET) in una finale al meglio di 3. Uno scontro tra regioni con entrambi i team a 2-0. LYON ha già vinto due volte ai Worlds contro tutte le previsioni, una vera storia da underdog.' }] },
        { type: 'p', children: [{ text: 'Dplus KIA (LCK) affronta Movistar KOI (LEC #2) il 25 ottobre alle 13 PM PT (22h CET). DK ha appena ottenuto una vittoria schoccante contro T1 al Dragone Anziano, mentre Movistar KOI è l\'ultima speranza europea imbattuta a 2-0. Il vincitore va ai Quarti.' }] },
        { type: 'h2', children: [{ text: 'La Posta in Gioco dei 1-1: Lunedi Sarà Brutale' }] },
        { type: 'p', children: [{ text: 'T1 gioca domenica contro CTBC Flying Oyster, un\'ultima chance dopo la sconfitta contro DK. Hanwha Life Esports affronta Invictus Gaming, G2 Esports si incrocia con Top Esports, e Karmine Corp deve passare Bilibili Gaming. Una sola partita, nessun margine: 1-2 significa sopravvivenza, 0-2 significa eliminazione.' }] },
        { type: 'h2', children: [{ text: 'I Team a 0-2: Eliminazione il 26 Ottobre' }] },
        { type: 'p', children: [{ text: 'Team Liquid e Anyone\'s Legend sono spalle al muro. LOS e Team Secret Whales pure. Quattro team, due serie al meglio di 3 lunedi: i perdenti se ne vanno. Questo è il momento risolutivo di Worlds.' }] },
        { type: 'h2', children: [{ text: 'Calendario Completo del Round 3' }] },
        { type: 'p', children: [{ text: 'Domenica 25 ottobre: Hanwha Life vs Invictus Gaming (10 AM PT / 18h CET), G2 vs Top Esports (11 AM PT / 19h CET), Movistar KOI vs DK (12 PM PT / 20h CET), Gen.G vs LYON (13 PM PT / 21h CET). Lunedi 26 ottobre: CTBC Flying Oyster vs T1 (10 AM PT / 18h CET), Bilibili Gaming vs Karmine Corp (11 AM PT / 19h CET), LOS vs Team Secret Whales (12 PM PT / 20h CET), Team Liquid vs Anyone\'s Legend (13 PM PT / 21h CET). Diretta su lolesports.com.' }] },
        { type: 'p', children: [{ text: 'Una domanda rimane aperta: chi sarà il prossimo team a bloccarsi ai Quarti dopo Gen.G e DK se vinceranno come previsto? Sintonizzati domenica per scoprirlo.' }] },
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
          publishedAt: new Date('2026-10-25T05:00:00Z'),
        },
      })
    }
  }
}
