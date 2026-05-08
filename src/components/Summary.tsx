"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { type Question } from "@/data/questions";
import { type AnswerRecord } from "./Quiz";

interface SummaryProps {
  answers: AnswerRecord[];
  questions: Question[];
  onRestart: () => void;
  durationSeconds: number;
}

function formatDuration(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return m > 0 ? `${m}m ${sec}s` : `${sec}s`;
}

export default function Summary({ answers, questions, onRestart, durationSeconds }: SummaryProps) {
  const score = answers.filter((a) => a.correct).length;
  const total = questions.length;
  const pct = Math.round((score / total) * 100);

  const [saveState, setSaveState] = useState<"saving" | "saved" | "error">("saving");
  const hasSaved = useRef(false);

  useEffect(() => {
    if (hasSaved.current) return;
    hasSaved.current = true;

    fetch("/api/results", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        score,
        total,
        pct,
        durationSeconds,
        answers: answers.map(({ questionId, chosen, correct }) => ({
          questionId,
          chosen,
          correct,
        })),
      }),
    })
      .then((res) => (res.ok ? setSaveState("saved") : setSaveState("error")))
      .catch(() => setSaveState("error"));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let title: string;
  let message: string;
  let ringColor: string;

  if (pct >= 80) {
    title = "Excellent Work! 🎉";
    message = `You scored ${score} out of ${total} (${pct}%). You have a strong command of WCAG 2.2 and WAS topics!`;
    ringColor = "text-emerald-400 border-emerald-500";
  } else if (pct >= 60) {
    title = "Good Progress 📚";
    message = `You scored ${score} out of ${total} (${pct}%). Review the areas below where you missed questions.`;
    ringColor = "text-sky-400 border-sky-500";
  } else {
    title = "Keep Studying 💪";
    message = `You scored ${score} out of ${total} (${pct}%). Focus on reviewing the explanations for missed questions.`;
    ringColor = "text-amber-400 border-amber-500";
  }

  return (
    <section
      className="w-full max-w-2xl mx-auto"
      aria-label="Quiz results"
      aria-live="polite"
      tabIndex={-1}
    >
      <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 shadow-lg">
        {/* Score ring */}
        <div className="flex justify-center mb-6">
          <div
            className={`w-36 h-36 rounded-full border-8 flex flex-col items-center justify-center ${ringColor}`}
            aria-label={`Score: ${score} out of ${total}`}
          >
            <span className="text-4xl font-extrabold leading-none">{score}</span>
            <span className="text-sm text-slate-400 mt-0.5">/ {total}</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white text-center mb-1">{title}</h2>
        <p className="text-slate-400 text-center text-sm mb-2">{message}</p>

        {/* Meta row */}
        <div className="flex items-center justify-center gap-4 text-xs text-slate-500 mb-2">
          <span>⏱ {formatDuration(durationSeconds)}</span>
          {saveState === "saving" && <span className="animate-pulse">Saving…</span>}
          {saveState === "saved" && <span className="text-emerald-400">✓ Result saved</span>}
          {saveState === "error" && <span className="text-red-400">⚠ Could not save result</span>}
        </div>

        {/* History link */}
        <div className="flex justify-center mb-6">
          <Link
            href="/history"
            className="text-xs text-sky-400 underline underline-offset-2 hover:text-sky-300 transition-colors"
          >
            View all past attempts →
          </Link>
        </div>

        {/* Breakdown */}
        <h3 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-3">
          Question Breakdown
        </h3>
        <ul className="flex flex-col gap-2.5 mb-8" role="list">
          {questions.map((q, i) => {
            const ans = answers[i];
            const correct = ans?.correct ?? false;
            return (
              <li
                key={q.id}
                className="flex items-start gap-3 bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-3"
              >
                <span className="text-lg flex-shrink-0 mt-0.5" aria-hidden="true">
                  {correct ? "✅" : "❌"}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white truncate">
                    SC {q.sc} — {q.category}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {correct ? "Correct" : "Incorrect"} · {q.level}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <button
          onClick={onRestart}
          className="w-full py-3 bg-sky-500 hover:bg-sky-400 text-slate-900 font-bold rounded-xl transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          Restart Quiz
        </button>
      </div>
    </section>
  );
}
