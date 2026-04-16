import type { MigrationModule } from './runner'

export const id = '012-guides-roles-en'
export const description = 'Create EN role guides: Support, Top Lane, Jungle, Mid Lane'

// ── Slate helpers ──────────────────────────────────────────────────────────
const p  = (text: string) => ({ children: [{ text }] })
const h2 = (text: string) => ({ type: 'h2', children: [{ text }] })
const h3 = (text: string) => ({ type: 'h3', children: [{ text }] })
const ul = (...items: string[]) => ({
  type: 'ul',
  children: items.map(item => ({ type: 'li', children: [{ text: item }] })),
})

// ══════════════════════════════════════════════════════════════════════════
// Guide 1 — Support
// ══════════════════════════════════════════════════════════════════════════

const supportGuideEN = [
  p(
    "The support is one of the most versatile and impactful roles in League of Legends. " +
    "Often underestimated by beginners, a skilled support shapes fights, keeps their team alive, " +
    "and controls the vision of the entire map. If you enjoy enabling your teammates to shine, " +
    "this role is for you."
  ),

  h2("What is the support role?"),
  p(
    "The support plays in the bot lane alongside the ADC during the early game. " +
    "Their job is to protect the ADC, set up kills, and ensure their team has " +
    "vision of the map through ward placement. Unlike other roles, supports " +
    "rarely farm minions — they derive gold from support items and assists instead."
  ),
  p(
    "Beyond the laning phase, supports transition into the backbone of the team: " +
    "engaging fights, peeling for carries, and maintaining vision control across the map."
  ),

  h2("Types of supports"),
  h3("Engage supports"),
  p(
    "Champions like Leona and Nautilus dive in to start fights with hard crowd control. " +
    "They're aggressive and reward teams that can follow up on their engages. " +
    "They're great for players who like to be the catalyst of action."
  ),
  h3("Peel supports"),
  p(
    "Peel supports such as Janna and Lulu focus on protecting their carries rather than initiating. " +
    "They use displacement abilities and shields to keep fragile teammates alive in fights. " +
    "Ideal if you enjoy a more reactive, defensive playstyle."
  ),
  h3("Poke supports"),
  p(
    "Poke supports like Lux and Zyra harass enemies from a safe distance to win lane through " +
    "attrition. They deal meaningful damage and can zone enemies away from minions. " +
    "Best for players who prefer a more aggressive, skill-shot-heavy style."
  ),
  h3("Enchanter supports"),
  p(
    "Enchanters like Soraka and Nami amplify their teammates with heals, buffs, and utility. " +
    "They have lower kill pressure but provide sustained value throughout long fights. " +
    "A great choice for beginners who want a supportive, low-pressure playstyle."
  ),

  h2("Vision control and warding"),
  p(
    "Vision is the support's most important responsibility outside of laning. " +
    "Placing wards in key locations — river bushes, dragon/baron pit, enemy jungle entrances — " +
    "gives your team the information needed to make safe decisions and secure objectives."
  ),
  ul(
    "Always place your starting Stealth Ward in the river bush at 1:30 before minions spawn",
    "Buy Control Wards every time you back — they permanently clear enemy wards",
    "Use your Support item's trinket slot to sweep for hidden wards in key areas",
    "Ward objectives (Dragon, Baron) before they spawn to avoid ambushes",
    "Deep wards in the enemy jungle give your team valuable information about the jungler's path"
  ),

  h2("The laning phase"),
  p(
    "During the laning phase, your primary goal is to create advantages for your ADC " +
    "while denying those same advantages to the enemy duo. This means both protecting " +
    "and proactively seeking opportunities to trade or engage when the matchup favors you."
  ),
  ul(
    "Establish vision in the river bush at the start to prevent early ganks",
    "Use auto-attacks and abilities to poke enemies when they go for last hits",
    "Engage or peel depending on your champion type and the lane matchup",
    "Track the enemy jungler and warn your ADC when they might be coming",
    "Roam to mid lane after shoving the wave to create pressure across the map"
  ),

  h2("Mid/late game responsibilities"),
  p(
    "As the game progresses, the support's role expands beyond the bot lane. " +
    "You become the team's vision anchor and fight initiator or protector, depending on your champion. " +
    "Your decisions around objective control and team positioning often decide games."
  ),
  ul(
    "Always have wards on major objectives (Dragon, Baron) before they spawn",
    "Group with your team for mid-game skirmishes and objective fights",
    "Stand near your carries in teamfights to peel, heal, or set up crowd control",
    "Use your ward budget to maintain vision of the enemy jungle and flanking paths",
    "Communicate with your team using pings to coordinate engage timing"
  ),

  h2("Best champions for beginners"),
  p(
    "These supports are forgiving, have clear win conditions, and teach core support fundamentals " +
    "without overwhelming new players:"
  ),
  ul(
    "Soraka — global ultimate, constant heals, very forgiving. Teaches you to track teammates' health.",
    "Lux — long-range snare and shield, strong poke. Teaches you skill-shot accuracy and zone control.",
    "Blitzcrank — one powerful hook ability that can win lane instantly. Teaches engage timing.",
    "Leona — tanky engage support with multiple crowd control abilities. Simple and very effective.",
    "Janna — shield, knock-up, and an ultimate that saves teammates. Teaches reactive, protective play."
  ),

  h2("Common mistakes to avoid"),
  ul(
    "Abandoning your ADC in lane to roam too early — only roam once the wave is pushed",
    "Forgetting to buy Control Wards on every back — vision wins games",
    "Using all your crowd control abilities at once — stagger them for maximum effectiveness",
    "Standing too far from your ADC in lane — you can't protect what you can't reach",
    "Focusing on kills instead of assists — your job is to enable, not to carry",
    "Not using your ward trinket on cooldown — sweep or place, but never let it sit unused"
  ),

  h2("Ready to find your support?"),
  p(
    "Support is one of the most rewarding roles when played well — your impact on every fight " +
    "is immediate and visible. Start with Soraka or Leona in Normal games, " +
    "focus on warding every back, and communicate with your ADC using pings."
  ),
  p(
    "Not sure which support champion fits your personality? " +
    "The RiftMatch quiz analyzes your playstyle and preferences to recommend " +
    "the support — and the role — that's truly made for you."
  ),
]

