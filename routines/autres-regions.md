# Agent Autres Régions — RiftMatch

## Setup git
```bash
git config user.email jfbujoli@gmail.com
git config user.name Jifou
```

## Étape 1 — Prochain numéro de migration
```bash
ls payload/src/migrations/ | sort | tail -5
```

## Étape 2 — Recherches
- `LCS 2026 results Cloud9 Team Liquid 100 Thieves standings`
- `CBLOL 2026 Brazil results`
- `LLA 2026 Latin America league of legends results`
- `MSI 2026 OR Worlds 2026 league of legends results bracket`
- `VCS PCS 2026 league of legends`

Ligues : LCS (Amérique du Nord), CBLOL (Brésil), LLA (Amérique latine), VCS (Vietnam), PCS (Pacifique).
Événements internationaux prioritaires : MSI, Worlds.

## Étape 3 — Décider quoi créer
Crée SEULEMENT si événement MAJEUR :
- Résultats MSI ou Worlds (matches, bracket, finale)
- Qualification d'une région surprise à un tournoi international
- Victoire d'une région mineure contre une major region
- Classement final d'une ligue (LCS notamment)

**Ne crée pas** pour des matchs de regular season classiques des ligues mineures.

## Étape 4 — Format migration
Fichier : `payload/src/migrations/0NN-regions-SLUG.ts`
Tags selon la région : `[{ tag: 'LCS' }, { tag: 'Esports' }]` ou `[{ tag: 'MSI' }, { tag: 'Worlds' }]`
Toujours 3 langues : FR, EN (slug + -en), ES (slug + -es).
Même structure TypeScript que les autres migrations news (voir lec.md).

## Étape 5 — Commit et push
```bash
git add payload/src/migrations/
git commit -m "content: regions news $(date +%Y-%m-%d)"
git push origin main
```
