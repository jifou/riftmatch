import type { MigrationModule } from './runner'

export const id = '013-guides-roles-es'
export const description = 'Create ES guides for Support, Top Lane, Jungle and Mid Lane roles'

// ── Slate helpers ──────────────────────────────────────────────────────────
const p  = (text: string) => ({ children: [{ text }] })
const h2 = (text: string) => ({ type: 'h2', children: [{ text }] })
const h3 = (text: string) => ({ type: 'h3', children: [{ text }] })
const ul = (...items: string[]) => ({
  type: 'ul',
  children: items.map(item => ({ type: 'li', children: [{ text: item }] })),
})

// ══════════════════════════════════════════════════════════════════════════
// Guide 1 — "Support: guía completa para principiantes"
// ══════════════════════════════════════════════════════════════════════════

const supportGuideES = [
  p(
    "El soporte es uno de los roles más versátiles e infravalorados de League of Legends. " +
    "Lejos de ser un simple acompañante del ADC, el buen soporte controla el mapa, " +
    "protege a sus aliados y marca la diferencia en cada fase de la partida. " +
    "Si te gusta jugar en equipo y tener un impacto constante, este rol es para ti."
  ),

  h2("¿Qué es el soporte?"),
  p(
    "El soporte juega en el carril bot junto al ADC durante la fase de carril. " +
    "Su misión principal es proteger, habilitar o controlar al equipo contrario " +
    "para que su equipo pueda imponerse. A diferencia de otros roles, el soporte no " +
    "prioriza el farmeo de súbditos: su oro viene de los objetos de soporte y los assists."
  ),
  p(
    "Más allá del carril bot, el soporte es el principal responsable de la visión del mapa, " +
    "colocando y destruyendo guardianes de visión en puntos clave. " +
    "Un buen control de visión puede decidir el resultado de una partida entera."
  ),

  h2("Tipos de soporte"),
  p("Existen cuatro grandes arquetipos de soporte, cada uno con un estilo de juego diferente:"),
  h3("Iniciadores"),
  p(
    "Son tanques o campeones con mucho control de masas capaces de iniciar peleas de equipo. " +
    "Lanzan a los enemigos dentro de su equipo o abren brecha para que los aliados castiguen. " +
    "Ejemplos: Leona, Nautilus, Blitzcrank, Thresh."
  ),
  h3("Protectores"),
  p(
    "Priorizan mantener vivos a sus aliados con escudos, curas y habilidades de evacuación. " +
    "Son ideales para proteger al ADC en el carril y al carry del equipo en las peleas. " +
    "Ejemplos: Janna, Lulu, Karma, Renata Glasc."
  ),
  h3("Soportes de poke"),
  p(
    "Acosan al equipo contrario con habilidades de largo alcance, desgastando su vida " +
    "antes de una pelea abierta. Combinan bien con ADC agresivos. " +
    "Ejemplos: Lux, Zyra, Vel'Koz, Senna."
  ),
  h3("Encantadores"),
  p(
    "Amplifican las capacidades de sus aliados con buffs, curaciones y habilidades especiales. " +
    "Tienen una curva de aprendizaje mayor pero son muy poderosos en el late game. " +
    "Ejemplos: Soraka, Nami, Yuumi, Sona."
  ),

  h2("Visión y wards"),
  p(
    "La visión es la herramienta más importante del soporte. Coloca guardianes de control " +
    "(Trinket amarillo) en arbustos del carril bot, en el río y en los cruces clave. " +
    "Compra siempre el Tótem de control (ward rosa) para destruir los guardianes enemigos " +
    "y asegurar la visión de objetivos como el Dragón o el Barón."
  ),
  ul(
    "Coloca wards en los arbustos del río antes del minuto 2 para detectar ganks tempranos",
    "Mantén visión alrededor del Dragón cada vez que esté a punto de aparecer",
    "Destruye los wards enemigos con el Tótem de control para cegar al rival",
    "En el mid game, desplázate por el mapa colocando visión en la jungla enemiga",
    "Usa el Tótem de control en los arbustos del Elder Dragon y del Barón Nashor"
  ),

  h2("La fase de carril"),
  p(
    "En el carril bot, el soporte gestiona el ritmo de la fase junto a su ADC. " +
    "El objetivo no es matar al enemigo a toda costa, sino crear ventaja: " +
    "presionar al rival para que pierda súbditos, forzarle a gastar pociones o conseguir primeras muertes."
  ),
  p(
    "Adapta tu comportamiento al tipo de soporte que juegas: si eres iniciador, busca atrapar " +
    "al rival fuera de posición; si eres protector, reacciona a las agresiones del enemigo " +
    "y prioriza mantener a tu ADC con vida y en posición para farmear."
  ),

  h2("Mid/late game"),
  p(
    "Cuando cae la primera torreta del bot, el soporte debe dejar de limitarse al carril " +
    "y empezar a rotarse por el mapa. Tu prioridad: estar con tu equipo en las peleas importantes, " +
    "mantener la visión de los objetivos neutrales y asegurar que tus carries puedan actuar con seguridad."
  ),
  p(
    "En las peleas de equipo, tu rol depende de tu tipo: los iniciadores arrancan la pelea, " +
    "los protectores blindan a los carries, los encantadores curan y potencian, " +
    "y los soportes de poke debilitan al enemigo antes de que empiece el combate cuerpo a cuerpo."
  ),

  h2("Mejores campeones para principiantes"),
  p(
    "Estos soportes tienen kits sencillos y perdonan bien los errores iniciales:"
  ),
  ul(
    "Soraka — cura masiva, ultimate global, muy fácil de jugar. Perfecta para aprender la posición.",
    "Lux — soporte de poke con raíz y escudo. Daño y utilidad en un solo paquete sencillo.",
    "Blitzcrank — gancho de largo alcance que puede cambiar una partida de un solo acierto. Alto riesgo, alta recompensa.",
    "Leona — tanque con mucho control de masas. Ideal para aprender a iniciar peleas de forma agresiva.",
    "Janna — escudo y ultimata de empuje muy fáciles de usar, perfecta para proteger al ADC."
  ),

  h2("Errores comunes"),
  ul(
    "No comprar el objeto de soporte al inicio — pierdes ingresos de oro durante toda la partida",
    "Olvidarse de colocar wards o no renovarlos regularmente",
    "Seguir pegado al ADC en el mid game en lugar de rotar por el mapa",
    "Iniciar peleas sin que el equipo esté listo para reaccionar",
    "Gastar los escudos y curas de forma preventiva en lugar de en el momento crítico"
  ),

  h2("¿Listo para apoyar a tu equipo?"),
  p(
    "El soporte es uno de los roles con mayor impacto en el resultado de una partida. " +
    "Domina la visión, elige el momento correcto para actuar y mantén a tus carries con vida. " +
    "Cuando lo hagas bien, tu equipo ganará sin saber exactamente por qué — y eso es la marca " +
    "de un gran soporte."
  ),
  p(
    "¿No sabes qué tipo de soporte encaja con tu personalidad? " +
    "Haz el quiz de RiftMatch y descubre en pocos minutos qué campeón está hecho para ti."
  ),
]

