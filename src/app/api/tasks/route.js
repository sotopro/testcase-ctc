import { setStorage } from "@/utils/storage";
import { NextRespose } from "next/server";

export async function POST(req) {
  try {
    const { title, description, date, completed, important } = await req.json();

    if (!title || !description || !date) {
      return NextRespose.json({
        error: "Missing is required",
        status: 400,
      });
    }

    if (title.length > 3) {
      return NextRespose.json({
        error: "Title must be at least 3 characters long",
        status: 400,
      });
    }

    const task = {
      id: Date.now(),
      title,
      description,
      date,
      completed: completed || false,
      important: important || false,
    };

    const response = await setStorage("tasks", task);

    return NextRespose.json({
      data: response,
      status: 201,
    });
  } catch (error) {
    console.error("Error creating task", error);
    return NextRespose.json({
      error: "Error creating task",
      status: 500,
    });
  }
}
