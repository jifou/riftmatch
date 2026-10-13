// Contenu SEO des fiches champion, genere uniquement a partir des donnees du site
// (roles, classes, style, difficulte, region). Aucune affirmation de gameplay inventee :
// chaque phrase decoule d'un champ de champions.ts.
import { CHAMPIONS, type Champion } from '../data/champions'
import { TEXT } from '../data/quiz-data.js'

type L = 'fr' | 'en' | 'es' | 'de' | 'it'

const GUIDE_SLUG: Record<L, Record<string, string>> = {
  fr: { top: 'guide-top-lane-league-of-legends', jungle: 'guide-jungle-league-of-legends', mid: 'guide-mid-lane-league-of-legends', bot: 'guide-adc-league-of-legends', support: 'guide-support-league-of-legends' },
  en: { top: 'top-lane-guide-league-of-legends', jungle: 'jungle-guide-league-of-legends', mid: 'mid-lane-guide-league-of-legends', bot: 'guide-adc-league-of-legends', support: 'support-guide-league-of-legends' },
  es: { top: 'guia-top-lane-league-of-legends', jungle: 'guia-jungla-league-of-legends', mid: 'guia-mid-lane-league-of-legends', bot: 'guide-adc-league-of-legends', support: 'guia-support-league-of-legends' },
  de: { top: 'toplane-guide-league-of-legends', jungle: 'jungle-guide-league-of-legends', mid: 'mid-lane-guide-league-of-legends', bot: 'adc-guide-league-of-legends', support: 'support-guide-league-of-legends' },
  it: { top: 'guida-top-lane-league-of-legends', jungle: 'guida-jungle-league-of-legends', mid: 'guida-mid-lane-league-of-legends', bot: 'guida-adc-league-of-legends', support: 'guida-support-league-of-legends' },
}

const STYLE_PHRASE: Record<L, Record<string, string>> = {
  fr: { aggressive: 'un jeu agressif', carry: 'un rôle de carry', utility: "un rôle d'utilité pour l'équipe", engage: "l'engagement des combats", passive: 'un jeu patient', peel: 'la protection des carries' },
  en: { aggressive: 'aggressive play', carry: 'a carry role', utility: 'a utility role for the team', engage: 'starting fights', passive: 'patient play', peel: 'protecting carries' },
  es: { aggressive: 'un juego agresivo', carry: 'un rol de carry', utility: 'un rol de utilidad para el equipo', engage: 'iniciar las peleas', passive: 'un juego paciente', peel: 'proteger a los carries' },
  de: { aggressive: 'aggressives Spiel', carry: 'eine Carry-Rolle', utility: 'eine Utility-Rolle fürs Team', engage: 'das Eröffnen von Kämpfen', passive: 'geduldiges Spiel', peel: 'den Schutz der Carries' },
  it: { aggressive: 'un gioco aggressivo', carry: 'un ruolo da carry', utility: 'un ruolo di utilità per la squadra', engage: "l'ingaggio degli scontri", passive: 'un gioco paziente', peel: 'la protezione dei carry' },
}

const LANE_IN: Record<L, Record<string, string>> = {
  fr: { top: 'en top lane', jungle: 'en jungle', mid: 'en mid lane', bot: 'en bot lane', support: 'en support' },
  en: { top: 'in the top lane', jungle: 'in the jungle', mid: 'in the mid lane', bot: 'in the bot lane', support: 'as support' },
  es: { top: 'en el carril superior', jungle: 'en la jungla', mid: 'en el carril central', bot: 'en el carril inferior', support: 'como apoyo' },
  de: { top: 'auf der Toplane', jungle: 'im Dschungel', mid: 'auf der Midlane', bot: 'auf der Botlane', support: 'als Support' },
  it: { top: 'nella top lane', jungle: 'nella jungle', mid: 'nella mid lane', bot: 'nella bot lane', support: 'come support' },
}

const AND: Record<L, string> = { fr: ' et ', en: ' and ', es: ' y ', de: ' und ', it: ' e ' }

