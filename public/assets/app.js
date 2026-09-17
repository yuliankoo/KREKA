/* ================= DATA ================= */
const ICO={
  shield:'<path d="M12 3l7 3v5.5c0 4.4-3 8.1-7 9.5-4-1.4-7-5.1-7-9.5V6z"/><path d="M9 12l2 2 4-4"/>',
  camera:'<path d="M3 7h11l3 3v4l-3 3H3z"/><circle cx="8.5" cy="12" r="2.4"/><path d="M17 11l4-2v6l-4-2"/>',
  cable:'<circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v5m0 0l-5.6 5.4M12 12l5.6 5.4"/>',
  register:'<rect x="4" y="10" width="16" height="10" rx="1.5"/><path d="M7 10V3.5h10V10M8 14h2m2 0h2m2 0h.01M8 17h8"/>',
  laptop:'<rect x="4" y="4.5" width="16" height="11" rx="1.5"/><path d="M2 19.5h20"/>',
  door:'<rect x="5" y="3" width="11" height="18" rx="1"/><circle cx="13" cy="12" r=".9"/><path d="M19.5 8v8"/>',
  home:'<path d="M3.5 11L12 4l8.5 7"/><path d="M6 9.5V20h12V9.5"/><path d="M10 20v-5h4v5"/>',
  clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  key:'<circle cx="8" cy="12" r="3.5"/><path d="M11.5 12H21m-3 0v3m-3-3v2"/>',
  pin:'<path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0113 0c0 4.8-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
  fire:'<path d="M12 21c-3.9 0-6.5-2.6-6.5-6 0-3.7 3-5.4 3.5-9 2.3 1.3 3.5 3.2 3.5 5 1-.6 1.7-1.7 2-3 2.1 1.8 4 4.4 4 7 0 3.4-2.6 6-6.5 6z"/>',
  heart:'<path d="M12 20s-7.5-4.4-7.5-10A4.4 4.4 0 0112 7.3 4.4 4.4 0 0119.5 10c0 5.6-7.5 10-7.5 10z"/><path d="M7 12h2.5l1.5-2.5 2 5 1.5-2.5H17"/>',
  battery:'<rect x="3" y="7.5" width="16" height="9" rx="1.5"/><path d="M21 10.5v3M8 10l-1.5 2.5H10L8.5 15"/>',
  sun:'<circle cx="12" cy="12" r="3.8"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
  speaker:'<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 010 6M18 6.5a7.5 7.5 0 010 11"/>',
  eye:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/>',
  globe:'<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.6 3.5 5.4 3.5 8.5s-1.1 5.9-3.5 8.5c-2.4-2.6-3.5-5.4-3.5-8.5S9.6 6.1 12 3.5z"/>',
  tag:'<path d="M3.5 12.5V4h8.5l8.5 8.5-8.5 8.5z"/><circle cx="8" cy="8.5" r="1.3"/>',
  recycle:'<path d="M7 7.5l2.5-4h5L17 7.5M17 7.5h-3.5M17 7.5V4"/><path d="M19.5 13l2 4-2.5 4h-5"/><path d="M4.5 13l-2 4 2.5 4H10"/>',
  wrench:'<path d="M14.5 6.5a4 4 0 00-5.3 5L4 16.7 7.3 20l5.2-5.2a4 4 0 005-5.3l-2.5 2.5-2.5-.5-.5-2.5z"/>',
  remote:'<rect x="3" y="5" width="18" height="12" rx="1.5"/><path d="M8 21h8M12 17v4M9 11l2 2 4-4"/>',
  phone:'<path d="M5 4h3.5l2 5-2.5 1.5a11 11 0 005.5 5.5L15 13.5l5 2V19a1.5 1.5 0 01-1.5 1.5A15.5 15.5 0 013.5 5.5 1.5 1.5 0 015 4z"/>',
  search:'<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
  box:'<path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5z"/><path d="M3.5 7.5L12 12l8.5-4.5M12 12v9"/>',
  thermo:'<path d="M10 14.5V5a2 2 0 014 0v9.5a4 4 0 11-4 0z"/><path d="M12 9v7"/>',
  lift:'<path d="M3 18h13l2-4h3v4"/><circle cx="7" cy="19.5" r="1.5"/><circle cx="17" cy="19.5" r="1.5"/><path d="M8 18l5-9M11 5h5v4h-5z"/>',
  plan:'<path d="M4 4h16v16H4z"/><path d="M4 10h7v10M11 14h9M15 4v6"/>',
  van:'<path d="M2.5 16.5V7h11v9.5M13.5 10H18l3.5 3.5v3h-8"/><circle cx="6.5" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
  coin:'<ellipse cx="12" cy="7" rx="7" ry="3"/><path d="M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/>',
  school:'<path d="M2.5 9L12 4.5 21.5 9 12 13.5z"/><path d="M6.5 11v5c1.5 1.5 3.3 2.2 5.5 2.2s4-.7 5.5-2.2v-5"/>',
  helmet:'<path d="M4 16a8 8 0 0116 0z"/><path d="M2.5 16h19M12 8v4"/>',
  car:'<path d="M4 16.5V12l2-5h12l2 5v4.5"/><path d="M3 12h18"/><circle cx="7.5" cy="16.5" r="1.8"/><circle cx="16.5" cy="16.5" r="1.8"/>',
  user:'<circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-3.8 3.5-6 7-6s6.2 2.2 7 6"/>',
  building:'<path d="M5 21V4h9v17M14 9h5v12M3 21h18M8 8h3M8 12h3M8 16h3"/>',
  truck:'<path d="M2.5 6.5h11v10h-11zM13.5 10H18l3 3.5v3h-7.5"/><circle cx="6.5" cy="17.5" r="1.8"/><circle cx="17.5" cy="17.5" r="1.8"/>',
  cup:'<path d="M5 8h11v6a5 5 0 01-5 5h-1a5 5 0 01-5-5z"/><path d="M16 10h1.5a2.5 2.5 0 010 5H16M8 3.5c0 1 1 1.5 1 2.5M11.5 3.5c0 1 1 1.5 1 2.5"/>',
  bed:'<path d="M3 18V7M3 13h18v5M21 13v-2a3 3 0 00-3-3h-7v5"/><circle cx="7" cy="10.5" r="1.8"/>',
  city:'<path d="M3 21h18M5 21V10l4-3v14M9 21V4h6v17M15 21v-9h4v9"/>',
  hospital:'<path d="M4 21V5h16v16M3 21h18M12 8v5M9.5 10.5h5M10 21v-4h4v4"/>',
  hands:'<path d="M12 20s-7-4-7-9.5a3.5 3.5 0 017-1.6 3.5 3.5 0 017 1.6C19 16 12 20 12 20z"/>'
};
const ic=(n,cls='ico')=>'<span class="'+cls+'"><svg viewBox="0 0 24 24" aria-hidden="true">'+(ICO[n]||ICO.box)+'</svg></span>';

const CO={
  name:'KREKA SK s.r.o.',
  mobile:'+421 911 898 098', mobileHref:'tel:+421911898098',
  landline:'+421 48 619 89 98', landlineHref:'tel:+421486198998',
  email:'info@kreka.sk', support:'podpora@kreka.sk',
  seat:['Zelená 2C/X3','974 04 Banská Bystrica','Slovenská republika'],
  shop:['Šrámkova 2A','977 01 Brezno'],
  altAddr:['Námestie SNP 16','974 01 Banská Bystrica','Slovensko'],
  ico:'47529148', dic:'SK2023928621', license:'PT001249',
  iban:'SK81 0900 0000 0050 5314 2929', bank:'SLSP a.s.',
  orsr:'Zapísaná v ORSR Banská Bystrica, vložka číslo 26404/S',
  rpvs:'Zapísaná v registri partnerov verejného sektora, vložka číslo 23603',
  maps:'https://www.google.com/maps/search/?api=1&query=48.8038593,19.6425118',
  waze:'https://waze.com/ul?ll=48.8038593,19.6425118&navigate=yes',
  fb:'https://www.facebook.com/kreka.sk/'
};

/* "Spoľahlivý partner" — verbatim points from the original product pages */
const WHY_SEC=[
  'Dlhoročné skúsenosti v oblasti bezpečnostných systémov',
  'Profesionálne vzdelávaný tím kmeňových zamestnancov',
  'Kamenná prevádzka v Brezne s vlastným showroomom',
  'Spoľahlivé systémy dodávame v rámci celej Slovenskej republiky',
  'Profesionálne náradie a kvalitný inštalačný materiál',
  'Licencia na prevádzkovanie technickej služby udelená KRPZ Banská Bystrica č. PT 001249',
  'Spĺňame požiadavky noriem ISO 9001 a ISO 14001',
  'Záručný a pozáručný servis s možnosťou VIP HOTLINE služby',
  'Pripojenie objektu na pult centralizovanej ochrany (PCO) sesterskej spoločnosti Black Patrol, ktorý aj spravujeme'
];
const WHY_POS=[
  'Dlhoročné skúsenosti v oblasti systémov e-kasa',
  'Profesionálne vzdelávaný tím kmeňových zamestnancov',
  'Kamenná prevádzka v Brezne s vlastným showroomom',
  'Spoľahlivé systémy dodávame v rámci celej Slovenskej republiky',
  'Vlastné servisné stredisko v Brezne',
  'Spĺňame požiadavky noriem ISO 9001 a ISO 14001',
  'Záručný a pozáručný servis s možnosťou VIP HOTLINE služby'
];

const GROUPS=[
  {id:'zabezpecenie',name:'Zabezpečenie',desc:'Alarmy, kamery, požiarna signalizácia a ochrana informácií.'},
  {id:'pristup',name:'Prístup a dochádzka',desc:'Videovrátniky, dochádzka a vstup do objektov.'},
  {id:'siete',name:'Siete a energia',desc:'Kabeláž, záložné zdroje a solárne systémy.'},
  {id:'it',name:'IT, pokladnice a pripojenie',desc:'Výpočtová technika, e-kasa a Slovanet.'},
  {id:'dalsie',name:'Automatizácia a ďalšia technika',desc:'Ovládanie zariadení, ozvučenie a zdravotnícka technika.'},
  {id:'ponuky',name:'Výhodné ponuky',desc:'Akcie a bazár techniky.'}
];

