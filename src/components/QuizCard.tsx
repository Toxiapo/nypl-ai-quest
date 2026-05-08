"use client";

import { type Question } from "@/data/questions";
import { type AnswerRecord } from "./Quiz";

const LETTERS = ["A", "B", "C", "D"];

interface QuizCardProps {
  question: Question;
  answer: AnswerRecord | undefined;
  onAnswer: (chosen: number) => void;
  onNext: () => void;
  onBack: () => void;
  isLast: boolean;
  isFirst: boolean;
}

export default function QuizCard({ question, answer, onAnswer, onNext, onBack, isLast, isFirst }: QuizCardProps) {
  const hasAnswered = answer !== undefined;

  function getButtonClass(index: number): string {
    const base =
      "w-full flex items-start gap-3 text-left px-4 py-3.5 rounded-xl border-2 text-sm leading-relaxed transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

    if (!hasAnswered) {
      return `${base} bg-slate-800 border-slate-600 text-slate-200 hover:border-sky-400 hover:bg-slate-700 cursor-pointer`;
    }

    if (index === question.correct) {
      return `${base} bg-emerald-950 border-emerald-500 text-emerald-200 cursor-default`;
    }

    if (answer.chosen === index) {
      return `${base} bg-red-950 border-red-500 text-red-200 cursor-default`;
    }

    return `${base} bg-slate-800 border-slate-700 text-slate-500 cursor-default`;
  }

  function getLetterClass(index: number): string {
    const base = "font-bold text-base flex-shrink-0 w-5 mt-0.5";
    if (!hasAnswered) return `${base} text-sky-400`;
    if (index === question.correct) return `${base} text-emerald-400`;
    if (answer?.chosen === index) return `${base} text-red-400`;
    return `${base} text-slate-600`;
  }

  return (
    <article className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 shadow-lg">
      {/* Meta tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-700 text-sky-400 border border-slate-600">
          {question.category}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-700 text-slate-300 border border-slate-600">
          SC {question.sc}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-700 text-slate-300 border border-slate-600">
          {question.level}
        </span>
      </div>

      {/* Question */}
      <p className="text-lg font-semibold text-white mb-5 leading-snug">
        {question.question}
      </p>

      {/* Options */}
      <ul className="flex flex-col gap-3" role="list">
        {question.options.map((opt, i) => (
          <li key={i}>
            <button
              className={getButtonClass(i)}
              onClick={() => !hasAnswered && onAnswer(i)}
              disabled={hasAnswered}
              aria-pressed={hasAnswered ? answer.chosen === i : undefined}
              aria-label={`Option ${LETTERS[i]}: ${opt}${
                hasAnswered && i === question.correct ? " — Correct answer" : ""
              }${hasAnswered && answer.chosen === i && !answer.correct ? " — Your incorrect answer" : ""}`}
            >
              <span className={getLetterClass(i)} aria-hidden="true">
                {LETTERS[i]}
              </span>
              <span>{opt}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Explanation */}
      {hasAnswered && (
        <div
          className="mt-5 rounded-xl border border-slate-600 bg-slate-900/70 p-4"
          aria-live="polite"
        >
          {/* Verdict */}
          <div className="flex items-center gap-2 mb-3">
            {answer.correct ? (
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-400 bg-emerald-950 border border-emerald-700 px-3 py-1 rounded-full">
                <span aria-hidden="true">✓</span> Correct
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-red-400 bg-red-950 border border-red-700 px-3 py-1 rounded-full">
                <span aria-hidden="true">✗</span> Incorrect
              </span>
            )}
          </div>

          <p className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-1.5">
            Explanation
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}

      {/* Navigation buttons */}
      <div className={`mt-5 flex gap-3 ${hasAnswered ? "" : "justify-start"}`}>
        {!isFirst && (
          <button
            onClick={onBack}
            className="flex-none py-3 px-5 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold rounded-xl transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            aria-label="Go to previous question"
          >
            ← Previous
          </button>
        )}
        {hasAnswered && (
          <button
            onClick={onNext}
            className="flex-1 py-3 bg-sky-500 hover:bg-sky-400 text-slate-900 font-bold rounded-xl transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            aria-label={isLast ? "See your results" : "Go to next question"}
          >
            {isLast ? "See Results →" : "Next Question →"}
          </button>
        )}
      </div>
    </article>
  );
}
