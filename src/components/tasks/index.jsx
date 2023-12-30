"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import Cards from "../cards";
import CreateTaskModal from "../modals/create-task";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { Modal } from "../modals";
import { createPortal } from "react-dom";

function Tasks() {
  const [value, setValue] = useLocalStorage("tasks", []);
  const [isShowModal, setIsShowModal] = useState(false);
  const [task, setTask] = useState(null);

  const onHandleModal = () => {
    setTask(null);
    setIsShowModal(!isShowModal);
  };

  const onHandleDelete = (id) => {
    const newValue = value.filter((task) => task.id !== id);
    setValue(newValue);
  };

  const onCreateTask = (task) => {
    if (!value) {
      setValue([task]);
      return;
    }

    setValue([...value, task]);
  };

  const onCompleteTask = (id) => {
    const newValue = value.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setValue(newValue);
    setTask(null);
  };

  return (
    <div className={styles.tasksContainer}>
      <h1>Tasks</h1>
      <div className={styles.tasksList}>
        {value &&
          value.length > 0 &&
          value.map((task) => (
            <Cards
              key={task.id}
              {...task}
              onDelete={onHandleDelete}
              onComplete={onCompleteTask}
            />
          ))}
        <Cards type="new" onClick={onHandleModal} />
      </div>
      {isShowModal &&
        createPortal(
          <Modal onClose={onHandleModal}>
            <CreateTaskModal
              onClose={onHandleModal}
              onDelete={onHandleDelete}
              task={task}
              onCreateTask={onCreateTask}
            />
          </Modal>,
          document.body
        )}
    </div>
  );
}

export default Tasks;
