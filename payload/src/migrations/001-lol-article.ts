import type { MigrationModule } from './runner'

export const id = '001-lol-article'
export const description = "Crée la page \"Qu'est-ce que League of Legends ?\""

// ── Helpers Slate ─────────────────────────────────────────────────────────

const p = (text: string) => ({ children: [{ text }] })

const h2 = (text: string) => ({ type: 'h2', children: [{ text }] })

const ul = (...items: string[]) => ({
  type: 'ul',
  children: items.map(item => ({
    type: 'li',
    children: [{ text: item }],
  })),
})

// ── Contenu de l'article ──────────────────────────────────────────────────

const content = [
  p(
    "League of Legends — ou simplement LoL — est l'un des jeux vidéo les plus joués au monde. " +
    "Lancé en 2009 par Riot Games, il rassemble chaque mois plus de 150 millions de joueurs inscrits " +
    "et des dizaines de millions de parties quotidiennes. Mais qu'est-ce qui le rend si captivant ?"
  ),

  h2("Un MOBA : c'est quoi ?"),
  p(
    "League of Legends appartient au genre MOBA (Multiplayer Online Battle Arena). " +
    "Le principe est simple : deux équipes de 5 joueurs s'affrontent sur une carte appelée " +
    "la Faille de l'Invocateur. L'objectif est de détruire le Nexus adverse — la base centrale " +
    "de l'équipe ennemie — avant que celle-ci ne détruise le vôtre."
  ),
  p(
    "Chaque partie dure en moyenne 30 à 40 minutes. La carte est divisée en trois couloirs " +
    "(top, mid, bot) reliés par une jungle, un espace boisé rempli de monstres neutres que " +
    "les joueurs peuvent éliminer pour gagner de la puissance."
  ),

  h2("Les champions : le cœur du jeu"),
  p(
    "Chaque joueur choisit un champion avant la partie — un personnage unique avec ses propres " +
    "capacités, son style de jeu et son histoire dans l'univers de Runeterra. " +
    "En 2024, le roster compte plus de 160 champions jouables."
  ),
  p("Ces champions se divisent en grandes classes :"),
  ul(
    "Tanks — robustes, ils encaissent les dégâts pour protéger l'équipe",
    "Assassins — rapides et mortels, ils éliminent les cibles prioritaires",
    "Mages — puissants à distance, ils infligent d'énormes dégâts magiques",
    "Tireurs (ADC) — fragiles mais dévastateurs sur la durée",
    "Supports — ils protègent, soignent ou contrôlent les ennemis",
    "Combattants (Fighters) — un équilibre entre dégâts et résistance"
  ),

  h2("Les rôles sur la Faille de l'Invocateur"),
  p("En jeu compétitif, chaque membre de l'équipe occupe un rôle précis :"),
  ul(
    "Top — le couloir supérieur, souvent joué par des champions résistants",
    "Jungle — se déplace partout sur la carte, contrôle les objectifs neutres",
    "Mid — le couloir central, souvent des mages ou assassins à fort impact",
    "Bot (ADC) — couloir inférieur, tireur qui monte en puissance en fin de partie",
    "Support — accompagne l'ADC, protège l'équipe et place des wards de vision"
  ),

  h2("Pourquoi autant de joueurs ?"),
  p(
    "La longévité de LoL s'explique par plusieurs facteurs. D'abord, " +
    "le jeu est gratuit — tous les champions peuvent être débloqués en jouant. " +
    "Ensuite, la profondeur stratégique est quasi infinie : maîtriser un champion " +
    "peut prendre des centaines d'heures, et la méta évolue à chaque patch."
  ),
  p(
    "L'aspect compétitif est aussi central. Le classement par rang (de Fer à Challenger) " +
    "motive des millions de joueurs à progresser. Et les championnats du monde, les Worlds, " +
    "rassemblent chaque année des dizaines de millions de spectateurs."
  ),

  h2("L'univers de Runeterra"),
  p(
    "Au-delà du gameplay, League of Legends s'est construit un univers narratif riche. " +
    "Chaque champion a son histoire, ses relations avec les autres personnages, " +
    "et s'inscrit dans une région du monde : Demacia, Noxus, Ionia, Zaun, les Îles Obscures…"
  ),
  p(
    "Cet univers a donné naissance à de nombreux projets : la série animée Arcane sur Netflix, " +
    "des jeux dérivés comme Legends of Runeterra ou Teamfight Tactics, " +
    "et une musique originale publiée régulièrement."
  ),

  h2("Par où commencer ?"),
  p(
    "Si tu découvres LoL, commence par le mode Tutoriel disponible dans le jeu. " +
    "Les premières parties sont protégées contre les joueurs expérimentés " +
    "le temps de prendre tes marques. Choisis un champion simple — comme Garen, " +
    "Ashe ou Annie — pour apprendre les bases sans te surcharger."
  ),
  p(
    "Et si tu ne sais pas encore quel champion te correspond, " +
    "le quiz RiftMatch est là pour ça : quelques questions sur ton style de jeu " +
    "et ta personnalité, et tu découvres les champions faits pour toi."
  ),
]

// ── Migration ──────────────────────────────────────────────────────────────

export const up: MigrationModule['up'] = async (payload) => {
  const existing = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'qu-est-ce-que-league-of-legends' } },
  })

  if (existing.docs.length > 0) {
    console.log('  → Page déjà présente, skip.')
    return
  }

  await payload.create({
    collection: 'pages',
    data: {
      title: "Qu'est-ce que League of Legends ?",
      slug: 'qu-est-ce-que-league-of-legends',
      seo: {
        description:
          "Découvrez League of Legends : le MOBA le plus joué au monde, ses champions, " +
          "ses mécaniques de jeu et pourquoi des millions de joueurs y reviennent chaque jour.",
      },
      content,
    },
  })
}
