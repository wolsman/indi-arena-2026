# 🚀 Indi-Arena 2026 — Deploy in 10 minuten

> Stap-voor-stap gids voor Dennis om de site live te krijgen op Vercel.
> Totale tijd: ~10 minuten.

---

## 📋 Wat je nodig hebt

1. Een browser (Chrome werkt prima)
2. Een e-mailadres
3. De map `C:\Users\dennis\Downloads\indi-arena-2026\` op je computer
4. Geen creditcard, geen GitHub-account, geen tools installeren — niets

---

## Stap 1 · Vercel-account maken (2 min)

1. Open https://vercel.com in Chrome
2. Klik rechtsboven op **"Sign Up"**
3. Kies **"Continue with Email"**
4. Vul je e-mailadres in
5. Klik op de bevestigingslink in de mail die je ontvangt
6. Vul een **username** in (mag van alles zijn, bv. `dennis-wolsman`)
7. Op de "Set up team" pagina: kies **"Hobby"** (gratis)
8. Skip alle vragen (klik "Continue" of "Skip" tot je in het dashboard staat)

✅ Klaar. Je hebt nu een Vercel-account.

---

## Stap 2 · Site uploaden (5 min)

Er zijn twee manieren. **Optie A is het simpelst** — kies die.

### Optie A · Drag-and-drop (aanrader)

1. Ga naar https://vercel.com/new
2. Op de pagina zie je twee blokken. Negeer "Import Git Repository".
3. Scroll naar beneden tot je **"Deploy a Template"** of een **"Browse"** knop ziet.
   - *Als die er niet is, ga dan naar https://vercel.com/new/clone (of zie Optie B hieronder)*
4. Sleep de hele map `indi-arena-2026` vanuit Verkenner naar het venster.
   - **Belangrijk:** sleep de MAP (`indi-arena-2026`), niet de losse bestanden.
5. Geef het project een naam, bv. `indi-arena-2026`
6. Klik **"Deploy"**
7. Wacht ~30 seconden. Je krijgt een live URL te zien, iets als:
   ```
   https://indi-arena-2026-abc123.vercel.app
   ```

### Optie B · Via Vercel CLI (als drag-drop niet werkt)

Open PowerShell en draai:

```powershell
# Installeer Vercel CLI (eenmalig, kost ~30 sec)
npm install -g vercel

# Ga naar de project-map
cd C:\Users\dennis\Downloads\indi-arena-2026

# Deploy
vercel
```

Vercel CLI vraagt:
- *Set up and deploy?* → `y`
- *Which scope?* → kies je account
- *Link to existing?* → `n`
- *Project name?* → `indi-arena-2026` (of laat default)
- *In which directory?* → druk Enter (huidige map)
- *Override settings?* → `n`

Na ~30 sec krijg je de live URL.

**Heb je nog geen Node.js?** Download via https://nodejs.org/en/download → "LTS"-versie.

---

## Stap 3 · Test je live URL (1 min)

1. Open de URL die je hebt gekregen (bv. `https://indi-arena-2026-xxx.vercel.app`)
2. Je ziet de login-pagina
3. Voer wachtwoord in:

   ```
   indiciumwkpoule2026
   ```

4. Je komt op het dashboard. Bingo. 🎉

---

## Stap 4 · Custom domein (optioneel, 5 min)

Wil je dat je collega's een mooiere URL zien zoals `indi-arena.nl` of `indicium-wk.nl`?

1. Koop een domein (TransIP, OpenProvider, Mijn Domein — €10/jaar)
2. In Vercel: ga naar je project → **Settings** → **Domains**
3. Klik **"Add"**, typ je domein in (bv. `indi-arena.nl`)
4. Vercel toont je welke DNS-records je moet instellen — kopieer die
5. Bij je domein-leverancier: voeg die DNS-records toe (A-record + CNAME)
6. Wacht ~10-30 minuten — site is live op het eigen domein

---

## Stap 5 · Wachtwoord veranderen (optioneel)

Wil je een ander wachtwoord dan `indiciumwkpoule2026`?

1. Open `login.html` in je text editor
2. Zoek de regel: `const PWD_HASH = btoa('indiciumwkpoule2026');`
3. Vervang `'indiciumwkpoule2026'` met je eigen wachtwoord (in kleine letters)
4. Sla op
5. Re-deploy via Vercel:
   - **Via website**: ga naar je project → "Deployments" → klik op de drie puntjes bij de laatste deploy → "Redeploy"
   - **Via CLI**: `vercel --prod` in de project-map

---

## 📨 Mail-template (klaar voor verzenden)

Hieronder staat de aankondigingsmail die je naar de 46 deelnemers kunt sturen.

**Onderwerp:** Nieuw bij de poule: Indi-Arena 2026 (live cockpit)

---

Beste poulegenoten,

Nog 2 dagen tot de aftrap. Tijd om iets nieuws aan te kondigen.

**Indi-Arena 2026** is de live cockpit van onze Indicium WK Poule. Daar zie je:

- Wie er voorspeld heeft en wie nog op nul staat
- De ranglijst die meebeweegt met elke wedstrijd
- Wat de groep voorspelt en wie er gewaagd afwijkt
- Henk — onze AI-commentator met kantinepraat-vibes — die meelult bij elke positie-wissel

**Open hier:**
https://[JOUW-URL-HIER].vercel.app

**Wachtwoord:**
`indiciumwkpoule2026`

(Hou deze even bij de hand — je hoeft 'm maar één keer in te voeren per browser, daarna ben je 30 dagen lang ingelogd.)

Veel succes met je laatste voorspellingen. Donderdag 21:00 rolt-ie.

Tot in de ranglijst,
Dennis
*Beheerder Indicium WK Poule 2026*

*P.S. Schade na het zien van je positie is voor eigen risico.*

---

## ⚠️ Wat als er iets fout gaat?

**"Deploy failed" / rode foutmelding op Vercel:**
- Check of je de juiste map hebt geupload (`indi-arena-2026`)
- Sleep 'm opnieuw

**"Page not found" op de live URL:**
- Wacht 1-2 minuten en refresh
- Check of de URL exact klopt

**"Verkeerd wachtwoord":**
- Hoofdletters? Het wachtwoord is alleen kleine letters
- Spaties aan begin/eind? Verwijderen

**Vragen / vastlopen?**
- Stuur me een seintje via chat — we lossen het samen op

---

## 🎯 Wat komt na deze deploy?

Na een succesvolle deploy zijn dit de logische vervolgstappen:

1. **Sanity check met 2-3 collega's** — laat ze testen of het opent en het wachtwoord werkt
2. **Mass-mail naar alle 46 deelnemers** — gebruik bovenstaand sjabloon
3. **Scraper-automatisering** (later) — zodat de data elke 10 min ververst (vereist GitHub-link, kan ik later helpen opzetten)
4. **Fase 2** — tijdens het toernooi: live wedstrijd-modus, achievements, tijdlijn

Veel succes! 🏟️
