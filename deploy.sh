#!/bin/bash
# ══════════════════════════════════════════════════════════════════════════════
#  deploy.sh — Script de déploiement RiftMatch sur Hostinger VPS
#
#  Usage :
#    chmod +x deploy.sh
#    ./deploy.sh             # déploiement complet
#    ./deploy.sh --ssl-init  # première fois : génère les certificats SSL
#    ./deploy.sh --seed      # déploiement + seed de la base de données
# ══════════════════════════════════════════════════════════════════════════════

set -e  # arrêt immédiat si une commande échoue

# ── Couleurs terminal ────────────────────────────────────────────────────────
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
BLUE='\033[0;34m'; BOLD='\033[1m'; NC='\033[0m'

log()     { echo -e "${BLUE}▶${NC} $1"; }
success() { echo -e "${GREEN}✓${NC} $1"; }
warn()    { echo -e "${YELLOW}⚠${NC} $1"; }
error()   { echo -e "${RED}✗${NC} $1"; exit 1; }

COMPOSE="docker compose -f docker-compose.yml -f docker-compose.prod.yml"

# ── Vérifications préalables ─────────────────────────────────────────────────
echo ""
echo -e "${BOLD}╔══════════════════════════════════════════╗${NC}"
echo -e "${BOLD}║   RiftMatch — Déploiement Production     ║${NC}"
echo -e "${BOLD}╚══════════════════════════════════════════╝${NC}"
echo ""

# .env.production requis
if [ ! -f ".env.production" ]; then
  error ".env.production introuvable. Copie .env.production.example et remplis les valeurs."
fi

# Charger les variables d'environnement
export $(grep -v '^#' .env.production | xargs)

# Vérifier les variables critiques
[ -z "$PAYLOAD_SECRET" ]      && error "PAYLOAD_SECRET non défini dans .env.production"
[ -z "$ADMIN_EMAIL" ]         && error "ADMIN_EMAIL non défini dans .env.production"
[ -z "$AMAZON_AFFILIATE_TAG" ] && warn "AMAZON_AFFILIATE_TAG non défini — affiliation désactivée"

# ── Mode SSL Init (première installation uniquement) ─────────────────────────
if [ "$1" = "--ssl-init" ]; then
  log "Génération des certificats SSL Let's Encrypt..."

  # Démarrer nginx en HTTP seulement (config temporaire sans SSL)
  docker compose up -d nginx

  # Obtenir les certificats
  docker compose run --rm certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email "$ADMIN_EMAIL" \
    --agree-tos \
    --no-eff-email \
    -d riftmatch.io \
    -d www.riftmatch.io

  docker compose run --rm certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email "$ADMIN_EMAIL" \
    --agree-tos \
    --no-eff-email \
    -d cms.riftmatch.io

  success "Certificats SSL générés !"
  log "Redémarre avec ./deploy.sh pour activer HTTPS."
  exit 0
fi

# ── Pull du code ─────────────────────────────────────────────────────────────
log "Pull des dernières modifications..."
git pull origin main
success "Code à jour"

# ── Build des images ─────────────────────────────────────────────────────────
log "Build des images Docker..."
$COMPOSE build --no-cache payload astro
success "Images buildées"

# ── Démarrage des services ───────────────────────────────────────────────────
log "Démarrage des services..."
$COMPOSE up -d --remove-orphans
success "Services démarrés"

# ── Seed (si demandé ou première installation) ───────────────────────────────
if [ "$1" = "--seed" ] || [ "$2" = "--seed" ]; then
  log "Seed de la base de données..."
  sleep 5  # attendre que MongoDB soit prêt
  ADMIN_PASSWORD="$ADMIN_PASSWORD" ADMIN_EMAIL="$ADMIN_EMAIL" \
    $COMPOSE --profile seed run --rm seed
  success "Base de données seedée"
fi

# ── Vérification des services ────────────────────────────────────────────────
echo ""
log "Vérification des services..."
sleep 3

SERVICES=("lolp_mongo" "lolp_payload" "lolp_astro" "lolp_nginx")
ALL_OK=true

for svc in "${SERVICES[@]}"; do
  STATUS=$(docker inspect --format='{{.State.Status}}' "$svc" 2>/dev/null || echo "absent")
  if [ "$STATUS" = "running" ]; then
    success "$svc → running"
  else
    warn "$svc → $STATUS"
    ALL_OK=false
  fi
done

echo ""
if [ "$ALL_OK" = true ]; then
  echo -e "${GREEN}${BOLD}🚀 Déploiement réussi !${NC}"
  echo -e "   Frontend : ${BLUE}https://riftmatch.io${NC}"
  echo -e "   CMS      : ${BLUE}https://cms.riftmatch.io${NC}"
else
  warn "Certains services ne sont pas démarrés. Vérifie avec : docker compose logs"
fi
echo ""
