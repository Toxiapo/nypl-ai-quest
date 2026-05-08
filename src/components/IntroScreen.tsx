"use client";

const FEATURES = [
  { icon: "🎲", label: "20 randomized questions per session" },
  { icon: "⏱️", label: "Timed — track how long you take" },
  { icon: "💡", label: "Instant explanations after each answer" },
  { icon: "⬅️", label: "Go back and review previous questions" },
  { icon: "📊", label: "Score summary at the end" },
];

const TOPICS = ["WCAG 2.2", "WAI-ARIA", "ATAG 2.0", "Testing Methodology", "Laws & Standards"];

interface IntroScreenProps {
  totalInBank: number;
  onStart: () => void;
}

export default function IntroScreen({ totalInBank, onStart }: IntroScreenProps) {
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
          Each session draws 20 randomized questions from a bank of {totalInBank}.
        </p>

        {/* Topic pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {TOPICS.map((t) => (
            <span
              key={t}
              className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-700 border border-slate-600 text-sky-400"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Start button */}
        <button
          onClick={onStart}
          className="w-full sm:w-auto px-10 py-3.5 bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-slate-900 font-bold text-base rounded-xl transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          autoFocus
        >
          Start Quiz →
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
