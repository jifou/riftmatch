import type { MigrationModule } from './runner'

export const id = '221-worlds-2026-swiss-round4-preview'
export const description = 'Worlds 2026 Swiss Stage Round 4 preview'

const NEWS: any[] = [
  { locale: 'fr', slug: 'worlds-2026-swiss-round4-preview-fr', title: 'Worlds 2026 Round 4 : T1, KOI et les LPL en quête des quarts (28-30 oct)', excerpt: 'Six séries de Bo3 décident les trois derniers qualifiés des quarts de finale. T1 face à Movistar KOI, IG affronte LYON, et le duel LPL oppose TES à Bilibili.', newsType: 'international', newsSubtype: 'other', category: 'esports', tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'T1' }, { tag: 'Movistar KOI' }], sourceUrl: 'https://www.strafe.com/news/read/worlds-2026-swiss-stage-round-4-matchups-schedule-and-start-times/', content: [
    { type: 'p', children: [{ text: 'Le Round 4 du Swiss Stage des Worlds 2026 se joue du 28 au 30 octobre à Allen, au Texas. Six séries de Bo3 vont décider des trois derniers qualifiés pour les quarts de finale.' }] },
    { type: 'h2', children: [{ text: 'Mercredi 28 octobre : qualification' }] },
    { type: 'p', children: [{ text: 'À 21h CET, Movistar KOI affronte T1. Le gagnant se qualifie directement aux quarts à 3-1. À minuit CET, LYON affronte Invictus Gaming dans les mêmes enjeux.' }] },
    { type: 'h2', children: [{ text: 'Jeudi 29 et vendredi 30 : éliminations' }] },
    { type: 'p', children: [{ text: 'Quatre séries du pool 1-2 seront jouées à enjeu d\'élimination pure. Bilibili Gaming affronte Top Esports en duel LPL à minuit jeudi. Team Liquid et LOS devront aussi gagner pour rester vivants.' }] },
  ] },
  { locale: 'en', slug: 'worlds-2026-swiss-round4-preview-en', title: 'Worlds 2026 Round 4: T1, KOI and the LPL Chase Quarterfinal Spots (Oct 28-30)', excerpt: 'Six best-of-three series decide the final three quarterfinalists. T1 faces Movistar KOI, IG takes on LYON, and an all-LPL battle between TES and Bilibili awaits.', newsType: 'international', newsSubtype: 'other', category: 'esports', tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'T1' }, { tag: 'Movistar KOI' }], sourceUrl: 'https://www.strafe.com/news/read/worlds-2026-swiss-stage-round-4-matchups-schedule-and-start-times/', content: [
    { type: 'p', children: [{ text: 'Round 4 of the Worlds 2026 Swiss Stage runs October 28-30 in Allen, Texas. Six best-of-three series will crown the final three quarterfinalists.' }] },
    { type: 'h2', children: [{ text: 'Wednesday, October 28: Qualification' }] },
    { type: 'p', children: [{ text: 'At 9 PM CET, Movistar KOI takes on T1. A win sends you straight to Quarterfinals at 3-1. At midnight CET, LYON faces Invictus Gaming with identical stakes.' }] },
    { type: 'h2', children: [{ text: 'Thursday, October 29 and Friday, October 30: Eliminations' }] },
    { type: 'p', children: [{ text: 'Four series from the 1-2 pool will play under pure elimination stakes. Bilibili Gaming face Top Esports in an all-LPL duel at midnight Thursday. Team Liquid and LOS must also win to stay alive.' }] },
  ] },
  { locale: 'es', slug: 'worlds-2026-swiss-round4-preview-es', title: 'Worlds 2026 Ronda 4: T1, KOI y el LPL compiten por cuartos (28-30 oct)', excerpt: 'Seis series al mejor de 3 definen los tres últimos clasificados a cuartos. T1 se enfrenta a Movistar KOI, IG cruza con LYON.', newsType: 'international', newsSubtype: 'other', category: 'esports', tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'T1' }, { tag: 'Movistar KOI' }], sourceUrl: 'https://www.strafe.com/news/read/worlds-2026-swiss-stage-round-4-matchups-schedule-and-start-times/', content: [
    { type: 'p', children: [{ text: 'La Ronda 4 de la Fase Suiza de Worlds 2026 se juega del 28 al 30 de octubre en Allen, Texas. Seis series al mejor de 3 definen los tres últimos clasificados a cuartos.' }] },
    { type: 'h2', children: [{ text: 'Miércoles 28 de octubre: Clasificacion' }] },
    { type: 'p', children: [{ text: 'A las 21 h CET, Movistar KOI se enfrenta a T1. Ganar te lleva directo a cuartos. A medianoche CET, LYON se enfrenta a Invictus Gaming en iguales enjuegos.' }] },
    { type: 'h2', children: [{ text: 'Jueves 29 y viernes 30: Eliminaciones' }] },
    { type: 'p', children: [{ text: 'Cuatro series del pool 1-2 serán jugadas con enjuego de pura eliminacion. Bilibili Gaming enfrenta a Top Esports en duelo LPL a medianoche jueves. Team Liquid y LOS deberan ganar para permanecer vivos.' }] },
  ] },
  { locale: 'de', slug: 'worlds-2026-swiss-round4-preview-de', title: 'Worlds 2026 Runde 4: T1, KOI und die LPL kaempfen um Viertelfinale (28.-30. Okt)', excerpt: 'Sechs Best-of-Three-Serien entscheiden die letzten Viertelfinalisten. T1 trifft auf Movistar KOI, IG spielt gegen LYON.', newsType: 'international', newsSubtype: 'other', category: 'esports', tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'T1' }, { tag: 'Movistar KOI' }], sourceUrl: 'https://www.strafe.com/news/read/worlds-2026-swiss-stage-round-4-matchups-schedule-and-start-times/', content: [
    { type: 'p', children: [{ text: 'Runde 4 der Worlds 2026 Swiss Stage findet vom 28. bis 30. Oktober in Allen, Texas statt. Sechs Best-of-Three-Serien entscheiden die letzten Viertelfinalisten.' }] },
    { type: 'h2', children: [{ text: 'Mittwoch, 28. Oktober: Qualifikation' }] },
    { type: 'p', children: [{ text: 'Um 21 Uhr CET trifft Movistar KOI auf T1. Ein Sieg bringt dich ins Viertelfinale auf 3-1. Um Mitternacht CET trifft LYON auf Invictus Gaming mit identischen Einsaetzen.' }] },
    { type: 'h2', children: [{ text: 'Donnerstag 29. und Freitag 30.: Eliminationen' }] },
    { type: 'p', children: [{ text: 'Vier Serien aus dem 1-2-Pool werden unter reinen Ausscheidungsbedingungen gespielt. Bilibili Gaming triffft auf Top Esports in einem reinen LPL-Duell um Mitternacht Donnerstag. Team Liquid und LOS muessen ebenfalls gewinnen, um am Leben zu bleiben.' }] },
  ] },
  { locale: 'it', slug: 'worlds-2026-swiss-round4-preview-it', title: 'Worlds 2026 Round 4: T1, KOI e l\'LPL in corsa per i quarti (28-30 ott)', excerpt: 'Sei serie al meglio delle 3 decidono gli ultimi qualificati. T1 affronta Movistar KOI, IG incrocia LYON.', newsType: 'international', newsSubtype: 'other', category: 'esports', tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'T1' }, { tag: 'Movistar KOI' }], sourceUrl: 'https://www.strafe.com/news/read/worlds-2026-swiss-stage-round-4-matchups-schedule-and-start-times/', content: [
    { type: 'p', children: [{ text: 'Il Round 4 dello Swiss Stage dei Worlds 2026 si gioca dal 28 al 30 ottobre ad Allen, Texas. Sei serie al meglio delle 3 decideranno gli ultimi qualificati ai quarti.' }] },
    { type: 'h2', children: [{ text: 'Mercoledì 28 ottobre: Qualificazione' }] },
    { type: 'p', children: [{ text: 'Alle 21 CET, Movistar KOI affronta T1. Una vittoria ti porta ai quarti. A mezzanotte CET, LYON affronta Invictus Gaming con eguali obiettivi.' }] },
    { type: 'h2', children: [{ text: 'Giovedi 29 e venerdi 30: Eliminazioni' }] },
    { type: 'p', children: [{ text: 'Quattro serie dal pool 1-2 saranno giocate con puro rischio di eliminazione. Bilibili Gaming affronta Top Esports in uno scontro tutto LPL a mezzanotte giovedi. Team Liquid e LOS devono anche vincere per rimanere in vita.' }] },
  ] },
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const n of NEWS) {
    const existing = await payload.find({ collection: 'news', where: { slug: { equals: n.slug } }, limit: 1 })
    if (existing.docs.length) {
      console.log(`skip ${n.slug}`)
      continue
    }
    await payload.create({ collection: 'news', data: { ...n, status: 'published', publishedAt: new Date() } })
    console.log(`published ${n.slug}`)
  }
}
