import type { MigrationModule } from './runner'

export const id = '227-worlds-swiss-day6-tes-blg-fr'
export const description = 'Worlds 2026: Top Esports qualifie pour les quarts malgré BLG (29 oct) - 5 langues'

export const up: MigrationModule['up'] = async (payload) => {
  const newsItems = [
    {
      locale: 'fr',
      slug: 'worlds-2026-swiss-day6-tes-blg-fr',
      title: 'Worlds 2026 : Top Esports qualifie pour les quarts en battant Bilibili Gaming 2-1',
      excerpt: 'TES reverse BLG malgré la stand-in top et 80% des prédictions contre eux. 3-1 record et quarterfinals assurés.',
      newsType: 'international',
      newsSubtype: 'resultats',
      category: 'esports',
      tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'Top Esports' }, { tag: 'Bilibili Gaming' }],
      sourceUrl: 'https://www.strafe.com/news/read/top-esports-stun-blg-to-reach-worlds-2026-playoffs-as-kc-stay-alive/',
      publishedAt: '2026-10-30T05:00:00Z',
      content: [
        {
          type: 'p',
          children: [
            { text: 'Top Esports a créé la surprise en battant Bilibili Gaming 2-1 jeudi 29 octobre, assurant directement sa qualification pour les quarterfinals avec un bilan de 3-1. BLG, favorite à 80%, se voit contrainte de jouer un match décisif samedi.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'L\'exploit de TES malgré les handicaps' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'Top Esports affrontait Bilibili Gaming sans son top laner titulaire. Cheng ZUIAN n\'a pas pu se déplacer aux États-Unis, obligeant TES à utiliser une stand-in. Malgré cet handicap, l\'équipe a réussi à renverser une paire de favoris recueillant 80% des prédictions sur Strafe.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'BLG face à l\'urgence' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'Bilibili Gaming, vice-champion de la LPL, a remporté leur récente rencontre face à TES lors de la Split 3 régionale, mais échoue à capitaliser à Worlds. BLG redescend à 2-2 et devra remporter leur dernier match samedi pour éviter l\'élimination.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Implications pour samedi' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'TES assure ses quartiers de finale. BLG doit battre son adversaire du dernier tour pour rester en lice avec un potentiel 3-2. Le final Swiss dimanche 31 octobre déterminera les trois équipes restantes à 3-2 qui complèteront le plateau des huit.' },
          ],
        },
      ],
    },
    {
      locale: 'en',
      slug: 'worlds-2026-swiss-day6-tes-blg-en',
      title: 'Worlds 2026: Top Esports Upsets Bilibili Gaming 2-1, Locks Quarterfinals',
      excerpt: 'TES shocks favored BLG despite missing starter top laner. With 80% predictions against them, TES clinches 3-1 and playoff seeding.',
      newsType: 'international',
      newsSubtype: 'resultats',
      category: 'esports',
      tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'Top Esports' }, { tag: 'Bilibili Gaming' }],
      sourceUrl: 'https://www.strafe.com/news/read/top-esports-stun-blg-to-reach-worlds-2026-playoffs-as-kc-stay-alive/',
      publishedAt: '2026-10-30T05:00:00Z',
      content: [
        {
          type: 'p',
          children: [
            { text: 'Top Esports pulled off a stunning 2-1 upset over Bilibili Gaming on Thursday, October 29, securing a 3-1 finish and an automatic quarterfinals spot. BLG, favored with 80% of predictions, drops to 2-2 and faces a must-win final match.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Overcoming the Stand-In Handicap' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'TES entered the series without their starting top laner, Cheng ZUIAN, who couldn\'t travel to the United States. This unexpected void made the upset even more impressive, as TES outplayed heavily favored BLG despite the roster disadvantage.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'BLG\'s Unexpected Struggle' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'The LPL runners-up came to Worlds as one of the tournament favorites after going 2-0 over TES in LPL Split 3. That dominance didn\'t translate to the international stage, leaving BLG at 2-2 with everything to lose in their next match.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Saturday Showdown' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'TES has secured their quarterfinals ticket. BLG must now win their final Swiss match to advance at 3-2. The conclusion of Swiss Stage on Saturday, October 31, will determine which three teams join TES in the playoffs.' },
          ],
        },
      ],
    },
    {
      locale: 'es',
      slug: 'worlds-2026-swiss-day6-tes-blg-es',
      title: 'Worlds 2026: Top Esports Sorprende a Bilibili Gaming 2-1 y Asegura Cuartos',
      excerpt: 'TES derrota a los favoritos BLG a pesar de su stand-in en top. Con 80% contra, TES cierra 3-1 y se va a quarts.',
      newsType: 'international',
      newsSubtype: 'resultats',
      category: 'esports',
      tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'Top Esports' }, { tag: 'Bilibili Gaming' }],
      sourceUrl: 'https://www.strafe.com/news/read/top-esports-stun-blg-to-reach-worlds-2026-playoffs-as-kc-stay-alive/',
      publishedAt: '2026-10-30T05:00:00Z',
      content: [
        {
          type: 'p',
          children: [
            { text: 'Top Esports logró una sorpresa épica al derrotar a Bilibili Gaming 2-1 el jueves 29 de octubre, asegurando un récord de 3-1 y un lugar directo en cuartos. BLG, favorita con 80% de predicciones, cae a 2-2 y debe ganar para continuar.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Superando la Stand-In' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'TES llegó a la serie sin su top laner titular, Cheng ZUIAN, quien no pudo viajar a EE.UU. A pesar de este obstáculo, TES derrumbó las probabilidades contra BLG, que venía de dominar 2-0 en la Split 3 de la LPL.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'BLG Bajo Presión' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'Los subcampeones de la LPL llegaban a Worlds como favoritos tras su dominio regional. Esta supremacía no se trasladó al escenario internacional, dejando a BLG en 2-2 y con una necesidad urgente de victoria.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Enfrentamientos del sábado' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'TES asegura su pase a cuartos. BLG deberá vencer en su próximo match para avanzar con 3-2. La conclusión de la Ronda Suiza el sábado 31 de octubre definirá qué tres equipos más acompañarán a TES.' },
          ],
        },
      ],
    },
    {
      locale: 'de',
      slug: 'worlds-2026-swiss-day6-tes-blg-de',
      title: 'Worlds 2026: Top Esports Überrascht Bilibili Gaming 2-1 und Sichert Quarterfinals',
      excerpt: 'TES besiegt favoritisiertes BLG trotz Stand-in Top. Mit 80% gegen sich, schließt TES 3-1 ab und sichert Quarterfinals.',
      newsType: 'international',
      newsSubtype: 'resultats',
      category: 'esports',
      tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'Top Esports' }, { tag: 'Bilibili Gaming' }],
      sourceUrl: 'https://www.strafe.com/news/read/top-esports-stun-blg-to-reach-worlds-2026-playoffs-as-kc-stay-alive/',
      publishedAt: '2026-10-30T05:00:00Z',
      content: [
        {
          type: 'p',
          children: [
            { text: 'Top Esports erzielte am Donnerstag, 29. Oktober, eine kleine Sensation durch einen 2-1-Sieg über Bilibili Gaming und sicherte sich mit einem 3-1-Rekord einen direkten Platz in den Viertelfinals. BLG, mit 80% der Vorhersagen favorisiert, rutscht auf 2-2 ab.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Die Stand-in-Überraschung' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'TES musste ohne ihren regulären Top Laner Cheng ZUIAN antreten, der nicht in die USA reisen konnte. Diese Belastung machte den Sieg noch beeindruckender. BLG kam mit einer 2-0 Bilanz aus der LPL Split 3 gegen TES, konnte diese Überlegenheit aber nicht nutzen.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'BLG unter Druck' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'Die LPL-Vizemeister kamen als Favoriten zu Worlds, diese Dominanz übertrug sich aber nicht auf die internationale Bühne. Mit 2-2 muss BLG gewinnen, um im Wettbewerb zu bleiben.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Was kommt als nächstes' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'TES hat die Viertelfinals gesichert. BLG muss am Samstag gewinnen. Das Ende der Swiss Stage am Samstag, 31. Oktober, wird bestimmen, welche drei Teams mit TES weiterziehen.' },
          ],
        },
      ],
    },
    {
      locale: 'it',
      slug: 'worlds-2026-swiss-day6-tes-blg-it',
      title: 'Worlds 2026: Top Esports Sorprende Bilibili Gaming 2-1 e Assicura Quarterfinals',
      excerpt: 'TES batte i favoriti BLG nonostante la stand-in top. Con l\'80% contro, TES chiude 3-1 e vola ai quarti.',
      newsType: 'international',
      newsSubtype: 'resultats',
      category: 'esports',
      tags: [{ tag: 'Worlds 2026' }, { tag: 'Swiss Stage' }, { tag: 'Top Esports' }, { tag: 'Bilibili Gaming' }],
      sourceUrl: 'https://www.strafe.com/news/read/top-esports-stun-blg-to-reach-worlds-2026-playoffs-as-kc-stay-alive/',
      publishedAt: '2026-10-30T05:00:00Z',
      content: [
        {
          type: 'p',
          children: [
            { text: 'Top Esports ha realizzato una sorpresa spettacolare battendo Bilibili Gaming 2-1 giovedì 29 ottobre, assicurandosi un record di 3-1 e un posto diretto ai quarti. BLG, favoriti con l\'80% delle previsioni, cade a 2-2 e deve vincere per proseguire.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Superare la Stand-in' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'TES si è presentato senza il suo top laner titolare Cheng ZUIAN, che non poteva viaggiare negli Stati Uniti. Nonostante questo svantaggio, TES ha rovesciato i pronostici contro BLG, che era stato 2-0 su di loro nella LPL Split 3.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'BLG Sotto Pressione' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'I vice-campioni della LPL arrivavano a Worlds come favoriti, ma questa supremazia non si è trasferita sulla scena internazionale. Con 2-2, BLG deve vincere per rimanere in gara.' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'Cosa viene dopo' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'TES assicura i quarti. BLG deve vincere sabato per avanzare. La conclusione della Swiss Stage sabato 31 ottobre determinerà quali tre squadre acompagneranno TES.' },
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
