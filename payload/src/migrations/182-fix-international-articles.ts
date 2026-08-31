import type { MigrationModule } from './runner'

export const id = '182-fix-international-articles'
export const description = "Correction articles international — Worlds 2026 format réel, BLG et HLE premiers qualifiés"

export const up: MigrationModule['up'] = async (payload) => {
  const updates: { slug: string; data: Record<string, unknown> }[] = [
    // 162 — worlds-2026-draw-preview : format réel Worlds 2026 (19 équipes, US, 3 stages)
    {
      slug: 'worlds-2026-draw-preview-fr',
      data: {
        title: "Worlds 2026 : format officiel annoncé — 19 équipes, 3 phases, États-Unis en octobre",
        excerpt: "Riot Games a confirmé le format des Worlds 2026. 19 équipes participeront avec un Play-In (4 équipes), un Swiss Stage (16 équipes) et un Knockout Stage (8 équipes). Le tournoi se tiendra aux États-Unis du 15 octobre au 14 novembre.",
        content: [
          { type: 'p', children: [{ text: "Riot Games a dévoilé le format complet des Worlds 2026, qui se dérouleront aux États-Unis du 15 octobre au 14 novembre 2026. Avec 19 équipes invitées, c'est l'un des Championnats du Monde les plus larges de l'histoire de League of Legends." }] },
          { type: 'h2', children: [{ text: "Trois phases distinctes" }] },
          { type: 'p', children: [{ text: "Le format comprend : un Play-In (4 équipes, double élimination, tous les matchs en BO5), un Swiss Stage (16 équipes, 5 rondes, format BO1/BO3 selon la situation) et un Knockout Stage (8 qualifiés, élimination directe, tous les matchs en BO5)." }] },
          { type: 'h2', children: [{ text: "Répartition régionale" }] },
          { type: 'p', children: [{ text: "LCK et LPL envoient chacune 4 représentants. NA et EMEA ont 3 spots chacune. L'APAC (Pacifique/Asie du Sud-Est) en a 3. Le Brésil (CBLOL) en a 2. Les villes hôtes spécifiques aux États-Unis n'ont pas encore été annoncées." }] },
        ],
        tags: [{ tag: 'Worlds 2026' }, { tag: 'Format' }, { tag: 'États-Unis' }],
      },
    },
    {
      slug: 'worlds-2026-draw-preview-en',
      data: {
        title: "Worlds 2026: Official format confirmed — 19 teams, three stages, United States in October",
        excerpt: "Riot Games has confirmed the Worlds 2026 format. 19 teams will compete across a Play-In (4 teams), Swiss Stage (16 teams), and Knockout Stage (8 teams). The tournament runs in the United States from October 15 to November 14.",
        content: [
          { type: 'p', children: [{ text: "Riot Games has revealed the full format for Worlds 2026, taking place in the United States from October 15 to November 14, 2026. With 19 invited teams, it stands as one of the largest World Championships in League of Legends history." }] },
          { type: 'h2', children: [{ text: "Three distinct stages" }] },
          { type: 'p', children: [{ text: "The format features: a Play-In (4 teams, double elimination, all matches BO5), a Swiss Stage (16 teams, 5 rounds, BO1/BO3 depending on record), and a Knockout Stage (top 8, single elimination, all matches BO5)." }] },
          { type: 'h2', children: [{ text: "Regional distribution" }] },
          { type: 'p', children: [{ text: "LCK and LPL each send 4 representatives. NA and EMEA receive 3 spots each. APAC gets 3. Brazil (CBLOL) sends 2. Specific host cities in the United States have not yet been announced." }] },
        ],
        tags: [{ tag: 'Worlds 2026' }, { tag: 'Format' }, { tag: 'United States' }],
      },
    },
    {
      slug: 'worlds-2026-draw-preview-es',
      data: {
        title: "Worlds 2026: Formato oficial confirmado — 19 equipos, tres fases, Estados Unidos en octubre",
        excerpt: "Riot Games ha confirmado el formato de los Worlds 2026. 19 equipos competirán en un Play-In (4 equipos), Swiss Stage (16 equipos) y Knockout Stage (8 equipos). El torneo se celebra en Estados Unidos del 15 de octubre al 14 de noviembre.",
        content: [
          { type: 'p', children: [{ text: "Riot Games ha desvelado el formato completo de los Worlds 2026, que se celebrarán en Estados Unidos del 15 de octubre al 14 de noviembre de 2026. Con 19 equipos invitados, es uno de los Campeonatos Mundiales más grandes de la historia de League of Legends." }] },
          { type: 'h2', children: [{ text: "Tres fases distintas" }] },
          { type: 'p', children: [{ text: "El formato incluye: un Play-In (4 equipos, doble eliminación, todos los partidos BO5), un Swiss Stage (16 equipos, 5 rondas, BO1/BO3 según el marcador) y un Knockout Stage (top 8, eliminación directa, todos BO5)." }] },
          { type: 'h2', children: [{ text: "Distribución regional" }] },
          { type: 'p', children: [{ text: "LCK y LPL envían 4 representantes cada una. NA y EMEA tienen 3 plazas cada una. APAC tiene 3. Brasil (CBLOL) envía 2. Las ciudades sede específicas en Estados Unidos aún no han sido anunciadas." }] },
        ],
        tags: [{ tag: 'Worlds 2026' }, { tag: 'Formato' }, { tag: 'Estados Unidos' }],
      },
    },

    // 168 — worlds-2026-playin-teams : BLG qualifié 15 août, HLE qualifié (MSI champion)
    {
      slug: 'worlds-2026-playin-teams-fr',
      data: {
        title: "Worlds 2026 : BiliBili Gaming et Hanwha Life Esports premiers qualifiés officiels",
        excerpt: "BiliBili Gaming (champion LPL Split 2) et Hanwha Life Esports (champion MSI 2026) sont les deux premières équipes officiellement qualifiées pour les Worlds 2026 aux États-Unis.",
        content: [
          { type: 'p', children: [{ text: "Les qualifications pour les Worlds 2026 (États-Unis, 15 oct – 14 nov) commencent à prendre forme. Deux équipes sont d'ores et déjà officiellement confirmées : BiliBili Gaming et Hanwha Life Esports." }] },
          { type: 'h2', children: [{ text: "BiliBili Gaming — Seed 2 Chine" }] },
          { type: 'p', children: [{ text: "BLG a décroché sa qualification grâce à ses performances LPL en 2026. Champions du Split 1 (vs JDG 3-1) et du Split 2 (vs TES 3-0), leur régularité sur l'ensemble de la saison les place comme la première équipe chinoise officiellement engagée pour les Worlds." }] },
          { type: 'h2', children: [{ text: "Hanwha Life Esports — Seed Corée via MSI" }] },
          { type: 'p', children: [{ text: "HLE avait décroché leur ticket dès le MSI 2026, en remportant le tournoi international de mi-saison. En tant que champion MSI, HLE est automatiquement qualifié pour les Worlds et bénéficie d'une règle spéciale : si HLE termine dans le top 3 des LCK Season Playoffs, leur Seed Worlds sera transmis à la 4e équipe coréenne, permettant à la LCK d'envoyer un représentant supplémentaire au Swiss Stage." }] },
        ],
        tags: [{ tag: 'Worlds 2026' }, { tag: 'BiliBili Gaming' }, { tag: 'Hanwha Life' }, { tag: 'Qualifications' }],
      },
    },
    {
      slug: 'worlds-2026-playin-teams-en',
      data: {
        title: "Worlds 2026: BiliBili Gaming and Hanwha Life Esports are the first confirmed teams",
        excerpt: "BiliBili Gaming (LPL Split 2 champions) and Hanwha Life Esports (MSI 2026 champions) are the first two teams officially confirmed for Worlds 2026 in the United States.",
        content: [
          { type: 'p', children: [{ text: "Worlds 2026 qualifications are beginning to take shape. Two teams are already officially confirmed: BiliBili Gaming and Hanwha Life Esports." }] },
          { type: 'h2', children: [{ text: "BiliBili Gaming — CN Seed 2" }] },
          { type: 'p', children: [{ text: "BLG earned their Worlds spot through their LPL 2026 performances. Champions of Split 1 (vs JDG 3-1) and Split 2 (vs TES 3-0), their season-long consistency makes them the first Chinese team officially confirmed for Worlds 2026 in the United States." }] },
          { type: 'h2', children: [{ text: "Hanwha Life Esports — KR Seed via MSI" }] },
          { type: 'p', children: [{ text: "HLE punched their Worlds ticket back at MSI 2026, which they won. As MSI champions, HLE are automatically qualified for Worlds. A special rule applies: if HLE finish in the top 3 of the LCK Season Playoffs, their Worlds seed passes to the fourth-placed Korean team, allowing the LCK to send an extra representative directly to the Swiss Stage." }] },
        ],
        tags: [{ tag: 'Worlds 2026' }, { tag: 'BiliBili Gaming' }, { tag: 'Hanwha Life' }, { tag: 'Qualification' }],
      },
    },
    {
      slug: 'worlds-2026-playin-teams-es',
      data: {
        title: "Worlds 2026: BiliBili Gaming y Hanwha Life Esports son los primeros clasificados",
        excerpt: "BiliBili Gaming (campeones de la LPL Split 2) y Hanwha Life Esports (campeones del MSI 2026) son los primeros dos equipos oficialmente clasificados para los Worlds 2026 en Estados Unidos.",
        content: [
          { type: 'p', children: [{ text: "Las clasificaciones para los Worlds 2026 (Estados Unidos, 15 oct – 14 nov) empiezan a tomar forma. Dos equipos están ya oficialmente confirmados: BiliBili Gaming y Hanwha Life Esports." }] },
          { type: 'h2', children: [{ text: "BiliBili Gaming — CN Semilla 2" }] },
          { type: 'p', children: [{ text: "BLG se ganó su plaza en los Worlds gracias a sus actuaciones en la LPL 2026. Campeones del Split 1 (ante JDG 3-1) y del Split 2 (ante TES 3-0), su regularidad a lo largo de toda la temporada les convierte en el primer equipo chino confirmado para los Worlds 2026." }] },
          { type: 'h2', children: [{ text: "Hanwha Life Esports — KR Semilla vía MSI" }] },
          { type: 'p', children: [{ text: "HLE aseguró su plaza en los Worlds ya en el MSI 2026, que ganaron. Como campeones del MSI, HLE están clasificados automáticamente. Una regla especial aplica: si HLE termina en el top 3 de los LCK Season Playoffs, su plaza en Worlds pasará al cuarto equipo coreano, permitiendo a la LCK enviar un representante extra directamente al Swiss Stage." }] },
        ],
        tags: [{ tag: 'Worlds 2026' }, { tag: 'BiliBili Gaming' }, { tag: 'Hanwha Life' }, { tag: 'Clasificación' }],
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
