import { NextResponse } from "next/server";
import { prismaDb } from "@/app/libs/db";

export async function GET() {
  try {
    const pins = await prismaDb.pin.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return NextResponse.json(pins, { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
