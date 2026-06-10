#!/usr/bin/env node
/* ============================================================
   Indi-Arena 2026 — live AI commentary generator
   ============================================================
   Roept de Anthropic Claude API aan om vers commentaar te
   genereren in een van de drie persona's, op basis van de
   actuele pool-data.

   Set ANTHROPIC_API_KEY in je env voor je 'm aanroept.

   Gebruik:
     node scripts/commentary-live.js analist  pretournament
     node scripts/commentary-live.js kroeg    rankingChange
     node scripts/commentary-live.js coach    hottakes

   Output: 1 nieuw commentaar van max ~80 woorden, geprint op
   stdout. Schrijf de output zelf eventueel als nieuwe regel in
   pool-data.js of in een aparte commentary-log.
   ============================================================ */

const fs = require('fs');
const path = require('path');

const API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL   = 'claude-sonnet-4-5';

const PERSONAS = {
  analist: {
    name: 'De Analist',
    sys: `Je bent "De Analist", een AI-commentator voor een interne Indicium WK Poule.
Je toon: koel, analytisch, met cijfers en statistieken — alsof je in Studio Voetbal zit.
Je schrijft in het Nederlands, kort (max 60 woorden), met af en toe een spitse observatie.
Je mag de groep mild plagen, nooit kwetsend. Gebruik soms namen van pool-leden die in de data zitten.
Geen emoji's of overdreven hoofdletters.`
  },
  kroeg: {
    name: 'Henk de Kroegfilosoof',
    sys: `Je bent "Henk", een AI-commentator voor een interne Indicium WK Poule.
Je toon: sappig, brutaal, met Voetbal Inside-vibes. Geef onomwonden mening, plaag liefdevol, soms met een knipoog.
Je schrijft in het Nederlands, kort (max 60 woorden). Gebruik geen scheldwoorden, maar wel humor.
Gebruik soms namen van pool-leden die in de data zitten. Geen emoji's, wel pittige one-liners.`
  },
  coach: {
    name: 'De Bondscoach',
    sys: `Je bent "De Bondscoach", een AI-commentator voor een interne Indicium WK Poule.
Je toon: vaderlijk, bemoedigend, optimistisch. Je gelooft in iedereen. Soms een tikje gevatte vermaning maar nooit hard.
Je schrijft in het Nederlands, kort (max 60 woorden), met af en toe een coachsfrase ("kop omhoog", "we gaan ervoor").
Gebruik soms namen van pool-leden die in de data zitten. Geen emoji's.`
  }
};

const SCENARIOS = {
  pretournament: 'Het WK is nog niet begonnen. Geef een algemeen commentaar over de huidige stand van de pool, wie al klaar is en wie nog niet.',
  rankingChange: 'Er is een grote positie-wissel in de ranglijst geweest. Becommentarieer een speler die fors gestegen of gedaald is.',
  hottakes:      'Geef een gedurfde, scherpe analyse van een opvallend voorspellings-patroon in de pool.',
  postMatch:     'Een wedstrijd is net afgelopen. Becommentarieer hoe dat de pool-stand beïnvloedt en wie de winnaars/verliezers zijn.'
};

async function main() {
  const [,, personaArg='analist', scenarioArg='pretournament'] = process.argv;
  if (!API_KEY) { console.error('Set ANTHROPIC_API_KEY env var'); process.exit(1); }
  const persona = PERSONAS[personaArg];
  const scenario = SCENARIOS[scenarioArg];
  if (!persona || !scenario) { console.error('Onbekende persona/scenario'); process.exit(2); }

  // Lees actuele data
  const dataPath = path.join(__dirname, '..', 'data', 'pool-data.js');
  const raw = fs.readFileSync(dataPath, 'utf8');
  // Pluk meta + players quick & dirty (eval is hier veilig: own file)
  const ctx = {};
  const sandbox = { window: ctx };
  // Use Function constructor to evaluate the file body in the sandbox
  new Function('window', raw)(sandbox.window);
  const meta = ctx.POOL_META;
  const players = ctx.POOL_PLAYERS;

  // Build a compact context summary for the AI
  const stats = {
    total: players.length,
    complete104: players.filter(p => p.matches === 104).length,
    groep72:     players.filter(p => p.matches === 72).length,
    bezig:       players.filter(p => p.matches > 0 && p.matches < 72).length,
    nul:         players.filter(p => p.matches === 0).length,
    notPaid:     players.filter(p => !p.paid).length,
    top5:        players.sort((a,b) => b.matches - a.matches).slice(0,5).map(p => p.name),
    onZero:      players.filter(p => p.matches === 0).map(p => p.name).slice(0, 8)
  };

  const userMsg = `
Pool: ${meta.name}
Total spelers: ${stats.total}
Eerste wedstrijd: ${meta.firstMatchAt}

Stand:
- Helemaal klaar (104/104): ${stats.complete104}
- Groepsfase af (72/104): ${stats.groep72}
- Bezig: ${stats.bezig}
- Nog op 0: ${stats.nul}
- Niet betaald: ${stats.notPaid}

Top 5 vroege vogels: ${stats.top5.join(', ')}
Voorbeelden van spelers op 0: ${stats.onZero.join(', ')}

Scenario: ${scenario}

Schrijf één commentaar van maximaal 60 woorden in jouw persona. Eindig zonder afsluitende groet. Plain text, geen markdown.
`.trim();

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 200,
      system: persona.sys,
      messages: [{ role: 'user', content: userMsg }]
    })
  });
  const j = await res.json();
  if (!res.ok) { console.error('API error:', j); process.exit(3); }
  const text = (j.content?.[0]?.text || '').trim();
  console.log(text);
}

main().catch(e => { console.error(e); process.exit(99); });
