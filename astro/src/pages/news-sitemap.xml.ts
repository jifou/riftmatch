/**
 * news-sitemap.xml : sitemap Google News (articles des 2 derniers jours uniquement, toutes langues).
 * https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap
 */
import type { APIRoute } from 'astro'

const BASE = 'https://riftmatch.io'
const esc = (s: string) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export const GET: APIRoute = async () => {
  const PAYLOAD = import.meta.env.PAYLOAD_API_URL || 'http://payload:3000'
  const since = new Date(Date.now() - 2 * 24 * 3600 * 1000).toISOString()
  let items: any[] = []
  try {
    const r = await fetch(
      `${PAYLOAD}/api/news?where[status][equals]=published&where[publishedAt][greater_than]=${since}&limit=200&sort=-publishedAt`,
      { signal: AbortSignal.timeout(4000) },
    )
    items = (await r.json()).docs ?? []
  } catch { /* Payload KO */ }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${items.map((n: any) => {
    const lang = ['fr', 'en', 'es', 'de', 'it'].includes(n.locale) ? n.locale : 'fr'
    return `  <url>
    <loc>${BASE}/news/${esc(n.slug)}</loc>
    <news:news>
      <news:publication><news:name>RiftMatch</news:name><news:language>${lang}</news:language></news:publication>
      <news:publication_date>${new Date(n.publishedAt).toISOString()}</news:publication_date>
      <news:title>${esc(n.title)}</news:title>
    </news:news>
  </url>`
  }).join('\n')}
</urlset>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=600' },
  })
}