/* section types: pills | checks | checks2 | html | calc ; related: {h, items} built from facts on other pages */
const PRODUCTS=[
{slug:'bezpecnostne-a-signalizacne-systemy',group:'zabezpecenie',icon:'shield',title:'Bezpečnostné a signalizačné systémy',
 short:'Dodávka a montáž elektronických zabezpečovacích systémov pre objekty a vozidlá vrátane pripojenia k PCO',
 kicker:'Naše skúsenosti, vaša bezpečnosť',
 intro:'V oblasti objektovej bezpečnosti pôsobíme od roku 2007 a poskytujeme komplexné riešenia pre zabezpečenie majetku, osôb a technológií.',
 text:['Uvedieme vás do problematiky ochrany rodiny a majetku, zanalyzujeme vaše potreby a pomôžeme vybrať riešenie šité na mieru s dlhodobou spoluprácou.','Návrhom systému, dodávkou a profesionálnou inštaláciou prvkov, ktoré sú jednotkou na trhu, naša spolupráca len začína. Potom vám poskytujeme servis vysokej úrovne. Neustále vzdelávanie a každodenná prax zvyšujú úroveň našich technikov. Naše systémy už chránia množstvo majetku a rodín.'],
 sections:[
  {h:'Chráňte s nami',type:'pills',items:['Dom','Chatu','Garáž','Byt','Firmu','Stavbu','Vozidlo','Čln','Obytný príves','Motocykel','Osobu']},
  {h:'Moderné inteligentné bezpečnostné systémy',type:'checks',items:['Detegujú pohyb, rozbitie skla, požiar, tieseň, zaplavenie, únik plynov a akceleráciu','Monitorujú teplotu, hladinu a jednotlivé stavy zariadení','Umožňujú ovládať osvetlenie, ventiláciu, kúrenie, zavlažovanie, spotrebiče, garážovú bránu a vstup do objektu, náhradný zdroj energie či čerpadlo','Automatizujú zariadenia','Signalizujú, oznamujú a hlásia informácie, privolávajú pomoc']},
  {h:'Cenné informácie a rady, s ktorými vám pomôžeme',type:'checks2',items:['Ako zabezpečiť byt, dom, chatu, garáž, sklad či areál','Ako zabezpečiť bicykel, motorku, karavan, motorový čln či vozidlo','Legislatíva a základné pojmy v oblasti bezpečnostných systémov','Typy ochrán a detektorov','Výhody a možnosti elektronického zabezpečenia majetku','Ceny typových inštalácií','Všetko o servise a pravidelných prehliadkach','Pripojenie objektu na pult centralizovanej ochrany','Často kladené otázky']}
 ],
 brands:['PARADOX SECURITY','JABLOTRON','HIKVISION','TEXECOM','OPTEX','ELDES','VIDEOFIED','NAM Technology','HONEYWELL Security','Ksenia'],
 why:'sec',cta:'Mám záujem o cenovú kalkuláciu'},
{slug:'kamerove-systemy',group:'zabezpecenie',icon:'camera',title:'Kamerové systémy',
 short:'Dodávka, montáž a servis kamerových systémov pre firmy, byty, domy, chaty, bytové domy, mestá a obce',
 kicker:'CCTV monitoring a kontrola s profesionálmi',
 intro:'Rozmýšľate, ktorému montážnemu partnerovi zveríte inštaláciu kamerového systému? Od roku 2007 poskytujeme profesionálne poradenstvo, dodávku a montáž kamerových CCTV technológií.',
 text:['Dlhodobo spolupracujeme s bytovými spoločenstvami, obcami, mestami aj súkromnými osobami. Sme mladý tím, ktorý pracuje najmodernejšími montážnymi postupmi, s profesionálnym náradím a vlastnou vysokozdvižnou plošinou.','Kamerový systém vám dá prehľad o dianí v objekte, dohľad nad firmou či rodinou odkiaľkoľvek cez smartfón, tablet alebo počítač. Vďaka inteligentným funkciám vás upozorní na nečakané návštevy a udalosti aj bez vašej prítomnosti.'],
 sections:[
  {h:'Monitorujte s nami',type:'pills',items:['Dom','Chatu','Garáž','Byt','Firmu','Stavbu','Vozidlo','Čln','Obytný príves','Motocykel','Osobu']},
  {h:'Moderné inteligentné kamerové systémy',type:'checks',items:['Detegujú a analyzujú pohyb, zvuk, vstup do vyznačenej oblasti, prekročenie plota, pribudnuté a chýbajúce predmety, čítajú ŠPZ vozidiel','Monitorujú teplotu','Vidia v noci vďaka technológiám nočného prísvitu','Spolupracujú s elektronickými zabezpečovacími systémami','Uchovávajú udalosti a dávajú prehľad o dianí počas vašej neprítomnosti','Umožňujú vzdialený prístup k systému','Podporujú inteligentné funkcie pri analýze obrazu','Signalizujú, oznamujú a hlásia informácie, privolávajú pomoc']},
  {h:'Cenné informácie a rady, s ktorými vám pomôžeme',type:'checks2',items:['Kamerový systém pre byt, dom, firmu, bytový dom, vozidlo či osobu','Dostupné technológie a teória','Základné pojmy v oblasti kamerových systémov','Prvky kamerového systému','Výhody kamerového systému','Ceny typových inštalácií','Servis a starostlivosť pri používaní systému','Často kladené otázky']}
 ],
 brands:['HIKVISION','DAHUA','VIDEOFIED','PARADOX SECURITY','SAMSUNG','PANASONIC','Ksenia'],
 why:'sec',cta:'Mám záujem o cenovú kalkuláciu'},
{slug:'poziarna-signalizacia',group:'zabezpecenie',icon:'fire',title:'Požiarna signalizácia',
 short:'Dodávka, montáž a servis systémov pre včasnú identifikáciu a lokalizáciu požiaru v objekte',
 kicker:'Elektrická požiarna signalizácia EPS',
 intro:'EPS je súbor technických prostriedkov na včasnú detekciu a lokalizáciu vznikajúceho požiaru. Automaticky odovzdá informáciu osobám a požiarnym pultom, aby požiarna jednotka zasiahla včas a škody zostali čo najmenšie.',
 text:['Systém dokáže samočinne uviesť do prevádzky aj hasiace zariadenia, napríklad požiarne ventily s hasiacou látkou. Projekciu smie vykonávať len oprávnená osoba v konzultácii s požiarnym technikom a pri projekcii treba striktne dodržať postupy predpísané normou EÚ.'],
 sections:[
  {h:'Z čoho sa EPS skladá',type:'html',html:'<ol class="flow"><li><b>Požiarne hlásiče</b><span>Samočinné a tlačidlové. Špeciálne hlásiče detegujú horľavé, výbušné a jedovaté plyny.</span></li><li><b>Požiarne slučky</b><span>Vedenie, ktoré spája hlásič alebo skupinu hlásičov so vstupom ústredne.</span></li><li><b>Ústredňa EPS</b><span>Vyhodnotí udalosti z hlásičov a vyhlási poplach.</span></li><li><b>Signalizačné linky</b><span>Spájajú doplňujúce zariadenia s výstupmi ústredne.</span></li><li><b>Doplňujúce zariadenia</b><span>Signalizácia, komunikátory, hasiace zariadenia, riadiace jednotky.</span></li></ol>'},
  {h:'Úloha ústredne',type:'checks',items:['Vyhodnocuje udalosti z hlásičov a vyhlasuje poplach','Priamo alebo nepriamo ovláda zariadenia, ktoré bránia šíreniu požiaru: požiarne dvere, samočinné hasiace zariadenie, vypínanie elektriny či vzduchotechniky','Poskytuje okamžité informácie o požiari a odosiela ich na vopred určené miesta','Proti nežiaducemu spusteniu má dve dvojice slučiek s logicky viazaným výstupom. Hasiace zariadenie sa spustí až pri súčasnom impulze z hlásičov na oboch slučkách']},
  {h:'Doplňujúce zariadenia',type:'pills',items:['Optická signalizácia','Akustická signalizácia','Komunikátory na hlásenie poplachu','Stabilné hasiace zariadenia','Ovládacia jednotka','Registračná a riadiaca jednotka']},
  {h:'Kombinácia s ďalšími systémami',type:'pills',items:['Centrálny monitorovací systém','Priemyselná televízia PTV','Kontrola vstupov SKV','Poplachový systém hlásenia narušenia PSN','Stabilné hasiace zariadenie SHZ','Automatizačné systémy']},
  {h:'Inštalácia a servis',type:'text',text:'Inštaláciu EPS aj realizáciu trás musí vykonávať odborne vyškolená osoba s oprávnením. EPS chráni váš dom, penzión či firmu, preto je nutná aj pravidelná kontrola, funkčné skúšky a servis.'}
 ],
 why:'sec',cta:'Mám záujem o ponuku'},
{slug:'gps-monitoring',group:'zabezpecenie',icon:'pin',title:'GPS Monitoring',
 short:'Dodávka, montáž a servis kontrolných zariadení GPS',
 related:{h:'Súvisiace služby',items:[['Servis GPS monitorovacích zariadení','sluzby/servis-bezpecnostnych-a-signalizacnych-systemov'],['Prenájom GPS monitorovacích zariadení pre vozidlá','sluzby/prenajom-zariadeni']]}},
{slug:'spionazna-obranna-technika',group:'zabezpecenie',icon:'eye',title:'Špionážna a obranná technika',
 short:'Poradenstvo, predaj a servis špionážnej a obrannej techniky',
 intro:'Informácie o vašej osobe, podnikaní a rodine môžu byť cieľom technológií na ich získavanie. Predávame a servisujeme techniku, ktorá vám dá prehľad o firme a zároveň znižuje riziko úniku informácií.',
 text:['Obranná technika slúži najmä na ochranu citlivých informácií, predovšetkým proti odpočúvaniu a skrytému nahrávaniu. Špionážna technika pomáha pri riešení situácií, ako sú miznúce dokumenty a predmety či zavádzajúce informácie vo firme.'],
 sections:[
  {h:'Špionážna technika',type:'checks2',items:['Špionážne minikamery a skryté kamery na zákazku, napríklad v hodinách či rádiobudíkoch','Produkty na sledovanie vozidiel','Fotopasce','Minikamery so záznamom','Inšpekčné kamery','Prenájom zariadení']},
  {h:'Obranná technika',type:'checks2',items:['Detektory špionážnych zariadení: ploštíc, odposluchov a skrytých kamier','Šifrovaná komunikácia','Tieniace obaly pre mobilné telefóny, komunikačné zariadenia a laptopy','Generátory bieleho šumu proti odposluchu a nahrávaniu','Prehliadky proti odpočúvaniu a skrytým záznamovým zariadeniam']}
 ],
 links:[['sluzby/prehliadky-priestorov-proti-odpocuvaniu','Prehliadky priestorov proti odpočúvaniu']],
 cta:'Mám záujem o informácie, poradenstvo a prehliadku priestorov'},
{slug:'videovratniky',group:'pristup',icon:'door',title:'Videovrátniky',
 short:'Dodávka, montáž a servis videovrátnikov a prístupových systémov',
 related:{h:'Čo realizujeme',items:[['IP a analógové videovrátniky a intercomy',''],['Príprava rozvodov pre videovrátniky a zvončekový systém','sluzby/projekcia-systemov'],['Servis videovrátnikov','sluzby/servis-bezpecnostnych-a-signalizacnych-systemov']]}},
{slug:'dochadzkove-systemy',group:'pristup',icon:'clock',title:'Dochádzkové systémy',
 short:'Dodávka, montáž a servis systémov pre evidenciu dochádzky a prístupu',
 related:{h:'Čo realizujeme',items:[['Dochádzkové a prístupové systémy',''],['Servis dochádzkových systémov Biometric','sluzby/servis-bezpecnostnych-a-signalizacnych-systemov'],['Referencia: Lesy Mesta Brezno','referencie']]}},
{slug:'pristupove-ovladacie-systemy',group:'pristup',icon:'key',title:'Prístupové a ovládacie systémy',
 short:'Dodávka, montáž a servis systémov pre evidenciu a prístup do objektov',
 related:{h:'Čo realizujeme',items:[['Príprava pre prístupový systém a elektronické zámky','sluzby/projekcia-systemov'],['Servis prístupových systémov','sluzby/servis-bezpecnostnych-a-signalizacnych-systemov']]}},
{slug:'strukturovana-kabelaz-rozvody',group:'siete',icon:'cable',title:'Štruktúrovaná kabeláž a rozvody',
 short:'Dodávka, montáž a servis optických sietí, štruktúrovanej slaboprúdovej kabeláže a rozvodov pre objekty',
 kicker:'Optické siete a štruktúrovaná kabeláž',
 intro:'Od svojho vzniku pomáhame klientom s komplexnou predprípravou optickej a štruktúrovanej kabeláže a slaboprúdových rozvodov, aby bolo kedykoľvek možné nainštalovať kamerové a zabezpečovacie systémy, sieťové prvky, videovrátniky či domácu automatizáciu.',
 text:['Navrhneme, pripravíme projekciu a zrealizujeme prípravu vašej nehnuteľnosti, či ide o rekonštrukciu alebo novostavbu.'],
 sections:[
  {h:'Predvídajte s nami pri stavbe a rekonštrukcii',type:'pills',items:['Dom','Chatu','Garáž','Byt','Firmu','Stavbu']},
  {h:'Optické a metalické rozvody',type:'checks',items:['Zabezpečujú konektivitu medzi koncovým prvkom a technickou miestnosťou s inštalovanou technológiou','Umožňujú inštaláciu IP kamier, sieťových zásuviek, detektorov alarmu, teplomerov, prístupových a dochádzkových systémov','Zamedzujú dodatočnej inštalácii PVC líšt a nevkusných inštalačných materiálov','Ponúkajú vyššiu spoľahlivosť v porovnaní s bezdrôtovými riešeniami','Obmedzujú vyžarovanie bezdrôtových signálov']},
  {h:'Kategórie štruktúrovanej kabeláže',type:'html',html:'<div class="table-wrap"><table class="table"><thead><tr><th>Kategória</th><th>Schválená</th><th>Šírka pásma</th><th>Prenos a použitie</th></tr></thead><tbody><tr><td>Cat. 3</td><td>–</td><td>–</td><td>Najnižšia kategória, dnes najmä telefónne rozvody. Max. 10 Mb/s (10Base-T)</td></tr><tr><td>Cat. 5</td><td>1995</td><td>–</td><td>Historická kategória nahradená Cat. 5E. Max. 100 Mb/s (100Base-T)</td></tr><tr class="hl"><td>Cat. 5E</td><td>–</td><td>100 MHz</td><td>Stále najrozšírenejšia. Prenesie Gigabit Ethernet, 1 Gb/s je limit</td></tr><tr class="hl"><td>Cat. 6</td><td>2002</td><td>250 MHz</td><td>Vynikajúca spoľahlivosť 1 Gb/s, čiastočne aj 10GBase-T</td></tr><tr><td>Cat. 6A</td><td>2008</td><td>500 MHz</td><td>Plnohodnotný 10GBase-T na bežné vzdialenosti, aj pre bežné LAN siete</td></tr><tr><td>Cat. 7</td><td>2002 (len kábel)</td><td>cca 600 MHz</td><td>Prvá zmienka 1997, schválený kábel bez spojovacieho hardvéru</td></tr><tr><td>Cat. 7A</td><td>–</td><td>cca 1000 MHz</td><td>Pravdepodobný nástupca Cat. 7</td></tr></tbody></table></div>'}
 ],
 brands:['SOLARIX','ELAN','HIKVISION','NOVOBIT','PARADOX SECURITY','JABLOTRON'],
 why:'sec',cta:'Mám záujem o cenovú kalkuláciu'},
{slug:'zalozne-zdroje-akumulatory',group:'siete',icon:'battery',title:'Záložné zdroje a akumulátory',
 short:'Dodávka a servis zariadení pre ochranu a zálohu elektrickej siete',
 related:{h:'Súvisiace služby',items:[['Výmena záložných akumulátorov bezpečnostných systémov','sluzby/servis-bezpecnostnych-a-signalizacnych-systemov'],['Servis záložných zdrojov elektrickej energie','sluzby/servis-vypoctovej-techniky'],['Príprava pre záložné zdroje pri projekcii','sluzby/projekcia-systemov']]}},
{slug:'solarne-systemy',group:'siete',icon:'sun',title:'Solárne systémy',
 short:'Solárne a ostrovné systémy',
 related:{h:'Súvisiace',items:[['Návrh a projekcia solárnych a ostrovných systémov','sluzby/projekcia-systemov'],['Referencie: kamerové a zabezpečovacie systémy pre fotovoltaické elektrárne','referencie']]}},
{slug:'vypoctova-technika',group:'it',icon:'laptop',title:'Výpočtová technika',
 short:'Dodávka a servis IT technológií a príslušenstva',
 kicker:'IT výpočtová a kancelárska technika',
 intro:'Patríme medzi poskytovateľov kvalitných a spoľahlivých IT riešení na slovenskom trhu. Dlhoročné skúsenosti uplatňujeme aj v kamennej prevádzke v Brezne, kde vám poradíme, techniku dodáme a riešenie zrealizujeme na mieru.',
 sections:[
  {h:'Hardvér',type:'checks2',items:['Počítače a notebooky','Servery','Storage a zálohovacie riešenia','Aktívne a pasívne sieťové prvky','Tlačiarne a spotrebný materiál','PC komponenty: pevné disky, pamäte, zdroje, adaptéry, webkamery, procesory, chladiče, základné dosky, grafické karty, optické mechaniky']},
  {h:'Softvér',type:'checks2',items:['Kancelársky softvér','Antivírusový softvér','Operačné systémy','Zálohovací softvér','Ekonomický softvér','Špecializovaný softvér']},
  {h:'Naša ponuka v e-shopoch',type:'shops',items:['eshop.kreka.sk','refurbished.sk']}
 ]},
{slug:'registracne-pokladnice',group:'it',icon:'register',title:'Registračné pokladnice a POS systémy',
 short:'Dodávka a servis ORP a VRP registračných pokladníc, systémov a komplexné riešenia na mieru',
 kicker:'e-kasa registračné pokladnice a POS systémy',
 intro:'Zaoberáme sa zariadeniami a systémami podporovanými systémom finančnej kasy e-kasa a pomôžeme vám zorientovať sa v neustále sa meniacej legislatíve a povinnostiach.',
 text:['V kamennej prevádzke KREKA na Šrámkovej ulici v Brezne náš odborne vzdelávaný personál zanalyzuje vaše potreby a poradí s výberom vhodného e-kasa zariadenia. Dbáme na to, aby evidencia tržieb bola v súlade so zákonom a obsluha jednoduchá.'],
 sections:[
  {h:'Evidujte s nami',type:'html',html:'<dl class="spec"><div><dt>VRP</dt><dd>Virtuálna pokladnica</dd></div><div><dt>ORP</dt><dd>Online registračná pokladnica</dd></div><div><dt>POS</dt><dd>Komplexné e-kasa riešenie pre prevádzky</dd></div></dl>'},
  {h:'Moderné e-kasa systémy',type:'checks',items:['Evidujú elektronicky tržby v systéme e-kasa','Umožňujú pripojiť elektronické váhy, skenery EAN kódov, externé displeje, platobné terminály, overovače bankoviek a zásuvky na peniaze','Spolupracujú s ekonomickým softvérom Oberon, MRP, Pohoda či Money S3','Zobrazujú a tlačia prehľadové uzávierky','Majú funkcie vkladov, výberov, platby kartou a úhrady faktúr']},
  {h:'Naša ponuka e-kasa riešení',type:'shops',items:['virtualna-pokladna.sk']}
 ],
 brands:['ELCOM','MRP','FiskalPro','Axis distribution','A3soft','Bowa','Marketa','O2'],
 why:'pos',cta:'Mám záujem o ponuku'},
{slug:'slovanet',group:'it',icon:'globe',title:'Slovanet',
 short:'Internet, telefonovanie a televízia',
 intro:'Zastupujeme významného slovenského poskytovateľa internetových a telekomunikačných služieb.',
 text:['Priamo v našej prevádzke si overíte dostupnosť služieb podľa adresy bydliska, poradíme vám, aký balík je pre vás najvhodnejší, a zmluvu uzatvoríte s naším obchodným zástupcom.'],
 sections:[{h:'Služby',type:'html',html:'<dl class="spec"><div><dt>Internet</dt><dd style="font-size:1rem;font-weight:400;letter-spacing:0">Pripojenie najlepšou a spoľahlivou technológiou dostupnou na vašej adrese.</dd></div><div><dt>Telefonovanie</dt><dd style="font-size:1rem;font-weight:400;letter-spacing:0">Výhodnejšie volania, v sieti Slovanetu zadarmo. Komfortne s bezdrôtovým telefónom.</dd></div><div><dt>Televízia</dt><dd style="font-size:1rem;font-weight:400;letter-spacing:0">Viac ako stovka programov, mnohé v HD, archív vysielania.</dd></div></dl>'}],
 cta:'Overiť dostupnosť v predajni'},
{slug:'ovladanie-automatizacia-kurenia',group:'dalsie',icon:'home',title:'Ovládanie a automatizácia zariadení',
 short:'Dodávka, montáž a servis automatizačných systémov pre ovládanie zariadení',
 related:{h:'Čo realizujeme',items:[['Domáca inteligentná automatizácia a ovládanie elektrických zariadení',''],['Servis elektronickej regulácie kúrenia a automatizácie Jablotron','sluzby/servis-bezpecnostnych-a-signalizacnych-systemov'],['Ovládanie spotrebičov na diaľku cez GSM a IP','sluzby/servis-bezpecnostnych-a-signalizacnych-systemov']]}},
{slug:'ozvucovacia-konferencna-technika',group:'dalsie',icon:'speaker',title:'Ozvučovacia a konferenčná technika',
 short:'Audio ozvučenie, konferenčná, premietacia a projekčná technika',
 related:{h:'Súvisiace',items:[['Príprava pre audio ozvučenie a konferenčnú techniku','sluzby/projekcia-systemov'],['Príprava pre premietaciu a projekčnú techniku','sluzby/projekcia-systemov']]}},
{slug:'zdravotnicka-technika',group:'dalsie',icon:'heart',title:'Zdravotnícka technika',
 short:'Monitoring dychu, tiesňové hlásiče a privolávače pomoci'},
{slug:'aktualne-akcie',group:'ponuky',icon:'tag',title:'Akcie na produkty',
 short:'Momentálne prebiehajúce akcie na produkty a značky',
 empty:{h:'Práve nemáme zverejnenú žiadnu akciu',p:'Na aktuálne akcie sa spýtajte telefonicky alebo priamo v predajni v Brezne.'}},
{slug:'bazar-techniky',group:'ponuky',icon:'recycle',title:'Bazár techniky',
 short:'Používané systémy od zákazníkov, predvádzacie systémy za zvýhodnené ceny',
 empty:{h:'V bazári momentálne nie je zverejnená žiadna ponuka',p:'Na dostupnú používanú a predvádzaciu techniku sa spýtajte telefonicky alebo v predajni v Brezne.'}}
];
const SERVICES=[
{slug:'objednat-servisny-vyjazd',icon:'wrench',title:'Objednať servis alebo službu',short:'Nahláste poruchu alebo objednajte servisný výjazd online',route:'objednat-servis'},
{slug:'servis-na-dialku',icon:'remote',title:'Servis na diaľku',short:'Vzdialená IT podpora cez licencovanú aplikáciu TeamViewer',
 kicker:'Vzdialená podpora',
 intro:'Rozumieme, že IT podporu potrebujete flexibilne a čo najefektívnejšie. Nech ste kdekoľvek a nech je vaša firma akokoľvek veľká, pomocou licencovanej aplikácie TeamViewer sa k vášmu počítaču pripojíme bez ohľadu na operačný systém.',
 text:['Aplikácia umožňuje prenos súborov a ovládanie zariadenia na diaľku. Vďaka elektronickému reportu máte prehľad o vykonaných službách a presnom čase servisného zásahu.'],
 sections:[
  {h:'Ako to funguje',type:'html',html:'<ol class="steps"><li><div><b>Stiahnite si TeamViewer</b><span>Odkazy nájdete nižšie.</span></div></li><li><div><b>Spustite aplikáciu</b><span>Vygeneruje vám ID číslo a heslo.</span></div></li><li><div><b>Nahláste ID a heslo technikovi</b><span>Technik sa jednoducho pripojí.</span></div></li><li><div><b>Problém vyriešime na diaľku</b><span>Po zásahu máte elektronický report.</span></div></li></ol>'},
  {h:'Stiahnuť TeamViewer',type:'dl'}
 ]},
{slug:'hotline-podpora',icon:'phone',title:'HOTLINE podpora',short:'Telefonická podpora pre zmluvných aj nezmluvných klientov',
 intro:'Poskytujeme HOTLINE telefonickú podporu pre našich zmluvných aj nezmluvných klientov.',
 sections:[{h:'Kontakty pre telefonickú podporu',type:'contacts'}]},
{slug:'servis-erp-pokladni-a-prislusenstva',icon:'register',title:'Servis VRP a ORP pokladníc a príslušenstva e-kasa',short:'Poradenstvo, predaj a servis pokladníc, POS terminálov a príslušenstva',
 kicker:'VRP a ORP pokladnice a POS systémy',
 intro:'Bezplatne vám poradíme s výberom zariadenia kompatibilného so systémom e-kasa, aby ste splnili požiadavky zákona o elektronickej evidencii tržieb.',
 text:['Poradíme pri kúpe registračných pokladníc e-kasa a POS terminálov, e-kasa tlačiarní, snímačov čiarových kódov, váh, testerov bankoviek a príslušenstva. Predajom spolupráca nekončí: servis poskytujeme v servisnom stredisku v Brezne na Šrámkovej 2A alebo priamo u vás prostredníctvom vyškoleného technika.'],
 sections:[
  {h:'Poskytované služby',type:'checks',items:['Fiskalizácia pokladnice','Uvedenie pokladnice do prevádzky so zápisom do knihy pokladnice','Zálohovanie elektronického žurnálu na CD/DVD alebo USB flash disk','Pravidelné servisné prehliadky pokladníc a POS systémov','Výmena chráneného dátového úložiska','Programovanie položiek, úprava loga na účtenke','Servisné opravy pokladníc a príslušenstva']},
  {h:'Výrobcovia a značky, ktoré servisujeme',type:'pills',items:['Elcom','MRP','BOWA','Datecs','Varos','FiskalPro']}
 ],cta:'Objednať servis pokladnice'},
{slug:'servis-bezpecnostnych-a-signalizacnych-systemov',icon:'shield',title:'Servis bezpečnostnej a automatizačnej techniky',short:'Revízie, opravy, rozšírenia a zmluvný servis',
 intro:'Bezpečnostnú a automatizačnú techniku servisujeme od roku 2007. Vďaka neustálemu vzdelávaniu v teórii aj praxi poskytujeme kvalitnú záručnú a pozáručnú starostlivosť.',
 text:['Pravidelnou starostlivosťou zabezpečíte dlhú životnosť a spoľahlivosť zabezpečenia a ono sa vám odvďačí ochranou a dohľadom nad majetkom.'],
 sections:[
  {h:'Poskytované služby',type:'checks2',items:['Revízne prehliadky systémov','Funkčné skúšky zariadení','Analýza, návrh a projekcia systémov pre budovy, rodinné domy, karavany, člny a chaty','Servisné opravy systémov a zariadení','Výmena záložných akumulátorov','Zmeny vlastností systémov podľa požiadaviek používateľa','Zmeny kódov a prístupov','Zálohovanie kamerových záznamov a výpisov z ústrední EZS','Rozšírenie a modernizácia existujúcich systémov','Náhradné diely systémov','Záručný, pozáručný a zmluvný servis']},
  {h:'Servis, rozšírenia a opravy zariadení',type:'checks2',items:['Elektronické zabezpečovacie systémy EZS: PARADOX, JABLOTRON, ELDES, Castle, Texecom a iné','Kamerové systémy IP a Turbo HD: Hikvision a iné','Dochádzkové systémy Biometric','Elektronická regulácia kúrenia a automatizácia Jablotron','Prístupové systémy','Požiarna signalizácia EPS','Videovrátniky','Ovládanie spotrebičov na diaľku cez GSM a IP','GPS monitorovacie zariadenia','Zbernice zabezpečovacích a ovládacích systémov']}
 ],cta:'Objednať servis'},
{slug:'servis-vypoctovej-techniky',icon:'laptop',title:'Servis výpočtovej techniky, sietí a príslušenstva',short:'Hardvér, softvér, siete, vzdelávanie a poradenstvo',
 intro:'Poskytujeme komplexný servis výpočtovej IT techniky pre aktívne aj pasívne zariadenia. Máme kamennú prevádzku, veľkú skladovú zásobu náhradných dielov a servisné stredisko.',
 text:['Naši technici sa neustále vzdelávajú, o čom svedčí aj množstvo certifikátov zo školení. Servisné stredisko má modernú meraciu techniku a náradie na správne určenie závady a jej opravu.'],
 sections:[
  {h:'Servisujeme zariadenia',type:'pills',items:['Počítače','Notebooky','Servery','Tablety','Tlačiarne a kancelárska technika','Záložné zdroje elektrickej energie','Monitory','Aktívne a pasívne sieťové prvky']},
  {h:'Hardvérové opravy a servisné práce',type:'checks2',items:['Diagnostika, profylaktika, meranie a kontrola','Výmena vadných dielov, batérií a akumulátorov','Výmena rozbitých displejov','Oprava funkčných a pohyblivých častí','Výmena spotrebného materiálu','Skladanie počítačov na mieru','Oprava flex káblov a výmena poškodených konektorov','Upgrade počítačov','Testovanie a diagnostika komponentov','Zváranie optických vlákien a montáž koncových zariadení','Vedenie štruktúrovanej kabeláže vrátane osadenia koncových prvkov']},
  {h:'Softvérové práce',type:'checks2',items:['Inštalácia operačných systémov, aplikácií a softvéru','Optimalizácia výkonu operačného systému','Zálohovanie dát','Šírenie Wi-Fi signálu','Konfigurácia počítačových sietí a koncových zariadení']},
  {h:'Vzdelávanie a poradenstvo',type:'checks',items:['Školiaca činnosť pre ovládanie IT techniky','Odborné poradenstvo pri kúpe vhodného IT zariadenia','Poradenstvo pri používaní IT zariadení a ich softvéru']}
 ],cta:'Objednať IT servis'},
{slug:'servisne-balicky-pre-firmy',icon:'box',title:'Balíčky pre firmy',short:'Servisné balíčky starostlivosti a servisné zmluvy pre firmy'},
{slug:'akcie-na-sluzby',icon:'tag',title:'Akcie na služby',short:'Sezónne akcie na služby ako revízie, prehliadky EZS či profylaktika PC',empty:{h:'Práve nemáme zverejnenú akciu na služby',p:'Sezónne akcie, napríklad na revízie, prehliadky zabezpečovacích systémov či profylaktiku PC, zverejňujeme podľa vopred pripraveného plánu. Na aktuálnu ponuku sa spýtajte telefonicky.'}},
{slug:'download-sekcia',icon:'remote',title:'Download sekcia',short:'Aplikácie na stiahnutie pre servis na diaľku',intro:'Na stiahnutie ponúkame aplikáciu TeamViewer, cez ktorú sa náš technik pripojí k vášmu zariadeniu pri servise na diaľku.',sections:[{h:'Stiahnuť TeamViewer',type:'dl'}],links:[['sluzby/servis-na-dialku','Ako funguje servis na diaľku']]},
{slug:'projekcia-systemov',icon:'plan',title:'Návrh a projekcia systémov',short:'Poradenstvo a projekcia slaboprúdových rozvodov a systémov pre objekty',
 kicker:'Ako ďalej? Na čo nesmiem zabudnúť? Čo ešte chýba?',
 intro:'Začali ste s rekonštrukciou, výstavbou alebo ste v štádiu prípravy? Mnoho klientov podcení prípravu a neskôr chce riešenie bez stavebných zásahov. Preto sa oplatí poradiť ešte vtedy, keď je nehnuteľnosť na výkresoch.',
 text:['Poskytujeme poradenstvo a projekciu systémov vrátane zakreslenia káblových trás pre koncové zariadenia.'],
 sections:[
  {h:'Na čo je dobré pripraviť sa do budúcnosti',type:'checks2',items:['Elektronický zabezpečovací systém EZS','Kamerový systém','Štruktúrovaná kabeláž pre počítačovú sieť LAN','Prístupový systém','Dochádzkový systém','Požiarna signalizácia EPS','Obranná a antišpionážna technika SPY','Perimetrická ochrana pozemku','Elektronické zámky','Svetlá a osvetlenie','GSM a internetové ovládanie spotrebičov, inteligentná inštalácia','Záložné zdroje elektrickej energie','Audio ozvučenie a konferenčná technika','Premietacia a projekčná technika','Rodinné dátové zálohovanie a zdieľanie dát','Automatizácia a ovládanie kúrenia','Videovrátniky a zvončekový systém','Optická sieť','Vybavenie technickej miestnosti','Solárne a ostrovné systémy']},
  {h:'Ako postupujeme',type:'html',html:'<ol class="steps"><li><div><b>Pošlite nám projekt od architekta</b><span>V elektronickej podobe vo formáte PDF, DWG alebo SVG.</span></div></li><li><div><b>Navrhneme kabeláž a systémy</b><span>Vrátane cenových kalkulácií pre vašu nehnuteľnosť.</span></div></li><li><div><b>Zakreslíme rozmiestnenie prvkov</b><span>V softvéri EdrawMax, aby každý elektrikár bez problémov potiahol kabeláž na potrebné miesta.</span></div></li></ol>'}
 ],cta:'Poslať projekt na posúdenie'},
{slug:'prehliadky-priestorov-proti-odpocuvaniu',icon:'search',title:'Prehliadky priestorov proti odpočúvaniu',short:'Kontroly objektov a vozidiel pred nežiaducim odposluchom a lokalizáciou',
 intro:'Prehliadky sú určené pre tých, ktorí majú podozrenie z úniku informácií preberaných v kancelárii, byte alebo vozidle. S vyhľadávaním odpočúvacích zariadení máme dlhoročné skúsenosti a používame profesionálnu techniku, neporovnateľnú s bežnými detektormi z internetu.',
 sections:[
  {h:'Spoľahlivo odhalíme signály',type:'pills',items:['GSM','LTE','UHF','3G','Bluetooth','Wi-Fi','Wi-Max']},
  {h:'Ponuka služieb',type:'checks',items:['Vyhľadávanie odpočúvacích zariadení v miestnostiach: kancelárie, byty, sklady, predajne','Vyhľadávanie lokalizačných a odpočúvacích zariadení v automobiloch a karavanoch','Zabezpečenie priestorov proti odpočúvaniu: analýza rizík a návrh optimálnej obrany','VIP dohľady: pravidelné prehliadky s dennou, týždennou alebo mesačnou frekvenciou']},
  {h:'Postup pri odbornej prehliadke',type:'html',html:'<ol class="steps"><li><div><b>Prehliadka proti aktívnym odpočúvacím zariadeniam</b></div></li><li><div><b>Prehliadka proti pasívnym odpočúvacím zariadeniam</b></div></li><li><div><b>Detekcia manipulácie na pevných linkách</b></div></li><li><div><b>Prehliadka proti ukrytým monitorovacím zariadeniam a pinhole objektívom</b></div></li></ol><p class="note" style="font-size:.95rem;color:var(--ink-2)">Prehliadku vykonávajú fyzicky aj pomocou detektorov 1 až 3 skúsení pracovníci. Pri podozrivom signáli zariadenie alebo nábytok fyzicky skontrolujeme a rozoberieme profesionálnym náradím tak, aby sa nepoškodili.</p>'},
  {h:'Cenník prehliadky priestorov',type:'html',html:'<div class="table-wrap"><table class="table"><thead><tr><th>Plocha</th><th>Cena</th></tr></thead><tbody><tr><td>Do 50 m²</td><td class="num">26 € / m²</td></tr><tr><td>Do 100 m²</td><td class="num">23 € / m²</td></tr><tr><td>Do 200 m²</td><td class="num">20 € / m²</td></tr><tr><td>Nad 200 m²</td><td class="num">17 € / m²</td></tr></tbody></table></div><h3 style="font-size:1.05rem;font-weight:500;margin:26px 0 6px">Prehliadky automobilov (bez DPH)</h3><div class="table-wrap"><table class="table"><tbody><tr><td>Malé a stredné vozidlá</td><td class="num">250 €</td></tr><tr><td>SUV</td><td class="num">290 €</td></tr></tbody></table></div><p class="note">Ceny prehliadok sú konečné, nezahŕňajú prepravu v rámci SR. Prehliadky vozidiel vykonáva firemný špecialista priamo u klienta, podmienkou je krytý priestor (napr. garáž).</p>'},
  {h:'Orientačná kalkulácia',type:'calc',calc:'sweep'}
 ],
 links:[['produkty/spionazna-obranna-technika','Špionážna a obranná technika']],cta:'Objednať prehliadku'},
{slug:'prenajom-zariadeni',icon:'box',title:'Prenájom techniky',short:'Krátkodobý aj dlhodobý prenájom IT a bezpečnostnej techniky',
 intro:'Prenajímame IT techniku aj špionážnu a obrannú techniku, krátkodobo aj dlhodobo.',
 sections:[
  {h:'IT technika',type:'pills',items:['Tlačiarne','Notebooky','Prenosné routre','Prenosné pevné disky','Flash disky']},
  {h:'Bezpečnostná, špionážna a obranná technika',type:'checks2',items:['GPS monitorovacie zariadenia pre vozidlá','Kamerové systémy Hikvision','Zabezpečovacie bezdrôtové zariadenia PARADOX a ELDES','Skryté a prenosné zariadenia na audio a video záznam, prenosné DVR a NVR','Detektory odposluchov, ploštíc a skrytých kamier vrátane zaškolenia obsluhy','Generátory bieleho šumu']},
  {h:'Služby spojené s prenájmom',type:'checks',items:['Inštalácia zariadenia na požadovanom mieste','Doprava zariadenia','Stiahnutie záznamu zo zariadenia','Poradenstvo a zaškolenie počas doby nájmu']},
  {h:'Podmienky prenájmu',type:'checks',items:['Podpísanie zmluvy o zapožičaní zariadenia','Zariadenia zapožičiavame len osobám starším ako 18 rokov a štátnym príslušníkom Slovenskej republiky','Zaplatenie zálohy za zariadenie vopred']}
 ],cta:'Mám záujem o prenájom'},
{slug:'autodoprava',icon:'van',title:'Autodoprava a prenájom vozidiel',short:'Autodoprava, sťahovanie a prenájom vozidiel',
 intro:'Ponúkame autodopravu, sťahovanie a prenájom vozidiel.',
 sections:[
  {h:'Mercedes-Benz Sprinter Maxi 2.2 315 CDi',type:'html',html:'<dl class="spec"><div><dt>Rok výroby</dt><dd>2009</dd></div><div><dt>Motor a výkon</dt><dd>2.2 CDi, 110 kW</dd></div><div><dt>Palivo</dt><dd>Nafta</dd></div><div><dt>Cena prepravy</dt><dd>0,70 € / km</dd></div><div><dt>Stojné</dt><dd>10 € / hod</dd></div></dl>'},
  {h:'Orientačná kalkulácia',type:'calc',calc:'van'}
 ],cta:'Objednať prepravu'},
{slug:'prenajom-plosiny-a-vyskove-prace',icon:'lift',title:'Prenájom vysokozdvižnej plošiny',short:'Dosah autoplošiny 9,6 m, vybavená zdrojom 230 V v koši',
 kicker:'Renault Master FDC1H6MOD s nadstavbou Versalift E-32-LE',
 intro:'Vysokozdvižnú autoplošinu prenajímame vrátane spôsobilej osoby na obsluhu.',
 sections:[
  {h:'Parametre autoplošiny',type:'html',html:'<dl class="spec"><div><dt>Max. výška</dt><dd>9,6 m</dd></div><div><dt>Max. bočný dosah</dt><dd>7,1 m</dd></div><div><dt>Max. hmotnosť v koši</dt><dd>120 kg + náradie</dd></div><div><dt>Napätie v koši</dt><dd>230 V, max. 2800 W</dd></div><div><dt>Prenájom</dt><dd>30 € / hod</dd></div><div><dt>Doprava</dt><dd>0,80 € / km</dd></div></dl><p class="note">Ceny sú bez DPH. Plošinu je možné pripojiť na elektrickú sieť.</p>'},
  {h:'Orientačná kalkulácia',type:'calc',calc:'lift'},
  {h:'Výškové práce a služby s autoplošinou',type:'checks2',items:['Montáž, servis a čistenie kamerových systémov','Montáž zabezpečovacích systémov','Montáž osvetlenia, výmena žiaroviek','Montáž Wi-Fi antén pre diaľkové prenosy','Montáž satelitných tanierov','Montáž bleskozvodov','Montáž elektrických prípojok','Vedenie elektrického a slaboprúdového vedenia vo výškach','Zrezávanie prečnievajúcich stromov a drevín','Čistenie fasád a okien','Odchyt včelích rojov','Čistenie žľabov','Natieračské práce vo výške','Montážne práce vo výške','Odpratávanie snehu zo striech, odstraňovanie námrazy a cencúľov']}
 ],cta:'Objednať plošinu'},
{slug:'skolenia-a-workshopy',icon:'school',title:'Školenia a workshopy',short:'Školenia a workshopy',
 related:{h:'Súvisiace',items:[['Školiaca činnosť pre ovládanie IT techniky','sluzby/servis-vypoctovej-techniky']]}},
{slug:'meranie-termokamerou',icon:'thermo',title:'Meranie termokamerou',short:'Diagnostika objektov termovíznou kamerou',
 related:{h:'Súvisiace',items:[['Certifikát: Základy práce s termokamerou','certifikaty']]}},
{slug:'stavebne-prace',icon:'helmet',title:'Stavebné práce a realizácia stavieb',short:'Stavebné práce a realizácia stavieb'},
{slug:'financne-sluzby',icon:'coin',title:'Finančné služby',short:'Poradenstvo v oblasti prefinancovania techniky leasingom',
 intro:'Modernizáciu techniky pre vaše podnikanie často zastaví nedostatok financií. Preto spolupracujeme so silným partnerom GRENKE, ktorý umožňuje podnikateľom nakupovať techniku formou leasingu s veľmi prijateľnými podmienkami.',
 sections:[
  {h:'Riešenie pre všetkých',type:'text',text:'Klasický alebo finančný leasing? Prípadne prenájom s komplexnými službami? Spolu s partnermi nájdeme typ financovania, ktorý najlepšie vyhovuje vám a vášmu projektu.'},
  {h:'Jednoduchosť',type:'html',html:'<p>Financovanie vybavíte rýchlo priamo u nás, u svojho dodávateľa. Uzatvorenie zmluvy s GRENKE je podstatne rýchlejšie ako vybavenie úveru.</p><dl class="spec" style="margin-top:18px"><div><dt>Spracovanie žiadosti</dt><dd>do 30 minút online</dd></div><div><dt>Schválenie bez účtovných výkazov</dt><dd>do 7 500 €</dd></div><div><dt>Akontácia</dt><dd>štandardne nulová</dd></div><div><dt>Financovanie</dt><dd>aj softvér a služby</dd></div></dl>'},
  {h:'Čo vieme leasingovať',type:'pills',items:['IT techniku','Tlačiarne a kopírky','Reštauračné a pokladničné systémy','Tlačové stroje','Kamerové systémy','Zabezpečovacie systémy','Komplexné riešenia na mieru']}
 ],cta:'Požiadať o ponuku od GRENKE'}
];

