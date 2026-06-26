import type { MigrationModule } from './runner'

export const id = '130-riot-ranked5s-launch-summer2026'
export const description = 'RIOT — Ranked 5s : lancement officiel du mode compétitif 5v5 en équipe (26 juin 2026)'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-26T08:00:00.000Z'
const SOURCE = 'https://www.leagueoflegends.com/en-us/news/dev/dev-the-return-of-ranked-5s/'

const articles = [
  {
    title: "Ranked 5s : le mode compétitif 5v5 en équipe est enfin lancé dans League of Legends",
    slug: 'ranked-5s-lancement-ete-2026-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Les Ranked 5s sont officiellement disponibles ce soir dans League of Legends. Un mode compétitif en équipe de cinq joueurs, en Tournament Draft, avec enjeux doublés et récompenses exclusives.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Ranked 5s' }, { tag: 'Saison 2026' }],
    content: [
      { type: 'p', children: [{ text: "C'est le soir tant attendu par les amateurs de jeu en équipe : les Ranked 5s font leur retour officiel dans League of Legends ce 26 juin 2026 à 20h. Ce mode expérimental, annoncé il y a quelques semaines par Riot Games, propose enfin une file compétitive dédiée aux groupes de cinq joueurs, avec tout l'engagement du jeu rankée et le frisson du pro play." }] },
      { type: 'h2', children: [{ text: "Un format calqué sur le pro play" }] },
      { type: 'p', children: [{ text: "Les Ranked 5s utilisent le Tournament Draft, le format exact des compétitions professionnelles : trois bans, trois picks, puis deux bans supplémentaires et deux picks finaux. C'est la même expérience que celle des équipes pros à chaque split, accessible maintenant à tous les joueurs qui constituent une équipe complète." }] },
      { type: 'p', children: [{ text: "Grande nouveauté par rapport aux anciennes versions du mode : aucune restriction de rang. Peu importe que vos coéquipiers soient Iron ou Challengers, vous pouvez vous regrouper librement et affronter d'autres quintettes. Riot mise sur la dynamique d'équipe plutôt que sur l'équilibre de rang individuel." }] },
      { type: 'h2', children: [{ text: "Comment accéder aux Ranked 5s ?" }] },
      { type: 'p', children: [{ text: "La file est disponible les week-ends uniquement, de 21h à 1h du matin en heure locale selon votre serveur. Pour y accéder, il suffit de former un groupe de cinq joueurs et de sélectionner la file Ranked 5s dans le client. La queue tourne du 26 juin au 6 septembre 2026, soit dix semaines de jeu compétitif en équipe." }] },
      { type: 'h2', children: [{ text: "Enjeux doublés et récompenses exclusives" }] },
      { type: 'p', children: [{ text: "Riot a annoncé des enjeux doublés par rapport à la file Solo/Duo classique, ce qui veut dire que les gains et pertes de LP seront plus significatifs. En contrepartie, des récompenses exclusives attendent les équipes qui performent. Les détails complets des récompenses seront révélés en cours de saison." }] },
      { type: 'blockquote', children: [{ text: "Le timing n'est pas anodin : les Ranked 5s démarrent deux jours seulement avant le début du MSI 2026 à Daejeon (Corée du Sud, 28 juin). Une façon pour Riot de raviver la passion du jeu d'équipe chez les joueurs au moment même où le meilleur du monde sera réuni sur scène." }] },
    ],
  },
  {
    title: "Ranked 5s Are Live Tonight: LoL's Team Competitive Queue Returns for Summer 2026",
    slug: 'ranked-5s-summer-2026-launch-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Ranked 5s officially launches tonight in League of Legends — a full 5-man premade competitive queue with Tournament Draft, double LP stakes, and exclusive rewards running through September 6.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Ranked 5s' }, { tag: 'Season 2026' }],
    content: [
      { type: 'p', children: [{ text: "After weeks of anticipation, Ranked 5s officially goes live tonight, June 26, 2026 at 8 PM in League of Legends. Riot Games is bringing back the beloved five-stack competitive queue as a 10-week summer experiment, giving coordinated teams a dedicated ladder to climb — separate from the Solo/Duo grind." }] },
      { type: 'h2', children: [{ text: "What Are Ranked 5s?" }] },
      { type: 'p', children: [{ text: "Ranked 5s is a competitive queue exclusively for full five-person premade teams. It uses Tournament Draft — the exact format used in professional play — featuring three bans, three picks, two additional bans, and two final picks. It is the closest experience to pro play that casual and amateur teams can access from the League client." }] },
      { type: 'p', children: [{ text: "One of the biggest talking points: there are zero rank restrictions. A Challenger player can team up with an Iron player without any issue. Riot is prioritizing team cohesion over individual rank matching for this experimental mode, trusting the matchmaking system to find balanced opponents over time." }] },
      { type: 'h2', children: [{ text: "How to Queue and When to Play" }] },
      { type: 'p', children: [{ text: "Ranked 5s is a weekend-only queue, available Friday and Saturday nights from 9 PM to 1 AM local time per server region. To play, gather a full team of five, head to the client, and select the Ranked 5s queue. The mode runs from June 26 through September 6, 2026." }] },
      { type: 'h2', children: [{ text: "Double Stakes and Exclusive Rewards" }] },
      { type: 'p', children: [{ text: "Riot confirmed that LP gains and losses will be doubled compared to standard Ranked. The higher stakes encourage serious team play and make every match feel meaningful. Unique cosmetic rewards are available for teams that perform well — full details will roll out as the season progresses." }] },
      { type: 'blockquote', children: [{ text: "The timing is deliberate: Ranked 5s launches just two days before MSI 2026 kicks off in Daejeon, South Korea (June 28). Riot is channeling the energy of the international stage directly into the playerbase, encouraging teams to compete while the world's best clash on the pro scene." }] },
    ],
  },
  {
    title: "Ranked 5s ya está disponible esta noche en League of Legends: el modo competitivo por equipos regresa en verano 2026",
    slug: 'ranked-5s-verano-2026-lanzamiento-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Las Ranked 5s aterrizan esta noche en League of Legends con Tournament Draft, sin restricciones de rango y el doble de LP en juego. El modo correrá hasta el 6 de septiembre de 2026.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Ranked 5s' }, { tag: 'Temporada 2026' }],
    content: [
      { type: 'p', children: [{ text: "Este 26 de junio de 2026 es una fecha clave para los equipos de League of Legends: las Ranked 5s regresan oficialmente esta noche a las 20h. Riot Games lanza este modo competitivo por equipos como experimento de diez semanas durante el verano, ofreciendo a los quintetos organizados su propia clasificatoria separada de la cola Solo/Duo." }] },
      { type: 'h2', children: [{ text: "El formato del juego profesional al alcance de todos" }] },
      { type: 'p', children: [{ text: "Las Ranked 5s utilizan el Tournament Draft, el mismo sistema de selección que se usa en la escena profesional mundial: tres banes, tres picks, dos banes adicionales y dos picks finales. Es la experiencia más cercana al juego pro que cualquier equipo puede vivir directamente desde el cliente de LoL." }] },
      { type: 'p', children: [{ text: "Una de las grandes novedades de este retorno es la ausencia total de restricciones de rango. Un jugador Challenger puede agruparse con un jugador Iron sin ningún problema. Riot apuesta por la coordinación de equipo como factor principal, dejando que el emparejamiento encuentre rivales equilibrados con el tiempo." }] },
      { type: 'h2', children: [{ text: "Cómo acceder y cuándo jugar" }] },
      { type: 'p', children: [{ text: "La cola de Ranked 5s es exclusiva de los fines de semana, disponible los viernes y sábados por la noche entre las 21h y la 1h de la madrugada en horario local de cada servidor. Para entrar basta con reunir un equipo completo de cinco jugadores y seleccionar la cola desde el cliente. El modo estará activo del 26 de junio al 6 de septiembre de 2026." }] },
      { type: 'h2', children: [{ text: "El doble de LP y recompensas exclusivas" }] },
      { type: 'p', children: [{ text: "Riot ha confirmado que las ganancias y pérdidas de LP serán el doble respecto a la clasificatoria estándar. Un mayor riesgo que se compensa con recompensas cosméticas exclusivas para los equipos que alcancen buenos resultados. Los detalles completos de los premios se irán revelando a lo largo de la temporada." }] },
      { type: 'blockquote', children: [{ text: "El momento elegido no es casual: las Ranked 5s arrancan solo dos días antes del MSI 2026 en Daejeon, Corea del Sur (28 de junio). Riot quiere que los jugadores vivan la emoción del juego en equipo mientras los mejores del mundo compiten en el escenario internacional." }] },
    ],
  },
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const a of articles) {
    const ex = await payload.find({ collection: 'news', where: { slug: { equals: a.slug } } })
    if (ex.docs.length > 0) { console.log(`→ skip ${a.slug}`); continue }
    await payload.create({ collection: 'news', data: a as any })
    console.log(`✅ ${a.locale.toUpperCase()} — ${a.title}`)
  }
}