const T: Record<L, any> = {
  fr: {
    title: (n: string, lane: string) => `${n} : rôle ${lane}, difficulté et champions similaires`,
    metaDesc: (n: string, lane: string, cls: string, d: string, reg: string, sim: string) => `${n}, ${cls.toLowerCase()} ${lane} de ${reg}. Difficulté : ${d.toLowerCase()}. Champions proches : ${sim}. Fiche complète et guide du rôle.`,
    h2Profile: (n: string) => `Profil de ${n}`,
    profile: (n: string, lanes: string, cls: string, reg: string, sty: string, nl: number, lane: string) =>
      `${n} est un champion de la catégorie ${cls}, originaire de ${reg}. Il se joue principalement ${lanes}. Son profil privilégie ${sty}. Sur RiftMatch, ${n} fait partie des ${nl} champions jouables ${lane}.`,
    h2Who: (n: string) => `${n} est-il fait pour toi ?`,
    easy: (n: string) => `${n} est accessible : tu peux être efficace après quelques parties, ce qui en fait un bon choix pour débuter ou pour apprendre un nouveau rôle.`,
    mid: (n: string) => `${n} demande de maîtriser les bases avant d'être vraiment rentable : prévois quelques dizaines de parties pour t'y sentir à l'aise.`,
    hard: (n: string) => `${n} est un champion exigeant : il récompense les joueurs prêts à investir du temps, mais il pardonne peu les erreurs au début.`,
    h2Sim: (n: string) => `Champions similaires à ${n}`,
    simIntro: (n: string) => `Si tu aimes ${n}, ces champions partagent son rôle et sa classe :`,
    h2Role: (lane: string) => `Aller plus loin sur le rôle ${lane}`,
    roleText: (n: string, lane: string) => `Pour jouer ${n} ${lane}, lis notre guide du rôle : objectifs, erreurs fréquentes et conseils pour progresser.`,
    roleCta: (lane: string) => `Lire le guide ${lane}`,
    h2Gear: 'Un bon matériel aide à progresser',
    gearText: 'Souris, clavier, casque : notre sélection de matériel gaming pour League of Legends, avec des liens de comparaison.',
    gearCta: "Voir les guides d'achat",
    h2Faq: (n: string) => `Questions fréquentes sur ${n}`,
    faqQ1: (n: string) => `${n} est-il difficile à jouer ?`,
    faqQ2: (n: string) => `Quelle lane jouer avec ${n} ?`,
    faqQ3: (n: string) => `Quels champions ressemblent à ${n} ?`,
    faqA1: (n: string, d: string, v: number) => `Sur notre échelle de 1 à 5, ${n} est noté ${v}/5 : ${d.toLowerCase()}`,
    faqA2: (n: string, lanes: string) => `${n} se joue principalement ${lanes}.`,
    faqA3: (sim: string) => `Parmi les champions au profil proche : ${sim}.`,
  },
  en: {
    title: (n: string, lane: string) => `${n}: ${lane} role, difficulty and similar champions`,
    metaDesc: (n: string, lane: string, cls: string, d: string, reg: string, sim: string) => `${n}, ${cls.toLowerCase()} ${lane} from ${reg}. Difficulty: ${d.toLowerCase()}. Similar champions: ${sim}. Full profile and role guide.`,
    h2Profile: (n: string) => `${n} profile`,
    profile: (n: string, lanes: string, cls: string, reg: string, sty: string, nl: number, lane: string) =>
      `${n} is a ${cls} champion from ${reg}. They are mainly played ${lanes}. Their profile favors ${sty}. On RiftMatch, ${n} is one of ${nl} champions playable ${lane}.`,
    h2Who: (n: string) => `Is ${n} right for you?`,
    easy: (n: string) => `${n} is accessible: you can be effective after a few games, which makes them a good pick to start out or to learn a new role.`,
    mid: (n: string) => `${n} asks you to master the basics before really paying off: plan a few dozen games to feel comfortable.`,
    hard: (n: string) => `${n} is demanding: they reward players ready to invest time, but forgive few mistakes at first.`,
    h2Sim: (n: string) => `Champions similar to ${n}`,
    simIntro: (n: string) => `If you like ${n}, these champions share their role and class:`,
    h2Role: (lane: string) => `Go further on the ${lane} role`,
    roleText: (n: string, lane: string) => `To play ${n} ${lane}, read our role guide: objectives, common mistakes and tips to improve.`,
    roleCta: (lane: string) => `Read the ${lane} guide`,
    h2Gear: 'Good gear helps you improve',
    gearText: 'Mouse, keyboard, headset: our gaming gear picks for League of Legends, with comparison links.',
    gearCta: 'See the buying guides',
    h2Faq: (n: string) => `${n} FAQ`,
    faqQ1: (n: string) => `Is ${n} hard to play?`,
    faqQ2: (n: string) => `Which lane should I play ${n} in?`,
    faqQ3: (n: string) => `Which champions are similar to ${n}?`,
    faqA1: (n: string, d: string, v: number) => `On our 1 to 5 scale, ${n} is rated ${v}/5: ${d.toLowerCase()}`,
    faqA2: (n: string, lanes: string) => `${n} is mainly played ${lanes}.`,
    faqA3: (sim: string) => `Champions with a close profile: ${sim}.`,
  },
  es: {
    title: (n: string, lane: string) => `${n}: rol ${lane}, dificultad y campeones similares`,
    metaDesc: (n: string, lane: string, cls: string, d: string, reg: string, sim: string) => `${n}, ${cls.toLowerCase()} de ${reg} ${lane}. Dificultad: ${d.toLowerCase()}. Campeones parecidos: ${sim}. Ficha completa y guía del rol.`,
    h2Profile: (n: string) => `Perfil de ${n}`,
    profile: (n: string, lanes: string, cls: string, reg: string, sty: string, nl: number, lane: string) =>
      `${n} es un campeón de la categoría ${cls}, originario de ${reg}. Se juega principalmente ${lanes}. Su perfil favorece ${sty}. En RiftMatch, ${n} es uno de los ${nl} campeones jugables ${lane}.`,
    h2Who: (n: string) => `¿${n} es para ti?`,
    easy: (n: string) => `${n} es accesible: puedes ser efectivo tras unas pocas partidas, lo que lo hace una buena opción para empezar o aprender un rol nuevo.`,
    mid: (n: string) => `${n} exige dominar las bases antes de rendir de verdad: cuenta con unas decenas de partidas para sentirte cómodo.`,
    hard: (n: string) => `${n} es exigente: premia a los jugadores dispuestos a invertir tiempo, pero perdona pocos errores al principio.`,
    h2Sim: (n: string) => `Campeones similares a ${n}`,
    simIntro: (n: string) => `Si te gusta ${n}, estos campeones comparten su rol y clase:`,
    h2Role: (lane: string) => `Profundiza en el rol ${lane}`,
    roleText: (n: string, lane: string) => `Para jugar ${n} ${lane}, lee nuestra guía del rol: objetivos, errores frecuentes y consejos para mejorar.`,
    roleCta: (lane: string) => `Leer la guía ${lane}`,
    h2Gear: 'Un buen equipo ayuda a mejorar',
    gearText: 'Ratón, teclado, auriculares: nuestra selección de material gaming para League of Legends, con enlaces de comparación.',
    gearCta: 'Ver las guías de compra',
    h2Faq: (n: string) => `Preguntas frecuentes sobre ${n}`,
    faqQ1: (n: string) => `¿${n} es difícil de jugar?`,
    faqQ2: (n: string) => `¿En qué línea jugar ${n}?`,
    faqQ3: (n: string) => `¿Qué campeones se parecen a ${n}?`,
    faqA1: (n: string, d: string, v: number) => `En nuestra escala de 1 a 5, ${n} tiene ${v}/5: ${d.toLowerCase()}`,
    faqA2: (n: string, lanes: string) => `${n} se juega principalmente ${lanes}.`,
    faqA3: (sim: string) => `Campeones con un perfil cercano: ${sim}.`,
  },
  de: {
    title: (n: string, lane: string) => `${n}: Rolle ${lane}, Schwierigkeit und ähnliche Champions`,
    metaDesc: (n: string, lane: string, cls: string, d: string, reg: string, sim: string) => `${n}, ${cls} aus ${reg} ${lane}. Schwierigkeit: ${d.toLowerCase()}. Ähnliche Champions: ${sim}. Vollständiges Profil und Rollen-Guide.`,
    h2Profile: (n: string) => `Profil von ${n}`,
    profile: (n: string, lanes: string, cls: string, reg: string, sty: string, nl: number, lane: string) =>
      `${n} ist ein Champion der Klasse ${cls} aus ${reg}. Gespielt wird er hauptsächlich ${lanes}. Sein Profil bevorzugt ${sty}. Auf RiftMatch ist ${n} einer von ${nl} Champions, die ${lane} spielbar sind.`,
    h2Who: (n: string) => `Passt ${n} zu dir?`,
    easy: (n: string) => `${n} ist zugänglich: Nach wenigen Partien kannst du effektiv spielen, ein guter Einstieg oder ideal für eine neue Rolle.`,
    mid: (n: string) => `${n} verlangt, dass du die Grundlagen beherrschst, bevor er sich richtig auszahlt: Rechne mit einigen Dutzend Partien.`,
    hard: (n: string) => `${n} ist anspruchsvoll: Er belohnt Spieler, die Zeit investieren, verzeiht anfangs aber wenig Fehler.`,
    h2Sim: (n: string) => `Champions ähnlich wie ${n}`,
    simIntro: (n: string) => `Wenn dir ${n} gefällt, teilen diese Champions Rolle und Klasse:`,
    h2Role: (lane: string) => `Mehr zur Rolle ${lane}`,
    roleText: (n: string, lane: string) => `Um ${n} ${lane} zu spielen, lies unseren Rollen-Guide: Ziele, häufige Fehler und Tipps zum Verbessern.`,
    roleCta: (lane: string) => `${lane}-Guide lesen`,
    h2Gear: 'Gutes Equipment hilft beim Verbessern',
    gearText: 'Maus, Tastatur, Headset: unsere Auswahl an Gaming-Equipment für League of Legends, mit Vergleichslinks.',
    gearCta: 'Kaufratgeber ansehen',
    h2Faq: (n: string) => `Häufige Fragen zu ${n}`,
    faqQ1: (n: string) => `Ist ${n} schwer zu spielen?`,
    faqQ2: (n: string) => `Auf welcher Lane spielt man ${n}?`,
    faqQ3: (n: string) => `Welche Champions ähneln ${n}?`,
    faqA1: (n: string, d: string, v: number) => `Auf unserer Skala von 1 bis 5 liegt ${n} bei ${v}/5: ${d.toLowerCase()}`,
    faqA2: (n: string, lanes: string) => `${n} wird hauptsächlich ${lanes} gespielt.`,
    faqA3: (sim: string) => `Champions mit ähnlichem Profil: ${sim}.`,
  },
  it: {
    title: (n: string, lane: string) => `${n}: ruolo ${lane}, difficoltà e campioni simili`,
    metaDesc: (n: string, lane: string, cls: string, d: string, reg: string, sim: string) => `${n}, ${cls.toLowerCase()} di ${reg} ${lane}. Difficoltà: ${d.toLowerCase()}. Campioni simili: ${sim}. Scheda completa e guida al ruolo.`,
    h2Profile: (n: string) => `Profilo di ${n}`,
    profile: (n: string, lanes: string, cls: string, reg: string, sty: string, nl: number, lane: string) =>
      `${n} è un campione della categoria ${cls}, originario di ${reg}. Si gioca principalmente ${lanes}. Il suo profilo privilegia ${sty}. Su RiftMatch, ${n} è uno dei ${nl} campioni giocabili ${lane}.`,
    h2Who: (n: string) => `${n} fa per te?`,
    easy: (n: string) => `${n} è accessibile: puoi essere efficace dopo poche partite, una buona scelta per iniziare o per imparare un nuovo ruolo.`,
    mid: (n: string) => `${n} richiede di padroneggiare le basi prima di rendere davvero: prevedi qualche decina di partite per sentirti a tuo agio.`,
    hard: (n: string) => `${n} è impegnativo: premia chi investe tempo, ma all'inizio perdona pochi errori.`,
    h2Sim: (n: string) => `Campioni simili a ${n}`,
    simIntro: (n: string) => `Se ti piace ${n}, questi campioni condividono ruolo e classe:`,
    h2Role: (lane: string) => `Approfondisci il ruolo ${lane}`,
    roleText: (n: string, lane: string) => `Per giocare ${n} ${lane}, leggi la nostra guida al ruolo: obiettivi, errori frequenti e consigli per migliorare.`,
    roleCta: (lane: string) => `Leggi la guida ${lane}`,
    h2Gear: 'Un buon equipaggiamento aiuta a migliorare',
    gearText: 'Mouse, tastiera, cuffie: la nostra selezione di accessori gaming per League of Legends, con link di confronto.',
    gearCta: "Vedi le guide all'acquisto",
    h2Faq: (n: string) => `Domande frequenti su ${n}`,
    faqQ1: (n: string) => `${n} è difficile da giocare?`,
    faqQ2: (n: string) => `In quale lane giocare ${n}?`,
    faqQ3: (n: string) => `Quali campioni assomigliano a ${n}?`,
    faqA1: (n: string, d: string, v: number) => `Sulla nostra scala da 1 a 5, ${n} ha ${v}/5: ${d.toLowerCase()}`,
    faqA2: (n: string, lanes: string) => `${n} si gioca principalmente ${lanes}.`,
    faqA3: (sim: string) => `Campioni con un profilo vicino: ${sim}.`,
  },
}