// ══════════════════════════════════════════════════════════════════════════
// Guide 2 — Top Lane
// ══════════════════════════════════════════════════════════════════════════

const topLaneGuideEN = [
  p(
    "The top lane is often called the \"island\" of League of Legends — an isolated lane " +
    "where you're largely on your own against a single opponent. This 1v1 environment " +
    "rewards players who love mastering matchups, managing waves, and carrying through " +
    "individual skill and split pushing."
  ),

  h2("What is the top lane?"),
  p(
    "The top lane is the upper lane on Summoner's Rift. It's a long, straight lane " +
    "that is farther from the Dragon objective and closer to the Baron pit. " +
    "Because the jungler visits less frequently than other lanes, top laners must " +
    "be self-sufficient and capable of winning their lane without much assistance."
  ),
  p(
    "Top lane is also a critical source of Teleport pressure — a well-timed TP " +
    "to a bot lane fight or dragon can completely swing the game in your team's favor."
  ),

  h2("Top lane archetypes"),
  h3("Tanks"),
  p(
    "Champions like Malphite and Ornn build resistances to absorb damage and soak up " +
    "crowd control for their team. They shine in teamfights and are very forgiving " +
    "of mechanical mistakes — ideal for beginners learning the role."
  ),
  h3("Fighters (Bruisers)"),
  p(
    "Fighters like Darius and Sett deal significant damage while remaining surprisingly durable. " +
    "They excel in extended melee trades and can often dominate lane with sheer physical presence. " +
    "They're the most popular top lane archetype."
  ),
  h3("Split pushers"),
  p(
    "Split pushers like Fiora and Camille focus on pressuring a side lane alone, forcing the enemy " +
    "to send multiple players to respond. This creates numerical advantages elsewhere on the map " +
    "for the rest of your team to exploit."
  ),

  h2("Wave management"),
  p(
    "Wave management is the most important mechanical skill in the top lane. " +
    "Understanding how to freeze, slow push, or fast push a wave " +
    "directly impacts your gold income and your ability to deny the enemy laner."
  ),
  ul(
    "Freeze the wave near your tower to deny the enemy CS and bait them into ganks",
    "Slow push to build a large wave, then crash it and recall with an item advantage",
    "Fast push to quickly shove a wave, then roam or return to base",
    "Clear the wave before your opponent so you can trade or back safely",
    "Never push into an enemy tower for free — always have a purpose for the shove"
  ),

  h2("Teleport usage"),
  p(
    "Teleport is the defining summoner spell of the top lane. A poor Teleport wastes one of " +
    "the most powerful tools in the game, while a well-timed one can win objectives and turn " +
    "losing fights into victories across the map."
  ),
  ul(
    "Teleport to bot lane before Dragon spawns to create a numbers advantage",
    "Use Teleport to return to lane quickly after an early recall without losing CS",
    "Save Teleport for fights near Baron or Dragon — these objectives win games",
    "Don't Teleport into a lost fight — only use it when your presence can make a difference",
    "Ping your Teleport cast early so teammates know to engage"
  ),

  h2("Split pushing"),
  p(
    "Split pushing is the art of applying pressure in a side lane while your team creates pressure " +
    "elsewhere. Done correctly, the enemy team faces an impossible choice: " +
    "send someone to deal with you and lose a numbers fight, or ignore you and lose a turret."
  ),
  p(
    "Effective split pushing requires strong wave management, map awareness, " +
    "and knowing when to join your team versus when to continue pushing. " +
    "Champions with strong dueling potential and mobility are the best split pushers."
  ),

  h2("Mid/late game"),
  p(
    "As the game transitions to mid and late, your role shifts based on your champion type. " +
    "Tanks should group with the team and absorb damage in fights. " +
    "Fighters can continue split pushing if they're ahead, or group for objectives. " +
    "Always prioritize Dragon and Baron control — these objectives often determine the winner."
  ),

  h2("Best champions for beginners"),
  p(
    "These top lane champions have simple kits that let you focus on learning fundamentals " +
    "rather than complicated mechanics:"
  ),
  ul(
    "Garen — no mana, simple kit, very tanky. Perfect for learning lane fundamentals without resource management.",
    "Malphite — passive shield, powerful teamfight ultimate. Teaches you how tanks operate in fights.",
    "Darius — dominant melee trader, stacking passive bleeds. Teaches aggressive lane dominance.",
    "Nasus — straightforward Q-stacking gameplay. Teaches patience, farming, and late-game scaling.",
    "Sett — straightforward fighter with a flashy ultimate. High damage with built-in durability."
  ),

  h2("Common mistakes to avoid"),
  ul(
    "Overextending without vision when the enemy jungler is unaccounted for",
    "Ignoring wave management — never mindlessly auto-attack minions",
    "Using Teleport to return to lane when you're not under pressure — save it for plays",
    "Fighting under the enemy tower without a clear advantage",
    "Joining the team aimlessly when you're ahead — sometimes split pushing wins the game",
    "Forgetting to buy Control Wards — vision matters in top lane too"
  ),

  h2("Ready to dominate the island?"),
  p(
    "The top lane rewards patience, consistency, and smart decision-making. " +
    "Start with Garen or Malphite in Normal games, focus on last-hitting minions, " +
    "and always know where the enemy jungler is before extending."
  ),
  p(
    "Want to discover which top laner matches your personality? " +
    "Take the RiftMatch quiz — we'll analyze your playstyle and recommend " +
    "the top lane champion that fits you best."
  ),
]

