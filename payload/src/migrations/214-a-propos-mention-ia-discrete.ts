import type { MigrationModule } from './runner'

export const id = '214-a-propos-mention-ia-discrete'
export const description = 'Page A propos: mention de l IA reformulee comme une methode de travail, 5 langues'

const PAGES: Record<string, { head: string; text: string }> = {
  'a-propos': {
    head: 'Comment on travaille',
    text: "Les articles s'appuient sur les sources officielles (Riot, LoL Esports), rédigés avec l'assistance de l'IA, puis relus et vérifiés avant publication. Les fiches champion reposent sur les données du site (rôles, classes, difficulté, région), pas sur des tests de jeu personnels.",
  },
  about: {
    head: 'How we work',
    text: "Articles are built from official sources (Riot, LoL Esports), written with AI assistance, then reviewed and fact-checked before publishing. Champion pages rely on the site's own data (roles, classes, difficulty, region), not on personal play-testing.",
  },
  'acerca-de': {
    head: 'Cómo trabajamos',
    text: 'Los artículos se apoyan en fuentes oficiales (Riot, LoL Esports), se redactan con asistencia de IA y se revisan y verifican antes de publicarse. Las fichas de campeones se basan en los datos del sitio (roles, clases, dificultad, región), no en pruebas de juego personales.',
  },
  'ueber-riftmatch': {
    head: 'So arbeiten wir',
    text: 'Die Artikel stützen sich auf offizielle Quellen (Riot, LoL Esports), entstehen mit KI-Unterstützung und werden vor der Veröffentlichung geprüft und verifiziert. Die Champion-Seiten beruhen auf den Daten der Seite (Rollen, Klassen, Schwierigkeit, Region), nicht auf eigenen Spieltests.',
  },
  'chi-siamo': {
    head: 'Come lavoriamo',
    text: "Gli articoli si basano su fonti ufficiali (Riot, LoL Esports), sono scritti con il supporto dell'IA, poi riletti e verificati prima della pubblicazione. Le schede dei campioni si basano sui dati del sito (ruoli, classi, difficoltà, regione), non su prove di gioco personali.",
  },
}

const flat = (n: any): string => (typeof n.text === 'string' ? n.text : (n.children || []).map(flat).join(''))
const AI_RE = /intelligence artificielle|AI tools|inteligencia artificial|KI-Werkzeug|intelligenza artificiale/i

export const up: MigrationModule['up'] = async (payload) => {
  for (const [slug, v] of Object.entries(PAGES)) {
    const ex = await payload.find({ collection: 'pages', where: { slug: { equals: slug } }, limit: 1 })
    if (!ex.docs.length) { console.log(`absent ${slug}`); continue }
    const content: any[] = (ex.docs[0] as any).content || []
    const pi = content.findIndex((n) => n.type === 'p' && AI_RE.test(flat(n)))
    if (pi < 1 || content[pi - 1].type !== 'h2') { console.log(`rien a faire ${slug}`); continue }
    const next = content.map((n, i) => {
      if (i === pi - 1) return { type: 'h2', children: [{ text: v.head }] }
      if (i === pi) return { type: 'p', children: [{ text: v.text }] }
      return n
    })
    await payload.update({ collection: 'pages', id: (ex.docs[0] as any).id, data: { content: next } })
    console.log(`page ${slug}`)
  }
}
