import { prismaDb } from "@/app/libs/db";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { pinId } = await params;

    if (!pinId) {
      return new NextResponse(
        { message: "Pin ID not provided", status: 404 },
        { status: 404 }
      );
    }

    const deletePin = await prismaDb.Pin.delete({
      where: {
        id: parseInt(pinId),
      },
    });

    return NextResponse.json(
      {
        message: "Pin deleted successfully",
        status: 200,
        result: deletePin,
      },
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