// ══════════════════════════════════════════════════════════════════════════
// Guide 3 — Jungle
// ══════════════════════════════════════════════════════════════════════════

const jungleGuideEN = [
  p(
    "The jungle is the most unique role in League of Legends. Instead of farming a lane, " +
    "the jungler roams the entire map — clearing camps for gold and experience, " +
    "contesting objectives, and influencing every lane through ganks. " +
    "It's a high-responsibility role that can single-handedly swing games."
  ),

  h2("What is the jungle role?"),
  p(
    "The jungler doesn't start in a lane. Instead, they begin the game in the jungle — " +
    "the wooded area between the three lanes — where neutral monster camps spawn at the start " +
    "of every match. Clearing these camps provides gold and experience outside of the lane system."
  ),
  p(
    "Beyond farming camps, the jungler's primary job is to use their mobility advantage " +
    "to gank lanes, secure major objectives like Dragon and Baron Nashor, " +
    "and deny those same objectives to the enemy jungler."
  ),

  h2("Jungle camps and clearing"),
  p(
    "Every camp in the jungle has specific properties. Learning which camps to prioritize " +
    "and the most efficient order to clear them — your \"jungle path\" — " +
    "is the foundation of jungling at every level of play."
  ),
  ul(
    "Blue Sentinel — provides mana regeneration and reduced ability cooldowns (Blue Buff)",
    "Red Brambleback — provides slowing auto-attacks and health regeneration (Red Buff)",
    "Raptors — a cluster of birds, fast to clear and valuable for experience",
    "Wolves — a wolf pack near the mid lane; good for experience and gold",
    "Krugs — large golems near the bot lane; high gold value with a first-clear bonus",
    "Gromp — a large toad near the top lane; high health but valuable gold",
    "Rift Scuttler — a neutral crab in the river that grants vision and a healing zone when killed"
  ),

  h2("Key objectives"),
  h3("Rift Scuttler"),
  p(
    "The Scuttler spawns in both river alcoves at 3:30 and grants your team a vision ward " +
    "and a healing shrine in the river when killed. Controlling Scuttler early " +
    "gives your laners safer lane conditions and is a top priority for most junglers."
  ),
  h3("Dragon"),
  p(
    "Dragon spawns at 5:00 in the bot-side river and grants permanent stacking buffs to your entire team. " +
    "Killing four dragons grants the powerful Dragon Soul. " +
    "Dragon is one of the most contested objectives in the game — always have it warded."
  ),
  h3("Baron Nashor"),
  p(
    "Baron spawns at 20:00 in the top-side river pit. Killing Baron empowers your team " +
    "and nearby minions with the Hand of Baron buff, dramatically increasing push power. " +
    "Most games are decided around Baron control — it's the highest-value objective on the map."
  ),

  h2("Ganking"),
  p(
    "A gank is when the jungler enters a lane to help a laner fight the enemy. " +
    "A successful gank can result in a kill, forcing a flash, or creating enough pressure " +
    "to push the lane and take a turret. Choosing when and where to gank " +
    "is the most impactful decision a jungler makes."
  ),
  ul(
    "Gank lanes where your laner has crowd control to set up the kill",
    "Approach from behind the enemy laner to cut off their escape route",
    "Only gank if the enemy doesn't have enough health to survive the fight",
    "Ping before ganking so your laner knows to engage — don't just appear silently",
    "Don't force bad ganks — a failed gank wastes time and can feed the enemy"
  ),

  h2("Vision and map control"),
  p(
    "The jungler has the most map mobility of any role, which makes vision control " +
    "one of their key responsibilities. Placing wards near major objectives before they spawn " +
    "and sweeping the enemy jungler's vision gives your team crucial information."
  ),
  ul(
    "Always ward Dragon and Baron pit before they spawn (at least 30 seconds early)",
    "Use Control Wards to deny the enemy jungler's ward coverage near objectives",
    "Track the enemy jungler's location using lane information and camp timers",
    "Deep ward the enemy jungle to know their path and anticipate counter-ganks"
  ),

  h2("Types of junglers"),
  p(
    "Different junglers suit different playstyles. Understanding the archetype that fits you " +
    "helps you pick champions and strategies that feel natural:"
  ),
  ul(
    "Farm junglers — clear quickly and scale into late game (Nasus, Kayn, Karthus)",
    "Gank-heavy junglers — prioritize lane pressure and early kills (Warwick, Elise, Zac)",
    "Objective-focused junglers — built around securing Dragon and Baron (Vi, Jarvan IV, Hecarim)",
    "Tank junglers — durable initiators who set up teamfights (Amumu, Rammus, Maokai)",
    "Carry junglers — high damage dealers who can 1v1 anyone (Master Yi, Kindred, Evelynn)"
  ),

  h2("Best champions for beginners"),
  p(
    "These junglers are forgiving to learn and teach core jungle fundamentals effectively:"
  ),
  ul(
    "Warwick — strong at every stage, built-in healing, easy-to-land ultimate for ganks. The best beginner jungler.",
    "Amumu — straightforward clear, powerful teamfight ultimate. Teaches objective-focused play.",
    "Master Yi — fast clear, high damage in late game. Teaches farm-focused jungling and dueling.",
    "Hecarim — fast, aggressive, great at running at enemies. Teaches pressure-oriented ganking.",
    "Vi — durable, two hard CC abilities, straightforward kit. Great all-around beginner jungler."
  ),

  h2("Common mistakes to avoid"),
  ul(
    "Ignoring Dragon and Baron timers — objectives win games, not kills",
    "Farming all game without ever ganking — you need to impact lanes",
    "Ganking the same lane repeatedly while ignoring others",
    "Fighting the enemy jungler 1v1 when you don't have a lead",
    "Forgetting to track the enemy jungler — always know where they are",
    "Starting a Dragon or Baron fight without vision of the enemy team"
  ),

  h2("Ready to own the jungle?"),
  p(
    "The jungle has the highest carry potential of any role, but also the steepest learning curve. " +
    "Start with Warwick or Amumu in Normal games. " +
    "Focus on clearing efficiently, taking Dragon when it spawns, and ganking only when you see a clear opportunity."
  ),
  p(
    "Want to know which jungler fits your personality and playstyle? " +
    "The RiftMatch quiz will analyze how you think and play to find your perfect champion match."
  ),
]

