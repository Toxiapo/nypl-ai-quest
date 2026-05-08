"use client";

import { useState, useRef } from "react";
import { questions } from "@/data/questions";
import { prepareQuestions } from "@/lib/shuffle";
import QuizCard from "./QuizCard";
import Summary from "./Summary";

export type AnswerRecord = {
  questionId: number;
  chosen: number;
  correct: boolean;
};

export default function Quiz() {
  const [shuffledQuestions, setShuffledQuestions] = useState(() =>
    prepareQuestions(questions)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [phase, setPhase] = useState<"quiz" | "summary">("quiz");
  const startTimeRef = useRef<number>(Date.now());

  const current = shuffledQuestions[currentIndex];
  const totalQuestions = shuffledQuestions.length;

  function handleAnswer(chosen: number) {
    const correct = chosen === current.correct;
    setAnswers((prev) => [
      ...prev,
      { questionId: current.id, chosen, correct },
    ]);
  }

  function handleNext() {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setPhase("summary");
    }
  }

  function handleRestart() {
    setShuffledQuestions(prepareQuestions(questions));
    setCurrentIndex(0);
    setAnswers([]);
    setPhase("quiz");
    startTimeRef.current = Date.now();
  }

  const currentAnswer = answers.find((a) => a.questionId === current.id);

  if (phase === "summary") {
    const durationSeconds = Math.round((Date.now() - startTimeRef.current) / 1000);
    return (
      <Summary
        answers={answers}
        questions={shuffledQuestions}
        onRestart={handleRestart}
        durationSeconds={durationSeconds}
      />
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-sky-400">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span className="text-sm text-slate-400">
            {answers.filter((a) => a.correct).length} correct
          </span>
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

      <QuizCard
        question={current}
        answer={currentAnswer}
        onAnswer={handleAnswer}
        onNext={handleNext}
        isLast={currentIndex === totalQuestions - 1}
      />
    </div>
  );
}
