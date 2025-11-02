import { NextRequest, NextResponse } from "next/server";
import { prisma, type Level } from "@/shared/lib";


export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') as string;
  const level = searchParams.get('level') as Level;

  if (!title || !level) {
    return NextResponse.json(
      { message: "Title and level are required" },
      { status: 400 }
    );
  }
  
  try {
    const test = await prisma.testAbout.findFirst({
      where: {
        level,
        testPage: {
          title,
        }
      },
      include: {
        testPage: {
          select: {title: true}
        }
      }
    });
    console.log(test, 'test')

    if (!test) {
      return NextResponse.json(
        { message: "Test about not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(test, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Failed to fetch test" },
      { status: 500 }
    );
  }
}
