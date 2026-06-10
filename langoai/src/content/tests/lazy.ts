import type { TestItem } from "../types";

export type TestMeta = Pick<TestItem, "id" | "title" | "passScore" | "languageCode" | "topic"> & {
  questionCount: number;
};

type LazyTestsModule = {
  testList?: TestMeta[];
  loadTest?: (id: string) => Promise<TestItem | null>;
};

type OldTestsModule = Record<string, TestItem[]>;

const lazyModules = import.meta.glob<LazyTestsModule>("./*/lazyIndex.ts");
const oldTestModules = import.meta.glob<OldTestsModule>("./*.ts");

async function loadLazyModule(lang: string): Promise<LazyTestsModule | null> {
  const loadModule = lazyModules[`./${lang}/lazyIndex.ts`];
  if (!loadModule) return null;
  return loadModule();
}

async function loadOldTests(lang: string): Promise<TestItem[]> {
  const loadModule = oldTestModules[`./${lang}.ts`];
  if (!loadModule) return [];

  try {
    const mod = await loadModule();
    return mod[`${lang}Tests`] || [];
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