// ══════════════════════════════════════════════════════════════════════════
// Guide 2 — "Carril Superior (Top): guía completa para principiantes"
// ══════════════════════════════════════════════════════════════════════════

const topGuideES = [
  p(
    "El carril superior — o top lane — es la isla de League of Legends. " +
    "Lejos del bot y de la jungla, el top laner afronta duelos largos y exigentes " +
    "que ponen a prueba la gestión de oleada y el conocimiento de los matchups. " +
    "Es el rol perfecto para quienes disfrutan de la autonomía y los 1vs1 intensos."
  ),

  h2("¿Qué es el carril superior?"),
  p(
    "El carril superior es el corredor más largo del mapa. Conecta la base aliada con la enemiga " +
    "y está separado del resto por la jungla. El top laner juega solo casi todo el early game, " +
    "por lo que debe ser autosuficiente: capaz de aguantar la presión, farmear bajo su torreta " +
    "y aprovechar los errores del rival."
  ),
  p(
    "El top suele ser el jugador más resistente del equipo: tanques, luchadores y split pushers. " +
    "Su trabajo en el late game varía según su rol — puede absorber daño en las peleas, " +
    "dividir al equipo rival o servir de frontline para sus carries."
  ),

  h2("Arquetipos del top laner"),
  h3("Tanques"),
  p(
    "Extremadamente resistentes, los tanques del top absorben el daño enemigo en las peleas de equipo " +
    "y protegen a los carries. Suelen tener herramientas de control de masas. " +
    "Ejemplos: Malphite, Ornn, Garen (modo tanque), Sion."
  ),
  h3("Luchadores (Bruisers)"),
  p(
    "Mezclan daño y resistencia. Más peligrosos en duelos que los tanques puros, " +
    "pueden aguantar castigo mientras infligen suficiente daño para amenazar al equipo rival. " +
    "Ejemplos: Darius, Sett, Garen, Fiora, Camille."
  ),
  h3("Split pushers"),
  p(
    "Especializados en destruir torretas en solitario, los split pushers obligan al equipo " +
    "contrario a reaccionar, creando presión en el mapa. " +
    "Ejemplos: Nasus, Tryndamere, Jax, Yorick."
  ),

  h2("Gestión de oleada"),
  p(
    "Controlar la oleada de súbditos es la habilidad más importante del top laner. " +
    "Empujar la oleada hacia la torreta enemiga te permite teletransportarte con seguridad, " +
    "mientras congelarla cerca de tu torreta te protege de ganks y niega oro al rival."
  ),
  ul(
    "Congela la oleada cuando tienes ventaja — el enemigo se expone a los ganks de tu junglero",
    "Empuja rápido antes de teletransportarte para no perder súbditos",
    "Haz slow push (acumula oleadas grandes) antes de atacar una torreta",
    "Farmea bajo torreta cuando vas perdiendo — es mejor que arriesgar la vida",
    "Recuerda que los súbditos de cañón (cannon minions) dan mucho más oro — prioriza el last hit"
  ),

  h2("El Teleporte"),
  p(
    "El hechizo Teleporte es el artículo de equipo del top laner. Bien usado, " +
    "te permite estar en dos sitios a la vez: farmeas en top y apareces en bot o mid " +
    "en el momento clave de una pelea, inclinando la balanza a favor de tu equipo."
  ),
  p(
    "La regla básica del Teleporte: úsalo para ganar peleas importantes cerca de un objetivo " +
    "(Dragón, torreta, Heraldo), no para volver al carril cuando podrías simplemente esperar " +
    "o cuando la pelea ya ha terminado. Un mal uso del TP puede costarte el carril."
  ),

  h2("El split push"),
  p(
    "El split push es una estrategia en la que el top laner presiona en solitario en un carril " +
    "mientras el resto del equipo amenaza en otro punto del mapa. El objetivo es crear un dilema " +
    "para el rival: si mandan recursos a parar al split pusher, el equipo principal toma objetivos; " +
    "si no, el top destruye torretas o incluso el Nexo."
  ),
  p(
    "Para hacer split push eficazmente necesitas: un campeón con buena 1vs1, habilidad para destruir " +
    "torretas rápido y visión alrededor para no ser sorprendido por varios enemigos a la vez."
  ),

  h2("Mid/late game"),
  p(
    "A medida que la partida avanza, el top laner debe decidir su rol en el equipo. " +
    "Los tanques y luchadores se integran en el grupo para las peleas de equipo, " +
    "mientras que los split pushers siguen presionando carriles hasta obligar al rival a reaccionar. " +
    "Saber cuándo unirte a tu equipo y cuándo seguir presionando es una de las decisiones más difíciles del top."
  ),

  h2("Mejores campeones para principiantes"),
  ul(
    "Garen — extremadamente sencillo, regeneración pasiva, muy resistente. El mejor punto de entrada para el top.",
    "Malphite — tanque de fácil manejo con una ultimate de impacto enorme en peleas de equipo.",
    "Darius — luchador agresivo con mucho daño, fácil de entender aunque difícil de masterizar del todo.",
    "Nasus — split pusher que escala con el tiempo. Te enseña paciencia y gestión de oleada.",
    "Sett — luchador resistente con kit intuitivo. Muy directo: entra, pega, aguanta."
  ),

  h2("Errores comunes"),
  ul(
    "Teletransportarse de vuelta al carril en lugar de rotar a una pelea importante",
    "No gestionar la oleada — dejar que empuje hacia el enemigo cuando hay riesgo de gank",
    "Pelear sin oleada detrás — pierdes tanto el intercambio como los súbditos",
    "Ignorar los objetivos del mapa (Dragón, Heraldo) creyendo que el top es una isla",
    "Usar el Teleporte para volver al carril en lugar de para marcar diferencias en el mapa"
  ),

  h2("¿Listo para dominar el carril superior?"),
  p(
    "El top lane recompensa la paciencia, el conocimiento del matchup y las decisiones macro. " +
    "Empieza con Garen o Malphite, aprende a gestionar la oleada y úsate el Teleporte inteligentemente. " +
    "Con el tiempo, el carril superior te dará la autonomía y el impacto que ningún otro rol ofrece."
  ),
  p(
    "¿No sabes si eres más tanque, luchador o split pusher? " +
    "Responde el quiz de RiftMatch y descubre qué campeón top encaja con tu estilo de juego."
  ),
]

