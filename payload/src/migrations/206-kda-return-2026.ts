import type { MigrationModule } from './runner'

export const id = '206-kda-return-2026'

export const description = 'K/DA return announcement for October 20, 2026'

export const up: MigrationModule['up'] = async (payload) => {
  const slug = 'kda-return-october-2026'

  // Check if already exists
  const existing = await payload.find({
    collection: 'news',
    where: { slug: { equals: slug + '-fr' } },
    limit: 1,
  })

  if (existing.docs.length > 0) {
    console.log(`News ${slug}-fr already exists, skipping`)
    return
  }

  const baseData = {
    newsType: 'riot',
    newsSubtype: 'other',
    category: 'announcement',
    status: 'published',
    sourceUrl: 'https://insider-gaming.com/kda-long-awaited-return-october-20',
    tags: [
      { tag: 'K/DA' },
      { tag: 'Music' },
      { tag: 'Skins' },
      { tag: 'League of Legends' },
    ],
  }

  // French version
  await payload.create({
    collection: 'news',
    data: {
      ...baseData,
      locale: 'fr',
      slug: slug + '-fr',
      title: 'K/DA fait son grand retour le 20 octobre 2026',
      excerpt: 'Le groupe virtuel K/DA de League of Legends revient le 20 octobre avec une nouvelle chanson et les skins Firestarter. Une annonce musicale majeure 6 ans après ALL OUT.',
      publishedAt: '2026-10-15T05:00:00.000Z',
      content: [
        {
          type: 'p',
          children: [
            {
              text: 'K/DA, le groupe de K-pop virtuel de League of Legends, fait officiellement son grand retour le 20 octobre 2026. Six ans après son dernier EP ALL OUT, le groupe revient avec une nouvelle chanson et une collection de skins inspirees.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Une nouvelle musique et des visuels' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'La nouvelle chanson et son clip video seront devoiles le 20 octobre. Le contenu visuel sera produit par Fortiche Studios, le studio derriere les animations Arcane.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Les skins K/DA "Firestarter"' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Les skins K/DA Firestarter seront devoiles sur le PBE le 21 octobre lors du patch 26.21 et devraient sortir officiellement le 4 novembre avec le patch 26.22.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Le retour d\'Ahri, Akali, Evelynn et Kai\'Sa' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Comme lors de leurs precedentes apparitions, les quatre championnes K/DA seront representees : Ahri (Miyeon), Akali (Soyeon), Evelynn (Madison Beer) et Kai\'Sa (Jaira Burns).',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'A retenir' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Ce retour marque une renaissance pour la serie K/DA apres six ans de silence. Les fans de musique et de skins peuvent preparer leur portefeuille pour cette sortie musicale majeure de fin d\'annee. D\'ici la, trouve ton champion prefere avec le quiz RiftMatch.',
            },
          ],
        },
      ],
    },
  })

  // English version
  await payload.create({
    collection: 'news',
    data: {
      ...baseData,
      locale: 'en',
      slug: slug + '-en',
      title: 'K/DA Makes Highly Anticipated Return on October 20, 2026',
      excerpt: 'League of Legends virtual K-pop group K/DA officially returns on October 20 with a new song and Firestarter skins. A major music announcement six years after ALL OUT.',
      publishedAt: '2026-10-15T05:00:00.000Z',
      content: [
        {
          type: 'p',
          children: [
            {
              text: 'K/DA, League of Legends\' virtual K-pop group, officially makes its highly anticipated return on October 20, 2026. Six years after the ALL OUT EP, the group is coming back with a brand new song and an inspired skin collection.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'New Music and Visuals' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'The new song and music video will be revealed on October 20. The visual content will be produced by Fortiche Studios, the team behind Arcane animations.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'K/DA Firestarter Skins' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'The K/DA Firestarter skins will be unveiled on the PBE on October 21 during patch 26.21 and should release officially on November 4 with patch 26.22.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Ahri, Akali, Evelynn, and Kai\'Sa Return' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'As with previous K/DA appearances, the four champions will be represented: Ahri (Miyeon), Akali (Soyeon), Evelynn (Madison Beer), and Kai\'Sa (Jaira Burns).',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Key Takeaway' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'This return marks a renaissance for the K/DA series after six years of silence. Music fans and skin collectors can prepare for this major year-end music release. In the meantime, discover your main champion with the RiftMatch quiz.',
            },
          ],
        },
      ],
    },
  })

  // Spanish version
  await payload.create({
    collection: 'news',
    data: {
      ...baseData,
      locale: 'es',
      slug: slug + '-es',
      title: 'K/DA Anuncia su Esperado Regreso el 20 de Octubre de 2026',
      excerpt: 'El grupo virtual de K-pop de League of Legends, K/DA, regresa oficialmente el 20 de octubre con una nueva cancion y skins Firestarter. Un anuncio musical importante seis anos despues de ALL OUT.',
      publishedAt: '2026-10-15T05:00:00.000Z',
      content: [
        {
          type: 'p',
          children: [
            {
              text: 'K/DA, el grupo virtual de K-pop de League of Legends, anuncia oficialmente su esperado regreso el 20 de octubre de 2026. Seis anos despues del EP ALL OUT, el grupo vuelve con una nueva cancion y una coleccion de skins inspiradas.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Nueva Musica y Visuales' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'La nueva cancion y su videoclip se revelaran el 20 de octubre. El contenido visual sera producido por Fortiche Studios, el equipo detras de las animaciones de Arcane.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Skins K/DA Firestarter' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Los skins K/DA Firestarter se presentaran en el PBE el 21 de octubre durante el parche 26.21 y deberan lanzarse oficialmente el 4 de noviembre con el parche 26.22.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'El Regreso de Ahri, Akali, Evelynn y Kai\'Sa' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Como en apariciones anteriores de K/DA, las cuatro campeonas estaran representadas: Ahri (Miyeon), Akali (Soyeon), Evelynn (Madison Beer) y Kai\'Sa (Jaira Burns).',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Lo Esencial' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Este regreso marca un renacimiento para la serie K/DA despues de seis anos de silencio. Los aficionados a la musica y coleccionistas de skins pueden prepararse para este lanzamiento musical importante de fin de ano. Mientras tanto, descubre tu campeon principal con el quiz de RiftMatch.',
            },
          ],
        },
      ],
    },
  })

  // German version
  await payload.create({
    collection: 'news',
    data: {
      ...baseData,
      locale: 'de',
      slug: slug + '-de',
      title: 'K/DA kehrt am 20. Oktober 2026 zurück',
      excerpt: 'Die virtuelle K-Pop-Gruppe K/DA von League of Legends kehrt am 20. Oktober mit einem neuen Song und Firestarter-Skins zurück. Eine große Musikankündigung sechs Jahre nach ALL OUT.',
      publishedAt: '2026-10-15T05:00:00.000Z',
      content: [
        {
          type: 'p',
          children: [
            {
              text: 'K/DA, die virtuelle K-Pop-Gruppe von League of Legends, kehrt am 20. Oktober 2026 offiziell zurück. Sechs Jahre nach der EP ALL OUT kommt die Gruppe mit einem brandneuen Song und inspirierter Skin-Kollektion zurück.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Neue Musik und visuelle Effekte' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Der neue Song und das Musikvideo werden am 20. Oktober enthüllt. Die visuellen Inhalte werden von Fortiche Studios produziert, dem Team hinter den Arcane-Animationen.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'K/DA Firestarter Skins' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Die K/DA Firestarter Skins werden am 21. Oktober im PBE mit Patch 26.21 enthüllt und sollten am 4. November mit Patch 26.22 offiziell veröffentlicht werden.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Die Rückkehr von Ahri, Akali, Evelynn und Kai\'Sa' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Wie bei früheren K/DA-Auftritten werden die vier Champions vertreten sein: Ahri (Miyeon), Akali (Soyeon), Evelynn (Madison Beer) und Kai\'Sa (Jaira Burns).',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Das Wichtigste' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Dieses Comeback markiert eine Wiedergeburt der K/DA-Serie nach sechs Jahren Stille. Musikfans und Skin-Sammler können sich auf dieses große Musik-Release am Jahresende vorbereiten. Entdecke in der Zwischenzeit deinen Lieblings-Champion mit dem RiftMatch-Quiz.',
            },
          ],
        },
      ],
    },
  })

  // Italian version
  await payload.create({
    collection: 'news',
    data: {
      ...baseData,
      locale: 'it',
      slug: slug + '-it',
      title: 'K/DA ritorna il 20 ottobre 2026',
      excerpt: 'Il gruppo virtuale K-pop di League of Legends, K/DA, torna ufficialmente il 20 ottobre con una nuova canzone e i skin Firestarter. Un grande annuncio musicale sei anni dopo ALL OUT.',
      publishedAt: '2026-10-15T05:00:00.000Z',
      content: [
        {
          type: 'p',
          children: [
            {
              text: 'K/DA, il gruppo virtuale K-pop di League of Legends, torna ufficialmente il 20 ottobre 2026. Sei anni dopo l\'EP ALL OUT, il gruppo ritorna con una nuova canzone e una collezione di skin ispirati.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Nuova musica e visual' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'La nuova canzone e il videoclip saranno rivelati il 20 ottobre. I contenuti visivi saranno prodotti da Fortiche Studios, il team dietro le animazioni di Arcane.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Skin K/DA Firestarter' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'I skin K/DA Firestarter saranno presentati sul PBE il 21 ottobre durante la patch 26.21 e dovrebbero lanciati ufficialmente il 4 novembre con la patch 26.22.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Il ritorno di Ahri, Akali, Evelynn e Kai\'Sa' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Come negli apparizioni precedenti di K/DA, le quattro campionesse saranno rappresentate: Ahri (Miyeon), Akali (Soyeon), Evelynn (Madison Beer) e Kai\'Sa (Jaira Burns).',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Da ricordare' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Questo ritorno segna una rinascita per la serie K/DA dopo sei anni di silenzio. Gli appassionati di musica e i collezionisti di skin possono prepararsi per questo importante rilascio musicale di fine anno. Nel frattempo, scopri il tuo campione principale con il quiz di RiftMatch.',
            },
          ],
        },
      ],
    },
  })

  console.log(`K/DA return news created for all 5 locales`)
}
