#!/usr/bin/env node
// Controle d'une migration AVANT push. Usage: node scripts/check-migration.mjs <fichier.ts> [...]
// Charge le fichier, exporte id + up, execute up() contre un faux Payload qui valide
// chaque create/update (formes de champs, enums, dates, tirets longs, doublons de slug).
// Sortie code 1 au premier probleme : ne PAS pousser.
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, basename } from 'node:path'
import { pathToFileURL } from 'node:url'

const ENUMS = {
  news: {
    newsType: ['lck', 'lec', 'lpl', 'international', 'autres-regions', 'riot'],
    newsSubtype: ['resultats', 'mercato', 'other'],
    category: ['news', 'champion', 'meta', 'esports', 'announcement', 'update'],
    locale: ['fr', 'en', 'es', 'de', 'it', 'all'],
    status: ['draft', 'published'],
  },
}
const errs = []
const bad = (m) => errs.push(m)

function walkText(n, out = []) {
  if (typeof n === 'string') out.push(n)
  else if (Array.isArray(n)) n.forEach((x) => walkText(x, out))
  else if (n && typeof n === 'object') Object.values(n).forEach((x) => walkText(x, out))
  return out
}

function checkData(coll, data, where) {
  if (/[\u2014\u2013]/.test(walkText(data).join(' '))) bad(`${where}: tiret long ou demi-cadratin dans le contenu`)
  if (coll === 'news') {
    for (const [k, vals] of Object.entries(ENUMS.news)) {
      if (data[k] !== undefined && !vals.includes(data[k])) bad(`${where}: ${k}="${data[k]}" hors enum`)
    }
    if (data.tags !== undefined) {
      if (!Array.isArray(data.tags) || data.tags.some((t) => !t || typeof t !== 'object' || typeof t.tag !== 'string'))
        bad(`${where}: tags doit etre [{ tag: 'x' }], pas un tableau de chaines`)
    }
    if (data.publishedAt !== undefined && Number.isNaN(new Date(data.publishedAt).getTime())) bad(`${where}: publishedAt invalide`)
    if (data.status === 'published') {
      for (const k of ['slug', 'title', 'excerpt', 'content', 'locale', 'publishedAt', 'sourceUrl'])
        if (!data[k] || (Array.isArray(data[k]) && !data[k].length)) bad(`${where}: champ "${k}" manquant`)
      if (data.sourceUrl && !/^https?:\/\//.test(data.sourceUrl)) bad(`${where}: sourceUrl n'est pas une URL`)
      if (data.slug && data.locale && !data.slug.endsWith('-' + data.locale)) bad(`${where}: le slug doit finir par -${data.locale}`)
      if (data.coverImage) bad(`${where}: pas de coverImage dans les migrations de news (couverture geree par le front)`)
    }
    if (Array.isArray(data.content)) {
      for (const n of data.content) {
        if (!n || typeof n.type !== 'string' || !Array.isArray(n.children)) bad(`${where}: noeud de contenu invalide`)
      }
    }
  }
}

function fakePayload(slugsSeen) {
  const mk = (kind) => async (a) => {
    const coll = a.collection
    const d = a.data || {}
    if (kind === 'create' || kind === 'update') {
      const w = `${coll}:${d.slug || a.id || '?'}`
      checkData(coll, d, w)
      if (kind === 'create' && d.slug) {
        const key = coll === 'patch-notes' ? `${coll}/${d.slug}/${d.locale}` : `${coll}/${d.slug}`
        if (slugsSeen.has(key)) bad(`${w}: slug cree deux fois`)
        slugsSeen.add(key)
      }
    }
    if (kind === 'find') return { docs: [], totalDocs: 0 }
    return { id: 'fake' }
  }
  return {
    find: mk('find'), findByID: async () => null, create: mk('create'), update: mk('update'), delete: async () => ({}),
    db: { connection: { collection: () => { bad('ecriture directe dans Mongo interdite (db.connection)'); return {} } } },
    logger: { info() {}, warn() {}, error() {} },
  }
}

const files = process.argv.slice(2)
if (!files.length) { console.error('usage: check-migration.mjs fichier.ts ...'); process.exit(2) }
const tmp = mkdtempSync(join(tmpdir(), 'chkmig-'))
for (const f of files) {
  const src = readFileSync(f, 'utf8')
  const name = basename(f)
  if (!/^\d{3}-.+\.ts$/.test(name)) bad(`${name}: nom attendu NNN-slug.ts`)
  if (/db\.connection|MongoClient|mongoose\./.test(src)) bad(`${name}: acces direct a Mongo interdit`)
  if (!/from '\.\/runner'/.test(src)) bad(`${name}: import type { MigrationModule } from './runner' manquant`)
  const copy = join(tmp, name.replace(/\.ts$/, '.mts'))
  writeFileSync(copy, src)
  let m
  try { m = await import(pathToFileURL(copy).href) } catch (e) { bad(`${name}: import impossible: ${e.message}`); continue }
  if (typeof m.id !== 'string') bad(`${name}: export id manquant`)
  else if (m.id !== name.replace(/\.ts$/, '')) bad(`${name}: id "${m.id}" different du nom de fichier`)
  if (typeof m.up !== 'function') { bad(`${name}: export up manquant`); continue }
  try { await m.up(fakePayload(new Set())) } catch (e) { bad(`${name}: up() a plante: ${e.message}`) }
}
if (errs.length) { console.error('MIGRATION INVALIDE, ne pas pousser:\n- ' + errs.join('\n- ')); process.exit(1) }
console.log(`OK: ${files.length} migration(s) valide(s)`)