function similar(c: Champion, n = 4): Champion[] {
  const main = c.lanes[0]
  const arch = c.archetypes[0]
  return CHAMPIONS
    .filter(o => o.apiId !== c.apiId)
    .map(o => {
      let s = 0
      if (o.lanes.includes(main)) s += 4
      c.lanes.forEach(l => { if (o.lanes.includes(l)) s += 1 })
      if (o.archetypes[0] === arch) s += 4
      c.archetypes.forEach(a => { if (o.archetypes.includes(a)) s += 1 })
      c.styles.forEach(a => { if (o.styles.includes(a)) s += 1 })
      s -= Math.abs(o.difficulty - c.difficulty) * 0.7
      if (o.faction === c.faction) s += 0.8
      const k = [...(o.apiId + c.apiId)].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 7) % 1000 / 1000
      return { o, s, k }
    })
    .sort((a, b) => (b.s - a.s) || (a.k - b.k))
    .slice(0, n)
    .map(x => x.o)
}

export interface ChampionSeo {
  title: string
  metaDescription: string
  h2Profile: string
  profile: string
  h2Who: string
  who: string
  h2Sim: string
  simIntro: string
  similar: { name: string; apiId: string; lanes: string; cls: string }[]
  h2Role: string
  roleText: string
  roleCta: string
  roleHref: string
  h2Gear: string
  gearText: string
  gearCta: string
  gearHref: string
  h2Faq: string
  faq: { q: string; a: string }[]
}