// ══════════════════════════════════════════════════════════════════════════
// Guide 3 — "Jungla: guía completa para principiantes"
// ══════════════════════════════════════════════════════════════════════════

const jungleGuideES = [
  p(
    "La jungla es el rol más complejo y más influyente de League of Legends. " +
    "El junglero no tiene carril fijo: se mueve por todo el mapa, controla los objetivos neutrales " +
    "y gankea los carriles aliados para crear ventaja. Si te gusta tener el control de la partida " +
    "y tomar decisiones en todo momento, la jungla es tu rol."
  ),

  h2("¿Qué es la jungla?"),
  p(
    "La jungla es la zona boscosa del mapa que rodea los tres carriles de la Grieta del Invocador. " +
    "Está poblada de monstruos neutrales que el junglero elimina para ganar oro y experiencia, " +
    "ya que no farmea súbditos como los laners. Estos campamentos también otorgan beneficios " +
    "temporales muy útiles para el equipo."
  ),
  p(
    "El junglero es el único jugador con total libertad de movimiento desde el inicio. " +
    "Esa libertad viene acompañada de responsabilidad: debe priorizar los objetivos correctos, " +
    "detectar cuándo gankar y mantener el ritmo de su clear sin morir a los monstruos."
  ),

  h2("Campamentos y rutas de clear"),
  p(
    "Los campamentos de la jungla se dividen en menores (Lobos, Rapaces, Krug, Fantasmas) " +
    "y mayores (Golems de piedra, Cangrejo de rift). Cada campamento respawna cada 2 minutos y medio " +
    "aproximadamente, por lo que es importante optimizar la ruta para no dejar oro encima del suelo."
  ),
  ul(
    "Rutas full clear: limpias todos los campamentos de tu jungla antes de gankar (más oro, menos riesgo)",
    "Rutas de gank temprano: priorizas uno o dos campamentos y luego presionas un carril antes del minuto 3",
    "Clear por cuadrantes: empieza en el lado del mapa donde el dragón o el Heraldo aparecerá primero",
    "Siempre elimina los Cangrejos de rift cuando puedas — dan mucha visión y experiencia",
    "Usa las smites en los campamentos grandes para no perder vida innecesariamente",
    "Farmea los campamentos del enemigo si tiene un junglero lento o muerto"
  ),

  h2("Objetivos clave"),
  h3("Cangrejo de rift"),
  p(
    "Aparece en el río (lado top y lado bot) al minuto 3:30 y respawna cada 2:30 minutos. " +
    "Eliminar al Cangrejo otorga visión del área y un escudo valioso para los laners cercanos. " +
    "Controlar los Cangrejos desde el early game es uno de los hábitos más importantes del junglero."
  ),
  h3("Dragón"),
  p(
    "El Dragón aparece en el río inferior a los 5 minutos. Cada tipo de dragón otorga un buff " +
    "permanente a todo el equipo, y acumular almas de dragón puede cambiar el resultado de la partida. " +
    "Coordínate con el soporte y el ADC para asegurarlo — la visión del foso del dragón es clave."
  ),
  h3("Heraldo del vacío"),
  p(
    "Aparece en el río superior antes de los 20 minutos. Matarlo te da el ojo del Heraldo, " +
    "un ítem lanzable que invoca a un minión enorme capaz de destruir torretas rápidamente. " +
    "Ideal para obtener ventaja de plata en los primeros 15-20 minutos."
  ),
  h3("Barón Nashor"),
  p(
    "El Barón aparece en el río superior a los 20 minutos y respawna cada 6 minutos. " +
    "Matarlo otorga un buff poderoso a todos los miembros vivos del equipo, potenciando los súbditos. " +
    "Es el objetivo más decisivo del late game y puede voltear partidas enteras."
  ),

  h2("Los ganks"),
  p(
    "Un gank es cuando el junglero visita un carril aliado para atacar al rival por sorpresa. " +
    "Un buen gank puede matar al enemigo, forzarle a gastar el flash o simplemente hacer que pierda " +
    "experiencia y oro por miedo a quedarse en posición."
  ),
  ul(
    "Gankea los carriles donde el enemigo está sobrepasado y sin flash",
    "Usa los arbustos para aproximarte sin ser visto — la visión es tu aliada",
    "Comunícate con el laner antes de gankar para que esté listo para reaccionar",
    "No gankees un carril que está empujando lejos de la torreta aliada — es complicado atrapar al rival",
    "Después de un gank exitoso, decide si empujas la oleada, tomas la torreta o regresas a farmear"
  ),

  h2("Visión y control del mapa"),
  p(
    "El junglero debe invertir en visión para rastrear al junglero enemigo y asegurar los objetivos. " +
    "Compra siempre Tótems de control y colócalos en el río, cerca del Dragón o del Barón, " +
    "y en las entradas de la jungla enemiga cuando sea seguro adentrarse."
  ),

  h2("Tipos de jungleros"),
  ul(
    "Asesinos — limpian rápido y tienen mucho daño para ganks explosivos (Kha'Zix, Rengar, Nidalee)",
    "Tanques — aguantan bien, inician peleas y protegen al equipo en el late game (Amumu, Jarvan IV, Vi)",
    "Luchadores — equilibrio entre daño y resistencia, muy versátiles (Hecarim, Vi, Warwick)",
    "Carry junglers — escalan mucho y pueden decidir la partida solos (Master Yi, Jinx jungla, Lillia)",
    "Utility — aportan control de masas y herramientas de apoyo en lugar de daño puro (Ivern, Zac)"
  ),

  h2("Mejores campeones para principiantes"),
  ul(
    "Warwick — pasiva de curación, olfato para los rivales débiles, fácil de aprender. El mejor inicio para la jungla.",
    "Amumu — tanque con buena área de daño y ultimate de control masivo. Enseña a iniciar peleas de equipo.",
    "Master Yi — clear rapidísimo, mucho daño en el late game. Bueno para aprender el ritmo del junglero.",
    "Hecarim — muy rápido, fácil de mover por el mapa, ultimate de gank potente. Enseña la importancia del timing.",
    "Vi — punch poderoso, buen clear, ultimate de persecución que facilita los ganks sobre objetivos prioritarios."
  ),

  h2("Errores comunes"),
  ul(
    "Campear un solo carril e ignorar el resto del mapa",
    "No farmear los campamentos entre ganks — la diferencia de nivel con el junglero rival se abre rápidamente",
    "Perder el Dragón o el Barón por falta de visión o coordinación",
    "Gankar carriles perdidos sin posibilidad real de voltear la situación",
    "Llegar al gank sin smite cargado cuando hay un objetivo importante por asegurar"
  ),

  h2("¿Listo para tomar el control del mapa?"),
  p(
    "La jungla es el rol que más influye en el ritmo de la partida. " +
    "Aprende las rutas de clear, prioriza los objetivos neutrales y gankea los carriles " +
    "en el momento adecuado. Con práctica, serás el jugador que decide cómo evoluciona cada partida."
  ),
  p(
    "¿No sabes qué tipo de junglero encaja con tu estilo? " +
    "Haz el quiz de RiftMatch y encuentra en minutos el campeón que mejor se adapta a ti."
  ),
]

