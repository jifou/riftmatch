import type { MigrationModule } from './runner'

export const id = '079-international-ewc-2026-hle-lck-qualifier'
export const description = "International — EWC 2026 qualifier LCK : HLE qualifié 3-0 contre Dplus KIA, Corée au complet avec T1 et Gen.G à Paris (26 mai 2026)"

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-05-31T08:00:00.000Z'
const COVER = 'https://img.youtube.com/vi/Xb0fw-1fZ5A/maxresdefault.jpg'

const articles = [
  {
    title: "EWC 2026 : HLE qualifié après un 3-0 contre Dplus KIA, la Corée au complet avec T1 et Gen.G",
    slug: 'slug-intl-ewc-2026-hle-qualifier-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Le 26 mai, Hanwha Life Esports a écrasé Dplus KIA 3-0 dans la finale du bracket inférieur du qualifier LCK pour l'EWC 2026. HLE rejoint T1 et Gen.G pour former une délégation coréenne redoutable à Paris cet été.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Esports_World_Cup/2026/Korea',
    tags: [
      { tag: 'LoL' },
      { tag: 'Esports' },
      { tag: 'International' },
      { tag: 'HLE' },
      { tag: 'EWC 2026' },
      { tag: 'LCK' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Le 26 mai 2026, Hanwha Life Esports (HLE) a validé son billet pour l'Esports World Cup 2026 en dominant Dplus KIA 3-0 dans la grande finale du bracket inférieur du qualifier LCK. Un sweep autoritaire qui récompense un parcours de résilience remarquable depuis la chute initiale en lower bracket.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Un lower bracket run presque parfait" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "HLE avait mal débuté le qualifier en s'inclinant 1-2 face à Dplus KIA en upper bracket, se retrouvant dos au mur dès le début. Mais l'équipe coréenne n'a pas vacillé : HANJIN Brion, Nongshim RedForce, puis DK en finale ont tous subi la loi d'HLE sans la moindre série rendue. En remontant intégralement le bracket inférieur sans perdre une seule partie décisive, Zeka, Deft et leurs partenaires ont montré une forme de championnat.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "La revanche face à Dplus KIA" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La finale du lower bracket a été une véritable démonstration. HLE a infligi un sweep 3-0 à Dplus KIA, l'équipe qui les avait éliminés du upper bracket quelques jours plus tôt. DK ne trouvait pas de réponse face au style agressif d'HLE, notamment grâce à un Zeka impeccable sur toute la série. La revanche était totale, et Dplus KIA est éliminé du qualifier sans avoir décroché leur ticket pour Paris.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "La Corée du Sud envoie trois colosses à Paris" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "HLE rejoint ainsi T1 — qualifié dès le 25 mai avec un 3-1 contre DK en upper bracket final — et Gen.G, champion sortant de l'EWC 2025, directement invité. La Corée du Sud présentera donc un trio de choc à Paris pour le tournoi LoL de l'Esports World Cup 2026, prévu du 15 au 19 juillet à Paris Expo Porte de Versailles. Avec un prize pool de 2 millions de dollars et 16 équipes du monde entier, la compétition s'annonce explosive.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "T1, HLE et Gen.G réunis sous le même toit à Paris : la Corée du Sud va transformer l'EWC 2026 en démonstration de force.",
          },
        ],
      },
    ],
  },
  {
    title: "EWC 2026: HLE complete Korea's lineup with 3-0 sweep over Dplus KIA",
    slug: 'slug-intl-ewc-2026-hle-qualifier-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Hanwha Life Esports swept Dplus KIA 3-0 on May 26 to qualify for EWC 2026, joining T1 and Gen.G to form South Korea's powerhouse trio heading to Paris this summer.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Esports_World_Cup/2026/Korea',
    tags: [
      { tag: 'LoL' },
      { tag: 'Esports' },
      { tag: 'International' },
      { tag: 'HLE' },
      { tag: 'EWC 2026' },
      { tag: 'LCK' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Hanwha Life Esports secured South Korea's second qualifier slot at EWC 2026 on May 26, sweeping Dplus KIA 3-0 in the lower bracket final of the LCK qualifier. The commanding finish capped an impressive reverse run through the lower bracket after HLE had been dropped by the same DK side earlier in the tournament.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "A flawless lower bracket run" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "After losing 1-2 to Dplus KIA in the upper bracket, HLE swept through every opponent in the lower side without dropping a single series. HANJIN Brion, Nongshim RedForce, and finally Dplus KIA all fell to Hanwha Life's aggressive playstyle. Zeka was a standout performer throughout, dictating the pace across multiple champion picks and denying DK any opportunity to regain momentum.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Revenge served cold against Dplus KIA" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The lower bracket final was a statement match. HLE demolished DK in three straight games, avenging their earlier defeat and sending DK home without a Paris ticket. The sweep was decisive and convincing — HLE never allowed DK to settle into their preferred macro game, keeping pressure constant across all three maps. It was a masterclass in disciplined lower bracket play under elimination pressure.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Three Korean giants head to Paris" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "HLE now joins T1 — who qualified on May 25 with a 3-1 win over DK in the upper bracket final — and Gen.G, the reigning EWC champions who received an automatic invite. South Korea will arrive at EWC 2026 with three of the world's top teams. The League of Legends tournament is set for July 15-19 at Paris Expo Porte de Versailles, featuring 16 teams competing for a $2 million prize pool.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "T1, HLE, and Gen.G together in Paris: South Korea is bringing three world-class teams to the EWC 2026 stage.",
          },
        ],
      },
    ],
  },
  {
    title: "EWC 2026: HLE clasifica con un 3-0 sobre Dplus KIA y completa el trío coreano rumbo a París",
    slug: 'slug-intl-ewc-2026-hle-qualifier-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'international',
    newsSubtype: 'resultats',
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: COVER,
    excerpt: "Hanwha Life Esports arrasó a Dplus KIA 3-0 el 26 de mayo para clasificar al EWC 2026 en París, completando el cupo coreano junto a T1 y Gen.G de cara al torneo de julio.",
    sourceUrl: 'https://liquipedia.net/leagueoflegends/Esports_World_Cup/2026/Korea',
    tags: [
      { tag: 'LoL' },
      { tag: 'Esports' },
      { tag: 'Internacional' },
      { tag: 'HLE' },
      { tag: 'EWC 2026' },
      { tag: 'LCK' },
    ],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "El 26 de mayo de 2026, Hanwha Life Esports (HLE) aseguró su plaza en el Esports World Cup 2026 al barrer a Dplus KIA por 3-0 en la gran final del lower bracket del qualifier coreano (LCK). Un cierre contundente que corona un recorrido de remontada a través del bracket inferior tras una derrota temprana ante ese mismo rival.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Un recorrido impecable por el lower bracket" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Tras caer 1-2 frente a Dplus KIA en el upper bracket, HLE no cedió ni un solo set en el bracket inferior: HANJIN Brion, Nongshim RedForce y finalmente DK cayeron ante el juego agresivo y disciplinado de Hanwha Life. Zeka fue la figura destacada en toda la serie, imponiendo su sello en múltiples picks y sin dar respiro a sus rivales en ninguna de las tres partidas de la final.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Revancha total sobre Dplus KIA" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La final del lower bracket fue una exhibición. HLE despachó a DK en tres partidas consecutivas, vengando la derrota anterior y mandando a casa al equipo que los había enviado al bracket inferior. Dplus KIA no encontró respuesta al ritmo impuesto por Hanwha Life y se queda sin billete para París. Para HLE, la revancha fue total y la clasificación, merecida.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Corea del Sur envía tres potencias a París" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "HLE se une ahora a T1 — clasificado el 25 de mayo tras vencer 3-1 a DK en la final del upper bracket — y a Gen.G, campeones vigentes del EWC 2025 con invitación directa. Corea del Sur llegará al EWC 2026 con tres de los mejores equipos del planeta. El torneo de League of Legends está fijado para el 15 al 19 de julio en el Paris Expo Porte de Versailles, con 16 equipos disputando un prize pool de 2 millones de dólares.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "T1, HLE y Gen.G en París: Corea del Sur llega al EWC 2026 con una representación de primer nivel mundial.",
          },
        ],
      },
    ],
  },
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const a of articles) {
    const ex = await payload.find({ collection: 'news', where: { slug: { equals: a.slug } } })
    if (ex.docs.length > 0) {
      console.log(`→ skip ${a.slug}`)
      continue
    }
    await payload.create({ collection: 'news', data: a as any })
    console.log(`✅ ${a.locale.toUpperCase()} — ${a.title}`)
  }
}
