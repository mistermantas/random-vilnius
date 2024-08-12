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

  // 100 less known places in Vilnius
  "Paslaptingas požeminis tunelis prie Vilniaus universiteto",
  "Senasis Žvėryno geležinkelio tiltas ir jo apylinkės",
  "Markučių dvaro parkas ir jo paslėptos skulptūros",
  "Šv. Ignoto vienuolynas ir jo ramybės oazė",
  "Žalieji ežerai ir jų smaragdinis vanduo",
  "Belmonto malūnas ir jo legendos",
  "Pūčkorių atodanga - Vilniaus gamtos stebuklas",
  "Vilniaus televizijos bokštas ir jo apžvalgos aikštelė",
  "Senosios Žydų kapinės - istorijos ir atminimo vieta",
  "Stiklių gatvė - viena seniausių ir siauriausių Vilniuje",
  "Šnipiškių rajonas - kontrastų kupina miesto dalis",
  "Rasų kapinės - istorijos ir meno lobynas",
  "Užupio meno inkubatorius - kūrybos ir bendruomeniškumo erdvė",
  "Senosios miesto sienos fragmentai",
  "Vilniaus gynybinės sienos bastėja",
  "Senasis Vilniaus arsenalas",
  "Tyzenhauzų rūmai",
  "Chodkevičių rūmai",
  "Sapiegų rūmai",
  "Radvilų rūmai",
  "Vilniaus universiteto observatorija",
  "Vilniaus universiteto bibliotekos kiemelis",
  "Šv. Onos ir Bernardinų bažnyčių ansamblis",
  "Šv. Kazimiero bažnyčia",
  "Šv. Teresės bažnyčia",
  "Visų Šventųjų bažnyčia",
  "Aušros Vartų koplyčia",
  "Pilies gatvė - viena seniausių ir gražiausių Vilniuje",
  "Didžioji gatvė - Vilniaus senamiesčio širdis",
  "Vokiečių gatvė - istorinė gatvė su senais pastatais",
  "Rotušės aikštė - Vilniaus senamiesčio centras",
  "Katedros aikštė - Vilniaus širdis",
  "Gedimino prospektas - pagrindinė Vilniaus gatvė",
  "Neries upės krantinė - puiki vieta pasivaikščiojimams",
  "Vingio parkas - didžiausias Vilniaus parkas",
  "Bernardinų sodas - jauki oazė miesto centre",
  "Kalnų parkas - kalvotas parkas su gražiais vaizdais",
  "Žvėryno tiltas - vienas gražiausių Vilniaus tiltų",
  "Lazdynų tiltas - modernus tiltas su įspūdinga konstrukcija",
  "Valakampių paplūdimys - puiki vieta poilsiui prie vandens",
  "Žalieji ežerai - gamtos oazė netoli Vilniaus",
  "Trakų pilis - viduramžių pilis ant ežero kranto",
  "Kernavė - pirmoji Lietuvos sostinė",
  "Druskininkai - kurortinis miestas su mineralinio vandens šaltiniais",
  "Anykščiai - miestelis su daugybe literatūrinių sąsajų",
  "Kaunas - antras pagal dydį Lietuvos miestas",
  "Klaipėda - Lietuvos uostamiestis",
  "Palanga - kurortinis miestas prie Baltijos jūros",
  "Nida - kurortinis miestelis Kuršių nerijoje",
  "Senoji plytinė - istorinis Vilniaus rajonas",
  "Žvėrynas - prestižinis Vilniaus rajonas",
  "Antakalnis - žalumos apsuptas Vilniaus rajonas",
  "Žirmūnai - tankiai apgyvendintas Vilniaus rajonas",
  "Fabijoniškės - vienas didžiausių Vilniaus mikrorajonų",
  "Justiniškės - miegamasis Vilniaus rajonas",
  "Pašilaičiai - sparčiai besiplečiantis Vilniaus rajonas",
  "Viršuliškės - vienas žaliausių Vilniaus mikrorajonų",
  "Lazdynai - senas ir žalias Vilniaus rajonas",
  "Karoliniškės - vienas didžiausių Vilniaus mikrorajonų",
  "Šeškinė - daugiakultūris Vilniaus rajonas",
  "Naujoji Vilnia - istorinis priemiestis su daugybe gamtos",
  "Grigiškės - pramoninis miestas netoli Vilniaus",
  "Elektrėnai - miestas su didžiausia Lietuvoje elektrine",
  "Visaginas - miestas su Ignalinos atomine elektrine",

  // 100 well known but perhaps not often visited places in Vilnius:
  "Lietuvos nacionalinis muziejus",
  "Valdovų rūmai",
  "Taikomosios dailės ir dizaino muziejus",
  "Pinigų muziejus",
  "Genocido aukų muziejus",
  "Vilniaus choralinė sinagoga",
  "Šv. Rapolo bažnyčia",
  "Evangelikų liuteronų bažnyčia",
  "Šv. Nikolajaus Stebukladario cerkvė",
  "Vilniaus universiteto Šv. Jonų bažnyčia",
  "Vilniaus evangelikų reformatų bažnyčia",
  "Vilniaus Šv. Dvasios vienuolynas",
  "Vilniaus Šv. Jurgio bažnyčia",
  "Vilniaus Šv. arkangelo Mykolo bažnyčia",
  "Vilniaus Šv. apaštalų Pilypo ir Jokūbo bažnyčia",
  "Vilniaus Šv. Kotrynos bažnyčia",
  "Vilniaus Šv. Mikalojaus bažnyčia",
  "Vilniaus Šv. Paraskevos cerkvė",
  "Vilniaus Šv. Sergijaus Radonežiečio cerkvė",
  "Vilniaus Šv. Trejybės bažnyčia",
  "Vilniaus universiteto Teologijos fakultetas",
  "Vilniaus universiteto Filologijos fakultetas",
  "Vilniaus universiteto Istorijos fakultetas",
  "Vilniaus universiteto Filosofijos fakultetas",
  "Vilniaus universiteto Ekonomikos fakultetas",
  "Vilniaus universiteto Teisės fakultetas",
  "Vilniaus universiteto Matematikos ir informatikos fakultetas",
  "Vilniaus universiteto Fizikos fakultetas",
  "Vilniaus universiteto Chemijos ir geomokslų fakultetas",
  "Vilniaus universiteto Gyvybės mokslų centras",
  "Vilniaus Gedimino technikos universitetas",
  "Mykolo Romerio universitetas",
  "Lietuvos muzikos ir teatro akademija",
  "Vilniaus dailės akademija",
  "Lietuvos edukologijos universitetas",
  "Vilniaus miesto savivaldybė",
  "Lietuvos Respublikos Seimas",
  "Lietuvos Respublikos Vyriausybė",
  "Lietuvos Respublikos Prezidentūra",
  "Lietuvos nacionalinis operos ir baleto teatras",
  "Lietuvos nacionalinis dramos teatras",
  "Lietuvos rusų dramos teatras",
  "Jaunimo teatras",
  "Lėlės teatras",
  "Keistuolių teatras",
  "OKT / Vilniaus miesto teatras",
  "Nacionalinė filharmonija",
  "Kongresų rūmai",
  "Sporto rūmai",
  "Siemens arena",
  "Vingio parkas estrados",
  "Kalnų parkas estrada",
  "Žaliasis tiltas",
  "Baltasis tiltas",
  "Geležinio Vilko tiltas",
  "Karaliaus Mindaugo tiltas",
  "Žvėryno tiltas",
  "Lazdynų tiltas",
  "Valakampių tiltas",
  "Europos parkas",
  "Belmonto pramogų parkas",
  " Vichy vandens parkas",
  "Ozo parkas",
  "Akropolis",
  "Panorama",
  "Gedimino 9",
  "GO9",
  "Europa",
  "VCUP",
  "Forum Cinemas Vingis",
  "Multikino",
  "Skalvijos kino teatras",
  "Pasaka",
  "Lietuvos kino centras",
  "Vingio istorijos muziejus",
  "Lietuvos aviacijos muziejus",
  "Geležinkelių muziejus",
  "Energetikos ir technikos muziejus",
  "Vilniaus gynybinės architektūros paveldo objektų sąrašas"
];

function showPlace() {
  const random = Math.floor(Math.random() * data.length);
  title.innerHTML = data[random];
}

btn.addEventListener("click", showPlace);
