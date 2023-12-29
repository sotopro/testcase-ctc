import {
  getStorage,
  removeStorage,
  setStorage,
  updateStorage,
} from "@/utils/storage";
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

export async function GET(req) {
  try {
    const response = await getStorage("tasks", []);

    return NextRespose.json({
      data: response,
      status: 200,
    });
  } catch (error) {
    console.error("Error getting tasks", error);
    return NextRespose.json({
      error: "Error getting tasks",
      status: 500,
    });
  }
}

export async function PUT(req) {
  try {
    const { id, title, description, date, completed, important } =
      await req.json();

    if (!id || !title || !description || !date) {
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
      id,
      title,
      description,
      date,
      completed: completed || false,
      important: important || false,
    };

    const response = await updateStorage("tasks", id, task);

    return NextRespose.json({
      data: response,
      status: 201,
    });
  } catch (error) {
    console.error("Error updating task", error);
    return NextRespose.json({
      error: "Error updating task",
      status: 500,
    });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextRespose.json({
        error: "Missing is required",
        status: 400,
      });
    }

    const response = await removeStorage("tasks", id);

    return NextRespose.json({
      data: response,
      status: 201,
    });
  } catch (error) {
    console.error("Error deleting task", error);
    return NextRespose.json({
      error: "Error deleting task",
      status: 500,
    });
  }
}
