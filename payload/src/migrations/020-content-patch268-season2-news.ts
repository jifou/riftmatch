import type { MigrationModule } from './runner'

export const id = '020-content-patch268-season2-news'
export const description = 'Patch 26.8 Live + news Saison 2 Pandemonium + news nouveau champion AP'

export const up: MigrationModule['up'] = async (payload) => {

  // ── Patch 26.8 — Live (14 avril 2026) ─────────────────────────
  await payload.create({
    collection: 'patch-notes',
    data: {
      version: '26.8',
      title: 'Patch 26.8 — Notes de mise à jour officielles',
      slug: 'patch-26-8',
      type: 'live',
      status: 'published',
      publishedAt: '2026-04-14T10:00:00.000Z',
      excerpt:
        'Le patch 26.8 prépare la fin de la Saison 1 avec des nerfs sur Mel, Karma et Dr. Mundo, des buffs pour Hwei, Lucian et Yuumi, et l\'arrivée des keybinds personnalisés par champion.',
      highlights: [
        { text: '🔺 Hwei — Dégâts passif 35-230 → 40-285' },
        { text: '🔺 Lucian — Cooldown E réduit, coût en mana diminué' },
        { text: '🔺 Yuumi — R soins par vague largement augmentés' },
        { text: '🔺 Lillia — Cap dégâts monstres passif augmenté' },
        { text: '🔻 Mel — Q dégâts réduits, W cooldown augmenté' },
        { text: '🔻 Karma — AD base réduit, E plus cher en mana' },
        { text: '🔻 Dr. Mundo — Cap dégâts monstres Q et E nerfés' },
        { text: '🎮 Keybinds personnalisés par champion disponibles' },
      ],
      content: [
        {
          type: 'h2',
          children: [{ text: 'Fin de Saison 1 — Infos ranked' }],
        },
        {
          type: 'p',
          children: [{ text: 'La Saison 1 prend fin le 28 avril 2026 à minuit (heure locale du serveur). La Saison 2 démarre le 29 avril à midi. Les joueurs Apex (Master, Grandmaster, Challenger) sur NA, EUW, EUN, LAN, BR et TR verront leur rang reset à Master 0 LP à la transition.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Nouveautés système' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Keybinds personnalisés par champion désormais disponibles — paramétrez des touches différentes selon le champion joué' }] },
            { type: 'li', children: [{ text: 'Intégration Discord en beta (US, Canada, Brésil) à partir du 16 avril' }] },
            { type: 'li', children: [{ text: 'Zyra et Zilean : W non disponible au niveau 1 (QoL fix)' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Champions — Buffs' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Hwei — Le Peintre Torturé' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Passif — Signature du Visionnaire : Dégâts de base : 35-230 → 40-285 (niveaux 1-18)' }] },
            { type: 'li', children: [{ text: 'Les ralentissements de ses sorts peuvent désormais se cumuler avec diminution de valeur' }] },
            { type: 'li', children: [{ text: 'Bugfix : les ralentis de QE et R ne se cumulent plus avec ceux des adversaires/items' }] },
          ],
        },
        {
          type: 'h4',
          children: [{ text: 'Lucian — Le Purificateur' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'E — Relentless Pursuit : Cooldown : 18/17/16/15/14s → 16/15.5/15/14.5/14s' }] },
            { type: 'li', children: [{ text: 'E — Coût en mana : 40/30/20/10/0 → 32/24/16/8/0' }] },
          ],
        },
        {
          type: 'h4',
          children: [{ text: 'Yuumi — Le Chat Magique' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'R — Final Chapter : Soin par vague : 30/40/50 (+10% AP) → 30/50/70 (+12% AP)' }] },
            { type: 'li', children: [{ text: 'R — Soin Best Friend amélioré : 30% → 30-60% selon les niveaux 6-12' }] },
            { type: 'li', children: [{ text: 'Bugfix : suppression du double soin et correction des calculs de bouclier' }] },
          ],
        },
        {
          type: 'h4',
          children: [{ text: 'Lillia — La Jungleuse des Rêves' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Passif — Dream-Laden Bough : Cap dégâts monstres : 65 fixe → 70-180 selon le niveau' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Champions — Nerfs' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Mel — La Réfléchissante' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Q — Radiant Volley : Dégâts explosion initiale : 60/90/120/150/180 (+60% AP) → 60/85/110/135/160 (+55% AP)' }] },
            { type: 'li', children: [{ text: 'W — Rebuttal : Cooldown : 35/32/29/26/23s → 38/35/32/29/26s' }] },
            { type: 'li', children: [{ text: 'W — Durée bonus vitesse de mouvement : 1.5s → 0.75s' }] },
          ],
        },
        {
          type: 'p',
          children: [{ text: 'Ces nerfs visent à redonner plus de contre-jeu face au Q de Mel en réduisant le burst initial et en limitant son échappatoire via le W.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Karma — La Sagesse Éternelle' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'AD de base : 51 → 49' }] },
            { type: 'li', children: [{ text: 'Croissance AD : 3.3 → 3.0' }] },
            { type: 'li', children: [{ text: 'E — Inspire : Coût en mana : 50/55/60/65/70 → 60/65/70/75/80' }] },
          ],
        },
        {
          type: 'h4',
          children: [{ text: 'Dr. Mundo — L\'Homme qui Fait Ce qu\'il Veut' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Q — Infected Bonesaw : Cap dégâts monstres : 300/375/450/525/600 → 250/325/400/475/550' }] },
            { type: 'li', children: [{ text: 'E — Blunt Force Trauma : Cap dégâts monstres : 200% → 140%' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Ajustements' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Tahm Kench' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Passif dégâts : 6-48 (niveaux 1-11) → 5-60 (niveaux 1-12) — meilleur scaling tardif' }] },
            { type: 'li', children: [{ text: 'Ratio AP : +1.5% par 100 Bonus HP → +1.25%' }] },
            { type: 'li', children: [{ text: 'Ratio Bonus HP : +4.5% → +4%' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Nouveaux skins' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'PsyOps Vladimir' }] },
            { type: 'li', children: [{ text: 'PROJECT : Sivir' }] },
            { type: 'li', children: [{ text: 'Space Groove Zac' }] },
            { type: 'li', children: [{ text: 'PROJECT : Command Line Master Yi' }] },
          ],
        },
      ],
    },
  })

  // ── News : Saison 2 Pandemonium ────────────────────────────────
  await payload.create({
    collection: 'news',
    data: {
      title: 'Saison 2 Pandemonium : WASD en ranked, nouvelles runes et nouveau champion AP',
      slug: 'saison-2-pandemonium-lol-2026',
      category: 'announcement',
      locale: 'fr',
      status: 'published',
      publishedAt: '2026-04-29T12:00:00.000Z',
      author: 'RiftMatch',
      excerpt:
        'La Saison 2 de League of Legends est officiellement lancée avec le patch 26.9. WASD activé en Solo/Duo, retour de Deathfire Touch, nouveaux items de départ et un prochain champion AP assassin au mid.',
      tags: [
        { tag: 'Saison 2' },
        { tag: 'Patch 26.9' },
        { tag: 'Pandemonium' },
        { tag: 'WASD' },
      ],
      content: [
        {
          type: 'h2',
          children: [{ text: 'WASD en ranked — c\'est officiel' }],
        },
        {
          type: 'p',
          children: [{ text: 'Annoncé depuis des mois, le mode de déplacement WASD est désormais activé en files Solo/Duo et Flex à partir du patch 26.9. Les keybinds sont entièrement personnalisables et peuvent varier d\'un champion à l\'autre, une fonctionnalité très attendue par les joueurs habitués aux FPS.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Retour de runes classiques' }],
        },
        {
          type: 'p',
          children: [{ text: 'Riot ramène deux runes iconiques de l\'ancien système dans la Saison 2 : Deathfire Touch et Stormraider\'s Surge. Ces runes s\'intègrent dans le nouveau système et ouvrent des voies de build alternatives sur plusieurs champions, notamment les assassins AP et les bruisers rapides.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Changements de lane — Top et Mid' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Top lane : bonus d\'XP lors de la participation aux teamfights pour réduire l\'isolement du role' }] },
            { type: 'li', children: [{ text: 'Mid lane : perd le recall amélioré, gagne un petit bonus AD et AP passif' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Le prochain champion : un assassin AP mid' }],
        },
        {
          type: 'p',
          children: [{ text: 'Riot a confirmé que le prochain champion prévu dans la Saison 2 sera un assassin AP jouant mid lane. Aucun nom ni kit révélé pour l\'instant, mais les teasers visuels disponibles sur les réseaux suggèrent une esthétique liée au lore de Noxus. À surveiller dans les prochaines semaines.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Mode Arena renouvelé' }],
        },
        {
          type: 'p',
          children: [{ text: 'Le mode Arena revient avec une nouvelle map, de nouveaux Augments et un système d\'événements inédit. La Saison 2 durera six patches, plus courte que d\'habitude, avec une cadence de mise à jour accélérée.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Skins Pandemonium disponibles dès le 29 avril' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Pandemonium Annie' }] },
            { type: 'li', children: [{ text: 'Pandemonium Kindred' }] },
            { type: 'li', children: [{ text: 'Demoncursed Vayne (Légendaire 1820 RP)' }] },
            { type: 'li', children: [{ text: 'Prestige Pandemonium Shaco' }] },
          ],
        },
      ],
    },
  })

  // ── News : Tier list méta patch 26.9 ──────────────────────────
  await payload.create({
    collection: 'news',
    data: {
      title: 'Tier List patch 26.9 — Les champions à jouer en Saison 2',
      slug: 'tier-list-patch-26-9-saison-2',
      category: 'meta',
      locale: 'fr',
      status: 'published',
      publishedAt: '2026-04-29T18:00:00.000Z',
      author: 'RiftMatch',
      excerpt:
        'Le patch 26.9 remodèle la méta avec le buff Ezreal AP, le nerf Ambessa et les changements Zeri. Voici les picks dominants lane par lane au lancement de la Saison 2.',
      tags: [
        { tag: 'Tier List' },
        { tag: 'Méta' },
        { tag: 'Patch 26.9' },
        { tag: 'Saison 2' },
      ],
      content: [
        {
          type: 'h2',
          children: [{ text: 'Top Lane' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'S — Darius, Sett, Garen (profitent du bonus XP teamfight)' }] },
            { type: 'li', children: [{ text: 'A — Fiora, Camille, Jax' }] },
            { type: 'li', children: [{ text: 'B — Renekton, Malphite, Ambessa (nerfée ce patch)' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Jungle' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'S — Warwick (buff passif), Vi, Jarvan IV' }] },
            { type: 'li', children: [{ text: 'A — Hecarim, Lillia (buff niveau), Kha\'Zix' }] },
            { type: 'li', children: [{ text: 'B — Dr. Mundo (double nerf monstre), Bel\'Veth' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Mid Lane' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'S — Hwei (gros buff passif), Syndra, Orianna' }] },
            { type: 'li', children: [{ text: 'A — Ezreal AP (enfin viable), Zoe (nerfée mais reste forte), Viktor' }] },
            { type: 'li', children: [{ text: 'B — Karma (nerfée), Taliyah (ajustement neutre)' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Bot Lane (ADC)' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'S — Lucian (buff E), Jinx, Caitlyn' }] },
            { type: 'li', children: [{ text: 'A — Zeri (ajustée, portée passive +50), Jhin, Xayah' }] },
            { type: 'li', children: [{ text: 'B — Miss Fortune, Kai\'Sa' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Support' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'S — Tahm Kench (double buff), Yuumi (R renforcé), Nautilus' }] },
            { type: 'li', children: [{ text: 'A — Thresh, Lulu, Rakan' }] },
            { type: 'li', children: [{ text: 'B — Mel (nerfée), Karma (nerfée)' }] },
          ],
        },
      ],
    },
  })
}
