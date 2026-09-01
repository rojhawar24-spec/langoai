import type { GrammarLesson } from "../types";

export type GrammarLessonMeta = Pick<GrammarLesson, "id" | "title" | "level" | "topic">;

type LazyGrammarModule = {
  grammarList?: GrammarLessonMeta[];
  nlGrammarList?: GrammarLessonMeta[];
  loadGrammarLesson?: (id: string) => Promise<GrammarLesson | null>;
  loadNlGrammarLesson?: (id: string) => Promise<GrammarLesson | null>;
};

const lazyModules = import.meta.glob<LazyGrammarModule>("./*/lazyIndex.ts");

async function loadLazyModule(lang: string): Promise<LazyGrammarModule | null> {
  const loadModule = lazyModules[`./${lang}/lazyIndex.ts`];
  if (!loadModule) return null;
  return loadModule();
}

export async function getGrammarLessonList(lang: string): Promise<GrammarLessonMeta[]> {
  const lazyModule = await loadLazyModule(lang);

  if (lazyModule) {
    return lazyModule.grammarList ?? lazyModule.nlGrammarList ?? [];
  }

  try {
    const mod = await import(`./${lang}/index.ts`);
    const lessons = (mod as Record<string, GrammarLesson[]>)[`${lang}Grammar`] || [];

    return lessons.map((lesson) => ({
      id: lesson.id,
      title: lesson.title,
      level: lesson.level,
      topic: lesson.topic,
    }));
  } catch {
    return [];
  }
}

export async function getGrammarLessonById(lang: string, id: string): Promise<GrammarLesson | null> {
  const lazyModule = await loadLazyModule(lang);

  if (lazyModule) {
    const loadLesson = lazyModule.loadGrammarLesson ?? lazyModule.loadNlGrammarLesson;
    return loadLesson ? loadLesson(id) : null;
  }

  try {
    const mod = await import(`./${lang}/index.ts`);
    const lessons = (mod as Record<string, GrammarLesson[]>)[`${lang}Grammar`] || [];
    return lessons.find((lesson) => lesson.id === id) ?? null;
  } catch {
    return null;
  }
}