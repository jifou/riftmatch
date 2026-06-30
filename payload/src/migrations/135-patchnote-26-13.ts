import type { MigrationModule } from './runner'

export const id = '135-patchnote-26-13'
export const description = "Patch 26.13 — Nouveau champion Locke, nerfs Senna/K'Sante, buffs LeBlanc/Aphelios"

export const up: MigrationModule['up'] = async (payload) => {
  const existing = await payload.find({
    collection: 'patch-notes',
    where: { slug: { equals: 'patch-26-13' } },
  })
  if (existing.docs.length > 0) {
    console.log('→ skip')
    return
  }

  await payload.create({
    collection: 'patch-notes',
    data: {
      version: '26.13',
      title: 'Patch 26.13 — Locke arrive sur la Faille',
      slug: 'patch-26-13',
      type: 'live',
      status: 'published',
      publishedAt: '2026-06-24T08:00:00.000Z',
      coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Locke_0.jpg',
      excerpt: "Le patch 26.13 introduit Locke, l'Exorciste des Cendres, et remodèle la meta MSI 2026 avec des nerfs ciblés sur Senna, K'Sante et Brand, pendant que LeBlanc, Aphelios et Olaf sont renforcés.",
      sourceUrl: 'https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-13-notes/',
      highlights: [
        { text: "Nouveau champion : Locke, l'Exorciste des Cendres" },
        { text: "Nerfs : Senna, Bard, Brand, K'Sante, Rumble, Sion" },
        { text: "Buffs : LeBlanc, Aphelios, Draven, Kai'Sa, Olaf, Kindred, Poppy, Qiyana, Vex" },
        { text: "Doran's Helm nerfé, Imperial Mandate buffé" },
        { text: "Ranked 5v5 de retour le 26 juin" },
      ],
      content: [
        { type: 'h2', children: [{ text: "Nouveau champion" }] },
        { type: 'h4', children: [{ text: "Locke — L'Exorciste des Cendres" }] },
        { type: 'p', children: [{ text: "Locke est un nouveau champion de mid lane qui débarque sur la Faille des Invocateurs avec le patch 26.13. Chasseur de démons maniant le feu sacré, il intègre dès son lancement la ligne de skins High Noon aux côtés d'Akshan." }] },
        { type: 'h2', children: [{ text: "Nerfs" }] },
        { type: 'h4', children: [{ text: "Senna" }] },
        { type: 'p', children: [{ text: "Senna est affaiblie sur ce patch de référence MSI pour corriger sa domination en jeu compétitif et en solo queue, notamment avec les builds tank-support." }] },
        { type: 'h4', children: [{ text: "Bard" }] },
        { type: 'p', children: [{ text: "Bard est nerfé après s'être imposé dans le meta compétitif grâce à des builds tank orientés itinérance qui infligent beaucoup plus de dégâts que prévu." }] },
        { type: 'h4', children: [{ text: "Brand" }] },
        { type: 'p', children: [{ text: "Brand voit ses statistiques réduites pour contenir son impact en support, où il s'est révélé excessivement efficace ces dernières semaines." }] },
        { type: 'h4', children: [{ text: "K'Sante" }] },
        { type: 'p', children: [{ text: "K'Sante est ciblé pour corriger sa présence oppressive en top lane, particulièrement problématique dans l'environnement compétitif pro." }] },
        { type: 'h4', children: [{ text: "Rumble et Sion" }] },
        { type: 'p', children: [{ text: "Rumble et Sion, tous deux dominants en top lane compétitive, reçoivent des nerfs pour diversifier le pool de picks en vue du MSI 2026." }] },
        { type: 'h2', children: [{ text: "Buffs" }] },
        { type: 'h4', children: [{ text: "LeBlanc" }] },
        { type: 'p', children: [{ text: "LeBlanc est renforcée pour encourager un jeu de mid lane plus agressif et diversifier les options de carry magique en solo queue comme en compétitif." }] },
        { type: 'h4', children: [{ text: "Aphelios" }] },
        { type: 'p', children: [{ text: "Les dégâts d'Aphelios sont augmentés sur plusieurs combinaisons d'armes pour améliorer son potentiel de carry en late game." }] },
        { type: 'h4', children: [{ text: "Draven et Kai'Sa" }] },
        { type: 'p', children: [{ text: "Draven et Kai'Sa reçoivent des améliorations pour renforcer la diversité des picks en bot lane et réduire la dépendance aux ADC de poke." }] },
        { type: 'h4', children: [{ text: "Olaf, Kindred et Poppy" }] },
        { type: 'p', children: [{ text: "Trois junglers obtiennent des buffs pour offrir des alternatives viables : Olaf sur sa durabilité, Kindred sur ses dégâts et Poppy sur son impact en teamfight." }] },
        { type: 'h4', children: [{ text: "Qiyana et Vex" }] },
        { type: 'p', children: [{ text: "Qiyana et Vex sont améliorées pour proposer des options compétitives en mid lane face aux mages de zone dominants du meta actuel." }] },
        { type: 'h2', children: [{ text: "Systèmes et Items" }] },
        { type: 'ul', children: [
          { type: 'li', children: [{ text: "Doran's Helm nerfé — le buff du patch 26.11 avait trop amplifié sa puissance en early game." }] },
          { type: 'li', children: [{ text: "Imperial Mandate buffé — récupère de l'efficacité après des nerfs trop sévères." }] },
          { type: 'li', children: [{ text: "Serpent's Fang : correction d'un bug d'omnivamp affectant certaines interactions." }] },
          { type: 'li', children: [{ text: "Correction du bug de stacks de Baron Nashor." }] },
          { type: 'li', children: [{ text: "Correction d'un bug d'effets visuels sur le R de Diana." }] },
        ] },
        { type: 'h2', children: [{ text: "Fonctionnalités et Contenu" }] },
        { type: 'ul', children: [
          { type: 'li', children: [{ text: "Ranked 5v5 de retour à partir du 26 juin à 20h avec le format Tournament Draft, des enjeux doublés et des récompenses uniques." }] },
          { type: 'li', children: [{ text: "Indicateur de last hit activé en Normal Draft et en Ranked — fonctionnalité controversée pour les joueurs expérimentés." }] },
          { type: 'li', children: [{ text: "Nouveau menu de signalement intégré directement au chat pour faciliter les reports et le blocage." }] },
          { type: 'li', children: [{ text: "Skins High Noon : Locke et Akshan." }] },
          { type: 'li', children: [{ text: "Skins Broken Covenant : Aurora, Shen et Jhin — ce dernier est le skin officiel de partage de revenus MSI 2026." }] },
        ] },
        { type: 'blockquote', children: [{ text: "Le patch 26.13 est le patch de référence pour le MSI 2026. Les équipes professionnelles devront s'adapter aux changements sur Senna et K'Sante tout en explorant le potentiel des picks renforcés comme LeBlanc, Aphelios et Olaf." }] },
      ],
    } as any,
  })
  console.log('✅ Patch 26.13 créé')
}
