import type { MigrationModule } from './runner'

export const id = '011-guides-roles-fr'
export const description = 'Crée 4 guides de rôles FR : Support, Top Lane, Jungle, Mid Lane'

const p = (text: string) => ({ children: [{ text }] })
const h2 = (text: string) => ({ type: 'h2', children: [{ text }] })
const h3 = (text: string) => ({ type: 'h3', children: [{ text }] })
const ul = (...items: string[]) => ({
  type: 'ul',
  children: items.map(item => ({ type: 'li', children: [{ text: item }] })),
})

// ---------------------------------------------------------------------------
// Guide 1 — Support
// ---------------------------------------------------------------------------

const contentSupport = [
  p(
    "Le support est l'un des rôles les plus polyvalents et les plus impactants de League of Legends. " +
    "Souvent sous-estimé par les débutants, il est en réalité le pilier de l'équipe : c'est lui qui " +
    "initie les combats, protège ses coéquipiers et contrôle la vision sur toute la carte. " +
    "Bien jouer support, c'est apprendre à lire le jeu et à s'adapter en permanence."
  ),

  h2("C'est quoi le support ?"),
  p(
    "Le support joue en bot lane aux côtés de l'ADC. Son rôle principal en début de partie est " +
    "de protéger et d'aider son ADC à farmer en toute sécurité, tout en cherchant des opportunités " +
    "pour peser sur la lane adverse. Contrairement aux autres rôles, le support ne farm pas les " +
    "minions — il génère de l'or via un objet de soutien dédié et grâce aux assists."
  ),
  p(
    "Au fil de la partie, le support étend son influence à toute la carte : il pose des wards, " +
    "roam vers d'autres lanes, participe aux objectifs et guide les teamfights. C'est un rôle " +
    "qui demande une excellente lecture du jeu et une communication constante."
  ),

  h2("Les types de supports"),
  h3("Le support engage"),
  p(
    "Il initie les combats et force les fights favorables pour son équipe. " +
    "Robuste et difficile à ignorer, il plonge dans la mêlée pour créer des situations " +
    "de supériorité numérique. Exemples : Leona, Nautilus, Blitzcrank."
  ),
  h3("Le support peel"),
  p(
    "Il protège son ADC ou ses carries en éliminant les menaces qui s'en approchent. " +
    "Il utilise ses CC et ses ralentissements pour empêcher les assassins d'accéder à ses alliés. " +
    "Exemples : Janna, Lulu, Thresh (hybride)."
  ),
  h3("Le support poke"),
  p(
    "Il harcèle continuellement l'ennemi à distance pour le forcer à recall ou à jouer prudemment. " +
    "Efficace pour établir une dominance de lane sans prendre de risques inutiles. " +
    "Exemples : Lux, Zyra, Brand."
  ),
  h3("L'enchanteur"),
  p(
    "Il amplifie la puissance de ses alliés grâce à des soins, des boucliers et des buffs. " +
    "Il ne cherche pas à initier mais à rendre ses carries quasi imbattables en fight. " +
    "Exemples : Soraka, Nami, Karma."
  ),

  h2("Les wards et la vision"),
  p(
    "Contrôler la vision, c'est contrôler la carte. En tant que support, poser et détruire des wards " +
    "est l'une de tes responsabilités principales tout au long de la partie."
  ),
  ul(
    "Pose des Vision Wards (wards roses) dans les buissons clés de ta lane dès le niveau 1",
    "Achète des Control Wards à chaque recall — c'est un investissement rentable",
    "Utilise ton Stealth Ward (ward jaune) pour couvrir les angles d'approche jungle",
    "En mid game, ward les objectifs (Dragon, Baron) avant qu'ils soient disponibles",
    "Détruis les wards ennemies pour priver l'adversaire d'informations"
  ),

  h2("La phase de laning"),
  p(
    "En bot lane, ton rôle est de créer les conditions idéales pour que ton ADC farm efficacement. " +
    "Harcèle les ennemis quand c'est sûr, engage quand ton ADC est en position, et protège-le " +
    "en priorité dès qu'une menace se présente."
  ),
  ul(
    "Reste entre l'ennemi et ton ADC pour absorber les dégâts ou les CC",
    "Engage seulement quand ton ADC est à portée pour suivre le combat",
    "Gère tes ressources (mana, cooldowns) — ne gaspille pas tes sorts",
    "Communique avec ton ADC via les pings avant chaque engage",
    "Recall dès que tu as assez d'or pour tes premiers items clés"
  ),

  h2("Mid et late game"),
  p(
    "Une fois la phase de laning terminée, le support doit étendre son influence à toute la carte. " +
    "Rejoins ton jungleur pour les objectifs, roam pour aider les lanes en difficulté et " +
    "continue de maintenir la vision sur les zones stratégiques."
  ),
  p(
    "En teamfight, positionne-toi en fonction de ton archétype : en avant si tu es engage, " +
    "en arrière auprès de tes carries si tu es enchanteur ou peel. Ta survie est essentielle — " +
    "un support mort ne peut pas aider son équipe."
  ),

  h2("Champions recommandés pour débuter"),
  p(
    "Certains supports sont plus accessibles que d'autres pour apprendre le rôle. " +
    "Voici les meilleurs points d'entrée :"
  ),
  ul(
    "Soraka — enchanteur pur, soins puissants, très simple à prendre en main. Parfait pour comprendre le rôle de gardien.",
    "Lux — poke et CC à distance, bonne pour apprendre à lander des skillshots sans s'exposer.",
    "Blitzcrank — one-trick fun, son crochet est game-changing et enseigne l'importance des engages.",
    "Leona — tank engage solide, kit intuitif, idéale pour apprendre à initier des combats.",
    "Janna — excellente pour apprendre le peel et la gestion des positions ennemies."
  ),

  h2("Erreurs classiques à éviter"),
  ul(
    "Se retrouver trop loin de son ADC — tu ne peux pas le protéger si tu es à l'autre bout de la lane",
    "Engage sans vérifier que ton ADC est en position pour suivre",
    "Oublier de poser des wards — la vision est ta responsabilité principale",
    "Tenter de farm les minions — chaque minion volé à ton ADC lui coûte de l'or",
    "Rester en bot lane toute la partie — roam et aide tes autres lanes en mid game",
    "Utiliser tous tes sorts de protection en préventif — garde-les pour les moments critiques"
  ),

  h2("Par où commencer ?"),
  p(
    "Commence par Soraka ou Lux en mode Normal pour maîtriser les bases du rôle. " +
    "Concentre-toi sur la pose de wards, la protection de ton ADC et tes placements en teamfight. " +
    "Ne cherche pas à faire des plays spectaculaires — jouer safe et utile est déjà très efficace."
  ),
  p(
    "Tu ne sais pas encore quel support correspond à ton style de jeu ? " +
    "Le quiz RiftMatch analyse ta personnalité et ton niveau pour te recommander " +
    "les champions qui te correspondent le mieux."
  ),
]

