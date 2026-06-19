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
  syncedAt: "2026-06-19T17:31:21.908Z",
  firstMatchAt: "2026-06-11T21:00:00+02:00",
  predictionsPublic: false,
  // Wordt true zodra de scraper echte punten ziet — de ranglijst
  // schakelt dan automatisch om van invulstatus naar punten.
  pointsAvailable: true
};

// points/prevPos worden door de scraper gevuld zodra het toernooi loopt.
window.POOL_PLAYERS = [
  { name: "Wolsman", matches: 104, winner: true, topscorer: true, paid: true, points: 1715, prevPos: 23 },
  { name: "Kleine Flo", matches: 72, winner: true, topscorer: true, paid: true, points: 1560, prevPos: 34 },
  { name: "Bertjuh", matches: 72, winner: true, topscorer: true, paid: true, points: 1730, prevPos: 21 },
  { name: "Bobcorn", matches: 72, winner: true, topscorer: true, paid: true, points: 1755, prevPos: 20 },
  { name: "UedaTopscorer", matches: 72, winner: true, topscorer: true, paid: true, points: 1325, prevPos: 48 },
  { name: "Oppie1978", matches: 37, winner: true, topscorer: true, paid: true, points: 2095, prevPos: 4 },
  { name: "El-Toro-Loco", matches: 33, winner: false, topscorer: false, paid: true, points: 1240, prevPos: 50 },
  { name: "StudentjeIndicium", matches: 72, winner: true, topscorer: true, paid: true, points: 1775, prevPos: 17 },
  { name: "Mauricio1980", matches: 72, winner: true, topscorer: true, paid: true, points: 1570, prevPos: 32 },
  { name: "AlinevanVuuren", matches: 72, winner: true, topscorer: true, paid: true, points: 1715, prevPos: 23 },
  { name: "Wisselbeker", matches: 48, winner: true, topscorer: true, paid: true, points: 1920, prevPos: 12 },
  { name: "Robertosxs", matches: 104, winner: true, topscorer: true, paid: true, points: 1765, prevPos: 18 },
  { name: "Reboss", matches: 72, winner: true, topscorer: true, paid: true, points: 1360, prevPos: 46 },
  { name: "Mobicontrol-Xavier", matches: 53, winner: true, topscorer: true, paid: true, points: 1760, prevPos: 19 },
  { name: "Brokkenpiloot", matches: 53, winner: true, topscorer: true, paid: true, points: 1970, prevPos: 9 },
  { name: "Katinkadeb", matches: 72, winner: true, topscorer: true, paid: true, points: 1685, prevPos: 26 },
  { name: "BornBjorg", matches: 24, winner: true, topscorer: true, paid: true, points: 1710, prevPos: 25 },
  { name: "Fseton", matches: 45, winner: true, topscorer: true, paid: true, points: 1635, prevPos: 28 },
  { name: "Raymond de Haas", matches: 46, winner: true, topscorer: true, paid: true, points: 1525, prevPos: 36 },
  { name: "THEGOAT37", matches: 45, winner: true, topscorer: true, paid: true, points: 1580, prevPos: 31 },
  { name: "WesleyMerwe", matches: 43, winner: true, topscorer: true, paid: true, points: 1505, prevPos: 38 },
  { name: "Daisy010", matches: 44, winner: true, topscorer: true, paid: true, points: 1780, prevPos: 16 },
  { name: "Erol_Ulu", matches: 72, winner: true, topscorer: true, paid: true, points: 2020, prevPos: 7 },
  { name: "Givano", matches: 72, winner: true, topscorer: true, paid: true, points: 2170, prevPos: 2 },
  { name: "JanvdL", matches: 32, winner: true, topscorer: true, paid: true, points: 2065, prevPos: 5 },
  { name: "Trauner_in_Oranje", matches: 32, winner: true, topscorer: true, paid: true, points: 1590, prevPos: 30 },
  { name: "Keepertje", matches: 72, winner: true, topscorer: true, paid: true, points: 1180, prevPos: 51 },
  { name: "John0504", matches: 72, winner: true, topscorer: true, paid: true, points: 1350, prevPos: 47 },
  { name: "Rugnummer67", matches: 33, winner: true, topscorer: true, paid: true, points: 1925, prevPos: 11 },
  { name: "Norman.P", matches: 32, winner: true, topscorer: true, paid: true, points: 1930, prevPos: 10 },
  { name: "StanleyBoessen", matches: 72, winner: false, topscorer: false, paid: true, points: 1505, prevPos: 38 },
  { name: "GonnyDebode", matches: 72, winner: true, topscorer: true, paid: true, points: 1430, prevPos: 43 },
  { name: "Marlayne", matches: 37, winner: true, topscorer: true, paid: true, points: 1310, prevPos: 49 },
  { name: "Jules-", matches: 72, winner: true, topscorer: true, paid: true, points: 1560, prevPos: 34 },
  { name: "Harro1", matches: 72, winner: true, topscorer: true, paid: true, points: 1380, prevPos: 44 },
  { name: "JRHJNB", matches: 72, winner: true, topscorer: true, paid: true, points: 1565, prevPos: 33 },
  { name: "JoycevanRiet", matches: 72, winner: true, topscorer: true, paid: true, points: 1370, prevPos: 45 },
  { name: "Heer", matches: 72, winner: true, topscorer: true, paid: true, points: 1900, prevPos: 13 },
  { name: "Cornelis2026", matches: 42, winner: true, topscorer: true, paid: true, points: 1495, prevPos: 40 },
  { name: "Wkkipje", matches: 24, winner: true, topscorer: true, paid: true, points: 1625, prevPos: 29 },
  { name: "MaureenGLA", matches: 72, winner: true, topscorer: true, paid: true, points: 1650, prevPos: 27 },
  { name: "GeorgeV.", matches: 72, winner: true, topscorer: true, paid: true, points: 2030, prevPos: 6 },
  { name: "ikgajuichen", matches: 104, winner: true, topscorer: true, paid: true, points: 2000, prevPos: 8 },
  { name: "JanCandiano", matches: 72, winner: true, topscorer: true, paid: true, points: 1720, prevPos: 22 },
  { name: "Bo.", matches: 72, winner: true, topscorer: true, paid: true, points: 1445, prevPos: 42 },
  { name: "Koninkie", matches: 72, winner: true, topscorer: true, paid: true, points: 1890, prevPos: 14 },
  { name: "Martijnmeestervoorspeller", matches: 72, winner: true, topscorer: true, paid: true, points: 2110, prevPos: 3 },
  { name: "Crazy Dutchman", matches: 72, winner: true, topscorer: true, paid: true, points: 2460, prevPos: 1 },
  { name: "RoanTuit(messi)", matches: 23, winner: true, topscorer: true, paid: true, points: 1480, prevPos: 41 },
  { name: "Christopheramboz", matches: 34, winner: true, topscorer: true, paid: true, points: 1885, prevPos: 15 },
  { name: "WillemCo", matches: 30, winner: false, topscorer: false, paid: true, points: 1515, prevPos: 37 },
  { name: "Nelson1983", matches: 23, winner: false, topscorer: false, paid: true, points: 1000, prevPos: 52 }
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
window.POOL_RESULTS = {"mexico|zuidafrika":"2-0","zuidkorea|tsjechie":"2-1","canada|bosnie":"1-1","usa|paraguay":"4-1","qatar|zwitserland":"1-1","brazilie|marokko":"1-1","haiti|schotland":"0-1","australie|turkije":"2-0","duitsland|curacao":"7-1","nederland|japan":"2-2","ivoorkust|ecuador":"1-0","zweden|tunesie":"5-1","spanje|kaapverdie":"0-0","belgie|egypte":"1-1","saoediarabie|uruguay":"1-1","iran|nieuwzeeland":"2-2","frankrijk|senegal":"3-1","irak|noorwegen":"1-4","argentinie|algerije":"3-0","oostenrijk|jordanie":"3-1","portugal|congo":"1-1","engeland|kroatie":"4-2","ghana|panama":"1-0","oezbekistan|colombia":"1-3","tsjechie|zuidafrika":"1-1","zwitserland|bosnie":"4-1","canada|qatar":"6-0","mexico|zuidkorea":"1-0"};
// Voorspellingen per gestarte wedstrijd (scraper). Sleutel = kalender-index
// (POOL_CALENDAR[i]); waarde = [{player, h, a}].
window.POOL_PREDICTIONS = {"14":[{"player":"Wolsman","h":0,"a":2},{"player":"AlinevanVuuren","h":0,"a":2},{"player":"Bertjuh","h":1,"a":0},{"player":"Bo.","h":0,"a":2},{"player":"Bobcorn","h":0,"a":1},{"player":"BornBjorg","h":0,"a":2},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":1,"a":2},{"player":"Cornelis2026","h":3,"a":3},{"player":"Crazy Dutchman","h":1,"a":1},{"player":"Daisy010","h":1,"a":1},{"player":"Erol_Ulu","h":0,"a":2},{"player":"Fseton","h":0,"a":1},{"player":"GeorgeV.","h":0,"a":1},{"player":"Givano","h":0,"a":3},{"player":"GonnyDebode","h":1,"a":2},{"player":"Harro1","h":1,"a":2},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":0,"a":1},{"player":"JanCandiano","h":2,"a":3},{"player":"JanvdL","h":1,"a":2},{"player":"John0504","h":1,"a":4},{"player":"JoycevanRiet","h":1,"a":1},{"player":"JRHJNB","h":0,"a":2},{"player":"Jules-","h":0,"a":2},{"player":"Katinkadeb","h":0,"a":2},{"player":"Keepertje","h":0,"a":2},{"player":"Kleine Flo","h":0,"a":2},{"player":"Koninkie","h":0,"a":2},{"player":"Marlayne","h":0,"a":1},{"player":"Martijnmeestervoorspeller","h":1,"a":1},{"player":"MaureenGLA","h":2,"a":2},{"player":"Mauricio1980","h":0,"a":1},{"player":"Mobicontrol-Xavier","h":0,"a":1},{"player":"Nelson1983","h":0,"a":2},{"player":"Norman.P","h":0,"a":1},{"player":"Oppie1978","h":1,"a":2},{"player":"Raymond de Haas","h":0,"a":2},{"player":"Reboss","h":0,"a":2},{"player":"RoanTuit(messi)","h":1,"a":2},{"player":"Robertosxs","h":1,"a":2},{"player":"Rugnummer67","h":1,"a":1},{"player":"StanleyBoessen","h":1,"a":2},{"player":"StudentjeIndicium","h":1,"a":2},{"player":"THEGOAT37","h":0,"a":1},{"player":"Trauner_in_Oranje","h":1,"a":3},{"player":"UedaTopscorer","h":1,"a":3},{"player":"WesleyMerwe","h":0,"a":2},{"player":"WillemCo","h":0,"a":2},{"player":"Wisselbeker","h":1,"a":2},{"player":"Wkkipje","h":2,"a":2}],"15":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":1,"a":1},{"player":"Bertjuh","h":0,"a":0},{"player":"Bo.","h":0,"a":3},{"player":"Bobcorn","h":1,"a":1},{"player":"BornBjorg","h":1,"a":0},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":2,"a":1},{"player":"Cornelis2026","h":2,"a":1},{"player":"Crazy Dutchman","h":1,"a":0},{"player":"Daisy010","h":0,"a":2},{"player":"Erol_Ulu","h":1,"a":1},{"player":"Fseton","h":1,"a":0},{"player":"GeorgeV.","h":0,"a":1},{"player":"Givano","h":2,"a":2},{"player":"GonnyDebode","h":0,"a":0},{"player":"Harro1","h":0,"a":0},{"player":"Heer","h":1,"a":0},{"player":"ikgajuichen","h":1,"a":0},{"player":"JanCandiano","h":0,"a":0},{"player":"JanvdL","h":0,"a":2},{"player":"John0504","h":1,"a":2},{"player":"JoycevanRiet","h":2,"a":0},{"player":"JRHJNB","h":1,"a":0},{"player":"Jules-","h":2,"a":0},{"player":"Katinkadeb","h":1,"a":1},{"player":"Keepertje","h":1,"a":2},{"player":"Kleine Flo","h":2,"a":0},{"player":"Koninkie","h":0,"a":1},{"player":"Marlayne","h":0,"a":2},{"player":"Martijnmeestervoorspeller","h":1,"a":0},{"player":"MaureenGLA","h":1,"a":1},{"player":"Mauricio1980","h":0,"a":0},{"player":"Mobicontrol-Xavier","h":0,"a":0},{"player":"Nelson1983","h":1,"a":0},{"player":"Norman.P","h":1,"a":0},{"player":"Oppie1978","h":2,"a":2},{"player":"Raymond de Haas","h":1,"a":0},{"player":"Reboss","h":1,"a":0},{"player":"RoanTuit(messi)","h":2,"a":0},{"player":"Robertosxs","h":2,"a":0},{"player":"Rugnummer67","h":2,"a":0},{"player":"StanleyBoessen","h":0,"a":2},{"player":"StudentjeIndicium","h":0,"a":0},{"player":"THEGOAT37","h":1,"a":1},{"player":"Trauner_in_Oranje","h":0,"a":2},{"player":"UedaTopscorer","h":0,"a":1},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":1,"a":1},{"player":"Wisselbeker","h":1,"a":1},{"player":"Wkkipje","h":1,"a":3}],"16":[{"player":"Wolsman","h":2,"a":1},{"player":"AlinevanVuuren","h":4,"a":1},{"player":"Bertjuh","h":3,"a":0},{"player":"Bo.","h":2,"a":0},{"player":"Bobcorn","h":2,"a":1},{"player":"BornBjorg","h":3,"a":0},{"player":"Brokkenpiloot","h":3,"a":0},{"player":"Christopheramboz","h":2,"a":1},{"player":"Cornelis2026","h":2,"a":1},{"player":"Crazy Dutchman","h":3,"a":0},{"player":"Daisy010","h":2,"a":0},{"player":"Erol_Ulu","h":3,"a":1},{"player":"Fseton","h":2,"a":1},{"player":"GeorgeV.","h":2,"a":0},{"player":"Givano","h":3,"a":1},{"player":"GonnyDebode","h":4,"a":2},{"player":"Harro1","h":3,"a":0},{"player":"Heer","h":1,"a":0},{"player":"ikgajuichen","h":1,"a":2},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":2,"a":1},{"player":"John0504","h":4,"a":1},{"player":"JoycevanRiet","h":3,"a":1},{"player":"JRHJNB","h":3,"a":1},{"player":"Jules-","h":2,"a":1},{"player":"Katinkadeb","h":3,"a":1},{"player":"Keepertje","h":1,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":2,"a":0},{"player":"Marlayne","h":2,"a":0},{"player":"Martijnmeestervoorspeller","h":1,"a":1},{"player":"MaureenGLA","h":4,"a":0},{"player":"Mauricio1980","h":2,"a":0},{"player":"Mobicontrol-Xavier","h":2,"a":0},{"player":"Nelson1983","h":3,"a":1},{"player":"Norman.P","h":2,"a":1},{"player":"Oppie1978","h":3,"a":1},{"player":"Raymond de Haas","h":3,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"RoanTuit(messi)","h":3,"a":0},{"player":"Robertosxs","h":3,"a":1},{"player":"Rugnummer67","h":3,"a":2},{"player":"StanleyBoessen","h":2,"a":2},{"player":"StudentjeIndicium","h":3,"a":1},{"player":"THEGOAT37","h":2,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":1},{"player":"UedaTopscorer","h":3,"a":0},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":2,"a":1},{"player":"Wisselbeker","h":3,"a":1},{"player":"Wkkipje","h":3,"a":1}],"17":[{"player":"Wolsman","h":0,"a":2},{"player":"AlinevanVuuren","h":1,"a":4},{"player":"Bertjuh","h":1,"a":3},{"player":"Bo.","h":0,"a":2},{"player":"Bobcorn","h":1,"a":2},{"player":"BornBjorg","h":0,"a":2},{"player":"Brokkenpiloot","h":0,"a":2},{"player":"Christopheramboz","h":0,"a":2},{"player":"Cornelis2026","h":2,"a":2},{"player":"Crazy Dutchman","h":1,"a":3},{"player":"Daisy010","h":0,"a":1},{"player":"Erol_Ulu","h":0,"a":3},{"player":"Fseton","h":0,"a":2},{"player":"GeorgeV.","h":0,"a":2},{"player":"Givano","h":0,"a":2},{"player":"GonnyDebode","h":1,"a":3},{"player":"Harro1","h":0,"a":2},{"player":"Heer","h":0,"a":2},{"player":"ikgajuichen","h":0,"a":3},{"player":"JanCandiano","h":0,"a":2},{"player":"JanvdL","h":1,"a":2},{"player":"John0504","h":1,"a":2},{"player":"JoycevanRiet","h":0,"a":2},{"player":"JRHJNB","h":0,"a":2},{"player":"Jules-","h":0,"a":3},{"player":"Katinkadeb","h":0,"a":2},{"player":"Keepertje","h":0,"a":4},{"player":"Kleine Flo","h":0,"a":2},{"player":"Koninkie","h":0,"a":2},{"player":"Marlayne","h":1,"a":1},{"player":"Martijnmeestervoorspeller","h":1,"a":3},{"player":"MaureenGLA","h":1,"a":2},{"player":"Mauricio1980","h":0,"a":2},{"player":"Mobicontrol-Xavier","h":0,"a":3},{"player":"Nelson1983","h":0,"a":2},{"player":"Norman.P","h":0,"a":2},{"player":"Oppie1978","h":1,"a":3},{"player":"Raymond de Haas","h":0,"a":2},{"player":"Reboss","h":0,"a":3},{"player":"RoanTuit(messi)","h":0,"a":3},{"player":"Robertosxs","h":1,"a":2},{"player":"Rugnummer67","h":1,"a":4},{"player":"StanleyBoessen","h":1,"a":2},{"player":"StudentjeIndicium","h":1,"a":3},{"player":"THEGOAT37","h":1,"a":2},{"player":"Trauner_in_Oranje","h":0,"a":3},{"player":"UedaTopscorer","h":0,"a":2},{"player":"WesleyMerwe","h":1,"a":2},{"player":"WillemCo","h":0,"a":2},{"player":"Wisselbeker","h":1,"a":2},{"player":"Wkkipje","h":2,"a":3}],"18":[{"player":"Wolsman","h":3,"a":0},{"player":"AlinevanVuuren","h":3,"a":1},{"player":"Bertjuh","h":3,"a":0},{"player":"Bo.","h":3,"a":1},{"player":"Bobcorn","h":3,"a":1},{"player":"BornBjorg","h":2,"a":0},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":2,"a":2},{"player":"Cornelis2026","h":4,"a":2},{"player":"Crazy Dutchman","h":3,"a":1},{"player":"Daisy010","h":2,"a":0},{"player":"Erol_Ulu","h":2,"a":0},{"player":"Fseton","h":2,"a":0},{"player":"GeorgeV.","h":1,"a":1},{"player":"Givano","h":3,"a":1},{"player":"GonnyDebode","h":6,"a":0},{"player":"Harro1","h":2,"a":1},{"player":"Heer","h":2,"a":0},{"player":"ikgajuichen","h":3,"a":0},{"player":"JanCandiano","h":3,"a":1},{"player":"JanvdL","h":3,"a":0},{"player":"John0504","h":5,"a":1},{"player":"JoycevanRiet","h":4,"a":0},{"player":"JRHJNB","h":3,"a":1},{"player":"Jules-","h":3,"a":0},{"player":"Katinkadeb","h":3,"a":0},{"player":"Keepertje","h":2,"a":1},{"player":"Kleine Flo","h":3,"a":0},{"player":"Koninkie","h":2,"a":0},{"player":"Marlayne","h":3,"a":0},{"player":"Martijnmeestervoorspeller","h":1,"a":1},{"player":"MaureenGLA","h":4,"a":1},{"player":"Mauricio1980","h":2,"a":1},{"player":"Mobicontrol-Xavier","h":3,"a":0},{"player":"Nelson1983","h":1,"a":0},{"player":"Norman.P","h":2,"a":0},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":2,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"RoanTuit(messi)","h":2,"a":0},{"player":"Robertosxs","h":3,"a":1},{"player":"Rugnummer67","h":3,"a":0},{"player":"StanleyBoessen","h":2,"a":0},{"player":"StudentjeIndicium","h":2,"a":0},{"player":"THEGOAT37","h":3,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":3,"a":1},{"player":"WesleyMerwe","h":1,"a":0},{"player":"WillemCo","h":3,"a":0},{"player":"Wisselbeker","h":4,"a":1},{"player":"Wkkipje","h":3,"a":1}],"19":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":2,"a":0},{"player":"Bertjuh","h":2,"a":0},{"player":"Bo.","h":1,"a":1},{"player":"Bobcorn","h":1,"a":0},{"player":"BornBjorg","h":1,"a":0},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":4,"a":0},{"player":"Cornelis2026","h":2,"a":2},{"player":"Crazy Dutchman","h":3,"a":0},{"player":"Daisy010","h":2,"a":1},{"player":"Erol_Ulu","h":2,"a":0},{"player":"Fseton","h":1,"a":0},{"player":"GeorgeV.","h":2,"a":0},{"player":"Givano","h":3,"a":0},{"player":"GonnyDebode","h":2,"a":0},{"player":"Harro1","h":1,"a":1},{"player":"Heer","h":2,"a":0},{"player":"ikgajuichen","h":2,"a":0},{"player":"JanCandiano","h":3,"a":0},{"player":"JanvdL","h":3,"a":1},{"player":"John0504","h":3,"a":0},{"player":"JoycevanRiet","h":2,"a":0},{"player":"JRHJNB","h":2,"a":0},{"player":"Jules-","h":2,"a":0},{"player":"Katinkadeb","h":2,"a":1},{"player":"Keepertje","h":2,"a":1},{"player":"Kleine Flo","h":2,"a":0},{"player":"Koninkie","h":1,"a":0},{"player":"Marlayne","h":1,"a":2},{"player":"Martijnmeestervoorspeller","h":3,"a":0},{"player":"MaureenGLA","h":2,"a":0},{"player":"Mauricio1980","h":3,"a":0},{"player":"Mobicontrol-Xavier","h":2,"a":0},{"player":"Norman.P","h":2,"a":0},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":1,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"RoanTuit(messi)","h":2,"a":1},{"player":"Robertosxs","h":1,"a":0},{"player":"Rugnummer67","h":2,"a":0},{"player":"StanleyBoessen","h":1,"a":0},{"player":"StudentjeIndicium","h":2,"a":1},{"player":"THEGOAT37","h":1,"a":0},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":2,"a":0},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":2,"a":1},{"player":"Wisselbeker","h":3,"a":1}],"20":[{"player":"Wolsman","h":3,"a":0},{"player":"AlinevanVuuren","h":6,"a":2},{"player":"Bertjuh","h":3,"a":1},{"player":"Bo.","h":2,"a":0},{"player":"Bobcorn","h":2,"a":0},{"player":"BornBjorg","h":2,"a":0},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":3,"a":1},{"player":"Cornelis2026","h":3,"a":1},{"player":"Crazy Dutchman","h":3,"a":0},{"player":"Daisy010","h":2,"a":0},{"player":"El-Toro-Loco","h":3,"a":0},{"player":"Erol_Ulu","h":4,"a":0},{"player":"Fseton","h":2,"a":0},{"player":"GeorgeV.","h":2,"a":0},{"player":"Givano","h":3,"a":1},{"player":"GonnyDebode","h":3,"a":1},{"player":"Harro1","h":3,"a":1},{"player":"Heer","h":2,"a":0},{"player":"ikgajuichen","h":3,"a":0},{"player":"JanCandiano","h":3,"a":0},{"player":"JanvdL","h":2,"a":0},{"player":"John0504","h":4,"a":0},{"player":"JoycevanRiet","h":3,"a":0},{"player":"JRHJNB","h":2,"a":0},{"player":"Jules-","h":3,"a":0},{"player":"Katinkadeb","h":2,"a":0},{"player":"Keepertje","h":3,"a":1},{"player":"Kleine Flo","h":3,"a":0},{"player":"Koninkie","h":2,"a":0},{"player":"Marlayne","h":2,"a":1},{"player":"Martijnmeestervoorspeller","h":3,"a":0},{"player":"MaureenGLA","h":4,"a":0},{"player":"Mauricio1980","h":1,"a":0},{"player":"Mobicontrol-Xavier","h":3,"a":0},{"player":"Nelson1983","h":3,"a":0},{"player":"Norman.P","h":3,"a":0},{"player":"Oppie1978","h":3,"a":0},{"player":"Raymond de Haas","h":2,"a":0},{"player":"Reboss","h":3,"a":0},{"player":"Robertosxs","h":3,"a":0},{"player":"Rugnummer67","h":2,"a":1},{"player":"StanleyBoessen","h":0,"a":0},{"player":"StudentjeIndicium","h":3,"a":0},{"player":"THEGOAT37","h":2,"a":0},{"player":"Trauner_in_Oranje","h":3,"a":0},{"player":"UedaTopscorer","h":1,"a":0},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":2,"a":0},{"player":"Wisselbeker","h":3,"a":1}],"21":[{"player":"Wolsman","h":2,"a":1},{"player":"AlinevanVuuren","h":3,"a":2},{"player":"Bertjuh","h":3,"a":0},{"player":"Bo.","h":3,"a":1},{"player":"Bobcorn","h":2,"a":2},{"player":"BornBjorg","h":1,"a":1},{"player":"Brokkenpiloot","h":3,"a":1},{"player":"Christopheramboz","h":3,"a":1},{"player":"Cornelis2026","h":2,"a":0},{"player":"Crazy Dutchman","h":2,"a":1},{"player":"Daisy010","h":2,"a":1},{"player":"El-Toro-Loco","h":1,"a":1},{"player":"Erol_Ulu","h":2,"a":1},{"player":"Fseton","h":2,"a":1},{"player":"GeorgeV.","h":2,"a":1},{"player":"Givano","h":2,"a":1},{"player":"GonnyDebode","h":2,"a":2},{"player":"Harro1","h":2,"a":0},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":2,"a":0},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":1,"a":0},{"player":"John0504","h":3,"a":2},{"player":"JoycevanRiet","h":2,"a":1},{"player":"JRHJNB","h":2,"a":1},{"player":"Jules-","h":2,"a":1},{"player":"Katinkadeb","h":0,"a":1},{"player":"Keepertje","h":1,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":1,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":1},{"player":"MaureenGLA","h":2,"a":0},{"player":"Mauricio1980","h":2,"a":1},{"player":"Mobicontrol-Xavier","h":2,"a":1},{"player":"Nelson1983","h":3,"a":1},{"player":"Norman.P","h":2,"a":1},{"player":"Oppie1978","h":2,"a":2},{"player":"Raymond de Haas","h":2,"a":1},{"player":"Reboss","h":2,"a":1},{"player":"Robertosxs","h":2,"a":1},{"player":"Rugnummer67","h":2,"a":0},{"player":"StanleyBoessen","h":2,"a":2},{"player":"StudentjeIndicium","h":1,"a":1},{"player":"THEGOAT37","h":2,"a":1},{"player":"Trauner_in_Oranje","h":1,"a":1},{"player":"UedaTopscorer","h":2,"a":1},{"player":"WesleyMerwe","h":2,"a":1},{"player":"WillemCo","h":3,"a":2},{"player":"Wisselbeker","h":2,"a":2}],"22":[{"player":"Wolsman","h":1,"a":1},{"player":"AlinevanVuuren","h":1,"a":1},{"player":"Bertjuh","h":1,"a":1},{"player":"Bo.","h":1,"a":1},{"player":"Bobcorn","h":1,"a":0},{"player":"BornBjorg","h":2,"a":0},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":1,"a":1},{"player":"Cornelis2026","h":3,"a":0},{"player":"Crazy Dutchman","h":1,"a":0},{"player":"Daisy010","h":1,"a":1},{"player":"El-Toro-Loco","h":1,"a":0},{"player":"Erol_Ulu","h":2,"a":0},{"player":"Fseton","h":1,"a":0},{"player":"GeorgeV.","h":1,"a":1},{"player":"Givano","h":1,"a":0},{"player":"GonnyDebode","h":0,"a":0},{"player":"Harro1","h":2,"a":2},{"player":"Heer","h":1,"a":0},{"player":"ikgajuichen","h":1,"a":0},{"player":"JanCandiano","h":2,"a":0},{"player":"JanvdL","h":2,"a":1},{"player":"John0504","h":2,"a":2},{"player":"JoycevanRiet","h":2,"a":2},{"player":"JRHJNB","h":1,"a":1},{"player":"Jules-","h":2,"a":1},{"player":"Katinkadeb","h":1,"a":0},{"player":"Keepertje","h":0,"a":0},{"player":"Kleine Flo","h":2,"a":0},{"player":"Koninkie","h":3,"a":1},{"player":"Marlayne","h":2,"a":1},{"player":"Martijnmeestervoorspeller","h":1,"a":0},{"player":"MaureenGLA","h":1,"a":1},{"player":"Mauricio1980","h":1,"a":0},{"player":"Mobicontrol-Xavier","h":2,"a":1},{"player":"Nelson1983","h":3,"a":0},{"player":"Norman.P","h":1,"a":1},{"player":"Oppie1978","h":2,"a":0},{"player":"Raymond de Haas","h":1,"a":0},{"player":"Reboss","h":1,"a":1},{"player":"RoanTuit(messi)","h":3,"a":1},{"player":"Robertosxs","h":1,"a":1},{"player":"Rugnummer67","h":1,"a":1},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":2,"a":2},{"player":"THEGOAT37","h":0,"a":0},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":0,"a":1},{"player":"WesleyMerwe","h":2,"a":1},{"player":"WillemCo","h":1,"a":1},{"player":"Wisselbeker","h":2,"a":1}],"23":[{"player":"Wolsman","h":0,"a":2},{"player":"AlinevanVuuren","h":2,"a":2},{"player":"Bertjuh","h":0,"a":2},{"player":"Bo.","h":0,"a":2},{"player":"Bobcorn","h":0,"a":2},{"player":"BornBjorg","h":0,"a":1},{"player":"Brokkenpiloot","h":0,"a":1},{"player":"Christopheramboz","h":0,"a":3},{"player":"Cornelis2026","h":1,"a":3},{"player":"Crazy Dutchman","h":1,"a":3},{"player":"Daisy010","h":1,"a":3},{"player":"El-Toro-Loco","h":0,"a":1},{"player":"Erol_Ulu","h":1,"a":2},{"player":"Fseton","h":0,"a":1},{"player":"GeorgeV.","h":0,"a":1},{"player":"Givano","h":0,"a":3},{"player":"GonnyDebode","h":0,"a":3},{"player":"Harro1","h":1,"a":2},{"player":"Heer","h":0,"a":2},{"player":"ikgajuichen","h":0,"a":3},{"player":"JanCandiano","h":1,"a":2},{"player":"JanvdL","h":0,"a":3},{"player":"John0504","h":1,"a":2},{"player":"JoycevanRiet","h":1,"a":1},{"player":"JRHJNB","h":0,"a":2},{"player":"Jules-","h":0,"a":2},{"player":"Katinkadeb","h":0,"a":3},{"player":"Keepertje","h":1,"a":0},{"player":"Kleine Flo","h":0,"a":2},{"player":"Koninkie","h":1,"a":2},{"player":"Marlayne","h":0,"a":1},{"player":"Martijnmeestervoorspeller","h":1,"a":3},{"player":"MaureenGLA","h":1,"a":2},{"player":"Mauricio1980","h":0,"a":1},{"player":"Mobicontrol-Xavier","h":0,"a":2},{"player":"Nelson1983","h":0,"a":2},{"player":"Norman.P","h":0,"a":2},{"player":"Oppie1978","h":1,"a":2},{"player":"Raymond de Haas","h":1,"a":2},{"player":"Reboss","h":0,"a":2},{"player":"RoanTuit(messi)","h":0,"a":4},{"player":"Robertosxs","h":0,"a":2},{"player":"Rugnummer67","h":0,"a":2},{"player":"StanleyBoessen","h":0,"a":2},{"player":"StudentjeIndicium","h":1,"a":2},{"player":"THEGOAT37","h":0,"a":1},{"player":"Trauner_in_Oranje","h":0,"a":2},{"player":"UedaTopscorer","h":0,"a":1},{"player":"WesleyMerwe","h":1,"a":2},{"player":"WillemCo","h":2,"a":1},{"player":"Wisselbeker","h":1,"a":2}],"24":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":2,"a":1},{"player":"Bertjuh","h":2,"a":0},{"player":"Bo.","h":1,"a":1},{"player":"Bobcorn","h":1,"a":1},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":3,"a":1},{"player":"Cornelis2026","h":2,"a":2},{"player":"Crazy Dutchman","h":1,"a":1},{"player":"Daisy010","h":2,"a":1},{"player":"El-Toro-Loco","h":1,"a":0},{"player":"Erol_Ulu","h":1,"a":0},{"player":"Fseton","h":3,"a":0},{"player":"GeorgeV.","h":1,"a":1},{"player":"Givano","h":1,"a":1},{"player":"GonnyDebode","h":3,"a":0},{"player":"Harro1","h":2,"a":1},{"player":"Heer","h":0,"a":0},{"player":"ikgajuichen","h":1,"a":1},{"player":"JanCandiano","h":1,"a":0},{"player":"JanvdL","h":3,"a":1},{"player":"John0504","h":2,"a":1},{"player":"JoycevanRiet","h":2,"a":1},{"player":"JRHJNB","h":2,"a":1},{"player":"Jules-","h":2,"a":0},{"player":"Katinkadeb","h":1,"a":2},{"player":"Keepertje","h":2,"a":0},{"player":"Kleine Flo","h":2,"a":0},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":1,"a":2},{"player":"Martijnmeestervoorspeller","h":1,"a":0},{"player":"MaureenGLA","h":2,"a":0},{"player":"Mauricio1980","h":1,"a":0},{"player":"Mobicontrol-Xavier","h":2,"a":0},{"player":"Nelson1983","h":3,"a":1},{"player":"Norman.P","h":2,"a":0},{"player":"Oppie1978","h":1,"a":1},{"player":"Raymond de Haas","h":1,"a":1},{"player":"Reboss","h":1,"a":0},{"player":"Robertosxs","h":2,"a":2},{"player":"Rugnummer67","h":1,"a":1},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":2,"a":1},{"player":"THEGOAT37","h":2,"a":0},{"player":"Trauner_in_Oranje","h":2,"a":1},{"player":"UedaTopscorer","h":1,"a":0},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":2,"a":0},{"player":"Wisselbeker","h":3,"a":1},{"player":"Wkkipje","h":2,"a":2}],"25":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":2,"a":0},{"player":"Bertjuh","h":2,"a":1},{"player":"Bo.","h":2,"a":0},{"player":"Bobcorn","h":1,"a":1},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Christopheramboz","h":2,"a":0},{"player":"Cornelis2026","h":3,"a":1},{"player":"Crazy Dutchman","h":2,"a":1},{"player":"Daisy010","h":3,"a":1},{"player":"El-Toro-Loco","h":1,"a":1},{"player":"Erol_Ulu","h":2,"a":1},{"player":"Fseton","h":1,"a":0},{"player":"GeorgeV.","h":2,"a":1},{"player":"Givano","h":2,"a":1},{"player":"GonnyDebode","h":2,"a":2},{"player":"Harro1","h":2,"a":0},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":0,"a":1},{"player":"JanCandiano","h":2,"a":2},{"player":"JanvdL","h":0,"a":2},{"player":"John0504","h":2,"a":1},{"player":"JoycevanRiet","h":2,"a":0},{"player":"JRHJNB","h":1,"a":0},{"player":"Jules-","h":2,"a":0},{"player":"Katinkadeb","h":1,"a":1},{"player":"Keepertje","h":1,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":2,"a":2},{"player":"Marlayne","h":1,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":1},{"player":"MaureenGLA","h":2,"a":0},{"player":"Mauricio1980","h":0,"a":1},{"player":"Mobicontrol-Xavier","h":2,"a":0},{"player":"Nelson1983","h":1,"a":1},{"player":"Norman.P","h":2,"a":1},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":1,"a":1},{"player":"Reboss","h":2,"a":0},{"player":"RoanTuit(messi)","h":1,"a":1},{"player":"Robertosxs","h":1,"a":0},{"player":"Rugnummer67","h":1,"a":2},{"player":"StanleyBoessen","h":0,"a":1},{"player":"StudentjeIndicium","h":2,"a":1},{"player":"THEGOAT37","h":1,"a":1},{"player":"Trauner_in_Oranje","h":1,"a":0},{"player":"UedaTopscorer","h":2,"a":1},{"player":"WesleyMerwe","h":2,"a":1},{"player":"WillemCo","h":2,"a":0},{"player":"Wisselbeker","h":1,"a":1},{"player":"Wkkipje","h":1,"a":1}],"26":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":2,"a":0},{"player":"Bertjuh","h":1,"a":0},{"player":"Bo.","h":2,"a":1},{"player":"Bobcorn","h":1,"a":0},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":2,"a":1},{"player":"Cornelis2026","h":1,"a":1},{"player":"Crazy Dutchman","h":2,"a":0},{"player":"Daisy010","h":2,"a":1},{"player":"El-Toro-Loco","h":2,"a":1},{"player":"Erol_Ulu","h":3,"a":1},{"player":"Fseton","h":2,"a":0},{"player":"GeorgeV.","h":1,"a":1},{"player":"Givano","h":2,"a":0},{"player":"GonnyDebode","h":3,"a":0},{"player":"Harro1","h":1,"a":1},{"player":"Heer","h":1,"a":0},{"player":"ikgajuichen","h":2,"a":0},{"player":"JanCandiano","h":1,"a":0},{"player":"JanvdL","h":3,"a":0},{"player":"John0504","h":3,"a":1},{"player":"JoycevanRiet","h":1,"a":1},{"player":"JRHJNB","h":1,"a":0},{"player":"Jules-","h":2,"a":0},{"player":"Katinkadeb","h":2,"a":1},{"player":"Keepertje","h":3,"a":0},{"player":"Kleine Flo","h":2,"a":0},{"player":"Koninkie","h":2,"a":0},{"player":"Marlayne","h":2,"a":2},{"player":"Martijnmeestervoorspeller","h":2,"a":0},{"player":"MaureenGLA","h":3,"a":1},{"player":"Mauricio1980","h":1,"a":0},{"player":"Mobicontrol-Xavier","h":2,"a":0},{"player":"Nelson1983","h":2,"a":0},{"player":"Norman.P","h":2,"a":0},{"player":"Oppie1978","h":3,"a":0},{"player":"Raymond de Haas","h":1,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"RoanTuit(messi)","h":2,"a":1},{"player":"Robertosxs","h":2,"a":1},{"player":"Rugnummer67","h":2,"a":1},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":2,"a":0},{"player":"THEGOAT37","h":1,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":1,"a":0},{"player":"WesleyMerwe","h":1,"a":0},{"player":"WillemCo","h":2,"a":2},{"player":"Wisselbeker","h":1,"a":1},{"player":"Wkkipje","h":1,"a":1}],"27":[{"player":"Wolsman","h":1,"a":1},{"player":"AlinevanVuuren","h":1,"a":1},{"player":"Bertjuh","h":3,"a":1},{"player":"Bo.","h":2,"a":1},{"player":"Bobcorn","h":2,"a":1},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Christopheramboz","h":2,"a":1},{"player":"Cornelis2026","h":3,"a":1},{"player":"Crazy Dutchman","h":3,"a":2},{"player":"Daisy010","h":2,"a":1},{"player":"El-Toro-Loco","h":1,"a":0},{"player":"Erol_Ulu","h":2,"a":2},{"player":"Fseton","h":1,"a":2},{"player":"GeorgeV.","h":1,"a":1},{"player":"Givano","h":2,"a":1},{"player":"GonnyDebode","h":2,"a":2},{"player":"Harro1","h":1,"a":1},{"player":"Heer","h":2,"a":0},{"player":"ikgajuichen","h":1,"a":1},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":2,"a":1},{"player":"John0504","h":2,"a":1},{"player":"JoycevanRiet","h":3,"a":2},{"player":"JRHJNB","h":1,"a":1},{"player":"Jules-","h":1,"a":1},{"player":"Katinkadeb","h":1,"a":1},{"player":"Keepertje","h":1,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":1,"a":2},{"player":"Martijnmeestervoorspeller","h":3,"a":2},{"player":"MaureenGLA","h":3,"a":2},{"player":"Mauricio1980","h":1,"a":1},{"player":"Mobicontrol-Xavier","h":1,"a":2},{"player":"Nelson1983","h":3,"a":0},{"player":"Norman.P","h":2,"a":1},{"player":"Oppie1978","h":3,"a":2},{"player":"Raymond de Haas","h":1,"a":1},{"player":"Reboss","h":1,"a":1},{"player":"RoanTuit(messi)","h":2,"a":0},{"player":"Robertosxs","h":2,"a":1},{"player":"Rugnummer67","h":3,"a":2},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":0,"a":1},{"player":"THEGOAT37","h":2,"a":2},{"player":"Trauner_in_Oranje","h":2,"a":1},{"player":"UedaTopscorer","h":2,"a":1},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":1,"a":1},{"player":"Wisselbeker","h":2,"a":1},{"player":"Wkkipje","h":3,"a":0}]};
window.POOL_STANDINGS = {"A":[{"team":"Mexico","played":2,"w":2,"g":0,"v":0,"points":6,"saldo":3},{"team":"Zuid Korea","played":2,"w":1,"g":0,"v":1,"points":3,"saldo":0},{"team":"Tsjechië","played":2,"w":0,"g":1,"v":1,"points":1,"saldo":-1},{"team":"Zuid Afrika","played":2,"w":0,"g":1,"v":1,"points":1,"saldo":-2}],"B":[{"team":"Canada","played":2,"w":1,"g":1,"v":0,"points":4,"saldo":6},{"team":"Zwitserland","played":2,"w":1,"g":1,"v":0,"points":4,"saldo":3},{"team":"Bosnië","played":2,"w":0,"g":1,"v":1,"points":1,"saldo":-3},{"team":"Qatar","played":2,"w":0,"g":1,"v":1,"points":1,"saldo":-6}],"D":[{"team":"USA","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":3},{"team":"Australië","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":2},{"team":"Turkije","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2},{"team":"Paraguay","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-3}],"C":[{"team":"Schotland","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":1},{"team":"Marokko","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Brazilië","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Haiti","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-1}],"E":[{"team":"Duitsland","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":6},{"team":"Ivoorkust","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":1},{"team":"Ecuador","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-1},{"team":"Curacao","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-6}],"F":[{"team":"Zweden","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":4},{"team":"Japan","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Nederland","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Tunesië","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-4}],"H":[{"team":"Saoedi-Arabie","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Uruguay","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Spanje","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Kaapverdie","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0}],"G":[{"team":"Iran","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Nieuw Zeeland","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"België","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Egypte","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0}],"I":[{"team":"Noorwegen","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":3},{"team":"Frankrijk","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":2},{"team":"Senegal","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2},{"team":"Irak","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-3}],"J":[{"team":"Argentinië","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":3},{"team":"Oostenrijk","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":2},{"team":"Jordanie","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2},{"team":"Algerije","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-3}],"L":[{"team":"Engeland","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":2},{"team":"Ghana","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":1},{"team":"Panama","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-1},{"team":"Kroatië","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2}],"K":[{"team":"Colombia","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":2},{"team":"Congo","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Portugal","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Oezbekistan","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2}]};

