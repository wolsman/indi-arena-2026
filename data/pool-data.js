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
  syncedAt: "2026-06-18T04:01:24.765Z",
  firstMatchAt: "2026-06-11T21:00:00+02:00",
  predictionsPublic: false,
  // Wordt true zodra de scraper echte punten ziet — de ranglijst
  // schakelt dan automatisch om van invulstatus naar punten.
  pointsAvailable: true
};

// points/prevPos worden door de scraper gevuld zodra het toernooi loopt.
window.POOL_PLAYERS = [
  { name: "Wolsman", matches: 104, winner: true, topscorer: true, paid: true, points: 1450, prevPos: 14 },
  { name: "Kleine Flo", matches: 72, winner: true, topscorer: true, paid: true, points: 1220, prevPos: 40 },
  { name: "Bertjuh", matches: 72, winner: true, topscorer: true, paid: true, points: 1390, prevPos: 22 },
  { name: "Bobcorn", matches: 72, winner: true, topscorer: true, paid: true, points: 1290, prevPos: 42 },
  { name: "UedaTopscorer", matches: 72, winner: true, topscorer: true, paid: true, points: 965, prevPos: 47 },
  { name: "Oppie1978", matches: 37, winner: true, topscorer: true, paid: true, points: 1535, prevPos: 13 },
  { name: "El-Toro-Loco", matches: 21, winner: false, topscorer: false, paid: true, points: 850, prevPos: 51 },
  { name: "StudentjeIndicium", matches: 72, winner: true, topscorer: true, paid: true, points: 1470, prevPos: 11 },
  { name: "Mauricio1980", matches: 72, winner: true, topscorer: true, paid: true, points: 1340, prevPos: 38 },
  { name: "AlinevanVuuren", matches: 72, winner: true, topscorer: true, paid: true, points: 1505, prevPos: 9 },
  { name: "Wisselbeker", matches: 32, winner: true, topscorer: true, paid: true, points: 1710, prevPos: 3 },
  { name: "Robertosxs", matches: 104, winner: true, topscorer: true, paid: true, points: 1365, prevPos: 24 },
  { name: "Reboss", matches: 72, winner: true, topscorer: true, paid: true, points: 1075, prevPos: 43 },
  { name: "Mobicontrol-Xavier", matches: 53, winner: true, topscorer: true, paid: true, points: 1495, prevPos: 16 },
  { name: "Brokkenpiloot", matches: 53, winner: true, topscorer: true, paid: true, points: 1430, prevPos: 17 },
  { name: "Katinkadeb", matches: 72, winner: true, topscorer: true, paid: true, points: 1455, prevPos: 30 },
  { name: "BornBjorg", matches: 24, winner: true, topscorer: true, paid: true, points: 1635, prevPos: 7 },
  { name: "Fseton", matches: 45, winner: true, topscorer: true, paid: true, points: 1370, prevPos: 34 },
  { name: "Raymond de Haas", matches: 29, winner: true, topscorer: true, paid: true, points: 1095, prevPos: 50 },
  { name: "THEGOAT37", matches: 45, winner: true, topscorer: true, paid: true, points: 1485, prevPos: 12 },
  { name: "WesleyMerwe", matches: 27, winner: true, topscorer: true, paid: true, points: 1125, prevPos: 44 },
  { name: "Daisy010", matches: 30, winner: true, topscorer: true, paid: true, points: 1315, prevPos: 28 },
  { name: "Erol_Ulu", matches: 72, winner: true, topscorer: true, paid: true, points: 1735, prevPos: 2 },
  { name: "Givano", matches: 72, winner: true, topscorer: true, paid: true, points: 1610, prevPos: 17 },
  { name: "JanvdL", matches: 24, winner: true, topscorer: true, paid: true, points: 1780, prevPos: 1 },
  { name: "Trauner_in_Oranje", matches: 24, winner: true, topscorer: true, paid: true, points: 1250, prevPos: 37 },
  { name: "Keepertje", matches: 72, winner: true, topscorer: true, paid: true, points: 1025, prevPos: 45 },
  { name: "John0504", matches: 72, winner: true, topscorer: true, paid: true, points: 990, prevPos: 46 },
  { name: "Rugnummer67", matches: 25, winner: true, topscorer: true, paid: true, points: 1500, prevPos: 10 },
  { name: "Norman.P", matches: 26, winner: true, topscorer: true, paid: true, points: 1590, prevPos: 6 },
  { name: "StanleyBoessen", matches: 72, winner: false, topscorer: false, paid: true, points: 1190, prevPos: 34 },
  { name: "GonnyDebode", matches: 72, winner: true, topscorer: true, paid: true, points: 1240, prevPos: 31 },
  { name: "Marlayne", matches: 37, winner: true, topscorer: true, paid: true, points: 1175, prevPos: 41 },
  { name: "Jules-", matches: 72, winner: true, topscorer: true, paid: true, points: 1295, prevPos: 31 },
  { name: "Harro1", matches: 72, winner: true, topscorer: true, paid: true, points: 1170, prevPos: 34 },
  { name: "JRHJNB", matches: 72, winner: true, topscorer: true, paid: true, points: 1280, prevPos: 29 },
  { name: "JoycevanRiet", matches: 72, winner: true, topscorer: true, paid: true, points: 1180, prevPos: 33 },
  { name: "Heer", matches: 72, winner: true, topscorer: true, paid: true, points: 1515, prevPos: 26 },
  { name: "Cornelis2026", matches: 42, winner: true, topscorer: true, paid: true, points: 1025, prevPos: 48 },
  { name: "Wkkipje", matches: 19, winner: true, topscorer: true, paid: true, points: 1410, prevPos: 17 },
  { name: "MaureenGLA", matches: 72, winner: true, topscorer: true, paid: true, points: 1330, prevPos: 27 },
  { name: "GeorgeV.", matches: 72, winner: true, topscorer: true, paid: true, points: 1640, prevPos: 4 },
  { name: "ikgajuichen", matches: 104, winner: true, topscorer: true, paid: true, points: 1570, prevPos: 22 },
  { name: "JanCandiano", matches: 72, winner: true, topscorer: true, paid: true, points: 1435, prevPos: 25 },
  { name: "Bo.", matches: 72, winner: true, topscorer: true, paid: true, points: 945, prevPos: 49 },
  { name: "Koninkie", matches: 72, winner: true, topscorer: true, paid: true, points: 1480, prevPos: 20 },
  { name: "Martijnmeestervoorspeller", matches: 72, winner: true, topscorer: true, paid: true, points: 1625, prevPos: 15 },
  { name: "Crazy Dutchman", matches: 72, winner: true, topscorer: true, paid: true, points: 1795, prevPos: 5 },
  { name: "RoanTuit(messi)", matches: 20, winner: true, topscorer: true, paid: true, points: 1215, prevPos: 38 },
  { name: "Christopheramboz", matches: 34, winner: true, topscorer: true, paid: true, points: 1545, prevPos: 8 },
  { name: "WillemCo", matches: 30, winner: false, topscorer: false, paid: true, points: 1420, prevPos: 21 },
  { name: "Nelson1983", matches: 23, winner: false, topscorer: false, paid: true, points: 695, prevPos: 52 }
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
window.POOL_RESULTS = {"mexico|zuidafrika":"2-0","zuidkorea|tsjechie":"2-1","canada|bosnie":"1-1","usa|paraguay":"4-1","qatar|zwitserland":"1-1","brazilie|marokko":"1-1","haiti|schotland":"0-1","australie|turkije":"2-0","duitsland|curacao":"7-1","nederland|japan":"2-2","ivoorkust|ecuador":"1-0","zweden|tunesie":"5-1","spanje|kaapverdie":"0-0","belgie|egypte":"1-1","saoediarabie|uruguay":"1-1","iran|nieuwzeeland":"2-2","frankrijk|senegal":"3-1","irak|noorwegen":"1-4","argentinie|algerije":"3-0","oostenrijk|jordanie":"3-1","portugal|congo":"1-1","engeland|kroatie":"4-2","ghana|panama":"1-0"};
// Voorspellingen per gestarte wedstrijd (scraper). Sleutel = kalender-index
// (POOL_CALENDAR[i]); waarde = [{player, h, a}].
window.POOL_PREDICTIONS = {"10":[{"player":"Wolsman","h":1,"a":1},{"player":"AlinevanVuuren","h":1,"a":0},{"player":"Bertjuh","h":1,"a":2},{"player":"Bo.","h":1,"a":1},{"player":"Bobcorn","h":1,"a":1},{"player":"BornBjorg","h":1,"a":1},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":2,"a":2},{"player":"Cornelis2026","h":1,"a":3},{"player":"Crazy Dutchman","h":1,"a":1},{"player":"Daisy010","h":1,"a":0},{"player":"El-Toro-Loco","h":1,"a":1},{"player":"Erol_Ulu","h":1,"a":1},{"player":"Fseton","h":2,"a":1},{"player":"GeorgeV.","h":1,"a":0},{"player":"Givano","h":2,"a":1},{"player":"GonnyDebode","h":0,"a":2},{"player":"Harro1","h":1,"a":1},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":1,"a":2},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":2,"a":0},{"player":"John0504","h":1,"a":2},{"player":"JoycevanRiet","h":2,"a":2},{"player":"JRHJNB","h":0,"a":1},{"player":"Jules-","h":1,"a":1},{"player":"Katinkadeb","h":0,"a":1},{"player":"Keepertje","h":1,"a":1},{"player":"Kleine Flo","h":1,"a":1},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":2,"a":1},{"player":"Martijnmeestervoorspeller","h":1,"a":1},{"player":"MaureenGLA","h":0,"a":3},{"player":"Mauricio1980","h":0,"a":1},{"player":"Mobicontrol-Xavier","h":2,"a":1},{"player":"Nelson1983","h":1,"a":1},{"player":"Norman.P","h":1,"a":1},{"player":"Oppie1978","h":1,"a":1},{"player":"Raymond de Haas","h":1,"a":1},{"player":"Reboss","h":1,"a":1},{"player":"RoanTuit(messi)","h":1,"a":3},{"player":"Robertosxs","h":1,"a":1},{"player":"Rugnummer67","h":0,"a":1},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":1,"a":1},{"player":"THEGOAT37","h":1,"a":1},{"player":"Trauner_in_Oranje","h":1,"a":1},{"player":"UedaTopscorer","h":1,"a":2},{"player":"WesleyMerwe","h":1,"a":1},{"player":"WillemCo","h":1,"a":0},{"player":"Wisselbeker","h":2,"a":2},{"player":"Wkkipje","h":2,"a":2}],"11":[{"player":"Wolsman","h":1,"a":1},{"player":"AlinevanVuuren","h":3,"a":1},{"player":"Bertjuh","h":1,"a":2},{"player":"Bo.","h":1,"a":2},{"player":"Bobcorn","h":1,"a":0},{"player":"BornBjorg","h":2,"a":0},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Christopheramboz","h":1,"a":1},{"player":"Cornelis2026","h":2,"a":2},{"player":"Crazy Dutchman","h":3,"a":0},{"player":"Daisy010","h":3,"a":0},{"player":"Erol_Ulu","h":1,"a":0},{"player":"Fseton","h":1,"a":0},{"player":"GeorgeV.","h":2,"a":0},{"player":"Givano","h":2,"a":1},{"player":"GonnyDebode","h":3,"a":0},{"player":"Harro1","h":1,"a":1},{"player":"Heer","h":0,"a":0},{"player":"ikgajuichen","h":3,"a":0},{"player":"JanCandiano","h":1,"a":0},{"player":"JanvdL","h":1,"a":1},{"player":"John0504","h":2,"a":1},{"player":"JoycevanRiet","h":3,"a":0},{"player":"JRHJNB","h":1,"a":0},{"player":"Jules-","h":2,"a":0},{"player":"Katinkadeb","h":2,"a":1},{"player":"Keepertje","h":2,"a":1},{"player":"Kleine Flo","h":2,"a":0},{"player":"Koninkie","h":1,"a":0},{"player":"Marlayne","h":2,"a":2},{"player":"Martijnmeestervoorspeller","h":3,"a":0},{"player":"MaureenGLA","h":3,"a":1},{"player":"Mauricio1980","h":0,"a":1},{"player":"Mobicontrol-Xavier","h":1,"a":0},{"player":"Nelson1983","h":0,"a":1},{"player":"Norman.P","h":2,"a":0},{"player":"Oppie1978","h":2,"a":0},{"player":"Raymond de Haas","h":1,"a":1},{"player":"Reboss","h":1,"a":0},{"player":"RoanTuit(messi)","h":2,"a":0},{"player":"Robertosxs","h":1,"a":0},{"player":"Rugnummer67","h":2,"a":1},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":1,"a":0},{"player":"THEGOAT37","h":1,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":1},{"player":"UedaTopscorer","h":1,"a":0},{"player":"WesleyMerwe","h":2,"a":1},{"player":"WillemCo","h":2,"a":0},{"player":"Wisselbeker","h":3,"a":1},{"player":"Wkkipje","h":3,"a":1}],"12":[{"player":"Wolsman","h":3,"a":0},{"player":"AlinevanVuuren","h":9,"a":1},{"player":"Bertjuh","h":3,"a":0},{"player":"Bo.","h":3,"a":0},{"player":"Bobcorn","h":3,"a":1},{"player":"BornBjorg","h":4,"a":0},{"player":"Brokkenpiloot","h":6,"a":0},{"player":"Christopheramboz","h":4,"a":0},{"player":"Cornelis2026","h":5,"a":0},{"player":"Crazy Dutchman","h":4,"a":0},{"player":"Daisy010","h":3,"a":1},{"player":"Erol_Ulu","h":3,"a":0},{"player":"Fseton","h":5,"a":0},{"player":"GeorgeV.","h":3,"a":0},{"player":"Givano","h":4,"a":0},{"player":"GonnyDebode","h":4,"a":0},{"player":"Harro1","h":3,"a":0},{"player":"Heer","h":4,"a":0},{"player":"ikgajuichen","h":6,"a":0},{"player":"JanCandiano","h":3,"a":0},{"player":"JanvdL","h":5,"a":1},{"player":"John0504","h":6,"a":0},{"player":"JoycevanRiet","h":4,"a":0},{"player":"JRHJNB","h":3,"a":0},{"player":"Jules-","h":3,"a":0},{"player":"Katinkadeb","h":3,"a":1},{"player":"Keepertje","h":2,"a":0},{"player":"Kleine Flo","h":4,"a":0},{"player":"Koninkie","h":3,"a":0},{"player":"Marlayne","h":3,"a":1},{"player":"Martijnmeestervoorspeller","h":4,"a":0},{"player":"MaureenGLA","h":3,"a":0},{"player":"Mauricio1980","h":3,"a":0},{"player":"Mobicontrol-Xavier","h":4,"a":0},{"player":"Nelson1983","h":3,"a":0},{"player":"Norman.P","h":4,"a":1},{"player":"Oppie1978","h":5,"a":0},{"player":"Raymond de Haas","h":3,"a":0},{"player":"Reboss","h":4,"a":0},{"player":"RoanTuit(messi)","h":3,"a":0},{"player":"Robertosxs","h":3,"a":0},{"player":"Rugnummer67","h":2,"a":0},{"player":"StanleyBoessen","h":3,"a":0},{"player":"StudentjeIndicium","h":5,"a":0},{"player":"THEGOAT37","h":3,"a":0},{"player":"Trauner_in_Oranje","h":5,"a":0},{"player":"UedaTopscorer","h":3,"a":0},{"player":"WesleyMerwe","h":3,"a":0},{"player":"WillemCo","h":3,"a":1},{"player":"Wisselbeker","h":3,"a":0},{"player":"Wkkipje","h":4,"a":1}],"13":[{"player":"Wolsman","h":2,"a":1},{"player":"AlinevanVuuren","h":3,"a":1},{"player":"Bertjuh","h":2,"a":0},{"player":"Bo.","h":2,"a":1},{"player":"Bobcorn","h":2,"a":1},{"player":"BornBjorg","h":1,"a":1},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":2,"a":2},{"player":"Cornelis2026","h":1,"a":3},{"player":"Crazy Dutchman","h":3,"a":0},{"player":"Daisy010","h":1,"a":0},{"player":"Erol_Ulu","h":1,"a":0},{"player":"Fseton","h":2,"a":1},{"player":"GeorgeV.","h":1,"a":1},{"player":"Givano","h":3,"a":1},{"player":"GonnyDebode","h":2,"a":2},{"player":"Harro1","h":3,"a":1},{"player":"Heer","h":2,"a":0},{"player":"ikgajuichen","h":2,"a":0},{"player":"JanCandiano","h":1,"a":1},{"player":"JanvdL","h":1,"a":0},{"player":"John0504","h":3,"a":2},{"player":"JoycevanRiet","h":3,"a":1},{"player":"JRHJNB","h":2,"a":1},{"player":"Jules-","h":2,"a":1},{"player":"Katinkadeb","h":1,"a":0},{"player":"Keepertje","h":1,"a":1},{"player":"Kleine Flo","h":2,"a":0},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":2,"a":2},{"player":"Martijnmeestervoorspeller","h":2,"a":0},{"player":"MaureenGLA","h":3,"a":0},{"player":"Mauricio1980","h":0,"a":1},{"player":"Mobicontrol-Xavier","h":2,"a":1},{"player":"Nelson1983","h":2,"a":0},{"player":"Norman.P","h":2,"a":0},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":2,"a":0},{"player":"Reboss","h":2,"a":1},{"player":"RoanTuit(messi)","h":1,"a":2},{"player":"Robertosxs","h":2,"a":0},{"player":"Rugnummer67","h":1,"a":2},{"player":"StanleyBoessen","h":1,"a":2},{"player":"StudentjeIndicium","h":3,"a":1},{"player":"THEGOAT37","h":1,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":1},{"player":"UedaTopscorer","h":2,"a":0},{"player":"WesleyMerwe","h":2,"a":1},{"player":"WillemCo","h":2,"a":0},{"player":"Wisselbeker","h":3,"a":0},{"player":"Wkkipje","h":1,"a":1}],"14":[{"player":"Wolsman","h":0,"a":2},{"player":"AlinevanVuuren","h":0,"a":2},{"player":"Bertjuh","h":1,"a":0},{"player":"Bo.","h":0,"a":2},{"player":"Bobcorn","h":0,"a":1},{"player":"BornBjorg","h":0,"a":2},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":1,"a":2},{"player":"Cornelis2026","h":3,"a":3},{"player":"Crazy Dutchman","h":1,"a":1},{"player":"Daisy010","h":1,"a":1},{"player":"Erol_Ulu","h":0,"a":2},{"player":"Fseton","h":0,"a":1},{"player":"GeorgeV.","h":0,"a":1},{"player":"Givano","h":0,"a":3},{"player":"GonnyDebode","h":1,"a":2},{"player":"Harro1","h":1,"a":2},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":0,"a":1},{"player":"JanCandiano","h":2,"a":3},{"player":"JanvdL","h":1,"a":2},{"player":"John0504","h":1,"a":4},{"player":"JoycevanRiet","h":1,"a":1},{"player":"JRHJNB","h":0,"a":2},{"player":"Jules-","h":0,"a":2},{"player":"Katinkadeb","h":0,"a":2},{"player":"Keepertje","h":0,"a":2},{"player":"Kleine Flo","h":0,"a":2},{"player":"Koninkie","h":0,"a":2},{"player":"Marlayne","h":0,"a":1},{"player":"Martijnmeestervoorspeller","h":1,"a":1},{"player":"MaureenGLA","h":2,"a":2},{"player":"Mauricio1980","h":0,"a":1},{"player":"Mobicontrol-Xavier","h":0,"a":1},{"player":"Nelson1983","h":0,"a":2},{"player":"Norman.P","h":0,"a":1},{"player":"Oppie1978","h":1,"a":2},{"player":"Raymond de Haas","h":0,"a":2},{"player":"Reboss","h":0,"a":2},{"player":"RoanTuit(messi)","h":1,"a":2},{"player":"Robertosxs","h":1,"a":2},{"player":"Rugnummer67","h":1,"a":1},{"player":"StanleyBoessen","h":1,"a":2},{"player":"StudentjeIndicium","h":1,"a":2},{"player":"THEGOAT37","h":0,"a":1},{"player":"Trauner_in_Oranje","h":1,"a":3},{"player":"UedaTopscorer","h":1,"a":3},{"player":"WesleyMerwe","h":0,"a":2},{"player":"WillemCo","h":0,"a":2},{"player":"Wisselbeker","h":1,"a":2},{"player":"Wkkipje","h":2,"a":2}],"15":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":1,"a":1},{"player":"Bertjuh","h":0,"a":0},{"player":"Bo.","h":0,"a":3},{"player":"Bobcorn","h":1,"a":1},{"player":"BornBjorg","h":1,"a":0},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":2,"a":1},{"player":"Cornelis2026","h":2,"a":1},{"player":"Crazy Dutchman","h":1,"a":0},{"player":"Daisy010","h":0,"a":2},{"player":"Erol_Ulu","h":1,"a":1},{"player":"Fseton","h":1,"a":0},{"player":"GeorgeV.","h":0,"a":1},{"player":"Givano","h":2,"a":2},{"player":"GonnyDebode","h":0,"a":0},{"player":"Harro1","h":0,"a":0},{"player":"Heer","h":1,"a":0},{"player":"ikgajuichen","h":1,"a":0},{"player":"JanCandiano","h":0,"a":0},{"player":"JanvdL","h":0,"a":2},{"player":"John0504","h":1,"a":2},{"player":"JoycevanRiet","h":2,"a":0},{"player":"JRHJNB","h":1,"a":0},{"player":"Jules-","h":2,"a":0},{"player":"Katinkadeb","h":1,"a":1},{"player":"Keepertje","h":1,"a":2},{"player":"Kleine Flo","h":2,"a":0},{"player":"Koninkie","h":0,"a":1},{"player":"Marlayne","h":0,"a":2},{"player":"Martijnmeestervoorspeller","h":1,"a":0},{"player":"MaureenGLA","h":1,"a":1},{"player":"Mauricio1980","h":0,"a":0},{"player":"Mobicontrol-Xavier","h":0,"a":0},{"player":"Nelson1983","h":1,"a":0},{"player":"Norman.P","h":1,"a":0},{"player":"Oppie1978","h":2,"a":2},{"player":"Raymond de Haas","h":1,"a":0},{"player":"Reboss","h":1,"a":0},{"player":"RoanTuit(messi)","h":2,"a":0},{"player":"Robertosxs","h":2,"a":0},{"player":"Rugnummer67","h":2,"a":0},{"player":"StanleyBoessen","h":0,"a":2},{"player":"StudentjeIndicium","h":0,"a":0},{"player":"THEGOAT37","h":1,"a":1},{"player":"Trauner_in_Oranje","h":0,"a":2},{"player":"UedaTopscorer","h":0,"a":1},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":1,"a":1},{"player":"Wisselbeker","h":1,"a":1},{"player":"Wkkipje","h":1,"a":3}],"16":[{"player":"Wolsman","h":2,"a":1},{"player":"AlinevanVuuren","h":4,"a":1},{"player":"Bertjuh","h":3,"a":0},{"player":"Bo.","h":2,"a":0},{"player":"Bobcorn","h":2,"a":1},{"player":"BornBjorg","h":3,"a":0},{"player":"Brokkenpiloot","h":3,"a":0},{"player":"Christopheramboz","h":2,"a":1},{"player":"Cornelis2026","h":2,"a":1},{"player":"Crazy Dutchman","h":3,"a":0},{"player":"Daisy010","h":2,"a":0},{"player":"Erol_Ulu","h":3,"a":1},{"player":"Fseton","h":2,"a":1},{"player":"GeorgeV.","h":2,"a":0},{"player":"Givano","h":3,"a":1},{"player":"GonnyDebode","h":4,"a":2},{"player":"Harro1","h":3,"a":0},{"player":"Heer","h":1,"a":0},{"player":"ikgajuichen","h":1,"a":2},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":2,"a":1},{"player":"John0504","h":4,"a":1},{"player":"JoycevanRiet","h":3,"a":1},{"player":"JRHJNB","h":3,"a":1},{"player":"Jules-","h":2,"a":1},{"player":"Katinkadeb","h":3,"a":1},{"player":"Keepertje","h":1,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":2,"a":0},{"player":"Marlayne","h":2,"a":0},{"player":"Martijnmeestervoorspeller","h":1,"a":1},{"player":"MaureenGLA","h":4,"a":0},{"player":"Mauricio1980","h":2,"a":0},{"player":"Mobicontrol-Xavier","h":2,"a":0},{"player":"Nelson1983","h":3,"a":1},{"player":"Norman.P","h":2,"a":1},{"player":"Oppie1978","h":3,"a":1},{"player":"Raymond de Haas","h":3,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"RoanTuit(messi)","h":3,"a":0},{"player":"Robertosxs","h":3,"a":1},{"player":"Rugnummer67","h":3,"a":2},{"player":"StanleyBoessen","h":2,"a":2},{"player":"StudentjeIndicium","h":3,"a":1},{"player":"THEGOAT37","h":2,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":1},{"player":"UedaTopscorer","h":3,"a":0},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":2,"a":1},{"player":"Wisselbeker","h":3,"a":1},{"player":"Wkkipje","h":3,"a":1}],"17":[{"player":"Wolsman","h":0,"a":2},{"player":"AlinevanVuuren","h":1,"a":4},{"player":"Bertjuh","h":1,"a":3},{"player":"Bo.","h":0,"a":2},{"player":"Bobcorn","h":1,"a":2},{"player":"BornBjorg","h":0,"a":2},{"player":"Brokkenpiloot","h":0,"a":2},{"player":"Christopheramboz","h":0,"a":2},{"player":"Cornelis2026","h":2,"a":2},{"player":"Crazy Dutchman","h":1,"a":3},{"player":"Daisy010","h":0,"a":1},{"player":"Erol_Ulu","h":0,"a":3},{"player":"Fseton","h":0,"a":2},{"player":"GeorgeV.","h":0,"a":2},{"player":"Givano","h":0,"a":2},{"player":"GonnyDebode","h":1,"a":3},{"player":"Harro1","h":0,"a":2},{"player":"Heer","h":0,"a":2},{"player":"ikgajuichen","h":0,"a":3},{"player":"JanCandiano","h":0,"a":2},{"player":"JanvdL","h":1,"a":2},{"player":"John0504","h":1,"a":2},{"player":"JoycevanRiet","h":0,"a":2},{"player":"JRHJNB","h":0,"a":2},{"player":"Jules-","h":0,"a":3},{"player":"Katinkadeb","h":0,"a":2},{"player":"Keepertje","h":0,"a":4},{"player":"Kleine Flo","h":0,"a":2},{"player":"Koninkie","h":0,"a":2},{"player":"Marlayne","h":1,"a":1},{"player":"Martijnmeestervoorspeller","h":1,"a":3},{"player":"MaureenGLA","h":1,"a":2},{"player":"Mauricio1980","h":0,"a":2},{"player":"Mobicontrol-Xavier","h":0,"a":3},{"player":"Nelson1983","h":0,"a":2},{"player":"Norman.P","h":0,"a":2},{"player":"Oppie1978","h":1,"a":3},{"player":"Raymond de Haas","h":0,"a":2},{"player":"Reboss","h":0,"a":3},{"player":"RoanTuit(messi)","h":0,"a":3},{"player":"Robertosxs","h":1,"a":2},{"player":"Rugnummer67","h":1,"a":4},{"player":"StanleyBoessen","h":1,"a":2},{"player":"StudentjeIndicium","h":1,"a":3},{"player":"THEGOAT37","h":1,"a":2},{"player":"Trauner_in_Oranje","h":0,"a":3},{"player":"UedaTopscorer","h":0,"a":2},{"player":"WesleyMerwe","h":1,"a":2},{"player":"WillemCo","h":0,"a":2},{"player":"Wisselbeker","h":1,"a":2},{"player":"Wkkipje","h":2,"a":3}],"18":[{"player":"Wolsman","h":3,"a":0},{"player":"AlinevanVuuren","h":3,"a":1},{"player":"Bertjuh","h":3,"a":0},{"player":"Bo.","h":3,"a":1},{"player":"Bobcorn","h":3,"a":1},{"player":"BornBjorg","h":2,"a":0},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":2,"a":2},{"player":"Cornelis2026","h":4,"a":2},{"player":"Crazy Dutchman","h":3,"a":1},{"player":"Daisy010","h":2,"a":0},{"player":"Erol_Ulu","h":2,"a":0},{"player":"Fseton","h":2,"a":0},{"player":"GeorgeV.","h":1,"a":1},{"player":"Givano","h":3,"a":1},{"player":"GonnyDebode","h":6,"a":0},{"player":"Harro1","h":2,"a":1},{"player":"Heer","h":2,"a":0},{"player":"ikgajuichen","h":3,"a":0},{"player":"JanCandiano","h":3,"a":1},{"player":"JanvdL","h":3,"a":0},{"player":"John0504","h":5,"a":1},{"player":"JoycevanRiet","h":4,"a":0},{"player":"JRHJNB","h":3,"a":1},{"player":"Jules-","h":3,"a":0},{"player":"Katinkadeb","h":3,"a":0},{"player":"Keepertje","h":2,"a":1},{"player":"Kleine Flo","h":3,"a":0},{"player":"Koninkie","h":2,"a":0},{"player":"Marlayne","h":3,"a":0},{"player":"Martijnmeestervoorspeller","h":1,"a":1},{"player":"MaureenGLA","h":4,"a":1},{"player":"Mauricio1980","h":2,"a":1},{"player":"Mobicontrol-Xavier","h":3,"a":0},{"player":"Nelson1983","h":1,"a":0},{"player":"Norman.P","h":2,"a":0},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":2,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"RoanTuit(messi)","h":2,"a":0},{"player":"Robertosxs","h":3,"a":1},{"player":"Rugnummer67","h":3,"a":0},{"player":"StanleyBoessen","h":2,"a":0},{"player":"StudentjeIndicium","h":2,"a":0},{"player":"THEGOAT37","h":3,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":3,"a":1},{"player":"WesleyMerwe","h":1,"a":0},{"player":"WillemCo","h":3,"a":0},{"player":"Wisselbeker","h":4,"a":1},{"player":"Wkkipje","h":3,"a":1}],"19":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":2,"a":0},{"player":"Bertjuh","h":2,"a":0},{"player":"Bo.","h":1,"a":1},{"player":"Bobcorn","h":1,"a":0},{"player":"BornBjorg","h":1,"a":0},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":4,"a":0},{"player":"Cornelis2026","h":2,"a":2},{"player":"Crazy Dutchman","h":3,"a":0},{"player":"Daisy010","h":2,"a":1},{"player":"Erol_Ulu","h":2,"a":0},{"player":"Fseton","h":1,"a":0},{"player":"GeorgeV.","h":2,"a":0},{"player":"Givano","h":3,"a":0},{"player":"GonnyDebode","h":2,"a":0},{"player":"Harro1","h":1,"a":1},{"player":"Heer","h":2,"a":0},{"player":"ikgajuichen","h":2,"a":0},{"player":"JanCandiano","h":3,"a":0},{"player":"JanvdL","h":3,"a":1},{"player":"John0504","h":3,"a":0},{"player":"JoycevanRiet","h":2,"a":0},{"player":"JRHJNB","h":2,"a":0},{"player":"Jules-","h":2,"a":0},{"player":"Katinkadeb","h":2,"a":1},{"player":"Keepertje","h":2,"a":1},{"player":"Kleine Flo","h":2,"a":0},{"player":"Koninkie","h":1,"a":0},{"player":"Marlayne","h":1,"a":2},{"player":"Martijnmeestervoorspeller","h":3,"a":0},{"player":"MaureenGLA","h":2,"a":0},{"player":"Mauricio1980","h":3,"a":0},{"player":"Mobicontrol-Xavier","h":2,"a":0},{"player":"Norman.P","h":2,"a":0},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":1,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"RoanTuit(messi)","h":2,"a":1},{"player":"Robertosxs","h":1,"a":0},{"player":"Rugnummer67","h":2,"a":0},{"player":"StanleyBoessen","h":1,"a":0},{"player":"StudentjeIndicium","h":2,"a":1},{"player":"THEGOAT37","h":1,"a":0},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":2,"a":0},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":2,"a":1},{"player":"Wisselbeker","h":3,"a":1}],"20":[{"player":"Wolsman","h":3,"a":0},{"player":"AlinevanVuuren","h":6,"a":2},{"player":"Bertjuh","h":3,"a":1},{"player":"Bo.","h":2,"a":0},{"player":"Bobcorn","h":2,"a":0},{"player":"BornBjorg","h":2,"a":0},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":3,"a":1},{"player":"Cornelis2026","h":3,"a":1},{"player":"Crazy Dutchman","h":3,"a":0},{"player":"Daisy010","h":2,"a":0},{"player":"El-Toro-Loco","h":3,"a":0},{"player":"Erol_Ulu","h":4,"a":0},{"player":"Fseton","h":2,"a":0},{"player":"GeorgeV.","h":2,"a":0},{"player":"Givano","h":3,"a":1},{"player":"GonnyDebode","h":3,"a":1},{"player":"Harro1","h":3,"a":1},{"player":"Heer","h":2,"a":0},{"player":"ikgajuichen","h":3,"a":0},{"player":"JanCandiano","h":3,"a":0},{"player":"JanvdL","h":2,"a":0},{"player":"John0504","h":4,"a":0},{"player":"JoycevanRiet","h":3,"a":0},{"player":"JRHJNB","h":2,"a":0},{"player":"Jules-","h":3,"a":0},{"player":"Katinkadeb","h":2,"a":0},{"player":"Keepertje","h":3,"a":1},{"player":"Kleine Flo","h":3,"a":0},{"player":"Koninkie","h":2,"a":0},{"player":"Marlayne","h":2,"a":1},{"player":"Martijnmeestervoorspeller","h":3,"a":0},{"player":"MaureenGLA","h":4,"a":0},{"player":"Mauricio1980","h":1,"a":0},{"player":"Mobicontrol-Xavier","h":3,"a":0},{"player":"Nelson1983","h":3,"a":0},{"player":"Norman.P","h":3,"a":0},{"player":"Oppie1978","h":3,"a":0},{"player":"Raymond de Haas","h":2,"a":0},{"player":"Reboss","h":3,"a":0},{"player":"Robertosxs","h":3,"a":0},{"player":"Rugnummer67","h":2,"a":1},{"player":"StanleyBoessen","h":0,"a":0},{"player":"StudentjeIndicium","h":3,"a":0},{"player":"THEGOAT37","h":2,"a":0},{"player":"Trauner_in_Oranje","h":3,"a":0},{"player":"UedaTopscorer","h":1,"a":0},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":2,"a":0},{"player":"Wisselbeker","h":3,"a":1}],"21":[{"player":"Wolsman","h":2,"a":1},{"player":"AlinevanVuuren","h":3,"a":2},{"player":"Bertjuh","h":3,"a":0},{"player":"Bo.","h":3,"a":1},{"player":"Bobcorn","h":2,"a":2},{"player":"BornBjorg","h":1,"a":1},{"player":"Brokkenpiloot","h":3,"a":1},{"player":"Christopheramboz","h":3,"a":1},{"player":"Cornelis2026","h":2,"a":0},{"player":"Crazy Dutchman","h":2,"a":1},{"player":"Daisy010","h":2,"a":1},{"player":"El-Toro-Loco","h":1,"a":1},{"player":"Erol_Ulu","h":2,"a":1},{"player":"Fseton","h":2,"a":1},{"player":"GeorgeV.","h":2,"a":1},{"player":"Givano","h":2,"a":1},{"player":"GonnyDebode","h":2,"a":2},{"player":"Harro1","h":2,"a":0},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":2,"a":0},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":1,"a":0},{"player":"John0504","h":3,"a":2},{"player":"JoycevanRiet","h":2,"a":1},{"player":"JRHJNB","h":2,"a":1},{"player":"Jules-","h":2,"a":1},{"player":"Katinkadeb","h":0,"a":1},{"player":"Keepertje","h":1,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":1,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":1},{"player":"MaureenGLA","h":2,"a":0},{"player":"Mauricio1980","h":2,"a":1},{"player":"Mobicontrol-Xavier","h":2,"a":1},{"player":"Nelson1983","h":3,"a":1},{"player":"Norman.P","h":2,"a":1},{"player":"Oppie1978","h":2,"a":2},{"player":"Raymond de Haas","h":2,"a":1},{"player":"Reboss","h":2,"a":1},{"player":"Robertosxs","h":2,"a":1},{"player":"Rugnummer67","h":2,"a":0},{"player":"StanleyBoessen","h":2,"a":2},{"player":"StudentjeIndicium","h":1,"a":1},{"player":"THEGOAT37","h":2,"a":1},{"player":"Trauner_in_Oranje","h":1,"a":1},{"player":"UedaTopscorer","h":2,"a":1},{"player":"WesleyMerwe","h":2,"a":1},{"player":"WillemCo","h":3,"a":2},{"player":"Wisselbeker","h":2,"a":2}],"22":[{"player":"Wolsman","h":1,"a":1},{"player":"AlinevanVuuren","h":1,"a":1},{"player":"Bertjuh","h":1,"a":1},{"player":"Bo.","h":1,"a":1},{"player":"Bobcorn","h":1,"a":0},{"player":"BornBjorg","h":2,"a":0},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":1,"a":1},{"player":"Cornelis2026","h":3,"a":0},{"player":"Crazy Dutchman","h":1,"a":0},{"player":"Daisy010","h":1,"a":1},{"player":"El-Toro-Loco","h":1,"a":0},{"player":"Erol_Ulu","h":2,"a":0},{"player":"Fseton","h":1,"a":0},{"player":"GeorgeV.","h":1,"a":1},{"player":"Givano","h":1,"a":0},{"player":"GonnyDebode","h":0,"a":0},{"player":"Harro1","h":2,"a":2},{"player":"Heer","h":1,"a":0},{"player":"ikgajuichen","h":1,"a":0},{"player":"JanCandiano","h":2,"a":0},{"player":"JanvdL","h":2,"a":1},{"player":"John0504","h":2,"a":2},{"player":"JoycevanRiet","h":2,"a":2},{"player":"JRHJNB","h":1,"a":1},{"player":"Jules-","h":2,"a":1},{"player":"Katinkadeb","h":1,"a":0},{"player":"Keepertje","h":0,"a":0},{"player":"Kleine Flo","h":2,"a":0},{"player":"Koninkie","h":3,"a":1},{"player":"Marlayne","h":2,"a":1},{"player":"Martijnmeestervoorspeller","h":1,"a":0},{"player":"MaureenGLA","h":1,"a":1},{"player":"Mauricio1980","h":1,"a":0},{"player":"Mobicontrol-Xavier","h":2,"a":1},{"player":"Nelson1983","h":3,"a":0},{"player":"Norman.P","h":1,"a":1},{"player":"Oppie1978","h":2,"a":0},{"player":"Raymond de Haas","h":1,"a":0},{"player":"Reboss","h":1,"a":1},{"player":"RoanTuit(messi)","h":3,"a":1},{"player":"Robertosxs","h":1,"a":1},{"player":"Rugnummer67","h":1,"a":1},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":2,"a":2},{"player":"THEGOAT37","h":0,"a":0},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":0,"a":1},{"player":"WesleyMerwe","h":2,"a":1},{"player":"WillemCo","h":1,"a":1},{"player":"Wisselbeker","h":2,"a":1}],"23":[{"player":"Wolsman","h":0,"a":2},{"player":"AlinevanVuuren","h":2,"a":2},{"player":"Bertjuh","h":0,"a":2},{"player":"Bo.","h":0,"a":2},{"player":"Bobcorn","h":0,"a":2},{"player":"BornBjorg","h":0,"a":1},{"player":"Brokkenpiloot","h":0,"a":1},{"player":"Christopheramboz","h":0,"a":3},{"player":"Cornelis2026","h":1,"a":3},{"player":"Crazy Dutchman","h":1,"a":3},{"player":"Daisy010","h":1,"a":3},{"player":"El-Toro-Loco","h":0,"a":1},{"player":"Erol_Ulu","h":1,"a":2},{"player":"Fseton","h":0,"a":1},{"player":"GeorgeV.","h":0,"a":1},{"player":"Givano","h":0,"a":3},{"player":"GonnyDebode","h":0,"a":3},{"player":"Harro1","h":1,"a":2},{"player":"Heer","h":0,"a":2},{"player":"ikgajuichen","h":0,"a":3},{"player":"JanCandiano","h":1,"a":2},{"player":"JanvdL","h":0,"a":3},{"player":"John0504","h":1,"a":2},{"player":"JoycevanRiet","h":1,"a":1},{"player":"JRHJNB","h":0,"a":2},{"player":"Jules-","h":0,"a":2},{"player":"Katinkadeb","h":0,"a":3},{"player":"Keepertje","h":1,"a":0},{"player":"Kleine Flo","h":0,"a":2},{"player":"Koninkie","h":1,"a":2},{"player":"Marlayne","h":0,"a":1},{"player":"Martijnmeestervoorspeller","h":1,"a":3},{"player":"MaureenGLA","h":1,"a":2},{"player":"Mauricio1980","h":0,"a":1},{"player":"Mobicontrol-Xavier","h":0,"a":2},{"player":"Nelson1983","h":0,"a":2},{"player":"Norman.P","h":0,"a":2},{"player":"Oppie1978","h":1,"a":2},{"player":"Raymond de Haas","h":1,"a":2},{"player":"Reboss","h":0,"a":2},{"player":"RoanTuit(messi)","h":0,"a":4},{"player":"Robertosxs","h":0,"a":2},{"player":"Rugnummer67","h":0,"a":2},{"player":"StanleyBoessen","h":0,"a":2},{"player":"StudentjeIndicium","h":1,"a":2},{"player":"THEGOAT37","h":0,"a":1},{"player":"Trauner_in_Oranje","h":0,"a":2},{"player":"UedaTopscorer","h":0,"a":1},{"player":"WesleyMerwe","h":1,"a":2},{"player":"WillemCo","h":2,"a":1},{"player":"Wisselbeker","h":1,"a":2}]};
window.POOL_STANDINGS = {"A":[{"team":"Mexico","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":2},{"team":"Zuid Korea","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":1},{"team":"Tsjechië","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-1},{"team":"Zuid Afrika","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2}],"B":[{"team":"Zwitserland","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Qatar","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Bosnië","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Canada","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0}],"D":[{"team":"USA","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":3},{"team":"Australië","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":2},{"team":"Turkije","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2},{"team":"Paraguay","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-3}],"C":[{"team":"Schotland","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":1},{"team":"Marokko","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Brazilië","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Haiti","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-1}],"E":[{"team":"Duitsland","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":6},{"team":"Ivoorkust","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":1},{"team":"Ecuador","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-1},{"team":"Curacao","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-6}],"F":[{"team":"Zweden","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":4},{"team":"Japan","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Nederland","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Tunesië","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-4}],"H":[{"team":"Saoedi-Arabie","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Uruguay","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Spanje","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Kaapverdie","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0}],"G":[{"team":"Iran","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Nieuw Zeeland","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"België","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Egypte","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0}],"I":[{"team":"Noorwegen","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":3},{"team":"Frankrijk","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":2},{"team":"Senegal","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2},{"team":"Irak","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-3}],"J":[{"team":"Argentinië","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":3},{"team":"Oostenrijk","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":2},{"team":"Jordanie","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2},{"team":"Algerije","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-3}],"L":[{"team":"Engeland","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":2},{"team":"Ghana","played":1,"w":1,"g":0,"v":0,"points":3,"saldo":1},{"team":"Panama","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-1},{"team":"Kroatië","played":1,"w":0,"g":0,"v":1,"points":0,"saldo":-2}],"K":[{"team":"Congo","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Portugal","played":1,"w":0,"g":1,"v":0,"points":1,"saldo":0},{"team":"Colombia","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0},{"team":"Oezbekistan","played":0,"w":0,"g":0,"v":0,"points":0,"saldo":0}]};