// ══════════════════════════════════════════════════════════════════════════
// Guide 4 — Mid Lane
// ══════════════════════════════════════════════════════════════════════════

const midLaneGuideEN = [
  p(
    "The mid lane sits at the heart of Summoner's Rift — both literally and strategically. " +
    "Mid laners have the shortest path to every other lane, giving them unmatched ability " +
    "to roam and influence the entire map. It's a high-skill, high-impact role " +
    "that rewards players who want to shape the flow of the game."
  ),

  h2("What is the mid lane?"),
  p(
    "The mid lane is the central lane connecting both teams' bases. " +
    "Because it's the shortest lane on the map, the laning phase is faster-paced " +
    "and roaming opportunities appear earlier than in top or bot lane. " +
    "Mid lane proximity to the Dragon, Baron, and both side lanes makes " +
    "it the most strategically connected position on the map."
  ),
  p(
    "Mid laners are often expected to be self-sufficient, win their lane, and use their " +
    "central position to apply pressure to whichever side lane needs support."
  ),

  h2("Mid lane archetypes"),
  h3("Mages"),
  p(
    "Mages like Lux and Veigar deal high burst or sustained magic damage from range. " +
    "They rely on abilities to deal damage and scale with Ability Power items. " +
    "Most beginner-friendly mid laners fall into this category."
  ),
  h3("Assassins"),
  p(
    "Assassins like Zed and Talon are mobile melee or ranged champions that " +
    "burst down a single target and escape. They're high-risk, high-reward champions " +
    "that can dominate games when ahead but struggle when behind."
  ),
  h3("Fighters"),
  p(
    "Fighter mid laners like Sylas and Galio are durable and deal mixed damage. " +
    "They're excellent roamers and can survive tough matchups through sheer stats " +
    "and self-healing or shielding."
  ),
  h3("Utility champions"),
  p(
    "Utility mid laners like Orianna and Twisted Fate provide crowd control and team-wide " +
    "value rather than raw damage. They're complex to master but provide incredible " +
    "strategic flexibility and teamfight impact."
  ),

  h2("Wave management in mid"),
  p(
    "Mid lane wave management differs from other lanes because the shorter lane " +
    "means waves arrive faster and pushing out provides roaming windows more quickly. " +
    "Understanding how to manipulate the wave is the most important laning skill for mid laners."
  ),
  ul(
    "Clear the wave quickly to create time for roaming to side lanes",
    "Shove the wave into the enemy tower before recalling so you don't lose CS",
    "Freeze near your tower to deny enemy CS when you have a health or item lead",
    "Slow push to build a large wave, crash it, then roam or take a fight",
    "Never leave the lane with the wave at the center — you'll lose minions while you roam"
  ),

  h2("Roaming and creating pressure"),
  p(
    "Roaming is the defining skill of mid lane. After pushing your wave, " +
    "you have a window to walk to an adjacent lane and create a numbers advantage. " +
    "A successful roam that results in a kill or forced flash gives your team a tempo advantage " +
    "that often translates into the next objective."
  ),
  ul(
    "Shove the wave before roaming so you don't lose CS while you're away",
    "Communicate your roam with pings so your laner knows to engage when you arrive",
    "Roam toward whichever side lane is closer to winning or losing",
    "Track the enemy mid laner — if they roam first, match them or push the mid tower",
    "Return to lane quickly after a roam to avoid losing too much CS"
  ),

  h2("Map impact"),
  p(
    "The mid laner's central position means every major objective fight — Dragon, Baron, " +
    "Rift Herald — is within walking distance. " +
    "Being present for these fights is a minimum expectation for mid lane in any game."
  ),
  ul(
    "Always be at Dragon and Baron fights — your damage or crowd control is critical",
    "Use your position to apply pressure to whichever side is most important",
    "Track the enemy mid laner's position to prevent them from flanking your team",
    "Look for openings to roam and take turrets after winning lane"
  ),

  h2("Mid/late game"),
  p(
    "As the game moves to mid and late game, the mid laner becomes either " +
    "the team's primary damage dealer or their key initiator depending on their champion. " +
    "Mages and assassins should look for picks and burst damage in fights, " +
    "while utility and fighter mid laners should group with the team and provide consistent presence."
  ),

  h2("Best champions for beginners"),
  p(
    "These mid lane champions are straightforward to learn and reward fundamental skills " +
    "without punishing mechanical mistakes too harshly:"
  ),
  ul(
    "Annie — simple point-and-click stun, powerful bear ultimate. The best beginner mage — focuses your attention on positioning.",
    "Lux — long-range skill shots, shield for teammates, strong burst. Teaches ability accuracy and lane control.",
    "Veigar — unlimited ability power stacking, massive late-game burst. Teaches patience and CS discipline.",
    "Vex — reliable crowd control on her passive, strong wave clear. Great matchup into assassins.",
    "Malzahar — safe lane, persistent damage over time, point-and-click ultimate. Very low-stress laning."
  ),

  h2("Common mistakes to avoid"),
  ul(
    "Roaming without pushing the wave first — you'll lose CS and give the enemy free farm",
    "Staying in lane all game without ever influencing side lanes or objectives",
    "Using all abilities at once before the enemy uses their defensive abilities",
    "Dying to jungle ganks by overextending without vision — always ward the river bushes",
    "Fighting through the wave instead of clearing it — always control the wave before engaging",
    "Missing teamfights because you were farming a side lane when your team needed you"
  ),

  h2("Ready to take the mid lane?"),
  p(
    "The mid lane is the best role for players who want to feel like they're in control of the game. " +
    "Start with Annie or Lux in Normal games, focus on shoving your wave before every roam, " +
    "and make sure you show up for every Dragon and Baron fight."
  ),
  p(
    "Not sure which mid laner matches your personality? " +
    "Take the RiftMatch quiz and discover the champion that was made for your playstyle."
  ),
]

