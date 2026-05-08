import { NextRequest, NextResponse } from "next/server";
import { getAllResults, saveResult } from "@/lib/db";

export async function GET() {
  try {
    const results = getAllResults();
    return NextResponse.json(results);
  } catch {
    return NextResponse.json(
      { error: "Failed to read results" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { score, total, pct, durationSeconds, answers } = body;

    if (
      typeof score !== "number" ||
      typeof total !== "number" ||
      typeof pct !== "number" ||
      typeof durationSeconds !== "number" ||
      !Array.isArray(answers)
    ) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const result = saveResult({ score, total, pct, durationSeconds, answers });
    return NextResponse.json(result, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to save result" },
      { status: 500 }
    );
  }
}
