import { CollectionConfig } from 'payload/types'

/**
 * Collection interne pour tracker les migrations exécutées.
 * Ne pas modifier manuellement depuis l'admin.
 */
const Migrations: CollectionConfig = {
  slug: 'migrations',
  admin: {
    useAsTitle: 'migrationId',
    defaultColumns: ['migrationId', 'ranAt'],
    description: 'Migrations de contenu exécutées automatiquement. Ne pas modifier manuellement.',
  },
  // Interne : ni lecture ni écriture publiques. L'API locale des migrations
  // (runner.ts) contourne ces règles, donc rien ne change côté déploiement.
  access: {
    read: ({ req }) => Boolean(req.user),
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'migrationId',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'Identifiant unique de la migration (ex: 001-lol-article)' },
    },
    {
      name: 'ranAt',
      type: 'date',
      required: true,
      admin: { description: 'Date d\'exécution' },
    },
  ],
}

export default Migrations
