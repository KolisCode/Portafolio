#!/usr/bin/env bash
set -euo pipefail

REMOTE_HOST="droplet"
REMOTE_PATH="/var/www/portafolio"
DOMAIN="jhohanbustamante.kolisevm.online"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }

CURRENT_BRANCH=$(git -C "$SCRIPT_DIR" rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "master" ]; then
  echo "ERROR: Debes estar en 'master' para deployar (actual: $CURRENT_BRANCH)"
  exit 1
fi

if ! git -C "$SCRIPT_DIR" diff --quiet || ! git -C "$SCRIPT_DIR" diff --cached --quiet; then
  echo "ERROR: Hay cambios sin commitear. Haz commit o stash antes de deployar."
  exit 1
fi

log "=== Deploy portafolio iniciado ==="

log "[1/4] Push a origin/master..."
git -C "$SCRIPT_DIR" push origin master
log "      push OK"

log "[2/4] vite build..."
cd "$SCRIPT_DIR"
npm run build
log "      build OK"

log "[3/4] rsync al droplet..."
rsync -az --delete "$SCRIPT_DIR/dist/" "$REMOTE_HOST:$REMOTE_PATH/"
log "      rsync OK"

log "[4/4] nginx reload..."
ssh "$REMOTE_HOST" "nginx -t && systemctl reload nginx"
log "      nginx OK"

sleep 2
HTTP_CODE=$(curl -s -o /dev/null -w '%{http_code}' --connect-timeout 5 "https://$DOMAIN" 2>/dev/null || echo "000")
COMMIT=$(git -C "$SCRIPT_DIR" rev-parse --short HEAD)
log "      HTTPS $HTTP_CODE en $DOMAIN"
log "=== Deploy completado ($COMMIT) ==="
