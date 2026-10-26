import type { MigrationModule } from './runner'

export const id = '220-worlds-swiss-round3-jour1-et-correctifs'
export const description = 'Worlds 2026 Swiss Round 3 jour 1 (resultats) et correction des horaires de la preview 217'

const FIX: Record<string, { gen: string; dk: string; cal?: string; end: string }> = {
  fr: { gen: "Gen.G (LCK) affronte LYON (LCS #2) le dimanche 25 octobre à 13h PT (21h CET) en Bo3. Un choc entre deux régions sur un tableau 2-0 qui désignera un des deux premiers qualifiés.", dk: "Dplus KIA (LCK) affronte Movistar KOI (LEC #2) le même jour, à 12h PT (20h CET). DK vient de battre T1 sur une victoire de dernière minute, tandis que Movistar KOI avait déjà pris le meilleur sur Bilibili Gaming puis CTBC Flying Oyster. La victoire envoie droit aux quarts.", cal: "Dimanche 25 octobre : Hanwha Life vs Invictus Gaming (10h PT / 18h CET), G2 vs Top Esports (11h PT / 19h CET), Movistar KOI vs DK (12h PT / 20h CET), Gen.G vs LYON (13h PT / 21h CET). Lundi 26 octobre : CTBC Flying Oyster vs T1 (10h PT / 18h CET), Bilibili Gaming vs Karmine Corp (11h PT / 19h CET), LOS vs Team Secret Whales (12h PT / 20h CET), Team Liquid vs Anyone's Legend (13h PT / 21h CET). À suivre en direct sur lolesports.com.", end: "Les horaires de cet article ont été vérifiés après publication et corrigés : le calendrier d'origine comportait des décalages d'heure." },
  en: { gen: "Gen.G (LCK) takes on LYON (LCS #2) on Sunday, October 25 at 1 PM PT (9 PM CET) in a best-of-three. A clash of regions with both teams at 2-0, and one of the first two qualifiers will come out of it.", dk: "Dplus KIA (LCK) faces Movistar KOI (LEC #2) the same day at 12 PM PT (8 PM CET). DK just beat T1 with a last-minute win, while Movistar KOI had already got the better of Bilibili Gaming and then CTBC Flying Oyster. The winner goes straight to the Quarterfinals.",  end: "The times in this article were checked after publication and corrected: the original schedule had some hour offsets." },
  es: { gen: "Gen.G (LCK) se enfrenta a LYON (LCS #2) el domingo 25 de octubre a las 13:00 PT (21:00 CET) al mejor de 3. Un choque entre regiones con ambos equipos a 2-0, de donde saldrá uno de los dos primeros clasificados.", dk: "Dplus KIA (LCK) se enfrenta a Movistar KOI (LEC #2) el mismo día a las 12:00 PT (20:00 CET). DK acaba de ganar a T1 en un final agónico, mientras que Movistar KOI ya había superado a Bilibili Gaming y después a CTBC Flying Oyster. El ganador pasa directo a cuartos.",  end: "Los horarios de este artículo se comprobaron tras la publicación y se corrigieron: el calendario original tenía desfases de hora." },
  de: { gen: "Gen.G (LCK) trifft am Sonntag, 25. Oktober, um 13 Uhr PT (21 Uhr CET) im Best-of-Three auf LYON (LCS #2). Ein Duell zwischen Regionen, beide Teams stehen bei 2-0, und einer der ersten beiden Qualifikanten kommt daraus hervor.", dk: "Dplus KIA (LCK) trifft am selben Tag um 12 Uhr PT (20 Uhr CET) auf Movistar KOI (LEC #2). DK hat gerade T1 mit einem Last-Minute-Sieg geschlagen, Movistar KOI hatte zuvor Bilibili Gaming und dann CTBC Flying Oyster besiegt. Der Gewinner zieht direkt ins Viertelfinale ein.",  end: "Die Uhrzeiten in diesem Artikel wurden nach der Veröffentlichung geprüft und korrigiert: Der ursprüngliche Spielplan enthielt Zeitverschiebungen." },
  it: { gen: "Gen.G (LCK) affronta LYON (LCS #2) domenica 25 ottobre alle 13:00 PT (21:00 CET) al meglio delle 3. Uno scontro tra regioni con entrambe le squadre sul 2-0: da qui uscirà uno dei primi due qualificati.", dk: "Dplus KIA (LCK) affronta Movistar KOI (LEC #2) lo stesso giorno alle 12:00 PT (20:00 CET). DK ha appena battuto T1 con una vittoria all'ultimo, mentre Movistar KOI aveva già avuto la meglio su Bilibili Gaming e poi su CTBC Flying Oyster. Il vincitore va dritto ai quarti.",  end: "Gli orari di questo articolo sono stati controllati dopo la pubblicazione e corretti: il calendario originale aveva sfasamenti di orario." },
}

