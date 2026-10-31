import type { MigrationModule } from './runner'

export const id = '229-worlds-round5-finals-preview-31oct'
export const description = 'Worlds 2026 Round 5: Finals preview October 31'

export const up: MigrationModule['up'] = async (payload) => {
  const baseSlug = 'worlds-2026-r5-finals-31oct'
  const titles: Record<string, string> = {
    fr: 'Worlds: le jour decisif, 31 octobre',
    en: 'Worlds 2026: Final Day - October 31',
    es: 'Worlds 2026: Dia Decisivo',
    de: 'Worlds 2026: Entscheidender Tag',
    it: 'Worlds 2026: Giorno Decisivo'
  }
  
  for (const locale of ['fr', 'en', 'es', 'de', 'it']) {
    const slug = `${baseSlug}-${locale}`
    const existing = await payload.find({
      collection: 'news',
      where: { slug: { equals: slug } }
    })
    
    if (existing.docs.length === 0) {
      await payload.create({
        collection: 'news',
        data: {
          locale,
          slug,
          title: titles[locale],
          excerpt: 'Round 5 decides final three quarterfinal spots.',
          newsType: 'international',
          category: 'esports',
          newsSubtype: 'other',
          content: [
            { type: 'p', children: [{ text: 'October 31 brings three elimination matches: KC vs MKOI at 17:00 UTC, LOS vs LYON at 20:00 UTC, HLE vs BLG at 23:00 UTC.' }] },
            { type: 'h2', children: [{ text: 'Already Qualified' }] },
            { type: 'p', children: [{ text: 'DK, Gen.G, Top Esports, Invictus Gaming, and T1 are in. Today decides the final three.' }] }
          ],
          tags: [{ tag: 'Worlds' }, { tag: 'Round5' }],
          status: 'published',
          publishedAt: '2026-10-31T05:00:00Z',
          sourceUrl: 'https://lolesports.com/en-US'
        }
      })
    }
  }
}
