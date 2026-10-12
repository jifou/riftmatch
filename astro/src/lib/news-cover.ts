// Couvertures des news : un visuel par article, choisi dans un pool par ligue,
// de facon deterministe (meme article = meme image, dans toutes les langues).
// Les images DB (coverImage) qui sont de simples splash arts de champion sont remplacees,
// une image uploadee a la main (autre domaine) est conservee.

const SPLASH = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash'

const POOLS: Record<string, string[]> = {
  international: ['Azir', 'Jhin', 'Zed', 'Ahri', 'Viego', 'Sylas', 'Akali', 'Aphelios', 'Kaisa', 'Orianna'],
  lck: ['Ryze', 'LeBlanc', 'Azir', 'Orianna', 'Zed', 'Ahri', 'Corki', 'Sejuani', 'Ezreal', 'Viktor'],
  lec: ['Yone', 'Rakan', 'Xayah', 'JarvanIV', 'Kaisa', 'Leona', 'Gragas', 'Nautilus', 'Draven', 'Lucian'],
  lpl: ['Jinx', 'Lucian', 'Camille', 'Ezreal', 'Tristana', 'Irelia', 'Kalista', 'Vi', 'Katarina', 'Rumble'],
  'autres-regions': ['Gnar', 'Braum', 'Nami', 'Ekko', 'Pyke', 'Illaoi', 'Thresh', 'Samira', 'Fiora', 'Nasus'],
  riot: ['Viktor', 'Jayce', 'Caitlyn', 'Heimerdinger', 'Vi', 'Ekko', 'Singed', 'Warwick', 'Zeri', 'Camille'],
}
const FALLBACK = POOLS.international

export const TYPE_COLORS: Record<string, string> = {
  lck: '#3b82f6', lec: '#a855f7', lpl: '#ef4444', international: '#14b8a6', 'autres-regions': '#f97316', riot: '#c89b3c',
}

function hash(str: string): number {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) }
  return h >>> 0
}

const stripLocale = (slug: string) => (slug || '').replace(/-(fr|en|es|de|it)$/, '')

function isChampionSplash(url: string): boolean {
  return !url || /communitydragon|ddragon\.leagueoflegends|leagueoflegends\.com\/cdn/i.test(url)
}

export interface Cover {
  src: string
  label: string
  color: string
}

const MERCATO: Record<string, string> = { fr: 'MERCATO', en: 'TRANSFERS', es: 'MERCADO', de: 'TRANSFERS', it: 'MERCATO' }

export function labelFor(item: any, locale = 'fr'): string {
  const title = String(item?.title || '')
  const type = item?.newsType || ''
  if (item?.newsSubtype === 'mercato') return MERCATO[locale] || MERCATO.fr
  if (type === 'international') {
    const m = title.match(/(Worlds|MSI|First Stand)/i)
    return m ? m[1].toUpperCase() : 'WORLDS'
  }
  if (type === 'riot') {
    const m = title.match(/(?:patch|parche)\s*(\d+\.\d+)/i)
    return m ? `PATCH ${m[1]}` : 'RIOT'
  }
  if (type === 'autres-regions') {
    const m = title.match(/(LCS|CBLOL|LLA|PCS|VCS|LJL)/i)
    return m ? m[1].toUpperCase() : 'ESPORTS'
  }
  return type ? type.toUpperCase() : 'ESPORTS'
}

export function coverFor(item: any, locale = 'fr'): Cover {
  const type = item?.newsType || 'international'
  const color = TYPE_COLORS[type] || '#c89b3c'
  const label = labelFor(item, locale)
  const custom = item?.coverImage as string | undefined
  if (custom && !isChampionSplash(custom)) return { src: custom, label, color }
  const pool = POOLS[type] || FALLBACK
  const key = stripLocale(item?.slug || item?.title || '')
  const champ = pool[hash(key) % pool.length]
  return { src: `${SPLASH}/${champ}_0.jpg`, label, color }
}
