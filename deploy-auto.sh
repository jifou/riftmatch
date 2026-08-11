#!/bin/bash
# deploy-auto.sh — Déploiement automatique RiftMatch (appelé par cron)
# Cron : 0 7 * * * /root/riftmatch/deploy-auto.sh >> /var/log/riftmatch-deploy.log 2>&1

set -euo pipefail

# PATH complet pour cron (pas le même que le shell interactif)
export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_PREFIX="[$(date '+%Y-%m-%d %H:%M:%S')]"

log()  { echo "$LOG_PREFIX ▶ $1"; }
ok()   { echo "$LOG_PREFIX ✓ $1"; }
fail() { echo "$LOG_PREFIX ✗ $1"; exit 1; }

log "=== Déploiement RiftMatch ==="
cd "$REPO_DIR"

# 1. Pull du code
log "git pull..."
git pull origin main || fail "git pull a échoué"
ok "Code à jour"

# 2. Build + démarrage
log "docker compose build..."
docker compose build --no-cache payload astro || fail "Build Docker échoué"
ok "Images buildées"

log "docker compose up..."
docker compose up -d --remove-orphans || fail "docker compose up échoué"
ok "Services démarrés"

# 3. Attendre que Payload soit prêt (migrations auto)
log "Attente Payload (30s)..."
sleep 30

# 4. Vérification
SERVICES=("lolp_mongo" "lolp_payload" "lolp_astro" "lolp_nginx")
for svc in "${SERVICES[@]}"; do
  STATUS=$(docker inspect --format='{{.State.Status}}' "$svc" 2>/dev/null || echo "absent")
  if [ "$STATUS" = "running" ]; then
    ok "$svc → running"
  else
    echo "$LOG_PREFIX ⚠ $svc → $STATUS"
  fi
done

log "=== Déploiement terminé ==="
