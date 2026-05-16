import type { MigrationModule } from './runner'

export const id = '045-lpl-split2-semaine7-standings-blg'
export const description = 'LPL Split 2 2026 — Semaine 7 : BLG domine le groupe Ascend, duel Nirvana entre EDG et LNG'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-16T08:00:00.000Z'
const CDN = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters'
const COVER = `${CDN}/zeri/skins/base/images/zeri_splash_centered_0.jpg`

const articles = [
  {
    title: 'LPL Split 2 2026 — Semaine 7 : BLG s\'envole vers les playoffs, duel clé en groupe Nirvana',
    slug: 'lpl-2026-split2-semaine7-blg-playoffs-nirvana-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: 'BLG domine le groupe Ascend avec un bilan de 11-2 en semaine 7 du LPL Split 2 2026, tandis qu\'EDG et LNG se disputent la tête du groupe Nirvana avec les playoffs en ligne de mire.',
    sourceUrl: 'https://lolesports.com/tournament/113503620829714518',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'BLG' }, { tag: 'EDG' }, { tag: 'LNG' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'La saison régulière du LPL Split 2 2026 entre dans sa dernière ligne droite. En cette semaine 7, les enjeux sont maximaux : la course aux playoffs direct et la qualification pour le MSI 2026 se jouent maintenant. Bilibili Gaming (BLG) confirme sa domination écrasante du groupe Ascend avec un bilan impressionnant de 11 victoires pour seulement 2 défaites.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'BLG intouchable dans le groupe Ascend' }],
      },
      {
        type: 'p',
        children: [{ text: 'Portée par l\'ADC coréen Viper et le jungler Xun, l\'équipe de Bilibili Gaming enchaîne les victoires depuis le début du split. Avec 11 victoires en 13 matchs, BLG s\'est déjà assuré une place en playoffs en tant que tête de série. JD Gaming (8-5) et Anyone\'s Legend (8-5) partagent la deuxième place, talonné par Top Esports (8-6) qui lutte pour rester dans le top 4 et éviter les play-ins.' }],
      },
      {
        type: 'p',
        children: [{ text: 'Plus bas dans le classement, la situation est contrastée. Ninjas in Pyjamas (6-7) et Weibo Gaming (6-8) se battent pour le top 6, tandis qu\'Invictus Gaming (5-8) est sous pression. Au fond du classement, Team WE affiche un bilan catastrophique de 1-12 et n\'a plus aucune chance de qualification.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Groupe Nirvana : EDG et LNG en tête, TT sous pression' }],
      },
      {
        type: 'p',
        children: [{ text: 'Dans le groupe Nirvana, les six équipes jouent en format round-robin simple. LNG Esports (4-1) et EDward Gaming (3-1) occupent les deux premières places qui ouvrent les portes des play-ins. LGD Gaming (3-2) reste en embuscade. ThunderTalk Gaming (2-2) affronte justement EDG ce samedi 16 mai dans un match crucial : une défaite de TT compliquerait sérieusement ses chances de qualification.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Les enjeux : MSI 2026 à la clé' }],
      },
      {
        type: 'p',
        children: [{ text: 'Le LPL Split 2 détermine les équipes qualifiées pour le Mid-Season Invitational 2026, le second grand rendez-vous international de la saison. Les quatre premières équipes du groupe Ascend accèdent directement aux playoffs, tandis que les équipes restantes passent par des play-ins. Dans ce contexte, chaque point est précieux et les duels de cette semaine 7 pourraient redistribuer plusieurs cartes avant la fin de la saison régulière.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'BLG est en route vers un second titre de champion LPL consécutif. Mais JDG, TES et AL n\'ont pas dit leur dernier mot en playoffs.' }],
      },
    ],
  },
  {
    title: 'LPL Split 2 2026 — Week 7: BLG Dominates Group Ascend, Nirvana Battle Heats Up',
    slug: 'lpl-2026-split2-week7-blg-playoffs-nirvana-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: 'BLG leads Group Ascend with an 11-2 record in Week 7 of LPL Split 2 2026, while EDG and LNG fight for Group Nirvana supremacy with MSI 2026 qualification on the line.',
    sourceUrl: 'https://lolesports.com/tournament/113503620829714518',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'BLG' }, { tag: 'EDG' }, { tag: 'LNG' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'The LPL Split 2 2026 regular season is entering its final stretch. Week 7 brings critical matches as teams fight for direct playoff berths and MSI 2026 qualification. Bilibili Gaming (BLG) continues their dominant run atop Group Ascend with an impressive 11-2 record, establishing themselves as the clear number-one seed heading into the playoffs.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'BLG Unstoppable in Group Ascend' }],
      },
      {
        type: 'p',
        children: [{ text: 'Powered by Korean ADC Viper and jungler Xun, Bilibili Gaming has been a cut above the rest this split. With 11 wins in 13 matches, BLG has already secured a playoff spot as the top seed. JD Gaming (8-5) and Anyone\'s Legend (8-5) are tied for second place, with Top Esports (8-6) fighting to stay in the top four and avoid the play-ins. The race for those four direct playoff spots is tight at the top.' }],
      },
      {
        type: 'p',
        children: [{ text: 'Lower in the standings, Ninjas in Pyjamas (6-7) and Weibo Gaming (6-8) are scrapping for playoff contention, while Invictus Gaming (5-8) faces serious pressure. At the bottom, Team WE has collapsed to a 1-12 record and is mathematically eliminated from playoff contention.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Group Nirvana: EDG and LNG Lead the Pack' }],
      },
      {
        type: 'p',
        children: [{ text: 'In Group Nirvana, which plays a single round-robin format, LNG Esports (4-1) and EDward Gaming (3-1) occupy the top two positions that lead to the play-ins. LGD Gaming (3-2) remains in contention. ThunderTalk Gaming (2-2) faces EDG on Saturday May 16th in a decisive showdown — a loss for TT would severely damage their chances of advancing to the play-in stage.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'What\'s at Stake: MSI 2026 Qualification' }],
      },
      {
        type: 'p',
        children: [{ text: 'The LPL Split 2 determines which teams will represent China at the Mid-Season Invitational 2026, the second major international event of the year. The top four Group Ascend teams earn direct playoff spots, while the rest compete through play-ins. Every game matters as Week 7 could reshape the standings significantly before the regular season concludes.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'BLG looks primed for back-to-back LPL titles, but JDG, TES, and AL will have something to say about it in the playoffs.' }],
      },
    ],
  },
  {
    title: 'LPL Split 2 2026 — Semana 7: BLG domina el Grupo Ascend, batalla decisiva en el Grupo Nirvana',
    slug: 'lpl-2026-split2-semana7-blg-playoffs-nirvana-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: 'BLG lidera el Grupo Ascend con un récord de 11-2 en la Semana 7 del LPL Split 2 2026, mientras EDG y LNG pelean por la cima del Grupo Nirvana con la clasificación para el MSI 2026 en juego.',
    sourceUrl: 'https://lolesports.com/tournament/113503620829714518',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'BLG' }, { tag: 'EDG' }, { tag: 'LNG' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'La temporada regular del LPL Split 2 2026 llega a su recta final. La Semana 7 trae partidos decisivos donde los equipos luchan por plazas directas en playoffs y la clasificación para el MSI 2026. Bilibili Gaming (BLG) continúa su dominio arrollador en el Grupo Ascend con un impresionante récord de 11 victorias y apenas 2 derrotas.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'BLG imparable en el Grupo Ascend' }],
      },
      {
        type: 'p',
        children: [{ text: 'Liderado por el ADC coreano Viper y el jungler Xun, Bilibili Gaming ha sido un escalón por encima del resto durante todo el split. Con 11 victorias en 13 partidos, BLG ya ha asegurado su plaza en playoffs como cabeza de serie número uno. JD Gaming (8-5) y Anyone\'s Legend (8-5) comparten el segundo lugar, con Top Esports (8-6) luchando por mantenerse en el top 4 y evitar los play-ins.' }],
      },
      {
        type: 'p',
        children: [{ text: 'En la parte baja de la clasificación, Ninjas in Pyjamas (6-7) y Weibo Gaming (6-8) pelean por la contención en playoffs, mientras Invictus Gaming (5-8) está bajo presión. En el fondo de la tabla, Team WE ha colapsado hasta un récord de 1-12 y está matemáticamente eliminado de la competencia por playoffs.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Grupo Nirvana: EDG y LNG lideran, TT bajo presión' }],
      },
      {
        type: 'p',
        children: [{ text: 'En el Grupo Nirvana, que juega en formato round-robin simple, LNG Esports (4-1) y EDward Gaming (3-1) ocupan las dos primeras posiciones que abren las puertas de los play-ins. LGD Gaming (3-2) permanece en la lucha. ThunderTalk Gaming (2-2) se enfrenta precisamente a EDG este sábado 16 de mayo en un choque decisivo: una derrota de TT complicaría seriamente sus opciones de clasificación.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Lo que está en juego: la clasificación para el MSI 2026' }],
      },
      {
        type: 'p',
        children: [{ text: 'El LPL Split 2 determina qué equipos representarán a China en el Mid-Season Invitational 2026, el segundo gran torneo internacional del año. Los cuatro mejores equipos del Grupo Ascend obtienen plazas directas en playoffs, mientras el resto competirá a través de los play-ins. En este contexto, cada victoria cuenta y los duelos de esta semana 7 podrían redistribuir varias posiciones antes de que concluya la temporada regular.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'BLG apunta a su segundo título LPL consecutivo, pero JDG, TES y AL tienen mucho que decir en los playoffs.' }],
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