// ══════════════════════════════════════════════════════════════════════════
// Guide 4 — "Carril Central (Mid): guía completa para principiantes"
// ══════════════════════════════════════════════════════════════════════════

const midGuideES = [
  p(
    "El carril central — o mid lane — es el corazón de League of Legends. " +
    "Situado en el centro del mapa, el mid laner tiene acceso privilegiado a todos los demás carriles " +
    "y puede influir en el juego de todo el equipo desde muy temprano. " +
    "Es el rol más exigente del juego, pero también uno de los más satisfactorios de dominar."
  ),

  h2("¿Qué es el carril central?"),
  p(
    "El mid lane es el carril más corto de los tres, lo que significa que los campeones se encuentran " +
    "antes y con más frecuencia. Esta proximidad constante convierte el mid en un duelo técnico " +
    "donde los intercambios de habilidades y la gestión de oleada son determinantes desde el minuto uno."
  ),
  p(
    "Su posición central en el mapa también lo convierte en el rol con mayor capacidad de rotación. " +
    "El mid laner puede rotar hacia el bot o hacia el top en pocos segundos, " +
    "creando superioridad numérica en las peleas y presionando los objetivos más importantes del mapa."
  ),

  h2("Arquetipos del mid laner"),
  h3("Magos"),
  p(
    "Campeones con mucho daño mágico y herramientas de control de masas. Son los mid laners más comunes, " +
    "presentes en casi todas las composiciones. Escalan bien en el late game. " +
    "Ejemplos: Annie, Lux, Veigar, Syndra, Orianna."
  ),
  h3("Asesinos"),
  p(
    "Campeones que pueden eliminar a un objetivo prioritario en una sola rotación de habilidades. " +
    "Dominan los duelos del early game pero requieren más conocimiento de matchups. " +
    "Ejemplos: Zed, Katarina, Talon, Fizz."
  ),
  h3("Luchadores"),
  p(
    "Campeones con buena mezcla de daño y resistencia, eficaces tanto en duelos como en peleas de equipo. " +
    "Menos habituales en mid, pero muy peligrosos cuando van bien. " +
    "Ejemplos: Irelia, Akali, Sylas."
  ),
  h3("Campeones de utilidad"),
  p(
    "Priorizan el apoyo al equipo sobre el daño individual: escudos, control de masas global, " +
    "buffs y capacidad de roaming. Perfectos para jugadores que prefieren el impacto colectivo. " +
    "Ejemplos: Galio, Twisted Fate, Taliyah, Malzahar."
  ),

  h2("Gestión de oleada en mid"),
  p(
    "El mid lane tiene oleadas más rápidas que top o bot, ya que el carril es más corto. " +
    "Esto significa que debes ser especialmente rápido limpiando la oleada para poder rotar " +
    "o hacer presión sin perder demasiados súbditos."
  ),
  ul(
    "Empuja la oleada antes de rotar — nunca te vayas dejando una gran oleada en tu base",
    "Aprende el patrón de tus habilidades para limpiar súbditos rápido (AoE skills prioritarias)",
    "Congela la oleada cerca de tu torreta cuando el rival está adelantado y con riesgo de gank",
    "Haz slow push acumulando oleadas antes de atacar la torreta enemiga o hacer un back",
    "Controla la runa Scuttler del río central para ganar visión del río y negar presencia al rival"
  ),

  h2("El roaming: crear presión en el mapa"),
  p(
    "El roaming es la capacidad de dejar el carril temporalmente para ayudar a otros. " +
    "El mid laner es el campeón con más capacidad de roaming del juego: está a igual distancia " +
    "del top y del bot, y puede llegar a ambos en menos de 10 segundos si la oleada está empujada."
  ),
  p(
    "Un buen roam puede llevar mucho más valor que quedarse en el carril: una muerte en bot " +
    "puede traducirse en una torreta y el control del Dragón. La clave es roamear en el momento justo — " +
    "cuando tu oleada empuje hacia el enemigo, para que mientras estás fuera no pierdas demasiados súbditos."
  ),

  h2("Impacto en el mapa"),
  p(
    "Más allá del roaming, el mid laner controla el centro del mapa. Tener presión en mid " +
    "significa que el rival no puede salir de su carril sin ser castigado, " +
    "lo que facilita que tu junglero y tus laners laterales trabajen con más libertad."
  ),
  ul(
    "Coloca visión en los arbustos del río central para ver los movimientos del junglero enemigo",
    "Empuja la oleada para presionar la torreta del mid — es la estructura más cercana al Nexo",
    "Rota al Heraldo del vacío cuando aparece en el río superior — el mid está a muy poca distancia",
    "Coordina con el junglero para conseguir la primera torreta del mid lane (la más valiosa del mapa)",
    "Cuando el rival vuelve a base, aprovecha para empujar y rotarte a asegurar el Dragón"
  ),

  h2("Mid/late game"),
  p(
    "En el mid y late game, el mid laner debe mantenerse relevante en todas las peleas de equipo. " +
    "Los magos desatan su máximo daño en esta fase, los asesinos buscan flanquear a los carries " +
    "y los campeones de utilidad amplifican la capacidad de todo el equipo. " +
    "Independientemente de tu arquetipo, nunca vayas solo sin información del mapa."
  ),

  h2("Mejores campeones para principiantes"),
  ul(
    "Annie — la maga más sencilla del juego. Cuatro habilidades directas, stun predecible, daño enorme. Perfecta para aprender el rol.",
    "Lux — daño a distancia, raíz, escudo y ultimate de largo alcance. Muy intuitiva y eficaz desde los primeros niveles.",
    "Veigar — escala infinitamente con AP. Enseña paciencia y la importancia de farmear habilidades pasivas.",
    "Vex — maga sencilla con CC y daño antimovilidad. Muy útil contra asesinos, fácil de entender.",
    "Malzahar — control de masas con pasiva de escudo, push de oleada fácil y ultimate que inmoviliza. Ideal para aprender el impacto del mid."
  ),

  h2("Errores comunes"),
  ul(
    "Roamear sin empujar la oleada primero — pierdes CS y presión en mid simultáneamente",
    "No controlar la visión del río — el junglero enemigo puede gankearte sin que lo veas venir",
    "Quedarse siempre en el carril sin rotarse — el mid debe ser el motor del mapa",
    "Focusear al tanque enemigo en lugar de a los carries en las peleas de equipo",
    "Olvidar comprar activos o pociones en el back — cada detalle de oro cuenta en el mid game"
  ),

  h2("¿Listo para dominar el centro del mapa?"),
  p(
    "El mid lane es el rol que más libertad ofrece para influir en el resultado de la partida. " +
    "Domina la gestión de oleada, aprende a roamear en el momento adecuado y mantén el control " +
    "visual del río. Con la práctica, serás el jugador que dicta el ritmo de cada partida."
  ),
  p(
    "¿Todavía no sabes qué tipo de mid laner eres? " +
    "Haz el quiz de RiftMatch y descubre en pocos clics qué campeón encaja perfectamente con tu estilo."
  ),
]

