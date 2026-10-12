import type { MigrationModule } from './runner'

export const id = '201-patch-26-20'
export const description = 'Patch note 26.20 (patch des Worlds 2026) en 5 langues. Source: notes officielles Riot'

const patches: any[] = [
  {
    "locale": "fr",
    "version": "26.20",
    "title": "Patch 26.20 : le patch des Worlds 2026, toutes les notes de mise à jour",
    "slug": "patch-26-20",
    "type": "live",
    "status": "published",
    "publishedAt": "2026-10-07T18:00:00.000Z",
    "coverImage": "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/ambessa/skins/base/images/ambessa_splash_centered_0.jpg",
    "excerpt": "Patch 26.20, le patch des Worlds 2026 : ajustements pro (Ambessa, K'Sante, Ashe), Rocketbelt revu, replays privés et nouveaux skins HEARTSTEEL.",
    "highlights": [
      {
        "text": "Replays privés : tu ne peux plus télécharger que les replays de tes propres parties"
      },
      {
        "text": "Nerfs pro : Ambessa, K'Sante, Ashe, Cassiopeia et Yunara sont ajustés avant les Worlds"
      },
      {
        "text": "Buffs : Kennen, Kindred, Smolder, Swain, Tahm Kench, Vayne, Lucian et Mordekaiser"
      },
      {
        "text": "Hextech Rocketbelt : l'Accélération de compétence passe de 20 à 10, les dégâts de l'actif augmentent"
      },
      {
        "text": "Skins HEARTSTEEL Live My Life et Baron Kog'Maw Prestige Classic disponibles le 7 octobre"
      }
    ],
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "Le patch 26.20 est le patch des Worlds : c'est sur cette version que se joue la compétition de l'année. Riot ajuste des valeurs sûres de la scène pro comme Ambessa et K'Sante, remonte des champions plus faibles comme Kennen et Kindred, et retouche la Hextech Rocketbelt."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Replays privés"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "À partir de ce patch, tu ne peux accéder qu'aux replays des parties auxquelles tu as participé. Les autres joueurs ne peuvent plus télécharger tes replays et les applications tierces perdent l'accès aux téléchargements de replays. Riot explique vouloir fermer des failles exploitées par des développeurs de logiciels de triche. Tu peux toujours revoir tes propres parties depuis le client."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Champions"
          }
        ]
      },
      {
        "type": "ul",
        "children": [
          {
            "type": "li",
            "children": [
              {
                "text": "Ambessa : passif, Dégâts 5-30 (+25% AD bonus) → 5-25 (+20% AD bonus)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Ashe : Stats de base, Dégâts d'attaque/niveau 3,5 → 3"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Cassiopeia : Stats de base, PV de base 630 → 610 ; Mana de base 480 → 450"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Diana : W, Ratio de PV bonus du bouclier 11% → 14%"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Kennen : E, Vitesse d'attaque bonus 40/50/60/70/80% → 50/60/70/80/90%"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Kindred : W, Modificateur contre monstres 150% → 165% ; E, Durée du ralentissement 1 s → 1,5 s ; E, Ciblage des petits monstres : Activé → Retiré"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "K'Sante : W, Coût en mana 40/45/50/55/60 → 45/50/55/60/65 ; W, Réduction de dégâts 30/75% → 25/70%"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Lillia : R, Durée 2,5 s → 2,5/2,75/3 s"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Lucian : Stats de base, Dégâts d'attaque 60 + 2,5/niveau → 60 + 2,9/niveau"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Mordekaiser : Q +5/niveau → +7/niveau (10-20) ; R, Délai de récupération 140/120/100 s → 120/110/100 s"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Neeko : E, Dégâts 70/105/140/175/210 → 80/115/150/185/220 ; E, Durée de l'immobilisation 1,8/2,1/2,4/2,7/3 s → 2/2,25/2,5/2,75/3 s"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Smolder : R, Soins 100/135/170 (+50% AD bonus) → 100/175/250 (+75% AD bonus)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Swain : Stats de base, Résistance magique 31 → 34, Armure 25 → 23 ; W, Dégâts 70/105/140/175/210 → 70/115/160/205/250 ; W, Délai de récupération 22/21/20/19/18 s → 20/19/18/17/16 s"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Tahm Kench : Q, Soins 10/13,75/17,5/21,25/25 → 10/20/30/40/50"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Vayne : Stats de base, Régénération de PV par 5 s 4 + 0,5/niveau → 5,5 + 0,4/niveau ; Q, Coût en mana 46/42/38/34/30 → 30"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Yunara : Q, Dégâts à l'impact 5/10/15/20/25 (+20% AP) → 3/8/13/18/23 (+20% AP) ; W, Se cumule avec les autres ralentissements → Ne se cumule plus avec les autres ralentissements"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Objets"
          }
        ]
      },
      {
        "type": "ul",
        "children": [
          {
            "type": "li",
            "children": [
              {
                "text": "Experimental Hexplate : Modificateur à distance 70% → 50% (35% / 14% → 25% / 10%)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Hextech Rocketbelt : Accélération de compétence 20 → 10 ; Dégâts de l'actif 100 (+10% AP) → 135 (+15% AP)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Runaan's Hurricane : Riot revient légèrement sur un buff jugé trop fort."
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "ARAM"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Bel'Veth : dégâts infligés 105% → 100%, dégâts subis 95% → 100%, ténacité 20% → 0%. Locke : dégâts infligés 105% → 115%."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Skins"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Les skins Prestige Classic Baron Kog'Maw, Prestige HEARTSTEEL Live My Life Sett, et HEARTSTEEL Live My Life Ezreal, Kayn, Aphelios, Yone et K'Sante sont disponibles le 7 octobre 2026. Le Passe de combat de l'Acte II arrive avec le patch 26.21."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "À retenir"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Ce patch resserre les champions dominants de la scène pro et rend de l'air à des picks plus faibles juste avant les Worlds. Pour savoir quel champion te correspond après ces changements, fais le quiz RiftMatch."
          }
        ]
      }
    ],
    "sourceUrl": "https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-20-notes"
  },
  {
    "locale": "en",
    "version": "26.20",
    "title": "Patch 26.20: The Worlds 2026 Patch, Full Patch Notes Summary",
    "slug": "patch-26-20",
    "type": "live",
    "status": "published",
    "publishedAt": "2026-10-07T18:00:00.000Z",
    "coverImage": "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/ambessa/skins/base/images/ambessa_splash_centered_0.jpg",
    "excerpt": "Patch 26.20, the Worlds 2026 patch: pro tuning for Ambessa, K'Sante and Ashe, a Rocketbelt rework, private replays and new HEARTSTEEL skins.",
    "highlights": [
      {
        "text": "Private replays: you can now only download replays from your own matches"
      },
      {
        "text": "Pro nerfs: Ambessa, K'Sante, Ashe, Cassiopeia and Yunara are tuned down before Worlds"
      },
      {
        "text": "Buffs: Kennen, Kindred, Smolder, Swain, Tahm Kench, Vayne, Lucian and Mordekaiser"
      },
      {
        "text": "Hextech Rocketbelt: Ability Haste drops from 20 to 10, active damage goes up"
      },
      {
        "text": "HEARTSTEEL Live My Life skins and Prestige Classic Baron Kog'Maw available October 7"
      }
    ],
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "Patch 26.20 is the Worlds patch: this is the version the year's biggest competition is played on. Riot adjusts pro staples like Ambessa and K'Sante, lifts weaker champions like Kennen and Kindred, and retunes the Hextech Rocketbelt."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Private replays"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Starting with this patch, you can only access replays from matches you played in. Other players can no longer download your replays, and third-party apps lose access to replay downloads. Riot says it wants to close vulnerabilities exploited by cheat developers. You can still review your own matches from the League client."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Champions"
          }
        ]
      },
      {
        "type": "ul",
        "children": [
          {
            "type": "li",
            "children": [
              {
                "text": "Ambessa: passive, Damage 5-30 (+25% bonus AD) → 5-25 (+20% bonus AD)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Ashe: Base stats, Attack Damage/level 3.5 → 3"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Cassiopeia: Base stats, Base Health 630 → 610; Base Mana 480 → 450"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Diana: W, Shield Bonus Health Ratio 11% → 14%"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Kennen: E, Bonus Attack Speed 40/50/60/70/80% → 50/60/70/80/90%"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Kindred: W, Monster Mod 150% → 165%; E, Slow Duration 1 s → 1.5 s; E, Small Monster Targeting: Enabled → Removed"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "K'Sante: W, Mana Cost 40/45/50/55/60 → 45/50/55/60/65; W, Damage Reduction 30/75% → 25/70%"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Lillia: R, Duration 2.5 s → 2.5/2.75/3 s"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Lucian: Base stats, Attack Damage 60 + 2.5/level → 60 + 2.9/level"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Mordekaiser: Q +5/level → +7/level (10-20); R, Cooldown 140/120/100 s → 120/110/100 s"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Neeko: E, Damage 70/105/140/175/210 → 80/115/150/185/220; E, Root Duration 1.8/2.1/2.4/2.7/3 s → 2/2.25/2.5/2.75/3 s"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Smolder: R, Healing 100/135/170 (+50% bonus AD) → 100/175/250 (+75% bonus AD)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Swain: Base stats, Magic Resistance 31 → 34, Armor 25 → 23; W, Damage 70/105/140/175/210 → 70/115/160/205/250; W, Cooldown 22/21/20/19/18 s → 20/19/18/17/16 s"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Tahm Kench: Q, Healing 10/13.75/17.5/21.25/25 → 10/20/30/40/50"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Vayne: Base stats, Health per 5 4 + 0.5/level → 5.5 + 0.4/level; Q, Mana Cost 46/42/38/34/30 → 30"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Yunara: Q, On Hit Damage 5/10/15/20/25 (+20% AP) → 3/8/13/18/23 (+20% AP); W, Stacks with other slows → No longer stacks with other slows"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Items"
          }
        ]
      },
      {
        "type": "ul",
        "children": [
          {
            "type": "li",
            "children": [
              {
                "text": "Experimental Hexplate: Ranged Mod 70% → 50% (35% / 14% → 25% / 10%)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Hextech Rocketbelt: Ability Haste 20 → 10; Active Damage 100 (+10% AP) → 135 (+15% AP)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Runaan's Hurricane: Riot pulls back slightly on a buff that was too strong."
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "ARAM"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Bel'Veth: damage dealt 105% → 100%, damage taken 95% → 100%, tenacity 20% → 0%. Locke: damage dealt 105% → 115%."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Skins"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Prestige Classic Baron Kog'Maw, Prestige HEARTSTEEL Live My Life Sett, and HEARTSTEEL Live My Life Ezreal, Kayn, Aphelios, Yone and K'Sante are available October 7, 2026. The Act II Battle Pass arrives with Patch 26.21."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Key takeaways"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "This patch reins in the dominant champions of pro play and gives weaker picks some room right before Worlds. To find the champion that fits you after these changes, take the RiftMatch quiz."
          }
        ]
      }
    ],
    "sourceUrl": "https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-20-notes"
  },
  {
    "locale": "es",
    "version": "26.20",
    "title": "Parche 26.20: el parche de los Worlds 2026, resumen de las notas",
    "slug": "patch-26-20",
    "type": "live",
    "status": "published",
    "publishedAt": "2026-10-07T18:00:00.000Z",
    "coverImage": "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/ambessa/skins/base/images/ambessa_splash_centered_0.jpg",
    "excerpt": "Parche 26.20, el parche de los Worlds 2026: ajustes pro (Ambessa, K'Sante, Ashe), Rocketbelt retocado, repeticiones privadas y nuevas skins HEARTSTEEL.",
    "highlights": [
      {
        "text": "Repeticiones privadas: solo podrás descargar las repeticiones de tus propias partidas"
      },
      {
        "text": "Nerfs pro: Ambessa, K'Sante, Ashe, Cassiopeia y Yunara se ajustan antes de los Worlds"
      },
      {
        "text": "Buffs: Kennen, Kindred, Smolder, Swain, Tahm Kench, Vayne, Lucian y Mordekaiser"
      },
      {
        "text": "Hextech Rocketbelt: la Aceleración de habilidades baja de 20 a 10 y sube el daño del efecto activo"
      },
      {
        "text": "Skins HEARTSTEEL Live My Life y Baron Kog'Maw Prestige Classic disponibles el 7 de octubre"
      }
    ],
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "El parche 26.20 es el parche de los Worlds: es la versión en la que se juega la gran competición del año. Riot ajusta fijos de la escena pro como Ambessa y K'Sante, sube a campeones más débiles como Kennen y Kindred, y retoca el Hextech Rocketbelt."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Repeticiones privadas"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "A partir de este parche solo puedes acceder a las repeticiones de las partidas en las que has jugado. Otros jugadores ya no pueden descargar tus repeticiones y las aplicaciones de terceros pierden el acceso a las descargas. Riot explica que quiere cerrar vulnerabilidades explotadas por desarrolladores de trampas. Puedes seguir revisando tus propias partidas desde el cliente."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Campeones"
          }
        ]
      },
      {
        "type": "ul",
        "children": [
          {
            "type": "li",
            "children": [
              {
                "text": "Ambessa: pasiva, Daño 5-30 (+25% AD adicional) → 5-25 (+20% AD adicional)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Ashe: Estadísticas base, Daño de ataque/nivel 3,5 → 3"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Cassiopeia: Estadísticas base, Salud base 630 → 610; Maná base 480 → 450"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Diana: W, Proporción de salud adicional del escudo 11% → 14%"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Kennen: E, Velocidad de ataque adicional 40/50/60/70/80% → 50/60/70/80/90%"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Kindred: W, Modificador contra monstruos 150% → 165%; E, Duración de la ralentización 1 s → 1,5 s; E, Selección de monstruos pequeños: Activada → Eliminada"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "K'Sante: W, Coste de maná 40/45/50/55/60 → 45/50/55/60/65; W, Reducción de daño 30/75% → 25/70%"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Lillia: R, Duración 2,5 s → 2,5/2,75/3 s"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Lucian: Estadísticas base, Daño de ataque 60 + 2,5/nivel → 60 + 2,9/nivel"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Mordekaiser: Q +5/nivel → +7/nivel (10-20); R, Enfriamiento 140/120/100 s → 120/110/100 s"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Neeko: E, Daño 70/105/140/175/210 → 80/115/150/185/220; E, Duración de la inmovilización 1,8/2,1/2,4/2,7/3 s → 2/2,25/2,5/2,75/3 s"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Smolder: R, Curación 100/135/170 (+50% AD adicional) → 100/175/250 (+75% AD adicional)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Swain: Estadísticas base, Resistencia mágica 31 → 34, Armadura 25 → 23; W, Daño 70/105/140/175/210 → 70/115/160/205/250; W, Enfriamiento 22/21/20/19/18 s → 20/19/18/17/16 s"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Tahm Kench: Q, Curación 10/13,75/17,5/21,25/25 → 10/20/30/40/50"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Vayne: Estadísticas base, Regeneración de salud por 5 s 4 + 0,5/nivel → 5,5 + 0,4/nivel; Q, Coste de maná 46/42/38/34/30 → 30"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Yunara: Q, Daño al impactar 5/10/15/20/25 (+20% AP) → 3/8/13/18/23 (+20% AP); W, Se acumula con otras ralentizaciones → Ya no se acumula con otras ralentizaciones"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Objetos"
          }
        ]
      },
      {
        "type": "ul",
        "children": [
          {
            "type": "li",
            "children": [
              {
                "text": "Experimental Hexplate: Modificador a distancia 70% → 50% (35% / 14% → 25% / 10%)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Hextech Rocketbelt: Aceleración de habilidades 20 → 10; Daño del efecto activo 100 (+10% AP) → 135 (+15% AP)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Runaan's Hurricane: Riot da un pequeño paso atrás en un buff que resultaba demasiado fuerte."
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "ARAM"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Bel'Veth: daño infligido 105% → 100%, daño recibido 95% → 100%, tenacidad 20% → 0%. Locke: daño infligido 105% → 115%."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Skins"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Las skins Prestige Classic Baron Kog'Maw, Prestige HEARTSTEEL Live My Life Sett, y HEARTSTEEL Live My Life Ezreal, Kayn, Aphelios, Yone y K'Sante estarán disponibles el 7 de octubre de 2026. El Pase de batalla del Acto II llega con el parche 26.21."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Lo esencial"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Este parche frena a los campeones dominantes de la escena pro y da algo de aire a picks más débiles justo antes de los Worlds. Para saber qué campeón te va tras estos cambios, haz el quiz de RiftMatch."
          }
        ]
      }
    ],
    "sourceUrl": "https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-20-notes"
  },
  {
    "locale": "de",
    "version": "26.20",
    "title": "Patch 26.20: der Worlds-2026-Patch, alle Patch Notes im Überblick",
    "slug": "patch-26-20",
    "type": "live",
    "status": "published",
    "publishedAt": "2026-10-07T18:00:00.000Z",
    "coverImage": "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/ambessa/skins/base/images/ambessa_splash_centered_0.jpg",
    "excerpt": "Patch 26.20, der Worlds-2026-Patch: Pro-Anpassungen für Ambessa, K'Sante und Ashe, überarbeiteter Rocketbelt, private Replays und neue HEARTSTEEL-Skins.",
    "highlights": [
      {
        "text": "Private Replays: Du kannst nur noch Replays deiner eigenen Spiele herunterladen"
      },
      {
        "text": "Pro-Nerfs: Ambessa, K'Sante, Ashe, Cassiopeia und Yunara werden vor den Worlds angepasst"
      },
      {
        "text": "Buffs: Kennen, Kindred, Smolder, Swain, Tahm Kench, Vayne, Lucian und Mordekaiser"
      },
      {
        "text": "Hextech-Raketengürtel: Fähigkeitsbeschleunigung sinkt von 20 auf 10, der Schaden des aktiven Effekts steigt"
      },
      {
        "text": "HEARTSTEEL-Live-My-Life-Skins und Prestige Classic Baron Kog'Maw ab dem 7. Oktober"
      }
    ],
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "Patch 26.20 ist der Worlds-Patch: Auf dieser Version wird der wichtigste Wettbewerb des Jahres gespielt. Riot passt Pro-Klassiker wie Ambessa und K'Sante an, hebt schwächere Champions wie Kennen und Kindred an und überarbeitet den Hextech-Raketengürtel."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Private Replays"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Ab diesem Patch kannst du nur noch auf Replays von Spielen zugreifen, an denen du teilgenommen hast. Andere Spieler können deine Replays nicht mehr herunterladen, und Apps von Drittanbietern verlieren den Zugriff auf Replay-Downloads. Riot will damit Sicherheitslücken schließen, die von Cheat-Entwicklern ausgenutzt wurden. Deine eigenen Spiele kannst du weiterhin im Client ansehen."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Champions"
          }
        ]
      },
      {
        "type": "ul",
        "children": [
          {
            "type": "li",
            "children": [
              {
                "text": "Ambessa: Passive, Schaden 5-30 (+25% Bonus-AD) → 5-25 (+20% Bonus-AD)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Ashe: Basiswerte, Angriffsschaden/Stufe 3,5 → 3"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Cassiopeia: Basiswerte, Basis-Lebenspunkte 630 → 610; Basis-Mana 480 → 450"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Diana: W, Bonus-Leben-Verhältnis des Schilds 11% → 14%"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Kennen: E, Bonus-Angriffstempo 40/50/60/70/80% → 50/60/70/80/90%"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Kindred: W, Monster-Modifikator 150% → 165%; E, Verlangsamungsdauer 1 Sek. → 1,5 Sek.; E, Anvisieren kleiner Monster: Aktiviert → Entfernt"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "K'Sante: W, Manakosten 40/45/50/55/60 → 45/50/55/60/65; W, Schadensreduktion 30/75% → 25/70%"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Lillia: R, Dauer 2,5 Sek. → 2,5/2,75/3 Sek."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Lucian: Basiswerte, Angriffsschaden 60 + 2,5/Stufe → 60 + 2,9/Stufe"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Mordekaiser: Q +5/Stufe → +7/Stufe (10-20); R, Abklingzeit 140/120/100 Sek. → 120/110/100 Sek."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Neeko: E, Schaden 70/105/140/175/210 → 80/115/150/185/220; E, Dauer der Fesselung 1,8/2,1/2,4/2,7/3 Sek. → 2/2,25/2,5/2,75/3 Sek."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Smolder: R, Heilung 100/135/170 (+50% Bonus-AD) → 100/175/250 (+75% Bonus-AD)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Swain: Basiswerte, Magieresistenz 31 → 34, Rüstung 25 → 23; W, Schaden 70/105/140/175/210 → 70/115/160/205/250; W, Abklingzeit 22/21/20/19/18 Sek. → 20/19/18/17/16 Sek."
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Tahm Kench: Q, Heilung 10/13,75/17,5/21,25/25 → 10/20/30/40/50"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Vayne: Basiswerte, Lebenspunkte pro 5 Sek. 4 + 0,5/Stufe → 5,5 + 0,4/Stufe; Q, Manakosten 46/42/38/34/30 → 30"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Yunara: Q, Schaden bei Treffer 5/10/15/20/25 (+20% AP) → 3/8/13/18/23 (+20% AP); W, Stapelt sich mit anderen Verlangsamungen → Stapelt sich nicht mehr mit anderen Verlangsamungen"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Items"
          }
        ]
      },
      {
        "type": "ul",
        "children": [
          {
            "type": "li",
            "children": [
              {
                "text": "Experimental Hexplate: Fernkampf-Modifikator 70% → 50% (35% / 14% → 25% / 10%)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Hextech Rocketbelt: Fähigkeitsbeschleunigung 20 → 10; Schaden des aktiven Effekts 100 (+10% AP) → 135 (+15% AP)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Runaan's Hurricane: Riot nimmt einen zu starken Buff leicht zurück."
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "ARAM"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Bel'Veth: verursachter Schaden 105% → 100%, erlittener Schaden 95% → 100%, Zähigkeit 20% → 0%. Locke: verursachter Schaden 105% → 115%."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Skins"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Die Skins Prestige Classic Baron Kog'Maw, Prestige HEARTSTEEL Live My Life Sett sowie HEARTSTEEL Live My Life Ezreal, Kayn, Aphelios, Yone und K'Sante sind ab dem 7. Oktober 2026 verfügbar. Der Kampfpass von Akt II erscheint mit Patch 26.21."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Das Wichtigste in Kürze"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Der Patch bremst die dominanten Champions der Pro-Szene und gibt schwächeren Picks kurz vor den Worlds etwas Luft. Welcher Champion nach diesen Änderungen zu dir passt, findest du mit dem RiftMatch-Quiz heraus."
          }
        ]
      }
    ],
    "sourceUrl": "https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-20-notes"
  },
  {
    "locale": "it",
    "version": "26.20",
    "title": "Patch 26.20: la patch dei Worlds 2026, tutte le note di aggiornamento",
    "slug": "patch-26-20",
    "type": "live",
    "status": "published",
    "publishedAt": "2026-10-07T18:00:00.000Z",
    "coverImage": "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/ambessa/skins/base/images/ambessa_splash_centered_0.jpg",
    "excerpt": "Patch 26.20, la patch dei Worlds 2026: modifiche pro (Ambessa, K'Sante, Ashe), Rocketbelt rivisto, replay privati e nuove skin HEARTSTEEL.",
    "highlights": [
      {
        "text": "Replay privati: potrai scaricare solo i replay delle tue partite"
      },
      {
        "text": "Nerf pro: Ambessa, K'Sante, Ashe, Cassiopeia e Yunara vengono ritoccati prima dei Worlds"
      },
      {
        "text": "Buff: Kennen, Kindred, Smolder, Swain, Tahm Kench, Vayne, Lucian e Mordekaiser"
      },
      {
        "text": "Hextech Rocketbelt: l'Ability Haste scende da 20 a 10 e aumentano i danni dell'effetto attivo"
      },
      {
        "text": "Skin HEARTSTEEL Live My Life e Baron Kog'Maw Prestige Classic disponibili dal 7 ottobre"
      }
    ],
    "content": [
      {
        "type": "p",
        "children": [
          {
            "text": "La patch 26.20 è la patch dei Worlds: è la versione su cui si gioca la competizione più importante dell'anno. Riot ritocca punti fermi della scena pro come Ambessa e K'Sante, rialza campioni più deboli come Kennen e Kindred e rivede la Hextech Rocketbelt."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Replay privati"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Da questa patch puoi accedere solo ai replay delle partite a cui hai partecipato. Gli altri giocatori non possono più scaricare i tuoi replay e le app di terze parti perdono l'accesso ai download dei replay. Riot spiega di voler chiudere vulnerabilità sfruttate dagli sviluppatori di cheat. Puoi comunque rivedere le tue partite dal client."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Campioni"
          }
        ]
      },
      {
        "type": "ul",
        "children": [
          {
            "type": "li",
            "children": [
              {
                "text": "Ambessa: passiva, Danni 5-30 (+25% AD bonus) → 5-25 (+20% AD bonus)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Ashe: Statistiche base, Danni da attacco/livello 3,5 → 3"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Cassiopeia: Statistiche base, Salute base 630 → 610; Mana base 480 → 450"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Diana: W, Rapporto salute bonus dello scudo 11% → 14%"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Kennen: E, Velocità d'attacco bonus 40/50/60/70/80% → 50/60/70/80/90%"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Kindred: W, Modificatore contro i mostri 150% → 165%; E, Durata del rallentamento 1 s → 1,5 s; E, Bersaglio dei mostri piccoli: Attivato → Rimosso"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "K'Sante: W, Costo in mana 40/45/50/55/60 → 45/50/55/60/65; W, Riduzione dei danni 30/75% → 25/70%"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Lillia: R, Durata 2,5 s → 2,5/2,75/3 s"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Lucian: Statistiche base, Danni da attacco 60 + 2,5/livello → 60 + 2,9/livello"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Mordekaiser: Q +5/livello → +7/livello (10-20); R, Tempo di ricarica 140/120/100 s → 120/110/100 s"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Neeko: E, Danni 70/105/140/175/210 → 80/115/150/185/220; E, Durata dell'immobilizzazione 1,8/2,1/2,4/2,7/3 s → 2/2,25/2,5/2,75/3 s"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Smolder: R, Cura 100/135/170 (+50% AD bonus) → 100/175/250 (+75% AD bonus)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Swain: Statistiche base, Resistenza magica 31 → 34, Armatura 25 → 23; W, Danni 70/105/140/175/210 → 70/115/160/205/250; W, Tempo di ricarica 22/21/20/19/18 s → 20/19/18/17/16 s"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Tahm Kench: Q, Cura 10/13,75/17,5/21,25/25 → 10/20/30/40/50"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Vayne: Statistiche base, Salute ogni 5 sec 4 + 0,5/livello → 5,5 + 0,4/livello; Q, Costo in mana 46/42/38/34/30 → 30"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Yunara: Q, Danni all'impatto 5/10/15/20/25 (+20% AP) → 3/8/13/18/23 (+20% AP); W, Si somma agli altri rallentamenti → Non si somma più agli altri rallentamenti"
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Oggetti"
          }
        ]
      },
      {
        "type": "ul",
        "children": [
          {
            "type": "li",
            "children": [
              {
                "text": "Experimental Hexplate: Modificatore a distanza 70% → 50% (35% / 14% → 25% / 10%)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Hextech Rocketbelt: Ability Haste 20 → 10; Danni dell'effetto attivo 100 (+10% AP) → 135 (+15% AP)"
              }
            ]
          },
          {
            "type": "li",
            "children": [
              {
                "text": "Runaan's Hurricane: Riot fa un piccolo passo indietro su un buff risultato troppo forte."
              }
            ]
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "ARAM"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Bel'Veth: danni inflitti 105% → 100%, danni subiti 95% → 100%, tenacia 20% → 0%. Locke: danni inflitti 105% → 115%."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Skin"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Le skin Prestige Classic Baron Kog'Maw, Prestige HEARTSTEEL Live My Life Sett e HEARTSTEEL Live My Life Ezreal, Kayn, Aphelios, Yone e K'Sante sono disponibili dal 7 ottobre 2026. Il Pass battaglia dell'Atto II arriva con la patch 26.21."
          }
        ]
      },
      {
        "type": "h2",
        "children": [
          {
            "text": "Da ricordare"
          }
        ]
      },
      {
        "type": "p",
        "children": [
          {
            "text": "Questa patch frena i campioni dominanti della scena pro e dà un po' di respiro ai pick più deboli poco prima dei Worlds. Per scoprire quale campione fa per te dopo queste modifiche, fai il quiz di RiftMatch."
          }
        ]
      }
    ],
    "sourceUrl": "https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-20-notes"
  }
]

export const up: MigrationModule['up'] = async (payload) => {
  for (const d of patches) {
    const ex = await payload.find({ collection: 'patch-notes', where: { and: [{ slug: { equals: d.slug } }, { locale: { equals: d.locale } }] }, limit: 1 })
    if (ex.docs.length > 0) { console.log(`skip ${d.slug} ${d.locale}`); continue }
    await payload.create({ collection: 'patch-notes', data: d })
    console.log(`ok ${d.locale.toUpperCase()} ${d.title}`)
  }
}
