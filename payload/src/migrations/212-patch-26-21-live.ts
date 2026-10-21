import type { MigrationModule } from './runner'

export const id = '212-patch-26-21-live'
export const description = 'Patch 26.21 Live notes - October 21, 2026'

export const up: MigrationModule['up'] = async (payload) => {
  const now = new Date('2026-10-21T05:00:00.000Z')

  // Patch 26.21 (fr)
  await payload.create({
    collection: 'patch-notes',
    data: {
      version: '26.21',
      locale: 'fr',
      title: 'Patch 26.21 - Notes de mise à jour',
      slug: 'patch-26-21',
      type: 'live',
      status: 'published',
      publishedAt: now.toISOString(),
      excerpt: 'Patch massive après les débuts des Worlds : 25 champions touchés, vrais changements sur Azir, Ryze et Orianna. Ajustements d\'items majeurs et skins True Damage.',
      highlights: [
        { text: 'Azir, Ryze, Orianna reçoivent des buffs (le fameux T1 patch)' },
        { text: 'Caitlyn, Jinx, Lee Sin, Yone et Viktor nerfés' },
        { text: 'Bastion Breaker : Sabotage passe d\'une durée de 90s à infinie' },
        { text: 'Gluttonous Greaves et Hubris nerfées pour les ranged' },
        { text: 'Locke, Varus, Taric et autres reçoivent des ajustements ciblés' },
        { text: 'Skins True Damage Know My Name disponibles' },
      ],
      content: [
        {
          type: 'p',
          children: [
            {
              text: 'Les Worlds ont commencé sur le patch 26.20, mais le reste du jeu continue. Le patch 26.21 apporte des changements massifs : 25 champions ajustés avec un focus pro et un rebalançage complet des items de puissance.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Champions enflammés' }],
        },
        {
          type: 'h3',
          children: [{ text: 'Buffs majeurs' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Azir retrouve 50 points de mana par niveau (contre 40), Ryze gagne du scaling en late et Orianna obtient plus de mana. C\'est le patch T1 que les fans plaisantent : les buffs que T1 aurait aimé avant Worlds.',
            },
          ],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Azir : +10 mana/niveau (40→50)' }] },
            {
              type: 'li',
              children: [
                { text: 'Ryze, Orianna, Sion, Taliyah, Zyra, Darius, Miss Fortune, Nunu, Vel\'Koz et Xin Zhao en progression' },
              ],
            },
          ],
        },
        {
          type: 'h3',
          children: [{ text: 'Nerfs ciblés' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Caitlyn chute en pick/ban : ses headshots late-game sont réduits pour la punir d\'être partout. Jinx, Lee Sin, Viktor et Yone reçoivent des nerfs bien sentis. Qiyana retrouve en partie ses revers du patch 26.17.',
            },
          ],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Caitlyn : late-game nerfé, early-game épargné' }] },
            {
              type: 'li',
              children: [
                { text: 'Jinx, Tristana, Nidalee, Rammus, Locke (nerf majeur), Varus, Lee Sin, Viktor, Yone, Wukong et Qiyana touchés' },
              ],
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Items : la refonte Sabotage' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Bastion Breaker passe du côté arcade : la Sabotage dure 250 000 secondes (infinie). Gluttonous Greaves se nerfent (+100 or) et Hubris distingue enfin ranged et melee. Dawncore gagne du dégât d\'AP par mana regen.',
            },
          ],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Bastion Breaker : Sabotage 90s→infini, lethality 22→18' }] },
            { type: 'li', children: [{ text: 'Gluttonous Greaves : +100 or, melee bonus augmenté' }] },
            { type: 'li', children: [{ text: 'Hubris : AD différent melee/ranged, Dawncore buff AP ratio' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Ce qui change pour toi' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Caitlyn topmick ? À revoir. Les perso mid que tu aimes (Azir, Ryze, Orianna) reviennent. Lee Sin mid perd du poids. Et les items phare changent : prépare-toi à voir Bastion Breaker partout en lethal builds.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Skins et bonus' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'True Damage Know My Name Ekko, Akali, Qiyana, Senna et Yasuo arrivent. Limite de replay : 10 par heure max. Et le PBE verrouille davantage les accès tiers.',
            },
          ],
        },
      ],
      sourceUrl: 'https://riot.com/4eIDuI2',
      author: 'RiftMatch',
      tags: [
        { tag: 'Patch 26.21' },
        { tag: 'Balance' },
        { tag: 'Worlds 2026' },
        { tag: 'Azir' },
        { tag: 'Ryze' },
      ],
    },
  })

  // Patch 26.21 (en)
  await payload.create({
    collection: 'patch-notes',
    data: {
      version: '26.21',
      locale: 'en',
      title: 'Patch 26.21 - Patch Notes',
      slug: 'patch-26-21',
      type: 'live',
      status: 'published',
      publishedAt: now.toISOString(),
      excerpt: 'Massive patch after Worlds begins: 25 champions touched, real changes for Azir, Ryze and Orianna. Major item adjustments and True Damage skins.',
      highlights: [
        { text: 'Azir, Ryze, Orianna receive buffs (the famous T1 patch)' },
        { text: 'Caitlyn, Jinx, Lee Sin, Yone and Viktor nerfed' },
        { text: 'Bastion Breaker: Sabotage changes from 90s duration to infinite' },
        { text: 'Gluttonous Greaves and Hubris nerfed for ranged champions' },
        { text: 'Locke, Varus, Taric and others receive targeted adjustments' },
        { text: 'True Damage Know My Name skins now available' },
      ],
      content: [
        {
          type: 'p',
          children: [
            {
              text: 'Worlds has started on patch 26.20, but the rest of the game continues. Patch 26.21 brings massive changes: 25 champions adjusted with a pro focus and complete power item rebalancing.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Champions on fire' }],
        },
        {
          type: 'h3',
          children: [{ text: 'Major buffs' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Azir gains 50 mana per level (from 40), Ryze gets stronger late-game scaling and Orianna gains more mana. This is the T1 patch fans joke about: the buffs T1 would have wanted before Worlds.',
            },
          ],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Azir: +10 mana/level (40→50)' }] },
            {
              type: 'li',
              children: [
                { text: 'Ryze, Orianna, Sion, Taliyah, Zyra, Darius, Miss Fortune, Nunu, Vel\'Koz and Xin Zhao in progression' },
              ],
            },
          ],
        },
        {
          type: 'h3',
          children: [{ text: 'Targeted nerfs' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Caitlyn drops in pick/ban: her late-game headshots are reduced to punish her omnipresence. Jinx, Lee Sin, Viktor and Yone receive hard nerfs. Qiyana partially reverts from patch 26.17 buffs.',
            },
          ],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Caitlyn: late-game nerfed, early-game untouched' }] },
            {
              type: 'li',
              children: [
                { text: 'Jinx, Tristana, Nidalee, Rammus, Locke (major nerf), Varus, Lee Sin, Viktor, Yone, Wukong and Qiyana affected' },
              ],
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Items: the Sabotage overhaul' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Bastion Breaker goes arcade mode: Sabotage now lasts 250,000 seconds (infinite). Gluttonous Greaves gets nerfed (+100 gold) and Hubris finally distinguishes ranged vs melee. Dawncore gains AP damage per mana regen.',
            },
          ],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Bastion Breaker: Sabotage 90s→infinite, lethality 22→18' }] },
            { type: 'li', children: [{ text: 'Gluttonous Greaves: +100 gold, melee bonus increased' }] },
            { type: 'li', children: [{ text: 'Hubris: AD differs melee/ranged, Dawncore buff AP ratio' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'What changes for you' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Caitlyn one-trick? Time to rethink. The mid champs you love (Azir, Ryze, Orianna) are back. Lee Sin mid loses momentum. And core items shift: get ready to see Bastion Breaker everywhere in lethality builds.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Skins and updates' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'True Damage Know My Name Ekko, Akali, Qiyana, Senna and Yasuo arrive. Replay limit: max 10 per hour. And the PBE locks down third-party access further.',
            },
          ],
        },
      ],
      sourceUrl: 'https://riot.com/4eIDuI2',
      author: 'RiftMatch',
      tags: [
        { tag: 'Patch 26.21' },
        { tag: 'Balance' },
        { tag: 'Worlds 2026' },
        { tag: 'Azir' },
        { tag: 'Ryze' },
      ],
    },
  })

  // Patch 26.21 (es)
  await payload.create({
    collection: 'patch-notes',
    data: {
      version: '26.21',
      locale: 'es',
      title: 'Patch 26.21 - Notas de la actualización',
      slug: 'patch-26-21',
      type: 'live',
      status: 'published',
      publishedAt: now.toISOString(),
      excerpt: 'Parche masivo tras el comienzo de los Mundiales: 25 campeones tocados, cambios reales en Azir, Ryze y Orianna. Ajustes mayores en items y skins True Damage.',
      highlights: [
        { text: 'Azir, Ryze, Orianna reciben buffs (el famoso parche T1)' },
        { text: 'Caitlyn, Jinx, Lee Sin, Yone y Viktor nerfeados' },
        { text: 'Bastion Breaker: Sabotaje cambia de 90s a duración infinita' },
        { text: 'Gluttonous Greaves y Hubris nerfeadas para ranged' },
        { text: 'Locke, Varus, Taric y otros reciben ajustes orientados' },
        { text: 'Skins True Damage Know My Name disponibles' },
      ],
      content: [
        {
          type: 'p',
          children: [
            {
              text: 'Los Mundiales han comenzado en el parche 26.20, pero el resto del juego continúa. El parche 26.21 trae cambios masivos: 25 campeones ajustados con enfoque profesional y reequilibrio completo de items de poder.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Campeones en llamas' }],
        },
        {
          type: 'h3',
          children: [{ text: 'Buffs mayores' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Azir recupera 50 maná por nivel (de 40), Ryze obtiene escalado más fuerte en late game y Orianna gana más maná. Este es el parche T1 que los fans bromean: los buffs que T1 hubiera querido antes de los Mundiales.',
            },
          ],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Azir: +10 maná/nivel (40→50)' }] },
            {
              type: 'li',
              children: [
                { text: 'Ryze, Orianna, Sion, Taliyah, Zyra, Darius, Miss Fortune, Nunu, Vel\'Koz y Xin Zhao en progresión' },
              ],
            },
          ],
        },
        {
          type: 'h3',
          children: [{ text: 'Nerfs orientados' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Caitlyn cae en pick/ban: sus headshots de late game se reducen para castigarla por su omnipresencia. Jinx, Lee Sin, Viktor y Yone reciben nerfs duros. Qiyana reviete parcialmente del parche 26.17.',
            },
          ],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Caitlyn: late game nerfeado, early game sin cambios' }] },
            {
              type: 'li',
              children: [
                { text: 'Jinx, Tristana, Nidalee, Rammus, Locke (nerf mayor), Varus, Lee Sin, Viktor, Yone, Wukong y Qiyana afectados' },
              ],
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Items: la revisión de Sabotaje' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Bastion Breaker entra en modo arcade: Sabotaje dura 250.000 segundos (infinito). Gluttonous Greaves se nerfean (+100 oro) y Hubris finalmente distingue ranged vs melee. Dawncore gana daño AP por regeneración de maná.',
            },
          ],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Bastion Breaker: Sabotaje 90s→infinito, lethalidad 22→18' }] },
            { type: 'li', children: [{ text: 'Gluttonous Greaves: +100 oro, bonus melee aumentado' }] },
            { type: 'li', children: [{ text: 'Hubris: AD distinto melee/ranged, buff Dawncore ratio AP' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Qué cambia para ti' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Caitlyn trucker? Hora de replantearse. Los personajes mid que amas (Azir, Ryze, Orianna) regresan. Lee Sin mid pierde momentum. Y los items clave cambian: prepárate para ver Bastion Breaker en todas partes en builds letales.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Skins y actualizaciones' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'True Damage Know My Name Ekko, Akali, Qiyana, Senna y Yasuo llegan. Límite de repetición: máx 10 por hora. Y el PBE cierra más accesos de terceros.',
            },
          ],
        },
      ],
      sourceUrl: 'https://riot.com/4eIDuI2',
      author: 'RiftMatch',
      tags: [
        { tag: 'Patch 26.21' },
        { tag: 'Balance' },
        { tag: 'Mundiales 2026' },
        { tag: 'Azir' },
        { tag: 'Ryze' },
      ],
    },
  })

  // Patch 26.21 (de)
  await payload.create({
    collection: 'patch-notes',
    data: {
      version: '26.21',
      locale: 'de',
      title: 'Patch 26.21 - Patch-Notizen',
      slug: 'patch-26-21',
      type: 'live',
      status: 'published',
      publishedAt: now.toISOString(),
      excerpt: 'Massiver Patch nach Worlds-Start: 25 Champions berührt, echte Veränderungen für Azir, Ryze und Orianna. Große Item-Anpassungen und True Damage Skins.',
      highlights: [
        { text: 'Azir, Ryze, Orianna erhalten Buffs (der berühmte T1 Patch)' },
        { text: 'Caitlyn, Jinx, Lee Sin, Yone und Viktor gegeschwächt' },
        { text: 'Bastion Breaker: Sabotage ändert sich von 90s auf unbegrenzte Dauer' },
        { text: 'Gluttonous Greaves und Hubris für Ranged geschwächt' },
        { text: 'Locke, Varus, Taric und andere erhalten gezielte Anpassungen' },
        { text: 'True Damage Know My Name Skins jetzt verfügbar' },
      ],
      content: [
        {
          type: 'p',
          children: [
            {
              text: 'Die Worlds haben mit Patch 26.20 begonnen, aber der Rest des Spiels geht weiter. Patch 26.21 bringt massive Änderungen: 25 Champions angepasst mit Pro-Fokus und vollständiger Neuausrichtung der Power-Items.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Champions in Flammen' }],
        },
        {
          type: 'h3',
          children: [{ text: 'Große Buffs' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Azir erhält 50 Mana pro Level (von 40), Ryze bekommt stärkeres Late-Game-Scaling und Orianna gewinnt mehr Mana. Das ist der T1 Patch, über den Fans scherzen: die Buffs, die T1 vor Worlds gewollt hätte.',
            },
          ],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Azir: +10 Mana/Level (40→50)' }] },
            {
              type: 'li',
              children: [
                { text: 'Ryze, Orianna, Sion, Taliyah, Zyra, Darius, Miss Fortune, Nunu, Vel\'Koz und Xin Zhao in Progression' },
              ],
            },
          ],
        },
        {
          type: 'h3',
          children: [{ text: 'Gezielte Nerfs' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Caitlyn fällt in Pick/Ban: ihre Late-Game-Headshots werden reduziert, um sie für ihre Omnipräsenz zu bestrafen. Jinx, Lee Sin, Viktor und Yone erhalten harte Nerfs. Qiyana setzt Patch 26.17 teilweise zurück.',
            },
          ],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Caitlyn: Late Game geschwächt, Early Game unverändert' }] },
            {
              type: 'li',
              children: [
                { text: 'Jinx, Tristana, Nidalee, Rammus, Locke (großer Nerf), Varus, Lee Sin, Viktor, Yone, Wukong und Qiyana betroffen' },
              ],
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Items: Die Sabotage-Überholung' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Bastion Breaker geht in Arcade-Modus: Sabotage dauert jetzt 250.000 Sekunden (unbegrenzt). Gluttonous Greaves wird geschwächt (+100 Gold) und Hubris unterscheidet endlich Ranged vs Melee. Dawncore erhält AP-Schaden pro Mana-Regeneration.',
            },
          ],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Bastion Breaker: Sabotage 90s→unbegrenzt, Lethality 22→18' }] },
            { type: 'li', children: [{ text: 'Gluttonous Greaves: +100 Gold, Melee-Bonus erhöht' }] },
            { type: 'li', children: [{ text: 'Hubris: AD unterscheidet sich Melee/Ranged, Dawncore Buff AP Ratio' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Was ändert sich für dich' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Caitlyn One-Trick? Zeit zum Umdenken. Die Mid-Champs, die du liebst (Azir, Ryze, Orianna), sind zurück. Lee Sin Mid verliert an Bedeutung. Und Core-Items verschieben sich: Mach dich bereit, Bastion Breaker überall in Lethality-Builds zu sehen.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Skins und Updates' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'True Damage Know My Name Ekko, Akali, Qiyana, Senna und Yasuo kommen. Replay-Limit: max. 10 pro Stunde. Und der PBE sperrt Third-Party-Zugriff weiter ab.',
            },
          ],
        },
      ],
      sourceUrl: 'https://riot.com/4eIDuI2',
      author: 'RiftMatch',
      tags: [
        { tag: 'Patch 26.21' },
        { tag: 'Balance' },
        { tag: 'Worlds 2026' },
        { tag: 'Azir' },
        { tag: 'Ryze' },
      ],
    },
  })

  // Patch 26.21 (it)
  await payload.create({
    collection: 'patch-notes',
    data: {
      version: '26.21',
      locale: 'it',
      title: 'Patch 26.21 - Note della patch',
      slug: 'patch-26-21',
      type: 'live',
      status: 'published',
      publishedAt: now.toISOString(),
      excerpt: 'Patch massiccia dopo l\'inizio dei Mondiali: 25 campioni toccati, veri cambiamenti per Azir, Ryze e Orianna. Grandi aggiustamenti agli item e skin True Damage.',
      highlights: [
        { text: 'Azir, Ryze, Orianna ricevono buff (il famoso patch T1)' },
        { text: 'Caitlyn, Jinx, Lee Sin, Yone e Viktor nerfati' },
        { text: 'Bastion Breaker: Sabotaggi cambia da 90s a durata infinita' },
        { text: 'Gluttonous Greaves e Hubris nerfate per ranged' },
        { text: 'Locke, Varus, Taric e altri ricevono aggiustamenti mirati' },
        { text: 'Skin True Damage Know My Name ora disponibili' },
      ],
      content: [
        {
          type: 'p',
          children: [
            {
              text: 'I Mondiali sono iniziati sulla patch 26.20, ma il resto del gioco continua. La patch 26.21 porta cambiamenti massicci: 25 campioni aggiustati con focus professionale e completo ribilanciamento degli item di potenza.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Campioni in fiamme' }],
        },
        {
          type: 'h3',
          children: [{ text: 'Buff maggiori' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Azir ritrova 50 mana per livello (da 40), Ryze ottiene scaling più forte in late game e Orianna guadagna più mana. Questo è il patch T1 che i fan scherzano: i buff che T1 avrebbe voluto prima dei Mondiali.',
            },
          ],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Azir: +10 mana/livello (40→50)' }] },
            {
              type: 'li',
              children: [
                { text: 'Ryze, Orianna, Sion, Taliyah, Zyra, Darius, Miss Fortune, Nunu, Vel\'Koz e Xin Zhao in progressione' },
              ],
            },
          ],
        },
        {
          type: 'h3',
          children: [{ text: 'Nerf mirati' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Caitlyn scende in pick/ban: i suoi headshot di late game vengono ridotti per punirla per l\'onnipresenza. Jinx, Lee Sin, Viktor e Yone ricevono nerf duri. Qiyana parzialmente riporta la patch 26.17.',
            },
          ],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Caitlyn: late game nerfato, early game invariato' }] },
            {
              type: 'li',
              children: [
                { text: 'Jinx, Tristana, Nidalee, Rammus, Locke (nerf maggiore), Varus, Lee Sin, Viktor, Yone, Wukong e Qiyana interessati' },
              ],
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Item: la revisione dei Sabotaggi' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Bastion Breaker entra in modalità arcade: Sabotaggio dura 250.000 secondi (infinito). Gluttonous Greaves viene nerfato (+100 oro) e Hubris finalmente distingue ranged vs melee. Dawncore guadagna danno AP per rigenerazione mana.',
            },
          ],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Bastion Breaker: Sabotaggio 90s→infinito, lethality 22→18' }] },
            { type: 'li', children: [{ text: 'Gluttonous Greaves: +100 oro, bonus melee aumentato' }] },
            { type: 'li', children: [{ text: 'Hubris: AD diverso melee/ranged, buff Dawncore ratio AP' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Cosa cambia per te' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Caitlyn one-trick? Ora di ripensare. I personaggi mid che ami (Azir, Ryze, Orianna) sono tornati. Lee Sin mid perde slancio. E gli item core cambiano: preparati a vedere Bastion Breaker ovunque nei build lethality.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Skin e aggiornamenti' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'True Damage Know My Name Ekko, Akali, Qiyana, Senna e Yasuo arrivano. Limite replay: max 10 all\'ora. E il PBE chiude ulteriormente l\'accesso di terze parti.',
            },
          ],
        },
      ],
      sourceUrl: 'https://riot.com/4eIDuI2',
      author: 'RiftMatch',
      tags: [
        { tag: 'Patch 26.21' },
        { tag: 'Balance' },
        { tag: 'Mondiali 2026' },
        { tag: 'Azir' },
        { tag: 'Ryze' },
      ],
    },
  })
}
