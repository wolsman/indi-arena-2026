# Indi-Arena 2026

> De live cockpit van de Indicium WK Poule 2026.

Een interactief dashboard dat de Indicium WK Poule tot leven brengt: live ranglijst die meebeweegt met elke goal, AI-commentator in drie persona's, wedstrijd-radar met de hot picks en outliers per duel, pool-DNA, en achievement-badges.

**Status:** prototype klaar (Fase 0 + start Fase 1). Werkt direct in de browser zonder build.

---

## 🚀 In 30 seconden draaien

```powershell
cd C:\Users\dennis\Downloads\indi-arena-2026
# Open index.html in je browser (dubbelklik werkt, of:)
start index.html
```

Werkt op `file://`. Voor de full ervaring (live data, deployment) zie hieronder.

---

## 📁 Wat staat er

```
indi-arena-2026/
├─ index.html              ← Landing + dashboard (alles op één pagina)
├─ styles.css              ← Custom styling boven Tailwind (CDN)
├─ app.js                  ← UI-logica, ranglijst, AI-feed, animaties
├─ data/
│  └─ pool-data.js         ← Spelersdata, wedstrijden, DNA, commentary lib
└─ scripts/
   ├─ scraper.js           ← Haalt LIVE data uit wkpooltjes (Node.js)
   └─ commentary-live.js   ← Roept Claude API aan voor verse commentaren
```

Geen `node_modules`, geen build-stap, geen dependencies. Tailwind komt van de CDN — perfect voor snel itereren.

---

## 🔄 Data ververst houden (scraper)

Het frontend leest `data/pool-data.js`. Dit bestand wordt automatisch overschreven door de scraper.

### Eenmalig draaien

```powershell
cd C:\Users\dennis\Downloads\indi-arena-2026
node scripts/scraper.js
```

De scraper vraagt om je wkpooltjes-cookie. Die haal je zo:

1. Open https://www.wkpooltjes.nl in Chrome (al ingelogd)
2. F12 → tab **Network** → klik ergens op de site zodat er een request verschijnt
3. Rechtsklik op één request → **Copy** → **Copy as fetch**
4. In de geplakte code zie je `"Cookie": "PHPSESSID=...;..."` — kopieer alleen de waarde tussen de quotes
5. Plak dat in de prompt

### Cron / automatisch elke 10 min

Op Windows met Task Scheduler, of in WSL:

```bash
*/10 * * * * cd /pad/naar/indi-arena-2026 && node scripts/scraper.js
```

Of via een npm-package zoals `node-cron`. Voor productie raad ik aan: zet de scraper als serverless-functie op Vercel met een env-var voor de cookie, en commit `pool-data.js` automatisch via een GitHub Action.

---

## 🤖 Live AI-commentary

Het frontend bevat al een library van voorgeschreven commentaren in elk van de drie persona's. Die werken direct.

Wil je verse, contextspecifieke commentaren vanuit Claude? Gebruik dan `commentary-live.js`:

```powershell
$env:ANTHROPIC_API_KEY = "sk-ant-..."
node scripts/commentary-live.js analist pretournament
node scripts/commentary-live.js kroeg   rankingChange
node scripts/commentary-live.js coach   hottakes
```

Het script print één vers commentaar op stdout. Je kunt dat:
- handmatig kopiëren naar `pool-data.js`
- automatiseren als post-scrape-step
- via een cron-job elke X minuten genereren en aan een commentary-feed-bestand toevoegen

Kosten: een commentaar = ~250 tokens input + ~150 tokens output → ~$0.002 per commentaar. Voor 32 dagen WK × 10 commentaren/dag ≈ $0,65 totaal. Verwaarloosbaar.

---

## 🎨 Wat is af (Fase 0 + start Fase 1)

| Onderdeel | Status |
|---|---|
| Landing-hero met countdown naar aftrap | ✅ |
| Live ranglijst (sortable, filterbaar) | ✅ (op voorspellings-volledigheid; punten volgen na wedstrijden) |
| Status-tiles (klaar / groepsfase / bezig / op 0) | ✅ |
| AI Coach met drie persona's | ✅ (statische lib + Claude-script) |
| Wedstrijd-radar met heatmap-staven | ✅ |
| Pool-DNA (kampioen/topscorer picks) | ✅ |
| Achievements (9 badges, allemaal nog te verdienen) | ✅ |
| Footer met laatste sync | ✅ |
| Confetti bij eerste opening | ✅ |
| Wkpooltjes scraper | ✅ |
| Claude API integration | ✅ |
| Responsive (mobile-first) | ✅ |

## ⏭️ Wat komt nog (Fase 2-4)

| Fase | Onderdeel |
|---|---|
| **Fase 2** | Trash-talk feed met AI-moderator |
| **Fase 2** | Persoonlijke dashboards per speler |
| **Fase 2** | Push-notifications via Web Push API |
| **Fase 3** | Bracket-visualisatie knockout-fase |
| **Fase 3** | "Wat-als"-simulator (drag goals naar wedstrijd, zie wat er met ranglijst gebeurt) |
| **Fase 3** | Weekly Roast (zaterdagochtend) |
| **Fase 4** | AI-gegenereerde awards ceremony |
| **Fase 4** | Persoonlijke recap-video's per speler |

---

## 🌐 Naar het internet (deploy)

### Optie 1 — Vercel (gratis, in 5 minuten)

1. Maak een Github repo, push deze folder
2. Ga naar [vercel.com](https://vercel.com), importeer de repo
3. Geen build settings nodig (statische site)
4. Klaar — je krijgt een `indi-arena-2026.vercel.app` URL

### Optie 2 — eigen domein

Koop bv. `indi-arena.nl` (€10/jaar bij TransIP), wijs `CNAME` naar Vercel.

### Toegang beperken tot Indicium-medewerkers

Je hebt gezegd: alleen Indicium-medewerkers. Twee opties:

**Optie A — Magic link auth (aangeraden):**
- Frontend laat een mailadres-veld zien
- Backend (Vercel serverless function) checkt: domein eindigt op `@indicium.nl` (of vergelijkbaar)
- Klopt? Stuur magic-link mail met JWT
- Klikken op link → ingelogd op het dashboard

Ik kan dit toevoegen in Fase 2. Schatting: 1 dag werk.

**Optie B — Simpele basic-auth via Vercel:**
- In `vercel.json` zet je een password
- Iedereen krijgt hetzelfde wachtwoord via mail
- Snel, minder elegant

---

## 🔒 Privacy & GDPR

- Geen tracking, geen cookies, geen analytics
- Alle data komt uit jullie eigen wkpooltjes-account
- De scraper draait lokaal of in jouw eigen serverless functie
- AI-commentary stuurt **alleen geaggregeerde stats** naar Claude (geen e-mailadressen of voorspellingsinhoud per speler)

---

## 🤝 Volgende stappen — wat ik kan doen

Vragen of je groen licht wilt geven voor een van deze:

1. **Hosten op vercel.com** (vereist dat jij even het git-account / vercel-account aanmaakt)
2. **Magic-link auth toevoegen** (voor de "alleen Indicium" eis)
3. **Fase 2 starten**: trash-talk feed, persoonlijke dashboards
4. **Eerste live wedstrijd-flow** programmeren — de "wat-als-meter" tijdens een lopend duel
5. **Sample-mail naar deelnemers** opstellen die het dashboard introduceert

Welke wil je als eerste?
