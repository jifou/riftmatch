// Helpers de langue : la langue vient de l'URL (/en/..., /es/..., /de/..., /it/...),
// avec repli sur le cookie pour les pages sans prefixe (francais par defaut).

export const LOCALES = ['fr', 'en', 'es', 'de', 'it'] as const
export type Locale = (typeof LOCALES)[number]
export const PREFIXED = ['en', 'es', 'de', 'it'] as const

const PREFIX_RE = /^\/(en|es|de|it)(\/|$)/

export function urlLocale(pathname: string): Locale | null {
  const m = pathname.match(PREFIX_RE)
  return m ? (m[1] as Locale) : null
}

export function resolveLocale(Astro: { url: URL; cookies: { get: (k: string) => { value?: string } | undefined } }): Locale {
  const fromUrl = urlLocale(Astro.url.pathname)
  if (fromUrl) return fromUrl
  const c = Astro.cookies.get('locale')?.value
  return (LOCALES as readonly string[]).includes(c || '') ? (c as Locale) : 'fr'
}

// Chemin localise : lp('en', '/quiz') -> '/en/quiz' ; lp('fr', '/quiz') -> '/quiz' ; lp('en', '/') -> '/en'
export function lp(locale: string, path: string): string {
  if (!locale || locale === 'fr') return path
  if (path === '/' || path === '') return `/${locale}`
  return `/${locale}${path.startsWith('/') ? path : `/${path}`}`
}

// Si la page est servie sans prefixe alors que le visiteur prefere une autre langue (cookie), URL cible; sinon null.
export function preferredRedirect(Astro: { url: URL; cookies: { get: (k: string) => { value?: string } | undefined } }, path: string): string | null {
  if (urlLocale(Astro.url.pathname)) return null
  const c = Astro.cookies.get('locale')?.value
  if (c && (PREFIXED as readonly string[]).includes(c)) return lp(c, path)
  return null
}
