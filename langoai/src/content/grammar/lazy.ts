import type { GrammarLesson } from "../types";

export type GrammarLessonMeta = Pick<GrammarLesson, "id" | "title" | "level" | "topic">;

export async function getGrammarLessonList(lang: string): Promise<GrammarLessonMeta[]> {
  if (lang === "nl") {
    const mod = await import("./nl/lazyIndex.ts");
    return mod.nlGrammarList;
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
  if (lang === "nl") {
  const mod = await import("./nl/lazyIndex.ts");    return mod.loadNlGrammarLesson(id);
  }

  try {
    const mod = await import(`./${lang}/index.ts`);
    const lessons = (mod as Record<string, GrammarLesson[]>)[`${lang}Grammar`] || [];
    return lessons.find((lesson) => lesson.id === id) ?? null;
  } catch {
    return null;
  }
}