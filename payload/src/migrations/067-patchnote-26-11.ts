import type { MigrationModule } from './runner'

export const id = '067-patchnote-26-11'
export const description = 'Patch 26.11 — Kassadin/Diana buffs, refonte supports, Deathfire Touch magic'

export const up: MigrationModule['up'] = async (payload) => {
  const existing = await payload.find({
    collection: 'patch-notes',
    where: { slug: { equals: 'patch-26-11' } },
  })
  if (existing.docs.length > 0) {
    console.log('  → Patch 26.11 déjà présent, skip.')
    return
  }

  await payload.create({
    collection: 'patch-notes',
    data: {
      version: '26.11',
      title: 'Patch 26.11 — Kassadin & Diana boostés, refonte du support bot',
      slug: 'patch-26-11',
      type: 'live',
      status: 'published',
      publishedAt: '2026-05-28T08:00:00.000Z',
      coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_0.jpg',
      excerpt: 'Le patch 26.11 débarque le 28 mai avec des buffs pour Kassadin, Diana, Ekko et Quinn en jungle, des nerfs sur Brand, Smolder et l\'AP Xin Zhao, et une refonte majeure du méta support pour ramener les tanks en botlane.',
      sourceUrl: 'https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-11-notes/',
      highlights: [
        { text: '🔺 Kassadin — Q cooldown réduit, W dégâts passifs augmentés' },
        { text: '🔺 Diana — dégâts monstres +40% (Moonsilver Blade)' },
        { text: '🔺 Ekko — cooldown passif 5s → 4s (clear plus fluide)' },
        { text: '🔺 Quinn — dégâts monstres passif 50 → 75, Q 150% → 200%' },
        { text: '🔺 Heimerdinger — portée tourelles +20, durée vision E +0.25s' },
        { text: '🔺 Voidgrubs — dégâts vrais/s augmentés (6-24 → 8-32)' },
        { text: '🔺 Heartsteel / Locket / Knight\'s Vow / Zeke\'s — buffs supports tanks' },
        { text: '🔻 Brand — armure de base 27 → 24' },
        { text: '🔻 Smolder — dégâts passifs Q et E nerfés' },
        { text: '🔻 Teemo — nerf' },
        { text: '🔻 Xin Zhao AP — ratios de soin AP réduits' },
        { text: '🔻 Moonstone / Helia / Aery — nerfs enchanteresses ranged' },
        { text: '⚙️ Deathfire Touch — passe en dégâts magiques (fin du synergisme Black Cleaver)' },
      ],
      content: [
        {
          type: 'h2',
          children: [{ text: 'Buffs' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Kassadin' }],
        },
        {
          type: 'p',
          children: [{ text: 'Kassadin reçoit deux buffs significatifs : le cooldown de son Q passe de 10-8 à 9-7 secondes, et les dégâts passifs de son W augmentent de 20 (+10% AP) à 25 (+10% AP). Ces changements renforcent sa fenêtre de roaming et son pouvoir de trades en mid lane.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Diana' }],
        },
        {
          type: 'p',
          children: [{ text: 'Le ratio de dégâts sur monstres de Moonsilver Blade (passif Diana) augmente de 40%. Ce buff cible directement sa vitesse de clear en jungle, où elle avait du mal à s\'imposer face à des junglers plus efficaces.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Ekko' }],
        },
        {
          type: 'p',
          children: [{ text: 'Le cooldown du passif d\'Ekko par cible passe de 5 à 4 secondes. Ce changement améliore son rythme de clear en jungle, le rendant plus compétitif sur les camps où la fréquence du proc est critique.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Quinn' }],
        },
        {
          type: 'p',
          children: [{ text: 'Quinn reçoit un double buff pour conforter son rôle de jungler. Les dégâts bonus sur monstres du passif passent de 50 à 75, et les dégâts de son Q sur monstres bondissent de 150% à 200%, lui donnant une présence nettement plus marquée dans la jungle.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Heimerdinger' }],
        },
        {
          type: 'p',
          children: [{ text: 'La portée des tourelles du Q passe de 530 à 550 (avec +50 supplémentaires contre les minions), et la durée de vision de son E passe de 1s à 1.25s. Ce correctif évite le cas où les tourelles perdent la vision d\'un minion et ne peuvent plus déclencher leur laser.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Nerfs' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Brand' }],
        },
        {
          type: 'p',
          children: [{ text: 'L\'armure de base de Brand est réduite de 27 à 24. Ce nerf ciblé le rend plus vulnérable aux assauts physiques en lane, notamment face aux ADC et jungler AD.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Smolder' }],
        },
        {
          type: 'p',
          children: [{ text: 'Les dégâts magiques bonus du passif sur le Q de Smolder passent de 40-60% à 25-55% des stacks passifs, et ceux de son E de 12% à 8-12%. Un nerf préventif pour maintenir Smolder en ligne avec les ajustements de Deathfire Touch.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Xin Zhao (AP)' }],
        },
        {
          type: 'p',
          children: [{ text: 'Le ratio AP sur le soin du passif de Xin Zhao est réduit : de +50/65/90% AP à +45/55/80% AP selon les niveaux. Riot cible spécifiquement le build AP, dont le soin surpassait celui de champions conçus autour de la régénération de vie.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Teemo' }],
        },
        {
          type: 'p',
          children: [{ text: 'Teemo reçoit un nerf dans ce patch. Les détails exacts seront confirmés dans les notes officielles du 28 mai.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Refonte du méta support — melee vs ranged' }],
        },
        {
          type: 'p',
          children: [{ text: 'Le changement le plus important de ce patch est la refonte de l\'écosystème support. Riot cherche à ramener les supports engage et tank en botlane en bufant leurs outils et en nerfant les enchanteresses ranged.' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: '🔺 Heartsteel, Locket of the Iron Solari, Knight\'s Vow, Zeke\'s Convergence — buffs en faveur des supports tanks/mêlée' }] },
            { type: 'li', children: [{ text: '🔺 Aftershock & Guardian — runes buffées pour les supports engage' }] },
            { type: 'li', children: [{ text: '🔻 Moonstone Renewer, Helia, Dreammaker — nerfs enchanteresses' }] },
            { type: 'li', children: [{ text: '🔻 Aery — nerf de la rune, trop efficace sur les supports ranged' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Systèmes & Runes' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: '⚙️ Deathfire Touch — passe en dégâts magiques (au lieu d\'adaptatifs) : retire l\'interaction non voulue avec Black Cleaver' }] },
            { type: 'li', children: [{ text: '🔺 Voidgrubs — dégâts vrais par seconde augmentés de 6-24 à 8-32 (toujours x0.5 pour les ranged)' }] },
          ],
        },
        {
          type: 'blockquote',
          children: [{ text: 'Le patch 26.11 arrive le 28 mai 2026. La refonte des supports bot et la correction de Deathfire Touch devraient avoir un impact notable sur les métas ranked et compétitif.' }],
        },
      ],
    } as any,
  })

  console.log('  ✅ Patch 26.11 créé')
  console.log('✅ Migration 067 terminée')
}