// Puntenhistorie per speler (door de scraper bijgehouden, max 12 metingen) —
// voedt de mini-sparkline in de ranglijst. Groeit alleen als de punten wijzigen.
window.POOL_HISTORY = {"Wolsman":[850,870,890,910,910,1005,1280,1355,1355,1355,1430,1450],"Kleine Flo":[565,585,585,605,605,700,975,1050,1050,1050,1125,1220],"Bertjuh":[670,690,690,810,810,905,1200,1275,1275,1295,1370,1390],"Bobcorn":[570,570,590,710,710,805,995,1070,1070,1070,1090,1290],"UedaTopscorer":[490,510,510,530,530,625,795,870,870,890,965,965],"Oppie1978":[695,715,735,955,955,1155,1325,1420,1420,1420,1440,1535],"El-Toro-Loco":[650,650,650,650,650,650,650,650,650,650,650,850],"StudentjeIndicium":[825,845,865,985,985,1185,1375,1470,1470,1470,1470,1470],"Mauricio1980":[565,585,605,725,725,800,950,1045,1045,1065,1140,1340],"AlinevanVuuren":[805,805,825,925,925,1020,1315,1390,1390,1390,1485,1505],"Wisselbeker":[885,905,905,1025,1025,1225,1395,1595,1595,1615,1635,1710],"Roantuit":[0,0,0,0,0,0,0,0,0,0],"Robertosxs":[745,765,765,805,805,1005,1195,1270,1270,1270,1345,1365],"Reboss":[620,640,660,660,660,735,905,980,980,980,1055,1075],"Mobicontrol":[315,315,515,515,590,610,610,760,760,780,800,920],"Brokkenpiloot":[675,695,695,995,995,1090,1260,1335,1335,1335,1410,1430],"Katinkadeb":[565,565,585,685,685,885,1160,1255,1255,1255,1255,1455],"BornBjorg":[980,1000,1200,1200,1200,1295,1465,1540,1540,1540,1540,1635],"Fseton":[695,715,735,755,755,850,1020,1095,1095,1095,1170,1370],"Raymond de Haas":[460,480,480,480,480,575,745,820,820,820,895,1095],"ScheidsTon":[0,0,0,0,0,0,0,0,0,0],"THEGOAT37":[690,710,910,1030,1030,1125,1315,1390,1390,1390,1465,1485],"WesleyMerwe":[575,595,615,635,635,710,900,975,975,975,1050,1125],"Daisy010":[640,640,660,880,880,955,1125,1220,1220,1220,1295,1315],"Erol_Ulu":[980,1000,1020,1120,1120,1320,1490,1565,1565,1565,1640,1735],"Givano":[610,630,650,850,850,1050,1220,1315,1315,1335,1410,1610],"VanderLans":[665,865,865,980,980,980,1000,1040,1040,1135,1430,1630],"Trauner_in_Oranje":[735,755,775,815,815,910,1080,1155,1155,1155,1155,1250],"Keepertje":[460,480,680,700,700,720,890,985,985,1005,1005,1025],"John0504":[475,495,495,535,535,630,800,895,895,895,990,990],"Rugnummer67":[555,575,595,815,815,910,1310,1385,1385,1405,1480,1500],"Norman.P":[1135,1135,1135,1155,1155,1250,1420,1495,1495,1495,1570,1590],"StanleyBoessen":[705,725,745,785,785,785,975,1050,1050,1150,1170,1190],"GonnyDebode":[600,620,720,840,840,915,1105,1180,1180,1200,1220,1240],"Marlayne":[645,645,745,785,785,860,1080,1080,1080,1100,1100,1175],"Jules-":[640,660,680,700,700,795,1070,1145,1145,1145,1220,1295],"Harro1":[650,670,690,810,810,905,1055,1075,1075,1095,1170,1170],"JRHJNB":[700,720,740,740,740,940,1110,1185,1185,1185,1260,1280],"JoycevanRiet":[400,420,440,660,660,860,1030,1105,1105,1105,1180,1180],"Heer":[775,795,795,995,995,1070,1240,1315,1315,1315,1315,1515],"Pepijndh":[0,0,0,0,0,0,0,0,0,0,0,0],"Cornelis2026":[505,525,545,665,665,760,835,835,835,855,930,1025],"Wkkipje":[740,740,940,1040,1040,1240,1410,1410,1410,1410,1410,1410],"MaureenGLA":[695,715,715,915,915,990,1160,1235,1235,1235,1310,1330],"GeorgeV.":[1080,1100,1300,1320,1320,1395,1470,1545,1545,1545,1620,1640],"ikgajuichen":[905,925,925,945,945,945,1220,1295,1295,1295,1370,1570],"JanCandiano":[585,605,805,905,905,1000,1170,1265,1265,1265,1340,1435],"Bo.":[545,565,585,585,585,660,830,850,850,850,925,945],"Koninkie":[865,885,1085,1085,1085,1160,1330,1405,1405,1405,1405,1480],"Martijnmeestervoorspeller":[920,940,940,1140,1140,1160,1255,1350,1350,1350,1425,1625],"Crazy Dutchman":[920,940,940,1140,1140,1235,1425,1520,1520,1520,1595,1795],"RoanTuit(messi)":[700,720,740,780,780,875,1045,1140,1140,1140,1140,1215],"Christopheramboz":[1025,1045,1145,1185,1185,1280,1355,1430,1430,1450,1525,1545],"Frenk010fr":[0,0,0,0,0,0,0,0,0,0,0,0],"WillemCo":[740,740,740,840,840,935,1210,1305,1305,1305,1400,1420],"Nelson1983":[135,155,155,155,155,355,525,525,525,525,600,695],"Mobicontrol-Xavier":[920,995,1270,1345,1345,1345,1420,1495],"JanvdL":[1630,1630,1705,1780]};

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
window.POOL_HENK = {"generatedAt":"2026-06-18","playerTakes":{"JanvdL":"Koploper zonder stijging, met zo'n blunder bij Zweden-Tunesië is het een wonder dat je nog bovenaan staat.","Wisselbeker":"Je houdt je plek vast, maar die misser bij Engeland-Kroatië is een wisselbeker waard.","Erol_Ulu":"Met 680 punten stijging nog altijd stilstaand, je blijft blijkbaar liever op de bank zitten.","GeorgeV.":"Een koninklijke 740 punten stijging maar nog steeds stil, misschien koningshuiswissel overwegen?","BornBjorg":"Een vaste 5e plek, maar met die blunder kun je je beter op tennis richten.","Crazy Dutchman":"Je naam doet vermoeden dat je risico's neemt, maar het lijkt meer op gokken zonder verstand.","Norman.P":"455 punten stijging en nog steeds stil, jouw strategie werkt net zo goed als een lekke band.","StudentjeIndicium":"Je zult heel wat bij moeten leren, want 740 punten stijging en amper hoger komen is een magere score.","Christopheramboz":"Met zo'n score had je vast meer verwacht dan stilstand na je Zweden-Tunesië fiasco.","Oppie1978":"Top tien met een indrukwekkende stijging, maar die misser bij Engeland-Kroatië doet pijn hoor!","Wkkipje":"Gokje 2-0 en dan 2-2 krijgen, dat smaakt naar een lege kippenhok.","Rugnummer67":"Bijna duizend punten stijging, maar met zo'n rang lijkt je rugnummer meer op een busnummer.","Koninkie":"Als koning verwacht je te regeren, maar zelfs in het middenveld lukt dat niet.","AlinevanVuuren":"Gaat lekker met die stijging, maar de naam 'van Vuuren' zegt niks over je voorspellingstalent.","THEGOAT37":"Met die bijnaam zou je hoger moeten staan dan je mislukte blunder bij Zweden-Tunesië.","Wolsman":"Stil als een wolsman, maar je voorspellingen zijn minder magisch dan je naam.","Martijnmeestervoorspeller":"Met zo'n naam verwacht je wonderen, maar blijft jezelf vooral overschatten.","Mobicontrol-Xavier":"Mobicontrol? Je controle is meer een crash met je Japanse voorspelling.","Brokkenpiloot":"Met zo’n naam en prestatie maak je je reputatie helemaal waar!","Givano":"Jij zou voor een podiumplek moeten gaan met die stijging, wat doe je op plek 19?","Heer":"Stabiel? Eerder vast in het weekend, hopelijk niet met die 0-0 voorspelling.","WillemCo":"Stijgingen gaan hard, maar je voorspellingen zijn week als een zachte G.","Bertjuh":"Mooie 645 stijging, maar zonder stijging kan je net zo goed op de bank blijven zitten.","ikgajuichen":"Met juichen bereik je geen top, vooral niet met zo'n Frankrijk blunder.","Robertosxs":"Stijgen zonder beweging, net als een slechte danser op een feestje.","JanCandiano":"Met je stijging zou je wel wat meer mogen opleveren dan stilstand.","Katinkadeb":"Met dat gokje bij Engeland-Kroatië lijkt het eerder op een loterij dan kennis.","MaureenGLA":"Stijging zonder beweging, meer gegiechel dan gegokt?","Daisy010":"Je Delftse stijging valt net zo hard in het water als je Iran-Nieuw-Zeeland gok.","GonnyDebode":"Met die stijging krabbel je omhoog, maar je gokgedrag stelt teleur.","JRHJNB":"Met stijging als die van Arnhem naar Nijmegen, maar je score blijft laag.","Trauner_in_Oranje":"Met 535 punten stijging toch vast in oranje, moet je nog komen?","StanleyBoessen":"Met één goede stunt, maar je anderen voorspellingen zijn net zo keihard als je stijging is zacht.","Jules-":"Met 600 punten stijging maar overstappen is niet altijd de beste keus.","RoanTuit(messi)":"Je weergaloze stijging kan niet verhullen dat je meer naar Messi dan naar je voorspellingen kijkt.","JoycevanRiet":"Met knap werk zou je zeggen dat het wat moois oplevert, maar dat blijft uit.","Marlayne":"Met je blunder en stijging kun je beter naar de golven gaan kijken.","Fseton":"Met deze stijging lijkt het alsof je meer in een achtbaan zit dan in een voorspellingenspel.","Harro1":"Met deze wonderbaarlijke misser kun je beter een tijdmachine nemen naar betere voorspellingen.","Bobcorn":"Je voorspellingen zijn net zo kleverig als je naam doet vermoeden.","Mauricio1980":"Met het maken van je voorspellingen laat je het net zo goed geregeld achter als je stijging.","Kleine Flo":"Met je naam en gok is het de vraag of je risico's te groot zijn.","Keepertje":"Met je resultaten lijkt het meer alsof je in je doel blijft dan dat je het verschil maakt.","Reboss":"Met je blunder en langste streak blijf je beter een anonieme kracht.","WesleyMerwe":"Je stijging draagt weinig bij aan je middenvelder status.","John0504":"Je wenselijke stijging en blunderen zorgen voor een extra teleurstelling.","UedaTopscorer":"Je stijgt als een raket, maar je voorspellingen dalen als een baksteen.","Cornelis2026":"Je stijgt niet eens op als een vogel, laat staan als een voorspelling.","Bo.":"Met weinig stijging maak je van jezelf een schot in de roos om te missen.","Raymond de Haas":"Met je stijging ben je net zo snel als een schildpad in de race.","El-Toro-Loco":"Met zo'n beweeglijkheid kan je nog beter in de weilanden gaan meedoen.","Nelson1983":"Met strategieën die nergens anders op lijken, is je stijging een façade."},"monoloog":"Nou, JanvdL mag dan wel de koploper zijn met 1630 punten, maar er is niet veel beweging te zien bij de rest van de jongens. Neem nou Crazy Dutchman, die op plek 6 staat: zijn voorspellingen zijn net zo voorspelbaar als het weer in Nederland. En dan heb je Cornelis2026, die op plek 48 z'n rol als tafelschuimer serieus neemt. Raymond de Haas staat op de 50e plek en laat zien dat stilstaan inderdaad ook een kunst is — alleen jammer dat het niet bij deze poule hoort.","hotTakes":["Cornelis2026 houdt zijn plek stevig vast op nummer 48, alsof hij bang is dat er iemand anders slechter gaat presteren. Ambitie op z'n best!","Givano, met z'n twee exacte uitslagen, denkt waarschijnlijk dat hij Nostradamus is, maar blijft hangen op plek 19. Zelfs zijn glazen bol lijkt het te hebben opgegeven.","Bobcorn gokte dat Duitsland-Curaçao 1-1 zou worden, maar viel van zijn popcorn toen het 7-1 werd. Gokje gewaagd, Bobcorn!","Jules- gokte Iran-Nieuw-Zeeland als 2-0, maar het werd 2-2. Misschien moet hij een paar boeken over moderne geschiedenis van Iran en Nieuw-Zeeland doornemen voordat hij weer gokt.","JoycevanRiet had grootse plannen met een 2-0 gok op Iran-Nieuw-Zeeland, maar eindigt met een magere 1105 punten. Misschien wat meer oefenen op de oefening 'voorspellen voor dummies'?"],"dailyTarget":{"name":"StanleyBoessen","lines":["StanleyBoessen lijkt wel de Hollandse Koulibaly: hij blijft maar hangen op die 33ste plek zonder enige beweging.","Hoe krijg je het voor elkaar om Portugal-Congo te voorspellen, maar volledig naast de pot te pissen met Zweden-Tunesië? Zelfs een blinde kip legt soms een ei, maar jij zat er vier keer op rij naast!","Met jouw voorspellingen lijkt het of je denkt dat voetbal een loterij is en geen sport; kom op, tijd om die misser van 5-1 recht te zetten!"]},"matchTakes":{"8":"AlinevanVuuren met een meesterzet, terwijl Bobcorn duidelijk dacht dat Curaçao z'n nieuwe voetbalwalhalla was.","9":"Vier visionairen, inclusief BornBjorg, keken verder dan hun klompen lang waren. Aline, hou het bij Duits bier.","10":"Het orakel van Afrika sprak, maar slechts een handvol luisterde. Sorry, Ecuador-fans: er zat geen banaan in de pap.","11":"Zweden veegde Tunesië van de mat, maar Bertjuh zag Tunesische wonderen in z'n koffiedik.","12":"Iedereen zette in op Spanje, maar niemand zag deze droge koek aankomen. Kaapverdië lacht stiekem in hun vuistje.","13":"Een Belgisch-Egyptische genotsmomentje voor BornBjorg en de crew, de rest riep 'chocolade voor de Belgen!'","14":"Saoedi-Arabië bracht de arabische nachten terug naar Uruguay, en de gelijkspel-genieën voerden een vreugdedansje uit.","15":"Iran en Nieuw-Zeeland schudden de handen voor een gelijkspel, terwijl Bo. over hobbits en vulkanen droomde.","16":"Frankrijk hobbelde over Senegal heen en 'ikgajuichen' was duidelijk de weg kwijt in zijn eigen trommelgeroffel.","17":"Irak had geen schijn van kans, maar Cornelis2026 besloot een sprookje te schrijven voor de eventjes-vergetende Noorse goden.","18":"Argentinië flitste, Algerije stond verstijfd, terwijl Christopheramboz zichzelf verloor in een surrealistische tekening.","19":"Oostenrijk kende weinig moeite met Jordanië en Marlayne probeerde slim te zijn, maar faalde jammerlijk.","20":"Portugal struikelde over Congo en voelde de pijn, maar niemand zag het aankomen, want gelijkspelen stond niet in het script.","21":"Engeland brulde over Kroatië heen en Katinkadeb gokte op een uitslag die zelfs op papier niet bestond."},"targetHistory":["Keepertje","Norman.P","Erol_Ulu","UedaTopscorer","StanleyBoessen"]};

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
