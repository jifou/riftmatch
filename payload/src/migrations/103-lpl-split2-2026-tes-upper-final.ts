import type { MigrationModule } from './runner'

export const id = '103-lpl-split2-2026-tes-upper-final'
export const description = 'LPL Split 2 2026 — TES 3-0 WE, Upper Bracket Final : TES qualifié pour MSI 2026, Grande Finale le 14 juin'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-10T08:00:00.000Z'

const articles = [
  {
    title: "LPL Split 2 2026 : Top Esports écrase Team WE 3-0 et se qualifie pour le MSI 2026",
    slug: 'lpl-split2-2026-tes-upper-final-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_0.jpg',
    excerpt: "Top Esports a dominé Team WE 3-0 le 7 juin dans la finale de l'Upper Bracket LPL Split 2 2026. TES file directement en Grande Finale le 14 juin et valide sa place au MSI 2026.",
    sourceUrl: 'https://lol.fandom.com/wiki/LPL/2026_Season/Split_2_Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'Playoffs' }, { tag: 'TES' }, { tag: 'MSI 2026' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Top Esports a confirmé leur statut de favori numéro un de la LPL Split 2 2026 en sweepant Team WE 3-0 dans la finale de l'Upper Bracket le 7 juin. Ce résultat envoie TES directement en Grande Finale, prévue le 14 juin, et valide leur qualification pour le Mid-Season Invitational 2026. WE, qui avait réalisé l'une des plus belles histoires de ces playoffs, est relégué dans le Lower Bracket.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "TES : une domination sans partage" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le sweep 3-0 de Top Esports face à Team WE illustre la supériorité de l'équipe tout au long de ces playoffs. TES avait déjà écarté JD Gaming 3-1 en quart de finale, et leur performance contre WE confirme qu'ils n'ont laissé aucune chance à leurs adversaires dans l'Upper Bracket. L'équipe n'a pas perdu une seule série dans ces playoffs et aborde la finale avec une avance considérable : TES attendra confortablement le vainqueur de la finale du Lower Bracket, fixée au 13 juin.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "WE toujours en vie, BLG également" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Malgré ce revers 3-0, Team WE reste en course. L'équipe, qualifiée via les play-ins après une saison régulière difficile, avait enchaîné des victoires remarquables face à Bilibili Gaming (3-1), puis Anyone's Legend (3-0) avant d'atteindre la finale Upper Bracket. WE disputera la finale du Lower Bracket le 13 juin : une victoire leur offrirait une revanche face à TES le 14 juin. Bilibili Gaming, de son côté, a éliminé Anyone's Legend 3-0 le 8 juin et reste également en lice.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "TES est qualifié pour le MSI 2026 et attend en finale. La finale du Lower Bracket se joue le 13 juin, et la Grande Finale LPL Split 2 2026 est prévue le 14 juin.",
          },
        ],
      },
    ],
  },
  {
    title: "LPL Split 2 2026: Top Esports sweeps Team WE 3-0, qualifies for MSI 2026",
    slug: 'lpl-split2-2026-tes-upper-final-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_0.jpg',
    excerpt: "Top Esports swept Team WE 3-0 on June 7 in the LPL Split 2 2026 Upper Bracket Final, securing a spot in the Grand Final on June 14 and qualifying for MSI 2026.",
    sourceUrl: 'https://lol.fandom.com/wiki/LPL/2026_Season/Split_2_Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'Playoffs' }, { tag: 'TES' }, { tag: 'MSI 2026' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Top Esports proved they are the undisputed best team in the LPL Split 2 2026 playoffs, sweeping Team WE 3-0 in the Upper Bracket Final on June 7. The result sends TES directly to the Grand Final on June 14 and confirms their qualification for the Mid-Season Invitational 2026. Team WE, who had one of the most remarkable playoff runs in recent LPL history, now drops to the Lower Bracket.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "TES: Undefeated through the Upper Bracket" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Top Esports have not dropped a single series in these playoffs. They eliminated JD Gaming 3-1 in the quarterfinals and now followed that up with a dominant 3-0 sweep over Team WE. TES will now rest and wait for the Lower Bracket Final on June 13, where they will learn the identity of their opponent for the Grand Final on June 14.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "WE's Cinderella run continues in the Lower Bracket" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Despite the 3-0 loss, Team WE are still alive in the tournament. The squad entered the main playoffs from the play-in stage following a tough regular season, yet still managed victories over Bilibili Gaming (3-1) and Anyone's Legend (3-0) before reaching the Upper Bracket Final. WE will compete in the Lower Bracket Final on June 13 for a chance to earn a Grand Final rematch against TES. Bilibili Gaming also remains in contention after eliminating Anyone's Legend 3-0 on June 8.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "TES is through to the Grand Final and heading to MSI 2026. The Lower Bracket Final is set for June 13, with the LPL Split 2 Grand Final on June 14.",
          },
        ],
      },
    ],
  },
  {
    title: "LPL Split 2 2026: Top Esports arrasa a Team WE 3-0 y se clasifica para el MSI 2026",
    slug: 'lpl-split2-2026-tes-upper-final-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_0.jpg',
    excerpt: "Top Esports barrió a Team WE 3-0 el 7 de junio en la Final del Upper Bracket de la LPL Split 2 2026, asegurando su plaza en la Gran Final del 14 de junio y su clasificación para el MSI 2026.",
    sourceUrl: 'https://lol.fandom.com/wiki/LPL/2026_Season/Split_2_Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'Playoffs' }, { tag: 'TES' }, { tag: 'MSI 2026' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Top Esports ha reafirmado su posición como el mejor equipo de la LPL Split 2 2026 al barrer a Team WE 3-0 en la Final del Upper Bracket el 7 de junio. El resultado manda a TES directamente a la Gran Final, fijada para el 14 de junio, y confirma su clasificación para el Mid-Season Invitational 2026. Team WE, protagonista de una de las remontadas más espectaculares de estos playoffs, cae al Lower Bracket.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "TES: una dominación total en el Upper Bracket" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Top Esports no ha perdido ninguna serie en estos playoffs. Tras eliminar a JD Gaming 3-1 en cuartos de final, completaron otro barrido dominante contra Team WE. TES esperará el resultado de la Final del Lower Bracket el 13 de junio para conocer a su rival en la Gran Final del 14 de junio.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "WE sigue vivo; BLG también en carrera" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "A pesar del 3-0, Team WE no ha sido eliminado. El equipo llegó al cuadro principal desde la fase previa tras una temporada regular complicada, y logró victorias ante Bilibili Gaming (3-1) y Anyone's Legend (3-0) antes de alcanzar la Final del Upper Bracket. WE disputará la Final del Lower Bracket el 13 de junio en busca de una revancha contra TES. Bilibili Gaming también sigue en competición tras eliminar a Anyone's Legend 3-0 el 8 de junio.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "TES está clasificado para el MSI 2026 y espera en la Gran Final. La Final del Lower Bracket es el 13 de junio; la Gran Final LPL Split 2 2026 se disputa el 14 de junio.",
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
