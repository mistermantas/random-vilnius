const btn = document.querySelector(".shuffler");
const title = document.querySelector("#title");

const data = [
  "Iš Didžiosios g. yra kiemukas prie seniausios Vilniuje, Šv. Mikalojaus bažnyčios, kur galima rasti lapų sieną",
  "Justiniškių viadukas virš Vakarinio aplinkkelio",
  "VGTU bendrabučių įvairovė",
  "Kodėl Senoji plytinė vadinasi Senoji plytinė?",
  "Kelias palei Nerį Paupyje (Aukštaičių g.)",
  "Ištisi Žirmūnų sandėliai",
  "Valakampių tiltas prie Žirmūnų paplūdimio",
  "Pakrantė po Šilo tiltu",
  "Takas palei Nerį link Žirmūnų paplūdimio",
  "Lūžių parkas!",
  "Kėdronų slėnis",
  "Kelionė link Vilnius Outlet per Litgrido HQ",
  "Vilniaus antrasis troleibusų (ir autobusų) parkas",
  "LR Užsienio reikalų ministerijos parkingas (labai gražus)",
  "Live Square terasos vaizdas",
  "Lukiškių aikštės žemių Time Capsule",
  "Skalvių, Žirmūnų ir Senosios plytinės viešojo transporto žiedai",
  "Tavo mama",
  'Vamzdys Neries pakrantėje ("arka")',
  "Visi Vilniaus tiltai virš Neries ypatingai ir gražūs. Mažiau populiarūs – Žvėryno, Lazdynų ir Valakampių tiltai.",
  "Vilnelės tilrai. Ypač FLUXUS (ir laiptai link Užupio nuo Bernardinų sodo/Sereikiškių parko)",
  "Gėjų vaivorykštė Pylimo g.",
  "Gėjų kavinės (visus kavinės, bet ypač Vero Her Excellency ir Vero CUP)",
  "Vilniaus g. ir Live Square veidrodžiai",
  "Stoties ekranas į Lenkiją",
  "Spaudos rūmų didybė",
  "Viršuliškių šiukšliadėžės",
  "Pašilaičių alkoholikai",
  "Klinikų st. link Antakalnio esantis troleibusų plakatas",
  "Gedimino prospektas slepia ramias gatves kaip A. Jakšto g.",
  "Tauro kalnas! Best kalnas.",
  "VU Medicinos fakulteto parkingo vaizdas nuo kalno į žalumyną",
  "Karoliniškių viadukas virš Laisvės pr. / T. Narbuto g. viadukas",
  "Lazdynų seniūnija, Lazdynai",
 
  "Trys kryžiai, Istorinis paminklas su vaizdu į miestą",
  "Vilniaus Šv. apaštalų Petro ir Povilo, XVII a. barokinė katalikų bažnyčia",
  "Vingio parkas, Miškingas paupio parkas su kavinėmis",
  "Nacionalinė dailės galerija, Keičiamos parodos šiuolaikinėje aplinkoje",
  "Vilniaus universiteto botanikos sodas, Renginiai universiteto soduose",
  "Galvė, Vieta vandens pramogoms ir pilies vaizdai",
  "Verkių regioninis parkas, Miško parkas su pasivaikščiojimo takais",
  "Energetikos ir technikos muziejus, Interakt. parodos buvusioje elektrinėje",
  "Literatų gatvė, Dekoratyvinėmis rašytojų lentelėmis garsi gatvė",
  "Liepkalnis, Slidžių sportas, Žiemos sportas, kalnų slidinėjimas ir slidinėjimo kurortas",
];

function showPlace() {
  const random = Math.floor(Math.random() * data.length);
  // console.log(random, data[random]);

  title.innerHTML = data[random];
}

btn.addEventListener("click", showPlace);
