@echo off
setlocal
cd /d "%~dp0"
where npm >nul 2>&1
if errorlevel 1 (
  echo npm is niet gevonden. Installeer Node.js 22 LTS en probeer opnieuw.
  exit /b 1
)
echo Dependencies installeren...
npm install --no-audit --no-fund
if errorlevel 1 (
  echo Dependency-installatie mislukt.
  exit /b 1
)
echo TypeScript controleren...
npm run typecheck
if errorlevel 1 (
  echo TypeScript typecheck mislukt.
  exit /b 1
)
echo Productie-build controleren...
npm run build
if errorlevel 1 (
  echo Productie-build mislukt.
  exit /b 1
)
echo.
echo KLAAR - dependencies, typecheck en build zijn geslaagd.
exit /b 0
