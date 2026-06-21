/* ============================================================
   Indi-Arena 2026 — pool data
   Bron: live scrape van wkpooltjes.nl op 10-06-2026 ~22:45
   Verversen: scripts/scraper.js draaien of update.bat
   ============================================================ */

window.POOL_META = {
  poolId: 423,
  name: "Indicium WK Poule 2026",
  totalPlayers: 52,
  capacityMax: 75,
  syncedAt: "2026-06-21T20:01:29.109Z",
  firstMatchAt: "2026-06-11T21:00:00+02:00",
  predictionsPublic: false,
  // Wordt true zodra de scraper echte punten ziet — de ranglijst
  // schakelt dan automatisch om van invulstatus naar punten.
  pointsAvailable: true
};

// points/prevPos worden door de scraper gevuld zodra het toernooi loopt.
window.POOL_PLAYERS = [
  { name: "Wolsman", matches: 104, winner: true, topscorer: true, paid: true, points: 2610, prevPos: 14 },
  { name: "Kleine Flo", matches: 72, winner: true, topscorer: true, paid: true, points: 2330, prevPos: 30 },
  { name: "Bertjuh", matches: 72, winner: true, topscorer: true, paid: true, points: 2490, prevPos: 19 },
  { name: "Bobcorn", matches: 72, winner: true, topscorer: true, paid: true, points: 2385, prevPos: 28 },
  { name: "UedaTopscorer", matches: 72, winner: true, topscorer: true, paid: true, points: 1830, prevPos: 48 },
  { name: "Oppie1978", matches: 52, winner: true, topscorer: true, paid: true, points: 2720, prevPos: 9 },
  { name: "El-Toro-Loco", matches: 33, winner: false, topscorer: false, paid: true, points: 2020, prevPos: 42 },
  { name: "StudentjeIndicium", matches: 72, winner: true, topscorer: true, paid: true, points: 2325, prevPos: 32 },
  { name: "Mauricio1980", matches: 72, winner: true, topscorer: true, paid: true, points: 2465, prevPos: 23 },
  { name: "AlinevanVuuren", matches: 72, winner: true, topscorer: true, paid: true, points: 2480, prevPos: 21 },
  { name: "Wisselbeker", matches: 48, winner: true, topscorer: true, paid: true, points: 2780, prevPos: 5 },
  { name: "Robertosxs", matches: 104, winner: true, topscorer: true, paid: true, points: 2580, prevPos: 17 },
  { name: "Reboss", matches: 72, winner: true, topscorer: true, paid: true, points: 2150, prevPos: 38 },
  { name: "Mobicontrol-Xavier", matches: 53, winner: true, topscorer: true, paid: true, points: 2655, prevPos: 11 },
  { name: "Brokkenpiloot", matches: 53, winner: true, topscorer: true, paid: true, points: 2760, prevPos: 8 },
  { name: "Katinkadeb", matches: 72, winner: true, topscorer: true, paid: true, points: 2485, prevPos: 20 },
  { name: "BornBjorg", matches: 24, winner: true, topscorer: true, paid: true, points: 1710, prevPos: 50 },
  { name: "Fseton", matches: 50, winner: true, topscorer: true, paid: true, points: 2330, prevPos: 30 },
  { name: "Raymond de Haas", matches: 46, winner: true, topscorer: true, paid: true, points: 2400, prevPos: 26 },
  { name: "THEGOAT37", matches: 70, winner: true, topscorer: true, paid: true, points: 2600, prevPos: 16 },
  { name: "WesleyMerwe", matches: 43, winner: true, topscorer: true, paid: true, points: 2235, prevPos: 35 },
  { name: "Daisy010", matches: 50, winner: true, topscorer: true, paid: true, points: 2395, prevPos: 27 },
  { name: "Erol_Ulu", matches: 72, winner: true, topscorer: true, paid: true, points: 3020, prevPos: 2 },
  { name: "Givano", matches: 72, winner: true, topscorer: true, paid: true, points: 2800, prevPos: 3 },
  { name: "JanvdL", matches: 40, winner: true, topscorer: true, paid: true, points: 2710, prevPos: 10 },
  { name: "Trauner_in_Oranje", matches: 40, winner: true, topscorer: true, paid: true, points: 2340, prevPos: 29 },
  { name: "Keepertje", matches: 72, winner: true, topscorer: true, paid: true, points: 1675, prevPos: 51 },
  { name: "John0504", matches: 72, winner: true, topscorer: true, paid: true, points: 1955, prevPos: 45 },
  { name: "Rugnummer67", matches: 42, winner: true, topscorer: true, paid: true, points: 2435, prevPos: 25 },
  { name: "Norman.P", matches: 37, winner: true, topscorer: true, paid: true, points: 2645, prevPos: 12 },
  { name: "StanleyBoessen", matches: 72, winner: false, topscorer: false, paid: true, points: 2105, prevPos: 39 },
  { name: "GonnyDebode", matches: 72, winner: true, topscorer: true, paid: true, points: 1970, prevPos: 44 },
  { name: "Marlayne", matches: 60, winner: true, topscorer: true, paid: true, points: 1845, prevPos: 47 },
  { name: "Jules-", matches: 72, winner: true, topscorer: true, paid: true, points: 2205, prevPos: 36 },
  { name: "Harro1", matches: 72, winner: true, topscorer: true, paid: true, points: 1980, prevPos: 43 },
  { name: "JRHJNB", matches: 72, winner: true, topscorer: true, paid: true, points: 2440, prevPos: 24 },
  { name: "JoycevanRiet", matches: 72, winner: true, topscorer: true, paid: true, points: 2045, prevPos: 41 },
  { name: "Heer", matches: 72, winner: true, topscorer: true, paid: true, points: 2795, prevPos: 4 },
  { name: "Cornelis2026", matches: 42, winner: true, topscorer: true, paid: true, points: 1930, prevPos: 46 },
  { name: "Wkkipje", matches: 38, winner: true, topscorer: true, paid: true, points: 2185, prevPos: 37 },
  { name: "MaureenGLA", matches: 72, winner: true, topscorer: true, paid: true, points: 2315, prevPos: 33 },
  { name: "GeorgeV.", matches: 72, winner: true, topscorer: true, paid: true, points: 2765, prevPos: 6 },
  { name: "ikgajuichen", matches: 104, winner: true, topscorer: true, paid: true, points: 2610, prevPos: 14 },
  { name: "JanCandiano", matches: 72, winner: true, topscorer: true, paid: true, points: 2470, prevPos: 22 },
  { name: "Bo.", matches: 72, winner: true, topscorer: true, paid: true, points: 2285, prevPos: 34 },
  { name: "Koninkie", matches: 72, winner: true, topscorer: true, paid: true, points: 2635, prevPos: 13 },
  { name: "Martijnmeestervoorspeller", matches: 72, winner: true, topscorer: true, paid: true, points: 2765, prevPos: 6 },
  { name: "Crazy Dutchman", matches: 72, winner: true, topscorer: true, paid: true, points: 3095, prevPos: 1 },
  { name: "RoanTuit(messi)", matches: 30, winner: true, topscorer: true, paid: true, points: 1670, prevPos: 52 },
  { name: "Christopheramboz", matches: 42, winner: true, topscorer: true, paid: true, points: 2530, prevPos: 18 },
  { name: "WillemCo", matches: 41, winner: false, topscorer: false, paid: true, points: 2065, prevPos: 40 },
  { name: "Nelson1983", matches: 34, winner: false, topscorer: false, paid: true, points: 1730, prevPos: 49 }
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
window.POOL_RESULTS = {"mexico|zuidafrika":"2-0","zuidkorea|tsjechie":"2-1","canada|bosnie":"1-1","usa|paraguay":"4-1","qatar|zwitserland":"1-1","brazilie|marokko":"1-1","haiti|schotland":"0-1","australie|turkije":"2-0","duitsland|curacao":"7-1","nederland|japan":"2-2","ivoorkust|ecuador":"1-0","zweden|tunesie":"5-1","spanje|kaapverdie":"0-0","belgie|egypte":"1-1","saoediarabie|uruguay":"1-1","iran|nieuwzeeland":"2-2","frankrijk|senegal":"3-1","irak|noorwegen":"1-4","argentinie|algerije":"3-0","oostenrijk|jordanie":"3-1","portugal|congo":"1-1","engeland|kroatie":"4-2","ghana|panama":"1-0","oezbekistan|colombia":"1-3","tsjechie|zuidafrika":"1-1","zwitserland|bosnie":"4-1","canada|qatar":"6-0","mexico|zuidkorea":"1-0","usa|australie":"2-0","schotland|marokko":"0-1","brazilie|haiti":"3-0","turkije|paraguay":"0-1","nederland|zweden":"5-1","duitsland|ivoorkust":"2-1","ecuador|curacao":"0-0","tunesie|japan":"0-4","spanje|saoediarabie":"4-0"};
// Voorspellingen per gestarte wedstrijd (scraper). Sleutel = kalender-index
// (POOL_CALENDAR[i]); waarde = [{player, h, a}].
window.POOL_PREDICTIONS = {"24":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":2,"a":1},{"player":"Bertjuh","h":2,"a":0},{"player":"Bo.","h":1,"a":1},{"player":"Bobcorn","h":1,"a":1},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":3,"a":1},{"player":"Cornelis2026","h":2,"a":2},{"player":"Crazy Dutchman","h":1,"a":1},{"player":"Daisy010","h":2,"a":1},{"player":"El-Toro-Loco","h":1,"a":0},{"player":"Erol_Ulu","h":1,"a":0},{"player":"Fseton","h":3,"a":0},{"player":"GeorgeV.","h":1,"a":1},{"player":"Givano","h":1,"a":1},{"player":"GonnyDebode","h":3,"a":0},{"player":"Harro1","h":2,"a":1},{"player":"Heer","h":0,"a":0},{"player":"ikgajuichen","h":1,"a":1},{"player":"JanCandiano","h":1,"a":0},{"player":"JanvdL","h":3,"a":1},{"player":"John0504","h":2,"a":1},{"player":"JoycevanRiet","h":2,"a":1},{"player":"JRHJNB","h":2,"a":1},{"player":"Jules-","h":2,"a":0},{"player":"Katinkadeb","h":1,"a":2},{"player":"Keepertje","h":2,"a":0},{"player":"Kleine Flo","h":2,"a":0},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":1,"a":2},{"player":"Martijnmeestervoorspeller","h":1,"a":0},{"player":"MaureenGLA","h":2,"a":0},{"player":"Mauricio1980","h":1,"a":0},{"player":"Mobicontrol-Xavier","h":2,"a":0},{"player":"Nelson1983","h":3,"a":1},{"player":"Norman.P","h":2,"a":0},{"player":"Oppie1978","h":1,"a":1},{"player":"Raymond de Haas","h":1,"a":1},{"player":"Reboss","h":1,"a":0},{"player":"Robertosxs","h":2,"a":2},{"player":"Rugnummer67","h":1,"a":1},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":2,"a":1},{"player":"THEGOAT37","h":2,"a":0},{"player":"Trauner_in_Oranje","h":2,"a":1},{"player":"UedaTopscorer","h":1,"a":0},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":2,"a":0},{"player":"Wisselbeker","h":3,"a":1},{"player":"Wkkipje","h":2,"a":2}],"25":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":2,"a":0},{"player":"Bertjuh","h":2,"a":1},{"player":"Bo.","h":2,"a":0},{"player":"Bobcorn","h":1,"a":1},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Christopheramboz","h":2,"a":0},{"player":"Cornelis2026","h":3,"a":1},{"player":"Crazy Dutchman","h":2,"a":1},{"player":"Daisy010","h":3,"a":1},{"player":"El-Toro-Loco","h":1,"a":1},{"player":"Erol_Ulu","h":2,"a":1},{"player":"Fseton","h":1,"a":0},{"player":"GeorgeV.","h":2,"a":1},{"player":"Givano","h":2,"a":1},{"player":"GonnyDebode","h":2,"a":2},{"player":"Harro1","h":2,"a":0},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":0,"a":1},{"player":"JanCandiano","h":2,"a":2},{"player":"JanvdL","h":0,"a":2},{"player":"John0504","h":2,"a":1},{"player":"JoycevanRiet","h":2,"a":0},{"player":"JRHJNB","h":1,"a":0},{"player":"Jules-","h":2,"a":0},{"player":"Katinkadeb","h":1,"a":1},{"player":"Keepertje","h":1,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":2,"a":2},{"player":"Marlayne","h":1,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":1},{"player":"MaureenGLA","h":2,"a":0},{"player":"Mauricio1980","h":0,"a":1},{"player":"Mobicontrol-Xavier","h":2,"a":0},{"player":"Nelson1983","h":1,"a":1},{"player":"Norman.P","h":2,"a":1},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":1,"a":1},{"player":"Reboss","h":2,"a":0},{"player":"RoanTuit(messi)","h":1,"a":1},{"player":"Robertosxs","h":1,"a":0},{"player":"Rugnummer67","h":1,"a":2},{"player":"StanleyBoessen","h":0,"a":1},{"player":"StudentjeIndicium","h":2,"a":1},{"player":"THEGOAT37","h":1,"a":1},{"player":"Trauner_in_Oranje","h":1,"a":0},{"player":"UedaTopscorer","h":2,"a":1},{"player":"WesleyMerwe","h":2,"a":1},{"player":"WillemCo","h":2,"a":0},{"player":"Wisselbeker","h":1,"a":1},{"player":"Wkkipje","h":1,"a":1}],"26":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":2,"a":0},{"player":"Bertjuh","h":1,"a":0},{"player":"Bo.","h":2,"a":1},{"player":"Bobcorn","h":1,"a":0},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":2,"a":1},{"player":"Cornelis2026","h":1,"a":1},{"player":"Crazy Dutchman","h":2,"a":0},{"player":"Daisy010","h":2,"a":1},{"player":"El-Toro-Loco","h":2,"a":1},{"player":"Erol_Ulu","h":3,"a":1},{"player":"Fseton","h":2,"a":0},{"player":"GeorgeV.","h":1,"a":1},{"player":"Givano","h":2,"a":0},{"player":"GonnyDebode","h":3,"a":0},{"player":"Harro1","h":1,"a":1},{"player":"Heer","h":1,"a":0},{"player":"ikgajuichen","h":2,"a":0},{"player":"JanCandiano","h":1,"a":0},{"player":"JanvdL","h":3,"a":0},{"player":"John0504","h":3,"a":1},{"player":"JoycevanRiet","h":1,"a":1},{"player":"JRHJNB","h":1,"a":0},{"player":"Jules-","h":2,"a":0},{"player":"Katinkadeb","h":2,"a":1},{"player":"Keepertje","h":3,"a":0},{"player":"Kleine Flo","h":2,"a":0},{"player":"Koninkie","h":2,"a":0},{"player":"Marlayne","h":2,"a":2},{"player":"Martijnmeestervoorspeller","h":2,"a":0},{"player":"MaureenGLA","h":3,"a":1},{"player":"Mauricio1980","h":1,"a":0},{"player":"Mobicontrol-Xavier","h":2,"a":0},{"player":"Nelson1983","h":2,"a":0},{"player":"Norman.P","h":2,"a":0},{"player":"Oppie1978","h":3,"a":0},{"player":"Raymond de Haas","h":1,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"RoanTuit(messi)","h":2,"a":1},{"player":"Robertosxs","h":2,"a":1},{"player":"Rugnummer67","h":2,"a":1},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":2,"a":0},{"player":"THEGOAT37","h":1,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":1,"a":0},{"player":"WesleyMerwe","h":1,"a":0},{"player":"WillemCo","h":2,"a":2},{"player":"Wisselbeker","h":1,"a":1},{"player":"Wkkipje","h":1,"a":1}],"27":[{"player":"Wolsman","h":1,"a":1},{"player":"AlinevanVuuren","h":1,"a":1},{"player":"Bertjuh","h":3,"a":1},{"player":"Bo.","h":2,"a":1},{"player":"Bobcorn","h":2,"a":1},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Christopheramboz","h":2,"a":1},{"player":"Cornelis2026","h":3,"a":1},{"player":"Crazy Dutchman","h":3,"a":2},{"player":"Daisy010","h":2,"a":1},{"player":"El-Toro-Loco","h":1,"a":0},{"player":"Erol_Ulu","h":2,"a":2},{"player":"Fseton","h":1,"a":2},{"player":"GeorgeV.","h":1,"a":1},{"player":"Givano","h":2,"a":1},{"player":"GonnyDebode","h":2,"a":2},{"player":"Harro1","h":1,"a":1},{"player":"Heer","h":2,"a":0},{"player":"ikgajuichen","h":1,"a":1},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":2,"a":1},{"player":"John0504","h":2,"a":1},{"player":"JoycevanRiet","h":3,"a":2},{"player":"JRHJNB","h":1,"a":1},{"player":"Jules-","h":1,"a":1},{"player":"Katinkadeb","h":1,"a":1},{"player":"Keepertje","h":1,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":1,"a":2},{"player":"Martijnmeestervoorspeller","h":3,"a":2},{"player":"MaureenGLA","h":3,"a":2},{"player":"Mauricio1980","h":1,"a":1},{"player":"Mobicontrol-Xavier","h":1,"a":2},{"player":"Nelson1983","h":3,"a":0},{"player":"Norman.P","h":2,"a":1},{"player":"Oppie1978","h":3,"a":2},{"player":"Raymond de Haas","h":1,"a":1},{"player":"Reboss","h":1,"a":1},{"player":"RoanTuit(messi)","h":2,"a":0},{"player":"Robertosxs","h":2,"a":1},{"player":"Rugnummer67","h":3,"a":2},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":0,"a":1},{"player":"THEGOAT37","h":2,"a":2},{"player":"Trauner_in_Oranje","h":2,"a":1},{"player":"UedaTopscorer","h":2,"a":1},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":1,"a":1},{"player":"Wisselbeker","h":2,"a":1},{"player":"Wkkipje","h":3,"a":0}],"28":[{"player":"Wolsman","h":1,"a":0},{"player":"AlinevanVuuren","h":2,"a":1},{"player":"Bertjuh","h":2,"a":1},{"player":"Bo.","h":2,"a":0},{"player":"Bobcorn","h":1,"a":1},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Christopheramboz","h":3,"a":0},{"player":"Cornelis2026","h":3,"a":0},{"player":"Crazy Dutchman","h":2,"a":2},{"player":"Daisy010","h":2,"a":2},{"player":"El-Toro-Loco","h":1,"a":1},{"player":"Erol_Ulu","h":2,"a":0},{"player":"Fseton","h":0,"a":1},{"player":"GeorgeV.","h":2,"a":1},{"player":"Givano","h":1,"a":1},{"player":"GonnyDebode","h":1,"a":0},{"player":"Harro1","h":2,"a":1},{"player":"Heer","h":2,"a":0},{"player":"ikgajuichen","h":1,"a":1},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":3,"a":1},{"player":"John0504","h":2,"a":1},{"player":"JoycevanRiet","h":2,"a":1},{"player":"JRHJNB","h":2,"a":1},{"player":"Jules-","h":2,"a":1},{"player":"Katinkadeb","h":2,"a":0},{"player":"Keepertje","h":1,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":2,"a":1},{"player":"Marlayne","h":3,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":2},{"player":"MaureenGLA","h":2,"a":0},{"player":"Mauricio1980","h":1,"a":0},{"player":"Mobicontrol-Xavier","h":2,"a":1},{"player":"Nelson1983","h":3,"a":1},{"player":"Norman.P","h":3,"a":0},{"player":"Oppie1978","h":3,"a":2},{"player":"Raymond de Haas","h":1,"a":1},{"player":"Reboss","h":2,"a":1},{"player":"Robertosxs","h":2,"a":0},{"player":"Rugnummer67","h":3,"a":2},{"player":"StanleyBoessen","h":2,"a":1},{"player":"StudentjeIndicium","h":1,"a":1},{"player":"THEGOAT37","h":1,"a":0},{"player":"Trauner_in_Oranje","h":2,"a":1},{"player":"UedaTopscorer","h":1,"a":1},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":3,"a":1},{"player":"Wisselbeker","h":2,"a":0},{"player":"Wkkipje","h":2,"a":2}],"29":[{"player":"Wolsman","h":0,"a":1},{"player":"AlinevanVuuren","h":0,"a":3},{"player":"Bertjuh","h":1,"a":2},{"player":"Bo.","h":1,"a":1},{"player":"Bobcorn","h":0,"a":2},{"player":"Brokkenpiloot","h":0,"a":2},{"player":"Christopheramboz","h":0,"a":2},{"player":"Cornelis2026","h":1,"a":3},{"player":"Crazy Dutchman","h":1,"a":3},{"player":"Daisy010","h":2,"a":1},{"player":"El-Toro-Loco","h":0,"a":1},{"player":"Erol_Ulu","h":1,"a":2},{"player":"Fseton","h":0,"a":2},{"player":"GeorgeV.","h":0,"a":2},{"player":"Givano","h":1,"a":2},{"player":"GonnyDebode","h":2,"a":1},{"player":"Harro1","h":1,"a":1},{"player":"Heer","h":0,"a":1},{"player":"ikgajuichen","h":0,"a":2},{"player":"JanCandiano","h":0,"a":2},{"player":"JanvdL","h":0,"a":3},{"player":"John0504","h":1,"a":2},{"player":"JoycevanRiet","h":3,"a":3},{"player":"JRHJNB","h":1,"a":2},{"player":"Jules-","h":1,"a":2},{"player":"Katinkadeb","h":1,"a":3},{"player":"Keepertje","h":0,"a":2},{"player":"Kleine Flo","h":1,"a":2},{"player":"Koninkie","h":0,"a":2},{"player":"Marlayne","h":1,"a":2},{"player":"Martijnmeestervoorspeller","h":1,"a":3},{"player":"MaureenGLA","h":2,"a":0},{"player":"Mauricio1980","h":0,"a":1},{"player":"Mobicontrol-Xavier","h":0,"a":1},{"player":"Nelson1983","h":1,"a":3},{"player":"Norman.P","h":0,"a":2},{"player":"Oppie1978","h":1,"a":3},{"player":"Raymond de Haas","h":0,"a":2},{"player":"Reboss","h":0,"a":1},{"player":"Robertosxs","h":1,"a":2},{"player":"Rugnummer67","h":1,"a":2},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":0,"a":2},{"player":"THEGOAT37","h":0,"a":2},{"player":"Trauner_in_Oranje","h":1,"a":2},{"player":"UedaTopscorer","h":1,"a":1},{"player":"WesleyMerwe","h":0,"a":2},{"player":"WillemCo","h":0,"a":3},{"player":"Wisselbeker","h":2,"a":2}],"30":[{"player":"Wolsman","h":4,"a":0},{"player":"AlinevanVuuren","h":6,"a":0},{"player":"Bertjuh","h":3,"a":0},{"player":"Bo.","h":4,"a":0},{"player":"Bobcorn","h":3,"a":1},{"player":"Brokkenpiloot","h":3,"a":0},{"player":"Christopheramboz","h":6,"a":0},{"player":"Cornelis2026","h":6,"a":1},{"player":"Crazy Dutchman","h":3,"a":0},{"player":"Daisy010","h":4,"a":0},{"player":"El-Toro-Loco","h":3,"a":0},{"player":"Erol_Ulu","h":5,"a":0},{"player":"Fseton","h":4,"a":0},{"player":"GeorgeV.","h":2,"a":0},{"player":"Givano","h":6,"a":0},{"player":"GonnyDebode","h":5,"a":0},{"player":"Harro1","h":3,"a":0},{"player":"Heer","h":4,"a":0},{"player":"ikgajuichen","h":4,"a":0},{"player":"JanCandiano","h":3,"a":0},{"player":"JanvdL","h":4,"a":0},{"player":"John0504","h":4,"a":1},{"player":"JoycevanRiet","h":4,"a":0},{"player":"JRHJNB","h":3,"a":0},{"player":"Jules-","h":4,"a":0},{"player":"Katinkadeb","h":4,"a":1},{"player":"Keepertje","h":4,"a":0},{"player":"Kleine Flo","h":4,"a":0},{"player":"Koninkie","h":2,"a":0},{"player":"Marlayne","h":2,"a":2},{"player":"Martijnmeestervoorspeller","h":3,"a":0},{"player":"MaureenGLA","h":3,"a":0},{"player":"Mauricio1980","h":3,"a":0},{"player":"Mobicontrol-Xavier","h":3,"a":0},{"player":"Nelson1983","h":4,"a":0},{"player":"Norman.P","h":3,"a":0},{"player":"Oppie1978","h":5,"a":0},{"player":"Raymond de Haas","h":3,"a":0},{"player":"Reboss","h":4,"a":0},{"player":"Robertosxs","h":3,"a":0},{"player":"Rugnummer67","h":4,"a":1},{"player":"StanleyBoessen","h":3,"a":0},{"player":"StudentjeIndicium","h":4,"a":0},{"player":"THEGOAT37","h":3,"a":0},{"player":"Trauner_in_Oranje","h":3,"a":0},{"player":"UedaTopscorer","h":2,"a":1},{"player":"WesleyMerwe","h":4,"a":0},{"player":"WillemCo","h":2,"a":0},{"player":"Wisselbeker","h":3,"a":0},{"player":"Wkkipje","h":3,"a":0}],"31":[{"player":"Wolsman","h":2,"a":1},{"player":"AlinevanVuuren","h":0,"a":0},{"player":"Bertjuh","h":2,"a":0},{"player":"Bo.","h":1,"a":1},{"player":"Bobcorn","h":2,"a":1},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":3,"a":0},{"player":"Cornelis2026","h":2,"a":2},{"player":"Crazy Dutchman","h":2,"a":0},{"player":"Daisy010","h":3,"a":1},{"player":"El-Toro-Loco","h":1,"a":0},{"player":"Erol_Ulu","h":1,"a":1},{"player":"Fseton","h":1,"a":1},{"player":"GeorgeV.","h":2,"a":1},{"player":"Givano","h":2,"a":2},{"player":"GonnyDebode","h":2,"a":2},{"player":"Harro1","h":2,"a":0},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":2,"a":1},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":1,"a":1},{"player":"John0504","h":2,"a":1},{"player":"JoycevanRiet","h":3,"a":1},{"player":"JRHJNB","h":2,"a":1},{"player":"Jules-","h":1,"a":1},{"player":"Katinkadeb","h":3,"a":1},{"player":"Keepertje","h":2,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":3,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":0},{"player":"MaureenGLA","h":1,"a":1},{"player":"Mauricio1980","h":1,"a":0},{"player":"Mobicontrol-Xavier","h":2,"a":0},{"player":"Nelson1983","h":2,"a":0},{"player":"Norman.P","h":1,"a":1},{"player":"Oppie1978","h":2,"a":0},{"player":"Raymond de Haas","h":0,"a":1},{"player":"Reboss","h":1,"a":1},{"player":"Robertosxs","h":2,"a":1},{"player":"Rugnummer67","h":3,"a":1},{"player":"StanleyBoessen","h":2,"a":1},{"player":"StudentjeIndicium","h":1,"a":1},{"player":"THEGOAT37","h":1,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":1,"a":2},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":2,"a":1},{"player":"Wisselbeker","h":3,"a":0},{"player":"Wkkipje","h":2,"a":1}],"32":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":3,"a":1},{"player":"Bertjuh","h":2,"a":1},{"player":"Bo.","h":3,"a":1},{"player":"Bobcorn","h":2,"a":1},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Christopheramboz","h":2,"a":0},{"player":"Cornelis2026","h":2,"a":2},{"player":"Crazy Dutchman","h":2,"a":0},{"player":"Daisy010","h":3,"a":1},{"player":"El-Toro-Loco","h":1,"a":0},{"player":"Erol_Ulu","h":2,"a":1},{"player":"Fseton","h":3,"a":0},{"player":"GeorgeV.","h":1,"a":1},{"player":"Givano","h":2,"a":1},{"player":"GonnyDebode","h":1,"a":1},{"player":"Harro1","h":2,"a":1},{"player":"Heer","h":1,"a":0},{"player":"ikgajuichen","h":2,"a":1},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":3,"a":2},{"player":"John0504","h":3,"a":1},{"player":"JoycevanRiet","h":3,"a":1},{"player":"JRHJNB","h":2,"a":0},{"player":"Jules-","h":2,"a":1},{"player":"Katinkadeb","h":1,"a":1},{"player":"Keepertje","h":2,"a":2},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":1,"a":0},{"player":"Marlayne","h":2,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":0},{"player":"MaureenGLA","h":3,"a":1},{"player":"Mauricio1980","h":2,"a":1},{"player":"Mobicontrol-Xavier","h":2,"a":1},{"player":"Nelson1983","h":2,"a":1},{"player":"Norman.P","h":1,"a":1},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":2,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"RoanTuit(messi)","h":2,"a":1},{"player":"Robertosxs","h":1,"a":0},{"player":"Rugnummer67","h":3,"a":2},{"player":"StanleyBoessen","h":3,"a":0},{"player":"StudentjeIndicium","h":3,"a":0},{"player":"THEGOAT37","h":2,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":1,"a":1},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":2,"a":2},{"player":"Wisselbeker","h":3,"a":1},{"player":"Wkkipje","h":3,"a":1}],"33":[{"player":"Wolsman","h":2,"a":1},{"player":"AlinevanVuuren","h":4,"a":1},{"player":"Bertjuh","h":2,"a":1},{"player":"Bo.","h":2,"a":1},{"player":"Bobcorn","h":1,"a":0},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":3,"a":1},{"player":"Cornelis2026","h":3,"a":2},{"player":"Crazy Dutchman","h":3,"a":1},{"player":"Daisy010","h":3,"a":1},{"player":"El-Toro-Loco","h":3,"a":1},{"player":"Erol_Ulu","h":2,"a":1},{"player":"Fseton","h":2,"a":1},{"player":"GeorgeV.","h":2,"a":1},{"player":"Givano","h":3,"a":1},{"player":"GonnyDebode","h":4,"a":1},{"player":"Harro1","h":2,"a":0},{"player":"Heer","h":2,"a":0},{"player":"ikgajuichen","h":2,"a":0},{"player":"JanCandiano","h":3,"a":0},{"player":"JanvdL","h":2,"a":0},{"player":"John0504","h":3,"a":0},{"player":"JoycevanRiet","h":3,"a":1},{"player":"JRHJNB","h":3,"a":1},{"player":"Jules-","h":3,"a":0},{"player":"Katinkadeb","h":3,"a":1},{"player":"Keepertje","h":3,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":3,"a":1},{"player":"Marlayne","h":3,"a":0},{"player":"Martijnmeestervoorspeller","h":3,"a":1},{"player":"MaureenGLA","h":3,"a":0},{"player":"Mauricio1980","h":2,"a":0},{"player":"Mobicontrol-Xavier","h":3,"a":1},{"player":"Nelson1983","h":3,"a":0},{"player":"Norman.P","h":3,"a":1},{"player":"Oppie1978","h":3,"a":1},{"player":"Raymond de Haas","h":2,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"Robertosxs","h":3,"a":0},{"player":"Rugnummer67","h":2,"a":0},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":4,"a":0},{"player":"THEGOAT37","h":2,"a":1},{"player":"Trauner_in_Oranje","h":3,"a":1},{"player":"UedaTopscorer","h":2,"a":1},{"player":"WesleyMerwe","h":3,"a":0},{"player":"WillemCo","h":5,"a":1},{"player":"Wisselbeker","h":4,"a":0},{"player":"Wkkipje","h":4,"a":0}],"34":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":1,"a":1},{"player":"Bertjuh","h":1,"a":0},{"player":"Bo.","h":1,"a":0},{"player":"Bobcorn","h":1,"a":1},{"player":"Brokkenpiloot","h":3,"a":1},{"player":"Christopheramboz","h":2,"a":0},{"player":"Cornelis2026","h":4,"a":0},{"player":"Crazy Dutchman","h":2,"a":1},{"player":"Daisy010","h":1,"a":1},{"player":"El-Toro-Loco","h":0,"a":1},{"player":"Erol_Ulu","h":3,"a":0},{"player":"Fseton","h":4,"a":0},{"player":"GeorgeV.","h":3,"a":0},{"player":"Givano","h":1,"a":1},{"player":"GonnyDebode","h":1,"a":1},{"player":"Harro1","h":2,"a":1},{"player":"Heer","h":3,"a":0},{"player":"ikgajuichen","h":3,"a":0},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":5,"a":1},{"player":"John0504","h":3,"a":1},{"player":"JoycevanRiet","h":3,"a":1},{"player":"JRHJNB","h":2,"a":0},{"player":"Jules-","h":2,"a":0},{"player":"Katinkadeb","h":2,"a":0},{"player":"Keepertje","h":2,"a":1},{"player":"Kleine Flo","h":3,"a":0},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":1,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":0},{"player":"MaureenGLA","h":2,"a":1},{"player":"Mauricio1980","h":3,"a":0},{"player":"Mobicontrol-Xavier","h":4,"a":0},{"player":"Nelson1983","h":3,"a":0},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":2,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"Robertosxs","h":2,"a":1},{"player":"Rugnummer67","h":3,"a":1},{"player":"StanleyBoessen","h":1,"a":2},{"player":"StudentjeIndicium","h":0,"a":1},{"player":"THEGOAT37","h":2,"a":0},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":3,"a":0},{"player":"WesleyMerwe","h":2,"a":1},{"player":"WillemCo","h":2,"a":1},{"player":"Wisselbeker","h":1,"a":1},{"player":"Wkkipje","h":2,"a":1}],"35":[{"player":"Wolsman","h":0,"a":1},{"player":"AlinevanVuuren","h":1,"a":3},{"player":"Bertjuh","h":2,"a":1},{"player":"Bo.","h":0,"a":2},{"player":"Bobcorn","h":1,"a":2},{"player":"Brokkenpiloot","h":0,"a":2},{"player":"Christopheramboz","h":0,"a":2},{"player":"Cornelis2026","h":2,"a":2},{"player":"Crazy Dutchman","h":0,"a":3},{"player":"Daisy010","h":0,"a":2},{"player":"El-Toro-Loco","h":0,"a":2},{"player":"Erol_Ulu","h":0,"a":2},{"player":"Fseton","h":0,"a":2},{"player":"GeorgeV.","h":0,"a":3},{"player":"Givano","h":1,"a":2},{"player":"GonnyDebode","h":0,"a":0},{"player":"Harro1","h":1,"a":1},{"player":"Heer","h":0,"a":1},{"player":"ikgajuichen","h":0,"a":2},{"player":"JanCandiano","h":0,"a":2},{"player":"JanvdL","h":0,"a":2},{"player":"John0504","h":1,"a":2},{"player":"JoycevanRiet","h":0,"a":4},{"player":"JRHJNB","h":0,"a":2},{"player":"Jules-","h":1,"a":2},{"player":"Katinkadeb","h":0,"a":2},{"player":"Keepertje","h":0,"a":2},{"player":"Kleine Flo","h":1,"a":2},{"player":"Koninkie","h":0,"a":2},{"player":"Marlayne","h":0,"a":0},{"player":"Martijnmeestervoorspeller","h":0,"a":3},{"player":"MaureenGLA","h":2,"a":2},{"player":"Mauricio1980","h":0,"a":1},{"player":"Mobicontrol-Xavier","h":0,"a":2},{"player":"Nelson1983","h":0,"a":2},{"player":"Norman.P","h":0,"a":2},{"player":"Oppie1978","h":0,"a":2},{"player":"Raymond de Haas","h":0,"a":1},{"player":"Reboss","h":0,"a":2},{"player":"Robertosxs","h":0,"a":2},{"player":"Rugnummer67","h":0,"a":2},{"player":"StanleyBoessen","h":1,"a":2},{"player":"StudentjeIndicium","h":1,"a":2},{"player":"THEGOAT37","h":0,"a":2},{"player":"Trauner_in_Oranje","h":0,"a":2},{"player":"UedaTopscorer","h":1,"a":1},{"player":"WesleyMerwe","h":0,"a":2},{"player":"WillemCo","h":0,"a":3},{"player":"Wisselbeker","h":0,"a":2},{"player":"Wkkipje","h":1,"a":2}],"36":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":3,"a":0},{"player":"Bertjuh","h":3,"a":1},{"player":"Bo.","h":4,"a":1},{"player":"Bobcorn","h":3,"a":1},{"player":"Brokkenpiloot","h":3,"a":0},{"player":"Christopheramboz","h":3,"a":1},{"player":"Cornelis2026","h":4,"a":1},{"player":"Crazy Dutchman","h":3,"a":1},{"player":"Daisy010","h":3,"a":1},{"player":"El-Toro-Loco","h":3,"a":0},{"player":"Erol_Ulu","h":4,"a":0},{"player":"Fseton","h":3,"a":0},{"player":"GeorgeV.","h":2,"a":0},{"player":"Givano","h":5,"a":0},{"player":"GonnyDebode","h":4,"a":1},{"player":"Harro1","h":2,"a":0},{"player":"Heer","h":3,"a":0},{"player":"ikgajuichen","h":3,"a":0},{"player":"JanCandiano","h":3,"a":1},{"player":"JanvdL","h":2,"a":0},{"player":"John0504","h":5,"a":0},{"player":"JoycevanRiet","h":5,"a":2},{"player":"JRHJNB","h":4,"a":0},{"player":"Jules-","h":3,"a":0},{"player":"Katinkadeb","h":4,"a":0},{"player":"Keepertje","h":3,"a":0},{"player":"Kleine Flo","h":3,"a":0},{"player":"Koninkie","h":3,"a":1},{"player":"Marlayne","h":2,"a":1},{"player":"Martijnmeestervoorspeller","h":3,"a":1},{"player":"MaureenGLA","h":3,"a":1},{"player":"Mauricio1980","h":1,"a":0},{"player":"Mobicontrol-Xavier","h":2,"a":0},{"player":"Nelson1983","h":4,"a":0},{"player":"Norman.P","h":3,"a":0},{"player":"Oppie1978","h":2,"a":0},{"player":"Raymond de Haas","h":2,"a":0},{"player":"Reboss","h":3,"a":0},{"player":"RoanTuit(messi)","h":4,"a":1},{"player":"Robertosxs","h":3,"a":1},{"player":"Rugnummer67","h":2,"a":2},{"player":"StanleyBoessen","h":4,"a":1},{"player":"StudentjeIndicium","h":3,"a":0},{"player":"THEGOAT37","h":4,"a":0},{"player":"Trauner_in_Oranje","h":3,"a":0},{"player":"UedaTopscorer","h":2,"a":0},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":3,"a":1},{"player":"Wisselbeker","h":3,"a":0},{"player":"Wkkipje","h":2,"a":1}],"37":[{"player":"Wolsman","h":2,"a":1},{"player":"AlinevanVuuren","h":1,"a":1},{"player":"Bertjuh","h":3,"a":0},{"player":"Bo.","h":2,"a":0},{"player":"Bobcorn","h":2,"a":0},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":2,"a":0},{"player":"Cornelis2026","h":2,"a":2},{"player":"Crazy Dutchman","h":2,"a":1},{"player":"Daisy010","h":2,"a":1},{"player":"El-Toro-Loco","h":2,"a":0},{"player":"Erol_Ulu","h":2,"a":0},{"player":"Fseton","h":2,"a":0},{"player":"GeorgeV.","h":1,"a":0},{"player":"Givano","h":3,"a":1},{"player":"GonnyDebode","h":3,"a":1},{"player":"Harro1","h":3,"a":0},{"player":"Heer","h":2,"a":0},{"player":"ikgajuichen","h":2,"a":0},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":1,"a":1},{"player":"John0504","h":2,"a":0},{"player":"JoycevanRiet","h":4,"a":1},{"player":"JRHJNB","h":2,"a":1},{"player":"Jules-","h":2,"a":0},{"player":"Katinkadeb","h":2,"a":1},{"player":"Keepertje","h":2,"a":0},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":2,"a":0},{"player":"Marlayne","h":2,"a":0},{"player":"Martijnmeestervoorspeller","h":2,"a":1},{"player":"MaureenGLA","h":2,"a":0},{"player":"Mauricio1980","h":1,"a":0},{"player":"Mobicontrol-Xavier","h":2,"a":0},{"player":"Nelson1983","h":2,"a":0},{"player":"Norman.P","h":2,"a":0},{"player":"Oppie1978","h":2,"a":0},{"player":"Raymond de Haas","h":2,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"RoanTuit(messi)","h":2,"a":0},{"player":"Robertosxs","h":2,"a":1},{"player":"Rugnummer67","h":1,"a":3},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":2,"a":1},{"player":"THEGOAT37","h":2,"a":0},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":2,"a":0},{"player":"WesleyMerwe","h":1,"a":0},{"player":"WillemCo","h":2,"a":0},{"player":"Wisselbeker","h":3,"a":0},{"player":"Wkkipje","h":2,"a":1}]};
window.POOL_STANDINGS = {"A":[{"team":"Mexico","played":2,"w":2,"g":0,"v":0,"points":6,"saldo":3},{"team":"Zuid Korea","played":2,"w":1,"g":0,"v":1,"points":3,"saldo":0},{"team":"Tsjechië","played":2,"w":0,"g":1,"v":1,"points":1,"saldo":-1},{"team":"Zuid Afrika","played":2,"w":0,"g":1,"v":1,"points":1,"saldo":-2}],"B":[{"team":"Canada","played":2,"w":1,"g":1,"v":0,"points":4,"saldo":6},{"team":"Zwitserland","played":2,"w":1,"g":1,"v":0,"points":4,"saldo":3},{"team":"Bosnië","played":2,"w":0,"g":1,"v":1,"points":1,"saldo":-3},{"team":"Qatar","played":2,"w":0,"g":1,"v":1,"points":1,"saldo":-6}],"D":[{"team":"USA","played":2,"w":2,"g":0,"v":0,"points":6,"saldo":5},{"team":"Australië","played":2,"w":1,"g":0,"v":1,"points":3,"saldo":0},{"team":"Paraguay","played":2,"w":1,"g":0,"v":1,"points":3,"saldo":-2},{"team":"Turkije","played":2,"w":0,"g":0,"v":2,"points":0,"saldo":-3}],"C":[{"team":"Brazilië","played":2,"w":1,"g":1,"v":0,"points":4,"saldo":3},{"team":"Marokko","played":2,"w":1,"g":1,"v":0,"points":4,"saldo":1},{"team":"Schotland","played":2,"w":1,"g":0,"v":1,"points":3,"saldo":0},{"team":"Haiti","played":2,"w":0,"g":0,"v":2,"points":0,"saldo":-4}],"E":[{"team":"Duitsland","played":2,"w":2,"g":0,"v":0,"points":6,"saldo":7},{"team":"Ivoorkust","played":2,"w":1,"g":0,"v":1,"points":3,"saldo":0},{"team":"Ecuador","played":2,"w":0,"g":1,"v":1,"points":1,"saldo":-1},{"team":"Curacao","played":2,"w":0,"g":1,"v":1,"points":1,"saldo":-6}],"F":[{"team":"Nederland","played":2,"w":1,"g":1,"v":0,"points":4,"saldo":4},{"team":"Japan","played":2,"w":1,"g":1,"v":0,"points":4,"saldo":4},{"team":"Zweden","played":2,"w":1,"g":0,"v":1,"points":3,"saldo":0},{"team":"Tunesië","played":2,"w":0,"g":0,"v":2,"points":0,"saldo":-8}],"H":[{"team":"Spanje","played":2,"w":1,"g":1,"v":0,"points":4,"saldo":4},{"team":"Uruguay","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Kaapverdie","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Saoedi-Arabie","played":2,"w":0,"g":1,"v":1,"points":1,"saldo":-4}],"G":[{"team":"Iran","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Nieuw Zeeland","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"België","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Egypte","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0}],"I":[{"team":"Noorwegen","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":3},{"team":"Frankrijk","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":2},{"team":"Senegal","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2},{"team":"Irak","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-3}],"J":[{"team":"Argentinië","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":3},{"team":"Oostenrijk","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":2},{"team":"Jordanie","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2},{"team":"Algerije","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-3}],"L":[{"team":"Engeland","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":2},{"team":"Ghana","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":1},{"team":"Panama","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-1},{"team":"Kroatië","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2}],"K":[{"team":"Colombia","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":2},{"team":"Congo","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Portugal","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Oezbekistan","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2}]};

// Puntenhistorie per speler (door de scraper bijgehouden, max 12 metingen) —
// voedt de mini-sparkline in de ranglijst. Groeit alleen als de punten wijzigen.
window.POOL_HISTORY = {"Wolsman":[1450,1525,1525,1600,1715,1810,2105,2125,2200,2400,2515,2610],"Kleine Flo":[1220,1295,1295,1390,1560,1655,1825,1845,1940,2140,2235,2330],"Bertjuh":[1390,1465,1465,1560,1730,1825,2100,2100,2195,2395,2415,2490],"Bobcorn":[1290,1365,1565,1585,1755,1755,1945,1965,2060,2135,2310,2385],"UedaTopscorer":[965,1040,1060,1155,1325,1325,1420,1495,1515,1715,1735,1830],"Oppie1978":[1535,1630,1830,1925,2095,2170,2340,2340,2435,2530,2625,2720],"El-Toro-Loco":[850,925,945,965,1240,1240,1640,1640,1715,1810,1925,2020],"StudentjeIndicium":[1470,1565,1585,1680,1775,1775,1965,1985,2060,2135,2230,2325],"Mauricio1980":[1340,1415,1435,1455,1570,1665,2065,2065,2160,2255,2370,2465],"AlinevanVuuren":[1505,1505,1525,1600,1715,1810,2000,2020,2115,2210,2385,2480],"Wisselbeker":[1710,1805,1825,1845,1920,2120,2320,2320,2415,2490,2685,2780],"Roantuit":[0,0,0,0,0,0,0,0,0,0],"Robertosxs":[1365,1440,1540,1615,1765,1965,2240,2260,2335,2410,2505,2580],"Reboss":[1075,1150,1170,1245,1360,1455,1750,1770,1845,1940,2055,2150],"Mobicontrol":[315,315,515,515,590,610,610,760,760,780,800,920],"Brokkenpiloot":[1430,1505,1705,1800,1970,2065,2360,2380,2475,2570,2665,2760],"Katinkadeb":[1455,1550,1570,1590,1685,1885,2035,2055,2075,2170,2285,2485],"BornBjorg":[1635,1710,1710,1710,1710,1710,1710,1710,1710,1710,1710,1710],"Fseton":[1370,1445,1445,1520,1635,1635,1825,1845,1920,2120,2235,2330],"Raymond de Haas":[1095,1190,1390,1410,1525,1525,1820,2020,2095,2190,2305,2400],"ScheidsTon":[0,0,0,0,0,0,0,0,0,0],"THEGOAT37":[1485,1560,1560,1580,1580,1675,1970,1990,2085,2285,2400,2600],"WesleyMerwe":[1125,1220,1220,1315,1505,1705,1895,1895,1970,2045,2140,2235],"Daisy010":[1315,1515,1535,1630,1780,1800,1915,1935,2030,2125,2320,2395],"Erol_Ulu":[1735,1830,1850,1945,2020,2220,2390,2410,2505,2705,2820,3020],"Givano":[1610,1705,1905,2000,2170,2170,2340,2340,2435,2530,2705,2800],"VanderLans":[665,865,865,980,980,980,1000,1040,1040,1135,1430,1630],"Trauner_in_Oranje":[1250,1325,1345,1420,1590,1685,1960,1960,2035,2130,2245,2340],"Keepertje":[1025,1045,1045,1065,1180,1180,1370,1390,1390,1485,1580,1675],"John0504":[990,1085,1105,1200,1350,1445,1595,1615,1710,1785,1860,1955],"Rugnummer67":[1500,1575,1775,1775,1925,2000,2150,2170,2245,2340,2435,2435],"Norman.P":[1590,1665,1665,1760,1930,2025,2320,2340,2360,2455,2550,2645],"StanleyBoessen":[1190,1265,1465,1485,1505,1600,1820,1840,1915,1935,2010,2105],"GonnyDebode":[1240,1335,1335,1335,1430,1525,1640,1640,1660,1755,1875,1970],"Marlayne":[1175,1250,1270,1290,1310,1385,1460,1480,1575,1650,1770,1845],"Jules-":[1295,1370,1370,1445,1560,1655,1825,1845,1940,2015,2110,2205],"Harro1":[1170,1265,1285,1360,1380,1475,1695,1695,1790,1885,1885,1980],"JRHJNB":[1280,1355,1375,1450,1565,1660,1935,1955,2030,2125,2240,2440],"JoycevanRiet":[1180,1200,1220,1295,1370,1465,1560,1580,1675,1770,1970,2045],"Heer":[1515,1590,1690,1710,1900,2100,2395,2415,2490,2585,2700,2795],"Pepijndh":[0,0,0,0,0,0,0,0,0,0,0,0],"Cornelis2026":[1025,1225,1325,1420,1495,1590,1740,1740,1740,1815,1835,1930],"Wkkipje":[1410,1410,1510,1530,1625,1645,1845,1865,1960,2035,2110,2185],"MaureenGLA":[1330,1425,1425,1500,1650,1850,2050,2070,2165,2240,2240,2315],"GeorgeV.":[1640,1715,1915,2010,2030,2125,2315,2335,2355,2555,2670,2765],"ikgajuichen":[1570,1665,1865,1885,2000,2000,2190,2210,2305,2400,2515,2610],"JanCandiano":[1435,1530,1550,1550,1720,1815,2110,2130,2225,2300,2395,2470],"Bo.":[945,1020,1220,1295,1445,1645,1760,1780,1875,2075,2190,2285],"Koninkie":[1480,1575,1775,1775,1890,1985,2175,2195,2270,2365,2560,2635],"Martijnmeestervoorspeller":[1625,1825,1845,1940,2110,2130,2405,2405,2480,2575,2690,2765],"Crazy Dutchman":[1795,1995,2195,2290,2460,2480,2755,2755,2830,2925,3020,3095],"RoanTuit(messi)":[1215,1290,1290,1310,1480,1480,1480,1480,1575,1575,1575,1670],"Christopheramboz":[1545,1640,1660,1735,1885,1980,2170,2170,2245,2340,2455,2530],"Frenk010fr":[0,0,0,0,0,0,0,0,0,0,0,0],"WillemCo":[1420,1420,1420,1495,1515,1590,1780,1800,1800,1895,1990,2065],"Nelson1983":[695,770,790,810,1000,1075,1245,1245,1340,1415,1530,1730],"Mobicontrol-Xavier":[1495,1570,1570,1645,1760,1855,2255,2255,2350,2445,2560,2655],"JanvdL":[1780,1875,1895,1895,2065,2140,2330,2350,2425,2520,2615,2710]};

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
// Door scripts/henk-generate.mjs (gpt-4o) gevuld, 1x/dag. Leeg → frontend
// valt terug op de HENK-sjablonen hieronder. Bevat: generatedAt, monoloog,
// hotTakes[], playerTakes{naam:take}.
window.POOL_HENK = {"generatedAt":"2026-06-21","playerTakes":{"Crazy Dutchman":"De kampioen in luiers, want je hebt de troon, maar je zit vast als een deurstop!","Erol_Ulu":"Bijna de koploper, maar met slechts één exacte uitslag mis je de finesse van een echte nummer één.","Heer":"Zwitserland-Bosnië als een schaakmat verliezen, dat maakt je koningsstuk wel erg fragiel.","Martijnmeestervoorspeller":"Je naam belooft veel, maar helaas werkt voorspellen niet met zelfhypnose.","Brokkenpiloot":"Met een streak van 8 speel je als een stuntpiloot, maar je lijkt te vergeten te landen.","Oppie1978":"Een stel blunders maken en toch vastkomen te zitten, het lijkt wel een loopwedstrijd op een renbaan.","Givano":"Je maakt geen beweging, net als een verkeerslicht bij een stopbord.","JanvdL":"Met die slechte gok op Zwitserland-Bosnië lijkt het wel alsof je je voorspellingen uit de lucht plukt.","Wisselbeker":"De naam zegt het al, je zwerft meer dan je vast houdt aan een beker.","Norman.P":"Een Nederlandse uitslag van 5-1 missen? Je moet thuis de televisie niet uit het oog verliezen!","GeorgeV.":"Je denkt dat elk duel een gelijkspel is? Top prestatie, als je doel was om je eigen glazen in te gooien.","Mobicontrol-Xavier":"Met een prima trend blijf je toch in de kelder van het klassement, misschien upgraden naar Mobicontrol Hyperdrive?","Robertosxs":"Je maakt meer golven dan de zee, maar drijft nog steeds rond als een dobber in de onderste regionen.","ikgajuichen":"Na een Zwitserland-Bosnië blunder juichen we liever niet voor je voorspellingen.","Koninkie":"Je voorspellingen zijn net zo volhardend als een baksteen die probeert te zwemmen.","Rugnummer67":"Je gokt als een rugnummer zonder ruggegraat, het blijft bij bloopers.","Christopheramboz":"Met een trend als die van een schildpad, is het wonderlijk dat je nog niet van de lijst bent verdwenen.","JanCandiano":"Met je Zwitserland-Bosnië blunder, klinkt je naam als een stilstaand liedje in een gebroken jukebox.","Wolsman":"Met je matige trendpunten lijkt het meer op zwemmen in modder dan op een race naar de top.","Bertjuh":"Je blijft steken in de achterhoede, als een fietser met een lekke band in een wielerwedstrijd.","MaureenGLA":"Je snelheid van vooruitgang is als die van een kinderwagen op een marathon.","Mauricio1980":"Met zo'n blunder op Zwitserland-Bosnië ben je meer een verspeller dan een voorspeller.","AlinevanVuuren":"Met je Oezbekistan-Colombia gok zit je meer naast de waarheid dan een zonnebloem in de schaduw.","Raymond de Haas":"Een misser van formaat met Zwitserland-Bosnië, je speelt als een boer op zoek naar zijn verloren schaap.","THEGOAT37":"Met die Canada-Qatar blunder speel je meer voor de geitenmelk dan voor de GOAT-titel.","Katinkadeb":"Het is een schande dat je Nederland niet beter kent, tijd om je oranje bril af te zetten.","Bobcorn":"Met die Zwitserland-Bosnië gok ben je meer gepoft dan gepopt.","StudentjeIndicium":"Met die trendpunten lijkt het alsof je je voorspellingen tussen de boeken door doet.","Trauner_in_Oranje":"Je Oranje-support is net zo halfbakken als je voorspelling voor Engeland-Kroatië.","Daisy010":"Je voorspellingen zijn als bloemen zonder zon, en je trend is net zo stilstaand als een standbeeld.","JRHJNB":"Je blijft hangen als een trage slak op zoek naar een groen blaadje.","WesleyMerwe":"Met een trend als een slingerende rivier, kom je niet verder dan de oevers van de klassering.","Wkkipje":"Met je Canada-Qatar blunder ben je net als een kip zonder kop in een voetbalwedstrijd.","Kleine Flo":"Met een nietszeggende trend ben je als een kabbelend beekje dat de zee niet eens bereikt.","Jules-":"Met je achterhoedeslash werk je jezelf dieper in de modder.","Fseton":"Als een vleugellamme duif blijf je cirkelen zonder vooruitgang te boeken.","StanleyBoessen":"Je Canada-Qatar gok is net zo nutteloos als een paraplu in een hoosbui.","Bo.":"Je voorspellingen zijn net een schilderij zonder kleuren, ze missen de vonk van de zeldzame parel.","Reboss":"Je drijft meer rond dan dat je koers houdt, als een tak in de vijver van de competitie.","WillemCo":"Met zo'n Canada-Qatar misgok, lijkt het meer op een comedy dan een voorspelling.","Harro1":"Je hebt de gok op Canada-Qatar volledig gemist, alsof je op de verkeerde pagina van je boek stond.","Cornelis2026":"Je Canada-Qatar voorspelling was net zo mis als een wekker die in het weekend afgaat.","El-Toro-Loco":"Met zo'n stevige misser in Zwitserland-Bosnië lijkt het meer op een dolle stier in een porseleinwinkel.","BornBjorg":"Je trendpunten als een torenval, genoeg om je Bjorg in de kou te zetten.","John0504":"Je trendpunten als een droge zomer, genoeg om je John in de schaduw te laten staan.","JoycevanRiet":"Met zo'n Canada-Qatar misser lijkt het meer op een boot zonder peddels op een woeste stroom.","GonnyDebode":"Je hebt de glorierijkste uitslag ooit gemist, net alsof je in slaap viel voor de wedstrijd begon.","Marlayne":"Je Canada-Qatar gok is net zo functioneel als een zonneklep in een nachtclub.","RoanTuit(messi)":"Je bent meer messi dan Messi met je Zwitserland-Bosnië blunder.","UedaTopscorer":"Met een schitterende stunt maar een rampzalige misser blijf je hangen als de clown van de klas.","Keepertje":"Je Nederland-Zweden blunder is net zo slim als een keeper die zijn doel verlaat voor een penalty.","Nelson1983":"Je vergeet de bril op te zetten voor Zwitserland-Bosnië, alsof je met je ogen dicht speelt."},"monoloog":"Kijk eens aan, we zijn allemaal stilstaand water, maar Crazy Dutchman blijft toch lekker doorvaren met die 2830 punten. Ondertussen hebben we mensen als WesleyMerwe die met 1970 punten nog steeds denken dat de wereldkampioen in de middenmoot wordt gevonden. Zelfs Martijnmeestervoorspeller, met zijn indrukwekkende 2480 punten, staat nu stil, alsof hij een verkeersdrempel in de snelweg naar de top is tegengekomen.","hotTakes":["Daisy010 staat op plek 30, maar met slechts één exacte uitslag zit ze blijkbaar vast in de file met de rest van de stilstand-fanclub.","Mauricio1980, als je Zwitserland-Bosnië met 0-1 voorspelt en het wordt 4-1, moet je misschien overwegen je voorspellingen te maken met een dobbelsteen.","WillemCo's voorspelling voor Canada-Qatar was 2-2. Als model voor een dysfunctie is het een kunstwerk, maar als voetbalvoorspelling... niet zozeer.","Raymond de Haas heeft eindelijk een streak van vier, maar met die 1-1 op Zwitserland-Bosnië maakt hij zichzelf wijs dat hij een glazen bol nodig heeft.","UedaTopscorer is toch een verhaal apart—met maar 1515 punten en een stuntje bij Turkije-Paraguay, is hij de proof-of-concept dat een blind paard ook wel eens een wortel raakt."],"dailyTarget":{"name":"Fseton","lines":["Fseton, op plek 36 blijf je net zo roerloos als een loodzware lijnkeeper met 'grip' als een natte zeemleren lap.","Met slechts één exacte uitslag moet je hebben gegokt op het enige potje dat je daadwerkelijk hebt gekeken.","Je langste streak van drie voorspellingen op rij doet denken aan een gouden week in een loodgieter carrière."]},"matchTakes":{"20":"Portugal en Congo delen de buit, maar met 49 optimisten voor Portugal moet ik vragen: wie was die ene held die gelijk zag?","21":"Katinkadeb en haar 0-1 voor Kroatië? Grotere blunder zelden gezien!","22":"Klasse voor Bobcorn, Crazy Dutchman, El-Toro-Loco, Fseton en Givano; wie Panama koos, had liever z'n geld op een ezel ingezet.","23":"Keepertje gokte op een Oezbekistan-stunt, maar Colombia liet hem kansloos buiten de lijnen staan.","24":"Met 32 voor Tsjechië en slechts 16 gelijk, voor wie is dat briljante inzicht, Crazy Dutchman?","25":"JanvdL, 0-2 voor Bosnië? Dat is als een regenbui voorspellen op de Sahara.","26":"Cornelis2026 dacht dat Qatar kon scoren; die moet zijn oranje bril nodig even bijstellen.","27":"Mexicaanse kliniek, maar slechts El-Toro-Loco pakt de eer voor de perfecte inschatting.","28":"Katinkadeb herstelt zich goed, zegt 5 exact goed; Australië voorspellen bleek een duikvlucht.","29":"Marokko verrast Schotland; wie dacht dat Schotland ging winnen, moet iets sterkers drinken.","30":"Marlayne, je voorspelling van 2-2 laat ons allemaal achter met grote vraagtekens.","31":"Een bijzondere match met slechts twee Paraguay-gokkers en Raymond de Haas als de echte held.","32":"Nederland walst over Zweden, maar Cornelis2026 meende een gelijkspel te zien; bril verloren?"},"targetHistory":["Keepertje","Norman.P","Erol_Ulu","UedaTopscorer","StanleyBoessen","Marlayne","Bertjuh","Fseton"]};

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
