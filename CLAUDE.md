# RiftMatch — Référence projet

## Stack

- **Astro** (frontend SSR) — port 4322
- **Payload CMS** (API + admin) — port 3001 (Docker), proxy admin port 3010
- **MongoDB** — port 27017 (Docker)

---

## Commandes

### Astro (frontend)

```bash
cd astro
npm run dev:preview     # dev avec preview (port 4322)
npm run build           # build de prod
```

### Payload CMS

```bash
cd payload
npm run dev             # démarre le CMS en dev (port 3001)
npm run build           # build de prod
```

> ⚠️ Les `node_modules` sont dans le container Docker, pas en local.
> Les commandes Payload doivent être lancées via `docker exec` :

```bash
# Lancer les migrations (depuis la racine du projet)
docker exec lolp_payload node_modules/.bin/ts-node-dev --transpile-only --exit-child src/migrations/runner.ts
```

### Docker (tout lancer)

```bash
docker compose up --build          # démarre tous les services
docker compose up -d               # en arrière-plan
docker compose down                # arrête tout
```

---

## Workflow — Créer du contenu via migration (Claude peut le faire autonomement)

**Tout contenu Payload** (articles, blocs affiliate, etc.) se crée via une migration :
1. Créer `payload/src/migrations/00X-nom.ts` (exporter `id`, `description`, `up`)
2. Lancer dans le container Docker :
```bash
docker exec lolp_payload node_modules/.bin/ts-node-dev --transpile-only --exit-child src/migrations/runner.ts
```

**Collections disponibles :**
- `pages` → articles/guides (disponibles sur `/info/[slug]`)
  - Champ `template` : `article` (défaut) | `guide` (2 colonnes + sidebar ToC) | `listicle` (Top X numéroté)
- `affiliate-blocks` → blocs pub (placements: `homepage-hero`, `quiz-results`, `quiz-results-bottom`, `champion-sidebar`, `article-content`, `article-sidebar`)
- `champion-content` → descriptions éditoriales des champions

**Auth :** pas nécessaire — les migrations utilisent l'API locale Payload (`local: true`) qui bypasse l'authentification.

---

## Migrations de contenu

Les migrations vivent dans `payload/src/migrations/`.  
Chaque fichier exporte `id`, `description`, et `up(payload)`.

```bash
cd payload && npm run migrate
```

- Idempotent — ne rejoue que les migrations non encore exécutées
- Les migrations exécutées sont trackées dans la collection `migrations` de MongoDB
- Nommer les fichiers `001-nom.ts`, `002-nom.ts`… (ordre alphabétique = ordre d'exécution)

### Créer une nouvelle migration

```
payload/src/migrations/002-mon-article.ts
```

```typescript
import type { MigrationModule } from './runner'

export const id = '002-mon-article'
export const description = 'Description courte'

export const up: MigrationModule['up'] = async (payload) => {
  await payload.create({
    collection: 'pages',
    data: { title: '...', slug: '...', content: [...] },
  })
}
```

---

## Pages de contenu

Les pages créées via Payload sont disponibles sur `/info/[slug]`.  
Ex : `/info/qu-est-ce-que-league-of-legends`

L'admin Payload est accessible sur `http://localhost:3010/admin`.

---

## Collections Payload

| Collection       | Usage                                      |
|------------------|--------------------------------------------|
| `pages`          | Articles/pages de contenu (rich text)      |
| `champion-content` | Descriptions éditoriales des champions   |
| `affiliate-blocks` | Blocs pub contextuels par placement      |
| `migrations`     | Tracker interne des migrations (ne pas modifier) |
| `users`          | Admins CMS                                 |
