# WAS Exam Study Quiz

An interactive multiple-choice quiz app for studying the **Web Accessibility Specialist (WAS)** exam — covering WCAG 2.2 Success Criteria, WAI-ARIA, ATAG, and the WAS Body of Knowledge.

## Features

- 34 questions across all three WAS exam domains, including all 7 new WCAG 2.2 success criteria
- One question at a time with A–D answer choices
- Instant explanation after each answer with correct/incorrect highlighting
- Score summary with per-question breakdown and completion time
- Study history persisted to the local filesystem (no external database)
- `/history` page with aggregate stats and a **Focus Areas** panel showing which topics you miss most often

## Architecture

```
Filesystem (data/results.json)
  └── Persists quiz attempts as JSON — no third-party database

src/lib/db.ts                  Server-only utility
  ├── getAllResults()           Reads results.json from disk
  └── saveResult()             Appends a new attempt, writes back to disk

src/app/api/results/
  └── route.ts                 REST API
        GET  /api/results      Returns all stored attempts
        POST /api/results      Validates and saves a new attempt

src/app/
  ├── page.tsx                 Home — renders the Quiz client component
  └── history/page.tsx         Server Component — reads disk directly,
                               renders stats, focus areas, and attempt list

src/components/
  ├── Quiz.tsx                 Manages quiz state + duration tracking
  ├── QuizCard.tsx             Renders one question, options, and explanation
  └── Summary.tsx              POSTs result on mount, links to /history

src/data/questions.ts          All 34 questions with options and explanations
```

**Data flow:**
1. User completes quiz → `Summary` POSTs to `POST /api/results`
2. API handler calls `saveResult()` → written to `data/results.json`
3. Visiting `/history` → Next.js Server Component calls `getAllResults()` directly from disk and renders server-side

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to take the quiz, and [http://localhost:3000/history](http://localhost:3000/history) to view your study history.

> `data/results.json` is created automatically on first quiz completion and is gitignored — it is local runtime data only.
