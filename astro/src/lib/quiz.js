import { QUIZ } from '../i18n'

export function getQuestions(lang, path) {
  return QUIZ[lang]?.[path]?.questions || []
}

/**
 * Score champions based on quiz path answers.
 * Player level is stored for future UI context (e.g. result descriptions)
 * but does NOT restrict champion suggestions — any player can enjoy any champion.
 *
 * @param {object[]} champions  — full champion list from data/champions.ts
 * @param {string}   path       — quiz path key (playstyle, character, mood…)
 * @param {number[]} answers    — answer indices for each question
 * @param {number}   playerLevel — 0=beginner, 1=casual, 2=ranked, 3=expert (context only)
 * @returns top 3 champions with matchPct
 */
export function calculateResults(champions, path, answers, playerLevel = 1) {
  // playerLevel is intentionally not used for scoring.
  // A Diamond player can want Garen; a beginner might love Zed.
  // Level is kept as context for result descriptions only.

  // ── Path-specific scoring signals ───────────────────────────────────────
  // Each path maps answer indices to champion attribute weights
  const pathScorers = {
    playstyle: (c, ans) => {
      let s = 0
      // Q0: preferred lane (top/jungle/mid/bot)
      const laneMap = [['top'], ['jungle'], ['mid'], ['bot', 'support']]
      const wantedLanes = laneMap[ans[0] ?? -1] || []
      if (wantedLanes.some(l => c.lanes.includes(l))) s += 30

      // Q1: fight style (all-in / poke / burst / scaling)
      const styleMap = [['aggressive'], ['poke'], ['carry'], ['scaling']]
      const wantedStyles = styleMap[ans[1] ?? -1] || []
      if (wantedStyles.some(st => c.styles.includes(st))) s += 20

      // Q2: priority (carry/objectives/vision/peel)
      const priorityMap = [['carry', 'aggressive'], ['carry'], ['utility'], ['utility', 'peel']]
      const wantedPriority = priorityMap[ans[2] ?? -1] || []
      if (wantedPriority.some(p => c.styles.includes(p))) s += 20

      // Q3: mobility (no dash/few dash/hyper/tp)
      const mobilityMap = [['fighter', 'tank'], ['fighter', 'adc'], ['assassin', 'mage'], ['mage', 'support']]
      const wantedArch = mobilityMap[ans[3] ?? -1] || []
      if (wantedArch.some(a => c.archetypes.includes(a))) s += 15

      // Q4: difficulty preference (easy/mod/hard/extreme)
      const diffPref = [1, 2, 3, 4, 5]
      const wantedDiff = diffPref[ans[4] ?? 1]
      s += Math.max(0, 15 - Math.abs(c.difficulty - wantedDiff) * 5)

      return s
    },

    character: (c, ans) => {
      let s = 0
      // Q0: intro/extro → assassin vs support/tank
      const q0map = [['assassin'], ['support', 'tank'], ['mage'], ['fighter', 'adc']]
      const a0 = q0map[ans[0] ?? -1] || []
      if (a0.some(a => c.archetypes.includes(a))) s += 20

      // Q1: act vs think → aggressive vs utility
      const q1map = [['aggressive', 'carry'], ['utility', 'poke'], ['mage'], ['support']]
      const a1 = q1map[ans[1] ?? -1] || []
      if (a1.some(a => c.styles.includes(a))) s += 20

      // Q2: solo vs team
      const q2solo = ['assassin', 'fighter', 'adc']
      const q2team = ['support', 'tank']
      if (ans[2] === 0 && q2solo.some(a => c.archetypes.includes(a))) s += 20
      if (ans[2] === 1 && q2team.some(a => c.archetypes.includes(a))) s += 20
      if (ans[2] === 2 && c.archetypes.includes('fighter')) s += 15
      if (ans[2] === 3) s += 10 // neutral

      // Q3: personality (calm/passionate/creative/loyal)
      const q3map = [['mage', 'support'], ['fighter', 'assassin'], ['mage', 'assassin'], ['tank', 'support']]
      const a3 = q3map[ans[3] ?? -1] || []
      if (a3.some(a => c.archetypes.includes(a))) s += 20

      // Q4: motivation (dominate/surprise/protect/control)
      const q4map = [['carry'], ['assassin', 'mage'], ['tank', 'support'], ['mage', 'utility']]
      const a4 = q4map[ans[4] ?? -1] || []
      if (a4.some(a => [...c.archetypes, ...c.styles].includes(a))) s += 20

      return s
    },

    mood: (c, ans) => {
      let s = 0
      // Q0: energy (1-5) → difficulty preference
      const energy = (ans[0] ?? 2) + 1
      s += Math.max(0, 15 - Math.abs(c.difficulty - energy) * 3)

      // Q1: what to do (destroy/strategy/roam/support)
      const q1map = [['aggressive', 'carry'], ['utility', 'mage'], ['mobile', 'assassin'], ['support', 'peel']]
      const a1 = q1map[ans[1] ?? -1] || []
      if (a1.some(a => [...c.styles, ...c.archetypes].includes(a))) s += 25

      // Q2: vent/focus/fun/boss
      const q2map = [['aggressive'], ['mage', 'utility'], ['support', 'tank'], ['fighter', 'carry']]
      const a2 = q2map[ans[2] ?? -1] || []
      if (a2.some(a => [...c.styles, ...c.archetypes].includes(a))) s += 20

      // Q3: solo/team
      if (ans[3] === 0 && ['assassin', 'fighter'].some(a => c.archetypes.includes(a))) s += 20
      if (ans[3] === 1 && ['support', 'tank'].some(a => c.archetypes.includes(a))) s += 20
      if (ans[3] === 2) s += 10
      if (ans[3] === 3) s += 10

      // Q4: quick/epic
      if (ans[4] === 0 && c.styles.includes('aggressive')) s += 15
      if (ans[4] === 1 && ['tank', 'fighter'].some(a => c.archetypes.includes(a))) s += 15

      return s
    },

    tastes: (c, ans) => {
      let s = 0
      // Q0: content genre (action/thriller/fantasy/horror)
      const q0map = [['fighter', 'assassin'], ['mage', 'assassin'], ['mage', 'support'], ['assassin', 'tank']]
      const a0 = q0map[ans[0] ?? -1] || []
      if (a0.some(a => c.archetypes.includes(a))) s += 20

      // Q1: hero type (warrior/mage/assassin/protector)
      const heroMap = [['fighter'], ['mage'], ['assassin'], ['tank', 'support']]
      const a1 = heroMap[ans[1] ?? -1] || []
      if (a1.some(a => c.archetypes.includes(a))) s += 25

      // Q2: visual (armor/magic/stealth/tech)
      const factionsByVibe = [
        ['demacia', 'noxus', 'freljord'],
        ['targon', 'ionia', 'void'],
        ['shadow_isles', 'noxus'],
        ['piltover', 'zaun'],
      ]
      const a2factions = factionsByVibe[ans[2] ?? -1] || []
      if (a2factions.includes(c.faction)) s += 20

      // Q3: what you love in character (power/intelligence/mystery/speed)
      const q3map = [['fighter', 'tank'], ['mage'], ['assassin', 'mage'], ['adc', 'assassin']]
      const a3 = q3map[ans[3] ?? -1] || []
      if (a3.some(a => c.archetypes.includes(a))) s += 20

      // Q4: music vibe — metal/electro/epic/hiphop → roughly maps to factions
      const musicFactions = [
        ['noxus', 'darkin', 'shadow_isles'],
        ['zaun', 'piltover', 'void'],
        ['targon', 'demacia', 'freljord'],
        ['bilgewater', 'ionia', 'runeterra'],
      ]
      const a4factions = musicFactions[ans[4] ?? -1] || []
      if (a4factions.includes(c.faction)) s += 15

      return s
    },

    universe: (c, ans) => {
      let s = 0
      // Q0: universe type → faction group
      const uniMap = [
        ['demacia', 'noxus', 'freljord', 'ionia'],
        ['shadow_isles', 'darkin', 'void'],
        ['piltover', 'zaun'],
        ['ixtal', 'bilgewater', 'shurima'],
      ]
      if ((uniMap[ans[0] ?? -1] || []).includes(c.faction)) s += 25

      // Q1: region preference → direct faction match
      const regionMap = [['demacia'], ['noxus'], ['ionia'], ['zaun', 'piltover']]
      if ((regionMap[ans[1] ?? -1] || []).includes(c.faction)) s += 30

      // Q2: power type → types/archetypes
      const powerTypes = [
        ['demon', 'entity'],
        ['human', 'spirit'],
        ['demon', 'undead'],
        ['human', 'spirit'],
      ]
      const a2 = powerTypes[ans[2] ?? -1] || []
      if (a2.some(t => c.types.includes(t))) s += 20

      // Q3: narrative archetype
      const archMap = [['fighter', 'tank'], ['assassin'], ['assassin', 'mage'], ['support', 'tank']]
      const a3 = archMap[ans[3] ?? -1] || []
      if (a3.some(a => c.archetypes.includes(a))) s += 15

      // Q4: relation to death → undead/spirit types
      const deathTypes = [['fighter', 'tank'], ['undead', 'human'], ['undead', 'spirit'], ['mage', 'entity']]
      const a4 = deathTypes[ans[4] ?? -1] || []
      if (a4.some(t => [...c.types, ...c.archetypes].includes(t))) s += 10

      return s
    },

    difficulty: (c, ans) => {
      let s = 0
      // Q0: experience level (same as playerLevel gate — direct difficulty match)
      const diffForLevel = [1, 2, 3, 5]
      const wantedDiff = diffForLevel[ans[0] ?? 1]
      s += Math.max(0, 30 - Math.abs(c.difficulty - wantedDiff) * 8)

      // Q1: learning speed → difficulty
      const learnDiff = [2, 2, 4, 5]
      const ld = learnDiff[ans[1] ?? 1]
      s += Math.max(0, 20 - Math.abs(c.difficulty - ld) * 5)

      // Q2: gameplay preference → archetype
      const gpMap = [['tank', 'support', 'fighter'], ['fighter', 'adc'], ['mage', 'assassin'], ['mage', 'assassin']]
      const a2 = gpMap[ans[2] ?? -1] || []
      if (a2.some(a => c.archetypes.includes(a))) s += 20

      // Q3-4: minor signals
      if (ans[3] === 0 && c.difficulty <= 2) s += 10
      if (ans[3] === 3 && c.difficulty >= 4) s += 10
      if (ans[4] === 2 && c.difficulty >= 3) s += 10

      return s
    },
  }

  const scorer = pathScorers[path] || (() => 0)

  const scored = champions.map(c => ({
    ...c,
    _raw: scorer(c, answers),
  }))

  // Prendre le top 3 trié par score brut
  const top3 = scored
    .sort((a, b) => b._raw - a._raw)
    .slice(0, 3)

  const maxRaw = top3[0]._raw
  const minRaw = top3[2]._raw

  // Normaliser dans la plage 65-100% au sein du top 3
  // Si les 3 sont à égalité : S=100, A=84, B=70
  const range = maxRaw - minRaw
  return top3.map((c, i) => ({
    ...c,
    matchPct: range === 0
      ? [100, 84, 70][i]
      : Math.round(65 + ((c._raw - minRaw) / range) * 35),
  }))
}
