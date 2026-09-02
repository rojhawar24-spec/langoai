#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
command -v npm >/dev/null 2>&1 || { echo "npm is niet gevonden. Installeer Node.js 22 LTS en probeer opnieuw."; exit 1; }
npm install --no-audit --no-fund
npm run typecheck
npm run build
echo "KLAAR - dependencies, typecheck en build zijn geslaagd."
