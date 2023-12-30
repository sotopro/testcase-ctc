"use client";

import styles from "./index.module.css";

export default function CreateTaskModal({ onClose, onCreateTask }) {
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const title = data.get("title");
    const description = data.get("description");
    const date = data.get("date");
    const completed = data.get("isCompleted");
    const important = data.get("isImportant");
    const task = {
      id: Date.now().toString(),
      title,
      description,
      date,
      isCompleted: completed === "on" ? true : false,
      isImportant: important === "on" ? true : false,
    };
    onCreateTask(task);
    onClose();
  };

  return (
    <div className={styles.createTask}>
      <h2>Create Task</h2>
      <form className={styles.formContainer} onSubmit={onHandleSubmit}>
        <div className={styles.inputControl}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="buy some milk"
            maxLength={50}
            pattern="^[a-zA-Z0-9 ]+$"
            required
            minLength={3}
            title="Please enter a valid title"
          />
        </div>
        <div className={styles.inputControl}>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="go to the store and buy some milk"
            maxLength={200}
            pattern="^[a-zA-Z0-9 ]+$"
            required
            title="Please enter a valid description"
            minLength={3}
          />
        </div>
        <div className={styles.inputControl}>
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" required />
        </div>
        <div className={styles.inputControlRow}>
          <label htmlFor="isCompleted">Toggle Completed</label>
          <input type="checkbox" name="isCompleted" id="isCompleted" />
        </div>
        <div className={styles.inputControlRow}>
          <label htmlFor="isImportant">Toggle Important</label>
          <input type="checkbox" name="isImportant" id="isImportant" />
        </div>
        <button type="submit" className={styles.submitButton}>
          Create Task
        </button>
      </form>
    </div>
  );
}
