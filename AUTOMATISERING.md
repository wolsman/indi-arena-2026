# 🤖 Indi-Arena 2026 — volledig automatisch bijwerken

> Na deze eenmalige setup werkt de site zichzelf bij: twee keer per dag logt een
> robot vers in op wkpooltjes, haalt de stand op en zet 'm live. Geen cookie,
> geen `.bat`, geen laptop. Werkt je hele vakantie door.

**Eenmalige setup: ~20 minuten. Daarna nul onderhoud.**

Hoe het werkt:

```
GitHub Actions (08:00 en 18:00 NL)
  → robot-browser logt vers in op wkpooltjes (met jouw opgeslagen gegevens)
  → haalt stand + punten op
  → zet de nieuwe data in GitHub
  → Vercel ziet dat en deployt automatisch
```

De robot logt élke keer opnieuw in, dus er is geen cookie die kan verlopen.

---

## Stap 1 · Code naar GitHub zetten (±8 min)

We gebruiken **GitHub Desktop** — een gratis programma met knoppen, geen commando's.

1. Download en installeer GitHub Desktop: https://desktop.github.com
2. Open het en **log in** met je GitHub-account (of maak er gratis een aan)
3. Bovenin: **File → Add local repository**
4. Kies de map: `C:\Users\dennis\Downloads\indi-arena-2026`
   - Hij herkent automatisch dat het al een Git-repo is (die heb ik klaargezet)
5. Klik op **Publish repository** (knop rechtsboven)
6. **BELANGRIJK — vink "Keep this code private" AAN.** ✅
   Zo blijven je wallpaper, mailteksten en het site-wachtwoord uit de openbaarheid.
7. Naam mag blijven: `indi-arena-2026`. Klik **Publish repository**.

Klaar — je code staat nu op GitHub.

---

## Stap 2 · Inloggegevens veilig opslaan als "Secrets" (±5 min)

De robot heeft je wkpooltjes-login nodig. Die zetten we versleuteld in GitHub
(niet in de code — ze zijn nergens leesbaar, ook niet voor jou achteraf).

1. Ga in je browser naar je repo op github.com
   (GitHub Desktop → **Repository → View on GitHub** brengt je er direct heen)
2. Klik bovenin op **Settings**
3. Linksonder: **Secrets and variables → Actions**
4. Klik **New repository secret** en maak er twee aan:

   | Name (exact zo typen) | Secret (de waarde) |
   |---|---|
   | `WKPOOL_EMAIL` | jouw wkpooltjes e-mailadres |
   | `WKPOOL_PASSWORD` | jouw wkpooltjes wachtwoord |

   Typ de naam, plak de waarde, klik **Add secret**. Twee keer.

> 🔒 Deze secrets zijn versleuteld en verschijnen nooit in logs of in de code.
> Alleen de robot kan ze tijdens het draaien gebruiken.

---

## Stap 3 · Vercel aan GitHub koppelen (±5 min)

Nu zorgen we dat Vercel automatisch deployt zodra de robot nieuwe data plaatst.

1. Ga naar https://vercel.com/dashboard en open je project **indi-arena-2026v3**
2. Klik op **Settings → Git**
3. Klik **Connect Git Repository** en kies je zojuist gepubliceerde
   GitHub-repo `indi-arena-2026`
4. Bevestig. Vanaf nu deployt elke wijziging in de repo automatisch naar
   dezelfde URL: https://indi-arena-2026v3.vercel.app/

> De instellingen in `vercel.json` zorgen dat Vercel de site gewoon als
> statische pagina's serveert (geen build) — daar hoef jij niets voor te doen.

---

## Stap 4 · Eén keer testen (±2 min)

Niet wachten tot morgenochtend — start de robot nu handmatig om te zien of alles werkt.

1. Op github.com, in je repo: klik bovenin op **Actions**
2. Links: klik op **Indi-Arena data-update**
3. Rechts: knop **Run workflow → Run workflow** (groen)
4. Wacht 1-2 minuten en ververs de pagina. Je ziet een groen vinkje ✅ als het lukte.
5. Check de live site — de stand klopt met wkpooltjes.

Lukt het? Dan ben je **klaar**. De robot draait vanaf nu vanzelf.

---

## Wanneer draait het automatisch?

- **Elke ochtend rond 08:00** (NL) — verse stand bij de koffie, na de nachtwedstrijden
- **Elke avond rond 18:00** (NL) — bijgewerkt vóór de avondduels

Wil je dit aanpassen (vaker, andere tijden)? Het schema staat in
`.github/workflows/update-pool.yml`, regels met `cron`. Geef het door, dan pas ik het aan.

> GitHub plant de tijden ruim, dus een run kan een paar minuten later starten dan
> exact het hele uur. Voor een poule is dat geen probleem.

---

## Wat als er iets misgaat?

| Symptoom | Oplossing |
|---|---|
| Rode kruis bij een Action-run | Klik erop → lees de laatste regels. Meestal: wachtwoord gewijzigd → werk de secret `WKPOOL_PASSWORD` bij |
| Site werkt het niet bij | Check of Vercel aan de Git-repo gekoppeld is (Stap 3) |
| "Verdacht weinig spelers" in de log | Veiligheidsrem: de robot weigert lege data te plaatsen. Meestal tijdelijk; de volgende run lost het op |
| Je verandert je wkpooltjes-wachtwoord | Werk secret `WKPOOL_PASSWORD` bij (Stap 2) — that's it |

---

## Wat als ik tóch handmatig wil bijwerken?

Dat kan altijd nog:
- **Vanaf GitHub:** Actions → Run workflow (zoals in stap 4)
- **Vanaf je laptop:** de oude `update.bat` werkt ook nog, maar dat heb je nu eigenlijk niet meer nodig

---

## Samengevat

Na de setup hoef je **niets** meer te doen. Je kunt met een gerust hart op vakantie:
de stand op de site loopt automatisch mee met de poule, twee keer per dag,
de hele rit tot de finale op 19 juli.
