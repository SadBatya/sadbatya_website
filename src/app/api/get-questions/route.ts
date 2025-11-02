import { NextResponse, NextRequest } from "next/server";
import { prisma, type Level } from "@/shared/lib";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") as string;
  const level = searchParams.get("level") as Level;
  const take = searchParams.get("take");
  const randomSkip = Math.floor(Math.random() * Number(take));

  if (!title || !level || !take) {
    return NextResponse.json(
      { message: "Title and level and count are required" },
      { status: 400 }
    );
  }

  try {
    const questions = await prisma.question.findMany({
      where: {
        level,
        testPage: {
          title,
        },
      },
      take: Number(take),
      // skip: randomSkip,
      include: {
        testPage: {
          select: { title: true },
        },
        answers: true,
      },
    });

    if (!questions) {
      return NextResponse.json(
        {
          message: "Current questions not found",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(questions, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Failed to fetch test" },
      { status: 500 }
    );
  }
}
