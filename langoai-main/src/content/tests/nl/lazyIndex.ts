import type { TestItem } from "../../types";
import type { TestMeta } from "../lazy";

type TestRow = readonly [
  id: string,
  title: string,
  passScore: number,
  languageCode: string,
  topic: string,
  questionCount: number,
  file: string,
  exportName: string
];

const rows: TestRow[] = [
  ["nl-test-werkwoorden-1", "Werkwoorden A1", 70, "nl", "Werkwoorden", 1, "werkwoorden", "werkwoorden"],
];

export const testList: TestMeta[] = rows.map(([id, title, passScore, languageCode, topic, questionCount]) => ({
  id,
  title,
  passScore,
  languageCode,
  topic,
  questionCount,
}));

export async function loadTest(id: string): Promise<TestItem | null> {
  const row = rows.find(([testId]) => testId === id);
  if (!row) return null;

  const [, , , , , , file, exportName] = row;
  const modules = import.meta.glob<Record<string, TestItem>>("./*.ts");
  const loadModule = modules[`./${file}.ts`];
  if (!loadModule) return null;

  const mod = await loadModule();
  return mod[exportName] ?? null;
}