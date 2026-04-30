import type { MigrationModule } from './runner'

export const id = '018-replace-content-2026'
export const description = 'Supprime les samples 2024, ajoute Keria T1 news + patch 16.9 PBE'

export const up: MigrationModule['up'] = async (payload) => {

  // ── Purge ancien contenu migration 017 ─────────────────────────
  const oldNews = await payload.find({
    collection: 'news',
    where: { slug: { in: ['patch-14-9-adc-retour-en-force', 'msi-2024-calendrier-groupes'] } },
    limit: 10,
  })
  for (const doc of oldNews.docs) {
    await payload.delete({ collection: 'news', id: doc.id })
  }

  const oldPatches = await payload.find({
    collection: 'patch-notes',
    where: { slug: { in: ['patch-14-9', 'patch-14-10-pbe'] } },
    limit: 10,
  })
  for (const doc of oldPatches.docs) {
    await payload.delete({ collection: 'patch-notes', id: doc.id })
  }

  // ── News : Keria re-signe chez T1 ─────────────────────────────
  await payload.create({
    collection: 'news',
    data: {
      title: 'Keria prolonge l\'aventure chez T1 — contrat signé jusqu\'en 2028',
      slug: 'keria-re-signe-t1-2026',
      category: 'esports',
      locale: 'fr',
      status: 'published',
      publishedAt: '2026-04-28T10:00:00.000Z',
      author: 'RiftMatch',
      excerpt:
        'Ryu "Keria" Min-seok officialise sa prolongation de contrat avec T1 pour deux saisons supplémentaires. Le meilleur support du monde reste dans l\'équipe aux côtés de Faker.',
      tags: [
        { tag: 'T1' },
        { tag: 'Keria' },
        { tag: 'LCK' },
        { tag: 'Transferts 2026' },
      ],
      content: [
        {
          type: 'h2',
          children: [{ text: 'La nouvelle est officielle' }],
        },
        {
          type: 'p',
          children: [{ text: 'T1 a annoncé ce mardi la prolongation de contrat de Ryu "Keria" Min-seok pour deux nouvelles saisons — jusqu\'à fin 2028. Le support coréen, considéré depuis plusieurs années comme le meilleur à son poste au monde, avait laissé planer le doute sur son avenir lors des rumeurs de transfert vers une équipe LPL en début d\'année.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Pourquoi ce re-sign est capital pour T1' }],
        },
        {
          type: 'p',
          children: [{ text: 'Keria forme avec Gumayusi la botlane la plus titrée de la décennie. Sa capacité à s\'adapter à tous les metas de support — engage, enchanteresse, poke — en fait un pilier irremplaçable. Depuis son arrivée chez T1 en 2021, l\'équipe a remporté quatre titres mondiaux, dont deux auxquels Keria a participé directement en tant que starter.' }],
        },
        {
          type: 'p',
          children: [{ text: 'Son association avec Faker, qui continue lui aussi sa carrière à 29 ans, donne à T1 une stabilité de roster rare dans l\'esport compétitif. La direction a clairement fait le choix de la continuité face aux offres massives venues de Chine.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Ce que Keria a déclaré' }],
        },
        {
          type: 'blockquote',
          children: [{ text: '"Je voulais gagner encore avec cette équipe, avec ces joueurs. T1, c\'est ma maison. On n\'a pas terminé ce qu\'on a commencé." — Keria, lors de la conférence de presse officielle' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Implications pour la saison 2026' }],
        },
        {
          type: 'p',
          children: [{ text: 'T1 aborde le second split de la saison régulière LCK avec un effectif stabilisé. Leur prochaine échéance majeure est le MSI 2026 prévu en juin, où ils espèrent décrocher le titre face aux représentants LPL, qui dominent la scène internationale depuis le début de l\'année.' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Roster T1 2026 : Zeus, Oner, Faker, Gumayusi, Keria' }] },
            { type: 'li', children: [{ text: 'Prochain match LCK : T1 vs Gen.G — 2 mai 2026' }] },
            { type: 'li', children: [{ text: 'MSI 2026 : juin, lieu à confirmer' }] },
          ],
        },
      ],
    },
  })

  // ── Patch note : 16.9 PBE ──────────────────────────────────────
  await payload.create({
    collection: 'patch-notes',
    data: {
      version: '16.9 PBE',
      title: 'Patch 16.9 PBE — Changements en preview',
      slug: 'patch-16-9-pbe',
      type: 'pbe',
      status: 'published',
      publishedAt: '2026-04-28T09:00:00.000Z',
      excerpt:
        'Le PBE 16.9 test une série de nerfs sur les supports engage et des buffs pour relancer plusieurs junglers en difficulté. Prévu en Live le 13 mai 2026.',
      highlights: [
        { text: '🔺 Nidalee — Heal W augmenté en forme humaine' },
        { text: '🔺 Kha\'Zix — Dégâts Q isolés +10' },
        { text: '🔺 Tristana — AD de base 56 → 58' },
        { text: '🔻 Nautilus — Cooldown R augmenté' },
        { text: '🔻 Leona — Ratio de stun E réduit' },
        { text: '🔻 Zeri — Ratio AS nerf confirmé' },
        { text: '⚖️ Smolder — Mécanique de stacks ajustée' },
        { text: '⚖️ Ambessa — Cooldown passif normalisé' },
      ],
      content: [
        {
          type: 'p',
          children: [{ text: 'Ces changements sont en cours de test sur le PBE et peuvent être modifiés ou annulés avant la sortie officielle du patch 16.9, prévue le 13 mai 2026. Les chiffres ci-dessous reflètent l\'état des tests au 28 avril.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Champions' }],
        },
        {
          type: 'h3',
          children: [{ text: 'Buffs' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Nidalee' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'W — Primal Surge (forme humaine) : Soin de base : 45/85/125/165/205 → 55/100/145/190/235' }] },
            { type: 'li', children: [{ text: 'Ratio AP du soin : 45% → 55%' }] },
          ],
        },
        {
          type: 'p',
          children: [{ text: 'Nidalee jungle souffre depuis le rework des items de jungleur. Ce buff cible son sustain en clairière sans toucher à sa puissance burst.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Kha\'Zix' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Q — Taste Their Fear : Dégâts isolés bonus : 55/80/105/130/155 → 65/90/115/140/165' }] },
          ],
        },
        {
          type: 'h4',
          children: [{ text: 'Tristana' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'AD de base : 56 → 58' }] },
            { type: 'li', children: [{ text: 'E — Explosive Charge : Dégâts de base au niveau 1 : 70 → 80' }] },
          ],
        },
        {
          type: 'h3',
          children: [{ text: 'Nerfs' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Nautilus' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'R — Depth Charge : Cooldown : 120/100/80s → 140/115/90s' }] },
            { type: 'li', children: [{ text: 'Dégâts R : 250/375/500 → 225/337/450' }] },
          ],
        },
        {
          type: 'p',
          children: [{ text: 'Nautilus affiche un taux de victoire supérieur à 53% sur tous les rangs depuis trois patches. Le nerf de son ultime vise à limiter son impact en teamfight sans toucher à son engage de base (Q).' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Leona' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'E — Zenith Blade : La durée d\'immobilisation à l\'arrivée passe de 0.5s → 0.25s' }] },
          ],
        },
        {
          type: 'h4',
          children: [{ text: 'Zeri' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'AS par niveau : 3.5% → 3.0%' }] },
            { type: 'li', children: [{ text: 'Q — Burst Fire : Ratio AS réduit : 115% → 105%' }] },
          ],
        },
        {
          type: 'h3',
          children: [{ text: 'Ajustements' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Smolder' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'P — Dragon Practice : Les stacks requis pour le palier 25 passent de 25 → 30 tués' }] },
            { type: 'li', children: [{ text: 'Compensation : Le bonus de dégâts au palier 25 passe de +15% → +20%' }] },
          ],
        },
        {
          type: 'p',
          children: [{ text: 'L\'objectif est de rendre la progression de Smolder plus lisible et de récompenser davantage les joueurs qui atteignent les paliers élevés.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Ambessa' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'P — Drakehound\'s Step : Le délai entre deux dashes normalisé à 0.4s (était variable selon le ping)' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Objets' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Heartsteel' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Proc de stacks : cooldown augmenté de 40s → 45s contre les champions' }] },
          ],
        },
        {
          type: 'h4',
          children: [{ text: 'Bloodthirster' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'AD : 70 → 75' }] },
            { type: 'li', children: [{ text: 'Prix : 3400 → 3500 or' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Jungle — Changements de camp' }],
        },
        {
          type: 'p',
          children: [{ text: 'Les camps Gromp et Pierre-Corbeau voient leur or réduit de 5 pièces chacun pour ralentir légèrement le tempo d\'XP des junglers qui abusent du clear rapide sans participer aux combats.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Correctifs de bugs notables' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Corrigé : le passif de Statikk Shiv ne se déclenchait pas correctement sur les cibles sous un bouclier' }] },
            { type: 'li', children: [{ text: 'Corrigé : Ambessa pouvait traverser certains murs non intentionnels avec son E' }] },
            { type: 'li', children: [{ text: 'Corrigé : l\'animation de recall de Smolder se coupait sur les skins légendaires' }] },
          ],
        },
      ],
    },
  })
}
