import type { MigrationModule } from './runner'

export const id = '196-affiliate-blocks-5-langues'
export const description = 'Reconstruit les blocs affiliation: un lien par boutique (fr, uk, es, de, it), textes dans chaque langue, ASIN verifies, ancien clavier Logitech (introuvable) retire'

const blocks: any[] = [
  {
    "title": "SteelSeries Arctis Nova Pro Wireless",
    "active": true,
    "links": [
      {
        "locale": "fr",
        "url": "https://www.amazon.fr/dp/B09ZLRCH1H"
      },
      {
        "locale": "en",
        "url": "https://www.amazon.co.uk/dp/B09ZLRCH1H"
      },
      {
        "locale": "es",
        "url": "https://www.amazon.es/dp/B09ZLRCH1H"
      },
      {
        "locale": "de",
        "url": "https://www.amazon.de/dp/B09ZLRCH1H"
      },
      {
        "locale": "it",
        "url": "https://www.amazon.it/dp/B09ZLRCH1H"
      }
    ],
    "product": {
      "name": "SteelSeries Arctis Nova Pro Wireless",
      "tagline": "Casque sans fil premium : réduction de bruit, double batterie, son Hi-Res",
      "imageUrl": "https://m.media-amazon.com/images/I/6127E5qjhNL._AC_SL1500_.jpg",
      "ctaText": "Voir sur Amazon →",
      "badge": "Premium"
    },
    "texts": [
      {
        "locale": "fr",
        "tagline": "Casque sans fil premium : réduction de bruit, double batterie, son Hi-Res",
        "ctaText": "Voir sur Amazon →",
        "badge": "Premium",
        "disclosure": "Lien affilié Amazon : nous touchons une commission sans surcoût pour toi."
      },
      {
        "locale": "en",
        "tagline": "Premium wireless headset: noise cancelling, dual battery, Hi-Res audio",
        "ctaText": "View on Amazon →",
        "badge": "Premium",
        "disclosure": "Amazon affiliate link: we earn a commission at no extra cost to you."
      },
      {
        "locale": "es",
        "tagline": "Auriculares inalámbricos premium: cancelación de ruido, doble batería, sonido Hi-Res",
        "ctaText": "Ver en Amazon →",
        "badge": "Premium",
        "disclosure": "Enlace de afiliado de Amazon: ganamos una comisión sin coste adicional para ti."
      },
      {
        "locale": "de",
        "tagline": "Premium-Wireless-Headset: Geräuschunterdrückung, Dual-Akku, Hi-Res-Sound",
        "ctaText": "Bei Amazon ansehen →",
        "badge": "Premium",
        "disclosure": "Amazon-Affiliate-Link: Wir erhalten eine Provision, für dich entstehen keine Mehrkosten."
      },
      {
        "locale": "it",
        "tagline": "Cuffie wireless premium: cancellazione del rumore, doppia batteria, audio Hi-Res",
        "ctaText": "Vedi su Amazon →",
        "badge": "Premium",
        "disclosure": "Link di affiliazione Amazon: riceviamo una commissione senza costi aggiuntivi per te."
      }
    ],
    "roles": [
      "all"
    ],
    "disclosure": "Lien affilié Amazon : nous touchons une commission sans surcoût pour toi."
  },
  {
    "title": "HyperX Cloud III",
    "active": true,
    "links": [
      {
        "locale": "fr",
        "url": "https://www.amazon.fr/dp/B0C3BSZ56D"
      },
      {
        "locale": "en",
        "url": "https://www.amazon.co.uk/dp/B0C3BSZ56D"
      },
      {
        "locale": "es",
        "url": "https://www.amazon.es/dp/B0C3BSZ56D"
      },
      {
        "locale": "de",
        "url": "https://www.amazon.de/dp/B0C3BSZ56D"
      },
      {
        "locale": "it",
        "url": "https://www.amazon.it/dp/B0C3BSZ56D"
      }
    ],
    "product": {
      "name": "HyperX Cloud III",
      "tagline": "Audio spatial pour entendre chaque pas ennemi",
      "imageUrl": "https://m.media-amazon.com/images/I/61Ty0MKXl0L._AC_SL1500_.jpg",
      "ctaText": "Voir sur Amazon →",
      "badge": ""
    },
    "texts": [
      {
        "locale": "fr",
        "tagline": "Audio spatial pour entendre chaque pas ennemi",
        "ctaText": "Voir sur Amazon →",
        "badge": "",
        "disclosure": "Lien affilié Amazon : nous touchons une commission sans surcoût pour toi."
      },
      {
        "locale": "en",
        "tagline": "Spatial audio to hear every enemy footstep",
        "ctaText": "View on Amazon →",
        "badge": "",
        "disclosure": "Amazon affiliate link: we earn a commission at no extra cost to you."
      },
      {
        "locale": "es",
        "tagline": "Audio espacial para oír cada paso enemigo",
        "ctaText": "Ver en Amazon →",
        "badge": "",
        "disclosure": "Enlace de afiliado de Amazon: ganamos una comisión sin coste adicional para ti."
      },
      {
        "locale": "de",
        "tagline": "Räumlicher Sound, damit du jeden gegnerischen Schritt hörst",
        "ctaText": "Bei Amazon ansehen →",
        "badge": "",
        "disclosure": "Amazon-Affiliate-Link: Wir erhalten eine Provision, für dich entstehen keine Mehrkosten."
      },
      {
        "locale": "it",
        "tagline": "Audio spaziale per sentire ogni passo nemico",
        "ctaText": "Vedi su Amazon →",
        "badge": "",
        "disclosure": "Link di affiliazione Amazon: riceviamo una commissione senza costi aggiuntivi per te."
      }
    ],
    "roles": [
      "all"
    ],
    "disclosure": "Lien affilié Amazon : nous touchons une commission sans surcoût pour toi."
  },
  {
    "title": "SteelSeries Arctis Nova 3",
    "active": true,
    "links": [
      {
        "locale": "fr",
        "url": "https://www.amazon.fr/dp/B0B7X65SX2"
      },
      {
        "locale": "en",
        "url": "https://www.amazon.co.uk/dp/B0B7X65SX2"
      },
      {
        "locale": "es",
        "url": "https://www.amazon.es/dp/B0B7X65SX2"
      },
      {
        "locale": "de",
        "url": "https://www.amazon.de/dp/B0B7X65SX2"
      },
      {
        "locale": "it",
        "url": "https://www.amazon.it/dp/B0B7X65SX2"
      }
    ],
    "product": {
      "name": "SteelSeries Arctis Nova 3",
      "tagline": "Le casque gaming des champions LoL",
      "imageUrl": "https://m.media-amazon.com/images/I/714apDSEyPL._AC_SL1500_.jpg",
      "ctaText": "Voir sur Amazon →",
      "badge": "Top ventes"
    },
    "texts": [
      {
        "locale": "fr",
        "tagline": "Le casque gaming des champions LoL",
        "ctaText": "Voir sur Amazon →",
        "badge": "Top ventes",
        "disclosure": "Lien affilié Amazon : nous touchons une commission sans surcoût pour toi."
      },
      {
        "locale": "en",
        "tagline": "The gaming headset for LoL champions",
        "ctaText": "View on Amazon →",
        "badge": "Best seller",
        "disclosure": "Amazon affiliate link: we earn a commission at no extra cost to you."
      },
      {
        "locale": "es",
        "tagline": "Los auriculares gaming de los campeones de LoL",
        "ctaText": "Ver en Amazon →",
        "badge": "Más vendido",
        "disclosure": "Enlace de afiliado de Amazon: ganamos una comisión sin coste adicional para ti."
      },
      {
        "locale": "de",
        "tagline": "Das Gaming-Headset der LoL-Champions",
        "ctaText": "Bei Amazon ansehen →",
        "badge": "Bestseller",
        "disclosure": "Amazon-Affiliate-Link: Wir erhalten eine Provision, für dich entstehen keine Mehrkosten."
      },
      {
        "locale": "it",
        "tagline": "Le cuffie gaming dei campioni di LoL",
        "ctaText": "Vedi su Amazon →",
        "badge": "Più venduto",
        "disclosure": "Link di affiliazione Amazon: riceviamo una commissione senza costi aggiuntivi per te."
      }
    ],
    "roles": [
      "all"
    ],
    "disclosure": "Lien affilié Amazon : nous touchons une commission sans surcoût pour toi."
  },
  {
    "title": "Logitech G Pro X Superlight 2",
    "active": true,
    "links": [
      {
        "locale": "fr",
        "url": "https://www.amazon.fr/dp/B0F1YS92S2"
      },
      {
        "locale": "en",
        "url": "https://www.amazon.co.uk/dp/B0F1YS92S2"
      },
      {
        "locale": "es",
        "url": "https://www.amazon.es/dp/B0F1YS92S2"
      },
      {
        "locale": "de",
        "url": "https://www.amazon.de/dp/B0F1YS92S2"
      },
      {
        "locale": "it",
        "url": "https://www.amazon.it/dp/B0F1YS92S2"
      }
    ],
    "product": {
      "name": "Logitech G Pro X Superlight 2",
      "tagline": "La souris des pros LoL : légère, précise, sans fil",
      "imageUrl": "https://m.media-amazon.com/images/I/51GXWO654+L._AC_SL1500_.jpg",
      "ctaText": "Voir sur Amazon →",
      "badge": "Choix des pros"
    },
    "texts": [
      {
        "locale": "fr",
        "tagline": "La souris des pros LoL : légère, précise, sans fil",
        "ctaText": "Voir sur Amazon →",
        "badge": "Choix des pros",
        "disclosure": "Lien affilié Amazon : nous touchons une commission sans surcoût pour toi."
      },
      {
        "locale": "en",
        "tagline": "The pro LoL mouse: light, precise, wireless",
        "ctaText": "View on Amazon →",
        "badge": "Pro choice",
        "disclosure": "Amazon affiliate link: we earn a commission at no extra cost to you."
      },
      {
        "locale": "es",
        "tagline": "El ratón de los pros de LoL: ligero, preciso, inalámbrico",
        "ctaText": "Ver en Amazon →",
        "badge": "Elección de pros",
        "disclosure": "Enlace de afiliado de Amazon: ganamos una comisión sin coste adicional para ti."
      },
      {
        "locale": "de",
        "tagline": "Die Maus der LoL-Profis: leicht, präzise, kabellos",
        "ctaText": "Bei Amazon ansehen →",
        "badge": "Profi-Wahl",
        "disclosure": "Amazon-Affiliate-Link: Wir erhalten eine Provision, für dich entstehen keine Mehrkosten."
      },
      {
        "locale": "it",
        "tagline": "Il mouse dei pro di LoL: leggero, preciso, wireless",
        "ctaText": "Vedi su Amazon →",
        "badge": "Scelta dei pro",
        "disclosure": "Link di affiliazione Amazon: riceviamo una commissione senza costi aggiuntivi per te."
      }
    ],
    "roles": [
      "all"
    ],
    "disclosure": "Lien affilié Amazon : nous touchons une commission sans surcoût pour toi."
  },
  {
    "title": "Razer DeathAdder V3",
    "active": true,
    "links": [
      {
        "locale": "fr",
        "url": "https://www.amazon.fr/dp/B0B6XTDJS1"
      },
      {
        "locale": "en",
        "url": "https://www.amazon.co.uk/dp/B0B6XTDJS1"
      },
      {
        "locale": "es",
        "url": "https://www.amazon.es/dp/B0B6XTDJS1"
      },
      {
        "locale": "de",
        "url": "https://www.amazon.de/dp/B0B6XTDJS1"
      },
      {
        "locale": "it",
        "url": "https://www.amazon.it/dp/B0B6XTDJS1"
      }
    ],
    "product": {
      "name": "Razer DeathAdder V3",
      "tagline": "Précision extrême pour les ADC et les midlaners",
      "imageUrl": "https://m.media-amazon.com/images/I/61Syl8a3uwL._AC_SL1500_.jpg",
      "ctaText": "Voir sur Amazon →",
      "badge": ""
    },
    "texts": [
      {
        "locale": "fr",
        "tagline": "Précision extrême pour les ADC et les midlaners",
        "ctaText": "Voir sur Amazon →",
        "badge": "",
        "disclosure": "Lien affilié Amazon : nous touchons une commission sans surcoût pour toi."
      },
      {
        "locale": "en",
        "tagline": "Extreme precision for ADCs and midlaners",
        "ctaText": "View on Amazon →",
        "badge": "",
        "disclosure": "Amazon affiliate link: we earn a commission at no extra cost to you."
      },
      {
        "locale": "es",
        "tagline": "Precisión extrema para ADCs y midlaners",
        "ctaText": "Ver en Amazon →",
        "badge": "",
        "disclosure": "Enlace de afiliado de Amazon: ganamos una comisión sin coste adicional para ti."
      },
      {
        "locale": "de",
        "tagline": "Extreme Präzision für ADCs und Midlaner",
        "ctaText": "Bei Amazon ansehen →",
        "badge": "",
        "disclosure": "Amazon-Affiliate-Link: Wir erhalten eine Provision, für dich entstehen keine Mehrkosten."
      },
      {
        "locale": "it",
        "tagline": "Precisione estrema per ADC e midlaner",
        "ctaText": "Vedi su Amazon →",
        "badge": "",
        "disclosure": "Link di affiliazione Amazon: riceviamo una commissione senza costi aggiuntivi per te."
      }
    ],
    "roles": [
      "adc",
      "mage",
      "assassin"
    ],
    "disclosure": "Lien affilié Amazon : nous touchons une commission sans surcoût pour toi."
  },
  {
    "title": "BenQ Zowie XL2540K",
    "active": true,
    "links": [
      {
        "locale": "fr",
        "url": "https://www.amazon.fr/dp/B08M671TZX"
      },
      {
        "locale": "es",
        "url": "https://www.amazon.es/dp/B08M671TZX"
      },
      {
        "locale": "de",
        "url": "https://www.amazon.de/dp/B08M671TZX"
      },
      {
        "locale": "it",
        "url": "https://www.amazon.it/dp/B08M671TZX"
      }
    ],
    "product": {
      "name": "BenQ Zowie XL2540K",
      "tagline": "Moniteur 240 Hz prisé des joueurs classés",
      "imageUrl": "https://m.media-amazon.com/images/I/614BSKsARkL._AC_SL1500_.jpg",
      "ctaText": "Voir sur Amazon →",
      "badge": "Choix des pros"
    },
    "texts": [
      {
        "locale": "fr",
        "tagline": "Moniteur 240 Hz prisé des joueurs classés",
        "ctaText": "Voir sur Amazon →",
        "badge": "Choix des pros",
        "disclosure": "Lien affilié Amazon : nous touchons une commission sans surcoût pour toi."
      },
      {
        "locale": "es",
        "tagline": "Monitor de 240 Hz preferido por los jugadores clasificados",
        "ctaText": "Ver en Amazon →",
        "badge": "Elección de pros",
        "disclosure": "Enlace de afiliado de Amazon: ganamos una comisión sin coste adicional para ti."
      },
      {
        "locale": "de",
        "tagline": "240-Hz-Monitor, beliebt bei Ranked-Spielern",
        "ctaText": "Bei Amazon ansehen →",
        "badge": "Profi-Wahl",
        "disclosure": "Amazon-Affiliate-Link: Wir erhalten eine Provision, für dich entstehen keine Mehrkosten."
      },
      {
        "locale": "it",
        "tagline": "Monitor da 240 Hz amato dai giocatori ranked",
        "ctaText": "Vedi su Amazon →",
        "badge": "Scelta dei pro",
        "disclosure": "Link di affiliazione Amazon: riceviamo una commissione senza costi aggiuntivi per te."
      }
    ],
    "roles": [
      "all"
    ],
    "disclosure": "Lien affilié Amazon : nous touchons une commission sans surcoût pour toi."
  },
  {
    "title": "HyperX Cloud Alpha",
    "active": true,
    "links": [
      {
        "locale": "fr",
        "url": "https://www.amazon.fr/dp/B074NBSF9N"
      },
      {
        "locale": "en",
        "url": "https://www.amazon.co.uk/dp/B074NBSF9N"
      }
    ],
    "product": {
      "name": "HyperX Cloud Alpha",
      "tagline": "Le confort légendaire pour les longues sessions",
      "imageUrl": "https://m.media-amazon.com/images/I/71++S+DNJ+L._AC_SL1500_.jpg",
      "ctaText": "Voir sur Amazon →",
      "badge": "Meilleur rapport qualité prix"
    },
    "texts": [
      {
        "locale": "fr",
        "tagline": "Le confort légendaire pour les longues sessions",
        "ctaText": "Voir sur Amazon →",
        "badge": "Meilleur rapport qualité prix",
        "disclosure": "Lien affilié Amazon : nous touchons une commission sans surcoût pour toi."
      },
      {
        "locale": "en",
        "tagline": "Legendary comfort for long gaming sessions",
        "ctaText": "View on Amazon →",
        "badge": "Best value",
        "disclosure": "Amazon affiliate link: we earn a commission at no extra cost to you."
      }
    ],
    "roles": [
      "all"
    ],
    "disclosure": "Lien affilié Amazon : nous touchons une commission sans surcoût pour toi."
  }
]

export const up: MigrationModule['up'] = async (payload) => {
  const old = await payload.find({ collection: 'affiliate-blocks', limit: 200, depth: 0 })
  for (const d of old.docs) await payload.delete({ collection: 'affiliate-blocks', id: d.id })
  console.log(`   ${old.docs.length} ancien(s) bloc(s) supprime(s)`)
  for (const b of blocks) {
    await payload.create({ collection: 'affiliate-blocks', data: b })
    console.log(`   ok ${b.title} (${b.links.map((l: any) => l.locale).join(',')})`)
  }
}