/* segments from "Riešenia na kľúč" — names are original; products & references are links to real data */
const SEGMENTS=[
 {id:'nehnutelnosti',icon:'building',name:'Nehnuteľnosti',p:['bezpecnostne-a-signalizacne-systemy','kamerove-systemy','strukturovana-kabelaz-rozvody','poziarna-signalizacia'],r:[]},
 {id:'vozidla',icon:'car',name:'Vozidlá',p:['bezpecnostne-a-signalizacne-systemy','kamerove-systemy','gps-monitoring'],r:[]},
 {id:'osoby',icon:'user',name:'Osoby',p:['bezpecnostne-a-signalizacne-systemy','kamerove-systemy','zdravotnicka-technika'],r:[]},
 {id:'domacnosti',icon:'home',name:'Domácnosti',p:['bezpecnostne-a-signalizacne-systemy','kamerove-systemy','videovratniky','ovladanie-automatizacia-kurenia','slovanet'],r:[]},
 {id:'firmy',icon:'building',name:'Podnikatelia a firmy',p:['kamerove-systemy','bezpecnostne-a-signalizacne-systemy','vypoctova-technika','strukturovana-kabelaz-rozvody','dochadzkove-systemy'],r:['Formetal','Haggi Group','IN Elis SK a CZ','REA-S','Medmetal','Kame s.r.o.','K.R.T. Brezno s.r.o.','3P Plus s.r.o.','PB Tel s.r.o.','Sekológ Brezno']},
 {id:'logistika',icon:'truck',name:'Prepravcovia a logistika',p:['gps-monitoring','kamerove-systemy','bezpecnostne-a-signalizacne-systemy'],r:[]},
 {id:'restauracie',icon:'cup',name:'Reštauračné zariadenia, bary',p:['registracne-pokladnice','kamerove-systemy','bezpecnostne-a-signalizacne-systemy'],r:['KP Gastro Donovaly','Salaš Zbojská','Reštaurácia La Trattoria','Retro Bar Brezno','Motorest Nemecká','Route 66 Polomka']},
 {id:'hotely',icon:'bed',name:'Hotely a turizmus',p:['kamerove-systemy','registracne-pokladnice','poziarna-signalizacia','strukturovana-kabelaz-rozvody'],r:['KP Gastro Donovaly','Salaš Zbojská']},
 {id:'seniori',icon:'hands',name:'Hospice a zariadenia pre seniorov',p:['zdravotnicka-technika','poziarna-signalizacia','kamerove-systemy'],r:[]},
 {id:'bytove',icon:'city',name:'Vchody a bytové spoločenstvá',sub:'Komplexné riešenia pre potreby bytových domov',p:['kamerove-systemy','videovratniky','pristupove-ovladacie-systemy'],r:['ŽP BYTOS, s.r.o.','Bytové družstvo Brezno']},
 {id:'obce',icon:'city',name:'Mestá a obce',p:['kamerove-systemy','bezpecnostne-a-signalizacne-systemy','strukturovana-kabelaz-rozvody'],r:['Mesto Brezno','Obec Bystrá','Obec Heľpa','Obec Polomka','Obec Čierny Balog','Obec Valaská']},
 {id:'skoly',icon:'school',name:'Školy a školské zariadenia',p:['vypoctova-technika','strukturovana-kabelaz-rozvody','kamerove-systemy'],r:['ZŠ a MŠ Mazorníkovo','Detský domov Valaská']},
 {id:'zdravotnictvo',icon:'hospital',name:'Zdravotníctvo, lekári a nemocnice',p:['zdravotnicka-technika','vypoctova-technika','poziarna-signalizacia'],r:[]}
];

/* realized projects — verbatim client list, work split into tags */
const REFS=[
 ['Obec Bystrá',['Zabezpečovací systém','Kamerový systém']],
 ['Obec Heľpa',['Zabezpečovací systém','Kamerový systém']],
 ['Obec Polomka',['Zabezpečovací systém','Kamerový systém']],
 ['Obec Čierny Balog',['Zabezpečovací systém','Kamerový systém']],
 ['Obec Valaská',['Zabezpečovací systém']],
 ['Black Patrol',['Dodávka a správa PCO NAM, Jablotron, Paradox']],
 ['Sekológ Brezno',['Zabezpečovací systém']],
 ['Mesto Brezno',['Kamerový systém']],
 ['Lesy Mesta Brezno',['Kamerový systém','Dochádzkový systém','Zabezpečovací systém']],
 ['KP Gastro Donovaly',['Kamerový systém','Pokladničný systém']],
 ['IN Elis SK a CZ',['Štruktúrovaná kabeláž','IT technika','Serverové riešenie','Pokladničný systém']],
 ['ZŠ a MŠ Mazorníkovo',['Štruktúrovaná kabeláž','Správa siete','IT technika']],
 ['REA-S',['Kamerový systém']],
 ['Formetal',['Zabezpečovací systém','Štruktúrovaná kabeláž','Serverové riešenie','IT technika']],
 ['Haggi Group',['Zabezpečovací systém','Kamerový systém','IT technika','Štruktúrovaná kabeláž']],
 ['Fotovoltaická elektráreň Rohozná',['Kamerový systém','Zabezpečovací systém','Správa siete']],
 ['Fotovoltaická elektráreň Vápenica',['Kamerový systém','Zabezpečovací systém','Správa siete']],
 ['Fotovoltaická elektráreň Farkašovo',['Kamerový systém','Zabezpečovací systém','Správa siete']],
 ['Fotovoltaická elektráreň MK3',['Kamerový systém','Zabezpečovací systém','Správa siete']],
 ['Fotovoltaická elektráreň MK4',['Kamerový systém','Zabezpečovací systém','Správa siete']],
 ['Medmetal',['Kamerový systém','Nočné osvetlenie objektu','Zabezpečovací systém']],
 ['Route 66 Polomka',['Zabezpečovací systém','Kamerový systém']],
 ['Salaš Zbojská',['Pokladničný systém','Správa IT','Kamerový systém','Zabezpečovací systém']],
 ['Retro Bar Brezno',['Kamerový systém','Zabezpečovací systém']],
 ['Reštaurácia La Trattoria',['Pokladničný systém','Správa IT']],
 ['PB Tel s.r.o.',['Zabezpečovací systém','Kamerový systém','Správa IT','Spotrebný materiál','Montáže O2 zariadení']],
 ['Rímskokatolícka cirkev, Farnosť Valaská',['Zabezpečovací systém']],
 ['Detský domov Valaská',['Štruktúrovaná kabeláž','Správa siete','Správa IT']],
 ['ŽP BYTOS, s.r.o.',['Spotrebný materiál','Kamerový systém','Servis']],
 ['Bytové družstvo Brezno',['Kamerový systém','Servis']],
 ['Úrad práce, sociálnych vecí a rodiny Brezno',['Štruktúrovaná kabeláž','Správa IT','Spotrebný materiál']],
 ['Kame s.r.o.',['Zabezpečovací systém','Kamerový systém','Správa IT','Spotrebný materiál']],
 ['Motorest Nemecká',['Zabezpečovací systém','Kamerový systém']],
 ['K.R.T. Brezno s.r.o.',['Zabezpečovací systém','Kamerový systém','Správa IT','Spotrebný materiál','Serverové riešenie']],
 ['3P Plus s.r.o.',['Kamerový systém','Zabezpečovací systém']],
 ['Obvodný úrad Brezno',['Spotrebný materiál']]
];

const CERTS=[
 ['Základy práce s termokamerou','Školenie','IR'],
 ['ISO 9001','Anglická verzia (EN)','9001'],
 ['ISO 9001','Slovenská verzia (SK)','9001'],
 ['ISO 14001','Anglická verzia (EN)','14001'],
 ['ISO 14001','Slovenská verzia (SK)','14001'],
 ['Oprávnenie Technická inšpekcia','Oprávnenie','TI'],
 ['Osvedčenie o odbornej spôsobilosti v elektrotechnike','§ 23 Elektrotechnik na riadenie činnosti alebo na riadenie prevádzky','§23'],
 ['Technická licencia č. PT 001249','Licencia na prevádzkovanie technickej služby','PT']
];

const PARTNERS=[
 ['Bezpečnostné a kamerové systémy',[['PARADOX SECURITY','výrobca bezpečnostných systémov','http://www.paradox.com','www.paradox.com'],['JABLOTRON','výrobca bezpečnostných systémov','http://www.jablotron.sk','www.jablotron.sk'],['ELDES','výrobca bezpečnostných systémov','http://www.eldesalarms.com','www.eldesalarms.com'],['HIKVISION','výrobca kamerových systémov','http://www.hikvision.com','www.hikvision.com']]],
 ['Registračné pokladnice',[['ELCOM','výrobca registračných pokladníc a systémov','http://www.elcom.sk','www.elcom.sk'],['DATECS','výrobca registračných pokladníc a systémov','http://bowa.sk','bowa.sk'],['VAROS','výrobca registračných pokladníc a systémov','http://varos.sk','varos.sk'],['QUORION','výrobca registračných pokladníc a systémov','http://www.quorion.de','www.quorion.de']]]
];

const ESHOPS=[
 {name:'virtualna-pokladna.sk',url:'https://www.virtualna-pokladna.sk',desc:'Pokladnice a riešenia pre systém e-kasa.',items:['VRP virtuálne pokladnice a tlačiarne pre systém e-kasa','ORP online registračné pokladnice pre systém e-kasa','POS systémy a komplexné riešenia pre prevádzky','Príslušenstvo a doplnky k VRP a ORP pokladniciam','Počítače, servery a príslušenstvo','Ekonomický a antivírusový softvér']},
 {name:'e-katalóg kreka.sk',url:'http://www.kreka.ekatalog.biz',desc:'E-shop so širokou ponukou IT techniky.',items:['Počítače','Notebooky','Servery','PC komponenty','PC príslušenstvo','Sieťové prvky a príslušenstvo','Softvér']},
 {name:'eshop.kreka.sk',url:'https://eshop.kreka.sk',desc:'IT výpočtová a kancelárska technika.',items:[]},
 {name:'refurbished.sk',url:'https://www.refurbished.sk',desc:'Ďalší e-shop s IT technikou.',items:[]}
];

const TECH=['IP sieťové a analógové Turbo HD kamerové systémy','Slučkové, zbernicové, bezdrôtové a hybridné alarmy a signalizačné systémy','IP a analógové videovrátniky, intercomy','Dochádzkové a prístupové systémy','Dátové zálohovacie zariadenia','Domáca inteligentná automatizácia a ovládanie elektrických zariadení','Optické a metalické siete LAN, pasívne a aktívne sieťové prvky','E-kasa pokladničné systémy a príslušenstvo','Záručný a pozáručný servis v Brezne a po celom území Slovenskej republiky'];
const BRANDS=['Hewlett-Packard','Canon','Ubiquiti','TP-Link','Hikvision','Dahua','Avigilon','Paradox','Jablotron','Eldes','Texecom','Optex'];
const QUOTES=[['Toner, počítač, server, alarm, vždy špičkové služby, fandím Vám!','Zoltán'],['Ochotný personál, skvelé služby. Rád nakúpim znova.','Michal']];
/* ================= RENDER HELPERS ================= */
const H=p=>'#/'+p;
const P=s=>PRODUCTS.find(x=>x.slug===s);
const S=s=>SERVICES.find(x=>x.slug===s);
const svcHref=s=>s.route?H(s.route):H('sluzby/'+s.slug);
const list=(items,cls)=>'<ul class="'+cls+'">'+items.map(i=>'<li>'+i+'</li>').join('')+'</ul>';
const crumbs=arr=>'<ol class="crumbs">'+arr.map(([t,h])=>'<li>'+(h!==undefined?'<a href="'+H(h)+'">'+t+'</a>':'<span aria-current="page">'+t+'</span>')+'</li>').join('')+'</ol>';
const orderHref=(kat,popis)=>H('objednat-servis?'+new URLSearchParams({kat:kat||'',popis:popis||''}).toString());
const katFor=g=>({it:'IT technika'}[g]||(g==='pos'?'Pokladničné systémy':'Bezpečnostné systémy'));

