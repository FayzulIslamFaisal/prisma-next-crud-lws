import { prismaDb } from "@/app/libs/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title, description, type, content } = await req.json();
    if (!title) return new NextResponse("Title is required", { status: 400 });
    if (!description)
      return new NextResponse("Description is required", { status: 400 });
    if (!type) return new NextResponse("Type is required", { status: 400 });
    if (!content)
      return new NextResponse("Content is required", { status: 400 });

    const newEntry = await prismaDb.Pin.create({
      data: { title, description, type, content },
    });

    return NextResponse.json(newEntry, { status: 201 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
