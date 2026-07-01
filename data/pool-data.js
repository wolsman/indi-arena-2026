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
  syncedAt: "2026-07-01T04:31:24.695Z",
  firstMatchAt: "2026-06-11T21:00:00+02:00",
  predictionsPublic: false,
  // Wordt true zodra de scraper echte punten ziet — de ranglijst
  // schakelt dan automatisch om van invulstatus naar punten.
  pointsAvailable: true
};

// points/prevPos worden door de scraper gevuld zodra het toernooi loopt.
window.POOL_PLAYERS = [
  { name: "Wolsman", matches: 104, winner: true, topscorer: true, paid: true, points: 6015, prevPos: 4 },
  { name: "Kleine Flo", matches: 82, winner: true, topscorer: true, paid: true, points: 5525, prevPos: 20 },
  { name: "Bertjuh", matches: 88, winner: true, topscorer: true, paid: true, points: 4930, prevPos: 40 },
  { name: "Bobcorn", matches: 89, winner: true, topscorer: true, paid: true, points: 5380, prevPos: 23 },
  { name: "UedaTopscorer", matches: 88, winner: true, topscorer: true, paid: true, points: 4890, prevPos: 41 },
  { name: "Oppie1978", matches: 87, winner: true, topscorer: true, paid: true, points: 5790, prevPos: 9 },
  { name: "El-Toro-Loco", matches: 80, winner: false, topscorer: false, paid: true, points: 5155, prevPos: 27 },
  { name: "StudentjeIndicium", matches: 72, winner: true, topscorer: true, paid: true, points: 4475, prevPos: 43 },
  { name: "Mauricio1980", matches: 88, winner: true, topscorer: true, paid: true, points: 5590, prevPos: 14 },
  { name: "AlinevanVuuren", matches: 88, winner: true, topscorer: true, paid: true, points: 5030, prevPos: 30 },
  { name: "Wisselbeker", matches: 88, winner: true, topscorer: true, paid: true, points: 5445, prevPos: 18 },
  { name: "Robertosxs", matches: 104, winner: true, topscorer: true, paid: true, points: 6020, prevPos: 3 },
  { name: "Reboss", matches: 72, winner: true, topscorer: true, paid: true, points: 4880, prevPos: 32 },
  { name: "Mobicontrol-van-Riet", matches: 91, winner: true, topscorer: true, paid: true, points: 6260, prevPos: 1 },
  { name: "Brokkenpiloot", matches: 88, winner: true, topscorer: true, paid: true, points: 5125, prevPos: 24 },
  { name: "Katinkadeb", matches: 88, winner: true, topscorer: true, paid: true, points: 4765, prevPos: 42 },
  { name: "BornBjorg", matches: 71, winner: true, topscorer: true, paid: true, points: 4915, prevPos: 37 },
  { name: "Fseton", matches: 88, winner: true, topscorer: true, paid: true, points: 4825, prevPos: 36 },
  { name: "Raymond de Haas", matches: 88, winner: true, topscorer: true, paid: true, points: 5495, prevPos: 17 },
  { name: "THEGOAT37", matches: 88, winner: true, topscorer: true, paid: true, points: 6090, prevPos: 2 },
  { name: "WesleyMerwe", matches: 87, winner: true, topscorer: true, paid: true, points: 5715, prevPos: 11 },
  { name: "Daisy010", matches: 87, winner: true, topscorer: true, paid: true, points: 5415, prevPos: 21 },
  { name: "Erol_Ulu", matches: 88, winner: true, topscorer: true, paid: true, points: 5705, prevPos: 12 },
  { name: "Givano", matches: 88, winner: true, topscorer: true, paid: true, points: 5875, prevPos: 7 },
  { name: "JanvdL", matches: 80, winner: true, topscorer: true, paid: true, points: 5785, prevPos: 10 },
  { name: "Trauner_in_Oranje", matches: 79, winner: true, topscorer: true, paid: true, points: 5230, prevPos: 28 },
  { name: "Keepertje", matches: 88, winner: true, topscorer: true, paid: true, points: 3685, prevPos: 52 },
  { name: "John0504", matches: 88, winner: true, topscorer: true, paid: true, points: 4955, prevPos: 34 },
  { name: "Rugnummer67", matches: 84, winner: true, topscorer: true, paid: true, points: 4765, prevPos: 39 },
  { name: "Norman.P", matches: 79, winner: true, topscorer: true, paid: true, points: 5485, prevPos: 15 },
  { name: "StanleyBoessen", matches: 72, winner: false, topscorer: false, paid: true, points: 4175, prevPos: 50 },
  { name: "GonnyDebode", matches: 88, winner: true, topscorer: true, paid: true, points: 4435, prevPos: 49 },
  { name: "Marlayne", matches: 88, winner: true, topscorer: true, paid: true, points: 4315, prevPos: 46 },
  { name: "Jules-", matches: 90, winner: true, topscorer: true, paid: true, points: 5845, prevPos: 8 },
  { name: "Harro1", matches: 72, winner: true, topscorer: true, paid: true, points: 4865, prevPos: 33 },
  { name: "JRHJNB", matches: 88, winner: true, topscorer: true, paid: true, points: 5210, prevPos: 25 },
  { name: "JoycevanRiet", matches: 87, winner: true, topscorer: true, paid: true, points: 4445, prevPos: 45 },
  { name: "Heer", matches: 87, winner: true, topscorer: true, paid: true, points: 5530, prevPos: 13 },
  { name: "Cornelis2026", matches: 87, winner: true, topscorer: true, paid: true, points: 4335, prevPos: 48 },
  { name: "Wkkipje", matches: 82, winner: true, topscorer: true, paid: true, points: 4905, prevPos: 35 },
  { name: "MaureenGLA", matches: 88, winner: true, topscorer: true, paid: true, points: 5020, prevPos: 37 },
  { name: "GeorgeV.", matches: 82, winner: true, topscorer: true, paid: true, points: 5845, prevPos: 5 },
  { name: "ikgajuichen", matches: 104, winner: true, topscorer: true, paid: true, points: 5000, prevPos: 31 },
  { name: "JanCandiano", matches: 88, winner: true, topscorer: true, paid: true, points: 5180, prevPos: 26 },
  { name: "Bo.", matches: 86, winner: true, topscorer: true, paid: true, points: 5295, prevPos: 22 },
  { name: "Koninkie", matches: 88, winner: true, topscorer: true, paid: true, points: 6010, prevPos: 6 },
  { name: "Martijnmeestervoorspeller", matches: 87, winner: true, topscorer: true, paid: true, points: 5425, prevPos: 16 },
  { name: "Crazy Dutchman", matches: 86, winner: true, topscorer: true, paid: true, points: 5370, prevPos: 18 },
  { name: "RoanTuit(messi)", matches: 59, winner: true, topscorer: true, paid: true, points: 4155, prevPos: 51 },
  { name: "Christopheramboz", matches: 88, winner: true, topscorer: true, paid: true, points: 5030, prevPos: 29 },
  { name: "WillemCo", matches: 75, winner: false, topscorer: false, paid: true, points: 4295, prevPos: 46 },
  { name: "Nelson1983", matches: 75, winner: false, topscorer: false, paid: true, points: 4530, prevPos: 44 }
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
window.POOL_RESULTS = {"mexico|zuidafrika":"2-0","zuidkorea|tsjechie":"2-1","canada|bosnie":"1-1","usa|paraguay":"4-1","qatar|zwitserland":"1-1","brazilie|marokko":"1-1","haiti|schotland":"0-1","australie|turkije":"2-0","duitsland|curacao":"7-1","nederland|japan":"2-2","ivoorkust|ecuador":"1-0","zweden|tunesie":"5-1","spanje|kaapverdie":"0-0","belgie|egypte":"1-1","saoediarabie|uruguay":"1-1","iran|nieuwzeeland":"2-2","frankrijk|senegal":"3-1","irak|noorwegen":"1-4","argentinie|algerije":"3-0","oostenrijk|jordanie":"3-1","portugal|congo":"1-1","engeland|kroatie":"4-2","ghana|panama":"1-0","oezbekistan|colombia":"1-3","tsjechie|zuidafrika":"1-1","zwitserland|bosnie":"4-1","canada|qatar":"6-0","mexico|zuidkorea":"1-0","usa|australie":"2-0","schotland|marokko":"0-1","brazilie|haiti":"3-0","turkije|paraguay":"0-1","nederland|zweden":"5-1","duitsland|ivoorkust":"2-1","ecuador|curacao":"0-0","tunesie|japan":"0-4","spanje|saoediarabie":"4-0","belgie|iran":"0-0","uruguay|kaapverdie":"2-2","nieuwzeeland|egypte":"1-3","argentinie|oostenrijk":"2-0","frankrijk|irak":"3-0","noorwegen|senegal":"3-2","jordanie|algerije":"1-2","portugal|oezbekistan":"5-0","engeland|ghana":"0-0","panama|kroatie":"0-1","colombia|congo":"1-0","zwitserland|canada":"2-1","bosnie|qatar":"3-1","schotland|brazilie":"0-3","marokko|haiti":"4-2","tsjechie|mexico":"0-3","zuidafrika|zuidkorea":"1-0","curacao|ivoorkust":"0-2","ecuador|duitsland":"2-1","japan|zweden":"1-1","tunesie|nederland":"1-3","turkije|usa":"3-2","paraguay|australie":"0-0","noorwegen|frankrijk":"1-4","senegal|irak":"5-0","kaapverdie|saoediarabie":"0-0","uruguay|spanje":"0-1","egypte|iran":"1-1","nieuwzeeland|belgie":"1-5","panama|engeland":"0-2","kroatie|ghana":"2-1","colombia|portugal":"0-0","congo|oezbekistan":"3-1","algerije|oostenrijk":"3-3","jordanie|argentinie":"1-3","zuidafrika|canada":"0-1","brazilie|japan":"2-1","duitsland|paraguay":"1-1","nederland|marokko":"1-1","ivoorkust|noorwegen":"1-2","frankrijk|zweden":"3-0","mexico|ecuador":"2-0"};
// Voorspellingen per gestarte wedstrijd (scraper). Sleutel = kalender-index
// (POOL_CALENDAR[i]); waarde = [{player, h, a}].
window.POOL_PREDICTIONS = {"65":[{"player":"Wolsman","h":0,"a":3},{"player":"AlinevanVuuren","h":1,"a":2},{"player":"Bertjuh","h":0,"a":1},{"player":"Bo.","h":0,"a":2},{"player":"Bobcorn","h":0,"a":2},{"player":"BornBjorg","h":0,"a":2},{"player":"Brokkenpiloot","h":0,"a":2},{"player":"Christopheramboz","h":1,"a":2},{"player":"Cornelis2026","h":1,"a":3},{"player":"Crazy Dutchman","h":2,"a":1},{"player":"Daisy010","h":0,"a":3},{"player":"El-Toro-Loco","h":0,"a":1},{"player":"Erol_Ulu","h":1,"a":2},{"player":"Fseton","h":1,"a":2},{"player":"GeorgeV.","h":0,"a":2},{"player":"Givano","h":0,"a":3},{"player":"GonnyDebode","h":0,"a":2},{"player":"Harro1","h":0,"a":2},{"player":"Heer","h":0,"a":2},{"player":"ikgajuichen","h":0,"a":3},{"player":"JanCandiano","h":0,"a":1},{"player":"JanvdL","h":1,"a":2},{"player":"John0504","h":1,"a":2},{"player":"JoycevanRiet","h":0,"a":3},{"player":"JRHJNB","h":0,"a":2},{"player":"Jules-","h":0,"a":3},{"player":"Katinkadeb","h":0,"a":0},{"player":"Keepertje","h":0,"a":1},{"player":"Kleine Flo","h":0,"a":3},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":1,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":1},{"player":"MaureenGLA","h":0,"a":2},{"player":"Mauricio1980","h":0,"a":2},{"player":"Mobicontrol-van-Riet","h":0,"a":2},{"player":"Nelson1983","h":0,"a":3},{"player":"Norman.P","h":0,"a":2},{"player":"Oppie1978","h":1,"a":2},{"player":"Raymond de Haas","h":0,"a":2},{"player":"Reboss","h":0,"a":3},{"player":"RoanTuit(messi)","h":0,"a":3},{"player":"Robertosxs","h":1,"a":3},{"player":"Rugnummer67","h":3,"a":1},{"player":"StanleyBoessen","h":2,"a":2},{"player":"StudentjeIndicium","h":0,"a":2},{"player":"THEGOAT37","h":0,"a":1},{"player":"Trauner_in_Oranje","h":0,"a":1},{"player":"UedaTopscorer","h":1,"a":1},{"player":"WesleyMerwe","h":0,"a":2},{"player":"WillemCo","h":0,"a":3},{"player":"Wisselbeker","h":1,"a":3},{"player":"Wkkipje","h":1,"a":2}],"66":[{"player":"Wolsman","h":0,"a":2},{"player":"AlinevanVuuren","h":0,"a":3},{"player":"Bertjuh","h":0,"a":2},{"player":"Bo.","h":0,"a":3},{"player":"Bobcorn","h":0,"a":3},{"player":"BornBjorg","h":0,"a":4},{"player":"Brokkenpiloot","h":0,"a":3},{"player":"Christopheramboz","h":1,"a":3},{"player":"Cornelis2026","h":0,"a":3},{"player":"Crazy Dutchman","h":1,"a":1},{"player":"Daisy010","h":1,"a":3},{"player":"El-Toro-Loco","h":0,"a":2},{"player":"Erol_Ulu","h":0,"a":3},{"player":"Fseton","h":0,"a":2},{"player":"GeorgeV.","h":0,"a":2},{"player":"Givano","h":0,"a":3},{"player":"GonnyDebode","h":0,"a":3},{"player":"Harro1","h":0,"a":2},{"player":"Heer","h":0,"a":2},{"player":"ikgajuichen","h":0,"a":3},{"player":"JanCandiano","h":1,"a":2},{"player":"JanvdL","h":0,"a":2},{"player":"John0504","h":1,"a":2},{"player":"JoycevanRiet","h":0,"a":4},{"player":"JRHJNB","h":1,"a":3},{"player":"Jules-","h":0,"a":3},{"player":"Katinkadeb","h":1,"a":2},{"player":"Keepertje","h":0,"a":2},{"player":"Kleine Flo","h":0,"a":2},{"player":"Koninkie","h":0,"a":2},{"player":"Marlayne","h":1,"a":2},{"player":"Martijnmeestervoorspeller","h":1,"a":3},{"player":"MaureenGLA","h":1,"a":3},{"player":"Mauricio1980","h":0,"a":3},{"player":"Mobicontrol-van-Riet","h":0,"a":2},{"player":"Nelson1983","h":0,"a":3},{"player":"Norman.P","h":0,"a":2},{"player":"Oppie1978","h":0,"a":2},{"player":"Raymond de Haas","h":0,"a":2},{"player":"Reboss","h":0,"a":3},{"player":"Robertosxs","h":1,"a":3},{"player":"Rugnummer67","h":0,"a":3},{"player":"StanleyBoessen","h":1,"a":2},{"player":"StudentjeIndicium","h":1,"a":2},{"player":"THEGOAT37","h":0,"a":2},{"player":"Trauner_in_Oranje","h":0,"a":2},{"player":"UedaTopscorer","h":0,"a":2},{"player":"WesleyMerwe","h":0,"a":2},{"player":"WillemCo","h":1,"a":3},{"player":"Wisselbeker","h":0,"a":3},{"player":"Wkkipje","h":1,"a":3}],"67":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":1,"a":1},{"player":"Bertjuh","h":2,"a":1},{"player":"Bo.","h":2,"a":1},{"player":"Bobcorn","h":2,"a":1},{"player":"BornBjorg","h":2,"a":1},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":2,"a":2},{"player":"Cornelis2026","h":2,"a":1},{"player":"Crazy Dutchman","h":1,"a":0},{"player":"Daisy010","h":2,"a":1},{"player":"El-Toro-Loco","h":1,"a":0},{"player":"Erol_Ulu","h":1,"a":1},{"player":"Fseton","h":2,"a":0},{"player":"GeorgeV.","h":2,"a":1},{"player":"Givano","h":3,"a":1},{"player":"GonnyDebode","h":5,"a":1},{"player":"Harro1","h":2,"a":1},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":1,"a":2},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":1,"a":1},{"player":"John0504","h":2,"a":1},{"player":"JoycevanRiet","h":1,"a":1},{"player":"JRHJNB","h":2,"a":1},{"player":"Jules-","h":2,"a":1},{"player":"Katinkadeb","h":2,"a":1},{"player":"Keepertje","h":1,"a":2},{"player":"Kleine Flo","h":1,"a":1},{"player":"Koninkie","h":1,"a":0},{"player":"Marlayne","h":2,"a":2},{"player":"Martijnmeestervoorspeller","h":1,"a":0},{"player":"MaureenGLA","h":2,"a":0},{"player":"Mauricio1980","h":0,"a":1},{"player":"Mobicontrol-van-Riet","h":0,"a":0},{"player":"Nelson1983","h":2,"a":1},{"player":"Norman.P","h":2,"a":0},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":1,"a":1},{"player":"Reboss","h":2,"a":0},{"player":"Robertosxs","h":2,"a":1},{"player":"Rugnummer67","h":2,"a":1},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":1,"a":1},{"player":"THEGOAT37","h":1,"a":0},{"player":"Trauner_in_Oranje","h":1,"a":2},{"player":"UedaTopscorer","h":1,"a":0},{"player":"WesleyMerwe","h":1,"a":0},{"player":"WillemCo","h":1,"a":3},{"player":"Wisselbeker","h":2,"a":1},{"player":"Wkkipje","h":1,"a":1}],"68":[{"player":"Wolsman","h":1,"a":2},{"player":"AlinevanVuuren","h":0,"a":3},{"player":"Bertjuh","h":1,"a":3},{"player":"Bo.","h":1,"a":3},{"player":"Bobcorn","h":2,"a":3},{"player":"BornBjorg","h":1,"a":1},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":1,"a":2},{"player":"Cornelis2026","h":0,"a":2},{"player":"Crazy Dutchman","h":0,"a":2},{"player":"Daisy010","h":1,"a":2},{"player":"El-Toro-Loco","h":1,"a":1},{"player":"Erol_Ulu","h":1,"a":1},{"player":"Fseton","h":1,"a":3},{"player":"GeorgeV.","h":1,"a":1},{"player":"Givano","h":1,"a":1},{"player":"GonnyDebode","h":2,"a":2},{"player":"Harro1","h":0,"a":2},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":2,"a":2},{"player":"JanCandiano","h":1,"a":2},{"player":"JanvdL","h":1,"a":2},{"player":"John0504","h":1,"a":2},{"player":"JoycevanRiet","h":1,"a":3},{"player":"JRHJNB","h":1,"a":1},{"player":"Jules-","h":1,"a":2},{"player":"Katinkadeb","h":1,"a":3},{"player":"Keepertje","h":2,"a":1},{"player":"Kleine Flo","h":1,"a":1},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":2,"a":3},{"player":"Martijnmeestervoorspeller","h":1,"a":2},{"player":"MaureenGLA","h":0,"a":2},{"player":"Mauricio1980","h":0,"a":2},{"player":"Mobicontrol-van-Riet","h":1,"a":1},{"player":"Nelson1983","h":0,"a":3},{"player":"Norman.P","h":0,"a":2},{"player":"Oppie1978","h":1,"a":2},{"player":"Raymond de Haas","h":1,"a":2},{"player":"Reboss","h":1,"a":2},{"player":"RoanTuit(messi)","h":1,"a":3},{"player":"Robertosxs","h":1,"a":2},{"player":"Rugnummer67","h":2,"a":2},{"player":"StanleyBoessen","h":0,"a":1},{"player":"StudentjeIndicium","h":1,"a":2},{"player":"THEGOAT37","h":0,"a":1},{"player":"Trauner_in_Oranje","h":1,"a":1},{"player":"UedaTopscorer","h":0,"a":2},{"player":"WesleyMerwe","h":0,"a":2},{"player":"WillemCo","h":2,"a":2},{"player":"Wisselbeker","h":1,"a":4},{"player":"Wkkipje","h":0,"a":3}],"69":[{"player":"Wolsman","h":1,"a":1},{"player":"AlinevanVuuren","h":1,"a":2},{"player":"Bertjuh","h":1,"a":1},{"player":"Bo.","h":0,"a":1},{"player":"Bobcorn","h":1,"a":1},{"player":"BornBjorg","h":1,"a":0},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":2,"a":1},{"player":"Cornelis2026","h":1,"a":1},{"player":"Crazy Dutchman","h":1,"a":1},{"player":"Daisy010","h":1,"a":0},{"player":"El-Toro-Loco","h":1,"a":0},{"player":"Erol_Ulu","h":1,"a":0},{"player":"Fseton","h":2,"a":0},{"player":"GeorgeV.","h":1,"a":0},{"player":"Givano","h":2,"a":0},{"player":"GonnyDebode","h":0,"a":0},{"player":"Harro1","h":3,"a":1},{"player":"Heer","h":2,"a":1},{"player":"ikgajuichen","h":0,"a":0},{"player":"JanCandiano","h":1,"a":1},{"player":"JanvdL","h":1,"a":0},{"player":"John0504","h":0,"a":0},{"player":"JoycevanRiet","h":1,"a":1},{"player":"JRHJNB","h":1,"a":1},{"player":"Jules-","h":1,"a":1},{"player":"Katinkadeb","h":2,"a":0},{"player":"Keepertje","h":2,"a":1},{"player":"Kleine Flo","h":1,"a":1},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":1,"a":2},{"player":"Martijnmeestervoorspeller","h":1,"a":1},{"player":"MaureenGLA","h":1,"a":1},{"player":"Mauricio1980","h":1,"a":0},{"player":"Mobicontrol-van-Riet","h":2,"a":0},{"player":"Norman.P","h":1,"a":1},{"player":"Oppie1978","h":2,"a":0},{"player":"Raymond de Haas","h":2,"a":1},{"player":"Reboss","h":1,"a":1},{"player":"RoanTuit(messi)","h":2,"a":0},{"player":"Robertosxs","h":0,"a":0},{"player":"Rugnummer67","h":2,"a":1},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":2,"a":0},{"player":"THEGOAT37","h":1,"a":0},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":0,"a":0},{"player":"WesleyMerwe","h":2,"a":1},{"player":"WillemCo","h":2,"a":0},{"player":"Wisselbeker","h":2,"a":1},{"player":"Wkkipje","h":2,"a":2}],"70":[{"player":"Wolsman","h":0,"a":1},{"player":"AlinevanVuuren","h":0,"a":1},{"player":"Bertjuh","h":1,"a":2},{"player":"Bo.","h":1,"a":1},{"player":"Bobcorn","h":1,"a":1},{"player":"BornBjorg","h":1,"a":1},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":2,"a":1},{"player":"Cornelis2026","h":1,"a":2},{"player":"Crazy Dutchman","h":2,"a":2},{"player":"Daisy010","h":1,"a":3},{"player":"El-Toro-Loco","h":1,"a":2},{"player":"Erol_Ulu","h":1,"a":1},{"player":"Fseton","h":0,"a":2},{"player":"GeorgeV.","h":1,"a":1},{"player":"Givano","h":1,"a":2},{"player":"GonnyDebode","h":1,"a":2},{"player":"Harro1","h":1,"a":1},{"player":"Heer","h":0,"a":1},{"player":"ikgajuichen","h":1,"a":2},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":0,"a":3},{"player":"John0504","h":1,"a":1},{"player":"JoycevanRiet","h":2,"a":3},{"player":"JRHJNB","h":2,"a":2},{"player":"Jules-","h":1,"a":2},{"player":"Katinkadeb","h":1,"a":2},{"player":"Keepertje","h":1,"a":2},{"player":"Kleine Flo","h":1,"a":2},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":0,"a":2},{"player":"Martijnmeestervoorspeller","h":2,"a":2},{"player":"MaureenGLA","h":2,"a":1},{"player":"Mauricio1980","h":0,"a":1},{"player":"Mobicontrol-van-Riet","h":1,"a":1},{"player":"Norman.P","h":0,"a":2},{"player":"Oppie1978","h":2,"a":2},{"player":"Raymond de Haas","h":1,"a":2},{"player":"Reboss","h":1,"a":1},{"player":"RoanTuit(messi)","h":2,"a":2},{"player":"Robertosxs","h":1,"a":1},{"player":"Rugnummer67","h":2,"a":1},{"player":"StanleyBoessen","h":0,"a":0},{"player":"StudentjeIndicium","h":3,"a":2},{"player":"THEGOAT37","h":1,"a":2},{"player":"Trauner_in_Oranje","h":2,"a":1},{"player":"UedaTopscorer","h":1,"a":1},{"player":"WesleyMerwe","h":1,"a":2},{"player":"WillemCo","h":1,"a":3},{"player":"Wisselbeker","h":1,"a":1},{"player":"Wkkipje","h":2,"a":1}],"71":[{"player":"Wolsman","h":0,"a":3},{"player":"AlinevanVuuren","h":1,"a":3},{"player":"Bertjuh","h":1,"a":3},{"player":"Bo.","h":0,"a":3},{"player":"Bobcorn","h":0,"a":4},{"player":"BornBjorg","h":0,"a":4},{"player":"Brokkenpiloot","h":0,"a":3},{"player":"Christopheramboz","h":0,"a":3},{"player":"Cornelis2026","h":1,"a":5},{"player":"Crazy Dutchman","h":0,"a":3},{"player":"Daisy010","h":0,"a":2},{"player":"El-Toro-Loco","h":0,"a":5},{"player":"Erol_Ulu","h":0,"a":2},{"player":"Fseton","h":0,"a":2},{"player":"GeorgeV.","h":0,"a":2},{"player":"Givano","h":0,"a":4},{"player":"GonnyDebode","h":0,"a":6},{"player":"Harro1","h":0,"a":3},{"player":"Heer","h":0,"a":3},{"player":"ikgajuichen","h":0,"a":4},{"player":"JanCandiano","h":0,"a":3},{"player":"JanvdL","h":0,"a":2},{"player":"John0504","h":1,"a":5},{"player":"JoycevanRiet","h":0,"a":3},{"player":"JRHJNB","h":0,"a":3},{"player":"Jules-","h":0,"a":3},{"player":"Katinkadeb","h":0,"a":3},{"player":"Keepertje","h":0,"a":3},{"player":"Kleine Flo","h":0,"a":3},{"player":"Koninkie","h":0,"a":3},{"player":"Marlayne","h":1,"a":4},{"player":"Martijnmeestervoorspeller","h":0,"a":3},{"player":"MaureenGLA","h":1,"a":3},{"player":"Mauricio1980","h":0,"a":2},{"player":"Mobicontrol-van-Riet","h":0,"a":2},{"player":"Norman.P","h":0,"a":4},{"player":"Oppie1978","h":0,"a":5},{"player":"Raymond de Haas","h":0,"a":3},{"player":"Reboss","h":0,"a":3},{"player":"RoanTuit(messi)","h":0,"a":3},{"player":"Robertosxs","h":1,"a":3},{"player":"Rugnummer67","h":0,"a":3},{"player":"StanleyBoessen","h":1,"a":2},{"player":"StudentjeIndicium","h":0,"a":4},{"player":"THEGOAT37","h":0,"a":3},{"player":"Trauner_in_Oranje","h":0,"a":4},{"player":"UedaTopscorer","h":0,"a":3},{"player":"WesleyMerwe","h":0,"a":3},{"player":"WillemCo","h":0,"a":4},{"player":"Wisselbeker","h":0,"a":4},{"player":"Wkkipje","h":1,"a":4}],"72":[{"player":"Wolsman","h":1,"a":2},{"player":"AlinevanVuuren","h":1,"a":3},{"player":"Bertjuh","h":1,"a":2},{"player":"Bo.","h":1,"a":2},{"player":"Bobcorn","h":1,"a":2},{"player":"BornBjorg","h":2,"a":2},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":1,"a":1},{"player":"El-Toro-Loco","h":0,"a":1},{"player":"Erol_Ulu","h":1,"a":2},{"player":"Fseton","h":1,"a":1},{"player":"GeorgeV.","h":1,"a":3},{"player":"Givano","h":0,"a":2},{"player":"GonnyDebode","h":0,"a":2},{"player":"ikgajuichen","h":2,"a":2},{"player":"JanCandiano","h":1,"a":2},{"player":"JanvdL","h":2,"a":2},{"player":"John0504","h":2,"a":3},{"player":"JRHJNB","h":1,"a":3},{"player":"Jules-","h":1,"a":2},{"player":"Katinkadeb","h":0,"a":2},{"player":"Keepertje","h":1,"a":1},{"player":"Kleine Flo","h":1,"a":2},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":1,"a":3},{"player":"MaureenGLA","h":0,"a":2},{"player":"Mauricio1980","h":0,"a":3},{"player":"Mobicontrol-van-Riet","h":0,"a":2},{"player":"Nelson1983","h":2,"a":1},{"player":"Norman.P","h":0,"a":1},{"player":"Oppie1978","h":1,"a":1},{"player":"Raymond de Haas","h":2,"a":1},{"player":"RoanTuit(messi)","h":0,"a":1},{"player":"Robertosxs","h":0,"a":1},{"player":"Rugnummer67","h":2,"a":0},{"player":"THEGOAT37","h":1,"a":2},{"player":"Trauner_in_Oranje","h":2,"a":1},{"player":"UedaTopscorer","h":1,"a":1},{"player":"WillemCo","h":0,"a":2},{"player":"Wisselbeker","h":1,"a":3},{"player":"Wkkipje","h":2,"a":2}],"73":[{"player":"Wolsman","h":2,"a":1},{"player":"AlinevanVuuren","h":3,"a":2},{"player":"Bertjuh","h":2,"a":1},{"player":"Bo.","h":2,"a":0},{"player":"Bobcorn","h":3,"a":2},{"player":"BornBjorg","h":3,"a":1},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Christopheramboz","h":2,"a":3},{"player":"Cornelis2026","h":2,"a":2},{"player":"Daisy010","h":2,"a":1},{"player":"El-Toro-Loco","h":2,"a":1},{"player":"Erol_Ulu","h":2,"a":0},{"player":"Fseton","h":2,"a":0},{"player":"GeorgeV.","h":3,"a":1},{"player":"Givano","h":2,"a":1},{"player":"GonnyDebode","h":3,"a":2},{"player":"Heer","h":3,"a":2},{"player":"ikgajuichen","h":2,"a":1},{"player":"JanCandiano","h":3,"a":1},{"player":"JanvdL","h":1,"a":2},{"player":"John0504","h":4,"a":1},{"player":"JoycevanRiet","h":3,"a":2},{"player":"JRHJNB","h":2,"a":1},{"player":"Jules-","h":3,"a":1},{"player":"Katinkadeb","h":1,"a":0},{"player":"Keepertje","h":3,"a":1},{"player":"Kleine Flo","h":3,"a":1},{"player":"Koninkie","h":2,"a":1},{"player":"Marlayne","h":2,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":1},{"player":"MaureenGLA","h":4,"a":1},{"player":"Mauricio1980","h":2,"a":1},{"player":"Mobicontrol-van-Riet","h":2,"a":1},{"player":"Nelson1983","h":3,"a":1},{"player":"Norman.P","h":2,"a":0},{"player":"Oppie1978","h":1,"a":2},{"player":"Raymond de Haas","h":2,"a":0},{"player":"RoanTuit(messi)","h":2,"a":0},{"player":"Robertosxs","h":2,"a":1},{"player":"Rugnummer67","h":3,"a":1},{"player":"THEGOAT37","h":2,"a":1},{"player":"Trauner_in_Oranje","h":3,"a":1},{"player":"UedaTopscorer","h":1,"a":1},{"player":"WesleyMerwe","h":2,"a":1},{"player":"WillemCo","h":3,"a":1},{"player":"Wisselbeker","h":2,"a":2},{"player":"Wkkipje","h":2,"a":1}],"74":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":3,"a":0},{"player":"Bertjuh","h":2,"a":1},{"player":"Bo.","h":3,"a":1},{"player":"Bobcorn","h":3,"a":1},{"player":"BornBjorg","h":2,"a":0},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":3,"a":2},{"player":"Cornelis2026","h":2,"a":1},{"player":"Crazy Dutchman","h":3,"a":1},{"player":"Daisy010","h":3,"a":1},{"player":"El-Toro-Loco","h":3,"a":0},{"player":"Erol_Ulu","h":2,"a":0},{"player":"Fseton","h":2,"a":1},{"player":"GeorgeV.","h":3,"a":1},{"player":"Givano","h":3,"a":1},{"player":"GonnyDebode","h":2,"a":0},{"player":"Heer","h":2,"a":0},{"player":"ikgajuichen","h":3,"a":0},{"player":"JanCandiano","h":3,"a":1},{"player":"JanvdL","h":2,"a":0},{"player":"John0504","h":3,"a":1},{"player":"JoycevanRiet","h":3,"a":0},{"player":"JRHJNB","h":3,"a":0},{"player":"Jules-","h":2,"a":0},{"player":"Katinkadeb","h":3,"a":1},{"player":"Keepertje","h":2,"a":2},{"player":"Kleine Flo","h":2,"a":0},{"player":"Koninkie","h":3,"a":0},{"player":"Marlayne","h":3,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":1},{"player":"MaureenGLA","h":3,"a":0},{"player":"Mauricio1980","h":3,"a":0},{"player":"Mobicontrol-van-Riet","h":3,"a":0},{"player":"Nelson1983","h":3,"a":1},{"player":"Norman.P","h":3,"a":1},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":3,"a":1},{"player":"RoanTuit(messi)","h":1,"a":0},{"player":"Robertosxs","h":2,"a":1},{"player":"Rugnummer67","h":3,"a":1},{"player":"THEGOAT37","h":2,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":2,"a":0},{"player":"WesleyMerwe","h":3,"a":0},{"player":"WillemCo","h":4,"a":1},{"player":"Wisselbeker","h":5,"a":0},{"player":"Wkkipje","h":1,"a":2}],"75":[{"player":"Wolsman","h":2,"a":1},{"player":"AlinevanVuuren","h":3,"a":1},{"player":"Bertjuh","h":4,"a":3},{"player":"Bo.","h":2,"a":1},{"player":"Bobcorn","h":2,"a":1},{"player":"BornBjorg","h":3,"a":2},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Christopheramboz","h":2,"a":3},{"player":"Cornelis2026","h":2,"a":1},{"player":"Crazy Dutchman","h":3,"a":2},{"player":"Daisy010","h":4,"a":2},{"player":"El-Toro-Loco","h":1,"a":0},{"player":"Erol_Ulu","h":2,"a":1},{"player":"Fseton","h":2,"a":1},{"player":"GeorgeV.","h":3,"a":2},{"player":"Givano","h":2,"a":1},{"player":"GonnyDebode","h":3,"a":1},{"player":"Heer","h":3,"a":2},{"player":"ikgajuichen","h":2,"a":1},{"player":"JanCandiano","h":3,"a":3},{"player":"JanvdL","h":2,"a":1},{"player":"John0504","h":4,"a":2},{"player":"JoycevanRiet","h":2,"a":1},{"player":"JRHJNB","h":3,"a":2},{"player":"Jules-","h":2,"a":1},{"player":"Katinkadeb","h":3,"a":2},{"player":"Keepertje","h":3,"a":2},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":3,"a":2},{"player":"Martijnmeestervoorspeller","h":2,"a":1},{"player":"MaureenGLA","h":3,"a":1},{"player":"Mauricio1980","h":1,"a":1},{"player":"Mobicontrol-van-Riet","h":2,"a":1},{"player":"Nelson1983","h":2,"a":0},{"player":"Norman.P","h":3,"a":2},{"player":"Oppie1978","h":2,"a":2},{"player":"Raymond de Haas","h":2,"a":1},{"player":"RoanTuit(messi)","h":3,"a":1},{"player":"Robertosxs","h":2,"a":2},{"player":"Rugnummer67","h":4,"a":1},{"player":"THEGOAT37","h":2,"a":2},{"player":"Trauner_in_Oranje","h":3,"a":1},{"player":"UedaTopscorer","h":2,"a":1},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":3,"a":1},{"player":"Wisselbeker","h":2,"a":1},{"player":"Wkkipje","h":2,"a":1}],"76":[{"player":"Wolsman","h":1,"a":2},{"player":"AlinevanVuuren","h":1,"a":3},{"player":"Bertjuh","h":2,"a":1},{"player":"Bo.","h":1,"a":2},{"player":"Bobcorn","h":1,"a":2},{"player":"BornBjorg","h":1,"a":2},{"player":"Brokkenpiloot","h":1,"a":0},{"player":"Christopheramboz","h":2,"a":1},{"player":"Cornelis2026","h":3,"a":0},{"player":"Crazy Dutchman","h":2,"a":2},{"player":"Daisy010","h":2,"a":1},{"player":"El-Toro-Loco","h":1,"a":2},{"player":"Erol_Ulu","h":1,"a":0},{"player":"Fseton","h":1,"a":2},{"player":"GeorgeV.","h":1,"a":2},{"player":"Givano","h":1,"a":2},{"player":"GonnyDebode","h":0,"a":1},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":1,"a":1},{"player":"JanCandiano","h":1,"a":3},{"player":"JanvdL","h":1,"a":3},{"player":"John0504","h":1,"a":3},{"player":"JoycevanRiet","h":1,"a":3},{"player":"JRHJNB","h":1,"a":2},{"player":"Jules-","h":1,"a":2},{"player":"Katinkadeb","h":2,"a":1},{"player":"Keepertje","h":1,"a":1},{"player":"Kleine Flo","h":1,"a":2},{"player":"Koninkie","h":2,"a":2},{"player":"Marlayne","h":1,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":2},{"player":"MaureenGLA","h":0,"a":2},{"player":"Mauricio1980","h":0,"a":2},{"player":"Mobicontrol-van-Riet","h":0,"a":2},{"player":"Nelson1983","h":1,"a":2},{"player":"Norman.P","h":0,"a":1},{"player":"Oppie1978","h":1,"a":2},{"player":"Raymond de Haas","h":1,"a":2},{"player":"Robertosxs","h":1,"a":2},{"player":"Rugnummer67","h":1,"a":3},{"player":"THEGOAT37","h":1,"a":1},{"player":"Trauner_in_Oranje","h":1,"a":3},{"player":"UedaTopscorer","h":1,"a":2},{"player":"WesleyMerwe","h":1,"a":2},{"player":"WillemCo","h":2,"a":3},{"player":"Wisselbeker","h":1,"a":2},{"player":"Wkkipje","h":1,"a":2}],"77":[{"player":"Wolsman","h":3,"a":0},{"player":"AlinevanVuuren","h":4,"a":2},{"player":"Bertjuh","h":3,"a":1},{"player":"Bo.","h":2,"a":0},{"player":"Bobcorn","h":3,"a":1},{"player":"BornBjorg","h":3,"a":0},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":2,"a":0},{"player":"Cornelis2026","h":3,"a":2},{"player":"Crazy Dutchman","h":3,"a":0},{"player":"Daisy010","h":3,"a":1},{"player":"El-Toro-Loco","h":2,"a":0},{"player":"Erol_Ulu","h":2,"a":0},{"player":"Fseton","h":4,"a":0},{"player":"GeorgeV.","h":3,"a":0},{"player":"Givano","h":3,"a":1},{"player":"GonnyDebode","h":3,"a":1},{"player":"Heer","h":2,"a":0},{"player":"ikgajuichen","h":2,"a":0},{"player":"JanCandiano","h":3,"a":1},{"player":"JanvdL","h":3,"a":0},{"player":"John0504","h":5,"a":1},{"player":"JoycevanRiet","h":4,"a":2},{"player":"JRHJNB","h":4,"a":1},{"player":"Jules-","h":2,"a":0},{"player":"Katinkadeb","h":4,"a":1},{"player":"Keepertje","h":2,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":3,"a":1},{"player":"Marlayne","h":3,"a":1},{"player":"Martijnmeestervoorspeller","h":3,"a":0},{"player":"MaureenGLA","h":3,"a":1},{"player":"Mauricio1980","h":4,"a":0},{"player":"Mobicontrol-van-Riet","h":3,"a":0},{"player":"Nelson1983","h":3,"a":0},{"player":"Norman.P","h":2,"a":0},{"player":"Oppie1978","h":3,"a":0},{"player":"Raymond de Haas","h":3,"a":1},{"player":"RoanTuit(messi)","h":4,"a":1},{"player":"Robertosxs","h":3,"a":1},{"player":"Rugnummer67","h":4,"a":2},{"player":"THEGOAT37","h":3,"a":0},{"player":"Trauner_in_Oranje","h":3,"a":1},{"player":"UedaTopscorer","h":3,"a":0},{"player":"WesleyMerwe","h":3,"a":0},{"player":"WillemCo","h":4,"a":1},{"player":"Wisselbeker","h":3,"a":1},{"player":"Wkkipje","h":4,"a":0}],"78":[{"player":"Wolsman","h":2,"a":1},{"player":"AlinevanVuuren","h":3,"a":2},{"player":"Bertjuh","h":2,"a":0},{"player":"Bo.","h":1,"a":1},{"player":"Bobcorn","h":2,"a":1},{"player":"BornBjorg","h":2,"a":1},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":2,"a":2},{"player":"Cornelis2026","h":2,"a":1},{"player":"Crazy Dutchman","h":1,"a":2},{"player":"Daisy010","h":3,"a":0},{"player":"El-Toro-Loco","h":1,"a":0},{"player":"Erol_Ulu","h":2,"a":1},{"player":"Fseton","h":1,"a":1},{"player":"GeorgeV.","h":1,"a":2},{"player":"Givano","h":2,"a":1},{"player":"GonnyDebode","h":2,"a":0},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":3,"a":1},{"player":"JanCandiano","h":3,"a":1},{"player":"JanvdL","h":2,"a":1},{"player":"John0504","h":2,"a":1},{"player":"JoycevanRiet","h":2,"a":2},{"player":"JRHJNB","h":2,"a":1},{"player":"Jules-","h":2,"a":1},{"player":"Katinkadeb","h":2,"a":1},{"player":"Keepertje","h":2,"a":1},{"player":"Kleine Flo","h":2,"a":0},{"player":"Koninkie","h":2,"a":0},{"player":"Marlayne","h":2,"a":2},{"player":"Martijnmeestervoorspeller","h":1,"a":2},{"player":"MaureenGLA","h":2,"a":0},{"player":"Mauricio1980","h":2,"a":1},{"player":"Mobicontrol-van-Riet","h":1,"a":0},{"player":"Nelson1983","h":2,"a":1},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":1,"a":0},{"player":"RoanTuit(messi)","h":0,"a":2},{"player":"Robertosxs","h":3,"a":1},{"player":"Rugnummer67","h":2,"a":2},{"player":"THEGOAT37","h":2,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":2,"a":0},{"player":"WesleyMerwe","h":1,"a":0},{"player":"WillemCo","h":1,"a":1},{"player":"Wisselbeker","h":3,"a":1},{"player":"Wkkipje","h":3,"a":1}]};
window.POOL_STANDINGS = {"A":[{"team":"Mexico","played":3,"w":3,"g":0,"v":0,"points":9,"saldo":6},{"team":"Zuid Afrika","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":-1},{"team":"Zuid Korea","played":3,"w":1,"g":0,"v":2,"points":3,"saldo":-1},{"team":"Tsjechië","played":3,"w":0,"g":1,"v":2,"points":1,"saldo":-4}],"B":[{"team":"Zwitserland","played":3,"w":2,"g":1,"v":0,"points":7,"saldo":4},{"team":"Canada","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":5},{"team":"Bosnië","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":-1},{"team":"Qatar","played":3,"w":0,"g":1,"v":2,"points":1,"saldo":-8}],"C":[{"team":"Brazilië","played":3,"w":2,"g":1,"v":0,"points":7,"saldo":6},{"team":"Marokko","played":3,"w":2,"g":1,"v":0,"points":7,"saldo":3},{"team":"Schotland","played":3,"w":1,"g":0,"v":2,"points":3,"saldo":-3},{"team":"Haiti","played":3,"w":0,"g":0,"v":3,"points":0,"saldo":-6}],"D":[{"team":"USA","played":3,"w":2,"g":0,"v":1,"points":6,"saldo":4},{"team":"Australië","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":0},{"team":"Paraguay","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":-2},{"team":"Turkije","played":3,"w":1,"g":0,"v":2,"points":3,"saldo":-2}],"E":[{"team":"Duitsland","played":3,"w":2,"g":0,"v":1,"points":6,"saldo":6},{"team":"Ivoorkust","played":3,"w":2,"g":0,"v":1,"points":6,"saldo":2},{"team":"Ecuador","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":0},{"team":"Curacao","played":3,"w":0,"g":1,"v":2,"points":1,"saldo":-8}],"F":[{"team":"Nederland","played":3,"w":2,"g":1,"v":0,"points":7,"saldo":6},{"team":"Japan","played":3,"w":1,"g":2,"v":0,"points":5,"saldo":4},{"team":"Zweden","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":0},{"team":"Tunesië","played":3,"w":0,"g":0,"v":3,"points":0,"saldo":-10}],"G":[{"team":"België","played":3,"w":1,"g":2,"v":0,"points":5,"saldo":4},{"team":"Egypte","played":3,"w":1,"g":2,"v":0,"points":5,"saldo":2},{"team":"Iran","played":3,"w":0,"g":3,"v":0,"points":3,"saldo":0},{"team":"Nieuw Zeeland","played":3,"w":0,"g":1,"v":2,"points":1,"saldo":-6}],"H":[{"team":"Spanje","played":3,"w":2,"g":1,"v":0,"points":7,"saldo":5},{"team":"Kaapverdie","played":3,"w":0,"g":3,"v":0,"points":3,"saldo":0},{"team":"Uruguay","played":3,"w":0,"g":2,"v":1,"points":2,"saldo":-1},{"team":"Saoedi-Arabie","played":3,"w":0,"g":2,"v":1,"points":2,"saldo":-4}],"I":[{"team":"Frankrijk","played":3,"w":3,"g":0,"v":0,"points":9,"saldo":8},{"team":"Noorwegen","played":3,"w":2,"g":0,"v":1,"points":6,"saldo":1},{"team":"Senegal","played":3,"w":1,"g":0,"v":2,"points":3,"saldo":2},{"team":"Irak","played":3,"w":0,"g":0,"v":3,"points":0,"saldo":-11}],"J":[{"team":"Argentinië","played":3,"w":3,"g":0,"v":0,"points":9,"saldo":7},{"team":"Oostenrijk","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":0},{"team":"Algerije","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":-2},{"team":"Jordanie","played":3,"w":0,"g":0,"v":3,"points":0,"saldo":-5}],"K":[{"team":"Colombia","played":3,"w":2,"g":1,"v":0,"points":7,"saldo":3},{"team":"Portugal","played":3,"w":1,"g":2,"v":0,"points":5,"saldo":5},{"team":"Congo","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":1},{"team":"Oezbekistan","played":3,"w":0,"g":0,"v":3,"points":0,"saldo":-9}],"L":[{"team":"Engeland","played":3,"w":2,"g":1,"v":0,"points":7,"saldo":4},{"team":"Kroatië","played":3,"w":2,"g":0,"v":1,"points":6,"saldo":0},{"team":"Ghana","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":0},{"team":"Panama","played":3,"w":0,"g":0,"v":3,"points":0,"saldo":-4}]};

