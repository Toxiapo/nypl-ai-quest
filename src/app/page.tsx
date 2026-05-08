import Link from "next/link";
import Quiz from "@/components/Quiz";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="text-right mb-6">
          <Link
            href="/history"
            className="text-xs text-sky-500 hover:text-sky-400 underline underline-offset-2 transition-colors"
          >
            View study history →
          </Link>
        </div>

        <main>
          <Quiz />
        </main>
      </div>
    </div>
  );
}
