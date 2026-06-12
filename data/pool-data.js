/* ============================================================
   Indi-Arena 2026 — pool data
   Bron: live scrape van wkpooltjes.nl op 10-06-2026 ~22:45
   Verversen: scripts/scraper.js draaien of update.bat
   ============================================================ */

window.POOL_META = {
  poolId: 423,
  name: "Indicium WK Poule 2026",
  totalPlayers: 55,
  capacityMax: 75,
  syncedAt: "2026-06-12T18:31:21.835Z",
  firstMatchAt: "2026-06-11T21:00:00+02:00",
  predictionsPublic: false,
  // Wordt true zodra de scraper echte punten ziet — de ranglijst
  // schakelt dan automatisch om van invulstatus naar punten.
  pointsAvailable: true
};

// points/prevPos worden door de scraper gevuld zodra het toernooi loopt.
window.POOL_PLAYERS = [
  { name: "Wolsman", matches: 104, winner: true, topscorer: true, paid: true, points: 400, prevPos: 1 },
  { name: "Kleine Flo", matches: 72, winner: true, topscorer: true, paid: true, points: 220, prevPos: 9 },
  { name: "Bertjuh", matches: 72, winner: true, topscorer: true, paid: true, points: 200, prevPos: 23 },
  { name: "Bobcorn", matches: 72, winner: true, topscorer: true, paid: true, points: 115, prevPos: 29 },
  { name: "UedaTopscorer", matches: 72, winner: true, topscorer: true, paid: true, points: 220, prevPos: 10 },
  { name: "Oppie1978", matches: 24, winner: true, topscorer: true, paid: true, points: 115, prevPos: 30 },
  { name: "El-Toro-Loco", matches: 11, winner: false, topscorer: false, paid: true, points: 95, prevPos: 41 },
  { name: "StudentjeIndicium", matches: 72, winner: true, topscorer: true, paid: true, points: 220, prevPos: 11 },
  { name: "Mauricio1980", matches: 72, winner: true, topscorer: true, paid: true, points: 220, prevPos: 12 },
  { name: "AlinevanVuuren", matches: 72, winner: true, topscorer: true, paid: true, points: 115, prevPos: 31 },
  { name: "Wisselbeker", matches: 10, winner: true, topscorer: true, paid: true, points: 200, prevPos: 24 },
  { name: "Roantuit", matches: 0, winner: false, topscorer: false, paid: true, points: 0, prevPos: 51 },
  { name: "Robertosxs", matches: 104, winner: true, topscorer: true, paid: true, points: 220, prevPos: 13 },
  { name: "Reboss", matches: 72, winner: true, topscorer: true, paid: true, points: 220, prevPos: 14 },
  { name: "Mobicontrol", matches: 53, winner: true, topscorer: true, paid: true, points: 220, prevPos: 15 },
  { name: "Brokkenpiloot", matches: 17, winner: true, topscorer: true, paid: true, points: 295, prevPos: 6 },
  { name: "Katinkadeb", matches: 72, winner: true, topscorer: true, paid: true, points: 220, prevPos: 16 },
  { name: "BornBjorg", matches: 24, winner: true, topscorer: true, paid: true, points: 95, prevPos: 42 },
  { name: "Fseton", matches: 10, winner: true, topscorer: true, paid: true, points: 115, prevPos: 32 },
  { name: "Raymond de Haas", matches: 14, winner: true, topscorer: true, paid: true, points: 115, prevPos: 33 },
  { name: "ScheidsTon", matches: 0, winner: false, topscorer: false, paid: true, points: 0, prevPos: 52 },
  { name: "THEGOAT37", matches: 31, winner: true, topscorer: true, paid: true, points: 115, prevPos: 34 },
  { name: "WesleyMerwe", matches: 10, winner: true, topscorer: true, paid: true, points: 170, prevPos: 27 },
  { name: "Daisy010", matches: 15, winner: true, topscorer: true, paid: true, points: 40, prevPos: 48 },
  { name: "Erol_Ulu", matches: 72, winner: true, topscorer: true, paid: true, points: 220, prevPos: 17 },
  { name: "Givano", matches: 72, winner: true, topscorer: true, paid: true, points: 115, prevPos: 35 },
  { name: "VanderLans", matches: 9, winner: true, topscorer: true, paid: true, points: 95, prevPos: 43 },
  { name: "Trauner_in_Oranje", matches: 5, winner: true, topscorer: true, paid: true, points: 275, prevPos: 8 },
  { name: "Keepertje", matches: 72, winner: true, topscorer: true, paid: true, points: 20, prevPos: 50 },
  { name: "John0504", matches: 72, winner: true, topscorer: true, paid: true, points: 75, prevPos: 46 },
  { name: "Rugnummer67", matches: 5, winner: true, topscorer: true, paid: true, points: 115, prevPos: 36 },
  { name: "Norman.P", matches: 4, winner: true, topscorer: true, paid: true, points: 295, prevPos: 7 },
  { name: "StanleyBoessen", matches: 72, winner: false, topscorer: false, paid: true, points: 95, prevPos: 44 },
  { name: "GonnyDebode", matches: 72, winner: true, topscorer: true, paid: true, points: 200, prevPos: 25 },
  { name: "Marlayne", matches: 26, winner: true, topscorer: true, paid: true, points: 95, prevPos: 45 },
  { name: "Jules-", matches: 72, winner: true, topscorer: true, paid: true, points: 40, prevPos: 49 },
  { name: "Harro1", matches: 72, winner: true, topscorer: true, paid: true, points: 200, prevPos: 26 },
  { name: "JRHJNB", matches: 72, winner: true, topscorer: true, paid: true, points: 220, prevPos: 18 },
  { name: "JoycevanRiet", matches: 72, winner: true, topscorer: true, paid: true, points: 115, prevPos: 37 },
  { name: "Heer", matches: 72, winner: true, topscorer: true, paid: true, points: 220, prevPos: 19 },
  { name: "Pepijndh", matches: 0, winner: false, topscorer: false, paid: true, points: 0, prevPos: 53 },
  { name: "Cornelis2026", matches: 29, winner: true, topscorer: true, paid: true, points: 75, prevPos: 47 },
  { name: "Wkkipje", matches: 10, winner: true, topscorer: true, paid: true, points: 220, prevPos: 20 },
  { name: "MaureenGLA", matches: 72, winner: true, topscorer: true, paid: true, points: 115, prevPos: 38 },
  { name: "GeorgeV.", matches: 72, winner: true, topscorer: true, paid: true, points: 115, prevPos: 39 },
  { name: "ikgajuichen", matches: 104, winner: true, topscorer: true, paid: true, points: 400, prevPos: 2 },
  { name: "JanCandiano", matches: 20, winner: true, topscorer: true, paid: true, points: 170, prevPos: 28 },
  { name: "Bo.", matches: 72, winner: true, topscorer: true, paid: true, points: 220, prevPos: 21 },
  { name: "Koninkie", matches: 72, winner: true, topscorer: true, paid: true, points: 115, prevPos: 40 },
  { name: "Martijnmeestervoorspeller", matches: 72, winner: true, topscorer: true, paid: true, points: 400, prevPos: 3 },
  { name: "Crazy Dutchman", matches: 72, winner: true, topscorer: true, paid: true, points: 400, prevPos: 4 },
  { name: "RoanTuit(messi)", matches: 7, winner: true, topscorer: true, paid: true, points: 220, prevPos: 22 },
  { name: "Christopheramboz", matches: 9, winner: true, topscorer: true, paid: true, points: 400, prevPos: 5 },
  { name: "Frenk010fr", matches: 0, winner: false, topscorer: false, paid: false, points: 0, prevPos: 54 },
  { name: "WillemCo", matches: 8, winner: false, topscorer: false, paid: false, points: 0, prevPos: 55 }
];

