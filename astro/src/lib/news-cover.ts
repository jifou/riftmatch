// Couvertures des news : le logo de la ligue concernee sur un fond hextech teinte.
// Aucune image n'est stockee en base : tout est deduit du titre, des tags et de newsType,
// donc identique dans les 5 langues. Logos: /public/leagues/*.png (images officielles lolesports).

export interface League {
  key: string
  logo: string
  color: string
  label: string
}

const L = (key: string, color: string, label: string): League => ({ key, logo: `/leagues/${key}.png`, color, label })

const LEAGUES: Record<string, League> = {
  worlds: L('worlds', '#c89b3c', 'WORLDS'),
  msi: L('msi', '#d4a43f', 'MSI'),
  'first-stand': L('first-stand', '#ff6a1a', 'FIRST STAND'),
  lck: L('lck', '#3b82f6', 'LCK'),
  lec: L('lec', '#14e0b8', 'LEC'),
  lpl: L('lpl', '#ef4444', 'LPL'),
  lcs: L('lcs', '#6366f1', 'LCS'),
  cblol: L('cblol', '#22c55e', 'CBLOL'),
  lcp: L('lcp', '#f59e0b', 'LCP'),
  pcs: L('pcs', '#ec4899', 'PCS'),
  vcs: L('vcs', '#06b6d4', 'VCS'),
  ljl: L('ljl', '#f43f5e', 'LJL'),
  lfl: L('lfl', '#60a5fa', 'LFL'),
  primeleague: L('primeleague', '#38bdf8', 'PRIME LEAGUE'),
  'americas-cup': L('americas-cup', '#facc15', 'AMERICAS CUP'),
}
const RIFT: League = { key: 'riftmatch', logo: '/icons/icon-192.png', color: '#c89b3c', label: 'RIFTMATCH' }

// Ordre = priorite (un evenement international l'emporte sur la ligue d'une equipe citee)
const PATTERNS: [RegExp, string][] = [
  [/first\s*stand/i, 'first-stand'],
  [/\bmsi\b|mid-season invitational/i, 'msi'],
  [/worlds|world championship|championnat du monde|weltmeisterschaft|campionato del mondo|campeonato del mundo/i, 'worlds'],
  [/americas cup/i, 'americas-cup'],
  [/\blck\b/i, 'lck'],
  [/\blec\b/i, 'lec'],
  [/\blpl\b/i, 'lpl'],
  [/\blcs\b/i, 'lcs'],
  [/cblol/i, 'cblol'],
  [/\blcp\b/i, 'lcp'],
  [/\bpcs\b/i, 'pcs'],
  [/\bvcs\b/i, 'vcs'],
  [/\bljl\b/i, 'ljl'],
  [/\blfl\b|ligue fran/i, 'lfl'],
  [/prime league/i, 'primeleague'],
]

// Repli par newsType quand le texte ne cite aucune ligue
const BY_TYPE: Record<string, string> = { lck: 'lck', lec: 'lec', lpl: 'lpl', international: 'worlds' }

const MERCATO: Record<string, string> = { fr: 'MERCATO', en: 'TRANSFERS', es: 'MERCADO', de: 'TRANSFERS', it: 'MERCATO' }

export interface Cover {
  logo: string
  color: string
  label: string
  tag: string
  isRift: boolean
}

export function leagueFor(item: any): League {
  const tags = Array.isArray(item?.tags) ? item.tags.map((t: any) => t?.tag || t).join(' ') : ''
  const hay = `${item?.title || ''} ${tags} ${item?.excerpt || ''}`
  for (const [re, key] of PATTERNS) if (re.test(hay)) return LEAGUES[key]
  const byType = BY_TYPE[item?.newsType || '']
  if (byType) return LEAGUES[byType]
  return RIFT
}

export function coverFor(item: any, locale = 'fr'): Cover {
  const lg = leagueFor(item)
  const title = String(item?.title || '')
  const patch = title.match(/(?:patch|parche)\s*(\d+\.\d+)/i)
  let tag = lg.label
  if (item?.newsType === 'riot' && patch) tag = `PATCH ${patch[1]}`
  if (item?.newsSubtype === 'mercato') tag = `${lg.key === 'riftmatch' ? '' : lg.label + ' · '}${MERCATO[locale] || MERCATO.fr}`
  return { logo: lg.logo, color: lg.color, label: lg.label, tag, isRift: lg.key === 'riftmatch' }
}

// Image utilisee pour Open Graph / JSON-LD (URL absolue)
export function ogImageFor(item: any): string {
  return `https://riftmatch.io${leagueFor(item).logo}`
}
