"use client";

import { useState, useRef, useEffect } from "react";
import { questions, type Question } from "@/data/questions";
import { prepareQuestions } from "@/lib/shuffle";
import QuizCard from "./QuizCard";
import Summary from "./Summary";
import IntroScreen from "./IntroScreen";

export type AnswerRecord = {
  questionId: number;
  chosen: number;
  correct: boolean;
};

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function Quiz() {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [phase, setPhase] = useState<"intro" | "quiz" | "paused" | "summary">("intro");
  const [elapsed, setElapsed] = useState(0);
  const [confirmingRestart, setConfirmingRestart] = useState(false);
  const startTimeRef = useRef<number>(0);
  const pausedElapsedRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  function startFreshTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    startTimeRef.current = Date.now();
    setElapsed(0);
    timerRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);
  }

  function resumeTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    // Offset start so elapsed continues from where we paused
    startTimeRef.current = Date.now() - pausedElapsedRef.current * 1000;
    timerRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);
  }

  function stopTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function handleStart() {
    setShuffledQuestions(prepareQuestions(questions));
    setCurrentIndex(0);
    setAnswers([]);
    setPhase("quiz");
    startFreshTimer();
  }

  function handlePause() {
    pausedElapsedRef.current = elapsed;
    stopTimer();
    setConfirmingRestart(false);
    setPhase("paused");
  }

  function handleResume() {
    setConfirmingRestart(false);
    setPhase("quiz");
    resumeTimer();
  }

  function handleRestart() {
    stopTimer();
    setShuffledQuestions([]);
    setCurrentIndex(0);
    setAnswers([]);
    setElapsed(0);
    setConfirmingRestart(false);
    setPhase("intro");
  }

  const current = shuffledQuestions[currentIndex];
  const totalQuestions = shuffledQuestions.length;

  function handleAnswer(chosen: number) {
    const correct = chosen === current.correct;
    setAnswers((prev) => [...prev, { questionId: current.id, chosen, correct }]);
  }

  function handleNext() {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      stopTimer();
      setPhase("summary");
    }
  }

  function handleBack() {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  }

  const currentAnswer = answers.find((a) => a.questionId === current?.id);

  if (phase === "intro") {
    return <IntroScreen totalInBank={questions.length} onStart={handleStart} />;
  }

  if (phase === "summary") {
    return (
      <Summary
        answers={answers}
        questions={shuffledQuestions}
        onRestart={handleRestart}
        durationSeconds={elapsed}
      />
    );
  }

  if (shuffledQuestions.length === 0) {
    return (
      <div className="w-full max-w-2xl mx-auto text-center py-20 text-slate-400">
        Loading quiz…
      </div>
    );
  }

  const isPaused = phase === "paused";
  const correctCount = answers.filter((a) => a.correct).length;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-sky-400">
            Question {currentIndex + 1} of {totalQuestions}
            <span className="text-slate-500 mx-1.5">·</span>
            <span className="text-slate-400">{correctCount} correct</span>
          </span>

          <div className="flex items-center gap-2">
            {/* Pause / Resume — only show in header when actively quizzing */}
            {!isPaused && (
              <button
                onClick={handlePause}
                className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label="Pause quiz"
              >
                ⏸ Pause
              </button>
            )}

            {/* Restart — pauses first, then shows confirm in the pause screen */}
            {!isPaused && (
              <button
                onClick={() => { handlePause(); setConfirmingRestart(true); }}
                className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label="Restart quiz"
              >
                ↺ Restart
              </button>
            )}

            {/* Timer */}
            <span
              className={`text-sm font-mono tabular-nums ${isPaused ? "text-amber-400" : "text-slate-400"}`}
              aria-label={`Elapsed time: ${formatTime(isPaused ? pausedElapsedRef.current : elapsed)}`}
            >
              ⏱ {formatTime(isPaused ? pausedElapsedRef.current : elapsed)}
            </span>
          </div>
        </div>

        <div
          className="h-2 bg-slate-700 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={Math.round((currentIndex / totalQuestions) * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Quiz progress: question ${currentIndex + 1} of ${totalQuestions}`}
        >
          <div
            className="h-full bg-sky-400 rounded-full transition-all duration-500"
            style={{ width: `${(currentIndex / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Pause screen */}
      {isPaused ? (
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 shadow-lg text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 text-2xl mb-5">
            ⏸
          </div>

          <h2 className="text-xl font-bold text-white mb-1">Quiz Paused</h2>
          <p className="text-slate-400 text-sm mb-1">
            Question {currentIndex + 1} of {totalQuestions} &middot; {correctCount} correct
          </p>
          <p className="text-amber-400 font-mono text-sm mb-8">
            ⏱ {formatTime(pausedElapsedRef.current)}
          </p>

          {confirmingRestart ? (
            <div>
              <p className="text-slate-300 text-sm mb-5">
                This will discard your current progress and return to the start screen. Are you sure?
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setConfirmingRestart(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleRestart}
                  className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                  autoFocus
                >
                  Yes, restart
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleResume}
                className="px-8 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-900 font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                autoFocus
              >
                ▶ Resume Quiz
              </button>
              <button
                onClick={() => setConfirmingRestart(true)}
                className="px-8 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-300 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                ↺ Restart
              </button>
            </div>
          )}
        </div>
      ) : (
        <QuizCard
          question={current}
          answer={currentAnswer}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onBack={handleBack}
          isLast={currentIndex === totalQuestions - 1}
          isFirst={currentIndex === 0}
        />
      )}
    </div>
  );
}

