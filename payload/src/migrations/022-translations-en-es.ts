import type { MigrationModule } from './runner'

export const id = '022-translations-en-es'
export const description = 'Traductions EN + ES des 3 news + lien officiel Riot sur les patch notes'

export const up: MigrationModule['up'] = async (payload) => {

  // ════════════════════════════════════════════════
  // NEWS EN — English translations
  // ════════════════════════════════════════════════

  await payload.create({
    collection: 'news',
    data: {
      title: 'Keria extends T1 contract through 2029 — signed live on stage',
      slug: 'keria-re-signe-t1-2029',
      category: 'esports',
      locale: 'en',
      status: 'published',
      publishedAt: '2026-04-26T14:00:00.000Z',
      author: 'RiftMatch',
      coverImage: 'https://static.invenglobal.com/upload/image/2026/04/26/i1777204515962872.jpeg',
      excerpt: 'During the T1 Home Ground event at Inspire Arena in Incheon, Ryu "Keria" Min-seok signed a 3-year contract extension live on stage in front of fans, committing to T1 through the end of 2029.',
      tags: [{ tag: 'T1' }, { tag: 'Keria' }, { tag: 'LCK' }, { tag: '2026 Transfers' }],
      content: [
        { type: 'h2', children: [{ text: 'Signed live in front of fans' }] },
        { type: 'p', children: [{ text: 'On April 26, 2026, during the LCK Home Ground fan meeting at Inspire Arena in Yeongjongdo, Incheon, T1 gave its fans a surprise gift: Ryu "Keria" Min-seok signed his contract extension live on stage. The Korean support is now committed to T1 through the end of the 2029 season — a three-year extension.' }] },
        { type: 'h2', children: [{ text: 'A renewed 2026 roster' }] },
        { type: 'p', children: [{ text: 'This season, T1 saw a key change in the bot lane. After more than five years with the org and three World Championship titles, Lee "Gumayusi" Min-hyung left to join Hanwha Life Esports. He was replaced by Kim "Peyz" Su-hwan, the former JDG ADC from the LPL. The rest of the roster stayed intact.' }] },
        {
          type: 'ul', children: [
            { type: 'li', children: [{ text: 'Top: Choi "Doran" Hyeon-joon' }] },
            { type: 'li', children: [{ text: 'Jungle: Mun "Oner" Hyeon-jun' }] },
            { type: 'li', children: [{ text: 'Mid: Lee "Faker" Sang-hyeok' }] },
            { type: 'li', children: [{ text: 'ADC: Kim "Peyz" Su-hwan (new)' }] },
            { type: 'li', children: [{ text: 'Support: Ryu "Keria" Min-seok (extended through 2029)' }] },
          ],
        },
        { type: 'h2', children: [{ text: 'Faker and Keria together until 2029' }] },
        { type: 'p', children: [{ text: 'Faker is also under contract through 2029, while Oner and Peyz are signed until 2028. T1\'s management clearly chose continuity over reconstruction, having resisted massive LPL franchise offers for Keria earlier this year.' }] },
        { type: 'blockquote', children: [{ text: '"I wanted to keep winning with this team. T1 is my home since 2021 — I can\'t imagine wearing any other jersey." — Keria, at the Home Ground ceremony' }] },
        { type: 'h2', children: [{ text: 'Next milestone: MSI 2026' }] },
        { type: 'p', children: [{ text: 'T1 enters the second half of the LCK split with a fully stable roster. Their next major target is MSI 2026, scheduled for June, where they hope to represent the LCK against LPL representatives who have been dominating internationally since the start of the year.' }] },
      ],
    },
  })

  await payload.create({
    collection: 'news',
    data: {
      title: 'Season 2 Pandemonium: WASD in ranked, new runes, new AP champion',
      slug: 'saison-2-pandemonium-lol-2026',
      category: 'announcement',
      locale: 'en',
      status: 'published',
      publishedAt: '2026-04-29T12:00:00.000Z',
      author: 'RiftMatch',
      coverImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/c5b5258034a7e4c34fc360db44a5af4703ec9d9b-1920x1080.jpg',
      excerpt: 'League of Legends Season 2 officially launches with patch 26.9. WASD enabled in Solo/Duo, Deathfire Touch returns, new starting items, and a new AP assassin mid laner coming soon.',
      tags: [{ tag: 'Season 2' }, { tag: 'Patch 26.9' }, { tag: 'Pandemonium' }, { tag: 'WASD' }],
      content: [
        { type: 'h2', children: [{ text: 'WASD in ranked — it\'s official' }] },
        { type: 'p', children: [{ text: 'Long-awaited, the WASD movement mode is now enabled in Solo/Duo and Flex queues starting with patch 26.9. Keybinds are fully customizable and can vary per champion — a feature highly requested by FPS players.' }] },
        { type: 'h2', children: [{ text: 'Classic runes return' }] },
        { type: 'p', children: [{ text: 'Riot is bringing back two iconic runes from the old system in Season 2: Deathfire Touch and Stormraider\'s Surge. These runes open up new build paths for several champions, especially AP assassins and fast bruisers.' }] },
        { type: 'h2', children: [{ text: 'Lane changes — Top and Mid' }] },
        { type: 'ul', children: [{ type: 'li', children: [{ text: 'Top lane: XP bonus when joining teamfights to reduce role isolation' }] }, { type: 'li', children: [{ text: 'Mid lane: loses empowered recall, gains small passive AD and AP bonus' }] }] },
        { type: 'h2', children: [{ text: 'Next champion: AP assassin mid' }] },
        { type: 'p', children: [{ text: 'Riot confirmed the next champion will be an AP assassin playing mid lane. No name or kit revealed yet, but visual teasers suggest a Noxus-related lore aesthetic. More details coming in the next few weeks.' }] },
        { type: 'h2', children: [{ text: 'Pandemonium skins available April 29' }] },
        { type: 'ul', children: [{ type: 'li', children: [{ text: 'Pandemonium Annie' }] }, { type: 'li', children: [{ text: 'Pandemonium Kindred' }] }, { type: 'li', children: [{ text: 'Demoncursed Vayne (Legendary 1820 RP)' }] }, { type: 'li', children: [{ text: 'Prestige Pandemonium Shaco' }] }] },
      ],
    },
  })

  await payload.create({
    collection: 'news',
    data: {
      title: 'Tier List Patch 26.9 — Best champions for Season 2 launch',
      slug: 'tier-list-patch-26-9-saison-2',
      category: 'meta',
      locale: 'en',
      status: 'published',
      publishedAt: '2026-04-29T18:00:00.000Z',
      author: 'RiftMatch',
      coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg',
      excerpt: 'Patch 26.9 reshapes the meta with the Ezreal AP buff, Ambessa nerf and Zeri changes. Here are the dominant picks lane by lane at Season 2 launch.',
      tags: [{ tag: 'Tier List' }, { tag: 'Meta' }, { tag: 'Patch 26.9' }, { tag: 'Season 2' }],
      content: [
        { type: 'h2', children: [{ text: 'Top Lane' }] },
        { type: 'ul', children: [{ type: 'li', children: [{ text: 'S — Darius, Sett, Garen (benefit from teamfight XP bonus)' }] }, { type: 'li', children: [{ text: 'A — Fiora, Camille, Jax' }] }, { type: 'li', children: [{ text: 'B — Renekton, Malphite, Ambessa (nerfed this patch)' }] }] },
        { type: 'h2', children: [{ text: 'Jungle' }] },
        { type: 'ul', children: [{ type: 'li', children: [{ text: 'S — Warwick (passive buff), Vi, Jarvan IV' }] }, { type: 'li', children: [{ text: 'A — Hecarim, Lillia (level buff), Kha\'Zix' }] }, { type: 'li', children: [{ text: 'B — Dr. Mundo (double monster nerf), Bel\'Veth' }] }] },
        { type: 'h2', children: [{ text: 'Mid Lane' }] },
        { type: 'ul', children: [{ type: 'li', children: [{ text: 'S — Hwei (big passive buff), Syndra, Orianna' }] }, { type: 'li', children: [{ text: 'A — Ezreal AP (finally viable), Zoe (nerfed but still strong), Viktor' }] }, { type: 'li', children: [{ text: 'B — Karma (nerfed), Taliyah (neutral adjustment)' }] }] },
        { type: 'h2', children: [{ text: 'Bot Lane (ADC)' }] },
        { type: 'ul', children: [{ type: 'li', children: [{ text: 'S — Lucian (E buff), Jinx, Caitlyn' }] }, { type: 'li', children: [{ text: 'A — Zeri (adjusted, passive range +50), Jhin, Xayah' }] }, { type: 'li', children: [{ text: 'B — Miss Fortune, Kai\'Sa' }] }] },
        { type: 'h2', children: [{ text: 'Support' }] },
        { type: 'ul', children: [{ type: 'li', children: [{ text: 'S — Tahm Kench (double buff), Yuumi (R strengthened), Nautilus' }] }, { type: 'li', children: [{ text: 'A — Thresh, Lulu, Rakan' }] }, { type: 'li', children: [{ text: 'B — Mel (nerfed), Karma (nerfed)' }] }] },
      ],
    },
  })

  // ════════════════════════════════════════════════
  // NEWS ES — Traducciones al español
  // ════════════════════════════════════════════════

  await payload.create({
    collection: 'news',
    data: {
      title: 'Keria renueva con T1 hasta 2029 — firmó en directo sobre el escenario',
      slug: 'keria-re-signe-t1-2029',
      category: 'esports',
      locale: 'es',
      status: 'published',
      publishedAt: '2026-04-26T14:00:00.000Z',
      author: 'RiftMatch',
      coverImage: 'https://static.invenglobal.com/upload/image/2026/04/26/i1777204515962872.jpeg',
      excerpt: 'Durante el evento T1 Home Ground en el Inspire Arena de Incheon, Ryu "Keria" Min-seok firmó una extensión de 3 años de contrato en directo ante los fans, comprometido con T1 hasta finales de 2029.',
      tags: [{ tag: 'T1' }, { tag: 'Keria' }, { tag: 'LCK' }, { tag: 'Fichajes 2026' }],
      content: [
        { type: 'h2', children: [{ text: 'Firmado en directo ante los fans' }] },
        { type: 'p', children: [{ text: 'El 26 de abril de 2026, durante el fan meeting LCK Home Ground celebrado en el Inspire Arena de Yeongjongdo, Incheon, T1 hizo un regalo sorpresa a sus fans: Ryu "Keria" Min-seok firmó su extensión de contrato en directo sobre el escenario. El support coreano queda vinculado a T1 hasta finales de la temporada 2029.' }] },
        { type: 'h2', children: [{ text: 'La plantilla renovada de 2026' }] },
        { type: 'ul', children: [{ type: 'li', children: [{ text: 'Top: Choi "Doran" Hyeon-joon' }] }, { type: 'li', children: [{ text: 'Jungla: Mun "Oner" Hyeon-jun' }] }, { type: 'li', children: [{ text: 'Mid: Lee "Faker" Sang-hyeok' }] }, { type: 'li', children: [{ text: 'ADC: Kim "Peyz" Su-hwan (nuevo)' }] }, { type: 'li', children: [{ text: 'Support: Ryu "Keria" Min-seok (renovado hasta 2029)' }] }] },
        { type: 'blockquote', children: [{ text: '"Quería seguir ganando con este equipo. T1 es mi hogar desde 2021 — no me imagino con otra camiseta." — Keria, en la ceremonia Home Ground' }] },
      ],
    },
  })

  await payload.create({
    collection: 'news',
    data: {
      title: 'Temporada 2 Pandemonium: WASD en ranked, nuevas runas, nuevo campeón AP',
      slug: 'saison-2-pandemonium-lol-2026',
      category: 'announcement',
      locale: 'es',
      status: 'published',
      publishedAt: '2026-04-29T12:00:00.000Z',
      author: 'RiftMatch',
      coverImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/c5b5258034a7e4c34fc360db44a5af4703ec9d9b-1920x1080.jpg',
      excerpt: 'La Temporada 2 de League of Legends se lanza oficialmente con el parche 26.9. WASD activado en clasificatoria, regresa Deathfire Touch, nuevos objetos iniciales y próximo campeón asesino AP.',
      tags: [{ tag: 'Temporada 2' }, { tag: 'Parche 26.9' }, { tag: 'Pandemonium' }, { tag: 'WASD' }],
      content: [
        { type: 'h2', children: [{ text: 'WASD en clasificatoria — es oficial' }] },
        { type: 'p', children: [{ text: 'El modo de movimiento WASD, muy esperado, ya está activado en las colas Solo/Dúo y Flexible desde el parche 26.9. Los atajos de teclado son totalmente personalizables y pueden variar según el campeón.' }] },
        { type: 'h2', children: [{ text: 'Próximo campeón: asesino AP mid' }] },
        { type: 'p', children: [{ text: 'Riot confirmó que el próximo campeón será un asesino AP de línea central. Sin nombre ni kit revelado por ahora, pero los teasers visuales apuntan a una estética relacionada con el lore de Noxus.' }] },
        { type: 'h2', children: [{ text: 'Skins Pandemonium disponibles el 29 de abril' }] },
        { type: 'ul', children: [{ type: 'li', children: [{ text: 'Pandemonium Annie' }] }, { type: 'li', children: [{ text: 'Pandemonium Kindred' }] }, { type: 'li', children: [{ text: 'Demoncursed Vayne (Legendario 1820 RP)' }] }, { type: 'li', children: [{ text: 'Prestige Pandemonium Shaco' }] }] },
      ],
    },
  })

  await payload.create({
    collection: 'news',
    data: {
      title: 'Tier List Parche 26.9 — Los mejores campeones para el inicio de Temporada 2',
      slug: 'tier-list-patch-26-9-saison-2',
      category: 'meta',
      locale: 'es',
      status: 'published',
      publishedAt: '2026-04-29T18:00:00.000Z',
      author: 'RiftMatch',
      coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg',
      excerpt: 'El parche 26.9 remodela la meta con el buff AP de Ezreal, el nerf de Ambessa y los cambios de Zeri. Aquí están los picks dominantes por línea en el lanzamiento de la Temporada 2.',
      tags: [{ tag: 'Tier List' }, { tag: 'Meta' }, { tag: 'Parche 26.9' }, { tag: 'Temporada 2' }],
      content: [
        { type: 'h2', children: [{ text: 'Línea Superior' }] },
        { type: 'ul', children: [{ type: 'li', children: [{ text: 'S — Darius, Sett, Garen' }] }, { type: 'li', children: [{ text: 'A — Fiora, Camille, Jax' }] }, { type: 'li', children: [{ text: 'B — Renekton, Malphite, Ambessa (nerfed)' }] }] },
        { type: 'h2', children: [{ text: 'Jungla' }] },
        { type: 'ul', children: [{ type: 'li', children: [{ text: 'S — Warwick (buff pasivo), Vi, Jarvan IV' }] }, { type: 'li', children: [{ text: 'A — Hecarim, Lillia, Kha\'Zix' }] }, { type: 'li', children: [{ text: 'B — Dr. Mundo (doble nerf monstruos), Bel\'Veth' }] }] },
        { type: 'h2', children: [{ text: 'Línea Central' }] },
        { type: 'ul', children: [{ type: 'li', children: [{ text: 'S — Hwei (gran buff pasivo), Syndra, Orianna' }] }, { type: 'li', children: [{ text: 'A — Ezreal AP (finalmente viable), Zoe, Viktor' }] }, { type: 'li', children: [{ text: 'B — Karma (nerfed), Taliyah' }] }] },
        { type: 'h2', children: [{ text: 'Bot (ADC)' }] },
        { type: 'ul', children: [{ type: 'li', children: [{ text: 'S — Lucian (buff E), Jinx, Caitlyn' }] }, { type: 'li', children: [{ text: 'A — Zeri (ajustado, rango pasivo +50), Jhin, Xayah' }] }, { type: 'li', children: [{ text: 'B — Miss Fortune, Kai\'Sa' }] }] },
        { type: 'h2', children: [{ text: 'Support' }] },
        { type: 'ul', children: [{ type: 'li', children: [{ text: 'S — Tahm Kench (doble buff), Yuumi (R reforzado), Nautilus' }] }, { type: 'li', children: [{ text: 'A — Thresh, Lulu, Rakan' }] }, { type: 'li', children: [{ text: 'B — Mel (nerfed), Karma (nerfed)' }] }] },
      ],
    },
  })

  // ════════════════════════════════════════════════
  // PATCH NOTES — Ajout lien officiel Riot (FR/EN/ES)
  // ════════════════════════════════════════════════
  const patchLinks: Record<string, { fr: string; en: string; es: string; url: string }> = {
    'patch-26-9': {
      fr: 'Notes officielles Riot — Patch 26.9',
      en: 'Official Riot patch notes — Patch 26.9',
      es: 'Notas oficiales de Riot — Parche 26.9',
      url: 'https://www.leagueoflegends.com/fr-fr/news/game-updates/league-of-legends-patch-26-9-notes/',
    },
    'patch-26-8': {
      fr: 'Notes officielles Riot — Patch 26.8',
      en: 'Official Riot patch notes — Patch 26.8',
      es: 'Notas oficiales de Riot — Parche 26.8',
      url: 'https://www.leagueoflegends.com/fr-fr/news/game-updates/league-of-legends-patch-26-8-notes/',
    },
  }

  for (const [slug, labels] of Object.entries(patchLinks)) {
    const res = await payload.find({ collection: 'patch-notes', where: { slug: { equals: slug } }, limit: 1 })
    const doc = res.docs[0]
    if (!doc) continue
    const existingContent: any[] = (doc.content as any[]) || []
    const officialLinkBlock = {
      type: 'p',
      children: [
        { text: `${labels.fr} / ${labels.en} / ${labels.es} → ` },
        { type: 'link', url: labels.url, newTab: true, children: [{ text: labels.url }] },
      ],
    }
    // Ajoute un separator + lien source si pas déjà présent
    const alreadyLinked = existingContent.some((n: any) =>
      JSON.stringify(n).includes('leagueoflegends.com')
    )
    if (!alreadyLinked) {
      await payload.update({
        collection: 'patch-notes',
        id: doc.id,
        data: {
          content: [
            ...existingContent,
            { type: 'h2', children: [{ text: 'Source officielle / Official source' }] },
            officialLinkBlock,
          ],
        },
      })
      console.log(`✅  Lien Riot ajouté sur patch-notes/${slug}`)
    }
  }
}
