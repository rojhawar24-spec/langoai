import type { TestItem } from "../types";

export type TestMeta = Pick<TestItem, "id" | "title" | "passScore" | "languageCode" | "topic"> & {
  questionCount: number;
};

type LazyTestsModule = {
  testList?: TestMeta[];
  loadTest?: (id: string) => Promise<TestItem | null>;
};

const lazyModules = import.meta.glob<LazyTestsModule>("./*/lazyIndex.ts");

async function loadLazyModule(lang: string): Promise<LazyTestsModule | null> {
  const loadModule = lazyModules[`./${lang}/lazyIndex.ts`];
  if (!loadModule) return null;
  return loadModule();
}

async function loadOldTests(lang: string): Promise<TestItem[]> {
  try {
    const mod = await import(`./${lang}.ts`);
    return (mod as Record<string, TestItem[]>)[`${lang}Tests`] || [];
  } catch {
    return [];
  }
}

export async function getTestList(lang: string): Promise<TestMeta[]> {
  const lazyModule = await loadLazyModule(lang);

  if (lazyModule?.testList) {
    return lazyModule.testList;
  }

  const tests = await loadOldTests(lang);

  return tests.map((test) => ({
    id: test.id,
    title: test.title,
    passScore: test.passScore,
    languageCode: test.languageCode,
    topic: test.topic,
    questionCount: test.questions.length,
  }));
}

export async function getTestById(lang: string, id: string): Promise<TestItem | null> {
  const lazyModule = await loadLazyModule(lang);

  if (lazyModule?.loadTest) {
    return lazyModule.loadTest(id);
  }

  const tests = await loadOldTests(lang);
  return tests.find((test) => test.id === id) ?? null;
}