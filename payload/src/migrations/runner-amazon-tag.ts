/**
 * Remplace l'ancien tag Associates FR par le tag reel du compte (riftmatchiofr-21)
 * sur les liens amazon.fr uniquement. Les autres boutiques ne sont pas touchees.
 * Le nom commence par "runner" pour que le runner ne le charge pas comme migration.
 */
export const FR_TAG = 'riftmatchiofr-21'

const OLD_FR_TAG = /(https:\/\/www\.amazon\.fr\/[^"'\s<>]*?[?&]tag=)(?:riftmatchio|riftmatch)-21(?![\w-])/g

export function fixFrTag(input: string): string {
  return input.replace(OLD_FR_TAG, `$1${FR_TAG}`)
}

const SKIP = new Set(['id', 'createdAt', 'updatedAt', '_status'])

/** Retourne les seuls champs de premier niveau qui changent, ou null si rien a faire. */
export function diffDoc(doc: Record<string, any>): Record<string, any> | null {
  const changed: Record<string, any> = {}
  for (const [key, value] of Object.entries(doc)) {
    if (SKIP.has(key) || value == null) continue
    const before = JSON.stringify(value)
    const after = fixFrTag(before)
    if (after !== before) changed[key] = JSON.parse(after)
  }
  return Object.keys(changed).length ? changed : null
}
