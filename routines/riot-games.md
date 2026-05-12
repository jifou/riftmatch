# Agent Riot Games — RiftMatch

## Setup git
```bash
git config user.email jfbujoli@gmail.com
git config user.name Jifou
```

## Étape 1 — Prochain numéro de migration
```bash
ls payload/src/migrations/ | sort | tail -5
```
Note le dernier numéro N → utilise N+1 pour les nouveaux fichiers.

## Étape 2 — Recherches Riot Games
- `Riot Games 2026 announcement new game update`
- `Riot Games Valorant Teamfight Tactics 2026 news`
- `Riot Games esports event 2026 announcement`
- `League of Legends lore cinematic 2026`
- `Riot Games new champion announcement 2026`

Sujets couverts : annonces de Riot Games (pas seulement LoL), nouvelles IP, Valorant si lié à LoL/Esports, TFT Set updates, cinematiques, lore majeur, événements in-game mondiaux.

## Étape 3 — Décider quoi créer
Crée un article SI événement significatif :
- Annonce d'un nouveau champion ou rework majeur
- Nouvelle cinématique / teaser lore
- Annonce d'un événement in-game global (Worlds Pass, etc.)
- Nouveau jeu ou IP Riot Games
- Mise à jour TFT Set (si majeure)
- Partenariat ou collab Riot Games notable

**Ne crée pas** pour des news mineures (changements client, bugfixes cosmétiques, contenu saisonnier classique).

## Étape 4 — Format migration
Fichier : `payload/src/migrations/0NN-riot-SLUG.ts`
Tags : `[{ tag: 'Riot Games' }, { tag: 'League of Legends' }]` (adapter selon le sujet)
Toujours 3 langues : FR, EN (slug + -en), ES (slug + -es).
Même structure TypeScript que les autres migrations news (voir lec.md).

### Exemple de tags selon le sujet
- Nouveau champion : `[{ tag: 'Champion' }, { tag: 'League of Legends' }]`
- Cinématique : `[{ tag: 'Lore' }, { tag: 'Riot Games' }]`
- TFT : `[{ tag: 'TFT' }, { tag: 'Riot Games' }]`
- Valorant : `[{ tag: 'Valorant' }, { tag: 'Riot Games' }]`

### Images
- DDragon pour les champions : `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/NomChampion_0.jpg`
- Riot CDN pour les news : `https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/[HASH]-1920x1080.jpg`
- Source : chercher l'image sur `universe.leagueoflegends.com` ou `leagueoflegends.com/en-us/news/`

### Structure TypeScript (3 langues)
```typescript
import type { MigrationModule } from './runner'

export const id = 'NNN-riot-slug'
export const description = 'Riot Games — description courte'

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
    coverImage: 'https://...',
    excerpt: 'Résumé en 1-2 phrases.',
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/...',
    tags: [{ tag: 'Riot Games' }, { tag: 'League of Legends' }],
    content: [
      { type: 'p', children: [{ text: 'Introduction...' }] },
      { type: 'h2', children: [{ text: 'Titre section' }] },
      { type: 'p', children: [{ text: 'Contenu...' }] },
      { type: 'blockquote', children: [{ text: 'Conclusion.' }] },
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
    coverImage: 'https://...',
    excerpt: 'Summary in 1-2 sentences.',
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/...',
    tags: [{ tag: 'Riot Games' }, { tag: 'League of Legends' }],
    content: [
      { type: 'p', children: [{ text: 'Introduction...' }] },
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
    coverImage: 'https://...',
    excerpt: 'Resumen en 1-2 frases.',
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/...',
    tags: [{ tag: 'Riot Games' }, { tag: 'League of Legends' }],
    content: [
      { type: 'p', children: [{ text: 'Introducción...' }] },
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
  console.log('✅ Migration Riot Games terminée')
}
```

## Étape 5 — Commit et push
```bash
git add payload/src/migrations/
git commit -m "content: Riot Games news $(date +%Y-%m-%d)"
git push origin main
```