// ---------------------------------------------------------------------------
// Guide 2 — Top Lane
// ---------------------------------------------------------------------------

const contentTop = [
  p(
    "La top lane est le couloir supérieur de la carte, souvent surnommé « l'île » des joueurs solitaires. " +
    "C'est une lane longue, isolée du reste de l'équipe et qui favorise les duellistes — ces champions " +
    "capables de tenir tête à leur adversaire pendant de longues minutes sans aide extérieure. " +
    "Robustesse, gestion de wave et autonomie sont les maîtres-mots du top laner."
  ),

  h2("C'est quoi la top lane ?"),
  p(
    "La top lane est la voie du haut, séparée du reste de la carte par la jungle. Le top laner " +
    "y joue quasi-seul pendant toute la phase de laning, avec peu d'interactions avec son équipe. " +
    "Ce relatif isolement en fait un rôle autonome : tu dois être capable de gagner ta lane " +
    "par toi-même et de créer de la pression sans attendre l'aide de ton jungleur."
  ),
  p(
    "En échange de cette solitude, le top laner a souvent un impact fort en fin de partie : " +
    "un bon top en avance peut diviser l'équipe adverse entre défendre une tour et faire face " +
    "au reste de l'équipe. C'est le principe du split push."
  ),

  h2("Les archétypes du top laner"),
  h3("Le tank"),
  p(
    "Le tank absorbe les dégâts pour son équipe, initie les teamfights et protège ses carries. " +
    "Il est difficile à tuer et reste pertinent même sans gros avantage en or. " +
    "Exemples : Malphite, Ornn, Cho'Gath."
  ),
  h3("Le fighter (bruiser)"),
  p(
    "Mi-tank mi-carry, le fighter combine robustesse et dégâts corrects. " +
    "Il peut autant faire le duel que tenir un front en teamfight. " +
    "Exemples : Darius, Sett, Garen."
  ),
  h3("Le split pusher"),
  p(
    "Son objectif est de pousser les tourelles adverses en solo pour forcer l'équipe ennemie " +
    "à envoyer plusieurs joueurs le stopper, libérant ainsi de la place pour son équipe. " +
    "Exemples : Nasus (late), Fiora, Tryndamere."
  ),

  h2("La gestion de wave"),
  p(
    "La wave management est la compétence la plus importante en top lane. Savoir quand farmer, " +
    "quand pousser et quand freezer la wave détermine en grande partie le résultat de ta lane."
  ),
  ul(
    "Freeze : maintenir la wave près de ta tourelle pour forcer l'ennemi à s'exposer et farmer sous pression",
    "Slow push : laisser la wave grossir lentement pour créer une grosse vague avant un recall ou un fight",
    "Fast push : vider la wave rapidement pour aller aider en jungle ou récupérer un objectif",
    "Ne laisse jamais mourir des minions sous ta tourelle — chaque CS compte",
    "Observe la wave ennemie : si elle est plus grosse, elle va bientôt pousser vers toi"
  ),

  h2("Le Téléport"),
  p(
    "La plupart des top laners emportent le sort Téléport (TP). C'est un outil crucial qui " +
    "compense ton isolement en te permettant de rejoindre rapidement tes coéquipiers ou " +
    "de revenir en lane après un recall sans perdre de CS."
  ),
  ul(
    "Utilise le TP pour rejoindre un fight en bot lane si tu as bien farm ta lane",
    "TP sur une ward ennemie pour surprendre l'adversaire par derrière",
    "Ne gaspille pas ton TP pour rentrer en lane après un recall standard — marche si la base est proche",
    "En late game, le TP te permet de participer à tous les objectifs sans quitter ta lane"
  ),

  h2("Le split push"),
  p(
    "Le split push est une stratégie avancée qui consiste à pousser seul une lane pendant que " +
    "le reste de ton équipe menace un objectif ailleurs. L'ennemi est forcé de diviser ses forces."
  ),
  p(
    "Pour split pusher efficacement, tu dois être suffisamment fort pour battre les champions " +
    "envoyés contre toi en 1v1, ou du moins survivre assez longtemps pour que ton équipe " +
    "exploite l'avantage numérique de l'autre côté de la carte."
  ),

  h2("Mid et late game"),
  p(
    "En mid game, rejoins ton équipe pour les objectifs majeurs (Dragon, Baron, tourelles de milieu). " +
    "Utilise ton Téléport pour ne rater aucun fight important. En late game, un tank ou un fighter " +
    "en avance peut porter son équipe en initiant les teamfights ou en tankant les dégâts ennemis."
  ),

  h2("Champions recommandés pour débuter"),
  p(
    "Ces champions pardonnent les erreurs de débutants et permettent d'apprendre les bases du rôle :"
  ),
  ul(
    "Garen — kit ultra-simple, très résistant, aucun mana, excellent pour apprendre le dueling et la gestion de wave.",
    "Malphite — tank solide, ultime d'initiation téléphonée mais très efficace. Bon pour apprendre l'engage.",
    "Darius — fighter dominant en duel, enseigne l'importance de la gestion de distance et des trades.",
    "Nasus — champion de late game, apprend à farmer avec patience et à gérer la wave longtemps.",
    "Sett — bruiser intuitif, très résistant, bonne intro au rôle de fighter en teamfight."
  ),

  h2("Erreurs classiques à éviter"),
  ul(
    "Aller chercher des kills inutiles en perdant des CS — le farm est plus rentable que la plupart des kills",
    "Ne pas utiliser le TP intelligemment — c'est ton principal outil d'impact sur la carte",
    "Se téléporter en base pour revenir en lane alors qu'on pourrait simplement marcher",
    "Rester en top lane en mid/late game quand l'équipe se bat pour Baron — joins le fight",
    "Négliger la gestion de wave — ne pas freeze ni slow push selon la situation"
  ),

  h2("Par où commencer ?"),
  p(
    "Commence par Garen ou Malphite pour apprivoiser la top lane. Vise 80 CS à 10 minutes, " +
    "concentre-toi sur ta gestion de wave et apprends à utiliser ton Téléport au bon moment. " +
    "La top lane récompense la patience et la régularité bien plus que les plays spectaculaires."
  ),
  p(
    "Tu ne sais pas encore quel champion top correspond à ta façon de jouer ? " +
    "Le quiz RiftMatch analyse ta personnalité et ton niveau pour te recommander " +
    "les champions qui te correspondent le mieux."
  ),
]

