/* ============================================================
   Indi-Arena 2026 — pool data
   Bron: live scrape van wkpooltjes.nl op 10-06-2026 ~22:45
   Verversen: scripts/scraper.js draaien of update.bat
   ============================================================ */

window.POOL_META = {
  poolId: 423,
  name: "Indicium WK Poule 2026",
  totalPlayers: 56,
  capacityMax: 75,
  syncedAt: "2026-06-15T05:31:20.071Z",
  firstMatchAt: "2026-06-11T21:00:00+02:00",
  predictionsPublic: false,
  // Wordt true zodra de scraper echte punten ziet — de ranglijst
  // schakelt dan automatisch om van invulstatus naar punten.
  pointsAvailable: true
};

// points/prevPos worden door de scraper gevuld zodra het toernooi loopt.
window.POOL_PLAYERS = [
  { name: "Wolsman", matches: 104, winner: true, topscorer: true, paid: true, points: 850, prevPos: 12 },
  { name: "Kleine Flo", matches: 72, winner: true, topscorer: true, paid: true, points: 565, prevPos: 41 },
  { name: "Bertjuh", matches: 72, winner: true, topscorer: true, paid: true, points: 670, prevPos: 29 },
  { name: "Bobcorn", matches: 72, winner: true, topscorer: true, paid: true, points: 570, prevPos: 40 },
  { name: "UedaTopscorer", matches: 72, winner: true, topscorer: true, paid: true, points: 490, prevPos: 47 },
  { name: "Oppie1978", matches: 24, winner: true, topscorer: true, paid: true, points: 695, prevPos: 24 },
  { name: "El-Toro-Loco", matches: 11, winner: false, topscorer: false, paid: true, points: 650, prevPos: 30 },
  { name: "StudentjeIndicium", matches: 72, winner: true, topscorer: true, paid: true, points: 825, prevPos: 13 },
  { name: "Mauricio1980", matches: 72, winner: true, topscorer: true, paid: true, points: 565, prevPos: 41 },
  { name: "AlinevanVuuren", matches: 72, winner: true, topscorer: true, paid: true, points: 805, prevPos: 14 },
  { name: "Wisselbeker", matches: 26, winner: true, topscorer: true, paid: true, points: 885, prevPos: 10 },
  { name: "Roantuit", matches: 0, winner: false, topscorer: false, paid: true, points: 0, prevPos: 51 },
  { name: "Robertosxs", matches: 104, winner: true, topscorer: true, paid: true, points: 745, prevPos: 17 },
  { name: "Reboss", matches: 72, winner: true, topscorer: true, paid: true, points: 620, prevPos: 35 },
  { name: "Mobicontrol", matches: 53, winner: true, topscorer: true, paid: true, points: 760, prevPos: 16 },
  { name: "Brokkenpiloot", matches: 24, winner: true, topscorer: true, paid: true, points: 675, prevPos: 28 },
  { name: "Katinkadeb", matches: 72, winner: true, topscorer: true, paid: true, points: 565, prevPos: 41 },
  { name: "BornBjorg", matches: 24, winner: true, topscorer: true, paid: true, points: 980, prevPos: 4 },
  { name: "Fseton", matches: 24, winner: true, topscorer: true, paid: true, points: 695, prevPos: 24 },
  { name: "Raymond de Haas", matches: 14, winner: true, topscorer: true, paid: true, points: 460, prevPos: 49 },
  { name: "ScheidsTon", matches: 0, winner: false, topscorer: false, paid: true, points: 0, prevPos: 51 },
  { name: "THEGOAT37", matches: 31, winner: true, topscorer: true, paid: true, points: 690, prevPos: 27 },
  { name: "WesleyMerwe", matches: 27, winner: true, topscorer: true, paid: true, points: 575, prevPos: 39 },
  { name: "Daisy010", matches: 26, winner: true, topscorer: true, paid: true, points: 640, prevPos: 33 },
  { name: "Erol_Ulu", matches: 72, winner: true, topscorer: true, paid: true, points: 980, prevPos: 4 },
  { name: "Givano", matches: 72, winner: true, topscorer: true, paid: true, points: 610, prevPos: 36 },
  { name: "VanderLans", matches: 15, winner: true, topscorer: true, paid: true, points: 980, prevPos: 4 },
  { name: "Trauner_in_Oranje", matches: 12, winner: true, topscorer: true, paid: true, points: 735, prevPos: 20 },
  { name: "Keepertje", matches: 72, winner: true, topscorer: true, paid: true, points: 460, prevPos: 49 },
  { name: "John0504", matches: 72, winner: true, topscorer: true, paid: true, points: 475, prevPos: 48 },
  { name: "Rugnummer67", matches: 16, winner: true, topscorer: true, paid: true, points: 555, prevPos: 44 },
  { name: "Norman.P", matches: 13, winner: true, topscorer: true, paid: true, points: 1135, prevPos: 1 },
  { name: "StanleyBoessen", matches: 72, winner: false, topscorer: false, paid: true, points: 705, prevPos: 21 },
  { name: "GonnyDebode", matches: 72, winner: true, topscorer: true, paid: true, points: 600, prevPos: 37 },
  { name: "Marlayne", matches: 33, winner: true, topscorer: true, paid: true, points: 645, prevPos: 32 },
  { name: "Jules-", matches: 72, winner: true, topscorer: true, paid: true, points: 640, prevPos: 33 },
  { name: "Harro1", matches: 72, winner: true, topscorer: true, paid: true, points: 650, prevPos: 30 },
  { name: "JRHJNB", matches: 72, winner: true, topscorer: true, paid: true, points: 700, prevPos: 22 },
  { name: "JoycevanRiet", matches: 72, winner: true, topscorer: true, paid: true, points: 0, prevPos: 51 },
  { name: "Heer", matches: 72, winner: true, topscorer: true, paid: true, points: 775, prevPos: 15 },
  { name: "Pepijndh", matches: 0, winner: false, topscorer: false, paid: true, points: 0, prevPos: 51 },
  { name: "Cornelis2026", matches: 29, winner: true, topscorer: true, paid: true, points: 505, prevPos: 46 },
  { name: "Wkkipje", matches: 19, winner: true, topscorer: true, paid: true, points: 740, prevPos: 18 },
  { name: "MaureenGLA", matches: 72, winner: true, topscorer: true, paid: true, points: 695, prevPos: 24 },
  { name: "GeorgeV.", matches: 72, winner: true, topscorer: true, paid: true, points: 1080, prevPos: 2 },
  { name: "ikgajuichen", matches: 104, winner: true, topscorer: true, paid: true, points: 905, prevPos: 9 },
  { name: "JanCandiano", matches: 72, winner: true, topscorer: true, paid: true, points: 585, prevPos: 38 },
  { name: "Bo.", matches: 72, winner: true, topscorer: true, paid: true, points: 545, prevPos: 45 },
  { name: "Koninkie", matches: 72, winner: true, topscorer: true, paid: true, points: 865, prevPos: 11 },
  { name: "Martijnmeestervoorspeller", matches: 72, winner: true, topscorer: true, paid: true, points: 920, prevPos: 7 },
  { name: "Crazy Dutchman", matches: 72, winner: true, topscorer: true, paid: true, points: 920, prevPos: 7 },
  { name: "RoanTuit(messi)", matches: 13, winner: true, topscorer: true, paid: true, points: 700, prevPos: 22 },
  { name: "Christopheramboz", matches: 17, winner: true, topscorer: true, paid: true, points: 1025, prevPos: 3 },
  { name: "Frenk010fr", matches: 0, winner: false, topscorer: false, paid: true, points: 0, prevPos: 51 },
  { name: "WillemCo", matches: 13, winner: false, topscorer: false, paid: true, points: 740, prevPos: 18 },
  { name: "Nelson1983", matches: 11, winner: false, topscorer: false, paid: true, points: 0, prevPos: 51 }
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
window.POOL_RESULTS = {"mexico|zuidafrika":"2-0","zuidkorea|tsjechie":"2-1","canada|bosnie":"1-1","usa|paraguay":"4-1","qatar|zwitserland":"1-1","brazilie|marokko":"1-1","haiti|schotland":"0-1","australie|turkije":"2-0","duitsland|curacao":"7-1","nederland|japan":"2-2","ivoorkust|ecuador":"1-0","zweden|tunesie":"5-1"};
// Voorspellingen per gestarte wedstrijd (scraper). Sleutel = kalender-index
// (POOL_CALENDAR[i]); waarde = [{player, h, a}].
window.POOL_PREDICTIONS = {"0":[{"player":"Dennis","h":2,"a":0},{"player":"Crazy Dutchman","h":2,"a":0},{"player":"Bertjuh","h":2,"a":0},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":1,"a":0},{"player":"JoycevanRiet","h":2,"a":1},{"player":"Bo.","h":2,"a":0},{"player":"Bobcorn","h":1,"a":0},{"player":"El-Toro-Loco","h":2,"a":1},{"player":"StudentjeIndicium","h":2,"a":0},{"player":"AlinevanVuuren","h":2,"a":1},{"player":"Robertosxs","h":2,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"Mobicontrol","h":2,"a":0},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Katinkadeb","h":2,"a":0},{"player":"BornBjorg","h":3,"a":1},{"player":"Fseton","h":3,"a":0},{"player":"WesleyMerwe","h":1,"a":0},{"player":"Daisy010","h":0,"a":0},{"player":"Givano","h":2,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"John0504","h":3,"a":1},{"player":"Rugnummer67","h":2,"a":1},{"player":"StanleyBoessen","h":1,"a":1},{"player":"GonnyDebode","h":2,"a":0},{"player":"Marlayne","h":3,"a":1},{"player":"Jules-","h":2,"a":2},{"player":"JanCandiano","h":3,"a":2},{"player":"Harro1","h":2,"a":0},{"player":"JRHJNB","h":2,"a":0},{"player":"Heer","h":2,"a":0},{"player":"Wkkipje","h":2,"a":0},{"player":"GeorgeV.","h":2,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":0},{"player":"Christopheramboz","h":2,"a":0},{"player":"Carlo","h":3,"a":1},{"player":"Erol","h":2,"a":0},{"player":"Jan","h":2,"a":1},{"player":"Jeroen","h":2,"a":0},{"player":"Kees","h":2,"a":0},{"player":"Kleine Flo","h":2,"a":0},{"player":"Marco","h":1,"a":0},{"player":"Maureen","h":2,"a":1},{"player":"Maurice","h":2,"a":0},{"player":"Norman","h":2,"a":0},{"player":"Roan","h":2,"a":0},{"player":"Ruud","h":2,"a":0},{"player":"Tom","h":2,"a":1},{"player":"Ton","h":1,"a":1}],"1":[{"player":"Dennis","h":2,"a":1},{"player":"Crazy Dutchman","h":2,"a":1},{"player":"Bertjuh","h":1,"a":3},{"player":"Oppie1978","h":1,"a":1},{"player":"Raymond de Haas","h":1,"a":1},{"player":"JoycevanRiet","h":1,"a":1},{"player":"Bo.","h":1,"a":1},{"player":"Bobcorn","h":1,"a":1},{"player":"El-Toro-Loco","h":1,"a":3},{"player":"StudentjeIndicium","h":1,"a":1},{"player":"AlinevanVuuren","h":1,"a":1},{"player":"Robertosxs","h":1,"a":1},{"player":"Reboss","h":1,"a":1},{"player":"Mobicontrol","h":1,"a":1},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Katinkadeb","h":1,"a":1},{"player":"BornBjorg","h":1,"a":1},{"player":"Fseton","h":2,"a":2},{"player":"WesleyMerwe","h":1,"a":0},{"player":"Daisy010","h":0,"a":1},{"player":"Givano","h":1,"a":1},{"player":"Trauner_in_Oranje","h":1,"a":0},{"player":"John0504","h":1,"a":2},{"player":"Rugnummer67","h":1,"a":1},{"player":"StanleyBoessen","h":2,"a":0},{"player":"GonnyDebode","h":1,"a":3},{"player":"Marlayne","h":2,"a":3},{"player":"Jules-","h":1,"a":1},{"player":"JanCandiano","h":2,"a":0},{"player":"Harro1","h":1,"a":3},{"player":"JRHJNB","h":1,"a":1},{"player":"Heer","h":1,"a":1},{"player":"Wkkipje","h":1,"a":1},{"player":"GeorgeV.","h":1,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":1},{"player":"Christopheramboz","h":2,"a":1},{"player":"Carlo","h":1,"a":4},{"player":"Erol","h":1,"a":1},{"player":"Jeroen","h":2,"a":1},{"player":"Kees","h":1,"a":1},{"player":"Kleine Flo","h":1,"a":1},{"player":"Marco","h":0,"a":1},{"player":"Maureen","h":0,"a":1},{"player":"Maurice","h":0,"a":1},{"player":"Norman","h":2,"a":0},{"player":"Roan","h":1,"a":1},{"player":"Ruud","h":0,"a":2},{"player":"Tom","h":1,"a":1},{"player":"Ton","h":1,"a":1}],"2":[{"player":"Dennis","h":2,"a":1},{"player":"Crazy Dutchman","h":2,"a":1},{"player":"Bertjuh","h":1,"a":0},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":1,"a":0},{"player":"JoycevanRiet","h":0,"a":1},{"player":"Bo.","h":2,"a":1},{"player":"Bobcorn","h":0,"a":1},{"player":"El-Toro-Loco","h":1,"a":1},{"player":"StudentjeIndicium","h":1,"a":1},{"player":"AlinevanVuuren","h":2,"a":0},{"player":"Robertosxs","h":2,"a":1},{"player":"Reboss","h":2,"a":1},{"player":"Mobicontrol","h":2,"a":1},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Katinkadeb","h":2,"a":1},{"player":"BornBjorg","h":1,"a":1},{"player":"Fseton","h":2,"a":1},{"player":"WesleyMerwe","h":1,"a":2},{"player":"Daisy010","h":0,"a":2},{"player":"Givano","h":2,"a":1},{"player":"Trauner_in_Oranje","h":1,"a":0},{"player":"John0504","h":3,"a":1},{"player":"Rugnummer67","h":2,"a":1},{"player":"StanleyBoessen","h":0,"a":0},{"player":"GonnyDebode","h":2,"a":1},{"player":"Marlayne","h":1,"a":2},{"player":"Jules-","h":1,"a":1},{"player":"JanCandiano","h":2,"a":0},{"player":"Harro1","h":2,"a":1},{"player":"JRHJNB","h":2,"a":1},{"player":"Heer","h":1,"a":1},{"player":"Wkkipje","h":2,"a":2},{"player":"GeorgeV.","h":1,"a":0},{"player":"Martijnmeestervoorspeller","h":2,"a":1},{"player":"Christopheramboz","h":2,"a":1},{"player":"Carlo","h":3,"a":0},{"player":"Erol","h":2,"a":1},{"player":"Jan","h":1,"a":1},{"player":"Jeroen","h":0,"a":1},{"player":"Kees","h":1,"a":0},{"player":"Kleine Flo","h":1,"a":0},{"player":"Marco","h":0,"a":0},{"player":"Maureen","h":2,"a":0},{"player":"Maurice","h":0,"a":1},{"player":"Norman","h":1,"a":1},{"player":"Roan","h":3,"a":2},{"player":"Ruud","h":1,"a":1},{"player":"Tom","h":1,"a":0},{"player":"Ton","h":2,"a":1},{"player":"Willem","h":1,"a":1}],"3":[{"player":"Dennis","h":2,"a":0},{"player":"Crazy Dutchman","h":2,"a":1},{"player":"Bertjuh","h":2,"a":1},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":2,"a":1},{"player":"JoycevanRiet","h":2,"a":2},{"player":"Bo.","h":3,"a":1},{"player":"Bobcorn","h":1,"a":1},{"player":"El-Toro-Loco","h":1,"a":2},{"player":"StudentjeIndicium","h":2,"a":1},{"player":"AlinevanVuuren","h":1,"a":1},{"player":"Robertosxs","h":3,"a":1},{"player":"Reboss","h":2,"a":0},{"player":"Mobicontrol","h":2,"a":0},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Katinkadeb","h":2,"a":1},{"player":"BornBjorg","h":3,"a":0},{"player":"Fseton","h":2,"a":1},{"player":"WesleyMerwe","h":1,"a":0},{"player":"Daisy010","h":1,"a":0},{"player":"Givano","h":2,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":1},{"player":"John0504","h":2,"a":1},{"player":"Rugnummer67","h":2,"a":0},{"player":"StanleyBoessen","h":2,"a":1},{"player":"GonnyDebode","h":2,"a":0},{"player":"Marlayne","h":1,"a":1},{"player":"Jules-","h":2,"a":1},{"player":"JanCandiano","h":2,"a":1},{"player":"Harro1","h":2,"a":2},{"player":"JRHJNB","h":2,"a":1},{"player":"Heer","h":1,"a":1},{"player":"Wkkipje","h":2,"a":0},{"player":"GeorgeV.","h":2,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":1},{"player":"Christopheramboz","h":3,"a":1},{"player":"Carlo","h":4,"a":1},{"player":"Erol","h":2,"a":0},{"player":"Jan","h":3,"a":0},{"player":"Jeroen","h":1,"a":1},{"player":"Kees","h":1,"a":1},{"player":"Kleine Flo","h":1,"a":1},{"player":"Marco","h":1,"a":1},{"player":"Maureen","h":2,"a":0},{"player":"Maurice","h":2,"a":1},{"player":"Norman","h":2,"a":0},{"player":"Roan","h":2,"a":1},{"player":"Ruud","h":2,"a":0},{"player":"Tom","h":1,"a":1},{"player":"Ton","h":3,"a":1},{"player":"Willem","h":3,"a":0}],"4":[{"player":"Dennis","h":0,"a":2},{"player":"Crazy Dutchman","h":1,"a":3},{"player":"Bertjuh","h":1,"a":2},{"player":"Oppie1978","h":0,"a":2},{"player":"Raymond de Haas","h":0,"a":1},{"player":"JoycevanRiet","h":0,"a":2},{"player":"Bo.","h":0,"a":3},{"player":"Bobcorn","h":0,"a":2},{"player":"El-Toro-Loco","h":0,"a":2},{"player":"StudentjeIndicium","h":0,"a":2},{"player":"AlinevanVuuren","h":1,"a":4},{"player":"Robertosxs","h":0,"a":3},{"player":"Reboss","h":0,"a":2},{"player":"Mobicontrol","h":0,"a":2},{"player":"Brokkenpiloot","h":0,"a":3},{"player":"Katinkadeb","h":0,"a":2},{"player":"BornBjorg","h":0,"a":1},{"player":"Fseton","h":0,"a":3},{"player":"WesleyMerwe","h":0,"a":2},{"player":"Daisy010","h":0,"a":1},{"player":"Givano","h":0,"a":3},{"player":"Trauner_in_Oranje","h":1,"a":3},{"player":"John0504","h":1,"a":4},{"player":"Rugnummer67","h":0,"a":2},{"player":"StanleyBoessen","h":1,"a":1},{"player":"GonnyDebode","h":0,"a":3},{"player":"Marlayne","h":2,"a":3},{"player":"Jules-","h":0,"a":3},{"player":"JanCandiano","h":0,"a":2},{"player":"Harro1","h":1,"a":2},{"player":"JRHJNB","h":0,"a":2},{"player":"Heer","h":0,"a":2},{"player":"Wkkipje","h":1,"a":2},{"player":"GeorgeV.","h":0,"a":2},{"player":"Martijnmeestervoorspeller","h":1,"a":3},{"player":"Christopheramboz","h":1,"a":2},{"player":"Carlo","h":2,"a":1},{"player":"Erol","h":1,"a":1},{"player":"Jan","h":0,"a":2},{"player":"Jeroen","h":0,"a":3},{"player":"Kees","h":0,"a":2},{"player":"Kleine Flo","h":0,"a":2},{"player":"Marco","h":0,"a":2},{"player":"Maureen","h":1,"a":1},{"player":"Maurice","h":0,"a":3},{"player":"Norman","h":0,"a":3},{"player":"Roan","h":0,"a":3},{"player":"Ruud","h":0,"a":2},{"player":"Tom","h":1,"a":1},{"player":"Ton","h":0,"a":2},{"player":"Willem","h":0,"a":3}],"5":[{"player":"Dennis","h":2,"a":1},{"player":"Crazy Dutchman","h":2,"a":2},{"player":"Bertjuh","h":3,"a":1},{"player":"Oppie1978","h":3,"a":2},{"player":"Raymond de Haas","h":2,"a":0},{"player":"JoycevanRiet","h":3,"a":1},{"player":"Bo.","h":2,"a":0},{"player":"Bobcorn","h":2,"a":2},{"player":"El-Toro-Loco","h":3,"a":1},{"player":"StudentjeIndicium","h":4,"a":2},{"player":"AlinevanVuuren","h":2,"a":1},{"player":"Robertosxs","h":2,"a":1},{"player":"Reboss","h":2,"a":1},{"player":"Mobicontrol","h":3,"a":2},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Katinkadeb","h":3,"a":2},{"player":"BornBjorg","h":2,"a":1},{"player":"Fseton","h":2,"a":1},{"player":"WesleyMerwe","h":2,"a":0},{"player":"Daisy010","h":2,"a":1},{"player":"Givano","h":2,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":1},{"player":"John0504","h":3,"a":2},{"player":"Rugnummer67","h":2,"a":1},{"player":"StanleyBoessen","h":0,"a":1},{"player":"GonnyDebode","h":4,"a":1},{"player":"Marlayne","h":3,"a":1},{"player":"Jules-","h":2,"a":1},{"player":"JanCandiano","h":4,"a":3},{"player":"Harro1","h":1,"a":1},{"player":"JRHJNB","h":2,"a":1},{"player":"Heer","h":1,"a":0},{"player":"Wkkipje","h":3,"a":1},{"player":"GeorgeV.","h":1,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":2},{"player":"Christopheramboz","h":2,"a":2},{"player":"Carlo","h":4,"a":1},{"player":"Erol","h":2,"a":2},{"player":"Jan","h":2,"a":1},{"player":"Jeroen","h":2,"a":2},{"player":"Kees","h":2,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Marco","h":1,"a":1},{"player":"Maureen","h":1,"a":0},{"player":"Maurice","h":2,"a":1},{"player":"Norman","h":1,"a":1},{"player":"Roan","h":2,"a":2},{"player":"Ruud","h":2,"a":1},{"player":"Tom","h":2,"a":1},{"player":"Ton","h":1,"a":2},{"player":"Willem","h":3,"a":2}],"6":[{"player":"Dennis","h":0,"a":1},{"player":"Crazy Dutchman","h":1,"a":3},{"player":"Bertjuh","h":0,"a":1},{"player":"Oppie1978","h":1,"a":3},{"player":"Raymond de Haas","h":0,"a":2},{"player":"JoycevanRiet","h":0,"a":4},{"player":"Bo.","h":0,"a":2},{"player":"Bobcorn","h":0,"a":1},{"player":"El-Toro-Loco","h":0,"a":1},{"player":"StudentjeIndicium","h":1,"a":1},{"player":"AlinevanVuuren","h":0,"a":5},{"player":"Robertosxs","h":0,"a":1},{"player":"Reboss","h":0,"a":2},{"player":"Mobicontrol","h":0,"a":1},{"player":"Brokkenpiloot","h":0,"a":2},{"player":"Katinkadeb","h":0,"a":0},{"player":"BornBjorg","h":0,"a":1},{"player":"Fseton","h":0,"a":1},{"player":"WesleyMerwe","h":1,"a":1},{"player":"Daisy010","h":0,"a":2},{"player":"Givano","h":0,"a":3},{"player":"Trauner_in_Oranje","h":0,"a":3},{"player":"John0504","h":1,"a":3},{"player":"Rugnummer67","h":0,"a":2},{"player":"StanleyBoessen","h":1,"a":1},{"player":"GonnyDebode","h":0,"a":5},{"player":"Marlayne","h":0,"a":1},{"player":"Jules-","h":0,"a":2},{"player":"JanCandiano","h":0,"a":3},{"player":"Harro1","h":0,"a":2},{"player":"JRHJNB","h":0,"a":2},{"player":"Heer","h":0,"a":1},{"player":"Wkkipje","h":0,"a":2},{"player":"GeorgeV.","h":0,"a":1},{"player":"Martijnmeestervoorspeller","h":1,"a":3},{"player":"Christopheramboz","h":0,"a":2},{"player":"Carlo","h":1,"a":2},{"player":"Erol","h":0,"a":2},{"player":"Jan","h":0,"a":1},{"player":"Jeroen","h":0,"a":2},{"player":"Kees","h":0,"a":0},{"player":"Kleine Flo","h":0,"a":2},{"player":"Marco","h":0,"a":1},{"player":"Maureen","h":0,"a":3},{"player":"Maurice","h":0,"a":3},{"player":"Norman","h":0,"a":2},{"player":"Roan","h":0,"a":3},{"player":"Ruud","h":0,"a":1},{"player":"Tom","h":0,"a":1},{"player":"Ton","h":0,"a":2},{"player":"Willem","h":0,"a":3}],"7":[{"player":"Dennis","h":1,"a":1},{"player":"Crazy Dutchman","h":1,"a":3},{"player":"Bertjuh","h":1,"a":3},{"player":"Oppie1978","h":1,"a":2},{"player":"Raymond de Haas","h":1,"a":1},{"player":"JoycevanRiet","h":1,"a":4},{"player":"Bo.","h":1,"a":2},{"player":"Bobcorn","h":1,"a":1},{"player":"El-Toro-Loco","h":2,"a":2},{"player":"StudentjeIndicium","h":1,"a":2},{"player":"AlinevanVuuren","h":2,"a":2},{"player":"Robertosxs","h":0,"a":2},{"player":"Reboss","h":1,"a":2},{"player":"Mobicontrol","h":1,"a":1},{"player":"Brokkenpiloot","h":0,"a":1},{"player":"Katinkadeb","h":2,"a":2},{"player":"BornBjorg","h":0,"a":2},{"player":"Fseton","h":1,"a":1},{"player":"WesleyMerwe","h":1,"a":2},{"player":"Daisy010","h":0,"a":1},{"player":"Givano","h":1,"a":2},{"player":"Trauner_in_Oranje","h":2,"a":2},{"player":"John0504","h":1,"a":4},{"player":"Rugnummer67","h":2,"a":2},{"player":"StanleyBoessen","h":2,"a":2},{"player":"GonnyDebode","h":0,"a":3},{"player":"Marlayne","h":2,"a":3},{"player":"Jules-","h":1,"a":2},{"player":"JanCandiano","h":1,"a":2},{"player":"Harro1","h":0,"a":2},{"player":"JRHJNB","h":1,"a":2},{"player":"Heer","h":1,"a":2},{"player":"Wkkipje","h":2,"a":2},{"player":"GeorgeV.","h":1,"a":1},{"player":"Martijnmeestervoorspeller","h":1,"a":3},{"player":"Christopheramboz","h":1,"a":1},{"player":"Carlo","h":1,"a":4},{"player":"Erol","h":1,"a":3},{"player":"Jan","h":1,"a":3},{"player":"Jeroen","h":1,"a":1},{"player":"Kees","h":1,"a":1},{"player":"Kleine Flo","h":1,"a":2},{"player":"Marco","h":2,"a":2},{"player":"Maureen","h":1,"a":2},{"player":"Maurice","h":1,"a":2},{"player":"Norman","h":0,"a":2},{"player":"Ruud","h":1,"a":2},{"player":"Tom","h":0,"a":1},{"player":"Ton","h":1,"a":2},{"player":"Willem","h":1,"a":3}],"8":[{"player":"Dennis","h":4,"a":0},{"player":"Crazy Dutchman","h":4,"a":1},{"player":"Bertjuh","h":3,"a":0},{"player":"Oppie1978","h":4,"a":1},{"player":"Raymond de Haas","h":3,"a":0},{"player":"JoycevanRiet","h":5,"a":0},{"player":"Bo.","h":3,"a":0},{"player":"Bobcorn","h":1,"a":1},{"player":"El-Toro-Loco","h":4,"a":0},{"player":"StudentjeIndicium","h":7,"a":0},{"player":"AlinevanVuuren","h":7,"a":1},{"player":"Robertosxs","h":3,"a":0},{"player":"Reboss","h":3,"a":0},{"player":"Mobicontrol","h":3,"a":0},{"player":"Brokkenpiloot","h":4,"a":0},{"player":"Katinkadeb","h":3,"a":0},{"player":"BornBjorg","h":4,"a":0},{"player":"Fseton","h":4,"a":0},{"player":"WesleyMerwe","h":3,"a":0},{"player":"Daisy010","h":3,"a":1},{"player":"Givano","h":4,"a":0},{"player":"Trauner_in_Oranje","h":3,"a":0},{"player":"John0504","h":5,"a":0},{"player":"Rugnummer67","h":3,"a":1},{"player":"StanleyBoessen","h":3,"a":1},{"player":"GonnyDebode","h":5,"a":1},{"player":"Marlayne","h":3,"a":1},{"player":"Jules-","h":4,"a":0},{"player":"JanCandiano","h":4,"a":0},{"player":"Harro1","h":3,"a":0},{"player":"JRHJNB","h":3,"a":0},{"player":"Heer","h":5,"a":0},{"player":"Wkkipje","h":3,"a":0},{"player":"GeorgeV.","h":3,"a":0},{"player":"Martijnmeestervoorspeller","h":4,"a":1},{"player":"Christopheramboz","h":4,"a":0},{"player":"Nelson1983","h":3,"a":0},{"player":"Carlo","h":4,"a":0},{"player":"Erol","h":4,"a":0},{"player":"Jan","h":4,"a":0},{"player":"Jeroen","h":5,"a":0},{"player":"Kees","h":3,"a":0},{"player":"Kleine Flo","h":4,"a":0},{"player":"Marco","h":3,"a":1},{"player":"Maureen","h":4,"a":0},{"player":"Maurice","h":4,"a":0},{"player":"Norman","h":4,"a":0},{"player":"Roan","h":5,"a":1},{"player":"Ruud","h":3,"a":0},{"player":"Tom","h":3,"a":0},{"player":"Ton","h":3,"a":0},{"player":"Willem","h":3,"a":1}],"9":[{"player":"Dennis","h":2,"a":1},{"player":"Crazy Dutchman","h":2,"a":1},{"player":"Bertjuh","h":2,"a":0},{"player":"Oppie1978","h":2,"a":2},{"player":"Raymond de Haas","h":1,"a":0},{"player":"JoycevanRiet","h":1,"a":0},{"player":"Bo.","h":2,"a":1},{"player":"Bobcorn","h":3,"a":1},{"player":"El-Toro-Loco","h":2,"a":1},{"player":"StudentjeIndicium","h":0,"a":0},{"player":"AlinevanVuuren","h":2,"a":0},{"player":"Robertosxs","h":2,"a":1},{"player":"Reboss","h":2,"a":1},{"player":"Mobicontrol","h":2,"a":1},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Katinkadeb","h":2,"a":1},{"player":"BornBjorg","h":2,"a":2},{"player":"Fseton","h":2,"a":0},{"player":"WesleyMerwe","h":1,"a":1},{"player":"Daisy010","h":2,"a":1},{"player":"Givano","h":2,"a":1},{"player":"Trauner_in_Oranje","h":0,"a":1},{"player":"John0504","h":3,"a":1},{"player":"Rugnummer67","h":2,"a":1},{"player":"StanleyBoessen","h":2,"a":0},{"player":"GonnyDebode","h":3,"a":2},{"player":"Marlayne","h":1,"a":1},{"player":"Jules-","h":2,"a":1},{"player":"JanCandiano","h":3,"a":1},{"player":"Harro1","h":3,"a":1},{"player":"JRHJNB","h":1,"a":1},{"player":"Heer","h":1,"a":2},{"player":"Wkkipje","h":2,"a":0},{"player":"GeorgeV.","h":1,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":1},{"player":"Christopheramboz","h":2,"a":2},{"player":"Nelson1983","h":2,"a":1},{"player":"Carlo","h":4,"a":2},{"player":"Erol","h":1,"a":1},{"player":"Jan","h":2,"a":2},{"player":"Jeroen","h":1,"a":1},{"player":"Kees","h":2,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Marco","h":2,"a":1},{"player":"Maureen","h":2,"a":0},{"player":"Maurice","h":2,"a":1},{"player":"Norman","h":1,"a":1},{"player":"Ruud","h":2,"a":1},{"player":"Tom","h":1,"a":0},{"player":"Ton","h":1,"a":2},{"player":"Willem","h":3,"a":1}],"10":[{"player":"Dennis","h":1,"a":1},{"player":"Crazy Dutchman","h":1,"a":1},{"player":"Bertjuh","h":1,"a":2},{"player":"Oppie1978","h":1,"a":1},{"player":"Raymond de Haas","h":1,"a":1},{"player":"JoycevanRiet","h":2,"a":2},{"player":"Bo.","h":1,"a":1},{"player":"Bobcorn","h":1,"a":1},{"player":"El-Toro-Loco","h":1,"a":1},{"player":"StudentjeIndicium","h":1,"a":1},{"player":"AlinevanVuuren","h":1,"a":0},{"player":"Robertosxs","h":1,"a":1},{"player":"Reboss","h":1,"a":1},{"player":"Mobicontrol","h":2,"a":1},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Katinkadeb","h":0,"a":1},{"player":"BornBjorg","h":1,"a":1},{"player":"Fseton","h":2,"a":1},{"player":"WesleyMerwe","h":1,"a":1},{"player":"Daisy010","h":1,"a":0},{"player":"Givano","h":2,"a":1},{"player":"Trauner_in_Oranje","h":1,"a":1},{"player":"John0504","h":1,"a":2},{"player":"Rugnummer67","h":0,"a":1},{"player":"StanleyBoessen","h":1,"a":1},{"player":"GonnyDebode","h":0,"a":2},{"player":"Marlayne","h":2,"a":1},{"player":"Jules-","h":1,"a":1},{"player":"JanCandiano","h":2,"a":1},{"player":"Harro1","h":1,"a":1},{"player":"JRHJNB","h":0,"a":1},{"player":"Heer","h":1,"a":1},{"player":"Wkkipje","h":2,"a":2},{"player":"GeorgeV.","h":1,"a":0},{"player":"Martijnmeestervoorspeller","h":1,"a":1},{"player":"Christopheramboz","h":2,"a":2},{"player":"Nelson1983","h":1,"a":1},{"player":"Carlo","h":1,"a":3},{"player":"Erol","h":1,"a":1},{"player":"Jan","h":2,"a":0},{"player":"Jeroen","h":1,"a":2},{"player":"Kees","h":1,"a":2},{"player":"Kleine Flo","h":1,"a":1},{"player":"Marco","h":1,"a":1},{"player":"Maureen","h":0,"a":3},{"player":"Maurice","h":0,"a":1},{"player":"Norman","h":1,"a":1},{"player":"Roan","h":1,"a":3},{"player":"Ruud","h":2,"a":2},{"player":"Tom","h":1,"a":1},{"player":"Ton","h":1,"a":1},{"player":"Willem","h":1,"a":0}],"11":[{"player":"Dennis","h":1,"a":1},{"player":"Crazy Dutchman","h":3,"a":0},{"player":"Bertjuh","h":1,"a":2},{"player":"Oppie1978","h":2,"a":0},{"player":"Raymond de Haas","h":1,"a":1},{"player":"JoycevanRiet","h":3,"a":0},{"player":"Bo.","h":1,"a":2},{"player":"Bobcorn","h":1,"a":0},{"player":"StudentjeIndicium","h":1,"a":0},{"player":"AlinevanVuuren","h":3,"a":1},{"player":"Robertosxs","h":1,"a":0},{"player":"Reboss","h":1,"a":0},{"player":"Mobicontrol","h":1,"a":0},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Katinkadeb","h":2,"a":1},{"player":"BornBjorg","h":2,"a":0},{"player":"Fseton","h":1,"a":0},{"player":"WesleyMerwe","h":2,"a":1},{"player":"Daisy010","h":3,"a":0},{"player":"Givano","h":2,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":1},{"player":"John0504","h":2,"a":1},{"player":"Rugnummer67","h":2,"a":1},{"player":"StanleyBoessen","h":1,"a":1},{"player":"GonnyDebode","h":3,"a":0},{"player":"Marlayne","h":2,"a":2},{"player":"Jules-","h":2,"a":0},{"player":"JanCandiano","h":1,"a":0},{"player":"Harro1","h":1,"a":1},{"player":"JRHJNB","h":1,"a":0},{"player":"Heer","h":0,"a":0},{"player":"Wkkipje","h":3,"a":1},{"player":"GeorgeV.","h":2,"a":0},{"player":"Martijnmeestervoorspeller","h":3,"a":0},{"player":"Christopheramboz","h":1,"a":1},{"player":"Nelson1983","h":0,"a":1},{"player":"Carlo","h":2,"a":2},{"player":"Erol","h":1,"a":0},{"player":"Jan","h":1,"a":1},{"player":"Jeroen","h":3,"a":0},{"player":"Kees","h":1,"a":0},{"player":"Kleine Flo","h":2,"a":0},{"player":"Marco","h":1,"a":0},{"player":"Maureen","h":3,"a":1},{"player":"Maurice","h":0,"a":1},{"player":"Norman","h":2,"a":0},{"player":"Roan","h":2,"a":0},{"player":"Ruud","h":3,"a":1},{"player":"Tom","h":1,"a":1},{"player":"Ton","h":2,"a":1},{"player":"Willem","h":2,"a":0}]};
window.POOL_STANDINGS = {"A":[{"team":"Mexico","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":2},{"team":"Zuid Korea","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":1},{"team":"Tsjechië","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-1},{"team":"Zuid Afrika","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2}],"B":[{"team":"Zwitserland","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Qatar","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Bosnië","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Canada","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0}],"D":[{"team":"USA","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":3},{"team":"Australië","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":2},{"team":"Turkije","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2},{"team":"Paraguay","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-3}],"C":[{"team":"Schotland","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":1},{"team":"Marokko","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Brazilië","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Haiti","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-1}],"E":[{"team":"Duitsland","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":6},{"team":"Ivoorkust","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":1},{"team":"Ecuador","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-1},{"team":"Curacao","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-6}],"F":[{"team":"Zweden","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":4},{"team":"Japan","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Nederland","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Tunesië","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-4}],"H":[{"team":"Kaapverdie","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Spanje","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Uruguay","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Saoedi-Arabie","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0}],"G":[{"team":"Egypte","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"België","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Nieuw Zeeland","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Iran","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0}],"I":[{"team":"Noorwegen","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Irak","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Senegal","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Frankrijk","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0}],"J":[{"team":"Jordanie","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Oostenrijk","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Algerije","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Argentinië","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0}],"L":[{"team":"Kroatië","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Engeland","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Panama","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Ghana","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0}],"K":[{"team":"Colombia","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Oezbekistan","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Congo","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Portugal","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0}]};

// Puntenhistorie per speler (door de scraper bijgehouden, max 12 metingen) —
// voedt de mini-sparkline in de ranglijst. Groeit alleen als de punten wijzigen.
window.POOL_HISTORY = {"Wolsman":[420,495,495,515,715,715,790,810,810,850],"Kleine Flo":[240,260,260,280,375,375,450,470,470,565],"Bertjuh":[220,315,335,355,555,555,630,650,650,670],"Bobcorn":[135,155,155,255,455,455,475,475,475,570],"UedaTopscorer":[240,260,260,280,300,300,375,395,395,490],"Oppie1978":[135,230,230,230,305,305,400,600,600,695],"El-Toro-Loco":[295,295,295,315,515,535,610,630,630,650],"StudentjeIndicium":[420,515,515,515,535,535,630,630,730,825],"Mauricio1980":[240,335,335,355,450,450,525,545,545,565],"AlinevanVuuren":[115,135,155,175,270,290,490,510,510,805],"Wisselbeker":[400,475,475,495,695,695,770,790,790,885],"Roantuit":[0,0,0,0,0,0,0,0,0,0],"Robertosxs":[240,335,335,355,555,555,630,650,650,745],"Reboss":[240,315,315,335,430,430,505,525,525,620],"Mobicontrol":[240,315,315,315,515,515,590,610,610,760],"Brokkenpiloot":[295,370,370,370,465,465,540,560,560,675],"Katinkadeb":[240,335,335,335,355,375,450,470,470,565],"BornBjorg":[295,370,390,410,610,610,685,885,885,980],"Fseton":[135,230,230,250,450,450,525,545,545,695],"Raymond de Haas":[135,230,250,250,345,345,420,420,420,460],"ScheidsTon":[0,0,0,0,0,0,0,0,0,0],"THEGOAT37":[135,155,355,375,575,575,650,650,650,690],"WesleyMerwe":[190,265,265,265,285,285,360,360,460,575],"Daisy010":[40,0,135,155,250,250,345,365,365,640],"Erol_Ulu":[240,315,515,615,710,710,785,785,885,980],"Givano":[135,230,230,250,345,345,420,440,440,610],"VanderLans":[295,370,370,390,590,590,665,865,865,980],"Trauner_in_Oranje":[295,390,410,430,525,545,620,620,620,735],"Keepertje":[0,135,0,0,0,250,325,345,345,460],"John0504":[95,190,210,210,285,285,360,360,360,475],"Rugnummer67":[135,210,210,230,325,345,440,460,460,555],"Norman.P":[495,570,570,770,865,865,940,940,1040,1135],"StanleyBoessen":[195,290,490,510,530,550,645,665,665,705],"GonnyDebode":[220,295,295,315,410,410,505,525,525,600],"Marlayne":[115,135,135,155,355,375,470,470,570,645],"Jules-":[240,335,335,355,450,450,525,545,545,640],"Harro1":[220,220,240,440,535,535,610,610,610,650],"JRHJNB":[240,335,335,355,450,450,525,525,625,700],"JoycevanRiet":[135,135,135,155,250,0,0,0,0,0],"Heer":[420,440,440,460,660,660,735,755,755,775],"Pepijndh":[0,0,0,0,0,0,0,0,0,0],"Cornelis2026":[75,275,295,315,390,390,465,485,485,505],"Wkkipje":[320,395,415,435,530,550,625,645,645,740],"MaureenGLA":[115,190,390,410,505,505,580,600,600,695],"GeorgeV.":[135,230,230,430,630,630,705,705,805,1080],"ikgajuichen":[420,440,440,540,635,635,710,710,810,905],"JanCandiano":[170,265,265,265,360,360,435,435,435,585],"Bo.":[240,335,335,335,430,430,505,525,525,545],"Koninkie":[215,235,235,435,635,655,750,770,770,865],"Martijnmeestervoorspeller":[420,515,535,635,710,710,805,825,825,920],"Crazy Dutchman":[420,515,535,635,710,710,805,825,825,920],"RoanTuit(messi)":[220,315,315,415,510,510,605,605,605,700],"Christopheramboz":[420,515,535,635,730,730,805,1005,1005,1025],"Frenk010fr":[0,0,0,0,0,0,0,0,0,0],"WillemCo":[200,275,275,275,370,370,465,465,465,740],"Nelson1983":[0,0,0,0]};

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
    henkPick: "Canada in eigen huis, Bosnië dat denkt dat het er al is. Niet dus. 2-1 voor de gastheren — en Bosnië mag op het vliegtuig nog eens nadenken over wie ze dáchten te zijn." },
  { id: 43996, date: "2026-06-13T03:00:00+02:00", home: "USA", away: "Paraguay",
    consensus: { home: 72, draw: 18, away: 10 }, outlier: "Heer: 0-1", stadium: "SoFi Stadium", city: "Los Angeles",
    henkPick: "Pulisic in Los Angeles, heel Hollywood op de tribune. Paraguay parkeert de bus — maar die bus krijgt twee deuken en een lekke band. 2-0, en geen excuses achteraf." },
  { id: 43997, date: "2026-06-13T21:00:00+02:00", home: "Qatar", away: "Zwitserland",
    consensus: { home: 14, draw: 22, away: 64 }, outlier: "Givano: 2-2", stadium: "Mercedes-Benz Stadium", city: "Atlanta",
    henkPick: "Qatar zoekt nog altijd naar z'n vorm van... tja, ís die er ooit geweest? Zwitserland wint dit koel, zakelijk en zonder één keer te hoeven zweten. 0-2." },
  { id: 43998, date: "2026-06-14T00:00:00+02:00", home: "Brazilië", away: "Marokko",
    consensus: { home: 55, draw: 28, away: 17 }, outlier: "AlinevanVuuren: 1-2", stadium: "Hard Rock Stadium", city: "Miami",
    henkPick: "Dé kraker van de openingsweek. Marokko bewees in 2022 dat het geen toeval was, Brazilië speelt voor z'n trots. Ik zeg 1-1 — en Aline mag heel even hardop lachen naar de rest van de poule." }
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
  bio: "Onze vaste analist. Kantinegevoel, scherp mes. Deelt uit, neemt niks terug. Eerder Voetbal Inside dan Studio Voetbal.",
  avatar: "H",

  // Dagmonoloog vóór en op de openingsdag — deterministisch per datum gekozen.
  monologen_vooraf: [
    (s) => `${s.nul} deelnemers staan nog op nul. Nul wedstrijden, nul visie, nul ruggengraat. ${s.nulNames.slice(0,3).join(', ')} — ik zou geen namen noemen, maar dit verdient namen. De teller loopt, de smoesjes zijn op.`,
    (s) => `${s.complete} mensen hebben álles ingevuld: 104 duels, een kampioen, een topscorer. De rest hangt tussen goede bedoelingen en pure luiheid. Eén van die twee wint nooit een poule.`,
    (s) => s.notPaid > 0
      ? `${s.notPaid} ${s.notPaid === 1 ? 'deelnemer heeft' : 'deelnemers hebben'} de inleg nóg niet betaald. Geen inleg, geen eregalerij — wel meepraten, niet meebetalen, dat type kennen we. De Tikkie is geduldig. Ik niet.`
      : `Alle ${s.total} hebben betaald. Allemaal. Van déze groep had ik dat niet verwacht, en dat zeg ik recht in de camera. De pot is vol, de uitvluchten zijn op.`,
    (s) => s.phase === 'today'
      ? `Vanavond 21:00, de bal rolt in het Azteca. Wie zijn formulier nu nog niet binnen heeft, zit straks tussen de reclames door wat aan te klikken. Amateurs. Invullen, nú.`
      : `Nog ${s.daysToKickoff === 1 ? 'één dag' : s.daysToKickoff + ' dagen'} tot de aftrap. Wie nu invult, denkt na. Wie wacht, ramt straks om vier uur 's nachts Tunesië–Japan in op goed geluk — en is daarna boos op mij.`
  ],

  // Dagmonoloog tijdens het toernooi.
  monologen_toernooi: [
    (s) => `Speeldag ${s.speeldag}. ${s.todayCount > 0 ? `Vandaag ${s.todayCount === 1 ? 'één wedstrijd' : s.todayCount + ' wedstrijden'} op het programma.` : 'Vandaag niks — rustdag, voor wie dat verdient.'} De ranglijst slaapt nooit, en ik ook niet.`,
    (s) => `We zijn onderweg. ${s.nul > 0 ? `En tóch staan ${s.nul} mensen nog op nul. Het toernooi is begonnen, de boot is weg, en jullie staan nog op de kade te zwaaien.` : 'Iedereen aangehaakt. Eindelijk. Nu telt het.'}`,
    (s) => `Kijk goed naar de stand. Op dag één zegt 'ie niks, op dag tien alles. Wie nu onderin bivakkeert: rustig blijven. Wie bovenaan staat te juichen: ik heb een lange lijst van mensen die te vroeg juichten.`
  ],

  // Losse uitspraken voor de Henk-bubbel — vóór het toernooi.
  hot_takes: [
    (s) => `${s.nul} man op nul. ${s.nulNames.slice(0,3).join(', ')} — puur uit genegenheid noem ik jullie. De aftrap wacht op niemand, en op jullie al helemaal niet.`,
    (s) => s.notPaid > 0
      ? `${s.notPaid} deelnemers nog niet betaald. De pot ís het podium. Zonder inleg sta je straks te klappen langs de lijn terwijl een ander jouw prijzengeld telt.`
      : `Pot compleet, iedereen betaald. Vanaf nu verschuilt niemand zich meer achter "ik deed toch niet écht mee". Je dóét mee. Bewijs het maar.`,
    () => `De meeste titelstemmen: Spanje. Veilig. Voorspelbaar. Zó braaf dat ik er een beetje verdrietig van word. Durf eens iets, mensen.`,
    () => `Mbappé topscorer, zegt de halve poule — net als de halve wereld. En dan dríé stemmen voor Vinícius, die naast Mbappé staat bij Real. Dat is geen analyse, dat is gokken met je ogen dicht.`,
    () => `<strong>Mauricio1980</strong> zet Frankrijk op kampioen. Mauricio. Eén blik op de bracket en je weet: dat is hopen, geen voorspellen. Sterkte wens ik je — kansen kan ik je niet geven.`,
    () => `Iemand heeft Brazilië–Marokko op 1-2 staan. Vóór Marokko. Aline, dat ben jij. Komt 'ie uit, dan haal ik een week koffie voor je. Komt 'ie niet uit, dan hebben we het er nooit meer over — voor jouw bestwil.`,
    () => `De gemiddelde gok hier is 2-1. Braaf, veilig, oer-Hollands. Vorig WK eindigde geen één op de acht duels in 2-1. Jullie zijn met z'n allen één grote verzekeringspolis met een Oranje-sjaaltje om.`,
    () => `Nederland krijgt amper titelstemmen. In een poule die Indicium heet, vol mensen in Oranje op vrijdag. Vaderlandsliefde is hier blijkbaar alleen voor de foto.`,
    () => `<strong>Robertosxs</strong> en <strong>ikgajuichen</strong> — allebei alles ingevuld, allebei zonder gezicht of voornaam. Anonieme scherpschutters, of één iemand met twee accounts? Ik noem niks. Ik hou alleen álles in de gaten.`
  ],

  // Extra uitspraken zodra het toernooi loopt (positie-wissels en duiding).
  ranking_change: [
    () => `De eerste uitslagen zijn binnen, en zie: de papieren werkelijkheid en het echte voetbal zijn twee totaal verschillende sporten. Pijnlijk voor sommigen. Heerlijk voor mij.`,
    () => `Wie na één speeldag bovenaan staat, heeft geluk gehad. Wie er na tien nog staat, kan voetbal kijken. Onthoud wie dat als eerste zei, als het zover is.`,
    (s) => `${s.nul > 0 ? `Er staan nóg mensen op nul terwijl het toernooi al draait. Dat is geen pech meer, dat is een levenskeuze.` : `Iedereen aangehaakt. Geen excuses meer, geen mededogen meer. Nu wordt het menens.`}`,
    () => `<strong>Martijnmeestervoorspeller</strong> heeft zichzelf tot meester gekroond én staat ook nog eens bovenin. Het mannetje is niet te genieten deze week, reken maar. Maar onthoud: hoe hoger 'ie klimt, hoe harder die naam straks tegen 'm gebruikt wordt. Ik slijp m'n potlood vast.`
  ],

  // Henks oordeel per speler — voor de profielkaart.
  player_takes: {
    "Wolsman": "De beheerder. Alles ingevuld — maar dat hóórt als je de pool runt; applaus krijg je daar niet voor. Of je ook kúnt winnen is een tweede. Het klassement kent geen vriendjes, en jou al helemaal niet.",
    "Robertosxs": "Geen voornaam, geen gezicht, wél alle 104 duels ingevuld. De stille sluipschutter van deze poule — of de stagiair met voorkennis. Tot je een keer mórst, geloof ik er niks van.",
    "ikgajuichen": "Wandelt binnen, ramt in één ruk 104 wedstrijden in, kiest kampioen én topscorer, en staat meteen bovenaan. Verdacht perfect. Niemand weet wie het is. Ik zeg: óf een genie, óf iemand die de uitslagen al kent.",
    "Mauricio1980": "Frankrijk als wereldkampioen. Mauricio toch. De bracket lacht je nu al hardop uit. Dat is geen voorspelling, dat is een wens met een strikje eromheen. Sterkte — die ga je nodig hebben.",
    "AlinevanVuuren": "Durft als enige Marokko van Brazilië te laten winnen in de openingsweek. Komt 'ie uit: twee weken onaantastbaar bij de koffieautomaat. Komt 'ie niet uit: dan kijken we elkaar even niet aan.",
    "Katinkadeb": "Begon met 72 duels zónder kampioen en topscorer, heeft nu alles netjes binnen. Kijk, dát is luisteren. Een compliment van mij — geniet ervan, ze zijn schaars hier.",
    "BornBjorg": "Van nul naar vierentwintig duels in een paar dagen, plus kampioen en topscorer. Bjorg is wakker geschrokken. Doorpakken nu, want de groepsfase wacht niet op jouw goede voornemens.",
    "Marlayne": "Stond vorige week op nul, zit nu op zesentwintig mét wereldkampioen. Haalt in als een bezetene. Zo wil ik het zien — de rest mag een puntje zuigen.",
    "Norman.P": "Kampioen gekozen, topscorer gekozen, wedstrijden ingevuld: bijna geen. Norman bouwt het huis vanaf het dak en is trots op het uitzicht. Knap hoor. Nutteloos, maar knap.",
    "Brokkenpiloot": "De naam dekt de lading volledig. Maar wie zo durft te gokken, vliegt óf de top tien in óf regelrecht de bosjes. Turbulentie hoort erbij — riemen vast.",
    "Wisselbeker": "Twee wedstrijden ingevuld. Het dubbele van vorige week, dat dan weer. In dit tempo is je formulier af rond het WK van 2034 — tegen die tijd ben ík met pensioen.",
    "Fseton": "Drie wedstrijden, maar wél een kampioen en topscorer. De omgekeerde volgorde — alsof je het toetje bestelt voordat je binnen bent. Er zit beweging in, dus ik hou m'n mond. Voor nu.",
    "Trauner_in_Oranje": "Kampioen en topscorer keurig gekozen, wedstrijden: nul. Dat is een kaartje voor de finale kopen en vervolgens thuisblijven op de bank. Afmaken, Trauner — het kost je tien minuten en een greintje karakter.",
    "Rugnummer67": "Zelfde liedje als Trauner: wél een kampioen, géén wedstrijden. Een rugnummer zonder minuten op het veld. Zonde van het shirt, zonde van de inleg.",
    "El-Toro-Loco": "Elf wedstrijden, geen kampioen, geen topscorer. El Toro, de arena is open en de stier staat nog in de kleedkamer te twijfelen. Naar binnen of naar huis.",
    "Mobicontrol": "Mijn stiekeme favoriet. Drieënvijftig duels en keuzes met lef. Maak je af waar je aan begon, dan loop je zo de top vijf in. Áls. Dat woordje hangt boven je hoofd.",
    "StanleyBoessen": "Tweeënzeventig wedstrijden netjes ingevuld, en dan… de wereldkampioen vergeten. Een heel huis bouwen en het dak overslaan. Tien seconden werk, Stanley. Tien.",
    "Erol_Ulu": "Eerst ontbrak de topscorer, nu staat alles er. Kijk, zó dus. Compliment — maar verslap niet in de knock-outfase, want dan trek ik het meteen weer in.",
    "JoycevanRiet": "Groepsfase ingevuld, kampioen en topscorer gekozen, inleg betaald. Joyce is stilletjes een van de best voorbereide deelnemers — terwijl de rest nog naar z'n formulier zoekt. Onthoud die naam.",
    "GeorgeV.": "Eén wedstrijd ingevuld, verder stilte. De inleg is binnen, dus de intentie bestaat ergens. Nu de daden nog, George — meedoen is een werkwoord, geen gevoel.",
    "Pepijndh": "Nul wedstrijden. De inleg is binnen, dus je wíl wel. Alleen je dóét niks. Dat is het verhaal van veel goede voornemens, Pepijn. De klok tikt door.",
    "Martijnmeestervoorspeller": "Martijnmeestervoorspeller. De naam zegt genoeg — bescheidenheid was uitverkocht toen hij zich inschreef. En ja, hij staat bovenin, dus het mannetje stuitert nu vast door de kantine met 'wat zei ik nou'. Geniet ervan, Martijn: 400 punten en een ego dat alleen maar hárder kan vallen. Eén magere speeldag en 'meestervoorspeller' wordt het wreedste pseudoniem van de hele poule — en ik beloof je: dan ben ík de eerste die het hardop voorleest.",
    "Crazy Dutchman": "Bovenin met 400 punten en een naam die om problemen vraagt. Crazy genoeg om te leiden — benieuwd of 'ie crazy genoeg blijft als de druk straks komt opzetten.",
    "Christopheramboz": "Negen duels ingevuld en tóch bij de koplopers. Of dat lef is of puur geluk weten we over twee weken. Tot die tijd geniet 'ie van een plek die hij amper verdiend heeft.",
    "default": "Over deze speler heb ik nog geen oordeel klaarliggen. Maak je geen zorgen — iedereen gaat hier vroeg of laat een keer door de molen."
  }
};
