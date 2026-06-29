import type { MigrationModule } from './runner'

export const id = '134-autres-regions-lcs-summer-2026-preview'
export const description = 'Autres Régions — LCS 2026 Summer : preview du split, finale à Atlanta et Cloud9 finalise un roster 7 joueurs'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-29T08:00:00.000Z'
const SOURCE = 'https://lolesports.com/en-US/news/2026-lcs-summer-primer'

const articles = [
  {
    title: "LCS 2026 Summer : la saison reprend le 25 juillet avec une finale à Atlanta",
    slug: 'lcs-2026-summer-preview-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Le LCS 2026 Summer démarre le 25 juillet avec 8 équipes en BO3 round-robin. Cloud9 présente un roster de 7 joueurs avec les recrues Tactical et Loki, tandis que LYON défend son titre de champion.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LCS' }, { tag: 'Esports' }, { tag: 'Cloud9' }],
    content: [
      { type: 'p', children: [{ text: "Le LCS 2026 Summer Split débutera le 25 juillet prochain, marquant la reprise de la saison nord-américaine après la victoire historique de LYON lors du Spring Split. Huit équipes s'affronteront en format best-of-3 round-robin, avec les finales programmées les 3 et 4 octobre à la Gas South Arena d'Atlanta, en Géorgie." }] },
      { type: 'h2', children: [{ text: "Cloud9 taille un roster XXL pour l'été" }] },
      { type: 'p', children: [{ text: "Principal favori aux côtés de LYON, Cloud9 a finalisé une composition inédite de sept joueurs pour le Summer Split. L'organisation a recruté Edward \"Tactical\" Ra comme sixième homme en bot lane, apportant avec lui trois titres NACL consécutifs. Elle a également rappelé le mid-laner \"Loki\" comme septième joueur : le Coréen avait remporté le trophée de meilleure recrue LTA North avec C9 en 2025 avant de rejoindre HANJIN BRION en LCK. Côté staff, Christian \"IWDominate\" Rivera prend les commandes en tant que head coach après avoir occupé un rôle d'assistant la saison précédente." }] },
      { type: 'h2', children: [{ text: "LYON, champion en titre et outsider assumé" }] },
      { type: 'p', children: [{ text: "LYON a créé la sensation au printemps en balayant Team Liquid 3-0 en grande finale, devenant ainsi champion LCS Spring 2026 et décrochant une place à l'Esports World Cup. L'équipe aborde l'été avec la pression du titre à défendre, mais aussi la confiance d'une saison régulière dominée de bout en bout. Team Liquid, avec son roster autour de CoreJJ, espère prendre sa revanche lors de ces finales atlantaises." }] },
      { type: 'h2', children: [{ text: "Format et enjeux Worlds" }] },
      { type: 'p', children: [{ text: "Les huit équipes (Cloud9, Dignitas, FlyQuest, Shopify Rebellion, Team Liquid, Sentinels, LYON et Disguised) s'affronteront en BO3 pour chaque match du groupe principal, rehaussant les enjeux de chaque confrontation. Les trois meilleures équipes du LCS décrocheront leur billet pour les Worlds 2026, qui se dérouleront sur le sol nord-américain, ce qui accentue encore la pression sur ce Summer Split." }] },
      { type: 'blockquote', children: [{ text: "Rendez-vous le 25 juillet pour l'ouverture du LCS Summer 2026, avec la finale le week-end des 3-4 octobre à Atlanta." }] },
    ],
  },
  {
    title: "LCS 2026 Summer: Season resumes July 25 with Atlanta finals and Cloud9's 7-man roster",
    slug: 'lcs-2026-summer-preview-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "The LCS 2026 Summer Split kicks off July 25 with 8 teams in a BO3 round-robin. Cloud9 unveils a 7-man roster with Tactical and Loki, while defending champion LYON aims to repeat.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LCS' }, { tag: 'Esports' }, { tag: 'Cloud9' }],
    content: [
      { type: 'p', children: [{ text: "The LCS 2026 Summer Split is set to begin on July 25, bringing North America's top League of Legends competition back to screens after LYON's stunning Spring championship run. Eight teams will compete in a best-of-3 round-robin format, with the finals scheduled for October 3-4 at Gas South Arena in Atlanta, Georgia." }] },
      { type: 'h2', children: [{ text: "Cloud9 builds a 7-man powerhouse" }] },
      { type: 'p', children: [{ text: "One of the favourites heading into Summer, Cloud9 has assembled an unprecedented seven-player roster. The organisation added Edward \"Tactical\" Ra as its sixth man in the bot lane — a player who won three straight NACL splits but hasn't appeared in the LCS since 2024. Cloud9 also re-signed mid-laner \"Loki\", who earned LTA North Rookie of the Year honours with C9 in 2025 before a stint at HANJIN BRION in the LCK. Veteran analyst Christian \"IWDominate\" Rivera steps up as head coach after assisting the previous season, giving Cloud9 an experienced voice driving the team's identity." }] },
      { type: 'h2', children: [{ text: "LYON defends its Spring crown" }] },
      { type: 'p', children: [{ text: "LYON shocked the LCS by sweeping Team Liquid 3-0 in the Spring Finals, cementing themselves as the dominant force in North America and earning a berth at the Esports World Cup. Heading into Summer the squad carries both the confidence of that dominant run and the target on its back that comes with being champions. Team Liquid, powered by veteran support CoreJJ, will be desperate to correct that result on the Atlanta stage." }] },
      { type: 'h2', children: [{ text: "Three Worlds spots on the line" }] },
      { type: 'p', children: [{ text: "With eight teams — Cloud9, Dignitas, FlyQuest, Shopify Rebellion, Team Liquid, Sentinels, LYON, and Disguised — locked in a full BO3 round-robin, every game carries real consequences. The top three LCS finishers will represent North America at the 2026 World Championship on home soil, amplifying the stakes of each individual match across the entire Summer run." }] },
      { type: 'blockquote', children: [{ text: "LCS Summer 2026 opens July 25; the championship concludes October 3-4 in Atlanta." }] },
    ],
  },
  {
    title: "LCS 2026 Summer: la temporada arranca el 25 de julio con la final en Atlanta y Cloud9 presenta 7 jugadores",
    slug: 'lcs-2026-summer-preview-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "El LCS 2026 Summer arranca el 25 de julio con 8 equipos en formato BO3. Cloud9 presenta un plantel de 7 jugadores con Tactical y Loki, mientras LYON defiende el título.",
    sourceUrl: SOURCE,
    tags: [{ tag: 'LCS' }, { tag: 'Esports' }, { tag: 'Cloud9' }],
    content: [
      { type: 'p', children: [{ text: "El LCS 2026 Summer Split arrancará el próximo 25 de julio, retomando la competición norteamericana de League of Legends tras el sorprendente título de LYON en el Spring. Ocho equipos competirán en un formato de round-robin a mejor de tres partidas, con las grandes finales programadas para los días 3 y 4 de octubre en el Gas South Arena de Atlanta, Georgia." }] },
      { type: 'h2', children: [{ text: "Cloud9 arma un plantel de 7 jugadores" }] },
      { type: 'p', children: [{ text: "Uno de los grandes candidatos al título, Cloud9 ha configurado un plantel inédito de siete jugadores de cara al verano. La organización incorporó a Edward \"Tactical\" Ra como sexto hombre en el carril bot — ganador de tres splits consecutivos en la NACL — y recuperó al mid-laner \"Loki\", elegido Mejor Rookie LTA North con C9 en 2025 tras su paso por HANJIN BRION en la LCK. El analista veterano Christian \"IWDominate\" Rivera asume el rol de head coach, aportando experiencia y visión táctica al equipo." }] },
      { type: 'h2', children: [{ text: "LYON busca revalidar el título" }] },
      { type: 'p', children: [{ text: "LYON protagonizó la gran sorpresa del Spring al barrer a Team Liquid 3-0 en la gran final, consolidándose como la fuerza dominante en Norteamérica y ganando un puesto en el Esports World Cup. Encarando el Summer como campeón defensor, el equipo lleva consigo la confianza de una temporada dominada de principio a fin. Team Liquid, liderado por el veterano soporte CoreJJ, buscará la revancha en Atlanta." }] },
      { type: 'h2', children: [{ text: "Tres plazas para Worlds en juego" }] },
      { type: 'p', children: [{ text: "Con ocho equipos — Cloud9, Dignitas, FlyQuest, Shopify Rebellion, Team Liquid, Sentinels, LYON y Disguised — disputando un round-robin completo en BO3, cada partida tendrá consecuencias reales. Los tres mejores clasificados del LCS representarán a Norteamérica en el World Championship 2026, que se celebrará en casa, lo que incrementa aún más la presión de cada jornada del Summer Split." }] },
      { type: 'blockquote', children: [{ text: "El LCS Summer 2026 abre el 25 de julio; la final se disputa los días 3 y 4 de octubre en Atlanta." }] },
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
