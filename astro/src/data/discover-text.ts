// Textes des pages "selections" et "comparateur" + bloc "champions similaires", 5 langues.
// Rien de factuel ici hors des donnees des fiches champion (role, classe, style, region, difficulte).

export type Loc = 'fr' | 'en' | 'es' | 'de' | 'it'
export type Level = 'beginner' | 'expert'
export type Kind = 'lane' | 'class'

export const SEG: Record<'picks' | 'compare', Record<Loc, string>> = {
  picks: { fr: 'selection', en: 'picks', es: 'selecciones', de: 'auswahl', it: 'selezioni' },
  compare: { fr: 'comparer', en: 'compare', es: 'comparar', de: 'vergleich', it: 'confronta' },
}

export const LEVEL_WORD: Record<Level, Record<Loc, string>> = {
  beginner: { fr: 'debutant', en: 'beginner', es: 'principiante', de: 'einsteiger', it: 'principiante' },
  expert: { fr: 'expert', en: 'expert', es: 'experto', de: 'experte', it: 'esperto' },
}
export const CLASS_WORD: Record<Loc, string> = { fr: 'classe', en: 'class', es: 'clase', de: 'klasse', it: 'classe' }

export const STYLES: Record<Loc, Record<string, string>> = {
  fr: { aggressive: 'Agressif', carry: 'Carry', engage: 'Engage', utility: 'Utilitaire', passive: 'Passif', peel: 'Protection' },
  en: { aggressive: 'Aggressive', carry: 'Carry', engage: 'Engage', utility: 'Utility', passive: 'Passive', peel: 'Peel' },
  es: { aggressive: 'Agresivo', carry: 'Carry', engage: 'Iniciador', utility: 'Utilidad', passive: 'Pasivo', peel: 'Protección' },
  de: { aggressive: 'Aggressiv', carry: 'Carry', engage: 'Engage', utility: 'Utility', passive: 'Passiv', peel: 'Schutz' },
  it: { aggressive: 'Aggressivo', carry: 'Carry', engage: 'Ingaggio', utility: 'Utilità', passive: 'Passivo', peel: 'Protezione' },
}

interface T {
  // selections
  hubTitle: string
  hubDesc: string
  hubH1: string
  hubIntro: string
  groupLane: string
  groupClass: string
  groupLevel: { beginner: string; expert: string }
  count: (n: number) => string
  pickTitle: (level: Level, kind: Kind, term: string) => string
  pickDesc: (level: Level, kind: Kind, term: string, n: number) => string
  pickIntro: (level: Level, kind: Kind, term: string, n: number) => string[]
  quizCta: string
  quizBtn: string
  otherPicks: string
  backHub: string
  seeFiche: string
  // champion page block
  similarTitle: string
  similarSub: (name: string) => string
  compareWith: (a: string, b: string) => string
  morePicks: (level: Level, kind: Kind, term: string) => string
  // comparateur
  cmpHubTitle: string
  cmpHubDesc: string
  cmpHubH1: string
  cmpHubIntro: string
  cmpPick1: string
  cmpPick2: string
  cmpGo: string
  cmpPopular: string
  cmpTitle: (a: string, b: string) => string
  cmpDesc: (a: string, b: string) => string
  cmpIntro: (a: string, b: string) => string
  rowLane: string
  rowClass: string
  rowStyle: string
  rowRegion: string
  rowDiff: string
  cmpSummary: string
  sLanesBoth: (a: string, b: string, l: string) => string
  sLanesShared: (a: string, b: string, shared: string, la: string, lb: string) => string
  sLanesApart: (a: string, b: string, la: string, lb: string) => string
  sDiffSame: (d: number) => string
  sDiffEasier: (easy: string, de: number, hard: string, dh: number) => string
  sClassSame: (c: string) => string
  sClassDiff: (a: string, ca: string, b: string, cb: string) => string
  sRegionSame: (r: string) => string
  sRegionDiff: (a: string, ra: string, b: string, rb: string) => string
  verdictEasier: (easy: string) => string
  verdictSame: string
  otherCmp: (name: string) => string
  footerPicks: string
  footerCompare: string
}

