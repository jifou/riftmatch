import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-mongodb'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const pagesCollection = payload.collections['pages'].model

  // FR: Guide d'achat - Souris Logitech pour ADC
  await pagesCollection.insertOne({
    slug: 'meilleure-souris-gaming-adc-logitech-pro',
    locale: 'fr',
    template: 'article',
    status: 'published',
    title: 'Meilleure souris gaming pour ADC: Logitech G PRO X SUPERLIGHT 2',
    seo: {
      title: 'Meilleure souris gaming ADC LoL 2026 - Logitech G PRO X SUPERLIGHT 2',
      description: 'Souris sans fil ultra-legere pour dominer en ADC. Precision 44k DPI, 60g, recharge rapide. Comparatif et guide d\'achat.',
      canonical: 'https://riftmatch.io/guides/meilleure-souris-gaming-adc-logitech-pro',
    },
    hero: {
      type: 'image',
      image: 'https://m.media-amazon.com/images/I/71x-YXkb1PL._AC_SL1500_.jpg',
    },
    excerpt: 'Decouvrez la Logitech G PRO X SUPERLIGHT 2, la souris preferee des joueurs ADC professionnels. Legere, precise et fiable.',
    content: `# Meilleure souris gaming pour ADC: le guide complet

Vous cherchez la souris parfaite pour dominer en solo queue en tant qu'ADC? Nous avons teste la Logitech G PRO X SUPERLIGHT 2, et c'est un choix gagnant.

## Pour qui cette souris?

La Logitech G PRO X SUPERLIGHT 2 est concue pour les joueurs ADC et mage qui ont besoin de precision maximale et de rapidite. Avec ses seulement 60 grammes, elle vous permet de faire des micro-mouvements sans fatigue, exactement ce qu'il faut pour kiter et position-ner correctement.

## Points forts verifies

- Capteur HERO 44000 DPI ultra-precis
- Poids plume: 60 grammes
- Taux de rapport 8 kHz
- 5 boutons programmables
- Batterie durable avec recharge USB-C rapide

## Points d'attention

Etant donner son prix (souris premium), c'est un investissement. Si vous debutez, une souris moins chere conviendra aussi. La forme est asymetrique, donc verifiez la prise avant d'acheter.

## Alternatives du catalogue riftmatch

Vous preferez une souris avec fil? Consultez nos autres guides pour les alternatives ergonomiques.

## FAQ rapide

**Combien de temps dure la batterie?** Jusqu'a 70 heures selon Logitech, suffisant pour des semaines sans charger.

**Compatible Mac?** Oui, la SUPERLIGHT 2 fonctionne sur PC/Mac.

**Livraison rapide?** Verifiez les delais Amazon selon votre zone.

## Pret a ameliorer votre gameplay?

La Logitech G PRO X SUPERLIGHT 2 est l'arme secrete des ADC professionnels. [Voir sur Amazon →](https://www.amazon.fr/dp/B07W5JKP66)

En soutenant RiftMatch via nos liens d'affiliation, vous nous aidez a vous proposer plus de guides et d'analyses gratuites de League of Legends.`,
    tags: ['souris', 'adc', 'gaming', 'logitech', 'guide-achat', '2026'],
  })

  // EN: Gaming Keyboard Guide for Mid Lane
  await pagesCollection.insertOne({
    slug: 'best-gaming-keyboard-midlane-corsair-k95',
    locale: 'en',
    template: 'article',
    status: 'published',
    title: 'Best Gaming Keyboard for Mid Lane: Corsair Vengeance K95 Mechanical Keyboard',
    seo: {
      title: 'Best LoL Mid Lane Keyboard 2026 - Corsair Vengeance K95 Review',
      description: 'Pro-grade mechanical keyboard for competitive League of Legends. Cherry MX switches, programmable keys, and pro player choice.',
      canonical: 'https://riftmatch.io/guides/best-gaming-keyboard-midlane-corsair-k95',
    },
    hero: {
      type: 'image',
      image: 'https://m.media-amazon.com/images/I/71qB8r7ceSL._AC_SL1500_.jpg',
    },
    excerpt: 'Master your mid lane with the Corsair Vengeance K95. Mechanical precision, 18 programmable keys, and built to last.',
    content: `# Best Gaming Keyboard for Mid Lane Dominance

The mid lane role demands split-second ability rotations and quick item actives. The Corsair Vengeance K95 gives you the edge with professional-grade mechanical switches.

## Who Is This Keyboard For?

Mid lane players who rely on fast ability combos (Ahri, Akali, Syndra) need a keyboard with zero input lag and tactile feedback. The K95 delivers both with Cherry MX mechanical switches.

## Verified Strengths

- Cherry MX Red switches: smooth linear response for rapid taps
- 18 programmable G-Keys for item actives and summoner spells
- Full anti-ghosting with USB 2.0 rollover
- Brushed aluminum chassis for durability
- Per-key RGB customization

## Things to Consider

The K95 is wired, so cable management is important. Also, it's a premium investment. For budget builds, smaller mechanical boards work fine.

## Other Keyboards Worth Considering

Check out our guides for wireless options and compact 60% builds if desk space is tight.

## Quick FAQ

**Are Cherry MX Red switches noisy?** Linear switches are quieter than clicky ones, perfect for gaming without disturbing others.

**Can I reprogram the G-Keys?** Yes, fully customizable via Corsair's iCUE software.

**Does it work on Mac?** Yes, plug-and-play USB compatibility.

## Ready to upgrade your mid lane game?

The Corsair Vengeance K95 is a pro player favourite for a reason. [View on Amazon →](https://www.amazon.co.uk/dp/B07MXMPHJX)

By shopping through our affiliate links, you help RiftMatch provide free League of Legends guides and content.`,
    tags: ['keyboard', 'midlane', 'gaming', 'corsair', 'guide-achat', '2026'],
  })

  // ES: Guia de Auriculares para Support
  await pagesCollection.insertOne({
    slug: 'mejores-auriculares-gaming-support-steelseries',
    locale: 'es',
    template: 'article',
    status: 'published',
    title: 'Mejores auriculares gaming para Support: SteelSeries Arctis Nova Pro Omni',
    seo: {
      title: 'Mejores auriculares LoL Support 2026 - SteelSeries Arctis Nova Pro Omni',
      description: 'Auriculares inalambricos profesionales para Support. Audio HD, cancelacion de ruido, multidispositivo. Resena completa.',
      canonical: 'https://riftmatch.io/es/guides/mejores-auriculares-gaming-support-steelseries',
    },
    hero: {
      type: 'image',
      image: 'https://m.media-amazon.com/images/I/61TQPVy5xQL._AC_SL1500_.jpg',
    },
    excerpt: 'Domina tu rol de Support con auriculares que te permiten escuchar cada paso enemigo. SteelSeries Arctis Nova Pro Omni.',
    content: `# Mejores auriculares gaming para Support: Guia de compra

El Support necesita escuchar todo: pasadas aliadas, pings enemigos, grupos de equipo. Los SteelSeries Arctis Nova Pro Omni te dan esa ventaja auditiva.

## Para quien son estos auriculares?

Support players que dependen del audio posicional para rotar rapido y detectar ganks. El audio de alta resolucion y la cancelacion de ruido te dejan enfocado.

## Fortalezas verificadas

- Audio inalambrico de alta fidelidad (96 kHz/24 bits)
- Cancelacion activa de ruido para eliminar distracciones
- Conecta hasta 5 dispositivos simultaneamente
- Compatible con PC, PlayStation, Xbox y Switch
- Micrófono ClearCast Pro para discord limpio

## Puntos a considerar

Son auriculares premium, asi que es una inversion. Requieren carga (hasta 25 horas de bateria). Verifica el tamaño del auricular para comodidad prolongada.

## Otras opciones en nuestro catalogo

Si prefieres headsets con cable o con mejor soporte de diadema, mira nuestras alternatives.

## FAQ rapida

**Cuanto dura la bateria?** Hasta 25 horas en modo inalambrico.

**Puedo cambiar rapido entre dispositivos?** Si, el cambio es casi instantaneo gracias a OmniPlay.

**El micrófono es bueno para discord?** Si, el ClearCast Pro filtra el ruido de fondo excelentemente.

## Listo para mejorar tu soporte?

Los SteelSeries Arctis Nova Pro Omni son la elecci=on de jugadores profesionales. [Ver en Amazon →](https://www.amazon.es/dp/B0GN8XZY8P)

Al comprar via nuestros enlaces afiliados de Amazon, apoyas a RiftMatch para seguir creando contenido gratuito sobre League of Legends.`,
    tags: ['auriculares', 'support', 'gaming', 'steelseries', 'guia-compra', '2026'],
  })

  // DE: Monitor Guide fur Junglers
  await pagesCollection.insertOne({
    slug: 'bester-gaming-monitor-jungler-asus-rog',
    locale: 'de',
    template: 'article',
    status: 'published',
    title: 'Bester Gaming Monitor fur Jungler: ASUS ROG Swift PG32UCDP 4K OLED',
    seo: {
      title: 'Bester LoL Jungler Monitor 2026 - ASUS ROG Swift PG32UCDP 240Hz OLED',
      description: 'OLED Gaming Monitor 32 Zoll, 240Hz, 4K, perfekt fur League of Legends Jungler. Maximale Sichtbarkeit, minimale Response Time.',
      canonical: 'https://riftmatch.io/de/guides/bester-gaming-monitor-jungler-asus-rog',
    },
    hero: {
      type: 'image',
      image: 'https://m.media-amazon.com/images/I/91fXaLZKZQL._AC_SL1500_.jpg',
    },
    excerpt: 'Der ASUS ROG Swift PG32UCDP ist der ideale Monitor fur competitive Jungling. OLED-Technologie, 240Hz und massive Sichtbarkeit.',
    content: `# Bester Gaming Monitor fur Jungler: Vollstandiger Kaufratgeber

Jungler brauchen maximale Sichtbarkeit der Map. Der ASUS ROG Swift PG32UCDP mit OLED-Technologie gibt dir jeden Detail.

## Fur wen ist dieser Monitor geeignet?

Jungler, die auf Sichtbarkeit, Kontrast und schnelle Response Time angewiesen sind. OLED-Bildschirme zeigen schwarze Bereiche perfekt, was fur Map-Awareness entscheidend ist.

## Verifizierte Starken

- OLED-Panel fur perfekte Schwarzwerte
- 240Hz Refresh Rate bei 4K
- 0.03ms Reaktionszeit (GtG)
- Duales Modus: 4K @ 240Hz oder 1080p @ 480Hz
- 32 Zoll Panel mit hoher Auflосungen
- Full G-SYNC Kompatibilitat

## Dinge zum Bedenken

Dies ist ein Premium-Monitor, also eine erhebliche Investition. OLED-Technologie kann bei extremer Helligkeit langfristig einbrennen (obwohl selten bei Gaming). Auch braucht man eine starke GPU fur volle 4K 240Hz.

## Alternativen in unserem Katalog

Wenn du ein kleineres Panel oder IPS vorziehst, schau dir unsere anderen Monitor-Ratgeber an.

## Schnelle FAQ

**Wie viele HDMI-Anschlуsse hat der Monitor?** 2x HDMI 2.1, plus DisplayPort 2.1.

**Kann ich zwischen 4K und 1080p-Modi wechseln?** Ja, Duales Modus erlaubt schnelle Umschaltung.

**Ist die Montage drehbar?** Ja, vollanpasbar neigbar, schwenkbar und hohenverstellbar.

## Bereit deine Map-Awareness zu verbessern?

Der ASUS ROG Swift PG32UCDP ist die Wahl der Profis. [Auf Amazon anschauen →](https://www.amazon.de/dp/B0D9VR8RPH)

Indem du uber unsere Amazon-Affiliate-Links einkaufst, untersutzst du RiftMatch bei der Erstellung weiterer kostenloser League of Legends Inhalte.`,
    tags: ['monitor', 'jungler', 'gaming', 'asus', 'ratgeber', '2026'],
  })

  // IT: Guida Mouse per Assassini
  await pagesCollection.insertOne({
    slug: 'miglior-mouse-gaming-assassini-razer-deathadder',
    locale: 'it',
    template: 'article',
    status: 'published',
    title: 'Miglior mouse gaming per Assassini: Razer DeathAdder V4 Pro',
    seo: {
      title: 'Miglior mouse LoL Assassino 2026 - Razer DeathAdder V4 Pro Recensione',
      description: 'Mouse gaming wireless ultra-leggero per Assassini. 56g, sensore Focus Pro 45K, 8K Hz polling. Guida completa all\'acquisto.',
      canonical: 'https://riftmatch.io/it/guides/miglior-mouse-gaming-assassini-razer-deathadder',
    },
    hero: {
      type: 'image',
      image: 'https://m.media-amazon.com/images/I/71g8pNVq6qL._AC_SL1500_.jpg',
    },
    excerpt: 'Domina il tuo ruolo di Assassino con il Razer DeathAdder V4 Pro. Leggerissimo, preciso, wireless. La scelta dei pro player.',
    content: `# Miglior mouse gaming per Assassini: Guida completa

Gli Assassini hanno bisogno di velocita e precisione per colpire i loro bersagli. Il Razer DeathAdder V4 Pro e stato progettato esattamente per questo.

## Per chi e questo mouse?

Giocatori di Assassini (Zed, Talon, LeBlanc) che hanno bisogno di movimento rapido e preciso. Con soli 56 grammi, puoi fare micro-movimenti senza fatica.

## Punti di forza verificati

- Sensore ottico Focus Pro 45K per tracciamento massimo
- Peso ultra-leggero: 56 grammi
- Polling rate 8000Hz (wired) e wireless
- Interruttori ottici Gen-4 per click rapidi
- Batteria fino a 150 ore
- Design ergonomico per grip ambidestro

## Cose da considerare

E un mouse premium, quindi un investimento serio. La forma ergonomica potrebbe non adattarsi a tutti i tipi di grip. Wireless puro, quindi niente cable in the way.

## Altre opzioni nel nostro catalogo

Se preferisci un mouse con filo o una forma simmetrica pura, controlla i nostri altri consigli.

## FAQ veloce

**Quanto dura la batteria?** Fino a 150 ore con una singola carica, perfetto per sessioni di gioco prolungate.

**E veramente senza lag wireless?** Si, il wireless HyperSpeed Gen-2 ha latenza minima e affidabile.

**Compatible con Linux?** Si, basta il ricevitore USB.

## Pronto a portare il tuo Assassino al prossimo livello?

Il Razer DeathAdder V4 Pro e la scelta dei pro player mondiali. [Vedi su Amazon →](https://www.amazon.it/dp/B0F3Q8R6V4)

Acquistando tramite i nostri link affiliati Amazon, aiuti RiftMatch a creare piu contenuti gratuiti su League of Legends.`,
    tags: ['mouse', 'assassino', 'gaming', 'razer', 'guida-acquisto', '2026'],
  })
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  const pagesCollection = payload.collections['pages'].model
  
  await pagesCollection.deleteMany({
    slug: {
      $in: [
        'meilleure-souris-gaming-adc-logitech-pro',
        'best-gaming-keyboard-midlane-corsair-k95',
        'mejores-auriculares-gaming-support-steelseries',
        'bester-gaming-monitor-jungler-asus-rog',
        'miglior-mouse-gaming-assassini-razer-deathadder',
      ],
    },
  })
}
