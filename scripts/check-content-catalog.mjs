/**
 * Fails if frontend Arena/content IDs diverge from supabase/content_catalog.sql
 * Run: node scripts/check-content-catalog.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalogSql = fs.readFileSync(path.join(root, "supabase/content_catalog.sql"), "utf8");

function parseInserts(kind) {
  const set = new Set();
  const re = new RegExp(
    String.raw`INSERT INTO public\.learning_content \(kind, content_id\) VALUES \('${kind}', '([^']+)'\)`,
    "g"
  );
  let m;
  while ((m = re.exec(catalogSql))) set.add(m[1]);
  return set;
}

function parseArena() {
  const set = new Set();
  const re =
    /INSERT INTO public\.arena_catalog \(lang, season_id, level_id\) VALUES \('([^']+)', (\d+), (\d+)\)/g;
  let m;
  while ((m = re.exec(catalogSql))) set.add(`${m[1]}:${m[2]}:${m[3]}`);
  return set;
}

const errors = [];

// Arena JSON vs catalog
const arenaDir = path.join(root, "public/arena");
const arenaFromFs = new Set();
for (const lang of fs.readdirSync(arenaDir)) {
  const ld = path.join(arenaDir, lang);
  if (!fs.statSync(ld).isDirectory()) continue;
  for (const f of fs.readdirSync(ld).filter((x) => x.startsWith("season-") && x.endsWith(".json"))) {
    const seasonNum = Number(f.match(/season-(\d+)/)[1]);
    const data = JSON.parse(fs.readFileSync(path.join(ld, f), "utf8"));
    for (const lv of data.levels || []) {
      arenaFromFs.add(`${lang}:${seasonNum}:${lv.level}`);
    }
  }
}
const arenaCat = parseArena();
for (const id of arenaFromFs) {
  if (!arenaCat.has(id)) errors.push(`Arena in frontend missing from catalog: ${id}`);
}
for (const id of arenaCat) {
  if (!arenaFromFs.has(id)) errors.push(`Arena in catalog missing from frontend: ${id}`);
}

// Vocabulary IDs
const vocabCat = parseInserts("vocabulary_word");
const vocabFs = new Set();
const wordsDir = path.join(root, "src/content/words");
for (const f of fs.readdirSync(wordsDir).filter((x) => x.endsWith(".ts"))) {
  const text = fs.readFileSync(path.join(wordsDir, f), "utf8");
  for (const m of text.matchAll(/id\s*:\s*"([^"]+)"/g)) vocabFs.add(m[1]);
}
for (const id of vocabFs) {
  if (!vocabCat.has(id)) errors.push(`Vocab in frontend missing from catalog: ${id}`);
}

// Grammar stems
const grammarCat = parseInserts("grammar_lesson");
const grammarFs = new Set();
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (ent.name.endsWith(".ts") && !/lazy|index|types/i.test(ent.name)) {
      grammarFs.add(path.basename(ent.name, ".ts"));
    }
  }
}
walk(path.join(root, "src/content/grammar"));
for (const id of grammarFs) {
  if (!grammarCat.has(id)) errors.push(`Grammar in frontend missing from catalog: ${id}`);
}

if (errors.length) {
  console.error("CONTENT CATALOG DRIFT:\n" + errors.slice(0, 50).join("\n"));
  if (errors.length > 50) console.error(`... and ${errors.length - 50} more`);
  process.exit(1);
}
console.log("OK: content catalog matches frontend Arena/vocab/grammar sources.");
