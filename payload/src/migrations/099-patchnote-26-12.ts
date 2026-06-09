import type { MigrationModule } from './runner'

export const id = '099-patchnote-26-12'
export const description = 'Patch 26.12 — Orianna/Lee Sin nerfés, Teleport reworké, Syndra/Sylas boostés'

export const up: MigrationModule['up'] = async (payload) => {
  const existing = await payload.find({
    collection: 'patch-notes',
    where: { slug: { equals: 'patch-26-12' } },
  })
  if (existing.docs.length > 0) {
    console.log('  → Patch 26.12 déjà présent, skip.')
    return
  }

  await payload.create({
    collection: 'patch-notes',
    data: {
      version: '26.12',
      title: 'Patch 26.12 — Orianna trône renversé, Lee Sin affaibli, Teleport retravaillé',
      slug: 'patch-26-12',
      type: 'live',
      status: 'published',
      publishedAt: '2026-06-10T08:00:00.000Z',
      coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg',
      excerpt: "Le patch 26.12 débarque le 10 juin avec un coup de marteau sur Orianna (dominant la mid lane depuis des semaines), des nerfs sur Lee Sin, Xin Zhao AP, Nocturne, Ryze et Varus lethality, et des buffs pour Syndra, Sylas, Hwei, Aatrox, Gwen et Jax. Teleport perd son bouclier long-durée.",
      sourceUrl: 'https://www.leagueoflegends.com/en-us/news/game-updates/patch-26-12-notes/',
      highlights: [
        { text: "🔻 Orianna — nerf massif : passif -5% par stack, HP -20, E rés. réduits, R dégâts 250/400/550 → 225/350/475" },
        { text: "🔻 Lee Sin — AD growth 3.7 → 3.4, dégâts Q réduits, ratio bonus AD 95% → 90%" },
        { text: "🔻 Xin Zhao AP — soin passif 3-5% → 2-5% PV max" },
        { text: "🔻 Nocturne — dégâts Q réduits" },
        { text: "🔻 Ryze — -25 HP de base, -3 AD de base" },
        { text: "🔻 Varus lethality — ratio bonus AD Q 100-150% → 80-120%, AS on takedown 50% → 30%" },
        { text: "🔺 Syndra — Q 80-220 (+65% AP) → 90-230 (+70% AP), +20 HP de base" },
        { text: "🔺 Sylas — Q1 dégâts augmentés, soin E 20-30% AP → 30-60% AP" },
        { text: "🔺 Hwei — QQ/QW ratios AP buffs, E CD 13-11s → 12-10s" },
        { text: "🔺 Aatrox — sweetspot Q bonus damage 70% → 75%" },
        { text: "🔺 Gwen — Q dégâts +2 au max rang, E attaque bonus 20-80% → 30-80%" },
        { text: "🔺 Jax — Q mana 65 → 50, E dégâts % PV max 3.5/7% → 4/8%" },
        { text: "🔺 Tristana — AD growth 2.9 → 3.4, Q mana réduit" },
        { text: "🔺 Yuumi — ratio AP soin passif 25% → 30%, bouclier E 30% → 40% AP" },
        { text: "⚙️ Téléportation — bouclier empowered 30% PV/30s → 35% PV/10s" },
      ],
      content: [
        {
          type: 'h2',
          children: [{ text: 'Nerfs' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Orianna' }],
        },
        {
          type: 'p',
          children: [{ text: "Orianna reçoit le plus gros paquet de nerfs du patch. Son passif perd de la valeur (bonus de dégâts par stack réduit de 20% à 15%), ses HP de base chutent de 585 à 565, la résistance de son E passe de 6-30 à 5-25, et les ratios sont redistribués (dégâts 30% AP → 40%, bouclier 45% AP → 50% AP — légère compensation). Le gros coup vient de son ultime : dégâts réduits de 250/400/550 (+95% AP) à 225/350/475 (+115% AP), rendant le pic d'impact early moins dévastateur." }],
        },
        {
          type: 'h4',
          children: [{ text: 'Lee Sin' }],
        },
        {
          type: 'p',
          children: [{ text: "Lee Sin perd en scaling physique : son AD growth passe de 3.7 à 3.4, les dégâts de Q1 et Q2 sont réduits de 5 à tous les rangs (65/95/125/155/185 → 60/90/120/150/180), et le ratio bonus AD de Q descend de 95% à 90%. Ces nerfs ciblés limitent sa puissance en mid et late game sans toucher à sa mobilité." }],
        },
        {
          type: 'h4',
          children: [{ text: 'Xin Zhao (AP)' }],
        },
        {
          type: 'p',
          children: [{ text: "Deuxième nerf consécutif pour le build AP de Xin Zhao. Le soin de son passif passe de 3-5% des PV max à 2-5%, affaiblissant sa tankiness en survivabilité sur les builds full AP dont le soin était jugé excessif." }],
        },
        {
          type: 'h4',
          children: [{ text: 'Nocturne' }],
        },
        {
          type: 'p',
          children: [{ text: "Nocturne voit les dégâts de son Q réduits d'environ 20 au rang maximum. Ce nerf vise à tempérer son efficacité de clear en jungle et sa puissance de duel en mid game." }],
        },
        {
          type: 'h4',
          children: [{ text: 'Ryze' }],
        },
        {
          type: 'p',
          children: [{ text: "Ryze perd 25 HP de base et 3 AD de base. Ces nerfs de stats brutes le rendent plus fragile en lane phase, exposant davantage ses patterns de scaling à une pression adverse." }],
        },
        {
          type: 'h4',
          children: [{ text: 'Varus (lethality)' }],
        },
        {
          type: 'p',
          children: [{ text: "Le build lethality de Varus est directement ciblé : le ratio bonus AD du Q tombe de 100-150% à 80-120%, et la vitesse d'attaque gagnée au kill passe de 50% à 30%. Ce nerf réduit significativement le burst de la variante poke en rangs élevés et en compétitif." }],
        },
        {
          type: 'h2',
          children: [{ text: 'Buffs' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Syndra' }],
        },
        {
          type: 'p',
          children: [{ text: "Syndra bénéficie d'un double buff : ses HP de base augmentent de 563 à 583, et les dégâts de son Q gagnent en base et en ratio (80-220 +65% AP → 90-230 +70% AP). Ces améliorations renforcent sa présence en lane et son scaling en milieu de partie." }],
        },
        {
          type: 'h4',
          children: [{ text: 'Sylas' }],
        },
        {
          type: 'p',
          children: [{ text: "Sylas reçoit des buffs notables sur son Q1 (dégâts max passent à 140 avec 45% AP au lieu de 120 avec 40% AP) et sur son E (ratio de soin doublé : 20-30% AP → 30-60% AP). Ce dernier point améliore drastiquement sa survie en trades prolongés." }],
        },
        {
          type: 'h4',
          children: [{ text: 'Hwei' }],
        },
        {
          type: 'p',
          children: [{ text: "Hwei profite de quatre buffs : le ratio AP du QQ monte de 70% à 80%, celui du QW passe de 25-87.5% à 30-105%, le slow du QE augmente de 30% à 35%, et le cooldown du E descend d'une seconde à tous les rangs (13-11s → 12-10s). Un buff global de son damage et de son contrôle de zone." }],
        },
        {
          type: 'h4',
          children: [{ text: 'Aatrox' }],
        },
        {
          type: 'p',
          children: [{ text: "Le bonus de dégâts de la hitbox sweetspot du Q d'Aatrox progresse de 70% à 75%. Un buff modeste mais qui récompense davantage la précision en trades." }],
        },
        {
          type: 'h4',
          children: [{ text: 'Gwen' }],
        },
        {
          type: 'p',
          children: [{ text: "Gwen gagne 2 dégâts par mini-coup de Q au rang max (10-24 → 10-26), et la vitesse d'attaque bonus de son E augmente au rang 1 (20-80% → 30-80%). Ces ajustements améliorent son rythme de trade en top lane." }],
        },
        {
          type: 'h4',
          children: [{ text: 'Jax' }],
        },
        {
          type: 'p',
          children: [{ text: "Jax voit le coût en mana de son Q réduit de 65 à 50, et les dégâts % des PV max de son E augmentent (3.5% min / 7% max → 4% min / 8% max). Ces changements améliorent son endurance en lane et sa puissance contre les tanks." }],
        },
        {
          type: 'h4',
          children: [{ text: 'Tristana' }],
        },
        {
          type: 'p',
          children: [{ text: "Tristana reçoit un buff de scaling via son AD growth (2.9 → 3.4) et une réduction du coût en mana de son Q (30-50 → 15-35). Ces changements renforcent son mid game en favorisant un usage plus fréquent du reset de Q." }],
        },
        {
          type: 'h4',
          children: [{ text: 'Yuumi' }],
        },
        {
          type: 'p',
          children: [{ text: "Le ratio AP du soin passif de Yuumi passe de 25% à 30%, et le ratio AP du bouclier de son E monte de 30% à 40%. Ces buffs renforcent son utilité en tant qu'enchanteresse sur les builds AP orientés heal." }],
        },
        {
          type: 'h2',
          children: [{ text: 'Systèmes — Téléportation' }],
        },
        {
          type: 'p',
          children: [{ text: "La Téléportation empowered reçoit un ajustement majeur : le bouclier accordé à l'arrivée passe de 30% des PV max pendant 30 secondes à 35% des PV max pendant seulement 10 secondes. Le bouclier est légèrement plus puissant, mais sa durée très courte met fin à la stratégie consistant à utiliser le TP sur une courte distance juste avant un engagement d'objectif pour bénéficier d'un bouclier en teamfight." }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: "⚙️ TP empowered — bouclier 30% PV max / 30s → 35% PV max / 10s" }] },
            { type: 'li', children: [{ text: "🎨 Skins Sinful Shores — LeBlanc Prestige, Brand, Hwei disponibles avec le patch" }] },
          ],
        },
        {
          type: 'blockquote',
          children: [{ text: "Le patch 26.12 arrive le 10 juin 2026. La chute d'Orianna en mid lane et les buffs coordonnés pour Syndra, Sylas et Hwei devraient redistribuer la hiérarchie mid. En top lane, Aatrox, Gwen et Jax gagnent en pertinence. Le nerf du Téléport ferme une stratégie pro jugée trop passive." }],
        },
      ],
    } as any,
  })

  console.log('  ✅ Patch 26.12 créé')
  console.log('✅ Migration 099 terminée')
}
