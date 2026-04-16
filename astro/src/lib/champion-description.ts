import type { Champion } from '../data/champions'

type Locale = 'fr' | 'en' | 'es'

// ── Archetype descriptions ────────────────────────────────────────────────

const ARCHETYPE_DESC: Record<Locale, Record<string, string>> = {
  fr: {
    fighter:  'combattant corps à corps polyvalent qui excelle en duel',
    tank:     'tank résistant conçu pour absorber les dégâts et initier les combats',
    mage:     'mage qui détruit ses ennemis à distance grâce à des sorts puissants',
    assassin: 'assassin ultra-mobile qui élimine les cibles isolées en un instant',
    marksman: 'tireur à distance qui domine en late game avec un DPS continu',
    adc:      'tireur à distance qui domine en late game avec un DPS continu',
    support:  'support qui protège et renforce son équipe tout au long de la partie',
  },
  en: {
    fighter:  'versatile melee fighter who excels in duels',
    tank:     'durable tank built to absorb damage and initiate fights',
    mage:     'spellcaster who destroys enemies at range with powerful abilities',
    assassin: 'highly mobile assassin who eliminates isolated targets instantly',
    marksman: 'ranged carry who dominates the late game with sustained DPS',
    adc:      'ranged carry who dominates the late game with sustained DPS',
    support:  'support who protects and empowers their team throughout the game',
  },
  es: {
    fighter:  'luchador cuerpo a cuerpo versátil que sobresale en duelos',
    tank:     'tanque resistente diseñado para absorber daño e iniciar peleas',
    mage:     'mago que destruye a sus enemigos a distancia con poderosos hechizos',
    assassin: 'asesino ultramóvil que elimina objetivos aislados al instante',
    marksman: 'tirador a distancia que domina el late game con DPS sostenido',
    adc:      'tirador a distancia que domina el late game con DPS sostenido',
    support:  'soporte que protege y refuerza a su equipo durante toda la partida',
  },
}

// ── Style tips ────────────────────────────────────────────────────────────

const STYLE_TIPS: Record<Locale, Record<string, string>> = {
  fr: {
    aggressive: 'Joue agressif dès les premiers niveaux pour dominer ta lane.',
    carry:      'Concentre-toi sur ton farm et cherche les kills pour prendre le contrôle.',
    utility:    'Priorise le soutien de ton équipe et le contrôle des objectifs.',
    peel:       'Reste proche de tes carries et protège-les des assassins adverses.',
    engage:     'Cherche les engagements sur les cibles mal positionnées.',
    poke:       'Harcèle tes adversaires à distance pour les user avant les fights.',
    scaling:    'Farm en sécurité et attends le mid/late game pour prendre le dessus.',
    mobile:     'Utilise ta mobilité pour surprendre l\'ennemi et esquiver les sorts.',
  },
  en: {
    aggressive: 'Play aggressively from the early levels to dominate your lane.',
    carry:      'Focus on your farm and look for kills to take control of the game.',
    utility:    'Prioritize supporting your team and controlling objectives.',
    peel:       'Stay close to your carries and protect them from enemy assassins.',
    engage:     'Look for engages on mispositioned targets.',
    poke:       'Harass enemies from range to wear them down before fights.',
    scaling:    'Farm safely and wait for the mid/late game to take over.',
    mobile:     'Use your mobility to surprise enemies and dodge skillshots.',
  },
  es: {
    aggressive: 'Juega agresivo desde los primeros niveles para dominar tu carril.',
    carry:      'Concéntrate en tu farmeo y busca kills para tomar el control.',
    utility:    'Prioriza el apoyo a tu equipo y el control de objetivos.',
    peel:       'Quédate cerca de tus carries y protégelos de los asesinos enemigos.',
    engage:     'Busca inicios sobre objetivos mal posicionados.',
    poke:       'Hostiga a los enemigos a distancia para desgastarlos antes de las peleas.',
    scaling:    'Farmea con seguridad y espera el mid/late game para tomar el control.',
    mobile:     'Usa tu movilidad para sorprender al enemigo y esquivar habilidades.',
  },
}