const RECAP: any[] = [
  { locale: "fr", slug: "worlds-2026-swiss-round3-jour1-resultats-fr", title: "Worlds 2026 : DK et Gen.G qualifiés pour les quarts après le Round 3", excerpt: "Dplus KIA bat Movistar KOI 2-0 et Gen.G s'impose 2-1 face à LYON : les deux premiers qualifiés des Worlds 2026 sont coréens. IG et TES gagnent leur Bo1.", newsType: 'international', newsSubtype: 'resultats', category: 'esports', tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'Dplus KIA' }, { tag: 'Gen.G' }, { tag: 'LYON' }, { tag: 'Movistar KOI' }], sourceUrl: 'https://www.strafe.com/news/read/worlds-2026-swiss-stage-day-3-ig-upsets-hle-as-first-teams-reach-playoffs/', content: [
    { type: "p", children: [{ text: "Le premier jour du Round 3 du Swiss Stage des Worlds 2026, dimanche 25 octobre, a livré les deux premiers qualifiés pour les quarts de finale : Dplus KIA et Gen.G, tous deux à 3-0." }] },
    { type: "h2", children: [{ text: "DK balaie Movistar KOI" }] },
    { type: "p", children: [{ text: "Dplus KIA s'impose 2-0 face à Movistar KOI. Dans la première manche, Smash signe sur Kai'Sa le premier pentakill du tournoi. Dans la deuxième, ShowMaker sort son Syndra et termine à 9/0/2. DK, quatrième seed de la LCK, rejoint les quarts de finale pour la première fois depuis 2022. Movistar KOI passe à 2-1." }] },
    { type: "h2", children: [{ text: "Gen.G renverse LYON" }] },
    { type: "p", children: [{ text: "Gen.G perd la première manche contre LYON, puis gagne les deux suivantes (2-1) et termine le Swiss à 3-0. LYON passe à 2-1 et garde sa chance." }] },
    { type: "h2", children: [{ text: "Les deux Bo1 à 1-1" }] },
    { type: "p", children: [{ text: "Invictus Gaming bat Hanwha Life Esports et passe à 2-1. Top Esports domine G2 Esports et passe aussi à 2-1. Hanwha Life et G2 tombent à 1-2 et devront gagner leur prochaine série pour éviter l'élimination." }] },
    { type: "h2", children: [{ text: "Lundi 26 octobre" }] },
    { type: "p", children: [{ text: "Les séries d'élimination opposent LOS à Team Secret Whales et Team Liquid à Anyone's Legend, les perdants quittant les Worlds." }] }
  ] },
  { locale: "en", slug: "worlds-2026-swiss-round3-day1-results-en", title: "Worlds 2026: DK and Gen.G Qualify for the Quarterfinals After Round 3", excerpt: "Dplus KIA sweeps Movistar KOI 2-0 and Gen.G beats LYON 2-1: the first two Worlds 2026 qualifiers are both Korean. IG and TES win their Bo1s.", newsType: 'international', newsSubtype: 'resultats', category: 'esports', tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'Dplus KIA' }, { tag: 'Gen.G' }, { tag: 'LYON' }, { tag: 'Movistar KOI' }], sourceUrl: 'https://www.strafe.com/news/read/worlds-2026-swiss-stage-day-3-ig-upsets-hle-as-first-teams-reach-playoffs/', content: [
    { type: "p", children: [{ text: "Day 1 of Round 3 of the Worlds 2026 Swiss Stage, on Sunday, October 25, produced the first two Quarterfinal qualifiers: Dplus KIA and Gen.G, both at 3-0." }] },
    { type: "h2", children: [{ text: "DK sweeps Movistar KOI" }] },
    { type: "p", children: [{ text: "Dplus KIA won 2-0 against Movistar KOI. In game 1, Smash got the first pentakill of the tournament on Kai'Sa. In game 2, ShowMaker brought out his signature Syndra and finished 9/0/2. DK, the LCK's fourth seed, reaches the Quarterfinals for the first time since 2022. Movistar KOI drops to 2-1." }] },
    { type: "h2", children: [{ text: "Gen.G comes back against LYON" }] },
    { type: "p", children: [{ text: "Gen.G lost game 1 to LYON, then won the next two (2-1) to finish the Swiss Stage at 3-0. LYON drops to 2-1 and stays in contention." }] },
    { type: "h2", children: [{ text: "The two 1-1 Bo1s" }] },
    { type: "p", children: [{ text: "Invictus Gaming beat Hanwha Life Esports to move to 2-1. Top Esports dominated G2 Esports and also moved to 2-1. Hanwha Life and G2 fall to 1-2 and must win their next series to avoid elimination." }] },
    { type: "h2", children: [{ text: "Monday, October 26" }] },
    { type: "p", children: [{ text: "The elimination series pit LOS against Team Secret Whales and Team Liquid against Anyone's Legend, with the losers leaving Worlds." }] }
  ] },
  { locale: "es", slug: "worlds-2026-swiss-round3-dia1-resultados-es", title: "Worlds 2026: DK y Gen.G se clasifican para cuartos tras la Ronda 3", excerpt: "Dplus KIA barre a Movistar KOI 2-0 y Gen.G gana 2-1 a LYON: los dos primeros clasificados de Worlds 2026 son coreanos. IG y TES ganan sus Bo1.", newsType: 'international', newsSubtype: 'resultats', category: 'esports', tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'Dplus KIA' }, { tag: 'Gen.G' }, { tag: 'LYON' }, { tag: 'Movistar KOI' }], sourceUrl: 'https://www.strafe.com/news/read/worlds-2026-swiss-stage-day-3-ig-upsets-hle-as-first-teams-reach-playoffs/', content: [
    { type: "p", children: [{ text: "El primer día de la Ronda 3 del Swiss Stage de Worlds 2026, el domingo 25 de octubre, dejó los dos primeros clasificados para cuartos de final: Dplus KIA y Gen.G, ambos con 3-0." }] },
    { type: "h2", children: [{ text: "DK arrasa a Movistar KOI" }] },
    { type: "p", children: [{ text: "Dplus KIA ganó 2-0 a Movistar KOI. En la primera partida, Smash logró con Kai'Sa el primer pentakill del torneo. En la segunda, ShowMaker sacó su Syndra y terminó 9/0/2. DK, cuarto cabeza de serie de la LCK, llega a cuartos por primera vez desde 2022. Movistar KOI baja a 2-1." }] },
    { type: "h2", children: [{ text: "Gen.G remonta a LYON" }] },
    { type: "p", children: [{ text: "Gen.G perdió la primera partida ante LYON y ganó las dos siguientes (2-1) para cerrar el Swiss con 3-0. LYON baja a 2-1 y sigue con opciones." }] },
    { type: "h2", children: [{ text: "Los dos Bo1 de 1-1" }] },
    { type: "p", children: [{ text: "Invictus Gaming venció a Hanwha Life Esports y pasó a 2-1. Top Esports dominó a G2 Esports y también pasó a 2-1. Hanwha Life y G2 caen a 1-2 y deberán ganar su próxima serie para evitar la eliminación." }] },
    { type: "h2", children: [{ text: "Lunes 26 de octubre" }] },
    { type: "p", children: [{ text: "Las series de eliminación enfrentan a LOS con Team Secret Whales y a Team Liquid con Anyone's Legend; los perdedores salen de Worlds." }] }
  ] },
  { locale: "de", slug: "worlds-2026-swiss-round3-tag1-ergebnisse-de", title: "Worlds 2026: DK und Gen.G stehen nach Runde 3 im Viertelfinale", excerpt: "Dplus KIA schlägt Movistar KOI 2-0 und Gen.G gewinnt 2-1 gegen LYON: Die ersten beiden Qualifikanten der Worlds 2026 sind Koreaner. IG und TES gewinnen ihre Bo1.", newsType: 'international', newsSubtype: 'resultats', category: 'esports', tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'Dplus KIA' }, { tag: 'Gen.G' }, { tag: 'LYON' }, { tag: 'Movistar KOI' }], sourceUrl: 'https://www.strafe.com/news/read/worlds-2026-swiss-stage-day-3-ig-upsets-hle-as-first-teams-reach-playoffs/', content: [
    { type: "p", children: [{ text: "Der erste Tag der Runde 3 im Swiss Stage der Worlds 2026 am Sonntag, 25. Oktober, brachte die ersten beiden Viertelfinalisten: Dplus KIA und Gen.G, beide bei 3-0." }] },
    { type: "h2", children: [{ text: "DK fegt Movistar KOI weg" }] },
    { type: "p", children: [{ text: "Dplus KIA gewann 2-0 gegen Movistar KOI. In Spiel 1 gelang Smash mit Kai'Sa der erste Pentakill des Turniers. In Spiel 2 packte ShowMaker seinen Syndra aus und beendete es mit 9/0/2. DK, vierter Seed der LCK, steht erstmals seit 2022 im Viertelfinale. Movistar KOI fällt auf 2-1." }] },
    { type: "h2", children: [{ text: "Gen.G dreht gegen LYON" }] },
    { type: "p", children: [{ text: "Gen.G verlor Spiel 1 gegen LYON, gewann dann die nächsten beiden (2-1) und beendete den Swiss Stage bei 3-0. LYON fällt auf 2-1 und bleibt im Rennen." }] },
    { type: "h2", children: [{ text: "Die beiden Bo1 bei 1-1" }] },
    { type: "p", children: [{ text: "Invictus Gaming schlug Hanwha Life Esports und steht bei 2-1. Top Esports dominierte G2 Esports und steht ebenfalls bei 2-1. Hanwha Life und G2 fallen auf 1-2 und müssen ihre nächste Serie gewinnen, um nicht auszuscheiden." }] },
    { type: "h2", children: [{ text: "Montag, 26. Oktober" }] },
    { type: "p", children: [{ text: "In den Ausscheidungsserien treffen LOS auf Team Secret Whales und Team Liquid auf Anyone's Legend; die Verlierer verlassen die Worlds." }] }
  ] },
  { locale: "it", slug: "worlds-2026-swiss-round3-giorno1-risultati-it", title: "Worlds 2026: DK e Gen.G ai quarti dopo il Round 3", excerpt: "Dplus KIA batte Movistar KOI 2-0 e Gen.G supera LYON 2-1: i primi due qualificati dei Worlds 2026 sono coreani. IG e TES vincono i loro Bo1.", newsType: 'international', newsSubtype: 'resultats', category: 'esports', tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'Dplus KIA' }, { tag: 'Gen.G' }, { tag: 'LYON' }, { tag: 'Movistar KOI' }], sourceUrl: 'https://www.strafe.com/news/read/worlds-2026-swiss-stage-day-3-ig-upsets-hle-as-first-teams-reach-playoffs/', content: [
    { type: "p", children: [{ text: "Il primo giorno del Round 3 dello Swiss Stage dei Worlds 2026, domenica 25 ottobre, ha portato i primi due qualificati ai quarti di finale: Dplus KIA e Gen.G, entrambe sul 3-0." }] },
    { type: "h2", children: [{ text: "DK spazza via Movistar KOI" }] },
    { type: "p", children: [{ text: "Dplus KIA ha vinto 2-0 contro Movistar KOI. In gara 1 Smash ha realizzato con Kai'Sa il primo pentakill del torneo. In gara 2 ShowMaker ha tirato fuori il suo Syndra chiudendo 9/0/2. DK, quarta testa di serie della LCK, torna ai quarti per la prima volta dal 2022. Movistar KOI scende al 2-1." }] },
    { type: "h2", children: [{ text: "Gen.G rimonta LYON" }] },
    { type: "p", children: [{ text: "Gen.G ha perso gara 1 contro LYON, poi ha vinto le due successive (2-1) chiudendo lo Swiss sul 3-0. LYON scende al 2-1 e resta in corsa." }] },
    { type: "h2", children: [{ text: "I due Bo1 sull'1-1" }] },
    { type: "p", children: [{ text: "Invictus Gaming ha battuto Hanwha Life Esports ed è salita al 2-1. Top Esports ha dominato G2 Esports ed è anch'essa al 2-1. Hanwha Life e G2 scendono all'1-2 e dovranno vincere la prossima serie per non essere eliminate." }] },
    { type: "h2", children: [{ text: "Lunedì 26 ottobre" }] },
    { type: "p", children: [{ text: "Le serie di eliminazione vedono LOS contro Team Secret Whales e Team Liquid contro Anyone's Legend; chi perde lascia i Worlds." }] }
  ] },
]

