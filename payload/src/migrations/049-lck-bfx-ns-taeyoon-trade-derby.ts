import type { MigrationModule } from './runner'

export const id = '049-lck-bfx-ns-taeyoon-trade-derby'
export const description = 'LCK Rounds 1-2 2026 Semaine 7 — BFX s\'impose 2-0 face à NS, Taeyoon humilie son ancienne équipe'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-17T08:00:00.000Z'
const COVER = 'https://img.youtube.com/vi/wfneDl8KDKc/maxresdefault.jpg'

const articles = [
  {
    title: 'BFX écrase NS 2-0 : Taeyoon passe un message à son ancienne équipe',
    slug: 'bfx-bat-ns-2-0-taeyoon-derby-echanges-lck-2026-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: 'BNK FearX a dominé Nongshim RedForce 2-0 ce samedi en semaine 7 de la LCK Rounds 1-2 2026, avec un Taeyoon impérial face à son ancienne équipe dans ce derby des équipes échangées.',
    sourceUrl: 'https://www.invenglobal.com/articles/21923/ill-show-you-who-you-let-go',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'BFX' }, { tag: 'Nongshim' }, { tag: 'Taeyoon' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'La semaine 7 de la LCK 2026 Rounds 1-2 a offert l\'un des matchs les plus attendus du split ce samedi 16 mai au LoL Park de Jongno, à Séoul : BNK FearX (BFX) a écrasé Nongshim RedForce 2-0 dans ce que la communauté coréenne avait surnommé le "derby des échangés". Au cœur du spectacle : Kim \'Taeyoon\' Tae-yoon, transféré de Nongshim à BFX fin avril dans le cadre du surprenant échange impliquant Diable, et qui affrontait pour la première fois ses anciens coéquipiers.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Le contexte : un échange sous haute tension' }],
      },
      {
        type: 'p',
        children: [{ text: 'Fin avril, la LCK avait été secouée par un trade inattendu : Diable, l\'ADC de BFX mis à l\'écart après un incident disciplinaire, était envoyé chez Nongshim RedForce en échange du top laner Taeyoon. Une transaction vécue difficilement par le principal concerné. "C\'était un trade que je ne voulais pas, mais je l\'ai accepté. Je me suis présenté avec la mentalité de montrer à Nongshim ce qu\'ils ont laissé partir", avait déclaré Taeyoon avant le match.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'BFX sans pitié, Taeyoon au sommet' }],
      },
      {
        type: 'p',
        children: [{ text: 'Sur le Rift, BFX n\'a laissé aucune chance à NS dans les deux manches. Taeyoon a livré une performance dominante en top lane, contrôlant son couloir avec une précision chirurgicale et pesant lourd sur chaque teamfight décisif. BFX a pris le contrôle des objectifs dès la phase de mid-game dans les deux parties, enchaînant Baron et Elder Dragon pour fermer les rencontres sans trembler.' }],
      },
      {
        type: 'p',
        children: [{ text: 'À l\'issue de la victoire, Taeyoon n\'a pas caché ses émotions dans l\'interview d\'après-match. "Bien sûr, j\'étais content de gagner. Mais voir mes anciens coéquipiers avec qui j\'ai partagé tant de moments, c\'était difficile de contrôler mes émotions. Malgré tout, je suis heureux que nous ayons remporté ce match." Une réaction humaine et touchante, après une célébration devenue virale : Taeyoon avait jeté son ancien maillot de Nongshim sur le sol à la fin du match.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'Je voulais leur montrer ce qu\'ils ont laissé partir. Mission accomplie — BFX 2-0 NS, et Taeyoon prouve qu\'il avait tout à donner.' }],
      },
    ],
  },
  {
    title: 'BFX crushes NS 2-0: Taeyoon sends a message to his former team',
    slug: 'bfx-beats-ns-2-0-taeyoon-trade-derby-lck-2026-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: 'BNK FearX swept Nongshim RedForce 2-0 in Week 7 of LCK 2026 Rounds 1-2, with Taeyoon delivering a statement performance against his former team in the most anticipated trade derby of the split.',
    sourceUrl: 'https://www.invenglobal.com/articles/21923/ill-show-you-who-you-let-go',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'BFX' }, { tag: 'Nongshim' }, { tag: 'Taeyoon' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'Week 7 of LCK 2026 Rounds 1-2 delivered its most emotionally charged match on Saturday, May 16, at LoL Park in Jongno, Seoul: BNK FearX (BFX) swept Nongshim RedForce 2-0 in what the Korean community had dubbed the "swapped teams derby." At the center of it all was Kim \'Taeyoon\' Tae-yoon, traded from Nongshim to BFX at the end of April in the surprise deal involving ADC Diable — and facing his former teammates for the very first time.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'The backdrop: a trade no one saw coming' }],
      },
      {
        type: 'p',
        children: [{ text: 'The late-April trade shook the LCK: Diable, BFX\'s ADC who had been benched following a disciplinary incident, was sent to Nongshim in exchange for top laner Taeyoon. For Taeyoon, the move was painful. "It was a trade I didn\'t want. But I approached this match with the mindset of showing Nongshim exactly who they let go," he said ahead of the game.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'BFX dominant, Taeyoon at his best' }],
      },
      {
        type: 'p',
        children: [{ text: 'On the Rift, BFX showed no mercy in either game. Taeyoon delivered a dominant top lane performance, dictating his lane and making his presence felt in every key teamfight. BFX seized objective control early in both games, snowballing Baron and Elder Dragon into clean Nexus destructions with little resistance from Nongshim.' }],
      },
      {
        type: 'p',
        children: [{ text: 'In his post-game interview, Taeyoon didn\'t hold back his emotions. "Of course, I felt good when we won. But seeing my former teammates, whom I lived with, made it difficult to control my emotions for a moment. Still, I am happy that we won the match." His celebration — throwing his old Nongshim jersey to the floor at the end of the series — had already gone viral across Korean esports social media before the interview even aired.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: '"I\'ll show you who you let go." Taeyoon delivered — BFX 2-0 NS, and one of the split\'s most compelling storylines has its chapter one ending.' }],
      },
    ],
  },
  {
    title: 'BFX aplasta a NS 2-0: Taeyoon manda un mensaje a su ex equipo',
    slug: 'bfx-vence-ns-2-0-taeyoon-derby-traspasos-lck-2026-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: 'BNK FearX barrió a Nongshim RedForce 2-0 en la semana 7 de LCK Rounds 1-2 2026. Taeyoon fue el gran protagonista en su primer enfrentamiento contra su ex equipo tras el polémico traspaso.',
    sourceUrl: 'https://www.invenglobal.com/articles/21923/ill-show-you-who-you-let-go',
    tags: [{ tag: 'LoL' }, { tag: 'LCK' }, { tag: 'BFX' }, { tag: 'Nongshim' }, { tag: 'Taeyoon' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'La semana 7 de LCK 2026 Rounds 1-2 reservó su partido más esperado para el sábado 16 de mayo en el LoL Park de Jongno, Seúl: BNK FearX (BFX) aplastó a Nongshim RedForce 2-0 en el llamado "derby de los intercambiados". El gran protagonista fue Kim \'Taeyoon\' Tae-yoon, traspasado de Nongshim a BFX a finales de abril en el sorprendente intercambio con Diable, quien se enfrentaba por primera vez a sus ex compañeros.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'El contexto: un traspaso que nadie esperaba' }],
      },
      {
        type: 'p',
        children: [{ text: 'A finales de abril, la LCK se vio sacudida por un inesperado traspaso: Diable, el ADC de BFX apartado del equipo tras un incidente disciplinario, fue enviado a Nongshim RedForce a cambio del top laner Taeyoon. Para Taeyoon, la situación fue dolorosa. "Era un traspaso que no quería. Pero me enfrenté a este partido con la mentalidad de mostrarle a Nongshim exactamente quién han dejado marchar", declaró antes del encuentro.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'BFX sin piedad, Taeyoon en estado puro' }],
      },
      {
        type: 'p',
        children: [{ text: 'Sobre el Rift, BFX no dio ninguna oportunidad a NS en ninguna de las dos partidas. Taeyoon ofreció una actuación dominante en el carril superior, controlando su línea y siendo decisivo en todos los teamfights clave. BFX tomó el control de los objetivos desde el mid-game, encadenando Barón y Dragón Anciano para cerrar ambas partidas sin contemplaciones.' }],
      },
      {
        type: 'p',
        children: [{ text: 'En la entrevista posterior al partido, Taeyoon no pudo contener las emociones. "Por supuesto, me alegré cuando ganamos. Pero ver a mis ex compañeros, con quienes compartí tanto, me dificultó controlar mis emociones durante un momento. Aun así, estoy feliz de que hayamos ganado." Su celebración —lanzar al suelo su antigua camiseta de Nongshim— se hizo viral en las redes sociales de esports coreanas antes incluso de que terminara la entrevista.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: '"Os voy a mostrar lo que habéis dejado escapar." Taeyoon cumplió su palabra — BFX 2-0 NS, y uno de los mejores relatos del split tiene su primer capítulo cerrado.' }],
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
