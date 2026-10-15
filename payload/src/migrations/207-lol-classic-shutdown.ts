import type { MigrationModule } from './runner'

export const id = '207-lol-classic-shutdown'

export const description = 'League Classic shutdown announcement for January 6, 2027'

export const up: MigrationModule['up'] = async (payload) => {
  const slug = 'lol-classic-shutdown-2027'

  // Check if already exists
  const existing = await payload.find({
    collection: 'news',
    where: { slug: { equals: slug + '-fr' } },
    limit: 1,
  })

  if (existing.docs.length > 0) {
    console.log(`News ${slug}-fr already exists, skipping`)
    return
  }

  const baseData = {
    newsType: 'riot',
    newsSubtype: 'other',
    category: 'update',
    status: 'published',
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/dev/dev-league-classic/',
    tags: [
      { tag: 'League Classic' },
      { tag: 'Game Mode' },
      { tag: 'League of Legends' },
      { tag: 'Riot' },
    ],
  }

  // French version
  await payload.create({
    collection: 'news',
    data: {
      ...baseData,
      locale: 'fr',
      slug: slug + '-fr',
      title: 'League Classic ferme ses portes le 6 janvier 2027',
      excerpt: 'Riot annonce la fermeture de League Classic. Le mode retro sera disponible jusqu\'au 6 janvier 2027, puis reviendra peut-etre sous forme d\'evenement special.',
      publishedAt: '2026-10-15T05:00:00.000Z',
      content: [
        {
          type: 'p',
          children: [
            {
              text: 'Riot Games a annonce le 14 octobre que League Classic, le mode retro du jeu, sera ferme le 6 janvier 2027. Le mode restera jouable pour le reste de la saison 3 avant cette fermeture.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Pourquoi cette fermeture ?' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Selon Meddler et Pabro de Riot Games, la majorite des joueurs sont retournes a d\'autres modes de League. Malgre un lancement reussi en juillet 2026 avec 60 champions, l\'interet a baisse avec le temps.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Remboursements prevus' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Riot remboursera le contenu cosmethique exclusif a League Classic en Points de Rioter (RP) dans les 30 jours suivant l\'annonce. La majorite des remboursements seront completes avant le 30 novembre 2026.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Derniers champions avant la fermeture' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Riot continuera d\'ajouter des champions jusqu\'au patch 26.23. Les champions prevus comprennent Mordekaiser, Yorick, Hecarim, Lucian, Volibear, Urgot et Udyr, choisis par les joueurs dans un sondage.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Un retour possible' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Riot espere ramener League Classic dans le futur, probablement sous la forme d\'un mode d\'evenement avec des ajustements et des ameliorations basees sur les retours des joueurs.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'A retenir' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'League Classic ferme ses portes le 6 janvier 2027, mais il restera jouable pour le reste de la saison 3. Les joueurs passionnes par les versions anciennes peuvent en profiter pendant les trois derniers mois avant la fermeture. D\'ici la, decouvre les champions actuels sur RiftMatch.',
            },
          ],
        },
      ],
    },
  })

  // English version
  await payload.create({
    collection: 'news',
    data: {
      ...baseData,
      locale: 'en',
      slug: slug + '-en',
      title: 'League Classic Closes Its Doors on January 6, 2027',
      excerpt: 'Riot announces League Classic shutdown. The retro game mode will remain playable through January 6, 2027, before potentially returning as a special event.',
      publishedAt: '2026-10-15T05:00:00.000Z',
      content: [
        {
          type: 'p',
          children: [
            {
              text: 'Riot Games announced on October 14 that League Classic, the game\'s retro mode, will shut down on January 6, 2027. The mode will remain playable for the rest of Season 3 before this closure.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Why the Shutdown?' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'According to Meddler and Pabro from Riot Games, most players have returned to other League modes. Despite a successful launch in July 2026 with 60 champions, player interest has declined over time.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Refunds Planned' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Riot will refund cosmetic content exclusive to League Classic in Riot Points (RP) within 30 days of the announcement. Most refunds will be completed by November 30, 2026.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Final Champions Before Closure' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Riot will continue adding champions through patch 26.23. Upcoming champions include Mordekaiser, Yorick, Hecarim, Lucian, Volibear, Urgot, and Udyr, selected by players in a poll.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'A Possible Return' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Riot hopes to bring back League Classic in the future, likely as an event mode with adjustments and improvements based on player feedback.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Key Takeaway' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'League Classic closes on January 6, 2027, but will remain playable for the rest of Season 3. Players passionate about older game versions can enjoy it for the final three months before shutdown. In the meantime, discover current champions on RiftMatch.',
            },
          ],
        },
      ],
    },
  })

  // Spanish version
  await payload.create({
    collection: 'news',
    data: {
      ...baseData,
      locale: 'es',
      slug: slug + '-es',
      title: 'League Classic Cierra sus Puertas el 6 de Enero de 2027',
      excerpt: 'Riot anuncia el cierre de League Classic. El modo retro estara disponible hasta el 6 de enero de 2027, antes de volver posiblemente como evento especial.',
      publishedAt: '2026-10-15T05:00:00.000Z',
      content: [
        {
          type: 'p',
          children: [
            {
              text: 'Riot Games anuncio el 14 de octubre que League Classic, el modo retro del juego, cerrara el 6 de enero de 2027. El modo seguira siendo jugable para el resto de la temporada 3 antes de este cierre.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Por que el cierre?' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Segun Meddler y Pabro de Riot Games, la mayoria de los jugadores han vuelto a otros modos de League. A pesar de un lanzamiento exitoso en julio de 2026 con 60 campeones, el interes de los jugadores ha disminuido con el tiempo.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Reembolsos Planeados' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Riot reembolsara el contenido cosmetico exclusivo de League Classic en Puntos de Riot (RP) dentro de 30 dias del anuncio. La mayoria de los reembolsos se completaran antes del 30 de noviembre de 2026.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Ultimos Campeones Antes del Cierre' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Riot continuara anadiendo campeones hasta el parche 26.23. Los proximos campeones incluyen Mordekaiser, Yorick, Hecarim, Lucian, Volibear, Urgot y Udyr, seleccionados por los jugadores en una encuesta.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Un Posible Regreso' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Riot espera traer de vuelta League Classic en el futuro, probablemente como modo de evento con ajustes y mejoras basadas en los comentarios de los jugadores.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Lo Esencial' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'League Classic cierra el 6 de enero de 2027, pero seguira siendo jugable para el resto de la temporada 3. Los jugadores apasionados por versiones antiguas pueden disfrutarlo durante los ultimos tres meses antes del cierre. Mientras tanto, descubre los campeones actuales en RiftMatch.',
            },
          ],
        },
      ],
    },
  })

  // German version
  await payload.create({
    collection: 'news',
    data: {
      ...baseData,
      locale: 'de',
      slug: slug + '-de',
      title: 'League Classic schliesst am 6. Januar 2027',
      excerpt: 'Riot gibt Abschaltung von League Classic bekannt. Der Retro-Modus bleibt bis 6. Januar 2027 verfügbar, bevor er möglicherweise als spezielle Event zurückkehrt.',
      publishedAt: '2026-10-15T05:00:00.000Z',
      content: [
        {
          type: 'p',
          children: [
            {
              text: 'Riot Games kündigte am 14. Oktober an, dass League Classic, der Retro-Modus des Spiels, am 6. Januar 2027 geschlossen wird. Der Modus bleibt für den Rest der Saison 3 spielbar, bevor diese Schließung erfolgt.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Warum die Schließung?' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Nach Meddler und Pabro von Riot Games sind die meisten Spieler zu anderen League-Modi zurückgekehrt. Trotz eines erfolgreichen Starts im Juli 2026 mit 60 Champions ist das Spielerinteresse im Laufe der Zeit gesunken.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Rückerstattungen geplant' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Riot wird kosmetische Inhalte, die exklusiv für League Classic sind, in Riot-Punkten (RP) innerhalb von 30 Tagen nach der Ankündigung erstatten. Die meisten Rückerstattungen werden vor dem 30. November 2026 abgeschlossen sein.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Letzte Champions vor Schließung' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Riot wird Champions bis Patch 26.23 weiterhin hinzufügen. Kommende Champions sind Mordekaiser, Yorick, Hecarim, Lucian, Volibear, Urgot und Udyr, ausgewählt von Spielern in einer Abstimmung.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Eine mögliche Rückkehr' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Riot hofft, League Classic in der Zukunft zurückzubringen, wahrscheinlich als Event-Modus mit Anpassungen und Verbesserungen basierend auf Spieler-Feedback.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Das Wichtigste' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'League Classic schliesst am 6. Januar 2027, bleibt aber für den Rest der Saison 3 spielbar. Spieler, die alte Spielversionen lieben, können es die letzten drei Monate vor der Schließung genießen. Entdecke in der Zwischenzeit aktuelle Champions auf RiftMatch.',
            },
          ],
        },
      ],
    },
  })

  // Italian version
  await payload.create({
    collection: 'news',
    data: {
      ...baseData,
      locale: 'it',
      slug: slug + '-it',
      title: 'League Classic Chiude il 6 Gennaio 2027',
      excerpt: 'Riot annuncia la chiusura di League Classic. Il modo retro rimarra disponibile fino al 6 gennaio 2027, prima di tornare possibilmente come evento speciale.',
      publishedAt: '2026-10-15T05:00:00.000Z',
      content: [
        {
          type: 'p',
          children: [
            {
              text: 'Riot Games ha annunciato il 14 ottobre che League Classic, il modo retrò del gioco, chiudera il 6 gennaio 2027. Il modo rimarra giocabile per il resto della stagione 3 prima di questa chiusura.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Perche la chiusura?' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Secondo Meddler e Pabro di Riot Games, la maggior parte dei giocatori è tornata ad altri modi di League. Nonostante il lancio di successo nel luglio 2026 con 60 campioni, l\'interesse dei giocatori è diminuito nel tempo.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Rimborsi Previsti' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Riot rimboersa i contenuti cosmetici esclusivi di League Classic in Punti Riot (RP) entro 30 giorni dall\'annuncio. La maggior parte dei rimborsi saranno completati entro il 30 novembre 2026.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Ultimi Campioni Prima della Chiusura' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Riot continuera ad aggiungere campioni fino alla patch 26.23. I prossimi campioni includono Mordekaiser, Yorick, Hecarim, Lucian, Volibear, Urgot e Udyr, selezionati dai giocatori in un sondaggio.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Un Possibile Ritorno' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Riot spera di riportare League Classic in futuro, probabilmente come modalita evento con aggiustamenti e miglioramenti basati su feedback dei giocatori.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Da Ricordare' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'League Classic chiude il 6 gennaio 2027, ma rimarra giocabile per il resto della stagione 3. I giocatori appassionati di versioni antiche possono goderlo per gli ultimi tre mesi prima della chiusura. Nel frattempo, scopri i campioni attuali su RiftMatch.',
            },
          ],
        },
      ],
    },
  })

  console.log(`League Classic shutdown news created for all 5 locales`)
}
