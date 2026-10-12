import type { Champion } from '../data/champions'

type Locale = 'fr' | 'en' | 'es' | 'de' | 'it'

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
  de: {
    fighter:  'vielseitiger Nahkämpfer, der in Duellen glänzt',
    tank:     'widerstandsfähiger Tank, der Schaden absorbiert und Kämpfe eröffnet',
    mage:     'Magier, der Gegner aus der Distanz mit mächtigen Zaubern vernichtet',
    assassin: 'extrem mobiler Assassine, der isolierte Ziele im Handumdrehen ausschaltet',
    marksman: 'Fernkämpfer, der das Lategame mit konstantem DPS dominiert',
    adc:      'Fernkämpfer, der das Lategame mit konstantem DPS dominiert',
    support:  'Support, der sein Team die ganze Partie über schützt und stärkt',
  },
  it: {
    fighter:  'combattente in mischia versatile che eccelle nei duelli',
    tank:     'tank resistente pensato per assorbire danni e ingaggiare gli scontri',
    mage:     'mago che distrugge i nemici a distanza con incantesimi potenti',
    assassin: 'assassino ultra mobile che elimina i bersagli isolati in un istante',
    marksman: 'tiratore a distanza che domina il late game con un DPS costante',
    adc:      'tiratore a distanza che domina il late game con un DPS costante',
    support:  'support che protegge e potenzia la sua squadra per tutta la partita',
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
  de: {
    aggressive: 'Spiel von den ersten Level an aggressiv, um deine Lane zu dominieren.',
    carry:      'Konzentriere dich auf dein Farmen und suche Kills, um die Kontrolle zu übernehmen.',
    utility:    'Priorisiere die Unterstützung deines Teams und die Kontrolle der Ziele.',
    peel:       'Bleib nah bei deinen Carries und schütze sie vor gegnerischen Assassinen.',
    engage:     'Suche Engages auf schlecht positionierte Ziele.',
    poke:       'Schwäche die Gegner aus der Distanz, bevor die Kämpfe beginnen.',
    scaling:    'Farme sicher und warte auf das Mid- und Lategame, um die Oberhand zu gewinnen.',
    mobile:     'Nutze deine Mobilität, um Gegner zu überraschen und Skillshots auszuweichen.',
  },
  it: {
    aggressive: 'Gioca in modo aggressivo fin dai primi livelli per dominare la tua lane.',
    carry:      'Concentrati sul farm e cerca le kill per prendere il controllo.',
    utility:    "Dai priorità al supporto della squadra e al controllo degli obiettivi.",
    peel:       'Resta vicino ai tuoi carry e proteggili dagli assassini avversari.',
    engage:     'Cerca ingaggi sui bersagli posizionati male.',
    poke:       'Logora i nemici a distanza prima degli scontri.',
    scaling:    'Fai farm in sicurezza e aspetta il mid e il late game per prendere il sopravvento.',
    mobile:     "Usa la tua mobilità per sorprendere il nemico e schivare le skillshot.",
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
  de: {
    top:     'auf der Toplane',
    jungle:  'im Dschungel',
    mid:     'auf der Midlane',
    bot:     'auf der Botlane',
    adc:     'auf der Botlane als Fernkämpfer',
    support: 'als Support',
  },
  it: {
    top:     'nella top lane',
    jungle:  'nella jungle',
    mid:     'nella mid lane',
    bot:     'nella bot lane',
    adc:     'nella bot lane come tiratore',
    support: 'nel ruolo di support',
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
  de: {
    1: 'Sehr zugänglich, ideal für Einsteiger oder wenn du dich auf Makro-Entscheidungen konzentrieren willst.',
    2: 'Leicht zu erlernen, ein paar Stunden reichen, um effektiv zu sein.',
    3: 'Mittlerer Schwierigkeitsgrad: beherrsche zuerst die Grundlagen, bevor du optimierst.',
    4: 'Anspruchsvoller Champion, der investierte Zeit belohnt.',
    5: 'Sehr schwer: nur für Spieler, die bereit sind, Stunden im Training zu verbringen.',
  },
  it: {
    1: 'Molto accessibile, ideale per chi inizia o per chi vuole concentrarsi sulle decisioni macro.',
    2: 'Facile da imparare, bastano poche ore per essere efficaci.',
    3: 'Difficoltà intermedia: padroneggia le basi prima di ottimizzare.',
    4: 'Campione impegnativo che premia il tempo investito.',
    5: 'Molto difficile: riservato ai giocatori disposti a passare ore ad allenarsi.',
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
  if (l === 'de') return `${champion.name} ist ein ${archDesc}, der hauptsächlich ${laneCtx} gespielt wird. ${styleTip}`
  if (l === 'it') return `${champion.name} è un ${archDesc}, giocato principalmente ${laneCtx}. ${styleTip}`
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