export function championSeo(c: Champion, locale: string): ChampionSeo {
  const l = (T[locale as L] ? locale : 'fr') as L
  const t = T[l]
  const X = (TEXT as any)[l]
  const n = c.name
  const laneName = (k: string) => X.lanes[k] || k
  const clsName = (k: string) => X.arch[k] || k
  const main = c.lanes[0] || 'mid'
  const lanesTxt = c.lanes.map(k => LANE_IN[l][k] || k).join(AND[l])
  const mainTxt = LANE_IN[l][main] || main
  const cls = clsName(c.archetypes[0] || 'fighter')
  const region = X.regions[c.faction] || c.faction
  const diffText = X.diff[c.difficulty] || ''
  const sty = STYLE_PHRASE[l][c.styles[0]] || STYLE_PHRASE[l].aggressive
  const nl = CHAMPIONS.filter(o => o.lanes.includes(main)).length
  const sims = similar(c, 4)
  const simNames = sims.slice(0, 3).map(s => s.name).join(', ')
  const who = c.difficulty <= 2 ? t.easy(n) : c.difficulty === 3 ? t.mid(n) : t.hard(n)
  const prefix = l === 'fr' ? '' : `/${l}`
  const roleWord = laneName(main)

  return {
    title: t.title(n, laneName(main)),
    metaDescription: t.metaDesc(n, mainTxt, cls, diffText, region, simNames),
    h2Profile: t.h2Profile(n),
    profile: t.profile(n, lanesTxt, cls, region, sty, nl, mainTxt),
    h2Who: t.h2Who(n),
    who,
    h2Sim: t.h2Sim(n),
    simIntro: t.simIntro(n),
    similar: sims.map(s => ({ name: s.name, apiId: s.apiId, lanes: s.lanes.map(laneName).join(' · '), cls: clsName(s.archetypes[0]) })),
    h2Role: t.h2Role(roleWord),
    roleText: t.roleText(n, mainTxt),
    roleCta: t.roleCta(roleWord),
    roleHref: `${prefix}/info/${GUIDE_SLUG[l][main]}`,
    h2Gear: t.h2Gear,
    gearText: t.gearText,
    gearCta: t.gearCta,
    gearHref: `${prefix}/guides`,
    h2Faq: t.h2Faq(n),
    faq: [
      { q: t.faqQ1(n), a: t.faqA1(n, diffText, c.difficulty) },
      { q: t.faqQ2(n), a: t.faqA2(n, lanesTxt) },
      { q: t.faqQ3(n), a: t.faqA3(sims.map(s => s.name).join(', ')) },
    ],
  }
}
