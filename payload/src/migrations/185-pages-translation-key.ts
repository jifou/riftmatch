import type { MigrationModule } from './runner'

export const id = '185-pages-translation-key'
export const description = 'Relie les traductions FR/EN/ES des articles par une translationKey (hreflang)'

// translationKey -> slug par langue
const GROUPS: Record<string, Record<'fr' | 'en' | 'es', string>> = {
  'what-is-lol': {
    fr: 'qu-est-ce-que-league-of-legends',
    en: 'qu-est-ce-que-league-of-legends',
    es: 'qu-est-ce-que-league-of-legends',
  },
  'guide-adc': {
    fr: 'guide-adc-league-of-legends',
    en: 'guide-adc-league-of-legends',
    es: 'guide-adc-league-of-legends',
  },
  'guide-jungle': {
    fr: 'guide-jungle-league-of-legends',
    en: 'jungle-guide-league-of-legends',
    es: 'guia-jungla-league-of-legends',
  },
  'guide-mid': {
    fr: 'guide-mid-lane-league-of-legends',
    en: 'mid-lane-guide-league-of-legends',
    es: 'guia-mid-lane-league-of-legends',
  },
  'guide-support': {
    fr: 'guide-support-league-of-legends',
    en: 'support-guide-league-of-legends',
    es: 'guia-support-league-of-legends',
  },
  'guide-top': {
    fr: 'guide-top-lane-league-of-legends',
    en: 'top-lane-guide-league-of-legends',
    es: 'guia-top-lane-league-of-legends',
  },
}

export const up: MigrationModule['up'] = async (payload) => {
  let updated = 0
  for (const [key, bySlug] of Object.entries(GROUPS)) {
    for (const [locale, slug] of Object.entries(bySlug)) {
      const res = await payload.find({
        collection: 'pages',
        where: { and: [{ slug: { equals: slug } }, { locale: { equals: locale } }] },
        limit: 1,
      })
      const doc = res.docs[0] as any
      if (!doc) {
        console.log(`  - absent (${locale}/${slug}), ignoré`)
        continue
      }
      if (doc.translationKey === key) continue
      await payload.update({
        collection: 'pages',
        id: doc.id,
        data: { translationKey: key } as any,
      })
      updated++
    }
  }
  console.log(`  → ${updated} page(s) reliée(s)`)
}
