import type { MigrationModule } from './runner'

export const id = '218-logitech-gpro-affiliate-weekly'
export const description = 'Bloc affiliation Logitech G PRO X SUPERLIGHT 2: souris gaming pro-grade, 5 boutiques (fr, uk, es, de, it), ASINs verifies'

const block = {
  title: 'Logitech G PRO X SUPERLIGHT 2',
  active: true,
  links: [
    {
      locale: 'fr',
      url: 'https://www.amazon.fr/dp/B07W5JKP66'
    },
    {
      locale: 'en',
      url: 'https://www.amazon.co.uk/dp/B07W5JKP66'
    },
    {
      locale: 'es',
      url: 'https://www.amazon.es/dp/B07W5JKP66'
    },
    {
      locale: 'de',
      url: 'https://www.amazon.de/dp/B07W5JKP66'
    },
    {
      locale: 'it',
      url: 'https://www.amazon.it/dp/B07W5JKP66'
    }
  ],
  product: {
    name: 'Logitech G PRO X SUPERLIGHT 2',
    tagline: 'Souris gaming sans fil ultra-legere 60g, capteur 44000 DPI, switches LIGHTFORCE',
    imageUrl: 'https://m.media-amazon.com/images/P/B07W5JKP66.01._SCLZZZZZZZ_.jpg',
    ctaText: 'Voir sur Amazon →',
    badge: 'Pro-Grade'
  },
  texts: [
    {
      locale: 'fr',
      tagline: 'Souris gaming sans fil ultra-legere 60g, capteur 44000 DPI, switches LIGHTFORCE',
      ctaText: 'Voir sur Amazon →',
      badge: 'Pro-Grade',
      disclosure: 'Lien affilie Amazon : nous touchons une commission sans surcout pour toi.'
    },
    {
      locale: 'en',
      tagline: 'Ultra-lightweight 60g wireless gaming mouse, 44000 DPI sensor, LIGHTFORCE switches',
      ctaText: 'View on Amazon →',
      badge: 'Pro-Grade',
      disclosure: 'Amazon affiliate link: we earn a commission at no extra cost to you.'
    },
    {
      locale: 'es',
      tagline: 'Raton gaming inalambrico ultra ligero 60g, sensor 44000 DPI, switches LIGHTFORCE',
      ctaText: 'Ver en Amazon →',
      badge: 'Pro-Grade',
      disclosure: 'Enlace de afiliado de Amazon: ganamos una comision sin coste adicional para ti.'
    },
    {
      locale: 'de',
      tagline: 'Ultra-leichte 60g kabellose Gaming-Maus, 44000-DPI-Sensor, LIGHTFORCE-Schalter',
      ctaText: 'Bei Amazon ansehen →',
      badge: 'Pro-Grade',
      disclosure: 'Amazon-Affiliate-Link: Wir erhalten eine Provision, fuer dich entstehen keine Mehrkosten.'
    },
    {
      locale: 'it',
      tagline: 'Ultraleggero mouse gaming wireless 60g, sensore 44000 DPI, switch LIGHTFORCE',
      ctaText: 'Vedi su Amazon →',
      badge: 'Pro-Grade',
      disclosure: 'Link di affiliazione Amazon: riceviamo una commissione senza costi aggiuntivi per te.'
    }
  ],
  roles: ['all'],
  disclosure: 'Lien affilie Amazon : nous touchons une commission sans surcout pour toi.'
}

export const up: MigrationModule['up'] = async (payload) => {
  const existingBlock = await payload.find({
    collection: 'affiliate-blocks',
    where: {
      title: {
        equals: 'Logitech G PRO X SUPERLIGHT 2'
      }
    }
  })

  if (existingBlock.docs && existingBlock.docs.length > 0) {
    console.log('Logitech G PRO X SUPERLIGHT 2 block already exists, skipping')
    return
  }

  await payload.create({
    collection: 'affiliate-blocks',
    data: block
  })

  console.log('Created Logitech G PRO X SUPERLIGHT 2 affiliate block')
}
