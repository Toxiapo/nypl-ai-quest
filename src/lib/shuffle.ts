import { type Question } from "@/data/questions";

function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export const DEFAULT_QUIZ_SIZE = 20;

/**
 * Returns `size` randomly selected questions in random order, with each
 * question's answer options also shuffled. The `correct` index is updated
 * to match the new position of the originally correct option.
 */
export function prepareQuestions(questions: Question[], size = DEFAULT_QUIZ_SIZE): Question[] {
  return shuffleArray(questions).slice(0, size).map((q) => {
    const indexed = q.options.map((text, i) => ({ text, originalIndex: i }));
    const shuffled = shuffleArray(indexed);
    return {
      ...q,
      options: shuffled.map((o) => o.text),
      correct: shuffled.findIndex((o) => o.originalIndex === q.correct),
    };
  });
}
