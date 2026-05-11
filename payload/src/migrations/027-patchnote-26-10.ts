import type { MigrationModule } from './runner'

export const id = '027-patchnote-26-10'
export const description = 'Patch note 26.10 — Lee Sin rework, nerfs Zed/Naafiri/Shyvana, Arena 6v3'

export const up: MigrationModule['up'] = async (payload) => {
  const existing = await payload.find({
    collection: 'patch-notes',
    where: { slug: { equals: 'patch-26-10' } },
  })
  if (existing.docs.length > 0) {
    console.log('  → Patch 26.10 déjà présent, skip.')
    return
  }

  await payload.create({
    collection: 'patch-notes',
    data: {
      version: '26.10',
      title: 'Patch 26.10 — Lee Sin remanié, Zed/Naafiri nerfés, Arena 6v3',
      slug: 'patch-26-10',
      type: 'live',
      status: 'published',
      publishedAt: '2026-05-13T08:00:00.000Z',
      coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg',
      excerpt: 'Le patch 26.10 arrive le 13 mai avec le rework de Lee Sin, des nerfs sur Zed, Naafiri et Shyvana, des buffs pour Ambessa et Galio, et un Arena 6 équipes de 3.',
      sourceUrl: 'https://www.leagueoflegends.com/en-us/news/game-updates/',
      highlights: [
        { text: '🔺 Ambessa — buff dégâts' },
        { text: '🔺 Galio — buff AP ratios' },
        { text: '🔺 Wukong — buff clone' },
        { text: '🔺 Zeri — fix ultime' },
        { text: '🔺 Lichbane — buff système' },
        { text: '🔺 Stormraider\'s Surge — buff système' },
        { text: '🔻 Zed — nerf mid lane' },
        { text: '🔻 Naafiri — nerf mid lane' },
        { text: '🔻 Shyvana — nerf' },
        { text: '🔻 Anivia — nerf' },
        { text: '🔻 Ashe — nerf' },
        { text: '🔻 Deathfire Touch — nerf rune' },
        { text: '🔻 Gluttonous Greaves — +50g, omnivamp réduit' },
        { text: '⚙️ Lee Sin — rework mobilité' },
        { text: '🎮 Arena — nouveau format 6 équipes de 3' },
      ],
      content: [
        {
          type: 'h2',
          children: [{ text: 'Buffs' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Ambessa' }],
        },
        {
          type: 'p',
          children: [{ text: 'Ambessa reçoit un buff significatif sur son profil de dégâts. Son potentiel offensif est rehaussé pour la rendre plus cohérente dans la toplane après plusieurs patches difficiles.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Galio' }],
        },
        {
          type: 'p',
          children: [{ text: 'Galio profite d\'une amélioration de ses ratios AP, le poussant vers des builds plus orientés mage. Un buff bienvenu pour diversifier son expression.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Wukong' }],
        },
        {
          type: 'p',
          children: [{ text: 'Le clone de Wukong gagne en puissance. Ce buff renforce sa capacité à tromper les adversaires et à maintenir une pression de split-push.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Zeri' }],
        },
        {
          type: 'p',
          children: [{ text: 'Le correctif sur l\'ultime de Zeri règle un bug impactant sa fiabilité en teamfight. Indirectement un buff, puisque sa capacité signature fonctionnera désormais comme prévu.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Nerfs' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Zed' }],
        },
        {
          type: 'p',
          children: [{ text: 'Zed domine la mid lane depuis plusieurs patches. Riot réduit ses dégâts pour rééquilibrer le matchup en son défaveur face aux mages.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Naafiri' }],
        },
        {
          type: 'p',
          children: [{ text: 'Naafiri était trop puissante en mid lane sur tous les Elos. Les nerfs ciblent son burst pour lui laisser de l\'espace sans qu\'elle écrase tous les matchups.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Shyvana' }],
        },
        {
          type: 'p',
          children: [{ text: 'Shyvana reçoit un nerf de ses statistiques de base après avoir été trop dominante dans les compositions de teamfight.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Anivia & Ashe' }],
        },
        {
          type: 'p',
          children: [{ text: 'Anivia et Ashe subissent des nerfs sur leurs capacités de contrôle de zone et de kiting, jugées trop efficaces dans la meta actuelle.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Ajustements champions' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Lee Sin — Rework mobilité' }],
        },
        {
          type: 'p',
          children: [{ text: 'Lee Sin reçoit un rework partiel centré sur sa mobilité. Son W et son E subissent des ajustements numériques, mais la grande nouveauté est une modification de son dash qui change fondamentalement son rythme de jeu. Un changement majeur à surveiller en jungle.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Changements systèmes' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: '🔺 Lichbane — statistiques améliorées, renforcement du profil burst mage' }] },
            { type: 'li', children: [{ text: '🔺 Stormraider\'s Surge — buff des stats pour rendre l\'item plus compétitif' }] },
            { type: 'li', children: [{ text: '🔻 Deathfire Touch — nerf de la rune, trop dominante dans plusieurs builds' }] },
            { type: 'li', children: [{ text: '🔻 Gluttonous Greaves — coût +50g, omnivamp par stack réduit de 1% → 0.6%' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Arena — Nouveau format 6 équipes de 3' }],
        },
        {
          type: 'p',
          children: [{ text: 'Arena change radicalement de format avec l\'introduction de 6 équipes de 3 joueurs (contre 8 équipes de 2 auparavant). De nouvelles maps, de nouveaux augments et des ajustements globaux accompagnent ce changement.' }],
        },
        {
          type: 'blockquote',
          children: [{ text: 'Le patch 26.10 arrive le 13 mai 2026. Les notes complètes seront disponibles sur leagueoflegends.com à la date de sortie.' }],
        },
      ],
    } as any,
  })

  console.log('  ✅ Patch 26.10 créé')
  console.log('✅ Migration 027 terminée')
}
