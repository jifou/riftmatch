// Verifications faites DANS les pages (Astro.redirect ne fonctionne pas dans un composant).
import { lp, urlLocale } from './locale'

const PAYLOAD = () => import.meta.env.PAYLOAD_API_URL || 'http://payload:3000'

// Retourne l'URL vers laquelle rediriger, ou null si la page est valide.
export async function newsRedirect(Astro: any): Promise<{ to: string; status: number } | null> {
  const locale = urlLocale(Astro.url.pathname) || 'fr'
  const slug = Astro.params.slug
  try {
    const r = await fetch(`${PAYLOAD()}/api/news?where[slug][equals]=${slug}&where[status][equals]=published&limit=1&depth=0`)
    const a = (await r.json()).docs?.[0]
    if (!a) return { to: lp(locale, '/news'), status: 302 }
    const al = ['fr', 'en', 'es', 'de', 'it'].includes(a.locale) ? a.locale : locale
    if (al !== locale) return { to: lp(al, `/news/${slug}`), status: 301 }
  } catch { /* Payload KO: la page gerera */ }
  return null
}

export async function patchRedirect(Astro: any): Promise<{ to: string; status: number } | null> {
  const locale = urlLocale(Astro.url.pathname) || 'fr'
  const slug = Astro.params.slug
  try {
    const r = await fetch(`${PAYLOAD()}/api/patch-notes?where[slug][equals]=${slug}&where[status][equals]=published&limit=1&depth=0`)
    const a = (await r.json()).docs?.[0]
    if (!a) return { to: lp(locale, '/patch-notes'), status: 302 }
  } catch { /* Payload KO */ }
  return null
}
