import type { MigrationModule } from './runner'

export const id = '113-lpl-split2-2026-blg-champion'
export const description = 'LPL Split 2 2026 — BLG remporte le Grand Final 3-0 face à TES : troisième titre LPL consécutif'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-14T08:00:00.000Z'

const articles = [
  {
    title: "LPL Split 2 2026 : Bilibili Gaming écrase Top Esports 3-0 et remporte son 3e titre LPL consécutif",
    slug: 'lpl-split2-2026-blg-champion-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg',
    excerpt: "Bilibili Gaming s'impose 3-0 face à Top Esports en Grande Finale du LPL Split 2 2026 le 14 juin, décrochant un troisième titre LPL consécutif et consolidant leur statut de meilleure équipe de Chine.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LPL/2026/Split_2',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'BLG' }, { tag: 'MSI' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Le 14 juin 2026, Bilibili Gaming (BLG) a remporté la Grande Finale du LPL Split 2 2026 en balayant Top Esports Gaming (TES) 3-0. Bin (top), Xun (jungle), Knight (mid), Viper (ADC) et ON (support) ont livré une prestation dominante face au roster de TES composé de Zuian, Tian, Creme, JackeyLove et Fengyue. Ce sweep net conclut un parcours remarquable de BLG au travers du lower bracket, après un upset en début de playoffs." }],
      },
      {
        type: 'h2',
        children: [{ text: "Une domination historique" }],
      },
      {
        type: 'p',
        children: [{ text: "Ce titre est le troisième consécutif de Bilibili Gaming en LPL, et leur cinquième depuis le début de l'année 2024. L'équipe dispute sa quatrième finale consécutive, une série de régularité exceptionnelle qui n'a pas d'équivalent dans la scène chinoise contemporaine. Knight, fer de lance de BLG en position de mid laner, s'est encore distingué comme l'un des meilleurs joueurs au monde lors de cette campagne playoff." }],
      },
      {
        type: 'h2',
        children: [{ text: "Cap sur le MSI 2026" }],
      },
      {
        type: 'p',
        children: [{ text: "Bilibili Gaming rejoindra Top Esports au Mid-Season Invitational 2026, prévu du 28 juin au 12 juillet en Corée du Sud. Les deux équipes chinoises bénéficient d'une entrée directe en Bracket Stage, avantage obtenu grâce à la victoire de BLG au First Stand 2026. Cette double représentation LPL mettra à l'épreuve la hiérarchie mondiale face à G2 Esports (LEC), Hanwha Life Esports et T1 (LCK), ainsi que les champions des autres régions." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Trois titres LPL de suite, cinq depuis 2024 : Bilibili Gaming s'impose en maîtres incontestés de la Chine et visent le MSI 2026 en position de grande favorite." }],
      },
    ],
  },
  {
    title: "LPL Split 2 2026: Bilibili Gaming Sweep Top Esports 3-0 to Claim Third Straight LPL Title",
    slug: 'lpl-split2-2026-blg-champion-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg',
    excerpt: "Bilibili Gaming swept Top Esports 3-0 in the LPL Split 2 2026 Grand Final on June 14, securing their third consecutive LPL title and fifth championship since the start of 2024.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LPL/2026/Split_2',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'BLG' }, { tag: 'MSI' }],
    content: [
      {
        type: 'p',
        children: [{ text: "On June 14, 2026, Bilibili Gaming (BLG) claimed the LPL Split 2 2026 Grand Final with a dominant 3-0 sweep over Top Esports Gaming (TES). The BLG roster — Bin (top), Xun (jungle), Knight (mid), Viper (ADC), and ON (support) — delivered a commanding performance against TES's lineup of Zuian, Tian, Creme, JackeyLove, and Fengyue. The clean sweep caps an incredible lower bracket run from BLG, who were upset early in the playoffs." }],
      },
      {
        type: 'h2',
        children: [{ text: "Historic Dominance" }],
      },
      {
        type: 'p',
        children: [{ text: "This is BLG's third consecutive LPL title and their fifth championship since early 2024, making it their fourth consecutive grand final appearance. Such sustained excellence has no parallel in the modern Chinese competitive scene. Mid laner Knight once again cemented his status as one of the world's premier players with a standout playoff run that included several must-win performances from the lower bracket." }],
      },
      {
        type: 'h2',
        children: [{ text: "On to MSI 2026" }],
      },
      {
        type: 'p',
        children: [{ text: "Bilibili Gaming will join Top Esports at the 2026 Mid-Season Invitational, scheduled from June 28 to July 12 in South Korea. Both LPL teams receive a direct Bracket Stage entry, a privilege earned through BLG's First Stand 2026 victory. The two-team LPL presence at MSI sets up a high-stakes clash against G2 Esports (LEC), Hanwha Life Esports and T1 (LCK), and champions from other regions." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Three straight LPL titles, five since 2024: Bilibili Gaming head to MSI 2026 as the undisputed kings of China's competitive scene." }],
      },
    ],
  },
  {
    title: "LPL Split 2 2026: Bilibili Gaming aplasta a Top Esports 3-0 y logra su tercer título LPL consecutivo",
    slug: 'lpl-split2-2026-blg-champion-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg',
    excerpt: "Bilibili Gaming arrasó con Top Esports 3-0 en la Gran Final del LPL Split 2 2026 el 14 de junio, logrando su tercer título LPL consecutivo y quinto desde inicios de 2024.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/LPL/2026/Split_2',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'BLG' }, { tag: 'MSI' }],
    content: [
      {
        type: 'p',
        children: [{ text: "El 14 de junio de 2026, Bilibili Gaming (BLG) se coronó campeón de la Gran Final del LPL Split 2 2026 con un contundente 3-0 sobre Top Esports Gaming (TES). El roster de BLG — Bin (top), Xun (jungle), Knight (mid), Viper (ADC) y ON (support) — dominó de principio a fin frente a la alineación de TES formada por Zuian, Tian, Creme, JackeyLove y Fengyue. El barrido cierra un increíble recorrido por el lower bracket de BLG, que sufrió un upset al inicio de los playoffs." }],
      },
      {
        type: 'h2',
        children: [{ text: "Una dominación histórica" }],
      },
      {
        type: 'p',
        children: [{ text: "Este título es el tercero consecutivo de Bilibili Gaming en la LPL y el quinto desde principios de 2024, marcando su cuarta Gran Final consecutiva. Una consistencia sin precedentes en la escena china moderna. El mid laner Knight volvió a demostrar ser uno de los mejores jugadores del mundo con actuaciones cruciales desde el lower bracket." }],
      },
      {
        type: 'h2',
        children: [{ text: "Rumbo al MSI 2026" }],
      },
      {
        type: 'p',
        children: [{ text: "Bilibili Gaming se unirá a Top Esports en el Mid-Season Invitational 2026, previsto del 28 de junio al 12 de julio en Corea del Sur. Ambos equipos chinos tienen acceso directo al Bracket Stage gracias a la victoria de BLG en el First Stand 2026. Esta doble representación de la LPL se medirá ante G2 Esports (LEC), Hanwha Life Esports y T1 (LCK) y los campeones de otras regiones." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Tres títulos LPL consecutivos, cinco desde 2024: Bilibili Gaming llega al MSI 2026 como los reyes indiscutibles de la escena china." }],
      },
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