// Volledige kalender — alle 104 wedstrijden, Nederlandse tijden.
// Compact opgeslagen, uitgepakt naar objecten onderaan.
window.POOL_CALENDAR = [
  // ---- Groepsfase (11–28 juni) ----
  ["43993","06-11T21:00","Mexico","Zuid-Afrika"],
  ["43994","06-12T04:00","Zuid-Korea","Tsjechië"],
  ["43995","06-12T21:00","Canada","Bosnië"],
  ["43996","06-13T03:00","USA","Paraguay"],
  ["43997","06-13T21:00","Qatar","Zwitserland"],
  ["43998","06-14T00:00","Brazilië","Marokko"],
  ["43999","06-14T03:00","Haïti","Schotland"],
  ["44000","06-14T06:00","Australië","Turkije"],
  ["44001","06-14T19:00","Duitsland","Curaçao"],
  ["44002","06-14T22:00","Nederland","Japan"],
  ["44003","06-15T01:00","Ivoorkust","Ecuador"],
  ["44004","06-15T04:00","Zweden","Tunesië"],
  ["44005","06-15T18:00","Spanje","Kaapverdië"],
  ["44006","06-15T21:00","België","Egypte"],
  ["44007","06-16T00:00","Saoedi-Arabië","Uruguay"],
  ["44008","06-16T03:00","Iran","Nieuw-Zeeland"],
  ["44009","06-16T21:00","Frankrijk","Senegal"],
  ["44010","06-17T00:00","Irak","Noorwegen"],
  ["44011","06-17T03:00","Argentinië","Algerije"],
  ["44012","06-17T06:00","Oostenrijk","Jordanië"],
  ["44013","06-17T19:00","Portugal","Congo"],
  ["44014","06-17T22:00","Engeland","Kroatië"],
  ["44015","06-18T01:00","Ghana","Panama"],
  ["44016","06-18T04:00","Oezbekistan","Colombia"],
  ["44017","06-18T18:00","Tsjechië","Zuid-Afrika"],
  ["44018","06-18T21:00","Zwitserland","Bosnië"],
  ["44019","06-19T00:00","Canada","Qatar"],
  ["44020","06-19T03:00","Mexico","Zuid-Korea"],
  ["44021","06-19T21:00","USA","Australië"],
  ["44022","06-20T00:00","Schotland","Marokko"],
  ["44023","06-20T03:00","Brazilië","Haïti"],
  ["44024","06-20T06:00","Turkije","Paraguay"],
  ["44025","06-20T19:00","Nederland","Zweden"],
  ["44026","06-20T22:00","Duitsland","Ivoorkust"],
  ["44027","06-21T02:00","Ecuador","Curaçao"],
  ["44028","06-21T06:00","Tunesië","Japan"],
  ["44029","06-21T18:00","Spanje","Saoedi-Arabië"],
  ["44030","06-21T21:00","België","Iran"],
  ["44031","06-22T00:00","Uruguay","Kaapverdië"],
  ["44032","06-22T03:00","Nieuw-Zeeland","Egypte"],
  ["44033","06-22T19:00","Argentinië","Oostenrijk"],
  ["44034","06-22T23:00","Frankrijk","Irak"],
  ["44035","06-23T02:00","Noorwegen","Senegal"],
  ["44036","06-23T05:00","Jordanië","Algerije"],
  ["44037","06-23T19:00","Portugal","Oezbekistan"],
  ["44038","06-23T22:00","Engeland","Ghana"],
  ["44039","06-24T01:00","Panama","Kroatië"],
  ["44040","06-24T04:00","Colombia","Congo"],
  ["44041","06-24T21:00","Zwitserland","Canada"],
  ["44042","06-24T21:00","Bosnië","Qatar"],
  ["44043","06-25T00:00","Schotland","Brazilië"],
  ["44044","06-25T00:00","Marokko","Haïti"],
  ["44045","06-25T03:00","Tsjechië","Mexico"],
  ["44046","06-25T03:00","Zuid-Afrika","Zuid-Korea"],
  ["44047","06-25T22:00","Curaçao","Ivoorkust"],
  ["44048","06-25T22:00","Ecuador","Duitsland"],
  ["44049","06-26T01:00","Japan","Zweden"],
  ["44050","06-26T01:00","Tunesië","Nederland"],
  ["44051","06-26T04:00","Turkije","USA"],
  ["44052","06-26T04:00","Paraguay","Australië"],
  ["44053","06-26T21:00","Noorwegen","Frankrijk"],
  ["44054","06-26T21:00","Senegal","Irak"],
  ["44055","06-27T02:00","Kaapverdië","Saoedi-Arabië"],
  ["44056","06-27T02:00","Uruguay","Spanje"],
  ["44057","06-27T05:00","Egypte","Iran"],
  ["44058","06-27T05:00","Nieuw-Zeeland","België"],
  ["44059","06-27T23:00","Panama","Engeland"],
  ["44060","06-27T23:00","Kroatië","Ghana"],
  ["44061","06-28T01:30","Colombia","Portugal"],
  ["44062","06-28T01:30","Congo","Oezbekistan"],
  ["44063","06-28T04:00","Algerije","Oostenrijk"],
  ["44064","06-28T04:00","Jordanië","Argentinië"],
  // ---- Zestiende finales (28 juni – 4 juli) ----
  ["44065","06-28T21:00","A2","B2"],
  ["44066","06-29T19:00","C1","F2"],
  ["44067","06-29T22:30","E1","Beste nr. 3 (A/B/C/D/F)"],
  ["44068","06-30T03:00","F1","C2"],
  ["44069","06-30T19:00","E2","I2"],
  ["44070","06-30T23:00","I1","Beste nr. 3 (C/D/F/G/H)"],
  ["44071","07-01T03:00","A1","Beste nr. 3 (C/E/F/H/I)"],
  ["44072","07-01T18:00","L1","Beste nr. 3 (E/H/I/J/K)"],
  ["44073","07-01T22:00","G1","Beste nr. 3 (A/E/H/I/J)"],
  ["44074","07-02T02:00","D1","Beste nr. 3 (B/E/F/I/J)"],
  ["44075","07-02T21:00","H1","J2"],
  ["44076","07-03T01:00","K2","L2"],
  ["44077","07-03T05:00","B1","Beste nr. 3 (E/F/G/I/J)"],
  ["44078","07-03T20:00","D2","G2"],
  ["44079","07-04T00:00","J1","H2"],
  ["44080","07-04T03:30","K1","Beste nr. 3 (D/E/I/J/L)"],
  // ---- Achtste finales (4–7 juli) ----
  ["44081","07-04T19:00","Winnaar 73","Winnaar 75"],
  ["44082","07-04T23:00","Winnaar 74","Winnaar 77"],
  ["44083","07-05T22:00","Winnaar 76","Winnaar 78"],
  ["44084","07-06T02:00","Winnaar 79","Winnaar 80"],
  ["44085","07-06T21:00","Winnaar 83","Winnaar 84"],
  ["44086","07-07T02:00","Winnaar 81","Winnaar 82"],
  ["44087","07-07T18:00","Winnaar 86","Winnaar 88"],
  ["44088","07-07T22:00","Winnaar 85","Winnaar 87"],
  // ---- Kwartfinales (9–12 juli) ----
  ["44089","07-09T22:00","Winnaar 89","Winnaar 90"],
  ["44090","07-10T21:00","Winnaar 93","Winnaar 94"],
  ["44091","07-11T23:00","Winnaar 91","Winnaar 92"],
  ["44092","07-12T03:00","Winnaar 95","Winnaar 96"],
  // ---- Halve finales (14–15 juli) ----
  ["44093","07-14T21:00","Winnaar kwartfinale 1","Winnaar kwartfinale 2"],
  ["44094","07-15T21:00","Winnaar kwartfinale 3","Winnaar kwartfinale 4"],
  // ---- Troostfinale & finale (18–19 juli) ----
  ["44095","07-18T23:00","Verliezer halve finale 1","Verliezer halve finale 2"],
  ["44096","07-19T21:00","Winnaar halve finale 1","Winnaar halve finale 2"]
].map(function(row, i) {
  var phase = i < 72 ? "Groepsfase"
            : i < 88 ? "Zestiende finale"
            : i < 96 ? "Achtste finale"
            : i < 100 ? "Kwartfinale"
            : i < 102 ? "Halve finale"
            : i === 102 ? "Troostfinale" : "Finale";
  return { id: row[0], date: "2026-" + row[1] + ":00+02:00", home: row[2], away: row[3], phase: phase };
});

