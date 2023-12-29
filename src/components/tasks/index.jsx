import CreateTaskModal from "../modals/create-task";
import styles from "./index.module.css";

function Tasks() {
  return (
    <div className={styles.tasksContainer}>
      <h1>Tasks</h1>
      <CreateTaskModal />
    </div>
  );
}

export default Tasks;
