import type { MigrationModule } from './runner'

export const id = '146-riot-parental-controls-rollback'
export const description = 'RIOT — Contrôles parentaux : Riot fait marche arrière après un déploiement accidentel touchant des joueurs adultes'

const AUTHORS = ['RiftMatch', 'Jifou', 'Echo']
const AUTEUR = AUTHORS[new Date().getDate() % 3]
const DATE = '2026-07-17T08:00:00.000Z'

const articles = [
  {
    title: "Contrôles parentaux sur League of Legends : Riot fait marche arrière après un déploiement raté",
    slug: 'riot-controles-parentaux-marche-arriere-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Riot Games a lancé le 15 juillet des outils de contrôle parental optionnels sur League of Legends, VALORANT et Teamfight Tactics PC aux États-Unis. Mais la fonctionnalité s'est appliquée par erreur à de nombreux comptes adultes, forçant Riot à annoncer un retrait temporaire le temps de comprendre le bug.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/announcements/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Sécurité' }, { tag: 'Annonce' }],
    content: [
      {
        type: 'p',
        children: [{ text: "Riot Games a commencé le 15 juillet le déploiement de ses nouveaux outils de contrôle parental sur League of Legends, VALORANT et Teamfight Tactics (version PC), pour l'instant limité aux États-Unis. Baptisée \"Parent Permissions\", cette fonctionnalité permet à un parent vérifié de superviser les interactions sociales du compte de son enfant depuis un \"Parent Portal\" dédié." }],
      },
      {
        type: 'h2',
        children: [{ text: "Des outils pensés pour la sécurité des plus jeunes" }],
      },
      {
        type: 'p',
        children: [{ text: "Concrètement, les parents peuvent couper entièrement le chat texte et vocal, le limiter aux amis déjà ajoutés, bloquer les demandes d'ami entrantes ou consulter la liste complète des amis liés au compte. Riot indique aussi qu'il est possible de voir quels comptes adultes ont contacté l'enfant au cours des trente derniers jours. Une fois la vérification par e-mail effectuée, l'enfant ne peut plus retirer seul ces restrictions avant sa majorité." }],
      },
      {
        type: 'h2',
        children: [{ text: "Un bug qui touche aussi des comptes adultes" }],
      },
      {
        type: 'p',
        children: [{ text: "Le déploiement ne s'est toutefois pas passé comme prévu : de nombreux joueurs majeurs se sont retrouvés soumis aux mêmes restrictions que les comptes mineurs, certains rapportant des dates de naissance visiblement erronées sur leur compte à l'origine du déclenchement. Riot Games a reconnu le problème sur X, précisant que \"ces fonctionnalités se sont déployées par accident pour de nombreux joueurs de League of Legends, adultes compris\", et a annoncé retirer temporairement les contrôles parentaux le temps d'identifier la cause du bug." }],
      },
      {
        type: 'p',
        children: [{ text: "L'éditeur assure qu'il ne s'agit que de la première phase d'un chantier plus large sur la sécurité des jeunes joueurs, avec une extension prévue à la version mobile de TFT début 2027. Le correctif et une nouvelle date de déploiement n'ont pas encore été communiqués." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Une bonne intention entachée par un bug de lancement — Riot promet de revenir avec une version corrigée des contrôles parentaux." }],
      },
    ],
  },
  {
    title: "League of Legends Parental Controls: Riot Rolls Back Feature After Botched Rollout",
    slug: 'riot-parental-controls-rollback-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Riot Games launched optional parental control tools for League of Legends, VALORANT and Teamfight Tactics PC in the US on July 15. The feature accidentally applied to many adult accounts, forcing Riot to temporarily roll it back for League while it investigates.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/announcements/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Safety' }, { tag: 'Announcement' }],
    content: [
      {
        type: 'p',
        children: [{ text: "On July 15, Riot Games began rolling out new parental control tools across League of Legends, VALORANT, and Teamfight Tactics (PC), initially limited to the United States. Called \"Parent Permissions,\" the feature lets a verified parent supervise their child's social interactions through a dedicated Parent Portal." }],
      },
      {
        type: 'h2',
        children: [{ text: "Tools built for younger players' safety" }],
      },
      {
        type: 'p',
        children: [{ text: "Once set up, parents can fully disable text and voice chat, restrict it to existing friends only, block incoming friend requests, or view the full friends list linked to the account. Riot also says parents can see which adult accounts have messaged their child within the past 30 days. After email verification, the child cannot remove the restrictions alone until turning 18." }],
      },
      {
        type: 'h2',
        children: [{ text: "A bug that hit adult accounts too" }],
      },
      {
        type: 'p',
        children: [{ text: "The rollout did not go as planned: many adult players found themselves subject to the same restrictions as minor accounts, with some reporting clearly incorrect birth dates on file that triggered the controls. Riot Games acknowledged the issue on X, stating that \"these features accidentally rolled out for many League of Legends players, including adults,\" and announced it was temporarily rolling the parental controls back for League while identifying what went wrong." }],
      },
      {
        type: 'p',
        children: [{ text: "The publisher maintains this is only the first phase of a broader child-safety initiative, with a mobile TFT version expected in early 2027. A fix and a new rollout date have not yet been announced." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "A well-intentioned feature undone by a launch bug — Riot says a corrected version of the parental controls is coming." }],
      },
    ],
  },
  {
    title: "Controles parentales de League of Legends: Riot da marcha atras tras un lanzamiento fallido",
    slug: 'riot-controles-parentales-marcha-atras-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot' as const,
    newsSubtype: 'other' as const,
    author: AUTEUR,
    publishedAt: DATE,
    coverImage: '',
    excerpt: "Riot Games lanzo el 15 de julio herramientas opcionales de control parental para League of Legends, VALORANT y Teamfight Tactics PC en Estados Unidos. La funcion se aplico por error a muchas cuentas de adultos, obligando a Riot a retirarla temporalmente mientras investiga.",
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/announcements/',
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Seguridad' }, { tag: 'Anuncio' }],
    content: [
      {
        type: 'p',
        children: [{ text: "El 15 de julio, Riot Games comenzo a desplegar sus nuevas herramientas de control parental en League of Legends, VALORANT y Teamfight Tactics (version PC), limitadas por ahora a Estados Unidos. Bautizada 'Parent Permissions', la funcion permite a un padre o madre verificado supervisar las interacciones sociales de la cuenta de su hijo desde un Parent Portal dedicado." }],
      },
      {
        type: 'h2',
        children: [{ text: "Herramientas pensadas para la seguridad de los mas jovenes" }],
      },
      {
        type: 'p',
        children: [{ text: "Una vez configurada, permite desactivar por completo el chat de texto y voz, limitarlo solo a los amigos ya agregados, bloquear solicitudes de amistad entrantes o consultar la lista completa de amigos vinculados a la cuenta. Riot tambien indica que se puede ver que cuentas de adultos han contactado al menor en los ultimos 30 dias. Tras la verificacion por correo, el menor no puede retirar las restricciones por su cuenta hasta cumplir 18 anos." }],
      },
      {
        type: 'h2',
        children: [{ text: "Un fallo que tambien afecto a cuentas de adultos" }],
      },
      {
        type: 'p',
        children: [{ text: "El despliegue no salio como estaba previsto: muchos jugadores adultos se encontraron con las mismas restricciones que las cuentas de menores, y algunos reportaron fechas de nacimiento claramente erroneas en su cuenta como origen del problema. Riot Games reconocio el fallo en X, señalando que 'estas funciones se activaron por accidente para muchos jugadores de League of Legends, incluidos adultos', y anuncio que retiraria temporalmente los controles parentales en League mientras identifica la causa." }],
      },
      {
        type: 'p',
        children: [{ text: "La compañia asegura que esta es solo la primera fase de una iniciativa mas amplia de seguridad infantil, con una version movil para TFT prevista a principios de 2027. Todavia no se ha anunciado una correccion ni una nueva fecha de lanzamiento." }],
      },
      {
        type: 'blockquote',
        children: [{ text: "Una buena intencion empañada por un fallo de lanzamiento: Riot promete volver con una version corregida de los controles parentales." }],
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
