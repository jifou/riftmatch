import type { MigrationModule } from './runner'

export const id = '034-riot-lee-sin-rework-2610'
export const description = 'RIOT — Lee Sin modernisation patch 26.10 (FR/EN/ES)'

const DATE = '2026-05-13T08:00:00.000Z'

const articles = [
  {
    title: 'Patch 26.10 : Lee Sin reçoit sa modernisation tant attendue',
    slug: 'patch-2610-lee-sin-rework-fr',
    locale: 'fr',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg',
    excerpt:
      'Le patch 26.10, déployé ce 13 mai 2026, apporte une modernisation majeure à Lee Sin : son W est restructuré, son E ajusté et son ultime gagne un effet collatéral inconditionnel.',
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-10-notes/',
    tags: [{ tag: 'Lee Sin' }, { tag: 'Patch 26.10' }, { tag: 'Riot Games' }, { tag: 'LoL' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Le patch 26.10 est arrivé ce 13 mai 2026, et il apporte l'une des mises à jour les plus attendues de l'année : la modernisation de Lee Sin. Le Moine Aveugle, champion emblématique depuis des années, bénéficie enfin d'une refonte partielle destinée à lui redonner l'éclat qu'il mérite dans le meta actuel.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Safeguard (W) : un cooldown unifié et un bouclier repensé' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La modification la plus profonde concerne le W de Lee Sin. Son bouclier possédait jusqu'ici une durée à deux vitesses : 12 secondes lorsqu'il bondissait vers un allié non-champion, et seulement 6 secondes vers un champion. Cette asymétrie disparaît : la durée est désormais unifiée à 7 secondes dans tous les cas.",
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "Les valeurs du bouclier baissent légèrement — de 70/115/160/205/250 (+ 80 % AP) à 60/105/150/195/240 (+ 80 % AP) — mais la simplification du cooldown offre une bien meilleure prévisibilité en combat. Par ailleurs, lorsque Lee Sin bondit vers une ward ou un sbire, c'est lui-même qui reçoit le bouclier, et non la cible visée.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Tempest (E) : un ratio AD légèrement réduit" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Son E voit son ratio de dégâts magiques passer de 100 % AD à 90 % AD. Un ajustement mesuré qui vise à équilibrer les dégâts en burst sans brider son expression mécanique.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Dragon's Rage (R) : l'effet collatéral devient inconditionnel" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le changement le plus spectaculaire touche l'ultime. Désormais, si Lee Sin propulse un champion avec son Dragon's Rage et que cette cible est tuée en plein vol, son corps continue quand même de voler, de faire des dégâts et de renverser les ennemis sur son passage. Une modification qui rend les plays les plus stylés encore plus gratifiants — et qui promet des highlights mémorables en compétition.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Autres changements notables du patch 26.10' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Le patch 26.10 ne s'arrête pas à Lee Sin. Ambessa, Galio, Wukong et Zeri reçoivent des buffs ciblés, tandis qu'Anivia, Ashe, Naafiri, Shyvana et Zed sont nerfés. Côté systèmes, Doran's Bow et Doran's Helm sont renforcés, et plusieurs ajustements touchent Lichbane et Stormraider's Surge.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "La modernisation de Lee Sin est une déclaration claire de Riot : les champions iconiques méritent de rester pertinents sans perdre leur identité. Ce patch 26.10 lui redonne des outils pour briller, tout en conservant l'essence du gameplay qui a fait sa légende.",
          },
        ],
      },
    ],
  },
  {
    title: 'Patch 26.10: Lee Sin Receives Long-Awaited Modernization',
    slug: 'patch-2610-lee-sin-rework-en',
    locale: 'en',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg',
    excerpt:
      'Patch 26.10, live on May 13, 2026, delivers a significant modernization to Lee Sin: a restructured W, adjusted E, and an unconditional collateral effect on his ultimate.',
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-10-notes/',
    tags: [{ tag: 'Lee Sin' }, { tag: 'Patch 26.10' }, { tag: 'Riot Games' }, { tag: 'LoL' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "Patch 26.10 went live on May 13, 2026, and it brings one of the most anticipated updates of the year: a modernization for Lee Sin. The Blind Monk — a staple of the game since his release — finally receives a partial rework designed to restore his shine in the current meta.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Safeguard (W): Unified Cooldown, Revamped Shield' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The deepest change hits Lee Sin's W. His shield previously had a split cooldown: 12 seconds when dashing to a non-champion ally, and only 6 seconds toward a champion. That asymmetry is gone — the cooldown is now a flat 7 seconds across the board.",
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "Shield values drop slightly — from 70/115/160/205/250 (+80% AP) to 60/105/150/195/240 (+80% AP) — but the unified cooldown brings far better combat predictability. Additionally, when Lee Sin wings to a ward or minion, he receives the shield himself rather than the target.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Tempest (E): Slightly Reduced AD Ratio' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "Lee Sin's E sees its magic damage ratio drop from 100% AD to 90% AD — a measured tweak aimed at softening his burst potential without curbing his mechanical expression.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Dragon's Rage (R): Collateral Goes Unconditional" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The flashiest change lands on the ultimate. If Lee Sin kicks a champion with Dragon's Rage and that target dies mid-flight, the body now continues to fly, dealing damage and knocking up enemies in its path. This makes the most stylish plays even more rewarding — and promises memorable highlights on the competitive stage.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Other Notable Patch 26.10 Changes' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "The patch doesn't stop at Lee Sin. Ambessa, Galio, Wukong, and Zeri receive targeted buffs, while Anivia, Ashe, Naafiri, Shyvana, and Zed are nerfed. On the systems side, Doran's Bow and Doran's Helm are strengthened, with further adjustments to Lich Bane and Stormraider's Surge.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Lee Sin's modernization is a clear statement from Riot: iconic champions deserve to stay relevant without losing their identity. Patch 26.10 gives him new tools to shine while preserving the gameplay essence that made him a legend.",
          },
        ],
      },
    ],
  },
  {
    title: 'Parche 26.10: Lee Sin recibe su esperada modernización',
    slug: 'patch-2610-lee-sin-rework-es',
    locale: 'es',
    status: 'published',
    category: 'esports',
    newsType: 'riot',
    newsSubtype: 'other',
    author: 'RiftMatch',
    publishedAt: DATE,
    coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg',
    excerpt:
      'El parche 26.10, activo el 13 de mayo de 2026, trae una modernización importante para Lee Sin: su W es reestructurada, su E ajustada y su ulti gana un efecto colateral incondicional.',
    sourceUrl: 'https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-10-notes/',
    tags: [{ tag: 'Lee Sin' }, { tag: 'Parche 26.10' }, { tag: 'Riot Games' }, { tag: 'LoL' }],
    content: [
      {
        type: 'p',
        children: [
          {
            text: "El parche 26.10 llegó el 13 de mayo de 2026 con una de las actualizaciones más esperadas del año: la modernización de Lee Sin. El Monje Ciego, un campeón emblemático desde hace años, recibe por fin una revisión parcial pensada para devolverle protagonismo en la meta actual.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Salvaguarda (W): enfriamiento unificado y escudo rediseñado' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El cambio más profundo afecta a la W de Lee Sin. Su escudo tenía hasta ahora un enfriamiento dividido: 12 segundos al saltar hacia un aliado no-campeón, y solo 6 hacia un campeón. Esa asimetría desaparece: el enfriamiento es ahora un valor fijo de 7 segundos en todos los casos.",
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: "Los valores del escudo bajan levemente — de 70/115/160/205/250 (+80% AP) a 60/105/150/195/240 (+80% AP) — pero la simplificación del enfriamiento aporta una previsibilidad mucho mayor en combate. Además, cuando Lee Sin salta a una ward o súbdito, el escudo lo recibe él mismo y no el objetivo.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Tempestad (E): ratio de daño AD ligeramente reducido' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "La E ve su ratio de daño mágico reducido de 100% AD a 90% AD. Un ajuste medido que busca suavizar el potencial de burst sin limitar la expresión mecánica del campeón.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: "Furia del Dragón (R): el efecto colateral se vuelve incondicional" }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El cambio más espectacular llega a la ulti. Si Lee Sin golpea a un campeón con Furia del Dragón y ese objetivo muere durante el vuelo, el cuerpo continúa volando, haciendo daño y derribando enemigos a su paso. Una modificación que hace los jugadas más estilosas aún más gratificantes — y que promete destacados memorables en competición.",
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Otros cambios destacados del parche 26.10' }],
      },
      {
        type: 'p',
        children: [
          {
            text: "El parche no se detiene en Lee Sin. Ambessa, Galio, Wukong y Zeri reciben buffs específicos, mientras que Anivia, Ashe, Naafiri, Shyvana y Zed son nerfados. En los sistemas, Doran's Bow y Doran's Helm son reforzados, con ajustes adicionales en Lichbane y Stormraider's Surge.",
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "La modernización de Lee Sin es una declaración clara de Riot: los campeones icónicos merecen seguir siendo relevantes sin perder su identidad. El parche 26.10 le da nuevas herramientas para brillar, conservando la esencia de juego que lo convirtió en leyenda.",
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