// Puntenhistorie per speler (door de scraper bijgehouden, max 12 metingen) —
// voedt de mini-sparkline in de ranglijst. Groeit alleen als de punten wijzigen.
window.POOL_HISTORY = {"Wolsman":[910,1005,1280,1355,1355,1355,1430,1450,1525,1525,1600,1715],"Kleine Flo":[605,700,975,1050,1050,1050,1125,1220,1295,1295,1390,1560],"Bertjuh":[810,905,1200,1275,1275,1295,1370,1390,1465,1465,1560,1730],"Bobcorn":[710,805,995,1070,1070,1070,1090,1290,1365,1565,1585,1755],"UedaTopscorer":[530,625,795,870,870,890,965,965,1040,1060,1155,1325],"Oppie1978":[955,1155,1325,1420,1420,1420,1440,1535,1630,1830,1925,2095],"El-Toro-Loco":[650,650,650,650,650,650,650,850,925,945,965,1240],"StudentjeIndicium":[985,1185,1375,1470,1470,1470,1470,1470,1565,1585,1680,1775],"Mauricio1980":[725,800,950,1045,1045,1065,1140,1340,1415,1435,1455,1570],"AlinevanVuuren":[925,1020,1315,1390,1390,1390,1485,1505,1505,1525,1600,1715],"Wisselbeker":[1025,1225,1395,1595,1595,1615,1635,1710,1805,1825,1845,1920],"Roantuit":[0,0,0,0,0,0,0,0,0,0],"Robertosxs":[805,1005,1195,1270,1270,1270,1345,1365,1440,1540,1615,1765],"Reboss":[660,735,905,980,980,980,1055,1075,1150,1170,1245,1360],"Mobicontrol":[315,315,515,515,590,610,610,760,760,780,800,920],"Brokkenpiloot":[995,1090,1260,1335,1335,1335,1410,1430,1505,1705,1800,1970],"Katinkadeb":[685,885,1160,1255,1255,1255,1255,1455,1550,1570,1590,1685],"BornBjorg":[1200,1295,1465,1540,1540,1540,1540,1635,1710,1710,1710,1710],"Fseton":[755,850,1020,1095,1095,1095,1170,1370,1445,1445,1520,1635],"Raymond de Haas":[480,575,745,820,820,820,895,1095,1190,1390,1410,1525],"ScheidsTon":[0,0,0,0,0,0,0,0,0,0],"THEGOAT37":[1030,1125,1315,1390,1390,1390,1465,1485,1560,1560,1580,1580],"WesleyMerwe":[635,710,900,975,975,975,1050,1125,1220,1220,1315,1505],"Daisy010":[880,955,1125,1220,1220,1220,1295,1315,1515,1535,1630,1780],"Erol_Ulu":[1120,1320,1490,1565,1565,1565,1640,1735,1830,1850,1945,2020],"Givano":[850,1050,1220,1315,1315,1335,1410,1610,1705,1905,2000,2170],"VanderLans":[665,865,865,980,980,980,1000,1040,1040,1135,1430,1630],"Trauner_in_Oranje":[815,910,1080,1155,1155,1155,1155,1250,1325,1345,1420,1590],"Keepertje":[700,720,890,985,985,1005,1005,1025,1045,1045,1065,1180],"John0504":[535,630,800,895,895,895,990,990,1085,1105,1200,1350],"Rugnummer67":[815,910,1310,1385,1385,1405,1480,1500,1575,1775,1775,1925],"Norman.P":[1155,1250,1420,1495,1495,1495,1570,1590,1665,1665,1760,1930],"StanleyBoessen":[785,785,975,1050,1050,1150,1170,1190,1265,1465,1485,1505],"GonnyDebode":[840,915,1105,1180,1180,1200,1220,1240,1335,1335,1335,1430],"Marlayne":[785,860,1080,1080,1080,1100,1100,1175,1250,1270,1290,1310],"Jules-":[700,795,1070,1145,1145,1145,1220,1295,1370,1370,1445,1560],"Harro1":[810,905,1055,1075,1075,1095,1170,1170,1265,1285,1360,1380],"JRHJNB":[740,940,1110,1185,1185,1185,1260,1280,1355,1375,1450,1565],"JoycevanRiet":[660,860,1030,1105,1105,1105,1180,1180,1200,1220,1295,1370],"Heer":[995,1070,1240,1315,1315,1315,1315,1515,1590,1690,1710,1900],"Pepijndh":[0,0,0,0,0,0,0,0,0,0,0,0],"Cornelis2026":[665,760,835,835,835,855,930,1025,1225,1325,1420,1495],"Wkkipje":[1040,1240,1410,1410,1410,1410,1410,1410,1410,1510,1530,1625],"MaureenGLA":[915,990,1160,1235,1235,1235,1310,1330,1425,1425,1500,1650],"GeorgeV.":[1320,1395,1470,1545,1545,1545,1620,1640,1715,1915,2010,2030],"ikgajuichen":[945,945,1220,1295,1295,1295,1370,1570,1665,1865,1885,2000],"JanCandiano":[905,1000,1170,1265,1265,1265,1340,1435,1530,1550,1550,1720],"Bo.":[585,660,830,850,850,850,925,945,1020,1220,1295,1445],"Koninkie":[1085,1160,1330,1405,1405,1405,1405,1480,1575,1775,1775,1890],"Martijnmeestervoorspeller":[1140,1160,1255,1350,1350,1350,1425,1625,1825,1845,1940,2110],"Crazy Dutchman":[1140,1235,1425,1520,1520,1520,1595,1795,1995,2195,2290,2460],"RoanTuit(messi)":[780,875,1045,1140,1140,1140,1140,1215,1290,1290,1310,1480],"Christopheramboz":[1185,1280,1355,1430,1430,1450,1525,1545,1640,1660,1735,1885],"Frenk010fr":[0,0,0,0,0,0,0,0,0,0,0,0],"WillemCo":[840,935,1210,1305,1305,1305,1400,1420,1420,1420,1495,1515],"Nelson1983":[155,355,525,525,525,525,600,695,770,790,810,1000],"Mobicontrol-Xavier":[920,995,1270,1345,1345,1345,1420,1495,1570,1570,1645,1760],"JanvdL":[1630,1630,1705,1780,1875,1895,1895,2065]};

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
window.POOL_HENK = {"generatedAt":"2026-06-19","playerTakes":{"Crazy Dutchman":"De verovering van de eerste plek is indrukwekkend, maar stilstand bij een gok als Iran-Nieuw-Zeeland: 1-0 in plaats van 2-2, slaat de plank behoorlijk mis.","GeorgeV.":"Drie gelijke standen als streak en nog geen schim van de koploper, dat voelt net zo sappig als een Argentinië-Algerije in jouw voorspellingen.","Givano":"Givano speelt het safe met stilstand, maar zonder een grote blunder zijn jouw voorspellingen saaier dan een oersaaie nul-nul-twist.","Erol_Ulu":"Met 825 trendpunten toch op dezelfde plek blijven hangen, dat lijkt meer op een verkeerde broekzak dan een echte wedstrijdanalyse.","Martijnmeestervoorspeller":"Voor iemand die zichzelf 'meestervoorspeller' noemt, is die Argentinië-Algerije voorspelling net zo meesterlijk als een dronken dartswedstrijd.","Oppie1978":"Blijven steken op zes met 1925 punten... Blijkbaar is 'Oppie' wel heel goed in tegen de verkeerde landen gokken.","JanvdL":"Zwitserland-Bosnië volledig fout en dan vragen waarom het niet opschiet, net alsof je je fiets op het verkeerde slot zet.","ikgajuichen":"Met een stunt als Tsjechië-Zuid-Afrika, gokt deze persoon meer op het juiste momentum dan op consistent talent.","Wisselbeker":"Met zijn naam verwacht je wisseling van de wacht, maar net als zijn zwakke gok op Zwitserland-Bosnië blijft Wisselbeker verbijsterend standvastig.","Brokkenpiloot":"160 punten achterstand en toch nog 'Brokkenpiloot', dat klinkt als een feest in de cockpit terwijl de motor al brandt.","Rugnummer67":"Die exacte Tsjechië-Zuid-Afrika voorspelling voelt als een schaarse lucky goal vergeleken met de chaos van de rest van je voorspellingen.","Koninkie":"Staat deze 'King' op dezelfde plek, of is hij de koning van de blunders, zoals Zwitserland-Bosnië bewijst?","Norman.P":"Met een trend als die van Norman lijkt het eerder een gletsjer dan een race naar de top.","Christopheramboz":"Ambities van een kampioen, maar dat 2-2 gokje maakt van Argentinië-Algerije een weerbarstig spookverhaal.","BornBjorg":"Met een schamele 510 trendpunten en het gokken van een 1-1 bij Engeland-Kroatië, speel je meer defensief spel dan Engeland zelf.","Heer":"Heer en meester over niets, tenzij je het over halfbakken voorspellingen hebt zoals bij Zwitserland-Bosnië.","StudentjeIndicium":"Nooit het huiswerk gedaan als het op Engeland-Kroatië aankomt, en dat zie je in de ranglijst terug.","Mobicontrol-Xavier":"Beton achterin, maar weinig inspiratie voorin; beweeg nooit uit je plek!","Daisy010":"Met een 0-2 voorspelling voor Iran-Nieuw-Zeeland lijkt het meer op een dagdroom dan realiteit.","Robertosxs":"Met een 2-0 voorspelling en een gelijkspel behaald, zou je denken dat hij kaarten ruilt zonder te kijken.","Wolsman":"Een 2-0 missen bij Iran-Nieuw-Zeeland, dat is alsof je de verkeerde trein pakt en eindigt op een verlaten station.","AlinevanVuuren":"Met je 2-2 gok op Oezbekistan-Colombia is het alsof je een regenjas meeneemt naar de Sahara.","Katinkadeb":"Fast forward met 905 trendpunten maar alsnog niet weten hoe Engeland-Kroatië zal eindigen.","Bobcorn":"De rest van de groep steekt de popcorn aan terwijl Bob zich vastklampt aan die enkele Tsjechië-Zuid-Afrika uitslag.","THEGOAT37":"The Goat of goochelaar, als je denkt dat die 1-1 bij Zwitserland-Bosnië ooit werkelijkheid zou worden.","Bertjuh":"Klaar om te roepen 'ik was erbij', zelfs als je voorspellingen net zo gegrond zijn als een luchtballon.","JanCandiano":"Kan net zo goed een kansspel worden genoemd gezien de 2-2 blunder bij Zwitserland-Bosnië.","Wkkipje":"Een stunt zoals Tsjechië-Zuid-Afrika is als een zeldzaam ei, maar het maakt van Wkkipje nog geen vlieger.","Fseton":"Als Iran-Nieuw-Zeeland een quizvraag was, dan had Fseton zeker een kruisje verkeerd gezet.","MaureenGLA":"Gelukkig kan deze speler rekenen op een streak van zes, maar wel zonder veel meer dan dat.","WillemCo":"Een 2-1 gok bij Oezbekistan-Colombia is niet evenveel waard als een schot in het donker.","StanleyBoessen":"Hoewel je Tsjechië-Zuid-Afrika goed hebt, voel je je met een eindscore van 1485 toch de hofnar in plaats van de koning.","Mauricio1980":"Een 0-1 gok bij Zwitserland-Bosnië getuigt van hetzelfde type optimisme als een klapband tijdens de marathon.","JRHJNB":"Verwissel de 'H' maar voor een 'F', want de 1-0 misser is een simpele blunder.","Jules-":"De gok op 2-0 bij Iran-Nieuw-Zeeland geeft net zo veel vertrouwen als een boot zonder roeispanen.","Trauner_in_Oranje":"Met 0-2 bij Iran-Nieuw-Zeeland en 1420 punten bereik je amper de bank van Oranje.","Cornelis2026":"Zelfs met een 2-2 gok bij Irak-Noorwegen kan de toekomst je niet snel genoeg tegemoet komen.","Raymond de Haas":"Raymonds Zwitserland-Bosnië is als een slechte grap die enkel hij zelf begrijpt.","Kleine Flo":"Het 2-0 avontuur bij Iran-Nieuw-Zeeland laat zien dat 'Kleine' groot gokt, maar zwak slaat.","Harro1":"Met 550 trendpunten en een slechte Oostenrijk-Jordanië voorspelling lijkt Harro meer gefocust op vakanties dan op voetbal.","GonnyDebode":"Staat vast op zijn positie, vooral als het aankomt op de misser van 2-2 bij Zwitserland-Bosnië.","WesleyMerwe":"Zet zijn geld verkeerd in op 2-0, maar blijft hopen op wonderen die nooit komen.","RoanTuit(messi)":"Met een 1-1 voorspelling voor Zwitserland-Bosnië, is het als Messi die zijn komst niet aankondigt.","JoycevanRiet":"Gokken op een 2-0 winst is minder onderscheidend als je de rest van de tijd afwezig bent.","Bo.":"Met die 0-3 misser bij Iran-Nieuw-Zeeland zal Bo nooit de show stelen.","Marlayne":"Hoewel de gok van 1-1 bij Irak-Noorwegen niet werkt, blijft Marlayne toch op hetzelfde spoor.","Reboss":"Spelen op veilig met 1-0 bij Iran-Nieuw-Zeeland is als hopen op regen in de woestijn.","John0504":"Met zijn 1-2 gok bij Iran-Nieuw-Zeeland is John0504 meer voorbij de goal dan in het spel.","UedaTopscorer":"Blijf maar dromen van de top, want dat 0-1 scenario bij Iran-Nieuw-Zeeland brengt je nergens.","Keepertje":"Minder keeper dan verdwaalde toeschouwer na je 1-0 misser bij Oezbekistan-Colombia.","El-Toro-Loco":"Een loco gok met 1-1 bij Zwitserland-Bosnië, net als een stierengevecht zonder stier.","Nelson1983":"Met de naam van een leider, maar het tactische inzicht van een toeschouwer met die 1-1 misser."},"monoloog":"Het is hier net de zondvloed, maar dan met stilstaande bootjes. Crazy Dutchman, de naam zegt het al, lijkt wel een kapitein op een doodstille oceaan, hoewel hij nog wel zoetjes aan bovenaan meedraait. Ondertussen zien we Marlayne op plek 46 met een puntentotaal dat je eerder in een potje ganzenbord zou verwachten. En dan heb je Nelson1983, die met verve de rode lantaarn vasthoudt met een puntentotaal waarbij je hoopt dat hij in de poule van de onderburen staat!","hotTakes":["Bertjuh, met één exacte uitslag, lijkt eerder op een blinde darter dan een voetbalspecialist. Je zou bijna denken dat hij die uitslag op de achterkant van een bierviltje had staan!","Katinkadeb, de enige die drie keer exact wist te mikken, maar dan wel Engeland-Kroatië totaal verkeerd gokte. Gelukkig voor haar is er geen VAR in de poulewedstrijden.","Norman.P lijkt op een Formule 1-auto met lege tank: veel snelheid in het begin, maar uiteindelijk toch stilvallen. Iran-Nieuw-Zeeland 1-0? Dat is alsof je de zonsondergang voorspelt op basis van een regenachtige ochtend.","WesleyMerwe, je streak van vier goede voorspellingen was inspirerend, maar daarna ging je onderuit als een ijsdansende eend. Iran-Nieuw-Zeeland is duidelijk je Achillespees!","Christopheramboz, je gokte Argentinië-Algerije als een 2-2 thriller? Je moet je tv wel op de verkeerde zender hebben gehad, want die match was net een tango: eenrichtingsverkeer."],"dailyTarget":{"name":"Marlayne","lines":["Marlayne, jij bent als een tank in de modder: op plek 46 en geen beweging te bekennen!","Met slechts één exact juiste uitslag vraag ik me af of je überhaupt weet dat de bal rond is.","En serieus, een 1-1 voor Irak-Noorwegen terwijl het 1-4 werd? Je glazen bol is vast kapot!"]},"matchTakes":{"13":"België en Egypte maken er een potje van, maar BornBjorg en zijn bende hebben het als een TOTO-orgel weer feilloos bezongen.","14":"Crazy Dutchman en co zien het gelijkspel van Saoedi-Arabië en Uruguay aankomen als een regenbui in de woestijn.","15":"Bo., zat je met je hoofd in een sprookje? 0-3 voor Nieuw-Zeeland is net zo realistisch als een hobbit op de middenstip.","16":"Bijna iedereen kon Frankrijk wel voorspellen, maar ikgajuichen gokte alsof hij met een Senegalese bril keek.","17":"Cornelis2026, je dacht zeker dat 2-2 iets met Noah's Ark te maken had — maar Irak liep tegen een Noorse vloedgolf aan.","18":"Christopheramboz verdient een rode kaart voor zijn 2-2 voorspelling bij Argentinië tegen Algerije. Eénrichtingsverkeer, maatje!","19":"Marlayne, dacht je aan een sprookje met jouw 1-2 voor Jordanië? Oostenrijk hield de deuren potdicht.","20":"Portugal en Congo hebben iedereen voor de gek gehouden—echt niemand zag die 1-1 aankomen, bravo!","21":"Katinkadeb, je insteek van 0-1 voor Kroatië was net zo ongelukkig als de Brexit: compleet mis.","22":"Bobcorn en de rest hadden een helder moment met Ghana's winst op Panama; eindelijk wat pit in die voorspellingen.","23":"Keepertje gokte op thuisvoordeel voor Oezbekistan, maar kreeg een stevige Colombiaanse realitycheck.","24":"Tsjechië en Zuid-Afrika deden de polonaise, terwijl Bobcorn en zijn vriendjes feilloos het gelijkspel voorspelden.","25":"JanvdL, je voorspelling van 0-2 voor Bosnië is net zo vergezocht als een Zwitserse kustlijn."},"targetHistory":["Keepertje","Norman.P","Erol_Ulu","UedaTopscorer","StanleyBoessen","Marlayne"]};

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
