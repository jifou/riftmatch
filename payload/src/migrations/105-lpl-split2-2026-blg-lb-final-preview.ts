import type { MigrationModule } from './runner'

export const id = '105-lpl-split2-2026-blg-lb-final-preview'
export const description = 'LPL Split 2 2026 — BLG survit en Lower Bracket (EDG 3-0, JDG 3-1, AL 3-0) : finale LB vs WE le 13 juin, TES attend en finale'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-06-11T08:00:00.000Z'

const articles = [
  {
    title: "LPL Split 2 2026 : BLG au bout du Lower Bracket — WE vs BLG en finale le 13 juin",
    slug: 'lpl-split2-2026-blg-lb-final-preview-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lpl' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg',
    excerpt: "Bilibili Gaming a éliminé trois adversaires en Lower Bracket (EDG 3-0, JDG 3-1, AL 3-0) et affronte Team WE le 13 juin pour une place en Grande Finale. TES attend le vainqueur le 14 juin.",
    sourceUrl: 'https://lol.fandom.com/wiki/LPL/2026_Season/Split_2_Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'Playoffs' }, { tag: 'BLG' }, { tag: 'WE' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Bilibili Gaming continue d'écrire l'une des plus belles histoires de ces playoffs LPL Split 2 2026. Après avoir été éliminés en Upper Bracket dès le premier tour par Team WE (1-3 le 30 mai), BLG a enchaîné trois victoires consécutives en Lower Bracket pour rester en lice : 3-0 face à EDward Gaming le 3 juin, 3-1 face à JD Gaming le 6 juin, et 3-0 face à Anyone's Legend le 8 juin.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Trois victoires, trois adversaires balayés" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le parcours de BLG en Lower Bracket illustre la profondeur et la régularité de l'équipe face à des adversaires de haut niveau. EDward Gaming (3-0) n'a pas résisté, JD Gaming (3-1) a mieux résisté mais a fini par céder, et Anyone's Legend (3-0), qui avait lui-même battu LGD Gaming 3-0 le 5 juin pour se qualifier, a été écarté sans appel le 8 juin. BLG a désormais remporté trois Best-of-5 consécutifs depuis le bas du tableau.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "WE vs BLG le 13 juin : une revanche aux enjeux immenses" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La finale du Lower Bracket, prévue le 13 juin au Gymnasium de l'Université des Sciences et Technologies Hua Zhong à Wuhan, opposera Team WE à Bilibili Gaming. C'est une revanche directe : c'est WE qui avait éliminé BLG 3-1 en Round 1 de l'Upper Bracket le 30 mai. Le vainqueur de ce duel affrontera Top Esports — invaincus dans ces playoffs — en Grande Finale le 14 juin. Les deux équipes ont prouvé leur capacité à gagner des séries serrées : WE a lui aussi survécu en Upper Bracket avant d'être sweepé 3-0 par TES, et BLG a montré une régularité exemplaire en Lower Bracket.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Finale Lower Bracket : WE vs BLG — 13 juin à Wuhan. Grande Finale LPL Split 2 2026 : TES vs le vainqueur — 14 juin.",
          },
        ],
      },
    ],
  },
  {
    title: "LPL Split 2 2026: BLG's Lower Bracket run continues — WE vs BLG Final on June 13",
    slug: 'lpl-split2-2026-blg-lb-final-preview-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lpl' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg',
    excerpt: "Bilibili Gaming have eliminated three opponents in the Lower Bracket (EDG 3-0, JDG 3-1, AL 3-0) and will face Team WE in the Lower Bracket Final on June 13 for a spot in the Grand Final against TES.",
    sourceUrl: 'https://lol.fandom.com/wiki/LPL/2026_Season/Split_2_Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'Playoffs' }, { tag: 'BLG' }, { tag: 'WE' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Bilibili Gaming are writing one of the most impressive Lower Bracket stories in LPL Split 2 2026. After losing to Team WE 1-3 in the Upper Bracket Round 1 on May 30, BLG have since reeled off three straight wins: a 3-0 sweep of EDward Gaming on June 3, a 3-1 victory over JD Gaming on June 6, and a dominant 3-0 elimination of Anyone's Legend on June 8.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Three wins, three opponents eliminated" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "BLG's Lower Bracket run demonstrates both their resilience and depth. EDward Gaming fell in a 3-0 sweep, JD Gaming pushed them to four games before losing 3-1, and Anyone's Legend — who had themselves beat LGD Gaming 3-0 on June 5 — were swept 3-0 by BLG on June 8. Three Best-of-5 series won from the bottom of the bracket is no small feat.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "WE vs BLG: a Lower Bracket Final rematch on June 13" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The Lower Bracket Final, set for June 13 at the Huazhong University of Science and Technology Optics Valley Gymnasium in Wuhan, is a direct rematch: it was Team WE who sent BLG to the Lower Bracket in the first place, beating them 3-1 on May 30. WE themselves were swept 3-0 by TES in the Upper Bracket Final on June 7 and now drop into this climactic Lower Bracket decider. The winner advances to face Top Esports — undefeated in these playoffs — in the Grand Final on June 14.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Lower Bracket Final: WE vs BLG on June 13 in Wuhan. LPL Split 2 2026 Grand Final: TES vs the winner on June 14.",
          },
        ],
      },
    ],
  },
  {
    title: "LPL Split 2 2026: BLG llega a la Final del Lower Bracket — WE vs BLG el 13 de junio",
    slug: 'lpl-split2-2026-blg-lb-final-preview-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lpl' as const,
    newsSubtype: 'resultats' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg',
    excerpt: "Bilibili Gaming ha eliminado tres rivales en el Lower Bracket (EDG 3-0, JDG 3-1, AL 3-0) y se enfrenta a Team WE el 13 de junio. El ganador juega la Gran Final contra TES el 14 de junio.",
    sourceUrl: 'https://lol.fandom.com/wiki/LPL/2026_Season/Split_2_Playoffs',
    tags: [{ tag: 'LoL' }, { tag: 'LPL' }, { tag: 'Playoffs' }, { tag: 'BLG' }, { tag: 'WE' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Bilibili Gaming está protagonizando una de las historias más destacadas del Lower Bracket en los playoffs de la LPL Split 2 2026. Tras caer ante Team WE 1-3 en el Round 1 del Upper Bracket el 30 de mayo, BLG ha encadenado tres victorias consecutivas: un barrido 3-0 a EDward Gaming el 3 de junio, una victoria 3-1 ante JD Gaming el 6 de junio y una contundente remontada 3-0 frente a Anyone's Legend el 8 de junio.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Tres victorias consecutivas desde el fondo del cuadro" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El recorrido de BLG en el Lower Bracket demuestra la solidez y profundidad del equipo. EDward Gaming cayó en un barrido 3-0, JD Gaming resistió hasta el cuarto juego antes de ceder 3-1, y Anyone's Legend — que había eliminado a LGD Gaming 3-0 el 5 de junio — fue eliminado 3-0 por BLG el 8 de junio. Tres series al mejor de cinco ganadas desde la parte baja del cuadro es un logro notable.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "WE vs BLG: una revancha en la Final del Lower Bracket" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La Final del Lower Bracket, programada para el 13 de junio en el Gymnasium de la Universidad de Ciencias y Tecnología Hua Zhong en Wuhan, es una revancha directa: fue Team WE quien envió a BLG al Lower Bracket al ganarles 3-1 el 30 de mayo. WE, por su parte, fue barrido 3-0 por TES en la Final del Upper Bracket el 7 de junio y cae ahora a este crucial enfrentamiento. El ganador avanzará para enfrentarse a Top Esports — invictos en estos playoffs — en la Gran Final del 14 de junio.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Final del Lower Bracket: WE vs BLG el 13 de junio en Wuhan. Gran Final LPL Split 2 2026: TES vs el ganador el 14 de junio.",
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
