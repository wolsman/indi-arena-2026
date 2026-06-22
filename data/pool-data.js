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
  syncedAt: "2026-06-22T22:02:00.925Z",
  firstMatchAt: "2026-06-11T21:00:00+02:00",
  predictionsPublic: false,
  // Wordt true zodra de scraper echte punten ziet — de ranglijst
  // schakelt dan automatisch om van invulstatus naar punten.
  pointsAvailable: true
};

// points/prevPos worden door de scraper gevuld zodra het toernooi loopt.
window.POOL_PLAYERS = [
  { name: "Wolsman", matches: 104, winner: true, topscorer: true, paid: true, points: 2780, prevPos: 17 },
  { name: "Kleine Flo", matches: 72, winner: true, topscorer: true, paid: true, points: 2520, prevPos: 33 },
  { name: "Bertjuh", matches: 72, winner: true, topscorer: true, paid: true, points: 2625, prevPos: 27 },
  { name: "Bobcorn", matches: 72, winner: true, topscorer: true, paid: true, points: 2700, prevPos: 21 },
  { name: "UedaTopscorer", matches: 72, winner: true, topscorer: true, paid: true, points: 1985, prevPos: 48 },
  { name: "Oppie1978", matches: 52, winner: true, topscorer: true, paid: true, points: 3030, prevPos: 4 },
  { name: "El-Toro-Loco", matches: 38, winner: false, topscorer: false, paid: true, points: 2310, prevPos: 40 },
  { name: "StudentjeIndicium", matches: 72, winner: true, topscorer: true, paid: true, points: 2620, prevPos: 29 },
  { name: "Mauricio1980", matches: 72, winner: true, topscorer: true, paid: true, points: 2655, prevPos: 25 },
  { name: "AlinevanVuuren", matches: 72, winner: true, topscorer: true, paid: true, points: 2695, prevPos: 22 },
  { name: "Wisselbeker", matches: 48, winner: true, topscorer: true, paid: true, points: 2915, prevPos: 10 },
  { name: "Robertosxs", matches: 104, winner: true, topscorer: true, paid: true, points: 2820, prevPos: 15 },
  { name: "Reboss", matches: 72, winner: true, topscorer: true, paid: true, points: 2465, prevPos: 35 },
  { name: "Mobicontrol-Xavier", matches: 53, winner: true, topscorer: true, paid: true, points: 2945, prevPos: 8 },
  { name: "Brokkenpiloot", matches: 53, winner: true, topscorer: true, paid: true, points: 2915, prevPos: 10 },
  { name: "Katinkadeb", matches: 72, winner: true, topscorer: true, paid: true, points: 2580, prevPos: 30 },
  { name: "BornBjorg", matches: 55, winner: true, topscorer: true, paid: true, points: 1710, prevPos: 52 },
  { name: "Fseton", matches: 72, winner: true, topscorer: true, paid: true, points: 2645, prevPos: 26 },
  { name: "Raymond de Haas", matches: 49, winner: true, topscorer: true, paid: true, points: 2715, prevPos: 20 },
  { name: "THEGOAT37", matches: 70, winner: true, topscorer: true, paid: true, points: 2895, prevPos: 12 },
  { name: "WesleyMerwe", matches: 43, winner: true, topscorer: true, paid: true, points: 2570, prevPos: 31 },
  { name: "Daisy010", matches: 58, winner: true, topscorer: true, paid: true, points: 2770, prevPos: 18 },
  { name: "Erol_Ulu", matches: 72, winner: true, topscorer: true, paid: true, points: 3210, prevPos: 2 },
  { name: "Givano", matches: 72, winner: true, topscorer: true, paid: true, points: 2990, prevPos: 6 },
  { name: "JanvdL", matches: 45, winner: true, topscorer: true, paid: true, points: 3230, prevPos: 1 },
  { name: "Trauner_in_Oranje", matches: 44, winner: true, topscorer: true, paid: true, points: 2675, prevPos: 23 },
  { name: "Keepertje", matches: 72, winner: true, topscorer: true, paid: true, points: 1790, prevPos: 51 },
  { name: "John0504", matches: 72, winner: true, topscorer: true, paid: true, points: 2070, prevPos: 47 },
  { name: "Rugnummer67", matches: 47, winner: true, topscorer: true, paid: true, points: 2625, prevPos: 27 },
  { name: "Norman.P", matches: 43, winner: true, topscorer: true, paid: true, points: 2935, prevPos: 9 },
  { name: "StanleyBoessen", matches: 72, winner: false, topscorer: false, paid: true, points: 2425, prevPos: 38 },
  { name: "GonnyDebode", matches: 72, winner: true, topscorer: true, paid: true, points: 2120, prevPos: 45 },
  { name: "Marlayne", matches: 60, winner: true, topscorer: true, paid: true, points: 1960, prevPos: 49 },
  { name: "Jules-", matches: 72, winner: true, topscorer: true, paid: true, points: 2500, prevPos: 34 },
  { name: "Harro1", matches: 72, winner: true, topscorer: true, paid: true, points: 2220, prevPos: 42 },
  { name: "JRHJNB", matches: 72, winner: true, topscorer: true, paid: true, points: 2535, prevPos: 32 },
  { name: "JoycevanRiet", matches: 72, winner: true, topscorer: true, paid: true, points: 2160, prevPos: 44 },
  { name: "Heer", matches: 72, winner: true, topscorer: true, paid: true, points: 2835, prevPos: 14 },
  { name: "Cornelis2026", matches: 72, winner: true, topscorer: true, paid: true, points: 2325, prevPos: 39 },
  { name: "Wkkipje", matches: 66, winner: true, topscorer: true, paid: true, points: 2205, prevPos: 43 },
  { name: "MaureenGLA", matches: 72, winner: true, topscorer: true, paid: true, points: 2450, prevPos: 36 },
  { name: "GeorgeV.", matches: 72, winner: true, topscorer: true, paid: true, points: 3000, prevPos: 5 },
  { name: "ikgajuichen", matches: 104, winner: true, topscorer: true, paid: true, points: 2800, prevPos: 16 },
  { name: "JanCandiano", matches: 72, winner: true, topscorer: true, paid: true, points: 2660, prevPos: 24 },
  { name: "Bo.", matches: 72, winner: true, topscorer: true, paid: true, points: 2440, prevPos: 37 },
  { name: "Koninkie", matches: 72, winner: true, topscorer: true, paid: true, points: 2950, prevPos: 7 },
  { name: "Martijnmeestervoorspeller", matches: 72, winner: true, topscorer: true, paid: true, points: 2880, prevPos: 13 },
  { name: "Crazy Dutchman", matches: 72, winner: true, topscorer: true, paid: true, points: 3210, prevPos: 2 },
  { name: "RoanTuit(messi)", matches: 32, winner: true, topscorer: true, paid: true, points: 2090, prevPos: 46 },
  { name: "Christopheramboz", matches: 46, winner: true, topscorer: true, paid: true, points: 2720, prevPos: 19 },
  { name: "WillemCo", matches: 46, winner: false, topscorer: false, paid: true, points: 2235, prevPos: 41 },
  { name: "Nelson1983", matches: 38, winner: false, topscorer: false, paid: true, points: 1940, prevPos: 50 }
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
window.POOL_RESULTS = {"mexico|zuidafrika":"2-0","zuidkorea|tsjechie":"2-1","canada|bosnie":"1-1","usa|paraguay":"4-1","qatar|zwitserland":"1-1","brazilie|marokko":"1-1","haiti|schotland":"0-1","australie|turkije":"2-0","duitsland|curacao":"7-1","nederland|japan":"2-2","ivoorkust|ecuador":"1-0","zweden|tunesie":"5-1","spanje|kaapverdie":"0-0","belgie|egypte":"1-1","saoediarabie|uruguay":"1-1","iran|nieuwzeeland":"2-2","frankrijk|senegal":"3-1","irak|noorwegen":"1-4","argentinie|algerije":"3-0","oostenrijk|jordanie":"3-1","portugal|congo":"1-1","engeland|kroatie":"4-2","ghana|panama":"1-0","oezbekistan|colombia":"1-3","tsjechie|zuidafrika":"1-1","zwitserland|bosnie":"4-1","canada|qatar":"6-0","mexico|zuidkorea":"1-0","usa|australie":"2-0","schotland|marokko":"0-1","brazilie|haiti":"3-0","turkije|paraguay":"0-1","nederland|zweden":"5-1","duitsland|ivoorkust":"2-1","ecuador|curacao":"0-0","tunesie|japan":"0-4","spanje|saoediarabie":"4-0","belgie|iran":"0-0","uruguay|kaapverdie":"2-2","nieuwzeeland|egypte":"1-3","argentinie|oostenrijk":"2-0"};
// Voorspellingen per gestarte wedstrijd (scraper). Sleutel = kalender-index
// (POOL_CALENDAR[i]); waarde = [{player, h, a}].
window.POOL_PREDICTIONS = {"28":[{"player":"Wolsman","h":1,"a":0},{"player":"AlinevanVuuren","h":2,"a":1},{"player":"Bertjuh","h":2,"a":1},{"player":"Bo.","h":2,"a":0},{"player":"Bobcorn","h":1,"a":1},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Christopheramboz","h":3,"a":0},{"player":"Cornelis2026","h":3,"a":0},{"player":"Crazy Dutchman","h":2,"a":2},{"player":"Daisy010","h":2,"a":2},{"player":"El-Toro-Loco","h":1,"a":1},{"player":"Erol_Ulu","h":2,"a":0},{"player":"Fseton","h":0,"a":1},{"player":"GeorgeV.","h":2,"a":1},{"player":"Givano","h":1,"a":1},{"player":"GonnyDebode","h":1,"a":0},{"player":"Harro1","h":2,"a":1},{"player":"Heer","h":2,"a":0},{"player":"ikgajuichen","h":1,"a":1},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":3,"a":1},{"player":"John0504","h":2,"a":1},{"player":"JoycevanRiet","h":2,"a":1},{"player":"JRHJNB","h":2,"a":1},{"player":"Jules-","h":2,"a":1},{"player":"Katinkadeb","h":2,"a":0},{"player":"Keepertje","h":1,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":2,"a":1},{"player":"Marlayne","h":3,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":2},{"player":"MaureenGLA","h":2,"a":0},{"player":"Mauricio1980","h":1,"a":0},{"player":"Mobicontrol-Xavier","h":2,"a":1},{"player":"Nelson1983","h":3,"a":1},{"player":"Norman.P","h":3,"a":0},{"player":"Oppie1978","h":3,"a":2},{"player":"Raymond de Haas","h":1,"a":1},{"player":"Reboss","h":2,"a":1},{"player":"Robertosxs","h":2,"a":0},{"player":"Rugnummer67","h":3,"a":2},{"player":"StanleyBoessen","h":2,"a":1},{"player":"StudentjeIndicium","h":1,"a":1},{"player":"THEGOAT37","h":1,"a":0},{"player":"Trauner_in_Oranje","h":2,"a":1},{"player":"UedaTopscorer","h":1,"a":1},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":3,"a":1},{"player":"Wisselbeker","h":2,"a":0},{"player":"Wkkipje","h":2,"a":2}],"29":[{"player":"Wolsman","h":0,"a":1},{"player":"AlinevanVuuren","h":0,"a":3},{"player":"Bertjuh","h":1,"a":2},{"player":"Bo.","h":1,"a":1},{"player":"Bobcorn","h":0,"a":2},{"player":"Brokkenpiloot","h":0,"a":2},{"player":"Christopheramboz","h":0,"a":2},{"player":"Cornelis2026","h":1,"a":3},{"player":"Crazy Dutchman","h":1,"a":3},{"player":"Daisy010","h":2,"a":1},{"player":"El-Toro-Loco","h":0,"a":1},{"player":"Erol_Ulu","h":1,"a":2},{"player":"Fseton","h":0,"a":2},{"player":"GeorgeV.","h":0,"a":2},{"player":"Givano","h":1,"a":2},{"player":"GonnyDebode","h":2,"a":1},{"player":"Harro1","h":1,"a":1},{"player":"Heer","h":0,"a":1},{"player":"ikgajuichen","h":0,"a":2},{"player":"JanCandiano","h":0,"a":2},{"player":"JanvdL","h":0,"a":3},{"player":"John0504","h":1,"a":2},{"player":"JoycevanRiet","h":3,"a":3},{"player":"JRHJNB","h":1,"a":2},{"player":"Jules-","h":1,"a":2},{"player":"Katinkadeb","h":1,"a":3},{"player":"Keepertje","h":0,"a":2},{"player":"Kleine Flo","h":1,"a":2},{"player":"Koninkie","h":0,"a":2},{"player":"Marlayne","h":1,"a":2},{"player":"Martijnmeestervoorspeller","h":1,"a":3},{"player":"MaureenGLA","h":2,"a":0},{"player":"Mauricio1980","h":0,"a":1},{"player":"Mobicontrol-Xavier","h":0,"a":1},{"player":"Nelson1983","h":1,"a":3},{"player":"Norman.P","h":0,"a":2},{"player":"Oppie1978","h":1,"a":3},{"player":"Raymond de Haas","h":0,"a":2},{"player":"Reboss","h":0,"a":1},{"player":"Robertosxs","h":1,"a":2},{"player":"Rugnummer67","h":1,"a":2},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":0,"a":2},{"player":"THEGOAT37","h":0,"a":2},{"player":"Trauner_in_Oranje","h":1,"a":2},{"player":"UedaTopscorer","h":1,"a":1},{"player":"WesleyMerwe","h":0,"a":2},{"player":"WillemCo","h":0,"a":3},{"player":"Wisselbeker","h":2,"a":2}],"30":[{"player":"Wolsman","h":4,"a":0},{"player":"AlinevanVuuren","h":6,"a":0},{"player":"Bertjuh","h":3,"a":0},{"player":"Bo.","h":4,"a":0},{"player":"Bobcorn","h":3,"a":1},{"player":"Brokkenpiloot","h":3,"a":0},{"player":"Christopheramboz","h":6,"a":0},{"player":"Cornelis2026","h":6,"a":1},{"player":"Crazy Dutchman","h":3,"a":0},{"player":"Daisy010","h":4,"a":0},{"player":"El-Toro-Loco","h":3,"a":0},{"player":"Erol_Ulu","h":5,"a":0},{"player":"Fseton","h":4,"a":0},{"player":"GeorgeV.","h":2,"a":0},{"player":"Givano","h":6,"a":0},{"player":"GonnyDebode","h":5,"a":0},{"player":"Harro1","h":3,"a":0},{"player":"Heer","h":4,"a":0},{"player":"ikgajuichen","h":4,"a":0},{"player":"JanCandiano","h":3,"a":0},{"player":"JanvdL","h":4,"a":0},{"player":"John0504","h":4,"a":1},{"player":"JoycevanRiet","h":4,"a":0},{"player":"JRHJNB","h":3,"a":0},{"player":"Jules-","h":4,"a":0},{"player":"Katinkadeb","h":4,"a":1},{"player":"Keepertje","h":4,"a":0},{"player":"Kleine Flo","h":4,"a":0},{"player":"Koninkie","h":2,"a":0},{"player":"Marlayne","h":2,"a":2},{"player":"Martijnmeestervoorspeller","h":3,"a":0},{"player":"MaureenGLA","h":3,"a":0},{"player":"Mauricio1980","h":3,"a":0},{"player":"Mobicontrol-Xavier","h":3,"a":0},{"player":"Nelson1983","h":4,"a":0},{"player":"Norman.P","h":3,"a":0},{"player":"Oppie1978","h":5,"a":0},{"player":"Raymond de Haas","h":3,"a":0},{"player":"Reboss","h":4,"a":0},{"player":"Robertosxs","h":3,"a":0},{"player":"Rugnummer67","h":4,"a":1},{"player":"StanleyBoessen","h":3,"a":0},{"player":"StudentjeIndicium","h":4,"a":0},{"player":"THEGOAT37","h":3,"a":0},{"player":"Trauner_in_Oranje","h":3,"a":0},{"player":"UedaTopscorer","h":2,"a":1},{"player":"WesleyMerwe","h":4,"a":0},{"player":"WillemCo","h":2,"a":0},{"player":"Wisselbeker","h":3,"a":0},{"player":"Wkkipje","h":3,"a":0}],"31":[{"player":"Wolsman","h":2,"a":1},{"player":"AlinevanVuuren","h":0,"a":0},{"player":"Bertjuh","h":2,"a":0},{"player":"Bo.","h":1,"a":1},{"player":"Bobcorn","h":2,"a":1},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":3,"a":0},{"player":"Cornelis2026","h":2,"a":2},{"player":"Crazy Dutchman","h":2,"a":0},{"player":"Daisy010","h":3,"a":1},{"player":"El-Toro-Loco","h":1,"a":0},{"player":"Erol_Ulu","h":1,"a":1},{"player":"Fseton","h":1,"a":1},{"player":"GeorgeV.","h":2,"a":1},{"player":"Givano","h":2,"a":2},{"player":"GonnyDebode","h":2,"a":2},{"player":"Harro1","h":2,"a":0},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":2,"a":1},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":1,"a":1},{"player":"John0504","h":2,"a":1},{"player":"JoycevanRiet","h":3,"a":1},{"player":"JRHJNB","h":2,"a":1},{"player":"Jules-","h":1,"a":1},{"player":"Katinkadeb","h":3,"a":1},{"player":"Keepertje","h":2,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":3,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":0},{"player":"MaureenGLA","h":1,"a":1},{"player":"Mauricio1980","h":1,"a":0},{"player":"Mobicontrol-Xavier","h":2,"a":0},{"player":"Nelson1983","h":2,"a":0},{"player":"Norman.P","h":1,"a":1},{"player":"Oppie1978","h":2,"a":0},{"player":"Raymond de Haas","h":0,"a":1},{"player":"Reboss","h":1,"a":1},{"player":"Robertosxs","h":2,"a":1},{"player":"Rugnummer67","h":3,"a":1},{"player":"StanleyBoessen","h":2,"a":1},{"player":"StudentjeIndicium","h":1,"a":1},{"player":"THEGOAT37","h":1,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":1,"a":2},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":2,"a":1},{"player":"Wisselbeker","h":3,"a":0},{"player":"Wkkipje","h":2,"a":1}],"32":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":3,"a":1},{"player":"Bertjuh","h":2,"a":1},{"player":"Bo.","h":3,"a":1},{"player":"Bobcorn","h":2,"a":1},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Christopheramboz","h":2,"a":0},{"player":"Cornelis2026","h":2,"a":2},{"player":"Crazy Dutchman","h":2,"a":0},{"player":"Daisy010","h":3,"a":1},{"player":"El-Toro-Loco","h":1,"a":0},{"player":"Erol_Ulu","h":2,"a":1},{"player":"Fseton","h":3,"a":0},{"player":"GeorgeV.","h":1,"a":1},{"player":"Givano","h":2,"a":1},{"player":"GonnyDebode","h":1,"a":1},{"player":"Harro1","h":2,"a":1},{"player":"Heer","h":1,"a":0},{"player":"ikgajuichen","h":2,"a":1},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":3,"a":2},{"player":"John0504","h":3,"a":1},{"player":"JoycevanRiet","h":3,"a":1},{"player":"JRHJNB","h":2,"a":0},{"player":"Jules-","h":2,"a":1},{"player":"Katinkadeb","h":1,"a":1},{"player":"Keepertje","h":2,"a":2},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":1,"a":0},{"player":"Marlayne","h":2,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":0},{"player":"MaureenGLA","h":3,"a":1},{"player":"Mauricio1980","h":2,"a":1},{"player":"Mobicontrol-Xavier","h":2,"a":1},{"player":"Nelson1983","h":2,"a":1},{"player":"Norman.P","h":1,"a":1},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":2,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"RoanTuit(messi)","h":2,"a":1},{"player":"Robertosxs","h":1,"a":0},{"player":"Rugnummer67","h":3,"a":2},{"player":"StanleyBoessen","h":3,"a":0},{"player":"StudentjeIndicium","h":3,"a":0},{"player":"THEGOAT37","h":2,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":1,"a":1},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":2,"a":2},{"player":"Wisselbeker","h":3,"a":1},{"player":"Wkkipje","h":3,"a":1}],"33":[{"player":"Wolsman","h":2,"a":1},{"player":"AlinevanVuuren","h":4,"a":1},{"player":"Bertjuh","h":2,"a":1},{"player":"Bo.","h":2,"a":1},{"player":"Bobcorn","h":1,"a":0},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":3,"a":1},{"player":"Cornelis2026","h":3,"a":2},{"player":"Crazy Dutchman","h":3,"a":1},{"player":"Daisy010","h":3,"a":1},{"player":"El-Toro-Loco","h":3,"a":1},{"player":"Erol_Ulu","h":2,"a":1},{"player":"Fseton","h":2,"a":1},{"player":"GeorgeV.","h":2,"a":1},{"player":"Givano","h":3,"a":1},{"player":"GonnyDebode","h":4,"a":1},{"player":"Harro1","h":2,"a":0},{"player":"Heer","h":2,"a":0},{"player":"ikgajuichen","h":2,"a":0},{"player":"JanCandiano","h":3,"a":0},{"player":"JanvdL","h":2,"a":0},{"player":"John0504","h":3,"a":0},{"player":"JoycevanRiet","h":3,"a":1},{"player":"JRHJNB","h":3,"a":1},{"player":"Jules-","h":3,"a":0},{"player":"Katinkadeb","h":3,"a":1},{"player":"Keepertje","h":3,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":3,"a":1},{"player":"Marlayne","h":3,"a":0},{"player":"Martijnmeestervoorspeller","h":3,"a":1},{"player":"MaureenGLA","h":3,"a":0},{"player":"Mauricio1980","h":2,"a":0},{"player":"Mobicontrol-Xavier","h":3,"a":1},{"player":"Nelson1983","h":3,"a":0},{"player":"Norman.P","h":3,"a":1},{"player":"Oppie1978","h":3,"a":1},{"player":"Raymond de Haas","h":2,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"Robertosxs","h":3,"a":0},{"player":"Rugnummer67","h":2,"a":0},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":4,"a":0},{"player":"THEGOAT37","h":2,"a":1},{"player":"Trauner_in_Oranje","h":3,"a":1},{"player":"UedaTopscorer","h":2,"a":1},{"player":"WesleyMerwe","h":3,"a":0},{"player":"WillemCo","h":5,"a":1},{"player":"Wisselbeker","h":4,"a":0},{"player":"Wkkipje","h":4,"a":0}],"34":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":1,"a":1},{"player":"Bertjuh","h":1,"a":0},{"player":"Bo.","h":1,"a":0},{"player":"Bobcorn","h":1,"a":1},{"player":"Brokkenpiloot","h":3,"a":1},{"player":"Christopheramboz","h":2,"a":0},{"player":"Cornelis2026","h":4,"a":0},{"player":"Crazy Dutchman","h":2,"a":1},{"player":"Daisy010","h":1,"a":1},{"player":"El-Toro-Loco","h":0,"a":1},{"player":"Erol_Ulu","h":3,"a":0},{"player":"Fseton","h":4,"a":0},{"player":"GeorgeV.","h":3,"a":0},{"player":"Givano","h":1,"a":1},{"player":"GonnyDebode","h":1,"a":1},{"player":"Harro1","h":2,"a":1},{"player":"Heer","h":3,"a":0},{"player":"ikgajuichen","h":3,"a":0},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":5,"a":1},{"player":"John0504","h":3,"a":1},{"player":"JoycevanRiet","h":3,"a":1},{"player":"JRHJNB","h":2,"a":0},{"player":"Jules-","h":2,"a":0},{"player":"Katinkadeb","h":2,"a":0},{"player":"Keepertje","h":2,"a":1},{"player":"Kleine Flo","h":3,"a":0},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":1,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":0},{"player":"MaureenGLA","h":2,"a":1},{"player":"Mauricio1980","h":3,"a":0},{"player":"Mobicontrol-Xavier","h":4,"a":0},{"player":"Nelson1983","h":3,"a":0},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":2,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"Robertosxs","h":2,"a":1},{"player":"Rugnummer67","h":3,"a":1},{"player":"StanleyBoessen","h":1,"a":2},{"player":"StudentjeIndicium","h":0,"a":1},{"player":"THEGOAT37","h":2,"a":0},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":3,"a":0},{"player":"WesleyMerwe","h":2,"a":1},{"player":"WillemCo","h":2,"a":1},{"player":"Wisselbeker","h":1,"a":1},{"player":"Wkkipje","h":2,"a":1}],"35":[{"player":"Wolsman","h":0,"a":1},{"player":"AlinevanVuuren","h":1,"a":3},{"player":"Bertjuh","h":2,"a":1},{"player":"Bo.","h":0,"a":2},{"player":"Bobcorn","h":1,"a":2},{"player":"Brokkenpiloot","h":0,"a":2},{"player":"Christopheramboz","h":0,"a":2},{"player":"Cornelis2026","h":2,"a":2},{"player":"Crazy Dutchman","h":0,"a":3},{"player":"Daisy010","h":0,"a":2},{"player":"El-Toro-Loco","h":0,"a":2},{"player":"Erol_Ulu","h":0,"a":2},{"player":"Fseton","h":0,"a":2},{"player":"GeorgeV.","h":0,"a":3},{"player":"Givano","h":1,"a":2},{"player":"GonnyDebode","h":0,"a":0},{"player":"Harro1","h":1,"a":1},{"player":"Heer","h":0,"a":1},{"player":"ikgajuichen","h":0,"a":2},{"player":"JanCandiano","h":0,"a":2},{"player":"JanvdL","h":0,"a":2},{"player":"John0504","h":1,"a":2},{"player":"JoycevanRiet","h":0,"a":4},{"player":"JRHJNB","h":0,"a":2},{"player":"Jules-","h":1,"a":2},{"player":"Katinkadeb","h":0,"a":2},{"player":"Keepertje","h":0,"a":2},{"player":"Kleine Flo","h":1,"a":2},{"player":"Koninkie","h":0,"a":2},{"player":"Marlayne","h":0,"a":0},{"player":"Martijnmeestervoorspeller","h":0,"a":3},{"player":"MaureenGLA","h":2,"a":2},{"player":"Mauricio1980","h":0,"a":1},{"player":"Mobicontrol-Xavier","h":0,"a":2},{"player":"Nelson1983","h":0,"a":2},{"player":"Norman.P","h":0,"a":2},{"player":"Oppie1978","h":0,"a":2},{"player":"Raymond de Haas","h":0,"a":1},{"player":"Reboss","h":0,"a":2},{"player":"Robertosxs","h":0,"a":2},{"player":"Rugnummer67","h":0,"a":2},{"player":"StanleyBoessen","h":1,"a":2},{"player":"StudentjeIndicium","h":1,"a":2},{"player":"THEGOAT37","h":0,"a":2},{"player":"Trauner_in_Oranje","h":0,"a":2},{"player":"UedaTopscorer","h":1,"a":1},{"player":"WesleyMerwe","h":0,"a":2},{"player":"WillemCo","h":0,"a":3},{"player":"Wisselbeker","h":0,"a":2},{"player":"Wkkipje","h":1,"a":2}],"36":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":3,"a":0},{"player":"Bertjuh","h":3,"a":1},{"player":"Bo.","h":4,"a":1},{"player":"Bobcorn","h":3,"a":1},{"player":"Brokkenpiloot","h":3,"a":0},{"player":"Christopheramboz","h":3,"a":1},{"player":"Cornelis2026","h":4,"a":1},{"player":"Crazy Dutchman","h":3,"a":1},{"player":"Daisy010","h":3,"a":1},{"player":"El-Toro-Loco","h":3,"a":0},{"player":"Erol_Ulu","h":4,"a":0},{"player":"Fseton","h":3,"a":0},{"player":"GeorgeV.","h":2,"a":0},{"player":"Givano","h":5,"a":0},{"player":"GonnyDebode","h":4,"a":1},{"player":"Harro1","h":2,"a":0},{"player":"Heer","h":3,"a":0},{"player":"ikgajuichen","h":3,"a":0},{"player":"JanCandiano","h":3,"a":1},{"player":"JanvdL","h":2,"a":0},{"player":"John0504","h":5,"a":0},{"player":"JoycevanRiet","h":5,"a":2},{"player":"JRHJNB","h":4,"a":0},{"player":"Jules-","h":3,"a":0},{"player":"Katinkadeb","h":4,"a":0},{"player":"Keepertje","h":3,"a":0},{"player":"Kleine Flo","h":3,"a":0},{"player":"Koninkie","h":3,"a":1},{"player":"Marlayne","h":2,"a":1},{"player":"Martijnmeestervoorspeller","h":3,"a":1},{"player":"MaureenGLA","h":3,"a":1},{"player":"Mauricio1980","h":1,"a":0},{"player":"Mobicontrol-Xavier","h":2,"a":0},{"player":"Nelson1983","h":4,"a":0},{"player":"Norman.P","h":3,"a":0},{"player":"Oppie1978","h":2,"a":0},{"player":"Raymond de Haas","h":2,"a":0},{"player":"Reboss","h":3,"a":0},{"player":"RoanTuit(messi)","h":4,"a":1},{"player":"Robertosxs","h":3,"a":1},{"player":"Rugnummer67","h":2,"a":2},{"player":"StanleyBoessen","h":4,"a":1},{"player":"StudentjeIndicium","h":3,"a":0},{"player":"THEGOAT37","h":4,"a":0},{"player":"Trauner_in_Oranje","h":3,"a":0},{"player":"UedaTopscorer","h":2,"a":0},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":3,"a":1},{"player":"Wisselbeker","h":3,"a":0},{"player":"Wkkipje","h":2,"a":1}],"37":[{"player":"Wolsman","h":2,"a":1},{"player":"AlinevanVuuren","h":1,"a":1},{"player":"Bertjuh","h":3,"a":0},{"player":"Bo.","h":2,"a":0},{"player":"Bobcorn","h":2,"a":0},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":2,"a":0},{"player":"Cornelis2026","h":2,"a":2},{"player":"Crazy Dutchman","h":2,"a":1},{"player":"Daisy010","h":2,"a":1},{"player":"El-Toro-Loco","h":2,"a":0},{"player":"Erol_Ulu","h":2,"a":0},{"player":"Fseton","h":2,"a":0},{"player":"GeorgeV.","h":1,"a":0},{"player":"Givano","h":3,"a":1},{"player":"GonnyDebode","h":3,"a":1},{"player":"Harro1","h":3,"a":0},{"player":"Heer","h":2,"a":0},{"player":"ikgajuichen","h":2,"a":0},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":1,"a":1},{"player":"John0504","h":2,"a":0},{"player":"JoycevanRiet","h":4,"a":1},{"player":"JRHJNB","h":2,"a":1},{"player":"Jules-","h":2,"a":0},{"player":"Katinkadeb","h":2,"a":1},{"player":"Keepertje","h":2,"a":0},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":2,"a":0},{"player":"Marlayne","h":2,"a":0},{"player":"Martijnmeestervoorspeller","h":2,"a":1},{"player":"MaureenGLA","h":2,"a":0},{"player":"Mauricio1980","h":1,"a":0},{"player":"Mobicontrol-Xavier","h":2,"a":0},{"player":"Nelson1983","h":2,"a":0},{"player":"Norman.P","h":2,"a":0},{"player":"Oppie1978","h":2,"a":0},{"player":"Raymond de Haas","h":2,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"RoanTuit(messi)","h":2,"a":0},{"player":"Robertosxs","h":2,"a":1},{"player":"Rugnummer67","h":1,"a":3},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":2,"a":1},{"player":"THEGOAT37","h":2,"a":0},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":2,"a":0},{"player":"WesleyMerwe","h":1,"a":0},{"player":"WillemCo","h":2,"a":0},{"player":"Wisselbeker","h":3,"a":0},{"player":"Wkkipje","h":2,"a":1}],"38":[{"player":"Wolsman","h":3,"a":0},{"player":"AlinevanVuuren","h":2,"a":0},{"player":"Bertjuh","h":3,"a":0},{"player":"Bo.","h":2,"a":0},{"player":"Bobcorn","h":1,"a":2},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Christopheramboz","h":2,"a":0},{"player":"Cornelis2026","h":3,"a":2},{"player":"Crazy Dutchman","h":1,"a":2},{"player":"Daisy010","h":1,"a":1},{"player":"El-Toro-Loco","h":1,"a":1},{"player":"Erol_Ulu","h":3,"a":0},{"player":"Fseton","h":2,"a":0},{"player":"GeorgeV.","h":1,"a":1},{"player":"Givano","h":2,"a":1},{"player":"GonnyDebode","h":1,"a":0},{"player":"Harro1","h":2,"a":0},{"player":"Heer","h":4,"a":1},{"player":"ikgajuichen","h":3,"a":0},{"player":"JanCandiano","h":2,"a":0},{"player":"JanvdL","h":1,"a":2},{"player":"John0504","h":3,"a":1},{"player":"JoycevanRiet","h":2,"a":0},{"player":"JRHJNB","h":2,"a":0},{"player":"Jules-","h":3,"a":0},{"player":"Katinkadeb","h":2,"a":0},{"player":"Keepertje","h":2,"a":0},{"player":"Kleine Flo","h":2,"a":0},{"player":"Koninkie","h":2,"a":1},{"player":"Marlayne","h":1,"a":3},{"player":"Martijnmeestervoorspeller","h":1,"a":2},{"player":"MaureenGLA","h":2,"a":0},{"player":"Mauricio1980","h":1,"a":0},{"player":"Mobicontrol-Xavier","h":0,"a":0},{"player":"Nelson1983","h":3,"a":0},{"player":"Norman.P","h":0,"a":0},{"player":"Oppie1978","h":1,"a":1},{"player":"Raymond de Haas","h":2,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"RoanTuit(messi)","h":3,"a":0},{"player":"Robertosxs","h":2,"a":0},{"player":"Rugnummer67","h":2,"a":1},{"player":"StanleyBoessen","h":2,"a":2},{"player":"StudentjeIndicium","h":2,"a":0},{"player":"THEGOAT37","h":1,"a":0},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":2,"a":1},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":4,"a":1},{"player":"Wisselbeker","h":2,"a":0},{"player":"Wkkipje","h":3,"a":1}],"39":[{"player":"Wolsman","h":0,"a":2},{"player":"AlinevanVuuren","h":1,"a":1},{"player":"Bertjuh","h":1,"a":1},{"player":"Bo.","h":1,"a":1},{"player":"Bobcorn","h":0,"a":2},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":0,"a":2},{"player":"Cornelis2026","h":1,"a":3},{"player":"Crazy Dutchman","h":1,"a":1},{"player":"Daisy010","h":0,"a":1},{"player":"El-Toro-Loco","h":0,"a":1},{"player":"Erol_Ulu","h":0,"a":2},{"player":"Fseton","h":0,"a":2},{"player":"GeorgeV.","h":1,"a":1},{"player":"Givano","h":1,"a":2},{"player":"GonnyDebode","h":0,"a":2},{"player":"Harro1","h":2,"a":2},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":0,"a":1},{"player":"JanCandiano","h":0,"a":2},{"player":"JanvdL","h":1,"a":3},{"player":"John0504","h":2,"a":2},{"player":"JoycevanRiet","h":1,"a":1},{"player":"JRHJNB","h":0,"a":0},{"player":"Jules-","h":0,"a":2},{"player":"Katinkadeb","h":0,"a":0},{"player":"Keepertje","h":0,"a":1},{"player":"Kleine Flo","h":0,"a":1},{"player":"Koninkie","h":0,"a":1},{"player":"Marlayne","h":1,"a":1},{"player":"Martijnmeestervoorspeller","h":1,"a":1},{"player":"MaureenGLA","h":1,"a":1},{"player":"Mauricio1980","h":0,"a":2},{"player":"Mobicontrol-Xavier","h":0,"a":1},{"player":"Nelson1983","h":1,"a":2},{"player":"Norman.P","h":0,"a":1},{"player":"Oppie1978","h":1,"a":2},{"player":"Raymond de Haas","h":0,"a":1},{"player":"Reboss","h":0,"a":2},{"player":"RoanTuit(messi)","h":1,"a":3},{"player":"Robertosxs","h":1,"a":1},{"player":"Rugnummer67","h":1,"a":2},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":0,"a":1},{"player":"THEGOAT37","h":0,"a":1},{"player":"Trauner_in_Oranje","h":1,"a":2},{"player":"UedaTopscorer","h":1,"a":1},{"player":"WesleyMerwe","h":0,"a":3},{"player":"WillemCo","h":0,"a":2},{"player":"Wisselbeker","h":2,"a":0},{"player":"Wkkipje","h":2,"a":1}],"40":[{"player":"Wolsman","h":2,"a":1},{"player":"AlinevanVuuren","h":4,"a":2},{"player":"Bertjuh","h":3,"a":0},{"player":"Bo.","h":2,"a":1},{"player":"Bobcorn","h":2,"a":0},{"player":"Brokkenpiloot","h":3,"a":0},{"player":"Christopheramboz","h":3,"a":1},{"player":"Cornelis2026","h":4,"a":1},{"player":"Crazy Dutchman","h":3,"a":2},{"player":"Daisy010","h":2,"a":0},{"player":"El-Toro-Loco","h":2,"a":1},{"player":"Erol_Ulu","h":2,"a":1},{"player":"Fseton","h":2,"a":0},{"player":"GeorgeV.","h":2,"a":1},{"player":"Givano","h":3,"a":1},{"player":"GonnyDebode","h":3,"a":2},{"player":"Harro1","h":2,"a":0},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":2,"a":1},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":2,"a":0},{"player":"John0504","h":4,"a":0},{"player":"JoycevanRiet","h":3,"a":1},{"player":"JRHJNB","h":3,"a":1},{"player":"Jules-","h":2,"a":0},{"player":"Katinkadeb","h":3,"a":1},{"player":"Keepertje","h":1,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":2,"a":0},{"player":"Marlayne","h":3,"a":2},{"player":"Martijnmeestervoorspeller","h":3,"a":2},{"player":"MaureenGLA","h":3,"a":2},{"player":"Mauricio1980","h":2,"a":1},{"player":"Mobicontrol-Xavier","h":3,"a":0},{"player":"Nelson1983","h":3,"a":0},{"player":"Norman.P","h":3,"a":0},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":2,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"RoanTuit(messi)","h":2,"a":0},{"player":"Robertosxs","h":2,"a":0},{"player":"Rugnummer67","h":3,"a":1},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":2,"a":0},{"player":"THEGOAT37","h":2,"a":0},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":1,"a":0},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":4,"a":1},{"player":"Wisselbeker","h":2,"a":1},{"player":"Wkkipje","h":2,"a":2}],"41":[{"player":"Wolsman","h":3,"a":0},{"player":"AlinevanVuuren","h":5,"a":2},{"player":"Bertjuh","h":4,"a":0},{"player":"Bo.","h":3,"a":0},{"player":"Bobcorn","h":2,"a":0},{"player":"BornBjorg","h":4,"a":0},{"player":"Brokkenpiloot","h":3,"a":0},{"player":"Christopheramboz","h":3,"a":0},{"player":"Cornelis2026","h":4,"a":1},{"player":"Crazy Dutchman","h":4,"a":0},{"player":"Daisy010","h":3,"a":0},{"player":"El-Toro-Loco","h":4,"a":0},{"player":"Erol_Ulu","h":4,"a":0},{"player":"Fseton","h":4,"a":0},{"player":"GeorgeV.","h":4,"a":0},{"player":"Givano","h":5,"a":0},{"player":"GonnyDebode","h":5,"a":0},{"player":"Harro1","h":2,"a":0},{"player":"Heer","h":3,"a":0},{"player":"ikgajuichen","h":4,"a":0},{"player":"JanCandiano","h":3,"a":1},{"player":"JanvdL","h":4,"a":0},{"player":"John0504","h":3,"a":0},{"player":"JoycevanRiet","h":4,"a":0},{"player":"JRHJNB","h":3,"a":0},{"player":"Jules-","h":3,"a":0},{"player":"Katinkadeb","h":2,"a":0},{"player":"Keepertje","h":5,"a":0},{"player":"Kleine Flo","h":3,"a":0},{"player":"Koninkie","h":3,"a":0},{"player":"Marlayne","h":2,"a":1},{"player":"Martijnmeestervoorspeller","h":4,"a":0},{"player":"MaureenGLA","h":3,"a":0},{"player":"Mauricio1980","h":3,"a":1},{"player":"Mobicontrol-Xavier","h":4,"a":0},{"player":"Nelson1983","h":4,"a":0},{"player":"Norman.P","h":4,"a":0},{"player":"Oppie1978","h":3,"a":0},{"player":"Raymond de Haas","h":3,"a":0},{"player":"Reboss","h":3,"a":0},{"player":"RoanTuit(messi)","h":4,"a":0},{"player":"Robertosxs","h":3,"a":1},{"player":"Rugnummer67","h":2,"a":1},{"player":"StanleyBoessen","h":2,"a":1},{"player":"StudentjeIndicium","h":3,"a":1},{"player":"THEGOAT37","h":3,"a":0},{"player":"Trauner_in_Oranje","h":3,"a":0},{"player":"UedaTopscorer","h":2,"a":0},{"player":"WesleyMerwe","h":3,"a":0},{"player":"WillemCo","h":3,"a":0},{"player":"Wisselbeker","h":3,"a":0},{"player":"Wkkipje","h":3,"a":0}]};
window.POOL_STANDINGS = {"A":[{"team":"Mexico","played":2,"w":2,"g":0,"v":0,"points":6,"saldo":3},{"team":"Zuid Korea","played":2,"w":1,"g":0,"v":1,"points":3,"saldo":0},{"team":"Tsjechië","played":2,"w":0,"g":1,"v":1,"points":1,"saldo":-1},{"team":"Zuid Afrika","played":2,"w":0,"g":1,"v":1,"points":1,"saldo":-2}],"B":[{"team":"Canada","played":2,"w":1,"g":1,"v":0,"points":4,"saldo":6},{"team":"Zwitserland","played":2,"w":1,"g":1,"v":0,"points":4,"saldo":3},{"team":"Bosnië","played":2,"w":0,"g":1,"v":1,"points":1,"saldo":-3},{"team":"Qatar","played":2,"w":0,"g":1,"v":1,"points":1,"saldo":-6}],"D":[{"team":"USA","played":2,"w":2,"g":0,"v":0,"points":6,"saldo":5},{"team":"Australië","played":2,"w":1,"g":0,"v":1,"points":3,"saldo":0},{"team":"Paraguay","played":2,"w":1,"g":0,"v":1,"points":3,"saldo":-2},{"team":"Turkije","played":2,"w":0,"g":0,"v":2,"points":0,"saldo":-3}],"C":[{"team":"Brazilië","played":2,"w":1,"g":1,"v":0,"points":4,"saldo":3},{"team":"Marokko","played":2,"w":1,"g":1,"v":0,"points":4,"saldo":1},{"team":"Schotland","played":2,"w":1,"g":0,"v":1,"points":3,"saldo":0},{"team":"Haiti","played":2,"w":0,"g":0,"v":2,"points":0,"saldo":-4}],"E":[{"team":"Duitsland","played":2,"w":2,"g":0,"v":0,"points":6,"saldo":7},{"team":"Ivoorkust","played":2,"w":1,"g":0,"v":1,"points":3,"saldo":0},{"team":"Ecuador","played":2,"w":0,"g":1,"v":1,"points":1,"saldo":-1},{"team":"Curacao","played":2,"w":0,"g":1,"v":1,"points":1,"saldo":-6}],"F":[{"team":"Nederland","played":2,"w":1,"g":1,"v":0,"points":4,"saldo":4},{"team":"Japan","played":2,"w":1,"g":1,"v":0,"points":4,"saldo":4},{"team":"Zweden","played":2,"w":1,"g":0,"v":1,"points":3,"saldo":0},{"team":"Tunesië","played":2,"w":0,"g":0,"v":2,"points":0,"saldo":-8}],"H":[{"team":"Spanje","played":2,"w":1,"g":1,"v":0,"points":4,"saldo":4},{"team":"Uruguay","played":2,"w":0,"g":2,"v":0,"points":2,"saldo":0},{"team":"Kaapverdie","played":2,"w":0,"g":2,"v":0,"points":2,"saldo":0},{"team":"Saoedi-Arabie","played":2,"w":0,"g":1,"v":1,"points":1,"saldo":-4}],"G":[{"team":"Egypte","played":2,"w":1,"g":1,"v":0,"points":4,"saldo":2},{"team":"Iran","played":2,"w":0,"g":2,"v":0,"points":2,"saldo":0},{"team":"België","played":2,"w":0,"g":2,"v":0,"points":2,"saldo":0},{"team":"Nieuw Zeeland","played":2,"w":0,"g":1,"v":1,"points":1,"saldo":-2}],"I":[{"team":"Noorwegen","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":3},{"team":"Frankrijk","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":2},{"team":"Senegal","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2},{"team":"Irak","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-3}],"J":[{"team":"Argentinië","played":2,"w":2,"g":0,"v":0,"points":6,"saldo":5},{"team":"Oostenrijk","played":2,"w":1,"g":0,"v":1,"points":3,"saldo":0},{"team":"Jordanie","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2},{"team":"Algerije","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-3}],"L":[{"team":"Engeland","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":2},{"team":"Ghana","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":1},{"team":"Panama","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-1},{"team":"Kroatië","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2}],"K":[{"team":"Colombia","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":2},{"team":"Congo","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Portugal","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Oezbekistan","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2}]};

// Puntenhistorie per speler (door de scraper bijgehouden, max 12 metingen) —
// voedt de mini-sparkline in de ranglijst. Groeit alleen als de punten wijzigen.
window.POOL_HISTORY = {"Wolsman":[1600,1715,1810,2105,2125,2200,2400,2515,2610,2610,2685,2780],"Kleine Flo":[1390,1560,1655,1825,1845,1940,2140,2235,2330,2330,2425,2520],"Bertjuh":[1560,1730,1825,2100,2100,2195,2395,2415,2490,2510,2530,2625],"Bobcorn":[1585,1755,1755,1945,1965,2060,2135,2310,2385,2405,2500,2700],"UedaTopscorer":[1155,1325,1325,1420,1495,1515,1715,1735,1830,1850,1890,1985],"Oppie1978":[1925,2095,2170,2340,2340,2435,2530,2625,2720,2740,2935,3030],"El-Toro-Loco":[965,1240,1240,1640,1640,1715,1810,1925,2020,2040,2215,2310],"StudentjeIndicium":[1680,1775,1775,1965,1985,2060,2135,2230,2325,2325,2420,2620],"Mauricio1980":[1455,1570,1665,2065,2065,2160,2255,2370,2465,2485,2560,2655],"AlinevanVuuren":[1600,1715,1810,2000,2020,2115,2210,2385,2480,2580,2620,2695],"Wisselbeker":[1845,1920,2120,2320,2320,2415,2490,2685,2780,2800,2820,2915],"Roantuit":[0,0,0,0,0,0,0,0,0,0],"Robertosxs":[1615,1765,1965,2240,2260,2335,2410,2505,2580,2580,2620,2820],"Reboss":[1245,1360,1455,1750,1770,1845,1940,2055,2150,2170,2265,2465],"Mobicontrol":[315,315,515,515,590,610,610,760,760,780,800,920],"Brokkenpiloot":[1800,1970,2065,2360,2380,2475,2570,2665,2760,2780,2820,2915],"Katinkadeb":[1590,1685,1885,2035,2055,2075,2170,2285,2485,2485,2505,2580],"BornBjorg":[1710,1710,1710,1710,1710,1710,1710,1710,1710,1710,1710,1710],"Fseton":[1520,1635,1635,1825,1845,1920,2120,2235,2330,2350,2445,2645],"Raymond de Haas":[1410,1525,1525,1820,2020,2095,2190,2305,2400,2420,2515,2715],"ScheidsTon":[0,0,0,0,0,0,0,0,0,0],"THEGOAT37":[1580,1580,1675,1970,1990,2085,2285,2400,2600,2620,2695,2895],"WesleyMerwe":[1315,1505,1705,1895,1895,1970,2045,2140,2235,2255,2370,2570],"Daisy010":[1630,1780,1800,1915,1935,2030,2125,2320,2395,2395,2570,2770],"Erol_Ulu":[1945,2020,2220,2390,2410,2505,2705,2820,3020,3040,3115,3210],"Givano":[2000,2170,2170,2340,2340,2435,2530,2705,2800,2800,2915,2990],"VanderLans":[665,865,865,980,980,980,1000,1040,1040,1135,1430,1630],"Trauner_in_Oranje":[1420,1590,1685,1960,1960,2035,2130,2245,2340,2360,2475,2675],"Keepertje":[1065,1180,1180,1370,1390,1390,1485,1580,1675,1695,1790,1790],"John0504":[1200,1350,1445,1595,1615,1710,1785,1860,1955,1975,1975,2070],"Rugnummer67":[1775,1925,2000,2150,2170,2245,2340,2435,2435,2435,2550,2625],"Norman.P":[1760,1930,2025,2320,2340,2360,2455,2550,2645,2665,2840,2935],"StanleyBoessen":[1485,1505,1600,1820,1840,1915,1935,2010,2105,2205,2425,2425],"GonnyDebode":[1335,1430,1525,1640,1640,1660,1755,1875,1970,1970,2045,2120],"Marlayne":[1290,1310,1385,1460,1480,1575,1650,1770,1845,1865,1885,1960],"Jules-":[1445,1560,1655,1825,1845,1940,2015,2110,2205,2225,2300,2500],"Harro1":[1360,1380,1475,1695,1695,1790,1885,1885,1980,2000,2020,2220],"JRHJNB":[1450,1565,1660,1935,1955,2030,2125,2240,2440,2440,2460,2535],"JoycevanRiet":[1295,1370,1465,1560,1580,1675,1770,1970,2045,2045,2085,2160],"Heer":[1710,1900,2100,2395,2415,2490,2585,2700,2795,2815,2835,2835],"Pepijndh":[0,0,0,0,0,0,0,0,0,0,0,0],"Cornelis2026":[1420,1495,1590,1740,1740,1740,1815,1835,1930,2030,2250,2325],"Wkkipje":[1530,1625,1645,1845,1865,1960,2035,2110,2185,2185,2185,2205],"MaureenGLA":[1500,1650,1850,2050,2070,2165,2240,2240,2315,2335,2375,2450],"GeorgeV.":[2010,2030,2125,2315,2335,2355,2555,2670,2765,2785,2905,3000],"ikgajuichen":[1885,2000,2000,2190,2210,2305,2400,2515,2610,2630,2705,2800],"JanCandiano":[1550,1720,1815,2110,2130,2225,2300,2395,2470,2470,2565,2660],"Bo.":[1295,1445,1645,1760,1780,1875,2075,2190,2285,2305,2345,2440],"Koninkie":[1775,1890,1985,2175,2195,2270,2365,2560,2635,2655,2750,2950],"Martijnmeestervoorspeller":[1940,2110,2130,2405,2405,2480,2575,2690,2765,2765,2805,2880],"Crazy Dutchman":[2290,2460,2480,2755,2755,2830,2925,3020,3095,3095,3135,3210],"RoanTuit(messi)":[1310,1480,1480,1480,1480,1575,1575,1575,1670,1690,1890,2090],"Christopheramboz":[1735,1885,1980,2170,2170,2245,2340,2455,2530,2550,2645,2720],"Frenk010fr":[0,0,0,0,0,0,0,0,0,0,0,0],"WillemCo":[1495,1515,1590,1780,1800,1800,1895,1990,2065,2085,2160,2235],"Nelson1983":[810,1000,1075,1245,1245,1340,1415,1530,1730,1750,1845,1940],"Mobicontrol-Xavier":[1645,1760,1855,2255,2255,2350,2445,2560,2655,2675,2850,2945],"JanvdL":[1895,2065,2140,2330,2350,2425,2520,2615,2710,2810,3030,3230]};

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
window.POOL_HENK = {"generatedAt":"2026-06-23","playerTakes":{"JanvdL":"JanvdL staat bovenaan maar lijkt vastgeroest op zijn eigen gouden troon, tenzij hij denkt dat Uruguay echt verliest van Kaapverdië.","Erol_Ulu":"Erol_Ulu gokt op een 3-0 voor Uruguay en eindigt daardoor met het kopje tegen de muur van een 2-2; kampioen in stilstand blijven.","Crazy Dutchman":"Crazy Dutchman is zo gek dat hij dacht dat Nieuw-Zeeland en Egypte elkaar zouden laten zitten op 1-1, maar in werkelijkheid kreeg hij een kiwi op z'n falafel.","Oppie1978":"Oppie1978 heeft een streak van 3, maar dat is ook het enige dat beweegt in zijn stilstaande carrière.","GeorgeV.":"GeorgeV. ziet 1-1 voor Nederland-Zweden en krijgt een Oranje-windsnelheid van 5-1 rakelings langs zich heen; een koninklijke blunder.","Givano":"Givano, nog een die denkt dat hij Uruguay-Kaapverdië kan voorspellen met een scheve bril, maar blijft veilig in de achterhoede.","Koninkie":"Koninkie, nog steeds in de illusie dat 2-1-scènes zich afspelen terwijl hij de boemel van 2-2 voorbij ziet razen.","Mobicontrol-Xavier":"Mobicontrol-Xavier heeft de turbo erop met 1300 punten, maar lijkt een pitstop te hebben gemist gezien de stilstand.","Norman.P":"Norman.P dacht dat Nederland tegen Zweden gelijk zou spelen, maar we weten allemaal hoe die vlieger niet opging.","Wisselbeker":"Wisselbeker, gestagneerd en met een gebrek aan precisie, vult zijn schap niet met meer dan stof en herinneringen aan tragere tijden.","Brokkenpiloot":"Brokkenpiloot is naam-waardig en liet Nieuw-Zeeland-Egypte crashen met een 1-1 gok, maar verschuilt zich nog steeds onder de radar.","THEGOAT37":"THEGOAT37 heeft vier keer raak geschoten, maar blijft voor de rest op de schap staan als een doosje eieren zonder doos.","Martijnmeestervoorspeller":"Martijnmeestervoorspeller, de naam zegt het al, maar de score vertelt een ander verhaal; misschien een beetje te veel 'meester' en te weinig 'voorspeller'?","Heer":"Heer voorzag een 4-1 spektakel voor Uruguay maar keek naar een teleurstellende 2-2, mist dus duidelijk nog een herenspel.","Robertosxs":"Robertosxs houdt wel van een gokje, maar gokt z'n eigen acties dood met een doodgewone 2-0 inschattingsfout.","ikgajuichen":"ikgajuichen dacht dat hij met 3-0 kon juichen, maar ging van een koude kermis naar een uitgestorven veld met 2-2.","Wolsman":"Wolsman dacht Uruguay als winnaar te hebben met 3-0, maar knalde vol op de muur van een 2-2 realiteit.","Daisy010":"Daisy010 schittert met een streak van 3, maar de stilstand kleurt haar voorspellingen grijs.","Christopheramboz":"Christopheramboz meent dat een 2-0 de norm moet zijn, maar het enige wat hij doet is op dezelfde plek blijven staan.","Raymond de Haas":"Raymond de Haas in een stilstaande mars naar beneden, met slechts hoop om in de honderd te breken als hij stopt met 2-0 dromen.","Bobcorn":"Bobcorn gokt 1-2 maar komt vast te zitten in het luchtledige van een 2-2, een zouteloze energiebron.","AlinevanVuuren":"AlinevanVuuren haalt een 2-0 uit de kast voor Uruguay, maar krijgt 2-2 als slap aftreksel teruggeserveerd.","Trauner_in_Oranje":"Trauner_in_Oranje dacht het vrachtje binnen te hebben met een 2-0 gok, maar Uruguay stuurde hem een enkel retour 2-2.","JanCandiano":"JanCandiano wandelt rond met een 2-0-droomballon, die door het 2-2-speldje meteen klapt.","Mauricio1980":"Mauricio1980 dacht dat 1-0 de Udderweg was, maar belandde op de zandweg van een 2-2 frustratie.","Fseton":"Fseton dook diep in de 2-0-fantasie, maar plonsde zonder zwembanden neer op de platte vloer van het 2-2 zwembad.","Bertjuh":"Bertjuh gokte nog eens 2-1 voor Tunesië tegen Japan, maar bleef met een lege hand 0-4 achter.","Rugnummer67":"Rugnummer67 dacht met een 2-2 op Spanje vs Saoedi-Arabië een gelijkspel te scoren, maar kreeg de Spaanse storm van 4-0 over zich heen.","StudentjeIndicium":"StudentjeIndicium gokte op 2-0 voor Uruguay met de zekerheid van een tentamenuitslag, maar bleef met lege handen staan na het 2-2 resultaat.","Katinkadeb":"Katinkadeb dacht Nederland op 1-1 te zien stranden, maar moest toekijken hoe de 5-1 Oranjegolf aan zich voorbij zwiepte.","WesleyMerwe":"WesleyMerwe gokte op 2-0 voor Uruguay, maar bleef met een lege maag achter in de 2-2 woestijn.","JRHJNB":"JRHJNB zakt met 2-0 gedachtengoed door de mand naar het niets van 2-2.","Kleine Flo":"Kleine Flo droomt van het 2-0 scenario voor Uruguay, maar blijft vastzitten in de blubber van de 2-2.","Jules-":"Jules-, de monarch van de stilstand, gokt hoog met 3-0, maar krijgt slechts de schamele 2-2 als beloning.","Reboss":"Reboss gokt op 2-0 en krijgt vervolgens de koude douche van een 2-2 over zich heen.","MaureenGLA":"MaureenGLA dacht Japan te slim af te zijn met 2-2, maar zag vier rennende Japanners met een 0-4 langs komen.","Bo.":"Bo. blijft met 2-0 gissingen in de 2-2 modder hangen zonder enige beweging vooruit.","StanleyBoessen":"StanleyBoessen, de enige visionair met 2-2, maar blijft verder stilzitten als een Broodje Bapao.","Cornelis2026":"Cornelis2026 droomde van evenwicht in Nederland-Zweden, maar kreeg de confettiregen van een 5-1 om de oren.","El-Toro-Loco":"El-Toro-Loco heeft misschien wel de punten, maar zonder beweging wordt het niet meer dan gebrul in de stal.","WillemCo":"WillemCo had een 2-2 visie voor Nederland, maar moest lijdzaam toezien hoe het Oranjekanonschot zijn voorspelling wegblies.","Harro1":"Harro1 probeerde de gelijkmaker voor Japan te voorspellen, maar zag de kogel van 0-4 hun goal in verdwijnen.","Wkkipje":"Wkkipje gaat voor de 2-1 en loopt regelrecht de 1-3 verslagenis van Nieuw-Zeeland-Egypte in.","JoycevanRiet":"JoycevanRiet, nog zo'n optimist met een 2-0 geest voor Uruguay, maar eindigt met de 2-2 teleurstelling in de tas.","GonnyDebode":"GonnyDebode, wist niet dat 1-1 een taboe is voor Nederland tegen Zweden, zeker als het 5-1 uitkomt.","RoanTuit(messi)":"RoanTuit(messi) dacht met 3-0 voor Uruguay te scoren, maar kreeg in plaats daarvan rustige stilte van 2-2 terug.","John0504":"John0504 gokte een 3-1 voor Uruguay en krijgt in plaats daarvan een koude douche van het 2-2 gelijkspel.","UedaTopscorer":"UedaTopscorer dacht Nederland op de 1-1 vast te pinnen, maar kreeg een donderslag van 5-1 in de oren.","Marlayne":"Marlayne dacht dat een 0-0 voor Japan de klok zou luiden, maar dat 0-4 maakt een verschil van dag en nacht.","Nelson1983":"Nelson1983, dacht hij dat het met 3-0 voor Uruguay een makkie zou worden, krijgt wel les in teleurgesteld voorspellen.","Keepertje":"Keepertje dacht een 2-2 gelijk voor Nederland te voorspellen, dat liep af in tranen met een eindstand van 5-1.","BornBjorg":"BornBjorg is gestopt met het toevoegen van punten, maar blijft dromen van 2-0 overwinningen die hem uiteindelijk naar de bodem slepen."},"monoloog":"Het lijkt wel of heel de poule in standje stilstand staat! JanvdL, onze koploper, heeft wel de meeste punten, maar met zo'n misser bij Uruguay-Kaapverdië moet je toch even checken of je glazen bol niet kapot is. En wat te denken van Marlayne? Bijna onderaan bungelen en dan Tunesië-Japan niet eens in de buurt. Dan heb je nog BornBjorg helemaal onderaan, maar zonder trendpunten ook geen enkele kans dat hij daar wegkomt. Wordt het niet tijd dat we deze poule een frisse wind geven?","hotTakes":["RoanTuit(messi), twee exacte uitslagen op 46e plek? Je kunt net zo goed dartpijlen naar een kaart gooien, jongen!","Heer denkt kennelijk dat hij Heer en Meester is van de middenmoot, maar met die Uruguay-Kaapverdië blunder mag hij die kroon in de kast laten.","Goeie poging van Bertjuh met die Tunesië-Japan voorspelling, maar 2-1? Dat is geen schot op doel, dat is een bal in de sloot!","Norman.P's 1-1 gok bij Nederland-Zweden was zo optimistisch dat ik me afvraag of hij de wedstrijd überhaupt heeft gekeken.","Bobcorn denkt vaak een beetje andersom, zoals bij Uruguay-Kaapverdië. 1-2? Het werd gewoon een gelijkspel, vriend, pak die popcorn erbij en leer van je fouten!"],"dailyTarget":{"name":"RoanTuit(messi)","lines":["RoanTuit(messi), je staat stil op plek 46 alsof je wacht op een blessurebehandeling die maar niet komt.","Met slechts twee exacte uitslagen heb je meer gemeen met een scheidsrechter zonder bril dan met Messi.","Uruguay-Kaapverdië 3-0 voorspellen terwijl het een 2-2 werd? Misschien moet je kristallen bol op vakantie naar Kaapverdië."]},"matchTakes":{"28":"USA - Australië, 2-0: Met acht dappere dwazen die exact goed gokken, verdwaalt de rest tussen sterren en strepen.","29":"Schotland - Marokko, 0-1: Schotse mist voor drie strategen, terwijl de Marokkaanse Sahara helder straalt — aantrekkelijk gokken à la Heer!","30":"Brazilië - Haïti, 3-0: Alles op z'n plek, behalve Marlayne die denkt dat carnaval al een voetbaldans is.","31":"Turkije - Paraguay, 0-1: Raymond de Haas, orakel van Asunción, terwijl de rest Turkse houten klompen draagt.","32":"Nederland - Zweden, 5-1: Oranje wervelwind wast Zweedse was — Cornelis2026, leg dat maar eens droog uit.","33":"Duitsland - Ivoorkust, 2-1: StanleyBoessen gokt op een gelijkspel maar mist de Duitse precisie; oeps.","34":"Ecuador - Curaçao, 0-0: Blinde gokkers bewonderen de Ecuadoriaanse bergwandeling met nul zicht op gelijkspel.","35":"Tunesië - Japan, 0-4: Joyce raakt de Japanse zen, terwijl Bertjuh de Sahara op z'n kaartje mist.","36":"Spanje - Saoedi-Arabië, 4-0: Iedereen zag het spaans benauwd, behalve Rugnummer67 die op een Arabische wonderlamp gokte.","37":"België - Iran, 0-0: WK in slaapmodus, vier zien het, de rest zoekt in de duisternis naar de Belgische ballonnenshow.","38":"Uruguay - Kaapverdië, 2-2: StanleyBoessen spot de Uruguayaanse tango, Wolsman dacht dat het samba was.","39":"Nieuw-Zeeland - Egypte, 1-3: Cornelis2026 herpakt zich met faraonische precisie, terwijl Wisselbeker in het kiwibos verdwaalt.","40":"Argentinië - Oostenrijk, 2-0: Geen verrassing in de tango, behalve voor hen die een Weens walsje verwachtten."},"targetHistory":["Keepertje","Norman.P","Erol_Ulu","UedaTopscorer","StanleyBoessen","Marlayne","Bertjuh","Fseton","GonnyDebode","RoanTuit(messi)"]};

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
