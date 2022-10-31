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

var flag = 0;

btn.addEventListener("click", showPlace);

function handleClick(){
  var element = document.body;
  element.classList.toggle("light-mode");
  var themebtn = document.getElementById("theme-btn");

if(flag === 0){
  themebtn.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun" style="width: 32px; height: 32px" onclick="handleClick()"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
  flag = 1;
  
}else{
  themebtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon" style="width: 32px; height: 32px" onclick="handleClick()"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'
  flag = 0;
};

  
}



feather.replace()