// Puntenhistorie per speler (door de scraper bijgehouden, max 12 metingen) —
// voedt de mini-sparkline in de ranglijst. Groeit alleen als de punten wijzigen.
window.POOL_HISTORY = {"Wolsman":[2610,2685,2780,3055,3130,3225,3245,3435,5520,5720,5920,6015],"Kleine Flo":[2330,2425,2520,2720,2740,2835,2835,3025,5050,5250,5325,5525],"Bertjuh":[2510,2530,2625,2720,2740,2835,2835,2930,4635,4635,4730,4930],"Bobcorn":[2405,2500,2700,2870,2965,3040,3040,3230,4990,5190,5285,5380],"UedaTopscorer":[1850,1890,1985,2155,2155,2250,2250,2650,4290,4490,4690,4890],"Oppie1978":[2740,2935,3030,3305,3400,3475,3475,3645,5295,5495,5695,5790],"El-Toro-Loco":[2040,2215,2310,2480,2555,2630,2630,2905,4765,4965,5060,5155],"StudentjeIndicium":[2325,2420,2620,2715,2735,2830,2850,3040,4475,4475,4475,4475],"Mauricio1980":[2485,2560,2655,2825,2900,2975,2995,3290,5305,5400,5495,5590],"AlinevanVuuren":[2580,2620,2695,2865,2885,2980,2980,3020,4785,4880,4955,5030],"Wisselbeker":[2800,2820,2915,3210,3305,3380,3400,3570,5075,5275,5370,5445],"Roantuit":[0,0,0,0,0,0,0,0,0,0],"Robertosxs":[2580,2620,2820,2990,3010,3105,3125,3315,5650,5850,5945,6020],"Reboss":[2170,2265,2465,2740,2815,2910,2930,3120,4880,4880,4880,4880],"Mobicontrol":[315,315,515,515,590,610,610,760,760,780,800,920],"Brokkenpiloot":[2780,2820,2915,3190,3265,3360,3380,3495,5010,5030,5125,5125],"Katinkadeb":[2485,2505,2580,2695,2715,2810,2810,3085,4595,4595,4670,4765],"BornBjorg":[1710,1710,1710,1880,1975,2070,2090,2260,4420,4620,4820,4915],"Fseton":[2350,2445,2645,2760,2780,2875,2875,3095,4530,4730,4825,4825],"Raymond de Haas":[2420,2515,2715,2990,3085,3180,3180,3330,5105,5305,5400,5495],"ScheidsTon":[0,0,0,0,0,0,0,0,0,0],"THEGOAT37":[2620,2695,2895,3095,3115,3210,3230,3450,5775,5795,5995,6090],"WesleyMerwe":[2255,2370,2570,2770,2770,2865,2885,3180,5220,5420,5620,5715],"Daisy010":[2395,2570,2770,3045,3120,3215,3215,3365,5225,5225,5320,5415],"Erol_Ulu":[3040,3115,3210,3325,3420,3515,3515,3705,5495,5515,5610,5705],"Givano":[2800,2915,2990,3105,3200,3400,3400,3695,5485,5685,5780,5875],"VanderLans":[665,865,865,980,980,980,1000,1040,1040,1135,1430,1630],"Trauner_in_Oranje":[2360,2475,2675,2950,2970,3065,3065,3360,4840,4935,5030,5230],"Keepertje":[1695,1790,1790,1905,1925,2020,2120,2290,3495,3515,3590,3685],"John0504":[1975,1975,2070,2545,2545,2640,2640,2810,4690,4785,4860,4955],"Rugnummer67":[2435,2550,2625,2795,2815,2910,2910,3080,4575,4670,4745,4765],"Norman.P":[2665,2840,2935,3030,3125,3220,3240,3430,5315,5390,5485,5485],"StanleyBoessen":[2205,2425,2425,2500,2500,2595,2595,2690,4175,4175,4175,4175],"GonnyDebode":[1970,2045,2120,2235,2255,2330,2350,2645,4065,4140,4235,4435],"Marlayne":[1865,1885,1960,2055,2150,2245,2245,2465,4180,4200,4295,4315],"Jules-":[2225,2300,2500,2775,2870,2965,2985,3175,5455,5655,5750,5845],"Harro1":[2000,2020,2220,2610,2610,2705,2725,2820,4865,4865,4865,4865],"JRHJNB":[2440,2460,2535,2735,2810,2905,2925,3075,4840,5040,5115,5210],"JoycevanRiet":[2045,2085,2160,2330,2405,2500,2520,2595,4255,4350,4425,4445],"Heer":[2815,2835,2835,3235,3235,3330,3350,3645,5415,5435,5530,5530],"Pepijndh":[0,0,0,0,0,0,0,0,0,0,0,0],"Cornelis2026":[2030,2250,2325,2420,2515,2590,2610,2685,4145,4145,4240,4335],"Wkkipje":[2185,2185,2205,2680,2680,2775,2795,2890,4535,4735,4830,4905],"MaureenGLA":[2335,2375,2450,2725,2745,2820,2840,2955,4630,4725,4820,5020],"GeorgeV.":[2785,2905,3000,3115,3135,3230,3230,3325,5445,5645,5845,5845],"ikgajuichen":[2630,2705,2800,2915,2990,3085,3085,3255,4810,4830,4925,5000],"JanCandiano":[2470,2565,2660,2830,2925,3000,3020,3315,4915,5010,5105,5180],"Bo.":[2305,2345,2440,2640,2735,2830,2850,3020,5000,5200,5295,5295],"Koninkie":[2655,2750,2950,3225,3300,3395,3415,3635,5695,5715,5810,6010],"Martijnmeestervoorspeller":[2765,2805,2880,3050,3145,3220,3220,3410,5205,5225,5425,5425],"Crazy Dutchman":[3095,3135,3210,3400,3495,3570,3570,3570,5150,5170,5370,5370],"RoanTuit(messi)":[1690,1890,2090,2185,2280,2280,2280,2575,4080,4080,4155,4155],"Christopheramboz":[2550,2645,2720,2940,3035,3130,3130,3300,4915,4915,5010,5030],"Frenk010fr":[0,0,0,0,0,0,0,0,0,0,0,0],"WillemCo":[2085,2160,2235,2510,2585,2680,2700,2815,4145,4220,4295,4295],"Nelson1983":[1750,1845,1940,2055,2150,2245,2245,2340,4035,4235,4435,4530],"Mobicontrol-Xavier":[2350,2445,2560,2655,2675,2850,2945,3040,3135,3230,3250,3650],"JanvdL":[2810,3030,3230,3325,3400,3475,3495,3665,5395,5490,5690,5785],"Mobicontrol-van-Riet":[5870,5965,6165,6260]};

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
window.POOL_HENK = {"generatedAt":"2026-07-01","playerTakes":{"Mobicontrol-van-Riet":"Met slechts één exacte uitslag is die koppositie puur geluk, geen inzicht!","Robertosxs":"Met 3345 trendpunten stil blijven staan? Er is vast iets mis met je voorspellingen.","THEGOAT37":"Waan jezelf maar geen GOAT met één exact resultaat; dat is eerder een schaap.","Wolsman":"Met al die trendpunten kun je misschien wol voorspellen, maar geen voetbal!","Koninkie":"Dit koninkrijk blijft stilstaand, tijd om je eigen voorspellingen te herschrijven.","Givano":"Behoorlijk wat trendpunten, maar je blijft hangen als een schimmel op de zesde plek.","Jules-":"Meer punten dan een potje voetbal, maar je blijft als een betonnen paal stil.","GeorgeV.":"Met een streak van 7 toch ingetogen blijven? Een marathon zit blijkbaar niet in je bloed.","Erol_Ulu":"Je laat punten liggen als een beginnende amateur met je 1-1 gok op Kroatië-Ghana.","Oppie1978":"Met eenzelfde score als JanvdL verschuil je jezelf maar wat graag onder hem.","JanvdL":"Met twee exacte uitslagen toch niet vooruit te branden, heb je je autoband opgeblazen?","Heer":"Heer van stilstand? Met 5435 punten lijkt het eerder alsof je in een modderpoel stond.","WesleyMerwe":"Kampioen in het niet bewegen, zelfs een schildpad is sneller dan jij!","Mauricio1980":"Je hebt meer trendpunten dan een loterij, maar komt nog steeds geen stap vooruit.","Norman.P":"Je voorspellingen zijn zo voorspelbaar als het weer in Nederland: onbetrouwbaar.","Raymond de Haas":"Met die punten zit je gevangen in een eindeloze ronde van een slecht pokergezicht.","Wisselbeker":"Met je 2590 trendpunten blijf je wisselbekeren in je eigen vicieuze cirkel.","Kleine Flo":"Grote dromen, maar kleine stappen; je ligt vast in een plas kindervoetbal.","Daisy010":"Hoge verwachtingen, maar je voorspellingen zijn net zo vakkundig als een natte krant.","Martijnmeestervoorspeller":"De grootste voorspeller, maar op plek 19: je thermometer is defect.","Bo.":"Je voorspellingen zijn net zo trefzeker als een pijl en boog zonder pees.","Bobcorn":"Met je voelbare aanwezigheid op de 22e plek, ben je een popcornkorrel zonder plof.","Crazy Dutchman":"Te gek voor woorden, maar met je 5170 punten ben je slechts een zotte dwaas.","JRHJNB":"Zelfs je laatste exact juiste gok heeft geen enkele impact gehad op je dalende trend.","Brokkenpiloot":"Niet alleen je naam is een crash, ook je voorspellingen zijn een brokkenpiloot.","JanCandiano":"Met 2615 trendpunten blijf je net zo stil als een standbeeld in een stadstuin.","El-Toro-Loco":"Je was een dolle stier, maar met je bewegingen lijk je eerder op een kalfje.","Trauner_in_Oranje":"Je voorspellingen zijn als de KNVB-trainingspakken: uit de mode en voorspelbaar.","Christopheramboz":"Met al die gemiste kansen voelt het alsof je Christopher Columbus zonder kompas bent.","AlinevanVuuren":"Met je trend ben je eerder een plank dan een brug naar succes.","Reboss":"Je trendpunten liggen te slapen zoals je voorspellingen in een wankele stoel.","Harro1":"Met drie exacte uitslagen dat is een prestatie, maar nog steeds een verloren zaak.","ikgajuichen":"Zelfs juichen is niet voldoende om uit je stilte te komen.","John0504":"Je preciesheid is scherper dan een bot mes; teleurgesteld maar toch blij alsof je een munt hebt gevonden.","Wkkipje":"Jouw voorspellingen fladderen rond als kip zonder kop: geen richting, geen geluk.","Fseton":"Als je ogen net zo scherp waren als je voorspellingen, zou je een bril op maat nodig hebben.","MaureenGLA":"Met je 4725 punten ben je een Net6 dramedie: niet echt een succes.","Rugnummer67":"Met al je gedraaide voorspellingen is het duidelijk dat je je rugnummer niet aankan.","Bertjuh":"Je blijft maar draaikonten met je juiste scores; je bent de school van de non-aanval.","BornBjorg":"Met een streak die langer is dan je trend zeg je hallo tegen de ondergang.","Katinkadeb":"Je lijkt vast te zitten in een glibberige modderpoel, met je exacte 1-1 gok op België.","UedaTopscorer":"Met zo'n score kun je slechts dromen van een topscorer bloedbad.","StudentjeIndicium":"Je student-zijn leidt slechts tot middelmatige resultaten; tijd om extra college te volgen.","JoycevanRiet":"Je stilstaande positie en schamele trend maken je de perfecte wandelaar zonder pad.","Nelson1983":"Met 2705 trendpunten blijf je net zo vast als het jaar waarin je gedachten vastzitten.","WillemCo":"Je staat als een verloren ridder in de mist; je zwaarden zijn bot en je voorspellingen nog erger.","Marlayne":"Stilstand is een kunst, en jij bent dan ook een mislukte schilder.","StanleyBoessen":"Met een record van 4175 punten blijf je wankelen als een lamme giraffe.","Cornelis2026":"Een baken van middelmatigheid met al die nietszeggende trend op 49!","GonnyDebode":"De voorspellingen liggen je zo goed als een kitpas bij een wasbeurt.","RoanTuit(messi)":"Met je naam swingend, maar met je score nog steeds als een strijkplank.","Keepertje":"Met een lage score blijf je vast als de keeper die de bal uit zijn eigen doel moet halen."},"monoloog":"Kijk eens aan, Mobicontrol-van-Riet blijft strak op de ijzige troon zitten met 5965 punten, maar met die magere trendpunten van 95 zou ik maar oppassen voor een boze Jules-. Die kijkt namelijk omhoog vanaf plek 7 met z'n 5655 punten en meer pit in z'n voorspellingen. Ondertussen mag Cornelis2026 zich afvragen of hij ooit uit die 49e plek zal ontsnappen, of is hij daar kwa trendpunten nog aan het drempelen met Congo-Oezbekistan als zijn Waterloo?","hotTakes":["UedaTopscorer denkt dat Nieuw-Zeeland en België het wel op een gezellig 1-1'tje konden houden. Krijgt net zoveel punten voor het 'niet-horeca-prijzen-voorspelspel'.","Fseton, als uitblinker met een enkele juiste exacte uitslag, is je enige heldendaad Algerije-Oostenrijk? Dat zegt al genoeg - welkom in de club van voorspelbare flaters.","StanleyBoessen wil zichzelf blijkbaar voor straf in de onderste regionen houden met een 2-2 voorspelling voor Nieuw-Zeeland tegen België. Was een zwart gat geen optie?","Erol_Ulu, waarom ben je in vredesnaam verbaasd dat je met een 1-1 gokje op Kroatië-Ghana niet verder komt? Zie je nou echt die Kroaten voor je die gaan zitten voor een gelijkspelletje?","Wisselbeker, met een puntentotaal van 5275 moet je je toch afvragen of die beker ooit gevuld zal raken, of blijf je hem gewoon wisselen en er niks in doen?"],"dailyTarget":{"name":"Bobcorn","lines":["Ach, Bobcorn, je bent nog steeds zo roerloos als een zak popcorn in een lege magnetron – dat stilstaande van je, dat is talent!","Met maar één exact voorspelde uitslag moet je misschien overwegen om een dobbelsteen te gebruiken in plaats van je kristallen bol, want die voorspellingen van jou zijn net zo scherp als een boterham zonder boter.","Je grofste misser bij Congo-Oezbekistan laat zien dat je in de wereld van voorspellingen misschien beter je horizon kunt verbreden — een gok van 1-1 terwijl het 3-1 werd? Heb je de verkeerde wedstrijd gekeken of was je tv-kabel uitgevallen?"]},"matchTakes":{"64":"Egypte tegen Iran was voor sommigen een speld in een hooiberg, maar Wolsman en zijn crew zagen de gelijkmaker aankomen.","65":"Nieuw-Zeeland veegde zich de zege uit dromenland, maar Rugnummer67 met zijn absurde gok verdiende de rode kaart van deze wedstrijd.","66":"Panama en Engeland gaven geen verrassingen weg, maar toch deden Wolsman en vrienden dapper hun huiswerk goed.","67":"WillemCo voorspelde een Ghanaanse wervelwind, maar kreeg in plaats daarvan een Kroatische tik te verduren.","68":"Colombia en Portugal leverden een schaakspel op het veld, naar het voorbeeld van vrijwel niemand in de poule.","69":"Harro1 surft als enige op de Congolese golf, terwijl AlinevanVuuren pijnlijk op de Oezbeekse kust strandde.","70":"Algerije en Oostenrijk deelden de punten, tot ergernis van JanvdL die meedeed aan het onvoorzichtige gokspel.","71":"Iedereen zag de Argentijnse bliksem inslaan, en Bertjuh zat spot on met zijn voorgevoel."},"targetHistory":["Keepertje","Norman.P","Erol_Ulu","UedaTopscorer","StanleyBoessen","Marlayne","Bertjuh","Fseton","GonnyDebode","RoanTuit(messi)","Cornelis2026","JanCandiano","Bobcorn"]};

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
