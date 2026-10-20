import type { MigrationModule } from './runner'

export const id = '211-worlds-play-in-correctifs-et-suite'
export const description = 'Corrige la news du jour 1 du Play-In et publie jour 2, finale du tableau inferieur, finale et tirage du Swiss (5 langues). Remplace les migrations 209 et 210 en echec.'

const fixes: any[] = [
  {
    "slug": "worlds-2026-play-in-day-1-fr",
    "locale": "fr",
    "title": "Worlds 2026, Play-In jour 1 : Karmine Corp renverse Cloud9, MVK balaie FURIA",
    "excerpt": "Pour l'ouverture des Worlds 2026 à Los Angeles, Karmine Corp s'impose 3-2 face à Cloud9 après avoir été mené 2-1, et MVK Esports bat FURIA 3-0.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "Les Worlds 2026 ont débuté le 15 octobre au Riot Games Arena de Los Angeles avec le premier jour du Play-In. Quatre équipes y jouent un tableau à double élimination en Bo5 : Karmine Corp, Cloud9 KIA, MVK Esports et FURIA. Une seule rejoint le Swiss Stage."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Karmine Corp renverse Cloud9"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Cloud9 a pris le premier match puis mené 2-1 après le troisième. Karmine Corp a répondu lors des matchs 4 et 5 pour s'imposer 3-2 et rejoindre la finale du tableau supérieur."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "MVK Esports balaie FURIA"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Le représentant de la LCP a battu FURIA 3-0 et reste invaincu dans le tableau."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "La suite"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Le 16 octobre, Karmine Corp affronte MVK Esports en finale du tableau supérieur, tandis que Cloud9 et FURIA jouent un match d'élimination : le perdant quitte les Worlds. Le Swiss Stage débute le 23 octobre."
          }
        ]
      }
    ],
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Play-In"
      },
      {
        "tag": "Karmine Corp"
      },
      {
        "tag": "Cloud9"
      },
      {
        "tag": "MVK Esports"
      },
      {
        "tag": "FURIA"
      }
    ]
  },
  {
    "slug": "worlds-2026-play-in-day-1-en",
    "locale": "en",
    "title": "Worlds 2026 Play-In Day 1: Karmine Corp come back against Cloud9, MVK sweep FURIA",
    "excerpt": "In the opening day of Worlds 2026 in Los Angeles, Karmine Corp beat Cloud9 3-2 after trailing 2-1, and MVK Esports defeated FURIA 3-0.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "Worlds 2026 started on October 15 at the Riot Games Arena in Los Angeles with the first day of the Play-In. Four teams play a best-of-five double-elimination bracket: Karmine Corp, Cloud9 KIA, MVK Esports and FURIA. Only one reaches the Swiss Stage."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Karmine Corp come back against Cloud9"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Cloud9 took the first game and led 2-1 after the third. Karmine Corp answered in games 4 and 5 to win 3-2 and move into the upper bracket final."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "MVK Esports sweep FURIA"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "The LCP representative beat FURIA 3-0 and stays undefeated in the bracket."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "What comes next"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "On October 16, Karmine Corp face MVK Esports in the upper bracket final, while Cloud9 and FURIA play an elimination match: the loser leaves Worlds. The Swiss Stage starts on October 23."
          }
        ]
      }
    ],
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Play-In"
      },
      {
        "tag": "Karmine Corp"
      },
      {
        "tag": "Cloud9"
      },
      {
        "tag": "MVK Esports"
      },
      {
        "tag": "FURIA"
      }
    ]
  },
  {
    "slug": "worlds-2026-play-in-day-1-es",
    "locale": "es",
    "title": "Worlds 2026, Play-In día 1: Karmine Corp remonta a Cloud9 y MVK barre a FURIA",
    "excerpt": "En la apertura de los Worlds 2026 en Los Ángeles, Karmine Corp ganó 3-2 a Cloud9 tras ir perdiendo 2-1, y MVK Esports derrotó a FURIA 3-0.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "Los Worlds 2026 comenzaron el 15 de octubre en el Riot Games Arena de Los Ángeles con el primer día del Play-In. Cuatro equipos juegan un cuadro de doble eliminación al mejor de cinco: Karmine Corp, Cloud9 KIA, MVK Esports y FURIA. Solo uno pasa a la fase Swiss."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Karmine Corp remonta a Cloud9"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Cloud9 ganó la primera partida y se puso 2-1 tras la tercera. Karmine Corp respondió en las partidas 4 y 5 para ganar 3-2 y llegar a la final del cuadro superior."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "MVK Esports barre a FURIA"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "El representante de la LCP ganó 3-0 a FURIA y sigue invicto en el cuadro."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Lo que viene"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "El 16 de octubre, Karmine Corp se enfrenta a MVK Esports en la final del cuadro superior, mientras que Cloud9 y FURIA juegan un partido de eliminación: el perdedor se va de los Worlds. La fase Swiss empieza el 23 de octubre."
          }
        ]
      }
    ],
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Play-In"
      },
      {
        "tag": "Karmine Corp"
      },
      {
        "tag": "Cloud9"
      },
      {
        "tag": "MVK Esports"
      },
      {
        "tag": "FURIA"
      }
    ]
  },
  {
    "slug": "worlds-2026-play-in-day-1-de",
    "locale": "de",
    "title": "Worlds 2026 Play-In Tag 1: Karmine Corp dreht das Spiel gegen Cloud9, MVK fegt FURIA weg",
    "excerpt": "Zum Auftakt der Worlds 2026 in Los Angeles gewinnt Karmine Corp 3-2 gegen Cloud9 nach 1-2-Rückstand, und MVK Esports schlägt FURIA 3-0.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "Die Worlds 2026 begannen am 15. Oktober in der Riot Games Arena in Los Angeles mit dem ersten Tag des Play-In. Vier Teams spielen ein Double-Elimination-Bracket im Best of 5: Karmine Corp, Cloud9 KIA, MVK Esports und FURIA. Nur eines erreicht die Swiss Stage."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Karmine Corp dreht das Spiel gegen Cloud9"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Cloud9 gewann die erste Partie und führte nach der dritten mit 2-1. Karmine Corp antwortete in den Partien 4 und 5, gewann 3-2 und zog ins Finale des Upper Brackets ein."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "MVK Esports fegt FURIA weg"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Der Vertreter der LCP schlug FURIA 3-0 und bleibt im Bracket ungeschlagen."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Wie es weitergeht"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Am 16. Oktober trifft Karmine Corp im Upper-Bracket-Finale auf MVK Esports, während Cloud9 und FURIA ein Elimination-Match spielen: Der Verlierer scheidet aus den Worlds aus. Die Swiss Stage beginnt am 23. Oktober."
          }
        ]
      }
    ],
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Play-In"
      },
      {
        "tag": "Karmine Corp"
      },
      {
        "tag": "Cloud9"
      },
      {
        "tag": "MVK Esports"
      },
      {
        "tag": "FURIA"
      }
    ]
  },
  {
    "slug": "worlds-2026-play-in-day-1-it",
    "locale": "it",
    "title": "Worlds 2026, Play-In giorno 1: Karmine Corp rimonta Cloud9, MVK spazza via FURIA",
    "excerpt": "Nella giornata d'apertura dei Worlds 2026 a Los Angeles, Karmine Corp batte Cloud9 3-2 dopo essere stata sotto 2-1, e MVK Esports sconfigge FURIA 3-0.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "I Worlds 2026 sono iniziati il 15 ottobre al Riot Games Arena di Los Angeles con il primo giorno del Play-In. Quattro squadre giocano un tabellone a doppia eliminazione al meglio delle cinque: Karmine Corp, Cloud9 KIA, MVK Esports e FURIA. Solo una raggiunge la fase Swiss."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Karmine Corp rimonta Cloud9"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Cloud9 ha vinto la prima partita ed è passata avanti 2-1 dopo la terza. Karmine Corp ha risposto nelle partite 4 e 5 vincendo 3-2 e raggiungendo la finale del tabellone superiore."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "MVK Esports spazza via FURIA"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Il rappresentante della LCP ha battuto FURIA 3-0 e resta imbattuto nel tabellone."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Cosa succede ora"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Il 16 ottobre Karmine Corp affronta MVK Esports nella finale del tabellone superiore, mentre Cloud9 e FURIA giocano una partita di eliminazione: chi perde lascia i Worlds. La fase Swiss inizia il 23 ottobre."
          }
        ]
      }
    ],
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Play-In"
      },
      {
        "tag": "Karmine Corp"
      },
      {
        "tag": "Cloud9"
      },
      {
        "tag": "MVK Esports"
      },
      {
        "tag": "FURIA"
      }
    ]
  }
]

