import type { MigrationModule } from './runner'

export const id = '210-worlds-2026-play-in-cloud9-eliminated'

export const description = 'Worlds 2026 Play-In: FURIA eliminates Cloud9 3-1 from tournament'

export const up: MigrationModule['up'] = async (payload) => {
  const baseSlug = 'worlds-2026-play-in-cloud9-eliminated'
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
      title = 'Worlds 2026 Play-In: FURIA élimine Cloud9 3-1'
      excerpt = 'FURIA a éliminé Cloud9 3-1 le 18 octobre, envoyant l\'équipe nord-américaine à domicile sans gagner une série au Play-In de Worlds 2026.'
      content = [
        {
          type: 'p',
          children: [
            {
              text: 'Le 18 octobre 2026, FURIA a écrasé Cloud9 3-1 en quarts de finale des Worlds 2026 Play-Ins. Cloud9 devient la première équipe éliminée du tournoi, terminant le dernier (19e place) sans remporter une seule série au Play-In.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Cloud9 impuissante face à FURIA',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Cloud9 a bien commencé la série en remportant le Game 1, marquant historiquement sa première victoire en esports professionnel face à FURIA. Cependant, l\'équipe nord-américaine n\'a pas pu capitaliser sur cet élan. FURIA a remporté les trois matchs suivants avec une cohésion impressionnante, laissant aucune chance à Cloud9 de revenir dans la série.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Le support de Cloud9, Philippe Vulcan Laflamme, a livré une critique sévère après l\'élimination, qualifiant la performance de pathétique. Le coach Christian IWillDominate Rivera a aussi accepté sa responsabilité, admettant avoir échoué à créer les conditions pour que l\'équipe se remette de sa défaite de la veille.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Ayu MVP de la série',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Andrey Ayu Saraiva, bot-laner de FURIA, a été nommé MVP de la série avec un KDA impressionnant de 18/6/19. FURIA affiche maintenant une série de 14 victoires consécutives en matchs internationaux après cette victoire décisive.',
            },
          ],
        },
      ]
      newsType = 'international'
      newsSubtype = 'resultats'
    } else if (locale === 'en') {
      title = 'Worlds 2026 Play-In: FURIA Eliminates Cloud9 3-1'
      excerpt = 'FURIA knocked Cloud9 out of Worlds 2026 with a dominant 3-1 victory on October 18, leaving the North American squad winless at the Play-In stage.'
      content = [
        {
          type: 'p',
          children: [
            {
              text: 'On October 18, 2026, FURIA crushed Cloud9 3-1 in the Worlds 2026 Play-In lower bracket round. Cloud9 becomes the first team eliminated from the tournament, finishing last (19th place) without securing a single series win at the Play-In stage.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Cloud9 powerless against FURIA surge',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Cloud9 started strong, taking Game 1 and marking their first professional esports victory over FURIA. However, the North American organization could not sustain momentum. FURIA won three straight games with impressive cohesion, shutting down any Cloud9 comeback attempt.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Cloud9 support Philippe Vulcan Laflamme delivered a scathing post-series assessment, calling the team pathetic. Head coach Christian IWillDominate Rivera accepted responsibility, citing his failure to build conditions for the team to recover from the previous day\'s loss.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Ayu earns series MVP honors',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Andrey Ayu Saraiva, FURIA\'s bot laner, claimed series MVP with an impressive 18/6/19 KDA. FURIA extends their international winning streak to 14 consecutive match victories with this dominant performance.',
            },
          ],
        },
      ]
      newsType = 'international'
      newsSubtype = 'resultats'
    } else if (locale === 'es') {
      title = 'Worlds 2026 Play-In: FURIA elimina a Cloud9 3-1'
      excerpt = 'FURIA derrotó a Cloud9 3-1 el 18 de octubre, eliminando al equipo norteamericano de Worlds 2026 sin que ganara una sola serie en el Play-In.'
      content = [
        {
          type: 'p',
          children: [
            {
              text: 'El 18 de octubre de 2026, FURIA aplastó a Cloud9 3-1 en la ronda de perdedores del Play-In de Worlds 2026. Cloud9 se convierte en el primer equipo eliminado del torneo, terminando en último lugar (19a posición) sin asegurar una sola victoria de series en el Play-In.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Cloud9 impotente ante FURIA',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Cloud9 comenzó fuerte ganando el Juego 1, marcando su primer triunfo en esports profesional contra FURIA. Sin embargo, el equipo norteamericano no pudo mantener el impulso. FURIA ganó tres juegos consecutivos con cohesión impresionante, dejando sin opciones a Cloud9 de regresar en la serie.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Philippe Vulcan Laflamme, support de Cloud9, ofreció una crítica severa tras la eliminación, calificando el desempeño como patético. El coach Christian IWillDominate Rivera también aceptó responsabilidad, reconociendo su fallo en crear condiciones para que el equipo se recuperara.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Ayu MVP de la serie',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Andrey Ayu Saraiva, bot laner de FURIA, fue nombrado MVP de la serie con un impresionante KDA de 18/6/19. FURIA extiende su racha internacional a 14 victorias consecutivas en partidos con esta actuación dominante.',
            },
          ],
        },
      ]
      newsType = 'international'
      newsSubtype = 'resultats'
    } else if (locale === 'de') {
      title = 'Worlds 2026 Play-In: FURIA eliminiert Cloud9 3-1'
      excerpt = 'FURIA besiegte Cloud9 3-1 am 18. Oktober und schickte das nordamerikanische Team nach Hause, ohne ein einziges Play-In-Spiel zu gewinnen.'
      content = [
        {
          type: 'p',
          children: [
            {
              text: 'Am 18. Oktober 2026 zerlegte FURIA Cloud9 im Worlds 2026 Play-In mit einem vernichtenden 3-1-Ergebnis. Cloud9 wird zum ersten Team, das aus dem Turnier ausscheidet und landet auf Platz 19, ohne auch nur eine Serie im Play-In zu gewinnen.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Cloud9 überwunden von FURIA',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Cloud9 startete stark und gewann Spiel 1, was ihren ersten professionellen Esports-Sieg über FURIA markierte. Das nordamerikanische Team konnte jedoch die Dynamik nicht halten. FURIA holte sich drei aufeinanderfolgende Spiele mit beeindruckender Kohäsion und ließ Cloud9 keine Chance auf ein Comeback.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Cloud9-Support Philippe Vulcan Laflamme äußerte nach der Elimination harsche Kritik und nannte die Leistung der Mannschaft erbärmlich. Trainer Christian IWillDominate Rivera übernahm ebenfalls Verantwortung und erkannte an, dass er die Bedingungen für die Mannschaft nicht geschaffen hatte, um sich von der Niederlage des Vortags zu erholen.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Ayu erhält Serien-MVP',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Andrey Ayu Saraiva, FURIAs Bot-Laner, erhielt die Serie MVP mit einem beeindruckenden 18/6/19-KDA. FURIA verlängert ihre internationale Siegesserie auf 14 aufeinanderfolgende Spiele mit dieser dominanten Leistung.',
            },
          ],
        },
      ]
      newsType = 'international'
      newsSubtype = 'resultats'
    } else if (locale === 'it') {
      title = 'Worlds 2026 Play-In: FURIA elimina Cloud9 3-1'
      excerpt = 'FURIA ha sconfitto Cloud9 3-1 il 18 ottobre, eliminando la squadra nordamericana da Worlds 2026 senza vincere una sola serie al Play-In.'
      content = [
        {
          type: 'p',
          children: [
            {
              text: 'Il 18 ottobre 2026, FURIA ha schiacciato Cloud9 3-1 nella fase di Play-In di Worlds 2026. Cloud9 diventa la prima squadra eliminata dal torneo, terminando in ultimo posto (19a posizione) senza assicurarsi nemmeno una vittoria di serie al Play-In.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Cloud9 impotente contro FURIA',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Cloud9 ha iniziato forte vincendo la Partita 1, segnando la loro prima vittoria negli esports professionali contro FURIA. Tuttavia, la squadra nordamericana non è riuscita a mantenere lo slancio. FURIA ha vinto tre partite consecutive con coesione impressionante, togliendo ogni speranza a Cloud9 di tornare in gioco.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Philippe Vulcan Laflamme, support di Cloud9, ha offerto una critica severa dopo l\'eliminazione, definendo la prestazione patetica. L\'allenatore Christian IWillDominate Rivera ha assunto la responsabilità, riconoscendo il suo fallimento nel creare le condizioni affinché la squadra si riprendesse dalla sconfitta del giorno precedente.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Ayu MVP della serie',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Andrey Ayu Saraiva, bot laner di FURIA, è stato nominato MVP della serie con un impressionante KDA di 18/6/19. FURIA estende la sua striscia di vittorie internazionali a 14 partite consecutive con questa prestazione dominante.',
            },
          ],
        },
      ]
      newsType = 'international'
      newsSubtype = 'resultats'
    }

    // Create the news document
    await payload.create({
      collection: 'news',
      data: {
        title,
        slug,
        excerpt,
        content,
        locale,
        status: 'published',
        newsType,
        newsSubtype,
        publishedAt: new Date('2026-10-18T18:00:00Z'),
        tags: ['Worlds', 'Play-In', 'FURIA', 'Cloud9', '2026', 'esports'],
        sourceUrl: 'https://www.esports.net/news/gaming/worlds-2026-play-in-cloud9-eliminated/',
      },
    })
  }
}
