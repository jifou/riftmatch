import type { MigrationModule } from './runner'

export const id = '059-lpl-split2-2026-knights-rivals-playin'
export const description = 'LPL Split 2 2026 — Play-In Knights Rivals : WE, LNG, iG et TT ouvrent le feu le 23 mai'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-23T08:00:00.000Z'

const articles = [
  {
    title: 'LPL Split 2 2026 : les Play-In Knights Rivals débutent ce 23 mai — WE, LNG, iG et TT en lice',
    slug: 'lpl-split2-2026-knights-rivals-playin-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg',
    excerpt:
      'Les Play-In du LPL Split 2 2026 (Knights Rivals) s\'ouvrent ce 23 mai avec deux BO5 au programme : Team WE face à LNG Esports et Invictus Gaming contre ThunderTalk Gaming. Quatre places en playoffs à décrocher sur deux jours.',
    sourceUrl: 'https://lolesports.com/en-US/tournament/115615907996665826',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'WE' }, { tag: 'LNG' }, { tag: 'iG' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'La phase régulière du LPL Split 2 2026 s\'est achevée dimanche 18 mai avec BiliBili Gaming au sommet du Groupe Ascend. Quatre équipes — BLG, JD Gaming, Top Esports et Anyone\'s Legend — ont décroché leur qualification directe pour le bracket principal des playoffs. Mais pour les huit autres, la route passe par les Play-In baptisés "Knights Rivals", qui débutent ce samedi 23 mai.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Programme du 23 mai : WE vs LNG et iG vs ThunderTalk' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Le coup d\'envoi des Play-In est donné ce matin avec Team WE, classé dans le bas du Groupe Ascend, qui accueille LNG Esports, meilleure équipe du Groupe Nirvana. En début d\'après-midi, Invictus Gaming et ThunderTalk Gaming s\'affrontent dans un deuxième BO5 décisif. Les deux vainqueurs valident leur billet pour les playoffs ; les deux perdants rentrent chez eux. Format éliminatoire direct : pas de deuxième chance.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Demain 24 mai : NiP vs EDG et Weibo Gaming vs LGD' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'La deuxième journée des Play-In opposera Ninjas in Pyjamas à EDward Gaming et Weibo Gaming à LGD Gaming. NiP, surprenant 5e du Groupe Ascend malgré une saison régulière compliquée, défie une équipe EDG qui a dominé le Groupe Nirvana. De son côté, Weibo Gaming — armé d\'un roster construit pour la reconquête — sera favori face à LGD. À l\'issue de ces quatre matchs, le bracket complet des playoffs LPL Split 2 2026 sera connu.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Enjeux : playoffs et qualification internationale' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Le LPL Split 2 sert de qualification principale pour le Mid-Season Invitational 2026. Les deux finalistes du bracket playoffs décrocheront leur place à Daejeon, Corée du Sud. Pour les équipes en Play-In, chaque victoire compte double : accéder aux playoffs, c\'est rester dans la course au MSI. Tous les matchs des Knights Rivals se jouent en best-of-five avec le format Hard Fearless Draft — aucun champion ne peut être rejoué par le même joueur au sein d\'une même série.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Quatre places, huit équipes, deux jours : les Play-In Knights Rivals du LPL Split 2 2026 s\'annoncent comme l\'un des moments les plus intenses de la saison. WE, LNG, iG et TT ouvrent le bal ce 23 mai.',
          },
        ],
      },
    ],
  },
  {
    title: 'LPL Split 2 2026: Knights Rivals Play-In Kicks Off — WE, LNG, iG and TT Battle for Playoff Spots',
    slug: 'lpl-split2-2026-knights-rivals-playin-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg',
    excerpt:
      'The LPL Split 2 2026 Play-In stage, known as Knights Rivals, gets underway on May 23 with two BO5 matches: Team WE vs LNG Esports and Invictus Gaming vs ThunderTalk Gaming. Four playoff spots are up for grabs over two days.',
    sourceUrl: 'https://lolesports.com/en-US/tournament/115615907996665826',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'WE' }, { tag: 'LNG' }, { tag: 'iG' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'With the LPL Split 2 2026 regular season concluded on May 18, BiliBili Gaming clinched first place in Group Ascend. Four teams — BLG, JD Gaming, Top Esports, and Anyone\'s Legend — secured direct seeds into the main playoff bracket. The remaining eight teams now face the "Knights Rivals" Play-In stage, which begins today, Saturday May 23.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'May 23 Schedule: WE vs LNG and iG vs ThunderTalk' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'The Play-In opens with Team WE — who finished in the lower half of Group Ascend — taking on LNG Esports, the strongest team out of Group Nirvana. Later in the day, Invictus Gaming and ThunderTalk Gaming meet in the second BO5 of the day. Both winners advance directly to the playoffs bracket; both losers are eliminated. There is no second chance in this single-elimination format.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'May 24: NiP vs EDG and Weibo Gaming vs LGD' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Day two of the Knights Rivals brings Ninjas in Pyjamas against EDward Gaming, and Weibo Gaming against LGD Gaming. NiP, a surprise fifth-place finisher in Group Ascend, take on EDG who impressed in Group Nirvana. Weibo Gaming, who built a stacked roster this offseason with the addition of players like Elk and Jiejie, enter as favorites against LGD. After all four matches, the full eight-team playoff bracket will be set.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'What\'s at Stake: Playoffs and International Qualification' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'LPL Split 2 2026 serves as the primary qualification event for the Mid-Season Invitational 2026. The two finalists of the playoffs bracket will represent the LPL at MSI in Daejeon, South Korea. For Play-In teams, winning now means staying alive in the chase for an international berth. All matches are played in best-of-five series under Hard Fearless Draft rules — no champion can be repeated by the same player within a series, demanding exceptional strategic depth from every team.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Four spots. Eight teams. Two days. The Knights Rivals Play-In is the most intense stretch of the LPL Split 2 2026 season — and it starts today with WE vs LNG and iG vs ThunderTalk.',
          },
        ],
      },
    ],
  },
  {
    title: 'LPL Split 2 2026: Comienzan los Play-In Knights Rivals — WE, LNG, iG y TT buscan su plaza en playoffs',
    slug: 'lpl-split2-2026-knights-rivals-playin-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg',
    excerpt:
      'Los Play-In del LPL Split 2 2026 (Knights Rivals) comienzan el 23 de mayo con dos BO5: Team WE vs LNG Esports e Invictus Gaming vs ThunderTalk Gaming. Cuatro plazas en playoffs se deciden en dos días.',
    sourceUrl: 'https://lolesports.com/en-US/tournament/115615907996665826',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'WE' }, { tag: 'LNG' }, { tag: 'iG' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'La fase regular del LPL Split 2 2026 concluyó el 18 de mayo con BiliBili Gaming coronándose en el Grupo Ascend. Cuatro equipos — BLG, JD Gaming, Top Esports y Anyone\'s Legend — obtuvieron clasificación directa al bracket principal de los playoffs. El resto de los equipos deberán pasar por los Play-In "Knights Rivals", que arrancan este sábado 23 de mayo.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Programa del 23 de mayo: WE vs LNG e iG vs ThunderTalk' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'La jornada inaugural enfrenta a Team WE — clasificado en la parte baja del Grupo Ascend — con LNG Esports, el equipo más fuerte del Grupo Nirvana. Por la tarde, Invictus Gaming y ThunderTalk Gaming se miden en un segundo BO5 decisivo. Los dos ganadores se clasifican directamente a los playoffs; los dos perdedores quedan eliminados. Es un formato de eliminación directa sin segunda oportunidad.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Mañana, 24 de mayo: NiP vs EDG y Weibo Gaming vs LGD' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'El segundo día de los Knights Rivals pone a Ninjas in Pyjamas frente a EDward Gaming, y a Weibo Gaming contra LGD Gaming. NiP, sorprendente quinto del Grupo Ascend, se mide a una EDG muy sólida en el Grupo Nirvana. Por su parte, Weibo Gaming — reforzados este invierno con jugadores como Elk y Jiejie — llegan como favoritos ante LGD. Tras estos cuatro partidos, el bracket completo de los playoffs del LPL Split 2 2026 quedará definido.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Lo que está en juego: playoffs y clasificación internacional' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'El LPL Split 2 2026 es el principal torneo de clasificación para el Mid-Season Invitational 2026. Los dos finalistas del bracket de playoffs representarán al LPL en el MSI de Daejeon, Corea del Sur. Para los equipos que juegan los Play-In, ganar hoy significa mantenerse vivos en la carrera por una plaza internacional. Todos los enfrentamientos se juegan al mejor de cinco bajo el formato Hard Fearless Draft: ningún jugador puede repetir campeón dentro de la misma serie, lo que exige una preparación estratégica excepcional.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Cuatro plazas, ocho equipos, dos días: los Play-In Knights Rivals son el momento más intenso del LPL Split 2 2026, y arrancan este 23 de mayo con WE vs LNG e iG vs ThunderTalk.',
          },
        ],
      },
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
