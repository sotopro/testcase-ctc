"use client";
import Tasks from "@/components/tasks";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Tasks />
    </main>
  );
}