// ---------------------------------------------------------------------------
// Guide 3 — Jungle
// ---------------------------------------------------------------------------

const contentJungle = [
  p(
    "La jungle est probablement le rôle le plus complexe et le plus impactant de League of Legends. " +
    "Le jungleur ne joue pas dans une lane — il évolue dans l'espace entre les couloirs, " +
    "tue des monstres pour gagner de l'or et de l'expérience, et intervient dans les lanes " +
    "pour renverser le cours des duels. Un bon jungleur peut décider du résultat de toute une partie."
  ),

  h2("C'est quoi la jungle ?"),
  p(
    "Le jungleur commence la partie dans la jungle — la zone boisée qui sépare les trois lanes. " +
    "Il y trouve des camps de monstres neutres qu'il tue pour accumuler or et expérience, " +
    "sans avoir à se confronter directement à un ennemi en lane. " +
    "Sa liberté de mouvement est sa force : il peut apparaître n'importe où sur la carte."
  ),
  p(
    "En contrepartie, le jungleur doit gérer simultanément son farm de jungle, " +
    "le timing des objectifs, les ganks et la vision. " +
    "C'est un rôle qui demande une forte capacité à lire le jeu et à prioriser ses actions."
  ),

  h2("Les camps et le clear"),
  p(
    "La jungle est divisée en plusieurs camps de monstres que tu dois farmer régulièrement. " +
    "Apprendre les timers de respawn et l'ordre de clear optimal est fondamental pour rester efficace."
  ),
  ul(
    "Gromp, Loups, Oiseaux, Groles — petits camps, rapides à tuer, à farm régulièrement",
    "Golem et Murène — camps buff (rouge et bleu), donnent des effets puissants pendant quelques minutes",
    "Le buff bleu (Golem de pierre) réduit les cooldowns et regenere le mana — priorité pour les mages",
    "Le buff rouge (Murène des anciens) ralentit et inflige des dégâts supplémentaires — bon pour les fighters",
    "Commence par le camp qui t'aide le plus selon ton champion, puis enchaîne les autres",
    "Farm les camps sans objectif immédiat : ne rester jamais inactif en jungle"
  ),

  h2("Les objectifs : Scuttler, Dragon, Baron"),
  h3("Le Crabe des Rifts (Scuttler)"),
  p(
    "Le Scuttler apparaît dans chaque rivière toutes les 3,5 minutes. Le tuer offre de l'or, " +
    "de l'XP et un terrain de vision précieux avec un Oracle Lens temporaire. " +
    "C'est souvent le premier objectif à contester après tes premiers camps."
  ),
  h3("Le Dragon"),
  p(
    "Le Dragon spawn dans la rivière bas à 5 minutes et respawn toutes les 5 minutes après sa mort. " +
    "Chaque Dragon tué donne un buff permanent à toute ton équipe. " +
    "Après 4 drakes, l'équipe obtient le Dragon de l'Âme — un avantage souvent décisif."
  ),
  h3("Le Baron Nashor"),
  p(
    "Le Baron apparaît à 20 minutes dans la rivière haute. Le tuer est l'un des objectifs les plus " +
    "puissants du jeu : il offre le buff Baron à toute l'équipe, boostant les minions et les dégâts. " +
    "Ne tente le Baron qu'avec un avantage numérique ou quand l'équipe adverse est affaiblie."
  ),

  h2("Les ganks"),
  p(
    "Un gank est une intervention en lane pour aider un coéquipier à tuer ou à expulser son adversaire. " +
    "C'est l'outil principal du jungleur pour créer des avantages pour son équipe."
  ),
  ul(
    "Ganke les lanes où ton coéquipier a poussé la wave vers la tourelle ennemie — l'ennemi sera loin de sa tour",
    "Viens par les flancs ou par derrière pour couper la retraite de l'ennemi",
      "Communique avec tes coéquipiers via les pings avant de ganker",
    "Évite de ganker une lane sous sa propre tourelle — l'ennemi peut facilement se réfugier",
    "Un gank raté coûte du temps — si l'ennemi est trop défensif, retire-toi et farm"
  ),

  h2("La vision et le contrôle de map"),
  p(
    "Le jungleur a accès à tout l'espace entre les lanes, ce qui lui donne un rôle crucial " +
    "dans la gestion de la vision. Poser des wards dans la jungle ennemie te permet de traquer " +
    "le jungleur adverse et d'anticiper ses mouvements."
  ),
  ul(
    "Ward la jungle adverse pour voir les camps que le jungleur ennemi va farmer",
    "Détruis les wards ennemies pour préparer un gank à l'aveugle",
    "Contrôle les buissons de rivière avant de contester le Dragon ou le Baron",
    "Achète des Control Wards à chaque recall — elles sont essentielles en late game"
  ),

  h2("Les types de jungleurs"),
  p(
    "Tous les jungleurs n'ont pas le même style de jeu. Selon ta façon de jouer, certains " +
    "profils te correspondront mieux que d'autres."
  ),
  ul(
    "Jungleur farm (farmer jungle) : priorise le clear et monte en puissance avant d'intervenir",
    "Jungleur gank : compense un clear plus lent par des ganks fréquents et agressifs",
    "Jungleur objectif : maximise le contrôle des Drakes et du Baron plutôt que les kills",
    "Jungleur carry : cherche à prendre de l'avance et à 1v9 la partie en late game"
  ),

  h2("Champions recommandés pour débuter"),
  p(
    "Ces jungleurs sont accessibles, robustes et pardonnent les erreurs de timing des débutants :"
  ),
  ul(
    "Warwick — regeneration innée, excellent pour apprendre le clear, fort en duel et en gank sur cibles blessées.",
    "Amumu — tank engage, camp clear simple, ultime dévastateur en teamfight pour créer des opportunités.",
    "Master Yi — carry jungle hyper simple, enseigne à farm efficacement et à entrer au bon moment.",
    "Hecarim — mobilité importante, bon clear, permet d'apprendre les ganks rapides depuis des angles inattendus.",
    "Vi — engage fiable, CC puissant, enseigne à cibler une priorité et à intervenir en combat."
  ),

  h2("Erreurs classiques à éviter"),
  ul(
    "Rester inactif dans sa base après un gank raté — retourne farm immédiatement",
    "Ganker une lane sans vision — tu risques de te faire contre-ganker",
    "Négliger les objectifs au profit des kills — Dragon et Baron gagnent des parties, les kills non",
    "Farm uniquement sans jamais ganker — l'or de jungle seul ne suffit pas",
    "Laisser mourir des camps sans les farmer — chaque camp non tué est de l'or et de l'XP perdus",
    "Tenter le Baron avec toute l'équipe ennemie en vie — c'est souvent un piège fatal"
  ),

  h2("Par où commencer ?"),
  p(
    "Commence par Warwick ou Amumu pour apprendre les bases. Concentre-toi sur un clear propre " +
    "de tes 6 premiers camps, puis cherche un gank simple sur la lane la plus poussée. " +
    "La jungle demande de la pratique — ne te décourage pas si tes premières parties sont compliquées."
  ),
  p(
    "Tu ne sais pas encore quel jungleur correspond à ton style de jeu ? " +
    "Le quiz RiftMatch analyse ta personnalité et ton niveau pour te recommander " +
    "les champions qui te correspondent le mieux."
  ),
]

