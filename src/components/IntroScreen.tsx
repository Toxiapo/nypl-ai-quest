"use client";

import { useState } from "react";
import { DEFAULT_QUIZ_SIZE } from "@/lib/shuffle";

const FEATURES = [
  { icon: "⏱️", label: "Timed — track how long you take" },
  { icon: "💡", label: "Instant explanations after each answer" },
  { icon: "⬅️", label: "Go back and review previous questions" },
  { icon: "📊", label: "Score summary at the end" },
];

const TOPICS = ["WCAG 2.2", "WAI-ARIA", "ATAG 2.0", "Testing Methodology", "Laws & Standards"];

const SIZE_OPTIONS = [10, 20, 30, 50] as const;

interface IntroScreenProps {
  totalInBank: number;
  onStart: (size: number) => void;
}

export default function IntroScreen({ totalInBank, onStart }: IntroScreenProps) {
  const [quizSize, setQuizSize] = useState<number>(DEFAULT_QUIZ_SIZE);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Hero card */}
      <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 shadow-lg text-center mb-5">
        {/* Badge */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-500/10 border border-sky-500/30 text-3xl mb-5">
          ♿
        </div>

        <h2 className="text-2xl font-extrabold text-white mb-2 leading-tight">
          WAS Exam Study Quiz
        </h2>
        <p className="text-slate-400 text-sm mb-6 max-w-sm mx-auto leading-relaxed">
          Practice questions covering WCAG 2.2, WAI-ARIA, and the full WAS Body of Knowledge.
          Draws from a bank of {totalInBank} randomized questions.
        </p>

        {/* Topic pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-7">
          {TOPICS.map((t) => (
            <span
              key={t}
              className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-700 border border-slate-600 text-sky-400"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Quiz length selector */}
        <fieldset className="mb-7">
          <legend className="text-sm font-semibold text-slate-300 mb-3">
            Questions per session
          </legend>
          <div className="flex flex-wrap justify-center gap-2" role="group">
            {SIZE_OPTIONS.map((n) => {
              const isSelected = quizSize === n;
              return (
                <button
                  key={n}
                  type="button"
                  onClick={() => setQuizSize(n)}
                  aria-pressed={isSelected}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
                    isSelected
                      ? "bg-sky-500 border-sky-500 text-slate-900"
                      : "bg-slate-700 border-slate-600 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  {n}
                  {n === DEFAULT_QUIZ_SIZE && (
                    <span className="ml-1.5 text-xs opacity-70">(default)</span>
                  )}
                </button>
              );
            })}
            {/* "All" option */}
            <button
              type="button"
              onClick={() => setQuizSize(totalInBank)}
              aria-pressed={quizSize === totalInBank}
              className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
                quizSize === totalInBank
                  ? "bg-sky-500 border-sky-500 text-slate-900"
                  : "bg-slate-700 border-slate-600 text-slate-300 hover:bg-slate-600"
              }`}
            >
              All ({totalInBank})
            </button>
          </div>
        </fieldset>

        {/* Start button */}
        <button
          onClick={() => onStart(quizSize)}
          className="w-full sm:w-auto px-10 py-3.5 bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-slate-900 font-bold text-base rounded-xl transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          autoFocus
        >
          Start {quizSize === totalInBank ? "All" : quizSize} Questions →
        </button>
      </div>

      {/* Feature list */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {FEATURES.map((f) => (
          <li
            key={f.label}
            className="flex items-center gap-3 bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-300"
          >
            <span className="text-lg flex-shrink-0" aria-hidden="true">{f.icon}</span>
            {f.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
