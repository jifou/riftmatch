import type { MigrationModule } from './runner'

export const id = '209-worlds-play-in-day-2-2026'

export const description = 'Worlds 2026 Play-In Stage Day 2: Karmine Corp crushes MVK 3-0, FURIA eliminates Cloud9 3-1'

export const up: MigrationModule['up'] = async (payload) => {
  const baseSlug = 'worlds-2026-play-in-day-2'
  const locales = ['fr', 'en', 'es', 'de', 'it']
  
  // Check if already published
  const existingFr = await payload.find({
    collection: 'news',
    where: { slug: { equals: `${baseSlug}-fr` } },
    limit: 1,
  })
  
  if (existingFr.docs.length > 0) {
    console.log(`News ${baseSlug} already exists, skipping`)
    return
  }

  // Create news in 5 languages
  for (const locale of locales) {
    const slug = `${baseSlug}-${locale}`
    
    let title, excerpt, content, newsType, newsSubtype

    if (locale === 'fr') {
      title = 'Worlds 2026 Play-In J2: Karmine Corp écrase MVK 3-0, FURIA élimine Cloud9'
      excerpt = 'Au jour 2 des Play-Ins, Karmine Corp a dominé MVK Esports 3-0 pour accéder à la finale. Pendant ce temps, FURIA a battu Cloud9 3-1 en Lower Bracket, éliminant l\'équipe nord-américaine.'
      content = [
        {
          type: 'p',
          children: [
            {
              text: 'Le jour 2 des Worlds 2026 Play-Ins a livré du LoL serré et des éliminations décisives au Riot Games Arena de Los Angeles. Les quatre équipes restantes se sont battues pour le dernier ticket vers le Swiss Stage.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Karmine Corp balance MVK 3-0: maîtrise totale en Upper Bracket',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp a livrée une masterclass contre MVK Esports, remportant la demi-finale Upper Bracket 3-0 le 16 octobre pour accéder directement à la finale des Play-Ins. L\'équipe française n\'a laissé aucune chance aux Vietnamiens, contrôlant tous les trois matchs avec une exécution impeccable.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Le Game 1 s\'est décidé sur une victoire de 30 minutes pour Karmine Corp, avec Jayce et Syndra dominant la laning phase. Au Game 2, KC a continué sur sa lancée avec une gestion de map remarquable, tandis que Twisted Fate de l\'équipe a facilité les rotations. Le Game 3 a scellé le destin de MVK: Karmine Corp a terminé avec 13 kills d\'avance en seulement 36 minutes, propulsant l\'équipe EMEA vers la finale du Play-In.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'FURIA élimine Cloud9 3-1: l\'Amérique du Nord tombe',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Cloud9 KIA a subi son destin en Lower Bracket Round 2, tombant 1-3 contre FURIA Esports le 16 octobre à 19h EDT. Cet revers élimine l\'équipe nord-américaine du Championnat du Monde 2026, une fin brutale pour un favori régional.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'FURIA a dominé les deux équipes avec des ganks timés et une vision supérieure. Ayu en Support a été le ciment de la victoire brésilienne, trouvant des engagements gagnants pour sortir Cloud9 du tournoi. Avec cette victoire, FURIA se rapproche de la finale des Play-Ins où l\'attend le vainqueur de KC vs TBD en demi-finale Lower Bracket.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Finale du Play-In à venir',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp affrontera le vainqueur de la demi-finale Lower Bracket (prévu pour le 18 octobre) pour le dernier ticket vers le Swiss Stage, qui débute le 23 octobre. Une équipe accédera directement au Swiss Stage, tandis que l\'autre sera éliminée des Worlds 2026.',
            },
          ],
        },
      ]
      newsType = 'international'
      newsSubtype = 'resultats'
    } else if (locale === 'en') {
      title = 'Worlds 2026 Play-In Day 2: Karmine Corp sweeps MVK 3-0, FURIA eliminates Cloud9'
      excerpt = 'On Play-In Day 2, Karmine Corp dominated MVK Esports 3-0 to reach the Play-In finals. Meanwhile, FURIA defeated Cloud9 3-1 in the Lower Bracket, eliminating the North American squad from Worlds 2026.'
      content = [
        {
          type: 'p',
          children: [
            {
              text: 'Play-In Day 2 of Worlds 2026 delivered dominant performances and shocking eliminations at the Riot Games Arena in Los Angeles. With only one Swiss Stage spot remaining, the pressure was on for all four remaining squads.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Karmine Corp sweeps MVK Esports 3-0: dominant Upper Bracket victory',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp delivered a flawless performance on October 16, sweeping MVK Esports 3-0 in the Upper Bracket finals to secure a spot in the Play-In finals. The European representatives showed no mercy, controlling all three games with exceptional macro play and team coordination.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Game 1 ended in 30 minutes with Karmine Corp\'s top and mid laners taking over early. Game 2 showcased KC\'s superior vision control and rotations, with Twisted Fate pick enabling constant pressure. By Game 3, MVK had nowhere to hide: Karmine Corp clinched the series in 36 minutes with a commanding 13-kill advantage, sending the EMEA representative straight to the finals.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'FURIA defeats Cloud9 3-1: NA hopes end in heartbreak',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Cloud9 KIA\'s Worlds 2026 campaign came to an end on October 16 at 19:00 EDT, falling 1-3 to FURIA Esports in the Lower Bracket Round 2. The North American side, expected to be a contender for the Swiss Stage, was dismantled by the Brazilian upset machine.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'FURIA\'s success came from aggressive jungle tracking and coordinated teamfight execution. Support player Ayu was the orchestrator of FURIA\'s victory, landing crucial picks that snowballed into series-clinching advantages. With this win, FURIA moves one step closer to the Play-In finals where they await their next opponent.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Path to Swiss Stage confirmed',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp will face the winner of the Lower Bracket semifinal (scheduled for October 18) for the final Swiss Stage qualification spot. The winner advances to the Swiss Stage starting October 23, while the loser is eliminated from Worlds 2026.',
            },
          ],
        },
      ]
      newsType = 'international'
      newsSubtype = 'resultats'
    } else if (locale === 'es') {
      title = 'Worlds 2026 Play-In Día 2: Karmine Corp arrolla 3-0 a MVK, FURIA elimina a Cloud9'
      excerpt = 'En el Día 2 de Play-Ins, Karmine Corp dominó a MVK Esports 3-0 para llegar a la final. Mientras tanto, FURIA venció a Cloud9 3-1 en el Lower Bracket, eliminando al equipo de Norteamérica de Worlds 2026.'
      content = [
        {
          type: 'p',
          children: [
            {
              text: 'El Día 2 de Play-Ins de Worlds 2026 fue testigo de actuaciones dominantes y eliminaciones impactantes en el Riot Games Arena de Los Angeles. Con un solo puesto en el Swiss Stage en juego, la presión fue total para los cuatro equipos restantes.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Karmine Corp barre MVK Esports 3-0: victoria contundente en Upper Bracket',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp desplegó un desempeño impecable el 16 de octubre, superando a MVK Esports 3-0 en las semifinales del Upper Bracket para asegurar un lugar en la final de Play-Ins. Los representantes europeos no dieron tregua, dominando todos los tres juegos con un macro impresionante y coordinación de equipo.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'El Juego 1 terminó en 30 minutos con los carriles superior y medio de Karmine Corp en control total. El Juego 2 mostró el dominio de visión y rotaciones de KC, con picks de Twisted Fate permitiendo presión constante. Para el Juego 3, MVK no tenía escapatoria: Karmine Corp cerró la serie en 36 minutos con una ventaja de 13 elimina, enviando al representante EMEA directamente a la final.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'FURIA vence a Cloud9 3-1: las esperanzas de NA llegan a su fin',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'La campaña de Cloud9 KIA en Worlds 2026 llegó a su fin el 16 de octubre a las 19:00 EDT, cayendo 1-3 ante FURIA Esports en la Ronda 2 del Lower Bracket. El equipo norteamericano, considerado contendiente para el Swiss Stage, fue desmantelado por la sorpresa brasileña.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'El éxito de FURIA provino del rastreo agresivo de jungla y la ejecución coordinada en team fights. El soporte Ayu fue el orquestador de la victoria de FURIA, logrando picks cruciales que se convirtieron en ventajas que cerraron la serie. Con esta victoria, FURIA se acerca un paso más a la final de Play-Ins.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Camino al Swiss Stage confirmado',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp enfrentará al ganador de la semifinal del Lower Bracket (programada para el 18 de octubre) por el último cupo del Swiss Stage. El ganador avanza al Swiss Stage que comienza el 23 de octubre, mientras que el perdedor es eliminado de Worlds 2026.',
            },
          ],
        },
      ]
      newsType = 'international'
      newsSubtype = 'resultats'
    } else if (locale === 'de') {
      title = 'Worlds 2026 Play-In Tag 2: Karmine Corp zerlegt MVK 3-0, FURIA eliminiert Cloud9'
      excerpt = 'Am Tag 2 der Play-Ins dominierte Karmine Corp MVK Esports 3-0, um das Play-In-Finale zu erreichen. Unterdessen besiegte FURIA Cloud9 3-1 in der Lower Bracket und eliminierte das nordamerikanische Team von Worlds 2026.'
      content = [
        {
          type: 'p',
          children: [
            {
              text: 'Tag 2 der Worlds 2026 Play-Ins brachte beeindruckende Leistungen und schockierende Eliminierungen in der Riot Games Arena in Los Angeles. Mit nur noch einem Swiss-Stage-Platz verfügbar lag der Druck auf allen vier verbleibenden Teams.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Karmine Corp zerlegt MVK Esports 3-0: dominanter Upper-Bracket-Sieg',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp lieferte am 16. Oktober eine makellose Leistung ab und besiegte MVK Esports 3-0 im Upper-Bracket-Finale, um sich einen Platz im Play-In-Finale zu sichern. Die europäischen Vertreter zeigten keine Gnade und kontrollierten alle drei Spiele mit außergewöhnlichem Makro-Spiel und Teamkoordination.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Spiel 1 endete nach 30 Minuten mit der Übernahme von Karmine Corps Top- und Mid-Lane. Spiel 2 zeigte KCs überlegene Vision Control und Rotationen, wobei Twisted Fate konstanten Druck ermöglichte. Bei Spiel 3 hatte MVK nirgends einen Ausweg: Karmine Corp besiegelte die Serie in 36 Minuten mit einem beeindruckenden 13er Vorteil bei Kills und schickte den EMEA-Vertreter direkt ins Finale.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'FURIA bezwingt Cloud9 3-1: Hoffnungen von NA enden im Herzschmerz',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Die Worlds-2026-Kampagne von Cloud9 KIA endete am 16. Oktober um 19:00 EDT, als das Team 1-3 gegen FURIA Esports in der Lower-Bracket-Runde 2 unterlag. Das nordamerikanische Team, von dem erwartet wurde, dass es um den Swiss-Stage-Platz kämpft, wurde von der brasilianischen Überraschungsmannschaft zerlegt.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'FURIAs Erfolg kam durch aggressives Jungle-Tracking und koordinierte Teamfight-Ausführung. Support-Spieler Ayu war der Orchestrator von FURIAs Sieg und landete entscheidende Picks, die sich in serien-klinchende Vorteile umwandelten. Mit diesem Sieg rückt FURIA einen Schritt näher an das Play-In-Finale.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Weg zur Swiss Stage bestätigt',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp trifft auf den Gewinner des Lower-Bracket-Halbfinales (angesetzt für 18. Oktober) um den finalen Swiss-Stage-Qualifikationsplatz. Der Sieger rückt in die Swiss Stage vor, die am 23. Oktober beginnt, während der Verlierer aus Worlds 2026 ausscheidet.',
            },
          ],
        },
      ]
      newsType = 'international'
      newsSubtype = 'resultats'
    } else if (locale === 'it') {
      title = 'Worlds 2026 Play-In Giorno 2: Karmine Corp travolge MVK 3-0, FURIA elimina Cloud9'
      excerpt = 'Nel Giorno 2 dei Play-Ins, Karmine Corp ha dominato MVK Esports 3-0 per raggiungere la finale. Nel frattempo, FURIA ha sconfitto Cloud9 3-1 nel Lower Bracket, eliminando la squadra nordamericana da Worlds 2026.'
      content = [
        {
          type: 'p',
          children: [
            {
              text: 'Il Giorno 2 dei Play-Ins di Worlds 2026 ha portato prestazioni dominanti e eliminazioni sorprendenti presso la Riot Games Arena di Los Angeles. Con un solo posto nello Swiss Stage disponibile, la pressione era massima per tutti e quattro i team rimasti.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Karmine Corp travolge MVK Esports 3-0: vittoria Upper Bracket netta',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp ha sfoggiato una prestazione impeccabile il 16 ottobre, travolgendo MVK Esports 3-0 nella finale dell\'Upper Bracket per assicurarsi un posto nella finale dei Play-Ins. I rappresentanti europei non hanno concesso tregua, controllando tutti e tre gli incontri con un macro gioco eccezionale e coordinazione di squadra.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'La Partita 1 è terminata in 30 minuti con il top e il mid di Karmine Corp in controllo totale. La Partita 2 ha mostrato il controllo visivo superiore di KC e le rotazioni, con il pick di Twisted Fate che ha permesso una pressione costante. Per la Partita 3, MVK non aveva scampo: Karmine Corp ha concluso la serie in 36 minuti con un vantaggio dominante di 13 uccisioni, mandando il rappresentante EMEA direttamente in finale.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'FURIA sconfigge Cloud9 3-1: le speranze del NA terminano tragicamente',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'La campagna di Cloud9 KIA a Worlds 2026 è terminata il 16 ottobre alle 19:00 EDT, cedendo 1-3 a FURIA Esports nel Round 2 del Lower Bracket. La squadra nordamericana, attesa come contendente per lo Swiss Stage, è stata smantellata dalla sorpresa brasiliana.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Il successo di FURIA è venuto dall\'aggressivo jungle tracking e dall\'esecuzione coordinata negli scontri di squadra. Il support Ayu è stato l\'orchestratore della vittoria di FURIA, piazzando pick cruciali che si sono trasformati in vantaggi decisivi. Con questa vittoria, FURIA si avvicina di un passo alla finale dei Play-Ins.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Percorso verso lo Swiss Stage confermato',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp affronterà il vincitore della semifinale del Lower Bracket (programmata per il 18 ottobre) per il posto finale di qualificazione dello Swiss Stage. Il vincitore avanza allo Swiss Stage che inizia il 23 ottobre, mentre il perdente è eliminato da Worlds 2026.',
            },
          ],
        },
      ]
      newsType = 'international'
      newsSubtype = 'resultats'
    }

    // Build the content array with proper structure
    const newsData = {
      title,
      slug,
      excerpt,
      status: 'published' as const,
      publishedAt: new Date('2026-10-16T23:00:00Z'),
      locale,
      content,
      newsType,
      newsSubtype,
      category: 'esports' as const,
      tags: ['worlds-2026', 'play-in', locale === 'fr' ? 'karmine-corp' : 'karmine-corp', locale === 'fr' ? 'mvk-esports' : 'mvk-esports', 'furia', 'cloud9', 'esports', '2026'],
    }

    try {
      const existingDoc = await payload.find({
        collection: 'news',
        where: { slug: { equals: slug } },
        limit: 1,
      })

      if (existingDoc.docs.length === 0) {
        await payload.create({
          collection: 'news',
          data: newsData,
        })
        console.log(`Created news: ${slug}`)
      }
    } catch (error) {
      console.error(`Error creating news ${slug}:`, error)
      throw error
    }
  }
}
