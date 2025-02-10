import { prismaDb } from "@/app/libs/db";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    const { pinId } = await params;
    console.log("Edit pinId...", pinId);
    if (!pinId) {
      return new NextResponse("Not Found", { status: 404 });
    }
    const { title, description, type, content } = await req.json();

    const updatePin = await prismaDb.Pin.update({
      where: {
        id: parseInt(pinId),
      },
      data: {
        title,
        description,
        type,
        content,
      },
    });
    console.log("updatePin", updatePin);

    return NextResponse.json(updatePin, { status: 200 });
  } catch (error) {
    // console.error("Update Pin", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
