/**
 * seed.mjs — Migration / seed de la base de données RiftMatch
 *
 * Gère 2 cas :
 *   1. Première installation (prod) : crée le compte admin + insère les blocs affiliate
 *   2. Mise à jour (--update) : met à jour les blocs existants sans toucher au compte admin
 *
 * Usage :
 *   node scripts/seed.mjs                    # seed complet (première fois)
 *   node scripts/seed.mjs --update           # met à jour les produits affiliate seulement
 *   node scripts/seed.mjs --dry-run          # aperçu sans modifier la BDD
 *
 * Variables d'environnement :
 *   MONGODB_URI        URL MongoDB  (défaut: mongodb://localhost:27017/lolpersonnality)
 *   ADMIN_EMAIL        Email admin  (défaut: admin@riftmatch.io)
 *   ADMIN_PASSWORD     Mot de passe admin  (REQUIS en production)
 *   PAYLOAD_SECRET     Secret Payload      (REQUIS en production)
 */

import { MongoClient } from 'mongodb'
import bcrypt from 'bcryptjs'
import { randomBytes } from 'crypto'

// ── Config ────────────────────────────────────────────────────────────────────

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/lolpersonnality'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@riftmatch.io'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD
const IS_UPDATE = process.argv.includes('--update')
const IS_DRY = process.argv.includes('--dry-run')

const DISCLOSURE = "Lien affilié Amazon — nous percevons une commission sans surcoût pour vous."

// ── Données produits ──────────────────────────────────────────────────────────
// Pour changer le tag affilié : modifier AMAZON_AFFILIATE_TAG dans .env
// Il est injecté automatiquement par AffiliateBlock.astro — pas besoin de le mettre ici.