// ---------------------------------------------------------------------------
// Guide 4 — Mid Lane
// ---------------------------------------------------------------------------

const contentMid = [
  p(
    "La mid lane est la voie du milieu, et elle est souvent considérée comme la plus influente " +
    "de toutes les lanes. Courte, centrale, elle permet au mid laner de rejoindre rapidement " +
    "n'importe quelle zone de la carte. Ce rôle combine exigences individuelles élevées — " +
    "duels, gestion de wave, mécanique — et impact collectif majeur à travers le roaming."
  ),

  h2("C'est quoi la mid lane ?"),
  p(
    "Le mid laner occupe la voie centrale, la plus courte des trois lanes. " +
    "Sa position lui donne un accès rapide à la bot lane, à la top lane et aux deux côtés de la rivière, " +
    "ce qui en fait le joueur le plus mobile de l'équipe avec le jungleur. " +
    "Cette centralité implique une responsabilité particulière : peser sur la carte au-delà de sa propre lane."
  ),
  p(
    "C'est aussi une lane très compétitive, souvent peuplée de champions mécaniquement exigeants. " +
    "Mages, assassins, fighters — la diversité des archétypes en mid est plus grande que partout ailleurs, " +
    "ce qui en fait un rôle stimulant pour ceux qui aiment apprendre de nouveaux champions."
  ),

  h2("Les archétypes mid"),
  h3("Le mage"),
  p(
    "Le mage inflige de gros dégâts magiques via ses sorts, souvent en burst ou en zone. " +
    "Il est efficace en teamfight et peut contrôler des zones entières avec ses CC. " +
    "Exemples : Lux, Veigar, Orianna."
  ),
  h3("L'assassin"),
  p(
    "L'assassin vise à éliminer en un instant les cibles prioritaires ennemies (ADC, support fragile). " +
    "Il est très mobile et fait des dégâts énormes mais demande beaucoup de précision dans son exécution. " +
    "Exemples : Zed, Talon, Akali."
  ),
  h3("Le fighter mid"),
  p(
    "Moins classique, le fighter mid apporte de la robustesse et des dégâts soutenus. " +
    "Il peut souvent dueler la plupart des mid laners et s'impose facilement en split push. " +
    "Exemples : Irelia, Sylas, Pantheon."
  ),
  h3("Le mid supportif"),
  p(
    "Certains champions mid jouent un rôle quasi-support : contrôle de zones, peel et buffs. " +
    "Ils sacrifient une partie du carry pour apporter de l'utilité à toute l'équipe. " +
    "Exemples : Galio, Twisted Fate, Zilean."
  ),

  h2("La gestion de wave en mid"),
  p(
    "En mid lane, la gestion de wave est encore plus stratégique qu'ailleurs car la lane est courte " +
    "et les two-ways (passages vers les deux côtés) rendent les dives et les roams plus rapides. " +
    "Savoir quand pousser vite ou freezer change complètement la dynamique de la lane."
  ),
  ul(
    "Push la wave avant de roamer pour ne pas perdre de CS pendant ton déplacement",
    "Freeze si tu es sous pression pour nier le farm à l'ennemi près de ta tourelle",
    "Slow push pour créer une grosse vague avant de partir contester un objectif",
    "En mid, perdre 10 secondes à tuer ta wave avant de partir peut faire la différence sur un gank",
    "Ne quitte jamais ta lane si tu as une grosse wave à perdre sous ta tour"
  ),

  h2("Le roaming : créer de la pression"),
  p(
    "Le roaming — quitter sa lane pour aider une autre — est la compétence signature du mid laner. " +
    "Ta position centrale te permet de rejoindre bot lane ou top lane en quelques secondes, " +
    "créant ainsi des situations de supériorité numérique dans d'autres zones."
  ),
  ul(
    "Roame vers la lane qui a le plus de potentiel de kill ou de tour à prendre",
    "Préviens ton coéquipier via un ping avant de roamer pour qu'il soit prêt",
    "Toujours push ta wave avant de partir — sinon l'ennemi mid récupère plus que ce que tu gagnes",
    "Passe par la rivière ou la jungle pour roamer sans te faire repérer en lane",
    "Un roam réussi = kill ou flash ennemi, une tour ou un objectif. Si c'est raté, retourne en lane"
  ),

  h2("L'impact sur la carte"),
  p(
    "Au-delà du roaming, le mid laner influence la carte via la pression permanente qu'il exerce. " +
    "Un mid laner en avance force l'équipe adverse à placer des ressources pour le contenir, " +
    "libérant des opportunités pour ses coéquipiers."
  ),
  p(
    "Participe aux combats pour Dragon et Baron dès que tu as push ta wave. " +
    "Ta présence sur ces objectifs peut être décisive, et les rater peut coûter la partie " +
    "même si tu domines ta lane en 1v1."
  ),

  h2("Mid et late game"),
  p(
    "En late game, la mid lane perd de son importance individuelle au profit du jeu collectif. " +
    "Reste avec ton équipe, sécurise les objectifs et concentre-toi sur les cibles à éliminer " +
    "en priorité en teamfight. Un mage ou un assassin en avance peut carry une partie à lui seul " +
    "s'il sait cibler les bonnes cibles."
  ),

  h2("Champions recommandés pour débuter"),
  p(
    "Ces champions mid sont accessibles et permettent d'apprendre les fondamentaux du rôle " +
    "sans être submergé par la complexité mécanique :"
  ),
  ul(
    "Annie — mage burst le plus simple du jeu, enseigne les bases du positionnement et de l'utilisation des sorts.",
    "Lux — portée importante, bon contrôle de lane à distance, ultime à longue portée très satisfaisant.",
    "Veigar — stack AP au fil du temps, apprend à farm les sorts et à jouer patient pour un late game dévastateur.",
    "Vex — mage simple avec CC sur sa peur, très bon contre les champions mobiles, enseigne le jeu défensif.",
    "Malzahar — contrôle fort, lane simple, bonne intro au rôle de mage avec un push de wave efficace."
  ),

  h2("Erreurs classiques à éviter"),
  ul(
    "Roamer sans avoir push sa wave — tu perds du CS et l'ennemi mid en profite",
    "Ne jamais quitter sa lane — le mid laner doit impacter la carte, pas juste gagner son 1v1",
    "Mourir inutilement en essayant de faire des kills solo — une mort = pression perdue sur toute la carte",
    "Ignorer les objectifs (Dragon, Baron) pour continuer à farm",
    "Attaquer en première ligne en teamfight — le mage ou l'assassin doit rester en retrait",
    "Négliger la vision de rivière — tu dois savoir où se trouve le jungleur ennemi avant de te placer"
  ),

  h2("Par où commencer ?"),
  p(
    "Commence par Annie ou Lux en mode Normal. Concentre-toi sur ta gestion de wave, " +
    "apprends à push avant de roamer et essaie de rejoindre au moins un combat sur une autre lane " +
    "par partie. La mid lane est exigeante mais extrêmement gratifiante une fois qu'on en maîtrise les bases."
  ),
  p(
    "Tu ne sais pas encore quel champion mid correspond à ton style de jeu ? " +
    "Le quiz RiftMatch analyse ta personnalité et ton niveau pour te recommander " +
    "les champions qui te correspondent le mieux."
  ),
]