// Vlaggen, gesleuteld op genormaliseerde landnaam (kleine letters, zonder
// accenten/spaties/koppeltekens). Zo werken zowel "Zuid-Korea" als "Zuid Korea".
window.POOL_FLAGS = {
  mexico:"🇲🇽", zuidafrika:"🇿🇦", zuidkorea:"🇰🇷", tsjechie:"🇨🇿",
  canada:"🇨🇦", bosnie:"🇧🇦", qatar:"🇶🇦", zwitserland:"🇨🇭",
  usa:"🇺🇸", paraguay:"🇵🇾", australie:"🇦🇺", turkije:"🇹🇷",
  brazilie:"🇧🇷", marokko:"🇲🇦", haiti:"🇭🇹", schotland:"🏴",
  duitsland:"🇩🇪", curacao:"🇨🇼", ecuador:"🇪🇨", ivoorkust:"🇨🇮",
  nederland:"🇳🇱", japan:"🇯🇵", zweden:"🇸🇪", tunesie:"🇹🇳",
  spanje:"🇪🇸", kaapverdie:"🇨🇻", uruguay:"🇺🇾", saoediarabie:"🇸🇦",
  belgie:"🇧🇪", egypte:"🇪🇬", iran:"🇮🇷", nieuwzeeland:"🇳🇿",
  frankrijk:"🇫🇷", senegal:"🇸🇳", noorwegen:"🇳🇴", irak:"🇮🇶",
  argentinie:"🇦🇷", algerije:"🇩🇿", oostenrijk:"🇦🇹", jordanie:"🇯🇴",
  portugal:"🇵🇹", congo:"🇨🇬", colombia:"🇨🇴", oezbekistan:"🇺🇿",
  engeland:"🇬🇧", kroatie:"🇭🇷", ghana:"🇬🇭", panama:"🇵🇦"
};

