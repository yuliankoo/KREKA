# Jobsy.sk — nasadenie na GitHub Pages

## Postup
1. Nahraj obsah tohto priečinka do koreňa repozitára.
2. Settings → Pages → Source: `Deploy from a branch`, branch `main`, folder `/ (root)`.
3. Settings → Pages → Custom domain: `jobsy.sk`, zapni `Enforce HTTPS`.
4. DNS: `A` pre `jobsy.sk` → 185.199.108.153 / .109.153 / .110.153 / .111.153,
   `CNAME` pre `www` → `<tvoje-meno>.github.io`

## Dve verzie úvodnej stránky

- `index.html` — tvoj pôvodný dizajn, doplnený o živé ponuky, náhľad odkazu a mobilné doladenie.
- `index-nova.html` — návrh prestavby zameraný na pracovný portál (3D balíček reálnych
  ponúk listovaný scrollom, funkčné vyhľadávanie, štruktúrované dáta pre Google,
  bez GSAP / Three.js / Lenis).

Ak chceš nasadiť novú verziu, premenuj súbory:
`index.html` → `index-stary.html` a `index-nova.html` → `index.html`.

## Ponuky na úvodnej stránke
Sekcia s kartami sa načítava zo Supabase — tabuľka `jobs`, podmienka `active = true`,
zoradené od najnovšej, maximálne 6 kariet. Nastavenia sú v `index.html` v skripte
označenom „Aktuálne ponuky na úvodnej stránke":

- `MAX_KARIET` — koľko ponúk sa nanajvýš zobrazí
- pri jednej až dvoch ponukách sa galéria sama prepne na statické zobrazenie
  vedľa seba (bez vodorovného scrollovania)
- keď nie je aktívna žiadna ponuka, zobrazí sa karta „Práve pripravujeme nové ponuky"
- ak Supabase neodpovie do 4 sekúnd, stránka sa načíta bez kariet a nezasekne sa

Kliknutie na kartu vedie na `ponuky.html#job-<id>`, takže sa rovno otvorí detail.

## Ak náhľad odkazu neukazuje obrázok
`og:image` musí byť absolútna URL na doménu, ktorá naozaj beží. Ak je web zatiaľ
na `https://<tvoje-meno>.github.io/<repo>/`, prepíš v `index.html` a `ponuky.html`
všetky `https://jobsy.sk/` na túto adresu — inak scraper stiahne 404.

Over a pretlač cache:
- Facebook / Messenger: https://developers.facebook.com/tools/debug/
- LinkedIn: https://www.linkedin.com/post-inspector/

V URL obrázka je `?v=3`. Pri zmene obrázka zvýš na `?v=4`.
