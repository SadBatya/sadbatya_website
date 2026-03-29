import { NextResponse } from "next/server";
import { prisma } from "@/shared/lib";

export async function GET() {
  try {
    const tests = await prisma.testCard.findMany({
      where: { isPublished: true },
      orderBy: { id: "asc" },
    });

    return NextResponse.json(tests, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Failed to fetch tests" },
      { status: 500 }
    );
  }
}
