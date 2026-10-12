import type { MigrationModule } from './runner'

export const id = '203-affiliate-produits-semaine-1'
export const description = 'Semaine 1: un produit par pays (fr G915 TKL, uk QuadCast S, es BlackShark V2 X, de G502 X Lightspeed, it QcK+), ASIN verifies sur la boutique du pays'

const blocks: any[] = [
  {
    "title": "Logitech G915 TKL",
    "active": true,
    "links": [
      {
        "locale": "fr",
        "url": "https://www.amazon.fr/dp/B07W6H91JG"
      }
    ],
    "product": {
      "name": "Logitech G915 TKL",
      "tagline": "Clavier mécanique sans fil ultra-plat, compact et rétroéclairé RGB",
      "imageUrl": "https://m.media-amazon.com/images/P/B07W6H91JG.01._SCLZZZZZZZ_.jpg",
      "ctaText": "Voir sur Amazon →",
      "badge": "Compact"
    },
    "texts": [
      {
        "locale": "fr",
        "tagline": "Clavier mécanique sans fil ultra-plat, compact et rétroéclairé RGB",
        "ctaText": "Voir sur Amazon →",
        "badge": "Compact",
        "disclosure": "Lien affilié Amazon : nous touchons une commission sans surcoût pour toi."
      }
    ],
    "roles": [
      "all"
    ],
    "disclosure": "Lien affilié Amazon : nous touchons une commission sans surcoût pour toi."
  },
  {
    "title": "HyperX QuadCast S",
    "active": true,
    "links": [
      {
        "locale": "en",
        "url": "https://www.amazon.co.uk/dp/B08G8WH435"
      }
    ],
    "product": {
      "name": "HyperX QuadCast S",
      "tagline": "RGB USB condenser microphone with shock mount and pop filter",
      "imageUrl": "https://m.media-amazon.com/images/P/B08G8WH435.01._SCLZZZZZZZ_.jpg",
      "ctaText": "View on Amazon →",
      "badge": "Streaming"
    },
    "texts": [
      {
        "locale": "en",
        "tagline": "RGB USB condenser microphone with shock mount and pop filter",
        "ctaText": "View on Amazon →",
        "badge": "Streaming",
        "disclosure": "Amazon affiliate link: we earn a commission at no extra cost to you."
      }
    ],
    "roles": [
      "all"
    ],
    "disclosure": "Amazon affiliate link: we earn a commission at no extra cost to you."
  },
  {
    "title": "Razer BlackShark V2 X",
    "active": true,
    "links": [
      {
        "locale": "es",
        "url": "https://www.amazon.es/dp/B086PKMZ21"
      }
    ],
    "product": {
      "name": "Razer BlackShark V2 X",
      "tagline": "Auriculares gaming con cable, drivers de 50 mm y aislamiento de ruido",
      "imageUrl": "https://m.media-amazon.com/images/P/B086PKMZ21.01._SCLZZZZZZZ_.jpg",
      "ctaText": "Ver en Amazon →",
      "badge": "Gaming"
    },
    "texts": [
      {
        "locale": "es",
        "tagline": "Auriculares gaming con cable, drivers de 50 mm y aislamiento de ruido",
        "ctaText": "Ver en Amazon →",
        "badge": "Gaming",
        "disclosure": "Enlace de afiliado de Amazon: ganamos una comisión sin coste adicional para ti."
      }
    ],
    "roles": [
      "all"
    ],
    "disclosure": "Enlace de afiliado de Amazon: ganamos una comisión sin coste adicional para ti."
  },
  {
    "title": "Logitech G502 X Lightspeed",
    "active": true,
    "links": [
      {
        "locale": "de",
        "url": "https://www.amazon.de/dp/B07W7L4RBX"
      }
    ],
    "product": {
      "name": "Logitech G502 X Lightspeed",
      "tagline": "Kabellose Gaming-Maus mit HERO-25K-Sensor und LIGHTFORCE-Hybridschaltern",
      "imageUrl": "https://m.media-amazon.com/images/P/B07W7L4RBX.01._SCLZZZZZZZ_.jpg",
      "ctaText": "Bei Amazon ansehen →",
      "badge": "Wireless"
    },
    "texts": [
      {
        "locale": "de",
        "tagline": "Kabellose Gaming-Maus mit HERO-25K-Sensor und LIGHTFORCE-Hybridschaltern",
        "ctaText": "Bei Amazon ansehen →",
        "badge": "Wireless",
        "disclosure": "Amazon-Affiliate-Link: Wir erhalten eine Provision, für dich entstehen keine Mehrkosten."
      }
    ],
    "roles": [
      "all"
    ],
    "disclosure": "Amazon-Affiliate-Link: Wir erhalten eine Provision, für dich entstehen keine Mehrkosten."
  },
  {
    "title": "SteelSeries QcK+",
    "active": true,
    "links": [
      {
        "locale": "it",
        "url": "https://www.amazon.it/dp/B000UVRU6G"
      }
    ],
    "product": {
      "name": "SteelSeries QcK+",
      "tagline": "Tappetino in tessuto con superficie microtessuta, formato L 450 x 400 mm",
      "imageUrl": "https://m.media-amazon.com/images/P/B000UVRU6G.01._SCLZZZZZZZ_.jpg",
      "ctaText": "Vedi su Amazon →",
      "badge": "Controllo"
    },
    "texts": [
      {
        "locale": "it",
        "tagline": "Tappetino in tessuto con superficie microtessuta, formato L 450 x 400 mm",
        "ctaText": "Vedi su Amazon →",
        "badge": "Controllo",
        "disclosure": "Link di affiliazione Amazon: riceviamo una commissione senza costi aggiuntivi per te."
      }
    ],
    "roles": [
      "all"
    ],
    "disclosure": "Link di affiliazione Amazon: riceviamo una commissione senza costi aggiuntivi per te."
  }
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const b of blocks) {
    const ex = await payload.find({ collection: 'affiliate-blocks', where: { title: { equals: b.title } }, limit: 1 })
    if (ex.docs.length > 0) { console.log(`skip ${b.title}`); continue }
    await payload.create({ collection: 'affiliate-blocks', data: b })
    console.log(`ok ${b.title} (${b.links[0].locale})`)
  }
}
