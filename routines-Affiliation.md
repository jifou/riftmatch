# Agent Affiliation — RiftMatch

## Setup git
```bash
git config user.email jfbujoli@gmail.com
git config user.name Jifou
```

## Étape 1 — Prochain numéro de migration
```bash
ls payload/src/migrations/ | sort | tail -5
```
Note le dernier numéro N → utilise N+1.

## Étape 2 — Vérifier les doublons
```bash
grep -r "title:" payload/src/migrations/*affiliate* | grep -i product
```
Liste les produits déjà présents pour ne pas créer de doublon.

## Étape 3 — Choisir un produit
Cherche un produit gaming ou League of Legends sur Amazon (un seul produit par semaine) :
- Périphérique gaming : souris, clavier, casque, tapis de souris, webcam
- Merch officiel Riot : peluche, figurine, collector, vêtement
- Accessoire streamer ou esport

Recherches web :
- `gaming peripherique League of Legends Amazon 2026`
- `Riot Games official merch Amazon figurine peluche`
- `meilleure souris gaming League of Legends 2026`

Récupère : nom exact du produit, ASIN Amazon (dans l'URL : amazon.fr/dp/ASIN).
URLs à générer :
- FR : `https://www.amazon.fr/dp/ASIN`
- EN : `https://www.amazon.co.uk/dp/ASIN`
- ES : `https://www.amazon.es/dp/ASIN`

## Étape 4 — Trouver l'image du produit

**⚠️ Amazon bloque le scraping d'images. Ne jamais utiliser une URL amazon.com/images.**

Stratégie par type de produit :

### Périphériques gaming
- Razer : `https://www.razer.com/fr-fr/` → page produit → clic droit image → copier URL
- Logitech : `https://www.logitechg.com/fr-fr/` → page produit
- SteelSeries : `https://fr.steelseries.com/` → page produit
- HyperX : `https://www.hyperxgaming.com/fr/` → page produit
- Cherche `"[nom produit] site:razer.com OR site:logitechg.com OR site:steelseries.com"`

### Merch Riot officiel
- Riot Games Store : `https://www.riotgames.com/fr/` ou `https://merch.leagueoflegends.com/`
- Riot CDN : `https://cdn.sanity.io/images/dsfx7636/consumer_products_live/`
- Cherche `"[nom produit] site:merch.leagueoflegends.com"`

### Fallback général
- Cherche `"[nom produit] image officielle" filetype:jpg OR filetype:png` et récupère une URL directe
- Essaie le site du fabricant directement via WebFetch

**Si après 3 tentatives aucune image valide trouvée :**
- Note `imageUrl = 'IMAGE_MANQUANTE'` dans la migration
- Passe à l'étape 5 normalement
- À l'étape 6 tu enverras un email

## Étape 5 — Créer la migration

Fichier : `payload/src/migrations/0NN-affiliate-SLUG.ts`

Structure exacte (voir `029-affiliate-new-products.ts` pour référence complète) :

```typescript
import type { MigrationModule } from './runner'

export const id = 'NNN-affiliate-slug'
export const description = 'Nouveau bloc affilié — NomProduit'

const products = [
  {
    title: 'Nom Exact du Produit',
    active: true,
    links: [
      { locale: 'fr', url: 'https://www.amazon.fr/dp/ASIN' },
      { locale: 'en', url: 'https://www.amazon.co.uk/dp/ASIN' },
      { locale: 'es', url: 'https://www.amazon.es/dp/ASIN' },
    ],
    product: {
      name: 'Nom complet affiché',
      tagline: 'Description courte et vendeuse (1 phrase max)',
      imageUrl: 'https://...url-image-depuis-site-fabricant.jpg',
      ctaText: 'Voir sur Amazon →',
      badge: 'Choix Pro',  // ou: 'Collector Officiel', 'Premium', 'Official LoL Gear', 'Top Vente'
    },
    disclosure: 'Lien affilié Amazon — nous touchons une commission sans coût supplémentaire pour toi.',
  },
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const product of products) {
    const existing = await payload.find({
      collection: 'affiliate-blocks',
      where: { title: { equals: product.title } },
    })
    if (existing.docs.length > 0) {
      console.log(`  → "${product.title}" déjà présent, skip.`)
      continue
    }
    await payload.create({ collection: 'affiliate-blocks', data: product as any })
    console.log(`  ✅ ${product.title}`)
  }
  console.log('✅ Migration affiliation terminée')
}
```

## Étape 6 — Commit et push
```bash
git add payload/src/migrations/
git commit -m "content: affiliate $(date +%Y-%m-%d)"
git push origin main
```

## Étape 7 — Email si image manquante

Si `imageUrl = 'IMAGE_MANQUANTE'`, utilise le Gmail MCP pour envoyer un email :
- **À** : jfbujoli@gmail.com
- **Sujet** : [RiftMatch] Image manquante — bloc affilié
- **Corps** : Indique le nom du produit ajouté, l'ASIN, les URLs que tu as essayées pour trouver l'image, et pourquoi elles ont échoué. Demande à Jifou de renseigner l'image manuellement dans le Payload Admin (https://cms.riftmatch.io/admin).

## Règles
- Un seul produit par semaine
- Pas de doublon (vérifier les migrations existantes)
- Image obligatoirement depuis le site du fabricant (jamais Amazon)
- Pas de Co-Authored-By dans les commits
