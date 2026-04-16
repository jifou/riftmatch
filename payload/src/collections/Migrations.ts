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
  access: {
    read: () => true,
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