// ── Lane context ──────────────────────────────────────────────────────────

const LANE_CONTEXT: Record<Locale, Record<string, string>> = {
  fr: {
    top:     'en solo lane top',
    jungle:  'en jungle',
    mid:     'en mid lane',
    bot:     'en bot lane',
    adc:     'en bot lane comme tireur',
    support: 'en support',
  },
  en: {
    top:     'in the top lane',
    jungle:  'in the jungle',
    mid:     'in the mid lane',
    bot:     'in the bot lane',
    adc:     'in the bot lane as a marksman',
    support: 'in the support role',
  },
  es: {
    top:     'en el carril superior',
    jungle:  'en la jungla',
    mid:     'en el carril central',
    bot:     'en el carril inferior',
    adc:     'en el carril inferior como tirador',
    support: 'en el rol de soporte',
  },
}

// ── Difficulty descriptions ───────────────────────────────────────────────

const DIFFICULTY_DESC: Record<Locale, Record<number, string>> = {
  fr: {
    1: 'Très accessible, idéal pour débuter ou se concentrer sur les décisions macro.',
    2: 'Facile à prendre en main, quelques heures suffisent pour être efficace.',
    3: 'Difficulté intermédiaire — maîtrise les bases avant de l\'optimiser.',
    4: 'Champion exigeant qui récompense l\'investissement en temps.',
    5: 'Très difficile — réservé aux joueurs prêts à passer des heures en training.',
  },
  en: {
    1: 'Very accessible, ideal for beginners or players focused on macro decisions.',
    2: 'Easy to pick up, a few hours are enough to be effective.',
    3: 'Intermediate difficulty — master the basics before optimizing.',
    4: 'Demanding champion that rewards time investment.',
    5: 'Very hard — reserved for players willing to put in hours of practice.',
  },
  es: {
    1: 'Muy accesible, ideal para principiantes o jugadores enfocados en decisiones macro.',
    2: 'Fácil de coger, pocas horas bastan para ser efectivo.',
    3: 'Dificultad intermedia — domina las bases antes de optimizar.',
    4: 'Campeón exigente que recompensa la inversión de tiempo.',
    5: 'Muy difícil — reservado para jugadores dispuestos a practicar durante horas.',
  },
}

// ── Exported functions ────────────────────────────────────────────────────

export function generateDescription(champion: Champion, locale: Locale = 'fr'): string {
  const l = ARCHETYPE_DESC[locale] ? locale : 'fr'
  const mainArchetype = champion.archetypes[0] ?? 'fighter'
  const mainLane      = champion.lanes[0] ?? 'mid'
  const mainStyle     = champion.styles[0] ?? 'aggressive'

  const archDesc = ARCHETYPE_DESC[l][mainArchetype] ?? ARCHETYPE_DESC.en[mainArchetype] ?? 'champion'
  const laneCtx  = LANE_CONTEXT[l][mainLane]        ?? `in ${mainLane}`
  const styleTip = STYLE_TIPS[l][mainStyle]          ?? ''

  if (l === 'en') return `${champion.name} is a ${archDesc}, primarily played ${laneCtx}. ${styleTip}`
  if (l === 'es') return `${champion.name} es un ${archDesc}, principalmente jugado ${laneCtx}. ${styleTip}`
  return `${champion.name} est un ${archDesc}, principalement joué ${laneCtx}. ${styleTip}`
}

export function getDifficultyLabel(difficulty: number, locale: Locale = 'fr'): string {
  const l = DIFFICULTY_DESC[locale] ? locale : 'fr'
  return DIFFICULTY_DESC[l][difficulty] ?? ''
}

export function getDifficultyStars(difficulty: number): string {
  return '★'.repeat(difficulty) + '☆'.repeat(5 - difficulty)
}

export function getOpGGUrl(apiId: string): string {
  return `https://www.op.gg/champions/${apiId.toLowerCase()}`
}
