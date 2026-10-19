import type { MigrationModule } from './runner'

export const id = '209-worlds-2026-play-in-grand-final'

export const description = 'Worlds 2026 Play-In Grand Final: Karmine Corp defeats MVK 3-0'

export const up: MigrationModule['up'] = async (payload) => {
  const baseSlug = 'worlds-2026-play-in-grand-final'
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
      title = 'Worlds 2026 Play-In Final: Karmine Corp sweep MVK 3-0'
      excerpt = 'Le 18 octobre, Karmine Corp a remporté la finale des Play-Ins avec une masterclass 3-0 contre MVK Esports, se qualifiant pour le Swiss Stage qui débute le 23 octobre.'
      content = [
        {
          type: 'p',
          children: [
            {
              text: 'Le 18 octobre 2026, Karmine Corp a écrasé MVK Esports 3-0 en finale des Worlds 2026 Play-Ins au Riot Games Arena de Los Angeles. L\'équipe française a livré une performance impeccable pour assurer son passage au Swiss Stage et l\'élimination des représentants vietnamiens.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Karmine Corp écrase MVK: une finale sans suspense',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp a dominé MVK Esports de bout en bout, remportant tous les trois matchs avec une exécution impeccable. Les Français ont montré une maîtrise totale du macro-jeu et des teamfights, laissant aucune chance aux Vietnamiens de revenir dans la série.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Le Game 1 s\'est décidé en 28 minutes avec un avantage de 13 kills pour KC. Les Français ont continué sur leur lancée au Game 2 (27 minutes, victoire probante) et ont scellé la série au Game 3 en seulement 28 minutes. MVK n\'a jamais trouvé de solution contre la domination de KC, terminant la série avec un bilan catastrophique en kills et en contrôle de la map.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Qualification assurée pour le Swiss Stage',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Avec cette victoire décisive, Karmine Corp se qualifie directement pour le Swiss Stage de Worlds 2026, qui débute le 23 octobre à Allen, Texas. L\'équipe EMEA rejoint les 15 autres meilleures équipes du monde pour la prochaine étape du tournoi.',
            },
          ],
        },
      ]
      newsType = 'international'
      newsSubtype = 'resultats'
    } else if (locale === 'en') {
      title = 'Worlds 2026 Play-In Final: Karmine Corp Sweeps MVK 3-0'
      excerpt = 'On October 18, Karmine Corp delivered a flawless 3-0 victory over MVK Esports in the Play-In Grand Final, securing their spot in the Swiss Stage starting October 23.'
      content = [
        {
          type: 'p',
          children: [
            {
              text: 'On October 18, 2026, Karmine Corp crushed MVK Esports 3-0 in the Worlds 2026 Play-In Grand Final at the Riot Games Arena in Los Angeles. The French representatives delivered a masterclass performance to earn their Swiss Stage qualification and eliminate the Vietnamese challengers.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Karmine Corp dominates MVK: a one-sided final',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp left no doubt who belonged in the Swiss Stage, dismantling MVK Esports with perfect execution across all three games. The European squad demonstrated superior macro play, vision control, and team fight coordination throughout the series.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Game 1 ended in 28 minutes with Karmine Corp holding a 13-kill advantage. Game 2 saw KC maintain their dominance in just 27 minutes, showcasing flawless rotation and wave management. Game 3 was a formality: Karmine Corp closed out the series in 28 minutes, leaving MVK searching for answers they never found.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Karmine Corp advances to Swiss Stage',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'This victory secures Karmine Corp\'s place in the Swiss Stage of Worlds 2026, beginning October 23 in Allen, Texas. The team joins 15 other top squads from around the world as the tournament continues toward its climax.',
            },
          ],
        },
      ]
      newsType = 'international'
      newsSubtype = 'resultats'
    } else if (locale === 'es') {
      title = 'Final de Play-Ins Worlds 2026: Karmine Corp barre a MVK 3-0'
      excerpt = 'El 18 de octubre, Karmine Corp ejecutó una victoria impecable 3-0 contra MVK Esports en la Gran Final de Play-Ins, asegurando su lugar en la fase Swiss que comienza el 23 de octubre.'
      content = [
        {
          type: 'p',
          children: [
            {
              text: 'El 18 de octubre de 2026, Karmine Corp aplastó a MVK Esports 3-0 en la Gran Final de Play-Ins de Worlds 2026 en el Riot Games Arena de Los Ángeles. El equipo francés entregó una actuación de maestría para asegurar su clasificación a la fase Swiss y eliminar a los retadores vietnamitas.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Karmine Corp domina MVK: una final sin competencia',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp no dejó lugar a dudas sobre quién merecía avanzar, destruyendo a MVK Esports con ejecución perfecta en los tres juegos. El equipo europeo demostró juego de mapa superior, control de visión y coordinación de teamfights en toda la serie.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'El Juego 1 terminó en 28 minutos con Karmine Corp sosteniendo una ventaja de 13 asesinatos. El Juego 2 vio a KC mantener su dominio en apenas 27 minutos, mostrando rotaciones impecables y manejo de olas. El Juego 3 fue una formalidad: Karmine Corp cerró la serie en 28 minutos, dejando a MVK buscando respuestas que nunca encontraron.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Karmine Corp avanza a la fase Swiss',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Esta victoria asegura el lugar de Karmine Corp en la fase Swiss de Worlds 2026, comenzando el 23 de octubre en Allen, Texas. El equipo se une a otros 15 mejores escuadrones del mundo mientras el torneo continúa hacia su clímax.',
            },
          ],
        },
      ]
      newsType = 'international'
      newsSubtype = 'resultados'
    } else if (locale === 'de') {
      title = 'Worlds 2026 Play-In Final: Karmine Corp fegt MVK 3-0 hinweg'
      excerpt = 'Am 18. Oktober lieferte Karmine Corp einen makellosen 3-0-Sieg gegen MVK Esports im Play-In-Finale und sicherte sich ihren Platz in der Swiss Stage, die am 23. Oktober beginnt.'
      content = [
        {
          type: 'p',
          children: [
            {
              text: 'Am 18. Oktober 2026 zerschmetterte Karmine Corp MVK Esports 3-0 im Worlds 2026 Play-In-Finale in der Riot Games Arena in Los Angeles. Das französische Team lieferte eine Meisterleistung ab, um ihre Qualifikation für die Swiss Stage zu sichern und die vietnamesischen Challenger auszuschalten.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Karmine Corp dominiert MVK: ein einseitiges Finale',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp ließ keinen Zweifel daran, wer in die Swiss Stage gehörte, und zerstörte MVK Esports mit perfekter Ausführung über alle drei Spiele hinweg. Das europäische Team zeigte überlegendes Makro-Spiel, Sicht-Kontrolle und Team-Fight-Koordination in der gesamten Serie.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Spiel 1 endete nach 28 Minuten mit Karmine Corp mit 13 Abschüssen Vorsprung. Spiel 2 sah KC ihre Dominanz in nur 27 Minuten behaupten, mit makellosen Rotationen und Wellenmanagement. Spiel 3 war eine Formalität: Karmine Corp schloss die Serie nach 28 Minuten ab, wobei MVK nach Antworten suchte, die sie nie fanden.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Karmine Corp rückt in die Swiss Stage vor',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Dieser Sieg sichert Karmine Corps Platz in der Swiss Stage von Worlds 2026, die am 23. Oktober in Allen, Texas beginnt. Das Team gesellt sich zu 15 anderen Top-Teams aus der ganzen Welt, während das Turnier seinem Höhepunkt entgegeneilt.',
            },
          ],
        },
      ]
      newsType = 'international'
      newsSubtype = 'resultati'
    } else if (locale === 'it') {
      title = 'Mondiale 2026 Play-In Finale: Karmine Corp travolge MVK 3-0'
      excerpt = 'Il 18 ottobre, Karmine Corp ha consegnato una vittoria impeccabile 3-0 contro MVK Esports nella Grande Finale dei Play-In, assicurando il loro posto nella Fase Swiss a partire dal 23 ottobre.'
      content = [
        {
          type: 'p',
          children: [
            {
              text: 'Il 18 ottobre 2026, Karmine Corp ha schiacciato MVK Esports 3-0 nella Grande Finale dei Play-In di Worlds 2026 alla Riot Games Arena di Los Angeles. La squadra francese ha consegnato una prestazione magistrale per assicurare la qualificazione alla Fase Swiss e l\'eliminazione degli sfidanti vietnamiti.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Karmine Corp domina MVK: una finale unilaterale',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Karmine Corp non ha lasciato dubbi su chi meritasse di avanzare, annientando MVK Esports con un\'esecuzione perfetta in tutte e tre le partite. La squadra europea ha dimostrato un gioco di mappa superiore, controllo della visione e coordinamento dei teamfight in tutta la serie.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'La Partita 1 è terminata in 28 minuti con Karmine Corp che teneva un vantaggio di 13 uccisioni. La Partita 2 ha visto KC mantenere il suo dominio in soli 27 minuti, mostrando rotazioni impeccabili e gestione delle onde. La Partita 3 è stata una formalità: Karmine Corp ha chiuso la serie in 28 minuti, lasciando MVK a cercare risposte che non ha mai trovato.',
            },
          ],
        },
        {
          type: 'h2',
          children: [
            {
              text: 'Karmine Corp avanza alla Fase Swiss',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Questa vittoria assicura il posto di Karmine Corp nella Fase Swiss di Worlds 2026, che inizia il 23 ottobre ad Allen, Texas. La squadra si unisce ad altri 15 top team da tutto il mondo mentre il torneo continua verso il suo culmine.',
            },
          ],
        },
      ]
      newsType = 'international'
      newsSubtype = 'risultati'
    }

    try {
      const newsData = {
        title,
        excerpt,
        content,
        locale,
        slug,
        newsType,
        newsSubtype,
        status: 'published',
        publishedAt: new Date('2026-10-19T05:00:00Z'),
        tags: ['Worlds 2026', 'esports', locale === 'fr' ? 'KarmineCorp' : 'Karmine Corp', 'MVK'],
        _status: 'published',
      }

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
