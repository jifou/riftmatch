import type { MigrationModule } from './runner'

export const id = '228-worlds-round4-hle-g2-30oct'
export const description = 'Worlds 2026: HLE eliminates G2 2-0 in Round 4, October 30'

export const up: MigrationModule['up'] = async (payload) => {
  const baseSlug = 'worlds-2026-r4-hle-g2-30oct'
  const titles: Record<string, string> = {
    fr: 'Hanwha Life elimine G2 2-0 aux Worlds',
    en: 'HLE Eliminates G2 2-0 at Worlds 2026',
    es: 'HLE Elimina a G2 2-0 en Worlds',
    de: 'HLE scheidet G2 2-0 aus',
    it: 'HLE Elimina G2 2-0 ai Worlds'
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
          excerpt: 'Korea dominates. HLE eliminates G2 in Round 4.',
          newsType: 'international',
          category: 'esports',
          newsSubtype: 'resultats',
          content: [
            { type: 'p', children: [{ text: 'HLE defeated G2 2-0. October 30 elimination match. South Korea leads Worlds 2026.' }] },
            { type: 'h2', children: [{ text: 'Round 5 Today' }] },
            { type: 'p', children: [{ text: 'Three matches: KC vs MKOI, LOS vs LYON, HLE vs BLG. Winners reach quarterfinals.' }] }
          ],
          tags: [{ tag: 'HLE' }, { tag: 'G2' }, { tag: 'Worlds' }],
          status: 'published',
          publishedAt: '2026-10-31T05:00:00Z',
          sourceUrl: 'https://lolesports.com/en-US'
        }
      })
    }
  }
}
