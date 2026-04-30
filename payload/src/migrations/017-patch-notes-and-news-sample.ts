import type { MigrationModule } from './runner'

export const id = '017-patch-notes-and-news-sample'
export const description = 'Sample patch note 14.9 (Live) + 14.10 (PBE) + 2 news articles'

export const up: MigrationModule['up'] = async (payload) => {

  // ── Patch 14.9 — Live ─────────────────────────────────────────
  await payload.create({
    collection: 'patch-notes',
    data: {
      version: '14.9',
      title: 'Patch 14.9 — Notes de mise à jour',
      slug: 'patch-14-9',
      type: 'live',
      status: 'published',
      publishedAt: '2024-05-01T10:00:00.000Z',
      excerpt:
        'Le patch 14.9 recentre la méta autour des combattants et apporte des nerfs significatifs sur les supports avec soins. Plusieurs ADC reçoivent des buffs ciblés.',
      highlights: [
        { text: '🔺 Jax — Dégâts R augmentés de 15%' },
        { text: '🔺 Jinx — Base AD augmenté de 52 → 54' },
        { text: '🔺 Caitlyn — Portée de base +25' },
        { text: '🔻 Soraka — Guérison W réduite de 20%' },
        { text: '🔻 Sona — Aura de soin diminuée' },
        { text: '🔻 Yuumi — Bouclier Q nerfé' },
        { text: '⚖️ Ahri — Ratio AP ajusté sur Q' },
        { text: '🔺 Garen — Cooldown W réduit' },
      ],
      content: [
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
          children: [{ text: 'Jax — Le Grand Maître' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'R — Grandmaster\'s Might : Dégâts magiques par stack : 80/110/140 → 90/125/160' }] },
            { type: 'li', children: [{ text: 'E — Counter Strike : Durée d\'étourdissement augmentée de 0,25s' }] },
          ],
        },
        {
          type: 'p',
          children: [{ text: 'Jax souffrait d\'un manque de puissance en fin de partie suite aux changements d\'items. Ces buffs lui redonnent une présence dans les duels prolongés.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Jinx — La Folle Criminelle' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'AD de base : 52 → 54' }] },
            { type: 'li', children: [{ text: 'Croissance AD par niveau : 2.7 → 3.0' }] },
          ],
        },
        {
          type: 'p',
          children: [{ text: 'Jinx reste en dessous des autres ADC en termes de DPS global en early game. Ce buff lui permet de rivaliser plus efficacement pendant les phases de farm.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Caitlyn — La Shérif de Piltover' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Portée de base : 650 → 675' }] },
          ],
        },
        {
          type: 'p',
          children: [{ text: 'Caitlyn a longtemps été l\'ADC à la portée la plus haute, mais les changements de la saison ont réduit son avantage. On lui redonne cet atout distinctif.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Garen — La Force de Demacia' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'W — Courage : Cooldown réduit : 24 → 20s' }] },
            { type: 'li', children: [{ text: 'Passif — Perseverance : Régén. HP hors-combat commence après 7s → 5s' }] },
          ],
        },
        {
          type: 'h3',
          children: [{ text: 'Nerfs' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Soraka — L\'Étoile Filante' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'W — Astral Infusion : Guérison de base : 90/130/170/210/250 → 75/110/145/180/215' }] },
            { type: 'li', children: [{ text: 'R — Wish : Guérison de base réduite de 10%' }] },
          ],
        },
        {
          type: 'p',
          children: [{ text: 'Soraka présente un taux de victoire trop élevé avec les compositions sustain. Ces nerfs visent à limiter sa capacité de guérison sans détruire son identité de support.' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Yuumi — Le Chat Magique' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Q — Prowling Projectile : Ratio AP réduit : 25% → 20%' }] },
            { type: 'li', children: [{ text: 'E — Zoomies : Bouclier de base : 70/100/130/160/190 → 60/85/110/135/160' }] },
          ],
        },
        {
          type: 'h3',
          children: [{ text: 'Ajustements' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Ahri — Le Renard à Neuf Queues' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Q — Orbe de Duperie : Ratio AP : 40% → 35% (aller) / 60% → 65% (retour)' }] },
          ],
        },
        {
          type: 'p',
          children: [{ text: 'Cet ajustement récompense les joueurs qui maximisent le retour de l\'Orbe en le passant à travers les ennemis, sans modifier le burst total.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Objets' }],
        },
        {
          type: 'h3',
          children: [{ text: 'Nerfés' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Riftmaker' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Omnivamp : 8% → 6%' }] },
            { type: 'li', children: [{ text: 'Bonus dégâts magiques (stacks) : 8% → 7%' }] },
          ],
        },
        {
          type: 'h4',
          children: [{ text: 'Moonstone Renewer' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Guérison par seconde en combat : 30 → 25' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Runes' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Conquerant' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Omnivamp max stacks : 15% → 12%' }] },
          ],
        },
        {
          type: 'p',
          children: [{ text: 'Conquerant reste la rune dominante sur trop de champions. Cette réduction d\'omnivamp limite son efficacité sur les champions de sustain comme Aatrox et Olaf.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Systèmes' }],
        },
        {
          type: 'p',
          children: [{ text: 'Aucune modification système majeure dans ce patch. Consultez les notes complètes sur le site officiel de Riot Games pour tous les changements de bugfixes et de QoL.' }],
        },
      ],
    },
  })

  // ── Patch 14.10 — PBE ─────────────────────────────────────────
  await payload.create({
    collection: 'patch-notes',
    data: {
      version: '14.10 PBE',
      title: 'Patch 14.10 PBE — Preview des changements',
      slug: 'patch-14-10-pbe',
      type: 'pbe',
      status: 'published',
      publishedAt: '2024-05-08T10:00:00.000Z',
      excerpt:
        'Le PBE 14.10 introduit des changements sur les junglers et prépare l\'arrivée de la saison MSI avec des buffs globaux sur les ADC.',
      highlights: [
        { text: '🔺 Kha\'Zix — Isolation mechanic buffée' },
        { text: '🔺 Vi — Dégâts Q augmentés' },
        { text: '🔻 Zeri — Vitesse attaque réduite' },
        { text: '⚖️ Baron Nashor — Respawn timer ajusté pour MSI' },
      ],
      content: [
        {
          type: 'p',
          children: [{ text: 'Ces changements sont encore en test sur le PBE et peuvent être modifiés avant le patch officiel. Certains changements peuvent ne pas arriver en Live.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Jungleurs' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Kha\'Zix' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Q — Taste Their Fear : Bonus isolation : 10-85 → 15-100' }] },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Objectifs — Préparation MSI' }],
        },
        {
          type: 'p',
          children: [{ text: 'Des ajustements des timers d\'objectifs sont testés pour favoriser les comebacks lors des compétitions MSI.' }],
        },
      ],
    },
  })

  // ── News article 1 ─────────────────────────────────────────────
  await payload.create({
    collection: 'news',
    data: {
      title: 'Patch 14.9 : les ADC font leur retour en force',
      slug: 'patch-14-9-adc-retour-en-force',
      category: 'meta',
      locale: 'fr',
      status: 'published',
      publishedAt: '2024-05-02T09:00:00.000Z',
      author: 'RiftMatch',
      excerpt:
        'Avec les buffs de Jinx, Caitlyn et les nerfs supports, le patch 14.9 recentre la botlane autour du carry. On analyse pourquoi les ADC reprennent leur place dominante.',
      tags: [
        { tag: 'ADC' },
        { tag: 'Patch 14.9' },
        { tag: 'Méta' },
      ],
      content: [
        {
          type: 'h2',
          children: [{ text: 'Pourquoi les ADC étaient à la peine ?' }],
        },
        {
          type: 'p',
          children: [{ text: 'Depuis plusieurs patches, les ADC souffraient d\'un manque de domination en phase de laning. La présence accrue des supports actifs combinée à des items de sustain très efficaces avait relégué les carries à un rôle secondaire.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Ce que change le 14.9' }],
        },
        {
          type: 'p',
          children: [{ text: 'Les buffs combinés de Jinx (+2 AD base) et Caitlyn (+25 portée) replacent ces deux ADC parmi les picks les plus forts. En parallèle, les nerfs sur Soraka et Yuumi réduisent significativement le sustain adverse.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Les picks à surveiller' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'Caitlyn : pick prioritaire avec la portée buffée + composition avec Lux/Morgana' }] },
            { type: 'li', children: [{ text: 'Jinx : excellent contre les compositions sans engage, elle scale mieux maintenant' }] },
            { type: 'li', children: [{ text: 'Jhin : profite de l\'environnement moins sustain pour punir les erreurs' }] },
          ],
        },
      ],
    },
  })

  // ── News article 2 ─────────────────────────────────────────────
  await payload.create({
    collection: 'news',
    data: {
      title: 'MSI 2024 : le calendrier et les groupes dévoilés',
      slug: 'msi-2024-calendrier-groupes',
      category: 'esports',
      locale: 'fr',
      status: 'published',
      publishedAt: '2024-04-28T14:00:00.000Z',
      author: 'RiftMatch',
      excerpt:
        'Le Mid-Season Invitational 2024 se tient à Chengdu du 1er au 19 mai. Voici le format, les groupes et les équipes à suivre.',
      tags: [
        { tag: 'MSI 2024' },
        { tag: 'Esports' },
        { tag: 'LEC' },
      ],
      content: [
        {
          type: 'h2',
          children: [{ text: 'Format du tournoi' }],
        },
        {
          type: 'p',
          children: [{ text: 'Le MSI 2024 réunit 13 équipes issues des différentes régions mondiales. La phase de groupes est suivie d\'un bracket principal en double élimination.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Les équipes à surveiller' }],
        },
        {
          type: 'ul',
          children: [
            { type: 'li', children: [{ text: 'T1 (LCK) : favoris avec Faker et Zeus au top' }] },
            { type: 'li', children: [{ text: 'JDG (LPL) : champions en titre, à surveiller' }] },
            { type: 'li', children: [{ text: 'G2 Esports (LEC) : outsiders dangereux' }] },
          ],
        },
      ],
    },
  })
}
