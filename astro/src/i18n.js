/* ═══════════════════════════════════════════════════════════════
   RiftMatch — i18n Engine
   Supported: fr | en | es
   Add new language: copy a block, translate, add to LANG_MAP
═══════════════════════════════════════════════════════════════ */

/* ── Data Dragon locale per lang ── */
export const DD_LOCALE = { fr:'fr_FR', en:'en_US', es:'es_ES', ko:'ko_KR', pt:'pt_BR', de:'de_DE' };

/* ── Browser lang → app lang ── */
export function detectLang() {
  const param = new URLSearchParams(location.search).get('lang');
  if (param && T[param]) return param;
  const saved = localStorage.getItem('lolp_lang');
  if (saved && T[saved]) return saved;
  const nav = (navigator.language || 'fr').slice(0,2).toLowerCase();
  return T[nav] ? nav : 'fr';
}

/* ════════════════════════════════════════════════════════════
   UI TRANSLATIONS
════════════════════════════════════════════════════════════ */
export const T = {
  fr: {
    logoSub:       'Découvrez votre champion',
    adText:        '🖱️ <strong>SteelSeries Arctis Nova Pro</strong> — Le casque des champions',
    adBtn:         "Voir l'offre →",
    welcomeTitle:  'Comment tu veux choisir ton champion ?',
    welcomeSub:    '5 questions · Résultats personnalisés · 100% gratuit',
    installTitle:  "Installer l'app",
    installSub:    "Accès rapide depuis ton écran d'accueil",
    installBtn:    'Installer',
    resultsTitle:  'Tes champions ont été trouvés ✨',
    resultsSub:    (label, pct) => `Basé sur ${label} · ${pct}% de compatibilité`,
    shareLabel:    'Partager :',
    shareTwitter:  '🐦 Twitter/X',
    shareNative:   '📤 Partager',
    affTitle:      name => `🔗 Les joueurs de ${name} utilisent aussi`,
    adFooterText:  '⌨️ <strong>Keychron K8 Pro</strong> — Le clavier préféré des streamers LoL',
    restartBtn:    '↩ Essayer un autre parcours',
    offlineBar:    '📵 Mode hors ligne',
    champCta:      name => `Jouer ${name} →`,
    guideCta:      'Voir le guide →',
    diffLabel:     'Difficulté',
    matchLabel:    'Compatibilité',
    initLoading:   'Chargement des données',
    initStep1:     'Vérification du cache local…',
    initStep2:     'Connexion à Riot Data Dragon…',
    initStep3:     v => `Version ${v} trouvée ✓`,
    initStep4:     'Téléchargement des champions…',
    initStep5:     'Traitement des données…',
    initDone:      n => `${n} champions chargés ✓`,
    initFallback:  'Mode hors ligne — données de fallback',
    initCache:     'Données chargées depuis le cache ✓',
    champCount:    (n, v) => `Base de données : ${n} champions · Version ${v}`,
    loaderTitle:   'Analyse en cours…',
    loaderMsgs:    ['Analyse de tes réponses…', n => `Parcours ${n} champions…`, 'Consulte les archives de Runeterra…', 'Ton destin se précise…'],
    openChamp:     'Voir sur LoL →',
    topBadge:      'Meilleur choix',
    paths: {
      character: { label:'🎭 Caractère',    desc:'Introverti, stratège, impulsif…' },
      mood:      { label:'⚡ Humeur',        desc:'Comment tu te sens maintenant' },
      tastes:    { label:'🎮 Goûts',         desc:'Films, univers, personnages' },
      playstyle: { label:'🗡️ Style de jeu',  desc:'Carry, tank, assassin…' },
      universe:  { label:'🌍 Univers',       desc:'Démon, chevalier, mage' },
      difficulty:{ label:'🎯 Difficulté',    desc:'Facile ou challenge max' }
    },
    legal: 'RiftMatch n\'est pas affilié ni approuvé par Riot Games. League of Legends® est une marque déposée de Riot Games, Inc.'
  },

  en: {
    logoSub:       'Discover your champion',
    adText:        '🖱️ <strong>SteelSeries Arctis Nova Pro</strong> — The champion\'s headset',
    adBtn:         'See the deal →',
    welcomeTitle:  'How do you want to find your champion?',
    welcomeSub:    '5 questions · Personalized results · 100% free',
    installTitle:  'Install the app',
    installSub:    'Quick access from your home screen',
    installBtn:    'Install',
    resultsTitle:  'Your champions have been found ✨',
    resultsSub:    (label, pct) => `Based on ${label} · ${pct}% compatibility`,
    shareLabel:    'Share:',
    shareTwitter:  '🐦 Twitter/X',
    shareNative:   '📤 Share',
    affTitle:      name => `🔗 ${name} players also use`,
    adFooterText:  '⌨️ <strong>Keychron K8 Pro</strong> — The keyboard streamers love',
    restartBtn:    '↩ Try another path',
    offlineBar:    '📵 Offline mode',
    champCta:      name => `Play ${name} →`,
    guideCta:      'View guide →',
    diffLabel:     'Difficulty',
    matchLabel:    'Match',
    initLoading:   'Loading data',
    initStep1:     'Checking local cache…',
    initStep2:     'Connecting to Riot Data Dragon…',
    initStep3:     v => `Version ${v} found ✓`,
    initStep4:     'Downloading champions…',
    initStep5:     'Processing data…',
    initDone:      n => `${n} champions loaded ✓`,
    initFallback:  'Offline mode — fallback data',
    initCache:     'Data loaded from cache ✓',
    champCount:    (n, v) => `Database: ${n} champions · Version ${v}`,
    loaderTitle:   'Analyzing…',
    loaderMsgs:    ['Analyzing your answers…', n => `Browsing ${n} champions…`, 'Consulting the archives of Runeterra…', 'Your destiny is taking shape…'],
    openChamp:     'View on LoL →',
    topBadge:      'Best pick',
    paths: {
      character: { label:'🎭 Personality',  desc:'Introvert, strategist, impulsive…' },
      mood:      { label:'⚡ Mood',          desc:'How you feel right now' },
      tastes:    { label:'🎮 Tastes',        desc:'Movies, universes, characters' },
      playstyle: { label:'🗡️ Playstyle',     desc:'Carry, tank, assassin…' },
      universe:  { label:'🌍 Universe',      desc:'Demon, knight, mage' },
      difficulty:{ label:'🎯 Difficulty',    desc:'Easy or max challenge' }
    },
    legal: 'RiftMatch is not affiliated with or endorsed by Riot Games. League of Legends® is a registered trademark of Riot Games, Inc.'
  },

  es: {
    logoSub:       'Descubre tu campeón',
    adText:        '🖱️ <strong>SteelSeries Arctis Nova Pro</strong> — Los auriculares de los campeones',
    adBtn:         'Ver la oferta →',
    welcomeTitle:  '¿Cómo quieres encontrar tu campeón?',
    welcomeSub:    '5 preguntas · Resultados personalizados · 100% gratis',
    installTitle:  'Instalar la app',
    installSub:    'Acceso rápido desde tu pantalla de inicio',
    installBtn:    'Instalar',
    resultsTitle:  'Tus campeones han sido encontrados ✨',
    resultsSub:    (label, pct) => `Basado en ${label} · ${pct}% de compatibilidad`,
    shareLabel:    'Compartir:',
    shareTwitter:  '🐦 Twitter/X',
    shareNative:   '📤 Compartir',
    affTitle:      name => `🔗 Los jugadores de ${name} también usan`,
    adFooterText:  '⌨️ <strong>Keychron K8 Pro</strong> — El teclado favorito de los streamers',
    restartBtn:    '↩ Probar otro camino',
    offlineBar:    '📵 Modo sin conexión',
    champCta:      name => `Jugar ${name} →`,
    guideCta:      'Ver guía →',
    diffLabel:     'Dificultad',
    matchLabel:    'Compatibilidad',
    initLoading:   'Cargando datos',
    initStep1:     'Verificando caché local…',
    initStep2:     'Conectando con Riot Data Dragon…',
    initStep3:     v => `Versión ${v} encontrada ✓`,
    initStep4:     'Descargando campeones…',
    initStep5:     'Procesando datos…',
    initDone:      n => `${n} campeones cargados ✓`,
    initFallback:  'Modo sin conexión — datos de respaldo',
    initCache:     'Datos cargados desde caché ✓',
    champCount:    (n, v) => `Base de datos: ${n} campeones · Versión ${v}`,
    loaderTitle:   'Analizando…',
    loaderMsgs:    ['Analizando tus respuestas…', n => `Buscando entre ${n} campeones…`, 'Consultando los archivos de Runeterra…', 'Tu destino se está forjando…'],
    openChamp:     'Ver en LoL →',
    topBadge:      'Mejor elección',
    paths: {
      character: { label:'🎭 Personalidad', desc:'Introvertido, estratega, impulsivo…' },
      mood:      { label:'⚡ Estado de ánimo', desc:'Cómo te sientes ahora mismo' },
      tastes:    { label:'🎮 Gustos',        desc:'Películas, universos, personajes' },
      playstyle: { label:'🗡️ Estilo de juego',desc:'Carry, tanque, asesino…' },
      universe:  { label:'🌍 Universo',      desc:'Demonio, caballero, mago' },
      difficulty:{ label:'🎯 Dificultad',    desc:'Fácil o reto máximo' }
    },
    legal: 'RiftMatch no está afiliado ni respaldado por Riot Games. League of Legends® es una marca registrada de Riot Games, Inc.'
  }
};

