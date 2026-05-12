# Agent Patch Notes — RiftMatch

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

## Étape 2 — Dernier patch connu
Lis le fichier migration le plus récent dont le nom contient `patchnote`. Exemple : `027-patchnote-26-10.ts` → dernière version couverte = 26.10.

## Étape 3 — Recherche web
- `site:leagueoflegends.com/en-us/news/game-updates patch notes 2026`
- `league of legends latest patch 26 notes 2026`

Détermine si un patch supérieur à la version déjà couverte est disponible (ex: 26.11, 26.12...).

## Étape 4 — Créer la migration si nouveau patch trouvé

Fichier : `payload/src/migrations/0NN-patchnote-XX-Y.ts`

```typescript
import type { MigrationModule } from './runner'

export const id = 'NNN-patchnote-XX-Y'
export const description = 'Patch XX.Y — résumé des changements'

export const up: MigrationModule['up'] = async (payload) => {
  const existing = await payload.find({
    collection: 'patch-notes',
    where: { slug: { equals: 'patch-XX-Y' } },
  })
  if (existing.docs.length > 0) {
    console.log('  → Patch XX.Y déjà présent, skip.')
    return
  }

  await payload.create({
    collection: 'patch-notes',
    data: {
      version: 'XX.Y',
      title: 'Patch XX.Y — titre descriptif',
      slug: 'patch-XX-Y',
      type: 'live',
      status: 'published',
      publishedAt: 'YYYY-MM-DDT08:00:00.000Z',
      coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/NomChampion_0.jpg',
      excerpt: 'Résumé du patch en 1-2 phrases.',
      sourceUrl: 'https://www.leagueoflegends.com/en-us/news/game-updates/patch-XX-Y-notes/',
      highlights: [
        { text: '🔺 Champion — buff description' },
        { text: '🔻 Champion — nerf description' },
        { text: '⚙️ Champion — ajustement' },
        { text: '🎮 Mode — changement' },
      ],
      content: [
        { type: 'h2', children: [{ text: 'Buffs' }] },
        { type: 'h4', children: [{ text: 'NomChampion' }] },
        { type: 'p', children: [{ text: 'Description du buff...' }] },
        { type: 'h2', children: [{ text: 'Nerfs' }] },
        { type: 'h4', children: [{ text: 'NomChampion' }] },
        { type: 'p', children: [{ text: 'Description du nerf...' }] },
        { type: 'h2', children: [{ text: 'Changements systèmes' }] },
        { type: 'ul', children: [
          { type: 'li', children: [{ text: '🔺 Item — description' }] },
        ]},
        { type: 'blockquote', children: [{ text: 'Note finale sur le patch.' }] },
      ],
    } as any,
  })

  console.log('  ✅ Patch XX.Y créé')
}
```

**coverImage** : DDragon format `NomChampion_0.jpg` en PascalCase → ex: `LeeSin_0.jpg`, `Jinx_0.jpg`, `MasterYi_0.jpg`

## Étape 5 — Si pas de nouveau patch
Ne crée rien. Indique la version déjà couverte et pourquoi il n'y a pas de nouveau patch.

## Étape 6 — Commit et push
```bash
git add payload/src/migrations/
git commit -m "content: patch notes $(date +%Y-%m-%d)"
git push origin main
```

## Étape 7 — Rapport final
- Patch créé (version, champions impactés) OU raison du skip
- Statut du git push