function pageHero(title,lead,cr,meta){
  return '<header class="page-hero"><div class="wrap">'+crumbs(cr)+'<h1 class="page-title">'+title+'</h1>'+(lead?'<p class="page-lead">'+lead+'</p>':'')+(meta||'')+'</div></header>';
}
function shopLinks(names){
  return '<div class="mini-links">'+names.map(n=>{const e=ESHOPS.find(x=>x.name===n);return '<a href="'+e.url+'" target="_blank" rel="noopener">'+ic('globe')+'<span><b>'+e.name+'</b><br><small>'+e.desc+'</small></span></a>'}).join('')+'</div>';
}
function contactLinks(){
  const mail='<svg viewBox="0 0 24 24"><rect x="3" y="5.5" width="18" height="13" rx="1.5"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';
  return '<div class="mini-links"><a href="'+CO.mobileHref+'">'+ic('phone')+'<span><b>'+CO.mobile+'</b><br><small>Mobil</small></span></a><a href="'+CO.landlineHref+'">'+ic('phone')+'<span><b>'+CO.landline+'</b><br><small>Pevná linka</small></span></a><a href="mailto:'+CO.support+'"><span class="ico">'+mail+'</span><span><b>'+CO.support+'</b><br><small>E-mail podpory</small></span></a></div>';
}
function renderSection(s){
  let body='';
  if(s.type==='pills')body=list(s.items,'pills');
  else if(s.type==='checks')body=list(s.items,'checks');
  else if(s.type==='checks2')body=list(s.items,'checks two');
  else if(s.type==='html')body=s.html;
  else if(s.type==='text')body='<p>'+s.text+'</p>';
  else if(s.type==='shops')body=shopLinks(s.items);
  else if(s.type==='contacts')body=contactLinks();
  else if(s.type==='calc')body=calcHTML(s.calc);
  else if(s.type==='dl')body='<div class="mini-links">'+['Mac OS','Windows','Linux','Android'].map(o=>'<a href="https://www.teamviewer.com/sk/stiahnut/" target="_blank" rel="noopener"><span class="ico"><svg viewBox="0 0 24 24"><path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14"/></svg></span><span><b>TeamViewer</b><br><small>'+o+'</small></span></a>').join('')+'</div>';
  return '<section class="panel glass"><h2>'+s.h+'</h2>'+body+'</section>';
}
function whyBlock(kind){
  const items=kind==='pos'?WHY_POS:WHY_SEC;
  return '<section class="panel glass"><h2>Spoľahlivý partner</h2>'+list(items,'checks two')+'</section>';
}
function brandsBlock(b){return '<section class="panel glass"><h2>Portfólio od profesionálov</h2>'+list(b,'pills')+'</section>'}
function introBlock(o){
  if(!o.intro)return '';
  return '<section class="panel glass">'+(o.kicker?'<h2>'+o.kicker+'</h2>':'')+'<p class="intro">'+o.intro+'</p>'+(o.text||[]).map(t=>'<p>'+t+'</p>').join('')+'</section>';
}
function relatedBlock(o,kind){
  const r=o.related;
  const head='<section class="panel glass"><h2>Podrobnosti vám povieme osobne</h2><p>K tejto oblasti vám radi poradíme telefonicky alebo priamo v predajni v Brezne, kde máme vlastný showroom a servisné stredisko.</p><div class="page-meta"><a class="btn btn-primary" href="'+CO.mobileHref+'">Zavolať '+CO.mobile+'</a><a class="btn btn-ghost" href="'+orderHref(kind,o.title)+'">Napísať dopyt</a></div></section>';
  if(!r)return head;
  return head+'<section class="panel glass"><h2>'+r.h+'</h2><div class="mini-links">'+r.items.map(([t,h])=>h?'<a href="'+H(h)+'">'+ic(o.icon)+'<span>'+t+'</span></a>':'<a href="'+H('o-nas')+'">'+ic(o.icon)+'<span>'+t+'</span></a>').join('')+'</div></section>';
}
function ctaCard(o,kind){
  return '<div class="cta-card glass"><h4>'+(o.cta||'Máte otázku?')+'</h4><p>Zavolajte alebo nám pošlite dopyt. Ozveme sa vám.</p><a class="btn btn-primary" href="'+orderHref(kind,o.title)+'">Napísať dopyt</a><a class="btn btn-ghost" href="'+CO.mobileHref+'">'+CO.mobile+'</a></div>';
}
function subnav(title,items,active,base){
  return '<nav class="subnav glass" aria-label="'+title+'"><h4>'+title+'</h4>'+items.map(i=>'<a href="'+(i.route?H(i.route):H(base+i.slug))+'"'+(i.slug===active?' class="on" aria-current="page"':'')+'>'+i.title+'</a>').join('')+'</nav>';
}
function calcHTML(kind){
  if(kind==='lift')return '<div class="calc" data-calc="lift"><div class="calc-in"><div class="range"><label for="c-h">Doba prenájmu <output id="o-h">3 hod</output></label><input id="c-h" type="range" min="1" max="12" value="3"></div><div class="range"><label for="c-km">Najazdené kilometre <output id="o-km">20 km</output></label><input id="c-km" type="range" min="0" max="300" step="5" value="20"></div></div><div class="calc-out"><dl><div><dt>Prenájom (30 € / hod)</dt><dd id="r-a"></dd></div><div><dt>Doprava (0,80 € / km)</dt><dd id="r-b"></dd></div></dl><div class="calc-total" id="r-t"></div></div></div><p class="note">Orientačný výpočet z cenníka. DPH 23 % je dopočítaná. Presnú cenu potvrdíme pri objednávke.</p>';
  if(kind==='van')return '<div class="calc" data-calc="van"><div class="calc-in"><div class="range"><label for="c-km">Vzdialenosť <output id="o-km">50 km</output></label><input id="c-km" type="range" min="0" max="800" step="10" value="50"></div><div class="range"><label for="c-h">Stojné <output id="o-h">1 hod</output></label><input id="c-h" type="range" min="0" max="24" value="1"></div></div><div class="calc-out"><dl><div><dt>Preprava (0,70 € / km)</dt><dd id="r-a"></dd></div><div><dt>Stojné (10 € / hod)</dt><dd id="r-b"></dd></div></dl><div class="calc-total" id="r-t"></div></div></div><p class="note">Orientačný výpočet z cenníka. Presnú cenu potvrdíme pri objednávke.</p>';
  return '<div class="calc" data-calc="sweep"><div class="calc-in"><div class="seg" role="group" aria-label="Typ prehliadky"><button type="button" class="on" data-mode="room">Priestory</button><button type="button" data-mode="car">Malé a stredné vozidlo</button><button type="button" data-mode="suv">SUV</button></div><div class="range" id="area-wrap"><label for="c-m">Plocha <output id="o-m">60 m²</output></label><input id="c-m" type="range" min="10" max="400" step="5" value="60"></div></div><div class="calc-out"><dl><div><dt id="r-la">Sadzba</dt><dd id="r-a"></dd></div><div><dt>Doprava</dt><dd>účtuje sa zvlášť</dd></div></dl><div class="calc-total" id="r-t"></div></div></div>';
}

