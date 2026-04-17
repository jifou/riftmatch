import { QUIZ } from '../i18n'

export function getQuestions(lang, path) {
  return QUIZ[lang]?.[path]?.questions || []
}

/**
 * answers[0] = difficulty idx  (0=easy, 1=medium, 2=hard, 3=any)
 * answers[1] = role idx        (0=top, 1=jungle, 2=mid, 3=bot, 4=support, 5=any)
 * answers[2] = style idx       (0=magic, 1=physical, 2=tank, 3=any)
 * answers[3] = path Q1 idx
 * answers[4] = path Q2 idx
 */
export function calculateResults(champions, path, answers) {
  // ── 1. Hard filters ──────────────────────────────────────────
  let pool = [...champions]

  // Difficulty
  const diff = answers[0] ?? 3
  if (diff === 0) pool = pool.filter(c => c.difficulty <= 2)
  else if (diff === 1) pool = pool.filter(c => c.difficulty === 3)
  else if (diff === 2) pool = pool.filter(c => c.difficulty >= 4)

  // Role
  const roleMap = ['top', 'jungle', 'mid', 'bot', 'support']
  const roleIdx = answers[1] ?? 5
  if (roleIdx < 5) {
    const role = roleMap[roleIdx]
    pool = pool.filter(c => c.lanes && c.lanes.includes(role))
  }

  // Fallback si pool trop petit
  if (pool.length < 5) pool = [...champions]

  // ── 2. Scoring ───────────────────────────────────────────────
  const styleIdx = answers[2] ?? 3
  const pathAnswers = [answers[3] ?? 0, answers[4] ?? 0]

  const pathScorers = {
    playstyle: (c, pa) => {
      let s = 0
      const styleMap = [['aggressive'], ['poke'], ['carry'], ['scaling']]
      if ((styleMap[pa[0]] || []).some(st => (c.styles || []).includes(st))) s += 40
      const priorityMap = [['carry', 'aggressive'], ['carry'], ['utility'], ['utility', 'peel']]
      if ((priorityMap[pa[1]] || []).some(p => (c.styles || []).includes(p))) s += 40
      return s
    },
    character: (c, pa) => {
      let s = 0
      const q3map = [['aggressive', 'carry'], ['utility', 'poke'], ['mage'], ['support']]
      if ((q3map[pa[0]] || []).some(a => [...(c.styles||[]), ...(c.archetypes||[])].includes(a))) s += 40
      const q4map = [['mage', 'support'], ['fighter', 'assassin'], ['mage', 'assassin'], ['tank', 'support']]
      if ((q4map[pa[1]] || []).some(a => (c.archetypes||[]).includes(a))) s += 40
      return s
    },
    mood: (c, pa) => {
      let s = 0
      const q3map = [['aggressive', 'carry'], ['utility', 'mage'], ['mobile', 'assassin'], ['support', 'peel']]
      if ((q3map[pa[0]] || []).some(a => [...(c.styles||[]), ...(c.archetypes||[])].includes(a))) s += 40
      if (pa[1] === 0 && (c.styles||[]).includes('aggressive')) s += 40
      else if (pa[1] === 1 && ['tank', 'fighter'].some(a => (c.archetypes||[]).includes(a))) s += 40
      else s += 15
      return s
    },
    tastes: (c, pa) => {
      let s = 0
      const heroMap = [['fighter'], ['mage'], ['assassin'], ['tank', 'support']]
      if ((heroMap[pa[0]] || []).some(a => (c.archetypes||[]).includes(a))) s += 45
      const q4map = [['fighter', 'tank'], ['mage'], ['assassin', 'mage'], ['adc', 'assassin']]
      if ((q4map[pa[1]] || []).some(a => (c.archetypes||[]).includes(a))) s += 35
      return s
    },
    universe: (c, pa) => {
      let s = 0
      const regionMap = [['demacia'], ['noxus'], ['ionia'], ['zaun', 'piltover']]
      if ((regionMap[pa[0]] || []).includes(c.faction)) s += 50
      const archMap = [['fighter', 'tank'], ['assassin'], ['assassin', 'mage'], ['support', 'tank']]
      if ((archMap[pa[1]] || []).some(a => (c.archetypes||[]).includes(a))) s += 30
      return s
    },
    difficulty: (c, pa) => {
      let s = 0
      const learnMap = [2, 2, 4, 5]
      const ld = learnMap[pa[0]] || 3
      s += Math.max(0, 30 - Math.abs(c.difficulty - ld) * 8)
      if (pa[1] === 0 && c.difficulty <= 2) s += 25
      else if (pa[1] === 1 && c.difficulty >= 2 && c.difficulty <= 3) s += 25
      else if (pa[1] === 2) s += 10
      else if (pa[1] === 3 && c.difficulty >= 4) s += 25
      return s
    },
  }

  function getDamageBonus(c, idx) {
    if (idx === 0) return (c.archetypes||[]).includes('mage') ? 25 : 0
    if (idx === 1) return ((c.archetypes||[]).includes('adc') || (c.archetypes||[]).includes('fighter') || ((c.archetypes||[]).includes('assassin') && !(c.archetypes||[]).includes('mage'))) ? 25 : 0
    if (idx === 2) return (c.archetypes||[]).includes('tank') ? 25 : 0
    return 0
  }

  const scorer = pathScorers[path] || (() => 0)

  const scored = pool.map(c => ({
    ...c,
    _raw: scorer(c, pathAnswers) + getDamageBonus(c, styleIdx) + Math.random() * 6,
  }))

  const top3 = scored.sort((a, b) => b._raw - a._raw).slice(0, 3)
  const maxRaw = top3[0]._raw
  const minRaw = top3[2]._raw
  const range = maxRaw - minRaw

  return top3.map((c, i) => ({
    ...c,
    matchPct: range === 0
      ? [100, 84, 70][i]
      : Math.round(65 + ((c._raw - minRaw) / range) * 35),
  }))
}
