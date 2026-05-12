# Agent LCK — RiftMatch

## Setup git
```bash
git config user.email jfbujoli@gmail.com
git config user.name Jifou
```

## Étape 1 — Prochain numéro de migration
```bash
ls payload/src/migrations/ | sort | tail -5
```

## Étape 2 — Recherches LCK
- `LCK Spring Summer 2026 results standings`
- `LCK playoffs 2026 T1 GenG KT results`
- `lolesports.com LCK 2026`

Équipes : T1, Gen.G, KT Rolster, DRX, Hanwha Life Esports, BNK FearX, NongShim RedForce.
Joueurs clés : Faker (T1), Chovy (Gen.G), Zeus (T1), Keria (T1), Oner (T1).

## Étape 3 — Décider quoi créer
Crée un article SI événement significatif non encore couvert :
- Victoires en playoffs / classement final
- Qualification MSI ou Worlds
- Performance historique (record de wins, série impressionnante)
- Upset notable (T1 ou Gen.G battus par une équipe surprise)

## Étape 4 — Format migration (même structure que lec.md)
Fichier : `payload/src/migrations/0NN-lck-SLUG.ts`
Tags : `[{ tag: 'LCK' }, { tag: 'Esports' }, { tag: 'Corée' }]`
sourceUrl : `https://lolesports.com/...`
Toujours 3 langues : FR (slug de base), EN (slug + -en), ES (slug + -es).
Même structure TypeScript que les autres migrations news (voir lec.md).

## Étape 5 — Commit et push
```bash
git add payload/src/migrations/
git commit -m "content: LCK news $(date +%Y-%m-%d)"
git push origin main
```
