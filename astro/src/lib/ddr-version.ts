import { DDR_VERSION } from '../data/champions'

// Cache in-process pour éviter un fetch DDR à chaque requête SSR
let _cached: string | null = null
let _cachedAt = 0
const CACHE_TTL = 60 * 60 * 1000 // 1 heure

/**
 * Retourne la dernière version Data Dragon connue.
 * Résultat mis en cache 1h — tombe en fallback sur la version hardcodée si le réseau est KO.
 */
export async function getLatestDDRVersion(): Promise<string> {
  if (_cached && Date.now() - _cachedAt < CACHE_TTL) return _cached
  try {
    const res = await fetch(
      'https://ddragon.leagueoflegends.com/api/versions.json',
      { signal: AbortSignal.timeout(3000) }
    )
    const versions: string[] = await res.json()
    if (versions?.[0]) {
      _cached  = versions[0]
      _cachedAt = Date.now()
      return versions[0]
    }
  } catch { /* fallback silencieux */ }
  return DDR_VERSION
}

export function getDDRBase(version: string): string {
  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion`
}
