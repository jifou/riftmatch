import type { MigrationModule } from './runner'

export const id = '003-guide-adc'
export const description = 'Crée le guide "Qu\'est-ce qu\'un ADC et comment jouer ?"'

const p = (text: string) => ({ children: [{ text }] })
const h2 = (text: string) => ({ type: 'h2', children: [{ text }] })
const h3 = (text: string) => ({ type: 'h3', children: [{ text }] })
const ul = (...items: string[]) => ({
  type: 'ul',
  children: items.map(item => ({ type: 'li', children: [{ text: item }] })),
})
const b = (text: string) => ({ text, bold: true })
const mixed = (...parts: Array<{ text: string; bold?: boolean }>) => ({ children: parts })

const content = [
  p(
    "L'ADC — pour Attack Damage Carry — est l'un des rôles les plus populaires et les plus exigeants " +
    "de League of Legends. Tireur d'élite de l'équipe, il inflige des dégâts constants à distance " +
    "et devient un monstre offensif en fin de partie. Mais pour en arriver là, il faut survivre " +
    "une phase de jeu délicate et maîtriser des mécaniques précises."
  ),

  h2("C'est quoi un ADC ?"),
  p(
    "ADC signifie Attack Damage Carry : un champion qui porte (carry) l'équipe grâce à ses dégâts " +
    "physiques (AD = Attack Damage). C'est le tireur de l'équipe — il attaque à distance, " +
    "inflige des dégâts continus sur les cibles et détruit aussi bien les champions ennemis " +
    "que les structures (tourelles, inhibiteurs, Nexus)."
  ),
  p(
    "L'ADC joue en lane bot (couloir inférieur) accompagné d'un support. Le support protège " +
    "l'ADC pendant la phase de laning — la phase de montée en puissance en début de partie — " +
    "pour lui permettre de farmer tranquillement et d'accumuler de l'or."
  ),

  h2("Pourquoi jouer ADC ?"),
  p("Ce rôle attire pour plusieurs raisons :"),
  ul(
    "Tu infliges des dégâts de façon constante tout au long de la partie",
    "En fin de partie, un bon ADC peut détruire une équipe entière en quelques secondes",
    "Tu peux souvent décider seul de l'issue d'un combat ou d'un siège",
    "Le farming et le positionnement sont des compétences gratifiantes à maîtriser",
    "Le roster d'ADC est varié : snipers, hypercarries, mages marksman…"
  ),

  h2("Les stats clés de l'ADC"),
  p(
    "Contrairement aux tanks ou aux mages, l'ADC dépend de stats très spécifiques pour être efficace :"
  ),
  h3("Attack Speed (Vitesse d'attaque)"),
  p(
    "La vitesse d'attaque détermine combien de fois par seconde tu frappes. Plus elle est haute, " +
    "plus tes dégâts par seconde (DPS) sont élevés. C'est la stat principale des ADC en mid et late game."
  ),
  h3("Critical Strike (Coup critique)"),
  p(
    "Les coups critiques multiplient tes dégâts de base (généralement x1.75). La plupart des builds ADC " +
    "visent 100% de chance de crit en milieu de partie via des items comme Infinity Edge ou Galeforce."
  ),
  h3("Attack Damage (AD)"),
  p(
    "L'AD augmente directement tes dégâts par attaque. Combiné au crit et à l'attack speed, " +
    "c'est le trio qui définit la puissance d'un ADC."
  ),
  h3("Armor Penetration (Pénétration d'armure)"),
  p(
    "En fin de partie, les ennemis ont beaucoup d'armure. La pénétration (Lord Dominik's Regards, " +
    "Mortal Reminder) permet de maintenir des dégâts élevés même contre les tanks."
  ),

  h2("La phase de laning : survivre pour dominer"),
  p(
    "Le laning est la phase la plus difficile pour un ADC. Tu es fragile, tu as peu de dégâts " +
    "comparé à d'autres rôles, et tu dépends de ton support. Voici les priorités :"
  ),
  h3("Le farming (CS)"),
  p(
    "Chaque minion tué rapporte de l'or. L'objectif est de last-hit le plus de minions possible " +
    "— c'est-à-dire porter le coup fatal pour récupérer l'or. Un bon ADC vise 8 à 10 CS par minute. " +
    "À 10 minutes, tu dois avoir entre 80 et 100 CS minimum."
  ),
  h3("Le trading"),
  p(
    "Un trade c'est un échange de dégâts avec l'ennemi. Les ADC tradent bien quand : " +
    "leur support engage, ils ont plus de vie que l'ennemi, ou ils ont un avantage de niveaux. " +
    "En dehors de ces conditions, évite les fights et farm tranquillement."
  ),
  h3("Se positionner derrière son support"),
  p(
    "Ton support est ton bouclier humain. Reste derrière lui pour éviter les engages ennemis. " +
    "Si l'ennemi passe ton support pour t'atteindre, c'est généralement que tu t'es mal positionné."
  ),

  h2("Le positionnement en teamfight"),
  p(
    "En teamfight, le positionnement est la compétence n°1 de l'ADC. La règle d'or : " +
    "rester le plus loin possible des ennemis tout en continuant à attaquer."
  ),
  ul(
    "Ne fonce jamais en première ligne — c'est le job des tanks",
    "Attaque la cible la plus proche accessible sans risque",
    "Kite (recule en attaquant) pour maintenir la distance avec tes adversaires",
    "Utilise les décors pour te protéger des skillshots",
    "Surveille les assassins ennemis — ils cherchent à te one-shot"
  ),
  p(
    "Le kiting est une mécanique fondamentale : tu alternes entre une attaque et un mouvement " +
    "pour avancer ou reculer tout en frappant. Plus ton attack speed est élevé, plus le kiting est efficace."
  ),

  h2("Les ADC recommandés pour débuter"),
  p(
    "Certains ADC pardonnent plus les erreurs que d'autres. Voici les meilleurs points d'entrée :"
  ),
  ul(
    "Ashe — le kit le plus simple du jeu, flèche de ralentissement, ultime de stun à longue portée. Idéale pour apprendre le rôle.",
    "Miss Fortune — forte en lane, combo Q/W facile à comprendre, excellent pour apprendre à trader.",
    "Jinx — hypercary classique. Fragile mais dévastatrice quand elle est en avance. Bonne pour apprendre le late game.",
    "Sivir — résiliente, bonne mobilité avec son ultime, facile à prendre en main.",
    "Jhin — cadence d'attaque fixe, gameplay très satisfaisant, enseigne la précision et le positionnement."
  ),

  h2("Les erreurs classiques à éviter"),
  ul(
    "Mourir pour rien en early game — une mort = environ 40 CS perdus",
    "Ne pas farm pendant les phases calmes (entre les fights)",
    "Se battre trop près des ennemis — tu dois toujours garder tes distances",
    "Fokus le tank ennemi au lieu du carry — toujours attaquer la cible la plus menaçante accessible",
    "Oublier de recall pour acheter des items — les items sont ta puissance"
  ),

  h2("Par où commencer ?"),
  p(
    "Commence par Ashe ou Miss Fortune en mode Normal. Vise 80 CS à 10 minutes. " +
    "Ne te préoccupe pas des kills dans un premier temps — le farming, la survie " +
    "et le positionnement sont bien plus importants pour progresser."
  ),
  p(
    "Tu ne sais pas encore quel ADC correspond à ton style de jeu ? " +
    "Le quiz RiftMatch analyse ta personnalité et ton niveau pour te recommander " +
    "les champions qui te correspondent le mieux."
  ),
]

export const up: MigrationModule['up'] = async (payload) => {
  const existing = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'guide-adc-league-of-legends' } },
  })
  if (existing.docs.length > 0) {
    console.log('  → Page déjà présente, skip.')
    return
  }

  await payload.create({
    collection: 'pages',
    data: {
      title: "ADC : le guide complet pour débuter et progresser",
      slug: 'guide-adc-league-of-legends',
      template: 'guide',
      seo: {
        description:
          "Tout savoir sur le rôle ADC dans League of Legends : définition, mécaniques, " +
          "phase de laning, positionnement en teamfight et meilleurs champions pour débuter.",
      },
      content,
    } as any,
  })
}
