import type { MigrationModule } from './runner'

export const id = '156-patchnote-26-15'
export const description = "Patch 26.15 — Lancement de League Classic, refonte de Bel'Veth et début de la Saison 3"

export const up: MigrationModule['up'] = async (payload) => {
  const existing = await payload.find({
    collection: 'patch-notes',
    where: { slug: { equals: 'patch-26-15' } },
  })
  if (existing.docs.length > 0) {
    console.log('→ skip')
    return
  }

  await payload.create({
    collection: 'patch-notes',
    data: {
      version: '26.15',
      title: "Patch 26.15 — League Classic débarque, refonte de Bel'Veth",
      slug: 'patch-26-15',
      type: 'live',
      status: 'published',
      publishedAt: '2026-07-29T08:00:00.000Z',
      coverImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_0.jpg',
      excerpt: "Le patch 26.15 marque le lancement de League Classic et le début de la Saison 3, avec une refonte majeure de Bel'Veth orientée late game, des nerfs sur Locke, Mordekaiser, Naafiri, Riven et Sylas, et des buffs pour Alistar, Kai'Sa, Maokai, Volibear et Zac.",
      sourceUrl: 'https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-15-notes/',
      highlights: [
        { text: "League Classic — nouveau mode permanent avec anciens runes, objets et 60 champions classiques" },
        { text: "Début de la Saison 3 (Ranked)" },
        { text: "Refonte de Bel'Veth — early game affaibli, meilleur scaling" },
        { text: "Nerfs : Locke, Mordekaiser, Naafiri, Riven, Sylas" },
        { text: "Buffs : Alistar, Kai'Sa, Maokai, Volibear, Zac" },
        { text: "Objets : Bastionbreaker buffé, Jack of All Trades nerfé" },
      ],
      content: [
        { type: 'h2', children: [{ text: "League Classic et Saison 3" }] },
        { type: 'p', children: [{ text: "Le patch 26.15, déployé le 29 juillet 2026, marque deux lancements majeurs : League Classic, un nouveau mode de jeu permanent qui recrée l'expérience des débuts de League of Legends avec les anciens runes et maîtrises, les anciens objets, les sorts d'invocateur d'origine et une liste de départ de 60 champions classiques (dont beaucoup avec leurs kits d'avant refonte) sur une reconstitution de l'ancienne Faille de l'Invocateur. Le patch marque également le coup d'envoi de la Saison 3 en classé." }] },
        { type: 'h2', children: [{ text: "Refonte de Bel'Veth" }] },
        { type: 'h4', children: [{ text: "Bel'Veth" }] },
        { type: 'p', children: [{ text: "Bel'Veth reçoit la plus grosse mise à jour de gameplay du patch. Riot a remanié une grande partie de son kit pour réduire son potentiel d'invasion oppressif en early game tout en en faisant une junglière de fin de partie plus solide. Ses statistiques de base sont revues à la baisse (moins de vie, d'armure et de dégâts d'attaque de départ, et un temps de recharge plus long entre ses lancers de Q au rang 1). Sa passive donne désormais de la vitesse d'attaque pendant une durée plutôt que pour un nombre d'attaques, afin de mieux s'accorder avec les temps de lancer plus longs entre ses directions de Q. Son E et son Q n'ont plus besoin qu'elle ait d'abord attaqué la cible pour appliquer leurs effets, avec des dégâts d'explosion et un soin par vie bonus nettement augmentés." }] },
        { type: 'h2', children: [{ text: "Nerfs" }] },
        { type: 'h4', children: [{ text: "Locke" }] },
        { type: 'p', children: [{ text: "Locke, pensé comme une menace de early game qui s'effondre nettement en late, n'était pas assez puni en fin de partie dans les rangs intermédiaires, ce qui le rendait disproportionnellement puissant. Il perd 35 points de vie de base, ainsi que de la vitesse de déplacement évolutive et de la Grey Health." }] },
        { type: 'h4', children: [{ text: "Mordekaiser" }] },
        { type: 'p', children: [{ text: "Le patch précédent avait trop buffé Mordekaiser, qui voit donc son vol de statistiques réduit : le vol de statistiques de son ultime (R) passe de 13% à 10%, et le temps de recharge de son E passe de 18-10 à 16-8 secondes." }] },
        { type: 'h4', children: [{ text: "Naafiri" }] },
        { type: 'p', children: [{ text: "Les dégâts de l'ultime (R) de Naafiri passent de 150/225/300 (+120% AD) à 125/200/275 (+100% AD bonus), et les dégâts par Comparse tombent de 25/22.5/30 (+12%) à 12.5/20/27.5 (+10% AD bonus)." }] },
        { type: 'h4', children: [{ text: "Riven" }] },
        { type: 'p', children: [{ text: "Le bonus d'AD de l'ultime (R) de Riven passe de 25% à 20%, et le ratio de dégâts bonus AD minimum de son deuxième coup d'ultime passe de 60% (88% max) à 55% (65% max)." }] },
        { type: 'h4', children: [{ text: "Sylas" }] },
        { type: 'p', children: [{ text: "Les dégâts du premier coup de Q de Sylas passent de 40-140 (+45% AP) à 40-120 (+40% AP)." }] },
        { type: 'h2', children: [{ text: "Buffs" }] },
        { type: 'h4', children: [{ text: "Alistar" }] },
        { type: 'p', children: [{ text: "Pour l'aider face au méta support axé sur l'itinérance, Alistar voit sa croissance d'armure passer de 4.7 à 5.2, le temps de recharge de son E (Fronde Élastique) passer de 22-10 à 21-9 secondes, et sa vitesse de déplacement de base passer de 330 à 335." }] },
        { type: 'h4', children: [{ text: "Kai'Sa" }] },
        { type: 'p', children: [{ text: "Les dégâts au contact de la passive de Kai'Sa passent de 4-24 (+12% AP), +1-6 (+3% AP) par stack à 4-30 (+12% AP), +1-8 (+3% AP) par stack." }] },
        { type: 'h4', children: [{ text: "Maokai" }] },
        { type: 'p', children: [{ text: "Le modificateur de dégâts sur monstres de son Q passe de 140-180% à 150-190%, et son ratio d'AP passe de 40% à 50%." }] },
        { type: 'h4', children: [{ text: "Volibear" }] },
        { type: 'p', children: [{ text: "Le temps de recharge de son Q passe de 14/13/12/11/10 à 12/11.5/11/10.5/10 secondes selon le rang du sort." }] },
        { type: 'h4', children: [{ text: "Zac" }] },
        { type: 'p', children: [{ text: "Sa croissance d'armure passe de 4.7 à 5.2, et le temps de recharge de son E passe de 22-10 à 21-9 secondes." }] },
        { type: 'h2', children: [{ text: "Systèmes & Objets" }] },
        { type: 'ul', children: [
          { type: 'li', children: [{ text: "Bastionbreaker — prix réduit et dégâts de Shaped Charge augmentés pour le rendre plus accessible" }] },
          { type: 'li', children: [{ text: "Jack of All Trades (rune) — nerfé pour demander un build plus spécialisé afin d'atteindre ses paliers d'Adaptive Force les plus hauts" }] },
          { type: 'li', children: [{ text: "Sundered Sky, Terminus et Yun Tal Wildarrows — ajustés dans le cadre d'une passe sur les objets de fighter" }] },
        ] },
        { type: 'blockquote', children: [{ text: "Un patch charnière qui ouvre la Saison 3 avec le retour nostalgique de League Classic, pendant que Bel'Veth change de philosophie pour devenir une menace de fin de partie plutôt qu'une snowballeuse de early game." }] },
      ],
    },
  } as any)
  console.log('✅ Patch 26.15 créé')
}