/* ════════════════════════════════════════════════════════════
   QUIZ DATA (questions + answers per language)
════════════════════════════════════════════════════════════ */
export const QUIZ = {
  fr: {
    character: { questions: [
      { q:'Face à un problème, tu fonces ou tu réfléchis ?', a:[{i:'⚡',t:'Je fonce, on verra après'},{i:'🧠',t:'Je planifie soigneusement'},{i:'🎯',t:'Un peu des deux'},{i:'🤝',t:'Je consulte les autres'}]},
      { q:'Ce qui te caractérise le mieux ?', a:[{i:'🧊',t:'Calme et méthodique'},{i:'🔥',t:'Passionné et impulsif'},{i:'🎪',t:'Créatif et imprévisible'},{i:'🛡️',t:'Loyal et protecteur'}]},
    ]},
    mood: { questions: [
      { q:"T'as envie de quoi ce soir ?", a:[{i:'💥',t:'Tout détruire et carry solo'},{i:'🧩',t:'Jouer stratégique et contrôler'},{i:'🏃',t:'Bouger partout, être partout'},{i:'💚',t:'Soutenir mon équipe'}]},
      { q:'Victoire rapide ou partie épique ?', a:[{i:'⚡',t:'Victoire rapide, snowball tôt'},{i:'🏰',t:'Partie épique avec teamfight final'},{i:'📈',t:'Peu importe si je performe bien'},{i:'🎭',t:'Je veux des moments mémorables'}]},
    ]},
    tastes: { questions: [
      { q:'Le type de héros qui te parle le plus ?', a:[{i:'⚔️',t:'Le guerrier — force brute'},{i:'🔮',t:'Le mage — pouvoir et intelligence'},{i:'🗡️',t:"L'assassin — ombre et précision"},{i:'🛡️',t:'Le protecteur — courage et loyauté'}]},
      { q:'Ce que tu aimes dans un personnage fictif ?', a:[{i:'💪',t:'La puissance brute'},{i:'🧠',t:"L'intelligence et la ruse"},{i:'🌑',t:"Le mystère et l'ambiguïté"},{i:'⚡',t:"La vitesse et l'agilité"}]},
    ]},
    playstyle: { questions: [
      { q:'Comment tu préfères gagner tes combats ?', a:[{i:'💥',t:'All-in brutal et direct'},{i:'🎯',t:'Poke à distance et sécurisé'},{i:'🌪️',t:'Burst et disparaître'},{i:'⏳',t:'Outscale et late game'}]},
      { q:'Ta priorité en partie ?', a:[{i:'🏆',t:'Carry — max kills et dégâts'},{i:'🗺️',t:'Objectifs — dragon, baron, tours'},{i:'📡',t:'Vision et contrôle de map'},{i:'🤝',t:"Peel et protéger l'équipe"}]},
    ]},
    universe: { questions: [
      { q:'Quelle région de Runeterra te correspond ?', a:[{i:'⚔️',t:'Demacia — honneur et lumière'},{i:'🌑',t:'Noxus — force et domination'},{i:'🔮',t:'Ionia — équilibre et spiritualité'},{i:'⚡',t:'Zaun / Piltover — innovation'}]},
      { q:'Quel archétype narratif te représente ?', a:[{i:'👑',t:'Le roi — né pour régner'},{i:'🗡️',t:'Le vengeur — consumé par sa mission'},{i:'🎪',t:'Le trickster — imprévisible et libre'},{i:'🛡️',t:'Le gardien — protège les autres'}]},
    ]},
    difficulty: { questions: [
      { q:'Combien de temps tu mets à apprendre un champion ?', a:[{i:'⚡',t:'Efficace rapidement'},{i:'📅',t:'Quelques heures'},{i:'📚',t:'Quelques semaines'},{i:'🔭',t:'Des mois — maîtrise totale'}]},
      { q:'Ton objectif final avec ce champion ?', a:[{i:'🥇',t:'Avoir du fun et gagner'},{i:'📊',t:'Grimper en ranked efficacement'},{i:'🎭',t:'Avoir un main iconique'},{i:'🌟',t:'Atteindre le niveau one-trick'}]},
    ]},
  },

  en: {
    character: { questions: [
      { q:'When facing a problem, do you act or think?', a:[{i:'⚡',t:'I dive in and figure it out'},{i:'🧠',t:'I plan carefully first'},{i:'🎯',t:'A bit of both'},{i:'🤝',t:'I consult others first'}]},
      { q:'Which describes you best?', a:[{i:'🧊',t:'Calm and methodical'},{i:'🔥',t:'Passionate and impulsive'},{i:'🎪',t:'Creative and unpredictable'},{i:'🛡️',t:'Loyal and protective'}]},
    ]},
    mood: { questions: [
      { q:"What are you in the mood for tonight?", a:[{i:'💥',t:'Destroy everything and solo carry'},{i:'🧩',t:'Play strategically and control the game'},{i:'🏃',t:'Move everywhere, be everywhere'},{i:'💚',t:'Support my team'}]},
      { q:'Quick win or epic game?', a:[{i:'⚡',t:'Quick win, snowball early'},{i:'🏰',t:'Epic game with a final teamfight'},{i:'📈',t:"Doesn't matter as long as I perform"},{i:'🎭',t:'I want memorable moments'}]},
    ]},
    tastes: { questions: [
      { q:'Which hero archetype speaks to you most?', a:[{i:'⚔️',t:'The warrior — raw power'},{i:'🔮',t:'The mage — power and intelligence'},{i:'🗡️',t:'The assassin — shadow and precision'},{i:'🛡️',t:'The protector — courage and loyalty'}]},
      { q:'What do you love in a fictional character?', a:[{i:'💪',t:'Raw power'},{i:'🧠',t:'Intelligence and cunning'},{i:'🌑',t:'Mystery and ambiguity'},{i:'⚡',t:'Speed and agility'}]},
    ]},
    playstyle: { questions: [
      { q:'How do you prefer to win fights?', a:[{i:'💥',t:'All-in brutal and direct'},{i:'🎯',t:'Poke from safe distance'},{i:'🌪️',t:'Burst and vanish'},{i:'⏳',t:'Outscale and dominate late game'}]},
      { q:'Your top priority in a game?', a:[{i:'🏆',t:'Carry — max kills and damage'},{i:'🗺️',t:'Objectives — dragon, baron, towers'},{i:'📡',t:'Vision and map control'},{i:'🤝',t:'Peel and protect the team'}]},
    ]},
    universe: { questions: [
      { q:'Which Runeterra region fits you?', a:[{i:'⚔️',t:'Demacia — honor and light'},{i:'🌑',t:'Noxus — strength and domination'},{i:'🔮',t:'Ionia — balance and spirituality'},{i:'⚡',t:'Zaun / Piltover — innovation'}]},
      { q:'Which narrative archetype represents you?', a:[{i:'👑',t:'The king — born to rule'},{i:'🗡️',t:'The avenger — consumed by purpose'},{i:'🎪',t:'The trickster — unpredictable and free'},{i:'🛡️',t:'The guardian — protects others'}]},
    ]},
    difficulty: { questions: [
      { q:'How long does it take you to learn a new champion?', a:[{i:'⚡',t:'I want to be effective quickly'},{i:'📅',t:'A few hours, I adapt fast'},{i:'📚',t:'A few weeks of intense practice'},{i:'🔭',t:'Months — I want total mastery'}]},
      { q:'Your ultimate goal with this champion?', a:[{i:'🥇',t:'Have fun and win'},{i:'📊',t:'Climb ranked efficiently'},{i:'🎭',t:'Have an iconic main'},{i:'🌟',t:'Reach one-trick level'}]},
    ]},
  },

  es: {
    character: { questions: [
      { q:'Ante un problema, ¿actúas o piensas primero?', a:[{i:'⚡',t:'Me lanzo y luego veo'},{i:'🧠',t:'Planifico cuidadosamente primero'},{i:'🎯',t:'Un poco de ambas'},{i:'🤝',t:'Consulto a otros primero'}]},
      { q:'¿Qué te describe mejor?', a:[{i:'🧊',t:'Tranquilo y metódico'},{i:'🔥',t:'Apasionado e impulsivo'},{i:'🎪',t:'Creativo e impredecible'},{i:'🛡️',t:'Leal y protector'}]},
    ]},
    mood: { questions: [
      { q:'¿Qué tienes ganas de hacer esta noche?', a:[{i:'💥',t:'Destruir todo y cargar solo'},{i:'🧩',t:'Jugar estratégico y controlar'},{i:'🏃',t:'Moverme por todo el mapa'},{i:'💚',t:'Apoyar a mi equipo'}]},
      { q:'¿Victoria rápida o partida épica?', a:[{i:'⚡',t:'Victoria rápida, snowball temprano'},{i:'🏰',t:'Partida épica con teamfight final'},{i:'📈',t:'Me da igual si juego bien'},{i:'🎭',t:'Quiero momentos memorables'}]},
    ]},
    tastes: { questions: [
      { q:'¿Qué tipo de héroe te habla más?', a:[{i:'⚔️',t:'El guerrero — fuerza bruta'},{i:'🔮',t:'El mago — poder e inteligencia'},{i:'🗡️',t:'El asesino — sombra y precisión'},{i:'🛡️',t:'El protector — valentía y lealtad'}]},
      { q:'¿Qué te gusta en un personaje de ficción?', a:[{i:'💪',t:'La fuerza bruta'},{i:'🧠',t:'La inteligencia y la astucia'},{i:'🌑',t:'El misterio y la ambigüedad'},{i:'⚡',t:'La velocidad y la agilidad'}]},
    ]},
    playstyle: { questions: [
      { q:'¿Cómo prefieres ganar tus peleas?', a:[{i:'💥',t:'All-in brutal y directo'},{i:'🎯',t:'Poke a distancia y seguro'},{i:'🌪️',t:'Burst y desaparecer'},{i:'⏳',t:'Escalar y dominar el late game'}]},
      { q:'¿Tu prioridad en partida?', a:[{i:'🏆',t:'Carry — máximo daño y kills'},{i:'🗺️',t:'Objetivos — dragón, barón, torres'},{i:'📡',t:'Visión y control del mapa'},{i:'🤝',t:'Peel y proteger al equipo'}]},
    ]},
    universe: { questions: [
      { q:'¿Qué región de Runeterra encaja contigo?', a:[{i:'⚔️',t:'Demacia — honor y luz'},{i:'🌑',t:'Noxus — fuerza y dominación'},{i:'🔮',t:'Ionia — equilibrio y espiritualidad'},{i:'⚡',t:'Zaun / Piltover — innovación'}]},
      { q:'¿Qué arquetipo narrativo te representa?', a:[{i:'👑',t:'El rey — nacido para reinar'},{i:'🗡️',t:'El vengador — consumido por su misión'},{i:'🎪',t:'El trickster — impredecible y libre'},{i:'🛡️',t:'El guardián — protege a los demás'}]},
    ]},
    difficulty: { questions: [
      { q:'¿Cuánto tardas en aprender un nuevo campeón?', a:[{i:'⚡',t:'Quiero ser eficaz rápidamente'},{i:'📅',t:'Unas horas, me adapto rápido'},{i:'📚',t:'Unas semanas de práctica intensa'},{i:'🔭',t:'Meses — quiero el dominio total'}]},
      { q:'¿Tu objetivo final con este campeón?', a:[{i:'🥇',t:'Divertirme y ganar'},{i:'📊',t:'Subir en ranked eficientemente'},{i:'🎭',t:'Tener un main icónico'},{i:'🌟',t:'Alcanzar el nivel one-trick'}]},
    ]},
  },
};

