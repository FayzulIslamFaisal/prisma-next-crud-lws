"use server";

import { prismaDb } from "@/app/libs/db";
import { revalidatePath } from "next/cache";

export async function CreatePins(formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const type = formData.get("type");
  const content = formData.get("content");

  if (!title || !description || !type || !content) {
    console.log("All fields are required!");
    return;
  }

  try {
    await prismaDb.Pin.create({
      data: { title, description, type, content },
    });
    revalidatePath("/");
    console.log("Pin created successfully!");
  } catch (error) {
    console.error("Error in CreatePin:", error);
  }
}
