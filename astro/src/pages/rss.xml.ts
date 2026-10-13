/**
 * rss.xml : flux RSS des news publiees (une langue par flux: ?lang=fr|en|es|de|it, defaut fr).
 * Les URLs de news n'ont pas de prefixe de langue (la langue est dans le slug), on filtre donc sur le champ locale.
 */
import type { APIRoute } from 'astro'

const BASE = 'https://riftmatch.io'
const LANGS = ['fr', 'en', 'es', 'de', 'it']
const META: Record<string, { title: string; desc: string; lang: string }> = {
  fr: { title: 'RiftMatch News', desc: 'Actualités esport League of Legends : résultats, mercato, patch notes.', lang: 'fr-FR' },
  en: { title: 'RiftMatch News', desc: 'League of Legends esports news: results, transfers, patch notes.', lang: 'en-GB' },
  es: { title: 'RiftMatch Noticias', desc: 'Noticias de esports de League of Legends: resultados, fichajes, parches.', lang: 'es-ES' },
  de: { title: 'RiftMatch News', desc: 'League-of-Legends-Esports-News: Ergebnisse, Transfers, Patchnotes.', lang: 'de-DE' },
  it: { title: 'RiftMatch Notizie', desc: 'Notizie esport di League of Legends: risultati, trasferimenti, patch.', lang: 'it-IT' },
}

const esc = (s: string) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export const GET: APIRoute = async ({ url }) => {
  const q = url.searchParams.get('lang') || 'fr'
  const lang = LANGS.includes(q) ? q : 'fr'
  const m = META[lang]
  const PAYLOAD = import.meta.env.PAYLOAD_API_URL || 'http://payload:3000'
  let items: any[] = []
  try {
    const r = await fetch(
      `${PAYLOAD}/api/news?where[status][equals]=published&where[locale][equals]=${lang}&limit=50&sort=-publishedAt`,
      { signal: AbortSignal.timeout(4000) },
    )
    items = (await r.json()).docs ?? []
  } catch { /* Payload KO: flux vide */ }

  const last = items[0]?.publishedAt ? new Date(items[0].publishedAt).toUTCString() : new Date().toUTCString()
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${esc(m.title)}</title>
  <link>${BASE}/news</link>
  <description>${esc(m.desc)}</description>
  <language>${m.lang}</language>
  <lastBuildDate>${last}</lastBuildDate>
  <atom:link href="${BASE}/rss.xml${lang === 'fr' ? '' : `?lang=${lang}`}" rel="self" type="application/rss+xml"/>
${items.map((n: any) => `  <item>
    <title>${esc(n.title)}</title>
    <link>${BASE}/news/${esc(n.slug)}</link>
    <guid isPermaLink="true">${BASE}/news/${esc(n.slug)}</guid>
    <pubDate>${new Date(n.publishedAt || n.createdAt).toUTCString()}</pubDate>
    <description>${esc(n.excerpt || '')}</description>
  </item>`).join('\n')}
</channel>
</rss>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8', 'Cache-Control': 'public, max-age=900' },
  })
}