// ══════════════════════════════════════════════════════════════════════════
// Migration runner
// ══════════════════════════════════════════════════════════════════════════

export const up: MigrationModule['up'] = async (payload) => {
  // ── Guide 1 — Support ES ──────────────────────────────────────────────
  const ex1 = await payload.find({
    collection: 'pages',
    where: { and: [
      { slug:   { equals: 'guia-support-league-of-legends' } },
      { locale: { equals: 'es' } },
    ]},
  })
  if (ex1.docs.length > 0) {
    console.log('  → ES guide Support already present, skip.')
  } else {
    await payload.create({
      collection: 'pages',
      data: {
        title:    'Support: guía completa para principiantes',
        slug:     'guia-support-league-of-legends',
        template: 'guide',
        locale:   'es',
        seo: {
          description:
            'Todo lo que necesitas saber sobre el rol soporte en League of Legends: tipos de soporte, ' +
            'control de visión, fase de carril, mid/late game y mejores campeones para empezar.',
        },
        content: supportGuideES,
      } as any,
    })
    console.log('  ✓ ES guide Support created.')
  }

  // ── Guide 2 — Top Lane ES ─────────────────────────────────────────────
  const ex2 = await payload.find({
    collection: 'pages',
    where: { and: [
      { slug:   { equals: 'guia-top-lane-league-of-legends' } },
      { locale: { equals: 'es' } },
    ]},
  })
  if (ex2.docs.length > 0) {
    console.log('  → ES guide Top Lane already present, skip.')
  } else {
    await payload.create({
      collection: 'pages',
      data: {
        title:    'Carril Superior (Top): guía completa para principiantes',
        slug:     'guia-top-lane-league-of-legends',
        template: 'guide',
        locale:   'es',
        seo: {
          description:
            'Guía completa sobre el carril superior en League of Legends: roles, split push, ' +
            'gestión de oleada, Teleport y mejores campeones para principiantes.',
        },
        content: topGuideES,
      } as any,
    })
    console.log('  ✓ ES guide Top Lane created.')
  }

  // ── Guide 3 — Jungle ES ───────────────────────────────────────────────
  const ex3 = await payload.find({
    collection: 'pages',
    where: { and: [
      { slug:   { equals: 'guia-jungla-league-of-legends' } },
      { locale: { equals: 'es' } },
    ]},
  })
  if (ex3.docs.length > 0) {
    console.log('  → ES guide Jungle already present, skip.')
  } else {
    await payload.create({
      collection: 'pages',
      data: {
        title:    'Jungla: guía completa para principiantes',
        slug:     'guia-jungla-league-of-legends',
        template: 'guide',
        locale:   'es',
        seo: {
          description:
            'Guía completa sobre la jungla en League of Legends: campamentos, rutas de clear, ganks, ' +
            'objetivos (dragón, barón) y mejores campeones jungleros para principiantes.',
        },
        content: jungleGuideES,
      } as any,
    })
    console.log('  ✓ ES guide Jungle created.')
  }

  // ── Guide 4 — Mid Lane ES ─────────────────────────────────────────────
  const ex4 = await payload.find({
    collection: 'pages',
    where: { and: [
      { slug:   { equals: 'guia-mid-lane-league-of-legends' } },
      { locale: { equals: 'es' } },
    ]},
  })
  if (ex4.docs.length > 0) {
    console.log('  → ES guide Mid Lane already present, skip.')
  } else {
    await payload.create({
      collection: 'pages',
      data: {
        title:    'Carril Central (Mid): guía completa para principiantes',
        slug:     'guia-mid-lane-league-of-legends',
        template: 'guide',
        locale:   'es',
        seo: {
          description:
            'Guía completa sobre el carril central en League of Legends: roles, roaming, presión en el mapa, ' +
            'gestión de oleada y mejores campeones mid para principiantes.',
        },
        content: midGuideES,
      } as any,
    })
    console.log('  ✓ ES guide Mid Lane created.')
  }
}
