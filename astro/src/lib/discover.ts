// Logique des selections, des champions similaires et du comparateur.
// Tout est calcule depuis data/champions.ts (role, classe, style, region, difficulte).
import { CHAMPIONS, type Champion } from '../data/champions'
import { TEXT } from '../data/quiz-data.js'
import { lp } from './locale'
import { SEG, LEVEL_WORD, CLASS_WORD, type Loc, type Level, type Kind } from '../data/discover-text'

export const LOCS: Loc[] = ['fr', 'en', 'es', 'de', 'it']
export const LANES = ['top', 'jungle', 'mid', 'bot', 'support'] as const
export const CLASSES = ['mage', 'fighter', 'tank', 'support', 'adc'] as const
const MIN_LIST = 8
export const COMPARE_LINKS = 1

const slugify = (s: string) =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

export const byApi = (id: string) => CHAMPIONS.find((c) => c.apiId === id)
export const laneLabel = (loc: Loc, l: string) => (TEXT as any)[loc].lanes[l] || l
export const classLabel = (loc: Loc, a: string) => (TEXT as any)[loc].arch[a] || a
export const regionLabel = (loc: Loc, f: string) => (TEXT as any)[loc].regions[f] || f

// ── Selections ─────────────────────────────────────────────────────────
export interface PickDef { key: string; level: Level; kind: Kind; term: string; champs: Champion[] }

function buildPicks(): PickDef[] {
  const out: PickDef[] = []
  for (const level of ['beginner', 'expert'] as Level[]) {
    const ok = (c: Champion) => (level === 'beginner' ? c.difficulty <= 2 : c.difficulty >= 4)
    const sort = (a: Champion, b: Champion) =>
      (level === 'beginner' ? a.difficulty - b.difficulty : b.difficulty - a.difficulty) || a.name.localeCompare(b.name)
    for (const l of LANES) {
      const champs = CHAMPIONS.filter((c) => c.lanes.includes(l) && ok(c)).sort(sort)
      if (champs.length >= MIN_LIST) out.push({ key: `${level}-lane-${l}`, level, kind: 'lane', term: l, champs })
    }
    for (const a of CLASSES) {
      const champs = CHAMPIONS.filter((c) => c.archetypes.includes(a) && ok(c)).sort(sort)
      if (champs.length >= MIN_LIST) out.push({ key: `${level}-class-${a}`, level, kind: 'class', term: a, champs })
    }
  }
  return out
}
export const PICKS: PickDef[] = buildPicks()
export const pickByKey = (k: string) => PICKS.find((p) => p.key === k)

export function pickSlug(loc: Loc, p: PickDef): string {
  const lv = LEVEL_WORD[p.level][loc]
  return p.kind === 'lane' ? `${lv}-${p.term}` : `${lv}-${CLASS_WORD[loc]}-${slugify(classLabel(loc, p.term))}`
}
export const pickBySlug = (loc: Loc, slug: string) => PICKS.find((p) => pickSlug(loc, p) === slug)
export const picksHub = (loc: Loc) => lp(loc, `/${SEG.picks[loc]}`)
export const pickUrl = (loc: Loc, p: PickDef) => `${picksHub(loc)}/${pickSlug(loc, p)}`
export const pickTerm = (loc: Loc, p: PickDef) => (p.kind === 'lane' ? laneLabel(loc, p.term) : classLabel(loc, p.term))

// ── Champions similaires (meme calcul que les fiches champion) ──────────
import { similar } from './champion-seo'
export function similarTo(c: Champion, n = 6): Champion[] { return similar(c, n) }

// Selection la plus pertinente pour une fiche (role principal, niveau selon la difficulte)
export function pickFor(c: Champion): PickDef | undefined {
  const level: Level = c.difficulty >= 4 ? 'expert' : 'beginner'
  return pickByKey(`${level}-lane-${c.lanes[0]}`) || pickByKey(`${level}-class-${c.archetypes[0]}`)
}

// ── Comparateur ────────────────────────────────────────────────────────
export const pairKey = (a: string, b: string) => [a, b].sort((x, y) => x.toLowerCase().localeCompare(y.toLowerCase())).map((x) => x.toLowerCase()).join('-vs-')
export const compareHub = (loc: Loc) => lp(loc, `/${SEG.compare[loc]}`)
export const compareUrl = (loc: Loc, a: string, b: string) => `${compareHub(loc)}/${pairKey(a, b)}`

export function parsePair(slug: string): [Champion, Champion] | null {
  const parts = slug.split('-vs-')
  if (parts.length !== 2) return null
  const find = (s: string) => CHAMPIONS.find((c) => c.apiId.toLowerCase() === s)
  const a = find(parts[0]), b = find(parts[1])
  if (!a || !b || a.apiId === b.apiId) return null
  if (pairKey(a.apiId, b.apiId) !== slug) return null // une seule URL par paire
  return [a, b]
}

// Paires "courantes" indexables: les 2 champions les plus proches de chacun
export function curatedPairs(): [Champion, Champion][] {
  const seen = new Map<string, [Champion, Champion]>()
  for (const c of CHAMPIONS) {
    for (const o of similarTo(c, COMPARE_LINKS)) {
      const k = pairKey(c.apiId, o.apiId)
      if (!seen.has(k)) seen.set(k, c.name.localeCompare(o.name) <= 0 ? [c, o] : [o, c])
    }
  }
  return [...seen.values()]
}
let _cur: Set<string> | null = null
export function isCurated(a: string, b: string): boolean {
  if (!_cur) _cur = new Set(curatedPairs().map(([x, y]) => pairKey(x.apiId, y.apiId)))
  return _cur.has(pairKey(a, b))
}
