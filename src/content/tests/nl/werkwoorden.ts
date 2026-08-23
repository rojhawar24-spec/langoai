import type { TestItem } from "../../types";

export const werkwoorden: TestItem = {
  id: "nl-test-werkwoorden-1",
  title: "Werkwoorden A1",
  passScore: 70,
  languageCode: "nl",
  topic: "Werkwoorden",
  questions: [
    {
      prompt: 'What does "lopen" mean?',
      options: ["To walk", "To run", "To swim", "To fly"],
      answer: "To walk",
    },
  ],
};