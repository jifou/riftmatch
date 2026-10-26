import type { MigrationModule } from './runner'

export const id = '219-logitech-gpro-seo-articles'
export const description = 'Articles SEO d\'achat: Logitech G PRO X SUPERLIGHT 2, 5 langues, collection pages, guide pour joueurs LoL ADC/Range'

const articles: any[] = [
  {
    title: 'Meilleure souris gaming ADC: Logitech G PRO X SUPERLIGHT 2',
    slug: 'souris-gaming-adc-logitech-gpro-superlight-2',
    locale: 'fr',
    template: 'article',
    status: 'published',
    publishedAt: new Date('2026-10-26').toISOString(),
    seo: {
      description: 'Guide complet: pourquoi la Logitech G PRO X SUPERLIGHT 2 convient aux ADC, precision sans fatigue, 60g ultra-leger, batterie 95h.'
    },
    content: [
      {
        children: [
          {
            text: 'Tu joues ADC et tu cherches une souris qui epouse chaque geste sans te ralentir? La Logitech G PRO X SUPERLIGHT 2 est pensee pour ca: ultra-legere (60g), precision absolue (capteur 44000 DPI), autonomie qui tient une saison entiere (95h). C\'est l\'arme que les pros ADC ont choisie.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Comment choisir une souris pour ADC'
          }
        ]
      },
      {
        children: [
          {
            text: 'Un ADC fait des clicks toutes les millisecondes: cs, kite, autoheal, mouvements de groupe. Ta souris doit traduire chaque intention sans delai ni derive, et surtout ne pas te fatiguer la main apres 8h de jeu par jour. Les vrais criteres: poids leger (moins de 80g), capteur stable sur tous les DPI, boutons definis (pas d\'accidental click sur les lateraux), prise en main stable, bon grip.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Ce que la Logitech G PRO X SUPERLIGHT 2 offre'
          }
        ]
      },
      {
        children: [
          {
            text: 'La Logitech G PRO X SUPERLIGHT 2 est une souris sans fil gaming. Elle pese 60g (vide d\'empreinte au combat), le capteur HERO 2 monte jusqu\'a 44000 DPI avec 8kHz polling rate (mise a jour 8 fois par milliseconde, c\'est ce que font les pros). USB-C pour recharger, batterie 95h entre deux charges, donc tu peux oublier les piles. Les boutons lateraux sont magnetiques et interchangeables: si tu ne les utilises pas, tu les retires pour stabiliser la prise de main. C\'est du materiel pro, utilise en LEC/LCK/LCS.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Pour qui c\'est une bonne affaire'
          }
        ]
      },
      {
        children: [
          {
            text: 'Si tu joues ADC et que tu as une douleur a la main ou au poignet apres une session, cette souris peut vraiment changer les choses: 20g de moins que une souris standard, c\'est du vrai confort sur la duree. Si tu es en rang et que tu grimpes vers Platine ou au-dela, la precision du capteur et le polling rate vont avantager tes cs et ton kite. Si tu joues Mage ou Assassin en mid, c\'est aussi valable: c\'est une souris de precision, pas adaptee que pour les ADC.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Ce qu\'il faut savoir avant d\'acheter'
          }
        ]
      },
      {
        children: [
          {
            text: 'Elle est a batterie: pas de cable. Certains joueurs trouvent ca mieux, d\'autres regrettent de ne pas avoir le choix. Essaye de l\'emprunter avant d\'investir si tu as une peur des lags. Les boutons lateraux sont petits: mieux pour ne pas les presser par accident, mais moins commode si tu les utilises beaucoup. Elle est noire (ni RGB, ni LED qui clignotent). Enfin, c\'est un achat premium: le prix reflete la technologie utilise.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Les autres candidats'
          }
        ]
      },
      {
        children: [
          {
            text: 'Si la SUPERLIGHT 2 est trop chere ou que tu preferez un cable, la Razer DeathAdder ou l\'Asus ROG Keris sont bonnes aussi. Si tu veux moins cher, la SteelSeries Rival 3 ou l\'SCUF fait du bon travail. Mais sur le segment precision+poids+batterie durable, peu de modeles rattraperont la Logitech.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Questions que les joueurs se posent'
          }
        ]
      },
      {
        type: 'h3',
        children: [
          {
            text: 'Est-ce qu\'elle fonctionne en LAN?'
          }
        ]
      },
      {
        children: [
          {
            text: 'Oui. Logitech a fait des options pour la compétition: tu peux aussi la brancher en 2.4GHz USB receptor ou en cable USB-C pour etre certain de zero latence. Les pros qui jouent des tournois Riot la branchent souvent au cable.'
          }
        ]
      },
      {
        type: 'h3',
        children: [
          {
            text: 'Elle dure combien de temps?'
          }
        ]
      },
      {
        children: [
          {
            text: 'Logitech garantit 95 heures de batterie. En utilisation normale (avec de vrais jeux, pas du test labo), les joueurs rapportent 70-90h selon le polling rate choisi (8kHz consomme plus que 1kHz). Soit environ 2 semaines de jeu moyen.'
          }
        ]
      },
      {
        type: 'h3',
        children: [
          {
            text: 'Avec quel tapis elle marche le mieux?'
          }
        ]
      },
      {
        children: [
          {
            text: 'Elle marche sur n\'importe quel tapis (SteelSeries, Logitech, ou un simple tapis de souris), elle s\'adapte au capteur. Logitech recommande un tapis clair (pas noir) pour que la precision soit maximale, mais ca marche aussi en noir.'
          }
        ]
      },
      {
        children: [
          {
            text: 'La Logitech G PRO X SUPERLIGHT 2 est un investissement qui paie sur 2-3 ans si tu joues serieusement. Precision, poids, autonomie, tout y est pour l\'ADC qui veut monter et garder la sante de sa main. '
          },
          {
            type: 'link',
            url: 'https://www.amazon.fr/dp/B07W5JKP66?tag=riftmatchio-21',
            newTab: true,
            children: [
              {
                text: 'Voir le produit sur Amazon'
              }
            ]
          },
          {
            text: '.'
          }
        ]
      },
      {
        children: [
          {
            text: 'Lien affilie Amazon : nous touchons une commission sans surcout pour toi.'
          }
        ]
      }
    ]
  },
  {
    title: 'Best gaming mouse for LoL ADC: Logitech G PRO X SUPERLIGHT 2',
    slug: 'gaming-mouse-lol-adc-logitech-gpro-superlight-2',
    locale: 'en',
    template: 'article',
    status: 'published',
    publishedAt: new Date('2026-10-26').toISOString(),
    seo: {
      description: 'Complete guide: why Logitech G PRO X SUPERLIGHT 2 is built for ADC precision, 60g ultra-light, 44k DPI sensor, 95h battery life.'
    },
    content: [
      {
        children: [
          {
            text: 'You main ADC and need a mouse that follows every click without holding you back? The Logitech G PRO X SUPERLIGHT 2 is engineered for that: ultra-light (60g), precise sensor (44,000 DPI), battery that lasts a whole season (95h). This is the mouse pro ADCs chose.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'What makes a good ADC mouse'
          }
        ]
      },
      {
        children: [
          {
            text: 'An ADC clicks every millisecond: farming, kiting, positioning, teamfights. Your mouse has to respond without lag or drift, and won\'t tire your hand after 8+ hours a day. Real requirements: light weight (under 80g), stable sensor across all DPI levels, defined buttons (no accidental clicks), solid grip, good feel for hand tracking.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'What you get with Logitech G PRO X SUPERLIGHT 2'
          }
        ]
      },
      {
        children: [
          {
            text: 'The Logitech G PRO X SUPERLIGHT 2 is a wireless gaming mouse that weighs 60g (no cable weight holding you back). The HERO 2 sensor tracks up to 44,000 DPI with 8kHz polling (8 updates per millisecond; this is what pro players use). USB-C charging, 95-hour battery life between charges, so you\'ll forget about batteries. Side buttons are magnetic and swappable: if you don\'t use them, remove them to lock in your grip. This is pro-grade gear, used in LEC, LCK, and LCS matches.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Who should buy this'
          }
        ]
      },
      {
        children: [
          {
            text: 'If you main ADC and feel hand pain after long sessions, this mouse can make a real difference: 20g lighter than standard mice, that\'s genuine comfort over time. If you\'re grinding toward Platinum or higher, the sensor precision and polling rate will sharpen your CS and kiting. If you play Mid mages or assassins, it\'s equally solid: this is a precision tool, not locked to ADC players only.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Things to know before you buy'
          }
        ]
      },
      {
        children: [
          {
            text: 'It\'s wireless: no cable tether. Some swear by it, others miss the option of a wired mode. Try to borrow one first if latency worries you. The side buttons are small: good for avoiding accidental presses, less convenient if you use them heavily. It\'s black with no RGB or blinking lights. And it\'s premium-priced: the cost reflects the tech inside.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Other options'
          }
        ]
      },
      {
        children: [
          {
            text: 'If SUPERLIGHT 2 costs too much or you prefer wired, the Razer DeathAdder and Asus ROG Keris are solid picks. On a budget, SteelSeries Rival 3 and SCUF do good work. But on the balance of precision, weight, and battery stamina, few mice will match Logitech.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Answers to player questions'
          }
        ]
      },
      {
        type: 'h3',
        children: [
          {
            text: 'Does it work at LAN events?'
          }
        ]
      },
      {
        children: [
          {
            text: 'Yes. Logitech built tournament options: you can switch to 2.4GHz USB receiver or cable USB-C for absolute zero-latency assurance. Pro players at Riot events often plug it in wired.'
          }
        ]
      },
      {
        type: 'h3',
        children: [
          {
            text: 'How long does the battery last?'
          }
        ]
      },
      {
        children: [
          {
            text: 'Logitech rates it at 95 hours. In real play (not lab conditions), players report 70-90 hours depending on polling rate choice (8kHz uses more power than 1kHz). That\'s roughly 2 weeks of normal gaming.'
          }
        ]
      },
      {
        type: 'h3',
        children: [
          {
            text: 'What mousepad works best with it?'
          }
        ]
      },
      {
        children: [
          {
            text: 'It works on any mousepad (SteelSeries, Logitech, or a basic one); the sensor adapts. Logitech recommends a lighter pad (not black) for peak precision, but it tracks perfectly on any surface.'
          }
        ]
      },
      {
        children: [
          {
            text: 'The Logitech G PRO X SUPERLIGHT 2 is an investment that pays dividends over 2-3 years if you play seriously. Precision, weight, stamina, all locked in for the ADC climbing the ranks while protecting their wrist. '
          },
          {
            type: 'link',
            url: 'https://www.amazon.co.uk/dp/B07W5JKP66?tag=riftmatchio01-21',
            newTab: true,
            children: [
              {
                text: 'View on Amazon'
              }
            ]
          },
          {
            text: '.'
          }
        ]
      },
      {
        children: [
          {
            text: 'Amazon affiliate link: we earn a commission at no extra cost to you.'
          }
        ]
      }
    ]
  },
  {
    title: 'Mejor raton gaming para ADC: Logitech G PRO X SUPERLIGHT 2',
    slug: 'raton-gaming-adc-lol-logitech-gpro-superlight-2',
    locale: 'es',
    template: 'article',
    status: 'published',
    publishedAt: new Date('2026-10-26').toISOString(),
    seo: {
      description: 'Guia completa: por que la Logitech G PRO X SUPERLIGHT 2 es el raton para ADC, ultraligero 60g, sensor 44000 DPI, bateria 95 horas.'
    },
    content: [
      {
        children: [
          {
            text: 'Juegas ADC y necesitas un raton que siga cada click sin frenarte? La Logitech G PRO X SUPERLIGHT 2 esta diseñada para eso: ultraligera (60g), sensor preciso (44.000 DPI), bateria que dura toda una temporada (95h). Este es el raton que eligieron los profesionales.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Como elegir un buen raton para ADC'
          }
        ]
      },
      {
        children: [
          {
            text: 'Un ADC hace clicks cada milisegundo: farm, kite, posicionamiento, peleas de equipo. Tu raton tiene que responder sin lag ni deriva, y no cansarte la mano despues de 8+ horas. Criterios reales: peso ligero (menos de 80g), sensor estable en todos los DPI, botones definidos (sin clicks accidentales), agarre solido, traccion fiable.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Lo que ofrece la Logitech G PRO X SUPERLIGHT 2'
          }
        ]
      },
      {
        children: [
          {
            text: 'La Logitech G PRO X SUPERLIGHT 2 es un raton gaming inalambrico de 60g (sin peso de cable en el camino). El sensor HERO 2 llega hasta 44.000 DPI con 8kHz polling (8 actualizaciones por milisegundo; esto es lo que usan los pros). Carga USB-C, bateria de 95 horas entre cargas, asi que olvidate de pilas. Los botones laterales son magneticos e intercambiables: si no los usas, quitalos para bloquear tu agarre. Es equipo de grado profesional, usado en LEC, LCK y LCS.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Para quien es una buena compra'
          }
        ]
      },
      {
        children: [
          {
            text: 'Si juegas ADC y sientes dolor en la mano despues de sesiones largas, este raton puede cambiar las cosas: 20g mas ligero que uno estandar, es confort real con el tiempo. Si estas escalando hacia Platino o mas alto, la precision del sensor y el polling rate agudizaran tu farm y kite. Si juegas mid con magos o asesinos, es igualmente solido: es una herramienta de precision, no limitada solo a ADC.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Lo que debes saber antes de comprar'
          }
        ]
      },
      {
        children: [
          {
            text: 'Es inalambrica: sin cable. Algunos la prefieren asi, otros extrañan tener la opcion de cable. Intenta tomarla prestada si te preocupa la latencia. Los botones laterales son pequeños: bien para evitar pulsaciones accidentales, menos practico si los usas mucho. Es negra sin RGB ni luces que parpadean. Y tiene un precio premium: el costo refleja la tecnologia dentro.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Otras opciones'
          }
        ]
      },
      {
        children: [
          {
            text: 'Si la SUPERLIGHT 2 es muy cara o prefieres cable, la Razer DeathAdder y Asus ROG Keris son buenas. Con presupuesto ajustado, SteelSeries Rival 3 y SCUF hacen buen trabajo. Pero en el equilibrio de precision, peso y duracion de bateria, pocos ratones igualaran a Logitech.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Preguntas que se hacen los jugadores'
          }
        ]
      },
      {
        type: 'h3',
        children: [
          {
            text: 'Funciona en eventos de LAN?'
          }
        ]
      },
      {
        children: [
          {
            text: 'Si. Logitech construyo opciones para competicion: puedes cambiar a receptor USB 2.4GHz o cable USB-C para latencia cero absoluta. Los profesionales en eventos Riot la enchufan por cable frecuentemente.'
          }
        ]
      },
      {
        type: 'h3',
        children: [
          {
            text: 'Cuanto dura la bateria?'
          }
        ]
      },
      {
        children: [
          {
            text: 'Logitech la clasifica en 95 horas. En juego real (no condiciones de laboratorio), los jugadores reportan 70-90 horas segun la eleccion de polling rate (8kHz consume mas que 1kHz). Son aproximadamente 2 semanas de juego normal.'
          }
        ]
      },
      {
        type: 'h3',
        children: [
          {
            text: 'Con que mousepad funciona mejor?'
          }
        ]
      },
      {
        children: [
          {
            text: 'Funciona en cualquier mousepad (SteelSeries, Logitech, o uno basico); el sensor se adapta. Logitech recomienda una base clara (no negra) para precision maxima, pero rastrea perfecto en cualquier superficie.'
          }
        ]
      },
      {
        children: [
          {
            text: 'La Logitech G PRO X SUPERLIGHT 2 es una inversion que rinde dividendos en 2-3 años si juegas en serio. Precision, peso, resistencia, todo asegurado para el ADC que trepa y cuida su muñeca. '
          },
          {
            type: 'link',
            url: 'https://www.amazon.es/dp/B07W5JKP66?tag=riftmatchio0e-21',
            newTab: true,
            children: [
              {
                text: 'Ver en Amazon'
              }
            ]
          },
          {
            text: '.'
          }
        ]
      },
      {
        children: [
          {
            text: 'Enlace de afiliado de Amazon: ganamos una comision sin coste adicional para ti.'
          }
        ]
      }
    ]
  },
  {
    title: 'Beste Gaming-Maus fuer ADC: Logitech G PRO X SUPERLIGHT 2',
    slug: 'gaming-maus-adc-lol-logitech-gpro-superlight-2',
    locale: 'de',
    template: 'article',
    status: 'published',
    publishedAt: new Date('2026-10-26').toISOString(),
    seo: {
      description: 'Vollstaendiger Guide: warum Logitech G PRO X SUPERLIGHT 2 ideal fuer ADC ist, ultraleicht 60g, 44000-DPI-Sensor, 95-Stunden-Akku.'
    },
    content: [
      {
        children: [
          {
            text: 'Du spielst ADC und brauchst eine Maus, die jeden Klick umsetzt, ohne dich zu bremsen? Die Logitech G PRO X SUPERLIGHT 2 ist dafuer gemacht: ultraleicht (60g), praezisor Sensor (44.000 DPI), Akku, der eine ganze Saison haelt (95h). Das ist die Maus, die die Profis gewaehlt haben.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Was macht eine gute ADC-Maus aus'
          }
        ]
      },
      {
        children: [
          {
            text: 'Ein ADC klickt jede Millisekunde: Farmen, Kiten, Positionierung, Teamkaempfe. Deine Maus muss ohne Verzoegerung oder Drift reagieren und deine Hand nach 8+ Stunden nicht ermaenden. Echte Anforderungen: leicht (unter 80g), stabiler Sensor auf allen DPI-Stufen, definierte Tasten (keine versehentlichen Klicks), fester Griff, zuverlaessige Verfolgung.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Was die Logitech G PRO X SUPERLIGHT 2 bietet'
          }
        ]
      },
      {
        children: [
          {
            text: 'Die Logitech G PRO X SUPERLIGHT 2 ist eine kabellose Gaming-Maus mit 60g Gewicht (kein Kabelgewicht im Weg). Der HERO-2-Sensor verfolgt bis 44.000 DPI mit 8-kHz-Abfrage (8 Aktualisierungen pro Millisekunde; das ist, was Profis nutzen). USB-C-Ladung, 95 Stunden Akkulaufzeit zwischen Ladevorgaengen, also vergiss die Batterien. Seitentasten sind magnetisch und auswechselbar: wenn du sie nicht benutzt, entferne sie zum Sperren des Griffs. Das ist professionelles Equipment, das in LEC, LCK und LCS verwendet wird.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Fuer wen ist das ein guter Kauf'
          }
        ]
      },
      {
        children: [
          {
            text: 'Wenn du ADC spielst und nach langen Sessions Handschmerzen hast, kann diese Maus wirklich einen Unterschied machen: 20g leichter als Standard-Maeusen, das ist echter Komfort ueber Zeit. Wenn du zum Platin oder hoeher kletterst, werden Sensorgenauigkeit und Abfragerate dein Farmen und Kiten schaerfen. Wenn du Mid mit Magiern oder Assassinen spielst, ist sie ebenso solide: das ist ein Praezisonswerkzeug, nicht nur fuer ADC reserviert.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Was du vor dem Kauf wissen solltest'
          }
        ]
      },
      {
        children: [
          {
            text: 'Sie ist kabellos: keine Kabelverbindung. Einige schwueren drauf, andere vermissen die Option eines Kabelbetriebs. Versuche sie auszuleihen, wenn dich Latenz-Bedenken beunruhigen. Die Seitentasten sind klein: gut zum Vermeiden versehentlicher Betaetigungen, weniger praktisch wenn du sie viel nutzt. Sie ist schwarz ohne RGB oder blinkende Lichter. Und sie hat Premiumpreise: die Kosten spiegeln die Technologie wider.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Andere Optionen'
          }
        ]
      },
      {
        children: [
          {
            text: 'Wenn SUPERLIGHT 2 zu teuer ist oder du kabelgebunden bevorzugst, sind Razer DeathAdder und Asus ROG Keris solide Waehler. Mit kleinerem Budget: SteelSeries Rival 3 und SCUF machen gute Arbeit. Aber in der Balance von Praezision, Gewicht und Akku-Ausdauer werden wenige Maeusen Logitech erreichen.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Antworten auf Spielerfragen'
          }
        ]
      },
      {
        type: 'h3',
        children: [
          {
            text: 'Funktioniert sie bei LAN-Veranstaltungen?'
          }
        ]
      },
      {
        children: [
          {
            text: 'Ja. Logitech hat Wettkampf-Optionen gebaut: du kannst zu 2,4-GHz-USB-Empfaenger oder USB-C-Kabel fuer absolute Nullverzoegerung wechseln. Profispieler bei Riot-Events stecken sie haeufig kabelgebunden ein.'
          }
        ]
      },
      {
        type: 'h3',
        children: [
          {
            text: 'Wie lange haelt der Akku?'
          }
        ]
      },
      {
        children: [
          {
            text: 'Logitech gibt 95 Stunden an. Im echten Spiel (nicht Laborbedingungen) berichten Spieler von 70-90 Stunden, je nachdem, fuer welchen Abfragerate sie sich entscheiden (8kHz verbraucht mehr als 1kHz). Das sind ungefaehr 2 Wochen normales Spielen.'
          }
        ]
      },
      {
        type: 'h3',
        children: [
          {
            text: 'Mit welchem Mousepad funktioniert sie am besten?'
          }
        ]
      },
      {
        children: [
          {
            text: 'Sie funktioniert auf jedem Mousepad (SteelSeries, Logitech oder ein einfaches); der Sensor passt sich an. Logitech empfiehlt ein helleres Pad (nicht schwarz) fuer maximale Praezision, aber sie verfolgt auf jeder Flaeche perfekt.'
          }
        ]
      },
      {
        children: [
          {
            text: 'Die Logitech G PRO X SUPERLIGHT 2 ist eine Investition, die sich ueber 2-3 Jahre rentiert, wenn du ernsthaft spielst. Praezision, Gewicht, Durchhaltevermoegen, alles gesichert fuer den ADC, der klettert und sein Handgelenk schuetzt. '
          },
          {
            type: 'link',
            url: 'https://www.amazon.de/dp/B07W5JKP66?tag=riftmatchio02-21',
            newTab: true,
            children: [
              {
                text: 'Bei Amazon ansehen'
              }
            ]
          },
          {
            text: '.'
          }
        ]
      },
      {
        children: [
          {
            text: 'Amazon-Affiliate-Link: Wir erhalten eine Provision, fuer dich entstehen keine Mehrkosten.'
          }
        ]
      }
    ]
  },
  {
    title: 'Miglior mouse gaming per ADC: Logitech G PRO X SUPERLIGHT 2',
    slug: 'mouse-gaming-adc-lol-logitech-gpro-superlight-2',
    locale: 'it',
    template: 'article',
    status: 'published',
    publishedAt: new Date('2026-10-26').toISOString(),
    seo: {
      description: 'Guida completa: perche Logitech G PRO X SUPERLIGHT 2 e il mouse per ADC, ultraleggero 60g, sensore 44000 DPI, batteria 95 ore.'
    },
    content: [
      {
        children: [
          {
            text: 'Giochi ADC e hai bisogno di un mouse che segua ogni click senza frenarsi? Il Logitech G PRO X SUPERLIGHT 2 e progettato per questo: ultra leggero (60g), sensore preciso (44.000 DPI), batteria che dura un\'intera stagione (95h). E il mouse che i professionisti hanno scelto.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Cosa rende buono un mouse per ADC'
          }
        ]
      },
      {
        children: [
          {
            text: 'Un ADC clicca ogni millisecondo: farming, kiting, posizionamento, fight di squadra. Il tuo mouse deve rispondere senza lag o deriva e non stancare la mano dopo 8+ ore. Veri criteri: leggero (meno di 80g), sensore stabile su tutti i DPI, pulsanti definiti (senza click accidentali), presa salda, tracciamento affidabile.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Cosa offre il Logitech G PRO X SUPERLIGHT 2'
          }
        ]
      },
      {
        children: [
          {
            text: 'Il Logitech G PRO X SUPERLIGHT 2 e un mouse gaming wireless da 60g (senza peso di cavo addosso). Il sensore HERO 2 traccia fino a 44.000 DPI con 8kHz polling (8 aggiornamenti per millisecondo; questo e quello che usano i pro). Ricarica USB-C, batteria di 95 ore tra le ricariche, quindi dimentica le batterie. I pulsanti laterali sono magnetici e intercambiabili: se non li usi, toglili per bloccare la presa. E apparecchiatura di grado professionale, utilizzata in LEC, LCK e LCS.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Per chi e un buon acquisto'
          }
        ]
      },
      {
        children: [
          {
            text: 'Se giochi ADC e senti dolore alla mano dopo lunghe sessioni, questo mouse puo fare una vera differenza: 20g piu leggero di uno standard, e vero comfort nel tempo. Se stai risalendo verso Platino o piu in alto, la precisione del sensore e il polling rate affineranno il tuo farming e kiting. Se giochi mid con maghi o assassini, e altrettanto solido: e uno strumento di precisione, non limitato solo agli ADC.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Cose da sapere prima di comprare'
          }
        ]
      },
      {
        children: [
          {
            text: 'E wireless: niente cavo. Alcuni lo preferiscono, altri rimpiangono l\'opzione cablata. Prova a prenderlo in prestito se ti preoccupa la latenza. I pulsanti laterali sono piccoli: bene per evitare pressioni accidentali, meno pratico se li usi molto. E nero senza RGB o luci che lampeggiano. E ha un prezzo premium: il costo riflette la tecnologia all\'interno.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Altre opzioni'
          }
        ]
      },
      {
        children: [
          {
            text: 'Se SUPERLIGHT 2 costa troppo o preferisci cablato, Razer DeathAdder e Asus ROG Keris sono scelte solide. Con budget limitato, SteelSeries Rival 3 e SCUF fanno buon lavoro. Ma nell\'equilibrio di precisione, peso e resistenza della batteria, pochi mouse eguaglieranno Logitech.'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'Risposte alle domande dei giocatori'
          }
        ]
      },
      {
        type: 'h3',
        children: [
          {
            text: 'Funziona agli eventi LAN?'
          }
        ]
      },
      {
        children: [
          {
            text: 'Si. Logitech ha costruito opzioni competitive: puoi passare a ricevitore USB 2.4GHz o cavo USB-C per latenza zero assoluta. I giocatori professionisti agli eventi Riot spesso lo collegano via cavo.'
          }
        ]
      },
      {
        type: 'h3',
        children: [
          {
            text: 'Quanto dura la batteria?'
          }
        ]
      },
      {
        children: [
          {
            text: 'Logitech la classifica a 95 ore. Nel gioco reale (non condizioni di laboratorio), i giocatori riportano 70-90 ore a seconda della scelta del polling rate (8kHz consuma piu di 1kHz). Sono circa 2 settimane di gioco normale.'
          }
        ]
      },
      {
        type: 'h3',
        children: [
          {
            text: 'Quale mousepad funziona meglio?'
          }
        ]
      },
      {
        children: [
          {
            text: 'Funziona su qualsiasi mousepad (SteelSeries, Logitech, o uno basico); il sensore si adatta. Logitech raccomanda un pad piu chiaro (non nero) per massima precisione, ma traccia perfettamente su qualsiasi superficie.'
          }
        ]
      },
      {
        children: [
          {
            text: 'Il Logitech G PRO X SUPERLIGHT 2 e un investimento che si ripaga in 2-3 anni se giochi seriamente. Precisione, peso, resistenza, tutto assicurato per l\'ADC che sale e protegge il polso. '
          },
          {
            type: 'link',
            url: 'https://www.amazon.it/dp/B07W5JKP66?tag=riftmatchio07-21',
            newTab: true,
            children: [
              {
                text: 'Vedi su Amazon'
              }
            ]
          },
          {
            text: '.'
          }
        ]
      },
      {
        children: [
          {
            text: 'Link di affiliazione Amazon: riceviamo una commissione senza costi aggiuntivi per te.'
          }
        ]
      }
    ]
  }
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const article of articles) {
    const existingPage = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: article.slug
        }
      }
    })

    if (existingPage.docs && existingPage.docs.length > 0) {
      console.log(`Article ${article.slug} already exists, skipping`)
      continue
    }

    await payload.create({
      collection: 'pages',
      data: article
    })

    console.log(`Created article: ${article.slug}`)
  }
}
