# 🔄 Indi-Arena 2026 — site bijwerken tijdens het WK

De site toont een momentopname van de poule. Tijdens het toernooi wil je die
regelmatig verversen (nieuwe deelnemers, invulstatus en — zodra de bal rolt —
de **punten**). Dit document beschrijft de eenmalige voorbereiding en daarna
de dagelijkse routine van één dubbelklik.

---

## Eenmalige voorbereiding (±10 minuten)

### 1. Node.js installeren
1. Ga naar https://nodejs.org
2. Download de **LTS-versie** voor Windows en installeer met alle standaardopties
3. Controleer: open PowerShell en typ `node -v` → je ziet een versienummer

### 2. Vercel CLI installeren en koppelen
Open PowerShell en voer uit:

```powershell
npm install -g vercel
cd "C:\Users\dennis\Downloads\indi-arena-2026"
vercel login        # kies je e-mailadres, bevestig via de mail
vercel link         # koppel deze map aan je bestaande project
```

Bij `vercel link` beantwoord je de vragen zo:
- *Set up "...indi-arena-2026"?* → **Y**
- *Which scope?* → jouw account (Dennis Wols' projects)
- *Link to existing project?* → **Y**
- *What's the name of your existing project?* → **indi-arena-2026v3**

Klaar. Dit hoef je nooit meer te doen. Vanaf nu gaat elke deploy naar
**dezelfde URL**: https://indi-arena-2026v3.vercel.app/

---

## Dagelijkse routine: update.bat

1. Dubbelklik op **`update.bat`** in de projectmap
2. Plak je wkpooltjes-cookie als daarom wordt gevraagd (zie hieronder)
3. Wacht tot "Klaar!" verschijnt — de site is bijgewerkt

### Je cookie ophalen (nodig per sessie)
1. Open https://www.wkpooltjes.nl in Chrome en log in
2. Druk **F12** → tabblad **Network** → klik ergens op de site
3. Klik een request aan → onder **Request Headers** staat `Cookie:`
4. Kopieer de volledige waarde (alles na "Cookie: ")
5. Plak die in het scraper-venster

Tip: wil je de cookie-vraag overslaan, zet hem dan als omgevingsvariabele:

```powershell
$env:WKPOOL_COOKIE = "PHPSESSID=...; overige=waarden"
.\update.bat
```

---

## Wat de update precies doet

1. **Scraper** haalt bij wkpooltjes op:
   - de ledenlijst met invulstatus en betaalstatus
   - de ranglijst met punten (relevant zodra wedstrijden gespeeld zijn)
2. De vorige puntenstand wordt bewaard, zodat de site **stijgers en dalers**
   kan tonen (▲ / ▼ naast de punten).
3. Zodra er échte punten zijn, schakelt de ranglijst op de site automatisch
   om van "invulstatus" naar "punten".
4. **Vercel** zet de nieuwe versie live op dezelfde URL.

## Hoe vaak?

- **Vóór de aftrap:** één keer per dag is genoeg (nieuwe aanmeldingen/invullers)
- **Tijdens het toernooi:** na elke speelronde, of 's ochtends na de
  nachtwedstrijden — dan ziet iedereen bij de koffie de nieuwe stand
- De wedstrijduitslagen op wkpooltjes worden door dat platform zelf verwerkt;
  jouw update haalt alleen de resultaten op

## Problemen?

| Melding | Oplossing |
|---|---|
| "Lege respons — cookie verlopen" | Nieuwe cookie ophalen (stap hierboven) |
| "Geen match voor ranglijstnaam …" | Die speler heet in de ranglijst anders dan in de ledenlijst; geef de naam aan Claude, dan verbeteren we de koppeling |
| "Deploy mislukt" | Controleer `vercel login` en `vercel link`; of deploy handmatig met `vercel --prod` |