const flat = (n: any): string => (typeof n.text === 'string' ? n.text : (n.children || []).map(flat).join(''))

export const up: MigrationModule['up'] = async (payload) => {
  // 1) corriger les horaires de la preview 217
  for (const loc of Object.keys(FIX)) {
    const slug = `worlds-2026-swiss-round3-preview-${loc}`
    const ex = await payload.find({ collection: 'news', where: { slug: { equals: slug } }, limit: 1 })
    if (!ex.docs.length) { console.log(`absent ${slug}`); continue }
    const f = FIX[loc]
    const content: any[] = ((ex.docs[0] as any).content || []).map((n: any) => {
      const t = flat(n)
      if (n.type !== 'p') return n
      if (/LYON/.test(t) && /Gen\.G/.test(t) && !/Hanwha/.test(t) && !/Calend|Schedule|Calendario|Spielplan/.test(t) && t.length < 600 && /(9h du matin|9 AM PT|9 AM PT|9 Uhr|9 AM)/.test(t)) return { type: 'p', children: [{ text: f.gen }] }
      if (/Dplus KIA/.test(t) && /Movistar KOI/.test(t) && !/Hanwha/.test(t) && t.length < 600 && /(14h PT|1 PM PT|13 Uhr PT|13 PM PT)/.test(t)) return { type: 'p', children: [{ text: f.dk }] }
      if (f.cal && /Hanwha Life vs Invictus/.test(t) && /13h PT/.test(t)) return { type: 'p', children: [{ text: f.cal }] }
      if (/Elder Dragon|Dragón Anciano|Dragone Anziano/.test(t)) return { type: 'p', children: [{ text: f.dk }] }
      if (loc === 'en' && t.includes('Hanwha Life vs Invictus Gaming (10 AM PT / 1 PM CT')) return { type: 'p', children: [{ text: t.replace('Hanwha Life vs Invictus Gaming (10 AM PT / 1 PM CT', 'Hanwha Life vs Invictus Gaming (10 AM PT / 12 PM CT') }] }
      return n
    })
    // derniere phrase "attends dimanche" remplacee par la note de verification
    const last = content.length - 1
    if (/dimanche|Tune in Sunday|domingo|Sonntag|domenica/.test(flat(content[last]))) content[last] = { type: 'p', children: [{ text: f.end }] }
    else content.push({ type: 'p', children: [{ text: f.end }] })
    await payload.update({ collection: 'news', id: (ex.docs[0] as any).id, data: { content } })
    console.log(`preview corrigee ${slug}`)
  }

  // 2) resultats du jour 1 du Round 3
  for (const n of RECAP) {
    const ex = await payload.find({ collection: 'news', where: { slug: { equals: n.slug } }, limit: 1 })
    if (ex.docs.length) { console.log(`skip ${n.slug}`); continue }
    await payload.create({ collection: 'news', data: { ...n, status: 'published', publishedAt: new Date('2026-10-26T09:00:00Z') } })
    console.log(`news ${n.slug}`)
  }
}
