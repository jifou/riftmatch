/**
 * Migration runner
 *
 * Charge tous les fichiers de migrations/*, vérifie lesquels ont déjà
 * tourné (collection `migrations` dans Payload), et exécute les pending
 * dans l'ordre alphabétique.
 *
 * Usage : npm run migrate
 */
import payload from 'payload'
import path from 'path'
import fs from 'fs'
require('dotenv').config()

export type MigrationModule = {
  id: string
  description?: string
  up: (payload: typeof import('payload').default) => Promise<void>
}

async function run() {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || 'CHANGE_ME_IN_PRODUCTION',
    local: true,
  })

  // Charger tous les fichiers de migration (sauf runner.ts lui-même)
  const migrationsDir = path.resolve(__dirname)
  const ext = __filename.endsWith('.ts') ? '.ts' : '.js'
  const files = fs
    .readdirSync(migrationsDir)
    .filter(f => f.endsWith(ext) && !f.startsWith('runner'))
    .sort() // ordre alphabétique = ordre numérique (001-, 002-, ...)

  if (files.length === 0) {
    console.log('Aucune migration trouvée.')
    process.exit(0)
  }

  // Récupérer les migrations déjà exécutées
  const ranResult = await payload.find({
    collection: 'migrations',
    limit: 1000,
  })
  const ranIds = new Set(ranResult.docs.map((d: any) => d.migrationId))

  let pendingCount = 0
  let ranCount = 0

  for (const file of files) {
    const mod: MigrationModule = require(path.join(migrationsDir, file))

    if (!mod.id || typeof mod.up !== 'function') {
      console.warn(`⚠  ${file} : export "id" ou "up" manquant — ignoré`)
      continue
    }

    if (ranIds.has(mod.id)) {
      console.log(`⏭  [${mod.id}] déjà exécutée`)
      ranCount++
      continue
    }

    console.log(`▶  [${mod.id}] ${mod.description || ''}`)
    try {
      await mod.up(payload)

      // Marquer comme exécutée
      await payload.create({
        collection: 'migrations',
        data: { migrationId: mod.id, ranAt: new Date().toISOString() },
      })

      console.log(`✅  [${mod.id}] OK`)
      pendingCount++
    } catch (err) {
      console.error(`❌  [${mod.id}] ERREUR :`, err)
      process.exit(1)
    }
  }

  console.log(`\nMigrations terminées — ${pendingCount} exécutée(s), ${ranCount} ignorée(s).`)
  process.exit(0)
}

run().catch(err => {
  console.error('Erreur runner :', err)
  process.exit(1)
})
