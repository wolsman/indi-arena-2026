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
  syncedAt: "2026-07-01T23:31:25.269Z",
  firstMatchAt: "2026-06-11T21:00:00+02:00",
  predictionsPublic: false,
  // Wordt true zodra de scraper echte punten ziet — de ranglijst
  // schakelt dan automatisch om van invulstatus naar punten.
  pointsAvailable: true
};

// points/prevPos worden door de scraper gevuld zodra het toernooi loopt.
window.POOL_PLAYERS = [
  { name: "Wolsman", matches: 104, winner: true, topscorer: true, paid: true, points: 6185, prevPos: 5 },
  { name: "Kleine Flo", matches: 88, winner: true, topscorer: true, paid: true, points: 5800, prevPos: 13 },
  { name: "Bertjuh", matches: 88, winner: true, topscorer: true, paid: true, points: 5100, prevPos: 35 },
  { name: "Bobcorn", matches: 91, winner: true, topscorer: true, paid: true, points: 5475, prevPos: 22 },
  { name: "UedaTopscorer", matches: 88, winner: true, topscorer: true, paid: true, points: 5060, prevPos: 37 },
  { name: "Oppie1978", matches: 87, winner: true, topscorer: true, paid: true, points: 6010, prevPos: 8 },
  { name: "El-Toro-Loco", matches: 82, winner: false, topscorer: false, paid: true, points: 5305, prevPos: 28 },
  { name: "StudentjeIndicium", matches: 72, winner: true, topscorer: true, paid: true, points: 4475, prevPos: 48 },
  { name: "Mauricio1980", matches: 88, winner: true, topscorer: true, paid: true, points: 5665, prevPos: 16 },
  { name: "AlinevanVuuren", matches: 88, winner: true, topscorer: true, paid: true, points: 5125, prevPos: 32 },
  { name: "Wisselbeker", matches: 88, winner: true, topscorer: true, paid: true, points: 5720, prevPos: 14 },
  { name: "Robertosxs", matches: 104, winner: true, topscorer: true, paid: true, points: 6190, prevPos: 4 },
  { name: "Reboss", matches: 84, winner: true, topscorer: true, paid: true, points: 5050, prevPos: 38 },
  { name: "Mobicontrol-van-Riet", matches: 91, winner: true, topscorer: true, paid: true, points: 6430, prevPos: 1 },
  { name: "Brokkenpiloot", matches: 88, winner: true, topscorer: true, paid: true, points: 5325, prevPos: 26 },
  { name: "Katinkadeb", matches: 88, winner: true, topscorer: true, paid: true, points: 4880, prevPos: 40 },
  { name: "BornBjorg", matches: 71, winner: true, topscorer: true, paid: true, points: 5065, prevPos: 36 },
  { name: "Fseton", matches: 88, winner: true, topscorer: true, paid: true, points: 5045, prevPos: 39 },
  { name: "Raymond de Haas", matches: 88, winner: true, topscorer: true, paid: true, points: 5665, prevPos: 16 },
  { name: "THEGOAT37", matches: 88, winner: true, topscorer: true, paid: true, points: 6290, prevPos: 2 },
  { name: "WesleyMerwe", matches: 87, winner: true, topscorer: true, paid: true, points: 5810, prevPos: 12 },
  { name: "Daisy010", matches: 87, winner: true, topscorer: true, paid: true, points: 5690, prevPos: 15 },
  { name: "Erol_Ulu", matches: 88, winner: true, topscorer: true, paid: true, points: 5875, prevPos: 10 },
  { name: "Givano", matches: 88, winner: true, topscorer: true, paid: true, points: 6045, prevPos: 7 },
  { name: "JanvdL", matches: 87, winner: true, topscorer: true, paid: true, points: 5860, prevPos: 11 },
  { name: "Trauner_in_Oranje", matches: 82, winner: true, topscorer: true, paid: true, points: 5325, prevPos: 26 },
  { name: "Keepertje", matches: 91, winner: true, topscorer: true, paid: true, points: 3780, prevPos: 52 },
  { name: "John0504", matches: 88, winner: true, topscorer: true, paid: true, points: 5145, prevPos: 31 },
  { name: "Rugnummer67", matches: 84, winner: true, topscorer: true, paid: true, points: 4860, prevPos: 42 },
  { name: "Norman.P", matches: 86, winner: true, topscorer: true, paid: true, points: 5580, prevPos: 20 },
  { name: "StanleyBoessen", matches: 72, winner: false, topscorer: false, paid: true, points: 4175, prevPos: 50 },
  { name: "GonnyDebode", matches: 92, winner: true, topscorer: true, paid: true, points: 4635, prevPos: 44 },
  { name: "Marlayne", matches: 88, winner: true, topscorer: true, paid: true, points: 4410, prevPos: 49 },
  { name: "Jules-", matches: 91, winner: true, topscorer: true, paid: true, points: 5995, prevPos: 9 },
  { name: "Harro1", matches: 72, winner: true, topscorer: true, paid: true, points: 4865, prevPos: 41 },
  { name: "JRHJNB", matches: 88, winner: true, topscorer: true, paid: true, points: 5430, prevPos: 25 },
  { name: "JoycevanRiet", matches: 91, winner: true, topscorer: true, paid: true, points: 4595, prevPos: 45 },
  { name: "Heer", matches: 87, winner: true, topscorer: true, paid: true, points: 5550, prevPos: 21 },
  { name: "Cornelis2026", matches: 87, winner: true, topscorer: true, paid: true, points: 4505, prevPos: 47 },
  { name: "Wkkipje", matches: 82, winner: true, topscorer: true, paid: true, points: 5125, prevPos: 32 },
  { name: "MaureenGLA", matches: 88, winner: true, topscorer: true, paid: true, points: 5170, prevPos: 29 },
  { name: "GeorgeV.", matches: 83, winner: true, topscorer: true, paid: true, points: 6065, prevPos: 6 },
  { name: "ikgajuichen", matches: 104, winner: true, topscorer: true, paid: true, points: 5170, prevPos: 29 },
  { name: "JanCandiano", matches: 92, winner: true, topscorer: true, paid: true, points: 5475, prevPos: 22 },
  { name: "Bo.", matches: 86, winner: true, topscorer: true, paid: true, points: 5465, prevPos: 24 },
  { name: "Koninkie", matches: 92, winner: true, topscorer: true, paid: true, points: 6210, prevPos: 3 },
  { name: "Martijnmeestervoorspeller", matches: 87, winner: true, topscorer: true, paid: true, points: 5645, prevPos: 18 },
  { name: "Crazy Dutchman", matches: 86, winner: true, topscorer: true, paid: true, points: 5590, prevPos: 19 },
  { name: "RoanTuit(messi)", matches: 61, winner: true, topscorer: true, paid: true, points: 4155, prevPos: 51 },
  { name: "Christopheramboz", matches: 88, winner: true, topscorer: true, paid: true, points: 5125, prevPos: 32 },
  { name: "WillemCo", matches: 81, winner: false, topscorer: false, paid: true, points: 4515, prevPos: 46 },
  { name: "Nelson1983", matches: 75, winner: false, topscorer: false, paid: true, points: 4805, prevPos: 43 }
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
window.POOL_RESULTS = {"mexico|zuidafrika":"2-0","zuidkorea|tsjechie":"2-1","canada|bosnie":"1-1","usa|paraguay":"4-1","qatar|zwitserland":"1-1","brazilie|marokko":"1-1","haiti|schotland":"0-1","australie|turkije":"2-0","duitsland|curacao":"7-1","nederland|japan":"2-2","ivoorkust|ecuador":"1-0","zweden|tunesie":"5-1","spanje|kaapverdie":"0-0","belgie|egypte":"1-1","saoediarabie|uruguay":"1-1","iran|nieuwzeeland":"2-2","frankrijk|senegal":"3-1","irak|noorwegen":"1-4","argentinie|algerije":"3-0","oostenrijk|jordanie":"3-1","portugal|congo":"1-1","engeland|kroatie":"4-2","ghana|panama":"1-0","oezbekistan|colombia":"1-3","tsjechie|zuidafrika":"1-1","zwitserland|bosnie":"4-1","canada|qatar":"6-0","mexico|zuidkorea":"1-0","usa|australie":"2-0","schotland|marokko":"0-1","brazilie|haiti":"3-0","turkije|paraguay":"0-1","nederland|zweden":"5-1","duitsland|ivoorkust":"2-1","ecuador|curacao":"0-0","tunesie|japan":"0-4","spanje|saoediarabie":"4-0","belgie|iran":"0-0","uruguay|kaapverdie":"2-2","nieuwzeeland|egypte":"1-3","argentinie|oostenrijk":"2-0","frankrijk|irak":"3-0","noorwegen|senegal":"3-2","jordanie|algerije":"1-2","portugal|oezbekistan":"5-0","engeland|ghana":"0-0","panama|kroatie":"0-1","colombia|congo":"1-0","zwitserland|canada":"2-1","bosnie|qatar":"3-1","schotland|brazilie":"0-3","marokko|haiti":"4-2","tsjechie|mexico":"0-3","zuidafrika|zuidkorea":"1-0","curacao|ivoorkust":"0-2","ecuador|duitsland":"2-1","japan|zweden":"1-1","tunesie|nederland":"1-3","turkije|usa":"3-2","paraguay|australie":"0-0","noorwegen|frankrijk":"1-4","senegal|irak":"5-0","kaapverdie|saoediarabie":"0-0","uruguay|spanje":"0-1","egypte|iran":"1-1","nieuwzeeland|belgie":"1-5","panama|engeland":"0-2","kroatie|ghana":"2-1","colombia|portugal":"0-0","congo|oezbekistan":"3-1","algerije|oostenrijk":"3-3","jordanie|argentinie":"1-3","zuidafrika|canada":"0-1","brazilie|japan":"2-1","duitsland|paraguay":"1-1","nederland|marokko":"1-1","ivoorkust|noorwegen":"1-2","frankrijk|zweden":"3-0","mexico|ecuador":"2-0","engeland|congo":"2-1","belgie|senegal":"3-2"};
// Voorspellingen per gestarte wedstrijd (scraper). Sleutel = kalender-index
// (POOL_CALENDAR[i]); waarde = [{player, h, a}].
window.POOL_PREDICTIONS = {"67":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":1,"a":1},{"player":"Bertjuh","h":2,"a":1},{"player":"Bo.","h":2,"a":1},{"player":"Bobcorn","h":2,"a":1},{"player":"BornBjorg","h":2,"a":1},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":2,"a":2},{"player":"Cornelis2026","h":2,"a":1},{"player":"Crazy Dutchman","h":1,"a":0},{"player":"Daisy010","h":2,"a":1},{"player":"El-Toro-Loco","h":1,"a":0},{"player":"Erol_Ulu","h":1,"a":1},{"player":"Fseton","h":2,"a":0},{"player":"GeorgeV.","h":2,"a":1},{"player":"Givano","h":3,"a":1},{"player":"GonnyDebode","h":5,"a":1},{"player":"Harro1","h":2,"a":1},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":1,"a":2},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":1,"a":1},{"player":"John0504","h":2,"a":1},{"player":"JoycevanRiet","h":1,"a":1},{"player":"JRHJNB","h":2,"a":1},{"player":"Jules-","h":2,"a":1},{"player":"Katinkadeb","h":2,"a":1},{"player":"Keepertje","h":1,"a":2},{"player":"Kleine Flo","h":1,"a":1},{"player":"Koninkie","h":1,"a":0},{"player":"Marlayne","h":2,"a":2},{"player":"Martijnmeestervoorspeller","h":1,"a":0},{"player":"MaureenGLA","h":2,"a":0},{"player":"Mauricio1980","h":0,"a":1},{"player":"Mobicontrol-van-Riet","h":0,"a":0},{"player":"Nelson1983","h":2,"a":1},{"player":"Norman.P","h":2,"a":0},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":1,"a":1},{"player":"Reboss","h":2,"a":0},{"player":"Robertosxs","h":2,"a":1},{"player":"Rugnummer67","h":2,"a":1},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":1,"a":1},{"player":"THEGOAT37","h":1,"a":0},{"player":"Trauner_in_Oranje","h":1,"a":2},{"player":"UedaTopscorer","h":1,"a":0},{"player":"WesleyMerwe","h":1,"a":0},{"player":"WillemCo","h":1,"a":3},{"player":"Wisselbeker","h":2,"a":1},{"player":"Wkkipje","h":1,"a":1}],"68":[{"player":"Wolsman","h":1,"a":2},{"player":"AlinevanVuuren","h":0,"a":3},{"player":"Bertjuh","h":1,"a":3},{"player":"Bo.","h":1,"a":3},{"player":"Bobcorn","h":2,"a":3},{"player":"BornBjorg","h":1,"a":1},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":1,"a":2},{"player":"Cornelis2026","h":0,"a":2},{"player":"Crazy Dutchman","h":0,"a":2},{"player":"Daisy010","h":1,"a":2},{"player":"El-Toro-Loco","h":1,"a":1},{"player":"Erol_Ulu","h":1,"a":1},{"player":"Fseton","h":1,"a":3},{"player":"GeorgeV.","h":1,"a":1},{"player":"Givano","h":1,"a":1},{"player":"GonnyDebode","h":2,"a":2},{"player":"Harro1","h":0,"a":2},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":2,"a":2},{"player":"JanCandiano","h":1,"a":2},{"player":"JanvdL","h":1,"a":2},{"player":"John0504","h":1,"a":2},{"player":"JoycevanRiet","h":1,"a":3},{"player":"JRHJNB","h":1,"a":1},{"player":"Jules-","h":1,"a":2},{"player":"Katinkadeb","h":1,"a":3},{"player":"Keepertje","h":2,"a":1},{"player":"Kleine Flo","h":1,"a":1},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":2,"a":3},{"player":"Martijnmeestervoorspeller","h":1,"a":2},{"player":"MaureenGLA","h":0,"a":2},{"player":"Mauricio1980","h":0,"a":2},{"player":"Mobicontrol-van-Riet","h":1,"a":1},{"player":"Nelson1983","h":0,"a":3},{"player":"Norman.P","h":0,"a":2},{"player":"Oppie1978","h":1,"a":2},{"player":"Raymond de Haas","h":1,"a":2},{"player":"Reboss","h":1,"a":2},{"player":"RoanTuit(messi)","h":1,"a":3},{"player":"Robertosxs","h":1,"a":2},{"player":"Rugnummer67","h":2,"a":2},{"player":"StanleyBoessen","h":0,"a":1},{"player":"StudentjeIndicium","h":1,"a":2},{"player":"THEGOAT37","h":0,"a":1},{"player":"Trauner_in_Oranje","h":1,"a":1},{"player":"UedaTopscorer","h":0,"a":2},{"player":"WesleyMerwe","h":0,"a":2},{"player":"WillemCo","h":2,"a":2},{"player":"Wisselbeker","h":1,"a":4},{"player":"Wkkipje","h":0,"a":3}],"69":[{"player":"Wolsman","h":1,"a":1},{"player":"AlinevanVuuren","h":1,"a":2},{"player":"Bertjuh","h":1,"a":1},{"player":"Bo.","h":0,"a":1},{"player":"Bobcorn","h":1,"a":1},{"player":"BornBjorg","h":1,"a":0},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":2,"a":1},{"player":"Cornelis2026","h":1,"a":1},{"player":"Crazy Dutchman","h":1,"a":1},{"player":"Daisy010","h":1,"a":0},{"player":"El-Toro-Loco","h":1,"a":0},{"player":"Erol_Ulu","h":1,"a":0},{"player":"Fseton","h":2,"a":0},{"player":"GeorgeV.","h":1,"a":0},{"player":"Givano","h":2,"a":0},{"player":"GonnyDebode","h":0,"a":0},{"player":"Harro1","h":3,"a":1},{"player":"Heer","h":2,"a":1},{"player":"ikgajuichen","h":0,"a":0},{"player":"JanCandiano","h":1,"a":1},{"player":"JanvdL","h":1,"a":0},{"player":"John0504","h":0,"a":0},{"player":"JoycevanRiet","h":1,"a":1},{"player":"JRHJNB","h":1,"a":1},{"player":"Jules-","h":1,"a":1},{"player":"Katinkadeb","h":2,"a":0},{"player":"Keepertje","h":2,"a":1},{"player":"Kleine Flo","h":1,"a":1},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":1,"a":2},{"player":"Martijnmeestervoorspeller","h":1,"a":1},{"player":"MaureenGLA","h":1,"a":1},{"player":"Mauricio1980","h":1,"a":0},{"player":"Mobicontrol-van-Riet","h":2,"a":0},{"player":"Norman.P","h":1,"a":1},{"player":"Oppie1978","h":2,"a":0},{"player":"Raymond de Haas","h":2,"a":1},{"player":"Reboss","h":1,"a":1},{"player":"RoanTuit(messi)","h":2,"a":0},{"player":"Robertosxs","h":0,"a":0},{"player":"Rugnummer67","h":2,"a":1},{"player":"StanleyBoessen","h":1,"a":1},{"player":"StudentjeIndicium","h":2,"a":0},{"player":"THEGOAT37","h":1,"a":0},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":0,"a":0},{"player":"WesleyMerwe","h":2,"a":1},{"player":"WillemCo","h":2,"a":0},{"player":"Wisselbeker","h":2,"a":1},{"player":"Wkkipje","h":2,"a":2}],"70":[{"player":"Wolsman","h":0,"a":1},{"player":"AlinevanVuuren","h":0,"a":1},{"player":"Bertjuh","h":1,"a":2},{"player":"Bo.","h":1,"a":1},{"player":"Bobcorn","h":1,"a":1},{"player":"BornBjorg","h":1,"a":1},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":2,"a":1},{"player":"Cornelis2026","h":1,"a":2},{"player":"Crazy Dutchman","h":2,"a":2},{"player":"Daisy010","h":1,"a":3},{"player":"El-Toro-Loco","h":1,"a":2},{"player":"Erol_Ulu","h":1,"a":1},{"player":"Fseton","h":0,"a":2},{"player":"GeorgeV.","h":1,"a":1},{"player":"Givano","h":1,"a":2},{"player":"GonnyDebode","h":1,"a":2},{"player":"Harro1","h":1,"a":1},{"player":"Heer","h":0,"a":1},{"player":"ikgajuichen","h":1,"a":2},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":0,"a":3},{"player":"John0504","h":1,"a":1},{"player":"JoycevanRiet","h":2,"a":3},{"player":"JRHJNB","h":2,"a":2},{"player":"Jules-","h":1,"a":2},{"player":"Katinkadeb","h":1,"a":2},{"player":"Keepertje","h":1,"a":2},{"player":"Kleine Flo","h":1,"a":2},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":0,"a":2},{"player":"Martijnmeestervoorspeller","h":2,"a":2},{"player":"MaureenGLA","h":2,"a":1},{"player":"Mauricio1980","h":0,"a":1},{"player":"Mobicontrol-van-Riet","h":1,"a":1},{"player":"Norman.P","h":0,"a":2},{"player":"Oppie1978","h":2,"a":2},{"player":"Raymond de Haas","h":1,"a":2},{"player":"Reboss","h":1,"a":1},{"player":"RoanTuit(messi)","h":2,"a":2},{"player":"Robertosxs","h":1,"a":1},{"player":"Rugnummer67","h":2,"a":1},{"player":"StanleyBoessen","h":0,"a":0},{"player":"StudentjeIndicium","h":3,"a":2},{"player":"THEGOAT37","h":1,"a":2},{"player":"Trauner_in_Oranje","h":2,"a":1},{"player":"UedaTopscorer","h":1,"a":1},{"player":"WesleyMerwe","h":1,"a":2},{"player":"WillemCo","h":1,"a":3},{"player":"Wisselbeker","h":1,"a":1},{"player":"Wkkipje","h":2,"a":1}],"71":[{"player":"Wolsman","h":0,"a":3},{"player":"AlinevanVuuren","h":1,"a":3},{"player":"Bertjuh","h":1,"a":3},{"player":"Bo.","h":0,"a":3},{"player":"Bobcorn","h":0,"a":4},{"player":"BornBjorg","h":0,"a":4},{"player":"Brokkenpiloot","h":0,"a":3},{"player":"Christopheramboz","h":0,"a":3},{"player":"Cornelis2026","h":1,"a":5},{"player":"Crazy Dutchman","h":0,"a":3},{"player":"Daisy010","h":0,"a":2},{"player":"El-Toro-Loco","h":0,"a":5},{"player":"Erol_Ulu","h":0,"a":2},{"player":"Fseton","h":0,"a":2},{"player":"GeorgeV.","h":0,"a":2},{"player":"Givano","h":0,"a":4},{"player":"GonnyDebode","h":0,"a":6},{"player":"Harro1","h":0,"a":3},{"player":"Heer","h":0,"a":3},{"player":"ikgajuichen","h":0,"a":4},{"player":"JanCandiano","h":0,"a":3},{"player":"JanvdL","h":0,"a":2},{"player":"John0504","h":1,"a":5},{"player":"JoycevanRiet","h":0,"a":3},{"player":"JRHJNB","h":0,"a":3},{"player":"Jules-","h":0,"a":3},{"player":"Katinkadeb","h":0,"a":3},{"player":"Keepertje","h":0,"a":3},{"player":"Kleine Flo","h":0,"a":3},{"player":"Koninkie","h":0,"a":3},{"player":"Marlayne","h":1,"a":4},{"player":"Martijnmeestervoorspeller","h":0,"a":3},{"player":"MaureenGLA","h":1,"a":3},{"player":"Mauricio1980","h":0,"a":2},{"player":"Mobicontrol-van-Riet","h":0,"a":2},{"player":"Norman.P","h":0,"a":4},{"player":"Oppie1978","h":0,"a":5},{"player":"Raymond de Haas","h":0,"a":3},{"player":"Reboss","h":0,"a":3},{"player":"RoanTuit(messi)","h":0,"a":3},{"player":"Robertosxs","h":1,"a":3},{"player":"Rugnummer67","h":0,"a":3},{"player":"StanleyBoessen","h":1,"a":2},{"player":"StudentjeIndicium","h":0,"a":4},{"player":"THEGOAT37","h":0,"a":3},{"player":"Trauner_in_Oranje","h":0,"a":4},{"player":"UedaTopscorer","h":0,"a":3},{"player":"WesleyMerwe","h":0,"a":3},{"player":"WillemCo","h":0,"a":4},{"player":"Wisselbeker","h":0,"a":4},{"player":"Wkkipje","h":1,"a":4}],"72":[{"player":"Wolsman","h":1,"a":2},{"player":"AlinevanVuuren","h":1,"a":3},{"player":"Bertjuh","h":1,"a":2},{"player":"Bo.","h":1,"a":2},{"player":"Bobcorn","h":1,"a":2},{"player":"BornBjorg","h":2,"a":2},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":1,"a":1},{"player":"El-Toro-Loco","h":0,"a":1},{"player":"Erol_Ulu","h":1,"a":2},{"player":"Fseton","h":1,"a":1},{"player":"GeorgeV.","h":1,"a":3},{"player":"Givano","h":0,"a":2},{"player":"GonnyDebode","h":0,"a":2},{"player":"ikgajuichen","h":2,"a":2},{"player":"JanCandiano","h":1,"a":2},{"player":"JanvdL","h":2,"a":2},{"player":"John0504","h":2,"a":3},{"player":"JRHJNB","h":1,"a":3},{"player":"Jules-","h":1,"a":2},{"player":"Katinkadeb","h":0,"a":2},{"player":"Keepertje","h":1,"a":1},{"player":"Kleine Flo","h":1,"a":2},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":1,"a":3},{"player":"MaureenGLA","h":0,"a":2},{"player":"Mauricio1980","h":0,"a":3},{"player":"Mobicontrol-van-Riet","h":0,"a":2},{"player":"Nelson1983","h":2,"a":1},{"player":"Norman.P","h":0,"a":1},{"player":"Oppie1978","h":1,"a":1},{"player":"Raymond de Haas","h":2,"a":1},{"player":"RoanTuit(messi)","h":0,"a":1},{"player":"Robertosxs","h":0,"a":1},{"player":"Rugnummer67","h":2,"a":0},{"player":"THEGOAT37","h":1,"a":2},{"player":"Trauner_in_Oranje","h":2,"a":1},{"player":"UedaTopscorer","h":1,"a":1},{"player":"WillemCo","h":0,"a":2},{"player":"Wisselbeker","h":1,"a":3},{"player":"Wkkipje","h":2,"a":2}],"73":[{"player":"Wolsman","h":2,"a":1},{"player":"AlinevanVuuren","h":3,"a":2},{"player":"Bertjuh","h":2,"a":1},{"player":"Bo.","h":2,"a":0},{"player":"Bobcorn","h":3,"a":2},{"player":"BornBjorg","h":3,"a":1},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Christopheramboz","h":2,"a":3},{"player":"Cornelis2026","h":2,"a":2},{"player":"Daisy010","h":2,"a":1},{"player":"El-Toro-Loco","h":2,"a":1},{"player":"Erol_Ulu","h":2,"a":0},{"player":"Fseton","h":2,"a":0},{"player":"GeorgeV.","h":3,"a":1},{"player":"Givano","h":2,"a":1},{"player":"GonnyDebode","h":3,"a":2},{"player":"Heer","h":3,"a":2},{"player":"ikgajuichen","h":2,"a":1},{"player":"JanCandiano","h":3,"a":1},{"player":"JanvdL","h":1,"a":2},{"player":"John0504","h":4,"a":1},{"player":"JoycevanRiet","h":3,"a":2},{"player":"JRHJNB","h":2,"a":1},{"player":"Jules-","h":3,"a":1},{"player":"Katinkadeb","h":1,"a":0},{"player":"Keepertje","h":3,"a":1},{"player":"Kleine Flo","h":3,"a":1},{"player":"Koninkie","h":2,"a":1},{"player":"Marlayne","h":2,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":1},{"player":"MaureenGLA","h":4,"a":1},{"player":"Mauricio1980","h":2,"a":1},{"player":"Mobicontrol-van-Riet","h":2,"a":1},{"player":"Nelson1983","h":3,"a":1},{"player":"Norman.P","h":2,"a":0},{"player":"Oppie1978","h":1,"a":2},{"player":"Raymond de Haas","h":2,"a":0},{"player":"RoanTuit(messi)","h":2,"a":0},{"player":"Robertosxs","h":2,"a":1},{"player":"Rugnummer67","h":3,"a":1},{"player":"THEGOAT37","h":2,"a":1},{"player":"Trauner_in_Oranje","h":3,"a":1},{"player":"UedaTopscorer","h":1,"a":1},{"player":"WesleyMerwe","h":2,"a":1},{"player":"WillemCo","h":3,"a":1},{"player":"Wisselbeker","h":2,"a":2},{"player":"Wkkipje","h":2,"a":1}],"74":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":3,"a":0},{"player":"Bertjuh","h":2,"a":1},{"player":"Bo.","h":3,"a":1},{"player":"Bobcorn","h":3,"a":1},{"player":"BornBjorg","h":2,"a":0},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":3,"a":2},{"player":"Cornelis2026","h":2,"a":1},{"player":"Crazy Dutchman","h":3,"a":1},{"player":"Daisy010","h":3,"a":1},{"player":"El-Toro-Loco","h":3,"a":0},{"player":"Erol_Ulu","h":2,"a":0},{"player":"Fseton","h":2,"a":1},{"player":"GeorgeV.","h":3,"a":1},{"player":"Givano","h":3,"a":1},{"player":"GonnyDebode","h":2,"a":0},{"player":"Heer","h":2,"a":0},{"player":"ikgajuichen","h":3,"a":0},{"player":"JanCandiano","h":3,"a":1},{"player":"JanvdL","h":2,"a":0},{"player":"John0504","h":3,"a":1},{"player":"JoycevanRiet","h":3,"a":0},{"player":"JRHJNB","h":3,"a":0},{"player":"Jules-","h":2,"a":0},{"player":"Katinkadeb","h":3,"a":1},{"player":"Keepertje","h":2,"a":2},{"player":"Kleine Flo","h":2,"a":0},{"player":"Koninkie","h":3,"a":0},{"player":"Marlayne","h":3,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":1},{"player":"MaureenGLA","h":3,"a":0},{"player":"Mauricio1980","h":3,"a":0},{"player":"Mobicontrol-van-Riet","h":3,"a":0},{"player":"Nelson1983","h":3,"a":1},{"player":"Norman.P","h":3,"a":1},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":3,"a":1},{"player":"RoanTuit(messi)","h":1,"a":0},{"player":"Robertosxs","h":2,"a":1},{"player":"Rugnummer67","h":3,"a":1},{"player":"THEGOAT37","h":2,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":2,"a":0},{"player":"WesleyMerwe","h":3,"a":0},{"player":"WillemCo","h":4,"a":1},{"player":"Wisselbeker","h":5,"a":0},{"player":"Wkkipje","h":1,"a":2}],"75":[{"player":"Wolsman","h":2,"a":1},{"player":"AlinevanVuuren","h":3,"a":1},{"player":"Bertjuh","h":4,"a":3},{"player":"Bo.","h":2,"a":1},{"player":"Bobcorn","h":2,"a":1},{"player":"BornBjorg","h":3,"a":2},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Christopheramboz","h":2,"a":3},{"player":"Cornelis2026","h":2,"a":1},{"player":"Crazy Dutchman","h":3,"a":2},{"player":"Daisy010","h":4,"a":2},{"player":"El-Toro-Loco","h":1,"a":0},{"player":"Erol_Ulu","h":2,"a":1},{"player":"Fseton","h":2,"a":1},{"player":"GeorgeV.","h":3,"a":2},{"player":"Givano","h":2,"a":1},{"player":"GonnyDebode","h":3,"a":1},{"player":"Heer","h":3,"a":2},{"player":"ikgajuichen","h":2,"a":1},{"player":"JanCandiano","h":3,"a":3},{"player":"JanvdL","h":2,"a":1},{"player":"John0504","h":4,"a":2},{"player":"JoycevanRiet","h":2,"a":1},{"player":"JRHJNB","h":3,"a":2},{"player":"Jules-","h":2,"a":1},{"player":"Katinkadeb","h":3,"a":2},{"player":"Keepertje","h":3,"a":2},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":3,"a":2},{"player":"Martijnmeestervoorspeller","h":2,"a":1},{"player":"MaureenGLA","h":3,"a":1},{"player":"Mauricio1980","h":1,"a":1},{"player":"Mobicontrol-van-Riet","h":2,"a":1},{"player":"Nelson1983","h":2,"a":0},{"player":"Norman.P","h":3,"a":2},{"player":"Oppie1978","h":2,"a":2},{"player":"Raymond de Haas","h":2,"a":1},{"player":"RoanTuit(messi)","h":3,"a":1},{"player":"Robertosxs","h":2,"a":2},{"player":"Rugnummer67","h":4,"a":1},{"player":"THEGOAT37","h":2,"a":2},{"player":"Trauner_in_Oranje","h":3,"a":1},{"player":"UedaTopscorer","h":2,"a":1},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":3,"a":1},{"player":"Wisselbeker","h":2,"a":1},{"player":"Wkkipje","h":2,"a":1}],"76":[{"player":"Wolsman","h":1,"a":2},{"player":"AlinevanVuuren","h":1,"a":3},{"player":"Bertjuh","h":2,"a":1},{"player":"Bo.","h":1,"a":2},{"player":"Bobcorn","h":1,"a":2},{"player":"BornBjorg","h":1,"a":2},{"player":"Brokkenpiloot","h":1,"a":0},{"player":"Christopheramboz","h":2,"a":1},{"player":"Cornelis2026","h":3,"a":0},{"player":"Crazy Dutchman","h":2,"a":2},{"player":"Daisy010","h":2,"a":1},{"player":"El-Toro-Loco","h":1,"a":2},{"player":"Erol_Ulu","h":1,"a":0},{"player":"Fseton","h":1,"a":2},{"player":"GeorgeV.","h":1,"a":2},{"player":"Givano","h":1,"a":2},{"player":"GonnyDebode","h":0,"a":1},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":1,"a":1},{"player":"JanCandiano","h":1,"a":3},{"player":"JanvdL","h":1,"a":3},{"player":"John0504","h":1,"a":3},{"player":"JoycevanRiet","h":1,"a":3},{"player":"JRHJNB","h":1,"a":2},{"player":"Jules-","h":1,"a":2},{"player":"Katinkadeb","h":2,"a":1},{"player":"Keepertje","h":1,"a":1},{"player":"Kleine Flo","h":1,"a":2},{"player":"Koninkie","h":2,"a":2},{"player":"Marlayne","h":1,"a":1},{"player":"Martijnmeestervoorspeller","h":2,"a":2},{"player":"MaureenGLA","h":0,"a":2},{"player":"Mauricio1980","h":0,"a":2},{"player":"Mobicontrol-van-Riet","h":0,"a":2},{"player":"Nelson1983","h":1,"a":2},{"player":"Norman.P","h":0,"a":1},{"player":"Oppie1978","h":1,"a":2},{"player":"Raymond de Haas","h":1,"a":2},{"player":"Robertosxs","h":1,"a":2},{"player":"Rugnummer67","h":1,"a":3},{"player":"THEGOAT37","h":1,"a":1},{"player":"Trauner_in_Oranje","h":1,"a":3},{"player":"UedaTopscorer","h":1,"a":2},{"player":"WesleyMerwe","h":1,"a":2},{"player":"WillemCo","h":2,"a":3},{"player":"Wisselbeker","h":1,"a":2},{"player":"Wkkipje","h":1,"a":2}],"77":[{"player":"Wolsman","h":3,"a":0},{"player":"AlinevanVuuren","h":4,"a":2},{"player":"Bertjuh","h":3,"a":1},{"player":"Bo.","h":2,"a":0},{"player":"Bobcorn","h":3,"a":1},{"player":"BornBjorg","h":3,"a":0},{"player":"Brokkenpiloot","h":2,"a":0},{"player":"Christopheramboz","h":2,"a":0},{"player":"Cornelis2026","h":3,"a":2},{"player":"Crazy Dutchman","h":3,"a":0},{"player":"Daisy010","h":3,"a":1},{"player":"El-Toro-Loco","h":2,"a":0},{"player":"Erol_Ulu","h":2,"a":0},{"player":"Fseton","h":4,"a":0},{"player":"GeorgeV.","h":3,"a":0},{"player":"Givano","h":3,"a":1},{"player":"GonnyDebode","h":3,"a":1},{"player":"Heer","h":2,"a":0},{"player":"ikgajuichen","h":2,"a":0},{"player":"JanCandiano","h":3,"a":1},{"player":"JanvdL","h":3,"a":0},{"player":"John0504","h":5,"a":1},{"player":"JoycevanRiet","h":4,"a":2},{"player":"JRHJNB","h":4,"a":1},{"player":"Jules-","h":2,"a":0},{"player":"Katinkadeb","h":4,"a":1},{"player":"Keepertje","h":2,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":3,"a":1},{"player":"Marlayne","h":3,"a":1},{"player":"Martijnmeestervoorspeller","h":3,"a":0},{"player":"MaureenGLA","h":3,"a":1},{"player":"Mauricio1980","h":4,"a":0},{"player":"Mobicontrol-van-Riet","h":3,"a":0},{"player":"Nelson1983","h":3,"a":0},{"player":"Norman.P","h":2,"a":0},{"player":"Oppie1978","h":3,"a":0},{"player":"Raymond de Haas","h":3,"a":1},{"player":"RoanTuit(messi)","h":4,"a":1},{"player":"Robertosxs","h":3,"a":1},{"player":"Rugnummer67","h":4,"a":2},{"player":"THEGOAT37","h":3,"a":0},{"player":"Trauner_in_Oranje","h":3,"a":1},{"player":"UedaTopscorer","h":3,"a":0},{"player":"WesleyMerwe","h":3,"a":0},{"player":"WillemCo","h":4,"a":1},{"player":"Wisselbeker","h":3,"a":1},{"player":"Wkkipje","h":4,"a":0}],"78":[{"player":"Wolsman","h":2,"a":1},{"player":"AlinevanVuuren","h":3,"a":2},{"player":"Bertjuh","h":2,"a":0},{"player":"Bo.","h":1,"a":1},{"player":"Bobcorn","h":2,"a":1},{"player":"BornBjorg","h":2,"a":1},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":2,"a":2},{"player":"Cornelis2026","h":2,"a":1},{"player":"Crazy Dutchman","h":1,"a":2},{"player":"Daisy010","h":3,"a":0},{"player":"El-Toro-Loco","h":1,"a":0},{"player":"Erol_Ulu","h":2,"a":1},{"player":"Fseton","h":1,"a":1},{"player":"GeorgeV.","h":1,"a":2},{"player":"Givano","h":2,"a":1},{"player":"GonnyDebode","h":2,"a":0},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":3,"a":1},{"player":"JanCandiano","h":3,"a":1},{"player":"JanvdL","h":2,"a":1},{"player":"John0504","h":2,"a":1},{"player":"JoycevanRiet","h":2,"a":2},{"player":"JRHJNB","h":2,"a":1},{"player":"Jules-","h":2,"a":1},{"player":"Katinkadeb","h":2,"a":1},{"player":"Keepertje","h":2,"a":1},{"player":"Kleine Flo","h":2,"a":0},{"player":"Koninkie","h":2,"a":0},{"player":"Marlayne","h":2,"a":2},{"player":"Martijnmeestervoorspeller","h":1,"a":2},{"player":"MaureenGLA","h":2,"a":0},{"player":"Mauricio1980","h":2,"a":1},{"player":"Mobicontrol-van-Riet","h":1,"a":0},{"player":"Nelson1983","h":2,"a":1},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":1,"a":0},{"player":"RoanTuit(messi)","h":0,"a":2},{"player":"Robertosxs","h":3,"a":1},{"player":"Rugnummer67","h":2,"a":2},{"player":"THEGOAT37","h":2,"a":1},{"player":"Trauner_in_Oranje","h":2,"a":0},{"player":"UedaTopscorer","h":2,"a":0},{"player":"WesleyMerwe","h":1,"a":0},{"player":"WillemCo","h":1,"a":1},{"player":"Wisselbeker","h":3,"a":1},{"player":"Wkkipje","h":3,"a":1}],"79":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":4,"a":0},{"player":"Bertjuh","h":2,"a":0},{"player":"Bo.","h":2,"a":0},{"player":"Bobcorn","h":1,"a":1},{"player":"BornBjorg","h":3,"a":0},{"player":"Brokkenpiloot","h":2,"a":1},{"player":"Christopheramboz","h":3,"a":1},{"player":"Cornelis2026","h":3,"a":1},{"player":"Crazy Dutchman","h":2,"a":1},{"player":"Daisy010","h":2,"a":1},{"player":"El-Toro-Loco","h":3,"a":2},{"player":"Erol_Ulu","h":2,"a":0},{"player":"Fseton","h":2,"a":1},{"player":"GeorgeV.","h":2,"a":1},{"player":"Givano","h":2,"a":0},{"player":"GonnyDebode","h":2,"a":1},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":3,"a":1},{"player":"JanCandiano","h":2,"a":1},{"player":"JanvdL","h":1,"a":0},{"player":"John0504","h":4,"a":1},{"player":"JoycevanRiet","h":1,"a":0},{"player":"JRHJNB","h":2,"a":1},{"player":"Jules-","h":3,"a":0},{"player":"Katinkadeb","h":3,"a":1},{"player":"Keepertje","h":3,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":2,"a":1},{"player":"Marlayne","h":1,"a":2},{"player":"Martijnmeestervoorspeller","h":2,"a":1},{"player":"MaureenGLA","h":3,"a":0},{"player":"Mauricio1980","h":3,"a":0},{"player":"Mobicontrol-van-Riet","h":2,"a":0},{"player":"Nelson1983","h":2,"a":1},{"player":"Norman.P","h":2,"a":0},{"player":"Oppie1978","h":2,"a":1},{"player":"Raymond de Haas","h":2,"a":0},{"player":"Reboss","h":2,"a":0},{"player":"Robertosxs","h":2,"a":0},{"player":"Rugnummer67","h":4,"a":1},{"player":"THEGOAT37","h":2,"a":1},{"player":"Trauner_in_Oranje","h":3,"a":0},{"player":"UedaTopscorer","h":2,"a":0},{"player":"WesleyMerwe","h":2,"a":0},{"player":"WillemCo","h":2,"a":1},{"player":"Wisselbeker","h":4,"a":0},{"player":"Wkkipje","h":2,"a":1}],"80":[{"player":"Wolsman","h":2,"a":0},{"player":"AlinevanVuuren","h":1,"a":2},{"player":"Bertjuh","h":2,"a":1},{"player":"Bo.","h":2,"a":1},{"player":"Bobcorn","h":2,"a":0},{"player":"BornBjorg","h":2,"a":1},{"player":"Brokkenpiloot","h":1,"a":1},{"player":"Christopheramboz","h":1,"a":3},{"player":"Cornelis2026","h":2,"a":0},{"player":"Crazy Dutchman","h":1,"a":2},{"player":"Daisy010","h":2,"a":0},{"player":"El-Toro-Loco","h":1,"a":0},{"player":"Erol_Ulu","h":2,"a":1},{"player":"Fseton","h":1,"a":2},{"player":"GeorgeV.","h":1,"a":2},{"player":"Givano","h":2,"a":1},{"player":"GonnyDebode","h":1,"a":1},{"player":"Heer","h":1,"a":1},{"player":"ikgajuichen","h":2,"a":0},{"player":"JanCandiano","h":3,"a":1},{"player":"JanvdL","h":1,"a":1},{"player":"John0504","h":3,"a":1},{"player":"JoycevanRiet","h":2,"a":1},{"player":"JRHJNB","h":0,"a":2},{"player":"Jules-","h":2,"a":1},{"player":"Katinkadeb","h":1,"a":2},{"player":"Keepertje","h":1,"a":1},{"player":"Kleine Flo","h":2,"a":1},{"player":"Koninkie","h":1,"a":1},{"player":"Marlayne","h":3,"a":1},{"player":"Martijnmeestervoorspeller","h":1,"a":2},{"player":"MaureenGLA","h":2,"a":0},{"player":"Mauricio1980","h":1,"a":1},{"player":"Mobicontrol-van-Riet","h":2,"a":1},{"player":"Nelson1983","h":2,"a":1},{"player":"Norman.P","h":0,"a":1},{"player":"Oppie1978","h":1,"a":2},{"player":"Raymond de Haas","h":2,"a":1},{"player":"Reboss","h":2,"a":1},{"player":"Robertosxs","h":2,"a":1},{"player":"Rugnummer67","h":1,"a":3},{"player":"THEGOAT37","h":1,"a":1},{"player":"Trauner_in_Oranje","h":1,"a":2},{"player":"UedaTopscorer","h":2,"a":1},{"player":"WesleyMerwe","h":0,"a":1},{"player":"WillemCo","h":1,"a":2},{"player":"Wisselbeker","h":3,"a":2},{"player":"Wkkipje","h":1,"a":2}]};
window.POOL_STANDINGS = {"A":[{"team":"Mexico","played":3,"w":3,"g":0,"v":0,"points":9,"saldo":6},{"team":"Zuid Afrika","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":-1},{"team":"Zuid Korea","played":3,"w":1,"g":0,"v":2,"points":3,"saldo":-1},{"team":"Tsjechië","played":3,"w":0,"g":1,"v":2,"points":1,"saldo":-4}],"B":[{"team":"Zwitserland","played":3,"w":2,"g":1,"v":0,"points":7,"saldo":4},{"team":"Canada","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":5},{"team":"Bosnië","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":-1},{"team":"Qatar","played":3,"w":0,"g":1,"v":2,"points":1,"saldo":-8}],"C":[{"team":"Brazilië","played":3,"w":2,"g":1,"v":0,"points":7,"saldo":6},{"team":"Marokko","played":3,"w":2,"g":1,"v":0,"points":7,"saldo":3},{"team":"Schotland","played":3,"w":1,"g":0,"v":2,"points":3,"saldo":-3},{"team":"Haiti","played":3,"w":0,"g":0,"v":3,"points":0,"saldo":-6}],"D":[{"team":"USA","played":3,"w":2,"g":0,"v":1,"points":6,"saldo":4},{"team":"Australië","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":0},{"team":"Paraguay","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":-2},{"team":"Turkije","played":3,"w":1,"g":0,"v":2,"points":3,"saldo":-2}],"E":[{"team":"Duitsland","played":3,"w":2,"g":0,"v":1,"points":6,"saldo":6},{"team":"Ivoorkust","played":3,"w":2,"g":0,"v":1,"points":6,"saldo":2},{"team":"Ecuador","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":0},{"team":"Curacao","played":3,"w":0,"g":1,"v":2,"points":1,"saldo":-8}],"F":[{"team":"Nederland","played":3,"w":2,"g":1,"v":0,"points":7,"saldo":6},{"team":"Japan","played":3,"w":1,"g":2,"v":0,"points":5,"saldo":4},{"team":"Zweden","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":0},{"team":"Tunesië","played":3,"w":0,"g":0,"v":3,"points":0,"saldo":-10}],"G":[{"team":"België","played":3,"w":1,"g":2,"v":0,"points":5,"saldo":4},{"team":"Egypte","played":3,"w":1,"g":2,"v":0,"points":5,"saldo":2},{"team":"Iran","played":3,"w":0,"g":3,"v":0,"points":3,"saldo":0},{"team":"Nieuw Zeeland","played":3,"w":0,"g":1,"v":2,"points":1,"saldo":-6}],"H":[{"team":"Spanje","played":3,"w":2,"g":1,"v":0,"points":7,"saldo":5},{"team":"Kaapverdie","played":3,"w":0,"g":3,"v":0,"points":3,"saldo":0},{"team":"Uruguay","played":3,"w":0,"g":2,"v":1,"points":2,"saldo":-1},{"team":"Saoedi-Arabie","played":3,"w":0,"g":2,"v":1,"points":2,"saldo":-4}],"I":[{"team":"Frankrijk","played":3,"w":3,"g":0,"v":0,"points":9,"saldo":8},{"team":"Noorwegen","played":3,"w":2,"g":0,"v":1,"points":6,"saldo":1},{"team":"Senegal","played":3,"w":1,"g":0,"v":2,"points":3,"saldo":2},{"team":"Irak","played":3,"w":0,"g":0,"v":3,"points":0,"saldo":-11}],"J":[{"team":"Argentinië","played":3,"w":3,"g":0,"v":0,"points":9,"saldo":7},{"team":"Oostenrijk","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":0},{"team":"Algerije","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":-2},{"team":"Jordanie","played":3,"w":0,"g":0,"v":3,"points":0,"saldo":-5}],"K":[{"team":"Colombia","played":3,"w":2,"g":1,"v":0,"points":7,"saldo":3},{"team":"Portugal","played":3,"w":1,"g":2,"v":0,"points":5,"saldo":5},{"team":"Congo","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":1},{"team":"Oezbekistan","played":3,"w":0,"g":0,"v":3,"points":0,"saldo":-9}],"L":[{"team":"Engeland","played":3,"w":2,"g":1,"v":0,"points":7,"saldo":4},{"team":"Kroatië","played":3,"w":2,"g":0,"v":1,"points":6,"saldo":0},{"team":"Ghana","played":3,"w":1,"g":1,"v":1,"points":4,"saldo":0},{"team":"Panama","played":3,"w":0,"g":0,"v":3,"points":0,"saldo":-4}]};

// Puntenhistorie per speler (door de scraper bijgehouden, max 12 metingen) —
// voedt de mini-sparkline in de ranglijst. Groeit alleen als de punten wijzigen.
window.POOL_HISTORY = {"Wolsman":[3055,3130,3225,3245,3435,5520,5720,5920,6015,6110,6110,6185],"Kleine Flo":[2720,2740,2835,2835,3025,5050,5250,5325,5525,5725,5725,5800],"Bertjuh":[2720,2740,2835,2835,2930,4635,4635,4730,4930,5025,5025,5100],"Bobcorn":[2870,2965,3040,3040,3230,4990,5190,5285,5380,5400,5400,5475],"UedaTopscorer":[2155,2155,2250,2250,2650,4290,4490,4690,4890,4985,4985,5060],"Oppie1978":[3305,3400,3475,3475,3645,5295,5495,5695,5790,5990,5990,6010],"El-Toro-Loco":[2480,2555,2630,2630,2905,4765,4965,5060,5155,5230,5230,5305],"StudentjeIndicium":[2715,2735,2830,2850,3040,4475,4475,4475,4475,4475,4475,4475],"Mauricio1980":[2825,2900,2975,2995,3290,5305,5400,5495,5590,5665,5665,5665],"AlinevanVuuren":[2865,2885,2980,2980,3020,4785,4880,4955,5030,5105,5105,5125],"Wisselbeker":[3210,3305,3380,3400,3570,5075,5275,5370,5445,5520,5720,5720],"Roantuit":[0,0,0,0,0,0,0,0,0,0],"Robertosxs":[2990,3010,3105,3125,3315,5650,5850,5945,6020,6115,6115,6190],"Reboss":[2740,2815,2910,2930,3120,4880,4880,4880,4880,4975,4975,5050],"Mobicontrol":[315,315,515,515,590,610,610,760,760,780,800,920],"Brokkenpiloot":[3190,3265,3360,3380,3495,5010,5030,5125,5125,5325,5325,5325],"Katinkadeb":[2695,2715,2810,2810,3085,4595,4595,4670,4765,4860,4860,4880],"BornBjorg":[1880,1975,2070,2090,2260,4420,4620,4820,4915,4990,4990,5065],"Fseton":[2760,2780,2875,2875,3095,4530,4730,4825,4825,5025,5025,5045],"Raymond de Haas":[2990,3085,3180,3180,3330,5105,5305,5400,5495,5590,5590,5665],"ScheidsTon":[0,0,0,0,0,0,0,0,0,0],"THEGOAT37":[3095,3115,3210,3230,3450,5775,5795,5995,6090,6290,6290,6290],"WesleyMerwe":[2770,2770,2865,2885,3180,5220,5420,5620,5715,5810,5810,5810],"Daisy010":[3045,3120,3215,3215,3365,5225,5225,5320,5415,5615,5615,5690],"Erol_Ulu":[3325,3420,3515,3515,3705,5495,5515,5610,5705,5800,5800,5875],"Givano":[3105,3200,3400,3400,3695,5485,5685,5780,5875,5970,5970,6045],"VanderLans":[665,865,865,980,980,980,1000,1040,1040,1135,1430,1630],"Trauner_in_Oranje":[2950,2970,3065,3065,3360,4840,4935,5030,5230,5305,5305,5325],"Keepertje":[1905,1925,2020,2120,2290,3495,3515,3590,3685,3780,3780,3780],"John0504":[2545,2545,2640,2640,2810,4690,4785,4860,4955,5050,5050,5145],"Rugnummer67":[2795,2815,2910,2910,3080,4575,4670,4745,4765,4860,4860,4860],"Norman.P":[3030,3125,3220,3240,3430,5315,5390,5485,5485,5580,5580,5580],"StanleyBoessen":[2500,2500,2595,2595,2690,4175,4175,4175,4175,4175,4175,4175],"GonnyDebode":[2235,2255,2330,2350,2645,4065,4140,4235,4435,4635,4635,4635],"Marlayne":[2055,2150,2245,2245,2465,4180,4200,4295,4315,4315,4315,4410],"Jules-":[2775,2870,2965,2985,3175,5455,5655,5750,5845,5920,5920,5995],"Harro1":[2610,2610,2705,2725,2820,4865,4865,4865,4865,4865,4865,4865],"JRHJNB":[2735,2810,2905,2925,3075,4840,5040,5115,5210,5410,5410,5430],"JoycevanRiet":[2330,2405,2500,2520,2595,4255,4350,4425,4445,4520,4520,4595],"Heer":[3235,3235,3330,3350,3645,5415,5435,5530,5530,5550,5550,5550],"Pepijndh":[0,0,0,0,0,0,0,0,0,0,0,0],"Cornelis2026":[2420,2515,2590,2610,2685,4145,4145,4240,4335,4430,4430,4505],"Wkkipje":[2680,2680,2775,2795,2890,4535,4735,4830,4905,5105,5105,5125],"MaureenGLA":[2725,2745,2820,2840,2955,4630,4725,4820,5020,5095,5095,5170],"GeorgeV.":[3115,3135,3230,3230,3325,5445,5645,5845,5845,6045,6045,6065],"ikgajuichen":[2915,2990,3085,3085,3255,4810,4830,4925,5000,5095,5095,5170],"JanCandiano":[2830,2925,3000,3020,3315,4915,5010,5105,5180,5380,5380,5475],"Bo.":[2640,2735,2830,2850,3020,5000,5200,5295,5295,5390,5390,5465],"Koninkie":[3225,3300,3395,3415,3635,5695,5715,5810,6010,6210,6210,6210],"Martijnmeestervoorspeller":[3050,3145,3220,3220,3410,5205,5225,5425,5425,5625,5625,5645],"Crazy Dutchman":[3400,3495,3570,3570,3570,5150,5170,5370,5370,5570,5570,5590],"RoanTuit(messi)":[2185,2280,2280,2280,2575,4080,4080,4155,4155,4155,4155,4155],"Christopheramboz":[2940,3035,3130,3130,3300,4915,4915,5010,5030,5125,5125,5125],"Frenk010fr":[0,0,0,0,0,0,0,0,0,0,0,0],"WillemCo":[2510,2585,2680,2700,2815,4145,4220,4295,4295,4495,4495,4515],"Nelson1983":[2055,2150,2245,2245,2340,4035,4235,4435,4530,4730,4730,4805],"Mobicontrol-Xavier":[2350,2445,2560,2655,2675,2850,2945,3040,3135,3230,3250,3650],"JanvdL":[3325,3400,3475,3495,3665,5395,5490,5690,5785,5860,5860,5860],"Mobicontrol-van-Riet":[5870,5965,6165,6260,6355,6355,6430]};

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
window.POOL_HENK = {"generatedAt":"2026-07-02","playerTakes":{"Mobicontrol-van-Riet":"Stilstand op de troon met een voorspellende kracht zo betrouwbaar als een 0-0 gok op een duel dat eindigt in 2-1; duidelijk geen waarzegger.","THEGOAT37":"Met een naam als 'THEGOAT' en een uitglijder zoals Algerije-Oostenrijk zou je eerder denken dat er een geit aan het roer staat.","Koninkie":"Blijkbaar geen koning in voorspellen, want Congo-Oezbekistan was meer een sprookje dan een schot in de roos.","Robertosxs":"Toch knap, al die 0-0 en 1-1 gokken, alsof hij denkt dat het darten is en niet voetbal.","Wolsman":"Het enige dat sneller zakt dan zijn score is de geloofwaardigheid van zijn Congo-Oezbekistan voorspellingen.","GeorgeV.":"Met een trend zoals de zijne blijft hij zo ver achter dat hij de eindstreep alleen nog maar kan horen in plaats van zien.","Oppie1978":"Drie op rij en toch zo ver weg; lijkt wel alsof Oppie met boter op het hoofd gokt.","Givano":"Met zijn duizelingwekkende beweging weet je nooit of hij nu achteruit of vooruit gaat.","Jules-":"Een toekomst als weerman lijkt hem beter te liggen dan als voetbalkenner; altijd omringd door wolken van twijfel.","JanvdL":"Al die uitgebreide strategische gokjes en toch met lege handen; het lijkt meer op een loterij dan een WK-poule.","WesleyMerwe":"Je zou denken dat iemand met een beetje verstand Congo-Oezbekistan anders had ingeschat.","Erol_Ulu":"Van Kroatië-Ghana een gelijkspel maken is net zo'n succes als denken dat de zon 's nachts schijnt.","Kleine Flo":"Toch knap, 'Congo-Oezbekistan' als gelijkspel voorspellen, het lijkt wel alsof hij zijn glazen bol kwijt is.","Mauricio1980":"Hij ziet kansen en grijpt ze aan als een blinde die darts gooit; nog nooit zo ver verwijderd van een exacte uitslag.","Martijnmeestervoorspeller":"En toch blijkt de 'meestervoorspeller' meer een 'meester in missen' te zijn.","Daisy010":"Al die gokjes, maar met trendpunten als deze blijft zelfs de marathon een brug te ver.","Raymond de Haas":"Met 1-1 gokken op Kroatië-Ghana toont hij aan dat zijn glazen bol meer glazen dan bol is.","Norman.P":"Een zekerheid in het onzekere; Congo-Oezbekistan als gelijke voorspellen is als je ogen sluiten en hopen op het beste.","Crazy Dutchman":"Niets zo 'crazy' als denken dat Congo-Oezbekistan een 1-1 wordt; logica lijkt niet in zijn woordenboek te staan.","Heer":"Een 'Heer' in naam, maar eerder een jager met een slappe boog in zijn voorspellingen.","Wisselbeker":"Wie had gedacht dat een Wisselbeker nog meer zou wisselen in zijn voorspellingen dan in zijn naam?","JRHJNB":"Met zo'n gok record zal hij meer kans hebben op een casino dan op een WK overwinning.","Bobcorn":"Met zijn exactheid lijkt hij meer op een popcorn automaat dan een voorspeller.","Bo.":"Met een trend als deze heeft zelfs zijn naam meer punten dan zijn voorspellingen.","JanCandiano":"Met voorspellingen die lijken op natte vingerwerk is JanCandiano meer een gokker dan een strateeg.","Brokkenpiloot":"Net zo onbetrouwbaar als zijn naam doet vermoeden; zijn score is net als een vliegtuig zonder vleugels.","Trauner_in_Oranje":"Hij zou beter een carrière in de meteorologie overwegen, want zijn voorspellingen zijn net zo onvoorspelbaar als het weer.","El-Toro-Loco":"Ziet zichzelf als een stier, maar vertoont eerder de finesse van een slak in deze competitie.","Christopheramboz":"Een gok met dezelfde precisie als een slingerende polaroid; meer een artiest dan een voorspellingskoning.","AlinevanVuuren":"Met zo'n voorspelling zou zelfs een ondeugende kitten op de rand van succes staan.","Wkkipje":"Met voorspellingen als deze lijkt hij de WK zelfs in zijn dagboek te vergeten.","MaureenGLA":"Met trendpunten die sneller groeien dan onkruid in de tuin zal Maureen binnenkort een snoeischaar nodig hebben.","ikgajuichen":"Zijn voorspellingen zijn net zo sprankelend als zijn naam; je vraagt je af wat er precies te juichen valt.","John0504":"Met zulke exacte uitslagvoorspellingen moet John zich afvragen of hij niet beter een andere hobby kan zoeken.","Bertjuh":"Met de precisie van een slingerende dartpijl, lijkt Bertjuh altijd net naast de roos te mikken.","Fseton":"Zijn voorspellingen hebben allemaal het gewicht van een veertje; ze stijgen niet erg hoog.","BornBjorg":"Met een trend die voelt als een rollercoaster ride, blijft hij meer hangend dan vliegend.","UedaTopscorer":"Zijn voorspellingen zijn net zo wankel als een kaarthuis in de wind; alles behalve stabiel.","Reboss":"Met een voorspelling die meer lijkt op nattevingerwerk dan een strategisch meesterwerk blijft hij droog staan.","Harro1":"Met een focus die scherper zou kunnen zijn dan het scherpste mes, blijft hij steken in het verleden.","Katinkadeb":"Met trendpunten die voelen als een slap cadeautje lijkt Katinkadeb vastgeroest in het verleden.","Rugnummer67":"Zijn enthousiasme is beklagenswaardig, maar als voorspeller lijkt hij bij de verkeerde wedstrijd op te dagen.","Nelson1983":"Nelson denkt wellicht dat het WK een wiskundetoets is, maar zijn trendpunten vertellen een ander verhaal.","GonnyDebode":"Met een voorspellingsinzicht als dat van een blinde kaartlezer blijft ze in de schaduw hangen.","JoycevanRiet":"Met een gokhistorie als die van een verloren gokker blijft ze achter in de lijn der verliezers.","WillemCo":"Met voorspellingen die meer doen denken aan kindertekeningen laat WillemCo weinig aan de verbeelding over.","StudentjeIndicium":"Toont dat zelfs een student makkelijk de mist in kan gaan terwijl hij gedachtenloos gokt.","Cornelis2026":"Als hij zo doorgaat met gokken, heeft hij tegen 2026 meer missers dan een dartbord.","Marlayne":"Met een voorspellingspatroon dat zo grillig is als een bergpad laat ze weinig aan betrouwbaarheid over.","StanleyBoessen":"Met een trend zo traag als een schildpad moet hij hopen dat iedereen voor hem valt.","RoanTuit(messi)":"Zijn voorspellingsluik is net zo gedefinieerd als een mislukte schot op doel.","Keepertje":"Met een trend als deze zou je verwachten dat hij nooit het doel vindt."},"monoloog":"Nou, wat een stelletje slaapwandelaars zijn het toch! Mobicontrol-van-Riet loopt nog steeds kilometers voor, maar met die miezerige 485 trendpunten gaat zelfs een slak hem nog inhalen. Kijk naar StanleyBoessen, die zit op z'n eigen eilandje onderaan met een score waar zelfs de VAR van moet huilen. En Cornelis2026, je had wellicht beter een dartbord kunnen gebruiken voor Congo-Oezbekistan, want die 1-1 zat er totaal niet in!","hotTakes":["Brokkenpiloot, vier keer op rij goed gegokt, maar toch amper vooruitgang. Meer een brokkenpiloot in de jungle dan op de snelweg.","Wisselbeker, slechts één keer een exacte score? Je bent meer wisselgeld dan wisselbeker in deze poule.","Rugnummer67, met je 3-3 schot in het duister was dat eerder een rugnummer dan een ruggensteun voor je score.","JanCandiano, met al je 2815 trendpunten sta je nog steeds stil, het is alsof je door een snel veranderend veld loopt met een blinddoek op.","Marlayne, misschien moet je je Congo-voorspellingen maar een jaartje op vakantie sturen, die 1-2 was net zo nietszeggend als een regenbui op een zonnige dag."],"dailyTarget":{"name":"Wkkipje","lines":["Wkkipje, met 5105 punten en rank 30, blijf je hangen als een kip zonder kop in de lijst.","Je voorspelling van 2-2 bij Congo-Oezbekistan is net zo bizar als kippen een winnend lot laten kiezen, werd netjes 3-1.","Met een beweging als een gepensioneerde, sta je stil in een veld van trappelende talenten."]},"matchTakes":{"67":"WillemCo dacht dat Ghana Kroatië wel even zou wegblazen; drie mis is drie keer te veel, jongen.","68":"Colombia - Portugal eindigt saai met 0-0, niemand exact goed en de meerderheid staart naar hun verloren centen.","69":"Harro1 lacht als enige het laatst bij Congo - Oezbekistan, terwijl AlinevanVuuren roemloos struikelt met haar 1-2 blunder.","70":"Algerije en Oostenrijk houden de stand gelijk, maar JanvdL blijft hardnekkig geloven in zijn niet-bestaande Oostenrijkse wonder.","71":"Zelfs de koffiejuffrouw voorspelde Jordanië - Argentinië goed, maar wie het fout had, moet toch echt terug naar de gebrekkige spelregels."},"targetHistory":["Keepertje","Norman.P","Erol_Ulu","UedaTopscorer","StanleyBoessen","Marlayne","Bertjuh","Fseton","GonnyDebode","RoanTuit(messi)","Cornelis2026","JanCandiano","Bobcorn","Wkkipje"]};

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
