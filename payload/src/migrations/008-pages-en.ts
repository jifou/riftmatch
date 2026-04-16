import type { MigrationModule } from './runner'

export const id = '008-pages-en'
export const description = 'Create EN versions of existing FR articles'

// ── Slate helpers ──────────────────────────────────────────────────────────
const p  = (text: string) => ({ children: [{ text }] })
const h2 = (text: string) => ({ type: 'h2', children: [{ text }] })
const h3 = (text: string) => ({ type: 'h3', children: [{ text }] })
const ul = (...items: string[]) => ({
  type: 'ul',
  children: items.map(item => ({ type: 'li', children: [{ text: item }] })),
})

// ══════════════════════════════════════════════════════════════════════════
// Article 1 — "What is League of Legends?"
// ══════════════════════════════════════════════════════════════════════════

const lolArticleEN = [
  p(
    "League of Legends — or simply LoL — is one of the most played video games in the world. " +
    "Launched in 2009 by Riot Games, it brings together more than 150 million registered players " +
    "every month and tens of millions of daily matches. But what makes it so captivating?"
  ),

  h2("What is a MOBA?"),
  p(
    "League of Legends belongs to the MOBA genre (Multiplayer Online Battle Arena). " +
    "The concept is simple: two teams of 5 players face off on a map called " +
    "Summoner's Rift. The goal is to destroy the enemy Nexus — the central base " +
    "of the opposing team — before they destroy yours."
  ),
  p(
    "Each match lasts an average of 30 to 40 minutes. The map is divided into three lanes " +
    "(top, mid, bot) connected by a jungle, a wooded area filled with neutral monsters that " +
    "players can eliminate to gain power."
  ),

  h2("Champions: the heart of the game"),
  p(
    "Each player chooses a champion before the match — a unique character with their own " +
    "abilities, playstyle and story in the Runeterra universe. " +
    "In 2024, the roster includes more than 160 playable champions."
  ),
  p("These champions are divided into broad classes:"),
  ul(
    "Tanks — robust, they absorb damage to protect the team",
    "Assassins — fast and lethal, they eliminate priority targets",
    "Mages — powerful at range, they deal enormous magic damage",
    "Marksmen (ADC) — fragile but devastating over time",
    "Supports — they protect, heal or crowd-control enemies",
    "Fighters — a balance between damage and durability"
  ),

  h2("Roles on Summoner's Rift"),
  p("In competitive play, each team member fills a specific role:"),
  ul(
    "Top — the upper lane, often played by durable champions",
    "Jungle — roams the entire map, controls neutral objectives",
    "Mid — the central lane, often mages or assassins with high impact",
    "Bot (ADC) — the bottom lane, a marksman who scales into late game",
    "Support — accompanies the ADC, protects the team and places vision wards"
  ),

  h2("Why so many players?"),
  p(
    "LoL's longevity comes down to several factors. First, " +
    "the game is free — all champions can be unlocked by playing. " +
    "Second, the strategic depth is almost infinite: mastering a champion " +
    "can take hundreds of hours, and the meta shifts with every patch."
  ),
  p(
    "The competitive aspect is also central. The ranked ladder (from Iron to Challenger) " +
    "motivates millions of players to improve. And the World Championship draws " +
    "tens of millions of viewers every year."
  ),

  h2("The Runeterra universe"),
  p(
    "Beyond the gameplay, League of Legends has built a rich narrative universe. " +
    "Each champion has their own story, relationships with other characters, " +
    "and belongs to a region of the world: Demacia, Noxus, Ionia, Zaun, the Shadow Isles…"
  ),
  p(
    "This universe has given rise to many spin-offs: the animated series Arcane on Netflix, " +
    "spin-off games like Legends of Runeterra or Teamfight Tactics, " +
    "and original music released regularly."
  ),

  h2("Where to start?"),
  p(
    "If you're new to LoL, start with the in-game Tutorial mode. " +
    "Your first matches are protected from experienced players " +
    "while you find your footing. Choose a simple champion — like Garen, " +
    "Ashe or Annie — to learn the basics without overloading yourself."
  ),
  p(
    "And if you're not sure which champion suits you, " +
    "the RiftMatch quiz is here for that: a few questions about your playstyle " +
    "and personality, and you'll discover the champions made for you."
  ),
]

