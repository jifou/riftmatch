import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-mongodb'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const affiliateBlocksCollection = payload.collections['affiliate-blocks'].model

  // FR: Logitech G PRO X SUPERLIGHT 2
  await affiliateBlocksCollection.insertOne({
    slug: 'logitech-g-pro-superlight-2-fr',
    locale: 'fr',
    roles: ['all'],
    texts: [
      {
        locale: 'fr',
        tagline: 'La souris sans fil ultime pour dominer en solo queue',
        ctaText: 'Voir sur Amazon →',
        badge: 'Meilleure souris gaming',
        disclosure: 'Liens affilies Amazon. Les achats via ces liens nous permettent de vous proposer du contenu gratuit.',
      },
    ],
    links: [
      {
        locale: 'fr',
        url: 'https://www.amazon.fr/dp/B07W5JKP66',
        label: 'Amazon.fr',
      },
    ],
  })

  // EN: Corsair Vengeance K95
  await affiliateBlocksCollection.insertOne({
    slug: 'corsair-vengeance-k95-en',
    locale: 'en',
    roles: ['all'],
    texts: [
      {
        locale: 'en',
        tagline: 'Pro-grade mechanical keyboard for League of Legends',
        ctaText: 'View on Amazon →',
        badge: 'Pro Player Favorite',
        disclosure: 'Amazon affiliate links. Purchases via these links help us provide free content.',
      },
    ],
    links: [
      {
        locale: 'en',
        url: 'https://www.amazon.co.uk/dp/B07MXMPHJX',
        label: 'Amazon.co.uk',
      },
    ],
  })

  // ES: SteelSeries Arctis Nova Pro Omni
  await affiliateBlocksCollection.insertOne({
    slug: 'steelseries-arctis-nova-pro-omni-es',
    locale: 'es',
    roles: ['all'],
    texts: [
      {
        locale: 'es',
        tagline: 'Auriculares inalambricos de calidad profesional para gamers competitivos',
        ctaText: 'Ver en Amazon →',
        badge: 'Audio de Campeonato',
        disclosure: 'Enlaces afiliados de Amazon. Las compras a través de estos enlaces nos ayudan a ofrecerte contenido gratuito.',
      },
    ],
    links: [
      {
        locale: 'es',
        url: 'https://www.amazon.es/dp/B0GN8XZY8P',
        label: 'Amazon.es',
      },
    ],
  })

  // DE: ASUS ROG Swift PG32UCDP
  await affiliateBlocksCollection.insertOne({
    slug: 'asus-rog-swift-pg32ucdp-de',
    locale: 'de',
    roles: ['all'],
    texts: [
      {
        locale: 'de',
        tagline: 'Der perfekte OLED-Gaming-Monitor fur competitive League of Legends',
        ctaText: 'Auf Amazon anschauen →',
        badge: 'Top Gaming Monitor',
        disclosure: 'Amazon-Affiliate-Links. Einkaufe uber diese Links helfen uns, kostenlose Inhalte anzubieten.',
      },
    ],
    links: [
      {
        locale: 'de',
        url: 'https://www.amazon.de/dp/B0D9VR8RPH',
        label: 'Amazon.de',
      },
    ],
  })

  // IT: Razer DeathAdder V4 Pro
  await affiliateBlocksCollection.insertOne({
    slug: 'razer-deathadder-v4-pro-it',
    locale: 'it',
    roles: ['all'],
    texts: [
      {
        locale: 'it',
        tagline: 'Mouse gaming wireless ultra-leggero per i pro player di League of Legends',
        ctaText: 'Vedi su Amazon →',
        badge: 'Mouse dei Campioni',
        disclosure: 'Link affiliati Amazon. Gli acquisti tramite questi link ci aiutano a fornirti contenuti gratuiti.',
      },
    ],
    links: [
      {
        locale: 'it',
        url: 'https://www.amazon.it/dp/B0F3Q8R6V4',
        label: 'Amazon.it',
      },
    ],
  })
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  const affiliateBlocksCollection = payload.collections['affiliate-blocks'].model
  
  await affiliateBlocksCollection.deleteMany({
    slug: {
      $in: [
        'logitech-g-pro-superlight-2-fr',
        'corsair-vengeance-k95-en',
        'steelseries-arctis-nova-pro-omni-es',
        'asus-rog-swift-pg32ucdp-de',
        'razer-deathadder-v4-pro-it',
      ],
    },
  })
}
