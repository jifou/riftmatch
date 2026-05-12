# Agent LEC — RiftMatch

## Setup git
```bash
git config user.email jfbujoli@gmail.com
git config user.name Jifou
```

## Étape 1 — Prochain numéro de migration
```bash
ls payload/src/migrations/ | sort | tail -5
```

## Étape 2 — Recherches LEC
- `LEC Spring Summer 2026 results standings week`
- `LEC playoffs 2026 results lolesports`
- `lolesports.com LEC 2026`

Équipes : Team Vitality, Karmine Corp, G2 Esports, Fnatic, Movistar KOI, GIANTX, NAVI, Team Heretics.

## Étape 3 — Décider quoi créer
Crée un article SI événement significatif non encore couvert :
- Victoires en playoffs
- Qualification MSI ou Worlds
- Upset notable (favorite battue)
- Fin de split / classement final
- Roadshow / événement live

**Ne crée rien** si seulement des matchs de regular season classiques.

## Étape 4 — Format migration news (3 langues obligatoires)

Fichier : `payload/src/migrations/0NN-lec-SLUG.ts`

```typescript
import type { MigrationModule } from './runner'

export const id = 'NNN-lec-slug'
export const description = 'LEC — description courte'

const DATE = 'YYYY-MM-DDT08:00:00.000Z'

const articles = [
  {
    title: 'Titre en français',
    slug: 'slug-unique-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/[ID]-1920x1080.jpg',
    excerpt: 'Résumé en 1-2 phrases.',
    sourceUrl: 'https://lolesports.com/...',
    tags: [{ tag: 'LEC' }, { tag: 'Esports' }, { tag: 'Europe' }],
    content: [
      { type: 'p', children: [{ text: 'Paragraphe introduction...' }] },
      { type: 'h2', children: [{ text: 'Titre section' }] },
      { type: 'p', children: [{ text: 'Contenu...' }] },
      { type: 'ul', children: [
        { type: 'li', children: [{ text: 'Point 1' }] },
        { type: 'li', children: [{ text: 'Point 2' }] },
      ]},
      { type: 'blockquote', children: [{ text: 'Conclusion ou citation importante.' }] },
    ],
  },
  {
    title: 'Title in English',
    slug: 'slug-unique-fr-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/[ID]-1920x1080.jpg',
    excerpt: 'Summary in 1-2 sentences.',
    sourceUrl: 'https://lolesports.com/...',
    tags: [{ tag: 'LEC' }, { tag: 'Esports' }, { tag: 'Europe' }],
    content: [
      { type: 'p', children: [{ text: 'Introduction paragraph...' }] },
      { type: 'h2', children: [{ text: 'Section title' }] },
      { type: 'p', children: [{ text: 'Content...' }] },
      { type: 'blockquote', children: [{ text: 'Conclusion.' }] },
    ],
  },
  {
    title: 'Título en español',
    slug: 'slug-unique-fr-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/[ID]-1920x1080.jpg',
    excerpt: 'Resumen en 1-2 frases.',
    sourceUrl: 'https://lolesports.com/...',
    tags: [{ tag: 'LEC' }, { tag: 'Esports' }, { tag: 'Europa' }],
    content: [
      { type: 'p', children: [{ text: 'Párrafo de introducción...' }] },
      { type: 'h2', children: [{ text: 'Título sección' }] },
      { type: 'p', children: [{ text: 'Contenido...' }] },
      { type: 'blockquote', children: [{ text: 'Conclusión.' }] },
    ],
  },
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const article of articles) {
    const existing = await payload.find({
      collection: 'news',
      where: { slug: { equals: article.slug } },
    })
    if (existing.docs.length > 0) {
      console.log(`  → "${article.slug}" déjà présent, skip.`)
      continue
    }
    await payload.create({ collection: 'news', data: article as any })
    console.log(`  ✅ ${article.locale.toUpperCase()} — ${article.title}`)
  }
  console.log('✅ Migration LEC terminée')
}
```

**Image LEC** : cherche sur `cmsassets.rgpub.io` (Riot CDN). Exemple : `https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/2eeffc27c7d611657950840ad3f7b8086b367a20-1920x1080.jpg`

## Étape 5 — Commit et push
```bash
git add payload/src/migrations/
git commit -m "content: LEC news $(date +%Y-%m-%d)"
git push origin main
```

## Étape 6 — Rapport final