// ══════════════════════════════════════════════════════════════════════════
// Article 2 — "ADC: the complete guide for beginners"
// ══════════════════════════════════════════════════════════════════════════

const adcGuideEN = [
  p(
    "The ADC — short for Attack Damage Carry — is one of the most popular and demanding roles " +
    "in League of Legends. The team's sharpshooter, they deal consistent ranged damage " +
    "and become an offensive powerhouse in the late game. But to get there, you need to survive " +
    "a tricky early phase and master precise mechanics."
  ),

  h2("What is an ADC?"),
  p(
    "ADC stands for Attack Damage Carry: a champion who carries the team through physical damage " +
    "(AD = Attack Damage). They're the team's ranged dealer — attacking from a distance, " +
    "dealing sustained damage to targets and destroying both enemy champions " +
    "and structures (turrets, inhibitors, Nexus)."
  ),
  p(
    "The ADC plays in the bot lane alongside a support. The support protects " +
    "the ADC during the laning phase — the power-scaling phase early in the game — " +
    "allowing them to farm safely and accumulate gold."
  ),

  h2("Why play ADC?"),
  p("This role is appealing for several reasons:"),
  ul(
    "You deal damage consistently throughout the entire game",
    "In the late game, a good ADC can shred an entire team in seconds",
    "You can often single-handedly decide the outcome of a fight or a siege",
    "Farming and positioning are rewarding skills to master",
    "The ADC roster is varied: snipers, hypercarries, mage marksmen…"
  ),

  h2("Key ADC stats"),
  p(
    "Unlike tanks or mages, the ADC relies on very specific stats to be effective:"
  ),
  h3("Attack Speed"),
  p(
    "Attack speed determines how many times per second you strike. The higher it is, " +
    "the greater your damage per second (DPS). It's the primary stat for ADCs in the mid and late game."
  ),
  h3("Critical Strike"),
  p(
    "Critical strikes multiply your base damage (typically x1.75). Most ADC builds " +
    "aim for 100% crit chance mid-game through items like Infinity Edge or Galeforce."
  ),
  h3("Attack Damage (AD)"),
  p(
    "AD directly increases your damage per hit. Combined with crit and attack speed, " +
    "it's the trio that defines an ADC's power."
  ),
  h3("Armor Penetration"),
  p(
    "In the late game, enemies have a lot of armor. Penetration items (Lord Dominik's Regards, " +
    "Mortal Reminder) allow you to maintain high damage even against tanks."
  ),

  h2("The laning phase: survive to dominate"),
  p(
    "Laning is the hardest phase for an ADC. You're fragile, you deal less damage " +
    "than other roles, and you depend on your support. Here are the priorities:"
  ),
  h3("Farming (CS)"),
  p(
    "Every minion you kill gives you gold. The goal is to last-hit as many minions as possible " +
    "— that is, deliver the killing blow to collect the gold. A good ADC targets 8 to 10 CS per minute. " +
    "At 10 minutes, you should have between 80 and 100 CS minimum."
  ),
  h3("Trading"),
  p(
    "A trade is an exchange of damage with the enemy. ADCs trade well when: " +
    "their support engages, they have more health than the enemy, or they have a level advantage. " +
    "Outside these conditions, avoid fights and farm safely."
  ),
  h3("Positioning behind your support"),
  p(
    "Your support is your human shield. Stay behind them to avoid enemy engages. " +
    "If an enemy gets past your support to reach you, you've generally mispositioned."
  ),

  h2("Teamfight positioning"),
  p(
    "In teamfights, positioning is the #1 skill of the ADC. The golden rule: " +
    "stay as far as possible from enemies while continuing to attack."
  ),
  ul(
    "Never rush into the front line — that's the tanks' job",
    "Attack the nearest accessible target without risk",
    "Kite (walk back while attacking) to maintain distance from opponents",
    "Use terrain to dodge skillshots",
    "Watch for enemy assassins — they're looking to one-shot you"
  ),
  p(
    "Kiting is a fundamental mechanic: you alternate between an auto-attack and a movement command " +
    "to advance or retreat while still dealing damage. The higher your attack speed, the more effective kiting becomes."
  ),

  h2("Recommended ADCs for beginners"),
  p(
    "Some ADCs are more forgiving of mistakes than others. Here are the best entry points:"
  ),
  ul(
    "Ashe — the simplest kit in the game, slowing arrow, long-range stun ultimate. Ideal for learning the role.",
    "Miss Fortune — strong in lane, easy Q/W combo to understand, excellent for learning how to trade.",
    "Jinx — classic hypercarry. Fragile but devastating when ahead. Great for learning late-game scaling.",
    "Sivir — resilient, good mobility with her ultimate, easy to pick up.",
    "Jhin — fixed attack rate, very satisfying gameplay, teaches precision and positioning."
  ),

  h2("Classic mistakes to avoid"),
  ul(
    "Dying pointlessly in early game — one death = roughly 40 CS lost",
    "Not farming during quiet phases (between fights)",
    "Fighting too close to enemies — always maintain your distance",
    "Focusing the enemy tank instead of the carry — always attack the most threatening accessible target",
    "Forgetting to recall to buy items — items are your power"
  ),

  h2("Where to start?"),
  p(
    "Start with Ashe or Miss Fortune in Normal mode. Aim for 80 CS at 10 minutes. " +
    "Don't worry about kills at first — farming, survival " +
    "and positioning are far more important for improvement."
  ),
  p(
    "Not sure which ADC matches your playstyle? " +
    "The RiftMatch quiz analyzes your personality and skill level to recommend " +
    "the champions that suit you best."
  ),
]