/* ================= PAGES ================= */
function pageProductsIndex(){
  let out=pageHero('Produkty','Dodávame, montujeme a servisujeme techniku v 19 oblastiach. Vyberte si, čo vás zaujíma.',[['O nás',''],['Produkty']]);
  out+='<div class="page-body"><div class="catalog">'+GROUPS.map(g=>{
    const items=PRODUCTS.filter(p=>p.group===g.id);
    return '<section class="cat-group"><header><h2>'+g.name+'</h2><p>'+g.desc+'</p></header><ul class="cat-list glass">'+items.map(p=>'<li><a class="cat-row" href="'+H('produkty/'+p.slug)+'">'+ic(p.icon)+'<span><b>'+p.title+'</b><span>'+p.short+'</span></span><em>'+(p.sections?'Podrobne':'Informácie')+'</em></a></li>').join('')+'</ul></section>';
  }).join('')+'</div></div>';
  return {title:'Produkty',html:out};
}
function pageProduct(slug){
  const p=P(slug);if(!p)return null;
  const kind=p.group==='it'&&p.slug==='registracne-pokladnice'?'pos':(p.group==='it'?'it':'sec');
  const g=GROUPS.find(x=>x.id===p.group);
  let main='';
  if(p.empty){
    main='<section class="empty glass">'+ic(p.icon)+'<h2 style="margin-top:18px">'+p.empty.h+'</h2><p>'+p.empty.p+'</p><a class="btn btn-primary" href="'+CO.mobileHref+'">Zavolať '+CO.mobile+'</a><a class="btn btn-ghost" href="'+H('kontakt')+'">Kontakt a otváracie hodiny</a></section>';
  }else if(!p.sections){
    main=relatedBlock(p,katFor(kind));
  }else{
    main=introBlock(p)+p.sections.map(renderSection).join('')+(p.brands?brandsBlock(p.brands):'')+(p.why?whyBlock(p.why):'');
    if(p.links)main+='<section class="panel glass"><h2>Súvisiace</h2><div class="mini-links">'+p.links.map(([h,t])=>'<a href="'+H(h)+'">'+ic('search')+'<span>'+t+'</span></a>').join('')+'</div></section>';
  }
  const aside='<aside class="aside">'+ctaCard(p,katFor(kind))+subnav('Produkty',PRODUCTS,slug,'produkty/')+'</aside>';
  const meta='<div class="page-meta"><span class="tag"><i></i>'+g.name+'</span>'+(p.brands?'<span class="tag">'+p.brands.length+' značiek</span>':'')+'</div>';
  return {title:p.title,html:pageHero(p.title,p.short,[['O nás',''],['Produkty','produkty'],[p.title]],meta)+'<div class="page-body"><div class="layout"><div class="stack">'+main+'</div>'+aside+'</div></div>'};
}
function pageServicesIndex(){
  const main=SERVICES.filter(s=>s.slug!=='objednat-servisny-vyjazd');
  let out=pageHero('Služby','Servis v Brezne aj po celom Slovensku, projekcia, prenájom techniky a ďalšie služby.',[['O nás',''],['Služby']],'<div class="page-meta"><a class="btn btn-primary" href="'+H('objednat-servis')+'">Objednať servis alebo službu</a><a class="btn btn-ghost" href="'+H('sluzby/hotline-podpora')+'">HOTLINE podpora</a></div>');
  const groups=[
    ['Servis a podpora','Keď niečo nefunguje.',['servis-na-dialku','download-sekcia','hotline-podpora','servis-erp-pokladni-a-prislusenstva','servis-bezpecnostnych-a-signalizacnych-systemov','servis-vypoctovej-techniky','servisne-balicky-pre-firmy']],
    ['Návrh a špeciálne služby','Pred stavbou a pri ochrane informácií.',['projekcia-systemov','prehliadky-priestorov-proti-odpocuvaniu','meranie-termokamerou','skolenia-a-workshopy']],
    ['Prenájom a doprava','Technika, plošina a dodávka.',['prenajom-zariadeni','prenajom-plosiny-a-vyskove-prace','autodoprava']],
    ['Stavba, financovanie a akcie','Realizácia, leasing a výhodné ponuky.',['stavebne-prace','financne-sluzby','akcie-na-sluzby']]
  ];
  out+='<div class="page-body"><div class="catalog">'+groups.map(([n,d,sl])=>'<section class="cat-group"><header><h2>'+n+'</h2><p>'+d+'</p></header><ul class="cat-list glass">'+sl.map(S).map(s=>'<li><a class="cat-row" href="'+svcHref(s)+'">'+ic(s.icon)+'<span><b>'+s.title+'</b><span>'+s.short+'</span></span><em>'+(s.sections?'Podrobne':'Informácie')+'</em></a></li>').join('')+'</ul></section>').join('')+'</div></div>';
  return {title:'Služby',html:out};
}
function pageService(slug){
  const s=S(slug);if(!s)return null;
  if(s.route)return pageOrder();
  const kat=/pokladn/.test(slug)?'Pokladničné systémy':(/vypoctov|dialku|skolen/.test(slug)?'IT technika':'Bezpečnostné systémy');
  let main=s.empty?'<section class="empty glass">'+ic(s.icon)+'<h2 style="margin-top:18px">'+s.empty.h+'</h2><p>'+s.empty.p+'</p><a class="btn btn-primary" href="'+CO.mobileHref+'">Zavolať '+CO.mobile+'</a><a class="btn btn-ghost" href="'+H('objednat-servis')+'">Objednať servis</a></section>':(s.sections?introBlock(s)+s.sections.map(renderSection).join(''):relatedBlock(s,kat));
  if(s.sections&&s.links)main+='<section class="panel glass"><h2>Súvisiace</h2><div class="mini-links">'+s.links.map(([h,t])=>'<a href="'+H(h)+'">'+ic('eye')+'<span>'+t+'</span></a>').join('')+'</div></section>';
  const aside='<aside class="aside">'+ctaCard(s,kat)+subnav('Služby',SERVICES,slug,'sluzby/')+'</aside>';
  return {title:s.title,html:pageHero(s.title,s.short,[['O nás',''],['Služby','sluzby'],[s.title]])+'<div class="page-body"><div class="layout"><div class="stack">'+main+'</div>'+aside+'</div></div>',after:initCalcs};
}
function pageSolutions(q){
  const cur=SEGMENTS.find(x=>x.id===q.s)||SEGMENTS[0];
  let out=pageHero('Riešenia na kľúč','Vyberte, pre koho techniku hľadáte. Ukážeme súvisiace produkty a projekty, ktoré sme v tejto oblasti už realizovali.',[['O nás',''],['Riešenia na kľúč']]);
  out+='<div class="page-body"><div class="wrap seg-explorer"><div class="seg-tabs glass" role="tablist" aria-label="Pre koho">'+SEGMENTS.map(s=>'<button role="tab" type="button" data-seg="'+s.id+'" aria-selected="'+(s===cur)+'"'+(s===cur?' class="on"':'')+'>'+s.name+'</button>').join('')+'<button role="tab" type="button" data-go="sluzby/financne-sluzby">Finančné služby</button></div><div class="seg-panel panel glass" id="segPanel" aria-live="polite">'+segPanel(cur)+'</div></div></div>';
  return {title:'Riešenia na kľúč',html:out,after:initSegments};
}
function segPanel(s){
  let h=ic(s.icon)+'<h2 style="margin-top:18px">'+s.name+'</h2>'+(s.sub?'<p class="sub">'+s.sub+'</p>':'');
  h+='<h3>Súvisiace produkty</h3><div class="mini-links">'+s.p.map(P).map(p=>'<a href="'+H('produkty/'+p.slug)+'">'+ic(p.icon)+'<span>'+p.title+'</span></a>').join('')+'</div>';
  if(s.r.length)h+='<h3>Realizovali sme napríklad</h3>'+list(s.r,'pills');
  h+='<div class="page-meta"><a class="btn btn-primary" href="'+orderHref('',('Riešenie na kľúč: '+s.name))+'">Chcem riešenie na mieru</a><a class="btn btn-ghost" href="'+H('sluzby/financne-sluzby')+'">Financovanie leasingom</a></div>';
  return h;
}
function pageReferences(){
  const tags={};REFS.forEach(([,t])=>t.forEach(x=>tags[x]=(tags[x]||0)+1));
  const top=Object.entries(tags).filter(([,n])=>n>1).sort((a,b)=>b[1]-a[1]);
  let out=pageHero('Realizované projekty a referencie','Kde možno získať referencie na nami poskytované služby a dodávky kamerových a zabezpečovacích systémov, IT techniky, štruktúrovanej kabeláže a dochádzkových systémov.',[['O nás','o-nas'],['Realizované projekty']],'<div class="page-meta"><span class="tag"><i></i>'+REFS.length+' uvedených zákazníkov</span><span class="tag">a mnoho iných spokojných zákazníkov</span></div>');
  out+='<div class="page-body"><div class="wrap"><div class="filters" role="group" aria-label="Filtrovať podľa typu"><button type="button" class="on" data-f="">Všetky <b>'+REFS.length+'</b></button>'+top.map(([t,n])=>'<button type="button" data-f="'+t+'">'+t+' <b>'+n+'</b></button>').join('')+'</div><ul class="refs glass" id="refs">'+REFS.map(([n,t])=>'<li data-t="'+t.join('|')+'"><b>'+n+'</b><span class="rtags">'+t.map(x=>'<span>'+x+'</span>').join('')+'</span></li>').join('')+'</ul></div></div>';
  return {title:'Realizované projekty',html:out,after:initRefs};
}
function pageCerts(){
  let out=pageHero('Certifikáty a licencie','Osvedčenia o pravidelnom a odbornom vzdelávaní, preskúšaní a spôsobilosti zamestnancov KREKA SK s.r.o.',[['O nás','o-nas'],['Certifikáty a licencie']]);
  out+='<div class="page-body"><div class="wrap certs">'+CERTS.map(([t,s,seal],i)=>'<figure class="cert glass" style="--sc:'+(i%2?'var(--seal-2)':'var(--seal)')+'"><div class="doc" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><u>'+seal+'</u></div><figcaption><b>'+t+'</b><br><span>'+s+'</span></figcaption></figure>').join('')+'</div></div>';
  return {title:'Certifikáty a licencie',html:out};
}
function pagePartners(){
  let out=pageHero('Partneri','Naši najvýznamnejší partneri pre rôzne oblasti dodávok materiálu a techniky a odkazy na ich domovské stránky.',[['O nás','o-nas'],['Partneri']]);
  out+='<div class="page-body"><div class="wrap stack">'+PARTNERS.map(([g,rows])=>'<section class="panel glass"><h2>'+g+'</h2><div class="table-wrap"><table class="table"><tbody>'+rows.map(([n,d,u,l])=>'<tr><td><b style="font-weight:500">'+n+'</b></td><td style="color:var(--ink-2)">'+d+'</td><td class="num"><a href="'+u+'" target="_blank" rel="noopener" style="color:var(--accent)">'+l+'</a></td></tr>').join('')+'</tbody></table></div></section>').join('')+'<section class="panel glass"><h2>Ďalší partneri z našich stránok</h2>'+list(['Black Patrol: pult centralizovanej ochrany','Slovanet: internet, telefonovanie a televízia','GRENKE: financovanie techniky leasingom','TeamViewer: servis na diaľku'],'checks two')+'</section></div></div>';
  return {title:'Partneri',html:out};
}
function pageEshops(){
  let out=pageHero('eShopy','Pozrite si ponuku našich e-shopov.',[['O nás',''],['eShopy']]);
  out+='<div class="page-body"><div class="wrap shops" style="margin-top:0">'+ESHOPS.map((e,i)=>'<article class="shop glass"><h3>'+e.name+'</h3><p>'+e.desc+'</p>'+(e.items.length?list(e.items,''):'<ul></ul>')+'<a class="btn '+(i?'btn-ghost':'btn-primary')+'" href="'+e.url+'" target="_blank" rel="noopener">Otvoriť '+e.name+'</a></article>').join('')+'</div></div>';
  return {title:'eShopy',html:out};
}
function pageAbout(){
  let out=pageHero('O nás','KREKA poskytuje odborné poradenstvo, dodávku služieb a servis v oblasti IT technológií, pokladničných systémov a bezpečnostných systémov po celom Slovensku.',[['O nás']]);
  out+='<div class="page-body"><div class="wrap stack">';
  out+='<section class="panel glass"><p class="intro">Realizáciou riešenia na mieru podľa požiadavky zákazníka naša spolupráca začína a pokračuje záručným a pozáručným servisom. O komplexné riešenie a spokojnosť zákazníka sa usilujeme od roku 2007.</p><p>Prevádzkujeme kamennú predajňu v Brezne s vlastným showroomom a servisným strediskom. Máme široké portfólio služieb a produktov od renomovaných výrobcov ako Hewlett-Packard, Canon, Ubiquiti, TP-Link, Hikvision, Paradox, Jablotron, Eldes, Texecom, Optex a mnoho iných.</p><p>Náš tím tvoria špecialisti neustále vzdelávaní vo svojich oblastiach. Sme pripravení poskytovať klientom nadštandardný prístup. O našich bohatých skúsenostiach hovoria aj ocenenia a certifikáty.</p></section>';
  out+='<section class="panel glass"><h2>Realizujeme riešenia využívajúce najnovšie svetové technológie</h2>'+list(TECH,'checks two')+'</section>';
  out+='<div class="stats"><div><b>2007</b><span>Na trhu sme už viac ako 10 rokov, od roku 2007</span></div><div><b>100 %</b><span>Našou hlavnou prioritou je spokojnosť zákazníkov</span></div><div><b><span data-count="1000">1000</span>+</b><span>Úspešne zrealizovaných projektov</span></div></div>';
  out+='<div class="home-links">'+[['referencie','Realizované projekty a referencie','Dodávky kamerových a zabezpečovacích systémov, IT techniky, kabeláže a dochádzkových systémov.'],['certifikaty','Certifikáty a licencie','Osvedčenia o odbornom vzdelávaní a spôsobilosti zamestnancov.'],['partneri','Partneri','Najvýznamnejší partneri pre dodávky materiálu a techniky.'],['objednat-servis','Kontaktujte nás','Zaujala vás naša ponuka? Napíšte nám.']].map(([h,t,d])=>'<a class="home-link glass" href="'+H(h)+'"><div><h3>'+t+'</h3><p>'+d+'</p></div><em>Otvoriť</em></a>').join('')+'</div>';
  out+='<div class="quotes">'+QUOTES.map(([q,a])=>'<figure class="quote glass"><blockquote>„'+q+'“</blockquote><figcaption>'+a+'</figcaption></figure>').join('')+'</div>';
  out+='</div></div>';
  return {title:'O nás',html:out};
}
function hoursBlock(){
  return '<p class="status" data-status data-s="closed" aria-live="polite"><i></i><span>Zisťujeme otváracie hodiny</span></p><h3>Prevádzka a korešpondenčná adresa Brezno</h3><p class="addr">'+CO.name+'<br>'+CO.shop.join(', ')+'<br><b style="font-weight:500;color:var(--ink)">Parkovisko pre zákazníkov</b></p><ul class="hours"><li><span>Pondelok – Piatok</span><span>7:00 – 12:00, obed, 13:00 – 16:00</span></li><li><span>Sobota</span><span>zatvorené</span></li></ul>';
}
function pageContact(){
  let out=pageHero('Kontakt','Príďte do predajne v Brezne, zavolajte alebo nám napíšte.',[['O nás',''],['Kontakt']]);
  out+='<div class="page-body"><div class="wrap"><div class="contact" style="margin-top:0"><div class="card glass">'+hoursBlock()+'<div class="reach"><a href="'+CO.mobileHref+'">'+CO.mobile+' <span>mobil</span></a><a href="'+CO.landlineHref+'">'+CO.landline+' <span>pevná linka</span></a><a href="mailto:'+CO.email+'">'+CO.email+' <span>e-mail</span></a><a href="mailto:'+CO.support+'">'+CO.support+' <span>podpora</span></a></div></div>';
  out+='<div class="card glass map-card"><div class="map-frame" data-map><div class="map-fallback"><div class="map-art" aria-hidden="true"><span>KREKA SK, Šrámkova 2A</span></div><a class="btn btn-primary map-open" href="https://www.google.com/maps/@48.8038593,19.6425118,120m/data=!3m1!1e3" target="_blank" rel="noopener">Otvoriť satelitnú mapu</a></div><iframe title="Satelitná mapa: KREKA SK, Šrámkova 2A, Brezno" data-src="https://maps.google.com/maps?q=48.8038593,19.6425118&t=k&z=18&hl=sk&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen hidden></iframe><button class="map-shield" type="button" aria-label="Aktivovať ovládanie mapy"><span>Kliknite pre ovládanie mapy</span></button><span class="map-coords" aria-hidden="true">48.80386° N, 19.64251° E</span></div><div class="page-meta" style="margin-top:8px"><a class="btn btn-primary" href="https://www.google.com/maps/dir/?api=1&destination=48.8038593,19.6425118" target="_blank" rel="noopener">Navigovať</a><a class="btn btn-ghost" href="'+CO.waze+'" target="_blank" rel="noopener">Waze</a></div>';
  out+='<h3 style="font-size:1.3rem;margin-top:26px">Sídlo spoločnosti</h3><p class="addr">'+CO.name+'<br>'+CO.seat.join('<br>')+'</p><dl class="spec" style="margin-top:18px"><div><dt>IČO</dt><dd>'+CO.ico+'</dd></div><div><dt>IČ DPH</dt><dd>'+CO.dic+'</dd></div><div><dt>Technická licencia</dt><dd>'+CO.license+'</dd></div></dl><p class="note">'+CO.bank+' IBAN: <b style="color:var(--ink-2);font-weight:500">'+CO.iban+'</b><br>'+CO.orsr+'<br>'+CO.rpvs+'</p></div></div>';
  out+='<div class="page-meta" style="margin-top:24px"><a class="btn btn-ghost" href="'+CO.fb+'" target="_blank" rel="noopener">Sledujte nás na Facebooku</a><a class="btn btn-ghost" href="'+H('objednat-servis')+'">Objednať servis alebo službu</a></div></div></div>';
  return {title:'Kontakt',html:out};
}
function pageOrder(q){
  q=q||{};
  const kats=['IT technika','Bezpečnostné systémy','Pokladničné systémy'];
  const radio=(name,vals,sel)=>'<div class="radio-row">'+vals.map((v,i)=>'<label><input type="radio" name="'+name+'" value="'+v+'"'+((sel?sel===v:i===0)?' checked':'')+' required><span>'+v+'</span></label>').join('')+'</div>';
  const f=(id,label,type,ac,full)=>'<div class="field'+(full?' full':'')+'"><label for="'+id+'">'+label+' <span class="req" aria-hidden="true">*</span></label><input id="'+id+'" name="'+id+'" type="'+type+'" autocomplete="'+ac+'" required></div>';
  let form='<form class="order panel glass" id="orderForm" novalidate>';
  form+=f('firma','Názov firmy / Meno a priezvisko','text','organization',true)+f('osoba','Kontaktná osoba','text','name')+f('telefon','Telefón','tel','tel')+f('email','E-mail','email','email')+f('mesto','Mesto/Obec','text','address-level2');
  form+='<fieldset class="full"><legend>Typ servisu <span class="req">*</span></legend>'+radio('typ',['zmluvný','nezmluvný'],'nezmluvný')+'</fieldset>';
  form+='<fieldset><legend>Priorita servisu <span class="req">*</span></legend>'+radio('priorita',['nízka','stredná','vysoká'],'stredná')+'</fieldset>';
  form+='<fieldset><legend>Kategória <span class="req">*</span></legend>'+radio('kategoria',kats,kats.includes(q.kat)?q.kat:'IT technika')+'</fieldset>';
  form+='<div class="field full"><label for="popis">Popis problému <span class="req">*</span></label><textarea id="popis" name="popis" required>'+(q.popis?'Mám záujem: '+q.popis+'\n':'')+'</textarea><small>Popis problému so zariadením. Uveďte aj model zariadenia, pre ktoré požadujete servis, a dátum, kedy vám servis vyhovuje.</small></div>';
  form+='<div class="field full hp" aria-hidden="true"><label for="web">Nevypĺňajte</label><input id="web" name="web" type="text" tabindex="-1" autocomplete="off"></div><div class="form-foot"><button class="btn btn-primary" type="submit">Odoslať objednávku</button><p class="msg" id="orderMsg" aria-live="polite"></p></div></form>';
  const aside='<aside class="aside"><div class="cta-card glass"><h4>Radšej telefonicky?</h4><p>HOTLINE podpora pre zmluvných aj nezmluvných klientov.</p><a class="btn btn-primary" href="'+CO.mobileHref+'">'+CO.mobile+'</a><a class="btn btn-ghost" href="'+CO.landlineHref+'">'+CO.landline+'</a><a class="btn btn-ghost" href="mailto:'+CO.support+'">'+CO.support+'</a></div>'+subnav('Služby',SERVICES,'objednat-servisny-vyjazd','sluzby/')+'</aside>';
  return {title:'Objednať servis alebo službu',html:pageHero('Objednať servis alebo službu','Vyplňte formulár a pripravíme e-mail s objednávkou. Polia označené hviezdičkou sú povinné.',[['O nás',''],['Služby','sluzby'],['Objednať servis']])+'<div class="page-body"><div class="layout"><div class="stack">'+form+'</div>'+aside+'</div></div>',after:initOrder};
}
function pageNotFound(){
  return {title:'Stránka nenájdená',html:pageHero('Túto stránku sme nenašli','Adresa je možno neaktuálna. Skúste vyhľadávanie alebo sa vráťte na úvod.',[['O nás',''],['404']],'<div class="page-meta"><a class="btn btn-primary" href="#/">Na úvod</a><button class="btn btn-ghost" type="button" data-open-search>Hľadať na webe</button></div>')};
}
const LOGO_SVG='<svg class="logo" viewBox="2.8 3.8 163.9 53.1" aria-hidden="true"><path d="M35.46 56.42 C35.08 56.39 34.65 56.30 34.46 56.21 C34.19 56.08 20.29 42.28 17.75 39.61 C17.49 39.34 16.57 38.43 15.70 37.57 C12.39 34.32 4.41 26.24 4.25 25.98 C3.80 25.25 4.06 24.77 5.85 23.07 C6.60 22.36 7.86 21.13 8.67 20.33 C11.91 17.13 14.83 14.25 17.08 12.07 C18.39 10.80 19.53 9.68 19.62 9.59 C19.72 9.50 20.62 8.61 21.62 7.61 C22.63 6.61 23.88 5.38 24.39 4.86 C25.94 3.29 26.59 3.13 26.58 4.31 C26.58 4.97 26.19 7.14 26.01 7.52 C25.83 7.90 22.06 11.64 13.79 19.66 C12.78 20.64 11.60 21.80 11.17 22.24 C10.73 22.68 10.06 23.34 9.68 23.69 C8.45 24.84 8.40 25.27 9.36 26.27 C10.30 27.26 10.49 27.25 11.65 26.13 C15.22 22.68 16.85 21.13 17.11 20.93 C17.27 20.80 17.79 20.31 18.27 19.83 C19.37 18.72 20.90 17.24 22.75 15.50 C23.54 14.74 24.50 13.82 24.87 13.46 C25.85 12.48 26.46 12.26 26.68 12.81 C26.87 13.30 26.49 15.89 26.12 16.65 C25.89 17.12 22.71 20.35 15.86 27.07 C12.92 29.96 12.89 30.02 13.84 31.15 C14.41 31.84 14.74 31.99 15.18 31.81 C15.36 31.73 17.31 29.84 20.39 26.76 C25.26 21.90 25.60 21.58 25.92 21.75 C26.29 21.95 26.32 22.26 26.12 23.94 C25.93 25.51 26.02 25.37 23.15 28.22 C20.30 31.05 19.92 31.44 19.92 31.51 C19.92 31.54 19.62 31.81 19.26 32.11 C18.22 32.97 17.42 34.01 17.42 34.51 C17.42 34.80 17.74 35.14 23.71 41.08 C25.31 42.68 26.69 44.05 26.78 44.14 C28.78 46.20 37.30 54.70 37.53 54.87 C38.02 55.24 38.21 55.77 38.00 56.16 C37.83 56.49 37.14 56.56 35.46 56.42 Z M26.75 56.17 C26.22 56.14 25.70 56.07 25.58 56.01 C25.41 55.92 15.19 45.71 13.37 43.81 C13.10 43.53 12.67 43.10 12.42 42.88 C11.62 42.15 4.69 35.10 4.26 34.58 C3.45 33.61 3.40 33.48 3.31 32.03 C3.22 30.59 3.25 30.39 3.54 30.20 C3.96 29.93 4.18 30.10 6.74 32.66 C8.05 33.98 10.52 36.46 12.23 38.17 C13.94 39.89 15.42 41.37 15.51 41.46 C20.10 45.98 29.33 55.38 29.33 55.53 C29.33 55.82 29.11 56.07 28.77 56.16 C28.44 56.25 28.28 56.25 26.75 56.17 Z M18.42 56.09 C16.99 56.02 17.17 56.13 14.92 53.92 C9.43 48.51 4.06 43.10 3.83 42.77 C3.52 42.30 3.44 42.01 3.34 40.99 C3.10 38.78 3.39 38.30 4.47 39.12 C4.87 39.43 8.41 42.92 11.29 45.86 C11.66 46.23 12.14 46.71 12.36 46.91 C12.58 47.12 14.33 48.85 16.25 50.75 C18.17 52.65 19.99 54.44 20.30 54.72 C20.79 55.17 20.84 55.25 20.82 55.50 C20.76 56.08 20.34 56.19 18.42 56.09 Z M62.66 40.83 C62.50 40.80 62.27 40.71 62.14 40.63 C61.84 40.43 59.63 37.87 58.86 36.82 C57.18 34.55 56.54 34.09 55.95 34.71 C55.48 35.21 55.42 35.60 55.42 37.86 C55.42 40.70 55.33 40.83 53.63 40.83 C52.62 40.83 52.34 40.74 52.11 40.31 C51.97 40.06 51.96 39.53 51.96 32.04 C51.96 23.20 51.93 23.71 52.47 23.36 C52.83 23.12 54.20 23.10 54.70 23.32 C55.38 23.62 55.41 23.78 55.41 26.57 C55.42 29.23 55.46 29.50 55.90 29.50 C56.22 29.50 56.71 29.13 57.15 28.56 C57.35 28.30 57.63 27.99 57.78 27.86 C57.93 27.73 58.43 27.19 58.91 26.67 C59.38 26.14 60.02 25.46 60.32 25.16 C60.63 24.86 61.04 24.42 61.23 24.18 C61.89 23.39 62.15 23.30 63.75 23.27 C65.40 23.24 65.69 23.32 65.73 23.85 C65.77 24.29 65.59 24.58 64.68 25.49 C64.24 25.94 63.24 26.98 62.46 27.79 C61.68 28.61 60.73 29.59 60.35 29.96 C58.76 31.54 58.76 31.48 60.58 33.60 C61.10 34.21 61.71 34.95 61.93 35.25 C62.15 35.55 62.44 35.88 62.58 35.98 C62.72 36.09 63.12 36.53 63.48 36.98 C63.83 37.43 64.47 38.18 64.89 38.65 C65.98 39.88 66.16 40.41 65.60 40.70 C65.36 40.82 63.20 40.92 62.66 40.83 Z M126.69 40.86 C126.42 40.81 126.10 40.44 126.02 40.09 C125.88 39.41 125.95 24.07 126.10 23.74 C126.33 23.21 126.52 23.14 127.66 23.18 C129.41 23.23 129.44 23.29 129.50 26.58 C129.54 29.16 129.56 29.25 129.87 29.25 C130.40 29.25 130.70 29.01 131.44 28.04 C131.72 27.68 132.20 27.11 132.50 26.78 C133.11 26.12 133.60 25.53 133.96 25.04 C134.36 24.48 135.27 23.58 135.62 23.39 C136.08 23.15 138.52 23.07 139.03 23.28 C139.61 23.52 139.20 24.44 137.93 25.78 C137.49 26.25 136.88 26.93 136.58 27.29 C136.29 27.65 135.91 28.10 135.74 28.29 C134.57 29.62 133.34 31.08 133.25 31.24 C133.10 31.54 133.21 31.92 133.61 32.38 C133.81 32.60 134.06 32.92 134.17 33.08 C134.28 33.24 134.65 33.68 135.00 34.04 C135.34 34.41 135.96 35.12 136.37 35.63 C136.78 36.13 137.33 36.77 137.59 37.04 C137.84 37.32 138.18 37.71 138.34 37.92 C138.50 38.12 138.91 38.59 139.25 38.96 C139.93 39.69 140.14 40.12 139.98 40.46 C139.83 40.80 139.55 40.85 137.98 40.82 C136.52 40.79 136.52 40.79 136.15 40.53 C135.74 40.24 134.40 38.77 133.92 38.08 C133.74 37.83 133.24 37.22 132.81 36.73 C132.37 36.24 131.79 35.52 131.51 35.14 C130.93 34.34 130.66 34.16 130.25 34.33 C129.62 34.60 129.49 35.15 129.47 37.77 C129.46 40.23 129.42 40.40 128.83 40.68 C128.55 40.81 127.09 40.93 126.69 40.86 Z M77.51 40.73 C76.92 40.42 76.96 41.07 76.94 32.15 C76.91 23.11 76.88 23.56 77.54 23.29 C77.90 23.14 83.59 23.11 84.90 23.26 C86.58 23.44 87.75 23.98 88.56 24.93 C89.88 26.51 90.03 26.81 90.13 28.24 C90.29 30.37 89.72 31.67 87.97 33.16 C86.78 34.17 86.64 34.51 87.13 35.16 C87.26 35.34 87.54 35.71 87.75 35.99 C87.96 36.26 88.35 36.89 88.62 37.38 C88.90 37.86 89.31 38.49 89.53 38.78 C90.76 40.34 90.51 40.83 88.47 40.83 C86.82 40.83 86.57 40.72 85.90 39.65 C85.57 39.14 85.37 38.85 84.58 37.67 C84.41 37.41 84.15 36.96 84.00 36.67 C83.03 34.72 81.92 34.02 80.88 34.70 C80.39 35.02 80.38 35.08 80.33 37.62 C80.29 40.19 80.25 40.40 79.76 40.69 C79.46 40.87 77.83 40.89 77.51 40.73 Z M102.53 40.71 C101.92 40.45 101.96 40.96 101.96 32.04 C101.96 23.20 101.93 23.72 102.48 23.35 C102.89 23.09 113.33 23.14 113.62 23.41 C114.26 24.02 114.18 25.91 113.48 26.33 C113.22 26.49 113.07 26.50 109.89 26.50 C106.06 26.50 106.05 26.50 105.74 27.22 C105.50 27.76 105.54 29.20 105.80 29.56 C106.18 30.08 106.22 30.08 109.75 30.09 C113.42 30.09 113.44 30.10 113.73 30.66 C113.97 31.15 114.00 32.38 113.77 32.83 C113.46 33.45 113.44 33.46 109.79 33.47 C105.51 33.48 105.53 33.47 105.60 35.64 C105.65 37.27 105.59 37.25 109.85 37.25 C113.56 37.25 113.57 37.25 113.87 37.87 C114.08 38.30 114.09 39.79 113.89 40.27 C113.64 40.85 113.86 40.83 108.02 40.83 C103.75 40.83 102.74 40.81 102.53 40.71 Z M149.70 40.75 C149.47 40.66 149.25 40.35 149.25 40.11 C149.25 39.75 150.18 37.13 150.54 36.46 C150.74 36.09 150.95 35.62 151.00 35.42 C151.06 35.21 151.22 34.80 151.37 34.50 C151.52 34.20 151.79 33.51 151.96 32.96 C152.13 32.41 152.37 31.75 152.50 31.50 C152.62 31.24 152.83 30.76 152.95 30.43 C153.07 30.10 153.31 29.56 153.49 29.23 C153.67 28.90 153.92 28.28 154.03 27.87 C154.15 27.45 154.37 26.81 154.53 26.45 C154.68 26.09 154.89 25.52 154.99 25.19 C155.26 24.30 156.10 23.32 156.70 23.20 C157.39 23.07 159.28 23.20 159.55 23.39 C159.89 23.64 160.75 25.38 161.05 26.42 C161.17 26.85 161.39 27.45 161.54 27.75 C161.69 28.05 161.89 28.55 161.99 28.88 C162.08 29.20 162.31 29.71 162.49 30.01 C162.67 30.31 162.88 30.76 162.96 31.00 C163.03 31.25 163.21 31.78 163.35 32.17 C163.49 32.56 163.74 33.27 163.91 33.76 C164.08 34.27 164.35 34.84 164.53 35.10 C164.72 35.37 164.93 35.85 165.09 36.35 C165.22 36.79 165.43 37.36 165.54 37.62 C166.02 38.69 166.34 40.18 166.17 40.50 C165.96 40.89 163.77 41.00 163.24 40.64 C162.77 40.33 162.21 39.50 161.97 38.78 C161.43 37.17 161.41 37.17 157.74 37.17 C154.52 37.17 154.43 37.18 154.15 37.75 C152.98 40.13 152.80 40.45 152.51 40.64 C152.21 40.85 150.13 40.93 149.70 40.75 Z M159.71 33.81 C160.02 33.55 160.01 33.06 159.70 32.52 C159.26 31.75 159.16 31.52 158.88 30.52 C158.20 28.16 157.45 27.70 157.00 29.38 C156.82 30.05 156.22 31.87 155.86 32.81 C155.48 33.85 155.73 33.99 157.93 34.00 C159.44 34.00 159.50 33.99 159.71 33.81 Z M85.04 30.81 C85.72 30.51 86.23 29.80 86.31 29.06 C86.49 27.32 85.16 26.46 82.43 26.51 C80.48 26.56 80.39 26.64 80.33 28.63 C80.28 30.51 80.31 30.64 80.97 30.88 C81.47 31.07 84.58 31.01 85.04 30.81 Z"/></svg>';
/* ================= HOME ================= */
const PANES=[
 {slug:'bezpecnostne-a-signalizacne-systemy',label:'Zabezpečenie',h:'Alarmy a signalizácia',p:'Slučkové, zbernicové, bezdrôtové aj hybridné systémy s pripojením na pult centralizovanej ochrany.',items:['Detekcia pohybu, rozbitia skla, požiaru a úniku plynov','Pripojenie na PCO Black Patrol','Požiarna signalizácia EPS','Licencia KRPZ BB č. PT 001249']},
 {slug:'kamerove-systemy',label:'Kamery',h:'Kamerové systémy',p:'IP sieťové a analógové Turbo HD kamery pre domy, firmy, bytové domy aj obce.',items:['Nočný prísvit a čítanie ŠPZ','Vzdialený prístup zo smartfónu','Inteligentná analýza obrazu','Vlastná vysokozdvižná plošina']},
 {slug:'strukturovana-kabelaz-rozvody',label:'Siete',h:'Siete a kabeláž',p:'Optické a metalické siete LAN a slaboprúdové rozvody pri novostavbe aj rekonštrukcii.',items:['Štruktúrovaná kabeláž Cat. 5E až 7A','Aktívne a pasívne sieťové prvky','Zváranie optických vlákien','Projekcia káblových trás']},
 {slug:'registracne-pokladnice',label:'Pokladnice',h:'e-kasa pokladnice',p:'VRP, ORP a POS riešenia so servisom priamo v Brezne na Šrámkovej 2A.',items:['VRP virtuálna pokladnica','ORP online registračná pokladnica','POS riešenia pre prevádzky','Fiskalizácia a servis']},
 {slug:'vypoctova-technika',label:'IT',h:'IT a výpočtová technika',p:'Počítače, servery, zálohovanie a softvér. K tomu servis na diaľku a Slovanet.',items:['Počítače, notebooky a servery','Storage a zálohovacie riešenia','Servis na diaľku cez TeamViewer','Internet, telefón a TV Slovanet']}
];
function pageHome(){
  let h='<section class="hero" id="top"><div class="hero-stage"><div class="hero-grid"><div class="hero-copy" id="heroCopy"><h1 class="h1"><span class="ln"><span style="--i:0">Technika, ktorá</span></span><span class="ln"><span style="--i:1">stráži, počíta</span></span><span class="ln"><span style="--i:2" class="thin">a spája.</span></span></h1><p class="hero-lead">Poradenstvo, dodávka a servis bezpečnostných systémov, IT technológií a pokladničných systémov po celom Slovensku. Od roku 2007.</p><div class="hero-cta"><a class="btn btn-primary" href="'+H('objednat-servis')+'">Objednať servis</a><a class="btn btn-ghost" href="'+H('produkty')+'">Pozrieť produkty</a></div><ul class="hero-facts"><li>Predajňa, showroom a servis v Brezne</li><li>Viac ako 1000 projektov</li></ul></div><div class="lens-wrap" id="lensWrap" aria-hidden="true"><div class="lens" id="lens"></div></div></div><p class="scroll-hint">Posuňte nižšie</p></div></section>';
  h+='<section class="depth" id="depth" style="--n:'+PANES.length+'" aria-labelledby="prod-h"><div class="depth-stage"><header class="depth-head"><h2 id="prod-h">Čo robíme</h2><p>Päť hlavných oblastí, v ktorých navrhujeme, dodávame a servisujeme techniku.</p></header><div class="world" id="world">'+PANES.map(x=>{const pr=P(x.slug);return '<article class="pane" data-label="'+x.label+'"><div class="pane-ico"><svg viewBox="0 0 24 24">'+ICO[pr.icon]+'</svg></div><h3>'+x.h+'</h3><p>'+x.p+'</p><ul>'+x.items.map(i=>'<li>'+i+'</li>').join('')+'</ul><a class="pane-more" href="'+H('produkty/'+x.slug)+'">Zobraziť '+pr.title.toLowerCase()+'</a></article>'}).join('')+'</div><nav class="fscale" id="fscale" aria-label="Oblasti"><small>Zaostrené na</small><i class="dot"></i></nav><div class="fdots" id="fdots" aria-hidden="true"></div></div></section>';
  const BANNERS=[['produkty/bezpecnostne-a-signalizacne-systemy','Paradox','Bezpečnostné systémy','Zabezpečenie objektov a vozidiel s pripojením na PCO'],['produkty/kamerove-systemy','Avigilon','Kamerové systémy','CCTV monitoring pre firmy, obce aj domácnosti'],['produkty/kamerove-systemy','Dahua','Kamerové systémy','IP a Turbo HD kamery s inteligentnou analýzou'],['produkty/strukturovana-kabelaz-rozvody','Optické siete','Štruktúrovaná kabeláž','Optické a metalické rozvody pre objekty'],['produkty/registracne-pokladnice','e-kasa','Pokladnice a POS','VRP, ORP a POS riešenia so servisom v Brezne'],['produkty/vypoctova-technika','IT','Výpočtová technika','Počítače, servery, zálohovanie a softvér'],['sluzby/prenajom-plosiny-a-vyskove-prace','Plošina','Prenájom plošiny','Dosah 9,6 m, zdroj 230 V v koši, s obsluhou']];
  h+='<div class="quick"><a href="'+H('sluzby/prenajom-plosiny-a-vyskove-prace')+'">'+ic('lift')+'Prenájom vysokozdvižnej plošiny</a><a href="'+H('sluzby/download-sekcia')+'">'+ic('remote')+'Download sekcia</a><a href="'+H('objednat-servis')+'">'+ic('wrench')+'Objednať servis / službu</a><a href="'+H('produkty')+'">'+ic('box')+'Všetkých 19 kategórií</a></div>';
  h+='<section class="section" style="padding-top:clamp(60px,8vw,110px);padding-left:0;padding-right:0"><div class="wrap sec-head" style="padding:0 var(--pad)"><div><h2 class="h2">Z našej ponuky</h2><p class="lead">Značky a služby, o ktoré je najväčší záujem.</p></div><div class="page-meta" style="margin:0"><a class="btn btn-ghost" href="'+H('produkty/aktualne-akcie')+'">Akcie na produkty</a><a class="btn btn-ghost" href="'+H('produkty/bazar-techniky')+'">Bazár techniky</a></div></div><div class="banners">'+BANNERS.map(([h2,t,k,d])=>'<a class="banner glass" href="'+H(h2)+'"><div><small>'+k+'</small><b>'+t+'</b></div><span>'+d+'</span></a>').join('')+'</div></section>';
  h+='<section class="section"><div class="wrap tech"><div><h2 class="h2">Najnovšie svetové technológie</h2><p class="lead">Náš tím tvoria špecialisti neustále vzdelávaní vo svojich oblastiach. Portfólio máme od výrobcov ako Hewlett-Packard, Canon, Ubiquiti, TP-Link, Hikvision, Paradox, Jablotron, Eldes, Texecom či Optex.</p><div class="page-meta"><a class="btn btn-ghost" href="'+H('o-nas')+'">Viac o nás</a><a class="btn btn-ghost" href="'+H('certifikaty')+'">Certifikáty a licencie</a></div></div><ul class="tech-list">'+TECH.map(t=>'<li><span></span>'+t+'</li>').join('')+'</ul></div><div class="wrap stats"><div><b>2007</b><span>Na trhu sme viac ako 10 rokov</span></div><div><b>100 %</b><span>Našou prioritou je spokojnosť zákazníkov</span></div><div><b><span data-count="1000">1000</span>+</b><span>Úspešne zrealizovaných projektov</span></div></div></section>';
  const quick=['servis-na-dialku','hotline-podpora','servis-erp-pokladni-a-prislusenstva','servis-bezpecnostnych-a-signalizacnych-systemov','servis-vypoctovej-techniky','projekcia-systemov','prehliadky-priestorov-proti-odpocuvaniu','prenajom-plosiny-a-vyskove-prace','prenajom-zariadeni','autodoprava','financne-sluzby'].map(S);
  h+='<section class="section" style="padding-top:0"><div class="wrap svc"><div class="svc-side"><h2 class="h2">Služby</h2><p class="lead">Záručný aj pozáručný servis v Brezne a po celom Slovensku. Plošinu s dosahom 9,6 m aj dodávku si môžete prenajať.</p><a class="btn btn-primary" href="'+H('objednat-servis')+'">Objednať servis alebo službu</a></div><ul class="svc-list glass">'+quick.map(s=>'<li><a class="svc-row" href="'+svcHref(s)+'"><div><b>'+s.title+'</b><span>'+s.short+'</span></div><em>Otvoriť</em></a></li>').join('')+'</ul></div></section>';
  h+='<section class="section" style="padding-top:0"><div class="wrap"><h2 class="h2">Riešenia na kľúč</h2><p class="lead">Pre koho techniku hľadáte?</p><div class="chips">'+SEGMENTS.map(s=>'<a class="chip" style="display:inline-flex;align-items:center;text-decoration:none" href="'+H('riesenia?s='+s.id)+'">'+s.name+'</a>').join('')+'</div></div></section>';
  h+='<section class="section" style="padding-top:0"><div class="wrap"><h2 class="h2">Realizované projekty</h2><p class="lead">Obce, mestá, firmy, reštaurácie aj fotovoltaické elektrárne.</p></div><div class="ref-marquee" style="margin-top:36px"><div class="track"><ul>'+REFS.map(r=>'<li>'+r[0]+'</li>').join('')+'</ul><ul class="dup" aria-hidden="true">'+REFS.map(r=>'<li>'+r[0]+'</li>').join('')+'</ul></div></div><div class="wrap"><div class="page-meta"><a class="btn btn-ghost" href="'+H('referencie')+'">Všetky referencie</a><a class="btn btn-ghost" href="'+H('partneri')+'">Partneri</a></div><div class="quotes">'+QUOTES.map(([q,a])=>'<figure class="quote glass"><blockquote>„'+q+'“</blockquote><figcaption>'+a+'</figcaption></figure>').join('')+'</div></div></section>';
  h+='<section class="section" style="padding-top:0"><div class="wrap"><h2 class="h2">Pozrite si ponuku našich eShopov</h2><div class="shops">'+ESHOPS.slice(0,2).map((e,i)=>'<article class="shop glass"><h3>'+e.name+'</h3><p>'+e.desc+'</p>'+list(e.items,'')+'<a class="btn '+(i?'btn-ghost':'btn-primary')+'" href="'+e.url+'" target="_blank" rel="noopener">Otvoriť '+e.name+'</a></article>').join('')+'</div></div></section>';
  h+='<section class="section" style="padding-top:0"><div class="wrap contact"><div class="card glass">'+hoursBlock()+'<div class="reach"><a href="'+CO.mobileHref+'">'+CO.mobile+' <span>mobil</span></a><a href="'+CO.landlineHref+'">'+CO.landline+' <span>pevná linka</span></a><a href="mailto:'+CO.email+'">'+CO.email+' <span>e-mail</span></a></div></div><div class="card glass home-cta"><h3 style="margin-top:0;font-size:clamp(1.6rem,3vw,2.4rem)">Zaujala vás naša ponuka?</h3><p class="addr" style="max-width:40ch">Napíšte nám, čo potrebujete. Pripravíme e-mail s objednávkou servisu alebo dopytom.</p><div class="map-frame cta-map" data-map><div class="map-fallback"><div class="map-art" role="img" aria-label="Poloha predajne v Brezne"><span>Šrámkova 2A, Brezno</span></div></div><iframe title="Satelitná mapa: KREKA SK s.r.o., Šrámkova 2A, Brezno" data-src="https://maps.google.com/maps?q=48.8038593,19.6425118&t=k&z=18&hl=sk&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen hidden></iframe><span class="map-pin" aria-hidden="true"><svg viewBox="2.8 3.8 35.7 53.1"><path d="M35.46 56.42 C35.08 56.39 34.65 56.30 34.46 56.21 C34.19 56.08 20.29 42.28 17.75 39.61 C17.49 39.34 16.57 38.43 15.70 37.57 C12.39 34.32 4.41 26.24 4.25 25.98 C3.80 25.25 4.06 24.77 5.85 23.07 C6.60 22.36 7.86 21.13 8.67 20.33 C11.91 17.13 14.83 14.25 17.08 12.07 C18.39 10.80 19.53 9.68 19.62 9.59 C19.72 9.50 20.62 8.61 21.62 7.61 C22.63 6.61 23.88 5.38 24.39 4.86 C25.94 3.29 26.59 3.13 26.58 4.31 C26.58 4.97 26.19 7.14 26.01 7.52 C25.83 7.90 22.06 11.64 13.79 19.66 C12.78 20.64 11.60 21.80 11.17 22.24 C10.73 22.68 10.06 23.34 9.68 23.69 C8.45 24.84 8.40 25.27 9.36 26.27 C10.30 27.26 10.49 27.25 11.65 26.13 C15.22 22.68 16.85 21.13 17.11 20.93 C17.27 20.80 17.79 20.31 18.27 19.83 C19.37 18.72 20.90 17.24 22.75 15.50 C23.54 14.74 24.50 13.82 24.87 13.46 C25.85 12.48 26.46 12.26 26.68 12.81 C26.87 13.30 26.49 15.89 26.12 16.65 C25.89 17.12 22.71 20.35 15.86 27.07 C12.92 29.96 12.89 30.02 13.84 31.15 C14.41 31.84 14.74 31.99 15.18 31.81 C15.36 31.73 17.31 29.84 20.39 26.76 C25.26 21.90 25.60 21.58 25.92 21.75 C26.29 21.95 26.32 22.26 26.12 23.94 C25.93 25.51 26.02 25.37 23.15 28.22 C20.30 31.05 19.92 31.44 19.92 31.51 C19.92 31.54 19.62 31.81 19.26 32.11 C18.22 32.97 17.42 34.01 17.42 34.51 C17.42 34.80 17.74 35.14 23.71 41.08 C25.31 42.68 26.69 44.05 26.78 44.14 C28.78 46.20 37.30 54.70 37.53 54.87 C38.02 55.24 38.21 55.77 38.00 56.16 C37.83 56.49 37.14 56.56 35.46 56.42 Z M26.75 56.17 C26.22 56.14 25.70 56.07 25.58 56.01 C25.41 55.92 15.19 45.71 13.37 43.81 C13.10 43.53 12.67 43.10 12.42 42.88 C11.62 42.15 4.69 35.10 4.26 34.58 C3.45 33.61 3.40 33.48 3.31 32.03 C3.22 30.59 3.25 30.39 3.54 30.20 C3.96 29.93 4.18 30.10 6.74 32.66 C8.05 33.98 10.52 36.46 12.23 38.17 C13.94 39.89 15.42 41.37 15.51 41.46 C20.10 45.98 29.33 55.38 29.33 55.53 C29.33 55.82 29.11 56.07 28.77 56.16 C28.44 56.25 28.28 56.25 26.75 56.17 Z M18.42 56.09 C16.99 56.02 17.17 56.13 14.92 53.92 C9.43 48.51 4.06 43.10 3.83 42.77 C3.52 42.30 3.44 42.01 3.34 40.99 C3.10 38.78 3.39 38.30 4.47 39.12 C4.87 39.43 8.41 42.92 11.29 45.86 C11.66 46.23 12.14 46.71 12.36 46.91 C12.58 47.12 14.33 48.85 16.25 50.75 C18.17 52.65 19.99 54.44 20.30 54.72 C20.79 55.17 20.84 55.25 20.82 55.50 C20.76 56.08 20.34 56.19 18.42 56.09 Z"/></svg><span><b>KREKA SK s.r.o.</b>Šrámkova 2A, Brezno</span></span><button class="map-shield" type="button" aria-label="Aktivovať ovládanie mapy"><span>Kliknite pre ovládanie mapy</span></button></div><div class="page-meta"><a class="btn btn-primary" href="'+H('objednat-servis')+'">Napísať nám</a><a class="btn btn-ghost" href="'+CO.maps+'" target="_blank" rel="noopener">Navigovať</a></div></div></div></section>';
  return {title:'',html:h,after:initHome};
}

