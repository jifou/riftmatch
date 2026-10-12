import { QUESTIONS } from '../data/quiz-data.js'

// Score d'un champion pour un jeu de poids (w) d'une reponse.
function scoreAnswer(c, w) {
  let s = 0
  if (w.lane) {
    for (const [lane, pts] of Object.entries(w.lane)) {
      if ((c.lanes || []).includes(lane)) s += pts + (c.lanes[0] === lane ? 1 : 0)
    }
  }
  if (w.arch) {
    for (const [a, pts] of Object.entries(w.arch)) if ((c.archetypes || []).includes(a)) s += pts
  }
  if (w.style) {
    for (const [a, pts] of Object.entries(w.style)) if ((c.styles || []).includes(a)) s += pts
  }
  if (w.diff) {
    const [lo, hi] = w.diff.r
    if (c.difficulty >= lo && c.difficulty <= hi) s += w.diff.w
    else if (c.difficulty === lo - 1 || c.difficulty === hi + 1) s += Math.round(w.diff.w / 2)
  }
  if (w.faction && w.faction.f.includes(c.faction)) s += w.faction.w
  return s
}

// Hash deterministe (FNV-1a) : sert uniquement a departager des egalites,
// toujours le meme resultat pour les memes reponses.
function tieBreak(str) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return ((h >>> 0) % 1000) / 1000
}

/**
 * answers[i] = index de la reponse choisie a la question i (QUESTIONS[i]).
 * Retourne les 3 meilleurs champions avec matchPct et ce qui correspond.
 */
export function calculateResults(champions, answers) {
  const picked = answers.map((idx, i) => (QUESTIONS[i]?.answers[idx]?.w) || {})
  const key = answers.join('-')

  let ideal = 0
  for (const w of picked) {
    if (!Object.keys(w).length) continue
    let best = 0
    for (const c of champions) best = Math.max(best, scoreAnswer(c, w))
    ideal += best
  }

  const scored = champions.map(c => {
    let total = 0
    for (const w of picked) total += scoreAnswer(c, w)
    return { c, total, tb: tieBreak(key + c.apiId) }
  })
  scored.sort((a, b) => (b.total - a.total) || (b.tb - a.tb))

  // Ce que l'utilisateur a choisi, pour mettre en valeur ce qui correspond
  const wantLanes = new Set()
  const wantArch = new Set()
  const wantFactions = new Set()
  for (const w of picked) {
    Object.keys(w.lane || {}).forEach(l => wantLanes.add(l))
    Object.keys(w.arch || {}).forEach(a => wantArch.add(a))
    ;(w.faction?.f || []).forEach(f => wantFactions.add(f))
  }

  return scored.slice(0, 3).map(({ c, total }) => ({
    ...c,
    matchPct: ideal > 0 ? Math.max(55, Math.min(99, Math.round(Math.sqrt(total / ideal) * 100))) : 80,
    matched: {
      lanes: (c.lanes || []).filter(l => wantLanes.has(l)),
      arch: (c.archetypes || []).filter(a => wantArch.has(a)),
      faction: wantFactions.has(c.faction),
    },
  }))
}
