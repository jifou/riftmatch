/**
 * Compat pour les anciennes migrations affiliate (002, 004, 005, 006, 014).
 * Elles ont ete ecrites avec product.affiliateUrl, alors que la collection
 * exige maintenant un tableau `links` (au moins une ligne). On convertit a la volee.
 * Le nom commence par "runner" pour que le runner ne le charge pas comme migration.
 */
export function withLegacyAffiliate(payload: any): any {
  return new Proxy(payload, {
    get(target, prop, receiver) {
      if (prop !== 'create') return Reflect.get(target, prop, receiver)
      return (args: any) => {
        if (args?.collection !== 'affiliate-blocks' || !args.data) return target.create(args)
        const data = { ...args.data }
        const url = data.product?.affiliateUrl
        if (!data.links?.length && url) {
          const locale = ['fr', 'en', 'es'].includes(data.locale) ? data.locale : 'fr'
          data.links = [{ locale, url }]
        }
        if (data.product) {
          const { affiliateUrl, ...product } = data.product
          data.product = product
        }
        return target.create({ ...args, data })
      }
    },
  })
}
