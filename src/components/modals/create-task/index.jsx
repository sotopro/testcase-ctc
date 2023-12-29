"use client";

import styles from "./index.module.css";
export default function CreateTaskModal(props) {
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const title = data.get("title");
    const description = data.get("description");
    const date = data.get("date");
    const completed = data.get("completed");
    const important = data.get("important");
    const task = {
      title,
      description,
      date,
      completed: completed === "on" ? true : false,
      important: important === "on" ? true : false,
    };

    const response = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
  };
  return (
    <div className={styles.createTask}>
      <h2>Create Task</h2>
      <form onSubmit={onHandleSubmit}>
        <div className={styles.inputControl}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="buy some milk"
          />
        </div>
        <div className={styles.inputControl}>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="go to the store and buy some milk"
          />
        </div>
        <div className={styles.inputControl}>
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" />
        </div>
        <div className={styles.inputControl}>
          <label htmlFor="completed">Toggle Completed</label>
          <input type="checkbox" name="completed" id="completed" />
        </div>
        <div className={styles.inputControl}>
          <label htmlFor="important">Toggle Important</label>
          <input type="checkbox" name="important" id="important" />
        </div>
        <button type="submit" className={styles.submitButton}>
          Create
        </button>
      </form>
    </div>
  );
}
