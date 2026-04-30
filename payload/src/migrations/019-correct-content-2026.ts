import type { MigrationModule } from './runner'

export const id = '019-correct-content-2026'
export const description = 'Corrige news Keria (roster réel 2026, contrat 2029) + patch 26.9 officiel'

export const up: MigrationModule['up'] = async (payload) => {

  // ── Purge migration 018 ────────────────────────────────────────
  const oldNews = await payload.find({
    collection: 'news',
    where: { slug: { equals: 'keria-re-signe-t1-2026' } },
    limit: 5,
  })
  for (const doc of oldNews.docs) {
    await payload.delete({ collection: 'news', id: doc.id })
  }

  const oldPatch = await payload.find({
    collection: 'patch-notes',
    where: { slug: { equals: 'patch-16-9-pbe' } },
    limit: 5,
  })
  for (const doc of oldPatch.docs) {
    await payload.delete({ collection: 'patch-notes', id: doc.id })
  }

  // ── News : Keria re-signe chez T1 (correct) ───────────────────
  await payload.create({
    collection: 'news',
    data: {
      title: 'Keria prolonge l\'aventure chez T1 jusqu\'en 2029 — signé en direct sur scène',
      slug: 'keria-re-signe-t1-2029',
      category: 'esports',
      locale: 'fr',
      status: 'published',
      publishedAt: '2026-04-26T14:00:00.000Z',
      author: 'RiftMatch',
      coverImage: 'https://static.invenglobal.com/upload/image/2026/04/26/i1777204515962872.jpeg',
      excerpt:
        'Lors du T1 Home Ground à l\'Inspire Arena d\'Incheon, Ryu "Keria" Min-seok a signé en direct devant les fans une extension de contrat de 3 ans, le liant à T1 jusqu\'à fin 2029.',
      tags: [
        { tag: 'T1' },
        { tag: 'Keria' },
        { tag: 'LCK' },
        { tag: 'Transferts 2026' },
      ],
      content: [
        {
          type: 'h2',
          children: [{ text: 'Signé en direct devant les fans' }],
        },
        {
          type: 'p',
          children: [{ text: 'Le 26 avril 2026, lors du fan meeting LCK Home Ground organisé à l\'Inspire Arena de Yeongjongdo, Incheon, T1 a offert à ses fans un cadeau surprise : Ryu "Keria" Min-seok a paraphé en direct sur scène son extension de contrat avec l\'organisation. Le support coréen est désormais lié à T1 jusqu\'à la fin de la saison 2029, soit un engagement de trois ans supplémentaires.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Un roster 2026 renouvelé' }],
        },
        {
          type: 'p',
          children: [{ text: 'Cette saison, T1 a subi un changement notable en botlane. Après plus de cinq ans au sein de l\'organisation et trois titres mondiaux, Lee "Gumayusi" Min-hyung a quitté l\'équipe pour rejoindre Hanwha Life Esports. Il a été remplacé par Kim "Peyz" Su-hwan, ancien ADC de JD Gaming en LPL. Le reste du roster reste inchangé.' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Top : Choi "Doran" Hyeon-joon' }] },
            { type: 'li', children: [{ text: 'Jungle : Mun "Oner" Hyeon-jun' }] },
            { type: 'li', children: [{ text: 'Mid : Lee "Faker" Sang-hyeok' }] },
            { type: 'li', children: [{ text: 'ADC : Kim "Peyz" Su-hwan (nouveau)' }] },
            { type: 'li', children: [{ text: 'Support : Ryu "Keria" Min-seok (prolongé jusqu\'en 2029)' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Faker et Keria ensemble jusqu\'en 2029' }],
        },
        {
          type: 'p',
          children: [{ text: 'Faker est lui aussi sous contrat jusqu\'en 2029. Oner et Peyz sont liés à T1 jusqu\'en 2028. La direction a clairement choisi la stabilité plutôt que les reconstructions, après avoir résisté aux offres massives de franchises LPL pour Keria en début d\'année.' }],
        },
        {
          type: 'blockquote',
          children: [{ text: '"Je voulais continuer avec cette équipe. T1, c\'est ma maison depuis 2021 — je n\'imagine pas porter un autre maillot." — Keria, lors de la cérémonie Home Ground' }],
        },
        {
          type: 'h2',
          children: [{ text: 'La prochaine échéance : MSI 2026' }],
        },
        {
          type: 'p',
          children: [{ text: 'T1 aborde la suite du split LCK avec un effectif pleinement stabilisé. Leur prochain grand objectif est le MSI 2026, prévu en juin, où ils espèrent représenter la LCK face aux représentants LPL qui dominent la scène internationale depuis le début de l\'année.' }],
        },
      ],
    },
  })

  // ── Patch 26.9 — Live officiel (sorti le 28 avril 2026) ────────
  await payload.create({
    collection: 'patch-notes',
    data: {
      version: '26.9',
      title: 'Patch 26.9 — Notes de mise à jour officielles',
      slug: 'patch-26-9',
      type: 'live',
      status: 'published',
      publishedAt: '2026-04-28T10:00:00.000Z',
      excerpt:
        'Le patch 26.9 lance la Saison 2 avec WASD activé en ranked, des buffs AP pour Ezreal, un rework partiel de Shyvana, et le retour de runes classiques comme Deathfire Touch.',
      highlights: [
        { text: '🔺 Ezreal AP — Q ratio 15% → 40%, R ratio 90% → 110%' },
        { text: '🔺 Warwick — Dégâts passif on-hit augmentés' },
        { text: '🔺 Tahm Kench — R vitesse de mouvement 40% → 60%' },
        { text: '🔺 Taliyah — Q dégâts de base +5 à tous les niveaux' },
        { text: '🔺 Gragas — Réduction dégâts W améliorée' },
        { text: '🔻 Ambessa — Cast time R : 0.55s → 0.70s' },
        { text: '🔻 Briar — HP growth réduite : 100 → 95' },
        { text: '🔻 Zoe — W dégâts réduits de 25%, E cooldown augmenté' },
        { text: '⚖️ Zeri — Portée passive +50, conversion AS excédentaire nerfée' },
        { text: '⚖️ Shyvana — Rework partiel AD/AP, Q passif revu' },
        { text: '🎮 Saison 2 lancée — WASD activé en Solo/Duo et Flex' },
      ],
      content: [
        {
          type: 'h2',
          children: [{ text: 'Saison 2 — Changements système majeurs' }],
        },
        {
          type: 'p',
          children: [{ text: 'Le patch 26.9 marque le début de la Saison 2 ranked, avec un reset de LP pour les joueurs Apex (Master, Grandmaster, Challenger) sur les serveurs NA, EUW, EUN, LAN, BR et TR. La principale nouveauté système est l\'activation de WASD dans les files Solo/Duo et Flex.' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'WASD activé en ranked Solo/Duo et Flex' }] },
            { type: 'li', children: [{ text: 'Keybinds personnalisés par champion disponibles' }] },
            { type: 'li', children: [{ text: 'Retour de Deathfire Touch et Stormraider\'s Surge' }] },
            { type: 'li', children: [{ text: 'Nouveaux items de départ et builds alternatifs' }] },
            { type: 'li', children: [{ text: 'Mode Arena : nouvelle map, nouveaux Augments, nouveau système d\'événements' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Champions — Buffs' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Ezreal — Le Prodige Intrépide' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Q — Mystic Shot : Ratio AP : 15% → 40%' }] },
            { type: 'li', children: [{ text: 'W — Essence Flux : Ratio AP : 70-90% → 90% (fixe)' }] },
            { type: 'li', children: [{ text: 'R — Trueshot Barrage : Ratio AP : 90% → 110%' }] },
            { type: 'li', children: [{ text: 'R — Dégâts minions/monstres : 175/275/375 → 150/225/300' }] },
          ],
        },
        {
          type: 'p',
          children: [{ text: 'Ezreal AP est depuis longtemps sous-optimal. Ces buffs ouvrent un vrai chemin de build alternatif sans toucher à la version AD classique.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Warwick — Le Fléau de Zaun' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'P — Dégâts on-hit par niveau : 6/16/26/36/46 → 6/18.25/30.5/42.75/55' }] },
          ],
        },
        {
          type: 'h4',
          children: [{ text: 'Tahm Kench — Le Roi des Rivières' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'E — Abyssal Dive : Conversion Grey Health : 45-100% → 60-100%' }] },
            { type: 'li', children: [{ text: 'R — Devour : Vitesse de mouvement : 40% → 60%' }] },
          ],
        },
        {
          type: 'h4',
          children: [{ text: 'Taliyah — La Tisseuse de Pierre' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Q — Threaded Volley : Dégâts de base +5 à tous les rangs' }] },
            { type: 'li', children: [{ text: 'Q — Dégâts monstres : -3 à tous les rangs (compensation jungle)' }] },
          ],
        },
        {
          type: 'h4',
          children: [{ text: 'Gragas — Le Tonnelier Ivre' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'W — Drunken Rage : Réduction dégâts : 10/12/14/16/18% → 10/14/18/22/26%' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Champions — Nerfs' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Ambessa — La Maîtresse de la Guerre' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'R — Cast time : 0.55s → 0.70s' }] },
          ],
        },
        {
          type: 'p',
          children: [{ text: 'L\'ajout d\'un cast time plus long sur son ultime crée une fenêtre de contre-jeu réelle, notamment avec les CC rapides.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Briar — La Pestilence Affamée' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'HP Growth : 100 → 95' }] },
          ],
        },
        {
          type: 'h4',
          children: [{ text: 'Zoe — L\'Aspect de la Crépuscule' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'W — Spell Thief : Dégâts réduits de 25% à tous les niveaux' }] },
            { type: 'li', children: [{ text: 'E — Sleepy Trouble Bubble : Cooldown : 16/15/14/13/12s → 18/17/16/15/14s' }] },
            { type: 'li', children: [{ text: 'E — Remboursement cooldown si touche un champion' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Champions — Ajustements' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Zeri — L\'Étincelle de Zaun' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'P — Portée d\'attaque de base : 500 → 550' }] },
            { type: 'li', children: [{ text: 'Q — Dégâts de base early augmentés, scaling AD late réduit' }] },
            { type: 'li', children: [{ text: 'Q — Conversion AS excédentaire : 70% → 50%' }] },
            { type: 'li', children: [{ text: 'W — Wall Crit multiplicateur : 175% → 150% / Ratio AP : 25% → 50%' }] },
            { type: 'li', children: [{ text: 'R — Burst AD : 100% → 60% / MS par stack : 1% → 1.5%' }] },
          ],
        },
        {
          type: 'h4',
          children: [{ text: 'Shyvana — La Demi-Dragonne' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'AS de base : 0.625 → 0.638 / Croissance AS : 0.69 → 0.638' }] },
            { type: 'li', children: [{ text: 'AD Growth : 3 → 4' }] },
            { type: 'li', children: [{ text: 'Q Passif : Scaling AP retiré / Réduction hit : 1s → 0.5s / Ratio AP +30%' }] },
            { type: 'li', children: [{ text: 'W : Cooldown réduit, bouclier et soins ajustés' }] },
            { type: 'li', children: [{ text: 'E : Cooldown réduit, dégâts de base réduits mais scaling % HP amélioré' }] },
          ],
        },
        {
          type: 'p',
          children: [{ text: 'L\'objectif est de créer deux chemins distincts viables : AD/Crit pour les duels et AP/Tank pour les fights prolongés en dragon.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Kennen — Le Cœur de la Tempête' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'W Passif : S\'applique désormais sur toute l\'attaque en on-hit ; peut critter pour 140% (+40% bonus crit)' }] },
            { type: 'li', children: [{ text: 'E : Les critical strikes prolongent le buff AS de 1s (max 4s)' }] },
          ],
        },
        {
          type: 'h4',
          children: [{ text: 'Teemo — Le Défenseur de Bandle' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'E — Toxic Shot : Nouveau ratio bonus AD : 10% (initial) + 30% (DoT)' }] },
          ],
        },
        {
          type: 'h4',
          children: [{ text: 'Udyr — Le Chaman des Esprits' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Q : Ratios AD réduits, ajout scaling bonus HP' }] },
            { type: 'li', children: [{ text: 'W : Nouveau ratio bonus AD 50% sur le bouclier' }] },
            { type: 'li', children: [{ text: 'E : +5% vitesse de mouvement pour 100 bonus AD' }] },
          ],
        },
        {
          type: 'h4',
          children: [{ text: 'Xin Zhao — Le Sénéchal de Demacia' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'P — Soins : Scaling AP ajusté à la hausse sur tous les niveaux' }] },
            { type: 'li', children: [{ text: 'W — Slow : Scale désormais avec 0.5s par 100 AP' }] },
            { type: 'li', children: [{ text: 'E — Dégâts et AS : Scaling AP augmenté' }] },
          ],
        },
      ],
    },
  })
}
