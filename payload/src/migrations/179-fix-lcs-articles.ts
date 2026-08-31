import type { MigrationModule } from './runner'

export const id = '179-fix-lcs-articles'
export const description = "Correction LCS — Cloud9 pas champion (playoffs pas joués), LYON champion du Spring"

export const up: MigrationModule['up'] = async (payload) => {
  const updates: { slug: string; data: Record<string, unknown> }[] = [
    // 169 — lcs-summer-2026-cloud9-champion : Cloud9 n'est pas champion LCS Summer (playoffs TBD)
    // LYON est champion LCS Spring 2026
    {
      slug: 'lcs-summer-2026-cloud9-champion-fr',
      data: {
        title: "LCS 2026 : LYON champion du Spring, LYON et Team Liquid en tête du Summer",
        excerpt: "LYON a remporté les LCS Spring Playoffs 2026 en dominant Team Liquid 3-0 en finale. Au Summer, LYON et Team Liquid sont à égalité en tête (5-1), devant Cloud9 et Sentinels.",
        content: [
          { type: 'p', children: [{ text: "LYON s'est imposé comme la meilleure équipe nord-américaine en 2026. Après avoir remporté le Lock-In en début d'année, LYON a confirmé sa suprématie en remportant les LCS Spring Playoffs, battant Team Liquid 3-0 en grande finale." }] },
          { type: 'h2', children: [{ text: "LCS Summer : LYON et Liquid à égalité" }] },
          { type: 'p', children: [{ text: "La saison Summer s'annonce encore plus compétitive. LYON et Team Liquid se partagent la 1ère place avec un bilan identique de 5 victoires et 1 défaite. Cloud9 et Sentinels les talonnent en 3e et 4e position (4-2 chacun). Les playoffs Summer, qui n'ont pas encore eu lieu, décideront du représentant nord-américain aux Worlds 2026." }] },
          { type: 'h2', children: [{ text: "Cloud9 à l'affût" }] },
          { type: 'p', children: [{ text: "Cloud9 reste une équipe à surveiller : bien que 3e en saison régulière, leur parcours en playoffs est toujours imprévisible. L'équipe californienne espère retrouver le chemin de la finale pour décrocher un ticket pour les Worlds 2026 aux États-Unis." }] },
        ],
        tags: [{ tag: 'LCS' }, { tag: 'LYON' }, { tag: 'Team Liquid' }, { tag: 'Cloud9' }, { tag: 'Worlds 2026' }],
      },
    },
    {
      slug: 'lcs-summer-2026-cloud9-champion-en',
      data: {
        title: "LCS 2026: LYON are Spring champions, LYON and Team Liquid tied atop Summer standings",
        excerpt: "LYON claimed the LCS Spring 2026 title with a dominant 3-0 over Team Liquid in the finals. In the Summer split, LYON and Liquid are tied for first at 5-1, ahead of Cloud9 and Sentinels.",
        content: [
          { type: 'p', children: [{ text: "LYON have established themselves as North America's top team in 2026. After winning the Lock-In tournament earlier in the year, LYON backed it up with the LCS Spring Playoffs title, sweeping Team Liquid 3-0 in the Grand Final." }] },
          { type: 'h2', children: [{ text: "LCS Summer: LYON and Liquid locked in a tie" }] },
          { type: 'p', children: [{ text: "The Summer split is shaping up to be even more competitive. LYON and Team Liquid share first place at 5-1, with Cloud9 and Sentinels right behind them at 4-2. The Summer Playoffs — which have not yet taken place — will determine North America's representative(s) at Worlds 2026." }] },
          { type: 'h2', children: [{ text: "Cloud9 lurking" }] },
          { type: 'p', children: [{ text: "Cloud9 remain a dangerous playoff team despite sitting third in the regular season. The California squad is eyeing a deep playoff run to earn a Worlds 2026 berth on home soil in the United States." }] },
        ],
        tags: [{ tag: 'LCS' }, { tag: 'LYON' }, { tag: 'Team Liquid' }, { tag: 'Cloud9' }, { tag: 'Worlds 2026' }],
      },
    },
    {
      slug: 'lcs-summer-2026-cloud9-champion-es',
      data: {
        title: "LCS 2026: LYON campeón del Spring, LYON y Team Liquid empatan en lo alto del Summer",
        excerpt: "LYON se proclamó campeón de los LCS Spring Playoffs 2026 con un contundente 3-0 sobre Team Liquid. En el Summer, LYON y Liquid comparten el primer puesto (5-1) ante Cloud9 y Sentinels.",
        content: [
          { type: 'p', children: [{ text: "LYON se ha consolidado como el mejor equipo de Norteamérica en 2026. Tras ganar el Lock-In, el equipo confirmó su dominio conquistando los LCS Spring Playoffs con un barrido 3-0 a Team Liquid en la gran final." }] },
          { type: 'h2', children: [{ text: "LCS Summer: LYON y Liquid igualados en lo alto" }] },
          { type: 'p', children: [{ text: "La fase regular del Summer se perfila muy igualada. LYON y Team Liquid comparten el primer puesto con un balance de 5-1, seguidos de Cloud9 y Sentinels (4-2 cada uno). Los playoffs del Summer, que aún no se han disputado, decidirán quién representa a Norteamérica en los Worlds 2026." }] },
          { type: 'h2', children: [{ text: "Cloud9, a la espera" }] },
          { type: 'p', children: [{ text: "Cloud9 sigue siendo un equipo peligroso en playoffs a pesar de ocupar el tercer puesto en la fase regular. El equipo californiano apunta a llegar lejos en los playoffs para conseguir una plaza en los Worlds 2026 en suelo estadounidense." }] },
        ],
        tags: [{ tag: 'LCS' }, { tag: 'LYON' }, { tag: 'Team Liquid' }, { tag: 'Cloud9' }, { tag: 'Worlds 2026' }],
      },
    },
  ]

  for (const u of updates) {
    const ex = await payload.find({ collection: 'news', where: { slug: { equals: u.slug } } })
    if (ex.docs.length === 0) { console.log(`⚠️  Not found: ${u.slug}`); continue }
    await payload.update({ collection: 'news', id: ex.docs[0].id, data: u.data as any })
    console.log(`✅ Updated: ${u.slug}`)
  }
}
