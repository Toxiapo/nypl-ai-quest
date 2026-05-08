/**
 * Filesystem database — server-side only.
 * Stores quiz results as JSON in data/results.json at the project root.
 * Do NOT import this file from client components.
 */

import fs from "fs";
import path from "path";
import { randomUUID } from "crypto";

const DATA_DIR = path.join(process.cwd(), "data");
const RESULTS_FILE = path.join(DATA_DIR, "results.json");

export interface QuizAnswer {
  questionId: number;
  chosen: number;
  correct: boolean;
}

export interface QuizResult {
  id: string;
  date: string;         // ISO 8601
  score: number;
  total: number;
  pct: number;
  durationSeconds: number;
  answers: QuizAnswer[];
}

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export function getAllResults(): QuizResult[] {
  ensureDataDir();
  if (!fs.existsSync(RESULTS_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(RESULTS_FILE, "utf-8")) as QuizResult[];
  } catch {
    return [];
  }
}

export function saveResult(
  data: Omit<QuizResult, "id" | "date">
): QuizResult {
  ensureDataDir();
  const existing = getAllResults();
  const result: QuizResult = {
    id: randomUUID(),
    date: new Date().toISOString(),
    ...data,
  };
  existing.unshift(result); // newest first
  fs.writeFileSync(RESULTS_FILE, JSON.stringify(existing, null, 2), "utf-8");
  return result;
}
