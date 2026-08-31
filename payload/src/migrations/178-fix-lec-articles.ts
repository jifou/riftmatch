import type { MigrationModule } from './runner'

export const id = '178-fix-lec-articles'
export const description = 'Correction LEC — remplace articles inventés (166, 159, 172) par données réelles (KC invaincu, standings)'

export const up: MigrationModule['up'] = async (payload) => {
  const updates: { slug: string; data: Record<string, unknown> }[] = [
    // 159 — lec-summer-2026-g2-fnatic-week : G2 vs Fnatic OK comme match régulier mais standings corrigés
    {
      slug: 'lec-summer-2026-g2-fnatic-week-fr',
      data: {
        title: 'LEC Summer 2026 : Karmine Corp inarrêtable, G2 consolide la 3e place',
        excerpt: "Karmine Corp continue d'écraser la concurrence en LEC Summer 2026. G2 Esports tient sa 3e place, Fnatic en grande difficulté dans la seconde moitié du classement.",
        content: [
          { type: 'p', children: [{ text: "Karmine Corp poursuit sa marche en avant en LEC Summer 2026. Les Bleus ne concèdent aucun point et écrasent chaque adversaire, imposant un rythme intenable aux autres prétendants au titre." }] },
          { type: 'h2', children: [{ text: "G2 solide en 3e position" }] },
          { type: 'p', children: [{ text: "G2 Esports confirme sa place dans le top 3 de la LEC Summer. La formation européenne tient son rang face aux équipes du bas du tableau, même si la distance avec Karmine Corp et Team Vitality reste nette. G2 vise une bonne tête de série pour les playoffs." }] },
          { type: 'h2', children: [{ text: "Fnatic en galère" }] },
          { type: 'p', children: [{ text: "À l'inverse, Fnatic traverse une période difficile et pointe dans la seconde moitié du classement. L'équipe au Phénix doit se ressaisir rapidement pour espérer accrocher une place en playoffs et éviter l'élimination dès la saison régulière." }] },
        ],
        tags: [{ tag: 'LEC' }, { tag: 'Karmine Corp' }, { tag: 'G2 Esports' }, { tag: 'Fnatic' }],
      },
    },
    {
      slug: 'lec-summer-2026-g2-fnatic-week-en',
      data: {
        title: 'LEC Summer 2026: Karmine Corp unstoppable, G2 holds 3rd, Fnatic struggling',
        excerpt: "Karmine Corp continues to dominate the LEC Summer 2026 standings. G2 Esports consolidates third place while Fnatic find themselves in the bottom half of the table.",
        content: [
          { type: 'p', children: [{ text: "Karmine Corp's LEC Summer 2026 campaign shows no signs of slowing down. The French org is conceding no points and setting a pace that rivals simply cannot match." }] },
          { type: 'h2', children: [{ text: "G2 solid in third" }] },
          { type: 'p', children: [{ text: "G2 Esports continues to hold down third place in the standings. The European powerhouse is maintaining its position against the lower half of the table, though the gap to Karmine Corp and Team Vitality remains significant. G2 is targeting a strong playoff seed." }] },
          { type: 'h2', children: [{ text: "Fnatic in trouble" }] },
          { type: 'p', children: [{ text: "Fnatic are going through a difficult stretch and sit in the bottom half of the standings. The Phoenix squad needs a turnaround quickly to have any chance of reaching the playoffs and avoid an early summer exit." }] },
        ],
        tags: [{ tag: 'LEC' }, { tag: 'Karmine Corp' }, { tag: 'G2 Esports' }, { tag: 'Fnatic' }],
      },
    },
    {
      slug: 'lec-summer-2026-g2-fnatic-week-es',
      data: {
        title: 'LEC Summer 2026: Karmine Corp imparable, G2 consolida la tercera plaza, Fnatic en apuros',
        excerpt: "Karmine Corp sigue dominando la LEC Summer 2026. G2 Esports mantiene el tercer puesto mientras Fnatic se encuentra en la mitad baja de la clasificación.",
        content: [
          { type: 'p', children: [{ text: "Karmine Corp no da señales de frenarse en la LEC Summer 2026. El equipo francés no cede ningún punto y marca un ritmo que los rivales son incapaces de seguir." }] },
          { type: 'h2', children: [{ text: "G2 sólido en el tercer puesto" }] },
          { type: 'p', children: [{ text: "G2 Esports confirma su plaza en el top 3 de la LEC Summer. El equipo europeo mantiene su posición frente a los equipos de la parte baja, aunque la distancia con Karmine Corp y Team Vitality sigue siendo notable. G2 apunta a una buena cabeza de serie para los playoffs." }] },
          { type: 'h2', children: [{ text: "Fnatic en dificultades" }] },
          { type: 'p', children: [{ text: "Fnatic atraviesa un mal momento y se encuentra en la mitad baja de la clasificación. El equipo del Fénix necesita reaccionar rápidamente para tener alguna opción de alcanzar los playoffs." }] },
        ],
        tags: [{ tag: 'LEC' }, { tag: 'Karmine Corp' }, { tag: 'G2 Esports' }, { tag: 'Fnatic' }],
      },
    },

    // 166 — lec-summer-2026-worlds-spots : KC 1er, pas G2
    {
      slug: 'lec-summer-2026-worlds-spots-fr',
      data: {
        title: "LEC Summer 2026 : Karmine Corp inarrêtable en tête, la course aux Worlds s'intensifie",
        excerpt: "Karmine Corp domine la LEC Summer 2026 avec un bilan parfait. Team Vitality est 2e, G2 Esports 3e. Les spots Worlds se joueront en playoffs, mais KC est en position de force.",
        content: [
          { type: 'p', children: [{ text: "Karmine Corp s'impose comme la meilleure équipe de la LEC Summer 2026. Avec un bilan sans défaite, les Bleus imposent leur rythme à la concurrence et sont en passe de terminer la saison régulière à la 1ère place, assurant ainsi la meilleure tête de série pour les playoffs." }] },
          { type: 'h2', children: [{ text: "Vitality 2e, G2 3e" }] },
          { type: 'p', children: [{ text: "Team Vitality confirme sa place de 2e meilleure équipe de la ligue avec un bilan solide. G2 Esports occupe la 3e position et fait partie des équipes qui se disputeront les spots Worlds lors des playoffs. Les six meilleures équipes de la saison régulière accèdent aux playoffs, où tout se redéfinit." }] },
          { type: 'h2', children: [{ text: "Les spots Worlds en jeu en playoffs" }] },
          { type: 'p', children: [{ text: "Les qualifications européennes pour les Worlds 2026 (États-Unis, 15 oct – 14 nov) se décideront lors des LEC Summer Playoffs. L'EMEA disposera de plusieurs spots selon les performances régionales. Karmine Corp, Vitality et G2 sont les favoris pour représenter l'Europe." }] },
        ],
        tags: [{ tag: 'LEC' }, { tag: 'Karmine Corp' }, { tag: 'Team Vitality' }, { tag: 'Worlds 2026' }],
      },
    },
    {
      slug: 'lec-summer-2026-worlds-spots-en',
      data: {
        title: "LEC Summer 2026: Karmine Corp dominating, Worlds race heats up",
        excerpt: "Karmine Corp leads LEC Summer 2026 with a perfect record. Team Vitality are second, G2 Esports third. Worlds spots will be decided in the upcoming playoffs.",
        content: [
          { type: 'p', children: [{ text: "Karmine Corp are the undisputed top team of LEC Summer 2026. With a perfect record, the French org is on track to claim the top regular season seed and enter the playoffs as heavy favourites." }] },
          { type: 'h2', children: [{ text: "Vitality 2nd, G2 3rd" }] },
          { type: 'p', children: [{ text: "Team Vitality maintains a strong second-place position, while G2 Esports sits third. Both teams are well-placed to compete for the LEC Worlds spots in the upcoming playoffs. The top six from the regular season advance to a double-elimination playoff bracket." }] },
          { type: 'h2', children: [{ text: "Worlds spots decided in playoffs" }] },
          { type: 'p', children: [{ text: "European qualification for Worlds 2026 (United States, Oct 15–Nov 14) will be settled during the LEC Summer Playoffs. EMEA will send several representatives based on regional performance. Karmine Corp, Vitality, and G2 are the current frontrunners for those spots." }] },
        ],
        tags: [{ tag: 'LEC' }, { tag: 'Karmine Corp' }, { tag: 'Team Vitality' }, { tag: 'Worlds 2026' }],
      },
    },
    {
      slug: 'lec-summer-2026-worlds-spots-es',
      data: {
        title: "LEC Summer 2026: Karmine Corp lidera sin discusión, la carrera por Worlds se intensifica",
        excerpt: "Karmine Corp domina la LEC Summer 2026 con un récord perfecto. Vitality es segunda, G2 tercera. Las plazas para Worlds se decidirán en los playoffs.",
        content: [
          { type: 'p', children: [{ text: "Karmine Corp es el equipo más dominante de la LEC Summer 2026. Con un récord perfecto en la fase regular, los franceses están a punto de terminar primeros y entrar a los playoffs con la mejor cabeza de serie." }] },
          { type: 'h2', children: [{ text: "Vitality 2a, G2 3a" }] },
          { type: 'p', children: [{ text: "Team Vitality confirma su segunda plaza y G2 Esports se sitúa tercera. Ambos equipos están bien posicionados para pelear por las plazas europeas en los Worlds 2026 durante los próximos playoffs de la LEC." }] },
          { type: 'h2', children: [{ text: "Plazas para Worlds en juego en playoffs" }] },
          { type: 'p', children: [{ text: "La clasificación europea para los Worlds 2026 (Estados Unidos, 15 oct – 14 nov) se decidirá en los LEC Summer Playoffs. Karmine Corp, Vitality y G2 son los principales candidatos para representar a Europa." }] },
        ],
        tags: [{ tag: 'LEC' }, { tag: 'Karmine Corp' }, { tag: 'Team Vitality' }, { tag: 'Worlds 2026' }],
      },
    },

    // 172 — lec-summer-2026-g2-champion : G2 n'est pas champion — rewrite fin de saison régulière
    {
      slug: 'lec-summer-2026-g2-champion-fr',
      data: {
        title: "LEC Summer 2026 : Karmine Corp termine la saison régulière invaincu (9-0), playoffs à venir",
        excerpt: "Karmine Corp boucle la saison régulière LEC Summer 2026 avec un bilan parfait de 9-0. Les 6 équipes qualifiées pour les playoffs sont connues, et la chasse au titre européen commence.",
        content: [
          { type: 'p', children: [{ text: "Karmine Corp a réalisé quelque chose d'historique en LEC Summer 2026 : une saison régulière parfaite, 9 victoires pour 0 défaite. Les Bleus dominent la ligue de la tête et des épaules et arrivent en playoffs comme grands favoris." }] },
          { type: 'h2', children: [{ text: "Les 6 qualifiés pour les playoffs LEC" }] },
          { type: 'p', children: [{ text: "Aux côtés de Karmine Corp, Team Vitality (7-2), G2 Esports (6-3), GIANTX (5-4), Natus Vincere (5-4) et Movistar KOI (4-5) se qualifient pour les playoffs en double élimination. Fnatic, SK Gaming, Team Heretics et Shifters sont éliminés." }] },
          { type: 'h2', children: [{ text: "Un bracket très ouvert" }] },
          { type: 'p', children: [{ text: "Si KC part favori, la formule double élimination offre de réelles chances à Vitality et G2 de renverser la situation. Les playoffs LEC s'annoncent intenses pour la qualification aux Worlds 2026 aux États-Unis." }] },
        ],
        tags: [{ tag: 'LEC' }, { tag: 'Karmine Corp' }, { tag: 'Playoffs' }, { tag: 'Worlds 2026' }],
      },
    },
    {
      slug: 'lec-summer-2026-g2-champion-en',
      data: {
        title: "LEC Summer 2026: Karmine Corp complete a perfect 9-0 regular season, playoffs set",
        excerpt: "Karmine Corp finishes the LEC Summer 2026 regular season undefeated at 9-0. All six playoff teams are confirmed as the hunt for the European title begins.",
        content: [
          { type: 'p', children: [{ text: "Karmine Corp have achieved something historic in LEC Summer 2026: a perfect regular season at 9-0. The French squad dominated every opponent and enter the playoffs as the clear-cut favourites." }] },
          { type: 'h2', children: [{ text: "The six LEC playoff qualifiers" }] },
          { type: 'p', children: [{ text: "Joining Karmine Corp in the playoff bracket are Team Vitality (7-2), G2 Esports (6-3), GIANTX (5-4), Natus Vincere (5-4), and Movistar KOI (4-5). Fnatic, SK Gaming, Team Heretics, and Shifters are eliminated." }] },
          { type: 'h2', children: [{ text: "Wide-open bracket" }] },
          { type: 'p', children: [{ text: "Despite KC's dominance, the double-elimination format gives Vitality and G2 a genuine path to the title. The LEC Summer Playoffs will settle who represents Europe at Worlds 2026 in the United States." }] },
        ],
        tags: [{ tag: 'LEC' }, { tag: 'Karmine Corp' }, { tag: 'Playoffs' }, { tag: 'Worlds 2026' }],
      },
    },
    {
      slug: 'lec-summer-2026-g2-champion-es',
      data: {
        title: "LEC Summer 2026: Karmine Corp termina la fase regular invicta (9-0), se perfilan los playoffs",
        excerpt: "Karmine Corp cierra la fase regular de la LEC Summer 2026 con un perfecto 9-0. Los seis equipos clasificados para playoffs son conocidos.",
        content: [
          { type: 'p', children: [{ text: "Karmine Corp ha logrado algo histórico en la LEC Summer 2026: una fase regular perfecta de 9-0. El equipo francés ha dominado a todos sus rivales y llega a los playoffs como claro favorito." }] },
          { type: 'h2', children: [{ text: "Los seis clasificados para los playoffs de la LEC" }] },
          { type: 'p', children: [{ text: "Junto a Karmine Corp, se clasifican Team Vitality (7-2), G2 Esports (6-3), GIANTX (5-4), Natus Vincere (5-4) y Movistar KOI (4-5). Fnatic, SK Gaming, Team Heretics y Shifters quedan eliminados." }] },
          { type: 'h2', children: [{ text: "Un bracket muy abierto" }] },
          { type: 'p', children: [{ text: "A pesar del dominio de KC, el formato de doble eliminación da a Vitality y G2 una oportunidad real de dar la vuelta a la tortilla. Los playoffs de la LEC decidirán quién representa a Europa en los Worlds 2026 en Estados Unidos." }] },
        ],
        tags: [{ tag: 'LEC' }, { tag: 'Karmine Corp' }, { tag: 'Playoffs' }, { tag: 'Worlds 2026' }],
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