/* ================= ROUTER ================= */
const $=s=>document.querySelector(s), $$=(s,r)=>[...(r||document).querySelectorAll(s)];
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const LOWFX=document.documentElement.classList.contains('lowfx');
const root=document.documentElement;
const app=$('#app');
function parseHash(){
  const hs=location.hash||'#/';const raw=hs.startsWith('#/')?decodeURIComponent(hs.slice(2)):'';
  const [path,qs]=raw.split('?');
  return {path:path.replace(/\/+$/,''),q:Object.fromEntries(new URLSearchParams(qs||''))};
}
function resolve({path,q}){
  const seg=path.split('/');
  if(path==='')return pageHome();
  if(path==='produkty')return pageProductsIndex();
  if(seg[0]==='produkty'&&seg[1])return pageProduct(seg[1]);
  if(path==='sluzby')return pageServicesIndex();
  if(seg[0]==='sluzby'&&seg[1])return pageService(seg[1]);
  if(path==='objednat-servis')return pageOrder(q);
  if(path==='riesenia')return pageSolutions(q);
  if(path==='referencie')return pageReferences();
  if(path==='certifikaty')return pageCerts();
  if(path==='partneri')return pagePartners();
  if(path==='eshopy')return pageEshops();
  if(path==='o-nas')return pageAbout();
  if(path==='kontakt')return pageContact();
  return null;
}
let home=null, firstRender=true, lastPath=null;
async function render(){
  const r=parseHash();
  const page=resolve(r)||pageNotFound();
  const samePage=lastPath===r.path;
  if(!firstRender&&!RM&&!samePage)await iris(false);
  home=null;
  app.innerHTML=page.html;
  document.title=(page.title?page.title+' – ':'')+'KREKA SK s.r.o.';
  if(!samePage)window.scrollTo({top:0,left:0,behavior:'instant'});
  lastPath=r.path;
  markNav(r.path);
  const top=r.path.split('/')[0]||'home';document.body.dataset.route=top;
  const detail=(top==='produkty'||top==='sluzby')&&r.path.includes('/');document.body.classList.toggle('has-mbar',detail);
  if(detail){const t=(app.querySelector('h1')||{}).textContent||'';$('#mbarOrder').href=H('objednat-servis?'+new URLSearchParams({kat:/pokladn/i.test(t)?'Pokladničné systémy':/výpočt|diaľku|IT|Slovanet|školen/i.test(t)?'IT technika':'Bezpečnostné systémy',popis:t}).toString())}
  if(page.after)page.after(r.q);
  enhance(app);
  initMaps(app);
  if(!firstRender&&!RM&&!samePage){await iris(true)}
  if(!firstRender&&!samePage){const h1=app.querySelector('h1');if(h1){h1.setAttribute('tabindex','-1');h1.focus({preventScroll:true})}}
  firstRender=false;
}
function markNav(path){
  const top=path.split('/')[0]||'';
  $$('.nav ul>li>a').forEach(a=>{const k=a.dataset.k;a.classList.toggle('on',k===top||(k==='o-nas'&&['referencie','certifikaty','partneri'].includes(top)));});
}

/* iris transition */
const irisEl=$('#iris'), irisCtx=irisEl.getContext('2d');
function drawBlades(ctx,W,H,e,dpr){
  const cx=W/2,cy=H/2,R=Math.hypot(W,H)/2*1.1;
  ctx.globalCompositeOperation='source-over';ctx.clearRect(0,0,W,H);
  const g=ctx.createRadialGradient(cx,cy,0,cx,cy,R);g.addColorStop(0,'#303a45');g.addColorStop(1,'#0f141a');
  ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const n=8,r=R*e,rot=.3+1.5*(1-e),pts=[];
  for(let i=0;i<n;i++){const a=rot+i*2*Math.PI/n;pts.push([cx+Math.cos(a)*r,cy+Math.sin(a)*r])}
  ctx.lineWidth=1.3*dpr;ctx.strokeStyle='rgba(190,202,214,.2)';
  for(let i=0;i<n;i++){const [x1,y1]=pts[i],[x2,y2]=pts[(i+1)%n],dx=x2-x1,dy=y2-y1,l=Math.hypot(dx,dy)||1;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x1-dx/l*R*2.2,y1-dy/l*R*2.2);ctx.stroke()}
  if(r>1){ctx.globalCompositeOperation='destination-out';ctx.beginPath();pts.forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.closePath();ctx.fill();ctx.globalCompositeOperation='source-over';ctx.strokeStyle='rgba(225,232,240,.35)';ctx.stroke()}
  else{ctx.fillStyle='rgba(255,90,78,.9)';ctx.beginPath();ctx.arc(cx,cy,3*dpr,0,Math.PI*2);ctx.fill()}
}
function iris(open,dur){
  dur=dur||(open?520:380);
  return new Promise(res=>{
    const dpr=Math.min(devicePixelRatio||1,2),W=irisEl.width=Math.round(innerWidth*dpr),Hh=irisEl.height=Math.round(innerHeight*dpr);
    irisEl.classList.add('on');const t0=performance.now();
    const step=now=>{
      const k=clamp((now-t0)/dur,0,1),e=k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2;
      drawBlades(irisCtx,W,Hh,open?e:1-e,dpr);
      if(k<1)requestAnimationFrame(step);else{if(open)irisEl.classList.remove('on');res()}
    };
    requestAnimationFrame(step);
  });
}