// Groepsindeling A–L (vast). De stand per groep wordt door de scraper gevuld
// in POOL_STANDINGS zodra er gespeeld is.
window.POOL_GROUPS = [
  { groep:"A", teams:["Mexico","Zuid-Korea","Zuid-Afrika","Tsjechië"] },
  { groep:"B", teams:["Canada","Zwitserland","Qatar","Bosnië"] },
  { groep:"C", teams:["Brazilië","Marokko","Schotland","Haïti"] },
  { groep:"D", teams:["USA","Paraguay","Australië","Turkije"] },
  { groep:"E", teams:["Duitsland","Curaçao","Ecuador","Ivoorkust"] },
  { groep:"F", teams:["Nederland","Japan","Zweden","Tunesië"] },
  { groep:"G", teams:["België","Egypte","Iran","Nieuw-Zeeland"] },
  { groep:"H", teams:["Spanje","Kaapverdië","Uruguay","Saoedi-Arabië"] },
  { groep:"I", teams:["Frankrijk","Senegal","Noorwegen","Irak"] },
  { groep:"J", teams:["Argentinië","Oostenrijk","Algerije","Jordanië"] },
  { groep:"K", teams:["Portugal","Colombia","Oezbekistan","Congo"] },
  { groep:"L", teams:["Engeland","Kroatië","Ghana","Panama"] }
];

