import Link from "next/link";
import Quiz from "@/components/Quiz";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-sky-400 tracking-tight mb-1">
            WAS Exam Study Quiz
          </h1>
          <p className="text-slate-400 text-sm">
            Web Accessibility Specialist · WCAG 2.2 &amp; Body of Knowledge
          </p>
          <Link
            href="/history"
            className="inline-block mt-3 text-xs text-sky-500 hover:text-sky-400 underline underline-offset-2 transition-colors"
          >
            View study history →
          </Link>
        </header>

        <main>
          <Quiz />
        </main>
      </div>
    </div>
  );
}
