import type { MigrationModule } from './runner'

export const id = '009-pages-es'
export const description = 'Create ES versions of existing FR articles'

// ── Slate helpers ──────────────────────────────────────────────────────────
const p  = (text: string) => ({ children: [{ text }] })
const h2 = (text: string) => ({ type: 'h2', children: [{ text }] })
const h3 = (text: string) => ({ type: 'h3', children: [{ text }] })
const ul = (...items: string[]) => ({
  type: 'ul',
  children: items.map(item => ({ type: 'li', children: [{ text: item }] })),
})

// ══════════════════════════════════════════════════════════════════════════
// Article 1 — "¿Qué es League of Legends?"
// ══════════════════════════════════════════════════════════════════════════

const lolArticleES = [
  p(
    "League of Legends — o simplemente LoL — es uno de los videojuegos más jugados del mundo. " +
    "Lanzado en 2009 por Riot Games, reúne cada mes a más de 150 millones de jugadores registrados " +
    "y decenas de millones de partidas diarias. Pero ¿qué es lo que lo hace tan fascinante?"
  ),

  h2("¿Qué es un MOBA?"),
  p(
    "League of Legends pertenece al género MOBA (Multiplayer Online Battle Arena). " +
    "El concepto es sencillo: dos equipos de 5 jugadores se enfrentan en un mapa llamado " +
    "la Grieta del Invocador. El objetivo es destruir el Nexo enemigo — la base central " +
    "del equipo contrario — antes de que ellos destruyan el tuyo."
  ),
  p(
    "Cada partida dura en promedio entre 30 y 40 minutos. El mapa se divide en tres carriles " +
    "(top, mid, bot) conectados por una jungla, una zona boscosa llena de monstruos neutros que " +
    "los jugadores pueden eliminar para ganar fuerza."
  ),

  h2("Los campeones: el corazón del juego"),
  p(
    "Cada jugador elige un campeón antes de la partida — un personaje único con sus propias " +
    "habilidades, estilo de juego e historia en el universo de Runeterra. " +
    "En 2024, el roster cuenta con más de 160 campeones jugables."
  ),
  p("Estos campeones se dividen en grandes clases:"),
  ul(
    "Tanques — robustos, absorben el daño para proteger al equipo",
    "Asesinos — rápidos y letales, eliminan objetivos prioritarios",
    "Magos — poderosos a distancia, infligen daño mágico enorme",
    "Tiradores (ADC) — frágiles pero devastadores a largo plazo",
    "Soportes — protegen, curan o controlan a los enemigos",
    "Luchadores — un equilibrio entre daño y resistencia"
  ),

  h2("Los roles en la Grieta del Invocador"),
  p("En el juego competitivo, cada miembro del equipo ocupa un rol específico:"),
  ul(
    "Top — el carril superior, generalmente jugado por campeones resistentes",
    "Jungla — se desplaza por todo el mapa, controla los objetivos neutros",
    "Mid — el carril central, habitualmente magos o asesinos de alto impacto",
    "Bot (ADC) — carril inferior, tirador que escala hacia el late game",
    "Soporte — acompaña al ADC, protege al equipo y coloca guardianes de visión"
  ),

  h2("¿Por qué tantos jugadores?"),
  p(
    "La longevidad de LoL se explica por varios factores. Primero, " +
    "el juego es gratuito — todos los campeones se pueden desbloquear jugando. " +
    "Después, la profundidad estratégica es casi infinita: dominar un campeón " +
    "puede llevar cientos de horas, y la meta evoluciona con cada parche."
  ),
  p(
    "El aspecto competitivo también es central. El sistema de rangos (de Hierro a Challenger) " +
    "motiva a millones de jugadores a mejorar. Y el Campeonato Mundial reúne " +
    "cada año a decenas de millones de espectadores."
  ),

  h2("El universo de Runeterra"),
  p(
    "Más allá del gameplay, League of Legends ha construido un rico universo narrativo. " +
    "Cada campeón tiene su historia, sus relaciones con otros personajes, " +
    "y pertenece a una región del mundo: Demacia, Noxus, Ionia, Zaun, las Islas de las Sombras…"
  ),
  p(
    "Este universo ha dado lugar a múltiples proyectos: la serie animada Arcane en Netflix, " +
    "juegos derivados como Legends of Runeterra o Teamfight Tactics, " +
    "y música original publicada regularmente."
  ),

  h2("¿Por dónde empezar?"),
  p(
    "Si eres nuevo en LoL, empieza con el modo Tutorial disponible en el juego. " +
    "Las primeras partidas están protegidas de jugadores experimentados " +
    "mientras te adaptas. Elige un campeón sencillo — como Garen, " +
    "Ashe o Annie — para aprender las bases sin saturarte."
  ),
  p(
    "Y si todavía no sabes qué campeón te corresponde, " +
    "el quiz de RiftMatch está ahí para eso: unas pocas preguntas sobre tu estilo de juego " +
    "y tu personalidad, y descubrirás los campeones hechos para ti."
  ),
]

