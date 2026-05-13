/**
 * sitemap.xml — Sitemap dynamique SSR
 * Inclut : homepage, quiz, fiches champions (×3 locales), guides Payload (×3 locales)
 */
import type { APIRoute } from 'astro'
import { CHAMPIONS } from '../data/champions'

const BASE_URL = 'https://riftmatch.io'
const TODAY    = new Date().toISOString().split('T')[0]
const LOCALES  = ['fr', 'en', 'es'] as const

function localeUrl(path: string, locale: 'fr' | 'en' | 'es'): string {
  return locale === 'fr' ? path : `/${locale}${path}`
}

export const GET: APIRoute = async () => {
  // ── Fetch des guides depuis Payload ─────────────────────────────
  const PAYLOAD_URL = import.meta.env.PAYLOAD_API_URL || 'http://payload:3000'
  let contentPages: { slug: string; locale: string; updatedAt?: string }[] = []
  let newsArticles: { slug: string; updatedAt?: string; publishedAt?: string }[] = []
  try {
    const [pagesRes, newsRes] = await Promise.all([
      fetch(`${PAYLOAD_URL}/api/pages?limit=100&sort=slug`, { signal: AbortSignal.timeout(3000) }),
      fetch(`${PAYLOAD_URL}/api/news?where[status][equals]=published&limit=200&sort=-publishedAt`, { signal: AbortSignal.timeout(3000) }),
    ])
    const pagesData = await pagesRes.json()
    contentPages = (pagesData.docs ?? []).map((p: any) => ({
      slug:      p.slug,
      locale:    p.locale || 'fr',
      updatedAt: p.updatedAt?.split('T')[0] ?? TODAY,
    }))
    const newsData = await newsRes.json()
    newsArticles = (newsData.docs ?? []).map((n: any) => ({
      slug:        n.slug,
      updatedAt:   (n.updatedAt || n.publishedAt)?.split('T')[0] ?? TODAY,
      publishedAt: n.publishedAt?.split('T')[0] ?? TODAY,
    }))
  } catch { /* Payload KO — sitemap sans guides/news */ }

  // ── Toutes les URLs ──────────────────────────────────────────────
  type Entry = { url: string; priority: string; changefreq: string; lastmod: string }
  const entries: Entry[] = []

  // Homepage (FR seulement — pas de /en/ ni /es/ homepage)
  entries.push({ url: '/', priority: '1.0', changefreq: 'weekly', lastmod: TODAY })

  // Quiz (une seule URL, pas de variante locale)
  entries.push({ url: '/quiz', priority: '0.9', changefreq: 'monthly', lastmod: TODAY })

  // Guides listing (×3 locales)
  for (const locale of LOCALES) {
    entries.push({
      url:        localeUrl('/guides', locale),
      priority:   '0.8',
      changefreq: 'weekly',
      lastmod:    TODAY,
    })
  }

  // Articles / guides (chaque page existe dans sa locale)
  for (const page of contentPages) {
    const locale = LOCALES.includes(page.locale as any) ? (page.locale as typeof LOCALES[number]) : 'fr'
    entries.push({
      url:        localeUrl(`/info/${page.slug}`, locale),
      priority:   '0.7',
      changefreq: 'monthly',
      lastmod:    page.updatedAt ?? TODAY,
    })
  }

  // News listing
  entries.push({ url: '/news', priority: '0.85', changefreq: 'daily', lastmod: TODAY })

  // Articles news individuels (les slugs sont uniques par locale, pas de préfixe URL)
  for (const article of newsArticles) {
    entries.push({
      url:        `/news/${article.slug}`,
      priority:   '0.75',
      changefreq: 'monthly',
      lastmod:    article.updatedAt ?? TODAY,
    })
  }

  // Fiches champions (×3 locales)
  for (const locale of LOCALES) {
    for (const c of CHAMPIONS) {
      entries.push({
        url:        localeUrl(`/champion/${c.apiId}`, locale),
        priority:   '0.6',
        changefreq: 'monthly',
        lastmod:    TODAY,
      })
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(p => `  <url>
    <loc>${BASE_URL}${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
