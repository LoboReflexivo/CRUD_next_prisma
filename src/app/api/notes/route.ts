import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  try {
    const notes = await prisma.note.findMany();
    return NextResponse.json(notes);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(error.message);
    }
  }
}

export async function POST(request: Request) {
  try {
    const { title, content } = await request.json();

    const newNote = await prisma.note.create({
      data: {
        title: title,
        content: content,
      },
    });

    return NextResponse.json(newNote);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(error.message);
    }
  }
}