// ---------------------------------------------------------------------------
// Migration
// ---------------------------------------------------------------------------

export const up: MigrationModule['up'] = async (payload) => {
  // --- Guide Support ---
  const existingSupport = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'guide-support-league-of-legends' }, locale: { equals: 'fr' } },
  })
  if (existingSupport.docs.length > 0) {
    console.log('  → Guide Support déjà présent, skip.')
  } else {
    await payload.create({
      collection: 'pages',
      data: {
        title: 'Support : le guide complet pour débuter et progresser',
        slug: 'guide-support-league-of-legends',
        template: 'guide',
        locale: 'fr',
        seo: {
          description:
            'Tout savoir sur le rôle support dans League of Legends : types de supports, vision, phase de laning, mid/late game et meilleurs champions pour débuter.',
        },
        content: contentSupport,
      } as any,
    })
    console.log('  → Guide Support créé.')
  }

  // --- Guide Top Lane ---
  const existingTop = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'guide-top-lane-league-of-legends' }, locale: { equals: 'fr' } },
  })
  if (existingTop.docs.length > 0) {
    console.log('  → Guide Top Lane déjà présent, skip.')
  } else {
    await payload.create({
      collection: 'pages',
      data: {
        title: 'Top Lane : le guide complet pour débuter et progresser',
        slug: 'guide-top-lane-league-of-legends',
        template: 'guide',
        locale: 'fr',
        seo: {
          description:
            'Guide complet sur la top lane dans League of Legends : rôles, mécaniques de split push, gestion de wave, téléport et meilleurs champions pour débuter.',
        },
        content: contentTop,
      } as any,
    })
    console.log('  → Guide Top Lane créé.')
  }

  // --- Guide Jungle ---
  const existingJungle = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'guide-jungle-league-of-legends' }, locale: { equals: 'fr' } },
  })
  if (existingJungle.docs.length > 0) {
    console.log('  → Guide Jungle déjà présent, skip.')
  } else {
    await payload.create({
      collection: 'pages',
      data: {
        title: 'Jungle : le guide complet pour débuter et progresser',
        slug: 'guide-jungle-league-of-legends',
        template: 'guide',
        locale: 'fr',
        seo: {
          description:
            'Guide complet sur la jungle dans League of Legends : camps, chemins de clear, ganks, objectifs (dragon, baron) et meilleurs champions jungleurs pour débuter.',
        },
        content: contentJungle,
      } as any,
    })
    console.log('  → Guide Jungle créé.')
  }

  // --- Guide Mid Lane ---
  const existingMid = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'guide-mid-lane-league-of-legends' }, locale: { equals: 'fr' } },
  })
  if (existingMid.docs.length > 0) {
    console.log('  → Guide Mid Lane déjà présent, skip.')
  } else {
    await payload.create({
      collection: 'pages',
      data: {
        title: 'Mid Lane : le guide complet pour débuter et progresser',
        slug: 'guide-mid-lane-league-of-legends',
        template: 'guide',
        locale: 'fr',
        seo: {
          description:
            'Guide complet sur la mid lane dans League of Legends : rôles, roaming, impact sur la map, gestion de wave et meilleurs champions mid pour débuter.',
        },
        content: contentMid,
      } as any,
    })
    console.log('  → Guide Mid Lane créé.')
  }
}