// ══════════════════════════════════════════════════════════════════════════
// Migration runner
// ══════════════════════════════════════════════════════════════════════════

export const up: MigrationModule['up'] = async (payload) => {
  // ── Article 1 EN ──────────────────────────────────────────────────────
  const ex1 = await payload.find({
    collection: 'pages',
    where: { and: [
      { slug:   { equals: 'qu-est-ce-que-league-of-legends' } },
      { locale: { equals: 'en' } },
    ]},
  })
  if (ex1.docs.length > 0) {
    console.log('  → EN article 1 already present, skip.')
  } else {
    await payload.create({
      collection: 'pages',
      data: {
        title:  'What is League of Legends?',
        slug:   'qu-est-ce-que-league-of-legends',
        locale: 'en',
        seo: {
          description:
            'Discover League of Legends: the most played MOBA in the world, its champions, ' +
            'game mechanics and why millions of players come back every day.',
        },
        content: lolArticleEN,
      },
    })
    console.log('  ✓ EN article 1 created.')
  }

  // ── Article 2 EN (guide) ───────────────────────────────────────────────
  const ex2 = await payload.find({
    collection: 'pages',
    where: { and: [
      { slug:   { equals: 'guide-adc-league-of-legends' } },
      { locale: { equals: 'en' } },
    ]},
  })
  if (ex2.docs.length > 0) {
    console.log('  → EN article 2 already present, skip.')
  } else {
    await payload.create({
      collection: 'pages',
      data: {
        title:    'ADC: the complete guide for beginners',
        slug:     'guide-adc-league-of-legends',
        locale:   'en',
        template: 'guide',
        seo: {
          description:
            'Everything you need to know about the ADC role in League of Legends: definition, mechanics, ' +
            'laning phase, teamfight positioning and the best champions to start with.',
        },
        content: adcGuideEN,
      } as any,
    })
    console.log('  ✓ EN article 2 created.')
  }
}
