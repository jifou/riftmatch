import type { MigrationModule } from './runner'

export const id = '208-worlds-play-in-day-1-2026'

export const description = 'Worlds 2026 Play-In Stage Day 1: Karmine Corp defeats Cloud9, MVK sweeps FURIA'

export const up: MigrationModule['up'] = async (payload) => {
  const baseSlug = 'worlds-2026-play-in-day-1'
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
      title = 'Worlds 2026 Play-In Jour 1: Karmine Corp élimine Cloud9, MVK écrase FURIA'
      excerpt = 'Le premier jour des Play-Ins a livré deux résultats tranchants: Karmine Corp a renversé Cloud9 3-2, tandis que MVK Esports écrase FURIA 3-0.'
      content = [
        {
          type: 'p',
          children: [
            {
              text: 'Le Championnat du Monde 2026 a commencé le 15 octobre avec un jour 1 des Play-Ins explosive au Riot Games Arena de Los Angeles. Deux matchs, deux histoires: un come-back épique et un démontage pur et simple.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Karmine Corp renverse Cloud9 dans un épique Silver Scrapes',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp a livré une performance mentale impressionnante face à Cloud9 KIA, revenant d\'un déficit 1-2 pour s\'imposer 3-2 en Best-of-5. Cloud9 a démarré en trombe avec une victoire dominante 20-1 au Game 1, puis a pris une avance 2-1 grâce au Jarvan IV de Blaber en Game 3.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Mais l\'équipe française a refusé de céder. Avec leurs Worlds hopes en jeu, Karmine Corp a égalisé au Game 4 avant de forcer un Game 5 décisif. En finale, Caliste a livré une performance de champion sur Xayah (11/1/3), guidant son équipe vers un retour inoubliable et une place en demi-finale supérieure du bracket.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'MVK Esports écrase FURIA 3-0: une démonstration de puissance',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Le second match du jour 1 a vu MVK Esports dominer complètement FURIA avec un sweep 3-0. Après un Game 1 relativement équilibré, les Vietnamiens ont pris contrôle au Game 2 avec un kill score décisif de 28-13.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Le Game 3 a scellé le sort de FURIA: MVK a terminé avec 13 000 d\'or d\'avance en seulement 27 minutes et 6 secondes. Võ Lê "Chika" Nhân a été l\'étincelle sur Kog\'Maw au Game 3 avec une ligne impressionnante de 7/2/10, prenant le contrôle des team fights et étouffant tout espoir de retour brésilien.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Et maintenant?',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp affrontera MVK Esports le 16 octobre en demi-finale supérieure. Le gagnant avancera directement au match de qualification finale du 18 octobre pour un spot aux Swiss Stage, tandis que le perdant rejoindra Cloud9 et FURIA dans le bracket inférieur. Cloud9 KIA et FURIA s\'affronteront également le 16 octobre, le perdant étant éliminé des Worlds 2026.',
            },
          ],
        },
      ]
      newsType = 'international'
      newsSubtype = 'resultats'
    } else if (locale === 'en') {
      title = 'Worlds 2026 Play-In Day 1: Karmine Corp Defeats Cloud9, MVK Sweeps FURIA'
      excerpt = 'The opening day of Worlds 2026 Play-Ins delivered stunning results: Karmine Corp stages a thrilling 3-2 comeback against Cloud9, while MVK Esports dominate FURIA 3-0.'
      content = [
        {
          type: 'p',
          children: [
            {
              text: 'The 2026 League of Legends World Championship kicked off on October 15 with a dramatic day one of Play-Ins at the Riot Games Arena in Los Angeles. Two matches, two stories: an epic comeback and a complete dismantling.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Karmine Corp Stages Epic Comeback Against Cloud9',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp demonstrated incredible mental fortitude, rallying from a 1-2 deficit to defeat Cloud9 KIA 3-2 in a thrilling Best-of-5. Cloud9 started strong with a dominant 20-1 victory in Game 1, and further extended their lead to 2-1 courtesy of Blaber\'s Jarvan IV dominance in Game 3.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'With their Worlds hopes on the line, the European squad refused to surrender. Karmine Corp equalized in Game 4 before forcing a decisive Game 5. In the finale, Caliste delivered a championship-level performance on Xayah (11/1/3), guiding his team to an unforgettable comeback and a spot in the upper bracket semifinals.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'MVK Esports Dominate FURIA with Flawless 3-0 Sweep',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'The second match of day one saw MVK Esports completely dismantle FURIA with a clean 3-0 sweep. After a relatively close Game 1, the Vietnamese squad seized control in Game 2 with an overwhelming kill score of 28-13.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Game 3 sealed FURIA\'s fate: MVK finished with a commanding 13,000 gold lead in just 27 minutes and 6 seconds. Võ Lê "Chika" Nhân was the standout performer on Kog\'Maw in Game 3, posting an impressive 7/2/10 KDA and dominating team fights to snuff out any Brazilian comeback hopes.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'What\'s Next',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp will face MVK Esports on October 16 in the upper bracket final. The winner advances directly to the qualifying match on October 18 for a Swiss Stage spot, while the loser joins Cloud9 and FURIA in the lower bracket. Cloud9 KIA and FURIA will also battle on October 16, with the loser being eliminated from Worlds 2026.',
            },
          ],
        },
      ]
      newsType = 'international'
      newsSubtype = 'resultats'
    } else if (locale === 'es') {
      title = 'Worlds 2026 Play-In Día 1: Karmine Corp Derrota a Cloud9, MVK Aniquila a FURIA'
      excerpt = 'El primer día de los Play-Ins de Worlds 2026 dejó resultados impactantes: Karmine Corp logró una épica remontada 3-2 contra Cloud9, mientras MVK Esports arrasó 3-0 a FURIA.'
      content = [
        {
          type: 'p',
          children: [
            {
              text: 'El Campeonato Mundial de League of Legends 2026 comenzó el 15 de octubre con un dramático primer día de Play-Ins en el Riot Games Arena de Los Ángeles. Dos partidos, dos historias: una remontada épica y un dominio completo.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Karmine Corp Logra Épica Remontada Ante Cloud9',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp demostró una fortaleza mental increíble, remontando desde un déficit 1-2 para derrotar a Cloud9 KIA 3-2 en un emocionante Best-of-5. Cloud9 comenzó dominante con una victoria aplastante 20-1 en el Juego 1, extendiendo su ventaja a 2-1 gracias al dominio de Jarvan IV de Blaber en el Juego 3.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Con sus esperanzas de Worlds en juego, el equipo europeo se negó a rendirse. Karmine Corp igualó en el Juego 4 antes de forzar un decisivo Juego 5. En la final, Caliste ofreció una actuación de campeón en Xayah (11/1/3), guiando a su equipo a una remontada inolvidable y a un lugar en las semifinales del bracket superior.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'MVK Esports Domina a FURIA con Impecable Barrida 3-0',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'El segundo partido del primer día vio a MVK Esports desmantelar completamente a FURIA con un limpio 3-0. Después de un Juego 1 relativamente cerrado, el equipo vietnamita tomó control en el Juego 2 con un marcador de kills abrumador de 28-13.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'El Juego 3 selló el destino de FURIA: MVK terminó con una ventaja de 13,000 de oro en solo 27 minutos y 6 segundos. Võ Lê "Chika" Nhân fue la estrella en Kog\'Maw en el Juego 3, con un impresionante KDA de 7/2/10 dominando team fights y sofocando cualquier esperanza de remontada brasileña.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Qué Sigue',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp enfrentará a MVK Esports el 16 de octubre en la final del bracket superior. El ganador avanza directamente al partido clasificatorio del 18 de octubre por un lugar en los Swiss Stage, mientras que el perdedor se une a Cloud9 y FURIA en el bracket inferior. Cloud9 KIA y FURIA también se enfrentarán el 16 de octubre, con el perdedor siendo eliminado de Worlds 2026.',
            },
          ],
        },
      ]
      newsType = 'international'
      newsSubtype = 'resultats'
    } else if (locale === 'de') {
      title = 'Worlds 2026 Play-In Tag 1: Karmine Corp besiegt Cloud9, MVK dominiert FURIA'
      excerpt = 'Der erste Tag der Worlds 2026 Play-Ins brachte spektakuläre Ergebnisse: Karmine Corp schafft ein episches Comeback 3-2 gegen Cloud9, während MVK Esports FURIA 3-0 demoliert.'
      content = [
        {
          type: 'p',
          children: [
            {
              text: 'Die League of Legends World Championship 2026 begann am 15. Oktober mit einem dramatischen ersten Tag der Play-Ins in der Riot Games Arena in Los Angeles. Zwei Spiele, zwei Geschichten: ein episches Comeback und eine komplette Dominanz.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Karmine Corp schafft Episches Comeback gegen Cloud9',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp zeigte unglaubliche mentale Stärke und holte sich aus einem 1-2 Defizit einen 3-2 Sieg gegen Cloud9 KIA in einem spannenden Best-of-5. Cloud9 startete stark mit einem dominanten 20-1 Sieg in Game 1 und baute ihren Vorsprung auf 2-1 aus, dank Blabers Jarvan IV Dominanz in Game 3.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Mit ihren Worlds-Hoffnungen auf dem Spiel, weigerte sich das europäische Team zu kapitulieren. Karmine Corp glich in Game 4 aus, bevor sie ein entscheidendes Game 5 erzwangen. Im Finale lieferte Caliste eine meisterhafte Leistung auf Xayah (11/1/3) ab, sein Team zu einem unvergesslichen Comeback zu führen und sich einen Platz in den oberen Halbfinals zu sichern.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'MVK Esports dominiert FURIA mit makelloser 3-0 Niederlage',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Das zweite Spiel des ersten Tages sah MVK Esports FURIA komplett zerlegen mit einem sauberen 3-0 Sweep. Nach einem relativ ausgeglichenen Game 1 übernahm das vietnamesische Team in Game 2 die Kontrolle mit einem überwältigenden Kill-Verhältnis von 28-13.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Game 3 besiegelte FURIAs Schicksal: MVK beendete mit einem beeindruckenden Gold-Vorsprung von 13.000 in nur 27 Minuten und 6 Sekunden. Võ Lê "Chika" Nhân war der Standout-Performer auf Kog\'Maw in Game 3, mit einem beeindruckenden KDA von 7/2/10, dominierte Team Fights und zunichte gemacht brasilianische Comeback-Hoffnungen.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Was kommt als Nächstes',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp trifft am 16. Oktober auf MVK Esports im oberen Bracket-Finale. Der Gewinner rückt direkt ins Qualifizierungsspiel am 18. Oktober für einen Swiss-Stage-Platz auf, während der Verlierer sich Cloud9 und FURIA im unteren Bracket anschließt. Cloud9 KIA und FURIA werden sich auch am 16. Oktober duellieren, wobei der Verlierer aus Worlds 2026 ausscheidet.',
            },
          ],
        },
      ]
      newsType = 'international'
      newsSubtype = 'resultats'
    } else if (locale === 'it') {
      title = 'Worlds 2026 Play-In Giorno 1: Karmine Corp Sconfigge Cloud9, MVK Annienta FURIA'
      excerpt = 'Il primo giorno dei Play-Ins di Worlds 2026 ha portato risultati sensazionali: Karmine Corp realizza un epico comeback 3-2 contro Cloud9, mentre MVK Esports schiaccia 3-0 FURIA.'
      content = [
        {
          type: 'p',
          children: [
            {
              text: 'Il Campionato Mondiale di League of Legends 2026 è iniziato il 15 ottobre con un primo giorno drammatico dei Play-Ins alla Riot Games Arena di Los Angeles. Due partite, due storie: un epico ritorno e un dominio totale.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Karmine Corp Realizza Epico Ritorno Contro Cloud9',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp ha dimostrato una forza mentale incredibile, tornando da un deficit 1-2 per sconfiggere Cloud9 KIA 3-2 in un Best-of-5 emozionante. Cloud9 è iniziato in grande stile con una vittoria dominante 20-1 al Game 1, estendendo il loro vantaggio a 2-1 grazie al dominio di Jarvan IV di Blaber al Game 3.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Con le loro speranze di Worlds in gioco, la squadra europea si è rifiutata di arrendersi. Karmine Corp ha pareggiato al Game 4 prima di forzare un decisivo Game 5. Nella finale, Caliste ha offerto una prestazione da campione su Xayah (11/1/3), guidando la sua squadra a un ritorno indimenticabile e a un posto nelle semifinali del bracket superiore.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'MVK Esports Domina FURIA con Impeccabile Sweepshot 3-0',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'La seconda partita del primo giorno ha visto MVK Esports smantellare completamente FURIA con uno sweep pulito 3-0. Dopo un Game 1 relativamente equilibrato, la squadra vietnamita ha preso il controllo al Game 2 con un punteggio di uccisioni schiacciante di 28-13.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Il Game 3 ha sigillato il destino di FURIA: MVK ha terminato con un vantaggio di oro impressionante di 13.000 in soli 27 minuti e 6 secondi. Võ Lê "Chika" Nhân è stato la stella su Kog\'Maw al Game 3, con un KDA impressionante di 7/2/10 dominando i team fight e soffocare qualsiasi speranza di ritorno brasiliana.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Cosa Succede Dopo',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp affronterà MVK Esports il 16 ottobre nella finale del bracket superiore. Il vincitore avanza direttamente alla partita di qualificazione del 18 ottobre per un posto nei Swiss Stage, mentre il perdente si unisce a Cloud9 e FURIA nel bracket inferiore. Cloud9 KIA e FURIA si affronteranno anche il 16 ottobre, con il perdente eliminato da Worlds 2026.',
            },
          ],
        },
      ]
      newsType = 'international'
      newsSubtype = 'resultats'
    }

    // Create news document
    await payload.create({
      collection: 'news',
      data: {
        slug,
        locale,
        status: 'published',
        title,
        excerpt,
        content,
        newsType,
        newsSubtype,
        publishedAt: new Date('2026-10-16T05:00:00Z'),
        sourceUrl: 'https://lolesports.com/en-US/tournament/115660540725177488/stage/115660540725570705',
      },
    })
    
    console.log(`Created news ${slug}`)
  }
}