/* ════════════════════════════════════════════════════════════
   COMMON QUESTIONS — shown first (diff, role, style)
   answers[0]=difficulty, answers[1]=role, answers[2]=style
════════════════════════════════════════════════════════════ */
export const COMMON_QUESTIONS = {
  fr: [
    {
      badge: '⚙️ Difficulté',
      q: 'Quel niveau de difficulté tu veux ?',
      a: [
        { i: '🟢', t: 'Facile — efficace rapidement' },
        { i: '🟡', t: 'Modéré — quelques mécaniques' },
        { i: '🔴', t: 'Difficile — haut skill cap' },
        { i: '🎲', t: 'Peu importe — surprends-moi' },
      ]
    },
    {
      badge: '🗺️ Rôle',
      q: 'Quel rôle tu veux jouer ?',
      a: [
        { i: '🏔️', t: 'Top' },
        { i: '🌲', t: 'Jungle' },
        { i: '🔮', t: 'Mid' },
        { i: '🏹', t: 'Bot (ADC)' },
        { i: '💚', t: 'Support' },
        { i: '🎲', t: 'Peu importe' },
      ]
    },
    {
      badge: '⚔️ Style',
      q: 'Tu préfères quel style de champion ?',
      a: [
        { i: '✨', t: 'Magie — sorts et AP' },
        { i: '⚔️', t: 'Physique — force et AD' },
        { i: '🛡️', t: 'Tank — résistance et CC' },
        { i: '🎲', t: 'Peu importe' },
      ]
    },
  ],
  en: [
    {
      badge: '⚙️ Difficulty',
      q: 'What difficulty level are you looking for?',
      a: [
        { i: '🟢', t: 'Easy — effective right away' },
        { i: '🟡', t: 'Moderate — some fun mechanics' },
        { i: '🔴', t: 'Hard — high skill cap' },
        { i: '🎲', t: 'Any — surprise me' },
      ]
    },
    {
      badge: '🗺️ Role',
      q: 'What role do you want to play?',
      a: [
        { i: '🏔️', t: 'Top' },
        { i: '🌲', t: 'Jungle' },
        { i: '🔮', t: 'Mid' },
        { i: '🏹', t: 'Bot (ADC)' },
        { i: '💚', t: 'Support' },
        { i: '🎲', t: 'Any role' },
      ]
    },
    {
      badge: '⚔️ Style',
      q: 'What champion style do you prefer?',
      a: [
        { i: '✨', t: 'Magic — spells and AP' },
        { i: '⚔️', t: 'Physical — strength and AD' },
        { i: '🛡️', t: 'Tank — resilience and CC' },
        { i: '🎲', t: 'Any style' },
      ]
    },
  ],
  es: [
    {
      badge: '⚙️ Dificultad',
      q: '¿Qué nivel de dificultad buscas?',
      a: [
        { i: '🟢', t: 'Fácil — eficaz enseguida' },
        { i: '🟡', t: 'Moderado — mecánicas divertidas' },
        { i: '🔴', t: 'Difícil — alto techo de habilidad' },
        { i: '🎲', t: 'Me da igual — sorpréndeme' },
      ]
    },
    {
      badge: '🗺️ Rol',
      q: '¿Qué rol quieres jugar?',
      a: [
        { i: '🏔️', t: 'Top' },
        { i: '🌲', t: 'Jungla' },
        { i: '🔮', t: 'Mid' },
        { i: '🏹', t: 'Bot (ADC)' },
        { i: '💚', t: 'Support' },
        { i: '🎲', t: 'Me da igual' },
      ]
    },
    {
      badge: '⚔️ Estilo',
      q: '¿Qué estilo de campeón prefieres?',
      a: [
        { i: '✨', t: 'Magia — hechizos y AP' },
        { i: '⚔️', t: 'Físico — fuerza y AD' },
        { i: '🛡️', t: 'Tanque — resistencia y CC' },
        { i: '🎲', t: 'Me da igual' },
      ]
    },
  ],
};

