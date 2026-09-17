-- KREKA SK – databáza pre dopyty z webu
-- Spusti v Supabase: SQL Editor → New query → Run

create table if not exists public.dopyty (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  firma       text not null check (char_length(firma) between 2 and 200),
  osoba       text not null check (char_length(osoba) between 2 and 200),
  telefon     text not null check (char_length(telefon) between 6 and 40),
  email       text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  mesto       text not null check (char_length(mesto) between 2 and 120),
  typ         text not null check (typ in ('zmluvný','nezmluvný')),
  priorita    text not null check (priorita in ('nízka','stredná','vysoká')),
  kategoria   text not null check (kategoria in ('IT technika','Bezpečnostné systémy','Pokladničné systémy')),
  popis       text not null check (char_length(popis) between 5 and 4000),
  stranka     text,
  stav        text not null default 'nový' check (stav in ('nový','v riešení','vybavený','zrušený')),
  poznamka    text
);

create index if not exists dopyty_created_at_idx on public.dopyty (created_at desc);
create index if not exists dopyty_stav_idx on public.dopyty (stav);

-- Zabezpečenie: anonymný návštevník smie iba vložiť dopyt, nič nevidí ani nemení.
alter table public.dopyty enable row level security;

drop policy if exists "web moze vlozit dopyt" on public.dopyty;
create policy "web moze vlozit dopyt"
  on public.dopyty for insert
  to anon
  with check (true);

-- Čítanie a úpravy len pre prihlásených používateľov (tím KREKA v Supabase Auth).
drop policy if exists "tim vidi dopyty" on public.dopyty;
create policy "tim vidi dopyty"
  on public.dopyty for select
  to authenticated
  using (true);

drop policy if exists "tim upravuje dopyty" on public.dopyty;
create policy "tim upravuje dopyty"
  on public.dopyty for update
  to authenticated
  using (true) with check (true);

-- Prehľad posledných dopytov pre tím
create or replace view public.dopyty_prehlad as
  select id, created_at, firma, osoba, telefon, email, mesto, kategoria, priorita, typ, stav
  from public.dopyty
  order by created_at desc;
