import styles from "./index.module.css";

function Cards({
  title,
  description,
  date,
  isCompleted,
  isImportant,
  type = "task",
  onClick,
  onDelete,
  id,
}) {
  if (type !== "task") {
    return (
      <div className={`${styles.card} ${styles.new}`} onClick={() => onClick()}>
        <div className={styles.add}>+</div>
        <p className={styles.newTask}>New Task</p>
      </div>
    );
  }
  return (
    <div className={styles.card}>
      <div className={styles.delete} onClick={() => onDelete(id)}>
        X
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.date}>{date}</p>
      <div className={styles.footer}>
        {isCompleted ? (
          <button className={styles.completed}>Completed</button>
        ) : (
          <button className={styles.incomplete}>Incomplete</button>
        )}
        <button className={styles.edit}>Edit</button>
      </div>
    </div>
  );
}

export default Cards;