// Dynamisch — door de scraper gevuld.
//   POOL_RESULTS:   { "mexico|zuidafrika": "2-0", ... }  (genormaliseerde sleutel home|away)
//   POOL_STANDINGS: { "A": [ { team, played, w, g, v, points, saldo } ], ... }
window.POOL_RESULTS = {"mexico|zuidafrika":"2-0","zuidkorea|tsjechie":"2-1"};
// Voorspellingen per gestarte wedstrijd (scraper). Sleutel = kalender-index
// (POOL_CALENDAR[i]); waarde = [{player, h, a}].
window.POOL_PREDICTIONS = {"0":[{"player":"Dennis","h":2,"a":0},{"player":"Crazy Dutchman","h":2,"a":0},{"player":"Bertjuh","h":2,"a":0},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":1,"a":0},{"player":"JoycevanRiet","h":2,"a":1},{"player":"Bo.","h":2,"a":0},{"player":"Bobcorn","h":1,"a":0},{"player":"El-Toro-Loco","h":2,"a":1},{"player":"StudentjeIndicium","h":2,"a":0},{"player":"AlinevanVuuren","h":2,"a":1},{"player":"Robertosxs","h":2,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"Mobicontrol","h":2,"a":0},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Katinkadeb","h":2,"a":0},{"player":"BornBjorg","h":3,"a":1},{"player":"Fseton","h":3,"a":0},{"player":"WesleyMerwe","h":1,"a":0},{"player":"Daisy010","h":0,"a":0},{"player":"Givano","h":2,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"John0504","h":3,"a":1},{"player":"Rugnummer67","h":2,"a":1},{"player":"StanleyBoessen","h":1,"a":1},{"player":"GonnyDebode","h":2,"a":0},{"player":"Marlayne","h":3,"a":1},{"player":"Jules-","h":2,"a":2},{"player":"JanCandiano","h":3,"a":2},{"player":"Harro1","h":2,"a":0},{"player":"JRHJNB","h":2,"a":0},{"player":"Heer","h":2,"a":0},{"player":"Wkkipje","h":2,"a":0},{"player":"GeorgeV.","h":2,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":0},{"player":"Christopheramboz","h":2,"a":0},{"player":"Carlo","h":3,"a":1},{"player":"Erol","h":2,"a":0},{"player":"Jan","h":2,"a":1},{"player":"Jeroen","h":2,"a":0},{"player":"Kees","h":2,"a":0},{"player":"Kleine Flo","h":2,"a":0},{"player":"Marco","h":1,"a":0},{"player":"Maureen","h":2,"a":1},{"player":"Maurice","h":2,"a":0},{"player":"Norman","h":2,"a":0},{"player":"Roan","h":2,"a":0},{"player":"Ruud","h":2,"a":0},{"player":"Tom","h":2,"a":1},{"player":"Ton","h":1,"a":1}],"1":[{"player":"Dennis","h":2,"a":1},{"player":"Crazy Dutchman","h":2,"a":1},{"player":"Bertjuh","h":1,"a":3},{"player":"Oppie1978","h":1,"a":1},{"player":"Raymond de Haas","h":1,"a":1},{"player":"JoycevanRiet","h":1,"a":1},{"player":"Bo.","h":1,"a":1},{"player":"Bobcorn","h":1,"a":1},{"player":"El-Toro-Loco","h":1,"a":3},{"player":"StudentjeIndicium","h":1,"a":1},{"player":"AlinevanVuuren","h":1,"a":1},{"player":"Robertosxs","h":1,"a":1},{"player":"Reboss","h":1,"a":1},{"player":"Mobicontrol","h":1,"a":1},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Katinkadeb","h":1,"a":1},{"player":"BornBjorg","h":1,"a":1},{"player":"Fseton","h":2,"a":2},{"player":"WesleyMerwe","h":1,"a":0},{"player":"Daisy010","h":0,"a":1},{"player":"Givano","h":1,"a":1},{"player":"Trauner_in_Oranje","h":1,"a":0},{"player":"John0504","h":1,"a":2},{"player":"Rugnummer67","h":1,"a":1},{"player":"StanleyBoessen","h":2,"a":0},{"player":"GonnyDebode","h":1,"a":3},{"player":"Marlayne","h":2,"a":3},{"player":"Jules-","h":1,"a":1},{"player":"JanCandiano","h":2,"a":0},{"player":"Harro1","h":1,"a":3},{"player":"JRHJNB","h":1,"a":1},{"player":"Heer","h":1,"a":1},{"player":"Wkkipje","h":1,"a":1},{"player":"GeorgeV.","h":1,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":1},{"player":"Christopheramboz","h":2,"a":1},{"player":"Carlo","h":1,"a":4},{"player":"Erol","h":1,"a":1},{"player":"Jeroen","h":2,"a":1},{"player":"Kees","h":1,"a":1},{"player":"Kleine Flo","h":1,"a":1},{"player":"Marco","h":0,"a":1},{"player":"Maureen","h":0,"a":1},{"player":"Maurice","h":0,"a":1},{"player":"Norman","h":2,"a":0},{"player":"Roan","h":1,"a":1},{"player":"Ruud","h":0,"a":2},{"player":"Tom","h":1,"a":1},{"player":"Ton","h":1,"a":1}]};
window.POOL_STANDINGS = {"A":[{"team":"Mexico","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":2},{"team":"Zuid Korea","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":1},{"team":"Tsjechië","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-1},{"team":"Zuid Afrika","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2}],"B":[{"team":"Zwitserland","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Qatar","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Bosnië","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Canada","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0}],"D":[{"team":"Turkije","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Australië","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Paraguay","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"USA","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0}],"C":[{"team":"Marokko","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Brazilië","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Schotland","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Haiti","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0}],"E":[{"team":"Curacao","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Duitsland","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Ecuador","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Ivoorkust","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0}],"F":[{"team":"Tunesië","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Zweden","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Japan","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Nederland","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0}],"H":[{"team":"Kaapverdie","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Spanje","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Uruguay","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Saoedi-Arabie","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0}],"G":[{"team":"Egypte","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"België","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Nieuw Zeeland","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Iran","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0}],"I":[{"team":"Noorwegen","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Irak","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Senegal","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Frankrijk","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0}],"J":[{"team":"Jordanie","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Oostenrijk","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Algerije","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Argentinië","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0}],"L":[{"team":"Kroatië","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Engeland","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Panama","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Ghana","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0}],"K":[{"team":"Colombia","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Oezbekistan","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Congo","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Portugal","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0}]};

// Puntenhistorie per speler (door de scraper bijgehouden, max 12 metingen) —
// voedt de mini-sparkline in de ranglijst. Groeit alleen als de punten wijzigen.
window.POOL_HISTORY = {};

// Wedstrijd-radar: de eerste zes duels, met consensus en Henks blik.
window.POOL_MATCHES_UPCOMING = [
  { id: 43993, date: "2026-06-11T21:00:00+02:00", home: "Mexico", away: "Zuid-Afrika",
    consensus: { home: 86, draw: 8, away: 6 }, outlier: "Wisselbeker: 0-2", stadium: "Estadio Azteca", city: "Mexico-Stad",
    henkPick: "Mexico thuis, voor 87.000 man in het Azteca. Zuid-Afrika komt daar geen voetbal spelen maar overleven. Ik zeg 2-0 en geen woord meer erover." },
  { id: 43994, date: "2026-06-12T04:00:00+02:00", home: "Zuid-Korea", away: "Tsjechië",
    consensus: { home: 42, draw: 33, away: 25 }, outlier: "Mobicontrol: 3-0", stadium: "BC Place", city: "Vancouver",
    henkPick: "Vier uur 's nachts, alleen voor de diehards. Tsjechië teert nog altijd op 1996. Son beslist dit duel een uur voordat jullie wekker afgaat. 2-1." },
  { id: 43995, date: "2026-06-12T21:00:00+02:00", home: "Canada", away: "Bosnië",
    consensus: { home: 68, draw: 17, away: 15 }, outlier: "Brokkenpiloot: 1-3", stadium: "BMO Field", city: "Toronto",
    henkPick: "Canada in eigen huis, Bosnië dat denkt dat het er al is. Dat is het niet. 2-1 voor de gastheren." },
  { id: 43996, date: "2026-06-13T03:00:00+02:00", home: "USA", away: "Paraguay",
    consensus: { home: 72, draw: 18, away: 10 }, outlier: "Heer: 0-1", stadium: "SoFi Stadium", city: "Los Angeles",
    henkPick: "Pulisic in Los Angeles, heel Hollywood op de tribune. Paraguay parkeert de bus — maar die bus krijgt twee deuken. 2-0." },
  { id: 43997, date: "2026-06-13T21:00:00+02:00", home: "Qatar", away: "Zwitserland",
    consensus: { home: 14, draw: 22, away: 64 }, outlier: "Givano: 2-2", stadium: "Mercedes-Benz Stadium", city: "Atlanta",
    henkPick: "Qatar zoekt nog altijd naar de vorm van... tja, van wanneer eigenlijk? Zwitserland wint dit koel en zakelijk. 0-2." },
  { id: 43998, date: "2026-06-14T00:00:00+02:00", home: "Brazilië", away: "Marokko",
    consensus: { home: 55, draw: 28, away: 17 }, outlier: "AlinevanVuuren: 1-2", stadium: "Hard Rock Stadium", city: "Miami",
    henkPick: "Dé kraker van de openingsweek. Marokko bewees in 2022 dat het geen toeval was, Brazilië heeft iets recht te zetten. Ik zeg 1-1 — en Aline mag heel even glimlachen." }
];

// Pool-DNA — indicatie op basis van de poule-percentages.
window.POOL_DNA = {
  champions: [
    { name: "Spanje",     flag: "🇪🇸", count: 12 },
    { name: "Frankrijk",  flag: "🇫🇷", count: 9  },
    { name: "Argentinië", flag: "🇦🇷", count: 8  },
    { name: "Engeland",   flag: "🇬🇧", count: 6  },
    { name: "Brazilië",   flag: "🇧🇷", count: 5  },
    { name: "Nederland",  flag: "🇳🇱", count: 4  },
    { name: "Duitsland",  flag: "🇩🇪", count: 2  }
  ],
  topscorers: [
    { name: "Kylian Mbappé",     country: "🇫🇷", count: 14 },
    { name: "Harry Kane",        country: "🇬🇧", count: 8  },
    { name: "Lionel Messi",      country: "🇦🇷", count: 7  },
    { name: "Lamine Yamal",      country: "🇪🇸", count: 5  },
    { name: "Erling Haaland",    country: "🇳🇴", count: 4  },
    { name: "Vinícius Jr.",      country: "🇧🇷", count: 3  },
    { name: "Cristiano Ronaldo", country: "🇵🇹", count: 3  }
  ]
};

window.POOL_BADGES = [
  { icon: "🎯", name: "Mister Perfect",  desc: "Voorspel de exacte uitslag van een wedstrijd.",          holder: null },
  { icon: "🌊", name: "Tegen de stroom", desc: "Een afwijkende voorspelling die tóch uitkomt.",          holder: null },
  { icon: "🔥", name: "Streak King",     desc: "Vijf wedstrijden op rij de juiste toto (winst/gelijk/verlies).", holder: null },
  { icon: "📈", name: "Klimgeit",        desc: "Grootste stijger van de week (vijf plekken of meer).",   holder: null },
  { icon: "🎲", name: "Waaghals",        desc: "Voorspel een uitslag met zes of meer doelpunten — en krijg gelijk.", holder: null },
  { icon: "🏆", name: "Poleposition",    desc: "Sta bovenaan na een speeldag.",                          holder: null },
  { icon: "🧠", name: "De Profeet",      desc: "Voorspel de wereldkampioen correct.",                    holder: null },
  { icon: "💀", name: "De Vrije Val",    desc: "Grootste daler van de week (vijf plekken of meer).",     holder: null },
  { icon: "⚡", name: "Eerste Bloed",    desc: "De eerste correcte voorspelling van het toernooi.",      holder: null }
];

/* ============================================================
   HENK — vaste commentator. Kantinepraat met een mes erin.
   Quotes zijn FUNCTIES die een stats-object (s) krijgen, zodat
   alle aantallen altijd kloppen met de actuele data:
     s.total, s.complete, s.groep, s.bezig, s.nul, s.nulNames,
     s.notPaid, s.notPaidNames, s.phase ('pre'|'today'|'tournament'),
     s.daysToKickoff, s.speeldag, s.todayCount
   ============================================================ */
window.HENK = {
  name: "Henk",
  bio: "Onze vaste analist. Kantinegevoel, scherp randje. Eerder Voetbal Inside dan Studio Voetbal.",
  avatar: "H",

  // Dagmonoloog vóór en op de openingsdag — deterministisch per datum gekozen.
  monologen_vooraf: [
    (s) => `${s.nul} deelnemers staan nog op nul. Nul wedstrijden, nul visie, nul excuses. ${s.nulNames.slice(0,3).join(', ')} — ik noem geen namen. O nee, dat deed ik net wél. De teller loopt.`,
    (s) => `${s.complete} deelnemers hebben álles ingevuld: 104 wedstrijden, een wereldkampioen en een topscorer. De rest hangt ergens tussen goede bedoelingen en uitstelgedrag. Kies een kant, zou ik zeggen.`,
    (s) => s.notPaid > 0
      ? `${s.notPaid} ${s.notPaid === 1 ? 'deelnemer heeft' : 'mensen hebben'} de inleg nog niet betaald. Ik zeg het zoals het is: zonder inleg geen eregalerij. De Tikkie is geduldig — de deadline niet.`
      : `Alle ${s.total} deelnemers hebben betaald. Allemaal. Dat had ik niet verwacht van deze groep, en ik zeg het maar gewoon. De pot is gevuld, de excuses zijn op.`,
    (s) => s.phase === 'today'
      ? `Vanavond om 21:00 rolt de bal in het Azteca. Wie zijn voorspellingen nu nog niet binnen heeft, gokt straks tussen de reclameblokken door. Niet doen. Nu invullen.`
      : `Nog ${s.daysToKickoff === 1 ? 'één dag' : s.daysToKickoff + ' dagen'} tot de aftrap. Wie nu invult, heeft nog tijd om na te denken. Wie wacht tot het laatste moment, voorspelt straks Tunesië–Japan op gevoel om vier uur 's nachts. Succes daarmee.`
  ],

  // Dagmonoloog tijdens het toernooi.
  monologen_toernooi: [
    (s) => `Speeldag ${s.speeldag}. ${s.todayCount > 0 ? `Vandaag ${s.todayCount === 1 ? 'één wedstrijd' : s.todayCount + ' wedstrijden'} op het programma.` : 'Vandaag geen wedstrijden — een rustdag, zogenaamd.'} De ranglijst slaapt nooit, onthoud dat.`,
    (s) => `We zijn onderweg. ${s.nul > 0 ? `En nog stééds staan ${s.nul} deelnemers op nul ingevulde wedstrijden. Het toernooi is begonnen, mensen. De boot vaart.` : 'Iedereen doet mee — zo hoort het.'}`,
    (s) => `Kijk goed naar de stand van vandaag. Posities zeggen weinig op dag één en alles op dag tien. Wie nu onderin staat: rustig blijven. Wie bovenaan staat: vooral niet te vroeg juichen.`
  ],

  // Losse uitspraken voor de Henk-bubbel — vóór het toernooi.
  hot_takes: [
    (s) => `${s.nul} man op nul. ${s.nulNames.slice(0,3).join(', ')} — puur uit liefde dat ik jullie noem. De aftrap wacht op niemand.`,
    (s) => s.notPaid > 0
      ? `${s.notPaid} deelnemers hebben nog niet betaald. De pot is het podium. Zonder inleg sta je straks te juichen langs de zijlijn.`
      : `De pot is compleet — iedereen heeft betaald. Vanaf nu kan niemand zich meer verschuilen achter "ik deed toch niet écht mee".`,
    () => `De meeste stemmen voor de wereldtitel gaan naar Spanje. Veilig. Voorspelbaar. Een tikje braaf ook — durf eens iets, mensen.`,
    () => `Mbappé is topscorer-favoriet in deze poule, net als bij de halve wereldbevolking. Maar drie stemmen voor Vinícius — de man die naast Mbappé speelt bij Real Madrid — dat is gewoon slordig huiswerk.`,
    () => `<strong>Mauricio1980</strong> kiest Frankrijk als wereldkampioen. Mauricio. Heb je de bracket gezien? Sterkte wens ik je. Kansen geef ik je niet.`,
    () => `Iemand in deze poule heeft Brazilië–Marokko op 1-2 staan. Voor Marokko. Aline, jij dus. Komt het uit, dan haal ik een week lang koffie voor je. Komt het niet uit — dan was het in elk geval dapper.`,
    () => `De gemiddelde voorspelling in deze poule is 2-1. Braaf, veilig, Hollands. Op het vorige WK eindigde nog geen één op de acht wedstrijden in 2-1. Jullie zijn met z'n allen één grote verzekeringspolis.`,
    () => `Nederland krijgt amper stemmen voor de wereldtitel. In een poule die nota bene Indicium heet, vol Oranje-shirts op vrijdag. Vaderlandsliefde verkoopt blijkbaar slecht dit jaar.`,
    () => `<strong>Robertosxs</strong> en <strong>ikgajuichen</strong> — allebei alles ingevuld, allebei zonder voornaam of gezicht. Anonieme killers of dezelfde persoon met twee accounts? Ik hou het in de gaten.`
  ],

  // Extra uitspraken zodra het toernooi loopt (positie-wissels en duiding).
  ranking_change: [
    () => `De eerste uitslagen zijn binnen en kijk: de papieren werkelijkheid en de echte werkelijkheid zijn twee verschillende sporten.`,
    () => `Wie bovenaan staat na één speeldag heeft geluk gehad. Wie er na tien speeldagen nog staat, kan voetbal kijken. Onthoud wie ik ben als het zover is.`,
    (s) => `${s.nul > 0 ? `Er staan nog steeds mensen op nul ingevulde wedstrijden terwijl het toernooi loopt. Dat is geen pech meer, dat is een keuze.` : `Iedereen is aangehaakt. Nu wordt het menens.`}`
  ],

  // Henks oordeel per speler — voor de profielkaart.
  player_takes: {
    "Wolsman": "De beheerder. Alles ingevuld — maar ja, dat hóórt ook als je de pool runt. Of hij ook kan winnen, is een tweede. Het klassement kent geen vriendjes.",
    "Robertosxs": "Geen voornaam, geen achternaam, wél alle 104 wedstrijden ingevuld. De stille killer van deze poule. Of de schoonmaker met voorkennis. We komen erachter.",
    "ikgajuichen": "Komt binnenwandelen, vult in één ruk alle 104 wedstrijden in, kiest winnaar én topscorer, en rekent meteen af. De perfecte nieuwkomer. Vrijwel verdacht perfect. Niemand weet wie het is — en dat maakt het alleen maar beter.",
    "Mauricio1980": "Frankrijk als wereldkampioen. Mauricio toch. Heb je de bracket gezien? Ik geef je sterkte, want kansen geef ik je niet.",
    "AlinevanVuuren": "Marokko dat in de openingsweek van Brazilië wint — niemand anders durft dat aan. Komt het uit, dan is Aline twee weken lang onaantastbaar bij de koffieautomaat.",
    "Katinkadeb": "Eerst 72 wedstrijden zonder winnaar en topscorer, inmiddels alles netjes binnen. Kijk, dát bedoel ik nou. Iemand die luistert. Nu de knock-outfase nog, Katinka.",
    "BornBjorg": "Van nul naar vierentwintig ingevulde wedstrijden in een paar dagen, plus winnaar en topscorer. Bjorg is wakker. Doorpakken nu — de groepsfase wacht niet.",
    "Marlayne": "Stond vorige week nog op nul, zit nu op zesentwintig wedstrijden mét wereldkampioen. Marlayne haalt in als een bezetene. Zo zie ik het graag.",
    "Norman.P": "Wereldkampioen gekozen, topscorer gekozen, nul wedstrijden ingevuld. Norman bouwt het huis vanaf het dak. Origineel is het wel.",
    "Brokkenpiloot": "Zeventien wedstrijden. De naam dekt de lading. Maar wie nu doorpakt, vliegt zo de top tien binnen — turbulentie hoort erbij.",
    "Wisselbeker": "Twee wedstrijden ingevuld. Het dubbele van vorige week, dat dan weer wel. In dit tempo is de poule af rond het WK van 2030.",
    "Fseton": "Drie wedstrijden, maar wél een wereldkampioen en een topscorer. De omgekeerde volgorde — maar er zit beweging in, en dat telt.",
    "Trauner_in_Oranje": "Wereldkampioen en topscorer keurig gekozen, nul wedstrijden ingevuld. Dat is kaartjes kopen voor de finale en vervolgens thuisblijven. Afmaken, Trauner.",
    "Rugnummer67": "Zelfde verhaal als Trauner: wel een kampioen, geen wedstrijden. Een rugnummer zonder wedstrijdminuten — zonde van het shirt.",
    "El-Toro-Loco": "Elf wedstrijden, geen winnaar, geen topscorer. El Toro, de arena gaat donderdag open — met of zonder stier.",
    "Mobicontrol": "Mijn stiekeme favoriet. Drieënvijftig wedstrijden en keuzes met lef erin. Wie afmaakt waar hij aan begonnen is, loopt zo de top vijf binnen.",
    "StanleyBoessen": "Tweeënzeventig wedstrijden keurig ingevuld, maar geen winnaar en geen topscorer. Stanley, dat is een huis zonder dak. Tien seconden werk.",
    "Erol_Ulu": "Eerst ontbrak de topscorer nog, inmiddels staat alles er netjes in. Kijk, zó kan het dus ook. Nu de knock-outfase nog, Erol — niet verslappen.",
    "JoycevanRiet": "Groepsfase ingevuld, winnaar en topscorer gekozen, inleg betaald. Joyce is stilletjes een van de best voorbereide deelnemers van deze poule. Onthoud die naam.",
    "GeorgeV.": "Eén wedstrijd ingevuld, verder niets. De inleg is inmiddels binnen, dus de intentie is er. Nu de rest nog, George — meedoen is een werkwoord.",
    "Pepijndh": "Nul wedstrijden ingevuld. De inleg is binnen, dus de wil is er. Nu de daden nog, Pepijn. De klok tikt richting donderdagavond.",
    "default": "Over deze speler heb ik nog geen oordeel klaarliggen. Dat komt vanzelf — iedereen gaat hier een keer door de molen."
  }
};