// ══════════════════════════════════════════════════════════════════════════
// Article 2 — "ADC: guía completa para principiantes"
// ══════════════════════════════════════════════════════════════════════════

const adcGuideES = [
  p(
    "El ADC — siglas de Attack Damage Carry — es uno de los roles más populares y exigentes " +
    "de League of Legends. El francotirador del equipo, inflige daño constante a distancia " +
    "y se convierte en una máquina ofensiva en el late game. Pero para llegar ahí, hay que sobrevivir " +
    "una fase inicial delicada y dominar mecánicas precisas."
  ),

  h2("¿Qué es un ADC?"),
  p(
    "ADC significa Attack Damage Carry: un campeón que lleva (carry) al equipo gracias a su daño " +
    "físico (AD = Attack Damage). Es el tirador del equipo — ataca a distancia, " +
    "inflige daño sostenido a los objetivos y destruye tanto campeones enemigos " +
    "como estructuras (torretas, inhibidores, Nexo)."
  ),
  p(
    "El ADC juega en el carril bot junto a un soporte. El soporte protege " +
    "al ADC durante la fase de carril — la fase de escalado de poder al inicio de la partida — " +
    "para permitirle farmear con tranquilidad y acumular oro."
  ),

  h2("¿Por qué jugar ADC?"),
  p("Este rol atrae por varias razones:"),
  ul(
    "Infliges daño de forma constante durante toda la partida",
    "En el late game, un buen ADC puede arrasar a un equipo entero en segundos",
    "A menudo puedes decidir tú solo el resultado de una pelea o un asedio",
    "El farmeo y el posicionamiento son habilidades muy gratificantes de dominar",
    "El roster de ADC es variado: francotiradores, hypercarries, tiradores magos…"
  ),

  h2("Las stats clave del ADC"),
  p(
    "A diferencia de los tanques o los magos, el ADC depende de stats muy específicas para ser efectivo:"
  ),
  h3("Velocidad de ataque (Attack Speed)"),
  p(
    "La velocidad de ataque determina cuántas veces por segundo golpeas. Cuanto más alta, " +
    "mayor tu daño por segundo (DPS). Es la stat principal de los ADC en el mid y late game."
  ),
  h3("Golpe crítico (Critical Strike)"),
  p(
    "Los golpes críticos multiplican tu daño base (generalmente x1.75). La mayoría de las builds ADC " +
    "apuntan al 100% de probabilidad de crit a mitad de partida con objetos como Infinity Edge o Galeforce."
  ),
  h3("Daño de ataque (AD)"),
  p(
    "El AD aumenta directamente tu daño por ataque. Combinado con el crit y la velocidad de ataque, " +
    "es el trío que define la potencia de un ADC."
  ),
  h3("Penetración de armadura"),
  p(
    "En el late game, los enemigos tienen mucha armura. La penetración (Lord Dominik's Regards, " +
    "Mortal Reminder) te permite mantener un daño alto incluso contra los tanques."
  ),

  h2("La fase de carril: sobrevivir para dominar"),
  p(
    "El carril es la fase más difícil para un ADC. Eres frágil, tienes menos daño " +
    "comparado con otros roles y dependes de tu soporte. Estas son las prioridades:"
  ),
  h3("El farmeo (CS)"),
  p(
    "Cada súbdito que matas te da oro. El objetivo es dar el golpe de gracia al mayor número posible " +
    "de súbditos — es decir, el golpe final para obtener el oro. Un buen ADC apunta a 8-10 CS por minuto. " +
    "A los 10 minutos, deberías tener entre 80 y 100 CS como mínimo."
  ),
  h3("Los intercambios (trading)"),
  p(
    "Un intercambio es un cruce de daño con el enemigo. Los ADC intercambian bien cuando: " +
    "su soporte inicia, tienen más vida que el enemigo, o tienen ventaja de nivel. " +
    "Fuera de estas condiciones, evita las peleas y farmea tranquilamente."
  ),
  h3("Posicionarse detrás de tu soporte"),
  p(
    "Tu soporte es tu escudo humano. Quédate detrás de él para evitar los inicios enemigos. " +
    "Si un enemigo pasa a tu soporte para alcanzarte, generalmente es porque te has mal posicionado."
  ),

  h2("El posicionamiento en las peleas de equipo"),
  p(
    "En las peleas de equipo, el posicionamiento es la habilidad nº 1 del ADC. La regla de oro: " +
    "quedarte lo más lejos posible de los enemigos mientras sigues atacando."
  ),
  ul(
    "Nunca te lances a la primera línea — eso es trabajo de los tanques",
    "Ataca al objetivo más cercano accesible sin riesgo",
    "Kitea (retrocede mientras atacas) para mantener distancia de tus rivales",
    "Usa el escenario para protegerte de los skillshots",
    "Vigila a los asesinos enemigos — buscan eliminarte de un solo golpe"
  ),
  p(
    "El kiting es una mecánica fundamental: alternas entre un ataque automático y un movimiento " +
    "para avanzar o retroceder mientras sigues golpeando. Cuanto más alta tu velocidad de ataque, más efectivo es el kiting."
  ),

  h2("ADC recomendados para principiantes"),
  p(
    "Algunos ADC perdonan más los errores que otros. Estos son los mejores puntos de entrada:"
  ),
  ul(
    "Ashe — el kit más sencillo del juego, flecha de ralentización, ultimate de stun de largo alcance. Ideal para aprender el rol.",
    "Miss Fortune — fuerte en carril, combo Q/W fácil de entender, excelente para aprender a intercambiar.",
    "Jinx — hypercarry clásica. Frágil pero devastadora cuando va ganando. Buena para aprender el late game.",
    "Sivir — resistente, buena movilidad con su ultimate, fácil de coger.",
    "Jhin — cadencia de ataque fija, gameplay muy satisfactorio, enseña precisión y posicionamiento."
  ),

  h2("Errores clásicos que evitar"),
  ul(
    "Morir por nada en el early game — una muerte = aproximadamente 40 CS perdidos",
    "No farmear durante las fases tranquilas (entre peleas)",
    "Pelear demasiado cerca de los enemigos — siempre mantén tus distancias",
    "Focusear al tanque enemigo en lugar del carry — ataca siempre al objetivo más amenazante accesible",
    "Olvidarse de volver a base para comprar objetos — los objetos son tu poder"
  ),

  h2("¿Por dónde empezar?"),
  p(
    "Empieza con Ashe o Miss Fortune en modo Normal. Apunta a 80 CS a los 10 minutos. " +
    "No te preocupes por los kills al principio — el farmeo, la supervivencia " +
    "y el posicionamiento son mucho más importantes para mejorar."
  ),
  p(
    "¿No sabes qué ADC encaja con tu estilo de juego? " +
    "El quiz de RiftMatch analiza tu personalidad y nivel para recomendarte " +
    "los campeones que mejor se adaptan a ti."
  ),
]

