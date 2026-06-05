import type { GrammarLesson } from "./types";

// Static glob imports for each language (required by Vite)
const nlModules = import.meta.glob<GrammarLesson[]>("./grammar/nl/*.json", { eager: false });
const enModules = import.meta.glob<GrammarLesson[]>("./grammar/en/*.json", { eager: false });
const deModules = import.meta.glob<GrammarLesson[]>("./grammar/de/*.json", { eager: false });
const esModules = import.meta.glob<GrammarLesson[]>("./grammar/es/*.json", { eager: false });
const frModules = import.meta.glob<GrammarLesson[]>("./grammar/fr/*.json", { eager: false });

// Fallback to TS index files
async function loadGrammarFromTs(lang: string): Promise<GrammarLesson[]> {
  try {
    const mod = await import(`./grammar/${lang}/index.ts`);
    const key = `${lang}Grammar` as keyof typeof mod;
    return (mod[key] as GrammarLesson[] | undefined) || [];
  } catch {
    return [];
  }
}

export async function getGrammarLessons(lang: string): Promise<GrammarLesson[]> {
  const langModules: Record<string, Record<string, () => Promise<GrammarLesson[]>>> = {
    nl: nlModules, en: enModules, de: deModules, es: esModules, fr: frModules,
  };
  
  const modules = langModules[lang];
  if (!modules || Object.keys(modules).length === 0) {
    return loadGrammarFromTs(lang);
  }
  
  const lessons: GrammarLesson[] = [];
  for (const loader of Object.values(modules)) {
    try {
      const data = await loader();
      lessons.push(...(data || []));
    } catch {
      // Skip failed imports
    }
  }
  
  // Fallback if no JSON found
  if (lessons.length === 0) {
    return loadGrammarFromTs(lang);
  }
  
  return lessons;
}