import type { MigrationModule } from './runner'

export const id = '157-other-cblol-split2-2026-furia-tatu-suspension'
export const description = 'Autres Régions — CBLOL: le jungler de la FURIA suspendu et amendé, victoire quand même face à Vivo Keyd Stars'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-08-04T08:00:00.000Z'

const COVER_IMAGE =
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/vi/skins/base/images/vi_splash_centered_0.jpg'

const articles = [
  {
    title: "CBLOL Split 2 2026 : le jungler de la FURIA suspendu et amendé, l'équipe balaie quand même Vivo Keyd Stars",
    slug: 'cblol-split2-2026-furia-tatu-suspension-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: "Pedro \"Tatu\" Seixas a été suspendu un match et amendé par Riot Games pour communication irrégulière en sélection de champions. Privée de son jungler, la FURIA a quand même battu Vivo Keyd Stars 2-0.",
    sourceUrl: 'https://www.sheepesports.com/en/all/articles/tatu-benched-for-external-communication-during-champion-select/en',
    tags: [{ tag: 'CBLOL' }, { tag: 'Esports' }, { tag: 'FURIA' }],
    content: [
      { type: 'p', children: [{ text: "La CBLOL Split 2 2026 a connu cette semaine une affaire disciplinaire inédite : Pedro \"Tatu\" Seixas, jungler de la FURIA, a été suspendu et lourdement sanctionné par Riot Games." }] },
      { type: 'h2', children: [{ text: "Une communication irrégulière en sélection de champions" }] },
      { type: 'p', children: [{ text: "Selon Riot Games, Tatu a enfreint le règlement de la ligue et le Code de conduite mondial des Esports en échangeant, via le chat du serveur de tournoi, avec une personne extérieure au plateau lors de la sélection de champions précédant le match contre la LOS, le 25 juillet. La conversation aurait porté sur le build d'un champion, ce qui constitue un avantage indu selon la ligue." }] },
      { type: 'h2', children: [{ text: "Suspension et amende" }] },
      { type: 'p', children: [{ text: "La sanction est double : une suspension d'un match et une amende de 10 000 R$ (environ 1 900 dollars). Résultat, Tatu n'a pas pu disputer la rencontre du samedi 1er août face à Vivo Keyd Stars, comptant pour la deuxième journée du Split 2. La FURIA a obtenu de Riot Games l'autorisation d'aligner un remplaçant d'urgence : son assistant-coach Lucas \"Luuukz\" Yudi a occupé le poste de jungler pour l'occasion." }] },
      { type: 'h2', children: [{ text: "Une victoire sans son titulaire" }] },
      { type: 'p', children: [{ text: "Privée de son jungler habituel, la FURIA n'a pourtant pas tremblé. L'équipe, championne en titre du split précédent, a balayé Vivo Keyd Stars 2-0, confirmant sa solidité collective malgré les circonstances. L'organisation a indiqué soutenir la décision de Riot Games et a lancé un accompagnement de conduite en interne pour encadrer son joueur." }] },
      { type: 'blockquote', children: [{ text: "L'épisode relance le débat sur les règles de communication en compétition, alors que la CBLOL Split 2 se poursuit avec des sanctions désormais scrutées de près par l'ensemble des organisations." }] },
    ],
  },
  {
    title: 'CBLOL Split 2 2026: FURIA jungler suspended and fined, team still sweeps Vivo Keyd Stars',
    slug: 'cblol-split2-2026-furia-tatu-suspension-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: 'Pedro "Tatu" Seixas was suspended for one match and fined by Riot Games for improper communication during Champion Select. Without their jungler, FURIA still beat Vivo Keyd Stars 2-0.',
    sourceUrl: 'https://www.sheepesports.com/en/all/articles/tatu-benched-for-external-communication-during-champion-select/en',
    tags: [{ tag: 'CBLOL' }, { tag: 'Esports' }, { tag: 'FURIA' }],
    content: [
      { type: 'p', children: [{ text: 'CBLOL Split 2 2026 saw an unusual disciplinary case this week: FURIA jungler Pedro "Tatu" Seixas was suspended and heavily sanctioned by Riot Games.' }] },
      { type: 'h2', children: [{ text: 'Improper communication during Champion Select' }] },
      { type: 'p', children: [{ text: 'According to Riot Games, Tatu violated league rules and the Global Esports Code of Conduct by exchanging messages, through the tournament server chat, with a person outside the stage during Champion Select ahead of the match against LOS on July 25. The conversation reportedly involved a champion build, which the league ruled constituted an undue advantage.' }] },
      { type: 'h2', children: [{ text: 'Suspension and fine' }] },
      { type: 'p', children: [{ text: 'The punishment was twofold: a one-match suspension and a fine of R$10,000 (roughly $1,900). As a result, Tatu missed the Saturday, August 1 match against Vivo Keyd Stars in the second round of Split 2. Riot Games authorized FURIA to field an emergency substitute, with assistant coach Lucas "Luuukz" Yudi stepping into the jungle role for the match.' }] },
      { type: 'h2', children: [{ text: 'A win without their starter' }] },
      { type: 'p', children: [{ text: "Despite missing their regular jungler, FURIA did not falter. The reigning champions from the previous split swept Vivo Keyd Stars 2-0, showing collective depth despite the circumstances. The organization said it supports Riot's decision and has begun internal conduct coaching for the player." }] },
      { type: 'blockquote', children: [{ text: 'The episode reignites debate around in-game communication rules as CBLOL Split 2 continues, with penalties now under closer scrutiny across the league.' }] },
    ],
  },
  {
    title: 'CBLOL Split 2 2026: el jungla de FURIA suspendido y multado, el equipo arrasa igual a Vivo Keyd Stars',
    slug: 'cblol-split2-2026-furia-tatu-suspension-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'other',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER_IMAGE,
    excerpt: 'Pedro "Tatu" Seixas fue suspendido un partido y multado por Riot Games por comunicación irregular durante la selección de campeones. Sin su jungla, FURIA igual venció 2-0 a Vivo Keyd Stars.',
    sourceUrl: 'https://www.sheepesports.com/en/all/articles/tatu-benched-for-external-communication-during-champion-select/en',
    tags: [{ tag: 'CBLOL' }, { tag: 'Esports' }, { tag: 'FURIA' }],
    content: [
      { type: 'p', children: [{ text: 'La CBLOL Split 2 2026 vivió esta semana un caso disciplinario inédito: Pedro "Tatu" Seixas, jungla de FURIA, fue suspendido y sancionado con dureza por Riot Games.' }] },
      { type: 'h2', children: [{ text: 'Comunicación irregular durante la selección de campeones' }] },
      { type: 'p', children: [{ text: 'Según Riot Games, Tatu infringió el reglamento de la liga y el Código de Conducta Global de Esports al comunicarse, a través del chat del servidor de torneo, con una persona ajena al escenario durante la selección de campeones previa al partido contra LOS, el 25 de julio. La conversación habría tratado sobre el build de un campeón, lo que la liga consideró una ventaja indebida.' }] },
      { type: 'h2', children: [{ text: 'Suspensión y multa' }] },
      { type: 'p', children: [{ text: 'La sanción fue doble: suspensión de un partido y multa de 10.000 R$ (unos 1.900 dólares). Como resultado, Tatu no pudo disputar el encuentro del sábado 1 de agosto ante Vivo Keyd Stars, correspondiente a la segunda jornada del Split 2. Riot Games autorizó a FURIA a inscribir un suplente de emergencia: su asistente técnico Lucas "Luuukz" Yudi ocupó el puesto de jungla para la ocasión.' }] },
      { type: 'h2', children: [{ text: 'Una victoria sin su titular' }] },
      { type: 'p', children: [{ text: 'Pese a la ausencia de su jungla habitual, FURIA no flaqueó. El equipo, campeón vigente del split anterior, barrió 2-0 a Vivo Keyd Stars, confirmando su solidez colectiva pese a las circunstancias. La organización declaró apoyar la decisión de Riot Games e inició un acompañamiento interno de conducta con el jugador.' }] },
      { type: 'blockquote', children: [{ text: 'El episodio reaviva el debate sobre las reglas de comunicación en competición, mientras la CBLOL Split 2 continúa con sanciones ahora bajo la mirada atenta de todas las organizaciones.' }] },
    ],
  },
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const a of articles) {
    const ex = await payload.find({ collection: 'news', where: { slug: { equals: a.slug } } })
    if (ex.docs.length > 0) {
      console.log(`→ skip ${a.slug}`)
      continue
    }
    await payload.create({ collection: 'news', data: a as any })
    console.log(`✅ ${a.locale.toUpperCase()} — ${a.title}`)
  }
}