const AFFILIATE_PRODUCTS = [
  // ── Homepage Hero (rotation aléatoire) ──────────────────────────────────
  {
    title: "HyperX Cloud Alpha — Homepage Hero",
    placement: "homepage-hero",
    active: true,
    roles: ["support", "all"],
    product: {
      name: "HyperX Cloud Alpha",
      tagline: "Son dual-chamber, confort 24h non-stop",
      imageUrl: "https://m.media-amazon.com/images/I/71GG0SBmJEL._AC_SL1500_.jpg",
      affiliateUrl: "https://www.amazon.fr/HyperX-Cloud-Alpha-Casque-Micro-Gaming/dp/B076GT6XJ9",
      ctaText: "Voir sur Amazon →",
      badge: "Top Ventes",
    },
    disclosure: DISCLOSURE,
  },
  {
    title: "Razer BlackShark V2 X — Homepage Hero",
    placement: "homepage-hero",
    active: true,
    roles: ["jungle", "all"],
    product: {
      name: "Razer BlackShark V2 X",
      tagline: "Son surround 7.1, micro hyperclair",
      imageUrl: "https://m.media-amazon.com/images/I/61RMuKJIJcL._AC_SL1500_.jpg",
      affiliateUrl: "https://www.amazon.fr/Razer-BlackShark-Casque-Gaming-filaire/dp/B08BFDRG8H",
      ctaText: "Voir sur Amazon →",
      badge: "Choix Esport",
    },
    disclosure: DISCLOSURE,
  },

  // ── Quiz Résultats (rotation aléatoire) ─────────────────────────────────
  {
    title: "Logitech G502 X — Quiz Résultats",
    placement: "quiz-results",
    active: true,
    roles: ["adc", "mage", "all"],
    product: {
      name: "Logitech G502 X",
      tagline: "Précision ultime — capteur HERO 25K",
      imageUrl: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg",
      affiliateUrl: "https://www.amazon.fr/Logitech-Souris-Gaming-Filaire-optique-m%C3%A9canique/dp/B07W6HSTNR",
      ctaText: "Voir sur Amazon →",
      badge: "Recommandé",
    },
    disclosure: DISCLOSURE,
  },
  {
    title: "SteelSeries Rival 3 — Quiz Résultats",
    placement: "quiz-results",
    active: true,
    roles: ["mage", "assassin"],
    product: {
      name: "SteelSeries Rival 3",
      tagline: "Léger, précis, parfait pour LoL",
      imageUrl: "https://m.media-amazon.com/images/I/61tCXPPqpWL._AC_SL1500_.jpg",
      affiliateUrl: "https://www.amazon.fr/SteelSeries-Rival-Souris-Gaming-Optique/dp/B083MNJZFC",
      ctaText: "Voir sur Amazon →",
      badge: "Rapport qualité/prix",
    },
    disclosure: DISCLOSURE,
  },

  // ── Quiz Résultats Bottom ────────────────────────────────────────────────
  {
    title: "SteelSeries QcK Heavy XXL — Quiz Bottom",
    placement: "quiz-results-bottom",
    active: true,
    roles: ["all"],
    product: {
      name: "SteelSeries QcK Heavy XXL",
      tagline: "Couvre tout le bureau — grip absolu",
      imageUrl: "https://m.media-amazon.com/images/I/71r7eTJiTML._AC_SL1500_.jpg",
      affiliateUrl: "https://www.amazon.fr/SteelSeries-QcK-XXL-Souris-Gaming/dp/B00WAA2704",
      ctaText: "Voir sur Amazon →",
      badge: "Meilleure Vente",
    },
    disclosure: DISCLOSURE,
  },

  // ── Page Champion — Sidebar (ciblage contextuel par rôle) ───────────────
  {
    title: "Corsair K70 Core RGB — Tank/Fighter",
    placement: "champion-sidebar",
    active: true,
    roles: ["tank", "fighter", "all"],
    product: {
      name: "Corsair K70 Core RGB",
      tagline: "Switches MLX Red, repose-paume inclus",
      imageUrl: "https://m.media-amazon.com/images/I/71Bxd3GnHEL._AC_SL1500_.jpg",
      affiliateUrl: "https://www.amazon.fr/Corsair-Core-Clavier-M%C3%A9canique-Repose-Paume/dp/B0CH8WZNM8",
      ctaText: "Voir sur Amazon →",
      badge: "Promo",
    },
    disclosure: DISCLOSURE,
  },
  {
    title: "HyperX Pulsefire Haste 2 — ADC/Assassin",
    placement: "champion-sidebar",
    active: true,
    roles: ["adc", "assassin"],
    product: {
      name: "HyperX Pulsefire Haste 2",
      tagline: "Ultra-légère 53g, clic ultra-précis",
      imageUrl: "https://m.media-amazon.com/images/I/51MKiJT2iYL._AC_SL1500_.jpg",
      affiliateUrl: "https://www.amazon.fr/HyperX-Pulsefire-Haste-Gaming-PixArt/dp/B0B8MMKDWL",
      ctaText: "Voir sur Amazon →",
      badge: "Nouveau",
    },
    disclosure: DISCLOSURE,
  },
  {
    title: "Logitech G PRO X Superlight 2 — ADC/Assassin",
    placement: "champion-sidebar",
    active: true,
    roles: ["adc", "assassin"],
    product: {
      name: "Logitech G PRO X Superlight 2",
      tagline: "60g — La souris des pros ADC en compétition",
      imageUrl: "https://m.media-amazon.com/images/I/51i9LuDIFKL._AC_SL1500_.jpg",
      affiliateUrl: "https://www.amazon.fr/Logitech-SUPERLIGHT-Gaming-Wireless-Optical/dp/B09NBRHQ3Z",
      ctaText: "Voir sur Amazon →",
      badge: "Choix Pro",
    },
    disclosure: DISCLOSURE,
  },
  {
    title: "HyperX Cloud II Wireless — Support/Jungle",
    placement: "champion-sidebar",
    active: true,
    roles: ["support", "jungle"],
    product: {
      name: "HyperX Cloud II Wireless",
      tagline: "Sans fil 30h — Communication parfaite",
      imageUrl: "https://m.media-amazon.com/images/I/71rqFkTwpiL._AC_SL1500_.jpg",
      affiliateUrl: "https://www.amazon.fr/HyperX-Cloud-Wireless-Gaming-Headset/dp/B08HC3SXBZ",
      ctaText: "Voir sur Amazon →",
      badge: "Sans fil",
    },
    disclosure: DISCLOSURE,
  },
  {
    title: "Corsair K65 RGB Mini — Mid/Mage",
    placement: "champion-sidebar",
    active: true,
    roles: ["mage", "mid"],
    product: {
      name: "Corsair K65 RGB Mini 60%",
      tagline: "Compact 60%, switches Cherry MX Speed",
      imageUrl: "https://m.media-amazon.com/images/I/71UD5IOIJIL._AC_SL1500_.jpg",
      affiliateUrl: "https://www.amazon.fr/CORSAIR-K65-Mini-Tenkeyless-Mechanical/dp/B08VH6ZKXB",
      ctaText: "Voir sur Amazon →",
      badge: "APM Max",
    },
    disclosure: DISCLOSURE,
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function log(msg, type = 'info') {
  const icons = { info: '  ·', ok: '  ✓', warn: '  ⚠', error: '  ✗', title: '\n═' }
  console.log(`${icons[type] || '  ·'} ${msg}`)
}

function dryLog(msg) {
  console.log(`  [DRY-RUN] ${msg}`)
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n╔══════════════════════════════════════════╗')
  console.log('║  RiftMatch — Seed / Migration            ║')
  console.log('╚══════════════════════════════════════════╝')
  console.log(`\n  Mode    : ${IS_DRY ? 'DRY-RUN (aucune modification)' : IS_UPDATE ? 'UPDATE (produits seulement)' : 'SEED COMPLET'}`)
  console.log(`  DB      : ${MONGODB_URI.replace(/:\/\/.*@/, '://***@')}`)

  // ── Connexion ─────────────────────────────────────────────────────────────
  const client = new MongoClient(MONGODB_URI)
  await client.connect()
  const db = client.db()
  log('Connecté à MongoDB', 'ok')

  // ── 1. Compte admin ───────────────────────────────────────────────────────
  if (!IS_UPDATE) {
    console.log('\n  ── Compte admin ──')

    const usersCol = db.collection('users')
    const existing = await usersCol.findOne({ email: ADMIN_EMAIL })

    if (existing) {
      log(`Compte admin déjà existant : ${ADMIN_EMAIL}`, 'warn')
    } else {
      if (!ADMIN_PASSWORD) {
        log('ADMIN_PASSWORD non défini — génération d\'un mot de passe temporaire', 'warn')
      }
      const password = ADMIN_PASSWORD || randomBytes(12).toString('hex')
      const hash = await bcrypt.hash(password, 12)

      if (IS_DRY) {
        dryLog(`Créerait admin : ${ADMIN_EMAIL}`)
      } else {
        await usersCol.insertOne({
          email: ADMIN_EMAIL,
          password: hash,
          loginAttempts: 0,
          lockUntil: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
        log(`Compte admin créé : ${ADMIN_EMAIL}`, 'ok')
        if (!ADMIN_PASSWORD) {
          console.log(`\n  ┌─────────────────────────────────────────────┐`)
          console.log(`  │  MOT DE PASSE TEMPORAIRE : ${password}  │`)
          console.log(`  │  Changez-le immédiatement dans le CMS !     │`)
          console.log(`  └─────────────────────────────────────────────┘\n`)
        }
      }
    }
  }

  // ── 2. Blocs affiliate ────────────────────────────────────────────────────
  console.log('\n  ── Blocs affiliate ──')

  const col = db.collection('affiliate-blocks')

  // Supprimer l'index unique sur placement s'il existe encore
  try {
    await col.dropIndex('placement_1')
    log('Index unique sur placement supprimé', 'ok')
  } catch {
    // Pas d'index — OK
  }

  let inserted = 0, updated = 0, skipped = 0

  for (const block of AFFILIATE_PRODUCTS) {
    const filter = { title: block.title }
    const existing = await col.findOne(filter)

    if (IS_DRY) {
      dryLog(`${existing ? 'Mettrait à jour' : 'Insérerait'} : ${block.title}`)
      continue
    }

    if (existing) {
      // Mise à jour douce : ne modifie que les champs produit, pas les _id
      await col.updateOne(filter, {
        $set: {
          placement: block.placement,
          active: block.active,
          roles: block.roles,
          product: block.product,
          disclosure: block.disclosure,
          updatedAt: new Date(),
        }
      })
      updated++
      log(`Mis à jour : ${block.title}`, 'ok')
    } else {
      await col.insertOne({
        ...block,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      inserted++
      log(`Inséré    : ${block.title}`, 'ok')
    }
  }

  // ── Résumé ─────────────────────────────────────────────────────────────
  console.log('\n  ── Résumé ──')
  if (IS_DRY) {
    log(`DRY-RUN terminé — aucune modification effectuée`, 'warn')
  } else {
    log(`${inserted} produit(s) insérés`, 'ok')
    log(`${updated} produit(s) mis à jour`, 'ok')

    // Afficher le total par placement
    const summary = await col.aggregate([
      { $group: { _id: '$placement', count: { $sum: 1 }, actifs: { $sum: { $cond: ['$active', 1, 0] } } } },
      { $sort: { _id: 1 } }
    ]).toArray()

    console.log('\n  Emplacements :')
    summary.forEach(s => {
      console.log(`    ${s._id.padEnd(25)} → ${s.actifs}/${s.count} actifs`)
    })
  }

  await client.close()
  console.log('\n  ✓ Terminé.\n')
}

main().catch(err => {
  console.error('\n  ✗ Erreur :', err.message)
  process.exit(1)
})
