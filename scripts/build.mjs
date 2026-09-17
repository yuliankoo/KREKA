/* Build bez závislostí: skopíruje public/ do dist/ a doplní konfiguráciu z premenných prostredia. */
import { cp, rm, writeFile, mkdir } from "node:fs/promises";

const url = process.env.SUPABASE_URL || "";
const key = process.env.SUPABASE_ANON_KEY || "";
const table = process.env.SUPABASE_LEADS_TABLE || "dopyty";

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
await cp("public", "dist", { recursive: true });

await writeFile(
  "dist/assets/config.js",
  `window.KREKA_CONFIG = ${JSON.stringify(
    { supabaseUrl: url, supabaseAnonKey: key, leadsTable: table },
    null,
    2
  )};\n`
);

console.log(
  url
    ? `Build hotový. Supabase je nastavený (${new URL(url).host}), tabuľka "${table}".`
    : 'Build hotový. Supabase nie je nastavený, formulár pripraví e-mail (mailto).'
);
