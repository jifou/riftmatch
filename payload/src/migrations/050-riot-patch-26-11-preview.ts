import type { MigrationModule } from './runner'

export const id = '050-riot-patch-26-11-preview'
export const description = 'RIOT — Preview Patch 26.11 : nerfs Smolder, Black Cleaver rework, Eternal Aspects skins'

const DATE = '2026-05-18T08:00:00.000Z'
const COVER = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Smolder_0.jpg'
const SOURCE = 'https://www.leagueoflegends.com/en-us/news/tags/patch-notes/'

const articles = [
  {
    title: 'Preview Patch 26.11 : Smolder nerfé, Black Cleaver modifié et skins Eternal Aspects',
    slug: 'preview-patch-26-11-smolder-nerf-black-cleaver-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: COVER,
    excerpt:
      'Riot Games a dévoilé les premiers changements du Patch 26.11, attendu le 28 mai 2026 : Smolder dans le viseur, Black Cleaver revu, buffs sur les supports tank et une nouvelle ligne de skins Eternal Aspects.',
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Patch 26.11' }, { tag: 'Smolder' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'Le Patch 26.11 de League of Legends arrivera sur les serveurs live le jeudi 28 mai 2026. En cours de test sur le PBE depuis la semaine du 12 mai, il apporte plusieurs ajustements notables après un Patch 26.10 particulièrement agité sur le plan de la méta.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Smolder et Senna dans le viseur' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Smolder reçoit un nerf en urgence, ajouté tardivement par Riot Phroxzon. Le jeune dragon avait bénéficié du Deathfire Touch dans le patch précédent, ce qui a considérablement renforcé son early game et l\'a propulsé en tête des pick en mid. Senna sera également impactée de manière indirecte : une modification du Black Cleaver lui retire une synergie non intentionnelle qui la rendait dominante en support. Le Cleaver se voit doté d\'un cooldown interne dans son interaction avec Deathfire Touch, ce qui rééquilibre l\'ensemble du pool de champions qui en dépend.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Buffs champions : Ambessa, Galio, Wukong et Zeri' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Du côté des buffs, quatre champions voient leur puissance augmenter : Ambessa, Galio, Wukong et Zeri. Les supports tank bénéficient également d\'un environnement plus favorable grâce aux améliorations apportées aux runes Aftershock et Gardien, ainsi qu\'à l\'item Solari de Locket du fer, dont les statistiques défensives sont revues à la hausse.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Nouveaux skins : Eternal Aspects, Day Job 2026 et le mystérieux Vel\'Koz Spaghetti' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Sur le plan cosmétique, le Patch 26.11 introduit deux nouvelles lignes de skins : Eternal Aspects et Day Job 2026. Un skin non officiel surnommé "Spaghetti Vel\'Koz" a également été repéré sur le PBE, sa ligne officielle n\'ayant pas encore été annoncée par Riot Games. Les dates de disponibilité et les prix seront confirmés à l\'approche du déploiement.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Le Patch 26.11 s\'annonce comme un correctif ciblé après les déséquilibres créés par le Patch 26.10. Rendez-vous le 28 mai sur les serveurs live pour découvrir les notes complètes.',
          },
        ],
      },
    ],
  },
  {
    title: 'Patch 26.11 Preview: Smolder Nerfed, Black Cleaver Reworked, Eternal Aspects Skins',
    slug: 'patch-26-11-preview-smolder-nerf-black-cleaver-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: COVER,
    excerpt:
      'Riot Games unveiled early Patch 26.11 changes arriving May 28, 2026: Smolder targeted, Black Cleaver gets an internal cooldown fix, tank supports buffed, and new Eternal Aspects skins revealed on PBE.',
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Patch 26.11' }, { tag: 'Smolder' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'League of Legends Patch 26.11 is scheduled to hit live servers on Thursday, May 28, 2026. Currently in testing on the PBE since the week of May 12, it brings targeted changes after Patch 26.10 stirred up the meta considerably.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Smolder and Senna in the crosshairs' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Smolder receives a last-minute nerf flagged by Riot Phroxzon. The young dragon benefited greatly from gaining access to Deathfire Touch in Patch 26.10, which boosted his early game and vaulted him to the top of mid-lane picks. Senna is also hit indirectly: an unintended interaction between Black Cleaver and Deathfire Touch that pushed her to the top of the support pool will be addressed through an internal cooldown on the item\'s stacking behavior.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Champion buffs: Ambessa, Galio, Wukong and Zeri' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'On the positive side, Ambessa, Galio, Wukong, and Zeri are all set to receive buffs. Tank supports should also find a friendlier environment thanks to improvements to the Aftershock and Guardian runes, as well as a buff to Locket of the Iron Solari, making engage-focused support champions more viable.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'New skins: Eternal Aspects, Day Job 2026, and mysterious Spaghetti Vel\'Koz' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Two new skin lines arrive with Patch 26.11: Eternal Aspects and Day Job 2026. A skin internally nicknamed "Spaghetti Vel\'Koz" was also spotted on the PBE, though Riot has not officially announced its skin line. Exact release dates and pricing will be confirmed closer to the patch launch on May 28.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Patch 26.11 looks like a precise correction after the turbulence of 26.10. Full patch notes drop on May 28 when the patch goes live.',
          },
        ],
      },
    ],
  },
  {
    title: 'Avance del Parche 26.11: Smolder nerfeado, Black Cleaver ajustado y skins Eternal Aspects',
    slug: 'avance-parche-26-11-smolder-nerf-black-cleaver-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: COVER,
    excerpt:
      'Riot Games ha desvelado los primeros cambios del Parche 26.11, previsto para el 28 de mayo de 2026: Smolder en la diana, Black Cleaver rediseñado, buffs a los supports tanque y nuevas skins Eternal Aspects.',
    sourceUrl: SOURCE,
    tags: [{ tag: 'LoL' }, { tag: 'Riot Games' }, { tag: 'Patch 26.11' }, { tag: 'Smolder' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: 'El Parche 26.11 de League of Legends llegará a los servidores en vivo el jueves 28 de mayo de 2026. Actualmente en pruebas en el PBE desde la semana del 12 de mayo, trae ajustes importantes después de que el Parche 26.10 agitara considerablemente la meta.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Smolder y Senna en el punto de mira' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Smolder recibe un nerf de última hora señalado por Riot Phroxzon. El joven dragón se benefició enormemente de acceder a Deathfire Touch en el parche anterior, lo que disparó su early game y lo colocó en lo alto de las elecciones en mid. Senna también se ve afectada indirectamente: una interacción no intencionada entre el Black Cleaver y Deathfire Touch, que la había convertido en dominante en la posición de support, se corregirá añadiendo un cooldown interno al apilamiento del objeto.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Buffs de campeones: Ambessa, Galio, Wukong y Zeri' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Ambessa, Galio, Wukong y Zeri recibirán buffs en este parche. Los supports tanque también encontrarán un entorno más favorable gracias a las mejoras en las runas Aftershock y Guardián, así como un buff al Relicario de hierro solare, haciendo más viables a los campeones de support orientados al engage.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Nuevas skins: Eternal Aspects, Day Job 2026 y el misterioso Vel\'Koz Spaghetti' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'El Parche 26.11 introduce dos nuevas líneas de skins: Eternal Aspects y Day Job 2026. También se ha visto en el PBE una skin apodada internamente "Spaghetti Vel\'Koz", aunque Riot no ha anunciado oficialmente su línea. Las fechas exactas y precios se confirmarán cerca del lanzamiento del parche el 28 de mayo.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'El Parche 26.11 promete ser una corrección precisa tras los desequilibrios del 26.10. Las notas completas del parche llegarán el 28 de mayo con el despliegue en vivo.',
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