// ══════════════════════════════════════════════════════════════════════════
// Migration runner
// ══════════════════════════════════════════════════════════════════════════

export const up: MigrationModule['up'] = async (payload) => {
  // ── Guide 1: Support ──────────────────────────────────────────────────
  const ex1 = await payload.find({
    collection: 'pages',
    where: { and: [
      { slug:   { equals: 'support-guide-league-of-legends' } },
      { locale: { equals: 'en' } },
    ]},
  })
  if (ex1.docs.length > 0) {
    console.log('  → EN support guide already present, skip.')
  } else {
    await payload.create({
      collection: 'pages',
      data: {
        title:    "Support: the complete beginner's guide",
        slug:     'support-guide-league-of-legends',
        locale:   'en',
        template: 'guide',
        seo: {
          description:
            'Everything you need to know about the support role in League of Legends: ' +
            'support types, vision control, laning phase, mid/late game and best champions for beginners.',
        },
        content: supportGuideEN,
      } as any,
    })
    console.log('  ✓ EN support guide created.')
  }

  // ── Guide 2: Top Lane ─────────────────────────────────────────────────
  const ex2 = await payload.find({
    collection: 'pages',
    where: { and: [
      { slug:   { equals: 'top-lane-guide-league-of-legends' } },
      { locale: { equals: 'en' } },
    ]},
  })
  if (ex2.docs.length > 0) {
    console.log('  → EN top lane guide already present, skip.')
  } else {
    await payload.create({
      collection: 'pages',
      data: {
        title:    "Top Lane: the complete beginner's guide",
        slug:     'top-lane-guide-league-of-legends',
        locale:   'en',
        template: 'guide',
        seo: {
          description:
            'Complete guide to the top lane in League of Legends: roles, split push mechanics, ' +
            'wave management, Teleport usage and best champions for beginners.',
        },
        content: topLaneGuideEN,
      } as any,
    })
    console.log('  ✓ EN top lane guide created.')
  }

  // ── Guide 3: Jungle ───────────────────────────────────────────────────
  const ex3 = await payload.find({
    collection: 'pages',
    where: { and: [
      { slug:   { equals: 'jungle-guide-league-of-legends' } },
      { locale: { equals: 'en' } },
    ]},
  })
  if (ex3.docs.length > 0) {
    console.log('  → EN jungle guide already present, skip.')
  } else {
    await payload.create({
      collection: 'pages',
      data: {
        title:    "Jungle: the complete beginner's guide",
        slug:     'jungle-guide-league-of-legends',
        locale:   'en',
        template: 'guide',
        seo: {
          description:
            'Complete guide to the jungle role in League of Legends: camps, clear paths, ganking, ' +
            'objectives (dragon, baron) and best jungle champions for beginners.',
        },
        content: jungleGuideEN,
      } as any,
    })
    console.log('  ✓ EN jungle guide created.')
  }

  // ── Guide 4: Mid Lane ─────────────────────────────────────────────────
  const ex4 = await payload.find({
    collection: 'pages',
    where: { and: [
      { slug:   { equals: 'mid-lane-guide-league-of-legends' } },
      { locale: { equals: 'en' } },
    ]},
  })
  if (ex4.docs.length > 0) {
    console.log('  → EN mid lane guide already present, skip.')
  } else {
    await payload.create({
      collection: 'pages',
      data: {
        title:    "Mid Lane: the complete beginner's guide",
        slug:     'mid-lane-guide-league-of-legends',
        locale:   'en',
        template: 'guide',
        seo: {
          description:
            'Complete guide to the mid lane in League of Legends: roles, roaming, map pressure, ' +
            'wave management and best mid lane champions for beginners.',
        },
        content: midLaneGuideEN,
      } as any,
    })
    console.log('  ✓ EN mid lane guide created.')
  }
}
