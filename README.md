# KREKA SK – web

Nový web pre KREKA SK s.r.o. (bezpečnostné a kamerové systémy, IT technika, e-kasa pokladnice).
Statická stránka bez frameworku: HTML, CSS a JavaScript. Dopyty z formulára sa ukladajú do Supabase.

## Čo web obsahuje

- Úvod so 3D animáciou objektívu a preletom do sekcie „Čo robíme“
- 19 produktových kategórií, 18 služieb, riešenia na kľúč, referencie, certifikáty, partneri, eShopy, kontakt
- Kalkulačky (plošina, autodoprava, prehliadky proti odpočúvaniu)
- Vyhľadávanie (klávesa `/` alebo `Ctrl/⌘ + K`), svetlý a tmavý režim, satelitná mapa predajne
- Objednávkový formulár so zápisom do databázy a záložným e-mailom

## Štruktúra

```
public/              hotová stránka (to, čo sa nasadzuje)
  index.html
  assets/styles.css  štýly
  assets/app.js      dáta webu, router a animácie
  assets/config.js   konfigurácia (pri builde sa prepíše z premenných prostredia)
  assets/logo.svg    logo KREKA
  favicon.svg, robots.txt, sitemap.xml
scripts/build.mjs    build: public → dist + doplnenie konfigurácie
supabase/schema.sql  tabuľka dopytov a oprávnenia
vercel.json          nastavenie Vercelu
```

## 1. GitHub

```bash
git init
git add .
git commit -m "KREKA SK web"
git branch -M main
git remote add origin https://github.com/<pouzivatel>/kreka-web.git
git push -u origin main
```

## 2. Supabase

1. Vytvor projekt na [supabase.com](https://supabase.com) (región Frankfurt je pre SR najbližší).
2. **SQL Editor → New query**, vlož obsah `supabase/schema.sql` a spusti **Run**.
3. **Project Settings → API** a skopíruj si:
   - **Project URL** → `SUPABASE_URL`
   - **anon public** kľúč → `SUPABASE_ANON_KEY`

Kľúč `anon` je verejný a patrí do prehliadača. Vďaka Row Level Security sa cez neho dá iba vložiť
dopyt. Čítať ich môže len prihlásený používateľ. Kľúč `service_role` nikdy nedávaj do webu.

Dopyty potom nájdeš v **Table Editor → dopyty** alebo cez pohľad `dopyty_prehlad`.
Notifikáciu na e-mail vieš doplniť cez **Database → Webhooks** (napr. na Resend alebo Make).

## 3. Vercel

1. [vercel.com](https://vercel.com) → **Add New… → Project** → importuj repozitár z GitHubu.
2. Framework Preset nechaj **Other**. Build a výstup si Vercel načíta z `vercel.json`
   (`npm run build`, priečinok `dist`).
3. **Settings → Environment Variables** pridaj pre Production aj Preview:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
4. **Deploy**. Po zmene premenných treba spustiť **Redeploy**, aby sa prepísal `config.js`.
5. Doménu pridáš v **Settings → Domains** (napr. `kreka.sk` a `www.kreka.sk`).

Bez nastavených premenných web funguje tiež: formulár pripraví e-mail na `info@kreka.sk`.

## Lokálny vývoj

```bash
npm run dev      # build + lokálny server na http://localhost:3000
```

Prípadne stačí otvoriť `public/index.html` v prehliadači a Supabase hodnoty dopísať
priamo do `public/assets/config.js`.

## Úpravy obsahu

Celý obsah webu je v `public/assets/app.js` v zoznamoch na začiatku súboru:

| Premenná | Obsah |
|---|---|
| `CO` | kontakty, adresy, IČO, IBAN |
| `PRODUCTS` | produktové kategórie |
| `SERVICES` | služby a cenníky |
| `SEGMENTS` | riešenia na kľúč |
| `REFS`, `CERTS`, `PARTNERS`, `ESHOPS` | referencie, certifikáty, partneri, e-shopy |

Farby sú na začiatku `public/assets/styles.css` v premenných `--kreka-blue` (#4EA0DC)
a `--kreka-light` (#F5F5F5).

## Čo ešte treba doplniť pred ostrým spustením

- Fotografie realizácií a produktov (web je zatiaľ bez fotiek)
- Originálne logo od klienta vo vektore (aktuálne je prekreslené z obrázka)
- Overiť adresu sídla: web klienta uvádza na dvoch miestach Zelenú 2C/X3 aj Námestie SNP 16
- Doplniť zásady ochrany osobných údajov k formuláru (GDPR) pred zberom dopytov
