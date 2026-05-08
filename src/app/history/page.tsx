import Link from "next/link";
import { getAllResults, type QuizResult } from "@/lib/db";
import { questions } from "@/data/questions";

export const dynamic = "force-dynamic"; // always read fresh data from disk

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatDuration(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return m > 0 ? `${m}m ${sec}s` : `${sec}s`;
}

function pctColor(pct: number): string {
  if (pct >= 80) return "text-emerald-400";
  if (pct >= 60) return "text-sky-400";
  return "text-amber-400";
}

interface WeakTopic {
  sc: string;
  category: string;
  incorrectCount: number;
  totalAttempts: number;
  incorrectRate: number;
}

function computeWeakTopics(results: QuizResult[]): WeakTopic[] {
  return questions
    .map((q) => {
      const attempted = results.filter((r) =>
        r.answers.some((a) => a.questionId === q.id)
      );
      const incorrectCount = attempted.reduce((sum, r) => {
        const a = r.answers.find((a) => a.questionId === q.id);
        return sum + (a && !a.correct ? 1 : 0);
      }, 0);
      return {
        sc: q.sc,
        category: q.category,
        incorrectCount,
        totalAttempts: attempted.length,
        incorrectRate: attempted.length > 0 ? incorrectCount / attempted.length : 0,
      };
    })
    .filter((t) => t.incorrectCount > 0)
    .sort((a, b) => b.incorrectRate - a.incorrectRate)
    .slice(0, 5);
}

export default function HistoryPage() {
  const results = getAllResults();

  const totalAttempts = results.length;
  const avgScore =
    totalAttempts > 0
      ? Math.round(results.reduce((s, r) => s + r.pct, 0) / totalAttempts)
      : 0;
  const bestScore =
    totalAttempts > 0 ? Math.max(...results.map((r) => r.pct)) : 0;
  const weakTopics = computeWeakTopics(results);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-extrabold text-sky-400 tracking-tight">
              Study History
            </h1>
            <p className="text-slate-400 text-sm mt-0.5">
              All past quiz attempts
            </p>
          </div>
          <Link
            href="/"
            className="text-sm text-sky-400 border border-sky-700 px-3 py-1.5 rounded-lg hover:bg-sky-900/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            ← Back to Quiz
          </Link>
        </header>

        {totalAttempts === 0 ? (
          <div className="text-center py-24 text-slate-500">
            <p className="text-4xl mb-3" aria-hidden="true">📋</p>
            <p className="text-lg font-semibold text-slate-400">No attempts yet</p>
            <p className="text-sm mt-1">
              Complete your first quiz to see your history here.
            </p>
            <Link
              href="/"
              className="inline-block mt-6 px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-900 font-bold rounded-xl transition-colors"
            >
              Start Quiz
            </Link>
          </div>
        ) : (
          <>
            {/* Aggregate stats */}
            <section aria-labelledby="stats-heading" className="mb-8">
              <h2
                id="stats-heading"
                className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-3"
              >
                Overall Stats
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Attempts", value: totalAttempts },
                  { label: "Avg Score", value: `${avgScore}%` },
                  { label: "Best Score", value: `${bestScore}%` },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-center"
                  >
                    <p className="text-2xl font-extrabold text-white">{value}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Weak topics */}
            {weakTopics.length > 0 && (
              <section aria-labelledby="weak-heading" className="mb-8">
                <h2
                  id="weak-heading"
                  className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3"
                >
                  Focus Areas (most missed)
                </h2>
                <ul className="flex flex-col gap-2" role="list">
                  {weakTopics.map((t) => (
                    <li
                      key={t.sc}
                      className="flex items-center justify-between bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3"
                    >
                      <div>
                        <p className="text-sm font-semibold text-white">
                          SC {t.sc}
                        </p>
                        <p className="text-xs text-slate-400">{t.category}</p>
                      </div>
                      <span className="text-sm font-bold text-amber-400 flex-shrink-0 ml-4">
                        {Math.round(t.incorrectRate * 100)}% wrong
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Attempt list */}
            <section aria-labelledby="attempts-heading">
              <h2
                id="attempts-heading"
                className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-3"
              >
                All Attempts ({totalAttempts})
              </h2>
              <ul className="flex flex-col gap-3" role="list">
                {results.map((r, i) => (
                  <li
                    key={r.id}
                    className="bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 flex items-center gap-4"
                  >
                    <span className="text-slate-600 text-sm font-mono w-6 flex-shrink-0 text-right">
                      {totalAttempts - i}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white">
                        {formatDate(r.date)}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {r.score}/{r.total} correct · {formatDuration(r.durationSeconds)}
                      </p>
                    </div>
                    <span
                      className={`text-lg font-extrabold flex-shrink-0 ${pctColor(r.pct)}`}
                      aria-label={`${r.pct} percent`}
                    >
                      {r.pct}%
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