export const DT: Record<Loc, T> = {
  fr: {
    hubTitle: 'Quel champion LoL jouer ? Nos sélections par rôle et par niveau',
    hubDesc: 'Champions faciles ou difficiles, classés par rôle et par classe : des listes tirées des fiches de RiftMatch pour choisir son champion sur League of Legends.',
    hubH1: 'Sélections de champions',
    hubIntro: 'Chaque liste regroupe les champions d\u2019un rôle ou d\u2019une classe selon leur difficulté (de 1 à 5 sur les fiches). Choisis une entrée, ou passe par le quiz si tu hésites.',
    groupLane: 'Par rôle',
    groupClass: 'Par classe',
    groupLevel: { beginner: 'Faciles à prendre en main', expert: 'Difficiles, pour les joueurs qui aiment la mécanique' },
    count: (n) => `${n} champions`,
    pickTitle: (lv, k, t) =>
      lv === 'beginner'
        ? k === 'lane' ? `Champions faciles en ${t} pour débuter` : `Champions de type ${t} faciles à prendre en main`
        : k === 'lane' ? `Champions difficiles en ${t} (difficulté 4 et 5)` : `Champions de type ${t} difficiles (difficulté 4 et 5)`,
    pickDesc: (lv, k, t, n) =>
      lv === 'beginner'
        ? `Les ${n} champions ${k === 'lane' ? `jouables en ${t}` : `de type ${t}`} les plus faciles à prendre en main (difficulté 1 ou 2 sur 5), avec rôle, classe et style de jeu.`
        : `Les ${n} champions ${k === 'lane' ? `jouables en ${t}` : `de type ${t}`} les plus exigeants (difficulté 4 ou 5 sur 5), pour viser un vrai plafond de skill.`,
    pickIntro: (lv, k, t, n) => [
      lv === 'beginner'
        ? `Tu débutes ou tu reprends le jeu et tu cherches un champion ${k === 'lane' ? `en ${t}` : `de type ${t}`} qui pardonne les erreurs ? Voici les ${n} champions de notre liste notés 1 ou 2 sur 5 en difficulté.`
        : `Tu connais déjà les bases et tu veux un champion ${k === 'lane' ? `en ${t}` : `de type ${t}`} qui demande du travail ? Voici les ${n} champions de notre liste notés 4 ou 5 sur 5 en difficulté.`,
      'La difficulté est celle des fiches champion (de 1 à 5), pas une statistique de victoire.',
    ],
    quizCta: 'Pas sûr de ton choix ? Le quiz te propose un champion selon ton style de jeu.',
    quizBtn: 'Faire le quiz',
    otherPicks: 'Autres sélections',
    backHub: 'Toutes les sélections',
    seeFiche: 'Voir la fiche',
    similarTitle: 'Champions similaires',
    similarSub: (n) => `Des champions proches de ${n} par le rôle, la classe et le style de jeu.`,
    compareWith: (a, b) => `${a} ou ${b} ?`,
    morePicks: (lv, k, t) => (lv === 'beginner' ? `Tous les champions faciles ${k === 'lane' ? `en ${t}` : `de type ${t}`}` : `Tous les champions difficiles ${k === 'lane' ? `en ${t}` : `de type ${t}`}`),
    cmpHubTitle: 'Comparateur de champions LoL : choisis deux champions',
    cmpHubDesc: 'Compare deux champions de League of Legends côte à côte : rôle, classe, style de jeu, région et difficulté.',
    cmpHubH1: 'Comparateur de champions',
    cmpHubIntro: 'Choisis deux champions pour voir leurs fiches côte à côte, ou pars d\u2019une comparaison courante.',
    cmpPick1: 'Premier champion',
    cmpPick2: 'Second champion',
    cmpGo: 'Comparer',
    cmpPopular: 'Comparaisons courantes',
    cmpTitle: (a, b) => `${a} ou ${b} : lequel jouer sur LoL ?`,
    cmpDesc: (a, b) => `${a} contre ${b} sur League of Legends : rôle, classe, style de jeu, région et difficulté, côte à côte.`,
    cmpIntro: (a, b) => `${a} et ${b} sur une seule page : les données de leurs fiches, côte à côte, pour t\u2019aider à choisir.`,
    rowLane: 'Rôle',
    rowClass: 'Classe',
    rowStyle: 'Style de jeu',
    rowRegion: 'Région',
    rowDiff: 'Difficulté',
    cmpSummary: 'En résumé',
    sLanesBoth: (a, b, l) => `${a} et ${b} se jouent tous les deux en ${l}.`,
    sLanesShared: (a, b, s, la, lb) => `${a} et ${b} se croisent en ${s}, mais ${a} se joue en ${la} et ${b} en ${lb}.`,
    sLanesApart: (a, b, la, lb) => `${a} se joue en ${la}, ${b} en ${lb}.`,
    sDiffSame: (d) => `Les deux ont la même difficulté (${d}/5).`,
    sDiffEasier: (e, de, h, dh) => `${e} est plus accessible (${de}/5 contre ${dh}/5 pour ${h}).`,
    sClassSame: (c) => `Les deux sont de classe ${c}.`,
    sClassDiff: (a, ca, b, cb) => `Côté classe : ${a} (${ca}) contre ${b} (${cb}).`,
    sRegionSame: (r) => `Les deux viennent de ${r}.`,
    sRegionDiff: (a, ra, b, rb) => `${a} vient de ${ra}, ${b} de ${rb}.`,
    verdictEasier: (e) => `Si tu cherches le plus simple à prendre en main, commence par ${e}.`,
    verdictSame: 'À difficulté égale, choisis selon le rôle et le style de jeu qui te parlent, ou fais le quiz.',
    otherCmp: (n) => `Autres comparaisons avec ${n}`,
    footerPicks: 'Sélections',
    footerCompare: 'Comparateur',
  },
  en: {
    hubTitle: 'Which LoL champion to play? Our picks by role and skill level',
    hubDesc: 'Easy or hard champions, sorted by role and class: lists built from the RiftMatch champion pages to help you choose in League of Legends.',
    hubH1: 'Champion picks',
    hubIntro: 'Each list groups the champions of one role or class by difficulty (1 to 5 on the champion pages). Pick one, or take the quiz if you are unsure.',
    groupLane: 'By role',
    groupClass: 'By class',
    groupLevel: { beginner: 'Easy to pick up', expert: 'Hard, for players who enjoy mechanics' },
    count: (n) => `${n} champions`,
    pickTitle: (lv, k, t) =>
      lv === 'beginner'
        ? k === 'lane' ? `Easy ${t} champions for beginners` : `Easy ${t} champions to pick up`
        : k === 'lane' ? `Hard ${t} champions (difficulty 4 and 5)` : `Hard ${t} champions (difficulty 4 and 5)`,
    pickDesc: (lv, k, t, n) =>
      lv === 'beginner'
        ? `The ${n} easiest ${k === 'lane' ? `${t} champions` : `${t} champions`} to pick up (difficulty 1 or 2 out of 5), with role, class and playstyle.`
        : `The ${n} most demanding ${t} champions (difficulty 4 or 5 out of 5), for players chasing a real skill ceiling.`,
    pickIntro: (lv, k, t, n) => [
      lv === 'beginner'
        ? `New to the game, or coming back, and looking for a forgiving ${t} champion? Here are the ${n} champions on our list rated 1 or 2 out of 5 for difficulty.`
        : `You know the basics and want a ${t} champion that takes real work? Here are the ${n} champions on our list rated 4 or 5 out of 5 for difficulty.`,
      'Difficulty is the rating shown on the champion pages (1 to 5), not a win rate.',
    ],
    quizCta: 'Not sure? The quiz suggests a champion that fits your playstyle.',
    quizBtn: 'Take the quiz',
    otherPicks: 'More picks',
    backHub: 'All picks',
    seeFiche: 'See the page',
    similarTitle: 'Similar champions',
    similarSub: (n) => `Champions close to ${n} in role, class and playstyle.`,
    compareWith: (a, b) => `${a} or ${b}?`,
    morePicks: (lv, k, t) => (lv === 'beginner' ? `All easy ${t} champions` : `All hard ${t} champions`),
    cmpHubTitle: 'LoL champion comparison tool: pick two champions',
    cmpHubDesc: 'Compare two League of Legends champions side by side: role, class, playstyle, region and difficulty.',
    cmpHubH1: 'Champion comparison',
    cmpHubIntro: 'Pick two champions to see their pages side by side, or start from a common matchup.',
    cmpPick1: 'First champion',
    cmpPick2: 'Second champion',
    cmpGo: 'Compare',
    cmpPopular: 'Common comparisons',
    cmpTitle: (a, b) => `${a} or ${b}: which one to play in LoL?`,
    cmpDesc: (a, b) => `${a} vs ${b} in League of Legends: role, class, playstyle, region and difficulty, side by side.`,
    cmpIntro: (a, b) => `${a} and ${b} on a single page: the data from their champion pages, side by side, to help you choose.`,
    rowLane: 'Role',
    rowClass: 'Class',
    rowStyle: 'Playstyle',
    rowRegion: 'Region',
    rowDiff: 'Difficulty',
    cmpSummary: 'In short',
    sLanesBoth: (a, b, l) => `${a} and ${b} are both played in ${l}.`,
    sLanesShared: (a, b, s, la, lb) => `${a} and ${b} meet in ${s}, but ${a} is played in ${la} and ${b} in ${lb}.`,
    sLanesApart: (a, b, la, lb) => `${a} is played in ${la}, ${b} in ${lb}.`,
    sDiffSame: (d) => `Both have the same difficulty (${d}/5).`,
    sDiffEasier: (e, de, h, dh) => `${e} is easier to pick up (${de}/5 against ${dh}/5 for ${h}).`,
    sClassSame: (c) => `Both are ${c} champions.`,
    sClassDiff: (a, ca, b, cb) => `Class: ${a} (${ca}) against ${b} (${cb}).`,
    sRegionSame: (r) => `Both come from ${r}.`,
    sRegionDiff: (a, ra, b, rb) => `${a} comes from ${ra}, ${b} from ${rb}.`,
    verdictEasier: (e) => `If you want the simplest one to pick up, start with ${e}.`,
    verdictSame: 'With the same difficulty, choose by the role and playstyle that appeal to you, or take the quiz.',
    otherCmp: (n) => `More comparisons with ${n}`,
    footerPicks: 'Picks',
    footerCompare: 'Compare',
  },
  es: {
    hubTitle: '¿Qué campeón de LoL jugar? Nuestras selecciones por línea y nivel',
    hubDesc: 'Campeones fáciles o difíciles, ordenados por línea y clase: listas creadas a partir de las fichas de RiftMatch para elegir en League of Legends.',
    hubH1: 'Selecciones de campeones',
    hubIntro: 'Cada lista agrupa los campeones de una línea o clase según su dificultad (de 1 a 5 en las fichas). Elige una, o haz el quiz si dudas.',
    groupLane: 'Por línea',
    groupClass: 'Por clase',
    groupLevel: { beginner: 'Fáciles de aprender', expert: 'Difíciles, para quien disfruta la mecánica' },
    count: (n) => `${n} campeones`,
    pickTitle: (lv, k, t) =>
      lv === 'beginner'
        ? k === 'lane' ? `Campeones fáciles en ${t} para empezar` : `Campeones de clase ${t} fáciles de aprender`
        : k === 'lane' ? `Campeones difíciles en ${t} (dificultad 4 y 5)` : `Campeones de clase ${t} difíciles (dificultad 4 y 5)`,
    pickDesc: (lv, k, t, n) =>
      lv === 'beginner'
        ? `Los ${n} campeones ${k === 'lane' ? `de ${t}` : `de clase ${t}`} más fáciles de aprender (dificultad 1 o 2 sobre 5), con línea, clase y estilo de juego.`
        : `Los ${n} campeones ${k === 'lane' ? `de ${t}` : `de clase ${t}`} más exigentes (dificultad 4 o 5 sobre 5), para buscar un techo de habilidad real.`,
    pickIntro: (lv, k, t, n) => [
      lv === 'beginner'
        ? `¿Empiezas o vuelves al juego y buscas un campeón ${k === 'lane' ? `de ${t}` : `de clase ${t}`} que perdone errores? Aquí van los ${n} campeones de nuestra lista con dificultad 1 o 2 sobre 5.`
        : `¿Ya conoces lo básico y quieres un campeón ${k === 'lane' ? `de ${t}` : `de clase ${t}`} que exija trabajo? Aquí van los ${n} campeones de nuestra lista con dificultad 4 o 5 sobre 5.`,
      'La dificultad es la de las fichas de campeón (de 1 a 5), no una estadística de victorias.',
    ],
    quizCta: '¿No lo tienes claro? El quiz te propone un campeón según tu estilo de juego.',
    quizBtn: 'Hacer el quiz',
    otherPicks: 'Más selecciones',
    backHub: 'Todas las selecciones',
    seeFiche: 'Ver la ficha',
    similarTitle: 'Campeones similares',
    similarSub: (n) => `Campeones cercanos a ${n} por línea, clase y estilo de juego.`,
    compareWith: (a, b) => `¿${a} o ${b}?`,
    morePicks: (lv, k, t) => (lv === 'beginner' ? `Todos los campeones fáciles ${k === 'lane' ? `de ${t}` : `de clase ${t}`}` : `Todos los campeones difíciles ${k === 'lane' ? `de ${t}` : `de clase ${t}`}`),
    cmpHubTitle: 'Comparador de campeones de LoL: elige dos campeones',
    cmpHubDesc: 'Compara dos campeones de League of Legends lado a lado: línea, clase, estilo de juego, región y dificultad.',
    cmpHubH1: 'Comparador de campeones',
    cmpHubIntro: 'Elige dos campeones para ver sus fichas lado a lado, o parte de una comparación habitual.',
    cmpPick1: 'Primer campeón',
    cmpPick2: 'Segundo campeón',
    cmpGo: 'Comparar',
    cmpPopular: 'Comparaciones habituales',
    cmpTitle: (a, b) => `${a} o ${b}: ¿cuál jugar en LoL?`,
    cmpDesc: (a, b) => `${a} contra ${b} en League of Legends: línea, clase, estilo de juego, región y dificultad, lado a lado.`,
    cmpIntro: (a, b) => `${a} y ${b} en una sola página: los datos de sus fichas, lado a lado, para ayudarte a elegir.`,
    rowLane: 'Línea',
    rowClass: 'Clase',
    rowStyle: 'Estilo de juego',
    rowRegion: 'Región',
    rowDiff: 'Dificultad',
    cmpSummary: 'En resumen',
    sLanesBoth: (a, b, l) => `${a} y ${b} se juegan ambos en ${l}.`,
    sLanesShared: (a, b, s, la, lb) => `${a} y ${b} coinciden en ${s}, pero ${a} se juega en ${la} y ${b} en ${lb}.`,
    sLanesApart: (a, b, la, lb) => `${a} se juega en ${la}, ${b} en ${lb}.`,
    sDiffSame: (d) => `Los dos tienen la misma dificultad (${d}/5).`,
    sDiffEasier: (e, de, h, dh) => `${e} es más accesible (${de}/5 frente a ${dh}/5 de ${h}).`,
    sClassSame: (c) => `Los dos son de clase ${c}.`,
    sClassDiff: (a, ca, b, cb) => `En clase: ${a} (${ca}) frente a ${b} (${cb}).`,
    sRegionSame: (r) => `Los dos vienen de ${r}.`,
    sRegionDiff: (a, ra, b, rb) => `${a} viene de ${ra}, ${b} de ${rb}.`,
    verdictEasier: (e) => `Si buscas el más sencillo de aprender, empieza por ${e}.`,
    verdictSame: 'Con la misma dificultad, elige según la línea y el estilo de juego que te gusten, o haz el quiz.',
    otherCmp: (n) => `Más comparaciones con ${n}`,
    footerPicks: 'Selecciones',
    footerCompare: 'Comparador',
  },
  de: {
    hubTitle: 'Welchen LoL-Champion spielen? Unsere Auswahl nach Rolle und Niveau',
    hubDesc: 'Leichte oder schwere Champions, sortiert nach Rolle und Klasse: Listen aus den RiftMatch-Champion-Seiten, um in League of Legends zu wählen.',
    hubH1: 'Champion-Auswahl',
    hubIntro: 'Jede Liste fasst die Champions einer Rolle oder Klasse nach Schwierigkeit zusammen (1 bis 5 auf den Champion-Seiten). Such dir eine aus oder mach das Quiz, wenn du unsicher bist.',
    groupLane: 'Nach Rolle',
    groupClass: 'Nach Klasse',
    groupLevel: { beginner: 'Leicht zu lernen', expert: 'Schwer, für Spieler, die Mechanik mögen' },
    count: (n) => `${n} Champions`,
    pickTitle: (lv, k, t) =>
      lv === 'beginner'
        ? k === 'lane' ? `Leichte ${t}-Champions für Einsteiger` : `Leichte Champions der Klasse ${t}`
        : k === 'lane' ? `Schwere ${t}-Champions (Schwierigkeit 4 und 5)` : `Schwere Champions der Klasse ${t} (Schwierigkeit 4 und 5)`,
    pickDesc: (lv, k, t, n) =>
      lv === 'beginner'
        ? `Die ${n} leichtesten ${k === 'lane' ? `${t}-Champions` : `Champions der Klasse ${t}`} (Schwierigkeit 1 oder 2 von 5), mit Rolle, Klasse und Spielstil.`
        : `Die ${n} anspruchsvollsten ${k === 'lane' ? `${t}-Champions` : `Champions der Klasse ${t}`} (Schwierigkeit 4 oder 5 von 5) für alle, die ein echtes Skill-Limit suchen.`,
    pickIntro: (lv, k, t, n) => [
      lv === 'beginner'
        ? `Du fängst an oder steigst wieder ein und suchst ${k === 'lane' ? `einen ${t}-Champion` : `einen Champion der Klasse ${t}`}, der Fehler verzeiht? Hier sind die ${n} Champions unserer Liste mit Schwierigkeit 1 oder 2 von 5.`
        : `Du kennst die Grundlagen und willst ${k === 'lane' ? `einen ${t}-Champion` : `einen Champion der Klasse ${t}`}, der Übung verlangt? Hier sind die ${n} Champions unserer Liste mit Schwierigkeit 4 oder 5 von 5.`,
      'Die Schwierigkeit entspricht der Wertung auf den Champion-Seiten (1 bis 5), nicht einer Siegquote.',
    ],
    quizCta: 'Unsicher? Das Quiz schlägt dir einen Champion passend zu deinem Spielstil vor.',
    quizBtn: 'Quiz starten',
    otherPicks: 'Weitere Auswahl',
    backHub: 'Alle Listen',
    seeFiche: 'Zur Seite',
    similarTitle: 'Ähnliche Champions',
    similarSub: (n) => `Champions, die ${n} in Rolle, Klasse und Spielstil ähneln.`,
    compareWith: (a, b) => `${a} oder ${b}?`,
    morePicks: (lv, k, t) => (lv === 'beginner' ? `Alle leichten ${k === 'lane' ? `${t}-Champions` : `Champions der Klasse ${t}`}` : `Alle schweren ${k === 'lane' ? `${t}-Champions` : `Champions der Klasse ${t}`}`),
    cmpHubTitle: 'LoL-Champion-Vergleich: wähle zwei Champions',
    cmpHubDesc: 'Vergleiche zwei League-of-Legends-Champions nebeneinander: Rolle, Klasse, Spielstil, Region und Schwierigkeit.',
    cmpHubH1: 'Champion-Vergleich',
    cmpHubIntro: 'Wähle zwei Champions, um ihre Seiten nebeneinander zu sehen, oder starte mit einem häufigen Vergleich.',
    cmpPick1: 'Erster Champion',
    cmpPick2: 'Zweiter Champion',
    cmpGo: 'Vergleichen',
    cmpPopular: 'Häufige Vergleiche',
    cmpTitle: (a, b) => `${a} oder ${b}: wen in LoL spielen?`,
    cmpDesc: (a, b) => `${a} gegen ${b} in League of Legends: Rolle, Klasse, Spielstil, Region und Schwierigkeit nebeneinander.`,
    cmpIntro: (a, b) => `${a} und ${b} auf einer Seite: die Daten ihrer Champion-Seiten nebeneinander, als Entscheidungshilfe.`,
    rowLane: 'Rolle',
    rowClass: 'Klasse',
    rowStyle: 'Spielstil',
    rowRegion: 'Region',
    rowDiff: 'Schwierigkeit',
    cmpSummary: 'Kurz gesagt',
    sLanesBoth: (a, b, l) => `${a} und ${b} werden beide in ${l} gespielt.`,
    sLanesShared: (a, b, s, la, lb) => `${a} und ${b} treffen sich in ${s}, aber ${a} wird in ${la} und ${b} in ${lb} gespielt.`,
    sLanesApart: (a, b, la, lb) => `${a} wird in ${la} gespielt, ${b} in ${lb}.`,
    sDiffSame: (d) => `Beide haben dieselbe Schwierigkeit (${d}/5).`,
    sDiffEasier: (e, de, h, dh) => `${e} ist leichter zu lernen (${de}/5 gegenüber ${dh}/5 bei ${h}).`,
    sClassSame: (c) => `Beide gehören zur Klasse ${c}.`,
    sClassDiff: (a, ca, b, cb) => `Klasse: ${a} (${ca}) gegenüber ${b} (${cb}).`,
    sRegionSame: (r) => `Beide stammen aus ${r}.`,
    sRegionDiff: (a, ra, b, rb) => `${a} stammt aus ${ra}, ${b} aus ${rb}.`,
    verdictEasier: (e) => `Wenn du den einfacheren Einstieg suchst, beginne mit ${e}.`,
    verdictSame: 'Bei gleicher Schwierigkeit wähle nach Rolle und Spielstil, die dir liegen, oder mach das Quiz.',
    otherCmp: (n) => `Weitere Vergleiche mit ${n}`,
    footerPicks: 'Auswahl',
    footerCompare: 'Vergleich',
  },
  it: {
    hubTitle: 'Quale campione di LoL giocare? Le nostre selezioni per ruolo e livello',
    hubDesc: 'Campioni facili o difficili, ordinati per ruolo e classe: elenchi creati dalle schede di RiftMatch per scegliere in League of Legends.',
    hubH1: 'Selezioni di campioni',
    hubIntro: 'Ogni elenco raggruppa i campioni di un ruolo o di una classe in base alla difficoltà (da 1 a 5 nelle schede). Scegline uno, o fai il quiz se sei indeciso.',
    groupLane: 'Per ruolo',
    groupClass: 'Per classe',
    groupLevel: { beginner: 'Facili da imparare', expert: 'Difficili, per chi ama la meccanica' },
    count: (n) => `${n} campioni`,
    pickTitle: (lv, k, t) =>
      lv === 'beginner'
        ? k === 'lane' ? `Campioni facili in ${t} per iniziare` : `Campioni di classe ${t} facili da imparare`
        : k === 'lane' ? `Campioni difficili in ${t} (difficoltà 4 e 5)` : `Campioni di classe ${t} difficili (difficoltà 4 e 5)`,
    pickDesc: (lv, k, t, n) =>
      lv === 'beginner'
        ? `I ${n} campioni ${k === 'lane' ? `da ${t}` : `di classe ${t}`} più facili da imparare (difficoltà 1 o 2 su 5), con ruolo, classe e stile di gioco.`
        : `I ${n} campioni ${k === 'lane' ? `da ${t}` : `di classe ${t}`} più impegnativi (difficoltà 4 o 5 su 5), per chi cerca un vero tetto di abilità.`,
    pickIntro: (lv, k, t, n) => [
      lv === 'beginner'
        ? `Stai iniziando o torni al gioco e cerchi un campione ${k === 'lane' ? `in ${t}` : `di classe ${t}`} che perdoni gli errori? Ecco i ${n} campioni del nostro elenco con difficoltà 1 o 2 su 5.`
        : `Conosci già le basi e vuoi un campione ${k === 'lane' ? `in ${t}` : `di classe ${t}`} che richieda impegno? Ecco i ${n} campioni del nostro elenco con difficoltà 4 o 5 su 5.`,
      'La difficoltà è quella delle schede dei campioni (da 1 a 5), non una statistica di vittorie.',
    ],
    quizCta: 'Non sei sicuro? Il quiz ti propone un campione in base al tuo stile di gioco.',
    quizBtn: 'Fai il quiz',
    otherPicks: 'Altre selezioni',
    backHub: 'Tutte le selezioni',
    seeFiche: 'Vedi la scheda',
    similarTitle: 'Campioni simili',
    similarSub: (n) => `Campioni vicini a ${n} per ruolo, classe e stile di gioco.`,
    compareWith: (a, b) => `${a} o ${b}?`,
    morePicks: (lv, k, t) => (lv === 'beginner' ? `Tutti i campioni facili ${k === 'lane' ? `in ${t}` : `di classe ${t}`}` : `Tutti i campioni difficili ${k === 'lane' ? `in ${t}` : `di classe ${t}`}`),
    cmpHubTitle: 'Confronto campioni di LoL: scegli due campioni',
    cmpHubDesc: 'Confronta due campioni di League of Legends fianco a fianco: ruolo, classe, stile di gioco, regione e difficoltà.',
    cmpHubH1: 'Confronto tra campioni',
    cmpHubIntro: 'Scegli due campioni per vedere le loro schede fianco a fianco, o parti da un confronto frequente.',
    cmpPick1: 'Primo campione',
    cmpPick2: 'Secondo campione',
    cmpGo: 'Confronta',
    cmpPopular: 'Confronti frequenti',
    cmpTitle: (a, b) => `${a} o ${b}: quale giocare in LoL?`,
    cmpDesc: (a, b) => `${a} contro ${b} in League of Legends: ruolo, classe, stile di gioco, regione e difficoltà, fianco a fianco.`,
    cmpIntro: (a, b) => `${a} e ${b} in una sola pagina: i dati delle loro schede, fianco a fianco, per aiutarti a scegliere.`,
    rowLane: 'Ruolo',
    rowClass: 'Classe',
    rowStyle: 'Stile di gioco',
    rowRegion: 'Regione',
    rowDiff: 'Difficoltà',
    cmpSummary: 'In breve',
    sLanesBoth: (a, b, l) => `${a} e ${b} si giocano entrambi in ${l}.`,
    sLanesShared: (a, b, s, la, lb) => `${a} e ${b} si incontrano in ${s}, ma ${a} si gioca in ${la} e ${b} in ${lb}.`,
    sLanesApart: (a, b, la, lb) => `${a} si gioca in ${la}, ${b} in ${lb}.`,
    sDiffSame: (d) => `Entrambi hanno la stessa difficoltà (${d}/5).`,
    sDiffEasier: (e, de, h, dh) => `${e} è più accessibile (${de}/5 contro ${dh}/5 di ${h}).`,
    sClassSame: (c) => `Entrambi sono di classe ${c}.`,
    sClassDiff: (a, ca, b, cb) => `Per classe: ${a} (${ca}) contro ${b} (${cb}).`,
    sRegionSame: (r) => `Entrambi vengono da ${r}.`,
    sRegionDiff: (a, ra, b, rb) => `${a} viene da ${ra}, ${b} da ${rb}.`,
    verdictEasier: (e) => `Se cerchi il più semplice da imparare, parti da ${e}.`,
    verdictSame: 'A parità di difficoltà, scegli in base al ruolo e allo stile di gioco che preferisci, oppure fai il quiz.',
    otherCmp: (n) => `Altri confronti con ${n}`,
    footerPicks: 'Selezioni',
    footerCompare: 'Confronto',
  },
}