/* ================= HOME ENGINE (lens + tunnel) ================= */
const tilt={x:0,y:0,tx:0,ty:0};
if(!RM)addEventListener('pointermove',e=>{tilt.tx=(e.clientX/innerWidth-.5)*26;tilt.ty=-(e.clientY/innerHeight-.5)*18},{passive:true});
function progress(el){const r=el.getBoundingClientRect(),t=el.offsetHeight-innerHeight;return t>0?clamp(-r.top/t,0,1):0}
function initHome(){
  const heroEl=$('#top'),depthEl=$('#depth');
  if(RM){heroEl.classList.add('static');depthEl.classList.add('static')}
  const lens=$('#lens'),lensWrap=$('#lensWrap'),heroCopy=$('#heroCopy'),hint=$('.scroll-hint');
  const specs=[['barrel',1],['knurl',.9],['glassel',.8],['inner',.68],['ap',.63],['glassel rear',.47],['pupil',.27]];
  const rings=specs.map(([c,s],i)=>{const r=document.createElement('div');r.className='ring';r.style.width=r.style.height=(s*100)+'%';r.style.transform='translate(-50%,-50%) translateZ('+(-i*18)+'px)';const f=document.createElement(c==='ap'?'canvas':'div');f.className='face '+(c==='ap'?'aperture':c);f.style.setProperty('--d',i);r.appendChild(f);lens.appendChild(r);return r});
  ['∞','10','5','3','2','1,5','1','0,7','m'].forEach((m,i)=>{const s=document.createElement('span');s.textContent=m;s.style.transform='rotate('+(-80+i*20)+'deg)';rings[0].firstChild.appendChild(s)});
  const mk=document.createElement('span');mk.textContent='●';mk.className='mark';mk.style.transform='rotate(180deg)';rings[0].firstChild.appendChild(mk);
  const ap=rings[4].firstChild,actx=ap.getContext('2d');let lastOpen=-1;
  const sizeAp=()=>{const w=ap.getBoundingClientRect().width||200,d=Math.min(devicePixelRatio||1,2);ap.width=Math.round(w*d);ap.height=Math.round(w*d);lastOpen=-1};
  const drawAp=open=>{if(Math.abs(open-lastOpen)<.0015)return;lastOpen=open;const w=ap.width,cx=w/2,R=w/2;actx.clearRect(0,0,w,w);actx.save();actx.beginPath();actx.arc(cx,cx,R,0,Math.PI*2);actx.clip();const g=actx.createRadialGradient(cx,cx,R*.2,cx,cx,R);g.addColorStop(0,'#2a323c');g.addColorStop(1,'#12171d');actx.fillStyle=g;actx.fillRect(0,0,w,w);const N=7,r=R*open,rot=.4+open*1.7,pts=[];for(let k=0;k<N;k++){const a=rot+k*2*Math.PI/N;pts.push([cx+Math.cos(a)*r,cx+Math.sin(a)*r])}actx.lineWidth=Math.max(1,w/260);for(let k=0;k<N;k++){const [x1,y1]=pts[k],[x2,y2]=pts[(k+1)%N],dx=x2-x1,dy=y2-y1,l=Math.hypot(dx,dy)||1;actx.beginPath();actx.moveTo(x1,y1);actx.lineTo(x1-dx/l*R*2,y1-dy/l*R*2);actx.strokeStyle='rgba(190,202,214,.24)';actx.stroke()}actx.globalCompositeOperation='destination-out';actx.beginPath();pts.forEach((p,i)=>i?actx.lineTo(p[0],p[1]):actx.moveTo(p[0],p[1]));actx.closePath();actx.fill();actx.globalCompositeOperation='source-over';actx.strokeStyle='rgba(220,228,236,.35)';actx.stroke();actx.restore()};
  let lensShift=0;
  const measure=()=>{const prev=lensWrap.style.transform;lensWrap.style.transform='none';const r=lensWrap.getBoundingClientRect();lensShift=innerWidth/2-(r.left+r.width/2);lensWrap.style.transform=prev};
  sizeAp();measure();
  const t0=performance.now();let hp=null,heroVis=false,heroP=0,lastReveal=-1;
  /* ---- fly-through: DOM lens until the hand-off, then a viewport-sized canvas continues the same projection ---- */
  const F=1200,P1=.54,XF=.02,SPECS=[1,.9,.8,.68,.63,.47,.27];
  const camAt=p=>{if(p<=P1){const t=p/P1;return 520*t*t}const t=p-P1;return 520+(1040/P1)*t+3900*t*t};
  const heroStage=heroEl.querySelector('.hero-stage');
  const fx=document.createElement('canvas');fx.className='lens-fx';fx.setAttribute('aria-hidden','true');heroStage.appendChild(fx);
  const fc=fx.getContext('2d');let fdpr=1,FW=0,FH=0,pal=null,fxOn=false;
  const sizeFx=()=>{fdpr=Math.min(devicePixelRatio||1,LOWFX?1:1.5);FW=heroStage.clientWidth;FH=heroStage.clientHeight;fx.width=Math.round(FW*fdpr);fx.height=Math.round(FH*fdpr)};
  const readPal=()=>{const cs=getComputedStyle(root),g=n=>cs.getPropertyValue(n).trim();pal={a:g('--lens-a'),b:g('--lens-b'),c:g('--lens-c'),pupil:g('--pupil')||'#4EA0DC',m1:g('--metal-1'),m2:g('--metal-2'),m3:g('--metal-3'),bg:g('--bg')}};
  const conic=(cx,cy,from,stops)=>{if(!fc.createConicGradient)return stops[0][1];const gr=fc.createConicGradient(from,cx,cy);stops.forEach(([o,c])=>gr.addColorStop(o,c));return gr};
  const band=(cx,cy,ro,ri,fill)=>{fc.beginPath();fc.arc(cx,cy,ro,0,Math.PI*2);fc.arc(cx,cy,ri,0,Math.PI*2,true);fc.fillStyle=fill;fc.fill()};
  const deg=d=>d*Math.PI/180;
  function drawFx(p,spread,open){
    const w=lensWrap.getBoundingClientRect(),st=heroStage.getBoundingClientRect();
    const cx=w.left-st.left+w.width/2,cy=w.top-st.top+w.height/2,base=lensWrap.offsetWidth/2,diag=Math.hypot(FW,FH);
    const cam=camAt(p);
    fc.setTransform(fdpr,0,0,fdpr,0,0);fc.clearRect(0,0,FW,FH);
    let insideGlass=0;
    for(let i=6;i>=0;i--){
      const D=F-cam+i*spread;if(D<20)continue;
      const R=base*SPECS[i]*(F/D);
      if(i===0){ if(R*.8>diag*1.2)continue;
        band(cx,cy,R,R*.8,conic(cx,cy,deg(200-90),[[0,pal.m1],[.1,pal.m3],[.22,pal.m2],[.38,pal.m1],[.58,pal.m2],[.7,pal.m3],[.86,pal.m1],[1,pal.m2]]));
        fc.save();fc.fillStyle='rgba(236,241,245,.78)';fc.font='400 '+(R*2*.026).toFixed(1)+'px '+getComputedStyle(document.body).fontFamily;fc.textAlign='center';fc.textBaseline='top';
        ['∞','10','5','3','2','1,5','1','0,7','m'].forEach((m,k)=>{fc.save();fc.translate(cx,cy);fc.rotate(deg(-80+k*20));fc.fillText(m,0,-R+R*2*.03);fc.restore()});
        fc.fillStyle='#FF5A4E';fc.beginPath();fc.arc(cx,cy+R*.9,Math.max(2,R*.012),0,Math.PI*2);fc.fill();fc.restore();
      }else if(i===1){ if(R*.86>diag*1.2)continue;
        fc.save();fc.beginPath();fc.arc(cx,cy,R,0,Math.PI*2);fc.arc(cx,cy,R*.86,0,Math.PI*2,true);fc.clip();
        fc.fillStyle=pal.m1;fc.fillRect(cx-R,cy-R,R*2,R*2);fc.fillStyle=pal.m2;
        for(let k=0,KN=LOWFX?56:112,st=360/KN;k<KN;k++){const a0=deg(k*st),a1=deg(k*st+st/2);fc.beginPath();fc.moveTo(cx,cy);fc.arc(cx,cy,R,a0,a1);fc.closePath();fc.fill()}
        fc.restore();
      }else if(i===3){ if(R*.88>diag*1.2)continue;
        band(cx,cy,R,R*.88,pal.m1);
      }else if(i===2||i===5){
        if(R>diag)insideGlass=Math.max(insideGlass,i===2?.35:.45);
        const rr=Math.min(R,diag*3);
        fc.save();fc.beginPath();fc.arc(cx,cy,rr,0,Math.PI*2);fc.clip();
        fc.fillStyle=conic(cx,cy,deg(i===2?80:250),i===2?[[0,pal.a],[.25,pal.b],[.5,'rgba(78,160,220,.10)'],[.75,pal.c],[1,pal.a]]:[[0,pal.b],[.25,pal.a],[.5,'rgba(78,160,220,.12)'],[.75,pal.a],[1,pal.b]]);
        fc.fillRect(cx-rr,cy-rr,rr*2,rr*2);
        const hl=fc.createRadialGradient(cx-rr*.2,cy-rr*.32,0,cx-rr*.2,cy-rr*.32,rr*.34);hl.addColorStop(0,'rgba(255,255,255,.55)');hl.addColorStop(1,'rgba(255,255,255,0)');fc.fillStyle=hl;fc.fillRect(cx-rr,cy-rr,rr*2,rr*2);
        const edge=fc.createRadialGradient(cx,cy,rr*.7,cx,cy,rr);edge.addColorStop(0,'rgba(30,34,37,0)');edge.addColorStop(1,'rgba(30,34,37,.28)');fc.fillStyle=edge;fc.fillRect(cx-rr,cy-rr,rr*2,rr*2);
        fc.restore();
        if(R<diag*1.5){fc.lineWidth=Math.max(1,R*.006);fc.strokeStyle='rgba(255,255,255,.5)';fc.beginPath();fc.arc(cx,cy,R,0,Math.PI*2);fc.stroke()}
      }else if(i===4){
        const hole=Math.min(open,1.25)*R; if(hole>diag*1.1)continue;
        const rr=Math.min(R,diag*2),N=7,rot=.4+open*1.7,pts=[];
        for(let k=0;k<N;k++){const a=rot+k*2*Math.PI/N;pts.push([cx+Math.cos(a)*hole,cy+Math.sin(a)*hole])}
        fc.save();fc.beginPath();fc.arc(cx,cy,rr,0,Math.PI*2);pts.forEach((q,k)=>k?fc.lineTo(q[0],q[1]):fc.moveTo(q[0],q[1]));fc.closePath();
        const g=fc.createRadialGradient(cx,cy,rr*.2,cx,cy,rr);g.addColorStop(0,'#2a323c');g.addColorStop(1,'#12171d');fc.fillStyle=g;fc.fill('evenodd');
        fc.clip('evenodd');fc.lineWidth=Math.max(1,R*.004);fc.strokeStyle='rgba(190,202,214,.24)';
        for(let k=0;k<N;k++){const [x1,y1]=pts[k],[x2,y2]=pts[(k+1)%N],dx=x2-x1,dy=y2-y1,l=Math.hypot(dx,dy)||1;fc.beginPath();fc.moveTo(x1,y1);fc.lineTo(x1-dx/l*rr*2,y1-dy/l*rr*2);fc.stroke()}
        fc.restore();fc.strokeStyle='rgba(220,228,236,.35)';fc.lineWidth=Math.max(1,R*.004);fc.beginPath();pts.forEach((q,k)=>k?fc.lineTo(q[0],q[1]):fc.moveTo(q[0],q[1]));fc.closePath();fc.stroke();
      }else if(i===6){
        const rr=Math.min(R,diag*3);
        const g=fc.createRadialGradient(cx-rr*.12,cy-rr*.16,0,cx,cy,rr);g.addColorStop(0,'rgba(255,255,255,.9)');g.addColorStop(.12,pal.pupil);g.addColorStop(.62,pal.pupil);g.addColorStop(1,'#1F2428');
        fc.fillStyle=g;fc.beginPath();fc.arc(cx,cy,rr,0,Math.PI*2);fc.fill();
      }
    }
    /* light passing through the glass */
    const Dp=F-cam+6*spread;
    if(Dp<260){const k=clamp(1-Dp/260,0,1);fc.fillStyle='rgba(78,160,220,'+(k*.9).toFixed(3)+')';fc.fillRect(0,0,FW,FH)}
    if(Dp<60){const k=clamp(1-(Dp-20)/40,0,1);const g=fc.createRadialGradient(cx,cy,0,cx,cy,diag);const dk=root.dataset.theme==='dark';g.addColorStop(0,'rgba(255,255,255,'+(k*(dk?.55:.95))+')');g.addColorStop(1,dk?'rgba(20,23,25,'+(k*.85)+')':'rgba(245,245,245,'+(k*.6)+')');fc.fillStyle=g;fc.fillRect(0,0,FW,FH)}
  }
  const updateHero=now=>{
    const load=RM?1:(root.classList.contains('intro')?0:clamp((now-(window.__introEnd||t0))/1600,0,1)),ease=1-Math.pow(1-load,3);
    const target=RM?0:progress(heroEl);hp=(hp===null||!heroVis)?target:hp+(target-hp)*.12;heroVis=true;
    const p=Math.abs(hp-target)<.0004?target:hp,spread=18+p*95,k=clamp(1-p/.42,0,1);
    const open=.08+ease*.2+p*.68;
    const domZ=camAt(Math.min(p,P1));
    rings.forEach((r,i)=>{r.style.transform='translate(-50%,-50%) translateZ('+(-i*spread).toFixed(1)+'px)'});
    lens.style.transform='translateZ('+domZ.toFixed(1)+'px) rotateX('+(tilt.y*k).toFixed(2)+'deg) rotateY('+(tilt.x*k+(1-ease)*-25).toFixed(2)+'deg)';
    lens.style.setProperty('--lx',(44+tilt.x*1.4*k).toFixed(1)+'%');lens.style.setProperty('--ly',(34-tilt.y*1.9*k).toFixed(1)+'%');
    const c=clamp(p/.46,0,1);lensWrap.style.transform='translateX('+(lensShift*c*c*(3-2*c)).toFixed(1)+'px)';
    /* hand-off window */
    const hand=RM?0:clamp((p-(P1-XF))/XF,0,1);
    const lo=1-hand;lensWrap.style.opacity=lo;lensWrap.style.visibility=lo<.005?'hidden':'visible';
    heroP=p;
    const fade=clamp((1-p)/.05,0,1),fxa=(hand>0?1:0)*fade;
    if(fxa>.002){
      if(!fxOn){fxOn=true;readPal();if(!FW)sizeFx()}
      fx.style.opacity=fxa.toFixed(3);fx.style.visibility='visible';drawFx(p,spread,open);
    }else if(fxOn){fxOn=false;fx.style.visibility='hidden';fc.clearRect(0,0,fx.width,fx.height)}
    if(hint)hint.style.opacity=p>.03?0:1;
    const co=clamp(1-p*2.4,0,1);heroCopy.style.opacity=co;heroCopy.style.visibility=co<.005?'hidden':'visible';heroCopy.style.transform='translate3d(0,'+(-p*70).toFixed(1)+'px,0)';
    drawAp(Math.min(open,1));
  };
  const panes=$$('.pane'),world=$('#world'),fscale=$('#fscale'),dot=fscale.querySelector('.dot'),fdots=$('#fdots');
  const N=panes.length,GAP=950;
  const btns=panes.map((p,i)=>{const b=document.createElement('button');b.type='button';b.textContent=p.dataset.label;b.addEventListener('click',()=>{const t=depthEl.offsetHeight-innerHeight;scrollTo({top:depthEl.offsetTop+t*((i+1-.45)/(N-.45)),behavior:RM?'auto':'smooth'})});fscale.appendChild(b);return b});
  const dots=panes.map(()=>{const i=document.createElement('i');fdots.appendChild(i);return i});
  const bokeh=[];
  if(!RM){const cols=['rgba(78,160,220,.95)','rgba(78,160,220,.7)','rgba(245,245,245,.95)','rgba(78,160,220,.5)'];for(let i=0;i<(LOWFX?12:36);i++){const b=document.createElement('i');b.className='bokeh'+(Math.random()<.35?' fill':'');const sz=8+Math.random()*50;b.style.width=b.style.height=sz.toFixed(0)+'px';b.style.setProperty('--bk',cols[i%4]);b._z=GAP*.3+Math.random()*(N+.8)*GAP;b._x=Math.random()-.5;b._y=Math.random()-.5;b._m=.25+Math.random()*.4;world.appendChild(b);bokeh.push(b)}}
  const placeBokeh=()=>bokeh.forEach(b=>{b.style.transform='translate3d(calc(-50% + '+(b._x*innerWidth*1.3).toFixed(0)+'px),calc(-50% + '+(b._y*innerHeight*1.2).toFixed(0)+'px),'+(-b._z).toFixed(0)+'px)'});
  placeBokeh();
  const inOut=f=>{const c=f<.5?4*f*f*f:1-Math.pow(-2*f+2,3)/2;return c*.7+f*.3};
  let active=-1,dp=null,depthVis=false;
  const depthStage=depthEl.querySelector('.depth-stage');
  const updateDepth=()=>{
    if(RM)return;const r=depthEl.getBoundingClientRect();
    if(r.bottom<0||r.top>innerHeight){depthVis=false;if(r.top>innerHeight&&lastReveal!==0){lastReveal=0;depthStage.style.opacity='0';depthStage.style.visibility='hidden'}return}
    /* the tunnel sits under the end of the hero and is revealed by the lens flash, so there is no empty gap */
    const reveal=r.top<=1?1:clamp((heroP-.9)/.08,0,1);
    if(reveal!==lastReveal){lastReveal=reveal;depthStage.style.opacity=reveal.toFixed(3);depthStage.style.visibility=reveal<.005?'hidden':'visible'}
    if(reveal<.005){depthVis=false;return}
    const target=progress(depthEl);dp=(dp===null||!depthVis)?target:dp+(target-dp)*.1;depthVis=true;
    const p=Math.abs(dp-target)<.0003?target:dp,u=.45+p*(N-.45),base=Math.floor(u),cam=GAP*(Math.min(base,N)+(base<N?inOut(u-base):0));
    const narrow=innerWidth<760,xo=narrow?0:Math.min(innerWidth*.12,190);
    world.style.transform='translateZ('+cam.toFixed(1)+'px)';
    panes.forEach((el,i)=>{const z=(i+1)*GAP,d=cam-z,ad=Math.abs(d),blur=d<0?Math.min(ad/110,14):Math.min(d/35,14),op=d>0?clamp(1-d/(LOWFX?300:420),0,1):(LOWFX?clamp(1-(ad-160)/(GAP*.75),0,1):clamp(1-(ad-280)/(GAP*1.7),0,1)),x=(i%2?1:-1)*xo,y=narrow?0:(i%2?-18:18),f=clamp(1-ad/300,0,1);
      el.style.transform='translate3d(calc(-50% + '+x+'px),calc(-50% + '+y+'px),'+(-z)+'px) rotateX('+(tilt.y*.3*f).toFixed(2)+'deg) rotateY('+(tilt.x*.3+(i%2?-4:4)*(1-f)).toFixed(2)+'deg)';
      el.style.filter=(LOWFX||blur<.35)?'none':'blur('+blur.toFixed(1)+'px)';el.style.opacity=op.toFixed(3);el.style.visibility=op<.01?'hidden':'visible';el.style.pointerEvents=ad<220?'auto':'none'});
    bokeh.forEach(b=>{const d=cam-b._z,o=d>0?clamp(1-d/240,0,1):clamp(1+d/(GAP*2.6),0,1);b.style.opacity=(o*b._m).toFixed(3)});
    const a=clamp(Math.round(u)-1,0,N-1);
    if(a!==active){active=a;btns.forEach((b,i)=>b.classList.toggle('on',i===a));dots.forEach((d,i)=>d.classList.toggle('on',i===a))}
    const h=btns[N-1].offsetTop-btns[0].offsetTop;dot.style.top=(btns[0].offsetTop+btns[0].offsetHeight/2-4)+'px';dot.style.transform='translateY('+(clamp((u-1)/(N-1),0,1)*h).toFixed(1)+'px)';
  };
  home={heroEl,updateHero:now=>{if(heroEl.getBoundingClientRect().bottom>0)updateHero(now);else heroVis=false},updateDepth,resize:()=>{sizeAp();measure();placeBokeh();sizeFx()},retheme:()=>{pal=null;if(fxOn)readPal()}};
  if(RM)updateHero(performance.now());
}

/* ================= GLOBAL LOOP ================= */
const blobs=$$('.atmos i'),progBar=$('.nav .prog');let lastSp=-1;
function frame(now){
  const sp=Math.round(clamp(scrollY/Math.max(1,document.body.scrollHeight-innerHeight),0,1)*1000)/1000;
  if(sp!==lastSp){lastSp=sp;blobs[0].style.transform='translate3d(0,'+(sp*40).toFixed(2)+'vh,0)';blobs[1].style.transform='translate3d(0,'+(-sp*50).toFixed(2)+'vh,0)';blobs[2].style.transform='translate3d('+(-sp*30).toFixed(2)+'vw,0,0)';progBar.style.transform='scaleX('+sp+')'}
  tilt.x+=(tilt.tx-tilt.x)*.06;tilt.y+=(tilt.ty-tilt.y)*.06;
  if(home){home.updateHero(now);home.updateDepth()}
  requestAnimationFrame(frame);
}
let lastW=innerWidth;addEventListener('resize',()=>{if(innerWidth===lastW)return;lastW=innerWidth;if(home)home.resize()});

/* ================= PER-PAGE ENHANCEMENTS ================= */
let litEl=null,revealObs=null;
function enhance(scope){
  $$('.card,.shop,.quote,.facts,.svc-list,.pane,.panel,.cat-list,.refs,.cert,.home-link,.cta-card',scope).forEach(el=>el.classList.add('glare'));
  if(!RM)$$('.shop,.quote,.home-link,.cert',scope).forEach(el=>el.classList.add('tilt'));
  status();
  /* counter */
  $$('[data-count]',scope).forEach(cnt=>{
    if(RM||!('IntersectionObserver' in window))return;
    cnt.textContent='0';
    const co=new IntersectionObserver(es=>{if(!es[0].isIntersecting)return;co.disconnect();const T=performance.now(),to=+cnt.dataset.count;const st=n=>{const k=clamp((n-T)/1700,0,1);cnt.textContent=Math.round(to*(1-Math.pow(1-k,4)));if(k<1)requestAnimationFrame(st)};requestAnimationFrame(st)},{threshold:.6});
    co.observe(cnt);
  });
  /* services list highlight */
  $$('.svc-list',scope).forEach(listEl=>{
    const pill=document.createElement('li');pill.className='svc-pill';pill.setAttribute('aria-hidden','true');listEl.appendChild(pill);
    const move=row=>{const li=row.parentElement,hid=pill.style.opacity!=='1';if(hid)pill.style.transition='opacity .3s';pill.style.transform='translateY('+li.offsetTop+'px)';pill.style.height=li.offsetHeight+'px';if(hid){void pill.offsetHeight;pill.style.transition=''}pill.style.opacity='1'};
    $$('.svc-row',listEl).forEach(r=>{r.addEventListener('pointerenter',()=>move(r));r.addEventListener('focus',()=>move(r))});
    listEl.addEventListener('pointerleave',()=>pill.style.opacity='0');
  });
  /* reveals */
  if(RM||!('IntersectionObserver' in window))return;
  if(revealObs)revealObs.disconnect();
  revealObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in','seen');revealObs.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
  $$('.section .h2,.page-title',scope).forEach(h=>{h.classList.add('rv');h.innerHTML='<span>'+h.innerHTML+'</span>'});
  const groups=[['.lead,.page-lead,.page-meta,.crumbs',0],['.panel,.cat-group,.tech-list,.stats,.svc-list,.fine,.depth-foot,.certs,.filters,.refs,.seg-explorer',0],['.shop,.quote,.home-link,.contact>*',.1],['.chip',.03],['.cert',.05]];
  groups.forEach(([sel,step])=>$$(sel,scope).forEach((el,i)=>{if(el.closest('.hero')||el.closest('.depth-stage'))return;el.classList.add('focus-in');if(step)el.style.setProperty('--dl',Math.min(i*step,.6).toFixed(3)+'s')}));
  $$('.focus-in',scope).forEach(el=>{if(el.matches('.glass,.panel,.shop,.quote,.home-link,.card,.cat-list,.refs,.svc-list,.cert,.stats,.filters')||el.querySelector('.glass'))el.classList.add('glassy')});
  $$('.checks,.pills,.tech-list,.steps,.refs',scope).forEach(l=>[...l.children].forEach((li,i)=>li.style.setProperty('--i',i)));
  $$('.rv,.focus-in',scope).forEach(el=>revealObs.observe(el));
}
document.addEventListener('transitionend',e=>{const t=e.target;if((e.propertyName==='filter'||e.propertyName==='translate')&&t.classList&&t.classList.contains('focus-in')&&t.classList.contains('in')){t.classList.remove('focus-in','in','glassy');t.style.removeProperty('--dl')}});

/* glare + tilt pointer */
if(matchMedia('(hover:hover)').matches)document.addEventListener('pointermove',e=>{
  const el=e.target.closest?e.target.closest('.glare'):null;
  if(litEl&&litEl!==el){litEl.classList.remove('lit');litEl.style.setProperty('--rx','0deg');litEl.style.setProperty('--ry','0deg')}
  litEl=el;if(!el)return;
  const r=el.getBoundingClientRect(),mx=(e.clientX-r.left)/r.width,my=(e.clientY-r.top)/r.height;
  el.style.setProperty('--mx',(mx*100).toFixed(1)+'%');el.style.setProperty('--my',(my*100).toFixed(1)+'%');el.classList.add('lit');
  if(el.classList.contains('tilt')){el.style.setProperty('--rx',((.5-my)*4).toFixed(2)+'deg');el.style.setProperty('--ry',((mx-.5)*5).toFixed(2)+'deg')}
},{passive:true});

/* opening status */
function status(){
  const els=$$('[data-status]');if(!els.length)return;
  const parts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Bratislava',weekday:'short',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date()).map(p=>[p.type,p.value]));
  const day=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].indexOf(parts.weekday),m=+parts.hour*60+ +parts.minute;
  let s='closed',t;
  if(day<5&&m>=420&&m<720){s='open';t='Otvorené do 12:00'}
  else if(day<5&&m>=720&&m<780){s='pause';t='Obedňajšia prestávka, otvárame o 13:00'}
  else if(day<5&&m>=780&&m<960){s='open';t='Otvorené do 16:00'}
  else if(day<5&&m<420)t='Zatvorené, otvárame dnes o 7:00';
  else if(day<4)t='Zatvorené, otvárame zajtra o 7:00';
  else t='Zatvorené, otvárame v pondelok o 7:00';
  els.forEach(el=>{el.dataset.s=s;el.lastElementChild.textContent=t});
}
setInterval(status,60000);

/* calculators */
const eur=v=>v.toLocaleString('sk-SK',{minimumFractionDigits:2,maximumFractionDigits:2})+' €';
function initCalcs(){
  $$('[data-calc]').forEach(c=>{
    const kind=c.dataset.calc,q=s=>c.querySelector(s);
    if(kind==='lift'||kind==='van'){
      const h=q('#c-h'),km=q('#c-km');
      const up=()=>{const hv=+h.value,kv=+km.value;q('#o-h').textContent=hv+' hod';q('#o-km').textContent=kv+' km';
        const a=kind==='lift'?hv*30:kv*.7,b=kind==='lift'?kv*.8:hv*10;
        q('#r-a').textContent=eur(a);q('#r-b').textContent=eur(b);
        q('#r-t').innerHTML=kind==='lift'?eur(a+b)+'<small>bez DPH, s DPH '+eur((a+b)*1.23)+'</small>':eur(a+b)+'<small>orientačná cena</small>'};
      [h,km].forEach(i=>i.addEventListener('input',up));up();
    }else{
      let mode='room';const m=q('#c-m'),wrap=q('#area-wrap');
      const up=()=>{
        if(mode==='room'){const a=+m.value,rate=a<=50?26:a<=100?23:a<=200?20:17;q('#o-m').textContent=a+' m²';q('#r-la').textContent='Sadzba pre plochu';q('#r-a').textContent=rate+' € / m²';q('#r-t').innerHTML=eur(a*rate)+'<small>konečná cena bez prepravy</small>';wrap.hidden=false}
        else{const v=mode==='car'?250:290;wrap.hidden=true;q('#r-la').textContent=mode==='car'?'Malé a stredné vozidlá':'SUV';q('#r-a').textContent=v+' € bez DPH';q('#r-t').innerHTML=eur(v)+'<small>bez DPH, s DPH '+eur(v*1.23)+'</small>'}
      };
      $$('.seg button',c).forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.mode;$$('.seg button',c).forEach(x=>x.classList.toggle('on',x===b));up()}));
      m.addEventListener('input',up);up();
    }
  });
}
function initSegments(){
  const panel=$('#segPanel');
  $$('.seg-tabs button').forEach(b=>b.addEventListener('click',()=>{
    if(b.dataset.go){location.hash=H(b.dataset.go);return}
    const s=SEGMENTS.find(x=>x.id===b.dataset.seg);
    $$('.seg-tabs button').forEach(x=>{const on=x===b;x.classList.toggle('on',on);x.setAttribute('aria-selected',on)});
    panel.innerHTML=segPanel(s);
    history.replaceState(null,'',H('riesenia?s='+s.id));lastPath='riesenia';
    if(!RM){panel.animate([{opacity:0,filter:'blur(8px)'},{opacity:1,filter:'blur(0)'}],{duration:450,easing:'ease-out'})}
    if(innerWidth<900)panel.scrollIntoView({behavior:RM?'auto':'smooth',block:'start'});
  }));
}
function initRefs(){
  const items=$$('#refs li');
  $$('.filters button').forEach(b=>b.addEventListener('click',()=>{
    const f=b.dataset.f;$$('.filters button').forEach(x=>x.classList.toggle('on',x===b));
    items.forEach(li=>{li.hidden=!!f&&!li.dataset.t.split('|').includes(f)});
  }));
}
/* ================= LEAD / OBJEDNÁVKA ================= */
/* Ak je nastavený Supabase (assets/config.js), dopyt sa uloží do databázy.
   Bez konfigurácie alebo pri chybe sa pripraví e-mail ako predtým. */
const CFG=()=>window.KREKA_CONFIG||{};
async function sendLead(payload){
  const c=CFG();
  if(!c.supabaseUrl||!c.supabaseAnonKey)return 'mail';
  const r=await fetch(c.supabaseUrl.replace(/\/+$/,'')+'/rest/v1/'+(c.leadsTable||'dopyty'),{
    method:'POST',
    headers:{'Content-Type':'application/json',apikey:c.supabaseAnonKey,Authorization:'Bearer '+c.supabaseAnonKey,Prefer:'return=minimal'},
    body:JSON.stringify(payload)
  });
  if(!r.ok)throw new Error('Supabase '+r.status+' '+(await r.text()).slice(0,140));
  return 'db';
}
function mailFallback(d){
  const body=['Názov firmy / Meno a priezvisko: '+d.firma,'Kontaktná osoba: '+d.osoba,'Telefón: '+d.telefon,'E-mail: '+d.email,'Mesto/Obec: '+d.mesto,'Typ servisu: '+d.typ,'Priorita servisu: '+d.priorita,'Kategória: '+d.kategoria,'','Popis problému:',d.popis].join('\n');
  const a=document.createElement('a');
  a.href='mailto:'+CO.email+'?subject='+encodeURIComponent('Objednávka servisu: '+d.kategoria+' ('+d.priorita+' priorita)')+'&body='+encodeURIComponent(body);
  a.target='_blank';a.rel='noopener';document.body.appendChild(a);a.click();a.remove();
}
function initOrder(){
  const form=$('#orderForm'),msg=$('#orderMsg'),btn=form.querySelector('button[type=submit]'),t0=Date.now();
  form.addEventListener('input',e=>{const f=e.target.closest('.field');if(f)f.classList.remove('bad')});
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    const req=['firma','osoba','telefon','email','mesto','popis'];let first=null;
    req.forEach(id=>{const i=form.elements[id],bad=!i.value.trim()||(id==='email'&&!/^\S+@\S+\.\S+$/.test(i.value));i.closest('.field').classList.toggle('bad',bad);if(bad&&!first)first=i});
    if(first){msg.className='msg err';msg.textContent='Doplňte zvýraznené povinné polia.';first.focus();return}
    const f=new FormData(form);
    const d={firma:f.get('firma').trim(),osoba:f.get('osoba').trim(),telefon:f.get('telefon').trim(),email:f.get('email').trim(),mesto:f.get('mesto').trim(),typ:f.get('typ'),priorita:f.get('priorita'),kategoria:f.get('kategoria'),popis:f.get('popis').trim(),stranka:location.hash||'#/'};
    if((f.get('web')||'').trim()||Date.now()-t0<1200){msg.className='msg';msg.textContent='Ďakujeme, žiadosť sme prijali.';form.reset();return}
    btn.disabled=true;const label=btn.textContent;btn.textContent='Odosielam…';
    try{
      const how=await sendLead(d);
      if(how==='db'){
        msg.className='msg';msg.textContent='Ďakujeme, žiadosť sme prijali. Ozveme sa vám na '+d.telefon+'.';
        form.reset();
      }else{
        mailFallback(d);
        msg.className='msg';msg.textContent='E-mail s objednávkou je pripravený v poštovej aplikácii. Ak sa neotvoril, napíšte na '+CO.email+'.';
      }
    }catch(err){
      console.error(err);
      mailFallback(d);
      msg.className='msg';msg.textContent='Odoslanie zlyhalo, preto sme pripravili e-mail. Ak sa neotvoril, napíšte na '+CO.email+'.';
    }finally{btn.disabled=false;btn.textContent=label}
  });
}

