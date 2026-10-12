import type { MigrationModule } from './runner'

export const id = '192-pages-de-it'
export const description = 'Guides et article de presentation traduits en allemand et en italien (meme translationKey que le francais)'

const pages: any[] = [
  {
    "title": "Mid Lane: der komplette Guide für Einsteiger und Aufsteiger",
    "slug": "mid-lane-guide-league-of-legends",
    "locale": "de",
    "template": "guide",
    "translationKey": "guide-mid",
    "seo": {
      "description": "Kompletter Guide zur Mid Lane in League of Legends: Rollen, Roaming, Impact auf der Map, Wave-Management und die besten Mid-Champions für den Einstieg."
    },
    "content": [
      {
        "children": [
          {
            "text": "Die Mid Lane ist die mittlere Lane und gilt oft als die einflussreichste von allen. Sie ist kurz und zentral, daher kann der Mid Laner schnell jeden Bereich der Karte erreichen. Diese Rolle verbindet hohe individuelle Anforderungen (Duelle, Wave-Management, Mechanik) mit einem großen Impact für das Team durch Roaming."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Was ist die Mid Lane?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Der Mid Laner spielt in der zentralen Lane, der kürzesten der drei Lanes. Seine Position verschafft ihm schnellen Zugang zur Bot Lane, zur Top Lane und zu beiden Seiten des Flusses, was ihn zusammen mit dem Jungler zum mobilsten Spieler des Teams macht. Diese zentrale Lage bringt eine besondere Verantwortung mit sich: Du sollst die Karte über deine eigene Lane hinaus beeinflussen."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Außerdem ist es eine sehr kompetitive Lane, in der oft mechanisch anspruchsvolle Champions gespielt werden. Mages, Assassinen, Fighter: Die Vielfalt der Archetypen ist in der Mid Lane größer als irgendwo sonst, was die Rolle spannend für alle macht, die gern neue Champions lernen."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Die Mid-Archetypen"
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Der Mage"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Der Mage verursacht über seine Fähigkeiten hohen magischen Schaden, oft als Burst oder im Flächenbereich. Er ist stark im Teamfight und kann mit seinen CC ganze Bereiche kontrollieren. Beispiele: Lux, Veigar, Orianna."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Der Assassine"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Der Assassine will die wichtigsten gegnerischen Ziele (ADC, fragiler Support) in einem Augenblick ausschalten. Er ist sehr mobil und macht enormen Schaden, verlangt aber viel Präzision bei der Ausführung. Beispiele: Zed, Talon, Akali."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Der Mid-Fighter"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Der Mid-Fighter ist weniger klassisch und bringt Robustheit und anhaltenden Schaden mit. Er kann die meisten Mid Laner im Duell schlagen und setzt sich im Split Push leicht durch. Beispiele: Irelia, Sylas, Pantheon."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Der Support-Mid"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Manche Mid-Champions übernehmen eine fast schon Support-artige Rolle: Zonenkontrolle, Peel und Buffs. Sie opfern einen Teil ihres Carry-Potenzials, um dem ganzen Team Nutzen zu bringen. Beispiele: Galio, Twisted Fate, Zilean."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Wave-Management in der Mid Lane"
          }
        ]
      },
      {
        "children": [
          {
            "text": "In der Mid Lane ist Wave-Management noch strategischer als anderswo, denn die Lane ist kurz und die Two-Ways (Durchgänge zu beiden Seiten) machen Dives und Roams schneller. Zu wissen, wann du schnell pushen oder freezen solltest, verändert die Dynamik der Lane komplett."
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
                "text": "Push die Wave, bevor du roamst, damit du während deiner Abwesenheit keine CS verlierst"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Freeze, wenn du unter Druck stehst, um dem Gegner das Farmen nahe an deinem Turm zu verwehren"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Slow Push, um eine große Wave aufzubauen, bevor du losziehst, um ein Objective zu contesten"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "In der Mid Lane können 10 Sekunden, die du dafür brauchst, deine Wave zu töten, bevor du gehst, bei einem Gank den Unterschied machen"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Verlasse nie deine Lane, wenn du unter deinem Turm eine große Wave verlieren würdest"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Roaming: Druck aufbauen"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Roaming (die eigene Lane verlassen, um einer anderen zu helfen) ist die Signature-Fähigkeit des Mid Laners. Durch deine zentrale Position erreichst du Bot Lane oder Top Lane in wenigen Sekunden und schaffst so in anderen Bereichen eine zahlenmäßige Überlegenheit."
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
                "text": "Roame zu der Lane mit dem größten Potenzial für einen Kill oder einen Turm"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Warne deinen Mitspieler per Ping, bevor du roamst, damit er bereit ist"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Push immer deine Wave, bevor du gehst: sonst holt sich der gegnerische Mid mehr, als du gewinnst"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Geh durch den Fluss oder die Jungle, um zu roamen, ohne in der Lane gesehen zu werden"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Ein erfolgreicher Roam = ein Kill oder das gegnerische Flash, ein Turm oder ein Objective. Wenn er fehlschlägt, geh zurück in die Lane"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Der Impact auf der Karte"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Über das Roaming hinaus beeinflusst der Mid Laner die Karte durch den ständigen Druck, den er ausübt. Ein Mid Laner mit Vorsprung zwingt das gegnerische Team, Ressourcen aufzuwenden, um ihn einzudämmen, und schafft so Gelegenheiten für seine Mitspieler."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Nimm an den Kämpfen um Dragon und Baron teil, sobald du deine Wave gepusht hast. Deine Anwesenheit bei diesen Objectives kann entscheidend sein, und sie zu verpassen kann das Spiel kosten, selbst wenn du deine Lane im 1v1 dominierst."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Mid und Late Game"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Im Late Game verliert die Mid Lane an individueller Bedeutung zugunsten des Teamplays. Bleib bei deinem Team, sichere die Objectives und konzentriere dich im Teamfight auf die Ziele, die du zuerst ausschalten musst. Ein Mage oder Assassine mit Vorsprung kann ein Spiel allein carryn, wenn er die richtigen Ziele anvisiert."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Empfohlene Champions für den Einstieg"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Diese Mid-Champions sind leicht zugänglich und ermöglichen dir, die Grundlagen der Rolle zu lernen, ohne von der mechanischen Komplexität erschlagen zu werden:"
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
                "text": "Annie: der einfachste Burst-Mage des Spiels, lehrt dir die Grundlagen von Positionierung und Einsatz der Fähigkeiten."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Lux: große Reichweite, gute Lane-Kontrolle auf Distanz, ihr Ultimate mit großer Reichweite macht richtig Spaß."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Veigar: stackt AP im Laufe der Zeit, du lernst, mit Fähigkeiten zu farmen und geduldig zu spielen, für ein verheerendes Late Game."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Vex: einfacher Mage mit CC durch ihre Furcht, sehr gut gegen mobile Champions, lehrt dir defensives Spiel."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Malzahar: starke Kontrolle, einfache Lane, gute Einführung in die Mage-Rolle mit effizientem Wave-Push."
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Typische Fehler, die du vermeiden solltest"
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
                "text": "Roamen, ohne die Wave gepusht zu haben: du verlierst CS und der gegnerische Mid profitiert davon"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Nie die Lane verlassen: der Mid Laner soll die Karte beeinflussen, nicht nur sein 1v1 gewinnen"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Sinnlos sterben, weil du Solo-Kills erzwingen willst: ein Tod = verlorener Druck auf der ganzen Karte"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Objectives (Dragon, Baron) ignorieren, um weiter zu farmen"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Im Teamfight in der ersten Reihe angreifen: der Mage oder Assassine muss im Hintergrund bleiben"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Die Flussvision vernachlässigen: du musst wissen, wo der gegnerische Jungler ist, bevor du dich positionierst"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Wo fängst du an?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Fang mit Annie oder Lux im Normal-Modus an. Konzentriere dich auf dein Wave-Management, lerne, vor dem Roamen zu pushen, und versuche, pro Spiel mindestens an einem Kampf in einer anderen Lane teilzunehmen. Die Mid Lane ist anspruchsvoll, aber extrem lohnend, sobald man die Grundlagen beherrscht."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Du weißt noch nicht, welcher Mid-Champion zu deinem Spielstil passt? Das RiftMatch-Quiz analysiert deine Persönlichkeit und dein Niveau, um dir die Champions zu empfehlen, die am besten zu dir passen."
          }
        ]
      }
    ]
  },
  {
    "title": "Mid Lane: la guida completa per iniziare e migliorare",
    "slug": "guida-mid-lane-league-of-legends",
    "locale": "it",
    "template": "guide",
    "translationKey": "guide-mid",
    "seo": {
      "description": "Guida completa alla mid lane in League of Legends: ruoli, roaming, impatto sulla mappa, gestione delle wave e i migliori campioni mid per iniziare."
    },
    "content": [
      {
        "children": [
          {
            "text": "La mid lane è la corsia centrale ed è spesso considerata la più influente di tutte. Corta e centrale, permette al mid laner di raggiungere rapidamente qualsiasi zona della mappa. Questo ruolo unisce grandi richieste individuali (duelli, gestione delle wave, meccanica) e un forte impatto collettivo grazie al roaming."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Che cos'è la mid lane?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Il mid laner occupa la corsia centrale, la più corta delle tre lane. La sua posizione gli dà un accesso rapido alla bot lane, alla top lane e a entrambi i lati del fiume, il che ne fa il giocatore più mobile della squadra insieme al jungler. Questa centralità comporta una responsabilità particolare: pesare sulla mappa oltre la propria lane."
          }
        ]
      },
      {
        "children": [
          {
            "text": "È anche una lane molto competitiva, spesso popolata da campioni meccanicamente impegnativi. Mage, assassini, fighter: la varietà di archetipi in mid è più ampia che in qualsiasi altro ruolo, il che la rende stimolante per chi ama imparare nuovi campioni."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Gli archetipi mid"
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Il mage"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Il mage infligge pesanti danni magici con le sue abilità, spesso in burst o ad area. È efficace nei teamfight e può controllare intere zone con i suoi CC. Esempi: Lux, Veigar, Orianna."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "L'assassino"
          }
        ]
      },
      {
        "children": [
          {
            "text": "L'assassino punta a eliminare in un istante i bersagli prioritari nemici (ADC, support fragile). È molto mobile e fa danni enormi, ma richiede molta precisione nell'esecuzione. Esempi: Zed, Talon, Akali."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Il fighter mid"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Meno classico, il fighter mid porta robustezza e danni prolungati. Spesso può duellare con la maggior parte dei mid laner e si impone facilmente nello split push. Esempi: Irelia, Sylas, Pantheon."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Il mid di supporto"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Alcuni campioni mid svolgono un ruolo quasi da support: controllo delle zone, peel e buff. Sacrificano una parte del potenziale da carry per portare utilità a tutta la squadra. Esempi: Galio, Twisted Fate, Zilean."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "La gestione delle wave in mid"
          }
        ]
      },
      {
        "children": [
          {
            "text": "In mid lane la gestione delle wave è ancora più strategica che altrove, perché la lane è corta e i two-ways (passaggi verso i due lati) rendono dive e roam più rapidi. Saper capire quando pushare in fretta o freezare cambia completamente la dinamica della lane."
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
                "text": "Pusha la wave prima di fare roaming, così non perdi CS durante lo spostamento"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Freeza se sei sotto pressione, per negare il farm al nemico vicino alla tua torre"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Slow push per creare una wave grossa prima di partire a contestare un obiettivo"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "In mid, perdere 10 secondi per uccidere la tua wave prima di partire può fare la differenza in un gank"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Non lasciare mai la lane se sotto la tua torre rischi di perdere una wave grossa"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Il roaming: creare pressione"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Il roaming (lasciare la propria lane per aiutarne un'altra) è la competenza distintiva del mid laner. La tua posizione centrale ti permette di raggiungere la bot lane o la top lane in pochi secondi, creando così situazioni di superiorità numerica in altre zone."
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
                "text": "Fai roaming verso la lane con il maggior potenziale di kill o di torre da prendere"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Avvisa il tuo compagno con un ping prima di fare roaming, così sarà pronto"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Pusha sempre la wave prima di partire: altrimenti il mid nemico recupera più di quanto guadagni tu"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Passa dal fiume o dalla jungle per fare roaming senza farti individuare in lane"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Un roam riuscito = un kill o il flash nemico, una torre o un obiettivo. Se fallisce, torna in lane"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "L'impatto sulla mappa"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Oltre al roaming, il mid laner influenza la mappa con la pressione costante che esercita. Un mid laner in vantaggio costringe la squadra avversaria a impiegare risorse per contenerlo, liberando opportunità per i suoi compagni."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Partecipa ai combattimenti per Dragon e Baron appena hai pushato la wave. La tua presenza su questi obiettivi può essere decisiva, e mancarli può costarti la partita anche se domini la tua lane in 1v1."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Mid e late game"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Nel late game la mid lane perde importanza individuale a favore del gioco di squadra. Resta con il tuo team, metti in sicurezza gli obiettivi e concentrati sui bersagli da eliminare per primi nei teamfight. Un mage o un assassino in vantaggio può portare in carry una partita da solo, se sa colpire i bersagli giusti."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Campioni consigliati per iniziare"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Questi campioni mid sono accessibili e ti permettono di imparare i fondamentali del ruolo senza essere sopraffatto dalla complessità meccanica:"
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
                "text": "Annie: il mage burst più semplice del gioco, insegna le basi del posizionamento e dell'uso delle abilità."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Lux: grande gittata, buon controllo della lane a distanza, ultimate a lungo raggio molto soddisfacente."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Veigar: accumula AP col passare del tempo, impari a fare farm con le abilità e a giocare con pazienza per un late game devastante."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Vex: mage semplice con CC grazie alla sua paura, ottima contro i campioni mobili, insegna il gioco difensivo."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Malzahar: forte controllo, lane semplice, buona introduzione al ruolo di mage con un push della wave efficace."
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Errori classici da evitare"
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
                "text": "Fare roaming senza aver pushato la wave: perdi CS e il mid nemico ne approfitta"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Non lasciare mai la lane: il mid laner deve avere impatto sulla mappa, non solo vincere il suo 1v1"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Morire inutilmente provando a fare kill in solitaria: una morte = pressione persa su tutta la mappa"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Ignorare gli obiettivi (Dragon, Baron) per continuare a fare farm"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Attaccare in prima linea nei teamfight: il mage o l'assassino deve restare nelle retrovie"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Trascurare la visione del fiume: devi sapere dove si trova il jungler nemico prima di posizionarti"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Da dove iniziare?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Inizia con Annie o Lux in modalità Normal. Concentrati sulla gestione delle wave, impara a pushare prima di fare roaming e prova a unirti ad almeno un combattimento su un'altra lane per partita. La mid lane è impegnativa ma estremamente gratificante una volta padroneggiate le basi."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Non sai ancora quale campione mid fa per il tuo stile di gioco? Il quiz di RiftMatch analizza la tua personalità e il tuo livello per consigliarti i campioni che fanno più al caso tuo."
          }
        ]
      }
    ]
  },
  {
    "title": "Jungle: der komplette Guide für Einsteiger und Aufsteiger",
    "slug": "jungle-guide-league-of-legends",
    "locale": "de",
    "template": "guide",
    "translationKey": "guide-jungle",
    "seo": {
      "description": "Kompletter Guide zur Jungle in League of Legends: Camps, Clear-Routen, Ganks, Objectives (Dragon, Baron) und die besten Jungle-Champions für den Einstieg."
    },
    "content": [
      {
        "children": [
          {
            "text": "Die Jungle ist wahrscheinlich die komplexeste und einflussreichste Rolle in League of Legends. Der Jungler spielt nicht in einer Lane: Er bewegt sich im Raum zwischen den Lanes, tötet Monster für Gold und Erfahrung und greift in die Lanes ein, um den Ausgang von Duellen zu drehen. Ein guter Jungler kann über das Ergebnis eines ganzen Spiels entscheiden."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Was ist die Jungle?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Der Jungler startet das Spiel in der Jungle, dem bewaldeten Bereich, der die drei Lanes trennt. Dort findest du neutrale Monster-Camps, die du tötest, um Gold und Erfahrung zu sammeln, ohne dich direkt mit einem Gegner in der Lane messen zu müssen. Seine Bewegungsfreiheit ist seine Stärke: Er kann überall auf der Karte auftauchen."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Dafür muss der Jungler gleichzeitig sein Jungle-Farm, das Timing der Objectives, die Ganks und die Vision managen. Es ist eine Rolle, die viel Spielverständnis und die Fähigkeit verlangt, Aktionen zu priorisieren."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Die Camps und der Clear"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Die Jungle ist in mehrere Monster-Camps aufgeteilt, die du regelmäßig farmen musst. Die Respawn-Timer und die optimale Clear-Reihenfolge zu lernen ist grundlegend, um effizient zu bleiben."
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
                "text": "Gromp, Wölfe, Raptoren, Krugs: kleine Camps, schnell zu töten, regelmäßig zu farmen"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Blue Sentinel und Red Brambleback: Buff-Camps (rot und blau), geben für ein paar Minuten mächtige Effekte"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Das blaue Buff (Steingolem) senkt die Cooldowns und regeneriert Mana: Priorität für Mages"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Das rote Buff (Red Brambleback) verlangsamt und fügt zusätzlichen Schaden zu: gut für Fighter"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Starte mit dem Camp, das dir je nach Champion am meisten hilft, und arbeite dann die anderen ab"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Farme die Camps, wenn kein Objective ansteht: sei in der Jungle nie untätig"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Die Objectives: Scuttler, Dragon, Baron"
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Die Spähkrabbe (Scuttler)"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Der Scuttler erscheint alle 3,5 Minuten in jedem Fluss. Ihn zu töten bringt Gold, XP und wertvolle Vision durch eine temporäre Oracle Lens. Er ist oft das erste Objective, das du nach deinen ersten Camps contesten solltest."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Der Dragon"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Der Dragon spawnt nach 5 Minuten im unteren Fluss und respawnt nach seinem Tod alle 5 Minuten. Jeder getötete Dragon gibt deinem ganzen Team einen permanenten Buff. Nach 4 Drachen erhält das Team den Seelendrachen, einen oft entscheidenden Vorteil."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Der Baron Nashor"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Der Baron erscheint nach 20 Minuten im oberen Fluss. Ihn zu töten ist eines der mächtigsten Objectives im Spiel: Er gibt dem ganzen Team den Baron-Buff, der Minions und Schaden verstärkt. Versuche den Baron nur mit numerischem Vorteil oder wenn das gegnerische Team geschwächt ist."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Die Ganks"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Ein Gank ist ein Eingriff in eine Lane, um einem Mitspieler zu helfen, seinen Gegner zu töten oder zu vertreiben. Er ist das wichtigste Werkzeug des Junglers, um Vorteile für sein Team zu schaffen."
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
                "text": "Gank die Lanes, in denen dein Mitspieler die Wave zum gegnerischen Turm gepusht hat: der Gegner ist dann weit weg von seinem Turm"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Komm von den Flanken oder von hinten, um dem Gegner den Rückzug abzuschneiden"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Kommuniziere vor dem Gank per Ping mit deinen Mitspielern"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Vermeide es, eine Lane unter ihrem eigenen Turm zu ganken: der Gegner kann sich leicht in Sicherheit bringen"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Ein fehlgeschlagener Gank kostet Zeit: wenn der Gegner zu defensiv spielt, zieh dich zurück und farme"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Vision und Map Control"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Der Jungler hat Zugang zum gesamten Raum zwischen den Lanes, was ihm eine entscheidende Rolle im Vision-Management gibt. Wenn du Wards in der gegnerischen Jungle platzierst, kannst du den gegnerischen Jungler aufspüren und seine Bewegungen vorausahnen."
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
                "text": "Warde die gegnerische Jungle, um zu sehen, welche Camps der gegnerische Jungler farmen wird"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Zerstöre gegnerische Wards, um einen Gank im Blindflug vorzubereiten"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Kontrolliere die Flussbüsche, bevor du Dragon oder Baron contestest"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Kaufe bei jedem Recall Control Wards: im Late Game sind sie unverzichtbar"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Die Jungler-Typen"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Nicht alle Jungler spielen gleich. Je nach deiner Spielweise passen manche Profile besser zu dir als andere."
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
                "text": "Farm-Jungler (Farmer): priorisiert den Clear und wird stärker, bevor er eingreift"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Gank-Jungler: gleicht einen langsameren Clear durch häufige und aggressive Ganks aus"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Objective-Jungler: maximiert die Kontrolle über Drachen und Baron statt über Kills"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Carry-Jungler: versucht, einen Vorsprung aufzubauen und das Spiel im Late Game im 1v9 zu entscheiden"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Empfohlene Champions für den Einstieg"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Diese Jungler sind leicht zugänglich, robust und verzeihen Timing-Fehler von Einsteigern:"
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
                "text": "Warwick: angeborene Regeneration, ausgezeichnet, um den Clear zu lernen, stark im Duell und beim Gank auf verletzte Ziele."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Amumu: Tank-Engage, einfacher Camp-Clear, verheerendes Ultimate im Teamfight, um Gelegenheiten zu schaffen."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Master Yi: super einfacher Jungle-Carry, lehrt dich, effizient zu farmen und im richtigen Moment einzusteigen."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Hecarim: hohe Mobilität, guter Clear, ermöglicht dir, schnelle Ganks aus unerwarteten Winkeln zu lernen."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Vi: zuverlässiger Engage, starkes CC, lehrt dich, ein Primärziel anzuvisieren und im Kampf einzugreifen."
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Typische Fehler, die du vermeiden solltest"
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
                "text": "Nach einem fehlgeschlagenen Gank untätig in der Base bleiben: geh sofort zurück zum Farmen"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Eine Lane ohne Vision ganken: du riskierst, gecountergankt zu werden"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Objectives zugunsten von Kills vernachlässigen: Dragon und Baron gewinnen Spiele, Kills nicht"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Nur farmen und nie ganken: Jungle-Gold allein reicht nicht"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Camps ungefarmt respawnen lassen: jedes nicht getötete Camp ist verlorenes Gold und verlorene XP"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Den Baron versuchen, während das ganze gegnerische Team lebt: oft eine tödliche Falle"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Wo fängst du an?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Fang mit Warwick oder Amumu an, um die Grundlagen zu lernen. Konzentriere dich auf einen sauberen Clear deiner ersten 6 Camps und suche dann einen einfachen Gank auf der am weitesten gepushten Lane. Die Jungle verlangt Übung: lass dich nicht entmutigen, wenn deine ersten Spiele schwierig sind."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Du weißt noch nicht, welcher Jungler zu deinem Spielstil passt? Das RiftMatch-Quiz analysiert deine Persönlichkeit und dein Niveau, um dir die Champions zu empfehlen, die am besten zu dir passen."
          }
        ]
      }
    ]
  },
  {
    "title": "Jungle: la guida completa per iniziare e migliorare",
    "slug": "guida-jungle-league-of-legends",
    "locale": "it",
    "template": "guide",
    "translationKey": "guide-jungle",
    "seo": {
      "description": "Guida completa alla jungle in League of Legends: camp, percorsi di clear, gank, obiettivi (dragon, baron) e i migliori jungler campioni per iniziare."
    },
    "content": [
      {
        "children": [
          {
            "text": "La jungle è probabilmente il ruolo più complesso e di maggior impatto di League of Legends. Il jungler non gioca in una lane: si muove nello spazio tra le corsie, uccide mostri per guadagnare oro ed esperienza e interviene nelle lane per ribaltare l'esito dei duelli. Un buon jungler può decidere il risultato di un'intera partita."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Che cos'è la jungle?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Il jungler inizia la partita nella jungle, la zona boscosa che separa le tre lane. Qui trova i camp di mostri neutrali che uccide per accumulare oro ed esperienza, senza doversi scontrare direttamente con un nemico in lane. La sua libertà di movimento è la sua forza: può apparire ovunque sulla mappa."
          }
        ]
      },
      {
        "children": [
          {
            "text": "In cambio, il jungler deve gestire contemporaneamente il farm della jungle, il timing degli obiettivi, i gank e la visione. È un ruolo che richiede una grande capacità di leggere il gioco e di dare priorità alle proprie azioni."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "I camp e il clear"
          }
        ]
      },
      {
        "children": [
          {
            "text": "La jungle è divisa in vari camp di mostri che devi farmare con regolarità. Imparare i timer di respawn e l'ordine di clear ottimale è fondamentale per restare efficiente."
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
                "text": "Gromp, Lupi, Raptor, Krug: camp piccoli, rapidi da uccidere, da farmare con regolarità"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Blue Sentinel e Red Brambleback: camp buff (rosso e blu), danno effetti potenti per qualche minuto"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Il buff blu (Blue Sentinel) riduce i cooldown e rigenera mana: priorità per i mage"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Il buff rosso (Red Brambleback) rallenta e infligge danni aggiuntivi: ottimo per i fighter"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Inizia dal camp che ti aiuta di più in base al tuo campione, poi concatena gli altri"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Farma i camp quando non hai un obiettivo immediato: non restare mai inattivo in jungle"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Gli obiettivi: Scuttler, Dragon, Baron"
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Il Granchio delle Rift (Scuttler)"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Lo Scuttler compare in ogni fiume ogni 3,5 minuti. Ucciderlo dà oro, XP e un'area di visione preziosa grazie a una Oracle Lens temporanea. È spesso il primo obiettivo da contestare dopo i tuoi primi camp."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Il Dragon"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Il Dragon appare nel fiume inferiore a 5 minuti e riappare ogni 5 minuti dopo la sua morte. Ogni Dragon ucciso dà un buff permanente a tutta la tua squadra. Dopo 4 draghi, la squadra ottiene il Drago Anima, un vantaggio spesso decisivo."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Il Baron Nashor"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Il Baron compare a 20 minuti nel fiume superiore. Ucciderlo è uno degli obiettivi più potenti del gioco: dà il buff Baron a tutta la squadra, potenziando i minion e i danni. Tenta il Baron solo con un vantaggio numerico o quando la squadra avversaria è indebolita."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "I gank"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Un gank è un intervento in lane per aiutare un compagno a uccidere o a respingere il suo avversario. È lo strumento principale del jungler per creare vantaggi per la sua squadra."
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
                "text": "Gankka le lane in cui il tuo compagno ha pushato la wave verso la torre nemica: il nemico sarà lontano dalla sua torre"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Arriva dai fianchi o da dietro per tagliare la ritirata al nemico"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Comunica con i tuoi compagni tramite ping prima di gankkare"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Evita di gankkare una lane sotto la sua torre: il nemico può rifugiarsi facilmente"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Un gank fallito costa tempo: se il nemico è troppo difensivo, ritirati e fai farm"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "La visione e il controllo della mappa"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Il jungler ha accesso a tutto lo spazio tra le lane, il che gli dà un ruolo cruciale nella gestione della visione. Piazzare ward nella jungle nemica ti permette di rintracciare il jungler avversario e di anticiparne i movimenti."
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
                "text": "Metti ward nella jungle avversaria per vedere quali camp farmerà il jungler nemico"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Distruggi le ward nemiche per preparare un gank alla cieca"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Controlla i cespugli del fiume prima di contestare Dragon o Baron"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Compra Control Ward a ogni recall: sono essenziali nel late game"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "I tipi di jungler"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Non tutti i jungler hanno lo stesso stile di gioco. In base al tuo modo di giocare, alcuni profili ti si addicono più di altri."
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
                "text": "Jungler farm (farmer): dà priorità al clear e diventa potente prima di intervenire"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Jungler gank: compensa un clear più lento con gank frequenti e aggressivi"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Jungler obiettivo: massimizza il controllo di draghi e Baron invece dei kill"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Jungler carry: cerca di prendere vantaggio e di vincere la partita in 1v9 nel late game"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Campioni consigliati per iniziare"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Questi jungler sono accessibili, robusti e perdonano gli errori di timing dei principianti:"
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
                "text": "Warwick: rigenerazione innata, eccellente per imparare il clear, forte nei duelli e nei gank su bersagli feriti."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Amumu: tank engage, clear dei camp semplice, ultimate devastante nei teamfight per creare opportunità."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Master Yi: carry jungle semplicissimo, insegna a fare farm in modo efficiente e a entrare al momento giusto."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Hecarim: grande mobilità, buon clear, permette di imparare gank rapidi da angolazioni inaspettate."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Vi: engage affidabile, CC potente, insegna a puntare una priorità e a intervenire nei combattimenti."
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Errori classici da evitare"
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
                "text": "Restare inattivo nella base dopo un gank fallito: torna subito a fare farm"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Gankkare una lane senza visione: rischi di subire un contro-gank"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Trascurare gli obiettivi a favore dei kill: Dragon e Baron vincono le partite, i kill no"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Fare solo farm senza mai gankkare: l'oro della jungle da solo non basta"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Lasciare i camp senza farmarli: ogni camp non ucciso è oro ed XP persi"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Tentare il Baron con tutta la squadra nemica viva: spesso è una trappola fatale"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Da dove iniziare?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Inizia con Warwick o Amumu per imparare le basi. Concentrati su un clear pulito dei tuoi primi 6 camp, poi cerca un gank semplice sulla lane più pushata. La jungle richiede pratica: non scoraggiarti se le tue prime partite sono complicate."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Non sai ancora quale jungler fa per il tuo stile di gioco? Il quiz di RiftMatch analizza la tua personalità e il tuo livello per consigliarti i campioni che fanno più al caso tuo."
          }
        ]
      }
    ]
  },
  {
    "title": "Toplane: der komplette Guide für Einsteiger und Aufsteiger",
    "slug": "toplane-guide-league-of-legends",
    "locale": "de",
    "template": "guide",
    "translationKey": "guide-top",
    "seo": {
      "description": "Kompletter Guide zur Toplane in League of Legends: Rollen, Split-Push-Mechaniken, Wave-Management, Teleport und die besten Champions für den Einstieg."
    },
    "content": [
      {
        "children": [
          {
            "text": "Die Toplane ist die obere Lane der Karte und wird oft als „Insel“ der Einzelkämpfer bezeichnet. Sie ist eine lange Lane, isoliert vom Rest des Teams, und begünstigt Duellisten: Champions, die ihrem Gegner minutenlang ohne fremde Hilfe die Stirn bieten können. Robustheit, Wave-Management und Eigenständigkeit sind die Schlüsselbegriffe für jeden Toplaner."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Was ist die Toplane?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Die Toplane ist die obere Lane, die durch die Jungle vom Rest der Karte getrennt ist. Der Toplaner spielt die gesamte Laning-Phase über fast allein und hat kaum Interaktion mit seinem Team. Diese relative Isolation macht die Rolle eigenständig: Du musst deine Lane selbst gewinnen und Druck aufbauen können, ohne auf die Hilfe deines Junglers zu warten."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Als Ausgleich für diese Einsamkeit hat der Toplaner oft einen starken Impact im Lategame: Ein guter Top mit Vorsprung kann das gegnerische Team zwingen, sich zwischen der Verteidigung eines Turms und dem Kampf gegen den Rest deines Teams zu entscheiden. Das ist das Prinzip des Split Push."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Die Archetypen des Toplaners"
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Der Tank"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Der Tank absorbiert Schaden für sein Team, initiiert Teamfights und beschützt seine Carries. Er ist schwer zu töten und bleibt auch ohne großen Goldvorsprung relevant. Beispiele: Malphite, Ornn, Cho'Gath."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Der Fighter (Bruiser)"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Halb Tank, halb Carry: Der Fighter kombiniert Robustheit mit ordentlichem Schaden. Er kann sowohl Duelle gewinnen als auch im Teamfight die Front halten. Beispiele: Darius, Sett, Garen."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Der Split Pusher"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Sein Ziel ist es, gegnerische Türme allein zu pushen und so das Gegnerteam zu zwingen, mehrere Spieler zu schicken, um ihn aufzuhalten. Dadurch entsteht Platz für sein Team. Beispiele: Nasus (Late), Fiora, Tryndamere."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Wave-Management"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Wave-Management ist die wichtigste Fähigkeit in der Toplane. Zu wissen, wann du farmen, wann du pushen und wann du die Wave freezen solltest, entscheidet maßgeblich über den Ausgang deiner Lane."
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
                "text": "Freeze: Halte die Wave nahe an deinem Turm, damit sich der Gegner exponieren und unter Druck farmen muss"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Slow Push: Lass die Wave langsam anwachsen, um vor einem Recall oder einem Fight eine große Welle zu bauen"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Fast Push: Räume die Wave schnell, um im Jungle zu helfen oder ein Objective zu holen"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Lass niemals Minions unter deinem Turm sterben: Jeder CS zählt"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Beobachte die gegnerische Wave: Ist sie größer, wird sie bald auf dich zupushen"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Der Teleport"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Die meisten Toplaner nehmen den Zauber Teleport (TP). Er ist ein entscheidendes Werkzeug, das deine Isolation ausgleicht, indem du schnell zu deinen Teammates kommst oder nach einem Recall wieder in die Lane zurückkehrst, ohne CS zu verlieren."
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
                "text": "Nutze den TP, um einem Fight in der Botlane beizutreten, wenn du deine Lane gut gefarmt hast"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "TP auf eine gegnerische Ward, um den Gegner von hinten zu überraschen"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Verschwende deinen TP nicht, um nach einem normalen Recall in die Lane zurückzukehren: Lauf, wenn die Base nah ist"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Im Lategame erlaubt dir der TP, an allen Objectives teilzunehmen, ohne deine Lane zu verlassen"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Der Split Push"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Der Split Push ist eine fortgeschrittene Strategie: Du pushst allein eine Lane, während der Rest deines Teams ein Objective an anderer Stelle bedroht. Der Gegner ist gezwungen, seine Kräfte aufzuteilen."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Um effektiv zu split pushen, musst du stark genug sein, um die gegen dich geschickten Champions im 1v1 zu schlagen, oder zumindest lange genug zu überleben, damit dein Team den Zahlenvorteil auf der anderen Seite der Karte ausnutzen kann."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Mid- und Lategame"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Schließe dich im Midgame deinem Team für die wichtigen Objectives an (Drache, Baron, Mid-Türme). Nutze deinen Teleport, um keinen wichtigen Fight zu verpassen. Im Lategame kann ein Tank oder Fighter mit Vorsprung sein Team tragen, indem er Teamfights initiiert oder den gegnerischen Schaden tankt."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Empfohlene Champions für den Einstieg"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Diese Champions verzeihen Anfängerfehler und helfen dir, die Grundlagen der Rolle zu lernen:"
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
                "text": "Garen: ultra-einfaches Kit, sehr widerstandsfähig, kein Mana, ausgezeichnet, um Dueling und Wave-Management zu lernen."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Malphite: solider Tank, sein Initiations-Ult ist leicht zu erkennen, aber sehr effektiv. Gut, um das Engagen zu lernen."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Darius: dominanter Fighter im Duell, lehrt dich, wie wichtig Distanzkontrolle und Trades sind."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Nasus: Lategame-Champion, lehrt dich, geduldig zu farmen und die Wave lange zu managen."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Sett: intuitiver Bruiser, sehr widerstandsfähig, ein guter Einstieg in die Fighter-Rolle im Teamfight."
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Klassische Fehler, die du vermeiden solltest"
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
                "text": "Unnötigen Kills hinterherjagen und dabei CS verlieren: Farm ist rentabler als die meisten Kills"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Den TP nicht klug einsetzen: Er ist dein wichtigstes Werkzeug für Impact auf der Karte"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Sich in die Base teleportieren, um in die Lane zurückzukehren, obwohl man einfach laufen könnte"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Im Mid-/Lategame in der Toplane bleiben, wenn das Team um den Baron kämpft: Tritt dem Fight bei"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Wave-Management vernachlässigen: je nach Situation weder freezen noch slow pushen"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Wo fängst du an?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Fang mit Garen oder Malphite an, um dich an die Toplane zu gewöhnen. Ziel: 80 CS nach 10 Minuten. Konzentriere dich auf dein Wave-Management und lerne, deinen Teleport im richtigen Moment einzusetzen. Die Toplane belohnt Geduld und Konstanz viel mehr als spektakuläre Plays."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Du weißt noch nicht, welcher Top-Champion zu deinem Spielstil passt? Das RiftMatch-Quiz analysiert deine Persönlichkeit und dein Level, um dir die Champions zu empfehlen, die am besten zu dir passen."
          }
        ]
      }
    ]
  },
  {
    "title": "Top lane: la guida completa per iniziare e migliorare",
    "slug": "guida-top-lane-league-of-legends",
    "locale": "it",
    "template": "guide",
    "translationKey": "guide-top",
    "seo": {
      "description": "Guida completa alla top lane in League of Legends: ruoli, meccaniche di split push, gestione della wave, teletrasporto e migliori campioni per iniziare."
    },
    "content": [
      {
        "children": [
          {
            "text": "La top lane è il corridoio superiore della mappa, spesso soprannominata «l'isola» dei giocatori solitari. È una lane lunga, isolata dal resto del team, che favorisce i duellanti: quei campioni capaci di tenere testa al loro avversario per lunghi minuti senza aiuti esterni. Resistenza, gestione della wave e autonomia sono le parole chiave del top laner."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Cos'è la top lane?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "La top lane è la corsia in alto, separata dal resto della mappa dalla jungle. Il top laner gioca quasi da solo per tutta la fase di laning, con poche interazioni con il suo team. Questo relativo isolamento ne fa un ruolo autonomo: devi essere in grado di vincere la tua lane da solo e di creare pressione senza aspettare l'aiuto del tuo jungler."
          }
        ]
      },
      {
        "children": [
          {
            "text": "In cambio di questa solitudine, il top laner ha spesso un impatto forte a fine partita: un buon top in vantaggio può costringere il team avversario a scegliere tra difendere una torre e affrontare il resto della tua squadra. È il principio dello split push."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Gli archetipi del top laner"
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Il tank"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Il tank assorbe i danni per il suo team, inizia i teamfight e protegge i suoi carry. È difficile da uccidere e resta rilevante anche senza un grosso vantaggio in oro. Esempi: Malphite, Ornn, Cho'Gath."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Il fighter (bruiser)"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Metà tank e metà carry, il fighter unisce resistenza e danni discreti. Può sia vincere i duelli sia reggere la prima linea nei teamfight. Esempi: Darius, Sett, Garen."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Lo split pusher"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Il suo obiettivo è spingere da solo le torri avversarie per costringere il team nemico a mandare più giocatori a fermarlo, liberando così spazio per la sua squadra. Esempi: Nasus (late), Fiora, Tryndamere."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "La gestione della wave"
          }
        ]
      },
      {
        "children": [
          {
            "text": "La gestione della wave è la competenza più importante in top lane. Sapere quando fare farm, quando pushare e quando freezare la wave determina in gran parte l'esito della tua lane."
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
                "text": "Freeze: mantieni la wave vicino alla tua torre per costringere il nemico a esporsi e a fare farm sotto pressione"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Slow push: lascia crescere lentamente la wave per creare un'ondata enorme prima di un recall o di un fight"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Fast push: svuota rapidamente la wave per andare ad aiutare in jungle o prendere un obiettivo"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Non lasciare mai morire dei minion sotto la tua torre: ogni CS conta"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Osserva la wave nemica: se è più grande, presto spingerà verso di te"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Il Teletrasporto"
          }
        ]
      },
      {
        "children": [
          {
            "text": "La maggior parte dei top laner porta l'incantesimo Teletrasporto (TP). È uno strumento cruciale che compensa il tuo isolamento, permettendoti di raggiungere rapidamente i compagni o di tornare in lane dopo un recall senza perdere CS."
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
                "text": "Usa il TP per unirti a un fight in bot lane se hai fatto bene farm nella tua lane"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "TP su una ward nemica per sorprendere l'avversario alle spalle"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Non sprecare il TP per tornare in lane dopo un recall standard: vai a piedi se la base è vicina"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Nel late game il TP ti permette di partecipare a tutti gli obiettivi senza lasciare la tua lane"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Lo split push"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Lo split push è una strategia avanzata che consiste nello spingere da solo una lane mentre il resto del tuo team minaccia un obiettivo altrove. Il nemico è costretto a dividere le proprie forze."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Per fare split push in modo efficace devi essere abbastanza forte da battere in 1v1 i campioni mandati contro di te, o almeno sopravvivere abbastanza a lungo perché il tuo team sfrutti il vantaggio numerico dall'altra parte della mappa."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Mid e late game"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Nel mid game raggiungi il tuo team per gli obiettivi principali (Drago, Baron, torri centrali). Usa il Teletrasporto per non perdere nessun fight importante. Nel late game un tank o un fighter in vantaggio può portare in spalla la sua squadra iniziando i teamfight o tankando i danni nemici."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Campioni consigliati per iniziare"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Questi campioni perdonano gli errori dei principianti e ti permettono di imparare le basi del ruolo:"
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
                "text": "Garen: kit semplicissimo, molto resistente, senza mana, eccellente per imparare il dueling e la gestione della wave."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Malphite: tank solido, ultimate d'ingaggio telegrafata ma molto efficace. Ottimo per imparare l'engage."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Darius: fighter dominante nei duelli, insegna l'importanza della gestione della distanza e dei trade."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Nasus: campione da late game, ti insegna a fare farm con pazienza e a gestire la wave a lungo."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Sett: bruiser intuitivo, molto resistente, una buona introduzione al ruolo di fighter nei teamfight."
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Errori classici da evitare"
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
                "text": "Cercare kill inutili perdendo CS: il farm rende più della maggior parte delle kill"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Non usare il TP in modo intelligente: è il tuo principale strumento per avere impatto sulla mappa"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Teletrasportarsi in base per tornare in lane quando si potrebbe semplicemente camminare"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Restare in top lane nel mid/late game quando il team combatte per il Baron: unisciti al fight"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Trascurare la gestione della wave: non fare né freeze né slow push a seconda della situazione"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Da dove iniziare?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Inizia con Garen o Malphite per prendere confidenza con la top lane. Punta a 80 CS a 10 minuti, concentrati sulla gestione della wave e impara a usare il Teletrasporto al momento giusto. La top lane premia la pazienza e la regolarità molto più delle giocate spettacolari."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Non sai ancora quale campione top si adatta al tuo modo di giocare? Il quiz di RiftMatch analizza la tua personalità e il tuo livello per consigliarti i campioni che fanno più per te."
          }
        ]
      }
    ]
  },
  {
    "title": "Support: der komplette Guide für Einsteiger und Aufsteiger",
    "slug": "support-guide-league-of-legends",
    "locale": "de",
    "template": "guide",
    "translationKey": "guide-support",
    "seo": {
      "description": "Alles über die Support-Rolle in League of Legends: Support-Typen, Vision, Laning-Phase, Mid-/Lategame und die besten Champions für den Einstieg."
    },
    "content": [
      {
        "children": [
          {
            "text": "Der Support ist eine der vielseitigsten und einflussreichsten Rollen in League of Legends. Von Anfängern oft unterschätzt, ist er in Wirklichkeit die Säule des Teams: Er initiiert Kämpfe, beschützt seine Teammates und kontrolliert die Vision auf der ganzen Karte. Gut Support zu spielen bedeutet, das Spiel zu lesen und sich ständig anzupassen."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Was ist der Support?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Der Support spielt in der Botlane an der Seite des ADC. Seine Hauptaufgabe in der Anfangsphase ist es, seinen ADC zu beschützen und ihm zu helfen, sicher zu farmen, und gleichzeitig nach Gelegenheiten zu suchen, Druck auf die gegnerische Lane auszuüben. Anders als die anderen Rollen farmt der Support keine Minions: Er generiert Gold über ein spezielles Support-Item und durch Assists."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Im Verlauf des Spiels dehnt der Support seinen Einfluss auf die ganze Karte aus: Er platziert Wards, roamt zu anderen Lanes, nimmt an Objectives teil und leitet die Teamfights. Diese Rolle verlangt ein hervorragendes Spielverständnis und ständige Kommunikation."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Die Support-Typen"
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Der Engage-Support"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Er initiiert Kämpfe und erzwingt für sein Team günstige Fights. Robust und schwer zu ignorieren, stürzt er sich ins Getümmel, um Situationen mit Zahlenüberlegenheit zu schaffen. Beispiele: Leona, Nautilus, Blitzcrank."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Der Peel-Support"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Er beschützt seinen ADC oder seine Carries, indem er Bedrohungen eliminiert, die sich ihnen nähern. Er nutzt seine CC und Verlangsamungen, um Assassinen den Zugang zu seinen Verbündeten zu verwehren. Beispiele: Janna, Lulu, Thresh (Hybrid)."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Der Poke-Support"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Er schikaniert den Gegner ununterbrochen aus der Distanz, um ihn zum Recall oder zu vorsichtigem Spiel zu zwingen. Effektiv, um Lane-Dominanz aufzubauen, ohne unnötige Risiken einzugehen. Beispiele: Lux, Zyra, Brand."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Der Enchanter"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Er verstärkt die Kraft seiner Verbündeten durch Heilung, Schilde und Buffs. Er will nicht initiieren, sondern seine Carries im Fight nahezu unbesiegbar machen. Beispiele: Soraka, Nami, Karma."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Wards und Vision"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Vision zu kontrollieren heißt, die Karte zu kontrollieren. Als Support gehört es das ganze Spiel über zu deinen Hauptaufgaben, Wards zu platzieren und zu zerstören."
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
                "text": "Platziere Vision Wards (pinke Wards) ab Level 1 in den wichtigen Büschen deiner Lane"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Kaufe bei jedem Recall Control Wards: Das ist eine lohnende Investition"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Nutze deine Stealth Ward (gelbe Ward), um die Zugangswege aus der Jungle abzudecken"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Warde im Midgame die Objectives (Drache, Baron), bevor sie verfügbar sind"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Zerstöre gegnerische Wards, um dem Gegner Informationen zu entziehen"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Die Laning-Phase"
          }
        ]
      },
      {
        "children": [
          {
            "text": "In der Botlane besteht deine Aufgabe darin, ideale Bedingungen zu schaffen, damit dein ADC effizient farmen kann. Schikaniere die Gegner, wenn es sicher ist, engage, wenn dein ADC in Position ist, und beschütze ihn vorrangig, sobald eine Bedrohung auftaucht."
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
                "text": "Bleib zwischen dem Gegner und deinem ADC, um Schaden oder CC zu absorbieren"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Engage nur, wenn dein ADC in Reichweite ist, um dem Kampf folgen zu können"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Manage deine Ressourcen (Mana, Cooldowns): Verschwende deine Zauber nicht"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Kommuniziere vor jedem Engage per Ping mit deinem ADC"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Recall, sobald du genug Gold für deine ersten wichtigen Items hast"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Mid- und Lategame"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Nach der Laning-Phase muss der Support seinen Einfluss auf die ganze Karte ausdehnen. Schließ dich deinem Jungler für Objectives an, roame, um Lanes in Schwierigkeiten zu helfen, und halte weiter die Vision in den strategischen Zonen aufrecht."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Positioniere dich im Teamfight entsprechend deinem Archetyp: vorne, wenn du Engage bist, hinten bei deinen Carries, wenn du Enchanter oder Peel bist. Dein Überleben ist entscheidend: Ein toter Support kann seinem Team nicht helfen."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Empfohlene Champions für den Einstieg"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Manche Supports sind zum Erlernen der Rolle zugänglicher als andere. Hier sind die besten Einstiegspunkte:"
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
                "text": "Soraka: reiner Enchanter, starke Heilung, sehr leicht zu erlernen. Perfekt, um die Rolle des Beschützers zu verstehen."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Lux: Poke und CC aus der Distanz, gut, um zu lernen, Skillshots zu treffen, ohne sich zu exponieren."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Blitzcrank: One-Trick-Spaß, sein Haken ist game-changing und lehrt dich, wie wichtig Engages sind."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Leona: solider Tank-Engage, intuitives Kit, ideal, um zu lernen, Kämpfe zu initiieren."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Janna: hervorragend, um Peel und den Umgang mit gegnerischen Positionen zu lernen."
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Klassische Fehler, die du vermeiden solltest"
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
                "text": "Zu weit von deinem ADC entfernt sein: Du kannst ihn nicht beschützen, wenn du am anderen Ende der Lane stehst"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Engagen, ohne zu prüfen, ob dein ADC in Position ist, um zu folgen"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Vergessen, Wards zu platzieren: Vision ist deine Hauptverantwortung"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Versuchen, Minions zu farmen: Jeder Minion, den du deinem ADC wegnimmst, kostet ihn Gold"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Das ganze Spiel in der Botlane bleiben: Roame und hilf deinen anderen Lanes im Midgame"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Alle Schutzzauber präventiv einsetzen: Heb sie dir für die kritischen Momente auf"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Wo fängst du an?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Fang mit Soraka oder Lux im Normal-Modus an, um die Grundlagen der Rolle zu meistern. Konzentriere dich auf das Platzieren von Wards, den Schutz deines ADC und deine Positionierung im Teamfight. Versuch nicht, spektakuläre Plays zu machen: Sicher und nützlich zu spielen ist schon sehr effektiv."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Du weißt noch nicht, welcher Support zu deinem Spielstil passt? Das RiftMatch-Quiz analysiert deine Persönlichkeit und dein Level, um dir die Champions zu empfehlen, die am besten zu dir passen."
          }
        ]
      }
    ]
  },
  {
    "title": "Support: la guida completa per iniziare e migliorare",
    "slug": "guida-support-league-of-legends",
    "locale": "it",
    "template": "guide",
    "translationKey": "guide-support",
    "seo": {
      "description": "Tutto sul ruolo di support in League of Legends: tipi di support, visione, fase di laning, mid/late game e migliori campioni per iniziare."
    },
    "content": [
      {
        "children": [
          {
            "text": "Il support è uno dei ruoli più versatili e di maggiore impatto di League of Legends. Spesso sottovalutato dai principianti, in realtà è il pilastro del team: è lui che inizia i combattimenti, protegge i compagni e controlla la visione su tutta la mappa. Giocare bene il support significa imparare a leggere il gioco e ad adattarsi continuamente."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Cos'è il support?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Il support gioca in bot lane al fianco dell'ADC. Il suo ruolo principale a inizio partita è proteggere e aiutare il suo ADC a fare farm in sicurezza, cercando al tempo stesso occasioni per mettere pressione alla lane avversaria. A differenza degli altri ruoli, il support non fa farm dei minion: genera oro tramite un oggetto di supporto dedicato e grazie agli assist."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Con il passare della partita, il support estende la sua influenza a tutta la mappa: piazza ward, fa roaming verso altre lane, partecipa agli obiettivi e guida i teamfight. È un ruolo che richiede un'ottima lettura del gioco e una comunicazione costante."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "I tipi di support"
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Il support engage"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Inizia i combattimenti e forza i fight favorevoli per il suo team. Robusto e difficile da ignorare, si tuffa nella mischia per creare situazioni di superiorità numerica. Esempi: Leona, Nautilus, Blitzcrank."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Il support peel"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Protegge il suo ADC o i suoi carry eliminando le minacce che si avvicinano. Usa i suoi CC e i rallentamenti per impedire agli assassini di raggiungere i suoi alleati. Esempi: Janna, Lulu, Thresh (ibrido)."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Il support poke"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Molesta di continuo il nemico a distanza per costringerlo al recall o a giocare con prudenza. Efficace per stabilire il dominio della lane senza correre rischi inutili. Esempi: Lux, Zyra, Brand."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "L'enchanter"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Amplifica la potenza dei suoi alleati grazie a cure, scudi e buff. Non cerca di iniziare, ma di rendere i suoi carry quasi imbattibili nei fight. Esempi: Soraka, Nami, Karma."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Le ward e la visione"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Controllare la visione significa controllare la mappa. Come support, piazzare e distruggere ward è una delle tue responsabilità principali per tutta la partita."
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
                "text": "Piazza Vision Ward (ward rosa) nei cespugli chiave della tua lane fin dal livello 1"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Compra Control Ward a ogni recall: è un investimento redditizio"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Usa la tua Stealth Ward (ward gialla) per coprire gli angoli d'approccio dalla jungle"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Nel mid game, piazza ward sugli obiettivi (Drago, Baron) prima che siano disponibili"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Distruggi le ward nemiche per privare l'avversario di informazioni"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "La fase di laning"
          }
        ]
      },
      {
        "children": [
          {
            "text": "In bot lane il tuo ruolo è creare le condizioni ideali perché il tuo ADC faccia farm in modo efficiente. Molesta i nemici quando è sicuro, ingaggia quando il tuo ADC è in posizione e proteggilo come priorità non appena si presenta una minaccia."
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
                "text": "Resta tra il nemico e il tuo ADC per assorbire danni o CC"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Ingaggia solo quando il tuo ADC è a portata per seguire il combattimento"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Gestisci le tue risorse (mana, cooldown): non sprecare gli incantesimi"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Comunica con il tuo ADC tramite ping prima di ogni engage"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Fai recall appena hai abbastanza oro per i tuoi primi item chiave"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Mid e late game"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Finita la fase di laning, il support deve estendere la sua influenza a tutta la mappa. Raggiungi il tuo jungler per gli obiettivi, fai roaming per aiutare le lane in difficoltà e continua a mantenere la visione nelle zone strategiche."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Nei teamfight, posizionati in base al tuo archetipo: davanti se sei engage, dietro vicino ai tuoi carry se sei enchanter o peel. La tua sopravvivenza è essenziale: un support morto non può aiutare il suo team."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Campioni consigliati per iniziare"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Alcuni support sono più accessibili di altri per imparare il ruolo. Ecco i migliori punti di partenza:"
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
                "text": "Soraka: enchanter puro, cure potenti, semplicissima da prendere in mano. Perfetta per capire il ruolo di guardiano."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Lux: poke e CC a distanza, ottima per imparare a centrare gli skillshot senza esporsi."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Blitzcrank: one-trick divertente, il suo uncino è game-changing e insegna l'importanza degli engage."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Leona: solido tank engage, kit intuitivo, ideale per imparare a iniziare i combattimenti."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Janna: eccellente per imparare il peel e la gestione delle posizioni nemiche."
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Errori classici da evitare"
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
                "text": "Ritrovarsi troppo lontani dal proprio ADC: non puoi proteggerlo se sei all'altro capo della lane"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Ingaggiare senza verificare che il tuo ADC sia in posizione per seguire"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Dimenticare di piazzare ward: la visione è la tua responsabilità principale"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Provare a fare farm dei minion: ogni minion rubato al tuo ADC gli costa oro"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Restare in bot lane per tutta la partita: fai roaming e aiuta le altre lane nel mid game"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Usare tutti i tuoi incantesimi di protezione in via preventiva: tienili per i momenti critici"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Da dove iniziare?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Inizia con Soraka o Lux in modalità Normal per padroneggiare le basi del ruolo. Concentrati sul piazzare ward, sulla protezione del tuo ADC e sui tuoi posizionamenti nei teamfight. Non cercare di fare giocate spettacolari: giocare sicuro e utile è già molto efficace."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Non sai ancora quale support si adatta al tuo stile di gioco? Il quiz di RiftMatch analizza la tua personalità e il tuo livello per consigliarti i campioni che fanno più per te."
          }
        ]
      }
    ]
  },
  {
    "title": "ADC: der komplette Guide für Einsteiger und Aufsteiger",
    "slug": "adc-guide-league-of-legends",
    "locale": "de",
    "template": "guide",
    "translationKey": "guide-adc",
    "seo": {
      "description": "Alles über die ADC-Rolle in League of Legends: Definition, Mechaniken, Laning-Phase, Positionierung im Teamfight und die besten Champions für den Einstieg."
    },
    "content": [
      {
        "children": [
          {
            "text": "Der ADC, kurz für Attack Damage Carry, ist eine der beliebtesten und anspruchsvollsten Rollen in League of Legends. Als Scharfschütze des Teams verursacht er konstanten Schaden auf Distanz und wird im Lategame zum offensiven Monster. Doch um dahin zu kommen, musst du eine heikle Spielphase überleben und ganz bestimmte Mechaniken beherrschen."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Was ist ein ADC?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "ADC steht für Attack Damage Carry: ein Champion, der das Team (carry) mit seinem physischen Schaden (AD = Attack Damage) trägt. Er ist der Schütze des Teams: Er greift aus der Distanz an, verursacht kontinuierlichen Schaden an Zielen und zerstört sowohl gegnerische Champions als auch Strukturen (Türme, Inhibitoren, Nexus)."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Der ADC spielt in der Bot-Lane (untere Lane) zusammen mit einem Support. Der Support beschützt den ADC während der Laning-Phase, also der Phase zu Spielbeginn, in der man stärker wird, damit er in Ruhe farmen und Gold sammeln kann."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Warum ADC spielen?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Diese Rolle hat aus mehreren Gründen ihren Reiz:"
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
                "text": "Du verursachst während des gesamten Spiels konstant Schaden"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Im Lategame kann ein guter ADC ein ganzes Team in wenigen Sekunden vernichten"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Du kannst oft allein über den Ausgang eines Kampfes oder einer Belagerung entscheiden"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Farmen und Positionierung sind lohnende Fähigkeiten, die man meistern kann"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Das ADC-Roster ist vielfältig: Sniper, Hypercarries, Marksman-Magier…"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Die wichtigsten Stats des ADC"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Anders als Tanks oder Magier ist der ADC auf ganz bestimmte Stats angewiesen, um effektiv zu sein:"
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Attack Speed (Angriffsgeschwindigkeit)"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Die Angriffsgeschwindigkeit bestimmt, wie oft du pro Sekunde zuschlägst. Je höher sie ist, desto höher ist dein Schaden pro Sekunde (DPS). Sie ist die wichtigste Stat der ADCs im Mid und Late Game."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Critical Strike (kritischer Treffer)"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Kritische Treffer vervielfachen deinen Grundschaden (normalerweise x1.75). Die meisten ADC-Builds zielen mit Items wie Infinity Edge oder Galeforce auf 100% Crit-Chance in der Spielmitte ab."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Attack Damage (AD)"
          }
        ]
      },
      {
        "children": [
          {
            "text": "AD erhöht direkt deinen Schaden pro Angriff. Zusammen mit Crit und Attack Speed ist es das Trio, das die Stärke eines ADCs ausmacht."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Armor Penetration (Rüstungsdurchdringung)"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Im Lategame haben die Gegner viel Rüstung. Durchdringung (Lord Dominik's Regards, Mortal Reminder) hält deinen Schaden auch gegen Tanks hoch."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Die Laning-Phase: überleben, um zu dominieren"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Das Laning ist für einen ADC die schwierigste Phase. Du bist zerbrechlich, machst im Vergleich zu anderen Rollen wenig Schaden und hängst von deinem Support ab. Das sind die Prioritäten:"
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Farmen (CS)"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Jeder getötete Minion bringt Gold. Das Ziel ist, so viele Minions wie möglich zu last-hitten, also den letzten Treffer zu setzen, um das Gold zu bekommen. Ein guter ADC peilt 8 bis 10 CS pro Minute an. Nach 10 Minuten solltest du mindestens 80 bis 100 CS haben."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Traden"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Ein Trade ist ein Schadensaustausch mit dem Gegner. ADCs traden gut, wenn: ihr Support engaget, sie mehr Leben als der Gegner haben oder sie einen Levelvorteil haben. Außerhalb dieser Bedingungen vermeide Fights und farme in Ruhe."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Hinter dem Support positionieren"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Dein Support ist dein menschlicher Schutzschild. Bleib hinter ihm, um gegnerischen Engages auszuweichen. Wenn der Gegner an deinem Support vorbeikommt, um dich zu erreichen, hast du dich meistens schlecht positioniert."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Positionierung im Teamfight"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Im Teamfight ist die Positionierung die Fähigkeit Nr. 1 des ADCs. Die goldene Regel: so weit wie möglich von den Gegnern entfernt bleiben und trotzdem weiter angreifen."
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
                "text": "Renn nie in die erste Reihe: das ist der Job der Tanks"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Greife das nächste Ziel an, das du ohne Risiko erreichen kannst"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Kite (weich zurück und greif dabei an), um den Abstand zu deinen Gegnern zu halten"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Nutze das Gelände, um dich vor Skillshots zu schützen"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Behalte die gegnerischen Assassinen im Auge: Sie wollen dich one-shotten"
              }
            ]
          }
        ]
      },
      {
        "children": [
          {
            "text": "Kiting ist eine grundlegende Mechanik: Du wechselst zwischen einem Angriff und einer Bewegung, um dich beim Zuschlagen vor- oder zurückzubewegen. Je höher deine Attack Speed, desto effektiver ist das Kiting."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Empfohlene ADCs für den Einstieg"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Manche ADCs verzeihen Fehler eher als andere. Das sind die besten Einstiegspunkte:"
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
                "text": "Ashe: das einfachste Kit des Spiels, Verlangsamungspfeil, Stun-Ultimate mit großer Reichweite. Ideal, um die Rolle zu lernen."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Miss Fortune: stark in der Lane, Q/W-Combo leicht zu verstehen, hervorragend, um das Traden zu lernen."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Jinx: klassische Hypercarry. Zerbrechlich, aber verheerend, wenn sie vorne liegt. Gut, um das Lategame zu lernen."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Sivir: widerstandsfähig, gute Mobilität mit ihrem Ultimate, leicht zu erlernen."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Jhin: feste Angriffsrate, sehr befriedigendes Gameplay, lehrt Präzision und Positionierung."
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Typische Fehler, die du vermeiden solltest"
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
                "text": "Im Early Game sinnlos sterben: ein Tod = etwa 40 verlorene CS"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "In ruhigen Phasen (zwischen den Fights) nicht farmen"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Zu nah an den Gegnern kämpfen: halte immer deinen Abstand"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Den gegnerischen Tank statt den Carry fokussieren: greife immer das gefährlichste Ziel an, das du erreichen kannst"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Vergessen zu recallen, um Items zu kaufen: Items sind deine Stärke"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Wo fängst du an?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Fang mit Ashe oder Miss Fortune im Normal-Modus an. Peile 80 CS nach 10 Minuten an. Kümmere dich anfangs nicht um Kills: Farmen, Überleben und Positionierung sind für deinen Fortschritt viel wichtiger."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Du weißt noch nicht, welcher ADC zu deinem Spielstil passt? Das RiftMatch-Quiz analysiert deine Persönlichkeit und dein Niveau, um dir die Champions zu empfehlen, die am besten zu dir passen."
          }
        ]
      }
    ]
  },
  {
    "title": "ADC: la guida completa per iniziare e migliorare",
    "slug": "guida-adc-league-of-legends",
    "locale": "it",
    "template": "guide",
    "translationKey": "guide-adc",
    "seo": {
      "description": "Tutto sul ruolo di ADC in League of Legends: definizione, meccaniche, fase di laning, posizionamento nei teamfight e migliori campioni per iniziare."
    },
    "content": [
      {
        "children": [
          {
            "text": "L'ADC, cioè Attack Damage Carry, è uno dei ruoli più popolari e più impegnativi di League of Legends. Tiratore scelto della squadra, infligge danni costanti a distanza e nel late game diventa un mostro offensivo. Ma per arrivarci devi sopravvivere a una fase di gioco delicata e padroneggiare meccaniche precise."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Cos'è un ADC?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "ADC sta per Attack Damage Carry: un campione che porta (carry) la squadra grazie ai suoi danni fisici (AD = Attack Damage). È il tiratore della squadra: attacca a distanza, infligge danni continui ai bersagli e distrugge sia i campioni nemici sia le strutture (torri, inibitori, Nexus)."
          }
        ]
      },
      {
        "children": [
          {
            "text": "L'ADC gioca nella lane bot (corsia inferiore) insieme a un support. Il support protegge l'ADC durante la fase di laning, la fase di crescita di potenza a inizio partita, per permettergli di fare farm in tranquillità e accumulare oro."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Perché giocare ADC?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Questo ruolo attira per diversi motivi:"
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
                "text": "Infliggi danni in modo costante per tutta la partita"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Nel late game un buon ADC può distruggere un'intera squadra in pochi secondi"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Spesso puoi decidere da solo l'esito di uno scontro o di un assedio"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Il farming e il posizionamento sono abilità gratificanti da padroneggiare"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Il roster di ADC è vario: sniper, hypercarry, maghi marksman…"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Le statistiche chiave dell'ADC"
          }
        ]
      },
      {
        "children": [
          {
            "text": "A differenza dei tank o dei maghi, l'ADC dipende da statistiche molto specifiche per essere efficace:"
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Attack Speed (Velocità d'attacco)"
          }
        ]
      },
      {
        "children": [
          {
            "text": "La velocità d'attacco determina quante volte al secondo colpisci. Più è alta, più sono alti i tuoi danni al secondo (DPS). È la statistica principale degli ADC nel mid e late game."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Critical Strike (Colpo critico)"
          }
        ]
      },
      {
        "children": [
          {
            "text": "I colpi critici moltiplicano i tuoi danni base (generalmente x1.75). La maggior parte delle build ADC punta al 100% di probabilità di crit a metà partita tramite oggetti come Infinity Edge o Galeforce."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Attack Damage (AD)"
          }
        ]
      },
      {
        "children": [
          {
            "text": "L'AD aumenta direttamente i danni per attacco. Combinato con crit e attack speed, è il trio che definisce la potenza di un ADC."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Armor Penetration (Penetrazione dell'armatura)"
          }
        ]
      },
      {
        "children": [
          {
            "text": "A fine partita i nemici hanno molta armatura. La penetrazione (Lord Dominik's Regards, Mortal Reminder) permette di mantenere danni elevati anche contro i tank."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "La fase di laning: sopravvivere per dominare"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Il laning è la fase più difficile per un ADC. Sei fragile, hai pochi danni rispetto ad altri ruoli e dipendi dal tuo support. Ecco le priorità:"
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Il farming (CS)"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Ogni minion ucciso dà oro. L'obiettivo è fare last-hit sul maggior numero possibile di minion, cioè dare il colpo fatale per ottenere l'oro. Un buon ADC punta a 8-10 CS al minuto. Al decimo minuto devi avere almeno 80-100 CS."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Il trading"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Un trade è uno scambio di danni con il nemico. Gli ADC fanno buoni trade quando: il loro support ingaggia, hanno più vita del nemico o hanno un vantaggio di livelli. Al di fuori di queste condizioni, evita i fight e fai farm in tranquillità."
          }
        ]
      },
      {
        "type": "h3",
        "children": [
          {
            "text": "Posizionarsi dietro il support"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Il tuo support è il tuo scudo umano. Resta dietro di lui per evitare gli engage nemici. Se il nemico supera il tuo support per raggiungerti, di solito vuol dire che ti sei posizionato male."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Il posizionamento nei teamfight"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Nei teamfight il posizionamento è la competenza n°1 dell'ADC. La regola d'oro: restare il più lontano possibile dai nemici continuando ad attaccare."
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
                "text": "Non buttarti mai in prima linea: è il lavoro dei tank"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Attacca il bersaglio più vicino raggiungibile senza rischi"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Fai kite (arretra mentre attacchi) per mantenere la distanza dai tuoi avversari"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Usa gli elementi del terreno per proteggerti dagli skillshot"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Tieni d'occhio gli assassini nemici: cercano di farti one-shot"
              }
            ]
          }
        ]
      },
      {
        "children": [
          {
            "text": "Il kiting è una meccanica fondamentale: alterni un attacco e un movimento per avanzare o arretrare continuando a colpire. Più alta è la tua attack speed, più il kiting è efficace."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Gli ADC consigliati per iniziare"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Alcuni ADC perdonano gli errori più di altri. Ecco i migliori punti di partenza:"
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
                "text": "Ashe: il kit più semplice del gioco, freccia rallentante, ultimate stun a lunga gittata. Ideale per imparare il ruolo."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Miss Fortune: forte in lane, combo Q/W facile da capire, ottima per imparare a fare trade."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Jinx: hypercarry classica. Fragile ma devastante quando è in vantaggio. Buona per imparare il late game."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Sivir: resistente, buona mobilità con la sua ultimate, facile da padroneggiare."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Jhin: cadenza d'attacco fissa, gameplay molto soddisfacente, insegna precisione e posizionamento."
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Gli errori classici da evitare"
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
                "text": "Morire per niente nell'early game: una morte = circa 40 CS persi"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Non fare farm durante le fasi calme (tra un fight e l'altro)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Combattere troppo vicino ai nemici: devi sempre mantenere le distanze"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Focalizzare il tank nemico invece del carry: attacca sempre il bersaglio più pericoloso raggiungibile"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Dimenticare di fare recall per comprare oggetti: gli oggetti sono la tua potenza"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Da dove iniziare?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Inizia con Ashe o Miss Fortune in modalità Normal. Punta a 80 CS al decimo minuto. Non preoccuparti dei kill all'inizio: farming, sopravvivenza e posizionamento sono molto più importanti per migliorare."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Non sai ancora quale ADC si adatta al tuo stile di gioco? Il quiz di RiftMatch analizza la tua personalità e il tuo livello per consigliarti i campioni più adatti a te."
          }
        ]
      }
    ]
  },
  {
    "title": "Was ist League of Legends?",
    "slug": "was-ist-league-of-legends",
    "locale": "de",
    "template": "article",
    "translationKey": "what-is-lol",
    "seo": {
      "description": "Entdecke League of Legends: das meistgespielte MOBA der Welt, seine Champions, seine Spielmechaniken und warum Millionen von Spielern jeden Tag zurückkehren."
    },
    "content": [
      {
        "children": [
          {
            "text": "League of Legends, oder einfach LoL, ist eines der meistgespielten Videospiele der Welt. 2009 von Riot Games veröffentlicht, versammelt es jeden Monat mehr als 150 Millionen registrierte Spieler und Dutzende Millionen Partien pro Tag. Doch was macht es so fesselnd?"
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Ein MOBA: was ist das?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "League of Legends gehört zum Genre der MOBAs (Multiplayer Online Battle Arena). Das Prinzip ist einfach: Zwei Teams aus je 5 Spielern kämpfen auf einer Karte namens Kluft der Beschwörer gegeneinander. Das Ziel ist, den gegnerischen Nexus, die zentrale Basis des feindlichen Teams, zu zerstören, bevor das Gegnerteam deinen zerstört."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Eine Partie dauert im Schnitt 30 bis 40 Minuten. Die Karte ist in drei Lanes (Top, Mid, Bot) unterteilt, die durch einen Jungle verbunden sind, ein bewaldetes Gebiet voller neutraler Monster, die die Spieler töten können, um stärker zu werden."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Die Champions: das Herz des Spiels"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Jeder Spieler wählt vor der Partie einen Champion, einen einzigartigen Charakter mit eigenen Fähigkeiten, eigenem Spielstil und eigener Geschichte im Universum von Runeterra. 2024 zählt das Roster mehr als 160 spielbare Champions."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Diese Champions teilen sich in große Klassen auf:"
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
                "text": "Tanks: robust, sie fangen Schaden ab, um das Team zu schützen"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Assassinen: schnell und tödlich, sie eliminieren Prioritätsziele"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Magier: mächtig auf Distanz, sie verursachen enormen magischen Schaden"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Schützen (ADC): zerbrechlich, aber auf Dauer verheerend"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Supports: sie beschützen, heilen oder kontrollieren die Gegner"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Kämpfer (Fighters): ein Gleichgewicht zwischen Schaden und Widerstandsfähigkeit"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Die Rollen auf der Kluft der Beschwörer"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Im kompetitiven Spiel hat jedes Teammitglied eine feste Rolle:"
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
                "text": "Top: die obere Lane, oft von widerstandsfähigen Champions gespielt"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Jungle: bewegt sich über die ganze Karte und kontrolliert die neutralen Ziele"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Mid: die mittlere Lane, oft Magier oder Assassinen mit großem Impact"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Bot (ADC): untere Lane, ein Schütze, der im Lategame immer stärker wird"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Support: begleitet den ADC, beschützt das Team und platziert Vision-Wards"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Warum so viele Spieler?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Die Langlebigkeit von LoL hat mehrere Gründe. Erstens ist das Spiel kostenlos: Alle Champions lassen sich durch Spielen freischalten. Zweitens ist die strategische Tiefe praktisch unendlich: Einen Champion zu meistern kann Hunderte Stunden dauern, und die Meta ändert sich mit jedem Patch."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Auch der kompetitive Aspekt ist zentral. Das Ranglistensystem (von Eisen bis Challenger) motiviert Millionen von Spielern, besser zu werden. Und die Weltmeisterschaft, die Worlds, versammelt jedes Jahr Dutzende Millionen Zuschauer."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Das Universum von Runeterra"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Über das Gameplay hinaus hat sich League of Legends ein reichhaltiges narratives Universum aufgebaut. Jeder Champion hat seine Geschichte, seine Beziehungen zu den anderen Charakteren und gehört zu einer Region der Welt: Demacia, Noxus, Ionia, Zaun, die Schatteninseln…"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Dieses Universum hat zahlreiche Projekte hervorgebracht: die Animationsserie Arcane auf Netflix, Spin-off-Spiele wie Legends of Runeterra oder Teamfight Tactics und regelmäßig veröffentlichte Originalmusik."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Wo fängst du an?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Wenn du LoL neu entdeckst, starte mit dem Tutorial-Modus im Spiel. Die ersten Partien sind vor erfahrenen Spielern geschützt, damit du dich in Ruhe zurechtfinden kannst. Wähle einen einfachen Champion, wie Garen, Ashe oder Annie, um die Grundlagen zu lernen, ohne dich zu überfordern."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Und wenn du noch nicht weißt, welcher Champion zu dir passt, ist das RiftMatch-Quiz genau dafür da: ein paar Fragen zu deinem Spielstil und deiner Persönlichkeit, und du entdeckst die Champions, die für dich gemacht sind."
          }
        ]
      }
    ]
  },
  {
    "title": "Cos'è League of Legends?",
    "slug": "cos-e-league-of-legends",
    "locale": "it",
    "template": "article",
    "translationKey": "what-is-lol",
    "seo": {
      "description": "Scopri League of Legends: il MOBA più giocato al mondo, i suoi campioni, le sue meccaniche di gioco e perché milioni di giocatori tornano ogni giorno."
    },
    "content": [
      {
        "children": [
          {
            "text": "League of Legends, o semplicemente LoL, è uno dei videogiochi più giocati al mondo. Lanciato nel 2009 da Riot Games, riunisce ogni mese più di 150 milioni di giocatori registrati e decine di milioni di partite al giorno. Ma cosa lo rende così coinvolgente?"
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Un MOBA: cos'è?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "League of Legends appartiene al genere MOBA (Multiplayer Online Battle Arena). Il principio è semplice: due squadre da 5 giocatori si affrontano su una mappa chiamata Landa degli Evocatori. L'obiettivo è distruggere il Nexus avversario, la base centrale della squadra nemica, prima che questa distrugga il vostro."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Ogni partita dura in media dai 30 ai 40 minuti. La mappa è divisa in tre corsie (top, mid, bot) collegate da una jungle, un'area boscosa piena di mostri neutrali che i giocatori possono eliminare per diventare più potenti."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "I campioni: il cuore del gioco"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Ogni giocatore sceglie un campione prima della partita: un personaggio unico con le sue abilità, il suo stile di gioco e la sua storia nell'universo di Runeterra. Nel 2024 il roster conta più di 160 campioni giocabili."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Questi campioni si dividono in grandi classi:"
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
                "text": "Tank: robusti, assorbono i danni per proteggere la squadra"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Assassini: rapidi e letali, eliminano i bersagli prioritari"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Maghi: potenti a distanza, infliggono enormi danni magici"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Tiratori (ADC): fragili ma devastanti sulla lunga durata"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Support: proteggono, curano o controllano i nemici"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Combattenti (Fighter): un equilibrio tra danni e resistenza"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "I ruoli sulla Landa degli Evocatori"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Nel gioco competitivo, ogni membro della squadra occupa un ruolo preciso:"
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
                "text": "Top: la corsia superiore, spesso giocata da campioni resistenti"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Jungle: si muove in tutta la mappa, controlla gli obiettivi neutrali"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Mid: la corsia centrale, spesso maghi o assassini ad alto impatto"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Bot (ADC): corsia inferiore, tiratore che diventa sempre più potente a fine partita"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Support: accompagna l'ADC, protegge la squadra e piazza ward di visione"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Perché così tanti giocatori?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "La longevità di LoL si spiega con diversi fattori. Prima di tutto, il gioco è gratuito: tutti i campioni si possono sbloccare giocando. Poi, la profondità strategica è quasi infinita: padroneggiare un campione può richiedere centinaia di ore, e la meta cambia a ogni patch."
          }
        ]
      },
      {
        "children": [
          {
            "text": "Anche l'aspetto competitivo è centrale. La classifica a rank (da Ferro a Challenger) spinge milioni di giocatori a migliorare. E il campionato del mondo, i Worlds, riunisce ogni anno decine di milioni di spettatori."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "L'universo di Runeterra"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Oltre al gameplay, League of Legends si è costruito un ricco universo narrativo. Ogni campione ha la sua storia, i suoi rapporti con gli altri personaggi e appartiene a una regione del mondo: Demacia, Noxus, Ionia, Zaun, le Isole Ombra…"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Questo universo ha dato vita a numerosi progetti: la serie animata Arcane su Netflix, giochi derivati come Legends of Runeterra o Teamfight Tactics, e musica originale pubblicata regolarmente."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Da dove iniziare?"
          }
        ]
      },
      {
        "children": [
          {
            "text": "Se scopri LoL ora, inizia con la modalità Tutorial disponibile nel gioco. Le prime partite sono protette dai giocatori esperti, così hai il tempo di prendere i tuoi punti di riferimento. Scegli un campione semplice, come Garen, Ashe o Annie, per imparare le basi senza sovraccaricarti."
          }
        ]
      },
      {
        "children": [
          {
            "text": "E se non sai ancora quale campione fa per te, il quiz di RiftMatch è qui per questo: qualche domanda sul tuo stile di gioco e sulla tua personalità, e scopri i campioni fatti per te."
          }
        ]
      }
    ]
  }
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const p of pages) {
    const ex = await payload.find({ collection: 'pages', where: { and: [{ slug: { equals: p.slug } }, { locale: { equals: p.locale } }] }, limit: 1 })
    if (ex.docs.length > 0) { console.log(`skip ${p.slug}`); continue }
    await payload.create({ collection: 'pages', data: p })
    console.log(`ok ${p.locale.toUpperCase()} ${p.title}`)
  }
}