const docs: any[] = [
  {
    "slug": "worlds-2026-play-in-day-2-fr",
    "locale": "fr",
    "status": "published",
    "title": "Worlds 2026, Play-In jour 2 : Karmine Corp balaie MVK, FURIA élimine Cloud9",
    "excerpt": "Le 16 octobre, Karmine Corp bat MVK Esports 3-0 en finale du tableau supérieur et FURIA élimine Cloud9 3-1, première équipe sortie des Worlds 2026.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "Le deuxième jour du Play-In des Worlds 2026 s'est joué le 16 octobre à Los Angeles, avec deux séries en Bo5."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Karmine Corp balaie MVK Esports"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Karmine Corp s'impose 3-0 face à MVK Esports en finale du tableau supérieur, avec des scores de 9-4, 21-11 et 14-7 en kills. L'équipe se qualifie pour la finale du Play-In du 18 octobre."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "FURIA élimine Cloud9"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Cloud9 a pris le premier match (19-10 en kills), puis FURIA a enchaîné trois victoires (12-9, 14-6 et 16-7). Le mid laner Tutsz a fini 6/2/7 sur Viktor au match 3, et l'ADC Ayu 7/0/5 sur Miss Fortune au match 4. Cloud9 devient la première équipe éliminée de ces Worlds."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "La suite"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Le 17 octobre, FURIA affronte MVK Esports en finale du tableau inférieur. Le vainqueur retrouvera Karmine Corp le 18 pour la dernière place du Swiss Stage."
          }
        ]
      }
    ],
    "newsType": "international",
    "newsSubtype": "resultats",
    "category": "esports",
    "publishedAt": "2026-10-17T05:00:00.000Z",
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Play-In"
      },
      {
        "tag": "Karmine Corp"
      },
      {
        "tag": "FURIA"
      },
      {
        "tag": "Cloud9"
      },
      {
        "tag": "MVK Esports"
      }
    ],
    "sourceUrl": "https://www.strafe.com/news/read/worlds-2026-play-in-day-2-recap-furia-eliminates-cloud9-kc-sweeps-mvk/"
  },
  {
    "slug": "worlds-2026-play-in-day-2-en",
    "locale": "en",
    "status": "published",
    "title": "Worlds 2026 Play-In Day 2: Karmine Corp sweep MVK, FURIA eliminate Cloud9",
    "excerpt": "On October 16, Karmine Corp beat MVK Esports 3-0 in the upper bracket final and FURIA eliminated Cloud9 3-1, the first team out of Worlds 2026.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "The second day of the Worlds 2026 Play-In was played on October 16 in Los Angeles, with two best-of-five series."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Karmine Corp sweep MVK Esports"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Karmine Corp won 3-0 against MVK Esports in the upper bracket final, with kill scores of 9-4, 21-11 and 14-7. The team qualifies for the Play-In final on October 18."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "FURIA eliminate Cloud9"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Cloud9 took the first game (19-10 in kills), then FURIA won three straight (12-9, 14-6 and 16-7). Mid laner Tutsz finished 6/2/7 on Viktor in game 3, and ADC Ayu went 7/0/5 on Miss Fortune in game 4. Cloud9 become the first team eliminated from these Worlds."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "What comes next"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "On October 17, FURIA face MVK Esports in the lower bracket final. The winner meets Karmine Corp on October 18 for the last Swiss Stage spot."
          }
        ]
      }
    ],
    "newsType": "international",
    "newsSubtype": "resultats",
    "category": "esports",
    "publishedAt": "2026-10-17T05:00:00.000Z",
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Play-In"
      },
      {
        "tag": "Karmine Corp"
      },
      {
        "tag": "FURIA"
      },
      {
        "tag": "Cloud9"
      },
      {
        "tag": "MVK Esports"
      }
    ],
    "sourceUrl": "https://www.strafe.com/news/read/worlds-2026-play-in-day-2-recap-furia-eliminates-cloud9-kc-sweeps-mvk/"
  },
  {
    "slug": "worlds-2026-play-in-day-2-es",
    "locale": "es",
    "status": "published",
    "title": "Worlds 2026, Play-In día 2: Karmine Corp barre a MVK y FURIA elimina a Cloud9",
    "excerpt": "El 16 de octubre, Karmine Corp ganó 3-0 a MVK Esports en la final del cuadro superior y FURIA eliminó a Cloud9 3-1, el primer equipo fuera de los Worlds 2026.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "El segundo día del Play-In de los Worlds 2026 se jugó el 16 de octubre en Los Ángeles, con dos series al mejor de cinco."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Karmine Corp barre a MVK Esports"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Karmine Corp ganó 3-0 a MVK Esports en la final del cuadro superior, con marcadores de 9-4, 21-11 y 14-7 en kills. El equipo se clasifica para la final del Play-In del 18 de octubre."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "FURIA elimina a Cloud9"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Cloud9 ganó la primera partida (19-10 en kills) y después FURIA encadenó tres victorias (12-9, 14-6 y 16-7). El mid laner Tutsz terminó 6/2/7 con Viktor en la partida 3, y el ADC Ayu 7/0/5 con Miss Fortune en la 4. Cloud9 es el primer equipo eliminado de estos Worlds."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Lo que viene"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "El 17 de octubre, FURIA se enfrenta a MVK Esports en la final del cuadro inferior. El ganador se medirá a Karmine Corp el 18 por la última plaza de la fase Swiss."
          }
        ]
      }
    ],
    "newsType": "international",
    "newsSubtype": "resultats",
    "category": "esports",
    "publishedAt": "2026-10-17T05:00:00.000Z",
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Play-In"
      },
      {
        "tag": "Karmine Corp"
      },
      {
        "tag": "FURIA"
      },
      {
        "tag": "Cloud9"
      },
      {
        "tag": "MVK Esports"
      }
    ],
    "sourceUrl": "https://www.strafe.com/news/read/worlds-2026-play-in-day-2-recap-furia-eliminates-cloud9-kc-sweeps-mvk/"
  },
  {
    "slug": "worlds-2026-play-in-day-2-de",
    "locale": "de",
    "status": "published",
    "title": "Worlds 2026 Play-In Tag 2: Karmine Corp fegt MVK weg, FURIA eliminiert Cloud9",
    "excerpt": "Am 16. Oktober schlägt Karmine Corp MVK Esports 3-0 im Upper-Bracket-Finale, und FURIA eliminiert Cloud9 3-1, das erste ausgeschiedene Team der Worlds 2026.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "Der zweite Tag des Worlds-2026-Play-Ins wurde am 16. Oktober in Los Angeles gespielt, mit zwei Serien im Best of 5."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Karmine Corp fegt MVK Esports weg"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Karmine Corp gewann 3-0 gegen MVK Esports im Upper-Bracket-Finale, mit Kill-Ständen von 9-4, 21-11 und 14-7. Das Team qualifiziert sich für das Play-In-Finale am 18. Oktober."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "FURIA eliminiert Cloud9"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Cloud9 gewann die erste Partie (19-10 bei den Kills), danach gewann FURIA dreimal in Folge (12-9, 14-6 und 16-7). Midlaner Tutsz beendete Partie 3 mit 6/2/7 auf Viktor, ADC Ayu Partie 4 mit 7/0/5 auf Miss Fortune. Cloud9 ist das erste ausgeschiedene Team dieser Worlds."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Wie es weitergeht"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Am 17. Oktober trifft FURIA im Lower-Bracket-Finale auf MVK Esports. Der Sieger trifft am 18. Oktober auf Karmine Corp um den letzten Platz in der Swiss Stage."
          }
        ]
      }
    ],
    "newsType": "international",
    "newsSubtype": "resultats",
    "category": "esports",
    "publishedAt": "2026-10-17T05:00:00.000Z",
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Play-In"
      },
      {
        "tag": "Karmine Corp"
      },
      {
        "tag": "FURIA"
      },
      {
        "tag": "Cloud9"
      },
      {
        "tag": "MVK Esports"
      }
    ],
    "sourceUrl": "https://www.strafe.com/news/read/worlds-2026-play-in-day-2-recap-furia-eliminates-cloud9-kc-sweeps-mvk/"
  },
  {
    "slug": "worlds-2026-play-in-day-2-it",
    "locale": "it",
    "status": "published",
    "title": "Worlds 2026, Play-In giorno 2: Karmine Corp spazza via MVK, FURIA elimina Cloud9",
    "excerpt": "Il 16 ottobre Karmine Corp batte MVK Esports 3-0 nella finale del tabellone superiore e FURIA elimina Cloud9 3-1, prima squadra fuori dai Worlds 2026.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "Il secondo giorno del Play-In dei Worlds 2026 si è giocato il 16 ottobre a Los Angeles, con due serie al meglio delle cinque."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Karmine Corp spazza via MVK Esports"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Karmine Corp ha vinto 3-0 contro MVK Esports nella finale del tabellone superiore, con punteggi di 9-4, 21-11 e 14-7 nelle kill. La squadra si qualifica per la finale del Play-In del 18 ottobre."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "FURIA elimina Cloud9"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Cloud9 ha vinto la prima partita (19-10 nelle kill), poi FURIA ha infilato tre vittorie (12-9, 14-6 e 16-7). Il mid laner Tutsz ha chiuso 6/2/7 con Viktor nella partita 3 e l'ADC Ayu 7/0/5 con Miss Fortune nella 4. Cloud9 è la prima squadra eliminata da questi Worlds."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Cosa succede ora"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Il 17 ottobre FURIA affronta MVK Esports nella finale del tabellone inferiore. Chi vince incontra Karmine Corp il 18 per l'ultimo posto nella fase Swiss."
          }
        ]
      }
    ],
    "newsType": "international",
    "newsSubtype": "resultats",
    "category": "esports",
    "publishedAt": "2026-10-17T05:00:00.000Z",
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Play-In"
      },
      {
        "tag": "Karmine Corp"
      },
      {
        "tag": "FURIA"
      },
      {
        "tag": "Cloud9"
      },
      {
        "tag": "MVK Esports"
      }
    ],
    "sourceUrl": "https://www.strafe.com/news/read/worlds-2026-play-in-day-2-recap-furia-eliminates-cloud9-kc-sweeps-mvk/"
  },
  {
    "slug": "worlds-2026-play-in-lower-final-fr",
    "locale": "fr",
    "status": "published",
    "title": "Worlds 2026 Play-In : MVK élimine FURIA 3-1 et retrouve Karmine Corp en finale",
    "excerpt": "Le 17 octobre, MVK Esports bat FURIA 3-1 en finale du tableau inférieur et obtient une revanche contre Karmine Corp pour la dernière place du Swiss Stage.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "MVK Esports a battu FURIA 3-1 le 17 octobre au Riot Games Arena de Los Angeles, en finale du tableau inférieur du Play-In des Worlds 2026. FURIA est éliminé, et MVK jouera la finale du Play-In contre Karmine Corp le 18 octobre."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Le déroulé de la série"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "MVK a pris les deux premiers matchs. FURIA a réagi au match 3 en gagnant la voie du bas, avec Ayu sur Miss Fortune, pour réduire l'écart. MVK a conclu au match 4, où le jungler Gury, sur Wukong, a mené un dive sur la voie du bas."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "La suite"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "C'est la deuxième victoire de MVK sur FURIA dans ce tournoi, après le 3-0 du premier jour. Karmine Corp avait battu MVK 3-0 en finale du tableau supérieur : MVK jouera donc sa revanche le 18 octobre, avec la dernière place du Swiss Stage en jeu."
          }
        ]
      }
    ],
    "newsType": "international",
    "newsSubtype": "resultats",
    "category": "esports",
    "publishedAt": "2026-10-18T05:00:00.000Z",
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Play-In"
      },
      {
        "tag": "MVK Esports"
      },
      {
        "tag": "FURIA"
      },
      {
        "tag": "Karmine Corp"
      }
    ],
    "sourceUrl": "https://stevivor.com/news/mvk-esports-beat-furia-3-1-at-worlds-2026-and-book-a-play-in-final/"
  },
  {
    "slug": "worlds-2026-play-in-lower-final-en",
    "locale": "en",
    "status": "published",
    "title": "Worlds 2026 Play-In: MVK eliminate FURIA 3-1 and set up a Karmine Corp final",
    "excerpt": "On October 17, MVK Esports beat FURIA 3-1 in the lower bracket final and earned a rematch against Karmine Corp for the last Swiss Stage spot.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "MVK Esports beat FURIA 3-1 on October 17 at the Riot Games Arena in Los Angeles, in the lower bracket final of the Worlds 2026 Play-In. FURIA are eliminated, and MVK will play the Play-In final against Karmine Corp on October 18."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "How the series went"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "MVK took the first two games. FURIA responded in game 3 by winning the bot lane, with Ayu on Miss Fortune, to cut the deficit. MVK closed it out in game 4, where jungler Gury, on Wukong, led a dive on the bot lane."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "What comes next"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "It is MVK's second win over FURIA at this event, after the 3-0 on day one. Karmine Corp had beaten MVK 3-0 in the upper bracket final, so MVK get their rematch on October 18 with the last Swiss Stage spot at stake."
          }
        ]
      }
    ],
    "newsType": "international",
    "newsSubtype": "resultats",
    "category": "esports",
    "publishedAt": "2026-10-18T05:00:00.000Z",
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Play-In"
      },
      {
        "tag": "MVK Esports"
      },
      {
        "tag": "FURIA"
      },
      {
        "tag": "Karmine Corp"
      }
    ],
    "sourceUrl": "https://stevivor.com/news/mvk-esports-beat-furia-3-1-at-worlds-2026-and-book-a-play-in-final/"
  },
  {
    "slug": "worlds-2026-play-in-lower-final-es",
    "locale": "es",
    "status": "published",
    "title": "Worlds 2026 Play-In: MVK elimina a FURIA 3-1 y se medirá a Karmine Corp en la final",
    "excerpt": "El 17 de octubre, MVK Esports ganó 3-1 a FURIA en la final del cuadro inferior y tendrá la revancha contra Karmine Corp por la última plaza de la fase Swiss.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "MVK Esports ganó 3-1 a FURIA el 17 de octubre en el Riot Games Arena de Los Ángeles, en la final del cuadro inferior del Play-In de los Worlds 2026. FURIA queda eliminado y MVK jugará la final del Play-In contra Karmine Corp el 18 de octubre."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Cómo fue la serie"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "MVK ganó las dos primeras partidas. FURIA reaccionó en la tercera ganando la línea inferior, con Ayu en Miss Fortune, para recortar distancias. MVK cerró en la cuarta, donde el jungler Gury, con Wukong, lideró una inmersión en la línea inferior."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Lo que viene"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Es la segunda victoria de MVK sobre FURIA en este torneo, tras el 3-0 del primer día. Karmine Corp había ganado 3-0 a MVK en la final del cuadro superior, así que MVK tendrá su revancha el 18 de octubre con la última plaza de la fase Swiss en juego."
          }
        ]
      }
    ],
    "newsType": "international",
    "newsSubtype": "resultats",
    "category": "esports",
    "publishedAt": "2026-10-18T05:00:00.000Z",
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Play-In"
      },
      {
        "tag": "MVK Esports"
      },
      {
        "tag": "FURIA"
      },
      {
        "tag": "Karmine Corp"
      }
    ],
    "sourceUrl": "https://stevivor.com/news/mvk-esports-beat-furia-3-1-at-worlds-2026-and-book-a-play-in-final/"
  },
  {
    "slug": "worlds-2026-play-in-lower-final-de",
    "locale": "de",
    "status": "published",
    "title": "Worlds 2026 Play-In: MVK eliminiert FURIA 3-1 und trifft im Finale auf Karmine Corp",
    "excerpt": "Am 17. Oktober schlägt MVK Esports FURIA 3-1 im Lower-Bracket-Finale und bekommt eine Revanche gegen Karmine Corp um den letzten Platz der Swiss Stage.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "MVK Esports schlug FURIA am 17. Oktober in der Riot Games Arena in Los Angeles mit 3-1, im Lower-Bracket-Finale des Worlds-2026-Play-Ins. FURIA ist ausgeschieden, und MVK spielt am 18. Oktober das Play-In-Finale gegen Karmine Corp."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Der Verlauf der Serie"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "MVK gewann die ersten beiden Partien. FURIA reagierte in Partie 3, gewann die Botlane mit Ayu auf Miss Fortune und verkürzte. MVK entschied Partie 4 für sich, in der Jungler Gury auf Wukong einen Dive auf die Botlane anführte."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Wie es weitergeht"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Es ist der zweite Sieg von MVK gegen FURIA bei diesem Turnier, nach dem 3-0 am ersten Tag. Karmine Corp hatte MVK im Upper-Bracket-Finale 3-0 geschlagen, daher bekommt MVK am 18. Oktober seine Revanche, mit dem letzten Platz der Swiss Stage als Preis."
          }
        ]
      }
    ],
    "newsType": "international",
    "newsSubtype": "resultats",
    "category": "esports",
    "publishedAt": "2026-10-18T05:00:00.000Z",
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Play-In"
      },
      {
        "tag": "MVK Esports"
      },
      {
        "tag": "FURIA"
      },
      {
        "tag": "Karmine Corp"
      }
    ],
    "sourceUrl": "https://stevivor.com/news/mvk-esports-beat-furia-3-1-at-worlds-2026-and-book-a-play-in-final/"
  },
  {
    "slug": "worlds-2026-play-in-lower-final-it",
    "locale": "it",
    "status": "published",
    "title": "Worlds 2026 Play-In: MVK elimina FURIA 3-1 e ritrova Karmine Corp in finale",
    "excerpt": "Il 17 ottobre MVK Esports batte FURIA 3-1 nella finale del tabellone inferiore e ottiene la rivincita contro Karmine Corp per l'ultimo posto nella fase Swiss.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "MVK Esports ha battuto FURIA 3-1 il 17 ottobre al Riot Games Arena di Los Angeles, nella finale del tabellone inferiore del Play-In dei Worlds 2026. FURIA è eliminata e MVK giocherà la finale del Play-In contro Karmine Corp il 18 ottobre."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Com'è andata la serie"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "MVK ha vinto le prime due partite. FURIA ha reagito nella terza vincendo la bot lane, con Ayu su Miss Fortune, per ridurre il distacco. MVK ha chiuso nella quarta, dove il jungler Gury, su Wukong, ha guidato un dive sulla bot lane."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Cosa succede ora"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "È la seconda vittoria di MVK su FURIA in questo torneo, dopo il 3-0 del primo giorno. Karmine Corp aveva battuto MVK 3-0 nella finale del tabellone superiore, quindi MVK avrà la sua rivincita il 18 ottobre con l'ultimo posto nella fase Swiss in palio."
          }
        ]
      }
    ],
    "newsType": "international",
    "newsSubtype": "resultats",
    "category": "esports",
    "publishedAt": "2026-10-18T05:00:00.000Z",
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Play-In"
      },
      {
        "tag": "MVK Esports"
      },
      {
        "tag": "FURIA"
      },
      {
        "tag": "Karmine Corp"
      }
    ],
    "sourceUrl": "https://stevivor.com/news/mvk-esports-beat-furia-3-1-at-worlds-2026-and-book-a-play-in-final/"
  },
  {
    "slug": "worlds-2026-play-in-final-fr",
    "locale": "fr",
    "status": "published",
    "title": "Worlds 2026 : Karmine Corp balaie MVK 3-0 et se qualifie pour le Swiss Stage",
    "excerpt": "Le 18 octobre, Karmine Corp bat MVK Esports 3-0 en finale du Play-In et décroche la dernière place du Swiss Stage des Worlds 2026.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "Karmine Corp a battu MVK Esports 3-0 le 18 octobre en finale du Play-In des Worlds 2026 et obtient la dernière place du Swiss Stage. Le tableau à 16 équipes est désormais complet."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Un Play-In sans défaite de série"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Troisième tête de série de la LEC, Karmine Corp a gagné ses trois séries : 3-2 contre Cloud9 le 15 octobre, puis deux fois 3-0 contre MVK Esports, en finale du tableau supérieur le 16 et en finale du Play-In le 18. Sur l'ensemble du Play-In, l'équipe affiche 9 victoires et 2 défaites en matchs."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Une première pour l'organisation"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Karmine Corp rejoint le Swiss Stage pour la première fois de son histoire. Cloud9, FURIA et MVK Esports sont éliminés des Worlds 2026."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "La suite"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Le Swiss Stage débute le 23 octobre à Allen, au Texas."
          }
        ]
      }
    ],
    "newsType": "international",
    "newsSubtype": "resultats",
    "category": "esports",
    "publishedAt": "2026-10-19T05:00:00.000Z",
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Play-In"
      },
      {
        "tag": "Karmine Corp"
      },
      {
        "tag": "MVK Esports"
      },
      {
        "tag": "Swiss Stage"
      }
    ],
    "sourceUrl": "https://www.strafe.com/news/read/karmine-corp-sweep-mvk-to-claim-final-worlds-2026-swiss-stage-spot/"
  },
  {
    "slug": "worlds-2026-play-in-final-en",
    "locale": "en",
    "status": "published",
    "title": "Worlds 2026: Karmine Corp sweep MVK 3-0 and qualify for the Swiss Stage",
    "excerpt": "On October 18, Karmine Corp beat MVK Esports 3-0 in the Play-In final and took the last Swiss Stage spot at Worlds 2026.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "Karmine Corp beat MVK Esports 3-0 on October 18 in the Worlds 2026 Play-In final and claimed the last Swiss Stage spot. The 16-team field is now complete."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "A Play-In without a series loss"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "The LEC's third seed won all three of its series: 3-2 against Cloud9 on October 15, then 3-0 twice against MVK Esports, in the upper bracket final on the 16th and in the Play-In final on the 18th. Across the Play-In, the team posted a 9-2 record in games."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "A first for the organization"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Karmine Corp reach the Swiss Stage for the first time in their history. Cloud9, FURIA and MVK Esports are eliminated from Worlds 2026."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "What comes next"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "The Swiss Stage starts on October 23 in Allen, Texas."
          }
        ]
      }
    ],
    "newsType": "international",
    "newsSubtype": "resultats",
    "category": "esports",
    "publishedAt": "2026-10-19T05:00:00.000Z",
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Play-In"
      },
      {
        "tag": "Karmine Corp"
      },
      {
        "tag": "MVK Esports"
      },
      {
        "tag": "Swiss Stage"
      }
    ],
    "sourceUrl": "https://www.strafe.com/news/read/karmine-corp-sweep-mvk-to-claim-final-worlds-2026-swiss-stage-spot/"
  },
  {
    "slug": "worlds-2026-play-in-final-es",
    "locale": "es",
    "status": "published",
    "title": "Worlds 2026: Karmine Corp barre a MVK 3-0 y se clasifica para la fase Swiss",
    "excerpt": "El 18 de octubre, Karmine Corp ganó 3-0 a MVK Esports en la final del Play-In y se llevó la última plaza de la fase Swiss de los Worlds 2026.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "Karmine Corp ganó 3-0 a MVK Esports el 18 de octubre en la final del Play-In de los Worlds 2026 y se queda con la última plaza de la fase Swiss. El cuadro de 16 equipos ya está completo."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Un Play-In sin perder ninguna serie"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "La tercera cabeza de serie de la LEC ganó sus tres series: 3-2 contra Cloud9 el 15 de octubre y después dos veces 3-0 contra MVK Esports, en la final del cuadro superior el 16 y en la final del Play-In el 18. En todo el Play-In, el equipo suma 9 victorias y 2 derrotas en partidas."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Una primera vez para la organización"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Karmine Corp llega a la fase Swiss por primera vez en su historia. Cloud9, FURIA y MVK Esports quedan eliminados de los Worlds 2026."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Lo que viene"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "La fase Swiss empieza el 23 de octubre en Allen, Texas."
          }
        ]
      }
    ],
    "newsType": "international",
    "newsSubtype": "resultats",
    "category": "esports",
    "publishedAt": "2026-10-19T05:00:00.000Z",
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Play-In"
      },
      {
        "tag": "Karmine Corp"
      },
      {
        "tag": "MVK Esports"
      },
      {
        "tag": "Swiss Stage"
      }
    ],
    "sourceUrl": "https://www.strafe.com/news/read/karmine-corp-sweep-mvk-to-claim-final-worlds-2026-swiss-stage-spot/"
  },
  {
    "slug": "worlds-2026-play-in-final-de",
    "locale": "de",
    "status": "published",
    "title": "Worlds 2026: Karmine Corp fegt MVK 3-0 weg und erreicht die Swiss Stage",
    "excerpt": "Am 18. Oktober schlägt Karmine Corp MVK Esports 3-0 im Play-In-Finale und sichert sich den letzten Platz der Swiss Stage der Worlds 2026.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "Karmine Corp schlug MVK Esports am 18. Oktober im Play-In-Finale der Worlds 2026 mit 3-0 und sicherte sich den letzten Platz der Swiss Stage. Das Feld mit 16 Teams ist damit komplett."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Ein Play-In ohne Serienniederlage"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Der dritte Setzplatz der LEC gewann alle drei Serien: 3-2 gegen Cloud9 am 15. Oktober, danach zweimal 3-0 gegen MVK Esports, im Upper-Bracket-Finale am 16. und im Play-In-Finale am 18. Über das gesamte Play-In steht das Team bei 9 Siegen und 2 Niederlagen in den Partien."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Eine Premiere für die Organisation"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Karmine Corp erreicht zum ersten Mal in der Vereinsgeschichte die Swiss Stage. Cloud9, FURIA und MVK Esports sind aus den Worlds 2026 ausgeschieden."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Wie es weitergeht"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Die Swiss Stage beginnt am 23. Oktober in Allen, Texas."
          }
        ]
      }
    ],
    "newsType": "international",
    "newsSubtype": "resultats",
    "category": "esports",
    "publishedAt": "2026-10-19T05:00:00.000Z",
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Play-In"
      },
      {
        "tag": "Karmine Corp"
      },
      {
        "tag": "MVK Esports"
      },
      {
        "tag": "Swiss Stage"
      }
    ],
    "sourceUrl": "https://www.strafe.com/news/read/karmine-corp-sweep-mvk-to-claim-final-worlds-2026-swiss-stage-spot/"
  },
  {
    "slug": "worlds-2026-play-in-final-it",
    "locale": "it",
    "status": "published",
    "title": "Worlds 2026: Karmine Corp spazza via MVK 3-0 e si qualifica per la fase Swiss",
    "excerpt": "Il 18 ottobre Karmine Corp batte MVK Esports 3-0 nella finale del Play-In e conquista l'ultimo posto nella fase Swiss dei Worlds 2026.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "Karmine Corp ha battuto MVK Esports 3-0 il 18 ottobre nella finale del Play-In dei Worlds 2026 e conquista l'ultimo posto nella fase Swiss. Il tabellone da 16 squadre è ora completo."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Un Play-In senza sconfitte di serie"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "La terza testa di serie della LEC ha vinto tutte e tre le serie: 3-2 contro Cloud9 il 15 ottobre, poi due volte 3-0 contro MVK Esports, nella finale del tabellone superiore il 16 e nella finale del Play-In il 18. In tutto il Play-In la squadra ha 9 vittorie e 2 sconfitte nelle partite."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Una prima volta per l'organizzazione"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Karmine Corp raggiunge la fase Swiss per la prima volta nella sua storia. Cloud9, FURIA e MVK Esports sono eliminate dai Worlds 2026."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Cosa succede ora"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "La fase Swiss inizia il 23 ottobre ad Allen, in Texas."
          }
        ]
      }
    ],
    "newsType": "international",
    "newsSubtype": "resultats",
    "category": "esports",
    "publishedAt": "2026-10-19T05:00:00.000Z",
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Play-In"
      },
      {
        "tag": "Karmine Corp"
      },
      {
        "tag": "MVK Esports"
      },
      {
        "tag": "Swiss Stage"
      }
    ],
    "sourceUrl": "https://www.strafe.com/news/read/karmine-corp-sweep-mvk-to-claim-final-worlds-2026-swiss-stage-spot/"
  },
  {
    "slug": "worlds-2026-swiss-round-1-draw-fr",
    "locale": "fr",
    "status": "published",
    "title": "Worlds 2026 : le tirage du Swiss Stage dévoile les huit matchs du premier tour",
    "excerpt": "Le Swiss Stage des Worlds 2026 débute le 23 octobre à Allen, au Texas, avec huit matchs en Bo1 dont Gen.G contre Invictus Gaming et T1 contre LOS.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "Le tirage du premier tour du Swiss Stage des Worlds 2026 a eu lieu après la finale du Play-In. Les huit matchs se jouent le 23 octobre à Allen, au Texas, tous en Bo1."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Les matchs du premier tour"
          }
        ]
      },
      {
        "type": "ul",
        "children": [
          {
            "type": "li",
            "children": [
              {
                "text": "Gen.G vs Invictus Gaming"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Team Liquid Alienware vs CTBC Flying Oyster"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Anyone's Legend vs Karmine Corp"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "G2 Esports vs Dplus KIA"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "T1 vs LOS"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Hanwha Life Esports vs TOP Esports"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Team Secret Whales vs LYON"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Bilibili Gaming vs Movistar KOI"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Le format du Swiss Stage"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Seize équipes jouent cinq rondes, du 23 au 26 octobre puis du 28 au 31 octobre. Une équipe qui atteint trois victoires passe en phase finale, et une équipe qui subit trois défaites est éliminée. Les matchs qui décident d'une qualification ou d'une élimination se jouent en Bo3 avec le Fearless Draft, les autres en Bo1."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Et après ?"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Les quarts de finale se jouent du 3 au 6 novembre et les demi-finales les 7 et 8 novembre à Allen. La finale a lieu le 14 novembre au Barclays Center de Brooklyn."
          }
        ]
      }
    ],
    "newsType": "international",
    "newsSubtype": "resultats",
    "category": "esports",
    "publishedAt": "2026-10-20T05:00:00.000Z",
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Swiss Stage"
      },
      {
        "tag": "Gen.G"
      },
      {
        "tag": "T1"
      },
      {
        "tag": "Karmine Corp"
      }
    ],
    "sourceUrl": "https://egamersworld.com/lol/news/37892/worlds-2026-swiss-stage-schedule-round-1-matchups--9ACyERJ53"
  },
  {
    "slug": "worlds-2026-swiss-round-1-draw-en",
    "locale": "en",
    "status": "published",
    "title": "Worlds 2026: the Swiss Stage draw reveals all eight first-round matches",
    "excerpt": "The Worlds 2026 Swiss Stage starts on October 23 in Allen, Texas, with eight best-of-one matches including Gen.G vs Invictus Gaming and T1 vs LOS.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "The Worlds 2026 Swiss Stage first-round draw took place after the Play-In final. All eight matches are played on October 23 in Allen, Texas, all best-of-one."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "First-round matches"
          }
        ]
      },
      {
        "type": "ul",
        "children": [
          {
            "type": "li",
            "children": [
              {
                "text": "Gen.G vs Invictus Gaming"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Team Liquid Alienware vs CTBC Flying Oyster"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Anyone's Legend vs Karmine Corp"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "G2 Esports vs Dplus KIA"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "T1 vs LOS"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Hanwha Life Esports vs TOP Esports"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Team Secret Whales vs LYON"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Bilibili Gaming vs Movistar KOI"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "The Swiss Stage format"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Sixteen teams play five rounds, from October 23 to 26 and from October 28 to 31. A team that reaches three wins advances to the knockout stage, and a team that takes three losses is eliminated. Matches that decide an advancement or an elimination are best-of-three with Fearless Draft, the others are best-of-one."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "What comes after"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "The quarterfinals run from November 3 to 6 and the semifinals on November 7 and 8 in Allen. The final takes place on November 14 at the Barclays Center in Brooklyn."
          }
        ]
      }
    ],
    "newsType": "international",
    "newsSubtype": "resultats",
    "category": "esports",
    "publishedAt": "2026-10-20T05:00:00.000Z",
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Swiss Stage"
      },
      {
        "tag": "Gen.G"
      },
      {
        "tag": "T1"
      },
      {
        "tag": "Karmine Corp"
      }
    ],
    "sourceUrl": "https://egamersworld.com/lol/news/37892/worlds-2026-swiss-stage-schedule-round-1-matchups--9ACyERJ53"
  },
  {
    "slug": "worlds-2026-swiss-round-1-draw-es",
    "locale": "es",
    "status": "published",
    "title": "Worlds 2026: el sorteo de la fase Swiss revela los ocho partidos de la primera ronda",
    "excerpt": "La fase Swiss de los Worlds 2026 empieza el 23 de octubre en Allen, Texas, con ocho partidos al mejor de uno, entre ellos Gen.G contra Invictus Gaming y T1 contra LOS.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "El sorteo de la primera ronda de la fase Swiss de los Worlds 2026 se celebró tras la final del Play-In. Los ocho partidos se juegan el 23 de octubre en Allen, Texas, todos al mejor de uno."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Los partidos de la primera ronda"
          }
        ]
      },
      {
        "type": "ul",
        "children": [
          {
            "type": "li",
            "children": [
              {
                "text": "Gen.G vs Invictus Gaming"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Team Liquid Alienware vs CTBC Flying Oyster"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Anyone's Legend vs Karmine Corp"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "G2 Esports vs Dplus KIA"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "T1 vs LOS"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Hanwha Life Esports vs TOP Esports"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Team Secret Whales vs LYON"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Bilibili Gaming vs Movistar KOI"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "El formato de la fase Swiss"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Dieciséis equipos juegan cinco rondas, del 23 al 26 de octubre y del 28 al 31 de octubre. Un equipo que llega a tres victorias pasa a la fase final, y un equipo que acumula tres derrotas queda eliminado. Los partidos que deciden una clasificación o una eliminación se juegan al mejor de tres con Fearless Draft, los demás al mejor de uno."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Y después"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Los cuartos de final se juegan del 3 al 6 de noviembre y las semifinales el 7 y el 8 de noviembre en Allen. La final es el 14 de noviembre en el Barclays Center de Brooklyn."
          }
        ]
      }
    ],
    "newsType": "international",
    "newsSubtype": "resultats",
    "category": "esports",
    "publishedAt": "2026-10-20T05:00:00.000Z",
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Swiss Stage"
      },
      {
        "tag": "Gen.G"
      },
      {
        "tag": "T1"
      },
      {
        "tag": "Karmine Corp"
      }
    ],
    "sourceUrl": "https://egamersworld.com/lol/news/37892/worlds-2026-swiss-stage-schedule-round-1-matchups--9ACyERJ53"
  },
  {
    "slug": "worlds-2026-swiss-round-1-draw-de",
    "locale": "de",
    "status": "published",
    "title": "Worlds 2026: Die Auslosung der Swiss Stage zeigt alle acht Partien der ersten Runde",
    "excerpt": "Die Swiss Stage der Worlds 2026 beginnt am 23. Oktober in Allen, Texas, mit acht Best-of-1-Partien, darunter Gen.G gegen Invictus Gaming und T1 gegen LOS.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "Die Auslosung der ersten Runde der Swiss Stage der Worlds 2026 fand nach dem Play-In-Finale statt. Alle acht Partien werden am 23. Oktober in Allen, Texas, ausgetragen, alle im Best of 1."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Die Partien der ersten Runde"
          }
        ]
      },
      {
        "type": "ul",
        "children": [
          {
            "type": "li",
            "children": [
              {
                "text": "Gen.G vs Invictus Gaming"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Team Liquid Alienware vs CTBC Flying Oyster"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Anyone's Legend vs Karmine Corp"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "G2 Esports vs Dplus KIA"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "T1 vs LOS"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Hanwha Life Esports vs TOP Esports"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Team Secret Whales vs LYON"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Bilibili Gaming vs Movistar KOI"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Das Format der Swiss Stage"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Sechzehn Teams spielen fünf Runden, vom 23. bis 26. Oktober und vom 28. bis 31. Oktober. Ein Team mit drei Siegen erreicht die K.-o.-Phase, ein Team mit drei Niederlagen scheidet aus. Partien, die über Weiterkommen oder Ausscheiden entscheiden, werden im Best of 3 mit Fearless Draft gespielt, alle anderen im Best of 1."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Und danach"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Die Viertelfinals finden vom 3. bis 6. November statt, die Halbfinals am 7. und 8. November in Allen. Das Finale steigt am 14. November im Barclays Center in Brooklyn."
          }
        ]
      }
    ],
    "newsType": "international",
    "newsSubtype": "resultats",
    "category": "esports",
    "publishedAt": "2026-10-20T05:00:00.000Z",
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Swiss Stage"
      },
      {
        "tag": "Gen.G"
      },
      {
        "tag": "T1"
      },
      {
        "tag": "Karmine Corp"
      }
    ],
    "sourceUrl": "https://egamersworld.com/lol/news/37892/worlds-2026-swiss-stage-schedule-round-1-matchups--9ACyERJ53"
  },
  {
    "slug": "worlds-2026-swiss-round-1-draw-it",
    "locale": "it",
    "status": "published",
    "title": "Worlds 2026: il sorteggio della fase Swiss svela gli otto incontri del primo turno",
    "excerpt": "La fase Swiss dei Worlds 2026 inizia il 23 ottobre ad Allen, in Texas, con otto incontri al meglio di uno, tra cui Gen.G contro Invictus Gaming e T1 contro LOS.",
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "Il sorteggio del primo turno della fase Swiss dei Worlds 2026 si è svolto dopo la finale del Play-In. Gli otto incontri si giocano il 23 ottobre ad Allen, in Texas, tutti al meglio di uno."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Gli incontri del primo turno"
          }
        ]
      },
      {
        "type": "ul",
        "children": [
          {
            "type": "li",
            "children": [
              {
                "text": "Gen.G vs Invictus Gaming"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Team Liquid Alienware vs CTBC Flying Oyster"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Anyone's Legend vs Karmine Corp"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "G2 Esports vs Dplus KIA"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "T1 vs LOS"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Hanwha Life Esports vs TOP Esports"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Team Secret Whales vs LYON"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Bilibili Gaming vs Movistar KOI"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Il formato della fase Swiss"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Sedici squadre giocano cinque turni, dal 23 al 26 ottobre e dal 28 al 31 ottobre. Una squadra che raggiunge tre vittorie passa alla fase a eliminazione diretta, mentre una squadra che subisce tre sconfitte è eliminata. Le partite che decidono una qualificazione o un'eliminazione si giocano al meglio di tre con Fearless Draft, le altre al meglio di uno."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "E dopo"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "I quarti di finale si giocano dal 3 al 6 novembre e le semifinali il 7 e l'8 novembre ad Allen. La finale si svolge il 14 novembre al Barclays Center di Brooklyn."
          }
        ]
      }
    ],
    "newsType": "international",
    "newsSubtype": "resultats",
    "category": "esports",
    "publishedAt": "2026-10-20T05:00:00.000Z",
    "tags": [
      {
        "tag": "Worlds 2026"
      },
      {
        "tag": "Swiss Stage"
      },
      {
        "tag": "Gen.G"
      },
      {
        "tag": "T1"
      },
      {
        "tag": "Karmine Corp"
      }
    ],
    "sourceUrl": "https://egamersworld.com/lol/news/37892/worlds-2026-swiss-stage-schedule-round-1-matchups--9ACyERJ53"
  }
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const f of fixes) {
    const ex = await payload.find({ collection: 'news', where: { slug: { equals: f.slug } }, limit: 1 })
    if (ex.docs.length === 0) { console.log(`absent ${f.slug}`); continue }
    await payload.update({ collection: 'news', id: ex.docs[0].id, data: { title: f.title, excerpt: f.excerpt, content: f.content, tags: f.tags } })
    console.log(`corrige ${f.slug}`)
  }
  for (const d of docs) {
    const ex = await payload.find({ collection: 'news', where: { slug: { equals: d.slug } }, limit: 1 })
    if (ex.docs.length > 0) { console.log(`skip ${d.slug}`); continue }
    await payload.create({ collection: 'news', data: d })
    console.log(`ok ${d.locale.toUpperCase()} ${d.title}`)
  }
}