/* ════════════════════════════════════════════════════════════
   UI — Page-level strings (nav, footer, pages, components)
════════════════════════════════════════════════════════════ */
export const UI = {

  /* ── Français ─────────────────────────────────────────── */
  fr: {
    nav: {
      guides:       'Guides',
      news:         'News',
      patchNotes:   'Patch Notes',
      champions:    'Champions',
      quiz:         'Quiz',
      logoAriaLabel:'RiftMatch – Accueil',
      navAriaLabel: 'Navigation principale',
    },
    footer: {
      tagline:    'Trouve ton champion idéal en quelques questions.',
      quiz:       'Quiz',
      champions:  'Champions',
      guidesTitle:'Guides',
      cookieBtn:  'Gérer les cookies',
      legal:      'Non affilié à Riot Games. League of Legends est une marque de Riot Games, Inc.',
    },
    home: {
      title:            'RiftMatch – Quel champion League of Legends jouer ?',
      description:      'Découvrez quel champion LoL vous correspond en 7 questions. Quiz personnalisé basé sur votre style de jeu, votre rang et votre lore préféré.',
      heroEyebrow:      n => `${n} champions · Quiz gratuit`,
      heroTitle1:       'Quel champion',
      heroTitle2:       'es-tu vraiment ?',
      heroSub:          'Réponds à 7 questions et découvre le champion qui correspond à ton style, ta personnalité et ton niveau de jeu.',
      heroCta:          'Commencer le quiz',
      heroGhostCta:     'Voir tous les champions ↓',
      statChamps:       'Champions',
      statQuestions:    'Questions',
      statPaths:        'Chemins',
      sectionTitle:     'Tous les Champions',
      sectionSub:       'Clique sur un champion pour voir sa fiche détaillée',
      searchPlaceholder:'Rechercher…',
      searchAriaLabel:  'Rechercher un champion',
      noResults:        'Aucun champion trouvé.',
      showMore:         n => `Voir les ${n} autres champions`,
      resultsCount:     (v, t) => `${v} résultat${v > 1 ? 's' : ''} sur ${t}`,
    },
    quizPage: {
      title:           'Quiz – Trouve ton champion LoL | RiftMatch',
      description:     'Réponds à 7 questions pour découvrir quel champion League of Legends correspond à ta personnalité et ton style de jeu. Gratuit, sans inscription.',
      backAriaLabel:   'Retour',
      progressAriaLabel:'Progression',
      loadingBadge:    'Chargement...',
      loadingQuestion: 'Préparation des questions…',
      resultsTitle:    'Tes champions ont été trouvés !',
      tierS:           'Parfait',
      tierA:           'Très bon',
      tierB:           'Bon',
      tierSDesc:       'Correspondance parfaite',
      tierADesc:       'Très bon choix',
      tierBDesc:       'Bon choix',
      difficulties:    ['', 'Très facile', 'Facile', 'Modéré', 'Difficile', 'Très difficile'],
      resultsSub:      'Basé sur tes réponses, voici les champions qui te correspondent le mieux.',
      championCta:     'Voir la fiche complète →',
      championCtaShort:'Voir la fiche →',
      restartBtn:      '↩ Essayer un autre parcours',
    },
    guidesPage: {
      title:      'Guides League of Legends | RiftMatch',
      description:'Guides et articles pour tout savoir sur League of Legends : champions, rôles, mécaniques et conseils pour progresser.',
      eyebrow:    'Ressources',
      heading:    'Guides LoL',
      sub:        'Tout ce que tu dois savoir sur League of Legends',
      empty:      "Aucun guide disponible pour l'instant.",
      cardLabel:  'Guide',
      cardCta:    'Lire →',
    },
    championPage: {
      backLink:     '← Tous les champions',
      sectionLabel: 'Présentation',
      difficulty:   'Difficulté',
      archetypes:   'Archétypes',
      playstyle:    'Style de jeu',
      faction:      'Faction',
      opggLink:     name => `Voir ${name} sur op.gg →`,
      quizCta:      'Trouver mon\nchampion',
    },
    articlePage: {
      home:              'Accueil',
      guides:            'Guides',
      readingTime:       n => `${n} min de lecture`,
      backLink:          '← Tous les guides',
      quizCta:           'Trouver mon champion →',
      guideBadge:        'Guide complet',
      guideMeta:         (min, s) => `${min} min · ${s} sections`,
      tocTitle:          'Sommaire',
      sidebarQuizLabel:  'Quiz gratuit',
      sidebarQuizTitle:  'Quel champion es-tu ?',
      sidebarQuizCta:    'Commencer →',
    },
    cookie: {
      title:          'Cookies',
      desc:           'Nous utilisons des cookies pour améliorer votre expérience, analyser notre trafic et afficher des offres partenaires pertinentes.',
      privacyLink:    'En savoir plus',
      customize:      'Personnaliser',
      reject:         'Refuser',
      acceptAll:      'Tout accepter',
      modalTitle:     'Préférences de confidentialité',
      necessary:      'Cookies nécessaires',
      necessaryDesc:  'Requis pour le fonctionnement du site. Toujours actifs.',
      analytics:      'Cookies analytiques',
      analyticsDesc:  'Nous aident à comprendre comment vous utilisez le site (pages visitées, durée…).',
      marketing:      'Cookies marketing',
      marketingDesc:  'Permettent d\'afficher des offres partenaires pertinentes selon votre profil.',
      save:           'Enregistrer mes choix',
    },
  },

  /* ── English ──────────────────────────────────────────── */
  en: {
    nav: {
      guides:       'Guides',
      news:         'News',
      patchNotes:   'Patch Notes',
      champions:    'Champions',
      quiz:         'Quiz',
      logoAriaLabel:'RiftMatch – Home',
      navAriaLabel: 'Main navigation',
    },
    footer: {
      tagline:    'Find your ideal champion in a few questions.',
      quiz:       'Quiz',
      champions:  'Champions',
      guidesTitle:'Guides',
      cookieBtn:  'Manage cookies',
      legal:      'Not affiliated with Riot Games. League of Legends is a trademark of Riot Games, Inc.',
    },
    home: {
      title:            'RiftMatch – Which League of Legends champion should you play?',
      description:      'Discover which LoL champion matches you in 7 questions. Personalized quiz based on your playstyle, rank and lore preferences.',
      heroEyebrow:      n => `${n} champions · Free quiz`,
      heroTitle1:       'Which champion',
      heroTitle2:       'are you really?',
      heroSub:          'Answer 7 questions and discover the champion that matches your style, personality and skill level.',
      heroCta:          'Start the quiz',
      heroGhostCta:     'See all champions ↓',
      statChamps:       'Champions',
      statQuestions:    'Questions',
      statPaths:        'Paths',
      sectionTitle:     'All Champions',
      sectionSub:       'Click on a champion to see their full profile',
      searchPlaceholder:'Search…',
      searchAriaLabel:  'Search a champion',
      noResults:        'No champion found.',
      showMore:         n => `Show ${n} more champions`,
      resultsCount:     (v, t) => `${v} result${v > 1 ? 's' : ''} of ${t}`,
    },
    quizPage: {
      title:           'Quiz – Find your LoL champion | RiftMatch',
      description:     'Answer 7 questions to discover which League of Legends champion matches your personality and playstyle. Free, no sign-up required.',
      backAriaLabel:   'Back',
      progressAriaLabel:'Progress',
      loadingBadge:    'Loading...',
      loadingQuestion: 'Preparing questions…',
      resultsTitle:    'Your champions have been found!',
      tierS:           'Perfect',
      tierA:           'Great',
      tierB:           'Good',
      tierSDesc:       'Perfect match',
      tierADesc:       'Great choice',
      tierBDesc:       'Good choice',
      difficulties:    ['', 'Very easy', 'Easy', 'Moderate', 'Hard', 'Very hard'],
      resultsSub:      'Based on your answers, here are your best matching champions.',
      championCta:     'View full profile →',
      championCtaShort:'View profile →',
      restartBtn:      '↩ Try another path',
    },
    guidesPage: {
      title:      'League of Legends Guides | RiftMatch',
      description:'Guides and articles to master League of Legends: champions, roles, mechanics and tips to climb.',
      eyebrow:    'Resources',
      heading:    'LoL Guides',
      sub:        'Everything you need to know about League of Legends',
      empty:      'No guides available yet.',
      cardLabel:  'Guide',
      cardCta:    'Read →',
    },
    championPage: {
      backLink:     '← All champions',
      sectionLabel: 'Overview',
      difficulty:   'Difficulty',
      archetypes:   'Archetypes',
      playstyle:    'Playstyle',
      faction:      'Faction',
      opggLink:     name => `View ${name} on op.gg →`,
      quizCta:      'Find my\nchampion',
    },
    articlePage: {
      home:              'Home',
      guides:            'Guides',
      readingTime:       n => `${n} min read`,
      backLink:          '← All guides',
      quizCta:           'Find my champion →',
      guideBadge:        'Full guide',
      guideMeta:         (min, s) => `${min} min · ${s} sections`,
      tocTitle:          'Contents',
      sidebarQuizLabel:  'Free quiz',
      sidebarQuizTitle:  'Which champion are you?',
      sidebarQuizCta:    'Start →',
    },
    cookie: {
      title:          'Cookies',
      desc:           'We use cookies to improve your experience, analyze our traffic, and show relevant partner offers.',
      privacyLink:    'Learn more',
      customize:      'Customize',
      reject:         'Decline',
      acceptAll:      'Accept all',
      modalTitle:     'Privacy preferences',
      necessary:      'Necessary cookies',
      necessaryDesc:  'Required for the site to work. Always active.',
      analytics:      'Analytics cookies',
      analyticsDesc:  'Help us understand how you use the site (pages visited, duration…).',
      marketing:      'Marketing cookies',
      marketingDesc:  'Allow us to show relevant partner offers based on your profile.',
      save:           'Save my choices',
    },
  },

  /* ── Español ──────────────────────────────────────────── */
  es: {
    nav: {
      guides:       'Guías',
      news:         'Noticias',
      patchNotes:   'Notas de parche',
      champions:    'Campeones',
      quiz:         'Quiz',
      logoAriaLabel:'RiftMatch – Inicio',
      navAriaLabel: 'Navegación principal',
    },
    footer: {
      tagline:    'Encuentra tu campeón ideal en pocas preguntas.',
      quiz:       'Quiz',
      champions:  'Campeones',
      guidesTitle:'Guías',
      cookieBtn:  'Gestionar cookies',
      legal:      'No afiliado a Riot Games. League of Legends es una marca de Riot Games, Inc.',
    },
    home: {
      title:            'RiftMatch – ¿Qué campeón de League of Legends jugar?',
      description:      'Descubre qué campeón de LoL te corresponde en 7 preguntas. Quiz personalizado según tu estilo de juego, rango y preferencias de lore.',
      heroEyebrow:      n => `${n} campeones · Quiz gratis`,
      heroTitle1:       '¿Qué campeón',
      heroTitle2:       'eres realmente?',
      heroSub:          'Responde 7 preguntas y descubre el campeón que mejor encaja con tu estilo, personalidad y nivel de juego.',
      heroCta:          'Empezar el quiz',
      heroGhostCta:     'Ver todos los campeones ↓',
      statChamps:       'Campeones',
      statQuestions:    'Preguntas',
      statPaths:        'Caminos',
      sectionTitle:     'Todos los Campeones',
      sectionSub:       'Haz clic en un campeón para ver su ficha completa',
      searchPlaceholder:'Buscar…',
      searchAriaLabel:  'Buscar un campeón',
      noResults:        'Ningún campeón encontrado.',
      showMore:         n => `Ver los ${n} campeones restantes`,
      resultsCount:     (v, t) => `${v} resultado${v > 1 ? 's' : ''} de ${t}`,
    },
    quizPage: {
      title:           'Quiz – Encuentra tu campeón LoL | RiftMatch',
      description:     'Responde 7 preguntas para descubrir qué campeón de League of Legends encaja con tu personalidad y estilo de juego. Gratis, sin registro.',
      backAriaLabel:   'Volver',
      progressAriaLabel:'Progreso',
      loadingBadge:    'Cargando...',
      loadingQuestion: 'Preparando preguntas…',
      resultsTitle:    '¡Tus campeones han sido encontrados!',
      tierS:           'Perfecto',
      tierA:           'Muy bueno',
      tierB:           'Bueno',
      tierSDesc:       'Coincidencia perfecta',
      tierADesc:       'Muy buena elección',
      tierBDesc:       'Buena elección',
      difficulties:    ['', 'Muy fácil', 'Fácil', 'Moderado', 'Difícil', 'Muy difícil'],
      resultsSub:      'Basado en tus respuestas, aquí están tus campeones más compatibles.',
      championCta:     'Ver ficha completa →',
      championCtaShort:'Ver ficha →',
      restartBtn:      '↩ Probar otro camino',
    },
    guidesPage: {
      title:      'Guías de League of Legends | RiftMatch',
      description:'Guías y artículos para dominar League of Legends: campeones, roles, mecánicas y consejos para mejorar.',
      eyebrow:    'Recursos',
      heading:    'Guías LoL',
      sub:        'Todo lo que necesitas saber sobre League of Legends',
      empty:      'No hay guías disponibles por ahora.',
      cardLabel:  'Guía',
      cardCta:    'Leer →',
    },
    championPage: {
      backLink:     '← Todos los campeones',
      sectionLabel: 'Presentación',
      difficulty:   'Dificultad',
      archetypes:   'Arquetipos',
      playstyle:    'Estilo de juego',
      faction:      'Facción',
      opggLink:     name => `Ver ${name} en op.gg →`,
      quizCta:      'Encontrar mi\ncampeón',
    },
    articlePage: {
      home:              'Inicio',
      guides:            'Guías',
      readingTime:       n => `${n} min de lectura`,
      backLink:          '← Todas las guías',
      quizCta:           'Encontrar mi campeón →',
      guideBadge:        'Guía completa',
      guideMeta:         (min, s) => `${min} min · ${s} secciones`,
      tocTitle:          'Índice',
      sidebarQuizLabel:  'Quiz gratis',
      sidebarQuizTitle:  '¿Qué campeón eres?',
      sidebarQuizCta:    'Empezar →',
    },
    cookie: {
      title:          'Cookies',
      desc:           'Usamos cookies para mejorar tu experiencia, analizar nuestro tráfico y mostrar ofertas de socios relevantes.',
      privacyLink:    'Saber más',
      customize:      'Personalizar',
      reject:         'Rechazar',
      acceptAll:      'Aceptar todo',
      modalTitle:     'Preferencias de privacidad',
      necessary:      'Cookies necesarias',
      necessaryDesc:  'Necesarias para el funcionamiento del sitio. Siempre activas.',
      analytics:      'Cookies analíticas',
      analyticsDesc:  'Nos ayudan a entender cómo usas el sitio (páginas visitadas, duración…).',
      marketing:      'Cookies de marketing',
      marketingDesc:  'Permiten mostrar ofertas de socios relevantes según tu perfil.',
      save:           'Guardar mis preferencias',
    },
  },
};
