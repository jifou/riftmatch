// Pas de valeur de secours: un secret absent doit empecher le demarrage.
export function requireSecret(): string {
  const s = process.env.PAYLOAD_SECRET
  if (!s) throw new Error('PAYLOAD_SECRET manquant')
  return s
}