// ══════════════════════════════════════════════════════════════════════════
// Migration runner
// ══════════════════════════════════════════════════════════════════════════

export const up: MigrationModule['up'] = async (payload) => {
  // ── Article 1 ES ──────────────────────────────────────────────────────
  const ex1 = await payload.find({
    collection: 'pages',
    where: { and: [
      { slug:   { equals: 'qu-est-ce-que-league-of-legends' } },
      { locale: { equals: 'es' } },
    ]},
  })
  if (ex1.docs.length > 0) {
    console.log('  → ES article 1 already present, skip.')
  } else {
    await payload.create({
      collection: 'pages',
      data: {
        title:  '¿Qué es League of Legends?',
        slug:   'qu-est-ce-que-league-of-legends',
        locale: 'es',
        seo: {
          description:
            'Descubre League of Legends: el MOBA más jugado del mundo, sus campeones, ' +
            'mecánicas de juego y por qué millones de jugadores vuelven cada día.',
        },
        content: lolArticleES,
      },
    })
    console.log('  ✓ ES article 1 created.')
  }

  // ── Article 2 ES (guide) ───────────────────────────────────────────────
  const ex2 = await payload.find({
    collection: 'pages',
    where: { and: [
      { slug:   { equals: 'guide-adc-league-of-legends' } },
      { locale: { equals: 'es' } },
    ]},
  })
  if (ex2.docs.length > 0) {
    console.log('  → ES article 2 already present, skip.')
  } else {
    await payload.create({
      collection: 'pages',
      data: {
        title:    'ADC: guía completa para principiantes',
        slug:     'guide-adc-league-of-legends',
        locale:   'es',
        template: 'guide',
        seo: {
          description:
            'Todo lo que necesitas saber sobre el rol ADC en League of Legends: definición, mecánicas, ' +
            'fase de carril, posicionamiento en peleas de equipo y los mejores campeones para empezar.',
        },
        content: adcGuideES,
      } as any,
    })
    console.log('  ✓ ES article 2 created.')
  }
}
