import type { MigrationModule } from './runner'

export const id = '051-other-lcs-spring-saison-reguliere-2026'
export const description = 'Autres Régions — LCS 2026 Spring : Cloud9 parfait 7-0, playoffs en double élimination dès le 23 mai'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-18T08:00:00.000Z'

const articles = [
  {
    title: 'LCS 2026 Spring : Cloud9 finit parfait 7-0, les playoffs débutent le 23 mai',
    slug: 'lcs-2026-spring-cloud9-parfait-7-0-playoffs-23-mai-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: 'Cloud9 a conclu la saison régulière de la LCS 2026 Spring avec un bilan historique de 7 victoires et 0 défaite. LYON (2e) et Team Liquid (3e) complètent le podium. Les playoffs en double élimination débutent le 23 mai à Los Angeles.',
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcs',
    tags: [{ tag: 'LoL' }, { tag: 'LCS' }, { tag: 'Cloud9' }, { tag: 'Esports' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [{ text: "La saison régulière de la LCS 2026 Spring s'est refermée le 17 mai avec un grand vainqueur incontesté : Cloud9. L'organisation californienne est la seule équipe à avoir traversé les sept semaines de compétition sans la moindre défaite, signant un bilan parfait de 7-0. Une performance qui propulse C9 en tête des têtes de série pour les playoffs, avec un statut de grand favori pour décrocher la couronne du printemps et une place au Mid-Season Invitational en Corée du Sud." }],
      },
      {
        type: 'h2',
        children: [{ text: 'Un sommet à deux qui tourne à la domination de C9' }],
      },
      {
        type: 'p',
        children: [{ text: "Pendant les cinq premières semaines, Cloud9 et Team Liquid marchaient de concert au sommet du classement avec des bilans identiques de 5-0. Mais les deux dernières semaines ont tout changé : TL a cédé deux séries consécutives, terminant à la 3e place avec 5 victoires et 2 défaites. LYON, finaliste du Lock-In, a tenu le cap avec 5-1 pour s'installer en 2e position malgré une défaite sur le fil contre FlyQuest lors du dernier jour (2-1 en faveur de FLY). Cloud9, de son côté, n'a jamais vacillé." }],
      },
      {
        type: 'h2',
        children: [{ text: 'Classement final et qualifications' }],
      },
      {
        type: 'p',
        children: [{ text: 'Les six équipes qualifiées pour les playoffs sont : Cloud9 (1er, 7-0), LYON (2e, 5-1), Team Liquid (3e, 5-2), FlyQuest (4e, 3-3), Sentinels (5e, 2-4) et Disguised (6e, 2-5). Shopify Rebellion (2-5) et Dignitas (0-6) sont éliminés, DIG terminant la saison sans avoir remporté le moindre match en Best-of-3.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Playoffs en double élimination dès le 23 mai' }],
      },
      {
        type: 'p',
        children: [{ text: "À partir du 23 mai, les six qualifiées s'affronteront dans un bracket en double élimination, entièrement joué en Best-of-5 avec la règle Fearless Draft (chaque champion ne peut être sélectionné qu'une seule fois par série). Les 1er, 2e, 3e et 4e seeds débutent en upper bracket ; les 5e et 6e seeds entrent directement en lower bracket. Les deux finalistes décrocheront leur billet pour le Mid-Season Invitational 2026 en Corée du Sud. La grande finale est prévue les 13 et 14 juin à la Mullett Arena de l'Arizona State University." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Cloud9 entre en playoffs sur une série de 7-0 — les trois premières têtes de série se retrouveront en upper bracket dès le 23 mai pour l'un des playoffs LCS les plus relevés depuis plusieurs saisons." }],
      },
    ],
  },
  {
    title: 'LCS 2026 Spring: Cloud9 finishes a perfect 7-0, playoffs begin May 23',
    slug: 'lcs-2026-spring-cloud9-perfect-7-0-playoffs-may-23-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: 'Cloud9 closed out the LCS 2026 Spring regular season with a perfect 7-0 record, the only undefeated team in North America. LYON (2nd) and Team Liquid (3rd) round out the top three. Double-elimination playoffs begin May 23 in Los Angeles.',
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcs',
    tags: [{ tag: 'LoL' }, { tag: 'LCS' }, { tag: 'Cloud9' }, { tag: 'Esports' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'The LCS 2026 Spring regular season came to a close on May 17, and one team stood alone at the top: Cloud9. The Los Angeles-based organization is the only team to have gone wire-to-wire without a single series loss, finishing at a perfect 7-0. C9 enters the playoffs as the undisputed top seed and the frontrunner to claim the Spring title and a spot at the Mid-Season Invitational in South Korea.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'From co-leaders to solo dominance' }],
      },
      {
        type: 'p',
        children: [{ text: 'Through the first five weeks, Cloud9 and Team Liquid were neck and neck at the top of the standings, both sitting at 5-0. But weeks six and seven told a different story: TL dropped two consecutive series to finish at 5-2, slipping to third seed. LYON, the Lock-In runner-up, held steady at 5-1 for second place despite a last-day 2-1 loss to FlyQuest. Cloud9, meanwhile, never blinked.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Final standings and playoff seedings' }],
      },
      {
        type: 'p',
        children: [{ text: 'The six teams heading to playoffs are: Cloud9 (1st seed, 7-0), LYON (2nd, 5-1), Team Liquid (3rd, 5-2), FlyQuest (4th, 3-3), Sentinels (5th, 2-4), and Disguised (6th, 2-5). Shopify Rebellion (2-5) and Dignitas (0-6) are eliminated, with DIG finishing the regular season without a single series win — a rough end to what was already a difficult split.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Double-elimination playoffs, Fearless Draft, and the MSI ticket' }],
      },
      {
        type: 'p',
        children: [{ text: 'Starting May 23, all six teams will compete in a double-elimination bracket made up entirely of best-of-five series, played under the Fearless Draft rule — meaning no champion can be selected twice in the same series. Seeds 1 through 4 start in the upper bracket; seeds 5 and 6 enter from the lower bracket. The top two finishers at the end of playoffs will earn their spot at MSI 2026 in South Korea. The Spring Finals are set for June 13-14 at the Mullett Arena at Arizona State University.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'Cloud9 walk into playoffs on a perfect 7-0 run — the three top seeds face off in the upper bracket starting May 23, setting the stage for what could be the most compelling LCS playoffs in years.' }],
      },
    ],
  },
  {
    title: 'LCS 2026 Spring: Cloud9 termina perfecto con 7-0, playoffs desde el 23 de mayo',
    slug: 'lcs-2026-spring-cloud9-perfecto-7-0-playoffs-23-mayo-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'autres-regions',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: 'Cloud9 cerró la fase regular de la LCS 2026 Spring con un historial perfecto de 7-0, siendo el único equipo invicto en Norteamérica. LYON (2º) y Team Liquid (3º) completan el podio. Los playoffs en doble eliminación arrancan el 23 de mayo en Los Ángeles.',
    sourceUrl: 'https://lolesports.com/en-US/leagues/lcs',
    tags: [{ tag: 'LoL' }, { tag: 'LCS' }, { tag: 'Cloud9' }, { tag: 'Esports' }, { tag: 'Playoffs' }],
    content: [
      {
        type: 'p',
        children: [{ text: 'La fase regular de la LCS 2026 Spring llegó a su fin el 17 de mayo, y un equipo se alzó como el dominador indiscutible: Cloud9. La organización de Los Ángeles es la única que completó las siete semanas de competición sin perder ni una sola serie, finalizando con un impecable 7-0. C9 entra en los playoffs como el primer cabeza de serie y el gran favorito para llevarse el título de primavera y un boleto para el Mid-Season Invitational en Corea del Sur.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'De la igualdad al dominio total de C9' }],
      },
      {
        type: 'p',
        children: [{ text: 'Durante las cinco primeras semanas, Cloud9 y Team Liquid marcharon en paralelo en lo alto de la clasificación, ambos con un registro de 5-0. Pero las dos últimas semanas lo cambiaron todo: TL perdió dos series consecutivas y terminó en tercer lugar con 5-2. LYON, finalista del Lock-In, se mantuvo firme con 5-1 para ocupar el segundo puesto, pese a una derrota por 2-1 ante FlyQuest en el último día. Cloud9, en cambio, nunca tembló.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Clasificación final y cabezas de serie' }],
      },
      {
        type: 'p',
        children: [{ text: 'Los seis equipos clasificados para los playoffs son: Cloud9 (1.º, 7-0), LYON (2.º, 5-1), Team Liquid (3.º, 5-2), FlyQuest (4.º, 3-3), Sentinels (5.º, 2-4) y Disguised (6.º, 2-5). Shopify Rebellion (2-5) y Dignitas (0-6) quedan eliminados; DIG termina la fase regular sin haber ganado ni un solo Bo3, lo que supone una temporada muy dura para el histórico equipo norteamericano.' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Playoffs en doble eliminación con Fearless Draft' }],
      },
      {
        type: 'p',
        children: [{ text: 'A partir del 23 de mayo, los seis clasificados se medirán en un bracket de doble eliminación, con todos los enfrentamientos al mejor de cinco partidas bajo la regla Fearless Draft, que impide repetir un campeón dentro de la misma serie. Los cabezas de serie del 1 al 4 entran por el bracket superior; los puestos 5 y 6 comienzan directamente desde el bracket inferior. Los dos finalistas conseguirán su plaza en el MSI 2026 en Corea del Sur. La gran final está programada para los días 13 y 14 de junio en la Mullett Arena de la Arizona State University.' }],
      },
      {
        type: 'blockquote',
        children: [{ text: 'Cloud9 llega a los playoffs con una racha de 7-0 y los tres primeros cabezas de serie se encuentran en el bracket superior desde el 23 de mayo — el LCS más competitivo de los últimos años está a punto de empezar.' }],
      },
    ],
  },
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const a of articles) {
    const ex = await payload.find({ collection: 'news', where: { slug: { equals: a.slug } } })
    if (ex.docs.length > 0) { console.log(`→ skip ${a.slug}`); continue }
    await payload.create({ collection: 'news', data: a as any })
    console.log(`✅ ${a.locale.toUpperCase()} — ${a.title}`)
  }
}
