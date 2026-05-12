import type { MigrationModule } from './runner'

export const id = '033-news-lck-week6-results-2026'
export const description = 'Article LCK 2026 — Bilan Semaine 6 (6-10 mai) : Doran et T1 dominent DK, HLE toujours en tête'

const DISCLOSURE_DATE = '2026-05-12T08:00:00.000Z'

const articles = [
  // ── FR ─────────────────────────────────────────────────────────────────────
  {
    title: 'LCK 2026 Semaine 6 : Doran transcende T1 face à DK, HLE maintient sa domination',
    slug: 'lck-2026-semaine-6-resultats-t1-hle',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage: 'https://static.invenglobal.com/upload/image/2026/04/26/i1777204515962872.jpeg',
    excerpt:
      'La Semaine 6 des LCK Rounds 1-2 (6-10 mai 2026) restera marquée par la revanche de T1 sur DK, Doran brillant sur Ambessa, et la poursuite de la domination de HLE en tête du classement.',
    sourceUrl: 'https://www.invenglobal.com/articles/21715/doran-choi-hyeon-joon-shines-t1-sweeps-dk-2-0',
    tags: [
      { tag: 'LCK' },
      { tag: 'Esports' },
      { tag: 'T1' },
      { tag: 'HLE' },
      { tag: 'LCK 2026' },
      { tag: 'Résultats' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "La Semaine 6 des LCK 2026 Rounds 1-2 s'est déroulée du 6 au 10 mai à LoL Park, Jonggak. Avec seulement trois semaines restantes avant les qualifications Road to MSI, la course au top 6 s'est intensifiée. Voici le bilan complet de cette semaine riche en rebondissements.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Doran en grande forme : T1 prend sa revanche sur DK (2-0)" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le 10 mai, T1 a balayé Dplus KIA 2-0 au terme d'une prestation remarquable de Choi 'Doran' Hyeon-joon. En Game 1, le toplaner a opté pour Yorick afin d'ancrer sa présence en side lane. En Game 2, sa transition sur Ambessa a été décisive : grâce à un contrôle parfait du Rift Herald et une prise de dragon enchaînée, Doran a gouverné un teamfight crucial en mid lane qui a scellé la victoire. T1 porte désormais son bilan à 8-4 dans la saison régulière.",
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "Cette victoire prend une saveur particulière : T1 avait subi une défaite contre DK lors de la première confrontation (Round 1). La revanche est consommée et T1 consolide sa position parmi les prétendants au Road to MSI.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "HLE intraitable : deux victoires supplémentaires pour le leader" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Hanwha Life Esports a une nouvelle fois démontré pourquoi ils sont les maîtres incontestés de cette saison régulière. Dès le Jour 1 (6 mai), HLE a écarté Gen.G 2-0, infligeant une défaite à l'une des équipes les plus solides du classement. En Day 5 (10 mai), ils ont conclu la semaine par une victoire plus serrée contre DRX (2-1), mais une victoire qui confirme leur capacité à gagner même dans les matchs disputés. HLE comptabilise désormais 11 victoires pour seulement 1 défaite.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Les autres résultats notables de la semaine" }],
      },
      {
        type: 'p',
        children: [{ text: "La Semaine 6 a également livré son lot de surprises et de confirmations :" }],
      },
      {
        type: 'ul',
        children: [
          {
            type: 'li',
            children: [{ text: "7 mai — KT Rolster bat Dplus KIA 2-0 : KT confirme sa deuxième place avec une victoire propre." }],
          },
          {
            type: 'li',
            children: [{ text: "7 mai — BRION bat FearX 2-0 : belle performance de BRION qui continue de surprendre en bas du tableau." }],
          },
          {
            type: 'li',
            children: [{ text: "8 mai — Gen.G bat DRX 2-0 : Gen.G rebondit après sa défaite face à HLE et reprend des points importants." }],
          },
          {
            type: 'li',
            children: [{ text: "8 mai — T1 bat SOOPers 2-0 : premier succès de T1 cette semaine, avant leur revanche sur DK deux jours plus tard." }],
          },
          {
            type: 'li',
            children: [{ text: "9 mai — BRION bat Nongshim RedForce 2-0 : BRION enchaîne une deuxième victoire en semaine, solide." }],
          },
          {
            type: 'li',
            children: [{ text: "9 mai — FearX renverse KT Rolster 2-0 : upset majeur ! FearX prive KT d'un bilan parfait en semaine." }],
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Classement après la Semaine 6 — la course au Road to MSI" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "HLE (11-1) domine le classement de bout en bout. KT Rolster (9-3 estimé) reste en deuxième position malgré l'upset subi face à FearX en fin de semaine. T1 pointe à 8-4, en bonne position pour intégrer le top 6 qualificatif. Gen.G (victoire vs DRX, défaite vs HLE) reste dans la course. Il reste trois semaines de compétition avant que les six meilleures équipes se qualifient pour le Road to MSI.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Semaine 7 dès le 13 mai : affiche de gala HLE vs DK" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La Semaine 7 débute le mercredi 13 mai avec deux rencontres attendues : T1 vs Nongshim RedForce et DNS vs Dplus KIA. Le 14 mai, BRION affronte Gen.G pendant que FearX tente un nouvel upset contre KT Rolster. Le vendredi 15 mai sera marqué par le choc HLE vs Dplus KIA, une affiche à haute tension entre le leader incontesté et une équipe qui cherche à se relancer.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "La course au Road to MSI entre dans sa phase décisive. Avec HLE quasi-assuré de la première place, les batailles pour les seeds 2 à 6 s'annoncent âpres. FearX et BRION, les surprises de cette semaine 6, pourraient encore redistribuer les cartes.",
          },
        ],
      },
    ],
  },

  // ── EN ─────────────────────────────────────────────────────────────────────
  {
    title: 'LCK 2026 Week 6 Recap: Doran Carries T1 Past DK, HLE Continues to Dominate',
    slug: 'lck-2026-week-6-results-t1-hle-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage: 'https://static.invenglobal.com/upload/image/2026/04/26/i1777204515962872.jpeg',
    excerpt:
      'Week 6 of the LCK 2026 Rounds 1-2 (May 6-10) was headlined by Doran\'s explosive Ambessa on T1 vs DK, while HLE extended their lead at the top of the standings. Full recap inside.',
    sourceUrl: 'https://www.invenglobal.com/articles/21715/doran-choi-hyeon-joon-shines-t1-sweeps-dk-2-0',
    tags: [
      { tag: 'LCK' },
      { tag: 'Esports' },
      { tag: 'T1' },
      { tag: 'HLE' },
      { tag: 'LCK 2026' },
      { tag: 'Results' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Week 6 of the LCK 2026 Rounds 1-2 ran from May 6 to 10 at LoL Park in Jonggak. With only three weeks remaining before the Road to MSI qualification, the race for the top six spots is heating up. Here is a full breakdown of everything that happened.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Doran Shines: T1 Sweeps DK 2-0 in Revenge Match" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "On May 10, T1 swept Dplus KIA 2-0 in a dominant performance spearheaded by top laner Choi 'Doran' Hyeon-joon. In Game 1, Doran opted for Yorick to establish dominant side lane pressure. In Game 2, his switch to Ambessa proved game-winning: exceptional Rift Herald control combined with a decisive dragon stack sequence set up a match-winning teamfight in the mid lane. T1 now sit at 8-4 in the regular season.",
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "This win carries extra significance — T1 had previously lost to DK in their Round 1 meeting earlier in the season. The revenge is complete, and T1 are well positioned to secure a Road to MSI berth.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "HLE Unstoppable: Two More Wins for the League Leader" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Hanwha Life Esports once again proved why they are the undisputed kings of the 2026 regular season. On Day 1 (May 6), HLE dispatched Gen.G 2-0, defeating one of the competition's most consistent rosters. On Day 5 (May 10), they closed out the week with a tighter 2-1 victory over DRX — a result that showcases their ability to grind out wins even in closer games. HLE now stand at a remarkable 11-1.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Other Notable Results from Week 6" }],
      },
      {
        type: 'p',
        children: [{ text: 'Week 6 also delivered several key results and upsets across the schedule:' }],
      },
      {
        type: 'ul',
        children: [
          {
            type: 'li',
            children: [{ text: 'May 7 — KT Rolster def. Dplus KIA 2-0: KT reassert second place with a clean sweep.' }],
          },
          {
            type: 'li',
            children: [{ text: 'May 7 — BRION def. FearX 2-0: BRION pick up a statement win from the lower half of the table.' }],
          },
          {
            type: 'li',
            children: [{ text: 'May 8 — Gen.G def. DRX 2-0: Gen.G bounce back from their HLE loss and stay in Road to MSI contention.' }],
          },
          {
            type: 'li',
            children: [{ text: 'May 8 — T1 def. SOOPers 2-0: the first of T1\'s two wins this week, setting up their DK revenge match.' }],
          },
          {
            type: 'li',
            children: [{ text: 'May 9 — BRION def. Nongshim RedForce 2-0: BRION complete a perfect 2-0 week.' }],
          },
          {
            type: 'li',
            children: [{ text: 'May 9 — FearX def. KT Rolster 2-0: the biggest upset of the week, FearX deny KT a perfect record.' }],
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Standings After Week 6 — The Road to MSI Race' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "HLE (11-1) are comfortably in first place. KT Rolster (approx. 9-3) hold second despite the FearX upset. T1 at 8-4 are firmly in Road to MSI contention. Gen.G remain in the hunt with a split week. The top 6 teams at the end of Rounds 1-2 qualify for Road to MSI — three weeks remain to secure those spots.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Week 7 Preview: HLE vs DK Headlines May 15' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Week 7 kicks off on May 13 with T1 vs Nongshim RedForce and DNS vs Dplus KIA. On May 14, BRION take on Gen.G while FearX look to upset KT Rolster again. Friday May 15 delivers the week\'s marquee match: HLE vs Dplus KIA — a high-stakes clash between the league leader and a team desperate for redemption.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'The Road to MSI race enters its decisive phase. With HLE all but guaranteed the first seed, the real battles are for places 2 through 6. FearX and BRION — Week 6\'s surprise packages — could yet shake up the final standings.',
          },
        ],
      },
    ],
  },

  // ── ES ─────────────────────────────────────────────────────────────────────
  {
    title: 'LCK 2026 Semana 6: Doran Lidera a T1 ante DK, HLE Sigue Dominando en lo Alto',
    slug: 'lck-2026-semana-6-resultados-t1-hle-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'lck',
    newsSubtype: 'resultats',
    author: 'RiftMatch',
    publishedAt: DISCLOSURE_DATE,
    coverImage: 'https://static.invenglobal.com/upload/image/2026/04/26/i1777204515962872.jpeg',
    excerpt:
      'La Semana 6 de las LCK 2026 Rounds 1-2 (6-10 de mayo) estuvo marcada por la venganza de T1 sobre DK con un Doran excepcional, y la continuada dominación de HLE al frente de la clasificación.',
    sourceUrl: 'https://www.invenglobal.com/articles/21715/doran-choi-hyeon-joon-shines-t1-sweeps-dk-2-0',
    tags: [
      { tag: 'LCK' },
      { tag: 'Esports' },
      { tag: 'T1' },
      { tag: 'HLE' },
      { tag: 'LCK 2026' },
      { tag: 'Resultados' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'La Semana 6 de las LCK 2026 Rounds 1-2 se disputó del 6 al 10 de mayo en el LoL Park de Jonggak. Con solo tres semanas restantes antes de la clasificación Road to MSI, la carrera por los seis puestos de clasificación se intensificó notablemente. Aquí está el resumen completo.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Doran Brilla: T1 Arrasa a DK 2-0 en la Revancha" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El 10 de mayo, T1 barrió a Dplus KIA 2-0 en una actuación dominante liderada por el top laner Choi 'Doran' Hyeon-joon. En la Partida 1, Doran eligió Yorick para ejercer presión en las side lanes. En la Partida 2, su Ambessa fue decisiva: un control perfecto del Rift Herald seguido de una pila de dragones encadenada configuró un teamfight ganador en mid lane. T1 tiene ahora un récord de 8-4 en la temporada regular.",
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "Esta victoria tiene un sabor especial: T1 había perdido ante DK en su primer enfrentamiento (Ronda 1). La revancha está consumada y T1 está bien posicionado para asegurarse un puesto en el Road to MSI.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "HLE Imparable: Dos Victorias Más para el Líder de la Liga" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Hanwha Life Esports demostró una vez más por qué son los reyes indiscutibles de esta temporada regular. En el Día 1 (6 de mayo), HLE eliminó a Gen.G 2-0, derrotando a uno de los equipos más sólidos del campeonato. En el Día 5 (10 de mayo), cerraron la semana con una victoria más ajustada ante DRX (2-1), confirmando su capacidad para ganar incluso en partidos complicados. HLE acumula ahora un impresionante récord de 11-1.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Otros Resultados Destacados de la Semana 6" }],
      },
      {
        type: 'p',
        children: [{ text: 'La Semana 6 también ofreció varias sorpresas y resultados clave:' }],
      },
      {
        type: 'ul',
        children: [
          {
            type: 'li',
            children: [{ text: '7 de mayo — KT Rolster vence a Dplus KIA 2-0: KT reafirma el segundo puesto con una barrida limpia.' }],
          },
          {
            type: 'li',
            children: [{ text: '7 de mayo — BRION vence a FearX 2-0: buena actuación de BRION desde la parte baja de la tabla.' }],
          },
          {
            type: 'li',
            children: [{ text: '8 de mayo — Gen.G vence a DRX 2-0: Gen.G se recupera de su derrota ante HLE y sigue en la pelea por el Road to MSI.' }],
          },
          {
            type: 'li',
            children: [{ text: '8 de mayo — T1 vence a SOOPers 2-0: primera victoria de T1 en la semana, previa a su revancha ante DK.' }],
          },
          {
            type: 'li',
            children: [{ text: '9 de mayo — BRION vence a Nongshim RedForce 2-0: BRION completa una semana perfecta con dos victorias.' }],
          },
          {
            type: 'li',
            children: [{ text: '9 de mayo — FearX vence a KT Rolster 2-0: la mayor sorpresa de la semana, FearX priva a KT de una semana perfecta.' }],
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Clasificación tras la Semana 6 — La Carrera al Road to MSI' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'HLE (11-1) lidera cómodamente la clasificación. KT Rolster (aprox. 9-3) mantiene el segundo puesto pese al tropiezo ante FearX. T1 con 8-4 está bien posicionado para clasificarse al Road to MSI. Gen.G sigue en la pugna con una semana de resultados mixtos. Los seis mejores equipos al final de Rounds 1-2 clasifican para el Road to MSI — quedan tres semanas para asegurarse esos puestos.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Avance Semana 7: HLE vs DK el Viernes 15 de Mayo' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'La Semana 7 comienza el miércoles 13 de mayo con T1 vs Nongshim RedForce y DNS vs Dplus KIA. El 14 de mayo, BRION se enfrenta a Gen.G mientras FearX busca un nuevo upset ante KT Rolster. El viernes 15 de mayo llega el choque estelar de la semana: HLE vs Dplus KIA — un duelo de alto voltaje entre el líder indiscutible y un equipo que busca la redención.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'La carrera al Road to MSI entra en su fase decisiva. Con HLE prácticamente garantizado el primer seed, las batallas reales son por los puestos del 2 al 6. FearX y BRION, las sorpresas de la Semana 6, podrían aún agitar la clasificación final.',
          },
        ],
      },
    ],
  },
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const article of articles) {
    const existing = await payload.find({
      collection: 'news',
      where: { slug: { equals: article.slug } },
    })
    if (existing.docs.length > 0) {
      console.log(`  → "${article.title}" déjà présent, skip.`)
      continue
    }
    await payload.create({ collection: 'news', data: article as any })
    console.log(`  ✅ ${article.locale.toUpperCase()} — ${article.title}`)
  }
  console.log('✅ Migration 033 terminée')
}
