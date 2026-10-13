/**
 * sitemap.xml — Sitemap dynamique SSR
 * Inclut : homepage, quiz, fiches champions (×3 locales), guides Payload (×3 locales)
 */
import type { APIRoute } from 'astro'
import { CHAMPIONS } from '../data/champions'

const BASE_URL = 'https://riftmatch.io'
const TODAY    = new Date().toISOString().split('T')[0]
const LOCALES  = ['fr', 'en', 'es', 'de', 'it'] as const

function localeUrl(path: string, locale: 'fr' | 'en' | 'es' | 'de' | 'it'): string {
  return locale === 'fr' ? path : `/${locale}${path}`
}

export const GET: APIRoute = async () => {
  // ── Fetch des guides depuis Payload ─────────────────────────────
  const PAYLOAD_URL = import.meta.env.PAYLOAD_API_URL || 'http://payload:3000'
  let contentPages: { slug: string; locale: string; updatedAt?: string; translationKey?: string }[] = []
  let newsArticles: { slug: string; locale: string; updatedAt?: string; publishedAt?: string }[] = []
  let patchNotes: { slug: string; locale: string; updatedAt?: string }[] = []
  try {
    const [pagesRes, newsRes, patchRes] = await Promise.all([
      fetch(`${PAYLOAD_URL}/api/pages?limit=100&sort=slug`, { signal: AbortSignal.timeout(3000) }),
      fetch(`${PAYLOAD_URL}/api/news?where[status][equals]=published&limit=500&sort=-publishedAt`, { signal: AbortSignal.timeout(3000) }),
      fetch(`${PAYLOAD_URL}/api/patch-notes?where[status][equals]=published&limit=200&sort=-publishedAt`, { signal: AbortSignal.timeout(3000) }),
    ])
    const pagesData = await pagesRes.json()
    contentPages = (pagesData.docs ?? []).map((p: any) => ({
      slug:      p.slug,
      locale:    p.locale || 'fr',
      updatedAt: p.updatedAt?.split('T')[0] ?? TODAY,
      translationKey: p.translationKey || undefined,
    }))
    const newsData = await newsRes.json()
    newsArticles = (newsData.docs ?? []).map((n: any) => ({
      slug:        n.slug,
      locale:      n.locale || 'fr',
      updatedAt:   (n.updatedAt || n.publishedAt)?.split('T')[0] ?? TODAY,
      publishedAt: n.publishedAt?.split('T')[0] ?? TODAY,
    }))
    const patchData = await patchRes.json()
    patchNotes = (patchData.docs ?? []).map((n: any) => ({
      slug: n.slug, locale: n.locale || 'fr', updatedAt: (n.updatedAt || n.publishedAt)?.split('T')[0] ?? TODAY,
    }))
  } catch { /* Payload KO — sitemap sans guides/news */ }

  // ── Toutes les URLs ──────────────────────────────────────────────
  type Entry = { url: string; priority: string; changefreq: string; lastmod: string; alternates?: { lang: string; url: string }[] }
  const entries: Entry[] = []

  const withAlt = (path: string) => [
    ...LOCALES.map(l => ({ lang: l, url: `${BASE_URL}${localeUrl(path, l)}`.replace(/\/$/, '') })),
    { lang: 'x-default', url: `${BASE_URL}${path === '/' ? '' : path}` },
  ]
  const home = (l: typeof LOCALES[number]) => (l === 'fr' ? '/' : `/${l}`)

  // Accueil et quiz : une URL par langue
  for (const locale of LOCALES) {
    entries.push({ url: home(locale), priority: '1.0', changefreq: 'weekly', lastmod: TODAY, alternates: withAlt('/') })
    entries.push({ url: localeUrl('/quiz', locale), priority: '0.9', changefreq: 'monthly', lastmod: TODAY, alternates: withAlt('/quiz') })
  }

  // Guides listing
  for (const locale of LOCALES) {
    entries.push({
      url:        localeUrl('/guides', locale),
      priority:   '0.8',
      changefreq: 'weekly',
      lastmod:    TODAY,
      alternates: withAlt('/guides'),
    })
  }

  // Articles / guides (chaque page existe dans sa locale)
  for (const page of contentPages) {
    const locale = LOCALES.includes(page.locale as any) ? (page.locale as typeof LOCALES[number]) : 'fr'
    const siblings = page.translationKey
      ? contentPages.filter(p => p.translationKey === page.translationKey)
      : []
    const fr = siblings.find(p => p.locale === 'fr')
    const alternates = siblings.length > 1
      ? [
          ...siblings.map(p => ({ lang: p.locale, url: `${BASE_URL}${localeUrl(`/info/${p.slug}`, p.locale as any)}` })),
          { lang: 'x-default', url: `${BASE_URL}${fr ? `/info/${fr.slug}` : localeUrl(`/info/${page.slug}`, locale)}` },
        ]
      : undefined
    entries.push({
      url:        localeUrl(`/info/${page.slug}`, locale),
      priority:   '0.7',
      changefreq: 'monthly',
      lastmod:    page.updatedAt ?? TODAY,
      alternates,
    })
  }

  // News et patch notes : listes par langue
  for (const locale of LOCALES) {
    entries.push({ url: localeUrl('/news', locale), priority: '0.85', changefreq: 'daily', lastmod: TODAY, alternates: withAlt('/news') })
    entries.push({ url: localeUrl('/patch-notes', locale), priority: '0.8', changefreq: 'weekly', lastmod: TODAY, alternates: withAlt('/patch-notes') })
  }

  // Articles de news : chacun dans sa langue (slug unique par langue)
  for (const article of newsArticles) {
    const locale = LOCALES.includes(article.locale as any) ? (article.locale as typeof LOCALES[number]) : 'fr'
    entries.push({
      url:        localeUrl(`/news/${article.slug}`, locale),
      priority:   '0.75',
      changefreq: 'monthly',
      lastmod:    article.updatedAt ?? TODAY,
    })
  }

  // Patch notes : meme slug dans chaque langue
  const patchSlugs = Array.from(new Set(patchNotes.map(p => p.slug)))
  for (const slug of patchSlugs) {
    const langs = patchNotes.filter(p => p.slug === slug)
    const alternates = [
      ...langs.map(p => ({ lang: p.locale, url: `${BASE_URL}${localeUrl(`/patch-notes/${slug}`, p.locale as any)}` })),
      { lang: 'x-default', url: `${BASE_URL}/patch-notes/${slug}` },
    ]
    for (const p of langs) {
      const locale = LOCALES.includes(p.locale as any) ? (p.locale as typeof LOCALES[number]) : 'fr'
      entries.push({ url: localeUrl(`/patch-notes/${slug}`, locale), priority: '0.7', changefreq: 'monthly', lastmod: p.updatedAt ?? TODAY, alternates })
    }
  }

  // Fiches champions (×3 locales)
  for (const locale of LOCALES) {
    for (const c of CHAMPIONS) {
      entries.push({
        url:        localeUrl(`/champion/${c.apiId}`, locale),
        priority:   '0.6',
        changefreq: 'monthly',
        lastmod:    TODAY,
        alternates: withAlt(`/champion/${c.apiId}`),
      })
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map(p => `  <url>
    <loc>${BASE_URL}${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>${(p.alternates ?? []).map(a => `
    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.url}"/>`).join('')}
  </url>`).join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
