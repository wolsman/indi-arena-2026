@echo off
rem ============================================================
rem  Indi-Arena 2026 — update in twee stappen
rem  1. Verse data ophalen van wkpooltjes (vraagt om je cookie)
rem  2. Deployen naar Vercel (zelfde URL)
rem
rem  Eenmalige voorbereiding (zie UPDATE.md):
rem    - Node.js LTS installeren
rem    - npm install -g vercel
rem    - vercel login
rem    - vercel link   (koppel aan project indi-arena-2026v3)
rem ============================================================
cd /d "%~dp0"

echo.
echo === Stap 1/2: data verversen van wkpooltjes ===
node scripts\scraper.js
if errorlevel 1 (
  echo.
  echo Scraper mislukt — deploy overgeslagen.
  pause
  exit /b 1
)

echo.
echo === Stap 2/2: deployen naar Vercel ===
call vercel --prod --yes
if errorlevel 1 (
  echo.
  echo Deploy mislukt. Controleer of je "vercel login" en "vercel link" hebt gedaan.
  pause
  exit /b 1
)

echo.
echo Klaar! De site is bijgewerkt.
pause