/* ================= NAV, MEGA, SHEET, SEARCH, THEME, CURSOR ================= */
function buildNav(){
  const megaP=$('#megaProducts'),megaS=$('#megaServices');
  megaP.innerHTML='<div class="mega-grid">'+GROUPS.map(g=>'<div><h4>'+g.name+'</h4>'+PRODUCTS.filter(p=>p.group===g.id).map(p=>'<a href="'+H('produkty/'+p.slug)+'">'+p.title+'</a>').join('')+'</div>').join('')+'</div><div class="mega-foot"><a class="btn btn-ghost" href="'+H('produkty')+'">Všetky produkty</a><a class="btn btn-ghost" href="'+H('eshopy')+'">eShopy</a></div>';
  megaS.innerHTML='<div class="mega-grid">'+SERVICES.map(s=>'<a href="'+svcHref(s)+'">'+s.title+'<small>'+s.short+'</small></a>').join('')+'</div><div class="mega-foot"><a class="btn btn-primary" href="'+H('objednat-servis')+'">Objednať servis alebo službu</a><a class="btn btn-ghost" href="'+H('sluzby')+'">Všetky služby</a></div>';
  const megaA=$('#megaAbout');
  megaA.innerHTML='<div class="mega-grid">'+[['o-nas','O spoločnosti','Kto sme a čo robíme'],['referencie','Realizované projekty','36 uvedených zákazníkov'],['certifikaty','Certifikáty a licencie','ISO 9001, ISO 14001, licencia PT 001249'],['partneri','Partneri','Výrobcovia a dodávatelia'],['riesenia','Riešenia na kľúč','Pre firmy, obce, domácnosti a ďalších']].map(([h,t,d])=>'<a href="'+H(h)+'">'+t+'<small>'+d+'</small></a>').join('')+'</div>';
  const sheet=$('#sheet');
  sheet.innerHTML='<a href="#/">Úvod</a><details><summary>Produkty</summary>'+PRODUCTS.map(p=>'<a href="'+H('produkty/'+p.slug)+'">'+p.title+'</a>').join('')+'</details><details><summary>Služby</summary>'+SERVICES.map(s=>'<a href="'+svcHref(s)+'">'+s.title+'</a>').join('')+'</details><a href="'+H('riesenia')+'">Riešenia na kľúč</a><details><summary>O nás</summary><a href="'+H('o-nas')+'">O spoločnosti</a><a href="'+H('referencie')+'">Realizované projekty</a><a href="'+H('certifikaty')+'">Certifikáty a licencie</a><a href="'+H('partneri')+'">Partneri</a></details><a href="'+H('eshopy')+'">eShopy</a><a href="'+H('kontakt')+'">Kontakt</a><a class="btn btn-primary" href="'+H('objednat-servis')+'">Objednať servis</a><a class="btn btn-ghost" href="'+CO.mobileHref+'">'+CO.mobile+'</a><span class="theme-label">Farebný režim</span><div class="theme-seg" role="radiogroup" aria-label="Farebný režim">'+['light','dark','system'].map(m=>'<button type="button" role="radio" data-mode="'+m+'">'+TLABEL[m]+'</button>').join('')+'</div>';
  const nav=$('#nav');let closeT;
  const navUl=nav.querySelector('ul'),ind=document.createElement('i');ind.className='nav-ind';ind.setAttribute('aria-hidden','true');navUl.prepend(ind);
  const moveInd=el=>{const r=el.getBoundingClientRect(),u=navUl.getBoundingClientRect();ind.style.width=r.width+'px';ind.style.transform='translateX('+(r.left-u.left)+'px)';ind.style.opacity='1'};
  $$('a',navUl).forEach(a=>{a.addEventListener('pointermove',()=>{if(ind.style.opacity!=='1'||ind.dataset.for!==a.dataset.k){ind.dataset.for=a.dataset.k;moveInd(a)}});a.addEventListener('focus',()=>moveInd(a))});
  addEventListener('scroll',()=>{ind.style.opacity='0'},{passive:true});
  navUl.addEventListener('pointerleave',()=>{ind.style.opacity='0'});
  const openMega=id=>{clearTimeout(closeT);$$('.mega').forEach(m=>m.classList.toggle('on',m.id===id));document.body.classList.add('mega-open');$$('.has-mega>a').forEach(a=>a.setAttribute('aria-expanded',a.dataset.mega===id))};
  const closeMega=()=>{document.body.classList.remove('mega-open');$$('.has-mega>a').forEach(a=>a.setAttribute('aria-expanded','false'))};
  let lastScrollT=0,lastMove=0;
  addEventListener('scroll',()=>{lastScrollT=performance.now();if(document.body.classList.contains('mega-open'))closeMega()},{passive:true});
  addEventListener('pointermove',e=>{if(e.movementX||e.movementY)lastMove=performance.now()},{passive:true});
  const realHover=()=>performance.now()-lastScrollT>350&&performance.now()-lastMove<120;
  $$('.has-mega').forEach(li=>{
    const a=li.querySelector('a');
    li.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'&&realHover())openMega(a.dataset.mega)});
    li.addEventListener('pointermove',e=>{if(e.pointerType==='mouse'&&!document.body.classList.contains('mega-open')&&realHover())openMega(a.dataset.mega)});
    li.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse')closeT=setTimeout(closeMega,180)});
    a.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();openMega(a.dataset.mega);const m=$('#'+a.dataset.mega+' a');m&&m.focus()}});
  });
  $$('.mega').forEach(m=>{m.addEventListener('pointerenter',()=>clearTimeout(closeT));m.addEventListener('pointerleave',()=>closeT=setTimeout(closeMega,180))});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMega();closeSheet();closePal()}});
  document.addEventListener('focusin',e=>{if(!e.target.closest('.has-mega')&&!e.target.closest('.mega'))closeMega()});
  addEventListener('hashchange',()=>{closeMega();closeSheet();closePal()});
  const menuBtn=$('#menuBtn');
  const closeSheet=()=>{sheet.classList.remove('on');nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');document.body.style.overflow=''};
  window.closeSheet=closeSheet;
  menuBtn.addEventListener('click',()=>{const o=!sheet.classList.contains('on');sheet.classList.toggle('on',o);nav.classList.toggle('open',o);menuBtn.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''});
  let lastY=scrollY,acc=0,hidden=false,navTick=false;
  const setHidden=h=>{if(h!==hidden){hidden=h;nav.classList.toggle('hide',h)}};
  addEventListener('scroll',()=>{if(navTick)return;navTick=true;requestAnimationFrame(()=>{navTick=false;
    const max=document.documentElement.scrollHeight-innerHeight,y=clamp(scrollY,0,max),dy=y-lastY;lastY=y;
    if(sheet.classList.contains('on')||document.body.classList.contains('mega-open'))return setHidden(false);
    if(y<160){acc=0;return setHidden(false)}
    if(y>=max-2)return;
    if((dy>0&&acc<0)||(dy<0&&acc>0))acc=0;acc+=dy;
    if(acc>90)setHidden(true);else if(acc<-60)setHidden(false);
  })},{passive:true});
  nav.addEventListener('focusin',()=>nav.classList.remove('hide'));
}
function closeSheet(){window.closeSheet&&window.closeSheet()}

/* search palette */
const INDEX=[];
function buildIndex(){
  const add=(t,h,d,k)=>INDEX.push({t,h,d,k:(t+' '+d+' '+(k||'')).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')});
  add('Úvod','','KREKA SK s.r.o.','domov');
  PRODUCTS.forEach(p=>add(p.title,'produkty/'+p.slug,p.short,[p.intro,(p.sections||[]).map(s=>s.h+' '+(s.items||[]).join(' ')).join(' '),(p.brands||[]).join(' ')].join(' ')));
  SERVICES.forEach(s=>add(s.title,s.route||('sluzby/'+s.slug),s.short,[s.intro,(s.sections||[]).map(x=>x.h+' '+(x.items||[]).join(' ')).join(' ')].join(' ')));
  SEGMENTS.forEach(s=>add(s.name,'riesenia?s='+s.id,'Riešenia na kľúč',s.r.join(' ')));
  add('Realizované projekty a referencie','referencie','Zoznam zákazníkov a realizácií',REFS.map(r=>r[0]+' '+r[1].join(' ')).join(' '));
  add('Certifikáty a licencie','certifikaty','ISO 9001, ISO 14001, technická licencia',CERTS.map(c=>c.join(' ')).join(' '));
  add('Partneri','partneri','Paradox, Jablotron, Eldes, Hikvision, Elcom, Datecs, Varos, Quorion');
  add('eShopy','eshopy','virtualna-pokladna.sk, e-katalóg, eshop.kreka.sk, refurbished.sk');
  add('O nás','o-nas','O spoločnosti KREKA',TECH.join(' '));
  add('Kontakt','kontakt','Adresa, telefón, otváracie hodiny, IČO','sramkova brezno ico dic iban telefon email');
}
const pal=$('#palette'),palIn=$('#palInput'),palList=$('#palList');let palSel=0,palRes=[],palReturn=null;
function openPal(){palReturn=document.activeElement;pal.classList.add('on');palIn.value='';searchPal();palIn.focus()}
function closePal(){if(!pal.classList.contains('on'))return;pal.classList.remove('on');palReturn&&palReturn.focus&&palReturn.focus()}
function searchPal(){
  const q=palIn.value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  palRes=q?INDEX.map(x=>({x,s:(x.t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').includes(q)?3:0)+(x.k.includes(q)?1:0)})).filter(r=>r.s).sort((a,b)=>b.s-a.s).map(r=>r.x).slice(0,12):INDEX.filter(x=>['produkty/kamerove-systemy','objednat-servis','sluzby/servis-na-dialku','kontakt','sluzby/prenajom-plosiny-a-vyskove-prace','referencie'].includes(x.h));
  palSel=0;
  palList.innerHTML=palRes.length?palRes.map((r,i)=>'<li><a href="'+H(r.h)+'" id="pr'+i+'" role="option"'+(i===0?' class="sel" aria-selected="true"':'')+'><b>'+r.t+'</b><span>'+r.d+'</span></a></li>').join(''):'<li class="pal-empty">Nič sme nenašli. Skúste iné slovo, napríklad „kamery“ alebo „e-kasa“.</li>';
}
palIn.addEventListener('input',searchPal);
palIn.addEventListener('keydown',e=>{
  const as=$$('#palList a');if(!as.length)return;
  if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();palSel=(palSel+(e.key==='ArrowDown'?1:-1)+as.length)%as.length;as.forEach((a,i)=>{a.classList.toggle('sel',i===palSel);a.setAttribute('aria-selected',i===palSel)});as[palSel].scrollIntoView({block:'nearest'})}
  if(e.key==='Enter'){e.preventDefault();as[palSel].click()}
});
pal.addEventListener('click',e=>{if(e.target===pal)closePal()});
palList.addEventListener('click',e=>{if(e.target.closest('a'))setTimeout(()=>pal.classList.remove('on'),0)});
document.addEventListener('keydown',e=>{
  if((e.key==='k'&&(e.metaKey||e.ctrlKey))||(e.key==='/'&&!/input|textarea|select/i.test(document.activeElement.tagName))){e.preventDefault();openPal()}
});
document.addEventListener('click',e=>{if(e.target.closest('[data-open-search]'))openPal()});

/* theme: light is default, dark or system on demand */
const themeBtn=$('#themeBtn'),themeMenu=$('#themeMenu'),mqDark=matchMedia('(prefers-color-scheme: dark)');
const TICO={light:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/></svg>',dark:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.6A8.2 8.2 0 0 1 9.4 4a8.2 8.2 0 1 0 10.6 10.6z"/></svg>',system:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4.5" width="18" height="12" rx="1.5"/><path d="M8.5 20h7M12 16.5V20"/></svg>'};
const TLABEL={light:'Svetlý',dark:'Tmavý',system:'Podľa systému'};
const getMode=()=>{try{return localStorage.getItem('kreka-theme-mode')||'light'}catch(e){return 'light'}};
function applyTheme(mode,animate){
  const dark=mode==='dark'||(mode==='system'&&mqDark.matches);
  if(animate&&!RM){root.classList.add('theme-anim');setTimeout(()=>root.classList.remove('theme-anim'),520)}
  root.dataset.theme=dark?'dark':'light';
  if(typeof home!=='undefined'&&home&&home.retheme)setTimeout(home.retheme,30);
  const tc=$('#themeColor');if(tc)tc.setAttribute('content',dark?'#141719':'#F5F5F5');
  themeBtn.innerHTML=TICO[mode];themeBtn.setAttribute('aria-label','Farebný režim: '+TLABEL[mode]);
  $$('[data-mode]').forEach(b=>b.setAttribute('aria-checked',b.dataset.mode===mode));
}
function setMode(mode){try{localStorage.setItem('kreka-theme-mode',mode)}catch(e){}applyTheme(mode,true)}
themeMenu.innerHTML=['light','dark','system'].map(m=>'<button type="button" role="menuitemradio" data-mode="'+m+'">'+TICO[m]+TLABEL[m]+'</button>').join('');
const closeTheme=()=>{themeMenu.classList.remove('on');themeBtn.setAttribute('aria-expanded','false')};
themeBtn.addEventListener('click',e=>{e.stopPropagation();const o=!themeMenu.classList.contains('on');themeMenu.classList.toggle('on',o);themeBtn.setAttribute('aria-expanded',o);if(o){const c=themeMenu.querySelector('[aria-checked="true"]');c&&c.focus()}});
document.addEventListener('click',e=>{const b=e.target.closest('[data-mode]');if(b){setMode(b.dataset.mode);if(themeMenu.contains(b)){closeTheme();themeBtn.focus()}return}if(!e.target.closest('.theme-wrap'))closeTheme()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&themeMenu.classList.contains('on')){closeTheme();themeBtn.focus()}});
themeMenu.addEventListener('keydown',e=>{const bs=$$('button',themeMenu),k=bs.indexOf(document.activeElement);if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();bs[(k+(e.key==='ArrowDown'?1:-1)+bs.length)%bs.length].focus()}});
mqDark.addEventListener('change',()=>{if(getMode()==='system')applyTheme('system',true)});
function paintTheme(){applyTheme(getMode(),false)}

/* viewfinder cursor: replaces the system pointer on mouse/trackpad devices */
(()=>{const vf=$('#vf');
  if(!matchMedia('(hover:hover) and (pointer:fine)').matches){vf.remove();return}
  let x=-100,y=-100,dirty=false;
  const place=()=>{dirty=false;vf.style.transform='translate3d('+x+'px,'+y+'px,0)'};
  addEventListener('pointermove',e=>{
    if(e.pointerType!=='mouse'&&e.pointerType!=='pen')return;
    root.classList.add('vf-cursor');
    x=e.clientX;y=e.clientY;vf.classList.add('on');
    const t=e.target.closest?e.target:null;
    vf.classList.toggle('hot',!!(t&&t.closest('a,button,select,label,summary,.chip,[role=tab],input[type=radio],input[type=range]')));
    vf.classList.toggle('text',!!(t&&t.closest('input:not([type=range]):not([type=radio]),textarea')));
    if(!dirty){dirty=true;requestAnimationFrame(place)}
  },{passive:true});
  addEventListener('pointerdown',()=>vf.classList.add('down'));
  addEventListener('pointerup',()=>vf.classList.remove('down'));
  document.addEventListener('mouseleave',()=>vf.classList.remove('on'));
  document.addEventListener('mouseenter',()=>vf.classList.add('on'));
  addEventListener('blur',()=>vf.classList.remove('on'));
})();

/* intro shutter (first visit in session) */
function intro(){
  if(!root.classList.contains('shut')){return}
  try{sessionStorage.setItem('kreka-intro','1')}catch(e){}
  const cv=$('#shutter canvas'),sc=cv.getContext('2d'),dpr=Math.min(devicePixelRatio||1,2);
  const W=cv.width=Math.round(innerWidth*dpr),Hh=cv.height=Math.round(innerHeight*dpr);
  const start=performance.now()+220,dur=1250;let released=false;
  const step=now=>{const k=clamp((now-start)/dur,0,1),e=k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2;drawBlades(sc,W,Hh,e,dpr);
    if(k>.3&&!released){released=true;root.classList.remove('intro');window.__introEnd=performance.now()}
    if(k<1)requestAnimationFrame(step);else root.classList.remove('shut')};
  requestAnimationFrame(step);
}

/* footer year-safe content */
function buildFooter(){
  $('#footCols').innerHTML='<div class="fcol"><a class="brand" href="#/" aria-label="KREKA SK, na úvod">'+LOGO_SVG+'</a><p style="margin-top:14px;max-width:30ch">Poradenstvo, dodávka a servis IT technológií, pokladničných a bezpečnostných systémov po celom Slovensku.</p><p class="status" data-status data-s="closed" style="margin-top:6px"><i></i><span></span></p></div>'
   +'<nav class="fcol" aria-label="Produkty v päte"><h4>Produkty</h4>'+['kamerove-systemy','bezpecnostne-a-signalizacne-systemy','registracne-pokladnice','vypoctova-technika','strukturovana-kabelaz-rozvody','poziarna-signalizacia'].map(P).map(p=>'<a href="'+H('produkty/'+p.slug)+'">'+p.title+'</a>').join('')+'<a href="'+H('produkty')+'">Všetky produkty</a></nav>'
   +'<nav class="fcol" aria-label="Služby v päte"><h4>Služby</h4>'+['objednat-servisny-vyjazd','servis-na-dialku','hotline-podpora','projekcia-systemov','prenajom-plosiny-a-vyskove-prace','financne-sluzby'].map(S).map(s=>'<a href="'+svcHref(s)+'">'+s.title+'</a>').join('')+'<a href="'+H('sluzby')+'">Všetky služby</a></nav>'
   +'<nav class="fcol" aria-label="Spoločnosť"><h4>Spoločnosť</h4><a href="'+H('o-nas')+'">O nás</a><a href="'+H('riesenia')+'">Riešenia na kľúč</a><a href="'+H('referencie')+'">Realizované projekty</a><a href="'+H('certifikaty')+'">Certifikáty a licencie</a><a href="'+H('partneri')+'">Partneri</a><a href="'+H('eshopy')+'">eShopy</a></nav>'
   +'<div class="fcol"><h4>Kontakt</h4><a href="'+CO.mobileHref+'">'+CO.mobile+'</a><a href="'+CO.landlineHref+'">'+CO.landline+'</a><a href="mailto:'+CO.email+'">'+CO.email+'</a><span>'+CO.shop.join(', ')+'</span><a href="'+CO.fb+'" target="_blank" rel="noopener">Facebook</a></div>';
  $('#fineLegal').innerHTML='<span>'+CO.name+', '+CO.seat.slice(0,2).join(', ')+'</span><span>IČO '+CO.ico+'</span><span>IČ DPH '+CO.dic+'</span><span>Technická licencia '+CO.license+'</span><span>'+CO.orsr+'</span>';
}

/* ================= BOOT ================= */
buildIndex();buildNav();buildFooter();paintTheme();
addEventListener('hashchange',render);
render().then(()=>{intro();requestAnimationFrame(frame)});


/* ================= SATELLITE MAP ================= */
/* Loads Google satellite embed when the map scrolls near. If the host blocks frames (strict CSP), the styled fallback with a link stays. */
let cspFrameBlocked=false;
document.addEventListener('securitypolicyviolation',e=>{const d=(e.effectiveDirective||e.violatedDirective||'');if(/frame|child|default/.test(d)&&/google/.test(e.blockedURI||'')){cspFrameBlocked=true;$$('[data-map]').forEach(m=>{m.classList.remove('live','active');const f=m.querySelector('iframe');f.hidden=true;f.removeAttribute('src')})}});
function initMaps(scope){
  $$('[data-map]',scope||document).forEach(m=>{
    if(m.dataset.ready)return;m.dataset.ready='1';
    const ifr=m.querySelector('iframe'),shield=m.querySelector('.map-shield');
    const reveal=()=>{if(cspFrameBlocked)return;ifr.hidden=false;requestAnimationFrame(()=>m.classList.add('live'))};
    const load=()=>{if(ifr.src)return;ifr.addEventListener('load',()=>setTimeout(reveal,450),{once:true});ifr.src=ifr.dataset.src;setTimeout(()=>{if(!m.classList.contains('live'))reveal()},2500)};
    if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>{if(es.some(x=>x.isIntersecting)){io.disconnect();load()}},{rootMargin:'400px 0px'});io.observe(m)}else load();
    shield.addEventListener('click',()=>{m.classList.add('active')});
    m.addEventListener('mouseleave',()=>m.classList.remove('active'));
    addEventListener('scroll',()=>{if(m.classList.contains('active')&&!matchMedia('(hover:hover)').matches){const r=m.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)m.classList.remove('active')}},{passive:true});
  });
}
initMaps(document);

/* ================= MOBILE ACTION BAR ================= */
(()=>{const bar=$('#mbar'),foot=document.querySelector('footer');let shown=false,nearFoot=false;
  if('IntersectionObserver' in window)new IntersectionObserver(es=>{nearFoot=es[0].isIntersecting;upd()},{rootMargin:'0px 0px -10% 0px'}).observe(foot);
  const upd=()=>{const on=document.body.classList.contains('has-mbar')&&scrollY>320&&!nearFoot;if(on!==shown){shown=on;bar.classList.toggle('on',on)}};
  addEventListener('scroll',upd,{passive:true});addEventListener('hashchange',()=>setTimeout(upd,50));
})();
