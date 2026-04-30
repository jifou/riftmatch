import type { MigrationModule } from './runner'

export const id = '024-affiliate-deduplicate'
export const description =
  'Déduplique les blocs affiliés : 1 produit = 1 bloc. Fusionne les links[] des doublons et désactive les copies inutiles.'

/**
 * Produits canoniques : un seul bloc actif par produit, avec tous les liens.
 * Les doublons (même product.name) seront désactivés.
 * On garde le bloc qui a le plus de links[], ou le plus récent.
 */
export const up: MigrationModule['up'] = async (payload) => {
  const res = await payload.find({
    collection: 'affiliate-blocks',
    limit: 200,
    pagination: false,
  })

  const docs = res.docs as any[]
  console.log(`📦 ${docs.length} blocs en base`)

  // Grouper par product.name
  const byName = new Map<string, any[]>()
  for (const doc of docs) {
    const name = (doc.product?.name ?? '').trim().toLowerCase()
    if (!name) continue
    if (!byName.has(name)) byName.set(name, [])
    byName.get(name)!.push(doc)
  }

  let kept = 0
  let disabled = 0
  let merged = 0

  for (const [name, group] of byName.entries()) {
    if (group.length <= 1) {
      kept++
      console.log(`  ✓ (seul) ${group[0].title}`)
      continue
    }

    // Trier : plus de links d'abord, puis plus récent
    group.sort((a: any, b: any) => {
      const la = (a.links?.length ?? 0)
      const lb = (b.links?.length ?? 0)
      if (lb !== la) return lb - la
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    })

    const canonical = group[0]
    const duplicates = group.slice(1)

    // Fusionner tous les links[] uniques vers le canonique
    const allLinks: { locale: string; url: string }[] = [...(canonical.links ?? [])]
    for (const dup of duplicates) {
      for (const link of (dup.links ?? [])) {
        const already = allLinks.some(l => l.locale === link.locale)
        if (!already && link.url) {
          allLinks.push({ locale: link.locale, url: link.url })
        }
      }
    }

    // Mettre à jour le canonique si des links ont été ajoutés
    if (allLinks.length > (canonical.links?.length ?? 0)) {
      await payload.update({
        collection: 'affiliate-blocks',
        id: canonical.id,
        data: { links: allLinks, active: true } as any,
      })
      merged++
      console.log(`  🔀 Fusion → ${canonical.title} (${allLinks.length} liens)`)
    } else {
      kept++
      console.log(`  ✓ (canonical) ${canonical.title}`)
    }

    // Désactiver les doublons
    for (const dup of duplicates) {
      await payload.update({
        collection: 'affiliate-blocks',
        id: dup.id,
        data: { active: false } as any,
      })
      disabled++
      console.log(`  ✗ (désactivé) ${dup.title}`)
    }
  }

  console.log(`\n📊 Résumé : ${kept} conservés, ${merged} fusionnés, ${disabled} désactivés`)
  console.log('✅ Migration 024 terminée — 1 produit = 1 bloc actif')
}
