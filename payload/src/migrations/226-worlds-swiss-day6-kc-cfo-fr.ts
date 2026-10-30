import type { MigrationModule } from './runner'

export const id = '226-worlds-swiss-day6-kc-cfo-fr'
export const description = 'Worlds 2026: Karmine Corp élimine CTBC Flying Oyster (29 oct) - 5 langues'

export const up: MigrationModule['up'] = async (payload) => {
  const newsItems = [
    {
      locale: 'fr',
      slug: 'worlds-2026-swiss-day6-kc-cfo-fr',
      title: 'Worlds 2026 : Karmine Corp balaie CTBC Flying Oyster 2-0',
      excerpt: 'KC élimine CFO avec une victoire de 27 minutes et maintient ses espoirs pour les quarts. Victoire dominante malgré les pauses techniques.',
      newsType: 'international',
      newsSubtype: 'resultats',
      category: 'esports',
      tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'Karmine Corp' }, { tag: 'CTBC Flying Oyster' }],
      sourceUrl: 'https://www.strafe.com/news/read/top-esports-stun-blg-to-reach-worlds-2026-playoffs-as-kc-stay-alive/',
      publishedAt: '2026-10-30T05:00:00Z',
      content: [
        {
          type: 'p',
          children: [
            { text: 'Karmine Corp a écrasé CTBC Flying Oyster 2-0 jeudi 29 octobre lors de la Ronde 4 des Worlds 2026. KC maintient ses espoirs de qualification avec un bilan de 2-2, tandis que CFO est éliminée du tournoi.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Victoire écrasante en Game 1' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'Le premier match a été une démonstration pure. KC a remporté la victoire en seulement 27 minutes et 35 secondes, avec un score de 19-3 en éliminations. Aucune résistance possible pour CFO face à une équipe en total contrôle du jeu.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Game 2 : Retour et problèmes techniques' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'Le deuxième match a été plus chaotique, marqué par plusieurs pauses techniques et un retour spectaculaire de KC après un début difficile. Malgré les interruptions, KC a finalement scellé sa victoire et son élimination de CFO.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Implications pour la suite' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'Avec ce succès, KC ramène son bilan à 2-2 et reste en course pour les quarts de finale. CFO, éliminée avec un 1-3, quitte le tournoi. Le dernier match de la Ronde 4 décisif pour les deux équipes survenues se jouera samedi 31 octobre.' },
          ],
        },
      ],
    },
    {
      locale: 'en',
      slug: 'worlds-2026-swiss-day6-kc-cfo-en',
      title: 'Worlds 2026: Karmine Corp Sweeps CTBC Flying Oyster 2-0',
      excerpt: 'KC eliminates CFO with a dominant 27-minute stomp in Game 1. KC stays alive at 2-2 heading into the final Swiss round.',
      newsType: 'international',
      newsSubtype: 'resultats',
      category: 'esports',
      tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'Karmine Corp' }, { tag: 'CTBC Flying Oyster' }],
      sourceUrl: 'https://www.strafe.com/news/read/top-esports-stun-blg-to-reach-worlds-2026-playoffs-as-kc-stay-alive/',
      publishedAt: '2026-10-30T05:00:00Z',
      content: [
        {
          type: 'p',
          children: [
            { text: 'Karmine Corp dominated CTBC Flying Oyster 2-0 on Thursday, October 29, in Round 4 of Worlds 2026. KC improves to 2-2 and keeps its playoff dreams alive, while CFO is eliminated from the tournament.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Crushing Game 1 Display' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'The first game was a complete showcase of superiority. KC secured victory in just 27 minutes and 35 seconds with a 19-3 kill score. CFO had no answer against an opponent firing on all cylinders.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Game 2: Technical Delays and Clutch Comeback' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'The second match proved more turbulent, with multiple technical pauses interrupting flow and CFO mounting a comeback attempt. KC eventually pulled through despite the obstacles, closing out the series decisively.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'What\'s Next?' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'This victory puts KC at 2-2, keeping them in contention for the quarterfinals. CFO exits at 1-3. The final Swiss round on Saturday, October 31, will determine which teams lock in their playoff spots.' },
          ],
        },
      ],
    },
    {
      locale: 'es',
      slug: 'worlds-2026-swiss-day6-kc-cfo-es',
      title: 'Worlds 2026: Karmine Corp Arrasa CTBC Flying Oyster 2-0',
      excerpt: 'KC elimina a CFO con una victoria dominante en 27 minutos en el Game 1. KC sigue viva con 2-2 de cara a la ronda final.',
      newsType: 'international',
      newsSubtype: 'resultats',
      category: 'esports',
      tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'Karmine Corp' }, { tag: 'CTBC Flying Oyster' }],
      sourceUrl: 'https://www.strafe.com/news/read/top-esports-stun-blg-to-reach-worlds-2026-playoffs-as-kc-stay-alive/',
      publishedAt: '2026-10-30T05:00:00Z',
      content: [
        {
          type: 'p',
          children: [
            { text: 'Karmine Corp dominó a CTBC Flying Oyster 2-0 el jueves 29 de octubre en la Ronda 4 de Worlds 2026. KC llega a 2-2 y mantiene viva su lucha por los cuartos, mientras CFO es eliminada del torneo.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Game 1 Demoledor' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'El primer juego fue una demostración de superioridad pura. KC cerró la victoria en apenas 27 minutos y 35 segundos con un marcador de 19-3 en kills. CFO no tuvo respuesta ante un rival desatado.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Game 2: Caos técnico y remontada' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'El segundo enfrentamiento fue más caótico, con múltiples pausas técnicas e intentos de comeback de CFO. KC finalmente se impuso, sellando la serie y eliminando a su rival.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Qué viene ahora' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'Con esta victoria, KC mejora a 2-2 manteniéndose en la pelea por cuartos. CFO se va con 1-3. La ronda final del sábado 31 de octubre decidirá qué equipos aseguran su lugar en el knockout.' },
          ],
        },
      ],
    },
    {
      locale: 'de',
      slug: 'worlds-2026-swiss-day6-kc-cfo-de',
      title: 'Worlds 2026: Karmine Corp Fegt CTBC Flying Oyster 2-0 Weg',
      excerpt: 'KC schmeißt CFO mit dominanter Leistung raus. Nur 27 Minuten bis zum Game 1 Sieg. KC bleibt mit 2-2 im Rennen.',
      newsType: 'international',
      newsSubtype: 'resultats',
      category: 'esports',
      tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'Karmine Corp' }, { tag: 'CTBC Flying Oyster' }],
      sourceUrl: 'https://www.strafe.com/news/read/top-esports-stun-blg-to-reach-worlds-2026-playoffs-as-kc-stay-alive/',
      publishedAt: '2026-10-30T05:00:00Z',
      content: [
        {
          type: 'p',
          children: [
            { text: 'Karmine Corp hat CTBC Flying Oyster am Donnerstag, den 29. Oktober, in der Runde 4 der Worlds 2026 dominant 2-0 besiegt. Mit dieser Niederlage scheidet CFO aus dem Turnier aus, während KC mit 2-2 noch die Hoffnung auf die Quarterfinals bewahrt.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Game 1: Totale Dominanz' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'Das erste Spiel war ein Meisterwerk der Überlegenheit. KC gewann in nur 27 Minuten und 35 Sekunden mit einer Kill-Bilanz von 19-3. CFO konnte gegen eine derart dominante Leistung nichts ausrichten.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Game 2: Technische Pausen und Nervenkitzel' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'Das zweite Match war turbulenter. Mehrere technische Pausen unterbrachen den Spielfluss, aber KC ließ sich nicht aus dem Konzept bringen und schließe die Serie ab.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Was kommt als Nächstes?' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'Mit dem Sieg klettert KC auf 2-2 und bleibt im Rennen um die Quarterfinals. CFO verlässt das Turnier mit 1-3. Die letzte Runde am Samstag, dem 31. Oktober, wird zeigen, wer die Quarterfinals erreicht.' },
          ],
        },
      ],
    },
    {
      locale: 'it',
      slug: 'worlds-2026-swiss-day6-kc-cfo-it',
      title: 'Worlds 2026: Karmine Corp Travolge CTBC Flying Oyster 2-0',
      excerpt: 'KC elimina CFO con una prestazione dominante. Game 1 finito in 27 minuti. KC rimane viva con 2-2.',
      newsType: 'international',
      newsSubtype: 'resultats',
      category: 'esports',
      tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'Karmine Corp' }, { tag: 'CTBC Flying Oyster' }],
      sourceUrl: 'https://www.strafe.com/news/read/top-esports-stun-blg-to-reach-worlds-2026-playoffs-as-kc-stay-alive/',
      publishedAt: '2026-10-30T05:00:00Z',
      content: [
        {
          type: 'p',
          children: [
            { text: 'Karmine Corp ha dominato CTBC Flying Oyster 2-0 giovedì 29 ottobre nel Round 4 dei Worlds 2026. KC sale a 2-2 e rimane in gioco per i quarti, mentre CFO viene eliminata dal torneo.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Game 1: Dominio Totale' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'Il primo match è stata una perfetta dimostrazione di superiorità. KC ha chiuso la vittoria in soli 27 minuti e 35 secondi con un kill score di 19-3. CFO non ha trovato alcuna risposta.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Game 2: Pause tecniche e rimonta' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'Il secondo incontro è stato più caotico, interrotto da pause tecniche e tentativi di comeback da parte di CFO. KC ha comunque prevalso, chiudendo la serie e mandando a casa CFO.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'E adesso?' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'Con questa vittoria KC migliora a 2-2 e rimane in corsa per i quarti. CFO esce con 1-3. L\'ultimo turno svizzero di sabato 31 ottobre determinerà quali squadre garantiranno il loro posto nei quarti.' },
          ],
        },
      ],
    },
  ]

  for (const item of newsItems) {
    const existing = await payload.find({ collection: 'news', where: { slug: { equals: item.slug } }, limit: 1 })
    if (existing.docs.length === 0) {
      await payload.create({ collection: 'news', data: { ...item, status: 'published' } })
    }
  }
}
