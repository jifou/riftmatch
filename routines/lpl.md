# Agent LPL — RiftMatch

## Setup git
```bash
git config user.email jfbujoli@gmail.com
git config user.name Jifou
```

## Étape 1 — Prochain numéro de migration
```bash
ls payload/src/migrations/ | sort | tail -5
```

## Étape 2 — Recherches LPL
- `LPL Spring Summer 2026 results standings`
- `LPL playoffs 2026 BLG JDG EDG TES results`
- `lolesports.com LPL 2026`

Équipes : BiliBili Gaming (BLG), JDG, EDward Gaming (EDG), Top Esports (TES), Weibo Gaming, FunPlus Phoenix (FPX), NIP.

## Étape 3 — Décider quoi créer
Crée un article SI événement significatif non encore couvert :
- Victoires en playoffs / classement final
- Qualification MSI ou Worlds
- Domination d'une équipe (BLG, JDG, EDG sweep notable)
- Upset ou comeback marquant

## Étape 4 — Format migration
Fichier : `payload/src/migrations/0NN-lpl-SLUG.ts`
Tags : `[{ tag: 'LPL' }, { tag: 'Esports' }, { tag: 'Chine' }]`
Toujours 3 langues : FR, EN (slug + -en), ES (slug + -es).
Même structure TypeScript que les autres migrations news (voir lec.md).

## Étape 5 — Commit et push
```bash
git add payload/src/migrations/
git commit -m "content: LPL news $(date +%Y-%m-%d)"
git push origin main
```
